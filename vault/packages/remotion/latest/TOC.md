# remotion Table of Contents

## Directory Map

```
contents/
├── (top-level)         # Core API, guides, concepts, tutorials (180 files)
├── ai/                 # AI/LLM integration guides (5 files)
├── animated-captions/  # @remotion/animated-captions (2 files)
├── animated-emoji/     # @remotion/animated-emoji (3 files)
├── animation-utils/    # @remotion/animation-utils (3 files)
├── audio/              # Audio usage guides (12 files)
├── captions/           # @remotion/captions API (11 files)
├── cli/                # CLI commands reference (19 files)
├── client-side-rendering/ # Browser-side rendering (7 files)
├── cloudrun/           # Google Cloud Run deployment (41 files)
├── effects/            # @remotion/effects (40 files)
├── elevenlabs/         # @remotion/elevenlabs (2 files)
├── enable-scss/        # SCSS support (2 files)
├── fonts-api/          # Fonts API (2 files)
├── gif/                # GIF rendering (4 files)
├── google-fonts/       # Google Fonts integration (5 files)
├── install-whisper-cpp/ # Whisper.cpp integration (6 files)
├── lambda/             # AWS Lambda deployment (97 files)
├── layout-utils/       # @remotion/layout-utils (7 files)
├── licensing/          # Licensing API (3 files)
├── light-leaks/        # @remotion/light-leaks (3 files)
├── lottie/             # @remotion/lottie (6 files)
├── media/              # Media guides (6 files)
├── media-parser/       # @remotion/media-parser (29 files)
├── media-utils/        # @remotion/media-utils (3 files)
├── mediabunny/         # Mediabunny integration (9 files)
├── miscellaneous/      # Misc guides and snippets (26 files)
├── motion-blur/        # @remotion/motion-blur (5 files)
├── noise/              # @remotion/noise (4 files)
├── openai-whisper/     # @remotion/openai-whisper (2 files)
├── paths/              # @remotion/paths SVG paths (21 files)
├── player/             # @remotion/player (17 files)
├── preload/            # @remotion/preload (6 files)
├── remotion/           # remotion package overview (1 file)
├── renderer/           # @remotion/renderer Node.js API (17 files)
├── rive/               # Rive animations (2 files)
├── rounded-text-box/   # @remotion/rounded-text-box (2 files)
├── sfx/                # @remotion/sfx sound effects (33 files)
├── shapes/             # @remotion/shapes (21 files)
├── skia/               # @remotion/skia (3 files)
├── starburst/          # @remotion/starburst (3 files)
├── studio/             # Remotion Studio API (23 files)
├── tailwind/           # Tailwind CSS v3 setup (2 files)
├── tailwind-v4/        # Tailwind CSS v4 setup (2 files)
├── terminology/        # Glossary / terminology (14 files)
├── transitions/        # @remotion/transitions (31 files)
├── troubleshooting/    # Troubleshooting guides (23 files)
├── vercel/             # Vercel deployment (8 files)
├── videos/             # Video guides (4 files)
├── web-renderer/       # Web renderer API (7 files)
├── webcodecs/          # @remotion/webcodecs (31 files)
├── whisper-web/        # @remotion/whisper-web (8 files)
└── zod-types/          # @remotion/zod-types (5 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/getting-started.mdx` |
| Core fundamentals | `contents/the-fundamentals.mdx` |
| API overview | `contents/api.mdx` |
| Rendering video (Node.js) | `contents/renderer.mdx` |
| Rendering video (Lambda) | `contents/lambda/setup.mdx` |
| Rendering video (Cloud Run) | `contents/cloudrun/setup.mdx` |
| CLI reference | `contents/cli/cli.mdx` |
| Player component | `contents/player/` |
| Sequences & composition | `contents/sequence.mdx` |
| Animation & interpolation | `contents/interpolate.mdx` |
| Troubleshooting | `contents/troubleshooting/` |

## Detailed Structure

