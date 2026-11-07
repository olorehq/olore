> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Automatic Code Review

> Automatic code review for Claude Code using hooks and OpenRouter — async, non-blocking reviews from a second model while you keep working

> [!NOTE]
>
> A reference implementation is available at [**redline**](https://github.com/alexanderatallah/redline). Key features:
>
> * Claude (or you) decides when a review is necessary
> * Claude Code is in full control of the reviewer agent — it runs as an async background process
> * Both agents are observable, customizable, and cost-monitored on [OpenRouter](https://openrouter.ai)
> * Log into both agents with one command: `redline login`
> * Implemented as a single Claude Code stop hook, providing transparency and customizability on the agent and model(s) used

## What This Achieves

Every time Claude Code finishes a response and there are uncommitted changes, a hook automatically triggers a background Codex code review — without blocking your workflow. You keep working while the review runs. When it finishes, Claude reads the output and presents the findings.

```text lines theme={null}
Claude Code Stop event
  → redline check              (fast, <1s)
  → git diff --stat HEAD       (any uncommitted changes?)
  → hash diff stat, compare to .git/redline-last-diff
  → if changes exist AND diff has changed since last check:
      save hash to .git/redline-last-diff
      output { "decision": "block", "reason": "..." }
        reason includes diff stat summary
        Claude decides if changes warrant a review
      Claude spawns `redline review` as background task
      → codex exec review streams output in real-time
      → user can monitor, kill, or keep working
      → when done, Claude reads output, presents findings
  → if no changes OR same diff as last check:
      exit 0 silently → Claude proceeds normally
```

No background processes, no daemons, no filesystem protocols. The hook is the trigger, and Claude Code's own background task system handles async execution.

## Prerequisites

* An [OpenRouter API key](https://openrouter.ai/settings/keys)
* [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) installed (`claude` on PATH)
* [Codex CLI](https://github.com/openai/codex) installed (`codex` on PATH)
* [Bun](https://bun.sh/) or Node.js runtime

## Configuring OpenRouter

Both agents route inference through OpenRouter, but they use different API skins with different base URLs.

### Claude Code

Set these environment variables in your shell profile (`~/.zshrc`, `~/.bashrc`). **Do not** use a `.env` file — Claude Code doesn't read them.

```bash lines theme={null}
export ANTHROPIC_BASE_URL="https://openrouter.ai/api"
export ANTHROPIC_AUTH_TOKEN="sk-or-..."
export ANTHROPIC_API_KEY=""
```

> [!WARNING]
>
> The base URL is `https://openrouter.ai/api` — **no `/v1` suffix**. This is OpenRouter's Anthropic Skin, which speaks the native Anthropic protocol. Using `/v1` causes model-not-found errors. `ANTHROPIC_API_KEY` must be explicitly empty to prevent Claude Code from authenticating directly with Anthropic.

Verify by running `/status` in a Claude Code session. See the full [Claude Code integration guide](https://openrouter.ai/docs/cookbook/coding-agents/claude-code-integration.md) for details.

### Codex CLI

Create or edit `~/.codex/config.toml`:

```toml lines theme={null}
[model_providers.openrouter]
name = "openrouter"
base_url = "https://openrouter.ai/api/v1"
env_key = "OPENROUTER_API_KEY"
```

Then set the API key:

```bash lines theme={null}
export OPENROUTER_API_KEY="sk-or-..."
```

At runtime, pass `-c 'model_provider="openrouter"'` to select the OpenRouter provider.

> [!WARNING]
>
> Common pitfalls:
>
> * Codex CLI does **not** have a `--provider` flag — use `-c` for all runtime config overrides
> * The TOML section is `[model_providers.openrouter]`, **not** `[provider.openrouter]`
> * Codex uses `https://openrouter.ai/api/v1` (with `/v1`), while Claude uses `https://openrouter.ai/api` (without `/v1`) — they use different protocol skins

See the full [Codex CLI integration guide](https://openrouter.ai/docs/cookbook/coding-agents/codex-cli.md) for details.

## Understanding the Stop Hook

Claude Code has a hook system configured in `settings.json`. The key hook for this use case is **Stop**, which fires every time Claude finishes a response cycle.

### How `decision: "block"` works

1. The hook command runs and outputs JSON to stdout
2. If the JSON contains `"decision": "block"` with a `"reason"` string, Claude Code:
   * Does **not** stop — it continues the conversation
   * The `reason` text is injected into Claude's context as new information
   * Claude processes it and acts on it (e.g., spawning a background task as instructed)
3. If the command exits 0 with no JSON output, Claude proceeds normally (no blocking)
4. If the command exits non-zero, it's treated as a non-blocking error

This is the key mechanism: the check command uses `decision: "block"` to inject a diff stat summary and review instructions into Claude's context. Claude sees the summary, decides whether the changes warrant a review, and if so spawns the review command via its Bash tool. The background task appears in Claude's task list — visible, monitorable, and killable.

### Settings file locations

In order of precedence:

* `~/.claude/settings.json` — global (all projects)
* `.claude/settings.json` — project (shareable, committed)
* `.claude/settings.local.json` — project (local, gitignored)

Use `.claude/settings.local.json` for the review hook so it doesn't affect other collaborators.

### Hook configuration

```json lines theme={null}
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "redline check",
            "timeout": 10
          }
        ]
      }
    ]
  }
}
```

The timeout is 10 seconds — the check is fast. This is much lower than the 300s you'd need for a synchronous review.

## Why Async Matters

A simpler synchronous approach — running the full review inside the Stop hook — has three problems:

1. **Blocking.** `codex exec review` can take minutes. A synchronous Stop hook blocks Claude Code the entire time — no progress visibility, no way to cancel.
2. **No filtering.** The hook fires after every response, even when Claude just answered a question and made no code changes.
3. **Duplicate reviews.** Nothing prevents the hook from triggering a second review while one is already running.

The async approach solves all three: the check is fast (\<1s), only fires when changes exist, hashes the diff stat to skip when nothing has changed since the last check, and the reason text tells Claude to skip if a review is already running. The actual review runs as a Claude Code background task that the user can monitor and kill.

## The Two-Command Architecture

The tool splits into two commands: **check** (the fast gate, called by the hook) and **review** (the actual work, spawned by Claude as a background task).

### Building the check command

The check command runs on every Stop event and must complete in under a second.

```typescript expandable lines theme={null}
import { execSync } from "child_process";
import {
  existsSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { join } from "path";

function getDiffStat(): string {
  // Prefer diff --stat for a concise summary
  const diff = execSync("git diff --stat HEAD", {
    encoding: "utf-8",
  }).trim();
  if (diff) return diff;

  // Fall back to status for untracked files
  return execSync("git status --porcelain", {
    encoding: "utf-8",
  }).trim();
}

function hash(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return h.toString(36);
}

function check(model?: string): void {
  const diffStat = getDiffStat();
  if (!diffStat) {
    process.exit(0);
  }

  // Deduplicate: skip if diff unchanged since last check
  const gitDir = execSync("git rev-parse --git-dir", {
    encoding: "utf-8",
  }).trim();
  const hashFile = join(gitDir, "redline-last-diff");
  const currentHash = hash(diffStat);

  if (existsSync(hashFile)) {
    const lastHash = readFileSync(
      hashFile,
      "utf-8",
    ).trim();
    if (lastHash === currentHash) {
      process.exit(0);
    }
  }

  writeFileSync(hashFile, currentHash);

  const cmd = model
    ? `redline review --model ${model}`
    : "redline review";

  const hookOutput = {
    decision: "block",
    reason: [
      "Redline: Here is a summary of uncommitted",
      "changes since the last review:",
      "",
      diffStat,
      "",
      "If these changes are substantial enough to",
      "warrant a code review (e.g., new logic, bug",
      "fixes, refactors — not just formatting or",
      "comments), run the following command as a",
      "background task:",
      "",
      `  ${cmd}`,
      "",
      "If the changes are trivial, or a review is",
      "already running, skip it. When a review",
      "completes, assess the findings and inform",
      "the user of any issues.",
    ].join("\n"),
  };

  console.log(JSON.stringify(hookOutput));
}
```

The check uses `git diff --stat HEAD` for a concise summary of what changed, falling back to `git status --porcelain` for untracked files. It hashes the diff stat and stores it in `.git/redline-last-diff` — if the diff hasn't changed since the last check, the hook exits silently. This prevents the same diff from repeatedly firing the hook. The diff stat is included in the reason text so Claude can decide whether the changes warrant a review.

### Building the review command

The review command is spawned by Claude as a background task. It streams Codex output in real-time for progress visibility, then prints a final summary.

```typescript expandable lines theme={null}
import { spawn } from "child_process";
import { readFileSync, unlinkSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

async function review(model?: string): Promise<void> {
  const outputFile = join(
    tmpdir(),
    `redline-review-${Date.now()}.txt`,
  );

  const args = [
    "exec",
    "review",
    "-c",
    'model_provider="openrouter"',
    "--uncommitted",
    "-o",
    outputFile,
  ];

  if (model) {
    args.push("-c", `model="${model}"`);
  }

  // Stream output in real-time so background task
  // shows progress
  const exitCode = await new Promise<number>(
    (resolve) => {
      const proc = spawn("codex", args, {
        cwd: process.cwd(),
        env: process.env,
        stdio: ["ignore", "inherit", "inherit"],
      });
      proc.on("close", (code) => resolve(code ?? 1));
    },
  );

  // Read the final review from the -o output file
  let review = "";
  try {
    review = readFileSync(outputFile, "utf-8").trim();
    unlinkSync(outputFile);
  } catch {
    // No output file — output was already streamed
  }

  if (exitCode !== 0 && !review) {
    console.error(`Codex review failed (exit ${exitCode}).`);
    process.exit(1);
  }

  if (review) {
    console.log("\n--- Review Summary ---\n");
    console.log(review);
  }
}
```

Key details:

* `codex exec review --uncommitted` — reviews all staged, unstaged, and untracked changes
* `stdio: "inherit"` — streams Codex output in real-time so the background task shows progress
* `-o <file>` — writes the last agent message to a file for reliable output capture
* `-c 'model_provider="openrouter"'` — routes through OpenRouter
* Optional: `-c 'model="openai/gpt-5.4-pro"'` for model override
* Exit code is checked — if Codex fails and produced no output, the tool exits with an error

### The reason text that instructs Claude

The check command's `reason` field includes the diff stat and lets Claude decide whether to review:

```text lines theme={null}
Redline: Here is a summary of uncommitted changes
since the last review:

 src/commands/check.ts | 25 +++++++++++++++------
 src/commands/review.ts | 12 +++++-----
 2 files changed, 22 insertions(+), 15 deletions(-)

If these changes are substantial enough to warrant
a code review (e.g., new logic, bug fixes, refactors
— not just formatting or comments), run the
following command as a background task:

  redline review

If the changes are trivial, or a review is already
running, skip it. When a review completes, assess
the findings and inform the user of any issues.
```

Claude sees the summary, judges whether the changes are substantive, and either spawns the review as a background task or skips it. When the review completes, Claude reads the streamed output and presents the findings.

## Installing and Removing the Hook

The tool should provide commands to programmatically install and remove the hook from `.claude/settings.local.json`.

### Install

```bash lines theme={null}
redline install
```

Read `.claude/settings.local.json`, deep-merge the Stop hook entry, and write back. Create the `.claude/` directory if needed. Be idempotent — if the hook already exists with the same config, skip. If it exists with a different model, update it. Identify your hooks by command prefix (commands starting with `"redline"`).

The resulting file:

```json lines theme={null}
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "redline check",
            "timeout": 10
          }
        ]
      }
    ]
  }
}
```

### Remove

```bash lines theme={null}
redline off
```

Filter out hook entries whose `command` starts with `"redline"`. Clean up empty arrays and objects (remove `Stop: []` if empty, remove `hooks: {}` if empty).

### Implementation

```typescript expandable lines theme={null}
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
} from "fs";
import { join } from "path";

const SETTINGS_PATH = join(
  ".claude",
  "settings.local.json",
);
const HOOK_PREFIX = "redline";

function readSettings(): Record<string, unknown> {
  try {
    return JSON.parse(
      readFileSync(SETTINGS_PATH, "utf-8"),
    );
  } catch {
    return {};
  }
}

function writeSettings(
  settings: Record<string, unknown>,
): void {
  mkdirSync(".claude", { recursive: true });
  writeFileSync(
    SETTINGS_PATH,
    JSON.stringify(settings, null, 2) + "\n",
  );
}

function installHook(model?: string): void {
  const settings = readSettings();
  const command = model
    ? `${HOOK_PREFIX} check --model ${model}`
    : `${HOOK_PREFIX} check`;

  const hookEntry = {
    hooks: [
      {
        type: "command",
        command,
        timeout: 10,
      },
    ],
  };

  const hooks = (settings.hooks ?? {}) as Record<
    string,
    unknown[]
  >;
  const stopHooks = (hooks.Stop ?? []) as Array<{
    hooks: Array<{ command: string }>;
  }>;

  // Check for existing redline hook
  const existing = stopHooks.findIndex((h) =>
    h.hooks?.some((inner) =>
      inner.command?.startsWith(HOOK_PREFIX),
    ),
  );

  if (existing >= 0) {
    stopHooks[existing] = hookEntry;
  } else {
    stopHooks.push(hookEntry);
  }

  hooks.Stop = stopHooks;
  settings.hooks = hooks;
  writeSettings(settings);
}

function removeHook(): void {
  const settings = readSettings();
  const hooks = (settings.hooks ?? {}) as Record<
    string,
    unknown[]
  >;
  const stopHooks = (hooks.Stop ?? []) as Array<{
    hooks: Array<{ command: string }>;
  }>;

  hooks.Stop = stopHooks.filter(
    (h) =>
      !h.hooks?.some((inner) =>
        inner.command?.startsWith(HOOK_PREFIX),
      ),
  );

  if (
    Array.isArray(hooks.Stop) &&
    hooks.Stop.length === 0
  ) {
    delete hooks.Stop;
  }
  if (Object.keys(hooks).length === 0) {
    delete settings.hooks;
  }

  writeSettings(settings);
}
```

## Putting It Together

The full CLI has four commands:

```bash lines theme={null}
# Install the hook
redline install

# Install with a specific review model
redline install --model openai/gpt-5.4-pro

# Remove the hook
redline off

# Run a review manually (prints to stdout)
redline review

# Fast gate check (called by the Stop hook)
redline check
```

### Full CLI entry point

```typescript expandable lines theme={null}
const args = process.argv.slice(2);
const command = args[0];

const modelFlag = args.indexOf("--model");
const model =
  modelFlag >= 0 ? args[modelFlag + 1] : undefined;

switch (command) {
  case "install":
    installHook(model);
    console.log(
      "Hook installed in",
      ".claude/settings.local.json",
    );
    break;

  case "off":
    removeHook();
    console.log("Hook removed.");
    break;

  case "check":
    check(model);
    break;

  case "review":
    review(model);
    break;

  default:
    installHook(model);
    console.log(
      "Hook installed in",
      ".claude/settings.local.json",
    );
    break;
}
```

## Testing

### Verify hook installation

```bash lines theme={null}
redline install
cat .claude/settings.local.json
```

You should see the Stop hook entry with the `redline check` command and a 10-second timeout.

### Test check with no changes

Ensure your working tree is clean, then:

```bash lines theme={null}
redline check
```

No output — the check exits silently when there are no uncommitted changes.

### Test check with changes

Make a small change to any file, then:

```bash lines theme={null}
redline check
```

You should see JSON with `"decision": "block"` and a `"reason"` containing the diff stat summary and review instructions.

### Test review

```bash lines theme={null}
redline review
```

You should see streamed Codex output followed by a review summary.

### Full integration test

1. Install the hook: `redline install`
2. Start Claude Code: `claude`
3. Ask Claude to make a small code change
4. When Claude finishes, the Stop hook fires the check — if there are uncommitted changes, Claude spawns the review as a background task
5. You can keep working while the review runs
6. When the review completes, Claude reads the output and presents any findings

## Limitations and Future Work

### Claude Code only

This pattern relies on Claude Code's `decision: "block"` hook output, which injects instructions directly into the agent's conversation. Codex CLI's hook system (as of early 2026) is more limited — its `Stop` hook is fire-and-forget and cannot feed structured output back into the model's context. Native hooks (`[[hooks]]` in config.toml) support several events, but only `SessionStart` can feed stdout into the model. There is no equivalent of `decision: "block"` + `reason` for injecting mid-session instructions. When Codex adds full structured hook output support, this pattern can be extended.

### Review granularity

The review covers everything uncommitted — all staged, unstaged, and untracked changes. It does not distinguish between changes Claude just made and pre-existing uncommitted work. Future versions could use smarter change detection (e.g., diffing against a baseline snapshot taken before Claude's response).

## Resources

* [Reference implementation (redline)](https://github.com/alexanderatallah/redline)
* [Claude Code integration](https://openrouter.ai/docs/cookbook/coding-agents/claude-code-integration.md)
* [Codex CLI integration](https://openrouter.ai/docs/cookbook/coding-agents/codex-cli.md)
* [OpenRouter Activity Dashboard](https://openrouter.ai/activity)
