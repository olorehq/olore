---
name: olore-claude-code-latest
description: Local claude-code documentation reference (latest). Claude Code CLI documentation. Use for skills, subagents, hooks, MCP, plugins, deployment, and configuration.
---

# claude-code Documentation

Claude Code CLI documentation. Use for skills, subagents, hooks, MCP, plugins, deployment, and configuration.

## Documentation Structure

```
contents/
├── getting-started/       # Overview, quickstart, setup, workflows, best practices (8 files)
├── surfaces/              # IDE integrations, desktop, web, Chrome, Slack, remote control (8 files)
├── build-with-claude-code/ # Skills, subagents, plugins, hooks, MCP, agent teams (11 files)
├── ci-cd/                 # GitHub Actions and GitLab CI/CD integration (2 files)
├── deployment/            # Cloud providers, network config, sandboxing (8 files)
├── configuration/         # Settings, permissions, memory, model, keybindings (8 files)
├── reference/             # CLI reference, hooks reference, interactive mode (6 files)
└── account/               # Authentication, costs, monitoring, security (7 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started & install | `contents/getting-started/overview.md`, `contents/getting-started/quick-start.md`, `contents/getting-started/setup.md` |
| Skills (slash commands) | `contents/build-with-claude-code/skills.md` |
| Subagents | `contents/build-with-claude-code/sub-agents.md`, `contents/build-with-claude-code/agent-teams.md` |
| Hooks | `contents/reference/hooks.md`, `contents/build-with-claude-code/hooks-guide.md` |
| MCP servers | `contents/build-with-claude-code/mcp.md` |
| Plugins | `contents/build-with-claude-code/plugins.md`, `contents/reference/plugins-reference.md` |
| CLI commands & flags | `contents/reference/cli-reference.md` |
| Settings & configuration | `contents/configuration/settings.md`, `contents/configuration/permissions.md` |
| Memory & CLAUDE.md | `contents/configuration/memory.md` |
| Programmatic/headless use | `contents/build-with-claude-code/programmatic-usage.md` |
| GitHub Actions / GitLab CI | `contents/ci-cd/github-actions.md`, `contents/ci-cd/gitlab-ci-cd.md` |
| Cloud deployment | `contents/deployment/aws-bedrock.md`, `contents/deployment/google-vertex-ai.md`, `contents/deployment/microsoft-foundry.md` |
| IDE integrations | `contents/surfaces/vs-code.md`, `contents/surfaces/jetbrains.md` |
| Interactive mode | `contents/reference/interactive-mode.md` |

## When to use

Use this skill when the user asks about:
- Creating or using Claude Code skills (custom slash commands)
- Configuring subagents or agent teams
- Setting up hooks (PreToolUse, PostToolUse, SessionStart, etc.)
- Connecting MCP servers
- Creating or distributing plugins
- CLI flags and commands
- Settings, permissions, and configuration scopes
- Deploying Claude Code with AWS Bedrock, Vertex AI, or Azure
- GitHub Actions or GitLab CI/CD integration
- Programmatic/headless usage of Claude Code
- Memory management and CLAUDE.md hierarchy
- Authentication, costs, and account management

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
