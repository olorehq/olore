# Tier 1 SKILL.md Template

Use for small documentation sets (< 30 files, < 500KB).

## Template

```yaml
---
name: olore-{name}-{version}
description: Local {name} documentation reference ({version}). {description}
---

# {name} Documentation

{description}

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/file1.md` | {title} | {description} |
{... list ALL files ...}

## When to use

Use this skill when the user asks about:
- {topic 1 derived from file contents}
- {topic 2}
- {topic 3}

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
```

## Guidelines

- List ALL files in Quick Reference (small enough to fit)
- Extract title from first H1 or filename
- Extract description from first paragraph or generate from content
- Topics should reflect actual documentation coverage
