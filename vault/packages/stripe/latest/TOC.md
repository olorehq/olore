# stripe Documentation Structure

## Files

| File | Description |
|------|-------------|
| `contents/.hark/migration-guides/v23.md` | Migration guide for v23: new API version, Node 20 minimum, breaking SDK changes |
| `contents/README.md` | Stripe Node.js library overview: install, client config, usage, TypeScript, webhooks, pagination, errors |
| `contents/examples/snippets/README.md` | Setup and run instructions for the example snippets |
| `contents/examples/snippets/event_notification_handler_endpoint.ts` | Receive event notifications with an event notification handler and fallback callback |
| `contents/examples/snippets/event_notification_webhook_handler.ts` | Parse and process v2 event notification webhooks with the client |
| `contents/examples/snippets/example_template.ts` | Template for writing new SDK usage snippets |
| `contents/examples/snippets/meter_event_stream.ts` | Stream billing meter events through the high-throughput V2 meter event stream |
| `contents/examples/webhook-signing/README.md` | Guide to verifying Stripe webhook signatures with per-framework examples |
| `contents/examples/webhook-signing/deno/main.ts` | Webhook signature verification in Deno |
| `contents/examples/webhook-signing/express/main.ts` | Webhook signature verification in Express with raw body handling |
| `contents/examples/webhook-signing/koa/main.ts` | Webhook signature verification in Koa with bodyparser |
| `contents/examples/webhook-signing/nestjs/app.controller.ts` | NestJS controller that verifies webhook signatures |
| `contents/examples/webhook-signing/nestjs/app.module.ts` | NestJS module wiring config and controller for the webhook example |
| `contents/examples/webhook-signing/nestjs/config.ts` | NestJS config loading Stripe secret key and webhook secret |
| `contents/examples/webhook-signing/nestjs/main.ts` | NestJS app bootstrap for the webhook example |
| `contents/examples/webhook-signing/nextjs/app/api/webhooks/route.ts` | Next.js App Router route handler verifying webhook signatures |
| `contents/examples/webhook-signing/nextjs/main.ts` | Next.js example runner (test-infrastructure entry point) |
| `contents/examples/webhook-signing/nextjs/next-env.d.ts` | Next.js TypeScript environment declarations for the example |
| `contents/examples/webhook-signing/nextjs/pages/api/webhooks.ts` | Next.js Pages Router API route verifying webhook signatures |
| `contents/src/Error.ts` | Stripe error classes (StripeError and subclasses) and raw error types |
| `contents/src/Types.ts` | Core shared TypeScript types: client config, request data, raw errors, base addresses |
| `contents/src/Webhooks.ts` | Webhook helpers: constructEvent, signature verification and test header generation |
| `contents/src/autoPagination.ts` | Auto-pagination implementation for list methods (async iteration, toArray) |
| `contents/src/crypto/CryptoProvider.ts` | CryptoProvider interface for pluggable HMAC and signature computation |
| `contents/src/lib.ts` | Public library typings: app info, API version, HTTP agent and protocol types |
| `contents/src/net/HttpClient.ts` | HttpClient interface and response types for custom HTTP clients |
| `contents/src/resources.ts` | Registry mapping API resource classes to client namespaces (generated) |
| `contents/src/shared.ts` | Shared types such as Metadata, MetadataParam and Decimal |
| `contents/src/stripe.core.ts` | Core Stripe client class: constructor, options, request setup, webhooks, errors |
