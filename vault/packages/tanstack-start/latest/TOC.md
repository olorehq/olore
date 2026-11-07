# tanstack-start Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/eslint/` | ESLint plugin and rules | 3 |
| `contents/framework/react/` | React getting started, migration, comparisons | 7 |
| `contents/framework/react/guide/` | React how-to guides | 37 |
| `contents/framework/react/tutorial/` | React tutorials | 2 |
| `contents/framework/solid/` | Solid getting started and overview | 4 |
| `contents/framework/solid/guide/` | Solid how-to guides | 30 |
| `contents/framework/solid/tutorial/` | Solid tutorials | 2 |

## eslint/

| File | Description |
|------|-------------|
| `eslint-plugin-start.md` | ESLint plugin overview and setup |
| `no-async-client-component.md` | Rule: disallow async components in client context |
| `no-client-code-in-server-component.md` | Rule: disallow client-only code in server components |

## framework/react/

| File | Description |
|------|-------------|
| `build-from-scratch.md` | Building a Start project from scratch without a template |
| `comparison.md` | Comparison of Start vs Next.js vs React Router |
| `getting-started.md` | Creating a Start app with the CLI, Builder, or an example |
| `migrate-from-next-js.md` | Migrating a Next.js App Router app to Start |
| `migrate-from-release-candidate.md` | Upgrading from the release candidate to stable |
| `overview.md` | Overview of TanStack Start features and philosophy |
| `start-vs-nextjs.md` | Detailed Start vs Next.js comparison |

## framework/react/guide/

| File | Description |
|------|-------------|
| `authentication-overview.md` | Choosing between hosted, library, and custom authentication |
| `authentication-server-primitives.md` | Server-side primitives for building authentication (sessions, cookies) |
| `authentication.md` | Implementing sessions, sign-in/out, and protected routes |
| `cdn-asset-urls.md` | Serving assets from a CDN with custom asset URLs |
| `client-entry-point.md` | Customizing the client entry point (client.tsx) |
| `code-execution-patterns.md` | Controlling what code runs on server vs client |
| `css-styling.md` | Styling with CSS files and imports |
| `databases.md` | Connecting databases via server functions and routes |
| `deferred-hydration.md` | Deferring hydration of parts of the page |
| `early-hints.md` | Sending HTTP 103 Early Hints for faster loads |
| `environment-functions.md` | Environment-specific functions (server/client only helpers) |
| `environment-variables.md` | Using server and client environment variables safely |
| `error-boundaries.md` | Handling errors with error boundaries |
| `execution-model.md` | Isomorphic execution model of Start apps |
| `geo.md` | Generative Engine Optimization (GEO) for AI discoverability |
| `hosting.md` | Deployment and hosting targets (Cloudflare, Netlify, Vercel, Node, etc.) |
| `hydration-errors.md` | Diagnosing and fixing hydration mismatches |
| `import-protection.md` | Preventing server code from leaking into client bundles |
| `isr.md` | Incremental Static Regeneration with caching |
| `middleware.md` | Request and server function middleware |
| `observability.md` | Logging, tracing, and monitoring |
| `path-aliases.md` | Configuring TypeScript/Vite path aliases |
| `production-checklist.md` | Pre-production checks for secrets, authorization, caching |
| `rendering-markdown.md` | Rendering Markdown content in routes |
| `routing.md` | File-based routing in Start |
| `selective-ssr.md` | Enabling or disabling SSR per route |
| `seo.md` | Page metadata, canonical URLs, structured data |
| `server-components.md` | React Server Components in Start |
| `server-entry-point.md` | Customizing the server entry point (server.ts) |
| `server-functions.md` | Defining and calling server functions (createServerFn) |
| `server-routes.md` | Server routes / API endpoints with HTTP handlers |
| `spa-mode.md` | Running Start as a client-rendered SPA |
| `static-prerendering.md` | Prerendering static pages at build time |
| `static-server-functions.md` | Static server functions cached at build time |
| `streaming-data-from-server-functions.md` | Streaming data from server functions |
| `tailwind-integration.md` | Setting up Tailwind CSS |
| `tanstack-query.md` | Integrating TanStack Query with SSR and hydration |

## framework/react/tutorial/

| File | Description |
|------|-------------|
| `fetching-external-api.md` | Tutorial: calling an external API (movie search app) |
| `reading-writing-file.md` | Tutorial: full-stack DevJokes app with file storage |

## framework/solid/

| File | Description |
|------|-------------|
| `build-from-scratch.md` | Building a Start project from scratch without a template |
| `getting-started.md` | Creating a Start app with the CLI, Builder, or an example |
| `migrate-from-release-candidate.md` | Upgrading from the release candidate to stable |
| `overview.md` | Overview of TanStack Start features and philosophy |

## framework/solid/guide/

| File | Description |
|------|-------------|
| `authentication-overview.md` | Choosing between hosted, library, and custom authentication |
| `authentication-server-primitives.md` | Server-side primitives for building authentication (sessions, cookies) |
| `authentication.md` | Implementing sessions, sign-in/out, and protected routes |
| `client-entry-point.md` | Customizing the client entry point (client.tsx) |
| `code-execution-patterns.md` | Controlling what code runs on server vs client |
| `css-styling.md` | Styling with CSS files and imports |
| `databases.md` | Connecting databases via server functions and routes |
| `deferred-hydration.md` | Deferring hydration of parts of the page |
| `early-hints.md` | Sending HTTP 103 Early Hints for faster loads |
| `environment-functions.md` | Environment-specific functions (server/client only helpers) |
| `environment-variables.md` | Using server and client environment variables safely |
| `error-boundaries.md` | Handling errors with error boundaries |
| `execution-model.md` | Isomorphic execution model of Start apps |
| `geo.md` | Generative Engine Optimization (GEO) for AI discoverability |
| `hosting.md` | Deployment and hosting targets (Cloudflare, Netlify, Vercel, Node, etc.) |
| `hydration-errors.md` | Diagnosing and fixing hydration mismatches |
| `import-protection.md` | Preventing server code from leaking into client bundles |
| `middleware.md` | Request and server function middleware |
| `observability.md` | Logging, tracing, and monitoring |
| `path-aliases.md` | Configuring TypeScript/Vite path aliases |
| `routing.md` | File-based routing in Start |
| `selective-ssr.md` | Enabling or disabling SSR per route |
| `seo.md` | Page metadata, canonical URLs, structured data |
| `server-entry-point.md` | Customizing the server entry point (server.ts) |
| `server-functions.md` | Defining and calling server functions (createServerFn) |
| `server-routes.md` | Server routes / API endpoints with HTTP handlers |
| `spa-mode.md` | Running Start as a client-rendered SPA |
| `static-prerendering.md` | Prerendering static pages at build time |
| `static-server-functions.md` | Static server functions cached at build time |
| `tailwind-integration.md` | Setting up Tailwind CSS |

## framework/solid/tutorial/

| File | Description |
|------|-------------|
| `fetching-external-api.md` | Tutorial: calling an external API (movie search app) |
| `reading-writing-file.md` | Tutorial: full-stack DevJokes app with file storage |
