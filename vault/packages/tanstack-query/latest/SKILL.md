---
name: olore-tanstack-query-latest
description: Local TanStack Query documentation reference (latest). Use for server state management, data fetching, caching, queries, mutations, and React/Vue/Solid/Angular query integration.
---

# TanStack Query Documentation

TanStack Query (formerly React Query) is a powerful library for server state management. This documentation covers data fetching, caching, synchronization, queries, mutations, and framework integrations for React, Vue, Angular, Svelte, and Solid.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Getting started with React | `contents/framework/react/quick-start.md` |
| Getting started with Vue | `contents/framework/vue/quick-start.md` |
| Getting started with Angular | `contents/framework/angular/quick-start.md` |
| Core concepts (queries) | `contents/framework/react/guides/queries.md` |
| Mutations | `contents/framework/react/guides/mutations.md` |
| Caching strategies | `contents/framework/react/guides/caching.md` |
| TypeScript usage | `contents/framework/react/typescript.md` |
| API reference (React) | `contents/framework/react/reference/` |
| Core classes | `contents/reference/QueryClient.md` |

## When to use

Use this skill when the user asks about:
- TanStack Query, React Query, Vue Query, Angular Query
- Server state management and data fetching
- Queries, mutations, and query invalidation
- Caching, background refetching, and cache updates
- Infinite scroll and paginated queries
- Optimistic updates and error handling
- SSR (Server-Side Rendering) with queries
- TypeScript types for queries and mutations
- Framework integration (React, Vue, Angular, Svelte, Solid)
- Query devtools and debugging

## How to find information

1. **First**, read `TOC.md` for complete file listing organized by directory
2. Identify the framework (React, Vue, Angular, Svelte, Solid) or core concept
3. Navigate to the appropriate section:
   - `framework/{framework}/guides/` - Core concepts and patterns
   - `framework/{framework}/reference/` - API reference
   - `reference/` - Core framework-agnostic classes
4. Read specific files for details

**TOC.md contains all files organized by directory - always check it first.**

## Documentation Structure

- **framework/react/** - React Query docs (most comprehensive)
- **framework/vue/** - Vue Query docs (many guides reference React)
- **framework/angular/** - Angular Query docs
- **framework/svelte/** - Svelte Query docs
- **framework/solid/** - Solid Query docs
- **reference/** - Core QueryClient and cache classes
- **eslint/** - ESLint plugin rules
