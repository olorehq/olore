---
name: olore-tanstack-table-9.0.0
description: Local TanStack Table documentation reference (v9.0.0). Headless table/datagrid UI library for TS/JS with React and Vanilla adapters. Use for sorting, filtering, pagination, grouping, row selection, expanding, and column sizing/pinning/ordering/visibility.
---

# tanstack-table Documentation

TanStack Table is a headless UI library for building powerful tables and datagrids in
TypeScript/JavaScript. It provides framework-agnostic core logic with adapters — this package
covers **React** and **Vanilla** (framework-agnostic `@tanstack/table-core`) only. This is the
`@tanstack/react-table@9.0.0` stable release, a major rewrite from v8: features are now explicit,
composable registrations (see `contents/guide/features.md`), and the docs/API surface changed
accordingly. If you know v8, do not assume its layout (`api/`, `introduction.md`, `faq.md`) still
applies.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Install | `contents/installation.md` |
| React quick start | `contents/framework/react/quick-start.md` |
| Vanilla quick start | `contents/framework/vanilla/quick-start.md` |
| Core concepts (table/column/row/cell) | `contents/guide/` |
| React feature guides (sorting, filtering, etc.) | `contents/framework/react/guide/` |
| API reference (auto-generated, per-symbol) | `contents/reference/` |
| Migrating from v8 | `contents/framework/react/guide/migrating.md` |
| Devtools | `contents/devtools.md` |

## When to use

Use this skill when the user asks about:
- Setting up or configuring TanStack Table with React or vanilla JS/TS
- Sorting, filtering (column/global/fuzzy), faceting, pagination, grouping/aggregation, expanding rows
- Column management: ordering, pinning, resizing/sizing, visibility
- Row selection, row pinning, cell selection, cell spanning
- Headless table API: table instance, columns, rows, cells, headers, row models
- The v9 `features` option and building custom features
- Migrating from TanStack Table v8 to v9
- Virtualization with TanStack Table (React)
- TanStack Devtools integration

## How to find information

1. **First**, read `TOC.md` for the complete directory map and file listing
2. For a feature (e.g. sorting, pagination), check `contents/framework/react/guide/{feature}.md`
   for usage and `contents/reference/index/variables/{feature}Feature.md` for the API surface
3. For a specific type or method, search `contents/reference/` — interfaces/type-aliases live
   under `index/`, per-entity instance methods are named `{entity}_{method}.md` under
   `static-functions/functions/`
4. Read specific files from `contents/{path}`

**TOC.md contains the full file listing organized by directory — always check it first.**
