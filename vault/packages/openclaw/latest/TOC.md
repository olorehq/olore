# openclaw Table of Contents

## Directory Map

```
contents/
├── start/              # Getting started, quickstart, onboarding (12 files)
├── install/            # Installation guides across platforms and cloud (22 files)
├── gateway/            # Gateway config, security, protocols, health (30 files)
│   └── security/       # Audit, shrinkwrap, exposure runbook (5 files)
├── channels/           # Channel integrations (Slack, Telegram, Discord, etc.) (30 files)
├── providers/          # Model provider integrations (50 files)
├── plugins/            # Plugin system, SDK, and per-plugin reference (55 files)
│   └── reference/      # Per-plugin config reference (100+ files)
├── tools/              # Agent tools (browser, search, exec, skills, etc.) (46 files)
├── concepts/           # Core concepts and architecture (40 files)
├── automation/         # Hooks, cron, webhooks, tasks, ClawFlow (10 files)
├── cli/                # CLI command reference (45 files)
├── platforms/          # Platform-specific guides (macOS, Linux, iOS, Android, etc.) (18 files)
│   └── mac/            # macOS-specific deep dives (12 files)
├── nodes/              # Companion node devices (audio, camera, talk, etc.) (7 files)
├── web/                # Web UI, dashboard, webchat, TUI (5 files)
├── help/               # FAQ, debugging, troubleshooting, environment (8 files)
├── security/           # Security model, threat model, network proxy (3 files)
├── reference/          # Internal templates, session management, RPC (15 files)
│   └── templates/      # AGENTS.md, SOUL, IDENTITY, BOOT templates (7 files)
├── clawhub/            # ClawHub publishing and CLI (2 files)
└── (root)              # Top-level: logging, network, vps, tts, etc. (10 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/start/getting-started.md` |
| Quick start | `contents/start/quickstart.md` |
| Installation | `contents/install/index.md` |
| Gateway setup | `contents/gateway/configuration.md` |
| Full config reference | `contents/gateway/configuration-reference.md` |
| Channels overview | `contents/channels/index.md` |
| Plugins overview | `contents/plugins/architecture.md` |
| CLI reference | `contents/cli/index.md` |
| Providers overview | `contents/providers/index.md` |
| Troubleshooting | `contents/help/troubleshooting.md` |
| Security overview | `contents/gateway/security/index.md` |

## Detailed Structure

### start/ (12 files)

| File | Description |
|------|-------------|
| `getting-started.md` | First-run overview |
| `quickstart.md` | Quick start guide |
| `setup.md` | Initial setup steps |
| `onboarding.md` | Onboarding flow |
| `onboarding-overview.md` | Onboarding overview |
| `wizard.md` | Setup wizard |
| `wizard-cli-reference.md` | Wizard CLI reference |
| `wizard-cli-automation.md` | Wizard CLI automation |
| `bootstrapping.md` | Bootstrap process |
| `openclaw.md` | What is OpenClaw |
| `hubs.md` | Hub concepts |
| `docs-directory.md` | Docs directory structure |

### install/ (22 files)

| File | Description |
|------|-------------|
| `index.md` | Install overview |
| `installer.md` | Installer script |
| `docker.md` | Docker installation |
| `docker-vm-runtime.md` | Docker VM runtime |
| `clawdock.md` | ClawDock container |
| `node.md` | Node.js install |
| `bun.md` | Bun install |
| `nix.md` | Nix install |
| `podman.md` | Podman install |
| `kubernetes.md` | Kubernetes deployment |
| `ansible.md` | Ansible automation |
| `raspberry-pi.md` | Raspberry Pi setup |
| `macos-vm.md` | macOS VM setup |
| `fly.md` | Fly.io deployment |
| `railway.mdx` | Railway deployment |
| `render.mdx` | Render deployment |
| `digitalocean.md` | DigitalOcean deployment |
| `azure.md` | Azure deployment |
| `gcp.md` | Google Cloud deployment |
| `hetzner.md` | Hetzner deployment |
| `oracle.md` | Oracle Cloud deployment |
| `hostinger.md` | Hostinger deployment |
| `northflank.mdx` | Northflank deployment |
| `upstash.md` | Upstash Redis setup |
| `development-channels.md` | Dev channel installs |
| `exe-dev.md` | Executable dev build |
| `updating.md` | Updating OpenClaw |
| `uninstall.md` | Uninstalling |
| `migrating.md` | Migration guide |
| `migrating-claude.md` | Migrating from Claude |
| `migrating-hermes.md` | Migrating from Hermes |

