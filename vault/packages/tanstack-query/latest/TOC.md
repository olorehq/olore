# TanStack Query Table of Contents

## Directory Map

```
contents/
├── community-resources.md   # Community resources and tools (1 file)
├── eslint/                  # ESLint plugin and rules (9 files)
└── framework/               # Per-framework docs (465 files)
    ├── react/     # react guides, reference/functions, plugins (87 files)
    ├── preact/    # preact guides, reference/functions, plugins (81 files)
    ├── vue/       # vue guides, reference/functions, plugins (71 files)
    ├── solid/     # solid guides, reference/functions, plugins (69 files)
    ├── svelte/    # svelte guides, reference/functions, plugins (47 files)
    ├── angular/   # angular guides, reference/functions, plugins (66 files)
    ├── lit/       # lit guides, reference/functions, plugins (44 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| React quick start | `contents/framework/react/quick-start.md` |
| Queries | `contents/framework/react/guides/queries.md` |
| Mutations | `contents/framework/react/guides/mutations.md` |
| SSR | `contents/framework/react/guides/ssr.md` |
| useQuery API | `contents/framework/react/reference/functions/useQuery.md` |
| ESLint plugin | `contents/eslint/eslint-plugin-query.md` |

Note: auto-generated TypeDoc pages for classes, interfaces, type aliases and variables are not included; only `reference/functions/` is kept.

## Detailed Structure

### (root) (1 files)

| File | Description |
|------|-------------|
| `community-resources.md` | Community Resources |

### eslint/ (9 files)

| File | Description |
|------|-------------|
| `eslint-plugin-query.md` | ESLint Plugin Query - TanStack Query comes with its own ESLint plugin. |
| `exhaustive-deps.md` | Exhaustive dependencies for query keys - Query keys should contain the serializable values that identify the data returned by your queryFn. |
| `infinite-query-property-order.md` | Ensure correct order of inference sensitive properties for infinite queries - For the following functions, the property order of the passed in object matters due to type inference: |
| `mutation-property-order.md` | Ensure correct order of inference-sensitive properties in useMutation() - For the following functions, the property order of the passed in object matters due to type inference: |
| `no-rest-destructuring.md` | Disallow object rest destructuring on query results - Use object rest destructuring on query results automatically subscribes to every field of the query result, which may cause unnecessary... |
| `no-unstable-deps.md` | Disallow putting the result of query hooks directly in a React hook dependency array - The object returned from the following query hooks is **not** referentially stable: |
| `no-void-query-fn.md` | Disallow returning void from query functions - Query functions must return a value that will be cached by TanStack Query. |
| `prefer-query-options.md` | Prefer the use of queryOptions - Separating `queryKey` and `queryFn` can cause unexpected runtime issues when the same query key is accidentally used with more than one... |
| `stable-query-client.md` | Stable Query Client - The QueryClient contains the QueryCache, so you'd only want to create one instance of the QueryClient for the lifecycle of your... |

### framework/angular/ (7 files)

| File | Description |
|------|-------------|
| `angular-httpclient-and-other-data-fetching-clients.md` | Angular HttpClient and other data fetching clients - Because TanStack Query's fetching mechanisms are agnostically built on Promises, you can use literally any asynchronous data fetching... |
| `devtools.md` | Devtools - The devtools help you debug and inspect your queries and mutations. |
| `installation.md` | Installation - or |
| `overview.md` | Overview - The `@tanstack/angular-query-experimental` package offers a 1st-class API for using TanStack Query via Angular. |
| `quick-start.md` | Quick Start - If you're looking for a fully functioning example, please have a look at our basic codesandbox example |
| `typescript.md` | TypeScript - In this example we pass Group[] to the type parameter of HttpClient's `get` method. |
| `zoneless.md` | Zoneless Angular - Because the Angular adapter for TanStack Query is built on signals, it fully supports Zoneless! |

### framework/angular/guides/ (28 files)

| File | Description |
|------|-------------|
| `background-fetching-indicators.md` | Background Fetching Indicators |
| `caching.md` | Caching Examples - This caching example illustrates the story and lifecycle of: |
| `default-query-function.md` | Default Query Function |
| `dependent-queries.md` | Dependent Queries |
| `disabling-queries.md` | Disabling/Pausing Queries |
| `does-this-replace-client-state.md` | Does TanStack Query replace global state managers? |
| `filters.md` | Filters |
| `important-defaults.md` | Important Defaults |
| `infinite-queries.md` | Infinite Queries |
| `initial-query-data.md` | Initial Query Data |
| `invalidations-from-mutations.md` | Invalidations from Mutations - You can wire up your invalidations to happen using any of the callbacks available in the `injectMutation` function |
| `mutation-options.md` | Mutation Options - One of the best ways to share mutation options between multiple places, |
| `mutations.md` | Mutations |
| `network-mode.md` | Network Mode |
| `optimistic-updates.md` | Optimistic Updates |
| `paginated-queries.md` | Paginated / Lagged Queries |
| `parallel-queries.md` | Parallel Queries - TanStack Query provides `injectQueries`, which you can use to dynamically execute as many queries in parallel as you'd like. |
| `placeholder-query-data.md` | Placeholder Query Data |
| `queries.md` | Queries - If booleans aren't your thing, you can always use the `status` state as well: |
| `query-cancellation.md` | Query Cancellation - TanStack Query provides each query function with an `AbortSignal` instance. |
| `query-functions.md` | Query Functions |
| `query-invalidation.md` | Query Invalidation - You can even invalidate queries with specific variables by passing a more specific query key to the `invalidateQueries` method: |
| `query-keys.md` | Query Keys |
| `query-options.md` | Query Options |
| `query-retries.md` | Query Retries - Though it is not recommended, you can obviously override the `retryDelay` function/integer in both the Provider and individual query... |
| `scroll-restoration.md` | Scroll Restoration |
| `testing.md` | Testing - Most Angular tests using TanStack Query will involve services or components that call `injectQuery`/`injectMutation`. |
| `window-focus-refetching.md` | Window Focus Refetching |

### framework/angular/reference/functions/ (31 files)

| File | Description |
|------|-------------|
| `defaultShouldDehydrateMutation.md` | The default `shouldDehydrateMutation` predicate used by `dehydrate`. |
| `defaultShouldDehydrateQuery.md` | The default `shouldDehydrateQuery` predicate used by `dehydrate`. |
| `dehydrate.md` | Dehydrates a `QueryClient`'s cache (queries and mutations) into a plain, serializable `DehydratedState`, |
| `dehydrateQuery.md` | Dehydrates a single `Query` into a serializable `DehydratedQuery` snapshot. |
| `experimental_streamedQuery.md` | This is a helper function to create a query function that streams data from an AsyncIterable. |
| `hashKey.md` | Default query & mutation keys hash function. |
| `hydrate.md` | Restores a `DehydratedState` (as produced by `dehydrate`) into a `QueryClient`'s cache, typically to seed the |
| `infiniteQueryOptions.md` | You can generally pass everything to `infiniteQueryOptions` that you can also pass to |
| `injectInfiniteQuery.md` | The options for `injectInfiniteQuery` are identical to `injectQuery`, with the addition of |
| `injectIsFetching.md` | Injects a signal that tracks the number of queries that your application is loading or fetching in the |
| `injectIsMutating.md` | Injects a signal that tracks the number of mutations that your application currently has `pending` |
| `injectIsRestoring.md` | Injects a signal that tracks whether a restore (e.g. |
| `injectMutation.md` | Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects. |
| `injectMutationState.md` | Injects a signal that gives you access to all mutations in the `MutationCache`. |
| `injectQuery.md` | This overload is selected when `initialData` is known to be defined on the options returned by |
| `injectQueryClient.md` | Injects a `QueryClient` instance and allows passing a custom injector. |
| `isCancelledError.md` | Checks whether a value is a `CancelledError`. |
| `keepPreviousData.md` | Intended to be passed as a query's `placeholderData` option, for example |
| `matchMutation.md` | Checks whether a mutation matches the given MutationFilters. |
| `matchQuery.md` | Checks whether a query matches the given QueryFilters. |
| `mutationOptions.md` | You can generally pass everything to `mutationOptions` that you can also pass to `injectMutation`. |
| `noop.md` | A function that does nothing. |
| `partialMatchKey.md` | Checks if key `b` partially matches with key `a`. |
| `provideAngularQuery.md` | Sets up providers necessary to enable TanStack Query functionality for Angular applications. |
| `provideIsRestoring.md` | Registers a provider for the restore state read by `injectIsRestoring`. |
| `provideQueryClient.md` | Usually provideTanStackQuery is used once to set up TanStack Query and the |
| `provideTanStackQuery.md` | Sets up providers necessary to enable TanStack Query functionality for Angular applications. |
| `queryFeature.md` | Helper function to create an object that represents a Query feature. |
| `queryOptions.md` | You can generally pass everything to `queryOptions` that you can also pass to `injectQuery`. |
| `replaceEqualDeep.md` | This function returns `a` if `b` is deeply equal. |
| `shouldThrowError.md` | Resolves a `throwOnError` option to a boolean. |

### framework/lit/ (4 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation - Install Lit Query: |
| `overview.md` | Overview - The `@tanstack/lit-query` package is the Lit adapter for TanStack Query. |
| `quick-start.md` | Quick Start - This snippet shows the three core Lit Query concepts: |
| `typescript.md` | TypeScript - Lit Query is written in TypeScript and reuses TanStack Query Core's type system. |

### framework/lit/guides/ (10 files)

| File | Description |
|------|-------------|
| `infinite-queries.md` | Infinite Queries - Infinite queries are for lists that load more data into one cache entry. |
| `mutations.md` | Mutations - Unlike queries, mutations are used to create, update, delete, or otherwise perform server side effects. |
| `parallel-queries.md` | Parallel Queries - Parallel queries are queries that run at the same time so the UI does not wait for one request before starting the next. |
| `queries.md` | Queries - New to Lit Query? |
| `query-functions.md` | Query Functions - A query function can be any function that returns a promise. |
| `query-invalidation.md` | Query Invalidation - Waiting for queries to become stale is not always enough. |
| `query-keys.md` | Query Keys - TanStack Query manages caching by query key. |
| `reactive-controllers-vs-hooks.md` | Reactive Controllers vs Hooks - React Query examples use hooks. |
| `ssr.md` | Server Rendering & Hydration - Lit Query can be used with server rendering by combining Lit SSR with TanStack Query Core hydration APIs re-exported from... |
| `testing.md` | Testing - Lit Query works by means of reactive controllers like `createQueryController`, attached to a host element. |

### framework/lit/reference/functions/ (30 files)

| File | Description |
|------|-------------|
| `createInfiniteQueryController.md` | Creates a Lit reactive controller that subscribes the host to an infinite |
| `createMutationController.md` | Creates a Lit reactive controller that subscribes the host to a mutation. |
| `createQueriesController.md` | Creates a Lit reactive controller that subscribes the host to multiple |
| `createQueryController.md` | Creates a Lit reactive controller that subscribes the host to a single query. |
| `defaultShouldDehydrateMutation.md` | The default `shouldDehydrateMutation` predicate used by `dehydrate`. |
| `defaultShouldDehydrateQuery.md` | The default `shouldDehydrateQuery` predicate used by `dehydrate`. |
| `dehydrate.md` | Dehydrates a `QueryClient`'s cache (queries and mutations) into a plain, serializable `DehydratedState`, |
| `dehydrateQuery.md` | Dehydrates a single `Query` into a serializable `DehydratedQuery` snapshot. |
| `experimental_streamedQuery.md` | This is a helper function to create a query function that streams data from an AsyncIterable. |
| `getDefaultQueryClient.md` | API reference for `getDefaultQueryClient` (lit) |
| `hashKey.md` | Default query & mutation keys hash function. |
| `hydrate.md` | Restores a `DehydratedState` (as produced by `dehydrate`) into a `QueryClient`'s cache, typically to seed the |
| `infiniteQueryOptions.md` | Brands infinite query options so the `queryKey` carries the infinite query |
| `isCancelledError.md` | Checks whether a value is a `CancelledError`. |
| `keepPreviousData.md` | Intended to be passed as a query's `placeholderData` option, for example |
| `matchMutation.md` | Checks whether a mutation matches the given MutationFilters. |
| `matchQuery.md` | Checks whether a query matches the given QueryFilters. |
| `mutationOptions.md` | Preserves and types mutation options for reuse across Lit Query APIs. |
| `noop.md` | A function that does nothing. |
| `partialMatchKey.md` | Checks if key `b` partially matches with key `a`. |
| `queryOptions.md` | Brands query options so the `queryKey` carries the query function data and |
| `registerDefaultQueryClient.md` | Registers a `QueryClient` as a process-local fallback for APIs that resolve a |
| `replaceEqualDeep.md` | This function returns `a` if `b` is deeply equal. |
| `resolveQueryClient.md` | Resolves an explicit `QueryClient` or falls back to `useQueryClient`. |
| `shouldThrowError.md` | Resolves a `throwOnError` option to a boolean. |
| `unregisterDefaultQueryClient.md` | Unregisters a client previously registered with |
| `useIsFetching.md` | Creates a Lit reactive controller that tracks how many matching queries are |
| `useIsMutating.md` | Creates a Lit reactive controller that tracks how many matching mutations are |
| `useMutationState.md` | Creates a Lit reactive controller that selects state from matching mutations |
| `useQueryClient.md` | Resolves the current default `QueryClient` registered by a connected |

### framework/preact/ (6 files)

| File | Description |
|------|-------------|
| `devtools.md` | Devtools - Wave your hands in the air and shout hooray because Preact Query comes with dedicated devtools! |
| `graphql.md` | GraphQL |
| `installation.md` | Installation - Preact Query is compatible with Preact v10+. |
| `overview.md` | Overview |
| `quick-start.md` | Quick Start - If you're looking for a fully functioning example, please have a look at our simple StackBlitz example |
| `typescript.md` | TypeScript |

### framework/preact/guides/ (34 files)

| File | Description |
|------|-------------|
| `background-fetching-indicators.md` | Background Fetching Indicators |
| `caching.md` | Caching Examples |
| `default-query-function.md` | Default Query Function |
| `dependent-queries.md` | Dependent Queries |
| `disabling-queries.md` | Disabling/Pausing Queries |
| `does-this-replace-client-state.md` | Does TanStack Query replace Redux, MobX or other global state managers? |
| `filters.md` | Filters |
| `important-defaults.md` | Important Defaults |
| `infinite-queries.md` | Infinite Queries |
| `initial-query-data.md` | Initial Query Data |
| `invalidations-from-mutations.md` | Invalidations from Mutations |
| `mutations.md` | Mutations - We also have an extensive offline example that covers both queries and mutations. |
| `network-mode.md` | Network Mode |
| `optimistic-updates.md` | Optimistic Updates |
| `paginated-queries.md` | Paginated / Lagged Queries |
| `parallel-queries.md` | Parallel Queries |
| `placeholder-query-data.md` | Placeholder Query Data |
| `polling.md` | Polling |
| `prefetching.md` | Prefetching & Router Integration |
| `queries.md` | Queries |
| `query-cancellation.md` | Query Cancellation |
| `query-functions.md` | Query Functions |
| `query-invalidation.md` | Query Invalidation |
| `query-keys.md` | Query Keys |
| `query-options.md` | Query Options |
| `query-retries.md` | Query Retries |
| `render-optimizations.md` | Render Optimizations |
| `request-waterfalls.md` | Performance & Request Waterfalls |
| `scroll-restoration.md` | Scroll Restoration |
| `ssr.md` | Server Rendering & Hydration - In this guide you'll learn how to use Preact Query with server rendering. |
| `suspense.md` | Suspense - When using suspense mode, `status` states and `error` objects are not needed and are then replaced by usage of the `Suspense` component... |
| `testing.md` | Testing - Writing unit tests for these custom hooks can be done by means of the Preact Testing Library, which provides `renderHook` and re-exports... |
| `updates-from-mutation-responses.md` | Updates from Mutation Responses |
| `window-focus-refetching.md` | Window Focus Refetching |

### framework/preact/plugins/ (5 files)

| File | Description |
|------|-------------|
| `broadcastQueryClient.md` | broadcastQueryClient (Experimental) |
| `createAsyncStoragePersister.md` | createAsyncStoragePersister |
| `createPersister.md` | experimental_createPersister |
| `createSyncStoragePersister.md` | createSyncStoragePersister |
| `persistQueryClient.md` | persistQueryClient |

### framework/preact/reference/functions/ (36 files)

| File | Description |
|------|-------------|
| `HydrationBoundary.md` | API reference for `HydrationBoundary` (preact) |
| `QueryClientProvider.md` | Use the `QueryClientProvider` component to connect and provide a `QueryClient` to your application. |
| `QueryErrorResetBoundary.md` | When using `suspense` or `throwOnError` in your queries, you need a way to let queries know that you want to |
| `defaultShouldDehydrateMutation.md` | The default `shouldDehydrateMutation` predicate used by `dehydrate`. |
| `defaultShouldDehydrateQuery.md` | The default `shouldDehydrateQuery` predicate used by `dehydrate`. |
| `dehydrate.md` | Dehydrates a `QueryClient`'s cache (queries and mutations) into a plain, serializable `DehydratedState`, |
| `dehydrateQuery.md` | Dehydrates a single `Query` into a serializable `DehydratedQuery` snapshot. |
| `experimental_streamedQuery.md` | This is a helper function to create a query function that streams data from an AsyncIterable. |
| `hashKey.md` | Default query & mutation keys hash function. |
| `hydrate.md` | Restores a `DehydratedState` (as produced by `dehydrate`) into a `QueryClient`'s cache, typically to seed the |
| `infiniteQueryOptions.md` | You can generally pass everything to `infiniteQueryOptions` that you can also pass to `useInfiniteQuery`. |
| `isCancelledError.md` | Checks whether a value is a `CancelledError`. |
| `keepPreviousData.md` | Intended to be passed as a query's `placeholderData` option, for example |
| `matchMutation.md` | Checks whether a mutation matches the given MutationFilters. |
| `matchQuery.md` | Checks whether a query matches the given QueryFilters. |
| `mutationOptions.md` | You can generally pass everything to `mutationOptions` that you can also pass to `useMutation`. |
| `noop.md` | A function that does nothing. |
| `partialMatchKey.md` | Checks if key `b` partially matches with key `a`. |
| `queryOptions.md` | You can generally pass everything to `queryOptions` that you can also pass to `useQuery`. |
| `replaceEqualDeep.md` | This function returns `a` if `b` is deeply equal. |
| `shouldThrowError.md` | Resolves a `throwOnError` option to a boolean. |
| `useInfiniteQuery.md` | The options for `useInfiniteQuery` are identical to `useQuery`, with the addition of |
| `useIsFetching.md` | The `useIsFetching` hook returns the `number` of the queries that your application is loading or fetching in |
| `useIsMutating.md` | The `useIsMutating` hook returns the `number` of mutations that your application currently has `pending` |
| `useIsRestoring.md` | If you are using `PersistQueryClientProvider`, you can also use the `useIsRestoring` hook alongside it to |
| `useMutation.md` | Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects. |
| `useMutationState.md` | API reference for `useMutationState` (preact) |
| `usePrefetchInfiniteQuery.md` | before a suspense boundary that wraps a component that uses `useSuspenseInfiniteQuery`. |
| `usePrefetchQuery.md` | a suspense boundary that wraps a component that uses `useSuspenseQuery`. |
| `useQueries.md` | The `useQueries` hook can be used to fetch a variable number of queries. |
| `useQuery.md` | This overload is selected when `initialData` is known to be defined, so the resulting `data` is never |
| `useQueryClient.md` | The `useQueryClient` hook returns the current `QueryClient` instance. |
| `useQueryErrorResetBoundary.md` | This hook will reset any query errors within the closest `QueryErrorResetBoundary`. |
| `useSuspenseInfiniteQuery.md` | The options for `useSuspenseInfiniteQuery` are the same as for `useInfiniteQuery`, except for `throwOnError`, |
| `useSuspenseQueries.md` | The options for `useSuspenseQueries` are the same as for `useQueries`, except that the top-level `subscribed` |
| `useSuspenseQuery.md` | The options for `useSuspenseQuery` are the same as for `useQuery`, except for `throwOnError`, `enabled`, and |

### framework/react/ (8 files)

| File | Description |
|------|-------------|
| `comparison.md` | Comparison | React Query vs SWR vs Apollo vs RTK Query vs React Router - Feature/Capability Key: |
| `devtools.md` | Devtools - Wave your hands in the air and shout hooray because React Query comes with dedicated devtools! |
| `graphql.md` | GraphQL - Because React Query's fetching mechanisms are agnostically built on Promises, you can use React Query with literally any asynchronous... |
| `installation.md` | Installation - You can install React Query via NPM, |
| `overview.md` | Overview - TanStack Query (formerly known as React Query) is often described as the missing data-fetching library for web applications, but in more... |
| `quick-start.md` | Quick Start - This code snippet very briefly illustrates the 3 core concepts of React Query: |
| `react-native.md` | React Native - React Query is designed to work out of the box with React Native. |
| `typescript.md` | TypeScript - React Query is now written in **TypeScript** to make sure the library and your projects are type-safe! |

### framework/react/guides/ (38 files)

| File | Description |
|------|-------------|
| `advanced-ssr.md` | Advanced Server Rendering - Welcome to the Advanced Server Rendering guide, where you will learn all about using React Query with streaming, Server Components and... |
| `background-fetching-indicators.md` | Background Fetching Indicators - A query's `status === 'pending'` state is sufficient enough to show the initial hard-loading state for a query, but sometimes you may... |
| `caching.md` | Caching Examples - This caching example illustrates the story and lifecycle of: |
| `default-query-function.md` | Default Query Function - If you find yourself wishing for whatever reason that you could just share the same query function for your entire app and just use... |
| `dependent-queries.md` | Dependent Queries - Dependent (or serial) queries depend on previous ones to finish before they can execute. |
| `disabling-queries.md` | Disabling/Pausing Queries - If you ever want to disable a query from automatically running, you can use the `enabled = false` option. |
| `does-this-replace-client-state.md` | Does TanStack Query replace Redux, MobX or other global state managers? - Well, let's start with a few important items: |
| `filters.md` | Filters - Some methods within TanStack Query accept a `QueryFilters` or `MutationFilters` object. |
| `important-defaults.md` | Important Defaults - Out of the box, TanStack Query is configured with **aggressive but sane** defaults. |
| `infinite-queries.md` | Infinite Queries - Rendering lists that can additively "load more" data onto an existing set of data or "infinite scroll" is also a very common UI pattern. |
| `initial-query-data.md` | Initial Query Data - There are many ways to supply initial data for a query to the cache before you need it: |
| `invalidations-from-mutations.md` | Invalidations from Mutations - Invalidating queries is only half the battle. |
| `migrating-to-react-query-3.md` | Migrating to React Query 3 - Previous versions of React Query were awesome and brought some amazing new features, more magic, and an overall better experience to the... |
| `migrating-to-react-query-4.md` | Migrating to React Query 4 - v4 is a major version, so there are some breaking changes to be aware of: |
| `migrating-to-v5.md` | Migrating to TanStack Query v5 - v5 is a major version, so there are some breaking changes to be aware of: |
| `mutations.md` | Mutations - Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects. |
| `network-mode.md` | Network Mode - TanStack Query provides three different network modes to distinguish how Queries and Mutations should behave if you have no network... |
| `optimistic-updates.md` | Optimistic Updates - React Query provides two ways to optimistically update your UI before a mutation has completed. |
| `paginated-queries.md` | Paginated / Lagged Queries - Rendering paginated data is a very common UI pattern and in TanStack Query, it "just works" by including the page information in the... |
| `parallel-queries.md` | Parallel Queries - "Parallel" queries are queries that are executed in parallel, or at the same time so as to maximize fetching concurrency. |
| `placeholder-query-data.md` | Placeholder Query Data - Placeholder data allows a query to behave as if it already has data, similar to the `initialData` option, but **the data is not... |
| `polling.md` | Polling - Polling is independent of `staleTime`. |
| `prefetching.md` | Prefetching & Router Integration - When you know or suspect that a certain piece of data will be needed, you can use prefetching to populate the cache with that data ahead... |
| `queries.md` | Queries - A query is a declarative dependency on an asynchronous source of data that is tied to a **unique key**. |
| `query-cancellation.md` | Query Cancellation - TanStack Query provides each query function with an `AbortSignal` instance. |
| `query-functions.md` | Query Functions - A query function can be literally any function that **returns a promise**. |
| `query-invalidation.md` | Query Invalidation - Waiting for queries to become stale before they are fetched again doesn't always work, especially when you know for a fact that a... |
| `query-keys.md` | Query Keys - At its core, TanStack Query manages query caching for you based on query keys. |
| `query-options.md` | Query Options - One of the best ways to share `queryKey` and `queryFn` between multiple places, yet keep them co-located to one another, is to use the... |
| `query-retries.md` | Query Retries - When a `useQuery` query fails (the query function throws an error), TanStack Query will automatically retry the query if that query's... |
| `render-optimizations.md` | Render Optimizations - React Query applies a couple of optimizations automatically to ensure that your components only re-render when they actually need to. |
| `request-waterfalls.md` | Performance & Request Waterfalls - Application performance is a broad and complex area and while React Query can't make your APIs faster, there are still things to be... |
| `scroll-restoration.md` | Scroll Restoration - Traditionally, when you navigate to a previously visited page on a web browser, you would find that the page would be scrolled to the... |
| `ssr.md` | Server Rendering & Hydration - In this guide you'll learn how to use React Query with server rendering. |
| `suspense.md` | Suspense - React Query can also be used with React's Suspense for Data Fetching APIs. |
| `testing.md` | Testing - React Query works by means of hooks - either the ones we offer or custom ones that wrap around them. |
| `updates-from-mutation-responses.md` | Updates from Mutation Responses - When dealing with mutations that **update** objects on the server, it's common for the new object to be automatically returned in the... |
| `window-focus-refetching.md` | Window Focus Refetching - If a user leaves your application and returns and the query data is stale, **TanStack Query automatically requests fresh data for you in... |

### framework/react/plugins/ (5 files)

| File | Description |
|------|-------------|
| `broadcastQueryClient.md` | broadcastQueryClient (Experimental) - This utility comes as a separate package and is available under the `'@tanstack/query-broadcast-client-experimental'` import. |
| `createAsyncStoragePersister.md` | createAsyncStoragePersister - This utility comes as a separate package and is available under the `'@tanstack/query-async-storage-persister'` import. |
| `createPersister.md` | experimental_createQueryPersister - This utility comes as a separate package and is available under the `'@tanstack/query-persist-client-core'` import. |
| `createSyncStoragePersister.md` | createSyncStoragePersister - This plugin is deprecated and will be removed in the next major version. |
| `persistQueryClient.md` | persistQueryClient - This is set of utilities for interacting with "persisters" which save your queryClient for later use. |

### framework/react/reference/functions/ (36 files)

| File | Description |
|------|-------------|
| `HydrationBoundary.md` | API reference for `HydrationBoundary` (react) |
| `QueryClientProvider.md` | Use the `QueryClientProvider` component to connect and provide a `QueryClient` to your application. |
| `QueryErrorResetBoundary.md` | When using `suspense` or `throwOnError` in your queries, you need a way to let queries know that you want to |
| `defaultShouldDehydrateMutation.md` | The default `shouldDehydrateMutation` predicate used by `dehydrate`. |
| `defaultShouldDehydrateQuery.md` | The default `shouldDehydrateQuery` predicate used by `dehydrate`. |
| `dehydrate.md` | Dehydrates a `QueryClient`'s cache (queries and mutations) into a plain, serializable `DehydratedState`, |
| `dehydrateQuery.md` | Dehydrates a single `Query` into a serializable `DehydratedQuery` snapshot. |
| `experimental_streamedQuery.md` | This is a helper function to create a query function that streams data from an AsyncIterable. |
| `hashKey.md` | Default query & mutation keys hash function. |
| `hydrate.md` | Restores a `DehydratedState` (as produced by `dehydrate`) into a `QueryClient`'s cache, typically to seed the |
| `infiniteQueryOptions.md` | You can generally pass everything to `infiniteQueryOptions` that you can also pass to `useInfiniteQuery`. |
| `isCancelledError.md` | Checks whether a value is a `CancelledError`. |
| `keepPreviousData.md` | Intended to be passed as a query's `placeholderData` option, for example |
| `matchMutation.md` | Checks whether a mutation matches the given MutationFilters. |
| `matchQuery.md` | Checks whether a query matches the given QueryFilters. |
| `mutationOptions.md` | You can generally pass everything to `mutationOptions` that you can also pass to `useMutation`. |
| `noop.md` | A function that does nothing. |
| `partialMatchKey.md` | Checks if key `b` partially matches with key `a`. |
| `queryOptions.md` | You can generally pass everything to `queryOptions` that you can also pass to `useQuery`. |
| `replaceEqualDeep.md` | This function returns `a` if `b` is deeply equal. |
| `shouldThrowError.md` | Resolves a `throwOnError` option to a boolean. |
| `useInfiniteQuery.md` | The options for `useInfiniteQuery` are identical to `useQuery`, with the addition of |
| `useIsFetching.md` | The `useIsFetching` hook returns the `number` of the queries that your application is loading or fetching in |
| `useIsMutating.md` | The `useIsMutating` hook returns the `number` of mutations that your application currently has `pending` |
| `useIsRestoring.md` | If you are using `PersistQueryClientProvider`, you can also use the `useIsRestoring` hook alongside it to |
| `useMutation.md` | Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects. |
| `useMutationState.md` | API reference for `useMutationState` (react) |
| `usePrefetchInfiniteQuery.md` | before a suspense boundary that wraps a component that uses `useSuspenseInfiniteQuery`. |
| `usePrefetchQuery.md` | a suspense boundary that wraps a component that uses `useSuspenseQuery`. |
| `useQueries.md` | The `useQueries` hook can be used to fetch a variable number of queries. |
| `useQuery.md` | This overload is selected when `initialData` is known to be defined, so the resulting `data` is never |
| `useQueryClient.md` | The `useQueryClient` hook returns the current `QueryClient` instance. |
| `useQueryErrorResetBoundary.md` | This hook will reset any query errors within the closest `QueryErrorResetBoundary`. |
| `useSuspenseInfiniteQuery.md` | The options for `useSuspenseInfiniteQuery` are the same as for `useInfiniteQuery`, except for `throwOnError`, |
| `useSuspenseQueries.md` | The options for `useSuspenseQueries` are the same as for `useQueries`, except that the top-level `subscribed` |
| `useSuspenseQuery.md` | The options for `useSuspenseQuery` are the same as for `useQuery`, except for `throwOnError`, `enabled`, and |

### framework/solid/ (5 files)

| File | Description |
|------|-------------|
| `devtools.md` | Devtools - Wave your hands in the air and shout hooray because Solid Query comes with dedicated devtools! |
| `installation.md` | Installation - You can install Solid Query via NPM, |
| `overview.md` | Overview - Solid Query is the official SolidJS adapter of TanStack Query that makes **fetching, caching, synchronizing and updating server state**... |
| `quick-start.md` | Quick Start - The `@tanstack/solid-query` package provides a 1st-class API for using TanStack Query with SolidJS. |
| `typescript.md` | TypeScript - Solid Query is written in **TypeScript** to make sure the library and your projects are type-safe! |

### framework/solid/guides/ (34 files)

| File | Description |
|------|-------------|
| `advanced-ssr.md` | Advanced Server Rendering - Solid Query's hydration model doesn't separate basic and advanced server rendering: `useQuery` hydrates automatically wherever it's... |
| `background-fetching-indicators.md` | Background Fetching Indicators |
| `caching.md` | Caching Examples |
| `default-query-function.md` | Default Query Function |
| `dependent-queries.md` | Dependent Queries |
| `disabling-queries.md` | Disabling/Pausing Queries |
| `does-this-replace-client-state.md` | Does TanStack Query replace global state managers? |
| `filters.md` | Filters |
| `important-defaults.md` | Important Defaults |
| `infinite-queries.md` | Infinite Queries |
| `initial-query-data.md` | Initial Query Data |
| `invalidations-from-mutations.md` | Invalidations from Mutations |
| `mutations.md` | Mutations - If you persist offline mutations with the `persistQueryClient` plugin, mutations cannot be resumed when the page is reloaded unless you... |
| `network-mode.md` | Network Mode |
| `optimistic-updates.md` | Optimistic Updates |
| `paginated-queries.md` | Paginated / Lagged Queries |
| `parallel-queries.md` | Parallel Queries - If the number of queries you need to execute changes, you cannot use manual querying since that would break reactivity. |
| `placeholder-query-data.md` | Placeholder Query Data - If the process for accessing a query's placeholder data is intensive or just not something you want to perform on every render, you can... |
| `polling.md` | Polling |
| `prefetching.md` | Prefetching & Router Integration - Another way is to prefetch inside the query function. |
| `queries.md` | Queries - To subscribe to a query in your components, call the `useQuery` function with at least: |
| `query-cancellation.md` | Query Cancellation |
| `query-functions.md` | Query Functions |
| `query-invalidation.md` | Query Invalidation |
| `query-keys.md` | Query Keys |
| `query-options.md` | Query Options - You can still override some options at the component level. |
| `query-retries.md` | Query Retries |
| `request-waterfalls.md` | Performance & Request Waterfalls - Nested Component Waterfalls is when both a parent and a child component contains queries, and the parent does not render the child until... |
| `scroll-restoration.md` | Scroll Restoration |
| `ssr.md` | SSR - This guide covers using Solid Query with server rendering, specifically with SolidStart. |
| `suspense.md` | Suspense - Solid Query can also be used with Solid's Suspense API's. |
| `testing.md` | Testing - Solid Query works by means of primitives - either the ones we offer or custom ones that wrap around them. |
| `updates-from-mutation-responses.md` | Updates from Mutation Responses |
| `window-focus-refetching.md` | Window Focus Refetching |

### framework/solid/plugins/ (2 files)

| File | Description |
|------|-------------|
| `broadcastQueryClient.md` | broadcastQueryClient (Experimental) |
| `createPersister.md` | experimental_createPersister |

### framework/solid/reference/functions/ (28 files)

| File | Description |
|------|-------------|
| `QueryClientProvider.md` | Use the `QueryClientProvider` component to connect and provide a `QueryClient` to your application. |
| `defaultShouldDehydrateMutation.md` | The default `shouldDehydrateMutation` predicate used by `dehydrate`. |
| `defaultShouldDehydrateQuery.md` | The default `shouldDehydrateQuery` predicate used by `dehydrate`. |
| `dehydrate.md` | Dehydrates a `QueryClient`'s cache (queries and mutations) into a plain, serializable `DehydratedState`, |
| `dehydrateQuery.md` | Dehydrates a single `Query` into a serializable `DehydratedQuery` snapshot. |
| `experimental_streamedQuery.md` | This is a helper function to create a query function that streams data from an AsyncIterable. |
| `hashKey.md` | Default query & mutation keys hash function. |
| `hydrate.md` | Restores a `DehydratedState` (as produced by `dehydrate`) into a `QueryClient`'s cache, typically to seed the |
| `infiniteQueryOptions.md` | You can generally pass everything to `infiniteQueryOptions` that you can also pass to `useInfiniteQuery`. |
| `isCancelledError.md` | Checks whether a value is a `CancelledError`. |
| `keepPreviousData.md` | Intended to be passed as a query's `placeholderData` option, for example |
| `matchMutation.md` | Checks whether a mutation matches the given MutationFilters. |
| `matchQuery.md` | Checks whether a query matches the given QueryFilters. |
| `mutationOptions.md` | You can generally pass everything to `mutationOptions` that you can also pass to `useMutation`. |
| `noop.md` | A function that does nothing. |
| `partialMatchKey.md` | Checks if key `b` partially matches with key `a`. |
| `queryOptions.md` | You can generally pass everything to `queryOptions` that you can also pass to `useQuery`. |
| `replaceEqualDeep.md` | This function returns `a` if `b` is deeply equal. |
| `shouldThrowError.md` | Resolves a `throwOnError` option to a boolean. |
| `useInfiniteQuery.md` | The options for `useInfiniteQuery` are identical to `useQuery`, with the addition of |
| `useIsFetching.md` | The `useIsFetching` primitive returns the `number` of the queries that your application is loading or fetching |
| `useIsMutating.md` | The `useIsMutating` primitive returns the `number` of mutations that your application currently has `pending` |
| `useIsRestoring.md` | If you are using `PersistQueryClientProvider`, you can also use the `useIsRestoring` primitive alongside it to |
| `useMutation.md` | Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects. |
| `useMutationState.md` | API reference for `useMutationState` (solid) |
| `useQueries.md` | The `useQueries` primitive can be used to fetch a variable number of queries. |
| `useQuery.md` | Subscribes to a query: a declarative dependency on an asynchronous source of data that is tied to a unique key. |
| `useQueryClient.md` | The `useQueryClient` primitive returns the current `QueryClient` instance. |

### framework/svelte/ (7 files)

| File | Description |
|------|-------------|
| `devtools.md` | Devtools - The devtools are a separate package that you need to install: |
| `installation.md` | Installation - You can install Svelte Query via NPM. |
| `migrate-from-v5-to-v6.md` | While Svelte v5 has legacy compatibility with the stores syntax from Svelte v3/v4, it has been somewhat buggy and unreliable for this... |
| `overview.md` | Overview - The `@tanstack/svelte-query` package offers a 1st-class API for using TanStack Query via Svelte. |
| `quick-start.md` | Quick Start - The `@tanstack/svelte-query` package offers a 1st-class API for using TanStack Query via Svelte. |
| `ssr.md` | SSR and SvelteKit - SvelteKit defaults to rendering routes with SSR. |
| `testing.md` | Testing - Svelte Query works by means of functions like `createQuery`, either the ones we offer or custom ones that wrap around them. |

### framework/svelte/guides/ (8 files)

| File | Description |
|------|-------------|
| `invalidations-from-mutations.md` | Invalidations from Mutations |
| `mutations.md` | Mutations |
| `network-mode.md` | Network Mode |
| `optimistic-updates.md` | Optimistic Updates |
| `parallel-queries.md` | Parallel Queries - If the number of queries you need to execute changes, you cannot use manual querying since that would break reactivity. |
| `queries.md` | Queries - If booleans aren't your thing, you can always use the `status` state as well: |
| `query-cancellation.md` | Query Cancellation |
| `query-retries.md` | Query Retries |

### framework/svelte/reference/functions/ (32 files)

| File | Description |
|------|-------------|
| `createInfiniteQuery.md` | The options for `createInfiniteQuery` are identical to `createQuery`, with the addition of |
| `createMutation.md` | Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects. |
| `createQueries.md` | The `createQueries` function can be used to fetch a variable number of queries. |
| `createQuery.md` | Subscribes to a query: a declarative dependency on an asynchronous source of data that is tied to a unique key. |
| `defaultShouldDehydrateMutation.md` | The default `shouldDehydrateMutation` predicate used by `dehydrate`. |
| `defaultShouldDehydrateQuery.md` | The default `shouldDehydrateQuery` predicate used by `dehydrate`. |
| `dehydrate.md` | Dehydrates a `QueryClient`'s cache (queries and mutations) into a plain, serializable `DehydratedState`, |
| `dehydrateQuery.md` | Dehydrates a single `Query` into a serializable `DehydratedQuery` snapshot. |
| `experimental_streamedQuery.md` | This is a helper function to create a query function that streams data from an AsyncIterable. |
| `getIsRestoringContext.md` | Retrieves a `isRestoring` from Svelte's context. |
| `getQueryClientContext.md` | Retrieves the `QueryClient` set on Svelte's context by `QueryClientProvider` (or by |
| `hashKey.md` | Default query & mutation keys hash function. |
| `hydrate.md` | Restores a `DehydratedState` (as produced by `dehydrate`) into a `QueryClient`'s cache, typically to seed the |
| `infiniteQueryOptions.md` | You can generally pass everything to `infiniteQueryOptions` that you can also pass to `createInfiniteQuery`. |
| `isCancelledError.md` | Checks whether a value is a `CancelledError`. |
| `keepPreviousData.md` | Intended to be passed as a query's `placeholderData` option, for example |
| `matchMutation.md` | Checks whether a mutation matches the given MutationFilters. |
| `matchQuery.md` | Checks whether a query matches the given QueryFilters. |
| `mutationOptions.md` | You can generally pass everything to `mutationOptions` that you can also pass to `createMutation`. |
| `noop.md` | A function that does nothing. |
| `partialMatchKey.md` | Checks if key `b` partially matches with key `a`. |
| `queryOptions.md` | You can generally pass everything to `queryOptions` that you can also pass to `createQuery`. |
| `replaceEqualDeep.md` | This function returns `a` if `b` is deeply equal. |
| `setIsRestoringContext.md` | Sets a `isRestoring` on Svelte's context. |
| `setQueryClientContext.md` | Sets a `QueryClient` on Svelte's context, so it can be read with getQueryClientContext (or |
| `shouldThrowError.md` | Resolves a `throwOnError` option to a boolean. |
| `useHydrate.md` | Adds a previously dehydrated `state` into the `queryClient` (from the nearest context, or the one |
| `useIsFetching.md` | The `useIsFetching` function returns the `number` of the queries that your application is loading or |
| `useIsMutating.md` | running (useful for app-wide loading indicators). |
| `useIsRestoring.md` | If you are using `PersistQueryClientProvider`, you can also use the `useIsRestoring` function alongside it to |
| `useMutationState.md` | API reference for `useMutationState` (svelte) |
| `useQueryClient.md` | The `useQueryClient` function returns the current `QueryClient` instance. |

### framework/vue/ (7 files)

| File | Description |
|------|-------------|
| `devtools.md` | Devtools - Wave your hands in the air and shout hooray because Vue Query comes with dedicated devtools! |
| `graphql.md` | GraphQL |
| `installation.md` | Installation - You can install Vue Query via NPM. |
| `overview.md` | Overview |
| `quick-start.md` | Quick Start - If you're looking for a fully functioning example, please have a look at our basic codesandbox example |
| `reactivity.md` | Reactivity - Vue uses the signals paradigm to handle and track reactivity. |
| `typescript.md` | TypeScript - Destructuring `useQuery()` directly gives you independent refs, and TypeScript cannot carry a narrowing from one ref to another — `if... |

