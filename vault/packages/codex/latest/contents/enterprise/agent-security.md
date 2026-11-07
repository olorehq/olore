# Agent Security

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Use Agent Security in the Admin Console to manage policies and configuration. It replaces Policies & Configuration. Its rollout is independent of local computer access for Work and dots.

When eligible legacy cloud policies migrate, their settings carry over into Global, preserving policy assignments and ordering. Review the migrated policies in Agent Security. Local computer access is a separate opt-in for Work and for dots.

## Where settings apply

Each policy starts with a Global baseline. Environment overrides change supported execution settings for Local or Codex Cloud. Where an environment has no override, it inherits the applicable Global settings from that policy.

- Global: set orchestrator controls, including approvals and web search, and shared execution settings.

- Local: adjust supported execution settings for work that runs on a connected computer.

- Codex Cloud: adjust supported execution settings for Codex cloud tasks. You can configure these policies before enabling Codex Cloud, but they apply only after you enable Codex Cloud on the permissions page. Work Cloud has separate capability permissions, described in [How Agent Security applies to Work Cloud](#how-agent-security-applies-to-work-cloud).



> Illustration: The new Local computer access with Work Cloud setting adds cloud-orchestrated Work on a connected computer. Local orchestration and Work Cloud remain unchanged. Supported Global policy applies through the shared cloud orchestrator when managed policy is enabled; device restrictions still apply, with MDM above Agent Security. Work cloud containers use their own execution configuration and requirements, separate from local execution policy.



## Set a baseline and add environment settings

1. Open Agent Security and review your existing Global policies, assignments, and ordering. Check them against your organization's intended controls. This review does not enable Local computer access with Work Cloud.

1. Review Requirements and Defaults separately. Requirements set limits that users cannot override. Defaults set starting values within those limits.

1. Keep orchestrator controls in Global. These include approval requirements, allowed web search modes, and managed tool controls.

1. Add Local or Codex Cloud environment settings for supported execution controls, such as sandboxing, filesystem permissions, and managed execution networking. Use an operating-system-specific override when that scope is needed.

1. Save the policy and review any validation messages about the settings you entered.

## Choose controls and configuration fields

The orchestrator coordinates the task. An executor is the computer or cloud container that runs an execution step. Configure orchestrator controls in Global. Environment `requirements.toml` settings support execution controls only. Orchestrator settings, such as approval policy and web search, stay in Global and cannot be overridden by an environment.

### Orchestrator controls

Configure these controls in Global. For Work with local access and dots, supported Global policy applies through the shared cloud orchestrator when managed policy is enabled. Environment overrides apply to supported execution settings and cannot override orchestrator controls. Of the approval, web search, app, MCP, plugin, and rule requirements listed below, only **Allowed approval policies** and **Allowed web search modes** have dedicated controls in the Agent Security UI. Configure the other fields through TOML.

| Control                          | What this controls                                                                 | `requirements.toml` fields                                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Approval policies and review     | When the agent needs approval and who reviews it, including automatic review.      | `allowed_approval_policies`<br />`allowed_approvals_reviewers`<br />`auto_review`<br />`guardian_policy_config` |
| Web search modes                 | Which web search modes the agent may use.                                          | `allowed_web_search_modes`                                                                                      |
| Apps, MCP servers, and `plugins` | Available apps, MCP servers, and plugins, and their configuration.                 | `apps`<br />`mcp_servers`<br />`plugins`                                                                        |
| Command `rules`                  | Which commands the agent can run, which require approval, and which it cannot run. | `rules`                                                                                                         |
| Managed `hooks`                  | Admin-defined actions at supported task and tool events.                           | `hooks`<br />`allow_managed_hooks_only`                                                                         |




### Hooks in Local computer access with Work Cloud

In **Global**, use **Edit as TOML** to configure `mcp_tool` handlers for Work with local computer access and dots. Test callback failures as well as explicit denials before relying on a hook to block a tool. See [Hooks with cloud orchestration](https://learn.chatgpt.com/docs/hooks#hooks-with-cloud-orchestration) for supported handlers and events.

Global also contains desktop and client settings. Some of these settings apply only to the desktop app. Configuring a setting in Global does not mean it applies everywhere. See the Configuration Reference for each field's supported use.

### Execution controls (executor)

These fields control how work runs on a computer or in a cloud container. Set shared values in Global. Use Local or Codex Cloud overrides for supported settings that need to differ in that environment.

| Control                          | What this controls                                                         | `requirements.toml` fields                                                  |
| -------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Login shell use                  | Whether shell tools can start a login shell.                               | `allow_login_shell`                                                         |
| Allowed sandbox modes            | Which sandbox modes the executor can use.                                  | `allowed_sandbox_modes`                                                     |
| Permission profiles and defaults | Allowed permission profiles, their access limits, and the default profile. | `allowed_permission_profiles`<br />`default_permissions`<br />`permissions` |
| Remote sandbox configuration     | Host-specific sandbox modes, selected by hostname.                         | `remote_sandbox_config`                                                     |
| Managed execution networking     | Managed network access, including allowed and denied destinations.         | `experimental_network`                                                      |
| Windows execution settings       | Platform-specific execution and sandbox settings on Windows.               | `windows`                                                                   |

The table shows which field groups support environment overrides. Supported options within each group can vary by platform, and some requirements combine across policies instead of replacing one another. See the Configuration Reference for supported values and Managed configuration for network exceptions.

On supported managed Codex Cloud execution paths, allowing a domain in Agent Security cannot override an environment restriction. An approved full sandbox escalation can bypass the managed command proxy. See [Network isolation](https://learn.chatgpt.com/docs/agent-approvals-security#network-isolation) for what the proxy covers.

### Configure networking in the UI

1. Open **Admin Console > Agent Security**. Select a policy and choose **Global**, **Local**, or **Codex Cloud**. Use Global for the shared baseline and an environment override for supported differences.
1. Open **Requirements** and turn on **Manage Networking**. Add the required domain entries and choose **Allow** or **Deny** for each. Turn on **Only allow domains added by admins** if ordinary user configuration and per-domain approvals must not expand the managed proxy allowlist.
1. Review the effective settings and inherited rules before saving. Empty environment settings inherit Global rather than clearing it. Check local/private connectivity separately for Codex Cloud. Manage Networking Off is not the Cloud environment Internet access Off switch.
1. For Codex Cloud, also check the environment's internet access, destination, and method settings. Save and test an intended allowed request and an intended blocked request. Test any permitted full sandbox escalation separately.

#### No effective allowed destinations

When **Manage Networking** and **Only allow domains added by admins** are On, ordinary managed commands need effective allowed destinations. If no Allow entries are configured or inherited, those commands have no allowed destinations. A deny-only policy does not implicitly allow the rest of the internet. Add required Allow entries and check inherited rules before saving. This restriction applies to the managed command proxy, not every tool or approved full sandbox escalation.

#### Codex Cloud local/private connectivity

An explicit Off value for local/private connectivity can prevent Codex Cloud from reaching its upstream proxy, even when the destination domain is allowed. Check the final `allow_local_binding` value and identify which policy or setting supplies it. On the supported Cloud proxy path, this defaults to true only when no applicable requirement, selected network profile, or proxy feature setting supplies a value. An inherited false still counts as an explicit setting. Where supported, set a higher-priority Cloud override to change this value for Codex Cloud without changing the Global value used by Local. This does not add domain Allow entries. Verify executor support before relying on the override. Do not apply this Cloud default to Local.

### Environment defaults

The Defaults editor uses `config.toml` fields, which are different from `requirements.toml` constraints. Supported top-level environment defaults are:

- Shell behavior: `allow_login_shell` and `shell_environment_policy`.

- Sandbox and permissions: `sandbox_mode`, `sandbox_workspace_write`, `default_permissions`, and permissions.

- Windows execution: windows.

A default does not override an enforced requirement. Keep orchestrator defaults, including approval and web search settings, in Global.

## Understand how policies combine

- Across policies, a higher-priority policy wins over a lower-priority policy, even when the lower-priority policy is more specific.

- Within one policy, supported execution settings resolve in this order: an operating-system-specific environment override, an all-OS environment override, then Global.

- For local execution, MDM and legacy managed-device requirements rank above Agent Security. The device's system requirements file ranks below Agent Security.

For the same domain rule within a policy, an admin environment override can allow a domain denied in Global or deny a domain allowed in Global. Without an environment override, the Global rule is inherited. Other effective Deny rules or access controls can still block a request.

These outcomes compare the same domain key within one policy, with no higher-priority policy changing the result. A higher-priority value replaces the same key. Other inherited keys remain. An Allow does not bypass a different matching Deny, such as an inherited wildcard. An empty environment map does not clear inherited rules.

## How Agent Security applies to Work Cloud

Configure **Cloud browser use** and **Cloud network access** under **Admin Console > Permissions & roles > Workspace capabilities > Cloud computer capabilities**. These shared capabilities are available to Work Cloud and dots and can be configured independently of Work Cloud access. A Work task still needs Work access and permission to use each capability it requires. Review browser access and code or shell network access separately. Disabling one does not automatically disable the other.

Work Cloud containers and dots cloud computers use their own execution configuration and requirements, rather than the managed environment bundle used by other executor types. Local file and network restrictions do not automatically apply to these cloud computers. Supported Global orchestrator policy has a separate scope. A Global policy or Codex Cloud override does not configure shared cloud capability permissions. Review those permissions separately.

Check the workspace default, all direct and group-assigned roles, and separately enforced restrictions such as Lockdown Mode when verifying a member's effective access.

Before enabling **Allow local computer access** under Work Cloud, review the Global baseline and check compatibility with the controls your organization relies on. **Use Codex locally on the ChatGPT desktop app** is not a prerequisite. If `enforce_residency` is enabled in any cloud policy, **Allow local computer access** is disabled for both Work and dots. This safeguard does not configure workspace residency or, by itself, disable Work Cloud or dots. Review [Local computer access for Work Cloud and dots](https://learn.chatgpt.com/docs/enterprise/cloud-local-access) for separate setup steps, eligibility, and connection behavior.

## Policy API and Terraform

Use the policy API to manage Global settings. To manage Local or Codex Cloud settings, use the Agent Security UI. Existing Global API workflows remain available after migration. Test your scripts and Terraform integrations, and confirm that policy assignments and ordering are unchanged.

Policy migration does not change SCIM membership synchronization or RBAC roles.

## Related guides

- [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration): policy delivery, precedence, and field-specific merge behavior.

- [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference): field definitions and Work compatibility.

- [Local computer access for Work Cloud and dots](https://learn.chatgpt.com/docs/enterprise/cloud-local-access): prerequisites and setup steps.

- [Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions): access to Work and Codex capabilities.