### gateway/ (30 files)

| File | Description |
|------|-------------|
| `index.md` | Gateway overview |
| `configuration.md` | Configuration guide |
| `configuration-reference.md` | Full config reference |
| `configuration-examples.md` | Config examples |
| `config-agents.md` | Agent config section |
| `config-channels.md` | Channel config section |
| `config-tools.md` | Tool config section |
| `authentication.md` | Auth setup |
| `secrets.md` | Secrets management |
| `sandboxing.md` | Sandboxing setup |
| `sandbox-vs-tool-policy-vs-elevated.md` | Sandbox vs policy vs elevated |
| `operator-scopes.md` | Operator permission scopes |
| `network-model.md` | Network topology |
| `multiple-gateways.md` | Multi-gateway setup |
| `remote.md` | Remote gateway |
| `remote-gateway-readme.md` | Remote gateway README |
| `background-process.md` | Background process |
| `heartbeat.md` | Heartbeat configuration |
| `health.md` | Health checks |
| `diagnostics.md` | Diagnostics |
| `logging.md` | Logging configuration |
| `opentelemetry.md` | OpenTelemetry integration |
| `prometheus.md` | Prometheus metrics |
| `protocol.md` | Gateway protocol |
| `bridge-protocol.md` | Bridge protocol |
| `openai-http-api.md` | OpenAI-compatible HTTP API |
| `openresponses-http-api.md` | OpenResponses HTTP API |
| `tools-invoke-http-api.md` | Tools invocation HTTP API |
| `openshell.md` | OpenShell |
| `pairing.md` | Device pairing |
| `external-apps.md` | External app connections |
| `local-models.md` | Local model setup |
| `local-model-services.md` | Local model services |
| `cli-backends.md` | CLI backends |
| `bonjour.md` | Bonjour/mDNS discovery |
| `discovery.md` | Service discovery |
| `tailscale.md` | Tailscale integration |
| `doctor.md` | Doctor diagnostics |
| `troubleshooting.md` | Gateway troubleshooting |
| `trusted-proxy-auth.md` | Trusted proxy auth |
| `gateway-lock.md` | Gateway lock file |
| `secrets-plan-contract.md` | Secrets apply plan contract |

### gateway/security/ (5 files)

| File | Description |
|------|-------------|
| `index.md` | Security overview |
| `audit-checks.md` | Security audit checks |
| `exposure-runbook.md` | Exposure runbook |
| `secure-file-operations.md` | Secure file operations |
| `shrinkwrap.md` | Shrinkwrap security |

### channels/ (30 files)

| File | Description |
|------|-------------|
| `index.md` | Channels overview |
| `slack.md` | Slack channel |
| `telegram.md` | Telegram channel |
| `discord.md` | Discord channel |
| `whatsapp.md` | WhatsApp channel |
| `signal.md` | Signal channel |
| `imessage.md` | iMessage channel |
| `imessage-from-bluebubbles.md` | Migrating from BlueBubbles iMessage |
| `msteams.md` | Microsoft Teams channel |
| `googlechat.md` | Google Chat channel |
| `feishu.md` | Feishu channel |
| `matrix.md` | Matrix channel |
| `mattermost.md` | Mattermost channel |
| `irc.md` | IRC channel |
| `sms.md` | SMS channel |
| `line.md` | LINE channel |
| `wechat.md` | WeChat channel |
| `qqbot.md` | QQ Bot channel |
| `nextcloud-talk.md` | Nextcloud Talk channel |
| `nostr.md` | Nostr channel |
| `twitch.md` | Twitch channel |
| `tlon.md` | Tlon channel |
| `synology-chat.md` | Synology Chat channel |
| `clickclack.md` | ClickClack channel |
| `zalo.md` | Zalo channel |
| `zalouser.md` | Zalo user channel |
| `yuanbao.md` | Yuanbao channel |
| `groups.md` | Group messaging |
| `group-messages.md` | Group message handling |
| `broadcast-groups.md` | Broadcast groups |
| `access-groups.md` | Access groups |
| `channel-routing.md` | Channel routing |
| `pairing.md` | Channel pairing |
| `bot-loop-protection.md` | Bot loop protection |
| `ambient-room-events.md` | Ambient room events |
| `location.md` | Location sharing |
| `qa-channel.md` | QA channel |
| `troubleshooting.md` | Channel troubleshooting |
| `matrix-migration.md` | Matrix migration |
| `matrix-push-rules.md` | Matrix push rules |
| `matrix-presentation.md` | Matrix presentation |

