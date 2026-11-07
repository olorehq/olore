# remotion Table of Contents

## Directory Map

```
contents/
├── (root)              # Core API pages, guides, SSR, integrations (201 files)
├── options/            # CLI/renderer option references (106 files)
├── lambda/             # @remotion/lambda serverless rendering (103 files)
├── effects/            # @remotion/effects visual effects (91 files)
├── cloudrun/           # Google Cloud Run rendering (41 files)
├── transitions/        # @remotion/transitions presentations and timings (33 files)
├── sfx/                # Sound effects (33 files)
├── recorder/           # Remotion Recorder (33 files)
├── webcodecs/          # @remotion/webcodecs (31 files)
├── studio/             # Remotion Studio (30 files)
├── media-parser/       # @remotion/media-parser (28 files)
├── sdk/                # Remotion SDK / Convert (26 files)
├── editor-starter/     # Editor Starter docs (25 files)
├── paths/ shapes/      # @remotion/paths and @remotion/shapes (23 files each)
├── troubleshooting/    # Common errors and fixes (23 files)
├── cli/ renderer/ player/ captions/ ...  # Other packages
└── (and ~40 smaller package directories)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started.mdx`, `contents/your-first-video.mdx` |
| Core concepts | `contents/terminology.mdx`, `contents/composition.mdx`, `contents/sequence.mdx` |
| Animation | `contents/animating-properties.mdx`, `contents/interpolate.mdx`, `contents/spring.mdx` |
| Server-side rendering | `contents/ssr.mdx`, `contents/ssr-node.mdx` |
| AWS Lambda | `contents/lambda.mdx`, `contents/lambda/` |
| Embed a video player | `contents/player/` |
| CLI / render options | `contents/cli/`, `contents/options/` |
| Errors | `contents/troubleshooting/` |
| Upgrading | `contents/upgrading.mdx` |

## Detailed Structure

### (root) (201 files)

| File | Description |
|------|-------------|
| `absolute-fill.mdx` | `<AbsoluteFill>` - A helper component - it is an absolutely positioned `<div>` with the following styles: |
| `accessibility.mdx` | Accessibility of Remotion products - This page documents how Remotion's **products** (Remotion Player, Remotion Studio, Remotion Editor Starter, and others) meet... |
| `after-effects.mdx` | Import from After Effects - If you are a After Effects user, you might find it useful to convert your After Effects compositions to Remotion compositions. |
| `angular.mdx` | Using Remotion in Angular - This guide explains how to integrate Remotion into an **Angular** project. |
| `animatedimage.mdx` | `<AnimatedImage>` - Renders an animated GIF, PNG, AVIF or WebP image and syncs it with Remotion's timeline. |
| `animating-properties.mdx` | Animating properties - Animation works by changing properties over time. |
| `animation-math.mdx` | Animation math - You can add, subtract and multiply animation values to create more complex animations. |
| `api.mdx` | API overview |
| `artifact.mdx` | `<Artifact>` - By rendering an `<Artifact>` tag in your Remotion markup, an extra file will get emitted during rendering. |
| `artifacts.mdx` | Emitting Artifacts - Sometimes you wish to generate additional files when rendering your video. |
| `audiobuffertodataurl.mdx` | audioBufferToDataUrl() - This API takes an `AudioBuffer` instance and converts it to a Base 64 Data URL so it can be passed to an `<Audio>` tag from... |
| `authoring-packages.mdx` | Authoring a Remotion library - Authoring a Remotion library works the same as authoring a normal React library. |
| `azure-container-apps.mdx` | Deploying to Azure Container Apps - This guide has been contributed by the community and has not yet been tested by the Remotion team. |
| `brownfield-installation.mdx` | Installing Remotion in an existing project - Remotion can be installed into existing projects, such as Next.JS, React Router, Vite or Create React App, as well as... |
| `building-a-timeline.mdx` | Build a timeline-based video editor - This document describes on a high-level how the Remotion Player can be synchronized with a timeline. |
| `bun.mdx` | Bun support - Remotion is excited about Bun, and we mostly support it (from v1.0.3). |
| `bundle.mdx` | bundle() - Bundles a Remotion project using Webpack, or Rspack if enabled, and prepares it for rendering using `renderMedia()`. |
| `bundler.mdx` | @remotion/bundler - A package containing the `bundle()` function, which takes a Remotion project and bundles it using Webpack, preparing it to be... |
| `calculate-metadata.mdx` | calculateMetadata() - `calculateMetadata` is a prop that gets passed to `<Composition>` and takes a callback function which may transform metadata. |
| `cancel-render.mdx` | cancelRender() - By invoking this function, Remotion will stop the current render, and not perform any retries. |
| `canvasimage.mdx` | `<CanvasImage>` - Renders a static image onto a `<canvas>` element. |
| `chromium-flags.mdx` | Chromium flags - We allow you to set the following flags in Chromium and Google Chrome since Remotion 2.6.5: |
| `cloudflare-containers.mdx` | Deploying to Cloudflare Containers - Cloudflare Containers is a new platform in Beta for invoking Docker containers from Cloudflare's Worker functions. |
| `cloudrun.mdx` | @remotion/cloudrun - Cloud Run is in Alpha status and not actively being developed. |
| `color-correction.mdx` | Color correction - Color correction in Remotion is implemented using effects. |
| `compare.mdx` | Comparison of server-side rendering options - This page compares 5 options for rendering videos in the cloud: |
| `components.mdx` | Components - You can render any React/HTML markup in Remotion. |
| `composing.mdx` | Composing components - React is perfect for reusing, parametrizing, and composing components with multiple levels of depth. |
| `composition.mdx` | `<Composition>` - This is the component to use to register a video to make it renderable and make it show up in the sidebar of the Remotion... |
| `config.mdx` | Configuration file - To configure Remotion, create a `remotion.config.ts` file in the root of your Remotion project. |
| `continue-render.mdx` | continueRender() - Using `continueRender`, you can unblock a rendering that has been deferred using `delayRender()`. |
| `cors-issues.mdx` | How to debug any CORS issue - A CORS issue is best debugged with Google Chrome because of the useful error messages. |
| `create-effect-implementation.mdx` | createEffectImplementation() - Types the state of one backend implementation for `createEffect()`. |
| `create-effect.mdx` | createEffect() - Creates an effect factory that can be passed to the `effects` prop of Remotion canvas components. |
| `create-videos-with-code.mdx` | Create videos with code - Remotion came out in 2021, way before agents were the hype. |
| `data-fetching.mdx` | Data fetching - In Remotion, you may fetch data from an API to use it in your video. |
| `dataset-render.mdx` | Render videos programmatically from a dataset - You can use Remotion to do a batch render to create many videos based on a dataset. |
| `default-props-inference.mdx` | Inferring controls from default props - If a `<Composition>` has `defaultProps` but no `schema`, the Remotion Studio infers controls from the values in `defaultProps`. |
| `delay-render.mdx` | delayRender() and continueRender() - `delayRender()` pauses the render to let an asynchronous task such as data fetching complete. |
| `deno.mdx` | Deno support - As of right now, Remotion **does not support Deno**. |
| `design-systems.mdx` | Motion Design Systems - Remotion is an excellent tool for collecting your organization's animated design resources. |
| `detect-remotion.mdx` | Detect if a video was made with Remotion - To check whether somebody used Remotion to generate a video: |
| `distributed-rendering.mdx` | Distributed rendering - Remotion Lambda is our recommended solution if you are looking for a way to split up renders into chunks that run on different... |
| `docker.mdx` | Dockerizing a Remotion app - We recommend the following structure for your Dockerfile. |
| `dynamic-import.mdx` | Webpack dynamic imports - A common need in Remotion is to import assets from dynamic paths. |
| `dynamic-metadata.mdx` | Variable duration and dimensions - You may change the duration of the video based on some asynchronously determined data. |
| `easing.mdx` | Easing - The `Easing` module implements common easing functions. |
| `effects.mdx` | Effects - src="/img/effects-banner.mp4" |
| `electron.mdx` | Using Remotion in Electron - The official Electron template is the recommended baseline. |
| `elements.mdx` | Creating Elements - Design reusable Remotion Elements for any Element library. |
| `enametoolong.mdx` | ENAMETOOLONG - This error occurs if Remotion is used on Windows and too many audio layers are in the video so that an FFmpeg command gets... |
| `encoding.mdx` | Encoding Guide - Backed by FFmpeg, Remotion allows you to configure a variety of encoding settings. |
| `env-variables.mdx` | Environment variables - Remotion supports environment variables being passed directly from the CLI, using a `.env` file and from the `renderMedia()`... |
| `eslint-config.mdx` | @remotion/eslint-config - The Remotion ESLint configs provide recommended rules for JavaScript, TypeScript, React Hooks, and Remotion. |
| `eslint-plugin.mdx` | @remotion/eslint-plugin - `@remotion/eslint-plugin` warns about incorrect or inefficient use of Remotion APIs. |
| `export-opentimeline.mdx` | Export to OpenTimelineIO - OpenTimelineIO (`.otio`) lets you move a timeline into traditional video editing programs such as DaVinci Resolve or Premiere Pro. |
| `figma.mdx` | Import from Figma - There are two ways to import layers from Figma into Remotion Studio. |
| `flickering.mdx` | Flickering - If your video flickers or suffers from choppiness during rendering, it is an indication that: |
| `folder.mdx` | `<Folder>` - By wrapping a `<Composition />` inside a `<Folder />`, you can visually categorize it in your sidebar, should you have many... |
| `font-picker.mdx` | Build a Google Font picker - To show various Google fonts in a font picker and load them once the user selects them, first install `@remotion/google-fonts`... |
| `fonts.mdx` | Using fonts - Here are some ways how you can use custom fonts in Remotion. |
| `freeze.mdx` | `<Freeze>` - For new code, prefer `<Sequence freeze>` if you want to freeze a timeline item. |
| `get-audio-data.mdx` | getAudioData() - Takes an audio or video `src`, loads it and returns data and metadata for the specified source. |
| `get-audio-duration-in-seconds.mdx` | getAudioDurationInSeconds() - This function has been deprecated. |
| `get-image-dimensions.mdx` | getImageDimensions() - Takes an image `src`, retrieves the dimensions of an image. |
| `get-input-props.mdx` | getInputProps() - Using this method, you can retrieve inputs that you pass in from the command line using `--props`, or the `inputProps`... |
| `get-remotion-environment.mdx` | getRemotionEnvironment() - With the `getRemotionEnvironment()` function, you can retrieve information about the current Remotion Environment. |
| `get-static-files.mdx` | getStaticFiles() - This API is being moved to the `@remotion/studio` package. |
| `get-video-metadata.mdx` | getVideoMetadata() - This function does not support H.265 videos on Linux and also fails on some other formats. |
| `get-waveform-portion.mdx` | getWaveformPortion() - Takes bulky waveform data (for example fetched by `getAudioData()`) and returns a trimmed and simplified version of it, for... |
| `getting-started.mdx` | Creating a new project - If you have the ChatGPT desktop app, it can create a complete Remotion project that you can edit, run, and render locally... |
| `gpu.mdx` | Using the GPU - Some types of content in Remotion can benefit from a GPU being available on the machine that is used for rendering. |
| `greenscreen.mdx` | Greenscreen - Use the `colorKey()` effect from `@remotion/effects` to remove the green background of a video. |
| `hardware-acceleration.mdx` | Hardware accelerated encoding - Encoding is the process of converting a sequence of images into a video file. |
| `hdr.mdx` | High Dynamic Range and Remotion - High Dynamic Range (HDR) is a feature that allows for a wider range of colors and brightnesses than standard dynamic range (SDR). |
| `hls.mdx` | HLS support (HTTP Live Streaming) - `<Video>` from `@remotion/media` supports HLS / `.m3u8` files natively via Mediabunny. |
| `how-props-flow.mdx` | How props get resolved - Remotion performs an algorithm for determining the props that are being passed to your component when rendering the video. |
| `html-in-canvas-bugs.mdx` | HTML-in-canvas Bugs - This page tracks browser bugs and limitations affecting HTML-in-canvas that our community has reported. |
| `html-in-canvas-guide.mdx` | HTML-in-canvas - src="https://pub-646d808d9cb240cea53bedc76dd3cd0c.r2.dev/html-in-canvas-banner.mp4" |
| `html5-audio.mdx` | `<Html5Audio>` - _previously called `<Audio>`_ |
| `html5-video.mdx` | `<Html5Video>` - _previously called `<Video>`_ |
| `idea.mdx` | The core idea - The idea of Remotion is to give you a frame number and a blank canvas, to which you can render anything you want using React. |
| `iframe.mdx` | `<IFrame>` - The `<IFrame />` can be used like the regular `<iframe>` HTML tag. |
| `img.mdx` | `<Img>` - The `<Img>` tag can be used like a regular `<img>` HTML tag. |
| `importing-assets.mdx` | Importing assets - To import assets in Remotion, create a `public/` folder in your project and use `staticFile()` to import it. |
| `interactive-create.mdx` | Interactive.create() - Wraps a React component with timing props and editable controls in the Remotion Studio. |
| `interactive-with-schema.mdx` | Interactive.withSchema() - Use `Interactive.create()` instead, available from . |
| `interactive.mdx` | Interactive - `Interactive` exposes HTML and SVG elements that can be visually edited in the Remotion Studio. |
| `interactivity-schema.mdx` | InteractivitySchema - An `InteractivitySchema` describes controls that Remotion Studio can show in the timeline. |
| `interpolate-colors.mdx` | interpolateColors() - Allows you to map a range of values to colors using a concise syntax. |
| `interpolate.mdx` | interpolate() - Allows you to map a range of values to another using a concise syntax. |
| `jsx-support.mdx` | Plain JavaScript - Since Remotion 1.3, you can opt out of Typescript and it's type checking advantages in Remotion. |
| `lambda.mdx` | @remotion/lambda - href="https://youtu.be/dQyPUasZY7I" |
| `layers.mdx` | Layers - Unlike normal websites, a video has fixed dimensions. |
| `legacy-babel-loader.mdx` | Using legacy Babel transpilation - Remotion uses faster transpilation by default: `esbuild-loader` with Webpack and SWC with Rspack. |
| `light-leaks-guide.mdx` | Light Leaks - The `lightLeak()` effect from `@remotion/effects` renders an animated WebGL2-based light leak overlay. |
| `loop.mdx` | `<Loop>` - The `<Loop />` component allows you to quickly lay out an animation so it repeats itself. |
| `lovable-for-motion-graphics.mdx` | Is Remotion building Lovable for Motion Graphics? - A common question is whether the next step for Remotion is to build a consumer tool that allows for prompting motion graphics. |
| `maps.mdx` | Map animations in Remotion - Create map animations in Remotion using MapLibre GL JS and Turf.js. |
| `measure-spring.mdx` | measureSpring() - Based on a spring() configuration and the frame rate, return how long it takes for a spring animation to settle. |
| `measuring.mdx` | Measuring DOM nodes - If you want to measure a DOM node, you can assign a React Ref to it and then use the `getBoundingClientRect()` browser API to... |
| `media-playback-error.mdx` | Could not play video/audio with src - The following error may occur in your Remotion project during development or while rendering: |
| `metadata.mdx` | Setting video metadata - Video files can store metadata in them. |
| `multiple-fps.mdx` | Supporting multiple frame rates - You may want to support multiple frame rates for a composition. |
| `noise-visualization.mdx` | Noise visualization - Using the `@remotion/noise` package, you can add noise for your videos. |
| `non-seekable-media.mdx` | Non-seekable media - If you see the following error in the console: |
| `offthreadvideo.mdx` | `<OffthreadVideo>` - This component imports and displays a video, similar to `<Html5Video/>`, but during rendering, extracts the exact frame from... |
| `open-gl.mdx` | --gl flag - When rendering a video in Remotion, different GL renderer backends can be selected. |
| `overlay.mdx` | Creating overlays - If you want to export a Remotion video to use it as an overlay or transition in a conventional video editing software, you can... |
| `overwriting-webpack-config.mdx` | Webpack and Rspack - Remotion bundles your project before opening the Studio or rendering media. |
| `parallel-encoding.mdx` | Parallel encoding - With parallel encoding, Remotion encodes video frames using FFmpeg while Chromium renders the following frames. |
| `parameterized-rendering.mdx` | Parameterized videos - Remotion allows for ingesting, validating, visually editing, and transforming data that may be used to parametrize a video. |
| `passing-props.mdx` | Passing props to a composition - You can parametrize the content of the videos using React properties ("props"). |
| `performance.mdx` | Performance Tips - Video rendering is one of the most heavy workloads a computer can take on. |
| `player-into-remotion-project.mdx` | Turn a  into a Remotion project - If you have a React app that uses the `<Player>` component, you can turn it also into a Remotion project without having to... |
| `posterization.mdx` | Posterization - Posterization makes an animation update in steps instead of changing on every frame. |
| `prefetch.mdx` | prefetch() - _Available in v3.2.23_ |
| `presigned-urls.mdx` | Upload with a presigned URL - This article provides guidance for webapps wanting to allow users to upload videos and other assets. |
| `prores.mdx` | Rendering ProRes - Apple ProRes is a high-bitrate codec for video editing workflows. |
| `quality.mdx` | Quality Guide - Video encoding involves heavily compressing the video data to reduce the file size, which is a lossy process. |
| `random.mdx` | random() - The `random()` API will give deterministic pseudorandom values between `0` and `1`. |
| `react-19.mdx` | React 19 - To use React 19's newest features, you need at least version `4.0.0` of Remotion. |
| `react-native.mdx` | React Native - Support for React Native is currently not planned due to performance issues. |
| `register-root.mdx` | registerRoot() - `registerRoot` is a function that registers the root component of the Remotion project. |
| `remotion.mdx` | remotion - A package containing the essential building blocks of expressing videos in Remotion. |
| `render-all.mdx` | Render all compositions - In some scenarios, you might find it useful to render all compositions. |
| `render-as-gif.mdx` | Rendering GIFs - You can render a video as a GIF by: |
| `render.mdx` | Render your video - There are various ways to render your video. |
| `renderer.mdx` | @remotion/renderer - The `@remotion/renderer` package provides APIs for rendering video server-side. |
| `resources.mdx` | List of resources - This list tries to compile all templates, libraries, building blocks and examples in one place. |
| `sample-rate.mdx` | Audio Sample Rate - Match the sample rate of your audio input to the output sample rate to get the best audio quality. |
| `scaling.mdx` | Output scaling - Output scaling is useful if you would like to render the video in multiple resolutions in the same aspect ratio. |
| `schemas.mdx` | Defining a schema for your props - Use Zod to validate the props your component accepts and to customize their controls in the Remotion Studio. |
| `sdk.mdx` | SDK - SDK is a product by Remotion that is in development. |
| `security.mdx` | Security Best Practices - Remotion is a software that can generate videos programmatically. |
| `sequence.mdx` | `<Sequence>` - `<Sequence>` is the base component for placing content on the timeline. |
| `series.mdx` | `<Series>` - Using this component, you can easily stitch together scenes that should play sequentially after another. |
| `shaders.mdx` | Shaders - You can use shader effects in Remotion to generate backgrounds or transform content. |
| `shared-memory-capture.mdx` | Shared-memory capture - Traditionally, screenshots of webpages are captured using the Chrome DevTools Protocol, then encoded as either JPEG or PNG. |
| `slow-method-to-extract-frame.mdx` | Slow method to extract frame - From v4.0 on, this warning does not appear anymore and video frame extraction should always be fast. |
| `solid.mdx` | `<Solid>` - Renders a solid-color rectangle on a `<canvas>` element. |
| `spline.mdx` | Import from Spline - This tutorial has been reported as out of date. |
| `spring.mdx` | spring() - A physics-based animation primitive. |
| `ssr-node.mdx` | Rendering using SSR APIs - The NPM package `@remotion/renderer` provides you with "**S**erver-**S**ide **R**endering" APIs for rendering media... |
| `ssr.mdx` | Server-Side Rendering - Remotion's rendering engine is built with Node.JS, which makes it easy to render a video in the cloud. |
| `standalone.mdx` | Useful functions outside of Remotion - Remotion APIs are designed to be as pure as possible, doing just one thing at a time. |
| `static-file-relative-paths.mdx` | staticFile() does not support relative paths - If you got the following error message: |
| `static-file-remote-urls.mdx` | staticFile() does not support remote URLs - If you got the following error message: |
| `staticfile.mdx` | staticFile() - Turns a file in your `public/` folder into an URL which you can then load into your project. |
| `still.mdx` | `<Still>` - A `<Still />` is a single-frame `<Composition />`. |
| `stills.mdx` | Still images - Remotion is a great solution for rendering thumbnails of videos or dynamic still images too. |
| `studio-app.mdx` | Converting a Remotion project to an app - If you have started from any Remotion template except the Next.js and React Router templates, you currently have an app where... |
| `support.mdx` | Support Policy - The Remotion team provides **no guarantee** for support, and you should not hold the expectation to receive any help. |
| `svelte.mdx` | Using Remotion in Svelte - This guide explains how to integrate Remotion into a **Svelte** project. |
| `tailwind.mdx` | TailwindCSS - To scaffold a new video with TailwindCSS, pass `--tailwind` to the CLI and select a supported template. |
| `target-closed.mdx` | Target closed' error message - This error message **comes up when a Chromium Tab crashes**. |
| `telemetry.mdx` | Telemetry - Remotion sometimes sends telemetry that reports when a render has been made, using the `@remotion/licensing` package. |
| `terminology.mdx` | Terminology - Here we try to explain the meaning of some terms that are used often in the documentation, but are not self-explanatory. |
| `testing.mdx` | Testing Remotion components - Remotion components are regular React component, albeit they need to be wrapped in some extra contexts to render them. |
| `text-highlights.mdx` | Text highlights - We recommend `@remotion/rough-notation` to annotate text to add marker highlights, encircle words, box or strike through parts. |
| `third-party.mdx` | Third party integrations - All animations in Remotion must be driven by the value returned by the `useCurrentFrame()` hook. |
| `three-canvas.mdx` | `<ThreeCanvas>` - A wrapper for React Three Fiber's `<Canvas />` which synchronizes with Remotions `useCurrentFrame()`. |
| `three-webgpu-canvas.mdx` | `<ThreeWebGPUCanvas>` - A wrapper for React Three Fiber's `<Canvas>` which uses Three.js's `WebGPURenderer`. |
| `three.mdx` | @remotion/three - is a package for integrating React Three Fiber with Remotion. |
| `timeout.mdx` | Debugging timeouts - The following error: |
| `timing.mdx` | Timing and trimming - All Remotion components share the same timing props. |
| `track.mdx` | `<Track>` - `<Track>` puts children onto the same row in the Remotion Studio timeline. |
| `transforms.mdx` | Transforms - Animation occurs when the visual properties of an element transform over time. |
| `transitions.mdx` | Transitions - The `<TransitionSeries>` component lets you animate between absolutely positioned scenes. |
| `transparent-videos.mdx` | Rendering transparent videos - Chrome and Firefox support WebM videos with alpha channels. |
| `upgrading.mdx` | Upgrading Remotion - The easiest way to do this is to run the following command in the root of your project: |
| `use-audio-data.mdx` | useAudioData() - This convenience function wraps the `getAudioData()` function into a hook and does 3 things: |
| `use-buffer-state.mdx` | useBufferState() - You can use this hook inside your composition to retrieve functions that can inform the Player that your component is... |
| `use-current-frame.mdx` | useCurrentFrame() - With this hook, you can retrieve the current frame of the video. |
| `use-current-scale.mdx` | useCurrentScale() - With this hook, you can retrieve the scale factor of the canvas. |
| `use-delay-render.mdx` | useDelayRender() - A React hook that provides scoped `delayRender()`, `continueRender()` and `cancelRender()` (from v4.0.374) functions for React... |
| `use-img-and-iframe.mdx` | `<Img>, <Video> and <Audio>` - By using the components from Remotion, you ensure that: |
| `use-offthread-video-texture.mdx` | useOffthreadVideoTexture() - We recommend using `@remotion/media` instead. |
| `use-pixel-density.mdx` | usePixelDensity() - Returns the pixel density factor for the current Remotion render or preview. |
| `use-remotion-environment.mdx` | useRemotionEnvironment() - A React hook that provides information about the current Remotion Environment. |
| `use-video-config.mdx` | useVideoConfig() - With this hook, you can retrieve some info about the composition you are in. |
| `use-video-texture.mdx` | useVideoTexture() - We recommend using `@remotion/media` instead. |
| `use-windowed-audio-data.mdx` | useWindowedAudioData() - This is an alternative to `useAudioData()` that only loads a portion of the audio around the current frame. |
| `using-randomness.mdx` | Using randomness - The following thing is an anti-pattern in Remotion: |
| `validating-user-videos.mdx` | Validating user videos - When building an app that accepts user video uploads, you might want to validate whether the browser can play the video before... |
| `vercel-sandbox.mdx` | Rendering with Vercel Sandbox - Vercel Sandbox allows you to render videos on-demand without managing Lambda or AWS infrastructure. |
| `vercel.mdx` | Remotion on Vercel - You have two options for rendering your videos on Vercel: |
| `version-mismatch.mdx` | Version mismatch - It is important that all Remotion packages you install (`remotion`, `@remotion/player`, `@remotion/cli`, etc.) have the same... |
| `version.mdx` | VERSION - You may import this constant to get the current version of Remotion. |
| `video-and-audio.mdx` | Video and Audio - Use `<Video>` and `<Audio>` from `@remotion/media` to add media to your composition. |
| `video-matting-guide.mdx` | Video matting - src="https://remotion.media/explore-remotion/building-background-removal-2026-10-28-2e506bf93665.mp4" |
| `video-tags.mdx` | Choosing a media component - For new code, use `<Video />` from `@remotion/media`. |
| `video-uploads.mdx` | Handling user video uploads - In an app where users can upload videos and edit them, we can create a better user experience by loading the video into a... |
| `visual-editing.mdx` | Edit default props visually - You can edit the `defaultProps` of a `<Composition>` visually in the Remotion Studio. |
| `visualize-audio.mdx` | visualizeAudio() - This function takes in `AudioData` (for example fetched by `useAudioData()`) and processes it for displaying as bars. |
| `vue.mdx` | Using Remotion in Vue - This guide explains how to integrate Remotion into a **Vue.js** project. |
| `watch-static-file.mdx` | watchStaticFile() - This API is being moved to the `@remotion/studio` package. |
| `webgl.mdx` | Using WebGL and WebGPU during renders - Some Remotion packages and third-party libraries use WebGL or WebGPU during rendering, including `@remotion/effects`,... |
| `why.mdx` | Why Remotion? - In a world with 1,000 video creation tools, why would you want to use Remotion? |
| `wrong-composition-mount.mdx` | Wrongly mounted  - You are facing the following error: |
| `your-first-video.mdx` | Your first video - If this is your first experience with Remotion, you will have the easiest time by generating some content using Agent Skills. |

