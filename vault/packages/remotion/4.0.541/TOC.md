# remotion Table of Contents

## Directory Map

```
contents/
├── (root)                # 202 files: core API (composition, sequence, interpolate, spring), guides, concepts
├── ai/                   # AI/agent skills, prompts, system prompts (16)
├── audio/                # Audio visualization and utilities (7)
├── captions/             # Caption formats and utilities (11)
├── cli/                  # Remotion CLI commands (18)
├── client-side-rendering/# In-browser rendering (7)
├── cloudrun/             # Cloud Run (alpha) deployment, API, CLI (41)
├── codemods/             # Studio codemods and visual controls (37)
├── effects/              # @remotion/effects visual effects (90)
├── lambda/               # AWS Lambda deployment, API, CLI (101)
├── media-parser/         # Media Parser (being phased out for Mediabunny) (28)
├── mediabunny/           # Mediabunny integration (10)
├── miscellaneous/        # Snippets, guides, misc topics (23)
├── options/              # Shared render/CLI options (105)
├── paths/                # @remotion/paths SVG path utilities (23)
├── player/               # @remotion/player embed API (17)
├── renderer/             # @remotion/renderer Node.js SSR API (16)
├── sdk/                  # Studio SDK / Elements API (26)
├── sfx/                  # Sound effects (33)
├── shapes/               # @remotion/shapes (23)
├── studio/               # Remotion Studio (30)
├── transitions/          # @remotion/transitions (33)
├── troubleshooting/      # Common errors and fixes (23)
├── webcodecs/            # WebCodecs conversion (being phased out) (31)
└── ...                   # ~35 smaller package folders (gif, lottie, skia, vercel, whisper-*, etc.)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started.mdx` |
| API overview | `contents/api.mdx` |
| Register a video | `contents/composition.mdx` |
| Timing and animation | `contents/sequence.mdx`, `contents/interpolate.mdx`, `contents/spring.mdx` |
| Server-side rendering | `contents/ssr.mdx` |
| Lambda deployment | `contents/lambda.mdx` |
| Embed in a web app | `contents/player/api.mdx` |
| CLI reference | `contents/cli/cli.mdx` |
| Troubleshooting | `contents/troubleshooting/` |

## Detailed Structure

### (root) (202 files)

