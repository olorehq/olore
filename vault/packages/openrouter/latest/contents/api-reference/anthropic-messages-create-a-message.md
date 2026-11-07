> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Create a message

> Creates a message using the Anthropic Messages API format. Supports text, images, PDFs, tools, and extended thinking.



## OpenAPI

````yaml /openapi/openapi.yaml post /messages
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
  /messages:
    post:
      tags:
        - Anthropic Messages
      summary: Create a message
      description: >-
        Creates a message using the Anthropic Messages API format. Supports
        text, images, PDFs, tools, and extended thinking.
      operationId: createMessages
      parameters:
        - description: >-
            Opt-in to surface routing metadata on the response under
            `openrouter_metadata`. Defaults to `disabled`. The legacy header
            `X-OpenRouter-Experimental-Metadata` is also accepted for backward
            compatibility.
          example: enabled
          in: header
          name: X-OpenRouter-Metadata
          required: false
          schema:
            $ref: '#/components/schemas/MetadataLevel'
      requestBody:
        content:
          application/json:
            example:
              max_tokens: 1024
              messages:
                - content: Hello, how are you?
                  role: user
              model: anthropic/claude-sonnet-4
            schema:
              $ref: '#/components/schemas/MessagesRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              example:
                container: null
                content:
                  - citations: []
                    text: >-
                      I'm doing well, thank you for asking! How can I help you
                      today?
                    type: text
                id: msg_abc123
                model: anthropic/claude-sonnet-4
                role: assistant
                stop_details: null
                stop_reason: end_turn
                stop_sequence: null
                type: message
                usage:
                  cache_creation: null
                  cache_creation_input_tokens: null
                  cache_read_input_tokens: null
                  inference_geo: null
                  input_tokens: 12
                  output_tokens: 18
                  output_tokens_details: null
                  server_tool_use: null
                  service_tier: standard
              schema:
                $ref: '#/components/schemas/MessagesResult'
            text/event-stream:
              example:
                data:
                  delta:
                    text: Hello
                    type: text_delta
                  index: 0
                  type: content_block_delta
                event: content_block_delta
              schema:
                $ref: '#/components/schemas/MessagesStreamingResponse'
          description: Successful response
        '400':
          content:
            application/json:
              example:
                error:
                  message: 'Invalid request: messages is required'
                  type: invalid_request_error
                request_id: null
                type: error
              schema:
                $ref: '#/components/schemas/AnthropicMessagesErrorResponse'
          description: Invalid request error
        '401':
          content:
            application/json:
              example:
                error:
                  message: Invalid API key
                  type: authentication_error
                request_id: null
                type: error
              schema:
                $ref: '#/components/schemas/AnthropicMessagesErrorResponse'
          description: Authentication error
        '403':
          content:
            application/json:
              examples:
                guardrail-blocked:
                  summary: Guardrail blocked the request
                  value:
                    error:
                      message: 'Request blocked: prompt injection patterns detected'
                      type: permission_error
                    openrouter_metadata:
                      pipeline:
                        - name: regex_pi_detection
                          summary: >-
                            Blocked: prompt injection detected (1 pattern
                            matched)
                          type: guardrail
                    request_id: null
                    type: error
                insufficient-permissions:
                  summary: Insufficient permissions
                  value:
                    error:
                      message: Only management keys can perform this operation
                      type: permission_error
                    request_id: null
                    type: error
              schema:
                $ref: '#/components/schemas/AnthropicMessagesErrorResponse'
          description: Forbidden error
        '404':
          content:
            application/json:
              example:
                error:
                  message: Model not found
                  type: not_found_error
                request_id: gen-xxxxxxxxxxxxxxxxxxxxxxxx
                type: error
              schema:
                $ref: '#/components/schemas/AnthropicMessagesErrorResponse'
          description: Not found error
        '429':
          content:
            application/json:
              example:
                error:
                  message: Rate limit exceeded
                  type: rate_limit_error
                request_id: gen-xxxxxxxxxxxxxxxxxxxxxxxx
                type: error
              schema:
                $ref: '#/components/schemas/AnthropicMessagesErrorResponse'
          description: Rate limit error
        '500':
          content:
            application/json:
              example:
                error:
                  message: Internal server error
                  type: api_error
                request_id: gen-xxxxxxxxxxxxxxxxxxxxxxxx
                type: error
              schema:
                $ref: '#/components/schemas/AnthropicMessagesErrorResponse'
          description: API error
        '503':
          content:
            application/json:
              example:
                error:
                  message: Service temporarily overloaded
                  type: overloaded_error
                request_id: gen-xxxxxxxxxxxxxxxxxxxxxxxx
                type: error
              schema:
                $ref: '#/components/schemas/AnthropicMessagesErrorResponse'
          description: Overloaded error
        '529':
          content:
            application/json:
              example:
                error:
                  message: Provider is temporarily overloaded
                  type: overloaded_error
                request_id: gen-xxxxxxxxxxxxxxxxxxxxxxxx
                type: error
              schema:
                $ref: '#/components/schemas/AnthropicMessagesErrorResponse'
          description: Overloaded error
