# remotion Table of Contents

## Directory Map

```
contents/
├── (root files)              # Core API, fundamentals, setup (179 files)
├── lambda/                   # AWS Lambda rendering (97 files)
│   ├── cli/functions/        # Lambda CLI function commands
│   ├── cli/sites/            # Lambda CLI site commands
│   └── troubleshooting/      # Lambda troubleshooting
├── cloudrun/                 # Google Cloud Run rendering (41 files)
│   └── cli/                  # Cloud Run CLI commands
├── effects/                  # Visual effects reference (40 files)
├── sfx/                      # Sound effects reference (33 files)
├── recorder/                 # Remotion Recorder template (33 files)
│   ├── editing/              # Editing workflows
│   ├── record/               # Recording workflows
│   └── troubleshooting/      # Recorder troubleshooting
├── webcodecs/                # @remotion/webcodecs API (31 files)
├── transitions/              # @remotion/transitions API (31 files)
│   ├── presentations/        # Transition presentation types
│   └── timings/              # Transition timing functions
├── media-parser/             # @remotion/media-parser API (29 files)
├── miscellaneous/            # Misc guides (26 files)
│   └── snippets/             # Code snippets
├── editor-starter/           # Editor Starter template docs (24 files)
├── troubleshooting/          # General troubleshooting (23 files)
├── studio/                   # Remotion Studio API (23 files)
├── shapes/                   # @remotion/shapes API (21 files)
├── paths/                    # @remotion/paths API (21 files)
├── cli/                      # CLI reference (19 files)
│   └── browser/              # Browser subcommands
├── renderer/                 # @remotion/renderer API (17 files)
├── player/                   # @remotion/player API (17 files)
│   └── drag-and-drop/        # Player drag-and-drop
├── terminology/              # Glossary/terminology (14 files)
├── audio/                    # Audio guide (12 files)
├── captions/                 # @remotion/captions API (11 files)
├── mediabunny/               # @remotion/mediabunny API (9 files)
├── whisper-web/              # @remotion/whisper-web API (8 files)
├── vercel/                   # Vercel rendering API (8 files)
├── web-renderer/             # Web renderer API (7 files)
├── layout-utils/             # @remotion/layout-utils API (7 files)
├── client-side-rendering/    # Client-side rendering (7 files)
├── timeline/                 # @remotion/timeline API (6 files)
├── preload/                  # @remotion/preload API (6 files)
├── media/                    # Media handling (6 files)
├── lottie/                   # @remotion/lottie API (6 files)
├── install-whisper-cpp/      # Whisper.cpp install guide (6 files)
├── zod-types/                # @remotion/zod-types API (5 files)
├── motion-blur/              # @remotion/motion-blur API (5 files)
├── google-fonts/             # @remotion/google-fonts API (5 files)
├── ai/                       # AI integration guides (5 files)
├── videos/                   # Video component guide (4 files)
├── noise/                    # @remotion/noise API (4 files)
├── gif/                      # @remotion/gif API (4 files)
├── starburst/                # @remotion/starburst (3 files)
├── skia/                     # @remotion/skia API (3 files)
├── media-utils/              # @remotion/media-utils API (3 files)
├── light-leaks/              # @remotion/light-leaks (3 files)
├── licensing/                # @remotion/licensing API (3 files)
├── animation-utils/          # @remotion/animation-utils API (3 files)
├── animated-emoji/           # @remotion/animated-emoji API (3 files)
├── tailwind/                 # Tailwind CSS v3 guide (2 files)
├── tailwind-v4/              # Tailwind CSS v4 guide (2 files)
├── rounded-text-box/         # @remotion/rounded-text-box (2 files)
├── rive/                     # @remotion/rive API (2 files)
├── openai-whisper/           # OpenAI Whisper integration (2 files)
├── fonts-api/                # Fonts API guide (2 files)
├── enable-scss/              # SCSS setup (2 files)
├── elevenlabs/               # ElevenLabs integration (2 files)
├── animated-captions/        # @remotion/animated-captions (2 files)
└── remotion/                 # @remotion/remotion package (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/getting-started.mdx` |
| Core fundamentals | `contents/the-fundamentals.mdx` |
| API reference | `contents/api.mdx` |
| Configuration | `contents/config.mdx` |
| Composition | `contents/composition.mdx` |
| Sequence | `contents/sequence.mdx` |
| Interpolation | `contents/interpolate.mdx` |
| Spring animation | `contents/spring.mdx` |
| Rendering (SSR) | `contents/ssr.mdx` |
| Lambda deployment | `contents/lambda/` |
| Player embed | `contents/player/` |
| CLI reference | `contents/cli/cli.mdx` |
| Troubleshooting | `contents/troubleshooting/` |

