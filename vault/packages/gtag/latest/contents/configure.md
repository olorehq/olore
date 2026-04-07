# Configuration

## Commands Overview

gtag.js uses three primary commands to send data.

### config — Establish Data Flow

Connects your website to a Google product:

```javascript
gtag('config', 'TAG_ID', {<additional_config_params>});
```

Call `config` once per Google tag. Subsequent updates use `set`.

```javascript
gtag('config', 'GT-XXXXXX');         // Primary Google tag
gtag('config', 'G-XXXXXX');          // GA4 property
gtag('config', 'DC-ZZZZZZ');        // Floodlight
```

Disable automatic page views:
```javascript
gtag('config', 'TAG_ID', { 'send_page_view': false });
```

### event — Send Event Data

```javascript
gtag('event', 'event_name', {
  'key': 'value'
});
```

Two types:
- **Recommended events** — standardized names with predefined parameters (unlock reporting features)
- **Custom events** — developer-defined names and parameters

```javascript
gtag('event', 'newsletter_signup', {
  'time': Date.now()
});
```

### set — Global Parameters

Defines values sent with every subsequent event on the page:

```javascript
gtag('set', 'campaign', {
  'id': 'abc',
  'source': 'google',
  'name': 'black_friday_promotion',
  'term': 'running+shoes'
});
```

Use `config` or `event` commands wherever possible over `set`.

## Consent Mode

### Set Default Consent

```javascript
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update': 500
});
```

### Update Consent (after user accepts)

```javascript
gtag('consent', 'update', {
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted',
  'analytics_storage': 'granted'
});
```

### Consent Parameters

| Parameter | Values | Purpose |
|---|---|---|
| `ad_storage` | `granted` / `denied` | Ad-related cookies/identifiers |
| `ad_user_data` | `granted` / `denied` | User data sharing for ads |
| `ad_personalization` | `granted` / `denied` | Personalized ad serving |
| `analytics_storage` | `granted` / `denied` | Analytics-related storage |
| `wait_for_update` | integer (ms) | Wait time for consent update |
