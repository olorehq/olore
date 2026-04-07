# bUnit Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/getting-started/` | Project setup and writing first tests | 3 |
| `contents/providing-input/` | Passing parameters, services, and component config | 6 |
| `contents/interaction/` | Triggering events, renders, and async state | 6 |
| `contents/verification/` | Asserting markup, component state, and async | 5 |
| `contents/test-doubles/` | Mocking Blazor built-in services | 8 |
| `contents/extensions/` | bUnit extension packages | 2 |
| `contents/migrations/` | Upgrade guides between versions | 2 |
| `contents/` (root) | Miscellaneous tips and external resources | 4 |

## getting-started/

| File | Description |
|------|-------------|
| `index.md` | Overview of getting started topics |
| `create-test-project.md` | How to set up a bUnit test project |
| `writing-tests.md` | Basics of writing Blazor component tests |

## providing-input/

| File | Description |
|------|-------------|
| `index.md` | Overview of ways to provide input to components |
| `passing-parameters-to-components.md` | Passing parameters and cascading values |
| `inject-services-into-components.md` | Registering and injecting services |
| `root-render-tree.md` | Controlling the root render tree |
| `substituting-components.md` | Substituting (mocking) child components |
| `configure-3rd-party-libs.md` | Configuring third-party library integrations |
| `controlling-component-instantiation.md` | Controlling how components are created |

## interaction/

| File | Description |
|------|-------------|
| `index.md` | Overview of interaction with rendered components |
| `trigger-event-handlers.md` | Triggering DOM event handlers |
| `trigger-renders.md` | Manually triggering re-renders |
| `awaiting-async-state.md` | Waiting for async state changes |
| `render-modes.md` | Testing components with different render modes |
| `dispose-components.md` | Disposing components under test |

## verification/

| File | Description |
|------|-------------|
| `index.md` | Overview of verification approaches |
| `verify-markup.md` | Assertions against rendered HTML markup |
| `verify-component-state.md` | Inspecting component instance state |
| `semantic-html-comparison.md` | Customizing the semantic HTML comparer |
| `async-assertion.md` | Writing stable assertions in async scenarios |

## test-doubles/

| File | Description |
|------|-------------|
| `index.md` | Overview of bUnit's built-in test doubles |
| `emulating-ijsruntime.md` | Faking IJSRuntime / JSInterop |
| `auth.md` | Faking authentication and authorization |
| `navigation-manager.md` | Faking NavigationManager |
| `mocking-httpclient.md` | Mocking HttpClient |
| `mocking-localizer.md` | Mocking IStringLocalizer |
| `input-file.md` | Faking InputFile component |
| `fake-webassemblyhostenvironment.md` | Faking IWebAssemblyHostEnvironment |
| `persistentcomponentstate.md` | Faking PersistentComponentState |

## extensions/

| File | Description |
|------|-------------|
| `index.md` | Overview of bUnit extension packages |
| `bunit-generators.md` | bUnit.Generators source generator package |

## migrations/

| File | Description |
|------|-------------|
| `index.md` | Migration guides overview |
| `1to2.md` | Migrating from bUnit 1.x to 2.x |

## Root files

| File | Description |
|------|-------------|
| `misc-test-tips.md` | Miscellaneous testing tips and patterns |
| `external-resources.md` | External blog posts, videos, and community resources |
