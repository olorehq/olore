---
name: olore-trpc-11.25.0
description: Local tRPC documentation reference (11.25.0). tRPC documentation. Use for end-to-end typesafe APIs, React Query integration, Next.js adapters, subscriptions, and TypeScript RPC.
---

# tRPC Documentation

tRPC lets you build end-to-end typesafe APIs without schemas or code generation. Define procedures on the server, call them from the client with full TypeScript inference. Version 11.25.0.

## Documentation Structure

```
contents/
├── (root)                         # Introduction, quickstart, concepts, FAQ, RPC spec, OpenAPI (11 files)
├── server/                        # Routers, procedures, middleware, subscriptions (19 files)
├── server/adapters/               # Express, Fastify, Next.js, Lambda, fetch, standalone (6 files)
├── client/                        # Client overview, CORS, headers (7 files)
├── client/links/                  # HTTP, WebSocket, batch, SSE links (9 files)
├── client/react/                  # React Query hooks (14 files)
├── client/nextjs/                 # Next.js App Router + pages-router/ (2 + 5 files)
├── client/tanstack-react-query/   # TanStack React Query integration (6 files)
└── client/vanilla/                # Vanilla TypeScript client (4 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started | `contents/quickstart.md`, `contents/introduction.md`, `contents/concepts.md` |
| Routers and procedures | `contents/server/routers.md`, `contents/server/procedures.md` |
| Input validation | `contents/server/validators.md` |
| Context and auth | `contents/server/context.md`, `contents/server/authorization.md` |
| Middleware | `contents/server/middlewares.md` |
| Error handling | `contents/server/error-handling.md`, `contents/server/error-formatting.md` |
| Subscriptions | `contents/server/subscriptions.md`, `contents/server/websockets.md`, `contents/client/links/httpSubscriptionLink.md`, `contents/client/links/wsLink.md` |
| Data transformers | `contents/server/data-transformers.md` |
| Adapters | `contents/server/adapters/` |
| React Query hooks | `contents/client/react/useQuery.md`, `contents/client/react/useMutation.md`, `contents/client/react/useUtils.md` |
| TanStack React Query | `contents/client/tanstack-react-query/setup.md`, `contents/client/tanstack-react-query/usage.md` |
| Next.js | `contents/client/nextjs/app-router-setup.md`, `contents/client/nextjs/pages-router/setup.md` |
| Links and batching | `contents/client/links/httpBatchLink.md`, `contents/client/links/httpLink.md` |
| OpenAPI / RPC spec | `contents/openapi.md`, `contents/rpc.md` |
| Migration from v10 | `contents/migrate-from-v10-to-v11.md` |
| FAQ | `contents/faq.md` |

## When to use

Use this skill when the user asks about:
- Setting up a tRPC server with routers and procedures
- Connecting a tRPC client in React, Next.js, or vanilla TypeScript
- Middleware, context, authorization, subscriptions, and links
- Integrating with Next.js or TanStack React Query
- Migrating from tRPC v10 to v11

## How to find information

1. Use the Topic Guide above to identify relevant files
2. Read `TOC.md` for a complete file listing by directory
3. Read specific files from `contents/{path}`
