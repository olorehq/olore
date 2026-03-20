---
title: Sentry Integration
description: Integrate oRPC with Sentry for error tracking and performance monitoring.
---

# Sentry Integration

[Sentry](https://sentry.io/) is a powerful tool for error tracking and performance monitoring. This guide explains how to integrate oRPC with Sentry to capture errors and performance metrics in your applications.

::: warning
This guide assumes familiarity with [Sentry](https://sentry.io/). Review the official documentation if needed.
:::

::: info
This integration is based on the [OpenTelemetry Integration](/docs/integrations/opentelemetry), so you can refer to that guide for more details on setting up OpenTelemetry with oRPC.
:::

## Installation

::: code-group

```sh [npm]
npm install @orpc/otel@latest
```

```sh [yarn]
yarn add @orpc/otel@latest
```

```sh [pnpm]
pnpm add @orpc/otel@latest
```

```sh [bun]
bun add @orpc/otel@latest
```

```sh [deno]
deno add npm:@orpc/otel@latest
```

:::

## Setup

To set up OpenTelemetry with oRPC, use the `ORPCInstrumentation` class. This class automatically instruments your oRPC client and server for distributed tracing.

```ts twoslash
import * as Sentry from '@sentry/node'
import { ORPCInstrumentation } from '@orpc/otel'

Sentry.init({
  dsn: '...',
  sendDefaultPii: true,

  tracesSampleRate: 1.0, // enable tracing [!code highlight]

  openTelemetryInstrumentations: [
    new ORPCInstrumentation(), // [!code highlight]
  ]
})
```

## Capturing Errors

Since Sentry does not yet support collecting [OpenTelemetry span events](https://opentelemetry.io/docs/concepts/signals/traces/#span-events), you should capture errors that occur in business logic manually. You can use `interceptors`, `middleware`, or other error handling mechanisms.

```ts twoslash
import * as Sentry from '@sentry/node'
import { os } from '@orpc/server'

export const sentryMiddleware = os.middleware(async ({ next }) => {
  try {
    return await next()
  }
  catch (error) {
    Sentry.captureException(error) // [!code highlight]
    throw error
  }
})

export const base = os.use(sentryMiddleware)
```
