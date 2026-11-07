# neon Table of Contents

## Directory Map

```
contents/
├── get-started/     # Signup, first project, onboarding paths (14 files)
├── introduction/    # Core concepts: branching, autoscaling, scale to zero, billing, monitoring, regions (33)
├── connect/         # Connection strings, pooling, latency, errors, GUI/CLI clients (13)
├── manage/          # Projects, branches, databases, roles, API keys, backups (28)
├── import/          # Migrating data in from Postgres, Heroku, RDS, CSV etc. (24)
├── auth/            # Neon Auth: setup, SDK, plugins, migration (34)
├── data-api/        # Neon Data API (PostgREST-style) and RLS (10)
├── functions/       # Neon Functions / serverless compute (49)
├── compute/         # Compute functions and triggers (19)
├── realtime/        # Realtime SDKs, guides, examples (16)
├── storage/         # Object storage buckets (8)
├── ai/              # AI agents, MCP, vector search, Lakebase Search (24)
├── ai-gateway/      # AI Gateway (13)
├── cli/             # Neon CLI command reference (49)
├── extensions/      # Supported Postgres extensions (48)
├── data-types/      # Postgres data types on Neon (11)
├── postgres/        # Postgres overview, backup/restore (5)
├── postgresql/      # Postgres tutorials: indexes, versions, query performance (6)
├── guides/          # Framework, language, platform, tooling integrations (167)
├── reference/       # API, SDKs, compatibility, glossary (17)
├── security/        # Security, compliance, IP allow, private networking (6)
├── workflows/       # Workflows (4)
├── concepts/, local/, serverless/   # Small topical groups (3, 2, 2)
└── cli.md           # CLI overview
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/get-started/` |
| Understand branching | `contents/introduction/branching.md` |
| Connect an app | `contents/connect/connect-intro.md` |
| Connection pooling | `contents/connect/connection-pooling.md` |
| CLI usage | `contents/cli.md` |
| Extensions | `contents/extensions/` |
| Integrations by framework/platform | `contents/guides/` |
| Connection problems | `contents/connect/connection-errors.md` |

## Detailed Structure

### (root) (8 files)

| File | Description |
|------|-------------|
| `agent-runtime-architecture.md` | How OpenClaw structures the built-in agent runtime: code layout, boundaries, resource manifests, and runtime selection. |
| `auth-credential-semantics.md` | Credential eligibility and resolution rules for auth profiles |
| `date-time.md` | Date and time handling across envelopes, prompts, tools, and channel plugins |
| `index.md` | OpenClaw is an open-source AI assistant that runs on your own hardware and meets you in every chat app you already use. |
| `logging.md` | File logs, console output, CLI tailing, and the Control UI Logs tab |
| `network.md` | Network hub: gateway surfaces, pairing, discovery, and security |
| `openclaw-agent-runtime.md` | Developer workflow for OpenClaw agent runtime: build, test, and live validation |
| `vps.md` | Run OpenClaw on a Linux server or cloud VPS — provider picker, architecture, and tuning |

### .generated/ (1 files)

| File | Description |
|------|-------------|
| `.generated/README.md` | Generated Docs Artifacts |

### .i18n/ (2 files)

| File | Description |
|------|-------------|
| `.i18n/README.md` | OpenClaw docs i18n assets |
| `.i18n/translation-workflow.md` | Translation workflow |

### automation/ (6 files)

| File | Description |
|------|-------------|
| `automation/cron-jobs.md` | Automations: scheduled jobs, webhooks, and Gmail PubSub triggers for the Gateway scheduler |
| `automation/hooks.md` | Internal hooks: install, write, and verify automation for commands and lifecycle events |
| `automation/imap.md` | Watch an IMAP mailbox and route authenticated incoming email to an isolated restricted reader agent |
| `automation/index.md` | Overview of automation mechanisms: automations, hooks, standing orders, and workflows |
| `automation/mcp-events.md` | Subscribe to MCP events and run existing Automations from signed webhooks |
| `automation/standing-orders.md` | Define permanent operating authority for autonomous agent programs |

### automation/cron-jobs/ (8 files)

| File | Description |
|------|-------------|
| `automation/cron-jobs/delivery.md` | Announce, webhook, and none delivery modes, failure alerts, and output language |
| `automation/cron-jobs/gmail.md` | Wire Gmail inbox events into OpenClaw through Google Pub/Sub and a restricted reader |
| `automation/cron-jobs/how-it-works.md` | Automation runtime model, run lifecycle, and promoting a repeated job into a schedule |
| `automation/cron-jobs/managing-jobs.md` | CLI examples, job management commands, run history, and cron configuration keys |
| `automation/cron-jobs/payloads.md` | Payload kinds, agent-turn flags, command and script payloads, and session execution styles |
| `automation/cron-jobs/schedules.md` | Schedule kinds, cron expressions, stream sources, pacing, and condition triggers |
| `automation/cron-jobs/troubleshooting.md` | Command ladder and fixes for jobs that do not fire or do not deliver |
| `automation/cron-jobs/webhooks.md` | Gateway HTTP hooks that let an external service wake an agent or submit a turn |

### automation/hooks/ (5 files)

| File | Description |
|------|-------------|
| `automation/hooks/bundled-hooks.md` | The hooks shipped with OpenClaw and the behavior and options of each |
| `automation/hooks/configuration.md` | Selecting and enabling internal hooks, and how the Gateway discovers them across sources |
| `automation/hooks/event-types.md` | Every internal event key, its trigger and wait behavior, and the context each producer supplies |
| `automation/hooks/troubleshooting.md` | Diagnose a hook that is not discovered, not eligible, or not executing |
| `automation/hooks/writing-hooks.md` | Hook directory layout, the handler contract, reply delivery, and the HOOK.md metadata fields |

### channels/ (49 files)

| File | Description |
|------|-------------|
| `channels/a2a.md` | Connect external agents to OpenClaw through the A2A 1.0 JSON-RPC protocol |
| `channels/access-groups.md` | Reusable sender allowlists for message channels |
| `channels/ambient-room-events.md` | Let supported group rooms provide quiet context unless the agent sends with the message tool |
| `channels/bot-loop-protection.md` | Bot-to-bot loop protection defaults and channel overrides |
| `channels/broadcast-groups.md` | Run bounded agent group threads across messaging channels |
| `channels/buzz.md` | Connect OpenClaw agents to Buzz rooms |
| `channels/channel-routing.md` | How OpenClaw picks an agent and session for each inbound message, and how replies route back |
| `channels/clickclack.md` | ClickClack bot-token channel setup and target syntax |
| `channels/discord-activities.md` | Launch self-contained OpenClaw HTML widgets inside Discord Activities |
| `channels/discord.md` | Discord bot setup, config keys, components, voice, and troubleshooting |
| `channels/feishu.md` | Feishu bot overview, features, and configuration |
| `channels/googlechat.md` | Google Chat app support status, capabilities, and configuration |
| `channels/group-messages.md` | WhatsApp group message handling — activation, allowlists, sessions, and context injection |
| `channels/groups.md` | Group chat behavior across surfaces (Discord/iMessage/Matrix/Microsoft Teams/QQBot/Signal/Slack/Telegram/WhatsApp/Zalo) |
| `channels/imessage-from-bluebubbles.md` | Translate old BlueBubbles configs to the official iMessage plugin: key mapping, group allowlist gates, and cutover verification. |
| `channels/imessage.md` | Native iMessage support via imsg (JSON-RPC over stdio), with private API actions for replies, tapbacks, effects, polls, attachments, and group management. Prefe |
| `channels/index.md` | Messaging platforms OpenClaw can connect to |
| `channels/irc.md` | IRC plugin setup, access controls, and troubleshooting |
| `channels/line.md` | LINE Messaging API plugin setup, config, and usage |
| `channels/location.md` | Channel location parsing and portable outbound location payloads |
| `channels/matrix-migration.md` | How OpenClaw upgrades the previous Matrix plugin in place, including encrypted-state recovery limits and manual recovery steps. |
| `channels/matrix-presentation.md` | Matrix MessagePresentation metadata for OpenClaw-aware clients |
| `channels/matrix-push-rules.md` | Per-recipient Matrix push rules for quiet finalized preview edits |
| `channels/matrix.md` | Matrix support status, setup, and configuration examples |
| `channels/mattermost.md` | Mattermost bot setup and OpenClaw config |
| `channels/msteams.md` | Microsoft Teams bot support status, capabilities, and configuration |
| `channels/nextcloud-talk.md` | Nextcloud Talk support status, capabilities, and configuration |
| `channels/nostr.md` | Nostr DM channel via NIP-04 encrypted messages |
| `channels/pairing.md` | Pairing overview: approve who can DM you + which nodes can join |
| `channels/qa-channel.md` | Synthetic Slack-class channel plugin for repeatable OpenClaw QA scenarios |
| `channels/qqbot.md` | QQ Bot setup, config, and usage |
| `channels/raft.md` | Raft External Agent support through the Raft CLI wake bridge |
| `channels/reef.md` | Reef channel setup: guarded, end-to-end-encrypted messaging between OpenClaw agents of different people |
| `channels/signal.md` | Signal support via signal-cli (native daemon or bbernhard container), setup paths, and number model |
| `channels/slack.md` | Slack setup and runtime behavior (Socket Mode, HTTP Request URLs, and relay mode) |
| `channels/sms.md` | Twilio SMS/MMS setup, access controls, webhooks, and delivery status |
| `channels/synology-chat.md` | Synology Chat webhook setup and OpenClaw config |
| `channels/telegram.md` | Telegram bot support status, capabilities, and configuration |
| `channels/tlon.md` | Tlon/Urbit support status, capabilities, and configuration |
| `channels/troubleshooting.md` | Fast channel level troubleshooting with per channel failure signatures and fixes |
| `channels/twitch.md` | Twitch chat bot: install, credentials, access control, token refresh |
| `channels/wechat.md` | WeChat channel setup through the external openclaw-weixin plugin |
| `channels/wecom.md` | Install the external WeCom plugin and find its versioned setup documentation |
| `channels/whatsapp.md` | WhatsApp channel support, access controls, delivery behavior, and operations |
| `channels/x.md` | X / Twitter mentions, allowlisted public replies, thread context, and event modes |
| `channels/yuanbao.md` | Yuanbao bot overview, features, and configuration |
| `channels/zalo.md` | Zalo bot support status, capabilities, and configuration |
| `channels/zaloclawbot.md` | Zalo ClawBot channel setup through the external openclaw-zaloclawbot plugin |
| `channels/zalouser.md` | Zalo personal account support via native zca-js (QR login), capabilities, and configuration |

### channels/discord/ (10 files)

| File | Description |
|------|-------------|
| `channels/discord/access-control.md` | DM policy, guild allowlists, mention gating, role routing, command auth, and action gates |
| `channels/discord/events.md` | Reaction notifications, presence events and configuration, config writes, proxying, and PluralKit |
| `channels/discord/messaging.md` | Runtime model, reply tags, link previews, live stream previews, ack reactions, and mention aliases |
| `channels/discord/rich-messages.md` | Components v2 containers, interactive component payloads, and exec approvals in Discord |
| `channels/discord/setup.md` | Create the Discord application, invite the bot, and set up a guild workspace |
| `channels/discord/threads-and-sessions.md` | Forum threads, history and context limits, subagent thread sessions, and ACP channel bindings |
| `channels/discord/troubleshooting.md` | Fixes for blocked guild messages, intent errors, gateway timeouts, bot loops, and voice STT drops |
| `channels/discord/voice-channels.md` | Realtime Discord voice channels, auto-join, realtime modes, and voice message attachments |
| `channels/discord/voice-follow.md` | Make the bot join, move between, and leave Discord voice channels with selected users |
| `channels/discord/voice-transcripts.md` | Continuous voice capture, transcript storage, and automatic meeting notes |

### channels/feishu/ (7 files)

| File | Description |
|------|-------------|
| `channels/feishu/access-control.md` | Feishu DM policy, group policy, mention gating, and how to find chat and user IDs |
| `channels/feishu/advanced-configuration.md` | Feishu multi-account setup, message limits, streaming, workspace tools, ACP sessions, and multi-agent routing |
| `channels/feishu/configuration-reference.md` | Every `channels.feishu` configuration key with its default |
| `channels/feishu/dynamic-agents.md` | Per-user agent isolation for Feishu, giving each DM user their own workspace and agent |
| `channels/feishu/messaging.md` | Which Feishu message types OpenClaw receives and sends, including stickers and thread replies |
| `channels/feishu/setup.md` | Feishu/Lark bot setup wizard, and how inbound events are durably queued |
| `channels/feishu/troubleshooting.md` | Silent Feishu bots, missing events, QR setup failures, and leaked App Secrets |

### channels/imessage/ (8 files)

| File | Description |
|------|-------------|
| `channels/imessage/access-control.md` | iMessage DM and group policy, mention gating, per-group prompts, ACP bindings, and config writes |
| `channels/imessage/deployment.md` | Dedicated bot macOS user, remote Mac over Tailscale, multi-account, and DM history patterns |
| `channels/imessage/media.md` | iMessage attachment ingestion, outbound staging, text chunking, and delivery target formats |
| `channels/imessage/messaging.md` | Split-send DM coalescing and automatic inbound recovery after a bridge or gateway restart |
| `channels/imessage/private-api.md` | Disable SIP and library validation, inject the imsg helper, and verify the private API bridge |
| `channels/imessage/rich-messages.md` | iMessage tapbacks, threaded replies, effects, native polls, approval controls, and agent questions |
| `channels/imessage/setup.md` | Install the iMessage plugin, set up imsg on the Messages Mac, and grant macOS permissions |
| `channels/imessage/troubleshooting.md` | Fixes for a missing imsg binary, silent inbound, ignored DMs and groups, and failed remote attachments |

### channels/matrix/ (7 files)

| File | Description |
|------|-------------|
| `channels/matrix/access-control.md` | DM and room policy, allowlists, bot-to-bot traffic, and command authorization |
| `channels/matrix/accounts-and-homeservers.md` | Multi-account layout, private homeservers, proxies, profiles, and target resolution |
| `channels/matrix/encryption.md` | E2EE setup, device verification, cross-signing, and room-key backup |
| `channels/matrix/messaging.md` | Inbound restart recovery, streaming previews, voice-note transcription, and reactions |
| `channels/matrix/rich-messages.md` | Structured reply controls, approval event metadata, and exec approval prompts |
| `channels/matrix/setup.md` | Install the plugin, configure a homeserver account, and control which invites the bot accepts |
| `channels/matrix/threads-and-sessions.md` | Session routing, reply threading, ACP bindings, and room history context |

### channels/msteams/ (8 files)

| File | Description |
|------|-------------|
| `channels/msteams/access-control.md` | Microsoft Teams DM and group policy, team and channel allowlists, and conversation IDs |
| `channels/msteams/authentication.md` | Certificate and managed identity authentication for the Microsoft Teams bot |
| `channels/msteams/cards-and-actions.md` | Microsoft Teams Adaptive Card approvals, polls, presentation cards, member info, and targets |
| `channels/msteams/configuration.md` | Microsoft Teams configuration keys, environment variables, and history limits |
| `channels/msteams/manifest-and-permissions.md` | Microsoft Teams app manifest, RSC permissions, and the Graph permissions each capability needs |
| `channels/msteams/messaging.md` | Microsoft Teams session routing, reply style, attachments, and file sending |
| `channels/msteams/setup.md` | Install the Microsoft Teams plugin, register the bot and Teams app, and run against a dev tunnel |
| `channels/msteams/troubleshooting.md` | Microsoft Teams known limitations, common failures, and reference links |

### channels/slack/ (11 files)

| File | Description |
|------|-------------|
| `channels/slack/access-control.md` | DM policy, channel allowlists, mention gating, and action gates |
| `channels/slack/enterprise-grid.md` | Org-wide Slack installs across every workspace in a Grid organization |
| `channels/slack/events.md` | System events, interactions, and optional presence polling |
| `channels/slack/manifest-and-scopes.md` | Base app manifest, OAuth scopes, and optional manifest settings |
| `channels/slack/media.md` | Audio clips, inbound file handling, chunking, and delivery targets |
| `channels/slack/messaging.md` | Acknowledgement reactions, live streaming previews, and slash commands |
| `channels/slack/rich-messages.md` | Native Block Kit charts and tables, modal submissions, and approval buttons |
| `channels/slack/setup.md` | Install the Slack plugin, create the app, and configure tokens |
| `channels/slack/threads-and-sessions.md` | Session keys, thread replies, reply tags, and Agent View DMs |
| `channels/slack/transports.md` | Socket Mode, HTTP Request URLs, and relay mode compared |
| `channels/slack/troubleshooting.md` | Fixes for silent channels, ignored DMs, and dead transports |

### channels/telegram/ (10 files)

