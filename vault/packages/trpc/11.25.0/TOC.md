# tRPC Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Introduction, quickstart, concepts, FAQ, RPC spec, OpenAPI, migration | 11 |
| `contents/client/` | Client overview, CORS, headers | 7 |
| `contents/client/links/` | HTTP/WebSocket/batch/SSE link types | 9 |
| `contents/client/nextjs/` | Next.js App Router | 2 |
| `contents/client/nextjs/pages-router/` | Next.js Pages Router (setup, SSR, SSG) | 5 |
| `contents/client/react/` | Classic React Query hooks and utilities | 14 |
| `contents/client/tanstack-react-query/` | TanStack React Query integration | 6 |
| `contents/client/vanilla/` | Vanilla TypeScript client | 4 |
| `contents/server/` | Routers, procedures, context, middleware, validators, subscriptions | 19 |
| `contents/server/adapters/` | Server adapters (Express, Fastify, Next.js, Lambda, fetch, standalone) | 6 |

## contents/

| File | Description |
|------|-------------|
| `client.md` | Client Overview |
| `concepts.md` | Concepts |
| `example-apps.md` | Example Apps |
| `faq.md` | FAQ / Troubleshooting |
| `further-reading.md` | Further Reading |
| `introduction.md` | tRPC |
| `migrate-from-v10-to-v11.md` | Migrate from v10 to v11 |
| `openapi.md` | OpenAPI (alpha) |
| `quickstart.md` | Quickstart |
| `rpc.md` | HTTP RPC Specification |
| `skills.md` | Agent Skills |

## contents/client/

| File | Description |
|------|-------------|
| `cors.md` | Send cookies cross-origin |
| `headers.md` | Headers |
| `links.md` | Links Overview |
| `nextjs.md` | Next.js Integration |
| `react.md` | React Query Integration (Classic, deprecated) |
| `tanstack-react-query.md` | TanStack React Query |
| `vanilla.md` | tRPC Client |

## contents/client/links/

| File | Description |
|------|-------------|
| `httpBatchLink.md` | HTTP Batch Link |
| `httpBatchStreamLink.md` | HTTP Batch Stream Link |
| `httpLink.md` | HTTP Link |
| `httpSubscriptionLink.md` | HTTP Subscription Link |
| `localLink.md` | Local Link |
| `loggerLink.md` | Logger Link |
| `retryLink.md` | Retry Link |
| `splitLink.md` | Split Link |
| `wsLink.md` | WebSocket Link |

## contents/client/nextjs/

| File | Description |
|------|-------------|
| `app-router-setup.md` | Set up with Next.js App Router |
| `server-actions.md` | Server Actions |

## contents/client/nextjs/pages-router/

| File | Description |
|------|-------------|
| `aborting-procedure-calls.md` | Aborting Procedure Calls |
| `server-side-helpers.md` | Server-Side Helpers |
| `setup.md` | Set up with Next.js Pages Router |
| `ssg.md` | Static Site Generation |
| `ssr.md` | Server-Side Rendering |

## contents/client/react/

| File | Description |
|------|-------------|
| `aborting-procedure-calls.md` | Aborting Procedure Calls |
| `createTRPCQueryUtils.md` | createTRPCQueryUtils |
| `disabling-queries.md` | Disabling Queries |
| `getQueryKey.md` | getQueryKey |
| `infer-types.md` | Inferring Types |
| `server-components.md` | Set up with React Server Components |
| `setup.md` | Set up the React Query Integration |
| `suspense.md` | Suspense |
| `useInfiniteQuery.md` | useInfiniteQuery() |
| `useMutation.md` | useMutation() |
| `useQueries.md` | useQueries() |
| `useQuery.md` | useQuery() |
| `useSubscription.md` | useSubscription() |
| `useUtils.md` | useUtils |

## contents/client/tanstack-react-query/

| File | Description |
|------|-------------|
| `handles.md` | Prefetching with handles |
| `migrating.md` | Migrating from the classic React Client |
| `server-components.md` | Set up with React Server Components |
| `setup.md` | TanStack React Query |
| `tanstack-start.md` | Set up with TanStack Start |
| `usage.md` | TanStack React Query |

## contents/client/vanilla/

| File | Description |
|------|-------------|
| `aborting-procedure-calls.md` | Aborting Procedure Calls |
| `error-handling.md` | Error Handling |
| `infer-types.md` | Inferring Types |
| `setup.md` | Set up a tRPC Client |

## contents/server/

| File | Description |
|------|-------------|
| `adapters.md` | Overview |
| `authorization.md` | Authorization |
| `caching.md` | Response Caching |
| `context.md` | Context |
| `data-transformers.md` | Data Transformers |
| `error-formatting.md` | Error Formatting |
| `error-handling.md` | Error Handling |
| `merging-routers.md` | Merging Routers |
| `metadata.md` | Metadata |
| `middlewares.md` | Middlewares |
| `non-json-content-types.md` | Content Types |
| `overview.md` | Backend Usage |
| `procedures.md` | Define Procedures |
| `routers.md` | Define Routers |
| `server-side-calls.md` | Server Side Calls |
| `service-oriented-architecture.md` | Service-Oriented Architecture |
| `subscriptions.md` | Subscriptions |
| `validators.md` | Input & Output Validators |
| `websockets.md` | WebSockets |

## contents/server/adapters/

| File | Description |
|------|-------------|
| `aws-lambda.md` | AWS Lambda + API Gateway Adapter |
| `express.md` | Express Adapter |
| `fastify.md` | Fastify Adapter |
| `fetch.md` | Fetch / Edge Runtimes Adapter |
| `nextjs.md` | Next.js Adapter |
| `standalone.md` | Standalone Adapter |