### providers/ (50 files)

| File | Description |
|------|-------------|
| `index.md` | Providers overview |
| `models.md` | Model list and selection |
| `anthropic.md` | Anthropic / Claude |
| `openai.md` | OpenAI |
| `google.md` | Google (Gemini) |
| `bedrock.md` | Amazon Bedrock |
| `bedrock-mantle.md` | Amazon Bedrock Mantle |
| `azure-speech.md` | Azure Speech |
| `mistral.md` | Mistral |
| `groq.md` | Groq |
| `deepseek.md` | DeepSeek |
| `ollama.md` | Ollama (local) |
| `ollama-cloud.md` | Ollama Cloud |
| `lmstudio.md` | LM Studio |
| `openrouter.md` | OpenRouter |
| `litellm.md` | LiteLLM |
| `huggingface.md` | HuggingFace |
| `together.md` | Together AI |
| `fireworks.md` | Fireworks AI |
| `deepinfra.md` | DeepInfra |
| `cerebras.md` | Cerebras |
| `novita.md` | Novita AI |
| `nvidia.md` | NVIDIA NIM |
| `perplexity-provider.md` | Perplexity |
| `moonshot.md` | Moonshot (Kimi) |
| `qwen.md` | Qwen (Alibaba) |
| `qwen-oauth.md` | Qwen OAuth |
| `alibaba.md` | Alibaba Cloud |
| `qianfan.md` | Qianfan (Baidu) |
| `minimax.md` | MiniMax |
| `tencent.md` | Tencent Hunyuan |
| `stepfun.md` | StepFun |
| `volcengine.md` | VolcEngine |
| `xai.md` | xAI (Grok) |
| `gmi.md` | GMI Cloud |
| `gradium.md` | Gradium |
| `chutes.md` | Chutes |
| `arcee.md` | Arcee AI |
| `sglang.md` | SGLang |
| `vllm.md` | vLLM |
| `venice.md` | Venice AI |
| `inferrs.md` | Inferrs |
| `kilocode.md` | KiloCode |
| `github-copilot.md` | GitHub Copilot |
| `opencode.md` | OpenCode |
| `opencode-go.md` | OpenCode Go |
| `fal.md` | fal.ai (image/video) |
| `comfy.md` | ComfyUI (image) |
| `runway.md` | Runway (video) |
| `pixverse.md` | PixVerse (video) |
| `elevenlabs.md` | ElevenLabs (TTS) |
| `deepgram.md` | Deepgram (STT) |
| `senseaudio.md` | SenseAudio |
| `inworld.md` | Inworld |
| `vercel-ai-gateway.md` | Vercel AI Gateway |
| `ds4.md` | DS4 provider |
| `vydra.md` | Vydra |
| `claude-max-api-proxy.md` | Claude Max API proxy |
| `cloudflare-ai-gateway.md` | Cloudflare AI Gateway |
| `synthetic.md` | Synthetic (testing) |

### plugins/ (top-level, ~20 files)

