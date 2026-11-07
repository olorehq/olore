# Codex Security CLI FAQ

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Find answers to common questions about scanning repositories and managing
security findings from the terminal. For installation and a first scan, start
with the [CLI quickstart](https://learn.chatgpt.com/docs/security/cli).

## Repository scans

### Why does a scan use an API key after sign-in

When your environment includes `OPENAI_API_KEY` or `CODEX_API_KEY`, scans
without an interactive terminal and JSON and JSONL scans use the environment
API key by default, even after a successful ChatGPT or access-token login.
Interactive scans with text output ask you to choose when a ChatGPT sign-in is
also available. Dry runs don't prompt or load credentials.

To use your stored credentials for a scan, select them explicitly:

```bash
npx @openai/codex-security scan . --auth chatgpt
```

To require an API key from `OPENAI_API_KEY` or `CODEX_API_KEY`:

```bash
npx @openai/codex-security scan . --auth api-key
```

To make your stored credentials the automatic default, run
`unset OPENAI_API_KEY CODEX_API_KEY`. For all supported authentication modes,
see the [CLI reference](https://learn.chatgpt.com/docs/security/cli/reference#select-scan-authentication).

### Can an interrupted bulk scan resume

Yes. Run the same bulk-scan command with the original CSV and output directory.
Codex Security skips completed repositories.

Add `--max-attempts 3` to retry temporary repository or scan errors:

```bash
npx @openai/codex-security bulk-scan repositories.csv \
  --output-dir /path/outside/repositories/security-scans \
  --workers 4 \
  --max-attempts 3
```

Completed scans keep their results and aren't retried, even when coverage gaps
remain. Coverage gaps don't cause the campaign to exit with code `2`.

## Findings and coverage

### Where can teams find earlier scan results

List saved scans for your repository:

```bash
npx @openai/codex-security scans list /path/to/repository
```

Use a scan ID from the results to inspect its findings:

```bash
npx @openai/codex-security scans show SCAN_ID
```

Each completed scan keeps its report, findings, manifest, and supporting
artifacts together. See [Scan
artifacts](https://learn.chatgpt.com/docs/security/cli/reference#scan-artifacts) for the full layout.

To inspect saved scan and worker events, run `scans logs SCAN_ID`. These logs
aren't redacted and can contain source code or credentials.

### What if the CLI can't save scan history

Codex Security keeps scan history in a workbench database. If the default
state directory isn't writable, choose a private directory outside the
repository:

```bash
export CODEX_SECURITY_STATE_DIR=/path/outside/repository/codex-security-state
```

### How do scans distinguish new and known findings

List the open findings from all scans of a repository:

```bash
npx @openai/codex-security findings list /path/to/repository
```

The list identifies findings confirmed in the latest scan and earlier open
findings that the scan didn't confirm.

Compare findings across the two scans:

```bash
npx @openai/codex-security scans compare PREVIOUS_SCAN_ID CURRENT_SCAN_ID
```

The comparison automatically matches findings by root cause, reuses saved
matches, and identifies new, persisting, reopened, not observed, resolved, and
unknown findings. When a later scan doesn't find an earlier finding in the code
it scanned, the finding is not observed. It counts as resolved only after it is
explicitly closed as already fixed. Excluded paths and uncertain matches remain
unknown.

### How does false-positive feedback work

Inspect the saved scan to find the occurrence ID:

```bash
npx @openai/codex-security scans show SCAN_ID
```

Record why that finding doesn't apply:

```bash
npx @openai/codex-security findings false-positive FINDING_OCCURRENCE_ID \
  --reason "The framework escapes this input before it reaches the query"
```

Future scans of the same repository receive that explanation as context. They
still independently check the current source, controls, and reachability. A
dismissal doesn't suppress a rule, path, or vulnerability class.

For command details, see the [findings
reference](https://learn.chatgpt.com/docs/security/cli/reference#codex-security-findings).

### Why can repeat scans return different findings

AI-assisted scans can vary, even with the same scan configuration. Start by
rerunning your baseline scan:

```bash
npx @openai/codex-security scans rerun BASELINE_SCAN_ID
```

The rerun keeps the original scan configuration and requires the same plugin
version. If the installed plugin has changed, the command stops.

Compare the baseline with the new scan:

```bash
npx @openai/codex-security scans compare BASELINE_SCAN_ID REPEAT_SCAN_ID
```

Provide shared architecture and security guidance when missing context may
contribute to the variation. Matching can identify the same underlying finding
across runs, but it doesn't make scans deterministic. Directly recheck any
important finding that disappears.

### How can a team confirm that a fix worked

Recheck the original finding against the changed checkout. From that checkout,
pass its report and the issue you want to validate:

```bash
npx @openai/codex-security validate /path/to/original/findings.json \
  "Recheck the SQL injection in src/orders.ts:42 against the current code"
```

Review the evidence that the vulnerable path is closed and legitimate behavior
still works. Run the original reproducer or regression test when available.
If the check can't run, note the remaining uncertainty in the result.

A [scan comparison](https://learn.chatgpt.com/docs/security/cli/reference#match-and-compare-findings)
can show how findings changed, but a missing finding alone doesn't verify a fix.

### What does incomplete coverage mean

In `scan-manifest.json`, check `scan.status` to see whether the scan finished.
`scan.scope` records the configured scope. `scan.review.excludedPaths` lists
path patterns the scan excluded from review. If an older manifest has
`scan.coverageRef`, open the file it names for coverage details.

Coverage gaps don't change a completed scan's exit code. Exit `0` doesn't mean
every file was reviewed. A later scan can't establish that an earlier finding
no longer exists when it doesn't cover that finding's original path.

## Automation and cost

### How do deep-scan time limits work

Set a worker deadline when starting a deep scan:

```bash
npx @openai/codex-security scan . --mode deep --max-time-hours 1.5
```

The default is `96` hours. Use any positive value up to `96`, including
fractions. At the deadline, Codex Security stops unfinished workers, keeps
completed standard-scan results, and aggregates them into the final report.
Check the report for reviewed areas and deferred work. The deadline alone
doesn't determine the exit code; execution status and the severity policy do.

For persistent settings or bulk campaigns, set `max_time_hours` under
`[deep_scan]` in the [deep-scan
configuration](https://learn.chatgpt.com/docs/security/cli/reference#configure-deep-scans).

### How do scan cost limits work

Set an estimated cost limit in USD before starting the scan:

```bash
npx @openai/codex-security scan . --max-cost 5
```

The limit is an estimate, not a hard spending cap. Requests already in
progress can finish above it. If a deep scan reaches the limit after Codex
Security aggregates completed worker results, the CLI can save a completed
report with a budget warning. It returns `0`, or `1` if findings meet the
configured severity threshold. If it can't produce a valid completed result,
it returns `2` and preserves any available output.

For GitHub pull-request checks and scheduled repository scans, use the
[Codex Security GitHub Action](https://learn.chatgpt.com/docs/security/cli/ci/github). With
`action-v0.3.0`, a completed scan means the configured analysis produced a
valid result. Scope exclusions and deferred investigations do not bypass the
severity policy. Review `coverage.json` to assess the scan's scope and
limitations. To also reject empty diffs and dry runs, require the Action's
`scan-status` output to be `completed`; see [Choose a severity
policy](https://learn.chatgpt.com/docs/security/cli/ci/github#choose-a-severity-policy).

For other providers, see the [CI/CD overview](https://learn.chatgpt.com/docs/security/cli/ci).
For a check before each commit, use
[`install-hook`](https://learn.chatgpt.com/docs/security/cli/reference#codex-security-install-hook).