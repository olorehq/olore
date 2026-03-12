# Expo Table of Contents

## Directory Map

```
contents/
├── get-started/                    # Installation, setup, first project (5 files)
├── tutorial/                       # Step-by-step tutorial (25 files)
├── develop/                        # Development workflows (21 files)
│   ├── development-builds/         # Dev client and builds
│   └── user-interface/             # UI components
├── router/                         # Expo Router / file-based navigation (47 files)
│   ├── basics/                     # Core routing concepts
│   ├── advanced/                   # Tabs, drawers, modals, auth
│   ├── reference/                  # Typed routes, URL params, testing
│   ├── migrate/                    # Migration guides
│   └── web/                        # Web-specific routing
├── modules/                        # Native modules API (17 files)
├── guides/                         # How-to guides and integrations (59 files)
├── config-plugins/                 # Config plugins system (7 files)
├── eas/                            # Expo Application Services overview (35 files)
│   ├── environment-variables/      # EAS environment variables
│   ├── workflows/                  # EAS Workflows
│   ├── hosting/                    # EAS Hosting
│   ├── ai/                         # EAS AI features
│   └── metadata/                   # EAS metadata
├── eas-update/                     # EAS Update / OTA updates (27 files)
├── build/                          # EAS Build (10 files)
├── build-reference/                # EAS Build reference (21 files)
├── distribution/                   # App distribution (4 files)
├── deploy/                         # Deployment guides (5 files)
├── submit/                         # App store submission (4 files)
├── app-signing/                    # Code signing and credentials (6 files)
├── push-notifications/             # Push notifications (8 files)
├── debugging/                      # Debugging tools (5 files)
├── troubleshooting/                # Troubleshooting guides (6 files)
├── workflow/                       # Managed vs bare workflow (12 files)
├── bare/                           # Bare workflow guides (6 files)
├── brownfield/                     # Brownfield integration (4 files)
├── custom-builds/                  # Custom build processes (3 files)
├── linking/                        # Deep linking (5 files)
├── technical-specs/                # Technical specifications (2 files)
├── more/                           # CLI reference, glossary (5 files)
├── versions/
│   └── unversioned/
│       ├── sdk/                    # SDK API reference (~109 modules)
│       └── config/                 # App config reference (4 files)
├── core-concepts.mdx               # Core Expo concepts
└── faq.mdx                         # Frequently asked questions
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/get-started/introduction.mdx` |
| Create first project | `contents/get-started/create-a-project.mdx` |
| Step-by-step tutorial | `contents/tutorial/introduction.mdx` |
| Routing (Expo Router) | `contents/router/introduction.mdx` |
| SDK API reference | `contents/versions/unversioned/sdk/` |
| App config reference | `contents/versions/unversioned/config/app.mdx` |
| Native modules | `contents/modules/overview.mdx` |
| EAS Build | `contents/build/introduction.mdx` |
| OTA updates | `contents/eas-update/introduction.mdx` |
| Push notifications | `contents/push-notifications/overview.mdx` |
| Troubleshooting | `contents/troubleshooting/overview.mdx` |

## Detailed Structure

### get-started/ (5 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Introduction to Expo |
| `create-a-project.mdx` | Create a new project |
| `set-up-your-environment.mdx` | Environment setup |
| `start-developing.mdx` | Start development server |
| `next-steps.mdx` | Next steps after setup |

### tutorial/ (25 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Tutorial overview |
| `create-your-first-app.mdx` | Create first app |
| `build-a-screen.mdx` | Build screens |
| `add-navigation.mdx` | Add navigation |
| `image-picker.mdx` | Image picker integration |
| `gestures.mdx` | Gestures |
| `configuration.mdx` | App configuration |
| `create-a-modal.mdx` | Modals |
| `platform-differences.mdx` | Platform differences |
| `screenshot.mdx` | Screenshots |
| `eas/` | EAS tutorial series |

### develop/ (21 files)