| File | Description |
|------|-------------|
| `channels/telegram/access-control.md` | DM policy, group allowlists, mention gating, and per-chat tool policy |
| `channels/telegram/events.md` | Reaction notifications, config writes from Telegram events, and error reply policy |
| `channels/telegram/media.md` | Photo albums, voice notes, video notes, locations, venues, and stickers |
| `channels/telegram/messaging.md` | Runtime model, stream previews, native commands, reply tags, ack reactions, and send limits |
| `channels/telegram/mini-app.md` | Open the OpenClaw Control UI as a Telegram WebApp with /controlui |
| `channels/telegram/rich-messages.md` | Bot API 10.3 rich messages, inline buttons, message actions, and exec approvals |
| `channels/telegram/setup.md` | Create the Telegram bot token, configure the channel, and approve the first DM |
| `channels/telegram/threads-and-sessions.md` | Forum topic session keys, topic config inheritance, per-topic agents, and ACP bindings |
| `channels/telegram/transports.md` | Long polling and webhook mode compared, with Gateway routes and durable ingress behavior |
| `channels/telegram/troubleshooting.md` | Fixes for silent groups, missing commands, rejected tokens, and unstable polling |

### cli/ (68 files)

| File | Description |
|------|-------------|
| `cli/acp.md` | Run the ACP bridge for IDE integrations |
| `cli/agent.md` | CLI reference for Gateway-backed `openclaw agent` turns and isolated `agent exec` runs |
| `cli/agents.md` | CLI reference for `openclaw agents` (roles, teams, workspaces, routing, and identity) |
| `cli/approvals.md` | CLI reference for `openclaw approvals` and `openclaw exec-policy` |
| `cli/attach.md` | CLI reference for `openclaw attach` (launch Claude Code with a scoped Gateway MCP grant) |
| `cli/audit.md` | CLI reference for activity records, execution identity, and decision receipts |
| `cli/backup.md` | CLI reference for `openclaw backup` (local and offsite archives, SQLite snapshots, Git history, and schedules) |
| `cli/browser.md` | CLI reference for `openclaw browser` (lifecycle, profiles, tabs, actions, state, and debugging) |
| `cli/channels.md` | CLI reference for `openclaw channels` (accounts, status, dead letters, capabilities, resolve, logs, login/logout) |
| `cli/clawbot.md` | CLI reference for `openclaw clawbot` (legacy alias namespace) |
| `cli/completion.md` | CLI reference for `openclaw completion` (generate/install shell completion scripts) |
| `cli/config.md` | CLI reference for `openclaw config` (get/set/patch/unset/file/schema/validate) |
| `cli/configure.md` | CLI reference for `openclaw configure` (interactive configuration prompts) |
| `cli/connect.md` | Connect a device to an OpenClaw Gateway with one pasted command |
| `cli/cron.md` | CLI reference for `openclaw automations` (schedule and run background jobs) |
| `cli/daemon.md` | CLI reference for `openclaw daemon` (legacy alias for gateway service management) |
| `cli/dashboard.md` | CLI reference for `openclaw dashboard` (securely open the Control UI) |
| `cli/devices.md` | CLI reference for `openclaw devices` (device pairing + token rotation/revocation) |
| `cli/directory.md` | CLI reference for `openclaw directory` (self, peers, groups) |
| `cli/dns.md` | CLI reference for `openclaw dns` (wide-area discovery helpers) |
| `cli/docs.md` | CLI reference for `openclaw docs` (search the live docs index) |
| `cli/doctor.md` | CLI reference for `openclaw doctor` (health checks + guided repairs) |
| `cli/file-transfer.md` | CLI reference for `openclaw file-transfer` (review and migrate standing file-transfer approvals) |
| `cli/gateway.md` | OpenClaw Gateway CLI (`openclaw gateway`) — run, query, and discover gateways |
| `cli/health.md` | CLI reference for `openclaw health` (gateway health snapshot via RPC) |
| `cli/hooks.md` | CLI reference for internal hook discovery, eligibility, enablement, and hook packs |
| `cli/index.md` | OpenClaw CLI index: command list, global flags, and links to per-command pages |
| `cli/infer.md` | Infer-first CLI for provider-backed model, image, audio, TTS, video, web, and embedding workflows |
| `cli/logs.md` | CLI reference for `openclaw logs` (tail gateway logs via RPC) |
| `cli/mcp.md` | Expose OpenClaw channel conversations over MCP and manage saved MCP server definitions |
| `cli/memory.md` | CLI reference for `openclaw memory` (status/index/reset/search/forget/promote/promote-explain/rem-harness/rem-backfill/session-backfill) |
| `cli/message.md` | CLI reference for `openclaw message` (send + channel actions) |
| `cli/migrate.md` | CLI reference for `openclaw migrate` (import state from another agent system) |
| `cli/models.md` | CLI reference for `openclaw models` (status/list/set/scan, aliases, fallbacks, shared auth, personal accounts) |
| `cli/node.md` | CLI reference for `openclaw node` (headless node host) |
| `cli/nodes.md` | CLI reference for `openclaw nodes` (status, pairing, invoke, camera/screen/location/notify and the macOS widget panel) |
| `cli/onboard.md` | CLI reference for `openclaw onboard` (interactive onboarding) |
| `cli/openclaw.md` | CLI reference and security model for the inference-backed OpenClaw setup and repair helper |
| `cli/pairing.md` | CLI reference for `openclaw pairing` (approve/list pairing requests) |
| `cli/path.md` | CLI reference for `openclaw path` (inspect and edit workspace files via the `oc://` addressing scheme) |
| `cli/plugins.md` | CLI reference for `openclaw plugins` (init, build, validate, lint, list, install, reload, marketplace, uninstall, enable/disable, doctor) |
| `cli/policy.md` | CLI reference for `openclaw policy` conformance checks |
| `cli/promos.md` | CLI reference for `openclaw promos` (list and claim promotional model offers) |
| `cli/proxy.md` | CLI reference for `openclaw proxy`, including operator-managed proxy validation and the local debug proxy capture inspector |
| `cli/qr.md` | CLI reference for `openclaw qr` (generate mobile pairing QR + setup code) |
| `cli/reset.md` | CLI reference for `openclaw reset` (reset local state/config) |
| `cli/resume.md` | CLI reference for attaching the TUI to a recent Gateway session |
| `cli/sandbox.md` | Manage sandbox runtimes and inspect effective sandbox policy |
| `cli/secrets.md` | CLI reference for `openclaw secrets` (store, reload, audit, configure, apply) |
| `cli/security.md` | CLI reference for `openclaw security` (audit and fix common security footguns) |
| `cli/sessions.md` | CLI reference for listing, importing, archiving, deleting, and maintaining stored sessions |
| `cli/setup.md` | CLI reference for `openclaw setup` (system-agent chat with onboarding fallback) |
| `cli/skills.md` | CLI reference for `openclaw skills` (search/install/update/verify/list/info/check/library/workshop) |
| `cli/status.md` | CLI reference for `openclaw status` (diagnostics, checks, usage snapshots) |
| `cli/storage.md` | List, initialize, and test configured storage locations |
| `cli/system.md` | CLI reference for `openclaw system` (system events, heartbeat, presence) |
| `cli/templates.md` | Author, inspect, and add Template bundles as ordinary agents |
| `cli/transcripts.md` | CLI reference for `openclaw transcripts` (list, show, and export stored transcripts) |
| `cli/triage.md` | CLI reference for `openclaw triage` (sanitized diagnostics and agent handoff) |
| `cli/tui.md` | CLI reference for `openclaw tui` (Gateway-backed or local embedded terminal UI) |
| `cli/uninstall.md` | CLI reference for `openclaw uninstall` (remove gateway service + local data) |
| `cli/update.md` | CLI reference for `openclaw update` (updates, repair, and recovery cleanup) |
| `cli/users.md` | CLI reference for `openclaw users` (profiles, email aliases, and duplicate merges) |
| `cli/voicecall.md` | CLI reference for `openclaw voicecall` (voice-call plugin command surface) |
| `cli/webhooks.md` | CLI reference for `openclaw webhooks` (Gmail Pub/Sub setup and runner) |
| `cli/wiki.md` | CLI reference for `openclaw wiki` (memory-wiki vault status, search, compile, lint, apply, bridge, ChatGPT import, and Obsidian helpers) |
| `cli/workboard.md` | CLI reference for `openclaw workboard` cards, dispatch, and worker runs |
| `cli/worker.md` | Internal operator reference for the restricted cloud worker runtime |

### cli/doctor/ (7 files)

| File | Description |
|------|-------------|
| `cli/doctor/checks.md` | The remaining doctor checks and repairs, from Nix mode to plugins, sandbox, and channels |
| `cli/doctor/health-contract.md` | The detect/repair contract that doctor checks and plugin health checks implement |
| `cli/doctor/lint.md` | Read-only lint findings, check selection, and post-upgrade plugin checks |
| `cli/doctor/recovery.md` | Recover the Gateway service, a remote Gateway, Control UI assets, and Gateway tokens |
| `cli/doctor/running.md` | Doctor postures, example invocations, and the full option table |
| `cli/doctor/sqlite-maintenance.md` | Shared-state compaction plus targeted session SQLite inspection, import, and recovery |
| `cli/doctor/state-migrations.md` | How `doctor --fix` migrates legacy file-backed state into SQLite |

### cli/gateway/ (5 files)

| File | Description |
|------|-------------|
| `cli/gateway/discovery.md` | `openclaw gateway discover` and the Bonjour beacons and TXT hints it scans for |
| `cli/gateway/query.md` | Query a running Gateway: health, usage-cost, stability, diagnostics export, status, connectivity checks, call, suspend, and resume |
| `cli/gateway/restart-and-supervision.md` | `openclaw gateway restart`, install identity, external process supervisors, and Gateway profiling |
| `cli/gateway/running.md` | `openclaw gateway` run options, startup behavior, and revealing the configured token |
| `cli/gateway/service.md` | Install, start, stop, and uninstall the managed Gateway service, including wrappers, heap sizing, and install-time auth |

### cli/mcp/ (6 files)

| File | Description |
|------|-------------|
| `cli/mcp/apps.md` | Enable and secure the MCP Apps host bridge that renders server-provided HTML views |
| `cli/mcp/control-ui.md` | Edit and inspect MCP servers from the browser Control UI settings page |
| `cli/mcp/json-output.md` | JSON output shapes for openclaw mcp status, doctor, and check |
| `cli/mcp/registry.md` | Manage OpenClaw-saved MCP server definitions with the mcp registry subcommands |
| `cli/mcp/serve.md` | Run OpenClaw as a stdio MCP server so an MCP client can read and send channel conversations |
| `cli/mcp/transports.md` | Stdio, SSE/HTTP, and Streamable HTTP transport fields plus the MCP OAuth workflow |

### cli/plugins/ (6 files)

| File | Description |
|------|-------------|
| `cli/plugins/authoring.md` | Scaffold, build, validate, and pack an OpenClaw plugin with `openclaw plugins init` |
| `cli/plugins/inspect-and-diagnose.md` | `plugins inspect`, `plugins doctor`, and `plugins registry` for plugin state, load failures, and the cold registry |
| `cli/plugins/install.md` | Install sources and locators, trust and install policy, capability consent, and marketplace installs |
| `cli/plugins/list.md` | `plugins list` output and options, discovery diagnostics, and the persisted plugin index |
| `cli/plugins/marketplace.md` | `plugins marketplace` entries, list, and refresh, plus hosted feed trust and signed feed profiles |
| `cli/plugins/uninstall-and-update.md` | What `plugins uninstall` removes, how `plugins update` resolves sources, channels, pins, and integrity drift, and reloading edited plugins |

### cli/policy/ (6 files)

| File | Description |
|------|-------------|
| `cli/policy/attestation.md` | Policy evidence, the attestation hash tuple, and `policy watch` drift detection |
| `cli/policy/authoring.md` | Enable the Policy plugin and author `policy.jsonc`, with a minimal example covering every supported section |
| `cli/policy/findings.md` | Every policy check id, what `doctor --fix` will and will not repair, and command exit codes |
| `cli/policy/rules.md` | Every supported `policy.jsonc` rule, the OpenClaw state it observes, and when to use it |
| `cli/policy/running-checks.md` | `policy check`, `policy compare`, and the `plugins.entries.policy.config` settings that govern them |
| `cli/policy/scopes.md` | Use `scopes.<scopeName>` to hold specific agents or channels to stricter policy than the baseline |

### cli/update/ (3 files)

| File | Description |
|------|-------------|
| `cli/update/how-updates-run.md` | How `openclaw update` switches channels, checks the new version, hands off the restart, and updates a Git checkout |
| `cli/update/repair-and-recovery.md` | Recovering from a failed `openclaw update`, plus the `update repair` and `update cleanup` subcommands |
| `cli/update/status-and-history.md` | `openclaw update status` plus the durable run ledger, reports, and artifacts every update writes |

### concepts/ (61 files)

| File | Description |
|------|-------------|
| `concepts/active-memory.md` | Deep conversation-history recall that escalates only when rule-based memory recall is insufficient |
| `concepts/agent-bindings.md` | Route channel accounts and conversations to the right OpenClaw agent |
| `concepts/agent-loop.md` | Agent loop lifecycle, streams, and wait semantics |
| `concepts/agent-runtimes.md` | How OpenClaw separates model providers, models, channels, and agent runtimes |
| `concepts/agent-workspace.md` | Agent workspace: location, layout, and backup strategy |
| `concepts/agent.md` | Agent runtime, workspace contract, and session bootstrap |
| `concepts/architecture.md` | WebSocket gateway architecture, components, and client flows |
| `concepts/compaction.md` | How OpenClaw summarizes long conversations to stay within model limits |
| `concepts/context-engine.md` | Context engine: pluggable context assembly, compaction, and subagent lifecycle |
| `concepts/context.md` | Context: what the model sees, how it is built, and how to inspect it |
| `concepts/decision-models.md` | Choose decision models and define typed choices, scores, and Boolean judgments |
| `concepts/delegate-architecture.md` | Delegate architecture: running OpenClaw as a named agent on behalf of an organization |
| `concepts/dreaming.md` | Background memory consolidation with light, deep, and REM phases plus a Dream Diary |
| `concepts/experimental-features.md` | What experimental flags mean in OpenClaw and which ones are currently documented |
| `concepts/features.md` | OpenClaw capabilities across channels, routing, media, and UX. |
| `concepts/main-session.md` | One rolling conversation across all your channels: the personal-agent default |
| `concepts/managed-worktrees.md` | Run agent tasks in isolated git checkouts with automatic snapshots and cleanup |
| `concepts/mantis-slack-desktop-runbook.md` | Operator runbook for Mantis Slack desktop QA: GitHub dispatch, local CLI, warm VNC leases, hydrate modes, timing interpretation, artifacts, and failure handling |
| `concepts/mantis.md` | Mantis captures visual end-to-end evidence for live transport comparisons and focused candidate-only browser proofs, then attaches the artifacts to PRs. |
| `concepts/markdown-formatting.md` | Markdown formatting pipeline for outbound channels |
| `concepts/memory-architecture.md` | End-to-end architecture of OpenClaw memory: tiers, provenance, dreaming, recall lanes, the user model, and standing intents |
| `concepts/memory-builtin.md` | The default SQLite-based memory backend with keyword, vector, and hybrid search |
| `concepts/memory-honcho.md` | AI-native cross-session memory via the Honcho plugin |
| `concepts/memory-provenance.md` | Trace session-derived memories, control ingestion, and preview or delete tracked memory artifacts |
| `concepts/memory-search.md` | How memory search finds relevant notes using embeddings and hybrid retrieval |
| `concepts/memory.md` | How OpenClaw remembers things across sessions |
| `concepts/messages.md` | Message flow, sessions, queueing, and reasoning visibility |
| `concepts/model-failover.md` | How OpenClaw rotates auth profiles and falls back across models |
| `concepts/model-providers.md` | Index of the model provider reference: quick rules, Control UI and keys, bundled provider plugins, and custom providers |
| `concepts/models.md` | How OpenClaw resolves provider/model refs, config keys, and the `/model` chat command |
| `concepts/multi-agent.md` | Multi-agent routing: agent boundaries, channel accounts, and bindings |
| `concepts/multi-user.md` | How session ownership, presence, and human mentions work when several people operate one agent |
| `concepts/oauth.md` | OAuth in OpenClaw: token exchange, storage, and multi-account patterns |
| `concepts/parallel-specialist-lanes.md` | Run parallel specialist agents without clogging shared model and tool capacity |
| `concepts/personal-agent-benchmark-pack.md` | Local qa-channel scenarios for privacy-preserving personal assistant workflow checks. |
| `concepts/presence.md` | How OpenClaw presence entries are produced, merged, and displayed |
| `concepts/progress-drafts.md` | Progress drafts: one visible work-in-progress message that updates while an agent runs |
| `concepts/qa-e2e-automation.md` | Index of the private QA stack: qa-lab, qa-channel, repo-backed scenarios, live transport lanes, transport adapters, and reporting. |
| `concepts/queue-steering.md` | How active-run steering queues messages at runtime boundaries |
| `concepts/queue.md` | Auto-reply queue modes, shared background capacity, and per-session overrides |
| `concepts/recommended-models.md` | How the curated recommended model list is reviewed, ordered, and published |
| `concepts/retry.md` | Retry policy for outbound provider calls |
| `concepts/runtime-profiles.md` | How the standalone build selects host execution capabilities and where dynamic code runs |
| `concepts/session-attachment.md` | How Gateway-owned sessions continue across the Control UI, terminal, CLI, mobile clients, and coding harnesses |
| `concepts/session-controller.md` | Session scheduling ownership, input custody, and retained settlement |
| `concepts/session-pruning.md` | Trimming old tool results to keep context lean and caching efficient |
| `concepts/session-search.md` | Search past session transcripts and reopen the matching context |
| `concepts/session-state.md` | Durable session state signal log: state versions, watchers, stale-state notices, and reconciliation |
| `concepts/session-tool.md` | Agent tools for session creation, cross-session status, recall, messaging, and sub-agent orchestration |
| `concepts/session.md` | How OpenClaw manages conversation sessions |
| `concepts/soul.md` | Use SOUL.md to give your OpenClaw agent an actual voice instead of generic assistant sludge |
| `concepts/standing-intents.md` | Remember event-conditioned future actions without relying on long conversational context |
| `concepts/storage-locations.md` | Named storage destinations, explicit initialization, encryption, and provider configuration |
| `concepts/streaming.md` | Streaming + chunking behavior (block replies, channel preview streaming, mode mapping) |
| `concepts/subagent-yield-handoff.md` | Ownership of subagent completion and progress when a requester yields |
| `concepts/system-prompt.md` | What the OpenClaw system prompt contains and how it is assembled |
| `concepts/timezone.md` | Where timezones show up in OpenClaw — envelopes, tool payloads, runtime context |
| `concepts/typebox.md` | TypeBox schemas as the single source of truth for the gateway protocol |
| `concepts/typing-indicators.md` | When OpenClaw shows typing indicators and how to tune them |
| `concepts/usage-tracking.md` | Usage tracking surfaces and credential requirements |
| `concepts/user-model.md` | Manage durable user preferences and your Gateway profile identity |

