# tanstack-query Table of Contents

## Directory Map

```
contents/
├── community-resources.md
├── eslint/            # ESLint plugin rules (9 files)
└── framework/
    ├── angular/  # angular adapter (66 files: guides, plugins, reference/functions)
    ├── lit/  # lit adapter (44 files: guides, plugins, reference/functions)
    ├── preact/  # preact adapter (81 files: guides, plugins, reference/functions)
    ├── react/  # react adapter (87 files: guides, plugins, reference/functions)
    ├── solid/  # solid adapter (69 files: guides, plugins, reference/functions)
    ├── svelte/  # svelte adapter (47 files: guides, plugins, reference/functions)
    ├── vue/  # vue adapter (71 files: guides, plugins, reference/functions)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| React quick start | `contents/framework/react/quick-start.md` |
| React installation | `contents/framework/react/installation.md` |
| Vue quick start | `contents/framework/vue/quick-start.md` |
| Angular quick start | `contents/framework/angular/quick-start.md` |
| Queries guide (React) | `contents/framework/react/guides/queries.md` |
| Mutations guide (React) | `contents/framework/react/guides/mutations.md` |
| useQuery API | `contents/framework/react/reference/functions/useQuery.md` |
| useMutation API | `contents/framework/react/reference/functions/useMutation.md` |
| SSR / Next.js | `contents/framework/react/guides/ssr.md` |
| ESLint plugin | `contents/eslint/eslint-plugin-query.md` |

## Detailed Structure

### (root) (1 files)

| File | Description |
|------|-------------|
| `community-resources.md` | Community Resources |

### eslint/ (9 files)

| File | Description |
|------|-------------|
| `eslint-plugin-query.md` | ESLint Plugin Query |
| `exhaustive-deps.md` | Exhaustive dependencies for query keys |
| `infinite-query-property-order.md` | Ensure correct order of inference sensitive properties for infinite queries |
| `mutation-property-order.md` | Ensure correct order of inference-sensitive properties in useMutation() |
| `no-rest-destructuring.md` | Disallow object rest destructuring on query results |
| `no-unstable-deps.md` | Disallow putting the result of query hooks directly in a React hook dependency array |
| `no-void-query-fn.md` | Disallow returning void from query functions |
| `prefer-query-options.md` | Prefer the use of queryOptions |
| `stable-query-client.md` | Stable Query Client |

### framework/angular/ (7 files)

| File | Description |
|------|-------------|
| `angular-httpclient-and-other-data-fetching-clients.md` | Angular HttpClient and other data fetching clients |
| `devtools.md` | Devtools |
| `installation.md` | Installation |
| `overview.md` | Overview |
| `quick-start.md` | Quick Start |
| `typescript.md` | TypeScript |
| `zoneless.md` | Zoneless Angular |

### framework/angular/guides/ (28 files)

| File | Description |
|------|-------------|
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
| `mutation-options.md` | Mutation Options |
| `mutations.md` | Mutations |
| `network-mode.md` | Network Mode |
| `optimistic-updates.md` | Optimistic Updates |
| `paginated-queries.md` | Paginated / Lagged Queries |
| `parallel-queries.md` | Parallel Queries |
| `placeholder-query-data.md` | Placeholder Query Data |
| `queries.md` | Queries |
| `query-cancellation.md` | Query Cancellation |
| `query-functions.md` | Query Functions |
| `query-invalidation.md` | Query Invalidation |
| `query-keys.md` | Query Keys |
| `query-options.md` | Query Options |
| `query-retries.md` | Query Retries |
| `scroll-restoration.md` | Scroll Restoration |
| `testing.md` | Testing |
| `window-focus-refetching.md` | Window Focus Refetching |

### framework/angular/reference/functions/ (31 files)

| File | Description |
|------|-------------|
| `defaultShouldDehydrateMutation.md` | defaultShouldDehydrateMutation |
| `defaultShouldDehydrateQuery.md` | defaultShouldDehydrateQuery |
| `dehydrate.md` | dehydrate |
| `dehydrateQuery.md` | dehydrateQuery |
| `experimental_streamedQuery.md` | experimental_streamedQuery |
| `hashKey.md` | hashKey |
| `hydrate.md` | hydrate |
| `infiniteQueryOptions.md` | infiniteQueryOptions |
| `injectInfiniteQuery.md` | injectInfiniteQuery |
| `injectIsFetching.md` | injectIsFetching |
| `injectIsMutating.md` | injectIsMutating |
| `injectIsRestoring.md` | injectIsRestoring |
| `injectMutation.md` | injectMutation |
| `injectMutationState.md` | injectMutationState |
| `injectQuery.md` | injectQuery |
| `injectQueryClient.md` | injectQueryClient |
| `isCancelledError.md` | isCancelledError |
| `keepPreviousData.md` | keepPreviousData |
| `matchMutation.md` | matchMutation |
| `matchQuery.md` | matchQuery |
| `mutationOptions.md` | mutationOptions |
| `noop.md` | noop |
| `partialMatchKey.md` | partialMatchKey |
| `provideAngularQuery.md` | provideAngularQuery |
| `provideIsRestoring.md` | provideIsRestoring |
| `provideQueryClient.md` | provideQueryClient |
| `provideTanStackQuery.md` | provideTanStackQuery |
| `queryFeature.md` | queryFeature |
| `queryOptions.md` | queryOptions |
| `replaceEqualDeep.md` | replaceEqualDeep |
| `shouldThrowError.md` | shouldThrowError |

### framework/lit/ (4 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation |
| `overview.md` | Overview |
| `quick-start.md` | Quick Start |
| `typescript.md` | TypeScript |

### framework/lit/guides/ (10 files)

| File | Description |
|------|-------------|
| `infinite-queries.md` | Infinite Queries |
| `mutations.md` | Mutations |
| `parallel-queries.md` | Parallel Queries |
| `queries.md` | Queries |
| `query-functions.md` | Query Functions |
| `query-invalidation.md` | Query Invalidation |
| `query-keys.md` | Query Keys |
| `reactive-controllers-vs-hooks.md` | Reactive Controllers vs Hooks |
| `ssr.md` | Server Rendering & Hydration |
| `testing.md` | Testing |

### framework/lit/reference/functions/ (30 files)

| File | Description |
|------|-------------|
| `createInfiniteQueryController.md` | createInfiniteQueryController |
| `createMutationController.md` | createMutationController |
| `createQueriesController.md` | createQueriesController |
| `createQueryController.md` | createQueryController |
| `defaultShouldDehydrateMutation.md` | defaultShouldDehydrateMutation |
| `defaultShouldDehydrateQuery.md` | defaultShouldDehydrateQuery |
| `dehydrate.md` | dehydrate |
| `dehydrateQuery.md` | dehydrateQuery |
| `experimental_streamedQuery.md` | experimental_streamedQuery |
| `getDefaultQueryClient.md` | getDefaultQueryClient |
| `hashKey.md` | hashKey |
| `hydrate.md` | hydrate |
| `infiniteQueryOptions.md` | infiniteQueryOptions |
| `isCancelledError.md` | isCancelledError |
| `keepPreviousData.md` | keepPreviousData |
| `matchMutation.md` | matchMutation |
| `matchQuery.md` | matchQuery |
| `mutationOptions.md` | mutationOptions |
| `noop.md` | noop |
| `partialMatchKey.md` | partialMatchKey |
| `queryOptions.md` | queryOptions |
| `registerDefaultQueryClient.md` | registerDefaultQueryClient |
| `replaceEqualDeep.md` | replaceEqualDeep |
| `resolveQueryClient.md` | resolveQueryClient |
| `shouldThrowError.md` | shouldThrowError |
| `unregisterDefaultQueryClient.md` | unregisterDefaultQueryClient |
| `useIsFetching.md` | useIsFetching |
| `useIsMutating.md` | useIsMutating |
| `useMutationState.md` | useMutationState |
| `useQueryClient.md` | useQueryClient |

### framework/preact/ (6 files)

| File | Description |
|------|-------------|
| `devtools.md` | Devtools |
| `graphql.md` | GraphQL |
| `installation.md` | Installation |
| `overview.md` | Overview |
| `quick-start.md` | Quick Start |
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
| `mutations.md` | Mutations |
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
| `ssr.md` | Server Rendering & Hydration |
| `suspense.md` | Suspense |
| `testing.md` | Testing |
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
| `HydrationBoundary.md` | HydrationBoundary |
| `QueryClientProvider.md` | QueryClientProvider |
| `QueryErrorResetBoundary.md` | QueryErrorResetBoundary |
| `defaultShouldDehydrateMutation.md` | defaultShouldDehydrateMutation |
| `defaultShouldDehydrateQuery.md` | defaultShouldDehydrateQuery |
| `dehydrate.md` | dehydrate |
| `dehydrateQuery.md` | dehydrateQuery |
| `experimental_streamedQuery.md` | experimental_streamedQuery |
| `hashKey.md` | hashKey |
| `hydrate.md` | hydrate |
| `infiniteQueryOptions.md` | infiniteQueryOptions |
| `isCancelledError.md` | isCancelledError |
| `keepPreviousData.md` | keepPreviousData |
| `matchMutation.md` | matchMutation |
| `matchQuery.md` | matchQuery |
| `mutationOptions.md` | mutationOptions |
| `noop.md` | noop |
| `partialMatchKey.md` | partialMatchKey |
| `queryOptions.md` | queryOptions |
| `replaceEqualDeep.md` | replaceEqualDeep |
| `shouldThrowError.md` | shouldThrowError |
| `useInfiniteQuery.md` | useInfiniteQuery |
| `useIsFetching.md` | useIsFetching |
| `useIsMutating.md` | useIsMutating |
| `useIsRestoring.md` | useIsRestoring |
| `useMutation.md` | useMutation |
| `useMutationState.md` | useMutationState |
| `usePrefetchInfiniteQuery.md` | usePrefetchInfiniteQuery |
| `usePrefetchQuery.md` | usePrefetchQuery |
| `useQueries.md` | useQueries |
| `useQuery.md` | useQuery |
| `useQueryClient.md` | useQueryClient |
| `useQueryErrorResetBoundary.md` | useQueryErrorResetBoundary |
| `useSuspenseInfiniteQuery.md` | useSuspenseInfiniteQuery |
| `useSuspenseQueries.md` | useSuspenseQueries |
| `useSuspenseQuery.md` | useSuspenseQuery |

### framework/react/ (8 files)

| File | Description |
|------|-------------|
| `comparison.md` | Comparison | React Query vs SWR vs Apollo vs RTK Query vs React Router |
| `devtools.md` | Devtools |
| `graphql.md` | GraphQL |
| `installation.md` | Installation |
| `overview.md` | Overview |
| `quick-start.md` | Quick Start |
| `react-native.md` | React Native |
| `typescript.md` | TypeScript |

### framework/react/guides/ (38 files)

| File | Description |
|------|-------------|
| `advanced-ssr.md` | Advanced Server Rendering |
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
| `migrating-to-react-query-3.md` | Migrating to React Query 3 |
| `migrating-to-react-query-4.md` | Migrating to React Query 4 |
| `migrating-to-v5.md` | Migrating to TanStack Query v5 |
| `mutations.md` | Mutations |
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
| `ssr.md` | Server Rendering & Hydration |
| `suspense.md` | Suspense |
| `testing.md` | Testing |
| `updates-from-mutation-responses.md` | Updates from Mutation Responses |
| `window-focus-refetching.md` | Window Focus Refetching |

### framework/react/plugins/ (5 files)

| File | Description |
|------|-------------|
| `broadcastQueryClient.md` | broadcastQueryClient (Experimental) |
| `createAsyncStoragePersister.md` | createAsyncStoragePersister |
| `createPersister.md` | experimental_createQueryPersister |
| `createSyncStoragePersister.md` | createSyncStoragePersister |
| `persistQueryClient.md` | persistQueryClient |

### framework/react/reference/functions/ (36 files)

| File | Description |
|------|-------------|
| `HydrationBoundary.md` | HydrationBoundary |
| `QueryClientProvider.md` | QueryClientProvider |
| `QueryErrorResetBoundary.md` | QueryErrorResetBoundary |
| `defaultShouldDehydrateMutation.md` | defaultShouldDehydrateMutation |
| `defaultShouldDehydrateQuery.md` | defaultShouldDehydrateQuery |
| `dehydrate.md` | dehydrate |
| `dehydrateQuery.md` | dehydrateQuery |
| `experimental_streamedQuery.md` | experimental_streamedQuery |
| `hashKey.md` | hashKey |
| `hydrate.md` | hydrate |
| `infiniteQueryOptions.md` | infiniteQueryOptions |
| `isCancelledError.md` | isCancelledError |
| `keepPreviousData.md` | keepPreviousData |
| `matchMutation.md` | matchMutation |
| `matchQuery.md` | matchQuery |
| `mutationOptions.md` | mutationOptions |
| `noop.md` | noop |
| `partialMatchKey.md` | partialMatchKey |
| `queryOptions.md` | queryOptions |
| `replaceEqualDeep.md` | replaceEqualDeep |
| `shouldThrowError.md` | shouldThrowError |
| `useInfiniteQuery.md` | useInfiniteQuery |
| `useIsFetching.md` | useIsFetching |
| `useIsMutating.md` | useIsMutating |
| `useIsRestoring.md` | useIsRestoring |
| `useMutation.md` | useMutation |
| `useMutationState.md` | useMutationState |
| `usePrefetchInfiniteQuery.md` | usePrefetchInfiniteQuery |
| `usePrefetchQuery.md` | usePrefetchQuery |
| `useQueries.md` | useQueries |
| `useQuery.md` | useQuery |
| `useQueryClient.md` | useQueryClient |
| `useQueryErrorResetBoundary.md` | useQueryErrorResetBoundary |
| `useSuspenseInfiniteQuery.md` | useSuspenseInfiniteQuery |
| `useSuspenseQueries.md` | useSuspenseQueries |
| `useSuspenseQuery.md` | useSuspenseQuery |

### framework/solid/ (5 files)

| File | Description |
|------|-------------|
| `devtools.md` | Devtools |
| `installation.md` | Installation |
| `overview.md` | Overview |
| `quick-start.md` | Quick Start |
| `typescript.md` | TypeScript |

### framework/solid/guides/ (34 files)

| File | Description |
|------|-------------|
| `advanced-ssr.md` | Advanced Server Rendering |
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
| `mutations.md` | Mutations |
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
| `request-waterfalls.md` | Performance & Request Waterfalls |
| `scroll-restoration.md` | Scroll Restoration |
| `ssr.md` | SSR |
| `suspense.md` | Suspense |
| `testing.md` | Testing |
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
| `QueryClientProvider.md` | QueryClientProvider |
| `defaultShouldDehydrateMutation.md` | defaultShouldDehydrateMutation |
| `defaultShouldDehydrateQuery.md` | defaultShouldDehydrateQuery |
| `dehydrate.md` | dehydrate |
| `dehydrateQuery.md` | dehydrateQuery |
| `experimental_streamedQuery.md` | experimental_streamedQuery |
| `hashKey.md` | hashKey |
| `hydrate.md` | hydrate |
| `infiniteQueryOptions.md` | infiniteQueryOptions |
| `isCancelledError.md` | isCancelledError |
| `keepPreviousData.md` | keepPreviousData |
| `matchMutation.md` | matchMutation |
| `matchQuery.md` | matchQuery |
| `mutationOptions.md` | mutationOptions |
| `noop.md` | noop |
| `partialMatchKey.md` | partialMatchKey |
| `queryOptions.md` | queryOptions |
| `replaceEqualDeep.md` | replaceEqualDeep |
| `shouldThrowError.md` | shouldThrowError |
| `useInfiniteQuery.md` | useInfiniteQuery |
| `useIsFetching.md` | useIsFetching |
| `useIsMutating.md` | useIsMutating |
| `useIsRestoring.md` | useIsRestoring |
| `useMutation.md` | useMutation |
| `useMutationState.md` | useMutationState |
| `useQueries.md` | useQueries |
| `useQuery.md` | useQuery |
| `useQueryClient.md` | useQueryClient |

### framework/svelte/ (7 files)

| File | Description |
|------|-------------|
| `devtools.md` | Devtools |
| `installation.md` | Installation |
| `migrate-from-v5-to-v6.md` | migrate-from-v5-to-v6 |
| `overview.md` | Overview |
| `quick-start.md` | Quick Start |
| `ssr.md` | SSR and SvelteKit |
| `testing.md` | Testing |

### framework/svelte/guides/ (8 files)

| File | Description |
|------|-------------|
| `invalidations-from-mutations.md` | Invalidations from Mutations |
| `mutations.md` | Mutations |
| `network-mode.md` | Network Mode |
| `optimistic-updates.md` | Optimistic Updates |
| `parallel-queries.md` | Parallel Queries |
| `queries.md` | Queries |
| `query-cancellation.md` | Query Cancellation |
| `query-retries.md` | Query Retries |

### framework/svelte/reference/functions/ (32 files)

| File | Description |
|------|-------------|
| `createInfiniteQuery.md` | createInfiniteQuery |
| `createMutation.md` | createMutation |
| `createQueries.md` | createQueries |
| `createQuery.md` | createQuery |
| `defaultShouldDehydrateMutation.md` | defaultShouldDehydrateMutation |
| `defaultShouldDehydrateQuery.md` | defaultShouldDehydrateQuery |
| `dehydrate.md` | dehydrate |
| `dehydrateQuery.md` | dehydrateQuery |
| `experimental_streamedQuery.md` | experimental_streamedQuery |
| `getIsRestoringContext.md` | getIsRestoringContext |
| `getQueryClientContext.md` | getQueryClientContext |
| `hashKey.md` | hashKey |
| `hydrate.md` | hydrate |
| `infiniteQueryOptions.md` | infiniteQueryOptions |
| `isCancelledError.md` | isCancelledError |
| `keepPreviousData.md` | keepPreviousData |
| `matchMutation.md` | matchMutation |
| `matchQuery.md` | matchQuery |
| `mutationOptions.md` | mutationOptions |
| `noop.md` | noop |
| `partialMatchKey.md` | partialMatchKey |
| `queryOptions.md` | queryOptions |
| `replaceEqualDeep.md` | replaceEqualDeep |
| `setIsRestoringContext.md` | setIsRestoringContext |
| `setQueryClientContext.md` | setQueryClientContext |
| `shouldThrowError.md` | shouldThrowError |
| `useHydrate.md` | useHydrate |
| `useIsFetching.md` | useIsFetching |
| `useIsMutating.md` | useIsMutating |
| `useIsRestoring.md` | useIsRestoring |
| `useMutationState.md` | useMutationState |
| `useQueryClient.md` | useQueryClient |

### framework/vue/ (7 files)

| File | Description |
|------|-------------|
| `devtools.md` | Devtools |
| `graphql.md` | GraphQL |
| `installation.md` | Installation |
| `overview.md` | Overview |
| `quick-start.md` | Quick Start |
| `reactivity.md` | Reactivity |
| `typescript.md` | TypeScript |

### framework/vue/guides/ (34 files)

| File | Description |
|------|-------------|
| `background-fetching-indicators.md` | Background Fetching Indicators |
| `caching.md` | Caching Examples |
| `custom-client.md` | Custom Client |
| `default-query-function.md` | Default Query Function |
| `dependent-queries.md` | Dependent Queries |
| `disabling-queries.md` | Disabling/Pausing Queries |
| `does-this-replace-client-state.md` | Does Vue Query replace Vuex, Pinia or other global state managers? |
| `filters.md` | Filters |
| `important-defaults.md` | Important Defaults |
| `infinite-queries.md` | Infinite Queries |
| `initial-query-data.md` | Initial Query Data |
| `invalidations-from-mutations.md` | Invalidations from Mutations |
| `migrating-to-v5.md` | Migrating to TanStack Query v5 |
| `mutations.md` | Mutations |
| `network-mode.md` | Network Mode |
| `optimistic-updates.md` | Optimistic Updates |
| `paginated-queries.md` | Paginated / Lagged Queries |
| `parallel-queries.md` | Parallel Queries |
| `placeholder-query-data.md` | Placeholder Query Data |
| `polling.md` | Polling |
| `prefetching.md` | Prefetching |
| `queries.md` | Queries |
| `query-cancellation.md` | Query Cancellation |
| `query-functions.md` | Query Functions |
| `query-invalidation.md` | Query Invalidation |
| `query-keys.md` | Query Keys |
| `query-options.md` | Query Options |
| `query-retries.md` | Query Retries |
| `scroll-restoration.md` | Scroll Restoration |
| `ssr.md` | SSR |
| `suspense.md` | Suspense (experimental) |
| `testing.md` | Testing |
| `updates-from-mutation-responses.md` | Updates from Mutation Responses |
| `window-focus-refetching.md` | Window Focus Refetching |

### framework/vue/plugins/ (2 files)

| File | Description |
|------|-------------|
| `broadcastQueryClient.md` | broadcastQueryClient (Experimental) |
| `createPersister.md` | experimental_createQueryPersister |

### framework/vue/reference/functions/ (28 files)

| File | Description |
|------|-------------|
| `defaultShouldDehydrateMutation.md` | defaultShouldDehydrateMutation |
| `defaultShouldDehydrateQuery.md` | defaultShouldDehydrateQuery |
| `dehydrate.md` | dehydrate |
| `dehydrateQuery.md` | dehydrateQuery |
| `experimental_streamedQuery.md` | experimental_streamedQuery |
| `hashKey.md` | hashKey |
| `hydrate.md` | hydrate |
| `infiniteQueryOptions.md` | infiniteQueryOptions |
| `isCancelledError.md` | isCancelledError |
| `keepPreviousData.md` | keepPreviousData |
| `matchMutation.md` | matchMutation |
| `matchQuery.md` | matchQuery |
| `mutationOptions.md` | mutationOptions |
| `noop.md` | noop |
| `partialMatchKey.md` | partialMatchKey |
| `queryOptions.md` | queryOptions |
| `replaceEqualDeep.md` | replaceEqualDeep |
| `shouldThrowError.md` | shouldThrowError |
| `useInfiniteQuery.md` | useInfiniteQuery |
| `useIsFetching.md` | useIsFetching |
| `useIsMutating.md` | useIsMutating |
| `useMutation.md` | useMutation |
| `useMutationState.md` | useMutationState |
| `usePrefetchInfiniteQuery.md` | usePrefetchInfiniteQuery |
| `usePrefetchQuery.md` | usePrefetchQuery |
| `useQueries.md` | useQueries |
| `useQuery.md` | useQuery |
| `useQueryClient.md` | useQueryClient |
