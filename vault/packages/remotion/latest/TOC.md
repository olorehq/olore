# remotion Table of Contents

## Directory Map

```
contents/
├── getting-started.mdx           # Getting started guide
├── the-fundamentals.mdx          # Core concepts
├── composition.mdx               # <Composition> API
├── sequence.mdx, series.mdx      # <Sequence>, <Series> APIs
├── interpolate.mdx, spring.mdx   # Animation helpers
├── use-current-frame.mdx         # Core hooks (168 root-level files total)
├── lambda/                       # AWS Lambda rendering (97 files)
├── cloudrun/                     # Google Cloud Run rendering (41 files)
├── renderer/                     # Node.js server-side rendering (17 files)
├── player/                       # @remotion/player (17 files)
├── studio/                       # Remotion Studio API (22 files)
├── cli/                          # CLI reference (18 files)
├── webcodecs/                    # @remotion/webcodecs (31 files)
├── media-parser/                 # @remotion/media-parser (29 files)
├── recorder/                     # Remotion Recorder (33 files)
├── transitions/                  # @remotion/transitions (18 files)
├── shapes/                       # @remotion/shapes (19 files)
├── paths/                        # @remotion/paths (21 files)
├── captions/                     # @remotion/captions (11 files)
├── audio/                        # Audio guides (12 files)
├── layout-utils/                 # @remotion/layout-utils (7 files)
├── miscellaneous/                # Misc guides + snippets (27 files)
├── troubleshooting/              # Troubleshooting (19 files)
├── editor-starter/               # Editor Starter kit (24 files)
├── sfx/                          # @remotion/sfx (12 files)
├── whisper-web/                  # @remotion/whisper-web (8 files)
├── install-whisper-cpp/          # @remotion/install-whisper-cpp (6 files)
├── mediabunny/                   # @remotion/mediabunny (8 files)
├── web-renderer/                 # @remotion/web-renderer (7 files)
├── vercel/                       # Vercel rendering (7 files)
├── noise/                        # @remotion/noise (4 files)
├── motion-blur/                  # @remotion/motion-blur (5 files)
├── preload/                      # @remotion/preload (6 files)
├── lottie/                       # @remotion/lottie (6 files)
├── gif/                          # @remotion/gif (4 files)
├── google-fonts/                 # @remotion/google-fonts (5 files)
├── fonts-api/                    # Fonts API (2 files)
├── zod-types/                    # @remotion/zod-types (5 files)
├── skia/                         # @remotion/skia (3 files)
├── media-utils/                  # @remotion/media-utils (3 files)
├── timeline/                     # @remotion/timeline (6 files)
├── animation-utils/              # @remotion/animation-utils (3 files)
├── ai/                           # AI integration guides (10 files)
├── terminology/                  # Terminology reference (14 files)
├── client-side-rendering/        # Browser-side rendering (6 files)
├── tailwind/, tailwind-v4/       # Tailwind CSS setup
└── ...
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/getting-started.mdx` |
| Core concepts | `contents/the-fundamentals.mdx` |
| API overview | `contents/api.mdx` |
| Lambda setup | `contents/lambda/setup.mdx` |
| Cloud Run setup | `contents/cloudrun/setup.mdx` |
| Node.js rendering | `contents/ssr.mdx` |
| Player embed | `contents/player/index.mdx` |
| CLI reference | `contents/cli/cli.mdx` |
| Troubleshooting | `contents/troubleshooting/` |

## Detailed Structure

