---
name: olore-zustand-latest
description: Local zustand documentation reference (latest). Zustand documentation. Use for React state management, stores, selectors, middleware, persistence, and devtools integration.
---

# zustand Documentation

Zustand documentation. Use for React state management, stores, selectors, middleware, persistence, and devtools integration.

## Documentation Structure

```
contents/
├── learn/getting-started/   # Introduction and installation (2 files)
├── learn/guides/            # How-to guides and patterns (13+ files)
├── reference/apis/          # Core API reference (4 files)
├── reference/middlewares/   # Middleware reference (6 files)
├── reference/hooks/         # React hook reference (3 files)
├── reference/integrations/  # Integration guides (3 files)
└── reference/migrations/    # Version migration guides (2 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / installation | `contents/learn/getting-started/introduction.md` |
| Creating stores (React) | `contents/reference/apis/create.md` |
| Creating stores (vanilla) | `contents/reference/apis/create-store.md` |
| Selectors and re-renders | `contents/reference/apis/create-with-equality-fn.md`, `contents/reference/hooks/use-shallow.md` |
| Shallow comparison | `contents/reference/apis/shallow.md` |
| Persistence / localStorage | `contents/reference/middlewares/persist.md`, `contents/reference/integrations/persisting-store-data.md` |
| Devtools / debugging | `contents/reference/middlewares/devtools.md` |
| Immer (immutable updates) | `contents/reference/middlewares/immer.md`, `contents/reference/integrations/immer-middleware.md` |
| Redux-style reducers | `contents/reference/middlewares/redux.md` |
| Subscribing to state slices | `contents/reference/middlewares/subscribe-with-selector.md` |
| Using vanilla stores in React | `contents/reference/hooks/use-store.md`, `contents/reference/hooks/use-store-with-equality-fn.md` |
| Slices pattern | `contents/learn/guides/slices-pattern.md` |
| TypeScript | `contents/learn/guides/advanced-typescript.md`, `contents/learn/guides/beginner-typescript.md` |
| SSR / Next.js | `contents/learn/guides/ssr-and-hydration.md`, `contents/learn/guides/nextjs.md` |
| Testing | `contents/learn/guides/testing.md` |
| Resetting state | `contents/learn/guides/how-to-reset-state.md` |
| Migration v4/v5 | `contents/reference/migrations/` |

## When to use

Use this skill when the user asks about:
- Creating and using Zustand stores in React or vanilla JS
- State selectors, subscriptions, and preventing unnecessary re-renders
- Middleware: persist, devtools, immer, redux, combine, subscribeWithSelector
- TypeScript types with Zustand (StateCreator, StoreApi, UseBoundStore)
- SSR, hydration, and Next.js integration
- Slices pattern and store composition
- Testing Zustand stores
- Migrating from Zustand v3/v4 to v5

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
