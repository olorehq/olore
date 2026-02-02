# Passive Context: How olore Gets Documentation to AI Agents

## The Problem

AI coding agents have outdated training data. When a developer uses Prisma 7 or Next.js 16, the agent generates code using older APIs it was trained on. The fix seems obvious: give the agent access to current documentation.

The standard approach is **skills** — packaged documentation the agent can invoke on demand. But Vercel's Next.js team found that skills don't work reliably. In their evals, agents failed to invoke available skills in 56% of cases. Adding a skill produced zero improvement over having no documentation at all.

| Configuration | Pass Rate |
|--------------|-----------|
| Baseline (no docs) | 53% |
| Skill (default behavior) | 53% |
| Skill with explicit instructions | 79% |
| AGENTS.md docs index | **100%** |

Source: [Vercel blog, Jan 2026](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals)

The core issue: **the agent's decision to seek documentation is itself a failure point.** The agent must recognize it needs help, decide to invoke the skill, and do so at the right moment. Any failure in that chain means the docs go unused.

## The Solution: Passive Context

Instead of hoping agents invoke skills, embed a documentation index directly in files agents always read — CLAUDE.md, AGENTS.md, or similar. The agent sees the index on every turn without making any decision.

olore implements this via `olore inject`, which writes a **Compact Retrieval Index (CRI)** into your project's agent files.

## What is a Compact Retrieval Index?

A CRI is a search engine index, stripped down to what an LLM needs.

Search engines like Google and Elasticsearch are built on **inverted indexes** — data structures that map terms to documents. When you search "create user", the engine looks up "create" and "user" in the index and returns matching documents instantly, without scanning every page.

A CRI does the same thing for documentation files. It maps keywords (actual API names like `$queryRaw`, `findMany`, `@@index`) to file paths. When an agent sees a user ask about `$queryRaw`, it matches the keyword in the CRI and reads the right file.

The difference from a traditional search engine: the LLM **is** the search engine. It already has tokenization, ranking, and boolean logic built in. It just lacks the index — the mapping from terms to documents. A CRI provides exactly that missing piece.

```
Traditional search engine:  query → algorithm traverses index → returns results
CRI:                        query → LLM reads index in context → reads matched file
```

### Why not embed full docs?

Context windows are finite. Prisma has 438 documentation files. Embedding them all would consume ~200KB — most of a typical context budget. A CRI compresses 438 files into ~10KB of index while preserving retrieval accuracy. The agent reads the full file only when it finds a keyword match.

### Why not a file tree? (Vercel's approach)

Vercel embeds a compressed file tree — directory paths with filenames listed. This works for Next.js where filenames are descriptive (`01-installation.mdx`). It doesn't work for libraries with opaque filenames (`030-crud.mdx`, `057-composite-types.mdx`). A CRI maps keywords to paths, so agents find files by API name regardless of how the files are named.

## The Format

### INDEX.md (per-package source)

Each package has an INDEX.md with a compact one-line-per-section format:

```
# Prisma Documentation Index
438 files | Paths relative to contents/
@queries:crud,create,update,delete,upsert=100-queries/030-crud.mdx;select,include=100-queries/035-select-fields.mdx
@schema:model,datasource,generator=100-prisma-schema/;introspection,db-pull=100-prisma-schema/50-introspection.mdx
```

### Injected output (in CLAUDE.md / AGENTS.md)

`olore inject` combines all installed packages into a single block:

```
<!-- olore:start -->
[olore docs]|STOP. Read these docs before answering — your training data may be outdated.|Format: keywords=path. For dir paths (ending /), list dir then read files.
[prisma@latest root:/path/to/contents]@queries:crud,create=030-crud.mdx;select,include=035-select-fields.mdx@schema:model,datasource=100-prisma-schema/
<!-- olore:end -->
```

### Delimiter hierarchy

Five levels of nesting in plain text, no JSON overhead:

| Delimiter | Separates | Example |
|-----------|-----------|---------|
| `\n` | Package lines | One line per package |
| `@` | Sections | `@queries:...@schema:...` |
| `;` | Entries within a section | `crud=file1;select=file2` |
| `=` | Keywords from file path | `crud,create=030-crud.mdx` |
| `,` | Keywords | `crud,create,update` |

### Reading the format

- **Keywords** are actual API names, not descriptions. `$queryRaw`, `@@index`, `onDelete` — terms a developer would use in a question.
- **Paths** are relative to the root declared in the package header (`root:/path/to/contents`).
- **Paths ending in `/`** are directories. List the directory, then read relevant files.
- **Paths ending in `.mdx` or `.md`** are files. Read directly.

## Token Compression Layers

olore applies five layers of compression, ordered by impact:

