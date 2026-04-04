# Use Cases

## 1. Assign User-ID to Events

Connect online/offline events with user identifiers.

**Requirements:**
- Include `session_id` in event parameters
- Send events on the **same business day** as the online session
- If overriding `timestamp_micros`, set between session start/end times
- Set `user_id` in the request for cross-platform identification

## 2. Session Attribution

Ensure Measurement Protocol events appear with the same session attributes (geography, source, medium, campaign) as online events.

**Requirements:**
- Include `session_id`
- Send request within **24 hours** of online session start
- If overriding `timestamp_micros`, set between session start/end times

## 3. Export Events to Advertising Platforms

Include offline events in exports to Google Ads, Campaign Manager 360, etc.

**Requirements:**
- Send within **63 days** of latest online event
- `session_id` not required
- If overriding `timestamp_micros`, set within last **72 hours**

## 4. Audience Creation

Include server-side data in audience condition evaluation.

**Requirements:**
- **Web:** send within **30 days** of latest online event
- **App:** send within **42 days** of latest online event
- `session_id` not required
- If overriding `timestamp_micros`, set within last **72 hours**

## Realtime Reports

For events to appear in Realtime reports:
- Include `engagement_time_msec` set to the milliseconds elapsed since the preceding event
- Include `session_id`
