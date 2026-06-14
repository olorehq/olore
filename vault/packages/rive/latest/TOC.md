# rive Table of Contents

## Directory Map

```
contents/
├── getting-started.mdx          # Entry point: runtime overview and installation
├── android/                     # Android runtime (15 files)
├── apple/                       # iOS/macOS runtime (15 files)
├── choose-a-renderer/           # Renderer selection (2 files)
├── cpp/                         # C++ runtime (10 files)
├── flutter/                     # Flutter runtime (19 files)
├── react/                       # React runtime (16 files)
├── react-native/                # React Native runtime (19 files)
└── web/                         # Web/JS runtime (18 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/getting-started.mdx` |
| Android integration | `contents/android/android.mdx` |
| iOS/macOS integration | `contents/apple/apple.mdx` |
| Flutter integration | `contents/flutter/flutter.mdx` |
| React integration | `contents/react/react.mdx` |
| React Native / Expo | `contents/react-native/react-native.mdx` |
| Web / JS integration | `contents/web/web-js.mdx` |
| C++ integration | `contents/cpp/overview.mdx` |
| Renderer selection | `contents/choose-a-renderer/overview.mdx` |

## Detailed Structure

### Root (1 file)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Overview of all Rive runtimes and installation entry points |

### android/ (15 files)

| File | Description |
|------|-------------|
| `android.mdx` | Android runtime overview and setup |
| `animation-playback.mdx` | Playing animations on Android |
| `artboards.mdx` | Selecting artboards on Android |
| `caching-a-rive-file.mdx` | Caching Rive files on Android |
| `data-binding.mdx` | Data binding with View Models on Android |
| `fonts.mdx` | Loading and replacing fonts on Android |
| `inputs.mdx` | State machine inputs on Android |
| `layouts.mdx` | Layout configuration on Android |
| `loading-assets.mdx` | Loading external assets on Android |
| `logging.mdx` | Logging and debugging on Android |
| `playing-audio.mdx` | Playing audio on Android |
| `rendering-to-a-bitmap.mdx` | Rendering Rive animations to a bitmap on Android |
| `rive-events.mdx` | Handling Rive events on Android |
| `state-machines.mdx` | State machine playback on Android |
| `text.mdx` | Working with text on Android |

### apple/ (15 files)

| File | Description |
|------|-------------|
| `apple.mdx` | Apple (iOS/macOS) runtime overview and setup |
| `animation-playback.mdx` | Playing animations on Apple platforms |
| `artboards.mdx` | Selecting artboards on Apple platforms |
| `caching-a-rive-file.mdx` | Caching Rive files on Apple platforms |
| `data-binding.mdx` | Data binding with View Models on Apple platforms |
| `faq.mdx` | Frequently asked questions for Apple runtime |
| `fonts.mdx` | Loading and replacing fonts on Apple platforms |
| `inputs.mdx` | State machine inputs on Apple platforms |
| `layouts.mdx` | Layout configuration on Apple platforms |
| `loading-assets.mdx` | Loading external assets on Apple platforms |
| `logging.mdx` | Logging and debugging on Apple platforms |
| `playing-audio.mdx` | Playing audio on Apple platforms |
| `resource-usage.mdx` | Resource usage and memory management on Apple |
| `rive-events.mdx` | Handling Rive events on Apple platforms |
| `state-machines.mdx` | State machine playback on Apple platforms |
| `text.mdx` | Working with text on Apple platforms |

### choose-a-renderer/ (2 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Overview of available Rive renderers |
| `faq.mdx` | FAQ for renderer selection |

### cpp/ (10 files)

| File | Description |
|------|-------------|
| `overview.mdx` | C++ runtime overview |
| `getting-started.mdx` | Getting started with C++ runtime |
| `file-and-artboard.mdx` | Loading files and selecting artboards in C++ |
| `state-machines.mdx` | State machine playback in C++ |
| `data-binding.mdx` | Data binding in C++ |
| `asset-loading.mdx` | Loading external assets in C++ |
| `rendering-loop.mdx` | Rendering loop setup in C++ |
| `renderers.mdx` | Renderer options in C++ |
| `external-renderer.mdx` | Using an external renderer in C++ |
| `command-queue.mdx` | Command queue API in C++ |

### flutter/ (19 files)