| File | Description |
|------|-------------|
| `architecture.md` | Plugin system architecture |
| `architecture-internals.md` | Plugin internals |
| `building-plugins.md` | How to build plugins |
| `building-extensions.md` | How to build extensions |
| `sdk-overview.md` | Plugin SDK overview |
| `sdk-setup.md` | SDK setup |
| `sdk-entrypoints.md` | SDK entrypoints |
| `sdk-runtime.md` | SDK runtime |
| `sdk-channel-plugins.md` | Channel plugin SDK |
| `sdk-channel-inbound.md` | Channel inbound SDK |
| `sdk-channel-outbound.md` | Channel outbound SDK |
| `sdk-channel-message.md` | Channel message SDK |
| `sdk-channel-turn.md` | Channel turn SDK |
| `sdk-channel-ingress.md` | Channel ingress SDK |
| `sdk-provider-plugins.md` | Provider plugin SDK |
| `sdk-agent-harness.md` | Agent harness SDK |
| `sdk-subpaths.md` | SDK subpaths |
| `sdk-testing.md` | SDK testing |
| `sdk-migration.md` | SDK migration |
| `manifest.md` | Plugin manifest format |
| `manage-plugins.md` | Installing/managing plugins |
| `install-overrides.md` | Install overrides |
| `dependency-resolution.md` | Plugin dependency resolution |
| `compatibility.md` | Plugin compatibility |
| `bundles.md` | Plugin bundles |
| `community.md` | Community plugins |
| `plugin-inventory.md` | Plugin inventory |
| `plugin-permission-requests.md` | Plugin permission requests |
| `adding-capabilities.md` | Adding capabilities |
| `agent-tools.md` | Agent tool plugins |
| `tool-plugins.md` | Tool plugin SDK |
| `hooks.md` | Plugin hooks |
| `reference.md` | Plugin reference index |
| `admin-http-rpc.md` | Admin HTTP RPC plugin |
| `oc-path.md` | OC path plugin |
| `codex-harness.md` | Codex harness plugin |
| `codex-harness-reference.md` | Codex harness reference |
| `codex-harness-runtime.md` | Codex harness runtime |
| `codex-native-plugins.md` | Codex native plugins |
| `codex-computer-use.md` | Codex computer use |
| `copilot.md` | Copilot plugin |
| `google-meet.md` | Google Meet plugin |
| `llama-cpp.md` | llama.cpp plugin |
| `memory-lancedb.md` | LanceDB memory plugin |
| `memory-wiki.md` | Wiki memory plugin |
| `message-presentation.md` | Message presentation |
| `voice-call.md` | Voice call plugin |
| `webhooks.md` | Webhooks plugin |
| `workboard.md` | Workboard plugin |
| `zalouser.md` | Zalo user plugin |
| `cli-backend-plugins.md` | CLI backend plugins |
| `prose.md` | Prose plugin |

### plugins/reference/ (100+ files)

Per-plugin configuration reference. One file per plugin.

Key references:

| File | Plugin |
|------|--------|
| `anthropic.md` | Anthropic provider |
| `openai.md` | OpenAI provider |
| `google.md` | Google provider |
| `amazon-bedrock.md` | Amazon Bedrock |
| `slack.md` | Slack channel |
| `telegram.md` | Telegram channel |
| `discord.md` | Discord channel |
| `whatsapp.md` | WhatsApp channel |
| `browser.md` | Browser tool |
| `codex.md` | Codex plugin |
| `memory-core.md` | Memory core |
| `memory-lancedb.md` | LanceDB memory |
| `exec.md` | Exec tool |
| `diffs.md` | Diffs tool |
| `policy.md` | Policy plugin |

Full list covers all channels, providers, and tools as individual plugin reference files.

### tools/ (46 files)