## Detailed Structure

### Root files (179 files) — Core API and Guides

| File | Description |
|------|-------------|
| `getting-started.mdx` | Installation and project setup |
| `the-fundamentals.mdx` | Core concepts: compositions, sequences, frames |
| `api.mdx` | API overview index |
| `config.mdx` | remotion.config.ts configuration reference |
| `composition.mdx` | `<Composition>` component API |
| `sequence.mdx` | `<Sequence>` component API |
| `series.mdx` | `<Series>` component API |
| `loop.mdx` | `<Loop>` component API |
| `freeze.mdx` | `<Freeze>` component API |
| `still.mdx` | `<Still>` component API |
| `folder.mdx` | `<Folder>` component API |
| `overlay.mdx` | `<Overlay>` component API |
| `interpolate.mdx` | `interpolate()` function API |
| `interpolate-colors.mdx` | `interpolateColors()` API |
| `spring.mdx` | `spring()` animation API |
| `easing.mdx` | Easing functions reference |
| `measure-spring.mdx` | `measureSpring()` API |
| `random.mdx` | `random()` API for deterministic randomness |
| `absolute-fill.mdx` | `<AbsoluteFill>` component API |
| `img.mdx` | `<Img>` component API |
| `animatedimage.mdx` | `<AnimatedImage>` component API |
| `canvasimage.mdx` | `<CanvasImage>` component API |
| `iframe.mdx` | `<IFrame>` component API |
| `offthreadvideo.mdx` | `<OffthreadVideo>` component API |
| `html5-video.mdx` | `<Video>` component API |
| `html5-audio.mdx` | `<Audio>` component API |
| `using-audio.mdx` | Audio guide |
| `visualize-audio.mdx` | Audio visualization guide |
| `use-current-frame.mdx` | `useCurrentFrame()` hook |
| `use-video-config.mdx` | `useVideoConfig()` hook |
| `use-audio-data.mdx` | `useAudioData()` hook |
| `use-delay-render.mdx` | `useDelayRender()` hook |
| `use-buffer-state.mdx` | `useBufferState()` hook |
| `use-current-scale.mdx` | `useCurrentScale()` hook |
| `use-pixel-density.mdx` | `usePixelDensity()` hook |
| `use-remotion-environment.mdx` | `useRemotionEnvironment()` hook |
| `use-video-texture.mdx` | `useVideoTexture()` hook |
| `use-offthread-video-texture.mdx` | `useOffthreadVideoTexture()` hook |
| `use-img-and-iframe.mdx` | `useImg()` and `useIframe()` hooks |
| `use-windowed-audio-data.mdx` | `useWindowedAudioData()` hook |
| `delay-render.mdx` | `delayRender()` / `continueRender()` API |
| `continue-render.mdx` | `continueRender()` API |
| `register-root.mdx` | `registerRoot()` API |
| `calculate-metadata.mdx` | `calculateMetadata()` API |
| `prefetch.mdx` | `prefetch()` API |
| `staticfile.mdx` | `staticFile()` API |
| `get-static-files.mdx` | `getStaticFiles()` API |
| `watch-static-file.mdx` | `watchStaticFile()` API |
| `get-input-props.mdx` | `getInputProps()` API |
| `get-remotion-environment.mdx` | `getRemotionEnvironment()` API |
| `detect-remotion.mdx` | `detectRemotionEnvironment()` API |
| `get-audio-data.mdx` | `getAudioData()` API |
| `get-audio-duration-in-seconds.mdx` | `getAudioDurationInSeconds()` API |
| `get-image-dimensions.mdx` | `getImageDimensions()` API |
| `get-video-metadata.mdx` | `getVideoMetadata()` API |
| `get-waveform-portion.mdx` | `getWaveformPortion()` API |
| `audiobuffertodataurl.mdx` | `audioBufferToDataUrl()` API |
| `slow-method-to-extract-frame.mdx` | Frame extraction API |
| `bundle.mdx` | `bundle()` API |
| `bundler.mdx` | `@remotion/bundler` package reference |
| `render.mdx` | Rendering overview |
| `render-as-gif.mdx` | GIF rendering guide |
| `render-all.mdx` | Rendering all compositions |
| `cancel-render.mdx` | `cancelRender()` API |
| `ssr.mdx` | Server-side rendering overview |
| `ssr-node.mdx` | Node.js SSR guide |
| `ssr-legacy.mdx` | Legacy SSR API |
| `renderer.mdx` | `@remotion/renderer` package overview |
| `dataset-render.mdx` | Rendering from a dataset |
| `parameterized-rendering.mdx` | Parameterized rendering |
| `passing-props.mdx` | Passing props to compositions |
| `how-props-flow.mdx` | Props flow explained |
| `dynamic-metadata.mdx` | Dynamic metadata guide |
| `data-fetching.mdx` | Data fetching in compositions |
| `fonts.mdx` | Font loading guide |
| `font-picker.mdx` | Font picker component |
| `encoding.mdx` | Encoding/codec reference |
| `chromium-flags.mdx` | Chromium flags configuration |
| `gpu.mdx` | GPU acceleration guide |
| `hardware-acceleration.mdx` | Hardware acceleration guide |
| `open-gl.mdx` | OpenGL rendering guide |
| `docker.mdx` | Docker deployment guide |
| `azure-container-apps.mdx` | Azure Container Apps deployment |
| `cloudflare-containers.mdx` | Cloudflare containers guide |
| `performance.mdx` | Performance optimization |
| `flickering.mdx` | Fixing flickering guide |
| `timeout.mdx` | Render timeout guide |
| `cors-issues.mdx` | CORS issues guide |
| `security.mdx` | Security guide |
| `env-variables.mdx` | Environment variables guide |
| `importing-assets.mdx` | Importing assets guide |
| `media-fragments.mdx` | Media fragments guide |
| `media-playback-error.mdx` | Media playback errors |
| `non-seekable-media.mdx` | Non-seekable media guide |
| `hls.mdx` | HLS streaming guide |
| `hdr.mdx` | HDR video guide |
| `transparent-videos.mdx` | Transparent video guide |
| `greenscreen.mdx` | Green screen guide |
| `video-manipulation.mdx` | Video manipulation guide |
| `video-tags.mdx` | Video tags reference |
| `video-uploads.mdx` | Video upload guide |
| `validating-user-videos.mdx` | Validating user-uploaded videos |
| `transforms.mdx` | CSS transforms guide |
| `shaders.mdx` | WebGL shaders guide |
| `maps.mdx` | Maps integration guide |
| `figma.mdx` | Figma integration |
| `spline.mdx` | Spline 3D integration |
| `after-effects.mdx` | After Effects (Lottie) import |
| `three.mdx` | React Three Fiber integration |
| `three-canvas.mdx` | Three.js canvas guide |
| `accessibility.mdx` | Accessibility guide |
| `testing.mdx` | Testing guide |
| `scaling.mdx` | Scaling guide |
| `posterization.mdx` | Posterization guide |
| `multiple-fps.mdx` | Multiple FPS guide |
| `noise-visualization.mdx` | Noise visualization guide |
| `transitions.mdx` | Transitions overview |
| `schemas.mdx` | Zod schemas for props |
| `metadata.mdx` | Composition metadata |
| `artifacts.mdx` | Render artifacts |
| `artifact.mdx` | `<Artifact>` component API |
| `dynamic-import.mdx` | Dynamic imports |
| `standalone.mdx` | Standalone rendering |
| `distributed-rendering.mdx` | Distributed rendering |
| `overwriting-webpack-config.mdx` | Custom webpack config |
| `config.mdx` | remotion.config.ts reference |
| `chromium-flags.mdx` | Chromium flags |
| `cli/cli.mdx` | CLI reference |
| `version.mdx` | VERSION constant |
| `version-mismatch.mdx` | Version mismatch resolution |
| `upgrading.mdx` | Upgrade guide (current version) |
| `ffmpeg.mdx` | FFmpeg usage |
| `sample-rate.mdx` | Audio sample rate |
| `layers.mdx` | Layers concept |
| `clipper.mdx` | `<Clipper>` component |
| `null.mdx` | Null component (removed) |
| `measuring.mdx` | Measuring elements |
| `interactive.mdx` | Interactive compositions |
| `visual-editing.mdx` | Visual editing |
| `building-a-timeline.mdx` | Building a timeline |
| `brownfield-installation.mdx` | Brownfield installation |
| `using-randomness.mdx` | Deterministic randomness |
| `animating-properties.mdx` | Animating properties guide |
| `animation-math.mdx` | Animation math guide |
| `quality.mdx` | Output quality guide |
| `presigned-urls.mdx` | Presigned URLs guide |
| `static-file-relative-paths.mdx` | Static file paths |
| `static-file-remote-urls.mdx` | Remote URLs for assets |
| `studio-app.mdx` | Studio as app guide |
| `player-into-remotion-project.mdx` | Player in a project |
| `preview.mdx` | Preview guide |
| `jsx-support.mdx` | JSX support |
| `legacy-babel-loader.mdx` | Legacy Babel loader |
| `react-18.mdx` | React 18 guide |
| `react-19.mdx` | React 19 guide |
| `bun.mdx` | Bun runtime support |
| `deno.mdx` | Deno runtime support |
| `electron.mdx` | Electron integration |
| `react-native.mdx` | React Native guide |
| `angular.mdx` | Angular integration |
| `vue.mdx` | Vue.js integration |
| `svelte.mdx` | Svelte integration |
| `solid.mdx` | Solid.js integration |
| `tailwind.mdx` | Tailwind CSS v3 guide |
| `tailwind-2.mdx` | Tailwind CSS v2 guide |
| `enable-scss.mdx` | SCSS/Sass setup |
| `third-party.mdx` | Third-party integrations |
| `cloudrun.mdx` | Cloud Run overview |
| `lambda.mdx` | Lambda overview |
| `vercel.mdx` | Vercel rendering overview |
| `vercel-sandbox.mdx` | Vercel sandbox guide |
| `compare.mdx` | SSR options comparison |
| `wrong-composition-mount.mdx` | Composition mount error |
| `enametoolong.mdx` | ENAMETOOLONG error |
| `html-in-canvas-guide.mdx` | HTML in canvas guide |
| `create-video.mdx` (cli) | `create-video` CLI command |

