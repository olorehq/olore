# react-native-skia Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/getting-started/` | Installation, setup, web, headless, bundle size | 5 |
| `contents/canvas/` | Canvas component, rendering modes, contexts | 3 |
| `contents/shapes/` | Paths, boxes, ellipses, polygons, atlas, patch, vertices | 8 |
| `contents/animations/` | Reanimated integration, hooks, gestures, textures | 4 |
| `contents/shaders/` | Shader language, gradients, image shaders, colors, Perlin noise | 5 |
| `contents/image-filters/` | Blur, shadows, offset, morphology, displacement map, runtime shader | 7 |
| `contents/text/` | Text, paragraph, glyphs, text on path, text blob | 5 |
| `contents/paint/` | Paint overview, paint properties | 2 |
| `contents/` (root) | Images, SVG, group, mask, filters, effects, video, skottie, etc. | 13 |

## getting-started/

| File | Description |
|------|-------------|
| `installation.md` | Installing React Native Skia on iOS, Android, and Expo |
| `hello-world.md` | Basic hello world example and first canvas |
| `web.mdx` | Using React Native Skia on the web with React Native Web |
| `headless.md` | Running React Native Skia in headless/server environments |
| `bundle-size.md` | App size impact and bundle size details per platform |

## canvas/

| File | Description |
|------|-------------|
| `canvas.md` | Canvas component props and usage |
| `rendering-modes.md` | Retained vs immediate mode rendering |
| `contexts.md` | Canvas contexts and drawing context APIs |

## shapes/

| File | Description |
|------|-------------|
| `path.md` | Path drawing API and PathBuilder |
| `path-migration.md` | Migration guide from mutable to immutable Path API |
| `box.md` | Box and RoundedRect shapes |
| `ellipses.md` | Circle and oval shapes |
| `polygons.md` | Line and polygon drawing |
| `atlas.md` | Atlas for efficient sprite/batch rendering |
| `patch.md` | Bezier patch rendering |
| `vertices.md` | Vertices and mesh drawing |

## animations/

| File | Description |
|------|-------------|
| `reanimated3.md` | Integration with Reanimated 3 and shared values |
| `hooks.md` | Animation hooks (useDerivedValue, useComputedValue, etc.) |
| `gestures.md` | Gesture integration with React Native Gesture Handler |
| `textures.md` | Animated textures and GPU texture updates |

## shaders/

| File | Description |
|------|-------------|
| `language.md` | SkSL shader language reference and usage |
| `gradients.md` | Linear, radial, sweep, and two-point conical gradients |
| `images.md` | Image shaders and tiling modes |
| `colors.md` | Color shaders and solid color fills |
| `perlin-noise.md` | Perlin noise and fractal noise shaders |

## image-filters/

| File | Description |
|------|-------------|
| `overview.md` | Image filter overview and composing filters |
| `blur.md` | Blur filter (BlurMask, BlurImage) |
| `shadows.md` | Drop shadow and inner shadow filters |
| `offset.md` | Offset image filter |
| `morphology.md` | Erode and dilate morphology filters |
| `displacement-map.md` | Displacement map filter |
| `runtime-shader.md` | Runtime shader image filter |

## text/

| File | Description |
|------|-------------|
| `text.md` | Text component and font loading |
| `paragraph.md` | Paragraph layout with rich text and line breaking |
| `glyphs.md` | Glyph-level text rendering |
| `path.md` | Text along a path |
| `blob.md` | Text blob for efficient multi-run text |

## paint/

| File | Description |
|------|-------------|
| `overview.md` | Paint component and paint propagation |
| `properties.md` | Paint properties (color, strokeWidth, blendMode, etc.) |

## Root-level files

| File | Description |
|------|-------------|
| `animated-images.md` | Animated GIF and WEBP image support |
| `backdrop-filters.md` | Backdrop blur and backdrop image filters |
| `color-filters.md` | Color matrix, blend, HSL, and luma color filters |
| `group.md` | Group component for paint inheritance and clipping |
| `image.md` | Image rendering (SkImage) and fit modes |
| `image-svg.md` | SVG image rendering |
| `mask.md` | Mask rendering and clip mask |
| `mask-filters.md` | Blur mask filter for glows and soft edges |
| `path-effects.md` | Dash, discrete, corner, and 1D/2D path effects |
| `pictures.md` | Picture API for immediate-mode variable drawing commands |
| `skottie.md` | Skottie Lottie animation renderer |
| `snapshot-views.md` | Snapshotting native views as SkImage |
| `video.md` | Video playback and frame extraction |
