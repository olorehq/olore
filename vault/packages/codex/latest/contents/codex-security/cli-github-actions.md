# Run Codex Security in GitHub Actions

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Run Codex Security in GitHub Actions to review pull-request changes or scan
your repository on a schedule. The Action installs the CLI, saves structured
reports, and adds a job summary and source annotations. Start with advisory
results, then configure enforcement after reviewing coverage and scan quality.

## Prepare the workflow

Running scans requires Codex Security access. To add your OpenAI API key:

1. In your GitHub repository, open **Settings → Secrets and variables → Actions**.
2. Select **New repository secret**.
3. Enter `CODEX_SECURITY_API_KEY` as the name and paste your OpenAI API key as
   the value. Save the secret.

The workflow examples below pass this secret to the Codex Security Action
automatically. You don't need to put your API key in the workflow file.

Run the workflow only for repositories and pull requests you trust. Scans use
the runner's local permissions and don't pause for approval. Keep unrelated
credentials and deployment steps in separate jobs.

## Add the GitHub Actions workflow

**Scan costs:** These workflows use your API key and may incur charges. Both
  examples omit `max-cost`, so they have no estimated cost stop threshold. To
  set a threshold of $5 per scan, add `max-cost: "5"` to the Codex Security
  Action's `with` settings. This isn't a hard spending cap: requests already in
  progress can exceed it. See [Set an optional scan
  budget](#set-an-optional-scan-budget) for pricing-support requirements.

### Scan the repository on a schedule

The workflow below scans your default branch every Monday at 07:23 UTC. You
can also run it manually from GitHub's **Actions** tab. It uses an x64
GitHub-hosted Ubuntu 24.04 runner and sets up the required sandbox automatically.

1. In your repository, select **Add file → Create new file**.
2. Name the file `.github/workflows/codex-security-repository.yml`.
3. Paste the workflow below and commit it to your default branch.

```yaml
name: Codex Security repository

on:
  workflow_dispatch:
  schedule:
    - cron: "23 7 * * 1" # Mondays at 07:23 UTC

permissions:
  contents: read

jobs:
  security:
    runs-on: ubuntu-24.04
    timeout-minutes: 120
    steps:
      - name: Set up the Ubuntu sandbox
        run: |
          sudo apt-get update
          sudo apt-get install --yes bubblewrap apparmor-profiles
          sudo apparmor_parser -r /usr/share/apparmor/extra-profiles/bwrap-userns-restrict

      - name: Check out the repository
        uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7.0.1
        with:
          persist-credentials: false

      - name: Scan the repository
        id: security
        uses: openai/codex-security@3f61e5150981a5087c32e4395bbaa8ce5ce0c3e3 # action-v0.3.0
        with:
          scope: repository
          model: gpt-6-sol
          # For approved Daybreak Blue access, uncomment the next input.
          # cyber-access-program: daybreak_blue
          effort: high
          fail-on-severity: none
          upload-artifacts: "true"
        env:
          OPENAI_API_KEY: ${{ secrets.CODEX_SECURITY_API_KEY }}
```

**About the version:** Both examples pin the Codex Security Action to commit
  `3f61e5150981a5087c32e4395bbaa8ce5ce0c3e3` for the `action-v0.3.0` release,
  which installs CLI `0.3.0`. Review a newer Action release before updating the
  pinned commit.

**Adapting the runner:** The Action needs Node.js 24 and Python 3.11 or later,
which this runner provides. The sandbox setup installs the `bubblewrap`
package and loads the supplied AppArmor profile before the scan. Installing
the package alone is not enough on this runner.

To run the workflow manually, open **Actions → Codex Security repository →
Run workflow**. Open a completed run to review the summary, annotations, and
downloadable reports.

Findings are report-only because `fail-on-severity` is `none`. Scanner and
required reporting errors still fail the job.

To scan selected folders, add newline-separated literal paths to the scan
step's `with` block:

```yaml
paths: |
  src/api
  src/auth
```

Paths require `scope: repository` and do not expand globs. For diff scans, omit
`paths`. Keep `persist-credentials: false` and run the scan
immediately after checkout.

### Scan pull-request changes

Using the same secret, create `.github/workflows/codex-security-pr.yml`:

```yaml
name: Codex Security PR

on:
  pull_request:
    types: [opened, synchronize, reopened, ready_for_review]

permissions:
  contents: read

concurrency:
  group: codex-security-pr-${{ github.event.pull_request.number }}
  cancel-in-progress: true

jobs:
  security:
    if: github.event.pull_request.head.repo.full_name == github.repository && github.actor != 'dependabot[bot]'
    name: Codex Security
    runs-on: ubuntu-24.04
    timeout-minutes: 60
    steps:
      - name: Set up the Ubuntu sandbox
        run: |
          sudo apt-get update
          sudo apt-get install --yes bubblewrap apparmor-profiles
          sudo apparmor_parser -r /usr/share/apparmor/extra-profiles/bwrap-userns-restrict

      - name: Check out the pull request
        uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7.0.1
        with:
          ref: ${{ github.event.pull_request.head.sha }}
          fetch-depth: 0
          persist-credentials: false

      - name: Scan PR changes
        id: security
        uses: openai/codex-security@3f61e5150981a5087c32e4395bbaa8ce5ce0c3e3 # action-v0.3.0
        with:
          scope: diff
          model: gpt-6-sol
          # For approved Daybreak Blue access, uncomment the next input.
          # cyber-access-program: daybreak_blue
          effort: high
          fail-on-severity: none
          upload-artifacts: "true"
        env:
          OPENAI_API_KEY: ${{ secrets.CODEX_SECURITY_API_KEY }}
```

Open or update a PR from a branch in the same repository. The Action uses
the full history to find the exact merge base and scans changes through the
checked-out PR head. View the **Codex Security**
check under **Checks** in the PR. Start with advisory findings, then [choose a severity
policy](#choose-a-severity-policy) when you are ready to gate changes.

This example skips fork PRs and PRs opened by `dependabot[bot]`. A skipped job
is not evidence of a security review. To include these bot PRs, remove the actor
exclusion and also
configure `CODEX_SECURITY_API_KEY` as a [secret
for `dependabot[bot]`](https://docs.github.com/en/code-security/reference/supply-chain-security/troubleshoot-dependabot/dependabot-on-actions#accessing-secrets). The Action does not support `pull_request_target` or `workflow_run`.

The scanner reads applicable `SECURITY.md` guidance from the checkout,
including policy changes in the PR. Review those changes alongside the code.

### Configure optional Daybreak access

Daybreak is optional. Both workflow examples use `gpt-6-sol`. If your
organization has been approved for [Trusted Access for
Cyber](https://learn.chatgpt.com/docs/cyber-safety#trusted-access-for-cyber), remove the `#` before
`cyber-access-program` in the scan step's `with` block:

```yaml
model: gpt-6-sol
cyber-access-program: daybreak_blue
```

Use an API key from a project enabled for Daybreak Blue with access to
`gpt-6-sol`.

The program input also accepts `standard`. Without Daybreak access, use a
model your API key can access under standard safeguards and omit
`cyber-access-program` or set it to `standard`. Selecting a model or program
does not grant access. See the Action's [Daybreak access guidance](https://github.com/openai/codex-security/blob/3f61e5150981a5087c32e4395bbaa8ce5ce0c3e3/github-action/README.md#daybreak-access-and-refusals).

A refusal or safety block that aborts the scan fails the Action, including when
`fail-on-severity` is `none`. That input controls findings policy, not scanner
errors.

### Set an optional scan budget

Both workflow examples omit `max-cost`, so they have no estimated cost stop
threshold. To set one, add a positive USD amount with the `max-cost` input.
For direct CLI scans, use `--max-cost`.

The cost limit requires CLI pricing support for the selected model. The
estimated threshold is not a hard spending cap: the cost of requests already
in progress can exceed it.
Review findings and `coverage.json` if a scan stops at the threshold. See
[output and policy options](https://learn.chatgpt.com/docs/security/cli/reference#set-output-and-policy-options)
for cost-limit behavior.

### Save reports and upload SARIF

The examples set `upload-artifacts: "true"` to save downloadable reports with a
seven-day retention window. Reports can contain source snippets, vulnerability
evidence, and remediation details. Choose a retention window and repository
access appropriate for your code. The Action uploads only validated reports
on its allowlist; do not recursively upload its `results-directory` output.

SARIF upload is optional. For private or internal repositories, enable [GitHub Code Security](https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/upload-sarif-file) before uploading. Replace the workflow's `permissions` block with:

```yaml
permissions:
  contents: read
  security-events: write
  actions: read # Required for private repositories
```

Then add this step after the scan in either workflow:

```yaml
- name: Upload security findings
  if: ${{ always() && steps.security.outputs.sarif-upload-ready == 'true' }}
  uses: github/codeql-action/upload-sarif@b96794f015dfd88f77b49b1c93e0fa7110f94c63 # v4.38.0
  with:
    sarif_file: ${{ steps.security.outputs.sarif-path }}
    sha: ${{ steps.security.outputs.scanned-sha }}
    ref: ${{ steps.security.outputs.analysis-ref }}
    category: codex-security-repository
```

For the PR workflow, use `category: codex-security-pr` so each scope has a
distinct category. Keep `id: security` on the scan step. Complete, validated
reports remain available for upload when findings fail the severity policy.
SARIF is not uploaded for failed or interrupted scans, empty diffs, or dry
runs.

See the Action's [input
and output reference](https://github.com/openai/codex-security/blob/3f61e5150981a5087c32e4395bbaa8ce5ce0c3e3/github-action/README.md#inputs) for all settings, status fields, and report paths.

## Choose a severity policy

The GitHub workflows start with `fail-on-severity: none`. To fail on high or
critical findings from a completed scan, change the scan step's input:

```yaml
fail-on-severity: high
```

Make **Codex Security** a required status check in your repository rules to
block merges when the PR job fails. GitHub treats a [conditionally skipped job as successful](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks),
even for required checks. Fork PRs and PRs from `dependabot[bot]` pass this
check without a scan. To block those skips, [require a
successful, completed scan](#require-a-successful-completed-scan).

The Action follows the CLI outcome:

- Exit code `0` sets `scan-status: completed` and `policy-status: passed`.
- Exit code `1` sets `scan-status: completed` and `policy-status: failed`;
  the step fails on findings at or above the configured severity.
- Exit code `2` or an interrupted process sets `scan-status: failed` and
  `policy-status: not-evaluated`; the step fails.
- Invalid or missing required reports, a changed checkout, failures to upload
  requested artifacts, and runtime cleanup failures also fail the step.

A completed scan means the configured analysis produced a valid result.
Scope exclusions, deferred investigations, and other notes in `coverage.json`
do not create a separate scan outcome or bypass the severity policy.
Completion does not certify that every vulnerability was found. Review
`coverage.json` when assessing the result.

### Require a successful, completed scan

For a stricter policy, add a separate gate that runs even if the scan job
fails or GitHub skips it. A step inside the scan job can't check a skipped job
because none of its steps run.

In the PR workflow, add this `outputs` mapping to the existing `security` job,
at the same indentation as `runs-on` and `steps`:

```yaml
outputs:
  scan-status: ${{ steps.security.outputs.scan-status }}
```

Then add this job under `jobs`, alongside the existing `security` job:

```yaml
security-gate:
  name: Codex Security gate
  needs: security
  if: ${{ always() }}
  runs-on: ubuntu-24.04
  steps:
    - name: Require a successful, completed scan
      env:
        SCAN_RESULT: ${{ needs.security.result }}
        SCAN_STATUS: ${{ needs.security.outputs.scan-status }}
      run: test "$SCAN_RESULT" = success && test "$SCAN_STATUS" = completed
```

Make **Codex Security gate** the required status check for this policy. It
requires both a successful scan job and `scan-status: completed`. Checking
both preserves failures from the severity policy, reporting, and cleanup,
even when the scan itself completed.

With the example's exclusions, this gate blocks fork PRs and PRs from
`dependabot[bot]`. It also blocks empty diffs and dry runs, which the Action
marks as `skipped`.
The gate doesn't scan excluded PRs. Choose this policy only if these cases
should prevent merging.

## Troubleshoot a scan

- **Unknown Git ref or unexpected diff:** Check out the PR head with
  `fetch-depth: 0`.
- **Sandbox startup error:** On Ubuntu 24.04, install the `bubblewrap` package
  and load the AppArmor profile before the Action. Installing the package alone
  does not load the required profile.
- **Missing credentials:** Confirm that `CODEX_SECURITY_API_KEY` is available to
  the trusted workflow and mapped to the scan step's `OPENAI_API_KEY`
  environment variable.
- **Python setup error:** The Action requires Python 3.11 or later.
- **Coverage notes:** Review scope exclusions and deferred investigations in
  `coverage.json`. These notes do not cause execution failures or bypass the
  severity policy.
- **Missing SARIF:** Inspect `scan-status`, `report-status`, and
  `sarif-upload-ready`. If optional SARIF is missing, the Action warns without
  changing the scan outcome; requested artifact-upload failures still fail the
  job.
- **SARIF upload error:** Confirm that your organization has enabled GitHub Code
  Security for the repository and that the workflow grants `actions: read`,
  `contents: read`, and `security-events: write`.

For every command, flag, artifact, and output field, see the [CLI
reference](https://learn.chatgpt.com/docs/security/cli/reference). For other providers, see the
[CI/CD overview](https://learn.chatgpt.com/docs/security/cli/ci).