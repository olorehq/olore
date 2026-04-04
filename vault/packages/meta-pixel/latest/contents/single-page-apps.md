# Meta Pixel in Single Page Applications

Single Page Applications (SPAs) require a different tracking approach because a page does not require a reload when the URL changes.

## Requirements

- Meta Pixel base code already installed on your webpage

## Tracking Strategy

The core approach is to track events whenever there is a URL change in the SPA, using the History State API.

### Using history.pushState

```javascript
// When navigating within the SPA
function trackNavigation(url, eventName) {
  history.pushState(null, null, url);
  fbq('track', eventName);
}

// Example: Track different events for different routes
trackNavigation('/products', 'ViewContent');
trackNavigation('/cart', 'AddToCart');
trackNavigation('/checkout', 'InitiateCheckout');
```

### React Router Example

```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    fbq('track', 'PageView');
  }, [location.pathname]);

  return null;
}
```

### Next.js App Router Example

```javascript
'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function MetaPixelPageView() {
  const pathname = usePathname();

  useEffect(() => {
    fbq('track', 'PageView');
  }, [pathname]);

  return null;
}
```

## Disabling Automatic PageView on History Changes

The `disablePushState` option prevents automatic `PageView` events on history state changes (not recommended in most cases):

```javascript
fbq('set', 'autoConfig', 'false', 'YOUR_PIXEL_ID');
```

## Debugging

- Use **Google Tag Manager** for event tracking management
- Use the **Meta Pixel Helper** Chrome extension to monitor events firing
- Check **Events Manager** for real-time event data
