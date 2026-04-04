# API Reference

## Base URL

```
https://graph.facebook.com/v25.0/
```

## Primary Object Types

### User (`/{AD_ACCOUNT_USER_ID}`)
A person on Facebook who creates ads. Can have roles on several ad accounts.

**Edges:** `/adaccounts`, `/accounts`, `/promotable_events`

### Ad Account (`/act_{AD_ACCOUNT_ID}`)
The business entity managing ads.

**Edges:**
- `/campaigns` — campaign management
- `/adsets` — ad set management
- `/ads` — ad management
- `/adcreatives` — creative library
- `/adimages` — image assets
- `/advideos` — video assets
- `/customaudiences` — audience management
- `/insights` — performance reporting
- `/users` — account users
- `/adrules_library` — automation rules

### Campaign (`/{CAMPAIGN_ID}`)
**Edges:** `/adsets`, `/insights`, `/copies`

### Ad Set (`/{AD_SET_ID}`)
**Edges:** `/ads`, `/insights`, `/activities`, `/copies`

### Ad (`/{AD_ID}`)
**Edges:** `/insights`, `/adcreatives`, `/leads`, `/previews`, `/copies`

### Ad Creative (`/{AD_CREATIVE_ID}`)
**Edges:** `/previews`

## Common Operations

### Create
```bash
POST /v25.0/act_{AD_ACCOUNT_ID}/{edge}
```

### Read
```bash
GET /v25.0/{OBJECT_ID}?fields=field1,field2
```

### Update
```bash
POST /v25.0/{OBJECT_ID}
  field: "new_value"
```

### Delete
```bash
DELETE /v25.0/{OBJECT_ID}
```

## Batch Requests

```bash
POST /v25.0/
  batch: [
    {"method": "GET", "relative_url": "{ID1}?fields=name,status"},
    {"method": "GET", "relative_url": "{ID2}?fields=name,status"}
  ]
```

## Pagination

Responses use cursor-based pagination:
```json
{
  "paging": {
    "cursors": {
      "before": "...",
      "after": "..."
    },
    "next": "https://graph.facebook.com/..."
  }
}
```

## Authentication

All requests require `access_token` parameter. Tokens need:
- `ads_management` — for write operations
- `ads_read` — for read-only access
- `business_management` — for business asset operations
