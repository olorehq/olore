# Run bulk security scans

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use `npx @openai/codex-security bulk-scan` to review repositories in one
campaign. Discover repositories from your personal GitHub account or an
organization, or provide a CSV that pins every repository to an exact Git
revision.

The `@openai/codex-security` package is public. Scans using OpenAI inference
  require Codex Security access. Follow the [CLI
  quickstart](https://learn.chatgpt.com/docs/security/cli) to install the CLI, then [select credentials
  for your provider](https://learn.chatgpt.com/docs/security/cli/reference#select-scan-authentication).

## Choose a repository source

| Source           | When to use it                                                                          |
| ---------------- | --------------------------------------------------------------------------------------- |
| GitHub discovery | Choose repositories interactively from your personal GitHub account or an organization. |
| CSV inventory    | Run a repeatable, automated campaign against exact repository revisions.                |

Both workflows save progress, preserve per-repository results, and let you
resume a campaign after an interruption.

## Discover GitHub repositories

Sign in with GitHub CLI:

```bash
gh auth login
```

Start an interactive bulk scan:

```bash
npx @openai/codex-security bulk-scan
```

The CLI guides you through these steps:

1. Choose your personal GitHub account or an organization.
2. Review repositories active within the last 90 days.
3. Search the repository list and select repositories to scan.
4. Choose a directory for scan results.
5. Review the selected repositories and confirm the campaign.

Discovery excludes archived repositories and forks. The CLI records the exact
default-branch commit for each selected repository in
`<output-directory>/repositories.csv`. No scans start until you confirm the
selection.

To use GitHub Enterprise Server, first sign in to your GitHub host:

```bash
gh auth login --hostname github.example.com
```

Set `GH_HOST` when you start repository discovery:

```bash
GH_HOST=github.example.com npx @openai/codex-security bulk-scan
```

Interactive discovery requires a terminal. For CI, containers, or a prepared
repository list, use a CSV inventory instead.

## Create a repository CSV

Create a CSV with one row for each repository and pinned revision:

```csv
id,repository,revision,scope,mode,prompt
payments,https://github.com/example/payments.git,0123456789abcdef0123456789abcdef01234567,services/api,standard,Review payment authorization and refunds.
identity,https://github.com/example/identity.git,fedcba9876543210fedcba9876543210fedcba98,,deep,Review session and identity boundaries.
```

The CSV supports these columns:

| Column       | Required | Description                                                                                                |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------- |
| `id`         | Yes      | Unique repository identifier. Use letters, numbers, periods, hyphens, or underscores.                      |
| `repository` | Yes      | HTTPS URL, SSH URL, or local repository path. Relative paths resolve from the CSV directory.               |
| `revision`   | Yes      | Full 40- or 64-character Git commit SHA. Branch names, tags, and shortened commit hashes aren't supported. |
| `scope`      | No       | A repository-relative directory to scan. Omit the value to scan the full repository.                       |
| `mode`       | No       | `standard` or `deep`. Omit the value to use the command's selected mode.                                   |
| `prompt`     | No       | Scan instructions specific to this repository.                                                             |

To find a local repository's full commit SHA, run:

```bash
git -C /path/to/repository rev-parse HEAD
```

## Run a campaign from CSV

Pass the CSV and a private output directory outside the repositories:

```bash
npx @openai/codex-security bulk-scan repositories.csv \
  --output-dir /path/outside/repositories/security-scans \
  --workers 4
```

`--workers` controls concurrent repository scans and defaults to `4`. It does
not set the number of independent standard-scan workers within each deep scan;
configure those limits through
[`[deep_scan]`](/codex/security/cli/reference#configure-deep-scans). Use `--mode
deep` to select deep scanning for rows without their own `mode`. Each CSV row
can still choose its own scan mode and repository scope.

Set `[deep_scan].max_time_hours` to limit worker execution for each deep scan in
the campaign. The `--max-time-hours` flag works with `scan`, not `bulk-scan`.

The CLI checks out each pinned revision, scans the selected target, records the
result, and removes the temporary repository checkout. A repository counts as
complete when its scan has a `completed` manifest status and valid required
result artifacts. Coverage gaps don't make the scan fail.

## Share security context and instructions

Add architecture documents, threat models, or security policies to every scan
with `--knowledge-base`. Repeat the flag for more files or directories:

```bash
npx @openai/codex-security bulk-scan repositories.csv \
  --output-dir /path/outside/repositories/security-scans \
  --knowledge-base /path/to/architecture.md \
  --knowledge-base /path/to/security-policies
```

To add shared scan instructions or run a follow-up after each scan, provide
prompt files:

```bash
npx @openai/codex-security bulk-scan repositories.csv \
  --output-dir /path/outside/repositories/security-scans \
  --scan-prompt-file scan-instructions.md \
  --post-scan-prompt-file follow-up.md
```

The CLI appends each repository's CSV `prompt` after the shared scan
instructions. Follow-up instructions run in the same authenticated session
after successful scans and scan errors, but not
after cancellation or a scan that reaches its cost limit. Prompt file paths
resolve from your current directory.

## Choose a model and reasoning effort

Bulk scans use `gpt-5.6-sol` with `xhigh` reasoning effort by default. To
choose another model and effort for a CSV campaign, use a model your credentials
can access. If you use ChatGPT sign-in, check [GPT-6.1 Sol
availability](https://learn.chatgpt.com/docs/models#gpt-6.1-sol) before using this example:

```bash
npx @openai/codex-security bulk-scan repositories.csv \
  --output-dir /path/outside/repositories/security-scans \
  --workers 4 \
  --model gpt-6.1-sol \
  --effort medium
```


The same options work during interactive repository discovery:

```bash
npx @openai/codex-security bulk-scan --model gpt-6.1-sol --effort medium
```


Use an `--effort` value supported by your model, provider, and Codex version.

To use OpenRouter or Fireworks, set `OPENROUTER_API_KEY` or `FIREWORKS_API_KEY`,
respectively, and specify `--provider` and `--model`. For credentials and
examples, see [OpenRouter or Fireworks
setup](https://learn.chatgpt.com/docs/security/cli/reference#use-openrouter-or-fireworks) or [Amazon
Bedrock setup](https://learn.chatgpt.com/docs/security/cli/reference#use-amazon-bedrock).

## Review campaign results

The output directory keeps the campaign configuration, a record of each attempt,
and separate results for each repository:

```text
security-scans/
├── manifest.json
├── results.jsonl
├── checkouts/
└── artifacts/
    ├── payments/
    │   └── attempt-1/
    │       ├── scan-manifest.json
    │       ├── findings.json
    │       └── report.md
    └── identity/
        └── attempt-1/
            ├── scan-manifest.json
            ├── findings.json
            └── report.md
```

- `manifest.json` records the repositories, pinned revisions, scopes, scan
  modes, and shared or repository-specific instructions in the campaign.
- `results.jsonl` records each repository attempt, its status, artifact
  directory, and any available cost or error details.
- `report.md` provides a readable report for one repository attempt.
- Open `findings.json` for the attempt's findings and `scan-manifest.json` for
  its configured scope and review exclusions.

Export one completed repository scan when you need a portable result:

```bash
npx @openai/codex-security export \
  /path/outside/repositories/security-scans/artifacts/payments/attempt-1 \
  --export-format sarif \
  --output /path/outside/repositories/payments.sarif
```

Results can contain source excerpts and vulnerability details. Keep the
output directory private and outside scanned repositories. Set how long to
keep the results.

## Resume a campaign

Run the original command with the same CSV and output directory:

```bash
npx @openai/codex-security bulk-scan repositories.csv \
  --output-dir /path/outside/repositories/security-scans \
  --workers 4
```

The CLI resumes the campaign, starting new attempts for eligible unfinished
repositories and skipping completed scans, including scans with coverage gaps.
Their results remain available.

Don't change the repository inventory or scan and follow-up instructions for
an existing output directory. The CLI checks the pinned manifest and rejects a
different campaign. Use a new output directory when you change repositories,
revisions, scopes, scan modes, or shared or repository-specific instructions.

## Retry repository errors

Use `--max-attempts` to retry a repository after a temporary checkout or scan
error:

```bash
npx @openai/codex-security bulk-scan repositories.csv \
  --output-dir /path/outside/repositories/security-scans \
  --workers 4 \
  --max-attempts 3
```

The default is one attempt per repository. Each attempt has its own result
record and artifact directory. Retries cover checkout errors, scan failures,
and missing or invalid required artifacts. Completed scans aren't retried
because of coverage gaps or severity-policy violations.

Bulk scans use these exit codes:

| Exit code | Meaning                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------- |
| `0`       | Every repository completed, and any configured severity policy passed.                          |
| `1`       | Scans completed, but findings met a configured severity threshold.                              |
| `2`       | A repository failed because of an input, execution, result-integrity, or required-output error. |
| `130`     | Ctrl-C interrupted the campaign.                                                                |
| `143`     | SIGTERM terminated the campaign.                                                                |

## Run bulk scans in Docker

The [Codex Security repository](https://github.com/openai/codex-security) includes a hardened
Compose configuration for automated CSV campaigns on a Linux Docker host. The
host must support unprivileged user namespace creation.

Keep the repository CSV, scan results, and sign-in state mounted in persistent
directories. Supply OpenAI credentials through the environment or a secret
manager. For private GitHub repositories, provide `GH_TOKEN` or `GITHUB_TOKEN`
the same way.

Run the image with the mounted CSV and output directory:

```bash
docker compose run --rm codex-security \
  bulk-scan /input/repositories.csv \
  --output-dir /output \
  --workers 4
```

Use the same mounted CSV and output directory to resume the campaign. For
GitHub Enterprise Server, set `CODEX_SECURITY_GIT_HOST` to your GitHub host.

For every available flag, see the [bulk-scan command
reference](https://learn.chatgpt.com/docs/security/cli/reference#codex-security-bulk-scan). For common
questions about scan coverage and findings, see the [CLI
FAQ](https://learn.chatgpt.com/docs/security/cli/faq).