> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Zero Data Retention

> How OpenRouter gives you control over your data

> [!NOTE]
>
> **Planned update (October 27, 2026):** OpenRouter will screen all inference requests, including ZDR traffic, for child sexual abuse material (CSAM) in flight. Content flagged as potential CSAM may be retained for human review, reporting, and preservation where required by law. This does not permit general retention or use for model training. [Read the announcement](https://openrouter.ai/blog/announcements/csam-screening). We're updating this page and our related terms.

Zero Data Retention (ZDR) means no routine storage of prompts or responses after processing, apart from the CSAM exception described on this page.

## Data policy tiers

OpenRouter describes every endpoint's data policy with three tiers:

| Tier | What it means | Is your data trained on? |
| - | - | - |
| **ZDR** | No routine storage after processing, as described on this page. | No |
| **Safety Retention** | OpenRouter or a provider may retain prompts and responses from any request, whether flagged or not, only to detect, investigate, and prevent abuse. | No |
| **Retention and Training** | Data may be stored and used for training under the applicable provider policy. | May be, under the provider's policy |

Safety Retention limits why data can be kept. It does not require a request to be flagged before it can be stored.

## Allowing or excluding Safety Retention

When ZDR is enforced in your privacy settings or a guardrail, you choose whether Safety Retention endpoints are also allowed. The choice is separate for **Google** models and **All other models**, the two groups where Safety Retention endpoints exist today.

* **Allow Safety Retention:** ZDR-enforced requests can use ZDR endpoints and Safety Retention endpoints.
* **ZDR only:** ZDR-enforced requests use ZDR endpoints only. Safety Retention endpoints are excluded, so some models may be unavailable.

Set this in your [privacy settings](https://openrouter.ai/settings/privacy) or in a guardrail's settings. A guardrail can only be stricter than your account setting: if your account is set to ZDR only, a guardrail can't allow Safety Retention. If you haven't chosen, self-serve accounts allow Safety Retention and enterprise accounts use ZDR only.

In the API, `zdr: true` on a request follows the same account and guardrail choice. The guardrail fields are `allow_safety_retention_google` and `allow_safety_retention_other` in the [Guardrails API](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail.md).

When ZDR isn't enforced, Safety Retention endpoints are available like any other endpoint that doesn't train on your data.

OpenRouter has [privacy settings](https://openrouter.ai/settings/privacy) that, when enabled, only allow you to route to endpoints that have a Zero Data Retention policy. You can enforce ZDR globally, per model group, per guardrail, or per request.

Providers that do not retain your data are also unable to train on your data. However we do have some endpoints & providers who do not train on your data but *do* retain it (e.g. to scan for abuse or for legal reasons). OpenRouter gives you controls over both of these policies.

> [!WARNING]
>
> ZDR enforcement only applies to provider routing for inference requests. It does not apply to [plugins](https://openrouter.ai/docs/guides/features/plugins.md) and tools you choose to enable, such as [web search](https://openrouter.ai/docs/guides/features/server-tools/web-search.md). These may be operated by third-party services with their own data retention policies. Review the data policies of any plugins or tools you enable if you have strict data retention requirements.
>
> One tool-level rule applies: when ZDR is enforced in your account privacy settings or a guardrail, the Web Search and Web Fetch server tools and the Web Search plugin reject the Firecrawl engine. See [Privacy and regional availability](https://openrouter.ai/docs/guides/features/server-tools.md#privacy-and-regional-availability) for each server tool's execution path and backend policy.

## How OpenRouter Manages Data Policies

OpenRouter works with providers to understand each of their data policies and structures the policy data in a way that gives you control over which providers you want to route to.

Note that a provider's general policy may differ from the specific policy for a given endpoint. OpenRouter keeps track of the specific policy for each endpoint, works with providers to keep these policies up to date, and in some cases creates special agreements with providers to ensure data retention or training policies that are more privacy-focused than their default policies.

> [!NOTE]
>
> If OpenRouter is not able to establish or ascertain a clear policy for a provider or endpoint, we take a conservative stance and assume that the endpoint both retains and trains on data and mark it as such.

A full list of providers and their data policies can be found [here](https://openrouter.ai/docs/guides/privacy/provider-logging.md#data-retention--logging). Note that this list shows the default policy for each provider; if there is a particular endpoint that has a policy that differs from the provider default, it may not be available if "ZDR Only" is enabled.

## Per-Model-Group ZDR Enforcement

Rather than a single global toggle, OpenRouter lets you enforce ZDR independently for different model groups. This is available in both your [account-level privacy settings](https://openrouter.ai/settings/privacy) and in [guardrails](https://openrouter.ai/docs/guides/features/guardrails.md).

The five model group scopes are:

| Model group | Effect when enabled |
| - | - |
| **Anthropic** | Removes first-party Anthropic endpoints (Bedrock and Vertex remain available) |
| **OpenAI** | Removes first-party OpenAI endpoints (Azure remains available) |
| **Google** | Removes AI Studio endpoints. Vertex endpoints that use Safety Retention remain available only if Safety Retention is allowed (see [Google Safety Retention](#google-safety-retention)) |
| **SpaceXAI** | Removes non-ZDR SpaceXAI endpoints (the ZDR SpaceXAI endpoint remains available) |
| **All other models** | Removes all other non-ZDR endpoints |

> [!TIP]
>
> **When to use per-model-group ZDR**
>
> Per-model-group ZDR is useful when you only need ZDR enforcement for certain model groups. For example, you may want to enforce ZDR for all other models while keeping first-party Anthropic, OpenAI, and Google endpoints available without the ZDR restriction.

### Account-level settings

In your [privacy settings](https://openrouter.ai/settings/privacy), each model group has its own toggle. Enabling a scope restricts all your requests to ZDR endpoints for that model group.

### Guardrail-level settings

When creating or editing a [guardrail](https://openrouter.ai/docs/guides/features/guardrails.md), you can set ZDR independently for each model group. This lets you apply different ZDR policies to different API keys or organization members.

In the API, these are represented as separate fields on the guardrail object:

| Field | Description |
| - | - |
| `enforce_zdr_anthropic` | Enforce ZDR for Anthropic endpoints |
| `enforce_zdr_openai` | Enforce ZDR for OpenAI endpoints |
| `enforce_zdr_google` | Enforce ZDR for Google endpoints |
| `enforce_zdr_xai` | Enforce ZDR for SpaceXAI endpoints |
| `enforce_zdr_other` | Enforce ZDR for all other model endpoints |

> [!NOTE]
>
> The legacy `enforce_zdr` field is deprecated. When provided, its value is copied into any per-model-group fields that are not explicitly set on the request. Use the per-model-group fields directly for new integrations.

## Google Safety Retention

Starting October 18, 2026, Google requires Safety Retention for Google models served through Vertex. With Safety Retention, Google doesn't retain prompts by default, but it may retain prompts that its safety classifiers flag, for up to 90 days, for abuse monitoring. Google doesn't use retained prompts for training. These endpoints don't meet a strict Zero Data Retention requirement.

When you enforce ZDR for Google models, you choose how OpenRouter treats these endpoints in your [privacy settings](https://openrouter.ai/settings/privacy) or on a guardrail:

| Choice | Effect |
| - | - |
| **ZDR only** | Excludes endpoints that use Safety Retention. Most Google models become unavailable. |
| **Allow Safety Retention** | Lets ZDR-enforced requests use endpoints that use Safety Retention. |

If you don't choose, enterprise accounts default to **ZDR only** and all other accounts default to **Allow Safety Retention**. On guardrails, use `allow_safety_retention_google` for Google models and `allow_safety_retention_other` for other models that use Safety Retention, such as open-weight models on Vertex. A guardrail can't allow Safety Retention when your account setting is **ZDR only**.

On a model page, the provider details for an endpoint that uses Safety Retention show **ZDR compatible: Only with Safety Retention allowed**.

If your own Google Cloud agreement includes zero data retention, you can use Vertex through your own key with **ZDR only**. Declare ZDR on your [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) key. Requests through that key are treated as ZDR. See [Declaring ZDR on a Key](https://openrouter.ai/docs/guides/overview/auth/byok.md#declaring-zdr-on-a-key).

## Per-Request ZDR Enforcement

In addition to account-level and guardrail-level settings, you can enforce Zero Data Retention on a per-request basis using the `zdr` parameter in your API calls.

The request-level `zdr` parameter operates as an "OR" with your account-wide and guardrail ZDR settings. If any is enabled, ZDR enforcement will be applied. This means the per-request parameter can only be used to ensure ZDR is enabled for a specific request, not to override or disable account-wide or guardrail enforcement.

This is useful for customers who don't want to globally enforce ZDR but need to ensure specific requests only route to ZDR endpoints.

### Usage

Include the `zdr` parameter in your provider preferences:

```json lines theme={null}
{
  "model": "gpt-4",
  "messages": [...],
  "provider": {
    "zdr": true
  }
}
```

When `zdr` is set to `true`, the request will only be routed to ZDR endpoints, plus Safety Retention endpoints if your settings allow them (see [Allowing or excluding Safety Retention](#allowing-or-excluding-safety-retention)). When `zdr` is `false` or not provided, ZDR enforcement still applies if enabled in your account or guardrail settings.

## ZDR with BYOK Keys

By default, a [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) key follows the same ZDR rules as OpenRouter credits. If your own provider agreement includes zero data retention, you can declare that on the key. ZDR enforcement then allows requests through that key even when the shared endpoint retains prompts. The declaration does not cover video generation. See [Declaring ZDR on a Key](https://openrouter.ai/docs/guides/overview/auth/byok.md#declaring-zdr-on-a-key).

## Caching

Some endpoints/models provide implicit caching of prompts. This keeps repeated prompt data in an in-memory cache in the provider's datacenter, so that the repeated part of the prompt does not need to be re-processed. This can lead to considerable cost savings.

OpenRouter has taken the stance that in-memory caching of prompts is *not* considered "retaining" data, and we therefore allow endpoints/models with implicit caching to be hit when a ZDR routing policy is in effect.

## ZDR for Private Endpoints

A [private endpoint](https://openrouter.ai/docs/guides/routing/private-endpoints.md) connects a catalog model to a deployment you operate in your own provider account, authenticated with your [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) key. Only organizations granted private access can route to it. OpenRouter has no view into your agreement with that upstream, so the retention classification comes from a declaration you make when you create or edit the private endpoint.

### Declaration states

| Declaration | What it records | Routing when ZDR is required |
| - | - | - |
| **Not declared** | No statement about the upstream's retention. | Treated as retaining. The private endpoint is not eligible. |
| **Declared ZDR** | Your attestation that the upstream does not retain prompts or completions. | The private endpoint stays in your ZDR routing pool. |
| **Declared non-ZDR** | Your attestation that the upstream retains data. | Treated as retaining. The private endpoint is not eligible. |

"ZDR is required" means any enforcement path described above: the account-level privacy setting, a model-group or guardrail ZDR setting, or `provider.zdr` on the request.

### Not declared

A private endpoint does not inherit the data policy of any public endpoint or provider, even when it connects to the same upstream service. A new private endpoint with no declaration uses the conservative unverified fallback described in [How OpenRouter Manages Data Policies](#how-openrouter-manages-data-policies): OpenRouter treats it as retaining, so it is not eligible for any request that requires ZDR.

### Declared ZDR

Declaring ZDR keeps the private endpoint in your organization's ZDR routing pool. Every other routing constraint still applies: the requesting organization must hold private access to the endpoint, the endpoint must be available for the requested model, and provider preferences, guardrails, and other data-policy settings are evaluated as usual. The declaration only changes the retention classification. It does not add the private endpoint to the ZDR routing pool of any organization without private access, and it does not affect the ZDR eligibility of the public endpoints for the same model.

### Declared non-ZDR

Declaring non-ZDR records an explicit attestation that the upstream retains data. Under a ZDR requirement it routes the same way as **Not declared**. The difference is what your audit trail records: **Declared non-ZDR** is known and attested, **Not declared** is unknown.

### Existing private endpoints

A private endpoint created before this setting existed keeps its current classification and behaves as it did. Editing its declaration applies the rules above, subject to the override precedence below.

> [!NOTE]
>
> **Overrides and attestations**
>
> An explicit OpenRouter data-policy override set by our team remains authoritative over your declaration. If OpenRouter has assigned a specific data policy to your private endpoint, that policy decides eligibility regardless of what you declared.
>
> A declaration is your attestation about your agreement with the upstream. OpenRouter records it and routes on it, and does not independently verify the upstream's contractual behavior.

## OpenRouter's Retention Policy

For inference content covered by OpenRouter's ZDR policy, we do not retain prompts or responses after processing, except when you explicitly choose to have us store them or when retention is needed for CSAM review, reporting, and related legal preservation. CSAM screening will also apply to requests covered by OpenRouter's ZDR policy. See [CSAM Screening Across OpenRouter](https://openrouter.ai/blog/announcements/csam-screening).

## Zero Retention Endpoints

The following endpoints are eligible when ZDR is enforced. Note that this list is also available programmatically via [https://openrouter.ai/api/v1/endpoints/zdr](https://openrouter.ai/api/v1/endpoints/zdr). It is automatically updated when there are changes to a provider's data policy. It also includes Safety Retention endpoints, which are used only if you [allow Safety Retention](#allowing-or-excluding-safety-retention). The [provider logging](https://openrouter.ai/docs/guides/privacy/provider-logging.md#data-retention--logging) table shows which providers use Safety Retention.
