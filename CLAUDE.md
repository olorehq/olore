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

@docs/architecture.md is the source of truth for system design, package format, registry, and install flow.

## Rules

Path-scoped rules in `.claude/rules/` load automatically for relevant directories. Use `/build-docs` for building documentation packages.
