---
name: olore-opencode-latest
description: Local opencode documentation reference (latest). OpenCode AI coding agent documentation. Use for agents, skills, tools, configuration, CLI, TUI, and MCP servers.
---

# opencode Documentation

OpenCode AI coding agent documentation. Use for agents, skills, tools, configuration, CLI, TUI, and MCP servers.

## Documentation Structure

```
contents/   # OpenCode docs, flat English .mdx pages (33 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / install | `contents/index.mdx`, `contents/windows-wsl.mdx` |
| CLI and TUI | `contents/cli.mdx`, `contents/tui.mdx`, `contents/keybinds.mdx`, `contents/themes.mdx` |
| Configuration | `contents/config.mdx`, `contents/rules.mdx`, `contents/network.mdx` |
| Models and providers | `contents/models.mdx`, `contents/providers.mdx` |
| Agents, commands, skills | `contents/agents.mdx`, `contents/commands.mdx`, `contents/skills.mdx` |
| Tools, plugins, MCP | `contents/tools.mdx`, `contents/custom-tools.mdx`, `contents/plugins.mdx`, `contents/mcp-servers.mdx` |
| LSP and formatters | `contents/lsp.mdx`, `contents/formatters.mdx` |
| Permissions and policies | `contents/permissions.mdx`, `contents/policies.mdx`, `contents/enterprise.mdx` |
| Integrations (IDE, GitHub, GitLab, ACP) | `contents/ide.mdx`, `contents/github.mdx`, `contents/gitlab.mdx`, `contents/acp.mdx` |
| SDK and server | `contents/sdk.mdx`, `contents/server.mdx` |
| Troubleshooting | `contents/troubleshooting.mdx` |

## When to use

Use this skill when the user asks about:
- Configuring OpenCode (config file, models, providers, rules)
- Agents, custom commands, skills, custom tools, and plugins
- MCP servers, LSP, formatters, and permissions
- OpenCode CLI/TUI usage, keybinds, and themes
- OpenCode SDK, HTTP server, and GitHub/GitLab/IDE integrations

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
