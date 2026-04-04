# Conversions API for Business Messaging

Send customer interaction data from WhatsApp, Messenger, and Instagram Direct messaging channels to Meta.

**Important:** Messaging events should only represent customer interactions that occur in the messaging thread, not conversions on other channels.

## Supported Events

`Purchase` `LeadSubmitted` `InitiateCheckout` `AddToCart` `ViewContent` `OrderCreated` `OrderShipped` `OrderDelivered` `OrderCanceled` `OrderReturned` `CartAbandoned` `QualifiedLead` `RatingProvided` `ReviewProvided`

## Channel-Specific Setup

### Messenger (Ads That Click to Messenger)

- Permission: `page_events`
- Requires: Page ID
- User identifier: Page-Scoped ID (PSID)
- Create dataset via Dataset API

### WhatsApp (Ads That Click to WhatsApp)

- Permissions: `whatsapp_business_management`, `whatsapp_business_manage_events`
- Requires: WhatsApp Business Account ID
- User identifier: Click-to-WhatsApp Click ID (`ctwa_clid`) from referral object
- Extract from Messages webhook

### Instagram Direct (Ads That Click to Instagram)

- Permission: `instagram_manage_events`
- Requires: Instagram User ID
- User identifier: Instagram-Scoped ID (IGSID)
- **Note:** optimization not available for Instagram (only Messenger and WhatsApp)

## API Endpoint

```
POST https://graph.facebook.com/v16.0/{DATASET_ID}/events?access_token={TOKEN}
```

## Requirements

- All integrations require **Ads Management Standard Access** (1500+ successful API calls, <10% error rate in 15 days)
- One dataset per page maximum
- Partners should use a single app to identify all events
- Deduplication is the advertiser's responsibility

## Integration Steps

1. **Create Developer App**
2. **Obtain Access Token** with channel-specific permissions
3. **Set Up Dataset** — associate events with the correct data source
4. **Retrieve User Identifier** — PSID, ctwa_clid, or IGSID
5. **Send Events** — POST to `/dataset_id/events`
