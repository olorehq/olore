# expo-sdk Table of Contents

## Directory Map

```
contents/
├── index.mdx   # SDK overview
├── config/     # App configuration (4 files)
└── sdk/        # SDK API reference (254 files)
    ├── *.mdx   # one file per module (112 files)
    ├── router/ # Expo Router components (8 files)
    └── ui/     # expo-ui (134 files)
        ├── universal/              # cross-platform components (19 files)
        ├── jetpack-compose/        # Android Jetpack Compose (55 files)
        ├── swift-ui/               # iOS SwiftUI (50 files)
        └── drop-in-replacements/   # drop-in replacements (9 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| SDK overview | `contents/index.mdx` |
| Core Expo API | `contents/sdk/expo.mdx` |
| App configuration | `contents/config/app.mdx` |
| Navigation / routing | `contents/sdk/router/index.mdx` |
| Camera | `contents/sdk/camera.mdx` |
| Notifications | `contents/sdk/notifications.mdx` |
| SQLite database | `contents/sdk/sqlite.mdx` |
| expo-ui components | `contents/sdk/ui/index.mdx` |

## Detailed Structure

### (root) (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Access device and system functionality in your Expo and React Native apps using Expo SDK packages. |

### config/ (4 files)

| File | Description |
|------|-------------|
| `app.mdx` | A reference of available properties in Expo app config. |
| `babel.mdx` | A reference for Babel configuration file. |
| `metro.mdx` | A reference of available configurations in Metro. |
| `package-json.mdx` | A reference for Expo-specific properties that can be used in the package.json file. |

### sdk/ (112 files)

| File | Description |
|------|-------------|
| `accelerometer.mdx` | A library that provides access to the device's accelerometer sensor. |
| `age-range.mdx` | A library that provides access to age range information using Play Age Signals API on Android and Declared Age Range framework on iOS. |
| `ai.mdx` | A library for generating text, structured values, and tool calls with a system-provided on-device language model. |
| `app-integrity.mdx` | A library that provides access to Google's Play Integrity API on Android and Apple's App Attest service on iOS. |
| `app-intents.mdx` | A library for exposing Apple App Intents, Siri, Shortcuts, Spotlight, and Apple Intelligence entry points from Expo apps. |
| `apple-authentication.mdx` | A library that provides Sign-in with Apple capability for iOS. |
| `application.mdx` | A universal library that provides information about the native application's ID, app name, and build version at runtime. |
| `asset.mdx` | A universal library that allows downloading assets and using them with other libraries. |
| `async-storage.mdx` | A library that provides an asynchronous, unencrypted, persistent, key-value storage API. |
| `audio.mdx` | A library that provides an API to implement audio playback and recording in apps. |
| `auth-session.mdx` | A universal library that provides an API to handle browser-based authentication. |
| `background-fetch.mdx` | A library that provides API for performing background fetch tasks. |
| `background-task.mdx` | A library that provides an API for running background tasks. |
| `barometer.mdx` | A library that provides access to device's barometer sensor. |
| `battery.mdx` | A library that provides battery information for the physical device, as well as corresponding event listeners. |
| `blob.mdx` | A web standards-compliant Blob implementation for React Native. |
| `blur-view.mdx` | A React component that blurs everything underneath the view. |
| `brightness.mdx` | A library that provides access to an API for getting and setting the screen brightness. |
| `brownfield.mdx` | Toolkit and APIs for integrating Expo into existing native applications. |
| `build-properties.mdx` | A config plugin that allows customizing native build properties during prebuild. |
| `calendar-legacy.mdx` | A library that provides an API for interacting with the device's system calendars, events, reminders, and associated records. |
| `calendar.mdx` | A library that provides an API for interacting with the device's system calendars, events, reminders, and associated records. |
| `camera.mdx` | A React component that renders a preview for the device's front or back camera. |
| `captureRef.mdx` | A library that allows you to capture a React Native view and save it as an image. |
| `cellular.mdx` | An API that provides information about the user's cellular service provider. |
| `checkbox.mdx` | A universal React component that provides basic checkbox functionality. |
| `clipboard.mdx` | A universal library that allows getting and setting Clipboard content. |
| `constants.mdx` | An API that provides system information that remains constant throughout the lifetime of your app's installation. |
| `contacts-legacy.mdx` | A library that provides access to the phone's system contacts. |
| `contacts.mdx` | A library that provides access to the phone's system contacts. |
| `crypto.mdx` | A universal library for crypto operations. |
| `date-time-picker.mdx` | A component that provides access to the system UI for date and time selection. |
| `dev-client.mdx` | A library that allows creating a development build and includes useful development tools. |
| `dev-menu.mdx` | A library that provides a developer menu for debug builds. |
| `device.mdx` | A universal library provides access to system information about the physical device. |
| `devicemotion.mdx` | A library that provides access to a device's motion and orientation sensors. |
| `document-picker.mdx` | A library that provides access to the system's UI for selecting documents from the available providers on the user's device. |
| `expo.mdx` | Set of common methods and types for Expo and related packages. |
| `filesystem-legacy.mdx` | A library that provides access to the local file system on the device. |
| `filesystem.mdx` | A library that provides access to the local file system on the device. |
| `fingerprint.mdx` | A library to generate a fingerprint from a React Native project. |
| `flash-list.mdx` | A React Native component that provides a fast and performant way to render lists. |
| `font.mdx` | A library that allows loading fonts at runtime and using them in React Native components. |
| `gesture-handler.mdx` | A library that provides an API for handling complex gestures. |
| `gl-view.mdx` | A library that provides GLView that acts as an OpenGL ES render target and provides GLContext. Useful for rendering 2D and 3D graphics. |
| `glass-effect.mdx` | React components that render a liquid glass effect using iOS's native UIVisualEffectView. |
| `gyroscope.mdx` | A library that provides access to the device's gyroscope sensor. |
| `haptics.mdx` | A library that provides access to the system's vibration effects on Android, the haptics engine on iOS, and the Web Vibration API on web. |
| `hinge.mdx` | A library that provides the device hinge angle and status on Android foldables and iPhone Duo. |
| `image.mdx` | A cross-platform and performant React component that loads and renders images. |
| `imagemanipulator.mdx` | A library that provides an API for image manipulation on the local file system. |
| `imagepicker.mdx` | A library that provides access to the system's UI for selecting images and videos from the phone's library or taking a photo with the camera. |
| `intent-launcher.mdx` | A library that provides an API to launch Android intents. |
| `keep-awake.mdx` | A React component that prevents the screen from sleeping when rendered. |
| `keyboard-controller.mdx` | A library that provides a Keyboard manager that works in an identical way on Android and iOS |
| `light-sensor.mdx` | A library that provides access to the device's light sensor. |
| `linear-gradient.mdx` | A universal React component that renders a gradient view. |
| `linking.mdx` | An API that provides methods to create and open deep links universally. |
| `live-photo.mdx` | A library that allows displaying Live Photos on iOS. |
| `local-authentication.mdx` | A library that provides functionality for implementing the Fingerprint API (Android) or FaceID and TouchID (iOS) to authenticate the user with a face or fingerprint scan. |
| `localization.mdx` | A library that provides an interface for native user localization information. |
| `location-next.mdx` | A library that provides access to the device's location. |
| `location.mdx` | A library that provides access to reading geolocation information, polling current location or subscribing location update events from the device. |
| `magnetometer.mdx` | A library that provides access to the device's magnetometer sensor. |
| `mail-composer.mdx` | A library that provides functionality to compose and send emails with the system's specific UI. |
| `manifests.mdx` | A library that provides types for Expo Manifests. |
| `map-view.mdx` | A library that provides a Map component that uses Google Maps on Android and Apple Maps or Google Maps on iOS. |
| `maps.mdx` | A library that provides access to Google Maps on Android and Apple Maps on iOS. |
| `masked-view.mdx` | A library that provides a masked view. |
| `media-library-legacy.mdx` | A library that provides access to the device's media library. |
| `media-library.mdx` | A library that provides access to the device's media library. |
| `mesh-gradient.mdx` | A module that exposes MeshGradient view from SwiftUI to React Native. |
| `navigation-bar.mdx` | A library that provides access to various interactions with the native navigation bar on Android. |
| `netinfo.mdx` | A cross-platform API that provides access to network information. |
| `network.mdx` | A library that provides access to the device's network such as its IP address, MAC address, and airplane mode status. |
| `notifications.mdx` | A library that provides an API to fetch push notification tokens and to present, schedule, receive and respond to notifications. |
| `observe.mdx` | A library that collects app performance metrics and user-defined events and dispatches them to EAS Observe. |
| `pedometer.mdx` | A library that provides access to the device's pedometer sensor. |
| `picker.mdx` | A cross-platform component that provides access to the system UI for picking between several options. |
| `print.mdx` | A library that provides printing functionality for Android and iOS (AirPrint). |
| `reanimated.mdx` | A library that provides an API that greatly simplifies the process of creating smooth, powerful, and maintainable animations. |
| `safe-area-context.mdx` | A library with a flexible API for accessing the device's safe area inset information. |
| `screen-capture.mdx` | A library that allows you to protect screens in your app from being captured or recorded. |
| `screen-orientation.mdx` | A universal library for managing a device's screen orientation. |
| `screens.mdx` | A library that provides native primitives to represent screens for better operating system behavior and screen optimizations. |
| `securestore.mdx` | A library that provides a way to encrypt and securely store key-value pairs locally on the device. |
| `segmented-control.mdx` | A React Native library that provides a component to render UISegmentedControl from iOS. |
| `sensors.mdx` | A library that provides access to a device's accelerometer, barometer, motion, gyroscope, light, magnetometer, and pedometer. |
| `server.mdx` | Server-side API and runtime for Expo Router projects. |
| `sharing.mdx` | A library that provides functionality for sharing and receiving data from other apps. |
| `skia.mdx` | A React Native library for creating graphics using Skia. |
| `slider.mdx` | A React Native component library that provides access to the system UI for a slider control. |
| `sms.mdx` | A library that provides access to the system's UI/app for sending SMS messages. |
| `speech.mdx` | A library that provides access to text-to-speech functionality. |
| `splash-screen.mdx` | A library that provides access to controlling the visibility behavior of native splash screen. |
| `sqlite.mdx` | A library that provides access to a database that can be queried through a SQLite API. |
| `status-bar.mdx` | A library that provides the same interface as the React Native StatusBar API, but with slightly different defaults to work great in Expo environments. |
| `storereview.mdx` | A library that provides access to native APIs for in-app reviews. |
| `stripe.mdx` | A library that provides access to native APIs for integrating Stripe payments. |
| `svg.mdx` | A library that allows using SVGs in your app. |
| `symbols.mdx` | A library that allows access to native symbols. |
| `system-ui.mdx` | A library that allows interacting with system UI elements. |
| `task-manager.mdx` | A library that provides support for tasks that can run in the background. |
| `third-party-overview.mdx` | A set of third-party libraries which support for is included by default in Expo Go environment. |
| `tracking-transparency.mdx` | A library for tracking app users and managing tracking permissions. |
| `updates.mdx` | A library that enables your app to manage remote updates to your application code. |
| `video-thumbnails.mdx` | A library that allows you to generate an image to serve as a thumbnail from a video file. |
| `video.mdx` | A library that provides an API to implement video playback in apps. |
| `view-pager.mdx` | A component library that provides a carousel-like view to swipe through pages of content. |
| `webbrowser.mdx` | A library that provides access to the system's web browser and supports handling redirects. |
| `webview.mdx` | A library that provides a WebView component. |
| `widgets.mdx` | A library to build Android and iOS home screen widgets and iOS Live Activities using Expo UI components. |

### sdk/router/ (8 files)

| File | Description |
|------|-------------|
| `color.mdx` | An Expo Router API for accessing platform-specific native colors. |
| `experimental-stack.mdx` | An opt-in sibling to Stack built on the react-native-screens experimental gamma stack. Available for testing only. |
| `index.mdx` | A file-based routing library for React Native and web applications. |
| `link.mdx` | An Expo Router API that provides Link, Redirect, preview, and zoom transition components. |
| `native-tabs.mdx` | An Expo Router submodule that provides native tabs layout. |
| `split-view.mdx` | An Expo Router submodule that provides native split view layout. |
| `stack.mdx` | An Expo Router API that provides Stack navigator, toolbar, and screen components. |
| `ui.mdx` | An Expo Router submodule that provides headless tab components to create custom tab layouts. |

### sdk/ui/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | A set of components that allow you to build UIs directly with Jetpack Compose and SwiftUI from React. |

### sdk/ui/drop-in-replacements/ (9 files)

| File | Description |
|------|-------------|
| `bottomsheet.mdx` | A bottom sheet compatible with @gorhom/bottom-sheet. |
| `datetimepicker.mdx` | A date and time picker compatible with @react-native-community/datetimepicker. |
| `index.mdx` | Components and APIs that serve as drop-in replacements for popular React Native community libraries. |
| `maskedview.mdx` | A masked view compatible with @react-native-masked-view/masked-view. |
| `menu.mdx` | A menu compatible with @react-native-menu/menu. |
| `pagerview.mdx` | A horizontally paged view compatible with react-native-pager-view. |
| `picker.mdx` | A picker compatible with @react-native-picker/picker. |
| `segmentedcontrol.mdx` | A segmented control compatible with @react-native-segmented-control/segmented-control. |
| `slider.mdx` | A slider compatible with @react-native-community/slider. |

### sdk/ui/jetpack-compose/ (55 files)

| File | Description |
|------|-------------|
| `alertdialog.mdx` | A Jetpack Compose AlertDialog component for displaying native alert dialogs. |
| `badge.mdx` | A Jetpack Compose Badge component for displaying status indicators and counts. |
| `badgedbox.mdx` | A Jetpack Compose BadgedBox component for overlaying badges on content. |
| `basicalertdialog.mdx` | A Jetpack Compose BasicAlertDialog component for displaying dialogs with custom content. |
| `bottomsheet.mdx` | A Jetpack Compose ModalBottomSheet component that presents content from the bottom of the screen. |
| `box.mdx` | A Jetpack Compose Box component for stacking child elements. |
| `button.mdx` | Jetpack Compose Button components for displaying native Material3 buttons. |
| `card.mdx` | A Jetpack Compose Card component for displaying content in a styled container. |
| `carousel.mdx` | Jetpack Compose Carousel components for displaying scrollable collections of items. |
| `checkbox.mdx` | A Jetpack Compose Checkbox component for selection controls. |
| `chip.mdx` | Jetpack Compose Chip components for displaying compact elements. |
| `colors.mdx` | Read the Material 3 color palette (including Material 3 Dynamic Colors) from JavaScript. |
| `column.mdx` | A Jetpack Compose Column component for placing children vertically. |
| `compositionlocalprovider.mdx` | A Jetpack Compose CompositionLocalProvider component for providing composition local values to its children. |
| `datetimepicker.mdx` | Jetpack Compose components for selecting dates, date ranges, and times. |
| `divider.mdx` | Jetpack Compose Divider components for creating visual separators. |
| `dockedsearchbar.mdx` | A Jetpack Compose DockedSearchBar component for displaying an inline search input. |
| `dropdownmenu.mdx` | A Jetpack Compose DropdownMenu component for displaying dropdown menus. |
| `exposeddropdownmenubox.mdx` | A Jetpack Compose ExposedDropdownMenuBox component for displaying a dropdown menu with a customizable anchor. |
| `extending.mdx` | Learn how to create custom Jetpack Compose components and modifiers that integrate with Expo UI. |
| `floatingactionbutton.mdx` | Jetpack Compose FloatingActionButton components following Material Design 3. |
| `flowrow.mdx` | A Jetpack Compose FlowRow component for wrapping children horizontally. |
| `horizontalfloatingtoolbar.mdx` | A Jetpack Compose HorizontalFloatingToolbar component for displaying a floating action bar. |
| `horizontalpager.mdx` | A Jetpack Compose HorizontalPager component for swipeable pages. |
| `host.mdx` | A Jetpack Compose Host component for bridging React Native and Jetpack Compose. |
| `icon.mdx` | A Jetpack Compose Icon component for displaying icons. |
| `iconbutton.mdx` | Jetpack Compose IconButton components for displaying native Material3 icon buttons. |
| `image.mdx` | A Jetpack Compose Image component for displaying images. |
| `index.mdx` | Jetpack Compose components for building native Android interfaces with @expo/ui. |
| `lazycolumn.mdx` | A Jetpack Compose LazyColumn component for displaying scrollable lists. |
| `lazyrow.mdx` | A Jetpack Compose LazyRow component for displaying horizontally scrolling lists. |
| `listitem.mdx` | A Jetpack Compose ListItem component for displaying structured list entries. |
| `loadingindicator.mdx` | Jetpack Compose loading indicator components for displaying loading state. |
| `modifiers.mdx` | Jetpack Compose layout modifiers for @expo/ui components. |
| `navigationbar.mdx` | A Jetpack Compose NavigationBar component for Material 3 bottom navigation. |
| `progress.mdx` | Jetpack Compose progress indicator components for displaying operation status. |
| `pulltorefreshbox.mdx` | A Jetpack Compose PullToRefreshBox component for pull-to-refresh interactions. |
| `radiobutton.mdx` | A Jetpack Compose RadioButton component for single-selection controls. |
| `rnhostview.mdx` | A component that enables React Native views inside Jetpack Compose. |
| `row.mdx` | A Jetpack Compose Row component for placing children horizontally. |
| `searchbar.mdx` | A Jetpack Compose SearchBar component for search input functionality. |
| `segmentedbutton.mdx` | Jetpack Compose Segmented Button components for single or multi-choice selection. |
| `shape.mdx` | A Jetpack Compose Shape component for drawing geometric shapes. |
| `slider.mdx` | A Jetpack Compose Slider component for selecting values from a range. |
| `snackbar.mdx` | A brief notification that appears at the bottom of the screen to provide feedback without interrupting the user. |
| `spacer.mdx` | A Jetpack Compose Spacer component for adding flexible space between elements. |
| `splitbuttonlayout.mdx` | A Jetpack Compose SplitButtonLayout component for a primary action next to a button that opens related actions. |
| `surface.mdx` | A Jetpack Compose Surface component for styled content containers. |
| `switch.mdx` | A Jetpack Compose Switch component for toggle controls. |
| `text.mdx` | A Jetpack Compose Text component for displaying styled text. |
| `textfield.mdx` | Jetpack Compose TextField components for native Material3 text input. |
| `togglebutton.mdx` | Jetpack Compose ToggleButton components for displaying native Material3 toggle buttons. |
| `tooltip.mdx` | Jetpack Compose Tooltip components for displaying contextual information on long-press. |
| `topappbar.mdx` | A Jetpack Compose TopAppBar component for displaying a title, a navigation icon, and actions at the top of a screen. |
| `usenativestate.mdx` | A React hook that creates observable state shared between JavaScript and native Jetpack Compose views. |

### sdk/ui/swift-ui/ (50 files)

| File | Description |
|------|-------------|
| `accessorywidgetbackground.mdx` | A SwiftUI adaptive background view that provides a standard appearance based on the widget's environment. |
| `alert.mdx` | A SwiftUI Alert component for presenting native iOS alert dialogs. |
| `arrangementview.mdx` | A SwiftUI ArrangementView component that arranges a primary and a secondary view with an adaptive layout. |
| `background.mdx` | A SwiftUI Background component for layering content behind another view. |
| `bottomsheet.mdx` | A SwiftUI BottomSheet component that presents content from the bottom of the screen. |
| `button.mdx` | A SwiftUI Button component for displaying native buttons. |
| `colorpicker.mdx` | A SwiftUI ColorPicker component for selecting colors. |
| `confirmationdialog.mdx` | A SwiftUI ConfirmationDialog component for presenting confirmation prompts. |
| `contextmenu.mdx` | A SwiftUI ContextMenu component for displaying context menus. |
| `controlgroup.mdx` | A SwiftUI ControlGroup component for grouping interactive controls. |
| `datepicker.mdx` | A SwiftUI DatePicker component for selecting dates and times. |
| `disclosuregroup.mdx` | A SwiftUI DisclosureGroup component for displaying expandable content. |
| `divider.mdx` | A SwiftUI Divider component for creating visual separators. |
| `extending.mdx` | Learn how to create custom SwiftUI components and modifiers that integrate with Expo UI. |
| `form.mdx` | A SwiftUI Form component for collecting user input in a structured layout. |
| `gauge.mdx` | A SwiftUI Gauge component for displaying progress with visual indicators. |
| `group.mdx` | A SwiftUI Group component for grouping views without affecting layout. |
| `host.mdx` | A SwiftUI Host component that enables SwiftUI components in React Native. |
| `hstack.mdx` | A SwiftUI HStack component for horizontal layouts. |
| `image.mdx` | A SwiftUI Image component for displaying SF Symbols. |
| `index.mdx` | SwiftUI components for building native iOS interfaces with @expo/ui. |
| `label.mdx` | A SwiftUI Label component for displaying text with an icon. |
| `lazyhstack.mdx` | A SwiftUI LazyHStack component for lazy horizontal layouts. |
| `lazyvstack.mdx` | A SwiftUI LazyVStack component for lazy vertical layouts. |
| `link.mdx` | A SwiftUI Link component for displaying clickable links. |
| `list.mdx` | A SwiftUI List component for displaying scrollable lists of items. |
| `menu.mdx` | A SwiftUI Menu component for displaying dropdown menus. |
| `modifiers.mdx` | SwiftUI view modifiers for customizing component appearance and behavior. |
| `namespace.mdx` | A Namespace component that allows you create Namespaces in SwiftUI |
| `navigationsplitview.mdx` | A SwiftUI NavigationSplitView component that presents two or three columns side by side. |
| `navigationstack.mdx` | A SwiftUI NavigationStack, with the links and destinations that push views onto it. |
| `overlay.mdx` | A SwiftUI Overlay component for layering content on top of another view. |
| `picker.mdx` | A SwiftUI Picker component for selecting options from a list. |
| `popover.mdx` | A SwiftUI Popover component for displaying content in a floating overlay. |
| `progressview.mdx` | A SwiftUI ProgressView component for displaying progress indicators. |
| `rnhostview.mdx` | A component that enables React Native views inside SwiftUI. |
| `scrollview.mdx` | A SwiftUI ScrollView component for scrollable content. |
| `section.mdx` | A SwiftUI Section component for grouping content within lists and forms. |
| `securefield.mdx` | A SwiftUI SecureField component for password input. |
| `slider.mdx` | A SwiftUI Slider component for selecting values from a range. |
| `spacer.mdx` | A SwiftUI Spacer component for flexible spacing. |
| `swipeactions.mdx` | A SwiftUI SwipeActions component for adding leading and trailing swipe actions to row content. |
| `tabview.mdx` | A SwiftUI TabView component for paged or tabbed content. |
| `text.mdx` | A SwiftUI Text component for displaying styled text with support for nested texts. |
| `textfield.mdx` | A SwiftUI TextField component for text input. |
| `toggle.mdx` | A SwiftUI Toggle component for displaying native toggles. |
| `toolbar.mdx` | A SwiftUI Toolbar component that places items in the toolbar of the view it wraps. |
| `usenativestate.mdx` | A React hook that creates observable state shared between JavaScript and native SwiftUI views. |
| `vstack.mdx` | A SwiftUI VStack component for vertical layouts. |
| `zstack.mdx` | A SwiftUI ZStack component for overlapping layouts. |

### sdk/ui/universal/ (19 files)

| File | Description |
|------|-------------|
| `bottomsheet.mdx` | A modal sheet that slides up from the bottom of the screen. |
| `button.mdx` | A pressable button with multiple visual variants. |
| `checkbox.mdx` | A toggle control that represents a checked or unchecked state. |
| `collapsible.mdx` | A labelled tappable header that toggles visibility of its content. |
| `column.mdx` | A vertical layout container for universal @expo/ui components. |
| `fieldgroup.mdx` | A scrollable container of grouped settings-style rows. |
| `host.mdx` | A cross-platform Host component that wraps universal @expo/ui content. |
| `icon.mdx` | A platform-native icon — SF Symbol on iOS, Material Symbol on Android. |
| `index.mdx` | Cross-platform components for building shared UIs across Android, iOS, and web with @expo/ui. |
| `list.mdx` | A virtualized vertical container of rows, paired with a tappable ListItem primitive. |
| `picker.mdx` | A single-selection input with menu and wheel appearances. |
| `rnhostview.mdx` | A cross-platform component for hosting React Native views inside @expo/ui views. |
| `row.mdx` | A horizontal layout container for universal @expo/ui components. |
| `scrollview.mdx` | A scrollable container that supports vertical or horizontal scrolling. |
| `slider.mdx` | A control for selecting a value from a continuous or stepped range. |
| `spacer.mdx` | A layout spacer that produces empty space between siblings. |
| `switch.mdx` | A toggle control that switches between on and off states. |
| `text.mdx` | A component for displaying styled text content. |
| `textinput.mdx` | A text input backed by native SwiftUI and Jetpack Compose components, with a React Native-compatible API. |
