# zustand Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/learn/getting-started/` | Introduction, installation, and comparison | 2 |
| `contents/learn/guides/` | How-to guides and patterns | 13 |
| `contents/learn/` | Index pages | 2 |
| `contents/reference/apis/` | Core API reference (create, createStore, etc.) | 4 |
| `contents/reference/middlewares/` | Middleware reference | 6 |
| `contents/reference/hooks/` | React hook reference | 3 |
| `contents/reference/integrations/` | Integration guides | 3 |
| `contents/reference/migrations/` | Version migration guides | 2 |
| `contents/reference/previous-versions/` | Legacy API docs | 1 |

## learn/getting-started/

| File | Description |
|------|-------------|
| `introduction.md` | Overview, installation, and quick start |
| `comparison.md` | Comparison with other state management libraries |

## learn/guides/

| File | Description |
|------|-------------|
| `updating-state.md` | How to update state (primitives, objects, arrays) |
| `immutable-state-and-merging.md` | Working with immutable state and shallow merging |
| `auto-generating-selectors.md` | Auto-generating selector functions for stores |
| `prevent-rerenders-with-use-shallow.md` | Preventing re-renders using useShallow |
| `slices-pattern.md` | Composing stores with the slices pattern |
| `flux-inspired-practice.md` | Flux-inspired store architecture |
| `practice-with-no-store-actions.md` | Defining actions outside the store |
| `initialize-state-with-props.md` | Initializing state with component props |
| `ssr-and-hydration.md` | Server-side rendering and hydration |
| `nextjs.md` | Using Zustand with Next.js |
| `maps-and-sets-usage.md` | Storing Maps and Sets in state |
| `connect-to-state-with-url-hash.md` | Syncing state with URL hash |
| `how-to-reset-state.md` | Resetting store state |
| `event-handler-in-pre-react-18.md` | Event handler patterns before React 18 |
| `advanced-typescript.md` | Advanced TypeScript patterns |
| `beginner-typescript.md` | TypeScript basics with Zustand |
| `testing.md` | Testing stores |
| `tutorial-tic-tac-toe.md` | End-to-end tutorial with Tic-Tac-Toe |

## reference/apis/

| File | Description |
|------|-------------|
| `create.md` | `create` — creates a React hook-based store |
| `create-store.md` | `createStore` — creates a vanilla (non-React) store |
| `create-with-equality-fn.md` | `createWithEqualityFn` — store with custom equality check |
| `shallow.md` | `shallow` — performs shallow equality comparison |

## reference/middlewares/

| File | Description |
|------|-------------|
| `persist.md` | `persist` — persists store state across reloads |
| `devtools.md` | `devtools` — integrates with Redux DevTools |
| `redux.md` | `redux` — Redux-style reducers and actions |
| `immer.md` | `immer` — immutable updates via Immer |
| `combine.md` | `combine` — merges initial state with creator function |
| `subscribe-with-selector.md` | `subscribeWithSelector` — subscribe to specific state slices |

## reference/hooks/

| File | Description |
|------|-------------|
| `use-store.md` | `useStore` — use a vanilla store in React |
| `use-store-with-equality-fn.md` | `useStoreWithEqualityFn` — vanilla store with custom equality |
| `use-shallow.md` | `useShallow` — memoized selector to prevent re-renders |

## reference/integrations/

| File | Description |
|------|-------------|
| `persisting-store-data.md` | Persisting store data with localStorage, AsyncStorage, etc. |
| `immer-middleware.md` | Using Immer middleware for immutable state updates |
| `third-party-libraries.md` | Integrating with third-party libraries |

## reference/migrations/

| File | Description |
|------|-------------|
| `migrating-to-v5.md` | Migration guide to Zustand v5 |
| `migrating-to-v4.md` | Migration guide to Zustand v4 |

## reference/previous-versions/

| File | Description |
|------|-------------|
| `zustand-v3-create-context.md` | Legacy `createContext` API from Zustand v3 |
