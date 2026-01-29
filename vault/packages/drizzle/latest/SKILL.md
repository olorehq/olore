---
name: olore-drizzle-latest
description: Local Drizzle ORM documentation reference (latest). Use when asked about Drizzle ORM queries, schema definitions, migrations, column types, PostgreSQL/MySQL/SQLite dialects, Drizzle Kit, or database operations.
---

# Drizzle ORM Documentation

Drizzle ORM is a headless TypeScript ORM with both SQL-like and relational query APIs. It supports PostgreSQL, MySQL, SQLite, SingleStore, MSSQL, and CockroachDB with zero dependencies, designed to be lightweight, performant, and serverless-ready.

## Quick Reference

| Topic | Entry Point |
|-------|-------------|
| Getting started | `contents/overview.mdx`, `contents/get-started/` |
| PostgreSQL setup | `contents/get-started/postgresql-new.mdx` |
| MySQL setup | `contents/get-started/mysql-new.mdx` |
| SQLite setup | `contents/get-started/sqlite-new.mdx` |
| SQL-like queries | `contents/select.mdx`, `contents/insert.mdx` |
| Relational queries | `contents/rqb.mdx` |
| Schema definitions | `contents/schemas.mdx`, `contents/tables.mdx` |
| Migrations | `contents/migrations.mdx` |
| Column types | `contents/column-types/pg.mdx` (or mysql, sqlite) |
| Database connections | `contents/connect-overview.mdx` |

## When to use

Use this skill when the user asks about:
- Drizzle ORM query syntax (select, insert, update, delete)
- Relational queries and nested data fetching
- Schema definitions and table declarations
- Column types for different database dialects
- Migrations with Drizzle Kit (generate, push, pull, migrate)
- Database connections (Neon, Supabase, Turso, PlanetScale, etc.)
- Type-safe database operations
- PostgreSQL, MySQL, SQLite, SingleStore, MSSQL, or CockroachDB support
- Drizzle configuration and setup
- Relations, constraints, indexes, and views

## How to find information

1. **First**, read `TOC.md` to see all available documentation files organized by topic
2. Identify the relevant section based on the user's question:
   - **Queries**: Root level query files (select, insert, update, delete, rqb)
   - **Setup**: `get-started/` directory for database-specific guides
   - **Schema**: Root level schema files (schemas, tables, relations, constraints)
   - **Migrations**: Root level migration files and Drizzle Kit commands
   - **Types**: `column-types/` directory for dialect-specific types
   - **Connections**: Root level `connect-*.mdx` files
3. Read specific files for detailed information

**TOC.md contains a complete file listing with descriptions - always check it first before searching.**

## Notes

- Drizzle supports multiple dialects - check column type files for dialect-specific types
- Connection guides are prefixed with `connect-` at the root level
- Getting started guides in `get-started/` are organized by database type
- Drizzle Kit commands are documented in `drizzle-kit-*.mdx` files
