# Triage a backlog

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use `$codex-security:triage-finding` to review existing security findings
against the current repository. This workflow performs a read-only static
analysis: Codex treats each finding as an unproven claim and inspects repository
evidence without executing the code.

Run this workflow from a Codex project scoped to the repository you want to
assess. Codex must be able to read the repository's source code. Jira and Linear
connectors can provide finding data, while GitHub findings require authenticated
GitHub REST access. Neither replaces access to the source code.

This differs from `$codex-security:validation`, which can build or run code,
create a test or proof of concept, or exercise a real interface to
reproduce or disprove a finding. Use triage to classify and rank an
existing backlog. Use validation when runtime evidence could resolve a finding
that static evidence leaves uncertain.

Backlog triage starts from existing findings. To search the repository for new
  vulnerabilities, [run a security scan](https://learn.chatgpt.com/docs/security/plugin/scans). Triage
  doesn't modify the repository or implement fixes.

## Choose the findings to triage

You can supply one finding or a collection from these sources:

| Source                   | What to provide                                                                                                                                                                                                                                                                                                                                                                                        | Requirements                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Pasted or local findings | SARIF results, a CVE or GHSA, an advisory, a scanner ticket, a bug bounty report, a Codex Security finding artifact, or a plain-language vulnerability claim.                                                                                                                                                                                                                                          | No connector required.                                                                                                                                                                           |
| Jira or Linear           | Exact security or vulnerability issue URLs or identifiers, Jira JQL, or a Linear team, project, or search phrase. Codex retrieves the selected issue content before triage.                                                                                                                                                                                                                            | [Jira through Atlassian Rovo](codex://plugins/plugin_connector_692de805e3ec8191834719067174a384) or [Linear](codex://plugins/plugin_asdk_app_69a089a326dc8191b32a3f2553f5be2c) with read access. |
| GitHub                   | A repository and one finding source: code scanning, `Dependabot` vulnerabilities and malware, security advisories and private vulnerability reports, or all sources. If you don't specify a repository, Codex uses the GitHub repository attached to the current Codex project when available. GitHub Issues aren't included by default. Provide a specific issue or ask for GitHub Issues explicitly. | Authenticated GitHub REST access, such as `gh auth token`, `GH_TOKEN`, or `GITHUB_TOKEN`, with permission to read the selected repository and finding type.                                      |

Codex keeps one result for every supplied finding, in input order, so each
source finding stays traceable. It doesn't merge or drop findings that look
like duplicates.

## Run read-only triage

For pasted findings or local artifacts, send a prompt like:

```text
Use $codex-security:triage-finding to triage these existing security findings against this repository:

[Paste the findings or provide the artifact path.]
```

For Jira or Linear issues, identify the issue set and keep the source system
read-only:

```text
Use $codex-security:triage-finding to import and triage the security findings from [Jira or Linear issue URLs, identifiers, or query] against this repository.
Do not change the source issues.
```

For GitHub findings, name the repository and source:

```text
Use $codex-security:triage-finding to import and triage [code scanning, Dependabot vulnerabilities and malware, security advisories and private vulnerability reports, or all] from [owner/repository] against this repository.
```

To use the GitHub repository attached to the current Codex project, specify
only the finding source:

```text
Use $codex-security:triage-finding to import and triage [code scanning, Dependabot vulnerabilities and malware, security advisories and private vulnerability reports, or all] from GitHub against this repository. Use the GitHub repository attached to the current Codex project.
```

Codex checks the current source and applicable `SECURITY.md` policy, then
returns a verdict for every input finding. It records evidence both for and
against the claim, along with unresolved questions.

## Review the results

| Verdict          | What it means                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `confirmed`      | Repository evidence shows that the vulnerable path is reachable under the stated preconditions and crosses a supported security boundary.                     |
| `not_actionable` | Repository evidence rules out the claim, such as by showing an unaffected version, unreachable path, effective guard, or non-shipped surface.                 |
| `needs_review`   | Repository evidence isn't enough to decide because required information is missing, ambiguous, runtime-dependent, environment-dependent, or policy-dependent. |

Use the rankings to decide which `confirmed` findings to fix first and which
`needs_review` findings to investigate first. Each group is ranked separately.

Read the verdict's rationale alongside the affected code and attacker
prerequisites. Check the evidence against the claim and any open questions
before acting on the rank. Here, `confirmed` means supported by static
repository evidence, not reproduced by executing the application.

Jira, Linear, and other backlog records remain unchanged unless you ask Codex
to update them after reviewing the triage results.

## Next steps

- `confirmed`: After a person accepts the finding for remediation, use
  [`$codex-security:fix-finding`](https://learn.chatgpt.com/docs/security/plugin/fix-findings) to fix and
  verify it. Triage prepares a prompt-ready handoff but doesn't invoke the skill
  automatically.
- `needs_review`: If running code can resolve the proof gap, use
  `$codex-security:validation` to test the finding against running code. Pass
  the finding claim, affected locations, preconditions, static evidence, and
  proof gaps from the triage result:

```text
  Use $codex-security:validation to dynamically validate finding [triage item ID or source ID] from the backlog triage result. Reproduce or disprove the finding, record what you tested, and list any remaining uncertainty.
```

  Unlike triage, validation may build or run code, create a test or
  proof of concept, or exercise a real interface. See [Codex approval and
  security policies](https://learn.chatgpt.com/docs/agent-approvals-security) for execution controls.

- `needs_review`: If the finding depends on product policy or deployment
  context, answer the listed open questions before changing code.
- `not_actionable`: Keep the evidence with your triage record. Codex doesn't
  automatically close or update the source ticket.
- To look for vulnerabilities beyond the supplied backlog, [run a security
  scan](https://learn.chatgpt.com/docs/security/plugin/scans).