# Deduplicating Pixel and Server Events

Meta recommends a "redundant setup" combining Meta Pixel with the Conversions API. Deduplication prevents the ad system from processing identical events twice.

## Method 1: Event ID + Event Name (Recommended)

Include `event_id` in both Conversions API and browser Pixel events.

Events are considered duplicates when:
- Meta Pixel's `eventID` matches Conversions API's `event_id`
- Meta Pixel's `event` matches Conversions API's `event_name`

When duplicates are detected, Meta retains whichever event arrives first.

### Browser Side (Meta Pixel)

```javascript
fbq('track', 'Purchase', {value: 12, currency: 'USD'}, {eventID: 'EVENT_ID_123'});
```

Or with `trackSingle`:
```javascript
fbq('trackSingle', 'PIXEL_ID', 'Purchase', {value: 12, currency: 'USD'}, {eventID: 'EVENT_ID_123'});
```

Or with image tag:
```html
<img src="https://www.facebook.com/tr?id=PIXEL_ID&ev=Purchase&eid=EVENT_ID_123"/>
```

### Server Side (Conversions API)

```json
{
  "data": [{
    "event_name": "Purchase",
    "event_time": 1633552688,
    "event_id": "EVENT_ID_123",
    "action_source": "website",
    "user_data": { ... },
    "custom_data": {
      "value": 12,
      "currency": "USD"
    }
  }]
}
```

## Method 2: FBP or External ID

Pass `event_name` with `fbp` and/or `external_id` consistently across both sources.

Meta compares `event_name` combined with `fbp` or `external_id` to identify duplicates.

**Limitation:** This method only deduplicates browser-then-server sequences. Server events sent without a preceding browser event within 48 hours won't be discarded.

## Generating Event IDs

- Use UUIDs, transaction IDs, or any unique string
- The same `event_id` must be used in both browser and server for the same event
- Generate the ID once (e.g., on the server) and pass it to both the Pixel and CAPI

## Verification

In Events Manager, check the **Event Deduplication** tab:
- **Rate of Events Deduplicated** — percentage of duplicated events (higher is better)
- **Rate of Deduplication Key Usage** — percentage containing each dedupe key