### framework/vue/guides/ (34 files)

| File | Description |
|------|-------------|
| `background-fetching-indicators.md` | Background Fetching Indicators |
| `caching.md` | Caching Examples |
| `custom-client.md` | Custom Client - Vue Query allows providing custom `QueryClient` for Vue context. |
| `default-query-function.md` | Default Query Function |
| `dependent-queries.md` | Dependent Queries |
| `disabling-queries.md` | Disabling/Pausing Queries |
| `does-this-replace-client-state.md` | Does Vue Query replace Vuex, Pinia or other global state managers? |
| `filters.md` | Filters |
| `important-defaults.md` | Important Defaults |
| `infinite-queries.md` | Infinite Queries |
| `initial-query-data.md` | Initial Query Data |
| `invalidations-from-mutations.md` | Invalidations from Mutations |
| `migrating-to-v5.md` | Migrating to TanStack Query v5 - To fix compatibility with Vue 2, `useQueries` composable now returns `queries` array wrapped in `ref`. |
| `mutations.md` | Mutations - We also have an extensive offline example that covers both queries and mutations. |
| `network-mode.md` | Network Mode |
| `optimistic-updates.md` | Optimistic Updates |
| `paginated-queries.md` | Paginated / Lagged Queries |
| `parallel-queries.md` | Parallel Queries |
| `placeholder-query-data.md` | Placeholder Query Data |
| `polling.md` | Polling |
| `prefetching.md` | Prefetching - If you're lucky enough, you may know enough about what your users will do to be able to prefetch the data they need before it's needed. |
| `queries.md` | Queries |
| `query-cancellation.md` | Query Cancellation |
| `query-functions.md` | Query Functions |
| `query-invalidation.md` | Query Invalidation |
| `query-keys.md` | Query Keys |
| `query-options.md` | Query Options |
| `query-retries.md` | Query Retries |
| `scroll-restoration.md` | Scroll Restoration |
| `ssr.md` | SSR - Vue Query supports prefetching multiple queries on the server and then _dehydrating_ those queries to the queryClient. |
| `suspense.md` | Suspense (experimental) - Vue Query can also be used with Vue's new Suspense API's. |
| `testing.md` | Testing - Vue Query works by means of composables - either the ones we offer or custom ones that wrap around them. |
| `updates-from-mutation-responses.md` | Updates from Mutation Responses |
| `window-focus-refetching.md` | Window Focus Refetching |

