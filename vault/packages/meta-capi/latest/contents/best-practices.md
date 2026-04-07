# Conversions API Best Practices

## Redundant Events

Use the Conversions API **in addition to** the Meta Pixel, sending the same events through both. This protects against:
- Network connectivity issues
- Ad blockers
- Page loading errors
- Browser restrictions

## Deduplication

Ensure redundant events share identical `event_name` with either:
- `event_id` (recommended), or
- A combination of `external_id` and `fbp`

## Required Parameters

All events require:
- `action_source`
- `event_source_url` (website events only)
- `client_user_agent` (website events only)

## Event Match Quality (EMQ)

Monitor EMQ scores (out of 10) in Events Manager. Higher scores mean better matching to Meta accounts.

Recommended customer information parameters for improved EMQ:
- Email (`em`)
- IP address (`client_ip_address`)
- First and last name (`fn`, `ln`)
- Phone number (`ph`)
- Facebook click ID (`fbc`)
- Facebook browser ID (`fbp`)

## Data Freshness

- Send events **near real-time** or in batches close to real-time
- Minimize delay between `event_time` and actual API call
- Real-time delivery is recommended for best results

## Cookie Handling

- Refresh `fbp` and `fbc` cookie values regularly
- Never modify or lowercase `_fbc` values — maintain case sensitivity
- Capture `_fbp` and `_fbc` cookies as early as possible in the customer journey

## Testing

- Use the **Test Events** tool to validate setup
- Verify deduplication is working correctly
- Use the **Payload Helper** for parameter structure guidance
- Use the **Business SDK** to automate parameter hashing

## For Partners/Agencies

- Transmit a unique `partner_agent` string identifying your platform
- Offer Conversions API onboarding alongside Meta Pixel implementation
- Use the Dataset Quality API for programmatic monitoring at scale

## Account Structure

- Simplify account configuration
- Implement Learning Phase best practices
- Avoid significant campaign edits during learning
- Minimize auction overlap
- Select Automatic Placements
- Use Campaign Budget Optimization