### concepts/active-memory/ (9 files)

| File | Description |
|------|-------------|
| `concepts/active-memory/advanced-options.md` | Escape hatches for thinking, fast mode, and the sub-agent prompt, plus exporting blocking sub-agent transcripts for debugging. |
| `concepts/active-memory/configuration.md` | Every plugins.entries.active-memory key: type, meaning, range, and default, plus the extra tuning fields. |
| `concepts/active-memory/enabling.md` | Two ways to turn active memory on: the per-agent rememberAcrossConversations product setting, and the advanced plugin quick start. |
| `concepts/active-memory/how-it-works.md` | The escalation flow, which surfaces run active memory, the two targeting paths, and the session types the advanced path allows. |
| `concepts/active-memory/memory-tools.md` | The concrete recall tools the blocking sub-agent may call, and per-provider setups for built-in memory, LanceDB, and Lossless Claw. |
| `concepts/active-memory/recommended-setup.md` | The starter configuration to begin with, and the cold-start grace budget to set when upgrading from v2026.4.x. |
| `concepts/active-memory/session-controls.md` | Pause or resume active memory per session or globally, and surface its status, debug summary, and raw hidden prefix in a chat. |
| `concepts/active-memory/troubleshooting.md` | A checklist for when active memory does not run, and the common recall failures with their causes. |
| `concepts/active-memory/tuning.md` | How much conversation the sub-agent sees, how eager it is about returning memory, and how its model is resolved. |

### concepts/model-providers/ (4 files)

| File | Description |
|------|-------------|
| `concepts/model-providers/control-ui-and-keys.md` | Configuring providers from Settings -> Models, plugin-owned provider behavior, and API key rotation. |
| `concepts/model-providers/custom-providers.md` | Providers configured through models.providers: custom endpoints, base URLs, and local inference servers. |
| `concepts/model-providers/official-provider-plugins.md` | Per-provider setup for the bundled provider plugins, the bundled provider table, and provider quirks. |
| `concepts/model-providers/quick-rules.md` | Model refs, CLI helpers, the primary-model preservation rule, and the OpenAI provider/runtime split. |

### concepts/qa-e2e-automation/ (8 files)

| File | Description |
|------|-------------|
| `concepts/qa-e2e-automation/channel-qa-reference.md` | Shared CLI flags for the real-transport lanes and the Buzz, Telegram, and Discord lane reference. |
| `concepts/qa-e2e-automation/command-surface.md` | The `pnpm openclaw qa` subcommand table and the profile-backed `qa run` selector. |
| `concepts/qa-e2e-automation/extending-the-stack.md` | Repo-backed seed assets, provider mock lanes, transport adapters, and what adding a channel takes. |
| `concepts/qa-e2e-automation/operator-flow.md` | Bring up QA Lab and run the observability, Matrix, Discord Mantis, Slack desktop, and credential-pool lanes. |
| `concepts/qa-e2e-automation/qa-reporting.md` | QA report and evidence artifacts, the character-eval judged report, and where each run writes them. |
| `concepts/qa-e2e-automation/scenario-coverage.md` | How taxonomy coverage IDs, scenario YAML, and profiles select what a QA run executes, plus the Multipass suite runner. |
| `concepts/qa-e2e-automation/slack-qa.md` | The Slack QA lane and the workspace, app, and scope provisioning it needs. |
| `concepts/qa-e2e-automation/whatsapp-and-credentials.md` | The WhatsApp QA lane and the shared Convex credential pool used by the real-transport lanes. |

### diagnostics/ (1 files)

| File | Description |
|------|-------------|
| `diagnostics/flags.md` | Diagnostics flags for targeted debug logs |

### gateway/ (62 files)

| File | Description |
|------|-------------|
| `gateway/1password.md` | Use the 1Password plugin, bundled skill, or official MCP with OpenClaw |
| `gateway/audit.md` | Metadata-only activity history plus durable run identity and decision receipts |
| `gateway/authentication.md` | Model authentication: OAuth, API keys, Claude CLI reuse, and Anthropic setup-token |
| `gateway/background-process.md` | Background exec execution and process management |
| `gateway/bonjour.md` | Bonjour/mDNS discovery + debugging (Gateway beacons, clients, and common failure modes) |
| `gateway/cli-backends.md` | CLI backends: run agent turns through a local AI CLI, with an optional MCP tool bridge |
| `gateway/clients.md` | Build a third-party operator or WebChat client for the Gateway WebSocket protocol |
| `gateway/cloud-sessions.md` | Run sessions on paired devices or throwaway cloud machines while the Gateway keeps the transcript, workspace, and credentials |
| `gateway/cloud-workers.md` | Dispatch session work to throwaway cloud machines with OpenClaw worker turns or Codex remote execution |
| `gateway/cloudflare-access.md` | Publish a loopback Gateway through a Cloudflare Tunnel and authenticate every client with Cloudflare Access |
| `gateway/config-agents.md` | Agent defaults, multi-agent routing, session, messages, and talk config |
| `gateway/config-automation.md` | Automation config under cron plus the media model template variable surface |
| `gateway/config-browser-ui-desktop.md` | Browser automation, Control UI presentation, and desktop or paired-node config |
| `gateway/config-channels.md` | Channel configuration: access control, pairing, per-channel keys across Slack, Discord, Telegram, WhatsApp, Matrix, iMessage, and more |
| `gateway/config-cloud-workers.md` | Cloud worker profiles under cloudWorkers, including Crabbox and static SSH development |
| `gateway/config-extensions.md` | Extension config: MCP servers, skills, plugin entries, and the canvas widget presenter |
| `gateway/config-gateway.md` | Gateway config: bind, auth, roles, Control UI, terminal, remote, nodes, TLS, and reload |
| `gateway/config-hooks.md` | Hook config: HTTP contract, agent payload, session policy, mapping, retries, and Gmail |
| `gateway/config-observability.md` | Observability config: audit, logging, diagnostics, and telemetry keys |
| `gateway/config-runtime.md` | Runtime config: worktree storage, capacity, and acceleration, model routing, discovery, updates, ACP, and the wizard |
| `gateway/config-secrets-env.md` | Environment variables, secret providers, auth storage, and $include config splitting |
| `gateway/config-tools.md` | Tools config (policy, experimental toggles, provider-backed tools) and custom provider/base-URL setup |
| `gateway/configuration-examples.md` | Schema-accurate configuration examples for common OpenClaw setups |
| `gateway/configuration-reference.md` | Gateway config reference for core OpenClaw keys, defaults, and links to dedicated subsystem references |
| `gateway/configuration.md` | Configuration overview: common tasks, quick setup, and links to the Configuration reference |
| `gateway/diagnostics.md` | Create shareable Gateway diagnostics bundles for bug reports |
| `gateway/discovery.md` | Node discovery and transports (Bonjour, Tailscale, SSH) for finding the Gateway |
| `gateway/doctor.md` | Doctor command: health checks, config migrations, and repair steps |
| `gateway/embedding.md` | Supervise the OpenClaw Gateway as a child process from Electron or another host app |
| `gateway/external-apps.md` | Current integration path for external apps, scripts, dashboards, CI jobs, and IDE extensions |
| `gateway/gateway-lock.md` | Gateway singleton guard: file lock plus WebSocket/HTTP bind |
| `gateway/health.md` | Health check commands and gateway health monitoring |
| `gateway/heartbeat.md` | Migrate retired heartbeat monitors to ordinary automation jobs |
| `gateway/index.md` | Runbook for the Gateway service, lifecycle, and operations |
| `gateway/local-model-services.md` | Start local model servers on demand before OpenClaw model and embedding requests |
| `gateway/local-models.md` | Run OpenClaw with hardware-aware local model setup or an existing model server |
| `gateway/logging.md` | Logging surfaces, file logs, WS log styles, and console formatting |
| `gateway/multiple-gateways.md` | Run multiple OpenClaw Gateways on one host (isolation, ports, and profiles) |
| `gateway/openai-http-api.md` | Expose an OpenAI-compatible /v1/chat/completions HTTP endpoint from the Gateway |
| `gateway/openresponses-http-api.md` | Expose an OpenResponses-compatible /v1/responses HTTP endpoint from the Gateway |
| `gateway/openshell-workers.md` | Run worker-local inference with OpenShell-brokered credentials without OCE or Kubernetes |
| `gateway/openshell.md` | Use OpenShell as a managed sandbox backend for OpenClaw agents |
| `gateway/opentelemetry.md` | Index of the OpenClaw OpenTelemetry export documentation, one page per reader job |
| `gateway/operator-scopes.md` | Operator roles, scopes, and approval-time checks for Gateway clients |
| `gateway/pairing.md` | Node capability approvals: how nodes gain command exposure after device pairing |
| `gateway/permission-modes.md` | Session permission modes, workspace boundaries, and escalation reviewers |
| `gateway/portals.md` | Expose agent-run development servers to the operator through the Gateway |
| `gateway/postgresql.md` | Set up and operate a PostgreSQL-backed Gateway, with support boundaries, ports, backups, and recovery |
| `gateway/prometheus.md` | Expose OpenClaw diagnostics as Prometheus text metrics through the diagnostics-prometheus plugin |
| `gateway/protocol.md` | Gateway WebSocket protocol: handshake, frames, versioning |
| `gateway/remote.md` | Remote access using Gateway WS, SSH tunnels, and tailnets |
| `gateway/restart-recovery.md` | Gateway restarts send one ordinary resume input to interrupted root sessions, including after a crash |
| `gateway/sandbox-vs-tool-policy-vs-elevated.md` | Why a tool is blocked: sandbox runtime, tool allow/deny policy, and elevated exec gates |
| `gateway/sandboxing.md` | How OpenClaw sandboxing works: modes, scopes, workspace access, and images |
| `gateway/secrets-plan-contract.md` | Contract for `secrets apply` plans: target validation, path matching, and SQLite auth-profile target scope |
| `gateway/secrets.md` | Secrets management: SecretRef contract, shared secret store, runtime snapshots, and safe one-way scrubbing |
| `gateway/stable-https-url.md` | Give a loopback-only Gateway a stable, tailnet-only HTTPS URL with Tailscale Serve |
| `gateway/tailscale.md` | Integrated Tailscale Serve/Funnel for the Gateway dashboard |
| `gateway/telemetry.md` | Daily update requests, update-outcome reports, approximate location, optional anonymous feature statistics, and privacy controls |
| `gateway/tools-invoke-http-api.md` | Invoke a single tool directly via the Gateway HTTP endpoint |
| `gateway/troubleshooting.md` | Index of the deep gateway troubleshooting runbook, grouped by symptom area |
| `gateway/trusted-proxy-auth.md` | Delegate gateway authentication to a trusted reverse proxy (Pomerium, Caddy, nginx + OAuth) |

### gateway/cloud-workers/ (12 files)

| File | Description |
|------|-------------|
| `gateway/cloud-workers/desktop.md` | Watch or control a desktop-capable cloud worker from the Control UI |
| `gateway/cloud-workers/dispatching-a-session.md` | Eligibility gates, the Control UI Place picker, cloud child sessions, and runtime support |
| `gateway/cloud-workers/environment-file.md` | Declare cloud project setup and lifecycle commands with a host-mode devcontainer file |
| `gateway/cloud-workers/native-inference.md` | Worker inference on an externally managed paired worker host |
| `gateway/cloud-workers/per-project-default-profiles.md` | Map a repository to a default cloud worker profile and retain resource identity for cleanup |
| `gateway/cloud-workers/placement-and-machine-selection.md` | Codex on a paired device, either harness on a cloud profile, and per-session operating system and machine class |
| `gateway/cloud-workers/security-model.md` | Worker ingress, tool authority, minted credentials, enrollment binding, and credential boundaries |
| `gateway/cloud-workers/session-lifecycle.md` | Dispatch, workspace reconciliation, moves, stop and reclaim, recovery, and what survives a dead machine |
| `gateway/cloud-workers/setup-and-bundle-installation.md` | The setup command (safe to repeat), Gateway-prepared runtime archives, and building a custom node package |
| `gateway/cloud-workers/troubleshooting.md` | Symptoms and fixes for profile advertisement, authorization, bootstrap, enrollment, and teardown |
| `gateway/cloud-workers/verify-the-profile.md` | Validate config, confirm the profile is advertised, and prove a new cloud worker profile end to end |
| `gateway/cloud-workers/warm-images.md` | Capture, reuse, refresh, and recover prepared cloud-worker images |

### gateway/config-agents/ (8 files)

| File | Description |
|------|-------------|
| `gateway/config-agents/entries-and-multi-agent.md` | agents.entries overrides, multiAgent bindings, binding match fields, and access profiles |
| `gateway/config-agents/heartbeat-compaction-and-streaming.md` | Heartbeat migration, system agent, compaction, context pruning, block streaming, and typing indicators |
| `gateway/config-agents/messages-and-talk.md` | messages.* delivery, prefixes, ack reactions, queueing, TTS, and talk.* defaults |
| `gateway/config-agents/models.md` | Default model, fallback chain, per-purpose model slots, and model selection scope |
| `gateway/config-agents/runtime-and-cli-backends.md` | Agent runtime policy on providers and models, CLI backend selection, and GPT-5 personality |
| `gateway/config-agents/sandbox.md` | The agents.defaults.sandbox block: image, mounts, workspace mode, and network policy |
| `gateway/config-agents/sessions.md` | session.* scope, identity links, reset policy, sharing, and retention |
| `gateway/config-agents/workspace-and-bootstrap.md` | Agent workspace paths, bootstrap injection, context budgets, image handling, and timezone |

### gateway/config-channels/ (6 files)

| File | Description |
|------|-------------|
| `gateway/config-channels/commands.md` | The commands.* block: native and text command surfaces, bash, config writes, and owner allowlists |
| `gateway/config-channels/community-chat.md` | Per-channel config keys for Discord, Matrix, and IRC |
| `gateway/config-channels/mention-gating-and-history.md` | Group mention gating, visible reply modes, DM history limits, and self-chat mode |
| `gateway/config-channels/personal-messaging.md` | Per-channel config keys for WhatsApp, Telegram, Signal, iMessage, and LINE |
| `gateway/config-channels/shared-policies.md` | Shared channel keys: DM and group access policies, model overrides, channel defaults, and multi-account setup |
| `gateway/config-channels/workplace-chat.md` | Per-channel config keys for Google Chat, Slack, Mattermost, and Microsoft Teams |

### gateway/config-tools/ (6 files)

| File | Description |
|------|-------------|
| `gateway/config-tools/built-in-tools.md` | Per-tool settings for exec, loop detection, web search and fetch, media understanding, and the plan tool |
| `gateway/config-tools/custom-providers.md` | models.providers registration, base-URL trust, and the full provider field reference |
| `gateway/config-tools/github-identity.md` | tools.github: the shared managed GitHub CLI identity, its refresh, and its execution boundaries |
| `gateway/config-tools/provider-examples.md` | Worked custom-provider configurations for Cerebras, Kimi, llama.cpp, LM Studio, MiniMax, Moonshot, OpenCode, Synthetic, and Z.AI |
| `gateway/config-tools/sessions-and-subagents.md` | tools.agentToAgent, tools.sessions visibility, sessions_spawn attachments, and subagent defaults |
| `gateway/config-tools/tool-policy.md` | Tool profiles, groups, sandbox tool gates, code mode, and allow/deny policy layers |

