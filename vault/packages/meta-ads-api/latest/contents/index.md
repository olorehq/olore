# Meta Marketing API

The Meta Marketing API automates advertising across Facebook, Instagram, Messenger, and WhatsApp. It enables programmatic ad creation, management, and performance analysis.

## Campaign Structure

| Level | Purpose | Key Settings |
|---|---|---|
| **Campaign** | Overall marketing objective | Objective, schedule |
| **Ad Set** | Targeting, budget, delivery | Budget, bidding, audience, placements, schedule |
| **Ad Creative** | Visual assets (immutable after creation) | Images, video, text, links |
| **Ad** | Complete ad object for delivery | Links creative to ad set |

All ads within an ad set share identical targeting, budget, billing, optimization goals, and timeframes. Create separate ad sets for each audience segment.

## Base URL

```
https://graph.facebook.com/v25.0/
```

## Primary Endpoints

| Endpoint | Description |
|---|---|
| `act_{AD_ACCOUNT_ID}/campaigns` | Create/manage campaigns |
| `act_{AD_ACCOUNT_ID}/adsets` | Create/manage ad sets |
| `act_{AD_ACCOUNT_ID}/ads` | Create/manage ads |
| `act_{AD_ACCOUNT_ID}/adcreatives` | Create/manage creatives |
| `act_{AD_ACCOUNT_ID}/insights` | Performance reporting |
| `act_{AD_ACCOUNT_ID}/customaudiences` | Audience management |
| `act_{AD_ACCOUNT_ID}/adimages` | Image asset management |
| `act_{AD_ACCOUNT_ID}/advideos` | Video asset management |

## Current Version

v25.0 (check changelog for updates)
