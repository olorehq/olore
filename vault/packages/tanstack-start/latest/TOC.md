# tanstack-start Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/framework/react/` | React framework root docs (overview, quickstart, migration) | 6 |
| `contents/framework/react/guide/` | React guides (SSR, server functions, middleware, routing, auth, etc.) | 27 |
| `contents/framework/react/tutorial/` | React tutorials (fetching APIs, file I/O) | 2 |
| `contents/framework/solid/` | Solid framework root docs (overview, quickstart, build from scratch) | 4 |
| `contents/framework/solid/guide/` | Solid guides (SSR, server functions, middleware, routing, auth, etc.) | 27 |
| `contents/framework/solid/tutorial/` | Solid tutorials (fetching APIs, file I/O) | 2 |

## framework/react/

| File | Description |
|------|-------------|
| `overview.md` | TanStack Start overview: features, dependencies, when to use |
| `getting-started.md` | Getting started with TanStack Start for React |
| `quick-start.md` | Quick start guide for React projects |
| `build-from-scratch.md` | How to build a TanStack Start project from scratch |
| `comparison.md` | Feature comparison vs Next.js and React Router |
| `start-vs-nextjs.md` | In-depth comparison of TanStack Start vs Next.js |
| `migrate-from-next-js.md` | Migration guide from Next.js to TanStack Start |

## framework/react/guide/

| File | Description |
|------|-------------|
| `server-functions.md` | createServerFn, server-only RPCs, type-safe calls |
| `server-routes.md` | Server routes and API route definitions |
| `middleware.md` | Request and server function middleware |
| `routing.md` | File-based routing with TanStack Router |
| `authentication.md` | Authentication patterns and implementation |
| `authentication-overview.md` | Overview of authentication strategies |
| `hosting.md` | Deployment targets: Cloudflare, Netlify, Vercel, Node.js, Bun |
| `streaming-data-from-server-functions.md` | Streaming server function responses |
| `static-prerendering.md` | Static prerendering and SSG |
| `isr.md` | Incremental Static Regeneration (ISR) |
| `selective-ssr.md` | Selective SSR configuration |
| `spa-mode.md` | Single Page Application (SPA) mode |
| `environment-variables.md` | Managing environment variables |
| `environment-functions.md` | Environment functions and runtime config |
| `execution-model.md` | Server/client code execution model |
| `code-execution-patterns.md` | Patterns for running code on server vs client |
| `error-boundaries.md` | Error boundary handling in Start |
| `hydration-errors.md` | Diagnosing and fixing hydration errors |
| `client-entry-point.md` | Configuring the client entry point |
| `server-entry-point.md` | Configuring the server entry point |
| `import-protection.md` | Protecting server imports from client bundles |
| `static-server-functions.md` | Static/prerendered server functions |
| `path-aliases.md` | Configuring path aliases in Vite/TypeScript |
| `cdn-asset-urls.md` | CDN configuration for asset URLs |
| `databases.md` | Database integration patterns |
| `tailwind-integration.md` | Setting up Tailwind CSS |
| `rendering-markdown.md` | Rendering markdown in TanStack Start |
| `observability.md` | Observability, tracing, and monitoring |
| `seo.md` | SEO configuration and meta tags |
| `llmo.md` | LLM Optimization (LLMO/AIO) guide |

## framework/react/tutorial/

| File | Description |
|------|-------------|
| `fetching-external-api.md` | Tutorial: fetch data from external APIs |
| `reading-writing-file.md` | Tutorial: reading and writing files on the server |

## framework/solid/

| File | Description |
|------|-------------|
| `overview.md` | TanStack Start overview for Solid |
| `getting-started.md` | Getting started with TanStack Start for Solid |
| `quick-start.md` | Quick start guide for Solid projects |
| `build-from-scratch.md` | Build a TanStack Start project from scratch (Solid) |

## framework/solid/guide/

| File | Description |
|------|-------------|
| `server-functions.md` | createServerFn, server-only RPCs (Solid) |
| `server-routes.md` | Server routes and API routes (Solid) |
| `middleware.md` | Middleware for Solid |
| `routing.md` | File-based routing (Solid) |
| `authentication.md` | Authentication patterns (Solid) |
| `authentication-overview.md` | Authentication overview (Solid) |
| `hosting.md` | Deployment targets for Solid apps |
| `streaming.md` | Streaming data from server functions (Solid) |
| `static-prerendering.md` | Static prerendering (Solid) |
| `selective-ssr.md` | Selective SSR (Solid) |
| `spa-mode.md` | SPA mode (Solid) |
| `environment-variables.md` | Environment variables (Solid) |
| `environment-functions.md` | Environment functions (Solid) |
| `execution-model.md` | Execution model (Solid) |
| `code-execution-patterns.md` | Code execution patterns (Solid) |
| `error-boundaries.md` | Error boundaries (Solid) |
| `hydration-errors.md` | Hydration errors (Solid) |
| `client-entry-point.md` | Client entry point (Solid) |
| `server-entry-point.md` | Server entry point (Solid) |
| `import-protection.md` | Import protection (Solid) |
| `static-server-functions.md` | Static server functions (Solid) |
| `path-aliases.md` | Path aliases (Solid) |
| `databases.md` | Database integration (Solid) |
| `tailwind-integration.md` | Tailwind CSS integration (Solid) |
| `observability.md` | Observability (Solid) |
| `seo.md` | SEO (Solid) |
| `llmo.md` | LLM Optimization (Solid) |
| `reading-writing-file.md` | Reading and writing files (Solid) |

## framework/solid/tutorial/

| File | Description |
|------|-------------|
| `fetching-external-api.md` | Tutorial: fetch from external APIs (Solid) |
| `reading-writing-file.md` | Tutorial: reading and writing files (Solid) |
