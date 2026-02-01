# TanStack Query v4 Table of Contents

## Directory Map

```
contents/
├── framework/              # Framework-specific implementations (117 files)
│   ├── react/             # React Query docs (67 files)
│   │   ├── guides/        # Usage guides (31 files)
│   │   ├── reference/     # React API reference (11 files)
│   │   ├── plugins/       # Persistence plugins (4 files)
│   │   └── community/     # Community resources (6 files)
│   ├── vue/               # Vue Query docs (43 files)
│   │   ├── guides/        # Vue usage guides (31 files)
│   │   ├── reference/     # Vue API reference (8 files)
│   │   └── community/     # Community resources (2 files)
│   ├── svelte/            # Svelte Query docs (4 files)
│   └── solid/             # Solid Query docs (1 file)
├── reference/             # Core API reference (8 files)
└── eslint/                # ESLint plugin docs (5 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| React quick start | `contents/framework/react/quick-start.md` |
| Vue quick start | `contents/framework/vue/quick-start.md` |
| Core concepts | `contents/framework/react/guides/queries.md` |
| Mutations | `contents/framework/react/guides/mutations.md` |
| API reference | `contents/reference/QueryClient.md` |
| TypeScript usage | `contents/framework/react/typescript.md` |
| SSR setup | `contents/framework/react/guides/ssr.md` |
| Migration guide | `contents/framework/react/guides/migrating-to-react-query-4.md` |

## Detailed Structure

### framework/react/ (67 files)

Core React Query documentation.

| File | Description |
|------|-------------|
| `overview.md` | React Query overview |
| `installation.md` | Installation instructions |
| `quick-start.md` | Quick start guide |
| `devtools.md` | DevTools setup |
| `graphql.md` | GraphQL integration |
| `react-native.md` | React Native usage |
| `typescript.md` | TypeScript guide |
| `comparison.md` | Comparison with SWR, Apollo, RTK Query |
| `videos.md` | Video tutorials |

### framework/react/guides/ (31 files)

React Query usage guides and patterns.

| File | Description |
|------|-------------|
| `queries.md` | Query basics |
| `mutations.md` | Mutation basics |
| `query-keys.md` | Query key patterns |
| `query-functions.md` | Query function patterns |
| `query-invalidation.md` | Cache invalidation |
| `query-cancellation.md` | Request cancellation |
| `query-retries.md` | Retry logic |
| `caching.md` | Caching behavior |
| `network-mode.md` | Network mode configuration |
| `important-defaults.md` | Default configuration |
| `parallel-queries.md` | Parallel queries |
| `dependent-queries.md` | Dependent queries |
| `paginated-queries.md` | Pagination patterns |
| `infinite-queries.md` | Infinite scroll |
| `placeholder-query-data.md` | Placeholder data |
| `initial-query-data.md` | Initial data |
| `prefetching.md` | Prefetching strategies |
| `disabling-queries.md` | Conditional queries |
| `window-focus-refetching.md` | Window focus behavior |
| `background-fetching-indicators.md` | Loading indicators |
| `scroll-restoration.md` | Scroll position restoration |
| `filters.md` | Query filters |
| `ssr.md` | Server-side rendering |
| `suspense.md` | React Suspense integration |
| `optimistic-updates.md` | Optimistic updates |
| `updates-from-mutation-responses.md` | Update cache from mutations |
| `invalidations-from-mutations.md` | Invalidate from mutations |
| `testing.md` | Testing strategies |
| `default-query-function.md` | Default query function |
| `custom-logger.md` | Custom logger setup |
| `does-this-replace-client-state.md` | State management discussion |
| `migrating-to-react-query-3.md` | Migration from v2 to v3 |
| `migrating-to-react-query-4.md` | Migration from v3 to v4 |

### framework/react/reference/ (11 files)

React Query API reference.

| File | Description |
|------|-------------|
| `useQuery.md` | useQuery hook API |
| `useQueries.md` | useQueries hook API |
| `useInfiniteQuery.md` | useInfiniteQuery hook API |
| `useMutation.md` | useMutation hook API |
| `useQueryClient.md` | useQueryClient hook API |
| `useIsFetching.md` | useIsFetching hook API |
| `useIsMutating.md` | useIsMutating hook API |
| `QueryClientProvider.md` | QueryClientProvider component |
| `QueryErrorResetBoundary.md` | Error boundary component |
| `useQueryErrorResetBoundary.md` | Error boundary hook |
| `hydration.md` | Hydration utilities |

### framework/react/plugins/ (4 files)

React Query persistence plugins.

| File | Description |
|------|-------------|
| `persistQueryClient.md` | Persist query client |
| `createSyncStoragePersister.md` | Sync storage persister |
| `createAsyncStoragePersister.md` | Async storage persister |
| `broadcastQueryClient.md` | Broadcast query client |

### framework/react/community/ (6 files)

Community resources and integrations.

| File | Description |
|------|-------------|
| `tkdodos-blog.md` | TkDodo's blog posts |
| `angular-query.md` | Angular Query port |
| `lukemorales-query-key-factory.md` | Query key factory |
| `liaoliao666-react-query-kit.md` | React Query Kit |
| `suspensive-react-query.md` | Suspensive integration |
| `batching-requests-using-bathshit.md` | Request batching |

### framework/vue/ (43 files)

Vue Query documentation.

| File | Description |
|------|-------------|
| `overview.md` | Vue Query overview |
| `installation.md` | Installation instructions |
| `quick-start.md` | Quick start guide |
| `devtools.md` | DevTools setup |
| `graphql.md` | GraphQL integration |
| `typescript.md` | TypeScript guide |

### framework/vue/guides/ (31 files)

Vue Query usage guides (mirrors React guides).

| File | Description |
|------|-------------|
| `queries.md` | Query basics |
| `mutations.md` | Mutation basics |
| `query-keys.md` | Query key patterns |
| `query-functions.md` | Query function patterns |
| `query-invalidation.md` | Cache invalidation |
| `query-cancellation.md` | Request cancellation |
| `query-retries.md` | Retry logic |
| `caching.md` | Caching behavior |
| `network-mode.md` | Network mode configuration |
| `important-defaults.md` | Default configuration |
| `parallel-queries.md` | Parallel queries |
| `dependent-queries.md` | Dependent queries |
| `paginated-queries.md` | Pagination patterns |
| `infinite-queries.md` | Infinite scroll |
| `placeholder-query-data.md` | Placeholder data |
| `initial-query-data.md` | Initial data |
| `prefetching.md` | Prefetching strategies |
| `disabling-queries.md` | Conditional queries |
| `window-focus-refetching.md` | Window focus behavior |
| `background-fetching-indicators.md` | Loading indicators |
| `scroll-restoration.md` | Scroll position restoration |
| `filters.md` | Query filters |
| `ssr.md` | Server-side rendering |
| `suspense.md` | Suspense integration |
| `optimistic-updates.md` | Optimistic updates |
| `updates-from-mutation-responses.md` | Update cache from mutations |
| `invalidations-from-mutations.md` | Invalidate from mutations |
| `testing.md` | Testing strategies |
| `default-query-function.md` | Default query function |
| `custom-logger.md` | Custom logger setup |
| `custom-client.md` | Custom client setup |
| `does-this-replace-client-state.md` | State management discussion |

### framework/vue/reference/ (8 files)

Vue Query API reference.

| File | Description |
|------|-------------|
| `useQuery.md` | useQuery composable API |
| `useQueries.md` | useQueries composable API |
| `useInfiniteQuery.md` | useInfiniteQuery composable API |
| `useMutation.md` | useMutation composable API |
| `useQueryClient.md` | useQueryClient composable API |
| `useIsFetching.md` | useIsFetching composable API |
| `useIsMutating.md` | useIsMutating composable API |
| `hydration.md` | Hydration utilities |

### framework/vue/community/ (2 files)

| File | Description |
|------|-------------|
| `tkdodos-blog.md` | TkDodo's blog posts |
| `lukemorales-query-key-factory.md` | Query key factory |

### framework/svelte/ (4 files)

Svelte Query documentation.

| File | Description |
|------|-------------|
| `overview.md` | Svelte Query overview |
| `installation.md` | Installation instructions |
| `reactivity.md` | Svelte reactivity integration |
| `ssr.md` | SvelteKit SSR setup |

### framework/solid/ (1 file)

| File | Description |
|------|-------------|
| `overview.md` | Solid Query overview |

### reference/ (8 files)

Core TanStack Query API reference (framework-agnostic).

| File | Description |
|------|-------------|
| `QueryClient.md` | QueryClient API |
| `QueryCache.md` | QueryCache API |
| `MutationCache.md` | MutationCache API |
| `QueryObserver.md` | QueryObserver API |
| `InfiniteQueryObserver.md` | InfiniteQueryObserver API |
| `QueriesObserver.md` | QueriesObserver API |
| `onlineManager.md` | Online manager API |
| `focusManager.md` | Focus manager API |

### eslint/ (5 files)

ESLint plugin documentation.

| File | Description |
|------|-------------|
| `eslint-plugin-query.md` | Plugin overview and setup |
| `exhaustive-deps.md` | Exhaustive deps rule |
| `prefer-query-object-syntax.md` | Prefer object syntax rule |
| `stable-query-client.md` | Stable query client rule |
| `no-deprecated-options.md` | No deprecated options rule |
