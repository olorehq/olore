---
name: olore-tanstack-store-0.11.2
description: Local TanStack Store documentation reference (0.11.2). TanStack Store documentation. Use for framework-agnostic reactive state management, stores, derived state, effects, and React/Vue/Solid/Angular/Svelte integration.
---

# tanstack-store Documentation

TanStack Store is a framework-agnostic reactive state management library with adapters for React, Vue, Solid, Angular, Preact, Svelte, Lit, and Octane. It provides stores, atoms, derived state, and selector patterns.

## Documentation Structure

```
contents/
├── overview.md             # Library overview and concepts
├── installation.md         # Installation guide
├── quick-start.md          # Core quick-start (framework-agnostic)
├── reference/              # Core API: Store, atoms, types
└── framework/              # Per-framework integration
    ├── react/ angular/ preact/ solid/ vue/ svelte/
    └── lit/ octane/
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Overview and concepts | `contents/overview.md`, `contents/quick-start.md` |
| Installation | `contents/installation.md` |
| Core Store class | `contents/reference/classes/Store.md`, `contents/reference/functions/createStore.md` |
| Atoms and derived state | `contents/reference/functions/createAtom.md`, `contents/reference/functions/createAsyncAtom.md` |
| Batch updates | `contents/reference/functions/batch.md`, `contents/reference/functions/flush.md` |
| React | `contents/framework/react/quick-start.md`, `contents/framework/react/reference/functions/useSelector.md` |
| Angular | `contents/framework/angular/quick-start.md`, `contents/framework/angular/reference/functions/injectSelector.md` |
| Vue | `contents/framework/vue/quick-start.md` |
| Solid | `contents/framework/solid/quick-start.md` |
| Preact | `contents/framework/preact/quick-start.md` |
| Svelte | `contents/framework/svelte/quick-start.md` |
| Lit | `contents/framework/lit/quick-start.md` |
| Octane | `contents/framework/octane/quick-start.md` |
| Types | `contents/reference/interfaces/Atom.md`, `contents/reference/interfaces/Subscribable.md` |

## When to use

Use this skill when the user asks about:
- Creating and using TanStack Store stores or atoms
- Derived/computed state, selectors, batch updates
- Integrating @tanstack/store with React, Angular, Vue, Solid, Preact, Svelte, Lit, or Octane
- useStore, useSelector, useAtom, injectStore, createStoreContext
- TanStack Store API types and interfaces

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
