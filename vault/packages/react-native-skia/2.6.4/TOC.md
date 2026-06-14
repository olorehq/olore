# react-native-skia Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/getting-started/` | Installation, setup, web, headless, and bundle size | 5 |
| `contents/canvas/` | Canvas component, rendering modes, and contexts | 3 |
| `contents/shapes/` | Path, ellipses, box, polygons, vertices, atlas, patch | 8 |
| `contents/paint/` | Paint overview and paint properties | 2 |
| `contents/image-filters/` | Blur, shadows, displacement map, morphology, offset, runtime shaders | 7 |
| `contents/shaders/` | Gradients, color shaders, image shaders, Skia Shading Language, Perlin noise | 5 |
| `contents/text/` | Text rendering, paragraphs, glyphs, blobs, text on path | 5 |
| `contents/animations/` | Reanimated 3 integration, hooks, gestures, textures | 4 |
| `contents/` (root) | Group, mask, image, SVG image, animated images, video, color filters, mask filters, path effects, backdrop filters, pictures, snapshot views, skottie | 13 |

## getting-started/

| File | Description |
|------|-------------|
| `installation.md` | How to install on iOS, Android, and web |
| `hello-world.md` | First canvas example and basic usage |
| `web.mdx` | Web support via CanvasKit WASM |
| `headless.md` | Headless/server-side rendering usage |
| `bundle-size.md` | Bundle size considerations and optimization |

## canvas/

| File | Description |
|------|-------------|
| `canvas.md` | The Canvas component and its props |
| `rendering-modes.md` | Default, continuous, and on-demand rendering modes |
| `contexts.md` | Canvas context and how to share values |

## shapes/

| File | Description |
|------|-------------|
| `path.md` | Path shapes and path operations |
| `path-migration.md` | Migrating from mutable to immutable Path API with PathBuilder |
| `ellipses.md` | Circle and oval shapes |
| `box.md` | Rect and RRect (rounded rectangle) shapes |
| `polygons.md` | Line, polygon, and point drawing |
| `vertices.md` | Custom vertex meshes |
| `atlas.md` | Efficient sprite/atlas rendering |
| `patch.md` | Cubic patch shapes |

## paint/

| File | Description |
|------|-------------|
| `overview.md` | Paint component and inheritance model |
| `properties.md` | Color, stroke width, style, opacity, and blend mode |

## image-filters/

| File | Description |
|------|-------------|
| `overview.md` | Image filter overview and composition |
| `blur.md` | Blur filter |
| `shadows.md` | Drop shadow and inner shadow filters |
| `displacement-map.md` | Displacement map filter |
| `morphology.md` | Dilate and erode morphology filters |
| `offset.md` | Offset filter |
| `runtime-shader.md` | Runtime shader image filter |

## shaders/

| File | Description |
|------|-------------|
| `gradients.md` | Linear, radial, sweep, and two-point conical gradients |
| `colors.md` | Color and fractal noise shaders |
| `images.md` | Image-based shaders |
| `language.md` | Skia Shading Language (SkSL) usage |
| `perlin-noise.md` | Perlin noise and fractal noise shaders |

## text/

| File | Description |
|------|-------------|
| `text.md` | Simple text rendering with fonts |
| `paragraph.md` | Rich text layout with ParagraphBuilder |
| `glyphs.md` | Glyph-level text rendering |
| `blob.md` | TextBlob for advanced text |
| `path.md` | Text along a path |

## animations/

| File | Description |
|------|-------------|
| `reanimated3.md` | Reanimated 3 integration and shared values |
| `hooks.md` | Animation hooks (useClockValue, useTouchHandler, etc.) |
| `gestures.md` | Gesture handling with react-native-gesture-handler |
| `textures.md` | Animated textures |

## Root-level files

| File | Description |
|------|-------------|
| `group.md` | Group component for composing and transforming children |
| `mask.md` | Masking with shapes and paths |
| `image.md` | Rendering images on canvas |
| `image-svg.md` | Rendering SVG images |
| `animated-images.md` | Animated GIF and WebP rendering |
| `video.md` | Video texture rendering on canvas |
| `color-filters.md` | Color matrix, blend, lerp, and compose color filters |
| `mask-filters.md` | Mask/blur filters applied to shapes |
| `path-effects.md` | Dash, discrete, corner, sum, and compose path effects |
| `backdrop-filters.md` | Backdrop filter for blur effects behind elements |
| `pictures.md` | Recording and replaying drawing commands |
| `snapshot-views.md` | Capturing canvas content as images |
| `skottie.md` | Lottie animation playback with Skottie |
