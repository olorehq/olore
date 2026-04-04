# Conversions API for Offline Events

Send physical store and offline conversion events to Meta for ad measurement, attribution, and targeting.

## Configuration

### action_source
Must be set to `"physical_store"` for all offline/store events.

### Timing
- `event_time` can be up to **7 days** in the past for web events
- Physical store events can be uploaded within **62 days** of conversion
- Upload in real-time or daily for optimal results

## Required Parameters

| Parameter | Description |
|---|---|
| `event_name` | Event type (Purchase, Lead, etc.) |
| `event_time` | Unix timestamp of conversion |
| `action_source` | `"physical_store"` |
| `user_data` | Customer information (hashed) |
| `currency` | ISO 4217 code (required for Purchase) |
| `value` | Conversion value (required for Purchase) |

## Optional Parameters

| Parameter | Description |
|---|---|
| `order_id` | Unique transaction/receipt ID |
| `item_number` | Item identifier within transaction |
| `upload_tag` | Legacy offline event upload tag |
| `store_data` | Store location info: `store_page_id`, `brand_page_id`, `store_code` |
| `contents` | Product array with `id`, `quantity`, `price`, `brand`, `category` |
| `content_type` | Catalog-compatible content type |

## Example Payload

```json
{
  "data": [{
    "event_name": "Purchase",
    "event_time": 1684389752,
    "action_source": "physical_store",
    "user_data": {
      "em": ["309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd"],
      "ph": ["254aa248acb47dd654ca3ea53f48c2c26d641571e65e339c1d40e6e0fc6b24f0"],
      "fn": ["a8cfcd74832004951b4408cdb0a5dbcd8c7e52d43f7fe244bf720582e05241da"],
      "ln": ["2e99758548972a8e8822ad47fa1017ff72f06f3ff6a016851f45c398732bc50c"]
    },
    "custom_data": {
      "value": 85.50,
      "currency": "USD",
      "order_id": "TXN-2024-001",
      "contents": [
        {"id": "SKU-100", "quantity": 2, "price": 42.75}
      ]
    }
  }]
}
```

## Deduplication

### Order ID-based (default)
Uses `order_id` combined with `dataset_id`, `event_time`, `event_name`, and `item_number`.

### User-based (fallback)
When `order_id` is absent, uses matching customer information parameters across events.

Include `order_id` whenever available for reliable deduplication.
