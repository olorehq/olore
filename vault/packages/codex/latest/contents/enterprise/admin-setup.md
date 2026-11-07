# Admin rollout guide

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use this guide to plan a ChatGPT Enterprise rollout across these administration
boundaries:

- Workspace access.
- Local runtime policy for covered capabilities in the ChatGPT desktop app,
  Codex CLI, and IDE extension.
- Codex cloud.
- Platform API access.
- Plugins and connector access.
- Permissions in connected systems.

Complete the steps in order for a new rollout, or use the linked pages to change
one boundary.

If you manage a model gateway for local Codex clients, use
[Roll out a gateway](https://learn.chatgpt.com/docs/enterprise/roll-out-a-gateway) for gateway
qualification, credential distribution, and the client handoff. Configure
workspace access separately where your deployment uses workspace features.

In workspace settings, **Codex and Work Local** combines local Codex and Work
access under **Allow members to use Codex and Work Locally**. Some workspaces
instead provide independent **Codex Local** and **Work Local** sections. In
that layout, **Allow members to use Codex locally** controls Codex, and **Use
Work locally** controls Work. Enabling either one doesn't enable the other.
These labels identify workspace permissions, not separate products or clients.
Token permissions and credential lifetime limits appear in either an **Access
tokens** section or the local-access section, depending on the workspace.
Managed configuration is a separate policy layer that can constrain supported
runtime behavior for covered capabilities in those clients. This guide names
the individual surface when behavior or availability differs.

For an overview of access controls, see
[Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions).
Use Help Center guidance for current ChatGPT workspace procedures and the
linked developer documentation for local and hosted runtime behavior.

<a id="enterprise-grade-security-and-privacy"></a>

For enterprise security, privacy, and runtime protections, see
[Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security) and the
[Codex security white paper](https://trust.openai.com/?itemUid=382f924d-54f3-43a8-a9df-c39e6c959958&source=click).

<a id="pre-requisites-determine-owners-and-rollout-strategy"></a>

## Step 1: Assign owners and choose a rollout

Assign an owner for each part of the rollout:

- **Workspace access:** Membership, seats, roles, and supported workspace
  features.
- **Local runtime policy:** Approvals, permission profiles, filesystem and
  network access, and other requirements for supported local clients.
- **Codex cloud:** Hosted environments, repository connections, and cloud
  runtime policy.
- **Connected systems:** Provider-side application installation, accounts, and
  permissions.
- **Reporting and compliance:** Analytics access, audit exports, and downstream
  data handling.

Decide whether each audience needs covered local capabilities in the ChatGPT
desktop app, Codex CLI, IDE extension, Codex cloud, or a combination. Treat
Platform API access as a separate organization and project boundary when a
workflow uses API-key authentication.

## Step 2: Configure workspace access and identity

Use ChatGPT workspace membership, seats, groups, and supported RBAC permissions
to grant the intended audiences supported workspace features. Verify local
client and Codex cloud access against the current workspace guidance rather
than assuming that the same role controls every surface. Keep built-in
administration roles limited to the people who administer the workspace.

Workspace controls and labels change over time. Use these sources for current
procedures:

- [Manage members, seat types, roles, and access](https://help.openai.com/en/articles/8266401-managing-members-seat-types-roles-and-access-in-chatgpt-enterprise)
- [Configure role-based access control](https://help.openai.com/en/articles/11750701-rbac)
- [Manage workspace settings](https://help.openai.com/en/articles/8411955)
- [Groups and provisioning](https://learn.chatgpt.com/docs/enterprise/groups-and-provisioning)
- [User lifecycle management](https://learn.chatgpt.com/docs/enterprise/user-lifecycle)
- [Authentication](https://learn.chatgpt.com/docs/auth)

Test sign-in and feature access with a member who has the intended permissions. Workspace access doesn't grant repository, file, or action access
in a connected service.

<a id="set-up-work-sync"></a>




## Set up Local computer access with Work Cloud

If your rollout includes local computer access for Work or dots, review policies in Agent Security before rollout. Policy migration and feature access are separate changes; the confirmation flow does not require policy creation to enable access. Supported Global policy governs cloud orchestration when managed policy is enabled. Local execution requirements and device controls govern the connected computer. Work cloud containers and dots cloud computers use their own execution configuration and requirements. Follow [Local computer access for Work Cloud and dots](https://learn.chatgpt.com/docs/enterprise/cloud-local-access) for separate setup and eligibility requirements.

Use the policy API to manage Global settings. To manage Local or Codex Cloud settings, use the Agent Security UI. Existing Global API workflows remain available after migration. Test your scripts and Terraform integrations, and confirm that policy assignments and ordering are unchanged.

Check compatibility before enabling sync:

- **Network policy.** Test [network policy precedence and runtime limits](https://learn.chatgpt.com/docs/enterprise/managed-configuration#network-policy-precedence-and-runtime-limits) if you use environment overrides. A Global restriction can remain in force despite an environment allow.

- **Enterprise hooks.** If your rollout depends on hooks, check [which handlers run with cloud orchestration](https://learn.chatgpt.com/docs/hooks#hooks-with-cloud-orchestration). Test the events and failure cases you rely on before enabling access. Review [audit coverage](https://learn.chatgpt.com/docs/enterprise/compliance-api#audit-records-for-local-computer-access-with-work-cloud) separately.

- Data requirements. Local computer access with Work Cloud does not provide strict zero data retention. Data residency and inference residency cover only eligible content and supported workloads, regions, and configurations. Enterprise Key Management (EKM) covers supported stored content in eligible workspaces. Work is not supported with UAE inference residency. If `enforce_residency` is enabled in any cloud policy, **Allow local computer access** is disabled for both Work and dots. This safeguard does not configure workspace residency or, by itself, disable Work Cloud or dots. If your organization requires ZDR, do not enable this feature.

As a workspace owner, review Work permissions for the intended users or groups. Enable Work Cloud, then turn on **Allow local computer access**. Use supported role assignments to grant access. See [Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions).

## Step 3: Configure local runtime requirements

Local requirements constrain runtime behavior when a user starts a supported
local run in the ChatGPT desktop app, Codex CLI, or IDE extension. Deliver
`requirements.toml` through a supported cloud, device, or system channel. Keep
this policy separate from ChatGPT workspace roles and groups.

Use permission profiles for supported local clients instead of building new
deployments around legacy sandbox-mode restrictions. For example:

```toml
default_permissions = ":workspace"

[allowed_permission_profiles]
":read-only" = true
":workspace" = true
```

To disable Computer Use across the supported browser and desktop feature
surfaces, constrain each public feature key that participates in the experience:

```toml
[features]
browser_use = false
browser_use_full_cdp_access = false
browser_use_external = false
in_app_browser = false
computer_use = false
```

For the authoritative key list, delivery behavior, precedence, and more
examples, see
[Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration) and the
[`requirements.toml` reference](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml).

<a id="team-config"></a>
<a id="step-4-standardize-local-configuration-with-team-config"></a>

## Step 4: Standardize repository configuration

Use repository-scoped configuration to share project defaults, rules, and
skills without duplicating setup for every user. Check configuration into
`.codex` or `.agents` according to the feature's documented location:

| Type          | Source                                           | Use it to                                                  |
| ------------- | ------------------------------------------------ | ---------------------------------------------------------- |
| Configuration | [Config basics](https://learn.chatgpt.com/docs/config-file/config-basic) | Set repository defaults for supported local clients        |
| Rules         | [Rules](https://learn.chatgpt.com/docs/agent-configuration/rules)        | Control commands that require approval outside the sandbox |
| Skills        | [Build skills](https://learn.chatgpt.com/docs/build-skills)              | Make repository workflows available to supported clients   |

Repository configuration can supply defaults and reusable workflows. It can't
grant workspace, model, Platform API, or connected-system access.

## Step 5: Configure Codex cloud

Codex cloud uses hosted environments and connected source repositories.

Codex Cloud is off by default for Enterprise workspaces. Existing **Use Codex
in the cloud** settings carry forward from Codex Cloud (Legacy): workspaces that
already enabled Cloud retain access, and those with Cloud disabled remain off
until an admin enables it. Access remains subject to rollout and workspace
restrictions.

Plan each boundary:

1. Grant the intended audience **Use Codex in the cloud**. Separately grant
   **Manage workspace environments** to the people who create and edit
   workspace-shared environments. See
   [workspace role guidance](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions#review-codex-cloud-access-and-environment-administration).
2. Install and configure the supported source-system integration.
3. Limit repository access in the source system to the repositories each
   audience needs.
4. Configure cloud environments, secrets, internet access, and supported
   cloud-managed requirements for those repositories.
5. Configure optional hosted workflows such as code review.
6. Test task access with a representative member and environment management with
   the designated administrator. Verify each person's workspace, environment,
   and repository permissions.

Cloud environments don't inherit local device policy, MDM settings, or local
network access. Review supported cloud-managed requirements separately from the
requirements installed on a user's computer. See
[Connect to services](https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services)
for destination access and [Agent Security](https://learn.chatgpt.com/docs/environments/cloud-environments#agent-security)
for how workspace requirements constrain cloud environments.

Codex cloud respects the repository permissions and protections exposed by the
connected source system. Workspace access doesn't bypass those controls. See
[Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environments) for setup and
runtime guidance.

## Step 6: Configure plugins and connected capabilities

Review plugin installation, bundled skills, connector-backed capabilities,
connector actions, and source-system authorization as separate decisions.
Disabling a connector-backed capability doesn't necessarily uninstall the
plugin or its bundled skills.

Before including a plugin or skill in the rollout:

1. Confirm its source, accountable owner, intended audience, and review date.
2. Review bundled skills, connectors, MCP servers, hooks, and the data and
   actions each capability requires.
3. Test it with non-sensitive data and the least access it needs.
4. Record who owns re-review and retirement.

Plugins work in Chat and Work across ChatGPT on the web, desktop, and mobile,
in Codex in the ChatGPT desktop app, and through the Codex CLI plugin browser.
They aren't available in the IDE extension.
ChatGPT and Codex share one universal public plugin directory; workspace
controls determine which of those plugins members can access.

See [Plugin controls](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors) and
[Skill controls](https://learn.chatgpt.com/docs/enterprise/skills) for the complete model.

## Step 7: Set up governance and observability

Choose the reporting surface that matches the question:

<a id="analytics-api-setup-steps"></a>
<a id="compliance-api-setup-steps"></a>

- Use [Workspace analytics](https://learn.chatgpt.com/docs/enterprise/workspace-analytics) for
  interactive ChatGPT workspace analytics and Codex analytics.
- Use the [Analytics API](https://learn.chatgpt.com/docs/enterprise/analytics-api) for programmatic,
  aggregated reporting through the Codex Analytics API.
- Use the [Compliance API](https://learn.chatgpt.com/docs/enterprise/compliance-api) for audit and
  investigation records.
- Use [ChatGPT usage limits and spend controls](https://learn.chatgpt.com/docs/enterprise/usage-limits)
  when plan-dependent Codex activity consumes eligible ChatGPT workspace
  credits.

Use the authenticated API references for current access requirements, schemas,
fields, retention, and request behavior when building an integration.

Protect the integration boundary:

- Store API keys and other integration credentials in the organization's
  secret-management system.
- Limit access to downstream systems and retained data to the approved
  audience.
- Protect exported Compliance API records according to their sensitivity and
  the organization's retention policy, and test collection and deletion
  workflows against the current contract.

## Step 8: Verify and maintain the rollout

Have a pilot user [start a new Work task and continue it on another device](https://learn.chatgpt.com/docs/get-started-with-work#continue-work-across-devices).
With the computer connected, check approvals, filesystem access, and network
restrictions using an allowed action and a blocked action. Disconnect the
computer and start another turn. Verify that the cloud container cannot access
local files and that its own execution requirements apply.

Record the effective settings and the result of each test. If a restriction does not work as expected, resolve the issue before users rely on it. Follow the documented behavior for disabling sync. Treat access removal, task interruption, and data retention as separate actions.

Verify every applicable boundary with representative identities:

- ChatGPT workspace membership, seat, and supported role permissions.
- Covered local capabilities in the ChatGPT desktop app, Codex CLI, and IDE
  extension, including sign-in and effective runtime requirements.
- Codex cloud access, environment configuration, and repository permissions.
- Platform API organization and project access for API-key workflows.
- Plugin installation, bundled skills, connector access, and supported actions.
- Connected-system authorization and data access.
- Analytics and compliance access for the responsible administrators.

Record the owner and current procedural source for each control. This record
lets administrators update procedures when UI or policy changes without
changing the administration model.

After the initial rollout, review access, connected capabilities, credit use,
support feedback, and the workflows teams actually use. Adjust the rollout
scope and administrator guidance when those signals change.

<a id="if-you-need-to-turn-work-sync-off"></a>




### If you need to turn Local computer access with Work Cloud off

Tell affected users that disabling **Allow local computer access** interrupts
running turns. Members who retain Work access can send a new message in an
existing cloud conversation to continue without local files.