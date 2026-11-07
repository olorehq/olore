> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Get request & usage metadata for a generation



## OpenAPI

````yaml /openapi/openapi.yaml get /generation
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
  /generation:
    get:
      tags:
        - Generations
      summary: Get request & usage metadata for a generation
      operationId: getGeneration
      parameters:
        - description: The generation ID
          in: query
          name: id
          required: true
          schema:
            description: The generation ID
            example: gen-1234567890
            maxLength: 128
            pattern: ^gen-[0-9A-Za-z-]+$
            type: string
      responses:
        '200':
          content:
            application/json:
              example:
                data:
                  api_type: completions
                  app_id: 12345
                  cache_discount: null
                  cancelled: false
                  created_at: '2024-07-15T23:33:19.433273+00:00'
                  data_region: global
                  external_user: user-123
                  finish_reason: stop
                  generation_time: 1200
                  http_referer: https://openrouter.ai/
                  id: gen-3bhGkxlo4XFrqiabUM7NDtwDzWwG
                  is_byok: false
                  latency: 1250
                  model: sao10k/l3-stheno-8b
                  moderation_latency: 50
                  native_finish_reason: stop
                  native_tokens_cached: 3
                  native_tokens_completion: 25
                  native_tokens_completion_images: 0
                  native_tokens_prompt: 10
                  native_tokens_reasoning: 5
                  num_fetches: 0
                  num_input_audio_prompt: 0
                  num_media_completion: 0
                  num_media_prompt: 1
                  num_search_results: 5
                  origin: https://openrouter.ai/
                  preset_id: a9e8d400-592a-494f-908c-375efa66cafd
                  provider_name: Infermatic
                  provider_responses: null
                  request_id: req-1727282430-aBcDeFgHiJkLmNoPqRsT
                  router: openrouter/auto
                  service_tier: priority
                  session_id: null
                  streamed: true
                  tokens_completion: 25
                  tokens_prompt: 10
                  total_cost: 0.0015
                  upstream_id: chatcmpl-791bcf62-080e-4568-87d0-94c72e3b4946
                  upstream_inference_cost: 0.0012
                  usage: 0.0015
                  user_agent: Mozilla/5.0
                  web_search_engine: exa
              schema:
                $ref: '#/components/schemas/GenerationResponse'
          description: Returns the request metadata for this generation
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
              example:
                error:
                  code: 403
                  message: Management key does not have permission for this request
              schema:
                $ref: '#/components/schemas/ForbiddenResponse'
          description: >-
            Forbidden - The management key does not have permission for this
            request
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
    GenerationResponse:
      description: Generation response
      example:
        data:
          api_type: completions
          app_id: 12345
          cache_discount: null
          cancelled: false
          created_at: '2024-07-15T23:33:19.433273+00:00'
          data_region: global
          external_user: user-123
          finish_reason: stop
          generation_time: 1200
          http_referer: https://openrouter.ai/
          id: gen-3bhGkxlo4XFrqiabUM7NDtwDzWwG
          is_byok: false
          latency: 1250
          model: sao10k/l3-stheno-8b
          moderation_latency: 50
          native_finish_reason: stop
          native_tokens_cached: 3
          native_tokens_completion: 25
          native_tokens_completion_images: 0
          native_tokens_prompt: 10
          native_tokens_reasoning: 5
          num_fetches: 0
          num_input_audio_prompt: 0
          num_media_completion: 0
          num_media_prompt: 1
          num_search_results: 5
          origin: https://openrouter.ai/
          preset_id: a9e8d400-592a-494f-908c-375efa66cafd
          provider_name: Infermatic
          provider_responses: null
          request_id: req-1727282430-aBcDeFgHiJkLmNoPqRsT
          router: openrouter/auto
          service_tier: priority
          session_id: null
          streamed: true
          tokens_completion: 25
          tokens_prompt: 10
          total_cost: 0.0015
          upstream_id: chatcmpl-791bcf62-080e-4568-87d0-94c72e3b4946
          upstream_inference_cost: 0.0012
          usage: 0.0015
          user_agent: Mozilla/5.0
          web_search_engine: exa
          workspace_id: 550e8400-e29b-41d4-a716-446655440000
      properties:
        data:
          description: Generation data
          properties:
            api_type:
              description: Type of API used for the generation
              enum:
                - completions
                - embeddings
                - rerank
                - decisions
                - extractions
                - video
                - tts
                - stt
                - image
                - tools_invoke
                - null
              type:
                - string
                - 'null'
            app_id:
              description: ID of the app that made the request
              example: 12345
              type:
                - integer
                - 'null'
            cache_discount:
              description: Discount applied due to caching
              example: 0.0002
              format: double
              type:
                - number
                - 'null'
            cancelled:
              description: Whether the generation was cancelled
              example: false
              type:
                - boolean
                - 'null'
            created_at:
              description: ISO 8601 timestamp of when the generation was created
              example: '2024-07-15T23:33:19.433273+00:00'
              type: string
            data_region:
              description: >-
                The data region this generation was routed through: 'global',
                'europe', or 'us'.
              enum:
                - global
                - europe
                - us
              example: global
              type: string
            external_user:
              description: External user identifier
              example: user-123
              type:
                - string
                - 'null'
            finish_reason:
              description: Reason the generation finished
              example: stop
              type:
                - string
                - 'null'
            generation_time:
              description: Time taken for generation in milliseconds
              example: 1200
              format: double
              type:
                - number
                - 'null'
            http_referer:
              description: Referer header from the request
              type:
                - string
                - 'null'
            id:
              description: Unique identifier for the generation
              example: gen-3bhGkxlo4XFrqiabUM7NDtwDzWwG
              type: string
            is_byok:
              description: Whether this used bring-your-own-key
              example: false
              type: boolean
            latency:
              description: Total latency in milliseconds
              example: 1250
              format: double
              type:
                - number
                - 'null'
            model:
              description: Model used for the generation
              example: sao10k/l3-stheno-8b
              type: string
            moderation_latency:
              description: Moderation latency in milliseconds
              example: 50
              format: double
              type:
                - number
                - 'null'
            native_finish_reason:
              description: Native finish reason as reported by provider
              example: stop
              type:
                - string
                - 'null'
            native_tokens_cached:
              description: Native cached tokens as reported by provider
              example: 3
              type:
                - integer
                - 'null'
            native_tokens_completion:
              description: Native completion tokens as reported by provider
              example: 25
              type:
                - integer
                - 'null'
            native_tokens_completion_images:
              description: Native completion image tokens as reported by provider
              example: 0
              type:
                - integer
                - 'null'
            native_tokens_prompt:
              description: Native prompt tokens as reported by provider
              example: 10
              type:
                - integer
                - 'null'
            native_tokens_reasoning:
              description: Native reasoning tokens as reported by provider
              example: 5
              type:
                - integer
                - 'null'
            num_fetches:
              description: Number of web fetches performed
              example: 0
              type:
                - integer
                - 'null'
            num_input_audio_prompt:
              description: Number of audio inputs in the prompt
              example: 0
              type:
                - integer
                - 'null'
            num_media_completion:
              description: Number of media items in the completion
              example: 0
              type:
                - integer
                - 'null'
            num_media_prompt:
              description: Number of media items in the prompt
              example: 1
              type:
                - integer
                - 'null'
            num_search_results:
              description: Number of search results included
              example: 5
              type:
                - integer
                - 'null'
            origin:
              description: Origin URL of the request
              example: https://openrouter.ai/
              type: string
            preset_id:
              description: >-
                ID of the preset used for this generation, null if no preset was
                used
              example: a9e8d400-592a-494f-908c-375efa66cafd
              type:
                - string
                - 'null'
            provider_name:
              description: Name of the provider that served the request
              example: Infermatic
              type:
                - string
                - 'null'
            provider_responses:
              description: >-
                List of provider responses for this generation, including
                fallback attempts
              items:
                $ref: '#/components/schemas/ProviderResponse'
              type:
                - array
                - 'null'
            request_id:
              description: >-
                Unique identifier grouping all generations from a single API
                request
              example: req-1727282430-aBcDeFgHiJkLmNoPqRsT
              type:
                - string
                - 'null'
            response_cache_source_id:
              description: >-
                If this generation was served from response cache, contains the
                original generation ID. Null otherwise.
              type:
                - string
                - 'null'
            router:
              description: Router used for the request (e.g., openrouter/auto)
              example: openrouter/auto
              type:
                - string
                - 'null'
            service_tier:
              description: >-
                Service tier the upstream provider reported running this request
                on, or null if it did not report one.
              example: priority
              type:
                - string
                - 'null'
            session_id:
              description: >-
                Session identifier grouping multiple generations in the same
                session
              type:
                - string
                - 'null'
            streamed:
              description: Whether the response was streamed
              example: true
              type:
                - boolean
                - 'null'
            tokens_completion:
              description: Number of tokens in the completion
              example: 25
              type:
                - integer
                - 'null'
            tokens_prompt:
              description: Number of tokens in the prompt
              example: 10
              type:
                - integer
                - 'null'
            total_cost:
              description: Total cost of the generation in USD
              example: 0.0015
              format: double
              type: number
            upstream_id:
              description: Upstream provider's identifier for this generation
              example: chatcmpl-791bcf62-080e-4568-87d0-94c72e3b4946
              type:
                - string
                - 'null'
            upstream_inference_cost:
              description: Cost charged by the upstream provider
              example: 0.0012
              format: double
              type:
                - number
                - 'null'
            usage:
              description: Usage amount in USD
              example: 0.0015
              format: double
              type: number
            user_agent:
              description: User-Agent header from the request
              type:
                - string
                - 'null'
            web_search_engine:
              description: >-
                The resolved web search engine used for this generation (e.g.
                exa, firecrawl, parallel)
              example: exa
              type:
                - string
                - 'null'
            workspace_id:
              description: >-
                ID of the workspace this generation is attributed to. Null for
                accounts without workspaces. Generations created before
                workspace resolution existed are attributed to the account
                default workspace.
              example: 550e8400-e29b-41d4-a716-446655440000
              type:
                - string
                - 'null'
          required:
            - id
            - upstream_id
            - total_cost
            - cache_discount
            - upstream_inference_cost
            - created_at
            - model
            - app_id
            - streamed
            - cancelled
            - provider_name
            - latency
            - moderation_latency
            - generation_time
            - finish_reason
            - service_tier
            - tokens_prompt
            - tokens_completion
            - native_tokens_prompt
            - native_tokens_completion
            - native_tokens_completion_images
            - native_tokens_reasoning
            - native_tokens_cached
            - num_media_prompt
            - num_input_audio_prompt
            - num_media_completion
            - num_search_results
            - num_fetches
            - web_search_engine
            - origin
            - usage
            - is_byok
            - native_finish_reason
            - external_user
            - api_type
            - preset_id
            - router
            - provider_responses
            - user_agent
            - http_referer
            - data_region
            - workspace_id
          type: object
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
    ProviderResponse:
      description: Details of a provider response for a generation attempt
      example:
        endpoint_id: ep_abc123
        id: chatcmpl-abc123
        is_byok: false
        latency: 1200
        model_permaslug: openai/gpt-4
        provider_name: OpenAI
        status: 200
      properties:
        endpoint_id:
          description: Internal endpoint identifier
          example: ep_abc123
          type: string
        id:
          description: Upstream provider response identifier
          example: chatcmpl-abc123
          type: string
        is_byok:
          description: Whether the request used a bring-your-own-key
          example: false
          type: boolean
        latency:
          description: Response latency in milliseconds
          example: 1200
          format: double
          type: number
        model_permaslug:
          description: Canonical model slug
          example: openai/gpt-4
          type: string
        provider_name:
          description: Name of the provider
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
          example: OpenAI
          type: string
          x-speakeasy-unknown-values: allow
        routed_service_tier:
          description: >-
            The service tier this request was routed to (e.g. flex, priority).
            The tier actually applied and billed is determined by the provider
            response and may differ.
          enum:
            - flex
            - priority
            - ultrafast
          example: priority
          type: string
        status:
          description: HTTP status code from the provider
          example: 200
          type:
            - integer
            - 'null'
      required:
        - status
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
  securitySchemes:
    apiKey:
      description: API key as bearer token in Authorization header
      scheme: bearer
      type: http

````