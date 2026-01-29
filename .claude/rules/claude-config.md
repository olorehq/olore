---
paths:
  - ".claude/**"
---

# Claude Code Configuration

When modifying or creating files in `.claude/` (rules, native skills, agents, hooks) or `CLAUDE.md`, consult `/olore-claude-code-latest` for current best practices.

Reference the skill for:
- Organizing `.claude/rules/` with path-scoped frontmatter
- Creating native skills in `.claude/skills/` (with `allowed-tools`, `hooks`, etc.)
- Setting up custom subagents in `.claude/agents/`
- Memory management and CLAUDE.md hierarchy
- Hooks configuration and lifecycle events

**Exclusions:**
- Running `/build-docs` or other existing skills — do NOT load this skill
- Generating `vault/packages/*/SKILL.md` — follow @docs/package-format.md instead

## Build-Docs Templates

When modifying `.claude/skills/build-docs/` or `.claude/agents/package-builder.md`, the shared templates at `vault/packages/docs-packager/1.0.0/templates/` are the single source of truth for SKILL.md and TOC.md generation.
