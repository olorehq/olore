# tanstack-store Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` (root) | Overview, installation, and quick-start | 3 |
| `contents/reference/` | Core API reference (classes, functions, interfaces, types) | 25 |
| `contents/framework/react/` | React integration quick-start and hooks reference | 9 |
| `contents/framework/angular/` | Angular integration quick-start and inject functions reference | 9 |
| `contents/framework/preact/` | Preact integration quick-start and hooks reference | 9 |
| `contents/framework/solid/` | Solid integration quick-start and hooks reference | 7 |
| `contents/framework/svelte/` | Svelte integration quick-start and hooks reference | 6 |
| `contents/framework/vue/` | Vue integration quick-start and hooks reference | 6 |
| `contents/framework/lit/` | Lit integration quick-start | 1 |

## Root

| File | Description |
|------|-------------|
| `overview.md` | Introduction to TanStack Store — reactive state management concepts |
| `installation.md` | How to install @tanstack/store and framework adapters |
| `quick-start.md` | Core quick-start guide (framework-agnostic) |

## reference/

| File | Description |
|------|-------------|
| `classes/Store.md` | Store class — reactive state container with subscribers |
| `classes/ReadonlyStore.md` | ReadonlyStore class — derived read-only state |
| `functions/createStore.md` | createStore() function — factory for creating a Store |
| `functions/createAtom.md` | createAtom() function — create a writable atom |
| `functions/createAsyncAtom.md` | createAsyncAtom() function — create an async atom with derived state |
| `functions/batch.md` | batch() — batch multiple state updates into one notification |
| `functions/flush.md` | flush() — synchronously flush pending updates |
| `functions/shallow.md` | shallow() — shallow equality comparison helper |
| `functions/toObserver.md` | toObserver() — convert a store to an Observable |
| `interfaces/Atom.md` | Atom interface — writable atom contract |
| `interfaces/AtomOptions.md` | AtomOptions interface — options for createAtom() |
| `interfaces/BaseAtom.md` | BaseAtom interface — base atom contract |
| `interfaces/InternalBaseAtom.md` | InternalBaseAtom interface — internal base atom properties |
| `interfaces/InternalReadonlyAtom.md` | InternalReadonlyAtom interface — internal read-only atom properties |
| `interfaces/InteropSubscribable.md` | InteropSubscribable interface — interop with other reactive systems |
| `interfaces/Readable.md` | Readable interface — readable state contract |
| `interfaces/ReadonlyAtom.md` | ReadonlyAtom interface — read-only atom contract |
| `interfaces/Subscribable.md` | Subscribable interface — subscription contract |
| `interfaces/Subscription.md` | Subscription interface — subscription handle |
| `type-aliases/AnyAtom.md` | AnyAtom type alias |
| `type-aliases/Observer.md` | Observer type alias |
| `type-aliases/Selection.md` | Selection type alias |
| `type-aliases/StoreAction.md` | StoreAction type alias — action type for stores with action maps |
| `type-aliases/StoreActionMap.md` | StoreActionMap type alias |
| `type-aliases/StoreActionsFactory.md` | StoreActionsFactory type alias |

## framework/react/

| File | Description |
|------|-------------|
| `quick-start.md` | React integration quick-start guide |
| `reference/functions/useStore.md` | useStore() hook — subscribe a component to a store |
| `reference/functions/useSelector.md` | useSelector() hook — select derived state from a store |
| `reference/functions/useAtom.md` | useAtom() hook — bind an atom to a React component |
| `reference/functions/useCreateStore.md` | useCreateStore() hook — create a store scoped to component lifetime |
| `reference/functions/useCreateAtom.md` | useCreateAtom() hook — create an atom scoped to component lifetime |
| `reference/functions/createStoreContext.md` | createStoreContext() — create a React context for a store |
| `reference/functions/useStore-1.md` | useStore() (deprecated) — deprecated alias for useSelector |
| `reference/interfaces/UseSelectorOptions.md` | UseSelectorOptions interface |

## framework/angular/

| File | Description |
|------|-------------|
| `quick-start.md` | Angular integration quick-start guide |
| `reference/functions/injectStore.md` | injectStore() — inject a store into an Angular component |
| `reference/functions/injectSelector.md` | injectSelector() — inject derived state from a store |
| `reference/functions/injectAtom.md` | injectAtom() — inject an atom into an Angular component |
| `reference/functions/createStoreContext.md` | createStoreContext() — create a DI context for a store |
| `reference/functions/injectStore-1.md` | injectStore() (deprecated) — deprecated alias for injectSelector |
| `reference/interfaces/InjectSelectorOptions.md` | InjectSelectorOptions interface |
| `reference/interfaces/WritableAtomSignal.md` | WritableAtomSignal interface — Angular signal wrapping a writable atom |
| `reference/type-aliases/SelectionSource.md` | SelectionSource type alias |

## framework/preact/

| File | Description |
|------|-------------|
| `quick-start.md` | Preact integration quick-start guide |
| `reference/functions/useStore.md` | useStore() hook for Preact |
| `reference/functions/useSelector.md` | useSelector() hook for Preact |
| `reference/functions/useAtom.md` | useAtom() hook for Preact |
| `reference/functions/useCreateStore.md` | useCreateStore() hook for Preact |
| `reference/functions/useCreateAtom.md` | useCreateAtom() hook for Preact |
| `reference/functions/createStoreContext.md` | createStoreContext() for Preact |
| `reference/functions/useStore-1.md` | useStore() (deprecated) for Preact |
| `reference/interfaces/UseSelectorOptions.md` | UseSelectorOptions interface for Preact |

## framework/solid/

| File | Description |
|------|-------------|
| `quick-start.md` | SolidJS integration quick-start guide |
| `reference/functions/useStore.md` | useStore() for SolidJS |
| `reference/functions/useSelector.md` | useSelector() for SolidJS |
| `reference/functions/useAtom.md` | useAtom() for SolidJS |
| `reference/functions/createStoreContext.md` | createStoreContext() for SolidJS |
| `reference/functions/useStore-1.md` | useStore() (deprecated) for SolidJS |
| `reference/interfaces/UseSelectorOptions.md` | UseSelectorOptions interface for SolidJS |

## framework/svelte/

| File | Description |
|------|-------------|
| `quick-start.md` | Svelte integration quick-start guide |
| `reference/functions/useStore.md` | useStore() for Svelte |
| `reference/functions/useSelector.md` | useSelector() for Svelte |
| `reference/functions/useAtom.md` | useAtom() for Svelte |
| `reference/functions/useStore-1.md` | useStore() (deprecated) for Svelte |
| `reference/interfaces/UseSelectorOptions.md` | UseSelectorOptions interface for Svelte |

## framework/vue/

| File | Description |
|------|-------------|
| `quick-start.md` | Vue integration quick-start guide |
| `reference/functions/useStore.md` | useStore() for Vue |
| `reference/functions/useSelector.md` | useSelector() for Vue |
| `reference/functions/useAtom.md` | useAtom() for Vue |
| `reference/functions/useStore-1.md` | useStore() (deprecated) for Vue |
| `reference/interfaces/UseSelectorOptions.md` | UseSelectorOptions interface for Vue |

## framework/lit/

| File | Description |
|------|-------------|
| `quick-start.md` | Lit integration quick-start guide |