### Top-level core files (180 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Installation and initial project setup |
| `the-fundamentals.mdx` | Core concepts: compositions, sequences, frames |
| `api.mdx` | Full API overview index |
| `composition.mdx` | `<Composition>` component API |
| `sequence.mdx` | `<Sequence>` component API |
| `sequences.mdx` | Using sequences guide |
| `series.mdx` | `<Series>` component API |
| `loop.mdx` | `<Loop>` component API |
| `freeze.mdx` | `<Freeze>` component API |
| `folder.mdx` | `<Folder>` for organizing compositions |
| `absolute-fill.mdx` | `<AbsoluteFill>` component |
| `still.mdx` | `<Still>` component API |
| `stills.mdx` | Rendering stills guide |
| `interpolate.mdx` | `interpolate()` animation function |
| `interpolate-colors.mdx` | `interpolateColors()` function |
| `easing.mdx` | Easing functions reference |
| `spring.mdx` | `spring()` animation function |
| `measure-spring.mdx` | `measureSpring()` function |
| `animating-properties.mdx` | Guide to animating CSS properties |
| `animation-math.mdx` | Math for animations |
| `use-current-frame.mdx` | `useCurrentFrame()` hook |
| `use-video-config.mdx` | `useVideoConfig()` hook |
| `use-current-scale.mdx` | `useCurrentScale()` hook |
| `use-pixel-density.mdx` | `usePixelDensity()` hook |
| `use-remotion-environment.mdx` | `useRemotionEnvironment()` hook |
| `use-buffer-state.mdx` | `useBufferState()` hook |
| `use-delay-render.mdx` | `useDelayRender()` hook |
| `use-audio-data.mdx` | `useAudioData()` hook |
| `use-windowed-audio-data.mdx` | `useWindowedAudioData()` hook |
| `use-img-and-iframe.mdx` | `useImg()` and `useIframe()` hooks |
| `use-video-texture.mdx` | `useVideoTexture()` hook |
| `use-offthread-video-texture.mdx` | `useOffthreadVideoTexture()` hook |
| `delay-render.mdx` | `delayRender()` / `continueRender()` API |
| `continue-render.mdx` | `continueRender()` API |
| `cancel-render.mdx` | `cancelRender()` API |
| `calculate-metadata.mdx` | `calculateMetadata()` for dynamic compositions |
| `dynamic-metadata.mdx` | Dynamic metadata guide |
| `passing-props.mdx` | Passing props to compositions |
| `how-props-flow.mdx` | Props flow explanation |
| `get-input-props.mdx` | `getInputProps()` function |
| `parameterized-rendering.mdx` | Parameterized rendering guide |
| `dataset-render.mdx` | Batch/dataset rendering |
| `schemas.mdx` | Input prop schemas with Zod |
| `config.mdx` | `remotion.config.ts` configuration file |
| `env-variables.mdx` | Environment variables |
| `bundle.mdx` | `bundle()` function |
| `bundler.mdx` | Bundler configuration |
| `render.mdx` | Rendering overview |
| `renderer.mdx` | `@remotion/renderer` Node.js API |
| `ssr.mdx` | Server-side rendering guide |
| `ssr-node.mdx` | SSR with Node.js |
| `ssr-legacy.mdx` | Legacy SSR API |
| `render-all.mdx` | `renderAll()` function |
| `render-as-gif.mdx` | Rendering as GIF |
| `encoding.mdx` | Video encoding settings |
| `quality.mdx` | Quality settings |
| `scaling.mdx` | Scaling / resolution |
| `multiple-fps.mdx` | Multiple FPS compositions |
| `hdr.mdx` | HDR video output |
| `metadata.mdx` | Video metadata |
| `offthreadvideo.mdx` | `<OffthreadVideo>` component |
| `img.mdx` | `<Img>` component |
| `iframe.mdx` | `<Iframe>` component |
| `animatedimage.mdx` | `<AnimatedImage>` component |
| `canvasimage.mdx` | `<CanvasImage>` component |
| `artifact.mdx` | `<Artifact>` component |
| `artifacts.mdx` | Artifacts guide |
| `overlay.mdx` | `<Overlay>` component |
| `layers.mdx` | Layers guide |
| `clipper.mdx` | `<Clipper>` component |
| `using-audio.mdx` | Audio integration guide |
| `html5-audio.mdx` | `<Audio>` component |
| `html5-video.mdx` | `<Video>` component |
| `audiobuffertodataurl.mdx` | `audioBufferToDataUrl()` |
| `get-audio-data.mdx` | `getAudioData()` function |
| `get-audio-duration-in-seconds.mdx` | `getAudioDurationInSeconds()` |
| `get-waveform-portion.mdx` | `getWaveformPortion()` |
| `visualize-audio.mdx` | Audio visualization guide |
| `sample-rate.mdx` | Audio sample rate |
| `get-image-dimensions.mdx` | `getImageDimensions()` |
| `get-video-metadata.mdx` | `getVideoMetadata()` |
| `get-static-files.mdx` | `getStaticFiles()` |
| `staticfile.mdx` | `staticFile()` function |
| `static-file-relative-paths.mdx` | Relative paths in public dir |
| `static-file-remote-urls.mdx` | Remote URL assets |
| `watch-static-file.mdx` | `watchStaticFile()` |
| `importing-assets.mdx` | Importing assets guide |
| `fonts.mdx` | Fonts guide |
| `font-picker.mdx` | Font picker integration |
| `data-fetching.mdx` | Data fetching patterns |
| `dynamic-import.mdx` | Dynamic imports |
| `prefetch.mdx` | Prefetching assets |
| `hls.mdx` | HLS video streaming |
| `media-fragments.mdx` | Media fragments |
| `media-playback-error.mdx` | Media playback error handling |
| `non-seekable-media.mdx` | Non-seekable media handling |
| `transparent-videos.mdx` | Transparent video rendering |
| `video-manipulation.mdx` | Video manipulation guide |
| `video-tags.mdx` | Video tag reference |
| `video-uploads.mdx` | Video upload handling |
| `validating-user-videos.mdx` | Validating user-submitted videos |
| `slow-method-to-extract-frame.mdx` | Extracting frames slowly |
| `transforms.mdx` | CSS transforms |
| `shaders.mdx` | WebGL shaders |
| `greenscreen.mdx` | Green screen / chroma key |
| `posterization.mdx` | Posterization effect |
| `noise-visualization.mdx` | Noise visualization |
| `maps.mdx` | Maps integration |
| `figma.mdx` | Figma import guide |
| `after-effects.mdx` | After Effects import via Lottie |
| `spline.mdx` | Spline 3D integration |
| `three.mdx` | React Three Fiber integration |
| `three-canvas.mdx` | Three.js canvas integration |
| `html-in-canvas-guide.mdx` | HTML in canvas guide |
| `measuring.mdx` | Measuring elements |
| `preview.mdx` | Remotion Studio preview |
| `studio-app.mdx` | Studio as standalone app |
| `visual-editing.mdx` | Visual editing in Studio |
| `building-a-timeline.mdx` | Building a timeline UI |
| `interactive.mdx` | Interactive compositions |
| `player-into-remotion-project.mdx` | Adding Player to project |
| `performance.mdx` | Performance optimization |
| `flickering.mdx` | Fixing flickering |
| `chromium-flags.mdx` | Chromium flags configuration |
| `open-gl.mdx` | OpenGL renderer options |
| `gpu.mdx` | GPU acceleration |
| `hardware-acceleration.mdx` | Hardware acceleration guide |
| `distributed-rendering.mdx` | Distributed rendering guide |
| `docker.mdx` | Docker setup |
| `ffmpeg.mdx` | FFmpeg configuration |
| `presigned-urls.mdx` | Presigned URLs for assets |
| `security.mdx` | Security guide |
| `testing.mdx` | Testing Remotion components |
| `register-root.mdx` | `registerRoot()` function |
| `random.mdx` | `random()` deterministic function |
| `using-randomness.mdx` | Using randomness guide |
| `spring.mdx` | Spring physics animations |
| `get-remotion-environment.mdx` | `getRemotionEnvironment()` |
| `detect-remotion.mdx` | Detecting Remotion environment |
| `version.mdx` | `VERSION` constant |
| `version-mismatch.mdx` | Fixing version mismatches |
| `remotion.mdx` | `remotion` package overview |
| `overwriting-webpack-config.mdx` | Custom webpack config |
| `legacy-babel-loader.mdx` | Legacy Babel loader |
| `brownfield-installation.mdx` | Adding Remotion to existing project |
| `creating-a-library.mdx` | Creating a Remotion library |
| `standalone.mdx` | Standalone bundle |
| `cors-issues.mdx` | CORS troubleshooting |
| `timeout.mdx` | Render timeout |
| `enametoolong.mdx` | ENAMETOOLONG error fix |
| `target-closed.mdx` | Target closed error fix |
| `wrong-composition-mount.mdx` | Wrong composition mount error |
| `media-playback-error.mdx` | Media playback errors |
| `upgrading.mdx` | Upgrading Remotion |
| `4-0-migration.mdx` | v4.0 migration guide |
| `5-0-migration.mdx` | v5.0 migration guide (planned) |
| `compare.mdx` | Comparison of SSR rendering options |
| `azure-container-apps.mdx` | Azure Container Apps deployment |
| `cloudflare-containers.mdx` | Cloudflare Containers deployment |
| `vercel-sandbox.mdx` | Vercel Sandbox deployment |
| `vercel.mdx` | Vercel deployment guide |
| `deno.mdx` | Deno compatibility |
| `bun.mdx` | Bun compatibility |
| `electron.mdx` | Electron integration |
| `angular.mdx` | Angular integration |
| `svelte.mdx` | Svelte integration |
| `solid.mdx` | Solid.js integration |
| `vue.mdx` | Vue.js integration |
| `react-native.mdx` | React Native integration |
| `react-18.mdx` | React 18 guide |
| `react-19.mdx` | React 19 guide |
| `jsx-support.mdx` | JSX configuration |
| `tailwind.mdx` | Tailwind CSS v3 setup |
| `tailwind-2.mdx` | Tailwind CSS v2 setup |
| `third-party.mdx` | Third-party library integration |
| `terminology.mdx` | Terminology overview |
| `the-fundamentals.mdx` | Fundamental concepts guide |

