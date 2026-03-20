# tanstack-table Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Overview, introduction, FAQ, installation | 5 |
| `contents/guide/` | Feature how-to guides | 29 |
| `contents/api/core/` | Core API reference (table, column, row, cell, header) | 7 |
| `contents/api/features/` | Feature API reference | 13 |
| `contents/framework/` | Framework-specific adapters and state guides | 16 |
| `contents/framework/react/` | React adapter | 2 |
| `contents/framework/vue/` | Vue adapter | 2 |
| `contents/framework/svelte/` | Svelte adapter | 2 |
| `contents/framework/angular/` | Angular adapter | 2 |
| `contents/framework/solid/` | Solid adapter | 2 |
| `contents/framework/qwik/` | Qwik adapter | 2 |
| `contents/framework/lit/` | Lit adapter | 2 |
| `contents/framework/vanilla/` | Vanilla JS/TS adapter | 2 |

## Root

| File | Description |
|------|-------------|
| `introduction.md` | What TanStack Table is and its core concepts |
| `overview.md` | High-level architecture overview |
| `installation.md` | How to install for each framework |
| `vanilla.md` | Using @tanstack/table-core directly without a framework |
| `faq.md` | Frequently asked questions |

## guide/

| File | Description |
|------|-------------|
| `column-defs.md` | Defining columns: accessor, display, and group column types |
| `columns.md` | Column objects and their properties |
| `data.md` | Providing and managing table data |
| `tables.md` | Creating and configuring the table instance |
| `rows.md` | Row objects and their API |
| `cells.md` | Cell objects and their API |
| `headers.md` | Header objects and their API |
| `header-groups.md` | Header group structure and API |
| `row-models.md` | Row models pipeline and data flow |
| `features.md` | Index of all available features |
| `sorting.md` | Sorting guide: options, state, custom sort functions |
| `filters.md` | Column and global filtering overview |
| `column-filtering.md` | Column-level filtering setup and API |
| `global-filtering.md` | Table-wide global filter setup and API |
| `fuzzy-filtering.md` | Fuzzy/approximate text filtering with match-sorter |
| `column-faceting.md` | Column faceting for unique value lists and min/max ranges |
| `global-faceting.md` | Table-wide faceting across all columns |
| `pagination.md` | Pagination guide: pageIndex, pageSize, manual pagination |
| `grouping.md` | Row grouping and aggregation |
| `expanding.md` | Expanding/collapsing rows and sub-rows |
| `row-selection.md` | Row selection state and options |
| `row-pinning.md` | Pinning rows to top/bottom |
| `column-ordering.md` | Reordering columns |
| `column-pinning.md` | Pinning columns to left/right |
| `column-sizing.md` | Column width and resizing |
| `column-visibility.md` | Showing and hiding columns |
| `virtualization.md` | Virtual rendering for large datasets |
| `custom-features.md` | Extending TanStack Table with custom feature plugins |
| `migrating.md` | Migration guide from React Table v7 to TanStack Table v8 |

## api/core/

| File | Description |
|------|-------------|
| `table.md` | Table API: useReactTable, options, state, getters |
| `column.md` | Column API properties: id, accessorFn, columnDef, getters |
| `column-def.md` | ColumnDef options: accessorKey, accessorFn, header, cell, footer |
| `row.md` | Row API: id, depth, index, original, subRows, getValue |
| `cell.md` | Cell API: id, column, row, getValue, renderValue |
| `header.md` | Header API: id, column, colSpan, rowSpan, getContext |
| `header-group.md` | HeaderGroup API: id, depth, headers |

## api/features/

| File | Description |
|------|-------------|
| `sorting.md` | Sorting API: SortingState, getSortedRowModel, toggleSorting |
| `column-filtering.md` | Column filtering API: ColumnFiltersState, setColumnFilters |
| `global-filtering.md` | Global filtering API: globalFilter, setGlobalFilter |
| `column-faceting.md` | Column faceting API: getFacetedRowModel, getFacetedUniqueValues |
| `global-faceting.md` | Global faceting API: getFacetedRowModel across all columns |
| `pagination.md` | Pagination API: PaginationState, nextPage, previousPage, setPageSize |
| `grouping.md` | Grouping API: GroupingState, getGroupedRowModel, aggregation functions |
| `expanding.md` | Expanding API: ExpandedState, toggleExpanded, getIsExpanded |
| `row-selection.md` | Row selection API: RowSelectionState, toggleRowSelected, getSelectedRowModel |
| `row-pinning.md` | Row pinning API: rowPinning state, pinRow, getTopRows, getBottomRows |
| `column-ordering.md` | Column ordering API: columnOrder state, setColumnOrder |
| `column-pinning.md` | Column pinning API: columnPinning state, pinColumn, getLeftLeafColumns |
| `column-sizing.md` | Column sizing API: columnSizing state, getSize, resetColumnSize |
| `column-visibility.md` | Column visibility API: columnVisibility state, toggleVisibility |

## framework/

| File | Description |
|------|-------------|
| `react/react-table.md` | useReactTable hook usage and options |
| `react/guide/table-state.md` | Managing table state in React |
| `vue/vue-table.md` | useVueTable composable usage and options |
| `vue/guide/table-state.md` | Managing table state in Vue |
| `svelte/svelte-table.md` | createSvelteTable usage and options |
| `svelte/guide/table-state.md` | Managing table state in Svelte |
| `angular/angular-table.md` | injectTable / createAngularTable usage |
| `angular/guide/table-state.md` | Managing table state in Angular |
| `solid/solid-table.md` | createSolidTable usage and options |
| `solid/guide/table-state.md` | Managing table state in Solid |
| `qwik/qwik-table.md` | useQwikTable usage and options |
| `qwik/guide/table-state.md` | Managing table state in Qwik |
| `lit/lit-table.md` | createLitTable usage and options |
| `lit/guide/table-state.md` | Managing table state in Lit |
| `vanilla/table-core.md` | createTable usage with vanilla JS/TS |
| `vanilla/guide/table-state.md` | Managing table state in vanilla JS |
