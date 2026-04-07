---
name: olore-react-native-skia-2.2.12
description: Local react-native-skia documentation reference (2.2.12). React Native Skia documentation. Use for high-performance 2D graphics, shaders, animations, canvas rendering, image filters, path effects, and Skia API in React Native.
---

# react-native-skia Documentation

React Native Skia documentation. Use for high-performance 2D graphics, shaders, animations, canvas rendering, image filters, path effects, and Skia API in React Native.

## Documentation Structure

```
contents/
├── getting-started/    # Installation, hello world, web, headless, bundle size (5 files)
├── canvas/             # Canvas component and contexts (2 files)
├── shapes/             # Paths, ellipses, boxes, polygons, vertices, atlas, patch, pictures (8 files)
├── animations/         # Reanimated 3 integration, hooks, gestures, textures (4 files)
├── shaders/            # Gradients, colors, image shaders, SKSL language, Perlin noise (5 files)
├── image-filters/      # Blur, shadows, displacement, morphology, runtime shaders (7 files)
├── text/               # Text, blobs, glyphs, paragraphs, text on path (5 files)
├── paint/              # Paint overview and properties (2 files)
└── (root)              # Images, SVG, masks, filters, effects, video, Skottie (13 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Installation & Setup | `contents/getting-started/installation.md`, `contents/getting-started/hello-world.md` |
| Web support | `contents/getting-started/web.mdx` |
| Canvas rendering | `contents/canvas/canvas.md`, `contents/canvas/contexts.md` |
| Drawing shapes | `contents/shapes/path.md`, `contents/shapes/ellipses.md`, `contents/shapes/box.md` |
| Animations (Reanimated) | `contents/animations/reanimated3.md`, `contents/animations/hooks.md` |
| Gestures | `contents/animations/gestures.md` |
| Shaders & gradients | `contents/shaders/gradients.md`, `contents/shaders/language.md` |
| Image filters & blur | `contents/image-filters/blur.md`, `contents/image-filters/overview.md` |
| Shadows | `contents/image-filters/shadows.md` |
| Custom shaders (SKSL) | `contents/shaders/language.md`, `contents/image-filters/runtime-shader.md` |
| Text rendering | `contents/text/text.md`, `contents/text/paragraph.md` |
| Images & SVG | `contents/image.md`, `contents/image-svg.md` |
| Masking & clipping | `contents/mask.md`, `contents/group.md` |
| Path effects | `contents/path-effects.md` |
| Performance | `contents/shapes/pictures.md`, `contents/snapshot-views.md` |
| Video | `contents/video.md` |
| Lottie / Skottie | `contents/skottie.md` |

## When to use

Use this skill when the user asks about:
- Drawing 2D graphics in React Native (shapes, paths, images)
- Shaders, gradients, and visual effects in React Native
- Animating canvas content with Reanimated or gesture handlers
- Image filters: blur, drop shadow, displacement maps, morphology
- Text rendering, paragraphs, and text along paths
- Skia API usage: Paint, Canvas, Groups, Masks
- Video rendering, Lottie animations (Skottie)
- Web support or headless Skia rendering

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
