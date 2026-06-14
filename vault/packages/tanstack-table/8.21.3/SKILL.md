---
name: olore-tanstack-table-8.21.3
description: Local TanStack Table documentation reference (8.21.3). Headless table/datagrid UI library for TS/JS with React, Vue, Solid, Svelte, Qwik, Angular, and Lit adapters. Use for sorting, filtering, pagination, grouping, column management, and row selection.
version: 8.21.3
---

# TanStack Table Documentation

TanStack Table is a headless UI library for building powerful tables and datagrids in TypeScript/JavaScript. It provides framework-agnostic core logic with adapters for React, Vue, Solid, Svelte, Qwik, Angular, and Lit. The library handles sorting, filtering, pagination, grouping, column pinning/sizing/visibility, row selection, expanding, and virtualization without rendering any markup itself.

## Documentation Structure

```
contents/
├── guide/            # Concept guides for all table features (29 files)
├── api/core/         # Core API reference: table, column, row, cell, header (7 files)
├── api/features/     # Feature API reference: sorting, filtering, pagination, etc. (16 files)
├── framework/        # Framework adapter docs and state management guides (15 files)
└── (root)            # Introduction, installation, overview, FAQ (4 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / installation | `contents/introduction.md`, `contents/installation.md`, `contents/overview.md` |
| Table setup and configuration | `contents/guide/tables.md`, `contents/guide/data.md`, `contents/guide/columns.md`, `contents/guide/column-defs.md` |
| Core API reference | `contents/api/core/table.md`, `contents/api/core/column-def.md`, `contents/api/core/column.md` |
| Row and cell access | `contents/guide/rows.md`, `contents/guide/cells.md`, `contents/api/core/row.md`, `contents/api/core/cell.md` |
| Headers and header groups | `contents/guide/headers.md`, `contents/guide/header-groups.md`, `contents/api/core/header.md`, `contents/api/core/header-group.md` |
| Row model / data pipeline | `contents/guide/row-models.md` |
| Sorting | `contents/guide/sorting.md`, `contents/api/features/sorting.md` |
| Column filtering | `contents/guide/column-filtering.md`, `contents/api/features/column-filtering.md`, `contents/api/features/filters.md` |
| Global filtering / search | `contents/guide/global-filtering.md`, `contents/api/features/global-filtering.md` |
| Fuzzy filtering | `contents/guide/fuzzy-filtering.md` |
| Faceting (unique values) | `contents/guide/column-faceting.md`, `contents/guide/global-faceting.md`, `contents/api/features/column-faceting.md` |
| Pagination | `contents/guide/pagination.md`, `contents/api/features/pagination.md` |
| Grouping | `contents/guide/grouping.md`, `contents/api/features/grouping.md` |
| Expanding / sub-rows | `contents/guide/expanding.md`, `contents/api/features/expanding.md` |
| Column ordering | `contents/guide/column-ordering.md`, `contents/api/features/column-ordering.md` |
| Column pinning | `contents/guide/column-pinning.md`, `contents/api/features/column-pinning.md` |
| Column sizing / resizing | `contents/guide/column-sizing.md`, `contents/api/features/column-sizing.md` |
| Column visibility | `contents/guide/column-visibility.md`, `contents/api/features/column-visibility.md` |
| Row pinning | `contents/guide/row-pinning.md`, `contents/api/features/row-pinning.md` |
| Row selection | `contents/guide/row-selection.md`, `contents/api/features/row-selection.md` |
| Virtualization | `contents/guide/virtualization.md` |
| Custom features | `contents/guide/custom-features.md` |
| State management | `contents/framework/react/guide/table-state.md`, `contents/framework/vue/guide/table-state.md` |
| React adapter | `contents/framework/react/react-table.md`, `contents/framework/react/guide/table-state.md` |
| Vue adapter | `contents/framework/vue/vue-table.md`, `contents/framework/vue/guide/table-state.md` |
| Solid adapter | `contents/framework/solid/solid-table.md`, `contents/framework/solid/guide/table-state.md` |
| Svelte adapter | `contents/framework/svelte/svelte-table.md`, `contents/framework/svelte/guide/table-state.md` |
| Angular adapter | `contents/framework/angular/angular-table.md`, `contents/framework/angular/guide/table-state.md` |
| Qwik adapter | `contents/framework/qwik/qwik-table.md`, `contents/framework/qwik/guide/table-state.md` |
| Lit adapter | `contents/framework/lit/lit-table.md`, `contents/framework/lit/guide/table-state.md` |
| Vanilla JS/TS (no framework) | `contents/framework/vanilla/table-core.md` |
| Migration from v7 | `contents/guide/migrating.md` |
| FAQ / troubleshooting | `contents/faq.md` |

## When to use

Use this skill when the user asks about:
- Setting up or configuring TanStack Table (any framework)
- Sorting, filtering, pagination, grouping, expanding rows
- Column management: ordering, pinning, sizing, visibility
- Row selection, row pinning
- Headless table API: table instance, columns, rows, cells, headers
- State management with TanStack Table
- Framework adapters: React, Vue, Solid, Svelte, Angular, Qwik, Lit, Vanilla JS
- Fuzzy filtering or custom filter functions
- Virtualization with TanStack Table
- Building custom table features
- Migrating from React Table v7

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
