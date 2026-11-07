# Manage app updates

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

The ChatGPT desktop app normally checks for and installs updates on its own. If
your organization needs to review new releases before users receive them, you
can turn off the app's built-in updater and deploy approved versions through
your device management platform.

The app's updater remains enabled by default. Turning it off doesn't stop
Microsoft Store, Microsoft Intune, mobile device management (MDM), package
managers, or other external deployment tools from installing updates.

## Before you begin

Confirm that you have:

- Codex administrator access to
  [Managed configuration](https://chatgpt.com/codex/settings/managed-configs)
  for your workspace.
- A ChatGPT desktop app release for macOS or Windows that supports
  organization-managed updates.
- An MDM or software-deployment platform that can install approved app packages
  on your managed devices.
- A process for testing new releases, deploying security updates, and tracking
  installed app versions.

If you haven't deployed the app on Windows, start with
[Deploy the Windows app](https://learn.chatgpt.com/docs/enterprise/windows-deployment).

## Turn off in-app updates

<WarningTip>
  When you turn off in-app updates, your organization is responsible for
  promptly deploying new app releases and security fixes. Delaying updates can
  leave the app and its bundled components exposed to known security
  vulnerabilities. Older app versions don't receive separate security patches or
  extended support.
</WarningTip>

Create a managed policy that disables the desktop app's own updater:

1. Open
   [Managed configuration](https://chatgpt.com/codex/settings/managed-configs).
2. Select **Add policy**, or open an existing policy for the users, groups, or
   platforms you want to manage.
3. Under **Targets**, select **Add target** to assign the policy to specific
   **Groups**, **Users**, or **Platforms**. Start with a small pilot group when
   possible.
4. Open **Raw TOML** and find the **requirements.toml** editor.
5. Add the following policy:

```toml
   [features]
   in_app_updates = false
```

   If your policy already contains a `[features]` table, add
   `in_app_updates = false` to that table. Don't add a second `[features]` table
   or put the setting in **config.toml**.

6. Select **Save changes**.
7. Ask affected users to fully quit and reopen the ChatGPT desktop app. Closing
   the app window isn't always enough to restart the application.

Some workspaces show a policy-list editor instead of the **Raw TOML** tab. In
that interface, add the same TOML block directly to the applicable policy, use
**Groups** to assign it when available, and select **Save**.

For details about managed policy delivery and precedence, see
[Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration).

## Verify the managed setting

After the app restarts, verify the policy from an affected user's device:

1. Sign in to the ChatGPT desktop app with an account covered by the policy.
2. Open **Settings** > **General**.
3. Find **In-app updates** and confirm that it shows **Managed** and the message
   “Your organization has turned off in-app updates.”
4. Confirm that your device management platform can still deploy an approved app
   version.

The **Check for Updates** menu option can remain visible even when the policy
blocks in-app updates. Use the **Managed** indicator to verify the policy
instead of checking whether that menu option appears.

If the indicator doesn't appear after the first restart, the app might still
use a cached policy. Allow the policy to refresh, then fully quit and reopen the
app again. Don't rely on the update restriction until **Managed** appears.

## Deploy approved app versions

After you turn off in-app updates, use your existing device management process
to deliver new releases:

1. Choose an app version that your organization plans to deploy.
2. Get the supported installation package for each operating system and
   device architecture in your fleet.
3. Test the release with a small group of representative users.
4. Deploy the approved package through Microsoft Intune, your MDM platform, or
   another software-deployment tool.
5. Check device inventory to confirm your platform installed the intended
   version, then expand the rollout to other groups.

Your management platform determines how you stage releases, select versions,
and recover when a deployment doesn't complete. If your platform permits
rollback, returning to an older version doesn't extend support or guarantee
service compatibility.

For macOS, download the
[ChatGPT desktop app installer](https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg).
For Windows installation methods and architecture-specific packages, see
[Deploy the Windows app](https://learn.chatgpt.com/docs/enterprise/windows-deployment).

## Turn in-app updates back on

To restore the app's normal update behavior:

1. Identify the managed policies, system `requirements.toml` files, and MDM
   profiles that turn off updates for the affected users.
2. Remove `in_app_updates = false` from each applicable `[features]` table.
3. Save the policy changes and redeploy any updated device-managed requirements.
4. Ask affected users to fully quit and reopen the ChatGPT desktop app.
5. Check **Settings** > **General** to confirm that the **In-app updates**
   managed row no longer appears.

When no applicable policy sets `in_app_updates = false`, the app's built-in
updater follows its normal behavior. If the **Managed** indicator still
appears, review other workspace policies, MDM profiles, and system
`requirements.toml` files. See
[Locations and precedence](https://learn.chatgpt.com/docs/enterprise/managed-configuration#locations-and-precedence)
for the order in which managed sources apply.

## Understand security and support responsibilities

After the app receives and applies it, the managed update policy:

- Prevents the desktop app from checking for, downloading, or installing updates
  through its own updater.
- Doesn't provide OpenAI-managed version pinning, a separate release channel,
  or guaranteed service compatibility for older versions.
- Applies to the ChatGPT desktop app on supported macOS and Windows builds. It
  doesn't manage updates for mobile apps, Codex CLI, or the IDE extension.

## Troubleshoot common issues

If an authentication problem, connection issue, or timeout prevents the app
from retrieving or applying the managed policy, its built-in updater can
remain enabled. Don't assume the app blocks updates unless **Managed** appears.

If the **Managed** indicator doesn't appear, confirm that:

- The affected user selected the intended workspace.
- The policy targets that user, group, or platform.
- The device runs a supported app version.
- The app can connect to the service that delivers managed policies.
- The setting is in **requirements.toml**, not **config.toml**.
- The user fully quit and reopened the app after you saved the policy.

If you can't open Managed configuration or save a policy, confirm that you have
Codex administrator access for the workspace.

If the app version changes after you disable in-app updates, check whether
Microsoft Store, Intune, MDM, a package manager, or another deployment system
installed the update. The policy controls only the app's built-in updater.

## Related docs

- [Managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration)
- [Deploy the Windows app](https://learn.chatgpt.com/docs/enterprise/windows-deployment)
- [`requirements.toml` configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference#requirementstoml)
- [Admin rollout guide](https://learn.chatgpt.com/docs/enterprise/admin-setup)