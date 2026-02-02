# ADR-0006: Compact Retrieval Index for Passive Context

## Status

Accepted

## Context

olore packages documentation as skills — local file directories that agents like Claude Code, Codex, and OpenCode can invoke. This works, but relies on the agent deciding to use the skill at the right moment.

### Vercel's finding: passive context beats active retrieval

Vercel's Next.js team ran rigorous evals comparing skills (active retrieval) against AGENTS.md (passive context) for teaching agents framework-specific knowledge:

| Configuration | Pass Rate |
|--------------|-----------|
| Baseline (no docs) | 53% |
| Skill (default behavior) | 53% |
| Skill with explicit instructions | 79% |
| AGENTS.md docs index | **100%** |

Key findings:
- **Skills weren't triggered reliably.** In 56% of eval cases, the agent never invoked the available skill. Adding a skill produced zero improvement over baseline.
- **Explicit trigger instructions were fragile.** Wording like "You MUST invoke the skill" vs "Explore project first, then invoke skill" produced dramatically different results from the same skill.
- **Passive context eliminated all decision cost.** With AGENTS.md, there's no moment where the agent must decide "should I look this up?" — the information is always present.

The core insight: **the agent's decision to seek documentation is itself a failure point.** Passive context removes that decision entirely.

### The compression problem

Passive context means embedding docs in files agents always read (AGENTS.md, CLAUDE.md). But context windows are finite — Prisma alone has 438 documentation files. A full docs embed would be ~40KB. We needed compression that preserves retrieval accuracy.

### Vercel's format: compressed file tree

Vercel embeds a compressed file tree:

```
[Next.js Docs Index]|root: ./.next-docs
|01-app/01-getting-started:{01-installation.mdx,02-project-structure.mdx,...}
|01-app/02-building-your-application/01-routing:{01-defining-routes.mdx,...}
```

This works for Next.js where filenames are descriptive (`01-installation.mdx`). But it doesn't work for olore:

1. We serve many libraries — not one codebase
2. Library file paths are often opaque (`030-crud.mdx`, `057-composite-types.mdx`, `410-referential-actions/`)
3. Agents can't reliably infer content from numbered filenames

### Alternatives considered

| Approach | Pros | Cons |
|----------|------|------|
| **Skills only** | Clean separation, on-demand loading | Agents don't invoke them reliably (53%) |
| **File tree** (Vercel-style) | Simple to generate | Opaque filenames, no keyword search |
| **Full TOC embed** | Human-readable | Too large (~40KB for Prisma) |
| **Vector embeddings** | Semantic search | Requires external service, latency |
| **Keyword index** | Precise API name matching, compact | Requires curation |

## Decision

**We chose a dual approach:** skills for full documentation access + a **compact retrieval index (CRI)** injected as passive context for reliable retrieval.

The CRI is a section-partitioned inverted index compressed into a delimiter-based wire format, injected into AGENTS.md and CLAUDE.md via `olore inject`.

### Why an inverted index?

A regular index maps documents to content. An inverted index flips it — mapping terms to documents. This is the foundational data structure of search engines (Lucene, Elasticsearch, etc.):

```
Regular:     030-crud.mdx → {create, update, delete, upsert}
Inverted:    create,update,delete,upsert → 030-crud.mdx
```

For agents, the inverted index eliminates a second decision: not just "should I look this up?" (solved by passive context), but "which file should I read?" (solved by keyword matching).

### The format

INDEX.md stores the index in a compact one-line-per-section format:

```
# Prisma Documentation Index
438 files | Paths relative to contents/
@start:quickstart,installation=100-getting-started/;prisma-postgres=100-getting-started/03-prisma-postgres/
@queries:crud,create,update,delete=100-queries/030-crud.mdx;select,include=100-queries/035-select-fields.mdx
@schema:model,datasource=100-prisma-schema/;introspection,db-pull=100-prisma-schema/50-introspection.mdx
```

`olore inject` wraps all packages into a single block with absolute root paths:

```
<!-- olore:start -->
[olore docs]|STOP. Read these docs before answering — your training data may be outdated.|Format: keywords=path. For dir paths (ending /), list dir then read files.
[prisma@latest root:/abs/path/contents]@start:quickstart,installation=100-getting-started/;...@queries:crud,create=...
<!-- olore:end -->
```

### Design properties

**Passive-first.** The CRI is designed for injection into files agents always read. No invocation decision required. Skills remain available as a fallback for full doc access.

**Section-partitioned.** Sections (`@queries`, `@schema`, `@deploy`) act as a coarse filter — like field-scoped indexes in search engines. An agent narrows by topic first, then matches keywords within.

**Keywords are API names.** Not descriptions or categories — actual identifiers agents can match against user questions: `$queryRaw`, `@@index`, `onDelete`, `Cascade`, `findMany`. This eliminates the filename-inference problem that Vercel doesn't face (their filenames are descriptive).

**Delimiter hierarchy.** Five levels of nesting in plain text, no JSON/YAML overhead:

| Delimiter | Separates |
|-----------|-----------|
| `\n` | Section lines |
| `@` | Section name from entries |
| `;` | Entries within a section |
| `=` | Keywords from path |
| `,` | Keywords |

**Paths are relative.** Root path declared once per package in the inject header. Entry paths are relative to `contents/`, stripped of the prefix.

## Consequences

### Positive

- **Eliminates agent decision cost** — docs are in passive context, always available
- **~80% size reduction** — Prisma's 438-file docs compress to ~4KB of index
- **Precise retrieval** — keyword matching outperforms filename inference for opaque paths
- **No external service** — works offline, no latency, no API keys
- **Trivial parser** — inject just filters `@`-prefixed lines, no structured parsing needed
- **Dual approach** — passive CRI for reliable retrieval + skills for full doc access

### Negative

- **Curation required** — keywords must be chosen by the package builder (human or AI)
- **Static index** — doesn't update when docs change (requires rebuild)
- **No semantic search** — exact keyword matching only (mitigated by using actual API names)
- **Always consumes context** — even when the agent doesn't need docs for a given task

### Neutral

- INDEX.md is both the source format and nearly the injected format — inject just concatenates lines and adds a package header