### accessibility/ (2 files)

| File | Description |
|------|-------------|
| `dev.mdx` | Accessibility Statement: remotion.dev - Accessibility conformance statement for the remotion.dev website, based on our WCAG 2.1 AA and RGAA 4.1.2 audit. |
| `pro.mdx` | Accessibility Statement: remotion.pro - Accessibility conformance statement for the remotion.pro website, based on the most recently executed VPAT. |

### ai/ (16 files)

| File | Description |
|------|-------------|
| `ai-saas-template.mdx` | Prompt to Motion Graphics SaaS Starter Kit - We made a Next.js starter template for building AI-powered motion graphics products. |
| `bolt.mdx` | Prompting a Remotion video with Bolt.new - On bolt.new, you can use their online AI tool to prompt a Remotion video. |
| `chatbot.mdx` | Use the Remotion Chatbot - We made a Chatbot that can answer simple questions about Remotion. |
| `claude-code-plugin.mdx` | Claude Code plugin - Remotion maintains a plugin for Claude Code. |
| `codex-plugin.mdx` | Codex plugin - Remotion maintains a plugin for Codex in the ChatGPT desktop app. |
| `coding-agents.mdx` | Prompting videos with coding agents - You can create videos just from prompting. |
| `cursor-plugin.mdx` | Cursor plugin - Remotion maintains a plugin for Cursor. |
| `dynamic-compilation.mdx` | Just-in-time compilation of Remotion code - If you have generated a Remotion component as a string (for example using LLMs), you can compile it in the browser to display... |
| `generate.mdx` | Generate Remotion Code using LLMs - This guide shows an example of how to generate Remotion component code from natural language prompts using the Vercel AI SDK. |
| `github-copilot-plugin.mdx` | GitHub Copilot plugin - Remotion maintains a plugin for GitHub Copilot. |
| `index.mdx` | Building with Remotion and AI - Here are a few ways you can use AI in your Remotion workflow today: |
| `kimi-code-plugin.mdx` | Kimi Code plugin - Remotion maintains a plugin for Kimi Code. |
| `mcp.mdx` | Remotion's Model Context Protocol (shut down) - The hosted Remotion MCP server was shut down on October 26, 2026 and is no longer available. |
| `plugins.mdx` | Plugins - Remotion maintains plugins for AI coding agents. |
| `skills.mdx` | Agent Skills - Remotion maintains a list of Agent Skills that define best practices for working in Remotion projects. |
| `webmcp.mdx` | WebMCP - Remotion Studio exposes WebMCP tools that allow an AI agent to inspect and steer it. |

### animated-emoji/ (3 files)

| File | Description |
|------|-------------|
| `animated-emoji.mdx` | `<AnimatedEmoji>` - Displays an animated emoji from Google Fonts Animated Emoji. |
| `get-available-emoji.mdx` | getAvailableEmoji() - Gets a list of available emoji that you can use with `<AnimatedEmoji>`. |
| `index.mdx` | @remotion/animated-emoji - This package wraps the Google Fonts Animated Emoji into Remotion components. |

### animation-utils/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/animation-utils - Functions that support you in animating CSS styles. |
| `interpolate-styles.mdx` | interpolateStyles() - This function provides a convenient way to interpolate styles based on a specified range of values, allowing for smooth... |
| `make-transform.mdx` | makeTransform() - Applies a sequence of transformation functions to generate a combined CSS `transform` property. |

### audio/ (7 files)

| File | Description |
|------|-------------|
| `exporting.mdx` | Exporting audio - If you export your video from Remotion, the audio is automatically included. |
| `pitch.mdx` | Controlling pitch - Use the `toneFrequency` prop to control the pitch of sound from both `<Video>` and `<Audio>`. |
| `sfx.mdx` | Sound effects - You can add sound effects to your Remotion video using the `<Audio>` tag. |
| `speed.mdx` | Controlling playback speed - Use `playbackRate` to control the speed of both `<Video>` and `<Audio>`. |
| `trimming.mdx` | Trimming, delaying and looping - `<Video>` and `<Audio>` share the same timing props. |
| `visualization.mdx` | Audio Visualization - Remotion has APIs for visualizing audio, for example for creating audiograms or music visualizers. |
| `volume.mdx` | Controlling volume and muting - Use `volume` and `muted` to control sound from both `<Video>` and `<Audio>`. |

### browser-bundler/ (6 files)

| File | Description |
|------|-------------|
| `create-browser-bundle-runtime.mdx` | createBrowserBundleRuntime() - Load a virtual Remotion project once and apply later edits through Rspack hot updates and React Fast Refresh. |
| `create-browser-bundler.mdx` | createBrowserBundler() - Creates a browser-side compiler for virtual Remotion projects. |
| `create-browser-composition-observer.mdx` | createBrowserCompositionObserver() - Keep a registered Remotion root mounted and observe a selected composition's component, props, and video configuration. |
| `get-browser-composition.mdx` | getBrowserComposition() - Selects a registered composition by ID and resolves its video configuration and props. |
| `index.mdx` | @remotion/browser-bundler - Compile a virtual Remotion project in the browser and use a registered composition in your own UI, such as a `<Player>`. |
| `load-browser-bundle.mdx` | loadBrowserBundle() - Executes a `BrowserBundle` and returns the root component it registered with `registerRoot()`. |

### canvas-capture/ (7 files)

| File | Description |
|------|-------------|
| `agentic-shot-setup.mdx` | Agentic shot setup - Canvas Capture exposes WebMCP tools for framing a shot, checking a still preview, and saving a completed recording. |
| `development.mdx` | Development - To load Canvas Capture as an unpacked extension, use a browser that meets the installation requirements. |
| `how-to-use.mdx` | Record a Video - After installing the extension, open a webpage and click the Remotion Canvas Capture icon in your browser toolbar. |
| `index.mdx` | Canvas Capture - Canvas Capture is a high-fidelity screen recorder for micro-interactions. |
| `installation.mdx` | Install Canvas Capture - _Experimental_: Canvas Capture is not yet officially released. |
| `metadata.mdx` | Recording metadata - Canvas Capture embeds cursor movements, clicks, and capture geometry in the video file as a JSON string under the... |
| `privacy.mdx` | Privacy Notice - How the Remotion Canvas Capture extension handles recordings and related data. |

### captions/ (11 files)

| File | Description |
|------|-------------|
| `api.mdx` | @remotion/captions - The `@remotion/captions` package provides utilities for dealing with subtitles. |
| `caption.mdx` | Caption - This is a simple data structure for a caption. |
| `create-tiktok-style-captions.mdx` | createTikTokStyleCaptions() - Using this function, you can segment tokens to create "pages" of captions, as commonly seen on TikTok videos. |
| `displaying.mdx` | Displaying captions - This guide explains how to display captions in Remotion, assuming you already have captions in the `Caption` format - see... |
| `exporting.mdx` | Exporting subtitles - This guide covers different ways to export subtitles from your Remotion video. |
| `importing.mdx` | Importing .srt or .vtt subtitles into Remotion - If you have an existing subtitle file, you can import it into Remotion using `parseSrt()` for `.srt` files or `parseVtt()` for... |
| `index.mdx` | Captions - Learn how to add captions and subtitles to your Remotion videos. |
| `parse-srt.mdx` | parseSrt() - Parses the contents of a SubRip file (`.srt`) and returns an array of `Caption` items. |
| `parse-vtt.mdx` | parseVtt() - Parses the contents of a WebVTT file (`.vtt`) and returns an array of `Caption` items. |
| `serialize-srt.mdx` | serializeSrt() - Converts a two-dimensional array of `Caption` items into a string in the SubRip format (`.srt`). |
| `transcribing.mdx` | Transcribing audio - Remotion provides several built-in options for transcribing audio to generate captions: |

### cli/ (16 files)

| File | Description |
|------|-------------|
| `add.mdx` | npx remotion add - Adds one or more Remotion packages to your project with the same version as your other Remotion packages. |
| `benchmark.mdx` | npx remotion benchmark - Measures render time by running a render multiple times, if desired with multiple compositions and concurrency values to... |
| `bundle.mdx` | npx remotion bundle - Creates a Remotion Bundle on the command line. |
| `cli.mdx` | Command line reference - You can run the CLI by installing `@remotion/cli` and running: |
| `compositions.mdx` | npx remotion compositions - Print list of composition IDs based on a path of an entry point. |
| `create-video.mdx` | npx create-video - Scaffold a new Remotion project. |
| `ffmpeg.mdx` | npx remotion ffmpeg - In order to use `ffmpeg` without having to directly install it, Remotion provides it via `npx remotion ffmpeg`. |
| `ffprobe.mdx` | npx remotion ffprobe - In order to use `ffprobe` without having to directly install it, Remotion provides it via `npx remotion ffprobe`. |
| `gpu.mdx` | npx remotion gpu - Prints out how the Chrome browser uses the GPUs. |
| `help.mdx` | npx remotion help - Prints available commands and flags for the Remotion CLI. |
| `render.mdx` | npx remotion render - Render a video or audio based on the entry point, the composition ID and save it to the output location. |
| `skills.mdx` | npx remotion skills - Install or update Agent Skills from `remotion-dev/skills`. |
| `still.mdx` | npx remotion still - Render a still frame based on the entry point, the composition ID and save it to the output location. |
| `studio.mdx` | npx remotion studio - _Alias: npx remotion preview_ |
| `upgrade.mdx` | npx remotion upgrade - Upgrades all Remotion-related packages. |
| `versions.mdx` | npx remotion versions - Prints out which versions of Remotion packages are installed. |

### cli/browser/ (2 files)

| File | Description |
|------|-------------|
| `ensure.mdx` | npx remotion browser ensure - Ensures that Remotion has a browser it can use for rendering. |
| `index.mdx` | npx remotion browser - Commands for managing the browser used by Remotion. |

### cli/elements/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | npx remotion elements - Commands for installing Elements from Element Libraries. |
| `use.mdx` | npx remotion elements use - Installs an Element from the page of an Element Library into a composition of your project. |

### client-side-rendering/ (7 files)

