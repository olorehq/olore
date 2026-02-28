# claude-code Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/getting-started/` | Overview, quickstart, setup, workflows, best practices | 8 |
| `contents/surfaces/` | IDE integrations, desktop, web, Chrome, Slack, remote control | 8 |
| `contents/build-with-claude-code/` | Skills, subagents, plugins, hooks, MCP, agent teams, programmatic usage | 11 |
| `contents/ci-cd/` | GitHub Actions and GitLab CI/CD integration | 2 |
| `contents/deployment/` | Cloud providers, network config, LLM gateway, devcontainer, sandboxing | 8 |
| `contents/configuration/` | Settings, permissions, memory, model config, keybindings, terminal | 8 |
| `contents/reference/` | CLI reference, hooks reference, interactive mode, plugins reference, changelog | 6 |
| `contents/account/` | Authentication, costs, usage monitoring, analytics, security, compliance | 7 |

## getting-started/

| File | Description |
|------|-------------|
| `overview.md` | What Claude Code is, supported surfaces, and how to get started |
| `quick-start.md` | Step-by-step quickstart guide for installation and first use |
| `setup.md` | Detailed setup instructions and configuration |
| `common-workflows.md` | Common development workflows including plan mode and task management |
| `best-practices.md` | Recommended patterns and tips for effective use |
| `how-claude-code-works.md` | Architecture and internals of Claude Code |
| `features-overview.md` | Overview of all major features |
| `fast-mode.md` | Fast mode and how it affects performance |

## surfaces/

| File | Description |
|------|-------------|
| `vs-code.md` | VS Code extension installation and usage |
| `jetbrains.md` | JetBrains IDE plugin integration |
| `desktop.md` | Desktop app overview and capabilities |
| `desktop-quickstart.md` | Quickstart guide for the desktop application |
| `claude-code-on-the-web.md` | Using Claude Code through the web interface |
| `chrome.md` | Chrome browser extension integration |
| `slack.md` | Slack integration setup and usage |
| `remote-control.md` | Remote control session from Claude.ai or Claude app |

## build-with-claude-code/

| File | Description |
|------|-------------|
| `agent-teams.md` | Coordinating multiple Claude Code sessions as a team |
| `sub-agents.md` | Creating and using specialized subagents |
| `plugins.md` | Creating custom plugins with skills, agents, hooks, and MCP |
| `discover-plugins.md` | How to find and install existing plugins |
| `plugin-marketplaces.md` | Plugin marketplaces and distribution |
| `skills.md` | Creating and managing skills (custom slash commands) |
| `output-styles.md` | Configuring output format and style |
| `hooks-guide.md` | Guide for automating workflows with hooks |
| `programmatic-usage.md` | Headless/programmatic usage via the SDK |
| `mcp.md` | Model Context Protocol server setup and usage |
| `troubleshooting.md` | Common issues and how to resolve them |

## ci-cd/

| File | Description |
|------|-------------|
| `github-actions.md` | Integrating Claude Code into GitHub Actions workflows |
| `gitlab-ci-cd.md` | Integrating Claude Code into GitLab CI/CD pipelines |

## deployment/

| File | Description |
|------|-------------|
| `third-party-integrations.md` | Third-party provider integrations overview |
| `aws-bedrock.md` | Using Claude Code via AWS Bedrock |
| `google-vertex-ai.md` | Using Claude Code via Google Vertex AI |
| `microsoft-foundry.md` | Using Claude Code via Microsoft Azure AI Foundry |
| `network-config.md` | Network configuration, proxies, and firewall settings |
| `llm-gateway.md` | LLM gateway setup for routing and management |
| `devcontainer.md` | Using Claude Code in dev containers |
| `sandboxing.md` | Sandboxing and isolation for secure execution |

## configuration/

| File | Description |
|------|-------------|
| `settings.md` | All settings options with scope system (user, project, managed) |
| `server-managed-settings.md` | Server-managed settings for enterprise deployment |
| `terminal-config.md` | Terminal and shell configuration |
| `model-config.md` | Model selection and configuration |
| `memory.md` | Memory management and CLAUDE.md hierarchy |
| `statusline.md` | Statusline and UI configuration |
| `keybindings.md` | Keyboard shortcut customization |
| `permissions.md` | Permission rules, modes (default, plan, acceptEdits, dontAsk) |

## reference/

| File | Description |
|------|-------------|
| `cli-reference.md` | Complete CLI commands and flags reference |
| `interactive-mode.md` | Keyboard shortcuts and interactive REPL features |
| `checkpointing.md` | Session checkpointing and state management |
| `hooks.md` | Hooks reference: events, schemas, JSON formats, exit codes |
| `plugins-reference.md` | Complete technical reference for plugins |
| `changelog.md` | Release notes and version history |

## account/

| File | Description |
|------|-------------|
| `authentication.md` | Sign-in methods including SSO authentication |
| `costs.md` | Pricing and cost management |
| `monitoring-usage.md` | Monitoring API usage and spend |
| `analytics.md` | Usage analytics and reporting |
| `data-usage.md` | Data handling and retention policies |
| `security.md` | Security practices and disclosures |
| `legal-and-compliance.md` | Legal terms and compliance documentation |
