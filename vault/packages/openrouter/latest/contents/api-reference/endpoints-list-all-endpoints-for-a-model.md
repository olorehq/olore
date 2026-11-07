> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# List all endpoints for a model



## OpenAPI

````yaml /openapi/openapi.yaml get /models/{author}/{slug}/endpoints
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
  /models/{author}/{slug}/endpoints:
    get:
      tags:
        - Endpoints
      summary: List all endpoints for a model
      operationId: listEndpoints
      parameters:
        - description: The author/organization of the model
          in: path
          name: author
          required: true
          schema:
            description: The author/organization of the model
            example: openai
            type: string
        - description: The model slug
          in: path
          name: slug
          required: true
          schema:
            description: The model slug
            example: gpt-4
            type: string
      responses:
        '200':
          content:
            application/json:
              example:
                data:
                  architecture:
                    input_modalities:
                      - text
                    instruct_type: chatml
                    modality: text->text
                    output_modalities:
                      - text
                    tokenizer: GPT
                  created: 1692901234
                  description: GPT-4 is a large multimodal model.
                  endpoints: []
                  id: openai/gpt-4
                  name: GPT-4
              schema:
                example:
                  data:
                    architecture:
                      input_modalities:
                        - text
                      instruct_type: chatml
                      modality: text->text
                      output_modalities:
                        - text
                      tokenizer: GPT
                    created: 1692901234
                    description: >-
                      GPT-4 is a large multimodal model that can solve difficult
                      problems with greater accuracy.
                    endpoints:
                      - context_length: 8192
                        latency_last_30m:
                          p50: 0.25
                          p75: 0.35
                          p90: 0.48
                          p99: 0.85
                        max_completion_tokens: 4096
                        max_prompt_tokens: 8192
                        model_id: openai/gpt-4
                        model_name: GPT-4
                        name: 'OpenAI: GPT-4'
                        native_tools: {}
                        pricing:
                          completion: '0.00006'
                          image: '0'
                          prompt: '0.00003'
                          request: '0'
                        provider_name: OpenAI
                        quantization: fp16
                        status: 0
                        supported_parameters:
                          - temperature
                          - top_p
                          - max_tokens
                        supports_diarization: false
                        supports_implicit_caching: true
                        tag: openai
                        throughput_last_30m:
                          p50: 45.2
                          p75: 38.5
                          p90: 28.3
                          p99: 15.1
                        uptime_last_1d: 99.8
                        uptime_last_30m: 99.5
                        uptime_last_5m: 100
                    id: openai/gpt-4
                    name: GPT-4
                properties:
                  data:
                    $ref: '#/components/schemas/ListEndpointsResponse'
                required:
                  - data
                type: object
          description: Returns a list of endpoints
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
components:
  schemas:
    ListEndpointsResponse:
      description: List of available endpoints for a model
      example:
        architecture:
          input_modalities:
            - text
          instruct_type: chatml
          modality: text->text
          output_modalities:
            - text
          tokenizer: GPT
        created: 1692901234
        description: >-
          GPT-4 is a large multimodal model that can solve difficult problems
          with greater accuracy.
        endpoints:
          - context_length: 8192
            latency_last_30m:
              p50: 0.25
              p75: 0.35
              p90: 0.48
              p99: 0.85
            max_completion_tokens: 4096
            max_prompt_tokens: 8192
            model_id: openai/gpt-4
            model_name: GPT-4
            name: 'OpenAI: GPT-4'
            pricing:
              completion: '0.00006'
              image: '0'
              prompt: '0.00003'
              request: '0'
            provider_name: OpenAI
            quantization: fp16
            status: 0
            supported_parameters:
              - temperature
              - top_p
              - max_tokens
              - frequency_penalty
              - presence_penalty
            supports_diarization: false
            supports_implicit_caching: true
            tag: openai
            throughput_last_30m:
              p50: 45.2
              p75: 38.5
              p90: 28.3
              p99: 15.1
            uptime_last_1d: 99.8
            uptime_last_30m: 99.5
            uptime_last_5m: 100
        id: openai/gpt-4
        name: GPT-4
      properties:
        architecture:
          allOf:
            - $ref: '#/components/schemas/ModelArchitecture'
            - properties:
                input_modalities:
                  description: Supported input modalities
                  items:
                    $ref: '#/components/schemas/InputModality'
                  type: array
                instruct_type:
                  $ref: '#/components/schemas/InstructType'
                modality:
                  description: Primary modality of the model
                  example: text
                  type:
                    - string
                    - 'null'
                output_modalities:
                  description: Supported output modalities
                  items:
                    $ref: '#/components/schemas/OutputModality'
                  type: array
                tokenizer:
                  anyOf:
                    - $ref: '#/components/schemas/ModelGroup'
                    - type: 'null'
              required:
                - tokenizer
                - instruct_type
                - modality
                - input_modalities
                - output_modalities
        created:
          description: Unix timestamp of when the model was created
          example: 1692901234
          type: integer
        description:
          description: Description of the model
          example: >-
            GPT-4 is a large multimodal model that can solve difficult problems
            with greater accuracy.
          type: string
        endpoints:
          description: List of available endpoints for this model
          items:
            $ref: '#/components/schemas/PublicEndpoint'
          type: array
        id:
          description: Unique identifier for the model
          example: openai/gpt-4
          type: string
        name:
          description: Display name of the model
          example: GPT-4
          type: string
      required:
        - id
        - name
        - created
        - description
        - architecture
        - endpoints
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
    ModelArchitecture:
      description: Model architecture information
      example:
        input_modalities:
          - text
        instruct_type: chatml
        modality: text->text
        output_modalities:
          - text
        tokenizer: GPT
      properties:
        input_modalities:
          description: Supported input modalities
          items:
            $ref: '#/components/schemas/InputModality'
          type: array
        instruct_type:
          $ref: '#/components/schemas/InstructType'
        modality:
          description: Primary modality of the model
          example: text->text
          type:
            - string
            - 'null'
        output_modalities:
          description: Supported output modalities
          items:
            $ref: '#/components/schemas/OutputModality'
          type: array
        tokenizer:
          $ref: '#/components/schemas/ModelGroup'
      required:
        - modality
        - input_modalities
        - output_modalities
      type: object
    InputModality:
      enum:
        - text
        - image
        - file
        - audio
        - video
      example: text
      type: string
    InstructType:
      description: Instruction format type
      enum:
        - none
        - airoboros
        - alpaca
        - alpaca-modif
        - chatml
        - claude
        - code-llama
        - gemma
        - llama2
        - llama3
        - mistral
        - nemotron
        - neural
        - openchat
        - phi3
        - rwkv
        - vicuna
        - zephyr
        - deepseek-r1
        - deepseek-v3.1
        - qwq
        - qwen3
        - null
      example: chatml
      type:
        - string
        - 'null'
    OutputModality:
      enum:
        - text
        - image
        - embeddings
        - audio
        - video
        - rerank
        - decisions
        - speech
        - transcription
      example: text
      type: string
    ModelGroup:
      description: Tokenizer type used by the model
      enum:
        - Router
        - Media
        - Other
        - GPT
        - Claude
        - Gemini
        - Gemma
        - Grok
        - Cohere
        - Nova
        - Qwen
        - Yi
        - DeepSeek
        - Mistral
        - Llama2
        - Llama3
        - Llama4
        - PaLM
        - RWKV
        - Qwen3
      example: GPT
      type: string
    PublicEndpoint:
      description: Information about a specific model endpoint
      example:
        context_length: 8192
        latency_last_30m:
          p50: 0.25
          p75: 0.35
          p90: 0.48
          p99: 0.85
        max_completion_tokens: 4096
        max_prompt_tokens: 8192
        model_id: openai/gpt-4
        model_name: GPT-4
        name: 'OpenAI: GPT-4'
        native_tools:
          openrouter:web_search:
            type: web_search_20260209
        perf_last_30m_by_workload:
          text_generation:
            latency:
              p50: 250
              p75: 350
              p90: 480
              p99: 850
            request_count: 1000
            throughput:
              p50: 45.2
              p75: 38.5
              p90: 28.3
              p99: 15.1
        pricing:
          completion: '0.00006'
          image: '0'
          prompt: '0.00003'
          request: '0'
        provider_name: OpenAI
        quantization: fp16
        service_tier: null
        status: 0
        supported_parameters:
          - temperature
          - top_p
          - max_tokens
        supports_diarization: false
        supports_image_reference: false
        supports_implicit_caching: true
        supports_multiple_audio_references: false
        supports_tool_choice:
          auto: true
          function: true
          none: true
          required: true
        supports_voice_cloning: false
        tag: openai
        throughput_last_30m:
          p50: 45.2
          p75: 38.5
          p90: 28.3
          p99: 15.1
        uptime_last_1d: 99.8
        uptime_last_30m: 99.5
        uptime_last_5m: 100
      properties:
        context_length:
          type: integer
        latency_last_30m:
          $ref: '#/components/schemas/PercentileStats'
        max_completion_tokens:
          description: >-
            Maximum completion tokens for this endpoint. Input and output tokens
            share the context window, so the effective maximum output for a
            request is further limited by the context remaining after input
            tokens.
          type:
            - integer
            - 'null'
        max_prompt_tokens:
          type:
            - integer
            - 'null'
        model_id:
          description: The unique identifier for the model (permaslug)
          example: openai/gpt-4
          type: string
        model_name:
          type: string
        name:
          type: string
        native_tools:
          additionalProperties:
            $ref: '#/components/schemas/NativeTools'
          description: >-
            The server tools this endpoint accepts as the provider's own
            built-in tool (`engine: "native"`) instead of an OpenRouter engine,
            keyed by canonical `openrouter:*` name. Each value names the
            provider tool type the request is translated to. Where that tool
            runs (provider-side, or returned to the client as with Anthropic
            bash) is documented per tool. Empty when the provider has none.
          example:
            openrouter:web_search:
              type: web_search_20260209
          type: object
        perf_last_30m_by_workload:
          $ref: '#/components/schemas/PerfLast30mByWorkload'
        pricing:
          $ref: '#/components/schemas/Pricing'
        provider_name:
          $ref: '#/components/schemas/ProviderName'
        quantization:
          anyOf:
            - $ref: '#/components/schemas/Quantization'
            - type: 'null'
        service_tier:
          $ref: '#/components/schemas/PublicServiceTier'
        status:
          $ref: '#/components/schemas/EndpointStatus'
        supported_parameters:
          items:
            $ref: '#/components/schemas/Parameter'
          type: array
        supports_diarization:
          description: >-
            Whether this STT endpoint can label each transcript segment with a
            speaker (speaker diarization). False when the endpoint has not
            declared support.
          type: boolean
        supports_image_reference:
          default: false
          description: >-
            Whether this TTS endpoint accepts an `image_url` reference
            describing the desired voice. Requests carrying an image reference
            are only routed to endpoints where this is true.
          type: boolean
        supports_implicit_caching:
          type: boolean
        supports_multiple_audio_references:
          default: false
          description: >-
            Whether this TTS endpoint accepts more than one `input_audio`
            reference clip per request. Requests carrying several clips are only
            routed to endpoints where this is true.
          type: boolean
        supports_tool_choice:
          $ref: '#/components/schemas/ToolChoiceSupport'
        supports_voice_cloning:
          default: false
          description: >-
            Whether this TTS endpoint accepts inline reference audio
            (`input_references`) for stateless voice cloning. Requests carrying
            reference audio are only routed to endpoints where this is true.
          type: boolean
        tag:
          type: string
        throughput_last_30m:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Throughput percentiles in tokens per second over the last 30
                minutes. Throughput measures output token generation speed; pN
                is the speed that N% of requests reached or exceeded, so p90 is
                lower than p50. Only visible when authenticated with an API key
                or cookie; returns null for unauthenticated requests.
        uptime_last_1d:
          description: >-
            Uptime percentage over the last day: the share of minutes in which
            at least 80% of provider attempts succeeded, counting only minutes
            with 10 or more attempts. Rate-limited and caller-caused failures
            are excluded. Null when no minute had enough traffic.
          format: double
          type:
            - number
            - 'null'
        uptime_last_30m:
          format: double
          type:
            - number
            - 'null'
        uptime_last_5m:
          description: >-
            Uptime percentage over the last 5 minutes: the share of minutes in
            which at least 80% of provider attempts succeeded, counting only
            minutes with 10 or more attempts. Rate-limited and caller-caused
            failures are excluded. Null when no minute had enough traffic.
          format: double
          type:
            - number
            - 'null'
      required:
        - name
        - model_id
        - model_name
        - context_length
        - pricing
        - provider_name
        - tag
        - service_tier
        - quantization
        - max_completion_tokens
        - max_prompt_tokens
        - supported_parameters
        - supports_tool_choice
        - uptime_last_30m
        - uptime_last_5m
        - uptime_last_1d
        - supports_implicit_caching
        - native_tools
        - supports_diarization
        - latency_last_30m
        - throughput_last_30m
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
    PercentileStats:
      description: >-
        Latency percentiles in milliseconds over the last 30 minutes. Latency
        measures time to first token. Only visible when authenticated with an
        API key or cookie; returns null for unauthenticated requests.
      example:
        p50: 25.5
        p75: 35.2
        p90: 48.7
        p99: 85.3
      properties:
        p50:
          description: Median (50th percentile)
          example: 25.5
          format: double
          type: number
        p75:
          description: 75th percentile
          example: 35.2
          format: double
          type: number
        p90:
          description: 90th percentile
          example: 48.7
          format: double
          type: number
        p99:
          description: 99th percentile
          example: 85.3
          format: double
          type: number
      required:
        - p50
        - p75
        - p90
        - p99
      type:
        - object
        - 'null'
    NativeTools:
      properties:
        type:
          description: >-
            The provider tool type the request is translated to when this tool
            runs natively, e.g. `web_search_20260209` on Anthropic or
            `google_search` on Gemini.
          type: string
      required:
        - type
      type: object
    PerfLast30mByWorkload:
      additionalProperties: false
      description: >-
        Endpoint performance over the last 30 minutes, keyed by the kind of
        request served (e.g. `text_generation`, `image_generation`). Additive to
        the legacy singular latency and throughput fields; image and video
        generation report end-to-end latency. Only visible when authenticated
        with an API key or cookie.
      properties:
        decisions:
          $ref: '#/components/schemas/Decisions'
        embeddings:
          $ref: '#/components/schemas/Embeddings'
        extractions:
          $ref: '#/components/schemas/Extractions'
        image_generation:
          $ref: '#/components/schemas/ImageGeneration'
        rerank:
          $ref: '#/components/schemas/Rerank'
        stt:
          $ref: '#/components/schemas/STT'
        text_generation:
          $ref: '#/components/schemas/TextGeneration'
        tts:
          $ref: '#/components/schemas/TTS'
        unknown:
          $ref: '#/components/schemas/Unknown'
        video_generation:
          $ref: '#/components/schemas/VideoGeneration'
      type: object
    Pricing:
      properties:
        audio:
          description: Price in USD per audio input token
          type: string
        audio_output:
          description: Price in USD per audio output token
          type: string
        completion:
          description: Price in USD per token for completion (output) generation
          type: string
        discount:
          description: >-
            Fractional discount applied to this endpoint's pricing; the price is
            multiplied by (1 - discount) (0 = no discount, 1 = free)
          format: double
          type: number
        image:
          description: Price in USD per input image
          type: string
        image_output:
          description: Price in USD per output image
          type: string
        image_token:
          description: Price in USD per image token
          type: string
        input_audio_cache:
          description: Price in USD per cached audio input token
          type: string
        input_cache_read:
          description: Price in USD per cached input token (read)
          type: string
        input_cache_write:
          description: >-
            Price per cache-write token, in USD per token. For providers with
            multiple cache TTLs (e.g. Anthropic), this is the default (5-minute)
            cache-write rate.
          type: string
        input_cache_write_1h:
          description: >-
            Price per 1-hour cache-write token, in USD per token. Only present
            for providers that price an extended (1-hour) cache TTL separately,
            such as Anthropic.
          type: string
        internal_reasoning:
          description: Price in USD per internal reasoning token
          type: string
        overrides:
          description: >-
            Conditional overrides of the base pricing (e.g. long-context or
            time-based pricing). An entry applies when all of its condition
            fields (e.g. min_prompt_tokens, or the utc_start/utc_end time
            window) match the request; among applicable entries, later entries
            win per key; price keys absent from an entry inherit the base price.
            The top-level pricing keys always reflect the price that applies
            under default conditions.
          items:
            $ref: '#/components/schemas/PricingOverride'
          type: array
        prompt:
          description: Price in USD per token for prompt (input) processing
          type: string
        request:
          description: Price in USD per request
          type: string
        web_search:
          description: Price in USD per web search
          type: string
      required:
        - prompt
        - completion
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
    PublicServiceTier:
      description: >-
        The service tier this endpoint sells, or null for a standard endpoint.
        The same value whether the provider selects the tier with a request
        parameter or with a dedicated model id. Always the canonical tier:
        priority covers the fast request alias and the turbo, highspeed, and
        prime provider model-id spellings, none of which this field reports.
      enum:
        - flex
        - priority
        - ultrafast
        - null
      example: priority
      type:
        - string
        - 'null'
    EndpointStatus:
      enum:
        - 0
        - -1
        - -2
        - -3
        - -5
        - -10
      example: 0
      type: integer
    Parameter:
      enum:
        - temperature
        - top_p
        - top_k
        - min_p
        - top_a
        - frequency_penalty
        - presence_penalty
        - repetition_penalty
        - max_tokens
        - max_completion_tokens
        - logit_bias
        - logprobs
        - top_logprobs
        - prediction
        - seed
        - response_format
        - structured_outputs
        - stop
        - tools
        - tool_choice
        - parallel_tool_calls
        - include_reasoning
        - reasoning
        - reasoning_effort
        - web_search_options
        - verbosity
      example: temperature
      type: string
    ToolChoiceSupport:
      description: >-
        Per-variant `tool_choice` support. `tool_choice` in
        `supported_parameters` only says the parameter is accepted; these flags
        say which of its values passed testing.
      example:
        auto: true
        function: true
        none: true
        required: true
      properties:
        auto:
          description: 'Whether the endpoint supports `"tool_choice": "auto"`.'
          type: boolean
        function:
          description: >-
            Whether the endpoint supports naming a function, `"tool_choice":
            {"type": "function", ...}`.
          type: boolean
        none:
          description: 'Whether the endpoint supports `"tool_choice": "none"`.'
          type: boolean
        required:
          description: 'Whether the endpoint supports `"tool_choice": "required"`.'
          type: boolean
      required:
        - none
        - auto
        - required
        - function
      type: object
    Decisions:
      properties:
        latency:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Latency percentiles in milliseconds for this workload. Image and
                video generation report full end-to-end generation time, because
                their raw latency only measures request acknowledgement; every
                other workload reports time to first token or result.
        request_count:
          description: Total requests admitted for this workload in the window.
          type:
            - integer
            - 'null'
        throughput:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Throughput percentiles in tokens per second; pN is the speed
                that N% of requests reached or exceeded, so p90 is lower than
                p50. Only meaningful for text generation; null for workloads
                without token throughput.
      required:
        - latency
        - throughput
        - request_count
      type: object
    Embeddings:
      properties:
        latency:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Latency percentiles in milliseconds for this workload. Image and
                video generation report full end-to-end generation time, because
                their raw latency only measures request acknowledgement; every
                other workload reports time to first token or result.
        request_count:
          description: Total requests admitted for this workload in the window.
          type:
            - integer
            - 'null'
        throughput:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Throughput percentiles in tokens per second; pN is the speed
                that N% of requests reached or exceeded, so p90 is lower than
                p50. Only meaningful for text generation; null for workloads
                without token throughput.
      required:
        - latency
        - throughput
        - request_count
      type: object
    Extractions:
      properties:
        latency:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Latency percentiles in milliseconds for this workload. Image and
                video generation report full end-to-end generation time, because
                their raw latency only measures request acknowledgement; every
                other workload reports time to first token or result.
        request_count:
          description: Total requests admitted for this workload in the window.
          type:
            - integer
            - 'null'
        throughput:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Throughput percentiles in tokens per second; pN is the speed
                that N% of requests reached or exceeded, so p90 is lower than
                p50. Only meaningful for text generation; null for workloads
                without token throughput.
      required:
        - latency
        - throughput
        - request_count
      type: object
    ImageGeneration:
      properties:
        latency:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Latency percentiles in milliseconds for this workload. Image and
                video generation report full end-to-end generation time, because
                their raw latency only measures request acknowledgement; every
                other workload reports time to first token or result.
        request_count:
          description: Total requests admitted for this workload in the window.
          type:
            - integer
            - 'null'
        throughput:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Throughput percentiles in tokens per second; pN is the speed
                that N% of requests reached or exceeded, so p90 is lower than
                p50. Only meaningful for text generation; null for workloads
                without token throughput.
      required:
        - latency
        - throughput
        - request_count
      type: object
    Rerank:
      properties:
        latency:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Latency percentiles in milliseconds for this workload. Image and
                video generation report full end-to-end generation time, because
                their raw latency only measures request acknowledgement; every
                other workload reports time to first token or result.
        request_count:
          description: Total requests admitted for this workload in the window.
          type:
            - integer
            - 'null'
        throughput:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Throughput percentiles in tokens per second; pN is the speed
                that N% of requests reached or exceeded, so p90 is lower than
                p50. Only meaningful for text generation; null for workloads
                without token throughput.
      required:
        - latency
        - throughput
        - request_count
      type: object
    STT:
      properties:
        latency:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Latency percentiles in milliseconds for this workload. Image and
                video generation report full end-to-end generation time, because
                their raw latency only measures request acknowledgement; every
                other workload reports time to first token or result.
        request_count:
          description: Total requests admitted for this workload in the window.
          type:
            - integer
            - 'null'
        throughput:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Throughput percentiles in tokens per second; pN is the speed
                that N% of requests reached or exceeded, so p90 is lower than
                p50. Only meaningful for text generation; null for workloads
                without token throughput.
      required:
        - latency
        - throughput
        - request_count
      type: object
    TextGeneration:
      properties:
        latency:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Latency percentiles in milliseconds for this workload. Image and
                video generation report full end-to-end generation time, because
                their raw latency only measures request acknowledgement; every
                other workload reports time to first token or result.
        request_count:
          description: Total requests admitted for this workload in the window.
          type:
            - integer
            - 'null'
        throughput:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Throughput percentiles in tokens per second; pN is the speed
                that N% of requests reached or exceeded, so p90 is lower than
                p50. Only meaningful for text generation; null for workloads
                without token throughput.
      required:
        - latency
        - throughput
        - request_count
      type: object
    TTS:
      properties:
        latency:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Latency percentiles in milliseconds for this workload. Image and
                video generation report full end-to-end generation time, because
                their raw latency only measures request acknowledgement; every
                other workload reports time to first token or result.
        request_count:
          description: Total requests admitted for this workload in the window.
          type:
            - integer
            - 'null'
        throughput:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Throughput percentiles in tokens per second; pN is the speed
                that N% of requests reached or exceeded, so p90 is lower than
                p50. Only meaningful for text generation; null for workloads
                without token throughput.
      required:
        - latency
        - throughput
        - request_count
      type: object
    Unknown:
      properties:
        latency:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Latency percentiles in milliseconds for this workload. Image and
                video generation report full end-to-end generation time, because
                their raw latency only measures request acknowledgement; every
                other workload reports time to first token or result.
        request_count:
          description: Total requests admitted for this workload in the window.
          type:
            - integer
            - 'null'
        throughput:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Throughput percentiles in tokens per second; pN is the speed
                that N% of requests reached or exceeded, so p90 is lower than
                p50. Only meaningful for text generation; null for workloads
                without token throughput.
      required:
        - latency
        - throughput
        - request_count
      type: object
    VideoGeneration:
      properties:
        latency:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Latency percentiles in milliseconds for this workload. Image and
                video generation report full end-to-end generation time, because
                their raw latency only measures request acknowledgement; every
                other workload reports time to first token or result.
        request_count:
          description: Total requests admitted for this workload in the window.
          type:
            - integer
            - 'null'
        throughput:
          allOf:
            - $ref: '#/components/schemas/PercentileStats'
            - description: >-
                Throughput percentiles in tokens per second; pN is the speed
                that N% of requests reached or exceeded, so p90 is lower than
                p50. Only meaningful for text generation; null for workloads
                without token throughput.
      required:
        - latency
        - throughput
        - request_count
      type: object
    PricingOverride:
      description: >-
        A conditional override of the base pricing. An entry applies only when
        all of its condition fields (e.g. min_prompt_tokens, or the
        utc_start/utc_end time window) match the request; among applicable
        entries, later entries win per price key; price keys absent from an
        entry inherit the base price.
      example:
        completion: '0.00002'
        min_prompt_tokens: 200000
        prompt: '0.000005'
      properties:
        audio:
          description: Overridden price in USD per audio input token
          type: string
        completion:
          description: Overridden price in USD per token for completion (output) generation
          type: string
        input_audio_cache:
          description: Overridden price in USD per cached audio input token
          type: string
        input_cache_read:
          description: Overridden price in USD per cached input token (read)
          type: string
        input_cache_write:
          description: Overridden price in USD per cache-write token
          type: string
        input_cache_write_1h:
          description: Overridden price in USD per 1-hour cache-write token
          type: string
        min_prompt_tokens:
          description: >-
            Condition: the entry applies when the total prompt tokens of a
            request are strictly greater than this threshold
          format: double
          type: number
        prompt:
          description: Overridden price in USD per token for prompt (input) processing
          type: string
        utc_days:
          description: >-
            Condition: UTC weekdays the entry applies on, evaluated at the
            request instant. Scopes the utc_start/utc_end window (or, without a
            window, the whole UTC day) to the listed days. Absent means every
            day.
          items:
            enum:
              - monday
              - tuesday
              - wednesday
              - thursday
              - friday
              - saturday
              - sunday
            type: string
          minItems: 1
          type: array
        utc_end:
          description: >-
            Condition: exclusive end of a daily UTC time window as an HHMM clock
            number (e.g. 400 = 04:00)
          format: double
          type: number
        utc_start:
          description: >-
            Condition: inclusive start of a daily UTC time window as an HHMM
            clock number (e.g. 100 = 01:00, 1030 = 10:30). The entry applies
            while the current UTC time is inside the half-open window
            [utc_start, utc_end), which may wrap past midnight (utc_start >
            utc_end).
          format: double
          type: number
      type: object
  securitySchemes:
    apiKey:
      description: API key as bearer token in Authorization header
      scheme: bearer
      type: http

````