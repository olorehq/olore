# rive Table of Contents

## Directory Map

```
contents/
├── advanced-topic/     # advanced-topic (2 files)
├── android/            # Android runtime docs (17 files)
├── apple/              # Apple (iOS/macOS) runtime docs (20 files)
├── choose-a-renderer/  # choose-a-renderer (2 files)
├── community-runtimes/ # community-runtimes (4 files)
├── cpp/                # C++ runtime docs (10 files)
├── flutter/            # Flutter runtime docs (21 files)
├── react/              # React runtime docs (21 files)
├── react-native/       # React Native runtime docs (22 files)
├── web/                # Web (JS) runtime docs (22 files)
└── (root)              # Overview pages (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Pick a runtime | `contents/getting-started.mdx` |
| React Native / Expo setup | `contents/react-native/react-native.mdx`, `contents/react-native/adding-rive-to-expo.mdx` |
| React (web) | `contents/react/react.mdx` |
| Web JS | `contents/web/web-js.mdx` |
| Flutter | `contents/flutter/flutter.mdx` |
| Apple | `contents/apple/apple.mdx` |
| Android | `contents/android/android.mdx` |
| C++ | `contents/cpp/overview.mdx` |
| Data binding (any runtime) | `contents/{runtime}/data-binding.mdx` |
| Renderer choice | `contents/choose-a-renderer/overview.mdx` |

## Detailed Structure

### (root) (3 files)

| File | Description |
|------|-------------|
| `demos.mdx` | Runtime demos and starter projects |
| `getting-started.mdx` | Getting started with the Rive runtimes: platform overview and install links |
| `runtime-sizes.mdx` | Package and binary sizes of each runtime |

### advanced-topic/ (2 files)

| File | Description |
|------|-------------|
| `format.mdx` | Specification of the binary .riv file format |
| `rml.mdx` | Rive Markup Language (RML), the XML text format for Rive scenes |

### android/ (17 files)

| File | Description |
|------|-------------|
| `android.mdx` | Android runtime getting started: install, add Rive views, load files |
| `animation-playback.mdx` | Deprecated direct animation playback (prefer state machines) in the Android runtime |
| `artboards.mdx` | Selecting which artboard to render in the Android runtime |
| `caching-a-rive-file.mdx` | Caching and reusing loaded Rive files in the Android runtime |
| `data-binding.mdx` | Data binding with View Models (properties, enums, lists, images, triggers) in the Android runtime |
| `fonts.mdx` | Loading and replacing fonts at runtime in Android |
| `inputs.mdx` | Deprecated state machine inputs in Android (prefer data binding) |
| `layouts.mdx` | Layout and fit/alignment of graphics within the view in Android |
| `legacy-getting-started.mdx` | Getting started with the legacy Android API |
| `loading-assets.mdx` | Loading and replacing out-of-band assets (images, fonts, audio) in Android |
| `logging.mdx` | Logging configuration and debugging output in Android |
| `migrating-from-legacy.mdx` | Migrating from the legacy Android runtime API to the new runtime |
| `playing-audio.mdx` | Playing Rive audio events in Android |
| `rendering-to-a-bitmap.mdx` | Rendering screenshots or video frames to a bitmap in Android |
| `rive-events.mdx` | Deprecated Rive events handling in Android (prefer data binding) |
| `state-machines.mdx` | Playing and controlling state machines in Android |
| `text.mdx` | Deprecated text run manipulation in Android (prefer data binding) |

### apple/ (20 files)

| File | Description |
|------|-------------|
| `animation-playback.mdx` | Deprecated direct animation playback (prefer state machines) in the Apple (iOS/macOS) runtime |
| `apple.mdx` | Apple runtime getting started: install, Swift/SwiftUI/UIKit usage, Worker and views |
| `artboards.mdx` | Selecting which artboard to render in the Apple (iOS/macOS) runtime |
| `caching-a-rive-file.mdx` | Caching and reusing loaded Rive files in the Apple (iOS/macOS) runtime |
| `data-binding.mdx` | Data binding with View Models (properties, enums, lists, images, triggers) in the Apple (iOS/macOS) runtime |
| `faq.mdx` | Frequently asked questions and common issues for Apple (iOS/macOS) |
| `fonts.mdx` | Loading and replacing fonts at runtime in Apple (iOS/macOS) |
| `gpu-canvas.mdx` | Enabling GPU Canvas for 3D and shader content in Apple (iOS/macOS) |
| `inputs.mdx` | Deprecated state machine inputs in Apple (iOS/macOS) (prefer data binding) |
| `layouts.mdx` | Layout and fit/alignment of graphics within the view in Apple (iOS/macOS) |
| `loading-assets.mdx` | Loading and replacing out-of-band assets (images, fonts, audio) in Apple (iOS/macOS) |
| `logging.mdx` | Logging configuration and debugging output in Apple (iOS/macOS) |
| `migrating-from-legacy.mdx` | Migrating from the legacy Apple (iOS/macOS) runtime API to the new runtime |
| `migration-guides.mdx` | Migrating between major versions of the Apple (iOS/macOS) runtime |
| `playing-audio.mdx` | Playing Rive audio events in Apple (iOS/macOS) |
| `resource-usage.mdx` | Memory and CPU resource usage notes for the Apple runtime |
| `rive-events.mdx` | Deprecated Rive events handling in Apple (iOS/macOS) (prefer data binding) |
| `semantics.mdx` | Accessibility semantics for screen readers in Apple (iOS/macOS) |
| `state-machines.mdx` | Playing and controlling state machines in Apple (iOS/macOS) |
| `text.mdx` | Deprecated text run manipulation in Apple (iOS/macOS) (prefer data binding) |

### choose-a-renderer/ (2 files)

| File | Description |
|------|-------------|
| `faq.mdx` | Rive Renderer FAQ |
| `overview.mdx` | Choosing and configuring the renderer used by Rive runtimes |

### community-runtimes/ (4 files)

| File | Description |
|------|-------------|
| `angular.mdx` | Community Angular wrapper (not Rive maintained) |
| `c-sharp.mdx` | Community C# (UWP) runtime |
| `qt-quick.mdx` | Community Qt Quick runtime drawing Rive in QML |
| `rive-cmp.mdx` | Community Compose Multiplatform wrapper (RiveCMP) |

### cpp/ (10 files)

| File | Description |
|------|-------------|
| `asset-loading.mdx` | Resolving out-of-band images, fonts, and audio in C++ |
| `command-queue.mdx` | Driving the C++ runtime from another thread via CommandQueue and CommandServer |
| `data-binding.mdx` | Driving Rive ViewModels from C++ |
| `external-renderer.mdx` | Plugging Rive into your own GPU backend or 2D engine |
| `file-and-artboard.mdx` | Importing .riv data and instancing artboards in C++ |
| `getting-started.mdx` | Building rive-cpp and rendering a .riv file |
| `overview.mdx` | C++ runtime overview: load, advance, render |
| `renderers.mdx` | Setting up the GPU backend per platform |
| `rendering-loop.mdx` | The beginFrame-to-flush rendering loop and how to drive it |
| `state-machines.mdx` | Advancing state machines and forwarding pointer events in C++ |

### flutter/ (21 files)

| File | Description |
|------|-------------|
| `alternative-widget-setup.mdx` | Alternative Flutter widget setup and file caching techniques |
| `animation-playback.mdx` | Deprecated direct animation playback (prefer state machines) in the Flutter runtime |
| `api-reference.mdx` | Link to the Flutter API reference on pub.dev |
| `artboards.mdx` | Selecting which artboard to render in the Flutter runtime |
| `caching-a-rive-file.mdx` | Caching and reusing loaded Rive files in the Flutter runtime |
| `custom-painter.mdx` | Advancing and painting an artboard manually with a custom painter |
| `custom-rive-renderobject.mdx` | Extending RiveRenderObject for advanced rendering |
| `data-binding.mdx` | Data binding with View Models (properties, enums, lists, images, triggers) in the Flutter runtime |
| `faq.mdx` | Frequently asked questions and common issues for Flutter |
| `flutter.mdx` | Flutter runtime getting started: install, widgets, controllers, usage |
| `fonts.mdx` | Loading and replacing fonts at runtime in Flutter |
| `inputs.mdx` | Deprecated state machine inputs in Flutter (prefer data binding) |
| `layouts.mdx` | Layout and fit/alignment of graphics within the view in Flutter |
| `loading-assets.mdx` | Loading and replacing out-of-band assets (images, fonts, audio) in Flutter |
| `migration-guide.mdx` | Migrating between major versions of the Flutter runtime, with breaking changes |
| `playing-audio.mdx` | Playing Rive audio events in Flutter |
| `rive-events.mdx` | Deprecated Rive events handling in Flutter (prefer data binding) |
| `rive-native.mdx` | rive_native plugin integrating the Rive Renderer and C++ runtime |
| `semantics.mdx` | Accessibility semantics for screen readers in Flutter |
| `state-machines.mdx` | Playing and controlling state machines in Flutter |
| `text.mdx` | Deprecated text run manipulation in Flutter (prefer data binding) |

### react/ (21 files)

| File | Description |
|------|-------------|
| `animation-playback.mdx` | Deprecated direct animation playback (prefer state machines) in the React runtime |
| `artboards.mdx` | Selecting which artboard to render in the React runtime |
| `best-practices.mdx` | Performance and usage best practices for Rive in React |
| `caching-a-rive-file.mdx` | Caching and reusing loaded Rive files in the React runtime |
| `data-binding.mdx` | Data binding with View Models (properties, enums, lists, images, triggers) in the React runtime |
| `focus.mdx` | Keyboard focus navigation (Tab and arrows) in React |
| `fonts.mdx` | Loading and replacing fonts at runtime in React |
| `gpu-canvas.mdx` | Enabling GPU Canvas for 3D and shader content in React |
| `inputs.mdx` | Deprecated state machine inputs in React (prefer data binding) |
| `layouts.mdx` | Layout and fit/alignment of graphics within the view in React |
| `loading-assets.mdx` | Loading and replacing out-of-band assets (images, fonts, audio) in React |
| `migration-guides.mdx` | Migrating between major versions of the React runtime |
| `parameters-and-return-values.mdx` | React API: useRive parameters and return values |
| `playing-audio.mdx` | Playing Rive audio events in React |
| `preloading-wasm.mdx` | Preloading the WASM module to speed up first render in React |
| `react.mdx` | React runtime getting started: install and render/control Rive files |
| `rendering-to-a-bitmap.mdx` | Rendering screenshots or video frames to a bitmap in React |
| `rive-events.mdx` | Deprecated Rive events handling in React (prefer data binding) |
| `semantics.mdx` | Accessibility semantics for screen readers in React |
| `state-machines.mdx` | Playing and controlling state machines in React |
| `text.mdx` | Deprecated text run manipulation in React (prefer data binding) |

### react-native/ (22 files)

| File | Description |
|------|-------------|
| `adding-rive-to-expo.mdx` | Setting up Rive in an Expo project (prebuild, dev client) |
| `animation-playback.mdx` | Deprecated direct animation playback (prefer state machines) in the React Native runtime |
| `artboards.mdx` | Selecting which artboard to render in the React Native runtime |
| `caching-a-rive-file.mdx` | Caching and reusing loaded Rive files in the React Native runtime |
| `data-binding.mdx` | Data binding with View Models (properties, enums, lists, images, triggers) in the React Native runtime |
| `error-handling.mdx` | Handling errors in Rive React Native |
| `fonts.mdx` | Loading and replacing fonts at runtime in React Native |
| `gpu-canvas.mdx` | Enabling GPU Canvas for 3D and shader content in React Native |
| `inputs.mdx` | Deprecated state machine inputs in React Native (prefer data binding) |
| `layouts.mdx` | Layout and fit/alignment of graphics within the view in React Native |
| `loading-assets.mdx` | Loading and replacing out-of-band assets (images, fonts, audio) in React Native |
| `loading-rive-files.mdx` | Loading Rive files from assets, URLs, and resources |
| `migration-guide.mdx` | Migrating between major versions of the React Native runtime, with breaking changes |
| `native-version-customization.mdx` | Overriding the native iOS/Android Rive SDK versions |
| `playing-audio.mdx` | Playing Rive audio events in React Native |
| `props.mdx` | Props of the Rive component |
| `react-native.mdx` | React Native runtime getting started: install, components, hooks, usage |
| `rive-events.mdx` | Deprecated Rive events handling in React Native (prefer data binding) |
| `rive-ref-methods.mdx` | Methods available on the Rive ref |
| `semantics.mdx` | Accessibility semantics for screen readers in React Native |
| `state-machines.mdx` | Playing and controlling state machines in React Native |
| `text.mdx` | Deprecated text run manipulation in React Native (prefer data binding) |

### web/ (22 files)

| File | Description |
|------|-------------|
| `animation-playback.mdx` | Deprecated direct animation playback (prefer state machines) in the Web (JS) runtime |
| `artboards.mdx` | Selecting which artboard to render in the Web (JS) runtime |
| `caching-a-rive-file.mdx` | Caching and reusing loaded Rive files in the Web (JS) runtime |
| `canvas-vs-webgl.mdx` | Choosing between @rive-app/webgl2 and @rive-app/canvas packages |
| `data-binding.mdx` | Data binding with View Models (properties, enums, lists, images, triggers) in the Web (JS) runtime |
| `faq.mdx` | Frequently asked questions and common issues for Web (JS) |
| `focus.mdx` | Keyboard focus navigation (Tab and arrows) in Web (JS) |
| `fonts.mdx` | Loading and replacing fonts at runtime in Web (JS) |
| `gpu-canvas.mdx` | Enabling GPU Canvas for 3D and shader content in Web (JS) |
| `inputs.mdx` | Deprecated state machine inputs in Web (JS) (prefer data binding) |
| `layouts.mdx` | Layout and fit/alignment of graphics within the view in Web (JS) |
| `loading-assets.mdx` | Loading and replacing out-of-band assets (images, fonts, audio) in Web (JS) |
| `low-level-api-usage.mdx` | Using low-level JS APIs to construct Rive scenes |
| `migration-guides.mdx` | Migrating between major versions of the Web (JS) runtime |
| `playing-audio.mdx` | Playing Rive audio events in Web (JS) |
| `preloading-wasm.mdx` | Preloading the WASM module to speed up first render in Web (JS) |
| `rive-events.mdx` | Deprecated Rive events handling in Web (JS) (prefer data binding) |
| `rive-parameters.mdx` | Rive instance constructor parameters and API |
| `semantics.mdx` | Accessibility semantics for screen readers in Web (JS) |
| `state-machines.mdx` | Playing and controlling state machines in Web (JS) |
| `text.mdx` | Deprecated text run manipulation in Web (JS) (prefer data binding) |
| `web-js.mdx` | Web (JS) runtime getting started: install, load, play |