### gateway/configuration/ (4 files)

| File | Description |
|------|-------------|
| `gateway/configuration/common-tasks.md` | Task-oriented configuration recipes: channels, models, access, sessions, sandboxing, cron, hooks, routing, and $include |
| `gateway/configuration/config-rpc.md` | Writing config over the gateway API: config.get, config.patch, config.apply, and replacePaths |
| `gateway/configuration/environment-variables.md` | Env var sources and precedence, inline env config, shell env import, substitution, and secret refs |
| `gateway/configuration/hot-reload.md` | How the Gateway applies config snapshots, which changes hot-apply, and which need a restart |

### gateway/doctor/ (7 files)

| File | Description |
|------|-------------|
| `gateway/doctor/checks.md` | Summary of every repair, migration, and health check doctor runs |
| `gateway/doctor/config-migrations.md` | Config normalization, legacy config key migrations, and update-time schema publication |
| `gateway/doctor/gateway-and-services.md` | Gateway service, pairing, security, workspace status, auth, health, and supervisor checks (checks 8-17) |
| `gateway/doctor/provider-repairs.md` | Provider override, browser, OAuth TLS, and route repairs (checks 2b-2g) |
| `gateway/doctor/running.md` | Run doctor, pick a mode, and read the read-only lint report |
| `gateway/doctor/state-and-sessions.md` | Disk layout, cron store, session, model auth, sandbox, and plugin install repairs (checks 3-7b) |
| `gateway/doctor/workspace-and-dreams.md` | Config write, workspace tips, repointed aliases, and the Control UI Dreams actions |

### gateway/opentelemetry/ (5 files)

| File | Description |
|------|-------------|
| `gateway/opentelemetry/configuration.md` | Signal toggles, the diagnostics.otel field reference, OTEL_* environment variables, and sampling and flushing |
| `gateway/opentelemetry/model-calls-and-metrics.md` | What a model-call span measures, Claude Code CLI turn fidelity, and the full exported metric catalog |
| `gateway/opentelemetry/privacy-and-trace-context.md` | Continue an upstream W3C trace through the Gateway WebSocket, and control what content leaves the process |
| `gateway/opentelemetry/setup.md` | Install and enable diagnostics-otel, see which processes export, check exporter health, and turn export off |
| `gateway/opentelemetry/spans-and-events.md` | The exported span catalog with its attributes, and the diagnostic event catalog behind the metrics and spans |

### gateway/protocol/ (13 files)

| File | Description |
|------|-------------|
| `gateway/protocol/auth.md` | Handshake auth paths, device identity, pairing signatures, and TLS pinning |
| `gateway/protocol/handshake.md` | Connect frame, hello-ok payload, client capabilities, roles, and scopes |
| `gateway/protocol/ledgers.md` | Audit ledger RPCs, scopes, cursors, and payloads |
| `gateway/protocol/operator-methods.md` | Operator helper methods, exec approvals, and agent delivery fallback |
| `gateway/protocol/presence.md` | Presence snapshots, node host stats, and broadcast event scoping |
| `gateway/protocol/rpc-bootstrap-and-events.md` | Session list bootstrap, the common event families, and the node helper and exec lifecycle contracts |
| `gateway/protocol/rpc-devices-nodes-and-approvals.md` | Gateway RPC families for device pairing, node invoke, approvals, Control UI commands, and automation |
| `gateway/protocol/rpc-methods.md` | RPC method families, discovery, session list bootstrap, and event families |
| `gateway/protocol/rpc-session-control.md` | The session control RPC family: listing, sending, streaming, forking, and lifecycle methods |
| `gateway/protocol/rpc-system-and-channels.md` | Gateway RPC families for system status, memory, models, channels, plugins, messaging, and the operator terminal |
| `gateway/protocol/rpc-talk-config-and-agents.md` | Gateway RPC families for Talk and TTS, secrets and config, updates, the wizard, and agent workspaces |
| `gateway/protocol/transport.md` | Gateway WS transport: packages, frame shapes, limits, and WebRTC Talk control |
| `gateway/protocol/versioning.md` | Protocol version constants, the N-1 node window, and client defaults |

### gateway/sandboxing/ (12 files)

| File | Description |
|------|-------------|
| `gateway/sandboxing/crabbox-backend.md` | Tool-call isolation on a Crabbox-leased machine with fixed runtime identity and repository-owned execution |
| `gateway/sandboxing/docker-backend.md` | Docker backend defaults, the restricted runtime posture, DooD constraints, and the sandboxed browser |
| `gateway/sandboxing/images-and-setup.md` | Building the default, common, and browser sandbox images, and the network and certificate defaults |
| `gateway/sandboxing/modes-scope-and-backend.md` | The three settings that control when sandboxing applies and how many environments are created |
| `gateway/sandboxing/multiple-folders-for-one-agent.md` | Docker bind mounts for extra host folders, their access modes, and the bind security rules |
| `gateway/sandboxing/openshell-backend.md` | The OpenShell managed sandbox, its mirror and remote workspace modes, and its lifecycle |
| `gateway/sandboxing/podman-backend.md` | Selecting the native Podman CLI, rootless user mapping, and Podman-outside-of-Podman constraints |
| `gateway/sandboxing/setup-command.md` | The one-time container setup hook, where it is configured, and its common pitfalls |
| `gateway/sandboxing/ssh-backend.md` | Sandboxing tools on an arbitrary SSH-accessible machine, and its remote workspace as the source of truth |
| `gateway/sandboxing/supported-capability-matrix.md` | What each sandbox backend supports for shell, files, workspace, network, browser, and plugin tools |
| `gateway/sandboxing/what-gets-sandboxed.md` | Which tool calls move into the sandbox and which stay on the Gateway host |
| `gateway/sandboxing/workspace-access.md` | The none, ro, and rw workspace access modes, the role-required cap, and skill mirroring |

### gateway/secrets/ (5 files)

| File | Description |
|------|-------------|
| `gateway/secrets/integration-examples.md` | Exec provider recipes for external secret managers, MCP server environment variables, and sandbox SSH |
| `gateway/secrets/operations.md` | Supported surfaces, precedence, activation triggers, degraded signals, and the audit and configure workflow |
| `gateway/secrets/runtime-model.md` | How the Gateway resolves, injects, and isolates secrets at runtime |
| `gateway/secrets/secret-store-and-egress.md` | The shared secret store, the default-off secret egress proxy, and file-backed API keys |
| `gateway/secrets/secretref-contract.md` | SecretRef sources, id grammar, validation rules, and provider configuration |

### gateway/security/ (16 files)

| File | Description |
|------|-------------|
| `gateway/security/access-control.md` | Who can reach the agent: DM policy, allowlists, DM session isolation, context visibility, and command authorization |
| `gateway/security/audit-checks.md` | Reference catalog of checkIds emitted by openclaw security audit |
| `gateway/security/browser-control.md` | What giving the model a real browser exposes, and the SSRF policy that bounds it |
| `gateway/security/dependency-locking.md` | How OpenClaw reviews dependency changes and packages plugin runtime dependencies |
| `gateway/security/exposure-runbook.md` | Pre-flight and rollback checklist before exposing an OpenClaw Gateway beyond loopback |
| `gateway/security/hardened-baseline.md` | Copy/paste Gateway configurations that keep the deployment private, paired, and tool-restricted |
| `gateway/security/index.md` | Trust model, safe defaults, and hardening guidance for running OpenClaw |
| `gateway/security/network-exposure.md` | Bind, firewall, discovery, Gateway auth, Tailscale, reverse proxy, and Control UI exposure settings |
| `gateway/security/operator-incident-response.md` | Contain, rotate, audit, and collect evidence after a suspected compromise of your own Gateway |
| `gateway/security/prompt-injection.md` | How untrusted content reaches the model, what OpenClaw does about it, and which layers you still have to enforce |
| `gateway/security/rate-limiting.md` | Reference for every Gateway rate limit: pre-auth socket budgets and lockouts, browser and webhook throttles, the control-plane write backstop, ACP session caps, |
| `gateway/security/running-the-audit.md` | What `openclaw security audit` inspects and the order to fix its findings in |
| `gateway/security/secrets-and-storage.md` | What OpenClaw writes to disk, which files hold credentials, and how logs and transcripts are handled |
| `gateway/security/secure-file-operations.md` | How OpenClaw handles local file access safely, including native Windows credential checks |
| `gateway/security/tool-permissions.md` | Cross-provider messaging, control-plane tools, node execution, plugins, sandboxing, and per-agent access profiles |
| `gateway/security/trust-model.md` | The trust boundary OpenClaw supports, the controls it does and does not provide, and how to report a vulnerability |

### gateway/troubleshooting/ (6 files)

| File | Description |
|------|-------------|
| `gateway/troubleshooting/agent-replies-and-control-ui.md` | Storage errors, missing replies, and dashboard or Control UI connectivity and auth codes |
| `gateway/troubleshooting/channel-delivery-and-tools.md` | Channels that connect but do not deliver, automation delivery, and node or browser tool failures |
| `gateway/troubleshooting/config-validation-and-probes.md` | Recovering from a rejected config and reading gateway check warnings |
| `gateway/troubleshooting/gateway-service-and-process.md` | The managed gateway service not running, macOS launchd faults, and high-memory exits |
| `gateway/troubleshooting/skills-and-model-providers.md` | Skill root containment, Anthropic 429s, upstream 403s, and local OpenAI-compatible backends |
| `gateway/troubleshooting/updates-and-rollbacks.md` | Symptoms that appear after an update, a rollback, or a split-brain install of the Gateway |

### help/ (12 files)

| File | Description |
|------|-------------|
| `help/debugging.md` | Debugging tools: watch mode, raw model streams, and tracing reasoning leakage |
| `help/environment.md` | Where OpenClaw loads environment variables and the precedence order |
| `help/faq-first-run.md` | FAQ: quick-start and first-run setup — install, onboard, auth, subscriptions, initial failures |
| `help/faq-models.md` | FAQ: model defaults, selection, aliases, switching, failover, and auth profiles |
| `help/faq.md` | Frequently asked questions about OpenClaw setup, configuration, and usage |
| `help/index.md` | Help hub: common fixes, install sanity, and where to look when something breaks |
| `help/scripts.md` | Repository scripts: purpose, scope, and safety notes |
| `help/support.md` | Official OpenClaw support, safe diagnostics, and separate bug and security reporting routes |
| `help/testing-live.md` | Live (network-touching) tests: model matrix, CLI backends, ACP, media providers, credentials |
| `help/testing-updates-plugins.md` | How OpenClaw validates update paths, package migrations, and plugin install/update behavior |
| `help/testing.md` | Index of the OpenClaw testing kit, one page per reader job |
| `help/troubleshooting.md` | Symptom first troubleshooting hub for OpenClaw |

### help/faq/ (13 files)

| File | Description |
|------|-------------|
| `help/faq/chat-commands-and-stopping.md` | Hiding system messages, cancelling runs, cross-context messaging, and the steering queue |
| `help/faq/config-basics.md` | Config format and location, restarts, web search, config.apply recovery, and browser control |
| `help/faq/env-vars.md` | How OpenClaw loads environment variables and why service starts lose them |
| `help/faq/gateway-ports-and-remote-mode.md` | Gateway ports, remote-mode clients, bind addresses, and running more than one Gateway |
| `help/faq/logging-and-debugging.md` | Where logs are, service start and restart, and what to check when replies never arrive |
| `help/faq/media-and-attachments.md` | Why a generated image or PDF was not delivered to chat |
| `help/faq/remote-gateways-and-nodes.md` | Command propagation, Tailscale setups, multi-device nodes, and applying config remotely |
| `help/faq/sandboxing-and-memory.md` | Sandbox modes, host folder binds, and how agent memory persists |
| `help/faq/security-and-access-control.md` | Exposure, prompt injection, third-party skills, pairing, and how much autonomy to grant |
| `help/faq/sessions-and-chats.md` | Fresh sessions, context truncation, full resets, groups, and multi-agent setups |
| `help/faq/skills-and-automation.md` | Customizing skills, per-task models, subagents, cron jobs, and background runs |
| `help/faq/what-is-openclaw.md` | What OpenClaw is, who it is for, how it is funded, and how it compares |
| `help/faq/where-things-live-on-disk.md` | Data locations, AGENTS.md and SOUL.md placement, backups, and uninstalling |

### help/faq-first-run/ (2 files)

| File | Description |
|------|-------------|
| `help/faq-first-run/providers-and-hosting.md` | FAQ: provider auth and limits, model choice, hardware, and where to run the Gateway |
| `help/faq-first-run/quick-start.md` | FAQ: install, onboarding, first-run failures, builds, and subscription basics |

### help/testing/ (9 files)

| File | Description |
|------|-------------|
| `help/testing/boundary-scenarios.md` | Request, paid-work, recovery, default, and measurement proof contracts |
| `help/testing/contracts.md` | Plugin and channel contract test commands, categories, and when to run them |
| `help/testing/control-ui-load.md` | Measure fixed-duration Control UI protocol load against an isolated Gateway |
| `help/testing/docker.md` | The Docker works-in-Linux runners, their scheduler, lanes, and env vars |
| `help/testing/fixtures.md` | Temporary directories, module mocks, database cleanup, watchers, and skill eval fixtures |
| `help/testing/live-workflows.md` | Live provider debugging lanes plus the Docker and Parallels smokes that support them |
| `help/testing/qa-runners.md` | The qa-lab command surface, shared Convex credentials, and adding a channel to QA |
| `help/testing/suites.md` | The unit, e2e, and live suites, which one to run, and the offline regression checks |
| `help/testing/writing-tests.md` | Behavioral integration proof, test value and cost, and regression authoring |

### help/testing-live/ (6 files)

| File | Description |
|------|-------------|
| `help/testing-live/acp-and-codex.md` | The live ACP conversation-bind smoke and the plugin-owned Codex app-server harness smoke |
| `help/testing-live/cli-backends.md` | Live CLI backend smoke (Claude, Gemini, other local CLIs) and the APNs HTTP/2 proxy reachability check |
| `help/testing-live/long-context-and-matrix.md` | The OpenAI long-context proof runs, the recommended live recipes, and the curated model matrix |
| `help/testing-live/media-providers.md` | Deepgram, BytePlus, ComfyUI, and the shared image/music/video generation live sweeps |
| `help/testing-live/model-smoke.md` | The two-layer live model smoke: direct completion and the gateway + dev agent pipeline |
| `help/testing-live/quick-smokes.md` | Ad hoc local media/voice smokes plus the Android node capability sweep |

### install/ (39 files)

| File | Description |
|------|-------------|
| `install/ansible.md` | Automated, hardened OpenClaw installation with Ansible, Tailscale VPN, and firewall isolation |
| `install/azure.md` | Run OpenClaw Gateway 24/7 on an Azure Linux VM with durable state |
| `install/backups.md` | Back up OpenClaw state: archives, per-database snapshots, scheduling, offsite copies, and continuous replication |
| `install/bun-compatibility.md` | Bun runtime requirements, macOS SQLite selection, limitations, and release history |
| `install/bun.md` | Bun workflow for installs, package scripts, and opt-in runtime use |
| `install/cloudflare.md` | Experimental Cloudflare Worker and Container deployment with Litestream backups to R2 |
| `install/daytona.md` | Run OpenClaw in a Daytona cloud sandbox with SSH access and signed preview URLs |
| `install/development-channels.md` | Stable, extended-stable, beta, and dev channels: semantics, switching, pinning, and tagging |
| `install/digitalocean.md` | Host OpenClaw on a DigitalOcean Droplet |
| `install/docker-vm-runtime.md` | Shared Docker VM runtime steps for long-lived OpenClaw Gateway hosts |
| `install/docker.md` | Optional Docker-based setup and onboarding for OpenClaw |
| `install/exe-dev.md` | Run OpenClaw Gateway on exe.dev (VM + HTTPS proxy) for remote access |
| `install/fly.md` | Step-by-step Fly.io deployment for OpenClaw with persistent storage and HTTPS |
| `install/gcp.md` | Run OpenClaw Gateway 24/7 on a GCP Compute Engine VM with Docker |
| `install/hetzner.md` | Run OpenClaw Gateway 24/7 on a Hetzner VPS with Docker |
| `install/hostinger.md` | Host OpenClaw on Hostinger |
| `install/index.md` | Install OpenClaw - desktop app downloads, installer script, npm/pnpm/bun, from source, Docker, and more |
| `install/installer.md` | How the installer scripts work (install.sh, install-cli.sh, install.ps1), flags, and automation |
| `install/jetson.md` | Jetson-specific preparation for hosting an OpenClaw Gateway on Linux ARM64 |
| `install/kubernetes.md` | Deploy OpenClaw Gateway to a Kubernetes cluster with Kustomize |
| `install/macos-vm.md` | Run OpenClaw in a sandboxed macOS VM (local or hosted) when you need isolation or iMessage |
| `install/migrating-claude.md` | Move Claude Code and Claude Desktop local state into OpenClaw with a previewed import |
| `install/migrating-hermes.md` | Move from Hermes to OpenClaw with a previewed, reversible import |
| `install/migrating.md` | Migration hub: cross-system imports, machine-to-machine moves, and plugin upgrades |
| `install/nix.md` | Install OpenClaw declaratively with Nix |
| `install/node-compatibility.md` | Supported Node.js versions, SQLite requirements, platform limits, and release history |
| `install/node.md` | Install and configure Node.js for OpenClaw - version requirements, install options, and PATH troubleshooting |
| `install/northflank.mdx` | Deploy OpenClaw on Northflank with one-click template |
| `install/oracle.md` | Host OpenClaw on Oracle Cloud's Always Free ARM tier |
| `install/podman.md` | Run OpenClaw in a rootless Podman container |
| `install/railway.mdx` | Deploy OpenClaw on Railway with one-click template |
| `install/raspberry-pi.md` | Host OpenClaw on a Raspberry Pi for always-on self-hosting |
| `install/render.mdx` | Deploy OpenClaw on Render with Infrastructure-as-Code |
| `install/standalone-aot-actions.md` | Build a manually enabled unsigned emitted-JS AOT experiment without changing releases |
| `install/standalone.md` | Build a standalone OpenClaw executable with Bun and a companion runtime directory |
| `install/uninstall.md` | Uninstall OpenClaw completely (CLI, service, state, workspace) |
| `install/update-troubleshooting.md` | Recover from failed OpenClaw updates in the Control UI or CLI |
| `install/updating.md` | Updating OpenClaw safely (global install or source), plus rollback strategy |
| `install/upstash.md` | Host OpenClaw on Upstash Box with keep-alive and SSH tunnel access |

