# Tier 3 SKILL.md Template

Use for large documentation sets (> 100 files, > 2MB).

## Template

```yaml
---
name: olore-{name}-{version}
description: Local {name} documentation reference ({version}). {description}
---

# {name} Documentation

{description}

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Getting started | `contents/{path}/quickstart.md` |
| API reference | `contents/{path}/api/` |
| Configuration | `contents/{path}/config.md` |
| Troubleshooting | `contents/{path}/troubleshooting.md` |

## When to use

Use this skill when the user asks about:
- {topic 1}
- {topic 2}
- {topic 3}

## How to find information

1. **First**, read `TOC.md` for complete file listing organized by directory
2. Identify relevant section based on user's question
3. Read specific files for details

**TOC.md contains all files organized by directory - always check it first.**
```

## Guidelines

- Keep SKILL.md minimal - rely on TOC.md for navigation
- Quick Reference should only list key entry points (5-10 max)
- Topics should be high-level categories
- Emphasize reading TOC.md first
