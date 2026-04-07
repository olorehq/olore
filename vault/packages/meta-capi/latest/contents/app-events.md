# Conversions API for App Events

Send mobile app events to Meta through the Conversions API for a unified view in Events Manager.

## Prerequisites

### Dataset Setup
Link your app with a dataset in Events Manager:
- Data Sources tab > App Settings > Link dataset
- Or: Data Sources tab > Overview > "Link to dataset"

Datasets consolidate event data from Meta Pixel, App Events API, Offline Conversions API, and Messaging Events API.

## Required Fields

### action_source
Must be set to `"app"` for all app events.

### App Data Fields (Required)

| Parameter | Type | Description |
|---|---|---|
| `advertiser_tracking_enabled` | Integer | 0 or 1 (required for iOS 14.5+) |
| `application_tracking_enabled` | Integer | 0 or 1 |
| `extinfo` | Array | 16-element device info array |

### extinfo Array Structure

| Index | Value | Required |
|---|---|---|
| 0 | Version: `a2` (Android) or `i2` (iOS) | Yes |
| 1 | App package name | No |
| 2 | Short version | No |
| 3 | Long version | No |
| 4 | OS version | Yes |
| 5 | Device model | No |
| 6 | Locale | No |
| 7 | Timezone abbreviation | No |
| 8 | Carrier | No |
| 9 | Screen width | No |
| 10 | Screen height | No |
| 11 | Screen density | No |
| 12 | CPU cores | No |
| 13 | External storage size (GB) | No |
| 14 | Free external storage (GB) | No |
| 15 | Device timezone | No |

Use empty strings as placeholders for missing values.

## Example: Purchase Event

```json
{
  "data": [{
    "event_name": "Purchase",
    "event_time": 1684389752,
    "action_source": "app",
    "user_data": {
      "client_ip_address": "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
      "madid": "38400000-8cf0-11bd-b23e-10b96e40000d"
    },
    "custom_data": {
      "currency": "USD",
      "value": "142.52"
    },
    "app_data": {
      "advertiser_tracking_enabled": 1,
      "application_tracking_enabled": 1,
      "extinfo": ["i2", "com.some.app", "771", "Version 7.7.1",
                  "10.1.1", "iPhone5,1", "En_US", "PDT", "AT&T",
                  "320", "568", "2", "2", "128", "8", "USA/New York"]
    }
  }]
}
```

## Example: App Install Event

```json
{
  "data": [{
    "event_name": "MobileAppInstall",
    "event_time": 1684389252,
    "action_source": "app",
    "app_data": {
      "advertiser_tracking_enabled": 1,
      "application_tracking_enabled": 1,
      "extinfo": ["a2", "com.some.app", "771", "Version 7.7.1",
                  "10.1.1", "Pixel 6", "En_US", "PDT", "T-Mobile",
                  "1080", "2400", "2.625", "8", "128", "64", "USA/New York"]
    }
  }]
}
```

## Deduplication

Uses `event_id` and `event_name` matching. For app install events, only one install is attributed in the last 90-day window.

iOS SDK example:
```swift
AppEvents.shared.logEvent(.achievedLevel, parameters:
  [AppEvents.ParameterName(rawValue: "event_id"): "123"])
```

## Customer Information Parameters

| Parameter | Hashing |
|---|---|
| `anon_id` (install ID) | Do not hash |
| `client_ip_address` | Do not hash |
| `madid` (mobile advertiser ID) | Do not hash |
