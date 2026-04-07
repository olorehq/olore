# GA4 Measurement Protocol

The Google Analytics 4 Measurement Protocol allows sending events directly to Google Analytics servers via HTTP POST requests, enabling server-to-server and offline interaction tracking.

## Purpose

The Measurement Protocol **augments** automatic collection through gtag, Tag Manager, and Firebase — it does not replace it. You must use tagging (gtag.js, GTM, or Firebase SDK) alongside the Measurement Protocol.

## Use Cases

- **Tie online/offline behavior** — connect web sessions with server-side events
- **Server-side interactions** — track events that occur on your server
- **Offline conversions** — send CRM or POS data to GA4
- **IoT/kiosk tracking** — measure devices without browser-based collection

## Endpoint

```
POST https://www.google-analytics.com/mp/collect?api_secret={SECRET}&firebase_app_id={APP_ID}
```

Or for web streams:
```
POST https://www.google-analytics.com/mp/collect?api_secret={SECRET}&measurement_id={MEASUREMENT_ID}
```

**EU data collection:**
```
POST https://region1.google-analytics.com/mp/collect?...
```

## Key Limits

| Limit | Value |
|---|---|
| Max events per request | 25 |
| Max parameters per event | 25 |
| Max user properties per request | 25 |
| Event name length | 40 characters |
| Parameter name length | 40 characters |
| Parameter value length | 100 chars (500 for GA 360) |
| User property name length | 24 characters |
| User property value length | 36 characters |
| Request body size | Under 130KB |
| Timestamp backdating | Up to 72 hours |
