# Subagents

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

ChatGPT Work and Codex can run subagent workflows by spawning specialized
agents in parallel and then collecting their results in one response. This can
be particularly helpful for complex tasks that are highly parallel, such as
codebase exploration or implementing a multi-step feature plan.

In local Codex clients, you can also define custom agents with different model
configurations and instructions for different tasks.

## Availability

<ContentModeSwitch group="codex-surface" id="web">

ChatGPT Work exposes subagent workflows and activity to eligible accounts.

</ContentModeSwitch>

<a id="custom-agents"></a>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

Current Codex releases enable subagent workflows by default. Subagent activity
appears in the ChatGPT desktop app, Codex CLI, and the IDE extension.

</ContentModeSwitch>

Because each subagent does its own model and tool work, subagent workflows
consume more tokens than comparable single-agent runs.

<ContentModeSwitch group="codex-surface" id="web">

In ChatGPT Work, ask ChatGPT to delegate independent work to subagents. The
agents run in ChatGPT's hosted environment, and the chat shows their
activity and results. At most intelligence levels, ask for delegation
explicitly. With Ultra, ChatGPT can proactively delegate work when parallel
agents would materially improve speed or quality.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

Ask Codex in an app chat to delegate independent parts of the work to
subagents. Current local Codex releases delegate when you ask directly or when
applicable `AGENTS.md` or skill instructions request it. The app surfaces each
subagent thread so you can inspect its work and the summary returned to the main
chat.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

Ask Codex in an interactive CLI session to use subagents. Codex can also follow
applicable `AGENTS.md` or skill instructions that request delegation. Use
`/subagents` to inspect and switch between agent threads while they run. The main
thread collects the subagent results into its final response.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="ide">

Ask Codex in an IDE chat to delegate independent parts of the work to subagents.
Codex can also follow applicable `AGENTS.md` or skill instructions that request
delegation. When the background-agent UI is available, active subagents appear
above the composer. Expand the panel to see their status, stop all active
subagents, or open an individual subagent thread.

</ContentModeSwitch>

## Why subagent workflows help