### install/docker/ (4 files)

| File | Description |
|------|-------------|
| `install/docker/compose-operations.md` | Day-to-day Compose commands, operational accordions, and image maintenance |
| `install/docker/environment-variables.md` | Every environment variable the Docker setup script and Compose file accept |
| `install/docker/networking-and-storage.md` | Bind modes, reaching host providers, the Claude CLI backend, Bonjour, and what persists |
| `install/docker/sandbox-and-troubleshooting.md` | Running agent tools in Docker sandboxes, and fixing a gateway container that misbehaves |

### install/updating/ (3 files)

| File | Description |
|------|-------------|
| `install/updating/automatic-updates.md` | The auto-updater, per-channel automatic behavior, and how update campaigns apply and report an update |
| `install/updating/rollback-and-recovery.md` | Downgrading, automatic schema-neutral rollback, verified pre-update backups, and triage when an update leaves you stuck |
| `install/updating/update-methods.md` | Switching install types, the source-server script, re-running the installer, and manual npm/pnpm/bun updates |

### nodes/ (21 files)

| File | Description |
|------|-------------|
| `nodes/audio.md` | How inbound audio/voice notes are downloaded, transcribed, and injected into replies |
| `nodes/camera.md` | Camera capture and macOS physical PTZ control on paired nodes |
| `nodes/command-policy.md` | Platform default allowlists, dangerous-command opt-ins, and the gateway.nodes configuration |
| `nodes/computer-use.md` | Capability-based control of Gateway and paired node desktops through the computer tool |
| `nodes/device-commands.md` | CLI helpers for the widget panel, camera, screen, location, SMS, and device data |
| `nodes/file-transfers.md` | Upload files into a node terminal and move files with the File Transfer plugin |
| `nodes/images.md` | Image and media handling rules for send, gateway, and agent replies |
| `nodes/index.md` | Nodes: pairing, capabilities, permissions, and CLI helpers for camera/screen/device/notifications/system and the macOS widget panel |
| `nodes/location-command.md` | Location command for nodes, platform permission modes, and Linux GeoClue setup |
| `nodes/mcp-and-skills.md` | Publish MCP servers, skills, and local model inference from a paired node |
| `nodes/media-playback.md` | Inline audio and video playback across the Control UI and native apps |
| `nodes/media-understanding.md` | Inbound image/audio/video understanding (optional) with provider + CLI fallbacks |
| `nodes/node-exec.md` | Allowlist node commands, point exec at a node, and invoke commands directly |
| `nodes/node-host.md` | Start a headless or service node host, pair it, and use its system commands |
| `nodes/pairing-and-status.md` | Pair a node to the Gateway, read its status, and upgrade a fleet in the right order |
| `nodes/presence.md` | Detect the Mac you most recently used and route node alerts there |
| `nodes/session-catalogs.md` | Discover, import, and continue native session transcripts on the Gateway and paired nodes |
| `nodes/session-hosting.md` | Enable worker session hosting on a paired node, choose a device, and isolate workers in containers |
| `nodes/talk.md` | Talk mode: continuous speech conversations across local STT/TTS and realtime voice |
| `nodes/troubleshooting.md` | Troubleshoot node pairing, foreground requirements, permissions, and tool failures |
| `nodes/voicewake.md` | Global voice wake words (Gateway-owned) and how they sync across nodes |

### nodes/talk/ (4 files)

| File | Description |
|------|-------------|
| `nodes/talk/client-ui.md` | Talk controls and behavior in the macOS, Apple Watch, and Android clients |
| `nodes/talk/macos-relay.md` | macOS Talk overlay behavior and the streamed realtime Gateway relay path |
| `nodes/talk/realtime-sessions.md` | Voice selection from chat, realtime delegation, steering, transcripts, and browser Talk behavior |
| `nodes/talk/session-ownership.md` | How Talk resolves the owning agent, session key, store, and control authority |

### platforms/ (10 files)

| File | Description |
|------|-------------|
| `platforms/android.md` | Android app (node): pairing, connection recovery, chat, voice, and device commands |
| `platforms/chromeos.md` | Run the OpenClaw Gateway on ChromeOS inside a Crostini Linux container |
| `platforms/easyrunner.md` | Run the OpenClaw Gateway on EasyRunner with Podman and Caddy |
| `platforms/index.md` | Platform support overview (Gateway + companion apps) |
| `platforms/ios-healthkit.md` | Enable and invoke privacy-gated HealthKit summaries from an iOS node |
| `platforms/ios.md` | iOS node app: connect to the Gateway, pairing, device capabilities, and troubleshooting |
| `platforms/linux.md` | Linux support + companion app status |
| `platforms/macos.md` | Install and use the OpenClaw macOS menu bar app |
| `platforms/omarchy.md` | OpenClaw on Omarchy: bar plugin, desktop app handoff, and support |
| `platforms/windows.md` | Windows Hub (recommended), Tauri desktop backup, native CLI and Gateway, WSL2, and troubleshooting |

### platforms/mac/ (16 files)

| File | Description |
|------|-------------|
| `platforms/mac/bundled-gateway.md` | Run, update, and troubleshoot the Gateway included with the macOS app |
| `platforms/mac/canvas.md` | Present hosted widgets in the macOS panel |
| `platforms/mac/dev-setup.md` | Setup guide for developers working on the OpenClaw macOS app |
| `platforms/mac/health.md` | How the macOS app reports gateway/channel health states |
| `platforms/mac/icon.md` | Menu bar icon states and animations for OpenClaw on macOS |
| `platforms/mac/logging.md` | macOS app log redaction, opt-in diagnostics files, and native OSLog privacy flags |
| `platforms/mac/menu-bar.md` | Menu bar status logic and what is surfaced to users |
| `platforms/mac/peekaboo.md` | PeekabooBridge integration for macOS UI automation |
| `platforms/mac/permissions.md` | macOS permission persistence (TCC) and signing requirements |
| `platforms/mac/remote.md` | macOS app flow for controlling a remote OpenClaw Gateway |
| `platforms/mac/signing.md` | Signing steps for macOS debug builds generated by packaging scripts |
| `platforms/mac/skills.md` | Manage Gateway skills from the macOS app's Dashboard |
| `platforms/mac/voice-overlay.md` | Voice overlay lifecycle when wake-word and push-to-talk overlap |
| `platforms/mac/voicewake.md` | Voice wake and push-to-talk modes plus routing details in the mac app |
| `platforms/mac/webchat.md` | Choose the Web or experimental Native Mac experience and use Gateway chat windows |
| `platforms/mac/xpc.md` | macOS IPC architecture for OpenClaw app, gateway node transport, and PeekabooBridge |

### plugins/ (75 files)

| File | Description |
|------|-------------|
| `plugins/adding-capabilities.md` | Contributor guide for adding a new shared capability to the OpenClaw plugin system |
| `plugins/admin-http-rpc.md` | Expose selected Gateway control-plane methods through the bundled, opt-in admin-http-rpc plugin |
| `plugins/agent-guidance.md` | Shared operator-managed instructions without rewriting agent workspace files |
| `plugins/agentsapi.md` | Use the cloud-hosted Agents API harness, powered by Codex, with OpenClaw |
| `plugins/apple-fm.md` | Use on-device Apple Foundation Models for lightweight OpenClaw setup on a Mac |
| `plugins/architecture-internals.md` | Plugin architecture internals: load pipeline, registry, runtime hooks, HTTP routes, and reference tables |
| `plugins/architecture.md` | Plugin internals: capability model, ownership, contracts, load pipeline, and runtime helpers |
| `plugins/beam.md` | Publish coding sessions for shared viewing and live Team continuation |
| `plugins/building-plugins.md` | Create your first OpenClaw plugin in minutes |
| `plugins/bundles.md` | Install and use Agent Plugins, Codex, Claude, and Cursor bundles as OpenClaw plugins |
| `plugins/cli-backend-plugins.md` | Build a plugin that registers a local AI CLI backend |
| `plugins/cloudflare.md` | Configure Cloudflare R2 as an encrypted OpenClaw storage location |
| `plugins/codex-computer-use.md` | Set up Codex Computer Use for Codex-mode OpenClaw agents |
| `plugins/codex-harness-reference.md` | Configuration, auth, discovery, and app-server reference for the Codex harness |
| `plugins/codex-harness-runtime.md` | Runtime boundaries, hooks, tools, permissions, and diagnostics for the Codex harness |
| `plugins/codex-harness.md` | Run OpenClaw embedded agent turns through the official Codex app-server harness |
| `plugins/codex-native-plugins.md` | Configure native Codex plugins for Codex-mode OpenClaw agents |
| `plugins/codex-supervision.md` | Browse non-archived native Codex sessions and paginated transcripts across OpenClaw nodes |
| `plugins/community.md` | Find and publish community-maintained OpenClaw plugins |
| `plugins/compatibility.md` | Plugin compatibility contracts, deprecation metadata, and migration expectations |
| `plugins/copilot.md` | Run OpenClaw embedded agent turns through the external GitHub Copilot SDK harness |
| `plugins/dependency-resolution.md` | How OpenClaw installs plugin packages and resolves plugin dependencies |
| `plugins/facetime-recovery.md` | Remove FaceTime native artifacts and restore standard Mac security policy |
| `plugins/facetime.md` | Set up FaceTime voice calls with your OpenClaw agent on a Mac |
| `plugins/feature-plugins.md` | Build plugins with typed operations, native pages, and replaceable Control UI views |
| `plugins/geolocation.md` | Resolve a connecting client's IP address to a coarse city using a locally cached database, with no per-lookup third-party calls |
| `plugins/github.md` | Find public GitHub issues and pull requests, and read items beside chat |
| `plugins/google-meet.md` | Google Meet plugin: join explicit Meet URLs through Chrome or Twilio with agent talk-back defaults |
| `plugins/hooks.md` | Plugin hooks: intercept agent, tool, message, session, and Gateway lifecycle events |
| `plugins/install-overrides.md` | Test packaged plugin overrides with setup-time install flows |
| `plugins/knowledge.md` | Knowledge: an evidence-backed knowledge vault, memory provider, and Control UI explorer for OpenClaw agents |
| `plugins/llama-cpp.md` | Run GGUF chat with managed or existing llama.cpp servers and managed local embeddings |
| `plugins/logbook.md` | Optional automatic work journal built from periodic screen snapshots |
| `plugins/manage-plugins.md` | Manage OpenClaw plugins from the Control UI or CLI |
| `plugins/manifest.md` | Plugin manifest + JSON schema requirements (strict config validation) |
| `plugins/mcp-relay.md` | Connect ChatGPT and Claude to your Gateway through the opt-in MCP relay plugin |
| `plugins/meeting-plugins.md` | Choose and configure Google Meet, Microsoft Teams, Slack huddles, or Zoom participation |
| `plugins/memory-lancedb.md` | Configure the official external LanceDB memory plugin, including local Ollama-compatible embeddings |
| `plugins/memory-wiki.md` | memory-wiki: compiled knowledge vault with provenance, claims, dashboards, and bridge mode |
| `plugins/message-presentation.md` | Semantic message cards, charts, tables, controls, fallback text, and delivery hints for channel plugins |
| `plugins/muse.md` | Run OpenClaw embedded agent turns for Meta models through the Muse Code CLI |
| `plugins/oc-path.md` | Bundled `oc-path` plugin: ships the `openclaw path` CLI for the `oc://` workspace-file addressing scheme |
| `plugins/onepassword.md` | Resolve SecretRefs and give agents curated, audited access to 1Password |
| `plugins/onnx.md` | Run typed decisions locally with verified ONNX classifiers |
| `plugins/plugin-inventory.md` | Generated inventory of OpenClaw plugins shipped in core, published externally, or kept source-only |
| `plugins/plugin-permission-requests.md` | Ask users to approve plugin tool calls and plugin-owned permission prompts |
| `plugins/reference.md` | Pointer to the generated OpenClaw plugin reference pages |
| `plugins/research-adapters.md` | Versioned managed-research adapters over existing plugin RPC |
| `plugins/runtime-compatibility.md` | Inspect plugin and dependency runtime hazards without activating the plugin |
| `plugins/sdk-agent-harness.md` | Experimental SDK surface for plugins that replace the low level embedded agent executor |
| `plugins/sdk-channel-inbound.md` | Inbound event helpers for channel plugins: context building, shared runner orchestration, session record, and prepared reply dispatch |
| `plugins/sdk-channel-ingress.md` | Experimental channel ingress API for inbound message authorization |
| `plugins/sdk-channel-outbound.md` | Outbound message lifecycle API for channel plugins: adapters, receipts, durable sends, live preview, and reply pipeline helpers |
| `plugins/sdk-channel-plugins.md` | Step-by-step guide to building a messaging channel plugin for OpenClaw |
| `plugins/sdk-entrypoints.md` | Reference for defineToolPlugin, definePluginEntry, defineChannelPluginEntry, and defineSetupPluginEntry |
| `plugins/sdk-gateway-ingress.md` | Principal-bound remote Control UI transport and Gateway RPC for trusted plugin grants |
| `plugins/sdk-migration.md` | Migrate from the legacy backwards-compatibility layer to the modern plugin SDK |
| `plugins/sdk-overview.md` | Import map, registration API reference, and SDK architecture |
| `plugins/sdk-provider-plugins.md` | Step-by-step guide to building a model provider plugin for OpenClaw |
| `plugins/sdk-runtime.md` | api.runtime -- the injected runtime helpers available to plugins |
| `plugins/sdk-setup.md` | Setup wizards, setup-entry.ts, config schemas, and package.json metadata |
| `plugins/sdk-subpaths.md` | Plugin SDK subpath catalog: which imports live where, grouped by area |
| `plugins/sdk-testing.md` | Testing utilities and patterns for OpenClaw plugins |
| `plugins/session-share.md` | Share selected OpenClaw sessions read-only with a paired team Gateway |
| `plugins/slack-huddles.md` | Slack huddles plugin: join active huddles through a signed-in Chrome user account |
| `plugins/subq.md` | Use SubQ Snap for typed decisions, not chat completions |
| `plugins/team-reports.md` | Daily, weekly, and monthly team reports from GitHub activity and Discord discussion |
| `plugins/teams-meetings.md` | Microsoft Teams meetings plugin: join work or consumer meetings as a Chrome browser guest |
| `plugins/tool-plugins.md` | Build simple typed agent tools with defineToolPlugin and openclaw plugins init/build/validate |
| `plugins/typesafe.md` | Use hosted Jev or a local System One server for typed decisions |
| `plugins/vault.md` | Use the bundled Vault plugin to resolve SecretRefs from HashiCorp Vault |
| `plugins/voice-call.md` | Place outbound and accept inbound voice calls via Twilio, Telnyx, or Plivo, with optional realtime voice and streaming transcription |
| `plugins/workboard.md` | Optional Workboard boards for agent-owned cards and rule-based session views |
| `plugins/zalouser.md` | Zalo Personal plugin: QR login + messaging via native zca-js (plugin install + channel config + tool) |
| `plugins/zoom-meetings.md` | Zoom meetings plugin: join meetings as a Chrome browser guest |

### plugins/architecture-internals/ (8 files)

