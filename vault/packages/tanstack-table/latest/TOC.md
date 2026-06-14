# tanstack-table Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Top-level docs (intro, overview, installation, FAQ) | 5 |
| `contents/guide/` | Conceptual guides for all table features | 27 |
| `contents/api/core/` | Core API reference (table, column, row, cell, header) | 7 |
| `contents/api/features/` | Feature API reference (sorting, filtering, pagination, etc.) | 13 |
| `contents/framework/` | Framework-specific adapter docs and state guides | 22 |

## contents/ (top-level)

| File | Description |
|------|-------------|
| `introduction.md` | What TanStack Table is and what "headless UI" means |
| `overview.md` | Core objects, TypeScript support, and headless architecture overview |
| `installation.md` | Install instructions for all framework adapters |
| `faq.md` | Frequently asked questions |
| `vanilla.md` | Using `@tanstack/table-core` directly with vanilla TS/JS |

## guide/

| File | Description |
|------|-------------|
| `tables.md` | Creating and configuring the table instance |
| `data.md` | Providing data to the table |
| `column-defs.md` | Defining columns with `ColumnDef` |
| `columns.md` | Column object and column APIs |
| `rows.md` | Row object and row APIs |
| `cells.md` | Cell object and cell APIs |
| `headers.md` | Header object and header APIs |
| `header-groups.md` | Header groups and multi-level headers |
| `row-models.md` | How row models work and pipeline ordering |
| `features.md` | Overview of all built-in features |
| `sorting.md` | Sorting guide (single, multi-column, custom) |
| `column-filtering.md` | Per-column filter setup and custom filter functions |
| `global-filtering.md` | Global search/filter across all columns |
| `filters.md` | Shared filter concepts (debouncing, server-side) |
| `fuzzy-filtering.md` | Fuzzy/rank-based filtering with match-sorter |
| `column-faceting.md` | Getting unique values and min/max per column |
| `global-faceting.md` | Global faceting across all columns |
| `pagination.md` | Pagination setup (client-side and server-side) |
| `grouping.md` | Row grouping and aggregation |
| `expanding.md` | Expandable rows and subrows |
| `row-selection.md` | Row selection (single, multi, controlled) |
| `column-visibility.md` | Toggling column visibility |
| `column-ordering.md` | Reordering columns |
| `column-pinning.md` | Pinning columns left/right |
| `pinning.md` | Combined pinning guide (column + row) |
| `row-pinning.md` | Pinning rows to top or bottom |
| `column-sizing.md` | Resizable columns |
| `custom-features.md` | Building custom table features/plugins |
| `virtualization.md` | Virtualizing rows and columns for performance |
| `migrating.md` | Migration guide from React Table v7 to TanStack Table v8 |

## api/core/

| File | Description |
|------|-------------|
| `table.md` | Table instance API reference |
| `column-def.md` | ColumnDef options reference |
| `column.md` | Column instance API reference |
| `row.md` | Row instance API reference |
| `cell.md` | Cell instance API reference |
| `header.md` | Header instance API reference |
| `header-group.md` | HeaderGroup instance API reference |

## api/features/

| File | Description |
|------|-------------|
| `sorting.md` | Sorting API options and methods |
| `filters.md` | Shared filter API options |
| `column-filtering.md` | Column filter API options and methods |
| `global-filtering.md` | Global filter API options and methods |
| `column-faceting.md` | Column faceting API methods |
| `global-faceting.md` | Global faceting API methods |
| `pagination.md` | Pagination API options and methods |
| `grouping.md` | Grouping API options and methods |
| `expanding.md` | Expanding API options and methods |
| `row-selection.md` | Row selection API options and methods |
| `column-visibility.md` | Column visibility API options and methods |
| `column-ordering.md` | Column ordering API options and methods |
| `column-pinning.md` | Column pinning API options and methods |
| `column-sizing.md` | Column sizing API options and methods |
| `pinning.md` | Combined pinning API reference |
| `row-pinning.md` | Row pinning API options and methods |

## framework/

| File | Description |
|------|-------------|
| `react/react-table.md` | `useReactTable` adapter usage |
| `react/guide/table-state.md` | Managing table state in React |
| `vue/vue-table.md` | `useVueTable` adapter usage |
| `vue/guide/table-state.md` | Managing table state in Vue |
| `angular/angular-table.md` | `createAngularTable` adapter usage |
| `angular/guide/table-state.md` | Managing table state in Angular |
| `svelte/svelte-table.md` | `createSvelteTable` adapter usage |
| `svelte/guide/table-state.md` | Managing table state in Svelte |
| `solid/solid-table.md` | `createSolidTable` adapter usage |
| `solid/guide/table-state.md` | Managing table state in Solid |
| `qwik/qwik-table.md` | `useQwikTable` adapter usage |
| `qwik/guide/table-state.md` | Managing table state in Qwik |
| `lit/lit-table.md` | `createLitTable` adapter usage |
| `lit/guide/table-state.md` | Managing table state in Lit |
| `vanilla/table-core.md` | `createTable` usage in vanilla TS/JS |
| `vanilla/guide/table-state.md` | Managing table state in vanilla TS/JS |
