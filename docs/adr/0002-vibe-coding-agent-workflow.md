# ADR-0002: Vibe Coding Agent Workflow

## Status

Accepted (Updated)

> **Note:** The workflow has evolved. `/install-agent-skills` is now replaced by `olore install ./path`. SKILL.md is generated into packages directly, not to `dotfiles/`. The core principles remain the same.

## Context

olore needs to convert raw documentation from various sources (GitHub repos, URLs) into curated, AI-friendly skill packages. This process involves:

1. **Downloading** — Fetching docs from GitHub repos or URLs
2. **Filtering** — Removing non-useful content (changelogs, marketing, contribution guides)
3. **Generating** — Creating SKILL.md files for each agent
4. **Installing** — Deploying skills to agent directories

The filtering step is particularly challenging:
- Documentation quality varies wildly
- No algorithmic way to determine "usefulness" for AI context
- Requires judgment: Is this changelog useful? Is this marketing page noise?

We considered:
1. Manual curation (tedious, doesn't scale)
2. Rule-based filtering (brittle, can't handle edge cases)
3. AI-assisted filtering (leverages LLM judgment)

## Decision

**We use "vibe coding" with AI agents for the build process.**

The build workflow runs inside Claude Code, using AI to make curation decisions that would otherwise require human judgment.

```
┌─────────────────────────────────────────────────────────────┐
│  MAINTAINER WORKFLOW (inside Claude Code)                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  /build-docs prisma-docs                                    │
│       ↓                                                     │
│  [Download from GitHub]                                     │
│       ↓                                                     │
│  [AI reviews each file]                                     │
│       ↓                                                     │
│  [AI generates deletion list]                               │
│       ↓                                                     │
│  [Human reviews AI suggestions]                             │
│       ↓                                                     │
│  [Apply filtering]                                          │
│                                                             │
│  /generate-agent-skills prisma-docs                         │
│       ↓                                                     │
│  [Determine tier based on size]                             │
│       ↓                                                     │
│  [Generate SKILL.md for each agent]                         │
│                                                             │
│  /install-agent-skills prisma-docs                          │
│       ↓                                                     │
│  [Create symlinks to agent directories]                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Key principle

The AI isn't autonomous — it proposes, human approves. This creates a "vibe coding" loop:

1. AI analyzes documentation files
2. AI proposes which files to remove (changelogs, marketing, etc.)
3. Human reviews the proposal
4. Human can override AI decisions
5. Final curated set is committed

### Implementation

Claude Code skills orchestrate the workflow:

```
.claude/skills/
├── build-docs/           # Download + filter orchestration
├── generate-agent-skills/ # SKILL.md generation
└── install-agent-skills/  # Symlink creation
```

Slash commands invoke the workflow:
- `/build-docs` — Download and filter
- `/generate-agent-skills` — Create SKILL.md files
- `/install-agent-skills` — Deploy to agent directories

## Consequences

### Positive

1. **Better curation quality** — AI catches things humans miss (and vice versa)
2. **Scalable** — Can process large doc sets without manual file-by-file review
3. **Interactive** — Human stays in the loop for final judgment
4. **Leverages existing tools** — Uses Claude Code's native skill system
5. **Dogfooding** — We use AI agents to build AI agent tools
6. **Auditable** — AI proposals are explicit, can be reviewed in git

### Negative

1. **Requires Claude Code** — Maintainers must have Claude Code installed
2. **Not fully automated** — Human review step prevents full CI/CD
3. **AI costs** — Building packages consumes API tokens (acceptable for rare builds)
4. **Learning curve** — Contributors need to understand the slash command workflow

### Why this trade-off works

Build happens rarely (when docs update). Consumption happens often (developers installing).

| Activity | Frequency | Needs AI? | Interactive? |
|----------|-----------|-----------|--------------|
| Build packages | Rare | Yes (filtering) | Yes |
| Install packages | Often | No | No |

It makes sense to optimize the frequent path (install = simple CLI) and allow complexity in the rare path (build = AI-assisted).

## Alternatives Considered

### Fully automated CI pipeline

- Pro: No human in loop, faster
- Con: AI curation without review risks quality issues

### Manual curation only

- Pro: Human judgment for everything
- Con: Doesn't scale, tedious for large doc sets

### Rule-based filtering (glob patterns, keywords)

- Pro: Deterministic, fast
- Con: Brittle, can't handle nuanced decisions ("Is this API reference useful or deprecated?")

## References

- [CONTRIBUTING.md](../../CONTRIBUTING.md) — Maintainer workflow documentation
- [.claude/skills/build-docs/](../../.claude/skills/build-docs/) — Build skill implementation
