# Codex Security CI/CD overview

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Run Codex Security in CI to review pull-request or merge-request changes, scan
your default branch, and preserve findings and coverage. See your CI
provider's guide for the workflow, report handling, and enforcement options.

## Prepare the workflow

Running scans requires Codex Security access. Store an OpenAI API key in your
CI provider's secret store as `CODEX_SECURITY_API_KEY`, then map it to the scan
process's `OPENAI_API_KEY` environment variable.

Run scans only for repositories and changes you trust. Scans use the runner's
local permissions and don't pause for approval. Keep unrelated credentials and
deployment steps in separate jobs.

### Use an approved Daybreak model

For Daybreak Blue access through [Trusted Access for
Cyber](https://learn.chatgpt.com/docs/cyber-safety#trusted-access-for-cyber), set the GitHub Action's
`model` input to `gpt-6-sol` and `cyber-access-program` to
`daybreak_blue`. For direct CLI scans, use `--model gpt-6-sol`
and `--cyber-access-program daybreak_blue`.

Use an API key from a project that has Daybreak Blue enabled and access to the
selected model. Setting the model or program does not grant access. See
[Configure optional Daybreak access](https://learn.chatgpt.com/docs/security/cli/ci/github#configure-optional-daybreak-access)
for the Action settings.

## Choose an integration

### Add the GitHub Actions workflow

Use the [GitHub Actions guide](https://learn.chatgpt.com/docs/security/cli/ci/github) for pull-request
checks and scheduled repository scans. The Codex Security Action installs the CLI,
saves reports, and adds a job summary and source annotations. The guide includes
runner setup, optional Daybreak access, SARIF upload, and severity enforcement.

### Add the GitLab CI/CD pipeline

Use the [GitLab CI/CD guide](https://learn.chatgpt.com/docs/security/cli/ci/gitlab) for merge-request,
default-branch, and scheduled scans. Start with a scan-only pipeline, then
adopt report handling, policy enforcement, and optional verified remediation.

### Use another CI system

Install the public `@openai/codex-security` package and run the CLI directly.
Use `--auth api-key`, choose a repository or diff scan, and save the output in a
private directory outside the Git worktree. Your runner must provide the
dependencies described in the [CLI quickstart](https://learn.chatgpt.com/docs/security/cli#check-the-prerequisites).

See the [CLI reference](https://learn.chatgpt.com/docs/security/cli/reference) for scan options, diff
revisions, report formats, state and output directories, and retry behavior.

## Choose a severity policy

Start with advisory results. Review representative findings, scan coverage,
cost, and runtime before deciding which outcomes should block a merge.

Evaluate both findings and scan completeness. The severity policy evaluates
findings from the current scan at or above the configured threshold. Earlier
open findings in the repository summary don't affect that policy. An
incomplete scan can leave areas without a review even when it reports no
findings.

In the Action release `action-v0.3.0`, a completed scan means the configured analysis
produced a valid result. Scope exclusions, deferred investigations, and other
coverage notes do not bypass the severity policy. Scanner and required
reporting errors fail the job. CLI `0.3.0` returns exit code `2` for input,
execution, result-integrity, or required-output failures. Review `coverage.json` when assessing the result; completion does
not certify that every vulnerability was found.

Configure enforcement in the [GitHub Actions
guide](https://learn.chatgpt.com/docs/security/cli/ci/github#choose-a-severity-policy) or the [GitLab
CI/CD guide](https://learn.chatgpt.com/docs/security/cli/ci/gitlab#separate-reporting-from-policy-enforcement).
For direct CLI integrations, see [severity enforcement and exit
codes](https://learn.chatgpt.com/docs/security/cli/reference#exit-codes-and-signals).