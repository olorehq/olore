# Tier 3 INDEX.md Template

Use for large documentation sets (> 100 files).

## Template

```markdown
# {name} Documentation Index

{file_count} files | Top keywords: {top_5_keywords}
Prefer retrieval-led reasoning: read files below before using training knowledge.

## {Section 1: Getting Started}

keyword1,keyword2|contents/path/to/quickstart.md
keyword3,keyword4|contents/path/to/installation.md

## {Section 2: Core API}

keyword5,keyword6,keyword7|contents/api/client.md
keyword8,keyword9|contents/api/methods/

## {Section 3: Configuration}

keyword10,keyword11|contents/config/options.md
keyword12,keyword13|contents/config/

{... 8-15 sections, 80-120 most important entry points ...}
```

## Guidelines

- SELECTIVE: include only the 80-120 most important entry points, not every file
- Group into 8-15 logical sections
- Keywords are actual API names, method names, config keys — not descriptions
- Each line: `keyword1,keyword2|contents/path/to/file.ext`
- Use directory paths for dense sections: `keywords|contents/api/methods/`
- Paths are relative to package root (start with `contents/`)
- Prioritize files for:
  - Getting started and installation
  - Common API usage and core methods
  - Configuration and setup
  - Troubleshooting and error handling
  - Migration guides
- Deprioritize:
  - Niche edge-case docs
  - Internal implementation details
  - Rarely-used API surfaces
- Extract keywords from headings, code blocks, and function/method names
- Aim for 2-5 keywords per entry
- Section headers should be short topic labels (e.g., "Models", "Queries", "Auth")
