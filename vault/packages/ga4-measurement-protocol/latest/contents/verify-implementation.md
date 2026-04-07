# Verify Implementation

## Step 1: Get a Valid Client/App Instance ID

Before using the Measurement Protocol, send at least one event from the client-side SDK to capture a valid ID:
- **Web:** get `client_id` from gtag.js
- **App:** get `app_instance_id` from Firebase SDK (unique per installation, different from `firebase_app_id`)

## Step 2: Send a Test Event

Construct a Measurement Protocol request with valid IDs and send to the production endpoint.

## Step 3: Check Realtime View

1. In Google Analytics, go to **Reports > Realtime**
2. Events typically display within **seconds**
3. Check the bottom charts for event count and key events by name

## Step 4: Enable Debug Mode

Add these parameters to test events for detailed inspection in DebugView:

```json
{
  "client_id": "CLIENT_ID",
  "events": [{
    "name": "purchase",
    "params": {
      "debug_mode": true,
      "engagement_time_msec": 100,
      "currency": "USD",
      "value": 49.99,
      "transaction_id": "TXN-123"
    }
  }]
}
```

Then monitor through **DebugView** in Google Analytics for comprehensive event inspection.

## If Events Don't Appear

- Verify `api_secret` is correct and not revoked
- Verify `measurement_id` (web) or `firebase_app_id` (app) matches your stream
- Ensure `client_id` or `app_instance_id` is valid (from actual client-side collection)
- Check you're POSTing to the correct endpoint
- Include `engagement_time_msec` and `session_id` for Realtime visibility
