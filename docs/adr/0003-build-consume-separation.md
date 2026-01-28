# ADR-0003: Build vs Consume Separation

## Status

Accepted (Updated)

> **Note:** Implementation has evolved. `/install-agent-skills` replaced by `olore install ./path`. `dotfiles/` removed - SKILL.md now lives in packages. The separation principle remains: maintainers use Claude Code skills, users use CLI.

## Context

olore has two distinct user groups with different needs:

| User | Activity | Frequency | Technical skill |
|------|----------|-----------|-----------------|
| Maintainer | Build documentation packages | Rare | High |
| End user | Install documentation packages | Often | Any |

We needed to decide whether to build:
1. **Unified system** — Single tool does everything
2. **Separated systems** — Different tools for different workflows

## Decision

**We separate the build workflow (maintainers) from the consume workflow (users).**

```
┌─────────────────────────────────────────────────────────────┐
│  MAINTAINERS (build docs)          │  USERS (consume docs)  │
├─────────────────────────────────────┼────────────────────────┤
│                                     │                        │
│  Claude Code skills:                │  olore CLI:            │
│  ├── /build-docs                    │  ├── olore install     │
│  ├── /generate-agent-skills         │  ├── olore list        │
│  └── /install-agent-skills          │  └── olore remove      │
│                                     │                        │
│  Interactive, AI-assisted           │  Simple, fast, no AI   │
│  Bash scripts + Claude Code         │  Downloads pre-built   │
│                                     │                        │
│  Output: vault/packages/            │  Input: vault/packages │
│          dotfiles/                  │  Output: ~/.claude/... │
│                                     │                        │
└─────────────────────────────────────┴────────────────────────┘
```

### Build workflow (maintainers)

- Uses Claude Code skills (interactive, AI-assisted)
- Bash scripts for downloading and processing
- AI filters out non-useful content
- Human reviews AI suggestions
- Outputs curated packages to `vault/packages/`

### Consume workflow (users)

- TypeScript CLI (`olore` command)
- No AI required
- Downloads pre-built packages from registry
- Simple install/update/remove commands
- Dead simple UX: `olore install prisma` → done

## Consequences

### Positive

1. **Right tool for the job** — AI makes sense for curation, not for installation
2. **Simple user experience** — `olore install` is instant, no AI interaction
3. **No AI costs for users** — Only maintainers pay for curation
4. **Offline install** — Users don't need network after download
5. **Matches npm model** — npm doesn't build packages, it distributes them
6. **Lower barrier to entry** — Users don't need Claude Code

### Negative

1. **Two systems to maintain** — Claude Code skills + TypeScript CLI
2. **Context switching** — Maintainers use different tools than users
3. **Documentation complexity** — Need separate docs for each workflow

### Why this mirrors npm

```
npm ecosystem:
├── Package authors: Build with complex tooling (webpack, babel, etc.)
├── npm registry: Stores pre-built packages
└── npm CLI: Simple install for consumers

olore ecosystem:
├── Maintainers: Build with Claude Code skills (AI-assisted)
├── olore registry: Stores pre-built packages
└── olore CLI: Simple install for consumers
```

Package building happens separately by maintainers. Users just consume.

## Alternatives Considered

### Single unified CLI

Build everything into the TypeScript CLI:

```bash
olore build prisma-docs    # AI curation in CLI
olore install prisma-docs  # Install from registry
```

- Pro: One tool to learn
- Con: CLI would need to embed AI capabilities, complex, expensive for users

### Build in CI/CD

Fully automated build pipeline without human review:

- Pro: No interactive step needed
- Con: AI curation without review risks quality issues

### No build system (just docs)

Let users point to raw documentation URLs:

- Pro: Simpler, no build needed
- Con: No curation, raw docs often include noise

## Implementation

### For maintainers (this repo)

```bash
# Inside Claude Code
/build-docs prisma-docs
/generate-agent-skills prisma-docs
/install-agent-skills prisma-docs
```

### For users (future)

```bash
# CLI (no Claude Code required)
olore install prisma
olore list
olore remove prisma
```

## What NOT to do

- **Don't** move bash build scripts into the TypeScript CLI
- **Don't** create a single unified command that does build + install
- **Don't** duplicate Claude Code's strengths in the CLI
- **Don't** require AI for the install path

## References

- [CLAUDE.md](../../CLAUDE.md) — "Architecture Decision: Build vs Consume" section
- [CONTRIBUTING.md](../../CONTRIBUTING.md) — Maintainer workflow
- [ROADMAP.md](../../ROADMAP.md) — Public feature roadmap