| File | Description |
|------|-------------|
| `cancellation.mdx` | Cancelling renders - Both `renderMediaOnWeb()` and `renderStillOnWeb()` support cancellation via the `AbortSignal` API. |
| `how-it-works.mdx` | How client-side rendering works - The biggest challenge of client-side rendering is that it is not possible to capture the browser viewport. |
| `html-in-canvas.mdx` | HTML-in-canvas - This is not the same as the `<HtmlInCanvas>` component for designing visuals. |
| `index.mdx` | Client-side rendering - Client-side rendering is a Remotion capability that allows you to render videos, images, and audio directly in the browser,... |
| `limitations.mdx` | Limitations of client-side rendering - The browser must support the WebCodecs API. |
| `migration.mdx` | Migrating code to client-side rendering - We try to support as much code that was written for server-side rendering as possible. |
| `page-responsiveness.mdx` | Page responsiveness - The Web Renderer runs in the same browser tab as the page that starts the render. |

### cloudrun/ (27 files)

| File | Description |
|------|-------------|
| `api.mdx` | @remotion/cloudrun - Cloud Run is in Alpha status and not actively being developed. |
| `checklist.mdx` | Production Checklist - Cloud Run is in Alpha status and not actively being developed. |
| `cli.mdx` | @remotion/cloudrun - CLI - Cloud Run is in Alpha status and not actively being developed. |
| `deleteservice.mdx` | deleteService() - Cloud Run is in Alpha status and not actively being developed. |
| `deletesite.mdx` | deleteSite() - Cloud Run is in Alpha status and not actively being developed. |
| `deployservice.mdx` | deployService() - Cloud Run is in Alpha status and not actively being developed. |
| `deploysite.mdx` | deploySite() - Cloud Run is in Alpha status and not actively being developed. |
| `generate-env.mdx` | Generate .env File - Cloud Run is in Alpha status and not actively being developed. |
| `getServiceinfo.mdx` | getServiceInfo() - Cloud Run is in Alpha status and not actively being developed. |
| `getorcreatebucket.mdx` | getOrCreateBucket() - Cloud Run is in Alpha status and not actively being developed. |
| `getregions.mdx` | getRegions() - Cloud Run is in Alpha status and not actively being developed. |
| `getservices.mdx` | getServices() - Cloud Run is in Alpha status and not actively being developed. |
| `getsites.mdx` | getSites() - Cloud Run is in Alpha status and not actively being developed. |
| `instancecount.mdx` | Instance Count - Cloud Run is in Alpha status and not actively being developed. |
| `light-client.mdx` | Light client - The following methods and types can be imported from `@remotion/cloudrun/client`: |
| `limits.mdx` | Cloud Run Limits - Cloud Run is in Alpha status and not actively being developed. |
| `multiple-buckets.mdx` | Multiple buckets in Remotion Cloud Run - Cloud Run is in Alpha status and not actively being developed. |
| `permissions.mdx` | Permissions - Cloud Run is in Alpha status and not actively being developed. |
| `region-selection.mdx` | Region selection - Cloud Run is in Alpha status and not actively being developed. |
| `rendermediaoncloudrun.mdx` | renderMediaOnCloudrun() - Cloud Run is in Alpha status and not actively being developed. |
| `renderstilloncloudrun.mdx` | renderStillOnCloudrun() - Cloud Run is in Alpha status and not actively being developed. |
| `setup.mdx` | Setup - Cloud Run is in Alpha status and not actively being developed. |
| `speculateservicename.mdx` | speculateServiceName() - Cloud Run is in Alpha status and not actively being developed. |
| `status.mdx` | Status - Critical bugs are fixed, but no new features are being added. |
| `testpermissions.mdx` | testPermissions() - Cloud Run is in Alpha status and not actively being developed. |
| `uninstall.mdx` | Uninstall Cloud Run - Cloud Run is in Alpha status and not actively being developed. |
| `upgrading.mdx` | Upgrading Cloud Run - Cloud Run is in Alpha status and not actively being developed. |

### cloudrun/cli/ (6 files)

| File | Description |
|------|-------------|
| `permissions.mdx` | npx remotion cloudrun permissions - Cloud Run is in Alpha status and not actively being developed. |
| `regions.mdx` | npx remotion cloudrun regions - Cloud Run is in Alpha status and not actively being developed. |
| `render.mdx` | npx remotion cloudrun render - Cloud Run is in Alpha status and not actively being developed. |
| `services.mdx` | npx remotion cloudrun services - Cloud Run is in Alpha status and not actively being developed. |
| `sites.mdx` | npx remotion cloudrun sites - Cloud Run is in Alpha status and not actively being developed. |
| `still.mdx` | npx remotion cloudrun still - Cloud Run is in Alpha status and not actively being developed. |

### cloudrun/cli/services/ (4 files)

| File | Description |
|------|-------------|
| `deploy.mdx` | npx remotion cloudrun services deploy - Cloud Run is in Alpha status and not actively being developed. |
| `ls.mdx` | npx remotion cloudrun services ls - Cloud Run is in Alpha status and not actively being developed. |
| `rm.mdx` | npx remotion cloudrun services rm - Cloud Run is in Alpha status and not actively being developed. |
| `rmall.mdx` | npx remotion cloudrun services rmall - Cloud Run is in Alpha status and not actively being developed. |

### cloudrun/cli/sites/ (4 files)

| File | Description |
|------|-------------|
| `create.mdx` | npx remotion cloudrun sites create - Cloud Run is in Alpha status and not actively being developed. |
| `ls.mdx` | npx remotion cloudrun sites ls - Cloud Run is in Alpha status and not actively being developed. |
| `rm.mdx` | npx remotion cloudrun sites rm - Cloud Run is in Alpha status and not actively being developed. |
| `rmall.mdx` | npx remotion cloudrun sites rmall - Cloud Run is in Alpha status and not actively being developed. |

### editor-starter/ (25 files)

| File | Description |
|------|-------------|
| `asset-cleanup.mdx` | Asset cleanup - You are responsible for cleaning up assets that were added by the user and are no longer needed. |
| `asset-uploads.mdx` | Asset uploads - If the user drops in any image, audio, video or GIF, they are uploaded to cloud storage so that they remain accessible during... |
| `backend-routes.mdx` | Backend routes in the Editor Starter - Some Editor Starter features require backend endpoints. |
| `before-you-buy.mdx` | Before you buy the Editor Starter - Is the Editor Starter for you? |
| `buy.mdx` | Buy the Editor Starter - To buy the Editor Starter for $600, visit **remotion.pro/editor-starter**. |
| `captioning.mdx` | Captioning in the Editor Starter - The Editor Starter comes with a method to generate captions for videos and audio assets. |
| `client-side-rendering.mdx` | Client-side rendering in the Editor Starter - The Editor Starter can render videos in the browser using `@remotion/web-renderer`. |
| `copy-paste.mdx` | Copy and Paste in the Editor Starter - The Remotion Editor Starter implements copying and pasting from layers. |
| `cropping.mdx` | Cropping in the Editor Starter - With cropping, users can choose to cut off edges of an item in all 4 directions (left, right, top, bottom). |
| `demo.mdx` | Editor Starter Demo - Try out the Editor Starter yourself! |
| `dependencies.mdx` | Dependencies of the Editor Starter - The Editor Starter is built in React 19 and Remotion. |
| `faq.mdx` | Frequently asked questions about the Editor Starter - This is a starting point for building a video editor containing the essential features - it is meant to jumpstart someone... |
| `features-not-included.mdx` | Features not included in the Editor Starter - The Remotion Editor Starter aims to include only the obvious features that every video editor needs. |
| `features.mdx` | Features in the Editor Starter - On this page, we list the features that are available in the Editor Starter. |
| `fonts.mdx` | Fonts in the Editor Starter - The Editor Starter comes with various features for controlling which fonts are used by the text and caption items. |
| `index.mdx` | Editor Starter - A template containing the most essential elements of a video editor. |
| `persistance.mdx` | Persistance in the Editor Starter - There are 3 types of persistance in the Editor Starter: |
| `production-checklist.mdx` | Production Checklist - Ready to launch? Congrats! |
| `rendering.mdx` | Rendering with Remotion Lambda in the Editor Starter - By default, videos are rendered using Remotion Lambda, a distributed renderer on AWS Lambda. |
| `setup.mdx` | Setup - After obtaining the Editor Starter, you should fork it to your own account. |
| `snapping.mdx` | Snapping in the Editor Starter - There are two types of snapping in the Editor Starter: |
| `state-management.mdx` | State management in the Editor Starter - State in the Editor Starter is managed with the built-in React state management utilities: `useState()` and `useContext()`. |
| `tracks-items-assets.mdx` | Tracks, items and assets in the Editor Starter - The state of the Editor Starter contains different data types: |
| `undo-and-redo.mdx` | Undo and Redo - The Editor Starter implements a basic Undo and Redo feature. |
| `vs-studio.mdx` | Editor Starter vs. Remotion Studio - The Remotion Studio and the Editor Starter are different products for different purposes. |

### effects/ (91 files)

| File | Description |
|------|-------------|
| `barrel-distortion.mdx` | barrelDistortion() - A barrel distortion effect that bends canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `bevel-alpha.mdx` | bevelAlpha() - Adds highlights and shadows along the alpha edges of text, logos, and shapes to give them a raised appearance. |
| `blur.mdx` | blur() - A Gaussian blur that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`.. |
| `brightness.mdx` | brightness() - A brightness adjustment effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `burlap.mdx` | burlap() - Adds a procedural woven burlap texture to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `checkerboard.mdx` | checkerboard() - Adds a repeating checkerboard pattern to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `chromatic-aberration.mdx` | chromaticAberration() - A linear chromatic aberration effect that separates the red and blue channels on canvas-based components such as `<Video>`,... |
| `color-correction.mdx` | colorCorrection() - Applies common primary color adjustments in one pass. |
| `color-key.mdx` | colorKey() - A classic color key (chroma key) effect that turns pixels close to a chosen color transparent. |
| `contour-lines.mdx` | contourLines() - Adds a deterministic topographic contour-line overlay to canvas-based components such as `<Video>`, `<HtmlInCanvas>`,... |
| `contrast.mdx` | contrast() - A contrast adjustment effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `corner-pin.mdx` | cornerPin() - Pin a canvas-based component by moving its four source corners. |
| `curves.mdx` | curves() - Maps input color values to output values along a curve. |
| `cylinder.mdx` | cylinder() - Wraps canvas content around an open cylinder. |
| `dot-grid.mdx` | dotGrid() - An effect that turns a canvas-based component into evenly sized source-color dots. |
| `drop-shadow.mdx` | dropShadow() - Adds a blurred shadow behind canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `duotone.mdx` | duotone() - A duotone effect that maps every non-transparent pixel to one of two colors based on its luminance. |
| `emboss.mdx` | emboss() - Adds a procedural raised-line relief to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `evolve.mdx` | evolve() - Reveals a canvas-based component from a direction or angle with an optional soft edge. |
| `exposure.mdx` | exposure() - Adjusts exposure in photographic stops. |
| `film-burn.mdx` | filmBurn() - Burns irregular holes into a canvas-based component, with charred rims and glowing orange edges. |
| `fisheye.mdx` | fisheye() - An ultra-wide-angle fisheye lens effect for canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `flannel.mdx` | flannel() - Generates a plaid woven-fabric pattern on a `<Solid>`. |
| `fractal-noise.mdx` | fractalNoise() - Generates layered grayscale noise for clouds, smoke and organic textures. |
| `glow.mdx` | glow() - Adds a soft halo around bright parts of canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `grayscale.mdx` | grayscale() - A grayscale effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `gridlines.mdx` | gridlines() - Draws a configurable rectangular grid over a canvas-based component. |
| `halftone-linear-gradient.mdx` | halftoneLinearGradient() - A halftone effect that renders a grid of dots whose size changes across a linear gradient. |
| `halftone.mdx` | halftone() - A halftone effect that turns luminance into a grid of circles, squares, or lines on canvas-based components such as `<Video>`,... |
| `hue.mdx` | hue() - A hue rotation effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `index.mdx` | @remotion/effects - Effects that can be applied to Remotion-based canvas components. |
| `invert.mdx` | invert() - An invert effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `iris-wipe.mdx` | irisWipe() - Erases the inside of a polygon or star from a canvas-based component. |
| `lens-blur.mdx` | lensBlur() - Defocuses an image through a circular or polygonal aperture. |
| `levels.mdx` | levels() - Adjusts input black and white points, midtone gamma, and the output range for all RGB channels or one color channel. |
| `light-leak.mdx` | lightLeak() - Applies a light leak overlay to canvas-based components such as `<Video>`, `<CanvasImage>` and `<Solid>`. |
| `light-trail.mdx` | lightTrail() - Creates a directional light trail from bright or opaque parts of canvas-based components such as `<Video>`, `<HtmlInCanvas>`... |
| `linear-gradient-tint.mdx` | linearGradientTint() - A tint effect whose color changes across a two-stop linear gradient. |
| `linear-gradient.mdx` | linearGradient() - A two-stop linear gradient for canvas-based components such as `<Solid>`, `<Video>` and `<HtmlInCanvas>`. |
| `linear-progressive-blur.mdx` | linearProgressiveBlur() - A Gaussian blur whose radius changes across a two-stop linear gradient. |
| `linear-progressive-pixelate.mdx` | linearProgressivePixelate() - A pixelation effect whose block size changes across a two-stop linear gradient. |
| `lines.mdx` | lines() - Adds an alternating line pattern to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `liquid-contours.mdx` | liquidContours() - Generates a two-color liquid contour background with broad, warped topographic bands. |
| `long-shadows.mdx` | longShadows() - Extends the alpha silhouette of a canvas-based component into a solid directional shadow. |
| `lut.mdx` | lut() - Applies an inline 3D color lookup table in the `.cube` format. |
| `magnify.mdx` | magnify() - Enlarges a circular or square area of a canvas-based component, like a magnifying glass. |
| `mirror.mdx` | mirror() - A mirror effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `noise-displacement.mdx` | noiseDisplacement() - Distorts a circular part of the source with deterministic procedural noise. |
| `noise.mdx` | noise() - Adds centered procedural noise to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `outline.mdx` | outline() - Draws a solid outline around the non-transparent pixels of a canvas-based component such as `<Video>`, `<HtmlInCanvas>` or... |
| `page-turn.mdx` | pageTurn() - Curls canvas content like a sheet of paper, with a shaded fold and a configurable back. |
| `paper.mdx` | paper() - Adds a procedural paper texture to canvas-based components such as `<Video>`, `<HtmlInCanvas>`, `<CanvasImage>` and `<Solid>`. |
| `pattern.mdx` | pattern() - Repeats a scaled copy of a canvas source horizontally and vertically. |
| `pixel-dissolve.mdx` | pixelDissolve() - A pixel dissolve effect that divides the frame into a grid and fades the cells out in a pseudo-random order while preserving... |
| `pixelate.mdx` | pixelate() - A pixelate effect that divides the image into rectangular blocks, making each block a single solid color sampled from the source. |
| `radial-progressive-blur.mdx` | radialProgressiveBlur() - A Gaussian blur whose radius changes from a center point to the edge of an ellipse. |
| `radial-progressive-pixelate.mdx` | radialProgressivePixelate() - A pixelation effect whose block size changes from the center to the edge of an ellipse. |
| `radial-wipe.mdx` | radialWipe() - Erases a canvas-based component with a rotating wedge around a center point. |
| `rain-fall.mdx` | rainFall() - Adds falling rain to a canvas-based component, with wind, depth, and refracting or solid drops. |
| `region-blur.mdx` | regionBlur() - Applies a Gaussian blur inside a rectangular or rounded region. |
| `rings.mdx` | rings() - Adds concentric circular bands to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `roughen-edges.mdx` | roughenEdges() - Roughens the alpha boundary of canvas-based components such as `<Video>`, `<HtmlInCanvas>`, `<CanvasImage>` and `<Solid>`. |
| `saturation.mdx` | saturation() - A saturation effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `scale.mdx` | scale() - A scale effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `scanlines.mdx` | scanlines() - Adds horizontal scanlines to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `shadows-highlights.mdx` | shadowsHighlights() - Adjusts dark and bright tonal regions independently while preserving hue. |
| `shatter.mdx` | shatter() - Breaks a canvas-based component into fragments that fly apart, tumble in 3D, and fall under gravity. |
| `shine.mdx` | shine() - Adds a glossy light sweep to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `shrinkwrap.mdx` | shrinkwrap() - Adds a procedural plastic wrap layer to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<CanvasImage>`. |
| `skew.mdx` | skew() - Skews a canvas-based component horizontally and vertically. |
| `snow-fall.mdx` | snowFall() - Adds drifting snow to a canvas-based component, with wind, depth, and individual variations in size and motion. |
| `speckle.mdx` | speckle() - Adds small random alpha holes to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `sphere.mdx` | sphere() - Wraps canvas content around a sphere using an orthographic projection. |
| `starburst.mdx` | starburst() - Renders a retro starburst ray pattern on canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `tear.mdx` | tear() - Tears a canvas-based component along a zigzag seam in any direction. |
| `thermal-vision.mdx` | thermalVision() - Maps source luminance to a thermal heat-map color ramp. |
| `tile.mdx` | tile() - Repeats the non-transparent area of a canvas source across the canvas. |
| `tint.mdx` | tint() - A tint effect that blends a flat color over canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `turbulent-displace.mdx` | turbulentDisplace() - Warps a layer using evolving fractal noise. |
| `tv-signal-off.mdx` | tvSignalOff() - Blends canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>` into a TV color bars test pattern. |
| `uv-translate.mdx` | uvTranslate() - A translate effect that moves a canvas-based component by normalized UV coordinates. |
| `venetian-blinds.mdx` | venetianBlinds() - Reveals a canvas-based component through vertical or horizontal blinds. |
| `vibrance.mdx` | vibrance() - Adjusts muted colors more strongly than colors that are already saturated. |
| `vignette.mdx` | vignette() - A vignette effect that darkens, colors, or fades out the edges of canvas-based components such as `<Video>`, `<HtmlInCanvas>`... |
| `wave.mdx` | wave() - A wave effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `waves.mdx` | waves() - Adds repeating wavy bands to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `white-balance.mdx` | whiteBalance() - Corrects blue-to-amber temperature and green-to-magenta tint in footage and images. |
| `white-noise.mdx` | whiteNoise() - Replaces or blends canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>` with a grayscale white noise layer. |
| `xy-translate.mdx` | xyTranslate() - A translate effect that moves a canvas-based component by an absolute pixel offset. |
| `zigzag.mdx` | zigzag() - Adds repeating zig-zag bands to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `zoom-blur.mdx` | zoomBlur() - A radial zoom blur that smears pixels away from a configurable center point. |

### elements/ (1 files)

| File | Description |
|------|-------------|
| `libraries.mdx` | Building Element Libraries - An Element Library is a website that offers a collection of reusable video components, such as titles, backgrounds, and... |

### elevenlabs/ (3 files)

