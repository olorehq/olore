# Validating Events

The validation server verifies event structure before production. **Events sent to the validation server do NOT appear in reports.**

## Validation Endpoint

| Stream | URL |
|---|---|
| App | `https://www.google-analytics.com/debug/mp/collect?firebase_app_id={ID}&api_secret={SECRET}` |
| Web | `https://www.google-analytics.com/debug/mp/collect?measurement_id={ID}&api_secret={SECRET}` |
| EU | `https://region1.google-analytics.com/debug/mp/collect?...` |

## Request Example

```javascript
fetch("https://www.google-analytics.com/debug/mp/collect?measurement_id=G-XXXXXXX&api_secret=SECRET", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    client_id: "CLIENT_ID",
    validation_behavior: "ENFORCE_RECOMMENDATIONS",
    events: [{
      name: "purchase",
      params: {
        currency: "USD",
        value: 49.99,
        transaction_id: "TXN-123"
      }
    }]
  })
});
```

## Response Format

```json
{
  "validationMessages": [
    {
      "fieldPath": "events",
      "description": "Event at index: [0] has invalid name...",
      "validationCode": "NAME_INVALID"
    }
  ]
}
```

An **empty** `validationMessages` array means validation passed.

## Validation Codes

| Code | Meaning |
|---|---|
| `VALUE_INVALID` | Value violated constraints |
| `VALUE_REQUIRED` | Required field missing |
| `NAME_INVALID` | Event name doesn't start with alphabetic character |
| `NAME_RESERVED` | Name matches reserved keywords |
| `VALUE_OUT_OF_BOUNDS` | Value exceeds size limits |
| `EXCEEDED_MAX_ENTITIES` | Too many parameters |
| `NAME_DUPLICATED` | Parameter name appears multiple times |

## Important Limitations

- The validation server does **NOT** validate `api_secret` or `measurement_id`/`firebase_app_id` — verify these manually
- Production endpoint returns `2xx` even for malformed payloads — always validate first

## Event Builder Tool

Use the interactive Event Builder at `ga-dev-tools.web.app/ga4/event-builder/` to construct and validate events visually.
