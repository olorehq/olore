# Environment variables

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Codex uses `config.toml` for durable settings. Use environment variables for
shell-scoped overrides, automation secrets, installer behavior, or diagnostics.

This page lists stable public environment variables that Codex reads directly.
It does not list internal development variables, test variables, or
provider-specific secret names you choose yourself with
[`env_key`](https://learn.chatgpt.com/docs/config-file/config-advanced#custom-model-providers).

## Core locations

| Variable            | Used by                                    | Default      | Description                                                                                                                                                      |
| ------------------- | ------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CODEX_HOME`        | CLI, IDE extension, app-server, installers | `~/.codex`   | Sets the root for Codex state, including config, auth, logs, sessions, skills, and standalone package metadata. If you set it, the directory must already exist. |
| `CODEX_SQLITE_HOME` | CLI and app-server state                   | `CODEX_HOME` | Sets where SQLite-backed state is stored. The `sqlite_home` config option takes precedence. Relative paths resolve from the current working directory.           |

For more about the files stored under `CODEX_HOME`, see
[Config and state locations](https://learn.chatgpt.com/docs/config-file/config-advanced#config-and-state-locations).
If multiple Linux hosts open the same databases, see [Run Codex with an NFS home directory](https://learn.chatgpt.com/docs/environments/network-file-systems).

## Installer variables

These variables apply to the standalone install scripts served from
`https://chatgpt.com/codex/install.sh` and
`https://chatgpt.com/codex/install.ps1`.

| Variable                | Default                                                                              | Description                                                                                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CODEX_NON_INTERACTIVE` | `false`                                                                              | Set to `1`, `true`, or `yes` to skip installer prompts. Prompts use their default response, so use this for scripted installs and updates, not first-run setup. |
| `CODEX_INSTALL_DIR`     | `~/.local/bin` on macOS/Linux; `%LOCALAPPDATA%\Programs\OpenAI\Codex\bin` on Windows | Changes where the visible `codex` command is installed. The standalone package cache still lives under `CODEX_HOME/packages/standalone`.                        |

For unattended installs, set `CODEX_NON_INTERACTIVE=1` on the shell that runs
the downloaded installer:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | CODEX_NON_INTERACTIVE=1 sh
```

```powershell
$env:CODEX_NON_INTERACTIVE=1; irm https://chatgpt.com/codex/install.ps1 | iex
```

## Authentication and network

| Variable                           | Used by                                          | Description                                                                                                                                     |
| ---------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `CODEX_API_KEY`                    | Exec, review, TypeScript SDK, remote exec-server | Provides an API key to a non-interactive Codex process. Set it inline rather than job-wide when running repository-controlled code.             |
| `CODEX_ACCESS_TOKEN`               | CLI, app-server, trusted automation              | Provides a ChatGPT or Codex access token for trusted automation. For persisted login, pipe it to `codex login --with-access-token`.             |
| `OPENAI_FEDERATION_RULE_ID`        | Workload identity                                | Selects the federation rule configured for the workload.                                                                                        |
| `OPENAI_IDENTITY_TOKEN_FILE`       | Workload identity                                | Points to the absolute path of the file that contains the current OIDC token or SPIFFE JWT-SVID.                                                |
| `OPENAI_WORKLOAD_IDENTITY_CONTEXT` | Workload identity                                | Optionally supplies bounded JSON identifiers for client-reported audit attribution. It does not affect authentication or authorization.         |
| `CODEX_CA_CERTIFICATE`             | HTTPS, login, and WebSocket clients              | Points to a PEM CA bundle for environments with corporate TLS interception or private root certificates. Takes precedence over `SSL_CERT_FILE`. |
| `SSL_CERT_FILE`                    | HTTPS, login, and WebSocket clients              | Fallback PEM CA bundle path when `CODEX_CA_CERTIFICATE` is unset.                                                                               |

For provider API keys, set
[`env_key`](https://learn.chatgpt.com/docs/config-file/config-advanced#custom-model-providers) in the model provider
configuration. Codex reads the variable named by that config, so the variable
name itself is not a fixed Codex environment variable.

For automation secret handling, see
[Use API key auth](https://learn.chatgpt.com/docs/non-interactive-mode#use-api-key-auth).
For access token setup, see [Access tokens](https://learn.chatgpt.com/docs/enterprise/access-tokens).

## Diagnostics

| Variable   | Used by            | Description                                                                                                             |
| ---------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `RUST_LOG` | CLI and app-server | Controls Rust log filtering and verbosity. `codex exec` defaults to `error` output unless you set a more verbose value. |

`RUST_LOG` accepts values such as `error`, `warn`, `info`, `debug`, and
`trace`. It also accepts more targeted Rust logging filters, such as
`codex_core=debug,codex_tui=debug`.

The interactive CLI records diagnostics in bounded local stores by default, but
the plaintext `codex-tui.log` file is opt-in. Set `log_dir` explicitly when you
need a plaintext log for troubleshooting:

```bash
RUST_LOG=debug codex -c log_dir=./.codex-log
tail -F ./.codex-log/codex-tui.log
```

In non-interactive mode, `codex exec` prints messages inline instead of writing
to a separate TUI log file.