| File | Description |
|------|-------------|
| `plugins/architecture-internals/channel-surfaces.md` | Conversation binding callbacks, message tool schemas, target resolution, config-backed directories, and read-only inspection |
| `plugins/architecture-internals/context-engines.md` | Registering a context engine plugin that owns session ingest, assembly, and compaction |
| `plugins/architecture-internals/gateway-routes.md` | Registering plugin HTTP routes on the Gateway, and their auth, scope, and lifecycle rules |
| `plugins/architecture-internals/load-pipeline.md` | How OpenClaw discovers, gates, loads, and registers plugins, and what the plugin cache holds |
| `plugins/architecture-internals/new-capability.md` | The sequence, file checklist, and contract-test pattern for adding a capability to the plugin system |
| `plugins/architecture-internals/packaging.md` | Plugin SDK import subpaths, multi-extension package packs, and channel catalog and install metadata |
| `plugins/architecture-internals/provider-hooks.md` | The provider hook order table, worked provider example, bundled hook shapes, and model catalog registration |
| `plugins/architecture-internals/runtime-helpers.md` | Calling core speech, media understanding, subagent, web search, and image generation helpers from a plugin |

### plugins/codex-harness/ (9 files)

| File | Description |
|------|-------------|
| `plugins/codex-harness/app-server.md` | App-server transport, approval posture, auth order, and environment isolation |
| `plugins/codex-harness/commands.md` | The /codex command surface, Fast mode controls, and local thread inspection |
| `plugins/codex-harness/config-fields.md` | Top-level and appServer config fields for the Codex plugin |
| `plugins/codex-harness/configuration.md` | Codex harness config map, restricted turns, project instructions, compaction, and long context |
| `plugins/codex-harness/native-features.md` | Share native Codex threads, supervise sessions, and enable native plugins and Computer Use |
| `plugins/codex-harness/placement.md` | Place Codex native execution on a paired device or a cloud worker |
| `plugins/codex-harness/routing.md` | Choose which OpenAI routes select Codex and shape the deployment around them |
| `plugins/codex-harness/runtime-behavior.md` | Dynamic tools, web search, image loading, turn liveness, and runtime boundaries |
| `plugins/codex-harness/troubleshooting.md` | Symptoms and fixes for Codex harness selection, app-server, and memory problems |

### plugins/codex-harness-reference/ (9 files)

| File | Description |
|------|-------------|
| `plugins/codex-harness-reference/app-server-transport.md` | App-server transport selection, the appServer field table, and local testing env overrides |
| `plugins/codex-harness-reference/approval-and-sandbox.md` | YOLO and guardian approval presets, and sandboxed native execution paths |
| `plugins/codex-harness-reference/auth.md` | Codex auth selection order, credential handling, and environment isolation |
| `plugins/codex-harness-reference/dynamic-tools.md` | How OpenClaw dynamic tools are exposed to Codex app-server turns |
| `plugins/codex-harness-reference/model-discovery.md` | Codex app-server model discovery, offline hints, and catalog rules |
| `plugins/codex-harness-reference/restricted-turns.md` | When a tool policy restricts the Codex native surface, and what ring zero adds |
| `plugins/codex-harness-reference/supervision.md` | Native Codex session discovery and agent-facing supervision settings |
| `plugins/codex-harness-reference/timeouts.md` | Dynamic tool timeout order, turn execution budgets, and local settlement |
| `plugins/codex-harness-reference/workspace-bootstrap-files.md` | Which workspace bootstrap files reach a Codex turn, and how they are carried |

### plugins/codex-harness-runtime/ (9 files)

| File | Description |
|------|-------------|
| `plugins/codex-harness-runtime/compaction.md` | Native Codex compaction, the OpenClaw transcript mirror, and continuity projection |
| `plugins/codex-harness-runtime/hooks.md` | Which hook layer owns each Codex turn event, and what the native hook relay can do |
| `plugins/codex-harness-runtime/permissions.md` | Native permission decisions, remembered approvals, and MCP elicitation limits |
| `plugins/codex-harness-runtime/queue-and-feedback.md` | Active-run queue steering on Codex turns and the Codex feedback upload path |
| `plugins/codex-harness-runtime/recovery.md` | Codex app-server process cleanup after discovery timeouts and hard Gateway stops |
| `plugins/codex-harness-runtime/replies.md` | Visible reply delivery, scheduled turns, and bounded final-answer recovery |
| `plugins/codex-harness-runtime/sandbox-streaming.md` | Experimental native sandbox execution streaming and node-backed remote exec |
| `plugins/codex-harness-runtime/threads.md` | How OpenClaw binds native Codex threads, changes models, and continues supervised sessions |
| `plugins/codex-harness-runtime/v1-support-contract.md` | What is and is not supported in Codex runtime v1, with the reason for each boundary |

### plugins/google-meet/ (5 files)

| File | Description |
|------|-------------|
| `plugins/google-meet/config.md` | Google Meet plugin config defaults, overrides, and provider examples |
| `plugins/google-meet/oauth-and-artifacts.md` | Google Meet OAuth setup, refresh tokens, preflight, and conference artifact exports |
| `plugins/google-meet/tool-and-modes.md` | The google_meet tool actions, status fields, and agent versus bidi talk-back modes |
| `plugins/google-meet/transports.md` | Google Meet transports: local Chrome, Chrome on a paired node, and Twilio dial-in |
| `plugins/google-meet/troubleshooting.md` | Google Meet live test checklist and fixes for join, speech, creation, and Twilio failures |

### plugins/hooks/ (5 files)

| File | Description |
|------|-------------|
| `plugins/hooks/lifecycle.md` | Plugin install checks, Gateway start and stop, and Gateway-owned cron events |
| `plugins/hooks/messages.md` | Claim inbound messages and rewrite or cancel outbound deliveries |
| `plugins/hooks/prompt-and-session.md` | Override the model, shape the prompt, and persist plugin-owned session state |
| `plugins/hooks/reference.md` | How plugin hooks register and execute, plus the complete typed hook catalog |
| `plugins/hooks/tool-policy.md` | Gate, rewrite, and approve tool calls, and rewrite tool results before persistence |

### plugins/knowledge/ (12 files)

| File | Description |
|------|-------------|
| `plugins/knowledge/control-ui.md` | The Knowledge page and chat panel in the Control UI: views, settings, page addresses, links in chat, and session activity |
| `plugins/knowledge/corrections.md` | Correct, withdraw, supersede, merge, and unmerge Knowledge records while preserving originals and history |
| `plugins/knowledge/evidence.md` | How Knowledge retains original source files, identifies sources, cites passages, and reconciles page evidence |
| `plugins/knowledge/ingestion.md` | Knowledge bundled skills and ingestion operations: batch publication, structural verification, and source-change checks |
| `plugins/knowledge/local-history.md` | Automatic local Git history for Knowledge vaults: what is committed, failure states, and recovery boundaries |
| `plugins/knowledge/maintenance.md` | Knowledge scheduled maintenance: zero-model claim relink, schedule configuration, and status |
| `plugins/knowledge/memory-provider.md` | How Knowledge works as the selected memory provider: shared reads, prompt, automatic recall, and the pre-compaction flush |
| `plugins/knowledge/records-and-ontology.md` | Knowledge record format, structured claim fields, the default ontology, local ontology extensions, and Markdown links |
| `plugins/knowledge/retrieval.md` | Knowledge keyword search, exact lookup, citations, index behavior, and structured date queries |
| `plugins/knowledge/scribes.md` | Knowledge scribes: conversations Knowledge starts for you that keep a store up to date, once or on a schedule |
| `plugins/knowledge/stores-and-access.md` | Knowledge stores, storage layout, partitions, caller authority, and catalog limits |
| `plugins/knowledge/tools.md` | Knowledge agent tools: inputs, defaults, pagination, response limits, remembering, structured authoring, and attachments |

### plugins/manifest/ (7 files)

| File | Description |
|------|-------------|
| `plugins/manifest/capabilities.md` | Manifest capability ownership, tool availability metadata, and activation planning |
| `plugins/manifest/config-and-secrets.md` | Manifest dangerous-flag, SecretRef migration, and secret provider preset metadata |
| `plugins/manifest/models.md` | Manifest model catalog, shorthand family, id normalization, and pricing fields |
| `plugins/manifest/package-json.md` | Which pre-runtime metadata lives in package.json, and which duplicate plugin id wins |
| `plugins/manifest/providers.md` | Manifest generation, media-understanding, endpoint, and request provider metadata |
| `plugins/manifest/setup-and-auth.md` | Manifest setup descriptors, auth choices, conversation discovery, and config UI hints |
| `plugins/manifest/surfaces.md` | Manifest fields for icons, themes, CLI, MCP, Control UI, dashboard, QA, channel, and backup surfaces |

### plugins/sdk-agent-harness/ (8 files)

| File | Description |
|------|-------------|
| `plugins/sdk-agent-harness/attempt-runtime.md` | Runtime helpers a selected harness calls during and after an attempt: injection, middleware, outcome classification, usage, and agent-end side effects |
| `plugins/sdk-agent-harness/core-ownership.md` | What OpenClaw core prepares and owns before a harness runs an attempt, and the contracts a harness can declare to take some of it back |
| `plugins/sdk-agent-harness/native-inventories.md` | Read-only model and MCP catalogs a harness reports from its own native runtime |
| `plugins/sdk-agent-harness/registration.md` | Register an AgentHarnessV2, plus the optional isolated-completion and delegated-execution capabilities |
| `plugins/sdk-agent-harness/runtime-config.md` | Operator config for the native Codex harness mode and for strict provider or model runtime policy |
| `plugins/sdk-agent-harness/selection-policy.md` | How OpenClaw picks a harness after provider and model resolution, and why most harnesses also register a provider |
| `plugins/sdk-agent-harness/sessions-and-results.md` | Native session bindings, the OpenClaw transcript mirror, tool and media result delivery, terminal tool outcomes, and settled-turn finalization |
| `plugins/sdk-agent-harness/user-input-and-execution.md` | Blocking user-input surfaces, host tool capabilities, exec review outcomes, and paired-device command authority |

### plugins/sdk-channel-plugins/ (7 files)

| File | Description |
|------|-------------|
| `plugins/sdk-channel-plugins/approvals.md` | Approval capabilities for channel plugins: approval auth, payload lifecycle and setup guidance, native approval delivery, and the narrower approval runtime subp |
| `plugins/sdk-channel-plugins/durable-ingress.md` | Durable inbound ingress for channel plugins: the ingress resolver, replay dedupe, transport retention classes, at-least-once side effects, and the reload and re |
| `plugins/sdk-channel-plugins/mention-policy.md` | Split inbound mention handling into plugin-owned evidence gathering and shared policy evaluation |
| `plugins/sdk-channel-plugins/message-adapter.md` | The channel message adapter surface: live and finalizer capabilities, progress visibility, commentary delivery, and native TTS voice delivery |
| `plugins/sdk-channel-plugins/sessions-and-bindings.md` | Session conversation grammar, conversation route ownership, and account-scoped conversation binding support for channel plugins |
| `plugins/sdk-channel-plugins/setup-and-config.md` | Setup subpaths, account schemas and inheritance, and the other narrow channel subpaths for config, inbound, targets, and threading |
| `plugins/sdk-channel-plugins/status-and-media.md` | Channel runtime status signals plus media and payload shaping: lifecycle status, typing indicators, media source params, and native payload shaping |

### plugins/sdk-entrypoints/ (8 files)

| File | Description |
|------|-------------|
| `plugins/sdk-entrypoints/define-channel-plugin-entry.md` | The channel entry helper, its mode-gated callbacks, and CLI registration |
| `plugins/sdk-entrypoints/define-plugin-entry.md` | The general entry helper, its fields, and the session catalog provider contract |
| `plugins/sdk-entrypoints/define-setup-plugin-entry.md` | The lightweight setup entry helper and the narrow setup helper families |
| `plugins/sdk-entrypoints/define-tool-plugin.md` | The tool-only entry helper, its schemas, and generated manifest metadata |
| `plugins/sdk-entrypoints/native-providers.md` | Factory-form speech, transcription, and voice registration, and Computer Use providers |
| `plugins/sdk-entrypoints/package-entries.md` | package.json openclaw source and runtime entry fields and their resolution order |
| `plugins/sdk-entrypoints/registration-mode.md` | How api.registrationMode reports the load mode and what to register in each |
| `plugins/sdk-entrypoints/tool-policy-and-sandbox.md` | toolPolicy matchers, tool-group expansion, and splitSandboxBindSpec |

### plugins/sdk-migration/ (8 files)

| File | Description |
|------|-------------|
| `plugins/sdk-migration/async-transcript-and-tts.md` | Awaited replacements for historical transcript-key lookup and TTS prompt preparation |
| `plugins/sdk-migration/compatibility-policy.md` | The external-plugin compatibility policy and the dated per-surface compatibility records |
| `plugins/sdk-migration/how-to-migrate.md` | Ordered steps for moving a plugin off the removed SDK compatibility layer |
| `plugins/sdk-migration/import-paths.md` | Which typed-public SDK subpath replaces each legacy import, including the removed channel facades |
| `plugins/sdk-migration/removal-timeline.md` | When deprecated plugin SDK surfaces become eligible for removal |
| `plugins/sdk-migration/removed-surfaces.md` | Removed SDK surfaces and the replacement for each removed or deprecated API |
| `plugins/sdk-migration/sqlite-async.md` | Replace deprecated synchronous SQLite SDK calls before the December 31, 2026 compatibility cutoff |
| `plugins/sdk-migration/talk.md` | Migrating realtime voice, telephony, and meeting code to the unified Talk session API |

### plugins/sdk-overview/ (8 files)

| File | Description |
|------|-------------|
| `plugins/sdk-overview/capabilities.md` | Provider, storage, worker, and embedding registration on OpenClawPluginApi |
| `plugins/sdk-overview/cli-and-discovery.md` | Gateway discovery services, CLI registrars and descriptors, and CLI backend registration |
| `plugins/sdk-overview/events-and-hooks.md` | Typed lifecycle hooks and the decision rules each hook applies |
| `plugins/sdk-overview/host-hooks.md` | Session extensions, trusted tool policies, Control UI descriptors, and runtime lifecycle |
| `plugins/sdk-overview/imports.md` | Which plugin SDK subpath to import from, and how to lay out a plugin's own barrels |
| `plugins/sdk-overview/infrastructure.md` | Hooks, HTTP routes, Gateway methods, services, and the webhook and SQLite helpers |
| `plugins/sdk-overview/memory-and-context.md` | The exclusive context-engine and memory-capability slots and their embedding adapters |
| `plugins/sdk-overview/tools-and-commands.md` | Registering agent tools, custom commands, node-host commands, and widget presenters |

### plugins/sdk-provider-plugins/ (5 files)

| File | Description |
|------|-------------|
| `plugins/sdk-provider-plugins/hook-families.md` | Shared replay, stream, and tool-compat family builders for provider plugins |
| `plugins/sdk-provider-plugins/media-and-search.md` | Embedding, image and video generation, web fetch, and web search provider capabilities |
| `plugins/sdk-provider-plugins/model-catalogs.md` | Live model discovery, catalog helpers, and provider-owned pricing normalization |
| `plugins/sdk-provider-plugins/runtime-hooks.md` | Per-hook provider wiring for auth exchange, headers, transport identity, usage, and the hook order table |
| `plugins/sdk-provider-plugins/voice-and-audio.md` | Speech, realtime transcription, realtime voice, and media understanding provider capabilities |

### plugins/sdk-runtime/ (8 files)

| File | Description |
|------|-------------|
| `plugins/sdk-runtime/agent.md` | Agent identity, directories, session store, transcripts, and sandbox authority |
| `plugins/sdk-runtime/background-work.md` | Hook agent turns and subagent runs |
| `plugins/sdk-runtime/channel.md` | Channel-specific runtime helper groups for chunking, routing, pairing, media, and mentions |
| `plugins/sdk-runtime/config-and-utilities.md` | Runtime config reads and writes, plus the shared process, error, and model-picker utilities |
| `plugins/sdk-runtime/gateway-and-nodes.md` | In-process Gateway requests, paired node invocation, and Gateway service events |
| `plugins/sdk-runtime/media.md` | Speech, media understanding, image/video/music generation, web search, and media utilities |
| `plugins/sdk-runtime/models.md` | Host-owned completions, model-selection policy, and provider auth resolution |
| `plugins/sdk-runtime/state-and-system.md` | Config snapshot, shared plugin state, system utilities, events, and logging |

### plugins/voice-call/ (5 files)

| File | Description |
|------|-------------|
| `plugins/voice-call/configuration.md` | Plugin config keys, the call owner, the config reference table, and session scope |
| `plugins/voice-call/realtime-and-streaming.md` | Realtime voice conversations, tool policy, agent voice context, and streaming transcription |
| `plugins/voice-call/security-and-interfaces.md` | Webhook security options and the CLI, agent tool, and Gateway RPC surfaces |
| `plugins/voice-call/troubleshooting.md` | Fixes for voice-call setup, webhooks, signatures, Meet dial-in, and silent calls |
| `plugins/voice-call/tts-and-inbound-calls.md` | Telephony TTS, inbound policy, per-number routing, and call lifecycle timers |

### providers/ (83 files)

