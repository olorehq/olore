# hey-api-ts Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Top-level overviews: get started, output, migration, category indexes | 12 |
| `contents/clients/` | HTTP client packages | 11 |
| `contents/community/` | Contributing and community | 5 |
| `contents/configuration/` | Input, output, parser and Vite configuration | 4 |
| `contents/plugins/` | Plugins for types, SDK, validators, state, frameworks, mocks | 39 |

## (root)

| File | Description |
|------|-------------|
| `clients.mdx` | Overview of the available HTTP clients and how to choose one |
| `configuration.mdx` | Overview of configuring @hey-api/openapi-ts via config file or CLI |
| `core.mdx` | Overview of core plugins (TypeScript, SDK, schemas, transformers) |
| `get-started.mdx` | Installation and first client generation |
| `integrations.mdx` | Hey API Platform: automating generation from stored OpenAPI specs |
| `license.md` | License FAQ |
| `migrating.mdx` | Migration guide between @hey-api/openapi-ts versions |
| `mocks.mdx` | Overview of testing and mocking plugins (MSW, Nock, Faker, etc.) |
| `output.mdx` | What files the generator emits and how output is structured |
| `state-management.mdx` | Overview of state/data-fetching plugins (TanStack Query, SWR, Pinia Colada, Zustand) |
| `validators.mdx` | Overview of validator plugins (Zod, Valibot, Ajv, etc.) and data validation |
| `web-frameworks.mdx` | Overview of web framework plugins (Fastify, NestJS, Hono, Express, etc.) |

## clients/

| File | Description |
|------|-------------|
| `angular/v19.mdx` | Angular v19 HTTP client |
| `angular/v20.mdx` | Angular v20 HTTP client |
| `axios.mdx` | Axios v1 client setup and options |
| `custom.mdx` | Creating your own custom client |
| `effect.mdx` | Effect client |
| `fetch.mdx` | Fetch API client (default): setup, interceptors, configuration |
| `got.mdx` | Got client |
| `ky.mdx` | Ky v1 client |
| `next-js.mdx` | Next.js client |
| `nuxt.mdx` | Nuxt v3 client |
| `ofetch.mdx` | ofetch client |

## community/

| File | Description |
|------|-------------|
| `contributing.mdx` | How to contribute to Hey API |
| `contributing/building.mdx` | Building the project locally |
| `contributing/developing.mdx` | Development workflow for contributors |
| `contributing/testing.mdx` | Running tests when contributing |
| `spotlight.mdx` | Community members and projects using Hey API |

## configuration/

| File | Description |
|------|-------------|
| `input.mdx` | Specifying OpenAPI input: paths, URLs, registry, filters |
| `output.mdx` | Output options: path, formatting, linting, file naming |
| `parser.mdx` | Parser options: filters, transforms, hooks on the OpenAPI spec |
| `vite.mdx` | Official Vite plugin (Vite 5-8) integration |

## plugins/

| File | Description |
|------|-------------|
| `adonis.mdx` | AdonisJS plugin |
| `ajv.mdx` | Ajv validator plugin |
| `angular/v19.mdx` | Angular v19 requests and resources plugin |
| `angular/v20.mdx` | Angular v20 requests and resources plugin |
| `arktype.mdx` | ArkType schema plugin |
| `chance.mdx` | Chance mock data plugin |
| `concepts/resolvers.mdx` | Plugin concept: resolvers for customizing generated output |
| `custom.mdx` | Creating your own plugin |
| `elysia.mdx` | Elysia plugin |
| `express.mdx` | Express plugin |
| `faker.mdx` | Faker v10 fake data plugin |
| `falso.mdx` | Falso mock data plugin |
| `fastify.mdx` | Fastify v5 route handlers plugin |
| `hono.mdx` | Hono plugin |
| `joi.mdx` | Joi validator plugin |
| `koa.mdx` | Koa plugin |
| `msw.mdx` | MSW v2 request handlers plugin |
| `nest.mdx` | NestJS v11 controller methods plugin |
| `nock.mdx` | Nock HTTP mocking plugin |
| `orpc/v1.mdx` | oRPC v1 contracts plugin |
| `orpc/v2.mdx` | oRPC v2 contracts plugin |
| `pinia-colada.mdx` | Pinia Colada v0 queries and keys plugin |
| `playwright.mdx` | Playwright testing plugin |
| `schemas.mdx` | JSON Schema output plugin |
| `sdk.mdx` | SDK plugin: generating typed SDK functions/classes |
| `superstruct.mdx` | Superstruct validator plugin |
| `supertest.mdx` | Supertest plugin |
| `swr.mdx` | SWR hooks plugin |
| `tanstack-query.mdx` | TanStack Query v5 functions and query keys plugin |
| `tanstack-start.mdx` | TanStack Start plugin |
| `transformers.mdx` | Transformers plugin: converting response data (dates, BigInt) |
| `typebox.mdx` | TypeBox schema plugin |
| `typescript.mdx` | TypeScript plugin: generated types and enums |
| `valibot.mdx` | Valibot v1 schema plugin |
| `yup.mdx` | Yup validator plugin |
| `zod/mini.mdx` | Zod Mini schema plugin |
| `zod/v3.mdx` | Zod v3 schema plugin |
| `zod/v4.mdx` | Zod v4 schema plugin |
| `zustand.mdx` | Zustand store plugin |
