# tanstack-query Table of Contents

## Directory Map

```
contents/
├── eslint/                          # ESLint plugin rules (7 files)
├── framework/
│   ├── angular/                     # Angular adapter (85 files)
│   │   ├── guides/                  # Angular guides
│   │   └── reference/               # Auto-generated API reference
│   │       ├── functions/
│   │       ├── interfaces/
│   │       └── type-aliases/
│   ├── react/                       # React adapter (74 files)
│   │   ├── guides/                  # React guides
│   │   ├── plugins/                 # Persistence plugins
│   │   └── reference/               # Hook & util API reference
│   ├── solid/                       # Solid adapter (52 files)
│   │   ├── guides/                  # Solid guides
│   │   ├── plugins/                 # Persistence plugins
│   │   └── reference/               # Solid API reference
│   ├── svelte/                      # Svelte adapter (48 files)
│   │   ├── reference/functions/     # Svelte functions reference
│   │   └── reference/type-aliases/  # Svelte type reference
│   └── vue/                         # Vue adapter (49 files)
│       ├── guides/                  # Vue guides
│       ├── plugins/                 # Persistence plugins
│       └── reference/               # Vue API reference
└── reference/                       # Core framework-agnostic reference (11 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| React quick start | `contents/framework/react/quick-start.md` |
| Angular quick start | `contents/framework/angular/quick-start.md` |
| Vue quick start | `contents/framework/vue/quick-start.md` |
| Solid quick start | `contents/framework/solid/quick-start.md` |
| Svelte overview | `contents/framework/svelte/overview.md` |
| Core API (QueryClient) | `contents/reference/QueryClient.md` |
| React hooks reference | `contents/framework/react/reference/useQuery.md` |
| Caching concepts | `contents/framework/react/guides/caching.md` |
| Mutations guide | `contents/framework/react/guides/mutations.md` |
| SSR guide | `contents/framework/react/guides/ssr.md` |
| ESLint plugin | `contents/eslint/eslint-plugin-query.md` |

## Detailed Structure

### eslint/ (7 files)

| File | Description |
|------|-------------|
| `eslint-plugin-query.md` | ESLint plugin overview and setup |
| `exhaustive-deps.md` | Rule: exhaustive-deps |
| `infinite-query-property-order.md` | Rule: infinite-query-property-order |
| `no-rest-destructuring.md` | Rule: no-rest-destructuring |
| `no-unstable-deps.md` | Rule: no-unstable-deps |
| `no-void-query-fn.md` | Rule: no-void-query-fn |
| `stable-query-client.md` | Rule: stable-query-client |

### framework/react/ (74 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation and setup |
| `overview.md` | Library overview |
| `quick-start.md` | Quick start tutorial |
| `devtools.md` | React Query Devtools |
| `graphql.md` | GraphQL integration |
| `react-native.md` | React Native usage |
| `typescript.md` | TypeScript guide |

#### framework/react/guides/ (29 files)

| File | Description |
|------|-------------|
| `queries.md` | Basic queries |
| `query-keys.md` | Query keys |
| `query-functions.md` | Query functions |
| `query-options.md` | queryOptions helper |
| `query-invalidation.md` | Query invalidation |
| `query-retries.md` | Retry behavior |
| `query-cancellation.md` | Cancellation |
| `mutations.md` | Mutations |
| `invalidations-from-mutations.md` | Invalidation after mutation |
| `updates-from-mutation-responses.md` | Updating cache from response |
| `optimistic-updates.md` | Optimistic updates |
| `infinite-queries.md` | Infinite / paginated queries |
| `paginated-queries.md` | Paginated queries |
| `parallel-queries.md` | Parallel queries |
| `dependent-queries.md` | Dependent (sequential) queries |
| `caching.md` | Caching behavior |
| `initial-query-data.md` | Initial data |
| `placeholder-query-data.md` | Placeholder data |
| `prefetching.md` | Prefetching |
| `background-fetching-indicators.md` | Background fetch UI |
| `disabling-queries.md` | Disabling / skipping queries |
| `default-query-function.md` | Default query function |
| `filters.md` | Query and mutation filters |
| `network-mode.md` | Online/offline behavior |
| `window-focus-refetching.md` | Window focus refetching |
| `scroll-restoration.md` | Scroll restoration |
| `request-waterfalls.md` | Request waterfalls |
| `render-optimizations.md` | Render optimization |
| `ssr.md` | Server-side rendering |
| `advanced-ssr.md` | Advanced SSR with streaming |
| `suspense.md` | React Suspense |
| `testing.md` | Testing guide |
| `does-this-replace-client-state.md` | When to use vs. client state |
| `migrating-to-v5.md` | v4 → v5 migration guide |

#### framework/react/reference/ (17 files)

| File | Description |
|------|-------------|
| `useQuery.md` | useQuery hook |
| `useInfiniteQuery.md` | useInfiniteQuery hook |
| `useMutation.md` | useMutation hook |
| `useQueries.md` | useQueries hook |
| `useSuspenseQuery.md` | useSuspenseQuery hook |
| `useSuspenseInfiniteQuery.md` | useSuspenseInfiniteQuery hook |
| `useSuspenseQueries.md` | useSuspenseQueries hook |
| `useIsFetching.md` | useIsFetching hook |
| `useIsMutating.md` | useIsMutating hook |
| `useMutationState.md` | useMutationState hook |
| `usePrefetchQuery.md` | usePrefetchQuery hook |
| `usePrefetchInfiniteQuery.md` | usePrefetchInfiniteQuery hook |
| `useQueryClient.md` | useQueryClient hook |
| `useQueryErrorResetBoundary.md` | useQueryErrorResetBoundary hook |
| `QueryClientProvider.md` | QueryClientProvider component |
| `QueryErrorResetBoundary.md` | QueryErrorResetBoundary component |
| `hydration.md` | Hydration / dehydration API |
| `queryOptions.md` | queryOptions helper |
| `infiniteQueryOptions.md` | infiniteQueryOptions helper |
| `mutationOptions.md` | mutationOptions helper |

#### framework/react/plugins/ (5 files)

| File | Description |
|------|-------------|
| `persistQueryClient.md` | Persist query client setup |
| `createSyncStoragePersister.md` | Sync storage persister |
| `createAsyncStoragePersister.md` | Async storage persister |
| `createPersister.md` | Generic persister |
| `broadcastQueryClient.md` | BroadcastChannel sync |

### framework/angular/ (85 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation |
| `overview.md` | Overview |
| `quick-start.md` | Quick start |
| `devtools.md` | Devtools |
| `typescript.md` | TypeScript |
| `zoneless.md` | Zoneless Angular support |
| `angular-httpclient-and-other-data-fetching-clients.md` | HttpClient integration |

#### framework/angular/guides/ (20 files — mirrors React guides)

Covers: queries, query-keys, query-functions, query-options, mutations, invalidations, optimistic-updates, infinite-queries, paginated-queries, parallel-queries, dependent-queries, caching, initial-query-data, placeholder-query-data, background-fetching-indicators, disabling-queries, default-query-function, filters, network-mode, window-focus-refetching, scroll-restoration, testing, does-this-replace-client-state

#### framework/angular/reference/ (58 files — auto-generated type docs)

Functions: `injectQuery`, `injectInfiniteQuery`, `injectMutation`, `injectMutationState`, `injectQueries`, `injectQueryClient`, `injectIsFetching`, `injectIsMutating`, `injectIsRestoring`, `queryOptions`, `infiniteQueryOptions`, `mutationOptions`, `provideAngularQuery`, `provideTanstackQuery`, `provideQueryClient`, `provideIsRestoring`, `queryFeature`

Interfaces & type-aliases: option types, result types, narrowing types

### framework/solid/ (52 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation |
| `overview.md` | Overview |
| `quick-start.md` | Quick start |
| `devtools.md` | Devtools |
| `typescript.md` | TypeScript |

#### framework/solid/guides/ (23 files — mirrors React guides)

Covers: queries, query-keys, query-functions, query-options, mutations, invalidations, optimistic-updates, infinite-queries, paginated-queries, parallel-queries, dependent-queries, caching, initial-query-data, placeholder-query-data, prefetching, background-fetching-indicators, disabling-queries, default-query-function, filters, network-mode, window-focus-refetching, scroll-restoration, request-waterfalls, ssr, advanced-ssr, suspense, testing, does-this-replace-client-state, updates-from-mutation-responses

#### framework/solid/reference/ (7 files)

| File | Description |
|------|-------------|
| `useQuery.md` | createQuery hook |
| `useInfiniteQuery.md` | createInfiniteQuery hook |
| `useMutation.md` | createMutation hook |
| `useQueries.md` | createQueries hook |
| `useIsFetching.md` | useIsFetching |
| `useIsMutating.md` | useIsMutating |
| `useMutationState.md` | useMutationState |
| `queryOptions.md` | queryOptions helper |
| `infiniteQueryOptions.md` | infiniteQueryOptions helper |
| `hydration.md` | Hydration API |

#### framework/solid/plugins/ (2 files)

`broadcastQueryClient.md`, `createPersister.md`

### framework/svelte/ (48 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation |
| `overview.md` | Overview |
| `devtools.md` | Devtools |
| `reactivity.md` | Svelte reactivity patterns |
| `ssr.md` | SSR guide |

#### framework/svelte/reference/functions/ (15 files)

| File | Description |
|------|-------------|
| `createquery.md` | createQuery |
| `createinfinitequery.md` | createInfiniteQuery |
| `createmutation.md` | createMutation |
| `createqueries.md` | createQueries |
| `queryoptions.md` | queryOptions |
| `infinitequeryoptions.md` | infiniteQueryOptions |
| `useisfetching.md` | useIsFetching |
| `useismutating.md` | useIsMutating |
| `usemutationstate.md` | useMutationState |
| `useisrestoring.md` | useIsRestoring |
| `usequeryclient.md` | useQueryClient |
| `usehydrate.md` | useHydrate |
| `getisrestoringcontext.md` | getIsRestoringContext |
| `getqueryclientcontext.md` | getQueryClientContext |
| `setisrestoringcontext.md` | setIsRestoringContext |
| `setqueryclientcontext.md` | setQueryClientContext |

#### framework/svelte/reference/type-aliases/ (26+ files)

Type aliases for options, results, and component types.

### framework/vue/ (49 files)

| File | Description |
|------|-------------|
| `installation.md` | Installation |
| `overview.md` | Overview |
| `quick-start.md` | Quick start |
| `devtools.md` | Devtools |
| `graphql.md` | GraphQL integration |
| `typescript.md` | TypeScript guide |
| `reactivity.md` | Vue reactivity patterns |

#### framework/vue/guides/ (25 files — mirrors React guides)

Covers: queries, query-keys, query-functions, query-options, mutations, invalidations, optimistic-updates, infinite-queries, paginated-queries, parallel-queries, dependent-queries, caching, initial-query-data, placeholder-query-data, prefetching, background-fetching-indicators, disabling-queries, default-query-function, custom-client, filters, network-mode, window-focus-refetching, scroll-restoration, ssr, suspense, testing, does-this-replace-client-state, updates-from-mutation-responses, migrating-to-v5

#### framework/vue/reference/ (8 files)

| File | Description |
|------|-------------|
| `useQuery.md` | useQuery hook |
| `useInfiniteQuery.md` | useInfiniteQuery hook |
| `useMutation.md` | useMutation hook |
| `useMutationState.md` | useMutationState hook |
| `useQueries.md` | useQueries hook |
| `useIsFetching.md` | useIsFetching hook |
| `useIsMutating.md` | useIsMutating hook |
| `useQueryClient.md` | useQueryClient hook |
| `queryOptions.md` | queryOptions helper |
| `infiniteQueryOptions.md` | infiniteQueryOptions helper |
| `hydration.md` | Hydration API |

#### framework/vue/plugins/ (2 files)

`broadcastQueryClient.md`, `createPersister.md`

### reference/ (11 files — core framework-agnostic API)

| File | Description |
|------|-------------|
| `QueryClient.md` | QueryClient class — all methods |
| `QueryCache.md` | QueryCache internals |
| `MutationCache.md` | MutationCache internals |
| `QueryObserver.md` | QueryObserver |
| `InfiniteQueryObserver.md` | InfiniteQueryObserver |
| `QueriesObserver.md` | QueriesObserver |
| `focusManager.md` | FocusManager |
| `onlineManager.md` | OnlineManager |
| `notifyManager.md` | NotifyManager |
| `timeoutManager.md` | TimeoutManager |
| `streamedQuery.md` | streamedQuery utility |
