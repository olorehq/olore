# Get Started with Meta Pixel

## Requirements

- Access to your website's codebase
- A Pixel ID (found in Ads Manager > Events Manager)
- Facebook Ads Manager access
- GDPR compliance measures (if applicable)

## Base Code Installation

Add the Meta Pixel base code between the `<head>` tags of your website:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
<!-- End Meta Pixel Code -->
```

Replace `YOUR_PIXEL_ID` with your actual Pixel ID in both places.

## Installation Best Practices

- Place the code in the website header for execution on every page
- Position within `<head>` tags to prevent third-party code from blocking it
- Early execution increases chances of tracking visitors before they leave
- Install on both desktop and mobile versions of your site
- Compatible with tag managers, though direct implementation is recommended

## Verification

After installation:

1. Go to **Events Manager** in Facebook Ads Manager
2. Check for new **PageView** events
3. Install the **Meta Pixel Helper** Chrome extension for debugging