### ai/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | AI with Remotion overview |
| `coding-agents.mdx` | Using coding agents (Claude, Codex) |
| `generate.mdx` | Generating Remotion code with LLMs |
| `dynamic-compilation.mdx` | JIT compilation of AI-generated code |
| `system-prompt.mdx` | System prompt / llms.txt for LLMs |

### animated-captions/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/animated-captions overview |
| `faq.mdx` | FAQ for animated captions |

### animated-emoji/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/animated-emoji overview |
| `animated-emoji.mdx` | `<AnimatedEmoji>` component |
| `get-available-emoji.mdx` | `getAvailableEmoji()` function |

### animation-utils/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/animation-utils overview |
| `interpolate-styles.mdx` | `interpolateStyles()` function |
| `make-transform.mdx` | `makeTransform()` function |

### audio/ (12 files)

| File | Description |
|------|-------------|
| `importing.mdx` | Importing audio assets |
| `volume.mdx` | Volume control |
| `muting.mdx` | Muting audio |
| `delaying.mdx` | Delaying audio |
| `trimming.mdx` | Trimming audio |
| `speed.mdx` | Audio playback speed |
| `pitch.mdx` | Audio pitch manipulation |
| `exporting.mdx` | Exporting audio |
| `from-video.mdx` | Extracting audio from video |
| `sfx.mdx` | Sound effects guide |
| `visualization.mdx` | Audio visualization |
| `order-of-operations.mdx` | Audio processing order |