| File | Description |
|------|-------------|
| `detect-elevenlabs-transcript-format.mdx` | detectElevenLabsTranscriptFormat() - Recognizes the structure of an ElevenLabs Speech-to-Text response or segmented JSON export. |
| `elevenlabs-transcript-to-captions.mdx` | elevenLabsTranscriptToCaptions() - Converts an ElevenLabs Speech to Text API response or a JSON transcript exported from ElevenLabs into an array of `Caption`... |
| `index.mdx` | @remotion/elevenlabs - The `@remotion/elevenlabs` package converts the output of the ElevenLabs Speech to Text API into an array of `Caption`... |

### enable-scss/ (2 files)

| File | Description |
|------|-------------|
| `enable-scss.mdx` | enableScss() - A function that modifies the default bundler configuration to make the necessary changes to support SASS/SCSS. |
| `overview.mdx` | @remotion/enable-scss - `@remotion/enable-scss` is deprecated and will no longer be published starting with Remotion 5.0. |

### fonts-api/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/fonts - The `@remotion/fonts` package provides an API for loading local fonts or remote fonts from a URL into a Remotion component. |
| `load-font.mdx` | loadFont() - Load a local font for use in Remotion. |

### gif/ (4 files)

| File | Description |
|------|-------------|
| `get-gif-duration-in-seconds.mdx` | getGifDurationInSeconds() - Gets the duration in seconds of a GIF. |
| `gif.mdx` | `<Gif>` - Displays a GIF that synchronizes with Remotions `useCurrentFrame()`. |
| `index.mdx` | @remotion/gif - You can install this package from NPM to get a component for displaying GIFs that synchronize with Remotions `useCurrentFrame()`. |
| `preload-gif.mdx` | preloadGif() - Call `preloadGif(src)` with the URL of the GIF that you would like to load and the GIF will be prepared for display in the... |

### google-fonts/ (7 files)

| File | Description |
|------|-------------|
| `get-available-fonts.mdx` | getAvailableFonts() - Array of all available fonts available in `@remotion/google-fonts`. |
| `get-info.mdx` | getInfo() - Each font exports a `getInfo()` function that returns information such as the available weights, styles and subsets. |
| `index.mdx` | @remotion/google-fonts - One way of embedding fonts in Remotion is `@remotion/google-fonts`, sourcing fonts from Google Fonts. |
| `load-font-from-info.mdx` | loadFontFromInfo() - Loads a Google Font based on some metadata that was obtained using `getInfo()`. |
| `load-font.mdx` | loadFont() - Load a Google Font for use in Remotion. |
| `load-variable-font-from-info.mdx` | loadVariableFontFromInfo() - Loads a variable Google Font from metadata obtained using `getInfo()`. |
| `load-variable-font.mdx` | loadVariableFont() - Loads a Google Font as a variable font. |

### gsap/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/gsap - Use GSAP timelines in Remotion. |
| `use-gsap-timeline.mdx` | useGsapTimeline() - Builds a paused GSAP timeline and seeks it to the current frame of the Remotion timeline. |

### install-whisper-cpp/ (6 files)

| File | Description |
|------|-------------|
| `convert-to-captions.mdx` | convertToCaptions() - This API was deprecated as of Remotion 4.0.216. |
| `download-whisper-model.mdx` | downloadWhisperModel() - Downloads a Whisper.cpp model to a folder. |
| `index.mdx` | @remotion/install-whisper-cpp - With Whisper.cpp, you can transcribe audio locally on your machine. |
| `install-whisper-cpp.mdx` | installWhisperCpp() - Installs a Whisper.cpp version into a folder. |
| `to-captions.mdx` | toCaptions() - Converts the output from `transcribe()` into an array of `Caption` objects, so you can use the functions from... |
| `transcribe.mdx` | transcribe() - Transcribes a media file by utilizing Whisper.cpp. |

### lambda/ (78 files)

| File | Description |
|------|-------------|
| `api.mdx` | @remotion/lambda - The following Node.JS are available: |
| `approuterwebhook.mdx` | appRouterWebhook() - Simplifies the process of setting up a Lambda Webhook in your Next.js app which is using App Router. |
| `authentication.mdx` | Authentication - You can authenticate with the `@remotion/lambda` package either using: |
| `autodelete.mdx` | Auto-delete renders - To automatically delete renders and associated files after some time, you need to: |
| `aws-china-regions.mdx` | AWS China regions - Remotion Lambda supports these AWS China regions: |
| `bucket-naming.mdx` | Bucket names in Remotion Lambda - A Remotion Lambda bucket name (for example `remotionlambda-apsouth1-3ysk0nyazp`) has two special attributes: |
| `bucket-security.mdx` | Bucket Security - Before Remotion Lambda, v4.0.418, buckets created with Remotion Lambda used a `public-read` ACL. |
| `cancellation.mdx` | Cancelling Lambda renders - By default, a Lambda render continues until it finishes or fails. |
| `cancelrenderonlambda.mdx` | cancelRenderOnLambda() - Signals the renderer functions of an in-progress Lambda render to stop. |
| `changelog.mdx` | Prerelease Changelog - From 3.0.0 onwards, the changelog is located in the main Remotion changelog on GitHub. |
| `checklist.mdx` | Production Checklist - You have implemented your solution with Remotion Lambda and are ready to launch your project into the world. |
| `cli.mdx` | @remotion/lambda - CLI - To use the Remotion Lambda CLI, you first need to install it. |
| `concurrency.mdx` | Concurrency - Remotion Lambda is a distributed video rendering system. |
| `cost-example.mdx` | How much does Remotion Lambda cost? - This page shows estimations to help you better expect how much Remotion Lambda will cost. |
| `cost.mdx` | Optimizing for cost - On this page, a few strategies for optimizing the cost of using Remotion Lambda are presented. |
| `custom-destination.mdx` | Customizing Lambda output destination - By default a render artifact is saved into the same S3 bucket as where the site is located under the key... |
| `custom-function-names.mdx` | Custom Lambda function names - While we recommend the default Lambda function names, the organization you work for might have naming conventions that you... |
| `custom-layers.mdx` | Custom Layers - The Lambda function includes Chrome and base fonts by default. |
| `data-transfer-cost.mdx` | Data transfer cost - When rendering on Remotion Lambda, a headless browser is opened, which opens your bundle via the Serve URL. |
| `deletefunction.mdx` | deleteFunction() - Deletes a deployed Lambda function based on its name. |
| `deleterender.mdx` | deleteRender() - Deletes a rendered video, audio, still, or image sequence and its associated metadata and separated audio. |
| `deletesite.mdx` | deleteSite() - Removes a Remotion project from your S3 bucket. |
| `deployfunction.mdx` | deployFunction() - Creates an AWS Lambda function in your AWS account that will be able to render a video in the cloud. |
| `deploysite.mdx` | deploySite() - Prefer building with `bundle()` and uploading its output with `deploySiteFromBundle()`. |
| `deploysitefrombundle.mdx` | deploySiteFromBundle() - Uploads a local Remotion Bundle to an S3 bucket. |
| `disk-size.mdx` | Disk size - By default, each Lambda function comes with an ephemereal disk size of: |
| `downloadmedia.mdx` | downloadMedia() - Downloads a rendered video, audio, still, or image sequence to the disk of the machine this API is called from. |
| `downloadvideo.mdx` | downloadVideo() - This page has moved. Redirecting... |
| `estimateprice.mdx` | estimatePrice() - Calculates the AWS costs incurred for AWS Lambda given the region, execution duration and memory size based on the AWS Lambda... |
| `expresswebhook.mdx` | expressWebhook() - Simplifies the process of setting up a Lambda Webhook in your Express.js server. |
| `faq.mdx` | FAQ - Some commonly asked questions about Remotion Lambda. |
| `faster-progress-polling.mdx` | Faster progress polling - By default, each `getRenderProgress()` call invokes the render function, which reads the render progress from S3. |
| `getawsclient.mdx` | getAwsClient() - This API exposes full access to the AWS SDK that Remotion uses under the hood. |
| `getcompositionsonlambda.mdx` | getCompositionsOnLambda() - Gets the compositions inside a Lambda function. |
| `getfunctioninfo.mdx` | getFunctionInfo() - Gets information about a function given its name and region. |
| `getfunctions.mdx` | getFunctions() - Retrieves a list of functions that Remotion deployed to AWS Lambda in a certain region. |
| `getorcreatebucket.mdx` | getOrCreateBucket() - Creates a bucket for Remotion Lambda in your S3 account. |
| `getregions.mdx` | getRegions() - Gets an array of all supported AWS regions of this release of Remotion Lambda. |
| `getrenderprogress.mdx` | getRenderProgress() - Gets the current status of a render initiated via `renderMediaOnLambda()` or `renderFramesOnLambda()`. |
| `getrolepolicy.mdx` | getRolePolicy() - Returns an inline JSON policy to be assigned to the 'remotion-lambda-role' role that needs to be created in your AWS account. |
| `getsites.mdx` | getSites() - Gets an array of Remotion projects in your S3 account. |
| `getuserpolicy.mdx` | getUserPolicy() - Returns an inline JSON policy to be assigned to the AWS user whose credentials are being used for excuting CLI commands or... |
| `go.mdx` | Triggering renders from Go - To trigger a Lambda render using Go, you can use the Remotion Lambda Go client. |
| `how-lambda-works.mdx` | How Remotion Lambda works - This document describes the procedure that gets executed when a Remotion Lambda video render is triggered. |
| `insights.mdx` | Enable Lambda Insights - You may enable AWS Lambda Insights for your Remotion Lambda function. |
| `light-client.mdx` | Light client - The following methods and types can be imported from `@remotion/lambda/client`. |
| `limits.mdx` | Lambda Limits - The standard AWS Lambda quotas apply (see here), most notably: |
| `multiple-buckets.mdx` | Multiple buckets in Remotion Lambda - The ideal setup is if you use **1 bucket per region and account** that you use Remotion Lambda in. |
| `naming-convention.mdx` | Function naming convention - By default, a Remotion Lambda function has the following naming convention: |
| `pagesrouterwebhooks.mdx` | pagesRouterWebhook() - Simplifies the process of setting up a Lambda Webhook in your Next.js app which is using Pages Router. |
| `permissions.mdx` | Permissions - This document describes the necessary permissions for Remotion Lambda and explains to those interested why the permissions are... |
| `php.mdx` | Triggering renders from PHP - To trigger a Lambda render using PHP, install the `remotion/lambda` package using `composer`. |
| `presignurl.mdx` | presignUrl() - Takes a private S3 object and turns it into a public URL by signing with your AWS credentials. |
| `proxy.mdx` | Using a proxy with Remotion Lambda - Remotion Lambda supports using HTTP/HTTPS proxies for all AWS API calls by accepting a `requestHandler` option that allows you... |
| `python.mdx` | Triggering renders from Python - To trigger a Lambda render using Python, install the `remotion-lambda` package using `pip`, by executing `pip install... |
| `r2.mdx` | Using Remotion Lambda with R2 - R2 by Cloudflare is a popular way to store renders because there are no egress fees. |
| `region-selection.mdx` | Region selection - Before going live with Remotion Lambda, you need to think about into which AWS region you are deploying your function and bucket. |
| `renderframesonlambda.mdx` | renderFramesOnLambda() - Starts a distributed image sequence render on AWS Lambda. |
| `renderframesonlambdaandstream.mdx` | renderFramesOnLambdaAndStream() - Starts an image sequence render on AWS Lambda, streams progress, and waits for the render to finish. |
| `rendermediaonlambda.mdx` | renderMediaOnLambda() - Kicks off a render process on Remotion Lambda. |
| `rendermediaonlambdaandstream.mdx` | renderMediaOnLambdaAndStream() - Starts a media render on AWS Lambda, streams progress, and waits for the render to finish. |
| `renderstillonlambda.mdx` | renderStillOnLambda() - Renders a still image inside a lambda function and writes it to the specified output location. |
| `rendervideoonlambda.mdx` | renderVideoOnLambda() - This page has moved. Redirecting... |
| `ruby.mdx` | Triggering renders from Ruby - To trigger a Lambda render using Ruby, install the `remotion_lambda` gem. |
| `runtime.mdx` | Runtime - This page describes the environment that the Lambda function is running in. |
| `s3-public-access.mdx` | Cannot create a S3 bucket using Remotion - Since approximately April 25th 2023, AWS blocks the creation of public buckets without extra configuration, making it... |
| `separate-environments.mdx` | Separating production and testing environments - The code that is inside the Lambda function is always the same, no matter if you are calling it from a local, staging or... |
| `serverless-framework-integration.mdx` | Using the Serverless Framework with Remotion Lambda - This guide will show you how to use Remotion with Serverless Framework (serverless.com). |
| `setup.mdx` | Setup - Check all user permissions and validate them against the AWS Policy simulator by executing the following command: |
| `simulatepermissions.mdx` | simulatePermissions() - Runs tests through the AWS Simulator ensuring that all the necessary permissions are set for the authenticated user. |
| `speculateFunctionName.mdx` | speculateFunctionName() - Speculate the name of the Lambda function that will be created by `deployFunction()` or its CLI equivalent, `npx remotion... |
| `speed.mdx` | Optimizing for speed - On this page, a few strategies are presented for making a render on Lambda as fast as possible. |
| `sqs.mdx` | Using Lambda with SQS - This process has a flaw: The queue continues as soon as the render is triggered, not as soon as the render has finished. |
| `supabase.mdx` | Using Remotion Lambda with Supabase - This page shows how to trigger a Remotion Lambda render from a Supabase Edge Function. |
| `uninstall.mdx` | Uninstall Lambda - Of course we are bummed if you decided not to use Remotion Lambda anymore. |
| `upgrading.mdx` | Upgrading Lambda - Upgrade all packages to the newest version (`@remotion/lambda`, but also `remotion`, `@remotion/cli` etc.) |
| `validatewebhooksignature.mdx` | validateWebhookSignature() - Validates that the signature that was received by a webhook endpoint is authentic. |
| `webhooks.mdx` | Webhooks - When rendering on AWS Lambda, Remotion can send webhooks to notify you when the render ends, successfully or with failures. |

### lambda/cli/ (8 files)

| File | Description |
|------|-------------|
| `compositions.mdx` | npx remotion lambda compositions - Print list of composition IDs from a serve URL, fetched from inside a Lambda function. |
| `functions.mdx` | npx remotion lambda functions - The `npx remotion lambda functions` command allows you to deploy, view and delete AWS lambda functions that can render videos. |
| `policies.mdx` | npx remotion lambda policies - Prints the necessary permissions to be inserted into the AWS console during setup. |
| `quotas.mdx` | npx remotion lambda quotas - Displays the AWS Lambda concurrency and burst limits currently being applied to your account and region. |
| `regions.mdx` | npx remotion lambda regions - Prints the AWS regions supported by the current version of Remotion Lambda. |
| `render.mdx` | npx remotion lambda render - Using the `npx remotion lambda render` command, you can render a video in the cloud. |
| `sites.mdx` | npx remotion lambda sites - The `npx remotion lambda sites` command allows to create, view and delete Remotion projects in your S3 bucket. |
| `still.mdx` | npx remotion lambda still - Using the `npx remotion lambda still` command, you can render a still frame in the cloud. |

### lambda/cli/functions/ (4 files)

| File | Description |
|------|-------------|
| `deploy.mdx` | npx remotion lambda functions deploy - Creates a new function in your AWS account. |
| `ls.mdx` | npx remotion lambda functions ls - Lists the functions that you have deployed to AWS in the selected region. |
| `rm.mdx` | npx remotion lambda functions rm - Removes one or more functions from your AWS infrastructure. |
| `rmall.mdx` | npx remotion lambda functions rmall - Removes all functions in a region from your AWS infrastructure. |

### lambda/cli/sites/ (4 files)

| File | Description |
|------|-------------|
| `create.mdx` | npx remotion lambda sites create - You may pass an entry point as the first argument, otherwise the entry point will be determined. |
| `ls.mdx` | npx remotion lambda sites ls - Get a list of sites. The URL that is printed can be passed to the `render` command to render a video. |
| `rm.mdx` | npx remotion lambda sites rm - Removes a site (or multiple) from S3 by its ID. |
| `rmall.mdx` | npx remotion lambda sites rmall - Remove all sites in the selected AWS region. |

### lambda/troubleshooting/ (6 files)

| File | Description |
|------|-------------|
| `bucket-disallows-acl.mdx` | The bucket does not allow ACLs - If you encounter the following error while rendering a video on Remotion Lambda: |
| `debug.mdx` | Debugging failed Lambda renders - There are four reasons renders may fail: |
| `permissions.mdx` | AWS Permissions Troubleshooting - If you get an error message saying that something is wrong with your AWS permissions, read this page for troubleshooting ideas. |
| `rate-limit.mdx` | AWS Rate Limit Troubleshooting - If you get an error message: |
| `security-token.mdx` | The security token included in the request is invalid - Some regions that are supported by Remotion are not enabled by default in an AWS account. |
| `unrecognizedclientexception.mdx` | UnrecognizedClientException - If you got a permission error while calling `renderMediaOnLambda()` or `renderStillOnLambda()`: |

### lambda/without-iam/ (3 files)

| File | Description |
|------|-------------|
| `ec2.mdx` | Authenticating Lambda with EC2 - EC2 instances have credentials that can interact with the AWS SDK. |
| `example.mdx` | Example setup without IAM user - This is a write up of how to use the example for the technique described under "Using Lambda without IAM roles". |
| `index.mdx` | Using Lambda with IAM roles - As documented on the `Permissions page`, the default way of using Remotion Lambda involves creating a Remotion user and assign... |

### layout-utils/ (7 files)

| File | Description |
|------|-------------|
| `best-practices.mdx` | Best practices for @remotion/layout-utils - Take note of the following points to ensure correct measurements when using the `@remotion/layout-utils` package. |
| `debug.mdx` | Debugging font measurement bugs - When you find that the measurements that you are getting from `measureText()`, `fillTextBox()` or `fitText()` are off and are... |
| `fill-text-box.mdx` | fillTextBox() - Calculate whether the text exceeds the box and wraps within the container. |
| `fit-text-on-n-lines.mdx` | fitTextOnNLines() - Calculates the `fontSize` needed to fit a text into a given width while respecting a maximum number of lines. |
| `fit-text.mdx` | fitText() - Calculates the `font-size` needed to fit a text into a given width. |
| `index.mdx` | @remotion/layout-utils - Utility functions for creating dynamic layouts. |
| `measure-text.mdx` | measureText() - Calculates the width and height of specified text to be used for layout calculations. |

