# chanfana Documentation Structure

## Files

| File | Description |
|------|-------------|
| `contents/introduction.md` | Overview of Chanfana: OpenAPI schema generation and validation for Hono, itty-router, and Cloudflare Workers |
| `contents/getting-started.md` | Installation, quick start with Hono and itty-router, and exploring generated OpenAPI docs |
| `contents/core-concepts.md` | OpenAPI spec, schema generation, validation, OpenAPIRoute class, request/response schemas, error handling |
| `contents/router-adapters.md` | Integrating Chanfana via fromHono and fromIttyRouter adapters |
| `contents/openapi-configuration-customization.md` | RouterOptions configuration for OpenAPI document generation, base path, schema info, docs URLs |
| `contents/endpoints/defining-endpoints.md` | OpenAPIRoute class structure, schema property, handle method, getValidatedData usage |
| `contents/endpoints/parameters.md` | Zod-based parameter types: strings, numbers, booleans, enums, arrays, objects, optional/default values |
| `contents/endpoints/request-validation.md` | Request body, query, path params, and header validation using contentJson and Zod schemas |
| `contents/endpoints/response-definition.md` | Response schema structure, status codes, contentJson for response bodies |
| `contents/endpoints/auto/base.md` | Auto CRUD endpoints: CreateEndpoint, ReadEndpoint, UpdateEndpoint, DeleteEndpoint, ListEndpoint, Meta object |
| `contents/endpoints/auto/d1.md` | D1-specific CRUD endpoints: D1CreateEndpoint, D1ReadEndpoint, D1UpdateEndpoint, D1DeleteEndpoint, D1ListEndpoint |
| `contents/error-handling.md` | ApiException, InputValidationException, NotFoundException, and all built-in exception classes |
| `contents/advanced-topics-patterns.md` | Nested routers, middleware, custom adapters, and advanced patterns |
| `contents/examples-and-recipes.md` | Complete Task API example using Hono, Chanfana, and D1 |
| `contents/cli.md` | npx chanfana CLI for extracting OpenAPI schema from Cloudflare Worker projects |
| `contents/troubleshooting-and-faq.md` | Common issues, debugging tips, and FAQ for Chanfana |
| `contents/migration-to-chanfana-3.md` | Migration guide from Chanfana v2 (Zod v3) to v3 (Zod v4), breaking changes |
| `contents/changelog.md` | Complete history of changes, fixes, and new features |
| `contents/index.md` | VitePress home page layout (landing page, not API docs) |
