---
name: olore-trpc-latest
description: Local tRPC documentation reference (latest). tRPC documentation. Use for end-to-end typesafe APIs, React Query integration, Next.js adapters, subscriptions, and TypeScript RPC.
---

# tRPC Documentation

tRPC documentation. Use for end-to-end typesafe APIs, React Query integration, Next.js adapters, subscriptions, and TypeScript RPC.

## Documentation Structure

```
contents/
├── main/                          # Introduction, quickstart, concepts (5 files)
├── server/                        # Routers, procedures, middleware, adapters (19 files)
├── client/                        # Client integrations (47 files)
│   ├── links/                     # HTTP, WebSocket, and utility links (10 files)
│   ├── react/                     # @trpc/react-query hooks (15 files)
│   ├── nextjs/                    # Next.js App Router & Pages Router (9 files)
│   ├── tanstack-react-query/      # Next-gen TanStack Query integration (5 files)
│   └── vanilla/                   # Framework-agnostic client (4 files)
├── migration/                     # Migration guides (1 file)
└── further/                       # FAQ and HTTP RPC spec (2 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started | `contents/main/introduction.mdx`, `contents/main/quickstart.mdx`, `contents/main/concepts.mdx` |
| Server setup | `contents/server/overview.md`, `contents/server/routers.md`, `contents/server/procedures.md` |
| Middleware & auth | `contents/server/middlewares.md`, `contents/server/authorization.md`, `contents/server/context.md` |
| Input validation | `contents/server/validators.md` |
| Error handling | `contents/server/error-handling.md`, `contents/server/error-formatting.md`, `contents/further/faq.mdx` |
| React hooks | `contents/client/react/useQuery.md`, `contents/client/react/useMutation.md`, `contents/client/react/useSubscription.md`, `contents/client/react/useUtils.mdx` |
| Next.js (App Router) | `contents/client/nextjs/app-router/setup.mdx`, `contents/client/nextjs/app-router/server-actions.mdx` |
| Next.js (Pages Router) | `contents/client/nextjs/pages-router/setup.mdx`, `contents/client/nextjs/pages-router/ssr.md` |
| TanStack Query integration | `contents/client/tanstack-react-query/overview.md`, `contents/client/tanstack-react-query/setup.mdx`, `contents/client/tanstack-react-query/usage.mdx` |
| Subscriptions & WebSockets | `contents/server/subscriptions.md`, `contents/server/websockets.md`, `contents/client/links/wsLink.md`, `contents/client/links/httpSubscriptionLink.md` |
| Links & transport | `contents/client/links/overview.md`, `contents/client/links/httpLink.md`, `contents/client/links/httpBatchLink.md`, `contents/client/links/splitLink.mdx` |
| Server adapters | `contents/server/adapters/express.md`, `contents/server/adapters/nextjs.md`, `contents/server/adapters/fastify.md`, `contents/server/adapters/aws-lambda.md` |
| Type inference | `contents/client/react/infer-types.md`, `contents/client/vanilla/infer-types.md` |
| Data transformers | `contents/server/data-transformers.md` |
| Vanilla client | `contents/client/vanilla/overview.md`, `contents/client/vanilla/setup.mdx` |
| Migration v10 to v11 | `contents/migration/migrate-from-v10-to-v11.mdx` |
| HTTP RPC spec | `contents/further/rpc.md` |

## When to use

Use this skill when the user asks about:
- Setting up tRPC server with routers and procedures
- React Query / TanStack Query hooks (useQuery, useMutation, useSubscription)
- Next.js integration (App Router, Pages Router, server actions)
- WebSocket and SSE subscriptions
- Client links (HTTP, batching, WebSocket, splitLink)
- Middleware, authorization, and context patterns
- Input validation with Zod or other validators
- Error handling and data transformers
- Migrating from tRPC v10 to v11
- Server adapters (Express, Fastify, Next.js, AWS Lambda)
- Type-safe client setup and type inference

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
