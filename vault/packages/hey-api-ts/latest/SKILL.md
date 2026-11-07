---
name: olore-hey-api-ts-latest
description: Local hey-api-ts documentation reference (latest). Hey API (@hey-api/openapi-ts) documentation. Use for generating TypeScript clients, SDKs, types, and validators from OpenAPI specs — configuration (input/output/parser/Vite), HTTP clients (Fetch, Axios, Ky, Next.js, Nuxt, oFetch, Angular), and plugins (Zod, Valibot, ArkType, TanStack Query, SWR, Fastify, NestJS, Hono, oRPC, MSW, Faker, and more).
---

# hey-api-ts Documentation

Hey API (@hey-api/openapi-ts) generates TypeScript clients, SDKs, types, and validators from OpenAPI specs.

## Documentation Structure

```
contents/
├── *.mdx            # Top-level guides: get-started, output, migrating, category overviews (12 files)
├── clients/         # HTTP clients: Fetch, Axios, Ky, Next.js, Nuxt, ofetch, Angular, Got, Effect, custom (11 files)
├── configuration/   # Input, output, parser, Vite plugin (4 files)
├── plugins/         # Types, SDK, validators, state, frameworks, mocks, custom plugins (39 files)
└── community/       # Contributing and spotlight (5 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started | `contents/get-started.mdx`, `contents/output.mdx` |
| Configuration | `contents/configuration.mdx`, `contents/configuration/input.mdx`, `contents/configuration/output.mdx`, `contents/configuration/parser.mdx` |
| Vite integration | `contents/configuration/vite.mdx` |
| HTTP clients | `contents/clients.mdx`, `contents/clients/fetch.mdx`, `contents/clients/axios.mdx`, `contents/clients/custom.mdx` |
| Types and SDK | `contents/plugins/typescript.mdx`, `contents/plugins/sdk.mdx`, `contents/plugins/transformers.mdx` |
| Validators | `contents/validators.mdx`, `contents/plugins/zod/v4.mdx`, `contents/plugins/valibot.mdx` |
| State management | `contents/state-management.mdx`, `contents/plugins/tanstack-query.mdx`, `contents/plugins/swr.mdx` |
| Web frameworks | `contents/web-frameworks.mdx`, `contents/plugins/fastify.mdx`, `contents/plugins/nest.mdx`, `contents/plugins/hono.mdx` |
| Mocking and testing | `contents/mocks.mdx`, `contents/plugins/msw.mdx`, `contents/plugins/faker.mdx` |
| Custom plugins | `contents/plugins/custom.mdx`, `contents/plugins/concepts/resolvers.mdx` |
| Migration | `contents/migrating.mdx` |

## When to use

Use this skill when the user asks about:
- Generating TypeScript clients or SDKs from OpenAPI with @hey-api/openapi-ts
- Configuring input, output, parser, or the Vite plugin
- Choosing or customizing an HTTP client (Fetch, Axios, Ky, Next.js, Nuxt, Angular)
- Plugins for Zod, Valibot, TanStack Query, SWR, Fastify, NestJS, oRPC, MSW, Faker

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
