# Ad Rules

The Ad Rules Engine enables automated ad management without constant API monitoring. Rules evaluate conditions and execute actions automatically.

## Rule Types

| Type | Description |
|---|---|
| **Schedule-based** | Evaluate ads at set time intervals |
| **Trigger-based** | Monitor ads in real-time when data changes |

## Create a Rule

```bash
POST /v25.0/act_{AD_ACCOUNT_ID}/adrules_library

Parameters:
  name: "Pause high CPA ads"
  evaluation_spec: {
    "evaluation_type": "SCHEDULE",
    "filters": [
      {"field": "entity_type", "value": "AD", "operator": "EQUAL"},
      {"field": "cost_per_action_type", "value": "10.00", "operator": "GREATER_THAN"}
    ]
  }
  execution_spec: {
    "execution_type": "PAUSE"
  }
  access_token: "<TOKEN>"
```

## Rule Components

### evaluation_spec
Determines which objects are evaluated:
- `evaluation_type` — `SCHEDULE` or `TRIGGER`
- `filters` — conditions that must be met
- `trigger` — for trigger-based rules, what data change to watch

### execution_spec
Defines the action applied to objects that pass evaluation:
- `PAUSE` — pause the ad/ad set/campaign
- `UNPAUSE` — resume delivery
- `CHANGE_BUDGET` — adjust budget
- `CHANGE_BID` — adjust bid
- `SEND_NOTIFICATION` — alert without action

## Rule Status

| Status | Description |
|---|---|
| `ENABLED` | Rule actively running |
| `DISABLED` | Rule temporarily paused |

Delete a rule permanently with `DELETE /{RULE_ID}`.

## Common Rule Patterns

- Pause ads with CPA above threshold
- Increase budget for high-performing ad sets
- Send notifications when spend exceeds limit
- Pause ads with low click-through rate