### lambda/ (97 files) — AWS Lambda Rendering

| File | Description |
|------|-------------|
| `lambda/index.mdx` | Lambda overview |
| `lambda/setup.mdx` | Lambda setup guide |
| `lambda/permissions.mdx` | IAM permissions |
| `lambda/rendermediaonlambda.mdx` | `renderMediaOnLambda()` API |
| `lambda/renderstillonlambda.mdx` | `renderStillOnLambda()` API |
| `lambda/getrenderprogress.mdx` | `getRenderProgress()` API |
| `lambda/deploysite.mdx` | `deploySite()` API |
| `lambda/deletesite.mdx` | `deleteSite()` API |
| `lambda/deployfunction.mdx` | `deployFunction()` API |
| `lambda/deletefunction.mdx` | `deleteFunction()` API |
| `lambda/getfunctions.mdx` | `getFunctions()` API |
| `lambda/estimateprice.mdx` | `estimatePrice()` API |
| `lambda/speculatefunctionname.mdx` | `speculateFunctionName()` API |
| `lambda/cli/functions/` | Lambda function CLI commands |
| `lambda/cli/sites/` | Lambda sites CLI commands |
| `lambda/troubleshooting/` | Lambda troubleshooting |
| `lambda/without-iam/` | Lambda without IAM |

