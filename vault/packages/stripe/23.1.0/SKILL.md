---
name: olore-stripe-23.1.0
description: Local Stripe Node.js SDK documentation reference (23.1.0). Use for payments, Checkout Sessions, Payment Intents, webhooks, subscriptions, Connect, and TypeScript types.
---

# stripe Documentation

Stripe Node.js SDK documentation covering installation, configuration, TypeScript types, webhook signature verification, auto-pagination, error handling, and framework-specific integration examples.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/README.md` | README.md | Main Stripe Node.js library overview: installation, configuration, usage, TypeScript support, webhooks, pagination, and error handling |
| `contents/.hark/migration-guides/v23.md` | v23.md | Migration guide for v23: API version 2026-09-30.endive, Node 20 minimum, V2 list shape, breaking changes |
| `contents/examples/snippets/README.md` | README.md | Setup instructions for running the example snippets locally |
| `contents/examples/snippets/event_notification_handler_endpoint.ts` | event_notification_handler_endpoint.ts | Example: receiving event notifications with EventNotificationHandler, preHandle hooks, and fallback callback |
| `contents/examples/snippets/event_notification_webhook_handler.ts` | event_notification_webhook_handler.ts | Example: receiving and processing Stripe v2 event notifications (billing meter error events) |
| `contents/examples/snippets/example_template.ts` | example_template.ts | Template for writing new Stripe SDK usage snippets |
| `contents/examples/snippets/meter_event_stream.ts` | meter_event_stream.ts | Example: streaming meter events using the V2 Stripe API |
| `contents/examples/webhook-signing/README.md` | README.md | Guide to verifying Stripe webhook signatures, with links to framework-specific examples |
| `contents/examples/webhook-signing/deno/main.ts` | main.ts | Webhook signature verification example for Deno runtime |
| `contents/examples/webhook-signing/express/main.ts` | main.ts | Webhook signature verification example for Express.js |
| `contents/examples/webhook-signing/koa/main.ts` | main.ts | Webhook signature verification example for Koa.js |
| `contents/examples/webhook-signing/nestjs/app.controller.ts` | app.controller.ts | Webhook signature verification example for NestJS (controller) |
| `contents/examples/webhook-signing/nestjs/app.module.ts` | app.module.ts | Webhook signature verification example for NestJS (module setup) |
| `contents/examples/webhook-signing/nestjs/config.ts` | config.ts | NestJS webhook example configuration |
| `contents/examples/webhook-signing/nestjs/main.ts` | main.ts | NestJS webhook example entry point |
| `contents/examples/webhook-signing/nextjs/app/api/webhooks/route.ts` | route.ts | Webhook signature verification for Next.js App Router route handler |
| `contents/examples/webhook-signing/nextjs/main.ts` | main.ts | Next.js webhook example entry point |
| `contents/examples/webhook-signing/nextjs/next-env.d.ts` | next-env.d.ts | Next.js TypeScript environment declarations |
| `contents/examples/webhook-signing/nextjs/pages/api/webhooks.ts` | webhooks.ts | Webhook signature verification for Next.js Pages Router API route |
| `contents/src/Error.ts` | Error.ts | Stripe error classes: StripeError, StripeAPIError, StripeAuthenticationError, StripeRateLimitError, and more |
| `contents/src/Types.ts` | Types.ts | Core TypeScript type definitions: UserProvidedConfig, RequestData, StripeRawError, ApiMode, BaseAddress |
| `contents/src/Webhooks.ts` | Webhooks.ts | Webhook signature verification: constructEvent, constructEventAsync, generateTestHeaderString |
| `contents/src/autoPagination.ts` | autoPagination.ts | Auto-pagination implementation: iterates through paginated Stripe API list responses |
| `contents/src/crypto/CryptoProvider.ts` | CryptoProvider.ts | Interface for pluggable crypto providers used in webhook signature verification |
| `contents/src/lib.ts` | lib.ts | SDK configuration types: RequestOptions, UserProvidedConfig, ApiList, ApiListPromise, Response |
| `contents/src/net/HttpClient.ts` | HttpClient.ts | HttpClient interface and types for custom HTTP client implementations |
| `contents/src/resources.ts` | resources.ts | Registry of all Stripe API resource classes exported by the SDK (auto-generated) |
| `contents/src/shared.ts` | shared.ts | Shared TypeScript types: Metadata, Address, PaginationParams, RangeQueryParam, ShippingAddressParam |
| `contents/src/stripe.core.ts` | stripe.core.ts | Core Stripe client class: constructor, configuration, request handling, and resource attachment |

## When to use

Use this skill when the user asks about:
- Migrating to v23 (breaking changes, Node 20 minimum)
- Installing and initializing the Stripe Node.js SDK
- Creating Payment Intents, Checkout Sessions, or Subscriptions
- Handling and verifying Stripe webhook events
- Stripe TypeScript types (RequestOptions, ApiList, Metadata, errors)
- Auto-pagination over list responses
- Custom HTTP client or crypto provider configuration
- Stripe SDK usage in Express, Koa, NestJS, Next.js, Deno, or Bun

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
