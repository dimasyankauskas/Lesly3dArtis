#!/usr/bin/env python3
"""Create an allowlisted GitHub Pages artifact for the public portfolio."""

from __future__ import annotations

import argparse
import hashlib
import re
import shutil
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_ROOT_FILES = (
    ".nojekyll",
    "index.html",
    "case-study.html",
    "styles.css",
    "script.js",
    "case-study.js",
    "robots.txt",
    "sitemap.xml",
)
OPTIONAL_PUBLIC_ROOT_FILES = ("CNAME",)
PRIVATE_TOP_LEVEL_PATHS = {
    ".agents",
    ".codex",
    ".git",
    ".github",
    "clients",
    "docs",
    "registry",
    "reserch",
    "scripts",
    "temp",
}
ASSET_REFERENCE = re.compile(r"assets/[^\s\"'`()<>]+")
ASSET_VERSION_PLACEHOLDER = "__PUBLIC_ASSET_VERSION__"
CASE_LINK = re.compile(r"case-study\.html\?id=([a-z0-9-]+)")
DERIVATION_FILES = (
    Path("scripts/package_public_site.py"),
    Path("scripts/generate_public_case_pages.mjs"),
)


def public_asset_paths() -> set[Path]:
    assets: set[Path] = set()
    for relative_name in PUBLIC_ROOT_FILES:
        source = ROOT / relative_name
        if not source.is_file():
            raise FileNotFoundError(f"Missing public root file: {relative_name}")
        text = source.read_text(encoding="utf-8")
        for match in ASSET_REFERENCE.findall(text):
            clean = match.split("?", 1)[0].split("#", 1)[0].rstrip(".,;:")
            relative = Path(clean)
            resolved = (ROOT / relative).resolve()
            if not resolved.is_relative_to((ROOT / "assets").resolve()):
                raise ValueError(f"Asset reference escapes assets/: {clean}")
            if not resolved.is_file():
                raise FileNotFoundError(f"Missing referenced public asset: {clean}")
            assets.add(relative)
    return assets


def release_version(root_files: list[str], assets: set[Path]) -> str:
    digest = hashlib.sha256()
    public_paths = [Path(name) for name in root_files]
    public_paths.extend(sorted(assets))
    public_paths.extend(DERIVATION_FILES)
    for relative in public_paths:
        digest.update(relative.as_posix().encode("utf-8"))
        digest.update(b"\0")
        digest.update((ROOT / relative).read_bytes())
        digest.update(b"\0")
    return digest.hexdigest()[:12]


def copy_versioned_root_file(relative_name: str, output: Path, version: str) -> None:
    source = ROOT / relative_name
    destination = output / relative_name
    content = source.read_bytes().replace(
        ASSET_VERSION_PLACEHOLDER.encode("utf-8"), version.encode("utf-8")
    )
    destination.write_bytes(content)
    shutil.copystat(source, destination)


def rewrite_packaged_case_links(output: Path) -> None:
    homepage = output / "index.html"
    content = homepage.read_text(encoding="utf-8")
    rewritten, count = CASE_LINK.subn(lambda match: f"work/{match.group(1)}/", content)
    if count == 0:
        raise RuntimeError("No homepage case-study links were available for static routing")
    homepage.write_text(rewritten, encoding="utf-8")


def generate_static_case_pages(output: Path, version: str) -> int:
    generator = ROOT / "scripts" / "generate_public_case_pages.mjs"
    try:
        result = subprocess.run(
            [
                "node",
                str(generator),
                "--output",
                str(output),
                "--version",
                version,
            ],
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        )
    except FileNotFoundError as error:
        raise RuntimeError("Node.js is required to generate crawlable case pages") from error
    except subprocess.CalledProcessError as error:
        detail = (error.stderr or error.stdout or str(error)).strip()
        raise RuntimeError(f"Static case-page generation failed: {detail}") from error
    if result.stdout.strip():
        print(result.stdout.strip())
    work_root = output / "work"
    case_pages = sorted(work_root.glob("*/index.html"))
    if not case_pages:
        raise RuntimeError("Static case-page generation produced no routes")
    return len(case_pages)


def package(output: Path) -> tuple[int, int, int, str]:
    resolved_output = output.resolve()
    if resolved_output == ROOT or resolved_output in ROOT.parents:
        raise ValueError("Output must be a dedicated directory, never a repository ancestor")
    if resolved_output.exists():
        if not resolved_output.is_dir() or any(resolved_output.iterdir()):
            raise FileExistsError(f"Output directory is not empty: {resolved_output}")
    resolved_output.mkdir(parents=True, exist_ok=True)

    root_files = list(PUBLIC_ROOT_FILES)
    root_files.extend(
        name for name in OPTIONAL_PUBLIC_ROOT_FILES if (ROOT / name).is_file()
    )
    assets = public_asset_paths()
    version = release_version(root_files, assets)
    for relative_name in root_files:
        copy_versioned_root_file(relative_name, resolved_output, version)
    rewrite_packaged_case_links(resolved_output)
    case_count = generate_static_case_pages(resolved_output, version)

    for relative in sorted(assets):
        destination = resolved_output / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(ROOT / relative, destination)

    leaked = sorted(
        path.name for path in resolved_output.iterdir() if path.name in PRIVATE_TOP_LEVEL_PATHS
    )
    if leaked:
        raise RuntimeError(f"Private paths entered public package: {', '.join(leaked)}")
    return len(root_files), len(assets), case_count, version


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Package only deployable portfolio files and referenced assets."
    )
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    try:
        root_count, asset_count, case_count, version = package(args.output)
    except (FileExistsError, FileNotFoundError, RuntimeError, ValueError) as error:
        print(f"FAIL: {error}", file=sys.stderr)
        return 2
    print(
        f"Public package PASS: {root_count} root files, {case_count} static case pages, "
        f"{asset_count} referenced assets, "
        f"release {version}, no private top-level paths."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
