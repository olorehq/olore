---
name: build-index
description: Generate INDEX.md for a documentation package. Use standalone to regenerate the index without re-downloading or rebuilding other artifacts.
---

# Build Index

Generate INDEX.md (Compact Retrieval Index) for an existing documentation package.

## Usage

```
/build-index prisma@latest         # Generate index
/build-index prisma@latest --force  # Regenerate even if exists
```

## Input

`$ARGUMENTS` format: `{config_name}@{version}` (e.g., `prisma@latest`, `nextjs@16.1.3`)

Optional flags:
- `--force` - Regenerate even if INDEX.md already exists

## Prerequisites

The `contents/` directory and `olore-lock.json` must already exist at `vault/packages/{config_name}/{version}/`. Run `/download-docs` first if they don't.

```bash
test -d vault/packages/{config_name}/{version}/contents && echo "OK" || echo "NOT_FOUND"
```

If `contents/` not found:
```
error: {config_name}@{version} contents/ not found - run /download-docs first
```

## Execution Steps

### Step 1: Parse Arguments and Load Metadata

Parse `$ARGUMENTS`:
- Extract `config_name` and `version` from `{config_name}@{version}`
- Check for `--force` flag

Read metadata:
```bash
cat vault/packages/{config_name}/{version}/olore-lock.json
```

### Step 2: Check if Already Built

```bash
test -f vault/packages/{config_name}/{version}/INDEX.md && echo "EXISTS" || echo "NOT_FOUND"
```

If exists and no `--force` flag:
```
skip: {config_name}@{version} INDEX.md already built (use --force to rebuild)
```
Return early.

### Step 3: Determine Tier

```bash
file_count=$(find vault/packages/{config_name}/{version}/contents -type f \( -name "*.md" -o -name "*.mdx" \) | wc -l)
total_size=$(du -sk vault/packages/{config_name}/{version}/contents | cut -f1)
```

| Tier | Criteria |
|------|----------|
| 1 | < 30 files AND < 500KB |
| 2 | 30-100 files OR 500KB-2MB |
| 3 | > 100 files OR > 2MB |

### Step 4: Generate INDEX.md

Read the appropriate index template based on tier:

```bash
# Tier 1
cat vault/packages/docs-packager/1.0.0/templates/index-tier1.md

# Tier 2
cat vault/packages/docs-packager/1.0.0/templates/index-tier2.md

# Tier 3
cat vault/packages/docs-packager/1.0.0/templates/index-tier3.md
```

Create `vault/packages/{config_name}/{version}/INDEX.md` following the template structure.

**Format:** Compact `@section` lines consumed by `olore inject`:

```
@section:keyword1,keyword2=path/to/file.mdx;keyword3,keyword4=path/to/dir/
```

| Delimiter | Separates |
|-----------|-----------|
| `@` | Section name from entries |
| `;` | Entries within a section |
| `=` | Keywords from file path |
| `,` | Keywords |

- Paths are relative to `contents/` (do NOT include the `contents/` prefix)
- Paths ending in `/` are directories; paths ending in `.md`/`.mdx` are files
- Keywords should be actual API names, method names, config keys — not descriptions

**Process:**
1. Read each file in `contents/`
2. Extract keywords: API names, method names, config keys, class names, function signatures
3. Group entries into logical `@section` lines (one line per section)
4. Write INDEX.md following the tier template

### Step 5: Return Summary

Return ONLY a brief summary:

```
done: {config_name}@{version} INDEX.md built, {entry_count} entries, tier {tier}
```

## Outputs

- `vault/packages/{config_name}/{version}/INDEX.md` - Compact Retrieval Index
