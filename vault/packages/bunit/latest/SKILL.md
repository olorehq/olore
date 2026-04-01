---
name: olore-bunit-latest
description: Local bUnit documentation reference (latest). bUnit is a testing library for Blazor components. Use for Blazor component testing, rendering, event handling, JSInterop mocking, and test assertions in .NET.
---

# bUnit Documentation

bUnit is a testing library for Blazor components. It makes it easy to write comprehensive unit tests for Blazor components by providing helpers for rendering components, triggering events, asserting markup output, and mocking Blazor's built-in services.

## Documentation Structure

```
contents/
├── getting-started/     # Project setup and writing first tests (3 files)
├── providing-input/     # Parameters, services, and component configuration (7 files)
├── interaction/         # Triggering events, renders, and async state (6 files)
├── verification/        # Asserting markup, state, and async results (5 files)
├── test-doubles/        # Mocking Blazor built-in services (9 files)
├── extensions/          # bUnit extension packages (2 files)
└── migrations/          # Upgrade guides between versions (2 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / setup | `contents/getting-started/create-test-project.md`, `contents/getting-started/writing-tests.md` |
| Passing parameters to components | `contents/providing-input/passing-parameters-to-components.md` |
| Injecting services | `contents/providing-input/inject-services-into-components.md` |
| Substituting / mocking child components | `contents/providing-input/substituting-components.md` |
| Triggering events | `contents/interaction/trigger-event-handlers.md` |
| Async state and waiting | `contents/interaction/awaiting-async-state.md` |
| Asserting rendered markup | `contents/verification/verify-markup.md` |
| Semantic HTML comparison | `contents/verification/semantic-html-comparison.md` |
| Async assertions | `contents/verification/async-assertion.md` |
| Mocking JSInterop (IJSRuntime) | `contents/test-doubles/emulating-ijsruntime.md` |
| Faking authentication | `contents/test-doubles/auth.md` |
| Mocking NavigationManager | `contents/test-doubles/navigation-manager.md` |
| Mocking HttpClient | `contents/test-doubles/mocking-httpclient.md` |
| Render modes | `contents/interaction/render-modes.md` |
| Migrating from 1.x to 2.x | `contents/migrations/1to2.md` |

## When to use

Use this skill when the user asks about:
- Writing unit tests for Blazor components
- Rendering Blazor components in tests
- Asserting against component HTML output
- Mocking JSInterop, HttpClient, NavigationManager, or other Blazor services
- Passing parameters or injecting services in component tests
- Triggering DOM events or re-renders in tests
- Async testing patterns in Blazor
- Setting up a bUnit test project

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
