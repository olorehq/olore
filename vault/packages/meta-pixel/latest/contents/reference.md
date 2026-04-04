# Meta Pixel Reference

## Standard Events

Track standard events using `fbq('track', eventName, parameters)`:

| Event Name | Description | Required Parameters |
|---|---|---|
| `AddPaymentInfo` | Payment information added in checkout | — |
| `AddToCart` | Product added to shopping cart | — |
| `AddToWishlist` | Product added to wishlist | — |
| `CompleteRegistration` | Registration form completed | — |
| `Contact` | Customer initiates contact (phone, SMS, email, chat) | — |
| `CustomizeProduct` | Customer customizes a product | — |
| `Donate` | Funds donated to organization | — |
| `FindLocation` | Store location search | — |
| `InitiateCheckout` | Checkout flow initiated | — |
| `Lead` | Sign-up completed | — |
| `Purchase` | Purchase or checkout completed | `currency`, `value` |
| `Schedule` | Appointment booking | — |
| `Search` | Product search performed | — |
| `StartTrial` | Free trial started | — |
| `SubmitApplication` | Application submitted | — |
| `Subscribe` | Paid subscription initiated | — |
| `ViewContent` | Web page of interest visited | — |

## Event Parameters

| Property | Type | Description |
|---|---|---|
| `content_category` | String | Page or product category |
| `content_ids` | Array of Strings | Product SKUs or identifiers |
| `content_name` | String | Page or product name |
| `content_type` | String | `"product"` or `"product_group"` |
| `contents` | Array of Objects | JSON objects with `id` and `quantity` |
| `currency` | String | ISO 4217 currency code (e.g., `"USD"`) |
| `num_items` | Integer | Number of items at checkout |
| `predicted_ltv` | Float | Predicted customer lifetime value |
| `search_string` | String | Search query text |
| `value` | Float | Monetary value of the event |

## Usage Examples

### Track a Purchase

```javascript
fbq('track', 'Purchase', {
  value: 49.99,
  currency: 'USD',
  content_ids: ['SKU-123'],
  content_type: 'product',
  num_items: 1
});
```

### Track a Search

```javascript
fbq('track', 'Search', {
  search_string: 'running shoes',
  content_category: 'Footwear'
});
```

### Track ViewContent

```javascript
fbq('track', 'ViewContent', {
  content_name: 'Blue Running Shoes',
  content_ids: ['SKU-456'],
  content_type: 'product',
  value: 79.99,
  currency: 'USD'
});
```

## Custom Events

Track custom events using `fbq('trackCustom', eventName, parameters)`:

```javascript
fbq('trackCustom', 'ShareDiscount', {
  promotion: 'summer_sale_25'
});
```

## Deduplication with Conversions API

When using the Meta Pixel alongside the Conversions API, include the `eventID` parameter as a fourth argument to deduplicate events:

```javascript
fbq('track', 'Purchase', {
  value: 49.99,
  currency: 'USD'
}, { eventID: 'unique-event-id-123' });
```
