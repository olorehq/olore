# Prisma Documentation Structure

## Overview

Prisma documentation covers the ORM, Prisma Postgres database, Accelerate connection pooling/caching, Optimize query analysis, and the Prisma platform.

## Directory Map

```
docs/
├── 100-getting-started/    # Installation, setup, quickstart guides
├── 200-orm/                # Prisma ORM: schema, client, migrate, tools
├── 250-postgres/           # Prisma Postgres managed database
├── 300-accelerate/         # Connection pooling and caching
├── 500-platform/           # Prisma Data Platform features
├── 600-about/              # Style guide, docs components
├── 700-optimize/           # Query optimization and performance
├── 800-guides/             # How-to guides and tutorials
└── 900-ai/                 # AI-related features and integrations
```

## Detailed Structure

### 100-getting-started/
| File | Description |
|------|-------------|
| `index.mdx` | Getting started overview |
| `quickstart.mdx` | Quick installation and setup |
| `setup-prisma/` | Detailed setup guides by database type |

### 200-orm/
| File | Description |
|------|-------------|
| `100-prisma-schema/` | Schema definition, relations, data modeling |
| `200-prisma-client/` | Client API, queries, transactions |
| `300-prisma-migrate/` | Database migrations |
| `400-tools/` | CLI, VS Code extension, Prisma Studio |
| `500-reference/` | API reference documentation |

### 250-postgres/
| File | Description |
|------|-------------|
| `50-getting-started/` | Quickstart, import from existing DB |
| `100-introduction/` | Overview, management API |
| `300-database/` | Caching, pooling, backups, Studio |
| `350-integrations/` | Vercel, Netlify, VS Code, Fly.io |
| `400-query-optimization/` | Performance recommendations |

### 300-accelerate/
| File | Description |
|------|-------------|
| `200-getting-started.mdx` | Accelerate setup |
| `250-connection-pooling.mdx` | Connection pooling |
| `300-caching.mdx` | Query caching |
| `400-api-reference.mdx` | Accelerate API |

### 700-optimize/
| File | Description |
|------|-------------|
| `200-getting-started.mdx` | Optimize setup |
| `300-recordings.mdx` | Query recordings |
| `400-recommendations.mdx` | Performance recommendations |
| `450-prisma-ai.mdx` | AI-powered optimization |

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to Prisma | `100-getting-started/index.mdx` |
| Schema design | `200-orm/100-prisma-schema/` |
| Query writing | `200-orm/200-prisma-client/` |
| Migrations | `200-orm/300-prisma-migrate/` |
| Prisma Postgres | `250-postgres/50-getting-started/` |
| Connection pooling | `300-accelerate/` |
| Performance | `700-optimize/` |
