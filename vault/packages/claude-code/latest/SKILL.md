---
name: olore-claude-code-latest
description: Local Claude Code documentation reference (latest). Use when asked about Claude Code features, CLI commands, agent skills, plugins, subagents, MCP, deployment, configuration, hooks, or troubleshooting.
---

# Claude Code Documentation

Claude Code is Anthropic's agentic coding tool that lives in your terminal and helps you turn ideas into code. It works in your existing environment with your preferred tools, can directly edit files and run commands, and is composable and scriptable following Unix philosophy.

## Documentation Structure

```
docs/
├── getting-started/         # Installation, quickstart, common workflows (3 files)
├── build-with-claude-code/  # Skills, plugins, subagents, MCP, hooks (9 files)
├── deployment/              # Enterprise deployment options (8 files)
├── configuration/           # Settings, models, memory (4 files)
└── reference/               # CLI, slash commands, API reference (6 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Installation and setup | `contents/getting-started/overview.md`, `contents/getting-started/quick-start.md` |
| Basic workflows | `contents/getting-started/common-workflows.md` |
| Agent Skills | `contents/build-with-claude-code/agent-skills.md` |
| Custom subagents | `contents/build-with-claude-code/create-custom-subagents.md` |
| Plugins | `contents/build-with-claude-code/create-plugins.md`, `contents/build-with-claude-code/discover-plugins.md` |
| MCP integration | `contents/build-with-claude-code/mcp.md` |
| Hooks system | `contents/build-with-claude-code/hooks.md`, `contents/reference/hooks-reference.md` |
| Headless usage | `contents/build-with-claude-code/programmatic-usage.md` |
| CLI commands | `contents/reference/cli-reference.md` |
| Slash commands | `contents/reference/slash-commands.md` |
| Interactive mode | `contents/reference/interactive-mode.md` |
| Configuration | `contents/configuration/settings.md` |
| Model selection | `contents/configuration/model-configuration.md` |
| Memory management | `contents/configuration/memory-management.md` |
| Enterprise deployment | `contents/deployment/overview.md` |
| AWS Bedrock | `contents/deployment/aws-bedrock.md` |
| Google Vertex AI | `contents/deployment/google-vertex-ai.md` |
| Azure deployment | `contents/deployment/microsoft-foundry.md` |
| Network configuration | `contents/deployment/network-configuration.md` |
| Troubleshooting | `contents/build-with-claude-code/trouble-shooting.md` |

## When to use

Use this skill when the user asks about:
- Claude Code installation, setup, or getting started
- CLI commands, flags, or usage patterns
- Creating or managing Agent Skills
- Building custom subagents or using built-in agents
- Creating or installing plugins
- Model Context Protocol (MCP) integration
- Hooks for tool execution events
- Programmatic usage or headless mode
- Slash commands and interactive features
- Configuration settings and customization
- Model selection and configuration
- Memory and context management
- Enterprise deployment (AWS, GCP, Azure)
- Network configuration or proxies
- Troubleshooting issues with Claude Code

## How to find information

1. Use the Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by category
3. Read specific files from `contents/{path}` for detailed information
