# Run Codex Security in GitLab CI/CD

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Run Codex Security in GitLab CI/CD to scan committed changes and protected
branches, publish findings to GitLab Security, and optionally propose verified
fixes in draft merge requests.

The workflow keeps scan credentials separate from repository-write access.
Generated changes always require human review before merge.

Start with scan-only reporting. Enable remediation only after you check the
runner, findings, and credential boundaries for your project.

## Before you begin

You need:

- A GitLab project with a trusted runner that supports the Codex sandbox's
  user namespace.
- The Maintainer or Owner role in the GitLab project so you can configure [project CI/CD variables](https://docs.gitlab.com/ci/variables/)
  and protected resources.
- An OpenAI API key with Codex Security access. Organizations using Platform
  API keys can [request Trusted Access for Cyber](https://openai.com/form/enterprise-trusted-access-for-cyber/).
  Individuals using ChatGPT authentication can use the [personal Trusted Access flow](https://chatgpt.com/cyber). Some accounts or repositories require this
  access for full-repository scans.
- GitLab Ultimate 19.2 or later for [SARIF 2.1.0 ingestion](https://docs.gitlab.com/user/application_security/detect/sarif/).
- Full Git history so merge request jobs can calculate the merge base.

The pipeline image installs Node.js 26, Python 3, Git, `rg`, and the pinned
Codex Security CLI. Automated remediation additionally requires an existing
regression test and a runner that can run repository-controlled commands
without protected credentials.

## Start with a scan-only pipeline

Create a masked, hidden, protected GitLab CI/CD variable named
`CODEX_SECURITY_API_KEY`. Use an OpenAI Platform API key with Codex Security
access, and set its environment scope to `codex-security/openai`. See [environment-scoped CI/CD variables](https://docs.gitlab.com/ci/environments/#limit-the-environment-scope-of-a-cicd-variable).

Add this pipeline to a test project first. It scans committed changes
in eligible protected merge requests, publishes SARIF from a successful report
job, and restores the scanner result in a separate gate:

```yaml
stages:
  - security_scan
  - security_gate

.codex-security-merge-request:
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event" && $CI_MERGE_REQUEST_SOURCE_PROJECT_ID == $CI_PROJECT_ID && $CI_MERGE_REQUEST_SOURCE_BRANCH_PROTECTED == "true" && $CI_MERGE_REQUEST_TARGET_BRANCH_PROTECTED == "true"'

codex-security:
  extends: .codex-security-merge-request
  stage: security_scan
  image: node:26-bookworm-slim
  environment:
    name: codex-security/openai
    action: access
  variables:
    GIT_DEPTH: "0"
  before_script:
    - apt-get update -qq
    - apt-get install -y -qq --no-install-recommends ca-certificates git python3 ripgrep
    - npm install --prefix /tmp/codex-security-cli --ignore-scripts --no-audit --no-fund @openai/codex-security@0.8.1
  script:
    - |
      set -eu
      test -n "${CODEX_SECURITY_API_KEY:-}"

      CODEX_SECURITY_BIN="/tmp/codex-security-cli/node_modules/.bin/codex-security"
      RESULTS_DIR="/tmp/codex-security-results-$CI_JOB_ID"
      ARTIFACT_DIR="codex-security-artifacts"
      BASE_REVISION="$(git merge-base \
        "$CI_MERGE_REQUEST_DIFF_BASE_SHA" "$CI_COMMIT_SHA")"
      install -d -m 700 "$RESULTS_DIR" "$ARTIFACT_DIR/results"

      codex_security_api_key="$CODEX_SECURITY_API_KEY"
      unset CODEX_SECURITY_API_KEY
      set +e
      OPENAI_API_KEY="$codex_security_api_key" \
        "$CODEX_SECURITY_BIN" scan . \
          --diff "$BASE_REVISION" \
          --head "$CI_COMMIT_SHA" \
          --auth api-key \
          --output-dir "$RESULTS_DIR" \
          --fail-on-severity high \
          --json
      scan_exit="$?"
      set -e
      unset codex_security_api_key

      case "$scan_exit" in
        0|1) ;;
        *) exit "$scan_exit" ;;
      esac

      "$CODEX_SECURITY_BIN" export "$RESULTS_DIR" \
        --export-format sarif \
        --source-root "$CI_PROJECT_DIR" \
        --output "$ARTIFACT_DIR/results.sarif"
      test -s "$ARTIFACT_DIR/results.sarif"
      cp -R "$RESULTS_DIR"/. "$ARTIFACT_DIR/results/"
      printf '%s\n' "$scan_exit" > "$ARTIFACT_DIR/scan-exit-code.txt"
      exit 0
  artifacts:
    when: always
    access: maintainer
    expire_in: 7 days
    paths:
      - codex-security-artifacts/
    reports:
      sarif: codex-security-artifacts/results.sarif

codex-security-gate:
  extends: .codex-security-merge-request
  stage: security_gate
  image: alpine:3.20
  needs:
    - job: codex-security
      artifacts: true
  script:
    - exit "$(cat codex-security-artifacts/scan-exit-code.txt)"
```



> Illustration: GitLab pipeline scans a committed diff, publishes a SARIF report, and restores the scan result in a policy gate



Review every change to `.gitlab-ci.yml` before running a secret-bearing job.
This example omits full scans and remediation.

## Adopt the production pipeline

1. [Download the complete GitLab pipeline](https://learn.chatgpt.com/docs/security/cli/ci/gitlab.yml)
   and save it as `.gitlab-ci.yml` in the repository root. If your repository
   already has a pipeline, merge the example's stages, hidden templates, and
   jobs into the existing file.
2. Preserve existing build, test, and deployment stages. If the project uses
   `workflow: rules`, confirm that it allows the pipeline events you want to
   scan.

The example adds `security_scan`, `security_remediation`, `security_publish`,
and `security_gate` stages. Scan-only reporting requires only
`CODEX_SECURITY_API_KEY`.

The scan job runs by default only for same-project merge requests between
protected branches. Set `CODEX_SECURITY_FULL_SCAN_DEFAULT_BRANCH=true` to scan
protected default-branch pushes and manual pipelines. Set
`CODEX_SECURITY_SCHEDULED_DEEP_SCAN=true` and configure explicit time and cost
budgets to enable scheduled deep scans on the protected default branch.

A merge request pipeline can access protected variables and runners only when:

- You protect the source and target branches in the same project.
- The project [permits merge request pipelines to access protected variables and runners](https://docs.gitlab.com/ci/pipelines/merge_request_pipelines/#control-access-to-protected-variables-and-runners).
- The user who starts the pipeline can push or merge into the target branch.

Fork pipelines and unprotected merge requests don't receive the scan
credential. Review every change to `.gitlab-ci.yml` before running a
secret-bearing job. Masking and hiding a variable do not make untrusted CI code
safe.

## Run a scan and review findings

Create an eligible protected merge request or run the pipeline on the
protected default branch. Start with a small diff before running a paid
full-repository scan.

Open the `codex-security` job and confirm that its artifacts include:

- `results/scan-manifest.json`
- `results/findings.json`
- `results/report.md`
- `results.sarif`
- `scan-exit-code.txt`

Then open the pipeline **Security** tab, review ingestion warnings, and confirm
finding identifiers, severity levels, and source locations. Default-branch scans
also create project vulnerability records. Merge request findings appear in
the pipeline Security tab or merge request security widget but don't create
project-wide vulnerability records.

Restrict artifact access because scan results can contain vulnerable source
snippets, evidence, and remediation details.

## Choose a scan profile

The pipeline selects a profile from the trigger:

| Trigger                                        | Target          | Mode       | Effort  |
| ---------------------------------------------- | --------------- | ---------- | ------- |
| Protected same-project merge request           | Committed diff  | `standard` | `low`   |
| Opt-in protected default-branch push or manual | Full repository | `standard` | `high`  |
| Opt-in schedule on protected default branch    | Full repository | `deep`     | `xhigh` |

Merge request scans focus feedback on the committed change.
Default-branch scans review the integrated repository. Scheduled deep scans
provide broader periodic coverage. A completed diff scan applies only to that
change and does not show that the entire repository is clean.

The workflow installs the CLI outside the repository and runs it by absolute
path. Its dry-run preflight uses the process-scoped API key but does not start a
paid scan or verify API authentication, Codex Security access, quota, or model
availability.

The workflow writes scan state and results outside the worktree and scopes
`OPENAI_API_KEY` to the scan process. The CLI receives a small, explicit
environment instead of inheriting every GitLab variable. For diff scans, the
workflow calculates the merge base and binds the scan to the reviewed base and
head revisions.

The example pins `@openai/codex-security` to `0.8.1`. Retest authentication,
artifacts, SARIF ingestion, and policy gating before changing the pin.

## Separate reporting from policy enforcement

GitLab ingests SARIF from a successful report job. The pipeline publishes the
report first and restores the scanner's exit status in a separate
`codex-security-gate` job.

The report job exports findings only after exit codes `0` and `1`. Any other
exit code skips SARIF export and blocks the pipeline. An export failure also
blocks the pipeline.

The report job propagates execution errors and interruptions. When it succeeds,
the final gate restores the scanner's policy result:

| Exit          | Meaning                                                                     |
| ------------- | --------------------------------------------------------------------------- |
| `0`           | The scan completed and passed its policy.                                   |
| `1`           | The scan completed and found an issue at or above the configured threshold. |
| `2`           | The scan had an input, runtime, target-integrity, or required-output error. |
| `130` / `143` | The scan was interrupted or terminated.                                     |

The example passes `--fail-on-severity high`, so high and critical findings fail
the gate. Without a severity threshold, completed scans exit `0` by default.
In `results/scan-manifest.json`, read `scan.scope` for the configured scope and
`scan.review.excludedPaths` for paths excluded from finding comparisons. Read
`results/report.md` for follow-up work.

Remediation and publishing run before the final policy gate. An eligible
finding can produce a verified draft merge request even when the gate later
fails the pipeline.

## Enable verified remediation

Automated remediation is optional and runs only for protected default-branch
pipelines. The Codex remediation process and repository-controlled verification
commands do not receive the GitLab project access token or runner-injected
credentials.

The workflow:

1. Requires a completed scan manifest for the current revision and a `high`- or
   `critical`-severity finding.
2. Confirms that the configured regression test fails before patching.
3. Generates a patch and rejects changes to CI, credential, binary, or
   other protected files.
4. Runs the regression test without OpenAI, GitLab, registry, deployment, or
   job-token credentials.
5. Uses `verify-fix` to return `fixed`, `still_vulnerable`, or `inconclusive`.
   The job publishes a patch only when `verify-fix` returns `fixed` and the
   verification process leaves the patch unchanged.

Set these protected variables to enable remediation:

- Set `CODEX_SECURITY_ENABLE_REMEDIATION` to `true`.
- Set `CODEX_SECURITY_VERIFICATION_COMMAND` to an existing regression test that
  exits `1` before the fix and `0` afterward.
- Optionally, set `CODEX_SECURITY_SETUP_COMMAND` to a non-interactive dependency
  setup command.

Choose a regression test that exercises the underlying security invariant, not
a particular implementation. Apply the same scrutiny to generated test and
source changes.

<details>
  <summary>Advanced: repository command isolation</summary>

The `validate`, `patch`, and `verify-fix` commands receive a process-scoped
`OPENAI_API_KEY` and use `--auth api-key`. Repository-controlled setup and test
commands run as a separate unprivileged user in a writable copy of the tracked source files.
The copy excludes Git metadata, submodule contents, and
downloaded artifacts. Setup and test commands that require `.git` or
submodules must run in a separately designed credential-free job.

Only the root-owned Codex steps can access the canonical checkout or GitLab's
adjacent file-variable directory. The copy's clean environment contains only
`PATH`, `HOME`, `LANG`, `CI`, and `CI_PROJECT_DIR`. If a command needs another
non-secret value, add it to the allowlist after reviewing the command. If your
runner cannot change users, move verification into a separate credential-free
job before enabling remediation.

</details>

## Publish a draft merge request

Create a [GitLab project access token](https://docs.gitlab.com/user/project/settings/project_access_tokens/#create-a-project-access-token)
with the Developer role and the `api` and `write_repository` scopes. Store it as
a protected, masked, hidden `GITLAB_REMEDIATION_TOKEN` scoped only to the
`codex-security/publish` environment.

Set `CODEX_SECURITY_CREATE_MR=true` to enable publishing. Also set the non-secret
`CODEX_SECURITY_MR_TEST_COMMAND` to the project-specific security regression
test that every generated remediation branch must pass. Keep this variable
unprotected so the generated unprotected merge request can read the command.
The publishing workflow:

- Receives the repository-write token but no OpenAI credential.
- Creates a `codex-security/fix-<finding-hash>` branch.
- Opens a draft merge request and reuses an existing open draft instead of
  creating a duplicate.
- Runs the unprotected remediation branch's regression test as an unprivileged
  user in a tracked-only copy without protected credentials.
- Never merges the generated change automatically.

Don't substitute `CI_JOB_TOKEN` for the project access token. It cannot perform
the required merge request creation operation. Review the proposed patch,
verification evidence, and finding before merging.

## Configure optional variables

Configure only the variables needed for the features you enable:

| Variable                                  | When needed                       | Default or purpose                                          |
| ----------------------------------------- | --------------------------------- | ----------------------------------------------------------- |
| `CODEX_SECURITY_API_KEY`                  | Every scan                        | Protected, masked, hidden; scope to `codex-security/openai` |
| `CODEX_SECURITY_VERSION`                  | CLI upgrade                       | Pinned to `0.8.1`; retest before changing                   |
| `CODEX_SECURITY_FULL_SCAN_DEFAULT_BRANCH` | Default-branch full scans         | Explicit opt-in; off by default                             |
| `CODEX_SECURITY_SCHEDULED_DEEP_SCAN`      | Scheduled deep scans              | Explicit opt-in; off by default                             |
| `CODEX_SECURITY_DEEP_MAX_TIME_MINUTES`    | Scheduled deep scans              | Required minute budget greater than `0` and less than `480` |
| `CODEX_SECURITY_DEEP_MAX_COST`            | Scheduled deep scans              | Required estimated USD cost guardrail greater than `0`      |
| `CODEX_SECURITY_ENABLE_REMEDIATION`       | Patch generation                  | Protected opt-in; off by default                            |
| `CODEX_SECURITY_VERIFICATION_COMMAND`     | Patch generation                  | Protected regression test                                   |
| `CODEX_SECURITY_SETUP_COMMAND`            | Optional remediation setup        | Protected dependency installation                           |
| `CODEX_SECURITY_REMEDIATION_EFFORT`       | Optional remediation tuning       | `high`                                                      |
| `CODEX_SECURITY_MAX_CHANGED_FILES`        | Optional patch-size limit         | `8`; allowed range `1` through `20`                         |
| `CODEX_SECURITY_CREATE_MR`                | Draft merge request creation      | Protected opt-in; off by default                            |
| `GITLAB_REMEDIATION_TOKEN`                | Draft merge request creation      | Developer project token scoped to `codex-security/publish`  |
| `CODEX_SECURITY_GITLAB_INTERNAL_URL`      | Optional self-hosted publishing   | GitLab origin reachable from the runner                     |
| `CODEX_SECURITY_MR_TEST_COMMAND`          | Draft merge request publishing    | Required non-secret, project-specific regression test       |
| `CODEX_SECURITY_MR_SETUP_COMMAND`         | Optional remediation branch setup | Non-secret dependency setup                                 |

GitLab supplies the `CI_*` variables. The pipeline manages
`CODEX_SECURITY_BIN`, `CODEX_SECURITY_EFFORT`, `CODEX_SECURITY_MODE`,
`CODEX_SECURITY_STATE_DIR`, and `CODEX_SECURITY_TARGET`; don't configure them
as project variables. For diff scans, the CLI derives the canonical target
identity from the normalized base and head revisions.

## Tune enforcement and cost

Use diff scans for merge request feedback, standard repository scans
for the default branch, and scheduled deep scans for broader coverage. Both
full-repository profiles are off by default. A scheduled deep scan also requires
`CODEX_SECURITY_DEEP_MAX_TIME_MINUTES` and `CODEX_SECURITY_DEEP_MAX_COST`; keep the
CLI time budget below the job's eight-hour timeout. When adopting the new YAML,
convert existing hour-based settings to minutes. Measure representative runs
before setting a budget. Treat `--max-cost` as an estimated cost guardrail, not
a hard billing cap.

This example gates on high and critical findings. For report-only scans, remove
`--fail-on-severity high`; choose a threshold after reviewing representative
findings, coverage, cost, and runtime. See the
[CI/CD overview](https://learn.chatgpt.com/docs/security/cli/ci#choose-a-severity-policy) for severity
policies and the [CLI reference](https://learn.chatgpt.com/docs/security/cli/reference#exit-codes-and-signals)
for exit-code details.

When a job fails:

- Missing scan artifacts point to a configuration or runner problem.
- For unexpected exclusions, check the scope and review details in
  `results/scan-manifest.json`.
- Missing GitLab findings require checking whether the SARIF report job
  succeeded and whether GitLab accepted the report.
- Skipped remediation requires checking the protected branch, scan manifest,
  finding severity, verification command, and opt-in variables.
- Publishing errors require checking the project token's role, scopes, and
  environment restriction.

For every command, flag, and artifact, see the [Codex Security CLI
reference](https://learn.chatgpt.com/docs/security/cli/reference).