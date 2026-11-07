# tanstack-db Table of Contents

## Directory Map

```
contents/
├── overview.md, installation.md, quick-start.md, errors.md  # Intro and error codes (4 files)
├── guides/             # Live queries, mutations, schemas, SSR, offline, persistence (9 files)
├── collections/        # Collection types: Electric, Query, PowerSync, RxDB, TrailBase, Convex, IndexedDB, local (9 files)
├── community/          # Community packages and resources (1 file)
├── framework/          # React and Preact adapters
│   ├── react/          # @tanstack/react-db overview and hooks reference (20 files)
│   └── preact/         # @tanstack/preact-db overview and reference (12 files)
└── reference/          # Generated core API reference (592 files)
    ├── classes/ functions/ interfaces/ type-aliases/ variables/   # @tanstack/db core
    ├── @tanstack/namespaces/IR/                                   # Query IR internals
    └── {convex,electric,powersync,query,rxdb,trailbase}-db-collection/  # Collection packages
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/overview.md`, `contents/quick-start.md` |
| Install | `contents/installation.md` |
| Write queries | `contents/guides/live-queries.md` |
| Optimistic mutations | `contents/guides/mutations.md` |
| Pick a sync backend | `contents/collections/` (e.g. `electric-collection.md`, `query-collection.md`) |
| React hooks | `contents/framework/react/overview.md` |
| Error handling | `contents/guides/error-handling.md`, `contents/errors.md` |
| API lookup | `contents/reference/index.md` |

## Detailed Structure

Paths below are relative to `contents/`.

### (root)/ (4 files)

| File | Description |
|------|-------------|
| `errors.md` | Error code lookup table for shortened production error messages |
| `installation.md` | Each supported framework comes with its own package. |
| `overview.md` | Welcome to the TanStack DB documentation. |
| `quick-start.md` | TanStack DB is the reactive client-first store for your API. |

### collections/ (9 files)

| File | Description |
|------|-------------|
| `collections/convex-collection.md` | `@tanstack/convex-db-collection` subscribes to a Convex query and keeps its rows in a TanStack DB collection. |
| `collections/electric-collection.md` | Electric collections provide seamless integration between TanStack DB and ElectricSQL, enabling real-time data synchronization with your Postgres... |
| `collections/indexed-db-collection.md` | Build notes, drafts, reading lists, and offline workspaces with TanStack DB's live queries and optimistic mutations. |
| `collections/local-only-collection.md` | LocalOnly collections are designed for in-memory client data or UI state that doesn't need to persist across browser sessions or sync across tabs. |
| `collections/local-storage-collection.md` | LocalStorage collections store small amounts of local-only state that persists |
| `collections/powersync-collection.md` | PowerSync collections provide seamless integration between TanStack DB and PowerSync, enabling automatic synchronization between your in-memory... |
| `collections/query-collection.md` | Query collections provide seamless integration between TanStack DB and TanStack Query, enabling automatic synchronization between your local database... |
| `collections/rxdb-collection.md` | RxDB collections provide seamless integration between TanStack DB and RxDB, enabling automatic synchronization between your in-memory TanStack DB... |
| `collections/trailbase-collection.md` | TrailBase collections provide seamless integration between TanStack DB and TrailBase, enabling real-time data synchronization with TrailBase's... |

### community/ (1 files)

| File | Description |
|------|-------------|
| `community/resources.md` | This page contains a curated list of community-created packages, tools, and resources that extend or complement TanStack DB. |

### framework/preact/ (1 files)

| File | Description |
|------|-------------|
| `framework/preact/overview.md` | `@tanstack/preact-db` supports Preact 10 and later and ships as ES modules. |

### framework/preact/reference/ (1 files)

| File | Description |
|------|-------------|
| `framework/preact/reference/index.md` | @tanstack/preact-db |

### framework/preact/reference/functions/ (2 files)

| File | Description |
|------|-------------|
| `framework/preact/reference/functions/useLiveInfiniteQuery.md` | Function `useLiveInfiniteQuery`: Page through an ordered live query, growing one live-query Collection's |
| `framework/preact/reference/functions/useLiveQuery.md` | Function `useLiveQuery`: Subscribe a Preact component to a live query. |

### framework/preact/reference/interfaces/ (2 files)

| File | Description |
|------|-------------|
| `framework/preact/reference/interfaces/UseConditionalLiveQueryResult.md` | Interface `UseConditionalLiveQueryResult`: The result of a live query whose callback can disable it. |
| `framework/preact/reference/interfaces/UseLiveQueryResult.md` | Interface `UseLiveQueryResult`: The result of a live query that is always enabled. |

### framework/preact/reference/type-aliases/ (6 files)

| File | Description |
|------|-------------|
| `framework/preact/reference/type-aliases/ConditionalUseLiveQueryConfig.md` | Type alias `ConditionalUseLiveQueryConfig` API reference |
| `framework/preact/reference/type-aliases/UseLiveInfiniteQueryConfig.md` | Type alias `UseLiveInfiniteQueryConfig`: First result-page label, not a server cursor or remote offset. |
| `framework/preact/reference/type-aliases/UseLiveInfiniteQueryReturn.md` | Type alias `UseLiveInfiniteQueryReturn` API reference |
| `framework/preact/reference/type-aliases/UseLiveInfiniteQueryReturnWithCollection.md` | Type alias `UseLiveInfiniteQueryReturnWithCollection` API reference |
| `framework/preact/reference/type-aliases/UseLiveQueryConfig.md` | Type alias `UseLiveQueryConfig` API reference |
| `framework/preact/reference/type-aliases/UseLiveQueryStatus.md` | Type alias `UseLiveQueryStatus` API reference |

### framework/react/ (1 files)

| File | Description |
|------|-------------|
| `framework/react/overview.md` | See the React Functions Reference to see the full list of hooks available in the React Adapter. |

### framework/react/reference/ (1 files)

| File | Description |
|------|-------------|
| `framework/react/reference/index.md` | @tanstack/react-db |

### framework/react/reference/classes/ (1 files)

| File | Description |
|------|-------------|
| `framework/react/reference/classes/SuspenseBinding.md` | Class `SuspenseBinding`: Uncommitted retries may adopt work; successful outputs have one owner. |

### framework/react/reference/functions/ (9 files)

| File | Description |
|------|-------------|
| `framework/react/reference/functions/DbProvider.md` | Function `DbProvider` API reference |
| `framework/react/reference/functions/HydrationBoundary.md` | Function `HydrationBoundary` API reference |
| `framework/react/reference/functions/useDbClient.md` | Function `useDbClient` API reference |
| `framework/react/reference/functions/useLiveInfiniteQuery.md` | Function `useLiveInfiniteQuery`: Create an infinite query using a query function with live updates. |
| `framework/react/reference/functions/useLiveQuery.md` | Function `useLiveQuery`: Create a live query using a query function. |
| `framework/react/reference/functions/useLiveQueryEffect.md` | Function `useLiveQueryEffect`: React hook for creating a reactive effect that fires handlers when rows |
| `framework/react/reference/functions/useLiveSuspenseQuery.md` | Function `useLiveSuspenseQuery`: Create a live query with React Suspense support |
| `framework/react/reference/functions/useOptionalDbClient.md` | Function `useOptionalDbClient` API reference |
| `framework/react/reference/functions/usePacedMutations.md` | Function `usePacedMutations`: React hook for managing paced mutations with timing strategies. |

### framework/react/reference/type-aliases/ (8 files)

| File | Description |
|------|-------------|
| `framework/react/reference/type-aliases/ConditionalUseLiveQueryConfig.md` | Type alias `ConditionalUseLiveQueryConfig` API reference |
| `framework/react/reference/type-aliases/DbProviderProps.md` | Type alias `DbProviderProps` API reference |
| `framework/react/reference/type-aliases/HydrationBoundaryProps.md` | Type alias `HydrationBoundaryProps` API reference |
| `framework/react/reference/type-aliases/UseLiveInfiniteQueryConfig.md` | Type alias `UseLiveInfiniteQueryConfig`: Override the nearest DbProvider for this query. |
| `framework/react/reference/type-aliases/UseLiveInfiniteQueryReturn.md` | Type alias `UseLiveInfiniteQueryReturn` API reference |
| `framework/react/reference/type-aliases/UseLiveInfiniteQueryReturnWithCollection.md` | Type alias `UseLiveInfiniteQueryReturnWithCollection` API reference |
| `framework/react/reference/type-aliases/UseLiveQueryConfig.md` | Type alias `UseLiveQueryConfig` API reference |
| `framework/react/reference/type-aliases/UseLiveQueryStatus.md` | Type alias `UseLiveQueryStatus` API reference |

### guides/ (9 files)

| File | Description |
|------|-------------|
| `guides/collection-options-creator.md` | A collection options creator is a factory function that generates configuration options for TanStack DB collections. |
| `guides/error-handling.md` | TanStack DB provides comprehensive error handling capabilities to ensure robust data synchronization and state management. |
| `guides/live-queries.md` | TanStack DB provides a powerful, type-safe query system that allows you to fetch, filter, transform, and aggregate data from collections using a... |
| `guides/migrate-to-1-0-rc.md` | This guide covers breaking changes when upgrading from `@tanstack/db@0.9.2` |
| `guides/mutations.md` | TanStack DB provides a powerful mutation system that enables optimistic updates with automatic state management. |
| `guides/offline-transactions.md` | `@tanstack/offline-transactions` gives the leader a durable outbox for pending mutations. |
| `guides/schemas.md` | TanStack DB uses schemas to ensure your data is valid and type-safe throughout your application. |
| `guides/sqlite-persistence.md` | SQLite persistence stores Collection rows in a SQLite database supplied by the runtime. |
| `guides/ssr.md` | TanStack DB SSR transports the smallest useful snapshot for the work the server |

### reference/ (1 files)

| File | Description |
|------|-------------|
| `reference/index.md` | Renames and re-exports RangeQueryOptions |

### reference/@tanstack/namespaces/IR/ (1 files)

| File | Description |
|------|-------------|
| `reference/@tanstack/namespaces/IR/index.md` | IR |

### reference/@tanstack/namespaces/IR/classes/ (11 files)

