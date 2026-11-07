# Compliance API and audit events

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use the Compliance API for security, legal, governance, and investigation
workflows that require auditable records. Use analytics, not compliance records,
to measure adoption and trends.

The [Admin API reference](https://chatgpt.com/public/admin/api-reference)
is the source of truth for current access requirements, event coverage, routes,
schemas, filters, retention, and request behavior.

For an overview of the available compliance surfaces and common integration
patterns, see the [Compliance Platform guide](https://help.openai.com/en/articles/9261474-compliance-api-for-chatgpt-enterprise-edu-and-chatgpt-for-teachers).

## When to use the Compliance API

The Compliance API is appropriate when you need to:

- Export supported records into an audit or investigation system.
- Apply organizational retention and legal-hold processes.
- Correlate Codex activity with other security or identity data.
- Support approved security, legal, or governance investigations.

It's not a productivity dashboard. Don't use it to infer code quality or
individual performance. Use [Workspace analytics](https://learn.chatgpt.com/docs/enterprise/workspace-analytics)
or the [Analytics API](https://learn.chatgpt.com/docs/enterprise/analytics-api) for adoption reporting.

## Get started

1. Open the [Admin API reference](https://chatgpt.com/public/admin/api-reference) and
   confirm that your administrator role can access the compliance resources
   you need.
2. Use the append-only compliance log stream for ongoing collection. Check the
   API reference for the currently supported resources and retrieval
   patterns.
3. [Download log files](#download-logs) and test ingestion into a non-production
   security information and event management (SIEM) system or data lake.
4. Schedule continuous collection and apply your organization's access,
   retention, and legal-hold controls to exported records. Don't assume the
   source retention window replaces your organization's retention policy.

For example, a security team can stream immutable compliance events into its
SIEM for investigations, or route those events into an approved electronic
discovery workflow. Use the API reference for the current routes and
schemas rather than copying an endpoint contract from this guide.

### Download logs

Download the [Bash script](https://developers.openai.com/downloads/compliance-api/download_compliance_files.sh)
or [PowerShell script](https://developers.openai.com/downloads/compliance-api/download_compliance_files.ps1).
Both list and download every available log file after a given timestamp, follow
pagination, and write JSONL to standard output. Errors go to standard error.

Set `COMPLIANCE_API_KEY` to your Enterprise Compliance API key. Replace
`<workspace_or_org_id>` with your ChatGPT workspace ID or API Platform
organization ID, and `<after>` with an ISO 8601 timestamp that includes a time
zone. This example retrieves `AUTH_LOG` files, 100 at a time.

On macOS or Linux, install Bash, `curl`, and `jq`, then run:

```bash
bash ./download_compliance_files.sh "<workspace_or_org_id>" AUTH_LOG 100 "<after>" > output.jsonl
```

The Windows script supports PowerShell 5.1 or later. Review the downloaded file.
If Windows blocks it and your organization's execution policy permits it, run
`Unblock-File -Path .\download_compliance_files.ps1`. This example uses
PowerShell 7 to save UTF-8 without a byte-order mark:

```powershell
.\download_compliance_files.ps1 "<workspace_or_org_id>" AUTH_LOG 100 "<after>" |
  Set-Content -Encoding utf8NoBOM output.jsonl
```




## Audit records for Local computer access with Work Cloud

Local computer access with Work Cloud has the same Compliance API support as Work Cloud. Records appear under the `conversation_message` and `codex_log` event types. Local execution also generates OpenTelemetry (OTel) events, which you can collect by configuring an OTel collector endpoint. Collect these local events separately from Compliance API records. These sources do not establish a complete record of every local command, file operation, screenshot, approval, or external action.

When setting up collection:

1. Use `conversation_message` and `codex_log` for supported Work records. Use the API reference for their schemas, action identifiers, and timestamps.

2. Confirm retention and deletion behavior for the workflow.

3. Run a representative task and compare the exported records with the actions performed.

Policy automation. Use the policy API to manage Global settings. Manage Local and Codex Cloud settings in the Agent Security UI. Existing Global API workflows remain available after migration. Test scripts and Terraform integrations, and confirm that assignments and policy ordering are unchanged. Review policy automation separately from audit-record retrieval. Policy API support does not change Compliance API event coverage.

Hook-based auditing. Where enabled for your workspace, use admin-defined MCP hooks that run on the cloud coordinator (orchestrator) for supported lifecycle and tool events. Before replacing an existing auditing workflow, test the callback connection, event coverage, and failure behavior. Check these records separately from Compliance API coverage.

## Confirm the administration boundaries

Compliance coverage follows the ChatGPT workspace and the products represented
in the current API reference. Platform API organization data follows
its own API data and administration controls.

The API reference owns the current routes, event coverage, schemas,
filters, retention behavior, permission requirements, and request mechanics.
This page doesn't duplicate that contract.

## Related docs

- [Workspace analytics](https://learn.chatgpt.com/docs/enterprise/workspace-analytics)
- [Admin rollout guide](https://learn.chatgpt.com/docs/enterprise/admin-setup)
- [Governance](https://learn.chatgpt.com/docs/enterprise/governance)
- [Analytics API](https://learn.chatgpt.com/docs/enterprise/analytics-api)