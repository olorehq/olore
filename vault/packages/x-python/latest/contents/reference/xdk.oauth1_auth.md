> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# oauth1_auth

This module provides OAuth1.0a authentication functionality for secure
authorization flows. Includes request token generation, authorization URL
generation, access token exchange, and OAuth1 signature generation.

### `class xdk.oauth1_auth.OAuth1`

OAuth1 authentication handler for the X API.

#### Parameters

<ParamField path="path.api_key" type="str" />

<ParamField path="path.api_secret" type="str" />

<ParamField path="path.callback" type="str" />

<ParamField path="path.access_token" type="str or None" default="None" />

<ParamField path="path.access_token_secret" type="str or None" default="None" />

### `__init__`

Initialize OAuth1 authentication.

#### Parameters

<ParamField path="path.api_key" type="str">
  API Key (Consumer Key).
</ParamField>

<ParamField path="path.api_secret" type="str">
  API Secret (Consumer Secret).
</ParamField>

<ParamField path="path.callback" type="str">
  Callback URL for OAuth flow.
</ParamField>

<ParamField path="path.access_token" type="str or None" default="None">
  Access Token (if already obtained).
</ParamField>

<ParamField path="path.access_token_secret" type="str or None" default="None">
  Access Token Secret (if already obtained).
</ParamField>

### `build_request_header`

Build OAuth1 authorization header for API requests.

#### Parameters

<ParamField path="path.method" type="str">
  HTTP method (GET, POST, etc.).
</ParamField>

<ParamField path="path.url" type="str">
  Request URL (may include query parameters).
</ParamField>

<ParamField path="body.body" type="str" default="''">
  Request body (form-encoded string or empty).
</ParamField>

#### Returns

`str`

### `get_access_token`

Exchange verifier for access token.

#### Parameters

<ParamField path="path.verifier" type="str">
  OAuth verifier from callback or PIN.
</ParamField>

#### Returns

`OAuth1AccessToken`

### `get_authorization_url`

Get the authorization URL for OAuth1 flow.

#### Parameters

<ParamField path="path.login_with_x" type="bool" default="False">
  Whether to use “Log in with X” flow.
</ParamField>

#### Returns

`str`

### `get_request_token`

Get request token to start OAuth1 flow.
:returns: Request token with oauth\_token and oauth\_token\_secret.
:rtype: OAuth1RequestToken

#### Returns

`OAuth1RequestToken`

### `start_oauth_flow`

Convenience method to start the OAuth1 flow.

#### Parameters

<ParamField path="path.login_with_x" type="bool" default="False">
  Whether to use “Log in with X” flow.
</ParamField>

#### Returns

`str`

### `class xdk.oauth1_auth.OAuth1AccessToken`

OAuth1 access token response.

#### Parameters

<ParamField path="path.access_token" type="str" />

<ParamField path="path.access_token_secret" type="str" />

### `__init__`

Initialize OAuth1 access token.

#### Parameters

<ParamField path="path.access_token" type="str">
  The access token.
</ParamField>

<ParamField path="path.access_token_secret" type="str">
  The access token secret.
</ParamField>

### `class xdk.oauth1_auth.OAuth1RequestToken`

OAuth1 request token response.

#### Parameters

<ParamField path="path.oauth_token" type="str" />

<ParamField path="path.oauth_token_secret" type="str" />

### `__init__`

Initialize OAuth1 request token.

#### Parameters

<ParamField path="path.oauth_token" type="str">
  The OAuth token.
</ParamField>

<ParamField path="path.oauth_token_secret" type="str">
  The OAuth token secret.
</ParamField>
