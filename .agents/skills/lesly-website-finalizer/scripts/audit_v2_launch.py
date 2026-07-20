#!/usr/bin/env python3
"""Audit Lesly public portfolio launch readiness."""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path


REPO = Path(__file__).resolve().parents[4]
SITE = REPO

REQUIRED_FILES = [
    SITE / "index.html",
    SITE / "case-study.html",
    SITE / "styles.css",
    SITE / "script.js",
    SITE / "case-study.js",
    SITE / "CONTENT_STRATEGY.md",
    SITE / "LAUNCH_CHECKLIST.md",
    SITE / "ENVIRONMENT_STRATEGY.md",
    SITE / "assets" / "README.md",
]

REQUIRED_SKILLS = [
    SITE / ".agents" / "skills" / "3d-production-expert" / "SKILL.md",
    SITE / ".agents" / "skills" / "3d-portfolio-writing-director" / "SKILL.md",
    SITE / ".agents" / "skills" / "lesly-website-finalizer" / "SKILL.md",
    SITE / "registry" / "skills.json",
    SITE / "registry" / "portfolio-cases.json",
    SITE / "scripts" / "validate_skill_portfolio.py",
]

REQUIRED_ASSETS = [
    SITE / "assets" / "portfolio" / "hero-original-site-concept.webp",
    SITE / "assets" / "portfolio" / "work-concept-to-3d.webp",
    SITE / "assets" / "portfolio" / "work-game-ready-character.webp",
    SITE / "assets" / "portfolio" / "work-sculpt-retopo.webp",
    SITE / "assets" / "portfolio" / "work-avatar-character.webp",
    SITE / "assets" / "portfolio" / "work-mascot-character.webp",
    SITE / "assets" / "portfolio" / "work-outfits-accessories.webp",
    SITE / "assets" / "profile" / "studio-process-portrait.webp",
]

LIVE_FILES = [
    SITE / "index.html",
    SITE / "case-study.html",
    SITE / "styles.css",
    SITE / "script.js",
    SITE / "case-study.js",
]

FORBIDDEN_LIVE_PATTERNS = [
    re.compile(r"reserch/visuals/image\d*\.png"),
    re.compile(r"\.\./reserch/visuals/image\d*\.png"),
    re.compile(r"~18k|18\.4k|2k / 1k|Unreal 5|4 weeks"),
    re.compile(r"\[Project Name\]|One paragraph|One or two concrete"),
    re.compile(r"First Real Case Study Intake"),
    re.compile(r"\bplaceholder\b|\bprototype\b|\bnot real\b|\bconcept-only\b", re.IGNORECASE),
    re.compile(r"ASSET_INTAKE"),
]

PUBLIC_PROPOSAL_PATTERNS = [
    re.compile(r"clients/oneoff", re.IGNORECASE),
    re.compile(r"\bOneOff\b|\bOne Off\b|S-RANCH", re.IGNORECASE),
    re.compile(r"\bproposal system\b|\bprivate commission portal\b", re.IGNORECASE),
]

WEAK_PUBLIC_COPY_PATTERNS = [
    re.compile(r"\bcool characters\b", re.IGNORECASE),
    re.compile(r"\bawesome art\b", re.IGNORECASE),
    re.compile(r"\bfun designs\b", re.IGNORECASE),
    re.compile(r"\bcute stuff\b", re.IGNORECASE),
    re.compile(r"\bamazing things\b", re.IGNORECASE),
    re.compile(r"\bdreams come true\b", re.IGNORECASE),
    re.compile(r"\bmake ideas real\b", re.IGNORECASE),
    re.compile(r"\bbeautiful 3D\b", re.IGNORECASE),
    re.compile(r"\bbringing imagination to life\b", re.IGNORECASE),
    re.compile(r"\bcreative visionary\b", re.IGNORECASE),
    re.compile(r"\bunlock your vision\b", re.IGNORECASE),
]


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Audit Lesly public portfolio launch readiness.")
    parser.add_argument(
        "--case",
        dest="case_id",
        metavar="CASE_ID",
        help="Use the audience validator for one active case; omit for the final all-case audit.",
    )
    return parser.parse_args(argv)


def main(case_id: str | None = None) -> int:
    failures: list[str] = []
    warnings: list[str] = []

    for path in REQUIRED_FILES + REQUIRED_SKILLS:
        if not path.exists():
            failures.append(f"Missing required file: {path.relative_to(REPO)}")

    missing_assets = [path for path in REQUIRED_ASSETS if not path.exists()]
    if missing_assets:
        warnings.extend(f"Missing homepage/profile asset: {path.relative_to(REPO)}" for path in missing_assets)

    hero_assets = list((SITE / "assets" / "portfolio").glob("hero-*.webp"))
    if not hero_assets:
        warnings.append("Missing hero render matching assets/portfolio/hero-*.webp")

    registry_validator = SITE / "scripts" / "validate_skill_portfolio.py"
    if registry_validator.exists():
        validator_command = [sys.executable, str(registry_validator)]
        if case_id:
            validator_command.extend(["--case", case_id])
        result = subprocess.run(
            validator_command,
            cwd=SITE,
            capture_output=True,
            text=True,
        )
        if result.returncode != 0:
            detail = result.stdout.strip() or result.stderr.strip() or "unknown registry failure"
            failures.append(f"Skill/case registry validation failed:\n{detail}")

    for path in LIVE_FILES:
        if not path.exists():
            continue
        text = read(path)
        for pattern in FORBIDDEN_LIVE_PATTERNS:
            if pattern.search(text):
                failures.append(f"Forbidden live-page pattern in {path.relative_to(REPO)}: {pattern.pattern}")

    for path in [SITE / "index.html", SITE / "case-study.html"]:
        if not path.exists():
            continue
        text = read(path)
        for pattern in PUBLIC_PROPOSAL_PATTERNS:
            if pattern.search(text):
                failures.append(f"Proposal/OneOff leakage in {path.relative_to(REPO)}: {pattern.pattern}")
        for pattern in WEAK_PUBLIC_COPY_PATTERNS:
            if pattern.search(text):
                failures.append(f"Weak public portfolio copy in {path.relative_to(REPO)}: {pattern.pattern}")

    if (SITE / "index.html").exists():
        index_text = read(SITE / "index.html")
        required_public_terms = [
            "3D Character Artist",
            "Start a Project",
        ]
        for term in required_public_terms:
            if term not in index_text:
                failures.append(f"Homepage is missing strategic positioning term: {term}")

    if (SITE / "case-study.html").exists():
        case_text = read(SITE / "case-study.html")
        if "Portfolio concept presentation" in case_text or "not a shipped client project" in case_text:
            failures.append("Case study still contains retired generated/provenance caveat language.")

    print("Lesly public-site launch audit")
    print("==============================")
    print(f"Audience scope: {case_id or 'all registered cases'}")
    if failures:
        print("FAIL")
        for item in failures:
            print(f"- {item}")
        return 2

    if warnings:
        print("BLOCKED")
        print("Reason: required launch assets or facts are still missing.")
        for item in warnings:
            print(f"- {item}")
        return 1

    print("PASS")
    print("All audited launch gates passed. Browser verification is still required before final launch.")
    return 0


if __name__ == "__main__":
    arguments = parse_args()
    sys.exit(main(arguments.case_id))
