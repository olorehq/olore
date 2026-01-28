# docs-packager Documentation Structure

## Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | User documentation | 3 |
| `scripts/` | Executable Python scripts | 2 |
| `templates/` | SKILL.md and TOC.md templates | 6 |

## contents/

| File | Description |
|------|-------------|
| `getting-started.md` | Quick start guide for packaging local docs |
| `olore.config.schema.json` | JSON Schema for config validation |
| `example.olore.config.json` | Example config file to copy |

## scripts/

Python scripts using [uv](https://docs.astral.sh/uv/) for stable execution.

| File | Description |
|------|-------------|
| `copy-docs.py` | Copies documentation files based on config |
| `determine-tier.py` | Determines tier (1-3) based on file count and size |

## templates/

| File | Description |
|------|-------------|
| `skill-tier1.md` | SKILL.md template for small docs (< 30 files) |
| `skill-tier2.md` | SKILL.md template for medium docs (30-100 files) |
| `skill-tier3.md` | SKILL.md template for large docs (> 100 files) |
| `toc-tier1.md` | TOC.md template for small docs |
| `toc-tier2.md` | TOC.md template for medium docs |
| `toc-tier3.md` | TOC.md template for large docs |
