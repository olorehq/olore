# stripe Documentation Structure

## Files

| File | Description |
|------|-------------|
| `contents/README.md` | Main Stripe Node.js library overview: installation, configuration, usage, TypeScript support, webhooks, pagination, and error handling |
| `contents/examples/snippets/README.md` | Setup instructions for running the example snippets locally |
| `contents/examples/snippets/event_notification_webhook_handler.ts` | Example: receiving and processing Stripe v2 event notifications (billing meter error events) |
| `contents/examples/snippets/example_template.ts` | Template for writing new Stripe SDK usage snippets |
| `contents/examples/snippets/meter_event_stream.ts` | Example: streaming meter events using the V2 Stripe API |
| `contents/examples/webhook-signing/README.md` | Guide to verifying Stripe webhook signatures, with links to framework-specific examples |
| `contents/examples/webhook-signing/deno/main.ts` | Webhook signature verification example for Deno runtime |
| `contents/examples/webhook-signing/express/main.ts` | Webhook signature verification example for Express.js |
| `contents/examples/webhook-signing/koa/main.ts` | Webhook signature verification example for Koa.js |
| `contents/examples/webhook-signing/nestjs/app.controller.ts` | Webhook signature verification example for NestJS (controller) |
| `contents/examples/webhook-signing/nestjs/app.module.ts` | Webhook signature verification example for NestJS (module setup) |
| `contents/examples/webhook-signing/nestjs/config.ts` | NestJS webhook example configuration |
| `contents/examples/webhook-signing/nestjs/main.ts` | NestJS webhook example entry point |
| `contents/examples/webhook-signing/nextjs/app/api/webhooks/route.ts` | Webhook signature verification for Next.js App Router route handler |
| `contents/examples/webhook-signing/nextjs/main.ts` | Next.js webhook example entry point |
| `contents/examples/webhook-signing/nextjs/next-env.d.ts` | Next.js TypeScript environment declarations |
| `contents/examples/webhook-signing/nextjs/pages/api/webhooks.ts` | Webhook signature verification for Next.js Pages Router API route |
| `contents/src/autoPagination.ts` | Auto-pagination implementation: iterates through paginated Stripe API list responses |
| `contents/src/crypto/CryptoProvider.ts` | Interface for pluggable crypto providers used in webhook signature verification |
| `contents/src/Error.ts` | Stripe error classes: StripeError, StripeAPIError, StripeAuthenticationError, StripeRateLimitError, and more |
| `contents/src/lib.ts` | SDK configuration types: RequestOptions, UserProvidedConfig, ApiList, ApiListPromise, Response |
| `contents/src/net/HttpClient.ts` | HttpClient interface and types for custom HTTP client implementations |
| `contents/src/resources.ts` | Registry of all Stripe API resource classes exported by the SDK (auto-generated) |
| `contents/src/shared.ts` | Shared TypeScript types: Metadata, Address, PaginationParams, RangeQueryParam, ShippingAddressParam |
| `contents/src/stripe.core.ts` | Core Stripe client class: constructor, configuration, request handling, and resource attachment |
| `contents/src/Types.ts` | Core TypeScript type definitions: UserProvidedConfig, RequestData, StripeRawError, ApiMode, BaseAddress |
| `contents/src/Webhooks.ts` | Webhook signature verification: constructEvent, constructEventAsync, generateTestHeaderString |
