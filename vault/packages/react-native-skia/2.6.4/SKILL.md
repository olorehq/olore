---
name: olore-react-native-skia-2.6.4
description: Local react-native-skia documentation reference (2.6.4). React Native Skia documentation. Use for high-performance 2D graphics, shaders, animations, canvas rendering, image filters, path effects, and Skia API in React Native.
---

# react-native-skia Documentation

React Native Skia documentation. Use for high-performance 2D graphics, shaders, animations, canvas rendering, image filters, path effects, and Skia API in React Native.

## Documentation Structure

```
contents/
├── getting-started/   # Installation, setup, web, headless, bundle size (5 files)
├── canvas/            # Canvas component, rendering modes, contexts (3 files)
├── shapes/            # Path, ellipses, box, polygons, vertices, atlas, patch (8 files)
├── paint/             # Paint overview and paint properties (2 files)
├── image-filters/     # Blur, shadows, displacement map, morphology, offset, runtime shaders (7 files)
├── shaders/           # Gradients, color shaders, image shaders, SkSL, Perlin noise (5 files)
├── text/              # Text, paragraphs, glyphs, blobs, text on path (5 files)
├── animations/        # Reanimated 3 integration, hooks, gestures, textures (4 files)
└── (root)             # Group, mask, image, SVG, animated images, video, filters, effects (13 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Installation & setup | `contents/getting-started/installation.md`, `contents/getting-started/hello-world.md` |
| Web support | `contents/getting-started/web.mdx` |
| Canvas & rendering | `contents/canvas/canvas.md`, `contents/canvas/rendering-modes.md` |
| Drawing shapes | `contents/shapes/path.md`, `contents/shapes/ellipses.md`, `contents/shapes/box.md`, `contents/shapes/polygons.md` |
| Paint & colors | `contents/paint/overview.md`, `contents/paint/properties.md` |
| Image filters | `contents/image-filters/overview.md`, `contents/image-filters/blur.md`, `contents/image-filters/shadows.md` |
| Shaders & gradients | `contents/shaders/gradients.md`, `contents/shaders/language.md`, `contents/shaders/colors.md` |
| Text rendering | `contents/text/text.md`, `contents/text/paragraph.md`, `contents/text/glyphs.md` |
| Animations (Reanimated) | `contents/animations/reanimated3.md`, `contents/animations/hooks.md`, `contents/animations/gestures.md` |
| Masking & compositing | `contents/mask.md`, `contents/group.md`, `contents/backdrop-filters.md` |
| Images & SVG | `contents/image.md`, `contents/image-svg.md`, `contents/animated-images.md`, `contents/video.md` |
| Path effects | `contents/path-effects.md`, `contents/color-filters.md`, `contents/mask-filters.md` |
| Lottie/Skottie | `contents/skottie.md` |
| Snapshots & pictures | `contents/snapshot-views.md`, `contents/pictures.md` |
| Path API migration | `contents/shapes/path-migration.md` |

## When to use

Use this skill when the user asks about:
- Drawing shapes, paths, and custom graphics in React Native
- Shader programming (SkSL, gradients, noise, image shaders)
- Image filters (blur, shadows, displacement, morphology)
- Text rendering and typography (fonts, paragraphs, text on path)
- Animations with Reanimated 3 and gesture handling
- Canvas setup, rendering modes, and performance
- Masking, compositing, and blend modes
- Lottie animations via Skottie
- Video and animated image rendering
- Web/headless usage of React Native Skia

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
