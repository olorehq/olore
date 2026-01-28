---
name: olore-opencode-latest
description: Local OpenCode documentation reference (latest). Use when asked about OpenCode AI coding agent, agents, skills, tools, configuration, CLI, TUI, IDE integration, or MCP servers.
---

# OpenCode Documentation

OpenCode is an open source AI coding agent available as a terminal-based interface, desktop app, or IDE extension. It supports 75+ LLM providers and can be customized with agents, skills, tools, and plugins.

## Documentation Structure

```
docs/
├── index.mdx               # Introduction and getting started
├── agents.mdx              # Specialized AI agents
├── skills.mdx              # Reusable SKILL.md definitions
├── cli.mdx                 # CLI commands
├── tui.mdx                 # Terminal interface
├── web.mdx                 # Web interface
├── ide.mdx                 # IDE extension
├── config.mdx              # JSON configuration
├── providers.mdx           # LLM providers (75+)
├── models.mdx              # Model configuration
├── tools.mdx               # Built-in tools
├── custom-tools.mdx        # Create custom tools
├── mcp-servers.mdx         # MCP integration
└── ...                     # 34 files total
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started | `index.mdx`, `1-0.mdx` |
| Agents & modes | `agents.mdx`, `modes.mdx`, `skills.mdx` |
| Configuration | `config.mdx`, `providers.mdx`, `models.mdx`, `permissions.mdx` |
| Tools & extensions | `tools.mdx`, `custom-tools.mdx`, `mcp-servers.mdx`, `plugins.mdx` |
| Interfaces | `cli.mdx`, `tui.mdx`, `web.mdx`, `ide.mdx` |
| Integrations | `github.mdx`, `gitlab.mdx`, `acp.mdx`, `network.mdx` |
| Advanced features | `sdk.mdx`, `server.mdx`, `zen.mdx`, `share.mdx` |
| Troubleshooting | `troubleshooting.mdx` |

## When to use

Use this skill when the user asks about:
- OpenCode AI coding agent setup and usage
- Configuring agents, skills, or subagents
- Using the CLI, TUI, web, or IDE interfaces
- Setting up LLM providers and models
- Creating or using tools, MCP servers, or plugins
- GitHub/GitLab integration
- Configuration options and permissions
- Keyboard shortcuts and themes
- Troubleshooting issues

## How to find information

1. Use Topic Guide above to find relevant files
2. Read `TOC.md` for complete file listing organized by category
3. Read specific files from `contents/{filename}`
