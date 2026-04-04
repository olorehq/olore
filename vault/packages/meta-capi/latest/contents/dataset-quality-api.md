# Dataset Quality API

Programmatic access to Conversions API dataset quality metrics at scale. Essential for tech providers, agencies, and advertisers managing hundreds or thousands of Meta Pixels.

## Endpoint

```
GET https://graph.facebook.com/v25.0/dataset_quality?dataset_id={PIXEL_ID}&access_token={TOKEN}
```

## Parameters

| Parameter | Required | Description |
|---|---|---|
| `dataset_id` | Yes | The Pixel ID to assess |
| `access_token` | Yes | Valid, unexpired token |
| `agent_name` | No | Filter events by partner identifier |

## Quality Metrics

### Event Match Quality (EMQ)
- **Score:** 0-10
- Measures effectiveness of customer information for matching events to Meta accounts
- Based on parameter quality, information completeness, and match rate
- Target: **6.0 or higher** to reduce cost-per-action

### Additional Conversions Reported (ACR)
Estimates conversions measured through Conversions API:
- **ACR Main** — overall uplift percentage
- **ACR per Parameter** — potential gains from individual match keys
- **ACR per Event** — impact by specific event type
- **ACR Event Coverage** — benefits from improved server-to-browser ratio

### Event Coverage
- 7-day average percentage of Pixel events covered by Conversions API
- **Goal:** 75% coverage threshold
- Includes deduplication key alignment verification

### Event Deduplication
- Deduplication key usage across browser and server events
- Browser event coverage rates
- Server event alignment metrics

### Data Freshness
- Delay between event occurrence and receipt
- Categories: real-time, hourly, daily
- **Best practice:** real-time delivery

### EMQ Diagnostics
Identifies integration issues with recommendations (e.g., "IPv4 to IPv6 migration recommended")

## Example Query

```
GET /v25.0/dataset_quality?dataset_id=123456&access_token=TOKEN&fields=web{event_match_quality,acr,event_coverage,event_name}
```

## Authentication

**For Advertisers:**
- System user access tokens via Business Manager
- Events Manager token generation

**For Partners:**
- Facebook Login for Business (recommended)
- Meta Business Extension (beta)
- Shared Pixel arrangement

## Required Permissions

- **User Level:** Partial access > Use events dataset
- **App Level:** `ads_read` + (`ads_management` OR `business_management`)
- **Advanced:** `ads_management` (advanced) + Ads Management Standard Access
