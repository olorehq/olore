---
name: olore-meta-capi-latest
description: Local meta-capi documentation reference (latest). Meta Conversions API documentation. Use for server-side event tracking, web/app/offline/messaging events, deduplication with Meta Pixel, parameters, Business SDK, Dataset Quality API, and conversion leads integration.
---

# meta-capi Documentation

Meta Conversions API documentation. Use for server-side event tracking, web/app/offline/messaging events, deduplication with Meta Pixel, parameters, Business SDK, Dataset Quality API, and conversion leads integration.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/index.md` | Meta Conversions API | Overview, supported event sources, core endpoint, available SDKs |
| `contents/get-started.md` | Get Started with Conversions API | Prerequisites, access token generation, 5-step setup process |
| `contents/using-the-api.md` | Using the Conversions API | Endpoint, JSON payload format, batch limits, test events, rate limiting, LDU privacy |
| `contents/parameters.md` | Conversions API Parameters | All parameters: server event fields, user_data (hashed/unhashed), custom_data, app_data, standard event names |
| `contents/deduplication.md` | Deduplicating Pixel and Server Events | Event ID + event name method, FBP/external_id method, generating event IDs, verification |
| `contents/best-practices.md` | Conversions API Best Practices | Redundant setup, required parameters, EMQ improvement, data freshness, cookie handling |
| `contents/app-events.md` | Conversions API for App Events | action_source=app, extinfo array (16 fields), iOS/Android purchase and install examples |
| `contents/offline-events.md` | Conversions API for Offline Events | Physical store events, 62-day upload window, order ID deduplication |
| `contents/business-messaging.md` | Conversions API for Business Messaging | WhatsApp (ctwa_clid), Messenger (PSID), Instagram Direct (IGSID) events |
| `contents/conversion-leads.md` | Conversion Leads Integration | CRM lead optimization, eligibility requirements, 3-4 week implementation timeline |
| `contents/dataset-quality-api.md` | Dataset Quality API | EMQ scores, ACR metrics, event coverage (75% target), freshness, authentication for partners |
| `contents/verifying-setup.md` | Verifying Your Conversions API Setup | 4-step checklist: event receipt, freshness, deduplication rate, EMQ score (6.0+ target) |
| `contents/guides.md` | Conversions API Integration Guides | Direct API, Business SDK, CAPI Gateway (AWS App Runner), GTM, Zapier, parameter builder |
| `contents/support.md` | Conversions API Troubleshooting | HTTP codes (2xx/4xx/5xx), common issues, 1500ms timeout recommendation, support links |

## When to use

Use this skill when the user asks about:
- Sending server-side events to Meta (Facebook) via the Conversions API
- Setting up or configuring the Meta Pixel with server-side redundancy
- API parameters: user_data fields, hashing requirements, custom_data, action_source values
- Deduplicating browser (Pixel) and server (CAPI) events using event_id
- Mobile app event tracking (iOS 14.5+ advertiser_tracking_enabled, extinfo)
- Offline/physical store conversion tracking
- WhatsApp, Messenger, or Instagram Direct conversion events
- Event Match Quality (EMQ) scores and how to improve them
- Dataset Quality API for programmatic monitoring at scale
- CRM integration for Lead Ads conversion optimization
- Business SDK (PHP, Node.js, Java, Python, Ruby) setup
- CAPI Gateway deployment (AWS App Runner)
- Testing events with test_event_code
- US state privacy compliance (Limited Data Use / LDU)

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
