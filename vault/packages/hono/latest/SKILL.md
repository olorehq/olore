---
name: olore-hono-latest
description: Local Hono documentation reference (latest). Hono web framework documentation. Use for ultrafast edge/serverless apps, routing, middleware, Cloudflare Workers, Deno, Bun, and Node.js adapters.
---

# Hono Documentation

Hono web framework documentation. Use for ultrafast edge/serverless apps, routing, middleware, Cloudflare Workers, Deno, Bun, and Node.js adapters.

## Documentation Structure

```
contents/
├── index.md              # Overview, features, quick start (1 file)
├── api/                  # Core API reference (7 files)
├── concepts/             # Conceptual guides — routers, middleware, web standards (5 files)
├── getting-started/      # Platform-specific setup guides (18 files)
├── guides/               # How-to guides — JSX, RPC, validation, testing (10 files)
├── helpers/              # Built-in helper utilities (15 files)
└── middleware/           # Built-in and third-party middleware (24 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / quick start | `contents/index.md`, `contents/getting-started/basic.md` |
| Routing — paths, params, wildcards | `contents/api/routing.md`, `contents/api/hono.md` |
| Context, Request, Response | `contents/api/context.md`, `contents/api/request.md` |
| Middleware — writing and using | `contents/guides/middleware.md`, `contents/concepts/middleware.md` |
| RPC / type-safe client (hc) | `contents/guides/rpc.md`, `contents/concepts/stacks.md` |
| JSX and rendering | `contents/guides/jsx.md`, `contents/guides/jsx-dom.md`, `contents/middleware/builtin/jsx-renderer.md` |
| Validation (Zod, etc.) | `contents/guides/validation.md` |
| Testing | `contents/guides/testing.md`, `contents/helpers/testing.md` |
| Authentication (Basic, Bearer, JWT, JWK) | `contents/middleware/builtin/basic-auth.md`, `contents/middleware/builtin/bearer-auth.md`, `contents/middleware/builtin/jwt.md`, `contents/middleware/builtin/jwk.md`, `contents/helpers/jwt.md` |
| CORS, CSRF, Security headers | `contents/middleware/builtin/cors.md`, `contents/middleware/builtin/csrf.md`, `contents/middleware/builtin/secure-headers.md` |
| Cookies | `contents/helpers/cookie.md` |
| Streaming responses | `contents/helpers/streaming.md` |
| WebSocket | `contents/helpers/websocket.md` |
| Static Site Generation (SSG) | `contents/helpers/ssg.md` |
| Cloudflare Workers setup | `contents/getting-started/cloudflare-workers.md` |
| Cloudflare Pages setup | `contents/getting-started/cloudflare-pages.md` |
| AWS Lambda / Lambda@Edge setup | `contents/getting-started/aws-lambda.md`, `contents/getting-started/lambda-edge.md` |
| Deno setup | `contents/getting-started/deno.md` |
| Bun setup | `contents/getting-started/bun.md` |
| Node.js setup | `contents/getting-started/nodejs.md` |
| Vercel / Netlify / Supabase setup | `contents/getting-started/vercel.md`, `contents/getting-started/netlify.md`, `contents/getting-started/supabase-functions.md` |
| Caching, compression, ETag | `contents/middleware/builtin/cache.md`, `contents/middleware/builtin/compress.md`, `contents/middleware/builtin/etag.md` |
| Logging, timing, request ID | `contents/middleware/builtin/logger.md`, `contents/middleware/builtin/timing.md`, `contents/middleware/builtin/request-id.md` |
| HTTP errors and exceptions | `contents/api/exception.md` |
| Factory / middleware creation helpers | `contents/helpers/factory.md` |
| Third-party middleware index | `contents/middleware/third-party.md` |
| Best practices | `contents/guides/best-practices.md` |
| FAQ | `contents/guides/faq.md` |

## When to use

Use this skill when the user asks about:
- Building web APIs or full-stack apps with Hono
- Routing, middleware, context, or request handling in Hono
- Deploying Hono to Cloudflare Workers, Deno, Bun, AWS Lambda, Node.js, Vercel, or other platforms
- RPC mode and type-safe client generation with `hc`
- JSX rendering, validation, streaming, or WebSocket in Hono
- Any built-in middleware (auth, CORS, caching, security headers, etc.)
- Built-in helpers (cookie, JWT, SSG, streaming, testing, etc.)

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
