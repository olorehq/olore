# Codex Security CLI reference

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Look up `codex-security` commands, flags, output formats, and exit behavior.
For a first scan, follow the
[CLI quickstart](https://learn.chatgpt.com/docs/security/cli).

Scans use your local permissions and don't pause for approval. Some
  cybersecurity requests and protected findings require 
  [Trusted Access for Cyber](https://chatgpt.com/cyber)
  . See [Local scan permissions](#local-scan-permissions).

Run the CLI with `npx @openai/codex-security`. The installed package also
provides the `cs` alias.

## Command overview

```text
usage: codex-security [--version] <command> [options]
```

The CLI provides these commands:

| Command                            | Purpose                                                             |
| ---------------------------------- | ------------------------------------------------------------------- |
| `codex-security scan`              | Run a Codex Security scan.                                          |
| `codex-security scan import`       | [Save CSV or JSON findings as a scan](#codex-security-scan-import). |
| `codex-security import github`     | [Read GitHub code scanning alerts](#codex-security-import-github).  |
| `codex-security policy`            | Draft or update a repository security policy.                       |
| `codex-security init`              | Create a YAML or JSON project configuration.                        |
| `codex-security install-hook`      | Install a Git pre-commit security scan.                             |
| `codex-security bulk-scan`         | Discover repositories and run resumable bulk scans.                 |
| `codex-security scan-components`   | Run separate scans for project components.                          |
| `codex-security scans`             | List, inspect, compare, and retrieve saved scan logs.               |
| `codex-security findings`          | Review and update saved security findings.                          |
| `codex-security export`            | Export findings or a retained threat model.                         |
| `codex-security publish`           | Check or publish a saved scan, or import external findings.         |
| `codex-security classify-severity` | Apply a severity rubric to saved findings.                          |
| `codex-security suggest-owners`    | Suggest finding owners using CODEOWNERS and Git history.            |
| `codex-security dedupe`            | Deduplicate saved findings.                                         |
| `codex-security validate`          | Check one or more candidate security findings.                      |
| `codex-security patch`             | Patch one or more security issues.                                  |
| `codex-security verify-fix`        | Check whether reported issues are fixed.                            |
| `codex-security feedback`          | Send feedback to OpenAI and return a feedback ID.                   |
| `codex-security login`             | Sign in, store credentials, or check sign-in status.                |
| `codex-security logout`            | Remove the stored sign-in.                                          |
| `codex-security info`              | Show read-only SDK and bundled-plugin metadata.                     |

The CLI also provides these integration commands:

| Command                      | Purpose                               |
| ---------------------------- | ------------------------------------- |
| `codex-security completions` | Generate shell completion scripts.    |
| `codex-security mcp`         | Register the CLI as an MCP server.    |
| `codex-security skills`      | Sync Codex Security skills to agents. |

List all available commands:

```bash
npx @openai/codex-security --help
```

Add `--help` to a command to inspect its arguments and options:

```bash
npx @openai/codex-security scan --help
```

`codex-security --version` prints the installed version and exits.
`codex-security info --json` reports the SDK and bundled-plugin versions.
Neither command requires Python.
Use `codex-security --update` to update the installed CLI.

### Discover commands and connect agents

Print the agent-readable command manifest:

```bash
npx @openai/codex-security --llms
```

Inspect the scan argument schema as JSON:

```bash
npx @openai/codex-security scan --schema --format json
```

Generate shell completions for Bash:

```bash
npx @openai/codex-security completions bash
```

Replace `bash` with `zsh` or `fish` for those shells.

Scan results support `--format toon|json|yaml|jsonl` and `--full-output`.
`--export-format` instead selects the format of an artifact exported from a
completed scan. Global command help also lists `md`, but scan results don't
support Markdown output.

Register the CLI as an MCP server:

```bash
npx @openai/codex-security mcp add
```

Sync Codex Security skills to your agents:

```bash
npx @openai/codex-security skills add
```

The CLI exposes only the read-only `info` metadata command through its MCP
server. Scans, exports, publication, authentication, validation, and patching
remain CLI-only.

## `codex-security scan`

Run a scan against a repository, selected paths, committed changes, or the
working tree.

```text
usage: codex-security scan [-h] [--auth {auto,chatgpt,api-key}]
                           [--config FILE]
                           [--cyber-access-program PROGRAM]
                           [--provider {openai,openrouter,fireworks,amazon-bedrock}]
                           [--path PATH | --diff BASE | --working-tree]
                           [--head HEAD] [--base BASE]
                           [--knowledge-base PATH] [--scan-prompt-file FILE]
                           [--validation-prompt-file FILE]
                           [--post-scan-prompt-file FILE]
                           [--mode {standard,deep}] [--workers N]
                           [--subagents N] [--stop-after-no-new N]
                           [--max-discovery-runs N] [--max-time MINUTES]
                           [--model MODEL]
                           [--effort EFFORT]
                           [--output-dir DIR]
                           [--archive-existing]
                           [--plugin-path PATH] [--python PATH]
                           [--codex KEY=VALUE] [--fail-on-severity LEVEL]
                           [--validate] [--patch] [--patch-severity {critical,high,medium,low}]
                           [--create-pr]
                           [--max-cost USD] [--show-cost] [--dry-run] [--mock]
                           [--workflow-id ID] [--safety-identifier ID]
                           [--headless] [--verbose]
                           [--json] [--format {toon,json,yaml,jsonl}]
                           [--full-output] [repository]
```

`repository` defaults to the current directory.

### Load project configuration

Create a starter configuration and select it explicitly:

```bash
npx @openai/codex-security init codex-security.yaml
npx @openai/codex-security scan . --config codex-security.yaml
```

`init` doesn't overwrite an existing file. Use `-c FILE` as a shorter form of
`--config FILE`, or set `CODEX_SECURITY_PROJECT_CONFIG`. An explicit flag takes
precedence over the environment variable. The CLI doesn't discover a project
file automatically.

Select only configuration you control. It has the same authority as CLI
options: native Codex settings can start MCP server processes and choose model
service destinations. Don't select a file controlled by an untrusted repository
or pull request. In CI, keep scanner configuration outside the checkout being
assessed. See the [project configuration guide](https://github.com/openai/codex-security/blob/main/docs/project-configuration.md) for settings and precedence.

### Select scan authentication

Use `--auth auto`, the default, to select credentials automatically. When both
a ChatGPT sign-in and `OPENAI_API_KEY` or `CODEX_API_KEY` are available,
interactive scans with text output ask which credential to use. CI, JSON and
JSONL scans, and other scans without an interactive terminal use the
environment API key. Dry runs don't prompt or load credentials.

To use your stored credentials, pass `--auth chatgpt`:

```bash
npx @openai/codex-security scan . --auth chatgpt
```

To use an environment API key, pass `--auth api-key`:

```bash
npx @openai/codex-security scan . --auth api-key
```

To make stored credentials the automatic default, run
`unset OPENAI_API_KEY CODEX_API_KEY`.

Use `--auth api-key` with
`--cyber-access-program standard|daybreak_blue|daybreak_red` to select a
Cyber access program for OpenAI model requests. Omission preserves Codex
defaults; `standard` explicitly selects the standard program.
Selecting a program doesn't grant access; your API project must be approved
for the selected program. See the [access-program guide](https://github.com/openai/codex-security/blob/main/sdk/typescript/docs/cli.md#select-a-cyber-access-program) for credential requirements.

### Attribute scans to end users

When scanning on behalf of users, `--safety-identifier ID` accepts a stable,
hashed identifier with API-key authentication. Use 1–64 characters without NUL
or personal data such as email addresses.

To forward the identifier, use `CODEX_CLI_PATH` to select a Codex build that
supports this option and a plugin that passes it to workers. The bundled Codex
runtime doesn't support it.

### Use OpenRouter or Fireworks

Select OpenRouter with its API key and an explicit model:

```bash
export OPENROUTER_API_KEY="your-openrouter-api-key"
npx @openai/codex-security scan . \
  --provider openrouter \
  --model anthropic/claude-sonnet-4.5
```

Select Fireworks with its API key and an explicit model:

```bash
export FIREWORKS_API_KEY="your-fireworks-api-key"
npx @openai/codex-security scan . \
  --provider fireworks \
  --model accounts/fireworks/models/qwen3-235b-a22b
```

Both providers also support `bulk-scan`.

### Use Amazon Bedrock

Use `--provider amazon-bedrock` and a Bedrock model ID with `scan` or
`bulk-scan`. After AWS provisions model access, scans use AWS credentials
without `--auth`, an OpenAI login, or an OpenAI API key.

#### Daybreak Blue and Daybreak Red

Daybreak Blue and Daybreak Red require Trusted Access for Cyber approval.
To request access, submit the [enterprise access application](https://openai.com/form/enterprise-trusted-access-for-cyber/) or contact your OpenAI account team.
After approval, work with your AWS account team to provision model access
on Amazon Bedrock.

Daybreak Red approval does not include GPT-5.6-Cyber access. GPT-5.6-Cyber
requires separate U.S. government (USG) approval. Ask your OpenAI account
team to request this additional approval before provisioning GPT-5.6-Cyber
on Amazon Bedrock. See the [Daybreak access requirements](https://help.openai.com/en/articles/20001258-openai-daybreak-trusted-access-for-cyber-overview).

| Access        | Bedrock model ID                   | AWS region  |
| ------------- | ---------------------------------- | ----------- |
| Daybreak Blue | `openai.gpt-daybreak-blue-5.6-sol` | `us-east-2` |
| Daybreak Red  | `openai.gpt-5.6-cyber`             | `us-east-2` |

For availability, check the AWS model cards for [Daybreak Blue](https://docs.aws.amazon.com/en_en/bedrock/latest/userguide/model-card-openai-gpt-daybreak-blue-56-sol.html) and [Daybreak Red](https://docs.aws.amazon.com/en_en/bedrock/latest/userguide/model-card-openai-gpt-56-cyber.html).

To scan with Daybreak Blue, replace `<aws-profile-name>` with an AWS profile
that has access to the Daybreak Blue model:

```bash
export AWS_PROFILE="<aws-profile-name>"
export AWS_REGION="us-east-2"
npx @openai/codex-security scan . \
  --provider amazon-bedrock \
  --model openai.gpt-daybreak-blue-5.6-sol --effort high
```

To scan with Daybreak Red, choose an AWS profile with GPT-5.6-Cyber access.
This may differ from the profile you use for Daybreak Blue:

```bash
export AWS_PROFILE="<aws-profile-name>"
export AWS_REGION="us-east-2"
npx @openai/codex-security scan . \
  --provider amazon-bedrock \
  --model openai.gpt-5.6-cyber --effort high
```

You can also authenticate with `AWS_BEARER_TOKEN_BEDROCK` or the standard
AWS credential chain. Temporary access keys require `AWS_SESSION_TOKEN`.
Set credentials and `AWS_REGION` in the same shell or CI job as the scan.

#### Local results and access checks

Saved local reports, `scans show`, and `export` work without cloud credentials.

`info` and `scan --dry-run` don't test AWS credentials or model access. Run a
scan to check access. For AWS authentication or access-denied errors, check
your credentials, region, and model permissions.

#### Bedrock cost estimates

The CLI supports cost estimates and `--max-cost` for the Daybreak Blue and
Daybreak Red model IDs above. Estimates use AWS Standard
commercial in-region prices, including the AWS fee. The cost limit uses
`estimatedUsd`, the short-context baseline. Requests already in progress can
put this estimate above the limit. Long-context pricing can raise the reported
`estimatedUsdRange` above it. This limit is not a billing cap.

### Select the scan target

Choose one target type for each scan.

| Argument                 | Description                                                                     |
| ------------------------ | ------------------------------------------------------------------------------- |
| `--path PATH`            | Scan a path relative to the repository. Repeat the flag for more paths.         |
| `--diff BASE`            | Scan committed changes from `BASE` to `--head`. The head defaults to `HEAD`.    |
| `--head HEAD`            | Set the head revision for `--diff`.                                             |
| `--working-tree`         | Scan staged and unstaged changes against `--base`. The base defaults to `HEAD`. |
| `--base BASE`            | Set the base revision for `--working-tree`.                                     |
| `--mode {standard,deep}` | Select the scan mode. The default is `standard`.                                |

`--path`, `--diff`, and `--working-tree` are mutually exclusive. `--head`
requires `--diff`, and `--base` requires `--working-tree`. Deep mode supports
repository and path targets.

Diff and working-tree scans require the repository argument to be the Git
worktree root. The selected refs must exist in that checkout.

Scan the entire repository:

```bash
npx @openai/codex-security scan .
```

Scan selected paths:

```bash
npx @openai/codex-security scan . --path src --path tests
```

Scan committed changes:

```bash
npx @openai/codex-security scan . --diff origin/main --head HEAD
```

Scan staged and unstaged changes:

```bash
npx @openai/codex-security scan . --working-tree --base HEAD
```

Run a deeper review of the repository:

```bash
npx @openai/codex-security scan . --mode deep
```

### Configure deep scans

Use these options with `--mode deep` to control discovery:

| Argument                 | Description                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `--workers N`            | Limit on concurrent independent standard-scan workers. Defaults to `4`.                               |
| `--subagents N`          | Subagents available to each worker. Defaults to `3`. Use `0` to disable them.                         |
| `--stop-after-no-new N`  | Stop after `N` consecutive completed worker scans find no new issues. Defaults to `4`.                |
| `--max-discovery-runs N` | Limit on total independent standard-scan runs. Defaults to `40`.                                      |
| `--max-time MINUTES`     | Discovery time limit. Accepts positive fractional minutes. The default and maximum are 5,760 minutes. |

For example, use two workers, allow up to ten runs, and stop discovery after 90 minutes:

```bash
npx @openai/codex-security scan . \
  --mode deep \
  --workers 2 \
  --subagents 0 \
  --stop-after-no-new 3 \
  --max-discovery-runs 10 \
  --max-time 90
```

When the time limit expires, the scan stops unfinished workers and combines
completed findings in its report. For a standard scan, `--max-time` sets an
advisory investigation time. Reporting can finish later. Custom validation
and post-scan instructions run outside that allowance.

To reuse these limits, save them in a
[project configuration file](#load-project-configuration):

```yaml
scan:
  mode: deep
  max_time_minutes: 90
  deep:
    workers: 2
    subagents_per_worker: 0
    stop_after_no_new: 3
    max_discovery_runs: 10
```

Command-line options override the project configuration. Use
`scan.deep.stop_after_consecutive_errors` to change how many consecutive worker
errors stop discovery. The default is `3`. For `bulk-scan`, `--workers`
controls concurrent repository scans.

### Add security context

Use `--knowledge-base PATH` to provide architecture documents, threat models,
or security policies. Repeat the option for more files or directories:

```bash
npx @openai/codex-security scan . \
  --knowledge-base /path/to/architecture.md \
  --knowledge-base /path/to/security-policies
```

Supported documents include UTF-8 text files (including JSON and SARIF), PDF,
and DOCX files. The CLI searches directories recursively, rejects linked input
paths, and skips linked directory entries. It saves extracted documents in the
private `.scan-knowledge.json` continuation file beside the scan artifacts to
support resuming the scan. Preserve this file with the scan directory.
Canonical reports don't include the document text.

### Add scan instructions

To add scan instructions, provide a text or Markdown file with
`--scan-prompt-file`. Use `--post-scan-prompt-file` to run follow-up
instructions in the same authenticated session after scans that succeed or
return errors:

```bash
npx @openai/codex-security scan . \
  --scan-prompt-file security-focus.md \
  --post-scan-prompt-file follow-up.md
```

For example, use the scan prompt to focus on authorization boundaries and ask
the follow-up to write a new `post-scan-summary.md` in the scan directory.
If the follow-up fails, the CLI reports a warning and keeps the completed scan.
The follow-up doesn't run after cancellation or when the scan reaches its cost
limit. When it runs, the follow-up is outside scan cost tracking and `--max-cost`.

### Validate findings in your environment

Use `--validation-prompt-file FILE` to replace the final validation step with
your own test procedure. Codex reviews the source first and skips validation if
it finds no candidates. Keep the prompt and test script in a directory you
control outside the checkout:

```bash
npx @openai/codex-security scan . \
  --validation-prompt-file /path/to/security-tests/validation.md
```

For example, if your local test server is running, put these instructions in
`validation.md`:

```text
Run /path/to/security-tests/validate.sh against http://localhost:3000.
Report which findings reproduce and include the relevant test output.
```

Use this flag with standard repository, path, diff, or working-tree scans. For
standard component scans, set `scan.validation_file` in the
[project configuration](#load-project-configuration). Deep scans reject custom validation.

Add `--validate` to a new scan command for a separate source-only assessment
of each reported finding. If the scan reports findings, the CLI writes the
assessments to a report in the scan directory. They don't change the findings
or severity-policy decision. You can't combine `--validate` with `--dry-run`,
`--mock`, or a scan cost limit set on the command line or in the project
configuration.

### Set output and policy options

Use these options to keep artifacts, preserve earlier results, or create a
machine-readable result.

| Argument                   | Description                                                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `--output-dir DIR`         | Write scan artifacts to a private directory outside the enclosing Git worktree. Defaults to persistent Codex Security state. |
| `--archive-existing`       | Move existing results to `DIR.previous-<timestamp>-<id>` and start with an empty output directory. Requires `--output-dir`.  |
| `--fail-on-severity LEVEL` | Return exit `1` when a completed scan reports a finding at or above `critical`, `high`, `medium`, or `low`.                  |
| `--patch`                  | Fix and verify selected findings after a complete scan.                                                                      |
| `--patch-severity LEVEL`   | Patch findings at or above `critical`, `high`, `medium`, or `low`. Defaults to `low`.                                        |
| `--create-pr`              | Commit verified patch files and open a draft GitHub pull request or GitLab merge request. Requires `--patch`.                |
| `--max-cost USD`           | Stop a scan when its estimated model cost exceeds the specified USD amount.                                                  |
| `--show-cost`              | Show estimated cost in progress and completion output.                                                                       |
| `--mock`                   | Save synthetic Standard scan findings without calling a model.                                                               |
| `--workflow-id ID`         | Reuse completed work in the named local findings workflow.                                                                   |
| `--dry-run`                | Check the repository, target, knowledge base, output directory, and Codex configuration without starting a scan.             |
| `--headless`               | Show plain-text progress instead of the interactive scan dashboard.                                                          |
| `--verbose`                | Print additional lifecycle, authentication, progress, and cost diagnostics to stderr.                                        |
| `--json`                   | Print the manifest, findings, review exclusions, paths, and turn metadata as one JSON document.                              |
| `--format FORMAT`          | Print the complete scan result as `toon`, `json`, `yaml`, or `jsonl`.                                                        |
| `--full-output`            | Print the complete result using the default structured output format.                                                        |

Mock mode supports Standard repository, path, and diff scans. You can't combine
it with `--dry-run`, `--patch`, Deep mode, custom validation, or post-scan prompts.
Scan prompts and knowledge bases don't change its synthetic findings. Use a
separate `CODEX_SECURITY_STATE_DIR` to keep mock results out of your scan history.

The cost limit uses `estimatedUsd`, the short-context baseline. Requests already
in progress can put this estimate above the limit. Long-context pricing can
raise `estimatedUsdRange` above it. This limit is not a billing cap.

If a deep scan reaches the limit
after Codex Security aggregates completed worker results, the CLI can seal a
completed result and report the budget warning. It returns `0`, or `1` if
findings meet the configured severity threshold. If it can't produce a valid
completed result, it returns `2` and leaves any available output on disk.

When you omit `--output-dir`, results persist under
`$CODEX_HOME/state/plugins/codex-security/scans/<repository>`. `CODEX_HOME`
defaults to `~/.codex`. Set `CODEX_SECURITY_STATE_DIR` to keep results under
`$CODEX_SECURITY_STATE_DIR/scans/<repository>` instead. These directories can
contain source excerpts and vulnerability details, so manage their permissions
and retention accordingly.

The workbench keeps scan history in
`$CODEX_HOME/state/plugins/codex-security/workbench.sqlite3`. Setting
`CODEX_SECURITY_STATE_DIR` also moves the workbench database.

The output directory must be outside the scanned directory and any enclosing
Git worktree. Use `--archive-existing` to preserve earlier results before reusing
an output directory:

```bash
npx @openai/codex-security scan . \
  --output-dir /path/outside/repository/results \
  --archive-existing
```

Scans are report-only by default. Add `--fail-on-severity` to evaluate a
severity policy in CI:

```bash
npx @openai/codex-security scan . \
  --diff origin/main \
  --output-dir /path/outside/repository/results \
  --json \
  --fail-on-severity high \
  > /path/outside/repository/codex-security.json
```

A dry run checks local inputs, including knowledge-base documents, without
loading credentials, starting Codex, or probing the plugin's Python
interpreter:

```bash
npx @openai/codex-security scan . \
  --output-dir /path/outside/repository/results \
  --dry-run
```

### Configure the runtime

Use runtime options to select a model, interpreter, plugin, or Codex
configuration value.

| Argument                                                  | Description                                                                                                     |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `--auth {auto,chatgpt,api-key}`                           | Select the scan credentials. The default is `auto`.                                                             |
| `--provider {openai,openrouter,fireworks,amazon-bedrock}` | Select the inference provider. The default is `openai`.                                                         |
| `--model MODEL`                                           | Select the model. The default is `gpt-5.6-sol`. Required for OpenRouter, Fireworks, and Amazon Bedrock.         |
| `--effort EFFORT`                                         | Select the model's reasoning effort. The default is `xhigh`; supported values depend on the model and provider. |
| `--plugin-path PATH`                                      | Use a Codex Security plugin directory or ZIP to override the bundled plugin.                                    |
| `--python PATH`                                           | Select the Python interpreter for the plugin runtime.                                                           |
| `--codex KEY=VALUE`                                       | Override an isolated Codex configuration value. Values use TOML syntax. Repeat the flag for more values.        |

Codex Security accepts model IDs and reasoning-effort values as strings.
Supported combinations depend on the model, provider, Codex version, and your
credentials.

If the scan's isolated Codex configuration selects a profile, that profile's
`model` and `model_reasoning_effort` values take precedence over `--model` and
`--effort`. Your normal Codex configuration isn't loaded.
Add `--dry-run --verbose` to your scan command to inspect the resolved model
and effort before starting a scan.

To choose a model and reasoning effort, select a [Codex model](https://learn.chatgpt.com/docs/models)
available to your account:

```bash
npx @openai/codex-security scan . --model gpt-6.1-sol --effort medium
```


Quote string values passed through `--codex` so the TOML parser receives a
string:

```bash
npx @openai/codex-security scan . --codex 'model="gpt-6.1-sol"'
```


Model and effort values pass through to Codex unchanged. Unsupported
combinations return Codex or provider errors without substituting another
model or effort.

## `codex-security scan import`

Save existing findings as a completed scan in local history without running
security analysis or making model calls. Import doesn't require model
authentication.

```text
usage: codex-security scan import (--csv FILE | --json FILE)
                                  [--output-dir DIR] [--archive-existing]
                                  [--dry-run] [--format json]
```

Supply exactly one input. CSV uses the Codex Security export columns. JSON
accepts a complete `codex-security.findings` document or an object containing
a `findings` array that matches the findings schema. Arbitrary scanner JSON
and raw GitHub alert arrays aren't accepted as saved findings.

Save this synthetic example as `findings.csv`:

```csv
occurrence_id,finding_id,title,summary,severity,confidence,status,close_reason,note,remediation,path,start_line,end_line
occ_000000000000000000000001,csf_000000000000000000000001,Missing authorization check,The route reads a record without checking ownership,high,high,open,,,Check record ownership before returning data,src/routes.ts,18,18
```

Validate the file, then import it:

```bash
npx @openai/codex-security scan import --csv findings.csv --dry-run --format json
npx @openai/codex-security scan import --csv findings.csv --format json
```

The dry run reports `dryRun: true` and `findingCount: 1` without saving a scan.
The import returns the saved scan ID and result paths. To import JSON instead:

```bash
npx @openai/codex-security scan import --json findings.json --format json
```

For this command, `--json FILE` selects the input file. Use `--format json` for
JSON output.

| Option               | Behavior                                                                        |
| -------------------- | ------------------------------------------------------------------------------- |
| `--csv FILE`         | Read findings in the Codex Security CSV export format.                          |
| `--json FILE`        | Read a findings document or an object with a `findings` array.                  |
| `--dry-run`          | Validate the input without saving a scan.                                       |
| `--output-dir DIR`   | Choose the artifact directory. The default is persistent Codex Security state.  |
| `--archive-existing` | Archive existing results before importing. This option requires `--output-dir`. |

Use a regular input file with no symbolic links or directory junctions in its
path. Each import preserves finding occurrences, including duplicates, and
retains the input under `artifacts/import/`. Original identifiers are stored in
`extensions.import`. Completion means the import finished; it doesn't mean the
source was reviewed. `scans rerun SCAN_ID` imports the retained input again.

To scan a repository named `import`, use `scan ./import`.

## `codex-security import github`

Read GitHub code scanning alerts without changing GitHub or checking out code:

```bash
npx @openai/codex-security import github example/repository --format json > /path/outside/repository/alerts.json
npx @openai/codex-security import github example/repository \
  --github-alert 12 --github-alert 18 --format json
```

Replace `example/repository` with your repository. Authenticate with GitHub
CLI credentials that have code-scanning read access. By default, import reads
open alerts from the default branch, including third-party SARIF uploads.

| Option                  | Behavior                                                                          |
| ----------------------- | --------------------------------------------------------------------------------- |
| `--github-alert NUMBER` | Select an exact alert regardless of state; repeat for multiple alerts.            |
| `--github-ref REF`      | Select a Git reference instead of the default branch.                             |
| `--github-state STATE`  | List `open`, `closed`, `dismissed`, `fixed`, or `all` alerts; defaults to `open`. |

Don't combine exact alert numbers with a state other than `open`. The command returns
an array of upstream alerts, not a saved scan. From the corresponding local
repository, run
`codex-security validate /path/outside/repository/alerts.json` to assess them.
Keep the full JSON without output filters or token limits when saving
validation inputs. Use [`scan import`](#codex-security-scan-import) for
findings already in the Codex Security schema. To import Dependabot alerts, use
[`publish findings`](#codex-security-publish-findings).

## `codex-security install-hook`

Install the CLI outside the repository, inspect the repository's existing
pre-commit hook, and run the installed CLI from outside the checkout:

```bash
git -C /path/to/repository rev-parse --git-path hooks/pre-commit
codex-security install-hook /path/to/repository
```

The check scans staged and unstaged changes before each commit and blocks
commits on high or critical findings or scan errors. Local hooks are optional;
use a required CI check for enforcement. Leave custom, linked, or shared hooks
and hook directories to their owner. The installer doesn't replace an unrelated
pre-commit script. Set a different severity threshold when needed:

```bash
codex-security install-hook /path/to/repository --fail-on-severity medium
```

## `codex-security policy`

Draft a `SECURITY.md` policy that describes project security boundaries and
what should count as a finding:

```bash
npx @openai/codex-security policy .
npx @openai/codex-security policy . --headless --json
```

The command saves a draft outside the repository and leaves existing files
unchanged. Review the draft, diff, and review notes, then copy only the reviewed
`SECURITY.md` to the displayed policy target. In headless mode, unanswered
questions remain in the review notes. Policy generation is optional; scans
can use an existing policy or run without one. See the [policy guide](https://github.com/openai/codex-security/blob/main/sdk/typescript/docs/cli.md#generate-a-security-policy) for path scopes and options.

## `codex-security scan-components`

Use `scan-components` to scan services or packages in one repository separately.
Each run, including a plan-only run, needs a new or empty output directory
outside the enclosing Git worktree. Set it with `--output-dir` or with
`output.directory` in the project configuration.

For example, scan two services in parallel:

```bash
npx @openai/codex-security scan-components . \
  --component apps/api --component apps/web \
  --output-dir /path/outside/repository/manual-components
```

Unlike `scan --path`, this command produces a scan per component, then combines
and matches the findings. By default, four component scans can run at once.
Set `--workers N` to change that limit. `--max-cost USD` limits each component
scan. It excludes automatic planning and cross-component matching.

To have Codex propose a split, save a plan for review before scanning:

```bash
npx @openai/codex-security scan-components . --auto --plan-only \
  --output-dir /path/outside/repository/component-plan
```

Review the component names and paths in `components.json`, then run the saved
plan in a new output directory:

```bash
npx @openai/codex-security scan-components . \
  --components-file /path/outside/repository/component-plan/components.json \
  --output-dir /path/outside/repository/components
```

Open `report.md` in the output directory to review the combined findings. If
a component fails, use the saved retry plan to rerun only the failed components:

```bash
npx @openai/codex-security scan-components . \
  --components-file /path/outside/repository/components/retry-components.json \
  --output-dir /path/outside/repository/retry-results
```

The retry report covers only the retried components. Keep the original report
to review findings from components that completed on the first run.

Failed scans or matching failures return `2`. Severity-policy violations return `1`. See the [component scan guide](https://github.com/openai/codex-security/blob/main/sdk/typescript/docs/cli.md#scan-project-components) for plan syntax and retries.

## `codex-security bulk-scan`

Discover and scan GitHub repositories, or run a resumable scan from a
repository CSV.

For GitHub discovery, CSV inventories, campaign results, and containerized
scans, see [Run bulk security
scans](https://learn.chatgpt.com/docs/security/cli/bulk-scans).

```text
usage: codex-security bulk-scan [input] [--output-dir DIR]
                                [--workers N] [--mode {standard,deep}]
                                [--provider {openai,openrouter,fireworks,amazon-bedrock}]
                                [--model MODEL]
                                [--effort EFFORT]
                                [--knowledge-base PATH]
                                [--scan-prompt-file FILE]
                                [--post-scan-prompt-file FILE]
                                [--max-attempts N] [--plugin-path PATH]
                                [--python PATH] [--codex KEY=VALUE]
```

Run `npx @openai/codex-security bulk-scan` without arguments to select
repositories interactively. This flow requires a GitHub CLI sign-in.

For interactive discovery, select a [Codex model](https://learn.chatgpt.com/docs/models) available
to your account:

```bash
npx @openai/codex-security bulk-scan --model gpt-6.1-sol --effort medium
```


For a prepared repository list, provide a CSV and `--output-dir`:

```bash
npx @openai/codex-security bulk-scan repositories.csv \
  --output-dir /path/outside/repositories/security-scans \
  --workers 4
```

The CSV requires `id`, `repository`, and `revision` columns. Revisions must be
full commit hashes. Optional `scope`, `mode`, and `prompt` columns configure
individual repositories:

```csv
id,repository,revision,scope,mode,prompt
service,https://github.com/example/service.git,0123456789abcdef0123456789abcdef01234567,src,standard,Review authorization boundaries.
```

Use `--knowledge-base PATH` to share security documents across every
repository. Use `--scan-prompt-file FILE` to add shared scan instructions; the
CSV `prompt` column adds repository-specific instructions after that shared
prompt. `--post-scan-prompt-file FILE` runs follow-up instructions after each
scan, including scans that return errors. It doesn't run after
cancellation or when a scan reaches its cost limit.

`--workers` limits simultaneous repository scans and defaults to `4`. `--mode`
defaults to `standard`, and `--max-attempts` defaults to `1`. Set
`--max-attempts` to retry repository or scan errors. Exclusions and follow-up
notes don't trigger retries of completed scans. Remaining execution failures
return `2`; completed severity-policy violations return `1`.

Run the same command again to resume from an existing output directory. The CLI
skips completed scans. Use `--recover` to retry failed or interrupted attempts
in a matching campaign.

For containerized campaigns, see [Run bulk scans in
Docker](https://learn.chatgpt.com/docs/security/cli/bulk-scans#run-bulk-scans-in-docker).

## `codex-security scans`

### Find saved scans

List saved scans for the current directory:

```bash
npx @openai/codex-security scans
```

List scans for a different repository:

```bash
npx @openai/codex-security scans list /path/to/repository
```

Find scans stored under a specific output directory:

```bash
npx @openai/codex-security scans list --scan-root /path/outside/repository/results
```

### Inspect or repeat a scan

Show a saved scan's results and configuration:

```bash
npx @openai/codex-security scans show SCAN_ID
```

Add `--show-linked-findings` to include finding links from earlier scans.

Rerun a saved scan:

```bash
npx @openai/codex-security scans rerun SCAN_ID
```

A rerun creates a new scan using saved settings and authentication choice,
the current checkout, and current context files. It doesn't reload project
configuration files or reuse saved credentials. If the original used scan or
custom-validation prompts, supply those files again with `--scan-prompt-file`
and `--validation-prompt-file`.

Reruns require the original scan's recorded plugin version and stop if the
installed version differs.

### Inspect saved scan logs

Read the complete saved session events for a scan and its workers. These logs
aren't redacted and can contain source code or credentials, so review them
before sharing:

```bash
npx @openai/codex-security scans logs SCAN_ID
```

Add `--json` for structured output.

### Match and compare findings

Compare two scans to find new, persisting, reopened, not observed, resolved, and
unknown findings:

```bash
npx @openai/codex-security scans compare PREVIOUS_SCAN_ID CURRENT_SCAN_ID
```

The comparison automatically matches findings that share the same root cause
and reuses saved matches. To save matches explicitly, use `scans match`:

```bash
npx @openai/codex-security scans match PREVIOUS_SCAN_ID CURRENT_SCAN_ID
```

A finding is unknown when its path is excluded or its match is uncertain. If
the later scan doesn't find it in the code it scanned, it is not observed.
Only a finding explicitly closed as already fixed is resolved. Add `--force`
to `match` when you need to recompute an existing match.

To match all completed scans for the current repository, including scans from
other checkouts:

```bash
npx @openai/codex-security scans match --all
```

Scan results can vary even when you rerun the same configuration. Matching and
comparison track changes; they don't make results deterministic or prove that a
vulnerability no longer exists. Use `validate` to recheck a security-critical
finding against the current code.

## `codex-security findings`

List open findings across the current repository's scans:

```bash
npx @openai/codex-security findings list
```

Pass a repository path to inspect another checkout:

```bash
npx @openai/codex-security findings list /path/to/repository
```

Add `--json` for structured output. The list identifies findings seen in the
latest scan and earlier findings that weren't confirmed in that scan.

Earlier findings remain open until resolved or dismissed. Their absence from
the latest scan doesn't establish that they are fixed.

To record a reviewed finding as a false positive:

```text
usage: codex-security findings false-positive OCCURRENCE_ID
                       --reason REASON
```

Inspect the saved scan to identify the finding occurrence:

```bash
npx @openai/codex-security scans show SCAN_ID
```

Record a specific explanation for the false positive:

```bash
npx @openai/codex-security findings false-positive FINDING_OCCURRENCE_ID \
  --reason "The framework escapes this input before it reaches the query"
```

The reason must not be empty. Codex Security saves the decision for the
repository and provides it as context to future scans. Each scan independently
rechecks the current source, controls, and reachability. A previous decision
doesn't suppress a rule, path, or vulnerability class.

## `codex-security export`

Export saved findings or a threat model without starting Codex or loading
credentials. You can export findings as CSV, JSON, SARIF, or a ServiceNow AVIT
CSV only from a completed, sealed scan. Threat models use Markdown.

```text
usage: codex-security export [scan_dir | --scan SCAN_ID]
                             [--artifact {findings,threat-model}]
                             [--export-format {csv,json,sarif,md,servicenow-avit}]
                             [--avit-template FILE]
                             [--output FILE|-] [--source-root PATH]
                             [--python PATH]
```

Omit `scan_dir` and `--scan` to use the current repository's latest completed
scan. Otherwise, provide a saved result directory or select a scan by ID or
unique prefix of at least eight characters with `--scan`. You can't combine
these selectors.

| Argument                             | Description                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `--artifact {findings,threat-model}` | Select the saved artifact. The default is `findings`.                                                                    |
| `--scan SCAN_ID`                     | Select a saved scan by ID, unique prefix of at least eight characters, or `latest`.                                      |
| `--export-format FORMAT`             | Select `csv`, `json`, `sarif`, `md`, or `servicenow-avit`. Findings default to `sarif`; threat models support only `md`. |
| `--avit-template FILE`               | Supply the CSV template that `servicenow-avit` requires. Only this format accepts it.                                    |
| `--output FILE\|-`                   | Write the selected format to a file or stdout. Defaults to a file in the current directory.                              |
| `--source-root PATH`                 | Add source-line fingerprints to SARIF using a repository checkout.                                                       |
| `--python PATH`                      | Select the Python interpreter for the bundled exporter.                                                                  |

`--source-root` works only with SARIF findings exports. JSON preserves
the sealed findings document. CSV contains portable finding columns and does
not include local workbench triage state.

Without `--output`, the CLI writes SARIF to `results.sarif`, JSON to
`findings.json`, CSV to `findings.csv`, ServiceNow AVIT CSV to
`servicenow-avit.csv`, and Markdown to `threatmodel.md` in the current working
directory.
Exports can contain source excerpts and vulnerability details. Pass `--output`
with a private path outside the checkout. When running outside the repository,
also specify a result directory or `--scan`.

### Export findings

Write SARIF to a file:

```bash
npx @openai/codex-security export /path/to/scan \
  --export-format sarif \
  --source-root /path/to/repository \
  --output /path/outside/repository/exports/results.sarif
```

Write SARIF to stdout:

```bash
npx @openai/codex-security export /path/to/scan \
  --export-format sarif \
  --source-root . \
  --output -
```

Export findings as JSON:

```bash
npx @openai/codex-security export /path/to/scan \
  --export-format json \
  --output /path/outside/repository/exports/findings.json
```

Export findings as CSV:

```bash
npx @openai/codex-security export /path/to/scan \
  --export-format csv \
  --output /path/outside/repository/exports/findings.csv
```

### Export findings for ServiceNow

ServiceNow requires the **Ethical Hacker** role (`sn_vul.app_pen_tester`).
Open **All** > **Manual AVIT Ingestion** > **Upload File UI** and download the
CSV template. Keep the original headers and exactly one data row.
Use the exact ServiceNow application name. Fill in the purpose, sensitive data
types, compliance programs, technology stack, application team, and URLs to test.
Set **Requested by**, **Assigned to**, and **Assignment group**. Leave the
finding fields blank. Save the template as `app.csv` in a private directory
outside the scanned repository. Reuse it for scans of the same application.

From the scanned repository, export the latest findings with that template.
Keep the output in the private directory as well:

```bash
npx @openai/codex-security export --scan latest \
  --export-format servicenow-avit \
  --avit-template /path/outside/repository/exports/app.csv \
  --output /path/outside/repository/exports/findings-avit.csv
```

The CLI writes one row per finding and fills **Steps to reproduce** from the
recorded attack path when available. Review those steps and fill in any blanks
in the exported CSV. Return to **Upload File UI**, select **Import File**,
upload the CSV, and select **Submit**. Each upload creates a new penetration
test form for the application.
See the [ServiceNow upload instructions](https://www.servicenow.com/docs/r/security-management/application-vulnerability-response/ingest-vulnerabilities-manually-avr.html).

### Export a saved threat model

Export the latest completed scan's saved threat model to stdout without making
another model call:

```bash
npx @openai/codex-security export --artifact threat-model --output -
```

Or select a scan and save its model to a file:

```bash
npx @openai/codex-security export --scan SCAN_ID \
  --artifact threat-model \
  --output /path/outside/repository/exports/threatmodel.md
```

If you select a scan by ID or directory, you can also export a saved model
from an unfinished or failed scan. If no model was saved, the command returns
an error. Review any provisional or recovered content identified in the
document before reusing it.

To provide the exported model as context for another scan, pass its path to
[`--knowledge-base`](#add-security-context).

## `codex-security publish scan`

Publish selected findings from a completed scan to Linear or a custom findings
service. The following options describe Linear publication:

```text
usage: codex-security publish scan [SCAN_DIR] --to linear
                                   [--linear-team TEAM_ID]
                                   [--project PROJECT_ID]
                                   [--linear-api-key KEY]
                                   [--linear-assignee EMAIL_OR_USER_ID]
                                   [--dry-run] [--json]
```

`SCAN_DIR` must contain a completed, sealed scan. Omit it in an interactive
terminal to select a completed scan from local scan history. Creating issues
also requires the scan and its findings to exist in local scan history. A dry
run validates the sealed artifacts without this persistence check.

Use `--scan SCAN_ID` or `--scan latest` instead of a directory to select a
saved scan. Repeat `--finding-id ID` to select a subset for Linear. Use
`publish check SCAN_DIR` with the Linear destination options to verify artifacts
and recorded publications. With an API key, it also checks authentication and
destination access; connected-app access is reported as `not-checked`.

| Argument                             | Description                                                                                                                                                      |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--to linear`                        | Publish to Linear. This argument is required.                                                                                                                    |
| `--linear-team TEAM_ID`              | Select the Linear team. Uses `CODEX_SECURITY_LINEAR_TEAM` when omitted; one of them is required.                                                                 |
| `--project PROJECT_ID`               | Select a Linear project. Uses `CODEX_SECURITY_LINEAR_PROJECT` when omitted. If neither is set, issues are created directly in the team.                          |
| `--linear-api-key KEY`               | Use a Linear personal API key for direct publication. Uses `CODEX_SECURITY_LINEAR_API_KEY` when omitted.                                                         |
| `--linear-assignee EMAIL_OR_USER_ID` | Assign created issues by email address or Linear user ID. Requires `--linear-api-key` or `CODEX_SECURITY_LINEAR_API_KEY`. Issues remain unassigned when omitted. |
| `--dry-run`                          | Prepare issue payloads without starting Codex, contacting Linear, creating issues, or writing publication state.                                                 |
| `--skip-existing`                    | Skip findings with a recorded successful publication for the same occurrence, Linear team, and project. Requires local history.                                  |
| `--json`                             | Write structured publication results to stdout. Progress remains on stderr.                                                                                      |

Linear issue descriptions and dry-run output can include source code snippets
  and vulnerability details. Check who can view the destination team or project
  before publishing.

Each non-dry-run invocation attempts to create a new issue for every selected
finding unless `--skip-existing` finds a recorded success for that occurrence,
team, and project. This option doesn't inspect remote issues or cover
unrecorded or concurrent publication.
If some findings fail, the command preserves successfully created issues and
returns exit code `2`.
With `--json`, review the `created` and `failed` results before retrying to
avoid duplicates.

Preview the issue payloads before publishing:

```bash
npx @openai/codex-security publish scan /path/to/completed-scan \
  --to linear \
  --linear-team TEAM_ID \
  --dry-run \
  --json
```

### Publish with the connected Linear app

Without a Linear API key, the command starts Codex using your existing
configuration and connected Linear app. Sign in and connect Linear to your
Codex account before publishing:

```bash
npx @openai/codex-security login
npx @openai/codex-security publish scan /path/to/completed-scan \
  --to linear \
  --linear-team TEAM_ID \
  --project PROJECT_ID
```

### Publish with a Linear API key

Supplying `--linear-api-key` or `CODEX_SECURITY_LINEAR_API_KEY` publishes
directly through the Linear API and doesn't start Codex. Direct publication
leaves issues unassigned unless you select an assignee:

```bash
export CODEX_SECURITY_LINEAR_API_KEY=YOUR_LINEAR_PERSONAL_API_KEY
npx @openai/codex-security publish scan /path/to/completed-scan \
  --to linear \
  --linear-team TEAM_ID \
  --linear-assignee teammate@example.com
```

Command-line values override their matching environment variables. For API
keys, prefer `CODEX_SECURITY_LINEAR_API_KEY` over `--linear-api-key` because
command-line arguments can appear in shell history and process listings.

### Publish to a custom findings service

For an existing findings service, select its URL explicitly:

```bash
npx @openai/codex-security publish scan --scan latest \
  --to custom --findings-url http://localhost:3000
```

Publication sends the complete sealed findings and the repository target ID.
Findings can include source excerpts, evidence, and vulnerability details. Use
HTTPS for services outside your local machine, and add `--dry-run --json` to
inspect the payload before sending it.

The CLI doesn't send model credentials to a custom service. Handle any required
authentication outside the CLI. See the [findings service guide](https://github.com/openai/codex-security/blob/main/sdk/typescript/docs/findings-service.md) for deployment and protocol details.

## `codex-security publish findings`

Use `--to local` to save imported findings on your machine. With `--to cloud`,
even a preview contacts the service. It needs a file-backed ChatGPT login and
an authorized repository ID or URL with an existing Cloud environment. A Cloud
import can return a partial result if the service rejects individual records.
See the [GitHub import guide](https://github.com/openai/codex-security/blob/main/sdk/typescript/docs/cli.md#import-github-findings-locally-or-to-cloud) for both workflows.

To import Dependabot alerts for a local checkout, you need a saved export from
the same GitHub repository. Follow the [Dependabot export guide](https://github.com/openai/codex-security/blob/main/docs/scanner-imports/github-dependabot.md) to save all pages outside the checkout using a token with read access to Dependabot alerts.

Append `echo "$out/dependabot.jsonl"` to the export script before running it.
In a new shell, use the path it printed to preview the file. Replace `./project` and `OWNER/REPO` with your checkout and repository.
If the checkout has network remotes, one must match the alert repository.
Otherwise, verify that the export belongs to the checkout.

```bash
export CODEX_SECURITY_ENABLE_EXTERNAL_IMPORTS=1
npx @openai/codex-security publish findings /path/to/dependabot.jsonl \
  --to local --repository ./project --provider github \
  --source-key github.com/OWNER/REPO/dependabot --dry-run --format json
```

Check the destination and exclusions in the preview. A dry run exits with `0`
even if it lists excluded alerts. To save the accepted alerts, rerun without
`--dry-run` and confirm, or replace `--dry-run` with `--yes`. If the import
excludes any alerts, it saves the accepted ones and exits with `1`. Read the
stored alerts in the same shell.

```bash
npx @openai/codex-security findings imported ./project --format json
```

Imported alerts start with the assessment status `not_assessed`. With the same
source key, a later import updates the stored records for alerts in the file.
Omitted alerts keep their last imported state. Alerts that share an advisory remain
separate records.

## Finding review commands

These commands work with existing findings:

| Command             | Example                                                                                | Behavior                                                                                                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `classify-severity` | `codex-security classify-severity --scan latest --rubric policy.md --json`             | Apply a rubric without repeating discovery or rewriting original findings. Omit `--rubric` to inherit an existing severity without model calls. Findings without severity require a rubric. |
| `suggest-owners`    | `codex-security suggest-owners findings.json --source-root /path/to/repository --json` | Read committed source, CODEOWNERS, blame, and Git history to suggest owners. Doesn't assign tickets.                                                                                        |
| `dedupe`            | `codex-security dedupe --scan SCAN_ID --json`                                          | Identify duplicate findings in local SQLite. Missing or stale embeddings require an embedding API key; fresh reviews require model access.                                                  |
| `verify-fix`        | `codex-security verify-fix --scan SCAN_ID --json`                                      | Check existing fixes in a read-only sandbox. Accepts finding IDs, descriptions, and Linear selectors.                                                                                       |

`verify-fix` returns `2` if any check is inconclusive or fails. Otherwise, it
returns `1` if any finding remains vulnerable, or `0` if all findings are fixed.
Use each command's `--help` for selectors, model settings, and output options.

## `codex-security feedback`

Send a problem description to OpenAI and receive an ID to share with support:

```bash
npx @openai/codex-security feedback SCAN_ID \
  --reason "The scan stopped before it finished" --json
```

Without a scan ID, the command selects the most recently started scan in the
current repository, including active or failed scans, or sends a general
report if none exists. Reports include the description, versions, and selected
scan/session IDs. Logs are excluded by default. Add `--include-logs` only when
you can share the included source, prompts, findings, and tool output with
OpenAI.

## `codex-security validate` and `codex-security patch`

Assess candidate findings against the current repository's source code:

```bash
npx @openai/codex-security validate findings.json \
  "Possible SQL injection in src/query.ts:42"
```

Generate a fix with the bundled remediation skill:

```bash
npx @openai/codex-security patch findings.json \
  "Missing authorization check in src/routes.ts:18"
```

Each positional argument accepts literal text or a file path. These inputs use
the current directory. `validate` uses a read-only sandbox to assess source
evidence. It doesn't build the target, execute application code, run tests or
proofs of concept, or contact services. Standard, Deep, and diff scans retain
their own validation workflows; `patch` still fixes and verifies findings.

Use `validate` to reassess a finding after a fix or when a later scan no longer
reports it. Comparing scans alone doesn't prove that a fix worked. For runtime
evidence, run a separate reproduction step.

The command prints its assessment to stdout without saving a report. Redirect
stdout to retain it:

```bash
npx @openai/codex-security validate findings.json > /path/outside/repository/assessment.md
```

Add `--context TEXT`, `--context-file FILE`, or repeated `--knowledge-base PATH`
options to supply security context. For structured output, use
`--output-schema FILE` with a self-contained JSON Schema supported by your model
and provider. The CLI checks the generated JSON against the schema before
writing stdout. If the output is invalid, the CLI exits with `2` and writes no
assessment. `validate` doesn't accept `--json`.

Use `--effort` to select reasoning effort for either command:

```bash
npx @openai/codex-security validate "Possible SQL injection" --effort high
```

### Patch findings after a scan

Use `scan --patch` to fix findings after a completed scan. The default severity
threshold is `low`. This command selects high and critical findings:

```bash
npx @openai/codex-security scan . --patch --patch-severity high --json
```

Verified and already-fixed findings don't trigger `--fail-on-severity`.

### Patch saved findings

Pass a finding or occurrence ID to patch its original repository, or select
findings from a saved scan:

```bash
npx @openai/codex-security patch OCCURRENCE_ID
npx @openai/codex-security patch --scan SCAN_ID --severity high --json
npx @openai/codex-security patch --scan latest --severity medium
```

`--scan latest` selects the latest completed scan for the current repository.
`patch` supports `--json` for saved findings, literal text, and file inputs.

Add `--create-pr` to commit only verified patch files and open a draft GitHub
pull request or GitLab merge request with the corresponding CLI:

```bash
npx @openai/codex-security patch --scan SCAN_ID --severity high --create-pr
```

If the push or pull request fails, run the printed `patch --resume-pr BRANCH`
command from the same repository to retry.

### Patch Linear issues

Set `CODEX_SECURITY_LINEAR_API_KEY` or `LINEAR_API_KEY` for a personal API key,
or `LINEAR_ACCESS_TOKEN` for an OAuth token. Prefer an environment variable to
`--linear-api-key KEY` to keep the key out of shell history.

Import an issue by ID or URL. Repeat `--linear-issue` to select more than one
issue:

```bash
npx @openai/codex-security patch --linear-issue SEC-123 --linear-issue SEC-124
```

Use `--linear-project` to select a project's open issues. Add `--linear-filter`
to narrow the selection:

```bash
npx @openai/codex-security patch --linear-project "Security backlog" \
  --linear-filter '{"labels":{"name":{"eq":"security"}}}'
```

The CLI excludes completed and canceled issues unless the filter sets `state`.
It doesn't change the Linear issues.

## `codex-security login`, `logout`, and `info`

Sign in interactively:

```bash
npx @openai/codex-security login
```

Use device authentication on a remote or headless machine:

```bash
npx @openai/codex-security login --device-auth
```

Check the current sign-in:

```bash
npx @openai/codex-security login status
```

Remove the stored sign-in:

```bash
npx @openai/codex-security logout
```

Store an API key by passing it on stdin:

```bash
printenv OPENAI_API_KEY | npx @openai/codex-security login --with-api-key
```

Store an enterprise access token:

```bash
printenv CODEX_ACCESS_TOKEN | npx @openai/codex-security login --with-access-token
```

Inspect read-only SDK and bundled-plugin metadata:

```bash
npx @openai/codex-security info --json
```

## Read scan output

By default, scans send progress, completion summaries, and errors to stderr
without writing the complete scan result to stdout. Request `--json`,
`--format`, or `--full-output` to send structured scan results to stdout.

Interactive terminals show a live dashboard with the current scan phase,
file inventory, activity, token usage, and estimated cost. CI and redirected
output use plain-text progress. Add `--headless` to use plain-text progress in
an interactive terminal:

```bash
npx @openai/codex-security scan . --headless
```

The dashboard also shows live session details. They aren't redacted and can
contain source code or credentials. Review them before sharing.

### Verbose diagnostics

Add `--verbose` to print lifecycle, authentication, progress, and cost
diagnostics to stderr:

```bash
npx @openai/codex-security scan . --verbose
```

Set `CODEX_SECURITY_LOG_LEVEL=debug` to enable the same diagnostics without the
flag. `LOG_LEVEL=debug` also enables diagnostics when
`CODEX_SECURITY_LOG_LEVEL` is unset or blank.

Codex Security preserves diagnostic text. Diagnostics can contain source code
or credentials, so review them before sharing.

### Completion summary

A completed scan writes its open repository finding count, severity breakdown,
elapsed time, report path, and result directory to stderr. It also reports token
usage when available and estimated cost when you set `--show-cost` or
`--max-cost`. For example:

```text
  REPORT    /path/to/scan/report.md

  FINDINGS  4 (3 confirmed this scan; 1 previously found; 1 critical, 2 high, 1 informational)
  SCOPE     repository: .
  ELAPSED   1s
  RESULTS   /path/to/scan
```

Informational findings count toward the summary total. Severity policies
evaluate only `critical`, `high`, `medium`, and `low` findings from the current
scan, not earlier findings shown in the repository total.

### JSON output

`scan --json` writes one JSON document to stdout. Use `manifest.scan` for
status and scope and `findings` for the current scan's findings. When available,
`repositoryFindings` includes those findings and earlier open findings.
`review.excludedPaths` lists path patterns the scan recorded as excluded from
review. `scanDir`, `reportPath`, and `artifactsDir` point to the saved results.

`threatModel` contains the saved model as structured data or Markdown.
`threatModelPath` points to its saved document. Either can be `null`; the model
can still be exported if writing the document failed.

When [patching](#patch-findings-after-a-scan), JSON output also includes patch
results and any created pull request.

Progress, completion summaries, archive notices, and diagnostics remain on
stderr. A completed scan still prints the JSON result when a severity policy
returns exit `1`.

Always check the process exit code, even when JSON parses successfully.
Execution failures without returned scan results produce a structured error
with `status`, `code`, and `message` when using `--json`, `--format json`, or
`--format jsonl`. When valid scan results are retained, output can instead
contain the normal scan result and `warnings`, such as after a target change.
With `--json`, `--format json`, or `--format jsonl`, add `--full-output` to
receive an `ok: false` envelope with the error under `error` and any valid
retained sealed results under `data`. Other formats report failures only on
stderr, even with `--full-output`. These rules also apply to `scans rerun` and
`scans resume`.

`codex-security scan --json` emits one JSON document. `codex exec --json`
  emits a JSON Lines event stream.

## Scan artifacts

A completed scan keeps the readable report and structured artifacts together.
The sealed manifest records artifact hashes so later readers can check that
those files haven't changed:

```text
<scan-directory>/
├── scan-manifest.json
├── findings.json
├── report.md
├── threatmodel.md          # when available
├── artifacts/
└── exports/
    └── results.sarif       # when produced
```

The structured files serve different jobs:

| File                    | Contents                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `scan-manifest.json`    | Scan identity, status, target, scope, producer, and sealed artifact records.                                                    |
| `findings.json`         | Finding identifiers, severity, confidence, taxonomy, locations, evidence, validation, data flow, reachability, and remediation. |
| `report.md`             | Readable scan report.                                                                                                           |
| `threatmodel.md`        | Saved threat model, when available.                                                                                             |
| `artifacts/`            | Supporting scan artifacts.                                                                                                      |
| `exports/results.sarif` | SARIF generated during the scan, when present.                                                                                  |

### Completion and review coverage

Read `scan.status` in `scan-manifest.json` to check whether the scan
completed. Read `scan.scope` for the configured scope and
`scan.review.excludedPaths` for exclusions the scan recorded during review.
Scan comparisons also use those exclusions. A completed scan can still leave
some files in scope unreviewed.

For unresolved work, inspect the available evidence with `scans show SCAN_ID`
and `scans logs SCAN_ID`. An eligible interrupted Deep Scan can continue with
`scans resume SCAN_ID`. To start a new review with saved settings, use
`scans rerun SCAN_ID` when a launch recipe is available. Plugin scans may lack
a replayable recipe; start a new scan with the intended paths and context in
that case.

## Exit codes and signals

The CLI uses these exit codes:

| Exit  | Condition                                                                                                                                                                                                   |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0`   | A scan or bulk campaign completed and passed its severity policy, a publication completed without failures, or another command succeeded.                                                                   |
| `1`   | A scan or bulk campaign meets its severity threshold, `verify-fix` reports an unfixed finding with no inconclusive results, or a confirmed import excludes local records or returns a partial Cloud result. |
| `2`   | An input, execution, result-integrity, required-output, or export failure occurred, `publish scan` has one or more failed findings, or `verify-fix` reports an inconclusive result.                         |
| `130` | Ctrl-C interrupted a scan or publication.                                                                                                                                                                   |
| `143` | SIGTERM terminated a scan or publication.                                                                                                                                                                   |

Coverage gaps don't change a completed scan's exit code or bypass its severity
policy. Exit `0` doesn't mean every file was reviewed. When you request
structured output, completed scans and
partial publications still write the available results to stdout. The CLI
prints the location of any partial output after an interruption or runtime
error.

## Local scan permissions

CLI and SDK scans run with your local operating-system permissions. The scan
profile permits reading the local filesystem and writing to workspace roots.
Execution approvals are reviewed automatically and may grant extra permissions
for an operation. Use `--codex 'approval_policy="never"'`, or set
`codexOverrides.approval_policy: "never"` in the SDK, to deny permission requests. Host
and network restrictions still apply.

Scan and workbench processes can inherit your environment, including unrelated
API tokens and cloud credentials. Remove unrelated credentials before
starting a scan.

## Authentication and prerequisites

Set `OPENAI_API_KEY` or `CODEX_API_KEY`, sign in with
`npx @openai/codex-security login`, or use an existing file-backed Codex
sign-in. For OpenRouter or Fireworks, set the provider's API key and select a
model. For Amazon Bedrock, use a Bedrock API key or the standard AWS
credential chain instead.

For credential selection, see [Select scan
authentication](#select-scan-authentication).

For CI, keep the API key scoped to the scan step and use a trusted workflow.

The CLI requires Node.js 24 or 26, or Node.js 22 starting with 22.13.0.
Scans, bulk scans, exports, scan history, and saved findings also require
Python 3.10 or later.
Python 3.10 also requires `tomli`. Use `--python` with `scan`, `bulk-scan`, or
`export`, or set `PYTHON` for any Python-backed command.

To read or resume compressed Codex sessions (`.jsonl.zst`), use Node.js
22.15.0 or later within 22.x, or Node.js 24 or 26. Plain `.jsonl` sessions work
on all supported Node.js versions.

Continue with the [CLI quickstart](https://learn.chatgpt.com/docs/security/cli), [bulk-scan
guide](https://learn.chatgpt.com/docs/security/cli/bulk-scans), [CLI FAQ](https://learn.chatgpt.com/docs/security/cli/faq), [CI
guide](https://learn.chatgpt.com/docs/security/cli/ci), or [TypeScript SDK guide](https://learn.chatgpt.com/docs/security/sdk).

### Plain-text aliases

- --output FILE|-