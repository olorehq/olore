# opencode Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | OpenCode user, configuration, integration, and SDK docs (English, flat) | 33 |

## contents/

| File | Description |
|------|-------------|
| `index.mdx` | Introduction, installation, and getting started with OpenCode |
| `cli.mdx` | CLI commands, flags, and environment variables |
| `tui.mdx` | Terminal UI usage: slash commands, file references, shell commands |
| `web.mdx` | Running OpenCode in the browser via the web interface |
| `ide.mdx` | Extension for VS Code, Cursor, and other IDEs |
| `acp.mdx` | Using OpenCode in ACP-compatible editors |
| `windows-wsl.mdx` | Running OpenCode on Windows via WSL |
| `config.mdx` | JSON config file format, locations, precedence, and options |
| `models.mdx` | Selecting and configuring LLM models and variants |
| `providers.mdx` | Configuring LLM providers and credentials |
| `agents.mdx` | Built-in and custom agents, modes, and subagents |
| `commands.mdx` | Defining custom slash commands for repetitive tasks |
| `rules.mdx` | Custom instructions via AGENTS.md and rules files |
| `skills.mdx` | Reusable behavior via SKILL.md definitions |
| `tools.mdx` | Built-in tools the LLM can use and how to enable or disable them |
| `custom-tools.mdx` | Writing custom tools the LLM can call |
| `plugins.mdx` | Writing plugins and hooks to extend OpenCode |
| `mcp-servers.mdx` | Adding local and remote MCP servers |
| `lsp.mdx` | LSP server integration and configuration |
| `formatters.mdx` | Language-specific code formatters and configuration |
| `permissions.mdx` | Controlling which actions require approval |
| `policies.mdx` | Controlling which configured resources OpenCode may use |
| `references.mdx` | Adding local directories and Git repos as project references |
| `keybinds.mdx` | Customizing keybindings |
| `themes.mdx` | Built-in themes and defining custom themes |
| `network.mdx` | Proxy and custom certificate configuration |
| `enterprise.mdx` | Using OpenCode securely in an organization |
| `github.mdx` | Using OpenCode in GitHub issues and pull requests |
| `gitlab.mdx` | Using OpenCode in GitLab issues and merge requests |
| `sdk.mdx` | Type-safe JS client for the OpenCode server |
| `server.mdx` | Interacting with the OpenCode server over HTTP |
| `ecosystem.mdx` | Community projects and integrations built with OpenCode |
| `troubleshooting.mdx` | Common issues and how to resolve them |
