# clerk Table of Contents

## Directory Map

```
contents/
├── getting-started/               # Quickstarts and core concepts (21 files)
├── guides/                        # How-to guides and tutorials
│   ├── account-portal/            # Account portal guides (4 files)
│   ├── ai/                        # AI/MCP integration guides (6 files)
│   ├── billing/                   # Billing and subscriptions (7 files)
│   ├── configure/auth-strategies/ # OAuth, SAML, social, web3 (57 files)
│   ├── customizing-clerk/         # Appearance, elements, custom pages (25 files)
│   ├── development/               # Dev environment, custom flows, webhooks (156 files)
│   ├── how-clerk-works/           # Architecture and security (8 files)
│   ├── organizations/             # Multi-tenant org management (12 files)
│   ├── secure/                    # Security best practices (21 files)
│   ├── sessions/                  # Session management (7 files)
│   └── users/                     # User management (11 files)
└── reference/                     # SDK and API reference
    ├── android/                   # Android SDK (1 file)
    ├── api/                       # REST API reference (1 file)
    ├── astro/                     # Astro SDK (14 files)
    ├── backend/                   # Backend SDK - users, orgs, sessions (145 files)
    ├── chrome-extension/          # Chrome extension SDK (2 files)
    ├── components/                # UI components (40 files)
    ├── composables/               # Vue composables (8 files)
    ├── expo/                      # Expo/React Native SDK (12 files)
    ├── express/                   # Express middleware (4 files)
    ├── fastify/                   # Fastify plugin (3 files)
    ├── go/                        # Go SDK (1 file)
    ├── hooks/                     # React hooks (23 files)
    ├── ios/                       # iOS/Swift SDK (2 files)
    ├── javascript/                # Vanilla JS SDK (1 file)
    ├── native-mobile/             # React Native SDK (15 files)
    ├── nextjs/                    # Next.js SDK (10 files)
    ├── nuxt/                      # Nuxt SDK (3 files)
    ├── objects/                   # Client-side objects (12 files)
    ├── react/                     # React SDK (1 file)
    ├── react-router/              # React Router SDK (4 files)
    ├── ruby/                      # Ruby/Rails SDK (6 files)
    ├── tanstack-react-start/      # TanStack Start SDK (3 files)
    ├── types/                     # TypeScript types (65 files)
    ├── views/                     # Unstyled view components (4 files)
    └── vue/                       # Vue SDK (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started/quickstart.mdx` |
| Next.js setup | `contents/getting-started/quickstart.mdx` (or framework-specific) |
| React hooks | `contents/reference/hooks/overview.mdx` |
| Backend SDK | `contents/reference/backend/` |
| UI components | `contents/reference/components/overview.mdx` |
| Authentication strategies | `contents/guides/configure/auth-strategies/` |
| Organizations | `contents/guides/organizations/` |
| Webhooks | `contents/guides/development/webhooks/` |
| Billing | `contents/guides/billing/overview.mdx` |
| TypeScript types | `contents/reference/types/overview.mdx` |

## Detailed Structure

### getting-started/ (21 files)

| File | Description |
|------|-------------|
| `core-concepts.mdx` | Core concepts overview |
| `quickstart.mdx` | General quickstart |
| `quickstart.android.mdx` | Android quickstart |
| `quickstart.astro.mdx` | Astro quickstart |
| `quickstart.chrome-extension.mdx` | Chrome extension quickstart |
| `quickstart.expo.mdx` | Expo quickstart |
| `quickstart.expressjs.mdx` | Express.js quickstart |
| `quickstart.fastify.mdx` | Fastify quickstart |
| `quickstart.go.mdx` | Go quickstart |
| `quickstart.ios.mdx` | iOS quickstart |
| `quickstart.js-frontend.mdx` | Vanilla JS frontend quickstart |
| `quickstart.nuxt.mdx` | Nuxt quickstart |
| `quickstart.react-router.mdx` | React Router quickstart |
| `quickstart.react.mdx` | React quickstart |
| `quickstart.ruby.mdx` | Ruby quickstart |
| `quickstart.tanstack-react-start.mdx` | TanStack Start quickstart |
| `quickstart.vue.mdx` | Vue quickstart |
| `quickstart/overview.mdx` | Quickstart overview |
| `quickstart/setup-clerk.mdx` | Initial Clerk setup |

### guides/configure/auth-strategies/ (57 files)

| File/Dir | Description |
|----------|-------------|
| `sign-up-sign-in-options.mdx` | Configure sign-up/sign-in options |
| `enterprise-connections/overview.mdx` | Enterprise SSO overview |
| `enterprise-connections/saml/` | SAML providers (Azure, Google, Okta, custom) |
| `enterprise-connections/oidc/custom-provider.mdx` | Custom OIDC provider |
| `enterprise-connections/easie/` | EASIE connections (Google, Microsoft) |
| `oauth/overview.mdx` | OAuth configuration |
| `oauth/verify-oauth-tokens.mdx` | Verify OAuth tokens |
| `social-connections/overview.mdx` | Social login overview |
| `social-connections/*.mdx` | Per-provider setup (GitHub, Google, etc.) |
| `web3/` | Web3 wallet authentication |

