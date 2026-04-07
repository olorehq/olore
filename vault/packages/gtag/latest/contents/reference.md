# API Reference

## Function Signature

```javascript
gtag(<command>, <command_parameters>);
```

The gtag snippet must appear on the page above any event commands.

## Commands

### config

```javascript
gtag('config', '<TARGET_ID>', {<config_params>});
```

### event

```javascript
gtag('event', '<event_name>', {<event_params>});
```

### set

```javascript
gtag('set', {<parameter_value_pairs>});
```

### get

```javascript
gtag('get', '<target>', '<field_name>', callback);
```

**Supported fields:**
- `client_id` (GA4)
- `session_id` (GA4)
- `session_number` (GA4)
- `gclid` (Google Ads, Floodlight)
- Any custom field set via `gtag('set')`

```javascript
gtag('get', 'G-XXXXXXXXXX', 'client_id', (clientID) => {
  sendToServer(clientID);
});

// Promise-based
const gclidPromise = new Promise(resolve => {
  gtag('get', 'DC-XXXXXXXX', 'gclid', resolve);
});
```

### consent

```javascript
gtag('consent', 'default', {<consent_params>});
gtag('consent', 'update', {<consent_params>});
```

## Control Parameters

| Parameter | Type | Description |
|---|---|---|
| `groups` | string/array | Assign target to groups (used in `config`) |
| `send_to` | string/array | Route event to specific target(s) |
| `event_callback` | function | Called when event processing completes |
| `event_timeout` | integer | Timeout for `event_callback` in milliseconds |

## Parameter Scope & Precedence

Three scopes (highest to lowest precedence):

1. **event** — highest, overrides all
2. **config** — per-target settings
3. **set** — global, lowest

```javascript
gtag('set', { 'campaign_name': 'Black Friday Sale' });
gtag('config', 'TARGET_ID1', { 'currency': 'USD' });

// Uses 'GBP' (event scope overrides config)
gtag('event', 'conversion', { 'currency': 'GBP', 'send_to': 'TARGET_ID1' });

// Uses 'USD' (config scope for TARGET_ID1)
gtag('event', 'conversion', { 'send_to': 'TARGET_ID1' });
```
