# Meta Pixel

The Meta Pixel is a snippet of JavaScript code that allows you to track visitor activity on your website. It works by loading a small library of functions which you can use whenever a site visitor takes an action (called an event) that you want to track (called a conversion).

## Data Collection

The Meta Pixel automatically collects:

- **HTTP Headers** — IP addresses, browser info (User Agent), page location, document referrer
- **Pixel-specific Data** — Pixel ID and Facebook Cookie
- **Button Click Data** — any buttons clicked by site visitors and the labels/URLs of pages visited as a result
- **Optional Values** — developers can optionally send additional data about the visit through Custom Data events (e.g., conversion value, page type)
- **Form Field Names** — website field names (e.g., email, address, quantity) for when you use Advanced Matching or optional values

## Key Use Cases

1. **Conversion Tracking** — measure how effective your ads are by understanding what actions people take on your website
2. **Custom Audiences** — create audiences of website visitors for ad targeting based on their actions
3. **Advantage+ Catalog Ads** — show dynamically generated ads to people based on items they viewed on your website
4. **Website Conversion Funnels** — analyze the customer journey and optimize your conversion funnel

## Related Tools

- **Conversions API** — server-side event tracking (recommended to use alongside the Pixel)
- **Facebook App Events** — track activity in mobile apps
- **Pixel Helper** — Chrome extension for debugging Pixel implementation
