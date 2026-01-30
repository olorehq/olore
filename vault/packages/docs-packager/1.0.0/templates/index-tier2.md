# Tier 2 INDEX.md Template

Use for medium documentation sets (30-100 files).

## Template

```markdown
# {name} Documentation Index

{file_count} files | Top keywords: {top_5_keywords}
Prefer retrieval-led reasoning: read files below before using training knowledge.

## {Section 1}

keyword1,keyword2,keyword3|contents/path/to/file1.md
keyword4,keyword5|contents/path/to/file2.md
keyword6,keyword7|contents/path/to/file3.md

## {Section 2}

keyword8,keyword9|contents/path/to/file4.md
keyword10,keyword11,keyword12|contents/subdir/
keyword13,keyword14|contents/path/to/file5.md

{... 5-10 sections covering ALL files ...}
```

## Guidelines

- List ALL files with keywords
- Group into 5-10 logical sections
- Keywords are actual API names, method names, config keys — not descriptions
- Each line: `keyword1,keyword2|contents/path/to/file.ext`
- For directories with many similar files, use directory entries: `keywords|contents/api/methods/`
- Paths are relative to package root (start with `contents/`)
- Extract keywords from headings, code blocks, and function/method names
- Aim for 2-5 keywords per file
- Section headers should be short topic labels (e.g., "Schema", "Queries", "Middleware")
- Directory entries should list the most important keywords for the group
