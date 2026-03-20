---
name: olore-tanstack-start-latest
description: Local tanstack-start documentation reference (latest). TanStack Start documentation. Use for full-stack React/Solid framework, server functions, SSR, streaming, deployment, and file-based routing with TanStack Router.
---

# tanstack-start Documentation

TanStack Start documentation. Use for full-stack React/Solid framework, server functions, SSR, streaming, deployment, and file-based routing with TanStack Router.

## Documentation Structure

```
contents/
├── framework/react/        # React framework docs: overview, quickstart, migration (6 files)
├── framework/react/guide/  # React guides: SSR, server functions, middleware, hosting (27 files)
├── framework/react/tutorial/ # React tutorials (2 files)
├── framework/solid/        # Solid framework docs: overview, quickstart (4 files)
├── framework/solid/guide/  # Solid guides: SSR, server functions, middleware, hosting (27 files)
└── framework/solid/tutorial/ # Solid tutorials (2 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Overview & Getting Started | `contents/framework/react/overview.md`, `contents/framework/react/getting-started.md`, `contents/framework/react/quick-start.md` |
| Server Functions | `contents/framework/react/guide/server-functions.md`, `contents/framework/react/guide/static-server-functions.md` |
| Server Routes & API | `contents/framework/react/guide/server-routes.md` |
| Middleware | `contents/framework/react/guide/middleware.md` |
| Routing | `contents/framework/react/guide/routing.md` |
| SSR & Streaming | `contents/framework/react/guide/streaming-data-from-server-functions.md`, `contents/framework/react/guide/selective-ssr.md`, `contents/framework/react/guide/execution-model.md` |
| Static / ISR / SPA | `contents/framework/react/guide/static-prerendering.md`, `contents/framework/react/guide/isr.md`, `contents/framework/react/guide/spa-mode.md` |
| Authentication | `contents/framework/react/guide/authentication.md`, `contents/framework/react/guide/authentication-overview.md` |
| Deployment & Hosting | `contents/framework/react/guide/hosting.md` |
| Environment & Config | `contents/framework/react/guide/environment-variables.md`, `contents/framework/react/guide/environment-functions.md`, `contents/framework/react/guide/path-aliases.md` |
| Error Handling | `contents/framework/react/guide/error-boundaries.md`, `contents/framework/react/guide/hydration-errors.md` |
| Database Integration | `contents/framework/react/guide/databases.md` |
| SEO & Meta | `contents/framework/react/guide/seo.md`, `contents/framework/react/guide/llmo.md` |
| Migration | `contents/framework/react/migrate-from-next-js.md`, `contents/framework/react/comparison.md`, `contents/framework/react/start-vs-nextjs.md` |
| Solid Framework | `contents/framework/solid/` |

## When to use

Use this skill when the user asks about:
- TanStack Start setup, configuration, or project structure
- Server functions (createServerFn), server routes, or API routes
- SSR, streaming, static prerendering, ISR, or SPA mode
- Middleware creation and request/response handling
- File-based routing with TanStack Router in a full-stack context
- Deployment to Cloudflare Workers, Netlify, Vercel, Railway, Node.js, or Bun
- Authentication patterns in TanStack Start
- Environment variables and environment functions
- Hydration errors, error boundaries, or import protection
- Migrating from Next.js to TanStack Start
- TanStack Start with Solid (SolidJS)

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
