---
name: olore-meta-capi-latest
description: Local meta-capi documentation reference (latest). Meta Conversions API documentation. Use for server-side event tracking, web/app/offline/messaging events, deduplication with Meta Pixel, parameters, Business SDK, Dataset Quality API, and conversion leads integration.
---

# meta-capi Documentation

Meta Conversions API documentation. Use for server-side event tracking, web/app/offline/messaging events, deduplication with Meta Pixel, parameters, Business SDK, Dataset Quality API, and conversion leads integration.

## Documentation Structure

```
contents/
├── index.md                # Overview, event sources, endpoint, SDKs
├── get-started.md          # Prerequisites, access token, setup steps
├── using-the-api.md        # Endpoint, payload format, batch limits, testing
├── parameters.md           # All parameter reference (server, user, custom, app)
├── deduplication.md        # Pixel + CAPI deduplication methods
├── best-practices.md       # Redundancy, EMQ, data freshness, cookies
├── app-events.md           # Mobile app events with extinfo array
├── offline-events.md       # Physical store events, order ID dedup
├── business-messaging.md   # WhatsApp, Messenger, Instagram Direct
├── conversion-leads.md     # CRM Lead Ads optimization
├── dataset-quality-api.md  # Programmatic quality monitoring
├── verifying-setup.md      # 4-step verification checklist
├── guides.md               # Integration methods and parameter builder
└── support.md              # Troubleshooting and error handling
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started & prerequisites | `contents/get-started.md` |
| API endpoint & payload format | `contents/using-the-api.md` |
| All parameters (user_data, custom_data, app_data) | `contents/parameters.md` |
| Standard event names & custom events | `contents/parameters.md` |
| Pixel + CAPI deduplication | `contents/deduplication.md` |
| Event Match Quality (EMQ) | `contents/best-practices.md`, `contents/dataset-quality-api.md` |
| Mobile app events (iOS/Android) | `contents/app-events.md` |
| Offline / physical store events | `contents/offline-events.md` |
| WhatsApp / Messenger / Instagram events | `contents/business-messaging.md` |
| CRM / Lead Ads optimization | `contents/conversion-leads.md` |
| Quality monitoring at scale | `contents/dataset-quality-api.md` |
| Setup verification | `contents/verifying-setup.md` |
| Business SDK, Gateway, GTM, Zapier | `contents/guides.md` |
| Troubleshooting & errors | `contents/support.md` |
| US privacy / Limited Data Use | `contents/using-the-api.md` |