### cloudrun/ (41 files) — Google Cloud Run Rendering

| File | Description |
|------|-------------|
| `cloudrun/index.mdx` | Cloud Run overview |
| `cloudrun/setup.mdx` | Cloud Run setup |
| `cloudrun/rendermediaoncloudrun.mdx` | `renderMediaOnCloudRun()` API |
| `cloudrun/renderstilloncloudrun.mdx` | `renderStillOnCloudRun()` API |
| `cloudrun/deploysite.mdx` | `deploySite()` for Cloud Run |
| `cloudrun/deployservice.mdx` | `deployService()` API |
| `cloudrun/cli/` | Cloud Run CLI commands |

### effects/ (40 files) — Visual Effects

| File | Description |
|------|-------------|
| `effects/index.mdx` | Effects overview |
| `effects/` | Individual effect documentation |

### transitions/ (31 files) — @remotion/transitions

| File | Description |
|------|-------------|
| `transitions/index.mdx` | Transitions overview |
| `transitions/transitionseries.mdx` | `<TransitionSeries>` component |
| `transitions/use-transition-progress.mdx` | `useTransitionProgress()` hook |
| `transitions/presentations/` | Built-in presentation types (fade, slide, wipe, flip, etc.) |
| `transitions/timings/` | Timing functions (spring, linear, custom) |
| `transitions/audio-transitions.mdx` | Audio transitions |

