# react-native-skia Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/getting-started/` | Installation, setup, web support, headless usage | 5 |
| `contents/canvas/` | Canvas component, rendering modes, contexts | 3 |
| `contents/shapes/` | Drawing shapes: paths, ellipses, boxes, polygons, vertices, atlas, patch | 7 |
| `contents/animations/` | Reanimated integration, hooks, gestures, textures | 4 |
| `contents/shaders/` | Gradients, colors, images, Skia shading language, Perlin noise | 5 |
| `contents/image-filters/` | Blur, shadows, displacement map, morphology, offset, runtime shader | 7 |
| `contents/text/` | Text rendering, blobs, glyphs, paragraphs, text on path | 5 |
| `contents/paint/` | Paint overview and properties | 2 |
| `contents/` (root) | Core topics: images, SVG, masks, filters, effects, video, animations | 14 |

## getting-started/

| File | Description |
|------|-------------|
| `getting-started/installation.md` | Installing react-native-skia on iOS, Android, and Expo |
| `getting-started/hello-world.md` | First Skia component walkthrough |
| `getting-started/web.mdx` | Web support via CanvasKit |
| `getting-started/headless.md` | Running Skia without a display (Node.js, testing) |
| `getting-started/bundle-size.md` | Reducing bundle size / tree-shaking |

## canvas/

| File | Description |
|------|-------------|
| `canvas/canvas.md` | The `<Canvas>` component and its props |
| `canvas/rendering-modes.md` | CPU vs GPU rendering modes |
| `canvas/contexts.md` | Canvas contexts and drawing contexts |

## shapes/

| File | Description |
|------|-------------|
| `shapes/path.md` | Drawing and animating SVG-style paths |
| `shapes/ellipses.md` | Drawing circles and ellipses |
| `shapes/box.md` | Drawing rectangles and rounded rectangles |
| `shapes/polygons.md` | Drawing polygons and lines |
| `shapes/vertices.md` | Custom mesh/vertex drawing |
| `shapes/atlas.md` | Atlas sprite drawing |
| `shapes/patch.md` | Patch/mesh cubic bezier drawing |

## animations/

| File | Description |
|------|-------------|
| `animations/reanimated3.md` | Integration with Reanimated 3 |
| `animations/hooks.md` | Skia animation hooks (`useValue`, `useTiming`, etc.) |
| `animations/gestures.md` | Gesture-driven animations with react-native-gesture-handler |
| `animations/textures.md` | Animated textures and offscreen rendering |

## shaders/

| File | Description |
|------|-------------|
| `shaders/gradients.md` | Linear, radial, and sweep gradients |
| `shaders/colors.md` | Color shaders and blending |
| `shaders/images.md` | Image-based shaders |
| `shaders/language.md` | Skia Shading Language (SKSL) runtime shaders |
| `shaders/perlin-noise.md` | Perlin noise and fractal noise shaders |

## image-filters/

| File | Description |
|------|-------------|
| `image-filters/overview.md` | Image filter overview and composition |
| `image-filters/blur.md` | Blur filter |
| `image-filters/shadows.md` | Drop shadow and inner shadow filters |
| `image-filters/displacement-map.md` | Displacement map filter |
| `image-filters/morphology.md` | Dilate and erode filters |
| `image-filters/offset.md` | Offset filter |
| `image-filters/runtime-shader.md` | Custom runtime shader filters |

## text/

| File | Description |
|------|-------------|
| `text/text.md` | Basic text rendering with `<Text>` |
| `text/blob.md` | Text blobs for batch drawing |
| `text/glyphs.md` | Low-level glyph rendering |
| `text/paragraph.md` | Rich text paragraphs with layout |
| `text/path.md` | Text along a path |

## paint/

| File | Description |
|------|-------------|
| `paint/overview.md` | Paint concept and usage |
| `paint/properties.md` | Paint properties: color, opacity, blend modes, anti-alias |

## Root files

| File | Description |
|------|-------------|
| `image.md` | Loading and rendering images |
| `image-svg.md` | Loading and rendering SVG images |
| `animated-images.md` | Animated GIF/WebP images |
| `mask.md` | Masking with `<Mask>` |
| `mask-filters.md` | Blur and solid mask filters |
| `color-filters.md` | Color matrix and blend color filters |
| `backdrop-filters.md` | Backdrop (background) blur and color filters |
| `path-effects.md` | Dash, discrete, path-1D, and corner path effects |
| `group.md` | `<Group>` for transformations, clipping, and paint inheritance |
| `pictures.md` | Skia Picture recording for performance |
| `snapshot-views.md` | Taking snapshots of canvas content |
| `video.md` | Video rendering with Skia |
| `skottie.md` | Lottie animations via Skottie |
| `tutorials.md` | Community tutorials and learning resources |
