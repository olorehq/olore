# Troubleshooting

## Common Error Categories

### Authorization Errors
Access token issues — expiration, invalidity, or insufficient permissions.
- Refresh tokens regularly
- Request correct scopes during authorization
- Verify `ads_management` or `ads_read` permissions

### Invalid Parameters
Incorrect or missing parameters in requests.
- Validate input data before API calls
- Use the validation tools and Graph API Explorer
- Check required fields per endpoint

### Resource Not Found
Attempting to access non-existent or deleted resources.
- Verify resource existence before operations
- Deleted objects aren't in edge queries (query by ID directly)

### Rate Limiting
Too many requests in a short timeframe.
- Implement **exponential backoff**
- Use batch requests to reduce call count
- Cache frequently accessed data

### Transient Errors
When response includes `"is_transient": true`:
- Wait and retry — recovery may occur soon
- Don't treat as permanent failure

## Error Response Format

```json
{
  "error": {
    "message": "Error description",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 463,
    "is_transient": false,
    "fbtrace_id": "AbcDeFgHiJk"
  }
}
```

## Common Error Codes

| Code | Description |
|---|---|
| 1 | Unknown error |
| 2 | Service temporarily unavailable |
| 4 | Too many API calls (rate limit) |
| 17 | Too many Marketing API calls |
| 100 | Invalid parameter |
| 190 | Invalid access token |
| 200 | Permissions error |
| 2635 | Ad account doesn't exist or not accessible |

## Optimization Tips

- **Error logging** — implement comprehensive logging to identify patterns
- **Monitoring** — set alerts for critical failures
- **Queue systems** — pace requests within API limits
- **Caching** — reduce API calls for stable data
- **Batch requests** — combine multiple operations into single calls
