---
name: olore-meta-pixel-latest
description: Local meta-pixel documentation reference (latest). Meta Pixel documentation. Use for Facebook/Meta tracking pixel implementation, conversion tracking, standard events, custom audiences, GDPR consent, data processing options, SPA integration, and debugging.
---

# meta-pixel Documentation

Meta Pixel documentation. Use for Facebook/Meta tracking pixel implementation, conversion tracking, standard events, custom audiences, GDPR consent, data processing options, SPA integration, and debugging.

## Documentation Structure

```
contents/
├── index.md                    # Overview, data collection types, key use cases
├── get-started.md              # Base code installation, requirements, verification
├── reference.md                # Standard events, parameters, custom events, deduplication
├── custom-audiences.md         # Audience creation strategies from pixel events
├── gdpr.md                     # GDPR consent API, data categories, compliance
├── data-processing-options.md  # US state privacy (LDU), browser & image tag setup
├── single-page-apps.md         # SPA tracking: History API, React, Next.js
├── multiple-pixels.md          # Multi-pixel handling, trackSingle API
└── pixel-helper.md             # Chrome debugging extension
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Installation & setup | `contents/get-started.md`, `contents/index.md` |
| Standard events (Purchase, ViewContent, etc.) | `contents/reference.md` |
| Event parameters & custom events | `contents/reference.md` |
| Custom audiences & retargeting | `contents/custom-audiences.md` |
| GDPR cookie consent | `contents/gdpr.md` |
| US privacy / Limited Data Use | `contents/data-processing-options.md` |
| React / Next.js / SPA integration | `contents/single-page-apps.md` |
| Multiple pixels on one page | `contents/multiple-pixels.md` |
| Conversions API deduplication | `contents/reference.md` |
| Debugging & Pixel Helper | `contents/pixel-helper.md` |
