# tanstack-table Table of Contents

## Directory Map

```
contents/
├── overview.md, installation.md, devtools.md, agent-skills.md   # Top-level intro (4 files)
├── guide/                      # Framework-agnostic core concept guides (14 files)
├── framework/
│   ├── react/
│   │   ├── quick-start.md      # React quick start
│   │   ├── guide/              # React feature guides: sorting, filtering, pagination, etc. (27 files)
│   │   └── reference/          # @tanstack/react-table API reference (index + legacy, ~63 files)
│   └── vanilla/guide/          # Vanilla JS guides (3 files)
└── reference/                  # @tanstack/table-core API reference (auto-generated)
    ├── index/functions/        # (41 files)
    ├── index/interfaces/       # (199 files)
    ├── index/type-aliases/     # (97 files)
    ├── index/variables/        # (68 files)
    └── static-functions/functions/  # Per-instance method functions (285 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/overview.md`, `contents/installation.md` |
| React quick start | `contents/framework/react/quick-start.md` |
| Core concepts (tables, columns, rows, cells) | `contents/guide/` |
| Sorting / filtering / pagination | `contents/framework/react/guide/sorting.md`, `column-filtering.md`, `pagination.md` |
| Migrating from v8 | `contents/framework/react/guide/migrating.md`, `use-legacy-table.md` |
| API lookup | `contents/reference/index.md`, `contents/framework/react/reference/index.md` |

## Detailed Structure

Note: reference/ pages are auto-generated typedoc output; descriptions are the first sentence of each page.

### (root) (4 files)

| File | Description |
|------|-------------|
| `agent-skills.md` | You're building with TanStack Table and using an AI coding agent such as Claude Code, Cursor, GitHub Copilot, or Codex. |
| `devtools.md` | TanStack Table provides framework-specific devtools adapters that plug into the TanStack Devtools multi-panel UI. |
| `installation.md` | Before we dig in to the API, let's get you set up! |
| `overview.md` | TanStack Table is the best way to build your own powerful table and datagrid components with _blazingly fast_ performance, but... |

### framework/react/ (1 files)

| File | Description |
|------|-------------|
| `quick-start.md` | TanStack Table is a headless table library. |

### framework/react/guide/ (27 files)

| File | Description |
|------|-------------|
| `aggregation.md` | Aggregation is independent from column grouping. |
| `cell-selection.md` | React guide to cell selection: setup, table options, state and APIs. |
| `cell-spanning.md` | React guide to cell spanning: setup, table options, state and APIs. |
| `column-faceting.md` | React guide to faceting: setup, table options, state and APIs. |
| `column-filtering.md` | React guide to column filtering: setup, table options, state and APIs. |
| `column-ordering.md` | React guide to column ordering: setup, table options, state and APIs. |
| `column-pinning.md` | React guide to column pinning: setup, table options, state and APIs. |
| `column-resizing.md` | React guide to column resizing: setup, table options, state and APIs. |
| `column-sizing.md` | React guide to column sizing: setup, table options, state and APIs. |
| `column-visibility.md` | React guide to column visibility: setup, table options, state and APIs. |
| `composable-tables.md` | The same API can also register reusable table, cell, and header components, but component registration is optional. |
| `custom-features.md` | In this guide, we'll cover how to extend TanStack Table with custom features, and along the way, we'll learn more about how... |
| `expanding.md` | React guide to expanding: setup, table options, state and APIs. |
| `flex-render.md` | Column definitions can contain plain React nodes or renderer components for header, cell, footer, and aggregatedCell. |
| `fuzzy-filtering.md` | React guide to fuzzy filtering: setup, table options, state and APIs. |
| `global-filtering.md` | React guide to global filtering: setup, table options, state and APIs. |
| `grouping.md` | React guide to grouping: setup, table options, state and APIs. |
| `migrating.md` | TanStack Table V9 delivers major performance improvements, hundreds of bug fixes, new and refreshed features, and optional... |
| `pagination.md` | React guide to pagination: setup, table options, state and APIs. |
| `react-compiler.md` | The React Compiler automatically memoizes React components and values created during render. |
| `row-pinning.md` | React guide to row pinning: setup, table options, state and APIs. |
| `row-selection.md` | React guide to row selection: setup, table options, state and APIs. |
| `sorting.md` | React guide to sorting: setup, table options, state and APIs. |
| `table-context.md` | When you register reusable components with createTableHook, those components read the current table, cell, or header from... |
| `table-state.md` | Understanding this guide is fundamental to understanding how TanStack Table works and how to interact with it for the best... |
| `use-legacy-table.md` | The useLegacyTable hook provides a compatibility layer that accepts the v8-style API while using v9 under the hood. |
| `virtualization.md` | Here's how you set up your table to use virtualization with TanStack Table. |

### framework/react/reference/ (1 files)

| File | Description |
|------|-------------|
| `index.md` | @tanstack/react-table |

### framework/react/reference/index/ (1 files)

| File | Description |
|------|-------------|
| `index.md` | index |

### framework/react/reference/index/functions/ (6 files)

