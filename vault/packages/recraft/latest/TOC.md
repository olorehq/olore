# Recraft Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Documentation index | 1 |
| `contents/api-reference/` | API endpoints, authentication, styles, pricing | 6 |
| `contents/mcp-reference/` | MCP server setup and tools | 4 |
| `contents/best-practices/` | Image generation best practices | 2 |
| `contents/recraft-models/` | Model comparison and details (V2, V3, V4) | 4 |
| `contents/prompt-engineering-guide/` | Prompt engineering overview | 3 |
| `contents/prompt-engineering-guide/core-principles/` | Subject, composition, context | 3 |
| `contents/prompt-engineering-guide/artistic-principles/` | Attributes, medium, style, vibe | 4 |
| `contents/prompt-engineering-guide/depth-and-control/` | Level of detail control | 1 |
| `contents/prompt-engineering-guide/prompt-templates/` | Universal prompt templates | 1 |
| `contents/prompt-engineering-guide/visual-formats/` | Format-specific prompting guides | 5 |

## Root

| File | Description |
|------|-------------|
| `index.md` | Documentation home and feature overview |

## api-reference/

| File | Description |
|------|-------------|
| `getting-started.md` | Authentication, models overview, Swagger, Python library setup |
| `endpoints.md` | All API endpoints: generate, edit, vectorize, remove background, styles |
| `examples.md` | Code examples for common API tasks |
| `styles.md` | Style IDs, custom styles, brand styling |
| `appendix.md` | Response formats, error codes, supported parameters |
| `pricing.md` | API pricing, units, and plan details |

## mcp-reference/

| File | Description |
|------|-------------|
| `getting-started.md` | MCP server overview and setup |
| `local-server.md` | Local MCP server installation and configuration |
| `remote-server.md` | Remote MCP server connection setup |
| `tools.md` | Available MCP tools and their parameters |

## best-practices/

| File | Description |
|------|-------------|
| `character-consistency.md` | Maintaining consistent characters across generations |
| `prompting-and-image-generation.md` | General prompting tips for better results |

## recraft-models/

| File | Description |
|------|-------------|
| `choosing-a-model.md` | Model comparison and selection guide (V2, V3, V4, V4 Pro) |
| `recraft-V2.md` | Recraft V2 model capabilities and features |
| `recraft-V3.md` | Recraft V3 (Red Panda) model capabilities |
| `recraft-V4.md` | Recraft V4 and V4 Pro model capabilities |

## prompt-engineering-guide/

| File | Description |
|------|-------------|
| `introduction.md` | Prompt engineering overview |
| `prompting-with-recraft-v4.md` | V4-specific prompting techniques |
| `closing-notes.md` | Summary and iterative prompting advice |

## prompt-engineering-guide/core-principles/

| File | Description |
|------|-------------|
| `subject.md` | Describing subjects effectively |
| `composition.md` | Controlling image composition |
| `context.md` | Setting scene context and environment |

## prompt-engineering-guide/artistic-principles/

| File | Description |
|------|-------------|
| `attributes.md` | Visual attributes (lighting, color, mood) |
| `medium.md` | Specifying artistic medium |
| `style.md` | Defining artistic style |
| `vibe.md` | Setting overall image vibe and atmosphere |

## prompt-engineering-guide/depth-and-control/

| File | Description |
|------|-------------|
| `level-of-detail.md` | Controlling detail level in generated images |

## prompt-engineering-guide/prompt-templates/

| File | Description |
|------|-------------|
| `universal.md` | Universal prompt template structure |

## prompt-engineering-guide/visual-formats/

| File | Description |
|------|-------------|
| `graphic-design.md` | Prompting for graphic design outputs |
| `illustration.md` | Prompting for illustration outputs |
| `logos-and-icons.md` | Prompting for logos and icons |
| `photorealism.md` | Prompting for photorealistic images |
| `vector-art.md` | Prompting for vector art and SVG outputs |
