> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Create a new API key

> Create a new API key for the authenticated user. The plaintext `key` is returned only in this response. Treat it as a write-only, sensitive value; it cannot be retrieved later. Authenticate with a [management key](/docs/guides/overview/auth/management-api-keys). The optional `external` object associates the key with a partner-defined user and lookup key.



## OpenAPI

````yaml /openapi/openapi.yaml post /keys
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
  /keys:
    post:
      tags:
        - API Keys
      summary: Create a new API key
      description: >-
        Create a new API key for the authenticated user. The plaintext `key` is
        returned only in this response. Treat it as a write-only, sensitive
        value; it cannot be retrieved later. Authenticate with a [management
        key](/docs/guides/overview/auth/management-api-keys). The optional
        `external` object associates the key with a partner-defined user and
        lookup key.
      operationId: createKeys
      requestBody:
        content:
          application/json:
            example:
              expires_at: '2027-12-31T23:59:59Z'
              include_byok_in_limit: true
              limit: 50
              limit_reset: monthly
              name: My New API Key
            schema:
              example:
                expires_at: '2027-12-31T23:59:59Z'
                include_byok_in_limit: true
                limit: 50
                limit_reset: monthly
                name: My New API Key
              properties:
                creator_user_id:
                  description: >-
                    Optional user ID of the key creator. Only meaningful for
                    organization-owned keys where a specific member is creating
                    the key. A workspace-scoped management key may only name a
                    member of its own workspace.
                  example: user_2dHFtVWx2n56w6HkM0000000000
                  minLength: 1
                  type:
                    - string
                    - 'null'
                expires_at:
                  description: >-
                    Optional ISO 8601 UTC expiration timestamp. Must include
                    seconds (YYYY-MM-DDTHH:MM:SSZ; fractional seconds allowed);
                    minute-precision timestamps are rejected.
                  example: '2027-12-31T23:59:59Z'
                  format: date-time
                  type:
                    - string
                    - 'null'
                external:
                  description: >-
                    Optional partner-defined identity associated with the
                    created API key.
                  properties:
                    api_key:
                      description: >-
                        Optional partner-supplied API key with a minimum length
                        of 32 characters and sufficient entropy. Stored as a
                        SHA-256 hash and never returned.
                      maxLength: 512
                      minLength: 32
                      type: string
                    user:
                      description: >-
                        Partner's external user identifier for attribution: 1 to
                        512 characters after surrounding whitespace is trimmed,
                        well-formed Unicode, no NUL. For organization keys
                        outside HIPAA workspaces, the value is registered as an
                        external user if it does not exist yet, and the key is
                        linked to it.
                      example: partner-user-123
                      maxLength: 512
                      minLength: 1
                      type: string
                  required:
                    - user
                  type: object
                include_byok_in_limit:
                  description: Whether to include BYOK usage in the limit
                  example: true
                  type: boolean
                limit:
                  description: Optional spending limit for the API key in USD
                  example: 50
                  exclusiveMaximum: 1000000
                  format: double
                  minimum: 0
                  type:
                    - number
                    - 'null'
                limit_reset:
                  description: >-
                    Type of limit reset for the API key (daily, weekly, monthly,
                    or null for no reset). Resets happen automatically at
                    midnight UTC, and weeks are Monday through Sunday.
                  enum:
                    - daily
                    - weekly
                    - monthly
                    - null
                  example: monthly
                  type:
                    - string
                    - 'null'
                name:
                  description: Name for the new API key
                  example: My New API Key
                  maxLength: 256
                  minLength: 1
                  type: string
                workspace_id:
                  description: >-
                    The workspace to create the API key in. Defaults to the
                    default workspace for an organization-scoped management key,
                    or to the management key's own workspace for a
                    workspace-scoped one, which cannot create keys elsewhere.
                  example: 0df9e665-d932-5740-b2c7-b52af166bc11
                  format: uuid
                  type: string
              required:
                - name
              type: object
        required: true
      responses:
        '201':
          content:
            application/json:
              example:
                data:
                  byok_usage: 0
                  byok_usage_daily: 0
                  byok_usage_monthly: 0
                  byok_usage_weekly: 0
                  created_at: '2025-08-24T10:30:00Z'
                  creator_user_id: user_2dHFtVWx2n56w6HkM0000000000
                  disabled: false
                  expires_at: '2027-12-31T23:59:59Z'
                  external_user: null
                  hash: >-
                    f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943
                  include_byok_in_limit: true
                  label: My New API Key
                  last_used_at: null
                  limit: 50
                  limit_remaining: 50
                  limit_reset: monthly
                  name: My New API Key
                  updated_at: null
                  usage: 0
                  usage_daily: 0
                  usage_monthly: 0
                  usage_weekly: 0
                  workspace_id: 0df9e665-d932-5740-b2c7-b52af166bc11
                key: >-
                  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
              schema:
                example:
                  data:
                    byok_usage: 0
                    byok_usage_daily: 0
                    byok_usage_monthly: 0
                    byok_usage_weekly: 0
                    created_at: '2025-08-24T10:30:00Z'
                    creator_user_id: user_2dHFtVWx2n56w6HkM0000000000
                    disabled: false
                    expires_at: '2027-12-31T23:59:59Z'
                    external_user: null
                    hash: >-
                      f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943
                    include_byok_in_limit: true
                    label: My New API Key
                    last_used_at: null
                    limit: 50
                    limit_remaining: 50
                    limit_reset: monthly
                    name: My New API Key
                    updated_at: null
                    usage: 0
                    usage_daily: 0
                    usage_monthly: 0
                    usage_weekly: 0
                    workspace_id: 0df9e665-d932-5740-b2c7-b52af166bc11
                  key: >-
                    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
                properties:
                  data:
                    description: The created API key information
                    example:
                      byok_usage: 17.38
                      byok_usage_daily: 17.38
                      byok_usage_monthly: 17.38
                      byok_usage_weekly: 17.38
                      created_at: '2025-08-24T10:30:00Z'
                      creator_user_id: user_2dHFtVWx2n56w6HkM0000000000
                      disabled: false
                      expires_at: '2027-12-31T23:59:59Z'
                      external_user: null
                      hash: >-
                        f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943
                      include_byok_in_limit: false
                      label: sk-or-v1-0e6...1c96
                      last_used_at: '2026-09-15T15:45:00Z'
                      limit: 100
                      limit_remaining: 74.5
                      limit_reset: monthly
                      name: My Production Key
                      updated_at: '2025-08-24T15:45:00Z'
                      usage: 25.5
                      usage_daily: 25.5
                      usage_monthly: 25.5
                      usage_weekly: 25.5
                      workspace_id: 0df9e665-d932-5740-b2c7-b52af166bc11
                    properties:
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
                      created_at:
                        description: ISO 8601 timestamp of when the API key was created
                        example: '2025-08-24T10:30:00Z'
                        type: string
                      creator_user_id:
                        description: >-
                          The user ID of the key creator. For organization-owned
                          keys, this is the member who created the key. For
                          individual users, this is the user's own ID.
                        example: user_2dHFtVWx2n56w6HkM0000000000
                        type:
                          - string
                          - 'null'
                      disabled:
                        description: Whether the API key is disabled
                        example: false
                        type: boolean
                      expires_at:
                        description: >-
                          ISO 8601 UTC timestamp when the API key expires, or
                          null if no expiration
                        example: '2027-12-31T23:59:59Z'
                        format: date-time
                        type:
                          - string
                          - 'null'
                      external_user:
                        description: Partner's end-user identifier used for attribution.
                        example: null
                        type:
                          - string
                          - 'null'
                      hash:
                        description: Unique hash identifier for the API key
                        example: >-
                          f01d52606dc8f0a8303a7b5cc3fa07109c2e346cec7c0a16b40de462992ce943
                        type: string
                      include_byok_in_limit:
                        description: >-
                          Whether to include external BYOK usage in the credit
                          limit
                        example: false
                        type: boolean
                      label:
                        description: Human-readable label for the API key
                        example: sk-or-v1-0e6...1c96
                        type: string
                      last_used_at:
                        description: >-
                          ISO 8601 UTC timestamp of the most recent usage
                          recorded for the API key, or null if no usage has been
                          recorded since the end of 2025
                        example: '2026-09-15T15:45:00Z'
                        format: date-time
                        type:
                          - string
                          - 'null'
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
                      name:
                        description: Name of the API key
                        example: My Production Key
                        type: string
                      updated_at:
                        description: >-
                          ISO 8601 timestamp of when the API key was last
                          updated
                        example: '2025-08-24T15:45:00Z'
                        type:
                          - string
                          - 'null'
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
                        description: The workspace ID this API key belongs to.
                        example: 0df9e665-d932-5740-b2c7-b52af166bc11
                        type: string
                    required:
                      - hash
                      - name
                      - label
                      - disabled
                      - limit
                      - limit_remaining
                      - limit_reset
                      - include_byok_in_limit
                      - usage
                      - usage_daily
                      - usage_weekly
                      - usage_monthly
                      - byok_usage
                      - byok_usage_daily
                      - byok_usage_weekly
                      - byok_usage_monthly
                      - created_at
                      - updated_at
                      - last_used_at
                      - external_user
                      - creator_user_id
                      - workspace_id
                    type: object
                  key:
                    description: The actual API key string (only shown once)
                    example: >-
                      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
                    type: string
                required:
                  - data
                  - key
                type: object
          description: API key created successfully
        '400':
          content:
            application/json:
              example:
                error:
                  code: 400
                  message: Invalid request parameters
              schema:
                $ref: '#/components/schemas/BadRequestResponse'
          description: Bad Request - Invalid request parameters or malformed input
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
        '403':
          content:
            application/json:
              example:
                error:
                  code: 403
                  message: Only management keys can perform this operation
              schema:
                $ref: '#/components/schemas/ForbiddenResponse'
          description: Forbidden - Authentication successful but insufficient permissions
        '429':
          content:
            application/json:
              example:
                error:
                  code: 429
                  message: Rate limit exceeded
              schema:
                $ref: '#/components/schemas/TooManyRequestsResponse'
          description: Too Many Requests - Rate limit exceeded
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
    BadRequestResponse:
      description: Bad Request - Invalid request parameters or malformed input
      example:
        error:
          code: 400
          message: Invalid request parameters
      properties:
        error:
          $ref: '#/components/schemas/BadRequestResponseErrorData'
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
    ForbiddenResponse:
      description: Forbidden - Authentication successful but insufficient permissions
      example:
        error:
          code: 403
          message: Only management keys can perform this operation
      properties:
        error:
          $ref: '#/components/schemas/ForbiddenResponseErrorData'
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
    TooManyRequestsResponse:
      description: Too Many Requests - Rate limit exceeded
      example:
        error:
          code: 429
          message: Rate limit exceeded
      properties:
        error:
          $ref: '#/components/schemas/TooManyRequestsResponseErrorData'
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
    BadRequestResponseErrorData:
      description: Error data for BadRequestResponse
      example:
        code: 400
        message: Invalid request parameters
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
    ForbiddenResponseErrorData:
      description: Error data for ForbiddenResponse
      example:
        code: 403
        message: Only management keys can perform this operation
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
    TooManyRequestsResponseErrorData:
      description: Error data for TooManyRequestsResponse
      example:
        code: 429
        message: Rate limit exceeded
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