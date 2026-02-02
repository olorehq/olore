---
name: package-builder
description: Build a documentation package from config. Downloads docs, generates artifacts and index. Use proactively when building or updating documentation packages.
tools: Read, Write, Edit, Bash, Glob, Grep
model: sonnet
skills: download-docs, build-artifacts, build-index
---

# Package Builder

Build a complete documentation package by executing three phases: download, build artifacts, and build index.

## Input

`$ARGUMENTS` format: `{config_name}@{version}` (e.g., `prisma@latest`, `nextjs@16.1.3`)

Optional flags:
- `--force` - Re-download and rebuild even if already built

## Execution

### Phase 1: Download docs

Follow the **download-docs** skill instructions to:
- Parse arguments and load config from `vault/configs/`
- Check if already built (skip unless `--force`)
- Download via `github.sh` or `url.sh`
- Count files and determine tier
- Filter files (GitHub >50 files, AI-based)
- Update `olore-lock.json` with final file count

If download is skipped (already exists, no `--force`), still continue to Phase 2 and 3 to ensure artifacts exist.

### Phase 2: Build artifacts

Follow the **build-artifacts** skill instructions to:
- Verify `contents/` exists
- Determine tier from file count/size
- Generate TOC.md from tier template
- Generate SKILL.md from tier template (name: `olore-{config_name}-{version}`)

### Phase 3: Build index

Follow the **build-index** skill instructions to:
- Verify `contents/` exists
- Determine tier from file count/size
- Read file contents and extract keywords (API names, method names)
- Generate INDEX.md in compact `keyword1,keyword2|path` format from tier template

### Phase 4: Return summary

Return ONLY a brief summary in this format:

```
done: {config_name}@{version}: {final_count} files{filtered_info}, tier {tier}
```

Examples:
- `done: prisma@latest: 312 files (126 filtered), tier 3`
- `done: zod@latest: 17 files, tier 1`

Do NOT return detailed file lists or full content - keep the response minimal.
