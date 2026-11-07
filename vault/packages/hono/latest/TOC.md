# hono Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` (root) | Landing page: what Hono is and why | 1 |
| `contents/agents/` | Hono CLI and guidance for coding agents | 2 |
| `contents/api/` | Core API reference (app, context, request, routing) | 7 |
| `contents/concepts/` | Philosophy, routers, stacks, web standards | 7 |
| `contents/getting-started/` | Setup per runtime/platform | 20 |
| `contents/guides/` | How-to guides (RPC, JSX, validation, testing) | 11 |
| `contents/helpers/` | Built-in helper utilities (`hono/*`) | 15 |
| `contents/middleware/` | Third-party middleware list | 1 |
| `contents/middleware/builtin/` | Built-in middleware reference | 25 |

## (root)

| File | Description |
|------|-------------|
| `index.md` | Hono landing page: features, quick example, and highlights of the framework |

## agents/

| File | Description |
|------|-------------|
| `index.md` | What Hono provides so coding agents work well with it (project creation, docs, tooling) |
| `cli.md` | Hono CLI (`@hono/cli`): inspect routes, send test requests, benchmark and generate SSG without a server |

## api/

| File | Description |
|------|-------------|
| `index.md` | Short overview of Hono's API built on Web Standards |
| `hono.md` | The `Hono` app object: routes, `fetch`, `onError`, `notFound`, `mount`, options |
| `routing.md` | Route definitions: params, wildcards, regex, grouping, base path, hostname routing |
| `context.md` | The `Context` object: `c.req`, `c.json`, `c.html`, `c.set/get`, headers, status, render |
| `request.md` | `HonoRequest`: param, query, header, `json()`, `parseBody`, `valid` |
| `exception.md` | `HTTPException` for throwing HTTP errors and custom responses |
| `presets.md` | Presets (`hono`, `hono/quick`, `hono/tiny`) and router trade-offs |

## concepts/

| File | Description |
|------|-------------|
| `motivation.md` | Philosophy and why Hono was created |
| `web-standard.md` | Hono's reliance on Web Standard APIs and runtime portability |
| `routers.md` | Router implementations (RegExpRouter, TrieRouter, SmartRouter, LinearRouter, PatternRouter) |
| `middleware.md` | Short conceptual explanation of middleware and handlers |
| `developer-experience.md` | TypeScript-first DX and type safety overview |
| `stacks.md` | Hono Stacks: combining validators, RPC, and client for full-stack type safety |
| `benchmarks.md` | Router and runtime benchmark results |

## getting-started/

| File | Description |
|------|-------------|
| `basic.md` | Basic setup: create-hono starter, hello world, routing, running on each runtime |
| `cloudflare-workers.md` | Deploying Hono on Cloudflare Workers with Wrangler and bindings |
| `cloudflare-workers-vite.md` | Cloudflare Workers with the Vite plugin |
| `cloudflare-pages.md` | Cloudflare Pages setup, Functions, and Pages Functions deployment |
| `deno.md` | Running Hono on Deno, JSR/npm imports, Deno Deploy |
| `bun.md` | Running Hono on Bun, static files, testing |
| `nodejs.md` | Node.js adapter (`@hono/node-server`), static files, HTTP/2, Node.js APIs |
| `aws-lambda.md` | AWS Lambda adapter, streaming, and AWS CDK deployment |
| `lambda-edge.md` | Lambda@Edge usage with CloudFront |
| `azure-functions.md` | Deploying Hono on Azure Functions |
| `google-cloud-run.md` | Deploying Hono to Google Cloud Run |
| `fastly.md` | Fastly Compute setup and deployment |
| `netlify.md` | Netlify Edge Functions setup |
| `vercel.md` | Deploying Hono on Vercel |
| `nextjs.md` | Using Hono inside Next.js route handlers |
| `supabase-functions.md` | Supabase Edge Functions with Hono |
| `ali-function-compute.md` | Alibaba Cloud Function Compute deployment |
| `cloudbase.md` | Tencent CloudBase deployment |
| `service-worker.md` | Using Hono in a browser Service Worker |
| `webassembly-wasi.md` | Running Hono on WebAssembly with WASI |

