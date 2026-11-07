---
name: olore-hono-latest
description: Local hono documentation reference (latest). Hono web framework documentation. Use for ultrafast edge/serverless apps, routing, middleware, Cloudflare Workers, Deno, Bun, and Node.js adapters.
---

# hono Documentation

Hono web framework documentation. Use for ultrafast edge/serverless apps, routing, middleware, Cloudflare Workers, Deno, Bun, and Node.js adapters.

## Documentation Structure

```
contents/
├── agents/             # Hono CLI and coding-agent guidance (2 files)
├── api/                # App, Context, Request, routing, presets (7 files)
├── concepts/           # Philosophy, routers, stacks, benchmarks (7 files)
├── getting-started/    # Setup per runtime/platform (20 files)
├── guides/             # RPC, JSX, validation, testing, best practices (11 files)
├── helpers/            # Built-in helpers: cookie, jwt, ssg, streaming... (15 files)
└── middleware/         # Built-in (25 files) and third-party middleware (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started | `contents/getting-started/basic.md`, `contents/guides/create-hono.md` |
| Routing | `contents/api/routing.md`, `contents/api/hono.md` |
| Context and request | `contents/api/context.md`, `contents/api/request.md` |
| Error handling | `contents/api/exception.md` |
| Middleware | `contents/guides/middleware.md`, `contents/middleware/builtin/cors.md` |
| Validation | `contents/guides/validation.md` |
| RPC client | `contents/guides/rpc.md` |
| JSX | `contents/guides/jsx.md`, `contents/guides/jsx-dom.md` |
| Auth | `contents/middleware/builtin/jwt.md`, `contents/middleware/builtin/basic-auth.md`, `contents/helpers/jwt.md` |
| Cloudflare / Deno / Bun / Node | `contents/getting-started/cloudflare-workers.md`, `deno.md`, `bun.md`, `nodejs.md` |
| Testing | `contents/guides/testing.md`, `contents/helpers/testing.md` |
| Migration to v5 | `contents/guides/migrating-to-v5.md` |

## When to use

Use this skill when the user asks about:
- Building Hono apps: routing, Context, middleware, validation
- Deploying Hono to Cloudflare Workers, Deno, Bun, Node.js, AWS Lambda, Vercel, etc.
- Hono RPC client, JSX, helpers (cookie, JWT, SSG, streaming, WebSocket)
- Built-in or third-party Hono middleware, and the Hono CLI

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
