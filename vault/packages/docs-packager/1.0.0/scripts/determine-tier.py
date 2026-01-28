#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = []
# ///
"""Determine documentation tier based on file count and size.

Usage:
    uv run determine-tier.py <contents_path>

Outputs tier (1, 2, or 3) and metrics as JSON.
"""

import json
import sys
from pathlib import Path


def determine_tier(contents_path: str) -> dict:
    """Determine tier based on file count and total size."""
    contents = Path(contents_path)

    if not contents.exists():
        print(f"Error: Path does not exist: {contents_path}")
        sys.exit(1)

    # Count files and size
    files = list(contents.rglob("*.md")) + list(contents.rglob("*.mdx"))
    file_count = len(files)
    total_size = sum(f.stat().st_size for f in files)
    size_kb = total_size // 1024

    # Determine tier
    # Tier 1: < 30 files AND < 500KB
    # Tier 2: 30-100 files OR 500KB-2MB
    # Tier 3: > 100 files OR > 2MB
    if file_count < 30 and size_kb < 500:
        tier = 1
    elif file_count > 100 or size_kb > 2048:
        tier = 3
    else:
        tier = 2

    result = {
        "tier": tier,
        "file_count": file_count,
        "size_bytes": total_size,
        "size_kb": size_kb,
    }

    print(json.dumps(result, indent=2))
    return result


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python determine-tier.py <contents_path>")
        sys.exit(1)

    determine_tier(sys.argv[1])
