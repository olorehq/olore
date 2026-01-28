# ADR-0001: Docs as Skill over MCP/Embedding

## Status

Accepted

## Context

AI coding assistants hallucinate because they lack current, accurate documentation. Several approaches exist to ground AI in documentation:

| Approach | How it works |
|----------|--------------|
| **RAG** | Chunk docs → embed in vector DB → retrieve on query |
| **MCP/Cloud** | API call per query to external service (e.g., Context7) |
| **Fine-tuning** | Bake knowledge into model weights |
| **Skills-based** | Pre-load curated docs as local files |

Context7 (42k+ GitHub stars) proved massive demand for documentation grounding. However, it requires:
- MCP protocol support
- Cloud connectivity (latency, privacy concerns)

We needed to decide: follow Context7's MCP approach, build RAG infrastructure, or try something different?

## Decision

**We chose skills-based documentation distribution.**

olore packages documentation as "skills" that AI agents read directly from local files, leveraging the existing architecture of Claude Code, Codex CLI, and OpenCode.

```
olore install prisma
       ↓
~/.olore/packages/prisma/     # docs stored locally
~/.claude/skills/prisma/      # Claude Code reads this
~/.codex/skills/prisma/       # Codex CLI reads this
       ↓
AI reads local docs → accurate code
```

### Core insight

AI coding agents already use a skills-based architecture:
- `CLAUDE.md` files for project context
- `~/.claude/skills/` for reusable knowledge
- File-based context loading

**olore doesn't invent new architecture. It packages for existing architecture.**

## Consequences

### Positive

1. **Universal agent support** — Works with skills-based and file-based agents
2. **Local-first** — Download once, use forever. No per-query latency or costs
3. **Offline works** — No network dependency after install
4. **Privacy** — Docs stay on your machine, queries never leave
5. **Full context** — AI sees complete documents, not fragmented chunks (unlike RAG)
6. **Versioned** — Explicit version in SKILL.md makes AI behavior reproducible
7. **Zero infrastructure** — Just files and symlinks, no vector DB or embedding service
8. **No vendor lock-in** — Open source, no protocol dependency

### Negative

1. **Context window limit** — Large doc sets may exceed token limits (mitigated by growing context windows: 200k → 1M+)
2. **No real-time data** — Can't handle live data like stock prices (not our use case)
3. **Manual updates** — Requires `olore update` vs automatic sync (acceptable trade-off)
4. **Storage space** — Docs stored locally (negligible for documentation, KB-MB range)

### Trade-off rationale

```
RAG solves: "I have too much data to fit in context"
olore solves: "AI doesn't have the RIGHT data in context"

Different problems. olore is right-sized for curated documentation.
```

Context windows are growing (200k → 1M+ tokens). As they grow, olore's "load full docs" approach becomes MORE viable, while RAG's complexity becomes less justified for curated content.

## Alternatives Considered

### MCP-only (Context7 approach)

- Pro: Real-time, always current
- Con: Excludes non-MCP agents, cloud dependency, privacy concerns, vendor lock-in

### RAG with embeddings

- Pro: Handles massive data
- Con: Fragments context, retrieval errors, complex infrastructure, $$$ costs

### Fine-tuning

- Pro: Fast inference
- Con: Expensive, can't update easily, no version control

## Future Work

- Local MCP adapter/server for MCP-based agents when demand is clear and scope is defined

## References

- [docs/architecture.md](../architecture.md) — Technical architecture