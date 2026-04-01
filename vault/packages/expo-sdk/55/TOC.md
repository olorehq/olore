# expo-sdk Table of Contents

## Directory Map

```
contents/
├── index.mdx           # SDK overview and module list
├── config/             # App configuration references (4 files)
│   ├── app.mdx
│   ├── babel.mdx
│   ├── metro.mdx
│   └── package-json.mdx
└── sdk/                # SDK API reference (184 files)
    ├── (sensors)       # accelerometer, barometer, devicemotion, gyroscope, light-sensor, magnetometer, pedometer, sensors
    ├── (media)         # audio, av, camera, captureRef, image, imagemanipulator, imagepicker, live-photo, video, video-thumbnails
    ├── (storage)       # asset, async-storage, blob, filesystem, filesystem-legacy, media-library, media-library-next, securestore, sqlite
    ├── (UI)            # blur-view, checkbox, date-time-picker, flash-list, gesture-handler, gl-view, glass-effect, image, linear-gradient, masked-view, mesh-gradient, picker, reanimated, safe-area-context, screen-orientation, screens, segmented-control, skia, slider, status-bar, svg, symbols, view-pager
    │   └── ui/         # expo-ui components (73 files: index + jetpack-compose/ + swift-ui/)
    ├── (device)        # application, battery, brightness, cellular, constants, device, navigation-bar, network, netinfo, system-ui
    ├── (navigation)    # linking, router, router-native-tabs, router-split-view, router-ui
    ├── (auth)          # apple-authentication, auth-session, local-authentication, tracking-transparency
    ├── (notifications) # notifications, background-fetch, background-task, task-manager
    └── (other)         # age-range, app-integrity, brownfield, build-properties, calendar, calendar-next, contacts, contacts-next, clipboard, crypto, dev-client, dev-menu, document-picker, expo, fingerprint, font, haptics, intent-launcher, keep-awake, keyboard-controller, localization, location, mail-composer, manifests, maps, map-view, print, screen-capture, server, sharing, sms, speech, splash-screen, storereview, stripe, third-party-overview, updates, webbrowser, webview, widgets
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Core Expo API | `contents/sdk/expo.mdx` |
| App configuration | `contents/config/app.mdx` |
| Navigation/routing | `contents/sdk/router.mdx` |
| Notifications | `contents/sdk/notifications.mdx` |
| Camera | `contents/sdk/camera.mdx` |
| File system | `contents/sdk/filesystem.mdx` |
| SQLite database | `contents/sdk/sqlite.mdx` |
| Secure storage | `contents/sdk/securestore.mdx` |
| Authentication | `contents/sdk/auth-session.mdx` |
| OTA updates | `contents/sdk/updates.mdx` |

## Detailed Structure

### config/ (4 files)

| File | Description |
|------|-------------|
| `config/app.mdx` | app.json / app.config.js reference — all Expo config properties |
| `config/babel.mdx` | Babel preset and plugin configuration |
| `config/metro.mdx` | Metro bundler configuration options |
| `config/package-json.mdx` | Expo-specific package.json fields |

### sdk/ — Sensors (8 files)

| File | Description |
|------|-------------|
| `sdk/accelerometer.mdx` | Accelerometer sensor API |
| `sdk/barometer.mdx` | Barometer sensor API |
| `sdk/devicemotion.mdx` | Device motion sensor API |
| `sdk/gyroscope.mdx` | Gyroscope sensor API |
| `sdk/light-sensor.mdx` | Ambient light sensor API |
| `sdk/magnetometer.mdx` | Magnetometer sensor API |
| `sdk/pedometer.mdx` | Pedometer/step counter API |
| `sdk/sensors.mdx` | expo-sensors package overview |

### sdk/ — Media (10 files)

| File | Description |
|------|-------------|
| `sdk/audio.mdx` | Audio recording and playback API |
| `sdk/camera.mdx` | CameraView component API |
| `sdk/captureRef.mdx` | Screen/component capture to image |
| `sdk/image.mdx` | Image component API |
| `sdk/imagemanipulator.mdx` | Image manipulation API |
| `sdk/imagepicker.mdx` | Image/video picker API |
| `sdk/live-photo.mdx` | Live Photo support (iOS) |
| `sdk/video.mdx` | VideoView component API |
| `sdk/video-thumbnails.mdx` | Video thumbnail generation |

### sdk/ — Storage (9 files)

| File | Description |
|------|-------------|
| `sdk/asset.mdx` | Asset module API |
| `sdk/async-storage.mdx` | AsyncStorage API |
| `sdk/blob.mdx` | Blob API for React Native |
| `sdk/filesystem.mdx` | FileSystem API (new) |
| `sdk/filesystem-legacy.mdx` | FileSystem API (legacy) |
| `sdk/media-library.mdx` | Device media library API |
| `sdk/media-library-next.mdx` | Media library API (next iteration) |
| `sdk/securestore.mdx` | Encrypted key-value storage API |
| `sdk/sqlite.mdx` | SQLite database API |

### sdk/ — UI Components (24 files + ui/ subdirectory)

| File | Description |
|------|-------------|
| `sdk/blur-view.mdx` | BlurView component |
| `sdk/checkbox.mdx` | Checkbox component |
| `sdk/date-time-picker.mdx` | DateTimePicker component |
| `sdk/flash-list.mdx` | FlashList high-performance list |
| `sdk/gesture-handler.mdx` | Gesture handler API |
| `sdk/gl-view.mdx` | OpenGL view component |
| `sdk/glass-effect.mdx` | GlassEffect UI component |
| `sdk/linear-gradient.mdx` | LinearGradient component |
| `sdk/masked-view.mdx` | MaskedView component |
| `sdk/mesh-gradient.mdx` | MeshGradient component |
| `sdk/picker.mdx` | Picker component |
| `sdk/reanimated.mdx` | Reanimated animation API |
| `sdk/safe-area-context.mdx` | SafeAreaContext API |
| `sdk/screen-orientation.mdx` | Screen orientation API |
| `sdk/screens.mdx` | Screens component |
| `sdk/segmented-control.mdx` | SegmentedControl component |
| `sdk/skia.mdx` | Skia drawing API |
| `sdk/slider.mdx` | Slider component |
| `sdk/status-bar.mdx` | StatusBar component |
| `sdk/svg.mdx` | SVG support |
| `sdk/symbols.mdx` | SF Symbols / Material Symbols |
| `sdk/view-pager.mdx` | ViewPager component |
| `sdk/ui/index.mdx` | expo-ui components overview |
| `sdk/ui/jetpack-compose/` | 37 Jetpack Compose (Android) UI components |
| `sdk/ui/swift-ui/` | 35 SwiftUI (iOS) UI components |

### sdk/ — Device Info (10 files)

| File | Description |
|------|-------------|
| `sdk/application.mdx` | App version, bundle ID, install info |
| `sdk/battery.mdx` | Battery level and status |
| `sdk/brightness.mdx` | Screen brightness API |
| `sdk/cellular.mdx` | Cellular connection info |
| `sdk/constants.mdx` | Expo Constants (device info, manifest) |
| `sdk/device.mdx` | Device model, OS, hardware info |
| `sdk/navigation-bar.mdx` | Android navigation bar control |
| `sdk/network.mdx` | Network connectivity info |
| `sdk/netinfo.mdx` | NetInfo API |
| `sdk/system-ui.mdx` | System UI configuration |

### sdk/ — Navigation (5 files)

| File | Description |
|------|-------------|
| `sdk/router.mdx` | Expo Router file-based routing |
| `sdk/router-ui.mdx` | Expo Router UI components |
| `sdk/router-native-tabs.mdx` | Native tabs for Expo Router |
| `sdk/router-split-view.mdx` | Native split view layout for Expo Router |
| `sdk/linking.mdx` | Deep linking and URL handling |

### sdk/ — Authentication (4 files)

| File | Description |
|------|-------------|
| `sdk/apple-authentication.mdx` | Sign In with Apple |
| `sdk/auth-session.mdx` | Browser-based OAuth/OIDC auth |
| `sdk/local-authentication.mdx` | Biometric / Face ID / Touch ID |
| `sdk/tracking-transparency.mdx` | iOS ATT request API |

### sdk/ — Background & Notifications (4 files)

| File | Description |
|------|-------------|
| `sdk/notifications.mdx` | Push notifications, scheduling, handling |
| `sdk/background-fetch.mdx` | Background fetch tasks |
| `sdk/background-task.mdx` | Background task scheduling |
| `sdk/task-manager.mdx` | Task manager API |

### sdk/ — Other APIs (44 files)

| File | Description |
|------|-------------|
| `sdk/age-range.mdx` | Age range info (Play Age Signals / Declared Age Range) |
| `sdk/app-integrity.mdx` | App integrity verification |
| `sdk/brownfield.mdx` | Toolkit for integrating Expo into existing native apps |
| `sdk/build-properties.mdx` | Build properties config plugin |
| `sdk/calendar.mdx` | Device calendar access |
| `sdk/calendar-next.mdx` | Calendar API (next iteration) |
| `sdk/clipboard.mdx` | Clipboard read/write |
| `sdk/contacts.mdx` | Device contacts access |
| `sdk/contacts-next.mdx` | Contacts API (next iteration) |
| `sdk/crypto.mdx` | Cryptographic functions |
| `sdk/dev-client.mdx` | Development client API |
| `sdk/dev-menu.mdx` | Developer menu for debug builds |
| `sdk/document-picker.mdx` | Document/file picker |
| `sdk/expo.mdx` | Core expo package API |
| `sdk/fingerprint.mdx` | Project fingerprint hash generation |
| `sdk/font.mdx` | Custom font loading |
| `sdk/haptics.mdx` | Haptic feedback API |
| `sdk/intent-launcher.mdx` | Android intent launcher |
| `sdk/keep-awake.mdx` | Prevent screen sleep |
| `sdk/keyboard-controller.mdx` | Keyboard controller API |
| `sdk/localization.mdx` | Native user localization information |
| `sdk/location.mdx` | GPS/geolocation API |
| `sdk/mail-composer.mdx` | In-app mail composition |
| `sdk/manifests.mdx` | Expo manifest types |
| `sdk/map-view.mdx` | MapView component (react-native-maps) |
| `sdk/maps.mdx` | Expo Maps API |
| `sdk/print.mdx` | Printing API |
| `sdk/screen-capture.mdx` | Screen capture prevention |
| `sdk/server.mdx` | Server-side API (expo-server) |
| `sdk/sharing.mdx` | Native share sheet |
| `sdk/sms.mdx` | SMS composing API |
| `sdk/speech.mdx` | Text-to-speech API |
| `sdk/splash-screen.mdx` | Splash screen control |
| `sdk/storereview.mdx` | App store review prompt |
| `sdk/stripe.mdx` | Stripe payments integration |
| `sdk/third-party-overview.mdx` | Third-party libraries supported in Expo Go |
| `sdk/updates.mdx` | OTA updates API |
| `sdk/webbrowser.mdx` | In-app web browser |
| `sdk/webview.mdx` | WebView component |
| `sdk/widgets.mdx` | iOS home screen widgets and Live Activities |
