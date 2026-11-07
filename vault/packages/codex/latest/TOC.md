# codex Table of Contents

## Directory Map

```
contents/
├── getting-started/            # Overview, models, pricing, prompting (13 files)
├── surfaces/                   # CLI, IDE, desktop, cloud, mobile (14 files)
├── environments/               # Cloud, local, worktrees, modes (6 files)
├── configuration/              # config.toml, memories, env vars (13 files)
├── agent-configuration/        # AGENTS.md, rules, hooks, subagents (4 files)
├── extensibility/              # Skills, plugins, MCP (8 files)
├── security-and-permissions/   # Sandbox, approvals, permissions (9 files)
├── auth/                       # Authentication, tokens (3 files)
├── automation-and-sdk/         # Non-interactive, SDK, GitHub Action, app-server (9 files)
├── reference/                  # CLI/IDE/app commands and settings (6 files)
├── enterprise/                 # Admin, gateways, compliance (22 files)
└── codex-security/             # Codex Security scans (23 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started/codex-overview.md` |
| Install/use CLI | `contents/surfaces/cli.md` |
| Configure Codex | `contents/configuration/config-basic.md` |
| Config key lookup | `contents/configuration/config-reference.md` |
| AGENTS.md | `contents/agent-configuration/agents-md.md` |
| CLI flags | `contents/reference/command-line-options.md` |
| Sandbox/approvals | `contents/security-and-permissions/sandboxing.md` |
| CI / scripts | `contents/automation-and-sdk/non-interactive-mode.md` |
| Enterprise rollout | `contents/enterprise/admin-setup.md` |

## Detailed Structure

### getting-started/ (13 files)

| File | Description |
|------|-------------|
| `codex-overview.md` | Features landing page: workflows and capabilities across ChatGPT and Codex |
| `feature-maturity.md` | Maturity labels (experimental, beta, etc.) and what support to expect |
| `glossary.md` | Quick reference of Codex terms across app, CLI, IDE, cloud, SDK |
| `image-inputs.md` | Attaching images to prompts for visual context |
| `import-from-another-agent.md` | Import instructions, settings, skills, plugins from other agents |
| `long-running-work.md` | Giving clear outcomes and constraints for multi-step work |
| `model-selection.md` | How model availability, tools, and reasoning settings vary by surface |
| `models.md` | Choosing models by speed, cost, and capability |
| `open-source.md` | Open-source parts of Codex on GitHub |
| `pricing.md` | Plans, usage, credits, and model retirement notices |
| `prompting.md` | How to write effective prompts |
| `web-search.md` | First-party web search tool and prompt-injection caution |
| `working-with-agents.md` | What agents are and how they choose steps and tools |

### surfaces/ (14 files)

| File | Description |
|------|-------------|
| `browser.md` | Browser surface in the desktop app (not in CLI/IDE) |
| `cli.md` | Codex CLI: inspect, edit, run commands from the terminal |
| `cloud-internet-access.md` | Legacy Codex Cloud internet access settings |
| `cloud.md` | Codex Cloud: delegate tasks from web, mobile, desktop |
| `codex-micro.md` | Codex Micro hardware collaboration with Work Louder |
| `composer-predictions.md` | Autocomplete-style next-message suggestions in the desktop app |
| `computer-use.md` | Computer Use in the desktop app: availability and setup |
| `desktop-app.md` | ChatGPT desktop app: parallel projects, files, computer use |
| `ide-extension.md` | Codex IDE extension (VS Code) usage |
| `integrated-terminal.md` | Per-chat terminal in the desktop app |
| `linux-app.md` | ChatGPT desktop app for Linux (preview) install |
| `mobile.md` | Codex on mobile: follow progress, approve actions |
| `remote-connections.md` | Accessing work running on another device or machine |
| `windows-app.md` | ChatGPT desktop app for Windows |

### environments/ (6 files)

| File | Description |
|------|-------------|
| `cloud-environment-legacy.md` | Legacy Codex Cloud environment documentation |
| `cloud-environments.md` | Current cloud environments for background tasks |
| `git-worktrees.md` | Worktrees for parallel independent chats |
| `local-environment.md` | Local environment setup steps and project actions |
| `modes.md` | Codex environments in the desktop app |
| `network-file-systems.md` | Running Codex with an NFS-mounted home directory |

### configuration/ (13 files)

| File | Description |
|------|-------------|
| `cli-customization.md` | Terminal-specific options for interactive CLI sessions |
| `computer-history.md` | Computer History feature (off by default) and controls |
| `config-advanced.md` | Providers, policies, integrations, config and state locations |
| `config-basic.md` | `~/.codex/config.toml` and project overrides basics |
| `config-reference.md` | Searchable reference of all config keys |
| `config-sample.md` | Sample config.toml |
| `custom-prompts.md` | Deprecated custom prompts (use skills instead) |
| `customization-overview.md` | Overview of customizing Codex for a team |
| `environment-variables.md` | Environment variables vs config.toml settings |
| `memories.md` | Carrying context from earlier work across chats |
| `notifications.md` | Notifications when work needs attention |
| `overview.md` | Configuration landing page |
| `speed.md` | Faster model speed in exchange for higher usage |

### agent-configuration/ (4 files)

| File | Description |
|------|-------------|
| `agents-md.md` | Layering global and project AGENTS.md instructions |
| `hooks.md` | Hooks framework for running scripts in the agent loop |
| `rules.md` | Rules controlling which commands run outside the sandbox |
| `subagents.md` | Spawning specialized subagent workflows |

### extensibility/ (8 files)

