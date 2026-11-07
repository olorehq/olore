# Developer settings

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

The Codex IDE extension has two settings layers:

- **Codex settings** control agent behavior shared with Codex CLI, including the
  model, reasoning effort, permissions, sandbox, MCP servers, and
  personalization. Codex reads these settings from `config.toml`.
- **Editor settings** control how the extension behaves inside VS Code and
  compatible editors. These settings use `chatgpt.*` keys in the editor's
  settings system.

## Open Codex settings

Select the gear icon in the Codex sidebar, then select **Codex Settings**. Use
the settings panel for common agent controls, or select **Open config.toml** to
edit the active configuration layer directly.

For the configuration layer order and common keys, see [Config
basics](https://learn.chatgpt.com/docs/config-file/config-basic). For every supported `config.toml` key, see the
[Configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference).

## Change an editor setting

To change a setting, follow these steps:

1. Open your editor settings.
2. Search for `@ext:openai.chatgpt`, `Codex`, or the setting name.
3. Update the value.

The extension also honors VS Code's built-in chat font settings for Codex chat surfaces.

## Editor settings reference

| Setting                                      | Default        | Description                                                                                                                                                                                                                                                                                |
| -------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chatgpt.commentCodeLensEnabled`             | `true`         | Show CodeLens above `TODO` comments so Codex can address them.                                                                                                                                                                                                                             |
| `chatgpt.openOnStartup`                      | `false`        | Focus the Codex sidebar when the extension finishes starting.                                                                                                                                                                                                                              |
| `chatgpt.followUpQueueMode`                  | `queue`        | Choose whether messages sent during a run wait for the next run (`queue`) or steer the current run (`steer`). The extension treats the legacy `interrupt` value as `steer`. Press <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> to invert the behavior for one message. |
| `chatgpt.composerEnterBehavior`              | `enter`        | Choose whether <kbd>Enter</kbd> always sends (`enter`), <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>Enter</kbd> sends multiline prompts (`cmdIfMultiline`), or the modifier is always required (`cmdAlways`).                                                                                      |
| `chatgpt.reviewDelivery`                     | `inline`       | Run `/review` in the current chat when possible (`inline`) or start a separate review chat (`detached`).                                                                                                                                                                                   |
| `chatgpt.localeOverride`                     | Auto           | Set the preferred language for the Codex UI. Leave empty to detect it automatically.                                                                                                                                                                                                       |
| `chatgpt.runCodexInWindowsSubsystemForLinux` | `false`        | Windows only: Run Codex in WSL when WSL is available. Use this when your repositories and tooling live in WSL2 or when you need Linux-native tooling. Changing this setting reloads VS Code.                                                                                               |
| `chatgpt.cliExecutable`                      | Unset          | Development only: Set the path to the Codex CLI executable. You don't need this setting unless you're developing the Codex CLI; manually overriding the bundled executable can prevent parts of the extension from working.                                                                |
| `chat.fontSize`                              | Editor default | Control chat text in the Codex sidebar, including chat content and the composer.                                                                                                                                                                                                           |
| `chat.editor.fontSize`                       | Editor default | Control code-rendered content in Codex chats, including code snippets and diffs.                                                                                                                                                                                                           |

The `chatgpt.*` keys above belong to the IDE extension and don't go in
`config.toml`. For shared agent settings, use [Config
basics](https://learn.chatgpt.com/docs/config-file/config-basic), [Advanced configuration](https://learn.chatgpt.com/docs/config-file/config-advanced),
and the [Configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference).