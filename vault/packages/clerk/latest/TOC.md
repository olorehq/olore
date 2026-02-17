# Clerk Table of Contents

## Directory Map

```
contents/
├── getting-started/           # Installation, quickstarts (19 files)
│   └── quickstart/            # Framework-specific quickstarts (3 files)
├── guides/                    # How-to guides (180+ files)
│   ├── account-portal/        # Account portal management (4 files)
│   ├── ai/                    # AI integrations (3 files)
│   │   └── mcp/               # MCP integration (3 files)
│   ├── billing/               # Billing setup (6 files)
│   ├── configure/             # Configuration guides (1 file)
│   │   └── auth-strategies/   # Authentication strategies (4 files)
│   │       ├── enterprise-connections/  # SSO, SAML, OIDC (4 files)
│   │       │   ├── easie/     # EASIE connections (2 files)
│   │       │   ├── oidc/      # OIDC setup (1 file)
│   │       │   └── saml/      # SAML setup (4 files)
│   │       ├── oauth/         # OAuth setup (5 files)
│   │       ├── social-connections/  # Social login (29 files)
│   │       └── web3/          # Web3 authentication (5 files)
│   ├── customizing-clerk/     # UI customization (5 files)
│   │   ├── adding-items/      # Add custom items (3 files)
│   │   ├── appearance-prop/   # Appearance customization (6 files)
│   │   └── elements/          # Clerk Elements (1 file)
│   │       ├── examples/      # Examples (4 files)
│   │       ├── guides/        # Implementation guides (3 files)
│   │       └── reference/     # Element reference (3 files)
│   ├── dashboard/             # Dashboard management (1 file)
│   │   └── dns-domains/       # Domain setup (2 files)
│   ├── development/           # Development guides (32 files)
│   │   ├── custom-flows/      # Custom auth flows (2 files)
│   │   │   ├── account-updates/  # Account update flows (7 files)
│   │   │   ├── api-keys/      # API key flows (1 file)
│   │   │   ├── authentication/  # Custom auth (17 files)
│   │   │   ├── billing/       # Billing flows (3 files)
│   │   │   └── organizations/  # Organization flows (8 files)
│   │   ├── deployment/        # Deployment guides (8 files)
│   │   ├── errors/            # Error handling (1 file)
│   │   ├── integrations/      # Third-party integrations (1 file)
│   │   │   ├── analytics/     # Analytics integration (1 file)
│   │   │   ├── databases/     # Database integration (9 files)
│   │   │   └── platforms/     # Platform integration (2 files)
│   │   ├── machine-auth/      # Machine-to-machine auth (4 files)
│   │   ├── migrating/         # Migration guides (6 files)
│   │   ├── sdk-development/   # SDK development (8 files)
│   │   ├── testing/           # Testing guides (3 files)
│   │   │   ├── cypress/       # Cypress testing (3 files)
│   │   │   └── playwright/    # Playwright testing (3 files)
│   │   ├── troubleshooting/   # Troubleshooting (5 files)
│   │   │   └── help-support/  # Support resources (2 files)
│   │   ├── upgrading/         # Version upgrades (3 files)
│   │   │   └── upgrade-guides/  # Upgrade guides (5 files)
│   │   │       └── core-2/    # Core 2.x upgrade (9 files)
│   │   ├── web-support/       # Web platform support (3 files)
│   │   └── webhooks/          # Webhook setup (6 files)
│   ├── how-clerk-works/       # System concepts (6 files)
│   │   └── security/          # Security overview (2 files)
│   ├── organizations/         # Organization features (6 files)
│   │   ├── add-members/       # Member management (3 files)
│   │   └── control-access/    # Access control (3 files)
│   ├── secure/                # Security guides (14 files)
│   │   └── best-practices/    # Security best practices (6 files)
│   ├── sessions/              # Session management (7 files)
│   └── users/                 # User management (11 files)
└── reference/                 # SDK and API reference (470+ files)
    ├── android/               # Android SDK (3 files)
    ├── api/                   # REST API (1 file)
    ├── astro/                 # Astro SDK (6 files)
    │   └── client-side-helpers/  # Client helpers (8 files)
    ├── backend/               # Backend SDK (4 files)
    │   ├── allowlist/         # Allowlist API (3 files)
    │   ├── api-keys/          # API keys (7 files)
    │   ├── billing/           # Billing API (4 files)
    │   ├── client/            # Client API (3 files)
    │   ├── domains/           # Domains API (1 file)
    │   ├── email-addresses/   # Email API (4 files)
    │   ├── invitations/       # Invitations API (4 files)
    │   ├── m2m-tokens/        # M2M tokens (3 files)
    │   ├── machines/          # Machine auth (9 files)
    │   ├── oauth-applications/  # OAuth apps (6 files)
    │   ├── organization/      # Organization API (18 files)
    │   ├── phone-numbers/     # Phone API (4 files)
    │   ├── redirect-urls/     # Redirect URLs (4 files)
    │   ├── saml-connections/  # SAML API (5 files)
    │   ├── sessions/          # Sessions API (5 files)
    │   ├── sign-in-tokens/    # Sign-in tokens (2 files)
    │   ├── testing-tokens/    # Testing tokens (1 file)
    │   ├── types/             # TypeScript types (25 files)
    │   └── user/              # User API (24 files)
    ├── chrome-extension/      # Chrome extension (2 files)
    ├── components/            # React components (3 files)
    │   ├── authentication/    # Auth components (6 files)
    │   ├── billing/           # Billing components (4 files)
    │   ├── control/           # Control components (14 files)
    │   ├── organization/      # Org components (4 files)
    │   ├── unstyled/          # Unstyled components (4 files)
    │   └── user/              # User components (3 files)
    ├── composables/           # Vue composables (8 files)
    ├── expo/                  # Expo SDK (6 files)
    ├── express/               # Express SDK (4 files)
    ├── fastify/               # Fastify SDK (3 files)
    ├── go/                    # Go SDK (1 file)
    ├── hooks/                 # React hooks (19 files)
    ├── ios/                   # iOS SDK (2 files)
    ├── javascript/            # JavaScript SDK (10 files)
    │   └── types/             # TypeScript types (60 files)
    ├── nextjs/                # Next.js SDK (3 files)
    │   ├── app-router/        # App Router (4 files)
    │   ├── errors/            # Error types (1 file)
    │   └── pages-router/      # Pages Router (2 files)
    ├── nuxt/                  # Nuxt SDK (3 files)
    ├── react/                 # React SDK (1 file)
    ├── react-router/          # React Router (4 files)
    ├── remix/                 # Remix SDK (3 files)
    ├── ruby/                  # Ruby SDK (6 files)
    ├── tanstack-react-start/  # TanStack Start (3 files)
    ├── views/                 # View components (1 file)
    │   ├── authentication/    # Auth views (1 file)
    │   └── user/              # User views (2 files)
    └── vue/                   # Vue SDK (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started/quickstart/overview.mdx` |
