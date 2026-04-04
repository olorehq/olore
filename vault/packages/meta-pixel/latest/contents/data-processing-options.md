# Data Processing Options (Limited Data Use)

Meta Pixel offers Limited Data Use (LDU), a data processing option allowing businesses to control how data is used in Meta's systems while supporting compliance with US state privacy regulations.

## Supported States

- California
- Colorado
- Connecticut

When LDU is enabled for users in applicable states, Meta processes data as a service provider/processor and limits usage per State-Specific Terms.

**Note:** Enabling LDU may impact campaign performance, retargeting capabilities, and measurement functionality.

## Browser Pixel Implementation

Include `dataProcessingOptions` **before** calling `fbq('init')`:

### Disable LDU (default behavior)

```javascript
fbq('dataProcessingOptions', []);
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
```

### Enable LDU with Meta geolocation

Let Meta determine user location automatically:

```javascript
fbq('dataProcessingOptions', ['LDU'], 0, 0);
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
```

### Enable LDU with manual location

Specify country and state explicitly (California example):

```javascript
fbq('dataProcessingOptions', ['LDU'], 1, 1000);
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
```

## Image Tag Implementation

Add parameters to pixel image tags:

| Parameter | Description |
|---|---|
| `dpo` | Data processing options (e.g., `LDU`) |
| `dpoco` | Data processing options country code |
| `dpost` | Data processing options state code |

### Disable LDU

```html
<img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=Purchase&dpo=" />
```

### Enable with geolocation

```html
<img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=Purchase&dpo=LDU&dpoco=0&dpost=0" />
```

### Enable with manual location (California)

```html
<img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=Purchase&dpo=LDU&dpoco=1&dpost=1000" />
```

## State Codes

- Country `1` = United States
- State `1000` = California
- State `1001` = Colorado
- State `1002` = Connecticut
