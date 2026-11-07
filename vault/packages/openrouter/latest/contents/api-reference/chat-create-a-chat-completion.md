> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Create a chat completion

> Sends a request for a model response for the given chat conversation. Supports both streaming and non-streaming modes.



## OpenAPI

````yaml /openapi/openapi.yaml post /chat/completions
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
  /chat/completions:
    post:
      tags:
        - Chat
      summary: Create a chat completion
      description: >-
        Sends a request for a model response for the given chat conversation.
        Supports both streaming and non-streaming modes.
      operationId: sendChatCompletionRequest
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
              max_tokens: 150
              messages:
                - content: You are a helpful assistant.
                  role: system
                - content: What is the capital of France?
                  role: user
              model: openai/gpt-4
              temperature: 0.7
            schema:
              $ref: '#/components/schemas/ChatRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              example:
                choices:
                  - finish_reason: stop
                    index: 0
                    message:
                      content: The capital of France is Paris.
                      role: assistant
                created: 1677652288
                id: chatcmpl-123
                model: openai/gpt-4
                object: chat.completion
                system_fingerprint: fp_44709d6fcb
                usage:
                  completion_tokens: 10
                  prompt_tokens: 25
                  total_tokens: 35
              schema:
                $ref: '#/components/schemas/ChatResult'
            text/event-stream:
              example:
                data:
                  choices:
                    - delta:
                        content: Hello
                        role: assistant
                      finish_reason: null
                      index: 0
                  created: 1677652288
                  id: chatcmpl-123
                  model: openai/gpt-4
                  object: chat.completion.chunk
              schema:
                $ref: '#/components/schemas/ChatStreamingResponse'
              x-speakeasy-sse-sentinel: '[DONE]'
          description: Successful chat completion response
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
        '402':
          content:
            application/json:
              example:
                error:
                  code: 402
                  message: >-
                    Insufficient credits. Add more using
                    https://openrouter.ai/credits
              schema:
                $ref: '#/components/schemas/PaymentRequiredResponse'
          description: Payment Required - Insufficient credits or quota to complete request
        '403':
          content:
            application/json:
              examples:
                guardrail-blocked:
                  summary: Guardrail blocked the request
                  value:
                    error:
                      code: 403
                      message: 'Request blocked: prompt injection patterns detected'
                      metadata:
                        patterns:
                          - ignore all previous instructions
                    openrouter_metadata:
                      attempt: 1
                      endpoints:
                        available:
                          - model: openai/gpt-4o
                            provider: OpenAI
                            selected: false
                        total: 1
                      is_byok: false
                      pipeline:
                        - data:
                            action: blocked
                            detected: true
                            engines:
                              - regex
                            patterns:
                              - ignore all previous instructions
                          guardrail_id: grd_abc123
                          guardrail_scope: api-key
                          name: regex_pi_detection
                          summary: >-
                            Blocked: prompt injection detected (1 pattern
                            matched)
                          type: guardrail
                      region: iad
                      requested: openai/gpt-4o
                      strategy: direct
                      summary: available=1
                insufficient-permissions:
                  summary: Insufficient permissions
                  value:
                    error:
                      code: 403
                      message: Only management keys can perform this operation
              schema:
                $ref: '#/components/schemas/ForbiddenResponse'
          description: >-
            Forbidden - Authentication successful but insufficient permissions,
            or a guardrail blocked the request. When guardrails block and the
            `X-OpenRouter-Metadata: enabled` header is present, the response
            includes `openrouter_metadata` with full routing context and a
            `pipeline` array containing guardrail stage details.
        '404':
          content:
            application/json:
              example:
                error:
                  code: 404
                  message: Resource not found
              schema:
                $ref: '#/components/schemas/NotFoundResponse'
          description: Not Found - Resource does not exist
        '408':
          content:
            application/json:
              example:
                error:
                  code: 408
                  message: Operation timed out. Please try again later.
              schema:
                $ref: '#/components/schemas/RequestTimeoutResponse'
          description: Request Timeout - Operation exceeded time limit
        '413':
          content:
            application/json:
              example:
                error:
                  code: 413
                  message: Request payload too large
              schema:
                $ref: '#/components/schemas/PayloadTooLargeResponse'
          description: Payload Too Large - Request payload exceeds size limits
        '422':
          content:
            application/json:
              example:
                error:
                  code: 422
                  message: Invalid argument
              schema:
                $ref: '#/components/schemas/UnprocessableEntityResponse'
          description: Unprocessable Entity - Semantic validation failure
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
        '502':
          content:
            application/json:
              example:
                error:
                  code: 502
                  message: Provider returned error
              schema:
                $ref: '#/components/schemas/BadGatewayResponse'
          description: Bad Gateway - Provider/upstream API failure
        '503':
          content:
            application/json:
              example:
                error:
                  code: 503
                  message: Service temporarily unavailable
              schema:
                $ref: '#/components/schemas/ServiceUnavailableResponse'
          description: Service Unavailable - Service temporarily unavailable
        '524':
          content:
            application/json:
              example:
                error:
                  code: 524
                  message: Request timed out. Please try again later.
              schema:
                $ref: '#/components/schemas/EdgeNetworkTimeoutResponse'
          description: Infrastructure Timeout - Provider request timed out at edge network
        '529':
          content:
            application/json:
              example:
                error:
                  code: 529
                  message: Provider returned error
              schema:
                $ref: '#/components/schemas/ProviderOverloadedResponse'
          description: Provider Overloaded - Provider is temporarily overloaded
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
    ChatRequest:
      description: Chat completion request parameters
      example:
        max_tokens: 150
        messages:
          - content: You are a helpful assistant.
            role: system
          - content: What is the capital of France?
            role: user
        model: openai/gpt-4
        temperature: 0.7
      properties:
        cache_control:
          $ref: '#/components/schemas/AnthropicCacheControlDirective'
        debug:
          $ref: '#/components/schemas/ChatDebugOptions'
        deferred_tools:
          $ref: '#/components/schemas/DeferredToolsControl'
        frequency_penalty:
          description: Frequency penalty (-2.0 to 2.0)
          example: 0
          format: double
          type:
            - number
            - 'null'
        image_config:
          $ref: '#/components/schemas/ImageConfig'
        logit_bias:
          additionalProperties:
            format: double
            type: number
          description: Token logit bias adjustments
          example:
            '50256': -100
          type:
            - object
            - 'null'
        logprobs:
          description: Return log probabilities
          example: false
          type:
            - boolean
            - 'null'
        max_completion_tokens:
          description: Maximum tokens in completion
          example: 100
          type:
            - integer
            - 'null'
        max_tokens:
          description: >-
            Maximum tokens (deprecated, use max_completion_tokens). Note: some
            providers enforce a minimum of 16.
          example: 100
          type:
            - integer
            - 'null'
        messages:
          description: List of messages for the conversation
          example:
            - content: Hello!
              role: user
          items:
            $ref: '#/components/schemas/ChatMessages'
          minItems: 1
          type: array
        metadata:
          additionalProperties:
            type: string
          description: >-
            Key-value pairs for additional object information (max 16 pairs, 64
            char keys, 512 char values)
          example:
            session_id: session-456
            user_id: user-123
          type: object
        min_p:
          description: >-
            Minimum probability threshold relative to the most likely token.
            Tokens with probability below min_p * (probability of top token) are
            filtered out. Not all providers support this parameter.
          example: 0.1
          format: double
          type:
            - number
            - 'null'
        modalities:
          description: >-
            Output modalities for the response. Supported values are "text",
            "image", and "audio".
          example:
            - text
            - image
          items:
            enum:
              - text
              - image
              - audio
            type: string
          type: array
        model:
          $ref: '#/components/schemas/ModelName'
        models:
          $ref: '#/components/schemas/ChatModelNames'
        parallel_tool_calls:
          description: >-
            Whether to enable parallel function calling during tool use. When
            true, the model may generate multiple tool calls in a single
            response.
          example: true
          type:
            - boolean
            - 'null'
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
        prediction:
          $ref: '#/components/schemas/Prediction'
        presence_penalty:
          description: Presence penalty (-2.0 to 2.0)
          example: 0
          format: double
          type:
            - number
            - 'null'
        prompt_cache_key:
          type:
            - string
            - 'null'
        prompt_cache_options:
          $ref: '#/components/schemas/PromptCacheOptions'
        provider:
          $ref: '#/components/schemas/ProviderPreferences'
        reasoning:
          description: Configuration options for reasoning models
          example:
            effort: medium
            summary: concise
          properties:
            effort:
              description: Constrains effort on reasoning for reasoning models
              enum:
                - max
                - xhigh
                - high
                - medium
                - low
                - minimal
                - none
                - null
              example: medium
              type:
                - string
                - 'null'
            max_tokens:
              description: >-
                Maximum number of tokens the model may spend on reasoning, for
                models that take a reasoning token budget instead of an effort
                level. Cannot be combined with `reasoning.effort` or the
                top-level `reasoning_effort`: a request that sets both is
                rejected with "Only one of "reasoning.effort" and
                "reasoning.max_tokens" can be specified".
              example: 2000
              type:
                - integer
                - 'null'
            summary:
              $ref: '#/components/schemas/ChatReasoningSummaryVerbosityEnum'
          type: object
        reasoning_effort:
          description: >-
            Shorthand for setting reasoning effort. Equivalent to setting
            reasoning.effort. Cannot be used simultaneously with
            reasoning.effort if they differ.
          enum:
            - max
            - xhigh
            - high
            - medium
            - low
            - minimal
            - none
            - null
          example: medium
          type:
            - string
            - 'null'
        repetition_penalty:
          description: >-
            Penalizes tokens based on how much they have already appeared in the
            text. A value of 1.0 means no penalty. Values above 1.0 penalize
            repeated tokens more strongly. Not all providers support this
            parameter.
          example: 1
          format: double
          type:
            - number
            - 'null'
        response_format:
          description: Response format configuration
          discriminator:
            mapping:
              grammar: '#/components/schemas/ChatFormatGrammarConfig'
              json_object: '#/components/schemas/ChatFormatJsonObjectConfig'
              json_schema: '#/components/schemas/ChatFormatJsonSchemaConfig'
              python: '#/components/schemas/ChatFormatPythonConfig'
              text: '#/components/schemas/ChatFormatTextConfig'
            propertyName: type
          example:
            type: json_object
          oneOf:
            - $ref: '#/components/schemas/ChatFormatTextConfig'
            - $ref: '#/components/schemas/ChatFormatJsonObjectConfig'
            - $ref: '#/components/schemas/ChatFormatJsonSchemaConfig'
            - $ref: '#/components/schemas/ChatFormatGrammarConfig'
            - $ref: '#/components/schemas/ChatFormatPythonConfig'
        route:
          $ref: '#/components/schemas/DeprecatedRoute'
        seed:
          description: Random seed for deterministic outputs
          example: 42
          type:
            - integer
            - 'null'
        service_tier:
          description: >-
            The service tier to use for processing this request. `fast` is
            accepted as an alias for `priority`. `ultrafast` prefers ultrafast
            endpoints and falls back to `priority`, then default endpoints.
          enum:
            - auto
            - default
            - fast
            - flex
            - priority
            - scale
            - ultrafast
            - null
          example: auto
          type:
            - string
            - 'null'
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
        stop:
          anyOf:
            - type: string
            - items:
                type: string
              maxItems: 4
              type: array
            - type: 'null'
          description: Stop sequences (up to 4)
          example:
            - |+

        stop_server_tools_when:
          $ref: '#/components/schemas/StopServerToolsWhen'
        stream:
          default: false
          description: Enable streaming response
          example: false
          type: boolean
        stream_options:
          $ref: '#/components/schemas/ChatStreamOptions'
        temperature:
          description: Sampling temperature (0-2)
          example: 0.7
          format: double
          type:
            - number
            - 'null'
        tool_choice:
          $ref: '#/components/schemas/ChatToolChoice'
        tools:
          description: Available tools for function calling
          example:
            - function:
                description: Get weather
                name: get_weather
              type: function
          items:
            $ref: '#/components/schemas/ChatFunctionTool'
          type: array
        top_a:
          description: >-
            Consider only tokens with "sufficiently high" probabilities based on
            the probability of the most likely token. Not all providers support
            this parameter.
          example: 0
          format: double
          type:
            - number
            - 'null'
        top_k:
          description: >-
            Limits the model to choose from the top K most likely tokens at each
            step. A value of 1 means the model will always pick the most likely
            next token. Not all providers support this parameter.
          example: 40
          type:
            - integer
            - 'null'
        top_logprobs:
          description: Number of top log probabilities to return (0-20)
          example: 5
          type:
            - integer
            - 'null'
        top_p:
          description: Nucleus sampling parameter (0-1)
          example: 1
          format: double
          type:
            - number
            - 'null'
        trace:
          $ref: '#/components/schemas/TraceConfig'
        user:
          description: >-
            Per-end-user identifier for abuse isolation. Use a stable ID, hash,
            or pseudonym. When a provider requires a user identity, OpenRouter
            folds it into the hashed identity sent upstream and never forwards
            it raw. If omitted, requests use an account-level identity, so
            provider policy blocks can affect the whole account.
          example: user-123
          type: string
      required:
        - messages
      type: object
    ChatResult:
      description: Chat completion response
      example:
        choices:
          - finish_reason: stop
            index: 0
            message:
              content: The capital of France is Paris.
              role: assistant
        created: 1677652288
        id: chatcmpl-123
        model: openai/gpt-4
        object: chat.completion
        system_fingerprint: fp_44709d6fcb
        usage:
          completion_tokens: 15
          prompt_tokens: 10
          total_tokens: 25
      properties:
        alignment:
          $ref: '#/components/schemas/Alignment'
        choices:
          description: List of completion choices
          items:
            $ref: '#/components/schemas/ChatChoice'
          type: array
        created:
          description: Unix timestamp of creation
          example: 1677652288
          type: integer
        id:
          description: Unique completion identifier
          example: chatcmpl-123
          type: string
        model:
          description: Model used for completion
          example: openai/gpt-4
          type: string
        object:
          enum:
            - chat.completion
          type: string
        openrouter_metadata:
          $ref: '#/components/schemas/OpenRouterMetadata'
        safeguard_results:
          description: >-
            OpenRouter Armor's verdict for each client tool call of this
            response, present whenever Armor evaluated the response (even when
            nothing was flagged). Independent of the `openrouter_metadata`
            opt-in.
          items:
            $ref: '#/components/schemas/ArmorSafeguardResult'
          type: array
        service_tier:
          description: The service tier used by the upstream provider for this request
          example: default
          type:
            - string
            - 'null'
        system_fingerprint:
          description: System fingerprint
          example: fp_44709d6fcb
          type:
            - string
            - 'null'
        usage:
          $ref: '#/components/schemas/ChatUsage'
      required:
        - id
        - choices
        - created
        - model
        - object
        - system_fingerprint
      type: object
    ChatStreamingResponse:
      example:
        data:
          choices:
            - delta:
                content: Hello
                role: assistant
              finish_reason: null
              index: 0
          created: 1677652288
          id: chatcmpl-123
          model: openai/gpt-4
          object: chat.completion.chunk
      properties:
        data:
          $ref: '#/components/schemas/ChatStreamChunk'
      required:
        - data
      type: object
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
    PaymentRequiredResponse:
      description: Payment Required - Insufficient credits or quota to complete request
      example:
        error:
          code: 402
          message: Insufficient credits. Add more using https://openrouter.ai/credits
      properties:
        error:
          $ref: '#/components/schemas/PaymentRequiredResponseErrorData'
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
    NotFoundResponse:
      description: Not Found - Resource does not exist
      example:
        error:
          code: 404
          message: Resource not found
      properties:
        error:
          $ref: '#/components/schemas/NotFoundResponseErrorData'
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
    RequestTimeoutResponse:
      description: Request Timeout - Operation exceeded time limit
      example:
        error:
          code: 408
          message: Operation timed out. Please try again later.
      properties:
        error:
          $ref: '#/components/schemas/RequestTimeoutResponseErrorData'
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
    PayloadTooLargeResponse:
      description: Payload Too Large - Request payload exceeds size limits
      example:
        error:
          code: 413
          message: Request payload too large
      properties:
        error:
          $ref: '#/components/schemas/PayloadTooLargeResponseErrorData'
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
    UnprocessableEntityResponse:
      description: Unprocessable Entity - Semantic validation failure
      example:
        error:
          code: 422
          message: Invalid argument
      properties:
        error:
          $ref: '#/components/schemas/UnprocessableEntityResponseErrorData'
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
    BadGatewayResponse:
      description: Bad Gateway - Provider/upstream API failure
      example:
        error:
          code: 502
          message: Provider returned error
      properties:
        error:
          $ref: '#/components/schemas/BadGatewayResponseErrorData'
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
    ServiceUnavailableResponse:
      description: Service Unavailable - Service temporarily unavailable
      example:
        error:
          code: 503
          message: Service temporarily unavailable
      properties:
        error:
          $ref: '#/components/schemas/ServiceUnavailableResponseErrorData'
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
    EdgeNetworkTimeoutResponse:
      description: Infrastructure Timeout - Provider request timed out at edge network
      example:
        error:
          code: 524
          message: Request timed out. Please try again later.
      properties:
        error:
          $ref: '#/components/schemas/EdgeNetworkTimeoutResponseErrorData'
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
    ProviderOverloadedResponse:
      description: Provider Overloaded - Provider is temporarily overloaded
      example:
        error:
          code: 529
          message: Provider returned error
      properties:
        error:
          $ref: '#/components/schemas/ProviderOverloadedResponseErrorData'
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
    ChatDebugOptions:
      description: Debug options for inspecting request transformations (streaming only)
      example:
        echo_upstream_body: true
      properties:
        echo_upstream_body:
          description: >-
            If true, includes the transformed upstream request body in a debug
            chunk at the start of the stream. Only works with streaming mode.
          example: true
          type: boolean
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
    ImageConfig:
      additionalProperties:
        anyOf:
          - type: string
          - format: double
            type: number
          - items: {}
            type: array
      description: >-
        Provider-specific image configuration options. Keys and values vary by
        model/provider. See
        https://openrouter.ai/docs/guides/overview/multimodal/image-generation
        for more details.
      example:
        aspect_ratio: '16:9'
        quality: high
      type: object
    ChatMessages:
      description: Chat completion message with role-based discrimination
      discriminator:
        mapping:
          assistant: '#/components/schemas/ChatAssistantMessage'
          developer: '#/components/schemas/ChatDeveloperMessage'
          system: '#/components/schemas/ChatSystemMessage'
          tool: '#/components/schemas/ChatToolMessage'
          user: '#/components/schemas/ChatUserMessage'
        propertyName: role
      example:
        content: What is the capital of France?
        role: user
      oneOf:
        - $ref: '#/components/schemas/ChatSystemMessage'
        - $ref: '#/components/schemas/ChatUserMessage'
        - $ref: '#/components/schemas/ChatDeveloperMessage'
        - $ref: '#/components/schemas/ChatAssistantMessage'
        - $ref: '#/components/schemas/ChatToolMessage'
    ModelName:
      description: Model to use for completion
      example: openai/gpt-4
      type: string
    ChatModelNames:
      description: Models to use for completion
      example:
        - openai/gpt-4
        - openai/gpt-4o
      items:
        allOf:
          - $ref: '#/components/schemas/ModelName'
          - description: Available OpenRouter chat completion models
      type: array
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
    Prediction:
      description: >-
        Static predicted output content. Supported models can use this to reduce
        latency when much of the response is known in advance.
      example:
        content: Expected response
        type: content
      properties:
        content:
          anyOf:
            - type: string
            - items:
                $ref: '#/components/schemas/PredictionContentText'
              type: array
        type:
          enum:
            - content
          type: string
      required:
        - type
        - content
      type:
        - object
        - 'null'
    PromptCacheOptions:
      description: >-
        Request-level prompt-cache controls. `mode: "explicit"` disables
        OpenAI-managed breakpoints so only blocks marked with
        `prompt_cache_breakpoint` are cached. `ttl` sets the minimum cache
        lifetime for every breakpoint the request writes: "30m" (default) or
        "12h" (billed at the higher 12h cache-write rate). Only supported by
        OpenAI GPT-5.6 and newer.
      example:
        mode: explicit
        ttl: 30m
      properties:
        mode:
          enum:
            - explicit
          type: string
        ttl:
          type:
            - string
            - 'null'
      required:
        - mode
      type:
        - object
        - 'null'
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
    ChatReasoningSummaryVerbosityEnum:
      enum:
        - auto
        - concise
        - detailed
        - null
      example: concise
      type:
        - string
        - 'null'
    ChatFormatGrammarConfig:
      description: Custom grammar response format
      example:
        grammar: root ::= "yes" | "no"
        type: grammar
      properties:
        grammar:
          description: Custom grammar for text generation
          example: root ::= "yes" | "no"
          type: string
        type:
          enum:
            - grammar
          type: string
      required:
        - type
        - grammar
      type: object
    ChatFormatJsonObjectConfig:
      description: JSON object response format
      example:
        type: json_object
      properties:
        type:
          enum:
            - json_object
          type: string
      required:
        - type
      type: object
    ChatFormatJsonSchemaConfig:
      description: JSON Schema response format for structured outputs
      example:
        json_schema:
          name: math_response
          schema:
            properties:
              answer:
                type: number
            required:
              - answer
            type: object
        type: json_schema
      properties:
        json_schema:
          $ref: '#/components/schemas/ChatJsonSchemaConfig'
        type:
          enum:
            - json_schema
          type: string
      required:
        - type
        - json_schema
      type: object
    ChatFormatPythonConfig:
      description: Python code response format
      example:
        type: python
      properties:
        type:
          enum:
            - python
          type: string
      required:
        - type
      type: object
    ChatFormatTextConfig:
      description: Default text response format
      example:
        type: text
      properties:
        type:
          enum:
            - text
          type: string
      required:
        - type
      type: object
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
    ChatStreamOptions:
      description: Streaming configuration options
      example:
        include_usage: true
      properties:
        include_usage:
          deprecated: true
          description: >-
            Deprecated: This field has no effect. Full usage details are always
            included.
          example: true
          type: boolean
      type:
        - object
        - 'null'
    ChatToolChoice:
      anyOf:
        - enum:
            - none
          type: string
        - enum:
            - auto
          type: string
        - enum:
            - required
          type: string
        - $ref: '#/components/schemas/ChatNamedToolChoice'
        - $ref: '#/components/schemas/ChatServerToolChoice'
      description: Tool choice configuration
      example: auto
    ChatFunctionTool:
      anyOf:
        - properties:
            cache_control:
              $ref: '#/components/schemas/ChatContentCacheControl'
            defer_loading:
              type: boolean
            function:
              description: Function definition for tool calling
              example:
                description: Get the current weather for a location
                name: get_weather
                parameters:
                  properties:
                    location:
                      description: City name
                      type: string
                  required:
                    - location
                  type: object
              properties:
                defer_loading:
                  type: boolean
                description:
                  description: Function description for the model
                  example: Get the current weather for a location
                  type: string
                name:
                  description: >-
                    Function name (a-z, A-Z, 0-9, underscores, dashes, max 64
                    chars)
                  example: get_weather
                  maxLength: 64
                  type: string
                parameters:
                  additionalProperties: {}
                  description: Function parameters as JSON Schema object
                  example:
                    properties:
                      location:
                        description: City name
                        type: string
                    required:
                      - location
                    type: object
                  type: object
                strict:
                  description: Enable strict schema adherence
                  example: false
                  type:
                    - boolean
                    - 'null'
              required:
                - name
              type: object
            type:
              enum:
                - function
              type: string
          required:
            - type
            - function
          type: object
        - $ref: '#/components/schemas/AdvisorServerTool_OpenRouter'
        - $ref: '#/components/schemas/BashServerTool'
        - $ref: '#/components/schemas/DatetimeServerTool'
        - $ref: '#/components/schemas/FilesServerTool'
        - $ref: '#/components/schemas/FusionServerTool_OpenRouter'
        - $ref: '#/components/schemas/ImageGenerationServerTool_OpenRouter'
        - $ref: '#/components/schemas/ChatSearchModelsServerTool'
        - $ref: '#/components/schemas/SubagentServerTool_OpenRouter'
        - $ref: '#/components/schemas/WebFetchServerTool'
        - $ref: '#/components/schemas/OpenRouterWebSearchServerTool'
        - $ref: '#/components/schemas/ChatWebSearchShorthand'
        - $ref: '#/components/schemas/ChatDynamicServerTool'
      description: >-
        Tool definition for function calling (regular function or OpenRouter
        built-in server tool)
      example:
        function:
          description: Get the current weather for a location
          name: get_weather
          parameters:
            properties:
              location:
                description: City name
                type: string
              unit:
                enum:
                  - celsius
                  - fahrenheit
                type: string
            required:
              - location
            type: object
        type: function
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
    Alignment:
      additionalProperties: false
      description: >-
        Beta. The result of the alignment plugin for this request; the shape may
        change.
      example:
        calls:
          - call: 1
            outcome: allowed
            rules:
              - applicable: true
                broken: false
                probability: 0.04
      properties:
        calls:
          description: >-
            One record per evaluated assistant message of the request, in the
            order the messages were produced. Empty when no message of the
            request had content to evaluate.
          items:
            $ref: '#/components/schemas/AlignmentCallRecord'
          type: array
      required:
        - calls
      type: object
    ChatChoice:
      description: Chat completion choice
      example:
        finish_reason: stop
        index: 0
        logprobs: null
        message:
          content: The capital of France is Paris.
          role: assistant
      properties:
        finish_reason:
          $ref: '#/components/schemas/ChatFinishReasonEnum'
        index:
          description: Choice index
          example: 0
          type: integer
        logprobs:
          $ref: '#/components/schemas/ChatTokenLogprobs'
        message:
          $ref: '#/components/schemas/ChatAssistantMessage'
      required:
        - finish_reason
        - index
        - message
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
    ArmorSafeguardResult:
      description: >-
        The outcome of OpenRouter Armor for each client tool call of the
        response, keyed by tool-call id, in the same shape Anthropic reports its
        server-side safeguards.
      example:
        status:
          tool_uses:
            call_abc:
              explanation: '[Data Exfiltration]'
              outcome: flagged
              type: evaluated
            call_def:
              outcome: not_flagged
              type: evaluated
          type: available
        type: dangerous_tool_use
      properties:
        status:
          properties:
            tool_uses:
              additionalProperties:
                oneOf:
                  - properties:
                      explanation:
                        type: string
                      outcome:
                        enum:
                          - flagged
                          - not_flagged
                        type: string
                      type:
                        enum:
                          - evaluated
                        type: string
                    required:
                      - type
                      - outcome
                    type: object
                  - properties:
                      type:
                        enum:
                          - skipped
                        type: string
                    required:
                      - type
                    type: object
                  - properties:
                      reason:
                        type: string
                      type:
                        enum:
                          - unavailable
                        type: string
                    required:
                      - type
                      - reason
                    type: object
              type: object
            type:
              enum:
                - available
              type: string
          required:
            - type
            - tool_uses
          type: object
        type:
          enum:
            - dangerous_tool_use
          type: string
      required:
        - type
        - status
      type: object
    ChatUsage:
      description: Token usage statistics
      example:
        completion_tokens: 15
        completion_tokens_details:
          reasoning_tokens: 5
        cost: 0.0012
        cost_details:
          upstream_inference_completions_cost: 0.0004
          upstream_inference_cost: null
          upstream_inference_prompt_cost: 0.0008
        is_byok: false
        prompt_tokens: 10
        prompt_tokens_details:
          cached_tokens: 2
        server_tool_use_details:
          tool_calls_executed: 2
          tool_calls_requested: 2
        total_tokens: 25
      properties:
        completion_tokens:
          description: Number of tokens in the completion
          type: integer
        completion_tokens_details:
          description: Detailed completion token usage
          properties:
            accepted_prediction_tokens:
              description: Accepted prediction tokens
              type:
                - integer
                - 'null'
            audio_tokens:
              description: Tokens used for audio output
              type:
                - integer
                - 'null'
            reasoning_tokens:
              description: Tokens used for reasoning
              type:
                - integer
                - 'null'
            rejected_prediction_tokens:
              description: Rejected prediction tokens
              type:
                - integer
                - 'null'
          type:
            - object
            - 'null'
        cost:
          description: Cost of the completion
          format: double
          type:
            - number
            - 'null'
        cost_details:
          $ref: '#/components/schemas/CostDetails'
        deferred_tools_details:
          $ref: '#/components/schemas/DeferredToolsDetails'
        is_byok:
          description: Whether a request was made using a Bring Your Own Key configuration
          type: boolean
        prompt_tokens:
          description: Number of tokens in the prompt
          type: integer
        prompt_tokens_details:
          description: Detailed prompt token usage
          properties:
            audio_tokens:
              description: Audio input tokens
              type: integer
            cache_write_tokens:
              description: >-
                Tokens written to cache. Only returned for models with explicit
                caching and cache write pricing.
              type: integer
            cached_tokens:
              description: Cached prompt tokens
              type: integer
            video_tokens:
              description: Video input tokens
              type: integer
          type:
            - object
            - 'null'
        server_tool_use_details:
          $ref: '#/components/schemas/ServerToolUseDetails'
        total_tokens:
          description: Total number of tokens
          type: integer
      required:
        - completion_tokens
        - prompt_tokens
        - total_tokens
      type: object
    ChatStreamChunk:
      description: Streaming chat completion chunk
      example:
        choices:
          - delta:
              content: Hello
              role: assistant
            finish_reason: null
            index: 0
        created: 1677652288
        id: chatcmpl-123
        model: openai/gpt-4
        object: chat.completion.chunk
      properties:
        alignment:
          allOf:
            - $ref: '#/components/schemas/Alignment'
            - description: >-
                Beta. On the last data event of a request with the alignment
                plugin.
        choices:
          description: List of streaming chunk choices
          items:
            $ref: '#/components/schemas/ChatStreamChoice'
          type: array
        created:
          description: Unix timestamp of creation
          example: 1677652288
          type: integer
        error:
          description: Error information
          example:
            code: 429
            message: Rate limit exceeded
            metadata:
              error_type: rate_limit_exceeded
          properties:
            code:
              description: Error code
              example: 429
              format: int32
              type: integer
            message:
              description: Error message
              example: Rate limit exceeded
              type: string
            metadata:
              description: Structured error metadata
              properties:
                error_type:
                  $ref: '#/components/schemas/ApiErrorType'
                provider_code:
                  description: Upstream provider-specific error code, when available
                  type: string
              required:
                - error_type
              title: ChatStreamChunkMetadata
              type: object
          required:
            - message
            - code
          type: object
        id:
          description: Unique chunk identifier
          example: chatcmpl-123
          type: string
        model:
          description: Model used for completion
          example: openai/gpt-4
          type: string
        object:
          enum:
            - chat.completion.chunk
          type: string
        openrouter_metadata:
          $ref: '#/components/schemas/OpenRouterMetadata'
        safeguard_results:
          description: >-
            OpenRouter Armor's verdict for each client tool call of this
            response, present whenever Armor evaluated the response (even when
            nothing was flagged). Independent of the `openrouter_metadata`
            opt-in.
          items:
            $ref: '#/components/schemas/ArmorSafeguardResult'
          type: array
        service_tier:
          description: The service tier used by the upstream provider for this request
          example: default
          type:
            - string
            - 'null'
        system_fingerprint:
          description: System fingerprint
          example: fp_44709d6fcb
          type: string
        usage:
          $ref: '#/components/schemas/ChatUsage'
      required:
        - id
        - choices
        - created
        - model
        - object
      type: object
      x-speakeasy-entity: ChatStreamChunk
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
    PaymentRequiredResponseErrorData:
      description: Error data for PaymentRequiredResponse
      example:
        code: 402
        message: Insufficient credits. Add more using https://openrouter.ai/credits
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
    NotFoundResponseErrorData:
      description: Error data for NotFoundResponse
      example:
        code: 404
        message: Resource not found
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
    RequestTimeoutResponseErrorData:
      description: Error data for RequestTimeoutResponse
      example:
        code: 408
        message: Operation timed out. Please try again later.
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
    PayloadTooLargeResponseErrorData:
      description: Error data for PayloadTooLargeResponse
      example:
        code: 413
        message: Request payload too large
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
    UnprocessableEntityResponseErrorData:
      description: Error data for UnprocessableEntityResponse
      example:
        code: 422
        message: Invalid argument
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
    BadGatewayResponseErrorData:
      description: Error data for BadGatewayResponse
      example:
        code: 502
        message: Provider returned error
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
    ServiceUnavailableResponseErrorData:
      description: Error data for ServiceUnavailableResponse
      example:
        code: 503
        message: Service temporarily unavailable
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
    EdgeNetworkTimeoutResponseErrorData:
      description: Error data for EdgeNetworkTimeoutResponse
      example:
        code: 524
        message: Request timed out. Please try again later.
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
    ProviderOverloadedResponseErrorData:
      description: Error data for ProviderOverloadedResponse
      example:
        code: 529
        message: Provider returned error
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
    ChatAssistantMessage:
      description: Assistant message for requests and responses
      example:
        content: The capital of France is Paris.
        model: openai/gpt-4o
        role: assistant
      properties:
        audio:
          $ref: '#/components/schemas/ChatAudioOutput'
        content:
          anyOf:
            - type: string
            - items:
                $ref: '#/components/schemas/ChatContentItems'
              type: array
            - type: 'null'
          description: Assistant message content
        images:
          $ref: '#/components/schemas/ChatAssistantImages'
        model:
          description: Model that generated this assistant message
          example: openai/gpt-4o
          type: string
        name:
          description: Optional name for the assistant
          type: string
        reasoning:
          description: Reasoning output
          type:
            - string
            - 'null'
        reasoning_details:
          $ref: '#/components/schemas/ChatReasoningDetails'
        refusal:
          description: Refusal message if content was refused
          type:
            - string
            - 'null'
        role:
          enum:
            - assistant
          type: string
        tool_calls:
          description: Tool calls made by the assistant
          items:
            $ref: '#/components/schemas/ChatToolCall'
          type: array
      required:
        - role
      type: object
    ChatDeveloperMessage:
      description: Developer message
      example:
        content: This is a message from the developer.
        role: developer
      properties:
        configuration_update:
          anyOf:
            - $ref: '#/components/schemas/ConfigurationUpdate'
            - type: 'null'
            - type: 'null'
          description: >-
            OpenRouter extension. Same as the system message
            `configuration_update`: changes reasoning effort from this point in
            the conversation onward without invalidating the prompt cache for
            the preceding turns.
          example:
            reasoning:
              effort: low
        content:
          anyOf:
            - type: string
            - items:
                $ref: '#/components/schemas/ChatContentText'
              type: array
          description: Developer message content
          example: This is a message from the developer.
        name:
          description: Optional name for the developer message
          example: Developer
          type: string
        role:
          enum:
            - developer
          type: string
      required:
        - role
        - content
      type: object
    ChatSystemMessage:
      description: System message for setting behavior
      example:
        content: You are a helpful assistant.
        name: Assistant Config
        role: system
      properties:
        configuration_update:
          anyOf:
            - $ref: '#/components/schemas/ConfigurationUpdate'
            - type: 'null'
            - type: 'null'
          description: >-
            OpenRouter extension. Changes reasoning effort from this point in
            the conversation onward without invalidating the prompt cache for
            the preceding turns. Place it on a content-less system message
            (`content: ""`) directly before the user message it should apply to,
            and keep it at that position in later requests. Equivalent to the
            OpenAI Responses `configuration_update` input item and the Anthropic
            Messages per-message `output_config.effort`.
          example:
            reasoning:
              effort: low
        content:
          anyOf:
            - type: string
            - items:
                $ref: '#/components/schemas/ChatContentText'
              type: array
          description: System message content
          example: You are a helpful assistant.
        name:
          description: Optional name for the system message
          example: Assistant Config
          type: string
        role:
          enum:
            - system
          type: string
      required:
        - role
        - content
      type: object
    ChatToolMessage:
      description: Tool response message
      example:
        content: The weather in San Francisco is 72°F and sunny.
        role: tool
        tool_call_id: call_abc123
      properties:
        content:
          anyOf:
            - type: string
            - items:
                $ref: '#/components/schemas/ChatContentItems'
              type: array
          description: Tool response content
          example: The weather in San Francisco is 72°F and sunny.
        role:
          enum:
            - tool
          type: string
        tool_call_id:
          description: ID of the assistant message tool call this message responds to
          example: call_abc123
          type: string
      required:
        - role
        - content
        - tool_call_id
      type: object
    ChatUserMessage:
      description: User message
      example:
        content: What is the capital of France?
        role: user
      properties:
        content:
          anyOf:
            - type: string
            - items:
                $ref: '#/components/schemas/ChatContentItems'
              type: array
          description: User message content
          example: What is the capital of France?
        name:
          description: Optional name for the user
          example: User
          type: string
        role:
          enum:
            - user
          type: string
      required:
        - role
        - content
      type: object
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
    PredictionContentText:
      description: Text content part for a predicted output.
      example:
        text: Expected response
        type: text
      properties:
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
    ChatJsonSchemaConfig:
      description: JSON Schema configuration object
      example:
        description: A mathematical response
        name: math_response
        schema:
          properties:
            answer:
              type: number
          required:
            - answer
          type: object
        strict: true
      properties:
        description:
          description: Schema description for the model
          example: A mathematical response
          type: string
        name:
          description: Schema name (a-z, A-Z, 0-9, underscores, dashes, max 64 chars)
          example: math_response
          maxLength: 64
          type: string
        schema:
          additionalProperties: {}
          description: JSON Schema object
          example:
            properties:
              answer:
                type: number
            required:
              - answer
            type: object
          type: object
        strict:
          description: Enable strict schema adherence
          example: false
          type:
            - boolean
            - 'null'
      required:
        - name
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
    ChatNamedToolChoice:
      description: Named tool choice for specific function
      example:
        function:
          name: get_weather
        type: function
      properties:
        function:
          properties:
            name:
              description: Function name to call
              example: get_weather
              type: string
          required:
            - name
          type: object
        type:
          enum:
            - function
          type: string
      required:
        - type
        - function
      type: object
    ChatServerToolChoice:
      description: >-
        OpenRouter extension: force a specific server tool by naming it directly
        in `tool_choice.type` instead of wrapping it in `{ type: "function",
        function: { name } }`.
      example:
        type: openrouter:web_search
      properties:
        type:
          description: >-
            OpenRouter server-tool type to force (e.g. `openrouter:web_search`,
            `web_search`, `web_search_preview`).
          example: openrouter:web_search
          type: string
      required:
        - type
      type: object
    ChatContentCacheControl:
      allOf:
        - $ref: '#/components/schemas/AnthropicCacheControlDirective'
        - properties: {}
          type: object
      description: >-
        Anthropic-style cache breakpoint for the content part. Interchangeable
        with the OpenAI-style `prompt_cache_breakpoint` marker: OpenRouter
        converts between the two based on the provider serving the request.
      example:
        ttl: 5m
        type: ephemeral
    AdvisorServerTool_OpenRouter:
      description: >-
        OpenRouter built-in server tool: consults a higher-intelligence advisor
        model (any OpenRouter model) for guidance mid-generation and returns its
        response. Include multiple entries to offer several named advisors; at
        most one entry may omit `name` to act as the default advisor.
      example:
        parameters:
          model: ~anthropic/claude-opus-latest
          name: reviewer
        type: openrouter:advisor
      properties:
        parameters:
          $ref: '#/components/schemas/AdvisorServerToolConfig'
        type:
          enum:
            - openrouter:advisor
          type: string
      required:
        - type
      type: object
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
    FilesServerTool:
      description: >-
        OpenRouter built-in server tool: read, write, edit, and list workspace
        files via the Files API. Requires an authenticated request; files come
        from the API key's workspace (or the default workspace for keys without
        one).
      example:
        parameters: {}
        type: openrouter:files
      properties:
        parameters:
          $ref: '#/components/schemas/FilesServerToolConfig'
        type:
          enum:
            - openrouter:files
          type: string
      required:
        - type
      type: object
    FusionServerTool_OpenRouter:
      description: >-
        OpenRouter built-in server tool: fans out the user prompt to a panel of
        analysis models, then asks an analyst model to summarize their
        collective output as structured JSON the outer model can synthesize
        from.
      example:
        parameters:
          analysis_models:
            - ~anthropic/claude-opus-latest
            - ~openai/gpt-sol-latest
        type: openrouter:fusion
      properties:
        parameters:
          $ref: '#/components/schemas/FusionServerToolConfig'
        type:
          enum:
            - openrouter:fusion
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
    ChatSearchModelsServerTool:
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
    SubagentServerTool_OpenRouter:
      description: >-
        OpenRouter built-in server tool: delegates self-contained tasks to a
        smaller, cheaper, faster worker model (any OpenRouter model)
        mid-generation and returns its outcome. The worker may run as a
        sub-agent with its own tools.
      example:
        parameters:
          model: ~anthropic/claude-haiku-latest
        type: openrouter:subagent
      properties:
        parameters:
          $ref: '#/components/schemas/SubagentServerToolConfig'
        type:
          enum:
            - openrouter:subagent
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
    ChatWebSearchShorthand:
      description: >-
        Web search tool using OpenAI Responses API syntax. Automatically
        converted to openrouter:web_search.
      example:
        type: web_search_preview
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
        parameters:
          $ref: '#/components/schemas/WebSearchConfig'
        search_context_size:
          $ref: '#/components/schemas/SearchQualityLevel'
        type:
          enum:
            - web_search
            - web_search_preview
            - web_search_preview_2025_03_11
            - web_search_2025_08_26
          type: string
        user_location:
          $ref: '#/components/schemas/WebSearchUserLocationServerTool'
        x_search:
          $ref: '#/components/schemas/XSearchOptions'
      required:
        - type
      type: object
    ChatDynamicServerTool:
      description: >-
        Generic OpenRouter server-tool envelope. `type` names a registered
        server tool (canonical `openrouter:*` form or a registered shorthand);
        `parameters` carries tool-specific configuration validated against the
        tool definition.
      example:
        parameters: {}
        type: openrouter:datetime_v2
      properties:
        parameters:
          additionalProperties: {}
          type: object
        type:
          type: string
      required:
        - type
      type: object
    AlignmentCallRecord:
      discriminator:
        mapping:
          allowed: '#/components/schemas/AlignmentAllowedCallRecord'
          blocked: '#/components/schemas/AlignmentBlockedCallRecord'
          unavailable: '#/components/schemas/AlignmentUnavailableCallRecord'
        propertyName: outcome
      oneOf:
        - $ref: '#/components/schemas/AlignmentAllowedCallRecord'
        - $ref: '#/components/schemas/AlignmentBlockedCallRecord'
        - $ref: '#/components/schemas/AlignmentUnavailableCallRecord'
    ChatFinishReasonEnum:
      enum:
        - tool_calls
        - stop
        - length
        - content_filter
        - error
        - null
      example: stop
      type:
        - string
        - 'null'
    ChatTokenLogprobs:
      description: Log probabilities for the completion
      example:
        content:
          - bytes: null
            logprob: -0.612345
            token: ' Hello'
            top_logprobs: []
        refusal: null
      properties:
        content:
          description: Log probabilities for content tokens
          items:
            $ref: '#/components/schemas/ChatTokenLogprob'
          type:
            - array
            - 'null'
        refusal:
          description: Log probabilities for refusal tokens
          items:
            $ref: '#/components/schemas/ChatTokenLogprob'
          type:
            - array
            - 'null'
      required:
        - content
      type:
        - object
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
    DeferredToolsDetails:
      description: >-
        Totals across every upstream model call of a deferred-tools run. The
        native usage fields report only the final call; cost covers every call.
      example:
        completion_tokens: 180
        prompt_tokens: 2400
        total_tokens: 2580
        turns: 2
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
    ServerToolUseDetails:
      description: Usage for server-side tool execution (e.g., web search)
      example:
        tool_calls_executed: 2
        tool_calls_requested: 2
        web_search_requests: 2
      properties:
        tool_calls_executed:
          description: >-
            Number of OpenRouter server tool calls that executed and produced a
            result.
          type:
            - integer
            - 'null'
        tool_calls_requested:
          description: >-
            Total number of OpenRouter server-orchestrated tool calls the model
            requested, across all tool types. Provider-native tools (e.g. native
            web search) are not counted here.
          type:
            - integer
            - 'null'
        web_search_requests:
          description: >-
            Number of web searches performed by server-side tools. For
            server-orchestrated tool calls a web search is also counted in
            tool_calls_requested; provider-native web search may report
            web_search_requests only. Do not sum the two.
          type:
            - integer
            - 'null'
      type:
        - object
        - 'null'
    ChatStreamChoice:
      description: Streaming completion choice chunk
      example:
        delta:
          content: Hello
          role: assistant
        finish_reason: null
        index: 0
      properties:
        delta:
          $ref: '#/components/schemas/ChatStreamDelta'
        finish_reason:
          $ref: '#/components/schemas/ChatFinishReasonEnum'
        index:
          description: Choice index
          example: 0
          type: integer
        logprobs:
          $ref: '#/components/schemas/ChatTokenLogprobs'
      required:
        - delta
        - finish_reason
        - index
      type: object
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
    ChatAudioOutput:
      description: Audio output data or reference
      example:
        data: UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1f
        expires_at: 1677652400
        id: audio_abc123
        transcript: Hello! How can I help you today?
      properties:
        data:
          description: Base64 encoded audio data
          type: string
        expires_at:
          description: Audio expiration timestamp
          type: integer
        id:
          description: Audio output identifier
          type: string
        transcript:
          description: Audio transcript
          type: string
      type: object
    ChatContentItems:
      description: Content part for chat completion messages
      discriminator:
        mapping:
          file: '#/components/schemas/ChatContentFile'
          image_url: '#/components/schemas/ChatContentImage'
          input_audio: '#/components/schemas/ChatContentAudio'
          input_video: '#/components/schemas/Legacy_ChatContentVideo'
          text: '#/components/schemas/ChatContentText'
          video_url: '#/components/schemas/ChatContentVideo'
        propertyName: type
      example:
        text: Hello, world!
        type: text
      oneOf:
        - $ref: '#/components/schemas/ChatContentText'
        - $ref: '#/components/schemas/ChatContentImage'
        - $ref: '#/components/schemas/ChatContentAudio'
        - $ref: '#/components/schemas/Legacy_ChatContentVideo'
        - $ref: '#/components/schemas/ChatContentVideo'
        - $ref: '#/components/schemas/ChatContentFile'
    ChatAssistantImages:
      description: Generated images from image generation models
      example:
        - image_url:
            url: data:image/png;base64,iVBORw0KGgo...
      items:
        properties:
          image_url:
            properties:
              url:
                description: URL or base64-encoded data of the generated image
                type: string
            required:
              - url
            type: object
        required:
          - image_url
        type: object
      type: array
    ChatReasoningDetails:
      description: Reasoning details for extended thinking models
      example:
        - text: Let me work through this step by step...
          type: reasoning.text
      items:
        $ref: '#/components/schemas/ReasoningDetailUnion'
      type: array
    ChatToolCall:
      description: Tool call made by the assistant
      example:
        function:
          arguments: '{"location": "Boston, MA"}'
          name: get_current_weather
        id: call_abc123
        type: function
      properties:
        function:
          properties:
            arguments:
              description: Function arguments as JSON string
              type: string
            name:
              description: Function name to call
              type: string
          required:
            - name
            - arguments
          type: object
        id:
          description: Tool call identifier
          type: string
        type:
          enum:
            - function
          type: string
      required:
        - id
        - type
        - function
      type: object
    ConfigurationUpdate:
      additionalProperties: false
      description: >-
        Mid-conversation configuration update. Changes reasoning effort from
        this point onward without invalidating the prompt cache for the
        preceding turns.
      example:
        reasoning:
          effort: low
      properties:
        reasoning:
          $ref: '#/components/schemas/ConfigurationUpdateReasoning'
      required:
        - reasoning
      type: object
    ChatContentText:
      description: Text content part
      example:
        text: Hello, world!
        type: text
      properties:
        cache_control:
          $ref: '#/components/schemas/ChatContentCacheControl'
        prompt_cache_breakpoint:
          $ref: '#/components/schemas/PromptCacheBreakpoint'
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
    AdvisorServerToolConfig:
      description: Configuration for one openrouter:advisor server tool entry.
      example:
        model: ~anthropic/claude-opus-latest
        name: reviewer
      properties:
        forward_transcript:
          description: >-
            When true, the full parent conversation is forwarded to the advisor
            so it sees the same context the executor does (and the tool-call
            `prompt`, if given, is appended as a final user turn). When false or
            omitted, the advisor receives only the `prompt` the executor passes
            in the tool call.
          example: false
          type: boolean
        instructions:
          description: >-
            System instructions for the advisor sub-agent. When omitted, the
            advisor responds with no system prompt of its own.
          example: You are a senior staff engineer. Give a focused, decisive plan.
          type: string
        max_completion_tokens:
          description: >-
            Maximum number of output tokens (including reasoning) the advisor
            may produce. When omitted, the provider's default applies.
          example: 2048
          type: integer
        model:
          description: >-
            Slug of the advisor model to consult (any OpenRouter model). When
            omitted, the executor can choose it via the tool call's `model`
            argument; if neither is set, the model from the outer API request is
            used.
          example: ~anthropic/claude-opus-latest
          type: string
        name:
          description: >-
            Optional name for this advisor. The model sees one tool per named
            advisor (and one default for an unnamed entry). Names must be unique
            across advisor entries. Letters, digits, spaces, underscores, and
            dashes; trimmed; 1–64 chars.
          example: reviewer
          maxLength: 64
          minLength: 1
          pattern: ^[a-zA-Z0-9 _-]+$
          type: string
        reasoning:
          $ref: '#/components/schemas/AdvisorReasoning'
        stream:
          description: >-
            When true, the advisor's advice streams incrementally as it is
            produced. In the Responses API this emits
            `response.output_text.delta` events targeting the advisor output
            item; the final `advice` field is still set on the completed item.
            Has no effect on the Chat Completions API (where the advice arrives
            only as the final tool result). When false or omitted, the advice
            arrives only as the final result.
          example: false
          type: boolean
        temperature:
          description: >-
            Sampling temperature forwarded to the advisor call. When omitted,
            the provider's default applies.
          example: 0.7
          format: double
          type: number
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
    FilesServerToolConfig:
      description: Configuration for the openrouter:files server tool
      example: {}
      properties: {}
      type: object
    FusionServerToolConfig:
      description: Configuration for the openrouter:fusion server tool.
      example:
        analysis_models:
          - ~anthropic/claude-opus-latest
          - ~openai/gpt-sol-latest
          - ~google/gemini-pro-latest
      properties:
        analysis_models:
          description: >-
            Slugs of models to run in parallel as the analysis panel. Each model
            receives the user prompt with openrouter:web_search and
            openrouter:web_fetch enabled, then an analyst model summarizes the
            collective output into structured analysis JSON. Capped at 8 models
            to bound cost amplification. Defaults to the Quality preset from
            /labs/fusion.
          example:
            - ~anthropic/claude-opus-latest
            - ~openai/gpt-sol-latest
            - ~google/gemini-pro-latest
          items:
            type: string
          maxItems: 8
          minItems: 1
          type: array
        cache_control:
          $ref: '#/components/schemas/AnthropicCacheControlDirective'
        max_completion_tokens:
          description: >-
            Maximum number of output tokens (including reasoning tokens) each
            panelist and the analyst model may produce per inner call. Controls
            the total output budget so reasoning-heavy models like GPT-5.5 do
            not exhaust their token allowance before producing visible text.
            Defaults to 16000 when omitted.
          example: 16384
          type: integer
        max_tool_calls:
          description: >-
            Maximum number of tool-calling steps each panelist (analysis model)
            and the analyst model may take during their agentic web-research
            loop. Models with web_search/web_fetch enabled iterate until they
            produce a text response or hit this ceiling. Defaults to 4. Capped
            at 16.
          example: 12
          maximum: 16
          minimum: 1
          type: integer
        model:
          description: >-
            Slug of the analyst model that produces the structured analysis
            JSON. Defaults to the model used in the outer API request.
          example: ~anthropic/claude-opus-latest
          type: string
        reasoning:
          description: >-
            Reasoning configuration forwarded to panelist and analyst inner
            calls. Use this to control reasoning effort and token budget for
            models that support extended thinking.
          properties:
            effort:
              description: Reasoning effort level for panelist and analyst inner calls.
              enum:
                - max
                - xhigh
                - high
                - medium
                - low
                - minimal
                - none
              type: string
            max_tokens:
              description: >-
                Maximum number of reasoning tokens each panelist and analyst
                model may use. Helps bound cost when models allocate too much
                budget to chain-of-thought.
              type: integer
          type: object
        temperature:
          description: >-
            Temperature forwarded to panelist inner calls. The analyst always
            runs at temperature 0 regardless of this value. When omitted, the
            provider's default applies.
          example: 0.7
          format: double
          type: number
        tools:
          description: >-
            Server tools available to panelist and analyst inner calls. Each
            entry uses the same `{ type, parameters? }` shorthand as the outer
            Chat Completions request. When omitted, defaults to `[{ type:
            "openrouter:web_search" }, { type: "openrouter:web_fetch" }]`. Pass
            an empty array to disable tools entirely (panelists answer from
            parametric knowledge only).
          example:
            - parameters:
                excluded_domains:
                  - example.com
              type: openrouter:web_search
            - type: openrouter:web_fetch
          items:
            properties:
              parameters:
                additionalProperties: {}
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
    SubagentServerToolConfig:
      description: Configuration for one openrouter:subagent server tool entry.
      example:
        model: ~anthropic/claude-haiku-latest
        name: summarizer
      properties:
        inherit_functions:
          description: >-
            EXPERIMENTAL — subject to change without notice. When true, the
            subagent inherits every client function defined in the request's
            top-level `tools` list. Supported on the Responses API
            (`/api/v1/responses`) only; other APIs reject it with a `400`.
          example: true
          type: boolean
        inherited_function_names:
          description: >-
            EXPERIMENTAL — subject to change without notice. Names of the
            top-level function tools that the subagent will inherit. Any tool
            that matches by name will be copied fully into the tools array of
            the subagent. When `inherit_functions` is `true`, this list does
            nothing, because every client function will be inherited by default.
            Names are trimmed before validation, so a whitespace-only name is
            rejected with a `400`. Supported on the Responses API
            (`/api/v1/responses`) only; other APIs reject it with a `400`.
          example:
            - lookup_order
          items:
            minLength: 1
            type: string
          type: array
        instructions:
          description: >-
            System instructions for the subagent. When omitted, the subagent
            responds with no system prompt of its own.
          example: >-
            You are a fast, focused worker. Complete the task exactly as
            described.
          type: string
        max_completion_tokens:
          description: >-
            Maximum number of output tokens (including reasoning) the subagent
            may produce. When omitted, the provider's default applies.
          example: 2048
          type: integer
        max_tool_calls:
          description: >-
            Maximum number of tool-calling steps the subagent may take during
            its agentic loop. Capped at 25. Only relevant when the subagent is
            given tools. Forwarded to the subagent call as `max_tool_calls`.
          example: 5
          maximum: 25
          minimum: 1
          type: integer
        model:
          description: >-
            Slug of the model that executes delegated tasks (any OpenRouter
            model). Typically a smaller, cheaper, faster model than the one
            delegating. When omitted, the model from the outer API request is
            used. The subagent tool itself cannot be the subagent model.
          example: ~anthropic/claude-haiku-latest
          type: string
        name:
          description: >-
            Optional name for this subagent. The model sees one tool per named
            subagent (and one default for an unnamed entry). Names must be
            unique across subagent entries. Letters, digits, spaces,
            underscores, and dashes; trimmed; 1–64 chars.
          example: summarizer
          maxLength: 64
          minLength: 1
          pattern: ^[a-zA-Z0-9 _-]+$
          type: string
        reasoning:
          $ref: '#/components/schemas/SubagentReasoning'
        temperature:
          description: >-
            Sampling temperature forwarded to the subagent call. When omitted,
            the provider's default applies.
          example: 0.7
          format: double
          type: number
        tools:
          description: >-
            Tools the subagent may use while executing a delegated task. The
            subagent runs as an agentic sub-agent over these tools, then returns
            its outcome. Only OpenRouter server tools are supported — function
            tools are rejected — and the list must not include the subagent tool
            itself.
          items:
            $ref: '#/components/schemas/SubagentNestedTool'
          type: array
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
    AlignmentAllowedCallRecord:
      additionalProperties: false
      properties:
        call:
          description: >-
            Number of the record, from 1. A record is one evaluated assistant
            message; a model call of a server-tool loop that produces several
            messages has one record per message, and a retry continues the
            numbering.
          type: integer
        outcome:
          enum:
            - allowed
          type: string
        rules:
          description: One record per rule, in the order of `rules` in the request.
          items:
            $ref: '#/components/schemas/AlignmentRuleRecord'
          maxItems: 128
          minItems: 1
          type: array
      required:
        - call
        - outcome
        - rules
      type: object
    AlignmentBlockedCallRecord:
      additionalProperties: false
      properties:
        call:
          description: >-
            Number of the record, from 1. A record is one evaluated assistant
            message; a model call of a server-tool loop that produces several
            messages has one record per message, and a retry continues the
            numbering.
          type: integer
        outcome:
          enum:
            - blocked
          type: string
        rules:
          description: One record per rule, in the order of `rules` in the request.
          items:
            $ref: '#/components/schemas/AlignmentRuleRecord'
          maxItems: 128
          minItems: 1
          type: array
      required:
        - call
        - outcome
        - rules
      type: object
    AlignmentUnavailableCallRecord:
      additionalProperties: false
      properties:
        call:
          description: >-
            Number of the record, from 1. A record is one evaluated assistant
            message; a model call of a server-tool loop that produces several
            messages has one record per message, and a retry continues the
            numbering.
          type: integer
        outcome:
          enum:
            - unavailable
          type: string
        reason:
          enum:
            - cut
            - evaluator_error
            - malformed_answer
            - time_limit
          type: string
      required:
        - call
        - outcome
        - reason
      type: object
    ChatTokenLogprob:
      description: Token log probability information
      example:
        bytes: null
        logprob: -0.612345
        token: ' Hello'
        top_logprobs:
          - bytes: null
            logprob: -0.612345
            token: ' Hello'
      properties:
        bytes:
          description: UTF-8 bytes of the token
          items:
            type: integer
          type:
            - array
            - 'null'
        logprob:
          description: Log probability of the token
          format: double
          type: number
        token:
          description: The token
          type: string
        top_logprobs:
          description: Top alternative tokens with probabilities
          items:
            properties:
              bytes:
                items:
                  type: integer
                type:
                  - array
                  - 'null'
              logprob:
                format: double
                type: number
              token:
                type: string
            required:
              - token
              - logprob
              - bytes
            type: object
          type: array
      required:
        - token
        - logprob
        - bytes
        - top_logprobs
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
    ChatStreamDelta:
      description: Delta changes in streaming response
      example:
        content: Hello
        role: assistant
      properties:
        audio:
          allOf:
            - $ref: '#/components/schemas/ChatAudioOutput'
            - description: Audio output data
        content:
          description: Message content delta
          example: Hello
          type:
            - string
            - 'null'
        reasoning:
          description: Reasoning content delta
          example: I need to
          type:
            - string
            - 'null'
        reasoning_details:
          $ref: '#/components/schemas/ChatStreamReasoningDetails'
        refusal:
          description: Refusal message delta
          example: null
          type:
            - string
            - 'null'
        role:
          description: The role of the message author
          enum:
            - assistant
          example: assistant
          type: string
        tool_calls:
          description: Tool calls delta
          items:
            $ref: '#/components/schemas/ChatStreamToolCall'
          type: array
      type: object
    ChatContentFile:
      description: File content part for document processing
      example:
        file:
          file_data: https://example.com/document.pdf
          filename: document.pdf
        type: file
      properties:
        file:
          properties:
            file_data:
              description: File content as base64 data URL or URL
              type: string
            file_id:
              description: File ID for previously uploaded files
              type: string
            filename:
              description: Original filename
              type: string
          type: object
        type:
          enum:
            - file
          type: string
      required:
        - type
        - file
      type: object
    ChatContentImage:
      description: Image content part for vision models
      example:
        image_url:
          detail: auto
          url: https://example.com/image.jpg
        type: image_url
      properties:
        image_url:
          properties:
            detail:
              description: >-
                Image detail level for vision models. `original` is an
                OpenRouter extension (not in the OpenAI Chat Completions spec)
                requesting true original-resolution media; it is downgraded to
                `high` for providers that lack an original-resolution tier.
              enum:
                - auto
                - low
                - high
                - original
              type: string
            url:
              description: 'URL of the image (data: URLs supported)'
              type: string
          required:
            - url
          type: object
        type:
          enum:
            - image_url
          type: string
      required:
        - type
        - image_url
      type: object
    ChatContentAudio:
      description: Audio input content part. Supported audio formats vary by provider.
      example:
        input_audio:
          data: SGVsbG8gV29ybGQ=
          format: wav
        type: input_audio
      properties:
        input_audio:
          properties:
            data:
              description: Base64 encoded audio data
              type: string
            format:
              description: >-
                Audio format (e.g., wav, mp3, flac, m4a, ogg, aiff, aac, pcm16,
                pcm24). Supported formats vary by provider.
              type: string
          required:
            - data
            - format
          type: object
        type:
          enum:
            - input_audio
          type: string
      required:
        - type
        - input_audio
      type: object
    Legacy_ChatContentVideo:
      deprecated: true
      description: Video input content part (legacy format - deprecated)
      example:
        type: input_video
        video_url:
          url: https://example.com/video.mp4
      properties:
        type:
          enum:
            - input_video
          type: string
        video_url:
          $ref: '#/components/schemas/Legacy_ChatContentVideoInput'
      required:
        - type
        - video_url
      type: object
    ChatContentVideo:
      description: Video input content part
      example:
        type: video_url
        video_url:
          url: https://example.com/video.mp4
      properties:
        type:
          enum:
            - video_url
          type: string
        video_url:
          $ref: '#/components/schemas/ChatContentVideoInput'
      required:
        - type
        - video_url
      type: object
    ReasoningDetailUnion:
      description: Reasoning detail union schema
      discriminator:
        mapping:
          reasoning.encrypted: '#/components/schemas/ReasoningDetailEncrypted'
          reasoning.server_tool_call: '#/components/schemas/ReasoningDetailServerToolCall'
          reasoning.summary: '#/components/schemas/ReasoningDetailSummary'
          reasoning.text: '#/components/schemas/ReasoningDetailText'
        propertyName: type
      example:
        summary: >-
          The model analyzed the problem by first identifying key constraints,
          then evaluating possible solutions...
        type: reasoning.summary
      oneOf:
        - $ref: '#/components/schemas/ReasoningDetailSummary'
        - $ref: '#/components/schemas/ReasoningDetailEncrypted'
        - $ref: '#/components/schemas/ReasoningDetailText'
        - $ref: '#/components/schemas/ReasoningDetailServerToolCall'
    ConfigurationUpdateReasoning:
      additionalProperties: false
      description: Reasoning settings applied from this point in the conversation onward
      example:
        effort: low
      properties:
        effort:
          description: Reasoning effort to apply from this point in the conversation onward
          enum:
            - max
            - xhigh
            - high
            - medium
            - low
            - minimal
            - none
          example: low
          type: string
      required:
        - effort
      type: object
    PromptCacheBreakpoint:
      description: >-
        Marks an explicit prompt-cache boundary on this content block
        (OpenAI-style). Everything through the block carrying this marker is
        part of the candidate cached prefix. Supported natively by OpenAI
        GPT-5.6 and newer; on providers that use Anthropic-style
        `cache_control`, OpenRouter converts the marker to that format
        automatically. `ttl` ("30m" or "12h") overrides the request-level
        `prompt_cache_options.ttl` for this boundary; 12h writes bill at the
        higher cache-write rate.
      example:
        mode: explicit
        ttl: 30m
      properties:
        mode:
          enum:
            - explicit
          type: string
        ttl:
          type:
            - string
            - 'null'
      required:
        - mode
      type:
        - object
        - 'null'
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
    AdvisorReasoning:
      description: >-
        Reasoning configuration forwarded to the advisor call. Use this to
        control reasoning effort and token budget for models that support
        extended thinking.
      example:
        effort: high
      properties:
        effort:
          description: Reasoning effort level for the advisor call.
          enum:
            - max
            - xhigh
            - high
            - medium
            - low
            - minimal
            - none
          type: string
        max_tokens:
          description: Maximum number of reasoning tokens the advisor may use.
          type: integer
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
    SubagentReasoning:
      description: >-
        Reasoning configuration forwarded to the subagent call. Use this to
        control reasoning effort and token budget for models that support
        extended thinking.
      example:
        effort: low
      properties:
        effort:
          description: Reasoning effort level for the subagent call.
          enum:
            - max
            - xhigh
            - high
            - medium
            - low
            - minimal
            - none
          type: string
        max_tokens:
          description: >-
            Maximum number of reasoning tokens the subagent may use. Forwarded
            to the subagent call as `reasoning.max_tokens`.
          type: integer
      type: object
    SubagentNestedTool:
      additionalProperties: {}
      description: >-
        A tool made available to the subagent. Only OpenRouter server tools
        (e.g. openrouter:web_search) are supported; function tools are rejected
        because the worker has no way to execute them. The subagent tool may not
        list itself.
      example:
        type: openrouter:web_search
      properties:
        parameters:
          additionalProperties: {}
          type: object
        type:
          type: string
      required:
        - type
      type: object
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
    AlignmentRuleRecord:
      additionalProperties: false
      properties:
        applicable:
          description: >-
            Whether the message has a field the rule watches. Only an applicable
            rule is evaluated.
          type: boolean
        broken:
          description: >-
            Whether probability is at or above the threshold. False when the
            rule is not applicable.
          type: boolean
        probability:
          description: >-
            The evaluator's probability that the turn breaks the rule; null when
            the rule is not applicable.
          format: double
          type:
            - number
            - 'null'
      required:
        - applicable
        - probability
        - broken
      type: object
    ChatStreamReasoningDetails:
      description: Reasoning details for extended thinking models
      example:
        - text: Let me think about this...
          type: reasoning.text
      items:
        $ref: '#/components/schemas/ReasoningDetailUnion'
      type: array
    ChatStreamToolCall:
      description: Tool call delta for streaming responses
      example:
        function:
          arguments: '{"location": "..."}'
          name: get_weather
        id: call_abc123
        index: 0
        type: function
      properties:
        function:
          description: Function call details
          properties:
            arguments:
              description: Function arguments as JSON string
              example: '{"location": "..."}'
              type: string
            name:
              description: Function name
              example: get_weather
              type: string
          type: object
        id:
          description: Tool call identifier
          example: call_abc123
          type: string
        index:
          description: Tool call index in the array
          example: 0
          type: integer
        type:
          description: Tool call type
          enum:
            - function
          example: function
          type: string
      required:
        - index
      type: object
    Legacy_ChatContentVideoInput:
      description: Video input object
      example:
        url: https://example.com/video.mp4
      properties:
        processing:
          description: >-
            Video processing mode. `agentic` enables agentic video processing
            and `static` forces fixed-rate frame sampling on providers that
            support it (currently Google Gemini).
          enum:
            - agentic
            - static
          example: agentic
          type: string
        url:
          description: 'URL of the video (data: URLs supported)'
          type: string
      required:
        - url
      type: object
    ChatContentVideoInput:
      description: Video input object
      example:
        url: https://example.com/video.mp4
      properties:
        processing:
          description: >-
            Video processing mode. `agentic` enables agentic video processing
            and `static` forces fixed-rate frame sampling on providers that
            support it (currently Google Gemini).
          enum:
            - agentic
            - static
          example: agentic
          type: string
        url:
          description: 'URL of the video (data: URLs supported)'
          type: string
      required:
        - url
      type: object
    ReasoningDetailEncrypted:
      description: Reasoning detail encrypted schema
      example:
        data: encrypted data
        type: reasoning.encrypted
      properties:
        data:
          type: string
        format:
          $ref: '#/components/schemas/ReasoningFormat'
        id:
          type:
            - string
            - 'null'
        index:
          type: integer
        type:
          enum:
            - reasoning.encrypted
          type: string
      required:
        - type
        - data
      type: object
    ReasoningDetailServerToolCall:
      description: >-
        Record of an OpenRouter server-tool invocation (e.g. openrouter:fusion),
        carried in reasoning_details so a prior tool call can be rehydrated into
        a later turn of the same conversation.
      example:
        arguments: '{"prompt":"Compare carbon tax proposals"}'
        result: '{"status":"ok","models":["openai/gpt-4o"]}'
        tool_call_id: call_abc123
        tool_name: openrouter:fusion
        type: reasoning.server_tool_call
      properties:
        arguments:
          type: string
        format:
          $ref: '#/components/schemas/ReasoningFormat'
        id:
          type:
            - string
            - 'null'
        index:
          type: integer
        result:
          type: string
        tool_call_id:
          type:
            - string
            - 'null'
        tool_name:
          type: string
        type:
          enum:
            - reasoning.server_tool_call
          type: string
      required:
        - type
        - tool_name
        - arguments
        - result
      type: object
    ReasoningDetailSummary:
      description: Reasoning detail summary schema
      example:
        summary: >-
          The model analyzed the problem by first identifying key constraints,
          then evaluating possible solutions...
        type: reasoning.summary
      properties:
        format:
          $ref: '#/components/schemas/ReasoningFormat'
        id:
          type:
            - string
            - 'null'
        index:
          type: integer
        summary:
          type: string
        type:
          enum:
            - reasoning.summary
          type: string
      required:
        - type
        - summary
      type: object
    ReasoningDetailText:
      description: Reasoning detail text schema
      example:
        signature: signature
        text: >-
          The model analyzed the problem by first identifying key constraints,
          then evaluating possible solutions...
        type: reasoning.text
      properties:
        format:
          $ref: '#/components/schemas/ReasoningFormat'
        id:
          type:
            - string
            - 'null'
        index:
          type: integer
        signature:
          type:
            - string
            - 'null'
        text:
          type:
            - string
            - 'null'
        type:
          enum:
            - reasoning.text
          type: string
      required:
        - type
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
    ReasoningFormat:
      enum:
        - unknown
        - openai-responses-v1
        - azure-openai-responses-v1
        - bedrock-openai-responses-v1
        - bedrock-xai-responses-v1
        - xai-responses-v1
        - meta-responses-v1
        - openrouter-stealth-v1
        - anthropic-claude-v1
        - google-gemini-v1
        - null
      example: unknown
      type:
        - string
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
  securitySchemes:
    apiKey:
      description: API key as bearer token in Authorization header
      scheme: bearer
      type: http

````