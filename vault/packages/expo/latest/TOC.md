# expo Table of Contents

## Directory Map

```
contents/
├── get-started/              # Installation and quickstart (4 files)
├── tutorial/                 # Step-by-step tutorials (32 files)
│   ├── build-with-ai/        # AI-assisted development
│   └── eas/                  # EAS tutorial series
├── develop/                  # Core development guides (21 files)
│   ├── development-builds/   # Custom dev clients
│   └── user-interface/       # UI components and styling
├── router/                   # Expo Router / file-based navigation (48 files)
│   ├── basics/               # Routing fundamentals
│   ├── advanced/             # Advanced routing patterns
│   ├── reference/            # Router API reference
│   ├── migrate/              # Migration guides
│   └── web/                  # Web-specific routing
├── guides/                   # How-to guides (62 files)
│   ├── expo-ui-jetpack-compose/  # Android Jetpack Compose
│   ├── expo-ui-swift-ui/     # iOS SwiftUI integration
│   └── sdk-libraries-migration/  # Library migration guides
├── modules/                  # Native modules (21 files)
├── config-plugins/           # Config plugin system (7 files)
├── build/                    # EAS Build guides (9 files)
├── build-reference/          # EAS Build reference (22 files)
├── custom-builds/            # Custom build functions (3 files)
├── submit/                   # EAS Submit (4 files)
├── eas/                      # EAS services (44 files)
│   ├── environment-variables/ # Env var management (5 files)
│   ├── hosting/              # EAS Hosting (9 files)
│   ├── metadata/             # App store metadata (4 files)
│   ├── observe/              # Monitoring/observe (10 files)
│   └── workflows/            # EAS Workflows CI/CD (12 files)
├── eas-update/               # EAS Update / OTA (27 files)
├── eas-insights/             # EAS Insights analytics (1 file)
├── distribution/             # App distribution (4 files)
├── deploy/                   # Deployment guides (5 files)
├── review/                   # Review and preview sharing (3 files)
├── push-notifications/       # Push notification setup (8 files)
├── debugging/                # Debugging tools (5 files)
├── troubleshooting/          # Troubleshooting guides (6 files)
├── linking/                  # Deep linking (5 files)
├── brownfield/               # Brownfield React Native integration (4 files)
├── bare/                     # Bare workflow (6 files)
├── app-signing/              # Code signing and credentials (7 files)
├── workflow/                 # Development workflow (12 files)
├── agents/                   # AI agent integration guides (4 files)
├── monitoring/               # Monitoring services (1 file)
├── technical-specs/          # Technical specifications (2 files)
├── more/                     # Glossary, CLI reference (6 files)
└── versions/
    └── v56.0.0/              # SDK 56 API reference (242 files)
        ├── config/           # App config reference (4 files)
        └── sdk/              # All Expo SDK module APIs (237 files)
            ├── router/       # Expo Router API
            └── ui/           # Expo UI components
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New project setup | `contents/get-started/create-a-project.mdx` |
| Tutorial | `contents/tutorial/introduction.mdx` |
| Expo Router | `contents/router/basics/core-concepts.mdx` |
| SDK API reference | `contents/versions/v56.0.0/sdk/` |
| App config reference | `contents/versions/v56.0.0/config/app.mdx` |
| EAS Build setup | `contents/build/setup.mdx` |
| EAS Update (OTA) | `contents/eas-update/introduction.mdx` |
| Push notifications | `contents/push-notifications/overview.mdx` |
| Native modules | `contents/modules/overview.mdx` |
| Config plugins | `contents/config-plugins/introduction.mdx` |
| Debugging | `contents/debugging/tools.mdx` |
| Troubleshooting | `contents/troubleshooting/overview.mdx` |

## Detailed Structure

### get-started/ (4 files)

| File | Description |
|------|-------------|
| `create-a-project.mdx` | Creating a new Expo project |
| `set-up-your-environment.mdx` | Environment setup |
| `start-developing.mdx` | Starting development |
| `next-steps.mdx` | What to do after setup |

### tutorial/ (32 files)

| File / Folder | Description |
|------|-------------|
| `introduction.mdx` | Tutorial overview |
| `build-with-ai/` | AI-assisted Expo development |
| `eas/` | EAS Build, Submit, Update tutorial series |

### develop/ (21 files)

| File / Folder | Description |
|------|-------------|
| `development-builds/` | Custom development clients |
| `user-interface/` | UI components, fonts, images, animations |

### router/ (48 files)

| File / Folder | Description |
|------|-------------|
| `basics/` | File-based routing, layouts, navigation |
| `advanced/` | Dynamic routes, modals, tab groups |
| `reference/` | Router API and hooks reference |
| `migrate/` | Migrating from React Navigation |
| `web/` | Web support, SSR, static export |

### guides/ (62 files)

| File | Description |
|------|-------------|
| `assets.mdx` | Managing assets |
| `authentication.mdx` | Authentication patterns |
| `environment-variables.mdx` | Using environment variables |
| `icons.mdx` | App icons and splash screens |
| `local-first.mdx` | Local-first development |
| `new-architecture.mdx` | React Native new architecture |
| `permissions.mdx` | Runtime permissions |
| `splash-screen.mdx` | Splash screen configuration |
| `testing.mdx` | Testing strategies |
| `using-libraries.mdx` | Using third-party libraries |
| `expo-ui-jetpack-compose/` | Android Jetpack Compose integration |
| `expo-ui-swift-ui/` | iOS SwiftUI integration |
| `sdk-libraries-migration/` | SDK library migration guides |

### modules/ (21 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Native modules overview |
| `get-started.mdx` | Creating your first module |
| `module-api.mdx` | Module API reference |
| `android-lifecycle-listeners.mdx` | Android lifecycle |
| `ios-swift-ui-support.mdx` | iOS SwiftUI in modules |
| `native-module-tutorial.mdx` | Native module tutorial |

### config-plugins/ (7 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Config plugins overview |
| `plugins.mdx` | Writing plugins |
| `mods.mdx` | Mod system |
| `dangerous-mods.mdx` | Dangerous mods |
| `development-and-debugging.mdx` | Debugging plugins |
| `development-for-libraries.mdx` | Plugins in libraries |
| `patch-project.mdx` | Patching native projects |

### build/ (9 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | EAS Build overview |
| `setup.mdx` | EAS Build setup |
| `eas-json.mdx` | eas.json configuration |
| `building-on-ci.mdx` | CI/CD integration |
| `building-from-github.mdx` | GitHub Actions builds |
| `internal-distribution.mdx` | Internal app distribution |

### build-reference/ (22 files)

| File | Description |
|------|-------------|
| `build-configuration.mdx` | Build configuration reference |
| `android-builds.mdx` | Android build details |
| `ios-builds.mdx` | iOS build details |
| `infrastructure.mdx` | Build infrastructure specs |
| `caching.mdx` | Build caching |
| `local-builds.mdx` | Local EAS builds |
| `troubleshooting.mdx` | Build troubleshooting |

### eas/ (44 files)

| File / Folder | Description |
|------|-------------|
| `environment-variables/` | Secrets and env vars (5 files) |
| `hosting/` | EAS Hosting deployment (9 files) |
| `metadata/` | App store metadata automation (4 files) |
| `observe/` | Monitoring and observability (10 files) |
| `workflows/` | EAS Workflows CI/CD (12 files) |

### eas-update/ (27 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | EAS Update overview |
| `getting-started.mdx` | Setup guide |
| `how-eas-update-works.mdx` | Architecture |
| `rollouts.mdx` | Update rollout strategies |
| `deployment-patterns.mdx` | Deployment patterns |
| `code-signing.mdx` | OTA code signing |
| `debug-advanced-issues.mdx` | Advanced debugging |

### push-notifications/ (8 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Push notifications overview |
| `setup.mdx` | Setup guide |
| `sending-notifications.mdx` | Sending notifications |
| `receiving-notifications.mdx` | Receiving notifications |
| `push-notifications-setup.mdx` | FCM/APNs setup |

### debugging/ (5 files)

| File | Description |
|------|-------------|
| `tools.mdx` | Available debugging tools |
| `errors-and-warnings.mdx` | Error handling |
| `runtime-issues.mdx` | Runtime debugging |
| `devtools-plugins.mdx` | DevTools plugins |
| `create-devtools-plugins.mdx` | Creating custom DevTools plugins |

### troubleshooting/ (6 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Troubleshooting overview |
| `android-builds.mdx` | Android build issues |
| `ios-builds.mdx` | iOS build issues |

### bare/ (6 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Bare workflow overview |
| `installing-expo-modules.mdx` | Adding Expo to bare RN |
| `install-dev-builds-in-bare.mdx` | Dev builds in bare |

### app-signing/ (7 files)

| File | Description |
|------|-------------|
| `app-credentials.mdx` | Credentials overview |
| `managed-credentials.mdx` | Managed credentials |
| `local-credentials.mdx` | Local credentials |
| `existing-credentials.mdx` | Using existing credentials |

### agents/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | AI agents overview |
| `claude.mdx` | Claude Code integration |
| `cursor.mdx` | Cursor integration |
| `codex.mdx` | Codex integration |

### versions/v56.0.0/sdk/ (237 files)

SDK 56 API reference for all Expo packages. Each file covers one package: installation, usage examples, and full API.

Key packages:
- `accelerometer.mdx`, `gyroscope.mdx`, `barometer.mdx` - Sensors
- `audio.mdx`, `av.mdx`, `video.mdx` - Media
- `camera.mdx` - Camera API
- `file-system.mdx` - File system access
- `sqlite.mdx` - SQLite database
- `secure-store.mdx` - Encrypted storage
- `font.mdx` - Custom fonts
- `image.mdx` - Image component
- `location.mdx` - GPS/location
- `notifications.mdx` - Push notifications
- `router/` - Expo Router API
- `ui/` - Expo UI components (SwiftUI, Jetpack Compose, universal)
- `web-browser.mdx` - In-app browser
- `linear-gradient.mdx` - Gradients
- `blur-view.mdx` - Blur effects
- `haptics.mdx` - Haptic feedback
- `calendar.mdx` - Calendar access
- `contacts.mdx` - Contacts API
- `crypto.mdx` - Cryptographic functions

### versions/v56.0.0/config/ (4 files)

| File | Description |
|------|-------------|
| `app.mdx` | app.json / app.config.js reference |
| `metro.mdx` | Metro bundler config |
| `babel.mdx` | Babel config |
