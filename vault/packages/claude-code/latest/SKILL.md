---
name: olore-claude-code-latest
description: Local claude-code documentation reference (latest). Claude Code CLI documentation. Use for skills, subagents, hooks, MCP, plugins, deployment, and configuration.
---

# claude-code Documentation

Claude Code CLI documentation. Use for skills, subagents, hooks, MCP, plugins, deployment, and configuration.

## Documentation Structure

```
contents/
├── getting-started/        # Overview, quickstart, workflows, best practices (8 files)
├── surfaces/               # VS Code, JetBrains, Desktop, Chrome, Slack integrations (8 files)
├── build-with-claude-code/ # Agents, subagents, plugins, skills, hooks, MCP, SDK (11 files)
├── ci-cd/                  # GitHub Actions and GitLab CI/CD integration (2 files)
├── deployment/             # Cloud providers, networking, sandboxing, devcontainer (7 files)
├── configuration/          # Settings, permissions, memory, models, keybindings (8 files)
├── reference/              # CLI reference, hooks spec, plugins spec, changelog (6 files)
└── account/                # Auth, costs, monitoring, analytics, security (7 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started and setup | `contents/getting-started/overview.md`, `contents/getting-started/quick-start.md`, `contents/getting-started/setup.md` |
| Skills and custom commands | `contents/build-with-claude-code/skills.md`, `contents/reference/cli-reference.md` |
| Subagents and agent teams | `contents/build-with-claude-code/sub-agents.md`, `contents/build-with-claude-code/agent-teams.md` |
| Hooks (lifecycle automation) | `contents/build-with-claude-code/hooks-guide.md`, `contents/reference/hooks.md` |
| Plugins (create/install/distribute) | `contents/build-with-claude-code/plugins.md`, `contents/build-with-claude-code/discover-plugins.md`, `contents/build-with-claude-code/plugin-marketplaces.md`, `contents/reference/plugins-reference.md` |
| MCP (Model Context Protocol) | `contents/build-with-claude-code/mcp.md` |
| Programmatic / headless usage | `contents/build-with-claude-code/programmatic-usage.md` |
| IDE integrations | `contents/surfaces/vs-code.md`, `contents/surfaces/jetbrains.md`, `contents/surfaces/desktop.md` |
| CI/CD automation | `contents/ci-cd/github-actions.md`, `contents/ci-cd/gitlab-ci-cd.md` |
| Enterprise deployment | `contents/deployment/third-party-integrations.md`, `contents/deployment/google-vertex-ai.md`, `contents/deployment/microsoft-foundry.md`, `contents/deployment/llm-gateway.md` |
| Network and security config | `contents/deployment/network-config.md`, `contents/deployment/sandboxing.md`, `contents/account/security.md` |
| Settings and configuration | `contents/configuration/settings.md`, `contents/configuration/permissions.md`, `contents/configuration/memory.md` |
| Model selection | `contents/configuration/model-config.md` |
| Authentication | `contents/account/authentication.md` |
| Cost management | `contents/account/costs.md`, `contents/account/monitoring-usage.md` |
| CLAUDE.md and memory | `contents/configuration/memory.md` |
| CLI commands and flags | `contents/reference/cli-reference.md` |
| Troubleshooting | `contents/build-with-claude-code/troubleshooting.md` |

## When to use

Use this skill when the user asks about:
- Creating or customizing skills, subagents, agents, or hooks in Claude Code
- Installing, building, or distributing plugins
- Connecting tools via MCP servers
- Configuring Claude Code settings, permissions, or memory (CLAUDE.md)
- Deploying Claude Code in CI/CD pipelines or enterprise environments
- Using Claude Code in VS Code, JetBrains, desktop, or browser surfaces
- Programmatic / headless usage of Claude Code via the Agent SDK
- Authentication, costs, and monitoring for Claude Code

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
