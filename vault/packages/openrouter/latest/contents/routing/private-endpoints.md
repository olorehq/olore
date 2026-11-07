> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Private Endpoints

> Bring your own model endpoints to OpenRouter, scoped to approved users and organizations

> [!NOTE]
>
> Private Endpoints are an add-on to the Enterprise Plan. To enable them for your organization, talk to your OpenRouter account representative or visit [openrouter.ai/enterprise/form](https://openrouter.ai/enterprise/form). Once enabled, organization admins add and manage endpoints from [Settings > Private Endpoints](https://openrouter.ai/settings/private-endpoints). Private providers are included with Private Endpoints, so endpoints can run under your own private providers as well as providers in the OpenRouter catalog.

A private endpoint routes a catalog model to your own dedicated or fine-tuned deployment of it, alongside the public providers you already use. OpenRouter adds your deployment to that model's provider list rather than creating a new model, so your team keeps calling the same slug through the same API.

Only the users and organizations you approve can see or call a private endpoint. It does not appear in public model lists, rankings, search, charts, or benchmarks.

## How it works

Once a private endpoint is active:

* Approved users and organizations call it through the standard OpenRouter API (chat completions and responses), the same way they call public models.
* The model slug works with [Model Fallbacks](https://openrouter.ai/docs/guides/routing/model-fallbacks.md), [Provider Selection](https://openrouter.ai/docs/guides/routing/provider-selection.md), and the other routing features.
* For callers with access, OpenRouter prefers the private endpoint. Public providers for the model stay available as fallbacks if you list them.

## Adding a private endpoint

A private endpoint must meet two requirements:

* It is hosted by a provider that OpenRouter supports for [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md), since requests are authenticated with your own provider key.
* It serves a model that already exists in the OpenRouter catalog, with the same request and response shape and the same behavior as that model. The endpoint inherits the model's slug and capabilities.

Organization admins on the Enterprise Plan add private endpoints from [Settings > Private Endpoints](https://openrouter.ai/settings/private-endpoints). Each endpoint goes through four steps:

1. **Blueprint.** Pick the catalog model your endpoint serves and the BYOK provider that hosts it.
2. **Connect.** Enter the HTTPS base URL of your endpoint and the upstream model or deployment ID it serves. You can also set pricing for cost reporting and declare whether the endpoint retains prompts (see [ZDR](https://openrouter.ai/docs/guides/features/zdr.md)).
3. **Test.** OpenRouter sends requests to your endpoint using the provider key saved under [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) in one of your workspaces. The checks confirm that the key is accepted, the response is OpenAI-compatible, streaming works, usage fields come back, and the served model ID matches what you entered.
4. **Activate.** Once the checks pass, activation makes the endpoint routable for workspaces in your organization.

Until it is activated, an endpoint is a draft: hidden from your workspaces and not routable. You can leave the wizard and finish setup later from the Private Endpoints list.

Requests to a private endpoint are authenticated with your own provider key, so each workspace that calls it needs a BYOK key for that provider.

## Manage endpoints with the API or Terraform

You can also manage private endpoints programmatically, which helps when you run many of them or keep configuration in code. The [Private Endpoints API](https://openrouter.ai/docs/api/api-reference/private-endpoints/list-private-endpoints.md) covers the same lifecycle as the wizard: create, validate, activate, update pricing, disable, enable, and delete.

Requests are authenticated with an organization [Management API key](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md). Keys created on a personal account are rejected, and the organization must have Private Endpoints enabled.

The wizard steps map to these calls:

1. `POST /api/v1/private-endpoints` creates a draft from `model_permaslug`, `provider_slug`, `upstream_model_id`, and, for providers that need it, `base_url`. You can also set `pricing`, `declared_zdr`, and `declared_region`.
2. `POST /api/v1/private-endpoints/{id}/validate` runs the Test checks with the BYOK key saved in the workspace you pass as `workspace_id`. The workspace must belong to your organization and have a key for the endpoint's provider.
3. `POST /api/v1/private-endpoints/{id}/activate` makes a validated draft routable.

To do all three in one request, include `activate: { "workspace_id": "..." }` in the create body:

```bash theme={null}
curl https://openrouter.ai/api/v1/private-endpoints \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: gpt-4o-prod" \
  -d '{
    "model_permaslug": "openai/gpt-4o-2024-08-06",
    "provider_slug": "openai",
    "base_url": "https://api.openai.com/v1",
    "upstream_model_id": "gpt-4o-2024-08-06",
    "pricing": { "prompt": "0.0000025", "completion": "0.00001" },
    "activate": { "workspace_id": "<workspace-id>" }
  }'
```

If validation fails, the draft is kept and returned with the failed checks. Fix it with `PATCH /api/v1/private-endpoints/{id}` (the upstream fields can change only on a draft), then call `/validate` and `/activate` again instead of creating a new endpoint.

Send an `Idempotency-Key` header to make create retry-safe. Repeating a request with the same key returns the endpoint the first request created; reusing the key with a different body returns `422 idempotency_key_reused`.

After activation, `PATCH /api/v1/private-endpoints/{id}` with `pricing` updates the reported rates, and `declared_zdr` or `declared_region` updates the endpoint's data-policy declarations; routing applies the change to subsequent requests once the private catalog republishes, and the endpoint keeps its validation. `base_url` and `upstream_model_id` can't change after activation: the request returns `409 already_active`, so delete and re-create the endpoint instead. `/disable` and `/enable` stop or resume routing. `DELETE /api/v1/private-endpoints/{id}` removes an endpoint and stops routing to it. Pass `draft_only=true` to refuse the delete (409) if the endpoint has ever been activated.

### Terraform

The [OpenRouter Terraform provider](https://openrouter.ai/docs/guides/overview/terraform.md) includes an `openrouter_private_endpoint` resource built on the same API:

```hcl theme={null}
resource "openrouter_private_endpoint" "gpt4o" {
  model_permaslug   = "openai/gpt-4o-2024-08-06"
  provider_slug     = "openai"
  base_url          = "https://api.openai.com/v1"
  upstream_model_id = "gpt-4o-2024-08-06"
  pricing           = { prompt = "0.0000025", completion = "0.00001" }
  activate          = { workspace_id = openrouter_workspace.production.id }
}
```

`terraform apply` creates, validates, and activates the endpoint. Changing `pricing` updates it in place; changing the model, provider, base URL, upstream model ID, declarations, or `activate` workspace replaces it. `terraform destroy` disables and deletes it, and `terraform import openrouter_private_endpoint.gpt4o <endpoint-id>` adopts an endpoint that already exists.

## Private providers

`provider_slug` names the provider an endpoint runs under. For a deployment hosted by a provider in the OpenRouter catalog, use that provider's slug (`openai`, `anthropic`, and so on). For a deployment you host yourself, or one with no public provider, create a private provider first and use its slug.

A private provider records a name, a slug, and an OpenAI-compatible HTTPS `base_url`. New endpoints under it start with that base URL, so you only set one on an endpoint that differs. The provider is visible only to your organization, and other organizations can use the same name for their own private providers without seeing yours. Because only your organization can route to it, OpenRouter records a newly created private provider as retaining no prompts, training on none, and publishing none, so its endpoints stay eligible under every data-policy setting and guardrail your organization applies; OpenRouter does not verify the upstream's actual data handling. A private provider created before this policy existed keeps the policy it was created with, and the dashboard and management API no longer edit it; ask OpenRouter support to change it. An explicit OpenRouter override on an endpoint always wins, and video endpoints are classified as retaining.

Organization admins add private providers from [Settings > Private Endpoints](https://openrouter.ai/settings/private-endpoints), or with the [Private Providers API](https://openrouter.ai/docs/api/api-reference/private-providers/list-private-providers.md) using the same organization Management API key:

```bash theme={null}
curl https://openrouter.ai/api/v1/private-providers \
  -H "Authorization: Bearer $OPENROUTER_MANAGEMENT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Acme",
    "slug": "acme",
    "display_name": "Acme",
    "base_url": "https://inference.example.com/v1"
  }'
```

Then create endpoints with `"provider_slug": "acme"`. The slug works wherever a provider slug is accepted: BYOK keys, and `provider.order`, `only`, and `ignore` on a request.

`GET`, `PATCH`, and `DELETE /api/v1/private-providers/{slug}` read, edit, and remove a provider. The name and slug are fixed at creation and may not match a public provider. `display_name` and `base_url` can be changed at any time, and a new `base_url` applies only to endpoints created after the change. Deleting a provider returns `409 provider_has_endpoints` while any endpoint still runs under it, so delete the endpoints first. Each organization can have up to 5 private providers.

## Endpoint limit

Each organization can have up to 10 private endpoints by default. Every endpoint you have created counts toward the limit, including drafts.

If you need more than 10, talk to your OpenRouter account representative about raising the limit for your organization.

## In-Region Routing

A private endpoint is eligible for in-region routing when OpenRouter can derive a region from its base URL, or when you declare a data region, during setup or later through `PATCH /api/v1/private-endpoints/{id}`. Endpoints with neither route on the global `openrouter.ai` domain. See the [In-Region Routing guide](https://openrouter.ai/docs/guides/features/in-region-routing.md#byok-with-in-region-routing) for supported providers.
