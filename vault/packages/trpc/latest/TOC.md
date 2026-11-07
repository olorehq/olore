# tRPC Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Introduction, quickstart, concepts, FAQ, RPC spec, OpenAPI, migration, agent skills | 11 |
| `contents/client/` | Client overview, links overview, CORS, headers | 7 |
| `contents/client/links/` | HTTP, batch, stream, WebSocket, SSE, local, logger, retry and split links | 9 |
| `contents/client/nextjs/` | Next.js App Router setup and Server Actions | 2 |
| `contents/client/nextjs/pages-router/` | Next.js Pages Router (setup, SSR, SSG, server-side helpers) | 5 |
| `contents/client/react/` | Classic (deprecated) React Query hooks and utilities | 14 |
| `contents/client/tanstack-react-query/` | TanStack React Query integration | 6 |
| `contents/client/vanilla/` | Vanilla TypeScript client | 4 |
| `contents/server/` | Routers, procedures, context, middleware, validators, subscriptions | 19 |
| `contents/server/adapters/` | Server adapters (Express, Fastify, Next.js, Lambda, fetch, standalone) | 6 |

## contents/

| File | Description |
|------|-------------|
| `concepts.md` | RPC mindset, vocabulary (procedure, router, context, middleware) and how tRPC compares to REST/GraphQL |
| `example-apps.md` | List of example apps built with tRPC across frameworks |
| `faq.md` | Frequently asked questions and troubleshooting tips |
| `further-reading.md` | Articles, talks and external learning resources |
| `introduction.md` | What tRPC is, features, and who it is for |
| `migrate-from-v10-to-v11.md` | Breaking changes and steps to upgrade from v10 to v11 |
| `openapi.md` | Generating OpenAPI documents from tRPC routers (alpha) |
| `quickstart.md` | Quickly set up a tRPC server and client |
| `rpc.md` | HTTP RPC specification: methods, batching, request/response formats |
| `skills.md` | Using TanStack Intent to provide AI agent skills for tRPC |
| `client.md` | Overview of the available client options |

## client/

| File | Description |
|------|-------------|
| `links.md` | Links overview: composing the chain of operations between client and server |
| `cors.md` | Sending cookies and credentials cross-origin |
| `headers.md` | Setting custom headers on client requests |
| `nextjs.md` | Next.js integration overview and choosing a router setup |
| `react.md` | Classic React Query integration overview (deprecated) |
| `tanstack-react-query.md` | Overview of the TanStack React Query integration |
| `vanilla.md` | Overview of the vanilla TypeScript client |

## client/links/

| File | Description |
|------|-------------|
| `httpBatchLink.md` | Terminating link that batches concurrent calls into one HTTP request |
| `httpBatchStreamLink.md` | Batching link that streams each response as soon as it is ready |
| `httpLink.md` | Terminating link that sends each call as its own HTTP request |
| `httpSubscriptionLink.md` | Terminating link for subscriptions over Server-sent Events |
| `localLink.md` | Link for direct procedure calls without HTTP overhead |
| `loggerLink.md` | Link that logs operations and their results |
| `retryLink.md` | Link that retries failed operations |
| `splitLink.md` | Link that routes operations down one of two chains based on a condition |
| `wsLink.md` | Terminating link that sends operations over a WebSocket |

## client/nextjs/

| File | Description |
|------|-------------|
| `app-router-setup.md` | Setting up tRPC with the Next.js App Router |
| `server-actions.md` | Defining Next.js Server Actions as tRPC procedures with experimental_caller |

## client/nextjs/pages-router/

| File | Description |
|------|-------------|
| `aborting-procedure-calls.md` | Cancelling in-flight requests on unmount with abortOnUnmount |
| `server-side-helpers.md` | Prefetching queries in getServerSideProps/getStaticProps and passing trpcState |
| `setup.md` | Setting up tRPC with the Next.js Pages Router |
| `ssg.md` | Static site generation with prefetched, dehydrated queries |
| `ssr.md` | Server-side rendering with prefetched queries, context from the request, and cache headers |

## client/react/

| File | Description |
|------|-------------|
| `aborting-procedure-calls.md` | Aborting queries in the classic React client |
| `createTRPCQueryUtils.md` | Using query utils outside React components |
| `disabling-queries.md` | Conditionally disabling queries with skipToken |
| `getQueryKey.md` | Getting the underlying React Query key for a procedure |
| `infer-types.md` | Inferring router input and output types |
| `server-components.md` | Setting up the classic client with React Server Components |
| `setup.md` | Installing and configuring the classic React Query integration |
| `suspense.md` | Using Suspense hooks for queries |
| `useInfiniteQuery.md` | Cursor-based infinite queries |
| `useMutation.md` | Calling mutations with useMutation |
| `useQueries.md` | Running multiple queries in parallel |
| `useQuery.md` | Fetching data with useQuery, tRPC options and streaming |
| `useSubscription.md` | Subscribing to server events from React |
| `useUtils.md` | Invalidating, refetching, prefetching and updating cached query data |

## client/tanstack-react-query/

| File | Description |
|------|-------------|
| `handles.md` | Prefetching with handles |
| `migrating.md` | Migrating from the classic React client |
| `server-components.md` | Prefetching in React Server Components and hydrating client components |
| `setup.md` | Setting up the integration with or without React context |
| `tanstack-start.md` | Setting up with TanStack Start |
| `usage.md` | queryOptions, mutationOptions, subscriptionOptions, key and filter factories |

## client/vanilla/

| File | Description |
|------|-------------|
| `aborting-procedure-calls.md` | Aborting calls with AbortSignal |
| `error-handling.md` | Handling TRPCClientError on the client |
| `infer-types.md` | Inferring input/output types from the router |
| `setup.md` | Creating and configuring a vanilla tRPC client |

## server/

| File | Description |
|------|-------------|
| `authorization.md` | Authorizing access to procedures |
| `caching.md` | HTTP response caching headers |
| `context.md` | Creating request context |
| `data-transformers.md` | Using superjson or other transformers |
| `error-formatting.md` | Customizing the error shape |
| `error-handling.md` | Throwing and handling TRPCError |
| `merging-routers.md` | Merging routers and namespacing |
| `metadata.md` | Attaching metadata to procedures |
| `middlewares.md` | Writing middlewares and extending context |
| `non-json-content-types.md` | FormData, File, Blob and other content types |
| `overview.md` | Backend usage overview |
| `procedures.md` | Defining queries, mutations and subscriptions |
| `routers.md` | Defining routers with initTRPC |
| `server-side-calls.md` | Calling procedures from the server with createCaller |
| `service-oriented-architecture.md` | Using tRPC across services |
| `subscriptions.md` | Subscriptions with async generators and SSE |
| `validators.md` | Input and output validation with Zod and others |
| `websockets.md` | Serving subscriptions over WebSockets |
| `adapters.md` | Adapters overview |

## server/adapters/

| File | Description |
|------|-------------|
| `aws-lambda.md` | AWS Lambda + API Gateway adapter |
| `express.md` | Express adapter |
| `fastify.md` | Fastify adapter |
| `fetch.md` | Fetch / edge runtime adapter |
| `nextjs.md` | Next.js API route and App Router handler |
| `standalone.md` | Standalone Node HTTP adapter |
