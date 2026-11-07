---
name: olore-trpc-latest
description: Local tRPC documentation reference (latest). tRPC documentation. Use for end-to-end typesafe APIs, React Query integration, Next.js adapters, subscriptions, and TypeScript RPC.
---

# tRPC Documentation

tRPC documentation. Use for end-to-end typesafe APIs, React Query integration, Next.js adapters, subscriptions, and TypeScript RPC.

## Documentation Structure

```
contents/
├── (root)                          # Intro, quickstart, concepts, FAQ, RPC spec, migration (11 files)
├── client/                         # Client overview, CORS, headers (7 files)
│   ├── links/                      # HTTP, batch, SSE, WebSocket, retry, split links (9 files)
│   ├── nextjs/                     # App Router, Server Actions, Pages Router (7 files)
│   ├── react/                      # Classic React Query hooks, deprecated (14 files)
│   ├── tanstack-react-query/       # TanStack React Query integration (6 files)
│   └── vanilla/                    # Vanilla TS client (4 files)
└── server/                         # Routers, procedures, middleware, validators, subscriptions (19 files)
    └── adapters/                   # Express, Fastify, Next.js, Lambda, fetch, standalone (6 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started | `contents/quickstart.md`, `contents/concepts.md` |
| Routers and procedures | `contents/server/routers.md`, `contents/server/procedures.md` |
| Context and middleware | `contents/server/context.md`, `contents/server/middlewares.md` |
| Input validation | `contents/server/validators.md` |
| Subscriptions | `contents/server/subscriptions.md`, `contents/client/links/httpSubscriptionLink.md`, `contents/client/links/wsLink.md` |
| Server adapters | `contents/server/adapters/` |
| TanStack React Query | `contents/client/tanstack-react-query/setup.md`, `contents/client/tanstack-react-query/usage.md` |
| Next.js | `contents/client/nextjs/app-router-setup.md`, `contents/client/nextjs/server-actions.md` |
| Links | `contents/client/links.md`, `contents/client/links/httpBatchLink.md` |
| Vanilla client | `contents/client/vanilla/setup.md` |
| Errors | `contents/server/error-handling.md`, `contents/server/error-formatting.md` |
| Migration | `contents/migrate-from-v10-to-v11.md` |

## When to use

Use this skill when the user asks about:
- Defining tRPC routers, procedures, context and middleware
- Using tRPC with React, TanStack React Query or Next.js
- Links, subscriptions, WebSockets and server adapters

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
