> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Get current API key

> Get information on the API key associated with the current authentication session



## OpenAPI

````yaml /openapi/openapi.yaml get /key
openapi: 3.1.0
info:
  contact:
    email: support@openrouter.ai
    name: OpenRouter Support
    url: https://openrouter.ai/docs
  description: OpenAI-compatible API with additional OpenRouter features
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
  title: OpenRouter API
  version: 1.0.0
servers:
  - description: Production server
    url: https://openrouter.ai/api/v1
    x-speakeasy-server-id: production
security:
  - apiKey: []
tags:
  - description: API key management endpoints
    name: API Keys
  - description: Analytics and usage endpoints
    name: Analytics
  - description: Anthropic Messages endpoints
    name: Anthropic Messages
  - description: BYOK endpoints
    name: BYOK
  - description: >-
      Submit, list, poll, and delete asynchronous batches of inference requests.
      See https://openrouter.ai/docs/batch-quickstart.
    name: Batch
  - description: Benchmarks endpoints
    name: Benchmarks
  - description: Chat completion endpoints
    name: Chat
  - description: Task classification market-share endpoints
    name: Classifications
  - description: Containers endpoints
    name: Containers
  - description: Credit management endpoints
    name: Credits
  - description: >-
      Public OpenRouter usage datasets. Data returned by these endpoints is
      licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/):
      reuse and republish it, including commercially, with attribution to
      OpenRouter.
    name: Datasets
  - description: Text embedding endpoints
    name: Embeddings
  - description: Endpoint information
    name: Endpoints
  - description: External Users endpoints
    name: External Users
  - description: Files endpoints
    name: Files
  - description: Generation history endpoints
    name: Generations
  - description: Guardrail Policies endpoints
    name: Guardrail Policies
  - description: Guardrails endpoints
    name: Guardrails
  - description: Images endpoints
    name: Images
  - description: Model information endpoints
    name: Models
  - description: OAuth authentication endpoints
    name: OAuth
  - description: Observability endpoints
    name: Observability
  - description: Organization endpoints
    name: Organization
  - description: Presets endpoints
    name: Presets
  - description: Private Endpoints endpoints
    name: Private Endpoints
  - description: Private Providers endpoints
    name: Private Providers
  - description: Provider information endpoints
    name: Providers
  - description: Rerank endpoints
    name: Rerank
  - description: OpenAI-compatible Responses API endpoints
    name: Responses
  - description: >-
      Management endpoints for SCIM group-to-workspace mappings, authenticated
      with a management key. These are not the SCIM 2.0 connector endpoints for
      your identity provider. In your identity provider, enter the SCIM endpoint
      URL shown when you enable provisioning under Settings > Members > SCIM
      Mappings. See
      https://openrouter.ai/docs/guides/features/scim-mappings#set-up-provisioning.
    name: SCIM
  - description: Speech-to-text endpoints
    name: STT
    x-displayName: Transcriptions
  - description: >-
      System One endpoints for models such as Jev, compatible with the TypeSafe
      SDKs. See https://openrouter.ai/docs/guides/community/typesafe-sdk.
    name: SystemOne
    x-displayName: System One
  - description: Text-to-speech endpoints
    name: TTS
    x-displayName: Speech
  - description: >-
      The catalog of server tools OpenRouter runs on behalf of a model: accepted
      `tools[].type` spellings per API format, engines and pricing, and which
      endpoints run each tool natively. See
      https://openrouter.ai/docs/guides/features/server-tools.
    name: Tools
  - description: >-
      Store host-bound secrets for a workspace or for one intern. Scope is
      selected by the API key. Responses return metadata only, never secret
      values. See https://openrouter.ai/docs/guides/ori/vault.
    name: Vault
  - description: Video Generation endpoints
    name: Video Generation
  - description: Workspaces endpoints
    name: Workspaces
  - description: Alpha feature endpoints for Decisions requests
    name: alpha.decisions
  - description: Alpha feature endpoints for Extractions requests
    name: alpha.extractions
externalDocs:
  description: OpenRouter Documentation
  url: https://openrouter.ai/docs