components:
  schemas:
    MetadataLevel:
      description: >-
        Opt-in level for surfacing routing metadata on the response under
        `openrouter_metadata`.
      enum:
        - disabled
        - enabled
      example: enabled
      type: string
    MessagesRequest:
      description: Request schema for Anthropic Messages API endpoint
      example:
        max_tokens: 1024
        messages:
          - content: Hello, how are you?
            role: user
        model: anthropic/claude-4.5-sonnet-20250929
        temperature: 0.7
      properties:
        cache_control:
          $ref: '#/components/schemas/AnthropicCacheControlDirective'
        context_management:
          properties:
            edits:
              items:
                oneOf:
                  - properties:
                      clear_at_least:
                        $ref: '#/components/schemas/AnthropicInputTokensClearAtLeast'
                      clear_tool_inputs:
                        anyOf:
                          - type: boolean
                          - items:
                              type: string
                            type: array
                          - type: 'null'
                      exclude_tools:
                        items:
                          type: string
                        type:
                          - array
                          - 'null'
                      keep:
                        $ref: '#/components/schemas/AnthropicToolUsesKeep'
                      trigger:
                        discriminator:
                          mapping:
                            input_tokens: '#/components/schemas/AnthropicInputTokensTrigger'
                            tool_uses: '#/components/schemas/AnthropicToolUsesTrigger'
                          propertyName: type
                        oneOf:
                          - $ref: '#/components/schemas/AnthropicInputTokensTrigger'
                          - $ref: '#/components/schemas/AnthropicToolUsesTrigger'
                      type:
                        enum:
                          - clear_tool_uses_20250919
                        type: string
                    required:
                      - type
                    type: object
                  - properties:
                      keep:
                        anyOf:
                          - $ref: '#/components/schemas/AnthropicThinkingTurns'
                          - properties:
                              type:
                                enum:
                                  - all
                                type: string
                            required:
                              - type
                            type: object
                          - enum:
                              - all
                            type: string
                      type:
                        enum:
                          - clear_thinking_20251015
                        type: string
                    required:
                      - type
                    type: object
                  - properties:
                      instructions:
                        type:
                          - string
                          - 'null'
                      pause_after_compaction:
                        type: boolean
                      trigger:
                        anyOf:
                          - allOf:
                              - $ref: >-
                                  #/components/schemas/AnthropicInputTokensTrigger
                              - properties: {}
                                type: object
                          - type: 'null'
                        example:
                          type: input_tokens
                          value: 100000
                      type:
                        enum:
                          - compact_20260112
                        type: string
                    required:
                      - type
                    type: object
              type: array
          type:
            - object
            - 'null'
        deferred_tools:
          $ref: '#/components/schemas/DeferredToolsControl'
        fallbacks:
          description: >-
            Fallback models to try if the primary model fails or refuses, in
            order. Handled by OpenRouter multi-model routing rather than
            Anthropic server-side fallbacks; cannot be combined with `models`.
            Each entry accepts only `model`. Maximum of 3 entries.
          example:
            - model: claude-opus-4-8
          items:
            $ref: '#/components/schemas/MessagesFallbackParam'
          type:
            - array
            - 'null'
        max_tokens:
          type: integer
        messages:
          items:
            $ref: '#/components/schemas/MessagesMessageParam'
          type:
            - array
            - 'null'
        metadata:
          properties:
            user_id:
              type:
                - string
                - 'null'
          title: MessagesRequestMetadata
          type: object
        model:
          type: string
        models:
          items:
            type: string
          type: array
        output_config:
          $ref: '#/components/schemas/MessagesOutputConfig'
        plugins:
          description: >-
            Plugins you want to enable for this request, including their
            settings.
          items:
            discriminator:
              mapping:
                alignment: '#/components/schemas/AlignmentPlugin'
                armor: '#/components/schemas/ArmorPlugin'
                auto-beta-router: '#/components/schemas/AutoBetaRouterPlugin'
                auto-router: '#/components/schemas/AutoRouterPlugin'
                context-compression: '#/components/schemas/ContextCompressionPlugin'
                file-parser: '#/components/schemas/FileParserPlugin'
                fusion: '#/components/schemas/FusionPlugin'
                jev-router: '#/components/schemas/JevRouterPlugin'
                moderation: '#/components/schemas/ModerationPlugin'
                pareto-router: '#/components/schemas/ParetoRouterPlugin'
                response-healing: '#/components/schemas/ResponseHealingPlugin'
                switchyard-router: '#/components/schemas/SwitchyardRouterPlugin'
                web: '#/components/schemas/WebSearchPlugin'
                web-fetch: '#/components/schemas/WebFetchPlugin'
              propertyName: id
            oneOf:
              - $ref: '#/components/schemas/AutoRouterPlugin'
              - $ref: '#/components/schemas/AutoBetaRouterPlugin'
              - $ref: '#/components/schemas/ModerationPlugin'
              - $ref: '#/components/schemas/WebSearchPlugin'
              - $ref: '#/components/schemas/WebFetchPlugin'
              - $ref: '#/components/schemas/FileParserPlugin'
              - $ref: '#/components/schemas/ResponseHealingPlugin'
              - $ref: '#/components/schemas/ContextCompressionPlugin'
              - $ref: '#/components/schemas/ParetoRouterPlugin'
              - $ref: '#/components/schemas/FusionPlugin'
              - $ref: '#/components/schemas/SwitchyardRouterPlugin'
              - $ref: '#/components/schemas/JevRouterPlugin'
              - $ref: '#/components/schemas/AlignmentPlugin'
              - $ref: '#/components/schemas/ArmorPlugin'
          type: array
        provider:
          $ref: '#/components/schemas/ProviderPreferences'
        route:
          $ref: '#/components/schemas/DeprecatedRoute'
        safeguards:
          items:
            $ref: '#/components/schemas/AnthropicSafeguard'
          type:
            - array
            - 'null'
        service_tier:
          type: string
        session_id:
          description: >-
            A unique identifier for grouping related requests (e.g., a
            conversation or agent workflow). When provided, OpenRouter uses it
            as the sticky routing key, routing all requests in the session to
            the same provider to maximize prompt cache hits. Also used for
            observability grouping. If provided in both the request body and the
            x-session-id header, the body value takes precedence. Maximum of 256
            characters.
          maxLength: 256
          type: string
        speed:
          allOf:
            - $ref: '#/components/schemas/AnthropicSpeed'
            - description: >-
                Controls output generation speed. When set to `fast`, uses a
                higher-speed inference configuration at premium pricing.
                Defaults to `standard` when omitted.
              example: fast
        stop_sequences:
          items:
            type: string
          type: array
        stop_server_tools_when:
          $ref: '#/components/schemas/StopServerToolsWhen'
        stream:
          type: boolean
        system:
          anyOf:
            - type: string
            - items:
                $ref: '#/components/schemas/AnthropicTextBlockParam'
              type: array
        temperature:
          format: double
          type: number
        thinking:
          oneOf:
            - properties:
                block_binding:
                  $ref: '#/components/schemas/AnthropicThinkingBlockBinding'
                budget_tokens:
                  type: integer
                display:
                  $ref: '#/components/schemas/AnthropicThinkingDisplay'
                type:
                  enum:
                    - enabled
                  type: string
              required:
                - type
                - budget_tokens
              type: object
            - properties:
                type:
                  enum:
                    - disabled
                  type: string
              required:
                - type
              type: object
            - properties:
                block_binding:
                  $ref: '#/components/schemas/AnthropicThinkingBlockBinding'
                display:
                  $ref: '#/components/schemas/AnthropicThinkingDisplay'
                type:
                  enum:
                    - adaptive
                  type: string
              required:
                - type
              type: object
            - additionalProperties: false
              properties:
                type:
                  enum:
                    - between_tools
                  type: string
              required:
                - type
              type: object
        tool_choice:
          oneOf:
            - properties:
                disable_parallel_tool_use:
                  type: boolean
                type:
                  enum:
                    - auto
                  type: string
              required:
                - type
              type: object
            - properties:
                disable_parallel_tool_use:
                  type: boolean
                type:
                  enum:
                    - any
                  type: string
              required:
                - type
              type: object
            - properties:
                type:
                  enum:
                    - none
                  type: string
              required:
                - type
              type: object
            - properties:
                disable_parallel_tool_use:
                  type: boolean
                name:
                  type: string
                type:
                  enum:
                    - tool
                  type: string
              required:
                - type
                - name
              type: object
        tools:
          items:
            anyOf:
              - properties:
                  cache_control:
                    $ref: '#/components/schemas/AnthropicCacheControlDirective'
                  defer_loading:
                    type: boolean
                  description:
                    type: string
                  input_schema:
                    additionalProperties: {}
                    properties:
                      properties: {}
                      required:
                        items:
                          type: string
                        type:
                          - array
                          - 'null'
                      type:
                        default: object
                        type: string
                    type: object
                  name:
                    type: string
                  strict:
                    type: boolean
                  type:
                    enum:
                      - custom
                    type: string
                required:
                  - name
                  - input_schema
                type: object
              - properties:
                  cache_control:
                    $ref: '#/components/schemas/AnthropicCacheControlDirective'
                  name:
                    enum:
                      - bash
                    type: string
                  type:
                    enum:
                      - bash_20250124
                    type: string
                required:
                  - type
                  - name
                type: object
              - properties:
                  cache_control:
                    $ref: '#/components/schemas/AnthropicCacheControlDirective'
                  name:
                    enum:
                      - str_replace_editor
                    type: string
                  type:
                    enum:
                      - text_editor_20250124
                    type: string
                required:
                  - type
                  - name
                type: object
              - properties:
                  allowed_domains:
                    items:
                      type: string
                    type:
                      - array
                      - 'null'
                  blocked_domains:
                    items:
                      type: string
                    type:
                      - array
                      - 'null'
                  cache_control:
                    $ref: '#/components/schemas/AnthropicCacheControlDirective'
                  max_uses:
                    type:
                      - integer
                      - 'null'
                  name:
                    enum:
                      - web_search
                    type: string
                  type:
                    enum:
                      - web_search_20250305
                    type: string
                  user_location:
                    $ref: '#/components/schemas/AnthropicWebSearchToolUserLocation'
                required:
                  - type
                  - name
                type: object
              - properties:
                  allowed_callers:
                    $ref: '#/components/schemas/AnthropicAllowedCallers'
                  allowed_domains:
                    items:
                      type: string
                    type:
                      - array
                      - 'null'
                  blocked_domains:
                    items:
                      type: string
                    type:
                      - array
                      - 'null'
                  cache_control:
                    $ref: '#/components/schemas/AnthropicCacheControlDirective'
                  max_uses:
                    type:
                      - integer
                      - 'null'
                  name:
                    enum:
                      - web_search
                    type: string
                  type:
                    enum:
                      - web_search_20260209
                    type: string
                  user_location:
                    $ref: '#/components/schemas/AnthropicWebSearchToolUserLocation'
                required:
                  - type
                  - name
                type: object
              - properties:
                  allowed_callers:
                    $ref: '#/components/schemas/AnthropicAllowedCallers'
                  cache_control:
                    $ref: '#/components/schemas/AnthropicCacheControlDirective'
                  caching:
                    anyOf:
                      - $ref: '#/components/schemas/AnthropicCacheControlDirective'
                      - type: 'null'
                  defer_loading:
                    type: boolean
                  max_uses:
                    type: integer
                  model:
                    type: string
                  name:
                    enum:
                      - advisor
                    type: string
                  type:
                    enum:
                      - advisor_20260301
                    type: string
                required:
                  - type
                  - name
                  - model
                type: object
              - $ref: '#/components/schemas/BashServerTool'
              - $ref: '#/components/schemas/DatetimeServerTool'
              - $ref: '#/components/schemas/ImageGenerationServerTool_OpenRouter'
              - $ref: '#/components/schemas/MessagesSearchModelsServerTool'
              - $ref: '#/components/schemas/WebFetchServerTool'
              - $ref: '#/components/schemas/OpenRouterWebSearchServerTool'
              - additionalProperties: {}
                properties:
                  type:
                    type: string
                required:
                  - type
                type: object
              - $ref: '#/components/schemas/AnthropicToolSearchToolBm25'
              - $ref: '#/components/schemas/AnthropicToolSearchToolRegex'
              - $ref: '#/components/schemas/ShellServerTool_OpenRouter'
              - $ref: '#/components/schemas/ToolSearchServerTool'
          type: array
        top_k:
          type: integer
        top_p:
          format: double
          type: number
        trace:
          $ref: '#/components/schemas/TraceConfig'
        user:
          description: >-
            A unique identifier representing your end-user, which helps
            distinguish between different users of your app. This allows your
            app to identify specific users in case of abuse reports, preventing
            your entire app from being affected by the actions of individual
            users. Maximum of 256 characters.
          maxLength: 256
          type: string
      required:
        - model
        - messages
      type: object
    MessagesResult:
      allOf:
        - $ref: '#/components/schemas/BaseMessagesResult'
        - properties:
            context_management:
              properties:
                applied_edits:
                  items:
                    additionalProperties: {}
                    properties:
                      type:
                        type: string
                    required:
                      - type
                    type: object
                  type: array
              required:
                - applied_edits
              type:
                - object
                - 'null'
            openrouter_metadata:
              $ref: '#/components/schemas/OpenRouterMetadata'
            provider:
              type: string
            safeguard_results:
              items:
                $ref: '#/components/schemas/AnthropicSafeguardResult'
              type:
                - array
                - 'null'
            usage:
              allOf:
                - $ref: '#/components/schemas/AnthropicUsage'
                - properties:
                    cost:
                      format: double
                      type:
                        - number
                        - 'null'
                    cost_details:
                      $ref: '#/components/schemas/CostDetails'
                    deferred_tools_details:
                      properties:
                        completion_tokens:
                          description: Completion tokens summed over every upstream call
                          type: integer
                        prompt_tokens:
                          description: Prompt tokens summed over every upstream call
                          type: integer
                        total_tokens:
                          description: Sum of the above two fields
                          type: integer
                        turns:
                          description: Upstream model calls the run made
                          exclusiveMinimum: true
                          minimum: 0
                          type: integer
                      required:
                        - turns
                        - prompt_tokens
                        - completion_tokens
                        - total_tokens
                      type: object
                    is_byok:
                      type: boolean
                    iterations:
                      items:
                        $ref: '#/components/schemas/AnthropicUsageIteration'
                      type: array
                    server_tool_use:
                      $ref: '#/components/schemas/ORAnthropicServerToolUsage'
                    service_tier:
                      type:
                        - string
                        - 'null'
                    speed:
                      $ref: '#/components/schemas/AnthropicSpeed'
                  type: object
              example:
                cache_creation: null
                cache_creation_input_tokens: null
                cache_read_input_tokens: null
                inference_geo: null
                input_tokens: 100
                output_tokens: 50
                output_tokens_details: null
                server_tool_use: null
                service_tier: standard
          type: object
      description: >-
        Non-streaming response from the Anthropic Messages API with OpenRouter
        extensions
      example:
        container: null
        content:
          - citations: []
            text: Hello! I'm doing well, thank you for asking.
            type: text
        id: msg_01XFDUDYJgAACzvnptvVoYEL
        model: claude-sonnet-4-5-20250929
        role: assistant
        stop_details: null
        stop_reason: end_turn
        stop_sequence: null
        type: message
        usage:
          cache_creation: null
          cache_creation_input_tokens: null
          cache_read_input_tokens: null
          inference_geo: null
          input_tokens: 12
          output_tokens: 15
          output_tokens_details: null
          server_tool_use: null
          service_tier: standard
    MessagesStreamingResponse:
      example:
        data:
          delta:
            text: Hello
            type: text_delta
          index: 0
          type: content_block_delta
        event: content_block_delta
      properties:
        data:
          $ref: '#/components/schemas/MessagesStreamEvents'
        event:
          type: string
      required:
        - event
        - data
      type: object
    AnthropicMessagesErrorResponse:
      description: Error response from the Anthropic Messages API
      example:
        error:
          error_type: invalid_request
          message: 'Invalid request: messages field is required'
          type: invalid_request_error
        request_id: null
        type: error
      properties:
        error:
          properties:
            error_type:
              $ref: '#/components/schemas/ApiErrorType'
            message:
              type: string
            type:
              enum:
                - invalid_request_error
                - authentication_error
                - permission_error
                - not_found_error
                - rate_limit_error
                - api_error
                - overloaded_error
                - billing_error
                - timeout_error
              type: string
          required:
            - type
            - message
          type: object
        metadata:
          additionalProperties: {}
          type: object
        openrouter_metadata:
          additionalProperties: {}
          type:
            - object
            - 'null'
        request_id:
          type:
            - string
            - 'null'
        type:
          enum:
            - error
          type: string
      required:
        - type
        - error
        - request_id
      type: object
    AnthropicCacheControlDirective:
      description: >-
        Enable automatic prompt caching. When set at the top level, the system
        automatically applies cache breakpoints to the last cacheable block in
        the request. When set on an individual content block, it marks an
        explicit cache breakpoint; block-level markers also work on OpenAI
        models that support explicit prompt caching — OpenRouter converts them
        to the provider's native format.
      example:
        type: ephemeral
      properties:
        ttl:
          $ref: '#/components/schemas/AnthropicCacheControlTtl'
        type:
          enum:
            - ephemeral
          type: string
      required:
        - type
      type: object
    AnthropicInputTokensClearAtLeast:
      example:
        type: input_tokens
        value: 50000
      properties:
        type:
          enum:
            - input_tokens
          type: string
        value:
          type: integer
      required:
        - type
        - value
      type:
        - object
        - 'null'
    AnthropicToolUsesKeep:
      example:
        type: tool_uses
        value: 5
      properties:
        type:
          enum:
            - tool_uses
          type: string
        value:
          type: integer
      required:
        - type
        - value
      type: object
    AnthropicInputTokensTrigger:
      example:
        type: input_tokens
        value: 100000
      properties:
        type:
          enum:
            - input_tokens
          type: string
        value:
          type: integer
      required:
        - type
        - value
      type: object
    AnthropicToolUsesTrigger:
      example:
        type: tool_uses
        value: 10
      properties:
        type:
          enum:
            - tool_uses
          type: string
        value:
          type: integer
      required:
        - type
        - value
      type: object
    AnthropicThinkingTurns:
      example:
        type: thinking_turns
        value: 3
      properties:
        type:
          enum:
            - thinking_turns
          type: string
        value:
          type: integer
      required:
        - type
        - value
      type: object
    DeferredToolsControl:
      description: >-
        Opt-in versioned router-level deferred-tool protocol. Replay assistant
        reasoning unchanged on continuation; keep the catalog unchanged.
      example:
        profile: portable
        protocol: v1
        search:
          max_results: 5
          type: bm25
        validation: runtime
      properties:
        interface:
          description: >-
            How the universal profile exposes the hidden catalog to the
            provider. Absent or `wrappers`: the `tool_search` and `tool_exec`
            tools. `code_mode`: one `tool_code` tool that runs a short
            JavaScript program in which `search()` and `call()` reach the
            catalog, so several searches and calls complete in one tool result.
            Experimental.
          enum:
            - wrappers
            - code_mode
          type: string
        profile:
          description: >-
            Loading profile. `portable` serves the `defer_loading` tools with
            router-built search and call wrappers on any model and keeps the
            catalog fixed. `universal` defers every wrappable tool behind the
            same wrappers so the provider-facing tool list never changes, and
            rebuilds the catalog from each request so tools can be added or
            removed mid-conversation.
          enum:
            - portable
            - universal
          type: string
        protocol:
          enum:
            - v1
          type: string
        scope:
          description: >-
            Which tools the universal profile defers. Absent or `all`: every
            wrappable tool outside the coding-harness core set. `mcp`: only MCP
            server tools (`mcp__*` names and Responses namespaces outside
            `functions`); the harness keeps its own built-in tools direct.
            Experimental.
          enum:
            - all
            - mcp
          type: string
        search:
          $ref: '#/components/schemas/DeferredToolsSearchStrategy'
        validation:
          description: >-
            Where tool-call arguments are checked against the original schema.
            Only `runtime` (in OpenRouter) is available in this release.
          enum:
            - runtime
          type: string
      required:
        - protocol
        - profile
        - validation
        - search
      type: object
    MessagesFallbackParam:
      additionalProperties: {}
      description: >-
        Fallback model to try when the primary model fails or refuses. Only the
        `model` field is supported; per-attempt overrides are rejected.
      example:
        model: claude-opus-4-8
      properties:
        model:
          type: string
      required:
        - model
      type: object
    MessagesMessageParam:
      description: Anthropic message with OpenRouter extensions
      example:
        content: Hello, how are you?
        role: user
      properties:
        clear_at:
          $ref: '#/components/schemas/AnthropicSystemClearAt'
        content:
          anyOf:
            - type: string
            - items:
                oneOf:
                  - $ref: '#/components/schemas/AnthropicTextBlockParam'
                  - $ref: '#/components/schemas/AnthropicImageBlockParam'
                  - $ref: '#/components/schemas/AnthropicDocumentBlockParam'
                  - properties:
                      cache_control:
                        $ref: '#/components/schemas/AnthropicCacheControlDirective'
                      id:
                        type: string
                      input: {}
                      name:
                        type: string
                      type:
                        enum:
                          - tool_use
                        type: string
                    required:
                      - type
                      - id
                      - name
                    type: object
                  - properties:
                      cache_control:
                        $ref: '#/components/schemas/AnthropicCacheControlDirective'
                      content:
                        anyOf:
                          - type: string
                          - items:
                              anyOf:
                                - $ref: '#/components/schemas/AnthropicTextBlockParam'
                                - $ref: >-
                                    #/components/schemas/AnthropicImageBlockParam
                                - properties:
                                    tool_name:
                                      type: string
                                    type:
                                      enum:
                                        - tool_reference
                                      type: string
                                  required:
                                    - type
                                    - tool_name
                                  type: object
                                - $ref: >-
                                    #/components/schemas/AnthropicSearchResultBlockParam
                                - $ref: >-
                                    #/components/schemas/AnthropicDocumentBlockParam
                            type: array
                      is_error:
                        type: boolean
                      tool_use_id:
                        type: string
                      type:
                        enum:
                          - tool_result
                        type: string
                    required:
                      - type
                      - tool_use_id
                    type: object
                  - properties:
                      signature:
                        type: string
                      thinking:
                        type: string
                      type:
                        enum:
                          - thinking
                        type: string
                    required:
                      - type
                      - thinking
                      - signature
                    type: object
                  - properties:
                      data:
                        type: string
                      type:
                        enum:
                          - redacted_thinking
                        type: string
                    required:
                      - type
                      - data
                    type: object
                  - properties:
                      cache_control:
                        $ref: '#/components/schemas/AnthropicCacheControlDirective'
                      id:
                        type: string
                      input: {}
                      name:
                        type: string
                      type:
                        enum:
                          - server_tool_use
                        type: string
                    required:
                      - type
                      - id
                      - name
                    type: object
                  - properties:
                      cache_control:
                        $ref: '#/components/schemas/AnthropicCacheControlDirective'
                      content:
                        anyOf:
                          - items:
                              $ref: >-
                                #/components/schemas/AnthropicWebSearchResultBlockParam
                            type: array
                          - properties:
                              error_code:
                                enum:
                                  - invalid_tool_input
                                  - unavailable
                                  - max_uses_exceeded
                                  - too_many_requests
                                  - query_too_long
                                  - request_too_large
                                type: string
                              type:
                                enum:
                                  - web_search_tool_result_error
                                type: string
                            required:
                              - type
                              - error_code
                            type: object
                      tool_use_id:
                        type: string
                      type:
                        enum:
                          - web_search_tool_result
                        type: string
                    required:
                      - type
                      - tool_use_id
                      - content
                    type: object
                  - $ref: '#/components/schemas/AnthropicSearchResultBlockParam'
                  - properties:
                      cache_control:
                        $ref: '#/components/schemas/AnthropicCacheControlDirective'
                      content:
                        type:
                          - string
                          - 'null'
                      encrypted_content:
                        type:
                          - string
                          - 'null'
                      type:
                        enum:
                          - compaction
                        type: string
                    required:
                      - type
                      - content
                    type: object
                  - $ref: '#/components/schemas/MessagesAdvisorToolResultBlock'
                  - $ref: '#/components/schemas/MessagesToolAdditionBlock'
                  - $ref: '#/components/schemas/MessagesToolRemovalBlock'
                  - $ref: '#/components/schemas/MessagesShellToolResultBlock'
                  - $ref: '#/components/schemas/MessagesBashToolResultBlock'
                  - $ref: '#/components/schemas/ORAnthropicToolSearchResultParam'
              type: array
        output_config:
          $ref: '#/components/schemas/AnthropicMessageOutputConfig'
        role:
          enum:
            - user
            - assistant
            - system
          type: string
      required:
        - role
        - content
      type: object
    MessagesOutputConfig:
      description: >-
        Configuration for controlling output behavior. Supports the effort
        parameter and structured output format.
      example:
        effort: medium
      properties:
        effort:
          description: >-
            How much effort the model should put into its response. Higher
            effort levels may result in more thorough analysis but take longer.
            Valid values are `low`, `medium`, `high`, `xhigh`, or `max`.
          enum:
            - low
            - medium
            - high
            - xhigh
            - max
            - null
          example: medium
          type:
            - string
            - 'null'
        format:
          description: >-
            A schema to specify Claude's output format in responses. See
            [structured
            outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs).
          properties:
            schema:
              additionalProperties: {}
              type: object
            type:
              enum:
                - json_schema
              type: string
          required:
            - type
            - schema
          type:
            - object
            - 'null'
        task_budget:
          description: >-
            Task budget for an agentic turn. The model sees a countdown of
            remaining tokens and uses it to prioritize work and wind down
            gracefully. Advisory — does not enforce a hard cap.
          example:
            total: 400000
            type: tokens
          properties:
            remaining:
              minimum: 0
              type:
                - integer
                - 'null'
            total:
              minimum: 20000
              type: integer
            type:
              enum:
                - tokens
              type: string
          required:
            - type
            - total
          type:
            - object
            - 'null'
      type: object
    AlignmentPlugin:
      additionalProperties: false
      description: >-
        Beta. States the listed rules to the model and evaluates every turn
        against them; the configuration, metadata, and error shapes may change.
      example:
        id: alignment
        mode: audit
        rules:
          - rule: Never offer a discount.
            watch:
              - content
      properties:
        id:
          enum:
            - alignment
          type: string
        instruct:
          description: >-
            Whether the rules are stated to the model in a system message on
            every provider call. Default true.
          type: boolean
        max_retries:
          description: >-
            Provider calls made again after a blocked turn, in enforce mode.
            Default 1.
          type: integer
        mode:
          description: >-
            `enforce`: a turn that breaks a rule is withheld, retried, and
            finally returned as an error. `audit`: every turn is evaluated and
            returned. Default `audit`.
          enum:
            - enforce
            - audit
          type: string
        rules:
          description: Rules the reply must follow. Each rule is evaluated on its own.
          example:
            - rule: Never offer a discount.
              watch:
                - content
            - rule: Never call delete_file.
              watch:
                - tool_calls
          items:
            $ref: '#/components/schemas/AlignmentRule'
          maxItems: 128
          minItems: 1
          type: array
        threshold:
          description: >-
            Probability at or above which a rule is broken, from 0.01 to 1.
            Default 0.7.
          format: double
          type: number
      required:
        - id
        - rules
      type: object
    ArmorPlugin:
      additionalProperties: false
      description: >-
        Evaluates every client tool call the model emits against a rule stack
        (hard-deny, soft-deny, allow) before it reaches the caller. The stack
        merges the workspace guardrail, this plugin, and any Anthropic
        `safeguards`; on endpoints that support Anthropic's `dangerous-tool-use`
        beta the evaluation is native, elsewhere it is one decisions call per
        tool call. Evaluation is not billed during the beta. Verdicts are
        reported as `safeguard_results`.
      example:
        classifier_context:
          auto_mode:
            environment:
              - 'Trusted repo: github.com/acme/app'
            soft_deny:
              - id: no-migrations-delete
                instructions: Deleting a file under db/migrations.
          v: 1
        id: armor
        use_cc_style_default_rules: true
      properties:
        classifier_context:
          $ref: '#/components/schemas/ArmorContext'
        enabled:
          description: Set to false to disable Armor for this request. Defaults to true.
          type: boolean
        evaluate_native_tools:
          description: >-
            Run provider-native server tools (web search, code execution, ...)
            through the agent loop so Armor evaluates them too. Defaults to
            false: native passthrough stands and such calls are reported
            `skipped`.
          type: boolean
        id:
          enum:
            - armor
          type: string
        mode:
          description: >-
            `enforce` withholds blocked calls; `audit` evaluates and reports the
            same verdicts without withholding any calls, regardless of
            `on_error`. Default `enforce`.
          enum:
            - enforce
            - audit
          type: string
        on_error:
          description: >-
            When the classifier cannot answer (timeout, upstream error, context
            too long) the call is reported `unavailable`; `block` rejects it and
            `log` releases it. Default `block`.
          enum:
            - log
            - block
          type: string
        output_mode:
          description: >-
            How a blocked call reaches the caller. `text` (the default): the
            call is withheld and an `<openrouter_armor_blocked>` marker stands
            in assistant text. `custom_item` (Responses API only): the call is
            withheld and an `openrouter:armor_blocked` output item carries its
            id, name, arguments and the rule that fired.
            `claude_code_compatibility` (Messages API only; the default when the
            request carries a `dangerous_tool_use` safeguard, i.e. the client
            speaks Claude Code's protocol): the `tool_use` stays in `content[]`
            and the verdict is `flagged` in `safeguard_results`, so the client
            withholds execution and writes the error tool result as under the
            native classifier. Under `text` and `custom_item` the model received
            a failure result in the loop and continued in the same request;
            under `claude_code_compatibility` the turn ends on the flagged call
            and the model continues on the next request, after the client's
            denial.
          enum:
            - text
            - custom_item
            - claude_code_compatibility
          type: string
        use_cc_style_default_rules:
          description: >-
            Prepend Claude Code's built-in auto-mode rule set (1 hard-deny, 72
            soft-deny, 17 allow, 21 environment slots) ahead of every configured
            rule. Defaults to true on the Anthropic Messages API and false
            elsewhere.
          type: boolean
      required:
        - id
      type: object
    AutoBetaRouterPlugin:
      example:
        allowed_models:
          - anthropic/*
          - openai/*
        cost_tier: low
        enabled: true
        excluded_models:
          - openai/gpt-4o
        id: auto-beta-router
      properties:
        allowed_models:
          description: >-
            List of model patterns to filter which models the auto-beta-router
            can route between. Supports wildcards (e.g., "anthropic/*" matches
            all Anthropic models). Up to 1024 patterns, each at most 1024
            characters, with 65536 total characters across all patterns. When
            not specified, every model ranked for the classified task type is a
            candidate, falling back to a default model set when rankings are
            unavailable.
          example:
            - anthropic/*
            - openai/gpt-4o
            - google/*
          items:
            maxLength: 1024
            type: string
          maxItems: 1024
          type: array
        cost_quality_tradeoff:
          deprecated: true
          description: >-
            Deprecated: Use cost_tier instead. Balances routing between cost and
            quality on a 0-10 scale. The auto-beta-router ranks models for the
            classified task type by community spend share, then filters
            candidates by their average cost per generation for that task.
            Higher values favor cheaper models: 10 keeps only models around the
            cheapest 10th percentile, while 0 permits models up to the 90th
            percentile for cost. Defaults to 9 when no cost setting is provided.
            It remains supported and retains ceiling behavior, but cost_tier
            takes precedence when both are provided.
          example: 9
          maximum: 10
          minimum: 0
          type: integer
        cost_tier:
          description: >-
            Named cost/quality setting. For auto-beta-router, tiers select
            cost-percentile bands: low = [0, 20), medium = [20, 40), high = [40,
            60), xhigh = [60, 80), and max = [80, 100]. Takes precedence over
            the deprecated numeric cost_quality_tradeoff when both are provided.
          enum:
            - low
            - medium
            - high
            - xhigh
            - max
          example: low
          type: string
        enabled:
          description: >-
            Set to false to disable the auto-beta-router plugin for this
            request. Defaults to true.
          type: boolean
        excluded_models:
          description: >-
            List of model patterns to exclude from auto-beta-router selection.
            Supports wildcards (e.g., "meta-llama/*" excludes all Llama models).
            Up to 1024 patterns, each at most 1024 characters, with 65536 total
            characters across all patterns. Applied after allowed_models, so an
            excluded pattern always wins over an allowed one.
          example:
            - openai/gpt-4o
            - meta-llama/*
          items:
            maxLength: 1024
            type: string
          maxItems: 1024
          type: array
        id:
          enum:
            - auto-beta-router
          type: string
      required:
        - id
      type: object
    AutoRouterPlugin:
      example:
        allowed_models:
          - anthropic/*
          - openai/*
        cost_tier: low
        enabled: true
        excluded_models:
          - openai/gpt-4o
        id: auto-router
        pin_model: false
      properties:
        allowed_models:
          description: >-
            List of model patterns to filter which models the auto-router can
            route between. Supports wildcards (e.g., "anthropic/*" matches all
            Anthropic models). Up to 1024 patterns, each at most 1024
            characters, with 65536 total characters across all patterns. When
            not specified, every model ranked for the classified task type is a
            candidate, falling back to a default model set when rankings are
            unavailable.
          example:
            - anthropic/*
            - openai/gpt-4o
            - google/*
          items:
            maxLength: 1024
            type: string
          maxItems: 1024
          type: array
        cost_quality_tradeoff:
          deprecated: true
          description: >-
            Deprecated: Use cost_tier instead. Balances routing between cost and
            quality on a 0-10 scale. The auto-router ranks models for the
            classified task type by community spend share, then filters
            candidates by their average cost per generation for that task.
            Higher values favor cheaper models: 10 keeps only models around the
            cheapest 10th percentile, while 0 permits models up to the 90th
            percentile for cost. Defaults to 9 when no cost setting is provided.
            It remains supported and retains ceiling behavior, but cost_tier
            takes precedence when both are provided.
          example: 9
          maximum: 10
          minimum: 0
          type: integer
        cost_tier:
          description: >-
            Named cost/quality setting. Tiers select cost-percentile bands: low
            = [0, 20), medium = [20, 40), high = [40, 60), xhigh = [60, 80), and
            max = [80, 100]. Takes precedence over the deprecated numeric
            cost_quality_tradeoff when both are provided.
          enum:
            - low
            - medium
            - high
            - xhigh
            - max
          example: low
          type: string
        enabled:
          description: >-
            Set to false to disable the auto-router plugin for this request.
            Defaults to true.
          type: boolean
        excluded_models:
          description: >-
            List of model patterns to exclude from auto-router selection.
            Supports wildcards (e.g., "meta-llama/*" excludes all Llama models).
            Up to 1024 patterns, each at most 1024 characters, with 65536 total
            characters across all patterns. Applied after allowed_models, so an
            excluded pattern always wins over an allowed one.
          example:
            - openai/gpt-4o
            - meta-llama/*
          items:
            maxLength: 1024
            type: string
          maxItems: 1024
          type: array
        id:
          enum:
            - auto-router
          type: string
        pin_model:
          description: >-
            When true, reuses the model from the most recent assistant message's
            `model` attribute for subsequent turns. Defaults to false.
          example: false
          type: boolean
      required:
        - id
      type: object
    ContextCompressionPlugin:
      example:
        enabled: true
        engine: middle-out
        id: context-compression
      properties:
        enabled:
          description: >-
            Set to false to disable the context-compression plugin for this
            request. Defaults to true.
          type: boolean
        engine:
          $ref: '#/components/schemas/ContextCompressionEngine'
        id:
          enum:
            - context-compression
          type: string
      required:
        - id
      type: object
    FileParserPlugin:
      example:
        enabled: true
        id: file-parser
        pdf:
          engine: cloudflare-ai
      properties:
        enabled:
          description: >-
            Set to false to disable the file-parser plugin for this request.
            Defaults to true.
          type: boolean
        id:
          enum:
            - file-parser
          type: string
        pdf:
          $ref: '#/components/schemas/PDFParserOptions'
      required:
        - id
      type: object
    FusionPlugin:
      example:
        analysis_models:
          - ~anthropic/claude-opus-latest
          - ~openai/gpt-sol-latest
          - ~google/gemini-pro-latest
        enabled: true
        id: fusion
        model: ~anthropic/claude-opus-latest
      properties:
        analysis_models:
          description: >-
            For a Fusion run started by the `openrouter/fusion` model slug or
            `openrouter:fusion` server tool, slugs of models to run in parallel
            as the "expert panel" the analyst analyzes. Each model receives the
            same user prompt with web_search + web_fetch enabled. Capped at 8
            models to bound cost amplification. When omitted, defaults to the
            Quality preset from the /labs/fusion UI
            (~anthropic/claude-opus-latest, ~openai/gpt-sol-latest,
            ~google/gemini-pro-latest).
          example:
            - ~anthropic/claude-opus-latest
            - ~openai/gpt-sol-latest
            - ~google/gemini-pro-latest
          items:
            type: string
          maxItems: 8
          minItems: 1
          type: array
        enabled:
          description: >-
            Set to false to disable Fusion configuration for a run started by
            the `openrouter/fusion` model slug or `openrouter:fusion` server
            tool. Defaults to true.
          type: boolean
        id:
          enum:
            - fusion
          type: string
        max_tool_calls:
          description: >-
            For a Fusion run started by the `openrouter/fusion` model slug or
            `openrouter:fusion` server tool, the maximum number of tool-calling
            steps each panelist (analysis model) and the analyst model may take
            during their agentic web-research loop. Models with
            web_search/web_fetch enabled iterate until they produce a text
            response or hit this ceiling. Defaults to 4. Capped at 16.
          example: 12
          maximum: 16
          minimum: 1
          type: integer
        model:
          description: >-
            For a Fusion run started by the `openrouter/fusion` model slug or
            `openrouter:fusion` server tool, the slug of the model that performs
            both the analyst step (with web_search + web_fetch) and the final
            synthesis. When omitted, defaults to the first model in the Quality
            preset.
          example: ~anthropic/claude-opus-latest
          type: string
        preset:
          description: >-
            Configuration for a Fusion run started by the `openrouter/fusion`
            model slug or `openrouter:fusion` server tool. A curated OpenRouter
            preset (slugs follow `<task>-<tier>`, e.g. `general-high`). Expands
            server-side into the preset's analysis_models panel and analyst
            model, so callers never name individual models. Explicitly provided
            `analysis_models` / `model` take precedence.
          enum:
            - general-high
            - general-budget
            - general-fast
          example: general-high
          type: string
        tools:
          description: >-
            For a Fusion run started by the `openrouter/fusion` model slug or
            `openrouter:fusion` server tool, server tools available to panelist
            and analyst inner calls. Each entry uses the same `{ type,
            parameters? }` shorthand as the outer Chat Completions request. When
            omitted, defaults to `[{ type: "openrouter:web_search" }, { type:
            "openrouter:web_fetch" }]`. Pass an empty array to disable tools
            entirely (panelists answer from parametric knowledge only).
          example:
            - parameters:
                excluded_domains:
                  - example.com
              type: openrouter:web_search
            - type: openrouter:web_fetch
          items:
            properties:
              parameters:
                additionalProperties:
                  anyOf:
                    - type: string
                    - format: double
                      type: number
                    - type: boolean
                    - type: 'null'
                    - items:
                        anyOf:
                          - type: string
                          - format: double
                            type: number
                          - type: boolean
                          - type: 'null'
                          - type: 'null'
                      type: array
                    - additionalProperties:
                        anyOf:
                          - type: string
                          - format: double
                            type: number
                          - type: boolean
                          - type: 'null'
                          - type: 'null'
                      type: object
                    - type: 'null'
                description: >-
                  Optional configuration forwarded as the tool's `parameters`
                  object.
                type: object
              type:
                description: >-
                  Server tool type identifier (e.g. "openrouter:web_search",
                  "openrouter:web_fetch").
                type: string
            required:
              - type
            type: object
          maxItems: 8
          type: array
      required:
        - id
      type: object
    JevRouterPlugin:
      additionalProperties: false
      example:
        excluded_models:
          - openai/gpt-6-astra
        id: jev-router
        models:
          - anthropic/*
          - openai/gpt-5.6-sol
      properties:
        allowed_models:
          description: >-
            Alias of `models`, matching the auto-router field name. Entries from
            both fields are combined.
          example:
            - anthropic/*
          items:
            maxLength: 1024
            type: string
          maxItems: 1024
          type: array
        cost_tier:
          description: >-
            Select low, medium, high, or a cost tier configured by the operator.
            Overrides the live-config tier and replaces the shared routing
            policy with that tier. Omit to use the live configuration. Model
            exclusions and the router kill switch still apply.
          example: medium
          pattern: ^[a-z][a-z0-9_-]{0,31}$
          type: string
        excluded_models:
          description: >-
            Remove these models from the router. Each entry is a model slug or a
            wildcard pattern (e.g. "xiaomi/*"). A `~author/family-latest` alias
            matches every revision of that family. Up to 1024 patterns, each at
            most 1024 characters, with 65536 total characters across all
            patterns. Applied after `models`, so an excluded pattern always wins
            over an included one; when the lists leave no model the request can
            use, it fails with 404 rather than routing outside them.
          example:
            - openai/gpt-6-astra
            - xiaomi/*
          items:
            maxLength: 1024
            type: string
          maxItems: 1024
          type: array
        id:
          enum:
            - jev-router
          type: string
        models:
          description: >-
            Restrict the router to these models. Each entry is a model slug or a
            wildcard pattern (e.g. "anthropic/*"), matched against the current
            pool; models outside the pool are ignored. A `~author/family-latest`
            alias matches every revision of that family. Up to 1024 patterns,
            each at most 1024 characters, with 65536 total characters across all
            patterns. When omitted or empty, every model in the pool is a
            candidate; when no pool model matches, the list is ignored and the
            whole pool is used (`excluded_models` still apply). When no entry
            matches any catalog model, for example a misspelled slug, the
            request fails with 404 instead. `allowed_models` is an alias;
            entries from both fields are combined.
          example:
            - anthropic/*
            - openai/gpt-5.6-sol
          items:
            maxLength: 1024
            type: string
          maxItems: 1024
          type: array
      required:
        - id
      type: object
    ModerationPlugin:
      example:
        id: moderation
      properties:
        id:
          enum:
            - moderation
          type: string
      required:
        - id
      type: object
    ParetoRouterPlugin:
      example:
        enabled: true
        id: pareto-router
        max_price: 5
        price_source: prompt
      properties:
        enabled:
          description: >-
            Set to false to disable the pareto-router plugin for this request.
            Defaults to true.
          type: boolean
        id:
          enum:
            - pareto-router
          type: string
        max_price:
          description: >-
            Maximum input price in USD per million tokens. When set,
            quality-tier selection (min_coding_score) is bypassed: the router
            computes the Pareto frontier over the top coding models and routes
            to the best-scoring frontier model priced at or below this cap,
            falling back through cheaper frontier models, then non-frontier
            models. Enforced against the price source given by price_source.
            Returns 404 when no candidate satisfies the cap.
          example: 5
          format: double
          minimum: 0
          type: number
        min_coding_score:
          description: >-
            Minimum coding quality score between 0 and 1. Maps to internal
            quality tiers: >= 0.66 → high (top coding models), >= 0.33 → medium
            (strong modern flagships), < 0.33 → low (capable coders above the
            median). Omit to default to the highest tier (equivalent to >=
            0.66). Not used when max_price is set (price-based selection takes
            over).
          example: 0.8
          format: double
          maximum: 1
          minimum: 0
          type: number
        price_source:
          description: >-
            Price source for the Pareto frontier cost axis and for enforcing
            max_price. "prompt" uses catalog list price
            (endpoint.pricing.prompt). "weighted_avg" uses traffic-weighted
            effective input price from ClickHouse, falling back to prompt price
            for models without traffic data. Defaults to "prompt".
          enum:
            - prompt
            - weighted_avg
          type: string
      required:
        - id
      type: object
    ResponseHealingPlugin:
      example:
        enabled: true
        id: response-healing
      properties:
        enabled:
          description: >-
            Set to false to disable the response-healing plugin for this
            request. Defaults to true.
          type: boolean
        id:
          enum:
            - response-healing
          type: string
      required:
        - id
      type: object
    SwitchyardRouterPlugin:
      example:
        algorithm: stage
        id: switchyard-router
      properties:
        algorithm:
          description: >-
            Routing algorithm for this request. "capability" calls a small judge
            model to rate how demanding the task is, then picks the efficient or
            capable candidate. "stage" reads the tool-result history (errors,
            repeated failures, edits landing) and calls the judge only when
            those signals are undecided. "auto" is "stage" without the judge
            call. "random" picks one candidate at random. "composite" keeps the
            tier chosen on the last human turn and re-evaluates tool turns with
            the stage signals. "passthrough" serves the eligible candidates in
            the order OpenRouter already ranked them, with no routing decision
            and no judge call. Omit this field to use the platform default,
            stage.
          enum:
            - capability
            - stage
            - auto
            - random
            - composite
            - passthrough
          type: string
        id:
          enum:
            - switchyard-router
          type: string
        judge_model:
          description: >-
            The model that runs the judge call for the judge-backed algorithms
            ("capability", "stage", and "composite"). The model must support
            structured outputs and have a provider that your account and request
            settings allow. Otherwise, the request uses the platform default
            judge, google/gemini-3.5-flash-lite, or openai/gpt-4o-mini when the
            default does not fit either, and reports the reason in the routing
            metadata. The judge call is billed to you like any other request.
          example: openai/gpt-5.4-nano
          minLength: 1
          type: string
      required:
        - id
      type: object
    WebSearchPlugin:
      example:
        enabled: true
        id: web
        max_results: 5
      properties:
        enabled:
          description: >-
            Set to false to disable the web-search plugin for this request.
            Defaults to true.
          type: boolean
        engine:
          $ref: '#/components/schemas/WebSearchEngine'
        exclude_domains:
          description: >-
            A list of domains to exclude from web search results. Supports
            wildcards (e.g. "*.substack.com") and path filtering (e.g.
            "openai.com/blog").
          example:
            - example.com
            - '*.substack.com'
            - openai.com/blog
          items:
            type: string
          type: array
        id:
          enum:
            - web
          type: string
        include_domains:
          description: >-
            A list of domains to restrict web search results to. Supports
            wildcards (e.g. "*.substack.com") and path filtering (e.g.
            "openai.com/blog").
          example:
            - example.com
            - '*.substack.com'
            - openai.com/blog
          items:
            type: string
          type: array
        max_results:
          type: integer
        max_uses:
          description: >-
            Maximum number of times the model can invoke web search in a single
            turn. Passed through to native providers that support it (e.g.
            Anthropic).
          type: integer
        mode:
          $ref: '#/components/schemas/WebSearchMode'
        search_prompt:
          type: string
        user_location:
          allOf:
            - $ref: '#/components/schemas/WebSearchUserLocation'
            - description: >-
                Approximate user location for location-biased search results.
                Passed through to native providers that support it (e.g.
                Anthropic).
              example:
                city: San Francisco
                country: US
                region: California
                timezone: America/Los_Angeles
                type: approximate
              required:
                - type
        x_search:
          $ref: '#/components/schemas/XSearchOptions'
      required:
        - id
      type: object
    WebFetchPlugin:
      example:
        id: web-fetch
        max_uses: 10
      properties:
        allowed_domains:
          description: Only fetch from these domains.
          items:
            type: string
          type: array
        blocked_domains:
          description: Never fetch from these domains.
          items:
            type: string
          type: array
        id:
          enum:
            - web-fetch
          type: string
        max_content_tokens:
          description: >-
            Maximum content length in approximate tokens. Content exceeding this
            limit is truncated.
          type: integer
        max_uses:
          description: >-
            Maximum number of web fetches per request. Once exceeded, the tool
            returns an error.
          type: integer
      required:
        - id
      type: object
    ProviderPreferences:
      additionalProperties: false
      description: >-
        When multiple model providers are available, optionally indicate your
        routing preference.
      example:
        allow_fallbacks: true
      properties:
        allow_fallbacks:
          description: >
            Whether to allow backup providers to serve requests

            - true: (default) when the primary provider (or your custom
            providers in "order") is unavailable, use the next best provider.

            - false: use only the primary/custom provider, and return the
            upstream error if it's unavailable.
          type:
            - boolean
            - 'null'
        data_collection:
          description: >-
            Data collection setting. If no available model provider meets the
            requirement, your request will return an error.

            - allow: (default) allow providers which store user data
            non-transiently and may train on it


            - deny: use only providers which do not collect user data.
          enum:
            - deny
            - allow
            - null
          example: allow
          type:
            - string
            - 'null'
        enforce_distillable_text:
          description: >-
            Whether to restrict routing to only models that allow text
            distillation. When true, only models where the author has allowed
            distillation will be used.
          example: true
          type:
            - boolean
            - 'null'
        ignore:
          description: >-
            List of provider slugs to ignore. If provided, this list is merged
            with your account-wide ignored provider settings for this request.
          example:
            - openai
            - anthropic
          items:
            anyOf:
              - $ref: '#/components/schemas/ProviderName'
              - type: string
          type:
            - array
            - 'null'
        max_price:
          description: >-
            The object specifying the maximum price you want to pay for this
            request. USD price per million tokens, for prompt and completion.
          properties:
            audio:
              description: Maximum price in USD per audio unit
              type: string
            completion:
              description: Maximum price in USD per million completion tokens
              type: string
            image:
              description: Maximum price in USD per image
              type: string
            prompt:
              description: Maximum price in USD per million prompt tokens
              type: string
            request:
              description: Maximum price in USD per request
              type: string
          type: object
        only:
          description: >-
            List of provider slugs to allow. If provided, this list is merged
            with your account-wide allowed provider settings for this request.
          example:
            - openai
            - anthropic
          items:
            anyOf:
              - $ref: '#/components/schemas/ProviderName'
              - type: string
          type:
            - array
            - 'null'
        options:
          $ref: '#/components/schemas/ProviderOptions'
        order:
          description: >-
            An ordered list of provider slugs. The router will attempt to use
            the first provider in the subset of this list that supports your
            requested model, and fall back to the next if it is unavailable. If
            no providers are available, the request will fail with an error
            message.
          example:
            - openai
            - anthropic
          items:
            anyOf:
              - $ref: '#/components/schemas/ProviderName'
              - type: string
          type:
            - array
            - 'null'
        preferred_max_latency:
          $ref: '#/components/schemas/PreferredMaxLatency'
        preferred_min_throughput:
          $ref: '#/components/schemas/PreferredMinThroughput'
        quantizations:
          description: A list of quantization levels to filter the provider by.
          items:
            $ref: '#/components/schemas/Quantization'
          type:
            - array
            - 'null'
        require_parameters:
          description: >-
            Whether to filter providers to only those that support the
            parameters you've provided. If this setting is omitted or set to
            false, then providers will receive only the parameters they support,
            and ignore the rest.
          type:
            - boolean
            - 'null'
        sort:
          anyOf:
            - $ref: '#/components/schemas/ProviderSort'
            - $ref: '#/components/schemas/ProviderSortConfig'
            - type: 'null'
          description: >-
            The sorting strategy to use for this request, if "order" is not
            specified. When set, no load balancing is performed.
          example: price
        zdr:
          description: >-
            Whether to restrict routing to only ZDR (Zero Data Retention)
            endpoints. When true, only endpoints that do not retain prompts will
            be used.
          example: true
          type:
            - boolean
            - 'null'
      type:
        - object
        - 'null'
    DeprecatedRoute:
      deprecated: true
      description: >-
        **DEPRECATED** Use providers.sort.partition instead.
        Backwards-compatible alias for providers.sort.partition. Accepts legacy
        values: "fallback" (maps to "model"), "sort" (maps to "none").
      enum:
        - fallback
        - sort
        - null
      example: fallback
      type:
        - string
        - 'null'
      x-fern-ignore: true
      x-speakeasy-deprecation-message: Use providers.sort.partition instead.
      x-speakeasy-ignore: true
    AnthropicSafeguard:
      additionalProperties: {}
      description: A server-side safeguard Anthropic evaluates alongside the completion
      example:
        classifier_context:
          permission_mode: auto
          v: 1
        type: dangerous_tool_use
      properties:
        classifier_context:
          additionalProperties: {}
          type: object
        type:
          type: string
      required:
        - type
      type: object
    AnthropicSpeed:
      enum:
        - fast
        - standard
        - null
      example: standard
      type:
        - string
        - 'null'
    StopServerToolsWhen:
      description: >-
        Stop conditions for the server-tool agent loop. Any condition firing
        halts the loop (OR logic). When set, this overrides `max_tool_calls`.
        When a condition fires while the model is still emitting tool calls, the
        pending tool calls are executed and one final turn is made with tool
        calls disabled so the response ends with a natural-language answer
        instead of an unfinished tool call.
      example:
        - step_count: 5
          type: step_count_is
        - max_cost_in_dollars: 0.5
          type: max_cost
      items:
        $ref: '#/components/schemas/StopServerToolsWhenCondition'
      minItems: 1
      type: array
    AnthropicTextBlockParam:
      example:
        text: Hello, world!
        type: text
      properties:
        cache_control:
          $ref: '#/components/schemas/AnthropicCacheControlDirective'
        citations:
          items:
            discriminator:
              mapping:
                char_location: '#/components/schemas/AnthropicCitationCharLocationParam'
                content_block_location: >-
                  #/components/schemas/AnthropicCitationContentBlockLocationParam
                page_location: '#/components/schemas/AnthropicCitationPageLocationParam'
                search_result_location: >-
                  #/components/schemas/AnthropicCitationSearchResultLocationParam
                web_search_result_location: >-
                  #/components/schemas/AnthropicCitationWebSearchResultLocationParam
              propertyName: type
            oneOf:
              - $ref: '#/components/schemas/AnthropicCitationCharLocationParam'
              - $ref: '#/components/schemas/AnthropicCitationPageLocationParam'
              - $ref: >-
                  #/components/schemas/AnthropicCitationContentBlockLocationParam
              - $ref: >-
                  #/components/schemas/AnthropicCitationWebSearchResultLocationParam
              - $ref: >-
                  #/components/schemas/AnthropicCitationSearchResultLocationParam
          type:
            - array
            - 'null'
        text:
          type: string
        type:
          enum:
            - text
          type: string
      required:
        - type
        - text
      type: object
    AnthropicThinkingBlockBinding:
      additionalProperties: false
      example:
        prefix_mismatch_behavior: drop_block
      properties:
        mismatch_behavior:
          deprecated: true
          description: >-
            Deprecated: legacy alias of prefix_mismatch_behavior. Send only one
            of the two.
          enum:
            - error
            - drop_block
            - null
          type:
            - string
            - 'null'
        prefix_mismatch_behavior:
          enum:
            - error
            - drop_block
            - null
          type:
            - string
            - 'null'
      type:
        - object
        - 'null'
    AnthropicThinkingDisplay:
      enum:
        - summarized
        - omitted
        - updates
        - null
      example: summarized
      type:
        - string
        - 'null'
    AnthropicWebSearchToolUserLocation:
      example:
        city: San Francisco
        country: US
        region: California
        timezone: America/Los_Angeles
        type: approximate
      properties:
        city:
          type:
            - string
            - 'null'
        country:
          type:
            - string
            - 'null'
        region:
          type:
            - string
            - 'null'
        timezone:
          type:
            - string
            - 'null'
        type:
          enum:
            - approximate
          type: string
      required:
        - type
      type:
        - object
        - 'null'
    AnthropicAllowedCallers:
      example:
        - direct
      items:
        enum:
          - direct
          - code_execution_20250825
          - code_execution_20260120
        type: string
      type: array
    BashServerTool:
      description: >-
        OpenRouter built-in server tool: runs shell commands server-side in a
        sandboxed container
      example:
        parameters:
          environment:
            type: container_auto
        type: openrouter:bash
      properties:
        parameters:
          $ref: '#/components/schemas/BashServerToolConfig'
        type:
          enum:
            - openrouter:bash
          type: string
      required:
        - type
      type: object
    DatetimeServerTool:
      description: 'OpenRouter built-in server tool: returns the current date and time'
      example:
        parameters:
          timezone: America/New_York
        type: openrouter:datetime
      properties:
        parameters:
          $ref: '#/components/schemas/DatetimeServerToolConfig'
        type:
          enum:
            - openrouter:datetime
          type: string
      required:
        - type
      type: object
    ImageGenerationServerTool_OpenRouter:
      description: >-
        OpenRouter built-in server tool: generates images from text prompts
        using an image generation model
      example:
        parameters:
          model: openai/gpt-image-2.6-flare
          quality: high
          size: 1024x1024
        type: openrouter:image_generation
      properties:
        parameters:
          $ref: '#/components/schemas/ImageGenerationServerToolConfig'
        type:
          enum:
            - openrouter:image_generation
          type: string
      required:
        - type
      type: object
    MessagesSearchModelsServerTool:
      description: >-
        OpenRouter built-in server tool: searches and filters AI models
        available on OpenRouter
      example:
        parameters:
          max_results: 5
        type: openrouter:experimental__search_models
      properties:
        parameters:
          $ref: '#/components/schemas/SearchModelsServerToolConfig'
        type:
          enum:
            - openrouter:experimental__search_models
          type: string
      required:
        - type
      type: object
    WebFetchServerTool:
      description: >-
        OpenRouter built-in server tool: fetches full content from a URL (web
        page or PDF)
      example:
        parameters:
          max_uses: 10
        type: openrouter:web_fetch
      properties:
        parameters:
          $ref: '#/components/schemas/WebFetchServerToolConfig'
        type:
          enum:
            - openrouter:web_fetch
          type: string
      required:
        - type
      type: object
    OpenRouterWebSearchServerTool:
      description: >-
        OpenRouter built-in server tool: searches the web for current
        information
      example:
        parameters:
          max_results: 5
        type: openrouter:web_search
      properties:
        parameters:
          $ref: '#/components/schemas/WebSearchConfig'
        type:
          enum:
            - openrouter:web_search
          type: string
      required:
        - type
      type: object
    AnthropicToolSearchToolBm25:
      properties:
        allowed_callers:
          $ref: '#/components/schemas/AnthropicAllowedCallers'
        cache_control:
          $ref: '#/components/schemas/AnthropicCacheControlDirective'
        defer_loading:
          type: boolean
        name:
          enum:
            - tool_search_tool_bm25
          type: string
        strict:
          type: boolean
        type:
          enum:
            - tool_search_tool_bm25_20251119
            - tool_search_tool_bm25
          type: string
      required:
        - type
        - name
      type: object
    AnthropicToolSearchToolRegex:
      properties:
        allowed_callers:
          $ref: '#/components/schemas/AnthropicAllowedCallers'
        cache_control:
          $ref: '#/components/schemas/AnthropicCacheControlDirective'
        defer_loading:
          type: boolean
        name:
          enum:
            - tool_search_tool_regex
          type: string
        strict:
          type: boolean
        type:
          enum:
            - tool_search_tool_regex_20251119
            - tool_search_tool_regex
          type: string
      required:
        - type
        - name
      type: object
    ShellServerTool_OpenRouter:
      description: >-
        OpenRouter built-in server tool: runs shell commands server-side in a
        sandboxed container (a sandbox-backed clone of OpenAI's hosted shell
        tool)
      example:
        parameters:
          engine: openrouter
          environment:
            type: container_auto
        type: openrouter:shell
      properties:
        parameters:
          $ref: '#/components/schemas/ShellServerToolConfig'
        type:
          enum:
            - openrouter:shell
          type: string
      required:
        - type
      type: object
    ToolSearchServerTool:
      description: >-
        OpenRouter built-in server tool: finds tools marked `defer_loading` and
        makes them callable
      example:
        parameters:
          max_results: 5
        type: openrouter:tool_search
      properties:
        parameters:
          $ref: '#/components/schemas/ToolSearchServerToolConfig'
        type:
          enum:
            - openrouter:tool_search
          type: string
      required:
        - type
      type: object
    TraceConfig:
      additionalProperties: {}
      description: >-
        Metadata for observability and tracing. Known keys (trace_id,
        trace_name, span_name, generation_name, parent_span_id) have special
        handling. Additional keys are passed through as custom metadata to
        configured broadcast destinations.
      example:
        trace_id: trace-abc123
        trace_name: my-app-trace
      properties:
        generation_name:
          type: string
        parent_span_id:
          type: string
        span_name:
          type: string
        trace_id:
          type: string
        trace_name:
          type: string
      type: object
    BaseMessagesResult:
      description: Base Anthropic Messages API response before OpenRouter extensions
      example:
        container: null
        content:
          - citations: []
            text: Hello!
            type: text
        id: msg_01XFDUDYJgAACzvnptvVoYEL
        model: claude-sonnet-4-5-20250929
        role: assistant
        stop_details: null
        stop_reason: end_turn
        stop_sequence: null
        type: message
        usage:
          cache_creation: null
          cache_creation_input_tokens: null
          cache_read_input_tokens: null
          inference_geo: null
          input_tokens: 12
          output_tokens: 8
          output_tokens_details: null
          server_tool_use: null
          service_tier: standard
      properties:
        container:
          $ref: '#/components/schemas/AnthropicContainer'
        content:
          items:
            $ref: '#/components/schemas/ORAnthropicContentBlock'
          type: array
        id:
          type: string
        input_transformations:
          items:
            $ref: '#/components/schemas/AnthropicInputTransformation'
          type:
            - array
            - 'null'
        model:
          type: string
        role:
          enum:
            - assistant
          type: string
        stop_details:
          $ref: '#/components/schemas/AnthropicRefusalStopDetails'
        stop_reason:
          $ref: '#/components/schemas/ORAnthropicStopReason'
        stop_sequence:
          type:
            - string
            - 'null'
        type:
          enum:
            - message
          type: string
        usage:
          allOf:
            - $ref: '#/components/schemas/AnthropicUsage'
            - properties:
                iterations:
                  items:
                    $ref: '#/components/schemas/AnthropicUsageIteration'
                  type: array
                speed:
                  $ref: '#/components/schemas/AnthropicSpeed'
              type: object
          example:
            cache_creation: null
            cache_creation_input_tokens: null
            cache_read_input_tokens: null
            inference_geo: null
            input_tokens: 100
            output_tokens: 50
            output_tokens_details: null
            server_tool_use: null
            service_tier: standard
      required:
        - id
        - type
        - role
        - container
        - content
        - model
        - stop_reason
        - stop_details
        - stop_sequence
        - usage
      type: object
    OpenRouterMetadata:
      example:
        attempt: 1
        endpoints:
          available:
            - model: openai/gpt-4o
              provider: OpenAI
              selected: true
          total: 1
        generation_time: 2016
        is_byok: false
        region: iad
        requested: openai/gpt-4o
        strategy: direct
        summary: available=1, selected=OpenAI
      properties:
        attempt:
          type: integer
        attempts:
          items:
            $ref: '#/components/schemas/RouterAttempt'
          type: array
        endpoints:
          $ref: '#/components/schemas/EndpointsMetadata'
        generation_time:
          description: >-
            Milliseconds measured for the generation, from dispatching the
            upstream request until its response body ended. Divide the
            completion token count by this for throughput. Absent when no
            upstream request was dispatched.
          example: 2016
          type: integer
        is_byok:
          type: boolean
        params:
          $ref: '#/components/schemas/RouterParams'
        pipeline:
          items:
            $ref: '#/components/schemas/PipelineStage'
          type: array
        region:
          type:
            - string
            - 'null'
        requested:
          type: string
        strategy:
          $ref: '#/components/schemas/RoutingStrategy'
        summary:
          type: string
      required:
        - requested
        - strategy
        - region
        - summary
        - attempt
        - is_byok
        - endpoints
      type: object
    AnthropicSafeguardResult:
      additionalProperties: {}
      description: >-
        The outcome of a server-side safeguard, keyed by tool-use id where
        applicable
      example:
        status:
          tool_uses:
            toolu_01ABC:
              outcome: not_flagged
              type: evaluated
          type: available
        type: dangerous_tool_use
      properties:
        status:
          additionalProperties: {}
          properties:
            type:
              type: string
          required:
            - type
          type: object
        type:
          type: string
      required:
        - type
        - status
      type: object
    AnthropicUsage:
      example:
        cache_creation: null
        cache_creation_input_tokens: null
        cache_read_input_tokens: null
        inference_geo: null
        input_tokens: 100
        output_tokens: 50
        output_tokens_details: null
        server_tool_use: null
        service_tier: standard
      properties:
        cache_creation:
          $ref: '#/components/schemas/AnthropicCacheCreation'
        cache_creation_input_tokens:
          type:
            - integer
            - 'null'
        cache_read_input_tokens:
          type:
            - integer
            - 'null'
        inference_geo:
          type:
            - string
            - 'null'
        input_tokens:
          type: integer
        output_tokens:
          type: integer
        output_tokens_details:
          $ref: '#/components/schemas/AnthropicOutputTokensDetails'
        server_tool_use:
          $ref: '#/components/schemas/AnthropicServerToolUsage'
        service_tier:
          $ref: '#/components/schemas/AnthropicServiceTier'
      required:
        - input_tokens
        - output_tokens
        - output_tokens_details
        - cache_creation_input_tokens
        - cache_read_input_tokens
        - cache_creation
        - inference_geo
        - server_tool_use
        - service_tier
      type: object
    CostDetails:
      description: Breakdown of upstream inference costs
      example:
        upstream_inference_completions_cost: 0.0004
        upstream_inference_cost: null
        upstream_inference_prompt_cost: 0.0008
      properties:
        server_tool_cost:
          description: >-
            Metered server-tool execution cost (for example, shell sandbox time)
            billed for this request, in USD. Matches the billed checkpoint and
            settlement amounts exactly. 0 when a metered server tool ran but
            settled at zero dollars; absent when no metered server tool ran.
          format: double
          type:
            - number
            - 'null'
        upstream_inference_completions_cost:
          format: double
          type: number
        upstream_inference_cost:
          format: double
          type:
            - number
            - 'null'
        upstream_inference_prompt_cost:
          format: double
          type: number
      required:
        - upstream_inference_prompt_cost
        - upstream_inference_completions_cost
      type:
        - object
        - 'null'
    AnthropicUsageIteration:
      anyOf:
        - $ref: '#/components/schemas/AnthropicCompactionUsageIteration'
        - $ref: '#/components/schemas/AnthropicMessageUsageIteration'
        - $ref: '#/components/schemas/AnthropicAdvisorMessageUsageIteration'
        - $ref: '#/components/schemas/AnthropicUnknownUsageIteration'
      example:
        cache_creation: null
        cache_creation_input_tokens: 0
        cache_read_input_tokens: 0
        input_tokens: 100
        output_tokens: 50
        type: message
    ORAnthropicServerToolUsage:
      example:
        tool_calls_executed: 1
        tool_calls_requested: 1
        web_fetch_requests: 0
        web_search_requests: 0
      properties:
        tool_calls_executed:
          type: integer
        tool_calls_requested:
          type: integer
        web_fetch_requests:
          type: integer
        web_search_requests:
          type: integer
      required:
        - web_search_requests
        - web_fetch_requests
      type:
        - object
        - 'null'
    MessagesStreamEvents:
      description: Union of all possible streaming events
      discriminator:
        mapping:
          content_block_delta: '#/components/schemas/MessagesContentBlockDeltaEvent'
          content_block_start: '#/components/schemas/MessagesContentBlockStartEvent'
          content_block_stop: '#/components/schemas/MessagesContentBlockStopEvent'
          error: '#/components/schemas/MessagesErrorEvent'
          message_delta: '#/components/schemas/MessagesDeltaEvent'
          message_start: '#/components/schemas/MessagesStartEvent'
          message_stop: '#/components/schemas/MessagesStopEvent'
          ping: '#/components/schemas/MessagesPingEvent'
        propertyName: type
      example:
        delta:
          text: Hello
          type: text_delta
        index: 0
        type: content_block_delta
      oneOf:
        - $ref: '#/components/schemas/MessagesStartEvent'
        - $ref: '#/components/schemas/MessagesDeltaEvent'
        - $ref: '#/components/schemas/MessagesStopEvent'
        - $ref: '#/components/schemas/MessagesContentBlockStartEvent'
        - $ref: '#/components/schemas/MessagesContentBlockDeltaEvent'
        - $ref: '#/components/schemas/MessagesContentBlockStopEvent'
        - $ref: '#/components/schemas/MessagesPingEvent'
        - $ref: '#/components/schemas/MessagesErrorEvent'
    ApiErrorType:
      description: Canonical OpenRouter error type, stable across all API formats
      enum:
        - context_length_exceeded
        - max_tokens_exceeded
        - token_limit_exceeded
        - string_too_long
        - authentication
        - permission_denied
        - payment_required
        - rate_limit_exceeded
        - provider_overloaded
        - provider_unavailable
        - invalid_request
        - invalid_prompt
        - not_found
        - precondition_failed
        - payload_too_large
        - unprocessable
        - content_policy_violation
        - refusal
        - invalid_image
        - image_too_large
        - image_too_small
        - unsupported_image_format
        - image_not_found
        - image_download_failed
        - server
        - timeout
        - unmapped
      example: rate_limit_exceeded
      type: string
    AnthropicCacheControlTtl:
      enum:
        - 5m
        - 1h
      example: 5m
      type: string
    DeferredToolsSearchStrategy:
      description: Router-local regex/BM25 or caller-owned custom search.
      discriminator:
        mapping:
          bm25: '#/components/schemas/DeferredBm25Search'
          custom: '#/components/schemas/DeferredCustomSearch'
          regex: '#/components/schemas/DeferredRegexSearch'
        propertyName: type
      example:
        max_results: 5
        type: bm25
      oneOf:
        - $ref: '#/components/schemas/DeferredRegexSearch'
        - $ref: '#/components/schemas/DeferredBm25Search'
        - $ref: '#/components/schemas/DeferredCustomSearch'
    AnthropicSystemClearAt:
      enum:
        - next_user_message
        - never
        - null
      example: next_user_message
      type:
        - string
        - 'null'
    AnthropicImageBlockParam:
      example:
        source:
          data: /9j/4AAQ...
          media_type: image/jpeg
          type: base64
        type: image
      properties:
        cache_control:
          $ref: '#/components/schemas/AnthropicCacheControlDirective'
        source:
          discriminator:
            mapping:
              base64: '#/components/schemas/AnthropicBase64ImageSource'
              file: '#/components/schemas/AnthropicFileDocumentSource'
              url: '#/components/schemas/AnthropicUrlImageSource'
            propertyName: type
          oneOf:
            - $ref: '#/components/schemas/AnthropicBase64ImageSource'
            - $ref: '#/components/schemas/AnthropicUrlImageSource'
            - $ref: '#/components/schemas/AnthropicFileDocumentSource'
        type:
          enum:
            - image
          type: string
      required:
        - type
        - source
      type: object
    AnthropicDocumentBlockParam:
      example:
        source:
          data: Hello, world!
          media_type: text/plain
          type: text
        type: document
      properties:
        cache_control:
          $ref: '#/components/schemas/AnthropicCacheControlDirective'
        citations:
          properties:
            enabled:
              type: boolean
          type:
            - object
            - 'null'
        context:
          type:
            - string
            - 'null'
        source:
          oneOf:
            - $ref: '#/components/schemas/AnthropicBase64PdfSource'
            - $ref: '#/components/schemas/AnthropicPlainTextSource'
            - properties:
                content:
                  anyOf:
                    - type: string
                    - items:
                        discriminator:
                          mapping:
                            image: '#/components/schemas/AnthropicImageBlockParam'
                            text: '#/components/schemas/AnthropicTextBlockParam'
                          propertyName: type
                        oneOf:
                          - $ref: '#/components/schemas/AnthropicTextBlockParam'
                          - $ref: '#/components/schemas/AnthropicImageBlockParam'
                      type: array
                type:
                  enum:
                    - content
                  type: string
              required:
                - type
                - content
              type: object
            - $ref: '#/components/schemas/AnthropicUrlPdfSource'
            - $ref: '#/components/schemas/AnthropicFileDocumentSource'
        title:
          type:
            - string
            - 'null'
        type:
          enum:
            - document
          type: string
      required:
        - type
        - source
      type: object
    AnthropicSearchResultBlockParam:
      example:
        content:
          - text: Result content
            type: text
        source: example_source
        title: Example Result
        type: search_result
      properties:
        cache_control:
          $ref: '#/components/schemas/AnthropicCacheControlDirective'
        citations:
          properties:
            enabled:
              type: boolean
          type: object
        content:
          items:
            $ref: '#/components/schemas/AnthropicTextBlockParam'
          type: array
        source:
          type: string
        title:
          type: string
        type:
          enum:
            - search_result
          type: string
      required:
        - type
        - source
        - title
        - content
      type: object
    AnthropicWebSearchResultBlockParam:
      example:
        encrypted_content: enc_content_0
        title: Example Page
        type: web_search_result
        url: https://example.com
      properties:
        encrypted_content:
          type: string
        page_age:
          type:
            - string
            - 'null'
        title:
          type: string
        type:
          enum:
            - web_search_result
          type: string
        url:
          type: string
      required:
        - type
        - encrypted_content
        - title
        - url
      type: object
    MessagesAdvisorToolResultBlock:
      description: >-
        Advisor tool result from a prior assistant turn, replayed back to the
        model on the next turn. Mirrors the block Anthropic returns in assistant
        content when the `advisor_20260301` tool runs.
      example:
        content:
          text: Advisor response text
          type: advisor_result
        tool_use_id: srvtoolu_01abc
        type: advisor_tool_result
      properties:
        content:
          additionalProperties: {}
          type: object
        tool_use_id:
          type: string
        type:
          enum:
            - advisor_tool_result
          type: string
      required:
        - type
        - tool_use_id
        - content
      type: object
    MessagesToolAdditionBlock:
      description: >-
        Adds a tool mid-conversation without invalidating the prompt cache:
        either a previously deferred tool (declared in `tools` with
        `defer_loading: true`, referenced by name) or a full inline
        `tool_definition`. Only valid in `role: "system"` messages. Not
        supported on Claude Sonnet 5 or models older than Claude Opus 4.8.
      example:
        tool:
          name: get_forecast
          type: tool_reference
        type: tool_addition
      properties:
        cache_control:
          $ref: '#/components/schemas/AnthropicCacheControlDirective'
        tool:
          oneOf:
            - properties:
                name:
                  type: string
                type:
                  enum:
                    - tool_reference
                  type: string
              required:
                - type
                - name
              type: object
            - properties:
                name:
                  type: string
                server_name:
                  type: string
                type:
                  enum:
                    - mcp_tool_reference
                  type: string
              required:
                - type
                - name
                - server_name
              type: object
            - properties:
                server_name:
                  type: string
                type:
                  enum:
                    - mcp_toolset_reference
                  type: string
              required:
                - type
                - server_name
              type: object
            - properties:
                definition:
                  $ref: '#/components/schemas/AnthropicToolUnion'
                type:
                  enum:
                    - tool_definition
                  type: string
              required:
                - type
                - definition
              type: object
        type:
          enum:
            - tool_addition
          type: string
      required:
        - type
        - tool
      type: object
    MessagesToolRemovalBlock:
      description: >-
        Removes a tool from the conversation mid-conversation without
        invalidating the prompt cache. Only valid in `role: "system"` messages.
        Not supported on Claude Sonnet 5 or models older than Claude Opus 4.8.
      example:
        tool:
          name: get_weather
          type: tool_reference
        type: tool_removal
      properties:
        cache_control:
          $ref: '#/components/schemas/AnthropicCacheControlDirective'
        tool:
          oneOf:
            - properties:
                name:
                  type: string
                type:
                  enum:
                    - tool_reference
                  type: string
              required:
                - type
                - name
              type: object
            - properties:
                name:
                  type: string
                server_name:
                  type: string
                type:
                  enum:
                    - mcp_tool_reference
                  type: string
              required:
                - type
                - name
                - server_name
              type: object
            - properties:
                server_name:
                  type: string
                type:
                  enum:
                    - mcp_toolset_reference
                  type: string
              required:
                - type
                - server_name
              type: object
        type:
          enum:
            - tool_removal
          type: string
      required:
        - type
        - tool
      type: object
    MessagesShellToolResultBlock:
      description: >-
        Output of an `openrouter:shell` call from a prior assistant turn.
        Accepted on replay and dropped before the provider request — Anthropic
        has no equivalent block.
      example:
        content:
          output:
            - outcome:
                exit_code: 0
                type: exit
              stderr: ''
              stdout: |
                README.md
        tool_use_id: srvtoolu_01abc
        type: openrouter_shell_tool_result
      properties:
        container_id:
          description: >-
            The canonical container id the command ran under — the
            `{container_id}` for the Container Files API, reusable as a
            `container_reference` in later requests. Present on every
            sandbox-executed call, even when no files changed.
          type: string
        content:
          additionalProperties: {}
          type: object
        files:
          description: >-
            Citations for the files the sandbox command created or modified,
            most-recently-touched first (at most 10). Retrieve them via the
            Container Files API.
          items:
            properties:
              container_id:
                type: string
              end_index:
                type: integer
              file_id:
                type: string
              filename:
                type: string
              start_index:
                type: integer
              type:
                enum:
                  - container_file_citation
                type: string
            required:
              - type
              - container_id
              - file_id
              - filename
              - start_index
              - end_index
            type: object
          type: array
        tool_use_id:
          type: string
        type:
          enum:
            - openrouter_shell_tool_result
          type: string
      required:
        - type
        - tool_use_id
        - content
      type: object
    MessagesBashToolResultBlock:
      description: >-
        Output of a sandbox-executed `openrouter:bash` call from a prior
        assistant turn. Accepted on replay and dropped before the provider
        request — Anthropic has no equivalent block.
      example:
        content:
          command: ls
          exitCode: 0
          stderr: ''
          stdout: |
            README.md
        tool_use_id: srvtoolu_01abc
        type: openrouter_bash_tool_result
      properties:
        container_id:
          description: >-
            The canonical container id the command ran under — the
            `{container_id}` for the Container Files API, reusable as a
            `container_reference` in later requests. Present on every
            sandbox-executed call, even when no files changed.
          type: string
        content:
          additionalProperties: {}
          type: object
        files:
          description: >-
            Citations for the files the sandbox command created or modified,
            most-recently-touched first (at most 10). Retrieve them via the
            Container Files API.
          items:
            properties:
              container_id:
                type: string
              end_index:
                type: integer
              file_id:
                type: string
              filename:
                type: string
              start_index:
                type: integer
              type:
                enum:
                  - container_file_citation
                type: string
            required:
              - type
              - container_id
              - file_id
              - filename
              - start_index
              - end_index
            type: object
          type: array
        tool_use_id:
          type: string
        type:
          enum:
            - openrouter_bash_tool_result
          type: string
      required:
        - type
        - tool_use_id
        - content
      type: object
    ORAnthropicToolSearchResultParam:
      description: Router-owned deferred discovery result for continuation.
      example:
        content:
          matches: []
        tool_use_id: search
        type: openrouter_tool_search_result
      properties:
        content:
          additionalProperties: {}
          type: object
        tool_use_id:
          type: string
        type:
          enum:
            - openrouter_tool_search_result
          type: string
      required:
        - type
        - tool_use_id
        - content
      type: object
    AnthropicMessageOutputConfig:
      additionalProperties: false
      example:
        effort: low
      properties:
        effort:
          $ref: '#/components/schemas/AnthropicOutputEffort'
      type:
        - object
        - 'null'
    AlignmentRule:
      additionalProperties: false
      example:
        rule: Never offer a discount.
        watch:
          - content
      properties:
        rule:
          description: Text that states what the reply must do or must not do.
          maxLength: 200
          minLength: 1
          type: string
        watch:
          description: >-
            Fields of the assistant message the rule applies to. The rule is
            evaluated on a message that has at least one of them and is not
            applicable to any other message.
          items:
            enum:
              - content
              - tool_calls
              - refusal
              - images
              - audio
            type: string
          maxItems: 5
          minItems: 1
          type: array
          uniqueItems: true
      required:
        - rule
        - watch
      type: object
    ArmorContext:
      additionalProperties:
        description: Carried unchanged; any JSON value.
      description: >-
        The Armor context: Claude Code's `classifier_context` (v1), with
        `auto_mode.{hard_deny,soft_deny,allow}` rules as strings or `{ id,
        instructions, threshold? }` objects and `auto_mode.environment` entries
        as `"Name: value"` strings or `{ name, value }` objects. `threshold`
        applies when Armor evaluates; when the provider evaluates natively
        (Anthropic dangerous-tool-use beta) rules are judged at the provider's
        own boundary.
      example:
        auto_mode:
          allow: []
          environment:
            - 'Trusted repo: github.com/acme/app'
          hard_deny: []
          soft_deny:
            - id: secrets-in-vcs
              instructions: >-
                Staging, committing or pushing a file that holds secrets,
                including indirectly through git add -A when the tree shows one.
        v: 1
      properties:
        auto_mode:
          $ref: '#/components/schemas/ArmorAutoMode'
        v:
          enum:
            - 1
          type: number
      required:
        - v
      type: object
    ContextCompressionEngine:
      description: The compression engine to use. Defaults to "middle-out".
      enum:
        - middle-out
      example: middle-out
      type: string
    PDFParserOptions:
      description: Options for PDF parsing.
      example:
        engine: cloudflare-ai
      properties:
        engine:
          $ref: '#/components/schemas/PDFParserEngine'
      type: object
    WebSearchEngine:
      description: The search engine to use for web search.
      enum:
        - native
        - exa
        - firecrawl
        - parallel
        - perplexity
      example: exa
      type: string
    WebSearchMode:
      description: >-
        Engine-native search mode. Exa supports instant, fast, auto (default),
        deep-lite, deep, and deep-reasoning. Parallel supports turbo, fast,
        basic (default), and advanced. Modes unsupported by the selected engine
        are ignored.
      enum:
        - instant
        - fast
        - auto
        - deep-lite
        - deep
        - deep-reasoning
        - turbo
        - basic
        - advanced
      example: auto
      type: string
    WebSearchUserLocation:
      description: User location information for web search
      example:
        city: San Francisco
        country: USA
        region: California
        timezone: America/Los_Angeles
        type: approximate
      properties:
        city:
          type:
            - string
            - 'null'
        country:
          type:
            - string
            - 'null'
        region:
          type:
            - string
            - 'null'
        timezone:
          type:
            - string
            - 'null'
        type:
          enum:
            - approximate
          type: string
      type:
        - object
        - 'null'
    XSearchOptions:
      additionalProperties: false
      description: >-
        Enable SpaceXAI X (Twitter) search alongside native web search, with
        optional filters. Only applies to SpaceXAI endpoints with native search;
        omit to search the web only. X search is billed separately by SpaceXAI,
        per post and per user profile fetched.
      example:
        allowed_x_handles:
          - OpenRouterAI
        from_date: '2025-01-01'
      properties:
        allowed_x_handles:
          description: >-
            Only include posts from these X handles (max 20). Cannot be used
            with excluded_x_handles.
          example:
            - OpenRouterAI
          items:
            type: string
          maxItems: 20
          type: array
        enable_image_understanding:
          description: Analyze images attached to matching posts.
          type: boolean
        enable_video_understanding:
          description: Analyze videos attached to matching posts.
          type: boolean
        excluded_x_handles:
          description: >-
            Exclude posts from these X handles (max 20). Cannot be used with
            allowed_x_handles.
          example:
            - spamaccount
          items:
            type: string
          maxItems: 20
          type: array
        from_date:
          description: Start of the post date range (ISO 8601 date, e.g. "2025-01-01").
          example: '2025-01-01'
          format: date
          type: string
        to_date:
          description: End of the post date range (ISO 8601 date, e.g. "2025-12-31").
          example: '2025-12-31'
          format: date
          type: string
      type: object
    ProviderName:
      enum:
        - Modal
        - AkashML
        - AI21
        - AionLabs
        - Alibaba
        - Ambient
        - Ant Digital
        - Baidu
        - Amazon Bedrock
        - Amazon Nova
        - Anthropic
        - Arcee AI
        - AssemblyAI
        - AtlasCloud
        - Avian
        - Azure
        - BaseTen
        - BytePlus
        - Black Forest Labs
        - Cerebras
        - Chutes
        - Cirrascale
        - Claude Platform on AWS
        - Clarifai
        - Cloudflare
        - Cohere
        - CoreWeave
        - Cosine
        - Crucible
        - Crusoe
        - Darkbloom
        - Databricks
        - Decart
        - Deepgram
        - DeepInfra
        - DeepSeek
        - DekaLLM
        - DigitalOcean
        - ElevenLabs
        - Featherless
        - Fireworks
        - Fish Audio
        - Friendli
        - GMICloud
        - Google
        - Google AI Studio
        - Groq
        - HeyGen
        - Inception
        - Inceptron
        - InferenceNet
        - Ionstream
        - Infermatic
        - Io Net
        - Inferact vLLM
        - Inflection
        - KT
        - Liquid
        - Makora
        - Mara
        - Mancer 2
        - Meta
        - Minimax
        - ModelRun
        - Mistral
        - Modular
        - Moonshot AI
        - Morph
        - VoyageAI by MongoDB
        - TypeSafe
        - Near AI
        - Nebius
        - Nex AGI
        - NextBit
        - Novita
        - Nvidia
        - Ollama
        - OpenAI
        - OpenInference
        - Parallel
        - Parasail
        - ParetoAlpha
        - Particle AI
        - Pearl Research
        - Poolside
        - PrimaLabs
        - PrimeIntellect
        - Perceptron
        - Perplexity
        - Phala
        - Recraft
        - Recursive
        - Reka
        - Relace
        - Respan
        - River
        - Sail Research
        - Sakana AI
        - SambaNova
        - ScaleDown
        - Seed
        - SiliconFlow
        - Sourceful
        - StepFun
        - Stealth
        - StreamLake
        - Switchpoint
        - Tencent
        - Tenstorrent
        - Thinking Machines
        - Together
        - Unbiased
        - Upstage
        - Venice
        - Wafer
        - WandB
        - Quiver
        - Krea
        - Runway
        - Xiaomi
        - xAI
        - Z.AI
        - FakeProvider
      example: OpenAI
      type: string
    ProviderOptions:
      description: >-
        Provider-specific options keyed by provider slug. The provider segment
        is case-insensitive; an endpoint tag after `/` must match the endpoint
        slug exactly. Only options for the matched provider are forwarded; the
        rest are ignored. Unrecognized keys are silently dropped.
      example:
        openai:
          max_tokens: 1000
      properties:
        01ai:
          additionalProperties: {}
          type: object
        ai21:
          additionalProperties: {}
          type: object
        aion-labs:
          additionalProperties: {}
          type: object
        akashml:
          additionalProperties: {}
          type: object
        alibaba:
          additionalProperties: {}
          type: object
        amazon-bedrock:
          additionalProperties: {}
          type: object
        amazon-bedrock/claude-on-aws:
          additionalProperties: {}
          type: object
        amazon-nova:
          additionalProperties: {}
          type: object
        ambient:
          additionalProperties: {}
          type: object
        antdigital:
          additionalProperties: {}
          type: object
        anthropic:
          additionalProperties: {}
          type: object
        anthropic/2:
          additionalProperties: {}
          type: object
        anyscale:
          additionalProperties: {}
          type: object
        arcee-ai:
          additionalProperties: {}
          type: object
        assemblyai:
          additionalProperties: {}
          type: object
        atlas-cloud:
          additionalProperties: {}
          type: object
        atoma:
          additionalProperties: {}
          type: object
        avian:
          additionalProperties: {}
          type: object
        azure:
          additionalProperties: {}
          type: object
        baidu:
          additionalProperties: {}
          type: object
        baseten:
          additionalProperties: {}
          type: object
        black-forest-labs:
          additionalProperties: {}
          type: object
        byteplus:
          additionalProperties: {}
          type: object
        centml:
          additionalProperties: {}
          type: object
        cerebras:
          additionalProperties: {}
          type: object
        chutes:
          additionalProperties: {}
          type: object
        cirrascale:
          additionalProperties: {}
          type: object
        clarifai:
          additionalProperties: {}
          type: object
        claude-on-aws:
          additionalProperties: {}
          type: object
        cloudflare:
          additionalProperties: {}
          type: object
        cohere:
          additionalProperties: {}
          type: object
        coreweave:
          additionalProperties: {}
          type: object
        cosine:
          additionalProperties: {}
          type: object
        crofai:
          additionalProperties: {}
          type: object
        crucible:
          additionalProperties: {}
          type: object
        crusoe:
          additionalProperties: {}
          type: object
        darkbloom:
          additionalProperties: {}
          type: object
        databricks:
          additionalProperties: {}
          type: object
        decart:
          additionalProperties: {}
          type: object
        deepgram:
          additionalProperties: {}
          type: object
        deepinfra:
          additionalProperties: {}
          type: object
        deepseek:
          additionalProperties: {}
          type: object
        dekallm:
          additionalProperties: {}
          type: object
        digitalocean:
          additionalProperties: {}
          type: object
        elevenlabs:
          additionalProperties: {}
          type: object
        enfer:
          additionalProperties: {}
          type: object
        fake-provider:
          additionalProperties: {}
          type: object
        featherless:
          additionalProperties: {}
          type: object
        fireworks:
          additionalProperties: {}
          type: object
        fish-audio:
          additionalProperties: {}
          type: object
        friendli:
          additionalProperties: {}
          type: object
        gmicloud:
          additionalProperties: {}
          type: object
        google-ai-studio:
          additionalProperties: {}
          type: object
        google-vertex:
          additionalProperties: {}
          type: object
        gopomelo:
          additionalProperties: {}
          type: object
        groq:
          additionalProperties: {}
          type: object
        heygen:
          additionalProperties: {}
          type: object
        huggingface:
          additionalProperties: {}
          type: object
        hyperbolic:
          additionalProperties: {}
          type: object
        hyperbolic-quantized:
          additionalProperties: {}
          type: object
        inception:
          additionalProperties: {}
          type: object
        inceptron:
          additionalProperties: {}
          type: object
        inferact-vllm:
          additionalProperties: {}
          type: object
        inference-net:
          additionalProperties: {}
          type: object
        infermatic:
          additionalProperties: {}
          type: object
        inflection:
          additionalProperties: {}
          type: object
        inocloud:
          additionalProperties: {}
          type: object
        io-net:
          additionalProperties: {}
          type: object
        ionstream:
          additionalProperties: {}
          type: object
        klusterai:
          additionalProperties: {}
          type: object
        krea:
          additionalProperties: {}
          type: object
        kt:
          additionalProperties: {}
          type: object
        lambda:
          additionalProperties: {}
          type: object
        lepton:
          additionalProperties: {}
          type: object
        liquid:
          additionalProperties: {}
          type: object
        lynn:
          additionalProperties: {}
          type: object
        lynn-private:
          additionalProperties: {}
          type: object
        makora:
          additionalProperties: {}
          type: object
        mancer:
          additionalProperties: {}
          type: object
        mancer-old:
          additionalProperties: {}
          type: object
        mara:
          additionalProperties: {}
          type: object
        meta:
          additionalProperties: {}
          type: object
        minimax:
          additionalProperties: {}
          type: object
        mistral:
          additionalProperties: {}
          type: object
        modal:
          additionalProperties: {}
          type: object
        modelrun:
          additionalProperties: {}
          type: object
        modular:
          additionalProperties: {}
          type: object
        moonshotai:
          additionalProperties: {}
          type: object
        morph:
          additionalProperties: {}
          type: object
        ncompass:
          additionalProperties: {}
          type: object
        near-ai:
          additionalProperties: {}
          type: object
        nebius:
          additionalProperties: {}
          type: object
        nex-agi:
          additionalProperties: {}
          type: object
        nextbit:
          additionalProperties: {}
          type: object
        nineteen:
          additionalProperties: {}
          type: object
        novita:
          additionalProperties: {}
          type: object
        nvidia:
          additionalProperties: {}
          type: object
        octoai:
          additionalProperties: {}
          type: object
        ollama:
          additionalProperties: {}
          type: object
        open-inference:
          additionalProperties: {}
          type: object
        openai:
          additionalProperties: {}
          type: object
        parallel:
          additionalProperties: {}
          type: object
        parasail:
          additionalProperties: {}
          type: object
        pareto-alpha:
          additionalProperties: {}
          type: object
        particle-ai:
          additionalProperties: {}
          type: object
        pearl-research:
          additionalProperties: {}
          type: object
        perceptron:
          additionalProperties: {}
          type: object
        perplexity:
          additionalProperties: {}
          type: object
        phala:
          additionalProperties: {}
          type: object
        poolside:
          additionalProperties: {}
          type: object
        primalabs:
          additionalProperties: {}
          type: object
        primeintellect:
          additionalProperties: {}
          type: object
        quiver:
          additionalProperties: {}
          type: object
        recraft:
          additionalProperties: {}
          type: object
        recursal:
          additionalProperties: {}
          type: object
        recursive:
          additionalProperties: {}
          type: object
        reflection:
          additionalProperties: {}
          type: object
        reka:
          additionalProperties: {}
          type: object
        relace:
          additionalProperties: {}
          type: object
        replicate:
          additionalProperties: {}
          type: object
        respan:
          additionalProperties: {}
          type: object
        river:
          additionalProperties: {}
          type: object
        runway:
          additionalProperties: {}
          type: object
        sail-research:
          additionalProperties: {}
          type: object
        sakana:
          additionalProperties: {}
          type: object
        sakana-ai:
          additionalProperties: {}
          type: object
        sambanova:
          additionalProperties: {}
          type: object
        sambanova-cloaked:
          additionalProperties: {}
          type: object
        scaledown:
          additionalProperties: {}
          type: object
        seed:
          additionalProperties: {}
          type: object
        sf-compute:
          additionalProperties: {}
          type: object
        siliconflow:
          additionalProperties: {}
          type: object
        sourceful:
          additionalProperties: {}
          type: object
        stealth:
          additionalProperties: {}
          type: object
        stepfun:
          additionalProperties: {}
          type: object
        streamlake:
          additionalProperties: {}
          type: object
        switchpoint:
          additionalProperties: {}
          type: object
        targon:
          additionalProperties: {}
          type: object
        tencent:
          additionalProperties: {}
          type: object
        tenstorrent:
          additionalProperties: {}
          type: object
        thinkingmachines:
          additionalProperties: {}
          type: object
        together:
          additionalProperties: {}
          type: object
        together-lite:
          additionalProperties: {}
          type: object
        typesafe:
          additionalProperties: {}
          type: object
        ubicloud:
          additionalProperties: {}
          type: object
        unbiased:
          additionalProperties: {}
          type: object
        upstage:
          additionalProperties: {}
          type: object
        venice:
          additionalProperties: {}
          type: object
        voyageai:
          additionalProperties: {}
          type: object
        wafer:
          additionalProperties: {}
          type: object
        wandb:
          additionalProperties: {}
          type: object
        wandb-legacy:
          additionalProperties: {}
          type: object
        xai:
          additionalProperties: {}
          type: object
        xiaomi:
          additionalProperties: {}
          type: object
        z-ai:
          additionalProperties: {}
          type: object
      type: object
    PreferredMaxLatency:
      anyOf:
        - format: double
          type: number
        - $ref: '#/components/schemas/PercentileLatencyCutoffs'
        - type: 'null'
      description: >-
        Preferred maximum latency (in seconds). Can be a number (applies to p50)
        or an object with percentile-specific cutoffs. Endpoints above the
        threshold(s) may still be used, but are deprioritized in routing. When
        using fallback models, this may cause a fallback model to be used
        instead of the primary model if it meets the threshold.
      example: 5
    PreferredMinThroughput:
      anyOf:
        - format: double
          type: number
        - $ref: '#/components/schemas/PercentileThroughputCutoffs'
        - type: 'null'
      description: >-
        Preferred minimum throughput (in tokens per second). Can be a number
        (applies to p50) or an object with percentile-specific cutoffs.
        Endpoints below the threshold(s) may still be used, but are
        deprioritized in routing. When using fallback models, this may cause a
        fallback model to be used instead of the primary model if it meets the
        threshold.
      example: 100
    Quantization:
      enum:
        - int4
        - int8
        - fp4
        - mxfp4
        - nvfp4
        - fp6
        - fp8
        - mxfp8
        - fp16
        - bf16
        - fp32
        - unknown
      example: fp16
      type: string
    ProviderSort:
      description: The provider sorting strategy (price, throughput, latency)
      enum:
        - price
        - throughput
        - latency
        - exacto
      example: price
      type: string
    ProviderSortConfig:
      description: The provider sorting strategy (price, throughput, latency)
      example:
        by: price
        partition: model
      properties:
        by:
          description: The provider sorting strategy (price, throughput, latency)
          enum:
            - price
            - throughput
            - latency
            - exacto
            - null
          example: price
          type:
            - string
            - 'null'
        partition:
          description: >-
            Partitioning strategy for sorting: "model" (default) groups
            endpoints by model before sorting (fallback models remain
            fallbacks), "none" sorts all endpoints together regardless of model.
          enum:
            - model
            - none
            - null
          example: model
          type:
            - string
            - 'null'
      type: object
    StopServerToolsWhenCondition:
      description: A single condition that, when met, halts the server-tool agent loop.
      discriminator:
        mapping:
          finish_reason_is: '#/components/schemas/StopServerToolsWhenFinishReasonIs'
          has_tool_call: '#/components/schemas/StopServerToolsWhenHasToolCall'
          max_cost: '#/components/schemas/StopServerToolsWhenMaxCost'
          max_tokens_used: '#/components/schemas/StopServerToolsWhenMaxTokensUsed'
          step_count_is: '#/components/schemas/StopServerToolsWhenStepCountIs'
        propertyName: type
      example:
        step_count: 5
        type: step_count_is
      oneOf:
        - $ref: '#/components/schemas/StopServerToolsWhenStepCountIs'
        - $ref: '#/components/schemas/StopServerToolsWhenHasToolCall'
        - $ref: '#/components/schemas/StopServerToolsWhenMaxTokensUsed'
        - $ref: '#/components/schemas/StopServerToolsWhenMaxCost'
        - $ref: '#/components/schemas/StopServerToolsWhenFinishReasonIs'
    AnthropicCitationCharLocationParam:
      example:
        cited_text: Example cited text
        document_index: 0
        document_title: null
        end_char_index: 18
        start_char_index: 0
        type: char_location
      properties:
        cited_text:
          type: string
        document_index:
          type: integer
        document_title:
          type:
            - string
            - 'null'
        end_char_index:
          type: integer
        start_char_index:
          type: integer
        type:
          enum:
            - char_location
          type: string
      required:
        - type
        - cited_text
        - document_index
        - document_title
        - start_char_index
        - end_char_index
      type: object
    AnthropicCitationContentBlockLocationParam:
      example:
        cited_text: Example cited text
        document_index: 0
        document_title: null
        end_block_index: 1
        start_block_index: 0
        type: content_block_location
      properties:
        cited_text:
          type: string
        document_index:
          type: integer
        document_title:
          type:
            - string
            - 'null'
        end_block_index:
          type: integer
        start_block_index:
          type: integer
        type:
          enum:
            - content_block_location
          type: string
      required:
        - type
        - cited_text
        - document_index
        - document_title
        - start_block_index
        - end_block_index
      type: object
    AnthropicCitationPageLocationParam:
      example:
        cited_text: Example cited text
        document_index: 0
        document_title: null
        end_page_number: 2
        start_page_number: 1
        type: page_location
      properties:
        cited_text:
          type: string
        document_index:
          type: integer
        document_title:
          type:
            - string
            - 'null'
        end_page_number:
          type: integer
        start_page_number:
          type: integer
        type:
          enum:
            - page_location
          type: string
      required:
        - type
        - cited_text
        - document_index
        - document_title
        - start_page_number
        - end_page_number
      type: object
    AnthropicCitationSearchResultLocationParam:
      example:
        cited_text: Example cited text
        end_block_index: 1
        search_result_index: 0
        source: example_source
        start_block_index: 0
        title: Example Result
        type: search_result_location
      properties:
        cited_text:
          type: string
        end_block_index:
          type: integer
        search_result_index:
          type: integer
        source:
          type: string
        start_block_index:
          type: integer
        title:
          type:
            - string
            - 'null'
        type:
          enum:
            - search_result_location
          type: string
      required:
        - type
        - cited_text
        - search_result_index
        - source
        - title
        - start_block_index
        - end_block_index
      type: object
    AnthropicCitationWebSearchResultLocationParam:
      example:
        cited_text: Example cited text
        encrypted_index: enc_idx_0
        title: Example Page
        type: web_search_result_location
        url: https://example.com
      properties:
        cited_text:
          type: string
        encrypted_index:
          type: string
        title:
          type:
            - string
            - 'null'
        type:
          enum:
            - web_search_result_location
          type: string
        url:
          type: string
      required:
        - type
        - cited_text
        - encrypted_index
        - title
        - url
      type: object
    BashServerToolConfig:
      description: Configuration for the openrouter:bash server tool
      example:
        environment:
          type: container_auto
      properties:
        engine:
          $ref: '#/components/schemas/BashServerToolEngine'
        environment:
          $ref: '#/components/schemas/BashServerToolEnvironment'
      type: object
    DatetimeServerToolConfig:
      description: Configuration for the openrouter:datetime server tool
      example:
        timezone: America/New_York
      properties:
        timezone:
          description: IANA timezone name (e.g. "America/New_York"). Defaults to UTC.
          example: America/New_York
          type: string
      type: object
    ImageGenerationServerToolConfig:
      additionalProperties:
        anyOf:
          - type: string
          - format: double
            type: number
          - items: {}
            type: array
      description: >-
        Configuration for the openrouter:image_generation server tool. Accepts
        all image_config params (aspect_ratio, quality, size, background,
        output_format, output_compression, moderation, etc.) plus a model field.
      example:
        aspect_ratio: '16:9'
        model: openai/gpt-image-2.6-flare
        quality: high
      properties:
        model:
          description: >-
            Which image generation model to use (e.g.
            "openai/gpt-image-2.6-flare"). Defaults to
            "openai/gpt-image-2.6-flare".
          example: openai/gpt-image-2.6-flare
          type: string
      type: object
    SearchModelsServerToolConfig:
      description: Configuration for the openrouter:experimental__search_models server tool
      example:
        max_results: 5
      properties:
        max_results:
          description: Maximum number of models to return. Defaults to 5, max 20.
          example: 5
          type: integer
      type: object
    WebFetchServerToolConfig:
      description: Configuration for the openrouter:web_fetch server tool
      example:
        max_content_tokens: 100000
        max_uses: 10
      properties:
        allowed_domains:
          description: Only fetch from these domains.
          items:
            type: string
          type: array
        blocked_domains:
          description: Never fetch from these domains.
          items:
            type: string
          type: array
        engine:
          $ref: '#/components/schemas/WebFetchEngineEnum'
        max_content_tokens:
          description: >-
            Maximum content length in approximate tokens. Content exceeding this
            limit is truncated.
          example: 100000
          type: integer
        max_uses:
          description: >-
            Maximum number of web fetches per request. Once exceeded, the tool
            returns an error.
          example: 10
          type: integer
      type: object
    WebSearchConfig:
      example:
        max_results: 5
        search_context_size: medium
      properties:
        allowed_domains:
          description: >-
            Limit search results to these domains. Supported by Exa, Firecrawl,
            Parallel, Perplexity, and most native providers (Anthropic, OpenAI,
            SpaceXAI). Cannot be used with excluded_domains.
          items:
            type: string
          type: array
        engine:
          $ref: '#/components/schemas/WebSearchEngineEnum'
        excluded_domains:
          description: >-
            Exclude search results from these domains. Supported by Exa,
            Firecrawl, Parallel, Perplexity, Anthropic, OpenAI, and SpaceXAI.
            Cannot be used with allowed_domains.
          items:
            type: string
          type: array
        max_characters:
          description: >-
            Exact maximum number of characters of content per search result.
            Applies to the Exa, Parallel, and Perplexity engines; ignored with
            native provider search and Firecrawl. For Exa, caps highlight
            content per result. For Parallel, caps excerpt content per result
            (default 1,500 when omitted). For Perplexity, maps to the native
            `max_tokens_per_page` parameter (converted from characters to
            tokens) and trims the response to the exact character cap. When both
            `max_characters` and `search_context_size` are set, `max_characters`
            takes precedence. When omitted, falls back to `search_context_size`
            mapping (Exa) or engine defaults (Parallel, Perplexity).
          example: 2000
          type: integer
        max_results:
          description: >-
            Maximum number of search results to return per search call. Defaults
            to 5. Applies to Exa, Firecrawl, Parallel, and Perplexity engines;
            ignored with native provider search. Perplexity supports a maximum
            of 20; values above 20 are clamped.
          example: 5
          type: integer
        max_total_results:
          description: >-
            Maximum total number of search results across all search calls in a
            single request. Once this limit is reached, the tool will stop
            returning new results. Useful for controlling cost and context size
            in agentic loops. Defaults to 50 when not specified.
          example: 50
          type: integer
        max_uses:
          description: >-
            Maximum number of web searches the model may perform in a single
            request. Once reached, further search calls return an error result
            instead of executing. Applies to the Exa, Firecrawl, Parallel, and
            Perplexity engines. With native provider search, forwarded only to
            Anthropic (as `max_uses`); other native search providers have no
            equivalent parameter and ignore it.
          example: 3
          type: integer
        mode:
          $ref: '#/components/schemas/WebSearchMode'
        search_context_size:
          $ref: '#/components/schemas/SearchQualityLevel'
        user_location:
          $ref: '#/components/schemas/WebSearchUserLocationServerTool'
        x_search:
          $ref: '#/components/schemas/XSearchOptions'
      type: object
    ShellServerToolConfig:
      description: Configuration for the openrouter:shell server tool
      example:
        engine: openrouter
        environment:
          type: container_auto
      properties:
        engine:
          $ref: '#/components/schemas/ShellServerToolEngine'
        environment:
          $ref: '#/components/schemas/ShellServerToolEnvironment'
      type: object
    ToolSearchServerToolConfig:
      description: Configuration for the openrouter:tool_search server tool
      example:
        max_results: 5
      properties:
        max_results:
          description: Maximum tools returned by one search. Defaults to 5.
          example: 5
          type: integer
      type: object
    AnthropicContainer:
      example:
        expires_at: '2026-04-08T00:00:00Z'
        id: ctr_01abc
        skills: null
      properties:
        expires_at:
          type: string
        id:
          type: string
        skills:
          default: null
          items:
            $ref: '#/components/schemas/AnthropicContainerSkill'
          type:
            - array
            - 'null'
      required:
        - id
        - expires_at
      type:
        - object
        - 'null'
    ORAnthropicContentBlock:
      discriminator:
        mapping:
          advisor_tool_result: '#/components/schemas/AnthropicAdvisorToolResult'
          bash_code_execution_tool_result: '#/components/schemas/AnthropicBashCodeExecutionToolResult'
          code_execution_tool_result: '#/components/schemas/AnthropicCodeExecutionToolResult'
          compaction: '#/components/schemas/AnthropicCompactionBlock'
          container_upload: '#/components/schemas/AnthropicContainerUpload'
          openrouter_bash_tool_result: '#/components/schemas/ORAnthropicBashToolResult'
          openrouter_shell_tool_result: '#/components/schemas/ORAnthropicShellToolResult'
          openrouter_tool_search_result: '#/components/schemas/ORAnthropicToolSearchResult'
          redacted_thinking: '#/components/schemas/AnthropicRedactedThinkingBlock'
          server_tool_use: '#/components/schemas/ORAnthropicServerToolUseBlock'
          text: '#/components/schemas/AnthropicTextBlock'
          text_editor_code_execution_tool_result: '#/components/schemas/AnthropicTextEditorCodeExecutionToolResult'
          thinking: '#/components/schemas/AnthropicThinkingBlock'
          tool_search_tool_result: '#/components/schemas/AnthropicToolSearchToolResult'
          tool_use: '#/components/schemas/AnthropicToolUseBlock'
          web_fetch_tool_result: '#/components/schemas/AnthropicWebFetchToolResult'
          web_search_tool_result: '#/components/schemas/AnthropicWebSearchToolResult'
        propertyName: type
      example:
        citations: null
        text: Hello, world!
        type: text
      oneOf:
        - $ref: '#/components/schemas/AnthropicTextBlock'
        - $ref: '#/components/schemas/AnthropicToolUseBlock'
        - $ref: '#/components/schemas/AnthropicThinkingBlock'
        - $ref: '#/components/schemas/AnthropicRedactedThinkingBlock'
        - $ref: '#/components/schemas/ORAnthropicServerToolUseBlock'
        - $ref: '#/components/schemas/AnthropicWebSearchToolResult'
        - $ref: '#/components/schemas/AnthropicWebFetchToolResult'
        - $ref: '#/components/schemas/AnthropicCodeExecutionToolResult'
        - $ref: '#/components/schemas/AnthropicBashCodeExecutionToolResult'
        - $ref: '#/components/schemas/AnthropicTextEditorCodeExecutionToolResult'
        - $ref: '#/components/schemas/AnthropicToolSearchToolResult'
        - $ref: '#/components/schemas/AnthropicContainerUpload'
        - $ref: '#/components/schemas/AnthropicCompactionBlock'
        - $ref: '#/components/schemas/AnthropicAdvisorToolResult'
        - $ref: '#/components/schemas/ORAnthropicShellToolResult'
        - $ref: '#/components/schemas/ORAnthropicBashToolResult'
        - $ref: '#/components/schemas/ORAnthropicToolSearchResult'
    AnthropicInputTransformation:
      additionalProperties: {}
      description: A server-side transformation Anthropic applied to the request input
      example:
        path: messages.1.content.0
        reason: prefix_binding_mismatch
        type: thinking_dropped
      properties:
        path:
          type:
            - string
            - 'null'
        reason:
          type:
            - string
            - 'null'
        type:
          type: string
      required:
        - type
      type: object
    AnthropicRefusalStopDetails:
      description: Structured information about a refusal
      example:
        category: cyber
        explanation: The request was refused due to policy.
        type: refusal
      properties:
        category:
          enum:
            - cyber
            - bio
            - frontier_llm
            - reasoning_extraction
            - general_harms
            - null
          type:
            - string
            - 'null'
        explanation:
          type:
            - string
            - 'null'
        type:
          enum:
            - refusal
          type: string
      required:
        - type
        - category
        - explanation
      type:
        - object
        - 'null'
    ORAnthropicStopReason:
      enum:
        - end_turn
        - max_tokens
        - model_context_window_exceeded
        - stop_sequence
        - tool_use
        - pause_turn
        - refusal
        - compaction
        - null
      example: end_turn
      type:
        - string
        - 'null'
    RouterAttempt:
      example:
        model: openai/gpt-4o
        provider: OpenAI
        status: 200
      properties:
        model:
          type: string
        provider:
          type: string
        status:
          type: integer
      required:
        - provider
        - model
        - status
      type: object
    EndpointsMetadata:
      example:
        available:
          - model: openai/gpt-4o
            provider: OpenAI
            selected: true
        total: 3
      properties:
        available:
          items:
            $ref: '#/components/schemas/EndpointInfo'
          type: array
        total:
          type: integer
      required:
        - total
        - available
      type: object
    RouterParams:
      additionalProperties: {}
      example:
        version_group: anthropic/claude-sonnet-4
      properties:
        quality_floor:
          format: double
          type: number
        throughput_floor:
          format: double
          type: number
        version_group:
          type: string
      type: object
    PipelineStage:
      example:
        data:
          action: redacted
          engines:
            - presidio
          flagged: true
          matched_entity_types:
            - EMAIL
            - PHONE
        name: content-filter
        summary: PII redacted via Presidio (EMAIL, PHONE)
        type: guardrail
      properties:
        cost_usd:
          format: double
          type:
            - number
            - 'null'
        data:
          additionalProperties: {}
          type: object
        guardrail_id:
          type: string
        guardrail_scope:
          type: string
        name:
          type: string
        summary:
          type: string
        type:
          $ref: '#/components/schemas/PipelineStageType'
      required:
        - type
        - name
      type: object
    RoutingStrategy:
      enum:
        - direct
        - auto
        - free
        - latest
        - alias
        - fallback
        - pareto
        - bodybuilder
        - fusion
      example: direct
      type: string
    AnthropicCacheCreation:
      example:
        ephemeral_1h_input_tokens: 0
        ephemeral_5m_input_tokens: 100
      properties:
        ephemeral_1h_input_tokens:
          type: integer
        ephemeral_5m_input_tokens:
          type: integer
      required:
        - ephemeral_5m_input_tokens
        - ephemeral_1h_input_tokens
      type:
        - object
        - 'null'
    AnthropicOutputTokensDetails:
      example:
        thinking_tokens: 0
      properties:
        thinking_tokens:
          type: integer
      required:
        - thinking_tokens
      type:
        - object
        - 'null'
    AnthropicServerToolUsage:
      example:
        web_fetch_requests: 0
        web_search_requests: 1
      properties:
        web_fetch_requests:
          type: integer
        web_search_requests:
          type: integer
      required:
        - web_search_requests
        - web_fetch_requests
      type:
        - object
        - 'null'
    AnthropicServiceTier:
      enum:
        - standard
        - priority
        - batch
        - null
      example: standard
      type:
        - string
        - 'null'
    AnthropicCompactionUsageIteration:
      allOf:
        - $ref: '#/components/schemas/AnthropicBaseUsageIteration'
        - properties:
            type:
              enum:
                - compaction
              type: string
          required:
            - type
          type: object
      example:
        cache_creation: null
        cache_creation_input_tokens: 0
        cache_read_input_tokens: 0
        input_tokens: 50
        output_tokens: 25
        type: compaction
    AnthropicMessageUsageIteration:
      allOf:
        - $ref: '#/components/schemas/AnthropicBaseUsageIteration'
        - properties:
            model:
              type: string
            type:
              enum:
                - message
              type: string
          required:
            - type
          type: object
      example:
        cache_creation: null
        cache_creation_input_tokens: 0
        cache_read_input_tokens: 0
        input_tokens: 100
        output_tokens: 50
        type: message
    AnthropicAdvisorMessageUsageIteration:
      allOf:
        - $ref: '#/components/schemas/AnthropicBaseUsageIteration'
        - properties:
            model:
              type: string
            type:
              enum:
                - advisor_message
              type: string
          required:
            - type
            - model
          type: object
      example:
        cache_creation: null
        cache_creation_input_tokens: 0
        cache_read_input_tokens: 0
        input_tokens: 823
        model: claude-opus-4-6
        output_tokens: 1612
        type: advisor_message
    AnthropicUnknownUsageIteration:
      allOf:
        - $ref: '#/components/schemas/AnthropicBaseUsageIteration'
        - properties:
            type:
              type: string
          required:
            - type
          type: object
      example:
        cache_creation: null
        cache_creation_input_tokens: 0
        cache_read_input_tokens: 0
        input_tokens: 100
        output_tokens: 50
        type: unknown
    MessagesContentBlockDeltaEvent:
      description: Event sent when content is added to a content block
      example:
        delta:
          text: Hello
          type: text_delta
        index: 0
        type: content_block_delta
      properties:
        delta:
          oneOf:
            - properties:
                text:
                  type: string
                type:
                  enum:
                    - text_delta
                  type: string
              required:
                - type
                - text
              type: object
            - properties:
                partial_json:
                  type: string
                type:
                  enum:
                    - input_json_delta
                  type: string
              required:
                - type
                - partial_json
              type: object
            - properties:
                thinking:
                  type: string
                type:
                  enum:
                    - thinking_delta
                  type: string
              required:
                - type
                - thinking
              type: object
            - properties:
                signature:
                  type: string
                type:
                  enum:
                    - signature_delta
                  type: string
              required:
                - type
                - signature
              type: object
            - properties:
                citation:
                  discriminator:
                    mapping:
                      char_location: '#/components/schemas/AnthropicCitationCharLocation'
                      content_block_location: >-
                        #/components/schemas/AnthropicCitationContentBlockLocation
                      page_location: '#/components/schemas/AnthropicCitationPageLocation'
                      search_result_location: >-
                        #/components/schemas/AnthropicCitationSearchResultLocation
                      web_search_result_location: >-
                        #/components/schemas/AnthropicCitationWebSearchResultLocation
                    propertyName: type
                  oneOf:
                    - $ref: '#/components/schemas/AnthropicCitationCharLocation'
                    - $ref: '#/components/schemas/AnthropicCitationPageLocation'
                    - $ref: >-
                        #/components/schemas/AnthropicCitationContentBlockLocation
                    - $ref: >-
                        #/components/schemas/AnthropicCitationWebSearchResultLocation
                    - $ref: >-
                        #/components/schemas/AnthropicCitationSearchResultLocation
                type:
                  enum:
                    - citations_delta
                  type: string
              required:
                - type
                - citation
              type: object
            - properties:
                content:
                  type:
                    - string
                    - 'null'
                encrypted_content:
                  type:
                    - string
                    - 'null'
                type:
                  enum:
                    - compaction_delta
                  type: string
              required:
                - type
                - content
              type: object
        index:
          type: integer
        type:
          enum:
            - content_block_delta
          type: string
      required:
        - type
        - index
        - delta
      type: object
    MessagesContentBlockStartEvent:
      description: Event sent when a new content block starts
      example:
        content_block:
          citations: []
          text: ''
          type: text
        index: 0
        type: content_block_start
      properties:
        content_block:
          anyOf:
            - $ref: '#/components/schemas/AnthropicTextBlock'
            - $ref: '#/components/schemas/AnthropicToolUseBlock'
            - $ref: '#/components/schemas/AnthropicThinkingBlock'
            - $ref: '#/components/schemas/AnthropicRedactedThinkingBlock'
            - $ref: '#/components/schemas/ORAnthropicServerToolUseBlock'
            - $ref: '#/components/schemas/AnthropicWebSearchToolResult'
            - $ref: '#/components/schemas/AnthropicWebFetchToolResult'
            - $ref: '#/components/schemas/AnthropicCodeExecutionToolResult'
            - $ref: '#/components/schemas/AnthropicBashCodeExecutionToolResult'
            - $ref: '#/components/schemas/AnthropicTextEditorCodeExecutionToolResult'
            - $ref: '#/components/schemas/AnthropicToolSearchToolResult'
            - $ref: '#/components/schemas/AnthropicContainerUpload'
            - $ref: '#/components/schemas/AnthropicCompactionBlock'
            - $ref: '#/components/schemas/AnthropicAdvisorToolResult'
            - $ref: '#/components/schemas/ORAnthropicShellToolResult'
            - $ref: '#/components/schemas/ORAnthropicBashToolResult'
            - $ref: '#/components/schemas/ORAnthropicToolSearchResult'
            - properties:
                content:
                  type:
                    - string
                    - 'null'
                encrypted_content:
                  type:
                    - string
                    - 'null'
                type:
                  enum:
                    - compaction
                  type: string
              required:
                - type
                - content
              type: object
        index:
          type: integer
        type:
          enum:
            - content_block_start
          type: string
      required:
        - type
        - index
        - content_block
      type: object
    MessagesContentBlockStopEvent:
      description: Event sent when a content block is complete
      example:
        index: 0
        type: content_block_stop
      properties:
        index:
          type: integer
        type:
          enum:
            - content_block_stop
          type: string
      required:
        - type
        - index
      type: object
    MessagesErrorEvent:
      description: Error event in the stream
      example:
        error:
          error_type: provider_overloaded
          message: Overloaded
          type: overloaded_error
        type: error
      properties:
        error:
          properties:
            error_type:
              $ref: '#/components/schemas/ApiErrorType'
            message:
              type: string
            type:
              type: string
          required:
            - type
            - message
          type: object
        openrouter_metadata:
          $ref: '#/components/schemas/OpenRouterMetadata'
        type:
          enum:
            - error
          type: string
      required:
        - type
        - error
      type: object
    MessagesDeltaEvent:
      description: Event sent when the message metadata changes (e.g., stop_reason)
      example:
        delta:
          container: null
          stop_details: null
          stop_reason: end_turn
          stop_sequence: null
        type: message_delta
        usage:
          cache_creation_input_tokens: null
          cache_read_input_tokens: null
          input_tokens: null
          output_tokens: 15
          output_tokens_details: null
          server_tool_use: null
      properties:
        delta:
          properties:
            container:
              $ref: '#/components/schemas/AnthropicContainer'
            safeguard_results:
              items:
                $ref: '#/components/schemas/AnthropicSafeguardResult'
              type:
                - array
                - 'null'
            stop_details:
              $ref: '#/components/schemas/AnthropicRefusalStopDetails'
            stop_reason:
              $ref: '#/components/schemas/ORAnthropicStopReason'
            stop_sequence:
              type:
                - string
                - 'null'
          required:
            - container
            - stop_details
            - stop_reason
            - stop_sequence
          type: object
        type:
          enum:
            - message_delta
          type: string
        usage:
          properties:
            cache_creation:
              $ref: '#/components/schemas/AnthropicCacheCreation'
            cache_creation_input_tokens:
              type:
                - integer
                - 'null'
            cache_read_input_tokens:
              type:
                - integer
                - 'null'
            input_tokens:
              type:
                - integer
                - 'null'
            iterations:
              items:
                $ref: '#/components/schemas/AnthropicUsageIteration'
              type: array
            output_tokens:
              type: integer
            output_tokens_details:
              $ref: '#/components/schemas/AnthropicOutputTokensDetails'
            server_tool_use:
              $ref: '#/components/schemas/ORAnthropicServerToolUsage'
          required:
            - input_tokens
            - output_tokens
            - output_tokens_details
            - cache_creation_input_tokens
            - cache_read_input_tokens
            - server_tool_use
          type: object
      required:
        - type
        - delta
        - usage
      type: object
    MessagesStartEvent:
      description: Event sent at the start of a streaming message
      example:
        message:
          container: null
          content: []
          id: msg_01XFDUDYJgAACzvnptvVoYEL
          model: claude-sonnet-4-5-20250929
          role: assistant
          stop_details: null
          stop_reason: null
          stop_sequence: null
          type: message
          usage:
            cache_creation: null
            cache_creation_input_tokens: null
            cache_read_input_tokens: null
            inference_geo: null
            input_tokens: 12
            output_tokens: 0
            output_tokens_details: null
            server_tool_use: null
            service_tier: standard
        type: message_start
      properties:
        message:
          properties:
            container:
              $ref: '#/components/schemas/AnthropicContainer'
            content:
              items:
                $ref: '#/components/schemas/ORAnthropicContentBlock'
              type: array
            id:
              type: string
            input_transformations:
              items:
                $ref: '#/components/schemas/AnthropicInputTransformation'
              type:
                - array
                - 'null'
            model:
              type: string
            provider:
              enum:
                - AnyScale
                - Atoma
                - Cent-ML
                - CrofAI
                - Enfer
                - GoPomelo
                - HuggingFace
                - Hyperbolic
                - Hyperbolic 2
                - InoCloud
                - Kluster
                - Lambda
                - Lepton
                - Lynn 2
                - Lynn
                - Mancer
                - Modal
                - NCompass
                - Nineteen
                - OctoAI
                - Recursal
                - Reflection
                - Replicate
                - SambaNova 2
                - SF Compute
                - Targon
                - Together 2
                - Ubicloud
                - 01.AI
                - AkashML
                - AI21
                - AionLabs
                - Alibaba
                - Ambient
                - Ant Digital
                - Baidu
                - Amazon Bedrock
                - Amazon Nova
                - Anthropic
                - Arcee AI
                - AssemblyAI
                - AtlasCloud
                - Avian
                - Azure
                - BaseTen
                - BytePlus
                - Black Forest Labs
                - Cerebras
                - Chutes
                - Cirrascale
                - Claude Platform on AWS
                - Clarifai
                - Cloudflare
                - Cohere
                - CoreWeave
                - Cosine
                - Crucible
                - Crusoe
                - Darkbloom
                - Databricks
                - Decart
                - Deepgram
                - DeepInfra
                - DeepSeek
                - DekaLLM
                - DigitalOcean
                - ElevenLabs
                - Featherless
                - Fireworks
                - Fish Audio
                - Friendli
                - GMICloud
                - Google
                - Google AI Studio
                - Groq
                - HeyGen
                - Inception
                - Inceptron
                - InferenceNet
                - Ionstream
                - Infermatic
                - Io Net
                - Inferact vLLM
                - Inflection
                - KT
                - Liquid
                - Makora
                - Mara
                - Mancer 2
                - Meta
                - Minimax
                - ModelRun
                - Mistral
                - Modular
                - Moonshot AI
                - Morph
                - VoyageAI by MongoDB
                - TypeSafe
                - Near AI
                - Nebius
                - Nex AGI
                - NextBit
                - Novita
                - Nvidia
                - Ollama
                - OpenAI
                - OpenInference
                - Parallel
                - Parasail
                - ParetoAlpha
                - Particle AI
                - Pearl Research
                - Poolside
                - PrimaLabs
                - PrimeIntellect
                - Perceptron
                - Perplexity
                - Phala
                - Recraft
                - Recursive
                - Reka
                - Relace
                - Respan
                - River
                - Sail Research
                - Sakana AI
                - SambaNova
                - ScaleDown
                - Seed
                - SiliconFlow
                - Sourceful
                - StepFun
                - Stealth
                - StreamLake
                - Switchpoint
                - Tencent
                - Tenstorrent
                - Thinking Machines
                - Together
                - Unbiased
                - Upstage
                - Venice
                - Wafer
                - WandB
                - Quiver
                - Krea
                - Runway
                - Xiaomi
                - xAI
                - Z.AI
                - FakeProvider
              type: string
              x-speakeasy-unknown-values: allow
            role:
              enum:
                - assistant
              type: string
            stop_details:
              $ref: '#/components/schemas/AnthropicRefusalStopDetails'
            stop_reason: {}
            stop_sequence: {}
            type:
              enum:
                - message
              type: string
            usage:
              allOf:
                - $ref: '#/components/schemas/AnthropicUsage'
                - properties:
                    iterations:
                      items:
                        $ref: '#/components/schemas/AnthropicUsageIteration'
                      type: array
                    speed:
                      $ref: '#/components/schemas/AnthropicSpeed'
                  type: object
              example:
                cache_creation:
                  ephemeral_1h_input_tokens: 0
                  ephemeral_5m_input_tokens: 7381
                cache_creation_input_tokens: 7381
                cache_read_input_tokens: 0
                inference_geo: null
                input_tokens: 100
                output_tokens: 1
                output_tokens_details: null
                server_tool_use: null
                service_tier: standard
          required:
            - id
            - type
            - role
            - container
            - content
            - model
            - stop_reason
            - stop_details
            - stop_sequence
            - usage
          type: object
        type:
          enum:
            - message_start
          type: string
      required:
        - type
        - message
      type: object
    MessagesStopEvent:
      description: Event sent when the message is complete
      example:
        type: message_stop
      properties:
        openrouter_metadata:
          $ref: '#/components/schemas/OpenRouterMetadata'
        type:
          enum:
            - message_stop
          type: string
      required:
        - type
      type: object
    MessagesPingEvent:
      description: Keep-alive ping event
      example:
        type: ping
      properties:
        type:
          enum:
            - ping
          type: string
      required:
        - type
      type: object
    DeferredBm25Search:
      description: Deterministic BM25 retrieval over supplied tool definitions.
      example:
        max_results: 5
        type: bm25
      properties:
        max_results:
          type: integer
        type:
          enum:
            - bm25
          type: string
      required:
        - type
      type: object
    DeferredCustomSearch:
      description: >-
        Caller-executed search returning existing tool identities under
        result_key.
      example:
        max_results: 5
        result_key: tool_names
        tool_id: search_catalog
        type: custom
      properties:
        max_results:
          type: integer
        result_key:
          minLength: 1
          type: string
        tool_id:
          minLength: 1
          type: string
        type:
          enum:
            - custom
          type: string
      required:
        - type
        - tool_id
        - result_key
      type: object
    DeferredRegexSearch:
      description: Versioned safe-regex retrieval over supplied tool definitions.
      example:
        max_results: 5
        type: regex
      properties:
        max_results:
          type: integer
        type:
          enum:
            - regex
          type: string
      required:
        - type
      type: object
    AnthropicBase64ImageSource:
      example:
        data: /9j/4AAQ...
        media_type: image/jpeg
        type: base64
      properties:
        data:
          type: string
        media_type:
          $ref: '#/components/schemas/AnthropicImageMimeType'
        type:
          enum:
            - base64
          type: string
      required:
        - type
        - media_type
        - data
      type: object
    AnthropicFileDocumentSource:
      example:
        file_id: or_file_011CNha8iCJcU1wXNR6q4V8w
        type: file
      properties:
        file_id:
          type: string
        type:
          enum:
            - file
          type: string
      required:
        - type
        - file_id
      type: object
    AnthropicUrlImageSource:
      example:
        type: url
        url: https://example.com/image.jpg
      properties:
        type:
          enum:
            - url
          type: string
        url:
          type: string
      required:
        - type
        - url
      type: object
    AnthropicBase64PdfSource:
      example:
        data: JVBERi0x...
        media_type: application/pdf
        type: base64
      properties:
        data:
          type: string
        media_type:
          enum:
            - application/pdf
          type: string
        type:
          enum:
            - base64
          type: string
      required:
        - type
        - media_type
        - data
      type: object
    AnthropicPlainTextSource:
      example:
        data: Hello, world!
        media_type: text/plain
        type: text
      properties:
        data:
          type: string
        media_type:
          enum:
            - text/plain
          type: string
        type:
          enum:
            - text
          type: string
      required:
        - type
        - media_type
        - data
      type: object
    AnthropicUrlPdfSource:
      example:
        type: url
        url: https://example.com/document.pdf
      properties:
        type:
          enum:
            - url
          type: string
        url:
          type: string
      required:
        - type
        - url
      type: object
    AnthropicToolUnion:
      description: >-
        An Anthropic tool definition: a client-defined tool with a JSON Schema
        `input_schema`, or a server tool (bash, text editor, web search).
      example:
        description: Get the current weather for a city.
        input_schema:
          properties:
            city:
              type: string
          required:
            - city
          type: object
        name: get_weather
      oneOf:
        - properties:
            cache_control:
              $ref: '#/components/schemas/AnthropicCacheControlDirective'
            defer_loading:
              type: boolean
            description:
              type: string
            input_schema:
              additionalProperties: {}
              properties:
                properties: {}
                required:
                  items:
                    type: string
                  type:
                    - array
                    - 'null'
                type:
                  enum:
                    - object
                  type: string
              required:
                - type
              type: object
            name:
              type: string
            strict:
              type: boolean
            type:
              enum:
                - custom
              type: string
          required:
            - name
            - input_schema
          type: object
        - properties:
            cache_control:
              $ref: '#/components/schemas/AnthropicCacheControlDirective'
            name:
              enum:
                - bash
              type: string
            type:
              enum:
                - bash_20250124
              type: string
          required:
            - type
            - name
          type: object
        - properties:
            cache_control:
              $ref: '#/components/schemas/AnthropicCacheControlDirective'
            name:
              enum:
                - str_replace_editor
              type: string
            type:
              enum:
                - text_editor_20250124
              type: string
          required:
            - type
            - name
          type: object
        - properties:
            allowed_domains:
              items:
                type: string
              type:
                - array
                - 'null'
            blocked_domains:
              items:
                type: string
              type:
                - array
                - 'null'
            cache_control:
              $ref: '#/components/schemas/AnthropicCacheControlDirective'
            max_uses:
              type:
                - integer
                - 'null'
            name:
              enum:
                - web_search
              type: string
            type:
              enum:
                - web_search_20250305
              type: string
            user_location:
              $ref: '#/components/schemas/AnthropicWebSearchToolUserLocation'
          required:
            - type
            - name
          type: object
        - properties:
            allowed_callers:
              $ref: '#/components/schemas/AnthropicAllowedCallers'
            allowed_domains:
              items:
                type: string
              type:
                - array
                - 'null'
            blocked_domains:
              items:
                type: string
              type:
                - array
                - 'null'
            cache_control:
              $ref: '#/components/schemas/AnthropicCacheControlDirective'
            max_uses:
              type:
                - integer
                - 'null'
            name:
              enum:
                - web_search
              type: string
            type:
              enum:
                - web_search_20260209
              type: string
            user_location:
              $ref: '#/components/schemas/AnthropicWebSearchToolUserLocation'
          required:
            - type
            - name
          type: object
    AnthropicOutputEffort:
      enum:
        - low
        - medium
        - high
        - xhigh
        - max
        - null
      example: high
      type:
        - string
        - 'null'
    ArmorAutoMode:
      properties:
        allow:
          items:
            anyOf:
              - maxLength: 8122
                minLength: 1
                type: string
              - $ref: '#/components/schemas/ArmorRule'
          type: array
        environment:
          items:
            anyOf:
              - maxLength: 4122
                minLength: 1
                type: string
              - $ref: '#/components/schemas/ArmorEnvironmentEntry'
          type: array
        hard_deny:
          items:
            anyOf:
              - maxLength: 8122
                minLength: 1
                type: string
              - $ref: '#/components/schemas/ArmorRule'
          type: array
        soft_deny:
          items:
            anyOf:
              - maxLength: 8122
                minLength: 1
                type: string
              - $ref: '#/components/schemas/ArmorRule'
          type: array
      type: object
    PDFParserEngine:
      anyOf:
        - enum:
            - mistral-ocr
            - native
            - cloudflare-ai
          type: string
        - enum:
            - pdf-text
          type: string
      description: >-
        The engine to use for parsing PDF files. "pdf-text" is deprecated and
        automatically redirected to "cloudflare-ai".
      example: cloudflare-ai
    PercentileLatencyCutoffs:
      description: >-
        Percentile-based latency cutoffs. All specified cutoffs must be met for
        an endpoint to be preferred.
      example:
        p50: 5
        p90: 10
      properties:
        p50:
          description: Maximum p50 latency (seconds)
          format: double
          type:
            - number
            - 'null'
        p75:
          description: Maximum p75 latency (seconds)
          format: double
          type:
            - number
            - 'null'
        p90:
          description: Maximum p90 latency (seconds)
          format: double
          type:
            - number
            - 'null'
        p99:
          description: Maximum p99 latency (seconds)
          format: double
          type:
            - number
            - 'null'
      type: object
    PercentileThroughputCutoffs:
      description: >-
        Percentile-based throughput cutoffs. All specified cutoffs must be met
        for an endpoint to be preferred.
      example:
        p50: 100
        p90: 50
      properties:
        p50:
          description: Minimum p50 throughput (tokens/sec)
          format: double
          type:
            - number
            - 'null'
        p75:
          description: Minimum p75 throughput (tokens/sec)
          format: double
          type:
            - number
            - 'null'
        p90:
          description: Minimum p90 throughput (tokens/sec)
          format: double
          type:
            - number
            - 'null'
        p99:
          description: Minimum p99 throughput (tokens/sec)
          format: double
          type:
            - number
            - 'null'
      type: object
    StopServerToolsWhenFinishReasonIs:
      description: Stop when the upstream model emits this finish reason (e.g. `length`).
      example:
        reason: length
        type: finish_reason_is
      properties:
        reason:
          minLength: 1
          type: string
        type:
          enum:
            - finish_reason_is
          type: string
      required:
        - type
        - reason
      type: object
    StopServerToolsWhenHasToolCall:
      description: Stop after a tool with this name has been called.
      example:
        tool_name: finalize
        type: has_tool_call
      properties:
        tool_name:
          minLength: 1
          type: string
        type:
          enum:
            - has_tool_call
          type: string
      required:
        - type
        - tool_name
      type: object
    StopServerToolsWhenMaxCost:
      description: Stop once cumulative cost across the loop exceeds this dollar threshold.
      example:
        max_cost_in_dollars: 0.5
        type: max_cost
      properties:
        max_cost_in_dollars:
          format: double
          type: number
        type:
          enum:
            - max_cost
          type: string
      required:
        - type
        - max_cost_in_dollars
      type: object
    StopServerToolsWhenMaxTokensUsed:
      description: Stop once cumulative token usage across the loop exceeds this threshold.
      example:
        max_tokens: 10000
        type: max_tokens_used
      properties:
        max_tokens:
          type: integer
        type:
          enum:
            - max_tokens_used
          type: string
      required:
        - type
        - max_tokens
      type: object
    StopServerToolsWhenStepCountIs:
      description: Stop after the agent loop has executed this many steps.
      example:
        step_count: 5
        type: step_count_is
      properties:
        step_count:
          type: integer
        type:
          enum:
            - step_count_is
          type: string
      required:
        - type
        - step_count
      type: object
    BashServerToolEngine:
      description: >-
        Which bash engine to use. "openrouter" runs commands server-side in the
        OpenRouter sandbox. "auto" (default) and "native" use native
        passthrough, returning the tool call to your application to run
        client-side; OpenRouter does not execute the commands.
      enum:
        - auto
        - native
        - openrouter
      example: auto
      type: string
    BashServerToolEnvironment:
      description: Execution environment for the bash server tool.
      discriminator:
        mapping:
          container_auto: '#/components/schemas/ContainerAutoEnvironment'
          container_reference: '#/components/schemas/ContainerReferenceEnvironment'
        propertyName: type
      example:
        type: container_auto
      oneOf:
        - $ref: '#/components/schemas/ContainerAutoEnvironment'
        - $ref: '#/components/schemas/ContainerReferenceEnvironment'
    WebFetchEngineEnum:
      description: >-
        Which fetch engine to use. "auto" (default) uses native if the provider
        supports it, otherwise Exa. "native" forces the provider's built-in
        fetch. "exa" uses Exa Contents API. "openrouter" uses direct HTTP fetch.
        "firecrawl" uses Firecrawl scrape. "parallel" uses the Parallel extract
        API.
      enum:
        - auto
        - native
        - openrouter
        - exa
        - parallel
        - firecrawl
      example: auto
      type: string
    WebSearchEngineEnum:
      description: >-
        Which search engine to use. "auto" (default) uses native if the provider
        supports it, otherwise Exa. "native" forces the provider's built-in
        search. "exa" forces the Exa search API. "firecrawl" uses the Firecrawl
        search API. "parallel" uses the Parallel search API. "perplexity" uses
        the Perplexity Search API (raw ranked results).
      enum:
        - native
        - exa
        - parallel
        - firecrawl
        - perplexity
        - auto
      example: auto
      type: string
    SearchQualityLevel:
      description: >-
        How much context to retrieve per result. Applies to Exa, Parallel, and
        Perplexity engines; ignored with native provider search and Firecrawl.
        For Exa, pins a fixed per-result character cap (low=5,000,
        medium=15,000, high=30,000); when omitted, Exa picks an adaptive size
        per query and document (typically ~2,000–4,000 characters per result).
        For Parallel, controls the total characters across all results; when
        omitted, Parallel uses its own default size. For Perplexity, maps
        directly to the Search API's native search_context_size parameter.
        Overridden by `max_characters` when both are set.
      enum:
        - low
        - medium
        - high
      example: medium
      type: string
    WebSearchUserLocationServerTool:
      description: Approximate user location for location-biased results.
      example:
        city: San Francisco
        country: US
        region: California
        timezone: America/Los_Angeles
        type: approximate
      properties:
        city:
          type:
            - string
            - 'null'
        country:
          type:
            - string
            - 'null'
        region:
          type:
            - string
            - 'null'
        timezone:
          type:
            - string
            - 'null'
        type:
          enum:
            - approximate
          type: string
      type: object
    ShellServerToolEngine:
      description: >-
        Which shell engine to use. "openrouter" runs commands server-side in the
        OpenRouter sandbox. "auto" (default) keeps the provider's native hosted
        shell when available (OpenAI); on other providers the call is routed to
        the OpenRouter sandbox.
      enum:
        - auto
        - openrouter
      example: openrouter
      type: string
    ShellServerToolEnvironment:
      description: >-
        Server-side execution environment for the shell tool. Only
        container-backed environments are supported; "local" shells are not.
      discriminator:
        mapping:
          container_auto: '#/components/schemas/ContainerAutoEnvironment'
          container_reference: '#/components/schemas/ContainerReferenceEnvironment'
        propertyName: type
      example:
        type: container_auto
      oneOf:
        - $ref: '#/components/schemas/ContainerAutoEnvironment'
        - $ref: '#/components/schemas/ContainerReferenceEnvironment'
    AnthropicContainerSkill:
      example:
        skill_id: pdf
        type: anthropic
        version: latest
      properties:
        skill_id:
          type: string
        type:
          enum:
            - anthropic
            - custom
          type: string
        version:
          type: string
      required:
        - skill_id
        - type
        - version
      type: object
    AnthropicAdvisorToolResult:
      example:
        content:
          text: Advisor response text
          type: advisor_result
        tool_use_id: srvtoolu_01abc
        type: advisor_tool_result
      properties:
        content:
          additionalProperties: {}
          type: object
        tool_use_id:
          type: string
        type:
          enum:
            - advisor_tool_result
          type: string
      required:
        - type
        - tool_use_id
        - content
      type: object
    AnthropicBashCodeExecutionToolResult:
      example:
        content:
          content: []
          return_code: 0
          stderr: ''
          stdout: Hello
          type: bash_code_execution_result
        tool_use_id: srvtoolu_01abc
        type: bash_code_execution_tool_result
      properties:
        content:
          $ref: '#/components/schemas/AnthropicBashCodeExecutionContent'
        tool_use_id:
          type: string
        type:
          enum:
            - bash_code_execution_tool_result
          type: string
      required:
        - type
        - content
        - tool_use_id
      type: object
    AnthropicCodeExecutionToolResult:
      example:
        content:
          content: []
          return_code: 0
          stderr: ''
          stdout: Hello
          type: code_execution_result
        tool_use_id: srvtoolu_01abc
        type: code_execution_tool_result
      properties:
        content:
          $ref: '#/components/schemas/AnthropicCodeExecutionContent'
        tool_use_id:
          type: string
        type:
          enum:
            - code_execution_tool_result
          type: string
      required:
        - type
        - content
        - tool_use_id
      type: object
    AnthropicCompactionBlock:
      example:
        content: Compacted summary of conversation.
        type: compaction
      properties:
        content:
          type:
            - string
            - 'null'
        encrypted_content:
          type:
            - string
            - 'null'
        type:
          enum:
            - compaction
          type: string
      required:
        - type
        - content
      type: object
    AnthropicContainerUpload:
      example:
        file_id: file_01abc
        type: container_upload
      properties:
        file_id:
          type: string
        type:
          enum:
            - container_upload
          type: string
      required:
        - type
        - file_id
      type: object
    ORAnthropicBashToolResult:
      description: >-
        Output of an `openrouter:bash` call executed in the OpenRouter sandbox
        (`engine: 'openrouter'`)
      example:
        content:
          command: ls
          exitCode: 0
          stderr: ''
          stdout: |
            README.md
        tool_use_id: srvtoolu_01abc
        type: openrouter_bash_tool_result
      properties:
        container_id:
          description: >-
            The canonical container id the command ran under — the
            `{container_id}` for the Container Files API, reusable as a
            `container_reference` in later requests. Present on every
            sandbox-executed call, even when no files changed.
          type: string
        content:
          additionalProperties: {}
          type: object
        files:
          description: >-
            Citations for the files the sandbox command created or modified,
            most-recently-touched first (at most 10). Retrieve them via the
            Container Files API.
          items:
            properties:
              container_id:
                type: string
              end_index:
                type: integer
              file_id:
                type: string
              filename:
                type: string
              start_index:
                type: integer
              type:
                enum:
                  - container_file_citation
                type: string
            required:
              - type
              - container_id
              - file_id
              - filename
              - start_index
              - end_index
            type: object
          type: array
        tool_use_id:
          type: string
        type:
          enum:
            - openrouter_bash_tool_result
          type: string
      required:
        - type
        - tool_use_id
        - content
      type: object
    ORAnthropicShellToolResult:
      description: Output of an `openrouter:shell` call executed in the OpenRouter sandbox
      example:
        content:
          output:
            - outcome:
                exit_code: 0
                type: exit
              stderr: ''
              stdout: |
                README.md
        tool_use_id: srvtoolu_01abc
        type: openrouter_shell_tool_result
      properties:
        container_id:
          description: >-
            The canonical container id the command ran under — the
            `{container_id}` for the Container Files API, reusable as a
            `container_reference` in later requests. Present on every
            sandbox-executed call, even when no files changed.
          type: string
        content:
          additionalProperties: {}
          type: object
        files:
          description: >-
            Citations for the files the sandbox command created or modified,
            most-recently-touched first (at most 10). Retrieve them via the
            Container Files API.
          items:
            properties:
              container_id:
                type: string
              end_index:
                type: integer
              file_id:
                type: string
              filename:
                type: string
              start_index:
                type: integer
              type:
                enum:
                  - container_file_citation
                type: string
            required:
              - type
              - container_id
              - file_id
              - filename
              - start_index
              - end_index
            type: object
          type: array
        tool_use_id:
          type: string
        type:
          enum:
            - openrouter_shell_tool_result
          type: string
      required:
        - type
        - tool_use_id
        - content
      type: object
    ORAnthropicToolSearchResult:
      description: >-
        Router-owned deferred discovery result containing original selected tool
        definitions.
      example:
        content:
          matches: []
        tool_use_id: search
        type: openrouter_tool_search_result
      properties:
        content:
          additionalProperties: {}
          type: object
        tool_use_id:
          type: string
        type:
          enum:
            - openrouter_tool_search_result
          type: string
      required:
        - type
        - tool_use_id
        - content
      type: object
    AnthropicRedactedThinkingBlock:
      example:
        data: cmVkYWN0ZWQ=
        type: redacted_thinking
      properties:
        data:
          type: string
        type:
          enum:
            - redacted_thinking
          type: string
      required:
        - type
        - data
      type: object
    ORAnthropicServerToolUseBlock:
      example:
        caller:
          type: direct
        id: srvtoolu_01abc
        input: {}
        name: advisor
        type: server_tool_use
      properties:
        caller:
          $ref: '#/components/schemas/ORAnthropicNullableCaller'
        id:
          type: string
        input: {}
        name:
          type: string
        type:
          enum:
            - server_tool_use
          type: string
      required:
        - type
        - id
        - name
      type: object
    AnthropicTextBlock:
      example:
        citations: null
        text: Hello, world!
        type: text
      properties:
        citations:
          items:
            $ref: '#/components/schemas/AnthropicTextCitation'
          type:
            - array
            - 'null'
        text:
          type: string
        type:
          enum:
            - text
          type: string
      required:
        - type
        - text
        - citations
      type: object
    AnthropicTextEditorCodeExecutionToolResult:
      example:
        content:
          content: file content
          file_type: text
          num_lines: 10
          start_line: 1
          total_lines: 10
          type: text_editor_code_execution_view_result
        tool_use_id: srvtoolu_01abc
        type: text_editor_code_execution_tool_result
      properties:
        content:
          $ref: '#/components/schemas/AnthropicTextEditorCodeExecutionContent'
        tool_use_id:
          type: string
        type:
          enum:
            - text_editor_code_execution_tool_result
          type: string
      required:
        - type
        - content
        - tool_use_id
      type: object
    AnthropicThinkingBlock:
      example:
        signature: sig_abc123
        thinking: Let me think about this...
        type: thinking
      properties:
        signature:
          type: string
        thinking:
          type: string
        type:
          enum:
            - thinking
          type: string
      required:
        - type
        - thinking
        - signature
      type: object
    AnthropicToolSearchToolResult:
      example:
        content:
          tool_references:
            - tool_name: my_tool
              type: tool_reference
          type: tool_search_tool_search_result
        tool_use_id: srvtoolu_01abc
        type: tool_search_tool_result
      properties:
        content:
          $ref: '#/components/schemas/AnthropicToolSearchContent'
        tool_use_id:
          type: string
        type:
          enum:
            - tool_search_tool_result
          type: string
      required:
        - type
        - content
        - tool_use_id
      type: object
    AnthropicToolUseBlock:
      example:
        caller:
          type: direct
        id: toolu_01abc
        input:
          location: San Francisco
        name: get_weather
        type: tool_use
      properties:
        caller:
          $ref: '#/components/schemas/AnthropicCaller'
        id:
          type: string
        input: {}
        name:
          type: string
        type:
          enum:
            - tool_use
          type: string
      required:
        - type
        - id
        - caller
        - name
      type: object
    AnthropicWebFetchToolResult:
      example:
        caller:
          type: direct
        content:
          content:
            citations: null
            source:
              data: ''
              media_type: text/plain
              type: text
            title: null
            type: document
          retrieved_at: null
          type: web_fetch_result
          url: https://example.com
        tool_use_id: srvtoolu_01abc
        type: web_fetch_tool_result
      properties:
        caller:
          $ref: '#/components/schemas/AnthropicCaller'
        content:
          $ref: '#/components/schemas/AnthropicWebFetchContent'
        tool_use_id:
          type: string
        type:
          enum:
            - web_fetch_tool_result
          type: string
      required:
        - type
        - caller
        - content
        - tool_use_id
      type: object
    AnthropicWebSearchToolResult:
      example:
        caller:
          type: direct
        content: []
        tool_use_id: srvtoolu_01abc
        type: web_search_tool_result
      properties:
        caller:
          $ref: '#/components/schemas/AnthropicCaller'
        content:
          anyOf:
            - items:
                $ref: '#/components/schemas/AnthropicWebSearchResult'
              type: array
            - $ref: '#/components/schemas/AnthropicWebSearchToolResultError'
        tool_use_id:
          type: string
        type:
          enum:
            - web_search_tool_result
          type: string
      required:
        - type
        - caller
        - tool_use_id
        - content
      type: object
    EndpointInfo:
      example:
        model: openai/gpt-4o
        provider: OpenAI
        selected: true
      properties:
        model:
          type: string
        provider:
          type: string
        selected:
          type: boolean
      required:
        - provider
        - model
        - selected
      type: object
    PipelineStageType:
      description: >-
        Categorical kind of a pipeline stage. Multiple plugins can share a type
        (e.g. all guardrail-level plugins emit `guardrail`); the `name` field
        disambiguates which plugin emitted it.
      enum:
        - guardrail
        - plugin
        - server_tools
        - response_healing
        - context_compression
      example: guardrail
      type: string
    AnthropicBaseUsageIteration:
      example:
        cache_creation: null
        cache_creation_input_tokens: 0
        cache_read_input_tokens: 0
        input_tokens: 100
        output_tokens: 50
      properties:
        cache_creation:
          $ref: '#/components/schemas/AnthropicIterationCacheCreation'
        cache_creation_input_tokens:
          type: integer
        cache_read_input_tokens:
          type: integer
        input_tokens:
          type: integer
        output_tokens:
          type: integer
      type: object
    AnthropicCitationCharLocation:
      example:
        cited_text: Example cited text
        document_index: 0
        document_title: null
        end_char_index: 18
        file_id: null
        start_char_index: 0
        type: char_location
      properties:
        cited_text:
          type: string
        document_index:
          type: integer
        document_title:
          type:
            - string
            - 'null'
        end_char_index:
          type: integer
        file_id:
          type:
            - string
            - 'null'
        start_char_index:
          type: integer
        type:
          enum:
            - char_location
          type: string
      required:
        - type
        - cited_text
        - document_index
        - document_title
        - start_char_index
        - end_char_index
        - file_id
      type: object
    AnthropicCitationContentBlockLocation:
      example:
        cited_text: Example cited text
        document_index: 0
        document_title: null
        end_block_index: 1
        file_id: null
        start_block_index: 0
        type: content_block_location
      properties:
        cited_text:
          type: string
        document_index:
          type: integer
        document_title:
          type:
            - string
            - 'null'
        end_block_index:
          type: integer
        file_id:
          type:
            - string
            - 'null'
        start_block_index:
          type: integer
        type:
          enum:
            - content_block_location
          type: string
      required:
        - type
        - cited_text
        - document_index
        - document_title
        - start_block_index
        - end_block_index
        - file_id
      type: object
    AnthropicCitationPageLocation:
      example:
        cited_text: Example cited text
        document_index: 0
        document_title: null
        end_page_number: 2
        file_id: null
        start_page_number: 1
        type: page_location
      properties:
        cited_text:
          type: string
        document_index:
          type: integer
        document_title:
          type:
            - string
            - 'null'
        end_page_number:
          type: integer
        file_id:
          type:
            - string
            - 'null'
        start_page_number:
          type: integer
        type:
          enum:
            - page_location
          type: string
      required:
        - type
        - cited_text
        - document_index
        - document_title
        - start_page_number
        - end_page_number
        - file_id
      type: object
    AnthropicCitationSearchResultLocation:
      example:
        cited_text: Example cited text
        end_block_index: 1
        search_result_index: 0
        source: example_source
        start_block_index: 0
        title: Example Result
        type: search_result_location
      properties:
        cited_text:
          type: string
        end_block_index:
          type: integer
        search_result_index:
          type: integer
        source:
          type: string
        start_block_index:
          type: integer
        title:
          type:
            - string
            - 'null'
        type:
          enum:
            - search_result_location
          type: string
      required:
        - type
        - cited_text
        - search_result_index
        - source
        - title
        - start_block_index
        - end_block_index
      type: object
    AnthropicCitationWebSearchResultLocation:
      example:
        cited_text: Example cited text
        encrypted_index: enc_idx_0
        title: Example Page
        type: web_search_result_location
        url: https://example.com
      properties:
        cited_text:
          type: string
        encrypted_index:
          type: string
        title:
          type:
            - string
            - 'null'
        type:
          enum:
            - web_search_result_location
          type: string
        url:
          type: string
      required:
        - type
        - cited_text
        - encrypted_index
        - title
        - url
      type: object
    AnthropicImageMimeType:
      enum:
        - image/jpeg
        - image/png
        - image/gif
        - image/webp
      example: image/jpeg
      type: string
    ArmorRule:
      properties:
        id:
          description: >-
            Stable id, unique within its source; reported as the deciding rule
            when it fires.
          maxLength: 64
          minLength: 1
          pattern: ^[a-z0-9][a-z0-9_-]*$
          type: string
        instructions:
          description: What the rule matches, written for the classifier.
          maxLength: 8000
          minLength: 1
          type: string
        name:
          description: Display name shown in verdict explanations; defaults to the id.
          maxLength: 120
          minLength: 1
          type: string
        threshold:
          description: >-
            Probability at or above which the rule counts as matched. Defaults
            to 0.6 for hard-deny and soft-deny rules and 0.7 for allow rules (an
            exception needs stronger evidence to clear a matched soft deny).
          format: double
          type: number
      required:
        - id
        - instructions
      type: object
    ArmorEnvironmentEntry:
      properties:
        name:
          maxLength: 120
          minLength: 1
          type: string
        value:
          maxLength: 4000
          type: string
      required:
        - name
        - value
      type: object
    ContainerAutoEnvironment:
      description: An OpenRouter-managed, auto-provisioned ephemeral container.
      example:
        type: container_auto
      properties:
        file_ids:
          $ref: '#/components/schemas/ContainerFileIds'
        network_policy:
          $ref: '#/components/schemas/ContainerNetworkPolicy'
        type:
          enum:
            - container_auto
          type: string
      required:
        - type
      type: object
    ContainerReferenceEnvironment:
      description: >-
        Reference to a container by its canonical id — a previously returned
        container_id or a fresh name to create a persistent container.
      example:
        container_id: sess_abc123
        type: container_reference
      properties:
        container_id:
          description: >-
            Canonical container id to reuse (max 40 characters,
            letters/digits/underscores/hyphens). Any container_id previously
            returned by a bash or shell tool result works here and reattaches to
            the same container and files — including session-derived ids
            (sess_...) and generation-derived ids (gen_...). Note that a
            session-derived id is always sess_ + the sanitized session key,
            which is not necessarily the raw session id you sent. Using the same
            container_id from both the bash and shell tools shares the same
            files, with last-write-wins when both flush concurrently. A fresh
            name creates a new persistent container. Containers are always
            scoped to your account and workspace.
          example: sess_abc123
          maxLength: 40
          minLength: 1
          pattern: ^[\w-]+$
          type: string
        file_ids:
          $ref: '#/components/schemas/ContainerFileIds'
        network_policy:
          $ref: '#/components/schemas/ContainerNetworkPolicy'
        type:
          enum:
            - container_reference
          type: string
      required:
        - type
        - container_id
      type: object
    AnthropicBashCodeExecutionContent:
      discriminator:
        mapping:
          bash_code_execution_result: '#/components/schemas/AnthropicBashCodeExecutionResult'
          bash_code_execution_tool_result_error: '#/components/schemas/AnthropicBashCodeExecutionToolResultError'
        propertyName: type
      example:
        content: []
        return_code: 0
        stderr: ''
        stdout: Hello
        type: bash_code_execution_result
      oneOf:
        - $ref: '#/components/schemas/AnthropicBashCodeExecutionToolResultError'
        - $ref: '#/components/schemas/AnthropicBashCodeExecutionResult'
    AnthropicCodeExecutionContent:
      discriminator:
        mapping:
          code_execution_result: '#/components/schemas/AnthropicCodeExecutionResult'
          code_execution_tool_result_error: '#/components/schemas/AnthropicCodeExecutionToolResultError'
          encrypted_code_execution_result: '#/components/schemas/AnthropicEncryptedCodeExecutionResult'
        propertyName: type
      example:
        content: []
        return_code: 0
        stderr: ''
        stdout: Hello
        type: code_execution_result
      oneOf:
        - $ref: '#/components/schemas/AnthropicCodeExecutionToolResultError'
        - $ref: '#/components/schemas/AnthropicCodeExecutionResult'
        - $ref: '#/components/schemas/AnthropicEncryptedCodeExecutionResult'
    ORAnthropicNullableCaller:
      discriminator:
        mapping:
          code_execution_20250825: '#/components/schemas/AnthropicCodeExecution20250825Caller'
          code_execution_20260120: '#/components/schemas/AnthropicCodeExecution20260120Caller'
          direct: '#/components/schemas/AnthropicDirectCaller'
        propertyName: type
      example:
        type: direct
      oneOf:
        - $ref: '#/components/schemas/AnthropicDirectCaller'
        - $ref: '#/components/schemas/AnthropicCodeExecution20250825Caller'
        - $ref: '#/components/schemas/AnthropicCodeExecution20260120Caller'
        - type: 'null'
    AnthropicTextCitation:
      discriminator:
        mapping:
          char_location: '#/components/schemas/AnthropicCitationCharLocation'
          content_block_location: '#/components/schemas/AnthropicCitationContentBlockLocation'
          page_location: '#/components/schemas/AnthropicCitationPageLocation'
          search_result_location: '#/components/schemas/AnthropicCitationSearchResultLocation'
          web_search_result_location: '#/components/schemas/AnthropicCitationWebSearchResultLocation'
        propertyName: type
      example:
        cited_text: Example text
        document_index: 0
        document_title: null
        end_char_index: 10
        file_id: null
        start_char_index: 0
        type: char_location
      oneOf:
        - $ref: '#/components/schemas/AnthropicCitationCharLocation'
        - $ref: '#/components/schemas/AnthropicCitationPageLocation'
        - $ref: '#/components/schemas/AnthropicCitationContentBlockLocation'
        - $ref: '#/components/schemas/AnthropicCitationWebSearchResultLocation'
        - $ref: '#/components/schemas/AnthropicCitationSearchResultLocation'
    AnthropicTextEditorCodeExecutionContent:
      discriminator:
        mapping:
          text_editor_code_execution_create_result: '#/components/schemas/AnthropicTextEditorCodeExecutionCreateResult'
          text_editor_code_execution_str_replace_result: >-
            #/components/schemas/AnthropicTextEditorCodeExecutionStrReplaceResult
          text_editor_code_execution_tool_result_error: '#/components/schemas/AnthropicTextEditorCodeExecutionToolResultError'
          text_editor_code_execution_view_result: '#/components/schemas/AnthropicTextEditorCodeExecutionViewResult'
        propertyName: type
      example:
        content: file content
        file_type: text
        num_lines: 10
        start_line: 1
        total_lines: 10
        type: text_editor_code_execution_view_result
      oneOf:
        - $ref: '#/components/schemas/AnthropicTextEditorCodeExecutionToolResultError'
        - $ref: '#/components/schemas/AnthropicTextEditorCodeExecutionViewResult'
        - $ref: '#/components/schemas/AnthropicTextEditorCodeExecutionCreateResult'
        - $ref: >-
            #/components/schemas/AnthropicTextEditorCodeExecutionStrReplaceResult
    AnthropicToolSearchContent:
      discriminator:
        mapping:
          tool_search_tool_result_error: '#/components/schemas/AnthropicToolSearchResultError'
          tool_search_tool_search_result: '#/components/schemas/AnthropicToolSearchResult'
        propertyName: type
      example:
        tool_references:
          - tool_name: my_tool
            type: tool_reference
        type: tool_search_tool_search_result
      oneOf:
        - $ref: '#/components/schemas/AnthropicToolSearchResultError'
        - $ref: '#/components/schemas/AnthropicToolSearchResult'
    AnthropicCaller:
      discriminator:
        mapping:
          code_execution_20250825: '#/components/schemas/AnthropicCodeExecution20250825Caller'
          code_execution_20260120: '#/components/schemas/AnthropicCodeExecution20260120Caller'
          direct: '#/components/schemas/AnthropicDirectCaller'
        propertyName: type
      example:
        type: direct
      oneOf:
        - $ref: '#/components/schemas/AnthropicDirectCaller'
        - $ref: '#/components/schemas/AnthropicCodeExecution20250825Caller'
        - $ref: '#/components/schemas/AnthropicCodeExecution20260120Caller'
    AnthropicWebFetchContent:
      discriminator:
        mapping:
          web_fetch_result: '#/components/schemas/AnthropicWebFetchBlock'
          web_fetch_tool_result_error: '#/components/schemas/AnthropicWebFetchToolResultError'
        propertyName: type
      example:
        content:
          citations: null
          source:
            data: ''
            media_type: text/plain
            type: text
          title: null
          type: document
        retrieved_at: null
        type: web_fetch_result
        url: https://example.com
      oneOf:
        - $ref: '#/components/schemas/AnthropicWebFetchToolResultError'
        - $ref: '#/components/schemas/AnthropicWebFetchBlock'
    AnthropicWebSearchResult:
      example:
        encrypted_content: enc_content_0
        page_age: null
        title: Example Page
        type: web_search_result
        url: https://example.com
      properties:
        encrypted_content:
          type: string
        page_age:
          type:
            - string
            - 'null'
        title:
          type: string
        type:
          enum:
            - web_search_result
          type: string
        url:
          type: string
      required:
        - type
        - encrypted_content
        - page_age
        - title
        - url
      type: object
    AnthropicWebSearchToolResultError:
      example:
        error_code: unavailable
        type: web_search_tool_result_error
      properties:
        error_code:
          enum:
            - invalid_tool_input
            - unavailable
            - max_uses_exceeded
            - too_many_requests
            - query_too_long
            - request_too_large
          type: string
        type:
          enum:
            - web_search_tool_result_error
          type: string
      required:
        - type
        - error_code
      type: object
    AnthropicIterationCacheCreation:
      default: null
      example:
        ephemeral_1h_input_tokens: 0
        ephemeral_5m_input_tokens: 0
      properties:
        ephemeral_1h_input_tokens:
          type: integer
        ephemeral_5m_input_tokens:
          type: integer
      type:
        - object
        - 'null'
    ContainerFileIds:
      description: >-
        Workspace file ids (or_file_…) to attach into the container before the
        first command runs. Each file is copied to the container home as a
        writable copy named {last 8 characters of the file id}-{base filename}
        (a file stored as data/report.csv with id or_file_…NR6q4V8w attaches to
        ~/NR6q4V8w-report.csv), so same-named files never collide; the source
        document is never modified. Unknown, foreign, or malformed ids fail the
        request with a 400 before any command executes. Max 20 ids.
      example:
        - or_file_011CNha8iCJcU1wXNR6q4V8w
      items:
        minLength: 1
        type: string
      maxItems: 20
      type: array
    ContainerNetworkPolicy:
      anyOf:
        - properties:
            type:
              description: No outbound internet access.
              enum:
                - disabled
              type: string
          required:
            - type
          type: object
        - properties:
            allowed_domains:
              description: >-
                Hostnames the container may reach over ports 80/443 (max 50).
                Entries are lowercase hostnames or glob patterns where * matches
                any run of characters (e.g. *.example.com). An exact hostname
                does not cover its subdomains — use a glob or list each
                hostname. pip needs both pypi.org and files.pythonhosted.org (or
                *.pythonhosted.org).
              example:
                - pypi.org
                - files.pythonhosted.org
              items:
                maxLength: 253
                minLength: 1
                pattern: >-
                  ^(?![-.])(?!.*[-.]$)(?!.*(?:\.\.|\.-|-\.))(?!.*[^.]{64})[a-z0-9*.-]+$
                type: string
              maxItems: 50
              minItems: 1
              type: array
            type:
              description: Outbound access restricted to the listed domains.
              enum:
                - allowlist
              type: string
          required:
            - type
            - allowed_domains
          type: object
      description: >-
        Network egress policy for the container. "disabled" blocks all outbound
        internet; "allowlist" permits only hosts matching the listed hostnames
        or * glob patterns (ports 80/443, DNS via Cloudflare resolvers). The
        policy is fixed when a container starts: sending a different policy to a
        warm container fails the request with a 409. Omitted: defaults to
        "disabled" (no outbound internet). For unrestricted egress, use an
        allowlist of ["*"].
      example:
        allowed_domains:
          - pypi.org
          - files.pythonhosted.org
        type: allowlist
    AnthropicBashCodeExecutionResult:
      example:
        content: []
        return_code: 0
        stderr: ''
        stdout: Hello
        type: bash_code_execution_result
      properties:
        content:
          items:
            $ref: '#/components/schemas/AnthropicBashCodeExecutionOutput'
          type: array
        return_code:
          type: integer
        stderr:
          type: string
        stdout:
          type: string
        type:
          enum:
            - bash_code_execution_result
          type: string
      required:
        - content
        - return_code
        - stderr
        - stdout
        - type
      type: object
    AnthropicBashCodeExecutionToolResultError:
      example:
        error_code: unavailable
        type: bash_code_execution_tool_result_error
      properties:
        error_code:
          enum:
            - invalid_tool_input
            - unavailable
            - too_many_requests
            - execution_time_exceeded
            - output_file_too_large
          type: string
        type:
          enum:
            - bash_code_execution_tool_result_error
          type: string
      required:
        - error_code
        - type
      type: object
    AnthropicCodeExecutionResult:
      example:
        content: []
        return_code: 0
        stderr: ''
        stdout: Hello
        type: code_execution_result
      properties:
        content:
          items:
            $ref: '#/components/schemas/AnthropicCodeExecutionOutput'
          type: array
        return_code:
          type: integer
        stderr:
          type: string
        stdout:
          type: string
        type:
          enum:
            - code_execution_result
          type: string
      required:
        - content
        - return_code
        - stderr
        - stdout
        - type
      type: object
    AnthropicCodeExecutionToolResultError:
      example:
        error_code: unavailable
        type: code_execution_tool_result_error
      properties:
        error_code:
          $ref: '#/components/schemas/AnthropicServerToolErrorCode'
        type:
          enum:
            - code_execution_tool_result_error
          type: string
      required:
        - error_code
        - type
      type: object
    AnthropicEncryptedCodeExecutionResult:
      example:
        content: []
        encrypted_stdout: enc_stdout
        return_code: 0
        stderr: ''
        type: encrypted_code_execution_result
      properties:
        content:
          items:
            $ref: '#/components/schemas/AnthropicCodeExecutionOutput'
          type: array
        encrypted_stdout:
          type: string
        return_code:
          type: integer
        stderr:
          type: string
        type:
          enum:
            - encrypted_code_execution_result
          type: string
      required:
        - content
        - encrypted_stdout
        - return_code
        - stderr
        - type
      type: object
    AnthropicCodeExecution20250825Caller:
      example:
        tool_id: toolu_01abc
        type: code_execution_20250825
      properties:
        tool_id:
          type: string
        type:
          enum:
            - code_execution_20250825
          type: string
      required:
        - type
        - tool_id
      type: object
    AnthropicCodeExecution20260120Caller:
      example:
        tool_id: toolu_01abc
        type: code_execution_20260120
      properties:
        tool_id:
          type: string
        type:
          enum:
            - code_execution_20260120
          type: string
      required:
        - type
        - tool_id
      type: object
    AnthropicDirectCaller:
      example:
        type: direct
      properties:
        type:
          enum:
            - direct
          type: string
      required:
        - type
      type: object
    AnthropicTextEditorCodeExecutionCreateResult:
      example:
        is_file_update: false
        type: text_editor_code_execution_create_result
      properties:
        is_file_update:
          type: boolean
        type:
          enum:
            - text_editor_code_execution_create_result
          type: string
      required:
        - is_file_update
        - type
      type: object
    AnthropicTextEditorCodeExecutionStrReplaceResult:
      example:
        lines: null
        new_lines: null
        new_start: null
        old_lines: null
        old_start: null
        type: text_editor_code_execution_str_replace_result
      properties:
        lines:
          items:
            type: string
          type:
            - array
            - 'null'
        new_lines:
          type:
            - integer
            - 'null'
        new_start:
          type:
            - integer
            - 'null'
        old_lines:
          type:
            - integer
            - 'null'
        old_start:
          type:
            - integer
            - 'null'
        type:
          enum:
            - text_editor_code_execution_str_replace_result
          type: string
      required:
        - lines
        - new_lines
        - new_start
        - old_lines
        - old_start
        - type
      type: object
    AnthropicTextEditorCodeExecutionToolResultError:
      example:
        error_code: unavailable
        error_message: null
        type: text_editor_code_execution_tool_result_error
      properties:
        error_code:
          enum:
            - invalid_tool_input
            - unavailable
            - too_many_requests
            - execution_time_exceeded
            - file_not_found
          type: string
        error_message:
          type:
            - string
            - 'null'
        type:
          enum:
            - text_editor_code_execution_tool_result_error
          type: string
      required:
        - error_code
        - error_message
        - type
      type: object
    AnthropicTextEditorCodeExecutionViewResult:
      example:
        content: file content
        file_type: text
        num_lines: 10
        start_line: 1
        total_lines: 10
        type: text_editor_code_execution_view_result
      properties:
        content:
          type: string
        file_type:
          enum:
            - text
            - image
            - pdf
          type: string
        num_lines:
          type:
            - integer
            - 'null'
        start_line:
          type:
            - integer
            - 'null'
        total_lines:
          type:
            - integer
            - 'null'
        type:
          enum:
            - text_editor_code_execution_view_result
          type: string
      required:
        - content
        - file_type
        - num_lines
        - start_line
        - total_lines
        - type
      type: object
    AnthropicToolSearchResultError:
      example:
        error_code: unavailable
        error_message: null
        type: tool_search_tool_result_error
      properties:
        error_code:
          $ref: '#/components/schemas/AnthropicServerToolErrorCode'
        error_message:
          type:
            - string
            - 'null'
        type:
          enum:
            - tool_search_tool_result_error
          type: string
      required:
        - error_code
        - error_message
        - type
      type: object
    AnthropicToolSearchResult:
      example:
        tool_references:
          - tool_name: my_tool
            type: tool_reference
        type: tool_search_tool_search_result
      properties:
        tool_references:
          items:
            $ref: '#/components/schemas/AnthropicToolReference'
          type: array
        type:
          enum:
            - tool_search_tool_search_result
          type: string
      required:
        - tool_references
        - type
      type: object
    AnthropicWebFetchBlock:
      example:
        content:
          citations: null
          source:
            data: ''
            media_type: text/plain
            type: text
          title: null
          type: document
        retrieved_at: null
        type: web_fetch_result
        url: https://example.com
      properties:
        content:
          $ref: '#/components/schemas/AnthropicDocumentBlock'
        retrieved_at:
          type:
            - string
            - 'null'
        type:
          enum:
            - web_fetch_result
          type: string
        url:
          type: string
      required:
        - content
        - retrieved_at
        - type
        - url
      type: object
    AnthropicWebFetchToolResultError:
      example:
        error_code: unavailable
        type: web_fetch_tool_result_error
      properties:
        error_code:
          enum:
            - content_too_large
            - invalid_tool_input
            - url_too_long
            - url_not_allowed
            - url_not_in_prior_context
            - url_not_accessible
            - unsupported_content_type
            - too_many_requests
            - max_uses_exceeded
            - unavailable
          type: string
        type:
          enum:
            - web_fetch_tool_result_error
          type: string
      required:
        - type
        - error_code
      type: object
    AnthropicBashCodeExecutionOutput:
      example:
        file_id: file_01abc
        type: bash_code_execution_output
      properties:
        file_id:
          type: string
        type:
          enum:
            - bash_code_execution_output
          type: string
      required:
        - file_id
        - type
      type: object
    AnthropicCodeExecutionOutput:
      example:
        file_id: file_01abc
        type: code_execution_output
      properties:
        file_id:
          type: string
        type:
          enum:
            - code_execution_output
          type: string
      required:
        - file_id
        - type
      type: object
    AnthropicServerToolErrorCode:
      enum:
        - invalid_tool_input
        - unavailable
        - too_many_requests
        - execution_time_exceeded
      example: unavailable
      type: string
    AnthropicToolReference:
      example:
        tool_name: my_tool
        type: tool_reference
      properties:
        tool_name:
          type: string
        type:
          enum:
            - tool_reference
          type: string
      required:
        - tool_name
        - type
      type: object
    AnthropicDocumentBlock:
      example:
        citations: null
        source:
          data: Hello, world!
          media_type: text/plain
          type: text
        title: null
        type: document
      properties:
        citations:
          $ref: '#/components/schemas/AnthropicCitationsConfig'
        source:
          anyOf:
            - $ref: '#/components/schemas/AnthropicBase64PdfSource'
            - $ref: '#/components/schemas/AnthropicPlainTextSource'
        title:
          type:
            - string
            - 'null'
        type:
          enum:
            - document
          type: string
      required:
        - source
        - title
        - type
      type: object
    AnthropicCitationsConfig:
      default: null
      example:
        enabled: true
      properties:
        enabled:
          type: boolean
      required:
        - enabled
      type:
        - object
        - 'null'
  securitySchemes:
    apiKey:
      description: API key as bearer token in Authorization header
      scheme: bearer
      type: http

````