### captions/ (11 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/captions overview |
| `api.mdx` | Full captions API reference |
| `caption.mdx` | Caption object type |
| `importing.mdx` | Importing captions |
| `displaying.mdx` | Displaying captions |
| `transcribing.mdx` | Transcribing audio to captions |
| `exporting.mdx` | Exporting captions |
| `parse-srt.mdx` | `parseSrt()` function |
| `serialize-srt.mdx` | `serializeSrt()` function |
| `create-tiktok-style-captions.mdx` | TikTok-style captions tutorial |
| `ensure-max-characters-per-line.mdx` | Line length limiting |

### cli/ (19 files)

| File | Description |
|------|-------------|
| `cli.mdx` | CLI overview |
| `render.mdx` | `npx remotion render` command |
| `still.mdx` | `npx remotion still` command |
| `studio.mdx` | `npx remotion studio` command |
| `bundle.mdx` | `npx remotion bundle` command |
| `compositions.mdx` | `npx remotion compositions` command |
| `add.mdx` | `npx remotion add` command |
| `install.mdx` | `npx remotion install` command |
| `upgrade.mdx` | `npx remotion upgrade` command |
| `versions.mdx` | `npx remotion versions` command |
| `ffmpeg.mdx` | `npx remotion ffmpeg` command |
| `ffprobe.mdx` | `npx remotion ffprobe` command |
| `gpu.mdx` | `npx remotion gpu` command |
| `benchmark.mdx` | `npx remotion benchmark` command |
| `create-video.mdx` | `npx create-video` command |
| `help.mdx` | `npx remotion help` command |
| `skills.mdx` | `npx remotion skills` command |
| `browser/index.mdx` | `npx remotion browser` subcommands |
| `browser/ensure.mdx` | `npx remotion browser ensure` |

