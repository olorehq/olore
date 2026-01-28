# Architecture Decision Records

This directory contains Architecture Decision Records (ADRs) for olore.

ADRs document significant architectural decisions with context, rationale, and consequences.

## Index

| ID | Title | Status | Date |
|----|-------|--------|------|
| [0001](0001-docs-as-skill-over-mcp-embedding.md) | Docs as Skill over Embedding | Accepted | 2026-01 |
| [0002](0002-vibe-coding-agent-workflow.md) | Vibe Coding Agent Workflow | Accepted | 2026-01 |
| [0003](0003-build-consume-separation.md) | Build vs Consume Separation | Accepted | 2026-01 |
| [0004](0004-tarball-over-content-addressed-storage.md) | Tarball over Content-Addressed Storage | Accepted | 2026-01 |

## ADR Format

Each ADR follows this structure:

```markdown
# ADR-XXXX: Title

## Status
Proposed | Accepted | Deprecated | Superseded

## Context
Why we need to make this decision.

## Decision
What we decided to do.

## Consequences
Positive and negative outcomes.
```

## Adding New ADRs

1. Copy the template above
2. Use the next available number (e.g., `0004-your-decision.md`)
3. Fill in all sections
4. Update this index
5. Submit PR for review
