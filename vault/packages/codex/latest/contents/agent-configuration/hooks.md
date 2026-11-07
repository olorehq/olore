# Hooks

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Hooks are an extensibility framework for Codex. They let you run scripts or MCP
tools during the agentic loop, enabling features such as:

- Send the chat to a custom logging/analytics engine
- Scan your team's prompts to block accidentally pasting API keys
- Summarize chats to create persistent memories automatically
- Run a custom validation check when a chat turn stops, enforcing standards
- Customize prompting when in a certain directory

How hooks run:

- Matching hooks from multiple files all run.
- Multiple matching command hooks for the same event are launched concurrently,
  so one hook can't prevent another matching hook from starting.
- Non-managed hooks must be reviewed and trusted before they run.

Hooks run at different points in a conversation:

| When                              | Hooks                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| During a turn                     | `PreToolUse`, `PermissionRequest`, `PostToolUse`, `PreCompact`, `PostCompact`, `UserPromptSubmit`, `SubagentStop`, `Stop` |
| For each model request attempt    | `PreModelRequest`, `PostModelRequest`                                                                                     |
| When you interrupt an active turn | `Interrupt` (doesn't run for subagents)                                                                                   |
| When a session or subagent starts | `SessionStart`, `SubagentStart`                                                                                           |
| When the main thread ends         | `SessionEnd` (doesn't run for subagents)                                                                                  |

## Where Codex looks for hooks

Codex discovers hooks next to active config layers in either of these forms:

- `hooks.json`
- inline `[hooks]` tables inside `config.toml`

Installed plugins can also bundle lifecycle config through their plugin
manifest or a default `hooks/hooks.json` file. See [Build
plugins](https://developers.openai.com/plugins/build/plugins#bundled-mcp-servers-and-lifecycle-hooks) for the
plugin packaging rules.

In practice, the four most useful locations are:

- `~/.codex/hooks.json`
- `~/.codex/config.toml`
- `<repo>/.codex/hooks.json`
- `<repo>/.codex/config.toml`

If more than one hook source exists, Codex loads all matching hooks.
Higher-precedence config layers don't replace lower-precedence hooks.
If a single layer contains both `hooks.json` and inline `[hooks]`, Codex
merges them and warns at startup. Prefer one representation per layer.

Codex can also discover hooks bundled with enabled plugins. Plugin-bundled
hooks load alongside other hook sources and use the same trust-review flow as
other non-managed hooks.

Project-local hooks load only when the project `.codex/` layer is trusted. In
untrusted projects, Codex still loads user and system hooks from their own
active config layers.

## Review and trust hooks

Codex lists configured hooks before deciding which ones can run. Before a
non-managed hook can run, Codex requires you to review and trust the exact hook
definition. Codex records trust against the hook's current hash, so new or
changed hooks are marked for review and skipped until trusted.

Use `/hooks` in the CLI to inspect hook sources, review new or changed hooks,
trust hooks, or disable individual non-managed hooks. If hooks need review at
startup, Codex prints a warning that tells you to open `/hooks`.

Managed hooks from system, MDM, cloud, or `requirements.toml` sources are marked
as managed, trusted by policy, and can't be disabled from the user hook browser.

For one-off automation that already vets hook sources outside Codex, pass
`--dangerously-bypass-hook-trust` to run enabled hooks without requiring
persisted hook trust for that invocation.

## Config shape

Hooks are organized in three levels:

- A hook event such as `PreToolUse`, `PostToolUse`, `PreCompact`,
  `SubagentStart`, or `Stop`
- A matcher group that decides when that event matches
- One or more hook handlers that run when the matcher group matches

```json
{
  "description": "Optional lifecycle hooks for this workspace.",
  "hooks": {
    "SessionStart": [
      {
        "matcher": "startup|resume",
        "hooks": [
          {
            "type": "command",
            "command": "python3 ~/.codex/hooks/session_start.py",
            "statusMessage": "Loading session notes",
            "additionalContextLimit": 5000
          }
        ]
      }
    ],
    "SessionEnd": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "python3 ~/.codex/hooks/session_end.py",
            "timeout": 3
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "/usr/bin/python3 \"$(git rev-parse --show-toplevel)/.codex/hooks/pre_tool_use_policy.py\"",
            "statusMessage": "Checking Bash command"
          }
        ]
      }
    ],
    "PermissionRequest": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "/usr/bin/python3 \"$(git rev-parse --show-toplevel)/.codex/hooks/permission_request.py\"",
            "statusMessage": "Checking approval request"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "/usr/bin/python3 \"$(git rev-parse --show-toplevel)/.codex/hooks/post_tool_use_review.py\"",
            "statusMessage": "Reviewing Bash output"
          }
        ]
      }
    ],
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "/usr/bin/python3 \"$(git rev-parse --show-toplevel)/.codex/hooks/user_prompt_submit_data_flywheel.py\""
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "/usr/bin/python3 \"$(git rev-parse --show-toplevel)/.codex/hooks/stop_continue.py\"",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

Notes:

- `description` is optional top-level metadata for a `hooks.json` file. It
  doesn't change which hooks run.
- `timeout` is in seconds.
- If `timeout` is omitted, Codex uses `600` seconds for most hooks.
  - `SessionEnd` and `Interrupt` use `1` second by default and support up to `3` seconds.
- `statusMessage` is optional.
- `additionalContextLimit` sets how much `additionalContext` a command hook can
  send to the model before Codex saves the full text to disk and sends a shorter
  preview instead. See [Large hook output](#large-hook-output).
- `commandWindows` is an optional Windows-only command override. In TOML, use
  `command_windows` or `commandWindows`.
- Set `async` to `true` to [run a command hook in the
  background](#run-hooks-in-the-background).
- `command` and `mcp_tool` handlers are supported. `prompt` and `agent`
  handlers are parsed but skipped.
- Commands run with the session `cwd` as their working directory.
- For repo-local hooks, prefer resolving from the git root instead of using a
  relative path such as `.codex/hooks/...`. Codex may be started from a
  subdirectory, and a git-root-based path keeps the hook location stable.

Equivalent inline TOML in `config.toml`:

```toml
[[hooks.SessionStart]]
matcher = "^compact$"

[[hooks.SessionStart.hooks]]
type = "command"
command = '/usr/bin/python3 "$(git rev-parse --show-toplevel)/.codex/hooks/session_start.py"'
additionalContextLimit = 5000

[[hooks.PreToolUse]]
matcher = "^Bash$"

[[hooks.PreToolUse.hooks]]
type = "command"
command = '/usr/bin/python3 "$(git rev-parse --show-toplevel)/.codex/hooks/pre_tool_use_policy.py"'
timeout = 30
statusMessage = "Checking Bash command"

[[hooks.PostToolUse]]
matcher = "^Bash$"

[[hooks.PostToolUse.hooks]]
type = "command"
command = '/usr/bin/python3 "$(git rev-parse --show-toplevel)/.codex/hooks/post_tool_use_review.py"'
timeout = 30
statusMessage = "Reviewing Bash output"
```

## MCP tool hooks

An MCP tool hook lets a lifecycle event call a tool on an already-connected MCP
server. It sends structured arguments directly to the tool and uses the same
trust review and output contract as a command hook.

### Configure an MCP tool hook

This hook asks the `scanner` MCP server to scan each patch after Codex writes or
edits files:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "mcp_tool",
            "server": "scanner",
            "tool": "scan_patch",
            "input": { "patch": "${tool_input.command}" },
            "timeout": 30,
            "statusMessage": "Scanning edited files"
          }
        ]
      }
    ]
  }
}
```

| Field           | Meaning                                                          |
| --------------- | ---------------------------------------------------------------- |
| `type`          | Must be `mcp_tool`.                                              |
| `server`        | Required name of an already-connected MCP server.                |
| `tool`          | Required name of a tool exposed by that server.                  |
| `input`         | Optional JSON object of argument templates. Defaults to `{}`.    |
| `timeout`       | Optional active execution timeout in seconds. Defaults to `600`. |
| `statusMessage` | Optional message shown while the hook runs.                      |

### Expand arguments from the hook event

Use `${field.nested}` to read a dotted field from the hook event. A placeholder
that fills an entire value keeps its JSON type. A placeholder inside a larger
string is rendered as text. Codex expands objects and arrays recursively.

For an event containing `{"tool_input":{"file_path":"src/main.rs","count":3}}`,
this argument template:

```json
{
  "path": "${tool_input.file_path}",
  "count": "${tool_input.count}",
  "message": "Scanning ${tool_input.file_path}"
}
```

becomes:

```json
{
  "path": "src/main.rs",
  "count": 3,
  "message": "Scanning src/main.rs"
}
```

### Execution and lifecycle

- Hooks use an existing MCP connection. They don't start or reconnect servers.
- A hook can block an operation when the tool returns a blocking decision.
  Errors, missing servers, and unavailable tools don't block the operation.
- MCP tool hooks run synchronously. They don't request tool approval or trigger
  other hooks.
- The shorter hook or server timeout applies. Time spent waiting for an MCP
  elicitation response doesn't count against the timeout.
- `SessionStart` hooks can run before an MCP server is ready. If that happens,
  they don't block the session.
- `SessionEnd` doesn't support MCP tool hooks.

## Turn hooks off

Hooks are enabled by default. To turn them off in `config.toml`, set:

```toml
[features]
hooks = false
```

Use `hooks` as the feature key. `codex_hooks` still works as a
deprecated alias. Admins can force hooks off the same way in
`requirements.toml` with `[features].hooks = false`.

## Managed hooks from `requirements.toml`

Choose hooks for the environment that coordinates the task.

### Hooks with cloud orchestration

In workspaces with managed policy and remote hooks enabled, Work Cloud with local computer access and dots can call an MCP service at supported task and tool events. These calls use the `mcp_tool` handlers your workspace admin configures in [Agent Security](https://learn.chatgpt.com/docs/enterprise/agent-security#hooks-in-local-computer-access-with-work-cloud). Work Cloud without local computer access and personal accounts do not use these enterprise hooks.

Cloud orchestration supports only Global MCP hooks, even when a tool runs on a connected computer. It does not support command, prompt, or agent handlers, hooks from local configuration, plugins, or local directories, environment-scoped hooks, or `SessionEnd` MCP hooks. Local-only Work and Codex threads continue to support their existing hooks when both orchestration and execution are local.

A supported hook can block an action by returning an explicit denial. A `PreToolUse` error, timeout, or malformed response can let the tool run. MCP hooks provide only part of the audit trail. For rollout checks and audit coverage, see [Check hooks and network compatibility](https://learn.chatgpt.com/docs/enterprise/cloud-local-access#check-hooks-and-network-compatibility).

### Managed hooks in local Codex

Define local Codex hooks under `[hooks]` in `requirements.toml`.
To enforce managed hooks even for users who disabled hooks locally, pin
`[features].hooks = true` in `requirements.toml` alongside `[hooks]`. To ignore
user, project, session, and plugin hooks while still allowing administrator
managed hooks, set `allow_managed_hooks_only = true`.

```toml
allow_managed_hooks_only = true

[features]
hooks = true

[hooks]
managed_dir = "/enterprise/hooks"
windows_managed_dir = 'C:\enterprise\hooks'

[[hooks.PreToolUse]]
matcher = "^Bash$"

[[hooks.PreToolUse.hooks]]
type = "command"
command = "python3 /enterprise/hooks/pre_tool_use_policy.py"
command_windows = 'py -3 C:\enterprise\hooks\pre_tool_use_policy.py'
timeout = 30
statusMessage = "Checking managed Bash command"
```

Notes for managed hooks:

- `managed_dir` is used on macOS and Linux.
- `windows_managed_dir` is used on Windows.
- Codex doesn't distribute the scripts in `managed_dir`; your enterprise
  tooling must install and update them separately.
- Managed hook commands should use absolute script paths under the configured
  managed directory.
- `allow_managed_hooks_only = true` skips hooks from user, project, session, and
  plugin sources, but still loads managed hooks from `requirements.toml` and
  other managed config layers.

## Plugin-bundled hooks

When a plugin is enabled, Codex can load lifecycle hooks from that plugin
alongside user, project, and managed hooks.

By default, Codex looks for `hooks/hooks.json` inside the plugin root. A plugin
manifest can override that default with a `hooks` entry in
`.codex-plugin/plugin.json`. The manifest entry can be a `./`-prefixed path, an
array of `./`-prefixed paths, an inline hooks object, or an array of inline
hooks objects.

```json
{
  "name": "repo-policy",
  "hooks": "./hooks/hooks.json"
}
```

Manifest hook paths are resolved relative to the plugin root and must stay
inside that root. If a manifest defines `hooks`, Codex uses those manifest
entries instead of the default `hooks/hooks.json`.

Plugin hook commands receive these environment variables:

- `PLUGIN_ROOT` is a Codex-specific extension that points to the installed
  plugin root.
- `PLUGIN_DATA` is a Codex-specific extension that points to the plugin's
  writable data directory.
- Codex also sets `CLAUDE_PLUGIN_ROOT` and `CLAUDE_PLUGIN_DATA` for
  compatibility with existing plugin hooks.

Plugin hooks use the same event schema as other hooks. Review and trust them
before they run. In the CLI, open `/hooks`. In the desktop app, select
**Review hooks** in the composer or open **Settings > Hooks**.
If a plugin update changes a bundled script,
Codex requires a new review even if the hook definition stays the same.

## Matcher patterns

The `matcher` field is a regex string that filters when hooks fire. Use `"*"`,
`""`, or omit `matcher` entirely to match every occurrence of a supported
event.

Only some current Codex events honor `matcher`:

| Event                                 | What `matcher` filters | Notes                                                          |
| ------------------------------------- | ---------------------- | -------------------------------------------------------------- |
| `PermissionRequest`                   | tool name              | Support includes `Bash`, `apply_patch`\*, and MCP tool names   |
| `PostToolUse`                         | tool name              | See [Tool coverage](#tool-coverage)                            |
| `PostCompact`                         | compaction trigger     | Values are `manual` or `auto`                                  |
| `PreModelRequest`, `PostModelRequest` | not supported          | Both events run for each model request attempt                 |
| `PreCompact`                          | compaction trigger     | Values are `manual` or `auto`                                  |
| `PreToolUse`                          | tool name              | See [Tool coverage](#tool-coverage)                            |
| `SessionEnd`                          | end reason             | Currently only `other`                                         |
| `SessionStart`                        | start source           | Values are `startup`, `resume`, `clear`, `compact`, and `fork` |
| `SubagentStart`                       | subagent type          | Values depend on the subagent that starts                      |
| `SubagentStop`                        | subagent type          | Values depend on the subagent that stops                       |
| `UserPromptSubmit`                    | not supported          | Any configured `matcher` is ignored for this event             |
| `Stop`                                | not supported          | Any configured `matcher` is ignored for this event             |
| `Interrupt`                           | not supported          | Any configured `matcher` is ignored for this event             |

\*For `apply_patch`, `matcher` values can also use `Edit` or `Write`.

Examples:

- `Bash`
- `^apply_patch$`
- `Edit|Write`
- `mcp__filesystem__read_file`
- `mcp__filesystem__.*`
- `startup|resume|clear|compact|fork`
- `manual|auto`

### Tool coverage

`PreToolUse` and `PostToolUse` can observe more than shell and MCP calls. Most
local function tools use the same hook path, so you can match their tool name,
inspect their JSON arguments, and, for `PreToolUse`, block or rewrite the call.

| Tool path                         | `PreToolUse` | `PostToolUse` | Notes                                                                                                                    |
| --------------------------------- | ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Shell commands                    | Yes          | Yes           | Match as `Bash`.                                                                                                         |
| Unified exec (`exec_command`)     | Yes          | Yes           | Match as `Bash`. A later `write_stdin` poll can deliver the original command's `PostToolUse` when that command finishes. |
| `apply_patch`                     | Yes          | Yes           | Match as `apply_patch`, `Edit`, or `Write`.                                                                              |
| MCP tools                         | Yes          | Yes           | Match the MCP tool name, such as `mcp__filesystem__read_file`.                                                           |
| Other local function tools        | Yes          | Yes           | Match the function tool name, such as `update_plan`. `spawn_agent` also matches `Agent`.                                 |
| Hosted tools, such as `WebSearch` | No           | No            | These don't use the local function-tool hook path.                                                                       |

`write_stdin` is transport for an existing unified-exec session. It doesn't run
`PreToolUse` again when it sends input or polls a command that already passed
`PreToolUse`.

Some specialized tool paths can opt out of the default hook path. Treat tool
hooks as a useful guardrail, not a complete enforcement boundary.

## Common input fields

Every command hook receives one JSON object on `stdin`.

These are the shared fields you will usually use:

| Field             | Type             | Meaning                                                             |
| ----------------- | ---------------- | ------------------------------------------------------------------- |
| `session_id`      | `string`         | Current Codex session id. Subagent hooks use the parent session id. |
| `transcript_path` | `string \| null` | Path to the session transcript file, if any                         |
| `cwd`             | `string`         | Working directory for the session                                   |
| `hook_event_name` | `string`         | Current hook event name                                             |
| `model`           | `string`         | Codex-specific extension. Active model slug                         |

Turn-scoped hooks list `turn_id` as a Codex-specific extension in their
event-specific tables.

`SessionStart`, `PreToolUse`, `PermissionRequest`, `PostToolUse`,
`UserPromptSubmit`, `SubagentStart`, `SubagentStop`, `Stop`, and `Interrupt` also include
`permission_mode`, which describes the current permission mode as `default`,
`acceptEdits`, `plan`, `dontAsk`, or `bypassPermissions`.

`transcript_path` points to a chat transcript for convenience, but the
transcript format isn't a stable interface for hooks and may change over time.

If you need the full wire format, see [Schemas](#schemas).

## Common output fields

`SessionStart`, `PreCompact`, `PostCompact`, `UserPromptSubmit`,
`SubagentStop`, and `Stop` support these shared JSON fields. `SubagentStart`
accepts the same shape for `systemMessage` and hook-specific context, but
`continue: false` doesn't stop the subagent:

```json
{
  "continue": true,
  "stopReason": "optional",
  "systemMessage": "optional",
  "suppressOutput": false
}
```

| Field            | Effect                                          |
| ---------------- | ----------------------------------------------- |
| `continue`       | If `false`, marks that hook run as stopped      |
| `stopReason`     | Recorded as the reason for stopping             |
| `systemMessage`  | Surfaced as a warning in the UI or event stream |
| `suppressOutput` | Parsed today but not yet implemented            |

Exit `0` with no output is treated as success and Codex continues.

`PreToolUse` and `PermissionRequest` support `systemMessage`, but `continue`,
`stopReason`, and `suppressOutput` aren't currently supported for those events.
If a `PreToolUse` hook returns one of those unsupported fields, Codex marks
that hook run as failed, reports the error, and continues the tool call.

`PostToolUse` supports `systemMessage`, `continue: false`, and `stopReason`.
`suppressOutput` is parsed but not currently supported for that event.

### Large hook output

By default, Codex limits each model-visible hook-output message to roughly
2,500 tokens. If a hook returns more, Codex saves the full text under
`<temp_dir>/hook_outputs/<session_id>/<uuid>.txt` and gives the model a
head-and-tail preview with the saved-file path. This behavior is called
**spilling**: Codex stores oversized output on disk and replaces it with a
shorter, model-visible preview. If the file can't be written, the model still
receives a truncated preview.

Keep hook and plugin context concise. Context from multiple hooks and plugins
  adds up and can degrade model performance. Raising `additionalContextLimit`
  increases that risk. Avoid setting the limit to `0` unless the hook enforces a
  strict output cap; otherwise, a single hook can consume the entire context
  window.

For any command hook that returns `additionalContext`, set
`additionalContextLimit` on the handler to customize the approximate token
threshold:

```json
{
  "type": "command",
  "command": "python3 ~/.codex/hooks/session_start.py",
  "additionalContextLimit": 5000
}
```

Omit `additionalContextLimit` to use the default `2500`-token threshold. Use a
positive integer to select a different threshold, or `0` to pass the handler's
complete additional context directly to the model. Codex evaluates each
matching handler independently. For events that can't produce additional
context, Codex ignores `additionalContextLimit` and reports a configuration
warning.

The setting applies only to `additionalContext`. Tool feedback and continuation
prompts keep the default limit.

Because oversized output can be written to disk, avoid returning secrets or
other sensitive data in hook output.

## Run hooks in the background

By default, Codex waits for a command hook to finish before continuing the
operation that triggered it. Set `async` to `true` to run a command hook in the
background while Codex continues.

### Configure a background hook

Add `"async": true` to a command handler in `hooks.json`:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "python3 ~/.codex/hooks/post_tool_use.py",
            "async": true,
            "timeout": 120
          }
        ]
      }
    ]
  }
}
```

For an inline hook in `config.toml`, set `async = true`:

```toml
[[hooks.PostToolUse]]
matcher = "Bash"

[[hooks.PostToolUse.hooks]]
type = "command"
command = "python3 ~/.codex/hooks/post_tool_use.py"
async = true
timeout = 120
```

Background hooks use the same input, matcher, trust review, timeout, and
[large-output handling](#large-hook-output) as synchronous command hooks. As
with other command hooks, `timeout` is measured in seconds and defaults to
`600`. `Interrupt` hooks use a one-second default and a three-second maximum,
including when they run in the background.

### How background hooks run

When a background hook finishes, Codex delivers supported informational output
at the next safe point in the conversation:

- If a turn is active, Codex waits for the current model request and tool calls
  to finish, then makes the output available to the next model request in that
  turn.
- If no turn is active, Codex waits until the next user turn. Finishing a
  background hook doesn't start a new turn.

Use the same event-specific JSON output as a synchronous hook. Codex adds
`additionalContext` to the model's context and surfaces `systemMessage` as a
warning.

Background hooks can't block, approve, rewrite, or otherwise control the
  operation that triggered them. Use synchronous hooks for tool policies,
  permission decisions, prompt rejection, or turn continuation.

### Limitations

- Codex runs up to eight background hooks concurrently per session. Additional
  hooks wait until a running hook finishes.
- Each matching invocation runs independently, and background hooks can finish
  in a different order than they started.
- When the session ends, Codex cancels unfinished background hooks and discards
  output that hasn't been delivered.
- `SessionEnd` hooks always run synchronously.

## Hooks

### SessionStart

`matcher` is applied to `source` for this event.

Fields in addition to [Common input fields](#common-input-fields):

| Field    | Type     | Meaning                                                                     |
| -------- | -------- | --------------------------------------------------------------------------- |
| `source` | `string` | How the session started: `startup`, `resume`, `clear`, `compact`, or `fork` |

A forked thread uses `source: "fork"`. Resuming a thread with supplied history
still uses `source: "resume"`.

Plain text on `stdout` is added as extra developer context.

JSON on `stdout` supports [Common output fields](#common-output-fields) and
this hook-specific shape:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "SessionStart",
    "additionalContext": "Load the workspace conventions before editing."
  }
}
```

That `additionalContext` text is added as extra developer context.

After Codex compacts a root session, `SessionStart` hooks that match
`source: "compact"` run before the next model request. This also applies when
automatic compaction happens in the middle of a turn: Codex delivers the hook's
additional context to the immediate continuation instead of waiting for a
later user turn. If the hook returns `continue: false`, Codex ends the turn
without sending another model request.

### SessionEnd

`SessionEnd` lets you run a command when a session ends, such as saving final
notes or cleaning up files. It runs for the main thread when you archive or
delete a conversation that's still open, when Codex closes normally, or after a
conversation has been idle and isn't open in any connected client for 30
minutes. It won't run for subagents.

Switching away from a conversation or calling `thread/unsubscribe` doesn't end
the session right away, so it won't immediately run `SessionEnd`. Your hook can
still read the session transcript while it runs.

`matcher` filters `reason` for this event. For now, `reason` is always `other`.
You can omit `matcher` or use `other` to run on every `SessionEnd` event.

Fields in addition to [Common input fields](#common-input-fields):

| Field    | Type     | Meaning                        |
| -------- | -------- | ------------------------------ |
| `reason` | `string` | Why the session ended: `other` |

For example, a `SessionEnd` command receives:

```json
{
  "session_id": "thr_123",
  "transcript_path": "/workspace/.codex/rollout.jsonl",
  "cwd": "/workspace",
  "hook_event_name": "SessionEnd",
  "reason": "other"
}
```

`SessionEnd` hooks always run synchronously, even when `async` is `true`. They
are advisory, so their output won't steer Codex or keep the thread open. If a
command times out or exits with an error, Codex reports it as a hook failure.

### SubagentStart

`matcher` is applied to `agent_type` for this event.

Fields in addition to [Common input fields](#common-input-fields):

| Field             | Type     | Meaning                                        |
| ----------------- | -------- | ---------------------------------------------- |
| `turn_id`         | `string` | Codex-specific extension. Active Codex turn id |
| `agent_id`        | `string` | Identifier for the subagent                    |
| `agent_type`      | `string` | Subagent type or profile                       |
| `permission_mode` | `string` | Current permission mode                        |

Plain text on `stdout` is added as extra developer context for the subagent.

JSON on `stdout` supports `systemMessage` and this hook-specific shape:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "SubagentStart",
    "additionalContext": "Review the repository test conventions first."
  }
}
```

That `additionalContext` text is added as extra developer context for the
subagent. `continue: false` is parsed for compatibility, but it doesn't stop the
subagent from starting.

### PreToolUse

`PreToolUse` can intercept Bash, file edits performed through `apply_patch`,
MCP tool calls, and other local function tools. See [Tool
coverage](#tool-coverage) for the supported paths and exceptions.

`matcher` is applied to `tool_name` and matcher aliases. For file edits through
`apply_patch`, `matcher` values can use `apply_patch`, `Edit`, or `Write`; hook input
still reports `tool_name: "apply_patch"`.

Fields in addition to [Common input fields](#common-input-fields):

| Field         | Type         | Meaning                                                                                                                          |
| ------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `turn_id`     | `string`     | Codex-specific extension. Active Codex turn id                                                                                   |
| `tool_name`   | `string`     | Canonical hook tool name, such as `Bash`, `apply_patch`, or an MCP name like `mcp__fs__read`                                     |
| `tool_use_id` | `string`     | Tool-call id for this invocation                                                                                                 |
| `tool_input`  | `JSON value` | Tool-specific input. `Bash` and `apply_patch` use `tool_input.command`. MCP and other local function tools send their arguments. |

Plain text on `stdout` is ignored.

JSON on `stdout` can use `systemMessage`. To deny a supported tool call, return
this hook-specific shape:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Destructive command blocked by hook."
  }
}
```

Codex also accepts this older block shape:

```json
{
  "decision": "block",
  "reason": "Destructive command blocked by hook."
}
```

You can also use exit code `2` and write the blocking reason to `stderr`.

To add model-visible context without blocking, return
`hookSpecificOutput.additionalContext`:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "additionalContext": "The pending command touches generated files."
  }
}
```

To rewrite a supported tool call without blocking, return
`permissionDecision: "allow"` with `updatedInput`:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "allow",
    "updatedInput": {
      "command": "echo rewritten"
    }
  }
}
```

