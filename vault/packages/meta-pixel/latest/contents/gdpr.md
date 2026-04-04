# GDPR Compliance for Meta Pixel

The General Data Protection Regulation (GDPR) creates consistent data protection rules across Europe. It applies to companies (regardless of where they are based) who process personal data about individuals in the EU.

## Cookie Consent Implementation

You must implement affirmative consent mechanisms before tracking activities occur.

### Consent API

```javascript
// Revoke consent before initialization
fbq('consent', 'revoke');

// Initialize the Pixel
fbq('init', 'YOUR_PIXEL_ID');

// Track PageView (will be queued, not sent until consent granted)
fbq('track', 'PageView');

// Grant consent only AFTER user affirmatively agrees
// (e.g., clicks accept on cookie banner)
fbq('consent', 'grant');
```

### Implementation Pattern

1. Call `fbq('consent', 'revoke')` before `fbq('init', ...)`
2. Initialize the Pixel and queue events as normal
3. Call `fbq('consent', 'grant')` only after the user accepts cookies via your consent banner/checkbox
4. Queued events will be sent once consent is granted

## Data Types Collected

The Meta Pixel collects five categories of data:

1. **HTTP Headers** — IP addresses, browser info, page location, referrer
2. **Pixel-specific Data** — Pixel ID and Facebook Cookie
3. **Button Click Data** — buttons clicked and resulting page visits
4. **Optional Values** — developer-submitted conversion data (values, page types)
5. **Form Field Names** — field identifiers (not values, unless Advanced Matching is enabled)

## Responsibility

Individual companies are responsible for their own GDPR compliance. You may use existing consent management systems (e.g., tag managers with consent mode) if already addressing consent requirements.

## Resources

- [Meta Cookie Policy](https://www.facebook.com/policies/cookies/)
- [Advertiser Help Center](https://www.facebook.com/business/help/225009134722945)
- [Meta GDPR Guide](https://www.facebook.com/business/gdpr)