paths:
  /key:
    get:
      tags:
        - API Keys
      summary: Get current API key
      description: >-
        Get information on the API key associated with the current
        authentication session
      operationId: getCurrentKey
      responses:
        '200':
          content:
            application/json:
              example:
                data:
                  allowed_data_regions:
                    - global
                    - europe
                    - us
                  budgets:
                    - budget_id: null
                      guardrail_id: 0df9e665-d932-5740-b2c7-b52af166bc11
                      include_byok: false
                      limit_usd: 50
                      remaining_usd: 17.5
                      reset_interval: weekly
                      resets_at: '2026-10-12T00:00:00.000Z'
                      scope: member
                      spend_usd: 32.5
                  byok_usage: 17.38
                  byok_usage_daily: 17.38
                  byok_usage_monthly: 17.38
                  byok_usage_weekly: 17.38
                  creator_user_id: user_2dHFtVWx2n56w6HkM0000000000
                  effective_budget:
                    budget_id: null
                    guardrail_id: 0df9e665-d932-5740-b2c7-b52af166bc11
                    include_byok: false
                    limit_usd: 50
                    remaining_usd: 17.5
                    reset_interval: weekly
                    resets_at: '2026-10-12T00:00:00.000Z'
                    scope: member
                    spend_usd: 32.5
                  expires_at: '2027-12-31T23:59:59Z'
                  free_model_daily_requests:
                    limit: 50
                    remaining: 38
                    used: 12
                  include_byok_in_limit: false
                  is_free_tier: false
                  is_management_key: false
                  is_provisioning_key: false
                  label: sk-or-v1-au7...890
                  limit: 100
                  limit_remaining: 74.5
                  limit_reset: monthly
                  organization_id: null
                  rate_limit:
                    interval: 1h
                    note: This field is deprecated and safe to ignore.
                    requests: 1000
                  usage: 25.5
                  usage_daily: 25.5
                  usage_monthly: 25.5
                  usage_weekly: 25.5
                  workspace_id: 0df9e665-d932-5740-b2c7-b52af166bc11
              schema:
                example:
                  data:
                    allowed_data_regions:
                      - global
                      - europe
                      - us
                    budgets:
                      - budget_id: null
                        guardrail_id: 0df9e665-d932-5740-b2c7-b52af166bc11
                        include_byok: false
                        limit_usd: 50
                        remaining_usd: 17.5
                        reset_interval: weekly
                        resets_at: '2026-10-12T00:00:00.000Z'
                        scope: member
                        spend_usd: 32.5
                    byok_usage: 17.38
                    byok_usage_daily: 17.38
                    byok_usage_monthly: 17.38
                    byok_usage_weekly: 17.38
                    creator_user_id: user_2dHFtVWx2n56w6HkM0000000000
                    effective_budget:
                      budget_id: null
                      guardrail_id: 0df9e665-d932-5740-b2c7-b52af166bc11
                      include_byok: false
                      limit_usd: 50
                      remaining_usd: 17.5
                      reset_interval: weekly
                      resets_at: '2026-10-12T00:00:00.000Z'
                      scope: member
                      spend_usd: 32.5
                    expires_at: '2027-12-31T23:59:59Z'
                    free_model_daily_requests:
                      limit: 50
                      remaining: 38
                      used: 12
                    include_byok_in_limit: false
                    is_free_tier: false
                    is_management_key: false
                    is_provisioning_key: false
                    label: sk-or-v1-au7...890
                    limit: 100
                    limit_remaining: 74.5
                    limit_reset: monthly
                    rate_limit:
                      interval: 1h
                      note: This field is deprecated and safe to ignore.
                      requests: 1000
                    usage: 25.5
                    usage_daily: 25.5
                    usage_monthly: 25.5
                    usage_weekly: 25.5
                properties:
                  data:
                    description: Current API key information
                    example:
                      allowed_data_regions:
                        - global
                        - europe
                        - us
                      budgets:
                        - budget_id: null
                          guardrail_id: 0df9e665-d932-5740-b2c7-b52af166bc11
                          include_byok: false
                          limit_usd: 50
                          remaining_usd: 17.5
                          reset_interval: weekly
                          resets_at: '2026-10-12T00:00:00.000Z'
                          scope: member
                          spend_usd: 32.5
                      byok_usage: 17.38
                      byok_usage_daily: 17.38
                      byok_usage_monthly: 17.38
                      byok_usage_weekly: 17.38
                      creator_user_id: user_2dHFtVWx2n56w6HkM0000000000
                      effective_budget:
                        budget_id: null
                        guardrail_id: 0df9e665-d932-5740-b2c7-b52af166bc11
                        include_byok: false
                        limit_usd: 50
                        remaining_usd: 17.5
                        reset_interval: weekly
                        resets_at: '2026-10-12T00:00:00.000Z'
                        scope: member
                        spend_usd: 32.5
                      expires_at: '2027-12-31T23:59:59Z'
                      free_model_daily_requests:
                        limit: 50
                        remaining: 38
                        used: 12
                      include_byok_in_limit: false
                      is_free_tier: false
                      is_management_key: false
                      is_provisioning_key: false
                      label: sk-or-v1-au7...890
                      limit: 100
                      limit_remaining: 74.5
                      limit_reset: monthly
                      rate_limit:
                        interval: 1h
                        note: This field is deprecated and safe to ignore.
                        requests: 1000
                      usage: 25.5
                      usage_daily: 25.5
                      usage_monthly: 25.5
                      usage_weekly: 25.5
                    properties:
                      allowed_data_regions:
                        description: >-
                          Data regions permitted for this API key by the
                          guardrail policies on the key and the account
                          regional-routing entitlement. Empty when no region is
                          permitted. Reflects region policy only: other key
                          restrictions, such as management keys being blocked
                          from inference, still apply.
                        example:
                          - global
                          - europe
                          - us
                        items:
                          enum:
                            - global
                            - europe
                            - us
                          type: string
                        type: array
                      budgets:
                        description: >-
                          Every budget layer enforcement checks for requests
                          made with this key, in the order it checks them:
                          guardrail budgets, workspace budgets, then the key's
                          own limit. Empty when nothing is budgeted.
                          `effective_budget` is the budget that blocks requests
                          first: the entry enforcement rejects on when one is
                          already spent, otherwise the entry with the least
                          `remaining_usd`; null when nothing is budgeted.
                          `limit` and `limit_remaining` above describe only the
                          key's own limit.
                        example:
                          - budget_id: null
                            guardrail_id: 0df9e665-d932-5740-b2c7-b52af166bc11
                            include_byok: false
                            limit_usd: 50
                            remaining_usd: 17.5
                            reset_interval: weekly
                            resets_at: '2026-10-12T00:00:00.000Z'
                            scope: member
                            spend_usd: 32.5
                        items:
                          $ref: '#/components/schemas/KeyBudget'
                        type: array
                      byok_usage:
                        description: Total external BYOK usage (in USD) for the API key
                        example: 17.38
                        format: double
                        type: number
                      byok_usage_daily:
                        description: External BYOK usage (in USD) for the current UTC day
                        example: 17.38
                        format: double
                        type: number
                      byok_usage_monthly:
                        description: External BYOK usage (in USD) for current UTC month
                        example: 17.38
                        format: double
                        type: number
                      byok_usage_weekly:
                        description: >-
                          External BYOK usage (in USD) for the current UTC week
                          (Monday-Sunday)
                        example: 17.38
                        format: double
                        type: number
                      creator_user_id:
                        description: >-
                          The user ID of the key creator. For organization-owned
                          keys, this is the member who created the key. For
                          individual users, this is the user's own ID.
                        example: user_2dHFtVWx2n56w6HkM0000000000
                        type:
                          - string
                          - 'null'
                      effective_budget:
                        anyOf:
                          - $ref: '#/components/schemas/KeyBudget'
                          - type: 'null'
                      expires_at:
                        description: >-
                          ISO 8601 UTC timestamp when the API key expires, or
                          null if no expiration
                        example: '2027-12-31T23:59:59Z'
                        format: date-time
                        type:
                          - string
                          - 'null'
                      free_model_daily_requests:
                        $ref: '#/components/schemas/FreeModelDailyRequests'
                      include_byok_in_limit:
                        description: >-
                          Whether to include external BYOK usage in the credit
                          limit
                        example: false
                        type: boolean
                      is_free_tier:
                        description: Whether this is a free tier API key
                        example: false
                        type: boolean
                      is_management_key:
                        description: Whether this is a management key
                        example: false
                        type: boolean
                      is_provisioning_key:
                        deprecated: true
                        description: Whether this is a management key
                        example: false
                        type: boolean
                      label:
                        description: Human-readable label for the API key
                        example: sk-or-v1-0e6...1c96
                        type: string
                      limit:
                        description: Spending limit for the API key in USD
                        example: 100
                        format: double
                        type:
                          - number
                          - 'null'
                      limit_remaining:
                        description: Remaining spending limit in USD
                        example: 74.5
                        format: double
                        type:
                          - number
                          - 'null'
                      limit_reset:
                        description: Type of limit reset for the API key
                        example: monthly
                        type:
                          - string
                          - 'null'
                      organization_id:
                        description: >-
                          The ID of the organization that owns this API key, or
                          null when an individual account owns it.
                        example: null
                        type:
                          - string
                          - 'null'
                      rate_limit:
                        deprecated: true
                        description: >-
                          Legacy rate limit information about a key. Will always
                          return -1.
                        example:
                          interval: 1h
                          note: This field is deprecated and safe to ignore.
                          requests: 1000
                        properties:
                          interval:
                            description: Rate limit interval
                            example: 1h
                            type: string
                          note:
                            description: Note about the rate limit
                            example: This field is deprecated and safe to ignore.
                            type: string
                          requests:
                            description: Number of requests allowed per interval
                            example: 1000
                            type: integer
                        required:
                          - requests
                          - interval
                          - note
                        type: object
                      usage:
                        description: Total OpenRouter credit usage (in USD) for the API key
                        example: 25.5
                        format: double
                        type: number
                      usage_daily:
                        description: >-
                          OpenRouter credit usage (in USD) for the current UTC
                          day
                        example: 25.5
                        format: double
                        type: number
                      usage_monthly:
                        description: >-
                          OpenRouter credit usage (in USD) for the current UTC
                          month
                        example: 25.5
                        format: double
                        type: number
                      usage_weekly:
                        description: >-
                          OpenRouter credit usage (in USD) for the current UTC
                          week (Monday-Sunday)
                        example: 25.5
                        format: double
                        type: number
                      workspace_id:
                        description: >-
                          The ID of the workspace this API key spends in, or
                          null when no active workspace resolved for it, for
                          example because the key's workspace was deleted.
                        example: 0df9e665-d932-5740-b2c7-b52af166bc11
                        type:
                          - string
                          - 'null'
                    required:
                      - label
                      - limit
                      - usage
                      - usage_daily
                      - usage_weekly
                      - usage_monthly
                      - byok_usage
                      - byok_usage_daily
                      - byok_usage_weekly
                      - byok_usage_monthly
                      - is_free_tier
                      - is_management_key
                      - is_provisioning_key
                      - limit_remaining
                      - limit_reset
                      - include_byok_in_limit
                      - budgets
                      - effective_budget
                      - creator_user_id
                      - organization_id
                      - workspace_id
                      - allowed_data_regions
                      - free_model_daily_requests
                      - rate_limit
                    type: object
                required:
                  - data
                type: object
          description: API key details
        '401':
          content:
            application/json:
              example:
                error:
                  code: 401
                  message: Missing Authentication header
              schema:
                $ref: '#/components/schemas/UnauthorizedResponse'
          description: Unauthorized - Authentication required or invalid credentials
        '500':
          content:
            application/json:
              example:
                error:
                  code: 500
                  message: Internal Server Error
              schema:
                $ref: '#/components/schemas/InternalServerResponse'
          description: Internal Server Error - Unexpected server error
