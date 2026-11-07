> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Spend Controls

> How to structure workspace budgets, guardrails, and access controls for your organization

OpenRouter has two independent spend controls: **workspace budgets** and **guardrails**. They work in layers. Understanding how they compose is the key to a spend policy that scales with your organization.

This guide covers the recommended patterns and the most common pitfalls.

## The Two Layers

| Layer | Scope | What it does |
| - | - | - |
| **Workspace budget** | Entire workspace | Pooled cap on collective spend across all members and keys in the workspace |
| **Guardrail budget** | Per member or per API key | Per-person or per-key limit that stacks with workspace budgets |

A request is checked against workspace budgets first. If it passes, OpenRouter checks all applicable guardrail budgets. Each guardrail budget is enforced independently; the first limit reached blocks the request.

For example: an engineer with a `$100/week` member guardrail in a workspace with a `$5,000/month` workspace budget can spend up to `$100/week` individually, but the whole team stops at `$5,000/month` regardless of individual consumption.

**Reference docs:**

* [Workspace Budgets](https://openrouter.ai/docs/guides/features/workspaces/workspace-budgets.md)
* [Guardrails](https://openrouter.ai/docs/guides/features/guardrails.md)

## Set a Maximum on the Workspace Default Guardrail

Each workspace has a **default guardrail** that applies to all traffic hitting the workspace. It is the first guardrail checked for every request.

The workspace default guardrail is the right place for **model allowlists, provider allowlists, ZDR enforcement, and data-region restrictions**. It can also carry the highest per-member or per-key budget that applies to everyone in the workspace.

The default guardrail is checked before any additional guardrail. Treat its budget as the maximum spend for a member or key. A member assigned to a `$500/week` guardrail is still blocked if the default guardrail allows only `$100/week`.

**Recommended structure:**

1. Put model, provider, privacy, and region policy on the workspace default guardrail.
2. Set the default guardrail budget to the highest per-member or per-key limit you want to allow.
3. Use a separate workspace budget for the pooled team cap and the final emergency stop.
4. Create additional guardrails with lower budgets for teams, roles, or individual users.
5. Assign each person to one additional tier when they need a lower limit. Remove the additional assignment when they need the default maximum.

This makes the controls easy to reason about:

* **Workspace budget:** the pooled limit for the whole workspace. Use it as the “everything is on fire, shut it down” limit for lost keys, runaway agents, or an unexpectedly large workload.
* **Default guardrail:** the highest per-member or per-key limit, plus the workspace-wide model and provider policy. Use it as the “this user or key is on fire, shut it down” limit.
* **Additional guardrails:** lower per-member or per-key tiers for teams, roles, or individuals.

## Tiered Member Budgets Pattern

When you need different spend limits per user, create reusable tier guardrails and assign them to members individually. Keep the highest limit on the workspace default guardrail; use additional guardrails for lower tiers.

```
$50/day   → assigned to entry-level members
$200/day  → assigned to special users
$500/day  → assigned to power users
```

For example, a workspace might use this structure:

```
Workspace budget       → $10,000/month
Default guardrail      → $1,000/day per user
Power-user guardrail   → $500/day per user
Special-user guardrail → $200/day per user
New-user guardrail     → $50/day per user
```

Each guardrail has its own reset interval. Keep the intervals consistent when comparing tiers, or state the difference explicitly. Assign the new-user guardrail to new members, then move members to the special-user or power-user tier as their role changes. A member who needs the maximum limit uses the default guardrail without an additional lower-tier assignment. Reuse the same guardrail across members who share a tier. Do not create one guardrail per person unless separate lifecycle or policy ownership requires it.

**How member guardrail budgets work:**

* A member guardrail aggregates usage across **all eligible org-owned keys that member has created**. A single engineer using multiple keys still shares the same member budget.
* Usage counts toward the guardrail reset window (daily, weekly, monthly). There is no manual reset, only the configured interval rollover.
* Raising a member guardrail limit does not reset its counter. It changes the threshold; the member is unblocked only if their accumulated usage is below the new limit.

## Budget Attribution and Key Ownership

Budget enforcement follows the **key creator**, not the person using the key. This is the single most common source of budget confusion.

* When an org member creates an API key, that key spend is attributed to that member guardrail budget.
* When an **admin creates a workspace-owned key** (system key with no `creator_user_id`), it does not resolve to any member guardrail. These keys must use a direct key guardrail assignment or the workspace default guardrail budget if they need a limit.
* **Direct key guardrail assignments** create an independent per-key budget check in addition to any member-level checks. A single key can have its own guardrail, but only one guardrail can be directly assigned to a key at a time.

**Practical implications:**

* A shared admin-owned key used by an entire team draws against the admin member budget, not against each user who calls it. For per-person enforcement, each person needs their own key.
* A workspace-owned key with no creator is unattributed at the member level. Assign a key guardrail to it if it needs a budget, or follow [Capping Shared Agent Keys](https://openrouter.ai/docs/guides/best-practices/capping-shared-agent-keys.md) to cap it with a workspace budget and a per-key credit limit.
* When a member creates a new key to bypass a rate limit, that key still counts toward the same member guardrail budget. A new key does not reset the member-level counter.

## BYOK and Budget Accounting

By default, guardrail budgets count only **OpenRouter credit spend**. If your organization uses [Bring Your Own Keys (BYOK)](https://openrouter.ai/docs/guides/overview/auth/byok.md), toggle **Include BYOK spend** on the guardrail to also count BYOK inference toward the same limit.

A few caveats:

* BYOK spend uses OpenRouter's recorded inference-cost value for each request, not necessarily the amount your provider invoices you. A guardrail budget of `$500/month` with BYOK spend enabled counts that recorded value toward the limit.
* The workspace-level **Include BYOK spend** toggle applies the same recorded BYOK usage to workspace budget checks.
* Enabling the toggle on a workspace budget is independent from enabling it on any guardrail. Set both separately if you want both layers to count BYOK spend.

## Terraform Pattern

If you manage OpenRouter configuration with the [Terraform provider](https://openrouter.ai/docs/guides/overview/terraform.md), you can manage guardrails and API keys today. Workspace budget resources are not currently available in the provider, so configure workspace budgets through the dashboard or [Management API](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md). Full Terraform support for workspace budgets is coming soon.

```hcl theme={null}
resource "openrouter_guardrail" "budget_100_weekly" {
  name           = "budget-100-weekly"
  limit_usd      = 100
  reset_interval = "weekly"
}

resource "openrouter_guardrail" "budget_500_weekly" {
  name           = "budget-500-weekly"
  limit_usd      = 500
  reset_interval = "weekly"
}
```

Guardrail member and key assignments require the [Management API](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md) or dashboard today. Full Terraform support for assigning members and keys to guardrails is coming soon.

## Common Pitfalls

| Mistake | Why it fails |
| - | - |
| Setting the workspace default guardrail below a higher tier | The default guardrail is checked for every request, so it remains the ceiling that higher tiers cannot exceed |
| Expecting a new key to bypass a member budget | New key spend still accrues to the same member counter |
| Assuming a pooled guardrail across members | Guardrail budgets are per-assignment; each member or key has its own counter |
| Not enabling Include BYOK spend | BYOK traffic bypasses budget limits if the guardrail counts only credit spend |
| Using a shared key for per-person enforcement | Spend is attributed to the key creator, not the caller |

## Related Guides

* [Capping Shared Agent Keys](https://openrouter.ai/docs/guides/best-practices/capping-shared-agent-keys.md)
* [Workspace Budgets](https://openrouter.ai/docs/guides/features/workspaces/workspace-budgets.md)
* [Guardrails](https://openrouter.ai/docs/guides/features/guardrails.md)
* [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md)
* [Terraform Provider](https://openrouter.ai/docs/guides/overview/terraform.md)