| File | Description |
|------|-------------|
| `providers/abliteration.md` | Abliteration setup, model selection, reasoning, and prompt caching |
| `providers/alibaba.md` | Alibaba Model Studio Wan video generation in OpenClaw |
| `providers/anthropic.md` | Use Anthropic Claude via API keys or Claude CLI in OpenClaw |
| `providers/arcee.md` | Arcee AI setup (auth + model selection) |
| `providers/azure-speech.md` | Azure AI Speech text-to-speech for OpenClaw replies |
| `providers/baseten.md` | Baseten setup for DeepSeek V4.1 Flash and hosted Model APIs |
| `providers/bedrock-mantle.md` | Use Amazon Bedrock Mantle OpenAI-compatible and Claude Messages models with OpenClaw |
| `providers/bedrock.md` | Use Amazon Bedrock (Converse API) models with OpenClaw |
| `providers/bifrost.md` | Connect OpenClaw to a Bifrost OpenAI-compatible model gateway |
| `providers/cerebras.md` | Cerebras setup (auth + model selection) |
| `providers/chutes.md` | Chutes setup (OAuth or API key, model discovery, aliases) |
| `providers/claude-max-api-proxy.md` | Community proxy to expose Claude subscription credentials as an OpenAI-compatible endpoint |
| `providers/clawrouter.md` | Route credential-scoped models through ClawRouter and show managed quotas |
| `providers/cloudflare-ai-gateway.md` | Cloudflare AI Gateway setup (auth + model selection) |
| `providers/cohere.md` | Cohere setup (auth + model selection) |
| `providers/comfy.md` | ComfyUI workflow generation and Comfy Cloud MCP OAuth setup in OpenClaw |
| `providers/deepgram.md` | Deepgram transcription for inbound voice notes |
| `providers/deepinfra.md` | Use DeepInfra's unified API to access the most popular open source and frontier models in OpenClaw |
| `providers/deepseek.md` | DeepSeek setup (auth + model selection) |
| `providers/ds4.md` | Run OpenClaw through ds4, a local DeepSeek V4 Flash OpenAI-compatible server |
| `providers/elevenlabs.md` | Use ElevenLabs speech, Scribe STT, and realtime transcription with OpenClaw |
| `providers/fal.md` | fal image, video, and music generation setup in OpenClaw |
| `providers/featherless.md` | Featherless AI setup, model selection, and tool calling |
| `providers/fireworks.md` | Fireworks setup (auth + model selection) |
| `providers/fish-audio.md` | Use Fish Audio Drama 3 or S2.1 hosted TTS, or local S2 Pro on Apple silicon |
| `providers/github-copilot.md` | Sign in to GitHub Copilot from OpenClaw using the device flow or non-interactive token import |
| `providers/gmi.md` | Use GMI Cloud's OpenAI-compatible API with OpenClaw |
| `providers/google-vertex.md` | Use Gemini through Google Cloud Vertex AI with Application Default Credentials |
| `providers/google.md` | Google Gemini setup (AI Studio API key, Vertex AI, optional CLI runtime, and multimodal tools) |
| `providers/gradium.md` | Use Gradium text-to-speech in OpenClaw |
| `providers/groq.md` | Groq setup (auth + model selection + Whisper transcription) |
| `providers/huggingface.md` | Hugging Face Inference setup (auth + model selection) |
| `providers/index.md` | Model providers (LLMs) supported by OpenClaw |
| `providers/inworld.md` | Inworld streaming text-to-speech for OpenClaw replies |
| `providers/kie.md` | Kie AI video generation setup and supported models |
| `providers/kilocode.md` | Use Kilo Gateway's unified API to access many models in OpenClaw |
| `providers/levanto.md` | Connect Levanto Sage for native typed decisions |
| `providers/liquid-ai.md` | Connect Liquid AI d1 and d1 Ultra as native Decision models |
| `providers/liquid-inference.md` | Connect Liquid Inference as a custom OpenAI-compatible provider |
| `providers/litellm.md` | Run OpenClaw through LiteLLM Proxy for unified model access and cost tracking |
| `providers/llmman.md` | Run OpenClaw with llmman (local models, hosted providers, and hybrid local + hosted routing) |
| `providers/lmstudio.md` | Run OpenClaw with LM Studio |
| `providers/longcat.md` | LongCat API setup for LongCat-2.0 |
| `providers/meta.md` | Meta setup, authentication, and Muse Wonder and Muse Spark model selection |
| `providers/minimax.md` | Use MiniMax models in OpenClaw |
| `providers/mistral.md` | Use Mistral models and Voxtral transcription with OpenClaw |
| `providers/models.md` | Model providers (LLMs) supported by OpenClaw |
| `providers/moonshot.md` | Configure Moonshot Kimi models vs Kimi Coding (separate providers + keys) |
| `providers/neon.md` | Route OpenClaw through Neon AI Gateway with one branch-scoped Neon credential |
| `providers/novita.md` | Use NovitaAI's OpenAI-compatible API with OpenClaw |
| `providers/nvidia.md` | Use NVIDIA's OpenAI-compatible API in OpenClaw |
| `providers/ollama-cloud.md` | Use Ollama Cloud directly with OpenClaw |
| `providers/ollama.md` | Run OpenClaw with Ollama (cloud and local models) |
| `providers/omlx.md` | Use oMLX for local chat and memory embeddings on Apple Silicon |
| `providers/openai.md` | Use OpenAI via API keys or Codex subscription in OpenClaw |
| `providers/opencode-go.md` | Use the OpenCode Go catalog with the shared OpenCode setup |
| `providers/opencode.md` | Use OpenCode Zen and Go catalogs with OpenClaw |
| `providers/openrouter.md` | Use OpenRouter's unified API to access many models in OpenClaw |
| `providers/particle.md` | Use Particle-1 with an API key in OpenClaw |
| `providers/perplexity-provider.md` | Perplexity web search provider setup (API key, search modes, filtering) |
| `providers/pixverse.md` | PixVerse video generation setup in OpenClaw |
| `providers/poolside.md` | Use Poolside Laguna models or the Poolside Agent with OpenClaw |
| `providers/qianfan.md` | Use Qianfan's unified API to access many models in OpenClaw |
| `providers/qwen.md` | Use Qwen Cloud through its OpenClaw plugin |
| `providers/radius.md` | Connect OpenClaw to Radius with browser sign-in or an organization API key |
| `providers/requesty.md` | Use Requesty's unified OpenAI-compatible router to access hundreds of models in OpenClaw |
| `providers/rerank.md` | Use any /rerank endpoint (vLLM, TEI, Infinity, Cohere, Jina, Voyage) as a Decision model |
| `providers/runway.md` | Runway video generation setup in OpenClaw |
| `providers/senseaudio.md` | SenseAudio batch speech-to-text for inbound voice notes |
| `providers/sglang.md` | Run OpenClaw with SGLang (OpenAI-compatible self-hosted server) |
| `providers/stepfun.md` | Use StepFun models with OpenClaw |
| `providers/synthetic.md` | Use Synthetic's Anthropic-compatible API in OpenClaw |
| `providers/telnyx.md` | Telnyx setup for OpenAI-compatible AI inference |
| `providers/tencent.md` | Tencent Cloud TokenHub and TokenPlan setup for hy4-preview |
| `providers/together.md` | Together AI setup (auth + model selection) |
| `providers/venice.md` | Use Venice AI privacy-focused models in OpenClaw |
| `providers/vercel-ai-gateway.md` | Vercel AI Gateway setup (auth + model selection) |
| `providers/vllm.md` | Run OpenClaw with vLLM (OpenAI-compatible local server) |
| `providers/volcengine.md` | Volcano Engine setup (Doubao models, coding endpoints, and Seed Speech TTS) |
| `providers/vydra.md` | Use Vydra image, video, and speech in OpenClaw |
| `providers/xai.md` | Use xAI Grok models in OpenClaw |
| `providers/xiaomi.md` | Use Xiaomi MiMo pay-as-you-go and Token Plan models with OpenClaw |
| `providers/zai.md` | Use Z.AI (GLM models) with OpenClaw |

### providers/ollama/ (9 files)

| File | Description |
|------|-------------|
| `providers/ollama/advanced.md` | Context windows, thinking control, costs, embeddings, and streaming for Ollama |
| `providers/ollama/configuration.md` | The basic, explicit, and custom base URL config shapes for the Ollama provider |
| `providers/ollama/model-discovery.md` | How OpenClaw discovers Ollama models implicitly, plus narrow smoke tests |
| `providers/ollama/node-local-inference.md` | Delegate a bounded prompt to an Ollama model running on a paired node |
| `providers/ollama/recipes.md` | Copyable Ollama config recipes, model selection, and quick verification |
| `providers/ollama/setup.md` | Connect OpenClaw to Ollama: auth rules, onboarding, and cloud models through a local host |
| `providers/ollama/troubleshooting.md` | Fixes for common Ollama failures in OpenClaw |
| `providers/ollama/vision.md` | Route image understanding through local or hosted Ollama vision models |
| `providers/ollama/web-search.md` | Use Ollama as the OpenClaw web_search provider |

### providers/openai/ (9 files)

| File | Description |
|------|-------------|
| `providers/openai/advanced.md` | Prompt contribution, transport, Fast mode, compaction, and route compat |
| `providers/openai/authentication.md` | Choose Codex login, Sign in with ChatGPT (Beta), or an API key for the OpenAI capabilities you need |
| `providers/openai/azure.md` | Point the bundled openai provider at an Azure OpenAI resource |
| `providers/openai/coverage-and-cost.md` | Which OpenAI capabilities OpenClaw exposes, embeddings, and spend reporting |
| `providers/openai/image-and-video.md` | Generate and edit images with OpenAI gpt-image |
| `providers/openai/models.md` | Pick an OpenAI model ref, including GPT-6.1 Sol, GPT-6 Astra, Sol, Luna, and the GPT-5.6 tiers |
| `providers/openai/runtimes.md` | Choose an OpenAI runtime and understand native Codex auth |
| `providers/openai/setup.md` | Connect OpenAI with an API key, Codex subscription, or Sign in with ChatGPT (Beta) |
| `providers/openai/voice-and-speech.md` | OpenAI text-to-speech, transcription, and realtime voice settings and auth |

### reference/ (14 files)

| File | Description |
|------|-------------|
| `reference/AGENTS.default.md` | Default OpenClaw agent instructions and skills roster for the personal assistant setup |
| `reference/api-usage-costs.md` | Audit what can spend money, which keys are used, and how to view usage |
| `reference/database-engines.md` | Select SQLite or PostgreSQL storage, understand local anchors, and observe database work |
| `reference/device-models.md` | How OpenClaw vendors Apple device model identifiers for friendly names in the macOS app. |
| `reference/memory-config.md` | Built-in memory search, admission exclusions, and dreaming configuration |
| `reference/openclaw-ai.md` | The @openclaw/ai npm package: reusable model transports, isolated runtimes, and host policy ports |
| `reference/prompt-caching.md` | Prompt caching knobs, merge order, provider behavior, and tuning patterns |
| `reference/rich-output-protocol.md` | Rich output protocol for structured media, embeds, audio hints, and replies |
| `reference/rpc.md` | RPC adapters for external CLIs (signal-cli, imsg) and gateway patterns |
| `reference/secret-placeholder-conventions.md` | Secret-scanner-safe placeholder conventions for docs and examples |
| `reference/secretref-credential-surface.md` | Supported and unsupported SecretRef credentials |
| `reference/session-management-compaction.md` | Deep dive: session store + transcripts, lifecycle, and (auto)compaction internals |
| `reference/token-use.md` | How OpenClaw builds prompt context and reports token usage + costs |
| `reference/transcript-hygiene.md` | Reference: provider-specific transcript sanitization and repair rules |

### reference/session-management-compaction/ (6 files)

| File | Description |
|------|-------------|
| `reference/session-management-compaction/compaction.md` | What compaction does, when auto-compaction runs, its settings, pluggable providers, and where it surfaces |
| `reference/session-management-compaction/housekeeping.md` | The NO_REPLY silent-turn contract and the pre-compaction memory flush configuration |
| `reference/session-management-compaction/maintenance.md` | The session.maintenance keys, disk-budget cleanup tiers, cron run retention, and the SQLite downgrade path |
| `reference/session-management-compaction/resident-history.md` | Proposed worker-owned transcript acquisition and bounded SessionManager working sets |
| `reference/session-management-compaction/schema.md` | sessionKey patterns, sessionId lifecycle, SessionEntry fields, and the transcript event stream |
| `reference/session-management-compaction/store.md` | Where the Gateway keeps session rows and transcripts, and the on-disk paths per agent |

### reference/templates/ (12 files)

| File | Description |
|------|-------------|
| `reference/templates/AGENTS.dev.md` | Dev agent AGENTS.md (C-3PO) |
| `reference/templates/AGENTS.md` | Workspace template for AGENTS.md |
| `reference/templates/BOOT.md` | Workspace template for BOOT.md |
| `reference/templates/BOOTSTRAP.md` | First-run ritual for new agents |
| `reference/templates/HEARTBEAT.md` | Migration guide for the retired HEARTBEAT.md workspace file |
| `reference/templates/IDENTITY.dev.md` | Dev agent identity (C-3PO) |
| `reference/templates/IDENTITY.md` | Agent identity record |
| `reference/templates/SOUL.dev.md` | Dev agent soul (C-3PO) |
| `reference/templates/SOUL.md` | Workspace template for SOUL.md |
| `reference/templates/TOOLS.md` | Retired TOOLS.md workspace template |
| `reference/templates/USER.dev.md` | Dev agent user profile (C-3PO) |
| `reference/templates/USER.md` | Durable user preference and profile directives |

### reference/templates/roles/coordinator/ (1 files)

| File | Description |
|------|-------------|
| `reference/templates/roles/coordinator/CLAW.md` | Chief of staff soul |

### reference/templates/roles/coordinator/workspace/ (1 files)

| File | Description |
|------|-------------|
| `reference/templates/roles/coordinator/workspace/AGENTS.md` | Chief of staff operating program |

### reference/templates/roles/researcher/ (1 files)

| File | Description |
|------|-------------|
| `reference/templates/roles/researcher/CLAW.md` | Researcher soul |

### reference/templates/roles/researcher/workspace/ (1 files)

| File | Description |
|------|-------------|
| `reference/templates/roles/researcher/workspace/AGENTS.md` | Researcher operating program |

### reference/templates/roles/reviewer/ (1 files)

| File | Description |
|------|-------------|
| `reference/templates/roles/reviewer/CLAW.md` | Reviewer soul |

### reference/templates/roles/reviewer/workspace/ (1 files)

| File | Description |
|------|-------------|
| `reference/templates/roles/reviewer/workspace/AGENTS.md` | Reviewer operating program |

### reference/templates/roles/writer/ (1 files)

| File | Description |
|------|-------------|
| `reference/templates/roles/writer/CLAW.md` | Writer soul |

### reference/templates/roles/writer/workspace/ (1 files)

| File | Description |
|------|-------------|
| `reference/templates/roles/writer/workspace/AGENTS.md` | Writer operating program |

### security/ (4 files)

| File | Description |
|------|-------------|
| `security/THREAT-MODEL-ATLAS.md` | OpenClaw threat model mapped to the MITRE ATLAS framework |
| `security/formal-verification.md` | Machine-checked security models for OpenClaw's highest-risk paths. |
| `security/incident-response.md` | How OpenClaw triages, responds to, and follows up on security incidents |
| `security/network-proxy.md` | How to route OpenClaw runtime HTTP and WebSocket traffic through an operator-managed filtering proxy |

### security/THREAT-MODEL-ATLAS/ (8 files)

| File | Description |
|------|-------------|
| `security/THREAT-MODEL-ATLAS/collection-and-exfiltration.md` | OpenClaw collection and exfiltration threats (AML.TA0009, AML.TA0010): T-EXFIL-001, T-EXFIL-002, T-EXFIL-003 |
| `security/THREAT-MODEL-ATLAS/defense-evasion.md` | OpenClaw defense evasion threats (AML.TA0007): T-EVADE-001, T-EVADE-002 |
| `security/THREAT-MODEL-ATLAS/discovery.md` | OpenClaw discovery threats (AML.TA0008): T-DISC-001, T-DISC-002 |
| `security/THREAT-MODEL-ATLAS/execution.md` | OpenClaw execution threats (AML.TA0005): T-EXEC-001, T-EXEC-002, T-EXEC-003, T-EXEC-004 |
| `security/THREAT-MODEL-ATLAS/impact.md` | OpenClaw impact threats (AML.TA0011): T-IMPACT-001, T-IMPACT-002, T-IMPACT-003 |
| `security/THREAT-MODEL-ATLAS/initial-access.md` | OpenClaw initial access threats (AML.TA0004): T-ACCESS-001, T-ACCESS-002, T-ACCESS-003 |
| `security/THREAT-MODEL-ATLAS/persistence.md` | OpenClaw persistence threats (AML.TA0006): T-PERSIST-001, T-PERSIST-002, T-PERSIST-003 |
| `security/THREAT-MODEL-ATLAS/reconnaissance.md` | OpenClaw reconnaissance threats (AML.TA0002): T-RECON-001, T-RECON-002 |

### start/ (14 files)

