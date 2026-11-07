# storybook Table of Contents

## Directory Map

```
contents/
├── addons/ # Using and writing addons (10 files)
├── ai/ # AI features and MCP server (9 files)
├── api/ # API reference: main config, doc blocks, CLI, parameters (54 files)
├── builders/ # Vite and Webpack builders (4 files)
├── configure/ # Configuration, UI, integrations (20 files)
├── essentials/ # Built-in essentials (controls, actions, ...) (9 files)
├── get-started/ # Install, concepts, frameworks (21 files)
├── releases/ # Migration and upgrade guides (3 files)
├── sharing/ # Publishing and composing Storybooks (6 files)
├── writing-docs/ # Docs pages, MDX, autodocs (6 files)
├── writing-stories/ # Stories, args, decorators, CSF, mocking (18 files)
├── writing-tests/ # Interaction, a11y, visual, Vitest testing (13 files)
├── index.mdx, faq.mdx  # Home and FAQ (2 files)
└── _snippets/ # Code snippets (685 files) included by the pages above, by framework/language
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/get-started/install.mdx` |
| Writing stories | `contents/writing-stories/index.mdx` |
| main.js config | `contents/api/main-config/main-config.mdx` |
| Testing | `contents/writing-tests/index.mdx` |
| Addons | `contents/addons/index.mdx` |
| Upgrading | `contents/releases/upgrading.mdx` |
| Frameworks | `contents/get-started/frameworks/index.mdx` |
| AI / MCP | `contents/ai/index.mdx` |

## Detailed Structure

### addons/ (10 files)

| File | Description |
|------|-------------|
| `addon-knowledge-base.mdx` | Common addon enhancements: UI, storage, presets, styling |
| `addon-migration-guide.mdx` | Migrating addons to Storybook 11 |
| `addon-types.mdx` | UI-based addons versus preset addons |
| `addons-api.mdx` | Addon API for programmatic interaction with Storybook |
| `configure-addons.mdx` | Configuring and communicating with an addon |
| `index.mdx` | Introduction to addons |
| `install-addons.mdx` | Installing and registering addons |
| `integration-catalog.mdx` | Publishing to the integration catalog |
| `writing-addons.mdx` | Step-by-step guide to writing an addon |
| `writing-presets.mdx` | Writing preset addons |

### ai/ (5 files)

| File | Description |
|------|-------------|
| `agentic-review.mdx` | Experimental agentic review of components |
| `best-practices.mdx` | Best practices for AI-readable component manifests |
| `index.mdx` | Overview of Storybook AI capabilities |
| `manifests.mdx` | Generated component manifests for agents |
| `setup.mdx` | Agentic setup of Storybook in a project |

### ai/mcp/ (4 files)

| File | Description |
|------|-------------|
| `api.mdx` | Storybook MCP server API and tools |
| `index.mdx` | MCP server connecting Storybook to AI agents |
| `overview.mdx` | MCP server overview and capabilities |
| `sharing.mdx` | Sharing the MCP server with a team |

### api/ (5 files)

| File | Description |
|------|-------------|
| `arg-types.mdx` | ArgTypes: describing arg behavior and controls |
| `cli-options.mdx` | Storybook CLI commands and options |
| `index.mdx` | Overview of all API references |
| `new-frameworks.mdx` | Adding support for new frameworks |
| `parameters.mdx` | Parameters reference: static story and addon metadata |

### api/doc-blocks/ (19 files)

| File | Description |
|------|-------------|
| `doc-block-argtypes.mdx` | ArgTypes doc block |
| `doc-block-canvas.mdx` | Canvas doc block |
| `doc-block-colorpalette.mdx` | ColorPalette doc block |
| `doc-block-controls.mdx` | Controls doc block |
| `doc-block-description.mdx` | Description doc block |
| `doc-block-icongallery.mdx` | IconGallery doc block |
| `doc-block-markdown.mdx` | Markdown doc block |
| `doc-block-meta.mdx` | Meta doc block for attaching MDX docs |
| `doc-block-primary.mdx` | Primary doc block |
| `doc-block-source.mdx` | Source doc block |
| `doc-block-stories.mdx` | Stories doc block |
| `doc-block-story.mdx` | Story doc block |
| `doc-block-subtitle.mdx` | Subtitle doc block |
| `doc-block-tableofcontents.mdx` | TableOfContents doc block |
| `doc-block-title.mdx` | Title doc block |
| `doc-block-typeset.mdx` | Typeset doc block for fonts |
| `doc-block-unstyled.mdx` | Unstyled doc block |
| `doc-block-useof.mdx` | useOf hook for custom doc blocks |
| `index.mdx` | Doc blocks API index |

### api/main-config/ (27 files)

