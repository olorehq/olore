---
name: olore-opencode-latest
description: Local opencode documentation reference (latest). OpenCode AI coding agent documentation. Use for agents, skills, tools, configuration, CLI, TUI, and MCP servers.
---

# opencode Documentation

OpenCode is an open source AI coding agent available as a terminal-based interface (TUI), desktop app, or IDE extension. It supports 75+ LLM providers, agents, skills, custom tools, MCP servers, and extensive configuration.

## Documentation Structure

```
contents/
├── index.mdx          # Introduction and getting started
├── cli.mdx            # CLI commands and options
├── tui.mdx            # Terminal user interface
├── config.mdx         # JSON/JSONC configuration
├── agents.mdx         # Specialized agents
├── skills.mdx         # Agent skills (SKILL.md)
├── tools.mdx          # Built-in tools
├── custom-tools.mdx   # Custom tool creation
├── mcp-servers.mdx    # MCP tool integration
├── providers.mdx      # LLM provider setup
├── models.mdx         # Model configuration
├── permissions.mdx    # Action approval control
├── rules.mdx          # Custom instructions (AGENTS.md)
├── keybinds.mdx       # TUI keybind customization
├── lsp.mdx            # Language server integration
├── formatters.mdx     # Code formatter configuration
├── ide.mdx            # IDE extension
├── themes.mdx         # TUI themes
├── server.mdx         # Server configuration
├── sdk.mdx            # SDK reference
├── acp.mdx            # Agent Communication Protocol
├── plugins.mdx        # Plugin system
├── github.mdx         # GitHub integration
├── gitlab.mdx         # GitLab integration
├── enterprise.mdx     # Enterprise features
├── troubleshooting.mdx # Common issues
└── windows-wsl.mdx    # Windows/WSL setup
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / installation | `contents/index.mdx`, `contents/cli.mdx` |
| Configuration | `contents/config.mdx`, `contents/models.mdx`, `contents/providers.mdx` |
| TUI and keybinds | `contents/tui.mdx`, `contents/keybinds.mdx`, `contents/themes.mdx` |
| Agents and skills | `contents/agents.mdx`, `contents/skills.mdx`, `contents/rules.mdx` |
| Tools and MCP | `contents/tools.mdx`, `contents/custom-tools.mdx`, `contents/mcp-servers.mdx` |
| Permissions and security | `contents/permissions.mdx`, `contents/network.mdx`, `contents/enterprise.mdx` |
| IDE and integrations | `contents/ide.mdx`, `contents/lsp.mdx`, `contents/github.mdx`, `contents/gitlab.mdx` |
| Server and SDK | `contents/server.mdx`, `contents/sdk.mdx`, `contents/acp.mdx` |
| Troubleshooting | `contents/troubleshooting.mdx`, `contents/windows-wsl.mdx` |

## When to use

Use this skill when the user asks about:
- Installing or getting started with OpenCode
- Configuring OpenCode (models, providers, config file)
- Using the TUI, CLI commands, or IDE extension
- Setting up agents, skills, or custom rules
- Adding MCP servers or custom tools
- Managing tool permissions
- OpenCode server, SDK, or plugin development
- Troubleshooting OpenCode issues

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
