# storybook Table of Contents

## Directory Map

```
contents/
├── get-started/          # Installation, setup, why Storybook (17 files)
│   └── frameworks/       # Per-framework setup guides (13 files)
├── writing-stories/      # Story authoring guides (14 files)
│   └── mocking-data-and-modules/  # Mocking patterns (4 files)
├── writing-tests/        # Testing guides (11 files)
│   └── integrations/     # Test runner integrations (6 files)
│       └── vitest-addon/ # Vitest addon docs (2 files)
├── writing-docs/         # Documentation authoring (6 files)
├── configure/            # Configuration guides (16 files)
│   ├── integration/      # Framework/compiler integrations (7 files)
│   └── user-interface/   # UI customization (6 files)
├── api/                  # API reference (36 files)
│   ├── main-config/      # main.js config reference (22 files)
│   ├── doc-blocks/       # Doc block components (17 files)
│   ├── csf/              # Component Story Format (2 files)
│   └── portable-stories/ # Portable stories API (4 files)
├── essentials/           # Essential addons (9 files)
├── addons/               # Addons authoring and catalog (10 files)
├── builders/             # Build tooling (Vite/Webpack) (4 files)
├── sharing/              # Publishing and embedding (6 files)
├── ai/                   # AI/MCP integration (8 files)
│   └── mcp/              # MCP server docs (4 files)
├── releases/             # Migration and upgrade guides (3 files)
├── faq.mdx               # Frequently asked questions
└── index.mdx             # Main entry point
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user / installation | `contents/get-started/install.mdx` |
| Framework setup (React, Next.js, etc.) | `contents/get-started/frameworks/` |
| Writing your first story | `contents/writing-stories/index.mdx` |
| Testing components | `contents/writing-tests/index.mdx` |
| Configuration reference | `contents/configure/index.mdx` |
| main.js API reference | `contents/api/main-config/main-config.mdx` |
| CSF format reference | `contents/api/csf/index.mdx` |
| Upgrading Storybook | `contents/releases/upgrading.mdx` |
| FAQ | `contents/faq.mdx` |

## Detailed Structure

### get-started/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Getting started overview |
| `install.mdx` | Installation guide |
| `setup.mdx` | Project setup |
| `why-storybook.mdx` | Why use Storybook |
| `whats-a-story.mdx` | What is a story |
| `browse-stories.mdx` | Browsing stories in the UI |
| `conclusion.mdx` | Getting started conclusion |

### get-started/frameworks/ (13 files)

| File | Description |
|------|-------------|
| `index.mdx` | Framework overview |
| `react-vite.mdx` | React + Vite setup |
| `react-webpack5.mdx` | React + Webpack 5 setup |
| `nextjs.mdx` | Next.js setup |
| `nextjs-vite.mdx` | Next.js + Vite setup |
| `angular.mdx` | Angular setup |
| `vue3-vite.mdx` | Vue 3 + Vite setup |
| `svelte-vite.mdx` | Svelte + Vite setup |
| `sveltekit.mdx` | SvelteKit setup |
| `preact-vite.mdx` | Preact + Vite setup |
| `tanstack-react.mdx` | TanStack React setup |
| `react-native-web-vite.mdx` | React Native Web + Vite |
| `web-components-vite.mdx` | Web Components + Vite |

### writing-stories/ (10 files)

| File | Description |
|------|-------------|
| `index.mdx` | Introduction to writing stories |
| `args.mdx` | Using args in stories |
| `parameters.mdx` | Story parameters |
| `decorators.mdx` | Decorators |
| `loaders.mdx` | Loaders |
| `play-function.mdx` | Play functions for interaction |
| `tags.mdx` | Tagging stories |
| `typescript.mdx` | TypeScript in stories |
| `naming-components-and-hierarchy.mdx` | Story naming and organization |
| `stories-for-multiple-components.mdx` | Multi-component stories |
| `build-pages-with-storybook.mdx` | Building page stories |

### writing-stories/mocking-data-and-modules/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Mocking overview |
| `mocking-modules.mdx` | Module mocking |
| `mocking-network-requests.mdx` | Network request mocking |
| `mocking-providers.mdx` | Provider mocking |

### writing-tests/ (9 files)

| File | Description |
|------|-------------|
| `index.mdx` | Testing overview |
| `interaction-testing.mdx` | Interaction (play function) tests |
| `accessibility-testing.mdx` | Accessibility testing |
| `visual-testing.mdx` | Visual regression testing |
| `snapshot-testing.mdx` | Snapshot testing |
| `test-coverage.mdx` | Test coverage |
| `in-ci.mdx` | Running tests in CI |

### writing-tests/integrations/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Integrations overview |
| `test-runner.mdx` | Test runner integration |
| `stories-in-unit-tests.mdx` | Using stories in unit tests |
| `stories-in-end-to-end-tests.mdx` | Using stories in E2E tests |

### writing-tests/integrations/vitest-addon/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Vitest addon overview |
| `migration-guide.mdx` | Vitest addon migration guide |

### writing-docs/ (6 files)

| File | Description |
|------|-------------|
| `index.mdx` | Writing docs overview |
| `autodocs.mdx` | Automatic documentation generation |
| `doc-blocks.mdx` | Doc blocks usage |
| `mdx.mdx` | MDX documentation |
| `build-documentation.mdx` | Building static docs |
| `code-panel.mdx` | Code panel |

### configure/ (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | Configuration overview |
| `story-rendering.mdx` | Story rendering configuration |
| `story-layout.mdx` | Story layout configuration |
| `styling-and-css.mdx` | Styling and CSS setup |
| `environment-variables.mdx` | Environment variables |
| `telemetry.mdx` | Telemetry configuration |
| `webpack.mdx` | Webpack configuration |

### configure/integration/ (7 files)

| File | Description |
|------|-------------|
| `index.mdx` | Integration overview |
| `frameworks.mdx` | Framework integration |
| `frameworks-feature-support.mdx` | Framework feature support matrix |
| `compilers.mdx` | Compiler configuration |
| `typescript.mdx` | TypeScript configuration |
| `eslint-plugin.mdx` | ESLint plugin |
| `images-and-assets.mdx` | Images and static assets |

### configure/user-interface/ (6 files)

| File | Description |
|------|-------------|
| `index.mdx` | UI configuration overview |
| `theming.mdx` | Theming Storybook |
| `sidebar-and-urls.mdx` | Sidebar and URL configuration |
| `features-and-behavior.mdx` | UI features and behavior |
| `storybook-addons.mdx` | Managing addons in UI |
| `change-detection.mdx` | Change detection |

### api/ (6 files)

| File | Description |
|------|-------------|
| `index.mdx` | API reference overview |
| `arg-types.mdx` | ArgTypes API |
| `parameters.mdx` | Parameters API |
| `cli-options.mdx` | CLI options |
| `new-frameworks.mdx` | New frameworks API |

### api/main-config/ (22 files)

| File | Description |
|------|-------------|
| `index.mdx` | main.js overview |
| `main-config.mdx` | Full main.js reference |
| `main-config-addons.mdx` | `addons` config |
| `main-config-babel.mdx` | `babel` config |
| `main-config-babel-default.mdx` | `babelDefault` config |
| `main-config-build.mdx` | `build` config |
| `main-config-core.mdx` | `core` config |
| `main-config-docs.mdx` | `docs` config |
| `main-config-env.mdx` | `env` config |
| `main-config-features.mdx` | `features` config |
| `main-config-framework.mdx` | `framework` config |
| `main-config-indexers.mdx` | `indexers` config |
| `main-config-log-level.mdx` | `logLevel` config |
| `main-config-manager-head.mdx` | `managerHead` config |
| `main-config-preview-annotations.mdx` | `previewAnnotations` config |
| `main-config-preview-body.mdx` | `previewBody` config |
| `main-config-preview-head.mdx` | `previewHead` config |
| `main-config-refs.mdx` | `refs` config |
| `main-config-static-dirs.mdx` | `staticDirs` config |
| `main-config-stories.mdx` | `stories` config |
| `main-config-swc.mdx` | `swc` config |
| `main-config-tags.mdx` | `tags` config |
| `main-config-typescript.mdx` | `typescript` config |
| `main-config-vite-final.mdx` | `viteFinal` config |
| `main-config-webpack-final.mdx` | `webpackFinal` config |

### api/doc-blocks/ (17 files)

| File | Description |
|------|-------------|
| `index.mdx` | Doc blocks overview |
| `doc-block-argtypes.mdx` | ArgTypes block |
| `doc-block-canvas.mdx` | Canvas block |
| `doc-block-colorpalette.mdx` | ColorPalette block |
| `doc-block-controls.mdx` | Controls block |
| `doc-block-description.mdx` | Description block |
| `doc-block-icongallery.mdx` | IconGallery block |
| `doc-block-markdown.mdx` | Markdown block |
| `doc-block-meta.mdx` | Meta block |
| `doc-block-primary.mdx` | Primary block |
| `doc-block-source.mdx` | Source block |
| `doc-block-stories.mdx` | Stories block |
| `doc-block-story.mdx` | Story block |
| `doc-block-subtitle.mdx` | Subtitle block |
| `doc-block-tableofcontents.mdx` | TableOfContents block |
| `doc-block-title.mdx` | Title block |
| `doc-block-typeset.mdx` | Typeset block |
| `doc-block-unstyled.mdx` | Unstyled block |
| `doc-block-useof.mdx` | UseOf block |

### api/csf/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Component Story Format reference |
| `csf-next.mdx` | CSF Next (upcoming format) |

### api/portable-stories/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Portable stories overview |
| `portable-stories-jest.mdx` | Portable stories with Jest |
| `portable-stories-playwright.mdx` | Portable stories with Playwright |
| `portable-stories-vitest.mdx` | Portable stories with Vitest |

### essentials/ (9 files)

| File | Description |
|------|-------------|
| `index.mdx` | Essential addons overview |
| `actions.mdx` | Actions addon |
| `backgrounds.mdx` | Backgrounds addon |
| `controls.mdx` | Controls addon |
| `highlight.mdx` | Highlight addon |
| `measure-and-outline.mdx` | Measure and outline addon |
| `themes.mdx` | Themes addon |
| `toolbars-and-globals.mdx` | Toolbars and globals addon |
| `viewport.mdx` | Viewport addon |

### addons/ (10 files)

| File | Description |
|------|-------------|
| `index.mdx` | Addons overview |
| `install-addons.mdx` | Installing addons |
| `configure-addons.mdx` | Configuring addons |
| `writing-addons.mdx` | Writing custom addons |
| `writing-presets.mdx` | Writing presets |
| `addons-api.mdx` | Addons API reference |
| `addon-types.mdx` | Addon types |
| `addon-knowledge-base.mdx` | Addon knowledge base |
| `addon-migration-guide.mdx` | Addon migration guide |
| `integration-catalog.mdx` | Integration catalog |

### builders/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Builders overview |
| `vite.mdx` | Vite builder |
| `webpack.mdx` | Webpack builder |
| `builder-api.mdx` | Builder API |

### sharing/ (6 files)

| File | Description |
|------|-------------|
| `index.mdx` | Sharing overview |
| `publish-storybook.mdx` | Publishing Storybook |
| `embed.mdx` | Embedding stories |
| `storybook-composition.mdx` | Storybook composition |
| `package-composition.mdx` | Package composition |
| `design-integrations.mdx` | Design tool integrations |

### ai/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | AI integration overview |
| `setup.mdx` | AI setup |
| `best-practices.mdx` | AI best practices |
| `manifests.mdx` | AI manifests |

### ai/mcp/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | MCP server overview |
| `overview.mdx` | MCP detailed overview |
| `api.mdx` | MCP API reference |
| `sharing.mdx` | MCP sharing |

### releases/ (3 files)

| File | Description |
|------|-------------|
| `upgrading.mdx` | Upgrade guide and scripts |
| `migration-guide.mdx` | Migration guide to Storybook 10 |
| `migration-guide-from-older-version.mdx` | Migration guide from Storybook 8 to 9 |
