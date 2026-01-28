# Next.js Documentation Structure

## Overview

Next.js documentation covers the App Router (modern), Pages Router (legacy), architecture, and community resources.

## Directory Map

```
docs/
├── 01-app/             # App Router documentation
│   ├── 01-getting-started/
│   ├── 02-guides/
│   ├── 03-building-your-application/
│   └── 04-api-reference/
├── 02-pages/           # Pages Router documentation
│   ├── 01-getting-started/
│   ├── 02-guides/
│   ├── 03-building-your-application/
│   └── 04-api-reference/
├── 03-architecture/    # Next.js internals
└── 04-community/       # Contributing, Rspack
```

## Detailed Structure

### 01-app/ (App Router)
| Directory | Description |
|-----------|-------------|
| `01-getting-started/` | Installation, project structure, layouts, pages |
| `02-guides/` | Authentication, forms, testing, deployment |
| `03-building-your-application/` | Routing, rendering, data fetching, styling |
| `04-api-reference/` | Components, functions, config, CLI |

### 02-pages/ (Pages Router)
| Directory | Description |
|-----------|-------------|
| `01-getting-started/` | Installation, project structure |
| `02-guides/` | Migration, testing, deployment |
| `03-building-your-application/` | Routing, rendering, data fetching |
| `04-api-reference/` | Components, functions, config |

### Key Topics in App Router
| Topic | Location |
|-------|----------|
| Routing | `01-app/03-building-your-application/01-routing/` |
| Server Components | `01-app/03-building-your-application/02-rendering/` |
| Data Fetching | `01-app/03-building-your-application/03-data-fetching/` |
| Caching | `01-app/03-building-your-application/04-caching/` |
| Styling | `01-app/03-building-your-application/05-styling/` |
| Optimizations | `01-app/03-building-your-application/06-optimizing/` |
| Configuration | `01-app/03-building-your-application/07-configuring/` |

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to Next.js | `01-app/01-getting-started/` |
| App Router routing | `01-app/03-building-your-application/01-routing/` |
| Server Components | `01-app/03-building-your-application/02-rendering/` |
| Data fetching | `01-app/03-building-your-application/03-data-fetching/` |
| API reference | `01-app/04-api-reference/` |
| Pages Router | `02-pages/` |
| Migration to App Router | `02-pages/02-guides/migrating/` |
