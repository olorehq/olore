# react-native-skia Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` (root) | Top-level component and feature guides | 13 |
| `contents/animations/` | Animation, gestures, and GPU textures | 4 |
| `contents/canvas/` | Canvas component, contexts, and rendering | 4 |
| `contents/getting-started/` | Installation, setup, migration | 5 |
| `contents/image-filters/` | Image filter components | 7 |
| `contents/paint/` | Paint and drawing properties | 2 |
| `contents/shaders/` | Shaders, gradients, SkSL | 5 |
| `contents/shapes/` | Shape primitives and paths | 8 |
| `contents/text/` | Text, paragraphs, glyphs | 5 |

## (root)

| File | Description |
|------|-------------|
| `animated-images.md` | Displaying animated GIF/WebP images via hooks |
| `backdrop-filters.md` | Applying filters to content behind an element |
| `color-filters.md` | Color matrix, blend, lerp and luminance color filters |
| `group.md` | Group component for nesting and applying transforms, clips, and effects to children |
| `image-svg.md` | Rendering SVG images in a canvas |
| `image.md` | Image component, fit modes, and loading images |
| `mask-filters.md` | Blur mask filters |
| `mask.md` | Mask component with alpha and luminance modes |
| `path-effects.md` | Dash, corner, discrete, and other path effects |
| `pictures.md` | Recording display lists with Picture for variable drawing commands |
| `skottie.md` | Playing Lottie animations through Skottie |
| `snapshot-views.md` | Notes on view snapshots, moved to React Native WebGPU in v3 |
| `webgpu.md` | Using WebGPU and Dawn alongside Skia Graphite |

## animations/

| File | Description |
|------|-------------|
| `gestures.md` | Driving Skia drawings with React Native Gesture Handler |
| `hooks.md` | Animation hooks and value helpers for Skia |
| `reanimated3.md` | Using Reanimated shared values to animate Skia properties |
| `textures.md` | Creating GPU textures off the JS thread as shared values |

## canvas/

| File | Description |
|------|-------------|
| `canvas.md` | Canvas component API, sizing, and screenshots |
| `contexts.md` | Bridging React contexts into the Skia renderer |
| `graphite.md` | SkiaGraphiteView for frame-by-frame rendering from any runtime |
| `rendering-modes.md` | Retained mode versus immediate rendering |

## getting-started/

| File | Description |
|------|-------------|
| `headless.md` | Running Skia offscreen on Node with CPU or GPU |
| `hello-world.md` | First Skia drawing example |
| `installation.md` | Installing and configuring the library |
| `migration.md` | Migrating from v2 to v3 and removed APIs |
| `web.mdx` | Web support setup with CanvasKit |

## image-filters/

| File | Description |
|------|-------------|
| `blur.md` | Blur image filter |
| `displacement-map.md` | Displacement map image filter |
| `morphology.md` | Dilate and erode morphology filter |
| `offset.md` | Offset image filter |
| `overview.md` | Image filters overview and composing filters |
| `runtime-shader.md` | Runtime shader image filter with SkSL |
| `shadows.md` | Drop shadow and inner shadow filters |

## paint/

| File | Description |
|------|-------------|
| `overview.md` | Paint component and how drawings are styled |
| `properties.md` | Color, style, stroke, blend mode, and other paint properties |

## shaders/

| File | Description |
|------|-------------|
| `colors.md` | Color shader and blend modes |
| `gradients.md` | Linear, radial, sweep, and conical gradients |
| `images.md` | Image shader for tiling and transforming images |
| `language.md` | Skia shading language (SkSL) and runtime effects |
| `perlin-noise.md` | Fractal and turbulence Perlin noise shaders |

## shapes/

| File | Description |
|------|-------------|
| `atlas.md` | Drawing many sprites efficiently with Atlas |
| `box.md` | Box and BoxShadow rounded rectangles |
| `ellipses.md` | Circle and Oval components |
| `patch.md` | Coons patch drawing |
| `path-migration.md` | Migrating to the new Path API |
| `path.md` | Path component, SVG strings, and path builders |
| `polygons.md` | Points, Line, and Polygon-style shapes |
| `vertices.md` | Drawing custom triangle meshes with Vertices |

## text/

| File | Description |
|------|-------------|
| `blob.md` | Text blobs with precomputed glyph positions |
| `glyphs.md` | Drawing individual glyphs |
| `paragraph.md` | Paragraph layout with rich text styles |
| `path.md` | Text drawn along a path |
| `text.md` | Text component and loading fonts |
