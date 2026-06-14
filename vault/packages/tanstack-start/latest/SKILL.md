---
name: olore-tanstack-start-latest
description: Local TanStack Start documentation reference (latest). TanStack Start is a full-stack React/SolidJS framework powered by TanStack Router, providing SSR, streaming, server functions, middleware, file-based routing, and universal deployment via Vite or Rsbuild.
---

# TanStack Start Documentation

TanStack Start is a full-stack React/SolidJS framework powered by TanStack Router, providing SSR, streaming, server functions, middleware, file-based routing, and universal deployment via Vite or Rsbuild.

## Documentation Structure

```
contents/
├── eslint/                    # ESLint plugin for TanStack Start (3 files)
├── framework/react/           # React framework docs (4 files)
├── framework/react/guide/     # React in-depth guides (34 files)
├── framework/react/tutorial/  # React step-by-step tutorials (2 files)
├── framework/solid/           # SolidJS framework docs (3 files)
├── framework/solid/guide/     # SolidJS-specific guides (9 files)
└── framework/solid/tutorial/  # SolidJS tutorials (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / setup | `contents/framework/react/getting-started.md`, `contents/framework/react/overview.md`, `contents/framework/react/build-from-scratch.md` |
| File-based routing | `contents/framework/react/guide/routing.md` |
| Server functions (type-safe RPC) | `contents/framework/react/guide/server-functions.md`, `contents/framework/react/guide/static-server-functions.md`, `contents/framework/react/guide/streaming-data-from-server-functions.md` |
| Server routes / API routes | `contents/framework/react/guide/server-routes.md` |
| SSR / hydration | `contents/framework/react/guide/execution-model.md`, `contents/framework/react/guide/hydration-errors.md`, `contents/framework/react/guide/deferred-hydration.md`, `contents/framework/react/guide/selective-ssr.md` |
| Authentication | `contents/framework/react/guide/authentication.md`, `contents/framework/react/guide/authentication-overview.md`, `contents/framework/react/guide/authentication-server-primitives.md` |
| Middleware | `contents/framework/react/guide/middleware.md` |
| Deployment / hosting | `contents/framework/react/guide/hosting.md`, `contents/framework/react/guide/geo.md` |
| Static generation / ISR | `contents/framework/react/guide/static-prerendering.md`, `contents/framework/react/guide/isr.md` |
| SPA mode | `contents/framework/react/guide/spa-mode.md` |
| Environment variables | `contents/framework/react/guide/environment-variables.md`, `contents/framework/react/guide/environment-functions.md` |
| Server/client code isolation | `contents/framework/react/guide/import-protection.md`, `contents/framework/react/guide/code-execution-patterns.md` |
| CSS / Tailwind | `contents/framework/react/guide/css-styling.md`, `contents/framework/react/guide/tailwind-integration.md` |
| Database integration | `contents/framework/react/guide/databases.md` |
| SEO | `contents/framework/react/guide/seo.md` |
| Observability / logging | `contents/framework/react/guide/observability.md` |
| Server Components | `contents/framework/react/guide/server-components.md` |
| Error handling | `contents/framework/react/guide/error-boundaries.md` |
| Migration from Next.js | `contents/framework/react/migrate-from-next-js.md` |
| ESLint rules | `contents/eslint/eslint-plugin-start.md`, `contents/eslint/no-async-client-component.md`, `contents/eslint/no-client-code-in-server-component.md` |
| SolidJS setup | `contents/framework/solid/getting-started.md`, `contents/framework/solid/build-from-scratch.md` |
| SolidJS guides | `contents/framework/solid/guide/` (routing, server functions, auth, SSR) |

## When to use

Use this skill when the user asks about:
- Setting up or configuring a TanStack Start project
- Server functions, server routes, or type-safe RPC patterns
- SSR, streaming, hydration, or deferred data loading
- File-based routing with TanStack Router in Start
- Authentication patterns and middleware
- Deployment to hosting providers (Vercel, Netlify, Cloudflare, etc.)
- Static prerendering, ISR, or SPA mode
- Server Components or server/client code isolation
- Migrating from Next.js to TanStack Start
- TanStack Start ESLint rules
- TanStack Start with SolidJS

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
