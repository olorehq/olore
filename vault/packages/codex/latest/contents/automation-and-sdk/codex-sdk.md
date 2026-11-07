# Codex SDK

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

If you use Codex through Codex CLI, the IDE extension, or Codex cloud, you can also control it programmatically.

Use the SDK when you need to:

- Control Codex as part of your CI/CD pipeline
- Create your own agent that can engage with Codex to perform complex engineering tasks
- Build Codex into your own internal tools and workflows
- Integrate Codex within your own application

Use the Codex SDK to automate coding tasks, including jobs in CI. Use the [Codex app server](https://learn.chatgpt.com/docs/app-server) to build custom clients that handle authentication, conversation history, approvals, and streamed agent events.

The `codex mcp-server` command and standalone `codex-mcp-server` binary have been removed. Use the [Codex app server](https://learn.chatgpt.com/docs/app-server) for existing integrations.

If you have beta access and need repository or change scans with structured
security findings and coverage, use the [Codex Security TypeScript
SDK](https://learn.chatgpt.com/docs/security/sdk).


## TypeScript library

The TypeScript library lets your application start, continue, and resume local Codex threads.

Use the library server-side; it requires Node.js 18 or later.

### Installation

To get started, install the Codex SDK using `npm`:

```bash
npm install @openai/codex-sdk
```

### Usage

Start a thread with Codex and run it with your prompt.

```typescript
import { Codex } from "@openai/codex-sdk";

const codex = new Codex();
const thread = codex.startThread();
const result = await thread.run(
  "Make a plan to diagnose and fix the CI failures"
);

console.log(result.finalResponse);
```


Call `run()` again to continue on the same thread, or resume a past thread by providing a thread ID.

```typescript
// running the same thread
const result = await thread.run("Implement the plan");

console.log(result.finalResponse);

// resuming past thread

const threadId = thread.id!;
const thread2 = codex.resumeThread(threadId, {
  sandboxMode: "workspace-write",
});
const result2 = await thread2.run("Pick up where you left off");

console.log(result2.finalResponse);
```


To identify threads created by your integration, set `threadSource` when you create a thread.
For example, `codex.startThread({ threadSource: "ci" })` labels the thread
as `ci`. Resuming a thread preserves its original source.

### Configuration overrides

Pass `config` to set structured Codex configuration. For keys that can't be
expressed as dotted paths, use `configOverrides` to pass raw TOML strings as
separate `--config` arguments:

```typescript
const codex = new Codex({
  config: { default_permissions: "audit" },
  configOverrides: [
    'permissions.audit.filesystem={":root"="read","/path/to/project/.env"="deny"}',
  ],
});
```


Raw overrides take precedence over structured `config`. The SDK applies
managed settings such as `baseUrl` and thread-specific options afterward, so
they take precedence over both. These overrides don't change your Codex configuration
files.

For more details, check out the [TypeScript repo](https://github.com/openai/codex/tree/main/sdk/typescript).

## Python library

The Python SDK controls the local Codex app-server over JSON-RPC. It requires Python 3.10 or later. Published SDK builds include a pinned Codex CLI runtime dependency.

### Installation

To install the SDK run:

```bash
pip install openai-codex
```

Published SDK builds automatically use their pinned runtime. Pass `CodexConfig(codex_bin=...)` only when you intentionally want to run against a specific local Codex executable.

The Python SDK is available as a stable release. `pip install openai-codex`
installs the latest stable release. Use `pip install --pre openai-codex` to opt
in to newer prerelease builds.

### Usage

Start Codex, create a thread, and run a prompt. The examples use GPT-6.1 Sol,
which must be available to your signed-in account. Otherwise, omit `model` to
use your configured default. See [GPT-6.1 Sol availability by plan](https://learn.chatgpt.com/docs/models#gpt-6.1-sol).

```python
from openai_codex import Codex, Sandbox

with Codex() as codex:
    thread = codex.thread_start(
        model="gpt-6.1-sol",
        sandbox=Sandbox.workspace_write,
    )
    result = thread.run("Make a plan to diagnose and fix the CI failures")
    print(result.final_response)
```


Use `AsyncCodex` when your application is already asynchronous:

```python
import asyncio
from openai_codex import AsyncCodex


async def main() -> None:
    async with AsyncCodex() as codex:
        thread = await codex.thread_start(model="gpt-6.1-sol")
        result = await thread.run("Implement the plan")
        print(result.final_response)


asyncio.run(main())
```


### Pass content from another system

When a tool, application, or another agent supplies content, pass an
`ExternalMessage` as the entire input to `thread.run()` or `thread.turn()`.
For example, `ExternalMessage(tool_name="issue_tracker", content=issue_body)`
identifies the tool that supplied an issue description. Codex treats the
description as tool output, at a lower priority than user and developer instructions. The message
can start a turn or join an active regular turn.

### Resume a thread without loading its history

Pass `include_turns=False` to `codex.thread_resume()` or `codex.thread_fork()`
to skip loading old turns into the response. The model still has the thread's
context. To retrieve the history later, call `thread.read(include_turns=True)`.

With Codex CLI 0.166.0 or later, use the thread's saved model provider to resume it. If you switch providers, call `codex.thread_fork(thread_id)` to
continue from the same history on the new provider.

### Set the service tier for one turn

To choose the service tier for a single new turn, pass `turn_service_tier` to
`run()` or `turn()`. For example, `turn_service_tier="default"` uses standard
speed for that turn. To change the tier for this and later turns, pass
`service_tier`. Joining an active turn leaves its tier unchanged.

If you supply your own Codex executable, `ExternalMessage`, explicit
`include_turns` on resume or fork, and `turn_service_tier` require Codex CLI
0.151.0 or later.

### Sandbox presets

Use the same `Sandbox` presets when creating a thread or changing its filesystem
access for a later turn:

```python
from openai_codex import Codex, Sandbox

with Codex() as codex:
    thread = codex.thread_start(sandbox=Sandbox.workspace_write)
    thread.run("Make the requested change.")
    review = thread.run("Review the diff only.", sandbox=Sandbox.read_only)
```


Available presets:

- `Sandbox.read_only`: Read files without allowing writes.
- `Sandbox.workspace_write`: Read files and write inside the workspace and configured writable roots.
- `Sandbox.full_access`: Run without filesystem access restrictions.

When you omit `sandbox=`, app-server uses its configured default. A sandbox
passed to `run(...)` or `turn(...)` applies to that turn and later turns
on the thread.

For more details, check out the [Python repo](https://github.com/openai/codex/tree/main/sdk/python).