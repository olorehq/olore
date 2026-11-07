> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Build Your Own Headless Agent

> Scaffold a headless AI agent for CLI tools, API servers, and automation pipelines

> [!NOTE]
>
> Looking to build an interactive terminal agent with a customizable UI instead? See the [Build Your Own Agent TUI](https://openrouter.ai/docs/cookbook/building-agents/create-agent-harness-tui.md) guide.

The [create-headless-agent](https://github.com/OpenRouterTeam/skills/tree/main/skills/create-headless-agent) skill scaffolds a headless agent in TypeScript + Bun — no terminal UI, just structured input and output. It's designed for CLI tools, API servers, queue workers, and automation pipelines where you need an agent that runs programmatically.

Under the hood, the generated project uses [`@openrouter/agent`](https://www.npmjs.com/package/@openrouter/agent) for the inner loop (model calls, tool execution, stop conditions) — the same SDK that powers the [Agent TUI](https://openrouter.ai/docs/cookbook/building-agents/create-agent-harness-tui.md), with a non-interactive outer layer.

## When to build your own

Building a headless agent makes sense when:

* **You need headless automation** — batch processing, CI pipelines, queue workers, or structured output validation
* **You need custom tools** — your agent interacts with your own APIs, databases, or domain-specific systems that generic agents can't reach
* **You want control over the loop** — you need custom stop conditions, cost limits, or model selection logic that hosted agents don't expose
* **You're shipping a product** — the agent is part of your application, not a developer tool, and you need to own the entry point (CLI, API server, embedded)
* **You want structured output** — NDJSON event streams, exit codes, or schema-validated responses for programmatic consumption
* **You want to learn** — understanding how agents work at the tool-execution level makes you better at using and debugging them

If you need an interactive terminal experience, use the [Agent TUI skill](https://openrouter.ai/docs/cookbook/building-agents/create-agent-harness-tui.md) instead.

## Install the skill

The create-headless-agent skill is part of the [OpenRouter Skills](https://github.com/OpenRouterTeam/skills) collection. Install it with your AI coding agent of choice:

> [tab] GitHub CLI
>
> Requires [GitHub CLI](https://cli.github.com/) v2.90.0+. Works with Claude Code, Cursor, OpenCode, Codex, Gemini CLI, Windsurf, and [many more agents](https://cli.github.com/manual/gh_skill_install):
>
> ```bash lines theme={null}
> gh skill install OpenRouterTeam/skills create-headless-agent
> ```

> [tab] Claude Code
>
> ```lines theme={null}
> /plugin marketplace add OpenRouterTeam/skills
> /plugin install openrouter@openrouter
> ```

> [tab] Cursor
>
> Add via **Settings > Rules > Add Rule > Remote Rule (Github)** with `OpenRouterTeam/skills`.

Once installed, ask your agent something like *"scaffold a headless agent"* or *"build me a CLI agent"* and the skill activates automatically.

## Prerequisites

* [Bun](https://bun.sh)
* An [OpenRouter API key](https://openrouter.ai/settings/keys)

## How it works

Like the TUI skill, the headless skill presents your coding agent with an interactive checklist. You pick tools and modules, and it generates a complete project — but instead of a REPL, the entry point accepts prompts via `--prompt`, positional arguments, or piped stdin and outputs plain text, NDJSON event streams, or just an exit code.

### What `@openrouter/agent` handles

| Concern | How the SDK handles it |
| - | - |
| **Model calls** | `client.callModel()` — one call, any model on OpenRouter |
| **Tool execution** | Define tools with `tool()` and Zod schemas; the SDK validates input and calls your `execute` function |
| **Multi-turn** | The SDK loops (call model -> execute tools -> call model) until a stop condition fires |
| **Stop conditions** | `stepCountIs(n)`, `maxCost(amount)`, `hasToolCall(name)`, or custom functions |
| **Streaming** | `result.getTextStream()` for text deltas, `result.getToolCallsStream()` for tool calls |
| **Cost tracking** | `result.getResponse().usage` with input/output token counts |
| **Shared context** | Type-safe shared state across tools via `sharedContextSchema` |

## Output modes

The generated CLI supports three output modes:

| Mode | Flag | Description |
| - | - | - |
| **Text** (default) | | Streams text deltas to stdout |
| **JSON** | `--json` / `-j` | NDJSON event stream — one `AgentEvent` per line |
| **Quiet** | `--quiet` / `-q` | No output; exit 0 on success, 1 on error |

```bash lines theme={null}
# Text mode (default)
bun run src/cli.ts --prompt "List all TypeScript files"

# JSON event stream for programmatic consumption
bun run src/cli.ts --json --prompt "Search for TODO comments"

# Quiet mode for CI/scripts (exit code only)
bun run src/cli.ts --quiet --prompt "Fix the linting errors" && echo "Success"

# Piped stdin
echo "Summarize this file" | bun run src/cli.ts
```

## Generated project structure

```lines theme={null}
my-headless-agent/
  package.json              @openrouter/agent, zod
  tsconfig.json             ES2022, NodeNext, strict
  .env.example              OPENROUTER_API_KEY=
  src/
    config.ts               Layered config (defaults -> file -> env)
    agent.ts                Core runner with retry + event callbacks
    cli.ts                  CLI entry point (args / stdin / piped input)
    tools/
      index.ts              Tool registry + server tools
      file-read.ts          Read files (Bun.file)
      file-write.ts         Write/create files (Bun.write)
      file-edit.ts          Search-and-replace with diff
      glob.ts               Find files by pattern (Bun.Glob)
      grep.ts               Search content by regex
      list-dir.ts           List directory entries
      shell.ts              Execute commands (Bun.spawn)
      fetch-url.ts          Fetch and extract page text
```

Run it with:

```bash lines theme={null}
export OPENROUTER_API_KEY="sk-or-..."
bun run src/cli.ts --prompt "What files are in this directory?"
```

## Customization options

The skill presents a checklist when invoked. Items marked **on** are pre-selected defaults.

### Server tools

Executed by OpenRouter server-side — zero client code needed.

| Tool | Default | Description |
| - | - | - |
| Web Search | on | Real-time web search via `openrouter:web_search` |
| Web Fetch | on | Fetch and extract page text via `openrouter:web_fetch` |
| Datetime | on | Current date/time via `openrouter:datetime` |

### Client-side tools

Generated into `src/tools/` with Bun-native implementations.

| Tool | Default | Description |
| - | - | - |
| File Read | on | Read files with `Bun.file` |
| File Write | on | Write/create files with `Bun.write` |
| File Edit | on | Search-and-replace with diff output |
| Glob/Find | on | Find files by pattern with `Bun.Glob` |
| Grep/Search | on | Search file contents by regex |
| Directory List | on | List directory entries |
| Shell | on | Execute commands with `Bun.spawn` |
| Fetch URL | on | Fetch and extract text from URLs |

### Modules

Optional architectural components for the headless agent.

| Module | Default | Description |
| - | - | - |
| Session Persistence | on | JSONL append-only conversation log |
| Retry with Backoff | on | Automatic retry on transient API errors |
| Context Compaction | off | Summarize older messages when context gets long |
| System Prompt Composition | off | Build instructions from static + dynamic context files |
| Tool Permissions / Approval | off | Gate dangerous tools behind confirmation |
| Structured Event Logging | off | Emit structured events for tool calls and errors |
| Output Schema Validation | off | Validate agent output against a JSON Schema (Ajv) |
| Webhook Notifications | off | POST events to an external URL on completion or error |

## Highlighted features

### Safe retry on 429/5xx

The generated `runAgentWithRetry` wrapper retries transient API errors (rate limits, server errors) with exponential backoff — but only if no tool calls have executed yet. Once a mutating tool like `file_write` or `shell` has run, replaying the agent from the initial prompt would double-execute side effects. In that case, retries throw immediately instead of risking repeated mutations.

For mid-run resilience (crash-resume, cross-process approval flows), pair with the optional **Session Persistence** module, which writes every message to a JSONL file so the agent can pick up where it left off.

### Structured output with `--output-schema`

Constrain the agent's final response to match a JSON Schema using Ajv. The scaffold is tolerant of markdown fences, so schemas work even when the model wraps JSON in code blocks:

```bash lines theme={null}
cat > report.schema.json <<'EOF'
{
  "type": "object",
  "properties": {
    "summary": { "type": "string" },
    "count":   { "type": "integer", "minimum": 0 }
  },
  "required": ["summary", "count"],
  "additionalProperties": false
}
EOF

bun run src/cli.ts --output-schema report.schema.json \
  "Analyze README.md and return a JSON report with summary and count fields"
```

Exit codes:

* `0` — agent succeeded and output matched schema
* `1` — agent or API error
* `2` — output failed schema validation (Ajv error message on stderr, or emitted as a `validation_error` event in `--json` mode)

## Entry points

The skill generates a CLI entry point by default, but you can also ask for:

* **HTTP server** — `Bun.serve()` with SSE streaming for building web-accessible agents
* **MCP server** — expose the agent as an MCP tool for other agents to call

## Resources

* [Create Headless Agent skill README](https://github.com/OpenRouterTeam/skills/tree/main/skills/create-headless-agent)
* [OpenRouter Skills repository](https://github.com/OpenRouterTeam/skills)
* [`@openrouter/agent` on npm](https://www.npmjs.com/package/@openrouter/agent)
* [OpenRouter TypeScript SDK](https://openrouter.ai/docs/client-sdks/typescript)
* [Server Tools documentation](https://openrouter.ai/docs/guides/features/server-tools.md)
* [OpenRouter API keys](https://openrouter.ai/settings/keys)
