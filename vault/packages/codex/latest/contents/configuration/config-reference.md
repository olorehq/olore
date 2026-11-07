# Configuration Reference

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use this page as a searchable reference for Codex configuration files. For conceptual guidance and examples, start with [Config basics](https://learn.chatgpt.com/docs/config-file/config-basic) and [Advanced Config](https://learn.chatgpt.com/docs/config-file/config-advanced).

<a id="settings-for-synced-chatgpt-work"></a>

## Settings for Local computer access with Work Cloud

With Local computer access with Work Cloud enabled, OpenAI's cloud coordinates the task while supported tools run in the cloud or on a connected computer. Requirements set limits; configuration values provide defaults.

Use the policy API to manage Global settings. To manage Local or Codex Cloud settings, use the Agent Security UI. Existing Global API workflows remain available after migration. Test your scripts and Terraform integrations, and confirm that policy assignments and ordering are unchanged. Support for a `requirements.toml` field does not by itself establish API compatibility.

| Setting or setting family                                           | Scope in Local computer access with Work Cloud                                                                                   | Guidance                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Approval policies and review requirements                           | Global orchestrator policy when managed policy is enabled                                                                        | Keep approval and review controls in Global. Environment overrides cannot change orchestrator controls. Local execution and cloud-container execution have separate policy scopes.                                                                                                                                                                                                                                                                  |
| Managed apps, MCP servers, plugins, marketplaces, and command rules | Global policy                                                                                                                    | Keep these controls global. Do not treat the field's presence in a schema as proof that the field can be edited per environment.                                                                                                                                                                                                                                                                                                                    |
| File, sandbox, and portable network requirements                    | Local execution                                                                                                                  | For local execution, MDM and legacy managed-device requirements rank above Agent Security. The device's system requirements file ranks below Agent Security. The new enterprise `requirements.toml` configuration does not apply to Work cloud containers, which retain existing Work Cloud policies.                                                                                                                                               |
| Platform-specific executor controls                                 | Computer running the step                                                                                                        | Support depends on the executor and platform.                                                                                                                                                                                                                                                                                                                                                                                                       |
| Managed hooks                                                       | Where enabled, admin-defined MCP hooks that run on the cloud coordinator (orchestrator) for supported lifecycle and tool events. | Before relying on these hooks, test the callback connection, confirm the events it receives, and check how failures affect the task. MCP hooks do not provide a complete Compliance API audit trail. Command, local-config, and plugin hooks are unsupported with cloud orchestration, even when tools execute locally. Existing supported hooks still apply to local-only Work and Codex threads where orchestration and execution are both local. |
| Proxy listener addresses, ports, and process settings               | Not portable environment policy                                                                                                  | Managed HTTP/SOCKS listener ports and non-loopback proxy listeners are unsupported by the cloud runtime; socket-rule support depends on the execution path. Custom proxy configuration is separate from supported destination restrictions.                                                                                                                                                                                                         |
| App-only settings and ordinary local defaults                       | Not necessarily consumed by cloud coordination                                                                                   | App-enforced controls can remain effective even when Local computer access with Work Cloud does not consume them. Cloud delivery and cloud-browser behavior need separate validation.                                                                                                                                                                                                                                                               |

<a id="agent-security-requirements-used-by-work-cloud"></a>

<a id="agent-security-requirements-for-synced-work"></a>

### Agent Security requirements for Local computer access with Work Cloud

For Work with local access and dots, supported Global policy applies to the shared cloud orchestrator when managed policy is enabled. Local execution requirements govern the connected computer. Work cloud containers and dots cloud computers use their own execution configuration and requirements. Test local and cloud controls separately.

#### Exposed in the Agent Security UI

- Allowed approval policies
- Allowed web search modes

#### Configured through TOML

- `allowed_approvals_reviewers`
- `auto_review`
- `guardian_policy_config`
- `apps`
- `mcp_servers`
- `plugins`
- `rules`

These orchestrator requirements stay in Global. They do not configure shared cloud capability permissions or make local execution settings portable to Work cloud containers or dots cloud computers.

<a id="work-sync-compatibility-limits"></a>

<a id="local-computer-access-compatibility-limits"></a>

### Local computer access with Work Cloud compatibility limits

Support depends on the field, how the policy is delivered, and where the task runs. Check the member's effective policy before enabling sync. Some controls need to be tested in your deployment, as noted in the table.

Within a policy, the order from highest to lowest is OS-specific environment override → all-OS environment override → Global. A higher-priority policy wins even when a lower-priority policy is more specific.

For local execution, MDM and legacy managed-device requirements take precedence over Agent Security, which takes precedence over the device's system requirements file. Some requirements, including network requirements, have field-specific merge rules and runtime limits. See [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration) for examples.

| **Setting or family**                                                                              | **Local computer access with Work Cloud compatibility**                                                               | **Admin guidance**                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sqlite_home`, `log_dir`, `model_catalog_json`                                                     | Not supported as managed cloud overrides.                                                                             | Local paths cannot move cloud storage or logs. A local model catalog does not carry over.                                                                                                                                                                                             |
| `model_provider`, `model_providers`                                                                | Not supported in managed Local computer access with Work Cloud requirements or configuration.                         | Custom inference gateways and provider connections do not carry over through these fields. This is separate from model selection.                                                                                                                                                     |
| `enforce_residency`                                                                                | Blocks Local computer access with Work Cloud when enabled in any cloud policy.                                        | If `enforce_residency` is enabled in any cloud policy, **Allow local computer access** is disabled for both Work and dots. This safeguard does not configure workspace residency or, by itself, disable Work Cloud or dots.                                                           |
| `application.network.enabled` and `application.network.domains`                                    | Not supported by Local computer access with Work Cloud.                                                               | Do not use these application-destination restrictions as Local computer access with Work Cloud command-networking controls.                                                                                                                                                           |
| `allow_browser_and_computer_use`, `in_app_browser`, `additional_developer_instructions`            | Cloud policy delivery needs validation. Local computer access with Work Cloud rejects these managed requirement keys. | Browser restrictions have app-side checks. That does not prove cloud delivery or cloud-browser enforcement. `additional_developer_instructions` requires orchestrator support.                                                                                                        |
| `experimental_network` and `permissions.<profile>.network`                                         | Partial. Supported destination and executor restrictions differ from custom proxy configuration.                      | Managed HTTP/SOCKS listener ports and non-loopback proxy listeners are unsupported by the cloud runtime; socket-rule support depends on the execution path. Local-execution merge behavior is separate. Command-network restrictions do not disable hosted search, MCP, or app tools. |
| features / `feature_requirements`, models, `computer_use`                                          | Partial.                                                                                                              | Retired switches such as `tool_search` = false, `tool_search_always_defer_mcp_tools` = false, `js_repl` = true, and `remote_control` = true are rejected. Some computer-use settings still need end-to-end validation.                                                                |
| `browser_use`, `allow_appshots`, feedback, `allow_remote_control`, marketplace source restrictions | The app or app-server enforces these controls on some policy delivery paths.                                          | App controls can still apply when Local computer access with Work Cloud ignores a field. Desktop browser site rules do not apply to Work cloud containers. Validate the actual surface and policy delivery path.                                                                      |

The configuration schema includes keys that may not work with Local computer access with Work Cloud or support environment overrides. See [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration) for the global baseline and precedence.

## `config.toml`

User-level configuration lives in `~/.codex/config.toml`. You can also add project-scoped overrides in `.codex/config.toml` files. Codex loads project-scoped config files only when you trust the project.

Project-scoped config can't override machine-local provider, auth,
host-owned app request metadata, notification, configuration profile selection,
or telemetry routing keys. Codex ignores `openai_base_url`,
`chatgpt_base_url`, `apps_mcp_product_sku`, `model_provider`,
`model_providers`, `notify`, `profile`, `profiles`,
`experimental_realtime_ws_base_url`, and `otel` when they appear in a
project-local `.codex/config.toml`; put provider, notification, and telemetry
keys in user-level config instead. Config [profile files](https://learn.chatgpt.com/docs/config-file/config-advanced#profiles) live next to
`config.toml` as `$CODEX_HOME/profile-name.config.toml`; select one with
`--profile profile-name`.

For sandbox and approval keys (`approval_policy`, `sandbox_mode`, and `sandbox_workspace_write.*`), pair this reference with [Sandbox and approvals](https://learn.chatgpt.com/docs/agent-approvals-security#sandbox-and-approvals), [Protected paths in writable roots](https://learn.chatgpt.com/docs/agent-approvals-security#protected-paths-in-writable-roots), and [Network access](https://learn.chatgpt.com/docs/agent-approvals-security#network-access). For beta permission profiles, see [Permissions](https://learn.chatgpt.com/docs/permissions).

Codex and ChatGPT Work no longer support `approval_policy = "untrusted"`.
Remove the setting or choose a supported policy. Project entries with
`trust_level = "untrusted"` in user-level `~/.codex/config.toml` remain supported. See
[Migrate from the retired `untrusted` approval policy](https://learn.chatgpt.com/docs/agent-approvals-security#migrate-from-the-retired-untrusted-approval-policy)
for examples and approval tradeoffs.

Set `model` to one available to your signed-in account or workspace. See
[GPT-6.1 Sol availability](https://learn.chatgpt.com/docs/models#gpt-6.1-sol) before using the example value.

<ConfigTable
  options={[
    {
      key: "model",
      type: "string",
      description: "Model to use (e.g., `gpt-6.1-sol`).",
    },
    {
      key: "review_model",
      type: "string",
      description:
        "Optional model override used by `/review` (defaults to the current session model).",
    },
    {
      key: "model_provider",
      type: "string",
      description: "Provider id from `model_providers` (default: `openai`).",
    },
    {
      key: "openai_base_url",
      type: "string",
      description:
        "Base URL override for the built-in `openai` model provider.",
    },
    {
      key: "model_context_window",
      type: "number",
      description: "Context window tokens available to the active model.",
    },
    {
      key: "model_auto_compact_token_limit",
      type: "number",
      description:
        "Token threshold that triggers automatic history compaction (unset uses model defaults).",
    },
    {
      key: "model_auto_compact_token_limit_scope",
      type: "total | body_after_prefix",
      description:
        "Controls whether the auto-compaction threshold counts the full active context (`total`, the default) or only growth after the carried compaction-window prefix (`body_after_prefix`).",
    },
    {
      key: "model_post_turn_compact_threshold_percent",
      type: "integer (0–100)",
      description:
        "Compact history after a final response when active context reaches this percentage of the usable context window. Omit or set to `0` to disable turn-end compaction. The usual auto-compaction limits still apply.",
    },
    {
      key: "model_catalog_json",
      type: "string (path)",
      description:
        "Optional path to a JSON model catalog loaded on startup. A selected `$CODEX_HOME/profile-name.config.toml` profile file can override this per profile.",
    },
    {
      key: "oss_provider",
      type: "lmstudio | ollama",
      description:
        "Default local provider used when running with `--oss` (defaults to prompting if unset).",
    },
    {
      key: "approval_policy",
      type: "on-request | never | { granular = { sandbox_approval = bool, rules = bool, mcp_elicitations = bool, request_permissions = bool, skill_approval = bool } }",
      description:
        "Controls when Codex pauses for approval before executing commands. You can also use `approval_policy = { granular = { ... } }` to allow or auto-reject specific prompt categories while keeping other prompts interactive. `untrusted` is unsupported, and `on-failure` is deprecated; use `on-request` for interactive runs or `never` for non-interactive runs.",
    },
    {
      key: "approval_policy.granular.sandbox_approval",
      type: "boolean",
      description:
        "When `true`, sandbox escalation approval prompts are allowed to surface.",
    },
    {
      key: "approval_policy.granular.rules",
      type: "boolean",
      description:
        "When `true`, approvals triggered by execpolicy `prompt` rules are allowed to surface.",
    },
    {
      key: "approval_policy.granular.mcp_elicitations",
      type: "boolean",
      description:
        "When `true`, MCP elicitation prompts are allowed to surface instead of being auto-rejected.",
    },
    {
      key: "approval_policy.granular.request_permissions",
      type: "boolean",
      description:
        "When `true`, prompts from the `request_permissions` tool are allowed to surface.",
    },
    {
      key: "approval_policy.granular.skill_approval",
      type: "boolean",
      description:
        "When `true`, skill-script approval prompts are allowed to surface.",
    },
    {
      key: "approvals_reviewer",
      type: "user | auto_review",
      description:
        "Who reviews eligible approval prompts under `on-request` or granular approval policies. Defaults to `user`; `auto_review` uses the reviewer subagent. This setting doesn't change sandboxing or review actions already allowed inside the sandbox.",
    },
    {
      key: "auto_review.policy",
      type: "string",
      description:
        "Markdown text that replaces the default Auto-review policy. Managed `guardian_policy_config` takes precedence. Blank values are ignored.",
    },
    {
      key: "auto_review.extra_policy",
      type: "string",
      description:
        "Markdown rules that Auto-review applies alongside the active policy. Managed `guardian_extra_policy` takes precedence. Blank values are ignored.",
    },
    {
      key: "allow_login_shell",
      type: "boolean",
      description:
        "Allow shell-based tools to use login-shell semantics. Defaults to `true`; when `false`, `login = true` requests are rejected and omitted `login` defaults to non-login shells.",
    },
    {
      key: "allow_symlinked_codex_home",
      type: "boolean",
      description:
        "On macOS, allow writable sandbox roots at or under `$CODEX_HOME` to follow symlinks. Codex reads this only from the execution host's `$CODEX_HOME/config.toml` at startup. Enabling it trusts targets outside that directory and targets that change between commands. It grants no additional writable roots. Defaults to `false`.",
    },
    {
      key: "sandbox_mode",
      type: "read-only | workspace-write | danger-full-access",
      description:
        "Sandbox policy for filesystem and network access during command execution.",
    },
    {
      key: "sandbox_workspace_write.writable_roots",
      type: "array<string>",
      description:
        'Additional writable roots when `sandbox_mode = "workspace-write"`.',
    },
    {
      key: "sandbox_workspace_write.network_access",
      type: "boolean",
      description:
        "Allow outbound network access inside the workspace-write sandbox.",
    },
    {
      key: "sandbox_workspace_write.exclude_tmpdir_env_var",
      type: "boolean",
      description:
        "Exclude `$TMPDIR` from writable roots in workspace-write mode.",
    },
    {
      key: "sandbox_workspace_write.exclude_slash_tmp",
      type: "boolean",
      description:
        "Exclude `/tmp` from writable roots in workspace-write mode.",
    },
    {
      key: "windows.sandbox",
      type: "mxc | elevated | unelevated",
      description:
        "Native Windows sandbox implementation. Explicit `mxc` selection fails when MXC is unavailable or prohibited by managed requirements. Use `features.prefer_mxc` with a legacy selection for automatic MXC selection with fallback.",
    },
    {
      key: "browser_use.allow_history_access",
      type: "boolean",
      description:
        "Set to `false` to restrict browser-history access. Managed requirements can enforce this restriction.",
    },
    {
      key: "browser_use.default_origin_policy",
      type: "table",
      description:
        "Fallback browser-origin restrictions. Supports `access`, `uploads`, `downloads`, and `full_cdp_access`, each set to `allow` or `deny`.",
    },
    {
      key: "browser_use.origins.<origin>",
      type: "table",
      description:
        "Per-origin browser restrictions with the same fields as `browser_use.default_origin_policy`. Include an HTTP or HTTPS scheme and optional port; omit paths, queries, and fragments. Local values cannot relax managed denies.",
    },
    {
      key: "computer_use.default_app_access",
      type: "allow | deny",
      description:
        "Fallback native-app access policy for Computer Use. App-specific entries can supply a policy; local configuration cannot relax managed restrictions.",
    },
    {
      key: "computer_use.macos.bundle_ids",
      type: "map<string, allow | deny>",
      description: "Native macOS app access keyed by bundle identifier.",
    },
    {
      key: "computer_use.windows.aumids",
      type: "map<string, allow | deny>",
      description:
        "Packaged Windows app access keyed by Application User Model ID (AUMID).",
    },
    {
      key: "computer_use.windows.exes",
      type: "array<table>",
      description:
        "Windows executable access rules. Each rule requires `publisher_name`, `product_name`, and `access` (`allow` or `deny`); `binary_name` is optional.",
    },
    {
      key: "computer_use.windows.always_allowed_app_ids",
      type: "array<string>",
      description:
        "Windows app identifiers that Computer Use can open without prompting. Apps not in the list require approval; remove saved entries from the ChatGPT desktop app's Computer Use settings.",
    },
    {
      key: "notify",
      type: "array<string>",
      description:
        "Command invoked for notifications; receives a JSON payload from Codex.",
    },
    {
      key: "check_for_update_on_startup",
      type: "boolean",
      description:
        "Check for Codex updates on startup (set to false only when updates are centrally managed).",
    },
    {
      key: "feedback.enabled",
      type: "boolean",
      description:
        "Enable feedback submission via `/feedback` across local clients (default: true).",
    },
    {
      key: "analytics.enabled",
      type: "boolean",
      description:
        "Enable or disable analytics for this machine or profile. Setting this to `false` disables the built-in Statsig metrics exporter. Explicit OTLP metrics exporters remain active. When unset, the client default applies.",
    },
    {
      key: "instructions",
      type: "string",
      description:
        "Reserved for future use; prefer `model_instructions_file` or `AGENTS.md`.",
    },
    {
      key: "developer_instructions",
      type: "string",
      description:
        "Additional developer instructions injected into the session (optional).",
    },
    {
      key: "log_dir",
      type: "string (path)",
      description:
        "Directory where Codex writes log files; defaults to `$CODEX_HOME/log`. Setting this explicitly also enables the opt-in plaintext TUI log, `codex-tui.log`, in that directory.",
    },
    {
      key: "sqlite_home",
      type: "string (path)",
      description:
        "Directory where Codex stores the SQLite-backed state DB used by agent jobs and other resumable runtime state.",
    },
    {
      key: "compact_prompt",
      type: "string",
      description: "Inline override for the history compaction prompt.",
    },
    {
      key: "model_instructions_file",
      type: "string (path)",
      description:
        "Replacement for built-in instructions instead of `AGENTS.md`.",
    },
    {
      key: "personality",
      type: "none | friendly | pragmatic",
      description:
        "Deprecated compatibility setting. `friendly` and `pragmatic` no longer select a style. `none` omits the built-in Personality section from model instructions; explicit instruction overrides are unchanged.",
    },
    {
      key: "service_tier",
      type: "string",
      description:
        "Preferred service tier for new turns. Use `fast` or another tier advertised by the active model; `fast` maps to the request value `priority`.",
    },
    {
      key: "experimental_compact_prompt_file",
      type: "string (path)",
      description:
        "Load the compaction prompt override from a file (experimental).",
    },
    {
      key: "skills.bundled.enabled",
      type: "boolean",
      description:
        "Load the system skills bundled with Codex. Defaults to `true`. Set to `false` in a trusted project configuration to disable bundled skills for that project.",
    },
    {
      key: "skills.include_instructions",
      type: "boolean",
      description:
        "Include the automatic skills instructions in the model context. Defaults to `true`.",
    },
    {
      key: "skills.max_context_tokens",
      type: "integer (positive)",
      description:
        "Token budget for the available-skills catalog. Defaults to 2% of the model's context window. Explicit values are capped at `10000` tokens.",
    },
    {
      key: "skills.config",
      type: "array<object>",
      description:
        "Enable or disable skills by name or path. If several rules match a skill, the last one wins.",
    },
    {
      key: "skills.config.<index>.path",
      type: "string (path)",
      description: "Absolute path to one `SKILL.md` file.",
    },
    {
      key: "skills.config.<index>.name",
      type: "string",
      description:
        "Match every skill with this exact name. Specify either `name` or `path` for each entry.",
    },
    {
      key: "skills.config.<index>.enabled",
      type: "boolean",
      description: "Enable or disable the referenced skill.",
    },
    {
      key: "apps.<id>.enabled",
      type: "boolean",
      description:
        "Enable or disable a specific app/connector by id (default: true).",
    },
    {
      key: "apps._default.enabled",
      type: "boolean",
      description:
        "Default app enabled state for all apps unless overridden per app.",
    },
    {
      key: "apps._default.destructive_enabled",
      type: "boolean",
      description:
        "Default allow/deny for app tools with `destructive_hint = true`.",
    },
    {
      key: "apps._default.open_world_enabled",
      type: "boolean",
      description:
        "Default allow/deny for app tools with `open_world_hint = true`.",
    },
    {
      key: "apps._default.approvals_reviewer",
      type: "user | auto_review",
      description:
        "Default reviewer for app tool approval prompts unless overridden per app. When omitted, apps inherit the top-level `approvals_reviewer` value.",
    },
    {
      key: "apps._default.default_tools_approval_mode",
      type: "auto | prompt | writes | approve",
      description:
        "Default approval behavior for app tools without per-app or per-tool overrides.",
    },
    {
      key: "apps.<id>.destructive_enabled",
      type: "boolean",
      description:
        "Allow or block tools in this app that advertise `destructive_hint = true`.",
    },
    {
      key: "apps.<id>.open_world_enabled",
      type: "boolean",
      description:
        "Allow or block tools in this app that advertise `open_world_hint = true`.",
    },
    {
      key: "apps.<id>.default_tools_enabled",
      type: "boolean",
      description:
        "Default enabled state for tools in this app unless a per-tool override exists.",
    },
    {
      key: "apps.<id>.approvals_reviewer",
      type: "user | auto_review",
      description:
        "Reviewer for this app's tool approval prompts. Overrides `apps._default.approvals_reviewer`.",
    },
    {
      key: "apps.<id>.default_tools_approval_mode",
      type: "auto | prompt | writes | approve",
      description:
        "Default approval behavior for tools in this app unless a per-tool override exists.",
    },
    {
      key: "apps.<id>.omit_tools_from",
      type: "array<string>",
      description:
        "Omit this app's tools from the `direct`, `deferred`, or `code_mode` surfaces. App and MCP server omissions apply together.",
    },
    {
      key: "apps.<id>.tools.<tool>.enabled",
      type: "boolean",
      description:
        "Per-tool enabled override for an app tool (for example `repos/list`).",
    },
    {
      key: "apps.<id>.tools.<tool>.approval_mode",
      type: "auto | prompt | writes | approve",
      description: "Per-tool approval behavior override for a single app tool.",
    },
    {
      key: "tool_suggest.discoverables",
      type: "array<table>",
      description:
        'Allow tool suggestions for additional discoverable connectors or plugins. Each entry uses `type = "connector"` or `"plugin"` and an `id`.',
    },
    {
      key: "tool_suggest.disabled_tools",
      type: "array<table>",
      description:
        'Disable suggestions for specific discoverable connectors or plugins. Each entry uses `type = "connector"` or `"plugin"` and an `id`.',
    },
    {
      key: "features.apps",
      type: "boolean",
      description:
        "Enable app (connector) integrations (stable; on by default). App and connector traffic is not controlled by the sandboxed-command network proxy or its domain allowlist.",
    },
    {
      key: "features.hooks",
      type: "boolean",
      description:
        "Enable lifecycle hooks loaded from `hooks.json` or inline `[hooks]` config. `features.codex_hooks` is a deprecated alias.",
    },
    {
      key: "features.code_mode.enabled",
      type: "boolean",
      description:
        "Enable code mode feature configuration. This feature is under development and off by default.",
    },
    {
      key: "features.code_mode.excluded_tool_namespaces",
      type: "array<string>",
      description:
        "Tool namespaces code mode excludes from nested code-mode tool guidance and executor exposure.",
    },
    {
      key: "features.code_mode.direct_only_tool_namespaces",
      type: "array<string>",
      description:
        "Tool namespaces code mode can use only through direct tool calls.",
    },
    {
      key: "features.context_management.experimental_mode",
      type: "boolean",
      description:
        "Experimental context-management setting. The feature is not currently available.",
    },
    {
      key: "features.rollout_budget.enabled",
      type: "boolean",
      description:
        "Enable rollout budget tracking. This feature is under development and off by default. When enabled, set both `limit_tokens` and `reminder_at_remaining_tokens`.",
    },
    {
      key: "features.rollout_budget.limit_tokens",
      type: "integer",
      description:
        "Positive token limit for rollout budget tracking. Required when rollout budget is enabled.",
    },
    {
      key: "features.rollout_budget.reminder_at_remaining_tokens",
      type: "array<integer>",
      description:
        "Send a reminder as the remaining weighted token budget crosses each threshold. Supply the list when rollout budget tracking is enabled. Each value must be positive and below `limit_tokens`.",
    },
    {
      key: "features.rollout_budget.sampling_token_weight",
      type: "number",
      description:
        "Finite non-negative multiplier for sampled tokens in rollout budget accounting. Defaults to `1.0`.",
    },
    {
      key: "features.rollout_budget.prefill_token_weight",
      type: "number",
      description:
        "Finite non-negative multiplier for prefill tokens in rollout budget accounting. Defaults to `1.0`.",
    },
    {
      key: "hooks",
      type: "table",
      description:
        "Lifecycle hooks configured inline in `config.toml`. Uses the same event schema as `hooks.json`; see the Hooks guide for examples and supported events.",
    },
    {
      key: "hooks.<Event>",
      type: "array<table>",
      description:
        "Matcher groups for hook events such as `PreModelRequest`, `PostModelRequest`, `PreToolUse`, `PermissionRequest`, `PostToolUse`, `PreCompact`, `PostCompact`, `SessionStart`, `SessionEnd`, `SubagentStart`, `SubagentStop`, `UserPromptSubmit`, `Stop`, or `Interrupt`.",
    },
    {
      key: "hooks.<Event>[].hooks",
      type: "array<table>",
      description:
        "Hook handlers for a matcher group. Command and MCP tool hooks are supported while prompt and agent hook handlers are parsed but skipped.",
    },
    {
      key: "hooks.<Event>[].hooks[].async",
      type: "boolean",
      description:
        "Run a command hook in the background without delaying the triggering operation. Defaults to `false`; `SessionEnd` always runs synchronously. See [Run hooks in the background](https://learn.chatgpt.com/docs/hooks#run-hooks-in-the-background).",
    },
    {
      key: "hooks.<Event>[].hooks[].additionalContextLimit",
      type: "integer",
      description:
        "Approximate per-handler token threshold for saving oversized `additionalContext` to disk and showing the model a shorter preview. Defaults to `2500`; `0` passes the full context directly to the model. See [Large hook output](https://learn.chatgpt.com/docs/hooks#large-hook-output).",
    },
    {
      key: "hooks.<Event>[].hooks[].commandWindows",
      type: "string",
      description:
        "Windows-only command override for command hooks. The TOML alias `command_windows` is also accepted.",
    },
    {
      key: "features.memories",
      type: "boolean",
      description:
        "Enable [Memories](https://learn.chatgpt.com/docs/customization/memories) (off by default).",
    },
    {
      key: "mcp_optional_startup_grace_ms",
      type: "integer (milliseconds)",
      description:
        "Shared wait for optional MCP servers when building the initial tool catalog. Defaults to `1000`. Set to `0` to wait for each server's `startup_timeout_sec` instead.",
    },
    {
      key: "mcp_servers.<id>.command",
      type: "string",
      description: "Launcher command for an MCP stdio server.",
    },
    {
      key: "mcp_servers.<id>.args",
      type: "array<string>",
      description: "Arguments passed to the MCP stdio server command.",
    },
    {
      key: "mcp_servers.<id>.env",
      type: "map<string,string>",
      description: "Environment variables forwarded to the MCP stdio server.",
    },
    {
      key: "mcp_servers.<id>.env_vars",
      type: 'array<string | { name = string, source = "local" | "remote" }>',
      description:
        'Additional environment variables to whitelist for an MCP stdio server. String entries default to `source = "local"`; use `source = "remote"` only with executor-backed remote stdio.',
    },
    {
      key: "mcp_servers.<id>.cwd",
      type: "string",
      description: "Working directory for the MCP stdio server process.",
    },
    {
      key: "mcp_servers.<id>.url",
      type: "string",
      description: "Endpoint for an MCP streamable HTTP server.",
    },
    {
      key: "mcp_servers.<id>.auth",
      type: "oauth | chatgpt",
      description:
        "Authentication fallback for an MCP HTTP server after configured bearer tokens and authorization headers. `oauth` (default) uses stored MCP OAuth credentials when available. `chatgpt` uses the current ChatGPT session for the trusted first-party ChatGPT origin, then falls back to stored OAuth. Both modes can connect without authentication if no credential source resolves.",
    },
    {
      key: "mcp_servers.<id>.oauth.client_id",
      type: "string",
      description:
        "Pre-registered OAuth client ID used for authorization and token exchange with this MCP server.",
    },
    {
      key: "mcp_servers.<id>.oauth.client_secret",
      type: "string",
      description:
        "OAuth client secret for token exchange with a pre-registered client. Requires a nonempty `oauth.client_id`; the secret must also be nonempty. Stored in configuration.",
    },
    {
      key: "mcp_servers.<id>.oauth.callback_url",
      type: "string",
      description:
        "Server-specific OAuth callback. Pre-registered clients reuse it when issuer identification is supported or the URL already ends in the server-specific callback ID. Otherwise, Codex uses the global or default callback with that ID appended. Clients without a pre-registered ID use this callback during client registration.",
    },
    {
      key: "mcp_servers.<id>.oauth.callback_port",
      type: "integer",
      description:
        "Fixed OAuth callback listener port for this MCP server. Overrides `mcp_oauth_callback_port`. For a direct loopback callback with an explicit URL port, configure the same listener port.",
    },
    {
      key: "mcp_servers.<id>.bearer_token_env_var",
      type: "string",
      description:
        "Environment variable sourcing the bearer token for an MCP HTTP server.",
    },
    {
      key: "mcp_servers.<id>.http_headers",
      type: "map<string,string>",
      description: "Static HTTP headers included with each MCP HTTP request.",
    },
    {
      key: "mcp_servers.<id>.http_headers_helper",
      type: "string (command)",
      description:
        "Local command that prints a JSON object of HTTP header names and values. Supported only for locally connected HTTP MCP servers. Explicit bearer tokens and OAuth credentials take precedence over helper-provided Authorization headers.",
    },
    {
      key: "mcp_servers.<id>.env_http_headers",
      type: "map<string,string>",
      description:
        "HTTP headers populated from environment variables for an MCP HTTP server.",
    },
    {
      key: "mcp_servers.<id>.enabled",
      type: "boolean",
      description: "Disable an MCP server without removing its configuration.",
    },
    {
      key: "mcp_servers.<id>.required",
      type: "boolean",
      description:
        'Require this enabled server to be ready at startup. With `startup_readiness = "catalog"`, a valid cached catalog can satisfy that requirement.',
    },
    {
      key: "mcp_servers.<id>.startup_readiness",
      type: "connection | catalog",
      description:
        "Use a live connection to establish startup readiness (`connection`, the default), or let a valid cached tool catalog satisfy startup while the connection opens (`catalog`). Calling a tool still requires a live connection.",
    },
    {
      key: "mcp_servers.<id>.startup_timeout_sec",
      type: "number",
      description:
        "Override the default 10s startup timeout for an MCP server.",
    },
    {
      key: "mcp_servers.<id>.startup_timeout_ms",
      type: "number",
      description: "Alias for `startup_timeout_sec` in milliseconds.",
    },
    {
      key: "mcp_servers.<id>.tool_timeout_sec",
      type: "number",
      description:
        "Override the default 60s per-tool timeout for an MCP server.",
    },
    {
      key: "mcp_servers.<id>.enabled_tools",
      type: "array<string>",
      description: "Allow list of tool names exposed by the MCP server.",
    },
    {
      key: "mcp_servers.<id>.disabled_tools",
      type: "array<string>",
      description:
        "Deny list applied after `enabled_tools` for the MCP server.",
    },
    {
      key: "mcp_servers.<id>.supports_parallel_tool_calls",
      type: "boolean",
      description:
        "Mark every tool on this server as safe to run in parallel. Enable only when the server can handle concurrent calls to all its tools. Defaults to `false`.",
    },
    {
      key: "mcp_servers.<id>.tool_input_schema_max_bytes",
      type: "integer (positive)",
      description:
        "Compact each ordinary MCP tool's input schema when it exceeds this many UTF-8 bytes. The default is 5,000 bytes. Code Mode also uses an explicit value when rendering tool input types.",
    },
    {
      key: "mcp_servers.<id>.omit_tools_from",
      type: "array<string>",
      description:
        "Omit this server’s tools from selected model-facing surfaces. Choose `direct` (initial tools), `deferred` (tool search), or `code_mode` (Code Mode scripts). Use `disabled_tools` to block a tool. An empty list clears inherited omissions.",
    },
    {
      key: "mcp_servers.<id>.default_tools_approval_mode",
      type: "auto | prompt | writes | approve",
      description:
        "Default approval behavior for MCP tools on this server unless a per-tool override exists.",
    },
    {
      key: "mcp_servers.<id>.tools.<tool>.approval_mode",
      type: "auto | prompt | writes | approve",
      description:
        "Per-tool approval behavior override for one MCP tool on this server.",
    },
    {
      key: "mcp_servers.<id>.tools.<tool>.output_token_limit",
      type: "integer (positive)",
      description:
        "Token budget for one MCP tool's output, before the standard 20% serialization allowance. Overrides the model's default output truncation budget for that tool.",
    },
    {
      key: "mcp_servers.<id>.scopes",
      type: "array<string>",
      description:
        "OAuth scopes to request at login. If omitted, Codex uses the initial authentication challenge's scopes, falling back to the protected resource's metadata.",
    },
    {
      key: "mcp_servers.<id>.oauth_resource",
      type: "string",
      description:
        "Optional RFC 8707 OAuth resource parameter to include during MCP login.",
    },
    {
      key: "mcp_servers.<id>.environment_id",
      type: "string",
      description:
        "Execution environment for the MCP server. Defaults to `local`. Use the ID of a configured executor to run a stdio server or connect to a streamable HTTP server there.",
    },
    {
      key: "agents",
      type: "table",
      description:
        "Multi-agent settings and custom role declarations. Scalar setting names are reserved and can't be used as custom role names.",
    },
    {
      key: "agents.enabled",
      type: "boolean",
      description: "Enable or disable multi-agent tools (default: true).",
    },
    {
      key: "agents.max_concurrent_threads_per_session",
      type: "number",
      description:
        "Maximum number of spawned-agent threads that can be open concurrently, excluding the primary thread. When unset, Codex chooses the default.",
    },
    {
      key: "agents.max_threads",
      type: "number",
      description:
        "Legacy alias for `agents.max_concurrent_threads_per_session`.",
    },
    {
      key: "agents.default_subagent_model",
      type: "string",
      description:
        "Default model for spawned agents. An explicit spawn model takes precedence.",
    },
    {
      key: "agents.default_subagent_reasoning_effort",
      type: "string",
      description:
        "Default reasoning effort for spawned agents. An explicit spawn effort takes precedence.",
    },
    {
      key: "agents.interrupt_message",
      type: "boolean",
      description:
        "Record a model-visible message when an agent turn is interrupted (default: true).",
    },
    {
      key: "agents.<name>.description",
      type: "string",
      description:
        "Role guidance shown to Codex when choosing and spawning that agent type.",
    },
    {
      key: "agents.<name>.config_file",
      type: "string (path)",
      description:
        "Path to a TOML config layer for that role; relative paths resolve from the config file that declares the role.",
    },
    {
      key: "memories.version",
      type: "v1 | v2",
      description:
        "Select the local memory store. With memories enabled, Codex defaults to `v2` for a fresh home and `v1` if `$CODEX_HOME/memories/` exists. Explicitly setting `dual_write = false` keeps the default at `v1`.",
    },
    {
      key: "memories.dual_write",
      type: "boolean",
      description:
        "With `v1` selected, set to `true` to generate both stores while continuing to read `v1`. With `v2` selected, Codex writes only `v2`.",
    },
    {
      key: "memories.generate_memories",
      type: "boolean",
      description:
        "When `false`, newly created threads are not stored as memory-generation inputs. Defaults to `true`.",
    },
    {
      key: "memories.use_memories",
      type: "boolean",
      description:
        "When `false`, Codex skips injecting existing memories into future sessions. Defaults to `true`.",
    },
    {
      key: "memories.disable_on_external_context",
      type: "boolean",
      description:
        "When `true`, threads that use external context such as MCP tool calls, web search, or tool search are kept out of memory generation. Defaults to `false`. Legacy alias: `memories.no_memories_if_mcp_or_web_search`.",
    },
    {
      key: "memories.max_raw_memories_for_consolidation",
      type: "number",
      description:
        "Maximum recent raw memories retained for global consolidation. Defaults to `256` and is capped at `4096`.",
    },
    {
      key: "memories.max_unused_days",
      type: "number",
      description:
        "Maximum days since a memory was last used before it becomes ineligible for consolidation. Defaults to `30` and is clamped to `0`-`365`.",
    },
    {
      key: "memories.max_rollout_age_days",
      type: "number",
      description:
        "Maximum age of threads considered for memory generation. Defaults to `30` and is clamped to `0`-`90`.",
    },
    {
      key: "memories.max_rollouts_per_startup",
      type: "number",
      description:
        "Maximum rollout candidates processed per startup pass. Defaults to `16` and is capped at `128`.",
    },
    {
      key: "memories.min_rollout_idle_hours",
      type: "number",
      description:
        "Minimum idle time before a thread is considered for memory generation. Defaults to `6` and is clamped to `1`-`48`.",
    },
    {
      key: "memories.min_rate_limit_remaining_percent",
      type: "number",
      description:
        "Minimum remaining percentage required in Codex rate-limit windows before memory generation starts. Defaults to `25` and is clamped to `0`-`100`.",
    },
    {
      key: "memories.extract_model",
      type: "string",
      description: "Optional model override for per-thread memory extraction.",
    },
    {
      key: "memories.consolidation_model",
      type: "string",
      description: "Optional model override for global memory consolidation.",
    },
    {
      key: "memories.consolidation_service_tier",
      type: "string",
      description:
        "Service tier for global memory consolidation. Defaults to `default` (Standard).",
    },
    {
      key: "features.prefer_mxc",
      type: "boolean",
      description:
        "Prefer MXC for local Windows execution when native capabilities and policy allow it; otherwise retain the configured legacy sandbox and setup. Disabled by default in the standalone CLI; the desktop app can enable it through rollout configuration. Command failures don't trigger fallback.",
    },
    {
      key: "features.unified_exec",
      type: "boolean",
      description:
        "Use resumable command execution (stable; enabled on all platforms). User opt-outs are ignored. Managed requirements can disable resumable processes and `write_stdin`, leaving one-shot `exec_command` available.",
    },
    {
      key: "features.view_image",
      type: "boolean",
      description:
        "Enable the built-in `view_image` tool for opening local images. Defaults to `true`.",
    },
    {
      key: "features.shell_snapshot",
      type: "boolean",
      description:
        "Snapshot shell environment to speed up repeated commands (stable; on by default).",
    },
    {
      key: "features.multi_agent",
      type: "boolean",
      description:
        "Enable multi-agent collaboration tools (`spawn_agent`, `send_input`, `resume_agent`, `wait_agent`, and `close_agent`) (stable; on by default).",
    },
    {
      key: "features.goals",
      type: "boolean",
      description:
        "Enable persisted goals and automatic continuation (stable; on by default).",
    },
    {
      key: "goals.max_goal_token_budget",
      type: "integer (positive)",
      description:
        "Set the default token budget for new goals and the largest budget a goal can request. Omit to leave goals without a configured limit.",
    },
    {
      key: "features.remote_plugin",
      type: "boolean",
      description: "Enable the remote plugin catalog (stable; on by default).",
    },
    {
      key: "features.personality",
      type: "boolean",
      description:
        "Removed feature flag. Accepted for compatibility and ignored.",
    },
    {
      key: "features.network_proxy",
      type: "boolean | table",
      description:
        "Start the network proxy for sandboxed commands (experimental; off by default). Required to enforce permission-profile domain rules unless enabled administrator-managed `network_proxy` requirements start the proxy. Use a table when setting feature-level policy options such as `domains`. Does not filter web search, apps, MCP, or other hosted tools.",
    },
    {
      key: "features.network_proxy.enabled",
      type: "boolean",
      description:
        "Start the sandboxed-command network proxy when command network access is enabled. Defaults to `false`; permission-profile domain rules are not enforced while the proxy is off.",
    },
    {
      key: "features.network_proxy.domains",
      type: "map<string, allow | deny>",
      description:
        "Domain policy for sandboxed networking. Unset by default, which means no external destinations are allowed until you add `allow` rules. Supports exact hosts, `*.example.com` for subdomains only, `**.example.com` for apex plus subdomains, and global `*` allow rules. Prefer scoped rules because `*` broadly opens public outbound access. Add `deny` rules for blocked destinations; `deny` wins on conflicts.",
    },
    {
      key: "features.network_proxy.unix_sockets",
      type: "map<string, allow | deny>",
      description:
        "Unix socket policy for sandboxed networking. Unset by default; add `allow` entries for permitted sockets.",
    },
    {
      key: "features.network_proxy.allow_local_binding",
      type: "boolean",
      description:
        "Allow broader local/private-network access. Defaults to `false`; exact local IP literal or `localhost` allow rules can still permit specific local targets.",
    },
    {
      key: "features.network_proxy.enable_socks5",
      type: "boolean",
      description: "Expose SOCKS5 support. Defaults to `true`.",
    },
    {
      key: "features.network_proxy.enable_socks5_udp",
      type: "boolean",
      description: "Allow UDP over SOCKS5. Defaults to `true`.",
    },
    {
      key: "features.network_proxy.allow_upstream_proxy",
      type: "boolean",
      description:
        "Allow chaining through an upstream proxy from the environment. Defaults to `true`.",
    },
    {
      key: "features.network_proxy.dangerously_allow_non_loopback_proxy",
      type: "boolean",
      description:
        "Permit non-loopback listener addresses. Defaults to `false`; enabling it can expose proxy listeners beyond localhost.",
    },
    {
      key: "features.network_proxy.dangerously_allow_all_unix_sockets",
      type: "boolean",
      description:
        "Permit arbitrary Unix socket destinations instead of allowlist-only access. Defaults to `false`; use only in tightly controlled environments.",
    },
    {
      key: "features.network_proxy.proxy_url",
      type: "string",
      description:
        'HTTP listener URL for sandboxed networking. Defaults to `"http://127.0.0.1:3128"`.',
    },
    {
      key: "features.network_proxy.socks_url",
      type: "string",
      description:
        'SOCKS5 listener URL. Defaults to `"http://127.0.0.1:8081"`.',
    },
    {
      key: "features.web_search",
      type: "boolean",
      description:
        "Deprecated legacy toggle; prefer the top-level `web_search` setting.",
    },
    {
      key: "features.web_search_cached",
      type: "boolean",
      description:
        'Deprecated legacy toggle. When `web_search` is unset, true maps to `web_search = "cached"`.',
    },
    {
      key: "features.web_search_request",
      type: "boolean",
      description:
        'Deprecated legacy toggle. When `web_search` is unset, true maps to `web_search = "live"`.',
    },
    {
      key: "features.shell_tool",
      type: "boolean",
      description: "Enable command execution tools (stable; on by default).",
    },
    {
      key: "features.enable_request_compression",
      type: "boolean",
      description:
        "Compress streaming request bodies with zstd when supported (stable; on by default).",
    },
    {
      key: "features.skill_mcp_dependency_install",
      type: "boolean",
      description:
        "Allow prompting and installing missing MCP dependencies for skills (stable; on by default).",
    },
    {
      key: "features.fast_mode",
      type: "boolean",
      description:
        "Enable Fast mode controls advertised by the active model (stable; on by default), independently of `features.ultrafast_mode`. Availability still depends on the model and account.",
    },
    {
      key: "features.ultrafast_mode",
      type: "boolean",
      description:
        "Enable Ultrafast mode controls (stable; on by default), independently of `features.fast_mode`. Availability still depends on the model and account.",
    },
    {
      key: "features.prevent_idle_sleep",
      type: "boolean",
      description:
        "Prevent the machine from sleeping while a turn is actively running (experimental; off by default).",
    },
    {
      key: "suppress_unstable_features_warning",
      type: "boolean",
      description:
        "Suppress the warning that appears when under-development feature flags are enabled.",
    },
    {
      key: "model_providers.<id>",
      type: "table",
      description:
        "Custom provider definition. Built-in provider IDs (`openai`, `ollama`, and `lmstudio`) are reserved and cannot be overridden.",
    },
    {
      key: "model_providers.<id>.name",
      type: "string",
      description: "Display name for a custom model provider.",
    },
    {
      key: "model_providers.<id>.base_url",
      type: "string",
      description: "API base URL for the model provider.",
    },
    {
      key: "model_providers.<id>.model_catalog_url",
      type: "string",
      description:
        "Full URL for a Codex-native model catalog. Omit to keep the provider's default model discovery.",
    },
    {
      key: "model_providers.<id>.capabilities.external_web_access",
      type: "boolean",
      description:
        "Whether the provider's hosted web search can access the live web. Omit to keep provider defaults; model and turn settings may restrict access further.",
    },
    {
      key: "model_providers.<id>.capabilities.remote_compaction",
      type: "unsupported | v2",
      description:
        "Provider compaction protocol. `unsupported` uses local compaction; `v2` sends compaction triggers through Responses. Omit to keep provider defaults; model and turn settings may restrict support further.",
    },
    {
      key: "model_providers.<id>.env_key",
      type: "string",
      description: "Environment variable supplying the provider API key.",
    },
    {
      key: "model_providers.<id>.env_key_instructions",
      type: "string",
      description: "Optional setup guidance for the provider API key.",
    },
    {
      key: "model_providers.<id>.experimental_bearer_token",
      type: "string",
      description:
        "Direct bearer token for the provider (discouraged; use `env_key`).",
    },
    {
      key: "model_providers.<id>.requires_openai_auth",
      type: "boolean",
      description:
        "The provider uses OpenAI authentication (defaults to false).",
    },
    {
      key: "model_providers.<id>.wire_api",
      type: "responses",
      description:
        "Protocol used by the provider. `responses` is the only supported value, and it is the default when omitted.",
    },
    {
      key: "model_providers.<id>.query_params",
      type: "map<string,string>",
      description: "Extra query parameters appended to provider requests.",
    },
    {
      key: "model_providers.<id>.http_headers",
      type: "map<string,string>",
      description: "Static HTTP headers added to provider requests.",
    },
    {
      key: "model_providers.<id>.env_http_headers",
      type: "map<string,string>",
      description:
        "HTTP headers populated from environment variables when present.",
    },
    {
      key: "model_providers.<id>.request_max_retries",
      type: "number",
      description:
        "Retry count for HTTP requests to the provider (default: 4).",
    },
    {
      key: "model_providers.<id>.stream_max_retries",
      type: "number",
      description: "Retry count for SSE streaming interruptions (default: 5).",
    },
    {
      key: "model_providers.<id>.stream_idle_timeout_ms",
      type: "number",
      description:
        "Idle timeout for SSE streams in milliseconds (default: 300000).",
    },
    {
      key: "model_providers.<id>.supports_websockets",
      type: "boolean",
      description:
        "Whether that provider supports the Responses API WebSocket transport.",
    },
    {
      key: "model_providers.<id>.supports_standalone_web_search",
      type: "boolean",
      description:
        "Advertise support for a compatible standalone web search endpoint (default: false). Standalone search remains under development and off by default; provider compatibility alone doesn't enable it.",
    },
    {
      key: "model_providers.<id>.auth",
      type: "table",
      description:
        "Command-backed bearer token configuration for a custom provider. Do not combine with `env_key`, `experimental_bearer_token`, or `requires_openai_auth`.",
    },
    {
      key: "model_providers.<id>.auth.command",
      type: "string",
      description:
        "Command to run when Codex needs a bearer token. The command must print the token to stdout.",
    },
    {
      key: "model_providers.<id>.auth.args",
      type: "array<string>",
      description: "Arguments passed to the token command.",
    },
    {
      key: "model_providers.<id>.auth.timeout_ms",
      type: "number",
      description:
        "Maximum token command runtime in milliseconds (default: 5000).",
    },
    {
      key: "model_providers.<id>.auth.refresh_interval_ms",
      type: "number",
      description:
        "How often Codex proactively refreshes the token in milliseconds (default: 300000). Set to `0` to refresh only after an authentication retry.",
    },
    {
      key: "model_providers.<id>.auth.cwd",
      type: "string (path)",
      description: "Working directory for the token command.",
    },
    {
      key: "model_providers.gcp.base_url",
      type: "string",
      description:
        "Override the built-in Google Cloud Vertex AI endpoint. Otherwise, Codex builds it from the project ID and location.",
    },
    {
      key: "model_providers.gcp.project_id",
      type: "string",
      description:
        "Google Cloud project ID for the Vertex AI endpoint. Takes precedence over `GOOGLE_CLOUD_PROJECT`.",
    },
    {
      key: "model_providers.gcp.location",
      type: "string",
      description:
        "Google Cloud location for the Vertex AI endpoint. Takes precedence over `GOOGLE_CLOUD_LOCATION`. Defaults to `global`.",
    },
    {
      key: "model_providers.gcp.credential_file",
      type: "string (absolute path)",
      description:
        "Path to a Google Application Default Credentials (ADC) file. Overrides `GOOGLE_APPLICATION_CREDENTIALS` only for the provider\u2019s authentication command.",
    },
    {
      key: "model_providers.amazon-bedrock.aws.profile",
      type: "string",
      description:
        "AWS profile name used by the built-in `amazon-bedrock` provider.",
    },
    {
      key: "model_providers.amazon-bedrock.aws.region",
      type: "string",
      description: "AWS region used by the built-in `amazon-bedrock` provider.",
    },
    {
      key: "model_reasoning_effort",
      type: "string",
      description:
        "Reasoning effort advertised by the selected model, such as `low`, `medium`, `high`, `xhigh`, `max`, or `ultra`. Available levels depend on the model and client.",
    },
    {
      key: "plan_mode_reasoning_effort",
      type: "string",
      description:
        "Plan-mode-specific reasoning override using a level supported by the selected model. When unset, Plan mode uses its built-in preset default.",
    },
    {
      key: "model_reasoning_summary",
      type: "auto | concise | detailed | none",
      description:
        "Select reasoning summary detail or disable summaries entirely.",
    },
    {
      key: "model_verbosity",
      type: "low | medium | high",
      description:
        "Optional GPT-5 Responses API verbosity override; when unset, the selected model/preset default is used.",
    },
    {
      key: "shell_environment_policy.inherit",
      type: "all | core | none",
      description:
        "Baseline environment inheritance when spawning subprocesses.",
    },
    {
      key: "shell_environment_policy.ignore_default_excludes",
      type: "boolean",
      description:
        "Keep variables containing KEY, SECRET, or TOKEN before other filters run (default: true). Set to false to apply automatic secret-name exclusions.",
    },
    {
      key: "shell_environment_policy.filters",
      type: "map<string, include | exclude>",
      description:
        "Canonical case-insensitive environment-variable pattern filters. Include entries create an allowlist and can't restore excluded values. Explicit `set` values apply after exclusions. Don't combine filters with legacy `exclude` or `include_only` arrays in the same layer.",
    },
    {
      key: "shell_environment_policy.exclude",
      type: "array<string>",
      description:
        "Legacy environment-variable exclusion patterns. Use `shell_environment_policy.filters` for new configuration; don't combine both forms in the same layer.",
    },
    {
      key: "shell_environment_policy.include_only",
      type: "array<string>",
      description:
        "Legacy allowlist of environment-variable patterns. Use `shell_environment_policy.filters` for new configuration; don't combine both forms in the same layer.",
    },
    {
      key: "shell_environment_policy.set",
      type: "map<string,string>",
      description:
        "Explicit environment values injected after exclusions; include filters can still remove them.",
    },
    {
      key: "shell_environment_policy.experimental_use_profile",
      type: "boolean",
      description: "Use the user shell profile when spawning subprocesses.",
    },
    {
      key: "project_root_markers",
      type: "array<string>",
      description:
        "List of project root marker filenames; used when searching parent directories for the project root.",
    },
    {
      key: "project_doc_max_bytes",
      type: "number",
      description:
        "Maximum bytes read from `AGENTS.md` when building project instructions.",
    },
    {
      key: "project_doc_fallback_filenames",
      type: "array<string>",
      description: "Additional filenames to try when `AGENTS.md` is missing.",
    },
    {
      key: "history.persistence",
      type: "save-all | none",
      description:
        "Control whether Codex saves session transcripts to history.jsonl.",
    },
    {
      key: "tool_output_token_limit",
      type: "number",
      description:
        "Token budget for storing individual tool/function outputs in history.",
    },
    {
      key: "thread_unload_delay_secs",
      type: "integer (nonnegative)",
      description:
        "Seconds the app server waits before unloading an inactive thread with no subscribers. Set to `0` to unload it as soon as it meets both conditions. Defaults to `60` seconds.",
    },
    {
      key: "background_terminal_max_timeout",
      type: "number",
      description:
        "Maximum poll window in milliseconds for empty `write_stdin` polls (background terminal polling). Default: `300000` (5 minutes). Replaces the older `background_terminal_timeout` key.",
    },
    {
      key: "history.max_bytes",
      type: "number",
      description:
        "If set, caps the history file size in bytes by dropping oldest entries.",
    },
    {
      key: "file_opener",
      type: "vscode | vscode-insiders | windsurf | cursor | none",
      description:
        "URI scheme used to open citations from Codex output (default: `vscode`).",
    },
    {
      key: "otel.environment",
      type: "string",
      description:
        "Environment tag applied to emitted OpenTelemetry events (default: `dev`).",
    },
    {
      key: "otel.exporter",
      type: "none | otlp-http | otlp-grpc",
      description:
        "Select the OpenTelemetry exporter and provide any endpoint metadata.",
    },
    {
      key: "otel.trace_exporter",
      type: "none | otlp-http | otlp-grpc",
      description:
        "Select the OpenTelemetry trace exporter and provide any endpoint metadata.",
    },
    {
      key: "otel.metrics_exporter",
      type: "none | statsig | otlp-http | otlp-grpc",
      description:
        "Select the OpenTelemetry metrics exporter. The default, `statsig`, follows `analytics.enabled`. Explicit OTLP exporters work independently of that setting. Set to `none` to disable metrics export.",
    },
    {
      key: "otel.log_user_prompt",
      type: "boolean",
      description:
        "Opt in to exporting raw user prompts with OpenTelemetry logs.",
    },
    {
      key: "otel.log_agent_responses",
      type: "boolean",
      description:
        "Export final response text from the main agent and spawned subagents to the configured OTLP log exporter. Defaults to `false`. Response text can contain sensitive data and is capped at 64 KiB per response.",
    },
    {
      key: "otel.log_guardian_assessments",
      type: "boolean",
      description:
        "Export completed automatic approval reviews to the configured OTLP log exporter. Defaults to `false`. Review rationales can contain sensitive data and are capped at 64 KiB each.",
    },
    {
      key: "otel.span_attributes",
      type: "map<string,string>",
      description: "Add string attributes to every exported trace span.",
    },
    {
      key: "otel.tracestate",
      type: "map<string,map<string,string>>",
      description:
        "Set fields on W3C tracestate members when propagating trace context. Each member maps field names to string values.",
    },
    {
      key: "otel.tool_result.max_bytes",
      type: "integer (nonnegative)",
      description:
        "Maximum number of UTF-8 bytes from each tool result to include in logs, before the truncation notice. Defaults to `2048`. This setting affects only logged output.",
    },
    {
      key: "otel.exporter.<id>.endpoint",
      type: "string",
      description: "Exporter endpoint for OTEL logs.",
    },
    {
      key: "otel.exporter.<id>.protocol",
      type: "binary | json",
      description: "Protocol used by the OTLP/HTTP exporter.",
    },
    {
      key: "otel.exporter.<id>.headers",
      type: "map<string,string>",
      description: "Static headers included with OTEL exporter requests.",
    },
    {
      key: "otel.trace_exporter.<id>.endpoint",
      type: "string",
      description: "Trace exporter endpoint for OTEL logs.",
    },
    {
      key: "otel.trace_exporter.<id>.protocol",
      type: "binary | json",
      description: "Protocol used by the OTLP/HTTP trace exporter.",
    },
    {
      key: "otel.trace_exporter.<id>.headers",
      type: "map<string,string>",
      description: "Static headers included with OTEL trace exporter requests.",
    },
    {
      key: "otel.exporter.<id>.tls.ca-certificate",
      type: "string",
      description: "CA certificate path for OTEL exporter TLS.",
    },
    {
      key: "otel.exporter.<id>.tls.client-certificate",
      type: "string",
      description: "Client certificate path for OTEL exporter TLS.",
    },
    {
      key: "otel.exporter.<id>.tls.client-private-key",
      type: "string",
      description: "Client private key path for OTEL exporter TLS.",
    },
    {
      key: "otel.trace_exporter.<id>.tls.ca-certificate",
      type: "string",
      description: "CA certificate path for OTEL trace exporter TLS.",
    },
    {
      key: "otel.trace_exporter.<id>.tls.client-certificate",
      type: "string",
      description: "Client certificate path for OTEL trace exporter TLS.",
    },
    {
      key: "otel.trace_exporter.<id>.tls.client-private-key",
      type: "string",
      description: "Client private key path for OTEL trace exporter TLS.",
    },
    {
      key: "desktop.custom_file_handlers.<id>",
      type: "table",
      description:
        "User-level only. Defines an additional **Open in** target for the ChatGPT desktop app. See [Add custom file handlers](https://learn.chatgpt.com/docs/config-file/config-advanced#add-custom-file-handlers) for examples and handler ID constraints.",
    },
    {
      key: "desktop.custom_file_handlers.<id>.label",
      type: "string",
      description: "Display name shown in **Open in** menus. Required.",
    },
    {
      key: "desktop.custom_file_handlers.<id>.icon",
      type: "string",
      description:
        "Bundled asset path, Base64-encoded `data:image/...` URL, file URI, or absolute local path for the handler icon. Required; unsupported sources use the default VS Code icon.",
    },
    {
      key: "desktop.custom_file_handlers.<id>.command",
      type: "string",
      description:
        "Executable path or command name to detect and launch. Required.",
    },
    {
      key: "desktop.custom_file_handlers.<id>.args",
      type: "array<string>",
      description:
        "Arguments inserted between the command and file input (default: `[]`).",
    },
    {
      key: "desktop.custom_file_handlers.<id>.input",
      type: "path | json_argument | json_stdin",
      description:
        "How the app sends file input to the handler (default: `path`).",
    },
    {
      key: "desktop.custom_file_handlers.<id>.supports_ssh",
      type: "boolean",
      description:
        "Offer the handler for files in SSH workspaces (default: `false`).",
    },
    {
      key: "tui",
      type: "table",
      description:
        "TUI-specific options such as enabling inline desktop notifications.",
    },
    {
      key: "tui.notifications",
      type: "boolean | array<string>",
      description:
        "Enable TUI notifications; optionally restrict to specific event types.",
    },
    {
      key: "tui.notification_method",
      type: "auto | osc9 | bel",
      description:
        "Notification method for terminal notifications (default: auto).",
    },
    {
      key: "tui.notification_condition",
      type: "unfocused | always",
      description:
        "Control whether TUI notifications fire only when the terminal is unfocused or regardless of focus. Defaults to `unfocused`.",
    },
    {
      key: "tui.animations",
      type: "boolean",
      description:
        "Enable terminal animations (welcome screen, shimmer, spinner) (default: true).",
    },
    {
      key: "tui.disable_paste_burst",
      type: "boolean",
      description:
        "Disable burst-paste detection in the TUI (default: false). Takes precedence over the legacy top-level `disable_paste_burst` setting.",
    },
    {
      key: "tui.alternate_screen",
      type: "auto | always | never",
      description:
        "Control alternate screen usage for the TUI (default: auto; auto skips it in Zellij to preserve scrollback).",
    },
    {
      key: "tui.resume_cwd",
      type: "current | session",
      description:
        "Working directory to use when resuming or forking a session. When unset, Codex asks you to choose if your current directory differs from the session's saved directory.",
    },
    {
      key: "tui.vim_mode_default",
      type: "boolean",
      description:
        "Start the composer in Vim normal mode instead of insert mode (default: false). You can still toggle it per session with `/vim`.",
    },
    {
      key: "tui.raw_output_mode",
      type: "boolean",
      description:
        "Start the TUI in raw scrollback mode for copy-friendly terminal selection (default: false). You can toggle it with `/raw` or the default `alt-r` key binding.",
    },
    {
      key: "tui.show_tooltips",
      type: "boolean",
      description:
        "Show onboarding tooltips in the TUI welcome screen (default: true).",
    },
    {
      key: "tui.auto_recap",
      type: "boolean",
      description:
        "Generate automatic conversation recaps while the terminal is unfocused (default: true). Set to `false` to disable automatic recaps; `/recap` remains available.",
    },
    {
      key: "tui.show_server_version_notice",
      type: "boolean",
      description:
        "Show informational notices about connected app-server version differences (default: true). Does not hide compatibility errors or version status.",
    },
    {
      key: "tui.status_line",
      type: "array<string> | null",
      description:
        "Ordered list of TUI footer status-line item identifiers. `null` disables the status line.",
    },
    {
      key: "tui.terminal_title",
      type: "array<string> | null",
      description:
        'Ordered list of terminal window/tab title item identifiers. Defaults to `["spinner", "project"]`; `null` disables title updates.',
    },
    {
      key: "tui.theme",
      type: "string",
      description:
        "Syntax-highlighting theme override (kebab-case theme name).",
    },
    {
      key: "tui.keymap.<context>.<action>",
      type: "string | array<string>",
      description:
        "Keyboard shortcut binding for a TUI action. Supported contexts include `global`, `chat`, `composer`, `editor`, `vim_normal`, `vim_operator`, `vim_text_object`, `pager`, `list`, and `approval`. Selected composer actions fall back to matching `tui.keymap.global` bindings; context-specific bindings take precedence when supported.",
    },
    {
      key: "tui.keymap.<context>.<action> = []",
      type: "empty array",
      description:
        "Unbind the action in that keymap context. Key names use normalized strings such as `ctrl-a`, `shift-enter`, `page-down`, or `minus`.",
    },
    {
      key: "marketplaces.<name>.source_type",
      type: "git | local",
      description:
        "Source kind for a configured plugin marketplace. Marketplaces can be defined in system, cloud-managed, user, or trusted-project config.toml.",
    },
    {
      key: "marketplaces.<name>.source",
      type: "string",
      description:
        "Git repository location or local marketplace root directory. Use an absolute path for a local source; the directory contains .agents/plugins/marketplace.json.",
    },
    {
      key: "marketplaces.<name>.ref",
      type: "string",
      description: "Optional Git branch, tag, or commit for the marketplace.",
    },
    {
      key: "marketplaces.<name>.sparse_paths",
      type: "array<string>",
      description:
        "Optional sparse checkout paths for a Git marketplace. Include the marketplace catalog and any local plugin directories it references.",
    },
    {
      key: "plugins._default.enabled",
      type: "boolean",
      description:
        "Set the default activation state for installed plugins. An explicit `plugins.<plugin>.enabled` overrides this default for plugins their source enables. Omit the table to keep the source or account activation settings.",
    },
    {
      key: "plugins.<plugin>.enabled",
      type: "boolean",
      description:
        "Enable or disable a local-marketplace plugin using a `plugin-name@marketplace-name` key. Read from the effective merged config; trusted-project settings can override user, cloud-managed, and system defaults. Marketplace refresh can install or refresh configured plugins even when disabled. This does not override workspace-managed enabled states.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.enabled",
      type: "boolean",
      description:
        "Enable or disable an MCP server bundled by an installed plugin without changing the plugin manifest.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.default_tools_approval_mode",
      type: "auto | prompt | writes | approve",
      description:
        "Default approval behavior for tools on a plugin-provided MCP server.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.enabled_tools",
      type: "array<string>",
      description:
        "Allow list of tools exposed from a plugin-provided MCP server.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.disabled_tools",
      type: "array<string>",
      description:
        "Deny list applied after `enabled_tools` for a plugin-provided MCP server.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.tools.<tool>.approval_mode",
      type: "auto | prompt | writes | approve",
      description:
        "Per-tool approval behavior override for a plugin-provided MCP tool.",
    },
    {
      key: "tui.presets.<digit>.input",
      type: "string",
      description:
        "Save a prompt or slash command in one of the ten slots (`0`–`9`) shown by `/presets`. Use up to 8,000 UTF-8 bytes of nonempty text. Shell commands beginning with `!` are unsupported.",
    },
    {
      key: "tui.presets.<digit>.label",
      type: "string",
      description:
        "Optional name for the preset in the picker and shortcut hints.",
    },
    {
      key: "tui.model_availability_nux.<model>",
      type: "integer",
      description: "Internal startup-tooltip state keyed by model slug.",
    },
    {
      key: "hide_agent_reasoning",
      type: "boolean",
      description:
        "Suppress reasoning events in both the TUI and `codex exec` output.",
    },
    {
      key: "show_raw_agent_reasoning",
      type: "boolean",
      description:
        "Surface raw reasoning content when the active model emits it.",
    },
    {
      key: "disable_paste_burst",
      type: "boolean",
      description:
        "Legacy fallback for `tui.disable_paste_burst`. Prefer the setting under `[tui]`.",
    },
    {
      key: "chatgpt_base_url",
      type: "string",
      description: "Override the base URL used during the ChatGPT login flow.",
    },
    {
      key: "cli_auth_credentials_store",
      type: "file | keyring | auto | ephemeral",
      description: "Control where the CLI stores cached credentials.",
    },
    {
      key: "mcp_oauth_credentials_store",
      type: "auto | file | keyring",
      description: "Preferred store for MCP OAuth credentials.",
    },
    {
      key: "mcp_oauth_callback_port",
      type: "integer",
      description:
        "Optional global fixed port for the local HTTP callback server used during MCP OAuth login. A server-specific `oauth.callback_port` takes precedence. When neither is set, Codex binds to an ephemeral port chosen by the OS.",
    },
    {
      key: "mcp_oauth_callback_url",
      type: "string",
      description:
        "Optional base callback URL for MCP OAuth login, such as a devbox ingress URL. Newly added pre-registered clients use this URL unchanged when the authorization server supports issuer identification; existing clients without a saved callback append a server-specific callback ID. Without issuer support, any pre-registered MCP server whose configured callback lacks the required ID falls back to this URL with the ID appended. Callback URL ports don't select the listener port.",
    },
    {
      key: "experimental_use_unified_exec_tool",
      type: "boolean",
      description:
        "Legacy name for enabling unified exec; prefer `[features].unified_exec` or `codex --enable unified_exec`.",
    },
    {
      key: "tools.web_search",
      type: 'boolean | { context_size = "low|medium|high", allowed_domains = [string], location = { country, region, city, timezone } }',
      description:
        "Optional web search tool configuration. The object form can set search context size, allowed search domains, and approximate user location. These search-domain filters are separate from sandboxed-command network domain rules and do not restrict connectors or MCP servers.",
    },
    {
      key: "web_search",
      type: "disabled | cached | indexed | live",
      description:
        'Web search mode (default: `"cached"`; cached uses an OpenAI-maintained index without external web access; indexed permits external access only when gated by the search index; if you use `--yolo` or another full access sandbox setting, it defaults to `"live"`). Use `"live"` for unrestricted live retrieval, or `"disabled"` to remove the tool.',
    },
    {
      key: "default_permissions",
      type: "string",
      description:
        "Name of the default permissions profile to apply to sandboxed tool calls. Built-ins are `:read-only`, `:workspace`, and `:danger-full-access`; custom profile names require matching `[permissions.<name>]` tables. Don't combine with `sandbox_mode` or `[sandbox_workspace_write]`.",
    },
    {
      key: "permissions.<name>.description",
      type: "string",
      description:
        "Human-readable description for this named profile. A profile does not inherit its parent's description through `extends`.",
    },
    {
      key: "permissions.<name>.extends",
      type: "string",
      description:
        "Optional parent profile applied before this named profile. Set it to another named profile, `:read-only`, or `:workspace`; `:danger-full-access`, undefined parents, and cycles are rejected.",
    },
    {
      key: "permissions.<name>.workspace_roots",
      type: "table",
      description:
        "Profile-defined workspace roots that receive `:workspace_roots` filesystem rules alongside the session's runtime workspace roots.",
    },
    {
      key: "permissions.<name>.workspace_roots.<path>",
      type: "boolean",
      description:
        "Opt a path into the profile's workspace root set when `true`. Disabled entries remain inactive.",
    },
    {
      key: "permissions.<name>.filesystem",
      type: "table",
      description:
        "Named filesystem permission profile. Each key is an absolute path or special token such as `:minimal` or `:workspace_roots`.",
    },
    {
      key: "permissions.<name>.filesystem.glob_scan_max_depth",
      type: "number",
      description:
        "Maximum depth for expanding deny-read glob patterns on platforms that snapshot matches before sandbox startup. Must be at least `1` when set.",
    },
    {
      key: "permissions.<name>.filesystem.<path-or-glob>",
      type: '"read" | "write" | "deny" | table',
      description:
        'Grant direct access for a path, glob pattern, or special token, or scope nested entries under that root. Use `"deny"` to deny reads for matching paths.',
    },
    {
      key: 'permissions.<name>.filesystem.":workspace_roots".<subpath-or-glob>',
      type: '"read" | "write" | "deny"',
      description:
        'Scoped filesystem access relative to each effective workspace root. Use `"."` for the root itself; glob subpaths such as `"**/*.env"` can deny reads with `"deny"`.',
    },
    {
      key: "permissions.<name>.network.enabled",
      type: "boolean",
      description:
        "Enable network access for commands in this permission profile. This does not start the network proxy. Without `features.network_proxy` or enabled administrator-managed networking requirements, command network access is direct and profile domain rules are not enforced.",
    },
    {
      key: "permissions.<name>.network.proxy_url",
      type: "string",
      description:
        "HTTP listener URL used when this permissions profile enables sandboxed networking.",
    },
    {
      key: "permissions.<name>.network.enable_socks5",
      type: "boolean",
      description:
        "Expose SOCKS5 support when this permissions profile enables sandboxed networking.",
    },
    {
      key: "permissions.<name>.network.socks_url",
      type: "string",
      description: "SOCKS5 proxy endpoint used by this permissions profile.",
    },
    {
      key: "permissions.<name>.network.enable_socks5_udp",
      type: "boolean",
      description: "Allow UDP over the SOCKS5 listener when enabled.",
    },
    {
      key: "permissions.<name>.network.allow_upstream_proxy",
      type: "boolean",
      description:
        "Allow sandboxed networking to chain through another upstream proxy.",
    },
    {
      key: "permissions.<name>.network.dangerously_allow_non_loopback_proxy",
      type: "boolean",
      description:
        "Permit non-loopback bind addresses for sandboxed networking listeners. Enabling it can expose listeners beyond localhost.",
    },
    {
      key: "permissions.<name>.network.dangerously_allow_all_unix_sockets",
      type: "boolean",
      description:
        "Allow arbitrary Unix socket destinations instead of the default restricted set. Use only in tightly controlled environments.",
    },
    {
      key: "permissions.<name>.network.mode",
      type: "limited | full",
      description: "Network proxy mode used for subprocess traffic.",
    },
    {
      key: "permissions.<name>.network.domains",
      type: "table",
      description:
        "Domain rules for sandboxed commands. Enforced only when `features.network_proxy` or enabled administrator-managed networking requirements activate the proxy. Supports exact hosts, `*.example.com`, `**.example.com`, and global `*` allow rules; `deny` wins. Does not restrict web search, apps, or MCP servers.",
    },
    {
      key: "permissions.<name>.network.domains.<pattern>",
      type: "allow | deny",
      description:
        "Allow or deny an exact host or scoped wildcard pattern such as `*.example.com` or `**.example.com`.",
    },
    {
      key: "permissions.<name>.network.unix_sockets",
      type: "table",
      description:
        "Unix socket allowlist overrides for sandboxed networking. Use socket paths as keys; `allow` adds a path, and `deny` rejects it.",
    },
    {
      key: "permissions.<name>.network.unix_sockets.<path>",
      type: "allow | deny",
      description:
        "Add an absolute Unix socket path to the effective allowlist with `allow`, or reject it with `deny`. Denied entries are omitted from the effective allowlist.",
    },
    {
      key: "permissions.<name>.network.allow_local_binding",
      type: "boolean",
      description:
        "Permit broader local/private-network access through sandboxed networking. Exact local IP literal or `localhost` allow rules can still permit specific local targets when this stays `false`.",
    },
    {
      key: "projects.<path>.trust_level",
      type: "string",
      description:
        'Mark a project or worktree as trusted or untrusted (`"trusted"` | `"untrusted"`). Untrusted projects skip project-scoped `.codex/` layers, including project-local config, hooks, and rules.',
    },
    {
      key: "notice.hide_full_access_warning",
      type: "boolean",
      description: "Track acknowledgement of the full access warning prompt.",
    },
    {
      key: "notice.hide_world_writable_warning",
      type: "boolean",
      description:
        "Track acknowledgement of the Windows world-writable directories warning.",
    },
    {
      key: "notice.hide_rate_limit_model_nudge",
      type: "boolean",
      description: "Track opt-out of the rate limit model switch reminder.",
    },
    {
      key: "notice.hide_gpt5_1_migration_prompt",
      type: "boolean",
      description: "Track acknowledgement of the GPT-5.1 migration prompt.",
    },
    {
      key: "notice.hide_gpt-5.1-codex-max_migration_prompt",
      type: "boolean",
      description:
        "Track acknowledgement of the gpt-5.1-codex-max migration prompt.",
    },
    {
      key: "notice.model_migrations",
      type: "map<string,string>",
      description: "Track acknowledged model migrations as old->new mappings.",
    },
    {
      key: "forced_login_method",
      type: "chatgpt | api",
      description: "Restrict Codex to a specific authentication method.",
    },
    {
      key: "forced_chatgpt_workspace_id",
      type: "string (uuid)",
      description: "Limit ChatGPT logins to a specific workspace identifier.",
    },
  ]}
  client:load
/>

You can find the latest JSON schema for `config.toml` [here](https://learn.chatgpt.com/docs/config-schema.json).

To get autocompletion and diagnostics when editing `config.toml` in VS Code or Cursor, you can install the [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) extension and add this line to the top of your `config.toml`:

```toml
#:schema https://developers.openai.com/codex/config-schema.json
```

Note: Rename `experimental_instructions_file` to `model_instructions_file`. Codex deprecates the old key; update existing configs to the new name.

## `requirements.toml`

`requirements.toml` is an admin-enforced configuration file that constrains security-sensitive settings users can't override. For details, locations, and examples, see [Admin-enforced requirements](https://learn.chatgpt.com/docs/enterprise/managed-configuration#admin-enforced-requirements-requirementstoml).

For ChatGPT Business and Enterprise users, Codex can also apply cloud-fetched
requirements. See the security page for precedence details. To serve CLI policy from your own HTTPS endpoint, see [Self-host Codex configuration for your team](https://learn.chatgpt.com/docs/enterprise/configuration-server).

Use `[features]` in `requirements.toml` to pin runtime feature flags by the same
canonical keys that `config.toml` uses. Requirements can also include documented
app-only keys that don't belong in `config.toml`. Omitted keys remain
unconstrained.

Some managed requirements enforce an exact configuration value instead of an
allowlist. Users can't override an enforced path, update preference, login-shell
policy, or feedback setting.

Managed permission-profile allowlists require Codex 0.138.0 or later. Codex
0.137.0 and earlier ignore `allowed_permission_profiles` and managed
`default_permissions`.

Use `allowed_sandbox_modes` with `sandbox_mode`. For permission-profile
deployments, use `allowed_permission_profiles` with managed
`default_permissions`.

An `untrusted` entry in `allowed_approval_policies` is still valid for the
stricter approval behavior Codex derives when a project uses
`trust_level = "untrusted"`. It does not permit explicitly setting
`approval_policy = "untrusted"`.

The `[models.new_thread]` table supplies managed defaults, not enforcement.
If you explicitly override the model or reasoning effort with `--model`,
`--config`, or `--profile`, Codex ignores both `model` and
`model_reasoning_effort` in `[models.new_thread]`. `service_tier` is independent.

The browser requirements cover three separate surfaces. `in_app_browser`
controls the browser pane that a person opens and uses directly. `browser_use`
controls agent-driven work in a browser. `computer_use` controls agent-driven
work in native desktop apps.

The nested Browser Use and Computer Use policy values do not grant access by
themselves. An origin- or app-specific `allow` can override the fallback for
the same policy source, but normal feature, approval, and other policy checks
still apply. Where managed requirements and `config.toml` both apply, a `deny`
from either one wins.

<ConfigTable
  options={[
    {
      key: "config_server",
      type: "table",
      description:
        "Enroll Codex with a configuration server. Set this in local administrator-controlled requirements.",
    },
    {
      key: "config_server.base_url",
      type: "string (HTTPS URL)",
      description:
        "Base URL of the configuration server enrolled by the administrator. Codex appends /codex/config/bundle to this URL.",
    },
    {
      key: "config_server.oauth",
      type: "table",
      description:
        "Optional company sign-in settings. Omit this table to fetch the bundle without credentials.",
    },
    {
      key: "config_server.oauth.authorization_url",
      type: "string (HTTPS URL)",
      description:
        "Authorization endpoint for company browser sign-in. Required when OAuth is configured.",
    },
    {
      key: "config_server.oauth.token_url",
      type: "string (HTTPS URL)",
      description:
        "Token endpoint for company sign-in and refresh. Required when OAuth is configured.",
    },
    {
      key: "config_server.oauth.client_id",
      type: "string",
      description:
        "Public OAuth client ID registered for Codex. Required when OAuth is configured.",
    },
    {
      key: "config_server.oauth.scopes",
      type: "array<string>",
      description:
        "Optional OAuth permissions to request from the identity provider.",
    },
    {
      key: "config_server.oauth.resource",
      type: "string",
      description:
        "Optional OAuth resource identifier required by the identity provider.",
    },
    {
      key: "config_server.oauth.redirect_port",
      type: "number",
      description:
        "Optional port for the browser callback on 127.0.0.1. By default, Codex chooses an available port.",
    },
    {
      key: "sqlite_home",
      type: "string (path)",
      description:
        "Enforce the directory where Codex stores SQLite-backed runtime state.",
    },
    {
      key: "unsafe_enforce_sqlite_journal_mode",
      type: "boolean",
      description:
        "On Linux, set to `true` to migrate existing SQLite databases on NFS from WAL to DELETE journaling before opening them for writes. Defaults to `false`. The mount must support POSIX locks across hosts. Keep every other SQLite client that uses the databases stopped on every host until migration succeeds. Replacements preserve file mode bits but belong to the user running the migration and do not copy the original owner, group, or extended ACLs.",
    },
    {
      key: "log_dir",
      type: "string (path)",
      description: "Enforce the directory where Codex writes local log files.",
    },
    {
      key: "model_catalog_json",
      type: "string (path)",
      description: "Enforce the JSON model catalog Codex uses at startup.",
    },
    {
      key: "check_for_update_on_startup",
      type: "boolean",
      description: "Enforce whether Codex checks for updates when it starts.",
    },
    {
      key: "allow_login_shell",
      type: "boolean",
      description: "Enforce whether shell tools can start a login shell.",
    },
    {
      key: "config_server",
      type: "table",
      description:
        "Enroll Codex with a configuration server through local managed requirements. Codex retrieves its policy bundle from this server. A cloud policy cannot configure its own server.",
    },
    {
      key: "config_server.base_url",
      type: "string",
      description:
        "Required HTTPS base URL. Codex appends `/codex/config/bundle`. Omit credentials, query parameters, and fragments from the base URL.",
    },
    {
      key: "config_server.oauth",
      type: "table",
      description:
        "OAuth settings for configuration server sign-in. Requires `authorization_url`, `token_url`, and a nonempty `client_id`. Optional fields are `device_authorization_url`, `resource`, `scopes` (defaults to an empty list), and `redirect_port` (nonzero). All endpoint URLs must use HTTPS.",
    },
    {
      key: "allowed_login_methods",
      type: "array<string>",
      description:
        "Allow `chatgpt`, `api`, or both. If omitted, this setting doesn't restrict login methods. If set, the list must contain at least one method. `api` permits API authentication, including Amazon Bedrock. Set through the local system requirements file or macOS MDM. Cloud-managed values are ignored.",
    },
    {
      key: "allowed_chatgpt_workspaces",
      type: "array<string>",
      description:
        "Restrict ChatGPT login, including Codex access tokens, to the listed workspace IDs. An empty list disables ChatGPT login; API authentication remains available when permitted. Set through the local system requirements file or macOS MDM; cloud-managed values are ignored.",
    },
    {
      key: "cli_auth_credentials_store",
      type: "file | keyring | auto | ephemeral",
      description:
        "Enforce the CLI credential store before authentication loads. `file` uses `CODEX_HOME/auth.json`; `keyring` requires the OS credential store; `auto` falls back to a file if the credential store is unavailable; `ephemeral` keeps credentials in memory for the current process. Set through the local system requirements file or macOS MDM; cloud-managed values are ignored.",
    },
    {
      key: "chatgpt_base_url",
      type: "string",
      description:
        "Enforce the ChatGPT service base URL before authentication and cloud-policy retrieval. This doesn't configure every Codex network destination. Set through the local system requirements file or macOS MDM; cloud-managed values are ignored.",
    },
    {
      key: "feedback",
      type: "table",
      description: "Managed feedback settings.",
    },
    {
      key: "feedback.enabled",
      type: "boolean",
      description:
        "Enforce whether users can submit feedback across Codex clients.",
    },
    {
      key: "allowed_approval_policies",
      type: "array<string>",
      description:
        "Allowed approval policies, such as `on-request`, `never`, and `granular`. Include `untrusted` to permit the stricter policy derived from an untrusted project; it cannot be selected directly with `approval_policy`.",
    },
    {
      key: "allowed_approvals_reviewers",
      type: "array<string>",
      description:
        "Allowed values for `approvals_reviewer`, such as `user` and `auto_review`.",
    },
    {
      key: "guardian_policy_config",
      type: "string",
      description:
        "Managed Markdown text that replaces the default Auto-review policy. This takes precedence over local `[auto_review].policy`. Blank values are ignored.",
    },
    {
      key: "guardian_extra_policy",
      type: "string",
      description:
        "Managed Markdown rules that Auto-review applies alongside the active policy. This takes precedence over local `[auto_review].extra_policy`. Blank values are ignored.",
    },
    {
      key: "additional_developer_instructions",
      type: "string",
      description:
        "Managed developer instructions added as a separate developer message. Codex rejects instructions that exceed a limit of 10,000 estimated tokens, including context markers.",
    },
    {
      key: "auto_review",
      type: "table",
      description: "Managed automatic-review requirements.",
    },
    {
      key: "auto_review.required_on_models",
      type: "array<string>",
      description:
        "Model slugs that must use automatic review. Slugs must be non-empty, omit provider namespaces, and have no surrounding whitespace. Lists from multiple requirements sources are combined.",
    },
    {
      key: "auto_review.ignore_rules",
      type: "array<string>",
      description:
        "Full model slugs for which Codex ignores `allow` prefix rules in command execution policy. Match the slug exactly, including its provider namespace when present; unlike `required_on_models`, this does not accept a namespace-free alias. Deny and network rules still apply.",
    },
    {
      key: "allowed_permission_profiles",
      type: "table<boolean>",
      description:
        "Complete list of allowed permission profiles. Profiles set to `true` are allowed. Profiles that are omitted or set to `false` are denied, including profiles added in future versions. When requirements sources are combined, entries are matched by profile name.",
    },
    {
      key: "allowed_permission_profiles.<name>",
      type: "boolean",
      description:
        "Allow or deny a built-in or custom permission profile defined in a loaded config or requirements source. A later, higher-precedence requirements source can use `false` to turn off a profile allowed by an earlier, lower-precedence source.",
    },
    {
      key: "default_permissions",
      type: "string",
      description:
        "Managed default permission profile. The profile must be allowed by `allowed_permission_profiles`. Set this explicitly for predictable behavior; if omitted, Codex defaults to `:workspace` only when both `:workspace` and `:read-only` are explicitly allowed.",
    },
    {
      key: "enforce_residency",
      type: "string",
      description:
        "Require Codex service traffic to use a supported data residency. Currently accepts `us`.",
    },
    {
      key: "model_provider",
      type: "string",
      description:
        "Enforce the model provider ID, overriding local and session configuration.",
    },
    {
      key: "model_providers",
      type: "map<string, table>",
      description:
        "Managed model provider definitions. Each entry replaces the complete configured provider with the same ID; fields aren't merged with the user's definition. Providers with other IDs remain available.",
    },
    {
      key: "model_providers.<id>",
      type: "table",
      description:
        "Complete managed provider definition. Uses the same provider fields as `config.toml`, including `name`, `base_url`, authentication, and transport settings.",
    },
    {
      key: "models",
      type: "table",
      description: "Contains the `[models.new_thread]` table.",
    },
    {
      key: "models.new_thread",
      type: "table",
      description:
        "Optional defaults to apply when a new local thread starts. They take priority over user and project defaults, but can be superseded by explicit overrides.",
    },
    {
      key: "models.new_thread.model",
      type: "string",
      description:
        "Default model for new threads. An explicit override of either the model or reasoning effort causes both fields to be ignored.",
    },
    {
      key: "models.new_thread.model_reasoning_effort",
      type: "string",
      description:
        "Default reasoning effort for new threads. An explicit override of either the model or reasoning effort causes both fields to be ignored.",
    },
    {
      key: "models.new_thread.service_tier",
      type: "string",
      description:
        "Default service tier for new threads. An explicit service-tier override causes this field to be ignored.",
    },
    {
      key: "permissions",
      type: "table",
      description:
        "Admin-defined permission profiles keyed by profile name. Uses the same profile fields as `config.toml`.",
    },
    {
      key: "permissions.<name>",
      type: "table",
      description:
        "Admin-defined permission profile. The name can't start with `:`, use the reserved name `filesystem`, or duplicate a profile from a loaded config. Uses the same profile fields as `config.toml`; see the Permissions guide for the complete profile schema.",
    },
    {
      key: "allowed_sandbox_modes",
      type: "array<string>",
      description: "Allowed values for `sandbox_mode`.",
    },
    {
      key: "windows",
      type: "table",
      description: "Native Windows sandbox requirements.",
    },
    {
      key: "windows.allowed_sandbox_implementations",
      type: "array<string>",
      description:
        "Allowed legacy native Windows sandbox implementations (`elevated` and `unelevated`). The list must not be empty. When both are allowed and no mode is selected, Codex prefers `elevated`. This list does not restrict the `mxc` sandbox when it is available.",
    },
    {
      key: "windows.allow_mxc",
      type: "boolean",
      description:
        "Set to `false` to prohibit both explicit MXC selection and automatic selection through `features.prefer_mxc`. Omitting this requirement or setting it to `true` permits MXC but doesn't enable it or require it. Legacy implementation restrictions still apply to fallback.",
    },
    {
      key: "windows.require_mxc",
      type: "boolean",
      description:
        "On Windows, set to `true` to reject any effective sandbox implementation other than MXC. Select MXC separately. If Codex cannot use it, configuration fails instead of falling back to a legacy sandbox.",
    },
    {
      key: "remote_sandbox_config",
      type: "array<table>",
      description:
        "Host-specific sandbox requirements. The first entry whose `hostname_patterns` match the resolved host name overrides top-level `allowed_sandbox_modes` for that requirements source. Host-specific entries currently override sandbox modes only.",
    },
    {
      key: "remote_sandbox_config[].hostname_patterns",
      type: "array<string>",
      description:
        "Case-insensitive host name patterns. Supports `*` for any sequence of characters and `?` for one character.",
    },
    {
      key: "remote_sandbox_config[].allowed_sandbox_modes",
      type: "array<string>",
      description:
        "Allowed sandbox modes to apply when this host-specific entry matches.",
    },
    {
      key: "allowed_web_search_modes",
      type: "array<string>",
      description:
        "Allowed values for `web_search` (`disabled`, `cached`, `indexed`, `live`). `disabled` is always allowed; an empty list effectively allows only `disabled`.",
    },
    {
      key: "allow_managed_hooks_only",
      type: "boolean",
      description:
        "When `true`, Codex skips user, project, session, and plugin hooks while still allowing managed hooks from `requirements.toml` and other managed config layers.",
    },
    {
      key: "allow_appshots",
      type: "boolean",
      description:
        "Set to `false` to disable Appshots for managed users. If omitted, Appshots remain unconstrained by requirements and follow normal product availability.",
    },
    {
      key: "allow_remote_control",
      type: "boolean",
      description:
        "Set to `false` to disable device remote control for managed users. If omitted, device remote control remains unconstrained by requirements and follows normal product availability.",
    },
    {
      key: "allow_browser_and_computer_use",
      type: "boolean",
      description:
        "Set to `false` to block both agent-driven Browser Use and native-app Computer Use. Setting it to `true` or omitting it does not enable either feature; the remaining feature, policy, and approval checks still apply.",
    },
    {
      key: "features.plugin_sharing",
      type: "boolean",
      description:
        "Set to `false` in cloud-managed `requirements.toml` to disable workspace sharing for locally built plugins.",
    },
    {
      key: "features",
      type: "table",
      description:
        "Pinned feature values. Use canonical names from `config.toml` for runtime features; documented app-only requirement keys are also supported here.",
    },
    {
      key: "features.<name>",
      type: "boolean",
      description:
        "Require a documented runtime or app feature to stay enabled or disabled.",
    },
    {
      key: "features.apps",
      type: "boolean",
      description:
        "Pin Apps integration availability on or off for managed users.",
    },
    {
      key: "features.api_key_cyber_access_programs",
      type: "boolean",
      description:
        "Allow Codex to send an explicitly selected cyber access program with requests to the built-in OpenAI provider when using API key authentication. The account and model must already have access to the program.",
    },
    {
      key: "features.in_app_updates",
      type: "boolean",
      description:
        "Set to `false` in `requirements.toml` to disable in-app updates. Updates remain enabled by default when this requirement is omitted.",
    },
    {
      key: "features.in_app_browser",
      type: "boolean",
      description:
        "Set to `false` in `requirements.toml` to disable the built-in browser pane that users open and control directly.",
    },
    {
      key: "features.browser_annotation_api",
      type: "boolean",
      description:
        "Set to `false` to block website-provided annotation customizations in the built-in browser. Users can still annotate pages themselves. Set to `true` to allow customizations when the app and account support them.",
    },
    {
      key: "features.in_app_chat",
      type: "boolean",
      description:
        "Set to `false` to hide ChatGPT and ChatGPT Work conversation screens and related cloud automation UI in the ChatGPT desktop app. This setting does not block ChatGPT Voice or stop existing cloud tasks. Setting it to `true` does not bypass account, workspace-permission, or rollout checks.",
    },
    {
      key: "features.in_app_dictation",
      type: "boolean",
      description:
        "Set to `false` to disable in-app dictation in the desktop app. Setting it to `true` does not bypass other availability checks.",
    },
    {
      key: "features.in_app_voice",
      type: "boolean",
      description:
        "Set to `false` to disable real-time Codex voice in the desktop app. Use `features.in_app_dictation` to manage dictation separately.",
    },
    {
      key: "features.in_app_local_automation",
      type: "boolean",
      description:
        "Set to `false` to disable local scheduled tasks in the desktop app. Setting it to `true` does not bypass other availability checks.",
    },
    {
      key: "features.browser_use",
      type: "boolean",
      description:
        "Set to `false` in `requirements.toml` to disable agent-driven Browser Use.",
    },
    {
      key: "features.browser_use_external",
      type: "boolean",
      description:
        "Set to `false` in `requirements.toml` to prevent Codex from operating supported browsers through the ChatGPT browser extension, including existing tabs and signed-in sessions.",
    },
    {
      key: "features.browser_use_full_cdp_access",
      type: "boolean",
      description:
        "Set to `false` in `requirements.toml` to disable full Chrome DevTools Protocol access in the local runtime, including Browser Developer mode, and prevent the ChatGPT desktop app from enabling the corresponding setting. If omitted, normal product availability applies.",
    },
    {
      key: "features.fast_mode",
      type: "boolean",
      description:
        "Allow or block Fast mode for managed users. Older app servers also use this setting to control Ultrafast mode.",
    },
    {
      key: "features.ultrafast_mode",
      type: "boolean",
      description:
        "Allow or block Ultrafast mode for managed users. On app servers that support independent speed settings, this applies even when Fast mode is disabled. Availability depends on the model and account.",
    },
    {
      key: "features.standalone_web_search",
      type: "boolean",
      description:
        "Experimental. Set to `true` to keep the desktop app's native web search configuration when hosted search through MCP would otherwise be available.",
    },
    {
      key: "features.guardian_approval",
      type: "boolean",
      description:
        "Pin Guardian approval availability on or off for managed users.",
    },
    {
      key: "features.memories",
      type: "boolean",
      description: "Pin Memories availability on or off for managed users.",
    },
    {
      key: "features.multi_agent",
      type: "boolean",
      description: "Pin multi-agent availability on or off for managed users.",
    },
    {
      key: "features.plugins",
      type: "boolean",
      description: "Pin plugin availability on or off for managed users.",
    },
    {
      key: "features.remote_plugin",
      type: "boolean",
      description:
        "Pin remote plugin catalog availability on or off for managed users.",
    },
    {
      key: "features.realtime_conversation",
      type: "boolean",
      description:
        "Set to `false` to disable the experimental `/voice` command in the Codex CLI. Do not rely on this setting to block [ChatGPT Voice](https://learn.chatgpt.com/docs/features/voice) in the desktop app or app-server voice sessions. Setting it to `true` does not bypass client or rollout checks.",
    },
    {
      key: "features.computer_use",
      type: "boolean",
      description:
        "Set to `false` in `requirements.toml` to disable Computer Use, Record & Replay, and related install or enablement flows.",
    },
    {
      key: "features.workspace_dependencies",
      type: "boolean",
      description:
        "Pin bundled workspace-dependency runtime availability on or off for managed users.",
    },
    {
      key: "in_app_browser",
      type: "table",
      description:
        "Requirements for the built-in browser pane. These settings do not control agent-driven Browser Use.",
    },
    {
      key: "in_app_browser.allow_external_browser_settings_import",
      type: "boolean",
      description:
        "Set to `false` to prevent users from importing settings or browsing data from an external browser into the built-in browser. Setting it to `true` or omitting it leaves the import available when other product checks allow it. This is a managed-only setting with no `config.toml` override.",
    },
    {
      key: "browser_use",
      type: "table",
      description: "Managed requirements for agent-driven Browser Use.",
    },
    {
      key: "browser_use.extension",
      type: "table",
      description:
        "Managed settings for Browser Use in supported Chromium browser extensions.",
    },
    {
      key: "browser_use.extension.request_headers",
      type: "array<table>",
      description:
        "Add up to 16 HTTP headers to requests from agent-controlled tabs in supported Chromium extensions. Use an empty list to send no managed headers.",
    },
    {
      key: "browser_use.extension.request_headers[].name",
      type: "string",
      description:
        "Header name. Reserved names, including `Authorization` and `Cookie`, are prohibited. Names and values support `{{session_id}}` as their only substitution.",
    },
    {
      key: "browser_use.extension.request_headers[].value",
      type: "string",
      description: "Header value to send with matching browser requests.",
    },
    {
      key: "browser_use.allow_webmcp",
      type: "boolean",
      description:
        "Allow site tools (WebMCP) through workspace policy on eligible managed plans. Both `true` and an unset value allow access through this policy. Setting `false` turns off this path. Users can still have access through their account rollout. Browser settings and site permissions apply.",
    },
    {
      key: "browser_use.allow_history_access",
      type: "boolean",
      description:
        "Set to `false` to prevent Browser Use from reading browser history. Setting it to `true` or omitting it leaves normal history settings and availability checks in place.",
    },
    {
      key: "browser_use.disable_auto_review",
      type: "boolean",
      description:
        "Set to `true` to skip automatic review for Browser Use and ask the user for approval instead. Setting it to `false` or omitting it leaves automatic review available when other settings allow it.",
    },
    {
      key: "browser_use.allow_global_persistent_approval",
      type: "boolean",
      description:
        "Set to `false` to prevent Browser Use from creating or honoring `Always allow` approvals that cover every site, such as allowing downloads from any site. Existing saved approvals are ignored, not deleted. Setting it to `true` or omitting it does not create an approval.",
    },
    {
      key: "browser_use.default_origin_policy",
      type: "table",
      description:
        "Fallback for each Browser Use setting when no matching entry under `browser_use.origins` defines it. A matching origin rule replaces the fallback for that source. Codex then applies the stricter result from managed requirements and user configuration.",
    },
    {
      key: "browser_use.default_origin_policy.access",
      type: "allow | deny",
      description:
        "Use `deny` to block Browser Use on origins that use the fallback. A denied origin also blocks uploads, downloads, full browser debugging access, and automatic review there. `allow` only lets normal approval and policy checks continue.",
    },
    {
      key: "browser_use.default_origin_policy.downloads",
      type: "allow | deny",
      description:
        "Use `deny` to block Browser Use downloads on origins that use the fallback. `allow` only lets normal approval and policy checks continue.",
    },
    {
      key: "browser_use.default_origin_policy.uploads",
      type: "allow | deny",
      description:
        "Use `deny` to block Browser Use uploads on origins that use the fallback. `allow` only lets normal approval and policy checks continue.",
    },
    {
      key: "browser_use.default_origin_policy.full_cdp_access",
      type: "allow | deny",
      description:
        "Use `deny` to block full Chrome DevTools Protocol (CDP) access on origins that use the fallback. `allow` only lets normal opt-in and approval checks continue.",
    },
    {
      key: "browser_use.default_origin_policy.auto_review",
      type: "allow | deny",
      description:
        "Use `deny` to skip automatic review on origins that use the fallback and ask the user for approval instead. `allow` leaves automatic review available when other settings allow it.",
    },
    {
      key: "browser_use.default_origin_policy.persistent_approval",
      type: "boolean",
      description:
        "Set to `false` to prevent Browser Use from saving or honoring an `Always allow` approval on origins that use the fallback. Approvals for the current turn or thread can still apply. `true` makes `Always allow` available when otherwise permitted but does not create an approval.",
    },
    {
      key: "browser_use.default_origin_policy.access_approval_lifetime",
      type: "turn | thread",
      description:
        "Set how long a non-persistent site-access approval lasts: `turn` limits it to the current turn, and `thread` keeps it for the rest of the current thread. `persistent_approval` separately controls whether `Always allow` is available. The product default is `thread`.",
    },
    {
      key: "browser_use.origins",
      type: "map<string, table>",
      description:
        'Origin-specific Browser Use policies. Keys use `<scheme>://<host-pattern>[:<port>]` with `http` or `https`. Use an exact host, `*.example.com` for subdomains only, or `**.example.com` for the base domain and its subdomains. Other `*` wildcards can span dots, so `region*.example.com` also matches `region.api.example.com`; a host of `*` matches every host for that scheme. Schemes and nondefault ports are significant; explicit default ports are normalized away. Paths, queries, embedded usernames or passwords, and wildcard schemes or ports are invalid. Quote the pattern in TOML, for example `[browser_use.origins."https://**.example.com"]`.',
    },
    {
      key: "browser_use.origins.<pattern>",
      type: "table",
      description:
        "Policy for origins matching this pattern. If several patterns match, Codex uses the most restrictive value for each capability: `deny` over `allow`, `false` over `true`, and `turn` over `thread`.",
    },
    {
      key: "browser_use.origins.<pattern>.access",
      type: "allow | deny",
      description:
        "Use `deny` to block Browser Use on matching origins. Denial also blocks uploads, downloads, full browser debugging access, and automatic review there. `allow` only lets normal approval and policy checks continue.",
    },
    {
      key: "browser_use.origins.<pattern>.downloads",
      type: "allow | deny",
      description:
        "Use `deny` to block Browser Use downloads on matching origins. `allow` only lets normal approval and policy checks continue.",
    },
    {
      key: "browser_use.origins.<pattern>.uploads",
      type: "allow | deny",
      description:
        "Use `deny` to block Browser Use uploads on matching origins. `allow` only lets normal approval and policy checks continue.",
    },
    {
      key: "browser_use.origins.<pattern>.full_cdp_access",
      type: "allow | deny",
      description:
        "Use `deny` to block full Chrome DevTools Protocol (CDP) access on matching origins. `allow` only lets normal opt-in and approval checks continue.",
    },
    {
      key: "browser_use.origins.<pattern>.auto_review",
      type: "allow | deny",
      description:
        "Use `deny` to skip automatic review on matching origins and ask the user for approval instead. `allow` leaves automatic review available when other settings allow it.",
    },
    {
      key: "browser_use.origins.<pattern>.persistent_approval",
      type: "boolean",
      description:
        "Set to `false` to prevent Browser Use from saving or honoring an `Always allow` approval on matching origins. Approvals for the current turn or thread can still apply. `true` makes `Always allow` available when otherwise permitted but does not create an approval.",
    },
    {
      key: "browser_use.origins.<pattern>.access_approval_lifetime",
      type: "turn | thread",
      description:
        "Set how long a non-persistent site-access approval for matching origins lasts: `turn` limits it to the current turn, and `thread` keeps it for the rest of the current thread. `persistent_approval` separately controls whether `Always allow` is available.",
    },
    {
      key: "computer_use",
      type: "table",
      description:
        "Managed requirements for agent-driven work in native desktop apps. Managed app rules and `config.toml` app rules are both enforced; an app must be allowed by each policy source.",
    },
    {
      key: "computer_use.allow_locked_computer_use",
      type: "boolean",
      description:
        "Set to `false` to prevent users from enabling Locked Use on a managed macOS device. This requirement removes the enablement controls; it does not turn off Locked Use if it is already enabled. If omitted, normal product availability applies.",
    },
    {
      key: "computer_use.allow_persistent_approval",
      type: "boolean",
      description:
        "Set to `false` to remove the option to save app approvals across sessions. Approvals for the current session remain available. Setting it to `true` or omitting it does not approve an app.",
    },
    {
      key: "computer_use.default_app_access",
      type: "allow | deny",
      description:
        "Fallback access for native apps that do not match a platform-specific rule. `deny` blocks access. `allow` only lets normal approval and policy checks continue. The product default is `allow`.",
    },
    {
      key: "computer_use.macos",
      type: "table",
      description: "Computer Use app rules for macOS.",
    },
    {
      key: "computer_use.macos.bundle_ids",
      type: "map<string, allow | deny>",
      description:
        "Map exact macOS bundle identifiers to `allow` or `deny`. A matching rule replaces `computer_use.default_app_access` within the same policy source. A deny from either managed requirements or user configuration still blocks access.",
    },
    {
      key: "computer_use.macos.bundle_ids.<bundle-id>",
      type: "allow | deny",
      description:
        "Use `deny` to block the exact bundle identifier. `allow` overrides only this policy source's default and still requires any other policy source and the normal approval flow to allow the app.",
    },
    {
      key: "computer_use.windows",
      type: "table",
      description:
        "Computer Use app rules for packaged and unpackaged Windows apps.",
    },
    {
      key: "computer_use.windows.aumids",
      type: "map<string, allow | deny>",
      description:
        "Map exact, registered Application User Model IDs (AUMIDs) for signed packaged apps to `allow` or `deny`. A matching rule replaces `computer_use.default_app_access` within the same policy source.",
    },
    {
      key: "computer_use.windows.aumids.<aumid>",
      type: "allow | deny",
      description:
        "Use `deny` to block the exact packaged-app identity. `allow` overrides only this policy source's default and still requires any other policy source and the normal approval flow to allow the app.",
    },
    {
      key: "computer_use.windows.exes",
      type: "array<table>",
      description:
        "Rules for signed, unpackaged Windows executables. Rules match the executable's verified publisher and signed version information, not its path or current file name. A matching deny takes precedence over matching allows. Unsigned executables use `computer_use.default_app_access`; executables whose signed identity cannot be verified unambiguously are blocked.",
    },
    {
      key: "computer_use.windows.exes[].publisher_name",
      type: "string",
      description:
        "Required exact publisher name from the executable's trusted signing certificate, formatted as a Windows X.500 distinguished name.",
    },
    {
      key: "computer_use.windows.exes[].product_name",
      type: "string",
      description:
        "Required exact `ProductName` from the executable's signed version information.",
    },
    {
      key: "computer_use.windows.exes[].binary_name",
      type: "string",
      description:
        "Optional `OriginalFilename` from the executable's signed version information. Matching is case-insensitive. If a matching publisher and product rule requires this value but the executable does not provide it, Computer Use blocks the executable.",
    },
    {
      key: "computer_use.windows.exes[].access",
      type: "allow | deny",
      description:
        "Required access decision for matching executables. `deny` blocks access. `allow` overrides only this policy source's default and still requires any other policy source and the normal approval flow to allow the app.",
    },
    {
      key: "application",
      type: "table",
      description: "Managed desktop application requirements.",
    },
    {
      key: "application.storage",
      type: "table",
      description:
        "Pin storage locations for newly created work on desktop builds that support managed storage. Each path independently overrides the local preference. Storage settings do not restrict filesystem access.",
    },
    {
      key: "application.storage.default_project_parent",
      type: "string (absolute path)",
      description:
        "Parent directory for new local projects created with Start from scratch.",
    },
    {
      key: "application.storage.projectless_workspace_root",
      type: "string (absolute path)",
      description: "Root directory for new chats created without a project.",
    },
    {
      key: "application.network",
      type: "table",
      description:
        "Destination restrictions for desktop app network requests, separate from command networking and browser origin rules. This doesn't impose destination restrictions on native modules or spawned processes.",
    },
    {
      key: "application.network.enabled",
      type: "boolean",
      description:
        "Defaults to true when the table is present. When true, external desktop app requests require an explicitly allowed domain. An empty domain map allows no external destinations. An absent application network policy or false value doesn't restrict destinations through this policy.",
    },
    {
      key: "application.network.domains",
      type: "table<allow | deny>",
      description:
        "Exact domain rules for desktop app requests. Enabled policies allow HTTPS and WSS requests only to explicitly allowed domains; subdomains aren't implicitly allowed.",
    },
    {
      key: "application.network.domains.<domain>",
      type: "allow | deny",
      description:
        "Allow or deny an exact domain. Use domain names without URL schemes, ports, or wildcards.",
    },
    {
      key: "otel",
      type: "table",
      description:
        "Enforce the specified OpenTelemetry settings. Each exporter replaces the entire corresponding exporter definition. Span attributes and tracestate fields override only matching entries.",
    },
    {
      key: "otel.environment",
      type: "string",
      description: "Enforce the environment label on telemetry.",
    },
    {
      key: "otel.exporter",
      type: "none | otlp-http | otlp-grpc",
      description:
        "Enforce the log exporter, including its endpoint, headers, and TLS settings.",
    },
    {
      key: "otel.trace_exporter",
      type: "none | otlp-http | otlp-grpc",
      description:
        "Enforce the trace exporter, including its endpoint, headers, and TLS settings.",
    },
    {
      key: "otel.metrics_exporter",
      type: "none | statsig | otlp-http | otlp-grpc",
      description:
        "Enforce the metrics exporter. The Statsig exporter follows `analytics.enabled`. Explicit OTLP metrics exporters run independently of that setting.",
    },
    {
      key: "otel.log_user_prompt",
      type: "boolean",
      description: "Control whether exported logs include user prompt text.",
    },
    {
      key: "otel.log_agent_responses",
      type: "boolean",
      description:
        "Control whether OTLP logs include final response text from the main agent and spawned subagents.",
    },
    {
      key: "otel.log_guardian_assessments",
      type: "boolean",
      description:
        "Control whether OTLP logs include completed automatic approval assessments and their rationales.",
    },
    {
      key: "otel.tool_result",
      type: "table",
      description:
        "Enforce the tool-result log settings as a unit. An empty table enforces the default byte limit.",
    },
    {
      key: "otel.tool_result.max_bytes",
      type: "integer (nonnegative)",
      description:
        "Maximum UTF-8 bytes of tool-result text before the truncation notice in logs. Defaults to `2048` when the managed table is present.",
    },
    {
      key: "otel.span_attributes",
      type: "map<string,string>",
      description:
        "Enforce individual string attributes on exported spans. Higher-priority requirements win for the same attribute.",
    },
    {
      key: "otel.tracestate",
      type: "map<string,map<string,string>>",
      description:
        "Enforce individual fields within W3C tracestate members. Higher-priority requirements win for the same member and field.",
    },
    {
      key: "network_proxy",
      type: "table",
      description:
        "Administrator-managed network requirements for sandboxed local commands. Codex 0.166.0 accepts `[network_proxy]` and its alias `[experimental_network]`. Use one name per requirements layer. Keep the alias in published policies until every client and policy validator supports the new name. When enabled, these requirements can start the command network proxy without `features.network_proxy`. Browser tools separately check managed network denies and exclusive allowlists. These requirements do not route browser traffic through the proxy or control web search, apps, MCP servers, native-app traffic, or other capability-specific traffic. On supported managed Codex Cloud paths, these requirements constrain command networking alongside separate Cloud environment internet settings. Approved full sandbox escalation can bypass the command proxy where policy permits it. Work Cloud does not inherit these requirements.",
    },
    {
      key: "network_proxy.enabled",
      type: "boolean",
      description:
        "Enable sandboxed networking requirements. This does not grant network access when the active sandbox keeps command networking off.",
    },
    {
      key: "network_proxy.http_port",
      type: "integer",
      description:
        "Loopback HTTP listener port to use for `[network_proxy]` requirements.",
    },
    {
      key: "network_proxy.socks_port",
      type: "integer",
      description:
        "Loopback SOCKS5 listener port to use for `[network_proxy]` requirements.",
    },
    {
      key: "network_proxy.allow_upstream_proxy",
      type: "boolean",
      description:
        "Allow sandboxed networking to chain through an upstream proxy from the environment.",
    },
    {
      key: "network_proxy.dangerously_allow_non_loopback_proxy",
      type: "boolean",
      description:
        "Permit non-loopback listener addresses for `[network_proxy]` requirements. Enabling it can expose listeners beyond localhost.",
    },
    {
      key: "network_proxy.dangerously_allow_all_unix_sockets",
      type: "boolean",
      description:
        "Permit arbitrary Unix socket destinations instead of allowlist-only access. Use only in tightly controlled environments.",
    },
    {
      key: "network_proxy.domains",
      type: "map<string, allow | deny>",
      description:
        "Map-shaped administrator domain policy for sandboxed networking. Supports exact hosts, `*.example.com` for subdomains only, `**.example.com` for apex plus subdomains, and global `*` allow rules. Prefer scoped rules because `*` broadly opens public outbound access. Environment rules can replace the same Global domain key within a policy. Higher-priority values replace the same key, while other inherited keys remain. After composition, a different matching `deny`, including an inherited wildcard, still blocks a request. Empty environment maps do not clear Global rules. Verify executor support. Do not combine this with `network_proxy.allowed_domains` or `network_proxy.denied_domains`.",
    },
    {
      key: "network_proxy.domains.<pattern>",
      type: "allow | deny",
      description:
        "Allow or deny sandboxed network access for the matching domain pattern. A deny rule wins when several patterns match.",
    },
    {
      key: "network_proxy.review_domains",
      type: "array<string>",
      description:
        "Route matching hosts through network approval even if an allow rule matches. An explicit deny takes precedence. Approved requests still undergo DNS and private-address checks. Defaults to an empty list.",
    },
    {
      key: "network_proxy.allowed_domains",
      type: "array<string>",
      description:
        "Administrator allow rules for sandboxed-command networking while the managed network proxy is enabled. These rules do not apply to web search, apps, or MCP servers. Do not combine this with `network_proxy.domains`.",
    },
    {
      key: "network_proxy.denied_domains",
      type: "array<string>",
      description:
        "List-shaped administrator deny rules for sandboxed networking. Do not combine this with `network_proxy.domains`.",
    },
    {
      key: "network_proxy.managed_allowed_domains_only",
      type: "boolean",
      description:
        "When networking requirements are enabled and this is true, ordinary user configuration and per-domain approvals cannot expand the managed proxy allowlist. With no effective configured or inherited Allow entries, ordinary managed commands have no allowed destinations. A deny-only policy does not allow the rest of the internet. This does not cover every tool or approved full sandbox escalation.",
    },
    {
      key: "network_proxy.unix_sockets",
      type: "map<string, allow | deny>",
      description:
        "Administrator-managed Unix socket allowlist for sandboxed networking on macOS. Paths must be absolute.",
    },
    {
      key: "network_proxy.unix_sockets.<path>",
      type: "allow | deny",
      description:
        "On macOS, `allow` adds an absolute Unix socket path to the allowlist; `deny` leaves it out. A `deny` entry cannot block a socket when allow-all Unix sockets is enabled.",
    },
    {
      key: "network_proxy.allow_local_binding",
      type: "boolean",
      description:
        "Permit broader local/private-network access for sandboxed networking. On the supported Codex Cloud proxy path, an explicit false can prevent upstream-proxy access even if a domain is allowed. It defaults to true only if no applicable requirement, selected network profile, or proxy feature setting provides a value. Inherited false remains explicit. A supported higher-priority Cloud override can change it without broadening Global for Local or adding domain Allow entries. Verify executor support. Do not apply this Cloud default to Local.",
    },
    {
      key: "hooks",
      type: "table",
      description:
        "Admin-enforced managed lifecycle hooks. Requires a managed hook directory and uses the same event schema as inline `[hooks]` in `config.toml`.",
    },
    {
      key: "hooks.managed_dir",
      type: "string (absolute path)",
      description:
        "Directory containing managed hook scripts on macOS and Linux. Codex validates that it is absolute and exists before loading managed hooks.",
    },
    {
      key: "hooks.windows_managed_dir",
      type: "string (absolute path)",
      description:
        "Directory containing managed hook scripts on Windows. Codex validates that it is absolute and exists before loading managed hooks.",
    },
    {
      key: "hooks.<Event>",
      type: "array<table>",
      description:
        "Matcher groups for a hook event such as `PreModelRequest`, `PostModelRequest`, `PreToolUse`, `PermissionRequest`, `PostToolUse`, `PreCompact`, `PostCompact`, `SessionStart`, `SessionEnd`, `SubagentStart`, `SubagentStop`, `UserPromptSubmit`, or `Stop`.",
    },
    {
      key: "hooks.<Event>[].hooks",
      type: "array<table>",
      description:
        "Hook handlers for a matcher group. Command and MCP tool hooks are supported while prompt and agent hook handlers are parsed but skipped.",
    },
    {
      key: "hooks.<Event>[].hooks[].async",
      type: "boolean",
      description:
        "Run a command hook in the background without delaying the triggering operation. Defaults to `false`; `SessionEnd` always runs synchronously. See [Run hooks in the background](https://learn.chatgpt.com/docs/hooks#run-hooks-in-the-background).",
    },
    {
      key: "hooks.<Event>[].hooks[].additionalContextLimit",
      type: "integer",
      description:
        "Approximate per-handler token threshold for saving oversized `additionalContext` to disk and showing the model a shorter preview. Defaults to `2500`; `0` passes the full context directly to the model. See [Large hook output](https://learn.chatgpt.com/docs/hooks#large-hook-output).",
    },
    {
      key: "hooks.<Event>[].hooks[].commandWindows",
      type: "string",
      description:
        "Windows-only command override for command hooks. The TOML alias `command_windows` is also accepted.",
    },
    {
      key: "permissions.filesystem.deny_read",
      type: "array<string>",
      description:
        "Admin-enforced filesystem read denials. Entries can be paths or glob patterns, and users cannot weaken them with local config.",
    },
    {
      key: "mcp_servers",
      type: "table",
      description:
        "Allowlist of MCP servers that may be enabled. Both the server name (`<id>`) and its identity must match for the MCP server to be enabled. Any configured MCP server not in the allowlist (or with a mismatched identity) is disabled.",
    },
    {
      key: "mcp_servers.<id>.identity",
      type: "table",
      description:
        "Identity rule for a single MCP server. Set either `command` (stdio) or `url` (streamable HTTP).",
    },
    {
      key: "mcp_servers.<id>.identity.command",
      type: "string | table",
      description:
        "Allow an MCP stdio server by exact command string, or use a matcher table to require an exact executable and ordered argument matchers. The string form doesn't inspect arguments, `cwd`, `env`, or `env_vars`.",
    },
    {
      key: "mcp_servers.<id>.identity.command.executable",
      type: "string",
      description:
        "Executable that the stdio server's configured `command` must match exactly.",
    },
    {
      key: "mcp_servers.<id>.identity.command.args",
      type: "array<table>",
      description:
        "Ordered argument matchers for a stdio server. The configured argument list must have the same length, and every position must match. Command matchers don't inspect `cwd`, `env`, or `env_vars`.",
    },
    {
      key: "mcp_servers.<id>.identity.command.args[].match",
      type: "exact | prefix | regex",
      description: "Match operation for this argument position.",
    },
    {
      key: "mcp_servers.<id>.identity.command.args[].value",
      type: "string",
      description: "Value used by an `exact` or `prefix` argument matcher.",
    },
    {
      key: "mcp_servers.<id>.identity.command.args[].expression",
      type: "string",
      description:
        "Regular expression used by a `regex` argument matcher. The expression must be valid and match the complete argument value.",
    },
    {
      key: "mcp_servers.<id>.identity.url",
      type: "string | table",
      description:
        "Allow an MCP streamable HTTP server by exact URL string, or use an `exact`, `prefix`, or `regex` value matcher table.",
    },
    {
      key: "mcp_servers.<id>.identity.url.match",
      type: "exact | prefix | regex",
      description: "Match operation for the configured MCP server URL.",
    },
    {
      key: "mcp_servers.<id>.identity.url.value",
      type: "string",
      description: "Value used by an `exact` or `prefix` URL matcher.",
    },
    {
      key: "mcp_servers.<id>.identity.url.expression",
      type: "string",
      description:
        "Regular expression used by a `regex` URL matcher. The expression must be valid and match the complete URL value.",
    },
    {
      key: "plugins",
      type: "table",
      description:
        "Plugin-specific MCP server allowlists keyed by plugin identifier. When this table is present, plugin-bundled servers without a matching plugin and server entry are disabled.",
    },
    {
      key: "plugins.<plugin>.mcp_servers",
      type: "table",
      description:
        "Allowlist for MCP servers bundled with one plugin. Plugin server requirements use the same exact identity and matcher forms as top-level `mcp_servers` requirements.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.identity",
      type: "table",
      description:
        "Identity rule for one plugin-bundled MCP server. Set either `command` (stdio) or `url` (streamable HTTP).",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.identity.command",
      type: "string | table",
      description:
        "Allow a plugin's stdio MCP server by exact command string, or use a matcher table to require an exact executable and ordered argument matchers.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.identity.command.executable",
      type: "string",
      description:
        "Executable that the plugin-bundled stdio server's configured command must match exactly.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.identity.command.args",
      type: "array<table>",
      description:
        "Ordered argument matchers for a plugin-bundled stdio server. The configured argument list must have the same length, and every position must match.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.identity.command.args[].match",
      type: "exact | prefix | regex",
      description: "Match operation for this argument position.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.identity.command.args[].value",
      type: "string",
      description: "Value used by an `exact` or `prefix` argument matcher.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.identity.command.args[].expression",
      type: "string",
      description:
        "Regular expression used by a `regex` argument matcher. The expression must match the complete argument value.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.identity.url",
      type: "string | table",
      description:
        "Allow a plugin's streamable HTTP MCP server by exact URL string, or use an `exact`, `prefix`, or `regex` value matcher table.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.identity.url.match",
      type: "exact | prefix | regex",
      description: "Match operation for the plugin-bundled MCP server URL.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.identity.url.value",
      type: "string",
      description: "Value used by an `exact` or `prefix` URL matcher.",
    },
    {
      key: "plugins.<plugin>.mcp_servers.<server>.identity.url.expression",
      type: "string",
      description:
        "Regular expression used by a `regex` URL matcher. The expression must match the complete URL value.",
    },
    {
      key: "marketplaces",
      type: "table",
      description:
        "Admin requirements for plugin marketplace sources. Rules take effect when `restrict_to_allowed_sources` is `true`.",
    },
    {
      key: "marketplaces.restrict_to_allowed_sources",
      type: "boolean",
      description:
        "When `true`, require configured marketplace sources to match `allowed_sources` for marketplace add, plugin install, refresh, and runtime loading. OpenAI-curated Git catalogs, including the API-key catalog, must also match the allowlist. Bundled and remotely installed workspace plugins are separate from this curated Git source policy.",
    },
    {
      key: "marketplaces.allowed_sources",
      type: "table",
      description:
        "Allowed marketplace sources keyed by administrator-chosen rule name. Distinct names accumulate across requirements layers; fields under the same name use normal layer precedence.",
    },
    {
      key: "marketplaces.allowed_sources.<name>",
      type: "table",
      description:
        "One allowed source rule. The final `source` value after requirements merge determines which sibling fields Codex interprets.",
    },
    {
      key: "marketplaces.allowed_sources.<name>.source",
      type: "git | host_pattern | local",
      description:
        "Marketplace source matcher type. Use `git` for one repository, `host_pattern` for Git hosts matched by regular expression, or `local` for one directory.",
    },
    {
      key: "marketplaces.allowed_sources.<name>.url",
      type: "string",
      description:
        'Git repository URL required when `source = "git"`. Codex normalizes the configured and allowed URLs before requiring an exact repository match.',
    },
    {
      key: "marketplaces.allowed_sources.<name>.ref",
      type: "string",
      description:
        "Optional exact Git ref for a `git` rule. When omitted, the rule allows any ref for the matching repository.",
    },
    {
      key: "marketplaces.allowed_sources.<name>.host_pattern",
      type: "string",
      description:
        'Regular expression required when `source = "host_pattern"`. Codex matches it against the lowercase hostname parsed from an HTTPS, SSH, or SCP-style Git source. Use `^` and `$` to require a whole-host match.',
    },
    {
      key: "marketplaces.allowed_sources.<name>.path",
      type: "string (absolute path)",
      description:
        'Local marketplace directory required when `source = "local"`. Codex requires an absolute path and compares paths after normalization.',
    },
    {
      key: "apps",
      type: "table",
      description:
        "Managed app requirements keyed by app identifier. Requirements can disable an app or constrain approval behavior for individual tools.",
    },
    {
      key: "apps.<id>.enabled",
      type: "boolean",
      description:
        "Set to `false` to disable an app. A disabled requirement remains restrictive when multiple requirements sources are merged.",
    },
    {
      key: "apps.<id>.tools.<tool>.approval_mode",
      type: "auto | prompt | writes | approve",
      description: "Set the managed approval mode for one app tool.",
    },
    {
      key: "rules",
      type: "table",
      description:
        "Admin-enforced command rules merged with `.rules` files. Requirements rules must be restrictive.",
    },
    {
      key: "rules.prefix_rules",
      type: "array<table>",
      description:
        "List of enforced prefix rules. Each rule must include `pattern` and `decision`.",
    },
    {
      key: "rules.prefix_rules[].pattern",
      type: "array<table>",
      description:
        "Command prefix expressed as pattern tokens. Each token sets either `token` or `any_of`.",
    },
    {
      key: "rules.prefix_rules[].pattern[].token",
      type: "string",
      description: "A single literal token at this position.",
    },
    {
      key: "rules.prefix_rules[].pattern[].any_of",
      type: "array<string>",
      description: "A list of allowed alternative tokens at this position.",
    },
    {
      key: "rules.prefix_rules[].decision",
      type: "prompt | forbidden",
      description:
        "Required. Requirements rules can only prompt or forbid (not allow).",
    },
    {
      key: "rules.prefix_rules[].justification",
      type: "string",
      description:
        "Optional non-empty rationale surfaced in approval prompts or rejection messages.",
    },
  ]}
  client:load
/>