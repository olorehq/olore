# Group and Route Data

Route data to specific groups of products from a single gtag.js implementation.

## Default Routing

All configured targets belong to the `default` group. Events without `send_to` go to all targets in `default`.

```javascript
gtag('config', 'G-XXXXXX');  // In 'default' group
gtag('event', 'page_view');   // Sent to all default targets
```

## send_to Parameter

Override default routing for specific events:

```javascript
gtag('event', 'sign_in', { 'send_to': 'G-XXXXXX-2' });
```

Send to multiple destinations:
```javascript
gtag('event', 'add_to_cart', {
  'send_to': ['G-XXXXXX-1', 'AW-YYYYYY'],
  'items': [...]
});
```

## Groups

Organize multiple targets for efficient routing. Group names **cannot contain dashes**.

### Create Groups

```javascript
gtag('config', 'G-XXXXXX-1', { 'groups': 'group1' });
gtag('config', 'G-XXXXXX-2', { 'groups': 'group1' });

// Routes to both properties in group1
gtag('event', 'sign_in', { 'send_to': 'group1' });
```

### Mixed Groups

```javascript
gtag('config', 'G-XXXXXX-1');                           // default only
gtag('config', 'G-XXXXXX-3', { 'groups': 'agency' });   // agency + default
gtag('config', 'G-XXXXXX-9', { 'groups': 'agency' });   // agency + default

// Only to agency group
gtag('event', 'sign_in', { 'send_to': 'agency' });
```

## Combined Example

```javascript
gtag('config', 'GT-XXXXXX');
gtag('config', 'DC-ZZZZZZ');

// Google Ads conversion
gtag('event', 'conversion', {
  'send_to': 'AW-YYYYYY/AbC-D_efG-h12_34-567',
  'value': 1.0,
  'currency': 'USD'
});

// Floodlight conversion
gtag('event', 'conversion', {
  'allow_custom_scripts': true,
  'send_to': 'DC-ZZZZZZ/actions/locat304+standard'
});
```