### client-side-rendering/ (7 files)

| File | Description |
|------|-------------|
| `index.mdx` | Client-side rendering overview |
| `how-it-works.mdx` | How CSR works |
| `html-in-canvas.mdx` | HTML in canvas with CSR |
| `limitations.mdx` | CSR limitations |
| `migration.mdx` | Migrating to CSR |
| `cancellation.mdx` | Cancelling CSR renders |
| `telemetry.mdx` | CSR telemetry |

### cloudrun/ (41 files)

| File | Description |
|------|-------------|
| `setup.mdx` | Google Cloud Run setup |
| `api.mdx` | Cloud Run API reference |
| `cli.mdx` | Cloud Run CLI overview |
| `checklist.mdx` | Pre-deployment checklist |
| `permissions.mdx` | Required permissions |
| `region-selection.mdx` | Region selection guide |
| `deployservice.mdx` | `deployService()` function |
| `deploysite.mdx` | `deploySite()` function |
| `deleteservice.mdx` | `deleteService()` function |
| `deletesite.mdx` | `deleteSite()` function |
| `rendermediaoncloudrun.mdx` | `renderMediaOnCloudRun()` |
| `renderstilloncloudrun.mdx` | `renderStillOnCloudRun()` |
| `getservices.mdx` | `getServices()` function |
| `getServiceinfo.mdx` | `getServiceInfo()` function |
| `getsites.mdx` | `getSites()` function |
| `getregions.mdx` | `getRegions()` function |
| `getorcreatebucket.mdx` | `getOrCreateBucket()` |
| `status.mdx` | Render status |
| `limits.mdx` | Service limits |
| `upgrading.mdx` | Upgrading Cloud Run |
| `uninstall.mdx` | Uninstalling Cloud Run |
| `light-client.mdx` | Light client usage |
| `multiple-buckets.mdx` | Multiple buckets setup |
| `instancecount.mdx` | Instance count configuration |
| `testpermissions.mdx` | `testPermissions()` function |
| `speculateservicename.mdx` | `speculateServiceName()` |
| `generate-env.mdx` | Environment setup |
| `cli/permissions.mdx` | `npx remotion cloudrun permissions` |
| `cli/regions.mdx` | `npx remotion cloudrun regions` |
| `cli/render.mdx` | `npx remotion cloudrun render` |
| `cli/services.mdx` | `npx remotion cloudrun services` |
| `cli/sites.mdx` | `npx remotion cloudrun sites` |