| File | Description |
|------|-------------|
| `development-builds/` | Dev builds and Expo Go |
| `user-interface/` | UI components |
| `authentication.mdx` | Authentication patterns |
| `database.mdx` | Database integration |
| `tools.mdx` | Development tools |
| `unit-testing.mdx` | Unit testing |
| `app-navigation.mdx` | App navigation |

### router/ (47 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Expo Router introduction |
| `installation.mdx` | Installation |
| `error-handling.mdx` | Error handling |
| `basics/core-concepts.mdx` | File-based routing concepts |
| `basics/layout.mdx` | Layout routes |
| `basics/navigation.mdx` | Navigation basics |
| `basics/notation.mdx` | Route notation |
| `basics/common-navigation-patterns.mdx` | Common patterns |
| `advanced/tabs.mdx` | Tab navigation |
| `advanced/stack.mdx` | Stack navigation |
| `advanced/drawer.mdx` | Drawer navigation |
| `advanced/modals.mdx` | Modal routes |
| `advanced/authentication.mdx` | Auth with Expo Router |
| `advanced/protected.mdx` | Protected routes |
| `advanced/redirects.mdx` | Redirects |
| `advanced/nesting-navigators.mdx` | Nested navigators |
| `advanced/native-tabs.mdx` | Native tabs |
| `advanced/custom-tabs.mdx` | Custom tabs |
| `reference/typed-routes.mdx` | TypeScript typed routes |
| `reference/url-parameters.mdx` | URL parameters |
| `reference/testing.mdx` | Testing routes |
| `reference/troubleshooting.mdx` | Troubleshooting |
| `web/` | Web-specific docs |
| `migrate/` | Migration guides |

### modules/ (17 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Native modules overview |
| `get-started.mdx` | Getting started |
| `module-api.mdx` | Module API reference |
| `native-module-tutorial.mdx` | Native module tutorial |
| `native-view-tutorial.mdx` | Native view tutorial |
| `design.mdx` | Module design |
| `android-lifecycle-listeners.mdx` | Android lifecycle |
| `appdelegate-subscribers.mdx` | iOS AppDelegate |
| `autolinking.mdx` | Autolinking |
| `config-plugin-and-native-module-tutorial.mdx` | Config plugin + module |
| `existing-library.mdx` | Wrap existing library |
| `third-party-library.mdx` | Third-party libraries |
| `shared-objects.mdx` | Shared objects |
| `mocking.mdx` | Module mocking |

### guides/ (59 files)

| File | Description |
|------|-------------|
| `environment-variables.mdx` | Environment variables |
| `typescript.mdx` | TypeScript setup |
| `permissions.mdx` | Permission handling |
| `icons.mdx` | App icons |
| `authentication.mdx` | Authentication |
| `local-app-development.mdx` | Local development |
| `new-architecture.mdx` | React Native new architecture |
| `customizing-metro.mdx` | Metro bundler config |
| `monorepos.mdx` | Monorepo setup |
| `dom-components.mdx` | DOM components |
| `server-components.mdx` | React Server Components |
| `testing-rsc.mdx` | Testing RSC |
| `using-firebase.mdx` | Firebase integration |
| `using-supabase.mdx` | Supabase integration |
| `using-clerk.mdx` | Clerk auth |
| `google-authentication.mdx` | Google auth |
| `apple-privacy.mdx` | Apple privacy |
| `progressive-web-apps.mdx` | PWA support |
| `tailwind.mdx` | Tailwind CSS |
| `analyzing-bundles.mdx` | Bundle analysis |
| `tree-shaking.mdx` | Tree shaking |

### config-plugins/ (7 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Config plugins intro |
| `plugins.mdx` | Writing plugins |
| `mods.mdx` | Config mods |
| `dangerous-mods.mdx` | Dangerous mods |
| `patch-project.mdx` | Patching native projects |
| `development-and-debugging.mdx` | Plugin debugging |
| `development-for-libraries.mdx` | Library authors guide |

### eas/ (35 files)

