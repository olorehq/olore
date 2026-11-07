# claude-code Table of Contents

## Directory Map

```
contents/
├── administration/    #       36 files
├── agent-sdk/    #       32 files
├── build-with-claude-code/    #       22 files
├── configuration/    #       26 files
├── getting-started/    #       46 files
├── plugins/    #       31 files
├── reference/    #        9 files
├── resources/    #        1 files
├── what-s-new/    #        1 files
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started/quickstart.md` |
| Overview | `contents/getting-started/overview.md` |
| CLI / env vars | `contents/reference/cli-reference.md`, `contents/reference/env-vars.md` |
| Hooks | `contents/reference/hooks.md` |
| Settings | `contents/configuration/` |
| Agent SDK | `contents/agent-sdk/` |
| Plugins | `contents/plugins/` |
| Admin / deployment | `contents/administration/` |

## Detailed Structure

### administration/ (      36 files)

| File | Description |
|------|-------------|
| `admin-setup.md` | Set up Claude Code for your organization |
| `amazon-bedrock.md` | Claude Code on Amazon Bedrock |
| `analytics.md` | Track team usage with analytics |
| `authentication.md` | Authentication |
| `auto-mode-config.md` | Configure auto mode |
| `champion-kit.md` | Champion kit |
| `claude-apps-gateway-config.md` | Claude apps gateway configuration |
| `claude-apps-gateway-deploy.md` | Claude apps gateway deployment and operations |
| `claude-apps-gateway-on-aws.md` | Deploy Claude apps gateway on AWS |
| `claude-apps-gateway-on-gcp.md` | Deploy Claude apps gateway on Google Cloud |
| `claude-apps-gateway-spend-limits.md` | Claude apps gateway spend limits |
| `claude-apps-gateway.md` | Claude apps gateway for Amazon Bedrock, Claude Platform on AWS, Google Cloud, and Microsoft Foundry |
| `claude-platform-on-aws.md` | Claude Code on Claude Platform on AWS |
| `communications-kit.md` | Communications kit |
| `corporate-launcher.md` | Run Claude Code behind a corporate launcher |
| `costs.md` | Manage costs effectively |
| `data-usage.md` | Data usage |
| `devcontainer.md` | Development containers |
| `feature-availability.md` | Feature availability |
| `gateways.md` | Run Claude Code through a gateway |
| `google-vertex-ai.md` | Claude Code on Google Cloud's Agent Platform |
| `hipaa-setup.md` | Set up Claude Code (local mode) for a HIPAA-ready organization |
| `llm-gateway-connect.md` | Connect Claude Code to an LLM gateway |
| `llm-gateway-protocol.md` | Claude Code gateway compatibility guide |
| `llm-gateway-rollout.md` | Roll out an LLM gateway for your organization |
| `llm-gateway.md` | Other LLM gateways |
| `managed-mcp.md` | Control MCP server access for your organization |
| `managed-settings.md` | Deploy managed settings |
| `microsoft-foundry.md` | Claude Code on Microsoft Foundry |
| `monitoring-usage.md` | Monitoring |
| `network-config.md` | Enterprise network configuration |
| `security.md` | Security |
| `server-managed-settings.md` | Configure server-managed settings |
| `setup.md` | Advanced setup |
| `third-party-integrations.md` | Enterprise deployment overview |
| `zero-data-retention.md` | Zero data retention |

### agent-sdk/ (      32 files)

| File | Description |
|------|-------------|
| `agent-sdk-agent-loop.md` | How the agent loop works |
| `agent-sdk-claude-code-features.md` | Use Claude Code features in the SDK |
| `agent-sdk-configuration.md` | Configure your agent |
| `agent-sdk-cost-tracking.md` | Track cost and usage |
| `agent-sdk-custom-tools.md` | Give Claude custom tools |
| `agent-sdk-examples.md` | Examples |
| `agent-sdk-file-checkpointing.md` | Rewind file changes with checkpointing |
| `agent-sdk-hooks.md` | Intercept and control agent behavior with hooks |
| `agent-sdk-hosting.md` | Hosting the Agent SDK |
| `agent-sdk-mcp.md` | Connect to external tools with MCP |
| `agent-sdk-migration-guide.md` | Migrate to Claude Agent SDK |
| `agent-sdk-modifying-system-prompts.md` | Modifying system prompts |
| `agent-sdk-observability.md` | Observability with OpenTelemetry |
| `agent-sdk-overview.md` | Agent SDK overview |
| `agent-sdk-permissions.md` | Configure permissions |
| `agent-sdk-plugins.md` | Plugins in the SDK |
| `agent-sdk-python.md` | Agent SDK reference - Python |
| `agent-sdk-quickstart.md` | Quickstart |
| `agent-sdk-secure-deployment.md` | Securely deploying AI agents |
| `agent-sdk-session-storage.md` | Persist sessions to external storage |
| `agent-sdk-sessions.md` | Work with sessions |
| `agent-sdk-skills.md` | Extend agents with skills |
| `agent-sdk-streaming-output.md` | Stream responses in real-time |
| `agent-sdk-streaming-vs-single-mode.md` | Streaming Input |
| `agent-sdk-structured-outputs.md` | Get structured output from agents |
| `agent-sdk-subagents.md` | Subagents in the SDK |
| `agent-sdk-todo-tracking.md` | Track todos |
| `agent-sdk-tool-search.md` | Scale to many tools with tool search |
| `agent-sdk-troubleshooting.md` | Troubleshoot the Agent SDK |
| `agent-sdk-typescript-v2-preview.md` | TypeScript SDK V2 session API (removed) |
| `agent-sdk-typescript.md` | Agent SDK reference - TypeScript |
| `agent-sdk-user-input.md` | Handle approvals and user input |

