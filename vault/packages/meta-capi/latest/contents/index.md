# Meta Conversions API

The Conversions API (CAPI) creates a direct connection between an advertiser's marketing data and Meta systems. Events are sent from the advertiser's server rather than the browser, providing more reliable data collection.

## Key Benefits

- **Reliability** — server-side events aren't blocked by ad blockers or browser restrictions
- **Data Quality** — richer customer data can be sent for better matching
- **Redundancy** — used alongside Meta Pixel for comprehensive tracking
- **Privacy** — supports GDPR consent and US state privacy (LDU)
- **Flexibility** — supports web, app, offline/physical store, and messaging events

## Supported Event Sources

| Action Source | Description |
|---|---|
| `website` | Web browser events (complement Meta Pixel) |
| `app` | Mobile app events |
| `physical_store` | Offline/in-store transactions |
| `phone_call` | Phone call conversions |
| `chat` | Messaging channel events (WhatsApp, Messenger, Instagram) |
| `system_generated` | Automated system events |
| `other` | Other sources |

## Core Endpoint

```
POST https://graph.facebook.com/{API_VERSION}/{PIXEL_ID}/events?access_token={TOKEN}
```

## Business SDKs

Available in: PHP (>=7.2), Node.js (>=7.6.0), Java (>=8), Python (>=2.7), Ruby (>=2)

Features: asynchronous requests, concurrent batching, custom endpoint routing.

## Related Tools

- **Meta Pixel** — browser-side tracking (use together for redundancy)
- **Events Manager** — monitor events, verify setup, check quality
- **Payload Helper** — interactive tool to build valid payloads
- **Dataset Quality API** — programmatic quality monitoring
