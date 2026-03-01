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

## The Solution: Skill Reference Table

The key insight from Vercel's research is that agents need to **know docs exist** — the information must be in their passive context (files they always read like CLAUDE.md and AGENTS.md). But the implementation doesn't need a compressed inverted index or keyword mapping. Simply telling agents which documentation skills are available is enough.

`olore inject` writes a **skill reference table** into your project's agent files:

```markdown
<!-- olore:start -->
## Documentation Reference

Use these skill commands to access up-to-date documentation. Your training data may be outdated.

| Library | Skill Command |
|---------|---------------|
| Next.js 16.1.5 | `olore-nextjs-16.1.5` |
| Prisma | `olore-prisma-latest` |
| Zod | `olore-zod-latest` |
<!-- olore:end -->
```

When an agent sees this table, it knows documentation is available and invokes the skill command when needed. This achieves the same reliability gain Vercel found — the agent doesn't need to independently decide to look for docs because the table tells it docs exist.

### Why this works

The original CRI (Compact Retrieval Index) approach mapped keywords to file paths, acting as a compressed search index in passive context. Real-world testing showed this was over-engineered:

1. **Agents already know how to use skills.** Once told a skill exists, they invoke it reliably. The failure in Vercel's evals was agents not knowing docs existed, not agents struggling to navigate docs.
2. **Skills have their own navigation.** Each olore skill package includes a TOC.md and structured content. The agent doesn't need a keyword index in CLAUDE.md — it gets full navigation when it invokes the skill.
3. **Simpler is more maintainable.** A markdown table is human-readable, easy to audit, and trivial to generate. No custom delimiter formats or compression layers.

## Two Channels, One Install

olore gives agents documentation through two complementary channels:

| Channel | How it works | Strength |
|---------|-------------|----------|
| **Skills** (active) | Agent invokes a skill to browse full docs | Complete documentation access |
| **Skill reference table** (passive) | Table in CLAUDE.md lists available skills | Agents know docs exist, invoke skills reliably |

`olore install` sets up the skill. `olore inject` writes the reference table so agents know the skill exists.

## Where to Inject: Context Loading Behavior

The reference table must be placed in a file the agent actually reads. Understanding how agents load context files determines where injection is effective.

### How Claude Code loads context (as of Jan 2026)

| Location | When loaded | Unloaded? |
|----------|------------|-----------|
| Root `CLAUDE.md` | At launch, every conversation | Never |
| `.claude/rules/*.md` (no `paths:`) | At launch | Never |
| `.claude/rules/*.md` (with `paths:`) | When Claude works with matching files | Never |
| Subdirectory `CLAUDE.md` (e.g. `web/CLAUDE.md`) | When Claude reads files in that subtree | Never |
| `CLAUDE.local.md` | At launch | Never |

The critical behavior: **once loaded, context stays for the entire conversation.** There is no unloading mechanism.

### Recommendation

For most projects, inject into root `CLAUDE.md`. The skill reference table is small (a few lines per package) and ensures the agent has the reference from the first turn.

## Usage

```bash
olore install prisma          # Install docs (creates skill)
olore inject                  # Write skill reference table into CLAUDE.md and AGENTS.md
olore inject --remove         # Strip table cleanly
```

Running `olore inject` again replaces existing content (idempotent). Content is wrapped in `<!-- olore:start -->` / `<!-- olore:end -->` markers for clean replacement.

## Related

- [ADR-0006: Compact Retrieval Index](adr/0006-compact-retrieval-index.md) — original CRI decision (superseded by skill reference table)
- [Architecture](architecture.md) — system design including the inject flow
- [ADR-0007: Reclaim init for auto-detect flow](adr/0007-reclaim-init-for-auto-detect-flow.md) — `olore init` for scope reduction
