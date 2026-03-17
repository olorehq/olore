---
name: olore-chanfana-latest
description: Local chanfana documentation reference (latest). Chanfana documentation. Use for OpenAPI 3/3.1 schema generation and validation with Hono, itty-router, and Cloudflare Workers.
---

# chanfana Documentation

Chanfana is a TypeScript library for OpenAPI v3 and v3.1 schema generation and request validation. It integrates with Hono and itty-router via adapter functions, uses class-based OpenAPIRoute endpoints, and leverages Zod schemas for type-safe request/response definitions.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/introduction.md` | Welcome to Chanfana | Overview, key features, and use cases for Chanfana |
| `contents/getting-started.md` | Getting Started | Installation, quick start with Hono and itty-router, exploring generated OpenAPI docs |
| `contents/core-concepts.md` | Core Concepts | OpenAPI spec, OpenAPIRoute, schema generation, validation, getValidatedData, getUnvalidatedData |
| `contents/router-adapters.md` | Adapters | fromHono and fromIttyRouter adapter setup and configuration |
| `contents/openapi-configuration-customization.md` | OpenAPI Configuration | RouterOptions, base path, schema info, docs URL, Swagger UI, ReDoc customization |
| `contents/endpoints/defining-endpoints.md` | Defining Endpoints | OpenAPIRoute class, schema property, handle method, getValidatedData |
| `contents/endpoints/parameters.md` | Parameters | Zod parameter types: string, number, boolean, enum, array, object, optional, default, openapi metadata |
| `contents/endpoints/request-validation.md` | Request Validation | contentJson, body validation, query params, path params, headers validation |
| `contents/endpoints/response-definition.md` | Response Definitions | responses schema, status codes, contentJson for responses, error responses |
| `contents/endpoints/auto/base.md` | Auto CRUD Endpoints | CreateEndpoint, ReadEndpoint, UpdateEndpoint, DeleteEndpoint, ListEndpoint, Meta object |
| `contents/endpoints/auto/d1.md` | Auto D1 Endpoints | D1CreateEndpoint, D1ReadEndpoint, D1UpdateEndpoint, D1DeleteEndpoint, D1ListEndpoint |
| `contents/error-handling.md` | Error Handling | ApiException, InputValidationException, NotFoundException, ForbiddenException, all exception classes |
| `contents/advanced-topics-patterns.md` | Advanced Topics | Nested routers, middleware, custom adapters, lifecycle hooks |
| `contents/examples-and-recipes.md` | Examples and Recipes | Complete Task API with Hono, D1, CRUD endpoints |
| `contents/cli.md` | CLI | npx chanfana CLI for extracting OpenAPI schema from Cloudflare Workers |
| `contents/troubleshooting-and-faq.md` | Troubleshooting and FAQ | Common issues, debugging tips |
| `contents/migration-to-chanfana-3.md` | Migration Guide v2 to v3 | Breaking changes when upgrading to Zod v4, parameter helper replacements |
| `contents/changelog.md` | Changelog | Version history and release notes |
| `contents/index.md` | Home | VitePress landing page |

## When to use

Use this skill when the user asks about:
- Setting up OpenAPI documentation for Hono or itty-router APIs
- Defining API endpoints with OpenAPIRoute and Zod schemas
- Request validation (body, query parameters, path parameters, headers)
- Response schema definition and contentJson helper
- Auto CRUD endpoints (CreateEndpoint, ReadEndpoint, UpdateEndpoint, DeleteEndpoint, ListEndpoint)
- D1 database CRUD endpoints for Cloudflare Workers
- Exception handling with ApiException and built-in exception classes
- Configuring OpenAPI spec metadata (title, version, servers, security)
- Migrating from itty-router-openapi or Chanfana v2 to v3 (Zod v4)
- Extracting OpenAPI schemas with the chanfana CLI

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
