# Export and track security findings

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Export findings from a completed scan to use them in another tool. To track
remediation or coordinate disclosure, ask Codex to prepare an issue or a
private draft GitHub Security Advisory.

## Export a portable artifact

In the desktop app, open a completed scan from **Security** > **Scans**. Under
**Artifacts**, select **Findings JSON** to open the structured findings or
**SARIF report** if the scan produced one. Available artifacts depend on the
app and plugin version.

When Codex offers to export the scan's findings, ask for JSON, CSV, or SARIF.
To export from a terminal, use the saved scan directory with the
[CLI export command](https://learn.chatgpt.com/docs/security/cli/reference#codex-security-export).

| Format | Use it for                                                        |
| ------ | ----------------------------------------------------------------- |
| JSON   | Preserve the sealed structured findings for tools and scripts.    |
| CSV    | Review findings in a spreadsheet.                                 |
| SARIF  | Send findings to tools that support the SARIF interchange format. |

To include your latest triage status, close reasons, or notes, export a CSV
from the plugin after making those changes. Open `exports/findings.csv` in
the scan directory. The CLI exports the saved scan without local triage updates.

<figure className="not-prose my-8">
  <CodexScreenshot
    alt="Completed Codex Security scan showing the real coverage, findings, manifest, Markdown, and SARIF artifacts"
    lightSrc={exportFindingsFormats.src}
    darkSrc={exportFindingsFormatsDark.src}
    maxHeight="360px"
  />
  <figcaption className="mt-3 text-sm text-secondary">
    Open the coverage, findings, scan manifest, Markdown report, or SARIF
    artifact from a completed scan.
  </figcaption>
</figure>

Select **Markdown report** to open `report.md` in your configured editor.

<figure className="not-prose my-8">
  <CodexScreenshot
    alt="Example generated security report showing the scan scope, threat model, and validated findings"
    lightSrc={exportFindingsReport.src}
    darkSrc={exportFindingsReportDark.src}
    maxHeight="600px"
  />
  <figcaption className="mt-3 text-sm text-secondary">
    Review the scan scope, threat model, validated findings, and detailed report
    links in the generated Markdown report.
  </figcaption>
</figure>

Keep the whole scan directory when you archive the report. Tracking requires
the original `scan-manifest.json` and `findings.json`. If you need to edit
the findings, make your own copy of `findings.json` first.

## Track selected findings

Use `$codex-security:track-findings` with one or more validated findings from
the same completed scan. Choose one destination for each run.

| Destination                            | What to specify                                            |
| -------------------------------------- | ---------------------------------------------------------- |
| Linear issue                           | Team and optional project                                  |
| GitHub issue                           | Owner and repository                                       |
| Jira issue                             | Site, project, and issue type in the Atlassian app         |
| Private draft GitHub Security Advisory | One finding and its public source repository on GitHub.com |

```text
Use $codex-security:track-findings to draft a Linear issue for team [team]
about finding [finding ID] in [completed scan directory].
```

For a batch, list the finding IDs in your request. To track findings in Jira,
connect the Atlassian app in Codex. Confirm who can read issues in the
project. Creating an issue requires browse and create permissions. You need
read access to reuse an existing issue and both read and edit access to update it.

For a draft advisory, sign in to GitHub.com with GitHub CLI (`gh`) using an
  account with administrator access to the public, non-fork source repository.
  Select one finding from a scan whose target is a Git revision
  (`git_revision`). Commit-diff scans don't qualify. Have the package name,
  ecosystem, and affected versions ready.

<a id="review-the-proposed-write"></a>

## Review the issue or advisory

<WorkflowSteps>

1. Check the source scan, selected findings, and signed-in account. Confirm
   the destination and who can read it. Use a private destination for sensitive
   findings. An internal or public GitHub issue requires explicit disclosure
   approval.
2. Check whether Codex proposes to create, reuse, or update an issue.
   For advisories, it can create a private draft or reuse a matching draft or
   published advisory.
3. Read the title, body, and source locations. A draft advisory may become public.
   Remove credentials, private evidence, and unnecessary exploit details.
4. Approve the preview in the Codex conversation before Codex creates or
   updates an item. If the preview changes, review and approve it again.

</WorkflowSteps>

<a id="verify-the-tracked-item"></a>

Save the issue ID or link the tracker returns, even if Codex can't reopen the
issue. For a new advisory, Codex checks that the draft matches what you
approved.

If Codex can't tell whether it created or updated an item, it stops the batch.
Before retrying, check the tracker for the issue or advisory and ask Codex
which findings it hasn't tried yet.

Continue with [Fix and verify a finding](https://learn.chatgpt.com/docs/security/plugin/fix-findings)
when the owner accepts the item for remediation.