# OpenClaw Table of Contents

## Directory Map

```
contents/
├── index.md              # Main overview and introduction
├── install/              # Installation guides (11 files)
├── start/                # Getting started guides (9 files)
├── cli/                  # CLI command reference (41 files)
├── channels/             # Messaging platform integrations (22 files)
├── providers/            # AI provider configurations (19 files)
├── gateway/              # Gateway server setup (29 files)
├── platforms/            # Platform-specific guides (29 files)
│   ├── mac/              # macOS-specific features (14 files)
│   └── *.md              # Other platforms (Android, Linux, Windows, etc.)
├── concepts/             # Core concepts and architecture (30 files)
├── plugins/              # Plugin system (4 files)
├── hooks/                # Hooks and automation (1 file + hooks.md in root)
├── tools/                # Development tools (22 files)
├── reference/            # Reference documentation (21 files)
├── nodes/                # Multi-node architecture (8 files)
├── automation/           # Automation features (6 files)
├── experiments/          # Experimental features (6 files)
├── security/             # Security guides (1 file)
├── web/                  # Web interface (4 files)
├── help/                 # Help and support (3 files)
├── debug/                # Debugging (1 file)
└── diagnostics/          # Diagnostics (1 file)

Total: 293 files
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install OpenClaw | `contents/install/index.md` |
| Quick start | `contents/start/` |
| Configure messaging channels | `contents/channels/index.md` |
| Set up AI providers | `contents/providers/index.md` |
| CLI commands | `contents/cli/index.md` |
| Platform deployment | `contents/platforms/index.md` |
| Gateway configuration | `contents/gateway/` |
| Core concepts | `contents/concepts/` |
| Plugin development | `contents/plugin.md` |
| Hooks & automation | `contents/hooks.md` |

## Detailed Structure

### Root Level (25 files)

Key configuration and feature docs:

| File | Description |
|------|-------------|
| `index.md` | OpenClaw overview and introduction |
| `plugin.md` | Plugin system documentation |
| `hooks.md` | Hooks system for automation |
| `pi.md` | Pi AI agent integration |
| `logging.md` | Logging configuration |
| `debugging.md` | Debugging guide |
| `environment.md` | Environment variables |
| `network.md` | Network configuration |
| `broadcast-groups.md` | Broadcast group management |
| `multi-agent-sandbox-tools.md` | Multi-agent sandbox tools |
| `bedrock.md` | AWS Bedrock integration |
| `brave-search.md` | Brave Search integration |
| `perplexity.md` | Perplexity integration |
| `railway.mdx` | Railway deployment |
| `render.mdx` | Render deployment |
| `northflank.mdx` | Northflank deployment |

### install/ (11 files)

Installation methods and migration:

| File | Description |
|------|-------------|
| `index.md` | Main installation guide |
| `installer.md` | Installer script details |
| `docker.md` | Docker installation |
| `node.md` | Node.js installation |
| `bun.md` | Bun installation |
| `nix.md` | Nix installation |
| `ansible.md` | Ansible deployment |
| `development-channels.md` | Install development channels |
| `migrating.md` | Migration guide |
| `updating.md` | Update instructions |
| `uninstall.md` | Uninstall guide |

### start/ (9 files)

Getting started guides for setting up OpenClaw and configuring various services.

### cli/ (41 files)

Complete CLI command reference:

| File | Description |
|------|-------------|
| `index.md` | CLI overview |
| `config.md` | Configuration commands |
| `configure.md` | Interactive configuration |
| `channels.md` | Channel management |
| `gateway.md` | Gateway commands |
| `agents.md` | Agent management |
| `devices.md` | Device management |
| `dashboard.md` | Dashboard commands |
| `doctor.md` | Diagnostic commands |
| `health.md` | Health check commands |
| `logs.md` | Log management |
| `hooks.md` | Hook management |
| `cron.md` | Cron job management |
| `browser.md` | Browser automation |
| `approvals.md` | Approval management |
| `dns.md` | DNS configuration |

### channels/ (22 files)

Messaging platform integrations:

| File | Description |
|------|-------------|
| `index.md` | Channels overview |
| `discord.md` | Discord integration |
| `imessage.md` | iMessage integration |
| `whatsapp.md` | WhatsApp integration |
| `telegram.md` | Telegram integration |
| `slack.md` | Slack integration |
| `signal.md` | Signal integration |
| `mattermost.md` | Mattermost integration |
| `msteams.md` | Microsoft Teams integration |
| `matrix.md` | Matrix integration |
| `googlechat.md` | Google Chat integration |
| `bluebubbles.md` | BlueBubbles integration |
| `line.md` | LINE integration |
| `twitch.md` | Twitch integration |
| `nostr.md` | Nostr integration |
| `tlon.md` | Tlon integration |
| `grammy.md` | Grammy bot framework |
| `zalo.md` | Zalo integration |
| `nextcloud-talk.md` | Nextcloud Talk integration |
| `troubleshooting.md` | Channel troubleshooting |

### providers/ (19 files)

AI provider configurations:

| File | Description |
|------|-------------|
| `index.md` | Providers overview |
| `models.md` | Model configuration |
| `anthropic.md` | Anthropic/Claude configuration |
| `openai.md` | OpenAI configuration |
| `ollama.md` | Ollama local models |
| `openrouter.md` | OpenRouter configuration |
| `github-copilot.md` | GitHub Copilot integration |
| `opencode.md` | OpenCode configuration |
| `deepgram.md` | Deepgram speech-to-text |
| `venice.md` | Venice AI configuration |
| `vercel-ai-gateway.md` | Vercel AI Gateway |
| `qwen.md` | Qwen models |
| `glm.md` | GLM models |
| `moonshot.md` | Moonshot models |
| `minimax.md` | MiniMax models |
| `xiaomi.md` | Xiaomi models |
| `zai.md` | ZAI configuration |
| `synthetic.md` | Synthetic data providers |
| `claude-max-api-proxy.md` | Claude Max API proxy |

### gateway/ (29 files)

Gateway server configuration including security, networking, and multi-node setup.

### platforms/ (29 files)

Platform-specific deployment guides:

| File | Description |
|------|-------------|
| `index.md` | Platforms overview |
| `macos.md` | macOS deployment |
| `linux.md` | Linux deployment |
| `windows.md` | Windows deployment |
| `android.md` | Android deployment |
| `ios.md` | iOS deployment |
| `raspberry-pi.md` | Raspberry Pi deployment |
| `fly.md` | Fly.io deployment |
| `gcp.md` | Google Cloud Platform |
| `oracle.md` | Oracle Cloud |
| `digitalocean.md` | DigitalOcean deployment |
| `hetzner.md` | Hetzner deployment |
| `macos-vm.md` | macOS VM setup |

**mac/ subdirectory** (14 files): macOS-specific features including menu bar, permissions, voice features, webchat, XPC communication, health monitoring, logging, and more.

### concepts/ (30 files)

Core architecture and concepts including agents, sessions, channels, security, configuration, and system design.

### tools/ (22 files)

Development and debugging tools, file watchers, testing utilities, and automation helpers.

### reference/ (21 files)

Reference documentation including templates, schemas, and technical specifications.

### nodes/ (8 files)

Multi-node architecture for distributed deployments.

### automation/ (6 files)

Automation features and scripting capabilities.

### experiments/ (6 files)

Experimental features and proposals (plans/, proposals/, research/ subdirectories).

### plugins/ (4 files)

Plugin system documentation and examples.

### web/ (4 files)

Web dashboard and interface documentation.

### help/ (3 files)

Help resources and support documentation.

### security/ (1 file)

Security configuration and best practices.

### hooks/ (1 file)

Hooks system documentation (see also `hooks.md` in root).

### debug/ (1 file)

Debugging utilities and troubleshooting.

### diagnostics/ (1 file)

System diagnostics and health checks.
