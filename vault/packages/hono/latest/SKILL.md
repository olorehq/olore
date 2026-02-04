---
name: olore-hono-latest
description: Local Hono documentation reference (latest). Hono web framework documentation. Use for ultrafast edge/serverless apps, routing, middleware, Cloudflare Workers, Deno, Bun, and Node.js adapters.
---

# Hono Documentation

Hono web framework documentation. Use for ultrafast edge/serverless apps, routing, middleware, Cloudflare Workers, Deno, Bun, and Node.js adapters.

## Documentation Structure

```
contents/
├── api/              # Core API reference (6 files)
├── concepts/         # Framework concepts (4 files)
├── getting-started/  # Platform setup guides (18 files)
├── guides/           # Usage guides (11 files)
├── helpers/          # Helper utilities (15 files)
└── middleware/       # Middleware reference (24 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Core API | `contents/api/hono.md`, `contents/api/context.md`, `contents/api/routing.md` |
| Getting Started | `contents/getting-started/basic.md`, `contents/getting-started/cloudflare-workers.md` |
| Routing | `contents/api/routing.md`, `contents/concepts/routers.md` |
| Middleware | `contents/concepts/middleware.md`, `contents/guides/middleware.md` |
| Authentication | `contents/middleware/builtin/basic-auth.md`, `contents/middleware/builtin/bearer-auth.md`, `contents/middleware/builtin/jwt.md` |
| Platform Adapters | `contents/getting-started/cloudflare-workers.md`, `contents/getting-started/deno.md`, `contents/getting-started/bun.md`, `contents/getting-started/nodejs.md` |
| JSX/Templates | `contents/guides/jsx.md`, `contents/guides/jsx-dom.md`, `contents/middleware/builtin/jsx-renderer.md` |
| Request Handling | `contents/api/request.md`, `contents/api/context.md` |
| Validation | `contents/guides/validation.md` |
| Testing | `contents/guides/testing.md`, `contents/helpers/testing.md` |
| Helpers | `contents/helpers/cookie.md`, `contents/helpers/html.md`, `contents/helpers/jwt.md`, `contents/helpers/streaming.md` |
| RPC | `contents/guides/rpc.md` |
| Security | `contents/middleware/builtin/cors.md`, `contents/middleware/builtin/csrf.md`, `contents/middleware/builtin/secure-headers.md` |
| Performance | `contents/middleware/builtin/compress.md`, `contents/middleware/builtin/cache.md` |

## When to use

Use this skill when the user asks about:
- Hono framework setup and configuration
- Building edge/serverless applications
- Platform-specific deployment (Cloudflare Workers, Deno, Bun, Node.js, AWS Lambda, Vercel, etc.)
- Routing and request handling
- Middleware (authentication, CORS, JWT, compression, etc.)
- JSX and templating
- Helper utilities (cookies, streaming, HTML, etc.)
- RPC functionality
- Testing Hono applications
- Request validation
- Web Standards compliance

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
