# better-auth Table of Contents

## Directory Map

```
contents/
├── adapters/  (9 files)
├── ai-resources/  (3 files)
├── authentication/  (38 files)
├── concepts/  (13 files)
├── examples/  (5 files)
├── guides/  (12 files)
├── infrastructure/  (2 files)
├── infrastructure/plugins/  (3 files)
├── infrastructure/services/  (2 files)
├── integrations/  (20 files)
├── plugins/  (37 files)
├── plugins/api-key/  (3 files)
├── plugins/oauth-provider/  (7 files)
├── plugins/scim/  (3 files)
├── plugins/sso/  (7 files)
├── reference/  (6 files)
├── reference/errors/  (20 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/introduction.mdx` |
| Install | `contents/installation.mdx` |
| Basic usage | `contents/basic-usage.mdx` |
| Database setup | `contents/adapters/` |
| OAuth providers | `contents/authentication/` |
| Plugins | `contents/plugins/index.mdx` |
| Framework integration | `contents/integrations/` |
| Configuration options | `contents/reference/options.mdx` |
| 1.7 upgrade | `contents/guides/1-7-upgrade-guide.mdx` |
| Errors | `contents/reference/errors/index.mdx` |

## Detailed Structure

### Root (4 files)

| File | Description |
|------|-------------|
| `basic-usage.mdx` | Getting started with Better Auth |
| `comparison.mdx` | Comparison of Better Auth versus other auth libraries and services. |
| `installation.mdx` | Learn how to configure Better Auth in your project. |
| `introduction.mdx` | Introduction to Better Auth. |

### adapters/ (9 files)

| File | Description |
|------|-------------|
| `community-adapters.mdx` | Community-built database adapters that extend Better Auth. |
| `drizzle.mdx` | Integrate Better Auth with Drizzle ORM. |
| `mongo.mdx` | Integrate Better Auth with MongoDB. |
| `mssql.mdx` | Integrate Better Auth with MS SQL. |
| `mysql.mdx` | Integrate Better Auth with MySQL. |
| `other-relational-databases.mdx` | Integrate Better Auth with other relational databases. |
| `postgresql.mdx` | Integrate Better Auth with PostgreSQL. |
| `prisma.mdx` | Integrate Better Auth with Prisma. |
| `sqlite.mdx` | Integrate Better Auth with SQLite. |

### ai-resources/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Ask AI in the docs, LLMs.txt, the documentation MCP server, and Better Auth skills for coding assistants. |
| `mcp.mdx` | Connect Better Auth documentation to MCP-capable clients via the remote documentation MCP server. |
| `skills.mdx` | Install Better Auth agent skills so your coding assistant follows library conventions and patterns. |

### authentication/ (38 files)

| File | Description |
|------|-------------|
| `apple.mdx` | Apple provider setup and usage. |
| `atlassian.mdx` | Atlassian provider setup and usage. |
| `cloudflare.mdx` | Cloudflare provider setup and usage. |
| `cognito.mdx` | Amazon Cognito provider setup and usage. |
| `discord.mdx` | Discord provider setup and usage. |
| `dropbox.mdx` | Dropbox provider setup and usage. |
| `email-password.mdx` | Implementing email and password authentication with Better Auth. |
| `facebook.mdx` | Facebook provider setup and usage. |
| `figma.mdx` | Figma provider setup and usage. |
| `github.mdx` | GitHub provider setup and usage. |
| `gitlab.mdx` | GitLab provider setup and usage. |
| `google.mdx` | Google provider setup and usage. |
| `huggingface.mdx` | Hugging Face provider setup and usage. |
| `kakao.mdx` | Kakao provider setup and usage. |
| `kick.mdx` | Kick provider setup and usage. |
| `line.mdx` | LINE provider setup and usage. |
| `linear.mdx` | Linear provider setup and usage. |
| `linkedin.mdx` | LinkedIn Provider |
| `microsoft.mdx` | Microsoft provider setup and usage. |
| `naver.mdx` | Naver provider setup and usage. |
| `notion.mdx` | Notion provider setup and usage. |
| `other-social-providers.mdx` | Other social providers setup and usage. |
| `paybin.mdx` | Paybin provider setup and usage. |
| `paypal.mdx` | Paypal provider setup and usage. |
| `polar.mdx` | Polar provider setup and usage. |
| `railway.mdx` | Railway provider setup and usage. |
| `reddit.mdx` | Reddit provider setup and usage. |
| `roblox.mdx` | Roblox provider setup and usage. |
| `salesforce.mdx` | Salesforce provider setup and usage. |
| `slack.mdx` | Slack provider setup and usage. |
| `spotify.mdx` | Spotify provider setup and usage. |
| `tiktok.mdx` | TikTok provider setup and usage. |
| `twitch.mdx` | Twitch provider setup and usage. |
| `twitter.mdx` | Twitter provider setup and usage. |
| `vercel.mdx` | Vercel provider setup and usage. |
| `vk.mdx` | VK ID Provider |
| `wechat.mdx` | WeChat provider setup and usage. |
| `zoom.mdx` | Zoom provider setup and usage. |

