#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = []
# ///
"""Copy documentation files from source to output directory.

Usage:
    uv run copy-docs.py <config_path>

Reads config, copies files matching extensions, applies excludes.
"""

import json
import os
import shutil
import sys
from fnmatch import fnmatch
from pathlib import Path


def load_config(config_path: str) -> dict:
    """Load and validate config file."""
    with open(config_path) as f:
        config = json.load(f)

    required = ["name", "version", "description", "contentPath"]
    missing = [f for f in required if f not in config]
    if missing:
        print(f"Error: Missing required fields: {', '.join(missing)}")
        sys.exit(1)

    return config


def should_exclude(path: Path, excludes: list[str]) -> bool:
    """Check if path matches any exclude pattern."""
    path_str = str(path)
    for pattern in excludes:
        if fnmatch(path_str, pattern):
            return True
    return False


def copy_docs(config_path: str) -> dict:
    """Copy docs from contentPath to outputPath/contents."""
    config = load_config(config_path)
    config_dir = Path(config_path).parent.resolve()

    content_path = (config_dir / config["contentPath"]).resolve()
    output_path = (config_dir / config.get("outputPath", "./olore-package")).resolve()
    extensions = config.get("extensions", [".md", ".mdx"])
    excludes = config.get("exclude", [])

    if not content_path.exists():
        print(f"Error: Content path does not exist: {content_path}")
        sys.exit(1)

    # Prepare output
    contents_dir = output_path / "contents"
    if contents_dir.exists():
        shutil.rmtree(contents_dir)
    contents_dir.mkdir(parents=True)

    # Copy files
    copied = 0
    total_size = 0

    for root, dirs, files in os.walk(content_path):
        # Skip hidden directories
        dirs[:] = [d for d in dirs if not d.startswith(".")]

        for file in files:
            src = Path(root) / file

            # Check extension
            if not any(file.endswith(ext) for ext in extensions):
                continue

            # Check excludes
            rel_path = src.relative_to(content_path)
            if should_exclude(rel_path, excludes):
                continue

            # Copy file
            dst = contents_dir / rel_path
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dst)
            copied += 1
            total_size += src.stat().st_size

    # Clean empty directories
    for root, dirs, files in os.walk(contents_dir, topdown=False):
        for d in dirs:
            dir_path = Path(root) / d
            if not any(dir_path.iterdir()):
                dir_path.rmdir()

    result = {
        "files": copied,
        "size_bytes": total_size,
        "size_kb": total_size // 1024,
        "output_path": str(output_path),
        "contents_path": str(contents_dir),
    }

    print(json.dumps(result, indent=2))
    return result


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python copy-docs.py <config_path>")
        sys.exit(1)

    copy_docs(sys.argv[1])