### build-with-claude-code/ (      22 files)

| File | Description |
|------|-------------|
| `agent-teams.md` | Orchestrate teams of Claude Code sessions |
| `agent-view.md` | Manage multiple agents with agent view |
| `agents.md` | Run agents in parallel |
| `artifacts.md` | Share session output as artifacts |
| `channels.md` | Push events into a running session with channels |
| `cross-session-messaging.md` | Message your other Claude Code sessions |
| `debug-your-config.md` | Debug your configuration |
| `deep-links.md` | Launch sessions from links |
| `errors.md` | Error reference |
| `goal.md` | Keep Claude working toward a goal |
| `headless.md` | Run Claude Code programmatically |
| `hooks-guide.md` | Automate actions with hooks |
| `large-codebases.md` | Set up Claude Code in a monorepo or large codebase |
| `mcp-quickstart.md` | Connect to MCP servers |
| `mcp.md` | Connect Claude Code to tools via MCP |
| `scheduled-tasks.md` | Run prompts on a schedule |
| `skills.md` | Extend Claude with skills |
| `sub-agents.md` | Create custom subagents |
| `troubleshoot-install.md` | Troubleshoot installation and login |
| `troubleshooting.md` | Troubleshooting |
| `workflows.md` | Orchestrate subagents at scale with dynamic workflows |
| `worktrees.md` | Run parallel sessions with worktrees |

### configuration/ (      26 files)

| File | Description |
|------|-------------|
| `accessibility.md` | Use Claude Code with a screen reader |
| `advisor.md` | Escalate hard decisions with the advisor tool |
| `auto-mode-classifier-billing.md` | Auto mode classifier request charges |
| `cloud-environments.md` | Configure cloud environments |
| `fast-mode.md` | Speed up responses with fast mode |
| `fullscreen.md` | Fullscreen rendering |
| `keybindings.md` | Customize keyboard shortcuts |
| `model-config.md` | Model configuration |
| `output-styles.md` | Output styles |
| `permission-modes.md` | Choose a permission mode |
| `permissions.md` | Configure permissions |
| `sandbox-environments.md` | Choose a sandbox environment |
| `sandboxing.md` | Configure the sandboxed Bash tool |
| `self-hosted-environments-configuration.md` | Customize sessions in self-hosted environments |
| `self-hosted-environments-deploy.md` | Deploy self-hosted environments to production |
| `self-hosted-environments-identity.md` | Verify session identity in self-hosted environments |
| `self-hosted-environments-quickstart.md` | Self-hosted environments quickstart |
| `self-hosted-environments-reference.md` | Self-hosted environments reference |
| `self-hosted-environments-testing.md` | Test self-hosted environments end to end |
| `self-hosted-environments.md` | Self-hosted environments |
| `settings-example.md` | Example settings files |
| `settings-reference.md` | All settings |
| `settings.md` | Settings files and precedence |
| `statusline.md` | Customize your status line |
| `terminal-config.md` | Configure your terminal for Claude Code |
| `voice-dictation.md` | Voice dictation |

### getting-started/ (      46 files)

