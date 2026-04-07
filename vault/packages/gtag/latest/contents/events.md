# Event Reference

## General Events

| Event | Required | Optional |
|---|---|---|
| `page_view` | — | `page_location`, `page_title`, `client_id`, `language` |
| `login` | — | `method` |
| `sign_up` | — | `method` |
| `search` | `search_term` | — |
| `view_search_results` | — | `search_term` |
| `select_content` | — | `content_type`, `content_id` |
| `share` | — | `method`, `content_type`, `item_id` |
| `join_group` | — | `group_id` |
| `tutorial_begin` | — | — |
| `tutorial_complete` | — | — |
| `exception` | — | `description`, `fatal` |

## E-commerce Events

### Purchase (Required: `currency`, `value`, `transaction_id`, `items`)

```javascript
gtag('event', 'purchase', {
  currency: 'USD',
  value: 49.99,
  transaction_id: 'TXN-123',
  coupon: 'SUMMER20',
  shipping: 5.99,
  tax: 4.50,
  items: [{
    item_id: 'SKU-001',
    item_name: 'Widget',
    price: 49.99,
    quantity: 1
  }]
});
```

### Other E-commerce Events

| Event | Required | Optional |
|---|---|---|
| `add_to_cart` | `currency`, `value`, `items` | — |
| `add_to_wishlist` | `currency`, `value`, `items` | — |
| `remove_from_cart` | `currency`, `value`, `items` | — |
| `view_cart` | `currency`, `value`, `items` | — |
| `view_item` | `currency`, `value`, `items` | — |
| `view_item_list` | `currency`, `items` | `item_list_id`, `item_list_name` |
| `select_item` | `items` | `item_list_id`, `item_list_name` |
| `begin_checkout` | `currency`, `value`, `items` | `coupon` |
| `add_payment_info` | `currency`, `value`, `items` | `coupon`, `payment_type` |
| `add_shipping_info` | `currency`, `value`, `items` | `coupon`, `shipping_tier` |
| `refund` | `currency`, `transaction_id`, `value` | `coupon`, `shipping`, `tax`, `items` |
| `select_promotion` | — | `creative_name`, `creative_slot`, `promotion_id`, `promotion_name`, `items` |
| `view_promotion` | `items` | `creative_name`, `creative_slot`, `promotion_id`, `promotion_name` |

### Item Parameters

Each item requires **one of** `item_id` or `item_name`:

| Parameter | Type | Description |
|---|---|---|
| `item_id` | String | Product SKU/ID |
| `item_name` | String | Product name |
| `affiliation` | String | Store/affiliate |
| `coupon` | String | Item coupon |
| `discount` | Number | Discount amount |
| `index` | Number | Position in list |
| `item_brand` | String | Brand |
| `item_category` | String | Category (5 hierarchy levels) |
| `item_list_id` | String | List ID |
| `item_list_name` | String | List name |
| `item_variant` | String | Variant (size, color) |
| `location_id` | String | Physical location |
| `price` | Number | Unit price |
| `quantity` | Number | Quantity (default: 1) |

Up to 27 custom parameters per item.

## Lead Generation Events

| Event | Required | Optional |
|---|---|---|
| `generate_lead` | `currency`, `value` | `lead_source` |
| `qualify_lead` | `currency`, `value` | — |
| `working_lead` | `currency`, `value` | `lead_status` |
| `close_convert_lead` | `currency`, `value` | — |
| `close_unconvert_lead` | `currency`, `value` | `unconvert_lead_reason` |
| `disqualify_lead` | `currency`, `value` | `disqualified_lead_reason` |

## Game Events

| Event | Required | Optional |
|---|---|---|
| `level_start` | — | `level_name` |
| `level_end` | — | `level_name`, `success` |
| `level_up` | — | `level`, `character` |
| `post_score` | `score` | `level`, `character` |
| `unlock_achievement` | `achievement_id` | — |

## Virtual Currency Events

| Event | Required | Optional |
|---|---|---|
| `earn_virtual_currency` | — | `virtual_currency_name`, `value` |
| `spend_virtual_currency` | `value`, `virtual_currency_name` | `item_name` |
