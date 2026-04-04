# Verifying Your Conversions API Setup

Four core verification procedures to ensure proper implementation.

## 1. Events Receipt Confirmation

Within **20 minutes** of sending events:
1. Go to Events Manager > Data Sources > your Pixel
2. Check the **Overview** section for event counts
3. View counts before deduplication and policy filtering
4. Click individual event types for detailed metrics

## 2. Event Freshness

Minimize delay between `event_time` and API submission.

1. In Events Manager, select your Pixel Overview
2. Click **Event Details**
3. Navigate to the **Event Freshness** tab
4. View average delay times (real-time to weekly scale)

**Goal:** Real-time or near-real-time delivery.

## 3. Deduplication Verification

Essential when running Conversions API alongside Meta Pixel.

In the **Event Deduplication** tab:
- **Rate of Events Deduplicated** — percentage of duplicated events (higher is better)
- **Rate of Deduplication Key Usage** — percentage containing each dedupe key and overlap metrics

Low deduplication rates? Add `event_id` to both Pixel and CAPI events.

## 4. Event Match Quality (EMQ)

Score ranges from **1-10**. Measures how effectively customer information matches events to Facebook accounts.

- Target: **6.0 or higher** to reduce cost-per-action
- Click the score in Events Manager for detailed recommendations
- Add more customer information parameters to improve score

## Recommended Verification Checklist

- [ ] Events appear in Events Manager within 20 minutes
- [ ] Event freshness shows real-time or near-real-time
- [ ] Deduplication rate is high (if using Pixel + CAPI)
- [ ] EMQ score is 6.0+
- [ ] Test events validated with `test_event_code`
- [ ] All required parameters present per event type