### Root-level files (168 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Installation and getting started |
| `the-fundamentals.mdx` | Core Remotion concepts |
| `api.mdx` | API overview |
| `composition.mdx` | `<Composition>` component |
| `sequence.mdx` | `<Sequence>` component |
| `sequences.mdx` | Using sequences guide |
| `series.mdx` | `<Series>` component |
| `interpolate.mdx` | `interpolate()` function |
| `interpolate-colors.mdx` | `interpolateColors()` |
| `spring.mdx` | `spring()` function |
| `easing.mdx` | Easing functions |
| `measure-spring.mdx` | `measureSpring()` |
| `use-current-frame.mdx` | `useCurrentFrame()` hook |
| `use-video-config.mdx` | `useVideoConfig()` hook |
| `use-current-scale.mdx` | `useCurrentScale()` hook |
| `use-audio-data.mdx` | `useAudioData()` hook |
| `use-buffer-state.mdx` | `useBufferState()` hook |
| `use-delay-render.mdx` | `useDelayRender()` hook |
| `use-windowed-audio-data.mdx` | `useWindowedAudioData()` hook |
| `use-offthread-video-texture.mdx` | `useOffthreadVideoTexture()` |
| `use-video-texture.mdx` | `useVideoTexture()` |
| `use-img-and-iframe.mdx` | `useImg()` and `useIframe()` |
| `use-remotion-environment.mdx` | `useRemotionEnvironment()` |
| `delay-render.mdx` | `delayRender()` / `continueRender()` |
| `continue-render.mdx` | `continueRender()` |
| `cancel-render.mdx` | `cancelRender()` |
| `calculate-metadata.mdx` | `calculateMetadata()` |
| `register-root.mdx` | `registerRoot()` |
| `absolute-fill.mdx` | `<AbsoluteFill>` component |
| `freeze.mdx` | `<Freeze>` component |
| `loop.mdx` | `<Loop>` component |
| `folder.mdx` | `<Folder>` component |
| `still.mdx` | `<Still>` component |
| `img.mdx` | `<Img>` component |
| `offthreadvideo.mdx` | `<OffthreadVideo>` component |
| `iframe.mdx` | `<IFrame>` component |
| `animatedimage.mdx` | `<AnimatedImage>` component |
| `artifact.mdx` | `<Artifact>` component |
| `artifacts.mdx` | Artifacts guide |
| `clipper.mdx` | `<Clipper>` component |
| `overlay.mdx` | `<Overlay>` component |
| `layers.mdx` | `<Layers>` component |
| `random.mdx` | `random()` function |
| `staticfile.mdx` | `staticFile()` |
| `get-static-files.mdx` | `getStaticFiles()` |
| `watch-static-file.mdx` | `watchStaticFile()` |
| `get-input-props.mdx` | `getInputProps()` |
| `get-remotion-environment.mdx` | `getRemotionEnvironment()` |
| `get-audio-data.mdx` | `getAudioData()` |
| `get-audio-duration-in-seconds.mdx` | `getAudioDurationInSeconds()` |
| `get-image-dimensions.mdx` | `getImageDimensions()` |
| `get-video-metadata.mdx` | `getVideoMetadata()` |
| `get-waveform-portion.mdx` | `getWaveformPortion()` |
| `audiobuffertodataurl.mdx` | `audioBufferToDataUrl()` |
| `prefetch.mdx` | `prefetch()` |
| `bundle.mdx` | `bundle()` |
| `bundler.mdx` | @remotion/bundler |
| `render.mdx` | Rendering overview |
| `renderer.mdx` | @remotion/renderer |
| `ssr.mdx` | Server-side rendering |
| `ssr-node.mdx` | Node.js SSR example |
| `stills.mdx` | Rendering stills |
| `render-as-gif.mdx` | Rendering as GIF |
| `render-all.mdx` | Rendering all compositions |
| `parameterized-rendering.mdx` | Parameterized rendering |
| `dataset-render.mdx` | Dataset rendering |
| `distributed-rendering.mdx` | Distributed rendering |
| `standalone.mdx` | Standalone renderer |
| `config.mdx` | Remotion config file |
| `schemas.mdx` | Props schemas |
| `passing-props.mdx` | Passing props |
| `how-props-flow.mdx` | Props flow |
| `dynamic-metadata.mdx` | Dynamic metadata |
| `dynamic-import.mdx` | Dynamic imports |
| `data-fetching.mdx` | Data fetching |
| `env-variables.mdx` | Environment variables |
| `fonts.mdx` | Using fonts |
| `importing-assets.mdx` | Importing assets |
| `static-file-relative-paths.mdx` | Static file paths |
| `static-file-remote-urls.mdx` | Remote URLs in staticFile |
| `animating-properties.mdx` | Animating CSS properties |
| `animation-math.mdx` | Animation math |
| `transforms.mdx` | CSS transforms |
| `scaling.mdx` | Scaling video |
| `quality.mdx` | Render quality |
| `encoding.mdx` | Encoding options |
| `hdr.mdx` | HDR video |
| `transparent-videos.mdx` | Transparent video |
| `render-as-gif.mdx` | GIF export |
| `metadata.mdx` | Video metadata |
| `multiple-fps.mdx` | Multiple FPS |
| `media-fragments.mdx` | Media fragments |
| `html5-video.mdx` | `<Video>` component |
| `html5-audio.mdx` | `<Audio>` component |
| `using-audio.mdx` | Audio usage guide |
| `visualize-audio.mdx` | Audio visualization |
| `using-randomness.mdx` | Using randomness |
| `overwriting-webpack-config.mdx` | Webpack config |
| `brownfield-installation.mdx` | Brownfield install |
| `performance.mdx` | Performance optimization |
| `flickering.mdx` | Fixing flickering |
| `timeout.mdx` | Timeout handling |
| `version-mismatch.mdx` | Version mismatch fix |
| `version.mdx` | VERSION constant |
| `upgrading.mdx` | Upgrading Remotion |
| `preview.mdx` | Studio preview |
| `studio-app.mdx` | Studio app |
| `visual-editing.mdx` | Visual editing |
| `building-a-timeline.mdx` | Building a timeline |
| `creating-a-library.mdx` | Creating a library |
| `testing.mdx` | Testing Remotion |
| `chromium-flags.mdx` | Chromium flags |
| `open-gl.mdx` | OpenGL/GPU rendering |
| `gpu.mdx` | GPU usage |
| `hardware-acceleration.mdx` | Hardware acceleration |
| `ffmpeg.mdx` | FFmpeg integration |
| `docker.mdx` | Docker setup |
| `bun.mdx` | Bun runtime |
| `deno.mdx` | Deno runtime |
| `electron.mdx` | Electron integration |
| `react-native.mdx` | React Native |
| `angular.mdx` | Angular integration |
| `vue.mdx` | Vue integration |
| `svelte.mdx` | Svelte integration |
| `jsx-support.mdx` | JSX support |
| `spline.mdx` | Spline 3D |
| `figma.mdx` | Figma import |
| `maps.mdx` | Maps integration |
| `shaders.mdx` | WebGL shaders |
| `after-effects.mdx` | After Effects import |
| `three.mdx` | Three.js |
| `three-canvas.mdx` | Three.js canvas |
| `measuring.mdx` | Measuring elements |
| `cors-issues.mdx` | CORS fixes |
| `security.mdx` | Security |
| `presigned-urls.mdx` | Presigned URLs |
| `video-uploads.mdx` | Video uploads |
| `validating-user-videos.mdx` | Validating user videos |
| `video-manipulation.mdx` | Video manipulation |
| `video-tags.mdx` | Video tags |
| `media-playback-error.mdx` | Media playback errors |
| `non-seekable-media.mdx` | Non-seekable media |
| `slow-method-to-extract-frame.mdx` | Frame extraction |
| `accessibility.mdx` | Accessibility |
| `font-picker.mdx` | Font picker |
| `noise-visualization.mdx` | Noise visualization |
| `tailwind.mdx` | Tailwind CSS |
| `tailwind-2.mdx` | Tailwind v2 |
| `wrong-composition-mount.mdx` | Wrong composition mount fix |
| `target-closed.mdx` | Target closed error |
| `enametoolong.mdx` | ENAMETOOLONG error |
| `player-into-remotion-project.mdx` | Player in Remotion project |
| `azure-container-apps.mdx` | Azure Container Apps |
| `cloudflare-containers.mdx` | Cloudflare containers |
| `vercel.mdx` | Vercel deployment |
| `vercel-sandbox.mdx` | Vercel sandbox |
| `cloudrun.mdx` | Cloud Run overview |
| `lambda.mdx` | Lambda overview |
| `compare.mdx` | SSR options comparison |
| `resources.mdx` | Templates and resources |
| `license.mdx` | License and pricing |
| `detect-remotion.mdx` | Detect Remotion |
| `terminology.mdx` | Terminology |

