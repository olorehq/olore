# tRPC Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/main/` | Introduction, concepts, quickstart, examples | 4 |
| `contents/server/` | Server-side: routers, procedures, context, middleware, adapters | 20 |
| `contents/client/` | Client overview, CORS, headers, OpenAPI | 4 |
| `contents/client/links/` | HTTP/WebSocket/batch/SSE link types | 9 |
| `contents/client/react/` | React Query hooks and utilities | 14 |
| `contents/client/nextjs/` | Next.js App Router and Pages Router integration | 7 |
| `contents/client/tanstack-react-query/` | TanStack React Query v5 integration | 5 |
| `contents/client/vanilla/` | Vanilla TypeScript client | 4 |
| `contents/further/` | FAQ, HTTP RPC spec, further reading | 3 |
| `contents/migration/` | v10 to v11 migration guide | 1 |

## main/

| File | Description |
|------|-------------|
| `introduction.mdx` | What tRPC is and why to use it |
| `concepts.mdx` | Core concepts: routers, procedures, context |
| `quickstart.mdx` | 5-minute quickstart guide |
| `example-apps.mdx` | Official and community example apps |

## server/

| File | Description |
|------|-------------|
| `overview.md` | Server-side overview |
| `routers.md` | Defining and composing routers |
| `procedures.md` | Query, mutation, and subscription procedures |
| `context.md` | Creating and using context |
| `middlewares.md` | Writing and chaining middleware |
| `authorization.md` | Authorization patterns with middleware |
| `merging-routers.md` | Merging multiple routers |
| `metadata.md` | Procedure metadata |
| `validators.md` | Input/output validation with Zod and others |
| `error-handling.md` | Throwing and handling errors |
| `error-formatting.md` | Customizing error shapes |
| `data-transformers.md` | Serialization with SuperJSON and others |
| `caching.md` | HTTP caching with queries |
| `subscriptions.md` | Server-sent events and real-time subscriptions |
| `websockets.md` | WebSocket support |
| `server-side-calls.md` | Calling procedures server-side |
| `non-json-content-types.md` | Binary, text, and multipart content |
| `adapters-intro.md` | Adapter overview |
| `adapters/standalone.md` | Standalone HTTP server adapter |
| `adapters/express.md` | Express adapter |
| `adapters/fastify.md` | Fastify adapter |
| `adapters/nextjs.md` | Next.js adapter |
| `adapters/aws-lambda.md` | AWS Lambda adapter |
| `adapters/fetch.mdx` | Fetch/edge runtime adapter |

## client/

| File | Description |
|------|-------------|
| `overview.md` | Client overview and setup patterns |
| `cors.md` | CORS configuration |
| `headers.md` | Custom request headers |
| `openapi.md` | OpenAPI integration |

## client/links/

| File | Description |
|------|-------------|
| `overview.md` | Links overview and terminating links |
| `httpLink.md` | Basic HTTP link |
| `httpBatchLink.md` | HTTP request batching |
| `httpBatchStreamLink.md` | Streaming batched responses |
| `httpSubscriptionLink.md` | SSE-based subscriptions link |
| `wsLink.md` | WebSocket link |
| `loggerLink.md` | Request/response logging |
| `splitLink.md` | Conditional link routing |
| `retryLink.md` | Automatic retry on failure |
| `localLink.mdx` | In-process local link (no HTTP) |

## client/react/

| File | Description |
|------|-------------|
| `overview.mdx` | React Query integration overview |
| `setup.mdx` | Provider setup and initialization |
| `useQuery.md` | `useQuery` hook |
| `useMutation.md` | `useMutation` hook |
| `useInfiniteQuery.md` | `useInfiniteQuery` hook |
| `useQueries.md` | `useQueries` hook |
| `useSubscription.md` | `useSubscription` hook |
| `useUtils.mdx` | `useUtils` for cache manipulation |
| `createTRPCQueryUtils.md` | `createTRPCQueryUtils` for SSR |
| `getQueryKey.md` | `getQueryKey` helper |
| `disabling-queries.md` | Disabling/skipping queries |
| `aborting-procedures.md` | Aborting in-flight requests |
| `suspense.md` | React Suspense support |
| `server-components.mdx` | React Server Components usage |
| `infer-types.md` | Inferring types from router |

## client/nextjs/

| File | Description |
|------|-------------|
| `overview.mdx` | Next.js integration overview |
| `app-router/setup.mdx` | App Router setup guide |
| `app-router/server-actions.mdx` | Using tRPC with Server Actions |
| `pages-router/setup.mdx` | Pages Router setup guide |
| `pages-router/ssr.md` | Server-side rendering with tRPC |
| `pages-router/ssg.md` | Static site generation with tRPC |
| `pages-router/server-side-helpers.md` | Server-side helpers for prefetching |
| `pages-router/aborting-procedures.md` | Aborting requests in Pages Router |

## client/tanstack-react-query/

| File | Description |
|------|-------------|
| `overview.md` | TanStack React Query v5 integration overview |
| `setup.mdx` | Setup and configuration |
| `usage.mdx` | Usage patterns and examples |
| `server-components.mdx` | Server Components with TanStack Query |
| `migrating.mdx` | Migrating from @trpc/react-query to TanStack integration |

## client/vanilla/

| File | Description |
|------|-------------|
| `overview.md` | Vanilla client overview |
| `setup.mdx` | Vanilla client setup |
| `infer-types.md` | Type inference with vanilla client |
| `aborting-procedures.md` | Aborting requests |

## further/

| File | Description |
|------|-------------|
| `faq.mdx` | FAQ and troubleshooting |
| `rpc.md` | HTTP RPC wire protocol specification |
| `further-reading.md` | Background: GraphQL comparison, design rationale |

## migration/

| File | Description |
|------|-------------|
| `migrate-from-v10-to-v11.mdx` | Step-by-step v10 to v11 migration guide |
