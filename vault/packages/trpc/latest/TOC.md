# tRPC Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/main/` | Introduction, quickstart, and core concepts | 5 |
| `contents/server/` | Server-side: routers, procedures, middleware, adapters | 19 |
| `contents/client/` | Client-side: links, React, Next.js, vanilla, TanStack Query | 47 |
| `contents/migration/` | Migration guides (v10 to v11) | 1 |
| `contents/further/` | FAQ, troubleshooting, HTTP RPC spec | 2 |

## main/

| File | Description |
|------|-------------|
| `main/introduction.mdx` | What is tRPC and why use it |
| `main/quickstart.mdx` | Getting started quickly with tRPC |
| `main/concepts.mdx` | Core concepts and mental model |
| `main/example-apps.mdx` | Official and community example apps |
| `main/tanstack-intent.mdx` | TanStack Intent / AI agent skills setup |

## server/

| File | Description |
|------|-------------|
| `server/overview.md` | Server overview and initialization |
| `server/routers.md` | Defining routers |
| `server/procedures.md` | Defining procedures (query, mutation, subscription) |
| `server/context.md` | Creating and using context |
| `server/middlewares.md` | Writing and applying middleware |
| `server/authorization.md` | Authorization patterns |
| `server/merging-routers.md` | Merging multiple routers |
| `server/validators.md` | Input/output validation with Zod and others |
| `server/metadata.md` | Procedure metadata |
| `server/data-transformers.md` | Using data transformers (superjson, etc.) |
| `server/error-handling.md` | Handling errors |
| `server/error-formatting.md` | Customizing error formats |
| `server/caching.md` | Response caching |
| `server/subscriptions.md` | Real-time subscriptions |
| `server/websockets.md` | WebSocket support |
| `server/server-side-calls.md` | Making server-side tRPC calls |
| `server/non-json-content-types.md` | Non-JSON content types |
| `server/adapters-intro.md` | Adapters overview |
| `server/adapters/express.md` | Express adapter |
| `server/adapters/fastify.md` | Fastify adapter |
| `server/adapters/nextjs.md` | Next.js adapter |
| `server/adapters/aws-lambda.md` | AWS Lambda adapter |
| `server/adapters/fetch.mdx` | Fetch/edge runtime adapter |
| `server/adapters/standalone.md` | Standalone HTTP server adapter |

## client/

### Links

| File | Description |
|------|-------------|
| `client/links/overview.md` | Links overview and chain concept |
| `client/links/httpLink.md` | Standard HTTP link |
| `client/links/httpBatchLink.md` | HTTP batching link |
| `client/links/httpBatchStreamLink.md` | HTTP batch streaming link |
| `client/links/httpSubscriptionLink.md` | HTTP subscription (SSE) link |
| `client/links/wsLink.md` | WebSocket link |
| `client/links/localLink.mdx` | Local/in-process link |
| `client/links/loggerLink.md` | Logger link for debugging |
| `client/links/retryLink.md` | Retry link |
| `client/links/splitLink.mdx` | Split link (conditional routing) |

### React (TanStack Query v4/v5 via @trpc/react-query)

| File | Description |
|------|-------------|
| `client/react/overview.mdx` | React integration overview |
| `client/react/setup.mdx` | Setting up @trpc/react-query |
| `client/react/useQuery.md` | useQuery hook |
| `client/react/useMutation.md` | useMutation hook |
| `client/react/useSubscription.md` | useSubscription hook |
| `client/react/useInfiniteQuery.md` | useInfiniteQuery hook |
| `client/react/useQueries.md` | useQueries hook |
| `client/react/useUtils.mdx` | useUtils for cache manipulation |
| `client/react/createTRPCQueryUtils.md` | createTRPCQueryUtils utility |
| `client/react/getQueryKey.md` | getQueryKey helper |
| `client/react/infer-types.md` | Inferring types on the client |
| `client/react/disabling-queries.md` | Disabling queries |
| `client/react/aborting-procedures.md` | Aborting in-flight requests |
| `client/react/suspense.md` | React Suspense integration |
| `client/react/server-components.mdx` | React Server Components support |

### Next.js

| File | Description |
|------|-------------|
| `client/nextjs/overview.mdx` | Next.js integration overview |
| `client/nextjs/starter-projects.md` | Starter project templates |
| `client/nextjs/app-router/setup.mdx` | App Router setup |
| `client/nextjs/app-router/server-actions.mdx` | Server Actions with tRPC |
| `client/nextjs/pages-router/setup.mdx` | Pages Router setup |
| `client/nextjs/pages-router/ssr.md` | Server-side rendering |
| `client/nextjs/pages-router/ssg.md` | Static site generation |
| `client/nextjs/pages-router/server-side-helpers.md` | Server-side helpers |
| `client/nextjs/pages-router/aborting-procedures.md` | Aborting procedures in Pages Router |

### TanStack React Query (Next-gen integration)

| File | Description |
|------|-------------|
| `client/tanstack-react-query/overview.md` | TanStack React Query integration overview |
| `client/tanstack-react-query/setup.mdx` | Setup guide |
| `client/tanstack-react-query/usage.mdx` | Usage patterns |
| `client/tanstack-react-query/server-components.mdx` | Server components support |
| `client/tanstack-react-query/migrating.mdx` | Migrating to TanStack Query integration |

### Vanilla Client

| File | Description |
|------|-------------|
| `client/vanilla/overview.md` | Vanilla (framework-agnostic) client overview |
| `client/vanilla/setup.mdx` | Setting up the vanilla client |
| `client/vanilla/infer-types.md` | Type inference for vanilla client |
| `client/vanilla/aborting-procedures.md` | Aborting requests |

### Other Client

| File | Description |
|------|-------------|
| `client/overview.md` | Client overview |
| `client/cors.md` | CORS configuration |
| `client/headers.md` | Custom headers |
| `client/openapi.md` | OpenAPI integration |

## migration/

| File | Description |
|------|-------------|
| `migration/migrate-from-v10-to-v11.mdx` | Migration guide from v10 to v11 |

## further/

| File | Description |
|------|-------------|
| `further/faq.mdx` | FAQ and troubleshooting |
| `further/rpc.md` | HTTP RPC specification and method mapping |
