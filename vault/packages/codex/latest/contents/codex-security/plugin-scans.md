# Run a Codex Security scan

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use a standard scan to review a repository or a selected folder. This guide
explains how to set the scope, supply security context, and assess the result.
If you haven't installed the plugin, start with the [plugin
quickstart](https://learn.chatgpt.com/docs/security/plugin).

For repeated reviews of the same scope, use a [deep
scan](https://learn.chatgpt.com/docs/security/plugin/deep-scans). For a pull request or local diff,
[review code changes](https://learn.chatgpt.com/docs/security/plugin/code-changes).

## Choose the scan area

In the desktop app, open **Security**, select **Scans**, and select **+ Scan**.
Choose an existing repository or another folder, then select **Codebase**.

Scan the whole repository when you need broad coverage and the repository is a
reasonable review unit. For a monorepo, choose one folder when a service,
package, or component has an owner and security boundary.

You can also start a scan from a Codex conversation:

```text
Use $codex-security:security-scan to scan this repository for security vulnerabilities.
```

To focus that conversation on a particular folder, identify the component:

```text
Use $codex-security:security-scan to scan only services/billing in this repository for security vulnerabilities.
```

## Configure the scan

For the best scan quality, use `gpt-5.6-sol`
with `xhigh` reasoning effort.

<WorkflowSteps>

1. Select **Codebase** and leave **Deep scan** off.
2. Confirm the selected repository, current branch, and latest revision.
3. Set **Scan area** to the entire repository or choose one folder.
4. Choose a model and reasoning effort.
5. Use **Additional context** to describe attacker-controlled inputs, trust
   boundaries, sensitive actions, or an area to prioritize.
6. Select **Start scan**.

</WorkflowSteps>

Add `SECURITY.md` to the repository root for persistent security guidance.
Describe the threat model, security invariants, reportable finding criteria,
exclusions, and severity context. Add nested `SECURITY.md` files for
directory-specific guidance. When policies conflict, the file closest to the
code takes precedence. Codex Security treats these files as policy context,
not executable instructions.

Use `AGENTS.md` for supported build and validation commands and other
repository-specific instructions.

## Follow scan progress

The workbench shows the current phase and reported progress. Select **View
activity** to inspect the Codex task. Review the final result after the scan
finishes, since findings can change while Codex checks the evidence.

## Review the completed scan

Review the result in this order:

1. Confirm the target, revision, and scan area.
2. Read reviewed surfaces and any deferred or follow-up areas.
3. For each finding, check how an attacker reaches the affected code, which
   control fails, and what impact the evidence supports. Read the validation
   method and any unresolved questions.
4. Investigate findings with missing evidence. Dismiss a finding when you can
   explain why it doesn't apply, and keep that explanation with the result.
5. Select one accepted finding before starting a fix.

A completed scan and complete coverage are separate claims. Read deferred
areas even when the scan finishes successfully. Source-based validation can
support a finding without a runtime reproduction. To resolve uncertainty
that depends on execution, ask for validation of the specific finding.

<figure className="not-prose my-8">
  <CodexScreenshot
    alt="Codex Security finding showing its severity, validation status, root cause, and attack path"
    lightSrc={findingAttackPath.src}
    darkSrc={findingAttackPathDark.src}
    maxHeight="520px"
  />
  <figcaption className="mt-3 text-sm text-secondary">
    Review the finding's severity, validation status, root cause, and attack
    path.
  </figcaption>
</figure>

## Use your first scan as a baseline

Before scanning, decide what you want to compare, such as evidence quality
or false positives. If you
test against a known finding, record whether you provided it to Codex or
withheld it from the scan.

Record the repository revision, plugin version, model, and reasoning effort.
Use this baseline to compare later scans after the code, security controls, or
scan settings change.

## Reopen a previous scan

Open **Security**, then select a saved scan from **Scans** to review its
findings, coverage, and available report artifacts. To assess the latest code,
start a new scan for the same repository. The new scan doesn't replace the
earlier scan or its artifacts.

## Use the results

Open `report.md` for a portable report, and keep its scan directory together
when sharing or archiving it. Use [Export and track
findings](https://learn.chatgpt.com/docs/security/plugin/export-findings) for other formats or issue
tracking. After accepting a finding, [generate and verify a
fix](https://learn.chatgpt.com/docs/security/plugin/fix-findings).