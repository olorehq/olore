# tanstack-query Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/framework/react/` | Core documentation, setup, and overview | 7 |
| `contents/framework/react/guides/` | How-to guides and concepts | 29 |
| `contents/framework/react/reference/` | API reference for hooks and classes | 19 |
| `contents/framework/react/plugins/` | Plugin documentation | 4 |

## framework/react/

| File | Description |
|------|-------------|
| `overview.md` | Introduction to React Query and motivation |
| `installation.md` | How to install React Query |
| `quick-start.md` | Quick start guide with basic examples |
| `comparison.md` | Comparison with other data-fetching solutions |
| `devtools.md` | React Query DevTools documentation |
| `graphql.md` | Using React Query with GraphQL |
| `react-native.md` | React Native specific considerations |
| `typescript.md` | TypeScript usage and type definitions |

## guides/

| File | Description |
|------|-------------|
| `queries.md` | Core queries documentation |
| `mutations.md` | Core mutations documentation |
| `query-keys.md` | Query key management |
| `query-functions.md` | Writing query functions |
| `query-invalidation.md` | Invalidating and refetching queries |
| `query-cancellation.md` | Canceling queries |
| `query-retries.md` | Automatic retry logic |
| `caching.md` | Caching behavior and configuration |
| `important-defaults.md` | Understanding React Query defaults |
| `parallel-queries.md` | Running queries in parallel |
| `dependent-queries.md` | Queries that depend on other queries |
| `disabling-queries.md` | Conditionally enabling/disabling queries |
| `infinite-queries.md` | Infinite scrolling and pagination |
| `paginated-queries.md` | Paginated data fetching |
| `prefetching.md` | Prefetching data |
| `initial-query-data.md` | Setting initial query data |
| `placeholder-query-data.md` | Using placeholder data |
| `background-fetching-indicators.md` | Showing background refetch indicators |
| `window-focus-refetching.md` | Refetch on window focus |
| `optimistic-updates.md` | Optimistic UI updates |
| `invalidations-from-mutations.md` | Invalidating queries from mutations |
| `updates-from-mutation-responses.md` | Updating cache from mutation responses |
| `default-query-function.md` | Setting a default query function |
| `filters.md` | Query and mutation filters |
| `ssr.md` | Server-side rendering |
| `suspense.md` | React Suspense integration |
| `scroll-restoration.md` | Scroll restoration patterns |
| `testing.md` | Testing React Query |
| `migrating-to-react-query-3.md` | Migration guide from v2 to v3 |
| `does-this-replace-client-state.md` | When to use React Query vs client state |

## reference/

| File | Description |
|------|-------------|
| `useQuery.md` | useQuery hook API |
| `useQueries.md` | useQueries hook API (parallel queries) |
| `useInfiniteQuery.md` | useInfiniteQuery hook API |
| `useMutation.md` | useMutation hook API |
| `useIsFetching.md` | useIsFetching hook API |
| `useIsMutating.md` | useIsMutating hook API |
| `useQueryClient.md` | useQueryClient hook API |
| `useQueryErrorResetBoundary.md` | useQueryErrorResetBoundary hook API |
| `QueryClient.md` | QueryClient class API |
| `QueryClientProvider.md` | QueryClientProvider component |
| `QueryCache.md` | QueryCache class API |
| `MutationCache.md` | MutationCache class API |
| `QueryObserver.md` | QueryObserver class API |
| `InfiniteQueryObserver.md` | InfiniteQueryObserver class API |
| `QueriesObserver.md` | QueriesObserver class API |
| `QueryErrorResetBoundary.md` | QueryErrorResetBoundary component |
| `hydration.md` | Hydration utilities for SSR |
| `focusManager.md` | Focus manager API |
| `onlineManager.md` | Online manager API |
| `setLogger.md` | Custom logger configuration |

## plugins/

| File | Description |
|------|-------------|
| `persistQueryClient.md` | Query persistence plugin |
| `createWebStoragePersistor.md` | Web storage persistence |
| `createAsyncStoragePersistor.md` | Async storage persistence (React Native) |
| `broadcastQueryClient.md` | Cross-tab query synchronization |
