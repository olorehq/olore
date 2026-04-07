# claude-code Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/getting-started/` | Overview, quickstart, setup, workflows, best practices | 8 |
| `contents/surfaces/` | IDE integrations and deployment surfaces | 8 |
| `contents/build-with-claude-code/` | Agents, plugins, skills, hooks, MCP, programmatic usage | 11 |
| `contents/ci-cd/` | GitHub Actions and GitLab CI/CD integration | 2 |
| `contents/deployment/` | Cloud providers, network config, sandboxing | 7 |
| `contents/configuration/` | Settings, permissions, memory, model config | 8 |
| `contents/reference/` | CLI reference, hooks spec, plugins spec, changelog | 6 |
| `contents/account/` | Authentication, costs, monitoring, security | 7 |

## getting-started/

| File | Description |
|------|-------------|
| `overview.md` | Claude Code product overview and introduction |
| `quick-start.md` | Quickstart guide to get up and running |
| `setup.md` | Advanced setup and installation options |
| `common-workflows.md` | Common development workflows with Claude Code |
| `best-practices.md` | Best practices for effective Claude Code usage |
| `how-claude-code-works.md` | Architecture and internals of Claude Code |
| `features-overview.md` | Overview of all features and extensions |
| `fast-mode.md` | How to speed up responses with fast mode |

## surfaces/

| File | Description |
|------|-------------|
| `vs-code.md` | VS Code extension: inline diffs, @-mentions, shortcuts |
| `jetbrains.md` | JetBrains IDE plugin for IntelliJ, PyCharm, WebStorm |
| `desktop.md` | Claude Code Desktop app: parallel sessions, visual diffs, PR monitoring |
| `desktop-quickstart.md` | Desktop app installation and first session guide |
| `claude-code-on-the-web.md` | Running Claude Code tasks asynchronously on cloud |
| `chrome.md` | Chrome browser extension for web app testing and automation |
| `slack.md` | Delegating coding tasks from Slack via @Claude |
| `remote-control.md` | Continuing local sessions from phone or browser |

## build-with-claude-code/

| File | Description |
|------|-------------|
| `agent-teams.md` | Coordinating multiple Claude Code instances as a team |
| `sub-agents.md` | Creating specialized AI subagents for task-specific workflows |
| `plugins.md` | Creating custom plugins with skills, agents, hooks, and MCP servers |
| `discover-plugins.md` | Finding and installing plugins from marketplaces |
| `plugin-marketplaces.md` | Building and hosting plugin marketplaces |
| `skills.md` | Creating and sharing skills to extend Claude's capabilities |
| `output-styles.md` | Adapting Claude Code output for non-engineering use cases |
| `hooks-guide.md` | Running shell commands automatically at lifecycle events |
| `programmatic-usage.md` | Using the Agent SDK to run Claude Code from CLI, Python, or TypeScript |
| `mcp.md` | Connecting Claude Code to tools via the Model Context Protocol |
| `troubleshooting.md` | Solutions to common installation and usage issues |

## ci-cd/

| File | Description |
|------|-------------|
| `github-actions.md` | Integrating Claude Code with GitHub Actions for AI-powered automation |
| `gitlab-ci-cd.md` | Integrating Claude Code with GitLab CI/CD pipelines |

## deployment/

| File | Description |
|------|-------------|
| `third-party-integrations.md` | Overview of enterprise deployment options and cloud providers |
| `google-vertex-ai.md` | Configuring Claude Code through Google Vertex AI |
| `microsoft-foundry.md` | Configuring Claude Code through Microsoft Foundry |
| `network-config.md` | Enterprise proxy, custom CA, and mTLS configuration |
| `llm-gateway.md` | Routing Claude Code through LLM gateway solutions |
| `devcontainer.md` | Using the reference devcontainer for consistent environments |
| `sandboxing.md` | Filesystem and network isolation for safer agent execution |

## configuration/

| File | Description |
|------|-------------|
| `settings.md` | Global and project-level settings, environment variables |
| `server-managed-settings.md` | Centrally managing settings for organizations via Claude.ai |
| `terminal-config.md` | Optimizing terminal configuration for Claude Code |
| `model-config.md` | Available models and model aliases like `opusplan` |
| `memory.md` | CLAUDE.md persistent instructions and auto memory |
| `statusline.md` | Configuring a custom status bar for context and cost tracking |
| `keybindings.md` | Customizing keyboard shortcuts |
| `permissions.md` | Fine-grained permission rules, modes, and managed policies |

## reference/

| File | Description |
|------|-------------|
| `cli-reference.md` | Complete CLI commands and flags reference |
| `interactive-mode.md` | Keyboard shortcuts, input modes, interactive features |
| `checkpointing.md` | Tracking, rewinding, and summarizing Claude's edits |
| `hooks.md` | Hook events, configuration schema, JSON formats, exit codes |
| `plugins-reference.md` | Technical reference for the plugin system schemas and CLI |
| `changelog.md` | Release notes and version history |

## account/

| File | Description |
|------|-------------|
| `authentication.md` | Login methods for individuals, teams, and organizations |
| `costs.md` | Token usage, spend limits, and cost reduction strategies |
| `monitoring-usage.md` | OpenTelemetry setup for usage and cost tracking |
| `analytics.md` | Usage metrics, adoption tracking, and velocity dashboards |
| `data-usage.md` | Anthropic data usage and retention policies |
| `security.md` | Security safeguards and safe usage best practices |
| `legal-and-compliance.md` | Legal agreements and compliance certifications |
