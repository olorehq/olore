# Meta Pixel Helper

The Pixel Helper is a Chrome extension that automatically reviews websites for Meta Pixel code installation and functionality.

## Installation

1. Use the **Chrome** web browser
2. Install the [Pixel Helper extension from the Chrome Store](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
3. Log into Facebook

## Usage

1. Navigate to your website in Chrome
2. Click the Pixel Helper icon in the toolbar
3. A side panel shows:
   - Which Pixels were detected on the page
   - Whether they loaded successfully
   - What events fired

## Understanding the Badge

| Badge | Meaning |
|---|---|
| No badge | No Pixels detected on the page |
| Dot | Pixel detected but no events fired |
| Number | Count of Pixel events fired on the page |

## Troubleshooting

The Pixel Helper reports:
- **Errors** — issues preventing proper Pixel operation
- **Warnings** — potential improvements for better tracking
- **Event details** — click into a specific pixel or event for detailed parameter analysis

Common issues detected:
- Pixel not loading (blocked by ad blockers or CSP)
- Events firing with incorrect parameters
- Missing required parameters (e.g., `currency` and `value` for Purchase)
- Duplicate events firing unintentionally