| File | Description |
|------|-------------|
| `FlexRender-1.md` | Simplified component wrapper of flexRender. |
| `Subscribe.md` | A React component that allows you to subscribe to the table state. |
| `createTableHook.md` | Creates a custom table hook with pre-bound components for composition. |
| `createTableHookContexts.md` | Creates a fresh, scoped set of table/cell/header contexts (plus matching |
| `flexRender.md` | If rendering headers, cells, or footers with custom markup, use flexRender instead of cell.getValue() or cell.renderValue(). |
| `useTable.md` | Creates a React table instance backed by TanStack Store atoms. |

### framework/react/reference/index/interfaces/ (11 files)

| File | Description |
|------|-------------|
| `AppCellComponent.md` | Component type for AppCell - wraps a cell and provides cell context with optional Subscribe |
| `AppCellPropsWithSelector.md` | Props for AppCell component - with selector |
| `AppCellPropsWithoutSelector.md` | Props for AppCell component - without selector |
| `AppHeaderComponent.md` | Component type for AppHeader/AppFooter - wraps a header and provides header context with optional Subscribe |
| `AppHeaderPropsWithSelector.md` | Props for AppHeader/AppFooter component - with selector |
| `AppHeaderPropsWithoutSelector.md` | Props for AppHeader/AppFooter component - without selector |
| `AppTableComponent.md` | Component type for AppTable - root wrapper with optional Subscribe |
| `AppTablePropsWithSelector.md` | Props for AppTable component - with selector |
| `AppTablePropsWithoutSelector.md` | Props for AppTable component - without selector |
| `CreateTableHookResult.md` | The features object that was passed to createTableHook. |
| `TableHookContexts.md` | The object returned by createTableHookContexts: three scoped React |

### framework/react/reference/index/type-aliases/ (18 files)

| File | Description |
|------|-------------|
| `AppCellContext.md` | Enhanced CellContext with pre-bound cell components. |
| `AppColumnDefBase.md` | Enhanced column definition base with pre-bound components in cell/header/footer contexts. |
| `AppColumnDefTemplate.md` | Template type for column definitions that can be a string or a function. |
| `AppColumnHelper.md` | Enhanced column helper with pre-bound components in cell/header/footer contexts. |
| `AppDisplayColumnDef.md` | Enhanced display column definition with pre-bound components. |
| `AppGroupColumnDef.md` | Enhanced group column definition with pre-bound components. |
| `AppHeaderContext.md` | Enhanced HeaderContext with pre-bound header components. |
| `AppReactTable.md` | Extended table API returned by useAppTable with all App wrapper components |
| `CreateTableHookOptions.md` | Options for creating a table hook with pre-bound components and default table options. |
| `FlexRenderProps.md` | Simplified component wrapper of flexRender. |
| `ReactTable.md` | A React component that renders headers, cells, or footers with custom markup. |
| `Renderable.md` | Renderable |
| `SubscribeProps.md` | SubscribeProps |
| `SubscribePropsWithSource.md` | Subscribe to a single source — atom or store (identity or projected). |
| `SubscribePropsWithSourceIdentity.md` | Subscribe to the full value of a source (e.g. |
| `SubscribePropsWithSourceWithSelector.md` | Subscribe to a projected value from a source (atom or store). |
| `SubscribePropsWithStore.md` | Subscribe to table.store (full table state). |
| `SubscribeSource.md` | SubscribeSource |

### framework/react/reference/legacy/ (1 files)

| File | Description |
|------|-------------|
| `index.md` | legacy |

### framework/react/reference/legacy/functions/ (11 files)

| File | Description |
|------|-------------|
| `getCoreRowModel.md` | The core row model is always created automatically in v9. |
| `getExpandedRowModel.md` | Use createExpandedRowModel() with the new useTable hook instead. |
| `getFacetedMinMaxValues.md` | Use createFacetedMinMaxValues() with the new useTable hook instead. |
| `getFacetedRowModel.md` | Use createFacetedRowModel() with the new useTable hook instead. |
| `getFacetedUniqueValues.md` | Use createFacetedUniqueValues() with the new useTable hook instead. |
| `getFilteredRowModel.md` | Use createFilteredRowModel() in the filteredRowModel feature slot with the new useTable hook instead. |
| `getGroupedRowModel.md` | Use createGroupedRowModel() in the groupedRowModel feature slot with the new useTable hook instead. |
| `getPaginationRowModel.md` | Use createPaginatedRowModel() with the new useTable hook instead. |
| `getSortedRowModel.md` | Use createSortedRowModel() in the sortedRowModel feature slot with the new useTable hook instead. |
| `legacyCreateColumnHelper.md` | Use createColumnHelper<TFeatures, TData>() with useTable instead. |
| `useLegacyTable.md` | Legacy v8-style table options |

### framework/react/reference/legacy/interfaces/ (2 files)

| File | Description |
|------|-------------|
| `LegacyFeatures.md` | Feature set registered by useLegacyTable. |
| `LegacyRowModelOptions.md` | Legacy v8-style row model options |

### framework/react/reference/legacy/type-aliases/ (13 files)

| File | Description |
|------|-------------|
| `FacetedMinMaxValuesFactory.md` | Faceted min/max values factory function type from v8 API |
| `FacetedRowModelFactory.md` | Faceted row model factory function type from v8 API |
| `FacetedUniqueValuesFactory.md` | Faceted unique values factory function type from v8 API |
| `LegacyCell.md` | Use Cell<TFeatures, TData, TValue> with useTable instead. |
| `LegacyColumn.md` | Use Column<TFeatures, TData, TValue> with useTable instead. |
| `LegacyColumnDef.md` | Use ColumnDef<TFeatures, TData, TValue> with useTable instead. |
| `LegacyHeader.md` | Use Header<TFeatures, TData, TValue> with useTable instead. |
| `LegacyHeaderGroup.md` | Use HeaderGroup<TFeatures, TData> with useTable instead. |
| `LegacyReactTable.md` | Legacy table instance type that includes the v8-style getState() method. |
| `LegacyRow.md` | Use Row<TFeatures, TData> with useTable instead. |
| `LegacyTable.md` | Use Table<TFeatures, TData> with useTable instead. |
| `LegacyTableOptions.md` | Legacy v8-style table options that work with useLegacyTable. |
| `RowModelFactory.md` | Row model factory function type from v8 API |

### framework/vanilla/ (1 files)

| File | Description |
|------|-------------|
| `quick-start.md` | TanStack Table is a headless table library. |

### framework/vanilla/guide/ (3 files)

| File | Description |
|------|-------------|
| `aggregation.md` | Aggregation is independent from column grouping. |
| `flex-render.md` | The Vanilla adapter does not own a rendering engine. |
| `table-state.md` | Understanding this guide is fundamental to understanding how TanStack Table works and how to interact with it for the best... |

### guide/ (14 files)

| File | Description |
|------|-------------|
| `cells.md` | This quick guide will discuss the different ways you can retrieve and interact with cell objects in TanStack Table. |
| `client-side-vs-server-side.md` | More accurately, TanStack Table lets you bring your own backend or other manual approach to processing data for features such... |
| `column-defs.md` | Column defs are the single most important part of building a table. |
| `columns.md` | This quick guide will discuss the different ways you can retrieve and interact with column objects in TanStack Table. |
| `data.md` | Tables start with your data. |
| `features.md` | TanStack Table v9 requires a features option so that every table explicitly declares the capabilities it uses. |
| `header-groups.md` | This quick guide will discuss the different ways you can retrieve and interact with header group objects in TanStack Table. |
| `headers.md` | This quick guide will discuss the different ways you can retrieve and interact with header objects in TanStack Table. |
| `helpers.md` | TanStack Table exposes a few small helper functions for authoring table configuration with better TypeScript inference. |
| `row-models.md` | If you take a look at the most basic example of TanStack Table, you'll see a code snippet like this: |
| `rows.md` | This quick guide will discuss the different ways you can retrieve and interact with row objects in TanStack Table. |
| `table-and-column-meta.md` | Sometimes you need to attach your own arbitrary data or functions to a table or its columns so that they are available... |
| `tables.md` | TanStack Table is a headless UI library. |
| `worker-row-models.md` | The worker plugin moves the expensive row model stages (filtering, grouping with aggregation, and sorting) into a dedicated... |

### reference/ (1 files)

| File | Description |
|------|-------------|
| `index.md` | @tanstack/table-core |

### reference/index/ (1 files)

| File | Description |
|------|-------------|
| `index.md` | index |

### reference/index/functions/ (41 files)

| File | Description |
|------|-------------|
| `assignPrototypeAPIs.md` | Assigns API methods to a prototype object for memory-efficient method sharing. |
| `assignTableAPIs.md` | Assigns Table API methods directly to the table instance. |
| `buildHeaderGroups.md` | Builds the nested header group structure for a table. |
| `callMemoOrStaticFn.md` | Looks to run the memoized function with the builder pattern on the object if it exists, otherwise fall back to the static... |
| `cloneState.md` | Clones table state values while preserving non-plain objects. |
| `constructAggregationFn.md` | Creates a typed context-based aggregation definition for a column or |
| `constructCell.md` | Constructs a cell instance from normalized table internals. |
| `constructColumn.md` | Constructs a column instance from normalized table internals. |
| `constructFilterFn.md` | Builds a FilterFn from a value-level comparator plus optional resolvers. |
| `constructHeader.md` | Constructs a header instance from normalized table internals. |
| `constructRow.md` | Constructs a row instance from normalized table internals. |
| `constructSortFn.md` | Builds a SortFn from a value-level comparator plus an optional |
| `constructTable.md` | Constructs a table instance from normalized table internals. |
| `copyInstancePropertiesWithoutMemos.md` | Copies prototype-instance own properties without carrying over lazy memo |
| `createColumnHelper.md` | Creates helper functions for authoring column definitions with stronger value |
| `createCoreRowModel.md` | Creates a memoized core row model factory. |
| `createExpandedRowModel.md` | Creates a memoized expanded row model factory. |
| `createFacetedMinMaxValues.md` | Creates a memoized faceted min max values helper for faceted filtering. |
| `createFacetedRowModel.md` | Creates a memoized faceted row model factory. |
| `createFacetedUniqueValues.md` | Creates a memoized faceted unique values helper for faceted filtering. |
| `createFilteredRowModel.md` | Creates a memoized filtered row model factory. |
| `createGroupedRowModel.md` | Creates a memoized grouped row model factory. |
| `createPaginatedRowModel.md` | Creates a memoized paginated row model factory. |
| `createSortedRowModel.md` | Creates a memoized sorted row model factory. |
| `expandRows.md` | Expands a row model according to the current expanded row state. |
| `flattenBy.md` | Flattens a tree of nodes by recursively reading child nodes. |
| `functionalUpdate.md` | Applies a TanStack updater to a value. |
| `getFunctionNameInfo.md` | Assumes that a function name is in the format of parentName_fnKey and returns the fnKey and fnName in the format of... |
| `getInitialTableState.md` | Builds the initial table state from registered features and user initial state. |
| `hasOwn.md` | Checks whether an object owns a key, including null-prototype dictionaries. |
| `isFunction.md` | isFunction |
| `makeObjectMap.md` | Creates an object intended only for string-keyed dictionary lookups. |
| `makeStateUpdater.md` | Creates a table state updater for a single state slice. |
| `memo.md` | Creates a dependency-tracked memoized function for table internals. |
| `metaHelper.md` | A helper for declaring the tableMeta/columnMeta type-only slots in the |
| `setStateSlice.md` | Routes a state slice update through the slice's on<State>Change handler, |
| `skipFirstRun.md` | Wraps a callback so that its first invocation is skipped. |
| `stateSlicesEqual.md` | Structurally compares two state slice values as deeply as stock feature |
| `tableFeatures.md` | A helper function to help define the features that are to be imported and applied to a table instance. |
| `tableMemo.md` | Creates a table-aware memoized function. |
| `tableOptions.md` | Runtime implementation for tableOptions. |

### reference/index/interfaces/ (199 files)

| File | Description |
|------|-------------|
| `API.md` | API |
| `AggregationContext.md` | Values and table objects available while one aggregation is evaluated. |
| `AggregationFnDef.md` | A context-based aggregation definition and optional grouped-result merge. |
| `AggregationFnDescriptor.md` | Gives an aggregation reference a stable key in a multiple result. |
| `AggregationFns.md` | Declaration-merging fallback for named aggregation definitions. |
| `AggregationMergeContext.md` | Additional values available when merging nested grouped results. |
| `AggregationValueContext.md` | Values passed to a column-level aggregation-value provider. |
| `AggregationValueOptions.md` | Options for a caller-requested column aggregation value. |
| `AggregationValueResult.md` | Marks an aggregation-value override as handled. |
| `CachedRowModel_All.md` | \[number, number\] \/ undefined |
| `CachedRowModel_Core.md` | CachedRowModel_Core |
| `CachedRowModel_Expanded.md` | CachedRowModel_Expanded |
| `CachedRowModel_Faceted.md` | \[number, number\] \/ undefined |
| `CachedRowModel_Filtered.md` | CachedRowModel_Filtered |
| `CachedRowModel_Grouped.md` | CachedRowModel_Grouped |
| `CachedRowModel_Paginated.md` | CachedRowModel_Paginated |
| `CachedRowModel_Sorted.md` | CachedRowModel_Sorted |
| `CachedRowModels_FeatureMap.md` | CachedRowModels_FeatureMap |
| `CellContext.md` | CellContext |
| `CellSelectionBounds.md` | A range resolved into inclusive display-order indexes. |
| `CellSelectionEdges.md` | Which sides of a selected cell sit on the outer boundary of the selection. |
| `CellSelectionRange.md` | A single rectangular cell selection, stored as its two defining corners. |
| `CellSpanIndex.md` | The table's cell span index for the rows that are currently rendered. |
| `Cell_Cell.md` | The associated Column object for the cell. |
| `Cell_CellSelection.md` | Checks whether this cell can currently be selected. |
| `Cell_CellSpanning.md` | Number of columns this cell spans when rendered. |
| `Cell_ColumnGrouping.md` | Checks whether this cell represents the active grouping column. |
| `Cell_Core.md` | The associated Column object for the cell. |
| `Cell_CoreProperties.md` | The associated Column object for the cell. |
| `Cell_FeatureMap.md` | Cell_FeatureMap |
| `Cell_RowAggregation.md` | Cell instance APIs installed by rowAggregationFeature. |
| `ColSpanContext.md` | Context passed to a spanColumns resolver for each rendered row. |
| `ColumnDef_CellSelection.md` | Allows cells in this column to be selected. |
| `ColumnDef_CellSpanning.md` | Turns this column off for cell spanning even when the table allows it. |
| `ColumnDef_ColumnFiltering.md` | Enables this column to participate in column-specific filtering. |
| `ColumnDef_ColumnGrouping.md` | Allows this column to be added to grouping state. |
| `ColumnDef_ColumnPinning.md` | Allows this column's leaf columns to be pinned. |
| `ColumnDef_ColumnResizing.md` | Enables or disables column resizing for the column. |
| `ColumnDef_ColumnSizing.md` | Upper bound used when resolving this column's size. |
| `ColumnDef_ColumnVisibility.md` | Allows this column to be hidden. |
| `ColumnDef_FeatureMap.md` | ColumnDef_FeatureMap |
| `ColumnDef_GlobalFiltering.md` | Allows this column to be scanned by global filtering. |
| `ColumnDef_RowAggregation.md` | Column-definition options installed by rowAggregationFeature. |
| `ColumnDef_RowSorting.md` | Enables/Disables multi-sorting for this column. |
| `ColumnDefaultOptions.md` | ColumnDefaultOptions |
| `ColumnFilter.md` | ColumnFilter |
| `ColumnHelper.md` | Creates a data column definition with an accessor key or function to extract the cell value. |
| `ColumnIndexes.md` | Maps each visible leaf column id to its index in the full visible column list. |
| `ColumnMeta.md` | ColumnMeta |
| `ColumnOffsets.md` | Offset from the end edge of the region to each column's end edge, keyed by |
| `ColumnOffsetsByPosition.md` | Offsets across all visible leaf columns, ignoring pinning regions. |
| `ColumnOrderDefaultOptions.md` | ColumnOrderDefaultOptions |
| `ColumnPinningDefaultOptions.md` | ColumnPinningDefaultOptions |
| `ColumnPinningState.md` | ColumnPinningState |
| `ColumnSort.md` | ColumnSort |
| `Column_Column.md` | The resolved accessor function to use when extracting the value for the column from each row. |
| `Column_ColumnFaceting.md` | Computes min/max numeric facet values for this column. |
| `Column_ColumnFiltering.md` | Checks whether this accessor column can currently be column-filtered. |
| `Column_ColumnGrouping.md` | Checks whether this column can currently be grouped. |
| `Column_ColumnOrdering.md` | Finds this column's zero-based index among visible columns. |
| `Column_ColumnPinning.md` | Checks whether this column or any of its leaves can be pinned. |
| `Column_ColumnResizing.md` | Checks whether this column can start a resize interaction. |
| `Column_ColumnSizing.md` | Measures the offset from this column's end edge to the end of its region. |
| `Column_ColumnVisibility.md` | Checks whether this column is allowed to be hidden. |
| `Column_Core.md` | The resolved accessor function to use when extracting the value for the column from each row. |
| `Column_CoreProperties.md` | The resolved accessor function to use when extracting the value for the column from each row. |
| `Column_FeatureMap.md` | Column_FeatureMap |
| `Column_GlobalFiltering.md` | Checks whether this accessor column participates in global filtering. |
| `Column_Internal.md` | The resolved accessor function to use when extracting the value for the column from each row. |
| `Column_RowAggregation.md` | Column instance APIs installed by rowAggregationFeature. |
| `Column_RowSorting.md` | Removes this column from the table's sorting state |
| `CoreFeatures.md` | CoreFeatures |
| `CreatedFilterFn.md` | The shape returned by constructFilterFn: a FilterFn with its definition |
| `CreatedSortFn.md` | The shape returned by constructSortFn: a SortFn with its definition |
| `FeatureSlotPrereqs.md` | Maps each row model and fn registry slot to the feature(s) that must be |
| `FilterFn.md` | Removes the filter from state.columnFilters when the filter value fails |
| `FilterFnDef.md` | The definition object accepted by constructFilterFn. |
| `FilterFns.md` | FilterFns |
| `FilterMeta.md` | FilterMeta |
| `HeaderContext.md` | HeaderContext |
| `HeaderGroup.md` | HeaderGroup |
| `HeaderGroup_Core.md` | HeaderGroup_Core |
| `HeaderGroup_Header.md` | HeaderGroup_Header |
| `Header_ColumnResizing.md` | Creates the onMouseDown/onTouchStart handler for a resize handle. |
| `Header_ColumnSizing.md` | Computes this header's rendered size from its leaf columns. |
| `Header_Core.md` | The col-span for the header. |
| `Header_CoreProperties.md` | The col-span for the header. |
| `Header_FeatureMap.md` | Header_FeatureMap |
| `Header_Header.md` | The col-span for the header. |
| `IdIdentifier.md` | Header text or template used to render this column's header. |
| `PaginationDefaultOptions.md` | PaginationDefaultOptions |
| `PaginationState.md` | The number of rows per page. |
| `Plugins.md` | Declaration-merge target for custom table features. |
| `PrototypeAPI.md` | PrototypeAPI |
| `ResolvedAggregationFn.md` | A validated aggregation entry returned by column.getAggregationFns(). |
| `ResolvedColumnFilter.md` | ResolvedColumnFilter |
| `RowModel.md` | RowModel |
| `RowModelFns_All.md` | RowModelFns_All |
| `RowModelFns_ColumnFiltering.md` | RowModelFns_ColumnFiltering |
| `RowModelFns_Core.md` | RowModelFns_Core |
| `RowModelFns_FeatureMap.md` | RowModelFns_FeatureMap |
| `RowModelFns_RowAggregation.md` | Aggregation-definition registry carried by a table feature set. |
| `RowModelFns_RowSorting.md` | RowModelFns_RowSorting |
| `RowPinningDefaultOptions.md` | RowPinningDefaultOptions |
| `RowPinningState.md` | RowPinningState |
| `RowSpanContext.md` | Context passed to a spanRows predicate for each candidate row. |
| `Row_ColumnFiltering.md` | The column filters map for the row. |
| `Row_ColumnGrouping.md` | Reads the value used to group this row for a column id. |
| `Row_ColumnPinning.md` | Gets visible row cells whose columns are not pinned start or end. |
| `Row_ColumnVisibility.md` | Gets this row's cells for currently visible columns. |
| `Row_Core.md` | Internal cache used while resolving the current display order. |
| `Row_CoreProperties.md` | Internal cache used while resolving the current display order. |
| `Row_FeatureMap.md` | Row_FeatureMap |
| `Row_Row.md` | Internal cache used while resolving the current display order. |
| `Row_RowAggregation.md` | Internal per-row cache used while grouped aggregates are evaluated. |
| `Row_RowExpanding.md` | Checks whether this row can be expanded. |
| `Row_RowPinning.md` | Checks whether this row can be pinned. |
| `Row_RowSelection.md` | Checks whether this row can be selected alongside other rows. |
| `SelectCellRangeOptions.md` | Whether the range should be added alongside existing ranges rather than |
| `SortFn.md` | Normalizes each row's value before the two sides are compared. |
| `SortFnDef.md` | The definition object accepted by constructSortFn. |
| `SortFns.md` | SortFns |
| `StockFeatures.md` | StockFeatures |
| `StringHeaderIdentifier.md` | Header text used both for rendering and as a fallback column id. |
| `TableFeature.md` | Lifecycle hooks and defaults contributed by a table feature. |
| `TableFeatures.md` | Complete feature registry for a table. |
| `TableMeta.md` | TableMeta |
| `TableOptions_Cell.md` | Value used when the desired value is not found in the data. |
| `TableOptions_CellSelection.md` | Resets cell selection to initialState.cellSelection whenever data |
| `TableOptions_CellSpanning.md` | Allows cells to span rows or columns. |
| `TableOptions_ColumnFiltering.md` | Enables column-specific filtering for all columns that also allow it. |
| `TableOptions_ColumnGrouping.md` | Allows columns to be grouped for this table. |
| `TableOptions_ColumnOrdering.md` | Called with an updater when column order state changes. |
| `TableOptions_ColumnPinning.md` | Allows columns to be pinned into logical start and end regions. |
| `TableOptions_ColumnResizing.md` | Sets the resize direction used to calculate drag offsets. |
| `TableOptions_ColumnSizing.md` | Called with an updater when committed column sizing state changes. |
| `TableOptions_ColumnVisibility.md` | Whether to enable column hiding. |
| `TableOptions_Columns.md` | The array of column defs to use for the table. |
| `TableOptions_Core.md` | Core options that are always available on a table, before optional feature |
| `TableOptions_FeatureMap.md` | TableOptions_FeatureMap |
| `TableOptions_GlobalFiltering.md` | Enables global filtering across columns that allow it. |
| `TableOptions_RowAggregation.md` | Table options installed by rowAggregationFeature. |
| `TableOptions_RowExpanding.md` | Enables automatic expanded-state resets when page-altering table state changes. |
| `TableOptions_RowPagination.md` | If set to true, pagination will be reset to the first page when page-altering state changes e.g. |
| `TableOptions_RowPinning.md` | Allows rows to be pinned to top or bottom regions. |
| `TableOptions_RowSelection.md` | Allows rows to be selected alongside other rows. |
| `TableOptions_RowSorting.md` | Resets sorting to its initial state when the data option changes. |
| `TableOptions_Rows.md` | This optional function is used to derive a unique ID for any given row. |
| `TableOptions_Table.md` | Optionally, provide your own external writable atoms for individual state slices. |
| `TableState_All.md` | Internal broad state shape containing every registered feature state slice. |
| `TableState_CellSelection.md` | TableState_CellSelection |
| `TableState_ColumnFiltering.md` | TableState_ColumnFiltering |
| `TableState_ColumnGrouping.md` | TableState_ColumnGrouping |
| `TableState_ColumnOrdering.md` | TableState_ColumnOrdering |
| `TableState_ColumnPinning.md` | TableState_ColumnPinning |
| `TableState_ColumnResizing.md` | TableState_ColumnResizing |
| `TableState_ColumnSizing.md` | TableState_ColumnSizing |
| `TableState_ColumnVisibility.md` | TableState_ColumnVisibility |
| `TableState_FeatureMap.md` | TableState_FeatureMap |
| `TableState_GlobalFiltering.md` | TableState_GlobalFiltering |
| `TableState_RowExpanding.md` | TableState_RowExpanding |
| `TableState_RowPagination.md` | TableState_RowPagination |
| `TableState_RowPinning.md` | TableState_RowPinning |
| `TableState_RowSelection.md` | TableState_RowSelection |
| `TableState_RowSorting.md` | TableState_RowSorting |
| `Table_CellSelection.md` | Whether a drag selection is currently open. |
| `Table_CellSpanning.md` | The memoized span index for the rows that are currently rendered. |
| `Table_ColumnFaceting.md` | \[number, number\] \/ undefined |
| `Table_ColumnFiltering.md` | Resets columnFilters to initialState.columnFilters. |
| `Table_ColumnGrouping.md` | Moves grouped leaf columns as groupedColumnMode sets. |
| `Table_ColumnOrdering.md` | Builds column-id to index records for each visible pinning region. |
| `Table_ColumnPinning.md` | Orders items that each belong to a leaf column, such as visible leaf |
| `Table_ColumnResizing.md` | Resets columnResizing to initialState.columnResizing. |
| `Table_ColumnSizing.md` | Sums the current sizes of visible center-region leaf columns. |
| `Table_ColumnVisibility.md` | Checks whether every leaf column is currently visible. |
| `Table_Columns.md` | Normalizes options.columns into the table's nested column hierarchy. |
| `Table_Core.md` | The core table object that only includes the core table functionality such as column, header, row, and table APIS. |
| `Table_CoreProperties.md` | Cache of the initCellInstanceData functions for features that define one. |
| `Table_FeatureMap.md` | Table_FeatureMap |
| `Table_GlobalFiltering.md` | Currently, this function returns the built-in includesString filter function. |
| `Table_Headers.md` | Flattens every header from every header group, including parent and |
| `Table_Internal.md` | Internal broad table shape used by feature implementations. |
| `Table_RowAggregation.md` | Table APIs installed by rowAggregationFeature. |
| `Table_RowExpanding.md` | Lists expanded sub-rows inline below their parents. |
| `Table_RowModels_Core.md` | Table_RowModels_Core |
| `Table_RowModels_Expanded.md` | Resolves the row model after expanded rows have been flattened into view. |
| `Table_RowModels_Faceted.md` | Computes min/max numeric facet values for the active faceting context. |
| `Table_RowModels_Filtered.md` | Resolves the row model after column and global filters have been applied. |
| `Table_RowModels_Grouped.md` | Resolves the row model after grouping has been applied. |
| `Table_RowModels_Paginated.md` | Resolves the row model after pagination has sliced the current page. |
| `Table_RowModels_Sorted.md` | Reads the row model immediately before sorting. |
| `Table_RowPagination.md` | Resets the page index to 0 after page-altering changes such as new |
| `Table_RowPinning.md` | Gets rows pinned to the bottom region. |
| `Table_RowSelection.md` | The most recent row interacted with through the row selection handler. |
| `Table_RowSorting.md` | Resets sorting after the table data changes when explicitly enabled. |
| `Table_Rows.md` | Root rows are depth 0, direct sub-rows are depth 1, and so on. |
| `Table_Table.md` | Cache of the initCellInstanceData functions for features that define one. |
| `ToggleSelectedOptions.md` | Controls how toggling a row affects its descendants and ancestors. |
| `columnResizingState.md` | columnResizingState |

### reference/index/type-aliases/ (97 files)

| File | Description |
|------|-------------|
| `APIObject.md` | APIObject |
| `AccessorColumnDef.md` | AccessorColumnDef |
| `AccessorFn.md` | Reads a cell value from an original row object. |
| `AccessorFnColumnDef.md` | AccessorFnColumnDef |
| `AccessorFnColumnDefBase.md` | AccessorFnColumnDefBase |
| `AccessorKeyColumnDef.md` | AccessorKeyColumnDef |
| `AccessorKeyColumnDefBase.md` | AccessorKeyColumnDefBase |
| `AggregationFnListItem.md` | One named or explicitly keyed entry in a multiple aggregation option. |
| `AggregationFnOption.md` | A scalar aggregation reference or a list that produces a keyed object. |
| `AggregationFnRef.md` | A registered name, automatic inference, or inline aggregation definition. |
| `AggregationResult.md` | Infers the scalar or keyed result produced by an aggregation option. |
| `AggregationResultOf.md` | Extracts the result type produced by an aggregation definition. |
| `Atoms.md` | A map of readonly derived atoms, one per TableState slice. |
| `Atoms_All.md` | Atoms_All |
| `BaseAtoms.md` | A map of writable atoms, one per TableState slice. |
| `BaseAtoms_All.md` | Internal "all features" flat variants of the atom types. |
| `BuiltInAggregationFn.md` | BuiltInAggregationFn |
| `BuiltInFilterFn.md` | BuiltInFilterFn |
| `BuiltInSortFn.md` | BuiltInSortFn |
| `CachedRowModels.md` | CachedRowModels |
| `Cell.md` | Cell |
| `CellData.md` | CellData |
| `CellSelectionDirection.md` | CellSelectionDirection |
| `CellSelectionRangeMode.md` | CellSelectionRangeMode |
| `CellSelectionRangeOperation.md` | CellSelectionRangeOperation |
| `CellSelectionState.md` | Ordered range operations that produce the final selection. |
| `Column.md` | Column |
| `ColumnAggregationValue.md` | Default public result union when a column's precise option is not known. |
| `ColumnDef.md` | ColumnDef |
| `ColumnDefBase.md` | ColumnDefBase |
| `ColumnDefBase_All.md` | ColumnDefBase_All |
| `ColumnDefResolved.md` | ColumnDefResolved |
| `ColumnDefTemplate.md` | A renderable column template value. |
| `ColumnFilterAutoRemoveTestFn.md` | ColumnFilterAutoRemoveTestFn |
| `ColumnFiltersState.md` | ColumnFiltersState |
| `ColumnOrderState.md` | ColumnOrderState |
| `ColumnPinningPosition.md` | Logical column pinning region. |
| `ColumnResizeDirection.md` | ColumnResizeDirection |
| `ColumnResizeMode.md` | ColumnResizeMode |
| `ColumnResizingDefaultOptions.md` | ColumnResizingDefaultOptions |
| `ColumnSizingDefaultOptions.md` | ColumnSizingDefaultOptions |
| `ColumnSizingState.md` | ColumnSizingState |
| `ColumnVisibilityState.md` | ColumnVisibilityState |
| `CustomAggregationFns.md` | Named context-based aggregation definitions registered on a feature set. |
| `CustomFilterFns.md` | CustomFilterFns |
| `CustomSortFns.md` | CustomSortFns |
| `DebugOptions.md` | DebugOptions |
| `DeepKeys.md` | DeepKeys |
| `DeepValue.md` | DeepValue |
| `DisplayColumnDef.md` | DisplayColumnDef |
| `ExpandedState.md` | ExpandedState |
| `ExpandedStateList.md` | ExpandedStateList |
| `ExternalAtoms.md` | A map of optional external atoms, one per TableState slice. |
| `ExternalAtoms_All.md` | ExternalAtoms_All |
| `ExtractAggregationFnKeys.md` | String names available from a feature set's aggregation registry. |
| `ExtractColumnMeta.md` | Resolves the type of columnDef.meta for a feature set. |
| `ExtractFeatureMapTypes.md` | Extracts the API/types contributed by the features present in TFeatures. |
| `ExtractFilterFnKeys.md` | Resolves the valid string names for columnDef.filterFn and |
| `ExtractFilterMeta.md` | Resolves the type of the filter meta attached to rows for a feature set. |
| `ExtractSortFnKeys.md` | Resolves the valid string names for columnDef.sortFn for a feature set. |
| `ExtractTableMeta.md` | Resolves the type of options.meta for a feature set. |
| `FilterFnOption.md` | FilterFnOption |
| `Getter.md` | Getter |
| `GroupColumnDef.md` | GroupColumnDef |
| `GroupingColumnMode.md` | GroupingColumnMode |
| `GroupingState.md` | GroupingState |
| `Header.md` | Header |
| `IdentifiedColumnDef.md` | IdentifiedColumnDef |
| `IsAny.md` | Detects whether a type is any. |
| `NoInfer.md` | NoInfer |
| `NonFeatureKeys.md` | Keys of the features option that are not table features themselves. |
| `OnChangeFn.md` | OnChangeFn |
| `PartialKeys.md` | PartialKeys |
| `Prettify.md` | Prettify |
| `PrototypeAPIObject.md` | PrototypeAPIObject |
| `RequiredKeys.md` | RequiredKeys |
| `Row.md` | Row |
| `RowData.md` | RowData |
| `RowModelFns.md` | RowModelFns |
| `RowPinningPosition.md` | RowPinningPosition |
| `RowSelectionState.md` | RowSelectionState |
| `SortDirection.md` | SortDirection |
| `SortFnOption.md` | SortFnOption |
| `SortingState.md` | SortingState |
| `StateSliceEqualityFn.md` | StateSliceEqualityFn |
| `StringOrTemplateHeader.md` | StringOrTemplateHeader |
| `Table.md` | The table object that includes both the core table functionality and the features that are enabled via the features table option. |
| `TableOptions.md` | Complete table options for a specific feature set. |
| `TableOptions_All.md` | Internal broad option shape used where feature code may need to read options |
| `TableState.md` | Complete table state for a specific feature set. |
| `Table_RowModels.md` | Table_RowModels |
| `TransformDataValueFn.md` | Normalizes a row's value before a filter or sort comparator sees it. |
| `TransformFilterValueFn.md` | TransformFilterValueFn |
| `UnionToIntersection.md` | UnionToIntersection |
| `Updater.md` | Updater |
| `ValidateFeatureSlots.md` | Validates that every row model and fn registry slot in a features object is |
| `VisibilityDefaultOptions.md` | VisibilityDefaultOptions |

### reference/index/variables/ (68 files)

| File | Description |
|------|-------------|
| `aggregationFn_count.md` | Counts rows, independently of the column's values. |
| `aggregationFn_extent.md` | Finds the minimum and maximum numeric or Date values from the selected rows. |
| `aggregationFn_first.md` | aggregationFn_first |
| `aggregationFn_last.md` | aggregationFn_last |
| `aggregationFn_max.md` | Finds the maximum numeric or Date value from the selected rows. |
| `aggregationFn_mean.md` | Averages number and number-like row values. |
| `aggregationFn_median.md` | Computes the median of the numeric row values. |
| `aggregationFn_min.md` | Finds the minimum numeric or Date value from the selected rows. |
| `aggregationFn_sum.md` | Sums numeric selected-row values. |
| `aggregationFn_unique.md` | Collects distinct row values using JavaScript Set semantics. |
| `aggregationFn_uniqueCount.md` | Counts distinct row values using JavaScript Set semantics. |
| `aggregationFns.md` | Full built-in registry. |
| `cellSelectionFeature.md` | Feature that adds spreadsheet-style cell range selection state and APIs. |
| `cellSpanningFeature.md` | Feature that merges adjacent cells that share a value into row-spanning |
| `columnFacetingFeature.md` | Feature that derives faceted row models, unique values, and min/max values for filters. |
| `columnFilteringFeature.md` | Feature that adds per-column filtering state, options, and column/table filter APIs. |
| `columnGroupingFeature.md` | Feature that adds column grouping state and grouped row APIs. |
| `columnOrderingFeature.md` | Feature that adds column ordering state and APIs for ordering leaf columns. |
| `columnPinningFeature.md` | Feature that adds column pinning state and APIs for logical start, center, |
| `columnResizingFeature.md` | Feature that adds column resizing state, options, and resize handlers. |
| `columnSizingFeature.md` | Feature that adds column sizing state, defaults, and size measurement APIs. |
| `columnVisibilityFeature.md` | Feature that adds column visibility state and APIs for hiding and showing columns. |
| `coreCellsFeature.md` | Core feature that adds cell value, render, and context APIs. |
| `coreColumnsFeature.md` | Core feature that builds the column tree and exposes table/column APIs. |
| `coreFeatures.md` | The built-in core feature set required by every table. |
| `coreHeadersFeature.md` | Core feature that builds header groups and exposes header context APIs. |
| `coreRowModelsFeature.md` | Core feature that wires table row-model accessors and row-model caches. |
| `coreRowsFeature.md` | Core feature that creates row APIs for values, cells, and tree traversal. |
| `coreTablesFeature.md` | Core feature that adds base table instance APIs such as reset and setOptions. |
| `filterFn_arrHas.md` | Keeps rows whose scalar column value equals at least one filter value. |
| `filterFn_arrIncludes.md` | Keeps rows whose array or string column value includes at least one filter value. |
| `filterFn_arrIncludesAll.md` | Keeps rows whose array column value includes every filter value. |
| `filterFn_arrIncludesSome.md` | Keeps rows whose array column value includes at least one filter value. |
| `filterFn_between.md` | Keeps rows whose value falls between an exclusive min/max pair. |
| `filterFn_betweenInclusive.md` | Keeps rows whose value falls between an inclusive min/max pair. |
| `filterFn_empty.md` | Keeps rows whose column value is empty. |
| `filterFn_endsWith.md` | Keeps rows whose stringified column value ends with the filter text. |
| `filterFn_equals.md` | Keeps rows whose column value is strictly equal to the filter value. |
| `filterFn_equalsString.md` | Keeps rows whose stringified column value equals the filter text. |
| `filterFn_equalsStringSensitive.md` | Keeps rows whose stringified column value exactly equals the filter text. |
| `filterFn_greaterThan.md` | Keeps rows whose value is greater than the filter value. |
| `filterFn_greaterThanOrEqualTo.md` | Keeps rows whose value is greater than or equal to the filter value. |
| `filterFn_inDateRange.md` | Keeps rows whose date value is inside an inclusive [min, max] date range. |
| `filterFn_inNumberRange.md` | Keeps rows whose numeric value is inside an inclusive [min, max] range. |
| `filterFn_includesString.md` | Keeps rows whose stringified column value includes the filter text. |
| `filterFn_includesStringSensitive.md` | Keeps rows whose stringified column value includes the filter text. |
| `filterFn_lessThan.md` | Keeps rows whose value is less than the filter value. |
| `filterFn_lessThanOrEqualTo.md` | Keeps rows whose value is less than or equal to the filter value. |
| `filterFn_notEmpty.md` | Keeps rows whose column value is not empty. |
| `filterFn_startsWith.md` | Keeps rows whose stringified column value starts with the filter text. |
| `filterFn_weakEquals.md` | Keeps rows whose column value is loosely equal to the filter value. |
| `filterFns.md` | The built-in filter function registry. |
| `globalFilteringFeature.md` | Feature that adds global filtering state, defaults, and global filter APIs. |
| `reSplitAlphaNumeric.md` | Regular expression used to split mixed text and numeric chunks. |
| `rowAggregationFeature.md` | Independent aggregation feature for grouped values and root/custom-row totals. |
| `rowExpandingFeature.md` | Feature that adds row expansion state and APIs for expandable row trees. |
| `rowPaginationFeature.md` | Feature that adds pagination state and table APIs for page navigation. |
| `rowPinningFeature.md` | Feature that adds row pinning state and APIs for top, center, and bottom rows. |
| `rowSelectionFeature.md` | Feature that adds row selection state and APIs for row and page selection. |
| `rowSortingFeature.md` | Feature that adds row sorting state, defaults, and column/table sorting APIs. |
| `sortFn_alphanumeric.md` | Sorts rows with the built-in alphanumeric strategy. |
| `sortFn_alphanumericCaseSensitive.md` | Sorts rows with the built-in alphanumeric case sensitive strategy. |
| `sortFn_basic.md` | Sorts rows with the built-in basic strategy. |
| `sortFn_datetime.md` | Sorts rows with the built-in datetime strategy. |
| `sortFn_text.md` | Sorts rows with the built-in text strategy. |
| `sortFn_textCaseSensitive.md` | Sorts rows with the built-in text case sensitive strategy. |
| `sortFns.md` | The built-in sorting function registry. |
| `stockFeatures.md` | The complete set of stock optional table features. |

### reference/static-functions/ (1 files)

| File | Description |
|------|-------------|
| `index.md` | static-functions |

### reference/static-functions/functions/ (285 files)

| File | Description |
|------|-------------|
| `aggregateColumnValue.md` | Executes every configured aggregation over a depth-selected row frontier. |
| `cell_getCanSelect.md` | Checks whether this cell can currently be selected. |
| `cell_getColSpan.md` | cell_getColSpan |
| `cell_getContext.md` | Builds the render context passed to a column's cell template. |
| `cell_getIsAggregated.md` | cell_getIsAggregated |
| `cell_getIsCovered.md` | Checks whether another cell's span covers this cell. |
| `cell_getIsFocused.md` | Checks whether this cell is the active cell. |
| `cell_getIsGrouped.md` | Checks whether this cell represents the grouped column for a grouped row. |
| `cell_getIsPlaceholder.md` | Checks whether this cell is a placeholder hidden by grouping. |
| `cell_getIsSelected.md` | Checks whether this cell falls inside the final positive selection. |
| `cell_getRowSpan.md` | matching the header.rowSpan convention where 0 means "skip this cell". |
| `cell_getSelectionEdges.md` | A side is an edge when the neighbouring cell in that direction is not itself |
| `cell_getSelectionExtendHandler.md` | Creates a handler that extends the active range to this cell during a drag. |
| `cell_getSelectionStartHandler.md` | Creates a handler that begins a selection at this cell. |
| `cell_getTabIndex.md` | cell_getTabIndex |
| `cell_getValue.md` | Reads this cell's accessor value from its owning row and column. |
| `cell_renderValue.md` | Reads the value that should be rendered for this cell. |
| `column_clearSorting.md` | Removes this column from the sorting state. |
| `column_getAfter.md` | Computes the offset from the end edge of a pinning region after this column. |
| `column_getAggregationFns.md` | Resolves and validates a column's scalar or multiple aggregation option. |
| `column_getAggregationValue.md` | column_getAggregationValue |
| `column_getAutoAggregationFn.md` | Resolves the sum or extent definition inferred from the first core row. |
| `column_getAutoFilterFn.md` | Chooses a built-in filter function from the column's first core row value. |
| `column_getAutoSortDir.md` | Chooses the default first sort direction from sampled filtered row values. |
| `column_getAutoSortFn.md` | Chooses a built-in sorting function from sampled filtered row values. |
| `column_getCanFilter.md` | Checks whether column filtering is enabled for this accessor column. |
| `column_getCanGlobalFilter.md` | Checks whether this accessor column participates in global filtering. |
| `column_getCanGroup.md` | Checks whether this column can be used for grouping. |
| `column_getCanHide.md` | Checks whether this column is allowed to be hidden. |
| `column_getCanMultiSort.md` | Checks whether this column can be added to a multi-sort state. |
| `column_getCanPin.md` | Checks whether this column or any of its leaf columns can be pinned. |
| `column_getCanResize.md` | Checks whether this column can start a resize interaction. |
| `column_getCanSort.md` | Checks whether this accessor column can participate in sorting. |
| `column_getCanSpan.md` | Checks whether this column takes part in cell spanning. |
| `column_getFacetedMinMaxValues.md` | Computes min and max numeric facet values for one column. |
| `column_getFacetedRowModel.md` | Computes the row model used to derive one column's facet values. |
| `column_getFacetedUniqueValues.md` | Computes unique facet values and their occurrence counts for one column. |
| `column_getFilterFn.md` | Resolves the filter function configured for a column. |
| `column_getFilterIndex.md` | Finds this column's position in the ordered state.columnFilters array. |
| `column_getFilterValue.md` | Reads this column's current filter value from state.columnFilters. |
| `column_getFirstSortDir.md` | Resolves the first direction used when this column begins sorting. |
| `column_getFlatColumns.md` | Flattens this column and every descendant column into a single array. |
| `column_getGroupedIndex.md` | Finds this column's position in the ordered grouping state. |
| `column_getIndex.md` | Finds this column's index within a visible pinning region. |
| `column_getIsFiltered.md` | Checks whether this column currently has an entry in state.columnFilters. |
| `column_getIsFirstColumn.md` | Checks whether this column is the first visible column in a pinning region. |
| `column_getIsGrouped.md` | Checks whether this column id is present in state.grouping. |
| `column_getIsLastColumn.md` | Checks whether this column is the last visible column in a pinning region. |
| `column_getIsPinned.md` | Reads this column's current pinning region. |
| `column_getIsResizing.md` | Checks whether this column is the active column resize target. |
| `column_getIsSorted.md` | Reads this column's current sort direction. |
| `column_getIsVisible.md` | Checks whether this column is visible. |
| `column_getLeafColumns.md` | Collects the terminal leaf columns below this column. |
| `column_getNextSortingOrder.md` | Resolves the next sort order for this column's toggle cycle. |
| `column_getPinnedIndex.md` | Finds this column's index within its pinned region. |
| `column_getSize.md` | Resolves a column's current pixel size. |
| `column_getSortFn.md` | Resolves the sorting function configured for a column. |
| `column_getSortIndex.md` | Finds this column's position in the ordered state.sorting array. |
| `column_getStart.md` | Computes the offset from the start edge of a pinning region to this column. |
| `column_getToggleGroupingHandler.md` | Creates a header/control handler that toggles grouping for this column. |
| `column_getToggleSortingHandler.md` | Creates a header event handler that toggles this column's sorting. |
| `column_getToggleVisibilityHandler.md` | Creates a checkbox-style handler that writes this column's visibility. |
| `column_pin.md` | Moves this column's leaf column ids into a pinning region. |
| `column_resetSize.md` | Removes this column's committed size override. |
| `column_setFilterValue.md` | Adds, updates, or removes this column's filter value. |
| `column_toggleGrouping.md` | Adds or removes this column id from the grouping state. |
| `column_toggleSorting.md` | Applies the next sorting state for this column. |
| `column_toggleVisibility.md` | Updates this column's visibility when hiding is allowed. |
| `formatAggregatedCellValue.md` | Formats the default scalar or keyed aggregated-cell representation. |
| `getDefaultCellSelectionState.md` | Creates the default cell selection state. |
| `getDefaultColumnFiltersState.md` | Creates the default column filter state. |
| `getDefaultColumnOrderState.md` | Creates the default column order state. |
| `getDefaultColumnPinningState.md` | Creates the default column pinning state. |
| `getDefaultColumnResizingState.md` | Creates the default transient column resizing state. |
| `getDefaultColumnSizingColumnDef.md` | Creates the built-in sizing defaults for column definitions. |
| `getDefaultColumnSizingState.md` | Creates the default committed column sizing state. |
| `getDefaultColumnVisibilityState.md` | Creates the default column visibility state. |
| `getDefaultExpandedState.md` | Creates the default expanded state. |
| `getDefaultGroupingState.md` | Creates the default grouping state. |
| `getDefaultPaginationState.md` | Creates the default pagination state used by the pagination feature. |
| `getDefaultRowPinningState.md` | Creates the default row pinning state. |
| `getDefaultRowSelectionState.md` | Creates the default row selection state. |
| `getDefaultSortingState.md` | Creates the default sorting state. |
| `header_getContext.md` | Builds the render context passed to a column's header or footer template. |
| `header_getLeafHeaders.md` | Walks a header tree and collects all descendant leaf headers. |
| `header_getResizeHandler.md` | Creates the pointer/touch start handler for resizing a header. |
| `header_getSize.md` | Computes a header's rendered size from its leaf headers. |
| `header_getStart.md` | Computes a header's offset from the start of its header group. |
| `isRowSelected.md` | isRowSelected |
| `isSubRowSelected.md` | The result is used to drive indeterminate row selection UI. |
| `isTouchStartEvent.md` | Narrows an unknown event to a touchstart event. |
| `normalizeAggregationRows.md` | Selects unique rows at a maximum relative depth in encounter order. |
| `normalizeUniqueAggregationRows.md` | Frontier selection for rows that are distinct nodes of a single row tree — |
| `orderColumns.md` | Applies grouped-column placement rules to an already ordered leaf-column list. |
| `passiveEventSupported.md` | Detects whether the current environment supports passive event listeners. |
| `row_getAllCells.md` | Constructs one cell for each leaf column in this row. |
| `row_getAllCellsByColumnId.md` | Builds a lookup map of this row's cells keyed by column id. |
| `row_getCanExpand.md` | Checks whether this row can be expanded. |
| `row_getCanMultiSelect.md` | Checks whether this row can be selected alongside other rows. |
| `row_getCanPin.md` | Checks whether this row can be pinned. |
| `row_getCanSelect.md` | Checks whether this row can be selected. |
| `row_getCanSelectSubRows.md` | Checks whether selecting this row should also select its subRows. |
| `row_getCenterVisibleCells.md` | Collects visible cells whose columns are not pinned start or end. |
| `row_getDisplayIndex.md` | model. Rows outside that model return -1. |
| `row_getEndVisibleCells.md` | Collects visible cells for columns pinned to the end region. |
| `row_getGroupingValue.md` | Reads and caches this row's grouping value for a column. |
| `row_getIsAllParentsExpanded.md` | Checks whether every ancestor of this row is expanded. |
| `row_getIsAllSubRowsSelected.md` | Checks whether all selectable descendants are selected. |
| `row_getIsExpanded.md` | Checks whether this row is expanded. |
| `row_getIsGrouped.md` | Checks whether this row was created as a grouped row. |
| `row_getIsPinned.md` | Reads this row's current pinning region. |
| `row_getIsSelected.md` | Checks whether this row id is selected in state.rowSelection. |
| `row_getIsSomeSelected.md` | Checks whether some, but not all, selectable descendants are selected. |
| `row_getLeafRows.md` | Flattens this row's descendant tree into leaf rows. |
| `row_getParentRow.md` | Looks up this row's direct parent, if it has one. |
| `row_getParentRows.md` | Collects this row's ancestor chain from root to direct parent. |
| `row_getPinnedIndex.md` | Finds this row's visible index within its pinned region. |
| `row_getStartVisibleCells.md` | Collects visible cells for columns pinned to the start region. |
| `row_getToggleExpandedHandler.md` | Creates a row control handler that toggles this row's expanded state. |
| `row_getToggleSelectedHandler.md` | Creates a checkbox-style handler that selects or deselects this row. |
| `row_getUniqueValues.md` | Reads and caches the values used by faceting/grouping for a column. |
| `row_getValue.md` | Reads and caches this row's value for a column. |
| `row_getVisibleCells.md` | Collects the cells from this row whose columns are visible. |
| `row_getVisibleCellsByColumnId.md` | Builds a lookup map of this row's visible cells keyed by column id. |
| `row_pin.md` | Optional flags let callers include parent rows or leaf rows when updating |
| `row_renderValue.md` | If the accessor value is nullish, the table's renderFallbackValue is used |
| `row_toggleExpanded.md` | Expands or collapses this row. |
| `row_toggleSelected.md` | Selects or deselects this row. |
| `selectRowsFn.md` | Builds a row model containing rows selected by the current row selection state. |
| `shouldAutoRemoveFilter.md` | sentinel used by setFilterValue(undefined) and functional updaters. |
| `table_autoResetCellSelection.md` | Schedules a cell selection reset after data changes. |
| `table_autoResetExpanded.md` | Schedules an expanded-state reset after row-structure changes. |
| `table_autoResetPageIndex.md` | Resets the page index when a page-altering change should return to page 0. |
| `table_autoResetSorting.md` | Resets sorting after the table data changes when explicitly enabled. |
| `table_extendCellSelection.md` | table_extendCellSelection |
| `table_firstPage.md` | Moves the table to the first page. |
| `table_getAllColumns.md` | Normalizes options.columns into the table's nested column tree. |
| `table_getAllFlatColumns.md` | Flattens every table column, including group columns and leaf columns. |
| `table_getAllFlatColumnsById.md` | Builds an id lookup for every flat column in the table. |
| `table_getAllLeafColumns.md` | Collects all terminal leaf columns in their current table order. |
| `table_getAllLeafColumnsById.md` | Builds an id lookup for terminal leaf columns only. |
| `table_getBottomRows.md` | Resolves the visible rows pinned to the bottom region. |
| `table_getCanLastPage.md` | Checks whether a known, finite last page exists after the current page. |
| `table_getCanNextPage.md` | Checks whether the current page index can move forward. |
| `table_getCanPreviousPage.md` | Checks whether the current page index can move backward. |
| `table_getCanSomeRowsExpand.md` | Checks whether at least one pre-paginated row can expand. |
| `table_getCellSelectionBounds.md` | Resolves ordered range operations into disjoint, positive display-order |
| `table_getCellSelectionColumnIds.md` | table_getCellSelectionColumnIds |
| `table_getCellSelectionColumnIndexes.md` | Builds a column id to render-order index map. |
| `table_getCellSelectionMergeBounds.md` | Resolves the merged-cell rectangles of the rendered rows into selection's |
| `table_getCellSelectionRowIds.md` | table_getCellSelectionRowIds |
| `table_getCellSpanIndex.md` | Builds the table's cell span index for the rows that are currently rendered. |
| `table_getCenterFlatHeaders.md` | Flattens every header from the center header groups. |
| `table_getCenterFooterGroups.md` | Builds footer groups for the center, unpinned region. |
| `table_getCenterHeaderGroups.md` | Builds header groups for visible columns that are not pinned. |
| `table_getCenterLeafColumns.md` | Resolves leaf columns that are not pinned to either logical side. |
| `table_getCenterLeafHeaders.md` | Collects leaf headers for the center, unpinned region. |
| `table_getCenterRows.md` | Resolves rows that are not pinned to top or bottom. |
| `table_getCenterTotalSize.md` | Sums the sizes of the visible leaf columns that are not pinned. |
| `table_getCenterVisibleLeafColumns.md` | Resolves visible leaf columns that are not pinned. |
| `table_getColumn.md` | Looks up a column by id from the flat column map. |
| `table_getColumnIndexes.md` | Builds column-id to index records for each visible pinning region. |
| `table_getColumnOffsets.md` | Builds start and after offset maps for every visible leaf column, computed |
| `table_getCoreRowModel.md` | Resolves the table's unmodified core row model. |
| `table_getDefaultColumnDef.md` | Merges built-in, feature, and user default column definitions. |
| `table_getEndFlatHeaders.md` | Flattens every header from the end pinned header groups. |
| `table_getEndFooterGroups.md` | Builds footer groups for the end pinned region. |
| `table_getEndHeaderGroups.md` | Builds header groups for visible columns pinned to the end region. |
| `table_getEndLeafColumns.md` | Resolves leaf columns pinned to the end region. |
| `table_getEndLeafHeaders.md` | Collects leaf headers for the end pinned region. |
| `table_getEndTotalSize.md` | Sums the sizes of the visible leaf columns pinned to the logical end region. |
| `table_getEndVisibleLeafColumns.md` | Resolves visible leaf columns pinned to the end region. |
| `table_getExpandedDepth.md` | Computes the deepest expanded row id depth. |
| `table_getExpandedRowModel.md` | Resolves the row model after expanded rows have been flattened into view. |
| `table_getFilteredRowModel.md` | Resolves the row model after column and global filtering. |
| `table_getFilteredSelectedRowModel.md` | Builds a row model containing selected rows from the filtered row model. |
| `table_getFlatHeaders.md` | Flattens every header from every header group into one array. |
| `table_getFocusedCell.md` | Focus is derived rather than stored: in spreadsheet semantics, dragging from |
| `table_getFooterGroups.md` | Builds footer groups by reversing the current header groups. |
| `table_getGlobalAutoFilterFn.md` | Provides the built-in automatic global filter function. |
| `table_getGlobalFacetedMinMaxValues.md` | Computes min and max numeric facet values for the global filter context. |
| `table_getGlobalFacetedRowModel.md` | Computes the row model used to derive global facet values. |
| `table_getGlobalFacetedUniqueValues.md` | Computes unique values and occurrence counts for the global filter context. |
| `table_getGlobalFilterFn.md` | Resolves the filter function used for global filtering. |
| `table_getGroupedRowModel.md` | Resolves the row model after grouping has produced grouped rows. |
| `table_getGroupedSelectedRowModel.md` | Builds a row model containing selected rows from the grouped row model. |
| `table_getHeaderGroups.md` | Builds visible header groups for the current column tree. |
| `table_getIsAllColumnsVisible.md` | Checks whether every leaf column is currently visible. |
| `table_getIsAllPageRowsSelected.md` | Checks whether every selectable row on the current page is selected. |
| `table_getIsAllRowsExpanded.md` | Checks whether every expandable row in the current row model is expanded. |
| `table_getIsAllRowsSelected.md` | Checks whether every selectable filtered row is selected. |
| `table_getIsSomeColumnsPinned.md` | Checks whether any columns are pinned. |
| `table_getIsSomeColumnsVisible.md` | Checks whether at least one leaf column is currently visible. |
| `table_getIsSomePageRowsSelected.md` | Checks whether at least one selectable row on the current page is selected. |
| `table_getIsSomeRowsExpanded.md` | Checks whether any row is expanded. |
| `table_getIsSomeRowsPinned.md` | Checks whether any rows are pinned. |
| `table_getIsSomeRowsSelected.md` | Checks whether at least one row id is selected. |
| `table_getLeafHeaders.md` | Collects only the leaf headers from the current header tree. |
| `table_getMaxSubRowDepth.md` | Root rows are depth 0, their direct sub-rows are depth 1, and so on. |
| `table_getOrderColumnsFn.md` | Creates the ordering function used to arrange leaf columns. |
| `table_getPageCount.md` | Resolves the number of pages for the current pagination state. |
| `table_getPageOptions.md` | Builds the zero-based page indexes available for the current page count. |
| `table_getPaginatedRowModel.md` | Resolves the row model after pagination has sliced rows for the current page. |
| `table_getPinnedLeafColumns.md` | Resolves leaf columns for a requested pinning region. |
| `table_getPinnedVisibleLeafColumns.md` | Resolves visible leaf columns for a requested pinning region. |
| `table_getPreExpandedRowModel.md` | Reads the row model immediately before row expansion. |
| `table_getPreFilteredRowModel.md` | Reads the row model immediately before column/global filtering. |
| `table_getPreGroupedRowModel.md` | Reads the row model immediately before grouping. |
| `table_getPrePaginatedRowModel.md` | Reads the row model immediately before pagination. |
| `table_getPreSelectedRowModel.md` | Reads the row model before row selection is projected into selected rows. |
| `table_getPreSortedRowModel.md` | Reads the row model immediately before sorting. |
| `table_getRow.md` | Looks up a row by id from the current or full row model. |
| `table_getRowCount.md` | Resolves the total row count used for pagination math. |
| `table_getRowId.md` | Resolves the stable id for a row. |
| `table_getRowModel.md` | Resolves the final row model consumed by renderers. |
| `table_getRowsInDisplayOrder.md` | zero-based display indexes. |
| `table_getSelectedCellCount.md` | Uses rectangle arithmetic over the normalized, disjoint positive regions. |
| `table_getSelectedCellIds.md` | Cells covered by overlapping ranges are returned once, at their first |
| `table_getSelectedCellRangesData.md` | This is the raw material for clipboard export. |
| `table_getSelectedRowIds.md` | table_getSelectedRowIds |
| `table_getSelectedRowModel.md` | Builds a row model containing selected rows from the core row model. |
| `table_getSortedRowModel.md` | Resolves the row model after sorting has been applied. |
| `table_getStartFlatHeaders.md` | Flattens every header from the start pinned header groups. |
| `table_getStartFooterGroups.md` | Builds footer groups for the start pinned region. |
| `table_getStartHeaderGroups.md` | Builds header groups for visible columns pinned to the start region. |
| `table_getStartLeafColumns.md` | Resolves leaf columns pinned to the start region. |
| `table_getStartLeafHeaders.md` | Collects leaf headers for the start pinned region. |
| `table_getStartTotalSize.md` | Sums the sizes of the visible leaf columns pinned to the logical start |
| `table_getStartVisibleLeafColumns.md` | Resolves visible leaf columns pinned to the start region. |
| `table_getToggleAllColumnsVisibilityHandler.md` | Creates a checkbox-style handler that shows or hides all columns. |
| `table_getToggleAllPageRowsSelectedHandler.md` | Creates a checkbox-style handler that selects or deselects current page rows. |
| `table_getToggleAllRowsExpandedHandler.md` | Creates an event handler that toggles all rows expanded. |
| `table_getToggleAllRowsSelectedHandler.md` | Creates a checkbox-style handler that selects or deselects all rows. |
| `table_getTopRows.md` | Resolves the visible rows pinned to the top region. |
| `table_getTotalSize.md` | Sums the rendered size of the full table header row. |
| `table_getVisibleFlatColumns.md` | Filters the flat column list down to visible columns. |
| `table_getVisibleLeafColumns.md` | Filters leaf columns down to those currently visible. |
| `table_lastPage.md` | Moves the table to the last known page. |
| `table_mergeOptions.md` | Merges new table options with the current resolved options. |
| `table_moveCellSelection.md` | Moves the selection one step in a direction, collapsing it to a single cell. |
| `table_nextPage.md` | Moves the table to the next page. |
| `table_previousPage.md` | Moves the table to the previous page. |
| `table_publishExternalState.md` | Publishes captured controlled state after a host framework commits. |
| `table_reset.md` | Resets all internal table base atoms to table.initialState, then clears |
| `table_resetCellSelection.md` | Resets cellSelection to the configured initial state or feature default. |
| `table_resetColumnFilters.md` | Resets columnFilters to the configured initial state or feature default. |
| `table_resetColumnOrder.md` | Resets columnOrder to the configured initial state or feature default. |
| `table_resetColumnPinning.md` | Resets columnPinning to the configured initial state or feature default. |
| `table_resetColumnSizing.md` | Resets columnSizing to the configured initial state or feature default. |
| `table_resetColumnVisibility.md` | Resets columnVisibility to the configured initial state or feature default. |
| `table_resetExpanded.md` | Resets expanded to the configured initial state or feature default. |
| `table_resetGlobalFilter.md` | Resets globalFilter to the configured initial state or feature default. |
| `table_resetGrouping.md` | Resets grouping to the configured initial state or feature default. |
| `table_resetHeaderSizeInfo.md` | Resets columnResizing to the configured initial state or feature default. |
| `table_resetPageIndex.md` | Resets only pagination.pageIndex. |
| `table_resetPageSize.md` | Resets only pagination.pageSize. |
| `table_resetPagination.md` | Resets pagination to the configured initial state or feature default. |
| `table_resetRowPinning.md` | Resets rowPinning to the configured initial state or feature default. |
| `table_resetRowSelection.md` | Resets rowSelection to the configured initial state or feature default. |
| `table_resetSorting.md` | Resets sorting to the configured initial state or feature default. |
| `table_selectAllCells.md` | Selects every selectable cell in the table as one range. |
| `table_selectCellRange.md` | Selects a rectangle using replace, include, or exclude semantics. |
| `table_setCellSelection.md` | Routes a cell selection updater through the table's selection change handler. |
| `table_setColumnFilters.md` | Routes a column filter updater through the table's filter change handler. |
| `table_setColumnOrder.md` | Routes a column order updater through the table's column-order change handler. |
| `table_setColumnPinning.md` | Routes a column pinning updater through the table's pinning change handler. |
| `table_setColumnResizing.md` | Routes a transient column resizing updater through the table's resize handler. |
| `table_setColumnSizing.md` | Routes a committed column sizing updater through the table's sizing handler. |
| `table_setColumnVisibility.md` | Routes a column visibility updater through the table's visibility change handler. |
| `table_setExpanded.md` | Routes an expanded-state updater through the table's expanded change handler. |
| `table_setFocusedCell.md` | Collapses the selection to a single cell at the given coordinates. |
| `table_setGlobalFilter.md` | Routes a global filter updater through the table's global filter handler. |
| `table_setGrouping.md` | Routes a grouping updater through the table's grouping change handler. |
| `table_setOptions.md` | Updates the table options object. |
| `table_setPageIndex.md` | Updates pagination.pageIndex and clamps it to the known page range. |
| `table_setPageSize.md` | Updates pagination.pageSize while preserving the current top row. |
| `table_setPagination.md` | Routes a pagination updater through the table's pagination change handler. |
| `table_setRowPinning.md` | Routes a row pinning updater through the table's row-pinning change handler. |
| `table_setRowSelection.md` | Routes a row selection updater through the table's selection change handler. |
| `table_setSorting.md` | Routes a sorting updater through the table's sorting change handler. |
| `table_syncExternalStateToBaseAtoms.md` | Synchronizes externally controlled state slices into the table's base atoms. |
| `table_toggleAllColumnsVisible.md` | Shows or hides every hideable leaf column. |
| `table_toggleAllPageRowsSelected.md` | Selects or deselects every selectable row on the current page. |
| `table_toggleAllRowsExpanded.md` | Expands or collapses every row. |
| `table_toggleAllRowsSelected.md` | Selects or deselects every selectable row before grouping. |