### concepts/ (13 files)

| File | Description |
|------|-------------|
| `api.mdx` | Learn how to call Better Auth API endpoints on the server, pass body, headers, and query parameters, retrieve  |
| `cli.mdx` | Learn about the Better Auth CLI commands for generating, migrating, and checking database schemas, creating in |
| `client.mdx` | Learn how to set up the Better Auth client for React, Vue, Svelte, and other frameworks, use hooks, configure  |
| `cookies.mdx` | Learn how Better Auth uses cookies, including cookie prefixes, custom cookie attributes, cross-subdomain shari |
| `database.mdx` | Learn about database adapters, migrations, secondary storage with Redis, core schema (user, session, account,  |
| `email.mdx` | Learn how to set up email verification, require verified emails for sign-in, auto sign-in after verification,  |
| `hooks.mdx` | Learn how to use before and after hooks to customize endpoint behavior, modify requests and responses, handle  |
| `oauth.mdx` | Learn how to configure social OAuth providers, sign in and link accounts, request scopes, pass additional data |
| `plugins.mdx` | Learn how to use and create Better Auth plugins, including defining endpoints, schemas, hooks, middleware, rat |
| `rate-limit.mdx` | Learn how to configure rate limiting in Better Auth, including IP address detection, IPv6 support, custom rate |
| `session-management.mdx` | Learn about session management in Better Auth, including session expiration, freshness, cookie caching strateg |
| `typescript.mdx` | Learn about TypeScript configuration for Better Auth, including strict mode, inferring types for sessions and  |
| `users-accounts.mdx` | Learn how to manage users and accounts, including updating user info, changing emails and passwords, deleting  |

### examples/ (5 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Better Auth Astro example. |
| `next-js.mdx` | Better Auth Next.js example. |
| `nuxt.mdx` | Better Auth Nuxt example. |
| `react-router.mdx` | Better Auth React Router v7 example. |
| `svelte-kit.mdx` | Better Auth SvelteKit example. |

### guides/ (12 files)

| File | Description |
|------|-------------|
| `1-7-upgrade-guide.mdx` | Upgrade Better Auth from 1.6 to 1.7, including Expo, OAuth, OpenID Connect, MCP, SAML, SCIM, proxy, and custom |
| `auth0-migration-guide.mdx` | A step-by-step guide to transitioning from Auth0 to Better Auth. |
| `browser-extension-guide.mdx` | A step-by-step guide to creating a browser extension with Better Auth. |
| `clerk-migration-guide.mdx` | A step-by-step guide to transitioning from Clerk to Better Auth. |
| `create-a-db-adapter.mdx` | Learn how to create a custom database adapter for Better-Auth |
| `dynamic-base-url.mdx` | Configure Better Auth for preview deployments, multiple domains, and per-request URL resolution. |
| `next-auth-migration-guide.mdx` | A step-by-step guide to transitioning from Auth.js to Better Auth. |
| `optimizing-for-performance.mdx` | A guide to optimizing your Better Auth application for performance. |
| `saml-sso-with-okta.mdx` | A guide to integrating SAML Single Sign-On (SSO) with Better Auth, featuring Okta |
| `supabase-migration-guide.mdx` | A step-by-step guide to transitioning from Supabase Auth to Better Auth. |
| `workos-migration-guide.mdx` | A step-by-step guide to transitioning from WorkOS to Better Auth. |
| `your-first-plugin.mdx` | A step-by-step guide to creating your first Better Auth plugin. |

### infrastructure/ (2 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | This guide will help you integrate Better Auth Infrastructure into your application. |
| `introduction.mdx` | Enterprise-grade dashboard, security, and managed services for Better Auth. |

### infrastructure/plugins/ (3 files)

| File | Description |
|------|-------------|
| `audit-logs.mdx` | Track and query authentication events across your application with automatic audit logging. |
| `dashboard.mdx` | The `dash()` plugin connects your Better Auth instance to Better Auth Infrastructure, enabling analytics track |
| `sentinel.mdx` | The `sentinel()` plugin provides comprehensive security and abuse protection for your authentication system. I |

### infrastructure/services/ (2 files)

| File | Description |
|------|-------------|
| `email.mdx` | Better Auth Infrastructure provides a managed transactional email service with pre-built templates for common  |
| `sms.mdx` | Better Auth Infrastructure provides a managed SMS service for sending OTP codes for phone verification and two |

### integrations/ (20 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Integrate Better Auth with Astro. |
| `convex.mdx` | Integrate Better Auth with Convex. |
| `effect.mdx` | Integrate Better Auth with an Effect HTTP server. |
| `electron.mdx` | Integrate Better Auth with Electron. |
| `elysia.mdx` | Integrate Better Auth with Elysia. |
| `encore.mdx` | Integrate Better Auth with Encore. |
| `expo.mdx` | Integrate Better Auth with Expo. |
| `express.mdx` | Integrate Better Auth with Express. |
| `fastify.mdx` | Learn how to seamlessly integrate Better Auth with your Fastify application. |
| `hono.mdx` | Integrate Better Auth with Hono. |
| `lynx.mdx` | Integrate Better Auth with Lynx cross-platform framework. |
| `nestjs.mdx` | Integrate Better Auth with NestJS. |
| `next.mdx` | Integrate Better Auth with Next.js. |
| `nitro.mdx` | Integrate Better Auth with Nitro. |
| `nuxt.mdx` | Integrate Better Auth with Nuxt. |
| `react-router.mdx` | Integrate Better Auth with React Router v7 (formerly Remix). |
| `solid-start.mdx` | Integrate Better Auth with SolidStart. |
| `svelte-kit.mdx` | Integrate Better Auth with SvelteKit. |
| `tanstack.mdx` | Integrate Better Auth with TanStack Start. |
| `waku.mdx` | Integrate Better Auth with Waku. |

### plugins/ (37 files)

| File | Description |
|------|-------------|
| `2fa.mdx` | Enhance your app's security with two-factor authentication. |
| `admin.mdx` | Admin plugin for Better Auth |
| `agent-auth.mdx` | Agent identity, registration, discovery, and capability-based authorization for AI agents. |
| `anonymous.mdx` | Anonymous plugin for Better Auth. |
| `autumn.mdx` | Better Auth Plugin for Autumn Billing |
| `bearer.mdx` | Authenticate API requests using Bearer tokens instead of browser cookies |
| `captcha.mdx` | Captcha plugin |
| `chargebee.mdx` | Chargebee plugin for Better Auth to manage subscriptions and payments. |
| `cimd.mdx` | Discover OAuth clients from HTTPS metadata documents. |
| `commet.mdx` | Better Auth Plugin for Billing and Subscriptions using Commet |
| `community-plugins.mdx` | Community-built plugins that extend Better Auth. |
| `creem.mdx` | Better Auth plugin for Creem checkouts, subscriptions, and access control. |
| `device-authorization.mdx` | OAuth 2.0 Device Authorization Grant for limited-input devices |
| `dodopayments.mdx` | Better Auth Plugin for Dodo Payments |
| `dub.mdx` | Better Auth Plugin for Lead Tracking using Dub links and OAuth Linking |
| `email-otp.mdx` | Email OTP plugin for Better Auth. |
| `generic-oauth.mdx` | Authenticate users with any OAuth provider |
| `have-i-been-pwned.mdx` | A plugin to check if a password has been compromised |
| `i18n.mdx` | Internationalization plugin for translating error messages |
| `index.mdx` | Browse all Better Auth plugins — authentication, authorization, payments, security, and more. |
| `jwt.mdx` | Authenticate users with JWT tokens in services that can't use the session |
| `last-login-method.mdx` | Track and display the last authentication method used by users |
| `magic-link.mdx` | Magic link plugin |
| `mcp.mdx` | Turn your Better Auth server into an OAuth provider for MCP clients |
| `multi-session.mdx` | Learn how to use multi-session plugin in Better Auth. |
| `oauth-proxy.mdx` | OAuth sign-in for development and preview deployments |
| `one-tap.mdx` | One Tap plugin for Better Auth |
| `one-time-token.mdx` | Generate and verify single-use token |
| `open-api.mdx` | Open API reference for Better Auth. |
| `organization.mdx` | The organization plugin allows you to manage your organization's members and teams. |
| `passkey.mdx` | Passkey |
| `phone-number.mdx` | Phone number plugin |
| `polar.mdx` | Better Auth Plugin for Payment and Checkouts using Polar |
| `siwe.mdx` | Sign in with Ethereum plugin for Better Auth |
| `stripe.mdx` | Stripe plugin for Better Auth to manage subscriptions and payments. |
| `test-utils.mdx` | Testing utilities for integration and E2E testing |
| `username.mdx` | Username plugin |

### plugins/api-key/ (3 files)

| File | Description |
|------|-------------|
| `advanced.mdx` | Advanced API Key features including sessions, multiple configurations, organization keys, storage modes, and m |
| `index.mdx` | API Key plugin for Better Auth. |
| `reference.mdx` | API Key plugin options, permissions, and schema reference. |

### plugins/oauth-provider/ (7 files)

| File | Description |
|------|-------------|
| `clients.mdx` | Register, manage, and authenticate OAuth clients, by hand or dynamically. |
| `index.mdx` | Make your app an OAuth 2.1 and OpenID Connect provider that other apps sign in with. |
| `openid-connect.mdx` | Configure discovery, ID token and UserInfo claims, subject identifiers, and logout. |
| `reference.mdx` | OAuth provider options, endpoints, errors, rate limits, extensions, and database schema. |
| `resource-server.mdx` | Verify provider-issued access tokens in your API or another service. |
| `sign-in-flow.mdx` | Build the login, consent, and account screens that the authorize endpoint redirects to. |
| `tokens.mdx` | Control which tokens the provider issues, for which APIs, and for how long. |

### plugins/scim/ (3 files)

| File | Description |
|------|-------------|
| `groups-and-roles.mdx` | Provision SCIM Groups and map them to application roles. |
| `index.mdx` | Provision users and groups from a directory into Better Auth. |
| `reference.mdx` | SCIM options, endpoints, resource behavior, and database schema. |

### plugins/sso/ (7 files)

| File | Description |
|------|-------------|
| `domain-verification.mdx` | Prove ownership of a provider's email domains with a DNS TXT record before users can sign in. |
| `index.mdx` | Connect each organization to its own OIDC or SAML 2.0 identity provider. |
| `oidc.mdx` | Register OpenID Connect identity providers and configure discovery, client authentication, and callbacks. |
| `provisioning.mdx` | Control how SSO identities map to users, run provisioning code, and add users to organizations. |
| `reference.mdx` | SSO plugin options, provider configuration, endpoints, and database schema. |
| `saml-security.mdx` | How Better Auth validates SAML responses and which checks you can tune. |
| `saml.mdx` | Register SAML 2.0 identity providers and configure signing, certificates, attributes, and callbacks. |

### reference/ (6 files)

| File | Description |
|------|-------------|
| `faq.mdx` | Frequently asked questions about Better Auth. |
| `instrumentation.mdx` | Distributed tracing for Better Auth |
| `options.mdx` | Better Auth configuration options reference. |
| `resources.mdx` | A curated collection of resources to help you learn and master Better Auth. |
| `security.mdx` | Better Auth security features. |
| `telemetry.mdx` | Better Auth now collects anonymous telemetry data about general usage. |

### reference/errors/ (20 files)

| File | Description |
|------|-------------|
| `account_already_linked_to_different_user.mdx` | The account is already linked to a different user. |
| `account_not_linked.mdx` | The provider account is not linked to the current user and cannot be linked automatically. |
| `email_doesn't_match.mdx` | The email doesn't match the email of the account. |
| `email_not_found.mdx` | The provider did not return an email address. |
| `index.mdx` | Errors that can occur in Better Auth. |
| `internal_server_error.mdx` | An unexpected error occurred during authentication. |
| `invalid_callback_request.mdx` | The callback request is invalid. |
| `invalid_code.mdx` | The provided authentication code is invalid or expired. |
| `no_callback_url.mdx` | The callback URL was not found in the request. |
| `no_code.mdx` | The code was not found in the request. |
| `oauth_provider_not_found.mdx` | The OAuth provider was not found. |
| `signup_disabled.mdx` | Signup disabled error |
| `state_invalid.mdx` | Failed to decrypt or parse the OAuth state during the callback. |
| `state_mismatch.mdx` | State verification failed during the OAuth callback. Covers all state-related error codes and their causes. |
| `state_not_found.mdx` | The state parameter was not found in the request. |
| `unable_to_create_session.mdx` | The session could not be created during authentication. |
| `unable_to_create_user.mdx` | The user could not be created during authentication. |
| `unable_to_get_user_info.mdx` | The user info was not found in the request. |
| `unable_to_link_account.mdx` | The account could not be linked. |
| `unknown.mdx` | An unknown error occurred. |
