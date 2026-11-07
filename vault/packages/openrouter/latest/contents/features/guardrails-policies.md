> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Guardrail Policies

> Control spending, model access, and content moderation with separate guardrail policies

Guardrail Policies splits a guardrail into three separate policies, so you can mix and match them. Instead of one guardrail that holds a budget, a model list, and content filters together, you create each one on its own and assign it to the people and API keys it should cover.

If you already use guardrails through the API or Terraform, see [Migrating to Guardrail Policies](https://openrouter.ai/docs/guides/features/guardrails/policies-migration.md).

## Policy types

There are three kinds of policy:

| Policy | What it controls |
| - | - |
| **Budget** | A spending cap in USD that resets daily, weekly, or monthly, and whether [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) spend counts toward it. |
| **Model & provider access** | Which models and providers can be used, [Zero Data Retention](https://openrouter.ai/docs/guides/features/zdr.md#per-model-group-zdr-enforcement) per model group, model training and publication choices, and which [data regions](https://openrouter.ai/docs/guides/features/in-region-routing.md#enforcing-in-region-routing-with-guardrails) requests may arrive through. |
| **Content moderation** | [Prompt injection protection](https://openrouter.ai/docs/guides/features/guardrails/prompt-injection), [sensitive info detection](https://openrouter.ai/docs/guides/features/guardrails/sensitive-info.md), and [custom content filters](https://openrouter.ai/docs/guides/features/guardrails.md#custom-content-filters). |

Each setting works the same way it does in a [guardrail](https://openrouter.ai/docs/guides/features/guardrails.md#guardrail-settings). The difference is that each type can be assigned on its own. For example, a team can share one model access policy while each person gets a different budget.

## Where policies apply

Policies apply at two levels:

1. **Workspace-wide policies** apply to every member and API key in a workspace, and can't be overridden. A member's or API key's own policy within a workspace can add restrictions on top of a workspace-wide policy, but it can't loosen one. Use these for rules the whole workspace has to follow, like a maximum per-person spending cap or requiring ZDR without exception. The same workspace-wide policy can be assigned to multiple workspaces. Create workspace-wide policies and assign them to workspaces under [Account > Guardrails](https://openrouter.ai/workspaces/guardrails).
2. **Member and API key policies** apply to specific members or API keys inside one workspace. Use them to restrict particular people or keys further, like a smaller budget for a contractor or a shorter model list for a production key. A member's policy also covers their chatroom usage and the API keys they created. Create and assign member and API key policies within a workspace under **Workspace > Guardrails**.

A member or API key can have at most one policy of each type in a workspace. Picking a new budget policy for someone replaces their old budget policy but leaves their model access and moderation policies alone.

> [!NOTE]
>
> An organization API key with no policy of its own follows the member who created it. Its spend counts toward that member's budget. If the creator leaves the organization, the key falls back to the workspace's default.

## Defaults

For each policy type (budget, model & provider access, content moderation), you can set a default at both levels:

* **Default workspace-wide policy**: applies to every workspace in your account that doesn't have its own set workspace-wide policy of that type, including workspaces you create later.
* **Default member & API key policy within a workspace**: applies to every member and API key in that workspace that doesn't have its own set policy of that type, including people and keys added later.

### Replacing or removing a default

You can remove the default from one workspace, member, or API key, at the level where the default is set. Replace it with a different policy or no policy.

* **Workspace-wide**: give a workspace a different workspace-wide policy, or remove the default so that workspace has no workspace-wide policy of that type. Account-wide privacy and provider settings under [Settings > Privacy](https://openrouter.ai/settings/privacy) always apply to every workspace.
* **Within a workspace**: give a member or API key a different policy, or remove the default so they have no member or API key policy of that type. Workspace-wide policies still apply to them.

### No default required

You don't have to set a default at either level. Without one, workspaces, members, and API keys only get a policy of that type if you assign one directly.

## How policies combine

When more than one level applies to a request, the stricter rule always wins:

* **Models and providers**: only those allowed by every applicable policy are available.
* **Zero Data Retention**: enforced for a model group if any applicable policy enforces it.
* **Data regions**: only regions allowed by every policy that sets them. A policy that leaves regions unrestricted doesn't change the result.
* **Sensitive info and content filters**: filters from every applicable policy are combined. If the same filter has different actions, block wins over redact.
* **Budgets**: each budget is checked on its own. A request is blocked when any one of them is used up.

Account-wide privacy and provider settings under [Settings > Privacy](https://openrouter.ai/settings/privacy) always apply on top of every policy, and individual [API key credit limits](https://openrouter.ai/docs/api_reference/limits.md) still apply too.

## Budget enforcement

Budgets are tracked per person and per API key. They are never a shared pool for everyone assigned to the policy.

* A **member** budget of \$50/day gives each assigned member their own \$50/day. Spend from all their API keys adds up toward it.
* An **API key** budget limits that key's own spend.
* A **workspace-wide** budget assigned to a workspace limits each member and each API key in that workspace. A \$100/month workspace-wide budget means no one in the workspace can spend more than \$100/month, even if their own budget is higher.

To cap the total spend of a whole workspace, use a [workspace budget](https://openrouter.ai/docs/guides/features/workspaces/workspace-budgets.md) instead.

Budgets reset at 00:00 UTC: daily every day, weekly on Monday, and monthly on the 1st.

### Example: raising one person's budget

Your workspace has a workspace-wide policy with a \$100/month budget, and a workspace default budget of \$50/month. You give Alice her own \$300/month budget policy. Alice's own budget is now \$300, but the workspace-wide policy still caps her at \$100/month. To let her spend more, raise the workspace-wide policy's limit or remove the workspace from it.

You can check which budgets apply to an API key, and how much is left, with [`GET /api/v1/key`](https://openrouter.ai/docs/api_reference/limits#budget-limits).

## Managing policies in the dashboard

Workspace policies live on the workspace's **Guardrails** page (for the default workspace, [Workspaces > Default > Guardrails](https://openrouter.ai/workspaces/default/guardrails)). From there you can create budget, model & provider access, and content moderation policies, set a workspace default, and pick policies for each member and API key on the **Assignments** tab.

Workspace-wide policies live under [Account > Guardrails](https://openrouter.ai/workspaces/guardrails), where you choose which workspaces each one covers.

> [!TIP]
>
> Organization admins can manage every policy. Workspace admins can create, edit, delete, and assign policies in workspaces they administer. Only organization admins can manage workspace-wide policies.

## Managing policies with the API

Policies are managed with a [Management API key](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md). All routes live under `https://openrouter.ai/api/v1/guardrails/policies`:

| Route | Purpose |
| - | - |
| `GET`, `POST` `/account` | List or create workspace-wide policies |
| `PUT`, `DELETE` `/account/{id}` | Update or delete a workspace-wide policy |
| `GET`, `POST` `/budget` | List (`?workspace_id=`) or create budget policies |
| `GET`, `PUT`, `DELETE` `/budget/{id}` | Read, update, or delete a budget policy |
| `/moderation`, `/moderation/{id}` | The same routes for content moderation policies |
| `/model-availability`, `/model-availability/{id}` | The same routes for model & provider access policies |
| `GET`, `PUT` `/assignments/members/{member_id}` | Read or change one member's policy of one type |
| `GET`, `PUT` `/assignments/api-keys/{key_hash}` | Read or change one API key's policy of one type |

`GET` and `DELETE` on a workspace policy take `workspace_id` as a query parameter. List routes return `{ "data": [...], "total_count": N }` and accept optional `offset` and `limit` for paging.

API keys are named by their hash, like everywhere else in the Management API. Member IDs are the user IDs returned by [List organization members](https://openrouter.ai/docs/api/api-reference/organization/list-organization-members.md) (`id`) or a workspace's member list (`user_id`).

### Create a budget policy

This creates a \$200/month budget in a workspace and assigns it to one member and one API key:

```bash lines theme={null}
curl -X POST https://openrouter.ai/api/v1/guardrails/policies/budget \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Engineering monthly budget",
    "policy_type": "budget",
    "workspace_id": "YOUR_WORKSPACE_ID",
    "config": {
      "limit_usd": 200,
      "reset_interval": "monthly",
      "include_byok_in_budgets": false
    },
    "member_ids": ["user_2abcDEFghiJKLmnoPQRstu"],
    "api_key_hashes": ["YOUR_API_KEY_HASH"]
  }'
```

Set `"is_workspace_default": true` to make it the workspace default for its type. Use `opted_out_member_ids` and `opted_out_api_key_hashes` to keep specific members or keys off the new default.

### Create a model & provider access policy

```bash lines theme={null}
curl -X POST https://openrouter.ai/api/v1/guardrails/policies/model-availability \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Approved models",
    "policy_type": "model_availability",
    "workspace_id": "YOUR_WORKSPACE_ID",
    "is_workspace_default": true,
    "config": {
      "allowed_providers": ["openai", "anthropic"],
      "allowed_models": ["openai/gpt-4o", "anthropic/claude-sonnet-4"],
      "enforce_zdr_anthropic": true,
      "enforce_zdr_openai": true
    }
  }'
```

### Create a workspace-wide policy

This applies a content moderation policy to two workspaces:

```bash lines theme={null}
curl -X POST https://openrouter.ai/api/v1/guardrails/policies/account \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Block secrets",
    "policy_type": "moderation",
    "is_default": false,
    "workspace_ids": ["WORKSPACE_ID_1", "WORKSPACE_ID_2"],
    "config": {
      "content_filter_builtins": [{ "slug": "secrets", "action": "block" }]
    }
  }'
```

Set `"is_default": true` instead to cover every workspace in the account, and list any workspaces to leave out in `opted_out_workspace_ids`.

### Updating a policy

`PUT` replaces the policy's name and settings, so send the full `config` every time. To change who is assigned, send both `member_ids` and `api_key_hashes` with the complete new lists. To leave assignments alone, for example when only changing the limit, leave both out.

### Changing one member or API key

When several people or scripts manage assignments at once, sending full lists can overwrite each other's changes. The assignment routes change one member or API key at a time instead. First read the current state:

```bash lines theme={null}
curl "https://openrouter.ai/api/v1/guardrails/policies/assignments/members/user_2abcDEFghiJKLmnoPQRstu?workspace_id=YOUR_WORKSPACE_ID&policy_type=budget" \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY"
```

```json lines theme={null}
{
  "data": {
    "policy_ids": [],
    "workspace_default_policy_ids": ["2c6f1a4e-0b7d-4e59-9a61-3f8d2e7c1b90"],
    "opted_out": false
  }
}
```

Then send the change along with the state you read as `expected_assignment`:

```bash lines theme={null}
curl -X PUT https://openrouter.ai/api/v1/guardrails/policies/assignments/members/user_2abcDEFghiJKLmnoPQRstu \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "workspace_id": "YOUR_WORKSPACE_ID",
    "policy_type": "budget",
    "policy_id": "BUDGET_POLICY_ID",
    "assigned": true,
    "expected_assignment": {
      "policy_ids": [],
      "workspace_default_policy_ids": ["2c6f1a4e-0b7d-4e59-9a61-3f8d2e7c1b90"],
      "opted_out": false
    }
  }'
```

If the assignment changed since you read it, the request fails with `409 Conflict`. Read it again and retry. Use the `/assignments/api-keys/{key_hash}` route the same way for API keys.

### Limits

* A single create or update request can name up to 10,000 members and API keys in total. A policy itself can cover any number of them.
* Workspace policies belong to one workspace and can only be assigned to members and API keys in that workspace.

## When a request is blocked

Requests blocked by a policy return the same `403` errors as guardrails. See [When a Request Is Blocked](https://openrouter.ai/docs/guides/features/guardrails.md#when-a-request-is-blocked) and [Budget limits](https://openrouter.ai/docs/api_reference/limits.md#budget-limits) for the response shapes.