For Bash commands and `apply_patch`, `updatedInput` must include a string
`command` field. For MCP and other local function tools, `updatedInput` is the
replacement arguments object. Return `updatedInput` only with
`permissionDecision: "allow"`; other `updatedInput` shapes are reported as
errors.

`permissionDecision: "ask"`, legacy `decision: "approve"`, `continue: false`,
`stopReason`, and `suppressOutput` are parsed but not supported yet. Codex marks
the hook run as failed, reports the error, and continues the tool call.

### PermissionRequest

`PermissionRequest` runs when Codex is about to ask for approval, such as a
shell escalation or managed-network approval. It can allow the request, deny
the request, or decline to decide and let the normal approval prompt continue.
It doesn't run for commands that don't need approval.

`matcher` is applied to `tool_name` and matcher aliases. Current canonical
values include `Bash`, `apply_patch`, and MCP tool names such as
`mcp__server__tool`; `apply_patch` also matches `Edit` and `Write`.

Fields in addition to [Common input fields](#common-input-fields):

| Field                    | Type             | Meaning                                                                                                        |
| ------------------------ | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `turn_id`                | `string`         | Codex-specific extension. Active Codex turn id                                                                 |
| `tool_name`              | `string`         | Canonical hook tool name, such as `Bash`, `apply_patch`, or an MCP name like `mcp__fs__read`                   |
| `tool_input`             | `JSON value`     | Tool-specific input. `Bash` and `apply_patch` use `tool_input.command` while MCP tools send all the arguments. |
| `tool_input.description` | `string \| null` | Human-readable approval reason, when Codex has one                                                             |

Plain text on `stdout` is ignored.

Some tool inputs may include a human-readable description, but don't rely on a
`tool_input.description` field for every tool.

To approve the request, return:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PermissionRequest",
    "decision": {
      "behavior": "allow"
    }
  }
}
```

To deny the request, return:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PermissionRequest",
    "decision": {
      "behavior": "deny",
      "message": "Blocked by repository policy."
    }
  }
}
```

