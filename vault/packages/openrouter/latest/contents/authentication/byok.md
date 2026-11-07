> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# BYOK

> Bring your own provider API keys

## Bring your own API Keys

OpenRouter supports both OpenRouter credits and the option to bring your own provider keys (BYOK).

When you use OpenRouter credits, your rate limits for each provider are managed by OpenRouter.

Using provider keys enables direct control over rate limits and costs via your provider account.

Your provider keys are securely encrypted and used for all requests routed through the specified provider.

Manage keys in your [workspace BYOK settings](https://openrouter.ai/integrations).

The cost of using custom provider keys on OpenRouter is **5% of what the same model/provider would cost normally on OpenRouter** and will be deducted from your OpenRouter credits. The free allowance is plan-dependent and measured by list-price inference cost, not request count: Pay-as-you-go includes \$25,000 per month, while Enterprise allowances are custom. See the [pricing page](https://openrouter.ai/pricing) for details.

### Key Priority and Fallback

Each BYOK key belongs to one of two sections:

* **Prioritized**, attempted in order, before falling back to OpenRouter endpoints, unless the request sets [`order`](#byok-with-provider-ordering). Use this section for your primary provider keys.
* **Fallback**, tried only after OpenRouter endpoints have been attempted, in order. Use this section for backup keys you only want used as a last resort.

You can drag keys between sections on the provider detail page (e.g. [/settings/integrations/openai](https://openrouter.ai/settings/integrations/openai)).

By default, if all keys in both sections encounter a rate limit or failure, OpenRouter will fall back to using shared OpenRouter endpoints.

Each prioritized key has a **Shared capacity fallback** setting that controls what happens when your key can't serve a request on that provider, either because the key failed or because the requested model is outside the key's **Models** selection (under **This key applies to**). Shared capacity spends OpenRouter credits. The three levels, from weakest to strongest:

* **Use shared capacity** (default): OpenRouter tries your key first, then falls back to OpenRouter endpoints on failures.
* **Never use shared capacity for models this key applies to**: models selected in the key's Models filter (which defaults to All) never fall back to OpenRouter endpoints on this provider, which may result in rate limit errors if your keys are exhausted, but ensures those requests go through your account. Models outside the filter can still fall back to OpenRouter endpoints on this provider.
* **Never use shared capacity for any model on this provider**: never spend OpenRouter credits on this provider, even for models outside the key's Models filter. Requests to that provider only run through your keys: if no key allows the requested model, or all matching keys fail, that provider is skipped instead of falling back to OpenRouter endpoints. Other providers can still serve the request unless you restrict them (e.g. with `provider.only`).

When you have multiple keys for the same provider, OpenRouter tries them in priority order (see [Multiple BYOK Keys](#multiple-byok-keys-for-the-same-provider)). If the first key fails, it falls through to the next matching key before falling back to shared capacity.

### BYOK with Provider Ordering

When you combine BYOK keys with [provider ordering](https://openrouter.ai/docs/guides/routing/provider-selection.md#ordering-specific-providers), the `order` you send decides which provider is tried first. Within each provider you name, your BYOK endpoint for that provider is tried before OpenRouter's shared capacity for it. Providers you do not name come after the ones you named, with their BYOK endpoints first and shared capacity after, which is the same ranking a request without `order` gets.

For example, if you have BYOK keys for Amazon Bedrock and Google Vertex AI but not for Anthropic, and you send a request with:

```json lines theme={null}
{
  "provider": {
    "allow_fallbacks": true,
    "order": ["anthropic"]
  }
}
```

The routing order will be:

1. Anthropic (OpenRouter's shared capacity)
2. Amazon Bedrock (your BYOK key)
3. Google Vertex AI (your BYOK key)
4. Amazon Bedrock (OpenRouter's shared capacity)
5. Google Vertex AI (OpenRouter's shared capacity)

If you name a provider you hold a key for, that key is tried first in its slot. With the same keys and `order: ["amazon-bedrock", "google-vertex", "anthropic"]`, the routing order will be:

1. Amazon Bedrock (your BYOK key)
2. Amazon Bedrock (OpenRouter's shared capacity)
3. Google Vertex AI (your BYOK key)
4. Google Vertex AI (OpenRouter's shared capacity)
5. Anthropic (OpenRouter's shared capacity)

A key set to be used as a fallback keeps that behavior inside its slot: the shared endpoint is tried first, then your key. A key set to **Never use shared capacity** removes the shared endpoint from its slot, so only your key is tried for that provider.

#### Requests Without Provider Ordering

When a request sets no `order`, OpenRouter prioritizes BYOK endpoints first: every provider you hold a prioritized key for is tried on your key before any shared capacity, and shared capacity follows in the router's normal order. To put a particular provider first regardless of your keys, send it in `order`.

If you want to prevent fallback to OpenRouter endpoints entirely, set **Shared capacity fallback** to **"Never use shared capacity for any model on this provider"** on your BYOK keys in your [workspace BYOK settings](https://openrouter.ai/integrations).

### BYOK and Regional Endpoints

Some providers host region-pinned endpoints for a model alongside a standard one, for example `amazon-bedrock/us` or `google-vertex/europe-west1`. Providers charge a premium for these regional endpoints. For closed-weight models, where the premium is a fixed multiple of the list price, requests to the global API (`openrouter.ai`) skip them unless you target one explicitly with `provider.order` or `provider.only` (see [Targeting Specific Provider Endpoints](https://openrouter.ai/docs/guides/routing/provider-selection.md#targeting-specific-provider-endpoints)). Regional endpoints of open-weight models (models with a Hugging Face id) are not skipped: they stay in default routing and compete on price with the model's other endpoints, so a BYOK key for that provider can be used on them like on any other endpoint.

For closed-weight models, a prioritized BYOK key bills the regional premium to your own provider account rather than to OpenRouter credits, so the rule relaxes in one case: if a provider has **no** standard-priced endpoint for the model, only regional ones, your prioritized key for that provider can route to the regional endpoint. When the provider offers both a standard and a regional endpoint for a closed-weight model, your key is routed to the standard endpoint, the same as a non-BYOK request. Fallback keys never unlock those regional endpoints. Requests to the regional APIs (`us.openrouter.ai`, `eu.openrouter.ai`) are unaffected, since they route to in-region endpoints by design. To make a key eligible on a regional API when the provider's shared endpoint is outside that region, see [Declaring a Data Region on a Key](#declaring-a-data-region-on-a-key).

### BYOK with Data Policies

Your data policies apply to BYOK endpoints. A BYOK key changes the credential for the upstream request. It does not change which endpoints you can route to. Your provider, account, and guardrail data policies apply to each BYOK endpoint. BYOK routes only to endpoints that pass those policies.

A BYOK key does not exempt a provider from your `data_collection` restrictions. For [Zero Data Retention](https://openrouter.ai/docs/guides/features/zdr.md) the same is true by default. You can enforce ZDR with `provider.zdr`, your account privacy settings, or a guardrail. When you do, an endpoint that retains prompts stays blocked. Your own key does not change that. The one exception is a key with a ZDR declaration in its **Provider agreement** section. See [Declaring ZDR on a Key](#declaring-zdr-on-a-key).

For example, you enforce ZDR and send a request to a provider whose endpoint retains prompts. You have a BYOK key for that provider.

```json lines theme={null}
{
  "provider": {
    "zdr": true
  }
}
```

Without a ZDR declaration, OpenRouter removes the endpoint that retains prompts. If no ZDR endpoint remains, the request fails. Your valid key for that provider does not change this.

To use a provider through BYOK, make sure your data policies allow it. The provider's endpoint must pass your `data_collection` restrictions. It must also pass your ZDR restrictions, unless your key has a ZDR declaration. See [Zero Data Retention](https://openrouter.ai/docs/guides/features/zdr.md) and [Provider Routing](https://openrouter.ai/docs/guides/routing/provider-selection.md).

#### Declaring ZDR on a Key

Some providers give your own account zero data retention. The shared endpoint that OpenRouter tracks for that provider can still retain prompts. OpenRouter cannot see your provider agreement. You tell OpenRouter what it covers. Each key card has a **Provider agreement** section with a **Zero data retention** setting. Workspace admins change the setting on the provider page (for example [/settings/integrations/openai](https://openrouter.ai/settings/integrations/openai)). The setting has three options:

| Option | Effect when ZDR is enforced |
| - | - |
| **Use OpenRouter's default** (default) | The key follows the policy that OpenRouter tracks for the endpoint. An endpoint that retains prompts stays blocked. A ZDR endpoint stays allowed. |
| **My account has ZDR** | OpenRouter treats requests through this key as zero data retention. The key can serve the model even when the shared endpoint retains prompts. |
| **My account does not have ZDR** | OpenRouter treats requests through this key as retaining prompts. ZDR enforcement blocks the key even when the shared endpoint has ZDR. |

The declaration is your statement about your own provider agreement. OpenRouter does not check it. You can set it on a key for any BYOK provider. It changes only the retention policy of your key's endpoints. Training (`data_collection`) restrictions still follow the policy that OpenRouter tracks for the endpoint.

The declaration follows these rules:

* OpenRouter judges each key by its own declaration. Suppose the shared endpoint retains prompts and you have two keys for that provider. If you declare ZDR on only one key, the other key stays blocked under ZDR enforcement.
* Prioritized and Fallback keys both count. If the shared endpoint retains prompts and a key in either section declares ZDR, OpenRouter removes the shared endpoint and keeps your key's copy eligible. This does not guarantee that your key serves the request. A Fallback copy ranks behind the ZDR endpoints of other providers, so those are tried first. With `allow_fallbacks: false`, OpenRouter uses only the endpoint that led the pool before your key was added, which can be another provider's ZDR endpoint.
* The declaration applies only when the key can serve the request. If the key's **This key applies to** filters exclude the request, the declaration does nothing.
* A Fallback key with a ZDR declaration has one limit. Suppose a Prioritized key for the same provider has no declaration and has **Never use shared capacity for models this key applies to** enabled. OpenRouter then removes shared capacity for the model on that provider and does not use the Fallback key. If no other ZDR endpoint remains, the request fails with a ZDR error.
* [Private endpoints](https://openrouter.ai/docs/guides/routing/private-endpoints.md) keep the data policy that OpenRouter recorded for that deployment. A key declaration does not change it.
* You can also set it with the `declared_zdr` field in the [BYOK management API](https://openrouter.ai/docs/api/api-reference/byok): `true` for **My account has ZDR**, `false` for **My account does not have ZDR**, and `null` for **Use OpenRouter's default**.
* A ZDR declaration also covers [Safety Retention](https://openrouter.ai/docs/guides/features/zdr.md#google-safety-retention). Requests through a key with **My account has ZDR** are treated as ZDR even when you choose **ZDR only**. Declare ZDR only if your own provider agreement excludes the provider's safety retention.
* To use a provider only through your key under ZDR, and never through OpenRouter's shared capacity, also set **Shared capacity fallback** to **Never use shared capacity for any model on this provider** (see [Key Priority and Fallback](#key-priority-and-fallback)).

> [!WARNING]
>
> **Video generation is not covered.** A video provider keeps the generated video until you download it. A video endpoint retains data by design. OpenRouter treats every video endpoint as retaining. A ZDR declaration on your key does not change that. A guardrail that enforces ZDR also blocks video models on your key.

#### Declaring a Data Region on a Key

On a regional domain, OpenRouter routes only to endpoints it has onboarded for that region (see [In-Region Routing](https://openrouter.ai/docs/guides/features/in-region-routing.md)). OpenRouter cannot see where your own OpenAI, Azure, or Anthropic account processes requests, so you tell OpenRouter. The **Provider agreement** section on an OpenAI, Azure, or Anthropic key card has a **Data region** setting, next to the ZDR setting, on the provider detail page (for example [/settings/integrations/openai](https://openrouter.ai/settings/integrations/openai)). OpenAI and Azure keys have three options, each labelled with the OpenRouter hostname it applies to. Anthropic keys have only **Global** and **United States**:

| Option | Hostname | Effect |
| - | - | - |
| **Global** (default) | `openrouter.ai` | The key follows the region OpenRouter tracks for the endpoint. An undeclared key behaves the same way. |
| **European Union** | `eu.openrouter.ai` | Requests sent to `eu.openrouter.ai` may use this key for a model on that provider even when OpenRouter has no in-region record for the provider's shared endpoint (see the exceptions below). |
| **United States** | `us.openrouter.ai` | Requests sent to `us.openrouter.ai` may use this key for a model on that provider even when OpenRouter has no in-region record for the provider's shared endpoint (see the exceptions below). |

The declaration is your attestation about where the provider processes requests made with your own account: your OpenAI project, your Azure resource, or your Anthropic organization. OpenRouter does not verify it. For OpenAI, the selection also sends requests made with that key to the matching OpenAI API host. For Anthropic, a US-declared key also makes OpenRouter add `inference_geo: "us"` to qualifying requests — see [Anthropic](https://openrouter.ai/docs/guides/features/in-region-routing.md#anthropic) for the model-version rules, batch coverage, and the US-only rate. Sending requests to a regional OpenRouter domain still requires a plan that includes in-region routing.

The setting does not change key priority. OpenRouter first removes keys that cannot serve the request's data region, then tries the remaining keys in the order configured on the BYOK page. On the default `openrouter.ai` domain, Global, EU, and US keys are all eligible and keep that configured order.

The declaration follows these rules:

* OpenAI and Azure keys need a declaration on a regional domain. An OpenAI or Azure key without a declaration matching the request's region is never used on `eu.openrouter.ai` or `us.openrouter.ai`, even when the provider's shared endpoint is in-region. OpenRouter sends these keys to a host you control (an OpenAI regional host or your Azure resource), so it relies on your declaration instead of its own endpoint record.
* OpenRouter judges each key on its own declaration. If you hold two keys for the same provider and declare a region on only one of them, only the declared key can serve a shared endpoint that is outside the region; the other key keeps serving the endpoints it is eligible for anyway.
* Prioritized and Fallback keys both count, and their order is unchanged. A declared Prioritized key ranks ahead of the shared endpoints that are eligible for the region; a declared Fallback key ranks behind them.
* A Fallback key with a region declaration has the same limit as with ZDR. A Prioritized key for the same provider can have no declaration and the **Never use shared capacity for models this key applies to** setting. In that case, OpenRouter removes shared capacity for the model and does not use the Fallback key. The request fails with a data region error.
* An OpenAI regional key is pinned to its matching OpenAI API host. A US key can serve `openrouter.ai` and `us.openrouter.ai`, but not `eu.openrouter.ai`; an EU key follows the inverse rule. A Global OpenAI key uses `api.openai.com` and does not satisfy a regional request by declaration.
* The declaration applies only when the key can serve the request. If the key's **This key applies to** filters exclude the request, the declaration has no effect.
* A region declaration does not change your key's retention policy. Under ZDR enforcement, the key still needs a ZDR declaration or a ZDR endpoint.
* A saved or cleared declaration takes effect within a few minutes. Routing reads your keys from a short-lived per-account cache, so requests sent right after you save can still use the previous value.
* The [BYOK management API](https://openrouter.ai/docs/api/api-reference/byok) exposes the setting as `declared_region` (`global`, `europe`, `us`, or `null` for undeclared). Omit it on update to keep the stored value, or send `null` to clear it. For OpenAI and Fireworks the value must match the region in the key material, so change it by sending a key with that region.

OpenRouter fails closed where it cannot rely on your account alone to keep the request in the region. A region declaration is **not** honored for:

* [Private endpoints](https://openrouter.ai/docs/guides/routing/private-endpoints.md). A private endpoint keeps the region OpenRouter recorded for that deployment.
* Endpoints that OpenRouter itself pins to a specific cloud region outside the declared one (for example a shared Bedrock or Azure endpoint in a US region when you declare the EU). OpenRouter sends those requests to that location regardless of your account, so honoring the declaration would move data out of the region.
* Cross-region inference profiles, such as Bedrock `global.` profiles, which can process a request in any region.
* Video generation models.

A [guardrail](https://openrouter.ai/docs/guides/features/guardrails.md) that restricts `allowed_data_regions` does not yet recognize the declaration. It judges every endpoint, including your key's, by OpenRouter's own classification, so under such a guardrail the key's endpoint for a shared endpoint outside the region is removed even though the region declaration would otherwise allow it. Until the guardrail learns about declarations, a region declaration only widens routing for requests whose guardrails do not restrict `allowed_data_regions`.

### BYOK and Guardrail Budgets

By default, BYOK inference spend does **not** count toward [guardrail](https://openrouter.ai/docs/guides/features/guardrails.md) budgets. Only OpenRouter credit spend does. This means a budget limit can appear far from its cap even after significant BYOK usage.

To count BYOK spend toward a guardrail's budget, enable **Include BYOK spend** on the guardrail (or set `include_byok_in_budgets` to `true` via the [management API](https://openrouter.ai/docs/guides/features/guardrails.md#api-access)). When enabled, the amount OpenRouter would have charged had the request not used your own provider key is added to the budget alongside your credit spend, and the guardrail blocks requests once the combined total reaches the limit.

This toggle is available on all guardrail budgets, including the workspace default guardrail. It has no effect on a guardrail without a budget limit.

For guidance on combining workspace budgets with guardrail budgets, including how to structure tiered per-member limits and avoid common pitfalls, see the [Spend Controls best practices guide](https://openrouter.ai/docs/guides/best-practices/spend-controls.md).

### BYOK and Workspace Budgets

[Workspace budgets](https://openrouter.ai/docs/guides/features/workspaces/workspace-budgets.md) behave the same way and are controlled separately from guardrails. By default BYOK spend does **not** count toward them; enable **Include BYOK spend** in the workspace's Budgets settings, or set `include_byok_in_budgets` to `true` on the workspace budget endpoint.

The workspace setting applies to every interval for that workspace at once (daily, weekly, monthly, and lifetime).

### Multiple BYOK Keys for the Same Provider

You can configure multiple BYOK keys for the same provider. All matching keys are used for routing, and each key produces its own endpoint copy that is pinned to that specific key throughout the request lifecycle.

#### Priority Order

Keys are tried in the order you define, within their section. Prioritized keys are tried first, then OpenRouter endpoints, then Fallback keys. You can reorder keys via drag-and-drop on the provider detail page (e.g. [/settings/integrations/openai](https://openrouter.ai/settings/integrations/openai)). When a key fails (e.g. rate limit or error), OpenRouter falls through to the next matching key.

For example, if you have three OpenAI keys:

* **Prioritized section**: First key, Second key
* **Fallback section**: Backup key

OpenRouter will try: First key, then Second key, then OpenRouter endpoints, then Backup key.

#### Key Filters

Each BYOK key supports optional filters (shown as **This key applies to** on the key card) to control when it is used:

* **Model filter**, restrict the key to specific models (e.g. only use this key for `openai/gpt-4o`). When set, the key is only used for requests to the listed models. Other models for the same provider will skip this key.
* **API key filter**, restrict which of your OpenRouter API keys can use this BYOK key. Useful for isolating BYOK usage to specific applications or environments.
* **Member filter**, restrict which workspace members can use this BYOK key. Useful for giving different team members access to different provider accounts.

Filters are evaluated before routing. A key is only used when all of its active filters match the current request. If no filters are set, the key is available to all models, API keys, and members.

#### Managing Filters via the Management API

You can set and update all three filters programmatically using the [BYOK management endpoints](https://openrouter.ai/docs/api/api-reference/byok). The API uses these field names:

| UI filter | API field | Type | Semantics |
| - | - | - | - |
| Model filter | `allowed_models` | `string[] \| null` | Allowlist of model slugs (e.g. `["openai/gpt-4o"]`). `null` means no restriction. |
| API key filter | `allowed_api_key_hashes` | `string[] \| null` | Allowlist of OpenRouter API key hashes (the `hash` field from the [Keys API](https://openrouter.ai/docs/api/api-reference/api-keys/list-api-keys.md)). `null` means no restriction. |
| Member filter | `allowed_user_ids` | `string[] \| null` | Allowlist of user IDs (Clerk user IDs). `null` means no restriction. |

Each field accepts up to 100 entries. Omission and `null` mean different things, and omission itself means something different depending on whether you're creating or updating:

* **Create**: omitting a field means no restriction. Passing an array sets the restriction to those entries.
* **Update**: omitting a field leaves its current value unchanged — whatever restriction (or lack of one) the key already has is preserved. Passing `null` clears a previously set restriction. Passing an array replaces the restriction with those entries.
* An empty array (`[]`) is invalid for `allowed_api_key_hashes` and is rejected with a `400` error — pass `null` to clear the restriction instead, or omit the field to leave it unset (create) or unchanged (update).

**Create a BYOK key with restrictions:**

```bash theme={null}
curl -X POST https://openrouter.ai/api/v1/byok \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "provider": "openai",
    "key": "sk-...",
    "name": "Production GPT-4o Key",
    "allowed_models": ["openai/gpt-4o", "openai/gpt-4o-mini"],
    "allowed_api_key_hashes": ["f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943"],
    "allowed_user_ids": ["user_2abc123"]
  }'
```

**Update restrictions on an existing key:**

```bash theme={null}
curl -X PATCH https://openrouter.ai/api/v1/byok/11111111-2222-3333-4444-555555555555 \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "allowed_api_key_hashes": null
  }'
```

**Read back a key with restrictions:**

```bash theme={null}
curl https://openrouter.ai/api/v1/byok/11111111-2222-3333-4444-555555555555 \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY"
```

```json theme={null}
{
  "data": {
    "id": "11111111-2222-3333-4444-555555555555",
    "provider": "openai",
    "workspace_id": "550e8400-e29b-41d4-a716-446655440000",
    "label": "sk-...AbCd",
    "name": "Production GPT-4o Key",
    "disabled": false,
    "is_fallback": false,
    "is_required": false,
    "is_byok_only": false,
    "allowed_models": ["openai/gpt-4o", "openai/gpt-4o-mini"],
    "allowed_api_key_hashes": ["f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943"],
    "allowed_user_ids": ["user_2abc123"],
    "sort_order": 0,
    "created_at": "2025-08-24T10:30:00Z"
  }
}
```

**Validation rules for `allowed_api_key_hashes`:**

* Must be an array of strings (the SHA-256 `hash` values returned by the [Keys API](https://openrouter.ai/docs/api/api-reference/api-keys/list-api-keys.md)).
* Each hash must be exactly 64 lowercase hexadecimal characters. Hashes in any other format are rejected with a `400` error.
* Maximum 100 entries.
* Must contain at least one hash if provided — an empty array (`[]`) is rejected with a `400` error. Pass `null` to clear the restriction instead, or omit the field to leave it unset (create) or unchanged (update).
* Every hash must resolve to a live API key owned by your account; unknown or cross-account hashes return a `400` error.

#### Managing Shared Capacity Fallback via the Management API

The **Shared capacity fallback** setting maps to two boolean fields on the same endpoints:

| UI setting | API fields |
| - | - |
| Use shared capacity (default) | `is_required: false`, `is_byok_only: false` |
| Never use shared capacity for models this key applies to | `is_required: true` |
| Never use shared capacity for any model on this provider | `is_byok_only: true` |

Both default to `false` on create, and omitting either on update leaves the stored value unchanged. `is_byok_only` cannot be combined with `is_fallback: true`, because a fallback key only runs after shared endpoints have been tried. Sending both returns a `400` error, whether in the same request or when the stored key already has the other flag set. `is_required` and `is_byok_only` may both be `true`; in that case `is_byok_only` takes precedence and the provider is fully blocked from shared capacity.

```bash theme={null}
curl -X PATCH https://openrouter.ai/api/v1/byok/11111111-2222-3333-4444-555555555555 \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "is_byok_only": true
  }'
```

#### Combining Filters with Multiple Keys

Filters and multiple keys work together to enable flexible routing strategies. For example:

* **Key A**: OpenAI, model filter = `[openai/gpt-4o]`, Shared capacity fallback set to "Never use shared capacity for models this key applies to"
* **Key B**: OpenAI, no model filter (matches all models)

In this setup:

* Requests for `openai/gpt-4o` try **Key A** first, then **Key B** if Key A fails (shared capacity is skipped because Key A covers `openai/gpt-4o` and restricts fallback for the models it covers)
* Requests for other OpenAI models (e.g. `openai/gpt-4o-mini`) use **Key B** only, with shared capacity as fallback

#### Key Names

Each key can be given an optional name (e.g. "Production", "Team A", "GPT-4 only") to help organize keys when you have multiple keys for the same provider.

### Azure API Keys

Azure has two resource types, each using a different domain:

* **Azure AI Foundry**, resources at `*.services.ai.azure.com`. Uses the model catalog and does not require per-model deployments.
* **Azure OpenAI**, resources at `*.openai.azure.com`. Requires explicit per-model deployments.

#### Foundry Configuration (Recommended)

The simplest way to configure Azure BYOK is with a Foundry configuration. Provide your API key, resource name, and resource type:

```json lines theme={null}
[
  {
    "api_key": "your-azure-api-key",
    "resource_name": "your-resource-name",
    "resource_type": "ai_foundry"
  }
]
```

* **`api_key`**: Your Azure API key, found under "Keys and Endpoint" in the Azure portal.
* **`resource_name`**: The name of your Azure resource (the subdomain portion of your endpoint URL).
* **`resource_type`**: Either `"ai_foundry"` for Azure AI Foundry resources (`*.services.ai.azure.com`) or `"openai"` for Azure OpenAI resources (`*.openai.azure.com`). Defaults to `"openai"` if omitted.

This configuration works for all models available in your Azure resource, with no per-model setup required.

#### Per-Deployment Configuration (Legacy)

For more control, you can specify individual deployments with full endpoint URLs:

```json lines theme={null}
[
  {
    "model_slug": "mistralai/mistral-large",
    "endpoint_url": "https://example-project.openai.azure.com/openai/deployments/mistral-large/chat/completions?api-version=2024-08-01-preview",
    "api_key": "your-azure-api-key",
    "model_id": "mistral-large"
  },
  {
    "model_slug": "openai/gpt-5.2",
    "endpoint_url": "https://example-project.openai.azure.com/openai/deployments/gpt-5.2/chat/completions?api-version=2024-08-01-preview",
    "api_key": "your-azure-api-key",
    "model_id": "gpt-5.2"
  }
]
```

Each per-deployment configuration requires:

1. **`endpoint_url`**: The full deployment endpoint URL including `/chat/completions` and the API version. See the [Azure Foundry documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/model-inference/concepts/endpoints?tabs=python) for details.
2. **`api_key`**: Your Azure API key.
3. **`model_id`**: The name of your model deployment in Azure.
4. **`model_slug`**: The OpenRouter model identifier you want to use this key for.

You can mix Foundry and per-deployment configurations in the same array. Per-deployment configs take priority when a matching model slug is found.

### AWS Bedrock API Keys

To use Amazon Bedrock with OpenRouter, you can authenticate using either Bedrock API keys or traditional AWS credentials.

#### Option 1: Bedrock API Keys (Recommended)

Amazon Bedrock API keys provide a simpler authentication method. Simply provide your Bedrock API key as a string:

```lines theme={null}
your-bedrock-api-key-here
```

**Note:** Bedrock API keys are tied to a specific AWS region and cannot be used to change regions. If you need to use models in different regions, use the AWS credentials option below.

You can generate Bedrock API keys in the AWS Management Console. Learn more in the [Amazon Bedrock API keys documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/api-keys.html).

#### Option 2: AWS Credentials

Alternatively, you can use traditional AWS credentials in JSON format. This option allows you to specify the region and provides more flexibility:

```json lines theme={null}
{
  "accessKeyId": "your-aws-access-key-id",
  "secretAccessKey": "your-aws-secret-access-key",
  "region": "your-aws-region"
}
```

You can find these values in your AWS account:

1. **accessKeyId**: This is your AWS Access Key ID. You can create or find your access keys in the AWS Management Console under "Security Credentials" in your AWS account.

2. **secretAccessKey**: This is your AWS Secret Access Key, which is provided when you create an access key.

3. **region**: The AWS region where your Amazon Bedrock models are deployed (e.g., "us-east-1", "us-west-2").

Make sure your AWS IAM user or role has the necessary permissions to access Amazon Bedrock services. At minimum, you'll need permissions for:

* `bedrock:InvokeModel`
* `bedrock:InvokeModelWithResponseStream` (for streaming responses)

Example IAM policy:

```json lines theme={null}
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "bedrock:InvokeModel",
        "bedrock:InvokeModelWithResponseStream"
      ],
      "Resource": "*"
    }
  ]
}
```

For enhanced security, we recommend creating dedicated IAM users with limited permissions specifically for use with OpenRouter.

Learn more in the [AWS Bedrock Getting Started with the API](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api.html) documentation, [IAM Permissions Setup](https://docs.aws.amazon.com/bedrock/latest/userguide/security-iam.html) guide, or the [AWS Bedrock API Reference](https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html).

### Google Vertex API Keys

To use Google Vertex AI with OpenRouter, provide your Google Cloud service account key in JSON format. The key should include the standard Google Cloud service account fields, with an optional `region` for selecting the deployment region.

```json lines theme={null}
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "your-service-account@your-project.iam.gserviceaccount.com",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-service-account@your-project.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com",
  "region": "global"
}
```

You can find these values in your Google Cloud Console:

1. **Service Account Key**: Navigate to the Google Cloud Console, go to "IAM & Admin" > "Service Accounts", select your service account, and create/download a JSON key.

2. **region** (optional): Specify the region for your Vertex AI deployment. Use `"global"` to allow requests to run in any available region, or specify a specific region like `"us-central1"` or `"europe-west1"`. A `"global"` or empty region doesn't pin the key: when a request is routed to a regional endpoint, such as one on `us.openrouter.ai`, OpenRouter uses that endpoint's region instead. A specific region always takes precedence.

### Vertex Batch storage

[Batch API](https://openrouter.ai/docs/batch-quickstart.md) Vertex BYOK stages input and reads Vertex output from a bucket in your own project. The default is bucketless: omit `bucket`, and OpenRouter creates `or-batch-<project>-<region>` on the first batch in each region — uniform bucket-level access, public access prevention, 30-day object lifecycle, soft delete disabled — and reuses it afterwards. Synchronous requests ignore this field.

For production, grant the key service account a custom IAM role at project scope with only the permissions OpenRouter uses:

* `storage.buckets.create`, `storage.buckets.get`, and `storage.buckets.list`;
* `storage.objects.create`, `storage.objects.get`, `storage.objects.list`, and `storage.objects.delete` (delete enables retry-safe overwrite of staged input).

Project scope is required because OpenRouter creates the bucket and verifies project ownership. For the simplest setup, `roles/storage.admin` includes these permissions but also grants additional Storage administration capabilities.

To manage storage yourself, set `bucket` to a bucket name or URI (`"my-batch-bucket"` or `"gs://my-batch-bucket"`; object paths like `"gs://my-batch-bucket/prefix"` are rejected). It must belong to the key's project. OpenRouter leaves location compatibility to Vertex for these user-managed overrides. Grant:

* the key service account: object read/write, bucket get, and bucket list on the project (the list is how OpenRouter verifies ownership);
* the project's Vertex AI service agent (`service-<PROJECT_NUMBER>@gcp-sa-aiplatform.iam.gserviceaccount.com`): object access and bucket metadata access, since Vertex reads input and writes prediction shards as this agent. Create the agent before the first batch if it does not exist yet:

```bash lines theme={null}
gcloud beta services identity create --service=aiplatform.googleapis.com --project=YOUR_PROJECT
```

Make sure your service account has the necessary Vertex AI permissions:

* `aiplatform.endpoints.predict` for synchronous requests
* `aiplatform.batchPredictionJobs.*` for Batch API jobs (OpenRouter uses `create` and `get`)

The example `roles/aiplatform.user` binding below includes these permissions.

Example IAM policy:

```json lines theme={null}
{
  "bindings": [
    {
      "role": "roles/aiplatform.user",
      "members": [
        "serviceAccount:your-service-account@your-project.iam.gserviceaccount.com"
      ]
    }
  ]
}
```

Learn more in the [Google Cloud Vertex AI documentation](https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform) and [Service Account setup guide](https://cloud.google.com/iam/docs/service-accounts-create).

### Debugging BYOK Issues

If your BYOK requests fail, you can debug the issue by viewing provider responses on the Activity page.

#### Viewing Provider Responses

1. Navigate to your [Activity page](https://openrouter.ai/activity) in the OpenRouter dashboard.
2. Find the generation you want to debug and click on it to view the details.
3. Click "View Raw Metadata" to display the raw metadata in JSON format.
4. In the JSON, look for the `provider_responses` field, which shows the HTTP status code from each provider attempt.

The `provider_responses` field contains an array of responses from each provider attempted during routing. Each entry includes the provider name and HTTP status code, which can help you identify permission issues, rate limits, or other errors.

#### Common BYOK Error Codes

When debugging BYOK issues, look for these common HTTP status codes in the provider responses:

* **400 Bad Request**: The request format was invalid for the provider. Check that your model and key configuration is correct.
* **401 Unauthorized**: Your API key is invalid or has been revoked. Verify your key in your provider's console.
* **403 Forbidden**: Your API key doesn't have permission to access the requested resource. For AWS Bedrock, ensure your IAM policy includes the required `bedrock:InvokeModel` permissions. For Google Vertex, verify your service account has `aiplatform.endpoints.predict` for synchronous requests and the required `aiplatform.batchPredictionJobs.*` permissions for Batch API jobs.
* **429 Too Many Requests**: You've hit the rate limit on your provider account. Check your provider's rate limit settings or wait before retrying.
* **500 Server Error**: The provider encountered an internal error. This is typically a temporary issue on the provider's side.

#### Debugging Permission Issues

If you encounter 403 errors with BYOK, the issue is often related to permissions. For AWS Bedrock, verify that:

1. Your IAM user/role has the `bedrock:InvokeModel` and `bedrock:InvokeModelWithResponseStream` permissions.
2. The model you're trying to access is enabled in your AWS account for the specified region.
3. Your credentials (access key and secret) are correct and active.

For Google Vertex, verify that your service account has `aiplatform.endpoints.predict` for synchronous requests and the required `aiplatform.batchPredictionJobs.*` permissions for Batch API jobs.

You can test your provider permissions directly in the provider's console (AWS Console, Google Cloud Console, etc.) by attempting to invoke the model there first.
