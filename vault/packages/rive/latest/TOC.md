# rive Documentation Structure

## Directory Map

```
contents/
├── react-native/       # React Native runtime: setup, animation, state machines, data binding (20 files)
├── react/              # React (web) runtime: hooks, state machines, data binding (17 files)
├── web/                # Web JS runtime: canvas, WebGL, low-level API (17 files)
├── flutter/            # Flutter runtime: widgets, custom painter, state machines (17 files)
├── android/            # Android runtime: Kotlin API, animations, data binding (16 files)
├── apple/              # iOS/macOS runtime: Swift API, animations, data binding (16 files)
├── choose-a-renderer/  # Renderer selection and FAQ (2 files)
├── advanced-topic/     # .riv file format, bitmap rendering (2 files)
└── (root)              # Runtime sizes reference (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| React Native setup | `contents/react-native/react-native.mdx` |
| React Native Expo | `contents/react-native/adding-rive-to-expo.mdx` |
| React (web) setup | `contents/react/react.mdx` |
| Web JS setup | `contents/web/web-js.mdx` |
| Flutter setup | `contents/flutter/flutter.mdx` |
| iOS/macOS setup | `contents/apple/apple.mdx` |
| Android setup | `contents/android/android.mdx` |
| Data binding | `contents/react-native/data-binding.mdx` |
| State machines | `contents/react-native/state-machines.mdx` |
| Renderer selection | `contents/choose-a-renderer/overview.mdx` |

## Detailed Structure

### react-native/ (20 files)

| File | Description |
|------|-------------|
| `react-native/react-native.mdx` | Getting started with Rive React Native runtime |
| `react-native/adding-rive-to-expo.mdx` | Setting up Rive in an Expo project |
| `react-native/loading-rive-files.mdx` | Loading .riv files from assets or URLs |
| `react-native/animation-playback.mdx` | Playing and controlling animations |
| `react-native/state-machines.mdx` | State machine playback and inputs |
| `react-native/data-binding.mdx` | Data binding with View Models |
| `react-native/inputs.mdx` | State machine inputs (legacy) |
| `react-native/layouts.mdx` | Layout and fit options |
| `react-native/artboards.mdx` | Selecting and switching artboards |
| `react-native/loading-assets.mdx` | Loading external images and fonts at runtime |
| `react-native/fonts.mdx` | Custom font loading |
| `react-native/text.mdx` | Text run manipulation |
| `react-native/playing-audio.mdx` | Audio event playback |
| `react-native/rive-events.mdx` | Listening to Rive events |
| `react-native/rive-ref-methods.mdx` | Ref API methods reference |
| `react-native/props.mdx` | Component props reference |
| `react-native/caching-a-rive-file.mdx` | Caching loaded Rive files for reuse |
| `react-native/error-handling.mdx` | Error handling patterns |
| `react-native/native-version-customization.mdx` | Customizing native runtime versions |
| `react-native/migration-guide.mdx` | Migrating between major versions |

### react/ (17 files)

| File | Description |
|------|-------------|
| `react/react.mdx` | Getting started with Rive React runtime |
| `react/animation-playback.mdx` | Playing and controlling animations |
| `react/state-machines.mdx` | State machine playback and hooks |
| `react/data-binding.mdx` | Data binding with View Models |
| `react/inputs.mdx` | State machine inputs (legacy) |
| `react/layouts.mdx` | Layout and fit options |
| `react/artboards.mdx` | Selecting and switching artboards |
| `react/loading-assets.mdx` | Loading external assets at runtime |
| `react/fonts.mdx` | Custom font loading |
| `react/text.mdx` | Text run manipulation |
| `react/playing-audio.mdx` | Audio event playback |
| `react/rive-events.mdx` | Listening to Rive events |
| `react/parameters-and-return-values.mdx` | useRive hook parameters and return values |
| `react/caching-a-rive-file.mdx` | Caching loaded Rive files |
| `react/preloading-wasm.mdx` | Preloading the WASM runtime |
| `react/rendering-to-a-bitmap.mdx` | Off-screen bitmap rendering |
| `react/migration-guides.mdx` | Migrating between major versions |

### web/ (17 files)

| File | Description |
|------|-------------|
| `web/web-js.mdx` | Getting started with Rive Web JS runtime |
| `web/animation-playback.mdx` | Playing and controlling animations |
| `web/state-machines.mdx` | State machine playback |
| `web/data-binding.mdx` | Data binding with View Models |
| `web/inputs.mdx` | State machine inputs (legacy) |
| `web/layouts.mdx` | Layout and fit options |
| `web/artboards.mdx` | Selecting and switching artboards |
| `web/loading-assets.mdx` | Loading external assets at runtime |
| `web/fonts.mdx` | Custom font loading |
| `web/text.mdx` | Text run manipulation |
| `web/playing-audio.mdx` | Audio event playback |
| `web/rive-events.mdx` | Listening to Rive events |
| `web/rive-parameters.mdx` | Rive constructor parameters reference |
| `web/caching-a-rive-file.mdx` | Caching loaded Rive files |
| `web/canvas-vs-webgl.mdx` | Choosing between Canvas and WebGL renderers |
| `web/low-level-api-usage.mdx` | Low-level WASM API usage |
| `web/preloading-wasm.mdx` | Preloading the WASM runtime |
| `web/faq.mdx` | Frequently asked questions |
| `web/migration-guides.mdx` | Migrating between major versions |

### flutter/ (17 files)

| File | Description |
|------|-------------|
| `flutter/flutter.mdx` | Getting started with Rive Flutter runtime |
| `flutter/animation-playback.mdx` | Playing and controlling animations |
| `flutter/state-machines.mdx` | State machine playback |
| `flutter/data-binding.mdx` | Data binding with View Models |
| `flutter/inputs.mdx` | State machine inputs (legacy) |
| `flutter/layouts.mdx` | Layout and fit options |
| `flutter/artboards.mdx` | Selecting and switching artboards |
| `flutter/loading-assets.mdx` | Loading external assets at runtime |
| `flutter/fonts.mdx` | Custom font loading |
| `flutter/text.mdx` | Text run manipulation |
| `flutter/playing-audio.mdx` | Audio event playback |
| `flutter/rive-events.mdx` | Listening to Rive events |
| `flutter/caching-a-rive-file.mdx` | Caching loaded Rive files |
| `flutter/alternative-widget-setup.mdx` | Alternative widget initialization |
| `flutter/custom-painter.mdx` | Using CustomPainter for rendering |
| `flutter/custom-rive-renderobject.mdx` | Custom RenderObject integration |
| `flutter/rive-native.mdx` | Rive Native Flutter integration |
| `flutter/faq.mdx` | Frequently asked questions |
| `flutter/migration-guide.mdx` | Migrating between major versions |

### android/ (16 files)

| File | Description |
|------|-------------|
| `android/android.mdx` | Getting started with Rive Android runtime |
| `android/animation-playback.mdx` | Playing and controlling animations |
| `android/state-machines.mdx` | State machine playback |
| `android/data-binding.mdx` | Data binding with View Models |
| `android/inputs.mdx` | State machine inputs (legacy) |
| `android/layouts.mdx` | Layout and fit options |
| `android/artboards.mdx` | Selecting and switching artboards |
| `android/loading-assets.mdx` | Loading external assets at runtime |
| `android/fonts.mdx` | Custom font loading |
| `android/text.mdx` | Text run manipulation |
| `android/playing-audio.mdx` | Audio event playback |
| `android/rive-events.mdx` | Listening to Rive events |
| `android/caching-a-rive-file.mdx` | Caching loaded Rive files |
| `android/logging.mdx` | Debug logging configuration |
| `android/rendering-to-a-bitmap.mdx` | Off-screen bitmap rendering |
| `android/legacy-getting-started.mdx` | Legacy API getting started |
| `android/migrating-from-legacy.mdx` | Migrating from legacy to new Android API |

### apple/ (16 files)

| File | Description |
|------|-------------|
| `apple/apple.mdx` | Getting started with Rive Apple runtime (iOS/macOS) |
| `apple/animation-playback.mdx` | Playing and controlling animations |
| `apple/state-machines.mdx` | State machine playback |
| `apple/data-binding.mdx` | Data binding with View Models |
| `apple/inputs.mdx` | State machine inputs (legacy) |
| `apple/layouts.mdx` | Layout and fit options |
| `apple/artboards.mdx` | Selecting and switching artboards |
| `apple/loading-assets.mdx` | Loading external assets at runtime |
| `apple/fonts.mdx` | Custom font loading |
| `apple/text.mdx` | Text run manipulation |
| `apple/playing-audio.mdx` | Audio event playback |
| `apple/rive-events.mdx` | Listening to Rive events |
| `apple/caching-a-rive-file.mdx` | Caching loaded Rive files |
| `apple/logging.mdx` | Debug logging configuration |
| `apple/resource-usage.mdx` | Memory and resource usage guidance |
| `apple/faq.mdx` | Frequently asked questions |
| `apple/migrating-from-legacy.mdx` | Migrating from legacy to new Apple API |
| `apple/migration-guides.mdx` | Version-to-version migration guides |

### choose-a-renderer/ (2 files)

| File | Description |
|------|-------------|
| `choose-a-renderer/overview.mdx` | Overview of available renderers (Canvas, WebGL, Rive Renderer) |
| `choose-a-renderer/faq.mdx` | Renderer selection FAQ |

### advanced-topic/ (2 files)

| File | Description |
|------|-------------|
| `advanced-topic/format.mdx` | .riv binary file format specification |
| `advanced-topic/rendering-to-a-bitmap.mdx` | Rendering Rive animations to a bitmap off-screen |

### Root files (1 file)

| File | Description |
|------|-------------|
| `runtime-sizes.mdx` | Bundle size reference for all runtimes |