### light-leaks/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/light-leaks - `@remotion/light-leaks` is deprecated and will no longer be published starting with Remotion 5.0. |
| `light-leak-effect.mdx` | lightLeak() - `@remotion/light-leaks` is deprecated and will no longer be published starting with Remotion 5.0. |
| `light-leak.mdx` | `<LightLeak>` - `@remotion/light-leaks` is deprecated and will no longer be published starting with Remotion 5.0. |

### lottie/ (6 files)

| File | Description |
|------|-------------|
| `getlottiemetadata.mdx` | getLottieMetadata() - Using this function, you can get the basic metadata such as dimensions, duration and framerate of a Lottie animation. |
| `index.mdx` | @remotion/lottie - This package provides a component for displaying Lottie animations in Remotion. |
| `lottie-comp.mdx` | `<Lottie>` - A JSON object that adheres to the Lottie schema. |
| `lottie-lottiefiles.mdx` | Finding Lottie files to use - LottieFiles is a website where people can share and download Lottie files. |
| `lottie-remote.mdx` | Loading Lottie animations from a URL - In order to load a Lottie animation from a URL that has been put into the `public/` folder, use `fetch` and Remotion's... |
| `lottie-staticfile.mdx` | Loading Lottie animations from staticFile() - In order to load a Lottie animation from a file that has been put into the `public/` folder, use `staticFile()` in combination... |

### mac-cursors/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/mac-cursors - Render bundled macOS cursors and CSS custom cursors in Remotion. |
| `mac-os-cursor.mdx` | `<MacOSCursor>` - Renders a macOS cursor with its hotspot placed at the component origin. |

### media/ (6 files)

| File | Description |
|------|-------------|
| `audio.mdx` | `<Audio>` - `<Audio>` from `@remotion/media` is the recommended component for embedding audio in Remotion. |
| `cache.mdx` | In-memory cache for @remotion/media - `@remotion/media` keeps an in-memory cache for video and audio decoding. |
| `fallback.mdx` | Fallback behavior in @remotion/media - Use `<Video>` and `<Audio>` from `@remotion/media` as the primary tags for media. |
| `index.mdx` | @remotion/media - This package provides the recommended `<Video>` and `<Audio>` tags for embedding video and audio in Remotion. |
| `support.mdx` | Supported media - The `<Audio>` and `<Video>` tags from `@remotion/media` are based on Mediabunny and WebCodecs. |
| `video.mdx` | `<Video>` - `<Video>` from `@remotion/media` is the recommended component for embedding videos in Remotion. |

### media-parser/ (28 files)

| File | Description |
|------|-------------|
| `download-and-parse-media.mdx` | downloadAndParseMedia() - We are phasing out Media Parser and are moving to Mediabunny! |
| `download-and-parse.mdx` | Download and Parse Videos or Audio simultaneously - We are phasing out Media Parser and are moving to Mediabunny! |
| `fast-and-slow.mdx` | Fast and slow operations - We are phasing out Media Parser and are moving to Mediabunny! |
| `fields.mdx` | Available Fields - We are phasing out Media Parser and are moving to Mediabunny! |
| `foreign-file-types.mdx` | Foreign file types - We are phasing out Media Parser and are moving to Mediabunny! |
| `format-support.mdx` | Format support - We are phasing out Media Parser and are moving to Mediabunny! |
| `has-been-aborted.mdx` | hasBeenAborted() - We are phasing out Media Parser and are moving to Mediabunny! |
| `index.mdx` | @remotion/media-parser - We are phasing out Media Parser and are moving to Mediabunny! |
| `media-parser-controller.mdx` | mediaParserController() - We are phasing out Media Parser and are moving to Mediabunny! |
| `metadata.mdx` | Getting metadata from videos using @remotion/media-parser - Deprecated in favor of getting metadata using Mediabunny. |
| `node-reader.mdx` | nodeReader - We are phasing out Media Parser and are moving to Mediabunny! |
| `node-writer.mdx` | nodeWriter - We are phasing out Media Parser and are moving to Mediabunny! |
| `parse-media-on-server-worker.mdx` | parseMediaOnServerWorker() - We are phasing out Media Parser and are moving to Mediabunny! |
| `parse-media-on-web-worker.mdx` | parseMediaOnWebWorker() - We are phasing out Media Parser and are moving to Mediabunny! |
| `parse-media.mdx` | parseMedia() - Deprecated in favor of getting metadata using Mediabunny. |
| `pause-resume-abort.mdx` | Pause, resume and abort parsing - We are phasing out Media Parser and are moving to Mediabunny! |
| `readers.mdx` | Readers - We are phasing out Media Parser and are moving to Mediabunny! |
| `runtime-support.mdx` | Runtime support - We are phasing out Media Parser and are moving to Mediabunny! |
| `samples.mdx` | Extract samples - We are phasing out Media Parser and are moving to Mediabunny! |
| `seeking.mdx` | Seeking - We are phasing out Media Parser and are moving to Mediabunny! |
| `selecting-streams.mdx` | Stream selection - We are phasing out Media Parser and are moving to Mediabunny! |
| `tags.mdx` | Extract ID3 tags and EXIF data - We are phasing out Media Parser and are moving to Mediabunny! |
| `types.mdx` | TypeScript Types Reference - We are phasing out Media Parser and are moving to Mediabunny! |
| `universal-reader.mdx` | universalReader - We are phasing out Media Parser and are moving to Mediabunny! |
| `web-reader.mdx` | webReader - We are phasing out Media Parser and are moving to Mediabunny! |
| `webcodecs-timescale.mdx` | WEBCODECS_TIMESCALE - We are phasing out Media Parser and are moving to Mediabunny! |
| `webcodecs.mdx` | Processing video with WebCodecs and @remotion/media-parser - We are phasing out Media Parser and are moving to Mediabunny! |
| `workers.mdx` | Parsing on Web Workers - We are phasing out Media Parser and are moving to Mediabunny! |

### media-utils/ (3 files)

| File | Description |
|------|-------------|
| `create-smooth-svg-path.mdx` | createSmoothSvgPath() - This function takes points, usually generated from `visualizeAudioWaveform()` or `visualizeAudio()`, and adds SVG `C` (curve)... |
| `index.mdx` | @remotion/media-utils - A package providing utility functions for getting information about video and audio, and for visualizing audio. |
| `visualize-audio-waveform.mdx` | visualizeAudioWaveform() - This function takes in `AudioData` (for example fetched by `useAudioData()`) and processes it for displaying as a waveform. |

### mediabunny/ (10 files)

| File | Description |
|------|-------------|
| `can-decode.mdx` | Check if a video can be decoded using Mediabunny - Before attempting to load a video into `<Video>`, you may want to check if the video can be decoded by the browser. |
| `extract-frames.mdx` | Extracting frames from a video in JavaScript - Extracting frames from a video file, for example to display a filmstrip in an editing interface, can be done using Mediabunny. |
| `extract-thumbnail.mdx` | Extracting a thumbnail from a video in JavaScript - Extracting a single frame (thumbnail) from a video file can be done using Mediabunny. |
| `formats.mdx` | Supported formats and codecs by Mediabunny - The following features from Remotion are using Mediabunny: |
| `frame-rate.mdx` | Getting the frame rate of a video - Videos can have one of two types of frame rates: |
| `index.mdx` | Mediabunny - Mediabunny is an awesome multimedia library by Vanilagy. |
| `metadata.mdx` | Getting metadata from a video in JavaScript - If you would like to obtain metadata from a video or audio in JavaScript, such as: |
| `new-video.mdx` | `<Video> and <Audio> tags` - `<Video>` and `<Audio>` from `@remotion/media` are the recommended tags for embedding video and audio in Remotion. |
| `version.mdx` | Mediabunny version used by Remotion - The following packages of Remotion are using Mediabunny: |
| `webcodecs-bugs.mdx` | WebCodecs Bugs - This page is a list of known WebCodecs issues in browsers that our community has filed. |

### miscellaneous/ (20 files)

| File | Description |
|------|-------------|
| `absolute-paths.mdx` | Files with absolute paths - Why is it not possible to use absolute paths to require assets? |
| `automatic-duration.mdx` | Calculating the duration of a composition automatically - It is currently **not supported** to derive the duration of a composition be from the content. |
| `changing-temp-dir.mdx` | Changing the temporary directory - During rendering, Remotion will write items into the temporary directory of the system. |
| `chrome-headless-shell.mdx` | Chrome Headless Shell - Remotion is automatically installing "Chrome Headless Shell" into your `node_modules` in order to render videos. |
| `cloud-gpu-docker.mdx` | Setup EC2 for Docker with GPU - The guide is outdated and will not work anymore. |
| `cloud-gpu.mdx` | Using the GPU in the cloud - Here is an example workflow for how to use the GPU in the cloud to render your videos using EC2 instances. |
| `cross-origin-isolation.mdx` | Cross-Origin Isolation - A website can either be cross-origin-isolated or not. |
| `embed-remotion-studio.mdx` | Can I embed the Remotion Studio? - We currently don't allow embedding the Remotion Studio as a React component into your own app. |
| `emojis.mdx` | Emojis - Emojis are always rendered as-is by the operating system. |
| `ffmpeg-license.mdx` | FFmpeg license - Remotion distributes a compiled FFmpeg binary under the GPLv2+ license. |
| `linux-dependencies.mdx` | Linux Dependencies - If you are on Linux, Chrome Headless Shell requires some shared libraries to be installed. |
| `linux-single-process.mdx` | Multiple cores on Linux - This document is outdated. |
| `live-streaming.mdx` | Can Remotion be used for live streaming? - Remotion is not designed for broadcasting. |
| `nextjs.mdx` | Using @remotion/renderer in Next.js - The `@remotion/renderer` package has dependencies on a headless browser and FFmpeg, which makes using it in Next.js a bit tricky. |
| `no-remotion-app.mdx` | Why is there no Remotion App? - Remotion does not have a desktop or mobile app. |
| `pexels.mdx` | Timeouts with Pexels videos - When including videos from Pexels, especially when rendering on Remotion Lambda, you may encounter the following error: |
| `render-in-browser.mdx` | Can I render videos in the browser? - Yes! Remotion supports rendering videos directly in the browser using the `@remotion/web-renderer` package. |
| `render-on-edge.mdx` | Can I render videos on the edge? - Edge runtimes such as Vercel Edge functions and Cloudflare Workers promise to change how we compute in the future. |
| `ts-aliases.mdx` | TypeScript aliases - TypeScript path aliases are not resolved by default. |
| `video-formats.mdx` | Which video formats does Remotion support? - Remotion supports a variety of video codecs. |

### miscellaneous/snippets/ (3 files)

| File | Description |
|------|-------------|
| `combine-compositions.mdx` | How do I combine compositions? - Say you have two compositions, `One` and `Two`: |
| `freeze-portions.mdx` | Freeze portions of a sequence - With the following snippet, two portions of a sequence are frozen and resumed afterwards from the point they were paused. |
| `player-in-iframe.mdx` | Embedding a  into an  - Credit to @marcusstenbeck for creating this snippet. |

### motion-blur/ (7 files)

| File | Description |
|------|-------------|
| `api.mdx` | @remotion/motion-blur - Higher order components that create motion blur and trail effects. |
| `camera-motion-blur.mdx` | `<CameraMotionBlur>` - The `<CameraMotionBlur>` produces natural looking motion blur similar to what would be produced by |
| `common-mistake.mdx` | Common mistake with  and  - The `<Trail>` and `<CameraMotionBlur>` components manipulate the React context that holds the current time. |
| `html-in-canvas-motion-blur.mdx` | `<HtmlInCanvasMotionBlur>` - `<HtmlInCanvasMotionBlur>` is the state-of-the-art recommended way to achieve motion blur in Remotion. |
| `index.mdx` | Motion blur - To realize a realistic motion blur, a frame needs to be duplicated multiple times and blended together. |
| `motion-blur.mdx` | `<MotionBlur>` - _Deprecated_. Use `<Trail>` or `<CameraMotionBlur>` instead. |
| `trail.mdx` | `<Trail>` - _Previously called `<MotionBlur>`._ |

### noise/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/noise - Utility functions that create a noise effect. |
| `noise-2d.mdx` | noise2D() - Creates 2D noise. |
| `noise-3d.mdx` | noise3D() - Creates 3D noise. |
| `noise-4d.mdx` | noise4D() - Creates 4D noise. |

### openai-whisper/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/openai-whisper - The `@remotion/openai-whisper` package provides utilities for working with the OpenAI Whisper API. |
| `is-openai-whisper-transcript.mdx` | isOpenAiWhisperTranscript() - Recognizes structural signatures of an OpenAI Whisper verbose JSON transcription. |
| `openai-whisper-api-to-captions.mdx` | openAiWhisperApiToCaptions() - Turns the output from `openai.audio.transcriptions.create` from the openai package into an array of `Caption` objects. |

### options/ (106 files)

