# Codex Security Cloud FAQ

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

These answers apply to Codex Security Cloud. For installation and a first scan,
use [Cloud setup](https://learn.chatgpt.com/docs/security/setup). Local scans have separate
[plugin](https://learn.chatgpt.com/docs/security/plugin) and [CLI](https://learn.chatgpt.com/docs/security/cli) guides.

## Billing

### How are Cloud scans billed?

Repository scans and continuous scans set up after October 1, 2026, at
12:53 PM Pacific are billed based on token usage at your plan's rates, in
credits or USD depending on your billing plan. For
[eligible accounts](#do-i-get-a-free-scanning-period-or-free-scanning-credits),
free scanning credits apply before paid usage is billed.

This usage is not covered by your plan's included usage allowance.

Continuous scans set up before that cutoff are free until
October 21, 2026. After that, they are billed at regular token rates under
your account's billing plan if you enable paid usage. Otherwise, they pause.

### Do I get a free scanning period or free scanning credits?

What you receive depends on whether your account had continuous scanning set
up before October 1, 2026, at 12:53 PM Pacific:

- If it did, your covered continuous scans remain free until October 21, 2026.
  This free period doesn't cover repository scans or continuous scanning set
  up after October 1, 2026, at 12:53 PM Pacific.
- If it didn't, eligible accounts receive $500 in free scanning credits
  instead of the free continuous-scanning period.

### How do free scanning credits work?

Repository scans and continuous scanning use the same free balance. In a
workspace, everyone shares that balance. These free scanning credits don't
expire.

When the free balance runs out, further scanning is billed under your
account's or workspace's billing plan.

### What happens when the free continuous-scanning period ends?

Select **Keep scans running** and enable paid usage to continue these scans
after the free period. They are then billed at regular token rates under
your account's or workspace's billing plan.

If you opt out or don't enable paid usage, those scans pause when the free
period ends. Select **Re-enable scans** to enable paid usage afterward.
In a workspace, ask a workspace owner to make this choice if you don't have
permission.

### Where can I see token usage and charges?

Open a scan in **Scans** to review its token usage and cost. Hover over the
token count to see input, cached input, and output tokens. Cached input is
included in the input count, not added on top of it.

Usage shows the cost before free scanning credits or billing exemptions,
along with any amount covered by free scanning credits.

Scans marked "Exempt from billing. No charges apply." incur no charges,
even when they show token usage and cost.

## Scanning

### Does the project need to be built for scanning?

Codex Security can analyze source without a successful build. Validation may
need dependencies or a working build to reproduce an issue. Configure those
requirements in the [Codex cloud
environment](https://learn.chatgpt.com/docs/environments/cloud-environment).

If validation can't run, inspect what the finding establishes from source and
what still depends on runtime or deployment behavior.

### What languages are supported?

Codex Security analyzes source across languages. Results depend on the model's
ability to reason about the language and framework, and on the available
repository context. A successful scan doesn't imply equal coverage across
languages or components. Check the report for the scope actually reviewed.

### How do repository scans and commit monitoring differ?

A **One-Time Scan** reviews the repository once. **Continuous Scanning** monitors
new commits and can review selected commit history. Enable it after the first
scan using [Monitor new commits](https://learn.chatgpt.com/docs/security/setup#5-monitor-new-commits).

### Can I pause commit monitoring?

Open **Repositories**, select the repository, and open **Monitoring settings**.
Set monitoring to **Paused** and select **Save**. You can enable it again from
the same settings.

### Can I edit the threat model?

Yes. Update it in the monitored repository's **Monitoring settings** when the
architecture, deployment, or security assumptions change. The [threat-model
guide](https://learn.chatgpt.com/docs/security/threat-model) explains what to include. Changes apply to
future scans.

## Findings and validation

### What does validation establish?

Read the evidence attached to the particular finding. Source analysis can
establish a vulnerable code path. Execution evidence can show that a specific
reproducer or test demonstrated the issue.

A finding's recorded status and severity help organize review. Use the
underlying evidence and prerequisites to decide whether it applies to your
system and what to fix.

### What happens if validation fails?

Inspect the attempted validation and any available logs. A failed reproducer
can mean the issue doesn't apply, but it can also mean the environment or test
was unsuitable. Resolve the stated gap before dismissing the finding or
claiming that it was reproduced.

### What if the scan reports no findings?

Confirm that the scan completed and reviewed the intended repository and
revision. Read any recorded limits or unfinished work. A scan that reports no
findings can still miss vulnerabilities.

## Fixes

### Does Codex Security apply patches automatically?

The action depends on the finding. **Fix with Codex** on a repository finding
starts a conversation that asks Codex to verify the issue, implement a fix,
and run relevant tests. Review the changes in that conversation.

For a finding with a suggested patch, review the diff before selecting
**Create draft pull request**. Creating the draft doesn't merge the fix.

### How do I know whether a patch fixed the issue?

Review the patch's validation evidence, including whether the original issue
still reproduces and whether legitimate behavior still works. If validation
wasn't completed, keep that uncertainty with the finding. A proposed patch,
draft pull request, or status change alone doesn't verify a fix.