| File | Description |
|------|-------------|
| `annotations-extensibility.md` | Browser Annotation API for customizing selections |
| `build-plugins.md` | Turning a repeated workflow into a plugin |
| `build-skills.md` | Authoring agent skills |
| `mcp-server-removal.md` | Removal of `codex mcp-server` command and binary |
| `mcp.md` | Model Context Protocol servers and tools |
| `plugins.md` | Plugins bundling reusable workflows |
| `record-and-replay.md` | Record & Replay on macOS |
| `skills-and-plugins.md` | How skills and plugins relate |

### security-and-permissions/ (9 files)

| File | Description |
|------|-------------|
| `agent-approvals-security.md` | Approvals and security model overview |
| `auto-review.md` | Reviewer agent that handles eligible approval requests |
| `cyber-safety-recommended-configuration.md` | Recommended controls for cybersecurity workflows |
| `cyber-safety.md` | Trusted Access and Daybreak defensive cyber models |
| `permission-modes.md` | Permission modes for local actions in app, CLI, IDE |
| `permissions.md` | Permission profiles (beta) |
| `sandboxing.md` | Sandbox boundaries for autonomous action |
| `windows-sandbox.md` | Native Windows sandbox |
| `wsl.md` | Running Codex with WSL2 |

### auth/ (3 files)

| File | Description |
|------|-------------|
| `access-tokens.md` | Workspace access tokens for non-interactive workflows |
| `authentication.md` | Sign-in methods and gateway authentication |
| `sign-in-with-chatgpt.md` | Sign in with ChatGPT for third-party apps |

### automation-and-sdk/ (9 files)

| File | Description |
|------|-------------|
| `app-server.md` | app-server interface that powers rich clients |
| `code-review.md` | Using Codex for code review |
| `codex-sdk.md` | Controlling Codex programmatically |
| `github-action.md` | `openai/codex-action@v1` for CI/CD |
| `github-pr-review.md` | Codex review of GitHub pull requests |
| `gitlab-mr-review.md` | Codex review of GitLab merge requests |
| `linear.md` | Delegating Linear issues to Codex |
| `non-interactive-mode.md` | Running Codex from scripts and CI (`codex exec`) |
| `scheduled-tasks.md` | Recurring background tasks |

### reference/ (6 files)

| File | Description |
|------|-------------|
| `app-commands.md` | Desktop app commands and keyboard shortcuts |
| `app-settings.md` | Desktop app settings panel |
| `command-line-options.md` | All CLI commands and flags (developer-commands, surface=cli) |
| `ide-commands.md` | VS Code Command Palette commands (developer-commands, surface=ide) |
| `ide-settings.md` | IDE extension settings layers |
| `troubleshooting.md` | Troubleshooting common problems |

### enterprise/ (22 files)

| File | Description |
|------|-------------|
| `admin-setup.md` | Admin rollout guide for ChatGPT Enterprise |
| `administration.md` | Administration landing page |
| `agent-security.md` | Agent Security policies in Admin Console |
| `amazon-bedrock.md` | Using Codex with Amazon Bedrock |
| `analytics-api.md` | Aggregated usage and activity metrics API |
| `compliance-api.md` | Compliance API and audit events |
| `configuration-server.md` | Self-hosting Codex configuration for a team |
| `connect-to-a-gateway.md` | Connecting Codex to an organization model gateway |
| `gateway-compatibility.md` | Gateway API compatibility requirements |
| `governance.md` | Governance of analytics and programmatic Codex activity |
| `manage-app-updates.md` | Managing desktop app updates |
| `managed-configuration.md` | Admin-set requirements and defaults |
| `plugin-controls.md` | Admin controls for plugins |
| `plugin-management.md` | Importing and syncing plugins from GitHub |
| `roll-out-a-gateway.md` | Gateway administrator rollout steps |
| `security-administration.md` | Security administration landing page |
| `security-cookbook.md` | Choosing access and action boundaries for rollout |
| `service-accounts.md` | Service accounts for headless CI workflows |
| `skill-controls.md` | Admin controls for skills |
| `usage-insights.md` | Usage Insights in Admin Console |
| `windows-deployment.md` | Deploying Windows app and CLI on managed devices |
| `workspace-model-availability.md` | Which models are available per workspace |

### codex-security/ (23 files)

| File | Description |
|------|-------------|
| `cli-bulk-scans.md` | Bulk scanning many repositories with the CLI |
| `cli-ci.md` | Security CLI in CI/CD overview |
| `cli-faq.md` | Security CLI FAQ |
| `cli-github-actions.md` | Security scans in GitHub Actions |
| `cli-gitlab-ci.md` | Security scans in GitLab CI/CD |
| `cli-quickstart.md` | Standard scan of a local repo with the CLI |
| `cli-reference.md` | `codex-security` commands, flags, exit codes |
| `cloud-faq.md` | Codex Security Cloud FAQ |
| `cloud-setup.md` | First scan of a connected GitHub repo in Cloud |
| `overview.md` | Codex Security overview |
| `plugin-code-changes.md` | Security review of a change set |
| `plugin-deep-scans.md` | Multi-pass deep scans |
| `plugin-export-findings.md` | Exporting and tracking findings |
| `plugin-fix-findings.md` | Patching and verifying findings |
| `plugin-quickstart.md` | Installing the plugin and first scan |
| `plugin-scans.md` | Standard scans of repos or folders |
| `plugin-security-hardening.md` | Proposing security hardening |
| `plugin-triage-backlog.md` | Triaging existing findings |
| `plugin-vulnerability-reports.md` | Writing vulnerability reports |
| `plugin-workbench.md` | Security workbench for scans and findings |
| `sdk.md` | Codex Security TypeScript SDK |
| `security-review.md` | Security Review for Enterprise/Business/Edu |
| `threat-model.md` | Improving the Cloud threat model |
