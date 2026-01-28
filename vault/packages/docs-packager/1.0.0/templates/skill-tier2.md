# Tier 2 SKILL.md Template

Use for medium documentation sets (30-100 files, 500KB-2MB).

## Template

```yaml
---
name: olore-{name}-{version}
description: Local {name} documentation reference ({version}). {description}
---

# {name} Documentation

{description}

## Documentation Structure

```
contents/
├── {dir1}/       # {summary} ({N} files)
├── {dir2}/       # {summary} ({N} files)
└── {dir3}/       # {summary} ({N} files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| {Topic 1} | `contents/path/file1.md`, `contents/path/file2.md` |
| {Topic 2} | `contents/path/file3.md` |
| {Topic 3} | `contents/path/file4.md` |

## When to use

Use this skill when the user asks about:
- {topic 1}
- {topic 2}
- {topic 3}

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
```

## Guidelines

- Show directory structure with file counts
- Create a Topic Guide mapping concepts to files
- Don't list every file - group by topic/purpose
- Reference TOC.md for complete listings