| File | Description |
|------|-------------|
| `index.md` | Tools overview |
| `browser.md` | Browser control tool |
| `browser-control.md` | Browser control guide |
| `browser-login.md` | Browser login automation |
| `browser-linux-troubleshooting.md` | Browser Linux troubleshooting |
| `browser-wsl2-windows-remote-cdp-troubleshooting.md` | Browser WSL2/Windows CDP troubleshooting |
| `exec.md` | Shell execution tool |
| `exec-approvals.md` | Exec approval gates |
| `exec-approvals-advanced.md` | Advanced exec approvals |
| `elevated.md` | Elevated permissions |
| `permission-modes.md` | Permission modes |
| `skills.md` | Skills system |
| `skills-config.md` | Skills configuration |
| `creating-skills.md` | Creating custom skills |
| `skill-workshop.md` | Skill workshop |
| `slash-commands.md` | Slash commands |
| `web.md` | Web fetch tool |
| `web-fetch.md` | Web fetch reference |
| `brave-search.md` | Brave Search tool |
| `duckduckgo-search.md` | DuckDuckGo search tool |
| `exa-search.md` | Exa search tool |
| `tavily.md` | Tavily search tool |
| `perplexity-search.md` | Perplexity search tool |
| `searxng-search.md` | SearXNG search tool |
| `gemini-search.md` | Gemini search tool |
| `grok-search.md` | Grok search tool |
| `kimi-search.md` | Kimi search tool |
| `minimax-search.md` | MiniMax search tool |
| `ollama-search.md` | Ollama search tool |
| `parallel-search.md` | Parallel search |
| `tool-search.md` | Tool search |
| `firecrawl.md` | Firecrawl web scraping |
| `image-generation.md` | Image generation tool |
| `video-generation.md` | Video generation tool |
| `music-generation.md` | Music generation tool |
| `tts.md` | Text-to-speech tool |
| `pdf.md` | PDF reading tool |
| `diffs.md` | Diffs tool |
| `apply-patch.md` | Apply patch tool |
| `code-execution.md` | Code execution |
| `subagents.md` | Subagent tool |
| `llm-task.md` | LLM task tool |
| `acp-agents.md` | ACP agents tool |
| `acp-agents-setup.md` | ACP agents setup |
| `agent-send.md` | Agent send tool |
| `reactions.md` | Reactions tool |
| `steer.md` | Steer tool |
| `goal.md` | Goal tool |
| `thinking.md` | Thinking tool |
| `trajectory.md` | Trajectory tool |
| `loop-detection.md` | Loop detection |
| `tokenjuice.md` | TokenJuice |
| `btw.md` | BTW tool |
| `lobster.md` | Lobster tool |
| `media-overview.md` | Media tools overview |
| `capability-cookbook.md` | Capability cookbook |
| `clawhub.md` | ClawHub tool |
| `multi-agent-sandbox-tools.md` | Multi-agent sandbox tools |
| `plugin.md` | Plugin management tool |

### concepts/ (40 files)

| File | Description |
|------|-------------|
| `architecture.md` | System architecture |
| `agent.md` | Agent model |
| `agent-loop.md` | Agent loop |
| `agent-runtimes.md` | Agent runtimes |
| `agent-workspace.md` | Agent workspace |
| `context.md` | Context system |
| `context-engine.md` | Context engine |
| `session.md` | Sessions |
| `session-pruning.md` | Session pruning |
| `session-tool.md` | Session tool |
| `memory.md` | Memory system |
| `memory-builtin.md` | Built-in memory |
| `memory-honcho.md` | Honcho memory |
| `memory-qmd.md` | QMD memory |
| `memory-search.md` | Memory search |
| `models.md` | Models |
| `model-providers.md` | Model providers |
| `model-failover.md` | Model failover |
| `messages.md` | Message model |
| `streaming.md` | Streaming |
| `soul.md` | Soul/personality |
| `system-prompt.md` | System prompt |
| `commitments.md` | Commitments |
| `compaction.md` | Context compaction |
| `queue.md` | Message queue |
| `queue-steering.md` | Queue steering |
| `retry.md` | Retry behavior |
| `multi-agent.md` | Multi-agent setup |
| `delegate-architecture.md` | Delegate architecture |
| `parallel-specialist-lanes.md` | Parallel specialist lanes |
| `channel-docking.md` | Channel docking |
| `oauth.md` | OAuth flow |
| `presence.md` | Presence tracking |
| `typing-indicators.md` | Typing indicators |
| `usage-tracking.md` | Usage tracking |
| `active-memory.md` | Active memory |
| `progress-drafts.md` | Progress drafts |
| `dreaming.md` | Dreaming/background |
| `features.md` | Features overview |
| `experimental-features.md` | Experimental features |
| `markdown-formatting.md` | Markdown formatting |
| `timezone.md` | Timezone handling |
| `typebox.md` | TypeBox |
| `mantis.md` | Mantis |