| File | Description |
|------|-------------|
| `allow-html-in-canvas.mdx` | Allow HTML-in-canvas for client-side rendering - When client-side rendering is enabled in the Studio, allow the experimental Chromium HTML-in-canvas API to be used for... |
| `api-key.mdx` | API key - API key for sending a usage event using `@remotion/licensing`. |
| `audio-bitrate.mdx` | Audio Bitrate - Specify the target bitrate for the generated video. |
| `audio-codec.mdx` | Audio Codec - Set the format of the audio that is embedded in the video. |
| `audio-latency-hint.mdx` | Audio Latency Hint - Sets the audio latency hint for the global `AudioContext` context that Remotion uses to play audio.Possible values:... |
| `beep-on-finish.mdx` | Beep on finish - Whether the Remotion Studio tab should beep when the render is finished. |
| `binaries-directory.mdx` | Binaries Directory - The directory where the platform-specific binaries and libraries that Remotion needs are located. |
| `browser-executable.mdx` | Browser executable - Set a custom Chrome or Chromium executable path. |
| `browser.mdx` | Browser - Specify the browser which should be used for opening a tab. |
| `buffer-size.mdx` | FFmpeg -bufsize flag - The value for the `-bufsize` flag of FFmpeg. |
| `bundle-cache.mdx` | Webpack Bundle Caching - Enable or disable Webpack caching. |
| `chrome-mode.mdx` | Chrome Mode - One of `headless-shell, ` `chrome-for-testing`. |
| `codec.mdx` | Codec - H264 works well in most cases, but sometimes it's worth going for a different codec. |
| `coding-agent.mdx` | Default coding agent - Set the default coding agent for Remotion Studio. |
| `color-space.mdx` | Color space - Color space to use for the video. |
| `concurrencies.mdx` | Benchmark concurrencies - Specify which concurrency values should be used while benchmarking. |
| `concurrency.mdx` | Concurrency - How many CPU threads to use. |
| `config.mdx` | Config file - Specify a location for the Remotion config file. |
| `crf.mdx` | CRF - No matter which codec you end up using, there's always a tradeoff between file size and video quality. |
| `cross-site-isolation.mdx` | Enable Cross-Site Isolation - Enable Cross-Site Isolation in the Studio (sets Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy HTTP headers,... |
| `dark-mode.mdx` | Dark Mode - Whether Chromium should pretend to be in dark mode by emulating the media feature 'prefers-color-scheme: dark'. |
| `default-premount-in-seconds.mdx` | Default premount duration in seconds - Set the default premount duration in seconds for timed components in the Studio. |
| `delete-after.mdx` | Lambda render expiration - Automatically delete the render after a certain period. |
| `disable-ask-ai.mdx` | Disable or Enable the Ask AI option - If the Cmd + I shortcut of the Ask AI modal conflicts with your Studio, you can disable it using this. |
| `disable-canvas-tabs.mdx` | Disable or enable Studio canvas tabs - Enable or disable the tabs above the Studio canvas. |
| `disable-git-source.mdx` | Disable Git source - Disables the Git Source being connected to the Remotion Studio. |
| `disable-headless.mdx` | Disable Headless Mode - If disabled, the render will open an actual Chrome window where you can see the render happen. |
| `disable-interactivity.mdx` | Disable or enable Studio interactivity - Enable or disable interactive editing in the Remotion Studio. |
| `disable-keyboard-shortcuts.mdx` | Disable or Enable keyboard shortcuts - Enable or disable keyboard shortcuts in the Remotion Studio. |
| `disable-shared-memory-capture.mdx` | Disable shared-memory capture - Disables shared-memory capture and uses regular JPEG or PNG screenshots instead. |
| `disable-web-security.mdx` | Disable web security - This will most notably disable CORS in Chrome among other security features. |
| `disallow-parallel-encoding.mdx` | Disallow parallel encoding - Disallows the renderer from doing rendering frames and encoding at the same time. |
| `duration.mdx` | Override Duration - Overrides the duration in frames of the composition. |
| `editor.mdx` | Default editor - Set the default editor for opening files from Remotion Studio. |
| `enable-cancellation.mdx` | Enable cancellation - Allows a Lambda render to be cancelled by pressing Ctrl+C while running `npx remotion lambda render`. |
| `enable-folder-expiry.mdx` | Lambda render expiration - When deploying sites, enable or disable S3 Lifecycle policies which allow for renders to auto-delete after a certain time. |
| `enable-lambda-insights.mdx` | Enable Lambda Insights - Enable Lambda Insights in AWS CloudWatch. |
| `enable-multiprocess-on-linux.mdx` | Enable Multiprocess on Linux - Removes the `--single-process` flag that gets passed to Chromium on Linux by default. |
| `enforce-audio-track.mdx` | Enforce Audio Track - Defaults to `false`. If `true`, include a silent audio track when the render contains no audio. |
| `env-file.mdx` | Env File - Specify a location for a dotenv file. |
| `every-nth-frame.mdx` | Every nth frame - This option may only be set when rendering GIFs. |
| `experimental-keep-audio-context-alive.mdx` | Keep AudioContext alive (experimental) - Keeps the shared `AudioContext` running while the Remotion Studio is paused. |
| `for-seamless-aac-concatenation.mdx` | For seamless AAC concatenation - If enabled, the audio is trimmed to the nearest AAC frame, which is required for seamless concatenation of AAC files. |
| `force-new.mdx` | Force New Studio - Forces starting a new Studio instance even if one is already running on the same port for the same project. |
| `fps.mdx` | Override FPS - Overrides the frames per second of the composition. |
| `frame.mdx` | Frame - Which frame should be rendered when rendering a still. |
| `frames.mdx` | Frame Range - Render a subset of a video. |
| `gl.mdx` | OpenGL renderer - Select the OpenGL renderer backend for Chromium. |
| `gop.mdx` | GOP size - Set the maximum number of frames between two keyframes. |
| `hardware-acceleration.mdx` | Hardware Acceleration - "disable", "if-possible", or "required" |
| `height.mdx` | Override Height - Overrides the height of the composition. |
| `high-contrast.mdx` | High contrast in Remotion Studio - Increase the contrast of text, focus indicators, and panel dividers in Remotion Studio. |
| `ignore-certificate-errors.mdx` | Ignore certificate errors - Results in invalid SSL certificates in Chrome, such as self-signed ones, being ignored. |
| `image-sequence-pattern.mdx` | Image Sequence Pattern - Pattern for naming image sequence files. |
| `index.mdx` | Options - A list of options that Remotion supports. |
| `ipv4.mdx` | IPv4 - Forces Remotion to bind to an IPv4 interface for the Studio server. |
| `is-production.mdx` | Is Production - Pass `false` for a development render so it is not counted as a billable render on remotion.pro. |
| `jpeg-quality.mdx` | JPEG Quality - Sets the quality of the generated JPEG images. |
| `license-key.mdx` | License key - License key for sending a usage event using `@remotion/licensing`. |
| `log.mdx` | Log Level - One of `trace`, `verbose`, `info`, `warn`, `error`. |
| `max-rate.mdx` | FFmpeg -maxrate flag - The value for the `-maxrate` flag of FFmpeg. |
| `media-cache-size-in-bytes.mdx` | @remotion/media cache size - Specify the memory budget for decoded media cached by `<Video>` and `<Audio>` from `@remotion/media`, in bytes. |
| `metadata.mdx` | Metadata - An object containing metadata to be embedded in the video. |
| `muted.mdx` | Muted - The Audio of the video will be omitted. |
| `no-open.mdx` | Disable browser auto-open - If specified, Remotion will not open a browser window when starting the Studio. |
| `number-of-gif-loops.mdx` | Number of GIF loops - Allows you to set the number of loops as follows: |
| `number-of-shared-audio-tags.mdx` | Number of shared audio tags - Set number of shared audio tags. |
| `offthreadvideo-cache-size-in-bytes.mdx` | OffthreadVideo cache size - From v4.0, Remotion has a cache for `<OffthreadVideo>` frames. |
| `offthreadvideo-video-threads.mdx` | OffthreadVideo threads - The number of threads that`<OffthreadVideo>` can start to extract frames. |
| `on-browser-download.mdx` | Browser download callback function - Gets called when no compatible local browser is detected on the system and this API needs to download a browser. |
| `out-dir.mdx` | Output Directory - Define the location of the resulting bundle. |
| `overwrite.mdx` | Overwrite output - If set to `false`, will prevent rendering to a path that already exists. |
| `package-manager.mdx` | Package Manager - Forces a specific package manager to be used. |
| `pixel-format.mdx` | Pixel format - Sets the pixel format in FFmpeg. |
| `port.mdx` | Port - Set a custom HTTP server port for the Studio or the render process. |
| `prefer-lossless.mdx` | Prefer lossless - Uses a lossless audio codec, if one is available for the codec. |
| `preferred-effect-backend.mdx` | Preferred effect backend - Prefer `webgpu`, `webgl2`, or `2d` implementations of effects. |
| `preserve-pitch-on-playback.mdx` | Preserve pitch on playback - Preserve audio pitch when changing the Studio playback speed. |
| `preview-sample-rate.mdx` | Preview Sample Rate - Controls the sample rate used for audio playback during preview. |
| `props.mdx` | Input Props - Input Props to pass to the selected composition of your video. |
| `prores-profile.mdx` | ProRes profile - Set the ProRes profile. |
| `public-dir.mdx` | Public Directory - Define the location of the `public/ directory`. |
| `public-license-key.mdx` | Public License Key - The public license key for your company license, obtained from the License keys page on remotion.pro. |
| `public-path.mdx` | Public Path - The path of the URL where the bundle is going to be hosted. |
| `repro.mdx` | Create reproduction - Create a ZIP that you can submit to Remotion if asked for a reproduction. |
| `rspack.mdx` | Rspack - Uses Rspack instead of Webpack as the bundler for the Studio or bundle. |
| `runs.mdx` | Benchmark runs - Specify how many times the video should be rendered during a benchmark. |
| `sample-rate.mdx` | Sample Rate - Controls the sample rate of the output audio. |
| `scale.mdx` | Scale - Scales the output dimensions by a factor. |
| `separate-audio-to.mdx` | Separate audio to - If set, the audio will not be included in the main output but rendered as a separate file at the location you pass. |
| `sequence-activity-limit.mdx` | Sequence Activity limit - Limit hidden scenes discovered by Sequence Activity in the Remotion Studio, including nested sequences and their ancestors. |
| `sequence.mdx` | Image Sequence - Pass this flag to output an image sequence instead of a video. |
| `show-layer-frame-numbers.mdx` | Show frame numbers of layer - Show the current frame number inside sequence layers in the Studio timeline. |
| `show-premounting.mdx` | Show premounting in the Studio timeline - Show premounting indicators in the Studio timeline. |
| `skip-skills.mdx` | Skip Skills - Do not update installed Remotion Agent Skills while upgrading Remotion. |
| `still-image-format.mdx` | Still Image Format - The image format to use when rendering a still. |
| `throw-if-site-exists.mdx` | Throw if site exists - Prevents accidential update of an existing site. |
| `timeout.mdx` | delayRender() timeout - A number describing how long the render may take to resolve all `delayRender()` calls before it times out. |
| `user-agent.mdx` | User agent - Lets you set a custom user agent that the headless Chrome browser assumes. |
| `version.mdx` | Version - Install a specific version. |
| `video-bitrate.mdx` | Video Bitrate - Specify the target bitrate for the generated video. |
| `video-image-format.mdx` | Video Image Format - The image format to use when rendering frames for a video. |
| `webhook-custom-data.mdx` | Webhook custom data - Pass up to 1,024 bytes of a JSON-serializable object to the webhook. |
| `webpack-poll.mdx` | Webpack Polling - Enables Webpack polling instead of the file system event listeners for hot reloading. |
| `width.mdx` | Override Width - Overrides the width of the composition. |
| `x264-preset.mdx` | x264 Preset - Sets a x264 preset profile. |

### paths/ (23 files)

| File | Description |
|------|-------------|
| `center-path.mdx` | centerPath() - Translates an SVG path so that the center of the bounding box is at a target point. |
| `cut-path.mdx` | cutPath() - Cuts an SVG path at a specified length, returning the portion from the start to that length. |
| `evolve-path.mdx` | evolvePath() - Animates an SVG path from being invisible to it's full length. |
| `extend-viewbox.mdx` | extendViewBox() - Widens an SVG `viewBox` in all directions by a certain scale factor. |
| `get-bounding-box.mdx` | getBoundingBox() - Returns the bounding box of the given path, suitable for calculating the `viewBox` value that you need to pass to an SVG. |
| `get-instruction-index-at-length.mdx` | getInstructionIndexAtLength() - Gets the index of the instruction that is at the length of the path. |
| `get-length.mdx` | getLength() - Gets the length of an SVG path. |
| `get-parts.mdx` | getParts() |
| `get-point-at-length.mdx` | getPointAtLength() - Gets the coordinates of a point which is on an SVG path. |
| `get-subpaths.mdx` | getSubpaths() - Takes an SVG path and returns an array of subpaths. |
| `get-tangent-at-length.mdx` | getTangentAtLength() - Gets tangent values `x` and `y` of a point which is on an SVG path. |
| `index.mdx` | @remotion/paths - A package providing utility functions for dealing with SVG paths. |
| `interpolate-path.mdx` | interpolatePath() - Interpolates between two SVG paths. |
| `interpolate-paths.mdx` | interpolatePaths() - Interpolates between SVG paths across multiple keyframes. |
| `normalize-path.mdx` | normalizePath() - Removes all relative coordinates from a path and converts them into absolute coordinates. |
| `parse-path.mdx` | parsePath() - Parses an SVG string path into an array of `Instruction`'s. |
| `reduce-instructions.mdx` | reduceInstructions() - Takes an array of `Instruction`'s and reduces the amount of instruction types them so the path only consists of `M`, `L`, `C`... |
| `reset-path.mdx` | resetPath() - Translates an SVG path so that the top-left corner of the bounding box is at `0, 0`. |
| `reverse-path.mdx` | reversePath() - Reverses a path so the end and start are switched. |
| `scale-path.mdx` | scalePath() - Allows you to grow or shrink the size of a path. |
| `serialize-instructions.mdx` | serializeInstructions() - Takes an array of `Instruction`'s and serializes it into an SVG path string. |
| `translate-path.mdx` | translatePath() - Translates the path by the given `x` and `y` coordinates. |
| `warp-path.mdx` | warpPath() - Allows you to remap the coordinates of an SVG using a function in order to create a warp effect. |

### player/ (16 files)

| File | Description |
|------|-------------|
| `api.mdx` | `<Player>` - A component which can be rendered in a regular React App (for example: Next.JS, Vite.js, Create React App) to display a... |
| `autoplay.mdx` | Combatting autoplay issues - Browsers place restrictions on websites that play audio without user interaction. |
| `best-practices.mdx` | Player - Best practices - The following pattern is not ideal because every time the time updates, the `<Player>` is being re-rendered: |
| `buffer-state.mdx` | The Player buffer state - Just like regular video players, it is possible that the content being displayed in the Player is not yet fully loaded. |
| `current-time.mdx` | Displaying the current time - When rendering a `<Player>` in your app, special considerations must be taken to prevent constant re-renders of the app or... |
| `custom-controls.mdx` | Custom controls for the Player - You may want to implement custom controls for the `<Player>` component. |
| `index.mdx` | @remotion/player - Using the Remotion Player you can embed Remotion videos in any React app and customize the video content at runtime. |
| `installation.mdx` | Installation - To install the Player, run the following command in a React project: |
| `media-keys.mdx` | Media Key Behavior (Web MediaSession API) - This document is about the behavior when a user: |
| `playback-issues.mdx` | Playback issues in the  - Read this page if you encounter issues with media playback in the Player such as: |
| `player-examples.mdx` | Examples for @remotion/player - See Scaling for more ways to scale the Player. |
| `player-integration.mdx` | Code sharing - If you are using the player, a common desire is to share the code with your Remotion Studio and/or server-side rendering. |
| `preloading.mdx` | Preloading assets - Assets should be preloaded before entering the scene so they are ready once they should be played. |
| `premounting.mdx` | Premounting - Premounting mounts a component before it appears, giving images, videos, and animations time to load and initialize. |
| `scaling.mdx` | Sizing - The following algorithm is used for calculating the size of the Player: |
| `thumbnail.mdx` | `<Thumbnail>` - A component which can be rendered in a regular React App (for example: for example: Next.JS, Vite.js, Create React App) to... |

### player/drag-and-drop/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Drag & Drop in the Remotion Player - The Remotion Player supports reacting to mouse events allowing for building interactions on the canvas. |

### preload/ (6 files)

| File | Description |
|------|-------------|
| `preload-audio.mdx` | preloadAudio() - _This function is part of the `@remotion/preload` package._ |
| `preload-font.mdx` | preloadFont() - _This function is part of the `@remotion/preload` package._ |
| `preload-image.mdx` | preloadImage() - _This function is part of the `@remotion/preload` package._ |
| `preload-video.mdx` | preloadVideo() - _This function is part of the `@remotion/preload` package._ |
| `preload.mdx` | @remotion/preload - This package provides functions for preloading assets. |
| `resolve-redirect.mdx` | resolveRedirect() - Follows the redirects of a URL (most commonly a remote video or audio) until the final URL is resolved and returns that. |

### recorder/ (16 files)

| File | Description |
|------|-------------|
| `captions.mdx` | Generate captions - To generate captions, the Remotion Recorder uses Whisper.cpp for fast and accurate transcriptions. |
| `create.mdx` | Create a new video - If you haven't done so yet, start the Recorder: |
| `demo.mdx` | Remotion Recorder Demo - Here is a walkthrough of how the Remotion Recorder is used. |
| `experiments.mdx` | Experiments - This page aims to collect experiments and hacks that were made to the Remotion Recorder |
| `exporting-subtitles.mdx` | Exporting subtitles - If you export a video in the `square` layout, then the subtitles will be burned into the video. |
| `exporting.mdx` | Exporting a video - in the Remotion Studio. |
| `external-recordings.mdx` | External recordings - You can also include recordings that you recorded externally in your Recorder video. |
| `gear.mdx` | Our Gear - To use the Recorder, you only need a laptop with a webcam and a microphone. |
| `index.mdx` | Remotion Recorder - The Remotion Recorder is a video production tool built entirely in JavaScript. |
| `is-it-for-me.mdx` | Is Remotion Recorder for me? - The Remotion Recorder is a first-of-its-kind JavaScript-based video creation tool where you are in control of the source code. |
| `lambda-rendering.mdx` | Render on Lambda - If you want to render long videos faster or you want to render different versions of your videos at the same time, you can... |
| `our-recorder.mdx` | Our Recorder - The source code of our videos is available in `remotion-dev/our-recorder`. |
| `roadmap.mdx` | Roadmap - Here is a list of things that we plan to add. |
| `setup.mdx` | Setup - Scaffold a new Remotion Recorder project: |
| `source-control.mdx` | Source Control - By default the `public` folder is added to the `.gitignore` file. |
| `support.mdx` | Get Help - Talk to the Remotion team and other users in the `#recorder` channel in Discord to discuss with others using the Recorder. |

### recorder/editing/ (12 files)

| File | Description |
|------|-------------|
| `b-roll.mdx` | B-Roll - You can overlay your recorded scenes with additional video or photo footage by adding `bRoll` elements in the right sidebar. |
| `captions.mdx` | Edit captions - If the AI has made a mistake in the caption, there are three different ways to correct them: |
| `chapters.mdx` | Chapters - To add chapters, add a non-empty string in the `newChapter` input field of a scene which should mark the start of a new chapter. |
| `cutting-clips.mdx` | Cutting clips - The recommended way is to record many small bite-sized clips with the Recording interface and create many scenes. |
| `editing.mdx` | Start editing - To start the editing environment, run |
| `endcard.mdx` | Endcard - In the endcard you can add a call to follow, as well as links to your social media profiles or other websites. |
| `layout.mdx` | Layout - There is currently a `landscape` and a `square` layout you can choose from to define the aspect ratio of your video. |
| `music.mdx` | Adding music - To underlay your video with music, use one of the three soundtracks provided by the Remotion Recorder or add your own. |
| `normalizing-audio.mdx` | Normalizing audio levels - Ideally, you use the audio loudness meter in the Recording interface to ensure that the audio levels are consistent across... |
| `scenes.mdx` | Scenes - A video is made up of one or multiple scenes. |
| `silence-removal.mdx` | Silence removal - When captions are generated, the Whisper.cpp timestamps are taken to determine the start and end of the transcription. |
| `transitions.mdx` | Transitions - To transition from one scene to another, set the `transitionToNextScene` checkbox in the right sidebar. |

### recorder/record/ (4 files)

| File | Description |
|------|-------------|
| `cropping.mdx` | Cropping sources - Sometimes you only want to record a portion of your screen. |
| `delete.mdx` | Delete a recording - To delete a recording, open the project in your file explorer and locate the recording in the `public` folder: |
| `index.mdx` | Record using the interface - The Recorder ships with its own recording interface. |
| `manually.mdx` | Manually add recordings - You can also add recordings from other sources, like your phone. |

### recorder/troubleshooting/ (1 files)

| File | Description |
|------|-------------|
| `cannot-read-properties-of-undefined.mdx` | Cannot read properties of undefined (reading 'decode') - If you get the following error while starting the Studio: |

### remotion/ (1 files)

| File | Description |
|------|-------------|
| `html-in-canvas.mdx` | `<HtmlInCanvas>` - This component renders its children into a `<canvas>` using the browser’s HTML-in-canvas API and allows you to draw an effect... |

### renderer/ (16 files)

| File | Description |
|------|-------------|
| `combine-chunks.mdx` | combineChunks() - Combine multiple video or audio chunks into a single output file. |
| `ensure-browser.mdx` | ensureBrowser() - Ensures a browser is locally installed so a Remotion render can be executed. |
| `ensure-ffmpeg.mdx` | ensureFfmpeg() - _Removed from v4.0_ |
| `ensure-ffprobe.mdx` | ensureFfprobe() - _Removed from v4.0_ |
| `extract-audio.mdx` | extractAudio() - Extracts the audio from a video source and saves it to the specified output path. |
| `get-compositions.mdx` | getCompositions() - Gets a list of compositions defined in a Remotion project based on a Remotion Bundle by evaluating the Remotion Root. |
| `get-silent-parts.mdx` | getSilentParts() - Gets the silent parts of a video or audio in Node.js. |
| `get-video-metadata.mdx` | getVideoMetadata() - Deprecated in favor of getting metadata using Mediabunny. |
| `make-cancel-signal.mdx` | makeCancelSignal() - This function returns a signal and a cancel function that allows to you cancel a render triggered using `renderMedia()`,... |
| `open-browser.mdx` | openBrowser() - Opens a Chrome or Chromium browser instance. |
| `render-frames.mdx` | renderFrames() - Renders a series of images using Puppeteer and computes information for mixing audio. |
| `render-media.mdx` | renderMedia() - Render a video or an audio programmatically. |
| `render-still.mdx` | renderStill() - Renders a single frame to an image and writes it to the specified output location. |
| `select-composition.mdx` | selectComposition() - Evaluates the list of compositions from a Remotion Bundle by evaluating the Remotion Root and evaluating `calculateMetadata()`... |
| `stitch-frames-to-video.mdx` | stitchFramesToVideo() - Takes a series of images and audio information generated by `renderFrames()` and encodes it to a video. |
| `types.mdx` | TypeScript Types Reference - The following types are part of the API of `@remotion/renderer`: |

### rive/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/rive - This package provides a component for rendering Rive animations in Remotion. |
| `remotionrivecanvas.mdx` | `<RemotionRiveCanvas>` - This component can render a Rive animation so it synchronizes with Remotion's time. |

### rough-notation/ (8 files)

| File | Description |
|------|-------------|
| `box.mdx` | `<Box>` - Draws an animated hand-drawn box around the text or element it wraps. |
| `bracket.mdx` | `<Bracket>` - Draws animated hand-drawn brackets around the text or element it wraps. |
| `circle.mdx` | `<Circle>` - Draws an animated hand-drawn circle around the text or element it wraps. |
| `crossed-off.mdx` | `<CrossedOff>` - Draws two animated crossing strokes over the text or element it wraps. |
| `highlight.mdx` | `<Highlight>` - Draws an animated marker highlight behind the text or element it wraps. |
| `index.mdx` | @remotion/rough-notation - Animated marker highlights, circles, boxes, underlines and other hand-drawn text annotations for Remotion videos. |
| `strike-through.mdx` | `<StrikeThrough>` - Draws an animated hand-drawn line through the text or element it wraps. |
| `underline.mdx` | `<Underline>` - Draws an animated hand-drawn underline below the text or element it wraps. |

### rounded-text-box/ (2 files)

| File | Description |
|------|-------------|
| `create-rounded-text-box.mdx` | createRoundedTextBox() - Creates a SVG path for rendering a text box with rounded corners, as pioneered by TikTok and Instagram. |
| `index.mdx` | @remotion/rounded-text-box - Create a TikTok-like multiline text box SVG path with rounded corners. |

### sdk/ (26 files)

| File | Description |
|------|-------------|
| `canvas.mdx` | `<Canvas>` - Renders a Remotion composition using `<Player>`, registers its timeline tracks, and optionally overlays selection outlines... |
| `create-canvas-controller.mdx` | createCanvasController() - Creates a `CanvasController` to share between `<Canvas>` and your editor UI. |
| `create-canvas-hover-controller.mdx` | createCanvasHoverController() - Creates a standalone `CanvasHoverController`. |
| `create-canvas-selection-controller.mdx` | createCanvasSelectionController() - Creates a standalone `CanvasSelectionController`. |
| `get-canvas-keyframe-change-override.mdx` | getCanvasKeyframeChangeOverride() - Shows a keyframe change on the canvas before the source is updated. |
| `get-canvas-keyframe-display-frame.mdx` | getCanvasKeyframeDisplayFrame() - Converts a frame of a prop's `interpolate()` expression to a composition frame. |
| `get-canvas-keyframe-easing-change.mdx` | getCanvasKeyframeEasingChange() - Returns the change that sets the easing between two adjacent keyframes of a prop. |
| `get-canvas-keyframe-easing-segments.mdx` | getCanvasKeyframeEasingSegments() - Describes the segments between the keyframes of a prop on the composition timeline, so a timeline can draw the line between... |
| `get-canvas-keyframe-settings-change.mdx` | getCanvasKeyframeSettingsChange() - Returns the change that writes the `interpolate()` options of a keyframed prop: the extrapolation, the `output` mode and... |
| `get-canvas-keyframe-settings.mdx` | getCanvasKeyframeSettings() - Reads the `interpolate()` options of a keyframed prop that an editor can change: the extrapolation, the `output` mode and... |
| `get-canvas-keyframe-source-frame.mdx` | getCanvasKeyframeSourceFrame() - Converts a composition frame to the frame clock of a prop's `interpolate()` expression, in which keyframe operations are... |
| `get-canvas-keyframe-toggle.mdx` | getCanvasKeyframeToggle() - Describes the keyframe button of a prop at a frame: whether the prop can be keyframed, whether a keyframe exists at the frame,... |
| `get-canvas-keyframe-value-change.mdx` | getCanvasKeyframeValueChange() - Returns the change that replaces the value of an existing keyframe. |
| `get-canvas-keyframes.mdx` | getCanvasKeyframes() - Places the keyframes of a prop on the composition timeline. |
| `get-canvas-prop-value-at-frame.mdx` | getCanvasPropValueAtFrame() - Reads the value a prop has at a composition frame according to the source code. |
| `get-canvas-selection-item-key.mdx` | getCanvasSelectionItemKey() - Returns an identity string for a `CanvasSelectionItem`. |
| `get-canvas-sequence-node-path-info.mdx` | getCanvasSequenceNodePathInfo() - Returns the selection identity for a timeline track. |
| `get-canvas-sequence-reorder-insertion-index.mdx` | getCanvasSequenceReorderInsertionIndex() - Calculates where a dragged group lands after removing its selected siblings. |
| `get-canvas-sequence-reorder-selection.mdx` | getCanvasSequenceReorderSelection() - Returns the sequences to move when a timeline drag starts. |
| `get-canvas-sequence-source-location.mdx` | getCanvasSequenceSourceLocation() - Returns where the JSX element of a timeline track was written, if the bundler recorded it. |
| `index.mdx` | @remotion/sdk - Build a composition preview and layer list for a Remotion authoring interface. |
| `start-canvas-keyframe-drag.mdx` | startCanvasKeyframeDrag() - Moves keyframes along the timeline with the pointer. |
| `use-canvas-controller.mdx` | useCanvasController() - Creates one `CanvasController` for a React component and returns the same object on later renders. |
| `use-canvas-hover.mdx` | useCanvasHover() - Subscribes to the current hovered sequence in a React component. |
| `use-canvas-selection.mdx` | useCanvasSelection() - Subscribes a React component to a canvas selection controller. |
| `use-canvas-sequence-hover.mdx` | useCanvasSequenceHover() - Connects one layer row to the shared canvas hover state. |

### sfx/ (33 files)

| File | Description |
|------|-------------|
| `anime-wow.mdx` | animeWow - A URL pointing to a Anime wow WAV file. |
| `bone-crack.mdx` | boneCrack - A URL pointing to a Bone crack WAV file. |
| `bruh.mdx` | bruh - A URL pointing to a bruh sound effect WAV file. |
| `ding.mdx` | ding - A URL pointing to a ding notification sound effect WAV file. |
| `dramatic-boomer.mdx` | dramaticBoomer - A URL pointing to a Dramatic boomer WAV file. |
| `fah.mdx` | fah - A URL pointing to a Fah meme WAV file. |
| `illuminati-confirmed.mdx` | illuminatiConfirmed - A URL pointing to a Illuminati confirmed WAV file. |
| `index.mdx` | @remotion/sfx - Sound effect URLs for general use. |
| `loading-lag.mdx` | loadingLag - A URL pointing to a Loading lag WAV file. |
| `mac-quack.mdx` | macQuack - A URL pointing to a Mac quack WAV file. |
| `minecraft-hurt.mdx` | minecraftHurt - A URL pointing to a Minecraft hurt WAV file. |
| `mouse-click.mdx` | mouseClick - A URL pointing to a mouse click sound effect WAV file. |
| `nelly-ahh.mdx` | nellyAhh - A URL pointing to a Nelly ahh WAV file. |
| `oh-my-god-vine.mdx` | ohMyGodVine - A URL pointing to a Oh my god vine WAV file. |
| `omg-hell-nah.mdx` | omgHellNah - A URL pointing to a Oh my god bro hell nah WAV file. |
| `page-turn.mdx` | pageTurn - A URL pointing to a page turn sound effect WAV file. |
| `price-is-right-fail.mdx` | priceIsRightFail - A URL pointing to a Price Is Right fail horn WAV file. |
| `record-scratch.mdx` | recordScratch - A URL pointing to a record scratch sound effect WAV file. |
| `romance-meme.mdx` | romanceMeme - A URL pointing to a Romance meme WAV file. |
| `sanctuary-guardian-what.mdx` | sanctuaryGuardianWhat - A URL pointing to a Sanctuary Guardian what meme WAV file. |
| `shutter-modern.mdx` | shutterModern - A URL pointing to a modern camera shutter sound effect WAV file. |
| `shutter-old.mdx` | shutterOld - A URL pointing to a vintage camera shutter sound effect WAV file. |
| `skedaddle.mdx` | skedaddle - A URL pointing to a Skedaddle WAV file. |
| `snapchat-notification.mdx` | snapchatNotification - A URL pointing to a Snapchat notification WAV file. |
| `spongebob-fail.mdx` | spongebobFail - A URL pointing to a SpongeBob fail WAV file. |
| `triggered.mdx` | triggered - A URL pointing to a triggered meme sound effect WAV file. |
| `ui-switch.mdx` | uiSwitch - A URL pointing to a UI switch sound effect WAV file. |
| `vine-boom.mdx` | vineBoom - A URL pointing to a Vine boom sound effect WAV file. |
| `whip.mdx` | whip - A URL pointing to a whip sound effect WAV file. |
| `whoosh.mdx` | whoosh - A URL pointing to a whoosh sound effect WAV file. |
| `wilhelm-scream.mdx` | wilhelmScream - A URL pointing to a Wilhelm scream WAV file. |
| `windows-xp-error.mdx` | windowsXpError - A URL pointing to a Windows XP error sound effect WAV file. |
| `yippee.mdx` | yippee - A URL pointing to a Yippee WAV file. |

### shapes/ (23 files)

| File | Description |
|------|-------------|
| `arrow.mdx` | `<Arrow />` - Renders an SVG element containing an arrow shape. |
| `callout.mdx` | `<Callout />` - Renders an SVG element containing a callout shape. |
| `circle.mdx` | `<Circle />` - Renders an SVG element drawing a circle. |
| `ellipse.mdx` | `<Ellipse />` - Renders an SVG element drawing an ellipse. |
| `heart.mdx` | `<Heart />` - Renders an SVG element containing a heart. |
| `index.mdx` | @remotion/shapes - A package providing utility functions for generate SVG shapes. |
| `make-arrow.mdx` | makeArrow() - Generates an SVG path for an arrow shape. |
| `make-callout.mdx` | makeCallout() - Generates an SVG path for a callout shape. |
| `make-circle.mdx` | makeCircle() - Generates a circle SVG path. |
| `make-ellipse.mdx` | makeEllipse() - Generates an ellipse SVG path. |
| `make-heart.mdx` | makeHeart() - Generates an SVG path for a heart. |
| `make-pie.mdx` | makePie() - Generates a piece of pie SVG path. |
| `make-polygon.mdx` | makePolygon() - Generates a polygon SVG path. |
| `make-rect.mdx` | makeRect() - Generates an SVG rectangle. |
| `make-spark.mdx` | makeSpark() - Generates a spark SVG path. |
| `make-star.mdx` | makeStar() - Generates an star SVG path. |
| `make-triangle.mdx` | makeTriangle() - Generates an SVG path for a triangle with the same length on all sides. |
| `pie.mdx` | `<Pie />` - Renders an SVG element drawing a pie piece. |
| `polygon.mdx` | `<Polygon />` - Renders an SVG element containing a polygon. |
| `rect.mdx` | `<Rect />` - Renders an SVG element containing a rectangle. |
| `spark.mdx` | `<Spark />` - Renders an SVG element containing a four-point spark. |
| `star.mdx` | `<Star />` - Renders an SVG element containing a star. |
| `triangle.mdx` | `<Triangle />` - Renders an SVG element containing a triangle with same length on all sides. |

### skia/ (3 files)

| File | Description |
|------|-------------|
| `enable-skia.mdx` | enableSkia() - A function that modifies the default Webpack configuration to make the necessary changes to support Skia. |
| `skia-canvas.mdx` | `<SkiaCanvas />` - A React Native Skia `<Canvas />` component that wraps Remotion contexts. |
| `skia.mdx` | @remotion/skia - This package provides utilities useful for integrating React Native Skia with Remotion. |

### starburst/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/starburst - `@remotion/starburst` is deprecated and will no longer be published starting with Remotion 5.0. |
| `starburst-effect.mdx` | starburst() - `@remotion/starburst` is deprecated and will no longer be published starting with Remotion 5.0. |
| `starburst.mdx` | `<Starburst>` - `@remotion/starburst` is deprecated and will no longer be published starting with Remotion 5.0. |

### studio/ (30 files)

| File | Description |
|------|-------------|
| `api.mdx` | @remotion/studio - You can install this package from NPM: |
| `browse-elements.mdx` | Browse Elements in Studio - Remotion Elements are available directly inside Remotion Studio. |
| `delete-static-file.mdx` | deleteStaticFile() - Deletes a file from the `public` directory. |
| `deploy-server.mdx` | Deploy the Remotion Studio on a VPS - You can deploy the Remotion Studio to a long-running server in the cloud and make the render UI accessible to your team. |
| `deploy-static.mdx` | Deploy Remotion Studio as static site - You can deploy the Remotion Studio as a static site, for example to Vercel or Netlify. |
| `focus-default-props-path.mdx` | focusDefaultPropsPath() - Scrolls to a specific field in the default props editor. |
| `get-static-files.mdx` | getStaticFiles() - Gets an array containing all files in the `public/` folder. |
| `go-to-composition.mdx` | goToComposition() - Selects a composition in the Remotion Studio. |
| `interactivity-best-practices.mdx` | Interactivity best practices - By writing Remotion markup in a specific way, the Remotion Studio is able to recognize the structure of the code and makes it... |
| `interactivity.mdx` | Interactivity - Studio interactivity means visual edits that are written back to your codebase. |
| `make-component-interactive.mdx` | Make a component interactive - Remotion's default components are already interactive, meaning they can be selected and edited in the Studio. |
| `open-in-editor.mdx` | Setting the default code editor - Remotion Studio can quickly open various things in your code editor: |
| `pause.mdx` | pause() - Pauses playback in the Remotion Studio. |
| `play.mdx` | play() - Starts playback in the Remotion Studio. |
| `quick-switcher.mdx` | Quick Switcher - Press ⌘/Ctrl + K to invoke the quick switcher. |
| `reevaluate-composition.mdx` | reevaluateComposition() - Re-runs `calculateMetadata()` on the currently selected composition. |
| `remotion-dev-new.mdx` | remotion.new - Under remotion.new, we offer a Remotion Studio that runs entirely in the browser. |
| `restart-studio.mdx` | restartStudio() - In order to use this function: |
| `save-default-props.mdx` | saveDefaultProps() - Saves the `defaultProps` for a composition back to the file that registers it, usually the root file. |
| `seek.mdx` | seek() - Jump to a position in time in the Remotion Studio. |
| `shortcuts.mdx` | Keyboard shortcuts - Open the Shortcuts tab in the Studio settings to see the shortcuts for the current project. |
| `showing-unmounted-components.mdx` | Showing unmounted components - By design, Remotion renders only the current frame. |
| `shut-down-studio.mdx` | shutDownStudio() - Gracefully shuts down the Remotion Studio server. |
| `studio.mdx` | Starting the Studio - Using the Remotion Studio, you can preview your video, and if a server is connected, even render the video. |
| `toggle.mdx` | toggle() - Toggles playback in the Remotion Studio. |
| `update-default-props.mdx` | updateDefaultProps() - This function is an alias for `saveDefaultProps()`. |
| `visual-control.mdx` | visualControl() - Remotion Studio now has integrated interactivity for most components, and we will further develop this interactivity rather... |
| `watch-public-folder.mdx` | watchPublicFolder() - Watches for changes in the public directory and calls a callback function when a file is added, removed or modified. |
| `watch-static-file.mdx` | watchStaticFile() - Watches for changes in a specific static file and invokes a callback function when the file changes, enabling dynamic updates... |
| `write-static-file.mdx` | writeStaticFile() - Saves some content into a file in the `public` directory. |

### studio-protocol/ (11 files)

| File | Description |
|------|-------------|
| `add-element-library-to-studio.mdx` | addElementLibraryToStudio() - Requests that a third-party Element Library is added to a recently focused Remotion Studio project. |
| `build-open-in-remotion-new-url.mdx` | buildOpenInRemotionNewUrl() - Builds a URL that opens an Element in the browser-based editor at remotion.new. |
| `create-element-payload.mdx` | createElementPayload() - Creates a validated, versioned Element payload for `buildOpenInRemotionNewUrl()`, `setStudioDragData()`, and `installInStudio()`. |
| `index.mdx` | Remotion Studio Protocol - With this package, you can create payloads for passing content to Remotion Studio. |
| `install-in-studio.mdx` | installInStudio() - Sends an Element payload to the containing Remotion Studio, or discovers a writable Studio when called outside one. |
| `is-inside-studio.mdx` | isInsideStudio() - Checks whether your site is in Studio's Element Library modal. |
| `security.mdx` | Studio Protocol security - An Element contains executable React source code and may declare npm dependencies. |
| `serialize-element-payload-for-html.mdx` | serializeElementPayloadForHtml() - Serializes an Element payload to JSON that is safe to put inside a `<script>` tag in your page's HTML. |
| `set-studio-drag-data.mdx` | setStudioDragData() - Writes an Element payload and its preview metadata to a browser `DataTransfer` object. |
| `static-file-ref.mdx` | staticFileRef() - Reference an Element asset in `initialProps`. |
| `subscribe-to-caption-style-selection.mdx` | subscribeToCaptionStyleSelection() - Studio's Generate captions flow lets users select caption styles from third-party libraries. |

### tailwind/ (2 files)

| File | Description |
|------|-------------|
| `enable-tailwind.mdx` | enableTailwind() - This is documentation for enabling Tailwind v3. |
| `overview.mdx` | @remotion/tailwind - This is documentation for enabling Tailwind v3. |

### tailwind-v4/ (2 files)

| File | Description |
|------|-------------|
| `enable-tailwind.mdx` | enableTailwind() - A function that modifies the default bundler configuration to make the necessary changes to support TailwindCSS. |
| `overview.mdx` | @remotion/tailwind-v4 - This package provides utilities useful for integrating TailwindCSS v4 with Remotion, as documented on our TailwindCSS page. |

### terminology/ (14 files)

| File | Description |
|------|-------------|
| `bundle.mdx` | Remotion Bundle - Once you have written your video in React, you need to bundle it using Webpack in order to render it. |
| `cloud-run-url.mdx` | Cloud Run URL - For rendering on Cloud Run, this url is the address you use to access the service that performs the render. |
| `composition.mdx` | Composition - A composition is something you can render. |
| `concurrency.mdx` | Concurrency - Concurrency can mean different things depending on the context. |
| `entry-point.mdx` | Entry point - The entry point is the file where the Remotion CLI and `@remotion/renderer` APIs will look for a Remotion project. |
| `input-props.mdx` | Input Props - Input props are data that can be passed to a render in order to parametrize the video. |
| `player.mdx` | Remotion Player - The Remotion Player is the React component `<Player>` that can be embedded into a React app. |
| `public-dir.mdx` | Public directory - The public dir(ectory) is the directory in which you can put assets that can be loaded using `staticFile()`. |
| `remotion-root.mdx` | Remotion Root - The Remotion Root is the directory in which Remotion commands get executed in. |
| `root-file.mdx` | Root file - The Root file is the file that exports the Root component, which renders one or more `<Composition />` components. |
| `sequence.mdx` | Sequence - `<Sequence>` is a built-in component in Remotion that: |
| `serve-url.mdx` | Serve URL - A Serve URL is a URL under which a Remotion Bundle is hosted. |
| `service-name.mdx` | Service Name - For rendering on Cloud Run, this is the name of the deployed service. |
| `studio.mdx` | Remotion Studio - The Remotion Studio is the editor that opens that when you run `npx remotion studio`. |

### timeline/ (6 files)

| File | Description |
|------|-------------|
| `demo.mdx` | Remotion Timeline Demo - Here is a walkthrough of how to add the Remotion Timeline to your project. |
| `faq.mdx` | Timeline – FAQ - Yes, the template is fully compatible with React 18. |
| `index.mdx` | Remotion Timeline - A paid customizable timeline component that integrates seamlessly with Remotion Player. |
| `render.mdx` | Timeline – Rendering videos - The `<Timeline />` component is in a sample Vite project, which is a frontend-only application. |
| `setup.mdx` | Timeline – Setup - 1. Copy the `timeline/` folder to your application |
| `usage.mdx` | Timeline – Usage - Import and use the timeline components in your React application. |

### transitions/ (5 files)

| File | Description |
|------|-------------|
| `audio-transitions.mdx` | Transitioning with audio - _working from v4.0.58_ |
| `index.mdx` | @remotion/transitions - This package provides the `<TransitionSeries>` component for transitioning between two scenes as well as timing presets. |
| `make-html-in-canvas-presentation.mdx` | makeHtmlInCanvasPresentation() - Allows you to pass a shader to create a HTML-in-canvas-based `@remotion/transitions` presentation. |
| `transitionseries.mdx` | `<TransitionSeries>` - The `<TransitionSeries>` component behaves the same as the `<Series>` component, but allows for... |
| `use-transition-progress.mdx` | useTransitionProgress() - A hook that can be used inside a child of a `<TransitionSeries.Sequence>` to get the progress of the transition to directly... |

### transitions/presentations/ (24 files)

| File | Description |
|------|-------------|
| `blur-slide.mdx` | blurSlide() - A presentation that whips both scenes in one direction with a heavy motion blur, like a fast camera pan. |
| `book-flip.mdx` | bookFlip() - A presentation that bends the outgoing and incoming scenes into a shaded page-turning book flip. |
| `clock-wipe.mdx` | clockWipe() - A presentation where the exiting slide is wiped out in a circular movement, revealing the next slide underneath it. |
| `cross-zoom.mdx` | crossZoom() - A presentation where both scenes zoom across a moving center with weighted blur samples. |
| `crosswarp.mdx` | crosswarp() - A presentation that warps the outgoing scene and incoming scene against each other across the x-axis. |
| `cube.mdx` | cube() - A presentation where both the entering and exiting scene rotate with 3D perspective. |
| `custom-html-in-canvas.mdx` | Custom HTML-in-canvas presentations - Build a presentation that runs the entering and exiting scenes through a shader using the HTML-in-canvas APIs. |
| `custom.mdx` | Custom presentations - This page describes how to create your own custom effect for `<TransitionSeries>`. |
| `dissolve.mdx` | dissolve() - A presentation that burns through the outgoing scene with a glowing edge, revealing the incoming scene where the burn has... |
| `dreamy-zoom.mdx` | dreamyZoom() - A presentation that zooms and rotates through a white flash between scenes. |
| `fade.mdx` | fade() - A simple fade animation. |
| `film-burn.mdx` | filmBurn() - A presentation that combines a procedural film-burn glow overlay with a radial blur blend. |
| `flip.mdx` | flip() - A presentation where the exiting slide flips by 180 degrees, revealing the next slide on the back side. |
| `index.mdx` | Presentations - A **presentation** together with a timing forms a transition. |
| `iris.mdx` | iris() - A presentation where the next scene is revealed through a circular mask that expands from the center outward, similar to a... |
| `linear-blur.mdx` | linearBlur() - A presentation that applies a directional multi-sample blur while blending between scenes. |
| `none.mdx` | none() - A presentation that has no visual effect on it's own. |
| `push-cut.mdx` | pushCut() - A hard editorial cut energized by a short punch-in on both scenes and a brief flash at the edit point. |
| `ripple.mdx` | ripple() - A presentation that displaces the outgoing scene with a sinusoidal wave radiating from the center while crossfading to the... |
| `slide.mdx` | slide() - A presentation where the entering slide pushes out the exiting slide. |
| `swap.mdx` | swap() - A presentation that swaps scenes with perspective, depth, and a floor reflection. |
| `wipe.mdx` | wipe() - A presentation where the entering slide slides over the exiting slide. |
| `zoom-blur.mdx` | zoomBlur() - A presentation where the outgoing scene zooms out and rotates while the incoming scene zooms in from the opposite angle,... |
| `zoom-in-out.mdx` | zoomInOut() - A presentation where the outgoing scene zooms in toward the viewer and crossfades into the incoming scene, which then zooms... |

### transitions/timings/ (4 files)

| File | Description |
|------|-------------|
| `custom.mdx` | Custom timings - This page describes how to create your own custom timings for `<TransitionSeries>`. |
| `index.mdx` | Timings - A **timing** together with a presentation forms a transition. |
| `lineartiming.mdx` | linearTiming() - A timing function for `<TransitionSeries>` based on `interpolate()`. |
| `springtiming.mdx` | springTiming() - A timing function for `<TransitionSeries>` based on `spring()`. |

### troubleshooting/ (23 files)

| File | Description |
|------|-------------|
| `background-image.mdx` | Flickering when using background-image or mask-image - The following code is discouraged in Remotion: |
| `broken-fast-refresh.mdx` | Fast Refresh not working - If the Remotion Studio does not update after you have updated your file, it is usually due to one of two reasons: |
| `browser-launch.mdx` | Failed to launch the browser process - If you get an error message: |
| `bundling-bundle.mdx` | Calling bundle() in bundled code - If you receive the following error: |
| `cannot-save-default-props.mdx` | Cannot save default props - If the Props editor shows this warning: |
| `could-not-be-parsed-as-a-value-list.mdx` | The source provided could not be parsed as a value list - The following error message: |
| `could-not-find-executable-to-run.mdx` | Could not determine executable to run - If you receive the following error: |
| `css-animations.mdx` | Don't use CSS animations in Remotion - The following code does not work in Remotion: |
| `debug-failed-render.mdx` | Debugging render failures - Since JavaScript code is executing, it may happen that a render may due to an exception. |
| `defaultprops-too-big.mdx` | defaultProps too big - could not serialize - If you experience an error during rendering: |
| `delay-render-proxy.mdx` | Loading  with src http://localhost:3000/proxy - The error message `A delayRender() "Loading <Img> with src=http://localhost:3000/proxy?src=[...]&time=[...]&transparent=[...]"... |
| `font-loading-errors.mdx` | Font loading errors - When using `@remotion/google-fonts`, you may encounter timeout errors like: |
| `loading-root-component.mdx` | Root component Timeout - If you get an error message: |
| `nextjs-image.mdx` | Flickering when using Next.js  tag - The following code is discouraged in Remotion: |
| `no-frame-found-at-position.mdx` | No frame found at position error message - If you get an error: |
| `render-stuck.mdx` | Debugging stuck renders - If your render is stuck, proceed as follows: |
| `rosetta.mdx` | Apple Silicon under Rosetta - Running Remotion on Apple Silicon (M1 chip) under Rosetta can be up to 2x slower. |
| `sigkill.mdx` | Process quit with signal SIGKILL - This error comes in multiple variants: |
| `subpixel-rendering.mdx` | Text subpixel rendering - Chrome will by default always render text to align it with the closest pixel. |
| `timed-out-page-function.mdx` | Timed out evaluating page function - The error message "Timed out evaluating page function" |
| `video-flicker.mdx` | Avoiding flickering in  - Consider the following markup: |
| `video-has-no-sound.mdx` | Why does my video not have sound? - If you rendered a video with Remotion and it appears to have no audio, the most common cause is that you are playing it back... |
| `webgl2-context.mdx` | Failed to acquire WebGL2 context - You may see an error like this when rendering a composition that uses WebGL: |

### vercel/ (8 files)

| File | Description |
|------|-------------|
| `add-bundle-to-sandbox.mdx` | addBundleToSandbox() - Experimental package: We reserve the right to make breaking changes in order to correct bad design decisions until this notice... |
| `create-sandbox.mdx` | createSandbox() - Experimental package: We reserve the right to make breaking changes in order to correct bad design decisions until this notice... |
| `get-render-progress.mdx` | getRenderProgress() - Experimental package: We reserve the right to make breaking changes in order to correct bad design decisions until this notice... |
| `index.mdx` | @remotion/vercel - Experimental package: We reserve the right to make breaking changes in order to correct bad design decisions until this notice... |
| `render-media-on-vercel.mdx` | renderMediaOnVercel() - Experimental package: We reserve the right to make breaking changes in order to correct bad design decisions until this notice... |
| `render-still-on-vercel.mdx` | renderStillOnVercel() - Experimental package: We reserve the right to make breaking changes in order to correct bad design decisions until this notice... |
| `types.mdx` | TypeScript Types Reference - Experimental package: We reserve the right to make breaking changes in order to correct bad design decisions until this notice... |
| `upload-to-vercel-blob.mdx` | uploadToVercelBlob() - Experimental package: We reserve the right to make breaking changes in order to correct bad design decisions until this notice... |

### video-matting/ (10 files)

| File | Description |
|------|-------------|
| `can-use-video-matting.mdx` | canUseVideoMatting() - Checks whether a video matting model can run in the current browser or Node.js environment. |
| `dispose-video-matting-model.mdx` | disposeVideoMattingModel() - Releases the memory used by initialized video matting models. |
| `download-video-matting-model.mdx` | downloadVideoMattingModel() - Downloads a video matting model from `remotion.media` into the browser or Node.js filesystem cache. |
| `get-available-models.mdx` | getAvailableModels() - Returns metadata for the models supported by `separateVideoLayers()`. |
| `index.mdx` | @remotion/video-matting - Separate a video into opaque base and transparent foreground layers, locally in the browser or Node.js using WebGPU. |
| `is-video-matting-model-cached.mdx` | isVideoMattingModelCached() - Checks whether all files hosted on `remotion.media` for a video matting model are present in the browser or Node.js filesystem... |
| `load-video-matting-model.mdx` | loadVideoMattingModel() - Initializes a previously downloaded video matting model on WebGPU. |
| `node.mdx` | Using @remotion/video-matting in Node.js - You can use `@remotion/video-matting` in Node.js to separate a local video into an opaque base and a transparent foreground. |
| `remove-video-matting-model.mdx` | removeVideoMattingModel() - Removes a video matting model from memory and the persistent model cache. |
| `separate-video-layers.mdx` | separateVideoLayers() - Separates a video into an opaque base WebM and a foreground WebM with alpha. |

### videos/ (12 files)

| File | Description |
|------|-------------|
| `accelerated-video.mdx` | Change the speed of a video over time - This does not work with `<Video>` from `@remotion/media` yet. |
| `align-duration.mdx` | Matching composition duration - Use `calculateMetadata()` to match the composition duration to a video or audio file. |
| `as-threejs-texture.mdx` | Using a video as a texture in Three.js - If you want to embed a video as a texture in Three.js, you have multiple options. |
| `different-segments-at-different-speeds.mdx` | Different segments at different speeds - If you have a video and want to show different sections of the video at different speeds, use the following snippet. |
| `index.mdx` | Adding video and audio - Use `<Video>` and `<Audio>` from `@remotion/media` to add video and sound to your composition. |
| `jumpcuts.mdx` | Jump Cutting - Sometimes you want to implement a "jump cut" to skip parts of a video (for example to cut out the "uhm"s). |
| `media-fragments.mdx` | #t= Media Fragments - For `<OffthreadVideo>` and `<Html5Video>`, Remotion by default adds Media fragment hashes to video URLs. |
| `prores.mdx` | Embedding ProRes - ProRes is the most popular format for exchanging transparent videos. |
| `sequence.mdx` | Playing videos in sequence - To play multiple videos one after another: |
| `size-and-position.mdx` | Sizing and positioning a video - Use the `style` prop of `<Video>` to size and position a video with CSS. |
| `transparency.mdx` | Embedding transparent videos - You can embed transparent videos in Remotion. |
| `video-manipulation.mdx` | Video manipulation - You can draw frames of a `<Video>` from `@remotion/media`, `<OffthreadVideo>` or a `<Html5Video>` onto a `<canvas>` element... |

### web-renderer/ (8 files)

| File | Description |
|------|-------------|
| `can-render-media-on-web.mdx` | canRenderMediaOnWeb() - Checks if a render can be performed with the given configuration before actually attempting it. |
| `get-encodable-audio-codecs.mdx` | getEncodableAudioCodecs() - Returns the audio codecs that the current browser can encode for a given container format. |
| `get-encodable-video-codecs.mdx` | getEncodableVideoCodecs() - Returns the video codecs that the current browser can encode for a given container format. |
| `index.mdx` | @remotion/web-renderer - This package allows you to render videos and stills directly in the browser, without requiring server-side infrastructure. |
| `render-frames-on-web.mdx` | renderFramesOnWeb() - Renders multiple frames of a composition in the browser. |
| `render-media-on-web.mdx` | renderMediaOnWeb() - Renders a video or audio in the browser. |
| `render-still-on-web.mdx` | renderStillOnWeb() - Renders a single frame in the browser. |
| `types.mdx` | TypeScript Types Reference - The following types are part of the API of `@remotion/web-renderer`: |

### webcodecs/ (31 files)

| File | Description |
|------|-------------|
| `buffer-writer.mdx` | bufferWriter - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `can-copy-audio-track.mdx` | canCopyAudioTrack() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `can-copy-video-track.mdx` | canCopyVideoTrack() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `can-reencode-audio-track.mdx` | canReencodeAudioTrack() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `can-reencode-video-track.mdx` | canReencodeVideoTrack() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `convert-a-video.mdx` | Convert a video - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `convert-audiodata.mdx` | convertAudioData() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `convert-media.mdx` | convertMedia() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `create-audio-decoder.mdx` | createAudioDecoder() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `create-video-decoder.mdx` | createVideoDecoder() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `default-on-audio-track-handler.mdx` | defaultOnAudioTrackHandler() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `default-on-video-track-handler.mdx` | defaultOnVideoTrackHandler() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `extract-frames-on-web-worker.mdx` | extractFramesOnWebWorker() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `extract-frames.mdx` | extractFrames() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `fix-a-mediarecorder-video.mdx` | Fixing a MediaRecorder video - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `get-available-audio-codecs.mdx` | getAvailableAudioCodecs() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `get-available-containers.mdx` | getAvailableContainers() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `get-available-video-codecs.mdx` | getAvailableVideoCodecs() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `get-default-audio-codec.mdx` | getDefaultAudioCodec() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `get-default-video-codec.mdx` | getDefaultVideoCodec() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `get-partial-audio-data.mdx` | getPartialAudioData() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `index.mdx` | @remotion/webcodecs - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `misconceptions.mdx` | Clearing up WebCodecs misconceptions - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `pause-resume-abort.mdx` | Pause, resume and abort conversion - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `resample-audio-16khz.mdx` | Resample audio to 16kHz - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `resizing.mdx` | Resize a video - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `rotate-and-resize-video-frame.mdx` | rotateAndResizeVideoFrame() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `rotation.mdx` | Rotate a video - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `track-transformation.mdx` | Track Transformation - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `web-fs-writer.mdx` | webFsWriter - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |
| `webcodecs-controller.mdx` | webcodecsController() - We are phasing out Remotion WebCodecs and are moving to Mediabunny! |

### whisper-web/ (8 files)

| File | Description |
|------|-------------|
| `can-use-whisper-web.mdx` | canUseWhisperWeb() - Checks if the current browser environment supports running `@remotion/whisper-web` with a specified model. |
| `download-whisper-model.mdx` | downloadWhisperModel() - Downloads a Whisper model into IndexedDB. |
| `get-available-models.mdx` | getAvailableModels() - Returns an array of all available Whisper models with their names and download sizes. |
| `get-loaded-models.mdx` | getLoadedModels() - Returns an array of Whisper models that have already been downloaded and stored in the browser's IndexedDB storage. |
| `index.mdx` | @remotion/whisper-web - `@remotion/whisper-web` is deprecated and will no longer be published starting with Remotion 5.0. |
| `resample-to-16khz.mdx` | resampleTo16Khz() - Processes an audio `File` or `Blob` by decoding it, converting it to mono, and resampling it to a 16kHz `Float32Array`. |
| `to-captions.mdx` | toCaptions() - Converts the output from `transcribe()` into an array of `Caption` objects, so you can use the functions from... |
| `transcribe.mdx` | transcribe() - Transcribes pre-processed audio data (a `Float32Array` waveform) using WebAssembly-compiled Whisper.cpp, returning the... |

### whisper-webgpu/ (13 files)

| File | Description |
|------|-------------|
| `can-use-whisper-webgpu.mdx` | canUseWhisperWebGpu() - Asynchronously checks whether WebGPU transcription is supported in the current environment. |
| `clear-stale-models.mdx` | clearStaleModels() - Removes cached model files that are no longer returned by `getAvailableModels()`. |
| `dispose-whisper-model.mdx` | disposeWhisperModel() - Releases the memory used by initialized Whisper pipelines. |
| `download-whisper-model.mdx` | downloadWhisperModel() - Downloads a Whisper model from `remotion.media` into the Transformers.js cache. |
| `get-available-models.mdx` | getAvailableModels() - Returns the timestamped Whisper models supported by `transcribe()`. |
| `index.mdx` | @remotion/whisper-webgpu - Transcribe audio locally in the browser or Node.js using timestamped Whisper models and WebGPU through Transformers.js, and... |
| `is-whisper-model-cached.mdx` | isWhisperModelCached() - Checks whether all files needed for a timestamped Whisper model from `remotion.media` are present in the persistent... |
| `load-whisper-model.mdx` | loadWhisperModel() - Initializes a previously downloaded Whisper model on WebGPU. |
| `node.mdx` | Using @remotion/whisper-webgpu in Node.js - You can use the `@remotion/whisper-webgpu` package in Node.js to transcribe audio. |
| `remove-whisper-model.mdx` | removeWhisperModel() - Removes a Whisper model from memory and the persistent Transformers.js cache. |
| `resample-to-16khz.mdx` | resampleTo16Khz() - Decodes an audio `Blob`, mixes it to mono, and resamples it to the 16kHz waveform expected by `transcribe()`. |
| `to-captions.mdx` | toCaptions() - Converts `transcribe()` output into `Caption` objects from `@remotion/captions`. |
| `transcribe.mdx` | transcribe() - Transcribes a 16kHz mono waveform and returns words with start and end timestamps. |

### zod-types/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | @remotion/zod-types - Includes utility types and Remotion-specific types for Zod. |
| `v3.mdx` | @remotion/zod-types-v3 - `@remotion/zod-types` creates schemas using Zod v4 since Remotion v4.0.426. |
| `z-color.mdx` | zColor() - Using `zColor()`, you can specify in your schema that a string has to be a color. |
| `z-matrix.mdx` | zMatrix() - With this type, you can visually edit a matrix in the Props Editor. |
| `z-textarea.mdx` | zTextarea() - Using this type you can specify in your schema a string that will be displayed in the Remotion Studio as a multiline text area. |

