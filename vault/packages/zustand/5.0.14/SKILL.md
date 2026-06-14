---
name: olore-zustand-5.0.14
description: Local zustand documentation reference (5.0.14). Zustand documentation. Use for React state management, stores, selectors, middleware, persistence, and devtools integration.
version: 5.0.14
---

# zustand Documentation

Zustand documentation. Use for React state management, stores, selectors, middleware, persistence, and devtools integration.

## Documentation Structure

```
contents/
├── learn/getting-started/   # Introduction and comparisons (2 files)
├── learn/guides/            # How-to guides and patterns (16 files)
├── reference/apis/          # Core API reference (4 files)
├── reference/hooks/         # Hook reference (3 files)
├── reference/integrations/  # Third-party integrations (3 files)
├── reference/middlewares/   # Middleware reference (6 files)
├── reference/migrations/    # Migration guides v3→v4→v5 (2 files)
└── reference/previous-versions/  # Legacy API docs (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / basic store | `contents/learn/getting-started/introduction.md`, `contents/reference/apis/create.md` |
| Vanilla (non-React) store | `contents/reference/apis/create-store.md` |
| Updating state (flat & nested) | `contents/learn/guides/updating-state.md`, `contents/learn/guides/immutable-state-and-merging.md` |
| Selectors and re-render prevention | `contents/learn/guides/prevent-rerenders-with-use-shallow.md`, `contents/reference/hooks/use-shallow.md`, `contents/reference/apis/shallow.md` |
| Auto-generated selectors | `contents/learn/guides/auto-generating-selectors.md` |
| Slices pattern | `contents/learn/guides/slices-pattern.md` |
| Resetting state | `contents/learn/guides/how-to-reset-state.md` |
| Initializing from props | `contents/learn/guides/initialize-state-with-props.md` |
| TypeScript usage | `contents/learn/guides/beginner-typescript.md`, `contents/learn/guides/advanced-typescript.md` |
| Persist middleware (localStorage, etc.) | `contents/reference/middlewares/persist.md`, `contents/reference/integrations/persisting-store-data.md` |
| DevTools middleware | `contents/reference/middlewares/devtools.md` |
| Immer middleware | `contents/reference/middlewares/immer.md`, `contents/reference/integrations/immer-middleware.md` |
| Redux-style patterns | `contents/reference/middlewares/redux.md`, `contents/learn/guides/flux-inspired-practice.md` |
| subscribeWithSelector | `contents/reference/middlewares/subscribe-with-selector.md` |
| combine middleware | `contents/reference/middlewares/combine.md` |
| SSR and Next.js | `contents/learn/guides/ssr-and-hydration.md`, `contents/learn/guides/nextjs.md` |
| Testing | `contents/learn/guides/testing.md` |
| Migrating to v5 | `contents/reference/migrations/migrating-to-v5.md` |
| Migrating to v4 | `contents/reference/migrations/migrating-to-v4.md` |
| Comparing with Redux/Jotai/Recoil | `contents/learn/getting-started/comparison.md` |

## When to use

Use this skill when the user asks about:
- Creating and using Zustand stores in React or vanilla JS
- State update patterns, selectors, and re-render optimization
- Middleware (persist, devtools, immer, redux, subscribeWithSelector, combine)
- TypeScript integration with Zustand
- SSR, hydration, and Next.js usage
- Testing Zustand stores
- Migrating from Zustand v3 or v4 to v5
- Comparing Zustand with other state management libraries

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
