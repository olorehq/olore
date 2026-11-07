# Access tokens

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Codex access tokens are ChatGPT workspace credentials scoped to Codex permissions. They authenticate trusted non-interactive local workflows, including Codex CLI and app-server-based automation, with a ChatGPT workspace identity. Use them when a script, scheduled job, or CI runner needs repeatable local access.

Codex access tokens are currently supported for ChatGPT Business and
  Enterprise workspaces.

Create personal access tokens in the ChatGPT admin console at [Access tokens](https://chatgpt.com/admin/access-tokens). Each token belongs to its creator and that user's ChatGPT workspace. Tokens act as agent identities for programmatic local workflows. For tokens created from a dedicated non-human workspace identity's detail page, see [Service accounts](https://learn.chatgpt.com/docs/enterprise/service-accounts).

If a Platform API key works for your automation, keep using API key auth. Use
  Codex access tokens when a trusted local workflow specifically needs ChatGPT
  workspace access, workspace-managed entitlements, or enterprise controls.

Need to trigger a published ChatGPT workspace agent from your own system? That
  workflow requires **Workspace Agents** access. A Codex-only token can't
  authenticate workspace agent trigger calls. If your token dialog offers
  **Scopes**, select **Workspace Agents** for an agent trigger and **Codex** for
  Codex automation. Grant multiple scopes only when the workflow requires each
  one. See [Authenticate with Workspace Agent access
  tokens](https://developers.openai.com/workspace-agents/authentication).

## How access tokens work

Use an access token when Codex CLI or an app-server client needs to run without a user completing a browser sign-in. The token represents the ChatGPT workspace user who created it, so runs can use that user's access and appear in workspace governance data.

The client checks the token when a run starts and ties the run to that workspace identity. Treat the token like any other automation secret: store it in a secret manager, keep it out of logs, and rotate it according to your organization's policy.

Use access tokens for:

- `codex exec` jobs that run from trusted automation.
- Local scripts that need repeatable, non-interactive Codex CLI runs.
- Trusted app-server-based automation.
- Enterprise workflows that associate usage with a ChatGPT workspace user instead of an API organization key.

Main risks to avoid:

- **Leaked secrets:** anyone with the token can start local runs through Codex CLI or an app-server client as the token creator. Store tokens in a secret manager, keep them out of logs, and rotate them according to your organization's policy.
- **Runner trust:** public CI, forked pull requests, or shared machines can expose tokens to people outside your workspace. Use access tokens only on trusted runners.
- **Shared identities:** one person's token reused across unrelated teams makes ownership and audit trails less clear. Create tokens for a specific workflow owner.
- **Stale credentials:** long-lived tokens can remain active after the workflow changes. Prefer time-limited tokens and revoke tokens that are no longer used.
- **Wrong scope or credential type:** Codex automation requires Codex access,
  workspace agent triggers require Workspace Agents access, and general OpenAI
  API calls require Platform API keys. If **Scopes** appears, grant only the
  permissions the workflow requires.

## Enable access token creation

Use the access token permission in workspace settings to turn on access token creation for allowed members.

The access token permission controls token creation. It doesn't grant access to
the ChatGPT desktop app, Codex CLI, or IDE extension, and it doesn't change a
member's seat type, built-in workspace role, or local runtime permission
profile. Token-authenticated Codex CLI and app-server workflows also require
the user's local Codex permission.

For the relationship between these controls, see
[Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions).


  

> Illustration: Access token access permission in ChatGPT workspace RBAC settings




1. Have a workspace owner open
   [Workspace settings > Permissions & roles](https://chatgpt.com/admin/permissions).
2. If the **Access tokens** section appears, enable **Allow users to create
   personal access tokens**. If that section isn't available, enable **Allow
   members to use Codex access tokens** in **Codex and Work Local** or
   **Codex Local**.
3. Enable the corresponding local Codex permission for the workflow owner:
   **Allow members to use Codex and Work Locally** in **Codex and Work Local**,
   or **Allow members to use Codex locally** in **Codex Local**. When **Work
   Local** has its own section, **Use Work locally** controls Work and isn't
   required for Codex tokens.

Allow only people or service owners who understand the token's storage location, intended automation, and rotation schedule to create access tokens.

Disabling local Codex permission suspends active Codex tokens owned by affected
members; it doesn't revoke them. Restoring local Codex access reactivates those
tokens. Revoke tokens when their access must end permanently.

## Set an access token expiration limit

A workspace owner can set the longest validity window that members can choose
for new access tokens. Open
[Workspace settings > Permissions & roles](https://chatgpt.com/admin/permissions).
If the **Access tokens** section appears, set **Access token expiration limit**
there. Otherwise, look for that setting in **Codex and Work Local** or
**Codex Local**.


  

> Illustration: Access token expiration limit in ChatGPT workspace permissions settings




The limit applies to new access tokens. Existing tokens keep their current validity window.

## Create an access token

Use the Access tokens page to name the token, review any available product
scopes, and choose an appropriate validity window.

1. Go to [Access tokens](https://chatgpt.com/admin/access-tokens).
2. Select **Create**.


  

> Illustration: Access tokens page with the Create button




3. Enter a descriptive name, such as `release-ci` or `nightly-docs-check`.


  

> Illustration: Create access token modal with fields for name and expiration




4. If the dialog shows **Scopes**, select **Codex**. Select **Workspace
   Agents** only if the same workflow also needs to trigger a workspace agent.
   If the dialog has no scope selector, it creates a Codex-only token.
5. Choose a finite validity window, such as 7, 30, 60, or 90 days. Scoped
   personal access tokens must expire. An earlier Codex-only dialog
   can offer **No expiration**; avoid that option unless your organization
   approves it and rotates the token on a defined schedule.
6. Select **Create**.
7. Copy the generated access token immediately. You can't view it again after
   you close the dialog.
8. Store the token in your secret manager or CI secret store.

The shortest custom validity window is one day. You can't use revoked or expired tokens to start new authenticated runs.

## Use an access token with Codex CLI

If the token creation dialog lists a required Codex CLI version, update the CLI
to that version or later before using the token.

For ephemeral automation, store the token in `CODEX_ACCESS_TOKEN` and run Codex CLI normally:

```bash
export CODEX_ACCESS_TOKEN="<access-token>"
codex exec --json "review this repository and summarize the top risks"
```

For a persistent local login, pipe the token to `codex login --with-access-token`:

```bash
printf '%s' "$CODEX_ACCESS_TOKEN" | codex login --with-access-token
codex exec "summarize the last release diff"
```

`codex login --with-access-token` stores an agent identity credential in Codex CLI auth storage. If you prefer not to persist credentials on the machine, use the `CODEX_ACCESS_TOKEN` environment variable instead.

`codex app-server` can use the same credential through `CODEX_ACCESS_TOKEN` or
a login created with `codex login --with-access-token` to authenticate its
OpenAI requests. That credential is separate from client-to-app-server
transport authentication. For a remote WebSocket connection, configure a
separate bearer or capability token as described in
[App server](https://learn.chatgpt.com/docs/app-server); don't reuse the Codex access token as the
transport token. See
[Authentication and network environment variables](https://learn.chatgpt.com/docs/config-file/environment-variables#authentication-and-network).

## Rotate or revoke a token

Rotate access tokens the same way you rotate other automation secrets:

1. Create a replacement token.
2. Update the secret in the runner, scheduler, or secret manager.
3. Run a smoke test with the new token.
4. Revoke the old token from [Access tokens](https://chatgpt.com/admin/access-tokens).

From the Access tokens page, workspace owners and admins can revoke any workspace token. Members with access token permission can revoke only the tokens they created.

## Permission model

The workspace access-token permission controls token creation. Depending on
the workspace layout, **Allow members to use Codex and Work Locally** in
**Codex and Work Local**, or **Allow members to use Codex locally** in **Codex
Local**, controls local Codex access. If **Work Local** has its own section,
**Use Work locally** controls Work and doesn't grant Codex access. A member
needs both local Codex access and access-token permission for token-authenticated
Codex workflows. A member can have local Codex access without permission to
create access tokens.

| Capability                                                    | Workspace owners and admins                      | Member with access token permission           | Member without access token permission |
| ------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------- | -------------------------------------- |
| Open [Access tokens](https://chatgpt.com/admin/access-tokens) | Yes                                              | Yes                                           | No                                     |
| Create access tokens                                          | Yes, for their own ChatGPT workspace identity    | Yes, for their own ChatGPT workspace identity | No                                     |
| List access tokens                                            | Workspace list, including who created each token | Only tokens they created                      | No                                     |
| Revoke access tokens from the Access tokens page              | Any token in the workspace                       | Only tokens they created                      | No page access                         |
| Grant or remove access token permission                       | Workspace owner only                             | No                                            | No                                     |
| Manage other local-client or Codex cloud settings             | Yes, based on workspace admin permissions        | No, unless an owner grants access             | No                                     |

In short: workspace owners and admins manage access at the workspace level.
Members need the access token permission to create and manage their own tokens,
but that permission grants neither admin rights nor access to other members'
tokens.

## Troubleshooting

### The access tokens page returns 404 or forbidden

Ask a workspace owner to confirm that your role includes **Allow users to
create personal access tokens** or **Allow members to use Codex access
tokens**, depending on the available interface. For a token-authenticated
Codex workflow, also confirm that **Allow members to use Codex and Work
Locally** or **Allow members to use Codex locally** is active.

### `codex login --with-access-token` fails

Confirm that you copied the generated access token, not a browser session token
or Platform API key. Also confirm that the token is active, hasn't expired,
and belongs to a user with the required local Codex permission.

## Related docs

- [Authentication](https://learn.chatgpt.com/docs/auth)
- [Service accounts](https://learn.chatgpt.com/docs/enterprise/service-accounts)
- [Non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode)
- [Admin rollout guide](https://learn.chatgpt.com/docs/enterprise/admin-setup)
- [Groups and provisioning](https://learn.chatgpt.com/docs/enterprise/groups-and-provisioning)
- [User lifecycle management](https://learn.chatgpt.com/docs/enterprise/user-lifecycle)
- [Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions)
- [Governance](https://learn.chatgpt.com/docs/enterprise/governance)