### effects/ (40 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/effects overview |
| `blur.mdx` | Blur effect |
| `brightness.mdx` | Brightness effect |
| `contrast.mdx` | Contrast effect |
| `saturation.mdx` | Saturation effect |
| `grayscale.mdx` | Grayscale effect |
| `hue.mdx` | Hue rotation effect |
| `invert.mdx` | Invert colors effect |
| `glow.mdx` | Glow effect |
| `drop-shadow.mdx` | Drop shadow effect |
| `vignette.mdx` | Vignette effect |
| `color-key.mdx` | Color key / chroma key |
| `chromatic-aberration.mdx` | Chromatic aberration effect |
| `duotone.mdx` | Duotone color effect |
| `tint.mdx` | Tint effect |
| `noise.mdx` | Noise effect |
| `noise-displacement.mdx` | Noise displacement effect |
| `dot-grid.mdx` | Dot grid effect |
| `halftone.mdx` | Halftone effect |
| `halftone-linear-gradient.mdx` | Halftone with gradient |
| `lines.mdx` | Lines effect |
| `scanlines.mdx` | Scanlines effect |
| `tv-signal-off.mdx` | TV signal off effect |
| `white-noise.mdx` | White noise effect |
| `wave.mdx` | Wave distortion effect |
| `waves.mdx` | Waves effect |
| `pattern.mdx` | Pattern effect |
| `rings.mdx` | Rings effect |
| `shine.mdx` | Shine effect |
| `pixel-dissolve.mdx` | Pixel dissolve transition |
| `scale.mdx` | Scale effect |
| `mirror.mdx` | Mirror effect |
| `fisheye.mdx` | Fisheye lens effect |
| `barrel-distortion.mdx` | Barrel distortion |
| `zigzag.mdx` | Zigzag effect |
| `speckle.mdx` | Speckle effect |
| `starburst.mdx` | Starburst effect |
| `evolve.mdx` | Evolve transition |
| `uv-translate.mdx` | UV translate effect |
| `xy-translate.mdx` | XY translate effect |
| `linear-progressive-blur.mdx` | Progressive blur |

### elevenlabs/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/elevenlabs overview |
| `elevenlabs-transcript-to-captions.mdx` | `elevenlabsTranscriptToCaptions()` |

### lambda/ (97 files)

