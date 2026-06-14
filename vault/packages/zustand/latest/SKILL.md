---
name: olore-zustand-latest
description: Local Zustand documentation reference (latest). Zustand documentation. Use for React state management, stores, selectors, middleware, persistence, and devtools integration.
---

# zustand Documentation

Zustand documentation. Use for React state management, stores, selectors, middleware, persistence, and devtools integration.

## Documentation Structure

```
contents/
├── learn/getting-started/   # Introduction and library comparison (2 files)
├── learn/guides/            # How-to guides and patterns (15 files)
├── reference/apis/          # Core API reference: create, createStore, shallow (4 files)
├── reference/hooks/         # React hooks: useStore, useShallow (3 files)
├── reference/middlewares/   # Middleware: persist, devtools, immer, redux, combine (6 files)
├── reference/integrations/  # Third-party integrations and persistence overview (3 files)
├── reference/migrations/    # Migration guides for v4 and v5 (2 files)
└── reference/previous-versions/  # Older API docs (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / installation | `contents/learn/getting-started/introduction.md` |
| Comparing Zustand to Redux/Jotai/Recoil | `contents/learn/getting-started/comparison.md` |
| Creating stores | `contents/reference/apis/create.md`, `contents/reference/apis/create-store.md` |
| Updating state (objects, nested, arrays) | `contents/learn/guides/updating-state.md`, `contents/learn/guides/immutable-state-and-merging.md` |
| Selectors and re-render optimization | `contents/learn/guides/prevent-rerenders-with-use-shallow.md`, `contents/learn/guides/auto-generating-selectors.md` |
| Shallow equality | `contents/reference/apis/shallow.md`, `contents/reference/hooks/use-shallow.md` |
| Slices pattern | `contents/learn/guides/slices-pattern.md` |
| Persisting state | `contents/reference/middlewares/persist.md`, `contents/reference/integrations/persisting-store-data.md` |
| DevTools integration | `contents/reference/middlewares/devtools.md` |
| Immer for immutable updates | `contents/reference/middlewares/immer.md`, `contents/reference/integrations/immer-middleware.md` |
| Redux-style patterns | `contents/reference/middlewares/redux.md`, `contents/learn/guides/flux-inspired-practice.md` |
| TypeScript usage | `contents/learn/guides/beginner-typescript.md`, `contents/learn/guides/advanced-typescript.md` |
| Next.js and SSR | `contents/learn/guides/nextjs.md`, `contents/learn/guides/ssr-and-hydration.md` |
| Testing stores | `contents/learn/guides/testing.md` |
| Resetting state | `contents/learn/guides/how-to-reset-state.md` |
| Subscribing to state slices | `contents/reference/middlewares/subscribe-with-selector.md` |
| Migrating to v5 | `contents/reference/migrations/migrating-to-v5.md` |

## When to use

Use this skill when the user asks about:
- Creating and using Zustand stores in React
- State management patterns (slices, actions, selectors)
- Middleware (persist, devtools, immer, redux, subscribeWithSelector, combine)
- TypeScript integration with Zustand
- Preventing unnecessary re-renders with selectors and shallow equality
- SSR, hydration, and Next.js usage
- Migrating from older Zustand versions (v3, v4 to v5)
- Testing Zustand stores
- Comparing Zustand to Redux, Jotai, Recoil, or Valtio

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