### lambda/ (94 files)

| File | Description |
|------|-------------|
| `setup.mdx` | Lambda setup guide |
| `api.mdx` | Lambda API overview |
| `permissions.mdx` | IAM permissions |
| `rendermediaonlambda.mdx` | `renderMediaOnLambda()` |
| `renderstillonlambda.mdx` | `renderStillOnLambda()` |
| `rendervideoonlambda.mdx` | `renderVideoOnLambda()` |
| `deployfunction.mdx` | `deployFunction()` |
| `deploysite.mdx` | `deploySite()` |
| `getrenderprogress.mdx` | `getRenderProgress()` |
| `downloadmedia.mdx` | `downloadMedia()` |
| `downloadvideo.mdx` | `downloadVideo()` |
| `deletefunction.mdx` | `deleteFunction()` |
| `deletesite.mdx` | `deleteSite()` |
| `deleterender.mdx` | `deleteRender()` |
| `getfunctions.mdx` | `getFunctions()` |
| `getfunctioninfo.mdx` | `getFunctionInfo()` |
| `getsites.mdx` | `getSites()` |
| `getregions.mdx` | `getRegions()` |
| `getcompositionsonlambda.mdx` | `getCompositionsOnLambda()` |
| `getawsclient.mdx` | `getAwsClient()` |
| `getorcreatebucket.mdx` | `getOrCreateBucket()` |
| `estimateprice.mdx` | `estimatePrice()` |
| `presignurl.mdx` | `presignUrl()` |
| `speculateFunctionName.mdx` | `speculateFunctionName()` |
| `simulatepermissions.mdx` | `simulatePermissions()` |
| `validatewebhooksignature.mdx` | `validateWebhookSignature()` |
| `getrolepolicy.mdx` | `getRolePolicy()` |
| `getuserpolicy.mdx` | `getUserPolicy()` |
| `webhooks.mdx` | Webhooks |
| `expresswebhook.mdx` | Express webhook |
| `approuterwebhook.mdx` | App Router webhook |
| `pagesrouterwebhooks.mdx` | Pages Router webhook |
| `authentication.mdx` | Authentication |
| `checklist.mdx` | Deployment checklist |
| `faq.mdx` | Lambda FAQ |
| `concurrency.mdx` | Concurrency |
| `cost.mdx` | Cost overview |
| `cost-example.mdx` | Cost example |
| `speed.mdx` | Speed optimization |
| `disk-size.mdx` | Disk size |
| `limits.mdx` | Limits |
| `region-selection.mdx` | Region selection |
| `runtime.mdx` | Lambda runtime |
| `custom-destination.mdx` | Custom destination |
| `custom-layers.mdx` | Custom Lambda layers |
| `multiple-buckets.mdx` | Multiple buckets |
| `separate-environments.mdx` | Separate environments |
| `bucket-security.mdx` | Bucket security |
| `bucket-naming.mdx` | Bucket naming |
| `s3-public-access.mdx` | S3 public access |
| `autodelete.mdx` | Auto-delete renders |
| `insights.mdx` | Lambda insights |
| `light-client.mdx` | Light client |
| `r2.mdx` | Cloudflare R2 |
| `proxy.mdx` | Proxy setup |
| `sqs.mdx` | SQS integration |
| `supabase.mdx` | Supabase integration |
| `go.mdx` | Go SDK |
| `php.mdx` | PHP SDK |
| `python.mdx` | Python SDK |
| `ruby.mdx` | Ruby SDK |
| `serverless-framework-integration.mdx` | Serverless Framework |
| `upgrading.mdx` | Upgrading Lambda |
| `uninstall.mdx` | Uninstalling |
| `troubleshooting/` | Lambda troubleshooting |
| `without-iam/` | Running without IAM |
| `cli/` | Lambda CLI commands |

