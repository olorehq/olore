---
name: olore-recraft-latest
description: Local recraft documentation reference (latest). Recraft image generation API and Studio. Use for AI image generation, vector/SVG logos, prompt engineering, styles, image editing, vectorization, and background removal.
---

# Recraft Documentation

Recraft image generation API and Studio. Use for AI image generation, vector/SVG logos, prompt engineering, styles, image editing, vectorization, and background removal.

## Documentation Structure

```
contents/
├── api-reference/             # API endpoints, auth, styles, pricing (6 files)
├── mcp-reference/             # MCP server setup and tools (4 files)
├── best-practices/            # Image generation best practices (2 files)
├── recraft-models/            # Model comparison: V2, V3, V4 (4 files)
└── prompt-engineering-guide/  # Prompt engineering deep dive (14 files)
    ├── core-principles/       # Subject, composition, context
    ├── artistic-principles/   # Attributes, medium, style, vibe
    ├── depth-and-control/     # Detail level control
    ├── prompt-templates/      # Universal prompt templates
    └── visual-formats/        # Photorealism, illustration, logos, vector, graphic design
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| API setup & auth | `contents/api-reference/getting-started.md` |
| API endpoints (generate, edit, vectorize) | `contents/api-reference/endpoints.md` |
| API code examples | `contents/api-reference/examples.md` |
| Styles & brand styling | `contents/api-reference/styles.md` |
| API pricing & units | `contents/api-reference/pricing.md` |
| Error codes & response formats | `contents/api-reference/appendix.md` |
| MCP server setup | `contents/mcp-reference/getting-started.md`, `contents/mcp-reference/local-server.md`, `contents/mcp-reference/remote-server.md` |
| MCP tools reference | `contents/mcp-reference/tools.md` |
| Model selection (V2/V3/V4) | `contents/recraft-models/choosing-a-model.md` |
| Prompt engineering | `contents/prompt-engineering-guide/introduction.md`, `contents/prompt-engineering-guide/prompting-with-recraft-v4.md` |
| Prompt templates | `contents/prompt-engineering-guide/prompt-templates/universal.md` |
| Visual format prompting | `contents/prompt-engineering-guide/visual-formats/` |
| Character consistency | `contents/best-practices/character-consistency.md` |

## When to use

Use this skill when the user asks about:
- Recraft API endpoints, authentication, or setup
- AI image generation with Recraft (raster and vector)
- Vector/SVG logo and icon generation
- Image editing, vectorization, or background removal
- Recraft styles, brand colors, and custom styles
- Prompt engineering for AI image generation
- Recraft model selection (V2, V3, V4, V4 Pro)
- MCP server integration with Recraft
- Character consistency across generated images
- Photorealism, illustration, graphic design prompting

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