| File | Description |
|------|-------------|
| `index.mdx` | main.js|ts configuration index |
| `main-config-addons.mdx` | main.js|ts `addons` option |
| `main-config-babel-default.mdx` | main.js|ts `babel-default` option |
| `main-config-babel.mdx` | main.js|ts `babel` option |
| `main-config-build.mdx` | main.js|ts `build` option |
| `main-config-core.mdx` | main.js|ts `core` option |
| `main-config-docs.mdx` | main.js|ts `docs` option |
| `main-config-env.mdx` | main.js|ts `env` option |
| `main-config-features.mdx` | main.js|ts `features` option |
| `main-config-framework.mdx` | main.js|ts `framework` option |
| `main-config-indexers.mdx` | main.js|ts `indexers` option |
| `main-config-log-level.mdx` | main.js|ts `log-level` option |
| `main-config-manager-head.mdx` | main.js|ts `manager-head` option |
| `main-config-preview-annotations.mdx` | main.js|ts `preview-annotations` option |
| `main-config-preview-body.mdx` | main.js|ts `preview-body` option |
| `main-config-preview-head.mdx` | main.js|ts `preview-head` option |
| `main-config-refs.mdx` | main.js|ts `refs` option |
| `main-config-security.mdx` | main.js|ts `security` option |
| `main-config-static-dirs.mdx` | main.js|ts `static-dirs` option |
| `main-config-stories.mdx` | main.js|ts `stories` option |
| `main-config-story-sorts.mdx` | main.js|ts `story-sorts` option |
| `main-config-swc.mdx` | main.js|ts `swc` option |
| `main-config-tags.mdx` | main.js|ts `tags` option |
| `main-config-typescript.mdx` | main.js|ts `typescript` option |
| `main-config-vite-final.mdx` | main.js|ts `vite-final` option |
| `main-config-webpack-final.mdx` | main.js|ts `webpack-final` option |
| `main-config.mdx` | main.js|ts configuration overview |

### api/portable-stories/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Portable stories index |
| `portable-stories-jest.mdx` | Using stories in Jest via portable stories |
| `portable-stories-vitest.mdx` | Using stories in Vitest via portable stories |

### builders/ (4 files)

| File | Description |
|------|-------------|
| `builder-api.mdx` | Builder API for custom builders |
| `index.mdx` | Introduction to Storybook builders |
| `vite.mdx` | Vite builder setup and options |
| `webpack.mdx` | Webpack builder setup and options |

### configure/ (7 files)

| File | Description |
|------|-------------|
| `environment-variables.mdx` | Environment variables in Storybook |
| `index.mdx` | Configuring the .storybook folder |
| `story-layout.mdx` | Layout parameter for story positioning |
| `story-rendering.mdx` | Customizing the preview iframe rendering |
| `styling-and-css.mdx` | Styling components and loading CSS |
| `telemetry.mdx` | Telemetry data collection and opting out |
| `webpack.mdx` | Customizing the Webpack configuration |

### configure/integration/ (7 files)

| File | Description |
|------|-------------|
| `compilers.mdx` | JavaScript compilers (Babel, SWC) |
| `eslint-plugin.mdx` | Storybook ESLint plugin |
| `frameworks-feature-support.mdx` | Feature support matrix across frameworks |
| `frameworks.mdx` | Frameworks that auto-configure Storybook |
| `images-and-assets.mdx` | Handling images, fonts and static assets |
| `index.mdx` | Integration configuration index |
| `typescript.mdx` | TypeScript support and configuration |

### configure/user-interface/ (6 files)

| File | Description |
|------|-------------|
| `change-detection.mdx` | Change detection (preview) |
| `features-and-behavior.mdx` | Controlling UI layout and behavior via setConfig |
| `index.mdx` | UI configuration index |
| `sidebar-and-urls.mdx` | Sidebar organization and URLs |
| `storybook-addons.mdx` | Addons panel and toolbar configuration |
| `theming.mdx` | Theming API for Storybook UI |

### essentials/ (9 files)

| File | Description |
|------|-------------|
| `actions.mdx` | Actions addon for event handler callbacks |
| `backgrounds.mdx` | Backgrounds toolbar feature |
| `controls.mdx` | Controls addon for interactive args |
| `highlight.mdx` | Highlight feature for visual debugging |
| `index.mdx` | Essentials overview |
| `measure-and-outline.mdx` | Measure and outline CSS layout tools |
| `themes.mdx` | Themes addon for switching themes |
| `toolbars-and-globals.mdx` | Custom toolbars and globals |
| `viewport.mdx` | Viewport sizing feature |

### ./ (2 files)

| File | Description |
|------|-------------|
| `faq.mdx` | Frequently asked questions |
| `index.mdx` | Storybook documentation home |

### get-started/ (7 files)