### automation/ (10 files)

| File | Description |
|------|-------------|
| `index.md` | Automation overview |
| `hooks.md` | Hooks system |
| `cron-jobs.md` | Cron jobs |
| `cron-vs-heartbeat.md` | Cron vs heartbeat |
| `poll.md` | Polling |
| `webhook.md` | Webhooks |
| `gmail-pubsub.md` | Gmail PubSub |
| `tasks.md` | Tasks |
| `taskflow.md` | TaskFlow |
| `clawflow.md` | ClawFlow |
| `standing-orders.md` | Standing orders |
| `auth-monitoring.md` | Auth monitoring |
| `troubleshooting.md` | Automation troubleshooting |

### cli/ (45 files)

| File | Description |
|------|-------------|
| `index.md` | CLI overview |
| `setup.md` | CLI setup |
| `configure.md` | CLI configure |
| `config.md` | Config command |
| `daemon.md` | Daemon management |
| `gateway.md` | Gateway command |
| `channels.md` | Channels command |
| `plugins.md` | Plugins command |
| `skills.md` | Skills command |
| `agents.md` | Agents command |
| `agent.md` | Agent command |
| `models.md` | Models command |
| `providers.md` (via `models.md`) | Provider listing |
| `node.md` | Node command |
| `nodes.md` | Nodes command |
| `message.md` | Message command |
| `sessions.md` | Sessions command |
| `transcripts.md` | Transcripts command |
| `memory.md` | Memory command |
| `tasks.md` | Tasks command |
| `logs.md` | Logs command |
| `status.md` | Status command |
| `health.md` | Health command |
| `doctor.md` | Doctor command |
| `hooks.md` | Hooks command |
| `cron.md` | Cron command |
| `webhooks.md` | Webhooks command |
| `flows.md` | Flows command |
| `backup.md` | Backup command |
| `secrets.md` | Secrets command |
| `security.md` | Security command |
| `policy.md` | Policy command |
| `proxy.md` | Proxy command |
| `dns.md` | DNS command |
| `mcp.md` | MCP command |
| `browser.md` | Browser command |
| `pairing.md` | Pairing command |
| `devices.md` | Devices command |
| `directory.md` | Directory command |
| `sandbox.md` | Sandbox command |
| `voicecall.md` | Voice call command |
| `wiki.md` | Wiki command |
| `workboard.md` | Workboard command |
| `qr.md` | QR code command |
| `reset.md` | Reset command |
| `update.md` | Update command |
| `uninstall.md` | Uninstall command |
| `infer.md` | Infer command |
| `migrate.md` | Migrate command |
| `onboard.md` | Onboard command |
| `tui.md` | TUI command |
| `dashboard.md` | Dashboard command |
| `path.md` | Path command |
| `acp.md` | ACP command |
| `approvals.md` | Approvals command |
| `clawbot.md` | ClawBot command |
| `completion.md` | Shell completion |
| `system.md` | System command |
| `commitments.md` | Commitments command |
| `crestodian.md` | Crestodian command |
| `docs.md` | Docs command |

### platforms/ (18 files)

| File | Description |
|------|-------------|
| `index.md` | Platforms overview |
| `macos.md` | macOS overview |
| `linux.md` | Linux setup |
| `windows.md` | Windows setup |
| `ios.md` | iOS setup |
| `android.md` | Android setup |
| `raspberry-pi.md` | Raspberry Pi |
| `oracle.md` | Oracle Cloud |
| `digitalocean.md` | DigitalOcean |
| `easyrunner.md` | EasyRunner |

### platforms/mac/ (12 files)

