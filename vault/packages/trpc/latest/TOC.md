# tRPC Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/main/` | Getting started and core concepts | 6 |
| `contents/server/` | Server-side API and configuration | 23 |
| `contents/client/` | Client libraries and integrations | 43 |
| `contents/migration/` | Migration guides | 1 |
| `contents/further/` | FAQ and additional resources | 3 |
| `contents/community/` | Community resources | 1 |

## main/

| File | Description |
|------|-------------|
| `introduction.mdx` | Introduction to tRPC |
| `quickstart.mdx` | Quick start guide |
| `getting-started.mdx` | Detailed getting started guide |
| `concepts.mdx` | Core concepts and architecture |
| `example-apps.mdx` | Example applications and starter templates |
| `videos-and-community-resources.mdx` | Video tutorials and community resources |

## server/

| File | Description |
|------|-------------|
| `routers.md` | Creating and organizing routers |
| `procedures.md` | Defining procedures (queries/mutations) |
| `context.md` | Request context and dependency injection |
| `middlewares.md` | Middleware for reusable logic |
| `authorization.md` | Authorization patterns |
| `validators.md` | Input validation with Zod/etc |
| `error-handling.md` | Error handling and custom errors |
| `error-formatting.md` | Customizing error formatting |
| `merging-routers.md` | Merging multiple routers |
| `metadata.md` | Adding metadata to procedures |
| `data-transformers.md` | Data transformation (superjson) |
| `caching.md` | Server-side caching strategies |
| `server-side-calls.md` | Calling procedures server-side |
| `subscriptions.md` | Real-time subscriptions |
| `websockets.md` | WebSocket configuration |
| `non-json-content-types.md` | Handling non-JSON responses |
| `adapters-intro.md` | Overview of server adapters |

### server/adapters/

| File | Description |
|------|-------------|
| `nextjs.md` | Next.js adapter |
| `express.md` | Express adapter |
| `fastify.md` | Fastify adapter |
| `fetch.mdx` | Fetch API adapter |
| `standalone.md` | Standalone HTTP server |
| `aws-lambda.md` | AWS Lambda adapter |

## client/

| File | Description |
|------|-------------|
| `overview.md` | Client overview |
| `cors.md` | CORS configuration |
| `headers.md` | Custom headers |

### client/links/

| File | Description |
|------|-------------|
| `overview.md` | Links overview |
| `httpLink.md` | HTTP link for single requests |
| `httpBatchLink.md` | HTTP batch link for batching |
| `httpBatchStreamLink.md` | HTTP batch stream link |
| `httpSubscriptionLink.md` | HTTP subscription link |
| `wsLink.md` | WebSocket link |
| `loggerLink.md` | Logger link for debugging |
| `retryLink.md` | Retry link for failed requests |
| `splitLink.mdx` | Split link for conditional routing |
| `localLink.mdx` | Local link for server-side calls |

### client/nextjs/

| File | Description |
|------|-------------|
| `introduction.mdx` | Next.js client introduction |
| `setup.mdx` | Setting up tRPC with Next.js |
| `ssr.md` | Server-side rendering |
| `ssg.md` | Static site generation |
| `server-side-helpers.md` | Server-side helper utilities |
| `aborting-procedures.md` | Aborting requests |
| `starter-projects.md` | Next.js starter projects |

### client/react/

| File | Description |
|------|-------------|
| `introduction.mdx` | React client introduction |
| `setup.mdx` | Setting up tRPC with React |
| `useQuery.md` | useQuery hook for queries |
| `useMutation.md` | useMutation hook for mutations |
| `useInfiniteQuery.md` | useInfiniteQuery for pagination |
| `useQueries.md` | useQueries for parallel queries |
| `useSubscription.md` | useSubscription for real-time data |
| `useUtils.mdx` | useUtils for cache utilities |
| `createTRPCQueryUtils.md` | Creating query utilities |
| `getQueryKey.md` | Getting query keys |
| `infer-types.md` | Type inference helpers |
| `suspense.md` | React Suspense support |
| `disabling-queries.md` | Conditionally disabling queries |
| `aborting-procedures.md` | Aborting requests |
| `server-components.mdx` | React Server Components |

### client/tanstack-react-query/

| File | Description |
|------|-------------|
| `setup.mdx` | Setting up with TanStack React Query |
| `usage.mdx` | Usage patterns |
| `server-components.mdx` | React Server Components |
| `migrating.mdx` | Migrating from @trpc/react |

### client/vanilla/

| File | Description |
|------|-------------|
| `introduction.md` | Vanilla client introduction |
| `setup.mdx` | Setting up vanilla client |
| `infer-types.md` | Type inference |
| `aborting-procedures.md` | Aborting requests |

## migration/

| File | Description |
|------|-------------|
| `migrate-from-v10-to-v11.mdx` | Migration guide from v10 to v11 |

## further/

| File | Description |
|------|-------------|
| `faq.mdx` | Frequently asked questions |
| `rpc.md` | Understanding RPC concepts |
| `further-reading.md` | Additional resources |

## community/

| File | Description |
|------|-------------|
| `awesome-trpc.mdx` | Community projects and resources |
