# ADR-0008: Plugin Bridge over Full Migration

## Status

Proposed

## Context

Claude Code introduced a plugin system (v1.0.33+) that bundles skills, agents, hooks, MCP servers, and LSP servers into distributable units. Plugins are installed via `claude plugin install`, cached locally, and discovered through plugin marketplaces.

This raises the question: should olore migrate from its current skill-based architecture to Claude Code plugins?

### Current architecture

olore installs documentation as **individual skills** symlinked into agent skill directories:

```
olore install prisma
  → ~/.olore/packages/prisma/latest/
  → ~/.claude/skills/olore-prisma-latest/  (symlink)
  → ~/.codex/skills/olore-prisma-latest/   (symlink)
```

Each package is independently installable, versioned, and works across Claude Code, Codex, and OpenCode.

### Plugin architecture (Claude Code)

Plugins are self-contained directories with a manifest:

```
my-plugin/
├── .claude-plugin/plugin.json
├── skills/
├── agents/
├── hooks/
└── .mcp.json
```

Plugins are Claude Code-specific, installed via `claude plugin install`, and namespaced (`/plugin-name:skill-name`).

### Agent landscape (March 2026)

Skills (the Agent Skills open standard) have become the de facto extension mechanism across coding agents. Here's how each major agent handles extensibility:

| Agent | Skills | Plugins | Rules/Instructions | MCP | Marketplace |
|-------|--------|---------|-------------------|-----|-------------|
| **Claude Code** | `~/.claude/skills/` | Yes (v1.0.33+) | CLAUDE.md | Yes | Plugin marketplace |
| **GitHub Copilot CLI** | `~/.copilot/skills/` | Yes (agents, skills, MCP) | `.github/copilot-instructions.md`, `.instructions.md` | Yes | Via GitHub repos |
| **OpenCode** | `~/.config/opencode/skills/` | Yes (Go plugins) | opencode.json | Yes (plugin-bundled) | Community repos |
| **Codex CLI** | `~/.codex/skills/` | Yes (skills + MCP) | AGENTS.md | Yes | — |
| **Windsurf** | `.windsurf/skills/` (March 2026) | — | `.windsurf/rules/` | Yes | — |
| **Cursor** | — | — | `.cursor/rules/*.mdc` | Yes | — |
| **Roo Code / Cline** | — | — | `.roo/rules/`, `.clinerules` | Yes | — |
| **Amazon Q** | — | — | `.amazonq/rules/` | — | — |
| **GitHub Copilot (IDE)** | Agent Skills (VS Code) | Extensions (VS Code) | `.instructions.md`, `.github/copilot-instructions.md` | Yes | VS Code Marketplace |
| **Continue.dev** | — | — | Rules, `config.yaml` | Yes (replaced @Docs) | — |
| **Aider** | — | — | `.aider.conf.yml` conventions file | — | — |
| **Augment Code** | — | — | Custom rules (natural language) | — | — |
| **Gemini Code Assist** | — | Jules extension | Code customization (enterprise) | — | — |

**Key observations:**

1. **Skills are converging.** Claude Code, Copilot CLI, OpenCode, Codex, and now Windsurf all support the same `SKILL.md`-based format. This validates olore's skill-first approach.
2. **Plugins are agent-specific.** Claude Code plugins ≠ Copilot plugins ≠ OpenCode plugins. There is no universal plugin standard. Migrating to any one plugin system locks out the others.
3. **Rules are universal but limited.** Every agent has some form of rules/instructions file, but these are for behavioral guidance, not documentation delivery.
4. **MCP is widespread.** Nearly every agent supports MCP, making it a viable cross-agent integration point for future olore features (e.g., doc search tool).
5. **Copilot CLI adopted Agent Skills.** GitHub Copilot CLI's January 2026 update added skills, custom agents, and a plugin system structurally similar to Claude Code's — further validating the skills standard.

### Key tension

