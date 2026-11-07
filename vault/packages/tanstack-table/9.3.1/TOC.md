# tanstack-table Table of Contents

## Directory Map

```
contents/
├── overview.md, installation.md, devtools.md, agent-skills.md
├── guide/                      # Core concepts (14 files)
├── framework/
│   ├── react/                  # React adapter
│   │   ├── quick-start.md
│   │   ├── guide/              # Feature guides (27 files)
│   │   └── reference/          # React API reference (64 files)
│   └── vanilla/                # Vanilla JS adapter (4 files)
└── reference/                  # Core API reference
    ├── index/                  # functions, interfaces, type-aliases, variables
    └── static-functions/       # static function reference (286 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/overview.md`, `contents/installation.md` |
| React quick start | `contents/framework/react/quick-start.md` |
| Feature guides (sorting, filtering, pagination...) | `contents/framework/react/guide/` |
| Core concepts | `contents/guide/tables.md` |
| API lookup | `contents/reference/index/` |
| Migrating | `contents/framework/react/guide/migrating.md` |

## Detailed Structure

### (root) (4 files)

| File | Description |
|------|-------------|
| `overview.md` | Overview |
| `installation.md` | Installation |
| `devtools.md` | Devtools |
| `agent-skills.md` | Agent Skills (TanStack Intent) |

### guide/

| File | Description |
|------|-------------|
| `guide/cells.md` | Cells Guide |
| `guide/client-side-vs-server-side.md` | Client-Side vs Server-Side Guide |
| `guide/column-defs.md` | Column Definitions Guide |
| `guide/columns.md` | Columns Guide |
| `guide/data.md` | Data Guide |
| `guide/features.md` | Features Guide |
| `guide/header-groups.md` | Header Groups Guide |
| `guide/headers.md` | Headers Guide |
| `guide/helpers.md` | Helpers Guide |
| `guide/row-models.md` | Row Models Guide |
| `guide/rows.md` | Rows Guide |
| `guide/table-and-column-meta.md` | Table and Column Meta Guide |
| `guide/tables.md` | Table Instance Guide |
| `guide/worker-row-models.md` | Worker Row Models Guide (Experimental) |

### framework/react/guide/

| File | Description |
|------|-------------|
| `framework/react/guide/aggregation.md` | Aggregation (React) Guide |
| `framework/react/guide/cell-selection.md` | Cell Selection (React) Guide |
| `framework/react/guide/cell-spanning.md` | Cell Spanning (React) Guide |
| `framework/react/guide/column-faceting.md` | Faceting (React) Guide |
| `framework/react/guide/column-filtering.md` | Column Filtering (React) Guide |
| `framework/react/guide/column-ordering.md` | Column Ordering (React) Guide |
| `framework/react/guide/column-pinning.md` | Column Pinning (React) Guide |
| `framework/react/guide/column-resizing.md` | Column Resizing (React) Guide |
| `framework/react/guide/column-sizing.md` | Column Sizing (React) Guide |
| `framework/react/guide/column-visibility.md` | Column Visibility (React) Guide |
| `framework/react/guide/composable-tables.md` | Composable Tables (createTableHook) Guide |
| `framework/react/guide/custom-features.md` | Custom Features (React) Guide |
| `framework/react/guide/expanding.md` | Expanding (React) Guide |
| `framework/react/guide/flex-render.md` | FlexRender (React) Guide |
| `framework/react/guide/fuzzy-filtering.md` | Fuzzy Filtering (React) Guide |
| `framework/react/guide/global-filtering.md` | Global Filtering (React) Guide |
| `framework/react/guide/grouping.md` | Grouping (React) Guide |
| `framework/react/guide/migrating.md` | Migrating to TanStack Table V9 (React) |
| `framework/react/guide/pagination.md` | Pagination (React) Guide |
| `framework/react/guide/react-compiler.md` | React Compiler Guide |
| `framework/react/guide/row-pinning.md` | Row Pinning (React) Guide |
| `framework/react/guide/row-selection.md` | Row Selection (React) Guide |
| `framework/react/guide/sorting.md` | Sorting (React) Guide |
| `framework/react/guide/table-context.md` | Table Context Guide |
| `framework/react/guide/table-state.md` | Table State (React) Guide |
| `framework/react/guide/use-legacy-table.md` | Using useLegacyTable for Incremental Migration |
| `framework/react/guide/virtualization.md` | Virtualization (React) Guide |

### framework/vanilla/

| File | Description |
|------|-------------|
| `framework/vanilla/guide/aggregation.md` | Aggregation (Vanilla) Guide |
| `framework/vanilla/guide/flex-render.md` | FlexRender (Vanilla) Guide |
| `framework/vanilla/guide/table-state.md` | Table State (Vanilla JS) Guide |
| `framework/vanilla/quick-start.md` | Quick Start |

### framework/react/

| File | Description |
|------|-------------|
| `framework/react/quick-start.md` | Quick Start |

### framework/react/reference/ directories

- `framework/react/reference/` (1 files)
- `framework/react/reference/index/` (1 files)
- `framework/react/reference/index/functions/` (6 files)
- `framework/react/reference/index/interfaces/` (11 files)
- `framework/react/reference/index/type-aliases/` (18 files)
- `framework/react/reference/legacy/` (1 files)
- `framework/react/reference/legacy/functions/` (11 files)
- `framework/react/reference/legacy/interfaces/` (2 files)
- `framework/react/reference/legacy/type-aliases/` (13 files)

### reference/ directories

- `reference/` (1 files)
- `reference/index/` (1 files)
- `reference/index/functions/` (41 files)
- `reference/index/interfaces/` (199 files)
- `reference/index/type-aliases/` (97 files)
- `reference/index/variables/` (68 files)
- `reference/static-functions/` (1 files)
- `reference/static-functions/functions/` (285 files)

Reference files are named after the symbol they document (e.g. `reference/index/functions/<name>.md`, `reference/index/interfaces/<Name>.md`).
