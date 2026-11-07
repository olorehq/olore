# checkly Table of Contents

## Directory Map

```
contents/
├── admin/              # Team and account administration (10 files)
├── ai/                 # AI features and MCP server (13 files)
├── api-reference/      # REST API reference (206 files)
├── cli/                # Checkly CLI commands (34 files)
├── communicate/        # Alerts, dashboards, status pages, maintenance (21 files)
├── concepts/           # Core concepts (9 files)
├── constructs/         # Monitoring as Code constructs (42 files)
├── detect/             # Synthetic, uptime monitoring and testing (70 files)
├── guides/             # How-to guides (19 files)
├── integrations/       # CI/CD, IaC, alerts, observability integrations (53 files)
├── learn/              # Learning articles (Playwright, monitoring, OTel, K8s) (102 files)
├── platform/           # Private locations, reporting, runtimes (25 files)
├── resolve/            # Root cause analysis and traces (20 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Overview | `contents/what-is-checkly.mdx` |
| New user | `contents/quickstart.mdx` |
| CLI | `contents/cli/` |
| Monitoring as Code | `contents/constructs/` |
| API lookup | `contents/api-reference/overview.mdx` |
| Playwright checks | `contents/detect/synthetic-monitoring/playwright-checks/` |

## Detailed Structure

### (root) (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Checkly Documentation |
| `quickstart.mdx` | Checkly Quickstart |
| `what-is-checkly.mdx` | What is Checkly? |

### admin/ (3 files)

| File | Description |
|------|-------------|
| `changing-your-email-password.mdx` | Changing your email or password in Checkly |
| `creating-api-key.mdx` | Creating an API key in Checkly |
| `deleting-your-account.mdx` | Deleting your Checkly account |

### admin/team-management/ (7 files)

| File | Description |
|------|-------------|
| `adding-team-members.mdx` | Adding team members to your Checkly account |
| `custom-roles.mdx` | Custom roles |
| `managing-team-members.mdx` | Managing team members |
| `multi-factor-authentication.mdx` | Multi-Factor Authentication in Checkly |
| `overview.mdx` | Admin Overview |
| `permissions.mdx` | Permissions reference |
| `single-sign-on.mdx` | Single Sign-on in Checkly |

### ai/ (8 files)

| File | Description |
|------|-------------|
| `ai-assistant.mdx` | Create checks with the AI Assistant |
| `llms-txt.mdx` | llms.txt |
| `markdown-access.mdx` | Markdown Access |
| `mcp-server.mdx` | Checkly MCP Server |
| `overview.mdx` | AI Agents & Coding Assistants |
| `plugin.mdx` | Checkly Plugin for AI Coding Agents |
| `rocky-ai.mdx` | Rocky AI |
| `skills.mdx` | Checkly Skills |

### ai/mcp-server/ (5 files)

| File | Description |
|------|-------------|
| `interactive-views.mdx` | Interactive MCP views |
| `security-and-permissions.mdx` | MCP security and permissions |
| `setup.mdx` | Set up the Checkly MCP Server |
| `tools.mdx` | Checkly MCP tools |
| `troubleshooting.mdx` | Troubleshoot the Checkly MCP Server |

### api-reference/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Using the Checkly API |

### api-reference/accounts/ (11 files)

| File | Description |
|------|-------------|
| `fetch-a-given-account-details.mdx` | Get details for a specific account |
| `fetch-account-entitlements.mdx` | Fetch account entitlements |
| `fetch-current-account-details.mdx` | Get details for the current account |
| `fetch-current-account-entitlements.mdx` | Fetch current account entitlements |
| `fetch-user-accounts.mdx` | Get details for all accounts |
| `list-account-members-and-pending-invites.mdx` | List account members and pending invites |
| `list-current-account-members-and-pending-invites.mdx` | List current account members and pending invites |
| `remove-a-current-account-member.mdx` |  |
| `remove-an-account-member.mdx` |  |
| `update-a-current-account-member-role.mdx` |  |
| `update-an-account-member-role.mdx` |  |

### api-reference/alert-channels/ (6 files)

| File | Description |
|------|-------------|
| `create-an-alert-channel.mdx` |  |
| `delete-an-alert-channel.mdx` |  |
| `list-all-alert-channels.mdx` |  |
| `retrieve-an-alert-channel.mdx` |  |
| `update-an-alert-channel.mdx` |  |
| `update-the-subscriptions-of-an-alert-channel.mdx` |  |

### api-reference/alert-notifications/ (1 files)

| File | Description |
|------|-------------|
| `lists-all-alert-notifications.mdx` |  |

### api-reference/analytics/ (12 files)

| File | Description |
|------|-------------|
| `api-checks.mdx` | API checks |
| `browser-checks.mdx` |  |
| `dns-monitors.mdx` | DNS monitors |
| `get-analytics-summary-for-multiple-checks.mdx` | Get analytics summary for multiple checks |
| `heartbeat-checks.mdx` | Heartbeat monitors |
| `icmp-monitors.mdx` | ICMP monitors |
| `list-all-available-reporting-metrics.mdx` |  |
| `multistep-checks.mdx` |  |
| `playwright-checks.mdx` |  |
| `ssl-monitors.mdx` |  |
| `tcp-checks.mdx` | TCP monitors |
| `url-monitors.mdx` | URL monitors |

### api-reference/badges/ (2 files)

| File | Description |
|------|-------------|
| `get-v1badgeschecks.mdx` | Get badge for a check |
| `get-v1badgesgroups.mdx` | Get badge for a group |

### api-reference/check-alerts/ (2 files)

| File | Description |
|------|-------------|
| `list-alerts-for-a-specific-check.mdx` |  |
| `list-all-alerts-for-your-account.mdx` |  |

### api-reference/check-groups/ (11 files)

| File | Description |
|------|-------------|
| `create-a-check-group-v2.mdx` |  |
| `create-a-check-group.mdx` |  |
| `delete-a-check-group.mdx` |  |
| `list-all-check-groups.mdx` |  |
| `retrieve-a-check-group.mdx` |  |
| `retrieve-all-checks-in-a-specific-group-with-group-settings-applied-v2.mdx` |  |
| `retrieve-all-checks-in-a-specific-group-with-group-settings-applied.mdx` |  |
| `retrieve-one-check-in-a-specific-group-with-group-settings-applied-v2.mdx` |  |
| `retrieve-one-check-in-a-specific-group-with-group-settings-applied.mdx` |  |
| `update-a-check-group-v2.mdx` |  |
| `update-a-check-group.mdx` |  |

### api-reference/check-results/ (4 files)

| File | Description |
|------|-------------|
| `lists-all-check-results-1.mdx` |  |
| `lists-all-check-results.mdx` |  |
| `retrieve-a-check-result.mdx` |  |
| `retrieve-a-normalized-asset-manifest-for-a-check-result.mdx` |  |

### api-reference/check-sessions/ (7 files)

| File | Description |
|------|-------------|
| `await-the-completion-of-a-check-session-v2.mdx` | Await the completion of a check session (v2) |
| `await-the-completion-of-a-check-session.mdx` |  |
| `cancel-a-check-session.mdx` | Cancel a check session |
| `retrieve-a-check-session-v2.mdx` | Retrieve a check session (v2) |
| `retrieve-a-check-session.mdx` |  |
| `trigger-a-new-check-session-v2.mdx` | Trigger a new check session (v2) |
| `trigger-a-new-check-session.mdx` |  |

### api-reference/check-status/ (2 files)

| File | Description |
|------|-------------|
| `list-all-check-statuses.mdx` |  |
| `retrieve-check-status-details.mdx` |  |

### api-reference/checks/ (17 files)

| File | Description |
|------|-------------|
| `create-a-browser-check.mdx` |  |
| `create-a-check.mdx` |  |
| `create-a-multi-step-check.mdx` |  |
| `create-a-tcp-check.mdx` | Create a TCP monitor |
| `create-an-api-check.mdx` |  |
| `delete-a-check.mdx` |  |
| `list-all-checks-v2.mdx` | List all checks (v2) |
| `list-all-checks-v3.mdx` | List all checks (v3) |
| `list-all-checks.mdx` |  |
| `retrieve-a-check-v2.mdx` | Retrieve a check (v2) |
| `retrieve-a-check-v3.mdx` | Retrieve a check (v3) |
| `retrieve-a-check.mdx` |  |
| `update-a-browser-check.mdx` |  |
| `update-a-check.mdx` |  |
| `update-a-multi-step-check.mdx` |  |
| `update-an-api-check.mdx` |  |
| `update-an-tcp-check.mdx` | Update a TCP monitor |

### api-reference/client-certificates/ (4 files)

| File | Description |
|------|-------------|
| `creates-a-new-client-certificate.mdx` | Create a client certificate |
| `deletes-a-client-certificate.mdx` | Delete a client certificate |
| `lists-all-client-certificates.mdx` | List all client certificates |
| `shows-one-client-certificate.mdx` | Retrieve a client certificate |

### api-reference/dashboards/ (5 files)

| File | Description |
|------|-------------|
| `create-a-dashboard.mdx` |  |
| `delete-a-dashboard.mdx` |  |
| `list-all-dashboards.mdx` |  |
| `retrieve-a-dashboard.mdx` |  |
| `update-a-dashboard.mdx` |  |

### api-reference/deployment-triggers/ (2 files)

| File | Description |
|------|-------------|
| `create-a-deployment-trigger.mdx` | Create a deployment trigger |
| `list-all-deployment-triggers.mdx` | List deployment triggers |

### api-reference/environment-variables/ (5 files)

| File | Description |
|------|-------------|
| `create-an-environment-variable.mdx` | Create an environment variable |
| `delete-an-environment-variable.mdx` |  |
| `list-all-environment-variables.mdx` |  |
| `retrieve-an-environment-variable.mdx` |  |
| `update-an-environment-variable.mdx` |  |

### api-reference/error-groups/ (4 files)

| File | Description |
|------|-------------|
| `list-all-error-groups-for-a-specific-check.mdx` |  |
| `list-all-error-groups.mdx` |  |
| `retrieve-an-error-group.mdx` |  |
| `update-an-error-group.mdx` | Update an error group |

### api-reference/heartbeats/ (5 files)

| File | Description |
|------|-------------|
| `create-a-heartbeat-check.mdx` | Create a Heartbeat monitor |
| `get-a-list-of-events-for-a-heartbeat.mdx` | List all events for a Heartbeat monitor |
| `get-a-specific-heartbeat-event.mdx` | List a specific event for a Heartbeat monitor |
| `get-heartbeat-availability.mdx` | Get Heartbeat monitor availability |
| `update-a-heartbeat-check.mdx` | Update a Heartbeat monitor |

### api-reference/incident-updates/ (3 files)

| File | Description |
|------|-------------|
| `create-an-incident-update.mdx` |  |
| `delete-an-incident-update.mdx` |  |
| `update-an-incident-update.mdx` |  |

### api-reference/incidents/ (4 files)

| File | Description |
|------|-------------|
| `create-an-incident.mdx` |  |
| `delete-an-incident.mdx` |  |
| `retrieve-an-incident.mdx` |  |
| `update-an-incident.mdx` |  |

### api-reference/location/ (1 files)

| File | Description |
|------|-------------|
| `lists-all-supported-locations.mdx` |  |

### api-reference/maintenance-windows/ (12 files)

| File | Description |
|------|-------------|
| `create-a-maintenance-window-status-update.mdx` |  |
| `create-a-maintenance-window.mdx` |  |
| `delete-a-maintenance-window-status-update.mdx` |  |
| `delete-a-maintenance-window.mdx` |  |
| `delete-a-maintenance.mdx` |  |
| `list-all-maintenance-windows.mdx` |  |
| `list-maintenances-for-a-maintenance-window.mdx` |  |
| `retrieve-a-maintenance-window.mdx` |  |
| `retrieve-a-maintenance.mdx` |  |
| `update-a-maintenance-window-status-update.mdx` |  |
| `update-a-maintenance-window.mdx` |  |
| `update-maintenance-dates.mdx` |  |

### api-reference/monitors/ (12 files)

| File | Description |
|------|-------------|
| `create-a-dns-monitor.mdx` |  |
| `create-a-grpc-monitor.mdx` |  |
| `create-a-traceroute-monitor.mdx` |  |
| `create-a-url-monitor.mdx` | Create a URL monitor |
| `create-an-icmp-monitor.mdx` | Create an ICMP monitor |
| `create-an-ssl-monitor.mdx` |  |
| `update-a-dns-monitor.mdx` |  |
| `update-a-grpc-monitor.mdx` |  |
| `update-a-traceroute-monitor.mdx` |  |
| `update-an-icmp-monitor.mdx` | Update an ICMP monitor |
| `update-an-ssl-monitor.mdx` |  |
| `update-an-url-monitor.mdx` | Update a URL monitor |

### api-reference/private-locations/ (8 files)

| File | Description |
|------|-------------|
| `create-a-private-location.mdx` |  |
| `generate-a-new-api-key-for-a-private-location.mdx` |  |
| `get-private-location-health-metrics-from-a-window-of-time.mdx` |  |
| `list-all-private-locations.mdx` |  |
| `remove-a-private-location.mdx` |  |
| `remove-an-existing-api-key-for-a-private-location.mdx` |  |
| `retrieve-a-private-location.mdx` |  |
| `update-a-private-location.mdx` |  |

### api-reference/reporting/ (1 files)

| File | Description |
|------|-------------|
| `generates-a-report-with-aggregate-statistics-for-checks-and-check-groups.mdx` | Generate report |

### api-reference/rocky-ai/ (3 files)

| File | Description |
|------|-------------|
| `generate-a-root-cause-analysis-for-a-test-session-error-group.mdx` |  |
| `generate-a-root-cause-analysis-for-an-error-group.mdx` |  |
| `retrieve-one-root-cause-analysis.mdx` |  |

### api-reference/runtimes/ (2 files)

| File | Description |
|------|-------------|
| `lists-all-supported-runtimes.mdx` | List all supported runtimes |
| `shows-details-for-one-specific-runtime.mdx` | List details for a runtime |

### api-reference/secret-scans/ (1 files)

| File | Description |
|------|-------------|
| `lists-readable-configuration-values-that-look-like-inline-credentials.mdx` |  |

### api-reference/static-ips/ (6 files)

| File | Description |
|------|-------------|
| `lists-all-source-ips-for-check-runs-1.mdx` | List IPs for check runs by region |
| `lists-all-source-ips-for-check-runs-as-txt-file.mdx` | List IPs for check runs as a TXT file |
| `lists-all-source-ips-for-check-runs.mdx` | List IPs for check runs |
| `lists-all-source-ipv6s-for-check-runs-1.mdx` | List IPv6s for check runs by region |
| `lists-all-source-ipv6s-for-check-runs-as-a-txt-file.mdx` | List IPv6s for check runs as a TXT file |
| `lists-all-source-ipv6s-for-check-runs.mdx` | List IPv6s for check runs |

### api-reference/status-pages-v3/ (31 files)

| File | Description |
|------|-------------|
| `create-a-component-on-a-v3-status-page.mdx` |  |
| `create-a-new-v3-status-page.mdx` |  |
| `create-an-automation-rule-on-a-v3-status-page.mdx` |  |
| `delete-a-component-of-a-v3-status-page.mdx` |  |
| `delete-a-subscriber-of-a-v3-status-page.mdx` |  |
| `delete-a-v3-status-page.mdx` |  |
| `delete-an-automation-rule-of-a-v3-status-page.mdx` |  |
| `delete-an-incident-of-a-v3-status-page.mdx` |  |
| `delete-an-incident-update.mdx` |  |
| `edit-an-incident-update.mdx` |  |
| `list-the-automation-rules-of-a-v3-status-page.mdx` |  |
| `list-the-components-of-a-v3-status-page.mdx` |  |
| `list-the-incidents-of-a-v3-status-page.mdx` |  |
| `list-the-subscribers-of-a-v3-status-page.mdx` |  |
| `list-the-updates-of-an-incident.mdx` |  |
| `list-v3-status-pages.mdx` |  |
| `open-an-incident-on-a-v3-status-page.mdx` |  |
| `post-an-update-to-an-incident.mdx` |  |
| `re-check-the-custom-domain-verification-of-a-v3-status-page.mdx` |  |
| `replace-an-incidents-component-impact-timeline.mdx` |  |
| `retrieve-a-single-automation-rule-of-a-v3-status-page.mdx` |  |
| `retrieve-a-single-component-of-a-v3-status-page.mdx` |  |
| `retrieve-a-single-v3-status-page-by-id.mdx` |  |
| `retrieve-an-incident-of-a-v3-status-page.mdx` |  |
| `retrieve-an-incident-update.mdx` |  |
| `retrieve-custom-domain-verification-details-for-a-v3-status-page.mdx` |  |
| `subscribe-multiple-email-addresses-to-a-v3-status-page.mdx` |  |
| `update-a-component-of-a-v3-status-page.mdx` |  |
| `update-an-automation-rule-of-a-v3-status-page.mdx` |  |
| `update-an-existing-v3-status-page.mdx` |  |
| `update-an-incident-of-a-v3-status-page.mdx` |  |

### api-reference/test-session-error-groups/ (4 files)

| File | Description |
|------|-------------|
| `list-all-test-session-error-groups-for-a-project.mdx` |  |
| `list-all-test-session-error-groups.mdx` |  |
| `retrieve-a-test-session-error-group.mdx` |  |
| `update-a-test-session-error-group.mdx` | Update an error group |

### api-reference/test-sessions/ (7 files)

| File | Description |
|------|-------------|
| `await-the-completion-of-a-test-session.mdx` |  |
| `cancel-a-test-session.mdx` | Cancel a test session |
| `list-test-sessions.mdx` |  |
| `retrieve-a-normalized-asset-manifest-for-a-test-session-result.mdx` |  |
| `retrieve-a-test-session-result.mdx` |  |
| `retrieve-a-test-session.mdx` |  |
| `trigger-a-new-test-session.mdx` |  |

### api-reference/triggers/ (6 files)

| File | Description |
|------|-------------|
| `create-the-check-group-trigger.mdx` |  |
| `create-the-check-trigger.mdx` |  |
| `delete-the-check-group-trigger.mdx` |  |
| `delete-the-check-trigger.mdx` |  |
| `get-the-check-group-trigger.mdx` |  |
| `get-the-check-trigger.mdx` |  |

### api-reference/usage/ (4 files)

| File | Description |
|------|-------------|
| `get-usage-series.mdx` | Get usage series v1 |
| `get-usage-summary.mdx` | Get usage summary v1 |
| `get-usage-terms.mdx` | Get usage terms v1 |
| `overview.mdx` | Usage API |

### cli/ (34 files)

| File | Description |
|------|-------------|
| `attaching-git-metadata.mdx` | Attaching Git metadata |
| `authentication.mdx` | Authentication |
| `checkly-account.mdx` | checkly account |
| `checkly-alert-channels.mdx` | checkly alert-channels |
| `checkly-api.mdx` | checkly api |
| `checkly-assets.mdx` | checkly assets |
| `checkly-checks.mdx` | checkly checks |
| `checkly-deploy.mdx` | checkly deploy |
| `checkly-destroy.mdx` | checkly destroy |
| `checkly-env.mdx` | checkly env |
| `checkly-import.mdx` | checkly import |
| `checkly-incidents.mdx` | checkly incidents |
| `checkly-init.mdx` | checkly init |
| `checkly-login.mdx` | checkly login |
| `checkly-logout.mdx` | checkly logout |
| `checkly-members.mdx` | checkly members |
| `checkly-pw-test.mdx` | checkly pw-test |
| `checkly-rca.mdx` | checkly rca |
| `checkly-runtimes.mdx` | checkly runtimes |
| `checkly-skills.mdx` | checkly skills |
| `checkly-status-pages.mdx` | checkly status-pages |
| `checkly-switch.mdx` | checkly switch |
| `checkly-sync-playwright.mdx` | checkly sync-playwright |
| `checkly-test-sessions.mdx` | checkly test-sessions |
| `checkly-test.mdx` | checkly test |
| `checkly-trigger.mdx` | checkly trigger |
| `checkly-whoami.mdx` | checkly whoami |
| `cli-vs-terraform-pulumi.mdx` | CLI vs. Terraform & Pulumi |
| `dependencies.mdx` | Using npm packages and local dependencies |
| `environment-variables.mdx` | Environment variables |
| `importing.mdx` | Importing existing Checks into your CLI project |
| `installation.mdx` | Installation |
| `monitoring-pull-requests.mdx` | Manage monitoring through pull requests |
| `overview.mdx` | Checkly CLI |

### communicate/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Checkly Communicate |

### communicate/alerts/ (6 files)

| File | Description |
|------|-------------|
| `channels.mdx` | Alert channels |
| `configuration.mdx` | Alert Configuration |
| `notification-log.mdx` | Alert Notification Log |
| `overview.mdx` | Alerting With Checkly |
| `retries.mdx` | Alert Retries |
| `ssl-expiration.mdx` | SSL Certificate Expiration Alerts |

### communicate/dashboards/ (4 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | Dashboard configuration |
| `custom-css.mdx` | Customizing your dashboard with CSS |
| `incidents.mdx` | Incident & Maintenance messages |
| `overview.mdx` | Dashboards overview |

### communicate/maintenance-windows/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Maintenance windows |

### communicate/status-pages/ (9 files)

| File | Description |
|------|-------------|
| `creating-a-status-page.mdx` | Creating a status page |
| `custom-domain.mdx` | Custom domain |
| `customization.mdx` | Status page customization |
| `incidents.mdx` | Incident Management |
| `maintenance-windows.mdx` | Status page maintenance |
| `overview.mdx` | Status pages overview |
| `password-protection.mdx` | Password Protection |
| `subscriber-notifications.mdx` | Subscriber Notifications |
| `v2-deprecated.mdx` | Status pages v2 (deprecated) |

### concepts/ (9 files)

| File | Description |
|------|-------------|
| `cancellation.mdx` | Cancellation |
| `checks.mdx` | What are Checks? |
| `environments.mdx` | Monitor multiple environments |
| `locations.mdx` | Locations |
| `metrics.mdx` | Metrics |
| `monitoring-as-code.mdx` | Monitoring as Code |
| `overview.mdx` | Core Concepts Overview |
| `results.mdx` | Results |
| `scheduling.mdx` | Scheduling |

### constructs/ (42 files)

| File | Description |
|------|-------------|
| `agentic-check.mdx` | Agentic Check Construct |
| `alert-channel.mdx` | Alert channel overview |
| `alert-escalation-policy.mdx` | Alert Escalation Policy Construct |
| `api-check.mdx` | API check construct |
| `browser-check.mdx` | Browser check construct |
| `check-group-v2.mdx` | CheckGroupV2 Construct |
| `check-group.mdx` | CheckGroup Construct |
| `dashboard.mdx` | Dashboard Construct |
| `dns-monitor.mdx` | DnsMonitor Construct |
| `dynamic-monitor-creation.mdx` | Dynamic monitor creation |
| `email-alert-channel.mdx` | EmailAlertChannel Construct |
| `grpc-monitor.mdx` | GrpcMonitor Construct |
| `heartbeat-monitor.mdx` | Heartbeat monitor construct |
| `icmp-monitor.mdx` | IcmpMonitor Construct |
| `incident-trigger.mdx` | IncidentTrigger Configuration |
| `incidentio-alert-channel.mdx` | IncidentioAlertChannel Construct |
| `including-checks.mdx` | Create Checks Automatically from Files |
| `maintenance-window.mdx` | MaintenanceWindow Construct |
| `msteams-alert-channel.mdx` | MSTeamsAlertChannel Construct |
| `multistep-check.mdx` | Multistep check construct |
| `opsgenie-alert-channel.mdx` | OpsgenieAlertChannel Construct |
| `overview.mdx` | Using Checkly CLI Constructs |
| `pagerduty-alert-channel.mdx` | PagerdutyAlertChannel Construct |
| `phone-call-alert-channel.mdx` | PhoneCallAlertChannel Construct |
| `playwright-check.mdx` | Playwright Check Suite |
| `private-location.mdx` | PrivateLocation Construct |
| `project.mdx` | Project Construct |
| `retry-strategy.mdx` | RetryStrategyBuilder Construct |
| `slack-alert-channel.mdx` | SlackAlertChannel Construct |
| `slack-app-alert-channel.mdx` | SlackAppAlertChannel Construct |
| `sms-alert-channel.mdx` | SmsAlertChannel Construct |
| `ssl-monitor.mdx` | SslMonitor Construct |
| `status-page-service.mdx` | StatusPageService Construct |
| `status-page-v3-automation-rule.mdx` | StatusPageV3AutomationRule Construct |
| `status-page-v3-component.mdx` | StatusPageV3Component Construct |
| `status-page-v3.mdx` | StatusPageV3 Construct |
| `status-page.mdx` | StatusPage Construct |
| `tcp-monitor.mdx` | TcpMonitor Construct |
| `telegram-alert-channel.mdx` | TelegramAlertChannel Construct |
| `traceroute-monitor.mdx` | TracerouteMonitor Construct |
| `url-monitor.mdx` | UrlMonitor Construct |
| `webhook-alert-channel.mdx` | WebhookAlertChannel Construct |

### detect/ (2 files)

| File | Description |
|------|-------------|
| `assertions.mdx` | Defining Assertions |
| `overview.mdx` | Checkly Detect |

### detect/synthetic-monitoring/ (2 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Synthetic Monitoring Overview |
| `playwright-monitoring-comparison.mdx` | Playwright Monitoring Options |

### detect/synthetic-monitoring/agentic-checks/ (3 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | Agentic Checks Configuration |
| `migrate.mdx` | Migrate from Agentic Checks |
| `overview.mdx` | Agentic Checks Overview |

### detect/synthetic-monitoring/api-checks/ (9 files)

| File | Description |
|------|-------------|
| `api-structure.mdx` | API check structure |
| `client-certificates.mdx` | Client certificates |
| `configuration.mdx` | Configuration |
| `openapi-spec.mdx` | Creating Checks from an OpenAPI Spec |
| `overview.mdx` | API checks overview |
| `quickstart.mdx` | Creating an API check |
| `response-limits.mdx` | API Response time limits |
| `setup-and-teardown.mdx` | Setup and Teardown Scripts |
| `troubleshooting.mdx` | API check troubleshooting |

### detect/synthetic-monitoring/browser-checks/ (11 files)

| File | Description |
|------|-------------|
| `degraded.mdx` | Degraded state |
| `examples.mdx` | Browser check examples |
| `file-system.mdx` | File uploads, downloads and the file system |
| `mac-structure.mdx` | Browser check structure |
| `overview.mdx` | Browser checks overview |
| `performance-metrics.mdx` | Performance & Web Vitals |
| `playwright-support.mdx` | Playwright Support in Checkly |
| `quickstart.mdx` | Creating a Browser check |
| `timeouts.mdx` | Browser check timeouts |
| `troubleshooting.mdx` | Trouble Shotting and Debugging |
| `visual-regressions.mdx` | Visual Monitoring with Checkly |

### detect/synthetic-monitoring/multistep-checks/ (8 files)

| File | Description |
|------|-------------|
| `degraded-states.mdx` | Degraded states in Multistep checks |
| `examples.mdx` | Multistep check examples |
| `file-system.mdx` | Uploading & Downloading Files To The File System |
| `multistep-structure.mdx` | Multistep check structure |
| `overview.mdx` | Multistep checks overview |
| `quickstart.mdx` | Creating a Multistep check |
| `troubleshooting.mdx` | Troubleshooting Multistep checks |
| `websockets.mdx` | WebSockets on Multistep checks |

### detect/synthetic-monitoring/playwright-checks/ (10 files)

| File | Description |
|------|-------------|
| `add-to-group.mdx` | Adding Playwright Check Suites to Groups |
| `configuration.mdx` | Playwright Check Suites Configuration |
| `dependencies.mdx` | Dependencies in Playwright Check Suites |
| `environment-variables.mdx` | Playwright Check Suite environment variables |
| `internal-registries.mdx` | Packages from Internal Registries in Playwright Check Suites |
| `overview.mdx` | Playwright Check Suites |
| `performance-metrics.mdx` | Performance & Web Vitals |
| `quickstart.mdx` | Creating a Playwright Check Suite |
| `test-organization.mdx` | Organize your tests and monitors |
| `timeouts.mdx` | Playwright Check Suite Timeouts |

### detect/testing/ (4 files)

| File | Description |
|------|-------------|
| `creating-your-first-test.mdx` | Creating Your First Test |
| `overview.mdx` | Testing |
| `playwright-reporter.mdx` | Playwright Reporter |
| `using-env-variables.mdx` | Using environment variables |

### detect/uptime-monitoring/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Uptime Monitoring |

### detect/uptime-monitoring/dns-monitors/ (2 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | DNS monitor configuration |
| `overview.mdx` | DNS monitors overview |

### detect/uptime-monitoring/grpc-monitors/ (2 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | gRPC monitor configuration |
| `overview.mdx` | gRPC monitors overview |

### detect/uptime-monitoring/heartbeat-monitors/ (4 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | Heartbeat Configuration |
| `examples.mdx` | Heartbeat Examples |
| `overview.mdx` | Heartbeat monitors |
| `quickstart.mdx` | Creating a Heartbeat monitor |

### detect/uptime-monitoring/icmp-monitors/ (2 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | ICMP monitor configuration |
| `overview.mdx` | ICMP monitors overview |

### detect/uptime-monitoring/ssl-monitors/ (2 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | SSL monitor configuration |
| `overview.mdx` | SSL monitor overview |

### detect/uptime-monitoring/tcp-monitors/ (3 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | TCP monitor configuration |
| `overview.mdx` | TCP monitors overview |
| `quickstart.mdx` | Creating a TCP monitor |

### detect/uptime-monitoring/traceroute-monitors/ (2 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | Traceroute monitor configuration |
| `overview.mdx` | Traceroute monitors overview |

### detect/uptime-monitoring/url-monitors/ (3 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | URL monitor configuration |
| `overview.mdx` | URL monitors overview |
| `quickstart.mdx` | Creating a URL monitor |

### guides/ (19 files)

| File | Description |
|------|-------------|
| `agent-driven-repair.mdx` | Send failed checks to a coding agent |
| `agentic-workflows.mdx` | Control and Configure your Monitoring Infrastructure with AI |
| `alerting.mdx` | Alerting that doesn't wake you up for nothing |
| `api-monitoring.mdx` | Monitor your API end to end |
| `claude-code-monitoring.mdx` | In-Depth Monitoring With Checkly and Claude Code |
| `communicate-availability.mdx` | A status page backed by real monitors |
| `global-monitoring.mdx` | Why monitoring from around the globe is critical for modern organizations |
| `keyword-monitoring.mdx` | Monitor the content your customers need to see |
| `monitoring-an-openapi-spec.mdx` | How to Create an API Monitor using an OpenAPI (Swagger) Spec |
| `monitoring-ecommerce-apps-using-playwright.mdx` | Monitor a checkout flow |
| `monitoring-ecommerce-apps-using-terraform.mdx` | Monitor a shop with Terraform |
| `monitoring-the-stripe-api.mdx` | How to monitor the Stripe customer API with Checkly / API Monitoring Examples |
| `overview.mdx` | Checkly guides |
| `playwright-testing-to-monitoring.mdx` | Turn your Playwright tests into monitors |
| `reading-traces.mdx` | Debug a failed check |
| `sdlc-monitoring.mdx` | Run checks on every deploy |
| `setup-scripts-for-apis.mdx` | How to Use Setup and Teardown Scripts for Better API Monitoring |
| `structuring-a-checkly-project.mdx` | Structure a Checkly project for a real codebase |
| `uptime-monitoring.mdx` | Cover every endpoint with uptime monitors |

### integrations/alerts/ (10 files)

| File | Description |
|------|-------------|
| `discord.mdx` | Send Alerts to Discord |
| `email.mdx` | Email Notifications |
| `gitlab_alerts.mdx` | Integrating GitLab Alerts |
| `msteams.mdx` | Send Alerts to Microsoft Teams |
| `overview.mdx` | Alerts |
| `phone-calls.mdx` | Phone Calls |
| `slack.mdx` | Slack |
| `sms.mdx` | SMS Alerts |
| `telegram.mdx` | Send Alerts via Telegram |
| `webhooks.mdx` | Webhook Integrations |

### integrations/ci-cd/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | CI/CD |

### integrations/ci-cd/gitlab/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Integrating Checkly in GitLab CI/CD |

### integrations/ci-cd/jenkins/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Integrating Checkly in Jenkins |

### integrations/ci-cd/vercel/ (3 files)

| File | Description |
|------|-------------|
| `deployment-protection.mdx` | Vercel Deployment Protection |
| `managing-plan.mdx` | Managing Users and Plans with Vercel |
| `overview.mdx` | Integrating Checkly in Vercel |

### integrations/iac/pulumi/ (5 files)

| File | Description |
|------|-------------|
| `best-practices.mdx` | Pulumi Best Practices |
| `ci-cd.mdx` | CI/CD Integration |
| `examples.mdx` | Pulumi Examples |
| `overview.mdx` | The Checkly Pulumi Provider |
| `setup.mdx` | Pulumi Setup Guide |

### integrations/iac/terraform/ (11 files)

| File | Description |
|------|-------------|
| `alerting.mdx` | Alert channels and settings for Terraform |
| `checks-groups.mdx` | Checks and groups for Terraform |
| `ci-cd.mdx` | CI/CD pipelines for Terraform |
| `command-line-triggers.mdx` | Command line triggers for Terraform |
| `dashboards.mdx` | Dashboards in Terraform |
| `environment-variables.mdx` | Environment variables in Terraform |
| `maintenance-windows.mdx` | Service maintenance windows in Terraform |
| `overview.mdx` | Getting started with the Terraform provider for Checkly |
| `parameterized-resources.mdx` | Parameterized resources in Terraform |
| `testing-scripts-locally.mdx` | Testing Terraform scripts locally |
| `troubleshooting.mdx` | Common issues with the Terraform provider |

### integrations/incident-management/ (9 files)

| File | Description |
|------|-------------|
| `firehydrant.mdx` | Send Alerts to FireHydrant |
| `ilert.mdx` | Send Alerts to ilert |
| `incidentio.mdx` | Send Alerts to Incident.io |
| `opsgenie.mdx` | Send Alerts to Opsgenie |
| `pagerduty.mdx` | Send Alerts to PagerDuty |
| `rootly.mdx` | Send Alerts via Rootly |
| `spike.mdx` | Send Alerts via Spike |
| `splunk-on-call.mdx` | Send Alerts via Splunk On-Call |
| `statuspage.mdx` | Integrating StatusPage |

### integrations/observability/ (3 files)

| File | Description |
|------|-------------|
| `coralogix.mdx` | Send traces, RUM and alerts to Coralogix |
| `overview.mdx` | Observability integrations |
| `prometheus.mdx` | Export metrics to Prometheus |

### integrations/observability/traces/ (9 files)

| File | Description |
|------|-------------|
| `chronosphere.mdx` | Export traces to Chronosphere |
| `clickstack.mdx` | Export traces to ClickStack |
| `cribl.mdx` | Export traces to Cribl Stream |
| `dash0.mdx` | Export traces to Dash0 |
| `datadog.mdx` | Export traces to Datadog |
| `grafana-tempo.mdx` | Export traces to Grafana Tempo |
| `honeycomb.mdx` | Export traces to Honeycomb |
| `new-relic.mdx` | Export traces to New Relic |
| `otlp.mdx` | Export traces to any OpenTelemetry backend |

### learn/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Learn Concepts and Best Practices |

### learn/incidents/ (18 files)

| File | Description |
|------|-------------|
| `anatomy-of-a-status-page.mdx` | Anatomy of a status page / Checkly Guide |
| `automation-incident-response.mdx` | Incident Response Automation - From Alerts to Action |
| `defining-mttr.mdx` | Defining MTTR - what mean time to repair means for your team |
| `detection-best-practices.mdx` | Best Practices for Detecting Downtime / Incident Response |
| `dora-metrics.mdx` | How to Use DORA Metrics the Right Way / Checkly |
| `incident-assessment-severity.mdx` | Incident Assessment & Severity / Checkly Guide |
| `incident-communication.mdx` | Best Practices for Communicating During Outages and Incidents |
| `incident-management-challenges.mdx` | Incident Management Challenges / Checkly Guide |
| `modern-root-cause-analysis.mdx` | Modern Root Cause Analysis / Checkly Guide |
| `mttr-challenges.mdx` | MTTR Challenges & Solutions / Checkly |
| `on-call-schedule.mdx` | How to Set an On‑Call Schedule / Checkly Incident Response |
| `overview.mdx` | Incident Response - Improve Recovery & Avoid Downtime |
| `playbooks.mdx` | Incident Response Playbooks - Culture & Compliance / Checkly |
| `postmortems.mdx` | Postmortems That Drive Real Improvements (+ Template) / Checkly Guide |
| `reduce-mttd.mdx` | Reduce Mean Time to Detection MTTD - Best Practices Guide |
| `root-cause-with-traces.mdx` | Root Cause with Traces - Faster RCA / Checkly |
| `slo-sla-sli.mdx` | SLA vs SLO vs SLI - What’s the Difference? Comparison with examples |
| `what-is-incident-response.mdx` | What is Incident Response? Fundamentals and best practices |

### learn/kubernetes/ (9 files)

| File | Description |
|------|-------------|
| `centralized-logging.mdx` | Centralized logging in Kubernetes with OpenTelemetry - guide with examples |
| `events.mdx` | Kubernetes Events - A Native Resource for State Insight |
| `klog.mdx` | Introducing klog - The Kubernetes Logging Library |
| `logging-best-practices.mdx` | Logging in Kubernetes - Best Practices |
| `monitoring-challenges.mdx` | Learn How to Observe and Monitor your Kubernetes Environment with Open Source Tools |
| `node-problem-detector.mdx` | Introduction to Node Problem Detector for Kubernetes |
| `operators-metrics.mdx` | Introduction to Kubernetes Operators - scraping metrics with Prometheus |
| `overview.mdx` | Learn How to Observe and Monitor your Kubernetes |
| `structured-logging.mdx` | Structured Logging in Kubernetes - Why it matters and how to get started |

### learn/monitoring/ (14 files)

| File | Description |
|------|-------------|
| `api-monitoring.mdx` | What is API Monitoring? - Tools, techniques, and examples |
| `end-to-end-monitoring.mdx` | What is End to End Monitoring? An Overview with Examples |
| `frontend-monitoring.mdx` | Frontend Monitoring - Benefits, Challenges, and Top Tools |
| `https-for-app-developers.mdx` | HTTPS Fundamentals - Beginner's Guide for App Developers |
| `intro-to-sdlc.mdx` | Understanding the Software Development Life Cycle (SDLC) for Engineers |
| `metrics-every-team-needs.mdx` | Observability Basics - Metrics that every team needs |
| `monitoring-as-code.mdx` | Monitoring as Code - A Practical Guide from Checkly |
| `overview.mdx` | Monitoring Resources - Tools, Metrics & Best Practices |
| `real-user-monitoring.mdx` | Real User Monitoring (RUM) - Benefits, Challenges, and Alternatives |
| `synthetic-monitoring.mdx` | Synthetic Monitoring - Concepts, Benefits & Challenges |
| `tcp-and-ssl.mdx` | TCP and SSL - What an application developer needs to know |
| `transaction-monitoring.mdx` | Transaction Monitoring - Components, Benefits & Challenges |
| `web-application-monitoring.mdx` | Web Application Monitoring - Types, Benefits & Top 10 Tools |
| `what-is-tcp.mdx` | What is TCP? - how it works and why it matters to application developers |

### learn/opentelemetry/ (11 files)

| File | Description |
|------|-------------|
| `context-propagation.mdx` | Fundamentals of Context Propagation in OpenTelemetry |
| `getting-started-with-observability.mdx` | Getting Started with Observability |
| `how-to-instrument.mdx` | How to instrument your application with OpenTelemetry |
| `logs.mdx` | Logging in OpenTelemetry, an Engineer’s Guide |
| `metrics.mdx` | What are OpenTelemetry Metrics? |
| `otel-agent-management-protocol.mdx` | OpenTelemetry Agent Management Protocol |
| `otel-filtering.mdx` | Advanced Data Filtering with the OpenTelemetry Collector |
| `overview.mdx` | Learn How to Observe and Monitor your Software with OpenTelemetry |
| `trace-api.mdx` | A guide to the OpenTelemetry Trace API |
| `traces.mdx` | What are OpenTelemetry Traces? - key concepts and examples |
| `what-is-the-otel-collector.mdx` | Introduction to the OpenTelemetry Collector |

### learn/playwright/ (49 files)

| File | Description |
|------|-------------|
| `assertions.mdx` | Playwright Assertions - Types & Best Practices |
| `authentication.mdx` | How to Manage Authentication in Playwright |
| `bypass-totp.mdx` | How to Bypass Time-Based 2FA Login Flows With Playwright |
| `challenging-flows.mdx` | How to Handle Challenging Automation Flows in Playwright |
| `checkout-testing-guide.mdx` | Mastering E2E Checkout Testing Using Playwright |
| `clicking-typing-hovering.mdx` | How to Click, Type, and Hover with Playwright |
| `codegen.mdx` | Record Automation Scripts Using Playwright Codegen |
| `debugging-errors.mdx` | Playwright Debugging Errors - Common Issues and Solutions |
| `debugging-with-ai-agents.mdx` | Debugging Playwright Tests with AI Agents |
| `debugging.mdx` | Playwright Debugging - Techniques for Script Troubleshooting |
| `emulating-mobile-devices.mdx` | How to emulate mobile devices with Playwright |
| `error-click-not-executed.mdx` | How to Fix the "Click Not Executed" Error in Playwright |
| `error-element-not-found.mdx` | How to Fix 'Element Not Found' Errors in Playwright |
| `error-element-not-visible.mdx` | How to Fix "Element Not Visible" Error in Playwright |
| `error-target-closed.mdx` | How to Fix "Target Closed" Error in Playwright |
| `error-wait-not-respected.mdx` | How to Fix "Wait Not Respected" Error in Playwright |
| `file-download.mdx` | How to Download Files with Playwright |
| `generating-pdfs.mdx` | How to Generate PDFs with Playwright |
| `google-login-automation.mdx` | How to Automate Google Login with Playwright |
| `handling-test-data.mdx` | How to Handle Test Data with Playwright |
| `how-to-detect-broken-links.mdx` | How to detect broken links using Playwright |
| `how-to-parameterize-playwright-projects.mdx` | Parameterizing your Playwright projects |
| `how-to-search.mdx` | How to search with Playwright |
| `how-to-set-up-locally.mdx` | How to Set Up Playwright Locally |
| `iframe-interaction.mdx` | How to Handle iFrames in Playwright |
| `intercept-requests.mdx` | How to Intercept Requests in Playwright |
| `login-automation.mdx` | How to Automate Login with Playwright |
| `microsoft-login-automation.mdx` | How to Automate Microsoft Live Login with Playwright |
| `mock-api.mdx` | Test Dynamic Content by Mocking API Responses |
| `multitab-flows.mdx` | Handling Multiple Tabs with Playwright |
| `navigation.mdx` | How to Use Playwright to Navigate and Interact with Web Pages |
| `overview.mdx` | Learn How to Test, Monitor, and Automate with Playwright |
| `performance.mdx` | Measuring Page Performance Using Playwright - Best Practices |
| `scraping-behind-login.mdx` | How to Scrape Data Behind a Login with Playwright |
| `script-recorders.mdx` | Using Script Recorders with Playwright |
| `selectors.mdx` | How to Work with Selectors in Playwright |
| `steps-decorators.mdx` | Self-documenting tests - add automatic Playwright steps with TypeScript Decorators |
| `taking-screenshots.mdx` | Playwright Screenshots - How to Take and  Automate Screenshots |
| `test-fixtures.mdx` | Reuse code with custom test fixtures in Playwright |
| `testing-apis.mdx` | Testing APIs with Playwright |
| `testing-coupons.mdx` | How to Test Coupons and Discounts with Playwright |
| `testing-file-uploads.mdx` | How to Test File Uploads with Playwright |
| `testing-in-parallel.mdx` | How to run Playwright tests in parallel |
| `testing-pyramid.mdx` | The Layers of the Testing Pyramid |
| `user-signup-automation.mdx` | Automating User Signup with Playwright |
| `waits-and-timeouts.mdx` | Dealing with waits and timeouts in Playwright |
| `web-scraping.mdx` | Playwright Web Scraping - How to Extract Data from Websites |
| `what-is-playwright.mdx` | Beginner’s Guide to Playwright Automation |
| `writing-tests.mdx` | Best Practices for Writing Tests in Playwright |

### platform/ (12 files)

| File | Description |
|------|-------------|
| `allowlisting-traffic.mdx` | Allowlisting Traffic |
| `data-storage.mdx` | How we store data |
| `dynamic-secret-scrubbing.mdx` | Dynamic Secret Scrubbing |
| `filters.mdx` | Filters |
| `groups.mdx` | Groups |
| `ip-information.mdx` | IP Information & Versions |
| `manage-secrets-at-scale.mdx` | Manage secrets at scale |
| `managing-false-positives.mdx` | Managing False Positives |
| `network-diagnostic-tools.mdx` | Network Diagnostic Tools |
| `secrets.mdx` | Storing Secrets |
| `variables.mdx` | Environment variables and secrets |
| `views.mdx` | Views |

### platform/private-locations/ (9 files)

| File | Description |
|------|-------------|
| `agent-configuration.mdx` | Agent Configuration |
| `agent-images.mdx` | Agent Images |
| `agent-metrics.mdx` | Agent Metrics |
| `autoscaling.mdx` | Autoscaling |
| `change-log.mdx` | Checkly Agent Changelog |
| `kubernetes-deployment.mdx` | Kubernetes Deployment |
| `overview.mdx` | Getting started with private locations |
| `proxy-setup.mdx` | Proxy Setup |
| `scaling-redundancy.mdx` | Scaling and Redundancy |

### platform/reporting/ (2 files)

| File | Description |
|------|-------------|
| `analytics-api.mdx` | Analytics API |
| `overview.mdx` | Reporting Results with Checkly |

### platform/runtimes/ (2 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Checkly Runtimes |
| `runtime-specification.mdx` | Runtime Specification |

### resolve/ (2 files)

| File | Description |
|------|-------------|
| `automatic-check-repair.mdx` | Automatic check repair |
| `overview.mdx` | Checkly Resolve |

### resolve/ai-root-cause-analysis/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Rocky AI Root Cause Analysis |

### resolve/traces/ (2 files)

| File | Description |
|------|-------------|
| `how-it-works.mdx` | How It Works |
| `overview.mdx` | Traces |

### resolve/traces/export/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Export traces to your observability backend |

### resolve/traces/import/ (4 files)

| File | Description |
|------|-------------|
| `https-grpc.mdx` | HTTPS vs GRPC Traces |
| `missing-spans.mdx` | Missing Spans |
| `open-telemetry.mdx` | Setting Up The OpenTelemetry Collector |
| `overview.mdx` | Importing Traces To Checkly |

### resolve/traces/instrumentation/ (10 files)

| File | Description |
|------|-------------|
| `django.mdx` | Django |
| `dotnet.mdx` | .NET |
| `express.mdx` | Express |
| `flask.mdx` | Flask |
| `golang.mdx` | Go / Golang |
| `java.mdx` | Java |
| `laravel.mdx` | Laravel |
| `nextjs.mdx` | Next.js |
| `nodejs.mdx` | Node.js |
| `ruby-on-rails.mdx` | Ruby on Rails |