### guides/customizing-clerk/ (25 files)

| File/Dir | Description |
|----------|-------------|
| `appearance-prop/` | Appearance customization prop |
| `adding-items/` | Add custom items to Clerk components |
| `elements/` | Clerk Elements (unstyled, headless components) |

### guides/development/ (156 files)

| File/Dir | Description |
|----------|-------------|
| `webhooks/` | Webhook setup and handling |
| `machine-auth/` | Machine-to-machine auth, API keys |
| `migrating/` | Migrating from other auth providers |
| `custom-sign-in-or-up-page.*.mdx` | Custom sign-in/up pages per framework |
| `endpoints.mdx` | Clerk API endpoints |
| `local-credentials.mdx` | Local development credentials |
| `geo-blocking.mdx` | Geographic blocking |

### guides/organizations/ (12 files)

| File/Dir | Description |
|----------|-------------|
| `add-members/` | Adding members to organizations |
| `control-access/` | Role-based access control |

### guides/secure/ (21 files)

| File/Dir | Description |
|----------|-------------|
| `best-practices/` | Security best practices |

### reference/backend/ (145 files)

| Dir | Description |
|-----|-------------|
| `allowlist/` | Allowlist management |
| `api-keys/` | API key operations |
| `billing/` | Billing operations |
| `client/` | Client operations |
| `domains/` | Domain management |
| `email-addresses/` | Email address operations |
| `invitations/` | Invitation management |
| `m2m-tokens/` | Machine-to-machine tokens |
| `machines/` | Machine management |
| `oauth-applications/` | OAuth app management |
| `organization/` | Organization CRUD |
| `phone-numbers/` | Phone number operations |
| `redirect-urls/` | Redirect URL management |
| `saml-connections/` | SAML connection management |
| `sessions/` | Session management |
| `sign-in-tokens/` | Sign-in token operations |
| `testing-tokens/` | Testing token utilities |
| `types/` | Backend types |
| `user/` | User CRUD operations |
| `waitlist-entries/` | Waitlist management |

### reference/components/ (40 files)

| Dir | Description |
|-----|-------------|
| `authentication/` | SignIn, SignUp, SignInOrUp components |
| `billing/` | Billing/pricing components |
| `control/` | Control flow components (Protect, SignedIn, etc.) |
| `organization/` | Organization components |
| `unstyled/` | Unstyled button components |
| `user/` | UserButton, UserProfile, UserAvatar |
| `utilities/` | Utility components |
| `overview.mdx` | Components overview |

### reference/hooks/ (23 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Hooks overview |
| `use-auth.mdx` | useAuth hook |
| `use-clerk.mdx` | useClerk hook |
| `use-user.mdx` | useUser hook |
| `use-organization.mdx` | useOrganization hook |
| `use-organization-list.mdx` | useOrganizationList hook |
| `use-session.mdx` | useSession hook |
| `use-session-list.mdx` | useSessionList hook |
| `use-sign-in.mdx` | useSignIn hook |
| `use-sign-up.mdx` | useSignUp hook |
| `use-reverification.mdx` | useReverification hook |
| `use-checkout.mdx` | Billing checkout hook |
| `use-plans.mdx` | Billing plans hook |
| `use-subscription.mdx` | Subscription hook |

### reference/nextjs/ (10 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Next.js SDK overview |
| `clerk-middleware.mdx` | clerkMiddleware() |
| `app-router/auth.mdx` | auth() helper (App Router) |
| `app-router/current-user.mdx` | currentUser() helper |
| `app-router/route-handlers.mdx` | Route handler auth |
| `app-router/server-actions.mdx` | Server actions auth |
| `pages-router/get-auth.mdx` | getAuth() (Pages Router) |

### reference/objects/ (12 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Objects overview |
| `clerk.mdx` | Clerk object |
| `user.mdx` | User object |
| `session.mdx` | Session object |
| `organization.mdx` | Organization object |
| `sign-in.mdx` | SignIn object |
| `sign-up.mdx` | SignUp object |
| `client.mdx` | Client object |
| `api-keys.mdx` | API keys object |

### reference/types/ (65 files)

Common TypeScript types for users, sessions, organizations, billing, errors, and verification resources.

### reference/astro/ (14 files), reference/expo/ (12 files), reference/native-mobile/ (15 files)

Framework-specific SDKs with components, hooks, and helpers for Astro, Expo, and React Native.
