---
name: olore-tanstack-store-0.11.0
description: Local TanStack Store documentation reference (0.11.0). TanStack Store documentation. Use for framework-agnostic reactive state management, stores, derived state, effects, and React/Vue/Solid/Angular/Svelte integration.
---

# tanstack-store Documentation

TanStack Store is a framework-agnostic reactive state management library with adapters for React, Vue, Solid, Angular, Preact, and Svelte. It provides stores, atoms, derived state, and selector patterns.

## Documentation Structure

```
contents/
├── overview.md             # Library overview and concepts
├── installation.md         # Installation guide
├── quick-start.md          # Core quick-start (framework-agnostic)
├── reference/              # Core API: Store, atoms, types (21 files)
└── framework/              # Per-framework integration (42 files)
    ├── react/              # React hooks and API (8 files)
    ├── angular/            # Angular inject functions and API (8 files)
    ├── preact/             # Preact hooks and API (8 files)
    ├── solid/              # Solid primitives and API (6 files)
    ├── vue/                # Vue composables and API (5 files)
    └── svelte/             # Svelte store functions and API (5 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Overview and concepts | `contents/overview.md`, `contents/quick-start.md` |
| Installation | `contents/installation.md` |
| Core Store class | `contents/reference/classes/Store.md`, `contents/reference/functions/createStore.md` |
| Atoms and derived state | `contents/reference/functions/createAtom.md`, `contents/reference/functions/createAsyncAtom.md` |
| Batch updates | `contents/reference/functions/batch.md`, `contents/reference/functions/flush.md` |
| React integration | `contents/framework/react/quick-start.md`, `contents/framework/react/reference/functions/useSelector.md` |
| Angular integration | `contents/framework/angular/quick-start.md`, `contents/framework/angular/reference/functions/injectSelector.md` |
| Vue integration | `contents/framework/vue/quick-start.md`, `contents/framework/vue/reference/functions/useSelector.md` |
| Solid integration | `contents/framework/solid/quick-start.md`, `contents/framework/solid/reference/functions/useSelector.md` |
| Preact integration | `contents/framework/preact/quick-start.md`, `contents/framework/preact/reference/functions/useSelector.md` |
| Svelte integration | `contents/framework/svelte/quick-start.md`, `contents/framework/svelte/reference/functions/useSelector.md` |
| Store context pattern | `contents/framework/react/reference/functions/createStoreContext.md`, `contents/framework/angular/reference/functions/createStoreContext.md` |
| Type system | `contents/reference/interfaces/Atom.md`, `contents/reference/interfaces/Subscribable.md` |

## When to use

Use this skill when the user asks about:
- Creating and using TanStack Store stores or atoms
- Reactive state management with @tanstack/store
- Derived/computed state with selectors or atoms
- Batch state updates
- Integrating TanStack Store with React, Angular, Vue, Solid, Preact, or Svelte
- useStore, useSelector, useAtom hooks (React/Preact/Solid/Svelte/Vue)
- injectStore, injectSelector functions (Angular)
- Store context and dependency injection patterns
- TanStack Store API types and interfaces

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
