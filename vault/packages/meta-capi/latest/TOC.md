# meta-capi Documentation Structure

## Files

| File | Description |
|------|-------------|
| `contents/index.md` | Overview of the Conversions API: key benefits, supported event sources, core endpoint, Business SDKs |
| `contents/get-started.md` | Prerequisites (Pixel ID, Business Manager, access token), setup steps, and go-live checklist |
| `contents/using-the-api.md` | Endpoint, request payload format, batch limits, testing with test_event_code, rate limiting, US privacy (LDU) |
| `contents/parameters.md` | Full parameter reference: server event, user_data (hashed/unhashed), custom_data, app_data, standard event names |
| `contents/deduplication.md` | Deduplication methods (event_id + event_name, FBP/external_id), browser/server examples, verification |
| `contents/best-practices.md` | Redundant setup, EMQ optimization, data freshness, cookie handling, partner recommendations |
| `contents/app-events.md` | Mobile app events: action_source=app, extinfo array structure, iOS/Android examples, deduplication |
| `contents/offline-events.md` | Physical store events: action_source=physical_store, 62-day upload window, order ID deduplication |
| `contents/business-messaging.md` | WhatsApp, Messenger, Instagram Direct events: permissions, user identifiers, dataset setup |
| `contents/conversion-leads.md` | CRM Lead Ads optimization: eligibility, implementation timeline, funnel stage uploads |
| `contents/dataset-quality-api.md` | Programmatic quality monitoring: EMQ scores, ACR metrics, event coverage, freshness, authentication |
| `contents/verifying-setup.md` | 4-step verification: event receipt, freshness, deduplication rate, Event Match Quality (EMQ) |
| `contents/guides.md` | Integration methods: direct API, Business SDK, CAPI Gateway, GTM, Zapier, parameter builder library |
| `contents/support.md` | Troubleshooting: HTTP codes, common issues (missing events, low EMQ, batch rejections), support resources |
