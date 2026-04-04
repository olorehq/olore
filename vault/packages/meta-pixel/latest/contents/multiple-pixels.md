# Multiple Pixels on One Page

When multiple Meta Pixels are initialized on the same page, all subsequent `track` calls fire for every initialized Pixel, regardless of which initialization preceded the tracking call.

## The Problem: Event Overfiring

```javascript
fbq('init', 'PIXEL-A');
fbq('track', 'Purchase', { value: 4, currency: 'GBP' });

fbq('init', 'PIXEL-B');
fbq('trackCustom', 'Step4');  // Fires for BOTH Pixel A and Pixel B!
```

The `Step4` custom event fires on Pixel A unintentionally.

## Solution: Selective Firing

Use `trackSingle` and `trackSingleCustom` to target specific Pixels:

```javascript
// Initialize both pixels
fbq('init', 'PIXEL-A');
fbq('init', 'PIXEL-B');

// PageView fires for both (intentional)
fbq('track', 'PageView');

// Purchase fires only for Pixel A
fbq('trackSingle', 'PIXEL-A', 'Purchase', {
  value: 4,
  currency: 'GBP'
});

// Custom event fires only for Pixel B
fbq('trackSingleCustom', 'PIXEL-B', 'Step4');
```

## API Reference

| Method | Scope |
|---|---|
| `fbq('track', ...)` | Fires for ALL initialized pixels |
| `fbq('trackCustom', ...)` | Fires for ALL initialized pixels |
| `fbq('trackSingle', pixelId, ...)` | Fires for ONE specific pixel |
| `fbq('trackSingleCustom', pixelId, ...)` | Fires for ONE specific pixel |

## Best Practice

Always use `trackSingle` / `trackSingleCustom` when multiple stakeholders use separate Pixels on the same page to prevent reporting conflicts.
