> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Guardrails

> Control spending and model access for your organization

Guardrails let organizations control how their members and API keys can use OpenRouter. You can set spending limits, restrict which models and providers are available, and enforce data privacy policies.

Any existing account wide settings will continue to apply. Guardrails help enforce tighter restrictions for individual API keys or users.

## Enabling Guardrails

Guardrails are managed per [workspace](https://openrouter.ai/docs/guides/features/workspaces.md). To create and manage guardrails:

1. Open the workspace in your OpenRouter dashboard and navigate to its **Guardrails** page (for the default workspace, [Workspaces > Default > Guardrails](https://openrouter.ai/workspaces/default/guardrails))
2. Click "New Guardrail" to create your first guardrail
3. Save it, then assign it under the guardrail's **Members** or **API Keys** sections

Account-wide data policies and provider restrictions live separately under [Settings > Privacy](https://openrouter.ai/settings/privacy). Workspaces inherit those policies, and guardrails add more restrictive rules on top of them.

> [!TIP]
>
> If you're using an organization account, you must be an organization admin to create and manage guardrails.

## Guardrail Settings

Each guardrail can include any combination of:

* **Budget limit** - Spending cap in USD that resets daily, weekly, or monthly. Requests are rejected when the limit is reached. By default only OpenRouter credit spend counts toward the limit; enable **Include BYOK spend** (`include_byok_in_budgets`) to also count [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) inference spend.
* **Model allowlist** - Restrict to specific models. Leave empty to allow all.
* **Provider allowlist** - Restrict to specific providers. Leave empty to allow all.
* **Zero Data Retention** - Enforce ZDR per model group (Anthropic, OpenAI, Google, SpaceXAI, and all other models). See [Zero Data Retention](https://openrouter.ai/docs/guides/features/zdr.md#per-model-group-zdr-enforcement) for details.
* **Safety Retention** - When ZDR is enforced, choose **ZDR only** or **Allow Safety Retention** for Google models and for all other models. In the [Guardrails API](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail.md), these are `allow_safety_retention_google` and `allow_safety_retention_other`. Safety Retention: may retain prompts and responses from any request, only to prevent abuse. Not used for training. See [Allowing or excluding Safety Retention](https://openrouter.ai/docs/guides/features/zdr.md#allowing-or-excluding-safety-retention).
* **Data regions** - Restrict which OpenRouter domains requests may arrive through (`allowed_data_regions`: `global` for `https://openrouter.ai`, `europe` for `https://eu.openrouter.ai`, `us` for `https://us.openrouter.ai`). Requests through any other domain are rejected. Leave unrestricted to accept any region. Data-region guardrails require a Business or Enterprise plan. See [Enforcing In-Region Routing with Guardrails](https://openrouter.ai/docs/guides/features/in-region-routing.md#enforcing-in-region-routing-with-guardrails). Note that the guardrail value for the EU is `europe`, while the Models API region filter takes `region=eu`.
* **Security** - Protect against prompt injection and jailbreak attacks with [regex-based detection](https://openrouter.ai/docs/guides/features/guardrails/prompt-injection).
* **[Sensitive Info](https://openrouter.ai/docs/guides/features/guardrails/sensitive-info.md)** - Detect and redact or block sensitive information (PII) in API requests using built-in presets and NLP-based detection.
* **Custom content filters** - Define your own regex patterns to [redact or block](#custom-content-filters) matching content in incoming requests.

> [!NOTE]
>
> Individual API key budgets still apply. The lower limit wins.

> [!NOTE]
>
> If your plan stops including in-region routing while a data-region guardrail is still assigned, requests governed by that guardrail are rejected until you upgrade or clear the restriction. The guardrail keeps enforcing its region list, and the regional domains reject requests from accounts without in-region routing (any region not in the list stays blocked; `global` in the list keeps `https://openrouter.ai` open).

## Assigning Guardrails

> [!WARNING]
>
> A guardrail enforces nothing until it is assigned. Creating a guardrail only defines it: passing a `workspace_id` places the guardrail in that workspace for organization, but does not apply it to the workspace's traffic. To restrict all traffic in a workspace without per-key or per-member assignments, configure the [workspace default guardrail](#updating-the-workspace-default-guardrail-via-api) instead.

Guardrails can be assigned at multiple levels:

* **Member assignments** - Assign to specific organization members. Sets a baseline for all their API keys and chatroom usage.
* **API key assignments** - Assign directly to specific keys for granular control. Layers on top of member guardrails.

Only one guardrail can be directly assigned to a user or key. All of an organization member's created API keys will implicitly follow that user's guardrail assignment, even if the API Key is further restricted with its own guardrail assignment.

## Guardrail Hierarchy

Account-wide privacy and provider settings are always enforced as a default guardrail. When additional guardrails apply to a request, they are combined using the following rules:

* **Provider allowlists**: Intersection across all guardrails (only providers allowed by all guardrails are available)
* **Model allowlists**: Intersection across all guardrails (only models allowed by all guardrails are available)
* **Zero Data Retention**: OR logic per model group (if any guardrail enforces ZDR for a given scope, such as Anthropic, OpenAI, Google, SpaceXAI, or all other models, it is enforced for that scope)
* **Safety Retention**: most restrictive wins per model group (if your account or any guardrail is set to ZDR only for Google or all other models, Safety Retention endpoints are excluded for that group)
* **Data regions**: Intersection across all guardrails that set `allowed_data_regions` (a guardrail that leaves it unrestricted does not affect the result). A member or API key guardrail can only narrow the regions permitted by the workspace default guardrail.
* **Sensitive Info**: Union across all guardrails (filters from all applicable guardrails are combined). If the same entity type or pattern appears with different actions, block takes precedence over redact.
* **Budget limits**: Each guardrail's budget is checked independently. See [Budget Enforcement](#budget-enforcement) for details.

This means stricter rules always win when multiple guardrails apply. For example, if a member guardrail allows providers A, B, and C, but an API key guardrail only allows providers A and B, only providers A and B will be available for that key.

## Eligibility Preview

When viewing a guardrail, you can see an eligibility preview that shows which providers and models are available with that guardrail combined with your account settings. This helps you understand the effective restrictions before assigning the guardrail.

## Budget Enforcement

Guardrail budgets are enforced per-user and per-key, not shared across all users with that guardrail. When an API key makes a request, its usage counts toward both the key's budget and the owning member's budget.

By default, only OpenRouter credit spend counts toward a guardrail's budget. Set `include_byok_in_budgets` to `true` (or toggle **Include BYOK spend** in the dashboard) to also count [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) inference spend (the amount OpenRouter would have charged had the request not used your own provider key) toward the same limit.

For guidance on structuring workspace budgets alongside guardrails, and how to set up tiered per-member budget policies, see the [Spend Controls best practices guide](https://openrouter.ai/docs/guides/best-practices/spend-controls.md).

**Example 1: Member guardrail with \$50/day limit**

You assign a guardrail with a \$50/day budget to three team members: Alice, Bob, and Carol. Each member gets their own \$50/day allowance. If Alice spends \$50, she is blocked, but Bob and Carol can still spend up to \$50 each.

**Example 2: API key usage accumulates to member usage**

Alice creates two API keys, both assigned a guardrail with a \$20/day limit. Key A spends \$15 and Key B spends \$10. Each key is within its own \$20 limit, but Alice's total member usage is \$25. If Alice also has a member guardrail with a \$20/day limit, her requests would be blocked because her combined usage (\$25) exceeds the member limit (\$20).

**Example 3: Layered guardrails**

Bob has a member guardrail with a \$100/day limit. His API key has a separate guardrail with a \$30/day limit. The key can only spend \$30/day (its own limit), but Bob's total usage across all his keys cannot exceed \$100/day. Both limits are checked independently on each request.

## Custom Content Filters

Each guardrail can carry a list of **custom content filter patterns**. Every pattern is a regular expression with an associated action:

* **Redact** - Matched spans are replaced with a placeholder before the request is forwarded to the model.
* **Block** - The request is rejected with a `403` before it reaches the model.

Patterns are evaluated locally against every user message, so they add negligible latency to requests.

### Supported regex features

Patterns are JavaScript-flavoured regular expressions. The following common constructs are all supported:

* Character classes (`[a-z]`, `\d`, `\w`, `\s`, …)
* Quantifiers (`*`, `+`, `?`, `{n,m}`)
* Alternation (`foo|bar`)
* Non-capturing groups (`(?:…)`)
* Named capture groups (`(?<name>…)`)
* Anchors (`^`, `$`, `\b`)
* Escape sequences (`\.`, `\(`, `\\`, …)

### Unsupported regex features

To keep evaluation fast and predictable across all requests, the following features are **not allowed** in new or edited patterns:

* **Lookaheads** - `(?=…)` and `(?!…)`
* **Lookbehinds** - `(?<=…)` and `(?<!…)`
* **Backreferences** - numeric (`\1`, `\2`, …) and named (`\k<name>`)
* **Excessive backtracking** - patterns with nested quantifiers like `(a+)+`

The API rejects offending patterns with an `invalid_regex_pattern` error on create and on update.

### Limits

* Up to **100,000 characters** per pattern.
* Multiple patterns per guardrail; each is evaluated independently.

## When a Request Is Blocked

When a guardrail's runtime checks block a request (for example a content filter or prompt-injection detector), OpenRouter returns an HTTP **403 Forbidden** response. Note that budget limits, allowlist restrictions, and data region restrictions also produce 403 responses, but only runtime content checks include `openrouter_metadata` stage details.

A request rejected by a data region restriction is refused before any inference happens, and the error message names the permitted hostnames:

```json lines theme={null}
{
  "error": {
    "code": 403,
    "message": "This request arrived on the global data region, but the key's workspace permits requests only on these OpenRouter hostnames: eu.openrouter.ai. Use one of the permitted hostnames or update the workspace guardrail allowed data regions."
  }
}
```

```json lines theme={null}
{
  "error": {
    "code": 403,
    "message": "Request blocked: prompt injection patterns detected",
    "metadata": {
      "patterns": ["ignore all previous instructions"]
    }
  }
}
```

If you opt in to [router metadata](https://openrouter.ai/docs/guides/routing/routers/router-metadata.md) via the `X-OpenRouter-Experimental-Metadata: enabled` header, the 403 response also includes the full `openrouter_metadata` object with routing context and a `pipeline` array showing every guardrail stage that ran:

```json expandable lines theme={null}
{
  "error": {
    "code": 403,
    "message": "Request blocked: prompt injection patterns detected",
    "metadata": {
      "patterns": ["ignore all previous instructions"]
    }
  },
  "openrouter_metadata": {
    "requested": "openai/gpt-4o",
    "strategy": "direct",
    "region": "iad",
    "summary": "available=1",
    "attempt": 1,
    "is_byok": false,
    "endpoints": {
      "total": 1,
      "available": [
        { "provider": "OpenAI", "model": "openai/gpt-4o", "selected": false }
      ]
    },
    "pipeline": [
      {
        "type": "guardrail",
        "name": "regex_pi_detection",
        "guardrail_id": "grd_abc123",
        "guardrail_scope": "api-key",
        "summary": "Blocked: prompt injection detected (1 pattern matched)",
        "data": {
          "action": "blocked",
          "detected": true,
          "engines": ["regex"],
          "patterns": ["ignore all previous instructions"]
        }
      }
    ]
  }
}
```

See [Router Metadata, Error Responses](https://openrouter.ai/docs/guides/routing/routers/router-metadata.md#error-responses) and [Errors, Guardrail Errors](https://openrouter.ai/docs/api_reference/errors-and-debugging.md#guardrail-errors) for the full response shapes and pipeline stage reference.

## API Access

You can manage guardrails programmatically using the OpenRouter API. This allows you to create, update, delete, and assign guardrails to API keys and organization members directly from your code.

See the [Guardrails API reference](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails.md) for available endpoints and usage examples.

### Updating the Workspace Default Guardrail via API

Each workspace has a **default guardrail** that applies to all traffic in that workspace without needing to be explicitly assigned to individual keys or members. To update the workspace default guardrail via the API:

1. **List guardrails** for the workspace to find the default guardrail:

```bash lines theme={null}
curl https://openrouter.ai/api/v1/guardrails?workspace_id=YOUR_WORKSPACE_ID \
  -H "Authorization: Bearer YOUR_MANAGEMENT_KEY"
```

2. **Identify the default guardrail** in the response. It is named `Workspace <workspace-id> Default` (where `<workspace-id>` is the UUID of your workspace).

3. **Update it** using the guardrail's `id`:

```bash lines theme={null}
curl -X PATCH https://openrouter.ai/api/v1/guardrails/GUARDRAIL_ID \
  -H "Authorization: Bearer YOUR_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "allowed_providers": ["openai", "anthropic"],
    "limit_usd": 100,
    "reset_interval": "monthly",
    "include_byok_in_budgets": true,
    "enforce_zdr_anthropic": true,
    "enforce_zdr_openai": true
  }'
```

All [guardrail settings](#guardrail-settings) can be configured this way, including budget limits, provider/model allowlists, zero data retention enforcement, and content filters.
