# Slash commands in Codex CLI

Slash commands give you fast, keyboard-first control over Codex. Type `/` in the composer to open the slash popup, choose a command, and Codex will perform actions such as switching models, adjusting approvals, or summarizing long conversations without leaving the terminal.

This guide shows you how to:

- Find the right built-in slash command for a task
- Steer an active session with commands like `/model`, `/approvals`, and `/status`
- Create custom prompts that behave like new slash commands with arguments and metadata (see [Custom Prompts](https://developers.openai.com/codex/custom-prompts))

## Built-in slash commands

Codex ships with the following commands. Open the slash popup and start typing the command name to filter the list.

| Command                                                 | Purpose                                                         | When to use it                                                                                            |
| ------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`/approvals`](#update-approval-rules-with-approvals)   | Set what Codex can do without asking first.                     | Relax or tighten approval requirements mid-session, such as switching between Auto and Read Only.         |
| [`/compact`](#keep-transcripts-lean-with-compact)       | Summarize the visible conversation to free tokens.              | Use after long runs so Codex retains key points without blowing the context window.                       |
| [`/diff`](#review-changes-with-diff)                    | Show the Git diff, including files Git isn't tracking yet.      | Review Codex's edits before you commit or run tests.                                                      |
| [`/exit`](#exit-the-cli-with-quit-or-exit)              | Exit the CLI (same as `/quit`).                                 | Alternative spelling; both commands exit the session.                                                     |
| [`/feedback`](#send-feedback-with-feedback)             | Send logs to the Codex maintainers.                             | Report issues or share diagnostics with support.                                                          |
| [`/init`](#generate-agentsmd-with-init)                 | Generate an `AGENTS.md` scaffold in the current directory.      | Capture persistent instructions for the repository or subdirectory you're working in.                     |
| [`/logout`](#sign-out-with-logout)                      | Sign out of Codex.                                              | Clear local credentials when using a shared machine.                                                      |
| [`/mcp`](#list-mcp-tools-with-mcp)                      | List configured Model Context Protocol (MCP) tools.             | Check which external tools Codex can call during the session.                                             |
| [`/mention`](#highlight-files-with-mention)             | Attach a file to the conversation.                              | Point Codex at specific files or folders you want it to inspect next.                                     |
| [`/model`](#set-the-active-model-with-model)            | Choose the active model (and reasoning effort, when available). | Switch between general-purpose models (`gpt-4.1-mini`) and deeper reasoning models before running a task. |
| [`/fork`](#branch-a-saved-conversation-with-fork)       | Fork a saved conversation into a new thread.                    | Branch an older session to try a different approach without losing the original transcript.               |
| [`/resume`](#resume-a-saved-conversation-with-resume)   | Resume a saved conversation from your session list.             | Continue work from a previous CLI session without starting over.                                          |
| [`/new`](#start-a-new-conversation-with-new)            | Start a new conversation inside the same CLI session.           | Reset the chat context without leaving the CLI when you want a fresh prompt in the same repo.             |
| [`/quit`](#exit-the-cli-with-quit-or-exit)              | Exit the CLI.                                                   | Leave the session immediately.                                                                            |
| [`/review`](#ask-for-a-working-tree-review-with-review) | Ask Codex to review your working tree.                          | Run after Codex completes work or when you want a second set of eyes on local changes.                    |
| [`/status`](#inspect-the-session-with-status)           | Display session configuration and token usage.                  | Confirm the active model, approval policy, writable roots, and remaining context capacity.                |

`/quit` and `/exit` both exit the CLI. Use them only after you have saved or committed any important work.

## Control your session with slash commands

The following workflows keep your session on track without restarting Codex.

### Set the active model with `/model`

1. Start Codex and open the composer.
2. Type `/model` and press Enter.
3. Choose a model such as `gpt-4.1-mini` or `gpt-4.1` from the popup.

Expected: Codex confirms the new model in the transcript. Run `/status` to verify the change.

### Update approval rules with `/approvals`

1. Type `/approvals` and press Enter.
2. Select the approval preset that matches your comfort level, for example `Auto` for hands-off runs or `Read Only` to review edits.

Expected: Codex announces the updated policy. Future actions respect the new approval mode until you change it again.

### Inspect the session with `/status`

1. In any conversation, type `/status`.
2. Review the output for the active model, approval policy, writable roots, and current token usage.

Expected: You see a summary like what `codex status` prints in the shell, confirming Codex is operating where you expect.

### Keep transcripts lean with `/compact`

1. After a long exchange, type `/compact`.
2. Confirm when Codex offers to summarize the conversation so far.

Expected: Codex replaces earlier turns with a concise summary, freeing context while keeping critical details.

### Review changes with `/diff`

1. Type `/diff` to inspect the Git diff.
2. Scroll through the output inside the CLI to review edits and added files.

Expected: Codex shows changes you've staged, changes you haven't staged yet, and files Git hasn't started tracking, so you can decide what to keep.

### Highlight files with `/mention`

1. Type `/mention` followed by a path, for example `/mention src/lib/api.ts`.
2. Select the matching result from the popup.

Expected: Codex adds the file to the conversation, ensuring follow-up turns reference it directly.

### Start a new conversation with `/new`

1. Type `/new` and press Enter.

Expected: Codex starts a fresh conversation in the same CLI session, so you can switch tasks without leaving your terminal.

### Resume a saved conversation with `/resume`

1. Type `/resume` and press Enter.
2. Choose the session you want from the saved-session picker.

Expected: Codex reloads the selected conversation’s transcript so you can pick up where you left off, keeping the original history intact.

### Branch a saved conversation with `/fork`

1. Type `/fork` and press Enter.
2. Pick the saved session you want to branch from in the picker (same list you see with `/resume`).

Expected: Codex clones the selected conversation into a new thread with a fresh ID, leaving the original transcript untouched so you can explore an alternative approach in parallel.

### Generate `AGENTS.md` with `/init`

1. Run `/init` in the directory where you want Codex to look for persistent instructions.
2. Review the generated `AGENTS.md`, then edit it to match your repository conventions.

Expected: Codex creates an `AGENTS.md` scaffold you can refine and commit for future sessions.

### Ask for a working tree review with `/review`

1. Type `/review`.
2. Follow up with `/diff` if you want to inspect the exact file changes.

Expected: Codex summarizes issues it finds in your working tree, focusing on behavior changes and missing tests.

### List MCP tools with `/mcp`

1. Type `/mcp`.
2. Review the list to confirm which MCP servers and tools are available.

Expected: You see the configured Model Context Protocol (MCP) tools Codex can call in this session.

### Send feedback with `/feedback`

1. Type `/feedback` and press Enter.
2. Follow the prompts to include logs or diagnostics.

Expected: Codex collects the requested diagnostics and submits them to the maintainers.

### Sign out with `/logout`

1. Type `/logout` and press Enter.

Expected: Codex clears local credentials for the current user session.

### Exit the CLI with `/quit` or `/exit`

1. Type `/quit` (or `/exit`) and press Enter.

Expected: Codex exits immediately. Save or commit any important work first.

## Custom prompts

To create your own reusable prompts that behave like slash commands (invoked as `/prompts: <name>`), see [Custom Prompts](https://developers.openai.com/codex/custom-prompts).