### cloudrun/ (41 files)

| File | Description |
|------|-------------|
| `setup.mdx` | Cloud Run setup |
| `api.mdx` | Cloud Run API |
| `permissions.mdx` | GCP permissions |
| `rendermediaoncloudrun.mdx` | `renderMediaOnCloudRun()` |
| `renderstilloncloudrun.mdx` | `renderStillOnCloudRun()` |
| `deployservice.mdx` | `deployService()` |
| `deploysite.mdx` | `deploySite()` |
| `getservices.mdx` | `getServices()` |
| `getsites.mdx` | `getSites()` |
| `getregions.mdx` | `getRegions()` |
| `deleteservice.mdx` | `deleteService()` |
| `deletesite.mdx` | `deleteSite()` |
| `getorcreatebucket.mdx` | `getOrCreateBucket()` |
| `speculateservicename.mdx` | `speculateServiceName()` |
| `cli/` | Cloud Run CLI |

### renderer/ (17 files)

| File | Description |
|------|-------------|
| `render-media.mdx` | `renderMedia()` |
| `render-frames.mdx` | `renderFrames()` |
| `render-still.mdx` | `renderStill()` |
| `stitch-frames-to-video.mdx` | `stitchFramesToVideo()` |
| `get-compositions.mdx` | `getCompositions()` |
| `select-composition.mdx` | `selectComposition()` |
| `open-browser.mdx` | `openBrowser()` |
| `ensure-browser.mdx` | `ensureBrowser()` |
| `make-cancel-signal.mdx` | `makeCancelSignal()` |
| `combine-chunks.mdx` | `combineChunks()` |
| `get-video-metadata.mdx` | `getVideoMetadata()` |
| `get-can-extract-frames-fast.mdx` | `getCanExtractFramesFast()` |
| `get-silent-parts.mdx` | `getSilentParts()` |
| `extract-audio.mdx` | `extractAudio()` |
| `types.mdx` | Types reference |

