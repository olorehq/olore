> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Limits

> Credit Limits and Rate Limits

> [!TIP]
>
> Making additional accounts or API keys will not affect your rate limits, as we govern capacity globally. We do however have different rate limits for different models, so you can share the load that way if you do run into issues.

OpenRouter enforces three kinds of limits:

| Limit type | What it governs | Error on exceeding | Where to check |
| - | - | - | - |
| [Credit limits](#credit-limits) | How much you can spend (account balance, per-key credit caps, and the in-flight spending budget) | | `GET /api/v1/key` → `limit_remaining`; `error.metadata.limit_source` on the error response |
| [Budget limits](#budget-limits) | Spend caps an org admin configured: guardrail budgets, workspace budgets, and the key's own limit once it is spent | | `GET /api/v1/key` → `budgets` and `effective_budget`; `error.metadata` on the error response |
| [Rate limits](#rate-limits) | How many requests you can make (free-model request caps, key-management caps, per-IP burst limits, and DDoS protection) | | `X-RateLimit-*` headers on free-model and key-management errors |

## Checking your limits

To check the rate limit or credits left on an API key, make a GET request to `https://openrouter.ai/api/v1/key`.

If you submit a valid API key, you should get a response of the form:

```typescript title="TypeScript" expandable lines theme={null}
// One budget that applies to requests made with the key (see Budget limits below)
type Budget = {
  scope: 'workspace_default_member' | 'workspace_default_key' | 'member' | 'api_key' | 'workspace' | 'key_limit';
  guardrail_id: string | null; // Set for guardrail scopes
  budget_id: string | null; // Set for the workspace scope
  limit_usd: number;
  spend_usd: number; // Spend counted against the limit in the current window
  remaining_usd: number; // limit_usd - spend_usd; zero or negative blocks requests
  reset_interval: 'daily' | 'weekly' | 'monthly' | null; // null never resets
  resets_at: string | null; // ISO 8601 UTC instant the window rolls over, or null
  include_byok: boolean; // Whether external BYOK spend counts toward this budget
};

type Key = {
  data: {
    label: string;
    limit: number | null; // Credit limit for the key, or null if unlimited
    limit_reset: string | null; // Type of limit reset for the key, or null if never resets
    limit_remaining: number | null; // Remaining credits for the key, or null if unlimited
    include_byok_in_limit: boolean;  // Whether to include external BYOK usage in the credit limit

    budgets: Budget[]; // Every budget enforced for this key, in the order enforcement checks them
    effective_budget: Budget | null; // The budget that blocks requests first, or null if none

    usage: number; // Number of credits used (all time)
    usage_daily: number; // Number of credits used (current UTC day)
    usage_weekly: number; // ... (current UTC week, starting Monday)
    usage_monthly: number; // ... (current UTC month)

    byok_usage: number; // Same for external BYOK usage
    byok_usage_daily: number;
    byok_usage_weekly: number;
    byok_usage_monthly: number;

    is_free_tier: boolean; // Whether the user has paid for credits before

    free_model_daily_requests: {
      used: number; // Free-model requests recorded so far in the current UTC day
      limit: number; // Free-model requests allowed per UTC day (see the free usage limits below)
      remaining: number; // Free-model requests left in the current UTC day
    };
    // rate_limit: { ... } // A deprecated object in the response, safe to ignore
  };
};
```

## Credit limits

Credit limits govern how much you can spend. They come from three places:

1. **Account balance**, your available credits across the account. If your account has a negative credit balance, you may see  errors, including for free models. Adding credits to put your balance above zero allows you to use those models again.
2. **Per-key credit limits**, an optional spending cap configured on an individual API key. The `limit`, `limit_reset`, and `limit_remaining` fields in the `GET /api/v1/key` response above describe this cap and how much of it remains.
3. **In-flight spending budget**, a cap on the estimated token cost of the paid requests you have running or recently completed, relative to your balance. See [In-flight spending budget](#in-flight-spending-budget) below.

### In-flight spending budget

OpenRouter charges a request when it finishes, so many requests running at the same time could commit more than your balance covers before any of them settles. To prevent that, OpenRouter estimates each paid request's token cost up front, at the endpoint's prices: the input tokens, plus the completion tokens allowed by `max_tokens` up to a fixed per-request cap (the cap is used when `max_tokens` is not set). Only token prices are estimated; per-request fees, plugin charges, and image pricing are not part of the estimate, so a request whose cost has no token component is not held. The estimate is held against your account while the request runs. When the request completes or fails, the hold is replaced by the request's actual cost for a short settlement window, and then released.

The total that can be held at once is your in-flight spending budget: a fraction of your current credit balance, up to a fixed ceiling. A request whose estimated cost does not fit alongside your running and recently completed requests is rejected with  before it reaches a provider, even though your balance is positive. The error's `metadata` says which case you hit:

* `"reason": "in_flight_budget_exhausted"` with `"limit_source": "openrouter_in_flight_budget"`: your running and recently completed requests already fill the budget. This is transient and can occur with no request still running, while recent costs are settling. The response includes a `Retry-After` header; wait for it and retry.
* `"reason": "weight_exceeds_budget"` with `"limit_source": "openrouter_credits"`: this single request's estimated cost is larger than your whole budget, so retrying will not help. Lower `max_tokens` or the prompt size, or add credits.

Every  whose `metadata` carries `limit_source` also carries `remedy_hint`, a one-line human-readable next step for that source. It is meant for people reading logs; branch on `limit_source`, not on the hint text.

```json theme={null}
{
  "error": {
    "code": 402,
    "message": "This request would exceed your available credits given your current in-flight requests. Retry after in-flight requests settle, or add credits.",
    "metadata": {
      "reason": "in_flight_budget_exhausted",
      "limit_source": "openrouter_in_flight_budget",
      "remedy_hint": "Retry after your in-flight requests settle (see the Retry-After header). Adding credits at https://openrouter.ai/settings/credits raises your in-flight budget, up to a capped ceiling."
    }
  }
}
```

The budget applies to prepaid accounts spending their own credits, and only to a subset of them: accounts whose balance is below a threshold, and, while the mechanism is being rolled out, newer accounts without an established spending history. A larger balance raises the budget up to the ceiling, and a balance at or above the threshold is not subject to it at all. It does not apply to requests to free models, to requests served entirely with your own provider keys (see [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md)) that use no paid plugins, or to enterprise, paid-subscription, or invoice-billed accounts.

### Handling 402 errors

To resolve  errors:

* **Check `error.metadata.limit_source`** in the response body. `openrouter_in_flight_budget` means your running and recently completed requests filled your [in-flight spending budget](#in-flight-spending-budget), not your balance: wait for the `Retry-After` header and retry. `openrouter_key_limit` means the API key's credit limit is exhausted. `openrouter_credits` means your balance cannot cover the request, or the single request is too expensive for your in-flight budget.
* **Add credits** to bring your account balance above zero, or to raise your in-flight spending budget.
* **Check per-key limits.** If `limit_remaining` on the key is exhausted, raise the key's credit limit or wait for it to reset (see `limit_reset`).
* **Reduce the request size** (fewer input tokens or a lower `max_tokens`) so its estimated cost fits your balance and in-flight budget.
* **Monitor proactively.** Call `GET /api/v1/key` as shown above to track `limit_remaining` and usage before requests start failing.

## Budget limits

Budget limits are spend caps an org admin configures. They come from three places, and OpenRouter checks them in this order on every paid request, so the first one that is spent is the one that blocks:

1. **Guardrail budgets**: a `limit_usd` with a `reset_interval` on the workspace default guardrail (checked against the member's combined spend, then against the key's own spend), on the guardrail assigned to the member, and on the guardrail assigned to the API key. See [Guardrails](https://openrouter.ai/docs/guides/features/guardrails.md).
2. **Workspace budgets**: caps on the whole workspace's spend per interval. See [Workspace budgets](https://openrouter.ai/docs/guides/features/workspaces/workspace-budgets.md).
3. **The key's own limit**: the `limit` field above, once its window is spent.

Spend windows are UTC: a daily budget resets at 00:00 UTC, a weekly one on Monday 00:00 UTC, a monthly one on the first of the month 00:00 UTC. A lifetime workspace budget never resets.

### Checking your budgets

`GET /api/v1/key` lists every budget that applies to the key in `budgets`, with the spend enforcement counts against it, how much is left, and when the window rolls over. `effective_budget` is the budget that blocks requests first: when one is already spent it is the entry enforcement rejects on (the first in the order above, or the broadest spent workspace budget), otherwise it is the entry with the least `remaining_usd`. `limit` and `limit_remaining` keep describing only the key's own limit.

```json title="GET /api/v1/key (excerpt)" lines theme={null}
{
  "data": {
    "limit": null,
    "limit_remaining": null,
    "budgets": [
      {
        "scope": "workspace_default_member",
        "guardrail_id": "0df9e665-d932-5740-b2c7-b52af166bc11",
        "budget_id": null,
        "limit_usd": 100,
        "spend_usd": 40,
        "remaining_usd": 60,
        "reset_interval": "weekly",
        "resets_at": "2026-10-12T00:00:00.000Z",
        "include_byok": false
      },
      {
        "scope": "member",
        "guardrail_id": "6b1d2c3e-4f50-4a61-9b72-83c4d5e6f708",
        "budget_id": null,
        "limit_usd": 50,
        "spend_usd": 40,
        "remaining_usd": 10,
        "reset_interval": "weekly",
        "resets_at": "2026-10-12T00:00:00.000Z",
        "include_byok": false
      }
    ],
    "effective_budget": {
      "scope": "member",
      "guardrail_id": "6b1d2c3e-4f50-4a61-9b72-83c4d5e6f708",
      "budget_id": null,
      "limit_usd": 50,
      "spend_usd": 40,
      "remaining_usd": 10,
      "reset_interval": "weekly",
      "resets_at": "2026-10-12T00:00:00.000Z",
      "include_byok": false
    }
  }
}
```

### Handling 403 budget errors

A request that a budget blocks fails with  before it reaches a provider. The message names the budget and ends with the figures, and `error.metadata` carries them as fields:

```json lines theme={null}
{
  "error": {
    "code": 403,
    "message": "Org member budget limit exceeded (weekly limit). Contact your org admin. $52.00 of $50.00 used; resets 2026-10-12T00:00:00.000Z.",
    "metadata": {
      "limit_source": "openrouter_guardrail_budget",
      "remedy_hint": "Wait for the budget window to reset (see metadata.resets_at), or ask your org admin to raise the guardrail budget.",
      "scope": "member",
      "limit_usd": 50,
      "spend_usd": 52,
      "resets_at": "2026-10-12T00:00:00.000Z"
    }
  }
}
```

* `limit_source` is `openrouter_guardrail_budget` for a guardrail budget, `openrouter_workspace_budget` for a workspace budget, and `openrouter_key_limit` for the key's own limit.
* `scope` matches the `scope` values in `GET /api/v1/key`, so you can find the same entry in `budgets`.
* `resets_at` is the ISO 8601 UTC instant the window rolls over, or `null` for a lifetime workspace budget. Retrying before it will fail the same way; there is no `Retry-After` header because the wait is usually hours or days.
* Call `GET /api/v1/key` before a long task and watch `effective_budget.remaining_usd` to avoid hitting the cap partway through.

## Rate limits

Rate limits govern how many requests you can make. There are a few rate limits that apply to certain types of requests, regardless of account status:

1. **Free usage limits**: If you're using a free model variant (with an ID ending in `:free`), the following limits apply:

| Credits purchased (all time) | Requests per minute | Requests per day |
| - | - | - |
| Less than 10 | 20 | 50 |
| At least 10 | 20 | 1000 |

The `free_model_daily_requests` field in the `GET /api/v1/key` response above reports the daily counter and ceiling that gate your free-model requests when these limits apply to your account. Accounts and endpoints exempt from free-model limits, and BYOK requests, are not gated by it, so `remaining` reflects the tier policy rather than an enforced ceiling for them. The per-minute limit is not reported there. The `limit` tier is selected by all-time credits purchased, independently of `is_free_tier`. To absorb rounding and top-up fees, the higher daily ceiling is granted starting one credit below the table's threshold (currently {FREE_MODEL_CREDITS_THRESHOLD - 1} credits); an account that has purchased fewer credits than that reports `is_free_tier: false` together with the lower daily ceiling.

2. **Key-management limits**: Creating, updating, and deleting API keys with a [management key](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md) count toward a daily limit for your account or organization. The limit is 10,000 requests per day by default, and it resets at 00:00 UTC.

   * `POST /api/v1/keys`, `PATCH /api/v1/keys/{hash}` (including disabling a key), and `DELETE /api/v1/keys/{hash}` all count toward the same limit. A request counts even if it then fails, for example with a 404 for an unknown key.
   * Reading keys, usage, or credits doesn't count toward it.
   * When you reach the limit, requests fail with  until the reset. The `X-RateLimit-Reset` header gives the reset time in milliseconds since the Unix epoch.
   * If you create a short-lived key for each job, set `expires_at` when you create it instead of deleting it afterward. This halves the requests that count toward the limit.
   * If your workload needs a higher limit, contact support.

3. **Per-IP burst limits**: These endpoints also limit how many requests each client IP address can make per minute:

   * Key writes: `POST /api/v1/keys`, `PATCH /api/v1/keys/{hash}`, and `DELETE /api/v1/keys/{hash}`
   * Key reads: `GET /api/v1/keys` and `GET /api/v1/keys/{hash}`
   * Current key and credits: `GET /api/v1/key` and `GET /api/v1/credits`

   Each endpoint counts separately, except that `PATCH` and `DELETE` on `/api/v1/keys/{hash}` share a count. The limits for key writes are lower than the limits for the other endpoints. These responses don't include `X-RateLimit-*` headers, so wait a few seconds and retry with exponential backoff.

4. **DDoS protection**: Cloudflare's DDoS protection will block requests that dramatically exceed reasonable usage.

### Handling 429 errors

Requests rejected with  fail with a standard [error response](https://openrouter.ai/docs/api_reference/errors-and-debugging.md):

```json lines theme={null}
{
  "error": {
    "code": 429,
    "message": "Rate limit exceeded",
    "metadata": {
      "error_type": "rate_limit_exceeded"
    }
  }
}
```

A  error can come from two places:

1. **OpenRouter**, when you hit one of the platform limits above (free-model requests per minute or per day, key-management requests per day, per-IP burst limits, or DDoS protection).
2. **The upstream provider**, when the provider serving your request is rate limiting or at capacity. In this case `error.metadata.provider_code` carries the provider's original error code when available, and [fallback routing](https://openrouter.ai/docs/guides/routing/provider-selection.md) retries other providers for the same model automatically before the error reaches you. You can also specify [fallback models](https://openrouter.ai/docs/guides/routing/model-fallbacks.md) to try a different model when all providers for the first are exhausted.

> [!NOTE]
>
> Successful inference responses do not include `X-RateLimit-*` headers. When OpenRouter itself returns a  error for a free-model or key-management limit, the error response carries `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` headers describing the limit that was hit. When every attempted provider returned a retry hint, the error response also carries a `Retry-After` header. To monitor your remaining free-model daily quota before hitting a limit, call `GET /api/v1/key` as shown above. It doesn't report the key-management limit.

To resolve  errors:

* **Retry with exponential backoff.** Rate limits are transient; wait and retry rather than immediately re-sending. Honor the `Retry-After` header when present.
* **On free variants**, purchase at least 10 credits to raise your daily limit, or switch to the paid variant of the model, which has no platform-level request cap.
* **For provider-side limits**, add [fallback models](https://openrouter.ai/docs/guides/routing/model-fallbacks.md) or relax [provider routing preferences](https://openrouter.ai/docs/guides/routing/provider-selection.md) so more providers are eligible to serve the request.

#### Mid-stream rate limits

If a rate limit is hit after streaming has started, the error arrives as an SSE event with `finish_reason: "error"` instead of an HTTP , since the  status was already sent:

```text lines theme={null}
data: {"id":"cmpl-abc123","object":"chat.completion.chunk","created":1234567890,"model":"openai/gpt-4o","provider":"openai","error":{"code":429,"message":"Rate limit exceeded"},"choices":[{"index":0,"delta":{"content":""},"finish_reason":"error"}]}
```

See [Handling Errors During Streaming](https://openrouter.ai/docs/api_reference/streaming.md#handling-errors-during-streaming) for details and code examples.
