# Package Format

This document describes the internal structure of olore documentation packages.

For directory structures (vault, user installation, agent skills), see [architecture.md](architecture.md#directory-structure).

## Overview

An olore package is a tarball (`.tar.gz`) containing curated documentation and metadata. Packages are identified by name and library version (e.g., `prisma@5.22.0`).

## Tarball Structure

```
prisma-5.22.0.tar.gz
├── package.json           # Package metadata (required)
├── SKILL.md               # Skill definition (required)
├── TOC.md                 # Table of contents (required)
└── contents/              # Documentation files
    ├── getting-started.md
    ├── schema/
    │   ├── models.md
    │   └── relations.md
    └── ...
```

## package.json

Package metadata. For field validation, see `vault/package.schema.json`.

### Package Version vs Library Version

**Package version** (`version`): Our internal version. Increments when we re-curate or improve the docs.

**Library version** (`libraryVersion`): The library version this documentation covers.

Example:
- `prisma@1.0.0` - Our first package for Prisma 5.20.0 docs
- `prisma@1.1.0` - Fixed typos, added examples (still Prisma 5.20.0)
- `prisma@2.0.0` - Updated docs for Prisma 5.22.0

### Tiers

| Tier | Description | SKILL.md Size |
|------|-------------|---------------|
| 1 | Simple pointer to docs folder | ~10 lines |
| 2 | Structured with categories | ~50 lines |
| 3 | Rich with examples and guidance | ~200+ lines |

## SKILL.md

Entry point for AI agents. Describes how to use the documentation.

Must include YAML frontmatter with `name` and `description` fields. The `name` must match the installed folder name (e.g., `olore-prisma-5.22.0`).

## TOC.md

Table of contents. Helps agents understand available files and organization.

**Required for all packages** (all tiers).

Format varies by tier:
- **Tier 1**: Simple file list with descriptions
- **Tier 2**: Files grouped by directory
- **Tier 3**: Full hierarchy with directory map and key entry points

Example (tier 1):
```markdown
# Library Documentation Structure

## Files

| File | Description |
|------|-------------|
| `getting-started.md` | Installation and setup guide |
| `api-reference.md` | Complete API documentation |
```

## contents/

The documentation files:

- Markdown files (`.md`, `.mdx`)
- Organized in subdirectories by topic
- All paths are relative to the contents directory

## Verification

Packages are verified using SHA-256 checksums:

```
prisma-5.22.0.tar.gz
prisma-5.22.0.sha256    # Contains: abc123...  prisma-5.22.0.tar.gz
```
