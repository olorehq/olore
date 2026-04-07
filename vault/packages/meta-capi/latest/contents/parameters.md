# Conversions API Parameters

## Server Event Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `event_name` | String | Yes | Standard event type (Purchase, ViewContent, etc.) |
| `event_time` | Integer | Yes | Unix timestamp in seconds |
| `user_data` | Object | Yes | Customer information object |
| `custom_data` | Object | No | Event-specific data (value, products, etc.) |
| `event_source_url` | String | Web only | Page URL where event occurred |
| `event_id` | String | No | Unique identifier for deduplication |
| `action_source` | String | Yes | Source: website, app, physical_store, phone_call, chat, system_generated, other |
| `opt_out` | Boolean | No | User opt-out flag |
| `referrer_url` | String | No | HTTP referrer |
| `data_processing_options` | Array | No | Privacy compliance (e.g., `["LDU"]`) |
| `data_processing_options_country` | Integer | No | Country code for privacy |
| `data_processing_options_state` | Integer | No | State code for privacy |

## Customer Information Parameters (user_data)

**Hashed fields** (SHA-256 required):

| Parameter | Field | Description |
|---|---|---|
| `em` | Email | Lowercase before hashing |
| `ph` | Phone | Digits only, with country code |
| `fn` | First Name | Lowercase before hashing |
| `ln` | Last Name | Lowercase before hashing |
| `ge` | Gender | `m` or `f` |
| `db` | Date of Birth | YYYYMMDD format |
| `ct` | City | Lowercase, no spaces |
| `st` | State | 2-letter code, lowercase |
| `zp` | Zip Code | 5-digit for US |
| `country` | Country | 2-letter ISO code, lowercase |
| `external_id` | External ID | Recommended to hash |

**Do NOT hash these fields:**

| Parameter | Description |
|---|---|
| `client_ip_address` | IPv4 or IPv6 (required for web events) |
| `client_user_agent` | Browser user agent (required for web events) |
| `fbc` | Facebook click ID cookie (`_fbc`) |
| `fbp` | Facebook browser ID cookie (`_fbp`) |
| `subscription_id` | User subscription ID |
| `fb_login_id` | Facebook Login ID |
| `lead_id` | Lead form ID |
| `anon_id` | App install ID (app events only) |
| `madid` | Mobile advertiser ID (app events only) |
| `page_id` | Facebook Page ID |
| `page_scoped_user_id` | Page-scoped user ID |
| `ctwa_clid` | WhatsApp click ID |
| `ig_account_id` | Instagram account ID |
| `ig_sid` | Instagram click ID |

## Custom Data Parameters

| Parameter | Type | Description |
|---|---|---|
| `value` | Float | Monetary value (required for Purchase) |
| `currency` | String | ISO 4217 code (required for Purchase) |
| `content_ids` | Array | Product SKUs or IDs |
| `content_name` | String | Product or page name |
| `content_category` | String | Product category |
| `content_type` | String | `product` or `product_group` |
| `contents` | Array | Objects with `id`, `quantity`, `price` |
| `num_items` | Integer | Number of items |
| `predicted_ltv` | Float | Predicted lifetime value |
| `search_string` | String | Search query |
| `order_id` | String | Unique order/transaction ID |

## App Data Parameters

| Parameter | Type | Description |
|---|---|---|
| `advertiser_tracking_enabled` | Integer | 0 or 1 (required for iOS 14.5+) |
| `application_tracking_enabled` | Integer | 0 or 1 |
| `extinfo` | Array | 16-element device info array (see App Events docs) |
| `campaign_ids` | String | Campaign tracking |
| `install_referrer` | String | App install source |

## Standard Event Names

`AddPaymentInfo` `AddToCart` `AddToWishlist` `CompleteRegistration` `Contact` `CustomizeProduct` `Donate` `FindLocation` `InitiateCheckout` `Lead` `Purchase` `Schedule` `Search` `StartTrial` `SubmitApplication` `Subscribe` `ViewContent`
