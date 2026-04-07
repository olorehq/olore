# Conversions API Troubleshooting

## HTTP Response Codes

| Code | Meaning |
|---|---|
| `2xx` | Valid payload, events accepted |
| `4xx` | Invalid payload, minimal error details in response body |
| `5xx` | Server error, retry the request |

## Error Handling

- Retry on non-client errors (timeouts, 5xx responses)
- Recommended timeout setting: **1500ms**
- Most responses complete under **600ms**
- One invalid event in a batch rejects the entire batch

## Common Issues

### Events Not Appearing in Events Manager
- Events may take up to **20 minutes** to appear
- Verify `access_token` is valid and not expired
- Confirm `PIXEL_ID` matches your Events Manager pixel
- Check `event_time` is within 7 days (web) or 62 days (offline)

### Low Event Match Quality
- Add more customer information parameters
- Ensure PII fields are properly SHA-256 hashed
- Include `fbc` and `fbp` cookies when available
- Verify email/phone formatting before hashing

### Deduplication Not Working
- Ensure `event_id` matches exactly between Pixel and CAPI
- Ensure `event_name` matches exactly between Pixel and CAPI
- Check deduplication tab in Events Manager

### Batch Rejections
- Verify all events in the batch are valid
- Check required parameters per event type
- Ensure `event_time` is a valid Unix timestamp in seconds

## Support Resources

- [Facebook Developer Support](https://developers.facebook.com/support/)
- [Bug Tracking Database](https://developers.facebook.com/bugs/)
- [Developer Community Forum](https://developers.facebook.com/community/)
- [Business Help Center](https://www.facebook.com/business/help)
- [Meta Blueprint](https://www.facebookblueprint.com/) — Conversions API courses
- [Pixel Helper Chrome Extension](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