### player/ (17 files)

| File | Description |
|------|-------------|
| `index.mdx` | Player overview |
| `installation.mdx` | Player installation |
| `api.mdx` | Player API |
| `player-examples.mdx` | Player examples |
| `player-integration.mdx` | Player integration |
| `autoplay.mdx` | Autoplay |
| `buffer-state.mdx` | Buffer state |
| `current-time.mdx` | Current time |
| `custom-controls.mdx` | Custom controls |
| `best-practices.mdx` | Best practices |
| `thumbnail.mdx` | Thumbnail |
| `scaling.mdx` | Player scaling |
| `preloading.mdx` | Preloading |
| `premounting.mdx` | Premounting |
| `playback-issues.mdx` | Playback issues |
| `media-keys.mdx` | Media keys |
| `drag-and-drop/index.mdx` | Drag and drop |

### studio/ (22 files)

| File | Description |
|------|-------------|
| `studio.mdx` | Studio API overview |
| `api.mdx` | Studio API reference |
| `shortcuts.mdx` | Keyboard shortcuts |
| `visual-control.mdx` | Visual controls |
| `deploy-server.mdx` | Deploying server |
| `deploy-static.mdx` | Deploying static |
| `get-static-files.mdx` | `getStaticFiles()` |
| `write-static-file.mdx` | `writeStaticFile()` |
| `delete-static-file.mdx` | `deleteStaticFile()` |
| `watch-static-file.mdx` | `watchStaticFile()` |
| `watch-public-folder.mdx` | `watchPublicFolder()` |
| `save-default-props.mdx` | `saveDefaultProps()` |
| `update-default-props.mdx` | `updateDefaultProps()` |
| `focus-default-props-path.mdx` | `focusDefaultPropsPath()` |
| `reevaluate-composition.mdx` | `reevaluateComposition()` |
| `go-to-composition.mdx` | `goToComposition()` |
| `seek.mdx` | `seek()` |
| `play.mdx` | `play()` |
| `pause.mdx` | `pause()` |
| `toggle.mdx` | `toggle()` |
| `restart-studio.mdx` | `restartStudio()` |
| `quick-switcher.mdx` | Quick switcher |