components:
  schemas:
    KeyBudget:
      description: >-
        One budget layer that applies to requests made with this key, with the
        spend enforcement compares against it.
      example:
        budget_id: null
        guardrail_id: 0df9e665-d932-5740-b2c7-b52af166bc11
        include_byok: false
        limit_usd: 50
        remaining_usd: 17.5
        reset_interval: weekly
        resets_at: '2026-10-12T00:00:00.000Z'
        scope: member
        spend_usd: 32.5
      properties:
        budget_id:
          description: >-
            ID of the workspace budget for the `workspace` scope; null for other
            scopes.
          example: null
          type:
            - string
            - 'null'
        guardrail_id:
          description: ID of the guardrail that carries this budget; null for other scopes.
          example: 0df9e665-d932-5740-b2c7-b52af166bc11
          type:
            - string
            - 'null'
        include_byok:
          description: Whether external BYOK inference spend counts toward this budget.
          example: false
          type: boolean
        limit_usd:
          description: Budget limit in USD for the current window.
          example: 50
          format: double
          type: number
        remaining_usd:
          description: >-
            `limit_usd - spend_usd`. Zero or negative means this layer rejects
            requests with a 403 until it resets.
          example: 17.5
          format: double
          type: number
        reset_interval:
          description: >-
            UTC window the spend is counted over (weeks start Monday); null for
            a lifetime budget that never resets.
          enum:
            - daily
            - weekly
            - monthly
            - null
          example: weekly
          type:
            - string
            - 'null'
        resets_at:
          description: >-
            ISO 8601 UTC instant at which the window rolls over and spend
            returns to zero; null for a lifetime budget.
          example: '2026-10-12T00:00:00.000Z'
          format: date-time
          type:
            - string
            - 'null'
        scope:
          description: >-
            Which budget layer this is, in the order enforcement checks them:
            the workspace default guardrail against the member aggregate
            (`workspace_default_member`) and against this key
            (`workspace_default_key`), the member guardrail (`member`), the API
            key guardrail (`api_key`), a workspace budget (`workspace`), or the
            key's own limit (`key_limit`).
          enum:
            - workspace_default_member
            - workspace_default_key
            - member
            - api_key
            - workspace
            - key_limit
          example: member
          type: string
        spend_usd:
          description: >-
            Spend in USD that enforcement counts against this limit in the
            current window: the member aggregate for member-scoped layers,
            otherwise this key or workspace.
          example: 32.5
          format: double
          type: number
      required:
        - scope
        - guardrail_id
        - budget_id
        - limit_usd
        - spend_usd
        - remaining_usd
        - reset_interval
        - resets_at
        - include_byok
      type: object
    FreeModelDailyRequests:
      description: >-
        Free-model (`:free` variant) daily request quota for the account that
        owns the key. Reports the same counter and tier limit that free-model
        enforcement reads for accounts subject to the free-model limits; the
        counter resets at UTC midnight. Accounts and endpoints exempt from
        free-model limits, and BYOK requests, are not gated by it, so
        `remaining` is the tier policy rather than an enforced ceiling for them.
      example:
        limit: 50
        remaining: 38
        used: 12
      properties:
        limit:
          description: >-
            Free-model requests the account may make per UTC day; the ceiling
            depends on total credits purchased and is independent of
            `is_free_tier`
          example: 50
          type: integer
        remaining:
          description: Free-model requests left in the current UTC day
          example: 38
          type: integer
        used:
          description: >-
            Free-model requests recorded for the account so far in the current
            UTC day
          example: 12
          type: integer
      required:
        - used
        - limit
        - remaining
      type: object
    UnauthorizedResponse:
      description: Unauthorized - Authentication required or invalid credentials
      example:
        error:
          code: 401
          message: Missing Authentication header
      properties:
        error:
          $ref: '#/components/schemas/UnauthorizedResponseErrorData'
        openrouter_metadata:
          additionalProperties: {}
          type:
            - object
            - 'null'
        user_id:
          type:
            - string
            - 'null'
      required:
        - error
      type: object
    InternalServerResponse:
      description: Internal Server Error - Unexpected server error
      example:
        error:
          code: 500
          message: Internal Server Error
      properties:
        error:
          $ref: '#/components/schemas/InternalServerResponseErrorData'
        openrouter_metadata:
          additionalProperties: {}
          type:
            - object
            - 'null'
        user_id:
          type:
            - string
            - 'null'
      required:
        - error
      type: object
    UnauthorizedResponseErrorData:
      description: Error data for UnauthorizedResponse
      example:
        code: 401
        message: Missing Authentication header
      properties:
        code:
          type: integer
        message:
          type: string
        metadata:
          additionalProperties: {}
          type:
            - object
            - 'null'
      required:
        - code
        - message
      type: object
    InternalServerResponseErrorData:
      description: Error data for InternalServerResponse
      example:
        code: 500
        message: Internal Server Error
      properties:
        code:
          type: integer
        message:
          type: string
        metadata:
          additionalProperties: {}
          type:
            - object
            - 'null'
      required:
        - code
        - message
      type: object
  securitySchemes:
    apiKey:
      description: API key as bearer token in Authorization header
      scheme: bearer
      type: http

````