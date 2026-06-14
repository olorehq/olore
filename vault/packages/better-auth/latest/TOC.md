# better-auth Table of Contents

## Directory Map

```
contents/
├── installation.mdx            # Installation guide
├── basic-usage.mdx             # Basic usage overview
├── adapters/                   # Database adapters (8 files)
├── authentication/             # Social/OAuth providers (37 files)
├── concepts/                   # Core concepts (13 files)
├── examples/                   # Framework examples (5 files)
├── guides/                     # How-to guides (11 files)
├── infrastructure/             # Better Auth Infrastructure paid service (8 files)
│   ├── plugins/                # Infrastructure plugins
│   └── services/               # Infrastructure services
├── integrations/               # Framework integrations (19 files)
├── plugins/                    # Auth plugins (38 files)
│   └── api-key/                # API key plugin (3 files)
└── reference/                  # Reference docs (26 files)
    └── errors/                 # Error reference (20 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install | `contents/installation.mdx` |
| Basic usage | `contents/basic-usage.mdx` |
| Email/password auth | `contents/authentication/email-password.mdx` |
| OAuth/social login | `contents/concepts/oauth.mdx` |
| Session management | `contents/concepts/session-management.mdx` |
| Database setup | `contents/concepts/database.mdx` |
| Framework setup | `contents/integrations/` |
| Plugin overview | `contents/plugins/index.mdx` |
| Error reference | `contents/reference/errors/index.mdx` |
| Config options | `contents/reference/options.mdx` |

## Detailed Structure

### Root (2 files)

| File | Description |
|------|-------------|
| `installation.mdx` | Installation and initial setup |
| `basic-usage.mdx` | Basic usage patterns |

### adapters/ (8 files)

| File | Description |
|------|-------------|
| `drizzle.mdx` | Drizzle ORM adapter |
| `mongo.mdx` | MongoDB adapter |
| `mssql.mdx` | Microsoft SQL Server adapter |
| `mysql.mdx` | MySQL adapter |
| `other-relational-databases.mdx` | Other relational database adapters |
| `postgresql.mdx` | PostgreSQL adapter |
| `prisma.mdx` | Prisma adapter |
| `sqlite.mdx` | SQLite adapter |

### authentication/ (37 files)

| File | Description |
|------|-------------|
| `apple.mdx` | Apple Sign In |
| `atlassian.mdx` | Atlassian OAuth |
| `cognito.mdx` | AWS Cognito |
| `discord.mdx` | Discord OAuth |
| `dropbox.mdx` | Dropbox OAuth |
| `email-password.mdx` | Email and password authentication |
| `facebook.mdx` | Facebook OAuth |
| `figma.mdx` | Figma OAuth |
| `github.mdx` | GitHub OAuth |
| `gitlab.mdx` | GitLab OAuth |
| `google.mdx` | Google OAuth |
| `huggingface.mdx` | Hugging Face OAuth |
| `kakao.mdx` | Kakao OAuth |
| `kick.mdx` | Kick OAuth |
| `line.mdx` | LINE OAuth |
| `linear.mdx` | Linear OAuth |
| `linkedin.mdx` | LinkedIn OAuth |
| `microsoft.mdx` | Microsoft OAuth |
| `naver.mdx` | Naver OAuth |
| `notion.mdx` | Notion OAuth |
| `other-social-providers.mdx` | Generic OAuth for any provider |
| `paybin.mdx` | Paybin OAuth |
| `paypal.mdx` | PayPal OAuth |
| `polar.mdx` | Polar OAuth |
| `railway.mdx` | Railway OAuth |
| `reddit.mdx` | Reddit OAuth |
| `roblox.mdx` | Roblox OAuth |
| `salesforce.mdx` | Salesforce OAuth |
| `slack.mdx` | Slack OAuth |
| `spotify.mdx` | Spotify OAuth |
| `tiktok.mdx` | TikTok OAuth |
| `twitch.mdx` | Twitch OAuth |
| `twitter.mdx` | Twitter/X OAuth |
| `vercel.mdx` | Vercel OAuth |
| `vk.mdx` | VK OAuth |
| `wechat.mdx` | WeChat OAuth |
| `zoom.mdx` | Zoom OAuth |

### concepts/ (13 files)

| File | Description |
|------|-------------|
| `api.mdx` | API structure and endpoints |
| `cli.mdx` | CLI tool usage |
| `client.mdx` | Client-side auth client |
| `cookies.mdx` | Cookie configuration |
| `database.mdx` | Database schema and configuration |
| `email.mdx` | Email sending setup |
| `hooks.mdx` | Auth hooks and middleware |
| `oauth.mdx` | OAuth concepts and configuration |
| `plugins.mdx` | Plugin system overview |
| `rate-limit.mdx` | Rate limiting configuration |
| `session-management.mdx` | Session lifecycle and management |
| `typescript.mdx` | TypeScript usage and types |
| `users-accounts.mdx` | User and account management |

### examples/ (5 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Astro example |
| `next-js.mdx` | Next.js example |
| `nuxt.mdx` | Nuxt example |
| `react-router.mdx` | React Router example |
| `svelte-kit.mdx` | SvelteKit example |

### guides/ (11 files)

| File | Description |
|------|-------------|
| `auth0-migration-guide.mdx` | Migrating from Auth0 |
| `browser-extension-guide.mdx` | Browser extension integration |
| `clerk-migration-guide.mdx` | Migrating from Clerk |
| `create-a-db-adapter.mdx` | Creating custom database adapters |
| `dynamic-base-url.mdx` | Dynamic base URL configuration |
| `next-auth-migration-guide.mdx` | Migrating from NextAuth |
| `optimizing-for-performance.mdx` | Performance optimization |
| `saml-sso-with-okta.mdx` | SAML SSO with Okta setup |
| `supabase-migration-guide.mdx` | Migrating from Supabase Auth |
| `workos-migration-guide.mdx` | Migrating from WorkOS |
| `your-first-plugin.mdx` | Creating your first plugin |

### infrastructure/ (8 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Better Auth Infrastructure overview (paid service) |
| `getting-started.mdx` | Infrastructure setup guide |
| `plugins/audit-logs.mdx` | Audit logs plugin |
| `plugins/dash.mdx` | Dash plugin |
| `plugins/dashboard.mdx` | Dashboard plugin |
| `plugins/sentinel.mdx` | Sentinel security plugin |
| `services/email.mdx` | Managed email service |
| `services/sms.mdx` | Managed SMS service |

### integrations/ (19 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Astro integration |
| `convex.mdx` | Convex integration |
| `electron.mdx` | Electron integration |
| `elysia.mdx` | Elysia integration |
| `encore.mdx` | Encore integration |
| `expo.mdx` | Expo/React Native integration |
| `express.mdx` | Express integration |
| `fastify.mdx` | Fastify integration |
| `hono.mdx` | Hono integration |
| `lynx.mdx` | Lynx integration |
| `nestjs.mdx` | NestJS integration |
| `next.mdx` | Next.js integration |
| `nitro.mdx` | Nitro integration |
| `nuxt.mdx` | Nuxt integration |
| `react-router.mdx` | React Router integration |
| `solid-start.mdx` | SolidStart integration |
| `svelte-kit.mdx` | SvelteKit integration |
| `tanstack.mdx` | TanStack Start integration |
| `waku.mdx` | Waku integration |

### plugins/ (38 files)

| File | Description |
|------|-------------|
| `index.mdx` | Plugin directory overview |
| `2fa.mdx` | Two-factor authentication |
| `admin.mdx` | Admin user management |
| `agent-auth.mdx` | Agent/bot authentication |
| `anonymous.mdx` | Anonymous/guest sessions |
| `api-key/index.mdx` | API key authentication |
| `api-key/advanced.mdx` | Advanced API key usage |
| `api-key/reference.mdx` | API key reference |
| `autumn.mdx` | Autumn billing integration |
| `bearer.mdx` | Bearer token authentication |
| `captcha.mdx` | CAPTCHA protection |
| `chargebee.mdx` | Chargebee billing integration |
| `commet.mdx` | Commet billing integration |
| `creem.mdx` | Creem payment integration |
| `device-authorization.mdx` | Device authorization flow |
| `dodopayments.mdx` | Dodo Payments integration |
| `dub.mdx` | Dub link tracking integration |
| `email-otp.mdx` | Email OTP authentication |
| `generic-oauth.mdx` | Generic OAuth provider |
| `have-i-been-pwned.mdx` | HaveIBeenPwned password check |
| `i18n.mdx` | Internationalization |
| `jwt.mdx` | JWT token support |
| `last-login-method.mdx` | Last login method tracking |
| `magic-link.mdx` | Magic link authentication |
| `mcp.mdx` | MCP provider authentication |
| `multi-session.mdx` | Multiple concurrent sessions |
| `oauth-provider.mdx` | OAuth provider (be an OAuth server) |
| `oauth-proxy.mdx` | OAuth proxy |
| `oidc-provider.mdx` | OpenID Connect provider |
| `one-tap.mdx` | Google One Tap sign-in |
| `one-time-token.mdx` | One-time token authentication |
| `open-api.mdx` | OpenAPI reference plugin |
| `organization.mdx` | Organizations and teams |
| `passkey.mdx` | WebAuthn/passkey authentication |
| `phone-number.mdx` | Phone number authentication |
| `polar.mdx` | Polar billing integration |
| `scim.mdx` | SCIM directory sync |
| `siwe.mdx` | Sign In With Ethereum |
| `sso.mdx` | SSO/SAML authentication |
| `stripe.mdx` | Stripe billing integration |
| `test-utils.mdx` | Testing utilities |
| `username.mdx` | Username authentication |

### reference/ (6 files)

| File | Description |
|------|-------------|
| `faq.mdx` | Frequently asked questions |
| `instrumentation.mdx` | Instrumentation and observability |
| `options.mdx` | Full configuration options reference |
| `security.mdx` | Security considerations |
| `telemetry.mdx` | Telemetry configuration |

### reference/errors/ (20 files)

| File | Description |
|------|-------------|
| `index.mdx` | Error types overview |
| `account_already_linked_to_different_user.mdx` | Account linking conflict error |
| `account_not_linked.mdx` | Account not linked error |
| `email_doesn't_match.mdx` | Email mismatch error |
| `email_not_found.mdx` | Email not found error |
| `internal_server_error.mdx` | Internal server error |
| `invalid_callback_request.mdx` | Invalid callback request error |
| `invalid_code.mdx` | Invalid OAuth code error |
| `no_callback_url.mdx` | Missing callback URL error |
| `no_code.mdx` | Missing OAuth code error |
| `oauth_provider_not_found.mdx` | OAuth provider not found error |
| `signup_disabled.mdx` | Signup disabled error |
| `state_invalid.mdx` | Invalid OAuth state error |
| `state_mismatch.mdx` | OAuth state mismatch error |
| `state_not_found.mdx` | OAuth state not found error |
| `unable_to_create_session.mdx` | Session creation failure error |
| `unable_to_create_user.mdx` | User creation failure error |
| `unable_to_get_user_info.mdx` | User info retrieval failure error |
| `unable_to_link_account.mdx` | Account linking failure error |
| `unknown.mdx` | Unknown error |
