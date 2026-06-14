# better-auth Table of Contents

## Directory Map

```
contents/
├── introduction.mdx           # What is Better Auth
├── installation.mdx           # Installation guide
├── basic-usage.mdx            # Basic usage
├── adapters/                  # Database adapters (9 files)
├── authentication/            # Social & email auth providers (36 files)
├── concepts/                  # Core concepts (13 files)
├── examples/                  # Framework examples (5 files)
├── guides/                    # How-to guides (11 files)
├── integrations/              # Framework integrations (19 files)
├── plugins/                   # Official plugins (41 files)
│   └── api-key/               # API key plugin (3 files)
└── reference/                 # Reference docs (26 files)
    └── errors/                # Error reference (20 files)
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
| Error troubleshooting | `contents/reference/errors/index.mdx` |

## Detailed Structure

### Root (3 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | What is Better Auth, overview |
| `installation.mdx` | Installation and setup |
| `basic-usage.mdx` | Basic usage patterns |

### adapters/ (9 files)

| File | Description |
|------|-------------|
| `adapters/drizzle.mdx` | Drizzle ORM adapter |
| `adapters/prisma.mdx` | Prisma adapter |
| `adapters/mongo.mdx` | MongoDB adapter |
| `adapters/mysql.mdx` | MySQL adapter |
| `adapters/postgresql.mdx` | PostgreSQL adapter |
| `adapters/sqlite.mdx` | SQLite adapter |
| `adapters/mssql.mdx` | MSSQL adapter |
| `adapters/other-relational-databases.mdx` | Other relational databases |
| `adapters/community-adapters.mdx` | Community-built adapters |

### authentication/ (36 files)

| File | Description |
|------|-------------|
| `authentication/email-password.mdx` | Email and password authentication |
| `authentication/google.mdx` | Google OAuth |
| `authentication/github.mdx` | GitHub OAuth |
| `authentication/apple.mdx` | Apple Sign In |
| `authentication/microsoft.mdx` | Microsoft OAuth |
| `authentication/facebook.mdx` | Facebook OAuth |
| `authentication/discord.mdx` | Discord OAuth |
| `authentication/twitter.mdx` | Twitter/X OAuth |
| `authentication/linkedin.mdx` | LinkedIn OAuth |
| `authentication/slack.mdx` | Slack OAuth |
| `authentication/spotify.mdx` | Spotify OAuth |
| `authentication/twitch.mdx` | Twitch OAuth |
| `authentication/gitlab.mdx` | GitLab OAuth |
| `authentication/atlassian.mdx` | Atlassian OAuth |
| `authentication/cognito.mdx` | AWS Cognito OAuth |
| `authentication/dropbox.mdx` | Dropbox OAuth |
| `authentication/figma.mdx` | Figma OAuth |
| `authentication/huggingface.mdx` | Hugging Face OAuth |
| `authentication/kakao.mdx` | Kakao OAuth |
| `authentication/kick.mdx` | Kick OAuth |
| `authentication/line.mdx` | LINE OAuth |
| `authentication/linear.mdx` | Linear OAuth |
| `authentication/naver.mdx` | Naver OAuth |
| `authentication/notion.mdx` | Notion OAuth |
| `authentication/other-social-providers.mdx` | Other social providers |
| `authentication/paybin.mdx` | Paybin OAuth |
| `authentication/paypal.mdx` | PayPal OAuth |
| `authentication/polar.mdx` | Polar OAuth |
| `authentication/railway.mdx` | Railway OAuth |
| `authentication/reddit.mdx` | Reddit OAuth |
| `authentication/roblox.mdx` | Roblox OAuth |
| `authentication/salesforce.mdx` | Salesforce OAuth |
| `authentication/tiktok.mdx` | TikTok OAuth |
| `authentication/vercel.mdx` | Vercel OAuth |
| `authentication/vk.mdx` | VK OAuth |
| `authentication/wechat.mdx` | WeChat OAuth |
| `authentication/zoom.mdx` | Zoom OAuth |

### concepts/ (13 files)

| File | Description |
|------|-------------|
| `concepts/api.mdx` | API overview |
| `concepts/cli.mdx` | CLI usage |
| `concepts/client.mdx` | Client setup and usage |
| `concepts/cookies.mdx` | Cookie management |
| `concepts/database.mdx` | Database concepts |
| `concepts/email.mdx` | Email sending and templates |
| `concepts/hooks.mdx` | Lifecycle hooks |
| `concepts/oauth.mdx` | OAuth concepts |
| `concepts/plugins.mdx` | Plugin system overview |
| `concepts/rate-limit.mdx` | Rate limiting |
| `concepts/session-management.mdx` | Session management |
| `concepts/typescript.mdx` | TypeScript usage |
| `concepts/users-accounts.mdx` | Users and accounts |

### examples/ (5 files)

| File | Description |
|------|-------------|
| `examples/next-js.mdx` | Next.js example |
| `examples/astro.mdx` | Astro example |
| `examples/nuxt.mdx` | Nuxt example |
| `examples/svelte-kit.mdx` | SvelteKit example |
| `examples/react-router.mdx` | React Router example |

### guides/ (11 files)

| File | Description |
|------|-------------|
| `guides/your-first-plugin.mdx` | Building your first plugin |
| `guides/create-a-db-adapter.mdx` | Creating a database adapter |
| `guides/optimizing-for-performance.mdx` | Performance optimization |
| `guides/dynamic-base-url.mdx` | Dynamic base URL configuration |
| `guides/browser-extension-guide.mdx` | Browser extension integration |
| `guides/saml-sso-with-okta.mdx` | SAML SSO with Okta |
| `guides/next-auth-migration-guide.mdx` | Migrating from NextAuth |
| `guides/auth0-migration-guide.mdx` | Migrating from Auth0 |
| `guides/clerk-migration-guide.mdx` | Migrating from Clerk |
| `guides/supabase-migration-guide.mdx` | Migrating from Supabase Auth |
| `guides/workos-migration-guide.mdx` | Migrating from WorkOS |

### integrations/ (19 files)

| File | Description |
|------|-------------|
| `integrations/next.mdx` | Next.js integration |
| `integrations/nuxt.mdx` | Nuxt integration |
| `integrations/astro.mdx` | Astro integration |
| `integrations/svelte-kit.mdx` | SvelteKit integration |
| `integrations/react-router.mdx` | React Router integration |
| `integrations/solid-start.mdx` | SolidStart integration |
| `integrations/tanstack.mdx` | TanStack Start integration |
| `integrations/hono.mdx` | Hono integration |
| `integrations/express.mdx` | Express integration |
| `integrations/fastify.mdx` | Fastify integration |
| `integrations/nestjs.mdx` | NestJS integration |
| `integrations/elysia.mdx` | Elysia integration |
| `integrations/nitro.mdx` | Nitro integration |
| `integrations/convex.mdx` | Convex integration |
| `integrations/encore.mdx` | Encore integration |
| `integrations/expo.mdx` | Expo (React Native) integration |
| `integrations/electron.mdx` | Electron integration |
| `integrations/lynx.mdx` | Lynx integration |
| `integrations/waku.mdx` | Waku integration |

### plugins/ (41 files)

| File | Description |
|------|-------------|
| `plugins/index.mdx` | Plugins overview |
| `plugins/2fa.mdx` | Two-factor authentication |
| `plugins/admin.mdx` | Admin user management |
| `plugins/agent-auth.mdx` | Agent/AI authentication |
| `plugins/anonymous.mdx` | Anonymous sessions |
| `plugins/api-key/index.mdx` | API key authentication |
| `plugins/api-key/advanced.mdx` | API key advanced usage |
| `plugins/api-key/reference.mdx` | API key reference |
| `plugins/autumn.mdx` | Autumn billing integration |
| `plugins/bearer.mdx` | Bearer token auth |
| `plugins/captcha.mdx` | Captcha protection |
| `plugins/chargebee.mdx` | Chargebee billing integration |
| `plugins/commet.mdx` | Commet plugin |
| `plugins/creem.mdx` | Creem payments integration |
| `plugins/device-authorization.mdx` | Device authorization flow |
| `plugins/dodopayments.mdx` | Dodo Payments integration |
| `plugins/dub.mdx` | Dub analytics integration |
| `plugins/email-otp.mdx` | Email OTP authentication |
| `plugins/generic-oauth.mdx` | Generic OAuth provider |
| `plugins/have-i-been-pwned.mdx` | HaveIBeenPwned password check |
| `plugins/i18n.mdx` | Internationalization |
| `plugins/jwt.mdx` | JWT tokens |
| `plugins/last-login-method.mdx` | Last login method tracking |
| `plugins/magic-link.mdx` | Magic link authentication |
| `plugins/mcp.mdx` | MCP server authentication |
| `plugins/multi-session.mdx` | Multiple sessions per user |
| `plugins/oauth-provider.mdx` | OAuth provider (act as an OAuth server) |
| `plugins/oauth-proxy.mdx` | OAuth proxy |
| `plugins/oidc-provider.mdx` | OIDC provider |
| `plugins/one-tap.mdx` | Google One Tap |
| `plugins/one-time-token.mdx` | One-time tokens |
| `plugins/open-api.mdx` | OpenAPI spec generation |
| `plugins/organization.mdx` | Organizations and teams |
| `plugins/passkey.mdx` | WebAuthn/Passkey |
| `plugins/phone-number.mdx` | Phone number auth |
| `plugins/polar.mdx` | Polar billing integration |
| `plugins/scim.mdx` | SCIM directory sync |
| `plugins/siwe.mdx` | Sign In With Ethereum |
| `plugins/sso.mdx` | SSO/SAML |
| `plugins/stripe.mdx` | Stripe payments integration |
| `plugins/test-utils.mdx` | Testing utilities |
| `plugins/username.mdx` | Username authentication |

### reference/ (6 files)

| File | Description |
|------|-------------|
| `reference/options.mdx` | All configuration options |
| `reference/security.mdx` | Security considerations |
| `reference/faq.mdx` | Frequently asked questions |
| `reference/instrumentation.mdx` | Instrumentation and observability |
| `reference/telemetry.mdx` | Telemetry configuration |
| `reference/errors/index.mdx` | Errors overview |

### reference/errors/ (20 files)

| File | Description |
|------|-------------|
| `reference/errors/account_already_linked_to_different_user.mdx` | Account already linked error |
| `reference/errors/account_not_linked.mdx` | Account not linked error |
| `reference/errors/email_doesn't_match.mdx` | Email mismatch error |
| `reference/errors/email_not_found.mdx` | Email not found error |
| `reference/errors/internal_server_error.mdx` | Internal server error |
| `reference/errors/invalid_callback_request.mdx` | Invalid callback error |
| `reference/errors/invalid_code.mdx` | Invalid code error |
| `reference/errors/no_callback_url.mdx` | No callback URL error |
| `reference/errors/no_code.mdx` | No code error |
| `reference/errors/oauth_provider_not_found.mdx` | OAuth provider not found error |
| `reference/errors/signup_disabled.mdx` | Signup disabled error |
| `reference/errors/state_invalid.mdx` | State invalid error |
| `reference/errors/state_mismatch.mdx` | State mismatch error |
| `reference/errors/state_not_found.mdx` | State not found error |
| `reference/errors/unable_to_create_session.mdx` | Unable to create session error |
| `reference/errors/unable_to_create_user.mdx` | Unable to create user error |
| `reference/errors/unable_to_get_user_info.mdx` | Unable to get user info error |
| `reference/errors/unable_to_link_account.mdx` | Unable to link account error |
| `reference/errors/unknown.mdx` | Unknown error |