### Layer 1: Scope reduction

Only inject packages the project actually uses. `olore init` auto-detects dependencies from package.json, pyproject.toml, Cargo.toml, etc. A project with 5 dependencies doesn't carry indexes for 50 libraries.

This is the most powerful layer because it's multiplicative with everything below it.

### Layer 2: Pointer depth

Encode pointers to files, not file contents. The index maps keywords to paths. The agent reads the actual file only when needed. Same principle as a search engine returning links, not full pages.

There's a spectrum of pointer depth:

| Depth | Tokens/file | When to use |
|-------|-------------|-------------|
| Full content | ~500-2000 | Never in passive context |
| Summary | ~20-40 | Very small packages |
| Keywords | ~8-15 | Default (olore's approach) |
| Filename only | ~3-5 | Packages with descriptive filenames |

### Layer 3: Structural compression

Eliminate repeated path prefixes. Files in the same section often share directory roots. Declaring a common prefix once per section saves ~25-30%.

### Layer 4: Format efficiency

Custom delimiters (`@`, `;`, `=`, `,`) are more compact than JSON or YAML. The format instruction in the header amortizes across all entries. For small indexes, familiarity (JSON) may be worth the overhead. For large indexes, compactness wins.

### Layer 5: Entry pruning

Not every file is equally retrievable. Changelog files, migration guides from other ORMs, and tutorials are low-value for most coding tasks. Pruning low-frequency entries reduces index size without affecting common queries.

## Two Channels, One Install

olore gives agents documentation through two complementary channels:

| Channel | How it works | Strength |
|---------|-------------|----------|
| **Skills** (active) | Agent invokes a skill to browse full docs | Complete documentation access |
| **CRI** (passive) | Index embedded in CLAUDE.md, always visible | Reliable retrieval, no decision cost |

`olore install` sets up both. The skill provides full documentation when the agent chooses to use it. The CRI ensures the agent can always find the right file, even when it doesn't think to invoke the skill.

## Where to Inject: Context Loading Behavior

The CRI must be placed in a file the agent actually reads. Understanding how agents load context files determines where injection is effective.

### How Claude Code loads context (as of Jan 2026)

Claude Code has multiple context file locations with different loading behaviors:

| Location | When loaded | Unloaded? |
|----------|------------|-----------|
| Root `CLAUDE.md` | At launch, every conversation | Never |
| `.claude/rules/*.md` (no `paths:`) | At launch | Never |
| `.claude/rules/*.md` (with `paths:`) | When Claude works with matching files | Never |
| Subdirectory `CLAUDE.md` (e.g. `web/CLAUDE.md`) | When Claude reads files in that subtree | Never |
| `CLAUDE.local.md` | At launch | Never |

The critical behavior: **once loaded, context stays for the entire conversation.** There is no unloading mechanism. The `paths:` scoping on rules controls when context enters, not how long it stays. It's a gate, not a lease.

### Implications for CRI placement

**Root CLAUDE.md** (recommended for most projects):
- CRI loads on every conversation — the agent always has the index
- Best for projects where the installed packages are always relevant
- Tradeoff: consumes context even for conversations that don't need docs

**Subdirectory CLAUDE.md** (for monorepos):
- CRI loads lazily when Claude accesses that subtree
- Good for monorepos where different directories use different libraries
- Risk: Claude may act before discovering the index if it edits a known path directly

**Rules files with `paths:`** (not recommended for CRI):
- Would load the index when working with matching files
- But rules are for prescriptive instructions, not passive data
- CRI is reference data, not a guideline — CLAUDE.md is the right home

### Recommendation

For most projects, inject into root `CLAUDE.md`. The CRI is small enough (~5-10KB per package) that always-on loading is acceptable, and it ensures the agent has the index from the first turn.

For monorepos with distinct subprojects using different libraries, inject per-package CRIs into subdirectory CLAUDE.md files. Accept that the index loads lazily and may not be available on the very first action in that subtree.

## Usage

```bash
olore install prisma          # Install docs (skill + INDEX.md)
olore inject                  # Write CRI into CLAUDE.md and AGENTS.md
olore inject --remove         # Strip CRI cleanly
```

Running `olore inject` again replaces existing content (idempotent). Content is wrapped in `<!-- olore:start -->` / `<!-- olore:end -->` markers for clean replacement.

## Related

- [ADR-0006: Compact Retrieval Index](adr/0006-compact-retrieval-index.md) — decision rationale and Vercel's eval data
- [Architecture](architecture.md) — system design including the inject flow
- [ADR-0007: Reclaim init for auto-detect flow](adr/0007-reclaim-init-for-auto-detect-flow.md) — `olore init` for scope reduction
