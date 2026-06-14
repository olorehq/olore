> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# OAuth2PKCEAuth

This module provides OAuth2 PKCE (Proof Key for Code Exchange) authentication
functionality for secure authorization flows. Includes code verifier generation,
token management, and automatic token refresh capabilities.

### `class xdk.oauth2_auth.OAuth2PKCEAuth`

OAuth2 PKCE authentication for the X API.

#### Parameters

<ParamField path="path.base_url" type="str" default="'https://api.x.com'" />

<ParamField path="path.authorization_base_url" type="str" default="'https://x.com/i'" />

<ParamField path="path.client_id" type="str or None" default="None" />

<ParamField path="path.client_secret" type="str or None" default="None" />

<ParamField path="path.redirect_uri" type="str or None" default="None" />

<ParamField path="path.token" type="Dict[str, Any] or None" default="None" />

<ParamField path="path.scope" type="str or List[str] or None" default="None" />

### `__init__`

Initialize the OAuth2 PKCE authentication.

#### Parameters

<ParamField path="path.base_url" type="str" default="'https://api.x.com'">
  The base URL for the X API token endpoint (defaults to [https://api.x.com](https://api.x.com)).
</ParamField>

<ParamField path="path.authorization_base_url" type="str" default="'https://x.com/i'">
  The base URL for OAuth2 authorization (defaults to [https://x.com/i](https://x.com/i)).
</ParamField>

<ParamField path="path.client_id" type="str or None" default="None">
  The client ID for the X API.
</ParamField>

<ParamField path="path.client_secret" type="str or None" default="None">
  The client secret for the X API.
</ParamField>

<ParamField path="path.redirect_uri" type="str or None" default="None">
  The redirect URI for OAuth2 authorization.
</ParamField>

<ParamField path="path.token" type="Dict[str, Any] or None" default="None">
  An existing OAuth2 token dictionary (if available).
</ParamField>

<ParamField path="path.scope" type="str or List[str] or None" default="None">
  Space-separated string or list of strings for OAuth2 authorization scopes.
</ParamField>

### `exchange_code`

Exchange authorization code for tokens (matches TypeScript API).

#### Parameters

<ParamField path="path.code" type="str">
  The authorization code from the callback.
</ParamField>

<ParamField path="path.code_verifier" type="str or None" default="None">
  Optional code verifier (uses stored verifier if not provided).
</ParamField>

#### Returns

`Dictstr, Any`

### `fetch_token`

Fetch token using authorization response URL (legacy method, uses exchange\_code internally).

#### Parameters

<ParamField path="path.authorization_response" type="str">
  The full callback URL received after authorization
</ParamField>

#### Returns

`Dictstr, Any`

### `get_authorization_url`

Get the authorization URL for the OAuth2 PKCE flow.

#### Parameters

<ParamField path="path.state" type="str or None" default="None">
  Optional state parameter for security.
</ParamField>

#### Returns

`str`

### `get_code_challenge`

Get the current code challenge (for PKCE).
:returns: The current code challenge, or None if not set.
:rtype: Optional\[str]

#### Returns

`str | None`

### `get_code_verifier`

Get the current code verifier (for PKCE).
:returns: The current code verifier, or None if not set.
:rtype: Optional\[str]

#### Returns

`str | None`

### `is_token_expired`

Check if the token is expired.
:returns: True if the token is expired, False otherwise.
:rtype: bool

#### Returns

`bool`

### `refresh_token`

Refresh the access token.
:returns: The refreshed token dictionary
:rtype: Dict\[str, Any]

#### Returns

`Dictstr, Any`

### `set_pkce_parameters`

Manually set PKCE parameters.

#### Parameters

<ParamField path="path.code_verifier" type="str">
  The code verifier to use.
</ParamField>

<ParamField path="path.code_challenge" type="str or None" default="None">
  Optional code challenge (will be generated if not provided).
</ParamField>
