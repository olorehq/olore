# Using the Conversions API

## Endpoint

```
POST https://graph.facebook.com/{API_VERSION}/{PIXEL_ID}/events?access_token={TOKEN}
```

## Request Payload

```json
{
  "data": [
    {
      "event_name": "Purchase",
      "event_time": 1633552688,
      "event_id": "event.id.123",
      "event_source_url": "http://example.com/product/123",
      "action_source": "website",
      "user_data": {
        "client_ip_address": "192.19.9.9",
        "client_user_agent": "test ua",
        "em": ["309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd"],
        "ph": ["254aa248acb47dd654ca3ea53f48c2c26d641571e65e339c1d40e6e0fc6b24f0"],
        "fbc": "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
        "fbp": "fb.1.1558571054389.1098115397"
      },
      "custom_data": {
        "value": 100.20,
        "currency": "USD",
        "content_ids": ["product.id.123"],
        "content_type": "product"
      },
      "opt_out": false
    }
  ]
}
```

## Batch Limitations

- **Maximum events per request:** 1,000
- **Recommended:** send events within 1 hour of occurrence
- **Failure behavior:** one invalid event rejects the entire batch

## Testing Events

Use the Test Events tool in Events Manager:

1. Generate a `test_event_code` in Events Manager
2. Include it in your payload:
```json
{
  "data": [...],
  "test_event_code": "TEST12345"
}
```
3. Events flow to production but also appear in the testing dashboard
4. **Remove `test_event_code` before deploying to production**

## Verification

After sending events:
1. Navigate to **Data Sources > Pixel > Overview**
2. View counts: raw, matched, and attributed events
3. Inspect individual events for debugging
4. Events should appear within **20 minutes**

## Rate Limiting

No specific Conversions API rate limit. Counted as Marketing API calls. Graph API rate limits don't apply to Marketing API requests.

## Data Processing Options (US Privacy)

```json
{
  "data": [{
    "event_name": "Purchase",
    "event_time": 1633552688,
    "user_data": {
      "em": "hashed_email",
      "client_ip_address": "192.168.1.1"
    },
    "custom_data": {
      "currency": "USD",
      "value": "100"
    },
    "data_processing_options": ["LDU"],
    "data_processing_options_country": 0,
    "data_processing_options_state": 0
  }]
}
```

## Important Notes

- **Hashing required** — email, phone, and other PII must be SHA-256 hashed before sending
- **event_time** — represents when the transaction occurred, not upload time
- **Offline events** — support up to 62 days historical data
- **Deduplication** — use `event_id` to prevent duplicate processing
