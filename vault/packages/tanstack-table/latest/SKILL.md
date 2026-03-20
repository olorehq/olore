---
name: olore-tanstack-table-latest
description: Local tanstack-table documentation reference (latest). TanStack Table documentation. Use for headless table/datagrid UI, sorting, filtering, pagination, grouping, and column management.
---

# tanstack-table Documentation

TanStack Table documentation. Use for headless table/datagrid UI, sorting, filtering, pagination, grouping, and column management. Framework-agnostic core with adapters for React, Vue, Svelte, Angular, Solid, Qwik, Lit, and vanilla JS/TS.

## Documentation Structure

```
contents/
├── introduction.md, overview.md, installation.md, faq.md, vanilla.md
├── guide/              # Feature how-to guides (29 files)
├── api/
│   ├── core/           # Core API reference: table, column, row, cell, header (7 files)
│   └── features/       # Feature API reference: sorting, filtering, pagination, etc. (13 files)
└── framework/          # Framework adapters and state management guides (16 files)
    ├── react/
    ├── vue/
    ├── svelte/
    ├── angular/
    ├── solid/
    ├── qwik/
    ├── lit/
    └── vanilla/
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Setup & installation | `contents/installation.md`, `contents/introduction.md`, `contents/overview.md` |
| Creating a table | `contents/api/core/table.md`, `contents/guide/tables.md` |
| Column definitions | `contents/api/core/column-def.md`, `contents/guide/column-defs.md` |
| Sorting | `contents/guide/sorting.md`, `contents/api/features/sorting.md` |
| Filtering | `contents/guide/column-filtering.md`, `contents/guide/global-filtering.md`, `contents/api/features/column-filtering.md`, `contents/api/features/global-filtering.md` |
| Pagination | `contents/guide/pagination.md`, `contents/api/features/pagination.md` |
| Grouping & aggregation | `contents/guide/grouping.md`, `contents/api/features/grouping.md` |
| Row expanding | `contents/guide/expanding.md`, `contents/api/features/expanding.md` |
| Row selection | `contents/guide/row-selection.md`, `contents/api/features/row-selection.md` |
| Column pinning | `contents/guide/column-pinning.md`, `contents/api/features/column-pinning.md` |
| Row pinning | `contents/guide/row-pinning.md`, `contents/api/features/row-pinning.md` |
| Column ordering | `contents/guide/column-ordering.md`, `contents/api/features/column-ordering.md` |
| Column visibility | `contents/guide/column-visibility.md`, `contents/api/features/column-visibility.md` |
| Column sizing/resizing | `contents/guide/column-sizing.md`, `contents/api/features/column-sizing.md` |
| Faceting (unique values / range) | `contents/guide/column-faceting.md`, `contents/guide/global-faceting.md` |
| Virtualization | `contents/guide/virtualization.md` |
| Custom features | `contents/guide/custom-features.md` |
| React adapter | `contents/framework/react/react-table.md`, `contents/framework/react/guide/table-state.md` |
| Vue adapter | `contents/framework/vue/vue-table.md` |
| Svelte adapter | `contents/framework/svelte/svelte-table.md` |
| Angular adapter | `contents/framework/angular/angular-table.md` |
| Solid adapter | `contents/framework/solid/solid-table.md` |
| Row/column/cell objects | `contents/api/core/row.md`, `contents/api/core/column.md`, `contents/api/core/cell.md` |
| Header and header groups | `contents/api/core/header.md`, `contents/api/core/header-group.md` |

## When to use

Use this skill when the user asks about:
- Building tables or datagrids with TanStack Table (React Table v8+)
- Headless table UI — sorting, filtering, pagination, grouping
- Column definitions, accessors, cell renderers
- Table state management (controlled vs. uncontrolled)
- Framework-specific adapters (useReactTable, useVueTable, createSvelteTable, etc.)
- Row models, data pipeline, server-side operations
- Column/row pinning, reordering, resizing, visibility
- Expanding rows, row selection, virtualization

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
