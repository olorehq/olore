# zustand Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/learn/getting-started/` | Introduction and comparison with other libraries | 2 |
| `contents/learn/guides/` | How-to guides and patterns | 15 |
| `contents/reference/apis/` | Core API reference (create, createStore, shallow) | 4 |
| `contents/reference/hooks/` | React hook reference | 3 |
| `contents/reference/integrations/` | Third-party integrations and persistence | 3 |
| `contents/reference/middlewares/` | Middleware reference (persist, devtools, immer, etc.) | 6 |
| `contents/reference/migrations/` | Migration guides (v4, v5) | 2 |
| `contents/reference/previous-versions/` | Docs for older APIs | 1 |

## learn/getting-started/

| File | Description |
|------|-------------|
| `introduction.md` | How to install and use Zustand; first-store tutorial |
| `comparison.md` | How Zustand compares to Redux, Valtio, Jotai, and Recoil |

## learn/guides/

| File | Description |
|------|-------------|
| `tutorial-tic-tac-toe.md` | Step-by-step tutorial building a tic-tac-toe game |
| `updating-state.md` | How to update primitive values, objects, and nested state |
| `immutable-state-and-merging.md` | Using immutable patterns and Zustand's merge behavior |
| `practice-with-no-store-actions.md` | Defining actions outside the store |
| `slices-pattern.md` | Splitting a large store into composable slices |
| `auto-generating-selectors.md` | Automatically creating selectors for store state |
| `prevent-rerenders-with-use-shallow.md` | Using useShallow to avoid unnecessary re-renders |
| `flux-inspired-practice.md` | Flux-style patterns with Zustand |
| `how-to-reset-state.md` | Resetting store state to initial values |
| `initialize-state-with-props.md` | Initializing store state from component props |
| `maps-and-sets-usage.md` | Working with Maps and Sets in Zustand stores |
| `connect-to-state-with-url-hash.md` | Syncing store state with URL hash |
| `nextjs.md` | Using Zustand with Next.js (SSR, hydration) |
| `ssr-and-hydration.md` | Server-side rendering and hydration patterns |
| `event-handler-in-pre-react-18.md` | Event handler behavior in React versions before 18 |
| `advanced-typescript.md` | Advanced TypeScript patterns for Zustand |
| `beginner-typescript.md` | Getting started with TypeScript in Zustand |
| `testing.md` | How to test Zustand stores |

## learn/

| File | Description |
|------|-------------|
| `index.md` | Guided overview of the learning path |

## reference/apis/

| File | Description |
|------|-------------|
| `create.md` | `create` — create a React hook-based store |
| `create-store.md` | `createStore` — create a standalone (non-React) store |
| `create-with-equality-fn.md` | `createWithEqualityFn` — create with custom equality function |
| `shallow.md` | `shallow` — shallow equality utility for selectors |

## reference/hooks/

| File | Description |
|------|-------------|
| `use-store.md` | `useStore` — subscribe to a vanilla store from React |
| `use-store-with-equality-fn.md` | `useStoreWithEqualityFn` — subscribe with custom equality |
| `use-shallow.md` | `useShallow` — hook for shallow-equal selector memoization |

## reference/integrations/

| File | Description |
|------|-------------|
| `persisting-store-data.md` | Overview of persisting store data across sessions |
| `immer-middleware.md` | Using Zustand with the Immer integration |
| `third-party-libraries.md` | Integrations with other third-party libraries |

## reference/middlewares/

| File | Description |
|------|-------------|
| `persist.md` | `persist` middleware — persist state across page reloads |
| `devtools.md` | `devtools` middleware — Redux DevTools integration |
| `immer.md` | `immer` middleware — use Immer for immutable updates |
| `combine.md` | `combine` middleware — combine state slices |
| `redux.md` | `redux` middleware — Redux-style reducer pattern |
| `subscribe-with-selector.md` | `subscribeWithSelector` — subscribe to specific state slices |

## reference/migrations/

| File | Description |
|------|-------------|
| `migrating-to-v5.md` | How to migrate from v4 to v5 |
| `migrating-to-v4.md` | How to migrate to v4 |

## reference/previous-versions/

| File | Description |
|------|-------------|
| `zustand-v3-create-context.md` | v3 `createContext` API reference |

## reference/

| File | Description |
|------|-------------|
| `index.md` | API-first reference overview |
