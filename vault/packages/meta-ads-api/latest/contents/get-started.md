# Get Started

## Prerequisites

### Ad Account
- Active ad account for billing, spending limits, and campaign tracking
- Find your account number: Ads Manager > Settings (format: `act_XXXXXXXXX`)

### Developer Setup
1. Register as a Meta Developer
2. Create an app in the App Dashboard
3. Select appropriate app type and use case

### Authentication
- Obtain an access token with `ads_management` or `ads_read` permissions
- Extend and renew tokens as needed

## Basic Ad Creation Flow

### Step 1: Create a Campaign

```bash
curl -X POST \
  "https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/campaigns" \
  -F "name=My Campaign" \
  -F "objective=LINK_CLICKS" \
  -F "status=PAUSED" \
  -F "access_token=<ACCESS_TOKEN>"
```

### Step 2: Create an Ad Set

```bash
curl -X POST \
  "https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets" \
  -F "name=My Ad Set" \
  -F "campaign_id=<CAMPAIGN_ID>" \
  -F "daily_budget=1000" \
  -F "targeting={\"geo_locations\":{\"countries\":[\"US\"]}}" \
  -F "access_token=<ACCESS_TOKEN>"
```

### Step 3: Create an Ad

```bash
curl -X POST \
  "https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/ads" \
  -F "name=My Ad" \
  -F "adset_id=<AD_SET_ID>" \
  -F "creative={\"creative_id\": \"<CREATIVE_ID>\"}" \
  -F "status=ACTIVE" \
  -F "access_token=<ACCESS_TOKEN>"
```

## Required Permissions

- `ads_management` — create and manage ads
- `ads_read` — read ad data and insights
- `business_management` — manage business assets
