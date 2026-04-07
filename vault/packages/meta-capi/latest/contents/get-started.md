# Get Started with Conversions API

## Prerequisites

### 1. Pixel ID
Obtain from Ads Manager > Events Manager. If you already have a website Pixel, use the same ID for both browser and server events.

### 2. Business Manager
A Business Manager account is required. Create one through the [Help Center](https://www.facebook.com/business/help).

### 3. Access Token

**Option 1: Events Manager (Recommended)**
1. Go to Events Manager, choose your Pixel
2. Select the **Settings** tab
3. Find the **Conversions API** section
4. Click **Generate access token**
5. Follow the popup instructions

Meta automatically creates the Conversions API app and system user.

**Option 2: Your Own App**
1. Use an existing app and system user
2. Go to Business Settings
3. Assign Pixel to system user
4. Generate token

No App Review required. No special permissions needed.

## Access Token Notes

- Tokens generated in Events Manager work with all Graph API versions (v12.0+)
- The "Generate token" link only appears for users with **developer privileges**
- If behind a firewall, allowlist Meta's Crawler IPs for outbound requests

## Setup Steps

1. **Choose integration method** — direct API, Business SDK, Gateway, or partner integration
2. **Complete prerequisites** — Pixel ID, Business Manager, access token
3. **Implement** — send test events with `test_event_code`
4. **Verify** — check Events Manager for received events
5. **Go live** — remove `test_event_code` and monitor quality
