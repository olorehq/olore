# Sample Configuration

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

This sample describes Codex configuration. For Local computer access with Work Cloud, use the [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference) to check which settings apply.

For Work with local access and dots, supported Global policy governs the shared cloud orchestrator when managed policy is enabled; applicable local execution requirements govern the connected computer. Work cloud containers use existing Work Cloud policies. For local execution, MDM and legacy managed-device requirements take precedence over Agent Security, which takes precedence over the device's system requirements file. See [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration) for policy order, field-specific merge rules, and network limits.

Where enabled for your workspace, Local computer access with Work Cloud supports admin-defined MCP hooks that run on the cloud coordinator (orchestrator) for supported lifecycle and tool events. Command hooks and hooks from local configuration or plugins are not supported with cloud orchestration, even when tools execute locally. Before relying on these hooks, test the callback connection, confirm the events it receives, and check how failures affect the task. MCP hooks do not provide a complete Compliance API audit trail. See [Hooks](https://learn.chatgpt.com/docs/hooks) for supported events and setup. The Codex examples below remain unchanged.

Use this example configuration as a starting point. It includes most keys Codex reads from `config.toml`, along with default behaviors, recommended values where helpful, and short notes.

For explanations and guidance, see:

- [Config basics](https://learn.chatgpt.com/docs/config-file/config-basic)
- [Advanced Config](https://learn.chatgpt.com/docs/config-file/config-advanced)
- [Config Reference](https://learn.chatgpt.com/docs/config-file/config-reference)
- [Sandbox and approvals](https://learn.chatgpt.com/docs/agent-approvals-security#sandbox-and-approvals)
- [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration)

Use the snippet below as a reference. Copy only the keys and sections you need into `~/.codex/config.toml` (or into a project-scoped `.codex/config.toml`), then adjust values for your setup.

The sample selects [GPT-6.1 Sol](https://learn.chatgpt.com/docs/models#gpt-6.1-sol), which requires
access for your signed-in account or workspace. If it isn't available, replace
it with a model you can use.

```toml
# Codex example configuration (config.toml)
#
# This file lists the main keys Codex reads from config.toml, along with default
# behaviors, recommended examples, and concise explanations. Adjust as needed.
#
# Notes
# - Root keys must appear before tables in TOML.
# - Optional keys that default to "unset" are shown commented out with notes.
# - MCP servers, profile files, and model providers are examples; remove or edit.

################################################################################

# Core Model Selection

################################################################################

# Primary model used by Codex. Example when available: "gpt-6.1-sol".

model = "gpt-6.1-sol"

# Omit the built-in Personality section from model instructions. Default: unset.

# Legacy friendly and pragmatic values are accepted but no longer select a style.

# personality = "none"

# Optional model override for /review. Default: unset (uses current session model).

# review_model = "gpt-6.1-sol"

# Provider id selected from [model_providers]. Default: "openai".

model_provider = "openai"

# Default OSS provider for --oss sessions. When unset, Codex prompts. Default: unset.

# oss_provider = "ollama"

# Preferred service tier. Use fast or another tier supported by the active model.

# service_tier = "fast"

# For Google Cloud Vertex AI, set model_provider = "gcp" above and configure

# the project under [model_providers.gcp] below or set GOOGLE_CLOUD_PROJECT.

# Optional manual model metadata. When unset, Codex uses model or preset defaults.

# model_context_window = 128000 # tokens; default: auto for model

# model_auto_compact_token_limit = 64000 # tokens; unset uses model defaults

# model_auto_compact_token_limit_scope = "total" # total | body_after_prefix; default: total

# Compact after a final response at 80% of the usable context window.

# Leave unset or set to 0 to disable turn-end compaction.

# model_post_turn_compact_threshold_percent = 80

# tool_output_token_limit = 12000 # tokens stored per tool output

# model_catalog_json = "/absolute/path/to/models.json" # optional startup-only model catalog override

# background_terminal_max_timeout = 300000 # ms; max empty write_stdin poll window (default 5m)

# Unload a thread after five minutes with no activity or subscribers (default: 60 seconds).

# thread_unload_delay_secs = 300

# log_dir = "/absolute/path/to/codex-logs" # log directory; setting explicitly enables codex-tui.log; default: "$CODEX_HOME/log"

# sqlite_home = "/absolute/path/to/codex-state" # optional SQLite-backed runtime state directory

################################################################################

# Reasoning & Verbosity (Responses API capable models)

################################################################################

# Reasoning effort advertised by the selected model; supported levels vary by model and client.

# model_reasoning_effort = "medium"

# Optional reasoning effort override for Plan mode; use a level supported by the selected model.

# plan_mode_reasoning_effort = "high"

# Reasoning summary: auto | concise | detailed | none

# model_reasoning_summary = "auto"

# Text verbosity for GPT-5 family (Responses API): low | medium | high

# model_verbosity = "medium"

################################################################################

# Instruction Overrides

################################################################################

# Additional user instructions are injected before AGENTS.md. Default: unset.

# developer_instructions = ""

# Inline override for the history compaction prompt. Default: unset.

# compact_prompt = ""

# Override built-in base instructions with a file path. Default: unset.

# model_instructions_file = "/absolute/or/relative/path/to/instructions.txt"

# Load the compact prompt override from a file. Default: unset.

# experimental_compact_prompt_file = "/absolute/or/relative/path/to/compact_prompt.txt"

################################################################################

# Notifications

################################################################################

# External notifier program (argv array). When unset: disabled.

# notify = ["notify-send", "Codex"]

################################################################################

# Approval & Sandbox

################################################################################

# When to ask for command approval:

# - on-request: model decides when to ask (default)

# - never: never prompt (risky)

# - { granular = { ... } }: allow or auto-reject selected prompt categories

approval_policy = "on-request"

# Who reviews eligible approval prompts: user (default) | auto_review

# approvals_reviewer = "user"

# Example granular policy:

# approval_policy = { granular = {

# sandbox_approval = true,

# rules = true,

# mcp_elicitations = true,

# request_permissions = false,

# skill_approval = false

# } }

# Allow login-shell semantics for shell-based tools when they request `login = true`.

# Default: true. Set false to force non-login shells and reject explicit login-shell requests.

allow_login_shell = true

# macOS only. Set in the execution host's $CODEX_HOME/config.toml, then restart Codex.

# If true, already writable roots under CODEX_HOME can follow symlinks, including

# targets outside CODEX_HOME or targets that change between commands.

# allow_symlinked_codex_home = false

# Filesystem/network sandbox policy for tool calls:

# - read-only (default)

# - workspace-write

# - danger-full-access (no sandbox; extremely risky)

sandbox_mode = "read-only"

# Named permissions profile to apply by default. Built-ins:

# :read-only | :workspace | :danger-full-access

# Use a custom name such as "workspace" only when you also define [permissions.workspace].

# default_permissions = ":workspace"

################################################################################

# Authentication & Login

################################################################################

# Where to persist CLI login credentials: file (default) | keyring | auto

cli_auth_credentials_store = "file"

# Base URL for ChatGPT auth flow (not OpenAI API).

chatgpt_base_url = "https://chatgpt.com/backend-api/"

# Optional base URL override for the built-in OpenAI provider.

# openai_base_url = "https://us.api.openai.com/v1"

# Restrict ChatGPT login to a specific workspace id. Default: unset.

# forced_chatgpt_workspace_id = "00000000-0000-0000-0000-000000000000"

# Force login mechanism when Codex would normally auto-select. Default: unset.

# Allowed values: chatgpt | api

# forced_login_method = "chatgpt"

# Preferred store for MCP OAuth credentials: auto (default) | file | keyring

mcp_oauth_credentials_store = "auto"

# Shared wait for optional MCP servers before building the initial tool catalog.

# Default: 1000 ms. Set to 0 to wait for each server's startup_timeout_sec instead.

# mcp_optional_startup_grace_ms = 1000

# Optional global fixed port for MCP OAuth callback: 1-65535. Default: unset.

# A server-specific oauth.callback_port overrides this global listener port.

# mcp_oauth_callback_port = 4321

# Optional callback URL override for MCP OAuth login (for example, remote devbox ingress).

# Newly added pre-registered clients use this URL unchanged when the authorization server

# advertises issuer support and provides a metadata issuer. Without issuer support,

# Codex appends a server-specific callback ID. Existing clients without a saved

# callback keep that suffix.

# Without issuer support, any pre-registered MCP server callback must already

# end in the correct callback ID. Otherwise, Codex ignores that callback and uses

# this global URL (or its default) with the server-specific callback ID appended.

# Malformed callback URLs and mismatched authorization response issuers fail.

# If issuer support is advertised, missing metadata or response issuers also fail.

# Custom callback paths are supported. Callback URL ports don't select the

# listener port; configure oauth.callback_port or mcp_oauth_callback_port.

# mcp_oauth_callback_url = "https://devbox.example.internal/callback"

################################################################################

# Project Documentation Controls

################################################################################

# Max bytes from AGENTS.md to embed into first-turn instructions. Default: 32768

project_doc_max_bytes = 32768

# Ordered fallbacks when AGENTS.md is missing at a directory level. Default: []

project_doc_fallback_filenames = []

# Project root marker filenames used when searching parent directories. Default: [".git"]

# project_root_markers = [".git"]

################################################################################

# History & File Opener

################################################################################

# URI scheme for clickable citations: vscode (default) | vscode-insiders | windsurf | cursor | none

file_opener = "vscode"

################################################################################

# UI, Notifications, and Misc

################################################################################

# Suppress internal reasoning events from output. Default: false

hide_agent_reasoning = false

# Show raw reasoning content when available. Default: false

show_raw_agent_reasoning = false

# Check for updates on startup. Default: true

check_for_update_on_startup = true

################################################################################

# Web Search

################################################################################

# Web search mode: disabled | cached | indexed | live. Default: "cached"

# cached serves results from a web search cache (an OpenAI-maintained index).

# cached returns pre-indexed results; indexed gates external web access through

# the search index; live fetches the most recent data.

# If you use --yolo or another full access sandbox setting, web search defaults to live.

web_search = "cached"

# Config profiles are separate files under CODEX_HOME.

# Example: ~/.codex/ci.config.toml, selected with codex --profile ci.

# Suppress the warning shown when under-development feature flags are enabled.

# suppress_unstable_features_warning = true

################################################################################

# Agents (multi-agent roles and limits)

################################################################################

[agents]

# Enable or disable multi-agent tools. Default: true

# enabled = true

# Maximum concurrently open spawned-agent threads, excluding the primary thread. When unset, Codex chooses the default.

# max_concurrent_threads_per_session = 6

# Default model for spawned agents. An explicit spawn model takes precedence.

# default_subagent_model = "gpt-6.1-sol"

# Default reasoning effort for spawned agents. An explicit spawn effort takes precedence.

# default_subagent_reasoning_effort = "medium"

# Record a model-visible message when an agent turn is interrupted. Default: true

# interrupt_message = true

# Default budget for new goals and maximum allowed goal budget.

# [goals]

# max_goal_token_budget = 100000

# [agents.reviewer]

# description = "Find correctness, security, and test risks in code."

# config_file = "./agents/reviewer.toml" # relative to the config.toml that defines it

################################################################################

# Skills (per-skill overrides)

################################################################################

# Token budget for the available-skills catalog. Default: 2% of the model context

# window. Explicit values must be positive and are capped at 10000 tokens.

# [skills]

# max_context_tokens = 2000

# include_instructions = true

# [skills.bundled]

# enabled = false

# Disable every skill with this name. To match one file, use path instead.

# [[skills.config]]

# name = "review-changes"

# Alternative selector: path = "/path/to/skill/SKILL.md"

# enabled = false

################################################################################

# Sandbox settings (tables)

################################################################################

# Extra settings used only when sandbox_mode = "workspace-write".

[sandbox_workspace_write]

# Additional writable roots beyond the workspace (cwd). Default: []

writable_roots = []

# Allow outbound network access inside the sandbox. Default: false

network_access = false

# Exclude $TMPDIR from writable roots. Default: false

exclude_tmpdir_env_var = false

# Exclude /tmp from writable roots. Default: false

exclude_slash_tmp = false

################################################################################

# Shell Environment Policy for spawned processes (table)

################################################################################

[shell_environment_policy]

# inherit: all (default) | core | none

inherit = "all"

# Skip automatic filtering for names containing KEY/SECRET/TOKEN. Default: true.

# Set false to remove those variables before applying explicit filters.

ignore_default_excludes = false

# Explicit key/value overrides. Include filters can still remove them. Default: {}

set = {}

# Experimental: run via user shell profile. Default: false

experimental_use_profile = false

# Canonical case-insensitive filters. "include" entries create an allowlist.

# Excludes apply before explicit set values and the include allowlist.

# Don't combine filters with legacy exclude or

# include_only arrays in the same configuration layer.

[shell_environment_policy.filters]

"AWS\_\*" = "exclude"

"AZURE\_\*" = "exclude"

################################################################################

# Sandboxed networking settings

################################################################################

# Enable the feature before configuring sandboxed networking rules.

# A profile's network.enabled allows direct network access; its domain rules

# apply only when the network proxy feature is enabled.

# Web search, apps, connectors, and MCP servers use separate controls.

# [features.network_proxy]

# enabled = true

# domains = { "api.openai.com" = "allow", "example.com" = "deny" }

#

# Exact hosts match only themselves.

# "\*.example.com" matches subdomains only; "\*\*.example.com" matches the apex plus subdomains.

# "\*" allows any public host that is not denied, so prefer scoped rules when possible.

# `allow_local_binding = false` blocks loopback and private destinations by default.

# Add an exact local IP literal or `localhost` allow rule for one target, or set it to true only when broader local access is required.

#

# Set `default_permissions = "workspace"` before enabling this profile.

# Example additional workspace roots that inherit this profile's

# `:workspace_roots` filesystem rules.

# [permissions.workspace.workspace_roots]

# "~/code/app" = true

# "~/code/shared-lib" = true

#

# Example filesystem profile. Use `"deny"` to deny reads for exact paths or

# glob patterns. On platforms that need pre-expanded glob matches, set

# glob_scan_max_depth when using unbounded patterns such as `\*\*`.

# [permissions.workspace.filesystem]

# glob_scan_max_depth = 3

# ":workspace_roots" = { "." = "write", "\*\*/\*.env" = "deny" }

# "/absolute/path/to/secrets" = "deny"

#

# [permissions.workspace.network]

# enabled = true

# proxy_url = "http://127.0.0.1:43128"

# admin_url = "http://127.0.0.1:43129"

# enable_socks5 = false

# socks_url = "http://127.0.0.1:43130"

# enable_socks5_udp = false

# allow_upstream_proxy = false

# dangerously_allow_non_loopback_proxy = false

# dangerously_allow_non_loopback_admin = false

# dangerously_allow_all_unix_sockets = false

# mode = "limited" # limited | full

# allow_local_binding = false

#

# [permissions.workspace.network.domains]

# "api.openai.com" = "allow"

# "example.com" = "deny"

#

# [permissions.workspace.network.unix_sockets]

# "/var/run/docker.sock" = "allow"

################################################################################

# History (table)

################################################################################

[history]

# save-all (default) | none

persistence = "save-all"

# Maximum bytes for history file; oldest entries are trimmed when exceeded. Example: 5242880

# max_bytes = 5242880

################################################################################

# UI, Notifications, and Misc (tables)

################################################################################

[tui]

# Disable burst-paste detection. Default: false.

# Overrides the legacy top-level disable_paste_burst setting.

disable_paste_burst = false

# Desktop notifications from the TUI: boolean or filtered list. Default: true

# Examples: false | ["agent-turn-complete", "approval-requested"]

notifications = false

# Notification mechanism for terminal alerts: auto | osc9 | bel. Default: "auto"

# notification_method = "auto"

# When notifications fire: unfocused (default) | always

# notification_condition = "unfocused"

# Enables welcome/status/spinner animations. Default: true

animations = true

# Show onboarding tooltips in the welcome screen. Default: true

show_tooltips = true

# Generate automatic recaps while the terminal is unfocused. Default: true.

# /recap remains available when this is false.

# auto_recap = true

# Show informational server-version notices. Default: true.

# Does not hide compatibility errors or version status.

# show_server_version_notice = true

# Control alternate screen usage (auto skips it in Zellij to preserve scrollback).

# alternate_screen = "auto"

# Working directory for resumed or forked sessions: current | session.

# Leave unset to choose when the current and saved session directories differ.

# resume_cwd = "session"

# Ordered list of footer status-line item IDs. When unset, Codex uses:

# ["model-with-reasoning", "context-remaining", "current-dir"].

# Set to [] to hide the footer.

# status_line = ["model", "context-remaining", "git-branch"]

# Ordered list of terminal window/tab title item IDs. When unset, Codex uses:

# ["spinner", "project"]. Set to [] to clear the title.

# Available IDs include app-name, project, spinner, status, thread, git-branch, model,

# and task-progress.

# terminal_title = ["spinner", "project"]

# Syntax-highlighting theme (kebab-case). Use /theme in the TUI to preview and save.

# You can also add custom .tmTheme files under $CODEX_HOME/themes.

# theme = "catppuccin-mocha"

# Save a reusable prompt or slash command in slot 1 of /presets.

# [tui.presets.1]

# label = "Review changes"

# input = "/review"

# Custom key bindings. Selected composer actions fall back to matching [tui.keymap.global] bindings.

# Use [] to unbind an action.

# [tui.keymap.global]

# open_transcript = "ctrl-t"

# open_external_editor = []

#

# [tui.keymap.composer]

# submit = ["enter", "ctrl-m"]

# [tui.keymap.chat]

# interrupt_turn = "f12"

# Internal tooltip state keyed by model slug. Usually managed by Codex.

# [tui.model_availability_nux]

# "gpt-6.1-sol" = 1

# Enable or disable analytics. When unset, the client default applies.

# Setting this to false disables built-in Statsig metrics. Custom OTLP exporters remain active.

[analytics]
enabled = true

# Control whether users can submit feedback from `/feedback`. Default: true

[feedback]
enabled = true

# In-product notices (mostly set automatically by Codex).

[notice]

# hide_full_access_warning = true

# hide_world_writable_warning = true

# hide_rate_limit_model_nudge = true

# hide_gpt5_1_migration_prompt = true

# "hide_gpt-5.1-codex-max_migration_prompt" = true

# model_migrations = { "gpt-5.4" = "gpt-6.1-sol" }

################################################################################

# Centralized Feature Flags (preferred)

################################################################################

[features]

# Leave this table empty to accept defaults. Set explicit booleans to opt in/out.

# view_image = false # disable the built-in local image viewer (enabled by default)

# Prefer MXC on Windows when the device and policy support it; otherwise use the legacy sandbox below.

# Disabled by default in the standalone CLI.

prefer_mxc = true

# shell_tool = true

# apps = true

# hooks = false

# Resumable execution is enabled on all platforms. Only managed requirements can disable it.

# shell_snapshot = true

# multi_agent = true

# remote_plugin = true

# network_proxy = true # required to enforce permission-profile domain rules

# fast_mode = true

# ultrafast_mode = true # independent of fast_mode; model and account access still apply

# enable_request_compression = true

# skill_mcp_dependency_install = true

# prevent_idle_sleep = false

# Code mode namespaces. This feature is under development and off by default.

# [features.code_mode]

# enabled = true

# excluded_tool_namespaces = ["mcp__codex_apps"]

# direct_only_tool_namespaces = ["mcp__history"]

# Rollout budget tracking. This feature is under development and off by default.

# Set limit_tokens and reminder_at_remaining_tokens when enabled.

# Token weights default to 1.0.

# [features.rollout_budget]

# enabled = true

# limit_tokens = 100000

# reminder_at_remaining_tokens = [50000, 25000, 10000]

# sampling_token_weight = 1.0

# prefill_token_weight = 1.0

################################################################################

# Memories (table)

################################################################################

# Enable memories with [features].memories, then tune memory behavior here.

# [memories]

# version = "v1" # keep reading the original store during migration

# dual_write = true # generate both stores while reading v1

# consolidation_service_tier = "default" # Standard tier for memory consolidation

# generate_memories = true

# use_memories = true

# disable_on_external_context = false # legacy alias: no_memories_if_mcp_or_web_search

################################################################################

# Lifecycle hooks can be configured here inline or in a sibling hooks.json.

################################################################################

# [hooks]

# [[hooks.PreToolUse]]

# matcher = "^Bash$"

#

# [[hooks.PreToolUse.hooks]]

# type = "command"

# command = 'python3 "/absolute/path/to/pre_tool_use_policy.py"'

# timeout = 30

# statusMessage = "Checking Bash command"

################################################################################

# Define MCP servers under this table. Leave empty to disable.

################################################################################

[mcp_servers]

# --- Example: STDIO transport ---

# [mcp_servers.docs]

# enabled = true # optional; default true

# required = true # require this server to be ready at startup

# command = "docs-server" # required

# args = ["--port", "4000"] # optional

# env = { "API_KEY" = "value" } # optional key/value pairs copied as-is

# env_vars = ["ANOTHER_SECRET"] # optional: forward local parent env vars

# env_vars = ["LOCAL_TOKEN", { name = "REMOTE_TOKEN", source = "remote" }]

# cwd = "/path/to/server" # optional working directory override

# environment_id = "devbox" # ID of a configured executor. Defaults to "local".

# startup_timeout_sec = 10.0 # optional; default 10.0 seconds

# # startup_timeout_ms = 10000 # optional alias for startup timeout (milliseconds)

# tool_timeout_sec = 60.0 # optional; default 60.0 seconds

# supports_parallel_tool_calls = true # only if all tools are safe to call concurrently

# enabled_tools = ["search", "summarize"] # optional allow-list

# disabled_tools = ["slow-tool"] # optional deny-list (applied after allow-list)

# startup_readiness = "catalog" # use a valid cached tool catalog while connecting

# tool_input_schema_max_bytes = 8000 # default 5000 UTF-8 bytes

# omit_tools_from = ["direct"] # omit from the initial tool list

# [mcp_servers.docs.tools.search]

# output_token_limit = 30000 # positive token budget, before the 20% serialization allowance

# --- Example: Streamable HTTP transport ---

# [mcp_servers.github]

# enabled = true # optional; default true

# required = true # require this server to be ready at startup

# url = "https://github-mcp.example.com/mcp" # required

# bearer_token_env_var = "GITHUB_TOKEN" # optional; Authorization: Bearer <token>

# http_headers = { "X-Example" = "value" } # optional static headers

# env_http_headers = { "X-Auth" = "AUTH_ENV" } # optional headers populated from env vars

# http_headers_helper = "company-auth mcp-headers" # local command that prints a JSON header map

# startup_timeout_sec = 10.0 # optional

# tool_timeout_sec = 60.0 # optional

# enabled_tools = ["list_issues"] # optional allow-list

# disabled_tools = ["delete_issue"] # optional deny-list

# scopes = ["repo"] # override scopes discovered from the server

# oauth_resource = "https://github-mcp.example.com/"

# [mcp_servers.github.oauth]

# client_id = "my-pre-registered-client" # OAuth client registered with the provider

# client_secret = "<client-secret>" # optional confidential client secret; stored in config

# callback_url = "http://127.0.0.1/callback" # saved registered callback for this client

# callback_port = 4321 # server-specific listener port; overrides the global setting

# For http://127.0.0.1:4321/callback, set callback_port = 4321 as well.

################################################################################

# Model Providers

################################################################################

# Built-ins include:

# - openai

# - ollama

# - lmstudio

# - amazon-bedrock and amazon-bedrock-runtime

# - gcp (Google Cloud Vertex AI)

# These IDs are reserved. Use a different ID for custom providers.

[model_providers]

# Built-in Vertex AI provider options. The file path applies only to its auth command.

# [model_providers.gcp]

# project_id = "my-project"

# location = "global"

# credential_file = "/absolute/path/to/adc.json"

# --- Example: built-in Amazon Bedrock provider options ---

# model_provider = "amazon-bedrock"

# model = "<bedrock-model-id>"

# [model_providers.amazon-bedrock.aws]

# profile = "default"

# region = "eu-central-1"

# --- Example: OpenAI data residency with explicit base URL or headers ---

# [model_providers.openaidr]

# name = "OpenAI Data Residency"

# base_url = "https://us.api.openai.com/v1" # example with 'us' domain prefix

# wire_api = "responses" # only supported value

# # requires_openai_auth = true # use only for providers backed by OpenAI auth

# # request_max_retries = 4 # default 4; max 100

# # stream_max_retries = 5 # default 5; max 100

# # stream_idle_timeout_ms = 300000 # default 300_000 (5m)

# # supports_websockets = true # optional

# # supports_standalone_web_search = true # optional; search is under development and off by default

# # experimental_bearer_token = "sk-example" # optional dev-only direct bearer token

# # http_headers = { "X-Example" = "value" }

# # env_http_headers = { "OpenAI-Organization" = "OPENAI_ORGANIZATION", "OpenAI-Project" = "OPENAI_PROJECT" }

# --- Example: Azure/OpenAI-compatible provider ---

# [model_providers.azure]

# name = "Azure"

# base_url = "https://YOUR_PROJECT_NAME.openai.azure.com/openai"

# wire_api = "responses"

# query_params = { api-version = "2025-04-01-preview" }

# env_key = "AZURE_OPENAI_API_KEY"

# env_key_instructions = "Set AZURE_OPENAI_API_KEY in your environment"

# # supports_websockets = false

# --- Example: command-backed bearer token auth ---

# [model_providers.proxy]

# name = "OpenAI using LLM proxy"

# base_url = "https://proxy.example.com/v1"

# wire_api = "responses"

# model_catalog_url = "https://proxy.example.com/codex-models.json" # full Codex-native catalog URL

# Optional provider capability overrides. Omit to keep provider defaults.

# Model and turn settings may restrict these capabilities further.

# [model_providers.proxy.capabilities]

# external_web_access = false # whether hosted web search can access the live web

# remote_compaction = "unsupported" # unsupported (local compaction) | v2

#

# [model_providers.proxy.auth]

# command = "/usr/local/bin/fetch-codex-token"

# args = ["--audience", "codex"]

# timeout_ms = 5000

# refresh_interval_ms = 300000

# --- Example: Local OSS (e.g., Ollama-compatible) ---

# [model_providers.local_ollama]

# name = "Ollama"

# base_url = "http://localhost:11434/v1"

# wire_api = "responses"

################################################################################

# Apps / Connectors

################################################################################

# Keep installed plugins inactive by default, with an exception for one

# plugin that its marketplace or account already enables.

# [plugins._default]

# enabled = false

# [plugins."review@team"]

# enabled = true

# Optional per-app controls.

[apps]

# [_default] applies to all apps unless overridden per app.

# [apps._default]

# enabled = true

# destructive_enabled = true

# open_world_enabled = true

# approvals_reviewer = "user" # user | auto_review

# default_tools_approval_mode = "auto" # auto | prompt | writes | approve

#

# [apps.google_drive]

# enabled = false

# destructive_enabled = false # block destructive-hint tools for this app

# default_tools_enabled = true

# approvals_reviewer = "auto_review"

# default_tools_approval_mode = "prompt" # auto | prompt | writes | approve

#

# [apps.google_drive.tools."files/delete"]

# enabled = false

# approval_mode = "approve"

# Optional tool suggestion allowlist for connectors or plugins Codex can offer to install.

# [tool_suggest]

# discoverables = [

# { type = "connector", id = "gmail" },

# { type = "plugin", id = "figma@openai-curated" },

# ]

# disabled_tools = [

# { type = "plugin", id = "slack@openai-curated" },

# { type = "connector", id = "connector_googlecalendar" },

# ]

################################################################################

# Config Profiles (separate files)

################################################################################

# To create a config profile, put overrides in a separate profile file under $CODEX_HOME.

# Select it with codex --profile ci.

# For example, a CI profile could live at $CODEX_HOME/ci.config.toml:

# model = "gpt-6.1-sol"

# approval_policy = "on-request"

# sandbox_mode = "read-only"

# service_tier = "fast" # or another supported service tier id

# oss_provider = "ollama"

# model_reasoning_effort = "medium"

# plan_mode_reasoning_effort = "high"

# model_reasoning_summary = "auto"

# model_verbosity = "medium"

# personality = "none" # omit the built-in Personality section

# chatgpt_base_url = "https://chatgpt.com/backend-api/"

# model_catalog_json = "./models.json"

# model_instructions_file = "/absolute/or/relative/path/to/instructions.txt"

# experimental_compact_prompt_file = "./compact_prompt.txt"

# features = { shell_snapshot = false }

################################################################################

# Projects (trust levels)

################################################################################

[projects]

# Mark specific worktrees as trusted or untrusted.

# [projects."/absolute/path/to/project"]

# trust_level = "trusted" # or "untrusted"

################################################################################

# OpenTelemetry (OTEL)

################################################################################

[otel]

# Each option sends potentially sensitive text to the configured OTLP log exporter.

# log_agent_responses = false

# log_guardian_assessments = false

# Byte limit for logged tool results. Model-visible output has a separate limit.

# tool_result.max_bytes = 2048

# span_attributes = { team = "platform" }

# tracestate = { acme = { region = "eu" } }

# Include user prompt text in logs. Default: false

log_user_prompt = false

# Environment label applied to telemetry. Default: "dev"

environment = "dev"

# Exporter: none (default) | otlp-http | otlp-grpc

exporter = "none"

# Trace exporter: none (default) | otlp-http | otlp-grpc

trace_exporter = "none"

# Metrics exporter: none | statsig | otlp-http | otlp-grpc

# The default Statsig exporter follows analytics.enabled. Custom OTLP exporters run independently.

# Set to none to disable metrics export.

metrics_exporter = "statsig"

# Example OTLP/HTTP exporter configuration

# [otel.exporter."otlp-http"]

# endpoint = "https://otel.example.com/v1/logs"

# protocol = "binary" # "binary" | "json"

# [otel.exporter."otlp-http".headers]

# "x-otlp-api-key" = "${OTLP_TOKEN}"

# [otel.exporter."otlp-http".tls]

# ca-certificate = "certs/otel-ca.pem"

# client-certificate = "/etc/codex/certs/client.pem"

# client-private-key = "/etc/codex/certs/client-key.pem"

# Example OTLP/gRPC trace exporter configuration

# [otel.trace_exporter."otlp-grpc"]

# endpoint = "https://otel.example.com:4317"

# headers = { "x-otlp-meta" = "abc123" }

################################################################################

# Windows

################################################################################

[windows]

# Windows sandbox implementation: mxc | elevated | unelevated

# Legacy fallback when features.prefer_mxc is enabled. Explicit mxc selection does not fall back.

sandbox = "elevated"
```