| File | Description |
|------|-------------|
| `setup.mdx` | AWS Lambda setup guide |
| `api.mdx` | Lambda API reference |
| `cli.mdx` | Lambda CLI overview |
| `checklist.mdx` | Pre-deployment checklist |
| `permissions.mdx` | Required IAM permissions |
| `how-lambda-works.mdx` | Architecture explanation |
| `rendermediaonlambda.mdx` | `renderMediaOnLambda()` |
| `rendervideoonlambda.mdx` | `renderVideoOnLambda()` (alias) |
| `renderstillonlambda.mdx` | `renderStillOnLambda()` |
| `getrenderprogress.mdx` | `getRenderProgress()` |
| `deployfunction.mdx` | `deployFunction()` |
| `deploysite.mdx` | `deploySite()` |
| `deletefunction.mdx` | `deleteFunction()` |
| `deleterender.mdx` | `deleteRender()` |
| `deletesite.mdx` | `deleteSite()` |
| `downloadmedia.mdx` | `downloadMedia()` |
| `downloadvideo.mdx` | `downloadVideo()` |
| `estimateprice.mdx` | `estimatePrice()` |
| `getfunctions.mdx` | `getFunctions()` |
| `getfunctioninfo.mdx` | `getFunctionInfo()` |
| `getsites.mdx` | `getSites()` |
| `getregions.mdx` | `getRegions()` |
| `getorcreatebucket.mdx` | `getOrCreateBucket()` |
| `getawsclient.mdx` | `getAwsClient()` |
| `getrolepolicy.mdx` | `getRolePolicy()` |
| `getuserpolicy.mdx` | `getUserPolicy()` |
| `getcompositionsonlambda.mdx` | `getCompositionsOnLambda()` |
| `presignurl.mdx` | `presignUrl()` |
| `speculateFunctionName.mdx` | `speculateFunctionName()` |
| `simulatepermissions.mdx` | `simulatePermissions()` |
| `validatewebhooksignature.mdx` | `validateWebhookSignature()` |
| `webhooks.mdx` | Lambda webhooks guide |
| `authentication.mdx` | Authentication setup |
| `region-selection.mdx` | Region selection |
| `concurrency.mdx` | Concurrency configuration |
| `disk-size.mdx` | Disk size configuration |
| `cost.mdx` | Cost guide |
| `cost-example.mdx` | Cost examples |
| `data-transfer-cost.mdx` | Data transfer costs |
| `limits.mdx` | Lambda limits |
| `speed.mdx` | Rendering speed guide |
| `insights.mdx` | Render insights |
| `autodelete.mdx` | Auto-delete renders |
| `runtime.mdx` | Lambda runtime |
| `custom-destination.mdx` | Custom output destination |
| `custom-layers.mdx` | Custom Lambda layers |
| `bucket-naming.mdx` | Bucket naming conventions |
| `bucket-security.mdx` | Bucket security |
| `s3-public-access.mdx` | S3 public access config |
| `multiple-buckets.mdx` | Multiple buckets |
| `naming-convention.mdx` | Naming conventions |
| `proxy.mdx` | Proxy configuration |
| `r2.mdx` | Cloudflare R2 storage |
| `faq.mdx` | Lambda FAQ |
| `upgrading.mdx` | Upgrading Lambda |
| `uninstall.mdx` | Uninstalling Lambda |
| `light-client.mdx` | Light client |
| `separate-environments.mdx` | Separate environments |
| `go.mdx` | Go SDK |
| `python.mdx` | Python SDK |
| `php.mdx` | PHP SDK |
| `ruby.mdx` | Ruby SDK |
| `troubleshooting/` | Lambda troubleshooting guides |
| `without-iam/` | Lambda without IAM guides |

### layout-utils/ (7 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/layout-utils overview |

### media-parser/ (29 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/media-parser overview |
| `parse-media.mdx` | `parseMedia()` function |
| `fields.mdx` | Available metadata fields |
| `seeking.mdx` | Seeking in media |
| `samples.mdx` | Reading media samples/frames |
| `workers.mdx` | Web worker usage |
| `types.mdx` | TypeScript types |
| `format-support.mdx` | Supported formats |
| `runtime-support.mdx` | Runtime support |
| `metadata.mdx` | Metadata extraction |

### media-utils/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/media-utils overview |

### mediabunny/ (9 files)

| File | Description |
|------|-------------|
| `index.mdx` | Mediabunny overview |
| `extract-frames.mdx` | Extracting frames |
| `extract-thumbnail.mdx` | Extracting thumbnails |
| `metadata.mdx` | Reading metadata |
| `new-video.mdx` | Creating new video |
| `formats.mdx` | Supported formats |
| `can-decode.mdx` | `canDecode()` check |
| `webcodecs-bugs.mdx` | WebCodecs bugs/workarounds |
| `version.mdx` | Version info |

### miscellaneous/ (26 files)

| File | Description |
|------|-------------|
| `nextjs.mdx` | Next.js integration |
| `linux-dependencies.mdx` | Linux system dependencies |
| `linux-single-process.mdx` | Linux single-process mode |
| `docker.mdx` | Docker setup |
| `cross-origin-isolation.mdx` | Cross-origin isolation |
| `embed-remotion-studio.mdx` | Embedding Studio |
| `live-streaming.mdx` | Live streaming guide |
| `render-in-browser.mdx` | Browser rendering |
| `render-on-edge.mdx` | Edge rendering |
| `cloud-gpu.mdx` | Cloud GPU guide |
| `cloud-gpu-docker.mdx` | Cloud GPU with Docker |
| `chrome-headless-shell.mdx` | Headless Chrome setup |
| `pexels.mdx` | Pexels integration |
| `emojis.mdx` | Emoji rendering |
| `video-formats.mdx` | Video format guide |
| `ts-aliases.mdx` | TypeScript path aliases |
| `absolute-paths.mdx` | Absolute path configuration |
| `parse-media-vs-get-video-metadata.mdx` | Comparison guide |
| `automatic-duration.mdx` | Automatic duration calculation |
| `snippets/` | Code snippets |