### cli/ (18 files)

| File | Description |
|------|-------------|
| `cli.mdx` | CLI overview |
| `render.mdx` | `npx remotion render` |
| `still.mdx` | `npx remotion still` |
| `bundle.mdx` | `npx remotion bundle` |
| `studio.mdx` | `npx remotion studio` |
| `compositions.mdx` | `npx remotion compositions` |
| `benchmark.mdx` | `npx remotion benchmark` |
| `upgrade.mdx` | `npx remotion upgrade` |
| `install.mdx` | `npx remotion install` |
| `add.mdx` | `npx remotion add` |
| `versions.mdx` | `npx remotion versions` |
| `ffmpeg.mdx` | `npx remotion ffmpeg` |
| `ffprobe.mdx` | `npx remotion ffprobe` |
| `gpu.mdx` | `npx remotion gpu` |
| `help.mdx` | `npx remotion help` |
| `skills.mdx` | `npx remotion skills` |
| `browser/index.mdx` | `npx remotion browser` |
| `browser/ensure.mdx` | `npx remotion browser ensure` |

### webcodecs/ (31 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/webcodecs overview |
| `convert-media.mdx` | `convertMedia()` |
| `convert-a-video.mdx` | Convert video guide |
| `extract-frames.mdx` | `extractFrames()` |
| `can-copy-video-track.mdx` | `canCopyVideoTrack()` |
| `can-copy-audio-track.mdx` | `canCopyAudioTrack()` |
| `can-reencode-video-track.mdx` | `canReencodeVideoTrack()` |
| `can-reencode-audio-track.mdx` | `canReencodeAudioTrack()` |
| `get-available-video-codecs.mdx` | `getAvailableVideoCodecs()` |
| `get-available-audio-codecs.mdx` | `getAvailableAudioCodecs()` |
| `get-available-containers.mdx` | `getAvailableContainers()` |
| `webcodecs-controller.mdx` | `WebCodecsController` |
| `track-transformation.mdx` | Track transformation |
| `resizing.mdx` | Resizing video |
| `rotation.mdx` | Rotating video |
| `buffer-writer.mdx` | `BufferWriter` |
| `web-fs-writer.mdx` | `WebFsWriter` |

### media-parser/ (29 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/media-parser overview |
| `parse-media.mdx` | `parseMedia()` |
| `fields.mdx` | Available fields |
| `seeking.mdx` | Seeking |
| `readers.mdx` | Readers |
| `node-reader.mdx` | Node.js reader |
| `web-reader.mdx` | Web reader |
| `universal-reader.mdx` | Universal reader |
| `media-parser-controller.mdx` | `MediaParserController` |
| `samples.mdx` | Media samples |
| `types.mdx` | Types |
| `metadata.mdx` | Metadata |
| `format-support.mdx` | Format support |

### recorder/ (33 files)

| File | Description |
|------|-------------|
| `index.mdx` | Remotion Recorder overview |
| `setup.mdx` | Recorder setup |
| `record/index.mdx` | Recording guide |
| `editing/editing.mdx` | Editing guide |
| `exporting.mdx` | Exporting |
| `captions.mdx` | Captions |
| `lambda-rendering.mdx` | Lambda rendering |
| `troubleshooting/` | Troubleshooting |

