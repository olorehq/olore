---
name: olore-bunit-latest
description: Local bunit documentation reference (latest). bUnit Blazor testing documentation. Use for Blazor component testing, rendering, event handling, JSInterop mocking, and test assertions in .NET.
---

# bunit Documentation

bUnit is a testing library for Blazor components. It lets you render Blazor components in unit tests, pass parameters, inject services, trigger events, and assert on rendered markup and component state. It integrates with xUnit, NUnit, and MSTest, and supports writing tests in both `.cs` and `.razor` files.

## Documentation Structure

```
contents/
├── getting-started/    # Project setup, templates, writing first tests (3 files)
├── providing-input/    # Parameters, services, render tree, component substitution (8 files)
├── interaction/        # Triggering events, renders, async state, render modes (6 files)
├── verification/       # Markup assertions, component state, semantic comparison (5 files)
├── test-doubles/       # Built-in fakes: JSRuntime, HttpClient, auth, navigation (9 files)
├── extensions/         # Optional NuGet extensions like bunit.generators (2 files)
└── migrations/         # Migration guides across major versions (2 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Setting up a test project | `contents/getting-started/create-test-project.md` |
| Writing first Blazor component tests | `contents/getting-started/writing-tests.md` |
| Passing parameters and cascading values | `contents/providing-input/passing-parameters-to-components.md` |
| Injecting services | `contents/providing-input/inject-services-into-components.md` |
| Substituting / mocking child components | `contents/providing-input/substituting-components.md` |
| Third-party library setup | `contents/providing-input/configure-3rd-party-libs.md` |
| Triggering event handlers | `contents/interaction/trigger-event-handlers.md` |
| Awaiting async state changes | `contents/interaction/awaiting-async-state.md` |
| Render modes (SSR, WASM, Server) | `contents/interaction/render-modes.md` |
| Asserting rendered markup | `contents/verification/verify-markup.md` |
| Inspecting component state | `contents/verification/verify-component-state.md` |
| Semantic HTML comparison | `contents/verification/semantic-html-comparison.md` |
| Async assertions | `contents/verification/async-assertion.md` |
| Mocking IJSRuntime / JSInterop | `contents/test-doubles/emulating-ijsruntime.md` |
| Mocking HttpClient | `contents/test-doubles/mocking-httpclient.md` |
| Faking authentication/authorization | `contents/test-doubles/auth.md` |
| Faking NavigationManager | `contents/test-doubles/navigation-manager.md` |
| Faking PersistentComponentState | `contents/test-doubles/persistentcomponentstate.md` |
| Faking IWebAssemblyHostEnvironment | `contents/test-doubles/fake-webassemblyhostenvironment.md` |
| InputFile component testing | `contents/test-doubles/input-file.md` |
| Localization mocking | `contents/test-doubles/mocking-localizer.md` |
| Source generators for component stubs | `contents/extensions/bunit-generators.md` |
| Migrating from v1 to v2 | `contents/migrations/1to2.md` |
| Misc testing tips and patterns | `contents/misc-test-tips.md` |

## When to use

Use this skill when the user asks about:
- Writing unit tests for Blazor components in .NET
- Setting up a bUnit test project with xUnit, NUnit, or MSTest
- Rendering components and asserting on HTML markup output
- Passing parameters, child content, or cascading values in tests
- Injecting or mocking services (HttpClient, IJSRuntime, NavigationManager, etc.)
- Triggering click, change, and other DOM event handlers in tests
- Awaiting async state changes or handling asynchronous component behavior
- Substituting/stubbing child Blazor components
- Working with Blazor render modes (SSR, WebAssembly, Server) in tests
- Semantic HTML comparison and stable markup assertions
- PersistentComponentState, authentication, or localization faking

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
