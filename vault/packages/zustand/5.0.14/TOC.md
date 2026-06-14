# zustand Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Root index (landing page) | 1 |
| `contents/learn/getting-started/` | Introduction and comparison with other state managers | 2 |
| `contents/learn/guides/` | How-to guides and patterns | 16 |
| `contents/reference/apis/` | Core API reference (create, createStore, shallow) | 4 |
| `contents/reference/hooks/` | Hook reference (useStore, useShallow, equality fn) | 3 |
| `contents/reference/integrations/` | Third-party integrations (immer, persist, libraries) | 3 |
| `contents/reference/middlewares/` | Middleware reference (persist, devtools, immer, redux, etc.) | 6 |
| `contents/reference/migrations/` | Migration guides (v4, v5) | 2 |
| `contents/reference/previous-versions/` | Legacy API docs | 1 |

## learn/getting-started/

| File | Description |
|------|-------------|
| `learn/getting-started/introduction.md` | Getting started with Zustand, basic store creation |
| `learn/getting-started/comparison.md` | Comparison of Zustand with Redux, Jotai, Recoil, and others |

## learn/guides/

| File | Description |
|------|-------------|
| `learn/guides/updating-state.md` | How to update flat and nested state |
| `learn/guides/immutable-state-and-merging.md` | Immutable updates and shallow merge behavior |
| `learn/guides/how-to-reset-state.md` | Patterns for resetting store state |
| `learn/guides/initialize-state-with-props.md` | Initializing store state from React component props |
| `learn/guides/slices-pattern.md` | Splitting a store into composable slices |
| `learn/guides/flux-inspired-practice.md` | Flux/Redux-style action patterns with Zustand |
| `learn/guides/practice-with-no-store-actions.md` | Using Zustand without store-bound actions |
| `learn/guides/prevent-rerenders-with-use-shallow.md` | Preventing unnecessary re-renders with useShallow |
| `learn/guides/auto-generating-selectors.md` | Auto-generating typed selectors from a store |
| `learn/guides/maps-and-sets-usage.md` | Using Maps and Sets as state values |
| `learn/guides/connect-to-state-with-url-hash.md` | Syncing store state with URL hash |
| `learn/guides/ssr-and-hydration.md` | Server-side rendering and hydration patterns |
| `learn/guides/nextjs.md` | Zustand with Next.js (App Router and Pages Router) |
| `learn/guides/testing.md` | Unit and integration testing with Zustand |
| `learn/guides/tutorial-tic-tac-toe.md` | Step-by-step tutorial building a tic-tac-toe game |
| `learn/guides/advanced-typescript.md` | Advanced TypeScript patterns (typed slices, middleware types) |
| `learn/guides/beginner-typescript.md` | Beginner TypeScript usage with Zustand |
| `learn/guides/event-handler-in-pre-react-18.md` | Event handler behavior in pre-React 18 environments |
| `learn/index.md` | Learn section index with topic overview |

## reference/apis/

| File | Description |
|------|-------------|
| `reference/apis/create.md` | `create` API — creates a React hook-bound store |
| `reference/apis/create-store.md` | `createStore` API — creates a vanilla (non-React) store |
| `reference/apis/create-with-equality-fn.md` | `createWithEqualityFn` — custom equality for subscriptions |
| `reference/apis/shallow.md` | `shallow` utility for shallow equality comparison |

## reference/hooks/

| File | Description |
|------|-------------|
| `reference/hooks/use-store.md` | `useStore` hook reference |
| `reference/hooks/use-shallow.md` | `useShallow` hook for memoized selectors |
| `reference/hooks/use-store-with-equality-fn.md` | `useStoreWithEqualityFn` hook reference |

## reference/integrations/

| File | Description |
|------|-------------|
| `reference/integrations/immer-middleware.md` | Immer middleware integration details |
| `reference/integrations/persisting-store-data.md` | Persisting store data with the persist middleware |
| `reference/integrations/third-party-libraries.md` | Overview of compatible third-party libraries |

## reference/middlewares/

| File | Description |
|------|-------------|
| `reference/middlewares/persist.md` | `persist` middleware — local/session/custom storage |
| `reference/middlewares/devtools.md` | `devtools` middleware — Redux DevTools integration |
| `reference/middlewares/immer.md` | `immer` middleware — draft-based immutable updates |
| `reference/middlewares/combine.md` | `combine` middleware — merging initial state with actions |
| `reference/middlewares/redux.md` | `redux` middleware — Redux-style reducer pattern |
| `reference/middlewares/subscribe-with-selector.md` | `subscribeWithSelector` middleware for granular subscriptions |

## reference/migrations/

| File | Description |
|------|-------------|
| `reference/migrations/migrating-to-v5.md` | Migration guide from Zustand v4 to v5 |
| `reference/migrations/migrating-to-v4.md` | Migration guide from Zustand v3 to v4 |

## reference/previous-versions/

| File | Description |
|------|-------------|
| `reference/previous-versions/zustand-v3-create-context.md` | Legacy `createContext` API from Zustand v3 |
