# Sending Events

## Request Format

**Method:** POST only
**Content-Type:** `application/json`

### Required Query Parameters

| Parameter | Description |
|---|---|
| `api_secret` | Generated in GA4 UI: Admin > Data Streams > Measurement Protocol API secrets |
| `measurement_id` | For web streams (format: `G-XXXXXXX`). Found in Admin > Data Streams |
| `firebase_app_id` | For app streams. Found in Firebase console: Project Settings > General > Your Apps |

Use either `measurement_id` (web) or `firebase_app_id` (app), not both.

## Request Body

```json
{
  "client_id": "CLIENT_ID",
  "events": [
    {
      "name": "tutorial_begin",
      "params": {
        "session_id": "SESSION_ID",
        "engagement_time_msec": 100
      }
    }
  ]
}
```

For app streams, use `app_instance_id` instead of `client_id`.

## Optional Request-Level Fields

| Field | Type | Description |
|---|---|---|
| `user_id` | String | Cross-platform user identifier |
| `timestamp_micros` | Number | Unix timestamp in microseconds |
| `user_properties` | Object | Custom user-scoped data |
| `user_data` | Object | User-provided identifiers |
| `consent` | Object | Consent states for ads/personalization |
| `user_location` | Object | Geographic data (city, region_id, country_id) |
| `ip_override` | String | IP address for geographic derivation |
| `device` | Object | Device details (category, OS, browser, resolution) |
| `validation_behavior` | String | `RELAXED` (default) or `ENFORCE_RECOMMENDATIONS` |

## Code Examples

### Web Stream (JavaScript)

```javascript
const measurementId = "G-XXXXXXX";
const apiSecret = "API_SECRET";

fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    client_id: "CLIENT_ID",
    events: [{
      name: "purchase",
      params: {
        session_id: "SESSION_ID",
        engagement_time_msec: 100,
        currency: "USD",
        value: 49.99,
        transaction_id: "TXN-123",
        items: [{
          item_id: "SKU-001",
          item_name: "Widget",
          quantity: 1,
          price: 49.99
        }]
      }
    }]
  })
});
```

### App Stream (Node.js)

```javascript
const firebaseAppId = "FIREBASE_APP_ID";
const apiSecret = "API_SECRET";

fetch(`https://www.google-analytics.com/mp/collect?firebase_app_id=${firebaseAppId}&api_secret=${apiSecret}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    app_instance_id: "APP_INSTANCE_ID",
    events: [{
      name: "tutorial_begin",
      params: {
        session_id: "SESSION_ID",
        engagement_time_msec: 100
      }
    }]
  })
});
```

## Timestamp Handling

The protocol uses the **first** timestamp it finds:
1. Event-level `timestamp_micros`
2. Request-level `timestamp_micros`
3. Server receipt time

### Backdating Rules

- **RELAXED mode (default):** Events older than 72 hours accepted but timestamp overridden to 72-hour boundary
- **ENFORCE_RECOMMENDATIONS mode:** Events older than 72 hours rejected

## Session Handling

Creating a new `session_id` creates a new session without needing to send `session_start`. Include `session_id` and `engagement_time_msec` for events to appear in Realtime reports.

## Important Notes

- `firebase_app_id` identifies your app; `app_instance_id` identifies a single installation
- Response returns `2xx` even for malformed payloads — use the validation endpoint to check
- Maximum 25 events per request
