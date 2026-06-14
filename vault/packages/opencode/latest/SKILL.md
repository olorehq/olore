---
name: olore-opencode-latest
description: Local opencode documentation reference (latest). OpenCode AI coding agent documentation. Use for agents, skills, tools, configuration, CLI, TUI, and MCP servers.
---

# opencode Documentation

OpenCode is an open source AI coding agent available as a terminal interface (TUI), desktop app, IDE extension, or web app. This package contains the full official documentation.

## Documentation Structure

```
contents/          # All 36 docs in flat structure
├── index.mdx      # Getting started
├── cli.mdx        # CLI reference
├── config.mdx     # Configuration
├── tui.mdx        # Terminal UI
├── agents.mdx     # Sub-agents
├── skills.mdx     # Skills system
├── tools.mdx      # Built-in tools
├── mcp-servers.mdx # MCP servers
├── providers.mdx  # AI providers
├── models.mdx     # Model selection
├── rules.mdx      # Agent rules
├── permissions.mdx # Permissions
├── plugins.mdx    # Plugin system
├── sdk.mdx        # JS/TS SDK
└── ...            # (36 files total, see TOC.md)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / installation | `contents/index.mdx` |
| CLI commands and flags | `contents/cli.mdx`, `contents/commands.mdx` |
| Configuration (opencode.json) | `contents/config.mdx` |
| Terminal UI (TUI) | `contents/tui.mdx`, `contents/keybinds.mdx` |
| Web interface | `contents/web.mdx` |
| IDE / editor integration | `contents/ide.mdx`, `contents/acp.mdx` |
| Agents and sub-agents | `contents/agents.mdx` |
| Skills system | `contents/skills.mdx` |
| Tools (built-in and custom) | `contents/tools.mdx`, `contents/custom-tools.mdx` |
| MCP servers | `contents/mcp-servers.mdx` |
| AI providers and models | `contents/providers.mdx`, `contents/models.mdx`, `contents/zen.mdx` |
| Rules / agent instructions | `contents/rules.mdx` |
| Permissions and policies | `contents/permissions.mdx`, `contents/policies.mdx` |
| Project references | `contents/references.mdx` |
| Plugin development | `contents/plugins.mdx` |
| SDK (JavaScript/TypeScript) | `contents/sdk.mdx` |
| Server / headless mode | `contents/server.mdx` |
| Sharing sessions | `contents/share.mdx` |
| LSP integration | `contents/lsp.mdx` |
| Formatters | `contents/formatters.mdx` |
| Themes | `contents/themes.mdx` |
| Network / proxy | `contents/network.mdx` |
| GitHub / GitLab integration | `contents/github.mdx`, `contents/gitlab.mdx` |
| Windows / WSL setup | `contents/windows-wsl.mdx` |
| Troubleshooting | `contents/troubleshooting.mdx` |
| Enterprise (SSO, gateway) | `contents/enterprise.mdx` |
| Ecosystem / community plugins | `contents/ecosystem.mdx` |

## When to use

Use this skill when the user asks about:
- OpenCode configuration, setup, or installation
- CLI or TUI usage and keyboard shortcuts
- Agents, skills, rules, or tools in OpenCode
- MCP server configuration or custom tools
- AI provider or model setup
- IDE/editor integration (ACP, VSCode, etc.)
- Plugins, SDK, or headless server mode
- Troubleshooting OpenCode issues
- Enterprise deployment or permissions

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing
3. Read specific files from `contents/{filename}.mdx`
