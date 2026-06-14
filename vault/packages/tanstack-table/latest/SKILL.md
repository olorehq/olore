---
name: olore-tanstack-table-latest
description: Local TanStack Table documentation reference (latest). Use for headless table/datagrid UI, sorting, filtering, pagination, grouping, and column management.
---

# TanStack Table Documentation

TanStack Table is a headless UI library for building powerful tables and datagrids for TS/JS, React, Vue, Solid, Qwik, Svelte, Angular, and Lit. It handles all state, data processing, and logic while leaving rendering entirely to you.

## Documentation Structure

```
contents/
├── introduction.md / overview.md / installation.md / faq.md / vanilla.md
├── guide/          # Conceptual guides for every feature (30 files)
├── api/core/       # Core instance API reference (table, column, row, cell, header) (7 files)
├── api/features/   # Feature API options and methods (16 files)
└── framework/      # Framework adapter docs + state management guides (16 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / setup | `contents/introduction.md`, `contents/installation.md`, `contents/overview.md` |
| Creating a table instance | `contents/guide/tables.md`, `contents/guide/data.md`, `contents/guide/column-defs.md` |
| Table / column / row / cell APIs | `contents/api/core/table.md`, `contents/api/core/column.md`, `contents/api/core/row.md`, `contents/api/core/cell.md` |
| Sorting | `contents/guide/sorting.md`, `contents/api/features/sorting.md` |
| Filtering (column) | `contents/guide/column-filtering.md`, `contents/api/features/column-filtering.md` |
| Filtering (global search) | `contents/guide/global-filtering.md`, `contents/guide/fuzzy-filtering.md` |
| Faceting (unique values / min-max) | `contents/guide/column-faceting.md`, `contents/guide/global-faceting.md` |
| Pagination | `contents/guide/pagination.md`, `contents/api/features/pagination.md` |
| Grouping & aggregation | `contents/guide/grouping.md`, `contents/api/features/grouping.md` |
| Expanding / subrows | `contents/guide/expanding.md`, `contents/api/features/expanding.md` |
| Row selection | `contents/guide/row-selection.md`, `contents/api/features/row-selection.md` |
| Column visibility | `contents/guide/column-visibility.md`, `contents/api/features/column-visibility.md` |
| Column ordering (drag-reorder) | `contents/guide/column-ordering.md`, `contents/api/features/column-ordering.md` |
| Column / row pinning | `contents/guide/pinning.md`, `contents/guide/column-pinning.md`, `contents/guide/row-pinning.md` |
| Column resizing | `contents/guide/column-sizing.md`, `contents/api/features/column-sizing.md` |
| Virtualization | `contents/guide/virtualization.md` |
| Custom features / plugins | `contents/guide/custom-features.md` |
| Row models / pipeline | `contents/guide/row-models.md` |
| React adapter | `contents/framework/react/react-table.md`, `contents/framework/react/guide/table-state.md` |
| Vue adapter | `contents/framework/vue/vue-table.md`, `contents/framework/vue/guide/table-state.md` |
| Angular adapter | `contents/framework/angular/angular-table.md`, `contents/framework/angular/guide/table-state.md` |
| Svelte adapter | `contents/framework/svelte/svelte-table.md`, `contents/framework/svelte/guide/table-state.md` |
| Solid adapter | `contents/framework/solid/solid-table.md`, `contents/framework/solid/guide/table-state.md` |
| Qwik / Lit adapters | `contents/framework/qwik/qwik-table.md`, `contents/framework/lit/lit-table.md` |
| Vanilla TS/JS | `contents/vanilla.md`, `contents/framework/vanilla/table-core.md` |
| Migrating from v7 | `contents/guide/migrating.md` |

## When to use

Use this skill when the user asks about:
- Building tables or datagrids with TanStack Table (any framework)
- Sorting, filtering, pagination, grouping, or expanding rows
- Column visibility, ordering, pinning, or resizing
- Row selection or row pinning
- Faceting / getting unique filter values
- Virtualized tables for large datasets
- State management for table instances
- Custom table features or plugin authoring
- Migrating from React Table v7 to TanStack Table v8

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
