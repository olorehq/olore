# Codex Security TypeScript SDK

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use the Codex Security TypeScript SDK to run security scans on repositories and
code changes from your application or developer tool. The SDK returns typed
findings, the scan manifest, and paths to saved reports.

The SDK uses ECMAScript modules (ESM) and runs server-side with Node.js 24 or 26,
or Node.js 22 starting with 22.13.0. Scanning also requires Python 3.10 or later.
Python 3.10 also requires the `tomli` package.

To read or resume compressed Codex sessions (`.jsonl.zst`), use Node.js
22.15.0 or later within 22.x, or Node.js 24 or 26. Plain `.jsonl` sessions work
on all supported Node.js versions.

For general coding agents, see the [Codex SDK guide](https://learn.chatgpt.com/docs/codex-sdk). For
  terminal and CI workflows, see the [Codex Security CLI
  quickstart](https://learn.chatgpt.com/docs/security/cli).

## Set up the SDK

Install the SDK:

```bash
npm install @openai/codex-security
```

Before starting a scan, set `OPENAI_API_KEY` or `CODEX_API_KEY`, use an
existing file-backed Codex sign-in, or [configure another
provider](#configure-the-runtime-and-credentials). Amazon Bedrock uses AWS
credentials; OpenRouter and Fireworks use provider-specific API keys and
configuration.

Some cybersecurity requests and protected findings require [Trusted Access for Cyber](https://chatgpt.com/cyber) for your ChatGPT account or API organization.

## Run a scan

The SDK runs with your local operating-system permissions and doesn't pause
for approval.
Scan processes can inherit your environment, so remove unrelated credentials
before you start. See [Local scan
permissions](https://learn.chatgpt.com/docs/security/cli/reference#local-scan-permissions).

Save this example as `scan.mjs`. Pass the paths to the repository and results directory as command-line arguments. Run a standard repository scan and close the client
when the work completes. Pass `outputDir` to choose a private
results directory outside the enclosing Git worktree.

If you omit `outputDir`, Codex Security saves results in its own persistent
state directory. Results can include source excerpts and vulnerability
details. Set who can read them and how long to keep them.

```typescript
import { CodexSecurity } from "@openai/codex-security";

const [repository, outputDir] = process.argv.slice(2);
if (!repository || !outputDir) {
  throw new Error("Usage: node scan.mjs <repository> <results-directory>");
}
const security = new CodexSecurity();

try {
  const result = await security.run(repository, {
    outputDir,
  });

  console.log(result.reportPath);
  console.log(result.manifest.scan.status);
  console.log(result.findings.findings.length);
} finally {
  await security.close();
}
```


Run it with Node.js:

```bash
node scan.mjs /path/to/repository /path/outside/repository/results
```

The example prints the report path, scan status, and finding count.
Open the report to review the evidence.

`run` validates the saved artifacts and returns a `ScanResult` when
`result.manifest.scan.status` is `"completed"`. Check `result.manifest.scan.scope`
for the requested target and `result.manifest.scan.warnings` for any warnings.
Completion alone doesn't tell you which files were reviewed. Runtime, input, or
result-integrity failures can throw an [error](#handle-scan-errors).

In later examples, reuse the open `security` client and keep `close()` in
`finally` to release the runtime. Add any additional imports at the top of
`scan.mjs`.

## Check inputs with preflight

Use `preflight` to check a repository, target, mode, knowledge-base documents,
output location, and Codex configuration before starting a scan. This example
reads `security.md` from the repository root:

```typescript
import { join } from "node:path";

const knowledgeBase = join(repository, "security.md");

const plan = await security.preflight(repository, {
  target: ["services/billing", "packages/auth"],
  knowledgeBasePaths: [knowledgeBase],
  outputDir: outputDir,
});

console.log(plan.repository);
console.log(plan.target.kind);
console.log(plan.mode);
console.log(plan.outputDir);
```


Preflight checks local inputs without starting Codex, loading credentials, or
checking Python and plugin availability. A successful preflight doesn't prove
that the scan can authenticate or start.

To preview archival for an existing result directory, set
`archiveExisting: true`:

```typescript
const plan = await security.preflight(repository, {
  outputDir: outputDir,
  archiveExisting: true,
});

console.log(plan.archiveDir);
```


The returned `archiveDir` previews the archive naming. The final path can
differ because `run` generates its own unique destination. Capture the actual
archive path with `onOutputArchived`:

```typescript
try {
  await security.run(repository, {
    outputDir: outputDir,
    archiveExisting: true,
    onOutputArchived(archiveDir) {
      console.log("Archived results:", archiveDir);
    },
  });
} finally {
  await security.close();
}
```


The scan archives the earlier results and starts with an empty output
directory.

## Choose a scan target

The SDK supports repository, path, committed-diff, and working-tree targets.
The default target is the complete repository.

### Scan selected paths

Pass an array of paths inside the repository:

```typescript
try {
  const result = await security.run(repository, {
    target: ["services/billing", "packages/auth"],
  });
} finally {
  await security.close();
}
```


Paths can identify files or directories. The SDK resolves each path inside the
repository and removes duplicates.

### Scan committed changes

Use `DiffTarget.refs` to scan committed changes between two locally available
Git revisions:

```typescript
import { DiffTarget } from "@openai/codex-security";

const target = DiffTarget.refs({
  base: "HEAD~1",
  head: "HEAD",
});

try {
  const result = await security.run(repository, { target });
} finally {
  await security.close();
}
```


The head defaults to `HEAD`. Pass the Git worktree root as the repository and
check out the requested head before scanning.

### Scan the working tree

Use `DiffTarget.workingTree` to scan staged and unstaged changes against a base
revision:

```typescript
import { DiffTarget } from "@openai/codex-security";
const target = DiffTarget.workingTree({ base: "HEAD" });
try {
  const result = await security.run(repository, { target });
} finally {
  await security.close();
}
```


The base defaults to `HEAD`. Fetch the selected revisions before starting a
diff or working-tree scan.

### Select deep mode

Set `mode: "deep"` for a repository or path scan that needs broader review:

```typescript
try {
  const result = await security.run(repository, {
    target: ["services/billing"],
    mode: "deep",
    workers: 2,
    subagents: 0,
    stopAfterNoNew: 3,
    maxDiscoveryRuns: 10,
    maxTimeMinutes: 90,
  });
} finally {
  await security.close();
}
```


Deep mode supports repository and path targets. Use standard mode for diff and
working-tree scans. In deep mode, `workers` limits concurrent scan workers and
`subagents` sets the number of subagents per worker. `stopAfterNoNew` stops
discovery after that many consecutive worker runs without new findings.
`maxDiscoveryRuns` limits the total number of worker runs.

Set `maxTimeMinutes` to limit deep discovery. The default and maximum are
5,760 minutes (96 hours). At the deadline, discovery stops and the SDK combines
the results from completed workers. Standard scans treat `maxTimeMinutes` as an
advisory allowance for investigation. Reporting can finish later. Custom
validation and post-scan instructions run outside that allowance.

### Add a security knowledge base

Pass architecture documents, threat models, or security policies through
`knowledgeBasePaths`:

```typescript
import { join } from "node:path";

const knowledgeBase = join(repository, "security.md");

try {
  const result = await security.run(repository, {
    knowledgeBasePaths: [knowledgeBase],
  });
} finally {
  await security.close();
}
```


The SDK accepts files or directories and searches directories recursively.
Supported formats include UTF-8 text (including JSON and SARIF), PDF, and DOCX.
The SDK rejects linked input paths and skips linked directory entries.

The SDK saves extracted document text in the private `.scan-knowledge.json`
file beside scan artifacts. Keep it with the scan directory.
When resuming an interrupted Deep Scan,
`codex-security scans resume` uses this saved text even if the original documents
change or are deleted. Canonical reports don't embed the document text.

### Add scan and follow-up instructions

Use `scanPrompt` to focus the scan and `postScanPrompt` to request a follow-up:

```typescript
try {
  const result = await security.run(repository, {
    scanPrompt: "Focus on tenant isolation and authorization checks.",
    postScanPrompt: "Write confirmed findings to post-scan-summary.md.",
  });
} finally {
  await security.close();
}
```


If the follow-up fails, the SDK keeps the completed scan and reports the
error through `onWarning`. It restores any completed scan artifacts that the
follow-up changed. The follow-up runs after scan cost tracking stops and
is outside `maxCostUsd`.

### Validate findings in your environment

Pass `validationPrompt` to check candidate findings with your own test
procedure. For example, point the prompt at a script you control outside the
checkout and run it against your local test server. Pass the validation script
and server URL after the repository and results directory arguments:

```typescript
const [validationScript, validationUrl] = process.argv.slice(4);
if (!validationScript || !validationUrl)
  throw new Error("Pass a validation script path and service URL.");
const result = await security.run(repository, {
  outputDir,
  validationPrompt: `Run ${validationScript} against ${validationUrl} and report which findings reproduce.`,
});
```


```bash
node scan.mjs /path/to/repository /path/outside/repository/results /path/to/validate.sh http://localhost:3000
```

Use `validationPrompt` with standard repository, path, committed-diff, or
working-tree scans. To use the same procedure for each standard component
scan, pass `scanOptions.validationPrompt` to `runComponentScans`. Deep scans
reject custom validation.

### Set a scan budget

Set `maxCostUsd` to stop a scan when its estimated model cost exceeds a limit.
Use `onCost` to track cost as the scan runs and report `estimatedUsdRange`:

```typescript
try {
  const result = await security.run(repository, {
    maxCostUsd: 5,
    onCost(cost) {
      console.log(cost.estimatedUsdRange);
    },
  });

  console.log(result.cost?.estimatedUsdRange);
} finally {
  await security.close();
}
```


The limit uses `estimatedUsd`, the short-context baseline. Requests already
in progress can put this estimate above the limit. Long-context pricing can
raise `estimatedUsdRange` above it. This limit is not a billing cap.

If a deep scan reaches the limit after
Codex Security aggregates completed worker results, `run` can return a result
with `manifest.scan.status` set to `"completed"` and report the budget warning
through `onWarning`.

If the scan can't produce a valid completed result, `run` throws
`ScanCostLimitExceededError` and preserves any available output.

## Scan project components

Use `runComponentScans` to scan services or packages in parallel and combine
their findings. Give each component a name and one or more repository-relative
paths. Choose a new or empty output directory outside the enclosing Git worktree.

```typescript
import { runComponentScans } from "@openai/codex-security";

const result = await runComponentScans({
  repository: repository,
  outputDir: outputDir,
  components: [
    { name: "API", paths: ["services/api", "packages/auth"] },
    { name: "Web", paths: ["services/billing"] },
  ],
  workers: 2,
  onProgress: ({ name, status }) => console.log(name, status),
});

console.log(result.reportPath);
if (result.failed > 0) {
  throw new Error(`${result.failed} component scans failed.`);
}
```


Set `workers` to control how many components run at once. The default is four.

To let Codex propose components, pass `auto: true` instead of `components`.
Add `planOnly: true` to save the plan in `components.json` without running any
scans:

```typescript
import { runComponentScans } from "@openai/codex-security";

const plan = await runComponentScans({
  repository: repository,
  outputDir: outputDir,
  auto: true,
  planOnly: true,
});

console.log(plan.planPath);
```


If the run returns with failed components, read the JSON file at
`result.retryPlanPath`. Pass its `components` array to `runComponentScans`
with a new `outputDir`. The retry report covers only those components. Review
the reports from both runs.

## Work with scan results

`ScanResult` exposes the structured documents, scan metadata, and artifact
paths:

| Property             | Contents                                                                           |
| -------------------- | ---------------------------------------------------------------------------------- |
| `manifest`           | The sealed scan manifest, including target, scope, producer, and artifact records. |
| `findings`           | Findings from the current scan. Read finding objects from `findings.findings`.     |
| `repositoryFindings` | Open findings across repository scans, when scan history is available.             |
| `review`             | Path patterns excluded from review (`review.excludedPaths`).                       |
| `scanDir`            | The scan directory.                                                                |
| `threadId`           | The Codex thread identifier for the scan.                                          |
| `turnResult`         | Turn status, response, and available usage metadata.                               |
| `cost`               | Estimated model and token cost, or `null` when unavailable.                        |
| `reportPath`         | The path to `report.md`.                                                           |
| `threatModel`        | The saved threat model, or `null` when unavailable.                                |
| `threatModelPath`    | The saved threat-model document path, or `null` when unavailable.                  |
| `manifestPath`       | The path to `scan-manifest.json`.                                                  |
| `findingsPath`       | The path to `findings.json`.                                                       |
| `artifactsDir`       | The supporting-artifacts directory.                                                |
| `sarifPath`          | The generated SARIF path, or `null` when SARIF is absent.                          |
| `pluginVersion`      | The version recorded by the scan producer.                                         |

To require the same plugin for a later scan, pass
`expectedPluginVersion: result.pluginVersion`. The SDK rejects the scan if
the installed plugin version differs.

Read the severity and first source location for each finding:

```typescript
for (const finding of result.findings.findings) {
  const location = finding.locations[0];
  if (location === undefined) continue;

  console.log(
    finding.severity.level,
    `${location.path}:${location.startLine}`,
    finding.title
  );
}
```


Findings can include optional `codeEvidence`, `rootCause`, `validation`,
`attackPath`, `remediationTests`, and `preventiveControls` fields.

For repository-wide findings, `confirmedInLatestScan` distinguishes findings
seen in the latest scan from earlier findings that remain open:

```typescript
for (const finding of result.repositoryFindings ?? []) {
  console.log(finding.title, finding.confirmedInLatestScan);
}
```


Use `result.toJSON()` to serialize the manifest, findings, recorded review exclusions,
artifact paths, and turn metadata.

### Read saved threat models

Check `threatModel` and `threatModelPath` for `null` before using them. You can
still export a saved model if Codex Security couldn't write its Markdown file.
Use the path returned by the export instead of assuming a filename.

### Export saved artifacts

Export saved results without starting Codex, loading credentials, or making a
model call. This example exports a saved threat model to stdout. Pass an existing
scan results directory as the first command-line argument:

```typescript
import { exportArtifact } from "@openai/codex-security";

const directory = process.argv[2];
if (!directory) {
  throw new Error(
    "Pass an existing scan results directory as the first argument."
  );
}

await exportArtifact({
  source: { directory },
  artifact: "threat-model",
  output: "-",
});
```


To select a saved scan by ID, use `source: { scanId: "SCAN_ID" }` instead. Set
`output` to a destination path to save the artifact to a file.

Threat models export as Markdown. The export returns an error if the scan has
no saved threat model. For findings, set `artifact: "findings"` and choose
`format: "sarif"` (the default), `"json"`, `"csv"`, or `"servicenow-avit"`.

The result includes the output `path` and, for a threat-model file export,
`provenance` from the same saved results. Both fields are `null` when
`output: "-"` writes to stdout. Export requires Python 3.10 or later.

For ServiceNow Manual AVIT Ingestion, set `artifact: "findings"` and
`format: "servicenow-avit"`. [Prepare the application template](https://learn.chatgpt.com/docs/security/cli/reference#export-findings-for-servicenow)
and pass its path as `avitTemplate`. Set `output` to a private destination CSV path
outside the repository. Use `source.directory` to select the existing scan
results directory.

## Validate an existing finding

Use `validate` to check a finding from another tool or workflow against the
source. It doesn't start a new scan, run the application, or execute its tests.
Run a separate reproduction if you need runtime evidence.

```typescript
const validation = await security.validate({
  repositoryPath: repository,
  finding: {
    title: "Possible SQL injection",
    location: "src/index.js:1",
  },
});

console.log(validation.disposition);
console.log(validation.report);
```


Pass the finding as nonempty text or a JSON object. If it's in a file, read
the file and pass its contents.

The `disposition` tells you whether the finding is `reportable`, `suppressed`,
`not_applicable`, or `deferred`. The Markdown in `validation.report` explains the evidence and remaining gaps.
Save that string if you need a report file.

## Track or cancel a scan

Pass `ScanOptions` callbacks to report scan startup, worker progress, and
connection retries:

```typescript
try {
  const result = await security.run(repository, {
    outputDir: outputDir,
    onScanStarted() {
      console.log("Scan started");
    },
    onProgress(progress) {
      console.log(progress.phase, progress.filesCompleted, progress.filesTotal);
    },
    onWorkerStatus(status) {
      console.log(status.kind, status);
    },
    onSessionEvent(session) {
      console.log(session.threadId, session.worker, session.event["type"]);
    },
    onReconnect(attempt, maxAttempts) {
      console.log(`Reconnect attempt ${attempt} of ${maxAttempts}`);
    },
    onObserverError(observer, error) {
      console.error(`${observer} failed`, error);
    },
  });

  console.log(result.reportPath);
} finally {
  await security.close();
}
```


Pass an `AbortSignal` from your request or job controller to cancel a scan.
If the scan is still running after 30 minutes, this example interrupts it and
prints the directory containing any saved output:

```typescript
import { ScanInterruptedError } from "@openai/codex-security";

try {
  await security.run(repository, {
    outputDir: outputDir,
    signal: AbortSignal.timeout(30 * 60 * 1000),
  });
} catch (error) {
  if (error instanceof ScanInterruptedError) {
    console.error(error.scanDir);
  } else {
    throw error;
  }
} finally {
  await security.close();
}
```


An interrupted scan can leave partial output in `scanDir`. Preserve that
directory when the result needs investigation.

Applications that display scan setup progress can also use the `ScanOptions`
lifecycle callbacks:

| Callback                            | Called when                                          |
| ----------------------------------- | ---------------------------------------------------- |
| `onAuthentication(authentication)`  | The scan selects its authentication method.          |
| `onOutputArchived(archiveDir)`      | Existing results move to the archive directory.      |
| `onOutputDirReady(scanDir)`         | The private scan directory is ready.                 |
| `onScanStarted()`                   | Scan setup completes and execution begins.           |
| `onTrustedAccessStatus(status)`     | Trusted Access status becomes available.             |
| `onReconnect(attempt, maxAttempts)` | The SDK retries a disconnected scan stream.          |
| `onActivity(activity)`              | A command, tool, reasoning step, or message updates. |
| `onProgress(progress)`              | The scan phase or reviewed file count changes.       |
| `onWorkerStatus(status)`            | Best-effort counts of workers planned and started.   |
| `onSessionEvent(session)`           | A scan or worker session emits an event.             |
| `onCost(cost)`                      | An updated estimated scan cost is available.         |
| `onWarning(warning)`                | The scan reports a warning.                          |
| `onObserverError(observer, error)`  | Another scan lifecycle callback raises an error.     |

Trusted Access status is `granted`, `not_granted`, or `unknown`. Missing or
unknown access also triggers `onWarning`.

`onSessionEvent` receives events that aren't redacted and can contain source
code or credentials. Filter them before sending them to shared logs or other
services.

## Configure the runtime and credentials

Pass runtime configuration when you need a specific plugin, interpreter, or
Codex setting. Choose a [model](https://learn.chatgpt.com/docs/models) available to your account:

```typescript
const security = new CodexSecurity({
  // To override the bundled plugin, add pluginPath: "/path/to/plugin".
  pythonPath: "python3",
  codexOverrides: {
    model: "gpt-6.1-sol",
    model_reasoning_effort: "medium",
  },
});
```


Set `pluginPath` to a plugin directory or ZIP to override the bundled plugin.
`pythonPath` selects the
plugin interpreter. `codexOverrides` merges supported values into the isolated
Codex configuration. To use [Amazon
Bedrock](https://learn.chatgpt.com/docs/security/cli/reference#use-amazon-bedrock), set
`model_provider` and `model` in `codexOverrides`.

Set `codexOverrides.approval_policy` to `"never"` to deny permission requests.
Scans otherwise use automatic approval review. See [Local scan
permissions](https://learn.chatgpt.com/docs/security/cli/reference#local-scan-permissions) for filesystem
access and inherited credentials.

For OpenRouter or Fireworks, also provide the matching API key and a complete
provider configuration in `codexOverrides`. Set `OPENROUTER_API_KEY`
and pass an available OpenRouter model ID to this TypeScript function:

```typescript
function createOpenRouterClient(model: string) {
  return new CodexSecurity({
    codexOverrides: {
      model,
      model_provider: "openrouter",
      model_providers: {
        openrouter: {
          name: "OpenRouter",
          base_url: "https://openrouter.ai/api/v1",
          env_key: "OPENROUTER_API_KEY",
          wire_api: "responses",
        },
      },
    },
  });
}
```


For Fireworks, change both `openrouter` keys to `fireworks`, set `name` to
`Fireworks AI`, set `env_key` to `FIREWORKS_API_KEY`, use
`https://api.fireworks.ai/inference/v1` as `base_url`, and select a Fireworks
model.

The client also exposes supported authentication methods:

| Method                     | Purpose                                                     |
| -------------------------- | ----------------------------------------------------------- |
| `loginApiKey(apiKey)`      | Authenticate the isolated runtime with an API key.          |
| `loginChatGPT()`           | Start a browser sign-in flow and return a login handle.     |
| `loginChatGPTDeviceCode()` | Start a device-code sign-in flow and return a login handle. |
| `account()`                | Return the current authentication state.                    |
| `logout()`                 | Clear isolated authentication.                              |

A login handle provides `waitForInstructions`, `authUrl`, `verificationUrl`,
`userCode`, `wait`, and `cancel` so an application can present and complete the
selected sign-in flow. The SDK can reuse a file-backed Codex sign-in. Use API keys
for CI and server-side automation.

When both an API key and a stored sign-in are available, the SDK uses the API
key by default. To use your ChatGPT sign-in instead, select it for the scan:

```typescript
const result = await security.run(repository, {
  auth: "chatgpt",
});
```


Set `auth: "api-key"` to require an environment API key. `preflight` accepts
the same `auth` option.

## Handle scan errors

Catch the exported error class that matches the action your application can
take:

| Error                            | Meaning                                                            |
| -------------------------------- | ------------------------------------------------------------------ |
| `AuthenticationRequiredError`    | A scan needs a supported credential.                               |
| `ConfigurationError`             | Codex configuration or an override is unsuitable.                  |
| `InvalidTargetError`             | The repository, path, mode, or Git target is unsuitable.           |
| `OutputDirectoryError`           | The output location or its permissions are unsuitable.             |
| `OutputInsideProtectedRootError` | The output directory is inside the scanned repository or worktree. |
| `PluginPythonUnavailableError`   | A usable Python interpreter is unavailable.                        |
| `PluginBootstrapError`           | The plugin runtime could not start.                                |
| `ScanCostLimitExceededError`     | The scan exceeded its estimated cost limit.                        |
| `IncompleteScanError`            | The scan ended before producing the required result.               |
| `ContractValidationError`        | A completed scan returned a structured-contract error.             |
| `ScanInterruptedError`           | An interruption stopped the scan and may have left partial output. |

Continue with the [CLI quickstart](https://learn.chatgpt.com/docs/security/cli), [CI
guide](https://learn.chatgpt.com/docs/security/cli/ci), or [CLI
reference](https://learn.chatgpt.com/docs/security/cli/reference).