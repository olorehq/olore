> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Upload a file

> Uploads a file to be referenced in future API calls. The file is stored under the workspace of the authenticating API key. Maximum file size: 100 MB; empty files are rejected. The file type is determined from the file contents — not the filename or the declared content type — and must be a PDF, a PNG/JPEG/GIF/WebP image, a DOCX/XLSX/PPTX document, an MP3/WAV/FLAC/OGG audio file, or UTF-8 text. Text is reported by its structure as `application/json`, `application/x-ndjson`, `text/csv`, `text/markdown`, or `text/plain`.



## OpenAPI

````yaml /openapi/openapi.yaml post /files
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
  /files:
    post:
      tags:
        - Files
      summary: Upload a file
      description: >-
        Uploads a file to be referenced in future API calls. The file is stored
        under the workspace of the authenticating API key. Maximum file size:
        100 MB; empty files are rejected. The file type is determined from the
        file contents — not the filename or the declared content type — and must
        be a PDF, a PNG/JPEG/GIF/WebP image, a DOCX/XLSX/PPTX document, an
        MP3/WAV/FLAC/OGG audio file, or UTF-8 text. Text is reported by its
        structure as `application/json`, `application/x-ndjson`, `text/csv`,
        `text/markdown`, or `text/plain`.
      operationId: uploadFile
      parameters:
        - description: >-
            Workspace to scope the request to. Defaults to the caller’s default
            workspace.
          in: query
          name: workspace_id
          required: false
          schema:
            description: >-
              Workspace to scope the request to. Defaults to the caller’s
              default workspace.
            example: a103d8b6-42f0-4e50-9a3c-bf41e2c3c1a7
            format: uuid
            type: string
        - description: >-
            Store or read this file on the named provider using your own API key
            for it. Omit to use OpenRouter storage.
          example: openai
          in: query
          name: provider
          required: false
          schema:
            $ref: '#/components/schemas/FileProvider'
      requestBody:
        content:
          multipart/form-data:
            example:
              file: document.pdf
            schema:
              properties:
                file:
                  format: binary
                  type: string
              required:
                - file
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              example:
                created_at: '2025-01-01T00:00:00Z'
                downloadable: false
                filename: document.pdf
                id: or_file_011CNha8iCJcU1wXNR6q4V8w
                mime_type: application/pdf
                size_bytes: 1024000
                type: file
              schema:
                $ref: '#/components/schemas/FileResponse'
          description: The uploaded file metadata.
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
        '499':
          content:
            application/json:
              example:
                error:
                  code: 499
                  message: The request was cancelled.
              schema:
                $ref: '#/components/schemas/ClientClosedRequestResponse'
          description: Client Closed Request - The caller cancelled the request
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
components:
  schemas:
    FileProvider:
      description: >-
        Store or read this file on the named provider using your own API key for
        it. Omit to use OpenRouter storage.
      enum:
        - openai
        - anthropic
      example: openai
      type: string
    FileResponse:
      description: >-
        A stored file. The shape is negotiated per request — see the endpoint
        description.
      discriminator:
        mapping:
          anthropic: '#/components/schemas/AnthropicFile'
          openai: '#/components/schemas/OpenAIFile'
          openrouter: '#/components/schemas/OpenRouterFile'
        propertyName: _shape
      example:
        _shape: openrouter
        created_at: '2025-01-01T00:00:00Z'
        downloadable: false
        filename: document.pdf
        id: or_file_011CNha8iCJcU1wXNR6q4V8w
        mime_type: application/pdf
        size_bytes: 1024000
        type: file
      oneOf:
        - $ref: '#/components/schemas/OpenRouterFile'
        - $ref: '#/components/schemas/OpenAIFile'
        - $ref: '#/components/schemas/AnthropicFile'
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
    ClientClosedRequestResponse:
      description: Client Closed Request - The caller cancelled the request
      example:
        error:
          code: 499
          message: The request was cancelled.
      properties:
        error:
          $ref: '#/components/schemas/ClientClosedRequestResponseErrorData'
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
    AnthropicFile:
      description: A stored file in Anthropic's Files API shape.
      example:
        _shape: anthropic
        created_at: '2025-01-01T00:00:00Z'
        downloadable: false
        filename: document.pdf
        id: or_file_011CNha8iCJcU1wXNR6q4V8w
        mime_type: application/pdf
        size_bytes: 1024000
        type: file
      properties:
        _shape:
          enum:
            - anthropic
          type: string
        created_at:
          type: string
        downloadable:
          type: boolean
        filename:
          type: string
        id:
          type: string
        mime_type:
          type: string
        size_bytes:
          type: integer
        type:
          enum:
            - file
          type: string
      required:
        - _shape
        - id
        - type
        - filename
        - mime_type
        - size_bytes
        - created_at
        - downloadable
      type: object
    OpenAIFile:
      description: A stored file in OpenAI's Files API shape.
      example:
        _shape: openai
        bytes: 1024000
        created_at: 1735689600
        filename: document.pdf
        id: or_file_011CNha8iCJcU1wXNR6q4V8w
        object: file
        purpose: user_data
        status: processed
      properties:
        _shape:
          enum:
            - openai
          type: string
        bytes:
          type: integer
        created_at:
          type: integer
        filename:
          type: string
        id:
          type: string
        object:
          enum:
            - file
          type: string
        purpose:
          enum:
            - assistants
            - batch
            - fine-tune
            - vision
            - user_data
            - evals
            - assistants_output
            - batch_output
            - fine-tune-results
          type: string
        status:
          enum:
            - processed
          type: string
      required:
        - _shape
        - id
        - object
        - bytes
        - created_at
        - filename
        - purpose
        - status
      type: object
    OpenRouterFile:
      description: >-
        A stored file in the OpenRouter superset shape: Anthropic-shaped, plus
        OpenRouter-only fields.
      example:
        _shape: openrouter
        created_at: '2025-01-01T00:00:00Z'
        downloadable: false
        filename: document.pdf
        id: or_file_011CNha8iCJcU1wXNR6q4V8w
        mime_type: application/pdf
        size_bytes: 1024000
        type: file
      properties:
        _shape:
          enum:
            - openrouter
          type: string
        created_at:
          type: string
        downloadable:
          type: boolean
        filename:
          type: string
        id:
          type: string
        mime_type:
          type: string
        size_bytes:
          type: integer
        type:
          enum:
            - file
          type: string
      required:
        - _shape
        - id
        - type
        - filename
        - mime_type
        - size_bytes
        - created_at
        - downloadable
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
    ClientClosedRequestResponseErrorData:
      description: Error data for ClientClosedRequestResponse
      example:
        code: 499
        message: The request was cancelled.
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
  securitySchemes:
    apiKey:
      description: API key as bearer token in Authorization header
      scheme: bearer
      type: http

````