---
name: olore-react-native-skia-latest
description: Local react-native-skia documentation reference (latest). React Native Skia documentation. Use for high-performance 2D graphics, shaders, animations, canvas rendering, image filters, path effects, and Skia API in React Native.
---

# react-native-skia Documentation

React Native Skia documentation. Use for high-performance 2D graphics, shaders, animations, canvas rendering, image filters, path effects, and Skia API in React Native.

## Documentation Structure

```
contents/
├── (root)/          # Group, Image, Mask, filters, path effects, Skottie, WebGPU (13 files)
├── animations/      # Reanimated, gestures, hooks, textures (4 files)
├── canvas/          # Canvas, contexts, Graphite view, rendering modes (4 files)
├── getting-started/ # Installation, hello world, web, headless, v3 migration (5 files)
├── image-filters/   # Blur, shadows, morphology, runtime shader, etc. (7 files)
├── paint/           # Paint component and properties (2 files)
├── shaders/         # Gradients, SkSL, image shaders, noise (5 files)
├── shapes/          # Path, box, ellipses, atlas, vertices, patch (8 files)
└── text/            # Text, paragraph, glyphs, blobs, text on path (5 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Install and setup | `contents/getting-started/installation.md`, `contents/getting-started/hello-world.md` |
| Migrating to v3 | `contents/getting-started/migration.md`, `contents/shapes/path-migration.md` |
| Canvas and rendering | `contents/canvas/canvas.md`, `contents/canvas/rendering-modes.md`, `contents/canvas/graphite.md` |
| Animations | `contents/animations/reanimated3.md`, `contents/animations/gestures.md`, `contents/animations/textures.md` |
| Shapes and paths | `contents/shapes/path.md`, `contents/shapes/box.md`, `contents/shapes/vertices.md` |
| Shaders and gradients | `contents/shaders/language.md`, `contents/shaders/gradients.md` |
| Filters | `contents/image-filters/overview.md`, `contents/color-filters.md`, `contents/mask-filters.md` |
| Text | `contents/text/text.md`, `contents/text/paragraph.md` |
| Images and SVG | `contents/image.md`, `contents/image-svg.md`, `contents/animated-images.md` |
| Web and headless | `contents/getting-started/web.mdx`, `contents/getting-started/headless.md`, `contents/webgpu.md` |
| Lottie | `contents/skottie.md` |

## When to use

Use this skill when the user asks about:
- Drawing 2D graphics with Skia in React Native
- Writing SkSL shaders, gradients, or runtime effects
- Animating Skia with Reanimated or gestures
- Image, color, or backdrop filters and path effects
- Rendering text, paragraphs, or SVG in a canvas
- Migrating React Native Skia to v3, or web/headless usage

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
