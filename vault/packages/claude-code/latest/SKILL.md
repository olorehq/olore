---
name: olore-claude-code-latest
description: Local claude-code documentation reference (latest). Claude Code CLI documentation. Use for skills, subagents, hooks, MCP, plugins, deployment, and configuration.
---

# claude-code Documentation

Claude Code CLI documentation. Use for skills, subagents, hooks, MCP, plugins, deployment, and configuration.

## Documentation Structure

```
contents/
├── getting-started/    # Overview, quickstart, setup, workflows, best practices (8 files)
├── surfaces/           # IDE and platform integrations (VS Code, JetBrains, desktop, web, Slack) (8 files)
├── build-with-claude-code/  # Agent teams, sub-agents, plugins, skills, hooks, MCP (11 files)
├── ci-cd/              # GitHub Actions and GitLab CI/CD integration (2 files)
├── deployment/         # Cloud providers, network config, sandboxing, devcontainer (8 files)
├── configuration/      # Settings, memory, model config, permissions, keybindings (8 files)
├── reference/          # CLI reference, hooks, plugins reference, changelog (6 files)
└── account/            # Authentication, costs, monitoring, security, data usage (7 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / installation | `contents/getting-started/overview.md`, `contents/getting-started/quick-start.md`, `contents/getting-started/setup.md` |
| Skills and custom commands | `contents/build-with-claude-code/skills.md` |
| Sub-agents and agent teams | `contents/build-with-claude-code/sub-agents.md`, `contents/build-with-claude-code/agent-teams.md` |
| Hooks (lifecycle events) | `contents/build-with-claude-code/hooks-guide.md`, `contents/reference/hooks.md` |
| MCP (Model Context Protocol) | `contents/build-with-claude-code/mcp.md` |
| Plugins | `contents/build-with-claude-code/plugins.md`, `contents/reference/plugins-reference.md` |
| Programmatic / headless usage | `contents/build-with-claude-code/programmatic-usage.md` |
| Settings and configuration | `contents/configuration/settings.md`, `contents/configuration/permissions.md`, `contents/configuration/memory.md` |
| Model selection | `contents/configuration/model-config.md` |
| CLI reference | `contents/reference/cli-reference.md`, `contents/reference/interactive-mode.md` |
| Deployment (Bedrock, Vertex, Foundry) | `contents/deployment/aws-bedrock.md`, `contents/deployment/google-vertex-ai.md`, `contents/deployment/microsoft-foundry.md` |
| CI/CD integration | `contents/ci-cd/github-actions.md`, `contents/ci-cd/gitlab-ci-cd.md` |
| IDE integrations | `contents/surfaces/vs-code.md`, `contents/surfaces/jetbrains.md`, `contents/surfaces/desktop.md` |
| Authentication and costs | `contents/account/authentication.md`, `contents/account/costs.md` |
| Troubleshooting | `contents/build-with-claude-code/troubleshooting.md` |

## When to use

Use this skill when the user asks about:
- Installing, setting up, or getting started with Claude Code
- Creating skills, sub-agents, agent teams, or hooks
- Configuring MCP servers or using MCP with Claude Code
- Building or discovering plugins
- Running Claude Code in CI/CD pipelines (GitHub Actions, GitLab)
- Deploying Claude Code via AWS Bedrock, Google Vertex AI, or Microsoft Foundry
- Configuring settings, memory, permissions, model selection, or keybindings
- Using CLI commands or interactive mode
- Authentication, costs, or account management
- Troubleshooting Claude Code issues

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
