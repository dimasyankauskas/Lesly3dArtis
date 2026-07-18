#!/usr/bin/env python3
"""Validate repo-local skill ownership and public case-study preservation."""

from __future__ import annotations

import json
import hashlib
import re
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SKILL_REGISTRY = ROOT / "registry" / "skills.json"
CASE_REGISTRY = ROOT / "registry" / "portfolio-cases.json"
ALLOWED_INVOCATIONS = {"auto", "supporting", "explicit"}
ALLOWED_FRONTMATTER = {"name", "description"}
LOCKED_CASE_CONTRACT = {
    "game-hero": (True, 2),
    "character-environment": (True, 2),
    "interior-props": (True, 1),
    "ai-visual-pipeline": (True, 1),
    "santa-cruz-ai-visual-pipeline": (True, 1),
    "construction-client-progress-workflow": (True, 1),
    "print-startup-direction": (True, 1),
    "sculpt-to-retopo": (True, 1),
    "avatar-character": (True, 1),
    "mascot-character": (True, 1),
    "outfits-accessories": (True, 2),
    "pbr-texturing": (True, 2),
    "original-site-concept": (True, 2),
}


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def parse_frontmatter(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8")
    match = re.match(r"^---\n(.*?)\n---", text, re.DOTALL)
    if not match:
        raise ValueError("missing YAML frontmatter")
    values: dict[str, str] = {}
    for raw_line in match.group(1).splitlines():
        if not raw_line.strip():
            continue
        if raw_line.startswith((" ", "\t", "-")) or ":" not in raw_line:
            raise ValueError(f"unsupported frontmatter line: {raw_line}")
        key, value = raw_line.split(":", 1)
        values[key.strip()] = value.strip()
    return values


def load_rendered_cases() -> list[dict]:
    node_program = r"""
const fs=require('fs');
const vm=require('vm');
const source=fs.readFileSync('case-study.js','utf8');
const boundary=source.indexOf('const fallbackStudy=');
if(boundary<0)throw new Error('case-study data boundary not found');
const sandbox={};
vm.runInNewContext(source.slice(0,boundary)+'\nglobalThis.__cases=CASE_STUDIES;',sandbox,{filename:'case-study.js'});
const output=sandbox.__cases.map(item=>({
  id:item.id,
  title:item.title,
  hero:item.hero?.src||null,
  gallery:(item.gallery||[]).map(media=>media.src||media[0]).filter(Boolean)
}));
process.stdout.write(JSON.stringify(output));
"""
    result = subprocess.run(
        ["node", "-e", node_program],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(result.stdout)


def clean_asset_path(value: str) -> str:
    return value.split("?", 1)[0].split("#", 1)[0]


def file_digest(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def homepage_cards() -> list[tuple[str, str | None]]:
    text = (ROOT / "index.html").read_text(encoding="utf-8")
    pattern = re.compile(
        r'<a\b(?=[^>]*class="[^"]*\bwork-card\b)[^>]*'
        r'href="case-study\.html\?id=([^"]+)"[^>]*>(.*?)</a>',
        re.DOTALL,
    )
    cards: list[tuple[str, str | None]] = []
    for case_id, body in pattern.findall(text):
        image_match = re.search(r'<img\b[^>]*src="([^"]+)"', body)
        cards.append((case_id, image_match.group(1) if image_match else None))
    return cards


def validate() -> list[str]:
    failures: list[str] = []

    skill_data = load_json(SKILL_REGISTRY)
    entries = skill_data.get("skills", [])
    names = [entry.get("name") for entry in entries]
    paths = [entry.get("path") for entry in entries]
    jobs = [entry.get("job") for entry in entries]
    owners = [entry.get("owner") for entry in entries]

    for label, values in (("skill name", names), ("skill path", paths), ("job", jobs), ("owner", owners)):
        if len(values) != len(set(values)):
            failures.append(f"Duplicate {label} in registry")

    active_dirs = {
        path.parent.name
        for path in (ROOT / ".agents" / "skills").glob("*/SKILL.md")
    }
    if set(names) != active_dirs:
        failures.append(
            "Skill registry does not match .agents/skills: "
            f"registry={sorted(names)} disk={sorted(active_dirs)}"
        )

    stale_mirror_files = list((ROOT / ".codex" / "skills").glob("**/*"))
    stale_mirror_files = [path for path in stale_mirror_files if path.is_file()]
    if stale_mirror_files:
        failures.append("Legacy .codex/skills mirror still contains files")

    for entry in entries:
        name = entry.get("name", "")
        expected_path = f".agents/skills/{name}/SKILL.md"
        if entry.get("path") != expected_path:
            failures.append(f"{name}: path must be {expected_path}")
            continue
        if entry.get("invocation") not in ALLOWED_INVOCATIONS:
            failures.append(f"{name}: invalid invocation {entry.get('invocation')}")
        path = ROOT / expected_path
        if not path.exists():
            failures.append(f"{name}: missing {expected_path}")
            continue
        try:
            frontmatter = parse_frontmatter(path)
        except ValueError as error:
            failures.append(f"{name}: {error}")
            continue
        extra = set(frontmatter) - ALLOWED_FRONTMATTER
        if extra:
            failures.append(f"{name}: unsupported frontmatter keys {sorted(extra)}")
        if frontmatter.get("name") != name:
            failures.append(f"{name}: frontmatter name mismatch")
        if not frontmatter.get("description"):
            failures.append(f"{name}: missing description")
        body = path.read_text(encoding="utf-8")
        if ".codex/skills" in body:
            failures.append(f"{name}: stale .codex/skills reference")
        if len(body.split()) > 5000:
            failures.append(f"{name}: body exceeds 5,000 words")

    case_data = load_json(CASE_REGISTRY)
    expected_entries = case_data.get("cases", [])
    expected_by_id = {entry["id"]: entry for entry in expected_entries}
    if len(expected_by_id) != len(expected_entries):
        failures.append("Duplicate case ID in registry")
    registry_contract = {
        case_id: (bool(entry.get("homepage")), int(entry.get("minimumMedia", 1)))
        for case_id, entry in expected_by_id.items()
    }
    if registry_contract != LOCKED_CASE_CONTRACT:
        failures.append(
            "Protected case corpus changed: every locked ID, homepage state, and media floor must remain"
        )

    rendered = load_rendered_cases()
    rendered_by_id = {entry["id"]: entry for entry in rendered}
    if set(rendered_by_id) != set(expected_by_id):
        failures.append(
            "Case registry does not match case-study.js: "
            f"registry={sorted(expected_by_id)} source={sorted(rendered_by_id)}"
        )

    media_path_owners: dict[str, str] = {}
    media_digest_owners: dict[str, tuple[str, str]] = {}
    for case_id, expected in expected_by_id.items():
        item = rendered_by_id.get(case_id)
        if not item:
            continue
        hero = item.get("hero")
        gallery = item.get("gallery", [])
        if not hero:
            failures.append(f"{case_id}: text-only case study is forbidden")
            continue
        clean_hero = clean_asset_path(hero)
        clean_gallery = [clean_asset_path(value) for value in gallery]
        if clean_hero in clean_gallery:
            failures.append(f"{case_id}: hero is repeated in its gallery")
        if len(clean_gallery) != len(set(clean_gallery)):
            failures.append(f"{case_id}: gallery contains duplicate sources")
        media_count = 1 + len(clean_gallery)
        if media_count < expected.get("minimumMedia", 1):
            failures.append(
                f"{case_id}: requires {expected.get('minimumMedia', 1)} media items, found {media_count}"
            )
        for asset in [clean_hero, *clean_gallery]:
            asset_path = ROOT / asset
            if not asset_path.is_file():
                failures.append(f"{case_id}: missing media file {asset}")
                continue
            prior_path_owner = media_path_owners.get(asset)
            if prior_path_owner and prior_path_owner != case_id:
                failures.append(
                    f"{case_id}: media source also belongs to {prior_path_owner} ({asset})"
                )
            else:
                media_path_owners[asset] = case_id
            digest = file_digest(asset_path)
            prior_digest_owner = media_digest_owners.get(digest)
            if prior_digest_owner and prior_digest_owner[0] != case_id:
                failures.append(
                    f"{case_id}: media content duplicates {prior_digest_owner[0]} "
                    f"({asset} == {prior_digest_owner[1]})"
                )
            else:
                media_digest_owners[digest] = (case_id, asset)

    cards = homepage_cards()
    card_ids = [case_id for case_id, _ in cards]
    expected_homepage = {
        case_id for case_id, entry in expected_by_id.items() if entry.get("homepage")
    }
    if set(card_ids) != expected_homepage or len(card_ids) != len(expected_homepage):
        failures.append(
            "Homepage case cards do not match registry: "
            f"expected={sorted(expected_homepage)} found={sorted(card_ids)}"
        )
    card_sources = [clean_asset_path(src) for _, src in cards if src]
    if len(card_sources) != len(cards):
        failures.append("Every homepage case card must contain an image")
    if len(card_sources) != len(set(card_sources)):
        failures.append("Homepage case cards contain duplicate image sources")
    card_digests: dict[str, tuple[str, str]] = {}
    for case_id, source in cards:
        if not source:
            continue
        asset = clean_asset_path(source)
        asset_path = ROOT / asset
        if not asset_path.is_file():
            failures.append(f"Homepage card references missing media file {asset}")
            continue
        digest = file_digest(asset_path)
        prior = card_digests.get(digest)
        if prior and prior[0] != case_id:
            failures.append(
                f"Homepage card {case_id} duplicates {prior[0]} by content "
                f"({asset} == {prior[1]})"
            )
        else:
            card_digests[digest] = (case_id, asset)

    return failures


def main() -> int:
    try:
        failures = validate()
    except (json.JSONDecodeError, OSError, subprocess.CalledProcessError) as error:
        print(f"FAIL: validator could not run: {error}")
        return 2

    print("Lesly skill and portfolio registry validation")
    print("=============================================")
    if failures:
        print("FAIL")
        for failure in failures:
            print(f"- {failure}")
        return 2
    print("PASS")
    print("Skill ownership is singular and the locked case corpus remains image-led and content-distinct.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
