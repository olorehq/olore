> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Client

This module provides the primary Client class for interacting with the X API.
It coordinates all sub-clients and handles authentication, session management,
and OAuth2 PKCE flows. All functionality is generated from the OpenAPI specification.

## Client

<Badge color="blue">Class</Badge>

<Badge color="gray">Bases: object</Badge>

\| None = None)

Client for interacting with the X API.

## Constructors

### `__init__`

Initialize the X API client.

#### Parameters

<ParamField path="path.base_url" type="str" default="'https://api.x.com'">
  The base URL for the X API (defaults to [https://api.x.com](https://api.x.com)).
</ParamField>

<ParamField path="path.bearer_token" type="str or None" default="None">
  The bearer token for the X API (app-only authentication).
</ParamField>

<ParamField path="path.access_token" type="str or None" default="None">
  The OAuth2 access token for user context (can be used directly as bearer token).
</ParamField>

<ParamField path="path.client_id" type="str or None" default="None">
  The client ID for the X API (required for OAuth2 PKCE flow).
</ParamField>

<ParamField path="path.client_secret" type="str or None" default="None">
  The client secret for the X API.
</ParamField>

<ParamField path="path.redirect_uri" type="str or None" default="None">
  The redirect URI for OAuth2 authorization.
</ParamField>

<ParamField path="path.token" type="Dict[str, Any] or None" default="None">
  An existing OAuth2 token dictionary (if available). If provided, access\_token will be extracted.
</ParamField>

<ParamField path="path.scope" type="str or List[str] or None" default="None">
  Space-separated string or list of strings for OAuth2 authorization scopes.
</ParamField>

<ParamField path="path.authorization_base_url" type="str" default="'https://x.com/i'">
  The base URL for OAuth2 authorization (defaults to [https://x.com/i](https://x.com/i)).
</ParamField>

<ParamField path="path.auth" type="OAuth1">
  OAuth1 instance for OAuth1.0a authentication.
</ParamField>

#### Parameters

<ParamField path="path.base_url" type="str" default="'https://api.x.com'" />

<ParamField path="path.bearer_token" type="str or None" default="None" />

<ParamField path="path.access_token" type="str or None" default="None" />

<ParamField path="path.client_id" type="str or None" default="None" />

<ParamField path="path.client_secret" type="str or None" default="None" />

<ParamField path="path.redirect_uri" type="str or None" default="None" />

<ParamField path="path.token" type="Dict[str, Any] or None" default="None" />

<ParamField path="path.scope" type="str or List[str] or None" default="None" />

<ParamField path="path.authorization_base_url" type="str" default="'https://x.com/i'" />

<ParamField path="path.auth" type="OAuth1" />

### `exchange_code`

Exchange authorization code for tokens (matches TypeScript API).

#### Parameters

<ParamField path="path.code" type="Any">
  The authorization code from the callback.
</ParamField>

<ParamField path="path.code_verifier" type="Any" default="None">
  Optional code verifier (uses stored verifier if not provided).
</ParamField>

### `fetch_token`

Fetch token using authorization response URL (legacy method).

#### Parameters

<ParamField path="path.authorization_response" type="Any">
  The full callback URL received after authorization.
</ParamField>

### `get_authorization_url`

Get the authorization URL for the OAuth2 PKCE flow.

#### Parameters

<ParamField path="path.state" type="Any" default="None">
  Optional state parameter for security.
</ParamField>

### `is_token_expired`

Check if the OAuth2 token is expired.

### `refresh_token`

Refresh the OAuth2 token.
