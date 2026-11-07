# Review code changes for security

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Run a security change review to find regressions in one Git-backed change set.
Codex reviews each changed source-like file and its directly supporting code.
It doesn't expand the review into a full repository audit.

To scan an entire repository instead of a specific change, see [Run a security
scan](https://learn.chatgpt.com/docs/security/plugin/scans).

## Run a manual review

In the desktop app, open **Security**, select **Scans**, and select **+ Scan**.
Choose the repository, then select **Changes**. Review uncommitted changes, a
single commit, or a base and head revision. **Deep scan** isn't available for a
changes scan.

You can also ask Codex to review uncommitted changes in a conversation:

```text
Use $codex-security:security-diff-scan to review my current uncommitted changes for security regressions.
```

For a commit or branch range, specify both revisions when needed:

```text
Use $codex-security:security-diff-scan to review the changes from origin/main to HEAD for security regressions. Focus on authentication, authorization, input handling, filesystem access, network requests, and secrets.
```

You can also name a pull request when its base and head revisions are available
in the local checkout.

## Confirm the change in setup

<WorkflowSteps>

1. Select **Changes**.
2. Confirm the checked-out repository, current branch, and latest commit.
3. Under **Changes to review**, choose:
   - `Uncommitted changes` for the current working tree.
   - The latest commit for a single-commit review.
   - A base and head revision for a branch or pull-request range.
4. Confirm that the summary describes the change you intended to review.
5. Select **Start scan**.

</WorkflowSteps>

Codex doesn't check out another branch or switch the selected working tree. If
a requested revision isn't available locally, fetch it before the review or
provide a locally available base and head.

## Act on findings

After reviewing the results, [fix and verify an accepted
finding](https://learn.chatgpt.com/docs/security/plugin/fix-findings) or [export and track
findings](https://learn.chatgpt.com/docs/security/plugin/export-findings).

## Automate reviews in CI/CD

For the standalone CLI, see [Run Codex Security in
CI](https://learn.chatgpt.com/docs/security/cli/ci) for structured JSON, a severity policy, and SARIF
upload. Continue with this section to invoke the installed plugin skill
through `codex exec`.

Run `$codex-security:security-diff-scan` in CI when the runner can invoke the
Codex CLI without interaction. First, install the CLI without exposing the scan
credential:

```bash
npm install --global @openai/codex
```

Install the Codex Security plugin in the CLI:

```bash
codex plugin add codex-security@openai-curated
```

The install command uses the public Codex CLI plugin marketplace. See the [plugin changelog](https://learn.chatgpt.com/docs/security/plugin/changelog) for version-specific
requirements.

Next, provide an OpenAI API key from your CI secret store as
`CODEX_SECURITY_API_KEY`. Expose the credential only for the scan:

```bash
CODEX_API_KEY="$CODEX_SECURITY_API_KEY" codex exec \
  --sandbox workspace-write \
  "Use \$codex-security:security-diff-scan to review changes from $BASE_REVISION to $HEAD_REVISION for security regressions. Do not modify the checkout."
```

The writable sandbox lets the scan create temporary artifacts. The prompt
still requires Codex to leave the source checkout unchanged.

The scan writes its output to
`$TMPDIR/codex-security-scans/<repository>/<scan-id>/`:

| File                 | Contents                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `report.md`          | Primary readable entry point to the complete scan directory.                                                                                           |
| `findings/<slug>/`   | Detailed vulnerability reports and supporting proof-of-concept files, when requested.                                                                  |
| `hardening/`         | Structural hardening guidance and supporting proposals, when requested.                                                                                |
| `findings.json`      | Findings with stable identifiers, severity, confidence, source locations, and remediation. Use these fields in security workflows or downstream tools. |
| `scan-manifest.json` | Sealed scan receipt with the reviewed target, revisions, and artifact hashes.                                                                          |
| `coverage.json`      | Reviewed and deferred surfaces, exclusions, and coverage completeness.                                                                                 |

For field definitions, see the [findings schema](https://github.com/openai/plugins/blob/main/plugins/codex-security/schemas/findings.schema.json). Use `findingId` to identify the finding and `occurrenceId` for its occurrence
in this scan.

For example, this command prints one tab-separated row per finding:

```bash
jq -r '
  .findings[] |
  [.findingId, .severity.level, .confidence.level, .locations[0].path, .locations[0].startLine, .title] |
  @tsv
' findings.json
```

These examples assume a trusted Linux runner with Node.js and `npm`, Git, Python
3, `jq`, and the provider's command-line tools. The `npm` global package prefix
must be writable.

Scan results can include sensitive vulnerability details. Keep artifacts
private, and review the destination and content before publishing findings.
Choose the example for your CI provider:

<Tabs
  id="codex-security-ci-examples"
  param="ci"
  defaultTab="github"
  tabs={[
    { id: "github", label: "GitHub Actions" },
    { id: "gitlab", label: "GitLab CI/CD" },
    { id: "azure", label: "Azure Pipelines" },
    { id: "jenkins", label: "Jenkins" },
  ]}
>
  


```yaml
name: Codex Security review

on:
  pull_request:

jobs:
  security-review:
    if: github.event.pull_request.head.repo.full_name == github.repository
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v5
        with:
          ref: ${{ github.event.pull_request.head.sha }}
          fetch-depth: 0
          persist-credentials: false

      - name: Install Codex Security
        env:
          CODEX_HOME: ${{ runner.temp }}/codex-home
        run: |
          npm install --global @openai/codex
          codex plugin add codex-security@openai-curated

      - name: Review code changes
        env:
          CODEX_SECURITY_API_KEY: ${{ secrets.CODEX_SECURITY_API_KEY }}
          CODEX_HOME: ${{ runner.temp }}/codex-home
          TMPDIR: ${{ runner.temp }}/codex-security
          BASE_SHA: ${{ github.event.pull_request.base.sha }}
          HEAD_REVISION: ${{ github.event.pull_request.head.sha }}
        run: |
          BASE_REVISION="$(git merge-base "$BASE_SHA" "$HEAD_REVISION")"
          CODEX_API_KEY="$CODEX_SECURITY_API_KEY" codex exec \
            --sandbox workspace-write \
            "Use \$codex-security:security-diff-scan to review changes from $BASE_REVISION to $HEAD_REVISION for security regressions. Do not modify the checkout."

      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: codex-security-review
          path: ${{ runner.temp }}/codex-security/codex-security-scans
```

  


  


Create a masked `CODEX_SECURITY_API_KEY` CI/CD variable and review the scan
artifacts privately before sharing findings.

```yaml
codex-security-review:
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event" && $CI_MERGE_REQUEST_SOURCE_PROJECT_ID == $CI_PROJECT_ID'
  variables:
    GIT_DEPTH: "0"
  script:
    - |
      codex_security_api_key="$CODEX_SECURITY_API_KEY"
      unset CODEX_SECURITY_API_KEY
      export CODEX_HOME="/tmp/codex-home-$CI_JOB_ID"
      export TMPDIR="/tmp/codex-security-$CI_JOB_ID"
      export BASE_REVISION="$CI_MERGE_REQUEST_DIFF_BASE_SHA"
      export HEAD_REVISION="${CI_MERGE_REQUEST_SOURCE_BRANCH_SHA:-$CI_COMMIT_SHA}"
      npm install --global @openai/codex
      codex plugin add codex-security@openai-curated
      CODEX_API_KEY="$codex_security_api_key" codex exec \
        --sandbox workspace-write \
        "Use \$codex-security:security-diff-scan to review changes from $BASE_REVISION to $HEAD_REVISION for security regressions. Do not modify the checkout."
  after_script:
    - |
      unset CODEX_SECURITY_API_KEY
      scan_root="/tmp/codex-security-$CI_JOB_ID/codex-security-scans"
      if [ -d "$scan_root" ]; then
        tar -czf codex-security-artifacts.tar.gz -C "$scan_root" .
      fi
  artifacts:
    when: always
    paths:
      - codex-security-artifacts.tar.gz
```

  


  


```yaml
trigger: none

pool:
  vmImage: ubuntu-latest

steps:
  - checkout: self
    fetchDepth: 0

  - bash: |
      set -euo pipefail
      export CODEX_HOME="$AGENT_TEMPDIRECTORY/codex-home"
      npm install --global @openai/codex
      codex plugin add codex-security@openai-curated
    displayName: Install Codex Security

  - bash: |
      set -euo pipefail
      export CODEX_HOME="$AGENT_TEMPDIRECTORY/codex-home"
      export TMPDIR="$AGENT_TEMPDIRECTORY/codex-security"
      export HEAD_REVISION="$SYSTEM_PULLREQUEST_SOURCECOMMITID"
      export BASE_REVISION="$(git merge-base HEAD^1 "$HEAD_REVISION")"
      CODEX_API_KEY="$CODEX_SECURITY_API_KEY" codex exec \
        --sandbox workspace-write \
        "Use \$codex-security:security-diff-scan to review changes from $BASE_REVISION to $HEAD_REVISION for security regressions. Do not modify the checkout."
    displayName: Review code changes
    condition: and(succeeded(), ne(variables['System.PullRequest.IsFork'], 'True'))
    env:
      CODEX_SECURITY_API_KEY: $(CODEX_SECURITY_API_KEY)

  - publish: $(Agent.TempDirectory)/codex-security/codex-security-scans
    artifact: codex-security-review
    condition: always()
```

For Azure Repos, configure a **Build validation** branch policy to run the
pipeline on pull requests.

  


  


```groovy snippet=configuration reason="Jenkins pipeline configuration for the documented CI integration"
pipeline {
  agent { label 'linux' }
  stages {
    stage('Codex Security review') {
      when {
        allOf {
          changeRequest()
          expression { !env.CHANGE_FORK?.trim() }
        }
      }
      steps {
        sh '''#!/usr/bin/env bash
          set -euo pipefail
          export CODEX_HOME="/tmp/codex-home-$BUILD_TAG"
          export TMPDIR="/tmp/codex-security-$BUILD_TAG"
          mkdir -p "$TMPDIR"
          git fetch --no-tags origin "$CHANGE_TARGET"
          target="$(git rev-parse FETCH_HEAD)"
          git fetch --no-tags origin "$CHANGE_BRANCH"
          git rev-parse FETCH_HEAD > "$TMPDIR/head"
          git merge-base "$target" "$(cat "$TMPDIR/head")" > "$TMPDIR/base"
          npm install --global @openai/codex
          codex plugin add codex-security@openai-curated
        '''
        withCredentials([string(credentialsId: 'codex-security-api-key', variable: 'CODEX_SECURITY_API_KEY')]) {
          sh '''#!/usr/bin/env bash
            set +x
            set -euo pipefail
            export CODEX_HOME="/tmp/codex-home-$BUILD_TAG"
            export TMPDIR="/tmp/codex-security-$BUILD_TAG"
            export HEAD_REVISION="$(cat "$TMPDIR/head")"
            export BASE_REVISION="$(cat "$TMPDIR/base")"
            CODEX_API_KEY="$CODEX_SECURITY_API_KEY" codex exec \
              --sandbox workspace-write \
              "Use \$codex-security:security-diff-scan to review changes from $BASE_REVISION to $HEAD_REVISION for security regressions. Do not modify the checkout."
          '''
        }
      }
      post {
        always {
          sh '''#!/usr/bin/env bash
            set -euo pipefail
            scan_root="/tmp/codex-security-$BUILD_TAG/codex-security-scans"
            if [ -d "$scan_root" ]; then
              tar -czf codex-security-artifacts.tar.gz -C "$scan_root" .
            fi
          '''
          archiveArtifacts artifacts: 'codex-security-artifacts.tar.gz', allowEmptyArchive: true
        }
      }
    }
  }
}
```

  

</Tabs>

The examples skip forked pull requests. Run credentialed jobs only from a
protected pipeline definition and only for contributors trusted with the scan
credential. Archive `codex-security-scans` to keep the structured findings,
manifest, coverage, and `report.md` together, along with any requested
`findings/` or `hardening/` outputs. Start with advisory results and review
coverage and runtime before making the job a required check.

For API-key handling and sandbox controls, see [Non-interactive
mode](https://learn.chatgpt.com/docs/non-interactive-mode). If your organization permits the [Codex
GitHub Action](https://learn.chatgpt.com/docs/github-action), it can install the CLI at runtime, but
you must still install the plugin first and point the action's `codex-home`
input at the same `CODEX_HOME`.