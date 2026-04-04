# Troubleshooting

## Common Issues

### Events Not Appearing

**API Secret problems:**
- Verify you're using the `api_secret` for the **correct stream** (each stream has its own)
- Check if the secret has been **revoked** (Admin > Data Streams > Measurement Protocol API secrets)
- The secret is **case-sensitive** — match it exactly

**ID configuration errors (App):**
- Use `app_instance_id`, NOT `advertising_id`
- Verify `firebase_app_id` (Firebase console > Project Settings > General > Your Apps)
- Get `app_instance_id` via the Firebase SDK method for your platform

**ID configuration errors (Web):**
- Use `client_id`, NOT `advertising_id`
- Verify `measurement_id` from GA4 Admin > Data Streams (format: `G-XXXXXXX`)
- Get `client_id` from gtag.js

### Server-Side Tagging Pitfall

Sending events to a Tag Manager server container instead of the Measurement Protocol endpoint means events **don't get full Measurement Protocol features** (geographic/device data derivation). Always send directly to:
```
https://www.google-analytics.com/mp/collect
```

### Production Endpoint Returns 2xx for Bad Data

The production endpoint returns `2xx` even for malformed payloads. Always use the **validation endpoint** first:
```
https://www.google-analytics.com/debug/mp/collect
```

### Timestamp Issues

- Events older than 72 hours are either rejected (`ENFORCE_RECOMMENDATIONS`) or have timestamps overridden (`RELAXED`)
- Ensure `timestamp_micros` is in **microseconds**, not milliseconds or seconds

## Debugging Tools

- **Validation endpoint** — `/debug/mp/collect` for structural validation
- **Event Builder** — `ga-dev-tools.web.app/ga4/event-builder/`
- **DebugView** — add `"debug_mode": true` to event params
- **Realtime reports** — include `session_id` and `engagement_time_msec`