Even with large context windows, models have limits. If you flood the main chat (where you're defining requirements, constraints, and decisions) with noisy intermediate output such as exploration notes, test logs, stack traces, and command output, the session can become less reliable over time.

This is often described as:

- **Context pollution**: useful information gets buried under noisy intermediate output.
- **Context rot**: performance degrades as the chat fills up with less relevant details.

For background, see the Chroma writeup on [context rot](https://research.trychroma.com/context-rot).

Subagent workflows help by moving noisy work off the main thread:

- Keep the **main agent** focused on requirements, decisions, and final outputs.
- Run specialized **subagents** in parallel for exploration, tests, or log analysis.
- Return **summaries** from subagents instead of raw intermediate output.

They can also save time when the work can run independently in parallel, and
they make larger-shaped tasks more tractable by breaking them into bounded
pieces. For example, Codex can split analysis of a multi-million-token
document into smaller problems and return distilled takeaways to the main
thread.

As a starting point, use parallel agents for read-heavy tasks such as
exploration, tests, triage, and summarization. Be more careful with parallel
write-heavy workflows, because agents editing code at once can create
conflicts and increase coordination overhead.

## Core terms

Codex uses a few related terms in subagent workflows:

- **Subagent workflow**: A workflow where Codex runs parallel agents and combines their results.
- **Subagent**: A delegated agent that Codex starts to handle a specific task.
- **Agent thread**: The thread where a subagent does its work. Supported clients let you open these threads to inspect progress or results.

## Triggering subagent workflows

<ContentModeSwitch group="codex-surface" id="web">

At most intelligence levels, ask for subagents or parallel agent work
directly. Ultra enables proactive delegation, so ChatGPT can delegate suitable
independent work without a separate request.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

Ask for subagents or parallel agent work directly. Codex can also delegate when
applicable project or skill instructions request it.

</ContentModeSwitch>

In practice, manual triggering means using direct instructions such as
"spawn two agents," "delegate this work in parallel," or "use one agent per
point." Subagent workflows consume more tokens than comparable single-agent runs
because each subagent does its own model and tool work.

A good subagent prompt should explain how to divide the work, whether Codex
should wait for all agents before continuing, and what summary or output to
return.

```text
Review this branch with parallel subagents. Spawn one subagent for security risks, one for test gaps, and one for maintainability. Wait for all three, then summarize the findings by category with file references.
```

## Choosing models and reasoning

Different agents need different model and reasoning settings.

<ContentModeSwitch group="codex-surface" id="web">

In ChatGPT Work, choose a model and an intelligence level from the composer.
Available intelligence levels can include **Light**, **Medium**, **High**,
**Extra High**, and **Max**, depending on the selected model. **Ultra** is
available only to eligible accounts and supported models. It uses maximum
reasoning and lets ChatGPT proactively delegate suitable work to subagents.

At other intelligence levels, ask for subagents explicitly when you want work
delegated in parallel.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

If you don't configure a subagent model or `model_reasoning_effort`, the
subagent inherits the parent agent's model and reasoning effort. If an explicit
spawn request or an `[agents]` default selects a model without an
explicit or configured reasoning effort, the subagent uses that model's default
reasoning effort. To balance intelligence, speed, and price for each task,
request a specific model or reasoning effort in your prompt,
configure `[agents]` defaults in `config.toml`, or set `model` and
`model_reasoning_effort` directly in the custom agent file.
For example, use `gpt-6-luna` for fast scans or a higher-effort `gpt-6.1-sol` configuration for more demanding reasoning.

For most tasks in Codex, start with 
  `gpt-6.1-sol` when your
  signed-in account or workspace has [access](https://learn.chatgpt.com/docs/models#gpt-6.1-sol).
  Otherwise, choose a model available to you. Use `gpt-6-luna` when you want a
  faster, lower-cost option for lighter subagent work.

### Model choice

- **`gpt-6.1-sol`**: Start here for demanding agents. Use it for ambiguous, multi-step work that needs planning, tool use, validation, and follow-through across a larger context.
- **`gpt-6-luna`**: Use for fast, narrowly scoped agents handling clear, repeatable, or high-volume work.

### Reasoning effort (`model_reasoning_effort`)

For GPT-6.1 Sol, use a reasoning effort supported by your client and selected
model. For explicit model settings, start with `high` for GPT-6 Luna or `low`
for GPT-6 Astra. Adjust for the task using a level the selected model supports.

- **`ultra`**: Use for the deepest reasoning when the selected model supports
  it.
- **`max`** and **`xhigh`**: Use for especially demanding reasoning when the
  selected model supports these levels.
- **`high`**: Use when an agent needs to trace complex logic, check assumptions, or work through edge cases (for example, reviewer or security-focused agents).
- **`medium`**: Balances speed and depth.
- **`low`**: Use when the task is straightforward and speed matters most.

Higher reasoning effort increases response time and token usage, but it can improve quality for complex work. For details, see [Models](https://learn.chatgpt.com/docs/models), [Config basics](https://learn.chatgpt.com/docs/config-file/config-basic), and [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference).

</ContentModeSwitch>

## Orchestration and thread controls

ChatGPT or Codex handles orchestration across agents, including spawning new
subagents, routing follow-up instructions, waiting for results, and closing
agent threads.

When many agents are running, Codex waits until all requested results are
available, then returns a consolidated response.

<ContentModeSwitch group="codex-surface" id="web">

At most intelligence levels, ChatGPT spawns agents after a direct request. With
Ultra, ChatGPT can also delegate proactively when parallel work is useful.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

Current local Codex releases spawn agents after a direct request or applicable
project or skill instruction.

</ContentModeSwitch>

To see it in action, try the following prompt on your project:

```text
I would like to review the following points on the current PR (this branch vs main). Spawn one agent per point, wait for all of them, and summarize the result for each point.
1. Security issue
2. Code quality
3. Bugs
4. Race
5. Test flakiness
6. Maintainability of the code
```

## Managing subagents

<ContentModeSwitch group="codex-surface" id="web">

Open **Subagents** to see read-only **Active** and **Done** lists. Select a
completed subagent to inspect its details and result. The web sidebar reports
subagent activity; it doesn't provide controls to stop or steer an individual
subagent.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

- Open a subagent thread from the activity shown in the main thread to inspect
  its work.
- Ask Codex directly to steer a running subagent, stop it, or close completed
  subagent threads.



> Illustration: Codex desktop chat showing two subagents working in parallel.





> Illustration: Codex desktop Subagents panel with no active subagents and three completed audits.



</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

- Use `/subagents` in the CLI to switch between active agent threads and inspect the ongoing thread.
- Ask Codex directly to steer a running subagent, stop it, or close completed agent threads.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="ide">

- When the background-agent panel is available, expand it to inspect status,
  stop active subagents, or open a subagent thread.
- Ask Codex directly to steer a running subagent, stop it, or close completed
  subagent threads.

</ContentModeSwitch>

## Approvals and sandbox controls

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

Subagents inherit your current sandbox policy.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="web">

ChatGPT Work runs subagents in its hosted environment and doesn't expose a
local Codex sandbox or approval-mode control. Subagents use the tools available
to the parent chat. Website and connector permissions remain
tool-specific.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="app">

Subagents inherit the permission mode selected beneath the composer. Choose the
permission mode for the parent turn before you ask Codex to delegate work.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="cli">

In interactive CLI sessions, approval requests can surface from inactive agent
threads even while you are looking at the main thread. The approval overlay
shows the source thread label, and you can press `o` to open that thread before
you approve, reject, or answer the request.

In non-interactive flows, or whenever a run can't surface a fresh approval, an
action that needs new approval fails and Codex surfaces the error back to the
parent workflow.

Subagents inherit the parent turn's current sandbox and approval settings,
including changes made with `/permissions` or `--yolo`. A custom agent file
can't replace those settings.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" id="ide">

Subagents inherit the permission mode selected beneath the composer. Choose
the permission mode for the parent turn before you ask Codex to delegate work.

</ContentModeSwitch>

<ContentModeSwitch group="codex-surface" ids="app,cli,ide">

Set sandbox and approval controls on the parent session. Custom agent
instructions can ask an agent to avoid edits, but they don't create a separate
read-only sandbox.

## Custom agents

Codex ships with built-in agents:

- `default`: general-purpose fallback agent.
- `worker`: execution-focused agent for implementation and fixes.
- `explorer`: read-heavy codebase exploration agent.

To define your own custom agents, add standalone TOML files under
`~/.codex/agents/` for personal agents or `.codex/agents/` for project-scoped
agents.

Each file defines one custom agent. Custom agents can change model settings and
instructions or disable supported capabilities. They inherit the parent's
permissions, provider, and MCP servers; a custom agent file can't override those
settings.

Every standalone custom agent file must define:

- `name`
- `description`
- `developer_instructions`

If a custom agent file sets `model` or `model_reasoning_effort`, the value in
the file takes precedence. Before applying the file, Codex resolves each setting
from an explicit spawn value, then the corresponding `[agents]` default, then
the parent's value. If an explicit spawn request or an `[agents]` default
selects a model and neither supplies a reasoning effort, Codex uses
that model's default effort. A custom agent file that sets only `model`
preserves this previously resolved effort. Set `model_reasoning_effort` in the
file too if the selected model doesn't support that effort or you want a
different one. Skills inherit from the parent, and a custom agent can disable
individual skills with `skills.config`.

### Global settings

Global subagent settings still live under `[agents]` in your [configuration](https://learn.chatgpt.com/docs/config-file/config-basic#configuration-precedence).

| Field                                       | Type    | Required | Purpose                                                             |
| ------------------------------------------- | ------- | :------: | ------------------------------------------------------------------- |
| `agents.enabled`                            | boolean |    No    | Enable or disable multi-agent tools.                                |
| `agents.max_concurrent_threads_per_session` | number  |    No    | Cap concurrently open spawned-agent threads, excluding the primary. |
| `agents.default_subagent_model`             | string  |    No    | Set the default model for spawned agents.                           |
| `agents.default_subagent_reasoning_effort`  | string  |    No    | Set the default reasoning effort for spawned agents.                |
| `agents.interrupt_message`                  | boolean |    No    | Record a model-visible message when an agent turn is interrupted.   |

**Notes:**

- `agents.enabled` defaults to `true`. Set it to `false` to disable multi-agent tools.
- When you leave `agents.max_concurrent_threads_per_session` unset, Codex chooses the default. Existing configurations can keep using `agents.max_threads` as a legacy alias.
- Explicit spawn values override `agents.default_subagent_model` and `agents.default_subagent_reasoning_effort`.
- `agents.interrupt_message` defaults to `true`. Set it to `false` to omit the model-visible interruption message from the agent's context.
- If a custom agent name matches a built-in agent such as `explorer`, your custom agent takes precedence.

### Custom agent file schema

| Field                    | Type   | Required | Purpose                                                         |
| ------------------------ | ------ | :------: | --------------------------------------------------------------- |
| `name`                   | string |   Yes    | Agent name Codex uses when spawning or referring to this agent. |
| `description`            | string |   Yes    | Human-facing guidance for when Codex should use this agent.     |
| `developer_instructions` | string |   Yes    | Core instructions that define the agent's behavior.             |

Use `model`, `model_reasoning_effort`, `model_reasoning_summary`, and
`model_verbosity` to customize model behavior.
See the [configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference) for their
accepted values.

To reduce a custom agent's capabilities, set supported feature keys to `false`:
`features.shell_tool`, `features.apps`, `features.plugins`,
`features.memories`, or `features.request_permissions_tool`. Disable individual
skills with `skills.config` or bundled skills with
`skills.bundled.enabled = false`. Set `skills.include_instructions = false` to
omit the automatic skills instructions block. Managed requirements still apply.

Other session settings, including `sandbox_mode`, `approval_policy`,
`model_provider`, and `mcp_servers`, don't override the parent configuration
when placed in a custom agent file. The service tier also follows the root
session's preference. Configure MCP servers in the parent session so the agent
can use them.

Codex identifies the custom agent by its `name` field. Matching the filename to
the agent name is the simplest convention, but the `name` field is the source
of truth.

### Example custom agents

The best custom agents are narrow and opinionated. Give each one clear job, a
tool surface that matches that job, and instructions that keep it from
drifting into adjacent work.

The examples use [GPT-6.1 Sol](https://learn.chatgpt.com/docs/models#gpt-6.1-sol) where your signed-in
account or workspace has access. If it isn't available, choose a model you can
use.

#### Example 1: PR review

This pattern splits review across three focused custom agents:

- `pr_explorer` maps the codebase and gathers evidence.
- `reviewer` looks for correctness, security, and test risks.
- `docs_researcher` checks framework or API documentation through a dedicated MCP server.

Project config (`.codex/config.toml`):

```toml
[agents]
max_concurrent_threads_per_session = 8

[mcp_servers.openaiDeveloperDocs]
url = "https://developers.openai.com/mcp"
```

`.codex/agents/pr-explorer.toml`:

```toml
name = "pr_explorer"
description = "Read-only codebase explorer for gathering evidence before changes are proposed."
model = "gpt-6-luna"
model_reasoning_effort = "high"
developer_instructions = """
Stay in exploration mode.
Do not edit files.
Trace the real execution path, cite files and symbols, and avoid proposing fixes unless the parent agent asks for them.
Prefer fast search and targeted file reads over broad scans.
"""
```

`.codex/agents/reviewer.toml`:

```toml
name = "reviewer"
description = "PR reviewer focused on correctness, security, and missing tests."
model = "gpt-6.1-sol"
model_reasoning_effort = "medium"
developer_instructions = """
Review code like an owner.
Do not edit files.
Prioritize correctness, security, behavior regressions, and missing test coverage.
Lead with concrete findings, include reproduction steps when possible, and avoid style-only comments unless they hide a real bug.
"""
```


`.codex/agents/docs-researcher.toml`:

```toml
name = "docs_researcher"
description = "Documentation specialist that uses the docs MCP server to verify APIs and framework behavior."
model = "gpt-6-luna"
model_reasoning_effort = "high"
developer_instructions = """
Use the docs MCP server to confirm APIs, options, and version-specific behavior.
Return concise answers with links or exact references when available.
Do not make code changes.
"""

```

This setup works well for prompts like:

```text
Review this branch against main. Have pr_explorer map the affected code paths, reviewer find real risks, and docs_researcher verify the framework APIs that the patch relies on.
```

#### Example 2: Frontend integration debugging

This pattern is useful for UI regressions, flaky browser flows, or integration bugs that cross application code and the running product.

Project config (`.codex/config.toml`):

```toml
[agents]
max_concurrent_threads_per_session = 6

[mcp_servers.chrome_devtools]
url = "http://localhost:3000/mcp"
startup_timeout_sec = 20
```

`.codex/agents/code-mapper.toml`:

```toml
name = "code_mapper"
description = "Read-only codebase explorer for locating the relevant frontend and backend code paths."
model = "gpt-6-luna"
model_reasoning_effort = "high"
developer_instructions = """
Map the code that owns the failing UI flow.
Do not edit files.
Identify entry points, state transitions, and likely files before the worker starts editing.
"""
```

`.codex/agents/browser-debugger.toml`:

```toml
name = "browser_debugger"
description = "UI debugger that uses browser tooling to reproduce issues and capture evidence."
model = "gpt-6.1-sol"
model_reasoning_effort = "medium"
developer_instructions = """
Reproduce the issue in the browser, capture exact steps, and report what the UI actually does.
Use browser tooling for screenshots, console output, and network evidence.
Do not edit application code.
"""
```


`.codex/agents/ui-fixer.toml`:

```toml
name = "ui_fixer"
description = "Implementation-focused agent for small, targeted fixes after the issue is understood."
model = "gpt-6-luna"
model_reasoning_effort = "high"
developer_instructions = """
Own the fix once the issue is reproduced.
Make the smallest defensible change, keep unrelated files untouched, and validate only the behavior you changed.
"""

[[skills.config]]
path = "/Users/me/.agents/skills/docs-editor/SKILL.md"
enabled = false
```

This setup works well for prompts like:

```text
Investigate why the settings modal fails to save. Have browser_debugger reproduce it, code_mapper trace the responsible code path, and ui_fixer implement the smallest fix once the failure mode is clear.
```

</ContentModeSwitch>