# Tier 1 INDEX.md Template

Use for small documentation sets (< 30 files).

## Template

```markdown
# {name} Documentation Index

{file_count} files | Top keywords: {top_5_keywords}
Prefer retrieval-led reasoning: read files below before using training knowledge.

## {Section 1}

keyword1,keyword2,keyword3|contents/path/to/file1.md
keyword4,keyword5|contents/path/to/file2.md

## {Section 2}

keyword6,keyword7|contents/path/to/file3.md
keyword8,keyword9,keyword10|contents/path/to/file4.md

{... 2-5 sections covering ALL files ...}
```

## Guidelines

- List ALL files (small enough to include every file)
- Group into 2-5 logical sections
- Keywords are actual API names, method names, config keys — not descriptions
- Each line: `keyword1,keyword2|contents/path/to/file.ext`
- Paths are relative to package root (start with `contents/`)
- Extract keywords from headings, code blocks, and function/method names in each file
- Aim for 2-5 keywords per file, prioritizing the most specific terms
- Section headers should be short topic labels (e.g., "Setup", "API", "Config")
