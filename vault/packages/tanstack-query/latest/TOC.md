# TanStack Query Table of Contents

## Directory Map

```
contents/
├── community-resources.md      # External tutorials, blog posts, videos
├── eslint/                     # ESLint plugin rules (8 files)
├── framework/                  # Framework-specific integrations
│   ├── react/                  # React Query (71 files)
│   │   ├── installation.md
│   │   ├── quick-start.md
│   │   ├── guides/             # Core concepts (37 files)
│   │   ├── plugins/            # Plugins (5 files)
│   │   └── reference/          # API reference (20 files)
│   ├── vue/                    # Vue Query (53 files)
│   │   ├── guides/             # Shared concepts (33 files)
│   │   ├── plugins/            # Plugins (2 files)
│   │   └── reference/          # API reference (11 files)
│   ├── angular/                # Angular Query (85 files)
│   │   ├── guides/             # Core concepts (28 files)
│   │   └── reference/          # API reference (50 files)
│   ├── svelte/                 # Svelte Query (44 files)
│   │   └── reference/          # API reference (39 files)
│   └── solid/                  # Solid Query (50 files)
│       ├── guides/             # Core concepts (33 files)
│       ├── plugins/            # Plugins (2 files)
│       └── reference/          # API reference (10 files)
└── reference/                  # Core Query classes (11 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started with React | `contents/framework/react/quick-start.md` |
| Getting started with Vue | `contents/framework/vue/quick-start.md` |
| Getting started with Angular | `contents/framework/angular/quick-start.md` |
| Getting started with Svelte | `contents/framework/svelte/installation.md` |
| Getting started with Solid | `contents/framework/solid/quick-start.md` |
| Core concepts | `contents/framework/react/guides/queries.md` |
| Mutations | `contents/framework/react/guides/mutations.md` |
| Caching | `contents/framework/react/guides/caching.md` |
| TypeScript | `contents/framework/react/typescript.md` |
| ESLint setup | `contents/eslint/eslint-plugin-query.md` |

## Detailed Structure

### Root Level (1 file)

| File | Description |
|------|-------------|
| `community-resources.md` | External learning resources, blog posts, videos |

### eslint/ (8 files)

| File | Description |
|------|-------------|
| `eslint-plugin-query.md` | ESLint plugin overview |
| `exhaustive-deps.md` | Exhaustive dependencies rule |
| `infinite-query-property-order.md` | Property order for infinite queries |
| `mutation-property-order.md` | Property order for mutations |
| `no-rest-destructuring.md` | Prevent rest destructuring |
| `no-unstable-deps.md` | Prevent unstable dependencies |
| `no-void-query-fn.md` | Prevent void query functions |
| `stable-query-client.md` | Ensure stable query client |

### framework/react/ (8 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation instructions |
| `quick-start.md` | Quick start guide |
| `overview.md` | React Query overview |
| `comparison.md` | Comparison with other libraries |
| `devtools.md` | React Query Devtools |
| `graphql.md` | Using with GraphQL |
| `react-native.md` | React Native integration |
| `typescript.md` | TypeScript usage |

### framework/react/guides/ (37 files)

Core concepts and patterns for React Query.

| File | Description |
|------|-------------|
| `queries.md` | Query basics |
| `mutations.md` | Mutation basics |
| `query-keys.md` | Query key structure |
| `query-functions.md` | Query function patterns |
| `caching.md` | Caching examples |
| `query-invalidation.md` | Invalidating queries |
| `invalidations-from-mutations.md` | Auto-invalidation patterns |
| `infinite-queries.md` | Infinite scroll queries |
| `paginated-queries.md` | Paginated data |
| `parallel-queries.md` | Parallel query patterns |
| `dependent-queries.md` | Dependent query patterns |
| `background-fetching-indicators.md` | Loading indicators |
| `window-focus-refetching.md` | Refetch on window focus |
| `disabling-queries.md` | Conditional queries |
| `query-retries.md` | Retry logic |
| `query-cancellation.md` | Canceling queries |
| `default-query-function.md` | Global query function |
| `optimistic-updates.md` | Optimistic UI updates |
| `placeholder-query-data.md` | Placeholder data |
| `initial-query-data.md` | Initial data patterns |
| `ssr.md` | Server-side rendering |
| `advanced-ssr.md` | Advanced SSR patterns |
| `testing.md` | Testing patterns |
| `filters.md` | Query filters |
| `important-defaults.md` | Default behaviors |
| `network-mode.md` | Network mode configuration |
| `scroll-restoration.md` | Scroll position restoration |
| `does-this-replace-client-state.md` | Client state management |
| `query-options.md` | Query options patterns |
| `mutation-options.md` | Mutation options patterns |
| (plus 7 more guide files) |

### framework/react/plugins/ (5 files)

| File | Description |
|------|-------------|
| `broadcastQueryClient.md` | Broadcast queries across tabs |
| `createAsyncStoragePersister.md` | AsyncStorage persistence |
| `createSyncStoragePersister.md` | SyncStorage persistence |
| `persistQueryClient.md` | Persist query cache |
| `persistQueryClient-experimental.md` | Experimental persistence |

### framework/react/reference/ (20 files)

React-specific API reference.

| File | Description |
|------|-------------|
| `HydrationBoundary.md` | Hydration boundary component |
| `IsRestoringProvider.md` | Restoration context provider |
| `QueryClientProvider.md` | Query client provider |
| `QueryErrorResetBoundary.md` | Error reset boundary |
| `hashKey.md` | Hash query keys |
| `hydrate.md` | Hydrate cache |
| `queryOptions.md` | Query options helper |
| `skipToken.md` | Skip token for conditional queries |
| `usePrefetchInfiniteQuery.md` | Prefetch infinite queries |
| `usePrefetchQuery.md` | Prefetch queries |
| `useQueries.md` | Multiple queries hook |
| `useQuery.md` | Basic query hook |
| `useInfiniteQuery.md` | Infinite query hook |
| `useMutation.md` | Mutation hook |
| `useIsFetching.md` | Fetching status hook |
| `useIsMutating.md` | Mutation status hook |
| `useMutationState.md` | Mutation state hook |
| `useIsRestoring.md` | Restoration status hook |
| `useQueryClient.md` | Query client hook |
| `useSuspenseQuery.md` | Suspense query hook |

### framework/vue/ (7 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation instructions |
| `quick-start.md` | Quick start guide |
| `overview.md` | Vue Query overview |
| `devtools.md` | Vue Query Devtools |
| `ssr.md` | Server-side rendering |
| `suspense.md` | Suspense integration |
| `typescript.md` | TypeScript usage |

### framework/vue/guides/ (33 files)

Vue-specific guides (many reference React guides for shared concepts).

| File | Description |
|------|-------------|
| `queries.md` | Query basics |
| `mutations.md` | Mutation basics |
| `query-keys.md` | Query key structure |
| `query-functions.md` | Query function patterns |
| `infinite-queries.md` | Infinite scroll queries |
| `paginated-queries.md` | Paginated data |
| `caching.md` | Caching examples (ref) |
| `query-invalidation.md` | Invalidating queries |
| `optimistic-updates.md` | Optimistic UI updates |
| `testing.md` | Testing patterns (ref) |
| (plus 23 more guide files) |

### framework/vue/plugins/ (2 files)

| File | Description |
|------|-------------|
| `persistQueryClient.md` | Persist query cache |
| `vueQueryPlugin.md` | Vue Query plugin |

### framework/vue/reference/ (11 files)

Vue-specific API reference.

| File | Description |
|------|-------------|
| `queryOptions.md` | Query options helper |
| `useInfiniteQuery.md` | Infinite query composable |
| `useIsFetching.md` | Fetching status composable |
| `useIsMutating.md` | Mutation status composable |
| `useIsRestoring.md` | Restoration status composable |
| `useMutation.md` | Mutation composable |
| `useMutationState.md` | Mutation state composable |
| `useQueries.md` | Multiple queries composable |
| `useQuery.md` | Basic query composable |
| `useQueryClient.md` | Query client composable |
| `useSuspenseQuery.md` | Suspense query composable |

### framework/angular/ (7 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation instructions |
| `quick-start.md` | Quick start guide |
| `overview.md` | Angular Query overview |
| `devtools.md` | Angular Query Devtools |
| `typescript.md` | TypeScript usage |
| `zoneless.md` | Zoneless Angular support |
| `angular-httpclient-and-other-data-fetching-clients.md` | HttpClient integration |

### framework/angular/guides/ (28 files)

Angular-specific guides.

| File | Description |
|------|-------------|
| `queries.md` | Query basics |
| `mutations.md` | Mutation basics |
| `query-keys.md` | Query key structure |
| `query-functions.md` | Query function patterns |
| `infinite-queries.md` | Infinite scroll queries |
| `paginated-queries.md` | Paginated data |
| `query-invalidation.md` | Invalidating queries |
| `optimistic-updates.md` | Optimistic UI updates |
| (plus 20 more guide files) |

### framework/angular/reference/ (50 files)

Angular-specific API reference (functions, interfaces, type aliases).

**Functions (16 files):**
- `injectQuery.md`, `injectInfiniteQuery.md`, `injectMutation.md`
- `injectQueryClient.md`, `injectIsFetching.md`, `injectIsMutating.md`
- `provideAngularQuery.md`, `provideTanStackQuery.md`
- `queryOptions.md`, `infiniteQueryOptions.md`, `mutationOptions.md`
- (plus 5 more)

**Interfaces (13 files):**
- `CreateQueryOptions.md`, `CreateInfiniteQueryOptions.md`, `CreateMutationOptions.md`
- `InjectQueryOptions.md`, `InjectInfiniteQueryOptions.md`, `InjectMutationOptions.md`
- (plus 7 more)

**Type Aliases (20 files):**
- `CreateQueryResult.md`, `CreateInfiniteQueryResult.md`, `CreateMutationResult.md`
- `DefinedCreateQueryResult.md`, `DefinedCreateInfiniteQueryResult.md`
- (plus 15 more)

### framework/solid/ (5 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation instructions |
| `quick-start.md` | Quick start guide |
| `overview.md` | Solid Query overview |
| `devtools.md` | Solid Query Devtools |
| `ssr.md` | Server-side rendering |

### framework/solid/guides/ (33 files)

Solid-specific guides (many reference React guides for shared concepts).

| File | Description |
|------|-------------|
| `queries.md` | Query basics |
| `mutations.md` | Mutation basics |
| `query-keys.md` | Query key structure |
| `infinite-queries.md` | Infinite scroll queries |
| `caching.md` | Caching examples (ref) |
| (plus 28 more guide files) |

### framework/solid/plugins/ (2 files)

| File | Description |
|------|-------------|
| `persistQueryClient.md` | Persist query cache |
| `solidQueryDevtools.md` | Solid Query Devtools plugin |

### framework/solid/reference/ (10 files)

Solid-specific API reference.

| File | Description |
|------|-------------|
| `queryOptions.md` | Query options helper |
| `createInfiniteQuery.md` | Infinite query primitive |
| `createMutation.md` | Mutation primitive |
| `createQueries.md` | Multiple queries primitive |
| `createQuery.md` | Basic query primitive |
| `useIsFetching.md` | Fetching status hook |
| `useIsMutating.md` | Mutation status hook |
| `useIsRestoring.md` | Restoration status hook |
| `useMutationState.md` | Mutation state hook |
| `useQueryClient.md` | Query client hook |

### framework/svelte/ (5 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation instructions |
| `overview.md` | Svelte Query overview |
| `devtools.md` | Svelte Query Devtools |
| `ssr.md` | Server-side rendering |
| `migrate-from-v5-to-v6.md` | Migration guide |

### framework/svelte/reference/ (39 files)

Svelte-specific API reference (functions, type aliases, variables).

**Functions (16 files):**
- `createInfiniteQuery.md`, `createMutation.md`, `createQueries.md`, `createQuery.md`
- `useIsFetching.md`, `useIsMutating.md`, `useIsRestoring.md`, `useMutationState.md`
- `useQueryClient.md`, `infiniteQueryOptions.md`, `queryOptions.md`
- (plus 5 more)

**Type Aliases (21 files):**
- `CreateQueryOptions.md`, `CreateInfiniteQueryOptions.md`, `CreateMutationOptions.md`
- `CreateQueryResult.md`, `CreateInfiniteQueryResult.md`, `CreateMutationResult.md`
- (plus 15 more)

**Variables (1 file):**
- `HydrationBoundary.md`

### reference/ (11 files)

Core Query classes (framework-agnostic).

| File | Description |
|------|-------------|
| `QueryClient.md` | Main query client API |
| `QueryCache.md` | Query cache management |
| `MutationCache.md` | Mutation cache management |
| `QueryObserver.md` | Query observer API |
| `InfiniteQueryObserver.md` | Infinite query observer |
| `QueriesObserver.md` | Multiple queries observer |
| `focusManager.md` | Window focus manager |
| `onlineManager.md` | Online/offline manager |
| `notifyManager.md` | Notification batching |
| `streamedQuery.md` | Streamed query responses |
| `timeoutManager.md` | Timeout management |