olore's value proposition is "ONE INSTALL → ANY AGENT" (architecture.md). Plugins are agent-specific — Claude Code plugins don't work in Copilot CLI, and vice versa. But plugin ecosystems offer discovery, marketplace distribution, and richer integration (hooks, MCP, agents).

The landscape shows skills are the **widest common denominator** across agents, while plugins are **agent-specific enhancements** on top of skills.

## Decision

**Keep skills as the core delivery mechanism. Build a thin Claude Code plugin as a bridge — not a replacement.**

### What stays the same

- Documentation packages remain individual skills in `~/.claude/skills/olore-{name}-{version}/`
- `olore install`, `olore link`, `olore inject` continue to work
- Multi-agent support (Claude Code, Codex, OpenCode) is preserved
- Registry and tarball distribution unchanged

### What the plugin adds

A lightweight `olore` plugin that enhances the Claude Code experience without replacing the core:

1. **Marketplace visibility** — Users discover olore through Claude Code's plugin browser
2. **SessionStart hook** — On session start, check for outdated packages or suggest `olore init` for new projects
3. **MCP server (optional, future)** — Expose `olore-search` as a tool for cross-package documentation search
4. **Custom agent (optional, future)** — An `olore:docs` agent specialized for documentation lookup

The plugin does **not** bundle documentation. It bridges Claude Code's plugin system to olore's package system.

### Plugin structure

```
olore-plugin/
├── .claude-plugin/
│   └── plugin.json
├── hooks/
│   └── hooks.json          # SessionStart: check for updates
├── commands/
│   └── olore-status.md     # /olore:status — show installed packages
└── README.md
```

### Why not full migration

| Concern | Full migration | Bridge approach |
|---------|---------------|-----------------|
| Multi-agent | Loses Codex/OpenCode | Preserves all agents |
| Granularity | One mega-plugin or many micro-plugins | Per-package skills (existing model) |
| Distribution | Plugin marketplace only | Registry + marketplace |
| Independence | Tied to Claude Code releases | Self-contained CLI |
| Naming | `/olore:prisma-latest` | `/olore-prisma-latest` (no change) |
| User install | `claude plugin install olore` then what? | `olore install prisma` (unchanged) |

**The fundamental mismatch:** Plugins are designed for bundling related functionality (linter + formatter + hooks). olore's unit is a single library's documentation. Cramming 50+ doc packages into one plugin, or creating 50+ micro-plugins, both fight the plugin model's design intent.

## Consequences

### Positive

- **Preserves multi-agent support** — Core differentiator maintained
- **Gains Claude Code integration** — Marketplace discovery, hooks, potential MCP
- **No migration cost** — Existing packages and install flows unchanged
- **Incremental** — Plugin can be built and shipped independently of core
- **Both ecosystems** — Users who only use Claude Code get plugin benefits; users on other agents aren't affected

### Negative

- **Two distribution channels** — Plugin marketplace for the bridge, olore registry for docs
- **Plugin is thin** — May feel underwhelming compared to full-featured plugins
- **Maintenance** — Additional artifact to maintain alongside CLI

### Neutral

- Plugin marketplace adoption is still early — this decision can be revisited if plugins become the dominant distribution model for all agents (not just Claude Code)
- If other agents adopt a plugin-like system, olore can build bridges for those too
- Copilot CLI's plugin system is structurally similar to Claude Code's — a Copilot bridge plugin could follow the same pattern
- MCP support across agents opens a future path for an `olore-search` MCP server that works everywhere, independent of any plugin system

## References

- [Claude Code plugins docs](https://code.claude.com/docs/plugins)
- [GitHub Copilot CLI skills](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-skills)
- [OpenCode plugins](https://opencode.ai/docs/plugins/)
- [Windsurf skills support (March 2026)](https://windsurf.com/changelog/windsurf-next)
- [Agent Skills open standard](https://agentskills.io)
