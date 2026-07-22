#!/usr/bin/env python3
"""Create an allowlisted GitHub Pages artifact for the public portfolio."""

from __future__ import annotations

import argparse
import re
import shutil
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


def package(output: Path) -> tuple[int, int]:
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
    for relative_name in root_files:
        shutil.copy2(ROOT / relative_name, resolved_output / relative_name)

    assets = public_asset_paths()
    for relative in sorted(assets):
        destination = resolved_output / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(ROOT / relative, destination)

    leaked = sorted(
        path.name for path in resolved_output.iterdir() if path.name in PRIVATE_TOP_LEVEL_PATHS
    )
    if leaked:
        raise RuntimeError(f"Private paths entered public package: {', '.join(leaked)}")
    return len(root_files), len(assets)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Package only deployable portfolio files and referenced assets."
    )
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    try:
        root_count, asset_count = package(args.output)
    except (FileExistsError, FileNotFoundError, RuntimeError, ValueError) as error:
        print(f"FAIL: {error}", file=sys.stderr)
        return 2
    print(
        f"Public package PASS: {root_count} root files, {asset_count} referenced assets, "
        "no private top-level paths."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
