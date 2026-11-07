> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# SCIM Group Mappings

> Automatically provision workspace access from your identity provider groups

SCIM group mappings connect groups from your identity provider to OpenRouter workspaces. Once a group is mapped, members of that group are automatically granted the chosen role in the mapped workspace, and access stays in sync as people join and leave groups in your IdP.

> [!NOTE]
>
> SCIM group mappings are available for organizations on Enterprise plans and require an active [SSO connection](https://openrouter.ai/docs/guides/features/sso.md).

## Prerequisites

* Your organization must be on an Enterprise plan
* You must be an **organization admin**
* Your organization must have an active SSO connection (see [Single Sign-On (SSO)](https://openrouter.ai/docs/guides/features/sso.md))
* SCIM provisioning must be enabled for your organization (see [Set Up Provisioning](#set-up-provisioning)), and your identity provider must push groups to OpenRouter through it

If no SSO connection exists yet, the SCIM Mappings tab prompts you to set one up first. Once SSO is connected, the same tab lets you enable SCIM provisioning yourself. Existing customers configured by OpenRouter keep working unchanged.

## Set Up Provisioning

Provisioning connects your identity provider's SCIM client to a SCIM directory on your OpenRouter organization. Organization admins can create that directory from the SCIM Mappings tab without contacting support. Activation requires a verified email address on your OpenRouter account; you are prompted to verify it if needed.

**1. Open the SCIM Mappings tab**

While in your organization context, navigate to [Settings > Members](https://openrouter.ai/settings/organization-members?tab=scim-mappings) and select the **SCIM Mappings** tab. When your organization has an active SSO connection and no directory yet, the tab shows **Enable SCIM provisioning**.

**2. Choose your identity provider**

Click **Enable SCIM provisioning** and choose **Okta**, **Microsoft Entra ID**, or **Custom (SCIM 2.0)** for any other SCIM 2.0 client.

**3. Enter your admin group ID**

Enter the ID of the group in your identity provider whose members should be OpenRouter organization admins, and optionally its display name. This mapping is created together with the directory so the organization has an admin mapping from the very first sync: group role mappings are applied on every push, and a directory with no admin mapping would leave the organization without an admin. Make sure your own account is a member of that group in your identity provider — OpenRouter cannot verify group membership before the first push, and the sync applies roles exactly as your identity provider reports them. You can add or change organization role mappings later from the same tab.

**4. Copy the endpoint URL and API key**

After activation, OpenRouter shows the **SCIM endpoint URL** and a bearer **API key**. The key is shown only once. Store it in your identity provider now; if you lose it, [rotate the key](#rotating-the-api-key) to get a new one.

### Configuring Your Identity Provider

Use the values from the last step as the SCIM 2.0 base URL and bearer token in your identity provider's provisioning settings, then assign the users and push the groups you want to sync. Make sure the admin group you entered during activation is among the groups you push.

* **Okta**: in your OpenRouter SAML app, open the **Provisioning** tab, choose **SCIM** integration, and enter the endpoint URL as the **SCIM connector base URL** with **HTTP Header** authentication using the API key. Enable **Create Users**, **Update User Attributes**, and **Deactivate Users**, assign users to the app, then use **Push Groups** to push your groups.
* **Microsoft Entra ID**: in your OpenRouter enterprise application, open **Provisioning**, set the mode to **Automatic**, and enter the endpoint URL as the **Tenant URL** and the API key as the **Secret Token**. Test the connection, assign users and groups to the application, and turn provisioning on.
* **Custom (SCIM 2.0)**: point your SCIM client at the endpoint URL with `Authorization: Bearer <API key>` and push users and groups.

Once your identity provider pushes groups, they appear on the SCIM Mappings tab and can be mapped to workspaces as described below. Use **Refresh from IdP** if you have just finished configuring provisioning and do not see your groups yet.

## Rotating the API Key

If the API key is lost or needs to be replaced, click **Rotate API key** on the SCIM provisioning card at the top of the SCIM Mappings tab and confirm. A new key is generated and shown once; update it in your identity provider promptly. The previous key keeps working only for a short grace period, after which provisioning stops until the new key is in place. Rotations are recorded in the [audit log](#audit-log).

## Viewing Your Groups

While in your organization context, navigate to [Settings > Members](https://openrouter.ai/settings/organization-members?tab=scim-mappings) and select the **SCIM Mappings** tab.

Groups pushed by your identity provider appear here as cards, each showing the group name and how many workspaces it's mapped to. You can:

* **Filter** groups by all / mapped / unmapped
* **Refresh from IdP** to pull the latest groups on demand (the "Last synced" timestamp shows when groups were last refreshed)
* **View audit log** to see a history of mapping and membership changes

> [!TIP]
>
> Groups also sync automatically as your identity provider pushes changes. Use **Refresh from IdP** if you've just configured provisioning and don't see your groups yet.

## Creating a Mapping

**1. Find the group**

Locate the group card you want to map (use the **unmapped** filter to see groups without any mappings).

**2. Add a mapping**

Click **Add mapping**, then choose a workspace and a role, either **Member** or **Admin**. The role defaults to Member (or Admin, for groups whose name contains "admin").

**3. Confirm**

Click **Add mapping** to save. Everyone in the group is granted the chosen role in that workspace.

A group can be mapped to any number of workspaces, with one mapping per group–workspace pair.

## How Membership Sync Works

* **Joining a group**: when someone is added to a mapped group in your identity provider, they're automatically added to the mapped workspaces with the mapping's role.
* **Leaving a group**: when someone is removed from a mapped group, workspace access granted by that mapping is removed as well.
* **Multiple groups**: if a member belongs to several groups mapped to the same workspace, they get the highest role across those mappings (Admin wins over Member).
* **Deactivation or deletion**: when someone is deactivated or deleted in your identity provider, their organization membership and the API keys they created in the organization are deactivated. See [User Deactivation and Deletion](https://openrouter.ai/docs/guides/features/sso.md#user-deactivation-and-deletion).

## Changing a Mapping's Role

Use the role selector on any mapping row to switch between **Member** and **Admin**. Existing members provisioned by the mapping are updated to their new effective role. Highest role still wins: a member who also gets Admin from another mapped group keeps Admin even if you lower this mapping to Member.

## Removing a Mapping

Click the delete button on a mapping row. Because members may have been added to the workspace by this mapping, you'll be asked what should happen to them:

* **Keep members**: the mapping is removed, but members added by it stay in the workspace. Their memberships become manually managed (keeping their current role), so group changes in your identity provider no longer affect them.
* **Remove members**: the mapping is removed, and members whose access came from this mapping are removed from the workspace

> [!WARNING]
>
> Members who belong to another group still mapped to the same workspace keep their access either way. Only access that came solely from the deleted mapping is affected.

## Audit Log

Every change made through SCIM mappings is recorded. Click **View audit log** on the SCIM Mappings tab to see:

* SCIM provisioning enabled and API key rotations, with the admin who made the change
* Mappings created, role changes, and deletions, with the admin who made the change
* Members added to, removed from, or changed in workspaces, including changes triggered automatically by your identity provider

Entries link to the affected member and workspace so you can trace exactly why someone's access changed.

## Frequently Asked Questions

> [accordion] Why don't I see the SCIM Mappings tab?
>
> The tab is available to organization admins on Enterprise plans. If you're on an Enterprise plan and still don't see it, contact [support@openrouter.ai](mailto:support@openrouter.ai).

> [accordion] Why is my group list empty?
>
> Groups appear once your identity provider pushes them via SCIM provisioning. Check that provisioning is [set up](#set-up-provisioning) and that your IdP's provisioning configuration pushes groups, then click **Refresh from IdP**. You also need an active [SSO connection](https://openrouter.ai/docs/guides/features/sso.md).

> [accordion] I lost the SCIM API key. Can I see it again?
>
> No. The key is shown once, at activation or rotation. [Rotate the API key](#rotating-the-api-key) to get a new one and update it in your identity provider.

> [accordion] Can I map one group to multiple workspaces?
>
> Yes. Add as many mappings as you need on a group's card. Each workspace can have its own role for that group.

> [accordion] What happens if a group is deleted in my identity provider?
>
> Once the deletion syncs (automatically, or via **Refresh from IdP**), the group is deactivated on OpenRouter and stops granting access through its mappings. Members who aren't entitled through another mapped group lose the access it granted, and the removals are recorded in the audit log.

> [accordion] Do mappings replace manual workspace membership?
>
> No. Mappings work alongside manually managed members. Manually added members are unaffected by mapping changes.

## Getting Help

* **Setup assistance**: Email [support@openrouter.ai](mailto:support@openrouter.ai)
* **Enterprise plans**: Contact our sales team to enable SCIM group mappings for your organization
* **More than one active SSO connection**: Self-serve activation requires a single active SSO connection; contact support to enable provisioning on the right one
