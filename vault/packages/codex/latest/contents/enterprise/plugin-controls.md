# Plugin controls

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Plugins help your team reuse instructions and work with information from connected
apps. For example, a plugin can help prepare a weekly update using your team's
template and project documents. Members can use it again without adding the same
instructions to every conversation.

As an admin, you decide who can use each plugin and what its apps can do. This
guide explains how to choose settings, test access, and help members when
something doesn't work.



    {"For setup, availability, and data handling, see the "}
    [{"Help Center's plugin administration guide"}](https://help.openai.com/articles/11509118)
    {"."}
  


See how plugin availability, roles, and groups work together.

<div
  class="not-prose my-4 overflow-hidden rounded-md bg-gray-900"
  style="padding:56.25% 0 0 0;position:relative;"
>
  <iframe
    src="https://player.vimeo.com/video/1238920850?badge=0&autopause=0&player_id=0&app_id=58479"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    title="Managing plugins as a workspace administrator"
  ></iframe>


<script src="https://player.vimeo.com/api/player.js"></script>

<a id="choose-plugins-around-the-work-your-team-does"></a>

## Choose plugins for your team's tasks

A plugin can include skills, apps, or both:

- **Skills** give ChatGPT instructions, templates, and reference material for a
  task, such as preparing a brief or presentation.
- **Apps** let ChatGPT work with tools and information in services such as
  Google Drive or Slack. An app can only use the information and actions allowed
  by its settings and the connected account's permissions.

In the weekly update example, the skill supplies the reporting instructions and
template. The app retrieves project documents the connected account can access.

You can read a plugin's skills in its preview to check whether they suit the task.
The preview doesn't let you edit the instructions or select individual skills
from the plugin. See [Skill controls](https://learn.chatgpt.com/docs/enterprise/skills) for more guidance.

<a id="choose-a-starting-set-of-apps"></a>
<a id="choose-a-focused-initial-set"></a>

Before choosing settings, decide who needs the plugin and whether their task
involves reading information, changing it, or both. A plugin that one department
uses every week may be optional for another.

Give members a short description of when to use each approved plugin and one
example request.

<a id="understand-the-capability-chain"></a>

## Understand what each control does

Member permissions control what people can do with plugins. Installation
settings control which plugins they can install or receive by default. App and
account settings control access to connected information and actions.

| What you want to control                                                     | Where to look                                                        |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Who can use, upload, share, or publish plugins.                              | [Member permissions](#choose-what-members-can-do-with-plugins).      |
| Who can install a plugin and who gets it by default.                         | [Installation settings](#choose-installation-settings).              |
| Who can use an app and which actions it allows.                              | [App access and actions](#manage-app-access-and-actions).            |
| When ChatGPT asks before using an app.                                       | The app's **Permissions** settings.                                  |
| Which files and records an account can access and which actions it can take. | Permissions in the connected service, such as Google Drive or Slack. |
| Additional limits on content ChatGPT can access.                             | [Content restrictions](#review-content-access), where supported.     |
| What an agent can do on a computer or in a cloud environment.                | [Environment permissions](#review-runtime-controls-and-hooks).       |



    {"For background on plugin security, read the "}
    [{"App Security Whitepaper (PDF, June 2026)"}](https://cdn.openai.com/business-guides-and-resources/app-security-whitepaper.pdf)
    {"."}
  


## Choose what members can do with plugins

Before choosing individual plugins, review member permissions. Open your
workspace's **Permissions & roles** settings and search for **plugins**.
Depending on your workspace, the controls include:

| Member permission                      | What it allows                                                                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Use plugins                            | Use plugins and apps available to the workspace.                                                                               |
| Upload plugins                         | Create plugins by uploading plugin ZIP files.                                                                                  |
| Upload plugins with custom MCP servers | Upload or update plugins that include custom connections to tools. Members still need permission to create or edit the plugin. |
| Share plugins                          | Share plugins they own with people or groups, or anyone in the workspace with a link.                                          |
| Publish plugins to workspace           | Add plugins they own to the workspace's plugin directory.                                                                      |
| Create plugins with MCPs               | Use developer mode to create custom app connections.                                                                           |

Where role-based access control (RBAC) is supported, a role holds a set of
permissions. Workspace owners can assign a role to a group so its members receive
those permissions. For example, a team can use approved plugins while only the
people maintaining them have permission to upload or publish them.

These permissions are separate from each plugin's installation settings. Next,
choose which plugins members can install or receive by default. For more on
assigning roles and groups, see
[Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions).

<a id="step-1-enable-plugin-availability"></a>

## Choose installation settings

Open [Admin console](https://admin.openai.com),
select your workspace, and open **Plugins**. The bulk edit menu offers these
installation settings:

| Setting                    | What it changes                                                      | When to consider it                                                          |
| -------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Available for installation | Members can install the plugin.                                      | Plugins that members choose based on their work.                             |
| Installed for workspace    | Installs the plugin by default and keeps any role-specific settings. | A plugin the team uses regularly.                                            |
| Customize by role          | Sets availability for a custom role where supported.                 | A plugin for a particular team or responsibility.                            |
| Disable                    | Changes the workspace default to disabled.                           | A plugin you no longer want available by default. Review role overrides too. |

Where per-plugin role settings are supported, **Workspace default** uses the
workspace setting. For ordinary custom roles, **Off** means that role
doesn't give access. A member may still get access through another role, so
check all roles assigned to them, including those assigned through groups.

For example, make a research plugin available for members to install when they
need it. If role controls are available, install the weekly update plugin for the
role assigned to the people who prepare those updates. Check their app access
before asking them to use it.

### Manage multiple plugins together

To change several plugins at once, select them and choose **Edit**. Use this only
when the plugins need the same installation setting. Review who the change
affects and which apps each plugin needs before confirming. If a change fails
or you're unsure whether it saved, check that plugin's setting before trying again.

For current limits and instructions, see the [Help Center's plugin administration guide](https://help.openai.com/en/articles/11509118-admin-controls-security-and-compliance-for-plugins-and-apps).

To manage workspace plugins from a repository, see
[Import and sync plugins from GitHub](https://learn.chatgpt.com/docs/enterprise/plugin-management). For installation on
other versions of ChatGPT and Codex, see [Plugins](https://learn.chatgpt.com/docs/plugins).

<a id="step-2-manage-capabilities"></a>

## Manage app access and actions

Installing a plugin doesn't give members access to its apps or external data.
You also need to allow the required apps. If an app requires an account, that
account must have permission to access the information or take the action in the
connected service.

Review each included app in **Plugins** in Admin console. Where available, use
**Manage Legacy Apps** to open the older app settings page.

- Use **App access** to choose who can use the app.
- Where supported, use **Tools** (or **Actions**) to allow actions that read or
  change information in the connected service.
- Use **New tools** (or **New actions**), where supported, to decide whether to
  allow actions added later. This doesn't turn off actions you've already enabled.
- Use **Permissions** to choose when ChatGPT asks before using the app.

For example, summarizing documents may need only read actions. Updating project
records needs write actions. Before allowing write actions, check what they can
change and how members can review or correct the result. Asking for confirmation
doesn't replace restrictions on what the app or connected account can access.

If you use a [workspace connection](https://learn.chatgpt.com/docs/enterprise/shared-connections), members
need permission to use that shared account. Installing a plugin for everyone
doesn't create a shared account. Choose an account with the permissions the task
needs, and tell members which account they're using.

Plugins in Sites use each visitor's connected accounts and have a separate
  Sites permission. See [Plugin access in
  Sites](https://learn.chatgpt.com/docs/enterprise/sites#enable-plugin-use-in-sites) for defaults and
  setup.

### Review content access

Some apps offer **Safety & Security Controls** to limit which content ChatGPT can
access. These settings apply in addition to the connected service's permissions.

For example, a member may be able to open a file in Google Drive while workspace
content restrictions prevent ChatGPT from accessing it. After choosing
restrictions, send new requests for an allowed item and a restricted item to
check that ChatGPT can access the allowed item but not the restricted item.

For supported apps and setup, see the [Help Center's plugin administration guide](https://help.openai.com/en/articles/11509118-admin-controls-security-and-compliance-for-plugins-and-apps).

## Check the member experience

Ask a member to try the plugin in their workspace on a version of ChatGPT or
Codex that supports it. Test with their account because an owner's account may
have different permissions.

| Check                     | What to verify                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Find the plugin           | The member can install it, or it is already installed, as intended.                     |
| Use an included app       | The app is enabled, and the correct account is connected with the required permissions. |
| Try the team's task       | The member can use the actions and information the task needs.                          |
| Test content restrictions | A new request can access an allowed item and cannot access a restricted item.           |
| Test a write action       | If enabled, use a disposable test record. Check the result in the connected service.    |

If the plugin is installed but a task fails, check the app connection, allowed
actions, content restrictions, and the connected account's permissions before
reinstalling it. For more checks, see [Troubleshooting plugins and apps in ChatGPT](https://help.openai.com/en/articles/20001497-troubleshooting-plugins-and-apps-in-chatgpt).

### Troubleshoot "Disabled by admin"

If you're a workspace owner, check these settings when a plugin shows
"Disabled by admin" on the web or desktop:

1. Open [Admin console](https://admin.openai.com), select the workspace, and open **Plugins** (**Apps** in
   FedRAMP workspaces). Review the plugin's workspace availability and any
   supported role settings. ChatGPT Business uses workspace-wide availability.
2. If your workspace supports RBAC, open **Permissions & roles**. Check the
   workspace default and every role assigned to the member, directly or through
   a group. The general plugin permission must be on. Look for **Allow members
   to use plugins** or **Use plugins**. FedRAMP workspaces may show **Use apps**.
3. Confirm the member can access each app required by the plugin and that the
   task's required actions are enabled.
4. If Lockdown Mode roles are available, check whether they restrict what the
   member is trying to do. Review roles assigned directly and through groups.
   Lockdown Mode restrictions can apply even when an ordinary role gives access.
   They don't automatically disable every app in managed workspaces.

For self-serve ChatGPT Business accounts, ask the member to review [Lockdown Mode](https://help.openai.com/en/articles/20001061-lockdown-mode) in
**Settings > Security**, where available. Lockdown Mode doesn't affect Codex
network access.

Correct unintended settings or role assignments according to your organization's
security policy. Allow up to five minutes for role changes to apply, then ask the
member to try again. See [Role-based access control (RBAC)](https://help.openai.com/en/articles/11750701-rbac) for details.

## Keep approved workflows useful

For each shared plugin, give members a contact who can answer questions and review
changes to its skills and apps. Review access when the team, task, or connected
account changes.

When you stop using a plugin, review its installation settings and app access
separately. Disabling an app doesn't necessarily uninstall the plugin or remove
skills that work without it. Tell members what's changing and suggest a
replacement, if one exists.

## Export the public catalog for review

Eligible ChatGPT Enterprise workspace owners and admins can download a CSV of
the public plugins available to their workspace. Use the export to review
plugin descriptions, apps, and skills before changing availability. Apps use Model
Context Protocol (MCP) to connect to services, so the export describes them as MCP
servers. The export doesn't show what each member can access. Use the member
checks above for that.

1. Open [Admin console](https://admin.openai.com) and select the intended workspace.
2. Open **Plugins** and select **Public**.
3. Select **Export CSV** in the page header.

The download uses the filename `public-plugins-security-review.csv` and includes:

- Plugin metadata: `Plugin Name`, `Plugin Description`, `Date Added (UTC)`,
  `OpenAI Verified`, `Developer Name`, and `Version`.
- MCP server metadata: `App Name(s)` and `App Description(s)`.
- Chat skill metadata: `Skill Name(s)` and `Skill Description(s)`.

Semicolons separate multiple MCP servers or skills in the same cell. The catalog
data can be up to 48 hours old. It includes public plugins visible to your
workspace, but not plugins created for that workspace. The export isn't
available in FedRAMP workspaces.

## Restrict company app accounts to authorized workspaces

Verified-domain restrictions let you require employees to connect company
accounts only in authorized ChatGPT workspaces. When activated, this blocks new
connections to supported apps in personal or other unauthorized workspaces. It
applies to accounts that use your company's verified domain.

Verifying a domain does not activate this restriction. Existing app connections are not automatically disconnected.

For supported apps, availability, and setup guidance, see [Admin controls, security, and compliance for plugins and apps](https://help.openai.com/en/articles/11509118).

<a id="review-runtime-controls-and-hooks"></a>

## Review permissions for the computer or cloud environment

If an agent uses plugins on a computer or in a cloud environment, review that
environment's permissions too. These work alongside workspace and account
permissions.

Hooks can run scripts or tools at specific points during an agent's work. If you
use them, check that the environment supports them and test what happens when
they fail. A hook failure doesn't necessarily stop the action. Keep access
restrictions in place even when you use hooks.

See [Agent Security](https://learn.chatgpt.com/docs/enterprise/agent-security) for environment-specific
controls and [Hooks](https://learn.chatgpt.com/docs/hooks) for supported events and configuration.

## Understand data flow and security

When ChatGPT uses an app in a plugin, it sends a request to the connected service.
The account's permissions and workspace controls limit the data ChatGPT can
access and the actions it can take.

Before allowing access to sensitive information, review what the task needs,
which account it uses, and whether the connected service meets your
organization's requirements.

For current data handling, retention, and compliance guidance, see [Admin controls, security, and compliance for plugins and apps](https://help.openai.com/en/articles/11509118).
For locally configured MCP servers, see [Codex MCP configuration](https://learn.chatgpt.com/docs/extend/mcp).

<a id="use-current-procedures-and-references"></a>

## Go deeper

- [Install and use plugins](https://learn.chatgpt.com/docs/plugins)
- [Understand skills and plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Import and sync plugins from GitHub](https://learn.chatgpt.com/docs/enterprise/plugin-management)
- Read the [App Security Whitepaper (PDF, June 2026)](https://cdn.openai.com/business-guides-and-resources/app-security-whitepaper.pdf)