# Best Practices

## Ad Review Triggers

These changes trigger ad review (ads won't deliver until approved):
- Creative modifications (images, text, links, video)
- Targeting adjustments
- Optimization goal or billing event changes

These changes do **not** trigger review:
- Bid amounts
- Budgets
- Ad schedules

Ads paused during review remain paused after completion.

## Data Management

- Store user IDs, session keys, and ad account IDs for programmatic access
- Mismatched account and session credentials cause permission errors
- Up to **5,000 archived objects** at any time
- Move unused objects from archived to deleted for better performance
- Both archived and deleted objects remain queryable by ID

## Batch Operations

Query multiple objects simultaneously:
```bash
GET /v25.0/?ids=[{id1},{id2}]&fields=name,status,insights
```

## Change Detection

Use **ETags** to detect response changes without full data retrieval — reduces bandwidth and API calls.

## Bid Management

Suggested bids update dynamically within hours based on competitor activity. Run regular campaign reports to capture changes.

## API Access & Testing

- **Sandbox mode** — read/write testing without ad delivery
- **Graph API Explorer** — interactive testing with permission grants
- Hard-coded ad/creative IDs demonstrate functionality during app review

## Rate Limiting

- Implement **exponential backoff** when rate limited
- Use **queue systems** for controlled request pacing
- **Cache** frequently accessed data (audience insights, performance metrics)

## API Versioning

- Stay informed about updates via documentation and changelog
- Place calls within version-specific functions for independent updates
- Current version: v25.0

## Compliance

Platform Terms, Developer Policies, and Advertising Guidelines govern all API usage. Facebook reserves audit rights.
