---
name: olore-react-native-skia-latest
description: Local react-native-skia documentation reference (latest). React Native Skia documentation. Use for high-performance 2D graphics, shaders, animations, canvas rendering, image filters, path effects, and Skia API in React Native.
---

# react-native-skia Documentation

React Native Skia documentation. Use for high-performance 2D graphics, shaders, animations, canvas rendering, image filters, path effects, and Skia API in React Native.

## Documentation Structure

```
contents/
├── getting-started/   # Installation, setup, web, headless (5 files)
├── canvas/            # Canvas component, rendering modes, contexts (3 files)
├── shapes/            # Paths, boxes, ellipses, polygons, atlas, vertices (8 files)
├── animations/        # Reanimated integration, hooks, gestures, textures (4 files)
├── shaders/           # SkSL language, gradients, image shaders, Perlin noise (5 files)
├── image-filters/     # Blur, shadows, offset, morphology, displacement, runtime shader (7 files)
├── text/              # Text, paragraph, glyphs, text on path, text blob (5 files)
├── paint/             # Paint overview and properties (2 files)
└── (root)             # Images, SVG, group, mask, filters, effects, video, skottie (13 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Installation & setup | `contents/getting-started/installation.md`, `contents/getting-started/hello-world.md` |
| Web support | `contents/getting-started/web.mdx` |
| Canvas & rendering modes | `contents/canvas/canvas.md`, `contents/canvas/rendering-modes.md` |
| Paths & shapes | `contents/shapes/path.md`, `contents/shapes/box.md`, `contents/shapes/ellipses.md`, `contents/shapes/polygons.md` |
| Path API migration | `contents/shapes/path-migration.md` |
| Animations with Reanimated | `contents/animations/reanimated3.md`, `contents/animations/hooks.md` |
| Gestures | `contents/animations/gestures.md` |
| Shaders & SkSL | `contents/shaders/language.md`, `contents/shaders/gradients.md`, `contents/shaders/images.md` |
| Image filters | `contents/image-filters/overview.md`, `contents/image-filters/blur.md`, `contents/image-filters/shadows.md` |
| Runtime shaders | `contents/image-filters/runtime-shader.md` |
| Text rendering | `contents/text/text.md`, `contents/text/paragraph.md`, `contents/text/glyphs.md` |
| Paint & blend modes | `contents/paint/overview.md`, `contents/paint/properties.md` |
| Images & SVG | `contents/image.md`, `contents/image-svg.md`, `contents/animated-images.md` |
| Mask & clipping | `contents/mask.md`, `contents/mask-filters.md` |
| Color filters | `contents/color-filters.md` |
| Backdrop filters | `contents/backdrop-filters.md` |
| Video | `contents/video.md` |
| Lottie animations (Skottie) | `contents/skottie.md` |
| Snapshot views | `contents/snapshot-views.md` |
| Path effects | `contents/path-effects.md` |
| Atlas / sprite batching | `contents/shapes/atlas.md` |
| Pictures (immediate mode) | `contents/pictures.md` |

## When to use

Use this skill when the user asks about:
- Drawing 2D graphics, shapes, paths, or canvas in React Native
- Skia shaders, SkSL, gradients, and visual effects
- Animating Skia components with Reanimated or gesture handlers
- Image filters (blur, shadow, displacement, morphology)
- Text rendering, paragraphs, and glyphs
- Using the Paint API and blend modes
- Loading and rendering images, SVGs, or video frames
- Lottie animations with Skottie
- React Native Skia API reference (Canvas, Group, Path, etc.)
- Migrating from older Path API to immutable PathBuilder

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
