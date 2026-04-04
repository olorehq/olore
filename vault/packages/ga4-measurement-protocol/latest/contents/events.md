# Event Reference

## E-commerce Events

### purchase (Required: `currency`, `value`, `transaction_id`, `items`)

```json
{
  "name": "purchase",
  "params": {
    "currency": "USD",
    "value": 49.99,
    "transaction_id": "TXN-123",
    "coupon": "SUMMER20",
    "shipping": 5.99,
    "tax": 4.50,
    "items": [{ "item_id": "SKU-001", "item_name": "Widget", "quantity": 1, "price": 49.99 }]
  }
}
```

### add_to_cart / add_to_wishlist (Required: `currency`, `value`, `items`)

### begin_checkout (Required: `currency`, `value`, `items`)
Optional: `coupon`

### add_payment_info (Required: `currency`, `value`, `items`)
Optional: `coupon`, `payment_type`

### add_shipping_info (Required: `currency`, `value`, `items`)
Optional: `coupon`, `shipping_tier`

### view_item / view_item_list (Required: `currency`, `value`, `items`)

### select_item (Optional: `item_list_id`, `item_list_name`, `items`)

### remove_from_cart (Required: `currency`, `value`, `items`)

### refund (Required: `currency`, `value`, `transaction_id`)
Optional: `items`

## Item Parameters

Each item in the `items` array requires **one of** `item_id` or `item_name`:

| Parameter | Type | Description |
|---|---|---|
| `item_id` | String | Product SKU/ID |
| `item_name` | String | Product name |
| `affiliation` | String | Store or affiliate |
| `coupon` | String | Item-level coupon |
| `discount` | Number | Discount amount |
| `index` | Number | Position in list |
| `item_brand` | String | Brand name |
| `item_category` | String | Category (supports 5 levels: `item_category` through `item_category5`) |
| `item_list_id` | String | List ID |
| `item_list_name` | String | List name |
| `item_variant` | String | Variant (size, color) |
| `location_id` | String | Location |
| `price` | Number | Unit price |
| `quantity` | Number | Quantity |

Supports up to 27 custom parameters per item.

## General Events

| Event | Required Params | Optional Params |
|---|---|---|
| `login` | — | `method` |
| `sign_up` | — | `method` |
| `search` | `search_term` | — |
| `view_search_results` | — | `search_term` |
| `select_content` | — | `content_type`, `content_id` |
| `share` | — | `method`, `content_type`, `item_id` |
| `join_group` | — | `group_id` |
| `tutorial_begin` | — | — |
| `tutorial_complete` | — | — |
| `campaign_details` | — | `campaign_id`, `campaign`, `source`, `medium`, `term`, `content` |

## App-Only Events

| Event | Required Params | Optional Params |
|---|---|---|
| `ad_impression` | — | `ad_platform`, `ad_source`, `ad_format`, `ad_unit_name`, `currency`, `value` |
| `screen_view` | — | `screen_class`, `screen_name` |
| `in_app_purchase` | `currency`, `value` | `quantity`, `product_id`, `subscription`, `free_trial` |

## Virtual Currency Events

| Event | Required Params | Optional Params |
|---|---|---|
| `earn_virtual_currency` | — | `virtual_currency_name`, `value` |
| `spend_virtual_currency` | `value`, `virtual_currency_name` | `item_name` |
