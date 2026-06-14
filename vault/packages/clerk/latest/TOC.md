# Clerk Table of Contents

## Directory Map

```
contents/
├── getting-started/        # Quickstarts and core concepts (21 files)
│   └── quickstart/         # Framework-specific Next.js quickstart steps
├── guides/                 # How-to guides and configuration (339 files)
│   ├── account-portal/     # Hosted account portal setup
│   ├── ai/                 # AI agent authentication and MCP
│   ├── billing/            # Subscription and billing setup
│   ├── configure/          # Auth strategies, OAuth, SAML, social, Web3 (58 files)
│   ├── customizing-clerk/  # Appearance, elements, theming (25 files)
│   ├── dashboard/          # Clerk Dashboard usage
│   ├── development/        # Custom flows, deployment, integrations, testing (170 files)
│   ├── how-clerk-works/    # Concepts, security overview
│   ├── organizations/      # Multi-org, members, roles
│   ├── secure/             # Security best practices
│   ├── sessions/           # Session management
│   └── users/              # User management
└── reference/              # SDK and API reference (403 files)
    ├── android/            # Android SDK
    ├── api/                # REST API overview
    ├── astro/              # Astro SDK
    ├── backend/            # Backend SDK (Node) (153 files)
    ├── chrome-extension/   # Chrome Extension SDK
    ├── components/         # UI components (40 files)
    ├── composables/        # Vue composables
    ├── expo/               # Expo/React Native SDK
    ├── express/            # Express.js SDK
    ├── fastify/            # Fastify plugin
    ├── go/                 # Go SDK
    ├── hooks/              # React hooks (23 files)
    ├── ios/                # iOS SDK extras
    ├── javascript/         # Vanilla JS SDK
    ├── native-mobile/      # React Native SDK
    ├── nextjs/             # Next.js SDK
    ├── nuxt/               # Nuxt SDK
    ├── objects/            # Core JS objects (12 files)
    ├── react/              # React SDK overview
    ├── react-router/       # React Router SDK
    ├── ruby/               # Ruby SDK
    ├── tanstack-react-start/ # TanStack Start SDK
    ├── types/              # TypeScript types (74 files)
    ├── views/              # React Native views
    └── vue/                # Vue SDK
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user (Next.js) | `contents/getting-started/quickstart.mdx` |
| Core concepts | `contents/getting-started/core-concepts.mdx` |
| Framework quickstart | `contents/getting-started/quickstart.{framework}.mdx` |
| Configure auth strategies | `contents/guides/configure/auth-strategies/` |
| Social / OAuth login | `contents/guides/configure/auth-strategies/social-connections/` |
| SAML / Enterprise SSO | `contents/guides/configure/auth-strategies/enterprise-connections/` |
| Custom UI flows | `contents/guides/development/custom-flows/` |
| Webhooks | `contents/guides/development/webhooks/` |
| Organizations | `contents/guides/organizations/` |
| Appearance customization | `contents/guides/customizing-clerk/appearance-prop/` |
| Elements (headless UI) | `contents/guides/customizing-clerk/elements/` |
| Next.js SDK reference | `contents/reference/nextjs/overview.mdx` |
| React hooks | `contents/reference/hooks/overview.mdx` |
| Backend (Node) SDK | `contents/reference/backend/` |
| UI components | `contents/reference/components/` |
| TypeScript types | `contents/reference/types/overview.mdx` |
| Billing / subscriptions | `contents/guides/billing/` |
| Machine-to-machine auth | `contents/guides/development/machine-auth/` |

## Detailed Structure

### getting-started/ (21 files)

| File | Description |
|------|-------------|
| `quickstart.mdx` | Main quickstart (Next.js App Router) |
| `quickstart.{framework}.mdx` | Quickstarts for astro, expo, expressjs, fastify, go, ios, android, nuxt, react, react-router, ruby, tanstack-react-start, vue, chrome-extension, js-frontend |
| `core-concepts.mdx` | Authentication concepts overview |
| `quickstart/` | Sub-steps for Next.js quickstart |

### guides/configure/ (58 files)

| Directory | Description |
|-----------|-------------|
| `auth-strategies/social-connections/` | Google, GitHub, Discord, etc. OAuth setup (29 files) |
| `auth-strategies/enterprise-connections/saml/` | SAML enterprise SSO |
| `auth-strategies/enterprise-connections/oidc/` | OIDC enterprise connections |
| `auth-strategies/enterprise-connections/easie/` | EASIE connections |
| `auth-strategies/oauth/` | OAuth as a provider |
| `auth-strategies/web3/` | Web3 wallet authentication |

### guides/customizing-clerk/ (25 files)

| Directory | Description |
|-----------|-------------|
| `appearance-prop/` | Styling via appearance prop (6 files) |
| `elements/` | Headless UI components (15 files) |
| `elements/reference/` | Elements API reference |
| `elements/guides/` | Elements how-to guides |
| `elements/examples/` | Elements code examples |
| `adding-items/` | Adding custom pages/links to components |

### guides/development/ (170 files)

| Directory | Description |
|-----------|-------------|
| `custom-flows/authentication/` | Custom sign-in/sign-up flows (20 files) |
| `custom-flows/organizations/` | Custom org flows |
| `custom-flows/account-updates/` | Profile/account update flows |
| `custom-flows/api-keys/` | API key management flows |
| `custom-flows/billing/` | Custom billing flows |
| `deployment/` | Production deployment guides (8 files) |
| `integrations/databases/` | Supabase, Convex, Neon, Fauna, etc. (9 files) |
| `integrations/analytics/` | Analytics integration |
| `integrations/frameworks/` | Framework-specific integrations |
| `integrations/platforms/` | Platform integrations |
| `machine-auth/` | Machine-to-machine / M2M authentication |
| `migrating/` | Migrating from Auth.js, Firebase, Cognito, etc. |
| `testing/` | Testing with Cypress and Playwright |
| `webhooks/` | Webhook setup and events (6 files) |
| `errors/` | Error reference |
| `upgrading/` | SDK upgrade guides |
| `troubleshooting/` | Debugging and support |
| `web-support/` | Expo web support |

### guides/organizations/ (12 files)

| File/Directory | Description |
|----------------|-------------|
| `overview.mdx` | Multi-organization overview |
| `add-members/` | Invite and manage members |
| `control-access/` | Roles, permissions, RBAC |

### guides/secure/ (22 files)

| File/Directory | Description |
|----------------|-------------|
| `overview.mdx` | Security overview |
| `best-practices/` | Security best practices (6 files) |
| `authorization-checks.mdx` | Authorization check patterns |

### reference/backend/ (153 files)

| Directory | Description |
|-----------|-------------|
| `overview.mdx` | Backend SDK overview |
| `user/` | User CRUD methods (24 files) |
| `organization/` | Organization methods (18 files) |
| `sessions/` | Session management |
| `api-keys/` | API key management (7 files) |
| `billing/` | Billing backend methods |
| `machines/` | Machine auth (9 files) |
| `m2m-tokens/` | M2M token methods |
| `invitations/` | Invitation management |
| `allowlist/` | Allowlist management |
| `email-addresses/` | Email address management |
| `phone-numbers/` | Phone number management |
| `domains/` | Domain management |
| `oauth-applications/` | OAuth application management |
| `saml-connections/` | SAML connection methods |
| `sign-in-tokens/` | Sign-in token methods |
| `testing-tokens/` | Testing token methods |
| `waitlist-entries/` | Waitlist management |
| `agent-tasks/` | Agent task backend methods |
| `types/` | Backend SDK types (32 files) |

### reference/components/ (40 files)

| Directory | Description |
|-----------|-------------|
| `authentication/` | `<SignIn>`, `<SignUp>`, `<SignInButton>`, etc. (7 files) |
| `user/` | `<UserButton>`, `<UserProfile>`, `<UserAvatar>` |
| `organization/` | `<OrganizationSwitcher>`, `<OrganizationProfile>`, etc. |
| `control/` | `<SignedIn>`, `<SignedOut>`, `<Protect>`, `<ClerkLoaded>`, etc. (12 files) |
| `billing/` | Billing and subscription components |
| `unstyled/` | Unstyled component variants |
| `utilities/` | Portal provider |
| `versioning.mdx` | Component versioning guide |

### reference/hooks/ (23 files)

| File | Description |
|------|-------------|
| `use-auth.mdx` | `useAuth()` - auth state and helpers |
| `use-user.mdx` | `useUser()` - current user |
| `use-clerk.mdx` | `useClerk()` - Clerk instance |
| `use-sign-in.mdx` | `useSignIn()` - sign-in flow |
| `use-sign-up.mdx` | `useSignUp()` - sign-up flow |
| `use-session.mdx` | `useSession()` - current session |
| `use-session-list.mdx` | `useSessionList()` - all sessions |
| `use-organization.mdx` | `useOrganization()` - current org |
| `use-organization-list.mdx` | `useOrganizationList()` - org list |
| `use-reverification.mdx` | `useReverification()` - step-up auth |
| `use-checkout.mdx` | `useCheckout()` - billing checkout |
| `use-plans.mdx` | `usePlans()` - billing plans |
| `use-subscription.mdx` | `useSubscription()` - subscription state |
| `use-waitlist.mdx` | `useWaitlist()` - waitlist |
| `use-api-keys.mdx` | `useApiKeys()` - API keys |

### reference/objects/ (12 files)

| File | Description |
|------|-------------|
| `clerk.mdx` | Main Clerk object |
| `user.mdx` | User object |
| `session.mdx` | Session object |
| `organization.mdx` | Organization object |
| `sign-in.mdx` | SignIn object |
| `sign-up.mdx` | SignUp object |
| `client.mdx` | Client object |
| `billing.mdx` | Billing object |
| `api-keys.mdx` | API keys object |

### reference/types/ (74 files)

Comprehensive TypeScript type definitions. Key files:
| File | Description |
|------|-------------|
| `overview.mdx` | Types overview |
| `errors.mdx` | Error types |
| `metadata.mdx` | Metadata types |
| `session-status.mdx` | Session status enum |
| `organization-membership.mdx` | Membership type |
| `external-account.mdx` | OAuth external account type |
| `billing-*.mdx` | Billing-related types (multiple files) |

### reference/nextjs/ (10 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Next.js SDK overview |
| `clerk-middleware.mdx` | `clerkMiddleware()` API |
| `app-router/auth.mdx` | `auth()` helper (App Router) |
| `app-router/current-user.mdx` | `currentUser()` helper |
| `app-router/route-handlers.mdx` | Route handler auth |
| `app-router/server-actions.mdx` | Server action auth |
| `pages-router/get-auth.mdx` | `getAuth()` (Pages Router) |
| `pages-router/build-clerk-props.mdx` | `buildClerkProps()` |
| `usage-with-older-versions.mdx` | Legacy version compatibility |

### reference/astro/ (14 files)

| File/Directory | Description |
|----------------|-------------|
| `overview.mdx` | Astro SDK overview |
| `clerk-middleware.mdx` | Astro middleware |
| `client-side-helpers/` | Client-side auth helpers (8 files) |

### reference/expo/ (12 files)

| File/Directory | Description |
|----------------|-------------|
| `overview.mdx` | Expo SDK overview |
| `native-components/` | Native UI components |
| `native-hooks/` | Native hooks (use-oauth, use-sso, etc.) |
| `passkeys.mdx` | Expo passkey support |
