---
name: olore-stripe-latest
description: Local Stripe Node.js SDK documentation reference (latest). Use for payments, Checkout Sessions, Payment Intents, webhooks, subscriptions, Connect, and TypeScript types.
---

# stripe Documentation

Stripe Node.js SDK documentation (stripe-node master) covering installation, client configuration, TypeScript types, webhook signature verification, auto-pagination, error handling, v2 event notifications, and framework-specific examples.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/.hark/migration-guides/v23.md` | v23.md | Migration guide for v23: new API version, Node 20 minimum, breaking SDK changes |
| `contents/README.md` | README.md | Stripe Node.js library overview: install, client config, usage, TypeScript, webhooks, pagination, errors |
| `contents/examples/snippets/README.md` | README.md | Setup and run instructions for the example snippets |
| `contents/examples/snippets/event_notification_handler_endpoint.ts` | event_notification_handler_endpoint.ts | Receive event notifications with an event notification handler and fallback callback |
| `contents/examples/snippets/event_notification_webhook_handler.ts` | event_notification_webhook_handler.ts | Parse and process v2 event notification webhooks with the client |
| `contents/examples/snippets/example_template.ts` | example_template.ts | Template for writing new SDK usage snippets |
| `contents/examples/snippets/meter_event_stream.ts` | meter_event_stream.ts | Stream billing meter events through the high-throughput V2 meter event stream |
| `contents/examples/webhook-signing/README.md` | README.md | Guide to verifying Stripe webhook signatures with per-framework examples |
| `contents/examples/webhook-signing/deno/main.ts` | main.ts | Webhook signature verification in Deno |
| `contents/examples/webhook-signing/express/main.ts` | main.ts | Webhook signature verification in Express with raw body handling |
| `contents/examples/webhook-signing/koa/main.ts` | main.ts | Webhook signature verification in Koa with bodyparser |
| `contents/examples/webhook-signing/nestjs/app.controller.ts` | app.controller.ts | NestJS controller that verifies webhook signatures |
| `contents/examples/webhook-signing/nestjs/app.module.ts` | app.module.ts | NestJS module wiring config and controller for the webhook example |
| `contents/examples/webhook-signing/nestjs/config.ts` | config.ts | NestJS config loading Stripe secret key and webhook secret |
| `contents/examples/webhook-signing/nestjs/main.ts` | main.ts | NestJS app bootstrap for the webhook example |
| `contents/examples/webhook-signing/nextjs/app/api/webhooks/route.ts` | route.ts | Next.js App Router route handler verifying webhook signatures |
| `contents/examples/webhook-signing/nextjs/main.ts` | main.ts | Next.js example runner (test-infrastructure entry point) |
| `contents/examples/webhook-signing/nextjs/next-env.d.ts` | next-env.d.ts | Next.js TypeScript environment declarations for the example |
| `contents/examples/webhook-signing/nextjs/pages/api/webhooks.ts` | webhooks.ts | Next.js Pages Router API route verifying webhook signatures |
| `contents/src/Error.ts` | Error.ts | Stripe error classes (StripeError and subclasses) and raw error types |
| `contents/src/Types.ts` | Types.ts | Core shared TypeScript types: client config, request data, raw errors, base addresses |
| `contents/src/Webhooks.ts` | Webhooks.ts | Webhook helpers: constructEvent, signature verification and test header generation |
| `contents/src/autoPagination.ts` | autoPagination.ts | Auto-pagination implementation for list methods (async iteration, toArray) |
| `contents/src/crypto/CryptoProvider.ts` | CryptoProvider.ts | CryptoProvider interface for pluggable HMAC and signature computation |
| `contents/src/lib.ts` | lib.ts | Public library typings: app info, API version, HTTP agent and protocol types |
| `contents/src/net/HttpClient.ts` | HttpClient.ts | HttpClient interface and response types for custom HTTP clients |
| `contents/src/resources.ts` | resources.ts | Registry mapping API resource classes to client namespaces (generated) |
| `contents/src/shared.ts` | shared.ts | Shared types such as Metadata, MetadataParam and Decimal |
| `contents/src/stripe.core.ts` | stripe.core.ts | Core Stripe client class: constructor, options, request setup, webhooks, errors |

## When to use

Use this skill when the user asks about:
- Setting up the Stripe Node client, options, and TypeScript usage
- Verifying webhook signatures in Express, Koa, NestJS, Next.js, or Deno
- Event notifications, meter event streams, and v2 API usage
- Auto-pagination, error classes, and custom HTTP or crypto providers
- Migrating to stripe-node v23

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
