# Agent approvals & security

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Codex helps protect your code and data and reduces the risk of misuse.

This page covers how to operate Codex safely, including sandboxing, approvals,
  and network access. If you are looking for Codex Security, the product for
  scanning connected GitHub repositories, see [Codex Security](https://learn.chatgpt.com/docs/security).

By default, the agent runs with network access turned off. Locally, Codex uses an OS-enforced sandbox that limits what it can touch (typically to the current workspace), plus an approval policy that controls when it must stop and ask you before acting.

For a high-level explanation of how sandboxing works across the ChatGPT desktop app,
Codex CLI, and IDE extension, see [sandboxing](https://learn.chatgpt.com/docs/sandboxing).
For a broader enterprise security overview, see the [Codex security white paper](https://trust.openai.com/?itemUid=382f924d-54f3-43a8-a9df-c39e6c959958&source=click).

## Migrate from the retired `untrusted` approval policy

Codex and ChatGPT Work no longer support `approval_policy = "untrusted"`.
The retired setting can prevent either client from starting. Remove it from
user or project configuration, profile files, startup scripts, and managed
defaults. For interactive, read-only use:

```toml
sandbox_mode = "read-only"
approval_policy = "on-request"
```

Or run `codex --sandbox read-only --ask-for-approval on-request`.

With `on-request`, commands allowed by the sandbox can run without approval,
read accessible files, and use network access if enabled.

To preserve the stricter command-approval rule, omit an explicit
`approval_policy` and add a project entry to your user-level
`~/.codex/config.toml`:

```toml
[projects."/path/to/project"]
trust_level = "untrusted"
```

Commands then require approval unless an execution-policy rule allows them.
This also disables project-local configuration. Explicitly setting `on-request`
overrides the project-derived policy; managed `allowed_approval_policies` must
include `untrusted` to permit it.

## Sandbox and approvals

Local computer access with Work Cloud has separate local and cloud execution policies:

- **Cloud execution:** Work cloud containers use existing Work Cloud policies.
- **Local execution:** Local execution requirements govern the connected computer. MDM and legacy managed-device requirements take precedence over Agent Security, which takes precedence over the device's system requirements file.

For Work with local access and dots, supported Global policy applies to the shared cloud orchestrator when managed policy is enabled. Work cloud containers and dots cloud computers use their own execution configuration and requirements. Test local and cloud controls separately. Keep orchestrator controls, including approvals and web search, in Global. Use the dedicated Allowed approval policies and Allowed web search modes controls where available, and TOML for other supported fields. Check the [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference) for the field list and execution scope before applying a Codex example to Local computer access with Work Cloud.

Moving between desktop, web, and mobile does not grant access to another computer. Before enabling sync or expanding access, review the Agent Security baseline and test an allowed and a blocked action in each execution environment. See [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration).

Codex security controls come from two layers that work together:

- **Sandbox mode**: What Codex can do technically (for example, where it can write and whether it can reach the network) when it executes model-generated commands.
- **Approval policy**: When Codex must ask you before it executes an action (for example, leaving the sandbox, using the network, or running commands outside a trusted set).

Codex uses different sandbox modes depending on where you run it:

- **[Codex Cloud (Legacy)](https://learn.chatgpt.com/docs/environments/cloud-environment)**: Runs in isolated OpenAI-managed containers, preventing access to your host system or unrelated data. Uses a two-phase runtime model: setup runs before the agent phase and can access the network to install specified dependencies, then the agent phase runs offline by default unless you enable internet access for that environment. Secrets configured for cloud environments are available only during setup and are removed before the agent phase starts.
- **Current Codex Cloud**: See [environment variables and network secrets](https://learn.chatgpt.com/docs/environments/cloud-environments#environment-variables-and-secrets) for how credentials are handled during setup and tasks.
- **Codex CLI / IDE extension**: OS-level mechanisms enforce sandbox policies. Defaults include no network access and write permissions limited to the active workspace. You can configure the sandbox, approval policy, and network settings based on your risk tolerance.

In the `Auto` preset (for example, `--sandbox workspace-write --ask-for-approval on-request`), Codex can read files, make edits, and run commands in the working directory automatically.

Codex asks for approval to edit files outside the workspace or to run commands that require network access. If you want to chat or plan without making changes, switch to `read-only` mode with the `/permissions` command.

Codex can also elicit approval for app (connector) tool calls that advertise side effects, even when the action isn't a shell command or file change. Destructive app/MCP tool calls always require approval when the tool advertises a destructive annotation (unless the tool advertises a read annotation, which takes priority).

## Safety monitoring and paused tasks

GPT-6 Astra includes safety monitoring in Codex and ChatGPT Work. Monitoring
runs asynchronously and can pause a task if it detects potentially unsafe model
behavior. A pause can arrive after the activity that triggered it; monitoring
doesn't replace sandboxing, permissions, or review of the result.

If a task pauses, read the notice and review the findings when available. Resume
only after checking that the task can safely continue. If the notice says the
task has ended or doesn't offer an option to resume, you can't resume from that
surface.

| Surface and data controls                                                                               | Findings and resume                                       |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Codex and ChatGPT Work clients with the findings and resume flow, without the data controls listed here | Review the findings before resuming.                      |
| Codex CLI and mobile                                                                                    | Full findings and resume aren't available. The task ends. |
| Zero data retention, Modified Abuse Monitoring, or non-US data storage residency                        | Full findings and resume aren't available. The task ends. |

Safety monitoring evaluates model behavior during a task.
[Automatic approval review](https://learn.chatgpt.com/docs/sandboxing/auto-review) evaluates individual actions that
already require approval before those actions run. An action approved by
automatic approval review can still be part of a task that monitoring later pauses.

## Network access<ElevatedRiskBadge class="ml-2"></ElevatedRiskBadge>

For current Codex Cloud network settings, see [Connect to services](https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services). For Codex Cloud (Legacy), see [agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access) to enable full internet access or a domain allow list.

For the ChatGPT desktop app, Codex CLI, or IDE extension, the default `workspace-write` sandbox mode keeps network access turned off unless you enable it in your configuration:

```toml
[sandbox_workspace_write]
network_access = true
```

### Network isolation

On supported managed Codex Cloud execution paths, Agent Security requirements constrain command networking. Codex Cloud environment internet settings apply separately. An allowed domain in Agent Security does not override a restriction in the Cloud environment's internet settings. These command-network controls do not, by themselves, disable hosted web search, apps, or MCP. ChatGPT Work Cloud has separate capability permissions and does not inherit these Agent Security requirements.

A managed command allowlist applies to commands using the managed proxy. Where policy permits full sandbox escalation and it is approved, that execution can bypass the command proxy. A narrow network grant is different from full sandbox escalation. Configure enforced approval and sandbox requirements for the intended boundary, and test both ordinary and escalated commands. See [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration#configure-network-access-requirements).

Network access is controlled through destination rules that apply to scripts,
programs, and subprocesses spawned by commands. When command network access is
already enabled, turn on the `network_proxy` feature to constrain that traffic
to the network policy you configure. Adding domain rules does not enable the
proxy by itself.

```toml
[features.network_proxy]
enabled = true
domains = { "api.openai.com" = "allow", "example.com" = "deny" }
```

For a one-off CLI session, use the boolean shorthand when you only need the
toggle, and the table form when you also set policy options:

```bash
codex \
  -c 'features.network_proxy=true' \
  -c 'sandbox_workspace_write.network_access=true'

codex \
  -c 'features.network_proxy.enabled=true' \
  -c 'features.network_proxy.domains={ "api.openai.com" = "allow", "example.com" = "deny" }' \
  -c 'sandbox_workspace_write.network_access=true'
```

The feature changes how enabled network access is enforced; it does not grant
network access by itself. Use `sandbox_workspace_write.network_access` with
`workspace-write` config to decide whether commands have network access at all:

- Network off + `network_proxy` on: network stays off, and the feature does nothing.
- Network on + `network_proxy` off: network stays on with unrestricted direct
  outbound access.
- Network on + `network_proxy` on: network stays on, and outbound traffic is
  constrained by the configured network policy.

The proxy feature also applies to [permission profiles](https://learn.chatgpt.com/docs/permissions#network-permissions).
A profile's `network.enabled = true` grants command network access, while
`features.network_proxy = true` activates enforcement of that profile's domain
rules:

```toml
default_permissions = "project-edit"

[features]
network_proxy = true

[permissions.project-edit]
extends = ":workspace"

[permissions.project-edit.network]
enabled = true

[permissions.project-edit.network.domains]
"api.openai.com" = "allow"
```

If you omit the proxy feature in this example, commands have direct network
access and the `api.openai.com` allow rule does not restrict their destinations.

Admin-managed `experimental_network` requirements are separate from the user
feature toggle. They can configure and start sandboxed networking without
`features.network_proxy`, but they do not turn on network access when the active
sandbox keeps it off. See [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration#configure-network-access-requirements)
for the administrator-side `requirements.toml` shape.

#### Network policy

Domain rules are allowlist-first:

- Exact hosts match only themselves.
- `*.example.com` matches subdomains such as `api.example.com`, but not
  `example.com`.
- `**.example.com` matches both the apex and subdomains.
- A global `*` allow rule matches any public host that is not denied. Treat `*`
  as broad network access and prefer scoped rules when you can.
- `deny` always wins over `allow`, and global `*` is only valid for allow rules.

#### Local and private destinations

By default, `allow_local_binding = false` blocks loopback, link-local, and
private destinations:

- Specific exceptions: add an exact local IP literal or `localhost` allow rule
  when a command needs one local target.
- Broader access: set `allow_local_binding = true` only when you intentionally
  want wider local/private reach.
- Wildcards: wildcard rules do not count as explicit local exceptions.
- Resolved addresses: hostnames that resolve to local/private IPs stay blocked
  even if they match the allowlist.

#### DNS rebinding protections

Before allowing a hostname, Codex performs a best-effort DNS and IP
classification check:

- Lookups that fail or time out are blocked.
- Hostnames that resolve to non-public addresses are blocked.
- The check reduces DNS rebinding risk, but it does not eliminate it. Preventing
  rebinding completely would require pinning resolved IPs through the transport
  layer.

If hostile DNS is in scope, enforce egress controls at a lower layer too.

#### Dangerous settings

Two settings deliberately widen the trust boundary:

- `dangerously_allow_non_loopback_proxy = true` can expose proxy listeners beyond
  loopback.
- `dangerously_allow_all_unix_sockets = true` bypasses the Unix socket allowlist.

Use them only in tightly controlled environments. When Unix socket proxying is
enabled, listeners stay loopback-only even if non-loopback binding was requested,
so sandboxed networking does not become a remote bridge into local daemons.

`network_proxy` is off by default. When you enable it:

| Setting                                | Default | Behavior                                                                                                                                                                              |
| -------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                              | `false` | Starts sandboxed networking only when command network access is already on.                                                                                                           |
| `domains`                              | unset   | Uses allowlist behavior, so no external destinations are allowed until you add `allow` rules. Supports exact hosts, scoped wildcards, and global `*` allow rules; `deny` always wins. |
| `unix_sockets`                         | unset   | No Unix socket destinations are allowed until you add explicit `allow` rules.                                                                                                         |
| `allow_local_binding`                  | `false` | Blocks local and private-network destinations unless you add an exact local IP literal or `localhost` allow rule, or explicitly opt into broader local/private access.                |
| `enable_socks5`                        | `true`  | Exposes SOCKS5 support when policy allows it.                                                                                                                                         |
| `enable_socks5_udp`                    | `true`  | Allows UDP over SOCKS5 when SOCKS5 is available.                                                                                                                                      |
| `allow_upstream_proxy`                 | `true`  | Lets sandboxed networking honor an upstream proxy from the environment.                                                                                                               |
| `dangerously_allow_non_loopback_proxy` | `false` | Keeps listener endpoints on loopback unless you deliberately expose them beyond localhost.                                                                                            |
| `dangerously_allow_all_unix_sockets`   | `false` | Keeps Unix socket access allowlist-based unless you deliberately bypass that protection.                                                                                              |

### Traffic outside the command network proxy

The network proxy filters scripts, programs, and child processes that run
inside the local command sandbox. It does not filter web search, app or
connector tool calls, MCP server connections, browser or Computer Use activity,
Codex cloud tasks, or the client's model and authentication requests. These
surfaces use separate service connections, feature settings, workspace
policies, or environment controls.

Browser tools separately check managed network denies and exclusive allowlists
before accessing an origin. Browser origin policies can further restrict site
access, uploads, downloads, and developer tools. See
[managed browser controls](https://learn.chatgpt.com/docs/enterprise/managed-configuration#control-browser-and-computer-use).

For managed users, combine command network policy with controls such as
`allowed_web_search_modes`, approved `mcp_servers`, and feature requirements
for apps, plugins, browsers, or Computer Use. See
[Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration).

You can also control the [web search tool](https://platform.openai.com/docs/guides/tools-web-search) without granting full network access to spawned commands. Codex defaults to using a web search cache to access results. The cache is an OpenAI-maintained index of web results, so cached mode returns pre-indexed results instead of fetching live pages. This reduces exposure to prompt injection from arbitrary live content. Treat web results as untrusted. If you are using `--yolo` or another [full access sandbox setting](#common-sandbox-and-approval-combinations), web search defaults to live results. Use `--search` or set `web_search = "live"` to allow live browsing, or set it to `"disabled"` to turn the tool off:

```toml
web_search = "cached"  # default
# web_search = "disabled"
# web_search = "live"  # same as --search
```

Set `web_search = "indexed"` when external web access should be gated by the
search index. Use caution when enabling network access or web search in Codex.
Prompt injection can cause the agent to fetch and follow untrusted instructions.

## Defaults and recommendations

- On launch, Codex detects whether the folder is version-controlled and recommends:
  - Version-controlled folders: `Auto` (workspace write + on-request approvals)
  - Non-version-controlled folders: `read-only`
- Depending on your setup, Codex may also start in `read-only` until you explicitly trust the working directory (for example, via an onboarding prompt or `/permissions`).
- The workspace includes the current directory and temporary directories like `/tmp`. Use the `/status` command to see which directories are in the workspace.
- To accept the defaults, run `codex`.
- You can set these explicitly:
  - `codex --sandbox workspace-write --ask-for-approval on-request`
  - `codex --sandbox read-only --ask-for-approval on-request`

### Protected paths in writable roots

In the default `workspace-write` sandbox policy, writable roots still include protected paths:

- `<writable_root>/.git` is protected as read-only whether it appears as a directory or file.
- If `<writable_root>/.git` is a pointer file (`gitdir: ...`), the resolved Git directory path is also protected as read-only.
- `<writable_root>/.agents` is protected as read-only when it exists as a directory.
- `<writable_root>/.codex` is protected as read-only when it exists as a directory.
- `<writable_root>/.aws` is protected as read-only when it exists as a directory.
- Protection is recursive, so everything under those paths is read-only.

### Run without approval prompts

You can disable approval prompts with `--ask-for-approval never` or `-a never` (shorthand).

This option works with all `--sandbox` modes, so you still control Codex's level of autonomy. Codex makes a best effort within the constraints you set.

If you need Codex to read files, make edits, and run commands with network access without approval prompts, use `--sandbox danger-full-access` (or the `--dangerously-bypass-approvals-and-sandbox` flag). Use caution before doing so.

For a middle ground, `approval_policy = { granular = { ... } }` lets you keep specific approval prompt categories interactive while automatically rejecting others. The granular policy covers sandbox approvals, execpolicy-rule prompts, MCP prompts, `request_permissions` prompts, and skill-script approvals.

### Automatic approval reviews

By default, approval requests route to you:

```toml
approvals_reviewer = "user"
```

Auto-review applies when approvals are interactive, such as
`approval_policy = "on-request"` or a granular approval policy. Set
`approvals_reviewer = "auto_review"` to route eligible approval requests
through a reviewer agent before Codex runs the action.

```toml
approval_policy = "on-request"
approvals_reviewer = "auto_review"
```

For the full reviewer lifecycle, trigger conditions, configuration precedence,
and failure behavior, see
[Auto-review](https://learn.chatgpt.com/docs/sandboxing/auto-review).

The reviewer evaluates only actions that already need approval, such as sandbox
escalations, network requests that require approval, `request_permissions`
prompts, or app and MCP tool calls that need approval. A command rule can
also require review inside the sandbox.

The reviewer policy checks for data exfiltration, credential probing, persistent
security weakening, and destructive actions. Low-risk and medium-risk actions
can proceed when policy allows them. The policy denies critical-risk actions.
High-risk actions require enough user authorization and no matching deny rule.
Prompt-build, review-session, and parse failures fail closed. Timeouts are
surfaced separately, but the action still does not run.

To add rules or replace the policy locally or across an organization, see
[Auto-review configuration](https://learn.chatgpt.com/docs/sandboxing/auto-review#configuration).

In the ChatGPT desktop app, these reviews appear as Auto-review items with a status
such as Reviewing, Approved, Denied, Aborted, or Timed out. They can also
include a risk level and user-authorization assessment for the reviewed
request.

Auto-review uses extra model calls, so it can add to Codex usage. Admins
can constrain it with `allowed_approvals_reviewers`.

### Common sandbox and approval combinations

| Intent                         | Flags / config                                                                                                                      | Effect                                                                                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Auto (preset)                  | _no flags needed_ or `--sandbox workspace-write --ask-for-approval on-request`                                                      | Codex can read files, make edits, and run commands in the workspace. Codex requires approval to edit outside the workspace or to access network. |
| Safe read-only browsing        | `--sandbox read-only --ask-for-approval on-request`                                                                                 | Codex can read files and run commands within the read-only sandbox. Actions outside the sandbox can require approval.                            |
| Read-only non-interactive (CI) | `--sandbox read-only --ask-for-approval never`                                                                                      | Codex can read files and run commands within the read-only sandbox; it never asks for approval.                                                  |
| Auto-review mode               | `--sandbox workspace-write --ask-for-approval on-request -c approvals_reviewer=auto_review` or `approvals_reviewer = "auto_review"` | Same sandbox boundary as standard on-request mode, but eligible approval requests are reviewed by Auto-review instead of surfacing to the user.  |
| Dangerous full access          | `--dangerously-bypass-approvals-and-sandbox` (alias: `--yolo`)                                                                      | <ElevatedRiskBadge /> No sandbox; no approvals _(not recommended)_                                                                               |

For non-interactive runs, use `codex exec --sandbox workspace-write`.

#### Configuration in `config.toml`

For the broader configuration workflow, see [Config basics](https://learn.chatgpt.com/docs/config-file/config-basic), [Advanced Config](https://learn.chatgpt.com/docs/config-file/config-advanced#approval-policies-and-sandbox-modes), and the [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference).

```toml
# Interactive approvals with a read-only sandbox
approval_policy = "on-request"
sandbox_mode    = "read-only"
allow_login_shell = false # optional hardening: disallow login shells for shell-based tools

# Optional: Allow network in workspace-write mode
[sandbox_workspace_write]
network_access = true

# Optional: granular approval policy
# approval_policy = { granular = {
#   sandbox_approval = true,
#   rules = true,
#   mcp_elicitations = true,
#   request_permissions = false,
#   skill_approval = false
# } }
```

You can also save presets as [profile files](https://learn.chatgpt.com/docs/config-file/config-advanced#profiles), then select them with `codex --profile profile-name`:

```toml
# ~/.codex/full_auto.config.toml
approval_policy = "on-request"
sandbox_mode    = "workspace-write"
```

```toml
# ~/.codex/readonly_quiet.config.toml
approval_policy = "never"
sandbox_mode    = "read-only"
```

### Test the sandbox locally

To see what happens when a command runs under the Codex sandbox, use these Codex CLI commands:

```bash
# macOS
codex sandbox macos [--permissions-profile <name>] [--log-denials] [COMMAND]...
# Linux
codex sandbox linux [--permissions-profile <name>] [COMMAND]...
# Windows
codex sandbox windows [--permissions-profile <name>] [COMMAND]...
```

The `sandbox` command is also available as `codex debug`, and the platform helpers have aliases (for example `codex sandbox seatbelt` and `codex sandbox landlock`).

## OS-level sandbox

Codex enforces the sandbox differently depending on your OS:

- **macOS** uses Seatbelt policies and runs commands using `sandbox-exec` with a profile (`-p`) that corresponds to the `--sandbox` mode you selected. When restricted read access enables platform defaults, Codex appends a curated macOS platform policy (instead of broadly allowing `/System`) to preserve common tool compatibility.
- **Linux** uses `bwrap` plus `seccomp` by default.
- **Windows** supports [MXC](https://learn.chatgpt.com/docs/windows/windows-sandbox#windows-sandbox), with `elevated` and `unelevated` as legacy fallbacks. In [Windows Subsystem for Linux 2 (WSL2)](https://learn.chatgpt.com/docs/windows/wsl), Codex uses the Linux sandbox implementation. WSL1 was supported through Codex `0.114`; starting in `0.115`, the Linux sandbox moved to `bwrap`, so WSL1 is no longer supported.

If you use the Codex IDE extension on Windows, it supports WSL2 directly. Set the following in your VS Code settings to keep the agent inside WSL2 whenever it's available:

```json
{
  "chatgpt.runCodexInWindowsSubsystemForLinux": true
}
```

This ensures the IDE extension inherits Linux sandbox semantics for commands, approvals, and filesystem access even when the host OS is Windows. Learn more in the [WSL guide](https://learn.chatgpt.com/docs/windows/wsl).

When running on Windows, prefer MXC when the device and policy support it by setting this in `config.toml`:

```toml
[features]
prefer_mxc = true
```

Keep a permitted legacy implementation in `windows.sandbox` for fallback. See the [Windows setup guide](https://learn.chatgpt.com/docs/windows/windows-sandbox#enable-mxc) for configuration and compatibility limits.

When you run Linux in a containerized environment such as Docker, the sandbox may not work if the host or container configuration blocks the namespace, setuid `bwrap`, or `seccomp` operations that Codex needs.

In that case, configure your Docker container to provide the isolation you need, then run `codex` with `--sandbox danger-full-access` (or the `--dangerously-bypass-approvals-and-sandbox` flag) inside the container.

### Run Codex in Dev Containers

If your host cannot run the Linux sandbox directly, or if your organization already standardizes on containerized development, run Codex with Dev Containers and let Docker provide the outer isolation boundary. This works with Visual Studio Code Dev Containers and compatible tools.

Devcontainers provide substantial protection, but they do not prevent every
  attack. If you run Codex with `--sandbox danger-full-access` or
  `--dangerously-bypass-approvals-and-sandbox` inside the container, a malicious
  project can exfiltrate anything available inside the devcontainer, including
  Codex credentials. Use this pattern only with trusted repositories, and
  monitor Codex activity as you would in any other elevated environment.

Inside the container, choose one of these modes:

- Keep Codex's Linux sandbox enabled if the Dev Container profile grants the capabilities needed for `bwrap` to create the inner sandbox.
- If the container is your intended security boundary, run Codex with `--sandbox danger-full-access` inside the container so Codex does not try to create a second sandbox layer.

## Version control

Codex works best with a version control workflow:

- Work on a feature branch and keep `git status` clean before delegating. This keeps Codex patches easier to isolate and revert.
- Prefer patch-based workflows (for example, `git diff`/`git apply`) over editing tracked files directly. Commit frequently so you can roll back in small increments.
- Treat Codex suggestions like any other PR: run targeted verification, review diffs, and document decisions in commit messages for auditing.

## Monitoring and telemetry

Codex supports opt-in monitoring via OpenTelemetry (OTel) to help teams audit usage, investigate issues, and meet compliance requirements without weakening local security defaults. Telemetry is off by default; enable it explicitly in your configuration.

### Overview

- Codex turns off OTel export by default to keep local runs self-contained.
- When enabled, Codex emits structured log events covering chats, API requests, SSE/WebSocket stream activity, user prompts (redacted by default), tool approval decisions, and tool results.
- Codex tags exported events with `service.name` (originator), CLI version, and an environment label to separate dev/staging/prod traffic.

### Enable OTel (opt-in)

Add an `[otel]` block to your Codex configuration (typically `~/.codex/config.toml`), choosing an exporter and whether to log prompt text.

```toml
[otel]
environment = "staging"   # dev | staging | prod
exporter = "none"          # none | otlp-http | otlp-grpc
log_user_prompt = false     # redact prompt text unless policy allows
```

- `exporter = "none"` leaves instrumentation active but doesn't send data anywhere.
- To send events to your own collector, pick one of:

```toml
[otel]
exporter = { otlp-http = {
  endpoint = "https://otel.example.com/v1/logs",
  protocol = "binary",
  headers = { "x-otlp-api-key" = "${OTLP_TOKEN}" }
}}
```

```toml
[otel]
exporter = { otlp-grpc = {
  endpoint = "https://otel.example.com:4317",
  headers = { "x-otlp-meta" = "abc123" }
}}
```

Codex batches events and flushes them on shutdown. Codex exports only telemetry produced by its OTel module.

### Event categories

Representative event types include:

- `codex.conversation_starts` (model, reasoning settings, sandbox/approval policy)
- `codex.api_request` (attempt, status/success, duration, and error details)
- `codex.sse_event` (stream event kind, success/failure, duration, plus token counts on `response.completed`)
- `codex.websocket_request` and `codex.websocket_event` (request duration plus per-message kind/success/error)
- `codex.user_prompt` (length; content redacted unless explicitly enabled)
- `codex.tool_decision` (approved/denied, source: configuration vs. user)
- `codex.tool_result` (duration, success, output snippet)

Associated OTel metrics (counter plus duration histogram pairs) include `codex.api_request`, `codex.sse_event`, `codex.websocket.request`, `codex.websocket.event`, and `codex.tool.call` (with corresponding `.duration_ms` instruments).

For the full event catalog and configuration reference, see the [Codex configuration documentation on GitHub](https://github.com/openai/codex/blob/main/docs/config.md#otel).

### Security and privacy guidance

- Keep `log_user_prompt = false` unless policy explicitly permits storing prompt contents. Prompts can include source code and sensitive data.
- Route telemetry only to collectors you control; apply retention limits and access controls aligned with your compliance requirements.
- Treat tool arguments and outputs as sensitive. Favor redaction at the collector or SIEM when possible.
- Review local data retention settings (for example, `history.persistence` / `history.max_bytes`) if you don't want Codex to save session transcripts under `CODEX_HOME`. See [Advanced Config](https://learn.chatgpt.com/docs/config-file/config-advanced#history-persistence) and [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference).
- If you run the CLI with network access turned off, OTel export can't reach your collector. To export, allow network access in `workspace-write` mode for the OTel endpoint, or export from Codex cloud with the collector domain on your approved list.
- Review events periodically for approval/sandbox changes and unexpected tool executions.

OTel is optional and designed to complement, not replace, the sandbox and approval protections described above.

## Managed configuration

Enterprise admins can configure Codex security settings for their workspace in [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration). See that page for setup and policy details.