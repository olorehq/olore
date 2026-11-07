> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# OpenAPI

> The OpenAPI description of the Recraft API for code generators, API tools, and AI agents, with JSON request bodies and every current model.

The Recraft API is described by an OpenAPI 3.0 specification. Use it to generate a client, import the API into tools like Postman or Insomnia, or give it to an AI agent.

| Resource | Link |
| - | - |
| **Specification (JSON), recommended** | [`https://www.recraft.ai/docs/api-reference/openapi.json`](https://www.recraft.ai/docs/api-reference/openapi.json) |
| Backend specification (YAML) | [`external-api.yaml`](https://external.api.recraft.ai/doc/spec/external-api.yaml) |
| Interactive reference (Swagger UI) | [`external.api.recraft.ai/doc`](https://external.api.recraft.ai/doc/#/) |

The JSON specification is built from the backend specification and adds what that one doesn't have yet:

* a JSON request body for every endpoint, with images passed as `image_url`, `mask_url`, `image_urls`, or `style_reference_urls`, listed before the multipart body;
* Recraft V4.1 Flash (`recraftv4_1_flash`) and `style_reference_urls`;
* [Enhance prompt](https://www.recraft.ai/docs/api-reference/tools/enhance-prompt.md) (`POST /v1/prompts/enhance`);
* error responses, whose bodies are plain text or JSON (see [Errors](https://www.recraft.ai/docs/api-reference/error-handling.md)).

> [!NOTE]
>
> The Swagger UI and the YAML file show the backend specification, which sends request bodies as `multipart/form-data` only. Prefer the JSON specification for generated clients.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.