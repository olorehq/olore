# bunit Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/getting-started/` | Project setup, template usage, and writing first tests | 3 |
| `contents/providing-input/` | Passing parameters, injecting services, configuring root render tree | 7 |
| `contents/interaction/` | Triggering events, renders, async state, render modes | 6 |
| `contents/verification/` | Asserting markup, component state, semantic HTML comparison | 5 |
| `contents/test-doubles/` | Built-in fakes for IJSRuntime, HttpClient, auth, navigation, etc. | 9 |
| `contents/extensions/` | Optional NuGet extension packages (e.g. bunit.generators) | 2 |
| `contents/migrations/` | Migration guides across major versions | 2 |
| `contents/` (root) | Top-level: TOC, misc tips, external resources, contribute, code of conduct | 6 |

## getting-started/

| File | Description |
|------|-------------|
| `index.md` | Overview of the getting-started section and learning path |
| `create-test-project.md` | Creating a bUnit test project via template or manually |
| `writing-tests.md` | Fundamentals of writing Blazor component tests in .cs and .razor files |

## providing-input/

| File | Description |
|------|-------------|
| `index.md` | Overview of input options for a component under test |
| `passing-parameters-to-components.md` | Passing regular parameters, child content, cascading values, event callbacks |
| `inject-services-into-components.md` | Injecting services into components under test |
| `root-render-tree.md` | Modifying the root render tree for component tests |
| `substituting-components.md` | Stubbing/mocking child components |
| `configure-3rd-party-libs.md` | Setting up third-party libraries in bUnit tests |
| `seeding-assets.md` | Seeding static assets for tests |
| `controlling-component-instantiation.md` | Controlling how components are instantiated |

## interaction/

| File | Description |
|------|-------------|
| `index.md` | Overview of interacting with components under test |
| `trigger-event-handlers.md` | Invoking event handlers bound to rendered elements |
| `trigger-renders.md` | Manually triggering render cycles |
| `awaiting-async-state.md` | Awaiting asynchronous state changes before assertions |
| `dispose-components.md` | Disposing components and their children |
| `render-modes.md` | Blazor render modes and their interaction with bUnit |

## verification/

| File | Description |
|------|-------------|
| `index.md` | Overview of verification approaches |
| `verify-markup.md` | Asserting and inspecting rendered HTML markup |
| `verify-component-state.md` | Inspecting the component instance and its state |
| `semantic-html-comparison.md` | Customizing the semantic HTML comparer for stable tests |
| `async-assertion.md` | Writing stable assertions in asynchronous tests |

## test-doubles/

| File | Description |
|------|-------------|
| `index.md` | Overview of bUnit's built-in test doubles/fakes |
| `emulating-ijsruntime.md` | Faking IJSRuntime / JSInterop calls |
| `mocking-httpclient.md` | Mocking HttpClient in component tests |
| `auth.md` | Faking authentication and authorization state |
| `navigation-manager.md` | Faking NavigationManager |
| `persistentcomponentstate.md` | Faking PersistentComponentState |
| `fake-webassemblyhostenvironment.md` | Faking IWebAssemblyHostEnvironment |
| `input-file.md` | Faking InputFile component interactions |
| `mocking-localizer.md` | Mocking IStringLocalizer for localization |

## extensions/

| File | Description |
|------|-------------|
| `index.md` | Overview of available bUnit extension packages |
| `bunit-generators.md` | bunit.generators source generator for component stubs |

## migrations/

| File | Description |
|------|-------------|
| `index.md` | Overview of migration guides |
| `1to2.md` | Migration guide from bUnit v1 to v2 |

## Root files

| File | Description |
|------|-------------|
| `toc.md` | Site table of contents (xref-based navigation) |
| `misc-test-tips.md` | Miscellaneous testing tips and patterns |
| `external-resources.md` | Links to external bUnit resources and community content |
| `contribute.md` | How to contribute to bUnit |
| `code-of-conduct.md` | Community code of conduct |
