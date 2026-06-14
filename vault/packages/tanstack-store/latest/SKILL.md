---
name: olore-tanstack-store-latest
description: Local tanstack-store documentation reference (latest). TanStack Store documentation. Use for framework-agnostic reactive state management, stores, derived state, effects, and React/Vue/Solid/Angular/Svelte integration.
---

# tanstack-store Documentation

TanStack Store is a framework-agnostic reactive state management library. It provides stores, atoms, derived state (selectors), batched updates, and first-class framework adapters for React, Angular, Vue, SolidJS, Svelte, Preact, and Lit.

## Documentation Structure

```
contents/
├── overview.md           # Concepts and introduction
├── installation.md       # Install instructions
├── quick-start.md        # Core quick-start (framework-agnostic)
├── reference/            # Core API reference (25 files)
│   ├── classes/          # Store, ReadonlyStore
│   ├── functions/        # createStore, createAtom, batch, flush, shallow, toObserver, createAsyncAtom
│   ├── interfaces/       # Atom, AtomOptions, BaseAtom, Readable, Subscribable, etc.
│   └── type-aliases/     # AnyAtom, Observer, Selection, StoreAction, etc.
└── framework/
    ├── react/            # React hooks and context (9 files)
    ├── angular/          # Angular inject functions and signals (9 files)
    ├── preact/           # Preact hooks and context (9 files)
    ├── solid/            # SolidJS hooks and context (7 files)
    ├── svelte/           # Svelte hooks (6 files)
    ├── vue/              # Vue hooks (6 files)
    └── lit/              # Lit quick-start (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / concepts | `contents/overview.md`, `contents/quick-start.md`, `contents/installation.md` |
| Creating and using a Store | `contents/reference/functions/createStore.md`, `contents/reference/classes/Store.md` |
| Atoms (writable/read-only state) | `contents/reference/functions/createAtom.md`, `contents/reference/functions/createAsyncAtom.md`, `contents/reference/interfaces/Atom.md` |
| Derived/selected state | `contents/reference/functions/shallow.md`, `contents/reference/type-aliases/Selection.md` |
| Batching and flushing updates | `contents/reference/functions/batch.md`, `contents/reference/functions/flush.md` |
| Observable interop | `contents/reference/functions/toObserver.md`, `contents/reference/interfaces/InteropSubscribable.md` |
| React integration | `contents/framework/react/quick-start.md`, `contents/framework/react/reference/functions/useStore.md`, `contents/framework/react/reference/functions/useSelector.md`, `contents/framework/react/reference/functions/useAtom.md` |
| React context / scoped stores | `contents/framework/react/reference/functions/createStoreContext.md`, `contents/framework/react/reference/functions/useCreateStore.md` |
| Angular integration | `contents/framework/angular/quick-start.md`, `contents/framework/angular/reference/functions/injectStore.md`, `contents/framework/angular/reference/functions/injectSelector.md` |
| Angular signals | `contents/framework/angular/reference/interfaces/WritableAtomSignal.md`, `contents/framework/angular/reference/type-aliases/SelectionSource.md` |
| Vue integration | `contents/framework/vue/quick-start.md`, `contents/framework/vue/reference/functions/useStore.md`, `contents/framework/vue/reference/functions/useSelector.md` |
| SolidJS integration | `contents/framework/solid/quick-start.md`, `contents/framework/solid/reference/functions/useStore.md`, `contents/framework/solid/reference/functions/useSelector.md` |
| Svelte integration | `contents/framework/svelte/quick-start.md`, `contents/framework/svelte/reference/functions/useStore.md`, `contents/framework/svelte/reference/functions/useSelector.md` |
| Preact integration | `contents/framework/preact/quick-start.md`, `contents/framework/preact/reference/functions/useStore.md`, `contents/framework/preact/reference/functions/useSelector.md` |
| Lit integration | `contents/framework/lit/quick-start.md` |

## When to use

Use this skill when the user asks about:
- Setting up or using TanStack Store (@tanstack/store)
- Creating stores, atoms, and derived/selected state
- Batching updates or flushing pending state changes
- Integrating TanStack Store with React, Angular, Vue, SolidJS, Svelte, Preact, or Lit
- useStore, useSelector, useAtom, injectStore, injectSelector hooks/functions
- Store context, scoped stores, or cross-component state sharing with TanStack Store
- Reactive state management patterns with TanStack Store

## How to find information

1. Use the Topic Guide above to identify relevant files
2. Read `TOC.md` for the complete file listing by directory
3. Read specific files from `contents/{path}`
