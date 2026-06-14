# tanstack-table Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` (root) | Introduction, installation, overview, FAQ | 4 |
| `contents/guide/` | Concept guides for all table features | 29 |
| `contents/api/core/` | Core API reference (table, column, row, cell, header) | 7 |
| `contents/api/features/` | Feature API reference (sorting, filtering, pagination, etc.) | 16 |
| `contents/framework/` | Framework-specific adapter docs and state guides | 15 |

## Root

| File | Description |
|------|-------------|
| `introduction.md` | What TanStack Table is and the headless UI concept |
| `overview.md` | Framework-agnostic core, TypeScript support, core objects |
| `installation.md` | Install adapters for React, Vue, Solid, Svelte, Qwik, Angular, Lit |
| `faq.md` | Common pitfalls: infinite render loops, stable references |

## guide/

| File | Description |
|------|-------------|
| `tables.md` | Creating and configuring the table instance |
| `data.md` | Providing and managing table data |
| `columns.md` | Column types and column definition basics |
| `column-defs.md` | Detailed column definition options and accessors |
| `rows.md` | Row model and working with rows |
| `cells.md` | Cell rendering and cell values |
| `headers.md` | Header rendering and header objects |
| `header-groups.md` | Multi-level header groups |
| `row-models.md` | Understanding row model pipeline and data flow |
| `column-ordering.md` | Column ordering feature guide |
| `column-pinning.md` | Column pinning feature guide |
| `column-sizing.md` | Column resizing feature guide |
| `column-visibility.md` | Show/hide columns feature guide |
| `column-filtering.md` | Per-column filter feature guide |
| `column-faceting.md` | Column faceting (unique values) guide |
| `global-filtering.md` | Global search/filter feature guide |
| `global-faceting.md` | Global faceting guide |
| `filters.md` | Filter functions and built-in filters |
| `fuzzy-filtering.md` | Fuzzy/rank-based filtering guide |
| `sorting.md` | Sorting feature guide |
| `grouping.md` | Row grouping feature guide |
| `expanding.md` | Row expanding/sub-rows feature guide |
| `pagination.md` | Pagination feature guide |
| `pinning.md` | Combined pinning guide |
| `row-pinning.md` | Row pinning feature guide |
| `row-selection.md` | Row selection feature guide |
| `virtualization.md` | Virtualization integration guide |
| `custom-features.md` | Building custom table features |
| `migrating.md` | Migration guide from React Table v7 to TanStack Table v8 |

## api/core/

| File | Description |
|------|-------------|
| `table.md` | Core table instance API: options, state, methods |
| `column.md` | Column instance API: accessors, visibility, sizing |
| `column-def.md` | Column definition API: all ColumnDef options |
| `row.md` | Row instance API: cells, subRows, selection |
| `cell.md` | Cell instance API: getValue, renderValue |
| `header.md` | Header instance API: column access, rendering |
| `header-group.md` | Header group instance API |

## api/features/

| File | Description |
|------|-------------|
| `sorting.md` | Sorting API: sort functions, state, methods |
| `column-filtering.md` | Column filter API: filter functions, state, methods |
| `global-filtering.md` | Global filter API: state and methods |
| `filters.md` | Built-in filter functions reference |
| `column-faceting.md` | Column faceting API |
| `global-faceting.md` | Global faceting API |
| `grouping.md` | Grouping API: group functions, state, methods |
| `expanding.md` | Expanding API: state and methods |
| `pagination.md` | Pagination API: state and methods |
| `column-ordering.md` | Column ordering API |
| `column-pinning.md` | Column pinning API |
| `column-sizing.md` | Column sizing API |
| `column-visibility.md` | Column visibility API |
| `pinning.md` | Combined pinning API |
| `row-pinning.md` | Row pinning API |
| `row-selection.md` | Row selection API |

## framework/

| File | Description |
|------|-------------|
| `react/react-table.md` | React adapter: `useReactTable`, `flexRender` |
| `react/guide/table-state.md` | Table state management in React |
| `vue/vue-table.md` | Vue adapter: `useVueTable`, `FlexRender` |
| `vue/guide/table-state.md` | Table state management in Vue |
| `solid/solid-table.md` | Solid adapter: `createSolidTable`, `flexRender` |
| `solid/guide/table-state.md` | Table state management in Solid |
| `svelte/svelte-table.md` | Svelte adapter: `createSvelteTable`, `flexRender` |
| `svelte/guide/table-state.md` | Table state management in Svelte |
| `angular/angular-table.md` | Angular adapter: `createAngularTable` |
| `angular/guide/table-state.md` | Table state management in Angular |
| `qwik/qwik-table.md` | Qwik adapter: `useQwikTable`, `flexRender` |
| `qwik/guide/table-state.md` | Table state management in Qwik |
| `lit/lit-table.md` | Lit adapter: `TableController` |
| `lit/guide/table-state.md` | Table state management in Lit |
| `vanilla/table-core.md` | Vanilla JS/TS: `createTable` from `@tanstack/table-core` |
