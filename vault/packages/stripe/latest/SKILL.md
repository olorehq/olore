---
name: olore-stripe-latest
description: Local Stripe Node.js SDK documentation reference (latest). Use for payments, Checkout Sessions, Payment Intents, webhooks, subscriptions, Connect, and TypeScript types.
---

# stripe Documentation

Stripe Node.js SDK documentation covering installation, configuration, TypeScript types, webhook signature verification, auto-pagination, error handling, and framework-specific integration examples.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/README.md` | Stripe Node.js Library | Main library overview: installation, authentication, usage, TypeScript support, webhooks, auto-pagination, error handling, custom HTTP clients |
| `contents/examples/snippets/README.md` | Snippets Setup | How to build and run the local example snippets |
| `contents/examples/snippets/event_notification_webhook_handler.ts` | Event Notification Handler | Example: handling Stripe v2 event notifications (billing meter events) |
| `contents/examples/snippets/example_template.ts` | Snippet Template | Template structure for writing new SDK usage examples |
| `contents/examples/snippets/meter_event_stream.ts` | Meter Event Stream | Example: streaming meter events via the V2 API |
| `contents/examples/webhook-signing/README.md` | Webhook Signing Guide | Overview of webhook signature verification with links to framework examples |
| `contents/examples/webhook-signing/deno/main.ts` | Deno Webhook Example | Webhook signature verification in Deno |
| `contents/examples/webhook-signing/express/main.ts` | Express Webhook Example | Webhook signature verification in Express.js |
| `contents/examples/webhook-signing/koa/main.ts` | Koa Webhook Example | Webhook signature verification in Koa.js |
| `contents/examples/webhook-signing/nestjs/app.controller.ts` | NestJS Webhook Controller | NestJS controller handling Stripe webhook events |
| `contents/examples/webhook-signing/nestjs/app.module.ts` | NestJS Webhook Module | NestJS module setup for webhook handling |
| `contents/examples/webhook-signing/nestjs/config.ts` | NestJS Webhook Config | Configuration for NestJS webhook example |
| `contents/examples/webhook-signing/nestjs/main.ts` | NestJS Entry Point | NestJS app bootstrap for webhook example |
| `contents/examples/webhook-signing/nextjs/app/api/webhooks/route.ts` | Next.js App Router Webhook | Webhook route handler for Next.js App Router |
| `contents/examples/webhook-signing/nextjs/main.ts` | Next.js Entry Point | Next.js webhook example bootstrap |
| `contents/examples/webhook-signing/nextjs/next-env.d.ts` | Next.js Types | TypeScript environment declarations for Next.js |
| `contents/examples/webhook-signing/nextjs/pages/api/webhooks.ts` | Next.js Pages Router Webhook | Webhook API route for Next.js Pages Router |
| `contents/src/autoPagination.ts` | Auto-Pagination | Implementation for iterating all pages of paginated list responses |
| `contents/src/crypto/CryptoProvider.ts` | CryptoProvider Interface | Pluggable crypto interface for webhook HMAC verification |
| `contents/src/Error.ts` | Error Classes | All Stripe error types: StripeError, StripeAPIError, StripeAuthenticationError, StripeRateLimitError, StripeInvalidRequestError, etc. |
| `contents/src/lib.ts` | SDK Config Types | RequestOptions, UserProvidedConfig, ApiList, ApiListPromise, Response types |
| `contents/src/net/HttpClient.ts` | HttpClient Interface | Interface for custom HTTP client implementations |
| `contents/src/resources.ts` | Resources Registry | Auto-generated registry of all Stripe API resource classes |
| `contents/src/shared.ts` | Shared Types | Metadata, Address, PaginationParams, RangeQueryParam, ShippingAddressParam, Emptyable |
| `contents/src/stripe.core.ts` | Stripe Client | Core Stripe class: constructor, configuration options, request handling, resource attachment |
| `contents/src/Types.ts` | Core Types | UserProvidedConfig, RequestData, StripeRawError, ApiMode, BaseAddress, DEFAULT_BASE_ADDRESSES |
| `contents/src/Webhooks.ts` | Webhooks | constructEvent, constructEventAsync, generateTestHeaderString for webhook signature verification |

## When to use

Use this skill when the user asks about:
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
