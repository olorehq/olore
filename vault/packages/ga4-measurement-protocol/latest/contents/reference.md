# API Reference

## Endpoint

| Purpose | URL |
|---|---|
| Production | `https://www.google-analytics.com/mp/collect` |
| EU Region | `https://region1.google-analytics.com/mp/collect` |
| Validation | `https://www.google-analytics.com/debug/mp/collect` |
| EU Validation | `https://region1.google-analytics.com/debug/mp/collect` |

## Query Parameters

| Parameter | Required | Description |
|---|---|---|
| `api_secret` | Yes | API secret from GA4 Admin > Data Streams |
| `measurement_id` | Web only | Web stream measurement ID (G-XXXXXXX) |
| `firebase_app_id` | App only | Firebase app ID |

## Request Body Schema

```json
{
  "client_id": "string",
  "user_id": "string",
  "timestamp_micros": 1234567890000000,
  "user_properties": {
    "property_name": { "value": "property_value" }
  },
  "consent": {
    "ad_user_data": "GRANTED",
    "ad_personalization": "GRANTED"
  },
  "user_location": {
    "city": "string",
    "region_id": "string",
    "country_id": "string"
  },
  "ip_override": "string",
  "device": {
    "category": "string",
    "language": "string",
    "screen_resolution": "string",
    "os": "string",
    "model": "string",
    "browser": "string"
  },
  "validation_behavior": "RELAXED",
  "events": [
    {
      "name": "event_name",
      "params": {
        "session_id": "string",
        "engagement_time_msec": 100,
        "timestamp_micros": 1234567890000000
      }
    }
  ]
}
```

## Common Event Parameters

| Parameter | Description |
|---|---|
| `session_id` | Session identifier (include for Realtime reports) |
| `engagement_time_msec` | Engagement duration in ms (include for Realtime reports) |
| `timestamp_micros` | Event-level timestamp override |
| `debug_mode` | Set to `true` or `1` for DebugView |

## Reserved Prefixes

Event names, parameter names, and user property names **cannot** start with:
- `firebase_`
- `ga_`
- `google_`
- `gtag.`

## Validation Behavior

| Mode | Behavior |
|---|---|
| `RELAXED` (default) | Accepts malformed requests, overrides stale timestamps |
| `ENFORCE_RECOMMENDATIONS` | Rejects invalid parameters and stale timestamps |
