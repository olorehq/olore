# recraft Table of Contents

## Directory Map

```
contents/
├── api-reference/  # REST API: auth, endpoints, models, tools, styles, limits (32 files)
├── mcp-reference/  # Recraft MCP server (3 files)
├── best-practices/  # Prompting and consistency tips (2 files)
├── recraft-models/  # Studio model pages (V2-V4.1, external) (8 files)
├── prompt-engineering-guide/  # Prompt engineering deep dive (17 files)
├── recraft-studio/  # Studio (UI) feature guides (60 files)
├── plans-and-billing/  # Commercial rights only (1 files)
├── trust-and-security/  # Data use and model training (1 files)
└── (root files: design-agent.md, recraft-plugins.md, v4-styles-creation-guide.md)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| API quickstart (token + first image) | `contents/api-reference/getting-started.md` |
| Whole API on one page for agents | `contents/api-reference/agents.md` |
| Pick an API model | `contents/api-reference/models/overview.md` |
| Endpoints, parameters, text layout | `contents/api-reference/endpoints.md` |
| Editing tools (vectorize, upscale, inpaint...) | `contents/api-reference/tools/` |
| Custom styles | `contents/api-reference/styles.md` |
| Errors and limits | `contents/api-reference/error-handling.md`, `contents/api-reference/appendix.md` |
| MCP server | `contents/mcp-reference/remote-server.md` |
| Prompting | `contents/prompt-engineering-guide/prompting-with-recraft-v4.md` |

## Detailed Structure

### (root) (3 files)

| File | Description |
|------|-------------|
| `design-agent.md` | Design Agent: conversational agent in Studio for multi-step design tasks |
| `recraft-plugins.md` | Recraft plugins for Figma, Photoshop, Canva and other design tools |
| `v4-styles-creation-guide.md` | How to choose reference images and build effective V4 custom styles |

### api-reference/ (14 files)

| File | Description |
|------|-------------|
| `agents.md` | The whole Recraft API on one page for AI agents and LLMs: rules, auth, every model id with price and parameters, every endpoint, limits, and working examples. |
| `ai-tools.md` | Give Claude, ChatGPT, Cursor, or any LLM one link with the whole Recraft API, or install the Claude Code skill, so it writes a working integration for you. |
| `api-portal.md` | Preview requests and manage API tokens, usage, billing, and workspace access. |
| `appendix.md` | Rate limits, image storage, prompt length, supported image sizes, and input image limits for every Recraft API model. |
| `clients.md` | Call the Recraft API from any HTTP client, or from the OpenAI Python library with a custom base URL and extra_body for Recraft-specific parameters. |
| `endpoints.md` | Every Recraft API endpoint with its price and docs page, plus the full reference for image generation, styles, controls, and text layout. |
| `error-handling.md` | How Recraft API errors look, which ones are known, and how to handle and retry them in your code. |
| `examples.md` | Ready-to-run Recraft API examples for generation, styles, editing, vectorizing, upscaling, and prompt enhancement. |
| `getting-started.md` | Get a Recraft API token and generate your first image with one request, in cURL, Python, or JavaScript. |
| `image-inputs-and-results.md` | How to send images to the Recraft API as files, URLs, or data URLs, and how to get results as URLs, Base64, or multipart bytes. |
| `introduction.md` | Generate and edit raster and vector images with Recraft models over one REST API. Get a token, send a prompt, get an image. |
| `pricing.md` | Recraft API unit packages and the per-image and per-request price of every model and operation. |
| `styles.md` | How styles work in the Recraft API: custom styles from reference images, V4 style match, and the curated V2 / V3 style library. |
| `swagger.md` | The OpenAPI description of the Recraft API for code generators, API tools, and AI agents, with JSON request bodies and every current model. |

### api-reference/models/ (7 files)

| File | Description |
|------|-------------|
| `overview.md` | Every Recraft API model with its price, output, and best use case, and how model names encode raster, vector, Pro, Utility, and Flash variants. |
| `recraft-v2.md` | Recraft V2 raster and SVG models: the lowest-cost vector option in the API, for icons and minimalistic illustration, from $0.022 per image. |
| `recraft-v3.md` | Recraft V3 raster and SVG models: curated styles, text placement, negative prompts, and the only line that supports inpainting, outpainting, and background operations. |
| `recraft-v4.md` | Recraft V4 raster and SVG models: design taste, prompt accuracy, and production-grade vector output, from $0.04 per image. |
| `recraft-v4-1.md` | The default Recraft API model: polished raster and SVG images with strong photorealism and prompt following, from $0.035 per image. |
| `recraft-v4-1-flash.md` | The fastest and cheapest Recraft API model: about 1.3 seconds and $0.007 per image, with quality close to V4.1. Raster only, no styles. |
| `recraft-v4-styles.md` | Style-consistent generation: define a style from 1 to 10 reference images and every image holds to it. No training step, from $0.035 per image. |

### api-reference/tools/ (11 files)

| File | Description |
|------|-------------|
| `background.md` | Replace the background of an image from a prompt, or generate a new one behind a mask, from $0.04 per image. |
| `enhance-details.md` | Re-render a raster image with Recraft V4.1 Pro for sharper textures and finer details for $0.21 per request. |
| `enhance-prompt.md` | Expand a short prompt into a richer description with visual context, style cues, and composition details for $0.01 per request. |
| `erase-region.md` | Erase part of an image with a mask for $0.002 per request. |
| `image-to-image.md` | Create a new image from an existing image and a prompt, and set with strength how far it moves from the original. Works with Recraft V3, V4, and V4.1. |
| `inpainting.md` | Regenerate the masked part of an image from a prompt and keep the rest unchanged, from $0.04 per image. |
| `outpainting.md` | Extend an image beyond its borders with new content generated from a prompt, from $0.04 per image. |
| `remix.md` | Generate variations of an image without a prompt, in the aspect ratio you choose, for $0.04 per request. |
| `remove-background.md` | Remove the background from a PNG, JPG, WEBP, or SVG image for $0.01 per request. |
| `upscale.md` | Increase image resolution: crisp upscale keeps the content and costs $0.004 per request, creative upscale also regenerates fine detail and faces. |
| `vectorize.md` | Convert a raster image (PNG, JPG, or WEBP) into an editable SVG for $0.01 per request. |

### best-practices/ (2 files)

| File | Description |
|------|-------------|
| `character-consistency.md` | Keeping a character consistent across multiple generations |
| `prompting-and-image-generation.md` | Short best-practice tips for prompting and generating images |

### mcp-reference/ (3 files)

| File | Description |
|------|-------------|
| `getting-started.md` | Overview of the Recraft MCP server and how to connect |
| `remote-server.md` | Connect to Recraft's hosted MCP server without any local installation |
| `tools.md` | List of tools exposed by the Recraft MCP server |

### plans-and-billing/ (1 files)

| File | Description |
|------|-------------|
| `commercial-rights-and-ownership.md` | Commercial use rights and ownership of generated images by plan |

### prompt-engineering-guide/ (3 files)

| File | Description |
|------|-------------|
| `closing-notes.md` | Closing notes and summary of the prompting guide |
| `introduction.md` | Introduction to prompting for image generation |
| `prompting-with-recraft-v4.md` | Detailed prompting guide for Recraft V4 with many examples |

### prompt-engineering-guide/artistic-principles/ (4 files)

| File | Description |
|------|-------------|
| `attributes.md` | Describing attributes such as color, texture, and material in prompts |
| `medium.md` | Specifying the artistic medium in prompts |
| `style.md` | Specifying visual style in prompts |
| `vibe.md` | Conveying mood and atmosphere in prompts |

### prompt-engineering-guide/core-principles/ (3 files)

| File | Description |
|------|-------------|
| `composition.md` | Controlling framing, layout, and camera angle in prompts |
| `context.md` | Adding setting and environment context to prompts |
| `subject.md` | Describing the main subject clearly in prompts |

### prompt-engineering-guide/depth-and-control/ (1 files)

| File | Description |
|------|-------------|
| `level-of-detail.md` | Controlling the level of detail in generated images |

### prompt-engineering-guide/prompt-templates/ (1 files)

| File | Description |
|------|-------------|
| `universal.md` | Universal prompt template to structure any prompt |

### prompt-engineering-guide/visual-formats/ (5 files)

| File | Description |
|------|-------------|
| `graphic-design.md` | Prompting for posters, layouts, and graphic design |
| `illustration.md` | Prompting for illustrations |
| `logos-and-icons.md` | Prompting for logos and icons |
| `photorealism.md` | Prompting for photorealistic images |
| `vector-art.md` | Prompting for vector art |

### recraft-models/ (8 files)

| File | Description |
|------|-------------|
| `choosing-a-model.md` | Quick guide to choosing between Recraft models |
| `external-models.md` | Third-party models available inside Recraft |
| `introduction.md` | Recraft has more than one model. Recraft's own models improve generation over generation. |
| `recraft-V2.md` | Recraft V2 model overview in Studio |
| `recraft-V3.md` | Recraft V3 model overview in Studio |
| `recraft-V4.md` | Recraft V4 model overview in Studio |
| `recraft-v4-1.md` | Recraft V4.1 model overview, strengths, and examples |
| `recraft-v4-styles.md` | Recraft V4 Styles model overview in Studio |

### recraft-studio/ (5 files)

| File | Description |
|------|-------------|
| `history.md` | Browsing and reusing past generations in History |
| `interface-overview.md` | Tour of the Studio interface |
| `overview.md` | Recraft Studio is a creative platform powered by top frontier image models, including Recraft, Nano Banana, and others. |
| `quick-start.md` | Studio quick start: first generation |
| `templates.md` | Using and publishing design templates |

### recraft-studio/color-palettes/ (3 files)

| File | Description |
|------|-------------|
| `how-to-create-a-color-palette.md` | Creating a color palette |
| `recoloring-existing-images.md` | Recoloring existing images with a palette |
| `using-color-palettes-in-generation.md` | Applying palettes during generation |

### recraft-studio/exporting-and-sharing/ (3 files)

| File | Description |
|------|-------------|
| `how-to-export-an-image.md` | Exporting images and supported formats |
| `how-to-share-a-project.md` | Sharing a project with collaborators |
| `how-to-share-an-image.md` | Sharing an image via link |

### recraft-studio/format-conversions-and-scaling/ (2 files)

| File | Description |
|------|-------------|
| `upscaling.md` | Upscaling images in Studio |
| `vectorizing.md` | Converting raster images to SVG in Studio |

### recraft-studio/frames/ (3 files)

| File | Description |
|------|-------------|
| `inpainting.md` | Inpainting inside a frame |
| `introduction-to-frames.md` | What frames are and how to use them |
| `outpainting.md` | Outpainting by extending a frame |

### recraft-studio/image-editing/ (8 files)

| File | Description |
|------|-------------|
| `background-tools.md` | Removing and replacing backgrounds |
| `editing-images-with-natural-language.md` | Editing images by describing changes in text |
| `enhance-details.md` | Enhancing detail and sharpness |
| `how-to-crop-an-image.md` | Cropping an image |
| `manual-editing-tools.md` | Manual brush, erase, and selection editing tools |
| `raster-effects.md` | Raster effects and adjustments |
| `remix.md` | Generating variations with Remix |
| `vector-editor.md` | Editing vector paths and shapes |

### recraft-studio/image-generation/ (11 files)

| File | Description |
|------|-------------|
| `agentic-mode.md` | Agentic generation mode in Studio |
| `artistic-levels.md` | Artistic level slider for controlling stylization |
| `aspect-ratios.md` | Choosing aspect ratios and sizes |
| `context-panel.md` | Context panel: references and inputs for generation |
| `external-models.md` | Using external models for generation in Studio |
| `generating-multiple-images.md` | Generating several images at once |
| `generation-modes.md` | Overview of generation modes |
| `how-to-generate-a-logo.md` | Step-by-step logo generation |
| `how-to-generate-an-image.md` | Step-by-step image generation |
| `prompt-panel.md` | Prompt panel controls |
| `selecting-a-style.md` | Selecting a style before generating |

### recraft-studio/image-generation/working-with-text-and-prompts/ (4 files)

| File | Description |
|------|-------------|
| `adding-text-to-an-image.md` | Rendering text inside images |
| `extract-prompt.md` | Extracting a prompt from an existing image |
| `negative-prompts.md` | Using negative prompts to exclude elements |
| `using-custom-fonts.md` | Using custom fonts in generated text |

### recraft-studio/importing/ (3 files)

| File | Description |
|------|-------------|
| `about-importing.md` | Overview of importing images |
| `how-to-import-an-image.md` | How to import an image |
| `size-limits-and-supported-formats.md` | Import size limits and supported formats |

### recraft-studio/libraries/ (2 files)

| File | Description |
|------|-------------|
| `community.md` | Browsing community creations and styles |
| `favorites.md` | Saving favorite images and styles |

### recraft-studio/mockups/ (2 files)

| File | Description |
|------|-------------|
| `applying-your-design-to-a-mockup.md` | Applying a design to a mockup |
| `how-to-create-a-mockup.md` | Creating a mockup |

### recraft-studio/styles/ (4 files)

| File | Description |
|------|-------------|
| `curated-styles.md` | Curated style library |
| `overview.md` | Styles overview |
| `seamless-patterns.md` | Creating seamless patterns |
| `sharing-a-style.md` | Sharing a custom style |

### recraft-studio/styles/custom-styles/ (3 files)

| File | Description |
|------|-------------|
| `how-to-create-a-custom-style.md` | Creating a custom style from reference images |
| `how-to-delete-a-custom-style.md` | Deleting a custom style |
| `how-to-edit-a-custom-style.md` | Editing a custom style |

### recraft-studio/video-generation/ (2 files)

| File | Description |
|------|-------------|
| `how-to-generate-a-video.md` | Generating video from images or prompts |
| `video-prompts.md` | Prompting guide for video generation |

### recraft-studio/work-area/ (5 files)

| File | Description |
|------|-------------|
| `canvas.md` | Working on the canvas |
| `canvas-tools.md` | Canvas toolbar tools |
| `keyboard-shortcuts.md` | Keyboard shortcuts |
| `projects.md` | Managing projects |
| `selection-tools.md` | Selection tools |

### trust-and-security/ (1 files)

| File | Description |
|------|-------------|
| `data-use-and-model-training.md` | How user data is used and whether it trains models |
