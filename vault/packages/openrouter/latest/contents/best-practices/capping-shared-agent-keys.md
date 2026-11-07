> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Capping Shared Agent Keys

> Put a hard spend cap on workspace-owned API keys used by agents, CI jobs, and service accounts

Agents, CI jobs, and other service accounts usually run on an API key that no individual person owns. In an organization, an admin creates such a key as a **workspace-owned key** (the **Workspace** option under **Owner** in the key dialog, also called a system key). Because the key has no creator, the per-member guardrail budgets that cap your human users never apply to it, which is why a shared agent key can look uncapped even in a workspace with strict member guardrails.

You do not need a separate service-account feature to cap these keys. Three existing controls cover them directly, and a guardrail assigned to the key or the workspace default guardrail also caps them (see the table below):

1. One workspace per team, so each team's agent keys share one pool. With [SCIM group mappings](https://openrouter.ai/docs/guides/features/scim-mappings.md), a team's identity-provider group maps straight to that workspace.
2. A [workspace budget](https://openrouter.ai/docs/guides/features/workspaces/workspace-budgets.md) with **Include BYOK spend** turned on, as the pooled cap for the whole team.
3. A credit limit with `include_byok_in_limit` on each agent key, as the per-key cap.

This page explains why the member guardrail does not reach these keys and how to set the three controls up.

## Why a Shared Key Looks Uncapped

OpenRouter attributes spend to the **creator** of an API key, not to whoever calls it. A [guardrail](https://openrouter.ai/docs/guides/features/guardrails.md) assigned to an organization member applies to the keys that member created. A workspace-owned key has no creator, so no member guardrail is ever looked up for it, and no member guardrail budget counts its spend.

The controls that do apply to a workspace-owned key are:

| Control | Applies to a workspace-owned key? |
| - | - |
| Member guardrail (assigned to a person) | No. There is no member to resolve. |
| Workspace default guardrail | Yes. It applies to all traffic in the workspace. |
| Guardrail assigned directly to the key | Yes. Its budget is counted per key. |
| Workspace budget | Yes. Every key in the workspace draws from the same pooled limit. |
| Key credit limit (`limit`, `limit_reset`, `include_byok_in_limit`) | Yes. This is the key's own hard cap. |

The rest of this page uses the workspace budget for the pooled cap and the key credit limit for the per-key cap, because together they cover both OpenRouter credit spend and BYOK spend without any member assignment. See the [Spend Controls guide](https://openrouter.ai/docs/guides/best-practices/spend-controls.md#budget-attribution-and-key-ownership) for how key ownership drives attribution in general.

## Step 1: One Workspace per Team

Give each team that runs agents its own [workspace](https://openrouter.ai/docs/guides/features/workspaces.md). The workspace is the unit that a budget caps, so putting a team's agent keys in a dedicated workspace is what makes the budget a per-team cap.

If your organization uses SSO with SCIM provisioning, map the team's identity-provider group to the workspace with a [SCIM group mapping](https://openrouter.ai/docs/guides/features/scim-mappings.md). Members of the group are added to the workspace automatically, and access stays in sync as people join and leave the group. SCIM group mappings require an Enterprise plan and an active [SSO connection](https://openrouter.ai/docs/guides/features/sso.md).

Create the agent keys inside that workspace as workspace-owned keys:

* **Dashboard**: on the workspace's **Keys** page, an organization admin opens **Create API Key** and picks **Workspace** under **Owner**.
* **Management API**: call `POST /api/v1/keys` with a [management API key](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md), pass the team's `workspace_id`, and leave out `creator_user_id`. A key created this way has no creator.

## Step 2: A Workspace Budget That Counts BYOK Spend

Set a [workspace budget](https://openrouter.ai/docs/guides/features/workspaces/workspace-budgets.md) on the team's workspace. Any combination of daily, weekly, monthly, and lifetime limits is allowed, and OpenRouter returns `403 Forbidden` on the next request once any configured limit is reached. Workspace budgets are available on every plan, and only organization administrators can change them.

By default a workspace budget counts only OpenRouter credit spend. If your agents run on [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) provider keys, turn on **Include BYOK spend** in the workspace's Budgets settings, or set `include_byok_in_budgets` to `true` on the budget endpoint. Otherwise BYOK traffic passes the budget check no matter how much it costs you.

```bash lines theme={null}
curl -X PUT https://openrouter.ai/api/v1/workspaces/{workspace_id}/budgets/monthly \
  -H "Authorization: Bearer $MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{"limit_usd": 2000, "include_byok_in_budgets": true}'
```

`include_byok_in_budgets` applies to the whole workspace, so one call covers every interval you configure. With BYOK spend included, the budget counts the amount OpenRouter would have charged had the request not used your own provider key. See [Including BYOK spend](https://openrouter.ai/docs/guides/features/workspaces/workspace-budgets.md#including-byok-spend) for the full field behavior.

## Step 3: A Credit Limit on Each Agent Key

The workspace budget is the pooled cap. To stop one runaway agent from draining the whole pool, give each agent key its own credit limit. Unlike the workspace budget and SCIM group mappings, the key credit limit and its BYOK toggle are not tied to a plan: they are available on every plan.

A key's credit limit has three parts:

* `limit`: the cap in USD.
* `limit_reset`: `daily`, `weekly`, or `monthly` to make the cap a rolling allowance that resets at midnight UTC. Leave it unset for a lifetime cap.
* `include_byok_in_limit`: `true` to count BYOK spend toward the cap. The default is `false`, so without it a key that only uses BYOK providers never reaches its limit.

When the key's combined spend reaches `limit`, requests on that key fail with `403 Forbidden` and a `Key limit exceeded` message until the window resets or you raise the limit.

Set the limit when you create the key, or update an existing key:

```bash lines theme={null}
curl -X PATCH https://openrouter.ai/api/v1/keys/{key_hash} \
  -H "Authorization: Bearer $MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{"limit": 200, "limit_reset": "monthly", "include_byok_in_limit": true}'
```

In the dashboard, the same fields live under **Key limit** in the key dialog: the **Credit limit**, its reset interval, and the **Include BYOK usage in limit** toggle. The toggle is shown once the account has BYOK provider keys configured.

The key limit and the workspace budget each have their own BYOK toggle. Enable both if you want both layers to count BYOK spend. See [Management API Keys](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md) for the full key endpoints and the [API reference](https://openrouter.ai/docs/api_reference/limits.md) for the usage fields a key reports.

## Several Teams in One Workspace

A workspace budget is one pooled limit for the whole workspace, and guardrail budgets are counted per key or per member. There is no way today to give two teams inside the same workspace separate pooled budgets. If teams must be capped independently, put them in separate workspaces as described in [Step 1](#step-1-one-workspace-per-team).

## Checklist

* Each team that runs agents has its own workspace, mapped from its identity-provider group where SCIM is in use.
* The agent keys are workspace-owned keys in that workspace, created by an admin with the **Workspace** owner option or through the management API without `creator_user_id`.
* The workspace has a budget with **Include BYOK spend** on, if the agents use BYOK providers.
* Every agent key has a `limit`, a `limit_reset` if the cap should roll over, and `include_byok_in_limit` set to `true`, if the agents use BYOK providers.

## Related Guides

* [Spend Controls](https://openrouter.ai/docs/guides/best-practices/spend-controls.md)
* [Workspace Budgets](https://openrouter.ai/docs/guides/features/workspaces/workspace-budgets.md)
* [Guardrails](https://openrouter.ai/docs/guides/features/guardrails.md)
* [Management API Keys](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md)
* [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md)
* [SCIM Group Mappings](https://openrouter.ai/docs/guides/features/scim-mappings.md)