| File | Description |
|------|-------------|
| `browse-stories.mdx` | Browsing stories in the UI |
| `conclusion.mdx` | Get started wrap-up and next steps |
| `index.mdx` | Get started index |
| `install.mdx` | Installing Storybook with the CLI |
| `setup.mdx` | Setting up a component to work on in Storybook |
| `whats-a-story.mdx` | What a story is |
| `why-storybook.mdx` | Why use Storybook |

### get-started/frameworks/ (14 files)

| File | Description |
|------|-------------|
| `angular-vite.mdx` | Angular with Vite framework |
| `angular.mdx` | Angular framework |
| `index.mdx` | Supported and community frameworks |
| `nextjs-vite.mdx` | Next.js (Vite) framework, recommended |
| `nextjs.mdx` | Next.js (Webpack/Babel) framework, deprecated |
| `preact-vite.mdx` | Preact with Vite framework |
| `react-native-web-vite.mdx` | React Native Web with Vite framework |
| `react-vite.mdx` | React with Vite framework |
| `react-webpack5.mdx` | React with Webpack 5 framework |
| `svelte-vite.mdx` | Svelte with Vite framework |
| `sveltekit.mdx` | SvelteKit framework |
| `tanstack-react.mdx` | TanStack React framework |
| `vue3-vite.mdx` | Vue 3 with Vite framework |
| `web-components-vite.mdx` | Web Components with Vite framework |

### releases/ (3 files)

| File | Description |
|------|-------------|
| `migration-guide-from-older-version.mdx` | Migrating from older Storybook versions |
| `migration-guide.mdx` | Migration guide for Storybook 11 |
| `upgrading.mdx` | Upgrading Storybook |

### sharing/ (6 files)

| File | Description |
|------|-------------|
| `design-integrations.mdx` | Design tool integrations (Figma etc.) |
| `embed.mdx` | Embedding stories in other sites |
| `index.mdx` | Sharing Storybook overview |
| `package-composition.mdx` | Package composition for design systems |
| `publish-storybook.mdx` | Publishing Storybook online |
| `storybook-composition.mdx` | Composing multiple Storybooks |

### writing-docs/ (6 files)

| File | Description |
|------|-------------|
| `autodocs.mdx` | Autodocs: auto-generated docs pages |
| `build-documentation.mdx` | Building documentation sites |
| `code-panel.mdx` | Code panel for story source |
| `doc-blocks.mdx` | Doc blocks overview |
| `index.mdx` | Writing docs overview |
| `mdx.mdx` | Writing docs in MDX |

### writing-stories/ (11 files)

| File | Description |
|------|-------------|
| `args.mdx` | Args: story inputs |
| `build-pages-with-storybook.mdx` | Building full pages in Storybook |
| `decorators.mdx` | Decorators wrapping stories |
| `index.mdx` | How to write stories |
| `loaders.mdx` | Loaders for async story data |
| `naming-components-and-hierarchy.mdx` | Naming and story hierarchy |
| `parameters.mdx` | Parameters on stories |
| `play-function.mdx` | Play functions for interactions |
| `stories-for-multiple-components.mdx` | Stories for multiple components |
| `tags.mdx` | Tags for filtering stories |
| `typescript.mdx` | Writing stories in TypeScript |

### writing-stories/csf/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | CSF 4 API reference |
| `index.mdx` | CSF 4 overview |
| `upgrade.mdx` | Upgrading to CSF 4 |

### writing-stories/mocking-data-and-modules/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Mocking overview |
| `mocking-modules.mdx` | Mocking modules |
| `mocking-network-requests.mdx` | Mocking network requests (MSW) |
| `mocking-providers.mdx` | Mocking context providers |

### writing-tests/ (7 files)

| File | Description |
|------|-------------|
| `accessibility-testing.mdx` | Accessibility testing (a11y addon) |
| `in-ci.mdx` | Running tests in CI |
| `index.mdx` | Testing overview |
| `interaction-testing.mdx` | Interaction testing |
| `snapshot-testing.mdx` | Snapshot testing |
| `test-coverage.mdx` | Test coverage |
| `visual-testing.mdx` | Visual testing |

### writing-tests/integrations/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Test integrations index |
| `stories-in-end-to-end-tests.mdx` | Using stories in end-to-end tests |
| `stories-in-unit-tests.mdx` | Using stories in unit tests |
| `test-runner.mdx` | Test runner (legacy) |

### writing-tests/integrations/vitest-addon/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Vitest addon setup and usage |
| `migration-guide.mdx` | Migrating from test-runner to Vitest addon |

### _snippets/ (685 files)

Code snippets embedded in the MDX pages via imports. Flat directory of `<topic>-<variant>.md` files (e.g. `addon-a11y-add.md`); not listed individually. Find one with `ls contents/_snippets | grep <topic>`.
