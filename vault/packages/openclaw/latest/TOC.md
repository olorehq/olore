# openclaw Table of Contents

## Directory Map

```
contents/
├── start/              # Getting started, quickstart, setup (13 files)
├── install/            # Installation guides for all platforms (20 files)
├── channels/           # Messaging platform integrations (29 files)
├── providers/          # AI model provider configurations (29 files)
├── gateway/            # Gateway configuration and networking (32 files)
├── cli/                # CLI command reference (46 files)
├── tools/              # Agent tools: browser, exec, skills, plugins (26 files)
├── plugins/            # Plugin development and manifest (5 files)
├── concepts/           # Architecture, sessions, memory, models (28 files)
├── automation/         # Webhooks, cron jobs, hooks, polling (8 files)
├── platforms/          # Platform-specific docs: macOS, Linux, Windows, etc. (24 files)
├── nodes/              # Node capabilities: audio, camera, images, voice (9 files)
├── reference/          # API reference, RPC, templates, session management (22 files)
├── security/           # Security model and threat model (3 files)
├── help/               # FAQ, debugging, troubleshooting (7 files)
├── web/                # Web dashboard, webchat, TUI (5 files)
├── diagnostics/        # Diagnostic flags (1 file)
└── (root files)        # logging, network, tts, pi, vps, brave-search, etc. (7 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user setup | `contents/start/getting-started.md` |
| Installation | `contents/install/index.md` |
| Channel setup (Slack, Telegram, etc.) | `contents/channels/index.md` |
| Configure AI providers | `contents/providers/index.md` |
| Gateway configuration | `contents/gateway/configuration.md` |
| CLI reference | `contents/cli/index.md` |
| Agent tools | `contents/tools/index.md` |
| Plugin development | `contents/plugins/manifest.md` |
| Security | `contents/security/README.md` |
| Troubleshooting | `contents/help/troubleshooting.md` |

## Detailed Structure

### start/ (13 files)

| File | Description |
|------|-------------|
| `getting-started.md` | Getting started - fastest path to working chat |
| `quickstart.md` | Quick start (redirects to getting-started) |
| `setup.md` | Full setup guide |
| `openclaw.md` | What is OpenClaw overview |
| `onboarding.md` | Onboarding flow |
| `onboarding-overview.md` | Onboarding overview |
| `bootstrapping.md` | Bootstrapping an agent |
| `hubs.md` | Hubs concept |
| `lore.md` | Lore system |
| `docs-directory.md` | Docs directory setup |
| `wizard.md` | Setup wizard |
| `wizard-cli-automation.md` | Wizard CLI automation |
| `wizard-cli-reference.md` | Wizard CLI reference |

### install/ (20 files)

| File | Description |
|------|-------------|
| `index.md` | Installation overview |
| `installer.md` | Official installer |
| `node.md` | Node.js installation |
| `bun.md` | Bun installation |
| `docker.md` | Docker setup |
| `nix.md` | Nix setup |
| `ansible.md` | Ansible deployment |
| `fly.md` | Fly.io deployment |
| `gcp.md` | Google Cloud Platform |
| `hetzner.md` | Hetzner setup |
| `northflank.mdx` | Northflank deployment |
| `railway.mdx` | Railway deployment |
| `render.mdx` | Render deployment |
| `podman.md` | Podman setup |
| `macos-vm.md` | macOS VM setup |
| `migrating.md` | Migration guide |
| `uninstall.md` | Uninstall guide |
| `updating.md` | Updating OpenClaw |
| `development-channels.md` | Stable/beta/dev channels |
| `exe-dev.md` | exe.dev hosting |

### channels/ (29 files)

| File | Description |
|------|-------------|
| `index.md` | Channels overview |
| `slack.md` | Slack integration |
| `telegram.md` | Telegram integration |
| `discord.md` | Discord integration |
| `whatsapp.md` | WhatsApp integration |
| `signal.md` | Signal integration |
| `msteams.md` | Microsoft Teams |
| `imessage.md` | iMessage integration |
| `matrix.md` | Matrix protocol |
| `googlechat.md` | Google Chat |
| `irc.md` | IRC integration |
| `line.md` | LINE integration |
| `mattermost.md` | Mattermost integration |
| `nextcloud-talk.md` | Nextcloud Talk |
| `bluebubbles.md` | BlueBubbles |
| `feishu.md` | Feishu integration |
| `tlon.md` | Tlon/Urbit integration |
| `nostr.md` | Nostr integration |
| `twitch.md` | Twitch chat |
| `synology-chat.md` | Synology Chat |
| `zalo.md` | Zalo integration |
| `zalouser.md` | Zalo user channel |
| `broadcast-groups.md` | Broadcast groups |
| `channel-routing.md` | Channel routing |
| `group-messages.md` | Group message handling |
| `groups.md` | Groups configuration |
| `location.md` | Location sharing |
| `pairing.md` | Device pairing via channels |
| `troubleshooting.md` | Channel troubleshooting |

### providers/ (29 files)

| File | Description |
|------|-------------|
| `index.md` | Providers overview |
| `models.md` | Model list reference |
| `anthropic.md` | Anthropic Claude setup |
| `openai.md` | OpenAI setup |
| `bedrock.md` | AWS Bedrock setup |
| `ollama.md` | Ollama local models |
| `openrouter.md` | OpenRouter setup |
| `github-copilot.md` | GitHub Copilot |
| `claude-max-api-proxy.md` | Claude Max API proxy |
| `deepgram.md` | Deepgram speech |
| `glm.md` | GLM models |
| `huggingface.md` | HuggingFace |
| `kilocode.md` | Kilocode gateway |
| `litellm.md` | LiteLLM proxy |
| `minimax.md` | MiniMax models |
| `mistral.md` | Mistral AI |
| `moonshot.md` | Moonshot AI |
| `nvidia.md` | NVIDIA NIM |
| `opencode.md` | OpenCode |
| `qianfan.md` | Baidu Qianfan |
| `qwen.md` | Alibaba Qwen |
| `synthetic.md` | Synthetic provider (testing) |
| `together.md` | Together AI |
| `venice.md` | Venice AI |
| `vercel-ai-gateway.md` | Vercel AI Gateway |
| `cloudflare-ai-gateway.md` | Cloudflare AI Gateway |
| `vllm.md` | vLLM setup |
| `xiaomi.md` | Xiaomi AI |
| `zai.md` | Zai AI |

### gateway/ (32 files)

| File | Description |
|------|-------------|
| `index.md` | Gateway overview |
| `configuration.md` | Configuration overview |
| `configuration-reference.md` | Full config reference |
| `configuration-examples.md` | Configuration examples |
| `authentication.md` | Authentication setup |
| `security/index.md` | Security overview |
| `sandboxing.md` | Sandbox configuration |
| `sandbox-vs-tool-policy-vs-elevated.md` | Sandbox vs tool policy |
| `secrets.md` | Secrets management |
| `remote.md` | Remote gateway setup |
| `remote-gateway-readme.md` | Remote gateway README |
| `multiple-gateways.md` | Multiple gateways |
| `local-models.md` | Local model setup |
| `tailscale.md` | Tailscale integration |
| `bonjour.md` | Bonjour/mDNS discovery |
| `discovery.md` | Service discovery |
| `background-process.md` | Background process |
| `heartbeat.md` | Heartbeat mechanism |
| `health.md` | Health checks |
| `doctor.md` | Doctor diagnostics |
| `logging.md` | Gateway logging |
| `network-model.md` | Network model |
| `protocol.md` | Wire protocol |
| `bridge-protocol.md` | Bridge protocol |
| `cli-backends.md` | CLI backend integration |
| `gateway-lock.md` | Gateway lock file |
| `openai-http-api.md` | OpenAI HTTP API |
| `openresponses-http-api.md` | OpenResponses HTTP API |
| `tools-invoke-http-api.md` | Tools HTTP API |
| `pairing.md` | Device pairing |
| `trusted-proxy-auth.md` | Trusted proxy auth |
| `troubleshooting.md` | Gateway troubleshooting |

### cli/ (46 files)

| File | Description |
|------|-------------|
| `index.md` | CLI overview |
| `config.md` | `openclaw config` command |
| `configure.md` | Configuration wizard |
| `setup.md` | Setup command |
| `agent.md` | `openclaw agent` |
| `agents.md` | `openclaw agents` |
| `channels.md` | `openclaw channels` |
| `hooks.md` | `openclaw hooks` |
| `plugins.md` | `openclaw plugins` |
| `cron.md` | `openclaw cron` |
| `daemon.md` | `openclaw daemon` |
| `gateway.md` | `openclaw gateway` |
| `nodes.md` | `openclaw nodes` |
| `node.md` | `openclaw node` |
| `models.md` | `openclaw models` |
| `memory.md` | `openclaw memory` |
| `message.md` | `openclaw message` |
| `logs.md` | `openclaw logs` |
| `health.md` | `openclaw health` |
| `doctor.md` | `openclaw doctor` |
| `status.md` | `openclaw status` |
| `sessions.md` | `openclaw sessions` |
| `secrets.md` | `openclaw secrets` |
| `security.md` | `openclaw security` |
| `devices.md` | `openclaw devices` |
| `directory.md` | `openclaw directory` |
| `dns.md` | `openclaw dns` |
| `docs.md` | `openclaw docs` |
| `sandbox.md` | `openclaw sandbox` |
| `skills.md` | `openclaw skills` |
| `approvals.md` | `openclaw approvals` |
| `browser.md` | `openclaw browser` |
| `clawbot.md` | `openclaw clawbot` |
| `completion.md` | Shell completions |
| `dashboard.md` | `openclaw dashboard` |
| `onboard.md` | `openclaw onboard` |
| `pairing.md` | `openclaw pairing` |
| `qr.md` | `openclaw qr` |
| `reset.md` | `openclaw reset` |
| `system.md` | `openclaw system` |
| `tui.md` | `openclaw tui` |
| `uninstall.md` | `openclaw uninstall` |
| `update.md` | `openclaw update` |
| `voicecall.md` | `openclaw voicecall` |
| `webhooks.md` | `openclaw webhooks` |
| `acp.md` | `openclaw acp` |

### tools/ (26 files)

| File | Description |
|------|-------------|
| `index.md` | Tools overview |
| `browser.md` | Browser tool |
| `browser-login.md` | Browser login |
| `browser-linux-troubleshooting.md` | Browser Linux troubleshooting |
| `exec.md` | Exec tool (shell commands) |
| `exec-approvals.md` | Exec approvals |
| `elevated.md` | Elevated permissions tool |
| `skills.md` | Skills system |
| `skills-config.md` | Skills configuration |
| `creating-skills.md` | Creating custom skills |
| `slash-commands.md` | Slash commands |
| `subagents.md` | Sub-agents |
| `acp-agents.md` | ACP agents |
| `agent-send.md` | Agent send tool |
| `multi-agent-sandbox-tools.md` | Multi-agent sandbox |
| `llm-task.md` | LLM task tool |
| `apply-patch.md` | Apply patch tool |
| `chrome-extension.md` | Chrome extension |
| `clawhub.md` | ClawHub |
| `firecrawl.md` | Firecrawl web scraping |
| `lobster.md` | Lobster tool |
| `loop-detection.md` | Loop detection |
| `plugin.md` | Plugin tool |
| `reactions.md` | Message reactions |
| `thinking.md` | Thinking/reasoning |
| `web.md` | Web tool |

### plugins/ (5 files)

| File | Description |
|------|-------------|
| `manifest.md` | Plugin manifest schema |
| `agent-tools.md` | Agent tools for plugins |
| `community.md` | Community plugins |
| `voice-call.md` | Voice call plugin |
| `zalouser.md` | Zalo user plugin |

### concepts/ (28 files)

| File | Description |
|------|-------------|
| `architecture.md` | System architecture |
| `agent.md` | Agent concept |
| `agent-loop.md` | Agent loop |
| `agent-workspace.md` | Agent workspace |
| `session.md` | Session concept |
| `sessions.md` | Sessions overview |
| `session-tool.md` | Session tool |
| `session-pruning.md` | Session pruning |
| `memory.md` | Memory system |
| `compaction.md` | Context compaction |
| `context.md` | Context management |
| `models.md` | Models concept |
| `model-providers.md` | Model providers |
| `model-failover.md` | Model failover |
| `messages.md` | Message format |
| `multi-agent.md` | Multi-agent setup |
| `oauth.md` | OAuth integration |
| `presence.md` | Presence/status |
| `queue.md` | Message queue |
| `retry.md` | Retry logic |
| `streaming.md` | Streaming responses |
| `system-prompt.md` | System prompt |
| `features.md` | Feature flags |
| `markdown-formatting.md` | Markdown formatting |
| `timezone.md` | Timezone handling |
| `typebox.md` | TypeBox usage |
| `typing-indicators.md` | Typing indicators |
| `usage-tracking.md` | Usage tracking |

### automation/ (8 files)

| File | Description |
|------|-------------|
| `hooks.md` | Automation hooks |
| `webhook.md` | Webhook setup |
| `cron-jobs.md` | Cron job scheduling |
| `cron-vs-heartbeat.md` | Cron vs heartbeat |
| `poll.md` | Polling triggers |
| `gmail-pubsub.md` | Gmail Pub/Sub |
| `auth-monitoring.md` | Auth monitoring |
| `troubleshooting.md` | Automation troubleshooting |

### platforms/ (24 files)

| File | Description |
|------|-------------|
| `index.md` | Platforms overview |
| `macos.md` | macOS setup |
| `linux.md` | Linux setup |
| `windows.md` | Windows setup |
| `android.md` | Android setup |
| `ios.md` | iOS setup |
| `raspberry-pi.md` | Raspberry Pi |
| `digitalocean.md` | DigitalOcean |
| `oracle.md` | Oracle Cloud |
| `mac/bundled-gateway.md` | macOS bundled gateway |
| `mac/canvas.md` | macOS canvas |
| `mac/child-process.md` | macOS child process |
| `mac/health.md` | macOS health |
| `mac/icon.md` | macOS icon |
| `mac/logging.md` | macOS logging |
| `mac/menu-bar.md` | macOS menu bar |
| `mac/peekaboo.md` | Peekaboo (screen reading) |
| `mac/permissions.md` | macOS permissions |
| `mac/remote.md` | macOS remote access |
| `mac/skills.md` | macOS skills |
| `mac/voice-overlay.md` | Voice overlay |
| `mac/voicewake.md` | Voice wake word |
| `mac/webchat.md` | macOS webchat |
| `mac/xpc.md` | XPC communication |

### nodes/ (9 files)

| File | Description |
|------|-------------|
| `index.md` | Nodes overview |
| `audio.md` | Audio node |
| `camera.md` | Camera node |
| `images.md` | Image handling |
| `location-command.md` | Location command |
| `media-understanding.md` | Media understanding |
| `talk.md` | Talk/speech node |
| `voicewake.md` | Voice wake word |
| `troubleshooting.md` | Nodes troubleshooting |

### reference/ (22 files)

| File | Description |
|------|-------------|
| `rpc.md` | RPC API reference |
| `api-usage-costs.md` | API usage costs |
| `device-models.md` | Device model reference |
| `session-management-compaction.md` | Session compaction |
| `prompt-caching.md` | Prompt caching |
| `token-use.md` | Token usage |
| `AGENTS.default.md` | Default AGENTS.md template |
| `wizard.md` | Wizard reference |
| `templates/AGENTS.md` | AGENTS.md template |
| `templates/AGENTS.dev.md` | AGENTS.dev.md template |
| `templates/BOOT.md` | BOOT.md template |
| `templates/BOOTSTRAP.md` | BOOTSTRAP.md template |
| `templates/HEARTBEAT.md` | HEARTBEAT.md template |
| `templates/IDENTITY.md` | IDENTITY.md template |
| `templates/IDENTITY.dev.md` | IDENTITY.dev.md template |
| `templates/SOUL.md` | SOUL.md template |
| `templates/SOUL.dev.md` | SOUL.dev.md template |
| `templates/TOOLS.md` | TOOLS.md template |
| `templates/TOOLS.dev.md` | TOOLS.dev.md template |
| `templates/USER.md` | USER.md template |
| `templates/USER.dev.md` | USER.dev.md template |
| `templates/HEARTBEAT.md` | HEARTBEAT.md template |

### security/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | Security overview |
| `THREAT-MODEL-ATLAS.md` | Threat model |
| `formal-verification.md` | Formal verification |

### help/ (7 files)

| File | Description |
|------|-------------|
| `faq.md` | Frequently asked questions |
| `troubleshooting.md` | General troubleshooting |
| `debugging.md` | Debugging guide |
| `environment.md` | Environment variables |
| `scripts.md` | Helper scripts |
| `testing.md` | Testing guide |
| `index.md` | Help index |

### web/ (5 files)

| File | Description |
|------|-------------|
| `index.md` | Web UI overview |
| `dashboard.md` | Dashboard |
| `webchat.md` | Webchat interface |
| `control-ui.md` | Control UI |
| `tui.md` | Terminal UI |

### Root files

| File | Description |
|------|-------------|
| `index.md` | OpenClaw overview |
| `logging.md` | Logging configuration |
| `network.md` | Network configuration |
| `tts.md` | Text-to-speech |
| `pi.md` | Raspberry Pi setup |
| `vps.md` | VPS deployment |
| `brave-search.md` | Brave Search integration |
| `date-time.md` | Date/time handling |
| `perplexity.md` | Perplexity integration |
| `prose.md` | Prose writing mode |
| `diagnostics/flags.md` | Diagnostic flags |