### transitions/ (18 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/transitions overview |
| `transitionseries.mdx` | `<TransitionSeries>` |
| `use-transition-progress.mdx` | `useTransitionProgress()` |
| `audio-transitions.mdx` | Audio transitions |
| `presentations/index.mdx` | Presentations overview |
| `presentations/fade.mdx` | Fade |
| `presentations/slide.mdx` | Slide |
| `presentations/wipe.mdx` | Wipe |
| `presentations/flip.mdx` | Flip |
| `presentations/cube.mdx` | Cube |
| `presentations/clock-wipe.mdx` | Clock wipe |
| `presentations/iris.mdx` | Iris |
| `presentations/custom.mdx` | Custom presentations |
| `timings/index.mdx` | Timings overview |
| `timings/springtiming.mdx` | `springTiming()` |
| `timings/lineartiming.mdx` | `linearTiming()` |
| `timings/custom.mdx` | Custom timings |

### shapes/ (19 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/shapes overview |
| `make-circle.mdx`, `circle.mdx` | Circle shape |
| `make-rect.mdx`, `rect.mdx` | Rect shape |
| `make-star.mdx`, `star.mdx` | Star shape |
| `make-arrow.mdx`, `arrow.mdx` | Arrow shape |
| `make-triangle.mdx`, `triangle.mdx` | Triangle |
| `make-ellipse.mdx`, `ellipse.mdx` | Ellipse |
| `make-pie.mdx`, `pie.mdx` | Pie shape |
| `make-polygon.mdx`, `polygon.mdx` | Polygon |
| `make-heart.mdx`, `heart.mdx` | Heart shape |

### paths/ (21 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/paths overview |
| `get-length.mdx` | `getLength()` |
| `get-point-at-length.mdx` | `getPointAtLength()` |
| `get-tangent-at-length.mdx` | `getTangentAtLength()` |
| `get-parts.mdx` | `getParts()` |
| `get-subpaths.mdx` | `getSubpaths()` |
| `get-bounding-box.mdx` | `getBoundingBox()` |
| `parse-path.mdx` | `parsePath()` |
| `serialize-instructions.mdx` | `serializeInstructions()` |
| `interpolate-path.mdx` | `interpolatePath()` |
| `evolve-path.mdx` | `evolvePath()` |
| `scale-path.mdx` | `scalePath()` |
| `translate-path.mdx` | `translatePath()` |
| `warp-path.mdx` | `warpPath()` |
| `normalize-path.mdx` | `normalizePath()` |
| `cut-path.mdx` | `cutPath()` |
| `reverse-path.mdx` | `reversePath()` |
| `extend-viewbox.mdx` | `extendViewbox()` |

### captions/ (11 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/captions overview |
| `api.mdx` | Captions API |
| `caption.mdx` | `Caption` type |
| `transcribing.mdx` | Transcribing audio |
| `displaying.mdx` | Displaying captions |
| `importing.mdx` | Importing captions |
| `exporting.mdx` | Exporting captions |
| `parse-srt.mdx` | `parseSrt()` |
| `serialize-srt.mdx` | `serializeSrt()` |
| `create-tiktok-style-captions.mdx` | TikTok-style captions |
| `ensure-max-characters-per-line.mdx` | `ensureMaxCharactersPerLine()` |

### audio/ (12 files)

| File | Description |
|------|-------------|
| `importing.mdx` | Importing audio |
| `volume.mdx` | Volume control |
| `muting.mdx` | Muting audio |
| `speed.mdx` | Audio speed |
| `trimming.mdx` | Audio trimming |
| `delaying.mdx` | Delaying audio |
| `pitch.mdx` | Pitch adjustment |
| `sfx.mdx` | Sound effects |
| `visualization.mdx` | Audio visualization |
| `from-video.mdx` | Audio from video |
| `exporting.mdx` | Exporting audio |
| `order-of-operations.mdx` | Operations order |