### framework/vue/plugins/ (2 files)

| File | Description |
|------|-------------|
| `broadcastQueryClient.md` | broadcastQueryClient (Experimental) |
| `createPersister.md` | experimental_createQueryPersister - This utility comes as a separate package and is available under the `'@tanstack/query-persist-client-core'` import. |

### framework/vue/reference/functions/ (28 files)

| File | Description |
|------|-------------|
| `defaultShouldDehydrateMutation.md` | The default `shouldDehydrateMutation` predicate used by `dehydrate`. |
| `defaultShouldDehydrateQuery.md` | The default `shouldDehydrateQuery` predicate used by `dehydrate`. |
| `dehydrate.md` | Dehydrates a `QueryClient`'s cache (queries and mutations) into a plain, serializable `DehydratedState`, |
| `dehydrateQuery.md` | Dehydrates a single `Query` into a serializable `DehydratedQuery` snapshot. |
| `experimental_streamedQuery.md` | This is a helper function to create a query function that streams data from an AsyncIterable. |
| `hashKey.md` | Default query & mutation keys hash function. |
| `hydrate.md` | Restores a `DehydratedState` (as produced by `dehydrate`) into a `QueryClient`'s cache, typically to seed the |
| `infiniteQueryOptions.md` | You can generally pass everything to `infiniteQueryOptions` that you can also pass to `useInfiniteQuery`. |
| `isCancelledError.md` | Checks whether a value is a `CancelledError`. |
| `keepPreviousData.md` | Intended to be passed as a query's `placeholderData` option, for example |
| `matchMutation.md` | Checks whether a mutation matches the given MutationFilters. |
| `matchQuery.md` | Checks whether a query matches the given QueryFilters. |
| `mutationOptions.md` | You can generally pass everything to `mutationOptions` that you can also pass to `useMutation`. |
| `noop.md` | A function that does nothing. |
| `partialMatchKey.md` | Checks if key `b` partially matches with key `a`. |
| `queryOptions.md` | You can generally pass everything to `queryOptions` that you can also pass to `useQuery`. |
| `replaceEqualDeep.md` | This function returns `a` if `b` is deeply equal. |
| `shouldThrowError.md` | Resolves a `throwOnError` option to a boolean. |
| `useInfiniteQuery.md` | The options for `useInfiniteQuery` are identical to `useQuery`, with the addition of |
| `useIsFetching.md` | The `useIsFetching` composable returns a `ref` to the `number` of the queries that your application is |
| `useIsMutating.md` | The `useIsMutating` composable returns a `ref` to the `number` of mutations that your application currently |
| `useMutation.md` | Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects. |
| `useMutationState.md` | pass `filters` (MutationFilters) to narrow down your mutations, and `select` to transform the |
| `usePrefetchInfiniteQuery.md` | for kicking off a fetch ahead of the component that will actually render the data with `useInfiniteQuery`. |
| `usePrefetchQuery.md` | kicking off a fetch ahead of the component that will actually render the data with `useQuery`. |
| `useQueries.md` | The `useQueries` composable can be used to fetch a variable number of queries. |
| `useQuery.md` | This overload is selected when `initialData` is known to be defined, so the resulting `data` is never |
| `useQueryClient.md` | Retrieves the `QueryClient` installed by `VueQueryPlugin`, via Vue's `inject`. |
