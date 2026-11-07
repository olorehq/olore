> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# API Changelog

> Changes to the OpenRouter API, generated from the OpenAPI specification on every release.

Entries on this page are generated automatically from [OpenAPI specification](https://openrouter.ai/docs/api_reference/overview.md) diffs when releases ship. Breaking changes are reviewed by a human before publication. See [API Versioning](https://openrouter.ai/docs/api_reference/versioning.md) for what counts as a breaking change and how deprecations are announced. Endpoint paths are shown relative to the API base URL (`https://openrouter.ai/api/v1`).

**October 29, 2026**

## Breaking changes

* `UpdatePrivateEndpointRequest`: required `upstream_model_id` property removedNo action needed
  * Used by [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-private-endpoint)
  * **Migration: no action.** `PATCH /private-endpoints/{id}` is now a merge patch over every field an owner controls (`pricing`, `declared_parameters`, `settings`, and the draft-only upstream fields), so no single field is required and only the keys you send change. A request that still sends `upstream_model_id` is accepted on a draft endpoint; on an active endpoint it returns 409 `already_active`, as before. `PUT /private-endpoints/{id}/pricing` and `PUT /private-endpoints/{id}/parameters` were deprecated aliases of this route and have since been removed; send `pricing` or `declared_parameters` to `PATCH /private-endpoints/{id}` instead.

## New endpoints

* [`GET /private-providers`](https://openrouter.ai/docs/api/api-reference/private-providers/list-private-providers): List private providers
* [`POST /private-providers`](https://openrouter.ai/docs/api/api-reference/private-providers/create-a-private-provider): Create a private provider
* [`GET /private-providers/{slug}`](https://openrouter.ai/docs/api/api-reference/private-providers/get-a-private-provider): Get a private provider
* [`PATCH /private-providers/{slug}`](https://openrouter.ai/docs/api/api-reference/private-providers/update-a-private-provider): Update a private provider
* [`DELETE /private-providers/{slug}`](https://openrouter.ai/docs/api/api-reference/private-providers/delete-a-private-provider): Delete a private provider

## Modified endpoints

* [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-private-endpoint): description updated
* [`PUT /private-endpoints/{id}/parameters`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-supported-parameters-deprecated): deprecated property\_added; description updated
* [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing-deprecated): deprecated property\_added; description updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated
* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): description updated

## New schemas

* `CreatePrivateProviderRequest`
  * Used by [`POST /private-providers`](https://openrouter.ai/docs/api/api-reference/private-providers/create-a-private-provider)
* `PrivateEndpointQuantization`

  **5 endpoints using this schema**

  * [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint)
  * [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-private-endpoint)
  * [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
  * [`PUT /private-endpoints/{id}/parameters`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-supported-parameters-deprecated)
  * [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing-deprecated)
* `PrivateEndpointReasoningReturnMechanism`

  **5 endpoints using this schema**

  * [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint)
  * [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-private-endpoint)
  * [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
  * [`PUT /private-endpoints/{id}/parameters`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-supported-parameters-deprecated)
  * [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing-deprecated)
* `PrivateEndpointSettings`

  **4 endpoints using this schema**

  * [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint)
  * [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-private-endpoint)
  * [`PUT /private-endpoints/{id}/parameters`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-supported-parameters-deprecated)
  * [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing-deprecated)
* `PrivateProvider`

  **4 endpoints using this schema**

  * [`GET /private-providers`](https://openrouter.ai/docs/api/api-reference/private-providers/list-private-providers)
  * [`GET /private-providers/{slug}`](https://openrouter.ai/docs/api/api-reference/private-providers/get-a-private-provider)
  * [`PATCH /private-providers/{slug}`](https://openrouter.ai/docs/api/api-reference/private-providers/update-a-private-provider)
  * [`POST /private-providers`](https://openrouter.ai/docs/api/api-reference/private-providers/create-a-private-provider)
* `PrivateProviderDataPolicy`
  * Used by [`POST /private-providers`](https://openrouter.ai/docs/api/api-reference/private-providers/create-a-private-provider)
* `UpdatePrivateEndpointSettingsRequest`
  * Used by [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-private-endpoint), [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
* `UpdatePrivateProviderRequest`
  * Used by [`PATCH /private-providers/{slug}`](https://openrouter.ai/docs/api/api-reference/private-providers/update-a-private-provider)

## Modified schemas

* `CreatePrivateEndpointRequest`: new property `settings`
  * Used by [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
* `PrivateEndpoint`: example modified; new property `settings` (always present)

  **4 endpoints using this schema**

  * [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint)
  * [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-private-endpoint)
  * [`PUT /private-endpoints/{id}/parameters`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-supported-parameters-deprecated)
  * [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing-deprecated)
* `UpdatePrivateEndpointRequest`:
  * description updated
  * example property\_added
  * new property `declared_parameters`
  * new property `pricing`
  * new property `settings`
  * Used by [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-private-endpoint)
* `CreatePrivateProviderRequest`: minLength property\_added; maxLength property\_added; pattern property\_added
  * Used by [`POST /private-providers`](https://openrouter.ai/docs/api/api-reference/private-providers/create-a-private-provider)
* `PrivateProvider`: minLength property\_added; property `prompt_retention_days` updated; description updated

  **4 endpoints using this schema**

  * [`GET /private-providers`](https://openrouter.ai/docs/api/api-reference/private-providers/list-private-providers)
  * [`GET /private-providers/{slug}`](https://openrouter.ai/docs/api/api-reference/private-providers/get-a-private-provider)
  * [`PATCH /private-providers/{slug}`](https://openrouter.ai/docs/api/api-reference/private-providers/update-a-private-provider)
  * [`POST /private-providers`](https://openrouter.ai/docs/api/api-reference/private-providers/create-a-private-provider)
* `PrivateProviderDataPolicy`: maximum property\_added; minimum property\_added
  * Used by [`POST /private-providers`](https://openrouter.ai/docs/api/api-reference/private-providers/create-a-private-provider)
* `UpdatePrivateProviderRequest`: minLength property\_added; property `prompt_retention_days` updated; maxLength property\_added
  * Used by [`PATCH /private-providers/{slug}`](https://openrouter.ai/docs/api/api-reference/private-providers/update-a-private-provider)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **14 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `ProviderOptions`: new property `kt`

  **14 endpoints using this schema**

  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `JevRouterPlugin`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**October 28, 2026**

## Breaking changes

* `ObservabilityS3Destination.config.roleArn`: pattern narrowed from `^arn:aws(?:-[a-z]+)*:iam::\d{12}:role\/[\w+=,.@/-]{1,512}$` to `^arn:aws:iam::\d{12}:role\/[\w+=,.@/-]{1,512}$`Action required

  * **Migration: `roleArn` accepts only roles in the commercial AWS partition (`arn:aws:iam::`).** OpenRouter assumes your role from the commercial partition, which cannot assume roles in AWS GovCloud (`arn:aws-us-gov`) or China (`arn:aws-cn`), so destinations with those ARNs never delivered traces. `POST` and `PATCH` requests with such an ARN now fail validation; recreate the destination with a role in the commercial partition.
  * **Migration: the role's trust policy must require the destination's external ID.** In the same release, IAM role destinations started verifying that the trust policy carries an `sts:ExternalId` condition. Test Connection, Send Trace, and live delivery return 403 for a role that accepts any external ID; add the condition to the trust policy and the role is accepted within 5 minutes.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ChatDeveloperMessage.configuration_update`: additionalProperties `false` object removedNo action needed
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * **Migration: no action.** `configuration_update` on `ChatDeveloperMessage` is now a reference to the named `ConfigurationUpdate` schema instead of an inline object. The accepted value is unchanged: omit it, send `null`, or send an object with `reasoning`. Only generated SDK type names move; raw HTTP requests are unaffected.
* `ChatDeveloperMessage.configuration_update`: properties `reasoning` object removedNo action needed
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * **Migration: no action.** `configuration_update` on `ChatDeveloperMessage` is now a reference to the named `ConfigurationUpdate` schema instead of an inline object. The accepted value is unchanged: omit it, send `null`, or send an object with `reasoning`. Only generated SDK type names move; raw HTTP requests are unaffected.
* `ChatDeveloperMessage.configuration_update`: required `reasoning` property removedNo action needed
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * **Migration: no action.** `configuration_update` on `ChatDeveloperMessage` is now a reference to the named `ConfigurationUpdate` schema instead of an inline object. The accepted value is unchanged: omit it, send `null`, or send an object with `reasoning`. Only generated SDK type names move; raw HTTP requests are unaffected.
* `ChatSystemMessage.configuration_update`: additionalProperties `false` object removedNo action needed
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * **Migration: no action.** `configuration_update` on `ChatSystemMessage` is now a reference to the named `ConfigurationUpdate` schema instead of an inline object. The accepted value is unchanged: omit it, send `null`, or send an object with `reasoning`. Only generated SDK type names move; raw HTTP requests are unaffected.
* `ChatSystemMessage.configuration_update`: properties `reasoning` object removedNo action needed
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * **Migration: no action.** `configuration_update` on `ChatSystemMessage` is now a reference to the named `ConfigurationUpdate` schema instead of an inline object. The accepted value is unchanged: omit it, send `null`, or send an object with `reasoning`. Only generated SDK type names move; raw HTTP requests are unaffected.
* `ChatSystemMessage.configuration_update`: required `reasoning` property removedNo action needed
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * **Migration: no action.** `configuration_update` on `ChatSystemMessage` is now a reference to the named `ConfigurationUpdate` schema instead of an inline object. The accepted value is unchanged: omit it, send `null`, or send an object with `reasoning`. Only generated SDK type names move; raw HTTP requests are unaffected.

## Modified endpoints

* [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint): now returns 400 `parameters_invalid` when `declared_parameters` includes `tool_choice` without `tools`, matching `PUT /private-endpoints/{id}/parameters`; the create response does not echo `declared_parameters` or `tested_parameters`, read them back from `GET /private-endpoints/{id}`
* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): request schema updated
* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): request schema updated
* [`GET /vault/interns/{internId}/connections`](https://openrouter.ai/docs/api/api-reference/vault/list-the-connections-an-intern-can-use):
  * description updated
  * response schema updated
  * response now always includes `routing`
  * response now always includes `routing_text`
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## New response codes

* [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties): now returns `401`
* [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties): now returns `404`
* [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties): now returns `408`
* [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties): now returns `409`
* [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties): now returns `429`
* [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails): now returns `408`
* [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails): now returns `409`
* [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails): now returns `429`

## New schemas

* `ConfigurationUpdate`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `VaultRoutingTable`
  * Used by [`GET /vault/interns/{internId}/connections`](https://openrouter.ai/docs/api/api-reference/vault/list-the-connections-an-intern-can-use)

## Modified schemas

* `ChatDeveloperMessage`: new union variant added; type property\_removed
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `ChatSystemMessage`: new union variant added; type property\_removed
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `WebSearchStatus`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **14 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `ProviderOptions`: new property `particle-ai`

  **14 endpoints using this schema**

  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `CreateGuardrailRequest`: new property `enforce_first_party_harness_models`
  * Used by [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `Guardrail`: new property `enforce_first_party_harness_models`

  **4 endpoints using this schema**

  * [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
  * [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
  * [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
  * [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `OrganizationSettings`: description updated
  * Used by [`GET /organization/settings`](https://openrouter.ai/docs/api/api-reference/organization/get-organization-settings), [`PATCH /organization/settings`](https://openrouter.ai/docs/api/api-reference/organization/update-organization-settings)
* `UpdateGuardrailRequest`: new property `enforce_first_party_harness_models`
  * Used by [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
* `UpdateOrganizationSettingsRequest`: description updated
  * Used by [`PATCH /organization/settings`](https://openrouter.ai/docs/api/api-reference/organization/update-organization-settings)

**October 27, 2026**

## Breaking changes

* `ObservabilityS3Destination.config`: required `accessKeyId` property removedNo action needed

  * **Migration: no action for existing destinations.** S3 destinations now support IAM role authentication (`authMode: "iam_role"` with `provider: "aws"`, `roleArn`, and `region`), where OpenRouter assumes a role in your AWS account instead of storing access keys. `accessKeyId` and `secretAccessKey` are now optional in the schema because IAM role destinations have none. `authMode` defaults to `access_keys`, and in that mode both keys are still required on create and update, so existing requests and destinations behave exactly as before.
  * **Migration for clients that read destinations:** if your code or a generated SDK type assumes `config.accessKeyId` and `config.secretAccessKey` are always present in `GET /observability/destinations` responses, handle them as optional; they are absent on IAM role destinations. Check `config.authMode` to tell the two apart.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityS3Destination.config`: required `secretAccessKey` property removedNo action needed

  * Same change as above: required only when `authMode` is `access_keys` (the default).

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)

## New endpoints

* [`PUT /private-endpoints/{id}/parameters`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-supported-parameters): Set private endpoint supported parameters

## Modified endpoints

* [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint): description updated

## New response codes

* [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints): now returns `503`
* [`POST /generation/feedback`](https://openrouter.ai/docs/api/api-reference/generations/submit-feedback-for-a-generation): now returns `403`
* [`POST /generation/feedback`](https://openrouter.ai/docs/api/api-reference/generations/submit-feedback-for-a-generation): now returns `503`
* [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties): now returns `503`
* [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails): now returns `503`
* [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model): now returns `503`
* [`GET /presets`](https://openrouter.ai/docs/api/api-reference/presets/list-presets): now returns `503`
* [`GET /presets/{slug}`](https://openrouter.ai/docs/api/api-reference/presets/get-a-preset): now returns `503`
* [`GET /presets/{slug}/versions`](https://openrouter.ai/docs/api/api-reference/presets/list-versions-of-a-preset): now returns `503`
* [`GET /presets/{slug}/versions/{version}`](https://openrouter.ai/docs/api/api-reference/presets/get-a-specific-version-of-a-preset): now returns `503`

## New schemas

* `PrivateEndpointDeclaredParameter`
  * Used by [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint), [`PUT /private-endpoints/{id}/parameters`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-supported-parameters)
* `PrivateEndpointParameterCheck`
  * Used by [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint), [`POST /private-endpoints/{id}/validate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/validate-a-draft-private-endpoint)
* `UpdatePrivateEndpointParametersRequest`
  * Used by [`PUT /private-endpoints/{id}/parameters`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-supported-parameters)
* `DecisionsImageAsset`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request), [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)

## Modified schemas

* `ObservabilityS3Destination`:

  * new property `config.authMode`
  * new property `config.externalId`
  * new property `config.provider`
  * new property `config.roleArn`
  * property `region` updated

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `CreatePrivateEndpointRequest`: new property `declared_parameters`; new property `max_completion_tokens`
  * Used by [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
* `PrivateEndpoint`:

  * example modified
  * new property `declared_parameters` (always present)
  * new property `max_completion_tokens`
  * new property `tested_parameters` (always present)

  **4 endpoints using this schema**

  * [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint)
  * [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-draft-private-endpoint)
  * [`PUT /private-endpoints/{id}/parameters`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-supported-parameters)
  * [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing)
* `PrivateEndpointValidation`: new property `parameters`
  * Used by [`POST /private-endpoints/{id}/validate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/validate-a-draft-private-endpoint)
* `PrivateEndpointValidationNullable`: new property `parameters`
  * Used by [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
* `DecisionsRequest`: new property `assets`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request), [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **14 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `ProviderOptions`: new property `primalabs`

  **14 endpoints using this schema**

  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)

**October 26, 2026**

## New schemas

* `AnthropicToolUnion`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)

## Modified schemas

* `VideoModel`: enum property\_added
  * Used by [`GET /videos/models`](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models)
* `MessagesToolAdditionBlock`: description updated; new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)

**October 23, 2026**

## Breaking changes

* `CreateInternRequest`: schema object removedAction required
* `DeleteInternRequest`: schema object removedAction required
* `DeleteInternResponse`: schema object removedAction required
* `Intern`: schema object removedAction required
* `InternApprovalMode`: schema object removedAction required
* `InternChatAssistantMessage`: schema object removedAction required
* `InternChatChoice`: schema object removedAction required
* `InternChatCompletionChunk`: schema object removedAction required
* `InternChatCompletionRequest`: schema object removedAction required
* `InternChatDelta`: schema object removedAction required
* `InternChatDeveloperMessage`: schema object removedAction required
* `InternChatEchoedToolCall`: schema object removedAction required
* `InternChatEchoedToolCallFunction`: schema object removedAction required
* `InternChatError`: schema object removedAction required
* `InternChatErrorMetadata`: schema object removedAction required
* `InternChatErrorResponse`: schema object removedAction required
* `InternChatMessage`: schema object removedAction required
* `InternChatMessageContent`: schema object removedAction required
* `InternChatPromptTokensDetails`: schema object removedAction required
* `InternChatSteeredResponse`: schema object removedAction required
* `InternChatStreamError`: schema object removedAction required
* `InternChatStreamingResponse`: schema object removedAction required
* `InternChatSystemMessage`: schema object removedAction required
* `InternChatTextPart`: schema object removedAction required
* `InternChatToolCall`: schema object removedAction required
* `InternChatToolCallFunction`: schema object removedAction required
* `InternChatToolMessage`: schema object removedAction required
* `InternChatUsage`: schema object removedAction required
* `InternChatUserMessage`: schema object removedAction required
* `InternConnection`: schema object removedAction required
* `InternConnectionList`: schema object removedAction required
* `InternDaemonAccess`: schema object removedAction required
* `InternInvokeAcceptedResponse`: schema object removedAction required
* `InternInvokeRequest`: schema object removedAction required
* `InternLifecycleError`: schema object removedAction required
* `InternListResponse`: schema object removedAction required
* `ProvisionInternResponse`: schema object removedAction required
* `SignInternDaemonRequest`: schema object removedAction required
* `SignInternDaemonResponse`: schema object removedAction required
* `SuspendInternResponse`: schema object removedAction required
* `UpdateInternRequest`: schema object removedAction required
* `/interns`: endpoint object removedAction required
* `/interns/{internId}`: endpoint object removedAction required
* `/interns/{internId}/chat/completions`: endpoint object removedAction required
* `/interns/{internId}/connections`: endpoint object removedAction required
* `/interns/{internId}/daemon`: endpoint object removedAction required
* `/interns/{internId}/daemon-access`: endpoint object removedAction required
* `/interns/{internId}/daemon-access/sign`: endpoint object removedAction required
* `/interns/{internId}/daemon/sign`: endpoint object removedAction required
* `/interns/{internId}/icon`: endpoint object removedAction required
* `/interns/{internId}/invoke`: endpoint object removedAction required
* `/interns/{internId}/provision`: endpoint object removedAction required
* `/interns/{internId}/suspend`: endpoint object removedAction required
* \$.tags: Interns object removedAction required

## Modified endpoints

* [`POST /analytics/query`](https://openrouter.ai/docs/api/api-reference/analytics/query-analytics-data): response schema updated

## New response codes

* [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation): now returns `403`

## Modified schemas

* `ChatStreamChunk`: property `metadata` updated
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
* `MessagesRequest`: title property\_added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ObservabilityWebhookDestination`: property `method` updated

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `OpenResponsesErrorField`: title property\_added
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**October 22, 2026**

## Modified endpoints

* `GET /interns`: description updated
* `POST /interns`: description updated; response schema updated
* `DELETE /interns/{internId}`: description updated; response schema updated
* `GET /interns/{internId}`: description updated
* `PATCH /interns/{internId}`: description updated; response schema updated
* `GET /interns/{internId}/connections`: description updated
* `GET /interns/{internId}/daemon`: description updated
* `GET /interns/{internId}/daemon-access`: description updated
* `POST /interns/{internId}/daemon-access/sign`: description updated
* `POST /interns/{internId}/daemon/sign`: description updated
* `GET /interns/{internId}/icon`: description updated
* `POST /interns/{internId}/provision`: description updated; response schema updated
* `POST /interns/{internId}/suspend`: description updated; response schema updated

## New response codes

* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): now returns `403`
* [`DELETE /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/delete-a-byok-provider-credential): now returns `403`
* [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential): now returns `403`
* [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations): now returns `403`
* [`DELETE /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/delete-an-observability-destination): now returns `403`
* [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination): now returns `403`
* [`GET /scim/group-mappings`](https://openrouter.ai/docs/api/api-reference/scim/list-scim-group-mappings): now returns `403`
* [`POST /scim/group-mappings`](https://openrouter.ai/docs/api/api-reference/scim/create-a-scim-group-mapping): now returns `403`
* [`DELETE /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/delete-a-scim-group-mapping): now returns `403`
* [`GET /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/get-a-scim-group-mapping): now returns `403`
* [`PATCH /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/update-a-scim-group-mapping): now returns `403`
* [`GET /scim/groups`](https://openrouter.ai/docs/api/api-reference/scim/list-scim-groups): now returns `403`
* [`POST /scim/sync-jobs`](https://openrouter.ai/docs/api/api-reference/scim/start-a-scim-directory-sync): now returns `403`
* [`GET /scim/sync-jobs/{id}`](https://openrouter.ai/docs/api/api-reference/scim/get-scim-directory-sync-status): now returns `403`
* [`POST /generation/feedback`](https://openrouter.ai/docs/api/api-reference/generations/submit-feedback-for-a-generation): now returns `409`
* [`GET /external-users`](https://openrouter.ai/docs/api/api-reference/external-users/list-registered-external-users): now returns `403`
* [`GET /external-users/{user}`](https://openrouter.ai/docs/api/api-reference/external-users/get-a-registered-external-user): now returns `403`
* [`GET /presets`](https://openrouter.ai/docs/api/api-reference/presets/list-presets): now returns `403`
* [`GET /presets/{slug}`](https://openrouter.ai/docs/api/api-reference/presets/get-a-preset): now returns `403`
* [`GET /presets/{slug}/versions`](https://openrouter.ai/docs/api/api-reference/presets/list-versions-of-a-preset): now returns `403`
* [`GET /presets/{slug}/versions/{version}`](https://openrouter.ai/docs/api/api-reference/presets/get-a-specific-version-of-a-preset): now returns `403`

## Modified schemas

* `PrivateEndpointPricing`: description updated

  **4 endpoints using this schema**

  * [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint)
  * [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-draft-private-endpoint)
  * [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
  * [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing)

**October 21, 2026**

## Breaking changes

* `CreateEndUserRequest`: schema object removedAction required
  * Renamed to `CreateExternalUserRequest`; the shape is unchanged, so HTTP callers need no change. The Python SDK (`openrouter` 1.3.70 and later) and TypeScript SDK (`@openrouter/sdk` 1.5.0 and later) replace the `CreateEndUserRequest` model with `CreateExternalUserRequest`.
* `EndUser`: schema object removedAction required
  * Renamed to `ExternalUser`; the shape is unchanged, so HTTP callers need no change. The Python SDK (`openrouter` 1.3.70 and later) and TypeScript SDK (`@openrouter/sdk` 1.5.0 and later) replace the `EndUser` model with `ExternalUser`.
* `EndUserResponse`: schema object removedAction required
  * Renamed to `ExternalUserResponse`; the shape is unchanged, so HTTP callers need no change. The Python SDK (`openrouter` 1.3.70 and later) and TypeScript SDK (`@openrouter/sdk` 1.5.0 and later) replace the `EndUserResponse` model with `ExternalUserResponse`.
* `ListEndUsersResponse`: schema object removedAction required
  * Renamed to `ListExternalUsersResponse`; the shape is unchanged, so HTTP callers need no change. The Python SDK (`openrouter` 1.3.70 and later) and TypeScript SDK (`@openrouter/sdk` 1.5.0 and later) replace the `ListEndUsersResponse` model with `ListExternalUsersResponse`.
* `UpdateEndUserRequest`: schema object removedAction required
  * Renamed to `UpdateExternalUserRequest`; the shape is unchanged, so HTTP callers need no change. The Python SDK (`openrouter` 1.3.70 and later) and TypeScript SDK (`@openrouter/sdk` 1.5.0 and later) replace the `UpdateEndUserRequest` model with `UpdateExternalUserRequest`.
* `/end-users`: endpoint object removedAction required
  * Requests to `/end-users` continue to work and are forwarded to [`/external-users`](https://openrouter.ai/docs/api/api-reference/external-users/list-registered-external-users), so HTTP callers need no change. In the Python SDK (`openrouter` 1.3.70 and later), switch `client.end_users` to `client.external_users`; the old namespace was removed. In the TypeScript SDK (`@openrouter/sdk` 1.5.0 and later), use `externalUsers` for new code; `endUsers` remains available as a compatibility alias. Method names (`list`, `create`, `get`, `update`, `delete`) are unchanged.
* `/end-users/{user}`: endpoint object removedAction required
  * Requests to `/end-users/{user}` continue to work and are forwarded to [`/external-users/{user}`](https://openrouter.ai/docs/api/api-reference/external-users/get-a-registered-external-user), so HTTP callers need no change. Python SDK users switch to `external_users`; TypeScript SDK users can migrate to `externalUsers` while `endUsers` remains available as a compatibility alias, as described on the `/end-users` entry above.
* `GET /interns/{internId}/icon`: content `image/jpeg` object removedNo action needed
  * The response is now declared as `image/*`. The bytes served and their `Content-Type` headers are unchanged.
* `GET /interns/{internId}/icon`: content `image/png` object removedNo action needed
  * The response is now declared as `image/*`. The bytes served and their `Content-Type` headers are unchanged.
* \$.tags: End Users object removedNo action needed
  * Documentation tag renamed to External Users. No API change.
* [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message): x-speakeasy-sse-sentinel `[DONE]` object removedAction required
  * Streams now end at the `message_stop` event and no longer send a trailing `data: [DONE]` frame, matching the Anthropic Messages protocol. Clients that detected the end of a `/messages` stream by waiting for `[DONE]` must terminate on `message_stop` on success, and on the `error` event or stream closure on failure. Anthropic's official SDKs already expect this.
* `BulkAssignMembersRequest`: `member_user_ids` now accepts at most 500 itemsAction required
  * Requests with more than 500 member user IDs now return `400`; previously they were accepted. Split larger lists into batches of 500 or fewer, matching the existing limit on the key assignment endpoints.
  * Used by [`POST /guardrails/{id}/assignments/members`](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-assign-members-to-a-guardrail)
* `BulkUnassignMembersRequest`: `member_user_ids` now accepts at most 500 itemsAction required
  * Requests with more than 500 member user IDs now return `400`; previously they were accepted. Split larger lists into batches of 500 or fewer, matching the existing limit on the key assignment endpoints.
  * Used by [`POST /guardrails/{id}/assignments/members/remove`](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-unassign-members-from-a-guardrail)
* `InternDaemonAccess`: required `viewer` property addedAction required
  * Used by `GET /interns/{internId}/daemon`, `GET /interns/{internId}/daemon-access`

## New endpoints

* [`GET /external-users`](https://openrouter.ai/docs/api/api-reference/external-users/list-registered-external-users): List registered external users
* [`POST /external-users`](https://openrouter.ai/docs/api/api-reference/external-users/register-an-external-user): Register an external user
* [`GET /external-users/{user}`](https://openrouter.ai/docs/api/api-reference/external-users/get-a-registered-external-user): Get a registered external user
* [`PATCH /external-users/{user}`](https://openrouter.ai/docs/api/api-reference/external-users/update-a-registered-external-user): Update a registered external user
* [`DELETE /external-users/{user}`](https://openrouter.ai/docs/api/api-reference/external-users/deactivate-a-registered-external-user): Deactivate a registered external user
* `GET /interns/{internId}/connections`: List an intern's connections

## Modified endpoints

* `GET /interns/{internId}/icon`: response schema updated
* `GET /interns`: response schema updated
* `POST /interns`: response schema updated
* `GET /interns/{internId}`: response schema updated
* `PATCH /interns/{internId}`: response schema updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated
* [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing): description updated
* [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail): description updated
* [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail): description updated
* [`POST /guardrails/{id}/assignments/keys`](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-assign-keys-to-a-guardrail): description updated

## New response codes

* [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails): now returns `403`
* [`GET /guardrails/assignments/keys`](https://openrouter.ai/docs/api/api-reference/guardrails/list-all-key-assignments): now returns `403`
* [`GET /guardrails/assignments/members`](https://openrouter.ai/docs/api/api-reference/guardrails/list-all-member-assignments): now returns `403`
* [`DELETE /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/delete-a-guardrail): now returns `403`
* [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail): now returns `403`
* [`GET /guardrails/{id}/assignments/keys`](https://openrouter.ai/docs/api/api-reference/guardrails/list-key-assignments-for-a-guardrail): now returns `403`
* [`POST /guardrails/{id}/assignments/keys/remove`](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-unassign-keys-from-a-guardrail): now returns `403`
* [`GET /guardrails/{id}/assignments/members`](https://openrouter.ai/docs/api/api-reference/guardrails/list-member-assignments-for-a-guardrail): now returns `403`
* [`POST /guardrails/{id}/assignments/members`](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-assign-members-to-a-guardrail): now returns `403`
* [`POST /guardrails/{id}/assignments/members/remove`](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-unassign-members-from-a-guardrail): now returns `403`
* [`GET /organization/members`](https://openrouter.ai/docs/api/api-reference/organization/list-organization-members): now returns `403`
* [`GET /organization/settings`](https://openrouter.ai/docs/api/api-reference/organization/get-organization-settings): now returns `403`
* [`PATCH /organization/settings`](https://openrouter.ai/docs/api/api-reference/organization/update-organization-settings): now returns `403`
* [`GET /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspaces): now returns `403`
* [`GET /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace): now returns `403`
* [`GET /workspaces/{workspace_ref}/budgets`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspace-budgets): now returns `403`
* [`DELETE /workspaces/{workspace_ref}/budgets/{interval}`](https://openrouter.ai/docs/api/api-reference/workspaces/delete-a-workspace-budget): now returns `403`
* [`GET /workspaces/{workspace_ref}/budgets/{interval}`](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace-budget): now returns `403`
* [`PUT /workspaces/{workspace_ref}/budgets/{interval}`](https://openrouter.ai/docs/api/api-reference/workspaces/create-or-update-a-workspace-budget): now returns `403`

## New schemas

* `CreateExternalUserRequest`
  * Used by [`POST /external-users`](https://openrouter.ai/docs/api/api-reference/external-users/register-an-external-user)
* `ExternalUser`

  **4 endpoints using this schema**

  * [`GET /external-users`](https://openrouter.ai/docs/api/api-reference/external-users/list-registered-external-users)
  * [`GET /external-users/{user}`](https://openrouter.ai/docs/api/api-reference/external-users/get-a-registered-external-user)
  * [`PATCH /external-users/{user}`](https://openrouter.ai/docs/api/api-reference/external-users/update-a-registered-external-user)
  * [`POST /external-users`](https://openrouter.ai/docs/api/api-reference/external-users/register-an-external-user)
* `ExternalUserResponse`
  * Used by [`GET /external-users/{user}`](https://openrouter.ai/docs/api/api-reference/external-users/get-a-registered-external-user), [`PATCH /external-users/{user}`](https://openrouter.ai/docs/api/api-reference/external-users/update-a-registered-external-user), [`POST /external-users`](https://openrouter.ai/docs/api/api-reference/external-users/register-an-external-user)
* `ListExternalUsersResponse`
  * Used by [`GET /external-users`](https://openrouter.ai/docs/api/api-reference/external-users/list-registered-external-users)
* `UpdateExternalUserRequest`
  * Used by [`PATCH /external-users/{user}`](https://openrouter.ai/docs/api/api-reference/external-users/update-a-registered-external-user)
* `InternConnection`
  * Used by `GET /interns/{internId}/connections`
* `InternConnectionList`
  * Used by `GET /interns/{internId}/connections`

## Modified schemas

* `Intern`: example modified; new property `can_edit`

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `InternListResponse`: example modified
  * Used by `GET /interns`
* `PromptCacheBreakpoint`: description updated; example modified; new property `ttl`

  **6 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `PromptCacheOptions`: description updated

  **6 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `BYOKProviderSlug`: enum property\_added

  * Added enum value `recursive`.

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `PrivateEndpoint`: example modified
  * Used by [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint), [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-draft-private-endpoint), [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing)
* `PrivateEndpointPricing`: example modified; new property `cache_read`; new property `cache_write`

  **4 endpoints using this schema**

  * [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint)
  * [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-draft-private-endpoint)
  * [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
  * [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing)
* `ProviderName`: enum property\_added

  * Added enum value `Recursive`.

  **14 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `ProviderOptions`: new property `recursive`

  **14 endpoints using this schema**

  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Added `Recursive` to the `provider_name` enum.
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `InternDaemonAccess`: description updated; example modified; new property `viewer`
  * Used by `GET /interns/{internId}/daemon`, `GET /interns/{internId}/daemon-access`

**October 20, 2026**

## Modified endpoints

* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## Modified schemas

* `BYOKProviderSlug`: enum property\_added

  * Added enum value `pareto-alpha`.

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  * Added enum value `ParetoAlpha`.

  **14 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `ProviderOptions`: new property `pareto-alpha`

  **14 endpoints using this schema**

  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Added `ParetoAlpha` to the `provider_name` enum.
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)

**October 19, 2026**

## New endpoints

* `GET /interns/{internId}/icon`: Get an intern's icon

## Modified endpoints

* `GET /interns`: response schema updated
* `POST /interns`: response schema updated
* `GET /interns/{internId}`: response schema updated
* `PATCH /interns/{internId}`: response schema updated

## Modified schemas

* `Intern`: example modified; new property `created_by_you`; new property `icon_sha256`

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `InternListResponse`: example modified
  * Used by `GET /interns`
* `BYOKKey`: description updated

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `CreateBYOKKeyRequest`: description updated
  * Used by [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `UpdateBYOKKeyRequest`: description updated
  * Used by [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)

**October 18, 2026**

## New endpoints

* [`GET /vault/interns/{internId}/connections`](https://openrouter.ai/docs/api/api-reference/vault/list-the-connections-an-intern-can-use): List the connections an intern can use

## Modified endpoints

* `GET /interns/{internId}/daemon`: description updated

## Modified schemas

* `SignInternDaemonRequest`: new property `route`
  * Used by `POST /interns/{internId}/daemon-access/sign`, `POST /interns/{internId}/daemon/sign`
* `SignInternDaemonResponse`: new property `x-ori-invoke-nonce`; new property `x-ori-invoke-signature-v2`
  * Used by `POST /interns/{internId}/daemon-access/sign`, `POST /interns/{internId}/daemon/sign`

**October 17, 2026**

## Modified schemas

* `BatchSubmitBody`: new property `callback_url`
  * Used by [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)

**October 16, 2026**

## Breaking changes

* `BatchListItem`: required `expires_at` property addedNo action needed
  * No action required for existing consumers. New response-only field.
  * Used by [`GET /batches`](https://openrouter.ai/docs/api/api-reference/batch/list-batches)
* `BatchListItem`: required `provider` property addedNo action needed
  * No action required for existing consumers. New response-only field.
  * Used by [`GET /batches`](https://openrouter.ai/docs/api/api-reference/batch/list-batches)
* `BatchObject`: required `expires_at` property addedNo action needed
  * No action required for existing consumers. New response-only field.
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
* `BatchObject`: required `provider` property addedNo action needed
  * No action required for existing consumers. New response-only field.
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
* `BatchPaymentRequiredResponse`: required `expires_at` property addedNo action needed
  * No action required for existing consumers. New response-only field.
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
* `BatchPaymentRequiredResponse`: required `provider` property addedNo action needed
  * No action required for existing consumers. New response-only field.
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)

## Modified schemas

* `BatchListItem`: new property `expires_at`; new property `provider`
  * Used by [`GET /batches`](https://openrouter.ai/docs/api/api-reference/batch/list-batches)
* `BatchObject`: new property `expires_at`; new property `provider`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
* `BatchPaymentRequiredResponse`: new property `expires_at`; new property `provider`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
* `WebFetchEngineEnum`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `WebSearchEngineEnum`: description updated

  **8 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**October 15, 2026**

## Breaking changes

* `PublicEndpoint`: required `service_tier` property addedNo action needed
  * No action required for existing consumers. New response-only field.
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)

## Modified endpoints

* [`POST /vault/interns/{internId}/secrets/copy`](https://openrouter.ai/docs/api/api-reference/vault/copy-workspace-secrets-to-an-intern): description updated
* [`PUT /vault/interns/{internId}/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-an-intern-secret): description updated; response schema updated
* [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails): new parameter `sort`

## New response codes

* [`GET /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/list-api-keys): now returns `404`
* [`DELETE /vault/interns/{internId}/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/delete-an-intern-secret): now returns `409`
* [`DELETE /vault/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/delete-a-workspace-secret): now returns `409`
* [`PUT /vault/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-a-workspace-secret): now returns `409`

## New schemas

* `PublicServiceTier`
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)

## Modified schemas

* `ResponsesRequest`: new property `stop`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `PublicEndpoint`: example modified; new property `service_tier`
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
* `TokenExchangeRequest`: description updated; enum property\_added
  * Added `management` to the `scope` enum.
  * Used by [`POST /oauth/token`](https://openrouter.ai/docs/api/api-reference/oauth/exchange-a-workload-identity-token)
* `TokenExchangeResponse`: description updated
  * Used by [`POST /oauth/token`](https://openrouter.ai/docs/api/api-reference/oauth/exchange-a-workload-identity-token)
* `SpeechInputReferenceImage`: description updated
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `SpeechRequest`: description updated
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)

**October 14, 2026**

## Breaking changes

* `AlignmentRuleRecord`: required `applicable` property addedNo action needed

  * No action required for existing consumers. New response-only field.

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentRuleRecord`: type `number` modifiedAction required

  * `probability` is now `number | null`: it is `null` when `applicable` is `false`. Clients that parse `probability` as a non-null number must handle `null`.

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `PublicEndpoint`: required `supports_diarization` property addedNo action needed
  * No action required for existing consumers. New response-only field.
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)

## Modified endpoints

* [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints): description updated
* [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion): response schema updated; description updated
* [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints): response schema updated
* [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model): response schema updated

## New response codes

* [`POST /containers/{container_id}/files/{file_id}/promote`](https://openrouter.ai/docs/api/api-reference/containers/promote-a-container-file-into-workspace-documents): now returns `499`
* [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request): now returns `499`
* [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file): now returns `499`
* [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request): now returns `499`
* [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request): now returns `503`
* [`GET /guardrails/assignments/keys`](https://openrouter.ai/docs/api/api-reference/guardrails/list-all-key-assignments): now returns `400`
* [`GET /guardrails/assignments/keys`](https://openrouter.ai/docs/api/api-reference/guardrails/list-all-key-assignments): now returns `404`
* [`GET /guardrails/assignments/members`](https://openrouter.ai/docs/api/api-reference/guardrails/list-all-member-assignments): now returns `400`
* [`GET /guardrails/assignments/members`](https://openrouter.ai/docs/api/api-reference/guardrails/list-all-member-assignments): now returns `404`

## New schemas

* `AlignmentRule`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ClientClosedRequestResponse`

  **4 endpoints using this schema**

  * [`POST /containers/{container_id}/files/{file_id}/promote`](https://openrouter.ai/docs/api/api-reference/containers/promote-a-container-file-into-workspace-documents)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ClientClosedRequestResponseErrorData`

  **4 endpoints using this schema**

  * [`POST /containers/{container_id}/files/{file_id}/promote`](https://openrouter.ai/docs/api/api-reference/containers/promote-a-container-file-into-workspace-documents)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ArmorAutoMode`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ArmorContext`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ArmorEnvironmentEntry`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ArmorPlugin`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ArmorRule`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ArmorSafeguardResult`

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `DecisionsBoxAnswer`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request), [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `DecisionsBoxQuestion`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request), [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)

## Modified schemas

* `Alignment`: example modified; description updated; minItems property\_removed

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentPlugin`: example modified; description updated; \$ref modified

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentRuleRecord`: new property `applicable`; description updated

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ChatResult`: new property `alignment`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
* `ChatStreamChunk`: new property `alignment`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
* `OpenResponsesErrorField`: enum property\_added
  * Added `permission_denied` to the `code` enum.
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OpenResponsesErrorMetadata`: example modified
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ResponsesErrorField`: enum property\_added
  * Added `permission_denied` to the `code` enum.
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ChatRequest`: new union variant added
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `ChatResult`: new property `safeguard_results`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
* `ChatStreamChunk`: new property `safeguard_results`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
* `MessagesRequest`: new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ResponsesRequest`: new union variant added
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `VideoGenerationResponse`: new property `urls`; description updated
  * Used by [`GET /videos/{jobId}`](https://openrouter.ai/docs/api/api-reference/video-generation/poll-video-generation-status), [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ListEndpointsResponse`: example modified
  * Used by [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
* `PublicEndpoint`: example modified; new property `supports_diarization`
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
* `DecisionsRequest`: description updated; new union variant added
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request), [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `DecisionsResponse`: description updated; new union variant added
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request), [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)

**October 13, 2026**

## Breaking changes

* `ObservabilityArizeDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityBraintrustDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityClickhouseDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDatadogDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityGrafanaDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangfuseDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangsmithDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityNewrelicDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOpikDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOtelCollectorDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityPosthogDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityRampDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityS3Destination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySentryDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySnowflakeDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWeaveDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWebhookDestination`: required `broadcast_generation_cost_allocation` property addedNo action needed

  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations): required `broadcast_generation_cost_allocation` property addedNo action needed
  * No action required for existing consumers. New required response field; the corresponding field remains optional on create and update requests.

## Modified endpoints

* [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations): response schema updated
* [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination): response schema updated
* [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination): response schema updated
* [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination): response schema updated

## New schemas

* `OutputArmorBlockedItem`

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## Modified schemas

* `OutputItems`: new union variant added
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CreateObservabilityDestinationRequest`: new property `broadcast_generation_cost_allocation`
  * Used by [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `CreateObservabilityDestinationResponse`: example modified
  * Used by [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `GetObservabilityDestinationResponse`: example modified
  * Used by [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
* `ListObservabilityDestinationsResponse`: example modified
  * Used by [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
* `ObservabilityArizeDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityBraintrustDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityClickhouseDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDatadogDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDestination`: example modified

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityGrafanaDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangfuseDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangsmithDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityNewrelicDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOpikDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOtelCollectorDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityPosthogDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityRampDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityS3Destination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySentryDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySnowflakeDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWeaveDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWebhookDestination`: example modified; new property `broadcast_generation_cost_allocation`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `UpdateObservabilityDestinationRequest`: new property `broadcast_generation_cost_allocation`
  * Used by [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
* `UpdateObservabilityDestinationResponse`: example modified
  * Used by [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
* `CreateGuardrailRequest`: new property `allow_safety_retention_google`
  * Used by [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `Guardrail`: new property `allow_safety_retention_google`

  **4 endpoints using this schema**

  * [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
  * [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
  * [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
  * [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `SpeechInput`: description updated
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `SpeechRequest`: description updated
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `UpdateGuardrailRequest`: new property `allow_safety_retention_google`
  * Used by [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
* `CreateGuardrailRequest`: new property `allow_safety_retention_other`
  * Used by [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `Guardrail`: new property `allow_safety_retention_other`

  **4 endpoints using this schema**

  * [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
  * [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
  * [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
  * [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `UpdateGuardrailRequest`: new property `allow_safety_retention_other`
  * Used by [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)

**October 11, 2026**

## Modified endpoints

* [`GET /embeddings/models`](https://openrouter.ai/docs/api/api-reference/embeddings/list-all-embeddings-models): response schema updated

**October 10, 2026**

## Breaking changes

* [`GET /key`](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-api-key): required `budgets` property addedNo action needed
  * No action required for existing consumers. New response-only field.
* [`GET /key`](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-api-key): required `effective_budget` property addedNo action needed
  * No action required for existing consumers. New response-only field.

## Modified endpoints

* [`GET /key`](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-api-key): response schema updated

## New schemas

* `DeferredBm25Search`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `DeferredCustomSearch`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `DeferredRegexSearch`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `DeferredToolsControl`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `DeferredToolsSearchStrategy`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `KeyBudget`
  * Used by [`GET /key`](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-api-key)
* `ORAnthropicToolSearchResult`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ORAnthropicToolSearchResultParam`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)

## Modified schemas

* `ChatRequest`: new property `deferred_tools`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `CustomTool`: new property `defer_loading`

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `MessagesContentBlockStartEvent`: new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `MessagesRequest`: new property `deferred_tools`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ORAnthropicContentBlock`: new union variant added
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `OutputToolSearchServerToolItem`: new property `matches`

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ResponsesRequest`: new property `deferred_tools`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `VideoGenerationResponse`: new property `expires_at`
  * Used by [`GET /videos/{jobId}`](https://openrouter.ai/docs/api/api-reference/video-generation/poll-video-generation-status), [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)

**October 9, 2026**

## Breaking changes

* `CreateEndUserRequest`: maxLength `256` modifiedNo action needed
  * No action required for existing consumers. The maximum end-user ID length increased from 256 to 512 characters.
  * Used by [`POST /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/register-an-end-user)
* `CreateEndUserRequest`: pattern `^[^\p{Cc}]+$` modifiedNo action needed
  * No action required for existing consumers. The pattern now permits control characters other than NUL.
  * Used by [`POST /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/register-an-end-user)
* `EndUser`: maxLength `256` modifiedNo action needed

  **4 endpoints using this schema**

  * [`GET /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/list-registered-end-users)
  * [`GET /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/get-a-registered-end-user)
  * [`PATCH /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/update-a-registered-end-user)
  * [`POST /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/register-an-end-user)
* `EndUser`: pattern `^[^\p{Cc}]+$` modifiedNo action needed

  **4 endpoints using this schema**

  * [`GET /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/list-registered-end-users)
  * [`GET /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/get-a-registered-end-user)
  * [`PATCH /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/update-a-registered-end-user)
  * [`POST /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/register-an-end-user)
* [`GET /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/list-registered-end-users): maxLength `256` modifiedNo action needed
* [`GET /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/list-registered-end-users): pattern `^[^\p{Cc}]+$` modifiedNo action needed
* [`DELETE /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/deactivate-a-registered-end-user): maxLength `256` modifiedNo action needed
* [`DELETE /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/deactivate-a-registered-end-user): pattern `^[^\p{Cc}]+$` modifiedNo action needed
* [`GET /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/get-a-registered-end-user): maxLength `256` modifiedNo action needed
* [`GET /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/get-a-registered-end-user): pattern `^[^\p{Cc}]+$` modifiedNo action needed
* [`PATCH /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/update-a-registered-end-user): maxLength `256` modifiedNo action needed
* [`PATCH /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/update-a-registered-end-user): pattern `^[^\p{Cc}]+$` modifiedNo action needed

## Modified endpoints

* [`GET /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/list-registered-end-users): description updated
* [`DELETE /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/deactivate-a-registered-end-user): description updated
* [`GET /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/get-a-registered-end-user): description updated
* [`PATCH /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/update-a-registered-end-user): description updated
* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): description updated; request schema updated
* [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail): description updated
* [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail): description updated
* [`POST /guardrails/{id}/assignments/keys`](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-assign-keys-to-a-guardrail): description updated
* `POST /interns`: description updated
* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): description updated

## New response codes

* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): now returns `403`
* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): now returns `409`

## Modified schemas

* `CreateEndUserRequest`: description updated
  * Used by [`POST /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/register-an-end-user)
* `EndUser`: description updated

  **4 endpoints using this schema**

  * [`GET /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/list-registered-end-users)
  * [`GET /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/get-a-registered-end-user)
  * [`PATCH /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/update-a-registered-end-user)
  * [`POST /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/register-an-end-user)
* `AlignmentPlugin`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**October 8, 2026**

## Modified endpoints

* [`GET /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/list-api-keys): new parameter `include_expired`
* `POST /interns`: description updated; response schema updated

## Modified schemas

* `PublicEndpoint`: description updated
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
* `JevRouterPlugin`: new property `cost_tier`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `BulkAssignKeysRequest`: maxItems property\_added
  * Used by [`POST /guardrails/{id}/assignments/keys`](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-assign-keys-to-a-guardrail)
* `BulkUnassignKeysRequest`: maxItems property\_added
  * Used by [`POST /guardrails/{id}/assignments/keys/remove`](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-unassign-keys-from-a-guardrail)

**October 7, 2026**

## New endpoints

* `POST /interns/{internId}/daemon-access/sign`: Sign a daemon request with the caller's identity (deprecated alias)
* `POST /interns/{internId}/daemon/sign`: Sign a daemon request with the caller's identity

## New schemas

* `ToolSearchCallItem`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ToolSearchOutputItem`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `SignInternDaemonRequest`
  * Used by `POST /interns/{internId}/daemon-access/sign`, `POST /interns/{internId}/daemon/sign`
* `SignInternDaemonResponse`
  * Used by `POST /interns/{internId}/daemon-access/sign`, `POST /interns/{internId}/daemon/sign`
* `OutputToolSearchCallItem`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## Modified schemas

* `OutputApplyPatchServerToolItem`: new property `error`; \$ref modified

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputDatetimeItem`: new property `error`; \$ref modified

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputImageGenerationServerToolItem`: new property `error`; \$ref modified

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputSearchModelsServerToolItem`: new property `error`; \$ref modified

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputToolSearchServerToolItem`: new property `error`; \$ref modified

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputWebSearchServerToolItem`: new property `error`; \$ref modified

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `SwitchyardRouterPlugin`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderResponse`: x-speakeasy-unknown-values object\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `OutputItems`: new union variant added
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**October 6, 2026**

## Breaking changes

* `BYOKKey`: required `declared_region` property addedNo action needed

  * **No action required for existing consumers.** Responses from BYOK endpoints now include `declared_region` (`"global"`, `"europe"`, `"us"`, or `null`) indicating the key's declared data region.

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* [`GET /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/list-api-keys): required `last_used_at` property addedNo action needed
  * No action required for existing consumers. API key responses now include `last_used_at`, an ISO 8601 UTC timestamp of the key's most recent recorded usage, or `null` if none has been recorded.
* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): required `last_used_at` property addedNo action needed
* [`GET /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/get-a-single-api-key): required `last_used_at` property addedNo action needed
* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): required `last_used_at` property addedNo action needed

## Modified endpoints

* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): response schema updated
* [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential): response schema updated
* [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential): response schema updated
* [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential): response schema updated
* [`GET /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/list-api-keys): response schema updated
* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): response schema updated
* [`GET /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/get-a-single-api-key): response schema updated
* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): response schema updated

## New response codes

* [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential): now returns `409`

## New schemas

* `SpeechInput`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `SpeechTurn`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)

## Modified schemas

* `BYOKKey`: example modified; new property `declared_region`

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `CreateBYOKKeyRequest`: new property `declared_region`
  * Used by [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `CreateBYOKKeyResponse`: example modified
  * Used by [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `GetBYOKKeyResponse`: example modified
  * Used by [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
* `ListBYOKKeysResponse`: example modified
  * Used by [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
* `UpdateBYOKKeyRequest`: new property `declared_region`
  * Used by [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
* `UpdateBYOKKeyResponse`: example modified
  * Used by [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
* `SwitchyardRouterPlugin`: new property `judge_model`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `SpeechRequest`: new property `instructions`; \$ref modified
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)

**October 5, 2026**

## Modified schemas

* `BatchProviderPreferences`: description updated; new property `allow_fallbacks`
  * Used by [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)

**October 2, 2026**

## Breaking changes

* spec: ^[a-z0-9\*](\[a-z0-9*-]\{0,61}\[a-z0-9*])?(.[a-z0-9\*](\[a-z0-9*-]\{0,61}\[a-z0-9*])?)\*\$ modifiedNo action needed

## Modified endpoints

* [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription): description updated

## Modified schemas

* `ObservabilityClickhouseDestination`: new property `shouldIncludeCacheWriteTokens`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySnowflakeDestination`: new property `shouldIncludeCacheWriteTokens`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `STTRequest`: description updated; new property `data_collection`; new property `zdr`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `SpeechRequest`: description updated; new property `data_collection`; new property `zdr`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)

**October 1, 2026**

## Breaking changes

* `ActivityItem`: required `cached_tokens` property addedNo action needed
  * Used by [`GET /activity`](https://openrouter.ai/docs/api/api-reference/analytics/get-user-activity-grouped-by-endpoint)

## Modified endpoints

* [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation): parameter `id` updated
* [`GET /generation/content`](https://openrouter.ai/docs/api/api-reference/generations/get-stored-prompt-completion-and-error-content-for-a-generation): parameter `id` updated
* [`GET /activity`](https://openrouter.ai/docs/api/api-reference/analytics/get-user-activity-grouped-by-endpoint): response schema updated
* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): description updated; response schema updated

## New response codes

* [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation): now returns `400`
* [`GET /generation/content`](https://openrouter.ai/docs/api/api-reference/generations/get-stored-prompt-completion-and-error-content-for-a-generation): now returns `400`

## New schemas

* `ChatDynamicServerTool`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)

## Modified schemas

* `ChatFunctionTool`: new union variant added
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `ActivityItem`: example modified; new property `cached_tokens`
  * Used by [`GET /activity`](https://openrouter.ai/docs/api/api-reference/analytics/get-user-activity-grouped-by-endpoint)
* `ActivityResponse`: example modified
  * Used by [`GET /activity`](https://openrouter.ai/docs/api/api-reference/analytics/get-user-activity-grouped-by-endpoint)
* `ImageGenerationRequest`: enum property\_added
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)

**September 30, 2026**

## New endpoints

* [`GET /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/list-registered-end-users): List registered end users
* [`POST /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/register-an-end-user): Register an end user
* [`GET /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/get-a-registered-end-user): Get a registered end user
* [`PATCH /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/update-a-registered-end-user): Update a registered end user
* [`DELETE /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/deactivate-a-registered-end-user): Deactivate a registered end user
* [`GET /organization/settings`](https://openrouter.ai/docs/api/api-reference/organization/get-organization-settings): Get organization settings
* [`PATCH /organization/settings`](https://openrouter.ai/docs/api/api-reference/organization/update-organization-settings): Update organization settings

## Modified endpoints

* [`GET /containers/{container_id}/files`](https://openrouter.ai/docs/api/api-reference/containers/list-container-files): description updated

## New schemas

* `Alignment`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentAllowedCallRecord`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentBlockedCallRecord`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentCallRecord`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentChatAudio`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentChatImage`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentChatRejected`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentChatToolCall`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentPlugin`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentRejected`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentResponsesRejected`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentRuleRecord`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AlignmentUnavailableCallRecord`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OpenResponsesErrorField`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OpenResponsesErrorMetadata`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CreateEndUserRequest`
  * Used by [`POST /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/register-an-end-user)
* `EndUser`

  **4 endpoints using this schema**

  * [`GET /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/list-registered-end-users)
  * [`GET /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/get-a-registered-end-user)
  * [`PATCH /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/update-a-registered-end-user)
  * [`POST /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/register-an-end-user)
* `EndUserResponse`
  * Used by [`GET /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/get-a-registered-end-user), [`PATCH /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/update-a-registered-end-user), [`POST /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/register-an-end-user)
* `ListEndUsersResponse`
  * Used by [`GET /end-users`](https://openrouter.ai/docs/api/api-reference/end-users/list-registered-end-users)
* `UpdateEndUserRequest`
  * Used by [`PATCH /end-users/{user}`](https://openrouter.ai/docs/api/api-reference/end-users/update-a-registered-end-user)
* `OrganizationSettings`
  * Used by [`GET /organization/settings`](https://openrouter.ai/docs/api/api-reference/organization/get-organization-settings), [`PATCH /organization/settings`](https://openrouter.ai/docs/api/api-reference/organization/update-organization-settings)
* `UpdateOrganizationSettingsRequest`
  * Used by [`PATCH /organization/settings`](https://openrouter.ai/docs/api/api-reference/organization/update-organization-settings)

## Modified schemas

* `ChatRequest`: new union variant added
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `MessagesRequest`: new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ResponsesRequest`: new union variant added
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `SwitchyardRouterPlugin`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**September 29, 2026**

## Breaking changes

* `JevRouterPlugin`: additionalProperties `false` object addedNo action needed

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `STTInputAudio`: properties `data` object removedNo action needed
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTInputAudio`: properties `format` object removedNo action needed
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTInputAudio`: required `data` property removedNo action needed
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTInputAudio`: required `format` property removedNo action needed
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription): required `file` property removedNo action needed

## New endpoints

* [`GET /vault/interns/{internId}/effective-secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-the-secrets-an-intern-receives): List the secrets an intern receives
* [`GET /tools`](https://openrouter.ai/docs/api/api-reference/tools/list-server-tools): List server tools
* [`GET /tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool): Get a server tool

## Modified endpoints

* `GET /interns`: description updated
* `POST /interns`: description updated
* `DELETE /interns/{internId}`: description updated
* `GET /interns/{internId}`: description updated
* `PATCH /interns/{internId}`: description updated
* `GET /interns/{internId}/daemon`: description updated
* `GET /interns/{internId}/daemon-access`: description updated
* `POST /interns/{internId}/provision`: description updated
* `POST /interns/{internId}/suspend`: description updated
* [`GET /vault/interns/{internId}/secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-intern-secrets): description updated
* [`POST /vault/interns/{internId}/secrets/copy`](https://openrouter.ai/docs/api/api-reference/vault/copy-workspace-secrets-to-an-intern): description updated
* [`DELETE /vault/interns/{internId}/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/delete-an-intern-secret): description updated
* [`PUT /vault/interns/{internId}/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-an-intern-secret): description updated
* [`GET /vault/secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-workspace-secrets): description updated
* [`DELETE /vault/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/delete-a-workspace-secret): description updated
* [`PUT /vault/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-a-workspace-secret): description updated
* [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription): description updated; request schema updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## New response codes

* [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch): now returns `410`

## New schemas

* `VaultEffectiveSecret`
  * Used by [`GET /vault/interns/{internId}/effective-secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-the-secrets-an-intern-receives)
* `VaultEffectiveSecretListResponse`
  * Used by [`GET /vault/interns/{internId}/effective-secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-the-secrets-an-intern-receives)
* `JevRouterPlugin`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `STTEntity`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTInlineInputAudio`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTUrlInputAudio`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `GetToolResponse`
  * Used by [`GET /tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool)
* `ListToolsResponse`
  * Used by [`GET /tools`](https://openrouter.ai/docs/api/api-reference/tools/list-server-tools)
* `ServerTool`
  * Used by [`GET /tools`](https://openrouter.ai/docs/api/api-reference/tools/list-server-tools), [`GET /tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool)
* `ServerToolDetails`
  * Used by [`GET /tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool)
* `ServerToolEngine`
  * Used by [`GET /tools`](https://openrouter.ai/docs/api/api-reference/tools/list-server-tools), [`GET /tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool)
* `ServerToolExecutedBy`
  * Used by [`GET /tools`](https://openrouter.ai/docs/api/api-reference/tools/list-server-tools), [`GET /tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool)
* `ServerToolInputName`
  * Used by [`GET /tools`](https://openrouter.ai/docs/api/api-reference/tools/list-server-tools), [`GET /tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool)
* `ServerToolNativeModel`
  * Used by [`GET /tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool)
* `ServerToolNativeSupport`
  * Used by [`GET /tools`](https://openrouter.ai/docs/api/api-reference/tools/list-server-tools), [`GET /tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool)
* `ServerToolOutputName`
  * Used by [`GET /tools`](https://openrouter.ai/docs/api/api-reference/tools/list-server-tools), [`GET /tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool)
* `ServerToolPrice`
  * Used by [`GET /tools`](https://openrouter.ai/docs/api/api-reference/tools/list-server-tools), [`GET /tools/{name}`](https://openrouter.ai/docs/api/api-reference/tools/get-a-server-tool)

## Modified schemas

* `OutputFusionServerToolItem`: description updated

  **4 endpoints using this schema**

  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ChatRequest`: new union variant added
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `MessagesRequest`: new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ResponsesRequest`: new union variant added
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `JevRouterPlugin`: new property `allowed_models`; description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **14 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `ProviderOptions`: new property `elevenlabs`

  **14 endpoints using this schema**

  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `STTInputAudio`:
  * new union variant added
  * description updated
  * example property\_removed
  * type property\_removed
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTRequest`: description updated; new property `diarize`; new property `keyterms`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTResponse`: new property `entities`; new property `language_confidence`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTSegment`: new property `channel`; new property `speaker_label`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTWord`:
  * new property `channel`
  * new property `speaker_label`
  * new property `type`
  * description updated
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `ChatRequest`: description updated; enum property\_added
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `ResponsesRequest`: description updated; enum property\_added
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ServiceTier`: enum property\_added
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `SpeechRequest`: description updated
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)

**September 28, 2026**

## Breaking changes

* `PublicEndpoint`: required `native_tools` property addedNo action needed
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)

## New endpoints

* `GET /interns/{internId}/daemon`: Get an intern's daemon access
* [`GET /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/list-private-endpoints): List private endpoints
* [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint): Create a private endpoint
* [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint): Get a private endpoint
* [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-draft-private-endpoint): Update a draft private endpoint
* [`DELETE /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/delete-a-private-endpoint): Delete a private endpoint
* [`POST /private-endpoints/{id}/activate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/activate-a-validated-private-endpoint): Activate a validated private endpoint
* [`POST /private-endpoints/{id}/disable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/disable-a-private-endpoint): Disable a private endpoint
* [`POST /private-endpoints/{id}/enable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/enable-a-private-endpoint): Enable a private endpoint
* [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing): Set private endpoint pricing
* [`POST /private-endpoints/{id}/validate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/validate-a-draft-private-endpoint): Validate a draft private endpoint

## Modified endpoints

* [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints): response schema updated
* [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model): response schema updated
* `GET /interns/{internId}/daemon-access`: deprecated property\_added; description updated

## New schemas

* `CreatePrivateEndpointRequest`
  * Used by [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
* `CreatePrivateEndpointValidationFailedResponse`
  * Used by [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
* `DeletePrivateEndpointResponse`
  * Used by [`DELETE /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/delete-a-private-endpoint)
* `ListPrivateEndpointsResponse`
  * Used by [`GET /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/list-private-endpoints)
* `ManagedPrivateEndpoint`

  **4 endpoints using this schema**

  * [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
  * [`POST /private-endpoints/{id}/activate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/activate-a-validated-private-endpoint)
  * [`POST /private-endpoints/{id}/disable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/disable-a-private-endpoint)
  * [`POST /private-endpoints/{id}/enable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/enable-a-private-endpoint)
* `ManagedPrivateEndpointResponse`

  **4 endpoints using this schema**

  * [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
  * [`POST /private-endpoints/{id}/activate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/activate-a-validated-private-endpoint)
  * [`POST /private-endpoints/{id}/disable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/disable-a-private-endpoint)
  * [`POST /private-endpoints/{id}/enable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/enable-a-private-endpoint)
* `PrivateEndpoint`
  * Used by [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint), [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-draft-private-endpoint), [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing)
* `PrivateEndpointActivation`
  * Used by [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
* `PrivateEndpointCheck`
  * Used by [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint), [`POST /private-endpoints/{id}/validate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/validate-a-draft-private-endpoint)
* `PrivateEndpointCheckReason`
  * Used by [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint), [`POST /private-endpoints/{id}/validate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/validate-a-draft-private-endpoint)
* `PrivateEndpointDeclaredRegion`

  **7 endpoints using this schema**

  * [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint)
  * [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-draft-private-endpoint)
  * [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
  * [`POST /private-endpoints/{id}/activate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/activate-a-validated-private-endpoint)
  * [`POST /private-endpoints/{id}/disable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/disable-a-private-endpoint)
  * [`POST /private-endpoints/{id}/enable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/enable-a-private-endpoint)
  * [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing)
* `PrivateEndpointPricing`

  **4 endpoints using this schema**

  * [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint)
  * [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-draft-private-endpoint)
  * [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
  * [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing)
* `PrivateEndpointResponse`
  * Used by [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint), [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-draft-private-endpoint), [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing)
* `PrivateEndpointStatus`

  **8 endpoints using this schema**

  * [`GET /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/list-private-endpoints)
  * [`GET /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/get-a-private-endpoint)
  * [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-draft-private-endpoint)
  * [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
  * [`POST /private-endpoints/{id}/activate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/activate-a-validated-private-endpoint)
  * [`POST /private-endpoints/{id}/disable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/disable-a-private-endpoint)
  * [`POST /private-endpoints/{id}/enable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/enable-a-private-endpoint)
  * [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing)
* `PrivateEndpointSummary`

  **5 endpoints using this schema**

  * [`GET /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/list-private-endpoints)
  * [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
  * [`POST /private-endpoints/{id}/activate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/activate-a-validated-private-endpoint)
  * [`POST /private-endpoints/{id}/disable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/disable-a-private-endpoint)
  * [`POST /private-endpoints/{id}/enable`](https://openrouter.ai/docs/api/api-reference/private-endpoints/enable-a-private-endpoint)
* `PrivateEndpointValidation`
  * Used by [`POST /private-endpoints/{id}/validate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/validate-a-draft-private-endpoint)
* `PrivateEndpointValidationNullable`
  * Used by [`POST /private-endpoints`](https://openrouter.ai/docs/api/api-reference/private-endpoints/create-a-private-endpoint)
* `PrivateEndpointValidationResponse`
  * Used by [`POST /private-endpoints/{id}/validate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/validate-a-draft-private-endpoint)
* `UpdatePrivateEndpointPricingRequest`
  * Used by [`PUT /private-endpoints/{id}/pricing`](https://openrouter.ai/docs/api/api-reference/private-endpoints/set-private-endpoint-pricing)
* `UpdatePrivateEndpointRequest`
  * Used by [`PATCH /private-endpoints/{id}`](https://openrouter.ai/docs/api/api-reference/private-endpoints/update-a-draft-private-endpoint)
* `ValidatePrivateEndpointRequest`
  * Used by [`POST /private-endpoints/{id}/validate`](https://openrouter.ai/docs/api/api-reference/private-endpoints/validate-a-draft-private-endpoint)

## Modified schemas

* `AnthropicWebFetchToolResultError`: enum property\_added
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch), [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `PublicEndpoint`: example modified; new property `native_tools`
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
* `MessagesRequest`: new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)

**September 27, 2026**

## New response codes

* [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request): now returns `504`

**September 25, 2026**

## Breaking changes

* `GET /interns/{internId}/daemon-access`: codes `429` object removedNo action needed
* `SpeechInputReferenceAudioInput`: required `data` property removedNo action needed
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)

## New endpoints

* [`GET /batches`](https://openrouter.ai/docs/api/api-reference/batch/list-batches): List batches
* [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch): Create a batch
* [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch): Get a batch
* [`DELETE /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/delete-a-batch): Delete a batch

## Modified endpoints

* `GET /interns/{internId}/daemon-access`: description updated
* [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech): description updated
* [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints): response schema updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## New schemas

* `SpeechInputReferenceImage`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `SpeechInputReferenceImageInput`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `BatchDeletedObject`
  * Used by [`DELETE /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/delete-a-batch)
* `BatchDeletionOutcome`
  * Used by [`DELETE /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/delete-a-batch)
* `BatchDeletionTargets`
  * Used by [`DELETE /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/delete-a-batch)
* `BatchErrorResponse`

  **4 endpoints using this schema**

  * [`DELETE /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/delete-a-batch)
  * [`GET /batches`](https://openrouter.ai/docs/api/api-reference/batch/list-batches)
  * [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
* `BatchListItem`
  * Used by [`GET /batches`](https://openrouter.ai/docs/api/api-reference/batch/list-batches)
* `BatchListResponse`
  * Used by [`GET /batches`](https://openrouter.ai/docs/api/api-reference/batch/list-batches)
* `BatchListStatus`
  * Used by [`GET /batches`](https://openrouter.ai/docs/api/api-reference/batch/list-batches)
* `BatchListTimestamp`
  * Used by [`GET /batches`](https://openrouter.ai/docs/api/api-reference/batch/list-batches)
* `BatchObject`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
* `BatchPaymentRequiredResponse`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch)
* `BatchProviderPreferences`
  * Used by [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
* `BatchSubmitBody`
  * Used by [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
* `FinishReason`
  * Used by [`GET /batches/{id}`](https://openrouter.ai/docs/api/api-reference/batch/get-a-batch), [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)

## Modified schemas

* `PublicEndpoint`: example modified; new property `supports_image_reference`; new property `supports_multiple_audio_references`
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
* `SpeechInputReference`: description updated; new union variant added
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `SpeechInputReferenceAudio`: description updated
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `SpeechInputReferenceAudioInput`: new property `url`; description updated
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `SpeechInputReferenceText`: description updated
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `SpeechRequest`: description updated
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `ImageGenerationRequest`: enum property\_added
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **14 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /batches`](https://openrouter.ai/docs/api/api-reference/batch/create-a-batch)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `ProviderOptions`: new property `respan`

  **14 endpoints using this schema**

  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)

**September 24, 2026**

## New endpoints

* `GET /interns/{internId}/daemon-access`: Get an intern's daemon access

## Modified endpoints

* [`GET /scim/groups`](https://openrouter.ai/docs/api/api-reference/scim/list-scim-groups): new parameter `display_name`; new parameter `external_id`
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## New schemas

* `InternDaemonAccess`
  * Used by `GET /interns/{internId}/daemon-access`

## Modified schemas

* `ProviderPreferences`: new property `options`

  **10 endpoints using this schema**

  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **13 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
* `ProviderOptions`: new property `scaledown`

  **14 endpoints using this schema**

  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request)
  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
  * [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)

**September 23, 2026**

## Breaking changes

* spec: arguments property addedNo action needed
* spec: call\_id property addedNo action needed
* spec: input property addedNo action needed
* spec: name property addedNo action needed
* spec: type property addedNo action needed
* \$.components: allOf object removedNo action needed
* \$.components: anyOf object removedNo action needed
* `CustomToolCallItem`: allOf `allOf` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: required `call_id` property addedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: required `input` property addedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: required `name` property addedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: required `type` property addedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FunctionCallItem`: allOf `allOf` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FunctionCallItem`: required `arguments` property addedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FunctionCallItem`: required `call_id` property addedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FunctionCallItem`: required `name` property addedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FunctionCallItem`: required `type` property addedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## New endpoints

* `POST /interns/{internId}/invoke`: Start an intern run without waiting for it

## New schemas

* `InternInvokeAcceptedResponse`
  * Used by `POST /interns/{internId}/invoke`
* `InternInvokeRequest`
  * Used by `POST /interns/{internId}/invoke`

## Modified schemas

* `CustomToolCallItem`:
  * new property `async`
  * new property `call_id`
  * new property `id`
  * new property `input`
  * new property `name`
  * new property `namespace`
  * new property `status`
  * new property `type`
  * type property\_added
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FunctionCallItem`:
  * new property `arguments`
  * new property `async`
  * new property `call_id`
  * new property `id`
  * new property `name`
  * new property `namespace`
  * new property `status`
  * new property `subagent_id`
  * new property `subagent_items`
  * new property `type`
  * type property\_added
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**September 22, 2026**

## Modified endpoints

* [`GET /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspaces): response schema updated
* [`POST /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/create-a-workspace): response schema updated
* [`GET /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace): response schema updated
* [`PATCH /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/update-a-workspace): response schema updated
* [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-request): description updated
* `POST /interns/{internId}/chat/completions`: description updated
* `DELETE /interns/{internId}`: description updated; response schema updated
* `POST /interns/{internId}/provision`: description updated; response schema updated
* `POST /interns/{internId}/suspend`: description updated; response schema updated

## New schemas

* `AnthropicSafeguard`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `AnthropicSafeguardResult`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `SwitchyardRouterPlugin`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## Modified schemas

* `CreateWorkspaceRequest`: new property `disabled_server_tools`
  * Used by [`POST /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/create-a-workspace)
* `CreateWorkspaceResponse`: example modified
  * Used by [`POST /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/create-a-workspace)
* `GetWorkspaceResponse`: example modified
  * Used by [`GET /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace)
* `ListWorkspacesResponse`: example modified
  * Used by [`GET /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspaces)
* `MessagesDeltaEvent`: new property `safeguard_results`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `MessagesRequest`: new property `safeguards`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `UpdateWorkspaceRequest`: new property `disabled_server_tools`
  * Used by [`PATCH /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/update-a-workspace)
* `UpdateWorkspaceResponse`: example modified
  * Used by [`PATCH /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/update-a-workspace)
* `Workspace`: example modified; new property `disabled_server_tools`

  **4 endpoints using this schema**

  * [`GET /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspaces)
  * [`GET /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace)
  * [`PATCH /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/update-a-workspace)
  * [`POST /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/create-a-workspace)
* `ResponsesRequest`: description updated
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ChatRequest`: new union variant added
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `MessagesRequest`: new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ResponsesRequest`: new union variant added
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**September 21, 2026**

## Breaking changes

* `InternChatErrorMetadata`: required `retryable` property addedNo action needed
  * Used by `POST /interns/{internId}/chat/completions`
* `BYOKKey`: required `declared_zdr` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)

## Modified endpoints

* `GET /interns`: description updated; parameter `status` updated; response schema updated
* `POST /interns`: description updated; parameter `Idempotency-Key` updated; response schema updated
* `DELETE /interns/{internId}`: response schema updated; description updated
* `GET /interns/{internId}`: response schema updated; description updated
* `PATCH /interns/{internId}`: response schema updated; description updated
* `POST /interns/{internId}/chat/completions`: response schema updated; description updated
* `POST /interns/{internId}/provision`: description updated; response schema updated
* `POST /interns/{internId}/suspend`: description updated; response schema updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): response schema updated
* [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential): response schema updated
* [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential): response schema updated
* [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential): response schema updated
* `POST /interns/{internId}/chat/completions`: description updated
* `POST /interns`: description updated
* `DELETE /interns/{internId}`: description updated
* `PATCH /interns/{internId}`: description updated

## New response codes

* `PATCH /interns/{internId}`: now returns `409`
* `POST /interns/{internId}/chat/completions`: now returns `408`
* `POST /interns/{internId}/provision`: now returns `400`
* `POST /interns/{internId}/provision`: now returns `413`
* `POST /interns/{internId}/suspend`: now returns `400`
* `POST /interns/{internId}/suspend`: now returns `413`
* `POST /interns/{internId}/chat/completions`: now returns `202`
* `POST /interns`: now returns `415`
* `DELETE /interns/{internId}`: now returns `415`
* `PATCH /interns/{internId}`: now returns `415`
* `POST /interns/{internId}/provision`: now returns `415`
* `POST /interns/{internId}/suspend`: now returns `415`

## New schemas

* `XSearchOptions`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `InternChatSteeredResponse`
  * Used by `POST /interns/{internId}/chat/completions`

## Modified schemas

* `InternChatError`: example modified
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatErrorMetadata`: example modified; new property `retryable`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatErrorResponse`: example modified
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatStreamError`: example modified
  * Used by `POST /interns/{internId}/chat/completions`
* `InternLifecycleError`: example modified; new property `metadata`

  **7 endpoints using this schema**

  * `DELETE /interns/{internId}`
  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
  * `POST /interns/{internId}/provision`
  * `POST /interns/{internId}/suspend`
* `VideoGenerationRequest`: enum property\_added
  * Used by [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `VideoModel`: enum property\_added
  * Used by [`GET /videos/models`](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models)
* `ChatWebSearchShorthand`: new property `x_search`; description updated
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `Legacy_WebSearchServerTool`: new property `x_search`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `Preview_20250311_WebSearchServerTool`: new property `x_search`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `Preview_WebSearchServerTool`: new property `x_search`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `WebSearchConfig`: new property `x_search`; description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `WebSearchPlugin`: new property `x_search`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `WebSearchServerTool`: new property `x_search`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `WebSearchServerToolConfig`: new property `x_search`; description updated
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `BYOKKey`: example modified; new property `declared_zdr`

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `CreateBYOKKeyRequest`: new property `declared_zdr`
  * Used by [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `CreateBYOKKeyResponse`: example modified
  * Used by [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `GetBYOKKeyResponse`: example modified
  * Used by [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
* `ListBYOKKeysResponse`: example modified
  * Used by [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
* `UpdateBYOKKeyRequest`: new property `declared_zdr`
  * Used by [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
* `UpdateBYOKKeyResponse`: example modified
  * Used by [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)

**September 20, 2026**

## Breaking changes

* [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request): x-speakeasy-ignore `true` object removedNo action needed
* [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request): tags `alpha.decisions` property removedNo action needed

## New endpoints

* [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-system-one-request-typesafe-sdk-compatible-alias): Submit a System One request (TypeSafe SDK compatible alias)

## Modified endpoints

* [`POST /systemone`](https://openrouter.ai/docs/api/api-reference/systemone/submit-a-system-one-request): x-speakeasy-name-override object\_added; description updated; tags property\_added

**September 19, 2026**

## Breaking changes

* [`GET /key`](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-api-key): required `organization_id` property addedNo action needed
* [`GET /key`](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-api-key): required `workspace_id` property addedNo action needed
* `CreateInternRequest`: required `workspace_id` property removedNo action needed
  * Used by `POST /interns`
* `InternChatAssistantMessage`: required `content` property removedNo action needed
  * Used by `POST /interns/{internId}/chat/completions`
* `DELETE /interns/{internId}`: requestBody `requestBody` property addedAction required
  * Regenerated SDK clients: pass `{}` when no acknowledgement is needed, or `{ acknowledge_workspace_loss: true }` when deleting the intern also requires acknowledging workspace loss. Raw HTTP clients may continue to omit the body.

## Modified endpoints

* [`GET /key`](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-api-key): response schema updated
* `POST /interns`: description updated; response schema updated
* `POST /interns/{internId}/chat/completions`: description updated
* `DELETE /interns/{internId}`: description updated
* `GET /interns`: new parameter `starting_after`
* [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination): description updated; response schema updated

## New response codes

* `DELETE /interns/{internId}`: now returns `400`
* `DELETE /interns/{internId}`: now returns `413`
* [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential): now returns `403`

## New schemas

* `DeleteInternRequest`
  * Used by `DELETE /interns/{internId}`

## Modified schemas

* `InternChatCompletionRequest`: description updated
  * Used by `POST /interns/{internId}/chat/completions`
* `CreateInternRequest`: description updated
  * Used by `POST /interns`
* `TokenExchangeRequest`: pattern property\_added
  * Used by [`POST /oauth/token`](https://openrouter.ai/docs/api/api-reference/oauth/exchange-a-workload-identity-token)
* `InternChatCompletionChunk`: description updated
  * Used by `POST /interns/{internId}/chat/completions`
* `UpdateInternRequest`: description updated; minLength property\_added; pattern property\_added
  * Used by `PATCH /interns/{internId}`
* `InternListResponse`: new property `next_cursor`
  * Used by `GET /interns`

**September 18, 2026**

## Breaking changes

* [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-questions-and-answers-request): tags `Decisions` property removedNo action needed
* \$.tags: Decisions object removedNo action needed
* `Intern`: properties `createdAt` object removedAction required

  * Update response parsing from `createdAt` to `created_at`.

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: properties `lastFailureMessage` object removedAction required

  * Update response parsing from `lastFailureMessage` to `last_failure_message`.

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: properties `updatedAt` object removedAction required

  * Update response parsing from `updatedAt` to `updated_at`.

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: properties `workspaceId` object removedAction required

  * Update response parsing from `workspaceId` to `workspace_id`.

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `created_at` property addedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `last_failure_message` property addedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `updated_at` property addedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `workspace_id` property addedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `createdAt` property removedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `lastFailureMessage` property removedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `updatedAt` property removedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `workspaceId` property removedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: properties `stepLabel` object removedAction required

  * Update response parsing from `stepLabel` to `step_label`.

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: properties `stepNumber` object removedAction required

  * Update response parsing from `stepNumber` to `step_number`.

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: properties `totalSteps` object removedAction required

  * Update response parsing from `totalSteps` to `total_steps`.

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `step_label` property addedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `step_number` property addedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `total_steps` property addedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `stepLabel` property removedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `stepNumber` property removedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `Intern`: required `totalSteps` property removedNo action needed

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `POST /interns`: properties `createdAt` object removedAction required
  * Update response parsing from `createdAt` to `created_at`.
* `POST /interns`: properties `lastFailureMessage` object removedAction required
  * Update response parsing from `lastFailureMessage` to `last_failure_message`.
* `POST /interns`: properties `updatedAt` object removedAction required
  * Update response parsing from `updatedAt` to `updated_at`.
* `POST /interns`: properties `workspaceId` object removedAction required
  * Update response parsing from `workspaceId` to `workspace_id`.
* `POST /interns`: required `created_at` property addedNo action needed
* `POST /interns`: required `last_failure_message` property addedNo action needed
* `POST /interns`: required `updated_at` property addedNo action needed
* `POST /interns`: required `workspace_id` property addedNo action needed
* `POST /interns`: required `createdAt` property removedNo action needed
* `POST /interns`: required `lastFailureMessage` property removedNo action needed
* `POST /interns`: required `updatedAt` property removedNo action needed
* `POST /interns`: required `workspaceId` property removedNo action needed
* `POST /interns`: properties `stepLabel` object removedAction required
  * Update response parsing from `stepLabel` to `step_label`.
* `POST /interns`: properties `stepNumber` object removedAction required
  * Update response parsing from `stepNumber` to `step_number`.
* `POST /interns`: properties `totalSteps` object removedAction required
  * Update response parsing from `totalSteps` to `total_steps`.
* `POST /interns`: required `step_label` property addedNo action needed
* `POST /interns`: required `step_number` property addedNo action needed
* `POST /interns`: required `total_steps` property addedNo action needed
* `POST /interns`: required `stepLabel` property removedNo action needed
* `POST /interns`: required `stepNumber` property removedNo action needed
* `POST /interns`: required `totalSteps` property removedNo action needed
* `GET /interns/{internId}`: properties `createdAt` object removedAction required
  * Update response parsing from `createdAt` to `created_at`.
* `GET /interns/{internId}`: properties `lastFailureMessage` object removedAction required
  * Update response parsing from `lastFailureMessage` to `last_failure_message`.
* `GET /interns/{internId}`: properties `updatedAt` object removedAction required
  * Update response parsing from `updatedAt` to `updated_at`.
* `GET /interns/{internId}`: properties `workspaceId` object removedAction required
  * Update response parsing from `workspaceId` to `workspace_id`.
* `GET /interns/{internId}`: required `created_at` property addedNo action needed
* `GET /interns/{internId}`: required `last_failure_message` property addedNo action needed
* `GET /interns/{internId}`: required `updated_at` property addedNo action needed
* `GET /interns/{internId}`: required `workspace_id` property addedNo action needed
* `GET /interns/{internId}`: required `createdAt` property removedNo action needed
* `GET /interns/{internId}`: required `lastFailureMessage` property removedNo action needed
* `GET /interns/{internId}`: required `updatedAt` property removedNo action needed
* `GET /interns/{internId}`: required `workspaceId` property removedNo action needed
* `GET /interns/{internId}`: properties `stepLabel` object removedAction required
  * Update response parsing from `stepLabel` to `step_label`.
* `GET /interns/{internId}`: properties `stepNumber` object removedAction required
  * Update response parsing from `stepNumber` to `step_number`.
* `GET /interns/{internId}`: properties `totalSteps` object removedAction required
  * Update response parsing from `totalSteps` to `total_steps`.
* `GET /interns/{internId}`: required `step_label` property addedNo action needed
* `GET /interns/{internId}`: required `step_number` property addedNo action needed
* `GET /interns/{internId}`: required `total_steps` property addedNo action needed
* `GET /interns/{internId}`: required `stepLabel` property removedNo action needed
* `GET /interns/{internId}`: required `stepNumber` property removedNo action needed
* `GET /interns/{internId}`: required `totalSteps` property removedNo action needed
* `PATCH /interns/{internId}`: properties `createdAt` object removedAction required
  * Update response parsing from `createdAt` to `created_at`.
* `PATCH /interns/{internId}`: properties `lastFailureMessage` object removedAction required
  * Update response parsing from `lastFailureMessage` to `last_failure_message`.
* `PATCH /interns/{internId}`: properties `updatedAt` object removedAction required
  * Update response parsing from `updatedAt` to `updated_at`.
* `PATCH /interns/{internId}`: properties `workspaceId` object removedAction required
  * Update response parsing from `workspaceId` to `workspace_id`.
* `PATCH /interns/{internId}`: required `created_at` property addedNo action needed
* `PATCH /interns/{internId}`: required `last_failure_message` property addedNo action needed
* `PATCH /interns/{internId}`: required `updated_at` property addedNo action needed
* `PATCH /interns/{internId}`: required `workspace_id` property addedNo action needed
* `PATCH /interns/{internId}`: required `createdAt` property removedNo action needed
* `PATCH /interns/{internId}`: required `lastFailureMessage` property removedNo action needed
* `PATCH /interns/{internId}`: required `updatedAt` property removedNo action needed
* `PATCH /interns/{internId}`: required `workspaceId` property removedNo action needed
* `PATCH /interns/{internId}`: properties `stepLabel` object removedAction required
  * Update response parsing from `stepLabel` to `step_label`.
* `PATCH /interns/{internId}`: properties `stepNumber` object removedAction required
  * Update response parsing from `stepNumber` to `step_number`.
* `PATCH /interns/{internId}`: properties `totalSteps` object removedAction required
  * Update response parsing from `totalSteps` to `total_steps`.
* `PATCH /interns/{internId}`: required `step_label` property addedNo action needed
* `PATCH /interns/{internId}`: required `step_number` property addedNo action needed
* `PATCH /interns/{internId}`: required `total_steps` property addedNo action needed
* `PATCH /interns/{internId}`: required `stepLabel` property removedNo action needed
* `PATCH /interns/{internId}`: required `stepNumber` property removedNo action needed
* `PATCH /interns/{internId}`: required `totalSteps` property removedNo action needed

## Modified endpoints

* [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-questions-and-answers-request): tags property\_added
* [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-questions-and-answers-request): request schema updated; response schema updated
* `GET /interns`: response schema updated
* `POST /interns`: response schema updated
* `GET /interns/{internId}`: response schema updated
* `PATCH /interns/{internId}`: response schema updated

## Modified schemas

* `DecisionsScoreQuestion`: minItems property\_added
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request)
* `DecisionsChoiceQuestion`: new union variant added; description updated; type property\_removed
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-questions-and-answers-request)
* `DecisionsNoulQuestion`:
  * new union variant added
  * property `false` updated
  * property `true` updated
  * description updated
  * type property\_removed
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-questions-and-answers-request)
* `DecisionsScoreAnswer`: new union variant added; description updated; type property\_removed
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-questions-and-answers-request)
* `DecisionsScoreQuestion`: new union variant added; description updated; type property\_removed
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/alphadecisions/submit-a-decisions-questions-and-answers-request)
* `PublicEndpoint`: new property `decisions`
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
* `Intern`:

  * example modified
  * new property `created_at`
  * new property `last_failure_message`
  * new property `updated_at`
  * new property `workspace_id`
  * new property `step_label`
  * new property `step_number`
  * new property `total_steps`

  **4 endpoints using this schema**

  * `GET /interns`
  * `GET /interns/{internId}`
  * `PATCH /interns/{internId}`
  * `POST /interns`
* `InternListResponse`: example modified
  * Used by `GET /interns`
* `VaultSecret`: description updated

  **5 endpoints using this schema**

  * [`GET /vault/interns/{internId}/secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-intern-secrets)
  * [`GET /vault/secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-workspace-secrets)
  * [`POST /vault/interns/{internId}/secrets/copy`](https://openrouter.ai/docs/api/api-reference/vault/copy-workspace-secrets-to-an-intern)
  * [`PUT /vault/interns/{internId}/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-an-intern-secret)
  * [`PUT /vault/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-a-workspace-secret)

**September 17, 2026**

## New endpoints

* `POST /interns/{internId}/chat/completions`: Stream a chat completion with an intern
* [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request): Submit a Decisions (questions and answers) request

## Modified endpoints

* [`GET /containers/{container_id}/files`](https://openrouter.ai/docs/api/api-reference/containers/list-container-files): description updated
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): description updated
* [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response): description updated; response schema updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated
* [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties): description updated
* [`GET /models/count`](https://openrouter.ai/docs/api/api-reference/models/get-total-count-of-available-models): description updated
* [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails): description updated
* [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request): x-speakeasy-name-override modified

## New schemas

* `InternApprovalMode`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatAssistantMessage`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatChoice`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatCompletionChunk`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatCompletionRequest`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatDelta`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatDeveloperMessage`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatEchoedToolCall`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatEchoedToolCallFunction`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatError`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatErrorMetadata`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatErrorResponse`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatMessage`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatMessageContent`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatPromptTokensDetails`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatStreamError`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatStreamingResponse`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatSystemMessage`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatTextPart`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatToolCall`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatToolCallFunction`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatToolMessage`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatUsage`
  * Used by `POST /interns/{internId}/chat/completions`
* `InternChatUserMessage`
  * Used by `POST /interns/{internId}/chat/completions`
* `DecisionsChoiceAnswer`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request)
* `DecisionsChoiceQuestion`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request)
* `DecisionsNoulAnswer`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request)
* `DecisionsNoulQuestion`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request)
* `DecisionsRequest`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request)
* `DecisionsResponse`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request)
* `DecisionsScoreAnswer`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request)
* `DecisionsScoreQuestion`
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request)

## Modified schemas

* `AnthropicImageBlockParam`: new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ContainerFileListResponse`: description updated
  * Used by [`GET /containers/{container_id}/files`](https://openrouter.ai/docs/api/api-reference/containers/list-container-files)
* `InputImage`: description updated; new property `file_id`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `STTResponse`: new property `confidence`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTWord`: example modified; new property `confidence`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `GenerationResponse`: property `api_type` updated
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `ImageOutputModality`: enum property\_added
  * Used by [`GET /images/models`](https://openrouter.ai/docs/api/api-reference/images/list-image-generation-models)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `OutputModality`: enum property\_added

  **5 endpoints using this schema**

  * [`GET /embeddings/models`](https://openrouter.ai/docs/api/api-reference/embeddings/list-all-embeddings-models)
  * [`GET /model/{author}/{slug}`](https://openrouter.ai/docs/api/api-reference/models/get-a-model-by-its-slug)
  * [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties)
  * [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
* `ProviderName`: enum property\_added

  **12 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ProviderOptions`: new property `typesafe`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `DecisionsRequest`: new union variant added; description updated
  * Used by [`POST /api/alpha/decisions`](https://openrouter.ai/docs/api/api-reference/decisions/submit-a-decisions-questions-and-answers-request)
* `VideoGenerationRequest`: new property `previous_job_id`
  * Used by [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `VideoGenerationResponse`: example modified; description updated
  * Used by [`GET /videos/{jobId}`](https://openrouter.ai/docs/api/api-reference/video-generation/poll-video-generation-status), [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderOptions`: new property `unbiased`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)

**September 16, 2026**

## Breaking changes

* [`GET /key`](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-api-key): required `free_model_daily_requests` property addedNo action needed
* [`GET /key`](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-api-key): required `allowed_data_regions` property addedNo action needed

## New endpoints

* [`GET /vault/interns/{internId}/secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-intern-secrets): List intern secrets
* [`POST /vault/interns/{internId}/secrets/copy`](https://openrouter.ai/docs/api/api-reference/vault/copy-workspace-secrets-to-an-intern): Copy workspace secrets to an intern
* [`PUT /vault/interns/{internId}/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-an-intern-secret): Store an intern secret
* [`DELETE /vault/interns/{internId}/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/delete-an-intern-secret): Delete an intern secret
* [`GET /vault/secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-workspace-secrets): List workspace secrets
* [`PUT /vault/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-a-workspace-secret): Store a workspace secret
* [`DELETE /vault/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/delete-a-workspace-secret): Delete a workspace secret

## Modified endpoints

* [`GET /key`](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-api-key): response schema updated
* [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request): request schema updated
* [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request): request schema updated
* [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription): request schema updated

## New response codes

* [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription): now returns `504`

## New schemas

* `FreeModelDailyRequests`
  * Used by [`GET /key`](https://openrouter.ai/docs/api/api-reference/api-keys/get-current-api-key)
* `GatewayTimeoutResponse`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `GatewayTimeoutResponseErrorData`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `VaultSecret`

  **5 endpoints using this schema**

  * [`GET /vault/interns/{internId}/secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-intern-secrets)
  * [`GET /vault/secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-workspace-secrets)
  * [`POST /vault/interns/{internId}/secrets/copy`](https://openrouter.ai/docs/api/api-reference/vault/copy-workspace-secrets-to-an-intern)
  * [`PUT /vault/interns/{internId}/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-an-intern-secret)
  * [`PUT /vault/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-a-workspace-secret)
* `VaultSecretCopyRequest`
  * Used by [`POST /vault/interns/{internId}/secrets/copy`](https://openrouter.ai/docs/api/api-reference/vault/copy-workspace-secrets-to-an-intern)
* `VaultSecretCopyResponse`
  * Used by [`POST /vault/interns/{internId}/secrets/copy`](https://openrouter.ai/docs/api/api-reference/vault/copy-workspace-secrets-to-an-intern)
* `VaultSecretListResponse`
  * Used by [`GET /vault/interns/{internId}/secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-intern-secrets), [`GET /vault/secrets`](https://openrouter.ai/docs/api/api-reference/vault/list-workspace-secrets)
* `VaultSecretResponse`
  * Used by [`PUT /vault/interns/{internId}/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-an-intern-secret), [`PUT /vault/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-a-workspace-secret)
* `VaultSecretWriteRequest`
  * Used by [`PUT /vault/interns/{internId}/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-an-intern-secret), [`PUT /vault/secrets/{name}`](https://openrouter.ai/docs/api/api-reference/vault/store-a-workspace-secret)

## Modified schemas

* `OutputBashServerToolItem`: new property `error`; \$ref modified
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputShellCallOutputItem`: description updated; new property `error`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputShellServerToolItem`: new property `error`; \$ref modified
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ShellCallOutputItem`: new property `error`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ImageGenerationRequest`: new property `session_id`
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
* `STTRequest`: new property `session_id`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `SpeechRequest`: new property `session_id`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `VideoGenerationRequest`: new property `session_id`
  * Used by [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)

**September 15, 2026**

## Modified endpoints

* [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail): description updated
* [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request): request schema updated
* [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request): request schema updated

## New response codes

* [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail): now returns `403`
* [`POST /guardrails/{id}/assignments/keys`](https://openrouter.ai/docs/api/api-reference/guardrails/bulk-assign-keys-to-a-guardrail): now returns `403`

## Modified schemas

* `ImageGenerationRequest`: enum property\_added
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
* `ImageGenerationRequest`: maxLength property\_added
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
* `STTRequest`: new property `user`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `SpeechRequest`: new property `user`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `VideoGenerationRequest`: new property `user`
  * Used by [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ImageGenerationRequest`: new property `trace`
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
* `STTRequest`: new property `trace`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `SpeechRequest`: new property `trace`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `VideoGenerationRequest`: new property `trace`
  * Used by [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)

**September 14, 2026**

## Modified endpoints

* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## New response codes

* [`GET /videos/{jobId}/content`](https://openrouter.ai/docs/api/api-reference/video-generation/download-generated-video-content): now returns `409`
* [`GET /videos/{jobId}/content`](https://openrouter.ai/docs/api/api-reference/video-generation/download-generated-video-content): now returns `410`

## Modified schemas

* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **11 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ProviderOptions`: new property `assemblyai`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)

**September 11, 2026**

## Modified endpoints

* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): request schema updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## Modified schemas

* `CustomTool`: new property `async`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FusionPlugin`: example modified; description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FusionServerToolConfig`: example modified

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FusionServerTool_OpenRouter`: example modified

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `NamespaceFunctionTool`: new property `async`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OpenAIResponseCustomToolCall`: new property `async`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OpenAIResponseFunctionToolCall`: new property `async`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputCustomToolCallItem`: new property `async`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputItemCustomToolCall`: new property `async`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputItemFunctionCall`: new property `async`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ResponsesErrorField`: enum property\_added
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)

**September 10, 2026**

## Breaking changes

* `/workspaces/{id}/budgets`: endpoint object removedAction required
  * SDK and Terraform callers: rename the path argument from `id` to `workspace_ref` (`workspaceRef` in camelCase clients). The URL value itself is unchanged.
* `/workspaces/{id}/budgets/{interval}`: endpoint object removedAction required
  * SDK and Terraform callers: rename the path argument from `id` to `workspace_ref` (`workspaceRef` in camelCase clients). The URL value itself is unchanged.

## New endpoints

* [`GET /workspaces/{workspace_ref}/budgets`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspace-budgets): List workspace budgets
* [`GET /workspaces/{workspace_ref}/budgets/{interval}`](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace-budget): Get a workspace budget
* [`PUT /workspaces/{workspace_ref}/budgets/{interval}`](https://openrouter.ai/docs/api/api-reference/workspaces/create-or-update-a-workspace-budget): Create or update a workspace budget
* [`DELETE /workspaces/{workspace_ref}/budgets/{interval}`](https://openrouter.ai/docs/api/api-reference/workspaces/delete-a-workspace-budget): Delete a workspace budget

**September 9, 2026**

## Breaking changes

* `BYOKKey`: required `is_byok_only` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `BYOKKey`: required `is_required` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)

## Modified endpoints

* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated; response schema updated
* [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential): response schema updated
* [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential): response schema updated
* [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential): response schema updated

## Modified schemas

* `BYOKKey`:

  * example modified
  * new property `is_byok_only`
  * new property `is_required`
  * description updated

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `CreateBYOKKeyRequest`: new property `is_byok_only`; new property `is_required`; description updated
  * Used by [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `CreateBYOKKeyResponse`: example modified
  * Used by [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `GetBYOKKeyResponse`: example modified
  * Used by [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
* `ListBYOKKeysResponse`: example modified
  * Used by [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **11 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ProviderOptions`: new property `near-ai`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `UpdateBYOKKeyRequest`: new property `is_byok_only`; new property `is_required`; description updated
  * Used by [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
* `UpdateBYOKKeyResponse`: example modified
  * Used by [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
* `AnthropicThinkingBlockBinding`: new property `mismatch_behavior`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)

**September 8, 2026**

## Breaking changes

* `SandboxSleepAfterSeconds`: schema object removedAction required
  * Remove `sleep_after_seconds` from bash and shell tool configuration. There is no replacement; container lifecycle now uses the service-managed behavior.
* `BashServerToolConfig`: properties `sleep_after_seconds` object removedAction required

  * Remove `sleep_after_seconds` from bash and shell tool configuration. There is no replacement; container lifecycle now uses the service-managed behavior.

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ShellServerToolConfig`: properties `sleep_after_seconds` object removedAction required

  * Remove `sleep_after_seconds` from bash and shell tool configuration. There is no replacement; container lifecycle now uses the service-managed behavior.

  **4 endpoints using this schema**

  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `BYOKProviderSlug`: enum `ncompass` property removedAction required

  * Remove `ncompass` from BYOK and provider configuration. The provider has been retired and has no replacement slug.

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `ProviderName`: enum `NCompass` property removedAction required

  * Remove `ncompass` from BYOK and provider configuration. The provider has been retired and has no replacement slug.

  **11 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): enum `ncompass` property removedAction required
  * Remove `ncompass` from BYOK and provider configuration. The provider has been retired and has no replacement slug.
* `BYOKProviderSlug`: enum `prime-intellect` property removedAction required

  * Replace the provider slug and configuration key `prime-intellect` with `primeintellect`.

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `ProviderOptions`: properties `prime-intellect` object removedAction required

  * Replace the provider slug and configuration key `prime-intellect` with `primeintellect`.

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): enum `prime-intellect` property removedAction required
  * Replace the provider slug and configuration key `prime-intellect` with `primeintellect`.

## Modified endpoints

* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## Modified schemas

* `ChatDeveloperMessage`: new property `configuration_update`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `ProviderOptions`: new property `primeintellect`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ImageGenerationRequest`: enum property\_added
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)

**September 7, 2026**

## Modified schemas

* `STTInputAudio`: pattern property\_added
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)

**September 5, 2026**

## Breaking changes

* `ObservabilityArizeDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityBraintrustDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityClickhouseDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDatadogDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityGrafanaDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangfuseDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangsmithDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityNewrelicDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOpikDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOtelCollectorDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityPosthogDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityRampDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityS3Destination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySentryDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySnowflakeDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWeaveDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWebhookDestination`: required `regions` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations): required `regions` property addedNo action needed

## Modified endpoints

* [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations): response schema updated
* [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination): response schema updated
* [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination): response schema updated
* [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination): response schema updated

## New schemas

* `ObservabilityDataRegion`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDataRegionInput`
  * Used by [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination), [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)

## Modified schemas

* `CreateObservabilityDestinationRequest`: new property `regions`
  * Used by [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `CreateObservabilityDestinationResponse`: example modified
  * Used by [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `GetObservabilityDestinationResponse`: example modified
  * Used by [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
* `ListObservabilityDestinationsResponse`: example modified
  * Used by [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
* `ObservabilityArizeDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityBraintrustDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityClickhouseDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDatadogDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDestination`: example modified

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityGrafanaDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangfuseDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangsmithDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityNewrelicDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOpikDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOtelCollectorDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityPosthogDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityRampDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityS3Destination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySentryDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySnowflakeDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWeaveDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWebhookDestination`: example modified; new property `regions`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `UpdateObservabilityDestinationRequest`: new property `regions`
  * Used by [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
* `UpdateObservabilityDestinationResponse`: example modified
  * Used by [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)

**September 4, 2026**

## New endpoints

* [`POST /scim/sync-jobs`](https://openrouter.ai/docs/api/api-reference/scim/start-a-scim-directory-sync): Start a SCIM directory sync
* [`GET /scim/sync-jobs/{id}`](https://openrouter.ai/docs/api/api-reference/scim/get-scim-directory-sync-status): Get SCIM directory sync status

## New schemas

* `CreateScimSyncJobResponse`
  * Used by [`POST /scim/sync-jobs`](https://openrouter.ai/docs/api/api-reference/scim/start-a-scim-directory-sync)
* `GetScimSyncJobResponse`
  * Used by [`GET /scim/sync-jobs/{id}`](https://openrouter.ai/docs/api/api-reference/scim/get-scim-directory-sync-status)
* `ScimSyncJob`
  * Used by [`GET /scim/sync-jobs/{id}`](https://openrouter.ai/docs/api/api-reference/scim/get-scim-directory-sync-status), [`POST /scim/sync-jobs`](https://openrouter.ai/docs/api/api-reference/scim/start-a-scim-directory-sync)
* `ConfigurationUpdateItem`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ConfigurationUpdateReasoning`

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `McpHttpError`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `McpProtocolError`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `McpToolCallError`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `McpToolExecutionError`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## Modified schemas

* `ChatSystemMessage`: new property `configuration_update`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `McpCallItem`: \$ref modified
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ResponsesErrorField`: enum property\_added
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `SandboxSleepAfterSeconds`: description updated; example modified

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**September 3, 2026**

## New endpoints

* [`GET /oauth/jwks`](https://openrouter.ai/docs/api/api-reference/oauth/openrouter-access-token-signing-keys): OpenRouter access token signing keys
* [`POST /oauth/token`](https://openrouter.ai/docs/api/api-reference/oauth/exchange-a-workload-identity-token): Exchange a workload identity token

## Modified endpoints

* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): description updated; request schema updated
* [`DELETE /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/delete-an-api-key): description updated
* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): description updated
* [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail): description updated; request schema updated
* [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail): description updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## New response codes

* [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail): now returns `409`

## New schemas

* `OAuthErrorResponse`
  * Used by [`POST /oauth/token`](https://openrouter.ai/docs/api/api-reference/oauth/exchange-a-workload-identity-token)
* `OAuthJwks`
  * Used by [`GET /oauth/jwks`](https://openrouter.ai/docs/api/api-reference/oauth/openrouter-access-token-signing-keys)
* `TokenExchangeRequest`
  * Used by [`POST /oauth/token`](https://openrouter.ai/docs/api/api-reference/oauth/exchange-a-workload-identity-token)
* `TokenExchangeResponse`
  * Used by [`POST /oauth/token`](https://openrouter.ai/docs/api/api-reference/oauth/exchange-a-workload-identity-token)

## Modified schemas

* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **11 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ProviderOptions`: new property `prime-intellect`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)

**September 2, 2026**

## Breaking changes

* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): properties `external_api_key` object removedNo action needed
* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): properties `external_user` object removedNo action needed

## Modified endpoints

* [`POST /scim/group-mappings`](https://openrouter.ai/docs/api/api-reference/scim/create-a-scim-group-mapping): description updated
* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): description updated

## New response codes

* [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech): now returns `403`
* [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription): now returns `403`
* [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request): now returns `403`
* [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request): now returns `403`
* [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request): now returns `403`
* [`GET /videos/{jobId}`](https://openrouter.ai/docs/api/api-reference/video-generation/poll-video-generation-status): now returns `403`
* [`GET /videos/{jobId}/content`](https://openrouter.ai/docs/api/api-reference/video-generation/download-generated-video-content): now returns `403`

## New schemas

* `GuardrailDataRegion`

  **4 endpoints using this schema**

  * [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
  * [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
  * [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
  * [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)

## Modified schemas

* `CostDetails`: example modified; description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `Usage`: example modified
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ChatContentVideoInput`: new property `processing`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `InputVideo`: new property `processing`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `Legacy_ChatContentVideoInput`: new property `processing`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `OpenRouterMetadata`: example modified; new property `generation_time`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CreateGuardrailRequest`: new property `allowed_data_regions`
  * Used by [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `Guardrail`: example modified; new property `allowed_data_regions`

  **4 endpoints using this schema**

  * [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
  * [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
  * [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
  * [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `UpdateGuardrailRequest`: new property `allowed_data_regions`
  * Used by [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)

**September 1, 2026**

## Breaking changes

* `AnthropicThinkingBlockBinding`: required `prefix_mismatch_behavior` property removedNo action needed
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `AnthropicThinkingBlockBinding`: type `string` modifiedNo action needed
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)

## Modified endpoints

* [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties): description updated
* [`GET /models/count`](https://openrouter.ai/docs/api/api-reference/models/get-total-count-of-available-models): description updated
* [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails): description updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## New schemas

* `AnthropicInputTransformation`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `AnthropicMessageOutputConfig`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `AnthropicOutputEffort`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `AnthropicSystemClearAt`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `AnthropicThinkingBlockBinding`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ORAnthropicServerToolUsage`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `AnthropicContainerSkill`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)

## Modified schemas

* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `AnthropicThinkingDisplay`: enum property\_added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `BaseMessagesResult`: new property `input_transformations`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `MessagesMessageParam`: new property `clear_at`; new property `output_config`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `MessagesStartEvent`: new property `input_transformations`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `MessagesDeltaEvent`: property `server_tool_use` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `AnthropicContainer`: example modified; new property `skills`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `AnthropicSystemClearAt`: enum property\_added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `AnthropicThinkingBlockBinding`: enum property\_added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)

**August 31, 2026**

## Modified schemas

* `CostDetails`: example modified; new property `server_tool_cost`

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `Usage`: example modified
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputCustomToolCallItem`: example modified; new property `status`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputItemCustomToolCall`: example modified; new property `status`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 30, 2026**

## Modified endpoints

* [`POST /analytics/query`](https://openrouter.ai/docs/api/api-reference/analytics/query-analytics-data): description updated; request schema updated
* [`POST /auth/keys/code`](https://openrouter.ai/docs/api/api-reference/oauth/create-authorization-code): description updated
* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): description updated

**August 28, 2026**

## Breaking changes

* `PublicEndpoint`: required `supports_tool_choice` property addedNo action needed
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)

## Modified endpoints

* [`POST /containers/{container_id}/files/{file_id}/promote`](https://openrouter.ai/docs/api/api-reference/containers/promote-a-container-file-into-workspace-documents): description updated; response schema updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated
* [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails): description updated; new parameter `output_modalities`

## New schemas

* `ToolChoiceSupport`
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)

## Modified schemas

* `PublicEndpoint`: example modified; new property `supports_tool_choice`
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **11 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ProviderOptions`: new property `ollama`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `ProviderOptions`: new property `cosine`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)

**August 27, 2026**

## Modified schemas

* `CreateGuardrailResponse`: example modified
  * Used by [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `GetGuardrailResponse`: example modified
  * Used by [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
* `ListGuardrailsResponse`: example modified
  * Used by [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
* `UpdateGuardrailResponse`: example modified
  * Used by [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)

**August 26, 2026**

## Breaking changes

* [`GET /containers/{container_id}/files`](https://openrouter.ai/docs/api/api-reference/containers/list-container-files): x-hidden `true` object removedNo action needed
* [`GET /containers/{container_id}/files/{file_id}`](https://openrouter.ai/docs/api/api-reference/containers/retrieve-a-container-file): x-hidden `true` object removedNo action needed
* [`GET /containers/{container_id}/files/{file_id}/content`](https://openrouter.ai/docs/api/api-reference/containers/download-container-file-content): x-hidden `true` object removedNo action needed
* [`POST /containers/{container_id}/files/{file_id}/promote`](https://openrouter.ai/docs/api/api-reference/containers/promote-a-container-file-into-workspace-documents): x-hidden `true` object removedNo action needed
* [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files): x-hidden `true` object removedNo action needed
* [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file): x-hidden `true` object removedNo action needed
* [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file): x-hidden `true` object removedNo action needed
* [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata): x-hidden `true` object removedNo action needed
* [`GET /files/{file_id}/content`](https://openrouter.ai/docs/api/api-reference/files/download-file-content): x-hidden `true` object removedNo action needed

## Modified endpoints

* [`DELETE /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/delete-a-workspace): description updated
* [`DELETE /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/delete-a-workspace): new parameter `confirm_default_workspace_deletion`
* [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file): parameter `file_id` updated
* [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata): parameter `file_id` updated
* [`GET /files/{file_id}/content`](https://openrouter.ai/docs/api/api-reference/files/download-file-content): parameter `file_id` updated

## Modified schemas

* `ImageGenerationRequest`: new property `user`
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
* `ShellCallOutputItem`: new property `container_id`; new property `files`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ContentFilterBuiltinEntry`: description updated

  **4 endpoints using this schema**

  * [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
  * [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
  * [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
  * [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `ContentFilterBuiltinSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
  * [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
  * [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
  * [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)

**August 25, 2026**

## New endpoints

* [`POST /containers/{container_id}/files/{file_id}/promote`](https://openrouter.ai/docs/api/api-reference/containers/promote-a-container-file-into-workspace-documents): Promote a container file into workspace documents

## New response codes

* [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech): now returns `413`
* [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription): now returns `413`
* [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request): now returns `413`
* [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request): now returns `413`

## New schemas

* `ContainerNetworkPolicy`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ContainerFileIds`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## Modified schemas

* `ContainerAutoEnvironment`: new property `network_policy`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ContainerReferenceEnvironment`: new property `network_policy`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `SandboxSleepAfterSeconds`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ContainerAutoEnvironment`: new property `file_ids`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ContainerReferenceEnvironment`: new property `file_ids`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `PublicEndpoint`: description updated
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
* `TopProviderInfo`: description updated

  **4 endpoints using this schema**

  * [`GET /embeddings/models`](https://openrouter.ai/docs/api/api-reference/embeddings/list-all-embeddings-models)
  * [`GET /model/{author}/{slug}`](https://openrouter.ai/docs/api/api-reference/models/get-a-model-by-its-slug)
  * [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties)
  * [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails)
* `CreateGuardrailRequest`: description updated
  * Used by [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `ImagePricingEntry`: enum property\_added
  * Used by [`GET /images/models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/images/list-endpoints-for-an-image-model)
* `FusionPlugin`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 24, 2026**

## Breaking changes

* `ContainerReferenceEnvironment`: maxLength `20` modifiedNo action needed

  * No action required for existing consumers. The maximum container reference length increased from 20 to 40 characters.

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `/containers/{session_id}/files`: endpoint object removedAction required
  * Use the corresponding `/containers/{container_id}/...` endpoint and pass the canonical `container_id` returned by a bash or shell tool result instead of the original session ID.
* `/containers/{session_id}/files/{file_id}`: endpoint object removedAction required
  * Use the corresponding `/containers/{container_id}/...` endpoint and pass the canonical `container_id` returned by a bash or shell tool result instead of the original session ID.
* `/containers/{session_id}/files/{file_id}/content`: endpoint object removedAction required
  * Use the corresponding `/containers/{container_id}/...` endpoint and pass the canonical `container_id` returned by a bash or shell tool result instead of the original session ID.
* `ObservabilityDatadogDestination`: default `https://api.us5.datadoghq.com` modifiedAction required

  * If your Datadog site is US5 and you relied on the omitted URL default, explicitly set `url` to `https://api.us5.datadoghq.com`. The new default is the US1 endpoint, `https://api.datadoghq.com`.

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* [`GET /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/list-api-keys): required `external_user` property addedNo action needed
* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): required `external_user` property addedAction required
  * Connect client-secret callers must include a non-empty `external_user` when creating a key. Management-key callers should continue to omit this Connect-only field.
* [`GET /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/get-a-single-api-key): required `external_user` property addedNo action needed
* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): required `external_user` property addedNo action needed

## New endpoints

* [`GET /containers/{session_id}/files`](https://openrouter.ai/docs/api/api-reference/containers/list-container-files): List container files
* [`GET /containers/{session_id}/files/{file_id}`](https://openrouter.ai/docs/api/api-reference/containers/retrieve-a-container-file): Retrieve a container file
* [`GET /containers/{session_id}/files/{file_id}/content`](https://openrouter.ai/docs/api/api-reference/containers/download-container-file-content): Download container file content
* [`GET /containers/{container_id}/files`](https://openrouter.ai/docs/api/api-reference/containers/list-container-files): List container files
* [`GET /containers/{container_id}/files/{file_id}`](https://openrouter.ai/docs/api/api-reference/containers/retrieve-a-container-file): Retrieve a container file
* [`GET /containers/{container_id}/files/{file_id}/content`](https://openrouter.ai/docs/api/api-reference/containers/download-container-file-content): Download container file content

## Modified endpoints

* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): request schema updated
* [`GET /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/list-api-keys): response schema updated
* [`POST /keys`](https://openrouter.ai/docs/api/api-reference/api-keys/create-a-new-api-key): description updated; request schema updated; response schema updated
* [`GET /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/get-a-single-api-key): response schema updated
* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): response schema updated
* [`DELETE /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/delete-an-api-key): description updated
* [`PATCH /keys/{hash}`](https://openrouter.ai/docs/api/api-reference/api-keys/update-an-api-key): description updated

## New schemas

* `ContainerFile`
  * Used by [`GET /containers/{session_id}/files`](https://openrouter.ai/docs/api/api-reference/containers/list-container-files), [`GET /containers/{session_id}/files/{file_id}`](https://openrouter.ai/docs/api/api-reference/containers/retrieve-a-container-file)
* `ContainerFileListResponse`
  * Used by [`GET /containers/{session_id}/files`](https://openrouter.ai/docs/api/api-reference/containers/list-container-files)

## Modified schemas

* `ContainerFile`: description updated; example modified
  * Used by [`GET /containers/{container_id}/files`](https://openrouter.ai/docs/api/api-reference/containers/list-container-files), [`GET /containers/{container_id}/files/{file_id}`](https://openrouter.ai/docs/api/api-reference/containers/retrieve-a-container-file)
* `ContainerReferenceEnvironment`: description updated; example modified

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `MessagesBashToolResultBlock`: new property `container_id`; new property `files`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `MessagesShellToolResultBlock`: new property `container_id`; new property `files`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ORAnthropicBashToolResult`: new property `container_id`; new property `files`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ORAnthropicShellToolResult`: new property `container_id`; new property `files`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `OutputBashServerToolItem`: new property `container_id`; new property `files`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputShellCallOutputItem`: new property `container_id`; new property `files`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputShellServerToolItem`: new property `container_id`; new property `files`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ObservabilityDatadogDestination`: example modified; property `url` updated

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `PricingOverride`: new property `utc_days`

  **6 endpoints using this schema**

  * [`GET /embeddings/models`](https://openrouter.ai/docs/api/api-reference/embeddings/list-all-embeddings-models)
  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /model/{author}/{slug}`](https://openrouter.ai/docs/api/api-reference/models/get-a-model-by-its-slug)
  * [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties)
  * [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)

**August 22, 2026**

## New schemas

* `ToolSearchServerTool`

  **4 endpoints using this schema**

  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ToolSearchServerToolConfig`

  **4 endpoints using this schema**

  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## Modified schemas

* `AdditionalToolsItem`: new union variant added
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `MessagesRequest`: new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ResponsesRequest`: new union variant added
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 21, 2026**

## Modified endpoints

* [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential): description updated
* [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential): description updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## New response codes

* [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request): now returns `408`
* [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request): now returns `413`

## Modified schemas

* `CreateBYOKKeyRequest`: new property `allowed_api_key_hashes`
  * Used by [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `UpdateBYOKKeyRequest`: new property `allowed_api_key_hashes`
  * Used by [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **11 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ProviderOptions`: new property `makora`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)

**August 20, 2026**

## Breaking changes

* [`GET /analytics/meta`](https://openrouter.ai/docs/api/api-reference/analytics/get-available-analytics-metrics-and-dimensions): tags `beta.Analytics` property removedNo action needed
* [`POST /analytics/query`](https://openrouter.ai/docs/api/api-reference/analytics/query-analytics-data): tags `beta.Analytics` property removedNo action needed
* \$.tags: beta.Analytics object removedNo action needed

## Modified endpoints

* [`GET /analytics/meta`](https://openrouter.ai/docs/api/api-reference/analytics/get-available-analytics-metrics-and-dimensions): tags property\_added
* [`POST /analytics/query`](https://openrouter.ai/docs/api/api-reference/analytics/query-analytics-data): tags property\_added
* [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail): description updated

## Modified schemas

* `ReasoningFormat`: enum property\_added

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CreateGuardrailRequest`: description updated
  * Used by [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `Guardrail`: description updated

  **4 endpoints using this schema**

  * [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
  * [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
  * [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
  * [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)

**August 19, 2026**

## Breaking changes

* `AdvisorNestedTool`: schema object removedAction required
  * Remove `tools` and `max_tool_calls` from advisor tool configuration. Advisors no longer run nested tool-calling loops.
* `AdvisorServerToolConfig`: properties `max_tool_calls` object removedAction required

  * Remove `tools` and `max_tool_calls` from advisor tool configuration. Advisors no longer run nested tool-calling loops.

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AdvisorServerToolConfig`: properties `tools` object removedAction required

  * Remove `tools` and `max_tool_calls` from advisor tool configuration. Advisors no longer run nested tool-calling loops.

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `VideoModel`: required `creativity` property addedNo action needed
  * Used by [`GET /videos/models`](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models)
* `VideoModel`: required `upscale_factor` property addedNo action needed
  * Used by [`GET /videos/models`](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models)
* `CustomToolCallItem`: properties `call_id` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: properties `id` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: properties `input` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: properties `name` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: properties `namespace` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: properties `type` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: required `call_id` property removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: required `input` property removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: required `name` property removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: required `type` property removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## New capabilities

* BYOK API: manage credential restrictions (`allowed_models`, `allowed_user_ids`, `allowed_api_key_hashes`) via create/update. See the [BYOK guide](https://openrouter.ai/docs/guides/overview/auth/byok.md#managing-filters-via-the-management-api) for examples and validation rules.

## New schemas

* `FailableToolCallStatus`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## Modified schemas

* `AdvisorServerToolConfig`: description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AdvisorServerTool_OpenRouter`: description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `VideoGenerationRequest`: new property `creativity`; new property `upscale_factor`
  * Used by [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `VideoModel`: new property `creativity`; new property `upscale_factor`
  * Used by [`GET /videos/models`](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models)
* `OutputAdvisorServerToolItem`: description updated; \$ref modified
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputSubagentServerToolItem`: description updated; \$ref modified
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CustomToolCallItem`: allOf object\_added; type property\_removed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 18, 2026**

## Breaking changes

* [`POST /analytics/query`](https://openrouter.ai/docs/api/api-reference/betaanalytics/query-analytics-data): maxItems `10` modifiedAction required
  * Limit `classifier_dimensions.dimension_names` to at most two entries. Split requests that previously queried three or more classifier dimensions.

## Modified endpoints

* [`POST /analytics/query`](https://openrouter.ai/docs/api/api-reference/betaanalytics/query-analytics-data): description updated

## Modified schemas

* `ProviderOptions`: new property `anthropic/2`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)

**August 17, 2026**

## Breaking changes

* spec: string modifiedNo action needed
* `OutputBashServerToolItem`: type `string` modifiedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): type `string` modifiedNo action needed

## Modified endpoints

* [`DELETE /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/delete-a-workspace): description updated

## New schemas

* `OutputShellServerToolItem`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ShellCallOutputContent`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## Modified schemas

* `OpenAIResponseFunctionToolCall`: new property `subagent_id`; new property `subagent_items`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputSubagentServerToolItem`: new property `call_id`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `SubagentReasoning`: description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `SubagentServerToolConfig`: new property `inherit_functions`; new property `inherited_function_names`; description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputFilesServerToolItem`: new property `arguments`; new property `call_id`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputItems`: new union variant added
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputShellCallItem`: new property `arguments`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputShellCallOutputItem`: \$ref modified
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ShellCallItem`: new property `arguments`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ShellCallOutputItem`: example modified; \$ref modified
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ProviderOptions`: new property `amazon-bedrock/claude-on-aws`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)

**August 14, 2026**

## Modified endpoints

* [`GET /datasets/app-rankings`](https://openrouter.ai/docs/api/api-reference/datasets/top-apps-by-token-usage): description updated
* [`GET /datasets/rankings-daily`](https://openrouter.ai/docs/api/api-reference/datasets/daily-token-totals-for-top-50-models): description updated
* [`GET /datasets/session-cost`](https://openrouter.ai/docs/api/api-reference/datasets/cost-per-session-by-harness-and-model): description updated

## Modified schemas

* `AnthropicRefusalStopDetails`: enum property\_added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `OutputFusionServerToolItem`: description updated
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 13, 2026**

## Breaking changes

* `MessagesErrorDetail`: schema object removedNo action needed
* `MessagesErrorResponse`: schema object removedNo action needed

## Modified endpoints

* [`GET /generation/content`](https://openrouter.ai/docs/api/api-reference/generations/get-stored-prompt-completion-and-error-content-for-a-generation): response schema updated
* [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message): response schema updated; description updated
* [`DELETE /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/delete-a-workspace): description updated

## New schemas

* `AnthropicMessagesErrorResponse`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)

## Modified schemas

* `ImageGenerationRequest`: description updated
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
* `WebSearchMode`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 12, 2026**

## New endpoints

* [`GET /datasets/session-cost`](https://openrouter.ai/docs/api/api-reference/datasets/cost-per-session-by-harness-and-model): Cost per session by harness and model

## Modified endpoints

* [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties): description updated; parameter `region` updated
* [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails): description updated
* [`DELETE /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/delete-a-workspace): description updated; new parameter `confirm_default_settings_deletion`

## New schemas

* `SessionCostItem`
  * Used by [`GET /datasets/session-cost`](https://openrouter.ai/docs/api/api-reference/datasets/cost-per-session-by-harness-and-model)
* `SessionCostMeta`
  * Used by [`GET /datasets/session-cost`](https://openrouter.ai/docs/api/api-reference/datasets/cost-per-session-by-harness-and-model)
* `SessionCostResponse`
  * Used by [`GET /datasets/session-cost`](https://openrouter.ai/docs/api/api-reference/datasets/cost-per-session-by-harness-and-model)

## Modified schemas

* `AutoBetaRouterPlugin`: description updated; maxItems property\_added; maxLength property\_added

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AutoRouterPlugin`: description updated; maxItems property\_added; maxLength property\_added

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 11, 2026**

## Breaking changes

* `UnifiedBenchmarksResponse`: discriminator `discriminator` object removedNo action needed
  * Used by [`GET /benchmarks`](https://openrouter.ai/docs/api/api-reference/benchmarks/list-benchmarks)
* `GenerationContentData`: required `error` property addedNo action needed
  * Used by [`GET /generation/content`](https://openrouter.ai/docs/api/api-reference/generations/get-stored-prompt-completion-and-error-content-for-a-generation)

## Modified endpoints

* [`GET /benchmarks`](https://openrouter.ai/docs/api/api-reference/benchmarks/list-benchmarks):
  * description updated
  * new parameter `benchmark_type`
  * new parameter `include_run_config`
  * new parameter `search_engine`
  * new parameter `search_surface`
  * parameter `task_type` updated
* [`GET /generation/content`](https://openrouter.ai/docs/api/api-reference/generations/get-stored-prompt-completion-and-error-content-for-a-generation): description updated; response schema updated
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## New schemas

* `UnifiedBenchmarksSearchItem`
  * Used by [`GET /benchmarks`](https://openrouter.ai/docs/api/api-reference/benchmarks/list-benchmarks)
* `UnifiedBenchmarksSearchRunConfig`
  * Used by [`GET /benchmarks`](https://openrouter.ai/docs/api/api-reference/benchmarks/list-benchmarks)
* `GenerationContentError`
  * Used by [`GET /generation/content`](https://openrouter.ai/docs/api/api-reference/generations/get-stored-prompt-completion-and-error-content-for-a-generation)
* `GenerationContentErrorAttempt`
  * Used by [`GET /generation/content`](https://openrouter.ai/docs/api/api-reference/generations/get-stored-prompt-completion-and-error-content-for-a-generation)

## Modified schemas

* `OutputFusionServerToolItem`: description updated
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `WebSearchMode`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `MessagesStartEvent`: property `usage` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `UnifiedBenchmarksResponse`: new union variant added
  * Used by [`GET /benchmarks`](https://openrouter.ai/docs/api/api-reference/benchmarks/list-benchmarks)
* `GenerationContentData`: description updated; example modified; new property `error`
  * Used by [`GET /generation/content`](https://openrouter.ai/docs/api/api-reference/generations/get-stored-prompt-completion-and-error-content-for-a-generation)
* `GenerationContentResponse`: example modified
  * Used by [`GET /generation/content`](https://openrouter.ai/docs/api/api-reference/generations/get-stored-prompt-completion-and-error-content-for-a-generation)
* `AppRankingsResponse`: example modified
  * Used by [`GET /datasets/app-rankings`](https://openrouter.ai/docs/api/api-reference/datasets/top-apps-by-token-usage)
* `RankingsDailyMeta`: example modified
  * Used by [`GET /datasets/app-rankings`](https://openrouter.ai/docs/api/api-reference/datasets/top-apps-by-token-usage), [`GET /datasets/rankings-daily`](https://openrouter.ai/docs/api/api-reference/datasets/daily-token-totals-for-top-50-models)
* `RankingsDailyResponse`: example modified
  * Used by [`GET /datasets/rankings-daily`](https://openrouter.ai/docs/api/api-reference/datasets/daily-token-totals-for-top-50-models)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **11 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ProviderOptions`: new property `databricks`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)

**August 10, 2026**

## Breaking changes

* spec: additionalProperties object addedNo action needed
* `CodeInterpreterCallItem`: properties `code` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: properties `container_id` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: properties `id` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: properties `outputs` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: properties `status` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: properties `type` object removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: required `code` property removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: required `container_id` property removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: required `id` property removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: required `outputs` property removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: required `status` property removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: required `type` property removedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputItemWebSearchCall`: additionalProperties `additionalProperties` object addedNo action needed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): properties `code` object removedNo action needed
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): properties `container_id` object removedNo action needed
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): properties `id` object removedNo action needed
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): properties `outputs` object removedNo action needed
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): properties `status` object removedNo action needed
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): properties `type` object removedNo action needed
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): required `code` property removedNo action needed
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): required `container_id` property removedNo action needed
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): required `id` property removedNo action needed
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): required `outputs` property removedNo action needed
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): required `status` property removedNo action needed
* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): required `type` property removedNo action needed

## Modified endpoints

* [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body): request schema updated

## New schemas

* `CodeInterpreterCallCodeDeltaEvent`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallCodeDoneEvent`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallCompletedEvent`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallInProgressEvent`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallInterpretingEvent`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterFileOutput`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterImageOutput`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterLogsOutput`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OpenAIResponsesCodeInterpreterCallCodeDelta`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OpenAIResponsesCodeInterpreterCallCodeDone`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OpenAIResponsesCodeInterpreterCallCompleted`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OpenAIResponsesCodeInterpreterCallInProgress`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OpenAIResponsesCodeInterpreterCallInterpreting`
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputItemCodeInterpreterCall`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## Modified schemas

* `AutoBetaRouterPlugin`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AutoRouterPlugin`: example modified; description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `BaseResponsesResult`: new union variant added
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `CodeInterpreterCallItem`: allOf object\_added; type property\_removed
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputItemAddedEvent`: new union variant added
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputItemDoneEvent`: new union variant added
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `StreamEvents`: new union variant added
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 9, 2026**

## Modified schemas

* `FusionServerToolConfig`: description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 8, 2026**

## Modified schemas

* `VideoModel`: enum property\_added
  * Used by [`GET /videos/models`](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models)
* `FusionServerToolConfig`: description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 7, 2026**

## Breaking changes

* `BYOKKey`: type `string` modifiedAction required

  * Allow `workspace_id` to be `null` in BYOK responses. A null value identifies a global credential that is usable across every workspace; do not substitute the default workspace.

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `Guardrail`: type `string` modifiedAction required

  * Allow `workspace_id` to be `null` in guardrail responses. A null value identifies an unscoped legacy guardrail; it does not mean the default workspace or every workspace.

  **4 endpoints using this schema**

  * [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
  * [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
  * [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
  * [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `ObservabilityArizeDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityArizeDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityArizeDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityBraintrustDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityBraintrustDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityBraintrustDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityClickhouseDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityClickhouseDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityClickhouseDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDatadogDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDatadogDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDatadogDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityGrafanaDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityGrafanaDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityGrafanaDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangfuseDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangfuseDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangfuseDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangsmithDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangsmithDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangsmithDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityNewrelicDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityNewrelicDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityNewrelicDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOpikDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOpikDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOpikDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOtelCollectorDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOtelCollectorDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOtelCollectorDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityPosthogDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityPosthogDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityPosthogDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityRampDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityRampDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityRampDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityS3Destination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityS3Destination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityS3Destination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySentryDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySentryDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySentryDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySnowflakeDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySnowflakeDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySnowflakeDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWeaveDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWeaveDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWeaveDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWebhookDestination`: required `broadcast_generation_cost` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWebhookDestination`: required `broadcast_generation_identity` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWebhookDestination`: required `broadcast_generation_request_context` property addedNo action needed

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations): required `broadcast_generation_cost` property addedNo action needed
* [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations): required `broadcast_generation_identity` property addedNo action needed
* [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations): required `broadcast_generation_request_context` property addedNo action needed

## Modified endpoints

* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): description updated
* [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential): description updated
* [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations): response schema updated
* [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination): response schema updated
* [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination): response schema updated
* [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination): response schema updated

## New response codes

* [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination): now returns `403`

## New schemas

* `WebSearchMode`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

## Modified schemas

* `BYOKKey`: description updated

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `CreateBYOKKeyRequest`: description updated
  * Used by [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `CreateGuardrailRequest`: description updated
  * Used by [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `CreateObservabilityDestinationRequest`: new property `broadcast_generation_cost`; new property `broadcast_generation_identity`; new property `broadcast_generation_request_context`
  * Used by [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `CreateObservabilityDestinationResponse`: example modified
  * Used by [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `FusionPlugin`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FusionServerToolConfig`: description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `GetObservabilityDestinationResponse`: example modified
  * Used by [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
* `Guardrail`: description updated

  **4 endpoints using this schema**

  * [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
  * [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
  * [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
  * [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `ListObservabilityDestinationsResponse`: example modified
  * Used by [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
* `ObservabilityArizeDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityBraintrustDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityClickhouseDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDatadogDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityDestination`: example modified

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityGrafanaDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangfuseDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityLangsmithDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityNewrelicDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOpikDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityOtelCollectorDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityPosthogDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityRampDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityS3Destination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySentryDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilitySnowflakeDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWeaveDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `ObservabilityWebhookDestination`:

  * example modified
  * new property `broadcast_generation_cost`
  * new property `broadcast_generation_identity`
  * new property `broadcast_generation_request_context`

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `UpdateObservabilityDestinationRequest`: new property `broadcast_generation_cost`; new property `broadcast_generation_identity`; new property `broadcast_generation_request_context`
  * Used by [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
* `UpdateObservabilityDestinationResponse`: example modified
  * Used by [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
* `ChatWebSearchShorthand`: new property `mode`
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `InputReference`: description updated
  * Used by [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `Legacy_WebSearchServerTool`: new property `mode`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `Preview_20250311_WebSearchServerTool`: new property `mode`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `Preview_WebSearchServerTool`: new property `mode`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `VideoGenerationRequest`: description updated
  * Used by [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `WebSearchConfig`: new property `mode`

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `WebSearchPlugin`: new property `mode`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `WebSearchServerTool`: new property `mode`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `WebSearchServerToolConfig`: new property `mode`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 5, 2026**

## Modified endpoints

* [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file): description updated

## Modified schemas

* `FilesServerTool`: description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**August 4, 2026**

## Modified endpoints

* [`POST /analytics/query`](https://openrouter.ai/docs/api/api-reference/betaanalytics/query-analytics-data): request schema updated

## New response codes

* [`DELETE /workspaces/{id}/budgets/{interval}`](https://openrouter.ai/docs/api/api-reference/workspaces/delete-a-workspace-budget): now returns `400`

## New schemas

* `GetWorkspaceBudgetResponse`
  * Used by [`GET /workspaces/{id}/budgets/{interval}`](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace-budget)
* `MessagesBashToolResultBlock`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `MessagesShellToolResultBlock`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ORAnthropicBashToolResult`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ORAnthropicShellToolResult`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)

## Modified schemas

* `ObservabilitySnowflakeDestination`: property `account` updated

  **4 endpoints using this schema**

  * [`GET /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/list-observability-destinations)
  * [`GET /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/get-an-observability-destination)
  * [`PATCH /observability/destinations/{id}`](https://openrouter.ai/docs/api/api-reference/observability/update-an-observability-destination)
  * [`POST /observability/destinations`](https://openrouter.ai/docs/api/api-reference/observability/create-an-observability-destination)
* `MessagesContentBlockStartEvent`: new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `MessagesRequest`: new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ORAnthropicContentBlock`: new union variant added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)

**August 3, 2026**

## Breaking changes

* `GenerationResponse`: required `workspace_id` property addedNo action needed
  * No action required for existing consumers. Generation responses now include `workspace_id`, the ID of the workspace the generation belongs to.
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)

## Modified endpoints

* [`GET /activity`](https://openrouter.ai/docs/api/api-reference/analytics/get-user-activity-grouped-by-endpoint):
  * x-speakeasy-max-method-params object\_added
  * description updated
  * new parameter `group_by`
  * new parameter `workspace_id`
* [`POST /analytics/query`](https://openrouter.ai/docs/api/api-reference/betaanalytics/query-analytics-data): description updated
* [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints): response schema updated

## New schemas

* `SpeechInputReference`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `SpeechInputReferenceAudio`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `SpeechInputReferenceAudioInput`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `SpeechInputReferenceText`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)

## Modified schemas

* `ActivityItem`: new property `workspace_id`
  * Used by [`GET /activity`](https://openrouter.ai/docs/api/api-reference/analytics/get-user-activity-grouped-by-endpoint)
* `GenerationResponse`: example modified; new property `workspace_id`
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `PublicEndpoint`: example modified; new property `supports_voice_cloning`
  * Used by [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints), [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
* `SpeechRequest`: new property `input_references`
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)

**August 1, 2026**

## Modified endpoints

* [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail): description updated
* [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail): description updated

## Modified schemas

* `Workspace`: description updated

  **4 endpoints using this schema**

  * [`GET /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspaces)
  * [`GET /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace)
  * [`PATCH /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/update-a-workspace)
  * [`POST /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/create-a-workspace)

**July 31, 2026**

**July 30, 2026**

## Breaking changes

* `SpeechRequest`: required `voice` property removedNo action needed
  * No action required for existing consumers. `voice` is now optional; requests that send it are unaffected.
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)

## New endpoints

* [`GET /scim/group-mappings`](https://openrouter.ai/docs/api/api-reference/scim/list-scim-group-mappings): List SCIM group mappings
* [`POST /scim/group-mappings`](https://openrouter.ai/docs/api/api-reference/scim/create-a-scim-group-mapping): Create a SCIM group mapping
* [`GET /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/get-a-scim-group-mapping): Get a SCIM group mapping
* [`PATCH /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/update-a-scim-group-mapping): Update a SCIM group mapping
* [`DELETE /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/delete-a-scim-group-mapping): Delete a SCIM group mapping
* [`GET /scim/groups`](https://openrouter.ai/docs/api/api-reference/scim/list-scim-groups): List SCIM groups

## Modified endpoints

* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## New schemas

* `CreateScimGroupMappingRequest`
  * Used by [`POST /scim/group-mappings`](https://openrouter.ai/docs/api/api-reference/scim/create-a-scim-group-mapping)
* `CreateScimGroupMappingResponse`
  * Used by [`POST /scim/group-mappings`](https://openrouter.ai/docs/api/api-reference/scim/create-a-scim-group-mapping)
* `DeleteScimGroupMappingResponse`
  * Used by [`DELETE /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/delete-a-scim-group-mapping)
* `GetScimGroupMappingResponse`
  * Used by [`GET /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/get-a-scim-group-mapping)
* `ListScimGroupMappingsResponse`
  * Used by [`GET /scim/group-mappings`](https://openrouter.ai/docs/api/api-reference/scim/list-scim-group-mappings)
* `ListScimGroupsResponse`
  * Used by [`GET /scim/groups`](https://openrouter.ai/docs/api/api-reference/scim/list-scim-groups)
* `ScimGroup`
  * Used by [`GET /scim/groups`](https://openrouter.ai/docs/api/api-reference/scim/list-scim-groups)
* `ScimGroupMapping`

  **4 endpoints using this schema**

  * [`GET /scim/group-mappings`](https://openrouter.ai/docs/api/api-reference/scim/list-scim-group-mappings)
  * [`GET /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/get-a-scim-group-mapping)
  * [`PATCH /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/update-a-scim-group-mapping)
  * [`POST /scim/group-mappings`](https://openrouter.ai/docs/api/api-reference/scim/create-a-scim-group-mapping)
* `UpdateScimGroupMappingRequest`
  * Used by [`PATCH /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/update-a-scim-group-mapping)
* `UpdateScimGroupMappingResponse`
  * Used by [`PATCH /scim/group-mappings/{id}`](https://openrouter.ai/docs/api/api-reference/scim/update-a-scim-group-mapping)

## Modified schemas

* `VideoGenerationRequest`: enum property\_added
  * Used by [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `VideoModel`: enum property\_added
  * Used by [`GET /videos/models`](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models)
* `SpeechRequest`: minLength property\_added
  * Used by [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)
* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **11 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ProviderOptions`: new property `thinkingmachines`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `ChatRequest`: description updated; enum property\_added
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `ResponsesErrorField`: enum property\_added
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ResponsesRequest`: description updated; enum property\_added
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**July 29, 2026**

## Breaking changes

* `FileMetadata`: schema object removedNo action needed
* `FileDeleteResponse`: discriminator `discriminator` object addedAction required
  * HTTP clients: no change. Requests without a vendor SDK still get the OpenRouter shape (`_shape: "openrouter"`) with the same fields as before. Typed SDK clients: this response type is now a union discriminated by `_shape`. In the TypeScript SDK, the field is named `shape`, so check `shape === "openrouter"` before reading OpenRouter fields such as `id` and `type`.
  * Used by [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file)
* `FileDeleteResponse`: properties `id` object removedNo action needed
  * Used by [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file)
* `FileDeleteResponse`: properties `type` object removedNo action needed
  * Used by [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file)
* `FileDeleteResponse`: required `id` property removedNo action needed
  * Used by [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file)
* `FileDeleteResponse`: required `type` property removedNo action needed
  * Used by [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file)
* `FileListResponse`: discriminator `discriminator` object addedAction required
  * HTTP clients: no change. Requests without a vendor SDK still get the OpenRouter shape (`_shape: "openrouter"`) with the same fields as before. Typed SDK clients: this response type is now a union discriminated by `_shape`. In the TypeScript SDK, the field is named `shape`, so check `shape === "openrouter"` before reading OpenRouter fields such as `cursor`.
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileListResponse`: properties `cursor` object removedNo action needed
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileListResponse`: properties `data` object removedNo action needed
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileListResponse`: properties `first_id` object removedNo action needed
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileListResponse`: properties `has_more` object removedNo action needed
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileListResponse`: properties `last_id` object removedNo action needed
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileListResponse`: required `cursor` property removedNo action needed
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileListResponse`: required `data` property removedNo action needed
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileListResponse`: required `first_id` property removedNo action needed
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileListResponse`: required `has_more` property removedNo action needed
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileListResponse`: required `last_id` property removedNo action needed
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)

## Modified endpoints

* [`GET /benchmarks`](https://openrouter.ai/docs/api/api-reference/benchmarks/list-benchmarks): description updated; parameter `source` updated; response schema updated
* [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files):
  * new parameter `after`
  * new parameter `after_id`
  * new parameter `before_id`
  * new parameter `order`
  * new parameter `provider`
* [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file): new parameter `provider`; response schema updated
* [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file): new parameter `provider`
* [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata): new parameter `provider`; response schema updated
* [`GET /files/{file_id}/content`](https://openrouter.ai/docs/api/api-reference/files/download-file-content): new parameter `provider`
* [`GET /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspaces): response schema updated
* [`POST /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/create-a-workspace): response schema updated
* [`GET /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace): response schema updated
* [`PATCH /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/update-a-workspace): response schema updated
* [`GET /workspaces/{id}/budgets`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspace-budgets): response schema updated
* [`PUT /workspaces/{id}/budgets/{interval}`](https://openrouter.ai/docs/api/api-reference/workspaces/create-or-update-a-workspace-budget): description updated; request schema updated; response schema updated

## New response codes

* [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files): now returns `403`
* [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files): now returns `502`
* [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files): now returns `503`
* [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file): now returns `502`
* [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file): now returns `503`
* [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file): now returns `403`
* [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file): now returns `502`
* [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file): now returns `503`
* [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata): now returns `403`
* [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata): now returns `502`
* [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata): now returns `503`
* [`GET /files/{file_id}/content`](https://openrouter.ai/docs/api/api-reference/files/download-file-content): now returns `403`
* [`GET /files/{file_id}/content`](https://openrouter.ai/docs/api/api-reference/files/download-file-content): now returns `502`
* [`GET /files/{file_id}/content`](https://openrouter.ai/docs/api/api-reference/files/download-file-content): now returns `503`

## New schemas

* `UnifiedBenchmarksORItem`
  * Used by [`GET /benchmarks`](https://openrouter.ai/docs/api/api-reference/benchmarks/list-benchmarks)
* `AnthropicFile`
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files), [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata), [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file)
* `AnthropicFileDeleted`
  * Used by [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file)
* `AnthropicFileList`
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileProvider`

  **5 endpoints using this schema**

  * [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file)
  * [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
  * [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata)
  * [`GET /files/{file_id}/content`](https://openrouter.ai/docs/api/api-reference/files/download-file-content)
  * [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file)
* `FileResponse`
  * Used by [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata), [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file)
* `OpenAIFile`
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files), [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata), [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file)
* `OpenAIFileDeleted`
  * Used by [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file)
* `OpenAIFileList`
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `OpenRouterFile`
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files), [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata), [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file)
* `OpenRouterFileDeleted`
  * Used by [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file)
* `OpenRouterFileList`
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `ModelAliasTarget`

  **4 endpoints using this schema**

  * [`GET /embeddings/models`](https://openrouter.ai/docs/api/api-reference/embeddings/list-all-embeddings-models)
  * [`GET /model/{author}/{slug}`](https://openrouter.ai/docs/api/api-reference/models/get-a-model-by-its-slug)
  * [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties)
  * [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails)

## Modified schemas

* `UnifiedBenchmarksMeta`: enum property\_added
  * Used by [`GET /benchmarks`](https://openrouter.ai/docs/api/api-reference/benchmarks/list-benchmarks)
* `UnifiedBenchmarksResponse`: example modified; new union variant added
  * Used by [`GET /benchmarks`](https://openrouter.ai/docs/api/api-reference/benchmarks/list-benchmarks)
* `FileDeleteResponse`:
  * description updated
  * example modified
  * new union variant added
  * type property\_removed
  * Used by [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file)
* `FileListResponse`:
  * description updated
  * example modified
  * new union variant added
  * type property\_removed
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `CreateWorkspaceResponse`: example modified
  * Used by [`POST /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/create-a-workspace)
* `GetWorkspaceResponse`: example modified
  * Used by [`GET /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace)
* `ListWorkspaceBudgetsResponse`: example modified; new property `include_byok_in_budgets`
  * Used by [`GET /workspaces/{id}/budgets`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspace-budgets)
* `ListWorkspacesResponse`: example modified
  * Used by [`GET /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspaces)
* `Model`: new property `alias_target`

  **4 endpoints using this schema**

  * [`GET /embeddings/models`](https://openrouter.ai/docs/api/api-reference/embeddings/list-all-embeddings-models)
  * [`GET /model/{author}/{slug}`](https://openrouter.ai/docs/api/api-reference/models/get-a-model-by-its-slug)
  * [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties)
  * [`GET /models/user`](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails)
* `UpdateWorkspaceResponse`: example modified
  * Used by [`PATCH /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/update-a-workspace)
* `UpsertWorkspaceBudgetRequest`: example modified; new property `include_byok_in_budgets`
  * Used by [`PUT /workspaces/{id}/budgets/{interval}`](https://openrouter.ai/docs/api/api-reference/workspaces/create-or-update-a-workspace-budget)
* `UpsertWorkspaceBudgetResponse`: example modified; new property `include_byok_in_budgets`
  * Used by [`PUT /workspaces/{id}/budgets/{interval}`](https://openrouter.ai/docs/api/api-reference/workspaces/create-or-update-a-workspace-budget)
* `Workspace`: example modified; new property `include_byok_in_budgets`

  **4 endpoints using this schema**

  * [`GET /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspaces)
  * [`GET /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/get-a-workspace)
  * [`PATCH /workspaces/{id}`](https://openrouter.ai/docs/api/api-reference/workspaces/update-a-workspace)
  * [`POST /workspaces`](https://openrouter.ai/docs/api/api-reference/workspaces/create-a-workspace)
* `AutoBetaRouterPlugin`: example modified; new property `excluded_models`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AutoRouterPlugin`: example modified; new property `excluded_models`

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `VideoModel`: enum property\_added
  * Used by [`GET /videos/models`](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models)

**July 28, 2026**

## Breaking changes

* `FusionCallAnalysisInProgressEvent`: required `analyst_model` property addedNo action needed
  * **No action required for existing consumers.** `analyst_model` replaces `judge_model` in this streaming event; `judge_model` is retained as a deprecated alias that always carries the same value.
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* \$.tags: responses object removedNo action needed
  * **No action required.** The `responses` OpenAPI tag was renamed to `Responses` for consistent Title Case across the API Reference. This is a documentation-grouping change only: `POST /api/v1/responses` and its schemas are unchanged, SDK namespaces are unchanged (`client.responses.send()` in TypeScript and Python, `Sdk.Responses.Send()` in Go), and endpoint documentation URLs are unchanged.

## Modified endpoints

* [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files): parameter `cursor` updated; response schema updated
* [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file): response schema updated
* [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file): parameter `file_id` updated; response schema updated
* [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata): parameter `file_id` updated; response schema updated
* [`GET /files/{file_id}/content`](https://openrouter.ai/docs/api/api-reference/files/download-file-content): parameter `file_id` updated

## Modified schemas

* `FusionAnalysisResult`: description updated
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FusionCallAnalysisCompletedEvent`: description updated
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FusionCallAnalysisInProgressEvent`:
  * description updated
  * example modified
  * new property `analyst_model`
  * property `judge_model` deprecated (alias of `analyst_model`, kept for existing consumers)
  * Used by [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FusionPlugin`: description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FusionServerToolConfig`: description updated; property `effort` updated; property `max_tokens` updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FusionServerTool_OpenRouter`: description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `FusionSource`: description updated
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `OutputFusionServerToolItem`: description updated
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ChatWebSearchShorthand`: description updated
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `WebSearchConfig`: description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `WebSearchDomainFilter`: example modified; new property `blocked_domains`
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `WebSearchServerToolConfig`: description updated
  * Used by [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body), [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AnthropicFileDocumentSource`: example modified
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `FileDeleteResponse`: example modified
  * Used by [`DELETE /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/delete-a-file)
* `FileListResponse`: example modified
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files)
* `FileMetadata`: example modified
  * Used by [`GET /files`](https://openrouter.ai/docs/api/api-reference/files/list-files), [`GET /files/{file_id}`](https://openrouter.ai/docs/api/api-reference/files/get-file-metadata), [`POST /files`](https://openrouter.ai/docs/api/api-reference/files/upload-a-file)
* `GenerationResponse`: property `data_region` updated
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `CreateGuardrailRequest`: new property `enable_free_model_publication`; new property `enable_free_model_training`; new property `enable_paid_model_training`
  * Used by [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `Guardrail`:

  * example modified
  * new property `enable_free_model_publication`
  * new property `enable_free_model_training`
  * new property `enable_paid_model_training`

  **4 endpoints using this schema**

  * [`GET /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/list-guardrails)
  * [`GET /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/get-a-guardrail)
  * [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
  * [`POST /guardrails`](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail)
* `UpdateGuardrailRequest`: new property `enable_free_model_publication`; new property `enable_free_model_training`; new property `enable_paid_model_training`
  * Used by [`PATCH /guardrails/{id}`](https://openrouter.ai/docs/api/api-reference/guardrails/update-a-guardrail)
* `AutoBetaRouterPlugin`:

  * example modified
  * new property `cost_tier`
  * deprecated property\_added
  * description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `AutoRouterPlugin`:

  * example modified
  * new property `cost_tier`
  * deprecated property\_added
  * description updated

  **6 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**July 27, 2026**

## Modified endpoints

* [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request): request schema updated

## Modified schemas

* `Quantization`: enum property\_added

  **10 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ReasoningFormat`: enum property\_added

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)

**July 25, 2026**

## Breaking changes

* [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response): tags `beta.responses` property removedNo action needed
  * **Migration: no action for HTTP clients.** The Responses API is now GA. `beta.responses` was an OpenAPI grouping tag and SDK namespace, never a URL. `POST /api/v1/responses` and its request and response schemas are unchanged, so raw HTTP callers and OpenAI-compatible clients (including the OpenAI Agents SDK) need no changes. The endpoint now appears under **Responses** instead of **Beta responses** in the API Reference.
  * **Migration for SDK users: optional until sunset.** The canonical namespace is now `responses`, with `client.responses.send()` (TypeScript, Python) and `client.Responses.Send()` (Go). The `beta.responses` namespace, and TypeScript's `betaResponsesSend` standalone function, keep working as deprecated aliases; their removal will be announced here with a sunset date before it ships.
* \$.tags: beta.responses object removedNo action needed
  * Same change as above at the specification level: the `beta.responses` tag definition is gone from `$.tags`.

## Modified endpoints

* [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response): tags property\_added
* [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials): parameter `provider` updated

## Modified schemas

* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **11 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ProviderOptions`: new property `claude-on-aws`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `BYOKProviderSlug`: enum property\_added

  **4 endpoints using this schema**

  * [`GET /byok`](https://openrouter.ai/docs/api/api-reference/byok/list-byok-provider-credentials)
  * [`GET /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/get-a-byok-provider-credential)
  * [`PATCH /byok/{id}`](https://openrouter.ai/docs/api/api-reference/byok/update-a-byok-provider-credential)
  * [`POST /byok`](https://openrouter.ai/docs/api/api-reference/byok/create-a-byok-provider-credential)

**July 24, 2026**

## Modified schemas

* `MessagesStartEvent`: property `provider` updated
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `ProviderName`: enum property\_added

  **11 endpoints using this schema**

  * [`GET /endpoints/zdr`](https://openrouter.ai/docs/api/api-reference/endpoints/preview-the-impact-of-zdr-on-the-available-endpoints)
  * [`GET /models/{author}/{slug}/endpoints`](https://openrouter.ai/docs/api/api-reference/endpoints/list-all-endpoints-for-a-model)
  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /embeddings`](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /rerank`](https://openrouter.ai/docs/api/api-reference/rerank/submit-a-rerank-request)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ProviderOptions`: new property `voyageai`

  **4 endpoints using this schema**

  * [`POST /audio/speech`](https://openrouter.ai/docs/api/api-reference/tts/create-speech)
  * [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
  * [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
  * [`POST /videos`](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request)
* `ProviderResponse`: enum property\_added
  * Used by [`GET /generation`](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation)
* `AnthropicCompactionBlock`: new property `encrypted_content`
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)
* `MessagesToolAdditionBlock`: new property `cache_control`; new union variant added; type property\_removed
  * `tool` widened from a single `tool_reference` object to a union of `tool_reference`, `mcp_tool_reference` (`name` + `server_name`) and `mcp_toolset_reference` (`server_name`). The `tool_reference` variant is unchanged, so existing `{ "type": "tool_reference", "name": "…" }` payloads stay valid. The `name` and `type` properties moved into that variant rather than being removed.
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `MessagesToolRemovalBlock`: new property `cache_control`; new union variant added; type property\_removed
  * `tool` widened the same way as `MessagesToolAdditionBlock`; existing `tool_reference` payloads stay valid.
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message), [`POST /presets/{slug}/messages`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-messages-request-body)
* `ORAnthropicStopReason`: enum property\_added
  * Used by [`POST /messages`](https://openrouter.ai/docs/api/api-reference/anthropic-messages/create-a-message)

**July 8, 2026**

## New schemas

* `ImageGenTextChunkEvent`
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)

## Modified schemas

* `ImageStreamingResponse`: new union variant added
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)

**July 7, 2026**

## Modified endpoints

* [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription): description updated; request body now accepts `multipart/form-data`
* [`GET /datasets/rankings-daily`](https://openrouter.ai/docs/api/api-reference/datasets/daily-token-totals-for-top-50-models):
  * description updated
  * new parameter `category`
  * new parameter `context_bucket`
  * new parameter `language_type`
  * new parameter `modality`
  * new parameter `period`
* [`GET /models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties):
  * new parameter `max_age_days`
  * new parameter `max_agentic_index`
  * new parameter `max_coding_index`
  * new parameter `max_intelligence_index`
  * new parameter `max_output_price`
  * new parameter `max_tool_success_rate`
  * new parameter `min_age_days`
  * new parameter `min_agentic_index`
  * new parameter `min_coding_index`
  * new parameter `min_intelligence_index`
  * new parameter `min_output_price`
  * new parameter `min_tool_success_rate`
  * description updated
  * parameter `sort` updated

## New response codes

* [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image): now returns `413`

## New schemas

* `STTSegment`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTTimestampGranularity`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTWord`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)

## Modified schemas

* `ChatFunctionTool`: new union variant added
  * Used by [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion), [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
* `FusionServerToolConfig`: description updated

  **4 endpoints using this schema**

  * [`POST /chat/completions`](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion)
  * [`POST /presets/{slug}/chat/completions`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-chat-completions-request-body)
  * [`POST /presets/{slug}/responses`](https://openrouter.ai/docs/api/api-reference/presets/create-a-preset-from-a-responses-request-body)
  * [`POST /responses`](https://openrouter.ai/docs/api/api-reference/responses/create-a-response)
* `ImageGenCompletedEvent`: description updated; example modified
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
* `ImageGenerationResponse`: property `media_type` updated
  * Used by [`POST /images`](https://openrouter.ai/docs/api/api-reference/images/generate-an-image)
* `STTRequest`: new property `response_format`; new property `timestamp_granularities`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)
* `STTResponse`:
  * new property `duration`
  * new property `language`
  * new property `segments`
  * new property `task`
  * new property `words`
  * Used by [`POST /audio/transcriptions`](https://openrouter.ai/docs/api/api-reference/stt/create-transcription)

**July 3, 2026**

## New endpoints

* [`GET /workspaces/{id}/members`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspace-members): List workspace members

## New schemas

* `ListWorkspaceMembersResponse`
  * Used by [`GET /workspaces/{id}/members`](https://openrouter.ai/docs/api/api-reference/workspaces/list-workspace-members)
