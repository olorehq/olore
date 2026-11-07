# Propose security hardening

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use `$codex-security:propose-security-hardening` to turn a collection of
security evidence into structural or architectural hardening options. The
workflow can analyze a completed Codex Security scan or start from supplied
findings, disclosure reports, incident reviews, assessment documents, and
source code.

The result compares design options and their engineering tradeoffs. Codex
changes the repository only after you select an option and ask it
to implement it.

## Prepare the evidence

Provide the workflow with:

- A scan directory or a collection of findings and reports.
- The target source tree and revision or snapshot when available.
- PoCs, traces, incident evidence, or assessment material that supports the
  findings.
- Constraints for performance, memory, compatibility, reliability, operations,
  delivery time, or change scope.

For example, repeated authorization bugs may suggest that a shared control
would be easier to enforce than checks in each handler. The evidence may also
support keeping a local fix instead of changing the architecture.

## Run the workflow

Send a prompt like:

```text
Use $codex-security:propose-security-hardening to analyze [scan directory or finding paths] against [source tree and revision]. Develop evidence-backed structural hardening options with engineering tradeoffs, before-and-after diagrams, a migration plan, and an implementation handoff. Do not modify the repository.
```

## Choose an option

Before choosing an option, check that the proposal:

- Connects each proposed change to findings, source, and threat-model
  evidence.
- Describes the current design and the security invariants the new design should
  preserve.
- Compares distinct options, including residual risk, performance,
  reliability, operations, compatibility, and migration cost.
- Supports its recommendation with evidence and states assumptions and open
  questions.
- Includes rollout, validation, rollback, and implementation guidance.
- Separates observed facts, inferences, and proposed design properties.

Review the evidence and tradeoffs before choosing an option. An architecture
diagram or design recommendation doesn't replace validation of the original
findings or the implemented fix.

## Use hardening guidance from a scan

You can request a hardening portfolio for a standard, deep, or change scan with
reportable findings. Codex writes the portfolio to `hardening/hardening.md`,
structured analysis to `hardening/hardening.json`, and supporting proposals
or diagrams under `hardening/`. The scan links the portfolio from `report.md`.

Keep the full scan directory together so those links remain usable. To review
the individual reports that inform the portfolio, see [Write vulnerability
reports](https://learn.chatgpt.com/docs/security/plugin/vulnerability-reports).