### miscellaneous/ (27 files)

| File | Description |
|------|-------------|
| `nextjs.mdx` | Next.js integration |
| `chrome-headless-shell.mdx` | Chrome headless shell |
| `linux-dependencies.mdx` | Linux dependencies |
| `cloud-gpu.mdx` | Cloud GPU |
| `render-in-browser.mdx` | Browser rendering |
| `render-on-edge.mdx` | Edge rendering |
| `cross-origin-isolation.mdx` | COOP/COEP headers |
| `live-streaming.mdx` | Live streaming |
| `snippets/` | Code snippets |

### troubleshooting/ (19 files)

| File | Description |
|------|-------------|
| `debug-failed-render.mdx` | Debug failed render |
| `browser-launch.mdx` | Browser launch errors |
| `render-stuck.mdx` | Render stuck |
| `timeout.mdx` (root) | Timeout errors |
| `sigkill.mdx` | SIGKILL errors |
| `video-flicker.mdx` | Video flickering |
| `delay-render-proxy.mdx` | DelayRender proxy |
| `font-loading-errors.mdx` | Font loading |
| `loading-root-component.mdx` | Root component errors |
| `nextjs-image.mdx` | Next.js Image errors |
| `bundling-bundle.mdx` | Bundling errors |
| `broken-fast-refresh.mdx` | Fast refresh issues |

### Other packages

| Directory | Package | Description |
|-----------|---------|-------------|
| `layout-utils/` | @remotion/layout-utils | Text layout utilities |
| `lottie/` | @remotion/lottie | Lottie animations |
| `gif/` | @remotion/gif | GIF rendering |
| `google-fonts/` | @remotion/google-fonts | Google Fonts |
| `fonts-api/` | fonts API | Font loading API |
| `noise/` | @remotion/noise | Noise functions |
| `motion-blur/` | @remotion/motion-blur | Motion blur effect |
| `skia/` | @remotion/skia | Skia graphics |
| `three/` (root) | @remotion/three | Three.js integration |
| `preload/` | @remotion/preload | Asset preloading |
| `zod-types/` | @remotion/zod-types | Zod type helpers |
| `sfx/` | @remotion/sfx | Sound effects |
| `media-utils/` | @remotion/media-utils | Media utilities |
| `mediabunny/` | @remotion/mediabunny | MediaBunny |
| `whisper-web/` | @remotion/whisper-web | Whisper.cpp in browser |
| `install-whisper-cpp/` | @remotion/install-whisper-cpp | Whisper.cpp installer |
| `openai-whisper/` | @remotion/openai-whisper | OpenAI Whisper |
| `web-renderer/` | @remotion/web-renderer | Browser-side renderer |
| `vercel/` | @remotion/vercel | Vercel rendering |
| `animation-utils/` | @remotion/animation-utils | Animation utilities |
| `animated-captions/` | @remotion/animated-captions | Animated captions |
| `animated-emoji/` | @remotion/animated-emoji | Animated emojis |
| `client-side-rendering/` | client-side rendering | Browser rendering API |
| `timeline/` | @remotion/timeline | Timeline component |
| `rive/` | @remotion/rive | Rive animations |
| `starburst/` | @remotion/starburst | Starburst effect |
| `light-leaks/` | @remotion/light-leaks | Light leaks effect |
| `rounded-text-box/` | @remotion/rounded-text-box | Rounded text box |
| `tailwind/` | Tailwind CSS | Tailwind v3 setup |
| `tailwind-v4/` | Tailwind CSS v4 | Tailwind v4 setup |
| `enable-scss/` | SCSS | SCSS setup |
| `terminology/` | - | Terminology reference |
| `ai/` | - | AI integration guides |
| `editor-starter/` | Editor Starter | Paid editor template |
| `recorder/` | Remotion Recorder | Screen recorder |
