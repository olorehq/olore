---
title: Logging
description: >-
  The configureLogging function sends Hydrogen's log entries to your logger at
  the minimum level you choose. Use the function to forward Hydrogen errors to
  your monitoring service or to reduce console output.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/request-handling/configure-logging
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/request-handling/configure-logging.md
api_name: hydrogen
---

# Logging

The `configureLogging` function sends Hydrogen's log entries to your logger at the minimum level you choose. Use the function to forward Hydrogen errors to your monitoring service or to reduce console output.

Import `configureLogging` from `@shopify/hydrogen`.

***

## Logger setup

## configure​Logging(**[options](#configurelogging-propertydetail-options)**​)

Sends Hydrogen's log entries to your logger at the minimum level you choose. Use the function to forward Hydrogen errors to a monitoring service or to reduce console output.

Call the function once at startup. In the browser, call the function at app entry. On the server, call the function during module initialization. The configuration applies to every Hydrogen helper in the current JavaScript context, including helpers that loaded before the call. Each call replaces the previous configuration, and options that the call omits reset to their defaults. Hydrogen's inline analytics and consent scripts run outside your app bundle, and they always write to the console.

### Parameters

* **options**

  **ConfigureLoggingOptions**

  **required**

  The logger that receives entries, and the minimum severity to send to the logger.

### Returns**void**

* Nothing.

### ConfigureLoggingOptions

The logger and minimum severity for Hydrogen log entries.

* level

  The minimum severity that Hydrogen forwards to the logger. Defaults to \`info\`.

  ```ts
  LogLevel
  ```

* logger

  Receives all entries at or above \`level\`. Defaults to the built-in console logger.

  ```ts
  HydrogenLogger
  ```

### LogLevel

The log severities, from lowest to highest. Set \`silent\` to turn off all output.

```ts
"trace" | "debug" | "info" | "warn" | "error" | "fatal" | "silent"
```

### HydrogenLogger

A logger that receives Hydrogen's log entries. Pass your logger to \`configureLogging\`. Without one, Hydrogen writes to the console. Messages arrive without a prefix, and the context scope names the subsystem. The built-in console logger formats entries as \`\[hydrogen:\<level>:\<scope>] \<message>\`. The console logger writes trace entries with \`console.debug\` and fatal entries with \`console.error\`. When a custom logger throws, Hydrogen reports the failure through the console logger and continues the operation that logged the entry. Catch network errors inside a custom logger to keep a monitoring outage from writing a console error for every entry.

* debug

  Receives debug entries.

  ```ts
  LogFn
  ```

* error

  Receives error entries.

  ```ts
  LogFn
  ```

* fatal

  Receives fatal entries, the highest severity.

  ```ts
  LogFn
  ```

* info

  Receives info entries. Info is the default minimum severity.

  ```ts
  LogFn
  ```

* trace

  Receives trace entries, the lowest severity.

  ```ts
  LogFn
  ```

* warn

  Receives warning entries.

  ```ts
  LogFn
  ```

### LogFn

Writes one log entry at the severity of the logger method.

* message

  The entry text, without a prefix.

  ```ts
  string
  ```

* context

  Structured details about the entry, including the subsystem scope.

  ```ts
  LogContext
  ```

returns

Nothing. Hydrogen ignores the return value.

```ts
void
```

### LogContext

Structured details attached to a log entry. Extra fields pass through to the logger.

* error

  The caught value when the entry reports a failure.

  ```ts
  unknown
  ```

* scope

  The Hydrogen subsystem that wrote the entry, such as \`cart\` or \`analytics\`.

  ```ts
  string
  ```

### Examples

* #### Send logs to a custom logger

  ##### Description

  Route Hydrogen log entries to a custom logger. This example sets the level to \`warn\` and sends error and fatal entries to a reporting function that prefixes each message with the context's \`scope\`.

  ##### TypeScript

  ```ts
  import { configureLogging, type HydrogenLogger } from "@shopify/hydrogen";

  const logger: HydrogenLogger = {
    trace: (message, context) => console.debug(message, context),
    debug: (message, context) => console.debug(message, context),
    info: (message, context) => console.info(message, context),
    warn: (message, context) => console.warn(message, context),
    error: (message, context) => reportError(message, context),
    fatal: (message, context) => reportError(message, context),
  };

  function reportError(message: string, context?: Record<string, unknown>) {
    console.error(`[${context?.scope ?? "hydrogen"}] ${message}`, context?.error);
  }

  configureLogging({ logger, level: "warn" });
  ```

***
