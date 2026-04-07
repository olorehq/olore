---
name: olore-gtag-latest
description: Local gtag documentation reference (latest). Google tag (gtag.js) documentation. Use for Google Analytics, Google Ads, and Floodlight event tracking, consent mode, e-commerce events, lead generation events, data routing, and tag configuration.
---

# gtag Documentation

Google tag (gtag.js) documentation. Use for Google Analytics, Google Ads, and Floodlight event tracking, consent mode, e-commerce events, lead generation events, data routing, and tag configuration.

## Documentation Structure

```
contents/
├── index.md       # Installation, tag IDs, verification
├── configure.md   # Commands (config/event/set), consent mode
├── routing.md     # Groups, send_to, multi-destination routing
├── reference.md   # Full API: get, consent, parameter scope
└── events.md      # All event types with required/optional params
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Installation & setup | `contents/index.md` |
| config/event/set commands | `contents/configure.md` |
| Consent mode (GDPR/privacy) | `contents/configure.md` |
| E-commerce events (purchase, cart, checkout) | `contents/events.md` |
| Lead generation events | `contents/events.md` |
| Game events (levels, scores, achievements) | `contents/events.md` |
| Item parameters for products | `contents/events.md` |
| Data routing & groups | `contents/routing.md` |
| send_to (Google Ads, GA4, Floodlight) | `contents/routing.md` |
| gtag('get') for client_id/session_id | `contents/reference.md` |
| Parameter scope & precedence | `contents/reference.md` |
| Tag ID formats (GT-, G-, AW-, DC-) | `contents/index.md` |
