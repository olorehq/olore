> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Workspace Budgets

> Set spending limits per workspace with automatic enforcement

Workspace budgets let you cap how much a workspace can spend on OpenRouter inference. Set a dollar limit on any combination of intervals — daily, weekly, monthly, or lifetime — and OpenRouter blocks requests automatically once a limit is reached.

Workspace budgets pair with [guardrail budgets](https://openrouter.ai/docs/guides/features/guardrails.md#budget-enforcement) to provide both pooled team caps and per-member limits. For recommended approaches, see the [Spend Controls best practices guide](https://openrouter.ai/docs/guides/best-practices/spend-controls.md).

> [!NOTE]
>
> Workspace budgets are available on every plan. In the dashboard, personal accounts manage their own workspace budgets. Within an organization, only **Organization Administrators** can create, edit, or delete budgets — other workspace members can view budgets and current spend but cannot modify them. Programmatic budget management uses organization [management API keys](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md), which operate at the account level.

## How It Works

Each workspace can have up to four budgets, one per interval:

| Interval | Resets | Use case |
| - | - | - |
| **daily** | Every day at midnight UTC | Prevent runaway spend from a single bad day |
| **weekly** | Every Monday at midnight UTC | Smooth out weekly burst usage |
| **monthly** | First of each month at midnight UTC | Enforce a fixed monthly allocation |
| **lifetime** | Never | Hard cap on total workspace spend |

When a request comes in, OpenRouter checks the workspace's current spend against every configured budget. If any budget is met or exceeded, the request returns a `403 Forbidden` error:

```
Workspace monthly budget of $500.00 exceeded. Contact your org admin.
```

The error names the broadest exceeded interval so users know which limit triggered the block.

### Ordering Rule

Budget limits must be **strictly decreasing** as the interval narrows:

```
lifetime > monthly > weekly > daily
```

For example, if your monthly budget is \$1,000, the weekly budget must be less than \$1,000 and the daily budget must be less than the weekly budget. You don't need to set all four intervals — only the ones you set must follow this ordering.

## Setting Budgets in the Dashboard

1. Go to your workspace's **Settings** page at `https://openrouter.ai/workspaces/<slug>/settings`
2. Scroll to the **Budgets** section
3. Click **Add budget**, choose an interval, and enter a dollar amount
4. Repeat for additional intervals
5. Click **Save**

![Workspace budgets section in the Settings dashboard](https://mintcdn.com/openrouter-d02e98a0/vKv_Fe97IEm3a1mW/assets/guides/features/workspaces/workspace-budgets.png?fit=max\&auto=format\&n=vKv_Fe97IEm3a1mW\&q=85\&s=9d317b499bdd02e6d9db826a2f8848be)

Each budget row shows a progress bar with current-period spend against the limit. If spend already exceeds a limit, the bar turns red and a warning appears.

The **Include BYOK spend** toggle above the budget rows controls whether [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) inference spend counts toward these limits. It applies to the whole workspace, so it affects every interval at once. See [Including BYOK spend](#including-byok-spend) for the API equivalent.

> [!NOTE]
>
> These dashboard steps require the **Organization Administrator** role. Members can see the budgets, the spend bars, and the **Include BYOK spend** setting, but cannot change them.

## Setting Budgets via the API

You can also manage budgets programmatically using an organization [management API key](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md). Management keys operate at the account level and can perform administrative actions across all workspaces. The budget endpoints live under `/api/v1/workspaces/{workspace_ref}/budgets`.

### List Budgets

```bash lines theme={null}
curl https://openrouter.ai/api/v1/workspaces/{workspace_id}/budgets \
  -H "Authorization: Bearer $MANAGEMENT_KEY"
```

```json lines theme={null}
{
  "data": [
    {
      "id": "770e8400-e29b-41d4-a716-446655440000",
      "workspace_id": "880e8400-e29b-41d4-a716-446655440000",
      "limit_usd": 1000,
      "reset_interval": "monthly",
      "created_at": "2025-08-24T10:30:00Z",
      "updated_at": "2025-08-24T15:45:00Z"
    }
  ],
  "include_byok_in_budgets": false
}
```

`include_byok_in_budgets` sits alongside `data` rather than on each budget row, because it applies to the whole workspace rather than to a single interval. See [Including BYOK spend](#including-byok-spend).

### Create or Update a Budget

Use `PUT` with the interval in the path. If a budget for that interval already exists, it's updated.

```bash lines theme={null}
curl -X PUT https://openrouter.ai/api/v1/workspaces/{workspace_id}/budgets/monthly \
  -H "Authorization: Bearer $MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{"limit_usd": 1000}'
```

Valid intervals: `daily`, `weekly`, `monthly`, `lifetime`.

The response echoes the created or updated budget plus the workspace's current BYOK setting:

```json lines theme={null}
{
  "data": {
    "id": "770e8400-e29b-41d4-a716-446655440000",
    "workspace_id": "880e8400-e29b-41d4-a716-446655440000",
    "limit_usd": 1000,
    "reset_interval": "monthly",
    "created_at": "2025-08-24T10:30:00Z",
    "updated_at": "2025-08-24T15:45:00Z"
  },
  "include_byok_in_budgets": false
}
```

The server validates the ordering rule — if the new limit would violate the strictly-decreasing constraint relative to existing budgets, the request returns `400 Bad Request` with a message like:

```
Budget limits must be strictly decreasing as scope narrows:
the monthly limit ($500) must be greater than the weekly limit ($600).
```

### Including BYOK Spend

By default, only OpenRouter credit spend counts toward a workspace's budgets. Set `include_byok_in_budgets` to `true` to also count [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) inference spend — the amount OpenRouter would have charged had the request not used your own provider key:

```bash lines theme={null}
curl -X PUT https://openrouter.ai/api/v1/workspaces/{workspace_id}/budgets/monthly \
  -H "Authorization: Bearer $MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{"limit_usd": 1000, "include_byok_in_budgets": true}'
```

This is the same setting as the **Include BYOK spend** toggle in the dashboard's Budgets section.

Two things to know about the field:

* **It applies to the whole workspace.** The interval in the request URL doesn't scope BYOK inclusion.
* **Omit it to leave the current setting unchanged.** Only send it when you intend to change it; sending `false` explicitly turns inclusion off.

The current value is returned by both the list and upsert endpoints, and on the workspace resource itself (`GET /api/v1/workspaces/{id}`).

> [!NOTE]
>
> A change made through the API applies to budget enforcement immediately. An already-open workspace settings page in the dashboard may keep showing the previous value until it is reloaded.

### Delete a Budget

```bash lines theme={null}
curl -X DELETE https://openrouter.ai/api/v1/workspaces/{workspace_id}/budgets/monthly \
  -H "Authorization: Bearer $MANAGEMENT_KEY"
```

```json lines theme={null}
{
  "deleted": true
}

```

Deleting a budget that doesn't exist returns success (idempotent).

## Spend Tracking

Budget enforcement uses OpenRouter's usage pipeline, which tracks spend per workspace across each interval window. The progress bar in the dashboard shows real-time spend relative to each configured limit.

By default only OpenRouter credit spend is tracked against a budget. With [**Include BYOK spend**](#including-byok-spend) enabled, BYOK inference spend is added to the same total.

When you create a workspace, spend starts at zero for every interval. Periodic budgets (daily, weekly, monthly) reset automatically at the start of each period. lifetime budgets accumulate indefinitely.

## Budgets During Workspace Creation

Organization administrators can also set budgets when creating a new workspace. The workspace creation form includes an optional **Budgets** section where you can configure limits before any keys are issued, along with the **Include BYOK spend** toggle.

## FAQ

> [accordion] What happens to in-flight requests when a budget is exceeded?
>
> Budget checks run before the request is routed to a provider. In-flight requests that were already dispatched will complete, so actual spend may slightly exceed the budget limit. The next request after the overage is detected will be blocked.

> [accordion] Do BYOK (Bring Your Own Key) requests count against workspace budgets?
>
> By default, no — workspace budgets apply to OpenRouter-billed spend, so [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) requests routed with your own provider key don't count.
>
> You can opt in per workspace by enabling **Include BYOK spend** in the dashboard, or by setting `include_byok_in_budgets` to `true` on the budget endpoint. When enabled, the amount OpenRouter would have charged had the request not used your own provider key counts toward every interval for that workspace.

> [accordion] Can I set budgets on the Default workspace?
>
> Yes. Every workspace — including the Default workspace — can have budgets configured.

> [accordion] Who gets notified when a budget is exceeded?
>
> Users receive a `403 Forbidden` error on the blocked request with a message naming the exceeded budget. To hear about it before that happens, turn on the [workspace budget limit alert](https://openrouter.ai/docs/guides/features/notifications.md) (Business and Enterprise plans), which fires at chosen percentages of the budget. Budget status is also visible in the workspace settings dashboard.

> [accordion] Can workspace members override a budget?
>
> No. In the dashboard, only organization admins can modify budgets. Programmatic changes require an organization management API key. Members whose requests are blocked should contact their org admin to raise the limit.
