# CLAUDE.md

**olore** — universal documentation package manager for AI coding agents.

## Directory Structure

```
cli/          # TypeScript CLI (npm)
web/          # Next.js landing page (pnpm)
vault/        # Package configs and built documentation
docs/         # Architecture docs and ADRs
```

## Architecture

See `docs/architecture.md` for system design, package format, registry, and install flow (auto-loaded when working in `docs/` or `vault/` via `.claude/rules/architecture.md`).

See `docs/passive-context.md` for the passive context methodology — how olore uses a Compact Retrieval Index (CRI) to inject documentation into CLAUDE.md/AGENTS.md so agents get docs without invoking skills.

## Rules

Path-scoped rules in `.claude/rules/` load automatically for relevant directories. Use `/build-docs` for building documentation packages.
