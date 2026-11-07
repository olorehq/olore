---
name: olore-tanstack-table-8
description: Local TanStack Table documentation reference (v8, React/vanilla). Headless table/datagrid UI library for TS/JS. Use for sorting, filtering, pagination, grouping, column management, and row selection.
version: "8"
---

# TanStack Table Documentation (v8)

TanStack Table is a headless UI library for building powerful tables and datagrids in TypeScript/JavaScript. This package covers **v8**, the long-standing stable release line that most existing codebases currently depend on, built from the `v8` maintenance branch (rolling latest v8, slightly ahead of the `8.21.3` tag). It provides framework-agnostic core logic (`@tanstack/table-core`) with a React adapter (`@tanstack/react-table`). Other framework adapters (Vue, Solid, Svelte, Angular, Qwik, Lit) are excluded from this package.

**v8 vs v9**: v8 has a different docs layout than v9 (per-feature guides live in the top-level `guide/` directory and API reference lives under `api/core/` + `api/features/`; v9 moved feature guides under `framework/react/guide/` and generates a `reference/` tree instead). If a project uses `@tanstack/react-table@9.x` or later, use the `olore-tanstack-table-latest` or `olore-tanstack-table-9.0.0` skill instead — do not mix v8 and v9 API guidance.

## Documentation Structure

```
contents/
├── guide/            # Concept guides for all table features (30 files)
├── api/core/         # Core API reference: table, column, row, cell, header (7 files)
├── api/features/     # Feature API reference: sorting, filtering, pagination, etc. (16 files)
├── framework/         # React + vanilla adapter docs and state management guides (4 files)
└── (root)             # Introduction, installation, overview, FAQ, vanilla entrypoint (5 files)
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
| Feature index | `contents/guide/features.md` |
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
| React adapter | `contents/framework/react/react-table.md`, `contents/framework/react/guide/table-state.md` |
| Vanilla JS/TS (no framework) | `contents/vanilla.md`, `contents/framework/vanilla/table-core.md`, `contents/framework/vanilla/guide/table-state.md` |
| Migration from v7 | `contents/guide/migrating.md` |
| FAQ / troubleshooting | `contents/faq.md` |

## When to use

Use this skill when the user asks about:
- Setting up or configuring TanStack Table **v8** (React or vanilla JS/TS)
- Sorting, filtering, pagination, grouping, expanding rows in v8
- Column management: ordering, pinning, sizing, visibility
- Row selection, row pinning
- Headless table API: table instance, columns, rows, cells, headers (v8 API shapes, e.g. `api/core/` and `api/features/`)
- State management with TanStack Table in React
- Fuzzy filtering or custom filter functions
- Virtualization with TanStack Table
- Building custom table features
- Migrating from React Table v7 to TanStack Table v8

Do NOT use this skill for TanStack Table v9 (`@tanstack/react-table@9.x` or later) — use `olore-tanstack-table-latest` or `olore-tanstack-table-9.0.0` instead, since v9 has a different docs layout and API.

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
