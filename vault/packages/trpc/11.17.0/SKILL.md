---
name: olore-trpc-11.17.0
description: Local tRPC documentation reference (11.17.0). tRPC documentation. Use for end-to-end typesafe APIs, React Query integration, Next.js adapters, subscriptions, and TypeScript RPC.
---

# tRPC Documentation

tRPC lets you build end-to-end typesafe APIs without schemas or code generation. Define procedures on the server, call them from the client with full TypeScript inference. Version 11.17.0.

## Documentation Structure

```
contents/
├── main/                          # Introduction, concepts, quickstart (4 files)
├── server/                        # Routers, procedures, middleware, adapters (20 files)
├── client/                        # Client overview, links, CORS, headers (4 files)
├── client/links/                  # HTTP, WebSocket, batch, SSE links (9 files)
├── client/react/                  # React Query hooks (useQuery, useMutation, etc.) (14 files)
├── client/nextjs/                 # Next.js App Router and Pages Router (7 files)
├── client/tanstack-react-query/   # TanStack React Query v5 integration (5 files)
├── client/vanilla/                # Vanilla TypeScript client (4 files)
├── further/                       # FAQ, RPC spec, further reading (3 files)
└── migration/                     # v10 to v11 migration guide (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / quickstart | `contents/main/quickstart.mdx`, `contents/main/introduction.mdx`, `contents/main/concepts.mdx` |
| Defining routers and procedures | `contents/server/routers.md`, `contents/server/procedures.md` |
| Input validation | `contents/server/validators.md` |
| Context and authentication | `contents/server/context.md`, `contents/server/authorization.md` |
| Middleware | `contents/server/middlewares.md` |
| Error handling | `contents/server/error-handling.md`, `contents/server/error-formatting.md` |
| Subscriptions / real-time | `contents/server/subscriptions.md`, `contents/server/websockets.md`, `contents/client/links/httpSubscriptionLink.md`, `contents/client/links/wsLink.md` |
| Data transformers (SuperJSON) | `contents/server/data-transformers.md` |
| Server adapters | `contents/server/adapters/express.md`, `contents/server/adapters/nextjs.md`, `contents/server/adapters/fastify.md`, `contents/server/adapters/aws-lambda.md`, `contents/server/adapters/fetch.mdx`, `contents/server/adapters/standalone.md` |
| React Query hooks | `contents/client/react/useQuery.md`, `contents/client/react/useMutation.md`, `contents/client/react/useInfiniteQuery.md`, `contents/client/react/useUtils.mdx` |
| Next.js App Router | `contents/client/nextjs/app-router/setup.mdx`, `contents/client/nextjs/app-router/server-actions.mdx` |
| Next.js Pages Router | `contents/client/nextjs/pages-router/setup.mdx`, `contents/client/nextjs/pages-router/ssr.md`, `contents/client/nextjs/pages-router/ssg.md` |
| TanStack React Query v5 | `contents/client/tanstack-react-query/setup.mdx`, `contents/client/tanstack-react-query/usage.mdx`, `contents/client/tanstack-react-query/migrating.mdx` |
| Vanilla / non-React client | `contents/client/vanilla/setup.mdx`, `contents/client/vanilla/overview.md` |
| HTTP links and batching | `contents/client/links/httpLink.md`, `contents/client/links/httpBatchLink.md`, `contents/client/links/httpBatchStreamLink.md` |
| Custom headers / CORS | `contents/client/headers.md`, `contents/client/cors.md` |
| Type inference | `contents/client/react/infer-types.md`, `contents/client/vanilla/infer-types.md` |
| Server-side rendering / RSC | `contents/client/react/server-components.mdx`, `contents/client/nextjs/pages-router/server-side-helpers.md` |
| OpenAPI / REST integration | `contents/client/openapi.md` |
| Migrating from v10 | `contents/migration/migrate-from-v10-to-v11.mdx` |
| FAQ / troubleshooting | `contents/further/faq.mdx` |
| Wire protocol / RPC spec | `contents/further/rpc.md` |

## When to use

Use this skill when the user asks about:
- Setting up a tRPC server with routers and procedures
- Connecting a tRPC client in React, Next.js, or vanilla TypeScript
- Using useQuery, useMutation, useInfiniteQuery, or other React Query hooks with tRPC
- Configuring middleware, context, or authorization in tRPC
- Setting up real-time subscriptions via SSE or WebSockets
- Integrating tRPC with Next.js App Router or Pages Router
- Batching requests or configuring HTTP/WebSocket links
- Validating inputs with Zod or other validators
- Using SuperJSON or other data transformers
- Migrating from tRPC v10 to v11
- Troubleshooting TypeScript errors or type inference issues

## How to find information

1. Use the Topic Guide above to identify relevant files
2. Read `TOC.md` for a complete file listing by directory
3. Read specific files from `contents/{path}`