| File | Description |
|------|-------------|
| `start/bootstrapping.md` | Agent bootstrapping ritual that seeds the workspace and identity files |
| `start/docs-directory.md` | Curated links to the most used OpenClaw docs. |
| `start/getting-started.md` | Get OpenClaw installed and run your first chat in minutes. |
| `start/hubs.md` | Hubs that link the main OpenClaw docs |
| `start/lore.md` | Backstory and lore of OpenClaw for context and tone |
| `start/multiplayer.md` | Run OpenClaw as a multiplayer claw: one shared Gateway for a trusted team, from first setup to an always-on production deployment |
| `start/onboarding-overview.md` | Overview of OpenClaw onboarding options and flows |
| `start/onboarding.md` | First-run setup flow for OpenClaw (macOS app) |
| `start/openclaw.md` | End-to-end guide for running OpenClaw as a personal assistant with safety cautions |
| `start/setup.md` | Advanced setup and development workflows for OpenClaw |
| `start/why-openclaw.md` | The architecture case for OpenClaw: a trusted gateway, untrusted execution, policy enforced by code, and versioned state, compared source-by-source with single- |
| `start/wizard-cli-automation.md` | Scripted onboarding and agent setup for the OpenClaw CLI |
| `start/wizard-cli-reference.md` | Step-by-step behavior for openclaw onboard: what each step does, config it writes, and internals |
| `start/wizard.md` | CLI onboarding: quick start with detected AI access or choose custom setup |

### start/why-openclaw/ (7 files)

| File | Description |
|------|-------------|
| `start/why-openclaw/identity-and-roles.md` | Pairing, operator scopes, role ceilings, and the one-gateway-is-one-trust-domain boundary |
| `start/why-openclaw/openclaw-and-hermes-agent.md` | Source-by-source comparison of OpenClaw and Hermes Agent at the reviewed August 2026 snapshots, with the property table |
| `start/why-openclaw/policy-as-code.md` | Permission modes, tool policy, and exec approvals as code-enforced gates rather than prompt requests |
| `start/why-openclaw/provenance.md` | Memory origin classes, trust gating, deletion boundaries, and the audit ledger's recorded non-claims |
| `start/why-openclaw/secrets.md` | SecretRefs, the protected store, egress sentinels, and the custody limits of each |
| `start/why-openclaw/the-trust-boundary.md` | Where OpenClaw's Gateway authority ends and configured sandbox, node, and cloud-worker execution begins |
| `start/why-openclaw/versioned-state-guarded-upgrades.md` | Database-first state, schema version contracts, guarded updates, release channels, and the maturity scorecard |

### tools/ (71 files)

| File | Description |
|------|-------------|
| `tools/acp-agents-setup.md` | Setting up ACP agents: acpx harness config, plugin setup, permissions |
| `tools/acp-agents.md` | Index of the OpenClaw ACP agents documentation, one page per reader job |
| `tools/agent-send.md` | Run agent turns from the CLI and optionally deliver replies to channels |
| `tools/apply-patch.md` | Apply multi-file patches with the apply_patch tool |
| `tools/ask-user.md` | How ask_user pauses an agent turn for a structured human decision |
| `tools/autoreview.md` | Run the installed Auto Review checkpoint against the current sandbox |
| `tools/brave-search.md` | Brave Search API setup for web_search |
| `tools/browser-control.md` | OpenClaw browser control API, CLI reference, and scripting actions |
| `tools/browser-linux-troubleshooting.md` | Fix Chrome/Brave/Edge/Chromium CDP startup issues for OpenClaw browser control on Linux |
| `tools/browser-login.md` | Manual logins for browser automation + X/Twitter posting |
| `tools/browser-wsl2-windows-remote-cdp-troubleshooting.md` | Troubleshoot WSL2 Gateway + Windows Chrome remote CDP in layers |
| `tools/browser.md` | Index of the OpenClaw browser documentation, one page per reader job |
| `tools/btw.md` | Ephemeral side questions with /btw |
| `tools/chrome-extension.md` | Chrome extension: securely automate signed-in tabs with automatic local pairing |
| `tools/code-execution.md` | code_execution: run sandboxed remote Python analysis with xAI |
| `tools/code-mode.md` | Index of the OpenClaw Code Mode documentation, one page per reader job |
| `tools/creating-skills.md` | Build, test, and publish custom SKILL.md workspace skills or personal skills on a shared Gateway. |
| `tools/custodian-skills.md` | Release-versioned operational skills that only the configured Custodian agent can discover and use. |
| `tools/deep-research.md` | Bounded portable research and explicitly enabled provider-managed research |
| `tools/diffs.md` | Read-only diff viewer and file renderer for agents (optional plugin tool) |
| `tools/duckduckgo-search.md` | DuckDuckGo web search -- key-free provider (experimental, HTML-based) |
| `tools/elevated.md` | Elevated exec mode: run commands outside the sandbox from a sandboxed agent |
| `tools/exa-search.md` | Exa AI search -- neural and keyword search with content extraction |
| `tools/exec-approvals-advanced.md` | Advanced exec approvals: safe bins, interpreter binding, approval forwarding, native delivery |
| `tools/exec-approvals.md` | Host exec approvals: policy knobs, allowlists, and the YOLO/strict workflow |
| `tools/exec.md` | Exec tool usage, stdin modes, and TTY support |
| `tools/firecrawl.md` | Firecrawl search, scrape, and web_fetch fallback |
| `tools/gemini-search.md` | Gemini web search with Google Search grounding |
| `tools/goal.md` | Session goals: durable per-session objectives, /goal controls, model goal tools, token budgets, and TUI status |
| `tools/grok-search.md` | Grok web search via xAI web-grounded responses |
| `tools/image-generation.md` | Generate and edit images via image_generate across OpenAI, Google, fal, Microsoft Foundry, MiniMax, ComfyUI, DeepInfra, OpenRouter, LiteLLM, xAI, Vydra |
| `tools/index.md` | OpenClaw tools, skills, and plugins overview: what agents can call and how to extend them |
| `tools/kimi-search.md` | Kimi web search via Moonshot web search |
| `tools/llm-task.md` | JSON-only LLM tasks for workflows (optional plugin tool) |
| `tools/lobster.md` | Typed workflow runtime for OpenClaw with resumable approval and input gates. |
| `tools/loop-detection.md` | How to enable guardrails that detect repetitive tool-call loops |
| `tools/mcp.md` | Connect MCP servers to OpenClaw from the Control UI, CLI, or config |
| `tools/media-overview.md` | Image, video, music, speech, and media-understanding capabilities at a glance |
| `tools/minimax-search.md` | MiniMax Search via the Token Plan search API |
| `tools/multi-agent-sandbox-tools.md` | Per-agent sandbox + tool restrictions, precedence, and examples |
| `tools/music-generation.md` | Generate music via music_generate across ComfyUI, fal, Google Lyria, MiniMax, and OpenRouter workflows |
| `tools/ollama-search.md` | Ollama Web Search via a local Ollama host or the hosted Ollama API |
| `tools/parallel-search.md` | Parallel Search -- LLM-optimized dense excerpts from web sources |
| `tools/pdf.md` | Analyze one or more PDF documents with native provider support and extraction fallback |
| `tools/permission-modes.md` | Permission modes for host exec, Codex Guardian approvals, and ACPX harness sessions |
| `tools/perplexity-search.md` | Perplexity Search API and Sonar/OpenRouter compatibility for web_search |
| `tools/plugin.md` | Install, configure, and manage OpenClaw plugins |
| `tools/progress-card.md` | Maintain one durable plan and status card for a session |
| `tools/reactions.md` | Reaction tool semantics across all supported channels |
| `tools/screen.md` | Let an agent arrange the connected Control UI |
| `tools/searxng-search.md` | SearXNG web search -- self-hosted, key-free meta-search provider |
| `tools/secrets.md` | How the secrets tool lets the agent request credentials it never sees |
| `tools/self-learning.md` | How OpenClaw reviews finished work in the background and saves lessons as learned skills |
| `tools/show-widget.md` | Show HTML widgets on supported chat surfaces or pin native data reports to dashboards |
| `tools/skill-workshop.md` | Skills your agent learns on its own: how they are saved, undo, unused-skill cleanup, skill diet, /learn, config, storage, and operator surfaces |
| `tools/skills-config.md` | Full reference for the skills.* config schema, agent allowlists, workshop settings, and sandbox env var handling. |
| `tools/skills.md` | Skills teach your agent how to use tools. Learn how they load, how precedence works, and how to configure gating, allowlists, and environment injection. |
| `tools/slash-commands.md` | All available slash commands, directives, and inline shortcuts — configuration, routing, and per-surface behavior. |
| `tools/steer.md` | Steer an active run without changing queue mode |
| `tools/subagents.md` | Index of the OpenClaw sub-agent documentation, one page per reader job |
| `tools/swarm.md` | Orchestrate concurrent sub-agents from Code Mode scripts with structured results, bounded fan-out, and live progress |
| `tools/tavily.md` | Tavily search and extract tools |
| `tools/theme.md` | Let an agent select plugin themes or create a personal OpenClaw theme |
| `tools/thinking.md` | Directive syntax for /think, /fast, /verbose, /trace, and reasoning visibility |
| `tools/tokenjuice.md` | Compact noisy exec and bash tool results with the optional Tokenjuice plugin |
| `tools/tool-search.md` | Tool Search: compact large OpenClaw tool catalogs behind search, describe, and call |
| `tools/trajectory.md` | Export redacted trajectory bundles for debugging an OpenClaw agent session |
| `tools/tts.md` | Index of the OpenClaw text-to-speech documentation, one page per reader job |
| `tools/video-generation.md` | Generate videos via video_generate from text, image, or video references across 18 provider backends |
| `tools/web-fetch.md` | web_fetch tool -- HTTP fetch with readable content extraction |
| `tools/web.md` | web_search, x_search, and web_fetch -- search the web, search X posts, or fetch page content |

### tools/acp-agents/ (7 files)

| File | Description |
|------|-------------|
| `tools/acp-agents/bindings.md` | Bind a conversation or thread to an ACP session, and configure persistent bindings[] entries |
| `tools/acp-agents/controls.md` | Session target resolution and the full /acp command and runtime option reference |
| `tools/acp-agents/delivery.md` | How ACP output is delivered for interactive and parent-owned sessions, and the sandbox boundary |
| `tools/acp-agents/quickstart.md` | Install the acpx ACP runtime plugin, confirm it is usable, and pick a harness target id |
| `tools/acp-agents/runbook.md` | Day-to-day /acp flow from chat, ACP session lifecycle, and native Codex versus ACP routing |
| `tools/acp-agents/sessions.md` | Start ACP sessions from sessions_spawn or /acp spawn, with the parameter and mode reference |
| `tools/acp-agents/troubleshooting.md` | Symptom, likely cause, and fix for ACP backend, plugin wiring, and delivery failures |

### tools/browser/ (10 files)

| File | Description |
|------|-------------|
| `tools/browser/agent-tools.md` | The single browser tool, its actions, and the arguments an agent passes |
| `tools/browser/configuration.md` | The browser config block, tab cleanup, screenshot vision, ports, SSRF policy, and picking a Chromium binary |
| `tools/browser/existing-session.md` | Named browser profiles and attaching to a running Chrome session through Chrome DevTools MCP |
| `tools/browser/isolation.md` | What the managed profile isolates, which browser binary is picked, and where the control API reference lives |
| `tools/browser/lightweight.md` | Use an externally managed Lightpanda browser for JavaScript and DOM tasks |
| `tools/browser/profiles.md` | The built-in openclaw, user, and chrome profiles and the Control UI Browser panel |
| `tools/browser/remote.md` | Local versus remote control, the node browser proxy, and hosted CDP providers |
| `tools/browser/security.md` | Loopback auth for the browser control API and remote CDP credential handling |
| `tools/browser/setup.md` | Quick start commands, plugin enablement, agent tool policy, and the missing-command fix |
| `tools/browser/troubleshooting.md` | Separating CDP startup failures from navigation SSRF blocks, plus the platform-specific pages |

### tools/code-mode/ (9 files)

| File | Description |
|------|-------------|
| `tools/code-mode/configuration.md` | Code Mode configuration fields, automatic per-model activation, and the activation order |
| `tools/code-mode/executors.md` | Choose Node or QuickJS for Code Mode and understand their execution and security boundaries |
| `tools/code-mode/guest-api.md` | Globals, catalog handles, MCP namespaces, and virtual API declarations inside guest code |
| `tools/code-mode/internals.md` | Code Mode scope, nested tool execution, executor continuations, and security boundaries |
| `tools/code-mode/maintainers.md` | Code Mode implementation layout, the validation checklist, and the E2E test plan |
| `tools/code-mode/output.md` | Declared output contracts for tool results and the guest output API |
| `tools/code-mode/quickstart.md` | Enable OpenClaw Code Mode, override one model, and recover from tool errors |
| `tools/code-mode/tool-surface.md` | The model-visible exec and wait contracts, the hidden tool catalog, and name collisions |
| `tools/code-mode/troubleshooting.md` | Code Mode error codes, telemetry fields, and the debug environment variables |

### tools/skill-workshop/ (1 files)

| File | Description |
|------|-------------|
| `tools/skill-workshop/personal-library.md` | Create and update profile-owned personal skills on a shared Gateway |

### tools/subagents/ (7 files)

| File | Description |
|------|-------------|
| `tools/subagents/announce.md` | How a sub-agent reports its result back, the announce context block, and why sessions_history is preferred |
| `tools/subagents/nesting.md` | Recursive delegation depth, the announce chain, cascade stop, and how sub-agent auth and memory audience resolve |
| `tools/subagents/operations.md` | The subagent queue lane, restart recovery, stop scope, and the standing limitations |
| `tools/subagents/slash-command.md` | Inspect sub-agent runs with /subagents, use the thread-binding commands, and follow the completion-delivery path |
| `tools/subagents/thread-bound-sessions.md` | Bind a sub-agent to a channel thread, and the allowlist, discovery, and auto-archive rules |
| `tools/subagents/tool-policy.md` | The sub-agent tool restriction layer and how to narrow it with config |
| `tools/subagents/tool-reference.md` | Context modes and the sessions_spawn, sessions_yield, and subagents tool contracts |

### tools/tts/ (7 files)

| File | Description |
|------|-------------|
| `tools/tts/api.md` | The tts agent tool and the Gateway TTS RPC methods |
| `tools/tts/commands.md` | Model-emitted TTS directives, the /tts slash commands, and per-user preferences |
| `tools/tts/configuration.md` | The tts config block, per-provider settings, local speech engines, and override precedence |
| `tools/tts/field-reference.md` | Every tts.* and tts.providers.<id>.* configuration field |
| `tools/tts/output.md` | Per-channel audio formats, transcoding, and what Auto-TTS sends |
| `tools/tts/personas.md` | Persona definitions, provider bindings, resolution order, and fallback policy |
| `tools/tts/quickstart.md` | Turn on text-to-speech, pick a provider, and send a first audio reply |

### web/ (10 files)

| File | Description |
|------|-------------|
| `web/control-ui.md` | Browser-based control UI for the Gateway (chat, activity, nodes, config) |
| `web/dashboard-architecture.md` | Session dashboard architecture: widget hosting, capabilities, board storage, and protocol |
| `web/dashboard.md` | Gateway dashboard (Control UI) access and auth |
| `web/dashboards.md` | Session dashboards: agent-built widgets, boards, tabs, and flexible task layouts |
| `web/index.md` | Gateway web surfaces: Control UI, bind modes, and security |
| `web/lobster.md` | A lobster sometimes visits the Control UI. This page explains just enough. |
| `web/notifications.md` | Enable and test browser or macOS notifications from the Control UI |
| `web/tui.md` | Terminal UI (TUI): connect to the Gateway or run locally in embedded mode |
| `web/urls.md` | Control UI routes, focus presentations, stable session links, and connection handoff parameters |
| `web/webchat.md` | Native and Control UI WebChat usage over the Gateway WebSocket |

### web/control-ui/ (10 files)

| File | Description |
|------|-------------|
| `web/control-ui/asset-delivery.md` | Control UI asset delivery, compression measurements, and HTTP multiplexing boundaries |
| `web/control-ui/chat.md` | Composer controls, transcript rendering, side chat, and hosted embeds |
| `web/control-ui/connect-and-pair.md` | Pair browsers and phones with the Gateway and reach the Control UI over Tailscale |
| `web/control-ui/development.md` | Build the Control UI, run the dev server, and point it at a remote Gateway |
| `web/control-ui/feature-reference.md` | What the Control UI can do today, grouped by capability with its Gateway RPC names |
| `web/control-ui/offline-and-reconnect.md` | What the Control UI keeps when the Gateway connection drops, and how it recovers |
| `web/control-ui/panels.md` | Ask OpenClaw, the Home dock, the operator terminal, and the browser panel |
| `web/control-ui/security-model.md` | Content security policy, public transcript boundaries, authenticated media routes, and approval links |
| `web/control-ui/sessions-and-sidebar.md` | Sidebar zones, session menus, and the New session page |
| `web/control-ui/settings.md` | Identity, appearance, plugins, updates, MCP, activity, and meetings |
