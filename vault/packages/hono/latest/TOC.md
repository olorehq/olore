# Hono Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Root index and overview | 1 |
| `contents/api/` | Core API reference (Hono class, routing, context, request, exception, presets) | 7 |
| `contents/concepts/` | Conceptual guides (routers, middleware, web standards, stacks, DX) | 5 |
| `contents/getting-started/` | Platform-specific setup guides | 18 |
| `contents/guides/` | How-to guides (JSX, RPC, validation, testing, middleware, best practices) | 10 |
| `contents/helpers/` | Built-in helper utilities | 15 |
| `contents/middleware/builtin/` | Built-in middleware reference | 23 |
| `contents/middleware/` | Third-party middleware list | 1 |

## contents/ (root)

| File | Description |
|------|-------------|
| `index.md` | Hono overview, features, quick start, and platform support |

## api/

| File | Description |
|------|-------------|
| `index.md` | API section overview |
| `hono.md` | Hono class — constructor, methods, app composition |
| `routing.md` | Routing API — path params, wildcards, grouping |
| `context.md` | Context object — req, res, env, executionCtx, helpers |
| `request.md` | HonoRequest API — body parsing, headers, query params |
| `exception.md` | HTTPException — creating and handling HTTP errors |
| `presets.md` | Preset bundles (hono/tiny, etc.) |

## concepts/

| File | Description |
|------|-------------|
| `routers.md` | Router types — RegExpRouter, SmartRouter, LinearRouter, PatternRouter |
| `middleware.md` | Middleware concept — how middleware works in Hono |
| `web-standard.md` | Web Standards approach and platform compatibility |
| `stacks.md` | Hono Stacks — RPC-based full-stack pattern with Zod |
| `developer-experience.md` | TypeScript types, type inference, and DX features |

## getting-started/

| File | Description |
|------|-------------|
| `basic.md` | Basic setup and project structure |
| `cloudflare-workers.md` | Setup for Cloudflare Workers |
| `cloudflare-pages.md` | Setup for Cloudflare Pages |
| `deno.md` | Setup for Deno runtime |
| `bun.md` | Setup for Bun runtime |
| `nodejs.md` | Setup for Node.js with adapter |
| `aws-lambda.md` | Setup for AWS Lambda |
| `lambda-edge.md` | Setup for AWS Lambda@Edge |
| `vercel.md` | Setup for Vercel (Edge Functions) |
| `netlify.md` | Setup for Netlify Edge Functions |
| `fastly.md` | Setup for Fastly Compute |
| `nextjs.md` | Setup for Next.js API routes |
| `supabase-functions.md` | Setup for Supabase Edge Functions |
| `azure-functions.md` | Setup for Azure Functions |
| `google-cloud-run.md` | Setup for Google Cloud Run |
| `ali-function-compute.md` | Setup for Alibaba Cloud Function Compute |
| `service-worker.md` | Setup for Service Worker environment |
| `webassembly-wasi.md` | Setup for WebAssembly/WASI runtime |

## guides/

| File | Description |
|------|-------------|
| `best-practices.md` | Best practices for Hono app development |
| `create-hono.md` | CLI tool create-hono — options, templates, flags |
| `faq.md` | Frequently asked questions |
| `helpers.md` | Overview of available helpers |
| `jsx.md` | JSX support in Hono — rendering, components |
| `jsx-dom.md` | JSX DOM mode — client-side JSX |
| `middleware.md` | Writing and using middleware |
| `rpc.md` | RPC mode — type-safe client with hc and Zod |
| `testing.md` | Testing Hono apps |
| `validation.md` | Request validation with Zod and other validators |

## helpers/

| File | Description |
|------|-------------|
| `accepts.md` | Accept header negotiation helper |
| `adapter.md` | Platform adapter helpers (env, getRuntimeKey) |
| `conninfo.md` | Connection info helper (IP address, etc.) |
| `cookie.md` | Cookie get/set/delete helpers |
| `css.md` | CSS-in-JS helper for styled components |
| `dev.md` | Dev helper — showRoutes, getRouterName |
| `factory.md` | Factory helper — createFactory, createMiddleware |
| `html.md` | HTML helper — html tagged template literal |
| `jwt.md` | JWT sign/verify helpers |
| `proxy.md` | Proxy helper for forwarding requests |
| `route.md` | Route helper for typed route definitions |
| `ssg.md` | Static Site Generation helper |
| `streaming.md` | Streaming response helpers |
| `testing.md` | Testing helper — testClient |
| `websocket.md` | WebSocket upgrade helper |

## middleware/builtin/

| File | Description |
|------|-------------|
| `basic-auth.md` | Basic authentication middleware |
| `bearer-auth.md` | Bearer token authentication middleware |
| `body-limit.md` | Request body size limit middleware |
| `cache.md` | Cache-Control / CDN caching middleware |
| `combine.md` | Middleware combinator (some, every, except) |
| `compress.md` | Response compression (gzip, deflate) middleware |
| `context-storage.md` | AsyncLocalStorage-based context storage |
| `cors.md` | CORS middleware |
| `csrf.md` | CSRF protection middleware |
| `etag.md` | ETag response caching middleware |
| `ip-restriction.md` | IP address allow/block list middleware |
| `jsx-renderer.md` | JSX renderer middleware for layout/template support |
| `jwk.md` | JWK (JSON Web Key) authentication middleware |
| `jwt.md` | JWT authentication middleware |
| `language.md` | Language/locale detection middleware |
| `logger.md` | HTTP request logger middleware |
| `method-override.md` | HTTP method override middleware |
| `pretty-json.md` | Pretty-print JSON response middleware |
| `request-id.md` | Request ID generation middleware |
| `secure-headers.md` | Security headers middleware (CSP, HSTS, etc.) |
| `timeout.md` | Request timeout middleware |
| `timing.md` | Server-Timing header middleware |
| `trailing-slash.md` | Trailing slash redirect/strip middleware |

## middleware/ (root)

| File | Description |
|------|-------------|
| `third-party.md` | Index of community third-party middleware packages |