| File | Description |
|------|-------------|
| `absolute-fill.mdx` | `<AbsoluteFill>` (API) |
| `accessibility.mdx` | This page documents how Remotion's **products** (Remotion Player, Remotion Studio, Remotion Editor Starter, and others) meet accessibility standards. |
| `after-effects.mdx` | If you are a After Effects user, you might find it useful to convert your After Effects compositions to Remotion compositions. |
| `angular.mdx` | This guide explains how to integrate Remotion into an **Angular** project. |
| `animatedimage.mdx` | Renders an animated GIF, PNG, AVIF or WebP image and syncs it with Remotion's timeline. |
| `animating-properties.mdx` | Animation works by changing properties over time. |
| `animation-math.mdx` | You can add, subtract and multiply animation values to create more complex animations. |
| `api.mdx` | API overview |
| `artifact.mdx` | By rendering an `<Artifact>` tag in your Remotion markup, an extra file will get emitted during rendering. |
| `artifacts.mdx` | Sometimes you wish to generate additional files when rendering your video. |
| `audiobuffertodataurl.mdx` | This API takes an `AudioBuffer` instance and converts it to a Base 64 Data URL so it can be passed to an `<Audio>` tag from `@remotion/media`. |
| `authoring-packages.mdx` | Authoring a Remotion library works the same as authoring a normal React library. |
| `azure-container-apps.mdx` | This guide provides a walkthrough for deploying Remotion rendering service with basic render queuing on Azure Container Apps. |
| `brownfield-installation.mdx` | Remotion can be installed into existing projects, such as Next.JS, React Router, Vite or Create React App, as well as server-only projects that run on Node.JS. |
| `building-a-timeline.mdx` | This document describes on a high-level how the Remotion Player can be synchronized with a timeline. |
| `bun.mdx` | Remotion is excited about Bun, and we mostly support it (from v1.0.3). |
| `bundle.mdx` | Bundles a Remotion project using Webpack, or Rspack if enabled, and prepares it for rendering using `renderMedia()`. |
| `bundler.mdx` | A package containing the `bundle()` function, which takes a Remotion project and bundles it using Webpack, preparing it to be used by server-side rendering functions such as `getCompositions()`... |
| `calculate-metadata.mdx` | `calculateMetadata` is a prop that gets passed to `<Composition>` and takes a callback function which may transform metadata. |
| `cancel-render.mdx` | By invoking this function, Remotion will stop the current render, and not perform any retries. |
| `canvasimage.mdx` | Renders a static image onto a `<canvas>` element. |
| `chromium-flags.mdx` | Chromium flags (Tweaks) |
| `cloudflare-containers.mdx` | Cloudflare Containers is a new platform in Beta for invoking Docker containers from Cloudflare's Worker functions. |
| `cloudrun.mdx` | Render Remotion videos on GCP Cloud Run. |
| `color-correction.mdx` | Color correction in Remotion is implemented using effects. |
| `compare.mdx` | Comparison of server-side rendering options (Compare) |
| `components.mdx` | You can render any React/HTML markup in Remotion. |
| `composing.mdx` | React is perfect for reusing, parametrizing, and composing components with multiple levels of depth. |
| `composition.mdx` | This is the component to use to register a video to make it renderable and make it show up in the sidebar of the Remotion development interface. |
| `config.mdx` | To configure Remotion, create a `remotion.config.ts` file in the root of your Remotion project. |
| `continue-render.mdx` | Using `continueRender`, you can unblock a rendering that has been deferred using `delayRender()`. |
| `cors-issues.mdx` | A CORS issue is best debugged with Google Chrome because of the useful error messages. |
| `create-effect-implementation.mdx` | Types the state of one backend implementation for `createEffect()`. |
| `create-effect.mdx` | Creates an effect factory that can be passed to the `effects` prop of Remotion canvas components. |
| `create-videos-with-code.mdx` | Remotion came out in 2021, way before agents were the hype. |
| `data-fetching.mdx` | In Remotion, you may fetch data from an API to use it in your video. |
| `dataset-render.mdx` | You can use Remotion to do a batch render to create many videos based on a dataset. |
| `default-props-inference.mdx` | If a `<Composition>` has `defaultProps` but no `schema`, the Remotion Studio infers controls from the values in `defaultProps`. |
| `delay-render.mdx` | `delayRender()` pauses the render to let an asynchronous task such as data fetching complete. |
| `deno.mdx` | As of right now, Remotion **does not support Deno**. |
| `design-systems.mdx` | Remotion is an excellent tool for collecting your organization's animated design resources. |
| `detect-remotion.mdx` | Detect if a video was made with Remotion (Techniques) |
| `distributed-rendering.mdx` | Remotion Lambda is our recommended solution if you are looking for a way to split up renders into chunks that run on different machines. |
| `docker.mdx` | We recommend the following structure for your Dockerfile. |
| `dpia.mdx` | Statement documenting why Remotion's licensing platform and telemetry are not likely to result in a high risk to individuals, and why a formal Data Protection Impact Assessment is not required. |
| `dynamic-import.mdx` | A common need in Remotion is to import assets from dynamic paths. |
| `dynamic-metadata.mdx` | You may change the duration of the video based on some asynchronously determined data. |
| `easing.mdx` | The `Easing` module implements common easing functions. |
| `effects.mdx` | src="/img/effects-banner.mp4" autoPlay loop muted playsInline style={{width: '100%', borderRadius: 'var(--ifm-global-radius)', marginBottom: 0, aspectRatio: '3 / 1'}} /> |
| `electron.mdx` | The official Electron template is the recommended baseline. |
| `elements.mdx` | Design reusable Remotion Elements for any Element library. |
| `enametoolong.mdx` | This error occurs if Remotion is used on Windows and too many audio layers are in the video so that an FFmpeg command gets generated that is longer than the maximum allowed Windows command length... |
| `encoding.mdx` | Backed by FFmpeg, Remotion allows you to configure a variety of encoding settings. |
| `env-variables.mdx` | Remotion supports environment variables being passed directly from the CLI, using a `.env` file and from the `renderMedia()` function. |
| `eslint-config.mdx` | The Remotion ESLint configs provide recommended rules for JavaScript, TypeScript, React Hooks, and Remotion. |
| `eslint-plugin.mdx` | `@remotion/eslint-plugin` warns about incorrect or inefficient use of Remotion APIs. |
| `export-opentimeline.mdx` | OpenTimelineIO (`.otio`) lets you move a timeline into traditional video editing programs such as DaVinci Resolve or Premiere Pro. |
| `figma.mdx` | There are two ways to import layers from Figma into Remotion Studio. |
| `flickering.mdx` | Flickering (How to avoid) |
| `folder.mdx` | By wrapping a `<Composition />` inside a `<Folder />`, you can visually categorize it in your sidebar, should you have many compositions. |
| `font-picker.mdx` | To show various Google fonts in a font picker and load them once the user selects them, first install `@remotion/google-fonts` (at least v3.3.64). |
| `fonts.mdx` | Here are some ways how you can use custom fonts in Remotion. |
| `freeze.mdx` | For new code, prefer `<Sequence freeze>` if you want to freeze a timeline item. |
| `get-audio-data.mdx` | Takes an audio or video `src`, loads it and returns data and metadata for the specified source. |
| `get-audio-duration-in-seconds.mdx` | _Previously called `getAudioDuration()`._ |
| `get-image-dimensions.mdx` | Takes an image `src`, retrieves the dimensions of an image. |
| `get-input-props.mdx` | Using this method, you can retrieve inputs that you pass in from the command line using `--props`, or the `inputProps` parameter if you are using the Node.JS APIs (`renderMedia()`,... |
| `get-remotion-environment.mdx` | With the `getRemotionEnvironment()` function, you can retrieve information about the current Remotion Environment. |
| `get-static-files.mdx` | Gets an array containing all files in the `public/` folder. |
| `get-video-metadata.mdx` | Takes a `src` to a video, loads it and returns metadata for the specified source. |
| `get-waveform-portion.mdx` | Takes bulky waveform data (for example fetched by `getAudioData()`) and returns a trimmed and simplified version of it, for simpler visualization. |
| `getting-started.mdx` | If you have the ChatGPT desktop app, it can create a complete Remotion project that you can edit, run, and render locally using the Remotion plugin. |
| `gpu.mdx` | Some types of content in Remotion can benefit from a GPU being available on the machine that is used for rendering. |
| `greenscreen.mdx` | Use the `colorKey()` effect from `@remotion/effects` to remove the green background of a video. |
| `hardware-acceleration.mdx` | Encoding is the process of converting a sequence of images into a video file. |
| `hdr.mdx` | High Dynamic Range (HDR) is a feature that allows for a wider range of colors and brightnesses than standard dynamic range (SDR). |
| `hls.mdx` | `<Video>` from `@remotion/media` supports HLS / `.m3u8` files natively via Mediabunny. |
| `how-props-flow.mdx` | Remotion performs an algorithm for determining the props that are being passed to your component when rendering the video. |
| `html-in-canvas-bugs.mdx` | This page tracks browser bugs and limitations affecting HTML-in-canvas that our community has reported. |
| `html-in-canvas-guide.mdx` | src="https://pub-646d808d9cb240cea53bedc76dd3cd0c.r2.dev/html-in-canvas-banner.mp4" autoPlay loop muted playsInline style={{width: '100%', borderRadius: 'var(--ifm-global-radius)', marginBottom:... |
| `html5-audio.mdx` | _previously called `<Audio>`_ |
| `html5-video.mdx` | _previously called `<Video>`_ |
| `idea.mdx` | The idea of Remotion is to give you a frame number and a blank canvas, to which you can render anything you want using React. |
| `iframe.mdx` | The `<IFrame />` can be used like the regular `<iframe>` HTML tag. |
| `img.mdx` | The `<Img>` tag can be used like a regular `<img>` HTML tag. |
| `importing-assets.mdx` | To import assets in Remotion, create a `public/` folder in your project and use `staticFile()` to import it. |
| `interactive-create.mdx` | Wraps a React component with timing props and editable controls in the Remotion Studio. |
| `interactive-with-schema.mdx` | Wraps a React component so Remotion Studio shows it as interactive. |
| `interactive.mdx` | `Interactive` exposes HTML and SVG elements that can be visually edited in the Remotion Studio. |
| `interactivity-schema.mdx` | An `InteractivitySchema` describes controls that Remotion Studio can show in the timeline. |
| `interpolate-colors.mdx` | Allows you to map a range of values to colors using a concise syntax. |
| `interpolate.mdx` | Allows you to map a range of values to another using a concise syntax. |
| `investors.mdx` | This page summarizes our situation as a company and is intended for people who expressed interest in investing in Remotion. |
| `jsx-support.mdx` | Since Remotion 1.3, you can opt out of Typescript and it's type checking advantages in Remotion. |
| `lambda.mdx` | minutes={11} href="https://youtu.be/dQyPUasZY7I" thumb="https://i.ytimg.com/vi/dQyPUasZY7I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCn-snZSKGnDuNkm0fIQYnQ9gJz4w"... |
| `layers.mdx` | Unlike normal websites, a video has fixed dimensions. |
| `legacy-babel-loader.mdx` | Remotion uses faster transpilation by default: `esbuild-loader` with Webpack and SWC with Rspack. |
| `legal.mdx` | Legal information about Remotion, including privacy policy, data processing statements, and acknowledgements. |
| `light-leaks-guide.mdx` | The `lightLeak()` effect from `@remotion/effects` renders an animated WebGL2-based light leak overlay. |
| `loop.mdx` | The `<Loop />` component allows you to quickly lay out an animation so it repeats itself. |
| `lovable-for-motion-graphics.mdx` | A common question is whether the next step for Remotion is to build a consumer tool that allows for prompting motion graphics. |
| `maps.mdx` | Create map animations in Remotion using MapLibre GL JS and Turf.js. |
| `measure-spring.mdx` | Based on a spring() configuration and the frame rate, return how long it takes for a spring animation to settle. |
| `measuring.mdx` | If you want to measure a DOM node, you can assign a React Ref to it and then use the `getBoundingClientRect()` browser API to get the position and size of the node. |
| `media-playback-error.mdx` | Could not play video/audio with src (Troubleshooting) |
| `metadata.mdx` | Video files can store metadata in them. |
| `multiple-fps.mdx` | You may want to support multiple frame rates for a composition. |
| `noise-visualization.mdx` | Using the `@remotion/noise` package, you can add noise for your videos. |
| `non-seekable-media.mdx` | Non-seekable media (Troubleshooting) |
| `offthreadvideo.mdx` | This component imports and displays a video, similar to `<Html5Video/>`, but during rendering, extracts the exact frame from the video and displays it in a `<Img>` tag. |
| `open-gl.mdx` | When rendering a video in Remotion, different GL renderer backends can be selected. |
| `overlay.mdx` | If you want to export a Remotion video to use it as an overlay or transition in a conventional video editing software, you can export it as a transparent Apple ProRes file, which is supported by... |
| `overwriting-webpack-config.mdx` | Remotion bundles your project before opening the Studio or rendering media. |
| `parallel-encoding.mdx` | With parallel encoding, Remotion encodes video frames using FFmpeg while Chromium renders the following frames. |
| `parameterized-rendering.mdx` | Remotion allows for ingesting, validating, visually editing, and transforming data that may be used to parametrize a video. |
| `passing-props.mdx` | You can parametrize the content of the videos using React properties ("props"). |
| `performance.mdx` | Video rendering is one of the most heavy workloads a computer can take on. |
| `player-into-remotion-project.mdx` | If you have a React app that uses the `<Player>` component, you can turn it also into a Remotion project without having to create a new repository. |
| `posterization.mdx` | Posterization makes an animation update in steps instead of changing on every frame. |
| `prefetch.mdx` | By calling `prefetch()`, an asset will be fetched and kept in memory so it is ready when you want to play it in a `<Player>`. |
| `presigned-urls.mdx` | This article provides guidance for webapps wanting to allow users to upload videos and other assets. |
| `prores.mdx` | Apple ProRes is a high-bitrate codec for video editing workflows. |
| `quality.mdx` | Video encoding involves heavily compressing the video data to reduce the file size, which is a lossy process. |
| `random.mdx` | The `random()` API will give deterministic pseudorandom values between `0` and `1`. |
| `react-19.mdx` | To use React 19's newest features, you need at least version `4.0.0` of Remotion. |
| `react-native.mdx` | Support for React Native is currently not planned due to performance issues. |
| `register-root.mdx` | `registerRoot` is a function that registers the root component of the Remotion project. |
| `remotion.mdx` | A package containing the essential building blocks of expressing videos in Remotion. |
| `render-all.mdx` | In some scenarios, you might find it useful to render all compositions. |
| `render-as-gif.mdx` | Rendering GIFs (Techniques) |
| `render.mdx` | There are various ways to render your video. |
| `renderer.mdx` | The `@remotion/renderer` package provides APIs for rendering video server-side. |
| `resources.mdx` | This list tries to compile all templates, libraries, building blocks and examples in one place. |
| `sample-rate.mdx` | Match the sample rate of your audio input to the output sample rate to get the best audio quality. |
| `scaling.mdx` | Output scaling is useful if you would like to render the video in multiple resolutions in the same aspect ratio. |
| `schemas.mdx` | Use Zod to validate the props your component accepts and to customize their controls in the Remotion Studio. |
| `sdk.mdx` | SDK is a product by Remotion that is in development. |
| `security.mdx` | Remotion is a software that can generate videos programmatically. |
| `sequence.mdx` | `<Sequence>` is the base component for placing content on the timeline. |
| `series.mdx` | Using this component, you can easily stitch together scenes that should play sequentially after another. |
| `shaders.mdx` | You can use shader effects in Remotion to generate backgrounds or transform content. |
| `shared-memory-capture.mdx` | Traditionally, screenshots of webpages are captured using the Chrome DevTools Protocol, then encoded as either JPEG or PNG. |
| `slow-method-to-extract-frame.mdx` | Slow method to extract frame (Troubleshooting) |
| `solid.mdx` | Renders a solid-color rectangle on a `<canvas>` element. |
| `spline.mdx` | _Authors: Dhroov Makwana and Jonny Burger_ |
| `spring.mdx` | A physics-based animation primitive. |
| `ssr-node.mdx` | The NPM package `@remotion/renderer` provides you with "**S**erver-**S**ide **R**endering" APIs for rendering media programmatically. |
| `ssr.mdx` | Remotion's rendering engine is built with Node.JS, which makes it easy to render a video in the cloud. |
| `standalone.mdx` | Remotion APIs are designed to be as pure as possible, doing just one thing at a time. |
| `static-file-relative-paths.mdx` | staticFile() does not support relative paths (Troubleshooting) |
| `static-file-remote-urls.mdx` | staticFile() does not support remote URLs (Troubleshooting) |
| `staticfile.mdx` | Turns a file in your `public/` folder into an URL which you can then load into your project. |
| `still.mdx` | A `<Still />` is a single-frame `<Composition />`. |
| `stills.mdx` | Remotion is a great solution for rendering thumbnails of videos or dynamic still images too. |
| `studio-app.mdx` | If you have started from any Remotion template except the Next.js and React Router templates, you currently have an app where you can start the Remotion Studio. |
| `svelte.mdx` | This guide explains how to integrate Remotion into a **Svelte** project. |
| `tailwind.mdx` | To scaffold a new video with TailwindCSS, pass `--tailwind` to the CLI and select a supported template. |
| `target-closed.mdx` | This error message **comes up when a Chromium Tab crashes**. |
| `telemetry.mdx` | Remotion sometimes sends telemetry that reports when a render has been made, using the `@remotion/licensing` package. |
| `terminology.mdx` | Here we try to explain the meaning of some terms that are used often in the documentation, but are not self-explanatory. |
| `testing.mdx` | Remotion components are regular React component, albeit they need to be wrapped in some extra contexts to render them. |
| `text-highlights.mdx` | We recommend `@remotion/rough-notation` to annotate text to add marker highlights, encircle words, box or strike through parts. |
| `third-party.mdx` | All animations in Remotion must be driven by the value returned by the `useCurrentFrame()` hook. |
| `three-canvas.mdx` | A wrapper for React Three Fiber's `<Canvas />` which synchronizes with Remotions `useCurrentFrame()`. |
| `three-webgpu-canvas.mdx` | A wrapper for React Three Fiber's `<Canvas>` which uses Three.js's `WebGPURenderer`. |
| `three.mdx` | is a package for integrating React Three Fiber with Remotion. |
| `timeout.mdx` | Debugging timeouts (Troubleshooting) |
| `timing.mdx` | All Remotion components share the same timing props. |
| `track.mdx` | `<Track>` puts children onto the same row in the Remotion Studio timeline. |
| `transforms.mdx` | Animation occurs when the visual properties of an element transform over time. |
| `transitions.mdx` | The `<TransitionSeries>` component lets you animate between absolutely positioned scenes. |
| `transparent-videos.mdx` | Chrome and Firefox support WebM videos with alpha channels. |
| `upgrading.mdx` | Upgrading Remotion (upgrade remotion) |
| `use-audio-data.mdx` | useAudioData() (@remotion/media-utils) |
| `use-buffer-state.mdx` | You can use this hook inside your composition to retrieve functions that can inform the Player that your component is currently loading data. |
| `use-current-frame.mdx` | With this hook, you can retrieve the current frame of the video. |
| `use-current-scale.mdx` | With this hook, you can retrieve the scale factor of the canvas. |
| `use-delay-render.mdx` | A React hook that provides scoped `delayRender()`, `continueRender()` and `cancelRender()` (from v4.0.374) functions for React components. |
| `use-img-and-iframe.mdx` | **Use `<Img />` or `<Gif />`** over the native `<img>` tag, `<Image>` from Next.js and CSS `background-image`. |
| `use-offthread-video-texture.mdx` | Allows you to use a video in React Three Fiber that is synchronized with Remotion's `useCurrentFrame()`, similar to `useVideoTexture()`, but uses `<OffthreadVideo>` instead. |
| `use-pixel-density.mdx` | Returns the pixel density factor for the current Remotion render or preview. |
| `use-remotion-environment.mdx` | A React hook that provides information about the current Remotion Environment. |
| `use-video-config.mdx` | With this hook, you can retrieve some info about the composition you are in. |
| `use-video-texture.mdx` | Allows you to use a video in React Three Fiber that is synchronized with Remotion's `useCurrentFrame()`. |
| `use-windowed-audio-data.mdx` | This is an alternative to `useAudioData()` that only loads a portion of the audio around the current frame. |
| `using-randomness.mdx` | Using randomness (Roll the dice) |
| `validating-user-videos.mdx` | When building an app that accepts user video uploads, you might want to validate whether the browser can play the video before uploading it. |
| `vercel-sandbox.mdx` | Vercel Sandbox allows you to render videos on-demand without managing Lambda or AWS infrastructure. |
| `vercel.mdx` | Remotion on Vercel (Deployment) |
| `version-mismatch.mdx` | It is important that all Remotion packages you install (`remotion`, `@remotion/player`, `@remotion/cli`, etc.) have the same version installed. |
| `version.mdx` | You may import this constant to get the current version of Remotion. |
| `video-and-audio.mdx` | Use `<Video>` and `<Audio>` from `@remotion/media` to add media to your composition. |
| `video-tags.mdx` | For new code, use `<Video />` from `@remotion/media`. |
| `video-uploads.mdx` | In an app where users can upload videos and edit them, we can create a better user experience by loading the video into a player even before the upload is finished. |
| `visual-editing.mdx` | You can edit the `defaultProps` of a `<Composition>` visually in the Remotion Studio. |
| `visualize-audio.mdx` | This function takes in `AudioData` (for example fetched by `useAudioData()`) and processes it for displaying as bars. |
| `vue.mdx` | This guide explains how to integrate Remotion into a **Vue.js** project. |
| `watch-static-file.mdx` | Watches for changes in a specific static file and invokes a callback function when the file changes, enabling dynamic updates in your Remotion projects. |
| `webgl.mdx` | Some Remotion packages and third-party libraries use WebGL or WebGPU during rendering, including `@remotion/effects`, `@remotion/three`, Skia and map libraries. |
| `why.mdx` | In a world with 1,000 video creation tools, why would you want to use Remotion? |
| `wrong-composition-mount.mdx` | Wrongly mounted `<Composition>` (Troubleshooting) |
| `your-first-video.mdx` | If this is your first experience with Remotion, you will have the easiest time by generating some content using Agent Skills. |

### accessibility/ (2 files)

| File | Description |
|------|-------------|
| `dev.mdx` | Accessibility conformance statement for the remotion.dev website, based on our WCAG 2.1 AA and RGAA 4.1.2 audit. |
| `pro.mdx` | Accessibility conformance statement for the remotion.pro website, based on the most recently executed VPAT. |

### ai/ (16 files)

| File | Description |
|------|-------------|
| `ai-saas-template.mdx` | We made a Next.js starter template for building AI-powered motion graphics products. |
| `bolt.mdx` | On bolt.new, you can use their online AI tool to prompt a Remotion video. |
| `chatbot.mdx` | We made a Chatbot that can answer simple questions about Remotion. |
| `claude-code-plugin.mdx` | Remotion maintains a plugin for Claude Code. |
| `codex-plugin.mdx` | Remotion maintains a plugin for Codex in the ChatGPT desktop app. |
| `coding-agents.mdx` | You can create videos just from prompting. |
| `cursor-plugin.mdx` | Remotion maintains a plugin for Cursor. |
| `dynamic-compilation.mdx` | If you have generated a Remotion component as a string (for example using LLMs), you can compile it in the browser to display a live preview. |
| `generate.mdx` | This guide shows an example of how to generate Remotion component code from natural language prompts using the Vercel AI SDK. |
| `github-copilot-plugin.mdx` | Remotion maintains a plugin for GitHub Copilot. |
| `index.mdx` | Building with Remotion and AI (Artificial Intelligence) |
| `kimi-code-plugin.mdx` | Remotion maintains a plugin for Kimi Code. |
| `mcp.mdx` | Restart the coding agent if it does not detect the newly installed skills. |
| `plugins.mdx` | Remotion maintains plugins for AI coding agents. |
| `skills.mdx` | Remotion maintains a list of Agent Skills that define best practices for working in Remotion projects. |
| `webmcp.mdx` | Remotion Studio exposes WebMCP tools that allow an AI agent to inspect and steer it. |

### animated-emoji/ (3 files)

| File | Description |
|------|-------------|
| `animated-emoji.mdx` | Displays an animated emoji from Google Fonts Animated Emoji. |
| `get-available-emoji.mdx` | Gets a list of available emoji that you can use with `<AnimatedEmoji>`. |
| `index.mdx` | This package wraps the Google Fonts Animated Emoji into Remotion components. |

### animation-utils/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Functions that support you in animating CSS styles. |
| `interpolate-styles.mdx` | This function provides a convenient way to interpolate styles based on a specified range of values, allowing for smooth animations between different styles. |
| `make-transform.mdx` | Applies a sequence of transformation functions to generate a combined CSS `transform` property. |

### audio/ (7 files)

| File | Description |
|------|-------------|
| `exporting.mdx` | If you export your video from Remotion, the audio is automatically included. |
| `pitch.mdx` | Use the `toneFrequency` prop to control the pitch of sound from both `<Video>` and `<Audio>`. |
| `sfx.mdx` | You can add sound effects to your Remotion video using the `<Audio>` tag. |
| `speed.mdx` | Use `playbackRate` to control the speed of both `<Video>` and `<Audio>`. |
| `trimming.mdx` | `<Video>` and `<Audio>` share the same timing props. |
| `visualization.mdx` | Remotion has APIs for visualizing audio, for example for creating audiograms or music visualizers. |
| `volume.mdx` | Use `volume` and `muted` to control sound from both `<Video>` and `<Audio>`. |

### browser-bundler/ (6 files)

| File | Description |
|------|-------------|
| `create-browser-bundle-runtime.mdx` | Load a virtual Remotion project once and apply later edits through Rspack hot updates and React Fast Refresh. |
| `create-browser-bundler.mdx` | Creates a browser-side compiler for virtual Remotion projects. |
| `create-browser-composition-observer.mdx` | Keep a registered Remotion root mounted and observe a selected composition's component, props, and video configuration. |
| `get-browser-composition.mdx` | Selects a registered composition by ID and resolves its video configuration and props. |
| `index.mdx` | Compile a virtual Remotion project in the browser and use a registered composition in your own UI, such as a `<Player>`. |
| `load-browser-bundle.mdx` | Executes a `BrowserBundle` and returns the root component it registered with `registerRoot()`. |

### canvas-capture/ (7 files)

| File | Description |
|------|-------------|
| `agentic-shot-setup.mdx` | Canvas Capture exposes WebMCP tools for framing a shot, checking a still preview, and saving a completed recording. |
| `development.mdx` | To load Canvas Capture as an unpacked extension, use a browser that meets the installation requirements. |
| `how-to-use.mdx` | After installing the extension, open a webpage and click the Remotion Canvas Capture icon in your browser toolbar. |
| `index.mdx` | Canvas Capture is a high-fidelity screen recorder for micro-interactions. |
| `installation.mdx` | Canvas Capture requires Chrome 157.0.8080.0 or newer. |
| `metadata.mdx` | Canvas Capture embeds cursor movements, clicks, and capture geometry in the video file as a JSON string under the `REMOTION_CAPTURE_DATA` metadata tag. |
| `privacy.mdx` | How the Remotion Canvas Capture extension handles recordings and related data. |

### captions/ (11 files)

| File | Description |
|------|-------------|
| `api.mdx` | The `@remotion/captions` package provides utilities for dealing with subtitles. |
| `caption.mdx` | This is a simple data structure for a caption. |
| `create-tiktok-style-captions.mdx` | Using this function, you can segment tokens to create "pages" of captions, as commonly seen on TikTok videos. |
| `displaying.mdx` | This guide explains how to display captions in Remotion, assuming you already have captions in the `Caption` format - see Transcribing audio for how to generate them. |
| `exporting.mdx` | This guide covers different ways to export subtitles from your Remotion video. |
| `importing.mdx` | If you have an existing subtitle file, you can import it into Remotion using `parseSrt()` for `.srt` files or `parseVtt()` for WebVTT (`.vtt`) files from `@remotion/captions`. |
| `index.mdx` | Learn how to add captions and subtitles to your Remotion videos. |
| `parse-srt.mdx` | Parses the contents of a SubRip file (`.srt`) and returns an array of `Caption` items. |
| `parse-vtt.mdx` | Parses the contents of a WebVTT file (`.vtt`) and returns an array of `Caption` items. |
| `serialize-srt.mdx` | Converts a two-dimensional array of `Caption` items into a string in the SubRip format (`.srt`). |
| `transcribing.mdx` | Transcribing audio (Captions) |

### cli/ (16 files)

| File | Description |
|------|-------------|
| `add.mdx` | Adds one or more Remotion packages to your project with the same version as your other Remotion packages. |
| `benchmark.mdx` | Measures render time by running a render multiple times, if desired with multiple compositions and concurrency values to compare against each other. |
| `bundle.mdx` | Creates a Remotion Bundle on the command line. |
| `cli.mdx` | Command line reference |
| `compositions.mdx` | Print list of composition IDs based on a path of an entry point. |
| `create-video.mdx` | Scaffold a new Remotion project. |
| `ffmpeg.mdx` | In order to use `ffmpeg` without having to directly install it, Remotion provides it via `npx remotion ffmpeg`. |
| `ffprobe.mdx` | In order to use `ffprobe` without having to directly install it, Remotion provides it via `npx remotion ffprobe`. |
| `gpu.mdx` | Prints out how the Chrome browser uses the GPUs. |
| `help.mdx` | Prints available commands and flags for the Remotion CLI. |
| `render.mdx` | Render a video or audio based on the entry point, the composition ID and save it to the output location. |
| `skills.mdx` | Install or update Agent Skills from `remotion-dev/skills`. |
| `still.mdx` | Render a still frame based on the entry point, the composition ID and save it to the output location. |
| `studio.mdx` | _Alias: npx remotion preview_ |
| `upgrade.mdx` | Upgrades all Remotion-related packages. |
| `versions.mdx` | Prints out which versions of Remotion packages are installed. |

### cli/browser/ (2 files)

| File | Description |
|------|-------------|
| `ensure.mdx` | Ensures that Remotion has a browser it can use for rendering. |
| `index.mdx` | Commands for managing the browser used by Remotion. |

### client-side-rendering/ (7 files)

| File | Description |
|------|-------------|
| `cancellation.mdx` | Both `renderMediaOnWeb()` and `renderStillOnWeb()` support cancellation via the `AbortSignal` API. |
| `how-it-works.mdx` | The biggest challenge of client-side rendering is that it is not possible to capture the browser viewport. |
| `html-in-canvas.mdx` | On supported Chromium-based browsers, `@remotion/web-renderer` can optionally capture full frames using the experimental HTML-in-canvas APIs. |
| `index.mdx` | Client-side rendering is a Remotion capability that allows you to render videos, images, and audio directly in the browser, without requiring server-side infrastructure. |
| `limitations.mdx` | The browser must support the WebCodecs API. |
| `migration.mdx` | We try to support as much code that was written for server-side rendering as possible. |
| `page-responsiveness.mdx` | The Web Renderer runs in the same browser tab as the page that starts the render. |

### cloudrun/ (27 files)

| File | Description |
|------|-------------|
| `api.mdx` | **See the setup guide for complete instructions on how to get started.** |
| `checklist.mdx` | You have implemented your solution with Remotion Cloud Run and are ready to launch your project into the world. |
| `cli.mdx` | To use the Remotion Cloud Run CLI, you first need to install it. |
| `deleteservice.mdx` | Deletes a deployed Cloud Run service based on its name. |
| `deletesite.mdx` | Removes a Remotion project from your Cloud Storage bucket. |
| `deployservice.mdx` | Creates a GCP Cloud Run service in your GCP project that will be able to render a video in the cloud. |
| `deploysite.mdx` | Takes a Remotion project, bundles it and uploads it to an Cloud Storage bucket. |
| `generate-env.mdx` | As GCP Cloud Shell has access to the project, a script can be run to generate a .env file with the required Service Account keys and Project ID. |
| `getServiceinfo.mdx` | Gets information about a service given its name and region. |
| `getorcreatebucket.mdx` | Creates a Cloud Storage bucket for Remotion Cloud Run in your GCP project. |
| `getregions.mdx` | Gets an array of all supported GCP regions of this release of Remotion Cloud Run. |
| `getservices.mdx` | Retrieves a list of Remotion services deployed to GCP Cloud Run. |
| `getsites.mdx` | Gets an array of Remotion projects in Cloud Storage, in your GCP project. |
| `instancecount.mdx` | Remotion Cloud Run will scale up and down as required to account for the number of requests being made to the service. |
| `light-client.mdx` | Light client (Cloud Run) |
| `limits.mdx` | Cloud Run Limits (Cloud Run) |
| `multiple-buckets.mdx` | Remotion Cloud Run supports **1 bucket per region and project** that you use Remotion Cloud Run in. |
| `permissions.mdx` | This document describes the necessary permissions for Remotion Cloud Run and explains to those interested why the permissions are necessary. |
| `region-selection.mdx` | Before going live with Remotion Cloud Run, you need to think about into which GCP region you are deploying your service and bucket (which will hold your sites and renders). |
| `rendermediaoncloudrun.mdx` | Kicks off a media rendering process on Remotion Cloud Run. |
| `renderstilloncloudrun.mdx` | Kicks off a still rendering process on Remotion Cloud Run. |
| `setup.mdx` | Navigate to the Manage Resources screen in Google Cloud Console. |
| `speculateservicename.mdx` | Speculate the name of the Cloud Run service that will be created by deployService() or its CLI equivalent, `npx remotion cloudrun services deploy`. |
| `status.mdx` | **Remotion Cloud Run is currently not being actively developed.** Critical bugs are fixed, but no new features are being added. |
| `testpermissions.mdx` | Makes a call to the Test Iam Permissions method of the Resource Manager API in GCP, which returns the list of permissions the Service Account has on the GCP Project. |
| `uninstall.mdx` | Of course we are bummed if you decided not to use Remotion Cloud Run anymore. |
| `upgrading.mdx` | Upgrading Cloud Run |

### cloudrun/cli/ (6 files)

| File | Description |
|------|-------------|
| `permissions.mdx` | Prints and validates the permissions that should be on the IAM role that is attached to the Service Account in GCP, as per the setup steps. |
| `regions.mdx` | Prints the GCP regions supported by the current version of Remotion Cloud run. |
| `render.mdx` | Using the `npx remotion cloudrun render` command, you can render a video on GCP. |
| `services.mdx` | The `npx remotion cloudrun services` command allows you to deploy, view and delete GCP Cloud Run services that can render videos and stills. |
| `sites.mdx` | The `npx remotion cloudrun sites` command allows to create, view and delete Remotion projects in your Cloud Storage bucket. |
| `still.mdx` | Using the `npx remotion cloudrun still` command, you can render an image on GCP. |

### cloudrun/cli/services/ (4 files)

| File | Description |
|------|-------------|
| `deploy.mdx` | Creates a new service in your GCP project. |
| `ls.mdx` | Lists the services that you have deployed to GCP in the selected region. |
| `rm.mdx` | Removes one or more services from your GCP project. |
| `rmall.mdx` | Removes all services from your GCP project for a certain region. |

### cloudrun/cli/sites/ (4 files)

| File | Description |
|------|-------------|
| `create.mdx` | You may pass an entry point as the first argument, otherwise the entry point will be determined. |
| `ls.mdx` | Get a list of sites. |
| `rm.mdx` | Removes a site (or multiple) from Cloud Storage by its ID. |
| `rmall.mdx` | Remove all sites in the selected GCP project. |

### codemods/ (37 files)

| File | Description |
|------|-------------|
| `add-canvas-capture-composition.mdx` | Creates an interactive Canvas Capture component and registers it in the project. |
| `add-composition.mdx` | Adds a `<Composition>` registration referencing an existing named component export. |
| `add-effect.mdx` | Appends an effect to a node's inline effects array and adds its import. |
| `add-element.mdx` | Inserts an element created with `createElement()` into a composition component or relative to an existing node, and adds the imports it needs. |
| `add-folder.mdx` | Adds an empty `<Folder>` to the registration tree. |
| `apply-codemod-changes.mdx` | Applies the file changes returned by a codemod to an in-memory project. |
| `create-element.mdx` | Describes an element to insert into source code. |
| `delete-composition.mdx` | Removes a composition or still registration. |
| `delete-effects.mdx` | Deletes selected effects from one or more nodes. |
| `delete-nodes.mdx` | Deletes one or more nodes identified by their references. |
| `detach-audio.mdx` | Mutes a video element and inserts a corresponding audio element beside it. |
| `duplicate-composition.mdx` | Copies a composition or still registration with a new ID. |
| `duplicate-effects.mdx` | Copies selected effects immediately after their originals. |
| `duplicate-nodes.mdx` | Duplicates one or more source nodes. |
| `get-node-props.mdx` | Inspects props and inline effects without executing the project. |
| `get-nodes.mdx` | Lists the nodes of a project file in source order. |
| `index.mdx` | Edit Remotion source in memory. |
| `move-composition.mdx` | Moves a composition into a folder, to the root, or beside another registration. |
| `move-folder.mdx` | Moves a folder and its contents within a registration file. |
| `rename-composition.mdx` | Changes a composition registration's ID. |
| `rename-folder.mdx` | Renames a folder while keeping its contents. |
| `reorder-effect.mdx` | Moves an effect to another index in the same effects array. |
| `reorder-nodes.mdx` | Moves one or more JSX nodes as a group before or after a sibling. |
| `resolve-composition-component.mdx` | Locates the component used by a composition, following supported project imports and re-exports. |
| `set-composition-default-props.mdx` | Replaces a composition's statically readable default props or adds them when missing. |
| `split-sequences.mdx` | Splits supported timing elements into two adjacent nodes. |
| `static-file-value.mdx` | Returns a `CodemodValue` that is written as a `staticFile()` call when it is inserted into source code. |
| `unwrap-folder.mdx` | Removes a `<Folder>` wrapper while keeping its contents in the same position. |
| `unwrap-node.mdx` | Removes a JSX element while keeping its children. |
| `update-composition-metadata.mdx` | Updates width, height, FPS, or duration on a composition registration. |
| `update-effect-keyframes.mdx` | Adds, removes, moves, or configures keyframes on an effect property. |
| `update-effect-props.mdx` | Updates explicit properties in an inline effect configuration. |
| `update-multiple-node-props.mdx` | Updates props on multiple nodes across project files in one operation. |
| `update-node-keyframes.mdx` | Adds, removes, moves, or configures keyframes on a node prop. |
| `update-node-props.mdx` | Updates node props, nested object properties, and supported text children. |
| `update-visual-controls.mdx` | Updates the default values of `visualControl()` calls in a source file while preserving surrounding source. |
| `wrap-node.mdx` | Wraps an existing node in an element created with `createElement()`. |

### effects/ (90 files)

| File | Description |
|------|-------------|
| `barrel-distortion.mdx` | A barrel distortion effect that bends canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `bevel-alpha.mdx` | Adds highlights and shadows along the alpha edges of text, logos, and shapes to give them a raised appearance. |
| `blur.mdx` | A Gaussian blur that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`.. |
| `brightness.mdx` | A brightness adjustment effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `burlap.mdx` | Adds a procedural woven burlap texture to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `checkerboard.mdx` | Adds a repeating checkerboard pattern to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `chromatic-aberration.mdx` | A linear chromatic aberration effect that separates the red and blue channels on canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `color-correction.mdx` | Applies common primary color adjustments in one pass. |
| `color-key.mdx` | A classic color key (chroma key) effect that turns pixels close to a chosen color transparent. |
| `contour-lines.mdx` | Adds a deterministic topographic contour-line overlay to canvas-based components such as `<Video>`, `<HtmlInCanvas>`, `<CanvasImage>` and `<Solid>`. |
| `contrast.mdx` | A contrast adjustment effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `corner-pin.mdx` | Pin a canvas-based component by moving its four source corners. |
| `curves.mdx` | Maps input color values to output values along a curve. |
| `cylinder.mdx` | Wraps canvas content around an open cylinder. |
| `dot-grid.mdx` | An effect that turns a canvas-based component into evenly sized source-color dots. |
| `drop-shadow.mdx` | Adds a blurred shadow behind canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `duotone.mdx` | A duotone effect that maps every non-transparent pixel to one of two colors based on its luminance. |
| `emboss.mdx` | Adds a procedural raised-line relief to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `evolve.mdx` | Reveals a canvas-based component from a direction or angle with an optional soft edge. |
| `exposure.mdx` | Adjusts exposure in photographic stops. |
| `film-burn.mdx` | Burns irregular holes into a canvas-based component, with charred rims and glowing orange edges. |
| `fisheye.mdx` | An ultra-wide-angle fisheye lens effect for canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `flannel.mdx` | Generates a plaid woven-fabric pattern on a `<Solid>`. |
| `fractal-noise.mdx` | Generates layered grayscale noise for clouds, smoke and organic textures. |
| `glow.mdx` | Adds a soft halo around bright parts of canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `grayscale.mdx` | A grayscale effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `gridlines.mdx` | Draws a configurable rectangular grid over a canvas-based component. |
| `halftone-linear-gradient.mdx` | A halftone effect that renders a grid of dots whose size changes across a linear gradient. |
| `halftone.mdx` | A halftone effect that turns luminance into a grid of circles, squares, or lines on canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `hue.mdx` | A hue rotation effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `index.mdx` | Effects that can be applied to Remotion-based canvas components. |
| `invert.mdx` | An invert effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `iris-wipe.mdx` | Erases the inside of a polygon or star from a canvas-based component. |
| `lens-blur.mdx` | Defocuses an image through a circular or polygonal aperture. |
| `levels.mdx` | Adjusts input black and white points, midtone gamma, and the output range for all RGB channels or one color channel. |
| `light-leak.mdx` | Applies a light leak overlay to canvas-based components such as `<Video>`, `<CanvasImage>` and `<Solid>`. |
| `light-trail.mdx` | Creates a directional light trail from bright or opaque parts of canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `linear-gradient-tint.mdx` | A tint effect whose color changes across a two-stop linear gradient. |
| `linear-gradient.mdx` | A two-stop linear gradient for canvas-based components such as `<Solid>`, `<Video>` and `<HtmlInCanvas>`. |
| `linear-progressive-blur.mdx` | A Gaussian blur whose radius changes across a two-stop linear gradient. |
| `linear-progressive-pixelate.mdx` | A pixelation effect whose block size changes across a two-stop linear gradient. |
| `lines.mdx` | Adds an alternating line pattern to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `liquid-contours.mdx` | Generates a two-color liquid contour background with broad, warped topographic bands. |
| `long-shadows.mdx` | Extends the alpha silhouette of a canvas-based component into a solid directional shadow. |
| `lut.mdx` | Applies an inline 3D color lookup table in the `.cube` format. |
| `mirror.mdx` | A mirror effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `noise-displacement.mdx` | Distorts a circular part of the source with deterministic procedural noise. |
| `noise.mdx` | Adds centered procedural noise to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `outline.mdx` | Draws a solid outline around the non-transparent pixels of a canvas-based component such as `<Video>`, `<HtmlInCanvas>` or `<Solid>`. |
| `page-turn.mdx` | Curls canvas content like a sheet of paper, with a shaded fold and a configurable back. |
| `paper.mdx` | Adds a procedural paper texture to canvas-based components such as `<Video>`, `<HtmlInCanvas>`, `<CanvasImage>` and `<Solid>`. |
| `pattern.mdx` | Repeats a scaled copy of a canvas source horizontally and vertically. |
| `pixel-dissolve.mdx` | A pixel dissolve effect that divides the frame into a grid and fades the cells out in a pseudo-random order while preserving the source image color. |
| `pixelate.mdx` | A pixelate effect that divides the image into rectangular blocks, making each block a single solid color sampled from the source. |
| `radial-progressive-blur.mdx` | A Gaussian blur whose radius changes from a center point to the edge of an ellipse. |
| `radial-progressive-pixelate.mdx` | A pixelation effect whose block size changes from the center to the edge of an ellipse. |
| `radial-wipe.mdx` | Erases a canvas-based component with a rotating wedge around a center point. |
| `rain-fall.mdx` | Adds falling rain to a canvas-based component, with wind, depth, and refracting or solid drops. |
| `region-blur.mdx` | Applies a Gaussian blur inside a rectangular or rounded region. |
| `rings.mdx` | Adds concentric circular bands to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `roughen-edges.mdx` | Roughens the alpha boundary of canvas-based components such as `<Video>`, `<HtmlInCanvas>`, `<CanvasImage>` and `<Solid>`. |
| `saturation.mdx` | A saturation effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `scale.mdx` | A scale effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `scanlines.mdx` | Adds horizontal scanlines to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `shadows-highlights.mdx` | Adjusts dark and bright tonal regions independently while preserving hue. |
| `shatter.mdx` | Breaks a canvas-based component into fragments that fly apart, tumble in 3D, and fall under gravity. |
| `shine.mdx` | Adds a glossy light sweep to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `shrinkwrap.mdx` | Adds a procedural plastic wrap layer to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<CanvasImage>`. |
| `skew.mdx` | Skews a canvas-based component horizontally and vertically. |
| `snow-fall.mdx` | Adds drifting snow to a canvas-based component, with wind, depth, and individual variations in size and motion. |
| `speckle.mdx` | Adds small random alpha holes to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `sphere.mdx` | Wraps canvas content around a sphere using an orthographic projection. |
| `starburst.mdx` | Renders a retro starburst ray pattern on canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `tear.mdx` | Tears a canvas-based component along a zigzag seam in any direction. |
| `thermal-vision.mdx` | Maps source luminance to a thermal heat-map color ramp. |
| `tile.mdx` | Repeats the non-transparent area of a canvas source across the canvas. |
| `tint.mdx` | A tint effect that blends a flat color over canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `turbulent-displace.mdx` | Warps a layer using evolving fractal noise. |
| `tv-signal-off.mdx` | Blends canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>` into a TV color bars test pattern. |
| `uv-translate.mdx` | A translate effect that moves a canvas-based component by normalized UV coordinates. |
| `venetian-blinds.mdx` | Reveals a canvas-based component through vertical or horizontal blinds. |
| `vibrance.mdx` | Adjusts muted colors more strongly than colors that are already saturated. |
| `vignette.mdx` | A vignette effect that darkens, colors, or fades out the edges of canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `wave.mdx` | A wave effect that can be applied to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `waves.mdx` | Adds repeating wavy bands to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `white-balance.mdx` | Corrects blue-to-amber temperature and green-to-magenta tint in footage and images. |
| `white-noise.mdx` | Replaces or blends canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>` with a grayscale white noise layer. |
| `xy-translate.mdx` | A translate effect that moves a canvas-based component by an absolute pixel offset. |
| `zigzag.mdx` | Adds repeating zig-zag bands to canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `zoom-blur.mdx` | A radial zoom blur that smears pixels away from a configurable center point. |

### elements/ (1 files)

| File | Description |
|------|-------------|
| `libraries.mdx` | An Element Library is a website that offers a collection of reusable video components, such as titles, backgrounds, and caption styles. |

### elevenlabs/ (3 files)

| File | Description |
|------|-------------|
| `detect-elevenlabs-transcript-format.mdx` | Recognizes the structure of an ElevenLabs Speech-to-Text response or segmented JSON export. |
| `elevenlabs-transcript-to-captions.mdx` | Converts an ElevenLabs Speech to Text API response or a JSON transcript exported from ElevenLabs into an array of `Caption` objects. |
| `index.mdx` | The `@remotion/elevenlabs` package converts the output of the ElevenLabs Speech to Text API into an array of `Caption` objects, making them compatible with other caption-related Remotion APIs. |

### enable-scss/ (2 files)

| File | Description |
|------|-------------|
| `enable-scss.mdx` | A function that modifies the default bundler configuration to make the necessary changes to support SASS/SCSS. |
| `overview.mdx` | This package provides a bundler override for enabling SCSS/SASS with Remotion. |

### fonts-api/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | The `@remotion/fonts` package provides an API for loading local fonts or remote fonts from a URL into a Remotion component. |
| `load-font.mdx` | Load a local font for use in Remotion. |

### gif/ (4 files)

| File | Description |
|------|-------------|
| `get-gif-duration-in-seconds.mdx` | Gets the duration in seconds of a GIF. |
| `gif.mdx` | Displays a GIF that synchronizes with Remotions `useCurrentFrame()`. |
| `index.mdx` | You can install this package from NPM to get a component for displaying GIFs that synchronize with Remotions `useCurrentFrame()`. |
| `preload-gif.mdx` | Call `preloadGif(src)` with the URL of the GIF that you would like to load and the GIF will be prepared for display in the `<Player>`. |

### google-fonts/ (7 files)

| File | Description |
|------|-------------|
| `get-available-fonts.mdx` | Array of all available fonts available in `@remotion/google-fonts`. |
| `get-info.mdx` | Each font exports a `getInfo()` function that returns information such as the available weights, styles and subsets. |
| `index.mdx` | One way of embedding fonts in Remotion is `@remotion/google-fonts`, sourcing fonts from Google Fonts. |
| `load-font-from-info.mdx` | Loads a Google Font based on some metadata that was obtained using `getInfo()`. |
| `load-font.mdx` | Load a Google Font for use in Remotion. |
| `load-variable-font-from-info.mdx` | Loads a variable Google Font from metadata obtained using `getInfo()`. |
| `load-variable-font.mdx` | Loads a Google Font as a variable font. |

### gsap/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Use GSAP timelines in Remotion. |
| `use-gsap-timeline.mdx` | Builds a paused GSAP timeline and seeks it to the current frame of the Remotion timeline. |

### install-whisper-cpp/ (6 files)

| File | Description |
|------|-------------|
| `convert-to-captions.mdx` | Click here to see documentation for this function that was previously on this page. |
| `download-whisper-model.mdx` | Downloads a Whisper.cpp model to a folder. |
| `index.mdx` | With Whisper.cpp, you can transcribe audio locally on your machine. |
| `install-whisper-cpp.mdx` | Installs a Whisper.cpp version into a folder. |
| `to-captions.mdx` | Converts the output from `transcribe()` into an array of `Caption` objects, so you can use the functions from `@remotion/captions`. |
| `transcribe.mdx` | Transcribes a media file by utilizing Whisper.cpp. |

### lambda/ (76 files)

| File | Description |
|------|-------------|
| `api.mdx` | **See the setup guide for complete instructions on how to get started.** |
| `approuterwebhook.mdx` | Simplifies the process of setting up a Lambda Webhook in your Next.js app which is using App Router. |
| `authentication.mdx` | Authentication (Lambda) |
| `autodelete.mdx` | Auto-delete renders (Lambda API) |
| `aws-china-regions.mdx` | AWS China regions (Lambda) |
| `bucket-naming.mdx` | Bucket names in Remotion Lambda (@remotion/lambda) |
| `bucket-security.mdx` | Before Remotion Lambda, v4.0.418, buckets created with Remotion Lambda used a `public-read` ACL. |
| `cancellation.mdx` | By default, a Lambda render continues until it finishes or fails. |
| `cancelrenderonlambda.mdx` | Signals the renderer functions of an in-progress Lambda render to stop. |
| `changelog.mdx` | From 3.0.0 onwards, the changelog is located in the main Remotion changelog on GitHub. |
| `checklist.mdx` | You have implemented your solution with Remotion Lambda and are ready to launch your project into the world. |
| `cli.mdx` | To use the Remotion Lambda CLI, you first need to install it. |
| `concurrency.mdx` | Remotion Lambda is a distributed video rendering system. |
| `cost-example.mdx` | This page shows estimations to help you better expect how much Remotion Lambda will cost. |
| `cost.mdx` | On this page, a few strategies for optimizing the cost of using Remotion Lambda are presented. |
| `custom-destination.mdx` | By default a render artifact is saved into the same S3 bucket as where the site is located under the key `renders/${renderId}/out.{extension}` (for example: `renders/hy0k2siao8/out.mp4`) |
| `custom-function-names.mdx` | While we recommend the default Lambda function names, the organization you work for might have naming conventions that you need to follow. |
| `custom-layers.mdx` | The Lambda function includes Chrome and base fonts by default. |
| `data-transfer-cost.mdx` | When rendering on Remotion Lambda, a headless browser is opened, which opens your bundle via the Serve URL. |
| `deletefunction.mdx` | Deletes a deployed Lambda function based on its name. |
| `deleterender.mdx` | Deletes a rendered video, audio, still, or image sequence and its associated metadata and separated audio. |
| `deletesite.mdx` | Removes a Remotion project from your S3 bucket. |
| `deployfunction.mdx` | Creates an AWS Lambda function in your AWS account that will be able to render a video in the cloud. |
| `deploysite.mdx` | `deploySite()` remains available and continues to bundle a Remotion project and upload it to an S3 bucket. |
| `deploysitefrombundle.mdx` | Uploads a local Remotion Bundle to an S3 bucket. |
| `disk-size.mdx` | Disk size (Lambda) |
| `downloadmedia.mdx` | Downloads a rendered video, audio, still, or image sequence to the disk of the machine this API is called from. |
| `downloadvideo.mdx` | This page has moved. |
| `estimateprice.mdx` | Calculates the AWS costs incurred for AWS Lambda given the region, execution duration and memory size based on the AWS Lambda pricing matrix. |
| `expresswebhook.mdx` | Simplifies the process of setting up a Lambda Webhook in your Express.js server. |
| `faq.mdx` | Some commonly asked questions about Remotion Lambda. |
| `faster-progress-polling.mdx` | By default, each `getRenderProgress()` call invokes the render function, which reads the render progress from S3. |
| `getawsclient.mdx` | This API exposes full access to the AWS SDK that Remotion uses under the hood. |
| `getcompositionsonlambda.mdx` | Gets the compositions inside a Lambda function. |
| `getfunctioninfo.mdx` | Gets information about a function given its name and region. |
| `getfunctions.mdx` | Retrieves a list of functions that Remotion deployed to AWS Lambda in a certain region. |
| `getorcreatebucket.mdx` | Creates a bucket for Remotion Lambda in your S3 account. |
| `getregions.mdx` | Gets an array of all supported AWS regions of this release of Remotion Lambda. |
| `getrenderprogress.mdx` | Gets the current status of a render initiated via `renderMediaOnLambda()` or `renderFramesOnLambda()`. |
| `getrolepolicy.mdx` | Returns an inline JSON policy to be assigned to the 'remotion-lambda-role' role that needs to be created in your AWS account. |
| `getsites.mdx` | Gets an array of Remotion projects in your S3 account. |
| `getuserpolicy.mdx` | Returns an inline JSON policy to be assigned to the AWS user whose credentials are being used for excuting CLI commands or calling Node.JS functions. |
| `go.mdx` | Triggering renders from Go |
| `how-lambda-works.mdx` | This document describes the procedure that gets executed when a Remotion Lambda video render is triggered. |
| `insights.mdx` | You may enable AWS Lambda Insights for your Remotion Lambda function. |
| `light-client.mdx` | The following methods and types can be imported from `@remotion/lambda/client`. |
| `limits.mdx` | Lambda Limits (Lambda) |
| `multiple-buckets.mdx` | The ideal setup is if you use **1 bucket per region and account** that you use Remotion Lambda in. |
| `naming-convention.mdx` | Function naming convention (Lambda) |
| `pagesrouterwebhooks.mdx` | Simplifies the process of setting up a Lambda Webhook in your Next.js app which is using Pages Router. |
| `permissions.mdx` | This document describes the necessary permissions for Remotion Lambda and explains to those interested why the permissions are necessary. |
| `php.mdx` | To trigger a Lambda render using PHP, install the `remotion/lambda` package using `composer`. |
| `presignurl.mdx` | Takes a private S3 object and turns it into a public URL by signing with your AWS credentials. |
| `proxy.mdx` | Remotion Lambda supports using HTTP/HTTPS proxies for all AWS API calls by accepting a `requestHandler` option that allows you to pass a custom AWS SDK request handler. |
| `python.mdx` | To trigger a Lambda render using Python, install the `remotion-lambda` package using `pip`, by executing `pip install remotion-lambda` from your python project. |
| `r2.mdx` | R2 by Cloudflare is a popular way to store renders because there are no egress fees. |
| `region-selection.mdx` | Before going live with Remotion Lambda, you need to think about into which AWS region you are deploying your function and bucket. |
| `renderframesonlambda.mdx` | Starts a distributed image sequence render on AWS Lambda. |
| `rendermediaonlambda.mdx` | Kicks off a render process on Remotion Lambda. |
| `renderstillonlambda.mdx` | Renders a still image inside a lambda function and writes it to the specified output location. |
| `rendervideoonlambda.mdx` | This page has moved. |
| `ruby.mdx` | To trigger a Lambda render using Ruby, install the `remotion_lambda` gem. |
| `runtime.mdx` | This page describes the environment that the Lambda function is running in. |
| `s3-public-access.mdx` | Since approximately April 25th 2023, AWS blocks the creation of public buckets without extra configuration, making it impossible to create new S3 buckets with Remotion version v3.3.86 and older. |
| `separate-environments.mdx` | The code that is inside the Lambda function is always the same, no matter if you are calling it from a local, staging or production environment. |
| `serverless-framework-integration.mdx` | This guide will show you how to use Remotion with Serverless Framework (serverless.com). |
| `setup.mdx` | Setup - Setup (Lambda) |
| `simulatepermissions.mdx` | Runs tests through the AWS Simulator ensuring that all the necessary permissions are set for the authenticated user. |
| `speculateFunctionName.mdx` | Speculate the name of the Lambda function that will be created by `deployFunction()` or its CLI equivalent, `npx remotion lambda functions deploy`. |
| `speed.mdx` | On this page, a few strategies are presented for making a render on Lambda as fast as possible. |
| `sqs.mdx` | This guide will show you how to use Amazon SQS (Simple Queue Service) and Remotion's `renderMediaOnLambda()` API. |
| `supabase.mdx` | This page shows how to trigger a Remotion Lambda render from a Supabase Edge Function. |
| `uninstall.mdx` | Of course we are bummed if you decided not to use Remotion Lambda anymore. |
| `upgrading.mdx` | Upgrade all packages to the newest version (`@remotion/lambda`, but also `remotion`, `@remotion/cli` etc.) |
| `validatewebhooksignature.mdx` | Validates that the signature that was received by a webhook endpoint is authentic. |
| `webhooks.mdx` | When rendering on AWS Lambda, Remotion can send webhooks to notify you when the render ends, successfully or with failures. |

### lambda/cli/ (8 files)

| File | Description |
|------|-------------|
| `compositions.mdx` | Print list of composition IDs from a serve URL, fetched from inside a Lambda function. |
| `functions.mdx` | The `npx remotion lambda functions` command allows you to deploy, view and delete AWS lambda functions that can render videos. |
| `policies.mdx` | Prints the necessary permissions to be inserted into the AWS console during setup. |
| `quotas.mdx` | Displays the AWS Lambda concurrency and burst limits currently being applied to your account and region. |
| `regions.mdx` | Prints the AWS regions supported by the current version of Remotion Lambda. |
| `render.mdx` | Using the `npx remotion lambda render` command, you can render a video in the cloud. |
| `sites.mdx` | The `npx remotion lambda sites` command allows to create, view and delete Remotion projects in your S3 bucket. |
| `still.mdx` | Using the `npx remotion lambda still` command, you can render a still frame in the cloud. |

### lambda/cli/functions/ (4 files)

| File | Description |
|------|-------------|
| `deploy.mdx` | Creates a new function in your AWS account. |
| `ls.mdx` | Lists the functions that you have deployed to AWS in the selected region. |
| `rm.mdx` | Removes one or more functions from your AWS infrastructure. |
| `rmall.mdx` | Removes all functions in a region from your AWS infrastructure. |

### lambda/cli/sites/ (4 files)

| File | Description |
|------|-------------|
| `create.mdx` | You may pass an entry point as the first argument, otherwise the entry point will be determined. |
| `ls.mdx` | Get a list of sites. |
| `rm.mdx` | Removes a site (or multiple) from S3 by its ID. |
| `rmall.mdx` | Remove all sites in the selected AWS region. |

### lambda/troubleshooting/ (6 files)

| File | Description |
|------|-------------|
| `bucket-disallows-acl.mdx` | The bucket does not allow ACLs (Lambda Troubleshooting) |
| `debug.mdx` | Debugging failed Lambda renders (Lambda) |
| `permissions.mdx` | If you get an error message saying that something is wrong with your AWS permissions, read this page for troubleshooting ideas. |
| `rate-limit.mdx` | AWS Rate Limit Troubleshooting (Lambda Troubleshooting) |
| `security-token.mdx` | Some regions that are supported by Remotion are not enabled by default in an AWS account. |
| `unrecognizedclientexception.mdx` | UnrecognizedClientException (Lambda Troubleshooting) |

### lambda/without-iam/ (3 files)

| File | Description |
|------|-------------|
| `ec2.mdx` | EC2 instances have credentials that can interact with the AWS SDK. |
| `example.mdx` | This is a write up of how to use the example for the technique described under "Using Lambda without IAM roles". |
| `index.mdx` | As documented on the `Permissions page`, the default way of using Remotion Lambda involves creating a Remotion user and assign it policies. |

### layout-utils/ (7 files)

| File | Description |
|------|-------------|
| `best-practices.mdx` | Take note of the following points to ensure correct measurements when using the `@remotion/layout-utils` package. |
| `debug.mdx` | When you find that the measurements that you are getting from `measureText()`, `fillTextBox()` or `fitText()` are off and are causing layout issues, follow the debugging instructions on this page. |
| `fill-text-box.mdx` | Calculate whether the text exceeds the box and wraps within the container. |
| `fit-text-on-n-lines.mdx` | Calculates the `fontSize` needed to fit a text into a given width while respecting a maximum number of lines. |
| `fit-text.mdx` | Calculates the `font-size` needed to fit a text into a given width. |
| `index.mdx` | Utility functions for creating dynamic layouts. |
| `measure-text.mdx` | Calculates the width and height of specified text to be used for layout calculations. |

### licensing/ (3 files)

| File | Description |
|------|-------------|
| `get-usage.mdx` | Allows you to get the current usage of your Remotion license. |
| `index.mdx` | This package allows holders of the Company License to send events to Remotion to track the usage of renders. |
| `register-usage-event.mdx` | Registers a usage point for your Remotion license. |

### light-leaks/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Light leak effects for Remotion videos. |
| `light-leak-effect.mdx` | Applies a WebGL2-based light leak effect to canvas-based components such as `<Video>`, `<CanvasImage>` and `<Solid>`. |
| `light-leak.mdx` | Renders a WebGL-based light leak effect. |

### lottie/ (6 files)

| File | Description |
|------|-------------|
| `getlottiemetadata.mdx` | Using this function, you can get the basic metadata such as dimensions, duration and framerate of a Lottie animation. |
| `index.mdx` | This package provides a component for displaying Lottie animations in Remotion. |
| `lottie-comp.mdx` | A JSON object that adheres to the Lottie schema. |
| `lottie-lottiefiles.mdx` | LottieFiles is a website where people can share and download Lottie files. |
| `lottie-remote.mdx` | In order to load a Lottie animation from a URL that has been put into the `public/` folder, use `fetch` and Remotion's `delayRender()` function. |
| `lottie-staticfile.mdx` | In order to load a Lottie animation from a file that has been put into the `public/` folder, use `staticFile()` in combination with `fetch` and Remotion's `delayRender()` function. |

### mac-cursors/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Render bundled macOS cursors and CSS custom cursors in Remotion. |
| `mac-os-cursor.mdx` | Renders a macOS cursor with its hotspot placed at the component origin. |

### media/ (6 files)

| File | Description |
|------|-------------|
| `audio.mdx` | `<Audio>` from `@remotion/media` is the recommended component for embedding audio in Remotion. |
| `cache.mdx` | `@remotion/media` keeps an in-memory cache for video and audio decoding. |
| `fallback.mdx` | Use `<Video>` and `<Audio>` from `@remotion/media` as the primary tags for media. |
| `index.mdx` | This package provides the recommended `<Video>` and `<Audio>` tags for embedding video and audio in Remotion. |
| `support.mdx` | The `<Audio>` and `<Video>` tags from `@remotion/media` are based on Mediabunny and WebCodecs. |
| `video.mdx` | `<Video>` from `@remotion/media` is the recommended component for embedding videos in Remotion. |

### media-parser/ (28 files)

| File | Description |
|------|-------------|
| `download-and-parse-media.mdx` | Same as `parseMedia()`, but also downloads the media file to disk. |
| `download-and-parse.mdx` | `@remotion/media-parser` allows you to download a remote video to disk, and while the media is downloading, retrieve metadata from it as soon as it is available. |
| `fast-and-slow.mdx` | `@remotion/media-parser` allows you to specify the information that you want to obtain. |
| `fields.mdx` | Available Fields (@remotion/media-parser) |
| `foreign-file-types.mdx` | If you pass a file that is not one of the supported formats, `parseMedia()` will throw an error. |
| `format-support.mdx` | Format support (@remotion/media-parser) |
| `has-been-aborted.mdx` | Pass an error to the `hasBeenAborted()` function to check if the error was thrown because you opted to abort the render. |
| `index.mdx` | This is a package that parses video and audio files to extract metadata and samples. |
| `media-parser-controller.mdx` | Pass `mediaParserController()` to `controller` to steer the `parseMedia()` function. |
| `metadata.mdx` | `parseMedia()` is deprecated. |
| `node-reader.mdx` | A reader for `@remotion/media-parser` that reads from the local file system using Node.js `fs` module. |
| `node-writer.mdx` | A writer for `@remotion/media-parser` that writes to the local file system using Node.js `fs` module. |
| `parse-media-on-server-worker.mdx` | This API is the same as `parseMediaOnWebWorker()`, but besides reading from URLs and `File` objects, you can also pass file paths that will be read using the `fs` module. |
| `parse-media-on-web-worker.mdx` | This API works the same as `parseMedia()`, except that it executes the parse on a Web Worker. |
| `parse-media.mdx` | Either a local file path, or a URL, or a `File` or `Blob` object. |
| `pause-resume-abort.mdx` | You can pause, resume and abort the parsing process. |
| `readers.mdx` | The `parseMedia()` function takes a reader interface which defines how the source is being read. |
| `runtime-support.mdx` | `@remotion/media-parser` works in the Browser, Node.js and Bun. |
| `samples.mdx` | With `parseMedia()`, you can extract video and audio samples from a variety of media formats. |
| `seeking.mdx` | In `parseMedia()`, `parseMediaOnWebWorker()` and `parseMediaOnServerWorker()`, you can seek to a different position in the media file. |
| `selecting-streams.mdx` | Some containers such as `.m3u8` (and in the future `.mpd`) support multiple equivalent streams, of which you are supposed to select one. |
| `tags.mdx` | `@remotion/media-parser` allows you to extract metadata that is embedded in video files, such as ID3 tags or EXIF data. |
| `types.mdx` | TypeScript Types Reference (@remotion/media-parser) |
| `universal-reader.mdx` | A reader for `@remotion/media-parser` that reads either from a URL, from a `File` or from a local file path. |
| `web-reader.mdx` | A reader for `@remotion/media-parser` that reads either from a URL or from a `File`. |
| `webcodecs-timescale.mdx` | `@remotion/media-parser` returns all samples with normalized timestamps in microseconds. |
| `webcodecs.mdx` | `parseMedia()` is able to extract tracks and samples from audio and video in a format that is suitable for usage with WebCodecs APIs. |
| `workers.mdx` | Parsing using `parseMedia()` will block the main thread of JavaScript, which is undesirable if you are displaying a UI in the browser, or are serving requests on a web server. |

### media-utils/ (3 files)

| File | Description |
|------|-------------|
| `create-smooth-svg-path.mdx` | This function takes points, usually generated from `visualizeAudioWaveform()` or `visualizeAudio()`, and adds SVG `C` (curve) statements inbetween them to create a smooth path. |
| `index.mdx` | A package providing utility functions for getting information about video and audio, and for visualizing audio. |
| `visualize-audio-waveform.mdx` | This function takes in `AudioData` (for example fetched by `useAudioData()`) and processes it for displaying as a waveform. |

### mediabunny/ (10 files)

| File | Description |
|------|-------------|
| `can-decode.mdx` | Before attempting to load a video into `<Video>`, you may want to check if the video can be decoded by the browser. |
| `extract-frames.mdx` | Extracting frames from a video file, for example to display a filmstrip in an editing interface, can be done using Mediabunny. |
| `extract-thumbnail.mdx` | Extracting a single frame (thumbnail) from a video file can be done using Mediabunny. |
| `formats.mdx` | Supported formats and codecs by Mediabunny (Mediabunny) |
| `frame-rate.mdx` | Getting the frame rate of a video (Mediabunny) |
| `index.mdx` | Mediabunny is an awesome multimedia library by Vanilagy. |
| `metadata.mdx` | Getting metadata from a video in JavaScript (Mediabunny) |
| `new-video.mdx` | `<Video>` and `<Audio>` from `@remotion/media` are the recommended tags for embedding video and audio in Remotion. |
| `version.mdx` | Mediabunny version used by Remotion (Mediabunny) |
| `webcodecs-bugs.mdx` | This page is a list of known WebCodecs issues in browsers that our community has filed. |

### miscellaneous/ (20 files)

| File | Description |
|------|-------------|
| `absolute-paths.mdx` | Why is it not possible to use absolute paths to require assets? |
| `automatic-duration.mdx` | It is currently **not supported** to derive the duration of a composition be from the content. |
| `changing-temp-dir.mdx` | During rendering, Remotion will write items into the temporary directory of the system. |
| `chrome-headless-shell.mdx` | Remotion is automatically installing "Chrome Headless Shell" into your `node_modules` in order to render videos. |
| `cloud-gpu-docker.mdx` | Follow these steps closely to render videos on EC2 in a Docker container. |
| `cloud-gpu.mdx` | Here is an example workflow for how to use the GPU in the cloud to render your videos using EC2 instances. |
| `cross-origin-isolation.mdx` | A website can either be cross-origin-isolated or not. |
| `embed-remotion-studio.mdx` | We currently don't allow embedding the Remotion Studio as a React component into your own app. |
| `emojis.mdx` | Emojis are always rendered as-is by the operating system. |
| `ffmpeg-license.mdx` | Remotion distributes a compiled FFmpeg binary under the GPLv2+ license. |
| `linux-dependencies.mdx` | If you are on Linux, Chrome Headless Shell requires some shared libraries to be installed. |
| `linux-single-process.mdx` | By default, Remotion starts the Chromium browser on Linux with the `--single-process` flag. |
| `live-streaming.mdx` | Remotion is not designed for broadcasting. |
| `nextjs.mdx` | The `@remotion/renderer` package has dependencies on a headless browser and FFmpeg, which makes using it in Next.js a bit tricky. |
| `no-remotion-app.mdx` | Remotion does not have a desktop or mobile app. |
| `pexels.mdx` | Timeouts with Pexels videos (Troubleshooting) |
| `render-in-browser.mdx` | Can I render videos in the browser? - Yes! |
| `render-on-edge.mdx` | Edge runtimes such as Vercel Edge functions and Cloudflare Workers promise to change how we compute in the future. |
| `ts-aliases.mdx` | TypeScript path aliases are not resolved by default. |
| `video-formats.mdx` | Remotion supports a variety of video codecs. |

### miscellaneous/snippets/ (3 files)

| File | Description |
|------|-------------|
| `combine-compositions.mdx` | How do I combine compositions? (FAQ) |
| `freeze-portions.mdx` | With the following snippet, two portions of a sequence are frozen and resumed afterwards from the point they were paused. |
| `player-in-iframe.mdx` | This snippet is useful if you want to isolate the global styles of your homepage from the global styles of the `<Player>`. |

### motion-blur/ (7 files)

| File | Description |
|------|-------------|
| `api.mdx` | Higher order components that create motion blur and trail effects. |
| `camera-motion-blur.mdx` | The `<CameraMotionBlur>` produces natural looking motion blur similar to what would be produced by a film camera. |
| `common-mistake.mdx` | The `<Trail>` and `<CameraMotionBlur>` components manipulate the React context that holds the current time. |
| `html-in-canvas-motion-blur.mdx` | `<HtmlInCanvasMotionBlur>` is the state-of-the-art recommended way to achieve motion blur in Remotion. |
| `index.mdx` | To realize a realistic motion blur, a frame needs to be duplicated multiple times and blended together. |
| `motion-blur.mdx` | `<MotionBlur>` - _Deprecated_. |
| `trail.mdx` | _Previously called `<MotionBlur>`._ |

### noise/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Utility functions that create a noise effect. |
| `noise-2d.mdx` | Creates 2D noise. |
| `noise-3d.mdx` | Creates 3D noise. |
| `noise-4d.mdx` | Creates 4D noise. |

### openai-whisper/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | The `@remotion/openai-whisper` package provides utilities for working with the OpenAI Whisper API. |
| `is-openai-whisper-transcript.mdx` | Recognizes structural signatures of an OpenAI Whisper verbose JSON transcription. |
| `openai-whisper-api-to-captions.mdx` | Turns the output from `openai.audio.transcriptions.create` from the openai package into an array of `Caption` objects. |

### options/ (105 files)

| File | Description |
|------|-------------|
| `allow-html-in-canvas.mdx` | When client-side rendering is enabled in the Studio, allow the experimental Chromium HTML-in-canvas API to be used for capturing frames. |
| `api-key.mdx` | API key for sending a usage event using `@remotion/licensing`. |
| `audio-bitrate.mdx` | Specify the target bitrate for the generated video. |
| `audio-codec.mdx` | Set the format of the audio that is embedded in the video. |
| `audio-latency-hint.mdx` | Sets the audio latency hint for the global `AudioContext` context that Remotion uses to play audio.`<br>`Possible values: `interactive`, `balanced`, `playback` |
| `beep-on-finish.mdx` | Whether the Remotion Studio tab should beep when the render is finished. |
| `binaries-directory.mdx` | The directory where the platform-specific binaries and libraries that Remotion needs are located. |
| `browser-executable.mdx` | Set a custom Chrome or Chromium executable path. |
| `browser.mdx` | Specify the browser which should be used for opening a tab. |
| `buffer-size.mdx` | The value for the `-bufsize` flag of FFmpeg. |
| `bundle-cache.mdx` | Enable or disable Webpack caching. |
| `chrome-mode.mdx` | One of `headless-shell, ` `chrome-for-testing`. |
| `codec.mdx` | H264 works well in most cases, but sometimes it's worth going for a different codec. |
| `coding-agent.mdx` | Set the default coding agent for Remotion Studio. |
| `color-space.mdx` | Color space to use for the video. |
| `concurrencies.mdx` | Specify which concurrency values should be used while benchmarking. |
| `concurrency.mdx` | How many CPU threads to use. |
| `config.mdx` | Specify a location for the Remotion config file. |
| `crf.mdx` | No matter which codec you end up using, there's always a tradeoff between file size and video quality. |
| `cross-site-isolation.mdx` | Enable Cross-Site Isolation in the Studio (sets Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy HTTP headers, required for `@remotion/whisper-web`). |
| `dark-mode.mdx` | Whether Chromium should pretend to be in dark mode by emulating the media feature 'prefers-color-scheme: dark'. |
| `default-premount-in-seconds.mdx` | Set the default premount duration in seconds for timed components in the Studio. |
| `delete-after.mdx` | Automatically delete the render after a certain period. |
| `disable-ask-ai.mdx` | If the Cmd + I shortcut of the Ask AI modal conflicts with your Studio, you can disable it using this. |
| `disable-canvas-tabs.mdx` | Enable or disable the tabs above the Studio canvas. |
| `disable-git-source.mdx` | Disables the Git Source being connected to the Remotion Studio. |
| `disable-headless.mdx` | If disabled, the render will open an actual Chrome window where you can see the render happen. |
| `disable-interactivity.mdx` | Enable or disable interactive editing in the Remotion Studio. |
| `disable-keyboard-shortcuts.mdx` | Enable or disable keyboard shortcuts in the Remotion Studio. |
| `disable-shared-memory-capture.mdx` | Disables shared-memory capture and uses regular JPEG or PNG screenshots instead. |
| `disable-web-security.mdx` | This will most notably disable CORS in Chrome among other security features. |
| `disallow-parallel-encoding.mdx` | Disallows the renderer from doing rendering frames and encoding at the same time. |
| `duration.mdx` | Overrides the duration in frames of the composition. |
| `editor.mdx` | Set the default editor for opening files from Remotion Studio. |
| `enable-cancellation.mdx` | Allows a Lambda render to be cancelled by pressing Ctrl+C while running `npx remotion lambda render`. |
| `enable-folder-expiry.mdx` | When deploying sites, enable or disable S3 Lifecycle policies which allow for renders to auto-delete after a certain time. |
| `enable-lambda-insights.mdx` | Enable Lambda Insights in AWS CloudWatch. |
| `enable-multiprocess-on-linux.mdx` | Removes the `--single-process` flag that gets passed to Chromium on Linux by default. |
| `enforce-audio-track.mdx` | Defaults to `false`. |
| `env-file.mdx` | Specify a location for a dotenv file. |
| `every-nth-frame.mdx` | This option may only be set when rendering GIFs. |
| `experimental-keep-audio-context-alive.mdx` | Keeps the shared `AudioContext` running while the Remotion Studio is paused. |
| `for-seamless-aac-concatenation.mdx` | If enabled, the audio is trimmed to the nearest AAC frame, which is required for seamless concatenation of AAC files. |
| `force-new.mdx` | Forces starting a new Studio instance even if one is already running on the same port for the same project. |
| `fps.mdx` | Overrides the frames per second of the composition. |
| `frame.mdx` | Which frame should be rendered when rendering a still. |
| `frames.mdx` | Render a subset of a video. |
| `gl.mdx` | Select the OpenGL renderer backend for Chromium. |
| `gop.mdx` | Set the maximum number of frames between two keyframes. |
| `hardware-acceleration.mdx` | One of "disable", "if-possible", or "required" . |
| `height.mdx` | Overrides the height of the composition. |
| `ignore-certificate-errors.mdx` | Results in invalid SSL certificates in Chrome, such as self-signed ones, being ignored. |
| `image-sequence-pattern.mdx` | Pattern for naming image sequence files. |
| `index.mdx` | A list of options that Remotion supports. |
| `ipv4.mdx` | Forces Remotion to bind to an IPv4 interface for the Studio server. |
| `is-production.mdx` | Pass `false` for a development render so it is not counted as a billable render on remotion.pro. |
| `jpeg-quality.mdx` | Sets the quality of the generated JPEG images. |
| `license-key.mdx` | License key for sending a usage event using `@remotion/licensing`. |
| `log.mdx` | One of `trace`, `verbose`, `info`, `warn`, `error`.`<br>` Determines how much info is being logged to the console.`<br>``<br>` Default `info`. |
| `max-rate.mdx` | The value for the `-maxrate` flag of FFmpeg. |
| `media-cache-size-in-bytes.mdx` | Specify the memory budget for decoded media cached by `<Video>` and `<Audio>` from `@remotion/media`, in bytes. |
| `metadata.mdx` | An object containing metadata to be embedded in the video. |
| `muted.mdx` | The Audio of the video will be omitted. |
| `no-open.mdx` | If specified, Remotion will not open a browser window when starting the Studio. |
| `number-of-gif-loops.mdx` | Number of GIF loops (Options) |
| `number-of-shared-audio-tags.mdx` | Set number of shared audio tags. |
| `offthreadvideo-cache-size-in-bytes.mdx` | From v4.0, Remotion has a cache for `<OffthreadVideo>` frames. |
| `offthreadvideo-video-threads.mdx` | The number of threads that`<OffthreadVideo>` can start to extract frames. |
| `on-browser-download.mdx` | Gets called when no compatible local browser is detected on the system and this API needs to download a browser. |
| `out-dir.mdx` | Define the location of the resulting bundle. |
| `overwrite.mdx` | If set to `false`, will prevent rendering to a path that already exists. |
| `package-manager.mdx` | Forces a specific package manager to be used. |
| `pixel-format.mdx` | Sets the pixel format in FFmpeg. |
| `port.mdx` | Set a custom HTTP server port for the Studio or the render process. |
| `prefer-lossless.mdx` | Uses a lossless audio codec, if one is available for the codec. |
| `preferred-effect-backend.mdx` | Prefer `webgpu`, `webgl2`, or `2d` implementations of effects. |
| `preserve-pitch-on-playback.mdx` | Preserve audio pitch when changing the Studio playback speed. |
| `preview-sample-rate.mdx` | Controls the sample rate used for audio playback during preview. |
| `props.mdx` | Input Props to pass to the selected composition of your video. |
| `prores-profile.mdx` | Set the ProRes profile. |
| `public-dir.mdx` | Define the location of the `public/ directory`. |
| `public-license-key.mdx` | The public license key for your company license, obtained from the License keys page on remotion.pro. |
| `public-path.mdx` | The path of the URL where the bundle is going to be hosted. |
| `repro.mdx` | Create a ZIP that you can submit to Remotion if asked for a reproduction. |
| `rspack.mdx` | Uses Rspack instead of Webpack as the bundler for the Studio or bundle. |
| `runs.mdx` | Specify how many times the video should be rendered during a benchmark. |
| `sample-rate.mdx` | Controls the sample rate of the output audio. |
| `scale.mdx` | Scales the output dimensions by a factor. |
| `separate-audio-to.mdx` | If set, the audio will not be included in the main output but rendered as a separate file at the location you pass. |
| `sequence-activity-limit.mdx` | Limit hidden scenes discovered by Sequence Activity in the Remotion Studio, including nested sequences and their ancestors. |
| `sequence.mdx` | Pass this flag to output an image sequence instead of a video. |
| `show-layer-frame-numbers.mdx` | Show the current frame number inside sequence layers in the Studio timeline. |
| `show-premounting.mdx` | Show premounting indicators in the Studio timeline. |
| `skip-skills.mdx` | Do not update installed Remotion Agent Skills while upgrading Remotion. |
| `still-image-format.mdx` | The image format to use when rendering a still. |
| `throw-if-site-exists.mdx` | Prevents accidential update of an existing site. |
| `timeout.mdx` | A number describing how long the render may take to resolve all `delayRender()` calls before it times out. |
| `user-agent.mdx` | Lets you set a custom user agent that the headless Chrome browser assumes. |
| `version.mdx` | Install a specific version. |
| `video-bitrate.mdx` | Specify the target bitrate for the generated video. |
| `video-image-format.mdx` | The image format to use when rendering frames for a video. |
| `webhook-custom-data.mdx` | Pass up to 1,024 bytes of a JSON-serializable object to the webhook. |
| `webpack-poll.mdx` | Enables Webpack polling instead of the file system event listeners for hot reloading. |
| `width.mdx` | Overrides the width of the composition. |
| `x264-preset.mdx` | Sets a x264 preset profile. |

### paths/ (23 files)

| File | Description |
|------|-------------|
| `center-path.mdx` | Translates an SVG path so that the center of the bounding box is at a target point. |
| `cut-path.mdx` | Cuts an SVG path at a specified length, returning the portion from the start to that length. |
| `evolve-path.mdx` | Animates an SVG path from being invisible to it's full length. |
| `extend-viewbox.mdx` | Widens an SVG `viewBox` in all directions by a certain scale factor. |
| `get-bounding-box.mdx` | Returns the bounding box of the given path, suitable for calculating the `viewBox` value that you need to pass to an SVG. |
| `get-instruction-index-at-length.mdx` | Gets the index of the instruction that is at the length of the path. |
| `get-length.mdx` | Gets the length of an SVG path. |
| `get-parts.mdx` | getParts() |
| `get-point-at-length.mdx` | Gets the coordinates of a point which is on an SVG path. |
| `get-subpaths.mdx` | Takes an SVG path and returns an array of subpaths. |
| `get-tangent-at-length.mdx` | Gets tangent values `x` and `y` of a point which is on an SVG path. |
| `index.mdx` | A package providing utility functions for dealing with SVG paths. |
| `interpolate-path.mdx` | Interpolates between two SVG paths. |
| `interpolate-paths.mdx` | Interpolates between SVG paths across multiple keyframes. |
| `normalize-path.mdx` | Removes all relative coordinates from a path and converts them into absolute coordinates. |
| `parse-path.mdx` | Parses an SVG string path into an array of `Instruction`'s. |
| `reduce-instructions.mdx` | Takes an array of `Instruction`'s and reduces the amount of instruction types them so the path only consists of `M`, `L`, `C` and `Z` instructions. |
| `reset-path.mdx` | Translates an SVG path so that the top-left corner of the bounding box is at `0, 0`. |
| `reverse-path.mdx` | Reverses a path so the end and start are switched. |
| `scale-path.mdx` | Allows you to grow or shrink the size of a path. |
| `serialize-instructions.mdx` | Takes an array of `Instruction`'s and serializes it into an SVG path string. |
| `translate-path.mdx` | Translates the path by the given `x` and `y` coordinates. |
| `warp-path.mdx` | Allows you to remap the coordinates of an SVG using a function in order to create a warp effect. |

### player/ (16 files)

| File | Description |
|------|-------------|
| `api.mdx` | A component which can be rendered in a regular React App (for example: Next.JS, Vite.js, Create React App) to display a Remotion video. |
| `autoplay.mdx` | Browsers place restrictions on websites that play audio without user interaction. |
| `best-practices.mdx` | Player - Best practices (@remotion/player) |
| `buffer-state.mdx` | Just like regular video players, it is possible that the content being displayed in the Player is not yet fully loaded. |
| `current-time.mdx` | When rendering a `<Player>` in your app, special considerations must be taken to prevent constant re-renders of the app or `<Player>` if the time changes. |
| `custom-controls.mdx` | You may want to implement custom controls for the `<Player>` component. |
| `index.mdx` | Using the Remotion Player you can embed Remotion videos in any React app and customize the video content at runtime. |
| `installation.mdx` | Installation (@remotion/player) |
| `media-keys.mdx` | Media Key Behavior (Web MediaSession API) (@remotion/player) |
| `playback-issues.mdx` | Playback issues in the `<Player>` (Playback issues) |
| `player-examples.mdx` | Examples for @remotion/player |
| `player-integration.mdx` | If you are using the player, a common desire is to share the code with your Remotion Studio and/or server-side rendering. |
| `preloading.mdx` | Assets should be preloaded before entering the scene so they are ready once they should be played. |
| `premounting.mdx` | Premounting mounts a component before it appears, giving images, videos, and animations time to load and initialize. |
| `scaling.mdx` | Sizing (@remotion/player) |
| `thumbnail.mdx` | A component which can be rendered in a regular React App (for example: for example: Next.JS, Vite.js, Create React App) to display a single frame of a video. |

### player/drag-and-drop/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | The Remotion Player supports reacting to mouse events allowing for building interactions on the canvas. |

### preload/ (6 files)

| File | Description |
|------|-------------|
| `preload-audio.mdx` | _This function is part of the `@remotion/preload` package._ |
| `preload-font.mdx` | _This function is part of the `@remotion/preload` package._ |
| `preload-image.mdx` | _This function is part of the `@remotion/preload` package._ |
| `preload-video.mdx` | _This function is part of the `@remotion/preload` package._ |
| `preload.mdx` | This package provides functions for preloading assets. |
| `resolve-redirect.mdx` | Follows the redirects of a URL (most commonly a remote video or audio) until the final URL is resolved and returns that. |

### remotion/ (1 files)

| File | Description |
|------|-------------|
| `html-in-canvas.mdx` | This component renders its children into a `<canvas>` using the browser’s HTML-in-canvas API and allows you to draw an effect using the Canvas 2D API, WebGL or WebGPU. |

### renderer/ (16 files)

| File | Description |
|------|-------------|
| `combine-chunks.mdx` | Combine multiple video or audio chunks into a single output file. |
| `ensure-browser.mdx` | Ensures a browser is locally installed so a Remotion render can be executed. |
| `ensure-ffmpeg.mdx` | _Removed from v4.0_ |
| `ensure-ffprobe.mdx` | _Removed from v4.0_ |
| `extract-audio.mdx` | Extracts the audio from a video source and saves it to the specified output path. |
| `get-compositions.mdx` | Gets a list of compositions defined in a Remotion project based on a Remotion Bundle by evaluating the Remotion Root. |
| `get-silent-parts.mdx` | Gets the silent parts of a video or audio in Node.js. |
| `get-video-metadata.mdx` | Gets metadata about a video file in Node.js. |
| `make-cancel-signal.mdx` | This function returns a signal and a cancel function that allows to you cancel a render triggered using `renderMedia()`, `renderStill()`, `renderFrames()` or `stitchFramesToVideo()` . |
| `open-browser.mdx` | Opens a Chrome or Chromium browser instance. |
| `render-frames.mdx` | Renders a series of images using Puppeteer and computes information for mixing audio. |
| `render-media.mdx` | Render a video or an audio programmatically. |
| `render-still.mdx` | Renders a single frame to an image and writes it to the specified output location. |
| `select-composition.mdx` | Evaluates the list of compositions from a Remotion Bundle by evaluating the Remotion Root and evaluating `calculateMetadata()` on the specified composition. |
| `stitch-frames-to-video.mdx` | Takes a series of images and audio information generated by `renderFrames()` and encodes it to a video. |
| `types.mdx` | TypeScript Types Reference (@remotion/renderer) |

### rive/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | This package provides a component for rendering Rive animations in Remotion. |
| `remotionrivecanvas.mdx` | This component can render a Rive animation so it synchronizes with Remotion's time. |

### rough-notation/ (8 files)

| File | Description |
|------|-------------|
| `box.mdx` | Draws an animated hand-drawn box around the text or element it wraps. |
| `bracket.mdx` | Draws animated hand-drawn brackets around the text or element it wraps. |
| `circle.mdx` | Draws an animated hand-drawn circle around the text or element it wraps. |
| `crossed-off.mdx` | Draws two animated crossing strokes over the text or element it wraps. |
| `highlight.mdx` | Draws an animated marker highlight behind the text or element it wraps. |
| `index.mdx` | Animated marker highlights, circles, boxes, underlines and other hand-drawn text annotations for Remotion videos. |
| `strike-through.mdx` | Draws an animated hand-drawn line through the text or element it wraps. |
| `underline.mdx` | Draws an animated hand-drawn underline below the text or element it wraps. |

### rounded-text-box/ (2 files)

| File | Description |
|------|-------------|
| `create-rounded-text-box.mdx` | Creates a SVG path for rendering a text box with rounded corners, as pioneered by TikTok and Instagram. |
| `index.mdx` | Create a TikTok-like multiline text box SVG path with rounded corners. |

### sdk/ (26 files)

| File | Description |
|------|-------------|
| `canvas.mdx` | Renders a Remotion composition using `<Player>`, registers its timeline tracks, and optionally overlays selection outlines that can be dragged to move elements. |
| `create-canvas-controller.mdx` | Creates a `CanvasController` to share between `<Canvas>` and your editor UI. |
| `create-canvas-hover-controller.mdx` | Creates a standalone `CanvasHoverController`. |
| `create-canvas-selection-controller.mdx` | Creates a standalone `CanvasSelectionController`. |
| `get-canvas-keyframe-change-override.mdx` | Shows a keyframe change on the canvas before the source is updated. |
| `get-canvas-keyframe-display-frame.mdx` | Converts a frame of a prop's `interpolate()` expression to a composition frame. |
| `get-canvas-keyframe-easing-change.mdx` | Returns the change that sets the easing between two adjacent keyframes of a prop. |
| `get-canvas-keyframe-easing-segments.mdx` | Describes the segments between the keyframes of a prop on the composition timeline, so a timeline can draw the line between two keyframes and let users select it to edit its easing. |
| `get-canvas-keyframe-settings-change.mdx` | Returns the change that writes the `interpolate()` options of a keyframed prop: the extrapolation, the `output` mode and `posterize`. |
| `get-canvas-keyframe-settings.mdx` | Reads the `interpolate()` options of a keyframed prop that an editor can change: the extrapolation, the `output` mode and `posterize`. |
| `get-canvas-keyframe-source-frame.mdx` | Converts a composition frame to the frame clock of a prop's `interpolate()` expression, in which keyframe operations are expressed. |
| `get-canvas-keyframe-toggle.mdx` | Describes the keyframe button of a prop at a frame: whether the prop can be keyframed, whether a keyframe exists at the frame, where the neighboring keyframes are, and the change that adds or... |
| `get-canvas-keyframe-value-change.mdx` | Returns the change that replaces the value of an existing keyframe. |
| `get-canvas-keyframes.mdx` | Places the keyframes of a prop on the composition timeline. |
| `get-canvas-prop-value-at-frame.mdx` | Reads the value a prop has at a composition frame according to the source code. |
| `get-canvas-selection-item-key.mdx` | Returns an identity string for a `CanvasSelectionItem`. |
| `get-canvas-sequence-node-path-info.mdx` | Returns the selection identity for a timeline track. |
| `get-canvas-sequence-reorder-insertion-index.mdx` | Calculates where a dragged group lands after removing its selected siblings. |
| `get-canvas-sequence-reorder-selection.mdx` | Returns the sequences to move when a timeline drag starts. |
| `get-canvas-sequence-source-location.mdx` | Returns where the JSX element of a timeline track was written, if the bundler recorded it. |
| `index.mdx` | Build a composition preview and layer list for a Remotion authoring interface. |
| `start-canvas-keyframe-drag.mdx` | Moves keyframes along the timeline with the pointer. |
| `use-canvas-controller.mdx` | Creates one `CanvasController` for a React component and returns the same object on later renders. |
| `use-canvas-hover.mdx` | Subscribes to the current hovered sequence in a React component. |
| `use-canvas-selection.mdx` | Subscribes a React component to a canvas selection controller. |
| `use-canvas-sequence-hover.mdx` | Connects one layer row to the shared canvas hover state. |

### sfx/ (33 files)

| File | Description |
|------|-------------|
| `anime-wow.mdx` | A URL pointing to a Anime wow WAV file. |
| `bone-crack.mdx` | A URL pointing to a Bone crack WAV file. |
| `bruh.mdx` | A URL pointing to a bruh sound effect WAV file. |
| `ding.mdx` | A URL pointing to a ding notification sound effect WAV file. |
| `dramatic-boomer.mdx` | A URL pointing to a Dramatic boomer WAV file. |
| `fah.mdx` | A URL pointing to a Fah meme WAV file. |
| `illuminati-confirmed.mdx` | A URL pointing to a Illuminati confirmed WAV file. |
| `index.mdx` | Sound effect URLs for general use. |
| `loading-lag.mdx` | A URL pointing to a Loading lag WAV file. |
| `mac-quack.mdx` | A URL pointing to a Mac quack WAV file. |
| `minecraft-hurt.mdx` | A URL pointing to a Minecraft hurt WAV file. |
| `mouse-click.mdx` | A URL pointing to a mouse click sound effect WAV file. |
| `nelly-ahh.mdx` | A URL pointing to a Nelly ahh WAV file. |
| `oh-my-god-vine.mdx` | A URL pointing to a Oh my god vine WAV file. |
| `omg-hell-nah.mdx` | A URL pointing to a Oh my god bro hell nah WAV file. |
| `page-turn.mdx` | A URL pointing to a page turn sound effect WAV file. |
| `price-is-right-fail.mdx` | A URL pointing to a Price Is Right fail horn WAV file. |
| `record-scratch.mdx` | A URL pointing to a record scratch sound effect WAV file. |
| `romance-meme.mdx` | A URL pointing to a Romance meme WAV file. |
| `sanctuary-guardian-what.mdx` | A URL pointing to a Sanctuary Guardian what meme WAV file. |
| `shutter-modern.mdx` | A URL pointing to a modern camera shutter sound effect WAV file. |
| `shutter-old.mdx` | A URL pointing to a vintage camera shutter sound effect WAV file. |
| `skedaddle.mdx` | A URL pointing to a Skedaddle WAV file. |
| `snapchat-notification.mdx` | A URL pointing to a Snapchat notification WAV file. |
| `spongebob-fail.mdx` | A URL pointing to a SpongeBob fail WAV file. |
| `triggered.mdx` | A URL pointing to a triggered meme sound effect WAV file. |
| `ui-switch.mdx` | A URL pointing to a UI switch sound effect WAV file. |
| `vine-boom.mdx` | A URL pointing to a Vine boom sound effect WAV file. |
| `whip.mdx` | A URL pointing to a whip sound effect WAV file. |
| `whoosh.mdx` | A URL pointing to a whoosh sound effect WAV file. |
| `wilhelm-scream.mdx` | A URL pointing to a Wilhelm scream WAV file. |
| `windows-xp-error.mdx` | A URL pointing to a Windows XP error sound effect WAV file. |
| `yippee.mdx` | A URL pointing to a Yippee WAV file. |

### shapes/ (23 files)

| File | Description |
|------|-------------|
| `arrow.mdx` | Renders an SVG element containing an arrow shape. |
| `callout.mdx` | Renders an SVG element containing a callout shape. |
| `circle.mdx` | Renders an SVG element drawing a circle. |
| `ellipse.mdx` | Renders an SVG element drawing an ellipse. |
| `heart.mdx` | Renders an SVG element containing a heart. |
| `index.mdx` | A package providing utility functions for generate SVG shapes. |
| `make-arrow.mdx` | Generates an SVG path for an arrow shape. |
| `make-callout.mdx` | Generates an SVG path for a callout shape. |
| `make-circle.mdx` | Generates a circle SVG path. |
| `make-ellipse.mdx` | Generates an ellipse SVG path. |
| `make-heart.mdx` | Generates an SVG path for a heart. |
| `make-pie.mdx` | Generates a piece of pie SVG path. |
| `make-polygon.mdx` | Generates a polygon SVG path. |
| `make-rect.mdx` | Generates an SVG rectangle. |
| `make-spark.mdx` | Generates a spark SVG path. |
| `make-star.mdx` | Generates an star SVG path. |
| `make-triangle.mdx` | Generates an SVG path for a triangle with the same length on all sides. |
| `pie.mdx` | Renders an SVG element drawing a pie piece. |
| `polygon.mdx` | Renders an SVG element containing a polygon. |
| `rect.mdx` | Renders an SVG element containing a rectangle. |
| `spark.mdx` | Renders an SVG element containing a four-point spark. |
| `star.mdx` | Renders an SVG element containing a star. |
| `triangle.mdx` | Renders an SVG element containing a triangle with same length on all sides. |

### skia/ (3 files)

| File | Description |
|------|-------------|
| `enable-skia.mdx` | A function that modifies the default Webpack configuration to make the necessary changes to support Skia. |
| `skia-canvas.mdx` | A React Native Skia `<Canvas />` component that wraps Remotion contexts. |
| `skia.mdx` | This package provides utilities useful for integrating React Native Skia with Remotion. |

### starburst/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Starburst ray effect for Remotion videos. |
| `starburst-effect.mdx` | Renders a WebGL2-based retro starburst ray pattern as an effect for canvas-based components such as `<Video>`, `<HtmlInCanvas>` and `<Solid>`. |
| `starburst.mdx` | Renders a static WebGL-based retro starburst ray pattern. |

### studio/ (30 files)

| File | Description |
|------|-------------|
| `api.mdx` | @remotion/studio |
| `browse-elements.mdx` | Remotion Elements are available directly inside Remotion Studio. |
| `delete-static-file.mdx` | Deletes a file from the `public` directory. |
| `deploy-server.mdx` | You can deploy the Remotion Studio to a long-running server in the cloud and make the render UI accessible to your team. |
| `deploy-static.mdx` | You can deploy the Remotion Studio as a static site, for example to Vercel or Netlify. |
| `focus-default-props-path.mdx` | Scrolls to a specific field in the default props editor. |
| `get-static-files.mdx` | Gets an array containing all files in the `public/` folder. |
| `go-to-composition.mdx` | Selects a composition in the Remotion Studio. |
| `interactivity-best-practices.mdx` | Interactivity best practices (Remotion Studio) |
| `interactivity.mdx` | Studio interactivity means visual edits that are written back to your codebase. |
| `make-component-interactive.mdx` | Remotion's default components are already interactive, meaning they can be selected and edited in the Studio. |
| `open-in-editor.mdx` | Setting the default code editor (Remotion Studio) |
| `pause.mdx` | Pauses playback in the Remotion Studio. |
| `play.mdx` | Starts playback in the Remotion Studio. |
| `quick-switcher.mdx` | Press `<kbd>`⌘/Ctrl + `<kbd>`K to invoke the quick switcher. |
| `reevaluate-composition.mdx` | Re-runs `calculateMetadata()` on the currently selected composition. |
| `remotion-dev-new.mdx` | Under remotion.new, we offer a Remotion Studio that runs entirely in the browser. |
| `restart-studio.mdx` | restartStudio() (@remotion/studio) |
| `save-default-props.mdx` | Saves the `defaultProps` for a composition back to the file that registers it, usually the root file. |
| `seek.mdx` | Jump to a position in time in the Remotion Studio. |
| `shortcuts.mdx` | Open the Shortcuts tab in the Studio settings to see the shortcuts for the current project. |
| `showing-unmounted-components.mdx` | By design, Remotion renders only the current frame. |
| `shut-down-studio.mdx` | Gracefully shuts down the Remotion Studio server. |
| `studio.mdx` | Using the Remotion Studio, you can preview your video, and if a server is connected, even render the video. |
| `toggle.mdx` | Toggles playback in the Remotion Studio. |
| `update-default-props.mdx` | updateDefaultProps() (@remotion/studio) |
| `visual-control.mdx` | Creates a control in the right sidebar of the Remotion Studio that allows you to change a value. |
| `watch-public-folder.mdx` | Watches for changes in the public directory and calls a callback function when a file is added, removed or modified. |
| `watch-static-file.mdx` | Watches for changes in a specific static file and invokes a callback function when the file changes, enabling dynamic updates in your Remotion projects. |
| `write-static-file.mdx` | Saves some content into a file in the `public` directory. |

### studio-protocol/ (10 files)

| File | Description |
|------|-------------|
| `add-element-library-to-studio.mdx` | Requests that a third-party Element Library is added to a recently focused Remotion Studio project. |
| `build-open-in-remotion-new-url.mdx` | Builds a URL that opens an Element in the browser-based editor at remotion.new. |
| `create-element-payload.mdx` | Creates a validated, versioned Element payload for `buildOpenInRemotionNewUrl()`, `setStudioDragData()`, and `installInStudio()`. |
| `index.mdx` | With this package, you can create payloads for passing content to Remotion Studio. |
| `install-in-studio.mdx` | Sends an Element payload to the containing Remotion Studio, or discovers a writable Studio when called outside one. |
| `is-inside-studio.mdx` | Checks whether your site is in Studio's Element Library modal. |
| `security.mdx` | An Element contains executable React source code and may declare npm dependencies. |
| `set-studio-drag-data.mdx` | Writes an Element payload and its preview metadata to a browser `DataTransfer` object. |
| `static-file-ref.mdx` | Reference an Element asset in `initialProps`. |
| `subscribe-to-caption-style-selection.mdx` | Studio's `<kbd>`Generate captions flow lets users select caption styles from third-party libraries. |

### tailwind/ (2 files)

| File | Description |
|------|-------------|
| `enable-tailwind.mdx` | A function that modifies the default bundler configuration to make the necessary changes to support TailwindCSS. |
| `overview.mdx` | This package provides utilities useful for integrating TailwindCSS with Remotion, as documented on our TailwindCSS page. |

### tailwind-v4/ (2 files)

| File | Description |
|------|-------------|
| `enable-tailwind.mdx` | A function that modifies the default bundler configuration to make the necessary changes to support TailwindCSS. |
| `overview.mdx` | This package provides utilities useful for integrating TailwindCSS v4 with Remotion, as documented on our TailwindCSS page. |

### terminology/ (14 files)

| File | Description |
|------|-------------|
| `bundle.mdx` | Once you have written your video in React, you need to bundle it using Webpack in order to render it. |
| `cloud-run-url.mdx` | For rendering on Cloud Run, this url is the address you use to access the service that performs the render. |
| `composition.mdx` | A composition is something you can render. |
| `concurrency.mdx` | Concurrency can mean different things depending on the context. |
| `entry-point.mdx` | The entry point is the file where the Remotion CLI and `@remotion/renderer` APIs will look for a Remotion project. |
| `input-props.mdx` | Input props are data that can be passed to a render in order to parametrize the video. |
| `player.mdx` | The Remotion Player is the React component `<Player>` that can be embedded into a React app. |
| `public-dir.mdx` | The public dir(ectory) is the directory in which you can put assets that can be loaded using `staticFile()`. |
| `remotion-root.mdx` | The Remotion Root is the directory in which Remotion commands get executed in. |
| `root-file.mdx` | The Root file is the file that exports the Root component, which renders one or more `<Composition />` components. |
| `sequence.mdx` | Sequence (Terminology) |
| `serve-url.mdx` | A Serve URL is a URL under which a Remotion Bundle is hosted. |
| `service-name.mdx` | For rendering on Cloud Run, this is the name of the deployed service. |
| `studio.mdx` | The Remotion Studio is the editor that opens that when you run `npx remotion studio`. |

### timeline/ (6 files)

| File | Description |
|------|-------------|
| `demo.mdx` | Here is a walkthrough of how to add the Remotion Timeline to your project. |
| `faq.mdx` | Yes, the template is fully compatible with React 18. |
| `index.mdx` | A paid customizable timeline component that integrates seamlessly with Remotion Player. |
| `render.mdx` | The `<Timeline />` component is in a sample Vite project, which is a frontend-only application. |
| `setup.mdx` | Timeline – Setup - 1. |
| `usage.mdx` | Import and use the timeline components in your React application. |

### transitions/ (5 files)

| File | Description |
|------|-------------|
| `audio-transitions.mdx` | _working from v4.0.58_ |
| `index.mdx` | This package provides the `<TransitionSeries>` component for transitioning between two scenes as well as timing presets. |
| `make-html-in-canvas-presentation.mdx` | Allows you to pass a shader to create a HTML-in-canvas-based `@remotion/transitions` presentation. |
| `transitionseries.mdx` | The `<TransitionSeries>` component behaves the same as the `<Series>` component, but allows for `<TransitionSeries.Transition>` and `<TransitionSeries.Overlay>` components to be rendered between... |
| `use-transition-progress.mdx` | A hook that can be used inside a child of a `<TransitionSeries.Sequence>` to get the progress of the transition to directly manipulate the objects inside the scene. |

### transitions/presentations/ (24 files)

| File | Description |
|------|-------------|
| `blur-slide.mdx` | A presentation that whips both scenes in one direction with a heavy motion blur, like a fast camera pan. |
| `book-flip.mdx` | A presentation that bends the outgoing and incoming scenes into a shaded page-turning book flip. |
| `clock-wipe.mdx` | A presentation where the exiting slide is wiped out in a circular movement, revealing the next slide underneath it. |
| `cross-zoom.mdx` | A presentation where both scenes zoom across a moving center with weighted blur samples. |
| `crosswarp.mdx` | A presentation that warps the outgoing scene and incoming scene against each other across the x-axis. |
| `cube.mdx` | A presentation where both the entering and exiting scene rotate with 3D perspective. |
| `custom-html-in-canvas.mdx` | Build a presentation that runs the entering and exiting scenes through a shader using the HTML-in-canvas APIs. |
| `custom.mdx` | This page describes how to create your own custom effect for `<TransitionSeries>`. |
| `dissolve.mdx` | A presentation that burns through the outgoing scene with a glowing edge, revealing the incoming scene where the burn has progressed past each pixel's luminance threshold. |
| `dreamy-zoom.mdx` | A presentation that zooms and rotates through a white flash between scenes. |
| `fade.mdx` | A simple fade animation. |
| `film-burn.mdx` | A presentation that combines a procedural film-burn glow overlay with a radial blur blend. |
| `flip.mdx` | A presentation where the exiting slide flips by 180 degrees, revealing the next slide on the back side. |
| `index.mdx` | A **presentation** together with a timing forms a transition. |
| `iris.mdx` | A presentation where the next scene is revealed through a circular mask that expands from the center outward, similar to a camera iris opening. |
| `linear-blur.mdx` | A presentation that applies a directional multi-sample blur while blending between scenes. |
| `none.mdx` | A presentation that has no visual effect on it's own. |
| `push-cut.mdx` | A hard editorial cut energized by a short punch-in on both scenes and a brief flash at the edit point. |
| `ripple.mdx` | A presentation that displaces the outgoing scene with a sinusoidal wave radiating from the center while crossfading to the incoming scene. |
| `slide.mdx` | A presentation where the entering slide pushes out the exiting slide. |
| `swap.mdx` | A presentation that swaps scenes with perspective, depth, and a floor reflection. |
| `wipe.mdx` | A presentation where the entering slide slides over the exiting slide. |
| `zoom-blur.mdx` | A presentation where the outgoing scene zooms out and rotates while the incoming scene zooms in from the opposite angle, blended with a radial zoom blur. |
| `zoom-in-out.mdx` | A presentation where the outgoing scene zooms in toward the viewer and crossfades into the incoming scene, which then zooms back out from a magnified state. |

### transitions/timings/ (4 files)

| File | Description |
|------|-------------|
| `custom.mdx` | This page describes how to create your own custom timings for `<TransitionSeries>`. |
| `index.mdx` | A **timing** together with a presentation forms a transition. |
| `lineartiming.mdx` | A timing function for `<TransitionSeries>` based on `interpolate()`. |
| `springtiming.mdx` | A timing function for `<TransitionSeries>` based on `spring()`. |

### troubleshooting/ (23 files)

| File | Description |
|------|-------------|
| `background-image.mdx` | Flickering when using background-image or mask-image (Common mistakes) |
| `broken-fast-refresh.mdx` | Fast Refresh not working (Troubleshooting) |
| `browser-launch.mdx` | Failed to launch the browser process (Troubleshooting) |
| `bundling-bundle.mdx` | Calling bundle() in bundled code (Troubleshooting) |
| `cannot-save-default-props.mdx` | Cannot save default props (Troubleshooting) |
| `could-not-be-parsed-as-a-value-list.mdx` | The source provided could not be parsed as a value list (Browser quirks) |
| `could-not-find-executable-to-run.mdx` | Could not determine executable to run (Troubleshooting) |
| `css-animations.mdx` | Don't use CSS animations in Remotion (Common mistakes) |
| `debug-failed-render.mdx` | Since JavaScript code is executing, it may happen that a render may due to an exception. |
| `defaultprops-too-big.mdx` | defaultProps too big - could not serialize (Troubleshooting) |
| `delay-render-proxy.mdx` | The error message `A delayRender() "Loading <Img> with src=http://localhost:3000/proxy?src=[...]&time=[...]&transparent=[...]" was called but not cleared after 28000ms. |
| `font-loading-errors.mdx` | Font loading errors (Troubleshooting) |
| `loading-root-component.mdx` | Root component Timeout (Troubleshooting) |
| `nextjs-image.mdx` | Flickering when using Next.js `<Image>` tag (Common mistakes) |
| `no-frame-found-at-position.mdx` | No frame found at position error message (Troubleshooting) |
| `render-stuck.mdx` | Debugging stuck renders (Troubleshooting) |
| `rosetta.mdx` | Running Remotion on Apple Silicon (M1 chip) under Rosetta can be up to 2x slower. |
| `sigkill.mdx` | Process quit with signal SIGKILL (Troubleshooting) |
| `subpixel-rendering.mdx` | Chrome will by default always render text to align it with the closest pixel. |
| `timed-out-page-function.mdx` | The error message "Timed out evaluating page function" |
| `video-flicker.mdx` | Avoiding flickering in `<Player>` (Frame-perfection) |
| `video-has-no-sound.mdx` | If you rendered a video with Remotion and it appears to have no audio, the most common cause is that you are playing it back in an editor that mutes video by default. |
| `webgl2-context.mdx` | Failed to acquire WebGL2 context (Troubleshooting) |

### vercel/ (8 files)

| File | Description |
|------|-------------|
| `add-bundle-to-sandbox.mdx` | Copies your Remotion bundle into a sandbox. |
| `create-sandbox.mdx` | Creates a new Vercel Sandbox with all Remotion dependencies installed, including system libraries, the compositor, and a browser. |
| `get-render-progress.mdx` | Polls the progress of a detached `renderMediaOnVercel()` call. |
| `index.mdx` | Render Remotion videos on Vercel Sandbox. |
| `render-media-on-vercel.mdx` | Renders a video inside a Vercel Sandbox. |
| `render-still-on-vercel.mdx` | Renders a still image inside a Vercel Sandbox. |
| `types.mdx` | TypeScript Types Reference (@remotion/vercel) |
| `upload-to-vercel-blob.mdx` | Uploads a file from the sandbox to Vercel Blob storage. |

### video-matting/ (10 files)

| File | Description |
|------|-------------|
| `can-use-video-matting.mdx` | Checks whether a video matting model can run in the current browser or Node.js environment. |
| `dispose-video-matting-model.mdx` | Releases the memory used by initialized video matting models. |
| `download-video-matting-model.mdx` | Downloads a video matting model from `remotion.media` into the browser or Node.js filesystem cache. |
| `get-available-models.mdx` | Returns metadata for the models supported by `separateVideoLayers()`. |
| `index.mdx` | Separate a video into opaque base and transparent foreground layers, locally in the browser or Node.js using WebGPU. |
| `is-video-matting-model-cached.mdx` | Checks whether all files hosted on `remotion.media` for a video matting model are present in the browser or Node.js filesystem cache. |
| `load-video-matting-model.mdx` | Initializes a previously downloaded video matting model on WebGPU. |
| `node.mdx` | You can use `@remotion/video-matting` in Node.js to separate a local video into an opaque base and a transparent foreground. |
| `remove-video-matting-model.mdx` | Removes a video matting model from memory and the persistent model cache. |
| `separate-video-layers.mdx` | Separates a video into an opaque base WebM and a foreground WebM with alpha. |

### videos/ (12 files)

| File | Description |
|------|-------------|
| `accelerated-video.mdx` | To speed up a video over time - for example to start with regular speed and then increasingly make it faster - we need to write some code to ensure we stay within Remotion's rules. |
| `align-duration.mdx` | Use `calculateMetadata()` to match the composition duration to a video or audio file. |
| `as-threejs-texture.mdx` | If you want to embed a video as a texture in Three.js, you have multiple options. |
| `different-segments-at-different-speeds.mdx` | If you have a video and want to show different sections of the video at different speeds, use the following snippet. |
| `index.mdx` | Use `<Video>` and `<Audio>` from `@remotion/media` to add video and sound to your composition. |
| `jumpcuts.mdx` | Sometimes you want to implement a "jump cut" to skip parts of a video (for example to cut out the "uhm"s). |
| `media-fragments.mdx` | For `<OffthreadVideo>` and `<Html5Video>`, Remotion by default adds Media fragment hashes to video URLs. |
| `prores.mdx` | ProRes is the most popular format for exchanging transparent videos. |
| `sequence.mdx` | Playing videos in sequence (How To) |
| `size-and-position.mdx` | Use the `style` prop of `<Video>` to size and position a video with CSS. |
| `transparency.mdx` | You can embed transparent videos in Remotion. |
| `video-manipulation.mdx` | You can draw frames of a `<Video>` from `@remotion/media`, `<OffthreadVideo>` or a `<Html5Video>` onto a `<canvas>` element using the `drawImage()` API. |

### web-renderer/ (8 files)

| File | Description |
|------|-------------|
| `can-render-media-on-web.mdx` | Checks if a render can be performed with the given configuration before actually attempting it. |
| `get-encodable-audio-codecs.mdx` | Returns the audio codecs that the current browser can encode for a given container format. |
| `get-encodable-video-codecs.mdx` | Returns the video codecs that the current browser can encode for a given container format. |
| `index.mdx` | This package allows you to render videos and stills directly in the browser, without requiring server-side infrastructure. |
| `render-frames-on-web.mdx` | Renders multiple frames of a composition in the browser. |
| `render-media-on-web.mdx` | Renders a video or audio in the browser. |
| `render-still-on-web.mdx` | Renders a single frame in the browser. |
| `types.mdx` | TypeScript Types Reference (@remotion/web-renderer) |

### webcodecs/ (31 files)

| File | Description |
|------|-------------|
| `buffer-writer.mdx` | A writer for `@remotion/webcodecs` that writes to an in-memory resizable ArrayBuffer. |
| `can-copy-audio-track.mdx` | Given an `AudioTrack`, determine if it can be copied to the output without re-encoding. |
| `can-copy-video-track.mdx` | Given a `VideoTrack`, determine if it can be copied to the output without re-encoding. |
| `can-reencode-audio-track.mdx` | Given an `AudioTrack`, determine if it can be re-encoded to another track. |
| `can-reencode-video-track.mdx` | Given a `VideoTrack`, determine if it can be re-encoded to another track. |
| `convert-a-video.mdx` | You can convert a video in the browser from one format to another using the `convertMedia()` function from `@remotion/webcodecs`. |
| `convert-audiodata.mdx` | Converts an `AudioData` object to a new `AudioData` object with a different sample rate or format, or both. |
| `convert-media.mdx` | Re-encodes a video using WebCodecs and `@remotion/media-parser`. |
| `create-audio-decoder.mdx` | This function is a wrapper around the `AudioDecoder` Web API. |
| `create-video-decoder.mdx` | This function is a wrapper around the `VideoDecoder` Web API. |
| `default-on-audio-track-handler.mdx` | This is the default function if no `onAudioTrack` handler is provided to `convertMedia()`. |
| `default-on-video-track-handler.mdx` | This is the default function if no `onVideoTrack` handler is provided to `convertMedia()`. |
| `extract-frames-on-web-worker.mdx` | Extracts frames from a video at specific timestamps using `parseMediaOnWebWorker()`. |
| `extract-frames.mdx` | Extracts frames from a video at specific timestamps using `parseMedia()`. |
| `fix-a-mediarecorder-video.mdx` | When recording a video with the `MediaRecorder` and `getUserMedia()` API, a WebM file gets created that may have some playback and compatibility issues. |
| `get-available-audio-codecs.mdx` | Given a container, get a list of audio codecs that the container can hold. |
| `get-available-containers.mdx` | Returns an array of available containers that can be used with the `convertMedia` function. |
| `get-available-video-codecs.mdx` | Given a container, get a list of video codecs that the container can hold. |
| `get-default-audio-codec.mdx` | Gets the default audio codec for a container that `@remotion/webcodecs` uses if no other audio codec was specified. |
| `get-default-video-codec.mdx` | Gets the default video codec for a container that `@remotion/webcodecs` uses if no other audio codec was specified. |
| `get-partial-audio-data.mdx` | Extracts audio data from a specific time window of a media file and returns it as a Float32Array. |
| `index.mdx` | This package provides APIs for converting videos in the browser. |
| `misconceptions.mdx` | This page clears up some common misconceptions surrounding the topic of WebCodecs. |
| `pause-resume-abort.mdx` | You can pause, resume and abort the conversion process. |
| `resample-audio-16khz.mdx` | For using Whisper, Whisper.cpp, `@remotion/install-whisper-cpp` and Whisper.wasm, you need to provide a 16-bit, 16KHz, WAVE audio file. |
| `resizing.mdx` | You can resize a video in the browser using `convertMedia()` function from the `@remotion/webcodecs` package. |
| `rotate-and-resize-video-frame.mdx` | Resizes and/or rotates a `VideoFrame` object. |
| `rotation.mdx` | You can rotate a video in the browser using the `@remotion/webcodecs` package to fix a video that has a bad orientation. |
| `track-transformation.mdx` | Track Transformation (@remotion/webcodecs) |
| `web-fs-writer.mdx` | A writer for `@remotion/webcodecs` that writes to the browser's file system using the File System Access API. |
| `webcodecs-controller.mdx` | Pass `webcodecsController()` to `controller` to steer the `convertMedia()` function. |

### whisper-web/ (8 files)

| File | Description |
|------|-------------|
| `can-use-whisper-web.mdx` | Checks if the current browser environment supports running `@remotion/whisper-web` with a specified model. |
| `download-whisper-model.mdx` | Downloads a Whisper model into IndexedDB. |
| `get-available-models.mdx` | Returns an array of all available Whisper models with their names and download sizes. |
| `get-loaded-models.mdx` | Returns an array of Whisper models that have already been downloaded and stored in the browser's IndexedDB storage. |
| `index.mdx` | Similar to @remotion/install-whisper-cpp but for the browser. |
| `resample-to-16khz.mdx` | Processes an audio `File` or `Blob` by decoding it, converting it to mono, and resampling it to a 16kHz `Float32Array`. |
| `to-captions.mdx` | Converts the output from `transcribe()` into an array of `Caption` objects, so you can use the functions from `@remotion/captions`. |
| `transcribe.mdx` | Transcribes pre-processed audio data (a `Float32Array` waveform) using WebAssembly-compiled Whisper.cpp, returning the transcription. |

### whisper-webgpu/ (13 files)

| File | Description |
|------|-------------|
| `can-use-whisper-webgpu.mdx` | Asynchronously checks whether WebGPU transcription is supported in the current environment. |
| `clear-stale-models.mdx` | Removes cached model files that are no longer returned by `getAvailableModels()`. |
| `dispose-whisper-model.mdx` | Releases the memory used by initialized Whisper pipelines. |
| `download-whisper-model.mdx` | Downloads a Whisper model from `remotion.media` into the Transformers.js cache. |
| `get-available-models.mdx` | Returns the timestamped Whisper models supported by `transcribe()`. |
| `index.mdx` | Transcribe audio locally in the browser or Node.js using timestamped Whisper models and WebGPU through Transformers.js, and convert the result to `@remotion/captions`. |
| `is-whisper-model-cached.mdx` | Checks whether all files needed for a timestamped Whisper model from `remotion.media` are present in the persistent Transformers.js cache. |
| `load-whisper-model.mdx` | Initializes a previously downloaded Whisper model on WebGPU. |
| `node.mdx` | You can use the `@remotion/whisper-webgpu` package in Node.js to transcribe audio. |
| `remove-whisper-model.mdx` | Removes a Whisper model from memory and the persistent Transformers.js cache. |
| `resample-to-16khz.mdx` | Decodes an audio `Blob`, mixes it to mono, and resamples it to the 16kHz waveform expected by `transcribe()`. |
| `to-captions.mdx` | Converts `transcribe()` output into `Caption` objects from `@remotion/captions`. |
| `transcribe.mdx` | Transcribes a 16kHz mono waveform and returns words with start and end timestamps. |

### zod-types/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | Includes utility types and Remotion-specific types for Zod. |
| `v3.mdx` | `@remotion/zod-types` creates schemas using Zod v4 since Remotion v4.0.426. |
| `z-color.mdx` | Using `zColor()`, you can specify in your schema that a string has to be a color. |
| `z-matrix.mdx` | With this type, you can visually edit a matrix in the Props Editor. |
| `z-textarea.mdx` | Using this type you can specify in your schema a string that will be displayed in the Remotion Studio as a multiline text area. |

