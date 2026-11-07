# Managed configuration

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Managed configuration lets enterprise admins set supported requirements and defaults for ChatGPT Work and Codex. Requirements constrain what users and tasks can do. Defaults provide starting values. Support depends on the product, client version, and execution environment.

Start in **Agent security** in the Admin Console for supported cloud-managed
settings. Use the settings controls for common tasks, or select **Edit as TOML**
to inspect, copy, or edit the configuration text. Both views edit the same policy;
TOML also exposes supported fields without a dedicated control. You don't need to
distribute a local file to use cloud-managed settings. Authentication restrictions and
device-managed deployments have separate [local setup](#manage-authentication-locally).

Enterprise admins can control supported local client behavior with:

- **Requirements**: admin-enforced constraints that users can't override.

- **Configuration defaults**: system or cloud-managed `config.toml` settings that users can override.

- **Legacy managed defaults**: `managed_config.toml` starting values applied when a supported client launches. Users can still change settings during a run. The client reapplies these defaults the next time it starts.

See [Agent Security](https://learn.chatgpt.com/docs/enterprise/agent-security) for the Global baseline, environment overrides, and orchestrator and executor field lists.

If your users don't sign in to Codex with ChatGPT, you can distribute defaults and requirements to Codex CLI and the desktop app from an HTTPS endpoint you operate. See [Self-host Codex configuration for your team](https://learn.chatgpt.com/docs/enterprise/configuration-server).

## Configure a policy in Agent security

Where Agent security is enabled, workspace owners, workspace admins, and members
with Codex admin permissions can manage policies. Access to the policy editor
doesn't grant members access to the features that a policy controls.

Use **Workspace default** for the workspace baseline. Use **Overrides** when
specific users, groups, or roles need different settings. An audience override
selects who receives a policy; an environment setting selects where supported
execution controls apply.

1. Open **Admin Console** > **Agent security** and select **Workspace default** or
   the policy you want to edit under **Overrides**.
1. Open **Requirements** to set enforced limits, or **Defaults** to set starting
   values that members can change within those limits.
1. Keep approval, web search, and other agent-wide settings in **Global**. Where
   available, use **Add environment settings** in the relevant card to add
   **Local Environments** or **Codex Cloud Environments** for supported execution
   settings. An empty environment document inherits settings from Global; it doesn't copy or
   pin the current baseline.
1. Use the controls described in this guide. For advanced fields, select
   **Edit as TOML** and edit the appropriate scope's `requirements.toml` or
   `config.toml`. Select **Use settings controls** to return to the visual editor.
1. Review validation messages, then select **Save changes**. Applying a rule in
   a rule editor updates the draft; it doesn't save the policy by itself.
1. Check policy selection and the supported client behavior as described in
   [Confirm the admin and employee experience](#confirm-the-admin-and-employee-experience).

Environment editors and supported fields depend on the workspace and policy.
See [Where settings apply](https://learn.chatgpt.com/docs/enterprise/agent-security#where-settings-apply)
before moving a Global setting into an environment. A setting in Global doesn't
necessarily apply to every product or execution path.

### Copy or reuse a configuration

The visual editor doesn't replace TOML. Select **Edit as TOML** to copy a
configuration, keep a reference copy, or reuse settings in another policy.
Select **Use settings controls** to switch back to the visual editor.

1. Open the source policy and select **Edit as TOML**.
1. Choose the scope you want to copy: **Global** or an available environment tab.
   Copy the text from **Requirements** (`requirements.toml`), **Defaults**
   (`config.toml`), or both, depending on what you want to reuse.
1. Open the destination policy, select **Edit as TOML**, and choose the matching
   scope. Paste requirements into `requirements.toml` and defaults into
   `config.toml`. Review existing destination settings before replacing text;
   keep unrelated settings that should still apply.
1. Review validation messages and the destination policy's targets and priority,
   then select **Save changes**. Confirm the resulting client behavior before
   relying on the copied policy.

The copied text contains the authored settings for that policy and scope. It doesn't include assignments, policy order, other environment documents, or the
effective configuration combined from other policies and device settings.
Copy environment settings separately when needed. Switching views or copying
text doesn't save a policy change.

Try the example below: change a setting, then select **Edit as TOML** to see its
configuration. Switch back with **Use settings controls** to keep experimenting.



> Illustration: Interactive example of Agent security settings and their TOML representation. The initial requirements allow on-request approvals, read-only sandboxing, and disabled web search. Change a sample setting and select Edit as TOML to see the corresponding field; Use settings controls returns to the same sample choices. This example does not change workspace policies.



### Choose the right control

| Task                                                                                              | Where to configure it                                                                  | What it changes                                                                                           |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [Restrict browser and native-app access](#control-browser-and-computer-use)                       | **Requirements** > **Desktop feature availability**, **Site rules**, and **App rules** | Controls which supported desktop capabilities are available and which sites or apps they can access.      |
| [Limit approval, sandbox, or web search choices](#set-approval-sandbox-and-web-search-guardrails) | **Requirements** > **Policy guardrails**                                               | Restricts the choices available to supported clients.                                                     |
| [Set starting approval, permission, search, or tool behavior](#set-configuration-defaults)        | **Defaults**                                                                           | Sets values members can change within enforced requirements.                                              |
| [Restrict command network destinations](#configure-network-access)                                | **Requirements** > **Network use controls**                                            | Applies managed networking rules to supported command traffic. It isn't a workspace-wide internet switch. |
| [Configure plugins and managed hooks](#configure-plugins-and-managed-hooks)                       | **Edit as TOML**                                                                       | Lets you configure supported policy fields that have no dedicated visual control.                         |
| [Restrict login methods or workspaces before sign-in](#manage-authentication-locally)             | Local system requirements or macOS MDM                                                 | Applies authentication restrictions before cloud policy is loaded.                                        |

## Control browser and Computer Use

Use **Agent security** in the Admin Console to manage browser and native-app access
for supported desktop clients. Start with the UI controls. The TOML examples below
provide a configuration reference for file-based policy delivery and settings that
need the TOML editor.

Browser Use controls agent-driven activity in a browser. Computer Use controls
agent-driven activity in native desktop apps. Settings for the built-in browser
pane are separate from Browser Use. See [browser sessions and existing
sign-ins](https://learn.chatgpt.com/docs/enterprise/chatgpt-work-local-security#browser-sessions-and-existing-sign-ins)
for the differences between browser paths.

### Before you begin

Use an account with permission to manage Agent Security policies. Confirm which
people receive the policy and which client versions and operating systems you need
to support. Review [Agent Security](https://learn.chatgpt.com/docs/enterprise/agent-security) for policy
assignments, Global settings, and supported environment overrides.

Use **Requirements** for limits users can't override. **Defaults** set starting
values within those limits. Allowing a site or app doesn't install a plugin, grant
operating-system permissions, sign a user in, or approve an action that still
requires review.

Under **Desktop feature availability**, review **Browser use**, **External browser
use**, and **Computer use**. **Force off** disables the corresponding feature; an
allow rule for a site or app doesn't override it. Review **Full CDP access**
separately; **Block user opt-in** prevents users from enabling it.

These desktop controls don't configure the hosted Work Cloud browser. Manage
**Cloud browser use** and **Cloud network access** separately under
**Admin Console > Permissions & roles > Workspace capabilities > Cloud computer capabilities**.
See [how Agent Security applies to Work Cloud](https://learn.chatgpt.com/docs/enterprise/agent-security#how-agent-security-applies-to-work-cloud).

### Configure browser access

{/* Preserve the console label "Auto-approve requests". */}
{/* vale Microsoft.Auto = NO */}

1. Open **Admin Console > Agent security**. Use **Workspace default** for the
   workspace baseline, or open the relevant policy under **Overrides**. In
   **Requirements**, go to **Desktop browser controls**.
1. In **Site rules**, open the **Default** row's actions and choose **Edit Default**.
   For access limited to approved sites, set **Site access** to **Block**, then
   choose **Apply rule**. The **Default** row supplies values that a matching site
   rule leaves at **Use default rule**.
1. Choose **Add site rule**. In **Site or pattern**, enter an origin: a scheme,
   hostname, and optional port. For example, `https://example.com` is valid;
   `https://example.com/files` isn't. Don't include a path, query, or fragment.
   HTTP and HTTPS are different origins. Specify the port when it differs from
   the scheme's default.
1. Set **Site access** and review **Downloads**, **Uploads**, and **Debug/CDP**.
   Choose **Allow** or **Block** as appropriate, or leave a setting at **Use default
   rule**. **Debug/CDP** controls full Chrome DevTools Protocol access for browser
   debugging. **Allow** lets normal policy and approval checks continue.
1. Review **Auto-review**, **Always allow**, and **Approval duration** for the site.
   **Approval duration** offers **This turn** and **This thread**. Review **Browser
   history**, **Save site approvals**, and **Auto-approve requests** in **Desktop
   browser controls** as well.
1. Choose **Add rule**, review validation messages, and select **Save changes**.
   Test an allowed site and a blocked site on a supported client that receives the policy. Test
   uploads, downloads, and other restricted actions separately.

{/* vale Microsoft.Auto = YES */}



> Illustration: Agent Security site-rule editor with site access, transfers, debugging, and approval controls.



Disabling Auto-review for browser actions sends those actions to the user for
approval instead. It doesn't disable model safety monitoring.

When several origin patterns match, the most restrictive value wins for each
setting. Local configuration can't relax a managed denial. Managed network denies
and exclusive allowlists also apply to browser tools. See the [browser policy
fields](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml) for origin patterns
and approval behavior.

Computer Use can also operate a browser as a native app. Browser Use site and
capability rules don't apply to that path. Review native-app access separately;
see the [browser security
boundaries](https://learn.chatgpt.com/docs/enterprise/chatgpt-work-local-security#browser-sessions-and-existing-sign-ins).

### Configure native-app access

1. In **Requirements**, go to **Desktop app controls > App rules**.
1. Use the **Default** row's actions to configure access for apps without a matching
   rule. To limit Computer Use to approved apps, block access by default and add
   allow rules for those apps.
1. Choose **Add app rule**. In the **Edit rule** dialog, select **macOS bundle ID**,
   **Windows AUMID**, or **Windows executable** from **App**. Enter the exact **App
   identifier** for a bundle ID or Application User Model ID (AUMID). For **Windows
   executable**, enter **Publisher name** and **Product name**; **Binary name** is
   optional. Use verified app identity information, not a display name or file path.
1. Set **App access** for the rule, then choose **Add rule**. Review **Save app
   approvals** under **Desktop app controls**, review validation messages, and
   select **Save changes**. Disabling saved approvals still permits approvals for the current
   session; allowing saved approvals doesn't approve an app.
1. Test an allowed app and a blocked app on each supported operating system in
   your deployment. Confirm that operating-system permissions still apply and that users must still provide required approvals.



> Illustration: Agent Security native-app rule editor showing macOS bundle ID, app identifier, and app access.



See the [Computer Use policy
fields](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml) for Windows identity
requirements and [locked-use restrictions](#restrict-locked-computer-use) for
managed Macs.

### Check the effective policy

If an allowed site or app is still blocked, check other matching rules, policy
assignments and priority, device requirements, and user configuration. An allow
rule in one source doesn't bypass another applicable denial. See [requirements
locations and precedence](#locations-and-precedence).

If a setting has no effect, verify that the client, operating system, and policy
delivery path support it. Pay particular attention to Work Cloud with local
computer access: some fields have partial support or require validation. See
[Work compatibility in the Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference).

Check [workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions)
and [plugin controls](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors) separately when a user
can't access the feature or required plugin.

### TOML configuration reference

The following examples describe the same policy intent for `requirements.toml`.
Use them when managing policy through files or the TOML editor. You don't need to
edit a local file to use the controls available in Agent Security.

This browser example denies access by default, allows `https://example.com`, blocks
uploads and full CDP access there, and limits site-access approval to the current
turn:

```toml
[browser_use]
allow_history_access = false
allow_global_persistent_approval = false

[browser_use.default_origin_policy]
access = "deny"

[browser_use.origins."https://example.com"]
access = "allow"
uploads = "deny"
downloads = "allow"
full_cdp_access = "deny"
persistent_approval = false
access_approval_lifetime = "turn"
```

To disable Auto-review for browser actions, set
`browser_use.disable_auto_review = true`, or set `auto_review = "deny"` on an
origin policy to restrict it for that origin.

On eligible managed plans, leave `browser_use.allow_webmcp` unset or set it to
`true` to allow [Site tools](https://learn.chatgpt.com/docs/webmcp) through workspace policy in the
desktop app's built-in browser. Set it to `false` to turn off access through
this policy. Users who already have access through their account rollout can
still use site tools. Model support, browser settings, and site permissions
also apply.

This native-app example allows Calculator on macOS, denies other apps by default,
and prevents app approvals from persisting across sessions:

```toml
[computer_use]
default_app_access = "deny"
allow_persistent_approval = false

[computer_use.macos.bundle_ids]
"com.apple.calculator" = "allow"
```

Windows policies can identify packaged apps with `computer_use.windows.aumids` or
executables with `computer_use.windows.exes`. Executable rules require
`publisher_name`, `product_name`, and `access`; `binary_name` is optional.

For all supported fields and values, use the
[`requirements.toml` reference](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml).
To disable a capability rather than restrict individual sites or apps, see
[Pin feature flags](#pin-feature-flags).

### Other desktop controls

The following desktop controls cover feature availability, Locked Use, Appshots, and device remote control. Use dedicated settings for feature availability and Locked Use; configure Appshots and device remote control with **Edit as TOML**. For destination restrictions on desktop-app traffic, see [Control desktop app network destinations](#control-desktop-app-network-destinations).

#### Pin feature flags

For desktop features exposed in Agent security, open **Global** > **Requirements** > **Desktop feature availability**. Set **In-app browser**, **Browser use**,
**External browser use**, or **Computer use** to **Force off** to disable that
capability, then select **Save changes**. For **Full CDP access**, choose
**Block user opt-in** to prevent users from enabling it. Allowing a feature doesn't override its product, platform, or rollout availability.

For other supported [feature flags](https://learn.chatgpt.com/docs/config-file/config-basic#feature-flags),
use **Edit as TOML** and the Global `requirements.toml` document, or a supported
local requirements source. The following examples include both runtime and
desktop-specific feature pins:

```toml
[features]
hooks = true
unified_exec = false

# Disable surface-specific features when needed.
browser_use = false
browser_use_full_cdp_access = false
browser_use_external = false
in_app_browser = false
in_app_updates = false
computer_use = false
```

Use the canonical feature keys from `config.toml`'s `[features]` table for
runtime features. The local runtime normalizes recognized features to meet these
pins and rejects conflicting writes to `config.toml` or profile file feature
settings.

A managed `unified_exec = false` keeps command execution available, but disables
resumable processes and the `write_stdin` tool. User configuration can't disable
this feature.

<a id="disable-codex-feature-surfaces"></a>

- `in_app_browser = false` disables the built-in browser pane.
- `in_app_updates = false` disables the ChatGPT desktop app's own updater on
  restart, where supported. It doesn't affect external package deployment or
  extend support for older app versions. For setup and rollout guidance, see
  [Manage app updates](https://learn.chatgpt.com/docs/enterprise/manage-app-updates).
- `browser_use = false` disables supported Browser Use capabilities. External
  Browser Use and native-app Computer Use have separate controls.
- `browser_use_full_cdp_access = false` disables full CDP access in the local
  runtime, including Browser Developer mode, and prevents the ChatGPT desktop
  app from enabling the corresponding setting.
- `browser_use_external = false` disables agent-driven Browser Use through
  supported browser extensions.
- `computer_use = false` disables native-app Computer Use, including operating
  a browser as a native app, along with Record & Replay and related install or
  setup flows.

**Disabling Browser Use alone does not block every browser path.** Native-app
Computer Use can still operate a browser when that capability and app access are
allowed; Browser Use site and capability rules do not apply to that path. To
block it, set **Computer use** to **Force off** (`computer_use = false`), or
[deny the browser app in App rules](#configure-native-app-access) if other native
apps should remain available. Review **External browser use** and **In-app
browser** separately. See [browser sessions and existing
sign-ins](https://learn.chatgpt.com/docs/enterprise/chatgpt-work-local-security#browser-sessions-and-existing-sign-ins)
for the controls that apply to each path.

If you omit these keys, policy allows the features, subject to normal client,
platform, and rollout availability.

#### Restrict locked computer use

To prevent users from enabling [Locked Use](https://learn.chatgpt.com/docs/computer-use#locked-use)
on a managed Mac, open **Global** > **Requirements** > **Desktop app controls**,
set **Allow use while locked** to **Disabled**, and select **Save changes**.
This setting doesn't turn off Locked Use on a Mac where it's already enabled.

The equivalent requirement for the TOML editor or device-managed delivery is:

```toml
[computer_use]
allow_locked_computer_use = false
```

This requirement removes the controls for enabling Locked Use. It doesn't
turn off Locked Use if it's already enabled. If you omit it, normal product
availability and the user's local setting still apply.

#### Disable Appshots

Appshots let supported clients include application snapshots. To disable them
for cloud-managed users, open **Edit as TOML** in Agent security and set the
top-level `allow_appshots` field in Global `requirements.toml`. For device-managed
deployments, use the applicable local requirements source:

```toml
allow_appshots = false
```

Where Appshots are available, `allow_appshots = false` disables them. If you
omit the key, requirements don't constrain Appshots, and normal product
availability checks apply. App-server clients that read effective requirements
through `configRequirements/read` receive the same restriction as
`allowAppshots`; an omitted or `null` `allowAppshots` value doesn't disable
Appshots.

#### Disable device remote control

To disable [device remote control](https://learn.chatgpt.com/docs/remote-connections#pick-up-work-from-another-device)
for cloud-managed users, use **Edit as TOML** in Agent security and set the
top-level `allow_remote_control` field in Global `requirements.toml`. You can
also set `allow_remote_control` in a supported local requirements source:

```toml
allow_remote_control = false
```

Where device remote control is supported, `allow_remote_control = false`
disables it. If you omit the key, requirements don't constrain device remote
control, and normal product availability checks apply. This requirement doesn't
disable SSH remote connections.

## Set approvals and execution permissions

Use this section to set approval behavior, permission boundaries, and starting defaults. Begin with [Policy guardrails](#set-approval-sandbox-and-web-search-guardrails) and [Defaults](#set-configuration-defaults). The later tasks explain TOML requirements for reviewer enforcement, custom permission profiles, filesystem restrictions, host overrides, and command rules.

### Admin-enforced requirements (requirements.toml)

Requirements constrain security-sensitive settings (approval policy, approvals reviewer, Auto-review policy, sandbox mode, permission profiles, web search mode, managed hooks, which MCP servers users can enable, and which plugin marketplace sources they can use). When resolving configuration (for example from `config.toml`, [profile files](https://learn.chatgpt.com/docs/config-file/config-advanced#profiles), or CLI config overrides), if a value conflicts with an enforced rule, the local client falls back to a compatible value and notifies the user. If you configure an `mcp_servers` allowlist, the client enables an MCP server only when both its name and identity match an approved entry; otherwise, the client disables it.

Requirements can also constrain [feature flags](https://learn.chatgpt.com/docs/config-file/config-basic#feature-flags) via the `[features]` table in `requirements.toml`. Note that features aren't always security-sensitive, but enterprises can pin values if desired. Omitted keys remain unconstrained.

For Codex 0.138.0 or later, prefer [permission profiles](https://learn.chatgpt.com/docs/permissions)
with `allowed_permission_profiles` and managed `default_permissions`. Use
`allowed_sandbox_modes` only for legacy deployments that still configure
`sandbox_mode`.

For the exact key list, see the [`requirements.toml` section in Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml).

### Set approval, sandbox, and web search guardrails

Use **Requirements** > **Policy guardrails** to limit supported client choices.
These controls constrain configuration; they don't select the starting value.
Set the starting value separately under **Defaults**.

1. In **Global**, open **Approval policies** and select the allowed approval
   styles. For example, **Ask when needed** allows the agent to request approval
   for actions such as sandbox escalation. **Never ask** prevents approval
   requests; it doesn't grant unrestricted execution.
1. Open **Sandbox modes** to limit legacy sandbox choices. **Read-only** restricts
   writes, **Workspace write** permits writes within the workspace and configured
   writable roots, and **Full access** removes filesystem sandboxing. Use
   [permission-profile requirements](#control-available-permission-profiles) for
   deployments that use permission profiles instead of `sandbox_mode`.
1. In **Global**, open **Web search modes** to limit web search. Choose **Cached**
   to permit cached search without live search, or **Disabled** to turn off web
   search. Web search restrictions are separate from command network rules.
1. Review the allowed choices and corresponding defaults, then select
   **Save changes**.

Leaving a requirement unset imposes no limit under that policy. Other
applicable policies still apply. The **Ask for untrusted commands** option
corresponds to `untrusted` in the requirements allowlist; it doesn't restore the
retired explicit `approval_policy = "untrusted"` setting. Follow the migration
guidance below for that case.

To constrain web search, use **Global** > **Requirements** > **Policy guardrails** > **Web search modes**. The equivalent TOML is:

```toml
allowed_web_search_modes = ["cached"] # "disabled" remains implicitly allowed
```

`allowed_web_search_modes = []` allows only `"disabled"`.
For example, `allowed_web_search_modes = ["cached"]` prevents live web search even in `danger-full-access` sessions.

### Set configuration defaults

Defaults give members a starting configuration. They don't enforce a
restriction or grant access to a workspace capability.

1. Open the policy's **Defaults** card. Keep agent-wide defaults in **Global**;
   use an available environment tab for supported execution defaults.
1. Under **Command execution**, choose the starting **Approval policy** and
   **Approval reviewer**, and the applicable **Sandbox mode** or **Default
   permissions**. The reviewer determines who reviews approval requests by
   default; the approval policy determines when requests can occur.
1. Under **Web search**, choose the starting **Web search** mode and **Web search
   context**. Under **Apps and tools**, review **Apps/connectors**, **Open-world
   tools**, and **Destructive tools** for supported app tools.
1. Confirm the defaults meet your **Requirements**, then select **Save changes**.

Use **Edit as TOML** for supported defaults without visual controls, such as
plugin marketplace configuration. These cloud defaults use [normal configuration
precedence](https://learn.chatgpt.com/docs/config-file/config-basic#configuration-precedence). They differ
from the [legacy `managed_config.toml` precedence](#precedence-and-layering),
which places managed defaults above local configuration at startup.

### Example requirements.toml

This example blocks `--ask-for-approval never` and `--sandbox danger-full-access` (including `--yolo`):

```toml
allowed_approval_policies = ["untrusted", "on-request"]
allowed_sandbox_modes = ["read-only", "workspace-write"]
```

Here, `untrusted` preserves the stricter approval behavior derived from
`trust_level = "untrusted"`; it does not make `approval_policy = "untrusted"` a
supported explicit setting.

### Migrate the retired `untrusted` approval policy

Codex and ChatGPT Work no longer support `approval_policy = "untrusted"`.
Remove it from managed defaults, legacy `managed_config.toml`, and any user,
project, profile, or startup configuration that sets it.

For interactive, read-only use, select `approval_policy = "on-request"` with a
read-only sandbox or permission profile allowed by your managed requirements.
Commands allowed by that sandbox can run without approval.

To keep stricter command approvals, omit an explicit `approval_policy`, set
`trust_level = "untrusted"` in the project's entry in user-level
`~/.codex/config.toml`, and keep `untrusted` in `allowed_approval_policies`.
This also disables project-local configuration. Setting `on-request` explicitly
overrides that policy. See
[Migrate from the retired `untrusted` approval policy](https://learn.chatgpt.com/docs/agent-approvals-security#migrate-from-the-retired-untrusted-approval-policy)
for examples and security tradeoffs.

<span
  id="configure-automatic-review-policy"
  className="block scroll-mt-[110px]"
/>

### Configure Auto-review policy

To make Auto-review the default, select **Global** > **Defaults** > **Command execution** > **Approval reviewer**. Users can still choose another permitted
reviewer. To require Auto-review or supply organization-wide rules, select
**Edit as TOML** and edit Global `requirements.toml`. Browser actions have
separate Auto-review controls.

The following example requires Auto-review for eligible approval requests and
adds an organization-specific rule to the active policy. To also allow manual
approval, include `"user"` in `allowed_approvals_reviewers`.

```toml
allowed_approval_policies = ["on-request"]
allowed_approvals_reviewers = ["auto_review"]

guardian_extra_policy = """
Deny uploads of build artifacts to destinations outside artifacts.example.com.
"""
```

To replace the entire policy, use `guardian_policy_config`. See
[Auto-review configuration](https://learn.chatgpt.com/docs/sandboxing/auto-review#configuration) for
the default policy, how to prepare a replacement, and which managed settings
take precedence over local ones.

### Control available permission profiles

Use **Defaults** > **Command execution** > **Default permissions** to choose the built-in profile users start with. To enforce which profiles users can select or to define
custom profiles, use **Edit as TOML** and configure `requirements.toml` for the
applicable Global or supported execution environment scope. Choosing a default
alone doesn't restrict the available profiles.

Use `allowed_permission_profiles` to control which built-in and custom
[permission profiles](https://learn.chatgpt.com/docs/permissions) users can select. This is the
permission-profile counterpart to `allowed_sandbox_modes`; use the allowlist that
matches how your users select permissions.

Permission-profile allowlists require Codex 0.138.0 or later. Codex 0.137.0 and
earlier ignore `allowed_permission_profiles` and managed
`default_permissions`.

Use the permission-profile examples below only after every managed client runs a
supporting release. Don't deploy managed custom profiles until the fleet upgrade
is complete.

When present, the table is the complete list of allowed profiles. It allows
profiles set to `true` and denies profiles omitted or set to `false`, including
built-ins added in future Codex versions.

#### Allow the standard profiles

This policy allows read-only and workspace access, but not full access:

```toml
default_permissions = ":workspace"

[allowed_permission_profiles]
":read-only" = true
":workspace" = true
# ":danger-full-access" is omitted, so it is denied.
```

#### Add a managed least-privilege default

Admins can define a custom profile in the same requirements source. Use
organization-specific profile names that won't collide with names in users'
loaded config. Custom names can't start with `:` or use the reserved `filesystem`
name.

Don't deploy managed custom profiles to clients running Codex 0.137.0 or
earlier. Those clients recognize the profile table but not the managed default
that selects it.

For example:

```toml
default_permissions = "acme_review_only"

[allowed_permission_profiles]
":read-only" = true
":workspace" = true
acme_review_only = true
# ":danger-full-access" is intentionally omitted, so it is denied.

[permissions.acme_review_only]
description = "Review code without modifying the workspace."
extends = ":read-only"
```

#### Allow only enterprise-defined profiles

Omit all built-ins when users should select only admin-defined profiles:

```toml
default_permissions = "acme_workspace"

[allowed_permission_profiles]
acme_workspace = true

[permissions.acme_workspace]
description = "Workspace access with sensitive files denied."
extends = ":workspace"

[permissions.acme_workspace.filesystem]
glob_scan_max_depth = 3

[permissions.acme_workspace.filesystem.":workspace_roots"]
"**/*.env" = "deny"
```

The custom profile can extend `:workspace` even though users can't select the
built-in `:workspace` profile directly.

#### Turn off a profile allowed by another source

Permission allowlists combine by profile name. Because cloud requirements have
higher precedence than system requirements, cloud requirements can use `false`
to turn off a profile allowed by the system file.

Cloud requirements:

```toml
default_permissions = ":read-only"

[allowed_permission_profiles]
":read-only" = true
":workspace" = false
```

System requirements:

```toml
[allowed_permission_profiles]
":read-only" = true
":workspace" = true  # Not honored because cloud requirements set this to false.
```

Set `default_permissions` explicitly to an allowed profile. If it's omitted,
the local runtime defaults to `:workspace` only when both `:workspace` and
`:read-only` are explicitly allowed. When `allowed_permission_profiles` is
absent, managed requirements don't restrict which profile names users can
select. Every entry must name a built-in profile or a custom profile defined in
a loaded config or requirements source. Define custom profiles in managed
requirements to control their behavior centrally.

### Enforce deny-read requirements

Use **Edit as TOML** to add filesystem restrictions to the applicable Global or
supported execution environment `requirements.toml`. These restrictions block
reads of sensitive paths; a read-only default by itself doesn't hide files.

Admins can deny reads for exact paths or glob patterns with
`[permissions.filesystem]`. Users can't weaken these requirements with local
configuration.

```toml
[permissions.filesystem]
deny_read = [
  # values can be absolute paths...
  "/**/*.env",
  # ...or relative to $HOME/%USERPROFILE% using `~`.
  "~/.ssh",
  # But relative paths starting with `./` are not allowed.
]
```

When deny-read requirements are present, the local runtime rejects full-access
permissions and keeps local execution in a read-only or workspace sandbox so it
can enforce them. On native Windows, managed `deny_read` applies to direct file
tools; shell subprocess reads don't use this sandbox rule.

### Override sandbox requirements by host

Use **Edit as TOML** in Agent security to author host-specific requirements.
Environment controls select an execution environment; host patterns select
matching machines within the supported runtime.

Use `[[remote_sandbox_config]]` when one managed policy should apply different
sandbox requirements on different hosts. For example, you can keep a stricter
default for laptops while allowing workspace writes on matching dev boxes or CI
runners. Host-specific entries currently override `allowed_sandbox_modes` only:

```toml
allowed_sandbox_modes = ["read-only"]

[[remote_sandbox_config]]
hostname_patterns = ["*.devbox.example.com", "runner-??.ci.example.com"]
allowed_sandbox_modes = ["read-only", "workspace-write"]
```

The local runtime compares each `hostname_patterns` entry against the
best-effort resolved host name. It prefers the fully qualified domain name when
available and falls back to the local host name. Matching is case-insensitive;
`*` matches any sequence of characters, and `?` matches one character.

The first matching `[[remote_sandbox_config]]` entry wins within the same
requirements source. If no entry matches, the local runtime keeps the top-level
`allowed_sandbox_modes`. Host name matching is for policy selection only; don't
treat it as authenticated device proof.

### Enforce command rules from requirements

Use **Edit as TOML** in Agent security to add command rules and MCP server
restrictions to Global `requirements.toml`. Command rules specify approval or denial
decisions for matching commands; MCP restrictions limit which server identities
the client can enable. The **Approval policies** control doesn't author either
of these rule sets.

Admins can also enforce restrictive command rules from `requirements.toml`
using a `[rules]` table. These rules merge with regular `.rules` files, and the
most restrictive decision still wins.

Unlike `.rules`, requirements rules must specify `decision`, and that decision
must be `"prompt"` or `"forbidden"` (not `"allow"`).

```toml
[rules]
prefix_rules = [
  { pattern = [{ token = "rm" }], decision = "forbidden", justification = "Use git clean -fd instead." },
  { pattern = [{ token = "git" }, { any_of = ["push", "commit"] }], decision = "prompt", justification = "Require review before mutating history." },
]
```

To restrict which MCP servers a local client can enable, add an `mcp_servers`
approved list. For stdio servers, match on `command`; for streamable HTTP
servers, match on `url`:

```toml
[mcp_servers.docs]
identity = { command = "codex-mcp" }

[mcp_servers.remote]
identity = { url = "https://example.com/mcp" }
```

The string form of `identity.command` matches only the configured `command`. It
doesn't inspect `args`, `cwd`, `env`, or `env_vars`.

To constrain a complete stdio invocation, match the executable and each
positional argument:

```toml
[mcp_servers.internal.identity]
command = { executable = "/usr/local/bin/codex-mcp", args = [
  { match = "exact", value = "serve" },
  { match = "prefix", value = "--workspace=" },
] }
```

The executable, argument count, and argument order must match. Argument and URL
rules support `exact`, `prefix`, and full-value `regex` matching. Structured
command rules still don't inspect `cwd`, `env`, or `env_vars`. Plugin-bundled
MCP servers use the same identity shapes under
`plugins.<plugin>.mcp_servers.<server>`.

If `mcp_servers` is present but empty, the local client disables all MCP servers.

## Configure network access

Command networking and desktop-app networking use different controls. Start with **Network use controls** for supported command traffic, review the environment and runtime limits, then use the separate desktop-app requirements if needed. Browser site rules remain in [Control browser and Computer Use](#control-browser-and-computer-use).

### Use the system proxy for native client requests

{/* Preserve the standard technical term "proxy auto-configuration". */}
{/* vale Microsoft.Auto = NO */}

The experimental `features.respect_system_proxy` setting lets the native Codex
runtime used by ChatGPT desktop and Codex use operating-system proxy settings
for its own network requests. Enable it on devices that need a system proxy or
proxy auto-configuration (PAC). The setting defaults to `false`.

{/* vale Microsoft.Auto = YES */}

Add the following to a supported `config.toml` defaults source or to
[`managed_config.toml`](#locations):

```toml
[features]
respect_system_proxy = true
```

Project-local configuration can't enable this setting. For macOS MDM, include
the same TOML in [`config_toml_base64`](#macos-managed-preferences-mdm).
Restart the client after changing local configuration. To turn off the opt-in,
set it to `false` in the configuration source that enabled it.

#### Sign-in and cloud defaults

The separate `system_proxy_fallback` feature is enabled by default. After a
connection failure, it can retry supported sign-in and cloud-configuration
requests through the system proxy, even when `respect_system_proxy` is `false`.
This fallback can let supported clients sign in and fetch cloud defaults without
a local opt-in. Disabling `respect_system_proxy` alone doesn't disable the
fallback.

If direct access doesn't work and the fallback is unavailable, disabled, or
unsuccessful, deploy `respect_system_proxy` locally before sign-in.

#### Scope and limitations

Validate sign-in and an authenticated request with the client versions and on
the networks you plan to use. Keep these boundaries in mind:

- **Request scope:** The setting applies to network clients owned by the Codex
  runtime. It doesn't configure every ChatGPT desktop request, browser request,
  plugin process, or shell command. It doesn't enforce a destination allowlist
  or guarantee that direct connections are blocked. For supported traffic, see
  the [command network requirements](#configure-network-access-requirements)
  and [desktop app network requirements](#control-desktop-app-network-destinations).
- **Platform support:** macOS and Windows support native system proxy discovery.
  When system resolution is unavailable, the runtime uses explicit proxy
  environment settings if available. Otherwise, it connects directly. Other
  platforms use the same environment-or-direct fallback instead of native
  system discovery.
- **PAC routing:** The runtime selects one route from a PAC result. If that
  connection fails, it doesn't retry later proxy or `DIRECT` entries in the result.
- **Windows authentication:** Supported builds can respond to an HTTP `407`
  proxy challenge during tunnel setup using the signed-in Windows user's
  credentials with Negotiate or NTLM. HTTPS proxies that require authentication
  tokens bound to the proxy's TLS connection aren't supported.

### Configure network access requirements

<WarningTip>
  Keep `[experimental_network]` in published policies until every client and
  policy validator supports `[network_proxy]`. Older versions can ignore or
  strip the new name. Test enforcement on the client versions and operating
  systems you deploy, especially Windows, where support is limited.
</WarningTip>

Use **Requirements** > **Network use controls** to manage supported command
networking in Agent security. Configure a shared baseline in **Global**, or an
available **Local Environments** or **Codex Cloud Environments** tab for
environment-specific execution settings.

1. Set **Managed networking** to **On** to apply domain rules to managed command
   traffic. Adding domain rules alone doesn't activate the managed proxy.
1. Under **Network rules**, select **Add network rule**. Enter a **Domain** such
   as `api.openai.com` or `**.example.com`, without a URL scheme or path. Choose
   **Allow** or **Deny** under **Access**, then select **Save rule** to update the
   draft. Repeat for other destinations.
1. Set **Only allow domains added by admins** to **On** if user settings and
   per-domain approvals must not expand the managed allowlist. Include the
   required Allow entries; a deny-only list doesn't allow other destinations.
1. Review **Allow local network access** for workflows that need local listeners
   or private destinations. Direct local connections may bypass the proxy's
   domain rules. Review the Codex Cloud connectivity limits below before changing
   this setting.
1. Review inherited rules and validation messages, then select **Save changes**.
   Test a request that should succeed and one that should be blocked in every
   affected execution environment.

Setting **Managed networking** to **Off** clears that scope's authored network
rules and stores an explicit off value; it doesn't disable internet access.
**Not set** removes that scope's authored network settings so applicable policy
or runtime defaults can apply. Removing environment settings can reveal inherited
Global rules. Use **Edit as TOML** for advanced network fields or existing legacy
domain lists that the visual editor can't represent.

In Codex 0.166.0, `[network_proxy]` is the canonical table for managed
command networking in `requirements.toml`. Codex also accepts the older
`[experimental_network]` name. Choose one table name per layer. If layers use
different names, Codex applies the usual requirements precedence.

Set `enabled = true` in the managed table to start the proxy independently
of the user setting `features.network_proxy`. The active sandbox must also
allow command network access. The example uses the name that older clients
and policy validation layers recognize.

```toml
[experimental_network]
enabled = true
managed_allowed_domains_only = true

[experimental_network.domains]
"api.openai.com" = "allow"
"**.example.com" = "allow"
"blocked.example.com" = "deny"
"**.exfil.example.com" = "deny"
```

Use `experimental_network.managed_allowed_domains_only = true` only when you
also define administrator-owned `"allow"` entries in
`[experimental_network.domains]` and want those rules to be exclusive. If it's
`true` without managed allow rules, user-added domain allow rules don't remain
effective. Do not combine the canonical `domains` map with the legacy
`allowed_domains` or `denied_domains` lists.

`*.example.com` matches subdomains only. `**.example.com` matches the apex
domain and its subdomains. A matching deny rule wins over an allow rule.

The domain syntax, local/private destination rules, deny-over-allow behavior,
and DNS rebinding limitations are the same as the sandbox networking behavior
described in [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security#network-isolation).

The proxy routes local commands that run inside the sandbox. Browser tools
also check managed network denies and exclusive allowlists before accessing
an origin. This is a separate policy check, not routing browser traffic through
the command proxy. It doesn't filter web search, apps and connectors, MCP
servers, native-app traffic, Codex service requests, or other capability-specific traffic.
Use the controls for each surface:

- Use `allowed_web_search_modes` to restrict web search.
- Use `features.apps = false` to disable app and connector integrations, and
  `features.plugins = false` to disable plugins where supported.
- Use the managed `mcp_servers` approved list to restrict MCP servers.
- Use feature requirements such as `browser_use`, `in_app_browser`, and
  `computer_use` to restrict browser and computer-use capabilities.
- For supported managed Codex Cloud commands, check the environment's internet settings as well as Agent Security. The environment can still block an allowed domain.

Test ordinary commands and any permitted full sandbox escalation separately. An approved full sandbox escalation can bypass the managed command proxy. See [Network isolation](https://learn.chatgpt.com/docs/agent-approvals-security#network-isolation).

> **No effective allowed destinations:** With both **Managed networking** and **Only allow domains added by admins** enabled, ordinary managed commands need an explicit or inherited Allow entry. Check the [effective allowed destinations](https://learn.chatgpt.com/docs/enterprise/agent-security#no-effective-allowed-destinations) before saving.

> **Codex Cloud local/private connectivity:** Check the effective `allow_local_binding` value if a Cloud command cannot reach an allowed domain. An inherited Off value can block the upstream proxy. See [Codex Cloud local/private connectivity](https://learn.chatgpt.com/docs/enterprise/agent-security#codex-cloud-localprivate-connectivity) for the Cloud-specific default and overrides.

When environment requirements are empty, Global requirements apply. **Managed networking** set to
**Off** is separate from the Cloud environment's Internet access setting. See
[Agent Security execution controls](https://learn.chatgpt.com/docs/enterprise/agent-security#execution-controls-executor)
for details about execution scope.

### Network policy precedence and runtime limits

Within a given policy, the order from highest to lowest is OS-specific environment override → all-OS environment override → Global. A higher-priority policy still wins over a lower-priority policy, even when the lower-priority policy is more specific. Some requirements have field-specific merge rules. The runtime then enforces the resolved requirements. Consider the field-specific network cases below separately from policy priority.

These examples compare environment and Global settings within the same policy, with managed networking already configured and no higher-priority policy changing the values. They describe field-specific merge and runtime behavior.

#### Set different domain access by environment

For the same domain rule within a policy, an admin environment override can allow a domain denied in Global or deny a domain allowed in Global. Without an environment override, the Global rule is inherited. Other effective Deny rules or access controls can still block a request.

**How domain rules combine**

| Global rule   | Environment rule | Domain-policy result                                                  |
| ------------- | ---------------- | --------------------------------------------------------------------- |
| Deny          | Allow            | Allowed by the environment override, subject to the conditions below. |
| Allow         | Deny             | Blocked in that environment.                                          |
| Allow         | Allow            | Allowed by these domain rules.                                        |
| Deny          | Deny             | Blocked by these domain rules.                                        |
| Allow or Deny | No override      | Inherits the Global rule.                                             |

These outcomes compare the same domain key within one policy, with no higher-priority policy changing the result. A higher-priority value replaces the same key. Other inherited keys remain. An Allow does not bypass a different matching Deny, such as an inherited wildcard. An empty environment map does not clear inherited rules.

**Example:** Deny `packages.example.com` in Global and allow it in Development. Development can permit it under the conditions above. Production inherits the Global Deny unless overridden.

Confirm the deployed executor supports these merge rules. Coverage for regular managed executors still needs validation.

Orchestrator limits. Managed HTTP/SOCKS listener ports and non-loopback proxy listeners are unsupported by the cloud runtime; socket-rule support depends on the execution path. A local-execution setting in the table below is not a supported Orchestrator configuration.

#### Other network runtime limits

All field names below belong to the managed `network_proxy` table (also accepted as `experimental_network`) in `requirements.toml`. The arrows show a Global value followed by an environment value within the same policy. These local-execution cases do not establish Orchestrator support for the same settings.

| **Setting and attempted override**           | **Runtime behavior**                                                                                                                                                                      | **Admin action**                                                                                                   |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| domains: deny → allow                        | The environment Allow replaces the same Global domain key on supported paths. Other matching Deny rules still apply.                                                                      | Test both allowed and blocked requests on the deployed executor.                                                   |
| `managed_allowed_domains_only`: true → false | Do not infer exclusivity behavior from domain-key composition. With effective `enabled = true` and `managed_allowed_domains_only = true`, ordinary commands need effective Allow entries. | Review effective settings and inherited Allow entries. A deny-only policy does not allow the rest of the internet. |
| `allow_local_binding`: false → true          | On the supported Codex Cloud proxy path, an explicit false can prevent upstream-proxy access. A supported higher-priority Cloud override can change it.                                   | Check the source of the effective value and executor support. Do not apply the Cloud default to Local.             |

Proxy activation, exclusivity, upstream-proxy behavior, and Unix-socket rules have executor-specific behavior. Do not generalize domain-key composition to these settings. Verify the effective values and test the deployed runtime. For Codex Cloud local/private connectivity, see [Configure network access requirements](#configure-network-access-requirements).

#### Verify behavior before rollout

Test the actual destinations, local listeners, proxy behavior, and socket paths your workflows use. Check an action that should succeed and one that should be blocked in each affected environment. Check that the deployed runtime version supports each setting you use.

### Control desktop app network destinations

Use **Edit as TOML** in Agent security to configure these desktop-specific
requirements in Global. The **Network use controls** UI manages command
networking, which is a separate policy.

Use `[application.network]` in `requirements.toml` to restrict the desktop
app's network destinations. With `enabled = true`, external requests must use
HTTPS or WSS and match an exact domain with an `"allow"` value in
`[application.network.domains]`. Subdomains aren't implicitly allowed. An empty
domain map permits no external destinations. See the [Configuration
Reference](https://learn.chatgpt.com/docs/config-file/config-reference) for the supported keys.

This policy is separate from command networking and browser origin rules. It
doesn't impose destination restrictions on native modules or spawned processes,
and it doesn't govern Work Cloud execution.

## Configure plugins and managed hooks

For these tasks, use **Edit as TOML** in Agent security or a supported local configuration source. Marketplace defaults, enforced plugin restrictions, and managed hooks have different purposes; choose the task that matches the policy you need.

### Configure plugin marketplaces and defaults

Use **Agent security** > **Edit as TOML** to define local or Git marketplaces and
plugin defaults in the Global `config.toml` document. You can also distribute
these settings in system `config.toml`. They provide starting marketplace and
plugin configuration, not enforced policy. To limit which sources members can
use, configure [marketplace source requirements](#restrict-plugin-marketplace-sources).

See [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference) for configuration keys,
[Configuration precedence](https://learn.chatgpt.com/docs/config-file/config-basic#configuration-precedence)
for overrides, and [repo plugin settings](https://developers.openai.com/plugins/build/plugins#enable-or-disable-a-plugin-for-a-repo)
for project-level configuration. [Workspace GitHub import and
sync](https://learn.chatgpt.com/docs/enterprise/plugin-management) is separate.

### Control plugin availability

Use **Edit as TOML** in Agent security for enforced plugin feature settings in
Global `requirements.toml`, or distribute them through local requirements for
device-managed clients. **Defaults** > **Apps and tools** > **Apps/connectors**
sets app-tool defaults; it isn't the enforced `features.plugins` switch. For
workspace plugin permissions, see [Apps and connectors](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors).

To turn off plugins in supported local clients, set `features.plugins` to
`false` in `requirements.toml`:

```toml
features.plugins = false
```

This setting also applies when users sign in to Codex with an API key. See the
[`features.plugins`
reference](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml) for the
supported configuration.

### Restrict plugin marketplace sources

Use **Edit as TOML** to configure marketplace source requirements in Global
`requirements.toml`, or deliver them through local requirements. These rules
limit which local or Git sources users can add and use. They are separate from
the [marketplace defaults](#configure-plugin-marketplaces-and-defaults).

To restrict plugin marketplace sources, set
`restrict_to_allowed_sources = true` and define one or more source rules:

```toml
[marketplaces]
restrict_to_allowed_sources = true

[marketplaces.allowed_sources.company_plugins]
source = "git"
url = "https://github.com/example/company-plugins.git"
ref = "main"

[marketplaces.allowed_sources.internal_git]
source = "host_pattern"
host_pattern = '^git\.example\.com$'

[marketplaces.allowed_sources.local_plugins]
source = "local"
path = "/opt/company/codex-plugins"
```

Git rules match the normalized repository URL and, when present, an exact
`ref`. Host patterns are regular expressions matched against the lowercase Git
host; use `^` and `$` for a whole-host match. Local rules require an absolute,
normalized path. See the [`requirements.toml` reference](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml)
for the full schema and merge behavior.

These requirements reject unmatched marketplace add, plugin install, and
configured Git marketplace refresh operations. They also filter configured
marketplaces and their plugins at runtime.

The OpenAI-curated Git marketplaces, including the API-key catalog, must also
match the source allowlist. To allow them, include the following Git source
without a `ref` constraint:

```toml
[marketplaces.allowed_sources.openai_curated]
source = "git"
url = "https://github.com/openai/plugins.git"
```

To exclude the curated catalogs, omit that source and ensure no broader host
rule allows it. Bundled plugins and remotely installed workspace plugins are
separate from this curated Git source policy.

These source restrictions apply only where a local client supports plugin
marketplace operations: ChatGPT and Codex in the desktop app, and Codex CLI.
They don't control plugin use in ChatGPT on the web or mobile, and they don't
add plugins to the IDE extension.

### Enforce managed hooks from requirements

In Agent security, open **Global** > **Requirements** > **Edit as TOML**. For Work with local computer access and dots, configure supported `mcp_tool` handlers in Global `requirements.toml`. Before rollout, test the callback connection and what happens when the callback times out. See [Hooks with cloud orchestration](https://learn.chatgpt.com/docs/hooks#hooks-with-cloud-orchestration) for supported events and failure behavior.

For local Codex, distribute hook scripts through your device-management tool. To enforce them even if a user disables hooks, pin `[features].hooks = true` in `requirements.toml`. See the [managed hook configuration example](https://learn.chatgpt.com/docs/hooks#managed-hooks-in-local-codex) for script paths and how to allow only managed hooks.

## Understand policy scope and precedence

Use this section to check where a policy applies, how requirements combine, how clients receive cloud-managed settings, and how to verify the result.

For Work with local access and dots, supported Global policy governs the shared cloud orchestrator when managed policy is enabled; applicable local execution requirements govern the connected computer. Work cloud containers retain existing Work Cloud policies, and supported device controls still apply to local execution. Codex keeps its existing configuration behavior. Managed configuration does not grant a workspace seat or feature access. Use [Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions) for those controls.

<a id="agent-security-and-work-sync"></a>




### Agent Security and Local computer access with Work Cloud

Use Agent Security in the Admin Console to manage policies and configuration. It replaces Policies & Configuration. Agent Security is available in the Admin Console, independently of Local computer access with Work Cloud. Existing policies, assignments, and ordering are preserved. Review your existing policies in Agent Security. Local computer access with Work Cloud is a separate opt-in. See [Agent Security](https://learn.chatgpt.com/docs/enterprise/agent-security) for migration guidance.

Before moving policy automation to **Agent Security**:

1. Identify affected integrations. Inventory Terraform configurations and scripts that update policies, and record which policies they manage.

1. Use the policy API to manage Global settings. To manage Local or Codex Cloud settings, use the Agent Security UI. Existing Global API workflows remain available after migration. Test your scripts and Terraform integrations, and confirm that policy assignments and ordering are unchanged.

1. Make any required changes and test the automation. Verify that an intended update reaches the correct Agent Security policy and that the resulting controls are enforced.

Policy migration does not grant local computer access for Work or dots. Reviewing or creating policies is recommended before rollout, but the confirmation flow does not require policy creation to enable access. Before enabling **Allow local computer access**, review the migrated baseline or create a cloud baseline if your policies are currently delivered only through MDM. If `enforce_residency` is enabled in any cloud policy, **Allow local computer access** is disabled for both Work and dots. This safeguard does not configure workspace residency or, by itself, disable Work Cloud or dots.

Environment overrides vary supported settings within a policy. Within a given policy, the order from highest to lowest is OS-specific environment override → all-OS environment override → Global. A higher-priority policy still wins over a lower-priority policy, even when the lower-priority policy is more specific. Some requirements have field-specific merge rules. Confirm which override editors and fields are available for your workspace.

Before enabling local access for a workflow that uses hooks, [check which hooks run with cloud orchestration](https://learn.chatgpt.com/docs/hooks#hooks-with-cloud-orchestration).

### Locations and precedence

For local execution, requirements are applied from lower to higher priority as follows. This ordering also applies to local steps in Local computer access with Work Cloud:

1. System `requirements.toml` (`/etc/codex/requirements.toml` on Unix systems,
   including Linux and macOS, or `%ProgramData%\OpenAI\Codex\requirements.toml`
   on Windows).
2. Agent Security requirements delivered in the cloud config bundle.
3. Legacy `managed_config.toml` fields that the local client reinterprets as requirements.
4. macOS managed preferences (MDM) delivered through
   `com.openai.codex:requirements_toml_base64`.

Higher-precedence layers override ordinary scalar and list values from lower
layers. Tables merge by key, while requirements such as rules, hooks, and
filesystem restrictions have field-specific composition behavior. Use the
[`requirements.toml` reference](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml)
for the current schema instead of assuming that every field merges the same
way.

For backward compatibility, supported local clients reinterpret the legacy
`approval_policy`, `approvals_reviewer`, and `sandbox_mode` fields as
requirements. This conversion adds compatibility choices where necessary; use
`requirements.toml` for explicit allowlists.




### Precedence for Local computer access with Work Cloud

For Work with local access and dots, distinguish Global orchestrator policy from execution policy. Applicable local requirements govern the connected computer. Work cloud containers and dots cloud computers use their own execution configuration and requirements, rather than the managed environment bundle used by other executors.

For local execution, MDM and legacy managed-device requirements rank above Agent Security. The device's system requirements file ranks below Agent Security. Within each policy, resolve OS-specific environment overrides before all-OS environment overrides, then Global. Policy priority wins over specificity across policies.

| Control                       | Local Work without sync and local Codex               | Local computer access with Work Cloud                                                                                                                       |
| ----------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise requirements       | Follow the local requirements order above.            | Apply to local executors. Work cloud containers retain existing Work Cloud policies.                                                                        |
| Device execution restrictions | Enforced by supported local controls.                 | Follow the local requirements order above, including MDM and legacy requirements above Agent Security.                                                      |
| Environment overrides         | Use the configuration model for the relevant product. | Within one policy: OS-specific environment override, then all-OS environment override, then Global. A lower-priority policy cannot win through specificity. |

Requirements impose constraints, while configuration defaults supply starting values. For Work with local access and dots, supported Global policy applies through the shared cloud orchestrator when managed policy is enabled. Applicable local `requirements.toml` requirements govern execution on a connected computer. Work cloud containers and dots cloud computers use their own execution configuration and requirements, rather than the managed environment bundle used by other executor types. Local execution restrictions do not automatically apply to these cloud computers. Review cloud capability permissions and test local and cloud execution separately.

Keep orchestrator controls, including approvals and web search, in Global. Use the dedicated Allowed approval policies and Allowed web search modes controls where available, and TOML for other supported fields. See the [Configuration Reference](https://learn.chatgpt.com/docs/config-file/config-reference) for the field list and execution scope.

### Cloud-managed requirements

When a user signs in with ChatGPT on a supported plan, supported local clients
can receive admin-enforced requirements associated with the workspace. This is
a delivery channel for `requirements.toml`-compatible policy. It doesn't grant
workspace access or replace workspace RBAC. Authentication requirements must be
[managed locally](#manage-authentication-locally).

Configure common requirements with the [Agent security
controls](#configure-a-policy-in-agent-security). For a policy that allows only
on-request approvals and read-only or workspace-write sandboxes, use **Approval
policies** and **Sandbox modes** under **Policy guardrails**. To also prompt before
a supported shell entry point runs, use **Edit as TOML** to add the `[rules]`
table to Global `requirements.toml`.

The complete TOML equivalent is:

```toml
allowed_approval_policies = ["on-request"]
allowed_sandbox_modes = ["read-only", "workspace-write"]

[rules]
prefix_rules = [
  { pattern = [{ any_of = ["bash", "sh", "zsh"] }], decision = "prompt", justification = "Require explicit approval for shell entry points" },
]
```

Check that every managed client version supports the keys you select. Assign the policy to the intended users or groups and verify that it takes effect on their supported clients. Use
the configuration reference for the current schema and the administration
surface for current assignment behavior.

The service selects the enterprise-managed requirement layers that apply to the
signed-in identity. The local client evaluates those layers with the other
requirements sources described in [Locations and precedence](#locations-and-precedence).
Use the current administration surface for workspace-side creation and
assignment. Don't rely on a copied group-matching algorithm; the administration
service owns that behavior and can change it independently of the local
requirements format.

For supported keys and examples, see
[Example requirements.toml](#example-requirementstoml) and the
[`requirements.toml` reference](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml).

#### How local clients apply cloud-managed requirements

The local loading and cache behavior below describes supported local clients. It does not establish when a changed cloud policy takes effect in an already-running task using Local computer access with Work Cloud. Verify the effective policy before relying on a changed restriction.

When a user starts a supported local client and signs in with ChatGPT on a
supported plan, the client first checks for a valid, identity-matched cache
entry. If no valid entry is available, the client fetches the applicable bundle
with retries and writes a signed cache entry on success. If the request fails or
times out and no valid cache is available, the cloud config bundle load returns
an error rather than silently starting without the cloud-managed requirements
layer.

After cache resolution, the client composes the cloud requirements with the
other requirements layers described above. A background refresh updates the
cached bundle and makes it available to subsequent configuration loads. This
doesn't guarantee that an already-running task immediately uses a changed policy.
Some desktop settings require an app restart; follow any restart prompt and
verify the effective settings before relying on the change.

### Confirm the admin and employee experience

Assign a person to own each managed policy, record which users or groups should
receive it, and document the business reason for any filesystem, network,
approval, or permission-profile restriction.

Test an allowed workflow and a blocked workflow with a user who has the intended permissions. Check the effective settings in the supported client. A workspace role or group alone does not enforce a local runtime restriction.

Use **Test policies** in Agent security to check which policies match a member,
group, or role selection. In an editable session, this checks the current draft
without saving it. The result shows policy selection, not the final merged
configuration or whether a client enforces a restriction. After saving, test
the allowed and blocked workflows on each relevant client and execution path.

## Deploy device-managed configuration

Use local system requirements or MDM for authentication restrictions and device-managed policies. The legacy `managed_config.toml` mechanism has different startup precedence from Agent security **Defaults**. The MDM workflow covers both requirements and legacy defaults.

### Manage authentication locally

Set `allowed_login_methods`, `allowed_chatgpt_workspaces`,
`cli_auth_credentials_store`, and `chatgpt_base_url` in the local system
`requirements.toml` or macOS MDM requirements. Codex ignores these four fields
in cloud-managed requirements. Local authentication requirements apply before
credentials load and before Codex retrieves cloud policy.

To require ChatGPT login to an approved workspace and store credentials in the
OS credential store, use:

```toml
allowed_login_methods = ["chatgpt"]
allowed_chatgpt_workspaces = ["00000000-0000-0000-0000-000000000000"]
cli_auth_credentials_store = "keyring"
```

`allowed_login_methods` accepts `chatgpt`, `api`, or both. If omitted, this setting
doesn't restrict login methods. If set, the list must contain at least one method.
`api` permits API authentication, including Amazon Bedrock.
The workspace restriction also applies to
[Codex access tokens](https://learn.chatgpt.com/docs/enterprise/access-tokens).

User-configured `forced_login_method` and `forced_chatgpt_workspace_id` must
follow the requirements. When a user selects a workspace, it must also appear
in the managed workspace allowlist. If no workspaces match, ChatGPT login is
unavailable. API authentication remains available when permitted. If no login method
is available, Codex refuses to start.

See the [requirements reference](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml)
for credential storage modes and service URL configuration.

### Enforce OpenTelemetry settings

In Codex CLI 0.166.0, use `[otel]` in `requirements.toml` to set the log, trace, and metrics
exporters independently, label the environment, and control which content Codex
exports. This example sends logs to an OTLP/HTTP collector and limits the
text logged for each tool result to 256 UTF-8 bytes. It omits prompt text, final response
text, and automatic approval assessments.

The macOS desktop app 26.1027.30824 bundles CLI `0.166.0-alpha.5.1`.
That build doesn't support `[otel]` in `requirements.toml`, so it can't
enforce `log_user_prompt = false` through this policy.

```toml
[otel]
environment = "prod"
exporter = { otlp-http = { endpoint = "https://otel.example.com/v1/logs", protocol = "binary" } }
log_user_prompt = false
log_agent_responses = false
log_guardian_assessments = false
tool_result = { max_bytes = 256 }
span_attributes = { team = "platform" }
tracestate = { acme = { region = "eu" } }
```

Managed values override local configuration. For `exporter`, `trace_exporter`,
and `metrics_exporter`, the highest-priority requirement that sets the
exporter supplies its entire definition, including headers and TLS settings.
Scalar settings and the `tool_result` table also take the highest-priority
value supplied for each. Omitted settings remain configurable unless another
requirements layer supplies them.

Span attributes merge by attribute name. `tracestate` fields merge by member
and field name. Higher-priority values win for matching entries. Other
entries remain available, and an empty metadata table doesn't clear them.
See [Observability and telemetry](https://learn.chatgpt.com/docs/config-file/config-advanced#observability-and-telemetry)
for exporter options and log contents.

### Migrate SQLite databases on NFS

On Linux, Codex creates new SQLite databases on NFS in `DELETE` journal mode.
To migrate existing databases from write-ahead logging (WAL), set
`unsafe_enforce_sqlite_journal_mode = true` at the top level of
`requirements.toml`. This setting is off by default. With it enabled, Codex
migrates the databases before opening them for writes.

The NFS mount must support POSIX locks across hosts. Mount options such as
`nolock` and `local_lock=all` prevent those locks from working. On every host,
stop all SQLite clients that use the databases, including Codex. Start
one Codex instance and keep all other clients stopped until migration succeeds.
The user running that instance needs write access to the database directory
and migration lock. The replacement files retain their Unix permission bits
and belong to that user.
The migration doesn't copy the original owner, group, or extended access control
lists. Codex keeps the originals in a private backup directory.

### Managed defaults (`managed_config.toml`)

Use [Agent security Defaults](#set-configuration-defaults) for supported
cloud-managed starting values. This section covers the legacy device-managed
`managed_config.toml` mechanism and its different startup precedence. Editing
**Defaults** in Agent security doesn't deploy a `managed_config.toml` file to
members' devices.

Managed defaults set the configuration a supported local client starts with. At
startup, they override the user's local `config.toml` and any CLI `--config`
overrides. Users can still change those settings during the current run, and the
defaults apply again the next time the client starts.

GPT-5.5 retires from Codex with ChatGPT sign-in on October 14, 2026, at noon
PDT (19:00 UTC). If a managed default, macOS MDM profile, or saved
configuration pins `gpt-5.5` for those users, replace it with an available
model. Choose `gpt-6.1-sol` once an administrator has enabled it for the
affected users. The OpenAI API and Codex sessions authenticated with an API
key aren't affected. See [workspace model availability](https://learn.chatgpt.com/docs/enterprise/workspace-model-availability#prepare-for-the-gpt-55-retirement).

For configurations that still pin `gpt-5.4` or `gpt-5.4-mini`, follow the
[GPT-5.4 migration guidance](https://learn.chatgpt.com/docs/enterprise/workspace-model-availability#prepare-for-the-gpt-54-retirement).

Make sure your managed defaults meet your requirements; the local runtime
rejects disallowed values.

#### Precedence and layering

The local runtime assembles the effective configuration in this order (top
overrides bottom):

- Managed preferences (macOS MDM; highest precedence)
- `managed_config.toml` (system/managed file)
- `config.toml` (user's base configuration)

CLI `--config key=value` overrides apply to the base, but managed layers override them. This means each run starts from the managed defaults even if you provide local flags.

Cloud `config.toml` uses [normal configuration precedence](https://learn.chatgpt.com/docs/config-file/config-basic#configuration-precedence),
not the legacy ordering above. Cloud `requirements.toml` uses
[requirements precedence](#locations-and-precedence).

#### Locations

- Linux/macOS (Unix): `/etc/codex/managed_config.toml`
- Windows/non-Unix: `~/.codex/managed_config.toml`

If the file is missing, the local runtime skips the managed layer.

#### Example managed_config.toml

```toml
# Set conservative defaults
approval_policy = "on-request"
sandbox_mode    = "workspace-write"

[sandbox_workspace_write]
network_access = false             # keep network disabled unless explicitly allowed

[otel]
environment = "prod"
exporter = { otlp-http = { endpoint = "https://otel.example.com/v1/logs", protocol = "binary" } }
log_user_prompt = false            # keep prompts redacted
```

#### Recommended guardrails

- Prefer `workspace-write` with approvals for most users; reserve full access for controlled containers.
- Keep `network_access = false` unless your security review allows a collector or domains required by your workflows.
- To enforce telemetry settings, use [OpenTelemetry requirements](#enforce-opentelemetry-settings). Keep `log_user_prompt = false` unless your policy allows storing prompt contents.
- Periodically audit diffs between local `config.toml` and managed policy to catch drift; managed layers should win over local flags and files.

### macOS managed preferences (MDM)

On macOS, admins can push a device profile that provides base64-encoded TOML payloads at:

- Preference domain: `com.openai.codex`
- Keys:
  - `config_toml_base64` (managed defaults)
  - `requirements_toml_base64` (requirements)

The local runtime parses these "managed preferences" payloads as TOML. For
managed defaults (`config_toml_base64`), managed preferences have the highest
precedence. For requirements (`requirements_toml_base64`), precedence follows
the [requirements order](#locations-and-precedence). The same
requirements-side `[features]` table works in `requirements_toml_base64`; use
canonical feature keys there as well.

#### MDM setup workflow

The local runtime honors standard macOS MDM payloads, so you can distribute
settings with tooling like `Jamf Pro`, `Fleet`, or `Kandji`. A lightweight
deployment looks like:

1. Build the managed payload TOML and encode it with `base64` (no wrapping).
2. Drop the string into your MDM profile under the `com.openai.codex` domain at `config_toml_base64` (managed defaults) or `requirements_toml_base64` (requirements).
3. Push the profile, then ask users to restart the supported local client and
   confirm the startup config summary reflects the managed values.
4. When revoking or changing policy, update the managed payload; the client
   reads the refreshed preference the next time it launches.

Avoid embedding secrets or high-churn dynamic values in the payload. Treat the managed TOML like any other MDM setting under change control.