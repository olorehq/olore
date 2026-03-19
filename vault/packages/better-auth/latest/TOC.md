# better-auth Table of Contents

## Directory Map

```
contents/
├── introduction.mdx        # Overview and features
├── basic-usage.mdx         # Email/password and social auth
├── authentication/         # Social & OAuth providers (37 files)
├── concepts/               # Core concepts (14 files)
├── plugins/                # Official plugins (39 files)
│   └── api-key/            # API key plugin (3 files)
├── adapters/               # Database adapters (7 files)
├── integrations/           # Framework integrations (16 files)
├── guides/                 # How-to guides (10 files)
└── infrastructure/         # Infrastructure features (7 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Get started | `contents/basic-usage.mdx` |
| Email/password auth | `contents/authentication/email-password.mdx` |
| Social OAuth | `contents/authentication/` |
| Configure client | `contents/concepts/client.mdx` |
| Session management | `contents/concepts/session-management.mdx` |
| Database setup | `contents/concepts/database.mdx` |
| Plugins overview | `contents/concepts/plugins.mdx` |
| Two-factor auth | `contents/plugins/2fa.mdx` |
| Organizations | `contents/plugins/organization.mdx` |
| Next.js integration | `contents/integrations/next.mdx` |

## Detailed Structure

### Root (2 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Library overview, features, AI tooling |
| `basic-usage.mdx` | Email/password, social sign-in, sign up, sign in, sign out |

### authentication/ (37 files)

| File | Description |
|------|-------------|
| `email-password.mdx` | Email and password authentication |
| `google.mdx` | Google OAuth provider |
| `github.mdx` | GitHub OAuth provider |
| `apple.mdx` | Apple Sign In |
| `discord.mdx` | Discord OAuth provider |
| `facebook.mdx` | Facebook OAuth provider |
| `microsoft.mdx` | Microsoft OAuth provider |
| `twitter.mdx` | Twitter/X OAuth provider |
| `linkedin.mdx` | LinkedIn OAuth provider |
| `slack.mdx` | Slack OAuth provider |
| `spotify.mdx` | Spotify OAuth provider |
| `twitch.mdx` | Twitch OAuth provider |
| `gitlab.mdx` | GitLab OAuth provider |
| `reddit.mdx` | Reddit OAuth provider |
| `tiktok.mdx` | TikTok OAuth provider |
| `cognito.mdx` | AWS Cognito OAuth provider |
| `notion.mdx` | Notion OAuth provider |
| `linear.mdx` | Linear OAuth provider |
| `zoom.mdx` | Zoom OAuth provider |
| `dropbox.mdx` | Dropbox OAuth provider |
| `figma.mdx` | Figma OAuth provider |
| `paypal.mdx` | PayPal OAuth provider |
| `paybin.mdx` | Paybin OAuth provider |
| `kick.mdx` | Kick OAuth provider |
| `atlassian.mdx` | Atlassian OAuth provider |
| `line.mdx` | LINE OAuth provider |
| `wechat.mdx` | WeChat OAuth provider |
| `kakao.mdx` | Kakao OAuth provider |
| `naver.mdx` | Naver OAuth provider |
| `vercel.mdx` | Vercel OAuth provider |
| `polar.mdx` | Polar OAuth provider |
| `salesforce.mdx` | Salesforce OAuth provider |
| `railway.mdx` | Railway OAuth provider |
| `roblox.mdx` | Roblox OAuth provider |
| `vk.mdx` | VK OAuth provider |
| `huggingface.mdx` | HuggingFace OAuth provider |
| `other-social-providers.mdx` | Generic OAuth, Auth0, Keycloak, Okta, Entra ID |

### concepts/ (14 files)

| File | Description |
|------|-------------|
| `client.mdx` | Client setup, createAuthClient, React/Vue/Svelte hooks |
| `session-management.mdx` | Session expiry, caching, stateless sessions |
| `database.mdx` | Adapters, migrations, schema, hooks |
| `oauth.mdx` | OAuth flows, provider configuration |
| `plugins.mdx` | Plugin system overview, creating plugins |
| `email.mdx` | Email configuration, templates |
| `hooks.mdx` | Server-side hooks, before/after hooks |
| `api.mdx` | API routes, custom endpoints |
| `cookies.mdx` | Cookie configuration, secure settings |
| `rate-limit.mdx` | Rate limiting configuration |
| `typescript.mdx` | TypeScript types, type inference |
| `users-accounts.mdx` | User model, account linking |
| `cli.mdx` | CLI commands: migrate, generate |
| `dynamic-base-url.mdx` | Dynamic base URL configuration |

### plugins/ (39 files)

| File | Description |
|------|-------------|
| `2fa.mdx` | Two-factor authentication (TOTP, OTP) |
| `passkey.mdx` | WebAuthn/passkey authentication |
| `magic-link.mdx` | Passwordless email magic links |
| `email-otp.mdx` | Email one-time passwords |
| `phone-number.mdx` | Phone number authentication |
| `anonymous.mdx` | Anonymous/guest sessions |
| `username.mdx` | Username-based authentication |
| `one-tap.mdx` | Google One Tap sign-in |
| `siwe.mdx` | Sign In With Ethereum |
| `generic-oauth.mdx` | Generic OAuth provider plugin |
| `multi-session.mdx` | Multiple concurrent sessions |
| `last-login-method.mdx` | Track last auth method |
| `organization.mdx` | Organizations, teams, roles, permissions |
| `admin.mdx` | Admin panel, user management |
| `sso.mdx` | Single Sign-On (SSO) |
| `oidc-provider.mdx` | OpenID Connect provider |
| `oauth-provider.mdx` | OAuth 2.0 provider |
| `oauth-proxy.mdx` | OAuth proxy plugin |
| `jwt.mdx` | JWT token authentication |
| `bearer.mdx` | Bearer token authentication |
| `api-key/index.mdx` | API key authentication overview |
| `api-key/reference.mdx` | API key full reference |
| `api-key/advanced.mdx` | Advanced API key configuration |
| `passkey.mdx` | Passkey/WebAuthn plugin |
| `captcha.mdx` | Captcha integration |
| `have-i-been-pwned.mdx` | Password breach checking |
| `device-authorization.mdx` | Device authorization flow |
| `one-time-token.mdx` | One-time token plugin |
| `scim.mdx` | SCIM provisioning |
| `mcp.mdx` | MCP (Model Context Protocol) plugin |
| `open-api.mdx` | OpenAPI documentation plugin |
| `test-utils.mdx` | Testing utilities |
| `stripe.mdx` | Stripe payment integration |
| `polar.mdx` | Polar payment integration |
| `creem.mdx` | Creem billing integration |
| `commet.mdx` | Commet billing integration |
| `dodopayments.mdx` | Dodo Payments integration |
| `autumn.mdx` | Autumn billing integration |
| `dub.mdx` | Dub link tracking |
| `openfort.mdx` | Openfort Web3 wallet |
| `i18n.mdx` | Internationalization plugin |

### adapters/ (7 files)

| File | Description |
|------|-------------|
| `prisma.mdx` | Prisma ORM adapter |
| `drizzle.mdx` | Drizzle ORM adapter |
| `mongo.mdx` | MongoDB adapter |
| `postgresql.mdx` | PostgreSQL adapter |
| `mysql.mdx` | MySQL adapter |
| `sqlite.mdx` | SQLite adapter |
| `mssql.mdx` | Microsoft SQL Server adapter |
| `other-relational-databases.mdx` | Kysely and other databases |

### integrations/ (16 files)

| File | Description |
|------|-------------|
| `next.mdx` | Next.js integration |
| `nuxt.mdx` | Nuxt integration |
| `astro.mdx` | Astro integration |
| `svelte-kit.mdx` | SvelteKit integration |
| `solid-start.mdx` | SolidStart integration |
| `react-router.mdx` | React Router integration |
| `tanstack.mdx` | TanStack Start integration |
| `hono.mdx` | Hono integration |
| `express.mdx` | Express.js integration |
| `fastify.mdx` | Fastify integration |
| `elysia.mdx` | Elysia integration |
| `nestjs.mdx` | NestJS integration |
| `nitro.mdx` | Nitro integration |
| `expo.mdx` | Expo/React Native integration |
| `electron.mdx` | Electron integration |
| `convex.mdx` | Convex integration |
| `waku.mdx` | Waku integration |
| `encore.mdx` | Encore integration |
| `lynx.mdx` | Lynx integration |

### guides/ (10 files)

| File | Description |
|------|-------------|
| `your-first-plugin.mdx` | Building a custom plugin |
| `create-a-db-adapter.mdx` | Creating a custom database adapter |
| `saml-sso-with-okta.mdx` | SAML SSO with Okta guide |
| `browser-extension-guide.mdx` | Browser extension auth guide |
| `optimizing-for-performance.mdx` | Performance optimization |
| `next-auth-migration-guide.mdx` | Migrating from Auth.js/NextAuth |
| `auth0-migration-guide.mdx` | Migrating from Auth0 |
| `clerk-migration-guide.mdx` | Migrating from Clerk |
| `supabase-migration-guide.mdx` | Migrating from Supabase Auth |
| `workos-migration-guide.mdx` | Migrating from WorkOS |

### infrastructure/ (7 files)

| File | Description |
|------|-------------|
| `introduction.mdx` | Infrastructure overview |
| `getting-started.mdx` | Infrastructure setup |
| `services/email.mdx` | Email service configuration |
| `services/sms.mdx` | SMS service configuration |
| `plugins/audit-logs.mdx` | Audit logging plugin |
| `plugins/dashboard.mdx` | Admin dashboard plugin |
| `plugins/sentinel.mdx` | Sentinel security plugin |