| File | Description |
|------|-------------|
| `index.mdx` | EAS overview |
| `json.mdx` | eas.json reference |
| `cli.mdx` | EAS CLI reference |
| `webhooks.mdx` | EAS webhooks |
| `environment-variables/` | EAS environment variables |
| `workflows/` | EAS Workflows |
| `hosting/` | EAS Hosting |
| `ai/` | EAS AI |
| `metadata/` | App store metadata |

### eas-update/ (27 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | EAS Update overview |
| `getting-started.mdx` | Getting started |
| `how-it-works.mdx` | How updates work |
| `deployment.mdx` | Deployment patterns |
| `rollouts.mdx` | Update rollouts |
| `rollbacks.mdx` | Update rollbacks |
| `runtime-versions.mdx` | Runtime versions |
| `code-signing.mdx` | Update code signing |
| `debug.mdx` | Debugging updates |
| `github-actions.mdx` | GitHub Actions CI |
| `migrate-from-classic-updates.mdx` | Migration guide |
| `standalone-service.mdx` | Standalone service |

### build/ (10 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | EAS Build intro |
| `setup.mdx` | Setup EAS Build |
| `eas-json.mdx` | eas.json for builds |
| `internal-distribution.mdx` | Internal testing |
| `building-from-github.mdx` | Build from GitHub |
| `building-on-ci.mdx` | CI/CD setup |
| `automate-submissions.mdx` | Automated submissions |
| `updates.mdx` | Build + updates |
| `orbit.mdx` | Expo Orbit |

### build-reference/ (21 files)

| File | Description |
|------|-------------|
| `android-builds.mdx` | Android build config |
| `ios-builds.mdx` | iOS build config |
| `build-configuration.mdx` | Build configuration |
| `app-versions.mdx` | App versioning |
| `local-builds.mdx` | Local builds |
| `caching.mdx` | Build caching |
| `infrastructure.mdx` | Build infrastructure |
| `troubleshooting.mdx` | Build troubleshooting |
| `ios-capabilities.mdx` | iOS capabilities |
| `apk.mdx` | APK builds |
| `simulators.mdx` | Simulator builds |
| `variants.mdx` | Build variants |

### push-notifications/ (8 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Push notifications overview |
| `push-notifications-setup.mdx` | Setup guide |
| `sending-notifications.mdx` | Sending notifications |
| `receiving-notifications.mdx` | Receiving notifications |
| `fcm-credentials.mdx` | FCM credentials |
| `sending-notifications-custom.mdx` | Custom FCM setup |
| `faq.mdx` | FAQ |
| `what-you-need-to-know.mdx` | Prerequisites |

### versions/unversioned/sdk/ (~109 files)

SDK API reference for all Expo modules. Key modules include:

| File | Description |
|------|-------------|
| `camera.mdx` | Camera API |
| `audio.mdx` | Audio/video playback |
| `video.mdx` | Video component |
| `image.mdx` | Optimized image |
| `imagepicker.mdx` | Image picker |
| `location.mdx` | Location/GPS |
| `notifications.mdx` | Push/local notifications |
| `filesystem.mdx` | File system |
| `securestore.mdx` | Secure key-value store |
| `sqlite.mdx` | SQLite database |
| `auth-session.mdx` | OAuth authentication |
| `local-authentication.mdx` | Biometrics/Face ID |
| `updates.mdx` | OTA updates API |
| `constants.mdx` | Device constants |
| `device.mdx` | Device info |
| `network.mdx` | Network info |
| `asset.mdx` | Asset management |
| `font.mdx` | Custom fonts |
| `splash-screen.mdx` | Splash screen |
| `status-bar.mdx` | Status bar |
| `reanimated.mdx` | Animations |
| `gesture-handler.mdx` | Gestures |
| `router/` | Expo Router SDK |
| `ui/` | Expo UI components |

### versions/unversioned/config/ (4 files)

| File | Description |
|------|-------------|
| `app.mdx` | app.json/app.config.js reference |
| `babel.mdx` | Babel config |
| `metro.mdx` | Metro config |
| `package-json.mdx` | package.json fields |
