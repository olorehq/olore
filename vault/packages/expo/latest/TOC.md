# expo Table of Contents

## Directory Map

```
contents/
├── get-started/, tutorial/   # Setup and step-by-step tutorials
├── develop/, guides/         # Development workflow and how-to guides
├── router/                   # Expo Router: basics, advanced, reference, web, migration
├── modules/, config-plugins/ # Native modules and config plugins
├── build/, build-reference/  # EAS Build setup and reference
├── eas-update/, submit/      # OTA updates and store submission
├── eas/                      # EAS hosting, workflows, observe, metadata, env vars
├── preview/simulators/       # Simulator/device preview docs
├── push-notifications/       # Push notifications
├── troubleshooting/, more/   # Troubleshooting and misc
└── versions/v58.0.0/         # SDK 58 API reference and app config
    ├── sdk/                  # Expo SDK packages (111 files)
    │   ├── router/           # Expo Router API
    │   └── ui/               # jetpack-compose, swift-ui, universal, drop-in-replacements
    └── config/               # app.json / babel / metro / package.json config reference
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/get-started/` |
| Tutorial | `contents/tutorial/` |
| SDK API lookup | `contents/versions/v58.0.0/sdk/` |
| App config | `contents/versions/v58.0.0/config/` |
| Routing | `contents/router/basics/` |
| Builds | `contents/build/` |
| OTA updates | `contents/eas-update/` |
| Troubleshooting | `contents/troubleshooting/` |

## Detailed Structure

### ./ (5 files)

| File | Description |
|------|-------------|
| `core-concepts.mdx` | Core concepts - An overview of Expo tools, features and services. |
| `eas-to-expo.mdx` | EAS and Expo service names - Learn the current Expo names of the services that were called EAS, such as Expo Build for EAS Build. |
| `faq.mdx` | FAQ - A list of common questions and limitations about Expo and related services. |
| `mcp.mdx` | Using Model Context Protocol (MCP) with Expo - A guide on integrating Model Context Protocol with Expo projects to enhance AI model capabilities. |
| `skills.mdx` | Expo Skills for AI agents - A list of official AI agent skills provided by Expo for building, deploying, and debugging Expo and React Native apps. |

### accounts/ (5 files)

| File | Description |
|------|-------------|
| `accounts/account-types.mdx` | Account types - Learn about the different types of Expo accounts and how to use them. |
| `accounts/audit-logs.mdx` | Audit logs - Learn how to track and analyze your account's activities by using the audit logs. |
| `accounts/programmatic-access.mdx` | Programmatic access - Learn about types of access tokens and how to use them. |
| `accounts/sso.mdx` | Single Sign-On (SSO) - Learn how your organization can use your identity provider to manage Expo users on your team. |
| `accounts/two-factor.mdx` | Two-factor authentication - Learn about how you leverage two-factor authentication (2FA) to secure your Expo account. |

### additional-resources/ (1 files)

| File | Description |
|------|-------------|
| `additional-resources/index.mdx` | Additional resources - A reference of resources that are useful to learn about Expo tooling and services. |

### agentic-workflows/ (6 files)

| File | Description |
|------|-------------|
| `agentic-workflows/agentic-ci.mdx` | Test pull requests with an AI agent - Add an agentic workflow in which a coding agent tests each pull request on an Expo Simulators session and posts a verdict  |
| `agentic-workflows/bug-triage.mdx` | Triage a bug report with an AI agent - Add an agentic workflow in which a coding agent reproduces a bug from a GitHub issue or TestFlight feedback on a remote A |
| `agentic-workflows/introduction.mdx` | Introduction to agentic workflows - Learn how a coding agent can test your app on a cloud simulator and return evidence for you to review. |
| `agentic-workflows/issue-to-pr.mdx` | Build a feature from an issue with an AI agent - Add an agentic workflow in which a coding agent builds what a GitHub issue asks for and opens a pull request th |
| `agentic-workflows/qa-swarm.mdx` | Test your app with a swarm of AI agents - Add an agentic workflow in which several coding agents test your app at the same time, each with one flow on its own c |
| `agentic-workflows/setup.mdx` | Set up a project for agentic workflows - Set up an Expo project one time for the agentic workflow guides, with a build profile, tokens, an agent runner, and a d |

### agents/ (6 files)

| File | Description |
|------|-------------|
| `agents/agent-device.mdx` | agent-device and Expo - Use agent-device to let your AI coding agent verify, debug, profile, and test a running Expo app across local and remote devices. |
| `agents/argent.mdx` | Argent and Expo - Use Argent to let your AI agent control, debug, and profile your Expo project on Android Emulators and iOS Simulators. |
| `agents/claude.mdx` | Claude Code and Expo - Use Claude Code to build, upgrade, debug, and deploy your Expo and React Native projects. |
| `agents/codex.mdx` | Codex and Expo - Use Codex to build, upgrade, debug, and deploy your Expo and React Native projects. |
| `agents/cursor.mdx` | Cursor and Expo - Use Cursor to build, upgrade, debug, and deploy your Expo and React Native projects. |
| `agents/index.mdx` | AI agents and Expo overview - Build and publish Expo and React Native apps with AI coding agents such as Claude Code, Codex, and Cursor. |

### app-signing/ (7 files)

| File | Description |
|------|-------------|
| `app-signing/app-credentials.mdx` | App credentials - Learn about what app credentials Android and iOS require. |
| `app-signing/apple-developer-program-roles-and-permissions.mdx` | Apple Developer Program roles and permissions for Expo Build - Learn about the Apple Developer account membership requirements for creating an Expo Build. |
| `app-signing/existing-credentials.mdx` | Using existing credentials - Learn about different options for supplying your app signing credentials to Expo Build. |
| `app-signing/local-credentials.mdx` | Using local credentials - Learn how to configure and use local credentials when using Expo Build. |
| `app-signing/managed-credentials.mdx` | Using automatically managed credentials - Learn how to automatically manage your app credentials with Expo Services. |
| `app-signing/security.mdx` | Security - Learn how credentials and other sensitive data are handled when using Expo Services. |
| `app-signing/syncing-credentials.mdx` | Sync credentials between remote and local sources - Learn how to sync credentials between remote and local sources. |

### archive/ (5 files)

| File | Description |
|------|-------------|
| `archive/configuring-js-engines.mdx` | Configure JS engines - A guide on configuring JS engines for both Android and iOS in an Expo project. |
| `archive/customizing-webpack.mdx` | Bundle with webpack - Learn about different webpack bundler configurations that can be customized. |
| `archive/e2e-tests.mdx` | Run E2E tests on EAS Build - Learn how to set up and run E2E tests on EAS Build with Maestro. |
| `archive/index.mdx` | Archive |
| `archive/publishing-websites-webpack.mdx` | Publish websites with Webpack - Different ways to publish the Expo web app with third-party services with webpack. |

### bare/ (6 files)

| File | Description |
|------|-------------|
| `bare/install-dev-builds-in-bare.mdx` | Install expo-dev-client in an existing React Native project - Learn how to install and configure expo-dev-client in your existing React Native project. |
| `bare/installing-expo-modules.mdx` | Install Expo modules in an existing React Native project - Learn how to prepare your existing React Native project to install and use any Expo module. |
| `bare/installing-updates.mdx` | Install expo-updates in an existing React Native project - Learn how to install and configure expo-updates in your existing React Native project. |
| `bare/overview.mdx` | Overview of using Expo with existing React Native apps - Learn how to use Expo tools and services with existing React Native apps. |
| `bare/upgrade.mdx` | Native project upgrade helper - View file-by-file diffs of all the changes you need to make to your native projects to upgrade them to the next Expo SDK version |
| `bare/using-expo-cli.mdx` | Migrate from React Native CLI to Expo CLI - Learn how to migrate from React Native CLI (@react-native-community/cli) to Expo CLI for any React Native project. |

### billing/ (6 files)

| File | Description |
|------|-------------|
| `billing/faq.mdx` | Plans, billing, and payment FAQs - A reference of commonly asked questions on Expo Services plans, billing, and payment. |
| `billing/invoices-and-receipts.mdx` | View payment history, invoices, and receipts - Learn how to view your account's payment history, download invoices and receipts, and request a refund for a char |
| `billing/manage.mdx` | Manage plans and billing - Learn how to update, downgrade, or cancel your Expo account's plans and manage billing details. |
| `billing/overview.mdx` | Billing: Overview - An overview of information on billing and subscriptions to manage your Expo account's plans, invoices, receipts, payments, and usage. |
| `billing/plans.mdx` | Subscriptions, plans, and add-ons - In-depth guide on available Expo Services plans and how they work, usage-based pricing and add-ons. |
| `billing/usage-based-pricing.mdx` | Usage-based pricing - Learn how Expo applies usage-based billing for customers who exceed their plan quotas and how to monitor your Expo Build and Expo Update u |

### brownfield/ (4 files)

