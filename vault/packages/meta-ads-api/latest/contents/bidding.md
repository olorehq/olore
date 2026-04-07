# Bidding, Budgets & Optimization

## Bid Strategies

| Strategy | Description |
|---|---|
| **Lowest Cost** | Facebook bids to get the most results at the lowest cost (default) |
| **Cost Cap** | Set a maximum average cost per result |
| **Bid Cap** | Set a maximum bid in each auction |
| **Minimum ROAS** | Set a minimum return on ad spend target |

## Optimization Goals

Define what Facebook optimizes delivery towards:
- Impressions
- Link clicks
- Landing page views
- Conversions
- App installs
- Reach
- Lead generation
- Value (for ROAS optimization)

## Budget Types

### Daily Budget
Spend up to this amount per day:
```json
{ "daily_budget": 5000 }
```
Value in cents (5000 = $50.00)

### Lifetime Budget
Spend up to this amount over the ad set's lifetime:
```json
{ "lifetime_budget": 100000 }
```

### Campaign Budget Optimization (CBO)
Set budget at campaign level; Facebook distributes across ad sets automatically:
```bash
POST /v25.0/act_{AD_ACCOUNT_ID}/campaigns
  daily_budget: 10000
  bid_strategy: "LOWEST_COST_WITHOUT_CAP"
```

## Billing Events

| Event | Description |
|---|---|
| `IMPRESSIONS` | Charged per 1,000 impressions (CPM) |
| `LINK_CLICKS` | Charged per link click (CPC) |
| `APP_INSTALLS` | Charged per install |
| `NONE` | Charged based on optimization goal |

## Pacing

- **Standard** — spread budget evenly across the schedule
- **Accelerated** — spend as quickly as possible (not available for all objectives)

## Reach and Frequency

Bid on predicted unique audience size with frequency caps for predictable delivery.

## Bid Multipliers

Maintain nuanced strategies within single ad sets (limited availability).
