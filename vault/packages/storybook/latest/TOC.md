# Storybook Table of Contents

## Directory Map

```
contents/
├── get-started/           # Installation, setup, frameworks (14 files)
│   └── frameworks/        # Framework-specific setup guides
├── writing-stories/       # Story writing guides (13 files)
│   └── mocking-data-and-modules/  # Mocking patterns
├── writing-tests/         # Testing with Storybook (11 files)
│   └── integrations/      # Jest, Vitest, Playwright, test-runner
│       └── vitest-addon/  # Vitest addon docs
├── writing-docs/          # Documentation authoring (6 files)
├── configure/             # Storybook configuration (14 files)
│   ├── integration/       # Framework, TypeScript, assets
│   └── user-interface/    # UI customization, theming
├── essentials/            # Essential addons (9 files)
├── api/                   # API reference (35 files)
│   ├── csf/               # Component Story Format spec
│   ├── doc-blocks/        # Doc block components
│   ├── main-config/       # main.js/ts config options
│   └── portable-stories/  # Portable stories API
├── addons/                # Addon development (10 files)
├── builders/              # Vite/Webpack builder docs (4 files)
├── sharing/               # Publishing and sharing (6 files)
└── releases/              # Migration and upgrade guides (4 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user / Install | `contents/get-started/install.mdx` |
| Write first story | `contents/writing-stories/index.mdx` |
| Configure Storybook | `contents/configure/index.mdx` |
| API reference | `contents/api/index.mdx` |
| Testing overview | `contents/writing-tests/index.mdx` |
| Addons overview | `contents/addons/index.mdx` |
| Migration to v10 | `contents/releases/migration-guide.mdx` |
| FAQ | `contents/faq.mdx` |

## Detailed Structure

### get-started/ (14 files)

| File | Description |
|------|-------------|
| `get-started/index.mdx` | Get started with Storybook |
| `get-started/install.mdx` | Install Storybook |
| `get-started/setup.mdx` | Setup Storybook |
| `get-started/whats-a-story.mdx` | What's a story? |
| `get-started/browse-stories.mdx` | Browse Stories |
| `get-started/why-storybook.mdx` | Why Storybook? |
| `get-started/conclusion.mdx` | Conclusion |
| `get-started/frameworks/index.mdx` | Frameworks overview |
| `get-started/frameworks/angular.mdx` | Storybook for Angular |
| `get-started/frameworks/nextjs.mdx` | Storybook for Next.js (Webpack) |
| `get-started/frameworks/nextjs-vite.mdx` | Storybook for Next.js with Vite |
| `get-started/frameworks/react-vite.mdx` | Storybook for React with Vite |
| `get-started/frameworks/react-webpack5.mdx` | Storybook for React with Webpack |
| `get-started/frameworks/svelte-vite.mdx` | Storybook for Svelte with Vite |
| `get-started/frameworks/sveltekit.mdx` | Storybook for SvelteKit |
| `get-started/frameworks/vue3-vite.mdx` | Storybook for Vue with Vite |
| `get-started/frameworks/web-components-vite.mdx` | Storybook for Web Components |
| `get-started/frameworks/preact-vite.mdx` | Storybook for Preact with Vite |
| `get-started/frameworks/react-native-web-vite.mdx` | Storybook for React Native Web |

### writing-stories/ (13 files)

| File | Description |
|------|-------------|
| `writing-stories/index.mdx` | How to write stories |
| `writing-stories/args.mdx` | Args |
| `writing-stories/parameters.mdx` | Parameters |
| `writing-stories/decorators.mdx` | Decorators |
| `writing-stories/play-function.mdx` | Play function |
| `writing-stories/loaders.mdx` | Loaders |
| `writing-stories/tags.mdx` | Tags |
| `writing-stories/typescript.mdx` | Writing stories in TypeScript |
| `writing-stories/naming-components-and-hierarchy.mdx` | Naming components and hierarchy |
| `writing-stories/stories-for-multiple-components.mdx` | Stories for multiple components |
| `writing-stories/build-pages-with-storybook.mdx` | Building pages with Storybook |
| `writing-stories/mocking-data-and-modules/index.mdx` | Mocking data and modules |
| `writing-stories/mocking-data-and-modules/mocking-modules.mdx` | Mocking modules |
| `writing-stories/mocking-data-and-modules/mocking-network-requests.mdx` | Mocking network requests |
| `writing-stories/mocking-data-and-modules/mocking-providers.mdx` | Mocking providers |

### writing-tests/ (11 files)

| File | Description |
|------|-------------|
| `writing-tests/index.mdx` | How to test UIs with Storybook |
| `writing-tests/interaction-testing.mdx` | Interaction tests |
| `writing-tests/accessibility-testing.mdx` | Accessibility tests |
| `writing-tests/visual-testing.mdx` | Visual tests |
| `writing-tests/snapshot-testing.mdx` | Snapshot tests |
| `writing-tests/test-coverage.mdx` | Test coverage |
| `writing-tests/in-ci.mdx` | Testing in CI |
| `writing-tests/integrations/index.mdx` | Test integrations overview |
| `writing-tests/integrations/test-runner.mdx` | Test runner |
| `writing-tests/integrations/stories-in-unit-tests.mdx` | Stories in unit tests |
| `writing-tests/integrations/stories-in-end-to-end-tests.mdx` | Stories in end-to-end tests |
| `writing-tests/integrations/vitest-addon/index.mdx` | Vitest addon |
| `writing-tests/integrations/vitest-addon/migration-guide.mdx` | Migrating to Vitest addon |

### writing-docs/ (6 files)

| File | Description |
|------|-------------|
| `writing-docs/index.mdx` | How to document components |
| `writing-docs/autodocs.mdx` | Automatic documentation |
| `writing-docs/doc-blocks.mdx` | Doc blocks |
| `writing-docs/mdx.mdx` | MDX |
| `writing-docs/build-documentation.mdx` | Preview and build docs |
| `writing-docs/code-panel.mdx` | Code panel |

### configure/ (14 files)

| File | Description |
|------|-------------|
| `configure/index.mdx` | Configure Storybook |
| `configure/story-rendering.mdx` | Story rendering |
| `configure/story-layout.mdx` | Story layout |
| `configure/styling-and-css.mdx` | Styling and CSS |
| `configure/environment-variables.mdx` | Environment variables |
| `configure/telemetry.mdx` | Telemetry |
| `configure/webpack.mdx` | Webpack configuration |
| `configure/integration/index.mdx` | Integration overview |
| `configure/integration/frameworks.mdx` | Framework support |
| `configure/integration/frameworks-feature-support.mdx` | Feature support for frameworks |
| `configure/integration/typescript.mdx` | TypeScript |
| `configure/integration/compilers.mdx` | Compiler support |
| `configure/integration/eslint-plugin.mdx` | ESLint plugin |
| `configure/integration/images-and-assets.mdx` | Images, fonts, and assets |
| `configure/user-interface/index.mdx` | User Interface |
| `configure/user-interface/features-and-behavior.mdx` | Features and behavior |
| `configure/user-interface/sidebar-and-urls.mdx` | Sidebar & URLs |
| `configure/user-interface/theming.mdx` | Theming |
| `configure/user-interface/storybook-addons.mdx` | Storybook Addons |

### essentials/ (9 files)

| File | Description |
|------|-------------|
| `essentials/index.mdx` | Essential addons overview |
| `essentials/actions.mdx` | Actions addon |
| `essentials/backgrounds.mdx` | Backgrounds addon |
| `essentials/controls.mdx` | Controls addon |
| `essentials/highlight.mdx` | Highlight addon |
| `essentials/measure-and-outline.mdx` | Measure & outline |
| `essentials/themes.mdx` | Themes |
| `essentials/toolbars-and-globals.mdx` | Toolbars & globals |
| `essentials/viewport.mdx` | Viewport addon |

### api/ (35 files)

| File | Description |
|------|-------------|
| `api/index.mdx` | API references overview |
| `api/arg-types.mdx` | ArgTypes |
| `api/cli-options.mdx` | CLI options |
| `api/parameters.mdx` | Parameters |
| `api/new-frameworks.mdx` | Frameworks API |
| `api/csf/index.mdx` | Component Story Format (CSF) |
| `api/csf/csf-next.mdx` | CSF Next |
| `api/doc-blocks/index.mdx` | Doc Blocks overview |
| `api/doc-blocks/doc-block-argtypes.mdx` | ArgTypes block |
| `api/doc-blocks/doc-block-canvas.mdx` | Canvas block |
| `api/doc-blocks/doc-block-controls.mdx` | Controls block |
| `api/doc-blocks/doc-block-description.mdx` | Description block |
| `api/doc-blocks/doc-block-meta.mdx` | Meta block |
| `api/doc-blocks/doc-block-primary.mdx` | Primary block |
| `api/doc-blocks/doc-block-source.mdx` | Source block |
| `api/doc-blocks/doc-block-stories.mdx` | Stories block |
| `api/doc-blocks/doc-block-story.mdx` | Story block |
| `api/doc-blocks/doc-block-subtitle.mdx` | Subtitle block |
| `api/doc-blocks/doc-block-title.mdx` | Title block |
| `api/doc-blocks/doc-block-colorpalette.mdx` | ColorPalette block |
| `api/doc-blocks/doc-block-icongallery.mdx` | IconGallery block |
| `api/doc-blocks/doc-block-markdown.mdx` | Markdown block |
| `api/doc-blocks/doc-block-tableofcontents.mdx` | TableOfContents block |
| `api/doc-blocks/doc-block-typeset.mdx` | Typeset block |
| `api/doc-blocks/doc-block-unstyled.mdx` | Unstyled block |
| `api/doc-blocks/doc-block-useof.mdx` | useOf hook |
| `api/main-config/index.mdx` | main.js/ts configuration |
| `api/main-config/main-config.mdx` | Main configuration reference |
| `api/main-config/main-config-addons.mdx` | addons config |
| `api/main-config/main-config-framework.mdx` | framework config |
| `api/main-config/main-config-stories.mdx` | stories config |
| `api/main-config/main-config-features.mdx` | features config |
| `api/main-config/main-config-core.mdx` | core config |
| `api/main-config/main-config-docs.mdx` | docs config |
| `api/main-config/main-config-typescript.mdx` | typescript config |
| `api/main-config/main-config-vite-final.mdx` | viteFinal config |
| `api/main-config/main-config-webpack-final.mdx` | webpackFinal config |
| `api/main-config/main-config-build.mdx` | build config |
| `api/main-config/main-config-env.mdx` | env config |
| `api/main-config/main-config-static-dirs.mdx` | staticDirs config |
| `api/main-config/main-config-refs.mdx` | refs config |
| `api/main-config/main-config-tags.mdx` | tags config |
| `api/main-config/main-config-indexers.mdx` | indexers config |
| `api/main-config/main-config-babel.mdx` | babel config |
| `api/main-config/main-config-babel-default.mdx` | babelDefault config |
| `api/main-config/main-config-swc.mdx` | swc config |
| `api/main-config/main-config-log-level.mdx` | logLevel config |
| `api/main-config/main-config-manager-head.mdx` | managerHead config |
| `api/main-config/main-config-preview-annotations.mdx` | previewAnnotations config |
| `api/main-config/main-config-preview-body.mdx` | previewBody config |
| `api/main-config/main-config-preview-head.mdx` | previewHead config |
| `api/portable-stories/index.mdx` | Portable Stories overview |
| `api/portable-stories/portable-stories-jest.mdx` | Portable stories in Jest |
| `api/portable-stories/portable-stories-vitest.mdx` | Portable stories in Vitest |
| `api/portable-stories/portable-stories-playwright.mdx` | Portable stories in Playwright CT |

### addons/ (10 files)

| File | Description |
|------|-------------|
| `addons/index.mdx` | Introduction to addons |
| `addons/install-addons.mdx` | Install addons |
| `addons/configure-addons.mdx` | Configure and communicate with an addon |
| `addons/addon-types.mdx` | Types of addons |
| `addons/writing-addons.mdx` | Write an addon |
| `addons/writing-presets.mdx` | Write a preset addon |
| `addons/addons-api.mdx` | Addon API |
| `addons/integration-catalog.mdx` | Add to the integration catalog |
| `addons/addon-knowledge-base.mdx` | Addon knowledge base |
| `addons/addon-migration-guide.mdx` | Addon migration guide for Storybook 10.0 |

### builders/ (4 files)

| File | Description |
|------|-------------|
| `builders/index.mdx` | Builders overview |
| `builders/vite.mdx` | Vite builder |
| `builders/webpack.mdx` | Webpack builder |
| `builders/builder-api.mdx` | Builder API |

### sharing/ (6 files)

| File | Description |
|------|-------------|
| `sharing/index.mdx` | Sharing overview |
| `sharing/publish-storybook.mdx` | Publish Storybook |
| `sharing/embed.mdx` | Embed stories |
| `sharing/storybook-composition.mdx` | Storybook Composition |
| `sharing/package-composition.mdx` | Package Composition |
| `sharing/design-integrations.mdx` | Design integrations |

### releases/ (4 files)

| File | Description |
|------|-------------|
| `releases/migration-guide.mdx` | Migration guide for Storybook 10 |
| `releases/migration-guide-from-older-version.mdx` | Migration guide from Storybook 8.x to 9.1 |
| `releases/upgrading.mdx` | Upgrading Storybook |
| `releases/features.mdx` | Features Lifecycle |

### Top-level files

| File | Description |
|------|-------------|
| `faq.mdx` | Frequently Asked Questions |
| `index.mdx` | Get started with Storybook |
