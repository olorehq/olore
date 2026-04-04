# User Properties

User properties segment your user base (e.g., language preference, customer tier). GA4 logs some automatically; you can add up to **25 custom properties** per project.

## Sending User Properties

Include `user_properties` in the request body:

```json
{
  "client_id": "CLIENT_ID",
  "user_properties": {
    "customer_tier": { "value": "premium" },
    "preferred_language": { "value": "en" }
  },
  "events": [{
    "name": "login",
    "params": {
      "session_id": "SESSION_ID",
      "engagement_time_msec": 100
    }
  }]
}
```

User properties can be sent with or without events in the same request.

## Reserved Property Names

These names **cannot** be used:
- `first_open_time`
- `first_visit_time`
- `last_deep_link_referrer`
- `user_id`
- `first_open_after_install`

Property names cannot start with: `google_`, `ga_`, or `firebase_`

## Timestamp Override

For user property changes that occurred in the past, override the timestamp to ensure Measurement Protocol properties don't overwrite more recent changes:

```json
{
  "client_id": "CLIENT_ID",
  "timestamp_micros": 1633552688000000,
  "user_properties": {
    "customer_tier": { "value": "premium" }
  },
  "events": [...]
}
```

Priority order:
1. Individual property `timestamp_micros`
2. Request-level `timestamp_micros`
3. Server receipt time

## Server-Side Example (Node.js)

```javascript
const measurementId = "G-XXXXXXX";
const apiSecret = "API_SECRET";

fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    client_id: "CLIENT_ID",
    user_properties: {
      customer_tier: { value: "premium" }
    },
    events: [{
      name: "add_payment_info",
      params: {
        session_id: "SESSION_ID",
        engagement_time_msec: 100
      }
    }]
  })
});
```

## Limits

- Maximum **25** custom user properties per project
- Property name: 24 characters max
- Property value: 36 characters max
