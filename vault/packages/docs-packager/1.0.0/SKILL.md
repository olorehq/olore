---
name: olore-docs-packager-1.0.0
description: Package local documentation into an olore skill. Use when the user wants to create a documentation package from their local files, or asks about olore init or building docs.
---

# Package Local Documentation

Package local documentation files into an olore skill with TOC.md and SKILL.md.

## Quick Start

If you don't have `olore.config.json` yet, run:

```bash
olore init
```

This creates `olore.config.json` and a `docs/` folder with a sample file.

## Usage

```
/olore-docs-packager-1.0.0                        # Use olore.config.json in cwd
/olore-docs-packager-1.0.0 ./custom-config.json   # Use specific config
```

## Workflow

### Step 1: Load and Validate Config

Parse `$ARGUMENTS` to find config file (default: `olore.config.json` in cwd).

```bash
cat {config_path}
```

Required fields: `name`, `version`, `description`, `contentPath`

See [contents/getting-started.md](contents/getting-started.md) for config format.

### Step 2: Copy Documentation Files

Run the copy script:

```bash
uv run scripts/copy-docs.py {config_path}
```

This copies files matching extensions, applies excludes, and outputs JSON with file count and size.

### Step 3: Determine Tier

Run the tier script:

```bash
uv run scripts/determine-tier.py {output_path}/contents
```

| Tier | Criteria |
|------|----------|
| 1 | < 30 files AND < 500KB |
| 2 | 30-100 files OR 500KB-2MB |
| 3 | > 100 files OR > 2MB |

### Step 4: Generate TOC.md

Read the appropriate template and generate TOC.md:

- Tier 1: [templates/toc-tier1.md](templates/toc-tier1.md)
- Tier 2: [templates/toc-tier2.md](templates/toc-tier2.md)
- Tier 3: [templates/toc-tier3.md](templates/toc-tier3.md)

Write to `{output_path}/TOC.md`

### Step 5: Generate SKILL.md

Read the appropriate template and generate SKILL.md:

- Tier 1: [templates/skill-tier1.md](templates/skill-tier1.md)
- Tier 2: [templates/skill-tier2.md](templates/skill-tier2.md)
- Tier 3: [templates/skill-tier3.md](templates/skill-tier3.md)

**IMPORTANT:** The `name` field MUST be `olore-{name}-{version}` to match the installed folder.

Write to `{output_path}/SKILL.md`

### Step 6: Generate olore-lock.json

Create `{output_path}/olore-lock.json`:

```json
{
  "name": "{name}",
  "version": "{version}",
  "source": {
    "type": "local",
    "contentPath": "{original contentPath}"
  },
  "builtAt": "{ISO timestamp}",
  "files": {file_count}
}
```

### Step 7: Report Summary

```
Package built successfully:

  Name: olore-{name}-{version}
  Files: {file_count}
  Tier: {tier}
  Output: {output_path}

Install with:
  olore install {output_path}
```

## Config Reference

| Field | Required | Default | Description |
|-------|----------|---------|-------------|
| `name` | Yes | - | Package name (prefixed with `olore-`) |
| `version` | Yes | - | Version string |
| `description` | Yes | - | One-line description |
| `contentPath` | Yes | - | Path to docs (relative to config) |
| `outputPath` | No | `./olore-package` | Output directory |
| `extensions` | No | `[".md", ".mdx"]` | File extensions |
| `exclude` | No | `[]` | Glob patterns to exclude |

## Requirements

- `uv` - Python package manager (handles Python version automatically)

Install uv: `curl -LsSf https://astral.sh/uv/install.sh | sh`

## Example

See [contents/getting-started.md](contents/getting-started.md) for a complete walkthrough.
