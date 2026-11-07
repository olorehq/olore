---
name: olore-zustand-5.1.0
description: Local Zustand documentation reference (5.1.0). Zustand documentation. Use for React state management, stores, selectors, middleware, persistence, and devtools integration.
---

# zustand Documentation

Zustand documentation. Use for React state management, stores, selectors, middleware, persistence, and devtools integration.

## Documentation Structure

```
contents/
├── learn/getting-started/   # Introduction and library comparison (2 files)
├── learn/guides/            # How-to guides and patterns (18 files)
├── reference/apis/          # Core API reference: create, createStore, shallow (4 files)
├── reference/hooks/         # React hooks: useStore, useShallow (3 files)
├── reference/middlewares/   # Middleware: persist, devtools, immer, redux, combine (6 files)
├── reference/integrations/  # Third-party integrations and persistence (3 files)
├── reference/migrations/    # Migration guides for v4 and v5 (2 files)
└── reference/previous-versions/  # Older API docs (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started | `contents/learn/getting-started/introduction.md`, `contents/learn/getting-started/comparison.md` |
| Creating stores | `contents/reference/apis/create.md`, `contents/reference/apis/create-store.md` |
| Selectors / re-renders | `contents/reference/hooks/use-shallow.md`, `contents/learn/guides/prevent-rerenders-with-use-shallow.md`, `contents/learn/guides/auto-generating-selectors.md` |
| Middleware | `contents/reference/middlewares/persist.md`, `contents/reference/middlewares/devtools.md`, `contents/reference/middlewares/immer.md` |
| Persistence | `contents/reference/integrations/persisting-store-data.md` |
| TypeScript | `contents/learn/guides/beginner-typescript.md`, `contents/learn/guides/advanced-typescript.md` |
| SSR / Next.js | `contents/learn/guides/nextjs.md`, `contents/learn/guides/ssr-and-hydration.md` |
| Patterns | `contents/learn/guides/slices-pattern.md`, `contents/learn/guides/updating-state.md`, `contents/learn/guides/how-to-reset-state.md` |
| Testing | `contents/learn/guides/testing.md` |
| Migration | `contents/reference/migrations/migrating-to-v5.md`, `contents/reference/migrations/migrating-to-v4.md` |

## When to use

Use this skill when the user asks about:
- Zustand stores, hooks, and selectors
- Zustand middleware (persist, devtools, immer, redux)
- Zustand with TypeScript, Next.js, or SSR
- Migrating Zustand between versions

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