### webcodecs/ (31 files) — @remotion/webcodecs

| File | Description |
|------|-------------|
| `webcodecs/index.mdx` | WebCodecs overview |
| `webcodecs/convert-media.mdx` | `convertMedia()` API |
| `webcodecs/extract-frames.mdx` | `extractFrames()` API |
| `webcodecs/can-copy-video-track.mdx` | `canCopyVideoTrack()` API |
| `webcodecs/can-copy-audio-track.mdx` | `canCopyAudioTrack()` API |
| `webcodecs/can-reencode-video-track.mdx` | `canReencodeVideoTrack()` API |
| `webcodecs/can-reencode-audio-track.mdx` | `canReencodeAudioTrack()` API |
| `webcodecs/convert-audiodata.mdx` | `convertAudioData()` API |
| `webcodecs/create-video-decoder.mdx` | `createVideoDecoder()` API |
| `webcodecs/create-audio-decoder.mdx` | `createAudioDecoder()` API |
| `webcodecs/webcodecs-controller.mdx` | `WebCodecsController` API |
| `webcodecs/resizing.mdx` | Resizing video guide |
| `webcodecs/rotation.mdx` | Video rotation guide |

### media-parser/ (29 files) — @remotion/media-parser

| File | Description |
|------|-------------|
| `media-parser/index.mdx` | Media parser overview |
| `media-parser/parse-media.mdx` | `parseMedia()` API |
| `media-parser/get-tracks.mdx` | Track information API |

### studio/ (23 files) — Remotion Studio API

| File | Description |
|------|-------------|
| `studio/studio.mdx` | Studio API overview |
| `studio/interactivity.mdx` | Studio interactivity guide |
| `studio/watch-static-file.mdx` | `watchStaticFile()` in Studio |
| `studio/write-static-file.mdx` | `writeStaticFile()` API |
| `studio/watch-public-folder.mdx` | `watchPublicFolder()` API |
| `studio/save-default-props.mdx` | Saving default props |
| `studio/update-default-props.mdx` | `updateDefaultProps()` API |
| `studio/visual-control.mdx` | Visual controls |
| `studio/shortcuts.mdx` | Keyboard shortcuts |

### player/ (17 files) — @remotion/player

| File | Description |
|------|-------------|
| `player/index.mdx` | Player overview |
| `player/player.mdx` | `<Player>` component API |
| `player/api.mdx` | Player API reference |
| `player/current-time.mdx` | Getting current time |
| `player/events.mdx` | Player events |
| `player/scaling.mdx` | Player scaling |
| `player/drag-and-drop/` | Drag-and-drop in player |

### renderer/ (17 files) — @remotion/renderer

| File | Description |
|------|-------------|
| `renderer/index.mdx` | Renderer overview |
| `renderer/render-media.mdx` | `renderMedia()` API |
| `renderer/render-still.mdx` | `renderStill()` API |
| `renderer/render-frames.mdx` | `renderFrames()` API |
| `renderer/stitch-frames-to-video.mdx` | `stitchFramesToVideo()` API |
| `renderer/get-compositions.mdx` | `getCompositions()` API |
| `renderer/select-composition.mdx` | `selectComposition()` API |
| `renderer/open-browser.mdx` | `openBrowser()` API |
| `renderer/make-cancel-signal.mdx` | `makeCancelSignal()` API |

### troubleshooting/ (23 files)

| File | Description |
|------|-------------|
| `troubleshooting/debug-failed-render.mdx` | Debug failed renders |
| `troubleshooting/browser-launch.mdx` | Browser launch issues |
| `troubleshooting/timeout.mdx` | Render timeout issues |
| `troubleshooting/video-flicker.mdx` | Video flickering |
| `troubleshooting/render-stuck.mdx` | Stuck renders |
| `troubleshooting/font-loading-errors.mdx` | Font loading errors |
| `troubleshooting/css-animations.mdx` | CSS animation issues |
| `troubleshooting/sigkill.mdx` | SIGKILL errors |

