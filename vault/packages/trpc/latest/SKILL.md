---
name: olore-trpc-latest
description: Local tRPC documentation reference (latest). tRPC documentation. Use for end-to-end typesafe APIs, React Query integration, Next.js adapters, subscriptions, and TypeScript RPC.
---

# tRPC Documentation

tRPC documentation. Use for end-to-end typesafe APIs, React Query integration, Next.js adapters, subscriptions, and TypeScript RPC.

## Documentation Structure

```
contents/
├── main/               # Getting started and core concepts (6 files)
├── server/             # Server-side API and configuration (23 files)
│   └── adapters/       # Server adapters for different platforms (6 files)
├── client/             # Client libraries and integrations (43 files)
│   ├── links/          # Link configuration (12 files)
│   ├── nextjs/         # Next.js integration (7 files)
│   ├── react/          # React hooks integration (15 files)
│   ├── tanstack-react-query/  # TanStack React Query integration (4 files)
│   └── vanilla/        # Vanilla TypeScript client (4 files)
├── migration/          # Migration guides (1 file)
├── further/            # FAQ and additional resources (3 files)
└── community/          # Community resources (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting Started | `contents/main/quickstart.mdx`, `contents/main/getting-started.mdx`, `contents/main/concepts.mdx` |
| Server Setup | `contents/server/routers.md`, `contents/server/procedures.md`, `contents/server/context.md` |
| Server Middleware & Auth | `contents/server/middlewares.md`, `contents/server/authorization.md` |
| Error Handling | `contents/server/error-handling.md`, `contents/server/error-formatting.md` |
| Input Validation | `contents/server/validators.md` |
| Server Adapters | `contents/server/adapters-intro.md`, `contents/server/adapters/nextjs.md`, `contents/server/adapters/express.md` |
| Real-time / Subscriptions | `contents/server/subscriptions.md`, `contents/server/websockets.md` |
| Next.js Integration | `contents/client/nextjs/setup.mdx`, `contents/client/nextjs/ssr.md`, `contents/client/nextjs/ssg.md` |
| React Hooks | `contents/client/react/setup.mdx`, `contents/client/react/useQuery.md`, `contents/client/react/useMutation.md` |
| React Query Integration | `contents/client/tanstack-react-query/setup.mdx`, `contents/client/tanstack-react-query/usage.mdx` |
| Vanilla TypeScript Client | `contents/client/vanilla/setup.mdx`, `contents/client/vanilla/introduction.md` |
| Client Links | `contents/client/links/overview.md`, `contents/client/links/httpBatchLink.md` |
| Type Inference | `contents/client/react/infer-types.md`, `contents/client/vanilla/infer-types.md` |
| Migration | `contents/migration/migrate-from-v10-to-v11.mdx` |
| FAQ & Troubleshooting | `contents/further/faq.mdx` |

## When to use

Use this skill when the user asks about:
- Setting up tRPC server or client
- Creating type-safe APIs with TypeScript
- Integrating tRPC with Next.js or React
- Using React hooks (useQuery, useMutation, etc.)
- Server adapters (Express, Fastify, AWS Lambda, etc.)
- Middleware and authorization patterns
- Input validation with Zod
- Error handling and formatting
- Real-time subscriptions and WebSockets
- SSR/SSG with Next.js
- Client configuration and links
- Type inference and TypeScript usage
- Migrating between tRPC versions

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
