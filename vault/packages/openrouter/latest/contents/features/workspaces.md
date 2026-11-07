> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Workspaces

> Organize your projects, teams, and agents into separate environments

Workspaces let you organize your OpenRouter projects into separate environments, each with its own API keys, routing defaults, guardrails, and observability. Use them to isolate teams, projects, or deployment stages (e.g. staging vs. production) under a single account.

## Getting Started

Your existing OpenRouter setup is already in a **Default workspace**. All of your API keys, guardrails, BYOK provider keys, routing policies, presets, plugins, and observability integrations are there. If you don't need multiple workspaces, keep working as usual; nothing changes.

For organizations, all members are automatically added to the Default workspace.

### Creating a New Workspace

1. Go to your [home dashboard](https://openrouter.ai/workspaces)
2. Click the workspace picker and select **[Create Workspace](https://openrouter.ai/workspaces/new)**
3. Name your workspace and add a description

> [!NOTE]
>
> Organization admins and account owners can create and delete workspaces.

> [!TIP]
>
> You can also create and manage workspaces programmatically using the [management API](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspaces.md).

## What's Scoped to Each Workspace

Each workspace has independent settings for:

* **[API Keys](https://openrouter.ai/workspaces/default/keys)**. Every API key lives in a workspace. Members can create their own keys in any workspace they belong to. For organizations, admins can create system keys owned by the workspace rather than an individual user.
* **[Guardrails](https://openrouter.ai/workspaces/default/guardrails)**. Each workspace has its own guardrail to govern API key and member activity. Workspace guardrails inherit account-level policies and can add more restrictive rules within those constraints.
* **[BYOK](https://openrouter.ai/workspaces/default/byok)**. Bring your own provider keys per workspace, or share the same provider key across multiple workspaces.
* **[Routing](https://openrouter.ai/workspaces/default/routing)**. Configure provider routing per workspace to optimize for cost, latency, throughput, or tool-calling quality.
* **[Presets](https://openrouter.ai/workspaces/default/presets)**. Organize shortcuts for system prompts, model and provider configurations, and request parameters.
* **[Plugins](https://openrouter.ai/workspaces/default/plugins)**. Configure default plugin behavior for API requests in each workspace.
* **[Observability](https://openrouter.ai/workspaces/default/observability)**. Connect different observability integrations per workspace, or send traces from all workspaces to the same platform.
* **[Members](https://openrouter.ai/workspaces/default/members)**. Control which team members have access to each workspace.
* **[Budgets](https://openrouter.ai/docs/guides/features/workspaces/workspace-budgets.md)**. Set daily, weekly, monthly, or lifetime spending limits per workspace. See the [Spend Controls best practices guide](https://openrouter.ai/docs/guides/best-practices/spend-controls.md) for structuring budgets alongside guardrails.

## Account Level Settings

Some settings apply globally across all workspaces:

* **[Activity](https://openrouter.ai/activity) & [Logs](https://openrouter.ai/logs)**. View all account activity and logs, with the option to filter by workspace.
* **[Credits & Billing](https://openrouter.ai/settings/credits)**. Unified billing across all workspaces.
* **[Organization](https://openrouter.ai/settings/organization-members)**. Manage organization members, roles, and workspace assignments.
* **[Management Keys](https://openrouter.ai/settings/management-keys)**. API keys for administrative actions across all workspaces.
* **[Privacy](https://openrouter.ai/settings/privacy)**. Account-level data policies and provider/model restrictions that apply to all workspaces.
* **[Preferences](https://openrouter.ai/settings/preferences)**. Account preferences that apply to all workspaces.

## Deleting the Default Workspace

Organization admins and account owners can delete the Default workspace, but doing so has account-wide effects that deleting any other workspace does not. You can't undo the deletion from the dashboard or the API.

> [!WARNING]
>
> Deleting the Default workspace immediately disables every **unscoped** inference API key on the account, meaning any key not assigned to a specific workspace. This includes keys created before workspaces existed. Requests using those keys will start failing as soon as the workspace is deleted.

### Members no longer land in a workspace

The Default workspace is where org members land by default. After you delete it, there is no default landing workspace, and members aren't moved to another workspace automatically:

* Members whose only workspace was the Default workspace, and members who join the org later, belong to no workspace. They can't see any workspace's keys, settings, or activity until an admin adds them to one.
* Members who belong to other workspaces, including Chat and Fusion users, land in one of those workspaces instead. They can pick a different one with the [workspace switcher](https://openrouter.ai/docs/guides/features/workspaces/switching.md).
* Links and bookmarks to the Default workspace show a "Default workspace deleted" page instead of the workspace.

![The "Default workspace deleted" page shown to a member who doesn't belong to any other workspace](https://mintcdn.com/openrouter-d02e98a0/ij8Ir-9aJgXOa1s4/assets/guides/features/workspaces/default-workspace-deleted.png?fit=max\&auto=format\&n=ij8Ir-9aJgXOa1s4\&q=85\&s=ff9b70f0568daf00b2b786ab5ddd0511)

### What is deleted or disabled

* **Unscoped inference API keys** are permanently disabled. [Management API keys](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md) are not affected.
* **Workspace settings** are deleted, as with any workspace. This includes the Default workspace's budgets, guardrails, classifiers, and broadcast destinations.

Historical activity, logs, and billing records are kept. Your other workspaces and their keys and settings are not affected.

### What changes afterward

* **There is no fallback workspace.** API requests that leave out `workspace_id`, such as creating API keys, BYOK keys, guardrails, or broadcast destinations with a management key, return `400` with a message to pass `workspace_id` explicitly. Update scripts and integrations before you delete.
* **OAuth flows** ask the user to choose a workspace for the new key, because no Default workspace exists to fall back to.

### Before you delete

1. Create at least one other workspace. You can't delete your last remaining workspace.
2. Move production traffic to keys scoped to another workspace, then confirm nothing still uses unscoped keys.
3. Recreate any budgets, guardrails, classifiers, broadcast destinations, BYOK keys, presets, and workspace defaults such as the default model that you want to keep in the destination workspace.
4. Add org members to the workspaces they need.
5. Delete any interns in the Default workspace. Deletion is blocked while interns are active.
6. When deleting through the API, delete any keys scoped to the Default workspace and pass `confirm_default_workspace_deletion=true`.

## Organization Permissions

* **Org admins** have admin permissions across all workspaces. Organization admins and account owners can create or delete workspaces. Workspace admins can add or remove member access within their workspace; assigning workspace roles additionally requires a Pro or Enterprise plan.
* **Org members** have member permissions in each workspace they've been added to. Members can belong to multiple workspaces, and their API keys in each workspace are governed by that workspace's settings.
* **Workspace admins** who aren't org admins get management rights in their workspace, such as managing members, classifiers, and settings. They have the same read access as members: they can't view other people's prompt and response content or classification tags.
* All org members automatically have member access to the **Default workspace**. Chat and Fusion requests run in the member's active workspace, which they can change via the [workspace switcher](https://openrouter.ai/docs/guides/features/workspaces/switching.md). The Default workspace is the initial active workspace.

## Frequently Asked Questions

> [accordion] What can my workspace members see about a workspace?
>
> Within a workspace, members can create and manage their own API keys, and view other members and their roles. Members can belong to multiple workspaces. All org members automatically have access to the Default workspace. In Activity and Logs, members see request metadata, such as model, cost, tokens, status, and creator, for every request in the workspaces they belong to, including other members' requests. Members can view prompt and response content only for requests attributed to them, which includes requests made with API keys they created. Only org admins can view other people's prompt and response content, see classification tags, and export activity.

> [accordion] What can my organization admins see? What can they edit?
>
> Org admins have admin permissions across all workspaces: they can view and manage everything in every workspace, including API keys, guardrails, BYOK, routing, presets, plugins, observability, members, and settings. Organization admins and account owners can create or delete workspaces. Org admins and workspace admins can control members' access to their workspaces; assigning workspace roles additionally requires a Pro or Enterprise plan. At the account level, org admins manage billing and credits, organization membership and roles, management API keys, and account-level data policies and allowed providers/models.

> [accordion] Can management keys be used across workspaces?
>
> Yes. Management keys operate at the account level and can be used to perform administrative actions across all workspaces via the [management API](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspaces.md).

> [accordion] Can workspaces have different data policies?
>
> Workspaces inherit account-level data policies and allowed providers/models. Within those constraints, each workspace can set more granular guardrails to further restrict API key and member activity. The account-level policy is the ceiling; individual workspaces can only be more restrictive.

> [accordion] Can I delete the Default workspace?
>
> Yes, but deleting it permanently disables the account's unscoped inference API keys and has other account-wide effects. See [Deleting the Default workspace](#deleting-the-default-workspace) before you delete it.

> [accordion] What happens when I remove someone from a workspace?
>
> When a member is removed from a workspace, they lose access to it. Before removing them, you must first delete any API keys they created in that workspace. Their access to other workspaces is unaffected. Note: all org members retain access to the Default workspace as long as they remain in the org.

> [accordion] Is my Chat/Fusion usage in a workspace?
>
> Yes. Chat and Fusion usage runs in your active workspace. It defaults to the Default workspace, and you can switch from the Chat or Fusion [sidebar workspace switcher](https://openrouter.ai/docs/guides/features/workspaces/switching.md).