| File | Description |
|------|-------------|
| `flutter.mdx` | Flutter runtime overview and setup |
| `animation-playback.mdx` | Playing animations in Flutter |
| `api-reference.mdx` | API reference for Flutter runtime |
| `artboards.mdx` | Selecting artboards in Flutter |
| `caching-a-rive-file.mdx` | Caching Rive files in Flutter |
| `custom-painter.mdx` | Using Rive with a custom Flutter painter |
| `custom-rive-renderobject.mdx` | Using a custom RenderObject in Flutter |
| `data-binding.mdx` | Data binding with View Models in Flutter |
| `faq.mdx` | Frequently asked questions for Flutter runtime |
| `fonts.mdx` | Loading and replacing fonts in Flutter |
| `inputs.mdx` | State machine inputs in Flutter |
| `layouts.mdx` | Layout configuration in Flutter |
| `loading-assets.mdx` | Loading external assets in Flutter |
| `playing-audio.mdx` | Playing audio in Flutter |
| `rive-events.mdx` | Handling Rive events in Flutter |
| `rive-native.mdx` | Rive Native for Flutter (C++ runtime via FFI) |
| `state-machines.mdx` | State machine playback in Flutter |
| `text.mdx` | Working with text in Flutter |
| `alternative-widget-setup.mdx` | Alternative widget setup patterns in Flutter |

### react/ (16 files)

| File | Description |
|------|-------------|
| `react.mdx` | React runtime overview and setup |
| `animation-playback.mdx` | Playing animations in React |
| `artboards.mdx` | Selecting artboards in React |
| `caching-a-rive-file.mdx` | Caching Rive files in React |
| `data-binding.mdx` | Data binding with View Models in React |
| `fonts.mdx` | Loading and replacing fonts in React |
| `inputs.mdx` | State machine inputs in React |
| `layouts.mdx` | Layout configuration in React |
| `loading-assets.mdx` | Loading external assets in React |
| `parameters-and-return-values.mdx` | useRive hook parameters and return values |
| `playing-audio.mdx` | Playing audio in React |
| `preloading-wasm.mdx` | Preloading WASM for React runtime |
| `rendering-to-a-bitmap.mdx` | Rendering Rive animations to a bitmap in React |
| `rive-events.mdx` | Handling Rive events in React |
| `state-machines.mdx` | State machine playback in React |
| `text.mdx` | Working with text in React |

### react-native/ (19 files)

| File | Description |
|------|-------------|
| `react-native.mdx` | React Native runtime overview and setup |
| `adding-rive-to-expo.mdx` | Adding Rive to an Expo project |
| `animation-playback.mdx` | Playing animations in React Native |
| `artboards.mdx` | Selecting artboards in React Native |
| `caching-a-rive-file.mdx` | Caching Rive files in React Native |
| `data-binding.mdx` | Data binding with View Models in React Native |
| `error-handling.mdx` | Error handling in React Native |
| `fonts.mdx` | Loading and replacing fonts in React Native |
| `inputs.mdx` | State machine inputs in React Native |
| `layouts.mdx` | Layout configuration in React Native |
| `loading-assets.mdx` | Loading external assets in React Native |
| `loading-rive-files.mdx` | Loading Rive files in React Native |
| `native-version-customization.mdx` | Customizing native runtime versions |
| `playing-audio.mdx` | Playing audio in React Native |
| `props.mdx` | Rive component props reference for React Native |
| `rive-events.mdx` | Handling Rive events in React Native |
| `rive-ref-methods.mdx` | Rive ref methods API for React Native |
| `state-machines.mdx` | State machine playback in React Native |
| `text.mdx` | Working with text in React Native |

### web/ (18 files)

| File | Description |
|------|-------------|
| `web-js.mdx` | Web (JS) runtime overview and setup |
| `animation-playback.mdx` | Playing animations in Web runtime |
| `artboards.mdx` | Selecting artboards in Web runtime |
| `caching-a-rive-file.mdx` | Caching Rive files in Web runtime |
| `canvas-vs-webgl.mdx` | Choosing between Canvas and WebGL renderers |
| `data-binding.mdx` | Data binding with View Models in Web runtime |
| `faq.mdx` | Frequently asked questions for Web runtime |
| `fonts.mdx` | Loading and replacing fonts in Web runtime |
| `inputs.mdx` | State machine inputs in Web runtime |
| `layouts.mdx` | Layout configuration in Web runtime |
| `loading-assets.mdx` | Loading external assets in Web runtime |
| `low-level-api-usage.mdx` | Low-level API usage for Web runtime |
| `playing-audio.mdx` | Playing audio in Web runtime |
| `preloading-wasm.mdx` | Preloading WASM for Web runtime |
| `rive-events.mdx` | Handling Rive events in Web runtime |
| `rive-parameters.mdx` | Rive constructor parameters reference |
| `state-machines.mdx` | State machine playback in Web runtime |
| `text.mdx` | Working with text in Web runtime |