If multiple matching hooks return decisions, any `deny` wins. Otherwise, an
`allow` lets the request proceed without surfacing the approval prompt. If no
matching hook decides, Codex uses the normal approval flow.

Don't return `updatedInput`, `updatedPermissions`, or `interrupt` for
`PermissionRequest`; those fields are reserved for future behavior and fail
closed today.

### PostToolUse

`PostToolUse` runs after supported tools produce output, including Bash,
`apply_patch`, MCP tool calls, and other local function tools. For Bash, it
also runs after commands that exit with a non-zero status. It can't undo side
effects from a tool that already ran. See [Tool coverage](#tool-coverage) for
the supported paths and exceptions.

`matcher` is applied to `tool_name` and matcher aliases. For file edits through
`apply_patch`, `matcher` values can use `apply_patch`, `Edit`, or `Write`; hook input
still reports `tool_name: "apply_patch"`.

Fields in addition to [Common input fields](#common-input-fields):

| Field           | Type         | Meaning                                                                                                                          |
| --------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `turn_id`       | `string`     | Codex-specific extension. Active Codex turn id                                                                                   |
| `tool_name`     | `string`     | Canonical hook tool name, such as `Bash`, `apply_patch`, or an MCP name like `mcp__fs__read`                                     |
| `tool_use_id`   | `string`     | Tool-call id for this invocation                                                                                                 |
| `tool_input`    | `JSON value` | Tool-specific input. `Bash` and `apply_patch` use `tool_input.command`. MCP and other local function tools send their arguments. |
| `tool_response` | `JSON value` | Tool-specific output. MCP tools send the MCP call result. Other local function tools normally send their model-facing output.    |

Plain text on `stdout` is ignored.

JSON on `stdout` can use `systemMessage` and this hook-specific shape:

```json
{
  "decision": "block",
  "reason": "The Bash output needs review before continuing.",
  "hookSpecificOutput": {
    "hookEventName": "PostToolUse",
    "additionalContext": "The command updated generated files."
  }
}
```

That `additionalContext` text is added as extra developer context.

For this event, `decision: "block"` doesn't undo the completed Bash command.
Instead, Codex records the feedback, replaces the tool result with that
feedback, and continues the model from the hook-provided message.

You can also use exit code `2` and write the feedback reason to `stderr`.

To stop normal processing of the original tool result after the command has
already run, return `continue: false`. Codex will replace the tool result with
your feedback or stop text and continue from there.

`updatedMCPToolOutput` and `suppressOutput` are parsed but not supported yet.
Codex marks the hook run as failed, reports the error, and continues normal
processing of the tool result.

#### Tool calls from code mode

When a model uses code mode to call a tool from JavaScript, hook decisions apply
to that nested call. `PreToolUse` can stop the tool before it runs or rewrite
its input. A blocking `PostToolUse` can't undo the tool's side effects, but it
can keep the original result from reaching the running script.

| Hook result                                                      | What code mode sees                                                                                    |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `PreToolUse` blocks                                              | The tool promise rejects before the tool runs.                                                         |
| `PreToolUse` returns `updatedInput`                              | The tool runs with the rewritten input and the promise resolves with that result.                      |
| `PostToolUse` returns `decision: "block"` or exits with code `2` | The tool runs, then the promise rejects with the hook reason.                                          |
| `PostToolUse` returns `continue: false`                          | Codex uses the hook feedback for the model-visible result, but doesn't reject the nested tool promise. |

### PreModelRequest and PostModelRequest

Use these hooks to log model requests, including retries within the same turn.
`PreModelRequest` runs before each attempt. `PostModelRequest` reports the
outcome. Both receive the model and `turn_id`, plus `agent_id` and `agent_type`
when available. Hook output is diagnostic only. It can't change the model's
context or block a request.

`PostModelRequest` includes three additional fields:

| Field         | Meaning                                                        |
| ------------- | -------------------------------------------------------------- |
| `status`      | `completed`, `failed`, or `cancelled`.                         |
| `error`       | Error message when available, otherwise `null`.                |
| `token_usage` | Token counts for the attempt when available, otherwise `null`. |

### PreCompact

`PreCompact` runs before Codex compacts the chat. `matcher` is applied
to `trigger`, whose values are `manual` and `auto`.

Fields in addition to [Common input fields](#common-input-fields):

| Field     | Type     | Meaning                                        |
| --------- | -------- | ---------------------------------------------- |
| `turn_id` | `string` | Codex-specific extension. Active Codex turn id |
| `trigger` | `string` | What triggered compaction: `manual` or `auto`  |

Plain text on `stdout` is ignored.

JSON on `stdout` supports [Common output fields](#common-output-fields). If a
matching `PreCompact` hook returns `continue: false`, Codex stops before
compacting.

### PostCompact

`PostCompact` runs after Codex compacts the chat. `matcher` is applied
to `trigger`, whose values are `manual` and `auto`.

Fields in addition to [Common input fields](#common-input-fields):

| Field     | Type     | Meaning                                        |
| --------- | -------- | ---------------------------------------------- |
| `turn_id` | `string` | Codex-specific extension. Active Codex turn id |
| `trigger` | `string` | What triggered compaction: `manual` or `auto`  |

Plain text on `stdout` is ignored.

JSON on `stdout` supports [Common output fields](#common-output-fields). If a
matching `PostCompact` hook returns `continue: false`, Codex stops after
compacting.

### UserPromptSubmit

`matcher` isn't currently used for this event.

Fields in addition to [Common input fields](#common-input-fields):

| Field     | Type     | Meaning                                        |
| --------- | -------- | ---------------------------------------------- |
| `turn_id` | `string` | Codex-specific extension. Active Codex turn id |
| `prompt`  | `string` | User prompt that's about to be sent            |

Plain text on `stdout` is added as extra developer context.

JSON on `stdout` supports [Common output fields](#common-output-fields) and
this hook-specific shape:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "UserPromptSubmit",
    "additionalContext": "Ask for a clearer reproduction before editing files."
  }
}
```

That `additionalContext` text is added as extra developer context.

To block the prompt, return:

```json
{
  "decision": "block",
  "reason": "Ask for confirmation before doing that."
}
```

You can also use exit code `2` and write the blocking reason to `stderr`.

### SubagentStop

`matcher` is applied to `agent_type` for this event.

Fields in addition to [Common input fields](#common-input-fields):

| Field                    | Type             | Meaning                                         |
| ------------------------ | ---------------- | ----------------------------------------------- |
| `turn_id`                | `string`         | Codex-specific extension. Active Codex turn id  |
| `agent_id`               | `string`         | Identifier for the subagent                     |
| `agent_type`             | `string`         | Subagent type or profile                        |
| `agent_transcript_path`  | `string \| null` | Path to the subagent transcript file, if any    |
| `stop_hook_active`       | `boolean`        | Whether this subagent was already continued     |
| `last_assistant_message` | `string \| null` | Latest subagent assistant message, if available |

`SubagentStop` expects JSON on `stdout` when it exits `0`. Plain text output is
invalid for this event.

JSON on `stdout` supports [Common output fields](#common-output-fields). To ask
Codex to continue the subagent flow, return:

```json
{
  "decision": "block",
  "reason": "Run one more focused pass inside the subagent."
}
```

You can also use exit code `2` and write the continuation reason to `stderr`.

If any matching `SubagentStop` hook returns `continue: false`, that takes
precedence over continuation decisions from other matching `SubagentStop`
hooks.

### Stop

`matcher` isn't currently used for this event.

Fields in addition to [Common input fields](#common-input-fields):

| Field                    | Type             | Meaning                                           |
| ------------------------ | ---------------- | ------------------------------------------------- |
| `turn_id`                | `string`         | Codex-specific extension. Active Codex turn id    |
| `stop_hook_active`       | `boolean`        | Whether this turn was already continued by `Stop` |
| `last_assistant_message` | `string \| null` | Latest assistant message text, if available       |

`Stop` expects JSON on `stdout` when it exits `0`. Plain text output is invalid
for this event.

JSON on `stdout` supports [Common output fields](#common-output-fields). To keep
Codex going, return:

```json
{
  "decision": "block",
  "reason": "Run one more pass over the failing tests."
}
```

You can also use exit code `2` and write the continuation reason to `stderr`.

For this event, `decision: "block"` doesn't reject the turn. Instead, it tells
Codex to continue and automatically creates a new continuation prompt that acts
as a new user prompt, using your `reason` as that prompt text.

If any matching `Stop` hook returns `continue: false`, that takes precedence
over continuation decisions from other matching `Stop` hooks.

### Interrupt

`Interrupt` runs when you interrupt an active turn on the main thread. Use it
to record the interruption or clean up work started by a hook. It doesn't run
for idle threads or subagents, and any configured `matcher` is ignored.

In addition to [Common input fields](#common-input-fields), the event includes
`turn_id`, the interrupted turn's id, and `permission_mode`.

Command hooks default to a one-second timeout. Configured timeouts are
limited to one through three seconds. Hook output can't prevent the
interruption or restart the turn. Exit `0` with no output, or return JSON with
an optional `systemMessage` to surface a warning. Plain text output is invalid
for this event.

```json
{ "systemMessage": "Saved the interrupted turn to the local audit log." }
```

## Schemas

The linked `main` branch schemas may include hook fields that are not in the
  current release. Use this page as the release behavior reference.

If you need the exact current wire format, see the generated schemas in the
[Codex GitHub repository](https://github.com/openai/codex/tree/main/codex-rs/hooks/schema/generated).

### Plain-text aliases

- string | null