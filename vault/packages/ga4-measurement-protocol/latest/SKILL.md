---
name: olore-ga4-measurement-protocol-latest
description: Local ga4-measurement-protocol documentation reference (latest). GA4 Measurement Protocol documentation. Use for server-side Google Analytics event tracking, sending web/app/offline events, e-commerce tracking, user properties, event validation, and debugging.
---

# ga4-measurement-protocol Documentation

GA4 Measurement Protocol documentation. Use for server-side Google Analytics event tracking, sending web/app/offline events, e-commerce tracking, user properties, event validation, and debugging.

## Documentation Structure

```
contents/
├── index.md                 # Overview, endpoints, key limits
├── sending-events.md        # Request format, code examples, timestamps, sessions
├── reference.md             # Full API reference and schema
├── events.md                # All event types with required/optional params
├── validating-events.md     # Validation endpoint and error codes
├── user-properties.md       # Custom user properties
├── use-cases.md             # User-ID, attribution, ad export, audiences
├── verify-implementation.md # 4-step verification checklist
├── troubleshooting.md       # Common issues and debugging
└── policy.md                # Terms, consent, prohibited data
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Endpoint & request format | `contents/sending-events.md`, `contents/reference.md` |
| E-commerce events (purchase, cart, checkout) | `contents/events.md` |
| All standard events & item parameters | `contents/events.md` |
| Event validation & error codes | `contents/validating-events.md` |
| User properties & segmentation | `contents/user-properties.md` |
| Web stream (measurement_id, client_id) | `contents/sending-events.md` |
| App stream (firebase_app_id, app_instance_id) | `contents/sending-events.md` |
| Timestamps & backdating rules | `contents/sending-events.md`, `contents/reference.md` |
| Session handling & Realtime reports | `contents/sending-events.md`, `contents/use-cases.md` |
| Google Ads / advertising export | `contents/use-cases.md` |
| Audience creation from server events | `contents/use-cases.md` |
| Debug mode & DebugView | `contents/verify-implementation.md` |
| Troubleshooting & common errors | `contents/troubleshooting.md` |
| EU data collection | `contents/reference.md` |
| API limits (events, params, body size) | `contents/index.md` |