### motion-blur/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/motion-blur overview |

### noise/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/noise overview |

### paths/ (21 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/paths overview |

### player/ (17 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/player overview |
| `player.mdx` | `<Player>` component API |
| `api.mdx` | Full Player API reference |

### renderer/ (17 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/renderer overview |

### sfx/ (33 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/sfx overview |

### shapes/ (21 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/shapes overview |

### studio/ (23 files)

| File | Description |
|------|-------------|
| `studio.mdx` | Studio API overview |
| `api.mdx` | Full Studio API reference |
| `interactivity.mdx` | Studio interactivity |
| `shortcuts.mdx` | Keyboard shortcuts |
| `visual-control.mdx` | Visual controls |

### transitions/ (31 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/transitions overview |
| `presentations/` | Transition presentations |
| `timings/` | Transition timing functions |

### troubleshooting/ (23 files)

| File | Description |
|------|-------------|
| `index.mdx` | Troubleshooting overview |

### webcodecs/ (31 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/webcodecs overview |
| `convert-media.mdx` | `convertMedia()` function |
| `extract-frames.mdx` | Extracting frames |
| `resizing.mdx` | Resizing video |
| `rotation.mdx` | Video rotation |
| `types.mdx` | TypeScript types |

### whisper-web/ (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/whisper-web overview |
| `transcribe.mdx` | `transcribe()` function |
| `to-captions.mdx` | `toCaptions()` conversion |
| `download-whisper-model.mdx` | Model download |

### Other packages

| Directory | Description |
|-----------|-------------|
| `lottie/` | @remotion/lottie for Lottie/After Effects animations (6 files) |
| `gif/` | GIF rendering support (4 files) |
| `google-fonts/` | Google Fonts integration (5 files) |
| `light-leaks/` | @remotion/light-leaks effects (3 files) |
| `starburst/` | @remotion/starburst effects (3 files) |
| `rounded-text-box/` | @remotion/rounded-text-box (2 files) |
| `skia/` | @remotion/skia (3 files) |
| `rive/` | Rive animations (2 files) |
| `openai-whisper/` | @remotion/openai-whisper (2 files) |
| `install-whisper-cpp/` | Whisper.cpp install guide (6 files) |
| `zod-types/` | @remotion/zod-types (5 files) |
| `animated-captions/` | @remotion/animated-captions (2 files) |
| `fonts-api/` | Fonts API (2 files) |
| `web-renderer/` | Web renderer API (7 files) |
| `vercel/` | Vercel deployment (8 files) |
| `terminology/` | Glossary (14 files) |
| `licensing/` | Licensing API (3 files) |
| `enable-scss/` | SCSS setup (2 files) |
| `tailwind/` | Tailwind v3 (2 files) |
| `tailwind-v4/` | Tailwind v4 (2 files) |
| `videos/` | Video guides (4 files) |
| `media/` | Media guides (6 files) |
| `preload/` | @remotion/preload (6 files) |
| `animation-utils/` | @remotion/animation-utils (3 files) |
| `layout-utils/` | @remotion/layout-utils (7 files) |
| `noise/` | @remotion/noise (4 files) |
| `motion-blur/` | @remotion/motion-blur (5 files) |
| `elevenlabs/` | @remotion/elevenlabs (2 files) |
| `cloudrun/` | Google Cloud Run (41 files) |
| `mediabunny/` | Mediabunny library (9 files) |