### audio/ (12 files) — Audio Guide

| File | Description |
|------|-------------|
| `audio/importing.mdx` | Importing audio |
| `audio/volume.mdx` | Controlling volume |
| `audio/muting.mdx` | Muting audio |
| `audio/trimming.mdx` | Trimming audio |
| `audio/delaying.mdx` | Delaying audio |
| `audio/speed.mdx` | Changing speed |
| `audio/pitch.mdx` | Changing pitch |
| `audio/visualization.mdx` | Audio visualization |
| `audio/exporting.mdx` | Exporting audio |
| `audio/from-video.mdx` | Audio from video |

### captions/ (11 files) — @remotion/captions

| File | Description |
|------|-------------|
| `captions/index.mdx` | Captions overview |
| `captions/transcribing.mdx` | Transcribing guide |
| `captions/displaying.mdx` | Displaying captions |
| `captions/api.mdx` | Captions API reference |
| `captions/parse-srt.mdx` | `parseSrt()` API |
| `captions/serialize-srt.mdx` | `serializeSrt()` API |
| `captions/caption.mdx` | `Caption` type |
| `captions/create-tiktok-style-captions.mdx` | TikTok-style captions guide |

### cli/ (19 files) — CLI Reference

| File | Description |
|------|-------------|
| `cli/cli.mdx` | CLI overview |
| `cli/render.mdx` | `remotion render` command |
| `cli/still.mdx` | `remotion still` command |
| `cli/compositions.mdx` | `remotion compositions` command |
| `cli/bundle.mdx` | `remotion bundle` command |
| `cli/studio.mdx` | `remotion studio` command |
| `cli/benchmark.mdx` | `remotion benchmark` command |
| `cli/versions.mdx` | Version commands |
| `cli/ffmpeg.mdx` | FFmpeg CLI |
| `cli/add.mdx` | `remotion add` command |

### shapes/ (21 files) — @remotion/shapes

| File | Description |
|------|-------------|
| `shapes/index.mdx` | Shapes overview |
| `shapes/triangle.mdx` | `<Triangle>` component |
| `shapes/circle.mdx` | `<Circle>` component |
| `shapes/rect.mdx` | `<Rect>` component |
| `shapes/ellipse.mdx` | `<Ellipse>` component |
| `shapes/star.mdx` | `<Star>` component |
| `shapes/polygon.mdx` | `<Polygon>` component |

### paths/ (21 files) — @remotion/paths

| File | Description |
|------|-------------|
| `paths/index.mdx` | Paths overview |
| `paths/evolve-path.mdx` | `evolvePath()` API |
| `paths/interpolate-path.mdx` | `interpolatePath()` API |
| `paths/get-tangent-at-length.mdx` | `getTangentAtLength()` API |

### terminology/ (14 files) — Glossary

| File | Description |
|------|-------------|
| `terminology/composition.mdx` | Composition term |
| `terminology/sequence.mdx` | Sequence term |
| `terminology/bundle.mdx` | Bundle term |
| `terminology/concurrency.mdx` | Concurrency term |
| `terminology/entry-point.mdx` | Entry point term |
| `terminology/input-props.mdx` | Input props term |
| `terminology/player.mdx` | Player term |
| `terminology/studio.mdx` | Studio term |

### vercel/ (8 files) — Vercel Rendering

| File | Description |
|------|-------------|
| `vercel/index.mdx` | Vercel rendering overview |
| `vercel/render-media-on-vercel.mdx` | `renderMediaOnVercel()` API |
| `vercel/render-still-on-vercel.mdx` | `renderStillOnVercel()` API |
| `vercel/types.mdx` | Vercel types reference |

### miscellaneous/snippets/ — Code Snippets

| File | Description |
|------|-------------|
| `miscellaneous/snippets/accelerated-video.mdx` | Accelerated video snippet |
| `miscellaneous/snippets/align-duration.mdx` | Aligning duration |
| `miscellaneous/snippets/combine-compositions.mdx` | Combining compositions |
| `miscellaneous/snippets/jumpcuts.mdx` | Jump cuts snippet |
| `miscellaneous/snippets/freeze-portions.mdx` | Freezing portions |
