# tanstack-query Table of Contents

## Directory Map

```
contents/
├── eslint/                         # ESLint plugin rules (9 files)
├── framework/
│   ├── angular/                    # Angular adapter (51 files)
│   │   ├── guides/                 # Usage guides (21 files)
│   │   └── reference/functions/   # API function references (16 files)
│   ├── lit/                        # Lit adapter (29 files)
│   │   ├── guides/                 # Usage guides (9 files)
│   │   └── reference/             # API references (classes + functions)
│   ├── preact/                     # Preact adapter (62 files)
│   │   ├── guides/                 # Usage guides (30 files)
│   │   ├── plugins/                # Plugin docs (5 files)
│   │   └── reference/functions/   # API function references (22 files)
│   ├── react/                      # React adapter (69 files)
│   │   ├── guides/                 # Usage guides (35 files)
│   │   ├── plugins/                # Plugin docs (5 files)
│   │   └── reference/             # API references (20 files)
│   ├── solid/                      # Solid adapter (52 files)
│   │   ├── guides/                 # Usage guides (30 files)
│   │   ├── plugins/                # Plugin docs (2 files)
│   │   └── reference/             # API references (11 files)
│   ├── svelte/                     # Svelte adapter (22 files)
│   │   └── reference/functions/   # API function references (17 files)
│   └── vue/                        # Vue adapter (57 files)
│       ├── guides/                 # Usage guides (30 files)
│       ├── plugins/                # Plugin docs (2 files)
│       └── reference/             # API references (14 files)
└── reference/                      # Core API reference (12 files)
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
| Caching guide (React) | `contents/framework/react/guides/caching.md` |
| useQuery API | `contents/framework/react/reference/useQuery.md` |
| useMutation API | `contents/framework/react/reference/useMutation.md` |
| QueryClient API | `contents/reference/QueryClient.md` |
| SSR / Next.js | `contents/framework/react/guides/ssr.md` |
| ESLint plugin | `contents/eslint/eslint-plugin-query.md` |

## Detailed Structure

### eslint/ (9 files)

| File | Description |
|------|-------------|
| `eslint-plugin-query.md` | Overview of ESLint plugin for TanStack Query |
| `exhaustive-deps.md` | Rule: exhaustive-deps |
| `infinite-query-property-order.md` | Rule: infinite-query-property-order |
| `mutation-property-order.md` | Rule: mutation-property-order |
| `no-rest-destructuring.md` | Rule: no-rest-destructuring |
| `no-unstable-deps.md` | Rule: no-unstable-deps |
| `no-void-query-fn.md` | Rule: no-void-query-fn |
| `prefer-query-options.md` | Rule: prefer-query-options |
| `stable-query-client.md` | Rule: stable-query-client |

### framework/react/ top-level (6 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation and setup |
| `overview.md` | Overview of React Query |
| `quick-start.md` | Quick start tutorial |
| `devtools.md` | React Query Devtools |
| `graphql.md` | Using with GraphQL |
| `comparison.md` | Comparison with other libraries |
| `react-native.md` | React Native support |
| `typescript.md` | TypeScript usage |

### framework/react/guides/ (35 files)

| File | Description |
|------|-------------|
| `queries.md` | Writing and using queries |
| `query-keys.md` | Query key patterns and best practices |
| `query-functions.md` | Writing query functions |
| `query-options.md` | queryOptions helper |
| `mutations.md` | Writing and using mutations |
| `caching.md` | Caching behavior |
| `important-defaults.md` | Default configuration |
| `background-fetching-indicators.md` | Background fetch UX patterns |
| `window-focus-refetching.md` | Window focus refetch behavior |
| `network-mode.md` | Offline and network mode |
| `parallel-queries.md` | Running queries in parallel |
| `dependent-queries.md` | Dependent/chained queries |
| `paginated-queries.md` | Paginated query patterns |
| `infinite-queries.md` | Infinite scroll / load more |
| `initial-query-data.md` | Setting initial data |
| `placeholder-query-data.md` | Placeholder data while loading |
| `prefetching.md` | Prefetching data |
| `query-invalidation.md` | Invalidating and refetching |
| `invalidations-from-mutations.md` | Invalidating after mutations |
| `updates-from-mutation-responses.md` | Updating cache from mutation results |
| `optimistic-updates.md` | Optimistic UI updates |
| `query-cancellation.md` | Cancelling in-flight requests |
| `query-retries.md` | Retry behavior |
| `filters.md` | Query and mutation filters |
| `does-this-replace-client-state.md` | When to use vs. client state |
| `default-query-function.md` | Setting a global query function |
| `scroll-restoration.md` | Scroll position restoration |
| `render-optimizations.md` | Rendering performance |
| `request-waterfalls.md` | Avoiding request waterfalls |
| `polling.md` | Polling / refetchInterval |
| `ssr.md` | Server-side rendering |
| `advanced-ssr.md` | Advanced SSR patterns |
| `suspense.md` | React Suspense integration |
| `testing.md` | Testing queries and mutations |
| `migrating-to-v5.md` | Migration guide to v5 |

### framework/react/reference/ (20 files)

| File | Description |
|------|-------------|
| `useQuery.md` | useQuery hook API |
| `useInfiniteQuery.md` | useInfiniteQuery hook API |
| `useMutation.md` | useMutation hook API |
| `useQueries.md` | useQueries hook API |
| `useSuspenseQuery.md` | useSuspenseQuery hook API |
| `useSuspenseInfiniteQuery.md` | useSuspenseInfiniteQuery hook API |
| `useSuspenseQueries.md` | useSuspenseQueries hook API |
| `useIsFetching.md` | useIsFetching hook API |
| `useIsMutating.md` | useIsMutating hook API |
| `useMutationState.md` | useMutationState hook API |
| `useQueryClient.md` | useQueryClient hook API |
| `useQueryErrorResetBoundary.md` | useQueryErrorResetBoundary hook API |
| `usePrefetchQuery.md` | usePrefetchQuery hook API |
| `usePrefetchInfiniteQuery.md` | usePrefetchInfiniteQuery hook API |
| `QueryClientProvider.md` | QueryClientProvider component |
| `QueryErrorResetBoundary.md` | QueryErrorResetBoundary component |
| `queryOptions.md` | queryOptions helper |
| `infiniteQueryOptions.md` | infiniteQueryOptions helper |
| `mutationOptions.md` | mutationOptions helper |
| `hydration.md` | Hydration APIs for SSR |

### framework/react/plugins/ (5 files)

| File | Description |
|------|-------------|
| `persistQueryClient.md` | Persist query cache to storage |
| `createSyncStoragePersister.md` | Sync storage persister |
| `createAsyncStoragePersister.md` | Async storage persister |
| `createPersister.md` | Generic persister creator |
| `broadcastQueryClient.md` | Sync cache across browser tabs |

### framework/vue/ top-level (6 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation and setup |
| `overview.md` | Overview of Vue Query |
| `quick-start.md` | Quick start tutorial |
| `devtools.md` | Devtools |
| `graphql.md` | Using with GraphQL |
| `typescript.md` | TypeScript usage |
| `reactivity.md` | Vue reactivity integration |

### framework/vue/guides/ (30 files)

Similar to React guides — covers queries, mutations, caching, SSR, infinite queries, optimistic updates, prefetching, testing, filters, suspense, and migration to v5.

### framework/vue/reference/ (14 files)

| File | Description |
|------|-------------|
| `useQuery.md` | useQuery composable API |
| `useInfiniteQuery.md` | useInfiniteQuery composable API |
| `useMutation.md` | useMutation composable API |
| `useQueries.md` | useQueries composable API |
| `useIsFetching.md` | useIsFetching composable API |
| `useIsMutating.md` | useIsMutating composable API |
| `useMutationState.md` | useMutationState composable API |
| `useQueryClient.md` | useQueryClient composable API |
| `usePrefetchQuery.md` | usePrefetchQuery composable API |
| `usePrefetchInfiniteQuery.md` | usePrefetchInfiniteQuery composable API |
| `queryOptions.md` | queryOptions helper |
| `infiniteQueryOptions.md` | infiniteQueryOptions helper |
| `mutationOptions.md` | mutationOptions helper |
| `hydration.md` | Hydration APIs for SSR |

### framework/angular/ top-level (6 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation and setup |
| `overview.md` | Overview of Angular Query |
| `quick-start.md` | Quick start tutorial |
| `devtools.md` | Devtools |
| `typescript.md` | TypeScript usage |
| `zoneless.md` | Zoneless Angular support |
| `angular-httpclient-and-other-data-fetching-clients.md` | Integration with HttpClient |

### framework/angular/guides/ (21 files)

Similar to React guides — covers queries, mutations, caching, infinite queries, optimistic updates, prefetching, testing, SSR, and filters.

### framework/angular/reference/functions/ (16 files)

| File | Description |
|------|-------------|
| `injectQuery.md` | injectQuery function API |
| `injectInfiniteQuery.md` | injectInfiniteQuery function API |
| `injectMutation.md` | injectMutation function API |
| `injectMutationState.md` | injectMutationState function API |
| `injectIsFetching.md` | injectIsFetching function API |
| `injectIsMutating.md` | injectIsMutating function API |
| `injectIsRestoring.md` | injectIsRestoring function API |
| `injectQueryClient.md` | injectQueryClient function API |
| `queryOptions.md` | queryOptions helper |
| `infiniteQueryOptions.md` | infiniteQueryOptions helper |
| `mutationOptions.md` | mutationOptions helper |
| `provideAngularQuery.md` | provideAngularQuery setup function |
| `provideTanStackQuery.md` | provideTanStackQuery setup function |
| `provideQueryClient.md` | provideQueryClient function |
| `provideIsRestoring.md` | provideIsRestoring function |
| `queryFeature.md` | queryFeature function |

### framework/solid/ (52 files)

Covers installation, overview, quick-start, devtools, TypeScript, guides (queries, mutations, caching, SSR, suspense, infinite queries, etc.), plugins (broadcastQueryClient, createPersister), and reference (useQuery, useMutation, useInfiniteQuery, etc.).

### framework/svelte/ (22 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation and setup |
| `overview.md` | Overview of Svelte Query |
| `devtools.md` | Devtools |
| `ssr.md` | SSR support |
| `migrate-from-v5-to-v6.md` | Migration guide from v5 to v6 |

Reference functions include: `createQuery`, `createInfiniteQuery`, `createMutation`, `createQueries`, `queryOptions`, `infiniteQueryOptions`, `mutationOptions`, `useIsFetching`, `useIsMutating`, `useQueryClient`, and hydration utilities.

### framework/preact/ (62 files)

Similar to React — installation, overview, quick-start, devtools, graphql, TypeScript, guides, plugins, and function references (useQuery, useMutation, useInfiniteQuery, etc.).

### framework/lit/ (29 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation and setup |
| `overview.md` | Overview of Lit Query |
| `quick-start.md` | Quick start tutorial |
| `typescript.md` | TypeScript usage |

Guides include: queries, mutations, infinite queries, parallel queries, SSR, query keys, query invalidation, reactive controllers vs hooks.

Reference functions include: `createQueryController`, `createInfiniteQueryController`, `createMutationController`, `createQueriesController`, `queryOptions`, `useQueryClient`, etc.

### reference/ (12 files) — Core API

| File | Description |
|------|-------------|
| `QueryClient.md` | QueryClient class — cache interaction, fetching, invalidation |
| `QueryCache.md` | QueryCache class — cache storage |
| `MutationCache.md` | MutationCache class |
| `QueryObserver.md` | QueryObserver class |
| `InfiniteQueryObserver.md` | InfiniteQueryObserver class |
| `QueriesObserver.md` | QueriesObserver class |
| `focusManager.md` | FocusManager — window focus events |
| `onlineManager.md` | OnlineManager — network status |
| `notifyManager.md` | NotifyManager — scheduling notifications |
| `environmentManager.md` | EnvironmentManager |
| `streamedQuery.md` | Streaming query support |
| `timeoutManager.md` | TimeoutManager |