| File | Description |
|------|-------------|
| `reference/@tanstack/namespaces/IR/classes/Aggregate.md` | Class `Aggregate`: (`pipeline`, `groupByClause`, `valueIdentity`, `isSourceRef`, `havingClauses?`, `selectClause?`, `fnHavingClauses?`, `mainSource?`,... |
| `reference/@tanstack/namespaces/IR/classes/CollectionRef.md` | Class `CollectionRef`: Opaque runtime identity; aliases are lexical names only. |
| `reference/@tanstack/namespaces/IR/classes/ConditionalSelect.md` | Class `ConditionalSelect` API reference |
| `reference/@tanstack/namespaces/IR/classes/DescriptorRef.md` | Class `DescriptorRef`: Opaque runtime identity for this unbound source placement. |
| `reference/@tanstack/namespaces/IR/classes/Func.md` | Class `Func` API reference |
| `reference/@tanstack/namespaces/IR/classes/IncludesSubquery.md` | Class `IncludesSubquery`: (`compilation`, `getRootKey?`) => `MaterializedRootCompilation` |
| `reference/@tanstack/namespaces/IR/classes/PropRef.md` | Class `PropRef` API reference |
| `reference/@tanstack/namespaces/IR/classes/QueryRef.md` | Class `QueryRef` API reference |
| `reference/@tanstack/namespaces/IR/classes/UnionAll.md` | Class `UnionAll`: Result-level UNION ALL. |
| `reference/@tanstack/namespaces/IR/classes/UnionFrom.md` | Class `UnionFrom` API reference |
| `reference/@tanstack/namespaces/IR/classes/Value.md` | Class `Value` API reference |

### reference/@tanstack/namespaces/IR/functions/ (14 files)

| File | Description |
|------|-------------|
| `reference/@tanstack/namespaces/IR/functions/collectCollectionSources.md` | Function `collectCollectionSources`: Returns concrete Collection sources after requiring client binding. |
| `reference/@tanstack/namespaces/IR/functions/collectPropRefs.md` | Function `collectPropRefs`: Collect refs from an IR expression, including aggregate arguments. |
| `reference/@tanstack/namespaces/IR/functions/collectSourceRefs.md` | Function `collectSourceRefs`: Returns each lexical Collection or descriptor source in a query tree once. |
| `reference/@tanstack/namespaces/IR/functions/createResidualWhere.md` | Function `createResidualWhere`: Create a residual Where clause from an expression |
| `reference/@tanstack/namespaces/IR/functions/followRef.md` | Function `followRef`: Follows the given reference in a query |
| `reference/@tanstack/namespaces/IR/functions/getFromSources.md` | Function `getFromSources`: Sources declared by a FROM clause. |
| `reference/@tanstack/namespaces/IR/functions/getHavingExpression.md` | Function `getHavingExpression`: Extract the expression from a HAVING clause |
| `reference/@tanstack/namespaces/IR/functions/getPropRefPropertyPath.md` | Function `getPropRefPropertyPath`: Returns the property path after removing only explicit source qualification. |
| `reference/@tanstack/namespaces/IR/functions/getPropRefSourceAlias.md` | Function `getPropRefSourceAlias`: Returns an explicitly declared source alias without inferring from the path. |
| `reference/@tanstack/namespaces/IR/functions/getWhereExpression.md` | Function `getWhereExpression`: Extract the expression from a Where clause |
| `reference/@tanstack/namespaces/IR/functions/isBasicOrAggregateExpression.md` | Function `isBasicOrAggregateExpression`: Distinguish compiler expressions from user objects with IR-like fields. |
| `reference/@tanstack/namespaces/IR/functions/isExpressionLike.md` | Function `isExpressionLike` API reference |
| `reference/@tanstack/namespaces/IR/functions/isResidualWhere.md` | Function `isResidualWhere`: Check if a Where clause is marked as residual |
| `reference/@tanstack/namespaces/IR/functions/requireCollectionSource.md` | Function `requireCollectionSource`: A descriptor must bind to a DbClient before a Collection is required. |

### reference/@tanstack/namespaces/IR/interfaces/ (2 files)

| File | Description |
|------|-------------|
| `reference/@tanstack/namespaces/IR/interfaces/JoinClause.md` | Interface `JoinClause` API reference |
| `reference/@tanstack/namespaces/IR/interfaces/QueryIR.md` | Interface `QueryIR`: Processes the GROUP BY clause with optional HAVING and SELECT |

### reference/@tanstack/namespaces/IR/type-aliases/ (16 files)

| File | Description |
|------|-------------|
| `reference/@tanstack/namespaces/IR/type-aliases/BasicExpression.md` | Type alias `BasicExpression` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/CollectionSourceRef.md` | Type alias `CollectionSourceRef` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/ConditionalSelectBranch.md` | Type alias `ConditionalSelectBranch` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/From.md` | Type alias `From` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/GroupBy.md` | Type alias `GroupBy` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/Having.md` | Type alias `Having` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/IncludesMaterialization.md` | Type alias `IncludesMaterialization` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/Join.md` | Type alias `Join` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/Limit.md` | Type alias `Limit` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/Offset.md` | Type alias `Offset` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/OrderBy.md` | Type alias `OrderBy` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/OrderByClause.md` | Type alias `OrderByClause` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/OrderByDirection.md` | Type alias `OrderByDirection` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/Select.md` | Type alias `Select` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/SelectValueExpression.md` | Type alias `SelectValueExpression` API reference |
| `reference/@tanstack/namespaces/IR/type-aliases/Where.md` | Type alias `Where` API reference |

### reference/@tanstack/namespaces/IR/variables/ (1 files)

| File | Description |
|------|-------------|
| `reference/@tanstack/namespaces/IR/variables/INCLUDES_SCALAR_FIELD.md` | Variable `INCLUDES_SCALAR_FIELD` API reference |

### reference/classes/ (122 files)

| File | Description |
|------|-------------|
| `reference/classes/AggregateFunctionNotInSelectError.md` | Class `AggregateFunctionNotInSelectError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/BaseIndex.md` | Class `BaseIndex`: Base abstract class that all index types extend |
| `reference/classes/BaseQueryBuilder.md` | Class `BaseQueryBuilder`: Whether the builder may keep `query` without copying it. |
| `reference/classes/BasicIndex.md` | Class `BasicIndex`: Basic index using Map + sorted Array. |
| `reference/classes/BTreeIndex.md` | Class `BTreeIndex`: Base abstract class that all index types extend |
| `reference/classes/CannotCombineEmptyExpressionListError.md` | Class `CannotCombineEmptyExpressionListError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/CollectionConfigurationError.md` | Class `CollectionConfigurationError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/CollectionHasSubscribersError.md` | Class `CollectionHasSubscribersError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/CollectionImpl.md` | Class `CollectionImpl`: Creates a new Collection instance |
| `reference/classes/CollectionInErrorStateError.md` | Class `CollectionInErrorStateError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/CollectionInputNotFoundError.md` | Class `CollectionInputNotFoundError`: Error thrown when a collection input stream is not found during query compilation. |
| `reference/classes/CollectionIsInErrorStateError.md` | Class `CollectionIsInErrorStateError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/CollectionOperationError.md` | Class `CollectionOperationError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/CollectionPreloadAbortedError.md` | Class `CollectionPreloadAbortedError`: A collection was cleaned up before its initial preload became ready. |
| `reference/classes/CollectionReloadCrashedError.md` | Class `CollectionReloadCrashedError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/CollectionReloadDuringSyncEntryError.md` | Class `CollectionReloadDuringSyncEntryError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/CollectionRequiresConfigError.md` | Class `CollectionRequiresConfigError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/CollectionRequiresSyncConfigError.md` | Class `CollectionRequiresSyncConfigError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/CollectionStateError.md` | Class `CollectionStateError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/DatabaseRequiredError.md` | Class `DatabaseRequiredError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/DbClient.md` | Class `DbClient`: \\| `Transaction`\<`Record`\<`string`, `unknown`\>\> |
| `reference/classes/DebounceCallDroppedError.md` | Class `DebounceCallDroppedError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/DeduplicatedLoadSubset.md` | Class `DeduplicatedLoadSubset`: Deduplicates exact canonical demands without inferring broader coverage. |
| `reference/classes/DeleteKeyNotFoundError.md` | Class `DeleteKeyNotFoundError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/DistinctRequiresSelectError.md` | Class `DistinctRequiresSelectError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/DuplicateDbInstanceError.md` | Class `DuplicateDbInstanceError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/DuplicateKeyError.md` | Class `DuplicateKeyError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/DuplicateKeySyncError.md` | Class `DuplicateKeySyncError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/DuplicateTransactionIdError.md` | Class `DuplicateTransactionIdError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/EmptyReferencePathError.md` | Class `EmptyReferencePathError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/FnSelectWithGroupByError.md` | Class `FnSelectWithGroupByError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/GetKeyRequiredError.md` | Class `GetKeyRequiredError`: Thrown when the getKey function is missing |
| `reference/classes/GroupByError.md` | Class `GroupByError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/GroupingOperatorRequiredError.md` | Class `GroupingOperatorRequiredError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/HavingRequiresGroupByError.md` | Class `HavingRequiresGroupByError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/IncludeOperatorRequiredError.md` | Class `IncludeOperatorRequiredError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidCollectionStatusTransitionError.md` | Class `InvalidCollectionStatusTransitionError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidJoinCondition.md` | Class `InvalidJoinCondition`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidJoinConditionLeftSourceError.md` | Class `InvalidJoinConditionLeftSourceError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidJoinConditionRightSourceError.md` | Class `InvalidJoinConditionRightSourceError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidJoinConditionSameSourceError.md` | Class `InvalidJoinConditionSameSourceError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidJoinConditionSourceMismatchError.md` | Class `InvalidJoinConditionSourceMismatchError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidKeyError.md` | Class `InvalidKeyError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidPoolOptionError.md` | Class `InvalidPoolOptionError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidSchemaError.md` | Class `InvalidSchemaError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidSourceError.md` | Class `InvalidSourceError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidSourceTypeError.md` | Class `InvalidSourceTypeError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidStorageDataFormatError.md` | Class `InvalidStorageDataFormatError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidStorageObjectFormatError.md` | Class `InvalidStorageObjectFormatError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidSyncPersistenceCapabilityError.md` | Class `InvalidSyncPersistenceCapabilityError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/InvalidWhereExpressionError.md` | Class `InvalidWhereExpressionError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/JoinCollectionNotFoundError.md` | Class `JoinCollectionNotFoundError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/JoinConditionMustBeEqualityError.md` | Class `JoinConditionMustBeEqualityError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/JoinError.md` | Class `JoinError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/KeyUpdateNotAllowedError.md` | Class `KeyUpdateNotAllowedError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/LimitOffsetRequireOrderByError.md` | Class `LimitOffsetRequireOrderByError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/LiveQueryObserverDisposedError.md` | Class `LiveQueryObserverDisposedError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/LiveQueryWindowControllerDisposedError.md` | Class `LiveQueryWindowControllerDisposedError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/LoadSubsetOperationAbortedError.md` | Class `LoadSubsetOperationAbortedError`: A subset operation was canceled before its result became visible. |
| `reference/classes/LocalStorageCollectionError.md` | Class `LocalStorageCollectionError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/MissingAliasInputsError.md` | Class `MissingAliasInputsError`: Internal error when the compiler returns aliases that don't have corresponding input streams. |
| `reference/classes/MissingDeleteHandlerError.md` | Class `MissingDeleteHandlerError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/MissingHandlerError.md` | Class `MissingHandlerError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/MissingInsertHandlerError.md` | Class `MissingInsertHandlerError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/MissingMutationFunctionError.md` | Class `MissingMutationFunctionError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/MissingUpdateArgumentError.md` | Class `MissingUpdateArgumentError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/MissingUpdateHandlerError.md` | Class `MissingUpdateHandlerError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/NameRequiredError.md` | Class `NameRequiredError`: Thrown when the name (object store) configuration is missing |
| `reference/classes/NegativeActiveSubscribersError.md` | Class `NegativeActiveSubscribersError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/NoKeysPassedToDeleteError.md` | Class `NoKeysPassedToDeleteError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/NoKeysPassedToUpdateError.md` | Class `NoKeysPassedToUpdateError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/NonAggregateExpressionNotInGroupByError.md` | Class `NonAggregateExpressionNotInGroupByError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/NonRetriableError.md` | Class `NonRetriableError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/NoPendingSyncTransactionCommitError.md` | Class `NoPendingSyncTransactionCommitError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/NoPendingSyncTransactionWriteError.md` | Class `NoPendingSyncTransactionWriteError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/ObjectStoreNotFoundError.md` | Class `ObjectStoreNotFoundError`: Thrown when the specified object store doesn't exist in the database |
| `reference/classes/OnlyOneSourceAllowedError.md` | Class `OnlyOneSourceAllowedError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/OnMutateMustBeSynchronousError.md` | Class `OnMutateMustBeSynchronousError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/PacedTransactionManualCommitError.md` | Class `PacedTransactionManualCommitError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/QueryBuilderError.md` | Class `QueryBuilderError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/QueryCompilationError.md` | Class `QueryCompilationError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/QueryMustHaveFromClauseError.md` | Class `QueryMustHaveFromClauseError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/QueryOptimizerError.md` | Class `QueryOptimizerError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/QueueCapacityExceededError.md` | Class `QueueCapacityExceededError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/QueueDisposedError.md` | Class `QueueDisposedError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/ReverseIndex.md` | Class `ReverseIndex`: Whether nullish values come first in the reversed |
| `reference/classes/SchemaMustBeSynchronousError.md` | Class `SchemaMustBeSynchronousError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/SchemaValidationError.md` | Class `SchemaValidationError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/SerializationError.md` | Class `SerializationError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/SetWindowFindOneLimitError.md` | Class `SetWindowFindOneLimitError`: Error thrown when setWindow would change the limit of a findOne() query. |
| `reference/classes/SetWindowReentrancyError.md` | Class `SetWindowReentrancyError`: Error thrown when setWindow is called from inside another setWindow call. |
| `reference/classes/SetWindowRequiresOrderByError.md` | Class `SetWindowRequiresOrderByError`: Error thrown when setWindow is called on a collection without an ORDER BY clause. |
| `reference/classes/SourceCollectionIdReuseError.md` | Class `SourceCollectionIdReuseError`: Error thrown when a mounted framework binding that compares query identity |
| `reference/classes/StorageError.md` | Class `StorageError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/StorageKeyRequiredError.md` | Class `StorageKeyRequiredError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/SubQueryMustHaveFromClauseError.md` | Class `SubQueryMustHaveFromClauseError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/SyncCleanupError.md` | Class `SyncCleanupError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/SyncQueueInvariantError.md` | Class `SyncQueueInvariantError`: An internal sync-queue invariant failed: |
| `reference/classes/SyncRowReusedWithoutPreviousValueError.md` | Class `SyncRowReusedWithoutPreviousValueError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/SyncTransactionAbortedError.md` | Class `SyncTransactionAbortedError`: A sync transaction was canceled before its writes became visible. |
| `reference/classes/SyncTransactionAlreadyCommittedError.md` | Class `SyncTransactionAlreadyCommittedError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/SyncTransactionAlreadyCommittedWriteError.md` | Class `SyncTransactionAlreadyCommittedWriteError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/TanStackDBError.md` | Class `TanStackDBError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/ThrottleCallDroppedError.md` | Class `ThrottleCallDroppedError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/TransactionAlreadyCompletedRollbackError.md` | Class `TransactionAlreadyCompletedRollbackError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/TransactionError.md` | Class `TransactionError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/TransactionNotPendingCommitError.md` | Class `TransactionNotPendingCommitError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/TransactionNotPendingMutateError.md` | Class `TransactionNotPendingMutateError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/TransactionScope.md` | Class `TransactionScope`: \\| `Transaction`\<`Record`\<`string`, `unknown`\>\> |
| `reference/classes/UndefinedKeyError.md` | Class `UndefinedKeyError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UnhashableQueryIRError.md` | Class `UnhashableQueryIRError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UnknownExpressionTypeError.md` | Class `UnknownExpressionTypeError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UnknownFunctionError.md` | Class `UnknownFunctionError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UnknownHavingExpressionTypeError.md` | Class `UnknownHavingExpressionTypeError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UnsafeAliasPathError.md` | Class `UnsafeAliasPathError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UnsupportedAggregateFunctionError.md` | Class `UnsupportedAggregateFunctionError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UnsupportedFnSelectResultError.md` | Class `UnsupportedFnSelectResultError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UnsupportedFromTypeError.md` | Class `UnsupportedFromTypeError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UnsupportedJoinSourceTypeError.md` | Class `UnsupportedJoinSourceTypeError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UnsupportedJoinTypeError.md` | Class `UnsupportedJoinTypeError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UnsupportedRootScalarSelectError.md` | Class `UnsupportedRootScalarSelectError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/classes/UpdateKeyNotFoundError.md` | Class `UpdateKeyNotFoundError`: collected by a stack trace (whether generated by `new Error().stack` or |

### reference/convex-db-collection/ (1 files)

| File | Description |
|------|-------------|
| `reference/convex-db-collection/index.md` | @tanstack/convex-db-collection |

### reference/convex-db-collection/functions/ (2 files)

| File | Description |
|------|-------------|
| `reference/convex-db-collection/functions/convexCollectionOptions.md` | Function `convexCollectionOptions`: Mirror one authoritative Convex query result. |
| `reference/convex-db-collection/functions/convexPaginatedCollectionOptions.md` | Function `convexPaginatedCollectionOptions`: Retain reactive cursor ranges; on-demand mode acquires only the prefix needed by active subsets. |

### reference/convex-db-collection/interfaces/ (1 files)

| File | Description |
|------|-------------|
| `reference/convex-db-collection/interfaces/ConvexCollectionUtils.md` | Interface `ConvexCollectionUtils`: Refresh the source cache and wait for sync acceptance, safe inside mutation handlers. |

### reference/convex-db-collection/offline/ (1 files)

| File | Description |
|------|-------------|
| `reference/convex-db-collection/offline/index.md` | @tanstack/convex-db-collection |

### reference/convex-db-collection/offline/functions/ (1 files)

| File | Description |
|------|-------------|
| `reference/convex-db-collection/offline/functions/convexOfflineMutation.md` | Function `convexOfflineMutation`: Use as a named mutationFn in startOfflineExecutor. |

### reference/convex-db-collection/offline/variables/ (1 files)

| File | Description |
|------|-------------|
| `reference/convex-db-collection/offline/variables/convexMutationCodec.md` | Variable `convexMutationCodec`: Lossless, opt-in outbox encoding for Convex values and removed fields. |

### reference/convex-db-collection/type-aliases/ (4 files)

| File | Description |
|------|-------------|
| `reference/convex-db-collection/type-aliases/ConvexCollectionClient.md` | Type alias `ConvexCollectionClient` API reference |
| `reference/convex-db-collection/type-aliases/ConvexCollectionConfig.md` | Type alias `ConvexCollectionConfig`: Share the client used for mutations, authentication, and reconnects. |
| `reference/convex-db-collection/type-aliases/ConvexPaginatedCollectionConfig.md` | Type alias `ConvexPaginatedCollectionConfig`: Maximum accepted rows in the retained query prefix. |
| `reference/convex-db-collection/type-aliases/ConvexQueryOrder.md` | Type alias `ConvexQueryOrder`: Leading numeric order of the fixed server query. |

### reference/electric-db-collection/ (1 files)

| File | Description |
|------|-------------|
| `reference/electric-db-collection/index.md` | @tanstack/electric-db-collection |

### reference/electric-db-collection/classes/ (5 files)

| File | Description |
|------|-------------|
| `reference/electric-db-collection/classes/ElectricDBCollectionError.md` | Class `ElectricDBCollectionError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/electric-db-collection/classes/ExpectedNumberInAwaitTxIdError.md` | Class `ExpectedNumberInAwaitTxIdError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/electric-db-collection/classes/StreamAbortedError.md` | Class `StreamAbortedError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/electric-db-collection/classes/TimeoutWaitingForMatchError.md` | Class `TimeoutWaitingForMatchError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/electric-db-collection/classes/TimeoutWaitingForTxIdError.md` | Class `TimeoutWaitingForTxIdError`: collected by a stack trace (whether generated by `new Error().stack` or |

### reference/electric-db-collection/functions/ (3 files)

| File | Description |
|------|-------------|
| `reference/electric-db-collection/functions/electricCollectionOptions.md` | Function `electricCollectionOptions`: Creates Electric collection options for use with a standard Collection |
| `reference/electric-db-collection/functions/isChangeMessage.md` | Function `isChangeMessage`: Type guard for checking Message is ChangeMessage. |
| `reference/electric-db-collection/functions/isControlMessage.md` | Function `isControlMessage`: Type guard for checking Message is ControlMessage. |

### reference/electric-db-collection/interfaces/ (2 files)

| File | Description |
|------|-------------|
| `reference/electric-db-collection/interfaces/ElectricCollectionConfig.md` | Interface `ElectricCollectionConfig`: Configuration interface for Electric collection options |
| `reference/electric-db-collection/interfaces/ElectricCollectionUtils.md` | Interface `ElectricCollectionUtils`: Electric collection utilities type |

### reference/electric-db-collection/type-aliases/ (2 files)

| File | Description |
|------|-------------|
| `reference/electric-db-collection/type-aliases/AwaitTxIdFn.md` | Type alias `AwaitTxIdFn`: Type for the awaitTxId utility function. |
| `reference/electric-db-collection/type-aliases/Txid.md` | Type alias `Txid`: Type representing a transaction ID in ElectricSQL |

### reference/functions/ (129 files)

| File | Description |
|------|-------------|
| `reference/functions/add.md` | Function `add` API reference |
| `reference/functions/and.md` | Function `and` API reference |
| `reference/functions/avg.md` | Function `avg` API reference |
| `reference/functions/bindLiveQueryWindow.md` | Function `bindLiveQueryWindow`: Bind an infinite-query update. |
| `reference/functions/canonicalizeQueryIR.md` | Function `canonicalizeQueryIR` API reference |
| `reference/functions/caseWhen.md` | Function `caseWhen`: Returns the value for the first matching condition, similar to SQL |
| `reference/functions/claimLiveQuerySourceIds.md` | Function `claimLiveQuerySourceIds`: Record a query's sources, or throw before recording any. |
| `reference/functions/clear.md` | Function `clear`: Removes all items from an object store. |
| `reference/functions/clearQueryPatterns.md` | Function `clearQueryPatterns`: Clear query pattern tracking (useful for tests) |
| `reference/functions/coalesce.md` | Function `coalesce` API reference |
| `reference/functions/collectionOptions.md` | Function `collectionOptions`: (`client`) => `TConfig` |
| `reference/functions/compareTemporalValues.md` | Function `compareTemporalValues`: Compare two Temporal values of the same type, returning -1, 0, or 1. |
| `reference/functions/compileExpression.md` | Function `compileExpression`: Compiles an expression into an optimized evaluator function. |
| `reference/functions/compileQuery.md` | Function `compileQuery` API reference |
| `reference/functions/compileSingleRowExpression.md` | Function `compileSingleRowExpression`: Compiles a single-row expression into an optimized evaluator function. |
| `reference/functions/concat.md` | Function `concat` API reference |
| `reference/functions/configPool.md` | Function `configPool`: A hook config's pool: |
| `reference/functions/configureIndexDevMode.md` | Function `configureIndexDevMode`: Configure dev mode for index suggestions |
| `reference/functions/count.md` | Function `count` API reference |
| `reference/functions/createArrayChangeProxy.md` | Function `createArrayChangeProxy`: Creates proxies for an array of objects and tracks changes to each |
| `reference/functions/createChangeProxy.md` | Function `createChangeProxy`: Creates a proxy that tracks changes to the target object |
| `reference/functions/createCollection.md` | Function `createCollection`: `Omit`\<`CollectionConfig`\<`InferSchemaOutput`\<`T`\>, `TKey`, `T`, `TUtils`\>, `"utils"`\> & `object` & `NonSingleResult` |
| `reference/functions/createEffect.md` | Function `createEffect` API reference |
| `reference/functions/createIndexedDB.md` | Function `createIndexedDB`: Creates or opens an IndexedDB database with the specified stores. |
| `reference/functions/createLiveQueryCollection.md` | Function `createLiveQueryCollection`: Creates a live query collection directly |
| `reference/functions/createLiveQueryObserver.md` | Function `createLiveQueryObserver`: Create a LiveQueryObserver for a resolved live-query collection, or a |
| `reference/functions/createLiveQuerySourceIdClaims.md` | Function `createLiveQuerySourceIdClaims` API reference |
| `reference/functions/createLiveQueryWindowController.md` | Function `createLiveQueryWindowController`: Create an internal forward-window controller for an ordered live query. |
| `reference/functions/createObjectStore.md` | Function `createObjectStore`: Creates an object store during a database upgrade. |
| `reference/functions/createOptimisticAction.md` | Function `createOptimisticAction`: Creates an optimistic action function that applies local optimistic updates immediately |
| `reference/functions/createPacedMutations.md` | Function `createPacedMutations`: Creates a paced mutations manager with pluggable timing strategies. |
| `reference/functions/createTransaction.md` | Function `createTransaction`: Creates a new transaction for grouping multiple collection operations |
| `reference/functions/debounceStrategy.md` | Function `debounceStrategy`: Creates a debounce strategy that delays transaction execution until after |
| `reference/functions/deepEquals.md` | Function `deepEquals`: Deep equality function that compares two values recursively |
| `reference/functions/deleteByKey.md` | Function `deleteByKey`: Deletes an item by its key from an object store. |
| `reference/functions/deleteDatabase.md` | Function `deleteDatabase`: Deletes an entire IndexedDB database. |
| `reference/functions/divide.md` | Function `divide` API reference |
| `reference/functions/eq.md` | Function `eq` API reference |
| `reference/functions/equalPersistedSnapshotValues.md` | Function `equalPersistedSnapshotValues`: Compare persisted public and durable value shapes before skipping a reload. |
| `reference/functions/executeTransaction.md` | Function `executeTransaction`: Executes a callback within an IndexedDB transaction. |
| `reference/functions/extractFieldPath.md` | Function `extractFieldPath`: Extracts the field path from a PropRef expression. |
| `reference/functions/extractSimpleComparisons.md` | Function `extractSimpleComparisons`: Extracts all simple comparisons from a WHERE expression. |
| `reference/functions/extractValue.md` | Function `extractValue`: Extracts the value from a Value expression. |
| `reference/functions/fetchNextLiveQueryWindowPage.md` | Function `fetchNextLiveQueryWindowPage`: Run an adapter-facing page fetch. |
| `reference/functions/findIndexForField.md` | Function `findIndexForField`: Finds the first usable index matching a field path and comparison options. |
| `reference/functions/findProblems.md` | Function `findProblems`: Every node in a health tree that shows a problem of its own, in tree order: |
| `reference/functions/getActiveTransaction.md` | Function `getActiveTransaction`: Gets the currently active ambient transaction, if any |
| `reference/functions/getAll.md` | Function `getAll`: Retrieves all items from an object store. |
| `reference/functions/getAllKeys.md` | Function `getAllKeys`: Retrieves all keys from an object store. |
| `reference/functions/getByKey.md` | Function `getByKey`: Retrieves a single item by its key from an object store. |
| `reference/functions/getIndexDevModeConfig.md` | Function `getIndexDevModeConfig`: Get current dev mode configuration |
| `reference/functions/getLiveQueryHash.md` | Function `getLiveQueryHash` API reference |
| `reference/functions/getLiveQueryKey.md` | Function `getLiveQueryKey`: The `queryKey` of a config-object query input, if it supplies one. |
| `reference/functions/getLiveQueryStatusFlags.md` | Function `getLiveQueryStatusFlags`: Derive the status flags from a collection status and its health tree. |
| `reference/functions/getLoadSubsetDemandKey.md` | Function `getLoadSubsetDemandKey`: Returns the exact semantic identity of a loadSubset request. |
| `reference/functions/getPreparedLiveQueryIdentity.md` | Function `getPreparedLiveQueryIdentity`: (`query`, `__namedParameters`) => |
| `reference/functions/getPreparedLiveQuerySources.md` | Function `getPreparedLiveQuerySources`: Concrete source objects in query-position order for a prepared value. |
| `reference/functions/getPublicCollection.md` | Function `getPublicCollection`: The Collection an adapter hands users as `collection`. |
| `reference/functions/getQueryIdentity.md` | Function `getQueryIdentity`: Returns the semantic identity of a structured query. |
| `reference/functions/getQueryPatterns.md` | Function `getQueryPatterns`: Get query patterns (useful for debugging/testing) |
| `reference/functions/getSourceObjectToken.md` | Function `getSourceObjectToken`: A process-unique number for a source object, without retaining it. |
| `reference/functions/getStableQueryBuilderHash.md` | Function `getStableQueryBuilderHash` API reference |
| `reference/functions/getStableQueryIRHash.md` | Function `getStableQueryIRHash` API reference |
| `reference/functions/getStableValueHash.md` | Function `getStableValueHash` API reference |
| `reference/functions/groupKeys.md` | Function `groupKeys`: (`refs`) => `TKeys` |
| `reference/functions/gt.md` | Function `gt` API reference |
| `reference/functions/gte.md` | Function `gte` API reference |
| `reference/functions/hasVirtualProps.md` | Function `hasVirtualProps`: Checks if a value has all virtual properties attached. |
| `reference/functions/identifyLiveQuery.md` | Function `identifyLiveQuery`: Identify a prepared query for a binding that compares query identity. |
| `reference/functions/ilike.md` | Function `ilike` API reference |
| `reference/functions/inArray.md` | Function `inArray` API reference |
| `reference/functions/include.md` | Function `include`: Includes a correlated subquery as a live child Collection on each parent |
| `reference/functions/indexedDBCollectionOptions.md` | Function `indexedDBCollectionOptions`: Creates IndexedDB collection options for use with a standard Collection. |
| `reference/functions/isCollection.md` | Function `isCollection`: Structural check for a live-query/`Collection` instance. |
| `reference/functions/isCollectionOptions.md` | Function `isCollectionOptions`: value is CollectionOptions\<any, string \\| number, any, UtilsRecord\> |
| `reference/functions/isDevModeEnabled.md` | Function `isDevModeEnabled`: Check if dev mode is enabled |
| `reference/functions/isFailedStatus.md` | Function `isFailedStatus`: `error` and `crashed` end a sync run before it can serve its result. |
| `reference/functions/isNull.md` | Function `isNull` API reference |
| `reference/functions/isSingleResultCollection.md` | Function `isSingleResultCollection`: Whether a collection yields a single result (`findOne`) rather than an array. |
| `reference/functions/isUndefined.md` | Function `isUndefined` API reference |
| `reference/functions/length.md` | Function `length` API reference |
| `reference/functions/like.md` | Function `like` API reference |
| `reference/functions/liveQueryCollectionOptions.md` | Function `liveQueryCollectionOptions`: Creates live query collection options for use with createCollection |
| `reference/functions/localOnlyCollectionOptions.md` | Function `localOnlyCollectionOptions`: Creates Local-only collection options for use with a standard Collection |
| `reference/functions/localStorageCollectionOptions.md` | Function `localStorageCollectionOptions`: Creates localStorage collection options for use with a standard Collection |
| `reference/functions/lower.md` | Function `lower` API reference |
| `reference/functions/lt.md` | Function `lt` API reference |
| `reference/functions/lte.md` | Function `lte` API reference |
| `reference/functions/makeComparator.md` | Function `makeComparator`: Used by first-party collection adapters. |
| `reference/functions/materialize.md` | Function `materialize`: Materialize an includes subquery into a plain value on the parent row. |
| `reference/functions/max.md` | Function `max` API reference |
| `reference/functions/min.md` | Function `min` API reference |
| `reference/functions/multiply.md` | Function `multiply` API reference |
| `reference/functions/not.md` | Function `not` API reference |
| `reference/functions/openDatabase.md` | Function `openDatabase`: Opens an IndexedDB database with the specified name and version. |
| `reference/functions/optimizeExpressionWithIndexes.md` | Function `optimizeExpressionWithIndexes`: Optimizes a query expression using available indexes to find matching keys |
| `reference/functions/or.md` | Function `or` API reference |
| `reference/functions/parseLoadSubsetOptions.md` | Function `parseLoadSubsetOptions`: Convenience function to get all LoadSubsetOptions in a pre-parsed format. |
| `reference/functions/parseOrderByExpression.md` | Function `parseOrderByExpression`: Parses an ORDER BY expression into a simple array of sort specifications. |
| `reference/functions/parseWhereExpression.md` | Function `parseWhereExpression`: Parses a WHERE expression into a custom format using provided handlers. |
| `reference/functions/prepareLiveQueryValue.md` | Function `prepareLiveQueryValue` API reference |
| `reference/functions/put.md` | Function `put`: Writes an item to an object store using upsert semantics. |
| `reference/functions/queryOnce.md` | Function `queryOnce`: Executes a one-shot query and returns the results as an array. |
| `reference/functions/queueStrategy.md` | Function `queueStrategy`: Creates a queue strategy that processes admitted mutations in order with proper serialization. |
| `reference/functions/readLiveQueryWindowPageShape.md` | Function `readLiveQueryWindowPageShape`: Read an infinite-query config's page shape. |
| `reference/functions/rejectLiveQueryInput.md` | Function `rejectLiveQueryInput`: Release the sync starts a rejected query input deferred, then rethrow its |
| `reference/functions/releaseDeferredOnReclaim.md` | Function `releaseDeferredOnReclaim`: Release a render's deferred sync starts when the live query it built is |
| `reference/functions/reportUncaught.md` | Function `reportUncaught`: Report an adapter contract breach, such as an `unloadSubset` that throws, |
| `reference/functions/resolveLiveQueryValue.md` | Function `resolveLiveQueryValue`: Resolve an adapter's query value to what its observer watches: |
| `reference/functions/resumeDeferredLiveQueryCollections.md` | Function `resumeDeferredLiveQueryCollections`: Release every deferred source, then report the first startup failure. |
| `reference/functions/safeRandomUUID.md` | Function `safeRandomUUID`: Returns a RFC 4122 version 4 UUID. |
| `reference/functions/subtract.md` | Function `subtract` API reference |
| `reference/functions/sum.md` | Function `sum` API reference |
| `reference/functions/throttleStrategy.md` | Function `throttleStrategy`: Creates a throttle strategy that ensures transactions are evenly spaced |
| `reference/functions/toArray.md` | Function `toArray` API reference |
| `reference/functions/toBooleanPredicate.md` | Function `toBooleanPredicate`: Converts a 3-valued logic result to a boolean for use in WHERE/HAVING filters. |
| `reference/functions/toBoundaryError.md` | Function `toBoundaryError`: The Error an adapter sends to an error boundary for a failed first load or |
| `reference/functions/trackQuery.md` | Function `trackQuery`: Track a query for dev mode analysis |
| `reference/functions/upper.md` | Function `upper` API reference |
| `reference/functions/validateSyncPersistenceCapability.md` | Function `validateSyncPersistenceCapability`: Validates the cross-package structural persistence protocol before a sync |
| `reference/functions/walkExpression.md` | Function `walkExpression`: Generic expression tree walker that visits each node in the expression. |
| `reference/functions/whenSyncAccepted.md` | Function `whenSyncAccepted`: The moment a receipt's sync transaction was accepted. |
| `reference/functions/withAcceptedReceipt.md` | Function `withAcceptedReceipt`: Attaches the moment a sync transaction was accepted to the receipt that |
| `reference/functions/withArrayChangeTracking.md` | Function `withArrayChangeTracking`: Creates proxies for an array of objects, passes them to a callback function, |
| `reference/functions/withChangeTracking.md` | Function `withChangeTracking`: Creates a proxy for an object, passes it to a callback function, |
| `reference/functions/withCollectionConfigFactory.md` | Function `withCollectionConfigFactory`: Adds a fresh-config materializer to an adapter options object. |
| `reference/functions/withCollectionSyncConfigCleanup.md` | Function `withCollectionSyncConfigCleanup`: Registers work owned before an adapter sync starts. |
| `reference/functions/withCollectionSyncConfigFactory.md` | Function `withCollectionSyncConfigFactory`: The factory must defer `startSyncIfIdle` until construction ends. |
| `reference/functions/withFlatChangeTracking.md` | Function `withFlatChangeTracking`: Change tracking for flat rows without proxies. |

### reference/interfaces/ (71 files)

| File | Description |
|------|-------------|
| `reference/interfaces/BaseCollectionConfig.md` | Interface `BaseCollectionConfig`: Auto-indexing mode for the collection. |
| `reference/interfaces/BaseStrategy.md` | Interface `BaseStrategy`: Base strategy interface that all strategy implementations must conform to |
| `reference/interfaces/ChangeMessage.md` | Interface `ChangeMessage` API reference |
| `reference/interfaces/Collection.md` | Interface `Collection`: Enhanced Collection interface that includes both data type T and utilities TUtils |
| `reference/interfaces/CollectionConfig.md` | Interface `CollectionConfig`: Auto-indexing mode for the collection. |
| `reference/interfaces/CollectionDependent.md` | Interface `CollectionDependent`: Something that reads a Collection, as listed by `collection.subscribers`: |
| `reference/interfaces/CollectionErrorInfo.md` | Interface `CollectionErrorInfo`: Detail about a Collection problem. |
| `reference/interfaces/CollectionIndexMetadata.md` | Interface `CollectionIndexMetadata`: Stable signature derived from expression + serializable options. |
| `reference/interfaces/CollectionLike.md` | Interface `CollectionLike`: Interface for a collection-like object that provides the necessary methods |
| `reference/interfaces/Context.md` | Interface `Context`: Context - The central state container for query builder operations |
| `reference/interfaces/CreateIndexedDBOptions.md` | Interface `CreateIndexedDBOptions`: Custom IDBFactory for testing/mocking |
| `reference/interfaces/CreateLiveQueryObserverOptions.md` | Interface `CreateLiveQueryObserverOptions`: DbClient cache that owns SSR snapshots for this query identity. |
| `reference/interfaces/CreateLiveQueryWindowControllerOptions.md` | Interface `CreateLiveQueryWindowControllerOptions`: This contract is unstable while RFC #1623 is being implemented. |
| `reference/interfaces/CreateOptimisticActionsOptions.md` | Interface `CreateOptimisticActionsOptions`: Options for the createOptimisticAction helper |
| `reference/interfaces/CurrentStateAsChangesOptions.md` | Interface `CurrentStateAsChangesOptions`: Options for getting current state as changes |
| `reference/interfaces/DatabaseInfo.md` | Interface `DatabaseInfo`: Database information returned by getDatabaseInfo() |
| `reference/interfaces/DebounceStrategy.md` | Interface `DebounceStrategy`: Debounce strategy that delays execution until activity stops |
| `reference/interfaces/DebounceStrategyOptions.md` | Interface `DebounceStrategyOptions`: Options for debounce strategy |
| `reference/interfaces/Effect.md` | Interface `Effect`: Handle returned by createEffect |
| `reference/interfaces/EffectConfig.md` | Interface `EffectConfig`: Optional ID for debugging/tracing |
| `reference/interfaces/EffectContext.md` | Interface `EffectContext`: Context passed to effect handlers |
| `reference/interfaces/GroupKeys.md` | Interface `GroupKeys`: Group keys for `query.groupBy(...)` when the query has no aggregate. |
| `reference/interfaces/HealthNode.md` | Interface `HealthNode`: One node of a health tree. |
| `reference/interfaces/HealthProblem.md` | Interface `HealthProblem`: A problem on a health node. |
| `reference/interfaces/IndexDevModeConfig.md` | Interface `IndexDevModeConfig`: Suggest indexes when collection has more than this many items |
| `reference/interfaces/IndexedDBCollectionConfig.md` | Interface `IndexedDBCollectionConfig`: Configuration options for creating an IndexedDB Collection |
| `reference/interfaces/IndexedDBCollectionUtils.md` | Interface `IndexedDBCollectionUtils`: Utility functions exposed on collection.utils |
| `reference/interfaces/IndexedDBInstance.md` | Interface `IndexedDBInstance`: A shared IndexedDB database instance. |
| `reference/interfaces/IndexInterface.md` | Interface `IndexInterface`: Whether the live values in this index share the predicate operand's |
| `reference/interfaces/IndexOptions.md` | Interface `IndexOptions`: Options for creating an index |
| `reference/interfaces/IndexSuggestion.md` | Interface `IndexSuggestion` API reference |
| `reference/interfaces/InsertConfig.md` | Interface `InsertConfig`: Whether to apply optimistic updates immediately. |
| `reference/interfaces/LiveQueryCollectionConfig.md` | Interface `LiveQueryCollectionConfig`: Configuration interface for live query collection options |
| `reference/interfaces/LiveQueryIdentityScope.md` | Interface `LiveQueryIdentityScope`: Where a binding that compares query identity checks a prepared query. |
| `reference/interfaces/LiveQueryObserver.md` | Interface `LiveQueryObserver`: Wraps a resolved live-query `Collection` (or `null` for a disabled query) with |
| `reference/interfaces/LiveQuerySnapshot.md` | Interface `LiveQuerySnapshot`: The canonical, adapter-agnostic view of a live query at a point in time. |
| `reference/interfaces/LiveQueryStatusFlags.md` | Interface `LiveQueryStatusFlags`: The derived flags and health every adapter exposes for a query, besides |
| `reference/interfaces/LiveQueryWindowBinding.md` | Interface `LiveQueryWindowBinding`: Validated infinite-query page shape. |
| `reference/interfaces/LiveQueryWindowController.md` | Interface `LiveQueryWindowController`: This contract is unstable while RFC #1623 is being implemented. |
| `reference/interfaces/LiveQueryWindowPageShape.md` | Interface `LiveQueryWindowPageShape`: Validated infinite-query page shape. |
| `reference/interfaces/LiveQueryWindowSnapshot.md` | Interface `LiveQueryWindowSnapshot`: A page-windowed view of a live query at a point in time. |
| `reference/interfaces/LiveQueryWindowUpdate.md` | Interface `LiveQueryWindowUpdate`: Validated infinite-query page shape. |
| `reference/interfaces/LocalOnlyCollectionConfig.md` | Interface `LocalOnlyCollectionConfig`: Configuration interface for Local-only collection options |
| `reference/interfaces/LocalOnlyCollectionUtils.md` | Interface `LocalOnlyCollectionUtils`: Local-only collection utilities type |
| `reference/interfaces/LocalStorageCollectionConfig.md` | Interface `LocalStorageCollectionConfig`: Configuration interface for localStorage collection options |
| `reference/interfaces/LocalStorageCollectionUtils.md` | Interface `LocalStorageCollectionUtils`: LocalStorage collection utilities type |
| `reference/interfaces/OperationConfig.md` | Interface `OperationConfig`: Whether to apply optimistic updates immediately. |
| `reference/interfaces/PacedMutationsConfig.md` | Interface `PacedMutationsConfig`: Configuration for creating a paced mutations manager |
| `reference/interfaces/ParsedOrderBy.md` | Interface `ParsedOrderBy`: Result of parsing an ORDER BY expression |
| `reference/interfaces/Parser.md` | Interface `Parser` API reference |
| `reference/interfaces/ParseWhereOptions.md` | Interface `ParseWhereOptions`: Options for customizing how WHERE expressions are parsed |
| `reference/interfaces/PendingMutation.md` | Interface `PendingMutation`: Represents a pending mutation within a transaction |
| `reference/interfaces/QueryOnceConfig.md` | Interface `QueryOnceConfig`: Configuration options for queryOnce |
| `reference/interfaces/QueueStrategy.md` | Interface `QueueStrategy`: Queue strategy that processes all executions in order |
| `reference/interfaces/QueueStrategyOptions.md` | Interface `QueueStrategyOptions`: Options for queue strategy |
| `reference/interfaces/RangeQueryOptions.md` | Interface `RangeQueryOptions` API reference |
| `reference/interfaces/SimpleComparison.md` | Interface `SimpleComparison`: Represents a simple comparison operation |
| `reference/interfaces/SubscribeChangesOptions.md` | Interface `SubscribeChangesOptions`: Options for subscribing to collection changes |
| `reference/interfaces/SubscribeChangesSnapshotOptions.md` | Interface `SubscribeChangesSnapshotOptions`: Whether this subscription defers provider work. |
| `reference/interfaces/Subscription.md` | Interface `Subscription`: Public interface for a collection subscription |
| `reference/interfaces/SubscriptionLoadSubsetErrorEvent.md` | Interface `SubscriptionLoadSubsetErrorEvent`: Event emitted when a subset requested by this subscription fails to load. |
| `reference/interfaces/SubscriptionStatusChangeEvent.md` | Interface `SubscriptionStatusChangeEvent`: Event emitted when subscription status changes |
| `reference/interfaces/SubscriptionStatusEvent.md` | Interface `SubscriptionStatusEvent`: Event emitted when subscription status changes to a specific status |
| `reference/interfaces/SubscriptionUnsubscribedEvent.md` | Interface `SubscriptionUnsubscribedEvent`: Event emitted when subscription is unsubscribed |
| `reference/interfaces/SyncConfig.md` | Interface `SyncConfig`: Export adapter-specific metadata that lets hydration/persistence resume sync. |
| `reference/interfaces/SyncMetadataApi.md` | Interface `SyncMetadataApi`: Unstable, versioned bridge between persistence-aware collection adapters |
| `reference/interfaces/ThrottleStrategy.md` | Interface `ThrottleStrategy`: Throttle strategy that spaces executions evenly over time |
| `reference/interfaces/ThrottleStrategyOptions.md` | Interface `ThrottleStrategyOptions`: Options for throttle strategy |
| `reference/interfaces/Transaction.md` | Interface `Transaction`: Every Collection that has tracked this transaction. |
| `reference/interfaces/TransactionConfig.md` | Interface `TransactionConfig`: Unique identifier for the transaction |
| `reference/interfaces/VirtualRowProps.md` | Interface `VirtualRowProps`: Virtual properties recognized on TanStack DB rows. |

### reference/powersync-db-collection/ (1 files)

| File | Description |
|------|-------------|
| `reference/powersync-db-collection/index.md` | @tanstack/powersync-db-collection |

### reference/powersync-db-collection/classes/ (1 files)

| File | Description |
|------|-------------|
| `reference/powersync-db-collection/classes/PowerSyncTransactor.md` | Class `PowerSyncTransactor`: Applies mutations to the PowerSync database. |

### reference/powersync-db-collection/functions/ (2 files)

| File | Description |
|------|-------------|
| `reference/powersync-db-collection/functions/compileSQLite.md` | Function `compileSQLite`: Compiles TanStack DB LoadSubsetOptions to SQLite query components. |
| `reference/powersync-db-collection/functions/powerSyncCollectionOptions.md` | Function `powerSyncCollectionOptions`: Implementation of powerSyncCollectionOptions that handles both schema and non-schema configurations. |

### reference/powersync-db-collection/interfaces/ (2 files)

| File | Description |
|------|-------------|
| `reference/powersync-db-collection/interfaces/CompileSQLiteOptions.md` | Interface `CompileSQLiteOptions`: Options for controlling how SQL is compiled. |
| `reference/powersync-db-collection/interfaces/SQLiteCompiledQuery.md` | Interface `SQLiteCompiledQuery`: Result of compiling LoadSubsetOptions to SQLite |

### reference/powersync-db-collection/type-aliases/ (15 files)

| File | Description |
|------|-------------|
| `reference/powersync-db-collection/type-aliases/BasePowerSyncCollectionConfig.md` | Type alias `BasePowerSyncCollectionConfig`: The PowerSync database instance |
| `reference/powersync-db-collection/type-aliases/ConfigWithArbitraryCollectionTypes.md` | Type alias `ConfigWithArbitraryCollectionTypes`: Config where TInput and TOutput have arbitrarily typed values. |
| `reference/powersync-db-collection/type-aliases/ConfigWithSQLiteInputType.md` | Type alias `ConfigWithSQLiteInputType`: Config where TInput is the SQLite types while TOutput can be defined by TSchema. |
| `reference/powersync-db-collection/type-aliases/ConfigWithSQLiteTypes.md` | Type alias `ConfigWithSQLiteTypes`: Config for when TInput and TOutput are both the SQLite types. |
| `reference/powersync-db-collection/type-aliases/CustomSQLiteSerializer.md` | Type alias `CustomSQLiteSerializer`: A mapping type for custom serialization of object properties to SQLite-compatible values. |
| `reference/powersync-db-collection/type-aliases/EagerSyncHooks.md` | Type alias `EagerSyncHooks`: Eager sync mode hooks. |
| `reference/powersync-db-collection/type-aliases/EnhancedPowerSyncCollectionConfig.md` | Type alias `EnhancedPowerSyncCollectionConfig`: A CollectionConfig which includes utilities for PowerSync. |
| `reference/powersync-db-collection/type-aliases/InferPowerSyncOutputType.md` | Type alias `InferPowerSyncOutputType`: Small helper which determines the output type if: |
| `reference/powersync-db-collection/type-aliases/OnDemandSyncHooks.md` | Type alias `OnDemandSyncHooks`: On-demand sync mode hooks. |
| `reference/powersync-db-collection/type-aliases/OptionalExtractedTable.md` | Type alias `OptionalExtractedTable` API reference |
| `reference/powersync-db-collection/type-aliases/PowerSyncCollectionConfig.md` | Type alias `PowerSyncCollectionConfig`: Configuration options for creating a PowerSync collection. |
| `reference/powersync-db-collection/type-aliases/PowerSyncCollectionMeta.md` | Type alias `PowerSyncCollectionMeta`: Metadata for the PowerSync Collection. |
| `reference/powersync-db-collection/type-aliases/PowerSyncCollectionUtils.md` | Type alias `PowerSyncCollectionUtils`: Collection-level utilities for PowerSync. |
| `reference/powersync-db-collection/type-aliases/SerializerConfig.md` | Type alias `SerializerConfig`: Application logic should ensure that incoming synced data is always valid. |
| `reference/powersync-db-collection/type-aliases/TransactorOptions.md` | Type alias `TransactorOptions` API reference |

### reference/powersync-db-collection/variables/ (1 files)

| File | Description |
|------|-------------|
| `reference/powersync-db-collection/variables/DEFAULT_BATCH_SIZE.md` | Variable `DEFAULT_BATCH_SIZE`: Default value for PowerSyncCollectionConfig#syncBatchSize. |

### reference/query-db-collection/ (1 files)

| File | Description |
|------|-------------|
| `reference/query-db-collection/index.md` | @tanstack/query-db-collection |

### reference/query-db-collection/classes/ (16 files)

| File | Description |
|------|-------------|
| `reference/query-db-collection/classes/DeleteOperationItemNotFoundError.md` | Class `DeleteOperationItemNotFoundError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/DuplicateKeyInBatchError.md` | Class `DuplicateKeyInBatchError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/GetKeyRequiredError.md` | Class `GetKeyRequiredError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/InitialDataInOnDemandModeError.md` | Class `InitialDataInOnDemandModeError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/InvalidItemStructureError.md` | Class `InvalidItemStructureError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/InvalidQueryResultError.md` | Class `InvalidQueryResultError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/InvalidSyncOperationError.md` | Class `InvalidSyncOperationError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/ItemNotFoundError.md` | Class `ItemNotFoundError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/MissingKeyFieldError.md` | Class `MissingKeyFieldError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/QueryClientRequiredError.md` | Class `QueryClientRequiredError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/QueryCollectionError.md` | Class `QueryCollectionError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/QueryFnRequiredError.md` | Class `QueryFnRequiredError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/QueryKeyRequiredError.md` | Class `QueryKeyRequiredError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/SyncNotInitializedError.md` | Class `SyncNotInitializedError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/UnknownOperationTypeError.md` | Class `UnknownOperationTypeError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/query-db-collection/classes/UpdateOperationItemNotFoundError.md` | Class `UpdateOperationItemNotFoundError`: collected by a stack trace (whether generated by `new Error().stack` or |

### reference/query-db-collection/functions/ (2 files)

| File | Description |
|------|-------------|
| `reference/query-db-collection/functions/createCursorPager.md` | Function `createCursorPager`: Fulfill offset/limit windows using opaque backend cursors. |
| `reference/query-db-collection/functions/queryCollectionOptions.md` | Function `queryCollectionOptions`: Creates query collection options for use with a standard Collection. |

### reference/query-db-collection/interfaces/ (6 files)

| File | Description |
|------|-------------|
| `reference/query-db-collection/interfaces/CursorPage.md` | Interface `CursorPage`: One backend page. Only null means the ordered result is exhausted. |
| `reference/query-db-collection/interfaces/CursorPager.md` | Interface `CursorPager`: Remove this key's cached pages and invalidate this pager's queued reads. |
| `reference/query-db-collection/interfaces/CursorPagerOptions.md` | Interface `CursorPagerOptions`: Query's inactive cache lifetime. |
| `reference/query-db-collection/interfaces/QueryCollectionConfig.md` | Interface `QueryCollectionConfig`: Configuration options for creating a Query Collection |
| `reference/query-db-collection/interfaces/QueryCollectionMeta.md` | Interface `QueryCollectionMeta`: Base interface for Query Collection meta properties. |
| `reference/query-db-collection/interfaces/QueryCollectionUtils.md` | Interface `QueryCollectionUtils`: Utility methods available on Query Collections for direct writes and manual operations. |

### reference/query-db-collection/type-aliases/ (1 files)

| File | Description |
|------|-------------|
| `reference/query-db-collection/type-aliases/SyncOperation.md` | Type alias `SyncOperation` API reference |

### reference/rxdb-db-collection/ (1 files)

| File | Description |
|------|-------------|
| `reference/rxdb-db-collection/index.md` | @tanstack/rxdb-db-collection |

### reference/rxdb-db-collection/functions/ (2 files)

| File | Description |
|------|-------------|
| `reference/rxdb-db-collection/functions/rxdbCollectionOptions.md` | Function `rxdbCollectionOptions`: Creates RxDB collection options for use with a standard Collection |
| `reference/rxdb-db-collection/functions/stripRxdbFields.md` | Function `stripRxdbFields` API reference |

### reference/rxdb-db-collection/type-aliases/ (1 files)

| File | Description |
|------|-------------|
| `reference/rxdb-db-collection/type-aliases/RxDBCollectionConfig.md` | Type alias `RxDBCollectionConfig`: Configuration interface for RxDB collection options |

### reference/rxdb-db-collection/variables/ (1 files)

| File | Description |
|------|-------------|
| `reference/rxdb-db-collection/variables/OPEN_RXDB_SUBSCRIPTIONS.md` | Variable `OPEN_RXDB_SUBSCRIPTIONS`: Used in tests to ensure proper cleanup |

### reference/trailbase-db-collection/ (1 files)

| File | Description |
|------|-------------|
| `reference/trailbase-db-collection/index.md` | @tanstack/trailbase-db-collection |

### reference/trailbase-db-collection/classes/ (5 files)

| File | Description |
|------|-------------|
| `reference/trailbase-db-collection/classes/ExpectedDeleteTypeError.md` | Class `ExpectedDeleteTypeError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/trailbase-db-collection/classes/ExpectedInsertTypeError.md` | Class `ExpectedInsertTypeError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/trailbase-db-collection/classes/ExpectedUpdateTypeError.md` | Class `ExpectedUpdateTypeError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/trailbase-db-collection/classes/TimeoutWaitingForIdsError.md` | Class `TimeoutWaitingForIdsError`: collected by a stack trace (whether generated by `new Error().stack` or |
| `reference/trailbase-db-collection/classes/TrailBaseDBCollectionError.md` | Class `TrailBaseDBCollectionError`: collected by a stack trace (whether generated by `new Error().stack` or |

### reference/trailbase-db-collection/functions/ (1 files)

| File | Description |
|------|-------------|
| `reference/trailbase-db-collection/functions/trailBaseCollectionOptions.md` | Function `trailBaseCollectionOptions`: `CollectionConfig`\<`TItem`, `TKey`, `never`, `TrailBaseCollectionUtils`\> & `object` |

### reference/trailbase-db-collection/interfaces/ (2 files)

| File | Description |
|------|-------------|
| `reference/trailbase-db-collection/interfaces/TrailBaseCollectionConfig.md` | Interface `TrailBaseCollectionConfig`: Configuration interface for Trailbase Collection |
| `reference/trailbase-db-collection/interfaces/TrailBaseCollectionUtils.md` | Interface `TrailBaseCollectionUtils` API reference |

### reference/type-aliases/ (129 files)

| File | Description |
|------|-------------|
| `reference/type-aliases/ApplyJoinOptionalityToMergedSchema.md` | Type alias `ApplyJoinOptionalityToMergedSchema`: ApplyJoinOptionalityToMergedSchema - Applies optionality rules when merging schemas |
| `reference/type-aliases/BasicIndexOptions.md` | Type alias `BasicIndexOptions`: Options for Basic index |
| `reference/type-aliases/ChangeListener.md` | Type alias `ChangeListener`: Function type for listening to collection changes |
| `reference/type-aliases/ChangeMessageOrDeleteKeyMessage.md` | Type alias `ChangeMessageOrDeleteKeyMessage` API reference |
| `reference/type-aliases/ChangesPayload.md` | Type alias `ChangesPayload` API reference |
| `reference/type-aliases/CleanupFn.md` | Type alias `CleanupFn`: Ends one sync run and releases its adapter-owned resources. |
| `reference/type-aliases/ClearStorageFn.md` | Type alias `ClearStorageFn`: Type for the clear utility function |
| `reference/type-aliases/CollectionBase.md` | Type alias `CollectionBase` API reference |
| `reference/type-aliases/CollectionConfigSingleRowOption.md` | Type alias `CollectionConfigSingleRowOption` API reference |
| `reference/type-aliases/CollectionMaterializeOptions.md` | Type alias `CollectionMaterializeOptions` API reference |
| `reference/type-aliases/CollectionOptions.md` | Type alias `CollectionOptions` API reference |
| `reference/type-aliases/CollectionStatus.md` | Type alias `CollectionStatus`: Collection status values for lifecycle management |
| `reference/type-aliases/ContextFromSource.md` | Type alias `ContextFromSource` API reference |
| `reference/type-aliases/ContextFromUnionBranches.md` | Type alias `ContextFromUnionBranches` API reference |
| `reference/type-aliases/ContextFromUnionSource.md` | Type alias `ContextFromUnionSource` API reference |
| `reference/type-aliases/ContextSchema.md` | Type alias `ContextSchema`: ContextSchema - The shape of available tables/collections in a query context |
| `reference/type-aliases/CursorExpressions.md` | Type alias `CursorExpressions`: Cursor expressions for pagination, passed separately from the main `where` clause. |
| `reference/type-aliases/DbClientEvent.md` | Type alias `DbClientEvent` API reference |
| `reference/type-aliases/DbClientLiveQuery.md` | Type alias `DbClientLiveQuery`: Initial hydration view retained while a local preload completes. |
| `reference/type-aliases/DbClientLiveQueryState.md` | Type alias `DbClientLiveQueryState` API reference |
| `reference/type-aliases/DbClientOptions.md` | Type alias `DbClientOptions` API reference |
| `reference/type-aliases/DeferredLiveQueryCollections.md` | Type alias `DeferredLiveQueryCollections` API reference |
| `reference/type-aliases/DehydrateDbClientOptions.md` | Type alias `DehydrateDbClientOptions` API reference |
| `reference/type-aliases/DehydratedCollectionChunk.md` | Type alias `DehydratedCollectionChunk` API reference |
| `reference/type-aliases/DehydratedCollectionRow.md` | Type alias `DehydratedCollectionRow` API reference |
| `reference/type-aliases/DehydratedDbState.md` | Type alias `DehydratedDbState` API reference |
| `reference/type-aliases/DehydratedLiveQuery.md` | Type alias `DehydratedLiveQuery`: Earlier ordinary markup may precede a shared Suspense result. |
| `reference/type-aliases/DehydratedLiveQueryResult.md` | Type alias `DehydratedLiveQueryResult`: An initial SSR view may precede query readiness. |
| `reference/type-aliases/DeleteKeyMessage.md` | Type alias `DeleteKeyMessage` API reference |
| `reference/type-aliases/DeleteMutationFn.md` | Type alias `DeleteMutationFn` API reference |
| `reference/type-aliases/DeleteMutationFnParams.md` | Type alias `DeleteMutationFnParams` API reference |
| `reference/type-aliases/DeltaEvent.md` | Type alias `DeltaEvent`: Delta event emitted when a row enters, exits, or updates within a query result |
| `reference/type-aliases/DeltaType.md` | Type alias `DeltaType`: Event types for query result deltas |
| `reference/type-aliases/DemandKey.md` | Type alias `DemandKey`: Exact identity for one loadSubset demand, including its requested window. |
| `reference/type-aliases/EffectQueryInput.md` | Type alias `EffectQueryInput`: Query input - can be a builder function or a prebuilt query |
| `reference/type-aliases/ExtractContext.md` | Type alias `ExtractContext` API reference |
| `reference/type-aliases/FieldPath.md` | Type alias `FieldPath`: Represents a simple field path extracted from an expression. |
| `reference/type-aliases/Fn.md` | Type alias `Fn`: Represents a utility function that can be attached to a collection |
| `reference/type-aliases/FunctionalHavingRow.md` | Type alias `FunctionalHavingRow`: FunctionalHavingRow - Type for the row parameter in functional having callbacks |
| `reference/type-aliases/GetResult.md` | Type alias `GetResult` API reference |
| `reference/type-aliases/GetStorageSizeFn.md` | Type alias `GetStorageSizeFn`: Type for the getStorageSize utility function |
| `reference/type-aliases/GroupByCallback.md` | Type alias `GroupByCallback`: GroupByCallback - Type for groupBy clause callback functions |
| `reference/type-aliases/Grouping.md` | Type alias `Grouping` API reference |
| `reference/type-aliases/IncludesRuntime.md` | Type alias `IncludesRuntime` API reference |
| `reference/type-aliases/IndexConstructor.md` | Type alias `IndexConstructor`: Type for index constructor |
| `reference/type-aliases/IndexOperation-1.md` | Type alias `IndexOperation`: Type for index operation values |
| `reference/type-aliases/IndexOperation.md` | Type alias `IndexOperation`: Operations that indexes can support, imported from available comparison functions |
| `reference/type-aliases/IndexReader.md` | Type alias `IndexReader`: The read-side surface consumers use on a resolved (possibly reversed) index. |
| `reference/type-aliases/InferCollectionType.md` | Type alias `InferCollectionType`: InferCollectionType - Extracts the TypeScript type from a CollectionImpl |
| `reference/type-aliases/InferResultType.md` | Type alias `InferResultType`: Utility type to infer the query result size (single row or an array) |
| `reference/type-aliases/InferSchemaInput.md` | Type alias `InferSchemaInput`: Helper type to extract the input type from a standard schema |
| `reference/type-aliases/InferSchemaOutput.md` | Type alias `InferSchemaOutput`: Helper type to extract the output type from a standard schema |
| `reference/type-aliases/InitialQueryBuilder.md` | Type alias `InitialQueryBuilder` API reference |
| `reference/type-aliases/InputRow.md` | Type alias `InputRow`: An input row from a collection |
| `reference/type-aliases/InsertMutationFn.md` | Type alias `InsertMutationFn` API reference |
| `reference/type-aliases/InsertMutationFnParams.md` | Type alias `InsertMutationFnParams` API reference |
| `reference/type-aliases/JoinOnCallback.md` | Type alias `JoinOnCallback`: JoinOnCallback - Type for join condition callback functions |
| `reference/type-aliases/KeyedNamespacedRow.md` | Type alias `KeyedNamespacedRow`: A keyed namespaced row is a row with a key and a namespaced row |
| `reference/type-aliases/KeyedStream.md` | Type alias `KeyedStream`: A keyed stream is a stream of rows |
| `reference/type-aliases/LiveQueryCollectionUtils.md` | Type alias `LiveQueryCollectionUtils`: Gets the current window (offset and limit) for an ordered query. |
| `reference/type-aliases/LiveQueryHookConfig.md` | Type alias `LiveQueryHookConfig`: A live query config that a framework hook accepts. |
| `reference/type-aliases/LiveQueryKey.md` | Type alias `LiveQueryKey` API reference |
| `reference/type-aliases/LiveQueryObserverListener.md` | Type alias `LiveQueryObserverListener`: Listener payload: changes, `[]` for an internal layout-only publication, or |
| `reference/type-aliases/LiveQueryOptions.md` | Type alias `LiveQueryOptions` API reference |
| `reference/type-aliases/LiveQuerySourceIdClaims.md` | Type alias `LiveQuerySourceIdClaims`: The source object each Collection ID named while one binding is mounted, |
| `reference/type-aliases/LiveQueryWindowRecompile.md` | Type alias `LiveQueryWindowRecompile`: When a query input compiles again. |
| `reference/type-aliases/LoadSubsetFn.md` | Type alias `LoadSubsetFn`: Loads one subset. A Collection subscription installs its logical owner |
| `reference/type-aliases/LoadSubsetOptions.md` | Type alias `LoadSubsetOptions`: Immutable request data. |
| `reference/type-aliases/LoadSubsetRequestResult.md` | Type alias `LoadSubsetRequestResult`: Result returned by the collection's normalized subset boundary. |
| `reference/type-aliases/MakeOptional.md` | Type alias `MakeOptional` API reference |
| `reference/type-aliases/MaybeSingleResult.md` | Type alias `MaybeSingleResult`: If enabled the collection will return a single object instead of an array |
| `reference/type-aliases/MergeContextForJoinCallback.md` | Type alias `MergeContextForJoinCallback`: MergeContextForJoinCallback - Special context for join condition callbacks |
| `reference/type-aliases/MergeContextWithJoinType.md` | Type alias `MergeContextWithJoinType`: MergeContextWithJoinType - Creates a new context after a join operation |
| `reference/type-aliases/MutationFn.md` | Type alias `MutationFn`: Persists an optimistic transaction. |
| `reference/type-aliases/MutationFnParams.md` | Type alias `MutationFnParams`: Configuration options for creating a new transaction |
| `reference/type-aliases/NamespacedAndKeyedStream.md` | Type alias `NamespacedAndKeyedStream`: A namespaced and keyed stream is a stream of rows |
| `reference/type-aliases/NamespacedRow.md` | Type alias `NamespacedRow`: A namespaced row is a row withing a pipeline that had each table wrapped in its alias |
| `reference/type-aliases/NonEmptyArray.md` | Type alias `NonEmptyArray`: Represents a non-empty array (at least one element) |
| `reference/type-aliases/NonSingleResult.md` | Type alias `NonSingleResult` API reference |
| `reference/type-aliases/OperationType.md` | Type alias `OperationType` API reference |
| `reference/type-aliases/OperatorCallback.md` | Type alias `OperatorCallback`: A callback that an operator value receives before the query supplies its |
| `reference/type-aliases/OperatorName.md` | Type alias `OperatorName` API reference |
| `reference/type-aliases/OptimisticChangeMessage.md` | Type alias `OptimisticChangeMessage` API reference |
| `reference/type-aliases/OrderByCallback.md` | Type alias `OrderByCallback`: OrderByCallback - Type for orderBy clause callback functions |
| `reference/type-aliases/PooledLiveQueries.md` | Type alias `PooledLiveQueries` API reference |
| `reference/type-aliases/Prettify.md` | Type alias `Prettify`: Prettify - Utility type for clean IDE display |
| `reference/type-aliases/QueryBuilder.md` | Type alias `QueryBuilder` API reference |
| `reference/type-aliases/QueryIdentity.md` | Type alias `QueryIdentity`: Semantic identity for a query plan, independent of its runtime owners. |
| `reference/type-aliases/QueryResult.md` | Type alias `QueryResult` API reference |
| `reference/type-aliases/Ref.md` | Type alias `Ref`: Ref - The user-facing ref interface for the query builder |
| `reference/type-aliases/RefsForContext.md` | Type alias `RefsForContext` API reference |
| `reference/type-aliases/ResolveTransactionChanges.md` | Type alias `ResolveTransactionChanges`: `update` and `insert` are both represented as `Partial<T>`, but changes for `insert` could me made more precise by inferring the schema input type. |
| `reference/type-aliases/ResultStream.md` | Type alias `ResultStream`: Result stream type representing the output of compiled queries |
| `reference/type-aliases/ResultTypeFromSelect.md` | Type alias `ResultTypeFromSelect`: ResultTypeFromSelect - Infers the result type from a select object |
| `reference/type-aliases/Row.md` | Type alias `Row` API reference |
| `reference/type-aliases/SchemaFromSource.md` | Type alias `SchemaFromSource`: SchemaFromSource - Converts a Source definition into a ContextSchema |
| `reference/type-aliases/SelectObject.md` | Type alias `SelectObject`: SelectObject - Wrapper type for select clause objects |
| `reference/type-aliases/SingleResult.md` | Type alias `SingleResult` API reference |
| `reference/type-aliases/SingleSource.md` | Type alias `SingleSource` API reference |
| `reference/type-aliases/Source.md` | Type alias `Source`: Source - Input definition for query builder `from()` and `unionAll()` clauses |
| `reference/type-aliases/SourceClauseContext.md` | Type alias `SourceClauseContext` API reference |
| `reference/type-aliases/StandardSchema.md` | Type alias `StandardSchema`: The Standard Schema interface. |
| `reference/type-aliases/StandardSchemaAlias.md` | Type alias `StandardSchemaAlias`: Type alias for StandardSchema |
| `reference/type-aliases/StorageApi.md` | Type alias `StorageApi`: Storage API interface - subset of DOM Storage that we need |
| `reference/type-aliases/StorageEventApi.md` | Type alias `StorageEventApi`: Storage event API - subset of Window for 'storage' events only |
| `reference/type-aliases/Strategy.md` | Type alias `Strategy`: Union type of all available strategies |
| `reference/type-aliases/StrategyOptions.md` | Type alias `StrategyOptions`: Extract the options type from a strategy |
| `reference/type-aliases/StringCollationConfig.md` | Type alias `StringCollationConfig`: StringCollationConfig - Options for string sorting behavior |
| `reference/type-aliases/SubscriptionEvents.md` | Type alias `SubscriptionEvents`: All subscription events |
| `reference/type-aliases/SubscriptionStatus.md` | Type alias `SubscriptionStatus`: Subscription status values |
| `reference/type-aliases/SyncAppliedReceipt.md` | Type alias `SyncAppliedReceipt`: Confirms that a committed sync transaction is visible, or resolves when it |
| `reference/type-aliases/SyncConfigRes.md` | Type alias `SyncConfigRes`: Optional provider-controlled restart for a lost managed cache claim. |
| `reference/type-aliases/SyncMode.md` | Type alias `SyncMode` API reference |
| `reference/type-aliases/SyncPersistenceCapabilityV1.md` | Type alias `SyncPersistenceCapabilityV1`: Unstable cross-package protocol for persistence-aware adapters. |
| `reference/type-aliases/SyncPersistenceKeySetEvidence.md` | Type alias `SyncPersistenceKeySetEvidence` API reference |
| `reference/type-aliases/SyncPersistenceScannedRow.md` | Type alias `SyncPersistenceScannedRow` API reference |
| `reference/type-aliases/SyncPersistenceScanOptions.md` | Type alias `SyncPersistenceScanOptions` API reference |
| `reference/type-aliases/TransactionState.md` | Type alias `TransactionState` API reference |
| `reference/type-aliases/TransactionWithMutations.md` | Type alias `TransactionWithMutations`: Utility type for a Transaction with at least one mutation |
| `reference/type-aliases/UnloadSubsetFn.md` | Type alias `UnloadSubsetFn`: Releases the exact acquisition created for `options`. |
| `reference/type-aliases/UpdateMutationFn.md` | Type alias `UpdateMutationFn` API reference |
| `reference/type-aliases/UpdateMutationFnParams.md` | Type alias `UpdateMutationFnParams` API reference |
| `reference/type-aliases/UtilsRecord.md` | Type alias `UtilsRecord`: A record of utilities (functions or getters) that can be attached to a collection |
| `reference/type-aliases/VirtualOrigin.md` | Type alias `VirtualOrigin`: Collection attribution for a row's current value. |
| `reference/type-aliases/WhereCallback.md` | Type alias `WhereCallback`: WhereCallback - Type for where/having clause callback functions |
| `reference/type-aliases/WithoutVirtualProps.md` | Type alias `WithoutVirtualProps`: Extracts the base type from a type that may have virtual properties. |
| `reference/type-aliases/WithResult.md` | Type alias `WithResult` API reference |
| `reference/type-aliases/WithVirtualProps.md` | Type alias `WithVirtualProps`: Adds virtual properties to a row type. |
| `reference/type-aliases/WritableDeep.md` | Type alias `WritableDeep` API reference |

### reference/variables/ (9 files)

| File | Description |
|------|-------------|
| `reference/variables/collectionOptionsClaim.md` | Variable `collectionOptionsClaim`: Adapter-owned admission hook for options that contain mutable per-Collection state. |
| `reference/variables/groupingCompiler.md` | Variable `groupingCompiler`: The grouping compiler. |
| `reference/variables/includesRuntime.md` | Variable `includesRuntime`: The include materializer. |
| `reference/variables/operators.md` | Variable `operators`: All supported operator names in TanStack DB expressions |
| `reference/variables/pooledLiveQueries.md` | Variable `pooledLiveQueries`: Pooled live queries for framework hooks. |
| `reference/variables/Query.md` | Variable `Query` API reference |
| `reference/variables/SYNC_PERSISTENCE_PROTOCOL.md` | Variable `SYNC_PERSISTENCE_PROTOCOL`: Unstable cross-package protocol for persistence-aware collection adapters. |
| `reference/variables/SYNC_PERSISTENCE_VERSION.md` | Variable `SYNC_PERSISTENCE_VERSION` API reference |
| `reference/variables/syncWriteNamesWholeRow.md` | Variable `syncWriteNamesWholeRow`: Internal marker on a sync write: |

