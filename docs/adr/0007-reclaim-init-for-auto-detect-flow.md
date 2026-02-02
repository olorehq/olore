# ADR-0007: Reclaim `olore init` for Auto-Detect Consumer Flow

## Status

Accepted

## Context

olore currently has an `olore init` command that scaffolds a new documentation **package** for authors — creating `olore.config.json` and a `docs/` directory. This serves the maintainer/build side of the ecosystem.

Vercel's Next.js team published eval results ([blog post, Jan 2026](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals)) showing that a single auto-detect CLI command (`npx @next/codemod@canary agents-md`) that detects the framework version, downloads matching docs, and injects a compressed index into AGENTS.md achieved 100% pass rate on their eval suite. Their flow:

1. Detect Next.js version from project
2. Download matching documentation
3. Inject compressed index into AGENTS.md

olore already has the building blocks — `olore install` downloads packages, `olore inject` writes the CRI into CLAUDE.md/AGENTS.md (ADR-0006). But there's no single command that does detect → install → inject for a consumer project.

The natural command name for this is `olore init` — every major tool (npm, git, cargo, pnpm, poetry) uses `init` for "set up this tool in my project." But olore's `init` is currently occupied by the package-authoring scaffold.

### Who uses what

| Command | User | Frequency |
|---------|------|-----------|
| Current `olore init` | Package authors (maintainers) | Rare |
| Proposed `olore init` | Developers using docs in their projects | Common |

Per ADR-0003, the build/consume separation is a core principle. The highest-traffic command name should serve the highest-traffic user group.

## Decision

**Rename the current `olore init` to `olore create`, and reclaim `olore init` for the consumer auto-detect flow.**

### `olore create` (formerly `init`)

Scaffolds a new documentation package for authors. Same behavior as today:

```bash
olore create              # Interactive: prompts for name, version, description
olore create -y           # Non-interactive: uses defaults
```

Creates `olore.config.json` and `docs/` directory. No behavioral change — only the command name moves.

### `olore init` (new)

Auto-detects project dependencies, matches against the olore registry, and sets up documentation:

```bash
olore init                # Interactive: detect → select → install → inject
olore init -y             # Non-interactive: install all matched packages
```

Flow:

```
olore init
     │
     ▼
┌─────────────────────────────────┐
│ 1. Scan project files           │
│    package.json, requirements.txt│
│    Cargo.toml, go.mod, etc.     │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│ 2. Match deps against registry  │
│    (name + version resolution)  │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│ 3. Present TUI selection        │
│    ◉ prisma (v5.22 → latest)   │
│    ◉ zod (v3.24 → latest)      │
│    ◯ drizzle (v0.38 → latest)  │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│ 4. Install selected packages    │
│    (reuses existing install)    │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│ 5. Run olore inject             │
│    (writes CRI to CLAUDE.md)    │
└─────────────────────────────────┘
```

### Dependency detection

Scan common manifest files and extract dependency names:

| File | Ecosystem | Extract |
|------|-----------|---------|
| `package.json` | Node.js | `dependencies` + `devDependencies` keys |
| `requirements.txt` / `pyproject.toml` | Python | package names |
| `Cargo.toml` | Rust | `[dependencies]` keys |
| `go.mod` | Go | `require` entries |
| `Gemfile` | Ruby | `gem` names |
| `composer.json` | PHP | `require` keys |

Match extracted names against the registry's package index. Only show packages that have olore documentation available.

## Consequences

### Positive

- **`init` serves the common case** — developers setting up docs in their project get the most intuitive command name
- **Single-command onboarding** — detect → select → install → inject in one step, matching Vercel's UX
- **No behavioral break** — the scaffold functionality is preserved under `olore create`
- **Consistent with ADR-0003** — consumer workflow gets the prime command real estate
- **Pre-1.0 timing** — no backwards compatibility concerns

### Negative

- **Rename churn** — any existing docs or scripts referencing `olore init` for authoring need updating
- **TUI dependency** — interactive selection may require adding a prompts library (e.g. `@clack/prompts`)

### Neutral

- `olore create` is arguably a better name for scaffolding regardless of this decision — it describes creating something new, while `init` describes setting up an existing project