| File | Description |
|------|-------------|
| `brownfield/integrated-approach.mdx` | How to add Expo to a native app using the integrated approach - A guide for adding Expo and React Native to existing native (brownfield) apps using the integrat |
| `brownfield/isolated-approach.mdx` | How to add Expo to a native app using the isolated approach - A guide for adding Expo and React Native as a native library and integrating it into an existing ( |
| `brownfield/lifecycle-listeners.mdx` | Configuring lifecycle listeners - Learn about the mechanism that allows the Expo Modules API to hook into the lifecycle of your app. |
| `brownfield/overview.mdx` | Integrating Expo tools into existing native apps - An overview of how you can integrate Expo tools into existing native apps ("brownfield" apps). |

### build/ (10 files)

| File | Description |
|------|-------------|
| `build/automate-submissions.mdx` | Automate submissions - Learn how to enable automatic submissions with Expo Build. |
| `build/building-from-github.mdx` | Trigger builds from the Expo GitHub App - Learn how to trigger builds with Expo Build for your app using the Expo GitHub App. |
| `build/building-on-ci.mdx` | Trigger builds from CI - Learn how to trigger builds with Expo Build for your app from a CI environment such as GitHub Actions and more. |
| `build/eas-json.mdx` | Configure Expo Build with eas.json - Learn how a project using Expo Services is configured with eas.json. |
| `build/index.mdx` | Expo Build |
| `build/internal-distribution.mdx` | Internal distribution - Learn how Expo Build provides shareable URLs for your builds with your team for internal distribution. |
| `build/introduction.mdx` | Expo Build is a hosted service for building app binaries for your Expo and React Native projects. |
| `build/orbit.mdx` | Expo Orbit - Accelerate your development workflow with one-click build and update launches and simulator management. |
| `build/setup.mdx` | Create your first build - Learn how to create a build for your app with Expo Build. |
| `build/updates.mdx` | Using Expo Update - Learn how to use Expo Update with Expo Build. |

### build-reference/ (23 files)

| File | Description |
|------|-------------|
| `build-reference/android-builds.mdx` | Android build process - Learn how an Android project is built on Expo Build. |
| `build-reference/apk.mdx` | Build APKs for Android Emulators and devices - Learn how to configure and install a .apk for Android Emulators and devices when using Expo Build. |
| `build-reference/app-extensions.mdx` | iOS App Extensions - Learn how to use app extensions with Expo Build to add custom functionality. |
| `build-reference/app-versions.mdx` | App version management - Learn about different version types and how to manage them remotely or locally. |
| `build-reference/build-configuration.mdx` | Build configuration process - Learn how EAS CLI configures a project for Expo Build. |
| `build-reference/build-with-monorepos.mdx` | Set up Expo Build with a monorepo - Learn how to set up Expo Build with a monorepo. |
| `build-reference/caching.mdx` | Cache dependencies - Learn how to speed up your builds by caching dependencies. |
| `build-reference/easignore.mdx` | Ignore files via .easignore - Learn how to configure Expo Build to ignore unnecessary files during the build process. |
| `build-reference/git-submodules.mdx` | Using Git submodules - Learn how to configure Expo Build to use git submodules. |
| `build-reference/infrastructure.mdx` | Build server infrastructure - Learn about the current build server infrastructure when using Expo Build. |
| `build-reference/ios-builds.mdx` | iOS build process - Learn how an iOS project is built on Expo Build. |
| `build-reference/ios-capabilities.mdx` | iOS capabilities - Learn about built-in iOS capabilities supported in Expo Build and how to enable or disable them. |
| `build-reference/limitations.mdx` | Expo Build limitations - Learn about the current limitations of Expo Build. |
| `build-reference/local-builds.mdx` | Run Expo Build locally with local flag - Learn how to use Expo Build locally on your machine or a custom infrastructure using the --local flag. |
| `build-reference/npm-cache-with-yarn.mdx` | Using npm cache with Yarn 1 (Classic) - Learn how to use npm cache by overriding the registry in Yarn 1 (Classic). |
| `build-reference/npm-hooks.mdx` | Build lifecycle hooks - Learn how to use the Expo Build lifecycle hooks with npm to customize your build process. |
| `build-reference/npx-testflight.mdx` | npx testflight command - A single command that allows you to build, sign, and submit your iOS app to TestFlight. |
| `build-reference/private-npm-packages.mdx` | Using private npm packages - Learn how to configure Expo Build to use private npm packages. |
| `build-reference/project-upload.mdx` | How EAS CLI uploads your project - Learn which files EAS CLI uploads to Expo Build and how the version control workflow changes them. |
| `build-reference/repack.mdx` | Repack app - Repackage an existing APK, IPA, or .app with an updated JavaScript bundle without a full native rebuild. |
| `build-reference/simulators.mdx` | Build for iOS Simulators - Learn how to configure and install build for iOS simulators when using Expo Build. |
| `build-reference/troubleshooting.mdx` | Troubleshoot build errors and crashes - A reference for troubleshooting build errors and crashes when using Expo Build. |
| `build-reference/variants.mdx` | Install app variants on the same device - Learn how to install multiple variants of an app on the same device. |

### config-plugins/ (7 files)

| File | Description |
|------|-------------|
| `config-plugins/dangerous-mods.mdx` | Using a dangerous mod - Learn about dangerous mods and how to use them when creating a config plugin. |
| `config-plugins/development-and-debugging.mdx` | Developing and debugging a plugin - Learn about development best practices and debugging techniques for Expo config plugins. |
| `config-plugins/development-for-libraries.mdx` | Plugin development for libraries - Learn how to develop config plugins for Expo and React Native libraries. |
| `config-plugins/introduction.mdx` | Introduction to config plugins - An introduction to Expo config plugins. |
| `config-plugins/mods.mdx` | Mods - Learn about mods and how to use them when creating a config plugin. |
| `config-plugins/patch-project.mdx` | Using patch-project - Learn about how to use patch-project to create generate, apply, and preserve native changes in your Expo project. |
| `config-plugins/plugins.mdx` | Create and use config plugins - Learn how to create and use a config plugins in your Expo project. |

### custom-builds/ (3 files)

| File | Description |
|------|-------------|
| `custom-builds/functions.mdx` | TypeScript functions - Learn how to create and use Expo Build functions in your custom build configurations. |
| `custom-builds/get-started.mdx` | Get started with custom builds - Learn how to extend Expo Build with custom builds. |
| `custom-builds/schema.mdx` | Custom build configuration schema - A reference of configuration options for custom builds with Expo Build. |

### debugging/ (5 files)

| File | Description |
|------|-------------|
| `debugging/create-devtools-plugins.mdx` | Create a dev tools plugin - Learn how to create a dev tools plugin to enhance your development experience. |
| `debugging/devtools-plugins.mdx` | Dev tools plugins - Learn about using dev tools plugins to inspect and debug your Expo project. |
| `debugging/errors-and-warnings.mdx` | Errors and warnings - Learn about Redbox errors and stack traces in your Expo project. |
| `debugging/runtime-issues.mdx` | Debugging runtime issues - Learn about different techniques available to debug your Expo project. |
| `debugging/tools.mdx` | Debugging and profiling tools - Learn about different tools available to inspect your Expo project at runtime. |

### deploy/ (5 files)

| File | Description |
|------|-------------|
| `deploy/app-stores-metadata.mdx` | App stores metadata - A brief overview of how to use Expo Metadata to automate and maintain your app store presence. |
| `deploy/build-project.mdx` | Build your project for app stores - Learn how to create a production build for your app that is ready to be submitted to app stores from the command line using  |
| `deploy/send-over-the-air-updates.mdx` | Send over-the-air updates - Learn how to send over-the-air updates to push critical bug fixes and improvements to your users. |
| `deploy/submit-to-app-stores.mdx` | Submit to app stores - An overview of how to submit your app to the Google Play Store and Apple App Store. |
| `deploy/web.mdx` | Publish your web app - Learn how to deploy your web app using Expo Hosting. |

### develop/ (5 files)

| File | Description |
|------|-------------|
| `develop/app-navigation.mdx` | Navigation in Expo and React Native apps - Learn about the recommended approach for integrating navigation in an Expo and React Native project. |
| `develop/authentication.mdx` | Authentication in Expo and React Native apps - Learn about setting up authentication in your Expo project. |
| `develop/database.mdx` | Databases in Expo and React Native apps - Learn about adding a database to your Expo project. |
| `develop/tools.mdx` | Tools for development - An overview of Expo tools and websites that will help you during various aspects of your project-building journey. |
| `develop/unit-testing.mdx` | Unit testing with Jest - Learn how to set up and configure the jest-expo library to write unit and snapshot tests for a project with Jest. |

### develop/development-builds/ (5 files)

| File | Description |
|------|-------------|
| `develop/development-builds/development-workflows.mdx` | Tools, workflows and extensions - Learn more about different tools, workflows and extensions available when working with development builds. |
| `develop/development-builds/faq.mdx` | Development builds FAQ - A collection of common questions about development builds, Expo Go, and Expo Build. |
| `develop/development-builds/introduction.mdx` | Introduction to development builds - Learn how to create a development build in your Expo project and why use a development build instead of Expo Go. |
| `develop/development-builds/share-with-your-team.mdx` | Share a development build with your team - Learn how to install and share the development with your team or run it on multiple devices. |
| `develop/development-builds/use-development-builds.mdx` | Use a development build - Learn how to use development builds for a project. |

### develop/user-interface/ (9 files)

| File | Description |
|------|-------------|
| `develop/user-interface/animation.mdx` | Animation - Learn how to integrate React Native animations and use it in your Expo project. |
| `develop/user-interface/assets.mdx` | Assets - Learn about using static assets in your project, including images, videos, sounds, database files, and fonts. |
| `develop/user-interface/color-themes.mdx` | Color themes - Learn how to support light and dark modes in your app. |
| `develop/user-interface/fonts.mdx` | Fonts - Learn how to integrate custom fonts in your app using local files or Google Font packages |
| `develop/user-interface/next-steps.mdx` | Next steps - A list of useful resources to learn more about implementing navigation and UI in your app. |
| `develop/user-interface/safe-areas.mdx` | Safe areas - Learn how to add safe areas for screen components inside your Expo project. |
| `develop/user-interface/splash-screen-and-app-icon.mdx` | Splash screen and app icon - Learn how to add a splash screen and app icon to your Expo project. |
| `develop/user-interface/store-data.mdx` | Store data - Learn about different libraries available to store data in your Expo project. |
| `develop/user-interface/system-bars.mdx` | System bars - Learn how to handle and customize system bars for safe areas and edge-to-edge layout in your Expo project. |

### distribution/ (4 files)

| File | Description |
|------|-------------|
| `distribution/app-size.mdx` | Understanding app size - Learn about how to determine what the actual size of your app will be when distributed to users, and how to get insights into your app  |
| `distribution/app-stores.mdx` | App stores best practices - Learn about the best practices when submitting an app to the app stores. |
| `distribution/app-transfers.mdx` | App transfers - An overview of transferring the ownership of an app to a different entity. |
| `distribution/introduction.mdx` | Distribution: Overview - An overview of submitting an app to the app stores or with the internal distribution. |

### eas/ (5 files)

| File | Description |
|------|-------------|
| `eas/cli.mdx` | EAS CLI reference - EAS CLI is a command-line tool that allows you to interact with Expo Services from your terminal. |
| `eas/index.mdx` | Expo Services - Learn about Expo Services for Expo and React Native apps. |
| `eas/json.mdx` | Configuration with eas.json - Learn about available properties for EAS CLI, Expo Build, and Expo Submit to configure and override their default behavior from wi |
| `eas/protected-resources.mdx` | Protected resources - Learn how to restrict who can interact with sensitive Expo Services resources, such as the update channel your production app uses. |
| `eas/webhooks.mdx` | Webhooks - Learn how to configure webhooks to get alerts on Expo Build and Submit completion. |

### eas-insights/ (5 files)

| File | Description |
|------|-------------|
| `eas-insights/app-usage.mdx` | App usage - View your app's usage across platforms, app store versions, and time in the App usage tab of Expo Insights. |
| `eas-insights/eas-cli.mdx` | Query Expo Insights with EAS CLI - Query Expo Workflows and Maestro insights from the terminal with the eas workflow:insights commands. |
| `eas-insights/introduction.mdx` | Expo Insights - An introduction to Expo Insights, a dashboard that surfaces trends in your app's usage, workflow runs, and Maestro tests. |
| `eas-insights/maestro.mdx` | Maestro insights - Track flow health, flaky flows, and failure patterns for your Maestro end-to-end tests in the Maestro tab of Expo Insights. |
| `eas-insights/workflows.mdx` | Expo Workflows insights - Track run counts, success rates, and trends for your Expo Workflows in the Workflows tab of Expo Insights. |

### eas-update/ (29 files)

| File | Description |
|------|-------------|
| `eas-update/asset-selection.mdx` | Asset selection and exclusion - Learn how to use the asset selection feature and verify that an update includes all required app assets. |
| `eas-update/bundle-diffing.mdx` | Bundle diffing for Expo Update - Enable your project to accept bundle diffs when available. |
| `eas-update/channel-surfing.mdx` | Channel surfing - Learn how to switch Expo Update channels at runtime. |
| `eas-update/code-signing.mdx` | End-to-end code signing with Expo Update - Learn how code signing and key rotation work in Expo Update. |
| `eas-update/codepush.mdx` | Migrate from CodePush - A guide to help migrate from CodePush to Expo Update. |
| `eas-update/debug.mdx` | Expo Update debugging - Learn how to use basic debugging techniques to fix an update issue. |
| `eas-update/deployment-patterns.mdx` | Alternative deployment patterns - Learn about different deployment patterns for your project when using Expo Update. |
| `eas-update/deployment.mdx` | Deploy updates - Learn a simple but powerful process for safely deploying updates to your users. |
| `eas-update/download-updates.mdx` | Downloading updates - Learn strategies for downloading and launching updates. |
| `eas-update/eas-cli.mdx` | Manage branches and channels with EAS CLI - Learn how to link a branch to a channel and publish updates with EAS CLI. |
| `eas-update/error-recovery.mdx` | Error recovery - Learn how to take advantage of using built-in error recovery when using expo-updates library. |
| `eas-update/estimate-bandwidth.mdx` | Estimate bandwidth usage - Learn how to estimate bandwidth usage for Expo Update. |
| `eas-update/expo-dev-client.mdx` | Preview updates in development builds - Learn how to use the expo-dev-client library to preview a published Expo Update inside a development build. |
| `eas-update/getting-started.mdx` | Get started with Expo Update - Learn how to get started with the setup required to configure and use Expo Update in your project. |
| `eas-update/github-actions.mdx` | GitHub Action for PR previews - Learn how to use GitHub Actions to automate publishing updates with Expo Update. |
| `eas-update/how-it-works.mdx` | How Expo Update works - A conceptual overview of how Expo Update works. |
| `eas-update/integration-in-existing-native-apps.mdx` | Using Expo Update in an existing native app - Learn how to integrate Expo Update into your existing native Android and iOS app to enable over-the-air updates. |
| `eas-update/introduction.mdx` | Expo Update is a cloud service that serves updates for projects using the expo-updates library. |
| `eas-update/migrate-from-classic-updates.mdx` | Migrate from Classic Updates - A guide to help migrate from Classic Updates to Expo Update. |
| `eas-update/optimize-assets.mdx` | Optimize assets for Expo Update - Learn how Expo Update downloads assets and how to optimize them for download size. |
| `eas-update/override.mdx` | Override update configuration at runtime - Learn how to override the update URL and request headers at runtime to control which update is loaded on the client s |
| `eas-update/preview.mdx` | Preview updates - Learn how to preview updates in development, preview, and production builds. |
| `eas-update/request-proxying.mdx` | Request proxying - Proxy requests to the Expo Update server through your own server. |
| `eas-update/rollbacks.mdx` | Rollbacks - Rollback a branch to a previous update or the embedded update. |
| `eas-update/rollouts.mdx` | Rollouts - Learn how to incrementally deploy updates to your users by using a rollout mechanism. |
| `eas-update/runtime-versions.mdx` | Runtime versions and updates - Learn about different runtime version policies and how they may suit your project. |
| `eas-update/standalone-service.mdx` | Using Expo Update without other Expo Services - Learn how to use Expo Update independently of other Expo Services, such as Expo Build. |
| `eas-update/store-privacy-declarations.mdx` | App store privacy declarations for Expo Update - Learn what the expo-updates library sends off the device, what Expo stores, and how to declare it in the Google |
| `eas-update/trace-update-id-expo-dashboard.mdx` | How to trace an update ID back to the Expo dashboard - Learn how to trace an update ID back to the Expo dashboard when using Expo Update and expo-updates librar |

### eas/environment-variables/ (5 files)

| File | Description |
|------|-------------|
| `eas/environment-variables/faq.mdx` | Frequently asked questions about environment variables in Expo Services. |
| `eas/environment-variables/index.mdx` | Environment variables in Expo Services - An overview of how to use Expo Services environment variables across builds, updates, and workflows. |
| `eas/environment-variables/manage.mdx` | Create and manage environment variables in Expo Services - Learn how to create, scope, and consume environment variables with Expo dashboard and EAS CLI. |
| `eas/environment-variables/usage.mdx` | Using environment variables in Expo Services - Learn how to use environment variables in builds, updates, hosting, and workflow jobs with Expo Services. |
| `eas/environment-variables/without-eas.mdx` | Using environment variables without Expo Services - Learn how to manage environment variables in Expo and React Native projects without Expo Services. |

### eas/hosting/ (7 files)

| File | Description |
|------|-------------|
| `eas/hosting/api-routes.mdx` | API Routes - Learn how to inspect requests from API routes on the Expo Hosting dashboard. |
| `eas/hosting/custom-domain.mdx` | Custom domain - Set up a custom domain for your production deployment. |
| `eas/hosting/deployments-and-aliases.mdx` | Assign aliases and promote to production - Learn about deployment URLs and how to set up aliases. |
| `eas/hosting/get-started.mdx` | Deploy your first Expo Router and React app - Learn how to deploy your Expo Router and React apps to Expo Hosting. |
| `eas/hosting/index.mdx` | Expo Hosting |
| `eas/hosting/introduction.mdx` | Introduction to Expo Hosting - Expo Hosting is a service for quickly deploying web projects built using the Expo Router library and React Native web. |
| `eas/hosting/workflows.mdx` | Web deployments with Expo Workflows - Learn how to automate website and server deployments with Expo Hosting and Workflows. |

### eas/hosting/reference/ (3 files)

| File | Description |
|------|-------------|
| `eas/hosting/reference/caching.mdx` | Caching with Expo Hosting deployments - Learn how caching works on Expo Hosting. |
| `eas/hosting/reference/responses-and-headers.mdx` | Default responses and headers - Defaults that are added automatically on requests when using Expo Hosting. |
| `eas/hosting/reference/worker-runtime.mdx` | Expo Hosting worker runtime - Learn about Expo Hosting worker runtime and Node.js compatibility. |

### eas/metadata/ (4 files)

| File | Description |
|------|-------------|
| `eas/metadata/config.mdx` | Configuring Expo Metadata - Learn about different ways to configure Expo Metadata. |
| `eas/metadata/getting-started.mdx` | Get started with Expo Metadata - Learn how to automate and maintain your app store presence from the command line with Expo Metadata. |
| `eas/metadata/index.mdx` | Expo Metadata - An overview on how to automate and maintain your app store presence from the command line with Expo Metadata. |
| `eas/metadata/schema.mdx` | Schema for Expo Metadata - A reference of store config in Expo Metadata. |

### eas/observe/ (10 files)

| File | Description |
|------|-------------|
| `eas/observe/ai-agents.mdx` | Analyze Expo Observe data with AI - Let an AI agent query and interpret Expo Observe metrics, events, errors, and sessions through the Expo MCP Server or the EA |
| `eas/observe/configuration.mdx` | Configure Expo Observe - Control how Expo Observe collects and dispatches metrics, including environment settings, development mode, custom endpoints, and data  |
| `eas/observe/dashboard.mdx` | Expo Observe dashboard - View performance metrics, filter by platform, environment, and release, and investigate individual sessions in the Expo Observe dashboa |
| `eas/observe/eas-cli.mdx` | Querying with EAS CLI - Query Expo Observe metrics, events, errors, and sessions from the terminal with the eas observe commands. |
| `eas/observe/eas-update.mdx` | Expo Update download performance - Track how long Expo Update OTA bundles take to download on real user devices, with per-update breakdowns in the Expo Observe  |
| `eas/observe/errors.mdx` | Error reporting - Record JavaScript errors and native crashes from your app and investigate stack traces in the Expo Observe dashboard. |
| `eas/observe/events.mdx` | User-defined events - Log named events from your app to track custom signals visible in the Expo Observe dashboard. |
| `eas/observe/get-started.mdx` | Set up Expo Observe - Learn how to install Expo Observe and start collecting performance metrics from your production app. |
| `eas/observe/index.mdx` | Expo Observe |
| `eas/observe/introduction.mdx` | Introduction to Expo Observe - Expo Observe is a performance monitoring service that tracks how your app performs in production across real devices and conditio |

### eas/observe/integrations/ (5 files)

| File | Description |
|------|-------------|
| `eas/observe/integrations/expo-image.mdx` | Expo Image integration - Detect oversized images in your production app by enabling the Expo Image integration for Expo Observe. |
| `eas/observe/integrations/expo-router.mdx` | Expo Router integration - Track per-route render and interactive timings by enabling the Expo Router integration for Expo Observe. |
| `eas/observe/integrations/react-native-reanimated.mdx` | Reanimated integration - Report Reanimated errors and warnings from your production app by enabling the Reanimated integration for Expo Observe. |
| `eas/observe/integrations/react-navigation.mdx` | React Navigation integration - Track per-screen render and interactive timings by enabling the React Navigation integration for Expo Observe. |
| `eas/observe/integrations/third-party.mdx` | Integrate a third-party package with Expo Observe - Learn how to add an optional Expo Observe integration to a third-party package. |

### eas/observe/reference/ (4 files)

| File | Description |
|------|-------------|
| `eas/observe/reference/client-id.mdx` | Client ID - Read the Expo Services client ID that Expo Observe records on every metric and event, and use it to correlate data with other services. |
| `eas/observe/reference/metrics.mdx` | Metrics reference - A reference of each performance metric tracked by Expo Observe, including concepts and data handling. |
| `eas/observe/reference/store-privacy-declarations.mdx` | App store privacy declarations for Expo Observe - Learn what the expo-observe library sends off the device, what Expo stores, and how to declare it in the Googl |
| `eas/observe/reference/troubleshooting.mdx` | Troubleshooting Expo Observe - Solutions for common Expo Observe issues. |

### eas/workflows/ (12 files)

| File | Description |
|------|-------------|
| `eas/workflows/automating-eas-cli.mdx` | Automating EAS CLI commands - Learn how to automate sequences of EAS CLI commands with Expo Workflows. |
| `eas/workflows/custom-functions.mdx` | Custom functions in Expo Workflows - Learn how to define reusable step sequences with custom functions. |
| `eas/workflows/environment.mdx` | Environment variables in Expo Workflows - Reference for the environment variables available inside Expo Workflows jobs, including the env context and additional |
| `eas/workflows/get-started.mdx` | Get started with Expo Workflows - Learn how to use Expo Workflows to automate your React Native CI/CD development and release processes. |
| `eas/workflows/introduction.mdx` | Introduction to Expo Workflows - Expo Workflows is a CI/CD service for automating builds, updates, submissions, and tests for React Native and Expo apps. |
| `eas/workflows/limitations.mdx` | Expo Workflows limitations - Learn about the current limitations of Expo Workflows. |
| `eas/workflows/manage-workflow-runs.mdx` | Manage workflow runs in Expo Workflows - Learn how to view, cancel, and re-run workflow runs in Expo Workflows. |
| `eas/workflows/pre-packaged-jobs.mdx` | Pre-packaged jobs in Expo Workflows - Learn how to set up and use pre-packaged jobs in Expo Workflows. |
| `eas/workflows/rest-api.mdx` | Workflows REST API - Trigger a workflow and check its status from your own systems with the Expo Services REST API. |
| `eas/workflows/reusable-workflows.mdx` | Reusable workflows in Expo Workflows - Learn how to call a workflow from another workflow to reuse its jobs. |
| `eas/workflows/syntax.mdx` | Syntax for Expo Workflows - Reference guide for the Expo Workflows configuration file syntax. |
| `eas/workflows/troubleshooting.mdx` | Troubleshoot Expo Workflows - Learn how to diagnose and fix common issues when running Expo Workflows. |

### eas/workflows/examples/ (6 files)

| File | Description |
|------|-------------|
| `eas/workflows/examples/branch-cleanup.mdx` | Clean up Expo Update branches with Expo Workflows - Learn how to delete Expo Update branches when GitHub branches are deleted using Expo Workflows. |
| `eas/workflows/examples/create-development-builds.mdx` | Create development builds with Expo Workflows - Learn how to create development builds with Expo Workflows. |
| `eas/workflows/examples/deploy-to-production.mdx` | Deploy to production with Expo Workflows - Learn how to deploy to production with Expo Workflows. |
| `eas/workflows/examples/e2e-tests.mdx` | Run E2E tests on Expo Workflows with Maestro - Learn how to set up and run E2E tests on Expo Workflows with Maestro. |
| `eas/workflows/examples/introduction.mdx` | Expo Workflows examples - Common React Native CI/CD workflows for developing, reviewing, and releasing your app. |
| `eas/workflows/examples/publish-preview-update.mdx` | Publish preview updates with Expo Workflows - Learn how to publish preview updates with Expo Workflows. |

### feature-preview/ (1 files)

| File | Description |
|------|-------------|
| `feature-preview/index.mdx` | Feature preview |

### get-started/ (4 files)

| File | Description |
|------|-------------|
| `get-started/create-a-project.mdx` | Create a project - Learn how to create a new Expo project. |
| `get-started/next-steps.mdx` | Next steps - Develop, review, and submit your project. |
| `get-started/set-up-your-environment.mdx` | Set up your environment - Learn how to set up your development environment to start building with Expo. |
| `get-started/start-developing.mdx` | Start developing - Make your first change to an Expo project and see it live on your device. |

### guides/ (58 files)

| File | Description |
|------|-------------|
| `guides/adopting-prebuild.mdx` | Adopt Prebuild in an existing React Native project - Learn how to adopt Expo Prebuild in a project that was bootstrapped with React Native CLI. |
| `guides/analyzing-bundles.mdx` | Analyzing JavaScript bundles with Expo Atlas and Lighthouse - Learn about improving the production JavaScript bundle size of Expo apps and websites with Expo At |
| `guides/apple-privacy.mdx` | Privacy manifests - Learn about configuring iOS privacy manifests for your mobile app. |
| `guides/authentication.mdx` | Authentication with OAuth or OpenID providers - Learn how to utilize the expo-auth-session library to implement authentication with OAuth or OpenID providers. |
| `guides/building-for-tv.mdx` | Build Expo apps for TV - A guide for building an Expo app for an Android TV or Apple TV target. |
| `guides/cache-builds-remotely.mdx` | Use build cache providers - Accelerate local development by caching and reusing builds from a provider. |
| `guides/controlled-components.mdx` | Controlled components - Learn how to use controlled components in React Native to control a TextInput, format text as app users type, restrict input, and keep t |
| `guides/customizing-metro.mdx` | Metro bundler - Learn about different Metro bundler configurations that can be customized. |
| `guides/dom-components.mdx` | Using React DOM in Expo native apps - Learn about rendering React DOM components in Expo native apps using the 'use dom' directive. |
| `guides/editing-richtext.mdx` | Edit rich text - Learn about current approaches to preview and edit rich text in React Native. |
| `guides/environment-variables.mdx` | Environment variables in Expo - Learn how to use environment variables in an Expo project. |
| `guides/facebook-authentication.mdx` | Using Facebook authentication - A guide on using react-native-fbsdk-next library to integrate Facebook authentication in your Expo project. |
| `guides/google-authentication.mdx` | Using Google authentication - A guide on using react-native-nitro-google-signin or @react-native-google-signin/google-signin to integrate Google authentication  |
| `guides/icons.mdx` | Expo Vector Icons - Learn how to use various types of icons in your Expo app, including react native vector icons, custom icon fonts, icon images, and icon butt |
| `guides/in-app-purchases.mdx` | Using in-app purchases - Learn about how to use in-app purchases in your Expo app. |
| `guides/ios-developer-mode.mdx` | iOS Developer Mode - Learn how to enable iOS Developer Mode setting on iOS 16 and above to run internal distribution builds and local development builds. |
| `guides/keyboard-handling.mdx` | Keyboard handling - A guide for handling common keyboard interactions on an Android or iOS device. |
| `guides/local-app-development.mdx` | Create a debug build locally - Learn how to create a debug build for your Expo app locally. |
| `guides/local-app-overview.mdx` | Build locally: Overview - An overview of how to build your app locally using your own machine for Expo projects. |
| `guides/local-app-production.mdx` | Create a release build locally - Learn how to create a release (production) build for your Expo app locally. |
| `guides/local-first.mdx` | Local-first architecture with Expo - An introduction to the emerging local-first software movement, including links to relevant learning resources and tools. |
| `guides/local-https-development.mdx` | Using local HTTPS development - Learn how to set up local HTTPS for Expo web apps. |
| `guides/localization.mdx` | Localization - Learn about getting started and configuring localization in an Expo project using expo-localization. |
| `guides/minify.mdx` | Minifying JavaScript - Learn about customizing the JavaScript minification process in Expo CLI with Metro bundler. |
| `guides/monorepos.mdx` | Work with monorepos - Learn about setting up Expo projects in a monorepo with workspaces. |
| `guides/new-architecture.mdx` | React Native's New Architecture - Learn about React Native's "New Architecture" and how and why to migrate to it. |
| `guides/overview.mdx` | Guides: Overview |
| `guides/permissions.mdx` | Permissions - Learn about configuring and adding permissions in an app config file. |
| `guides/prebuilt-expo-modules.mdx` | Precompiled Expo Modules - Learn how precompiled Expo Modules reduce native build times on Android and iOS. |
| `guides/progressive-web-apps.mdx` | Progressive web apps - Learn how to add progressive web app support to Expo websites. |
| `guides/publishing-websites.mdx` | Publish websites - Learn how to deploy Expo websites for production. |
| `guides/react-compiler.mdx` | React Compiler - Learn how to enable and use the React Compiler in Expo apps. |
| `guides/server-components.mdx` | Using React Server Components in Expo Router apps - Learn about rendering React components on the server in Expo. |
| `guides/store-assets.mdx` | Create app store assets - Learn how to create screenshots and previews for your app's store pages. |
| `guides/tailwind.mdx` | Tailwind CSS - Learn how to configure and use Tailwind CSS in your Expo project. |
| `guides/testing-rsc.mdx` | Testing React Server Components - Learn about writing unit tests for React Server Components in Expo. |
| `guides/tree-shaking.mdx` | Tree shaking and code removal - Learn about how Expo CLI optimizes production JavaScript bundles. |
| `guides/typescript.mdx` | Using TypeScript - An in-depth guide on configuring an Expo project with TypeScript. |
| `guides/using-a-cms.mdx` | Using a Content Management System (CMS) - An overview of Content Management Systems (CMS) available in the Expo and React Native ecosystem. |
| `guides/using-analytics.mdx` | React Native analytics SDKs and libraries - An overview of analytics services available in the Expo and React Native ecosystem. |
| `guides/using-authentication.mdx` | Using authentication SDKs and libraries - An overview of authentication integrations available in the Expo and React Native ecosystem. |
| `guides/using-bugsnag.mdx` | Using BugSnag - A guide on installing and configuring BugSnag for end-to-end error reporting and analytics. |
| `guides/using-bun.mdx` | Using Bun - A guide on using Bun with Expo and Expo Services. |
| `guides/using-clerk.mdx` | Using Clerk - Learn how to add Clerk authentication and user management in your Expo and React Native projects. |
| `guides/using-convex.mdx` | Using Convex - Add a database to your app with Convex. |
| `guides/using-e2e.mdx` | Using e2e - Learn how to test your Expo app with e2e, an open source end-to-end testing framework, on an Android Emulator or iOS Simulator. |
| `guides/using-eslint.mdx` | Using ESLint and Prettier - A guide on configuring ESLint and Prettier to format Expo apps. |
| `guides/using-feature-flags.mdx` | React Native feature flag services - An overview of feature flag services available in the Expo and React Native ecosystem. |
| `guides/using-firebase.mdx` | Using Firebase - A guide on getting started and using Firebase JS SDK and React Native Firebase library. |
| `guides/using-hermes.mdx` | Using Hermes engine - A guide on configuring Hermes for both Android and iOS in an Expo project. |
| `guides/using-logrocket.mdx` | Using LogRocket - A guide on installing and configuring LogRocket for session replays and error monitoring. |
| `guides/using-nextjs.mdx` | Using Next.js with Expo for web - A guide for integrating Next.js with Expo for the web. |
| `guides/using-push-notifications-services.mdx` | Using push notifications - Learn about push notification services that are compatible with Expo and React Native apps. |
| `guides/using-resend.mdx` | Using Resend - Learn how to integrate Resend in your Expo and React Native app to programmatically send emails with Expo Router's API Routes. |
| `guides/using-sentry.mdx` | Using Sentry - A guide on installing and configuring Sentry for crash reporting. |
| `guides/using-supabase.mdx` | Using Supabase - Add a Postgres database and user authentication to your React Native app with Supabase. |
| `guides/using-testerarmy.mdx` | Using TesterArmy - Learn how to test your Expo app with TesterArmy on each push and pull request, using Expo Build and Expo Workflows. |
| `guides/why-metro.mdx` | Why Metro? - Learn why Metro is the future of universal bundling in React Native and how it benefits developers. |

### guides/sdk-libraries-migration/ (3 files)

| File | Description |
|------|-------------|
| `guides/sdk-libraries-migration/calendar.mdx` | Migrate to the new expo-calendar API - Migrate from the legacy expo-calendar API to the new class-based expo-calendar API with ExpoCalendar, ExpoCalendarEvent,  |
| `guides/sdk-libraries-migration/contacts.mdx` | Migrate to the new expo-contacts API - Migrate from the legacy expo-contacts API to the new class-based expo-contacts API with Contact. |
| `guides/sdk-libraries-migration/media-library.mdx` | Migrate to the new expo-media-library API - Migrate from the legacy expo-media-library API to the new class-based expo-media-library API with Asset, Album, and  |

### guides/using-posthog/ (2 files)

| File | Description |
|------|-------------|
| `guides/using-posthog/index.mdx` | Using PostHog - A guide on installing and configuring PostHog for product analytics, session replay, and error tracking. |
| `guides/using-posthog/recipes.mdx` | PostHog recipes for Expo Workflows - A guided path from marking your first deploy in PostHog to gated rollouts, automatic kill switches, and approval-gated rele |

### linking/ (5 files)

| File | Description |
|------|-------------|
| `linking/android-app-links.mdx` | Android App Links - Learn how to configure Android App Links to open your Expo app from a standard web URL. |
| `linking/into-other-apps.mdx` | Linking into other apps - Learn how to handle and open a URL from your app based on the URL scheme of another app. |
| `linking/into-your-app.mdx` | Linking into your app - Learn how to handle an incoming URL in your React Native and Expo app by creating a deep link. |
| `linking/ios-universal-links.mdx` | iOS Universal Links - Learn how to configure iOS Universal Links to open your Expo app from a standard web URL. |
| `linking/overview.mdx` | Overview of linking, deep links, Android App Links, and iOS Universal Links - An overview of available resources to implement linking and deep links in your Exp |

### modules/ (21 files)

| File | Description |
|------|-------------|
| `modules/additional-platform-support.mdx` | Additional platform support - Learn how to add support for macOS and tvOS platforms. |
| `modules/android-lifecycle-listeners.mdx` | Android lifecycle listeners - Learn about the mechanism that allows your library to hook into Android Activity and Application functions using Expo modules API. |
| `modules/appdelegate-subscribers.mdx` | iOS AppDelegate subscribers - Learn how to subscribe to iOS system events relevant to an app, such as inbound links and notifications using Expo modules API. |
| `modules/autolinking.mdx` | Autolinking - Learn how to use Expo Autolinking to automatically link native dependencies in your Expo project. |
| `modules/config-plugin-and-native-module-tutorial.mdx` | Tutorial: Create a module with a config plugin - A tutorial on creating a native module with a config plugin using Expo Modules API. |
| `modules/design.mdx` | Expo Modules API: Design considerations - An overview of the design considerations behind the Expo Modules API. |
| `modules/existing-library.mdx` | Integrate in an existing library - Learn how to integrate Expo Modules API into an existing React Native library. |
| `modules/get-started.mdx` | Expo Modules API: Get started - Learn about getting started with Expo modules API. |
| `modules/inline-modules-reference.mdx` | Inline modules reference - A reference of Expo inline modules. |
| `modules/inline-modules-tutorial.mdx` | Tutorial: Create an inline module - A tutorial on creating a native module and view directly in your Expo project using inline modules. |
| `modules/mocking.mdx` | Mocking native calls in Expo modules - Learn about mocking native calls in Expo modules. |
| `modules/module-api.mdx` | Module API Reference - An API reference of Expo modules API. |
| `modules/module-config.mdx` | expo-module.config.json - Learn about different configuration options available in expo-module.config.json. |
| `modules/native-module-tutorial.mdx` | Tutorial: Create a native module - A tutorial on creating a native module that persists settings with Expo Modules API. |
| `modules/native-view-tutorial.mdx` | Tutorial: Create a native view - A tutorial on creating a native view that renders a WebView with Expo Modules API. |
| `modules/overview.mdx` | Expo Modules API: Overview - An overview of the APIs and utilities provided by Expo to develop native modules. |
| `modules/shared-objects.mdx` | Using shared objects - Learn how to use a shared object from the Expo Modules API. |
| `modules/third-party-library.mdx` | Wrap third-party native libraries - Learn how to create a simple wrapper around two separate native libraries using Expo Modules API. |
| `modules/type-generation-reference.mdx` | Type generation reference - A reference for the expo-type-information package. |
| `modules/type-generation-tutorial.mdx` | Tutorial: Generate module TS interface - A tutorial on using the expo-type-information package to create TypeScript interface for an Expo module. |
| `modules/use-standalone-expo-module-in-your-project.mdx` | How to use a standalone Expo module - Learn how to use a standalone module created with create-expo-module in your project by using a monorepo or publishing the |

### monitoring/ (1 files)

| File | Description |
|------|-------------|
| `monitoring/services.mdx` | Monitoring services - Learn how to monitor the usage of your Expo and React Native app after its release. |

### more/ (6 files)

| File | Description |
|------|-------------|
| `more/create-expo-module.mdx` | create-expo-module - A command-line tool to create and update Expo modules. |
| `more/create-expo.mdx` | create-expo-app - A command-line tool to create a new Expo and React Native project. |
| `more/expo-cli.mdx` | The Expo CLI is a command-line tool that is the primary interface between a developer and other Expo tools. |
| `more/glossary-of-terms.mdx` | Glossary of terms - List of non-obvious terms used within the documentation, related to Expo or cross-platform development in general. |
| `more/qr-codes.mdx` | qr.expo.dev - Reference for the QR code generator at qr.expo.dev. |
| `more/release-statuses.mdx` | Release statuses - Learn about the experimental, alpha, preview, beta, stable, and deprecated release statuses used across the Expo SDK, Expo Router, Expo Servi |

### preview/ (1 files)

| File | Description |
|------|-------------|
| `preview/introduction.mdx` | Introduction |

### preview/simulators/ (4 files)

| File | Description |
|------|-------------|
| `preview/simulators/get-started.mdx` | Get started with Expo Simulators - Check whether Expo Simulators is available, start a remote device session, and connect to it. |
| `preview/simulators/introduction.mdx` | Introduction to Expo Simulators - Run and control remote Android Emulators and iOS Simulators on Expo infrastructure from the CLI, REST API, an AI agent, or a b |
| `preview/simulators/limitations.mdx` | Expo Simulators limitations - Known limits of the Expo Simulators preview, including Android support, browser preview, session duration, physical devices, and c |
| `preview/simulators/troubleshooting.mdx` | Troubleshoot Expo Simulators - Diagnose access, session lifecycle, controller, installation, preview, and Fast Refresh issues in Expo Simulators. |

### preview/simulators/how-it-works/ (7 files)

| File | Description |
|------|-------------|
| `preview/simulators/how-it-works/agent-targeting.mdx` | How EAS CLI and agents select an Expo Simulators session - Learn how simulator commands find the active session through .env.eas-simulator, how to run parallel  |
| `preview/simulators/how-it-works/builds-and-bundles.mdx` | Which build to install on Expo Simulators - Learn how release builds, development builds, and Expo Go load JavaScript on Expo Simulators, which build formats in |
| `preview/simulators/how-it-works/devices-compared.mdx` | Expo Simulators compared with local simulators, physical devices, and device clouds - Compare Expo Simulators with a local Android Emulator or iOS Simulator, a  |
| `preview/simulators/how-it-works/network-inspection.mdx` | Network traffic and local egress in Expo Simulators - Learn where network traffic from a remote Expo Simulators device exits, how local egress routes device tra |
| `preview/simulators/how-it-works/security-model.mdx` | Expo Simulators security model - Learn who can create, view, and control an Expo Simulators session, which secrets a session uses, and which URLs grant access w |
| `preview/simulators/how-it-works/session-lifetime.mdx` | How long an Expo Simulators session runs - Learn the maximum duration and idle timeout of an Expo Simulators session, which activity keeps a session alive, and  |
| `preview/simulators/how-it-works/sessions.mdx` | How Expo Simulators sessions work - An Expo Simulators session is a time-limited job on Expo infrastructure that starts a remote Android Emulator or iOS Simulat |

### preview/simulators/how-to/ (13 files)

| File | Description |
|------|-------------|
| `preview/simulators/how-to/capture-evidence.mdx` | Capture screenshots, recordings, and logs from a remote simulator - Take screenshots, record video, read session activity, and download session artifacts from a |
| `preview/simulators/how-to/control-with-eas-cli.mdx` | Control a remote iOS Simulator with EAS CLI - Discover the actions a running iOS session supports and select a session with eas simulator:control. |
| `preview/simulators/how-to/drive-the-device.mdx` | Control a remote simulator with agent-device, Argent, or Appium - Open apps, press buttons, enter text, and read the accessibility tree on an Expo Simulators se |
| `preview/simulators/how-to/embed-a-session.mdx` | Show an Expo Simulators session on your own web page - Embed the browser preview of an Expo Simulators session in an iframe, or render the device screen in your |
| `preview/simulators/how-to/hand-off-a-session.mdx` | Share a live Expo Simulators session or start one from a link - Share the browser preview of a running Expo Simulators session, or build an authenticated expo.d |
| `preview/simulators/how-to/install-your-app.mdx` | Install an app on a remote Android Emulator or iOS Simulator - Install an Expo Build, a build fingerprint, an application archive, Expo Go, or a local build on  |
| `preview/simulators/how-to/iterate-on-your-code.mdx` | Use Fast Refresh with Metro on a remote simulator - Connect a development build on Expo Simulators to Metro through a tunnel so that source changes reach the re |
| `preview/simulators/how-to/organize-sessions.mdx` | Name, tag, and find Expo Simulators sessions - Give Expo Simulators sessions descriptive names and tags, then list, filter, and stop them from EAS CLI or expo.d |
| `preview/simulators/how-to/review-a-pull-request.mdx` | Review a pull request on a remote Android Emulator or iOS Simulator - Add a link to a pull request that opens the change on an Expo Simulators session in the br |
| `preview/simulators/how-to/run-in-ci.mdx` | Run Expo Simulators sessions in CI - Start, use, and always stop Expo Simulators sessions from GitHub Actions, Expo Workflows, or another CI system with an Expo |
| `preview/simulators/how-to/start-a-session.mdx` | Start a remote Android Emulator or iOS Simulator session - Start an Expo Simulators session from EAS CLI, the REST API, or expo.dev, then confirm that the remot |
| `preview/simulators/how-to/verify-a-change-with-an-agent.mdx` | Let an AI coding agent verify a change on a remote simulator - Give a coding agent such as Claude Code, Codex, or Cursor a real Android Emulator or iOS Simulato |
| `preview/simulators/how-to/work-without-a-mac.mdx` | Use an iOS Simulator on Linux or Windows - Build an iOS app with Expo Build and run it on a remote iOS Simulator from Linux, Windows, or a cloud sandbox with Ex |

### preview/simulators/reference/ (6 files)

| File | Description |
|------|-------------|
| `preview/simulators/reference/cli.mdx` | Expo Simulators CLI reference - Reference for the experimental eas simulator commands that create, inspect, monitor, control, list, route network traffic for, a |
| `preview/simulators/reference/devices.mdx` | Expo Simulators devices - See which Android Emulator, iPhone, and iPad devices Expo Simulators can start, the default Android profile, and how to select a devic |
| `preview/simulators/reference/rest-api.mdx` | Expo Simulators REST API - Create, inspect, connect to, and stop Expo Simulators sessions from your own systems with the REST API. |
| `preview/simulators/reference/security-and-data.mdx` | Expo Simulators security, permissions, and data retention - Learn who can start and view Expo Simulators sessions, how to protect session tokens and preview lin |
| `preview/simulators/reference/session-types.mdx` | Expo Simulators session types - Compare the four Expo Simulators session types, what each one provisions, and how each one installs apps, reports activity, and  |
| `preview/simulators/reference/usage-and-billing.mdx` | Expo Simulators usage, limits, and billing - Learn how Expo Simulators access works, how long a session can run on each plan, how sessions queue, and how to con |

### preview/simulators/works-with/ (8 files)

| File | Description |
|------|-------------|
| `preview/simulators/works-with/appium.mdx` | Run Appium tests on a remote Android Emulator or iOS Simulator - Start an appium Expo Simulators session and connect your existing Appium client or test suite w |
| `preview/simulators/works-with/expo-and-react-native.mdx` | Run an Expo or React Native app on Expo Simulators - Install an Expo or React Native development build or release build on a remote Android Emulator or iOS Simu |
| `preview/simulators/works-with/expo-go.mdx` | Test your project in Expo Go on a remote simulator - Install Expo Go on an Expo Simulators session, connect it to Metro through a tunnel, and test a project tha |
| `preview/simulators/works-with/flutter.mdx` | Run a Flutter app on a remote Android Emulator or iOS Simulator - Build a Flutter app for the Android Emulator or iOS Simulator, then install and control it on  |
| `preview/simulators/works-with/maestro.mdx` | Use Maestro flows with Expo Simulators - Run supported Maestro YAML flows with agent-device, or use the Expo Workflows Maestro job, and learn which option uses  |
| `preview/simulators/works-with/native-ios-and-android.mdx` | Run a native Android or iOS app on Expo Simulators - Install a Kotlin, Java, Swift, or Objective-C app built with Gradle or Xcode on a remote Android Emulator o |
| `preview/simulators/works-with/overview.mdx` | Which apps and frameworks work with Expo Simulators - Expo Simulators runs any app built for the Android Emulator or the iOS Simulator, including Expo, React Na |
| `preview/simulators/works-with/unity-and-hybrid.mdx` | Run a Unity or hybrid app on Expo Simulators - Build a Unity game or another app for the Android Emulator or iOS Simulator, then install and control it on a rem |

### push-notifications/ (8 files)

| File | Description |
|------|-------------|
| `push-notifications/faq.mdx` | Push notifications troubleshooting and FAQ - A collection of common questions about Expo push notification service. |
| `push-notifications/fcm-credentials.mdx` | Obtain Google Service Account Keys using FCM V1 - Learn how to create or use a Google Service Account Key for sending Android notifications using FCM. |
| `push-notifications/overview.mdx` | Expo push notifications: Overview - An overview of Expo push notification service. |
| `push-notifications/push-notifications-setup.mdx` | Expo push notifications setup - Learn how to set up push notifications, get credentials for development and production, and send a testing push notification. |
| `push-notifications/receiving-notifications.mdx` | Handle incoming notifications - Learn how to respond to a notification received by your app and take action based on the event. |
| `push-notifications/sending-notifications-custom.mdx` | Send notifications with FCM and APNs - Learn how to send notifications with FCM and APNs. |
| `push-notifications/sending-notifications.mdx` | Send notifications with the Expo Push Service - Learn how to call Expo Push Service API to send push notifications from your server. |
| `push-notifications/what-you-need-to-know.mdx` | What you need to know about notifications - Learn about notification types and their behavior before you get started. |

### regulatory-compliance/ (3 files)

| File | Description |
|------|-------------|
| `regulatory-compliance/data-and-privacy-protection.mdx` | Data and privacy protection - An overview of data and privacy protection policies that Expo offers. |
| `regulatory-compliance/gdpr.mdx` | GDPR compliance and Expo - Learn about how applications built with Expo can be GDPR compliant. |
| `regulatory-compliance/hipaa.mdx` | HIPAA compliance and Expo - Learn about how applications built with Expo can be HIPAA compliant. |

### review/ (3 files)

| File | Description |
|------|-------------|
| `review/overview.mdx` | Overview of distributing apps for review - Learn about how to distribute your app for review using app stores, internal distribution, and Expo Update. |
| `review/share-previews-with-your-team.mdx` | Share previews with your team - Share previews of your app with your team by publishing updates on branches. |
| `review/with-orbit.mdx` | How to launch an update using Expo Orbit - Learn how to open updates with Expo Orbit as part of a review workflow. |

### router/ (3 files)

| File | Description |
|------|-------------|
| `router/error-handling.mdx` | Error handling and loading states - Learn how to handle unmatched routes, errors, and loading states in your app when using Expo Router. |
| `router/installation.mdx` | Manual installation - Learn how to add Expo Router to an existing project with these detailed instructions. |
| `router/introduction.mdx` | Introduction to Expo Router - Expo Router is an open-source routing library for Universal React Native applications built with Expo. |

### router/advanced/ (22 files)

| File | Description |
|------|-------------|
| `router/advanced/apple-handoff.mdx` | Apple Handoff - Learn how to seamlessly continue app navigation across Apple devices with Expo Router and Apple Handoff. |
| `router/advanced/authentication-rewrites.mdx` | Authentication in Expo Router using redirects - How to implement authentication and protect routes with Expo Router. |
| `router/advanced/authentication.mdx` | Authentication in Expo Router - How to implement authentication and protect routes with Expo Router. |
| `router/advanced/custom-navigators.mdx` | Custom navigators - Learn how to build your own navigator in Expo Router and how library authors can integrate an existing navigator with the router. |
| `router/advanced/custom-tabs.mdx` | Custom tab layouts - Learn how to use headless tab components to create custom tab layouts in Expo Router. |
| `router/advanced/drawer.mdx` | Drawer - Learn how to use the Drawer layout in Expo Router. |
| `router/advanced/modals.mdx` | Modals - Learn how to use modals in Expo Router. |
| `router/advanced/native-intent.mdx` | Customizing links - Learn how to perform link redirection and utilize third-party deep links with +native-intent when using Expo Router. |
| `router/advanced/native-tabs.mdx` | Native tabs - Learn how to use the native tabs layout in Expo Router. |
| `router/advanced/navigation-transitions.mdx` | Configure navigation transitions - Learn how to use React transitions for navigation in Expo Router. |
| `router/advanced/nesting-navigators.mdx` | Nesting navigators - Learn how to nest navigators in Expo Router. |
| `router/advanced/platform-specific-modules.mdx` | Platform-specific extensions and module - Learn how to switch modules based on the platform in Expo Router using platform-specific extensions and Platform modul |
| `router/advanced/prevent-screen-removal.mdx` | Prevent screen removal - Learn how to confirm navigation before Expo Router removes a screen. |
| `router/advanced/protected.mdx` | Protected routes - Learn how to make screens inaccessible to client-side navigation. |
| `router/advanced/react-activity.mdx` | Manage inactive routes with React Activity - Learn how to release resources from inactive routes while preserving their state. |
| `router/advanced/router-settings.mdx` | Router settings - Learn how to configure layouts with static properties in Expo Router. |
| `router/advanced/shared-routes.mdx` | Shared routes - Learn how to define shared routes or use arrays to use the same route multiple times with different layouts using Expo Router. |
| `router/advanced/stack-toolbar.mdx` | Stack Toolbar - Learn how to use the native toolbar in Stack navigation with Expo Router. |
| `router/advanced/stack.mdx` | Stack - Learn how to use the Stack navigator in Expo Router. |
| `router/advanced/tabs.mdx` | JavaScript tabs - Learn how to use the JavaScript tabs layout (React Navigation bottom tabs) in Expo Router. |
| `router/advanced/web-modals.mdx` | Build custom web modals - Learn how to build modal overlays for web with Expo Router. |
| `router/advanced/zoom-transition.mdx` | Zoom transition - Learn how to use the zoom transition to create fluid animations between screens when using Expo Router for iOS. |

### router/basics/ (5 files)

| File | Description |
|------|-------------|
| `router/basics/common-navigation-patterns.mdx` | Common navigation patterns in Expo Router - Apply Expo Router basics to real-life navigation patterns you could use in your app. |
| `router/basics/core-concepts.mdx` | Core concepts of file-based routing in Expo Router - Learn the ground rules of Expo Router and how it relates to the rest of your code. |
| `router/basics/navigation-layouts.mdx` | Navigation layouts in Expo Router - Learn how to construct different relationships between pages by using directories and layout files. |
| `router/basics/navigation.mdx` | Navigating between pages in Expo Router - Learn the different ways to link to and navigate to pages in Expo Router. |
| `router/basics/notation.mdx` | Expo Router notation - Learn how to use special filenames and notation to expressively define your app's navigation tree within your project's file structure. |

### router/migrate/ (4 files)

| File | Description |
|------|-------------|
| `router/migrate/from-expo-webpack.mdx` | Migrate from Expo Webpack - Learn how to migrate a website using Expo Webpack to Expo Router. |
| `router/migrate/from-react-navigation.mdx` | Migrate from React Navigation - Learn how to migrate a project using React Navigation to Expo Router. |
| `router/migrate/sdk-55-to-56.mdx` | Migrate Expo Router from SDK 55 to SDK 56 - Learn how to migrate Expo Router from SDK 55 to 56 using a codemod or manually. |
| `router/migrate/sdk-57-to-58.mdx` | Migrate Expo Router from SDK 57 to SDK 58 - Learn how to migrate your Expo Router application from SDK 57 to SDK 58. |

### router/reference/ (12 files)

| File | Description |
|------|-------------|
| `router/reference/color.mdx` | Color - Access platform-specific colors with type safety in Expo Router. |
| `router/reference/focus-handling.mdx` | Handle screen focus - Run effects, render UI, and respond to navigation events when an Expo Router screen is focused. |
| `router/reference/link-preview.mdx` | Link preview - Learn how to add a preview to your link on iOS when using Expo Router. |
| `router/reference/redirects.mdx` | Redirects and rewrites - Learn how to redirect and rewrite URLs in Expo Router, in the app and on the server. |
| `router/reference/reserved-paths.mdx` | Reserved paths - URL paths reserved by Metro and Expo Router that you should avoid using for routes or static files. |
| `router/reference/screen-tracking.mdx` | Screen tracking for analytics - Learn how to enable screen tracking for analytics when using Expo Router. |
| `router/reference/sitemap.mdx` | Sitemap - Learn how to use the sitemap to debug your app with Expo Router. |
| `router/reference/src-directory.mdx` | Top-level src directory - Learn how to use a top-level src directory in your Expo Router project. |
| `router/reference/testing.mdx` | Testing configuration for Expo Router - Learn how to create integration tests for your app when using Expo Router. |
| `router/reference/troubleshooting.mdx` | Troubleshooting - Fixing common issues with Expo Router setup. |
| `router/reference/typed-routes.mdx` | Typed routes - Learn how to use statically typed links and routes in Expo Router. |
| `router/reference/url-parameters.mdx` | Using URL parameters - Learn how to access and modify route and search parameters in your app. |

### router/web/ (7 files)

| File | Description |
|------|-------------|
| `router/web/api-routes.mdx` | API Routes - Learn how to create server endpoints with Expo Router. |
| `router/web/async-routes.mdx` | Async routes - Learn how to speed up development with async bundling in Expo Router. |
| `router/web/data-loaders.mdx` | Data loaders - Learn how to fetch data on the server using data loaders in Expo Router. |
| `router/web/middleware.mdx` | Server middleware - Learn how to create middleware that runs for every request to the server in Expo Router. |
| `router/web/server-headers.mdx` | Server headers - Learn how to set global and path-specific HTTP headers in Expo Router. |
| `router/web/server-rendering.mdx` | Server rendering - Learn how to render Expo Router routes dynamically at request time using server-side rendering (SSR). |
| `router/web/static-rendering.mdx` | Static rendering - Learn how to render routes to static HTML and CSS files with Expo Router. |

### submit/ (6 files)

| File | Description |
|------|-------------|
| `submit/android-manual.mdx` | Manually submit an Android app to the Google Play Store - Step-by-step guide for uploading an Android app to Google Play Console for the first time. |
| `submit/android.mdx` | Submit to the Google Play Store with Expo Submit - Learn how to submit your Android app to the Google Play Store with Expo Submit. |
| `submit/eas-json.mdx` | Configure Expo Submit with eas.json - Learn how to configure your project for Expo Submit with eas.json. |
| `submit/ios-manual.mdx` | Manually submit an iOS app to the Apple App Store - Archive and upload an iOS app to App Store Connect using Xcode on macOS. |
| `submit/ios.mdx` | Submit to the Apple App Store with Expo Submit - Learn how to submit your iOS app to the Apple App Store with Expo Submit. |
| `submit/testflight.mdx` | Distribute an iOS app with TestFlight - Learn how to get an iOS build onto testers' devices with TestFlight, and when to use internal versus external TestFlight |

### technical-specs/ (2 files)

| File | Description |
|------|-------------|
| `technical-specs/expo-sfv-0.mdx` | Expo Structured Field Values - Version 0 |
| `technical-specs/expo-updates-1.mdx` | Expo Updates v1 - Version 1 |

### troubleshooting/ (9 files)

| File | Description |
|------|-------------|
| `troubleshooting/application-has-not-been-registered.mdx` | Application has not been registered" error - Learn about what the Application has not been registered error means and how to resolve it in an Expo or React Nati |
| `troubleshooting/clear-cache-macos-linux.mdx` | Clear bundler caches on macOS and Linux - Learn how to clear the bundler cache when using Yarn or npm with Expo CLI or React Native CLI on macOS and Linux. |
| `troubleshooting/clear-cache-windows.mdx` | Clear bundler caches on Windows - Learn how to clear the bundler cache when using Yarn or npm with Expo CLI or React Native CLI on Windows. |
| `troubleshooting/expo-go-sign-in-required.mdx` | You need to be signed in to Expo Go and Expo CLI" error - Learn why Expo Go on a physical iOS device requires Expo CLI and Expo Go to be signed in to the same E |
| `troubleshooting/expo-go-version-mismatch.mdx` | Project is incompatible with this version of Expo Go" error - Learn why an Expo project is incompatible with the installed version of Expo Go and how to install |
| `troubleshooting/overview.mdx` | Troubleshooting overview - An overview of troubleshooting guides for app development with Expo and Expo Services. |
| `troubleshooting/proxies.mdx` | Troubleshooting proxies - Learn about troubleshooting proxies with a set of recommended tools. |
| `troubleshooting/react-native-version-mismatch.mdx` | React Native version mismatch" errors - Learn about what React Native version mismatch means and how to resolve it in an Expo or React Native app. |
| `troubleshooting/windows-long-paths.mdx` | Filename longer than 260 characters" error on Windows - Learn how to fix the "Filename longer than 260 characters" error when building an Android app on Windows |

### tutorial/ (11 files)

| File | Description |
|------|-------------|
| `tutorial/add-navigation.mdx` | Add navigation - In this chapter, learn how to add navigation to the Expo app. |
| `tutorial/build-a-screen.mdx` | Build a screen - In this tutorial, learn how to use components such as React Native's Pressable, Expo Image, and Expo UI to build a screen. |
| `tutorial/configuration.mdx` | Configure status bar, splash screen and app icon - In this tutorial, learn the basics of how to configure a status bar, app icon, and splash screen. |
| `tutorial/create-a-modal.mdx` | Create a modal - In this tutorial, learn how to create an emoji picker with the Expo UI BottomSheet component and show the selected emoji as a sticker in a Reac |
| `tutorial/create-your-first-app.mdx` | Create your first app - In this chapter, learn how to create a new Expo project. |
| `tutorial/follow-up.mdx` | Learning resources - Explore a curated list of resources to learn about Expo and React Native. |
| `tutorial/gestures.mdx` | Add gestures - In this tutorial, learn how to add double tap and drag gestures with React Native Gesture Handler and animate them with Reanimated in a React Nat |
| `tutorial/image-picker.mdx` | Use an image picker - In this tutorial, learn how to use Expo Image Picker to select an image from the media library and show it in a React Native app on Androi |
| `tutorial/introduction.mdx` | Tutorial: Using React Native and Expo - An introduction to a React Native tutorial on how to build a universal app with Expo, Expo Router, and Expo UI that runs |
| `tutorial/overview.mdx` | Overview of Expo and Expo Services tutorials |
| `tutorial/screenshot.mdx` | Take a screenshot - In this tutorial, learn how to capture a screenshot using a third-party library, save it with Expo Media Library on Android and iOS, and dow |

### tutorial/build-with-ai/ (7 files)

| File | Description |
|------|-------------|
| `tutorial/build-with-ai/add-stickers.mdx` | Add stickers - In this chapter, direct your AI agent to add an emoji picker in a bottom sheet and make the sticker respond to drag and tap gestures. |
| `tutorial/build-with-ai/build-the-home-screen.mdx` | Build the home screen - In this chapter, direct your AI agent to add tab navigation, the photo viewer, and an image picker. |
| `tutorial/build-with-ai/create-your-first-app.mdx` | Create your first app - In this chapter, direct your AI agent to create a new Expo app and see it running on your phone. |
| `tutorial/build-with-ai/finishing-touches.mdx` | Finishing touches - In this chapter, direct your AI agent to polish the status bar, splash screen, and app icon, then take your next steps as a builder. |
| `tutorial/build-with-ai/introduction.mdx` | Tutorial: Build an app with an AI agent - An introduction to a tutorial on building an Expo app that runs on Android, iOS, and the web by directing an AI coding |
| `tutorial/build-with-ai/save-your-creation.mdx` | Save your creation - In this chapter, direct your AI agent to save the decorated photo to your phone, and optionally make it work in the browser too. |
| `tutorial/build-with-ai/set-up-your-tools.mdx` | Set up your tools - In this chapter, install an AI coding agent, Node.js, and Expo Go, and teach your agent about Expo. |

### tutorial/cicd/ (9 files)

| File | Description |
|------|-------------|
| `tutorial/cicd/development-builds.mdx` | Automate development builds with Expo Workflows - Learn how to automate Android and iOS development builds with Expo Workflows and use fingerprints to skip rebu |
| `tutorial/cicd/e2e-tests.mdx` | Run E2E tests with Maestro on Expo Workflows - Learn how to automate end-to-end (E2E) tests with Maestro using Android and iOS development builds on Expo Workfl |
| `tutorial/cicd/first-workflow.mdx` | Run your first Expo Workflows job - Learn basics of Expo Workflows by creating workflow files, jobs, triggers, and chain jobs together for an Expo app. |
| `tutorial/cicd/introduction.mdx` | CI/CD Tutorial: Introduction - An introduction to Expo Workflows tutorial and the core concepts for setting up a CI/CD pipeline for Expo and React Native apps. |
| `tutorial/cicd/next-steps.mdx` | Next steps - Learn about the next steps in your journey with Expo Workflows. |
| `tutorial/cicd/preview-builds.mdx` | Create preview builds for pull requests with Expo Workflows - Learn how to create preview build workflows for Slack notifications and PR previews using Expo Wor |
| `tutorial/cicd/production.mdx` | Automate production deployments with Expo Workflows - Learn how to automate production builds and over-the-air updates with Expo Workflows from a release branch |
| `tutorial/cicd/tag-based-releases.mdx` | Using Git tags to trigger production deployments - Learn how to trigger production deployments from Git tags on Expo Workflows. |
| `tutorial/cicd/web-deployments.mdx` | Deploy web apps to Expo Hosting with Expo Workflows - Learn how to deploy web builds to Expo Hosting alongside Android and iOS releases to existing Expo Workflo |

### tutorial/eas/ (13 files)

| File | Description |
|------|-------------|
| `tutorial/eas/android-development-build.mdx` | Create and run a cloud build for Android - Learn how to configure a development build for Android devices and emulators using Expo Build. |
| `tutorial/eas/android-production-build.mdx` | Create a production build for Android - Learn about the process of creating a production build for Android and automating the release process. |
| `tutorial/eas/configure-development-build.mdx` | Configure a development build in cloud - Learn how to configure a development build for a project using Expo Build. |
| `tutorial/eas/internal-distribution-builds.mdx` | Create and share internal distribution build - Learn about internal distribution builds, why we need them, and how to create them. |
| `tutorial/eas/introduction.mdx` | Expo Services Tutorial: Introduction - An introduction to the tutorial for building apps for Android and iOS using Expo Services that covers the Build, Update,  |
| `tutorial/eas/ios-development-build-for-devices.mdx` | Create and run a cloud build for iOS device - Learn how to configure a development build for iOS devices using Expo Build. |
| `tutorial/eas/ios-development-build-for-simulators.mdx` | Create and run a cloud build for iOS Simulator - Learn how to configure a development build for iOS Simulators using Expo Build. |
| `tutorial/eas/ios-production-build.mdx` | Create a production build for iOS - Learn about the process of creating a production build for iOS and automating the release process. |
| `tutorial/eas/manage-app-versions.mdx` | Manage different app versions - Learn about developer-facing and user-facing app versions and how Expo Build automatically manages developer-facing versions. |
| `tutorial/eas/multiple-app-variants.mdx` | Configure multiple app variants - Learn how to configure dynamic app config to install multiple app variants on a single device. |
| `tutorial/eas/next-steps.mdx` | Next steps - Learn about the next steps in your journey with Expo Services. |
| `tutorial/eas/team-development.mdx` | Share previews with your team - Learn how to use Expo Update to send OTA updates and share previews with a team. |
| `tutorial/eas/using-github.mdx` | Trigger builds from a GitHub repository - Learn about the process of triggering builds from a GitHub repository. |

### versions/v58.0.0/ (1 files)

| File | Description |
|------|-------------|
| `versions/v58.0.0/index.mdx` | Expo SDK reference - Access device and system functionality in your Expo and React Native apps using Expo SDK packages. |

### versions/v58.0.0/config/ (4 files)

| File | Description |
|------|-------------|
| `versions/v58.0.0/config/app.mdx` | app.json / app.config.js - A reference of available properties in Expo app config. |
| `versions/v58.0.0/config/babel.mdx` | babel.config.js - A reference for Babel configuration file. |
| `versions/v58.0.0/config/metro.mdx` | metro.config.js - A reference of available configurations in Metro. |
| `versions/v58.0.0/config/package-json.mdx` | package.json - A reference for Expo-specific properties that can be used in the package.json file. |

### versions/v58.0.0/sdk/ (111 files)

| File | Description |
|------|-------------|
| `versions/v58.0.0/sdk/accelerometer.mdx` | Accelerometer - A library that provides access to the device's accelerometer sensor. |
| `versions/v58.0.0/sdk/age-range.mdx` | AgeRange - A library that provides access to age range information using Play Age Signals API on Android and Declared Age Range framework on iOS. |
| `versions/v58.0.0/sdk/app-integrity.mdx` | AppIntegrity - A library that provides access to Google's Play Integrity API on Android and Apple's App Attest service on iOS. |
| `versions/v58.0.0/sdk/app-intents.mdx` | AppIntents - A library for exposing Apple App Intents, Siri, Shortcuts, Spotlight, and Apple Intelligence entry points from Expo apps. |
| `versions/v58.0.0/sdk/apple-authentication.mdx` | AppleAuthentication - A library that provides Sign-in with Apple capability for iOS. |
| `versions/v58.0.0/sdk/application.mdx` | Application - A universal library that provides information about the native application's ID, app name, and build version at runtime. |
| `versions/v58.0.0/sdk/asset.mdx` | Asset - A universal library that allows downloading assets and using them with other libraries. |
| `versions/v58.0.0/sdk/async-storage.mdx` | @react-native-async-storage/async-storage - A library that provides an asynchronous, unencrypted, persistent, key-value storage API. |
| `versions/v58.0.0/sdk/audio.mdx` | Audio (expo-audio) - A library that provides an API to implement audio playback and recording in apps. |
| `versions/v58.0.0/sdk/auth-session.mdx` | AuthSession - A universal library that provides an API to handle browser-based authentication. |
| `versions/v58.0.0/sdk/background-fetch.mdx` | BackgroundFetch - A library that provides API for performing background fetch tasks. |
| `versions/v58.0.0/sdk/background-task.mdx` | BackgroundTask - A library that provides an API for running background tasks. |
| `versions/v58.0.0/sdk/barometer.mdx` | Barometer - A library that provides access to device's barometer sensor. |
| `versions/v58.0.0/sdk/battery.mdx` | Battery - A library that provides battery information for the physical device, as well as corresponding event listeners. |
| `versions/v58.0.0/sdk/blob.mdx` | Blob - A web standards-compliant Blob implementation for React Native. |
| `versions/v58.0.0/sdk/blur-view.mdx` | BlurView - A React component that blurs everything underneath the view. |
| `versions/v58.0.0/sdk/brightness.mdx` | Brightness - A library that provides access to an API for getting and setting the screen brightness. |
| `versions/v58.0.0/sdk/brownfield.mdx` | Brownfield - Toolkit and APIs for integrating Expo into existing native applications. |
| `versions/v58.0.0/sdk/build-properties.mdx` | BuildProperties - A config plugin that allows customizing native build properties during prebuild. |
| `versions/v58.0.0/sdk/calendar-legacy.mdx` | Calendar (legacy) - A library that provides an API for interacting with the device's system calendars, events, reminders, and associated records. |
| `versions/v58.0.0/sdk/calendar.mdx` | Calendar - A library that provides an API for interacting with the device's system calendars, events, reminders, and associated records. |
| `versions/v58.0.0/sdk/camera.mdx` | Camera - A React component that renders a preview for the device's front or back camera. |
| `versions/v58.0.0/sdk/captureRef.mdx` | react-native-view-shot - A library that allows you to capture a React Native view and save it as an image. |
| `versions/v58.0.0/sdk/cellular.mdx` | Cellular - An API that provides information about the user's cellular service provider. |
| `versions/v58.0.0/sdk/checkbox.mdx` | Checkbox - A universal React component that provides basic checkbox functionality. |
| `versions/v58.0.0/sdk/clipboard.mdx` | Clipboard - A universal library that allows getting and setting Clipboard content. |
| `versions/v58.0.0/sdk/constants.mdx` | Constants - An API that provides system information that remains constant throughout the lifetime of your app's installation. |
| `versions/v58.0.0/sdk/contacts-legacy.mdx` | Contacts (legacy) - A library that provides access to the phone's system contacts. |
| `versions/v58.0.0/sdk/contacts.mdx` | Contacts - A library that provides access to the phone's system contacts. |
| `versions/v58.0.0/sdk/crypto.mdx` | Crypto - A universal library for crypto operations. |
| `versions/v58.0.0/sdk/date-time-picker.mdx` | @react-native-community/datetimepicker - A component that provides access to the system UI for date and time selection. |
| `versions/v58.0.0/sdk/dev-client.mdx` | DevClient - A library that allows creating a development build and includes useful development tools. |
| `versions/v58.0.0/sdk/dev-menu.mdx` | DevMenu - A library that provides a developer menu for debug builds. |
| `versions/v58.0.0/sdk/device.mdx` | Device - A universal library provides access to system information about the physical device. |
| `versions/v58.0.0/sdk/devicemotion.mdx` | DeviceMotion - A library that provides access to a device's motion and orientation sensors. |
| `versions/v58.0.0/sdk/document-picker.mdx` | DocumentPicker - A library that provides access to the system's UI for selecting documents from the available providers on the user's device. |
| `versions/v58.0.0/sdk/expo.mdx` | Expo - Set of common methods and types for Expo and related packages. |
| `versions/v58.0.0/sdk/filesystem-legacy.mdx` | FileSystem (legacy) - A library that provides access to the local file system on the device. |
| `versions/v58.0.0/sdk/filesystem.mdx` | FileSystem - A library that provides access to the local file system on the device. |
| `versions/v58.0.0/sdk/fingerprint.mdx` | Expo Fingerprint - A library to generate a fingerprint from a React Native project. |
| `versions/v58.0.0/sdk/flash-list.mdx` | @shopify/flash-list - A React Native component that provides a fast and performant way to render lists. |
| `versions/v58.0.0/sdk/font.mdx` | Font - A library that allows loading fonts at runtime and using them in React Native components. |
| `versions/v58.0.0/sdk/gesture-handler.mdx` | react-native-gesture-handler - A library that provides an API for handling complex gestures. |
| `versions/v58.0.0/sdk/gl-view.mdx` | GLView - A library that provides GLView that acts as an OpenGL ES render target and provides GLContext. Useful for rendering 2D and 3D graphics. |
| `versions/v58.0.0/sdk/glass-effect.mdx` | GlassEffect - React components that render a liquid glass effect using iOS's native UIVisualEffectView. |
| `versions/v58.0.0/sdk/gyroscope.mdx` | Gyroscope - A library that provides access to the device's gyroscope sensor. |
| `versions/v58.0.0/sdk/haptics.mdx` | Haptics - A library that provides access to the system's vibration effects on Android, the haptics engine on iOS, and the Web Vibration API on web. |
| `versions/v58.0.0/sdk/hinge.mdx` | Hinge - A library that provides the device hinge angle and status on Android foldables and iPhone Duo. |
| `versions/v58.0.0/sdk/image.mdx` | Image - A cross-platform and performant React component that loads and renders images. |
| `versions/v58.0.0/sdk/imagemanipulator.mdx` | ImageManipulator - A library that provides an API for image manipulation on the local file system. |
| `versions/v58.0.0/sdk/imagepicker.mdx` | ImagePicker - A library that provides access to the system's UI for selecting images and videos from the phone's library or taking a photo with the camera. |
| `versions/v58.0.0/sdk/intent-launcher.mdx` | IntentLauncher - A library that provides an API to launch Android intents. |
| `versions/v58.0.0/sdk/keep-awake.mdx` | KeepAwake - A React component that prevents the screen from sleeping when rendered. |
| `versions/v58.0.0/sdk/keyboard-controller.mdx` | react-native-keyboard-controller - A library that provides a Keyboard manager that works in an identical way on Android and iOS |
| `versions/v58.0.0/sdk/light-sensor.mdx` | LightSensor - A library that provides access to the device's light sensor. |
| `versions/v58.0.0/sdk/linear-gradient.mdx` | LinearGradient - A universal React component that renders a gradient view. |
| `versions/v58.0.0/sdk/linking.mdx` | Linking - An API that provides methods to create and open deep links universally. |
| `versions/v58.0.0/sdk/live-photo.mdx` | LivePhoto - A library that allows displaying Live Photos on iOS. |
| `versions/v58.0.0/sdk/local-authentication.mdx` | LocalAuthentication - A library that provides functionality for implementing the Fingerprint API (Android) or FaceID and TouchID (iOS) to authenticate the user  |
| `versions/v58.0.0/sdk/localization.mdx` | Localization - A library that provides an interface for native user localization information. |
| `versions/v58.0.0/sdk/location-next.mdx` | Location (next) - A library that provides access to the device's location. |
| `versions/v58.0.0/sdk/location.mdx` | Location - A library that provides access to reading geolocation information, polling current location or subscribing location update events from the device. |
| `versions/v58.0.0/sdk/magnetometer.mdx` | Magnetometer - A library that provides access to the device's magnetometer sensor. |
| `versions/v58.0.0/sdk/mail-composer.mdx` | MailComposer - A library that provides functionality to compose and send emails with the system's specific UI. |
| `versions/v58.0.0/sdk/manifests.mdx` | Manifests - A library that provides types for Expo Manifests. |
| `versions/v58.0.0/sdk/map-view.mdx` | react-native-maps - A library that provides a Map component that uses Google Maps on Android and Apple Maps or Google Maps on iOS. |
| `versions/v58.0.0/sdk/maps.mdx` | Maps - A library that provides access to Google Maps on Android and Apple Maps on iOS. |
| `versions/v58.0.0/sdk/masked-view.mdx` | @react-native-masked-view/masked-view - A library that provides a masked view. |
| `versions/v58.0.0/sdk/media-library-legacy.mdx` | MediaLibrary (legacy) - A library that provides access to the device's media library. |
| `versions/v58.0.0/sdk/media-library.mdx` | MediaLibrary - A library that provides access to the device's media library. |
| `versions/v58.0.0/sdk/mesh-gradient.mdx` | MeshGradient - A module that exposes MeshGradient view from SwiftUI to React Native. |
| `versions/v58.0.0/sdk/navigation-bar.mdx` | NavigationBar - A library that provides access to various interactions with the native navigation bar on Android. |
| `versions/v58.0.0/sdk/netinfo.mdx` | @react-native-community/netinfo - A cross-platform API that provides access to network information. |
| `versions/v58.0.0/sdk/network.mdx` | Network - A library that provides access to the device's network such as its IP address, MAC address, and airplane mode status. |
| `versions/v58.0.0/sdk/notifications.mdx` | Notifications - A library that provides an API to fetch push notification tokens and to present, schedule, receive and respond to notifications. |
| `versions/v58.0.0/sdk/observe.mdx` | Observe - A library that collects app performance metrics and user-defined events and dispatches them to Expo Observe. |
| `versions/v58.0.0/sdk/pedometer.mdx` | Pedometer - A library that provides access to the device's pedometer sensor. |
| `versions/v58.0.0/sdk/picker.mdx` | @react-native-picker/picker - A cross-platform component that provides access to the system UI for picking between several options. |
| `versions/v58.0.0/sdk/print.mdx` | Print - A library that provides printing functionality for Android and iOS (AirPrint). |
| `versions/v58.0.0/sdk/reanimated.mdx` | react-native-reanimated - A library that provides an API that greatly simplifies the process of creating smooth, powerful, and maintainable animations. |
| `versions/v58.0.0/sdk/safe-area-context.mdx` | react-native-safe-area-context - A library with a flexible API for accessing the device's safe area inset information. |
| `versions/v58.0.0/sdk/screen-capture.mdx` | ScreenCapture - A library that allows you to protect screens in your app from being captured or recorded. |
| `versions/v58.0.0/sdk/screen-orientation.mdx` | ScreenOrientation - A universal library for managing a device's screen orientation. |
| `versions/v58.0.0/sdk/screens.mdx` | react-native-screens - A library that provides native primitives to represent screens for better operating system behavior and screen optimizations. |
| `versions/v58.0.0/sdk/securestore.mdx` | SecureStore - A library that provides a way to encrypt and securely store key-value pairs locally on the device. |
| `versions/v58.0.0/sdk/segmented-control.mdx` | @react-native-segmented-control/segmented-control - A React Native library that provides a component to render UISegmentedControl from iOS. |
| `versions/v58.0.0/sdk/sensors.mdx` | Sensors - A library that provides access to a device's accelerometer, barometer, motion, gyroscope, light, magnetometer, and pedometer. |
| `versions/v58.0.0/sdk/server.mdx` | Server-side API and runtime for Expo Router projects. |
| `versions/v58.0.0/sdk/sharing.mdx` | Sharing - A library that provides functionality for sharing and receiving data from other apps. |
| `versions/v58.0.0/sdk/skia.mdx` | @shopify/react-native-skia - A React Native library for creating graphics using Skia. |
| `versions/v58.0.0/sdk/slider.mdx` | @react-native-community/slider - A React Native component library that provides access to the system UI for a slider control. |
| `versions/v58.0.0/sdk/sms.mdx` | SMS - A library that provides access to the system's UI/app for sending SMS messages. |
| `versions/v58.0.0/sdk/speech.mdx` | Speech - A library that provides access to text-to-speech functionality. |
| `versions/v58.0.0/sdk/splash-screen.mdx` | SplashScreen - A library that provides access to controlling the visibility behavior of native splash screen. |
| `versions/v58.0.0/sdk/sqlite.mdx` | SQLite - A library that provides access to a database that can be queried through a SQLite API. |
| `versions/v58.0.0/sdk/status-bar.mdx` | StatusBar - A library that provides the same interface as the React Native StatusBar API, but with slightly different defaults to work great in Expo environment |
| `versions/v58.0.0/sdk/storereview.mdx` | StoreReview - A library that provides access to native APIs for in-app reviews. |
| `versions/v58.0.0/sdk/stripe.mdx` | @stripe/stripe-react-native - A library that provides access to native APIs for integrating Stripe payments. |
| `versions/v58.0.0/sdk/svg.mdx` | react-native-svg - A library that allows using SVGs in your app. |
| `versions/v58.0.0/sdk/symbols.mdx` | Symbols - A library that allows access to native symbols. |
| `versions/v58.0.0/sdk/system-ui.mdx` | SystemUI - A library that allows interacting with system UI elements. |
| `versions/v58.0.0/sdk/task-manager.mdx` | TaskManager - A library that provides support for tasks that can run in the background. |
| `versions/v58.0.0/sdk/third-party-overview.mdx` | Third-party libraries supported in Expo Go - A set of third-party libraries which support for is included by default in Expo Go environment. |
| `versions/v58.0.0/sdk/tracking-transparency.mdx` | TrackingTransparency - A library for tracking app users and managing tracking permissions. |
| `versions/v58.0.0/sdk/updates.mdx` | Updates - A library that enables your app to manage remote updates to your application code. |
| `versions/v58.0.0/sdk/video-thumbnails.mdx` | VideoThumbnails - A library that allows you to generate an image to serve as a thumbnail from a video file. |
| `versions/v58.0.0/sdk/video.mdx` | Video (expo-video) - A library that provides an API to implement video playback in apps. |
| `versions/v58.0.0/sdk/view-pager.mdx` | react-native-pager-view - A component library that provides a carousel-like view to swipe through pages of content. |
| `versions/v58.0.0/sdk/webbrowser.mdx` | WebBrowser - A library that provides access to the system's web browser and supports handling redirects. |
| `versions/v58.0.0/sdk/webview.mdx` | react-native-webview - A library that provides a WebView component. |
| `versions/v58.0.0/sdk/widgets.mdx` | Widgets - A library to build Android and iOS home screen widgets and iOS Live Activities using Expo UI components. |

### versions/v58.0.0/sdk/router/ (8 files)

| File | Description |
|------|-------------|
| `versions/v58.0.0/sdk/router/color.mdx` | Router Color - An Expo Router API for accessing platform-specific native colors. |
| `versions/v58.0.0/sdk/router/experimental-stack.mdx` | Router Experimental Stack - An opt-in sibling to Stack built on the react-native-screens experimental gamma stack. Available for testing only. |
| `versions/v58.0.0/sdk/router/index.mdx` | Router - A file-based routing library for React Native and web applications. |
| `versions/v58.0.0/sdk/router/link.mdx` | Router Link - An Expo Router API that provides Link, Redirect, preview, and zoom transition components. |
| `versions/v58.0.0/sdk/router/native-tabs.mdx` | Router Native tabs - An Expo Router submodule that provides native tabs layout. |
| `versions/v58.0.0/sdk/router/split-view.mdx` | Router Split View - An Expo Router submodule that provides native split view layout. |
| `versions/v58.0.0/sdk/router/stack.mdx` | Router Stack - An Expo Router API that provides Stack navigator, toolbar, and screen components. |
| `versions/v58.0.0/sdk/router/ui.mdx` | Router UI - An Expo Router submodule that provides headless tab components to create custom tab layouts. |

### versions/v58.0.0/sdk/ui/ (1 files)

| File | Description |
|------|-------------|
| `versions/v58.0.0/sdk/ui/index.mdx` | Expo UI - A set of components that allow you to build UIs directly with Jetpack Compose and SwiftUI from React. |

### versions/v58.0.0/sdk/ui/drop-in-replacements/ (9 files)

| File | Description |
|------|-------------|
| `versions/v58.0.0/sdk/ui/drop-in-replacements/bottomsheet.mdx` | BottomSheet - A bottom sheet compatible with @gorhom/bottom-sheet. |
| `versions/v58.0.0/sdk/ui/drop-in-replacements/datetimepicker.mdx` | DateTimePicker - A date and time picker compatible with @react-native-community/datetimepicker. |
| `versions/v58.0.0/sdk/ui/drop-in-replacements/index.mdx` | Drop-in replacements - Components and APIs that serve as drop-in replacements for popular React Native community libraries. |
| `versions/v58.0.0/sdk/ui/drop-in-replacements/maskedview.mdx` | MaskedView - A masked view compatible with @react-native-masked-view/masked-view. |
| `versions/v58.0.0/sdk/ui/drop-in-replacements/menu.mdx` | A menu compatible with @react-native-menu/menu. |
| `versions/v58.0.0/sdk/ui/drop-in-replacements/pagerview.mdx` | PagerView - A horizontally paged view compatible with react-native-pager-view. |
| `versions/v58.0.0/sdk/ui/drop-in-replacements/picker.mdx` | A picker compatible with @react-native-picker/picker. |
| `versions/v58.0.0/sdk/ui/drop-in-replacements/segmentedcontrol.mdx` | SegmentedControl - A segmented control compatible with @react-native-segmented-control/segmented-control. |
| `versions/v58.0.0/sdk/ui/drop-in-replacements/slider.mdx` | A slider compatible with @react-native-community/slider. |

### versions/v58.0.0/sdk/ui/jetpack-compose/ (55 files)

| File | Description |
|------|-------------|
| `versions/v58.0.0/sdk/ui/jetpack-compose/alertdialog.mdx` | AlertDialog - A Jetpack Compose AlertDialog component for displaying native alert dialogs. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/badge.mdx` | Badge - A Jetpack Compose Badge component for displaying status indicators and counts. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/badgedbox.mdx` | BadgedBox - A Jetpack Compose BadgedBox component for overlaying badges on content. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/basicalertdialog.mdx` | BasicAlertDialog - A Jetpack Compose BasicAlertDialog component for displaying dialogs with custom content. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/bottomsheet.mdx` | ModalBottomSheet - A Jetpack Compose ModalBottomSheet component that presents content from the bottom of the screen. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/box.mdx` | Box - A Jetpack Compose Box component for stacking child elements. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/button.mdx` | Button - Jetpack Compose Button components for displaying native Material3 buttons. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/card.mdx` | Card - A Jetpack Compose Card component for displaying content in a styled container. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/carousel.mdx` | Carousel - Jetpack Compose Carousel components for displaying scrollable collections of items. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/checkbox.mdx` | Checkbox - A Jetpack Compose Checkbox component for selection controls. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/chip.mdx` | Chip - Jetpack Compose Chip components for displaying compact elements. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/colors.mdx` | Material Colors - Read the Material 3 color palette (including Material 3 Dynamic Colors) from JavaScript. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/column.mdx` | Column - A Jetpack Compose Column component for placing children vertically. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/compositionlocalprovider.mdx` | CompositionLocalProvider - A Jetpack Compose CompositionLocalProvider component for providing composition local values to its children. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/datetimepicker.mdx` | DateTimePicker - Jetpack Compose components for selecting dates, date ranges, and times. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/divider.mdx` | Divider - Jetpack Compose Divider components for creating visual separators. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/dockedsearchbar.mdx` | DockedSearchBar - A Jetpack Compose DockedSearchBar component for displaying an inline search input. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/dropdownmenu.mdx` | DropdownMenu - A Jetpack Compose DropdownMenu component for displaying dropdown menus. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/exposeddropdownmenubox.mdx` | ExposedDropdownMenuBox - A Jetpack Compose ExposedDropdownMenuBox component for displaying a dropdown menu with a customizable anchor. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/extending.mdx` | Extending with Jetpack Compose - Learn how to create custom Jetpack Compose components and modifiers that integrate with Expo UI. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/floatingactionbutton.mdx` | FloatingActionButton - Jetpack Compose FloatingActionButton components following Material Design 3. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/flowrow.mdx` | FlowRow - A Jetpack Compose FlowRow component for wrapping children horizontally. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/horizontalfloatingtoolbar.mdx` | HorizontalFloatingToolbar - A Jetpack Compose HorizontalFloatingToolbar component for displaying a floating action bar. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/horizontalpager.mdx` | HorizontalPager - A Jetpack Compose HorizontalPager component for swipeable pages. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/host.mdx` | Host - A Jetpack Compose Host component for bridging React Native and Jetpack Compose. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/icon.mdx` | Icon - A Jetpack Compose Icon component for displaying icons. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/iconbutton.mdx` | IconButton - Jetpack Compose IconButton components for displaying native Material3 icon buttons. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/image.mdx` | Image - A Jetpack Compose Image component for displaying images. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/index.mdx` | Jetpack Compose components for building native Android interfaces with @expo/ui. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/lazycolumn.mdx` | LazyColumn - A Jetpack Compose LazyColumn component for displaying scrollable lists. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/lazyrow.mdx` | LazyRow - A Jetpack Compose LazyRow component for displaying horizontally scrolling lists. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/listitem.mdx` | ListItem - A Jetpack Compose ListItem component for displaying structured list entries. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/loadingindicator.mdx` | LoadingIndicator - Jetpack Compose loading indicator components for displaying loading state. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/modifiers.mdx` | Modifiers - Jetpack Compose layout modifiers for @expo/ui components. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/navigationbar.mdx` | NavigationBar - A Jetpack Compose NavigationBar component for Material 3 bottom navigation. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/progress.mdx` | Progress indicators - Jetpack Compose progress indicator components for displaying operation status. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/pulltorefreshbox.mdx` | PullToRefreshBox - A Jetpack Compose PullToRefreshBox component for pull-to-refresh interactions. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/radiobutton.mdx` | RadioButton - A Jetpack Compose RadioButton component for single-selection controls. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/rnhostview.mdx` | RNHostView - A component that enables React Native views inside Jetpack Compose. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/row.mdx` | Row - A Jetpack Compose Row component for placing children horizontally. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/searchbar.mdx` | SearchBar - A Jetpack Compose SearchBar component for search input functionality. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/segmentedbutton.mdx` | SegmentedButton - Jetpack Compose Segmented Button components for single or multi-choice selection. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/shape.mdx` | Shape - A Jetpack Compose Shape component for drawing geometric shapes. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/slider.mdx` | Slider - A Jetpack Compose Slider component for selecting values from a range. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/snackbar.mdx` | Snackbar - A brief notification that appears at the bottom of the screen to provide feedback without interrupting the user. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/spacer.mdx` | Spacer - A Jetpack Compose Spacer component for adding flexible space between elements. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/splitbuttonlayout.mdx` | SplitButtonLayout - A Jetpack Compose SplitButtonLayout component for a primary action next to a button that opens related actions. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/surface.mdx` | Surface - A Jetpack Compose Surface component for styled content containers. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/switch.mdx` | Switch - A Jetpack Compose Switch component for toggle controls. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/text.mdx` | Text - A Jetpack Compose Text component for displaying styled text. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/textfield.mdx` | TextField - Jetpack Compose TextField components for native Material3 text input. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/togglebutton.mdx` | ToggleButton - Jetpack Compose ToggleButton components for displaying native Material3 toggle buttons. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/tooltip.mdx` | Tooltip - Jetpack Compose Tooltip components for displaying contextual information on long-press. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/topappbar.mdx` | TopAppBar - A Jetpack Compose TopAppBar component for displaying a title, a navigation icon, and actions at the top of a screen. |
| `versions/v58.0.0/sdk/ui/jetpack-compose/usenativestate.mdx` | useNativeState - A React hook that creates observable state shared between JavaScript and native Jetpack Compose views. |

### versions/v58.0.0/sdk/ui/swift-ui/ (50 files)

| File | Description |
|------|-------------|
| `versions/v58.0.0/sdk/ui/swift-ui/accessorywidgetbackground.mdx` | AccessoryWidgetBackground - A SwiftUI adaptive background view that provides a standard appearance based on the widget's environment. |
| `versions/v58.0.0/sdk/ui/swift-ui/alert.mdx` | Alert - A SwiftUI Alert component for presenting native iOS alert dialogs. |
| `versions/v58.0.0/sdk/ui/swift-ui/arrangementview.mdx` | ArrangementView - A SwiftUI ArrangementView component that arranges a primary and a secondary view with an adaptive layout. |
| `versions/v58.0.0/sdk/ui/swift-ui/background.mdx` | Background - A SwiftUI Background component for layering content behind another view. |
| `versions/v58.0.0/sdk/ui/swift-ui/bottomsheet.mdx` | BottomSheet - A SwiftUI BottomSheet component that presents content from the bottom of the screen. |
| `versions/v58.0.0/sdk/ui/swift-ui/button.mdx` | Button - A SwiftUI Button component for displaying native buttons. |
| `versions/v58.0.0/sdk/ui/swift-ui/colorpicker.mdx` | ColorPicker - A SwiftUI ColorPicker component for selecting colors. |
| `versions/v58.0.0/sdk/ui/swift-ui/confirmationdialog.mdx` | ConfirmationDialog - A SwiftUI ConfirmationDialog component for presenting confirmation prompts. |
| `versions/v58.0.0/sdk/ui/swift-ui/contextmenu.mdx` | ContextMenu - A SwiftUI ContextMenu component for displaying context menus. |
| `versions/v58.0.0/sdk/ui/swift-ui/controlgroup.mdx` | ControlGroup - A SwiftUI ControlGroup component for grouping interactive controls. |
| `versions/v58.0.0/sdk/ui/swift-ui/datepicker.mdx` | DatePicker - A SwiftUI DatePicker component for selecting dates and times. |
| `versions/v58.0.0/sdk/ui/swift-ui/disclosuregroup.mdx` | DisclosureGroup - A SwiftUI DisclosureGroup component for displaying expandable content. |
| `versions/v58.0.0/sdk/ui/swift-ui/divider.mdx` | Divider - A SwiftUI Divider component for creating visual separators. |
| `versions/v58.0.0/sdk/ui/swift-ui/extending.mdx` | Extending with SwiftUI - Learn how to create custom SwiftUI components and modifiers that integrate with Expo UI. |
| `versions/v58.0.0/sdk/ui/swift-ui/form.mdx` | Form - A SwiftUI Form component for collecting user input in a structured layout. |
| `versions/v58.0.0/sdk/ui/swift-ui/gauge.mdx` | Gauge - A SwiftUI Gauge component for displaying progress with visual indicators. |
| `versions/v58.0.0/sdk/ui/swift-ui/group.mdx` | Group - A SwiftUI Group component for grouping views without affecting layout. |
| `versions/v58.0.0/sdk/ui/swift-ui/host.mdx` | Host - A SwiftUI Host component that enables SwiftUI components in React Native. |
| `versions/v58.0.0/sdk/ui/swift-ui/hstack.mdx` | HStack - A SwiftUI HStack component for horizontal layouts. |
| `versions/v58.0.0/sdk/ui/swift-ui/image.mdx` | Image - A SwiftUI Image component for displaying SF Symbols. |
| `versions/v58.0.0/sdk/ui/swift-ui/index.mdx` | SwiftUI components for building native iOS interfaces with @expo/ui. |
| `versions/v58.0.0/sdk/ui/swift-ui/label.mdx` | Label - A SwiftUI Label component for displaying text with an icon. |
| `versions/v58.0.0/sdk/ui/swift-ui/lazyhstack.mdx` | LazyHStack - A SwiftUI LazyHStack component for lazy horizontal layouts. |
| `versions/v58.0.0/sdk/ui/swift-ui/lazyvstack.mdx` | LazyVStack - A SwiftUI LazyVStack component for lazy vertical layouts. |
| `versions/v58.0.0/sdk/ui/swift-ui/link.mdx` | Link - A SwiftUI Link component for displaying clickable links. |
| `versions/v58.0.0/sdk/ui/swift-ui/list.mdx` | List - A SwiftUI List component for displaying scrollable lists of items. |
| `versions/v58.0.0/sdk/ui/swift-ui/menu.mdx` | Menu - A SwiftUI Menu component for displaying dropdown menus. |
| `versions/v58.0.0/sdk/ui/swift-ui/modifiers.mdx` | Modifiers - SwiftUI view modifiers for customizing component appearance and behavior. |
| `versions/v58.0.0/sdk/ui/swift-ui/namespace.mdx` | A Namespace component that allows you create Namespaces in SwiftUI |
| `versions/v58.0.0/sdk/ui/swift-ui/navigationsplitview.mdx` | NavigationSplitView - A SwiftUI NavigationSplitView component that presents two or three columns side by side. |
| `versions/v58.0.0/sdk/ui/swift-ui/navigationstack.mdx` | NavigationStack - A SwiftUI NavigationStack, with the links and destinations that push views onto it. |
| `versions/v58.0.0/sdk/ui/swift-ui/overlay.mdx` | Overlay - A SwiftUI Overlay component for layering content on top of another view. |
| `versions/v58.0.0/sdk/ui/swift-ui/picker.mdx` | Picker - A SwiftUI Picker component for selecting options from a list. |
| `versions/v58.0.0/sdk/ui/swift-ui/popover.mdx` | Popover - A SwiftUI Popover component for displaying content in a floating overlay. |
| `versions/v58.0.0/sdk/ui/swift-ui/progressview.mdx` | ProgressView - A SwiftUI ProgressView component for displaying progress indicators. |
| `versions/v58.0.0/sdk/ui/swift-ui/rnhostview.mdx` | RNHostView - A component that enables React Native views inside SwiftUI. |
| `versions/v58.0.0/sdk/ui/swift-ui/scrollview.mdx` | ScrollView - A SwiftUI ScrollView component for scrollable content. |
| `versions/v58.0.0/sdk/ui/swift-ui/section.mdx` | Section - A SwiftUI Section component for grouping content within lists and forms. |
| `versions/v58.0.0/sdk/ui/swift-ui/securefield.mdx` | SecureField - A SwiftUI SecureField component for password input. |
| `versions/v58.0.0/sdk/ui/swift-ui/slider.mdx` | Slider - A SwiftUI Slider component for selecting values from a range. |
| `versions/v58.0.0/sdk/ui/swift-ui/spacer.mdx` | Spacer - A SwiftUI Spacer component for flexible spacing. |
| `versions/v58.0.0/sdk/ui/swift-ui/swipeactions.mdx` | SwipeActions - A SwiftUI SwipeActions component for adding leading and trailing swipe actions to row content. |
| `versions/v58.0.0/sdk/ui/swift-ui/tabview.mdx` | TabView - A SwiftUI TabView component for paged or tabbed content. |
| `versions/v58.0.0/sdk/ui/swift-ui/text.mdx` | Text - A SwiftUI Text component for displaying styled text with support for nested texts. |
| `versions/v58.0.0/sdk/ui/swift-ui/textfield.mdx` | TextField - A SwiftUI TextField component for text input. |
| `versions/v58.0.0/sdk/ui/swift-ui/toggle.mdx` | Toggle - A SwiftUI Toggle component for displaying native toggles. |
| `versions/v58.0.0/sdk/ui/swift-ui/toolbar.mdx` | Toolbar - A SwiftUI Toolbar component that places items in the toolbar of the view it wraps. |
| `versions/v58.0.0/sdk/ui/swift-ui/usenativestate.mdx` | useNativeState - A React hook that creates observable state shared between JavaScript and native SwiftUI views. |
| `versions/v58.0.0/sdk/ui/swift-ui/vstack.mdx` | VStack - A SwiftUI VStack component for vertical layouts. |
| `versions/v58.0.0/sdk/ui/swift-ui/zstack.mdx` | ZStack - A SwiftUI ZStack component for overlapping layouts. |

### versions/v58.0.0/sdk/ui/universal/ (19 files)

| File | Description |
|------|-------------|
| `versions/v58.0.0/sdk/ui/universal/bottomsheet.mdx` | BottomSheet - A modal sheet that slides up from the bottom of the screen. |
| `versions/v58.0.0/sdk/ui/universal/button.mdx` | Button - A pressable button with multiple visual variants. |
| `versions/v58.0.0/sdk/ui/universal/checkbox.mdx` | Checkbox - A toggle control that represents a checked or unchecked state. |
| `versions/v58.0.0/sdk/ui/universal/collapsible.mdx` | Collapsible - A labelled tappable header that toggles visibility of its content. |
| `versions/v58.0.0/sdk/ui/universal/column.mdx` | Column - A vertical layout container for universal @expo/ui components. |
| `versions/v58.0.0/sdk/ui/universal/fieldgroup.mdx` | FieldGroup - A scrollable container of grouped settings-style rows. |
| `versions/v58.0.0/sdk/ui/universal/host.mdx` | Host - A cross-platform Host component that wraps universal @expo/ui content. |
| `versions/v58.0.0/sdk/ui/universal/icon.mdx` | Icon - A platform-native icon — SF Symbol on iOS, Material Symbol on Android. |
| `versions/v58.0.0/sdk/ui/universal/index.mdx` | Universal - Cross-platform components for building shared UIs across Android, iOS, and web with @expo/ui. |
| `versions/v58.0.0/sdk/ui/universal/list.mdx` | List - A virtualized vertical container of rows, paired with a tappable ListItem primitive. |
| `versions/v58.0.0/sdk/ui/universal/picker.mdx` | Picker - A single-selection input with menu and wheel appearances. |
| `versions/v58.0.0/sdk/ui/universal/rnhostview.mdx` | RNHostView - A cross-platform component for hosting React Native views inside @expo/ui views. |
| `versions/v58.0.0/sdk/ui/universal/row.mdx` | Row - A horizontal layout container for universal @expo/ui components. |
| `versions/v58.0.0/sdk/ui/universal/scrollview.mdx` | ScrollView - A scrollable container that supports vertical or horizontal scrolling. |
| `versions/v58.0.0/sdk/ui/universal/slider.mdx` | Slider - A control for selecting a value from a continuous or stepped range. |
| `versions/v58.0.0/sdk/ui/universal/spacer.mdx` | Spacer - A layout spacer that produces empty space between siblings. |
| `versions/v58.0.0/sdk/ui/universal/switch.mdx` | Switch - A toggle control that switches between on and off states. |
| `versions/v58.0.0/sdk/ui/universal/text.mdx` | Text - A component for displaying styled text content. |
| `versions/v58.0.0/sdk/ui/universal/textinput.mdx` | TextInput - A text input backed by native SwiftUI and Jetpack Compose components, with a React Native-compatible API. |

### workflow/ (12 files)

| File | Description |
|------|-------------|
| `workflow/android-studio-emulator.mdx` | Android Studio Emulator - Learn how to set up the Android Emulator to test your app on a virtual Android device. |
| `workflow/common-development-errors.mdx` | Common development errors - A list of common development errors that are encountered by developers using Expo. |
| `workflow/configuration.mdx` | Configure with app config - Learn about what app.json/app.config.js/app.config.ts files are and how you can customize and use them dynamically. |
| `workflow/continuous-native-generation.mdx` | Continuous Native Generation (CNG) - Learn about managing your native projects with Continuous Native Generation (CNG) and Prebuild. |
| `workflow/customizing.mdx` | Add custom native code - Learn how to add custom native code to your Expo project. |
| `workflow/development-mode.mdx` | Development and production modes - Learn how to run a project in development mode or production mode. |
| `workflow/ios-simulator.mdx` | iOS Simulator - Learn how you can install the iOS Simulator on your Mac and use it to develop your app. |
| `workflow/logging.mdx` | View logs - Learn how to view logs when using Expo CLI, native logs in Android Studio and Xcode, and system logs. |
| `workflow/overview.mdx` | Develop an app with Expo - An overview of the development process of building an Expo app to help build a mental model of the core development loop. |
| `workflow/upgrading-expo-sdk-walkthrough.mdx` | Upgrade Expo SDK - Learn how to incrementally upgrade the Expo SDK version in your project. |
| `workflow/using-libraries.mdx` | Using Expo SDK, React Native, and third-party libraries - Learn how to use Expo SDK, React Native libraries, and other third-party npm packages in your project. |
| `workflow/web.mdx` | Develop websites with Expo - Learn how to develop your app for the web so you can build a universal app. |
