# Insights & Reporting

## Endpoints

| Level | Endpoint |
|---|---|
| Account | `GET /act_{AD_ACCOUNT_ID}/insights` |
| Campaign | `GET /{CAMPAIGN_ID}/insights` |
| Ad Set | `GET /{ADSET_ID}/insights` |
| Ad | `GET /{AD_ID}/insights` |

## Basic Request

```bash
GET /v25.0/act_{AD_ACCOUNT_ID}/insights
  fields: "impressions,reach,clicks,spend,cpm,cpp,actions"
  date_preset: "last_7d"
  access_token: "<TOKEN>"
```

## Response Format

```json
{
  "data": [
    {
      "impressions": "2466376",
      "reach": "1234567",
      "clicks": "45678",
      "spend": "1234.56",
      "date_start": "2024-03-28",
      "date_stop": "2024-04-04"
    }
  ],
  "paging": {
    "cursors": { "before": "...", "after": "..." }
  }
}
```

## Key Parameters

| Parameter | Description |
|---|---|
| `fields` | Comma-separated metrics to retrieve |
| `date_preset` | `today`, `yesterday`, `last_7d`, `last_30d`, `lifetime`, etc. |
| `time_range` | `{"since":"2024-01-01","until":"2024-01-31"}` |
| `level` | Aggregation: `ad`, `adset`, `campaign`, `account` |
| `sort` | `{field}_descending` or `{field}_ascending` |
| `filtering` | JSON array for status/label filtering |
| `action_attribution_windows` | `["1d_click","7d_click","1d_view"]` |
| `breakdowns` | Group by age, gender, placement, device, etc. |

## Common Metrics

| Metric | Description |
|---|---|
| `impressions` | Total impressions |
| `reach` | Unique people reached |
| `clicks` | All clicks |
| `unique_clicks` | Unique people who clicked |
| `cpm` | Cost per 1,000 impressions |
| `cpp` | Cost per 1,000 people reached |
| `spend` | Total amount spent |
| `actions` | Array of action types and counts |
| `cost_per_action_type` | Cost per each action type |
| `ctr` | Click-through rate |
| `frequency` | Average times each person saw the ad |

## Attribution Windows

Default: `7d_click`. Specify alternatives:

```bash
action_attribution_windows: ["1d_click","1d_view","7d_click"]
```

## Breakdowns

```bash
breakdowns: "age,gender"
breakdowns: "placement"
breakdowns: "device_platform"
```

## Async Reports

For large result sets, use asynchronous jobs:

```bash
POST /v25.0/act_{AD_ACCOUNT_ID}/insights
  fields: "impressions,clicks,spend"
  level: "ad"
  date_preset: "last_90d"
```

Returns a report run ID to poll for results.

## Requirements

- `ads_read` permission
- Valid access token
- Rate limits enforced per account

## Important Notes

- Unique metrics are computationally expensive — may cause timeouts
- Deleted objects only queryable with explicit `ad.effective_status` filtering
- Use batch queries (`?ids=[id1,id2]`) for efficiency
