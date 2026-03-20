# ADR-0010: Delegate Distribution to skills.sh and Drop Custom Registry

## Status

Proposed

## Context

olore has 70 documentation packages and a custom distribution pipeline:

- `olore install <name>` fetches from a registry hosted on GitHub Releases + olore.dev fallback
- Tarballs are created by a GitHub Action and uploaded to GitHub Releases
- `registry.json` is generated at Vercel build time (ADR-0005)
- A browsable registry page was being designed (ADR-0009)
- Download analytics required additional infrastructure (Vercel Analytics, Edge Config, or Upstash)

This pipeline exists because when olore started, there was no ecosystem for distributing agent skills. That changed:

- **skills.sh** (Vercel) launched Jan 2026 — 83K+ skills, 8M+ installs, 18+ agent products
- **Agent Skills spec** (Anthropic) is the universal standard adopted by 30+ products

olore's SKILL.md format is already compatible with the Agent Skills spec. Publishing to skills.sh gives olore packages instant access to an existing user base, install tracking, search, and multi-agent support — all things we were about to build from scratch.

### The maintainer's perspective

> "I'm just a solo developer who likes to use docs for accurate development. Hosting docs is not my desire. Spreading the tool for docs package building is good enough."

The real value of olore is the **build pipeline** — turning any GitHub repo's documentation into an agent-ready skill package. Not the registry, not the CLI distribution, not the analytics.

## Decision

**Delegate all distribution to skills.sh. Focus olore on being the best documentation-to-skill build tool.**

### What we keep

| Component | Why |
|-----------|-----|
| `/build-docs` skill + package-builder agent | Core product — nobody else does this |
| `vault/configs/*.json` | Declarative package definitions |
| `vault/packages/*/` | Built packages (SKILL.md + TOC.md + contents/) |
| `olore.dev` landing page | Marketing — explains what olore is, links to skills.sh for browsing |

### What we drop

| Component | Replacement |
|-----------|-------------|
| `registry.json` generation (ADR-0005) | skills.sh indexes automatically |
| Tarball pipeline (GitHub Action) | skills.sh handles distribution |
| `olore install <name>` from registry | `npx skills install <name>` |
| `olore search` from registry | `npx skills search <name>` |
| Registry browse pages (ADR-0009) | skills.sh |
| Download analytics | skills.sh tracks installs |
| INDEX.md generation | Unnecessary (see below) |

### What we simplify in the CLI

```
olore build <name>[@version]    # Build a doc package from vault/configs/
olore link <path>               # Symlink for local dev (unchanged)
olore list                      # List locally installed packages (unchanged)
olore remove <name>             # Remove local package (unchanged)
olore doctor                    # Health check (unchanged)
olore inject                    # Write skill reference table to AGENTS.md (unchanged)
```

Drop: `install` from registry, `search` from registry, tarball-related code, registry client code.

### INDEX.md removal

INDEX.md was the Compact Retrieval Index (CRI) from ADR-0006. It maps keywords to file paths as a compressed search index injected into passive context:

```
@apis:create,useBoundStore,StateCreator=reference/apis/create.md;createStore,vanilla=reference/apis/create-store.md
```

This is unnecessary because:

1. **Our own research proved it** — `passive-context.md` documents that CRI was over-engineered. A simple skill reference table in AGENTS.md achieves 100% pass rate. The agent doesn't need a keyword index; it needs to know the skill exists.
2. **SKILL.md already has a Topic Guide** — maps topics to file paths in a human-readable table.
3. **TOC.md already provides full navigation** — directory listing of all files.
4. **Three layers of indirection is two too many** — INDEX.md, TOC.md, and SKILL.md all point to the same files. Pick one navigation layer (SKILL.md) and one listing (TOC.md). Done.

Remove INDEX.md generation from the build pipeline. Update package-builder to skip this artifact.

### Distribution flow

```
Developer runs /build-docs prisma
    ↓
Package built in vault/packages/prisma/latest/
    ├── SKILL.md       ← Agent Skills spec compatible
    ├── TOC.md         ← Full file listing
    └── contents/      ← Documentation files
    ↓
PR merged to main on GitHub
    ↓
skills.sh auto-indexes the SKILL.md     ← FREE
    ↓
Users discover via skills.sh
    ↓
npx skills install olore-prisma-latest
```

## Consequences

### Positive

- **Zero infrastructure** — No registry, no tarballs, no GitHub Actions, no analytics pipeline
- **Instant distribution** — skills.sh auto-indexes from GitHub
- **Existing user base** — 8M+ installs on skills.sh vs. starting from zero
- **Multi-agent support** — 18+ agents on skills.sh vs. our 3
- **Install tracking for free** — skills.sh shows install counts
- **Focus** — All effort goes into what makes olore unique: the build pipeline
- **Simpler codebase** — Drop ~300 lines of registry client code from CLI
- **Simpler build** — Drop INDEX.md generation, one fewer artifact per package

### Negative

- **No control over distribution UX** — skills.sh decides how packages are presented
- **Dependency on skills.sh** — if it goes down, users can't discover packages (but local installs still work)
- **No custom analytics** — only what skills.sh provides
- **Brand dilution** — olore packages appear as skills on skills.sh, not on olore.dev

### Acceptable trade-offs

For a solo developer, the negatives are all acceptable. Brand dilution is offset by reaching a much larger audience. Dependency on skills.sh is no worse than dependency on npm or GitHub. Custom analytics were never the goal.

## Supersedes

- **ADR-0005** (Registry Generation at Build Time) — No longer needed; skills.sh handles discovery
- **ADR-0009** (Vercel-Native Registry with Analytics) — Scrapped before implementation

## Migration

1. Update package-builder to stop generating INDEX.md
2. Remove INDEX.md from all 70 existing packages
3. Verify SKILL.md format is skills.sh compatible
4. Remove registry client code from CLI (`core/registry.ts`, `core/download.ts`, `core/constants.ts` registry URLs)
5. Simplify CLI commands (drop remote `install` and `search`)
6. Update `olore.dev` to link to skills.sh for package browsing
7. Archive ADR-0005 and ADR-0009 as superseded

## References

- [Agent Skills Specification](https://agentskills.io)
- [skills.sh](https://skills.sh)
- [passive-context.md](../passive-context.md) — Documents why CRI/INDEX.md is over-engineered
- [ADR-0005](0005-registry-generation-at-build-time.md) — Superseded
- [ADR-0009](0009-vercel-native-registry-with-analytics.md) — Superseded before implementation
