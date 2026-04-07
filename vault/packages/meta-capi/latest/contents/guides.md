# Conversions API Integration Guides

## Available Integration Methods

### 1. Direct API Integration
Send events directly from your server using HTTP POST requests. Full control over implementation.

### 2. Meta Business SDK
Available in PHP, Node.js, Java, Python, Ruby. Features:
- **Asynchronous Requests** — non-blocking event submission
- **Concurrent Batching** — batch multiple events efficiently
- **HTTP Service Interface** — custom endpoint routing

### 3. Conversions API Gateway
A managed server-side solution deployed on your infrastructure:
- Configuration, implementation, troubleshooting, and monitoring
- **AWS App Runner** deployment option
- Support for **multiple accounts** — connect diverse data sources from different Meta Business Accounts to a single Gateway instance
- **Control Plane API** — programmatic management of accounts, data sources, and configurations

### 4. Google Tag Manager (Server-Side)
Implementation via server infrastructure on Google Cloud Platform.

### 5. Zapier Integration
Automatically transmit events when data source changes occur.

### 6. Platform Integration
For service providers offering Meta Pixel to clients seeking server-side event functionality.

## Parameter Builder Library

Open-source SDKs for managing customer information parameters:

**Supported languages:** JavaScript (client-side), PHP, Node.js, Java, Python, Ruby (server-side)

**Benefits:**
- Automatically creates high-priority match keys
- Increases coverage of `fbc`, `fbp`, and IP address parameters
- Ensures proper formatting for improved matching
- Reduces manual work and errors

**Best practices:**
- Deploy across all platforms (mobile, desktop, browsers) and domains
- Capture `_fbp` and `_fbc` cookies as early as possible
- Never modify or lowercase `_fbc` values
- Prioritize IPv6 addresses
- Hash customer information once (client OR server, not both)
- Combine client and server libraries for optimal performance

## Troubleshooting

The Conversions API returns minimal data to conserve bandwidth:
- Valid payload: `2xx` HTTP response
- Invalid payload: `4xx` response with minimal error details

**Error handling:**
- Retry requests on non-client errors (timeouts, 5xx)
- Recommended timeout: **1500ms** (most responses under 600ms)

**Resources:**
- Facebook Developer Support
- Bug tracking database for known issues
- Developer Community Forum
- Meta Blueprint: "Troubleshoot the Conversions API" course