| File | Description |
|------|-------------|
| `best-practices.md` | Best practices for Claude Code |
| `changelog.md` | Claude Code changelog |
| `chrome.md` | Use Claude Code with Chrome |
| `claude-code-on-the-web.md` | Use Claude Code in the cloud |
| `claude-directory.md` | Explore the .claude directory |
| `claude-projects.md` | Let Claude coordinate ongoing work with Projects |
| `claude-security.md` | Scan your codebase for vulnerabilities |
| `claude-tag.md` | claude-tag |
| `code-review-costs.md` | Code Review costs and usage |
| `code-review-customize.md` | Customize Code Review |
| `code-review-local.md` | Review locally with /code-review |
| `code-review-pull-requests.md` | Read and request reviews on a pull request |
| `code-review-setup.md` | Set up Code Review |
| `code-review-troubleshooting.md` | Troubleshoot Code Review |
| `code-review.md` | Code Review |
| `common-workflows.md` | Common workflows |
| `computer-use.md` | Let Claude use your computer from the CLI |
| `context-window.md` | Explore the context window |
| `desktop-ios-simulator.md` | Test iOS apps in the simulator |
| `desktop-linux.md` | Claude Desktop on Linux (beta) |
| `desktop-quickstart.md` | Get started with the desktop app |
| `desktop-scheduled-tasks.md` | Schedule recurring tasks in Claude Code Desktop |
| `desktop-wsl.md` | Claude Code Desktop in WSL |
| `desktop.md` | Desktop application |
| `features-overview.md` | Extend Claude Code |
| `github-actions-cloud-providers.md` | Use Claude Code GitHub Actions with cloud providers |
| `github-actions.md` | Claude Code GitHub Actions |
| `github-enterprise-server.md` | Claude Code with GitHub Enterprise Server |
| `gitlab-ci-cd.md` | Claude Code GitLab CI/CD |
| `how-claude-code-works.md` | How Claude Code works |
| `jetbrains.md` | JetBrains IDEs |
| `memory.md` | How Claude remembers your project |
| `mobile.md` | Claude Code on mobile |
| `overview.md` | Overview |
| `platforms.md` | Platforms and integrations |
| `prompt-caching.md` | How Claude Code uses prompt caching |
| `prompt-library.md` | Prompt library |
| `quickstart.md` | Quickstart |
| `remote-control.md` | Continue local sessions from any device with Remote Control |
| `routines.md` | Automate work with scheduled tasks |
| `security-guidance.md` | Catch security issues as Claude writes code |
| `sessions.md` | Manage sessions |
| `slack.md` | Claude Code in Slack |
| `ultrareview.md` | Find bugs with ultrareview |
| `vs-code.md` | Use Claude Code in VS Code |
| `web-quickstart.md` | Get started with Claude Code in the cloud |

### plugins/ (      31 files)

| File | Description |
|------|-------------|
| `plugin-evals.md` | Test plugins with evals |
| `plugins-anthropic-marketplaces.md` | Anthropic's marketplaces |
| `plugins-cli-hints.md` | Recommend your plugin from your CLI |
| `plugins-cli-reference.md` | Plugin commands reference |
| `plugins-code-intelligence.md` | Code intelligence plugins |
| `plugins-components.md` | Add components to a plugin |
| `plugins-create-marketplace.md` | Create a marketplace |
| `plugins-create.md` | Create a Claude Code plugin |
| `plugins-dependencies.md` | Plugin dependencies |
| `plugins-host-marketplace.md` | Host and maintain a marketplace |
| `plugins-install.md` | Install and manage plugins |
| `plugins-loading.md` | Plugin loading reference |
| `plugins-manifest-reference.md` | Plugin manifest reference |
| `plugins-marketplace-reference.md` | Marketplace reference |
| `plugins-measure.md` | Measure plugin cost and usage |
| `plugins-mods-admin.md` | Manage mods for your organization |
| `plugins-mods-api.md` | Use the mods API |
| `plugins-mods-create.md` | Create a mod |
| `plugins-mods-events.md` | React to events with a mod |
| `plugins-mods-gallery.md` | Interface gallery for mods |
| `plugins-mods-interface.md` | Draw in the interface with a mod |
| `plugins-mods-overview.md` | Mods overview |
| `plugins-mods-reference.md` | Mods reference |
| `plugins-mods-test.md` | Test a mod |
| `plugins-mods-troubleshoot.md` | Troubleshoot a mod |
| `plugins-org.md` | Manage Claude Code plugins for your organization |
| `plugins-overview.md` | Plugins overview |
| `plugins-publish.md` | Publish and distribute a plugin |
| `plugins-relevance.md` | Recommend plugins for your org |
| `plugins-security.md` | Plugin security and trust |
| `plugins-troubleshooting.md` | Troubleshoot plugins |

### reference/ (       9 files)

| File | Description |
|------|-------------|
| `channels-reference.md` | Channels reference |
| `checkpointing.md` | Checkpointing |
| `cli-reference.md` | CLI reference |
| `commands.md` | Commands |
| `env-vars.md` | Environment variables |
| `glossary.md` | Glossary |
| `hooks.md` | Hooks reference |
| `interactive-mode.md` | Interactive mode |
| `tools-reference.md` | Tools reference |

### resources/ (       1 files)

| File | Description |
|------|-------------|
| `legal-and-compliance.md` | Legal and compliance |

### what-s-new/ (       1 files)

| File | Description |
|------|-------------|
| `whats-new-index.md` | What's new |