## guides/

| File | Description |
|------|-------------|
| `best-practices.md` | Recommended app structure, avoiding controllers, using `app.route` and factories |
| `create-hono.md` | The `create-hono` project scaffolding CLI and its options |
| `faq.md` | Frequently asked questions |
| `helpers.md` | Index of built-in helpers |
| `jsx.md` | Server-side JSX: setup, components, Fragment, async components, Suspense |
| `jsx-dom.md` | Client Components with `hono/jsx/dom`: hooks, state, rendering |
| `middleware.md` | Writing and using middleware, execution order, custom middleware |
| `migrating-to-v5.md` | Migration guide to Hono v5: breaking changes |
| `rpc.md` | RPC client (`hc`): type-safe calls, status codes, path params, inference helpers |
| `testing.md` | Testing Hono apps with `app.request` and the test client |
| `validation.md` | Validators, Zod/Standard Schema integration, hooks, and error handling |

## helpers/

| File | Description |
|------|-------------|
| `accepts.md` | Parse and negotiate `Accept` headers |
| `adapter.md` | Platform-agnostic `env()`, `getRuntimeKey()` helpers |
| `conninfo.md` | Get client connection info such as remote address |
| `cookie.md` | Get, set, delete, and sign cookies |
| `css.md` | CSS-in-JS(X) via `hono/css` |
| `dev.md` | Development helpers like `showRoutes` and `getRouterName` |
| `factory.md` | `createFactory` / `createMiddleware` helpers for typed components |
| `html.md` | `html` tagged template and `raw()` for safe HTML |
| `jwt.md` | Encode, decode, sign, and verify JWTs |
| `proxy.md` | Reverse proxy helper for forwarding requests |
| `route.md` | Route info helpers (`matchedRoutes`, `routePath`) for debugging |
| `ssg.md` | Static site generation helper and plugins |
| `streaming.md` | Streaming responses: `stream`, `streamText`, `streamSSE` |
| `testing.md` | `testClient` for type-safe testing |
| `websocket.md` | Server-side WebSocket helper per runtime |

## middleware/

| File | Description |
|------|-------------|
| `third-party.md` | List of third-party middleware (validators, auth, GraphQL, Sentry, etc.) |

## middleware/builtin/

| File | Description |
|------|-------------|
| `basic-auth.md` | HTTP Basic authentication |
| `bearer-auth.md` | Bearer token authentication |
| `body-limit.md` | Limit request body size |
| `cache.md` | Cache responses via the Cache API |
| `combine.md` | Combine multiple middleware with `some`, `every`, `except` |
| `compress.md` | Gzip/deflate response compression |
| `context-storage.md` | Store Context in AsyncLocalStorage for global access |
| `cors.md` | Cross-Origin Resource Sharing configuration |
| `csrf.md` | CSRF protection via Origin and Sec-Fetch-Site checks |
| `etag.md` | Automatic ETag headers |
| `ip-restriction.md` | Allow/deny by IP address |
| `jsx-renderer.md` | Layouts for JSX with `c.render()` |
| `jwk.md` | JWK-based token authentication |
| `jwt.md` | JWT authentication |
| `language.md` | Detect the user's preferred language |
| `logger.md` | Simple request logger |
| `method-not-allowed.md` | Return 405 with `Allow` header |
| `method-override.md` | Override HTTP method via form field or header |
| `mount.md` | Mount applications built with other frameworks |
| `pretty-json.md` | Pretty-print JSON via `?pretty` |
| `request-id.md` | Generate a unique request ID |
| `secure-headers.md` | Security headers setup |
| `timeout.md` | Request timeouts |
| `timing.md` | Server-Timing headers |
| `trailing-slash.md` | Append or trim trailing slashes |
