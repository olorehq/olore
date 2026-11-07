# Developer commands

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use these commands to control Codex from the VS Code Command Palette. You can also bind them to keyboard shortcuts.

## Assign a key binding

To assign or change a key binding for a Codex command:

1. Open the Command Palette (**Cmd+Shift+P** on macOS or **Ctrl+Shift+P** on Windows/Linux).
2. Run **Preferences: Open Keyboard Shortcuts**.
3. Search for `Codex` or the command ID (for example, `chatgpt.newChat`).
4. Select the pencil icon, then enter the shortcut you want.

## Extension commands

| Command                   | Default key binding                        | Description                                             |
| ------------------------- | ------------------------------------------ | ------------------------------------------------------- |
| `chatgpt.addToThread`     | -                                          | Add selected text range as context for the current chat |
| `chatgpt.addFileToThread` | -                                          | Add the entire file as context for the current chat     |
| `chatgpt.newChat`         | macOS: `Cmd+N`<br />Windows/Linux: `Ctrl+N` | Create a new chat                                       |
| `chatgpt.newCodexPanel`   | -                                          | Create a new Codex panel                                |
| `chatgpt.openCommandMenu` | -                                          | Open the Codex command menu                             |
| `chatgpt.openSidebar`     | -                                          | Open the Codex sidebar panel                            |

Slash commands let you control Codex without leaving the composer. Use them to check status, switch between local and cloud mode, or send feedback.

## Use a slash command

1. In the Codex composer, type `/`.
2. Select a command from the list, or keep typing to filter (for example, `/status`).
3. Press **Enter**.

## Available slash commands

| Slash command        | Description                                                                             |
| -------------------- | --------------------------------------------------------------------------------------- |
| `/approve`           | Approve one retry of a recent automatic-review denial, when automatic review is active. |
| `/cloud`             | Run the chat in the cloud, when cloud execution is available.                           |
| `/cloud-environment` | Choose the cloud environment for the chat.                                              |
| `/compact`           | Compact the current chat's context.                                                     |
| `/fast`              | Turn a catalog-provided Fast service tier on or off, when available.                    |
| `/feedback`          | Open the feedback dialog to submit feedback and optionally include logs.                |
| `/fork`              | Copy a local chat into a new local chat.                                                |
| `/goal`              | Set a persistent goal for Codex to work toward.                                         |
| `/ide-context`       | Turn automatic IDE context on or off.                                                   |
| `/init`              | Generate an `AGENTS.md` scaffold for the current project.                               |
| `/local`             | Run the chat in your local workspace.                                                   |
| `/mcp`               | Open MCP status to view connected servers.                                              |
| `/memories`          | Configure whether the chat can use or generate memories, when Memories is available.    |
| `/model`             | Choose the model for the current chat.                                                  |
| `/plan`              | Toggle plan mode for multi-step planning.                                               |
| `/project`           | Choose a project for new chats.                                                         |
| `/reasoning`         | Choose the reasoning effort for the current chat.                                       |
| `/review`            | Start code review mode to review uncommitted changes or compare against a base branch.  |
| `/side`              | Start a temporary side chat without interrupting the main chat.                         |
| `/status`            | Show the chat ID, context usage, and rate limits.                                       |
| `/worktree`          | Run the chat in a new Git worktree.                                                     |