# Service accounts

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

Service accounts let you run and scale headless Codex workflows across your organization without relying on an employee's account. Each continuous integration (CI) runner, scheduled job, or shared integration gets its own ChatGPT workspace identity, with the same groups, roles, access controls, and auditability you expect for people.

Only workspace owners and admins can create service accounts. They can let other people or groups manage an account, configure plugins, or create access tokens.

Service accounts are available only on pay-as-you-go plans.

A service account represents a non-human workspace identity. A [personal access token](https://learn.chatgpt.com/docs/enterprise/access-tokens) represents the workspace member who creates it. API Platform project service accounts and API keys use separate project access and billing.

## Create and set up a service account

This interactive walkthrough uses GitHub as an example: create an account, configure a plugin, create a token, and assign groups and roles.

<ServiceAccountsDemo client:load guided />

1. Open [Service accounts](https://chatgpt.com/admin/service-accounts) in your workspace settings.
2. Select the plus (**+**) button and enter a descriptive name, such as `release-automation`.
3. Select **Create**.

## Connect a plugin

Configure plugins for the service account itself. It doesn't inherit the creator's plugins or connected apps.

1. Open the account's **Plugins** section and select **Add plugin**.
2. Choose a plugin and confirm that it shows as configured or enabled.

The **Configure** and **Manager** roles can set up plugins. The **User** role can't.

## Create an access token

Create a token from the service account's detail page. The token represents the service account, not the person who creates it.

1. Open the account and select **Create token** in **Access tokens**.
2. Name the token, confirm the **Codex** scope, and choose an expiration.
3. Select **Create** and save the token in your secret manager.

The full token appears only once. Workspace policies control which expirations are available.

## Assign roles and groups

A service account can receive workspace roles and join groups like a human workspace member. Assign its access directly; it doesn't inherit the creator's permissions.

To let people or groups manage the account, select **Share**, then **Add people or groups**, and assign a role:

| Shared-account role | Configure the account and its plugins | Create service-account access tokens |
| ------------------- | ------------------------------------- | ------------------------------------ |
| **User**            | No                                    | Yes                                  |
| **Configure**       | Yes                                   | No                                   |
| **Manager**         | Yes                                   | Yes                                  |

These roles apply to people managing the account. They are separate from the workspace roles and groups assigned to the service account.

**Configure** and **Manager** can enable or disable the account. Only workspace owners and admins can create, delete, or share accounts. Operators manage shared accounts while signed in to their own ChatGPT accounts.

For more about workspace permissions, see [Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions).

## Run Codex without signing in

Service-account access tokens require Codex CLI version `0.142.0` or later. Set `CODEX_ACCESS_TOKEN` and run Codex without opening a browser:

```bash
export CODEX_ACCESS_TOKEN="<service-account-access-token>"
codex exec --json "Inspect this repository and summarize its current state."
```

In CI, provide the token through a secret manager or runner secret.

To save a login on a trusted machine, pass the token through standard input:

```bash
printf '%s' "$CODEX_ACCESS_TOKEN" | codex login --with-access-token
codex exec "Summarize the changes in the current branch."
```

This saves the credential locally. On shared or temporary runners, use `CODEX_ACCESS_TOKEN` without saving a login.

## Provision service accounts with SCIM

If your workspace supports service-account provisioning through the System for Cross-domain Identity Management (SCIM) protocol, set `userType` to `ServiceAccount` in your identity provider:

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "svc-codex-release@company.example",
  "displayName": "Codex release automation",
  "active": true,
  "userType": "ServiceAccount"
}
```

Assign the identity to the workspace and required groups, then sync it. The identity provider manages the account's name, group membership, and lifecycle. SCIM-managed accounts can't be renamed or deleted in ChatGPT. See [Groups and provisioning](https://learn.chatgpt.com/docs/enterprise/groups-and-provisioning).

## Manage service accounts with the Admin API

If your workspace has access, use a ChatGPT Admin API key to manage accounts, tokens, and sharing. Read operations require `chatgpt.enterprise.service_account.read`; changes require `chatgpt.enterprise.service_account.write`. A service-account token can't authenticate Admin API requests.

Check the [Admin API reference](https://chatgpt.com/public/admin/api-reference) for available operations and current request paths.

### Accounts

| Operation                    | Method   | What it does                               |
| ---------------------------- | -------- | ------------------------------------------ |
| List accounts                | `GET`    | Returns workspace service accounts         |
| Create an account            | `POST`   | Creates a named service account            |
| Get an account               | `GET`    | Returns one service account                |
| Enable or disable an account | `PATCH`  | Updates the account's `enabled` value      |
| Delete an account            | `DELETE` | Removes the account and revokes its tokens |

Create accounts with `POST /v1/manage/workspaces/{workspace_id}/service-accounts`. Account updates change only `enabled`.

### Tokens

| Operation      | Method   | What it does                         |
| -------------- | -------- | ------------------------------------ |
| List tokens    | `GET`    | Returns the account's token metadata |
| Create a token | `POST`   | Creates a scoped access token        |
| Revoke a token | `DELETE` | Permanently revokes one token        |

For example, create a Codex token that expires after 30 days:

```json
{
  "name": "production-release-runner",
  "ttl": 2592000,
  "scopes": ["chatgpt.workspace.feature.allow-codex-local-access.access"]
}
```

`ttl` is the token lifetime in seconds. A finite lifetime must be less than one year and follow your workspace's expiration policy. The full `access_token` is returned only when the token is created.

The Admin API can also list, add, update, and remove shared-account access. Its role values are `manager`, `configurer`, and `user`; `configurer` appears as **Configure** in ChatGPT.

## Secure and manage service accounts

- Grant only the roles, groups, plugins, and connections the workflow needs.
- Store tokens in a secret manager and use trusted runners.
- Keep credentials out of logs, chat messages, and source control.
- Set finite expirations and review account access and activity regularly.
- Rotate a token by creating a replacement, updating the workflow, verifying access, and revoking the old token in the workspace or Admin API.
- Revoke exposed tokens immediately and investigate the account's recent activity.
- Disable or delete unused accounts in the workspace or Admin API. Both actions revoke all active tokens. Disabled accounts can be re-enabled with new tokens; deletion can't be undone.

Runs are attributed to the service account. Available workspace analytics and audit records can also identify who created tokens or changed account settings. Confirm event coverage in the [Admin API reference](https://chatgpt.com/public/admin/api-reference).

## Related docs

- [Authentication](https://learn.chatgpt.com/docs/auth)
- [Personal access tokens](https://learn.chatgpt.com/docs/enterprise/access-tokens)
- [Roles and workspace permissions](https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions)
- [Groups and provisioning](https://learn.chatgpt.com/docs/enterprise/groups-and-provisioning)
- [Governance](https://learn.chatgpt.com/docs/enterprise/governance)
- [Compliance API and audit events](https://learn.chatgpt.com/docs/enterprise/compliance-api)
- [Non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode)