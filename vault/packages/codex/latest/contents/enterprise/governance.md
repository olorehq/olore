# Governance

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Governance for Codex activity spans interactive analytics, programmatic
reporting, related ChatGPT usage controls, and audit records. Choose the
surface that matches the question; analytics and compliance data serve
different purposes.

<a id="governance-and-observability"></a>
<a id="ways-to-track-codex-usage"></a>

| If you need to                                          | Start with                                                                |
| ------------------------------------------------------- | ------------------------------------------------------------------------- |
| Understand adoption across ChatGPT                      | [Workspace analytics](https://learn.chatgpt.com/docs/enterprise/workspace-analytics)              |
| Review Codex adoption and activity interactively        | [Codex analytics](#analytics-dashboard)                                   |
| Load aggregated Codex reporting into another system     | [Analytics API](https://learn.chatgpt.com/docs/enterprise/analytics-api)                          |
| Export records for audit or investigation               | [Compliance API](https://learn.chatgpt.com/docs/enterprise/compliance-api)                        |
| Review plan-dependent ChatGPT workspace credit controls | [ChatGPT usage limits and spend controls](https://learn.chatgpt.com/docs/enterprise/usage-limits) |

## Open the administration surfaces

- Open [Workspace analytics](https://chatgpt.com/admin/usage) for interactive
  workspace reporting. The [Workspace analytics guide](https://help.openai.com/en/articles/10875114-workspace-analytics-for-chatgpt-enterprise-and-edu)
  describes the current roles and views.
- Open the [Codex Analytics API reference](https://chatgpt.com/public/admin/api-reference#tag/Codex%20Enterprise%20Analytics)
  when you need scheduled, programmatic reporting.
- Open the [Admin API reference](https://chatgpt.com/public/admin/api-reference)
  and the [Compliance Platform guide](https://help.openai.com/en/articles/9261474-compliance-api-for-chatgpt-enterprise-edu-and-chatgpt-for-teachers)
  for audit and investigation integrations.

For example, use workspace analytics for a quick adoption check, the Analytics
API to load aggregated Codex reporting into a business intelligence system,
and the Compliance API to send auditable records to a SIEM or electronic
discovery workflow.

## Analytics dashboard

<a id="dashboard-views"></a>
<a id="data-export"></a>

ChatGPT provides workspace-wide analytics for broad adoption and engagement.
Codex analytics focuses on Codex activity. Both are interactive reporting
surfaces, not raw audit logs.

Use [Workspace analytics](https://learn.chatgpt.com/docs/enterprise/workspace-analytics) to compare the
two experiences and find their current owner-maintained sources. You can also
open [Workspace analytics](https://chatgpt.com/admin/usage) directly. Don't
build a durable reporting contract from dashboard labels or downloaded report
fields; those can change as the product evolves.

## Related ChatGPT usage controls

ChatGPT workspace usage controls are separate from analytics and don't
configure feature entitlements. Depending on the plan, eligible Codex activity
can consume ChatGPT workspace credits, and exhausted limits can pause access to
eligible features. These controls don't set a universal Codex limit or govern
Platform API billing.

See [ChatGPT usage limits and spend controls](https://learn.chatgpt.com/docs/enterprise/usage-limits)
for the durable boundary and current Help Center sources.

## Analytics API

<a id="what-it-measures"></a>
<a id="endpoints"></a>
<a id="usage"></a>
<a id="code-review-activity"></a>
<a id="user-engagement-with-code-review"></a>
<a id="how-it-works"></a>
<a id="common-use-cases"></a>

Use the Analytics API for programmatic, aggregated Codex reporting. It's
appropriate for data warehouses, business intelligence systems, and internal
reporting that shouldn't depend on an interactive dashboard.

Use the API reference for access requirements, routes, schemas,
fields, reporting windows, and pagination. See
[Analytics API](https://learn.chatgpt.com/docs/enterprise/analytics-api) for integration guidance and a link to the reference.

## Compliance API

Local computer access with Work Cloud has the same Compliance API support as Work Cloud, with records under `conversation_message` and `codex_log`. Local execution generates separate OpenTelemetry (OTel) events that you can collect by configuring an OTel collector endpoint. Use these records for supported audit and investigation workflows. Review adoption reporting separately.

Policy automation. Use the policy API to manage Global settings. Manage Local and Codex Cloud settings in the Agent Security UI. Existing Global API workflows remain available after migration. Test scripts and Terraform integrations, and confirm that assignments and policy ordering are unchanged. Review policy automation separately from reporting integrations.

Hook-based auditing. Where enabled for your workspace, use admin-defined MCP hooks that run on the cloud coordinator (orchestrator) for supported lifecycle and tool events. Before replacing an existing auditing workflow, test the callback connection, event coverage, and failure behavior. Check these records separately from Compliance API coverage.

See [Compliance API and audit events](https://learn.chatgpt.com/docs/enterprise/compliance-api#audit-records-for-local-computer-access-with-work-cloud) for supported record types and the distinction between Compliance API records, local telemetry, and hook-based logging. Conversation visibility alone does not establish a complete record of local actions.

<a id="what-it-measures-1"></a>
<a id="what-you-can-export"></a>
<a id="activity-logs"></a>
<a id="metadata-for-audit-and-investigation"></a>
<a id="common-use-cases-1"></a>
<a id="what-it-does-not-provide"></a>

Use the Compliance API for security, legal, and governance workflows that need
auditable records. It's not an adoption or productivity dashboard.

Use the API reference for event coverage, schemas, permissions,
filters, retention, and request behavior. See
[Compliance API](https://learn.chatgpt.com/docs/enterprise/compliance-api) for integration guidance and a link to the reference.

<a id="recommended-pattern"></a>

For rollout sequencing and verification across these surfaces, use the
[Admin rollout guide](https://learn.chatgpt.com/docs/enterprise/admin-setup).

## Related docs

- [Admin rollout guide](https://learn.chatgpt.com/docs/enterprise/admin-setup)
- [Workspace analytics](https://learn.chatgpt.com/docs/enterprise/workspace-analytics)
- [Analytics API](https://learn.chatgpt.com/docs/enterprise/analytics-api)
- [Compliance API](https://learn.chatgpt.com/docs/enterprise/compliance-api)