# tanstack-store Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Overview, installation, and core quick-start | 3 |
| `contents/reference/` | Core API: Store, atoms, types, and utilities | 21 |
| `contents/framework/react/` | React integration quick-start and API | 8 |
| `contents/framework/angular/` | Angular integration quick-start and API | 8 |
| `contents/framework/vue/` | Vue integration quick-start and API | 5 |
| `contents/framework/solid/` | Solid integration quick-start and API | 6 |
| `contents/framework/preact/` | Preact integration quick-start and API | 8 |
| `contents/framework/svelte/` | Svelte integration quick-start and API | 5 |

## contents/ (root)

| File | Description |
|------|-------------|
| `overview.md` | Library overview — reactive state management concepts |
| `installation.md` | How to install @tanstack/store and framework adapters |
| `quick-start.md` | Framework-agnostic quick-start guide |

## reference/ (core API)

### Classes

| File | Description |
|------|-------------|
| `reference/classes/Store.md` | `Store` class — mutable reactive store |
| `reference/classes/ReadonlyStore.md` | `ReadonlyStore` class — read-only derived store |

### Functions

| File | Description |
|------|-------------|
| `reference/functions/createStore.md` | `createStore()` — factory function for Store |
| `reference/functions/createAtom.md` | `createAtom()` — create a reactive atom |
| `reference/functions/createAsyncAtom.md` | `createAsyncAtom()` — create an async derived atom |
| `reference/functions/batch.md` | `batch()` — batch multiple state updates |
| `reference/functions/flush.md` | `flush()` — immediately flush pending updates |
| `reference/functions/shallow.md` | `shallow()` — shallow equality comparator |
| `reference/functions/toObserver.md` | `toObserver()` — convert store to observable |

### Interfaces

| File | Description |
|------|-------------|
| `reference/interfaces/Atom.md` | `Atom` interface |
| `reference/interfaces/AtomOptions.md` | `AtomOptions` interface |
| `reference/interfaces/BaseAtom.md` | `BaseAtom` interface |
| `reference/interfaces/ReadonlyAtom.md` | `ReadonlyAtom` interface |
| `reference/interfaces/Readable.md` | `Readable` interface |
| `reference/interfaces/Subscribable.md` | `Subscribable` interface |
| `reference/interfaces/InteropSubscribable.md` | `InteropSubscribable` interface |
| `reference/interfaces/Subscription.md` | `Subscription` type |

### Type Aliases

| File | Description |
|------|-------------|
| `reference/type-aliases/AnyAtom.md` | `AnyAtom` type alias |
| `reference/type-aliases/Observer.md` | `Observer` type alias |
| `reference/type-aliases/Selection.md` | `Selection` type alias |
| `reference/type-aliases/StoreAction.md` | `StoreAction` type alias |
| `reference/type-aliases/StoreActionMap.md` | `StoreActionMap` type alias |
| `reference/type-aliases/StoreActionsFactory.md` | `StoreActionsFactory` type alias |

## framework/react/

| File | Description |
|------|-------------|
| `framework/react/quick-start.md` | React integration quick-start |
| `framework/react/reference/functions/useStore.md` | `useStore()` hook |
| `framework/react/reference/functions/useSelector.md` | `useSelector()` hook |
| `framework/react/reference/functions/useAtom.md` | `useAtom()` hook |
| `framework/react/reference/functions/useCreateAtom.md` | `useCreateAtom()` hook |
| `framework/react/reference/functions/useCreateStore.md` | `useCreateStore()` hook |
| `framework/react/reference/functions/createStoreContext.md` | `createStoreContext()` factory |
| `framework/react/reference/interfaces/UseSelectorOptions.md` | `UseSelectorOptions` interface |

## framework/angular/

| File | Description |
|------|-------------|
| `framework/angular/quick-start.md` | Angular integration quick-start |
| `framework/angular/reference/functions/injectStore.md` | `injectStore()` injection function |
| `framework/angular/reference/functions/injectSelector.md` | `injectSelector()` injection function |
| `framework/angular/reference/functions/injectAtom.md` | `injectAtom()` injection function |
| `framework/angular/reference/functions/createStoreContext.md` | `createStoreContext()` factory |
| `framework/angular/reference/interfaces/InjectSelectorOptions.md` | `InjectSelectorOptions` interface |
| `framework/angular/reference/interfaces/WritableAtomSignal.md` | `WritableAtomSignal` interface |
| `framework/angular/reference/type-aliases/SelectionSource.md` | `SelectionSource` type alias |

## framework/vue/

| File | Description |
|------|-------------|
| `framework/vue/quick-start.md` | Vue integration quick-start |
| `framework/vue/reference/functions/useStore.md` | `useStore()` composable |
| `framework/vue/reference/functions/useSelector.md` | `useSelector()` composable |
| `framework/vue/reference/functions/useAtom.md` | `useAtom()` composable |
| `framework/vue/reference/interfaces/UseSelectorOptions.md` | `UseSelectorOptions` interface |

## framework/solid/

| File | Description |
|------|-------------|
| `framework/solid/quick-start.md` | Solid integration quick-start |
| `framework/solid/reference/functions/useStore.md` | `useStore()` primitive |
| `framework/solid/reference/functions/useSelector.md` | `useSelector()` primitive |
| `framework/solid/reference/functions/useAtom.md` | `useAtom()` primitive |
| `framework/solid/reference/functions/createStoreContext.md` | `createStoreContext()` factory |
| `framework/solid/reference/interfaces/UseSelectorOptions.md` | `UseSelectorOptions` interface |

## framework/preact/

| File | Description |
|------|-------------|
| `framework/preact/quick-start.md` | Preact integration quick-start |
| `framework/preact/reference/functions/useStore.md` | `useStore()` hook |
| `framework/preact/reference/functions/useSelector.md` | `useSelector()` hook |
| `framework/preact/reference/functions/useAtom.md` | `useAtom()` hook |
| `framework/preact/reference/functions/useCreateAtom.md` | `useCreateAtom()` hook |
| `framework/preact/reference/functions/useCreateStore.md` | `useCreateStore()` hook |
| `framework/preact/reference/functions/createStoreContext.md` | `createStoreContext()` factory |
| `framework/preact/reference/interfaces/UseSelectorOptions.md` | `UseSelectorOptions` interface |

## framework/svelte/

| File | Description |
|------|-------------|
| `framework/svelte/quick-start.md` | Svelte integration quick-start |
| `framework/svelte/reference/functions/useStore.md` | `useStore()` store function |
| `framework/svelte/reference/functions/useSelector.md` | `useSelector()` store function |
| `framework/svelte/reference/functions/useAtom.md` | `useAtom()` store function |
| `framework/svelte/reference/interfaces/UseSelectorOptions.md` | `UseSelectorOptions` interface |
