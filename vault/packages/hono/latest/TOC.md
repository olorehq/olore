# Hono Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/api/` | Core API reference (Hono, Context, routing) | 6 |
| `contents/concepts/` | Core concepts (middleware, routers, web standards) | 4 |
| `contents/getting-started/` | Platform-specific setup guides | 18 |
| `contents/guides/` | Usage guides and best practices | 11 |
| `contents/helpers/` | Helper utilities reference | 15 |
| `contents/middleware/` | Built-in and third-party middleware | 24 |
| `contents/` | Main documentation entry | 1 |

## api/

| File | Description |
|------|-------------|
| `context.md` | Context object API |
| `exception.md` | Exception handling |
| `hono.md` | Main Hono class API |
| `presets.md` | Preset configurations |
| `request.md` | Request handling |
| `routing.md` | Routing API |

## concepts/

| File | Description |
|------|-------------|
| `middleware.md` | Middleware concepts |
| `routers.md` | Router architecture |
| `stacks.md` | Stack concepts |
| `web-standard.md` | Web Standards compliance |

## getting-started/

| File | Description |
|------|-------------|
| `ali-function-compute.md` | Alibaba Cloud Function Compute setup |
| `aws-lambda.md` | AWS Lambda setup |
| `azure-functions.md` | Azure Functions setup |
| `basic.md` | Basic setup guide |
| `bun.md` | Bun runtime setup |
| `cloudflare-pages.md` | Cloudflare Pages setup |
| `cloudflare-workers.md` | Cloudflare Workers setup |
| `deno.md` | Deno runtime setup |
| `fastly.md` | Fastly Compute setup |
| `google-cloud-run.md` | Google Cloud Run setup |
| `lambda-edge.md` | Lambda@Edge setup |
| `netlify.md` | Netlify setup |
| `nextjs.md` | Next.js integration |
| `nodejs.md` | Node.js setup |
| `service-worker.md` | Service Worker setup |
| `supabase-functions.md` | Supabase Functions setup |
| `vercel.md` | Vercel setup |
| `webassembly-wasi.md` | WebAssembly/WASI setup |

## guides/

| File | Description |
|------|-------------|
| `best-practices.md` | Best practices guide |
| `create-hono.md` | Project creation guide |
| `faq.md` | Frequently asked questions |
| `helpers.md` | Using helpers guide |
| `jsx-dom.md` | JSX DOM integration |
| `jsx.md` | JSX usage guide |
| `middleware.md` | Middleware usage guide |
| `others.md` | Other guides |
| `rpc.md` | RPC functionality |
| `testing.md` | Testing guide |
| `validation.md` | Request validation guide |

## helpers/

| File | Description |
|------|-------------|
| `accepts.md` | Content negotiation helper |
| `adapter.md` | Runtime adapter helper |
| `conninfo.md` | Connection info helper |
| `cookie.md` | Cookie handling helper |
| `css.md` | CSS helper |
| `dev.md` | Development helpers |
| `factory.md` | Factory helper |
| `html.md` | HTML helper |
| `jwt.md` | JWT helper |
| `proxy.md` | Proxy helper |
| `route.md` | Route helper |
| `ssg.md` | Static site generation helper |
| `streaming.md` | Streaming helper |
| `testing.md` | Testing helper |
| `websocket.md` | WebSocket helper |

## middleware/builtin/

| File | Description |
|------|-------------|
| `basic-auth.md` | Basic authentication middleware |
| `bearer-auth.md` | Bearer token authentication |
| `body-limit.md` | Body size limit middleware |
| `cache.md` | Caching middleware |
| `combine.md` | Middleware combination |
| `compress.md` | Response compression |
| `context-storage.md` | Context storage middleware |
| `cors.md` | CORS middleware |
| `csrf.md` | CSRF protection |
| `etag.md` | ETag middleware |
| `ip-restriction.md` | IP restriction middleware |
| `jsx-renderer.md` | JSX rendering middleware |
| `jwk.md` | JWK middleware |
| `jwt.md` | JWT authentication middleware |
| `language.md` | Language detection |
| `logger.md` | Request logging |
| `method-override.md` | HTTP method override |
| `pretty-json.md` | JSON formatting |
| `request-id.md` | Request ID middleware |
| `secure-headers.md` | Security headers |
| `timeout.md` | Request timeout |
| `timing.md` | Server timing |
| `trailing-slash.md` | Trailing slash handling |

## middleware/

| File | Description |
|------|-------------|
| `third-party.md` | Third-party middleware overview |

## Root Files

| File | Description |
|------|-------------|
| `index.md` | Main documentation entry point |
