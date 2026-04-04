# Audiences & Targeting

## Audience Types

### Custom Audiences
Target people based on your existing data:

```bash
POST /v25.0/act_{AD_ACCOUNT_ID}/customaudiences

Parameters:
  name: "Website Visitors"
  subtype: "WEBSITE"
  access_token: "<TOKEN>"
```

**Sources:**
- Website traffic (via Meta Pixel)
- Mobile app activity
- Customer lists (CRM data)
- Engagement (video views, form opens, page interactions)
- Offline conversions

### Lookalike Audiences
Find new people similar to your best customers:

```bash
POST /v25.0/act_{AD_ACCOUNT_ID}/customaudiences

Parameters:
  name: "Lookalike - Top Customers"
  subtype: "LOOKALIKE"
  origin_audience_id: "<SOURCE_AUDIENCE_ID>"
  lookalike_spec: {
    "type": "similarity",
    "country": "US",
    "ratio": 0.01
  }
  access_token: "<TOKEN>"
```

### Saved Audiences
Reusable targeting configurations based on demographics, interests, and behaviors.

## Targeting Spec

Set targeting at the ad set level:

```json
{
  "targeting": {
    "geo_locations": {
      "countries": ["US", "GB"],
      "cities": [{"key": "2420379"}],
      "regions": [{"key": "3847"}]
    },
    "age_min": 25,
    "age_max": 55,
    "genders": [1],
    "interests": [{"id": "6003139266461", "name": "Movies"}],
    "behaviors": [{"id": "6002714895372", "name": "Frequent travelers"}],
    "custom_audiences": [{"id": "<AUDIENCE_ID>"}],
    "excluded_custom_audiences": [{"id": "<AUDIENCE_ID>"}]
  }
}
```

## Targeting Dimensions

| Dimension | Examples |
|---|---|
| **Location** | Countries, regions, cities, zip codes, radius |
| **Age** | 13-65+ |
| **Gender** | Male, female, all |
| **Languages** | Language preferences |
| **Interests** | Categories from Facebook user activity |
| **Behaviors** | Purchase behavior, device usage, travel |
| **Connections** | People connected to your page/app/event |
| **Custom Audiences** | Include or exclude specific audiences |

## Special Ad Categories

Restricted targeting for housing, employment, and credit ads:
- No age, gender, or zip code targeting
- Limited interest/behavior targeting
- Minimum 15-mile radius for location targeting
