# Next.js Documentation Structure

## Overview

Next.js documentation covers the App Router (modern), Pages Router (legacy), architecture, and community resources.

## Directory Map

```
docs/
├── 01-app/             # App Router documentation
│   ├── 01-getting-started/
│   ├── 02-guides/
│   └── 03-api-reference/
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
| `01-getting-started/` | Installation, project structure, layouts, pages, caching, data fetching |
| `02-guides/` | Authentication, forms, testing, deployment, migration |
| `03-api-reference/` | Directives, components, file conventions, functions, config, CLI |

### 02-pages/ (Pages Router)
| Directory | Description |
|-----------|-------------|
| `01-getting-started/` | Installation, project structure, images, fonts, CSS |
| `02-guides/` | Migration, testing, deployment |
| `03-building-your-application/` | Routing, rendering, data fetching |
| `04-api-reference/` | Components, functions, config |

### Key Topics in App Router
| Topic | Location |
|-------|----------|
| Getting Started | `01-app/01-getting-started/` |
| Guides & Best Practices | `01-app/02-guides/` |
| Directives (use client/server/cache) | `01-app/03-api-reference/01-directives/` |
| Components (Image, Link, Font) | `01-app/03-api-reference/02-components/` |
| File Conventions | `01-app/03-api-reference/03-file-conventions/` |
| Functions | `01-app/03-api-reference/04-functions/` |
| Configuration | `01-app/03-api-reference/05-config/` |

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to Next.js | `01-app/01-getting-started/` |
| App Router basics | `01-app/01-getting-started/03-layouts-and-pages.mdx` |
| Server/Client Components | `01-app/01-getting-started/05-server-and-client-components.mdx` |
| Data fetching | `01-app/01-getting-started/07-fetching-data.mdx` |
| API reference | `01-app/03-api-reference/` |
| Pages Router | `02-pages/` |
| Migration to App Router | `02-pages/02-guides/migrating/` |