| React/Next.js integration | `contents/getting-started/quickstart.react.mdx` |
| Authentication setup | `contents/guides/configure/auth-strategies/` |
| User management | `contents/guides/users/` |
| Organization features | `contents/guides/organizations/` |
| API reference | `contents/reference/javascript/` |
| Backend SDK | `contents/reference/backend/` |
| Troubleshooting | `contents/guides/development/troubleshooting/` |

## Major Sections

### Getting Started (19 files)
Framework-specific quickstart guides including Next.js, React, Remix, Astro, Vue, Expo, React Router, TanStack Start, Express, Fastify, Go, Ruby, Android, iOS, and Chrome Extension.

### Guides (180+ files)

**Configuration & Authentication**
- Social login (Google, GitHub, Microsoft, etc.)
- Enterprise SSO (SAML, OIDC, EASIE)
- OAuth integration
- Web3 authentication
- Session management

**Development**
- Custom authentication flows
- API key management
- Webhooks
- Testing (Cypress, Playwright)
- Deployment
- Migration guides
- SDK development

**User Management**
- User CRUD operations
- Metadata management
- Email/phone verification
- Profile management

**Organizations**
- Creating and managing organizations
- Member invitations
- Roles and permissions
- Verified domains

**Security**
- Best practices
- Session tasks
- Security overview

**Customization**
- UI appearance customization
- Clerk Elements
- Account portal

**Integrations**
- Analytics platforms
- Database integrations
- Platform deployments

### Reference (470+ files)

**Frontend SDKs**
- JavaScript/TypeScript
- React (hooks, components)
- Next.js (App Router, Pages Router)
- React Router
- Remix
- Vue (composables)
- Nuxt
- Astro
- TanStack React Start
- Expo
- Android
- iOS
- Chrome Extension

**Backend SDKs**
- Node.js (Express, Fastify)
- Go
- Ruby

**API Reference**
- REST API documentation
- User API
- Organization API
- Session API
- Billing API
- SAML connections
- OAuth applications
- Machine-to-machine auth
- TypeScript types
