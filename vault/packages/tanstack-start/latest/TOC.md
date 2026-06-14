# TanStack Start Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/eslint/` | ESLint plugin rules for TanStack Start | 3 |
| `contents/framework/react/` | React framework: overview, setup, migration | 4 |
| `contents/framework/react/guide/` | React in-depth guides (SSR, server functions, auth, deployment, etc.) | 34 |
| `contents/framework/react/tutorial/` | React step-by-step tutorials | 2 |
| `contents/framework/solid/` | SolidJS framework: overview and setup | 2 |
| `contents/framework/solid/guide/` | SolidJS-specific guides | 9 |
| `contents/framework/solid/tutorial/` | SolidJS step-by-step tutorials | 1 |

## eslint/

| File | Description |
|------|-------------|
| `eslint-plugin-start.md` | Overview of the ESLint plugin for TanStack Start |
| `no-async-client-component.md` | Rule: disallow async components in client context |
| `no-client-code-in-server-component.md` | Rule: disallow client-only code in server components |

## framework/react/

| File | Description |
|------|-------------|
| `overview.md` | TanStack Start overview, features, and when to use |
| `getting-started.md` | Quick start: CLI scaffolding and initial setup |
| `build-from-scratch.md` | Step-by-step guide to build a project manually |
| `migrate-from-next-js.md` | Migration guide from Next.js to TanStack Start |

## framework/react/guide/

| File | Description |
|------|-------------|
| `routing.md` | File-based routing with TanStack Router |
| `server-functions.md` | Type-safe RPC server functions |
| `server-routes.md` | API/server route handlers |
| `server-entry-point.md` | Configuring the server entry point |
| `client-entry-point.md` | Configuring the client entry point |
| `middleware.md` | Request/response middleware |
| `authentication.md` | Authentication patterns and integrations |
| `authentication-overview.md` | Overview of authentication approaches |
| `authentication-server-primitives.md` | Low-level server auth primitives |
| `environment-variables.md` | Managing environment variables |
| `environment-functions.md` | Server/client environment helper functions |
| `execution-model.md` | How code executes on server vs client |
| `code-execution-patterns.md` | Patterns for controlling execution context |
| `import-protection.md` | Preventing server code from leaking to client |
| `hydration-errors.md` | Diagnosing and fixing SSR hydration errors |
| `deferred-hydration.md` | Streaming and deferred data hydration |
| `error-boundaries.md` | Error boundary setup and patterns |
| `static-prerendering.md` | Static site generation (SSG/prerendering) |
| `isr.md` | Incremental static regeneration |
| `selective-ssr.md` | Selectively disabling SSR for components |
| `spa-mode.md` | Running TanStack Start as a pure SPA |
| `streaming-data-from-server-functions.md` | Streaming responses from server functions |
| `static-server-functions.md` | Server functions for static/prerendered routes |
| `server-components.md` | Server Components support and patterns |
| `hosting.md` | Deployment and hosting providers |
| `geo.md` | Edge/geo-aware deployments |
| `css-styling.md` | CSS and styling integration |
| `tailwind-integration.md` | Tailwind CSS setup |
| `databases.md` | Database integration patterns |
| `seo.md` | SEO with meta tags and document head |
| `observability.md` | Logging, tracing, and monitoring |
| `early-hints.md` | HTTP 103 Early Hints support |
| `path-aliases.md` | TypeScript path aliases configuration |
| `rendering-markdown.md` | Rendering markdown content |
| `cdn-asset-urls.md` | CDN and asset URL configuration |

## framework/react/tutorial/

| File | Description |
|------|-------------|
| `fetching-external-api.md` | Tutorial: fetching data from an external API |
| `reading-writing-file.md` | Tutorial: reading and writing files on the server |

## framework/solid/

| File | Description |
|------|-------------|
| `overview.md` | TanStack Start for SolidJS overview (ref to React with replacements) |
| `getting-started.md` | Quick start for SolidJS projects |
| `build-from-scratch.md` | Build a SolidJS project from scratch |

## framework/solid/guide/

| File | Description |
|------|-------------|
| `routing.md` | File-based routing for SolidJS |
| `server-functions.md` | Server functions in SolidJS |
| `authentication.md` | Authentication for SolidJS apps |
| `client-entry-point.md` | Client entry point for SolidJS |
| `code-execution-patterns.md` | Code execution patterns for SolidJS |
| `execution-model.md` | Execution model for SolidJS |
| `hydration-errors.md` | Hydration errors in SolidJS |
| `observability.md` | Observability for SolidJS |
| `selective-ssr.md` | Selective SSR for SolidJS |
| `static-prerendering.md` | Static prerendering for SolidJS |

## framework/solid/tutorial/

| File | Description |
|------|-------------|
| `reading-writing-file.md` | Tutorial: reading and writing files (SolidJS) |
