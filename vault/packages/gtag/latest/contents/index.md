# Google Tag (gtag.js)

The Google tag is a single tag you add to your website to use Google measurement and advertising products: Google Ads, Google Analytics, Campaign Manager, Display & Video 360, and Search Ads 360.

## Benefits

- Future-proof conversion measurement with latest features
- Codeless tag management without manual code changes
- Faster integration with Google products
- More accurate conversion tracking

## Installation

Copy the snippet and place immediately after the opening `<head>` tag on every page:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TAG_ID');
</script>
```

Replace `TAG_ID` with your tag ID from the Google product.

## Tag ID Formats

| Prefix | Product | Example |
|---|---|---|
| `GT-` | Google tag (new standard) | `GT-XXXXXX` |
| `G-` | Google Analytics 4 (legacy) | `G-XXXXXX` |
| `AW-` | Google Ads (legacy) | `AW-YYYYYY` |
| `DC-` | Floodlight / Campaign Manager | `DC-ZZZZZZ` |
| `UA-` | Universal Analytics | **Not compatible** |

## Verification

Use Tag Assistant at `tagassistant.google.com` — enter your website URL and check for your tag ID in the "Google tags found" section.
