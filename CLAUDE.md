# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Repository Purpose

**olore** is a universal documentation package manager for AI coding agents. It downloads official documentation, filters it with AI assistance, and generates skills that make the docs available as context during development.

Think of it as "npm for AI agent documentation" - works with Claude Code, Codex, OpenCode, and more.

## Directory Structure

```
cli/                # TypeScript CLI (olore command)
├── src/            # CLI source code
└── package.json

vault/              # Documentation packages (source/build location)
├── configs/        # Config files (human-authored)
│   └── zod.json    # "name": "zod" → /olore-zod
└── packages/       # Built packages (self-contained)
    └── zod/
        └── latest/
            ├── olore-lock.json   # Package metadata
            ├── SKILL.md          # Skill definition (generated)
            ├── TOC.md            # Table of contents (generated)
            └── contents/         # Documentation files

~/.olore/           # User's central storage (after install)
└── packages/
    └── {name}/{version}/     # Installed packages

~/.claude/skills/   # Agent skill directories (symlinks to ~/.olore)
~/.codex/skills/
~/.config/opencode/skills/

.claude/            # Claude Code tooling
├── skills/
│   └── build-docs/           # Main build skill
├── agents/
│   └── package-builder.md    # AI-heavy processing
└── rules/                    # Modular instructions (auto-loaded)
```

## Architecture: Build vs Consume

- **Maintainers** build docs using Claude Code (`/build-docs` skill) - interactive, AI-assisted
- **Users** consume docs using `olore` CLI - simple, fast, no AI required

See @docs/architecture.md for detailed flows and CLI commands.

## Architecture Reference

**@docs/architecture.md is the source of truth** for system design, package format, registry, and install flow.

**Workflow for architectural changes:**
1. **Read first** - Consult @docs/architecture.md before changes affecting package structure, CLI commands, registry, or agent integration
2. **Update docs first** - When proposing architectural changes, update @docs/architecture.md before implementing
3. **Record decisions** - For significant decisions, add an ADR to @docs/adr/README.md following the existing format

## Additional Instructions

Detailed instructions are in `.claude/rules/`. Path-scoped rules load automatically when working in matching directories.

| Rule | Scope | Purpose |
|------|-------|---------|
| **cli-development.md** | `cli/**` | CLI development, commands, code style |
| **web-development.md** | `web/**` | Next.js web app, pnpm, formatting |
| **limitations.md** | global | Known limitations and workarounds |

For building documentation packages, use `/build-docs` - all relevant guidance is bundled in that skill.

**Build-docs dependency:** When modifying `.claude/skills/build-docs/` or `.claude/agents/package-builder.md`, always consider the shared templates at `vault/packages/docs-packager/1.0.0/templates/` - these are the single source of truth for SKILL.md and TOC.md generation.

## Claude Code Configuration Standards

When **modifying or creating** files in `.claude/` (rules, native skills, agents, hooks) or `CLAUDE.md`, consult `/olore-claude-code-latest` for current best practices.

Reference the skill for:
- Organizing `.claude/rules/` with path-scoped frontmatter
- Creating native skills in `.claude/skills/` (with `allowed-tools`, `hooks`, etc.)
- Setting up custom subagents in `.claude/agents/`
- Memory management and CLAUDE.md hierarchy
- Hooks configuration and lifecycle events

**Exclusions:**
- Running `/build-docs` or other existing skills → do NOT load this skill
- Generating `vault/packages/*/SKILL.md` → follow @docs/package-format.md instead