| File | Description |
|------|-------------|
| `bundled-gateway.md` | Bundled gateway on macOS |
| `canvas.md` | Canvas on macOS |
| `child-process.md` | Child process management |
| `dev-setup.md` | Mac development setup |
| `health.md` | Mac health checks |
| `icon.md` | App icon |
| `logging.md` | Mac logging |
| `menu-bar.md` | Menu bar app |
| `permissions.md` | macOS permissions |
| `peekaboo.md` | Peekaboo vision |
| `remote.md` | Mac remote setup |
| `signing.md` | Code signing |
| `skills.md` | Mac skills |
| `voice-overlay.md` | Voice overlay |
| `voicewake.md` | Voice wake word |
| `webchat.md` | Webchat on Mac |
| `xpc.md` | XPC communication |

### nodes/ (7 files)

| File | Description |
|------|-------------|
| `index.md` | Nodes overview |
| `audio.md` | Audio node |
| `camera.md` | Camera node |
| `images.md` | Image node |
| `location-command.md` | Location node |
| `media-understanding.md` | Media understanding |
| `talk.md` | Talk node |
| `voicewake.md` | Wake word node |
| `troubleshooting.md` | Node troubleshooting |

### web/ (5 files)

| File | Description |
|------|-------------|
| `index.md` | Web UI overview |
| `dashboard.md` | Dashboard |
| `control-ui.md` | Control UI |
| `webchat.md` | Webchat |
| `tui.md` | Terminal UI |

### help/ (8 files)

| File | Description |
|------|-------------|
| `index.md` | Help overview |
| `faq.md` | FAQ |
| `faq-first-run.md` | First-run FAQ |
| `faq-models.md` | Models FAQ |
| `debugging.md` | Debugging guide |
| `troubleshooting.md` | Troubleshooting |
| `environment.md` | Environment variables |
| `scripts.md` | Utility scripts |
| `testing.md` | Testing guide |
| `testing-live.md` | Live testing |
| `testing-updates-plugins.md` | Testing updates and plugins |

### security/ (3 files)

| File | Description |
|------|-------------|
| `THREAT-MODEL-ATLAS.md` | Threat model |
| `incident-response.md` | Incident response |
| `network-proxy.md` | Network proxy security |
| `formal-verification.md` | Formal security verification |

### reference/ (15 files)

| File | Description |
|------|-------------|
| `rpc.md` | RPC reference |
| `rich-output-protocol.md` | Rich output protocol |
| `secret-placeholder-conventions.md` | Secret placeholder conventions |
| `secretref-credential-surface.md` | SecretRef credential surface |
| `session-management-compaction.md` | Session management compaction |
| `api-usage-costs.md` | API usage and costs |
| `memory-config.md` | Memory configuration |
| `prompt-caching.md` | Prompt caching |
| `token-use.md` | Token usage |
| `transcript-hygiene.md` | Transcript hygiene |
| `device-models.md` | Device models |
| `code-mode.md` | Code mode |
| `wizard.md` | Wizard reference |
| `AGENTS.default.md` | Default AGENTS.md |

### reference/templates/ (7 files)

| File | Description |
|------|-------------|
| `AGENTS.md` | AGENTS.md workspace template |
| `BOOT.md` | BOOT.md template |
| `BOOTSTRAP.md` | BOOTSTRAP.md template |
| `HEARTBEAT.md` | HEARTBEAT.md template |
| `IDENTITY.md` | IDENTITY.md template |
| `SOUL.md` | SOUL.md template |
| `TOOLS.md` | TOOLS.md template |
| `USER.md` | USER.md template |

### Root-level files (10 files)

| File | Description |
|------|-------------|
| `index.md` | Documentation index |
| `logging.md` | Logging overview |
| `network.md` | Network overview |
| `vps.md` | VPS deployment |
| `tts.md` | TTS overview |
| `prose.md` | Prose plugin |
| `perplexity.md` | Perplexity reference |
| `brave-search.md` | Brave Search reference |
| `date-time.md` | Date/time handling |
| `agent-runtime-architecture.md` | Agent runtime architecture |
| `openclaw-agent-runtime.md` | OpenClaw agent runtime |
| `auth-credential-semantics.md` | Auth credential semantics |

### Additional directories

| Directory | Description |
|-----------|-------------|
| `clawhub/` | ClawHub CLI and publishing docs |
| `diagnostics/` | Diagnostic flags |
