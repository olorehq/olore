---
name: olore-opencode-latest
description: Local opencode documentation reference (latest). OpenCode AI coding agent documentation. Use for agents, skills, tools, configuration, CLI, TUI, and MCP servers.
---

# opencode Documentation

OpenCode is an open source AI coding agent available as a terminal-based interface (TUI), desktop app, IDE extension, and web interface. It supports any LLM provider, MCP servers, custom tools, plugins, and agent skills.

## Documentation Structure

```
contents/          # All docs (flat, 35 files)
├── index.mdx      # Introduction and getting started
├── config.mdx     # JSON configuration reference
├── cli.mdx        # CLI commands and options
├── tui.mdx        # Terminal UI usage
├── agents.mdx     # Agent configuration
├── models.mdx     # LLM providers and models
├── providers.mdx  # Provider setup
├── mcp-servers.mdx # MCP tool integration
├── plugins.mdx    # Plugin development
├── skills.mdx     # Agent skill definitions
└── ...            # 25 more topic files
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / installation | `contents/index.mdx` |
| Configuration (JSON config) | `contents/config.mdx` |
| CLI commands and flags | `contents/cli.mdx`, `contents/commands.mdx` |
| TUI usage and keybinds | `contents/tui.mdx`, `contents/keybinds.mdx` |
| Agents and modes | `contents/agents.mdx`, `contents/modes.mdx` |
| LLM providers and models | `contents/providers.mdx`, `contents/models.mdx` |
| MCP servers | `contents/mcp-servers.mdx` |
| Custom tools | `contents/custom-tools.mdx`, `contents/tools.mdx` |
| Plugins | `contents/plugins.mdx` |
| Agent skills (SKILL.md) | `contents/skills.mdx` |
| Rules and instructions | `contents/rules.mdx` |
| Permissions and security | `contents/permissions.mdx` |
| IDE integration (VS Code, Cursor) | `contents/ide.mdx`, `contents/acp.mdx` |
| GitHub / GitLab integration | `contents/github.mdx`, `contents/gitlab.mdx` |
| HTTP server and SDK | `contents/server.mdx`, `contents/sdk.mdx` |
| Web interface | `contents/web.mdx` |
| Themes and formatting | `contents/themes.mdx`, `contents/formatters.mdx` |
| LSP integration | `contents/lsp.mdx` |
| Network / proxy config | `contents/network.mdx` |
| Windows / WSL | `contents/windows-wsl.mdx` |
| Sharing conversations | `contents/share.mdx` |
| Subscriptions (Go, Zen) | `contents/go.mdx`, `contents/zen.mdx` |
| Enterprise deployment | `contents/enterprise.mdx` |
| Ecosystem and community | `contents/ecosystem.mdx` |
| Troubleshooting | `contents/troubleshooting.mdx` |

## When to use

Use this skill when the user asks about:
- Installing, configuring, or running OpenCode
- CLI flags, TUI navigation, or keybindings
- Setting up LLM providers, models, or MCP servers
- Writing plugins, custom tools, or agent skills
- Integrating OpenCode with GitHub, GitLab, or IDEs
- Permissions, rules, network/proxy settings
- The OpenCode HTTP server or JS SDK

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for the complete file listing
3. Read specific files from `contents/{filename}.mdx`
