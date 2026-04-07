# Campaign Management

## Create a Campaign

```bash
POST /v25.0/act_{AD_ACCOUNT_ID}/campaigns

Parameters:
  name: "Campaign Name"
  objective: "LINK_CLICKS"
  status: "PAUSED"
  access_token: "<TOKEN>"
```

## Campaign Objectives

- `AWARENESS` — brand awareness and reach
- `TRAFFIC` — drive traffic to a destination
- `ENGAGEMENT` — post engagement, page likes, event responses
- `LEADS` — lead generation
- `APP_PROMOTION` — app installs and engagement
- `SALES` — conversions, catalog sales

## Modify a Campaign

```bash
POST /v25.0/{CAMPAIGN_ID}

Parameters:
  objective: "CONVERSIONS"
  daily_budget: 2000
  status: "ACTIVE"
  access_token: "<TOKEN>"
```

## Pause a Campaign

```bash
POST /v25.0/{CAMPAIGN_ID}
  status: "PAUSED"
```

Resume by setting status back to `ACTIVE`.

## Archive a Campaign

```bash
POST /v25.0/{CAMPAIGN_ID}
  status: "ARCHIVED"
```

Preserves data. Restore by setting status to `ACTIVE`.

## Delete a Campaign

```bash
DELETE /v25.0/{CAMPAIGN_ID}
  access_token: "<TOKEN>"
```

**Warning:** Deletion cannot be undone.

## Campaign Statuses

| Status | Description |
|---|---|
| `ACTIVE` | Running and delivering |
| `PAUSED` | Temporarily stopped |
| `ARCHIVED` | Disabled, data preserved |
| `DELETED` | Permanently removed |

## Read Campaigns

```bash
GET /v25.0/act_{AD_ACCOUNT_ID}/campaigns
  fields: "name,objective,status,daily_budget"
  access_token: "<TOKEN>"
```
