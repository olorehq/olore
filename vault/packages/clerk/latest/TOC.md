# clerk Table of Contents

## Directory Map

```
contents/
├── cli.mdx
├── getting-started/  (22 files)
│   ├── quickstart/  (4)
├── guides/  (409 files)
│   ├── account-portal/  (5)
│   ├── ai/  (13)
│   ├── billing/  (10)
│   ├── configure/  (67)
│   ├── customizing-clerk/  (25)
│   ├── dashboard/  (13)
│   ├── development/  (194)
│   ├── how-clerk-works/  (8)
│   ├── organizations/  (13)
│   ├── protect/  (19)
│   ├── secure/  (24)
│   ├── sessions/  (7)
│   ├── users/  (11)
├── index.mdx
├── maintenance-mode.mdx
├── pinning.mdx
├── reference/  (493 files)
│   ├── _partials/  (1)
│   ├── android/  (1)
│   ├── api/  (1)
│   ├── astro/  (14)
│   ├── backend/  (196)
│   ├── chrome-extension/  (2)
│   ├── components/  (43)
│   ├── composables/  (8)
│   ├── electron/  (5)
│   ├── expo/  (17)
│   ├── express/  (4)
│   ├── fastify/  (3)
│   ├── go/  (1)
│   ├── hooks/  (24)
│   ├── ios/  (2)
│   ├── javascript/  (1)
│   ├── native-mobile/  (18)
│   ├── nextjs/  (13)
│   ├── nuxt/  (4)
│   ├── objects/  (13)
│   ├── react/  (1)
│   ├── react-router/  (4)
│   ├── ruby/  (6)
│   ├── tanstack-react-start/  (3)
│   ├── types/  (97)
│   ├── views/  (7)
│   ├── vue/  (3)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Overview | `contents/index.mdx` |
| Quickstarts | `contents/getting-started/quickstart/` |
| Core concepts | `contents/getting-started/core-concepts.mdx` |
| Components | `contents/reference/components/` |
| Hooks | `contents/reference/hooks/` |
| Backend SDK | `contents/reference/backend/` |
| Next.js | `contents/reference/nextjs/` |
| Auth config | `contents/guides/configure/` |

## Detailed Structure

### (root)/ (4 files)

| File | Description |
|------|-------------|
| `cli.mdx` | Learn how to use the Clerk CLI to set up authentication, manage configuration, and integrate with AI agents. |
| `index.mdx` | Add complete user management to your application in minutes. |
| `maintenance-mode.mdx` | Learn about Clerk's Maintenance Mode. |
| `pinning.mdx` | Learn how to pin a Clerk SDK to a specific version. |

### getting-started/ (18 files)

| File | Description |
|------|-------------|
| `core-concepts.mdx` | Learn about the main concepts and objects that drive Clerk's powerful authentication and user management syste |
| `quickstart.android.mdx` | Add authentication and user management to your Android app with Clerk. |
| `quickstart.astro.mdx` | Add authentication and user management to your Astro app with Clerk. |
| `quickstart.chrome-extension.mdx` | Add authentication and user management to your Chrome Extension with Clerk using Plasmo. |
| `quickstart.electron.mdx` | Add authentication and user management to your Electron app with Clerk. |
| `quickstart.expo.mdx` | Add authentication and user management to your Expo app with Clerk. |
| `quickstart.expressjs.mdx` | Learn how to use Clerk to quickly and easily add secure authentication and user management to your Express ser |
| `quickstart.fastify.mdx` | Learn how to integrate Clerk for secure authentication and user management into your application using a Fasti |
| `quickstart.go.mdx` | Learn how to integrate Clerk into your Go application using the Clerk Go SDK. |
| `quickstart.ios.mdx` | Add authentication and user management to your iOS app with Clerk. |
| `quickstart.js-frontend.mdx` | Add authentication and user management to your JavaScript app with Clerk. |
| `quickstart.mdx` | Add authentication and user management to your Next.js app with Clerk. |
| `quickstart.nuxt.mdx` | Add authentication and user management to your Nuxt app with Clerk. |
| `quickstart.react-router.mdx` | Learn how to use Clerk to quickly and easily add secure authentication and user management to your React Route |
| `quickstart.react.mdx` | Add authentication and user management to your React app with Clerk. |
| `quickstart.ruby.mdx` | Learn how to use Clerk to quickly and easily add secure authentication and user management to your Ruby applic |
| `quickstart.tanstack-react-start.mdx` | Learn how to use Clerk to quickly and easily add secure authentication and user management to your TanStack Re |
| `quickstart.vue.mdx` | Add authentication and user management to your Vue app with Clerk. |

### getting-started/quickstart/ (4 files)

| File | Description |
|------|-------------|
| `chrome-extension-js.mdx` | Add authentication and user management to your Chrome Extension with Clerk using plain TypeScript and esbuild. |
| `overview.mdx` | See the getting started guides and tutorials. |
| `pages-router.mdx` | Add authentication and user management to your Next.js app with Clerk. |
| `setup-clerk.mdx` | Set up a Clerk account and application with the Clerk CLI or in the Clerk Dashboard. |

### guides/account-portal/ (5 files)

| File | Description |
|------|-------------|
| `direct-links.mdx` | Learn how to share direct links to your Account Portal pages, and how to set up fallback redirects. |
| `disable-account-portal.mdx` | Learn how to disable the Account Portal. |
| `getting-started.mdx` | The Account Portal offers a comprehensive solution for managing user authentication and profile management in  |
| `hosted-auth.mdx` | Use Clerk's Account Portal to sign users in and sign users up from Expo, iOS, and Android apps. |
| `overview.mdx` | The Account Portal offers hosted user authentication and profile management for web and native applications. |

### guides/ai/ (2 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Learn how to integrate Clerk authentication with AI-powered applications and development tools. |
| `skills.mdx` | Install Clerk Skills to enhance AI coding agents with authentication expertise. |

### guides/ai/eve/ (5 files)

| File | Description |
|------|-------------|
| `api-keys-and-m2m.mdx` | Authenticate Clerk API key callers and agent-to-agent M2M traffic in an eve agent — from creating the machines |
| `authorize-tool-calls.mdx` | Authorize individual eve tool calls — permission checks from the auth context, plus brokered OAuth for tools t |
| `custom-channel-auth.mdx` | Build an eve channel AuthFn that verifies Clerk callers from scratch — session auth, multi-token acceptance, a |
| `enriching-instructions.mdx` | Build eve dynamic instructions that personalize the system prompt per session from the authenticated Clerk cal |
| `getting-started.mdx` | Overview of the Clerk + eve integration. Install ready-to-go helpers via shadcn, or try the demo to see every  |

### guides/ai/mcp/ (6 files)

| File | Description |
|------|-------------|
| `agent-feedback.mdx` | Let AI agents report what blocked or confused them while using your MCP server, and review those reports with  |
| `browser-sessions.mdx` | Let AI agents that use a browser open your app signed in as the user, with a one-time link from your MCP serve |
| `build-mcp-server.mdx` | Build an MCP server, configure Clerk OAuth, and verify an authenticated client connection. |
| `clerk-mcp-server.mdx` | Connect AI agents to Clerk's MCP server to manage your Clerk applications, users, and production setup, and to |
| `connect-mcp-client.mdx` | Learn how to connect MCP-compatible clients, like Cursor, to your MCP server |
| `step-up-scopes.mdx` | Ask MCP clients for more OAuth scopes only when a tool needs them, with the MCP SDK's scopeChallenge option an |

### guides/billing/ (10 files)

| File | Description |
|------|-------------|
| `account-credits.mdx` | Add and manage account credits for Users and Organizations. |
| `custom-plans.mdx` | Transition Subscriptions between Plans and create custom pricing for your customers |
| `default-plans.mdx` | Learn more about default Plans and how they work in Clerk Billing |
| `discounts.mdx` | Reduce the price of a customer's Subscription — apply a Discount yourself, or issue a promo code customers red |
| `for-b2b.mdx` | Clerk Billing is a feature that allows you to create and manage Plans and Features for your application. |
| `for-b2c.mdx` | Clerk Billing is a feature that allows you to create and manage Plans and Features for your application. |
| `free-and-complimentary-access.mdx` | Choose between a free trial, a 100% Discount, or a $0 complimentary price when you need to give someone free a |
| `free-trials.mdx` | Let users try paid Features before subscribing |
| `overview.mdx` | Clerk Billing is a feature that allows you to create and manage Plans and Features for your application. |
| `seat-based-plans.mdx` | Configure Plans with seat limits, per-seat pricing, or both. |

### guides/configure/ (1 files)

| File | Description |
|------|-------------|
| `session-tasks.mdx` | Learn how to configure your application to require users to complete specific tasks after signing up or signin |

### guides/configure/auth-strategies/ (6 files)

| File | Description |
|------|-------------|
| `oauth-deep-links.mdx` | Learn how OAuth and SSO sign-in return to your Electron app through a custom scheme, and how to package the ap |
| `sign-in-with-apple.expo.mdx` | Learn how to use Clerk to natively sign in with Apple in your Expo app. |
| `sign-in-with-apple.mdx` | Learn how to use Clerk to natively sign in with Apple in your iOS app. |
| `sign-in-with-google.expo.mdx` | Learn how to use Clerk to natively sign in with Google in your Expo app. |
| `sign-in-with-google.mdx` | Learn how to use Clerk to natively sign in with Google in your Android app. |
| `sign-up-sign-in-options.mdx` | Clerk provides various options for configuring a sign-up and sign-in flow. |

### guides/configure/auth-strategies/enterprise-connections/ (10 files)

| File | Description |
|------|-------------|
| `account-linking.mdx` | Learn how Clerk handles account linking during Enterprise SSO. |
| `authentication-flows.mdx` | Learn about the Enterprise SSO authentication flows. |
| `certificate-rotation.mdx` | Learn how to add, replace, and remove the signing certificates of a SAML enterprise connection without interru |
| `custom-attribute-mapping.mdx` | Learn how to sync custom attributes, including multi-valued attributes, from your identity provider to Clerk's |
| `directory-sync.mdx` | Learn how to use Directory Sync to automatically provision and deprovision users, sync custom attributes, and  |
| `jit-provisioning.mdx` | Learn about Clerk's support for Just-in-Time (JIT) Provisioning during SAML SSO. |
| `overview.mdx` | Clerk provides Enterprise SSO to authenticate users via federated identity providers such as Azure AD, Okta, G |
| `self-serve-directory-sync.mdx` | Learn how to let your customers' IT admins set up Directory Sync (SCIM provisioning) for their own enterprise  |
| `self-serve-sso.mdx` | Learn how to let your customers' IT admins configure their own enterprise SSO connections within your applicat |
| `sso-bypass.mdx` | Learn how to let specific users sign in with an email code when their enterprise SSO connection is unavailable |

### guides/configure/auth-strategies/enterprise-connections/easie/ (2 files)

| File | Description |
|------|-------------|
| `google.mdx` | Learn how to allow users to sign up and sign in to your Clerk app with their Google account using EASIE SSO. |
| `microsoft.mdx` | Learn how to allow users to sign up and sign in to your Clerk app with their Microsoft account using EASIE SSO |

### guides/configure/auth-strategies/enterprise-connections/oidc/ (1 files)

| File | Description |
|------|-------------|
| `custom-provider.mdx` | Learn how to integrate a custom OIDC provider with Clerk for Enterprise SSO. |

### guides/configure/auth-strategies/enterprise-connections/saml/ (4 files)

| File | Description |
|------|-------------|
| `azure.mdx` | Learn how to allow users to sign up and sign in to your Clerk app with their Microsoft account using SAML SSO. |
| `custom-provider.mdx` | Learn how to integrate an identity provider with Clerk using SAML SSO. |
| `google.mdx` | Learn how to integrate Google Workspace with Clerk using SAML SSO. |
| `okta.mdx` | Learn how to integrate Okta Workforce with Clerk using SAML SSO. |

### guides/configure/auth-strategies/oauth/ (8 files)

| File | Description |
|------|-------------|
| `client-id-metadata-documents.mdx` | Learn how Clerk uses Client ID Metadata Documents and how to explicitly allow, review, and block URL-identifie |
| `custom-consent-page.mdx` | Learn how to configure a custom OAuth consent page, and how to avoid common consent phishing and token grant r |
| `device-authorization-grant.mdx` | Learn how to authorize CLIs, TVs, and other input-constrained devices with Clerk's OAuth 2.0 Device Authorizat |
| `how-clerk-implements-oauth.mdx` | Learn how to configure and secure OAuth flows with Clerk, including Device Authorization Grant, Client ID Meta |
| `overview.mdx` | Learn what OAuth and OpenID Connect (OIDC) are, why they're used, and how the different OAuth flows work. |
| `scoped-access.mdx` | Learn how to use OAuth with Clerk to grant granular permissions and manage access securely. |
| `single-sign-on.mdx` | Learn how to implement single sign-on with OAuth & OpenID Connect in your Clerk application or when signing in |
| `verify-oauth-tokens.mdx` | Learn how to verify OAuth tokens in your applications. |

### guides/configure/auth-strategies/social-connections/ (30 files)

| File | Description |
|------|-------------|
| `account-linking.mdx` | Learn how Clerk handles account linking and manages unverified email addresses from OAuth providers. |
| `agentid.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their AgentID account using OAu |
| `apple.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Apple ID using OAuth. |
| `atlassian.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Atlassian account using O |
| `bitbucket.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Bitbucket account using O |
| `box.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Box account using OAuth. |
| `coinbase.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Coinbase account using OA |
| `custom-provider.mdx` | Configure a custom OpenID Connect (OIDC) compatible authentication provider for your Clerk application. |
| `discord.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Discord account using OAu |
| `dropbox.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Dropbox account using OAu |
| `facebook.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Facebook account using OA |
| `github.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their GitHub account using OAut |
| `gitlab.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their GitLab account using OAut |
| `google.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Google account using OAut |
| `hubspot.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their HubSpot account using OAu |
| `hugging-face.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Hugging Face account usin |
| `line.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their LINE account using OAuth. |
| `linear.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Linear account using OAut |
| `linkedin-oidc.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their LinkedIn account using Op |
| `microsoft.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Microsoft account using O |
| `notion.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Notion account using OAut |
| `overview.mdx` | Learn how to effortlessly add social connections to your application using popular social providers like Googl |
| `slack.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Slack account using OAuth |
| `spotify.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Spotify account using OAu |
| `tiktok.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their TikTok account using OAut |
| `twitch.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Twitch account using OAut |
| `twitter.mdx` | Learn how to set up social connection with Twitter v1. |
| `vercel.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Vercel account using OAut |
| `x-twitter.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their X/Twitter account using O |
| `xero.mdx` | Learn how to allow users to sign up and sign in to your Clerk application with their Xero account using OAuth. |

### guides/configure/auth-strategies/web3/ (5 files)

| File | Description |
|------|-------------|
| `base.mdx` | Learn how to set up Web3 authentication with Base. |
| `coinbase-wallet.mdx` | Learn how to set up Web3 authentication with Coinbase Wallet. |
| `metamask.mdx` | Learn how to set up Web3 authentication with MetaMask. |
| `okx-wallet.mdx` | Learn how to set up Web3 authentication with OKX Wallet. |
| `solana.mdx` | Learn how to set up Web3 authentication with Solana. |

### guides/customizing-clerk/ (5 files)

| File | Description |
|------|-------------|
| `clerk-theme.android.mdx` | Utilize Clerk's ClerkTheme to adjust the general styles of the Android views, like colors, fonts, and design p |
| `clerk-theme.mdx` | Utilize Clerk's ClerkTheme to adjust the general styles of the iOS views, like colors, fonts, and design prope |
| `email-sms-templates.mdx` | Learn how to configure the theming of Clerk-sent emails and SMS messages. |
| `localization.mdx` | Use the Clerk localizations package to override and provide predefined or custom localizations for your Clerk  |
| `overview.mdx` | An overview of all customization options in Clerk, including UI styling, navigation menus, localization, and e |

### guides/customizing-clerk/adding-items/ (3 files)

| File | Description |
|------|-------------|
| `organization-profile.mdx` | Learn how to add custom pages and include external links within the navigation sidenav of the <OrganizationPro |
| `user-button.mdx` | Learn how to add custom items and include external links within the <UserButton /> menu. |
| `user-profile.mdx` | Learn how to add custom pages and include external links within the navigation sidenav of the <UserProfile />  |

### guides/customizing-clerk/appearance-prop/ (6 files)

| File | Description |
|------|-------------|
| `bring-your-own-css.mdx` | Learn how to bring your own CSS to Clerk's prebuilt components. |
| `captcha.mdx` | Utilize Clerk's captcha prop in order to change the appearance of the CAPTCHA widget. |
| `options.mdx` | Utilize Clerk's options prop in order to change the layout and behavior of Clerk's prebuilt components, as wel |
| `overview.mdx` | Utilize Clerk's appearance property in order to share styles across every component or individually to any of  |
| `themes.mdx` | Clerk currently offers six prebuilt themes for you to customize the overall appearance of your Clerk app. |
| `variables.mdx` | Utilize Clerk's variables property in order to adjust the general styles of the component's base theme, like c |

### guides/customizing-clerk/elements/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Learn how to use Clerk Elements to build custom UIs on top of the Clerk APIs without having to manage the unde |

### guides/customizing-clerk/elements/examples/ (4 files)

| File | Description |
|------|-------------|
| `primitives.mdx` | Example implementations using Clerk Elements primitives. |
| `shadcn-ui.mdx` | Learn how to compose Clerk Elements with shadcn/ui to build custom sign in and sign up flows. |
| `sign-in.mdx` | Examples of prebuilt sign-in flows with Clerk Elements. |
| `sign-up.mdx` | Examples of prebuilt sign-up flows with Clerk Elements. |

### guides/customizing-clerk/elements/guides/ (3 files)

| File | Description |
|------|-------------|
| `sign-in.mdx` | Learn how to build a complete sign-in form with Clerk Elements. |
| `sign-up.mdx` | Learn how to build a complete sign-up form with Clerk Elements. |
| `styling.mdx` | Learn how to style Clerk Elements. |

### guides/customizing-clerk/elements/reference/ (3 files)

| File | Description |
|------|-------------|
| `common.mdx` | Reference documentation for common Clerk Elements components. |
| `sign-in.mdx` | Reference documentation for Clerk Elements sign-in components. |
| `sign-up.mdx` | Reference documentation for Clerk Elements sign-up components. |

### guides/dashboard/ (5 files)

| File | Description |
|------|-------------|
| `analytics.mdx` | Learn how to use analytics in the Clerk Dashboard to track user engagement, sign-in activity, retention, and m |
| `manage-team-access.mdx` | Learn about workspace Roles and their feature-specific Permissions in the Clerk Dashboard, including the Owner |
| `organization-profile.mdx` | Learn how to view and manage Organization settings, membership, and data in the Clerk Dashboard. |
| `overview.mdx` | Learn how to manage your workspace in the Clerk Dashboard, including creating workspaces, inviting team member |
| `user-profile.mdx` | Learn how to view and manage individual user identity and data in the Clerk Dashboard. |

### guides/dashboard/dns-domains/ (3 files)

| File | Description |
|------|-------------|
| `proxy-fapi.mdx` | Learn how to proxy the Clerk Frontend API through your domain. |
| `satellite-domains.mdx` | Learn how to share sessions across different domains by adding satellite domains to your application. |
| `subdomain-allowlist.mdx` | Restrict which subdomains can make cross-domain requests to the Frontend API for stronger security. |

### guides/dashboard/logs/ (5 files)

| File | Description |
|------|-------------|
| `admin-logs.mdx` | Learn how to use Admin Logs, the audit log for your Clerk workspace covering instance configuration changes, R |
| `application-logs.mdx` | Learn how to use Application Logs in the Clerk Dashboard and Backend API to monitor authentication events, tra |
| `email-logs.mdx` | Learn how to use Email Logs in the Clerk Dashboard to investigate transactional email delivery events and trou |
| `overview.mdx` | Learn how to view and filter logs in the Clerk Dashboard. |
| `sms-delivery-events.mdx` | Trace SMS delivery, understand failures, and troubleshoot missing verification codes in Application Logs. |

### guides/development/ (42 files)

| File | Description |
|------|-------------|
| `access-clerk-outside-components.mdx` | Learn how to access and use the Clerk instance outside of React components in Expo applications. |
| `add-onboarding-flow.mdx` | Leverage Clerk’s customizable session tokens, public metadata, and Middleware to create a robust onboarding ex |
| `add-react-router.mdx` | Learn how to add React Router to your React app using their Data API router. |
| `clerk-environment-variables.mdx` | Learn which Clerk environment variables are necessary to configure your projects. |
| `configure-consistent-crx-id.mdx` | Learn how to configure a consistent CRX ID in your Chrome Extension. |
| `custom-sign-in-or-up-page.mdx` | Learn how to add a custom sign-in-or-up page to your Next.js app with Clerk's prebuilt components. |
| `custom-sign-in-or-up-page.nuxt.mdx` | Learn how to add a custom sign-in-or-up page to your Nuxt app with Clerk's prebuilt components. |
| `custom-sign-in-or-up-page.react-router.mdx` | Learn how to add a custom sign-in-or-up page to your React Router app with Clerk's prebuilt components. |
| `custom-sign-in-or-up-page.react.mdx` | Learn how to add a custom sign-in-or-up page to your React app with Clerk's prebuilt components. |
| `custom-sign-in-or-up-page.tanstack-react-start.mdx` | Learn how to add a custom sign-in-or-up page to your TanStack React Start app with Clerk's prebuilt components |
| `custom-sign-up-page.mdx` | Learn how to add a custom sign-up page to your Next.js app with Clerk's prebuilt components. |
| `custom-sign-up-page.nuxt.mdx` | Learn how to add a custom sign-up page to your Nuxt app with Clerk's prebuilt components. |
| `custom-sign-up-page.react-router.mdx` | Learn how to add a custom sign-up page to your React Router app with Clerk's prebuilt components. |
| `custom-sign-up-page.react.mdx` | Learn how to add a custom sign-up page to your React app with Clerk's prebuilt components. |
| `custom-sign-up-page.tanstack-react-start.mdx` | Learn how to add a custom sign-up page to your TanStack React Start app with Clerk's prebuilt components. |
| `customize-redirect-urls.mdx` | Customize where your users are redirected to after they sign in or sign up. |
| `declarative-mode.mdx` | Learn how to add React Router to your Clerk + React application. |
| `declarative-mode.react.mdx` | Learn how to add React Router to your Clerk + React application. |
| `endpoints.mdx` | Learn how to use Clerk's Astro SDK in your Astro endpoints. |
| `geo-blocking.mdx` | Learn how to add geo blocking to your Next.js + Clerk application. |
| `hybrid-rendering.mdx` | Clerk's Astro SDK supports Astro's on-demand rendering output modes (server and hybrid). |
| `image-optimization.mdx` | Learn how to use image optimization when fetching user images from Clerk. |
| `local-credentials.mdx` | Learn how to use the useLocalCredentials() hook in your Expo app to enable biometric sign-ins for returning us |
| `making-requests.mdx` | Learn about various ways to make authenticated requests to the backend when using Clerk SDKs. |
| `managing-environments.mdx` | An overview of the differences between development and production instances. |
| `minimum-app-version.android.mdx` | Require users to update their native app when its version is older than the minimum you set in the Clerk Dashb |
| `minimum-app-version.ios.mdx` | Require users to update their native app when its version is older than the minimum you set in the Clerk Dashb |
| `minimum-app-version.mdx` | Require users to update their native app when its version is older than the minimum you set in the Clerk Dashb |
| `offline-support.mdx` | Learn how to enable offline support in your Expo app with Clerk. |
| `override-clerk-types-interfaces.mdx` | Learn about the interfaces that you can use to define custom types for your application. |
| `rendering-modes.mdx` | Learn how Clerk's SDK interacts with Next.js's different rendering modes. |
| `shadcn-cli.mdx` | Use the shadcn/ui CLI to bootstrap your Next.js app with Clerk. |
| `trpc.mdx` | Learn how to integrate Clerk into your Next.js app using tRPC. |
| `verifying-api-keys.expressjs.mdx` | Learn how to use Clerk's helpers to verify API keys in your Express application. |
| `verifying-api-keys.fastify.mdx` | Learn how to use Clerk's helpers to verify API keys in your Fastify application. |
| `verifying-api-keys.mdx` | Learn how to use Clerk's helpers to verify API keys in your Next.js application. |
| `verifying-api-keys.nuxt.mdx` | Learn how to use Clerk's helpers to verify API keys in your Nuxt application. |
| `verifying-api-keys.react-router.mdx` | Learn how to use Clerk's helpers to verify API keys in your React Router application. |
| `verifying-api-keys.tanstack-react-start.mdx` | Learn how to use Clerk's helpers to verify API keys in your TanStack React Start application. |
| `verifying-oauth-access-tokens.mdx` | Learn how to use Clerk's helpers to verify OAuth access tokens in your Next.js application. |
| `verifying-oauth-access-tokens.react-router.mdx` | Learn how to use Clerk's helpers to verify OAuth access tokens in your React Router application. |
| `verifying-oauth-access-tokens.tanstack-react-start.mdx` | Learn how to use Clerk's helpers to verify OAuth access tokens in your TanStack React Start application. |

### guides/development/custom-flows/ (4 files)

| File | Description |
|------|-------------|
| `error-handling.android.mdx` | Provide your users with useful information about the errors being returned from sign-up and sign-in requests. |
| `error-handling.ios.mdx` | Provide your users with useful information about the errors being returned from sign-up and sign-in requests. |
| `error-handling.mdx` | Provide your users with useful information about the errors being returned from sign-up and sign-in requests. |
| `overview.mdx` | Learn the process behind building custom sign-up and sign-in flows with Clerk. |

### guides/development/custom-flows/account-updates/ (6 files)

| File | Description |
|------|-------------|
| `add-email.mdx` | Learn how to use the Clerk API to build a custom flow for adding an email to a user's account. |
| `add-phone.mdx` | Learn how to use the Clerk API to build a custom flow for adding a phone number to a user's account. |
| `manage-mfa.mdx` | Learn how to use the Clerk API to build a custom flow for managing multi-factor authentication. |
| `manage-sso-connections.mdx` | Learn how to use the Clerk API to build a custom flow for adding and managing SSO connections |
| `update-password.mdx` | Learn how to build a custom update password flow using the Clerk API. |
| `user-impersonation.mdx` | Learn how to build a custom flow using the Clerk API that handles user impersonation. |

### guides/development/custom-flows/api-keys/ (1 files)

| File | Description |
|------|-------------|
| `manage-api-keys.mdx` | Learn how to use the Clerk API to build a custom flow for creating, listing, and revoking API keys. |

### guides/development/custom-flows/authentication/ (21 files)

| File | Description |
|------|-------------|
| `application-invitations.mdx` | Learn how to use the Clerk API to build a custom flow for handling application invitations. |
| `biometric-sign-in.mdx` | Learn how to enroll a biometric credential and let returning users sign in to a native app with biometrics. |
| `bot-sign-up-protection.mdx` | Learn how to ensure your custom sign-up flow works with Challenge suspicious sign-ups. |
| `device-trust.mdx` | Learn how to build a custom sign-in flow that requires Device Trust. |
| `email-links.mdx` | Learn how to build a custom flow using Clerk's API to handle email links for sign-up, sign-in, and email addre |
| `email-password.mdx` | Learn how to build a custom email/password sign-up and sign-in flow using the Clerk API. |
| `email-sms-otp.mdx` | Learn how build a custom passwordless sign-in flow with email or phone code using the Clerk API. |
| `embedded-email-links.mdx` | Learn how to build custom embeddable email link sign-in flows to increase user engagement and reduce drop off  |
| `enterprise-connections.mdx` | Learn how to use the Clerk API to build a custom sign-up and sign-in flow that supports enterprise connections |
| `forgot-password.mdx` | Learn how to build a custom forgot password flow using the Clerk API. |
| `google-one-tap.mdx` | Learn how to build a custom Google One Tap authentication flow using the Clerk API. |
| `last-authentication-strategy.mdx` | Learn how to use the Clerk API to build a custom flow for displaying the lastAuthenticationStrategy property a |
| `legal-acceptance.mdx` | Learn how to use the Clerk API to build a custom user interface for handling legal acceptance. |
| `multi-factor-authentication.mdx` | Learn how to build a custom sign-in flow that requires multi-factor authentication (MFA). |
| `multi-session-applications.mdx` | Learn how to use the Clerk API to add multi-session handling to your application. |
| `oauth-connections.mdx` | Learn how to use the Clerk API to build a custom sign-up and sign-in flow that supports OAuth connections. |
| `passkeys.mdx` | Learn how to use the Clerk API to build a custom authentication flow using passkeys. |
| `session-tasks.mdx` | Learn how to handle session tasks in your custom authentication flow. |
| `sign-in-or-up.mdx` | Learn how to handle a combined sign-up and sign-in flow in your application. |
| `sign-out.mdx` | Learn how to use the Clerk API to build a custom sign-out flow using Clerk's signOut() function. |
| `waitlist.mdx` | Learn how to use the Clerk API to build a custom waitlist form using Clerk's useWaitlist() hook. |

### guides/development/custom-flows/authentication/legacy/ (13 files)

| File | Description |
|------|-------------|
| `application-invitations.mdx` | Use the legacy Clerk API to build a custom flow for handling application invitations. |
| `email-links.mdx` | Use the legacy Clerk API to build a custom flow for handling email links for sign-up, sign-in, and email addre |
| `email-password-mfa.mdx` | Use the legacy Clerk API to build a custom email/password sign-in flow that requires multi-factor authenticati |
| `email-password.mdx` | Use the legacy Clerk API to build a custom email/password sign-up and sign-in flow. |
| `email-sms-otp.mdx` | Use the legacy Clerk API to build a custom email or phone one time code (OTP) authentication flow. |
| `embedded-email-links.mdx` | Use the legacy Clerk API to build custom embeddable email link sign-in flows to increase user engagement and r |
| `enterprise-connections.mdx` | Use the legacy Clerk API to build a custom sign-up and sign-in flow that supports enterprise connections. |
| `forgot-password.mdx` | Learn how to build a custom forgot password flow using the Clerk API. |
| `last-authentication-strategy.mdx` | Use the legacy Clerk API to build a custom flow for displaying the lastAuthenticationStrategy property and hig |
| `legal-acceptance.mdx` | Use the legacy Clerk API to build a custom user interface for handling legal acceptance. |
| `oauth-connections.mdx` | Use the legacy Clerk API to build a custom sign-up and sign-in flow that supports OAuth connections. |
| `passkeys.mdx` | Use the legacy Clerk API to build a custom authentication flow using passkeys. |
| `sign-in-or-up.mdx` | Use the legacy Clerk API to handle a combined sign-up and sign-in flow in your application. |

### guides/development/custom-flows/billing/ (3 files)

| File | Description |
|------|-------------|
| `add-new-payment-method.mdx` | Learn how to use the Clerk API to build a custom flow for adding a new payment method to a user's account. |
| `checkout-existing-payment-method.mdx` | Learn how to use the Clerk API to build a custom checkout flow that allows users to checkout with an existing  |
| `checkout-new-payment-method.mdx` | Learn how to use the Clerk API to build a custom checkout flow that allows users to add a new payment method d |

### guides/development/custom-flows/organizations/ (8 files)

| File | Description |
|------|-------------|
| `accept-organization-invitations.mdx` | Learn how to use the Clerk API to build a custom flows for accepting Organization invitations. |
| `create-organizations.mdx` | Learn how to use the Clerk API to build a custom flow for creating Organizations. |
| `manage-membership-requests.mdx` | Learn how to use the Clerk API to build a custom flow for managing Organization Membership Requests. |
| `manage-organization-invitations.mdx` | Learn how to use the Clerk API to build a custom flow for creating and managing Organization invitations. |
| `manage-roles.mdx` | Learn how to use the Clerk API build a custom flow for managing member Roles in an Organization. |
| `manage-user-org-invitations.mdx` | Learn how to use the Clerk API to build a custom flow for managing a user's Organization invitations. |
| `organization-switcher.mdx` | Learn how to use the Clerk API to build a custom flow for switching between Organizations. |
| `update-organizations.mdx` | Learn how to use the Clerk API to build a custom flow for updating an Organization in your application. |

### guides/development/deployment/ (9 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Learn how to deploy an Astro app to production with Clerk. |
| `behind-a-proxy.mdx` | Learn how to deploy a Clerk app to a web server using proxies and reverse proxies like nginx or Caddy, or usin |
| `changing-domains.mdx` | Learn how to change your Clerk production instance's primary domain. |
| `chrome-extension.mdx` | Learn how to deploy a Chrome Extension to production with Clerk. |
| `electron.mdx` | Learn how to package an Electron app with Clerk for production. |
| `expo.mdx` | Learn how to deploy an Expo app to production with Clerk. |
| `production.mdx` | Learn how to deploy your Clerk app to production. |
| `staging-alternatives.mdx` | Alternative approaches to setting up a staging environment with Clerk, including using shared production crede |
| `vercel.mdx` | Learn how to deploy a Clerk app to Vercel. |

### guides/development/errors/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Find more information about a Clerk error. |

### guides/development/integrations/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Learn about the available integrations with Clerk. |

### guides/development/integrations/analytics/ (1 files)

| File | Description |
|------|-------------|
| `google-analytics.mdx` | Enable Clerk with Google Analytics to authenticate requests to your application. |

### guides/development/integrations/databases/ (9 files)

| File | Description |
|------|-------------|
| `convex.mdx` | Learn how to integrate Clerk into your Convex application. |
| `firebase.mdx` | Learn how to integrate Clerk into your Firebase application. |
| `grafbase.mdx` | Learn how to integrate Clerk and Grafbase into your application |
| `hasura.mdx` | Learn how to integrate Clerk into your Hasura application. |
| `instantdb.mdx` | Learn how to integrate Clerk into your InstantDB application. |
| `neon.mdx` | Learn how to integrate Clerk into your Neon application. |
| `nhost.mdx` | Learn how to integrate Clerk into your Nhost project. |
| `prisma-postgres.mdx` | Learn how to integrate Clerk into your Prisma Postgres application. |
| `supabase.mdx` | Learn how to integrate Clerk into your Supabase application. |

### guides/development/integrations/frameworks/ (1 files)

| File | Description |
|------|-------------|
| `encore.mdx` | Learn how to integrate Clerk for secure authentication and user management into your Encore backend applicatio |

### guides/development/integrations/platforms/ (2 files)

| File | Description |
|------|-------------|
| `shopify.mdx` | Learn how to integrate Clerk into your Shopify store. |
| `vercel-marketplace.mdx` | Learn how to integrate Clerk into your Vercel projects through the Vercel Marketplace. |

### guides/development/machine-auth/ (4 files)

| File | Description |
|------|-------------|
| `api-keys.mdx` | Learn how to use Clerk's API keys feature to let your application's users create API keys that delegate access |
| `m2m-tokens.mdx` | Learn how to use Clerk's M2M tokens feature to authenticate requests between machines. |
| `overview.mdx` | Learn what machine authentication is, why it's used, and how it works with Clerk. |
| `token-formats.mdx` | Learn about the differences between JWT and opaque token formats for machine authentication. |

### guides/development/migrating/ (6 files)

| File | Description |
|------|-------------|
| `astro-community-sdk.mdx` | Learn how to migrate from the Astro community SDK to the Clerk Astro SDK. |
| `authjs.mdx` | Learn how to migrate an application using Auth.js to use Clerk for authentication. |
| `cognito.mdx` | Seamlessly migrate AWS Cognito user passwords into Clerk. |
| `firebase.mdx` | Migrating your user base from Firebase to Clerk is a 2-part process that can be accomplished with just a few s |
| `overview.mdx` | Guides on how to move your user data from another authentication platform to Clerk. |
| `vue-community-sdk.mdx` | Learn how to migrate from the Vue community SDK to the Clerk Vue SDK. |

### guides/development/sdk-development/ (8 files)

| File | Description |
|------|-------------|
| `backend-only.mdx` | A reference for implementing a backend-only Clerk SDK |
| `conventions.mdx` | A set of agreed standards for building Clerk SDKs. |
| `frontend-only.mdx` | A reference for implementing a frontend-only Clerk SDK |
| `fullstack.mdx` | A reference for implementing a fullstack Clerk SDK |
| `overview.mdx` | A reference for implementing a new Clerk SDK from scratch. |
| `philosophy.mdx` | The guiding principle for building a Clerk SDK. |
| `terminology.mdx` | A list of common terms and their explanations used inside Clerk's SDKs. |
| `types.mdx` | Learn about the three different types of SDKs: frontend-only, backend-only, and fullstack. |

### guides/development/testing/ (6 files)

| File | Description |
|------|-------------|
| `agent-tasks.mdx` | Use Agent Tasks to create authenticated sessions on behalf of users in your tests and AI agent workflows. |
| `overview.mdx` | Learn about testing with Clerk. |
| `postman-or-insomnia.mdx` | Learn about generating and using a long-lived JWT Token with Postman or Insomnia. |
| `test-against-production.mdx` | Run end-to-end tests against your production instance without Test mode, with Backend API test users, sign-in  |
| `test-emails-and-phones.mdx` | Write end-to-end tests for email and phone verification flows, including OTPs and email verification links. |
| `test-organization-domains.mdx` | Verify Organization domain ownership in local development and end-to-end tests without publishing a real DNS r |

### guides/development/testing/cypress/ (3 files)

| File | Description |
|------|-------------|
| `custom-commands.mdx` | Use custom commands to sign in and out with Clerk in your Cypress tests. |
| `overview.mdx` | Use Cypress to write end-to-end tests with Clerk. |
| `test-account-portal.mdx` | Learn how to test the Account Portal flow with Cypress. |

### guides/development/testing/playwright/ (4 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Use Playwright to write end-to-end tests with Clerk. |
| `test-authenticated-flows.mdx` | Learn how to save and reuse authenticated state across Playwright tests. |
| `test-helpers.mdx` | Use test helpers to sign in/sign out with Clerk in your Playwright tests. |
| `test-sign-up-flows.mdx` | Learn how to test the sign-up form with Playwright, including additional fields like first and last name. |

### guides/development/troubleshooting/ (7 files)

| File | Description |
|------|-------------|
| `email-deliverability.mdx` | A lot goes into making sure verification emails make it to your customers as quickly as possible. Clerk uses e |
| `email-domain-name-warmup.mdx` | Learn how email providers evaluate new domains, how to warm up your domain for reliable verification email del |
| `email-suppression-lists.mdx` | Learn why email addresses are added to suppression lists, how suppression affects Clerk email delivery, and wh |
| `jwt-decoder.mdx` | Decode JWTs and inspect claims. |
| `overview.mdx` | Learn how to troubleshoot common issues with Clerk and contact support for additional assistance. |
| `script-loading.mdx` | Troubleshooting strategies for cases when Clerk doesn't successfully load |
| `using-production-keys-in-development.mdx` | Learn how to use your production Clerk instance locally for debugging. |

### guides/development/troubleshooting/help-support/ (2 files)

| File | Description |
|------|-------------|
| `browser-replay.mdx` | Learn how to record replays and share them with Clerk Support. |
| `create-a-minimal-reproduction.mdx` | Learn how to create a minimal reproduction in order to help the Clerk Support team debug and resolve issues sp |

### guides/development/upgrading/ (2 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Learn how to upgrade your application to use the latest Clerk features and SDKs. |
| `versioning.mdx` | A brief guide on how versioning works in Clerk. |

### guides/development/upgrading/upgrade-guides/ (11 files)

| File | Description |
|------|-------------|
| `2025-11-10.mdx` | Learn how to upgrade to version 2025-11-10 of Clerk's API. |
| `2026-05-12.mdx` | Learn how to upgrade to version 2026-05-12 of Clerk's API. |
| `2026-08-20.mdx` | Learn how to upgrade to version 2026-08-20 of Clerk's API. |
| `android-v1.mdx` | Update to v1 of the Clerk Android SDK. |
| `core-2.mdx` | Learn how to upgrade to the latest version of Clerk's SDKs |
| `core-3.mdx` | Learn how to upgrade to Clerk Core 3 across all SDKs. |
| `expo-v2.mdx` | Learn how to upgrade your application to use the latest Clerk Expo SDK. |
| `ios-v1.mdx` | Update imports, configuration, environment wiring, and sign-in code when moving to v1. |
| `migrate-from-create-route-matcher.mdx` | Learn how to migrate away from Middleware-based auth checks with createRouteMatcher to resource-based auth che |
| `nextjs-v6.mdx` | Learn how to upgrade your application to use the latest Clerk Next.js SDK with support for Next.js 15. |
| `node-to-express.mdx` | Learn how to upgrade from the Clerk's Node SDK to the Express SDK. |

### guides/development/upgrading/upgrade-guides/_partials/ (1 files)

| File | Description |
|------|-------------|
| `preserve-signed-out-ux.mdx` |  |

### guides/development/upgrading/upgrade-guides/core-2/ (9 files)

| File | Description |
|------|-------------|
| `backend.mdx` | Learn how to upgrade the @clerk/backend package to the latest version. |
| `chrome-extension.mdx` | Learn how to upgrade Clerk's Chrome Extension SDK to the latest version. |
| `expo.mdx` | Learn how to upgrade Clerk's Expo SDK to the latest version. |
| `fastify.mdx` | Learn how to upgrade Clerk's Fastify SDK to the latest version. |
| `javascript.mdx` | Learn how to upgrade Clerk's Javascript SDK to the latest version. |
| `nextjs.mdx` | Learn how to upgrade Clerk's Next.js SDK to the latest version. |
| `node.mdx` | Learn how to upgrade Clerk's Node SDK to the latest version. |
| `react.mdx` | Learn how to upgrade Clerk's React SDK to the latest version. |
| `remix.mdx` | Learn how to upgrade from the Clerk Remix SDK to the latest version. |

### guides/development/web-support/ (3 files)

| File | Description |
|------|-------------|
| `custom-sign-in-or-up-page.mdx` | Learn how to add custom sign-in-or-up page to your Expo web app with Clerk's prebuilt components. |
| `custom-sign-up-page.mdx` | Learn how to add custom sign-up page to your Expo app with Clerk's prebuilt components. |
| `overview.mdx` | Add web support to your Expo project with Clerk. |

### guides/development/webhooks/ (6 files)

| File | Description |
|------|-------------|
| `billing.mdx` | Clerk Billing webhooks allow you to track Subscription lifecycles and monitor payment attempts. |
| `debugging.mdx` | Understand how to debug your webhooks while developing your application |
| `inngest.mdx` | Learn how to integrate Clerk with Inngest. |
| `loops.mdx` | Learn how to add your Clerk users to your Loops audience, and send automated email sequences. |
| `overview.mdx` | Clerk webhooks allow you to receive event notifications from Clerk. |
| `syncing.mdx` | Learn how to sync Clerk data to your app with webhooks. |

### guides/how-clerk-works/ (6 files)

| File | Description |
|------|-------------|
| `cookies.mdx` | Learn how cookies enable secure authentication and manage browser-server interactions. |
| `multi-tenant-architecture.mdx` | This guide outlines a number of the common architecture scenarios for building B2B, B2C, and Platform applicat |
| `overview.mdx` | Learn how Clerk is architected and how it works under the hood. |
| `routing.mdx` | Learn how Clerk handles routing in your application. |
| `system-limits.mdx` | Learn about rate limiting on the Clerk APIs. |
| `tokens-and-signatures.mdx` | Learn about JWTs, digital signatures, and how Clerk uses them to securely authenticate users. |

### guides/how-clerk-works/security/ (2 files)

| File | Description |
|------|-------------|
| `clerk-telemetry.mdx` | Clerk collects telemetry data from its SDKs and the Clerk CLI about general product and feature usage. |
| `vulnerability-disclosure-policy.mdx` | Clerk's vulnerability disclosure policy. |

### guides/organizations/ (7 files)

| File | Description |
|------|-------------|
| `configure.mdx` | Learn how to configure global Organization settings in the Clerk Dashboard, including pricing, membership limi |
| `create-and-manage.mdx` | Learn how to create and manage individual Organizations in the Clerk Dashboard and in your application. |
| `domain-verification.mdx` | Learn how Clerk verifies Organization domains through affiliation (email) and ownership (DNS TXT), and what ea |
| `getting-started.mdx` | Learn how to create and manage Organizations in your application. |
| `metadata.mdx` | Learn how to add custom metadata to your B2B authentication flows to store additional information in the org o |
| `org-slugs-in-urls.mdx` | Learn how to use Organization slugs in your application URLs to build tenant-specific authentication flows. En |
| `overview.mdx` | Learn what Clerk Organizations are, how they work, and how to build secure multi-tenant B2B applications with  |

### guides/organizations/add-members/ (3 files)

| File | Description |
|------|-------------|
| `invitations.mdx` | Send, manage, and track user invitations within your multi-tenant SaaS using Clerk Organizations. |
| `sso.mdx` | Integrate as many Enterprise SSO methods within Clerk Organizations. Enable SAML SSO, OAuth/OIDC, and other se |
| `verified-domains.mdx` | Automatically invite or suggest users to join an Organization based on their email domain, using Clerk's Verif |

### guides/organizations/control-access/ (3 files)

| File | Description |
|------|-------------|
| `check-access.mdx` | Limit access to content or entire routes based on a user's Organization Role or Permissions. |
| `role-sets.mdx` | Control which Roles are available to each Organization using Role Sets, the foundational building block for Or |
| `roles-and-permissions.mdx` | Implement Role-Based Access Control (RBAC) in your application. Set custom Roles, assign privileges, and contr |

### guides/protect/ (6 files)

| File | Description |
|------|-------------|
| `bot-protection.mdx` | Protect your application from bots by challenging sign-ups that look automated or come through VPNs, Tor, or p |
| `device-trust.mdx` | Protect your users from credential stuffing attacks with automatic second-factor verification on new devices. |
| `getting-started.mdx` | Check that your application meets Clerk Protect's requirements, then enable protections in the Clerk Dashboard |
| `overview.mdx` | Protect is Clerk's fraud and abuse protection system, built into every sign-up and sign-in. |
| `user-enumeration-protection.mdx` | Learn how to protect your users from user enumeration attacks. |
| `user-lockout.mdx` | User information is a prime target for malicious activity. Clerk protects your users against brute force attac |

### guides/protect/_partials/ (2 files)

| File | Description |
|------|-------------|
| `system-protections-business-plan.mdx` |  |
| `system-protections-every-plan.mdx` |  |

### guides/protect/protections/ (11 files)

| File | Description |
|------|-------------|
| `block-disposable-email-addresses.mdx` | Stop people from signing up with throwaway email addresses. |
| `block-email-subaddresses.mdx` | Stop people from creating extra accounts with variations of an email address that already has one. |
| `block-risky-email-domains.mdx` | Block sign-ups from email domains that Clerk rates as risky. |
| `block-sign-ups-by-country.mdx` | Block sign-ups by country, using a blocklist or an allowlist. |
| `block-suspicious-network-types.mdx` | Block sign-ups from VPNs, Tor, proxies, and hosting networks. |
| `challenge-residential-proxies.mdx` | Challenge sign-ups that come through residential proxies, which route traffic through other people's home inte |
| `limit-sign-ups-from-shared-infrastructure.mdx` | Limit bursts of sign-ups that appear to use the same infrastructure. |
| `limit-sign-ups-per-email-domain.mdx` | Limit bursts of sign-ups that use the same email domain. |
| `limit-sign-ups-per-ip-address.mdx` | Cap how many sign-ups a single IP address can start in an hour, and block the rest. |
| `overview.mdx` | Turn on protections that Clerk builds and maintains to stop abuse of your sign-ups, sign-ins, and user account |
| `require-device-intelligence.mdx` | Block sign-ups created by browsers that have no verified Device Intelligence result. |

### guides/secure/ (18 files)

| File | Description |
|------|-------------|
| `authorization-checks.android.mdx` | Learn how to check user Roles, Permissions, Plans, Features, and reverification in your Android application. |
| `authorization-checks.ios.mdx` | Learn how to check user Roles, Permissions, Plans, Features, and reverification in your iOS application. |
| `authorization-checks.mdx` | Learn how to verify and validate user Roles and Permissions within Clerk to maintain secure access control. |
| `basic-rbac.mdx` | Learn how to leverage Clerk's publicMetadata to implement your own basic Role Based Access Controls. |
| `features.mdx` | Grant access to your privileged content and data using features. |
| `legacy-bot-protection.mdx` | Learn how legacy bot sign-up protection works, and how to update your application to Challenge suspicious sign |
| `legal-compliance.mdx` | Learn how to configure your legal compliance settings in the Clerk Dashboard. |
| `mfa-recovery.mdx` | Learn how to reset MFA for users who have lost access to their second factor, and how to build your own reset  |
| `overview.mdx` | Learn how Clerk protects your application from common security threats including credential stuffing, brute fo |
| `password-protection-and-rules.mdx` | Clerk refers to the National Institute of Standards and Technology (NIST) guidelines to determine the characte |
| `protect-content.mdx` | Learn how to protect pages, Route Handlers, and Server Actions from unauthenticated users in your Clerk + Next |
| `protect-content.nuxt.mdx` | Learn how to protect content from unauthenticated users in your Clerk + Nuxt application. |
| `restricting-access.mdx` | Learn how to manage user access to your application by configuring Clerk's access restrictions. |
| `reverification.mdx` | Learn how to implement Clerk's reverification feature to protect sensitive actions in your application. |
| `rotate-api-keys.mdx` | Learn how to rotate your Clerk Secret Key and webhook signing secrets to revoke access for compromised credent |
| `secret-key-ip-allowlist.mdx` | Learn how to add an IP allowlist to a Clerk Secret Key so Clerk's Backend API rejects requests from IP address |
| `session-options.mdx` | Clerk provides session management options for fine-tuning user visits to your application. |
| `waitlist.mdx` | Learn how to build a custom waitlist page for your application. |

### guides/secure/best-practices/ (6 files)

| File | Description |
|------|-------------|
| `csp-headers.mdx` | Learn how to configure your Content Security Policy to work with Clerk and its abuse and fraud protections. |
| `csrf-protection.mdx` | CSRF is an attack that tricks the victim into submitting a malicious request. It inherits the identity and pri |
| `fixation-protection.mdx` | Session fixation is an attack that permits an attacker to hijack a valid user session. The attack explores a l |
| `protect-email-links.mdx` | Learn how to protect email link sign-ins and sign-ups. |
| `unauthorized-sign-in.mdx` | Notify users of unauthorized sign-ins to their accounts |
| `xss-leak-protection.mdx` | Learn how Clerk prevents and mitigates XSS attacks. |

### guides/sessions/ (7 files)

| File | Description |
|------|-------------|
| `customize-session-tokens.mdx` | Learn how to customize the session token that is generated for you by Clerk. |
| `force-token-refresh.mdx` | Learn how to force a refresh of a user's session token in your Clerk application. |
| `jwt-templates.mdx` | Learn how to create custom JWT templates to generate JSON Web Tokens with Clerk. |
| `manual-jwt-verification.mdx` | Learn how to manually verify Clerk-generated session tokens (JWTs). |
| `session-tokens.mdx` | Learn about session tokens and how to validate them in your backend. |
| `sync-host.mdx` | Learn how to configure your Chrome Extension to sync user authentication with your web application. |
| `verifying.mdx` | Learn how to verify a session with Clerk in your Go application. |

### guides/users/ (11 files)

| File | Description |
|------|-------------|
| `extending.mdx` | Learn how to store information about a user that Clerk doesn't collect and extend the User object. |
| `impersonation.mdx` | Clerk's user impersonation feature allows you to sign in as different users to offer customer support or debug |
| `inviting.mdx` | Learn how to invite users to your Clerk application. |
| `managing.mdx` | Learn how to manage your users in your Clerk application. |
| `reading.astro.mdx` | Learn how to use Clerk's helpers to read user data in your Astro application. |
| `reading.expo.mdx` | Learn how to use Clerk's hooks to read user data in your Expo application. |
| `reading.mdx` | Learn how to use Clerk's hooks and helpers to read user data in your Next.js application. |
| `reading.nuxt.mdx` | Learn how to use Clerk's composables to read user data in your Nuxt application. |
| `reading.react-router.mdx` | Learn how to use Clerk's hooks and helpers to read user data in your React Router application. |
| `reading.react.mdx` | Learn how to use Clerk's hooks and helpers to read user data in your React application. |
| `reading.tanstack-react-start.mdx` | Learn how to use Clerk's hooks and helpers to read user data in your TanStack React Start application. |

### reference/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Learn about the Clerk and community SDK's available for integrating Clerk into your application. |

### reference/_partials/ (1 files)

| File | Description |
|------|-------------|
| `objects-types.mdx` |  |

### reference/android/ (1 files)

| File | Description |
|------|-------------|
| `passkeys.mdx` | Learn how to configure passkeys for your Android application. |

### reference/api/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Access Clerk's Frontend, Backend, and Platform API reference documentation. |

### reference/astro/ (6 files)

| File | Description |
|------|-------------|
| `clerk-middleware.mdx` | The clerkMiddleware() helper integrates Clerk authentication into your Astro application through middleware. |
| `integration.mdx` | The Astro integration provides session and user context to Clerk's hooks and components. |
| `locals.mdx` | Learn how to authenticate your Astro application with Clerk using locals. |
| `overview.mdx` | The Clerk Astro SDK gives you access to prebuilt components, stores, and helpers to make user authentication e |
| `react.mdx` | Learn how to user Clerk inside an Astro app with React |
| `update-clerk-options.mdx` | The updateClerkOptions() function allows you to update Clerk's options at runtime. |

### reference/astro/client-side-helpers/ (8 files)

| File | Description |
|------|-------------|
| `auth-store.mdx` | Clerk's $authStore nanostore provides a convenient way to access the current auth state and helper methods for |
| `clerk-store.mdx` | Clerk's $clerkStore nanostore provides a convenient way to access the Clerk object. This provides access to so |
| `organization-store.mdx` | Clerk's $organizationStore store retrieves the currently active Organization. |
| `session-list-store.mdx` | Clerk's $sessionList store retrieves a list of sessions that have been registered on the client device. |
| `session-store.mdx` | Clerk's $sessionStore nanostore provides a convenient way to access the current user Session object, as well a |
| `sign-in-store.mdx` | Clerk's $signInStore nanostore provides a convenient way to access the SignIn object, which allows you to chec |
| `sign-up-store.mdx` | Clerk's $signUpStore nanostore provides a convenient way to access the SignUp object, which allows you to chec |
| `user-store.mdx` | The $userStore store provides a convenient way to access current user data and helper methods for managing the |

### reference/backend/ (4 files)

| File | Description |
|------|-------------|
| `authenticate-request.mdx` | Use the authenticateRequest() method to verify a token passed from the frontend. |
| `overview.mdx` | Use clerkClient to interact with Clerk's Backend API resources. |
| `verify-token.mdx` | Use the verifyToken() method to verify a token signature. |
| `verify-webhook.mdx` | Use the verifyWebhook() method to verify a webhook signature. |

### reference/backend/agent-tasks/ (2 files)

| File | Description |
|------|-------------|
| `create.mdx` | Use the create() method to create an Agent Task. |
| `revoke.mdx` | Use the revoke() method to revoke an Agent Task. |

### reference/backend/allowlist/ (3 files)

| File | Description |
|------|-------------|
| `create-allowlist-identifier.mdx` | Use the createAllowlistIdentifier() method to add a new identifier to the allowlist. |
| `delete-allowlist-identifier.mdx` | Use the deleteAllowlistIdentifier() method to delete an allowlist identifier. |
| `get-allowlist-identifier-list.mdx` | Use the getAllowlistIdentifierList() method to get a list of allowlist identifiers. |

### reference/backend/api-keys/ (8 files)

| File | Description |
|------|-------------|
| `create.mdx` | Use the create() method to create an API key. |
| `delete.mdx` | Use the delete() method to delete an API key. |
| `get-secret.mdx` | Use the getSecret() method to get the secret of an API key. |
| `get.mdx` | Use the get() method to get an API key. |
| `list.mdx` | Use the list() method to get a list of API keys for the given user or Organization. |
| `revoke.mdx` | Use the revoke() method to revoke an API key. |
| `update.mdx` | Use the update() method to update an API key. |
| `verify.mdx` | Use the verify() method to verify an API key secret. |

### reference/backend/billing/ (5 files)

| File | Description |
|------|-------------|
| `cancel-subscription-item.mdx` | Use the cancelSubscriptionItem() method to cancel a Subscription Item. |
| `extend-subscription-item-free-trial.mdx` | Use the extendSubscriptionItemFreeTrial() method to extend the free trial period of a Subscription Item. |
| `get-organization-billing-subscription.mdx` | Use the getOrganizationBillingSubscription() method to get an Organization's Billing Subscription. |
| `get-plan-list.mdx` | Use the getPlanList() method to get a list of Billing Plans. |
| `get-user-billing-subscription.mdx` | Use the getUserBillingSubscription() method to get a user's Billing Subscription. |

### reference/backend/client/ (3 files)

| File | Description |
|------|-------------|
| `get-client-list.mdx` | Retrieves the list of clients. |
| `get-client.mdx` | Use the getClient() method to get a single client by its ID. |
| `verify-client.mdx` | Use the verifyClient() method to get a client for a given session token, if the session is active. |

### reference/backend/domains/ (5 files)

| File | Description |
|------|-------------|
| `add.mdx` | Use the add() method to add a new domain to the instance. |
| `delete-domain.mdx` | Use the deleteDomain() method to delete a domain other than the active one. |
| `delete.mdx` | Use the delete() method to delete a domain other than the active one. |
| `list.mdx` | Use the list() method to list the domains for the instance. |
| `update.mdx` | Use the update() method to update a domain. |

### reference/backend/email-addresses/ (4 files)

| File | Description |
|------|-------------|
| `create-email-address.mdx` | Use the createEmailAddress() method to create an email address for the specified user. |
| `delete-email-address.mdx` | Use the deleteEmailAddress() method to delete an email address. |
| `get-email-address.mdx` | Use the getEmailAddress() method to get an email address by its ID. |
| `update-email-address.mdx` | Use the updateEmailAddress() method to update an email address. |

### reference/backend/enterprise-connections/ (5 files)

| File | Description |
|------|-------------|
| `create-enterprise-connection.mdx` | Use the createEnterpriseConnection() method to create an enterprise connection. |
| `delete-enterprise-connection.mdx` | Use the deleteEnterpriseConnection() method to delete an enterprise connection. |
| `get-enterprise-connection-list.mdx` | Use the getEnterpriseConnectionList() method to get a list of enterprise connections. |
| `get-enterprise-connection.mdx` | Use the getEnterpriseConnection() method to get an enterprise connection. |
| `update-enterprise-connection.mdx` | Use the updateEnterpriseConnection() method to update an enterprise connection. |

### reference/backend/instance/ (5 files)

| File | Description |
|------|-------------|
| `get-organization-settings.mdx` | Use the getOrganizationSettings() method to get the Organization-related settings of the current instance. |
| `get.mdx` | Use the get() method to get the given instance. |
| `update-organization-settings.mdx` | Use the updateOrganizationSettings() method to update the Organization-related settings of the current instanc |
| `update-restrictions.mdx` | Use the updateRestrictions() method to update the restriction settings of the current instance. |
| `update.mdx` | Use the update() method to update the current instance. |

### reference/backend/invitations/ (5 files)

| File | Description |
|------|-------------|
| `create-invitation-bulk.mdx` | Use the createInvitationBulk() method to create multiple invitations for the given email addresses, and send t |
| `create-invitation.mdx` | Use the createInvitation() method to create a new invitation for the given email address, and send the invitat |
| `delete-invitation.mdx` | Use the deleteInvitation() method to permanently delete an invitation and its stored invitation email. |
| `get-invitation-list.mdx` | Use the getInvitationList() method to get a list of non-revoked invitations for your application. |
| `revoke-invitation.mdx` | Use the revokeInvitation() method to revoke an invitation. |

### reference/backend/m2m-tokens/ (4 files)

| File | Description |
|------|-------------|
| `create-token.mdx` | Use the createToken() method to create a M2M token. |
| `list.mdx` | Use the list() method to get a list of M2M tokens for the given machine. |
| `revoke-token.mdx` | Use the revokeToken() method to revoke a M2M token. |
| `verify.mdx` | Use the verify() method to verify an M2M token. |

### reference/backend/machines/ (9 files)

| File | Description |
|------|-------------|
| `create-scope.mdx` | Use the createScope() method to create a machine scope. |
| `create.mdx` | Use the create() method to create a machine. |
| `delete-scope.mdx` | Use the deleteScope() method to delete a machine scope. |
| `delete.mdx` | Use the delete() method to delete a machine. |
| `get-secret-key.mdx` | Use the getSecretKey() method to get a machine secret key. |
| `get.mdx` | Use the get() method to get the given machine. |
| `list.mdx` | Use the list() method to get a list of machines for the instance. |
| `rotate-secret-key.mdx` | Use the rotateSecretKey() method to rotate a machine's secret key. |
| `update.mdx` | Use the update() method to update a machine. |

### reference/backend/oauth-applications/ (7 files)

| File | Description |
|------|-------------|
| `create.mdx` | Use the create() method to create an OAuth application. |
| `delete.mdx` | Use the delete() method to delete an OAuth application. |
| `get.mdx` | Use the get() method to get an OAuth application. |
| `list.mdx` | Use the list() method to get a list of OAuth applications for an instance. |
| `revoke-token.mdx` | Use the revokeToken() method to revoke an OAuth application token. |
| `rotate-secret.mdx` | Use the rotateSecret() method to rotate the OAuth application's client secret. |
| `update.mdx` | Use the update() method to update an OAuth application. |

### reference/backend/organization/ (24 files)

| File | Description |
|------|-------------|
| `create-organization-domain.mdx` | Use the createOrganizationDomain() method to create a new Verified Domain for a given Organization. |
| `create-organization-invitation-bulk.mdx` | Use the createOrganizationInvitationBulk() method to create multiple invitations for new users to join an Orga |
| `create-organization-invitation.mdx` | Use the createOrganizationInvitation() method to create an invitation for new users to join an Organization. |
| `create-organization-membership.mdx` | Use the createOrganizationMembership() method to create a membership to an Organization for a user directly (c |
| `create-organization.mdx` | Use the createOrganization() method to create an Organization. |
| `delete-organization-domain.mdx` | Use the deleteOrganizationDomain() method to delete a Verified Domain for a given Organization. |
| `delete-organization-logo.mdx` | Use the deleteOrganizationLogo() method to delete an Organization's logo. |
| `delete-organization-membership.mdx` | Use the deleteOrganizationMembership() method to remove a user from the specified Organization. |
| `delete-organization.mdx` | Use the deleteOrganization() method to delete an Organization. |
| `get-instance-organization-membership-list.mdx` | Use the getInstanceOrganizationMembershipList() method to get the list of Organization Memberships for a given |
| `get-organization-domain-list.mdx` | Use the getOrganizationDomainList() method to get the list of Verified Domains for a given Organization. |
| `get-organization-invitation-list.mdx` | Use the getOrganizationInvitationList() method to get a list of Organization invitations. |
| `get-organization-invitation.mdx` | Use the getOrganizationInvitation() method to get an Organization invitation. |
| `get-organization-list.mdx` | Use the getOrganizationList() method to get a list of Organizations. |
| `get-organization-membership-list.mdx` | Use the getOrganizationMembershipList() method to get a list of memberships for an Organization. |
| `get-organization.mdx` | Use the getOrganization() method to get a single Organization. |
| `replace-organization-metadata.mdx` | Use the replaceOrganizationMetadata() method to fully replace the metadata associated with the specified Organ |
| `revoke-organization-invitation.mdx` | Use the revokeOrganizationInvitation() method to revoke an Organization invitation from a user for a specified |
| `update-organization-domain.mdx` | Use the updateOrganizationDomain() method to update a Verified Domain for a given Organization. |
| `update-organization-logo.mdx` | Use the updateOrganizationLogo() method to update an Organization's logo. |
| `update-organization-membership-metadata.mdx` | Use the updateOrganizationMembershipMetadata() method to update the metadata associated with a user's Organiza |
| `update-organization-membership.mdx` | Use the updateOrganizationMembership() method to update a user's Organization membership. |
| `update-organization-metadata.mdx` | Use the updateOrganizationMetadata() method to update the metadata associated with a given Organization. |
| `update-organization.mdx` | Use the updateOrganization() method to update an Organization's name. |

### reference/backend/phone-numbers/ (4 files)

| File | Description |
|------|-------------|
| `create-phone-number.mdx` | Use the createPhoneNumber() method to create a phone number for the specified user. |
| `delete-phone-number.mdx` | Use the deletePhoneNumber() method to delete a phone number. |
| `get-phone-number.mdx` | Use the getPhoneNumber() method to get a phone number by its ID. |
| `update-phone-number.mdx` | Use the updatePhoneNumber() method to update a phone number. |

### reference/backend/redirect-urls/ (4 files)

| File | Description |
|------|-------------|
| `create-redirect-url.mdx` | Use the createRedirectUrl() method to create a redirect URL. |
| `delete-redirect-url.mdx` | Use the deleteRedirectUrl() method to delete a redirect URL. |
| `get-redirect-url-list.mdx` | Use the getRedirectUrlList() method to get a list of whitelisted redirect URLs for your instance. |
| `get-redirect-url.mdx` | Use the getRedirectUrl() method to get a redirect URL by its ID. |

### reference/backend/saml-connections/ (5 files)

| File | Description |
|------|-------------|
| `create-saml-connection.mdx` | Use the createSamlConnection() method to create a SAML connection. |
| `delete-saml-connection.mdx` | Use the deleteSamlConnection() method to delete a SAML connection. |
| `get-saml-connection-list.mdx` | Use the getSamlConnectionList() method to get the list of SAML connections for an instance. |
| `get-saml-connection.mdx` | Use the getSamlConnection() method to get a SAML connection. |
| `update-saml-connection.mdx` | Use the updateSamlConnection() method to update a SAML connection. |

### reference/backend/sessions/ (5 files)

| File | Description |
|------|-------------|
| `get-session-list.mdx` | Use the getSessionList() method to get a list of sessions. |
| `get-session.mdx` | Use the getSession() method to get a single session by its ID. |
| `get-token.mdx` | Use the getToken() method to get a token for a JWT template that is defined in the Clerk Dashboard. |
| `revoke-session.mdx` | Use the revokeSession() method to revoke a session given its ID. |
| `verify-session.mdx` | Use the verifySession() method to verify whether a session with a given ID corresponds to the provided session |

### reference/backend/sign-in-tokens/ (2 files)

| File | Description |
|------|-------------|
| `create-sign-in-token.mdx` | Use the createSignInToken() method to create a new sign-in token for a given user. |
| `revoke-sign-in-token.mdx` | Use the revokeSignInToken() method to revoke a pending sign-in token. |

### reference/backend/testing-tokens/ (1 files)

| File | Description |
|------|-------------|
| `create-testing-token.mdx` | Use the createTestingToken() method to create a Testing Token for the instance. |

### reference/backend/types/ (48 files)

| File | Description |
|------|-------------|
| `auth-object.mdx` | The Auth object contains information about the current user's session. |
| `backend-agent-task.mdx` | The Backend AgentTask object represents an Agent Task. |
| `backend-allowlist-identifier.mdx` | The Backend AllowlistIdentifier object holds information about a AllowlistIdentifier of your application. Howe |
| `backend-api-key.mdx` | The Backend APIKey object holds information about an API key of your application. |
| `backend-client.mdx` | The Backend Client object holds information about the authenticated sessions in the current device. However, t |
| `backend-email-address.mdx` | The Backend EmailAddress object is a model around an email address. |
| `backend-enterprise-account-connection.mdx` | The Backend EnterpriseAccountConnection object represents an enterprise SSO connection associated with an ente |
| `backend-enterprise-account.mdx` | The Backend EnterpriseAccount object represents an identification obtained via enterprise SSO (SAML or OIDC). |
| `backend-enterprise-connection-custom-attribute.mdx` | The Backend EnterpriseConnectionCustomAttribute object represents a custom attribute mapping included in an En |
| `backend-enterprise-connection-oauth-config.mdx` | The Backend EnterpriseConnectionOauthConfig object represents the OAuth configuration data included in a Backe |
| `backend-enterprise-connection-saml-connection-login-hint.mdx` | The Backend EnterpriseConnectionSamlConnectionLoginHint object represents the login hint configuration include |
| `backend-enterprise-connection-saml-connection.mdx` | The Backend EnterpriseConnectionSamlConnection object holds information about a SAML enterprise connection for |
| `backend-enterprise-connection.mdx` | The Backend EnterpriseConnection object holds information about an enterprise connection (SAML or OAuth) for a |
| `backend-external-account.mdx` | The Backend ExternalAccount object is a model around an identification obtained by an external provider (e.g., |
| `backend-identification-link.mdx` | Contains information about any identifications that might be linked to the email address. |
| `backend-instance-restrictions.mdx` | The Backend InstanceRestrictions object holds information about the restriction settings of the current instan |
| `backend-instance.mdx` | The Backend Instance object holds information about the current instance. |
| `backend-invitation.mdx` | The Backend Invitation object represents an invitation to join your application. |
| `backend-m2m-token.mdx` | The Backend M2MToken object holds information about a machine-to-machine token. |
| `backend-machine-scope.mdx` | The Backend MachineScope object holds information about a Machine Scope. |
| `backend-machine.mdx` | The Backend Machine object holds information about a Machine. |
| `backend-oauth-access-token.mdx` | The Backend OAuthAccessToken object describes an OAuth Access Token. |
| `backend-oauth-application.mdx` | The Backend OAuthApplication object describes an OAuth Application. |
| `backend-organization-domain.mdx` | The Backend OrganizationDomain object is the model around an Organization domain. |
| `backend-organization-invitation.mdx` | The Backend OrganizationInvitation object is the model around an Organization invitation. |
| `backend-organization-membership.mdx` | The Backend OrganizationMembership object is the model around an Organization membership entity and describes  |
| `backend-organization-settings.mdx` | The Backend OrganizationSettings object holds information about the Organization-related settings of the curre |
| `backend-organization.mdx` | The Backend Organization object holds information about an Organization, as well as methods for managing it. H |
| `backend-phone-number.mdx` | The Backend PhoneNumber object describes a phone number. |
| `backend-redirect-url.mdx` | The Backend RedirectUrl object represents a redirect URL in your application. This object is used in the Backe |
| `backend-saml-connection-idp-certificate.mdx` | The Backend SamlConnectionIdpCertificate object represents an Identity Provider (IdP) signing certificate trus |
| `backend-saml-connection.mdx` | The Backend SamlConnection object holds information about a SAML connection for an Organization. |
| `backend-session-activity.mdx` | The Backend SessionActivity object models the activity of a user session, capturing details such as the device |
| `backend-session.mdx` | The Backend Session object holds information about a Session of your application. However, the Backend Session |
| `backend-sign-in-token.mdx` | The Backend SignInToken object holds information about a sign-in token. |
| `backend-testing-token.mdx` | The Backend TestingToken object holds information about a Testing Token. |
| `backend-user.mdx` | The Backend User object holds information about a user of your application. However, the Backend User object i |
| `backend-verification.mdx` | The Backend Verification object describes the state of the verification process of a sign-in or sign-up attemp |
| `backend-waitlist-entry.mdx` | The Backend WaitlistEntry object is the model around a waitlist entry. |
| `backend-web3-wallet.mdx` | The Backend Web3Wallet object describes a Web3 wallet address. |
| `billing-plan.mdx` | The Backend BillingPlan object holds information about a Plan of your application. |
| `billing-subscription-item-status.mdx` | The Backend BillingSubscriptionItemStatus type represents the possible lifecycle states of a BillingSubscripti |
| `billing-subscription-item.mdx` | The Backend BillingSubscriptionItem object holds information about a Subscription Item of your application. |
| `billing-subscription.mdx` | The Backend BillingSubscription object holds information about a Subscription of your application. |
| `deleted-object.mdx` | The Backend DeletedObject object represents an item that has been deleted from the database. |
| `domain.mdx` | The Backend Domain object represents a domain that is managed by the instance. |
| `feature.mdx` | The Feature type represents a Feature that a Plan can offer. |
| `paginated-resource-response.mdx` | An interface that describes the response of a method that returns a paginated list of resources. |

### reference/backend/user/ (28 files)

| File | Description |
|------|-------------|
| `ban-user.mdx` | Use the banUser() method to mark a given user as banned. |
| `create-user.mdx` | Use the createUser() method to create a user. |
| `delete-user-backup-codes.mdx` | Use the deleteUserBackupCodes() method to delete all of a user's backup codes. |
| `delete-user-external-account.mdx` | Use the deleteUserExternalAccount() method to delete a user's external account by ID. |
| `delete-user-passkey.mdx` | Use the deleteUserPasskey() method to delete the passkey identification for a given user. |
| `delete-user-profile-image.mdx` | Use the deleteUserProfileImage() method to delete a user's profile image. |
| `delete-user-totp.mdx` | Use the deleteUserTOTP() method to delete all of a user's TOTPs. |
| `delete-user-web3-wallet.mdx` | Use the deleteUserWeb3Wallet() method to delete the Web3 wallet identification for a given user. |
| `delete-user.mdx` | Use the deleteUser() method to delete a user. |
| `disable-user-mfa.mdx` | Use the disableUserMFA() method to disable all of a user's MFA methods at once. |
| `get-count.mdx` | Use the getCount() method to get the total number of users. |
| `get-organization-invitation-list.mdx` | Use the getOrganizationInvitationList() method to get a list of Organization invitations for a given user. |
| `get-organization-membership-list.mdx` | Use the getOrganizationMembershipList() method to get a list of Organization memberships for a given user. |
| `get-user-list.mdx` | Use the getUserList() method to get a list of users. |
| `get-user-oauth-access-token.mdx` | Use the getUserOauthAccessToken() method to get the corresponding OAuth access token for a user. |
| `get-user.mdx` | Use the getUser() method to get a single user by their ID. |
| `lock-user.mdx` | Use the lockUser() method to mark a user as locked, which means they are not allowed to sign in again until th |
| `remove-password.mdx` | Use the removePassword() method to remove a user's password credential. |
| `replace-user-metadata.mdx` | Use the replaceUserMetadata() method to fully replace the metadata associated with the specified user. |
| `set-password-compromised.mdx` | Use the setPasswordCompromised() method to set a user's password as compromised. |
| `unban-user.mdx` | Use the unbanUser() method to remove the ban mark from a user. |
| `unlock-user.mdx` | Use the unlockUser() method to remove a sign-in lock from a user. |
| `unset-password-compromised.mdx` | Use the unsetPasswordCompromised() method to unset a user's password as compromised. |
| `update-user-metadata.mdx` | Use the updateUserMetadata() method to update the metadata associated with the specified user. |
| `update-user-profile-image.mdx` | Use the updateUserProfileImage() method to update a user's profile image. |
| `update-user.mdx` | Use the updateUser() method to update a user. |
| `verify-password.mdx` | Use the verifyPassword() method to check that the user's password matches the supplied input. Useful for custo |
| `verify-totp.mdx` | Use the verifyTOTP() method to verify a TOTP or backup code for a user. |

### reference/backend/waitlist-entries/ (6 files)

| File | Description |
|------|-------------|
| `create-bulk.mdx` | Use the createBulk() method to bulk create waitlist entries for the given email addresses. |
| `create.mdx` | Use the create() method to create a waitlist entry for the given email address. |
| `delete.mdx` | Use the delete() method to delete a pending waitlist entry. |
| `invite.mdx` | Use the invite() method to invite a waitlist entry. |
| `list.mdx` | Use the list() method to get a list of waitlist entries. |
| `reject.mdx` | Use the reject() method to reject a waitlist entry. |

### reference/chrome-extension/ (2 files)

| File | Description |
|------|-------------|
| `create-clerk-client.mdx` | createClerkClient() allows Chrome Extension developers to initialize Clerk in popups, side panels, and backgro |
| `overview.mdx` | The Clerk Chrome Extension SDK gives you access to prebuilt components, React hooks, and helpers to make user  |

### reference/components/ (6 files)

| File | Description |
|------|-------------|
| `api-keys.mdx` | Clerk's <APIKeys /> component renders a UI to manage API keys. |
| `changelog.mdx` | Keep track of the changes to Clerk's components. |
| `clerk-provider.mdx` | The <ClerkProvider> component provides session and user context to Clerk's hooks and components. |
| `overview.expo.mdx` | A list of Clerk's comprehensive suite of components designed to seamlessly integrate authentication and multi- |
| `overview.mdx` | A list of Clerk's comprehensive suite of components designed to seamlessly integrate authentication and multi- |
| `versioning.mdx` | Learn how Clerk versions its components, and how to specify a specific version if necessary. |

### reference/components/authentication/ (8 files)

| File | Description |
|------|-------------|
| `google-one-tap.mdx` | Clerk's <GoogleOneTap /> component renders a UI for authenticating users with Google's One Tap API. |
| `oauth-consent.mdx` | Clerk's <OAuthConsent /> component renders an OAuth consent screen for authenticated users. |
| `sign-in.mdx` | Clerk's <SignIn /> component renders a UI for signing in users. |
| `sign-up.mdx` | Clerk's <SignUp /> component renders a UI for signing up users. |
| `task-choose-organization.mdx` | Clerk's <TaskSelectComponent /> component renders a UI for resolving the choose-organization task. |
| `task-reset-password.mdx` | Clerk's <TaskResetPassword /> component renders a UI for resolving the reset-password task. |
| `task-setup-mfa.mdx` | Clerk's <TaskSetupMFA /> component renders a UI for resolving the setup-mfa task. |
| `waitlist.mdx` | The <Waitlist /> component renders a waitlist form that allows users to join for early access to your applicat |

### reference/components/billing/ (4 files)

| File | Description |
|------|-------------|
| `checkout-button.mdx` | Clerk's <CheckoutButton /> component renders a button that opens the checkout drawer for Subscription Plans. |
| `plan-details-button.mdx` | Clerk's <PlanDetailsButton /> component renders a button that opens the Plan details drawer. |
| `pricing-table.mdx` | Clerk's <PricingTable /> component displays a table of Plans and Features that users can subscribe to. |
| `subscription-details-button.mdx` | Clerk's <SubscriptionDetailsButton /> component renders a button that opens the Subscription details drawer. |

### reference/components/control/ (12 files)

| File | Description |
|------|-------------|
| `authenticate-with-redirect-callback.mdx` | Clerk's <AuthenticateWithRedirectCallback /> component is used to implement custom OAuth flows. It handles the |
| `clerk-degraded.mdx` | The <ClerkDegraded> component indicates that Clerk is partially operational. |
| `clerk-failed.mdx` | The <ClerkFailed> component indicates that the Clerk object has failed to load. |
| `clerk-loaded.mdx` | The <ClerkLoaded> component guarantees that the Clerk object has loaded and will be available under window.Cle |
| `clerk-loading.mdx` | The <ClerkLoading> renders its children while Clerk is loading, and is helpful for showing a custom loading st |
| `redirect-to-create-organization.mdx` | The <RedirectToCreateOrganization /> component will navigate to the create Organization flow which has been co |
| `redirect-to-organization-profile.mdx` | The <RedirectToOrganizationProfile /> component will navigate to the Organization profile URL which has been c |
| `redirect-to-sign-in.mdx` | The <RedirectToSignIn /> component will navigate to the sign in URL which has been configured in your applicat |
| `redirect-to-sign-up.mdx` | The <RedirectToSignUp /> component will navigate to the sign up URL which has been configured in your applicat |
| `redirect-to-tasks.mdx` | The <RedirectToTasks /> component will navigate to the tasks flow which has been configured in your applicatio |
| `redirect-to-user-profile.mdx` | The <RedirectToUserProfile /> component will navigate to the user profile URL which has been configured in you |
| `show.mdx` | The Show component protects content or even entire routes based on authentication, and optionally, authorizati |

### reference/components/organization/ (5 files)

| File | Description |
|------|-------------|
| `create-organization.mdx` | Clerk's <CreateOrganization /> component is used to render an Organization creation UI that allows users to cr |
| `invite-members-button.mdx` | Clerk's <InviteMembersButton /> component is used to render a button that opens a modal for inviting new membe |
| `organization-list.mdx` | Clerk's <OrganizationList /> component is used to display Organization related memberships, invitations, and s |
| `organization-profile.mdx` | Clerk's <OrganizationProfile /> component is used to render a beautiful, full-featured Organization management |
| `organization-switcher.mdx` | Clerk's <OrganizationSwitcher /> component is used to enable the ability to switch between available Organizat |

### reference/components/unstyled/ (4 files)

| File | Description |
|------|-------------|
| `sign-in-button.mdx` | The <SignInButton> component is a button that links to the sign-in page or displays the sign-in modal. |
| `sign-in-with-metamask.mdx` | The <SignInWithMetamaskButton> component is used to complete a one-click, cryptographically-secure sign-in flo |
| `sign-out-button.mdx` | The <SignOutButton> component is a button that signs a user out. |
| `sign-up-button.mdx` | The <SignUpButton> component is a button that links to the sign-up page or displays the sign-up modal. |

### reference/components/user/ (3 files)

| File | Description |
|------|-------------|
| `user-avatar.mdx` | Clerk's <UserAvatar /> component is used to render the familiar user avatar on its own. |
| `user-button.mdx` | Clerk's <UserButton /> component is used to render the familiar user button UI popularized by Google. |
| `user-profile.mdx` | Clerk's <UserProfile /> component is used to render a beautiful, full-featured account management UI that allo |

### reference/components/utilities/ (1 files)

| File | Description |
|------|-------------|
| `portal-provider.mdx` | Clerk's <UNSAFE_PortalProvider> component is used to render Clerk floating UI elements inside custom container |

### reference/composables/ (8 files)

| File | Description |
|------|-------------|
| `use-auth.mdx` | Access and manage authentication state in your Vue application with Clerk's useAuth() composable. |
| `use-clerk.mdx` | Access and manage the Clerk instance in your Vue application with Clerk's useClerk() composable. |
| `use-organization.mdx` | Access and manage the currently Active Organization in your Vue application with Clerk's useOrganization() com |
| `use-session-list.mdx` | Access and manage a list of sessions registered on the client device in your Vue application with Clerk's useS |
| `use-session.mdx` | Access and manage the current user's session in your Vue application with Clerk's useSession() composable. |
| `use-sign-in.mdx` | Access and manage sign-in state in your Vue application with Clerk's useSignIn() composable. |
| `use-sign-up.mdx` | Access and manage sign-up state in your Vue application with Clerk's useSignUp() composable. |
| `use-user.mdx` | Access and manage the current user's data in your Vue application with Clerk's useUser() composable. |

### reference/electron/ (5 files)

| File | Description |
|------|-------------|
| `create-clerk-bridge.mdx` | createClerkBridge() sets up Clerk in the Electron main process, owning IPC handlers, token persistence, and OA |
| `expose-clerk-bridge.mdx` | exposeClerkBridge() publishes the Clerk bridge from the preload script to the renderer. |
| `overview.mdx` | The Clerk Electron SDK adds authentication to Electron apps with the same prebuilt components and React hooks  |
| `passkeys.mdx` | Learn how passkeys work in Electron apps with Clerk, in the renderer and natively on macOS and Windows. |
| `storage.mdx` | storage() creates the default encrypted token storage adapter for the Clerk Electron SDK, backed by electron-s |

### reference/expo/ (2 files)

| File | Description |
|------|-------------|
| `overview.mdx` | The Clerk Expo SDK gives you access to prebuilt components, React hooks, and helpers to make user authenticati |
| `passkeys.mdx` | Learn how to configure passkeys for your Expo application. |

### reference/expo/native-components/ (5 files)

| File | Description |
|------|-------------|
| `auth-view.mdx` | A native authentication component that provides complete sign-in and sign-up flows for iOS and Android. |
| `overview.mdx` | Pre-built native authentication and user management components for iOS and Android. |
| `theming.mdx` | Customize the appearance of Clerk's native iOS and Android components with a JSON theme file. |
| `user-button.mdx` | A native avatar button component that displays the user's profile image and opens a profile management interfa |
| `user-profile-view.mdx` | A native profile management component providing complete account settings for iOS and Android. |

### reference/expo/native-hooks/ (10 files)

| File | Description |
|------|-------------|
| `use-app-version-support.mdx` | Clerk's useAppVersionSupport() hook reports whether your app's version meets the minimum set in the Clerk Dash |
| `use-auth-view-state.mdx` | Clerk's useAuthViewState() hook reports when a native authentication flow and Clerk-owned post-authentication  |
| `use-biometric-credentials.mdx` | Clerk's useBiometricCredentials() hook provides biometric credential enrollment, sign-in, and session reverifi |
| `use-hosted-auth.mdx` | Clerk's useHostedAuth() hook opens Account Portal and activates the session created there. |
| `use-local-credentials.mdx` | Clerk's useLocalCredentials() hook enables you to store and access a user's password credentials on their devi |
| `use-oauth.mdx` | Clerk's useOAuth() hook is used to create a new OAuth flow. |
| `use-sign-in-with-apple.mdx` | Clerk's useSignInWithApple() hook provides native Sign in with Apple functionality for iOS devices. |
| `use-sign-in-with-google.mdx` | Clerk's useSignInWithGoogle() hook provides native Sign in with Google functionality for iOS and Android devic |
| `use-sso.mdx` | Clerk's useSSO() hook is used to create a new SSO flow. |
| `use-user-profile-custom-page-navigation.mdx` | Clerk's useUserProfileCustomPageNavigation() hook controls navigation from custom Expo native user profile pag |

### reference/express/ (4 files)

| File | Description |
|------|-------------|
| `clerk-middleware.mdx` | The clerkMiddleware() function checks the request's cookies and headers for a session JWT and if found, attach |
| `get-auth.mdx` | The getAuth() helper retrieves authentication state from the request object. |
| `overview.mdx` | The Clerk Express SDK provides a powerful set of tools and utilities to seamlessly integrate authentication, u |
| `require-auth.mdx` | The requireAuth() middleware protects your routes by redirecting unauthenticated users to the homepage. |

### reference/fastify/ (3 files)

| File | Description |
|------|-------------|
| `clerk-plugin.mdx` | The clerkPlugin() function is a Fastify plugin that integrates Clerk's authentication into your application. |
| `get-auth.mdx` | The getAuth() helper retrieves the current user's authentication state from the request object. |
| `overview.mdx` | The Clerk Fastify SDK provides a powerful set of tools and utilities to seamlessly integrate authentication, u |

### reference/go/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | The Clerk Go SDK provides a powerful set of tools and utilities to seamlessly integrate authentication, user m |

### reference/hooks/ (22 files)

| File | Description |
|------|-------------|
| `overview.mdx` | A list of Clerk's comprehensive suite of hooks for managing authentication, sessions, sign-in and sign-up flow |
| `use-api-keys.mdx` | Access and manage API keys in your React application with Clerk's useAPIKeys() hook. |
| `use-auth.mdx` | Access and manage authentication state in your application with Clerk's useAuth() hook. |
| `use-checkout.mdx` | Clerk's useCheckout() hook provides state and methods to manage a Subscription checkout flow. |
| `use-clerk.mdx` | Access and manage the Clerk object in your React application with Clerk's useClerk() hook. |
| `use-oauth-consent.mdx` | Load OAuth consent metadata for an authenticated user with Clerk's useOAuthConsent() hook. |
| `use-organization-creation-defaults.mdx` | Retrieve Organization creation defaults for the current user in your React application with Clerk's useOrganiz |
| `use-organization-list.mdx` | Access and manage the current user's Organization list in your React application with Clerk's useOrganizationL |
| `use-organization.mdx` | Access and manage the currently active Organization in your React application with Clerk's useOrganization() h |
| `use-payment-attempts.mdx` | Access and manage payment attempts in your React application with Clerk's usePaymentAttempts() hook. |
| `use-payment-element.mdx` | Clerk's usePaymentElement() hook provides methods and state for interacting with a payment form. |
| `use-payment-methods.mdx` | Access and manage payment methods in your React application with Clerk's usePaymentMethods() hook. |
| `use-plans.mdx` | Access Plans in your React application with Clerk's usePlans() hook. |
| `use-reverification.mdx` | Clerk's useReverification() hook enhances a fetcher function to handle a session's reverification flow. |
| `use-session-list.mdx` | Access and manage the current user's session list in your React application with Clerk's useSessionList() hook |
| `use-session.mdx` | Access and manage the current user's session in your React application with Clerk's useSession() hook. |
| `use-sign-in.mdx` | Access and manage the current user's sign-in state in your React application with Clerk's useSignIn() hook. |
| `use-sign-up.mdx` | Access and manage the current user's sign-up state in your React application with Clerk's useSignUp() hook. |
| `use-statements.mdx` | Access and manage statements in your React application with Clerk's useStatements() hook. |
| `use-subscription.mdx` | Access Subscription information in your React application with Clerk's useSubscription() hook. |
| `use-user.mdx` | Access and manage the current user's data in your React application with Clerk's useUser() hook. |
| `use-waitlist.mdx` | Access and manage the waitlist state in your React application with Clerk's useWaitlist() hook. |

### reference/hooks/legacy/ (2 files)

| File | Description |
|------|-------------|
| `use-sign-in.mdx` | Access and manage the current user's sign-in state in your React application with Clerk's useSignIn() hook. |
| `use-sign-up.mdx` | Access and manage the current user's sign-up state in your React application with Clerk's useSignUp() hook. |

### reference/ios/ (2 files)

| File | Description |
|------|-------------|
| `swiftui-previews.mdx` | Use Clerk.preview() and ClerkEnvironment.json to render iOS previews with realistic Clerk configuration. |
| `watch-connectivity.mdx` | Sync Clerk auth state between an iOS app and its companion watchOS app. |

### reference/javascript/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | The Clerk JavaScript SDK is Clerk's foundational library for building user management and authentication. |

### reference/native-mobile/ (17 files)

| File | Description |
|------|-------------|
| `auth.ios.mdx` | Learn how to handle sign-in, sign-up, MFA, password reset, and session management with the Clerk iOS SDK. |
| `auth.mdx` | Learn how to handle sign-in, sign-up, MFA, password reset, and session management with the Clerk Android SDK. |
| `billing.ios.mdx` | Read Billing Plans, Subscriptions, statements, payment attempts, payment methods, and credits with the Clerk i |
| `billing.mdx` | Read Billing Plans, Subscriptions, statements, payment attempts, payment methods, and credits with the Clerk A |
| `clerk.ios.mdx` | Use Clerk in your iOS app with shared access and SwiftUI integration. |
| `clerk.mdx` | Use Clerk in your Android app with global access and reactive state flows. |
| `configuration.ios.mdx` | Configure the Clerk iOS SDK with your publishable key and options. |
| `configuration.mdx` | Configure the Clerk Android SDK with your publishable key. |
| `installation.ios.mdx` | Install the Clerk iOS SDK with Swift Package Manager. |
| `installation.mdx` | Install the Clerk Android SDK with Gradle. |
| `organizations.ios.mdx` | Manage Organizations, memberships, invitations, requests, suggestions, and domains with the Clerk iOS SDK. |
| `organizations.mdx` | Manage Organizations, memberships, invitations, requests, suggestions, and domains with the Clerk Android SDK. |
| `overview.mdx` | Add native authentication and user management to your app. |
| `shared-session-sync.ios.mdx` | Share one Clerk session across trusted iOS apps and extensions on the same device. |
| `shared-session-sync.mdx` | Keep Clerk sessions synchronized across trusted Android apps on the same device. |
| `user.ios.mdx` | Manage the signed-in user with the Clerk iOS SDK. |
| `user.mdx` | Manage the signed-in user with the Clerk Android SDK. |

### reference/native-mobile/integrations/ (1 files)

| File | Description |
|------|-------------|
| `convex.mdx` | Learn how to integrate Clerk with Convex in your native app. |

### reference/nextjs/ (3 files)

| File | Description |
|------|-------------|
| `clerk-middleware.mdx` | The clerkMiddleware() helper integrates Clerk authentication into your Next.js application through Middleware. |
| `eslint-plugin.mdx` | Learn how to use Clerk's ESLint plugin to find unprotected Next.js resources. |
| `overview.mdx` | The Clerk Next.js SDK gives you access to prebuilt components, React hooks, and helpers to make user authentic |

### reference/nextjs/app-router/ (4 files)

| File | Description |
|------|-------------|
| `auth.mdx` | Access minimal authentication data for managing sessions and data fetching. |
| `current-user.mdx` | Use the currentUser() helper to access information about your user inside of your Server Components, Route Han |
| `route-handlers.mdx` | Learn how to use Clerk with your Route Handlers. |
| `server-actions.mdx` | Learn how to use Clerk with Server Actions. |

### reference/nextjs/errors/ (4 files)

| File | Description |
|------|-------------|
| `auth-was-called.mdx` | Learn how to handle auth() was called but Clerk can't detect usage of clerkMiddleware() when getting 404 error |
| `protect-is-not-available-in-clerk-nextjs.mdx` | Learn why Protect was removed from @clerk/nextjs in Core 3 and how to replace it with the Show component. |
| `signedin-is-not-available-in-clerk-nextjs.mdx` | Learn why SignedIn was removed from @clerk/nextjs in Core 3 and how to replace it with the Show component. |
| `signedout-is-not-available-in-clerk-nextjs.mdx` | Learn why SignedOut was removed from @clerk/nextjs in Core 3 and how to replace it with the Show component. |

### reference/nextjs/pages-router/ (2 files)

| File | Description |
|------|-------------|
| `build-clerk-props.mdx` | Clerk uses buildClerkProps to inform the client-side helpers of the authentication state of the user. This fun |
| `get-auth.mdx` | The getAuth() helper retrieves authentication state from the request object. |

### reference/nuxt/ (4 files)

| File | Description |
|------|-------------|
| `clerk-middleware.mdx` | The clerkMiddleware() helper integrates Clerk authentication into your Nuxt application through server middlew |
| `integration.mdx` | The @clerk/nuxt module provides session and user context to Clerk's composables and components. |
| `overview.mdx` | The Clerk Nuxt SDK gives you access to prebuilt components, composables, and helpers to make user authenticati |
| `update-clerk-options.mdx` | The updateClerkOptions() function allows you to update Clerk's options at runtime. |

### reference/objects/ (12 files)

| File | Description |
|------|-------------|
| `api-keys.mdx` | The APIKeys object provides methods for creating, listing, and revoking API keys that allow users to grant thi |
| `billing.mdx` | The Billing object provides methods for managing billing for a user or Organization. |
| `clerk.mdx` | The Clerk object contains a number of methods and properties for interacting with the Clerk API. |
| `client.mdx` | The Client object keeps track of the authenticated sessions in the current device. The device can be a browser |
| `organization.mdx` | The Organization object holds information about an Organization, as well as methods for managing it. |
| `overview.mdx` | Learn about the key objects that power Clerk's SDKs, like the Clerk, User, and Session objects. |
| `session.mdx` | The Session object is an abstraction over an HTTP session. It models the period of information exchange betwee |
| `sign-in-future.mdx` | The SignInFuture object holds the state of the current sign-in and provides helper methods to navigate and com |
| `sign-in.mdx` | The SignIn object holds all the state of the current sign in and provides helper methods to navigate and compl |
| `sign-up-future.mdx` | The SignUpFuture object holds the state of the current sign-up and provides helper methods to navigate and com |
| `sign-up.mdx` | The SignUp object holds the state of the current sign-up and provides helper methods to navigate and complete  |
| `user.mdx` | The User object holds all the information for a user of your application and provides a set of methods to mana |

### reference/objects/_partials/ (1 files)

| File | Description |
|------|-------------|
| `authenticate-with-popup-params.mdx` |  |

### reference/react/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | The Clerk React SDK gives you access to prebuilt components, React hooks, and helpers to make user authenticat |

### reference/react-router/ (4 files)

| File | Description |
|------|-------------|
| `clerk-middleware.mdx` | The clerkMiddleware() function allows you to protect your React Router application using middleware. |
| `get-auth.mdx` | Access and manage the current user's authentication state in your React application with Clerk's getAuth() hel |
| `overview.mdx` | The Clerk React Router SDK gives you access to prebuilt components, React hooks, and helpers to make user auth |
| `root-auth-loader.mdx` | The rootAuthLoader() function makes Clerk authentication state available to React Router routes. |

### reference/ruby/ (6 files)

| File | Description |
|------|-------------|
| `overview.mdx` | The Clerk Ruby SDK provides a range of backend utilities to simplify user authentication and management in you |
| `rack.mdx` | The Clerk Ruby SDK provides a Rack middleware to integrate Clerk into your Rack-based application. |
| `rails.mdx` | The Clerk Ruby SDK provides a Rack middleware and a gem to integrate Clerk into your Rails app. |
| `sinatra.mdx` | The Clerk Ruby SDK provides a Sinatra extension to integrate Clerk into your Sinatra app. |
| `v4-upgrade-guide.mdx` | Learn how to upgrade your application to use Clerk Ruby SDK v4. |
| `v5-upgrade-guide.mdx` | Learn how to upgrade your application to use Clerk Ruby SDK v5. |

### reference/tanstack-react-start/ (3 files)

| File | Description |
|------|-------------|
| `auth.mdx` | The auth() helper retrieves the authentication state allowing you to protect your API routes or gather relevan |
| `clerk-middleware.mdx` | The clerkMiddleware() helper integrates Clerk authentication into your TanStack Start application through midd |
| `overview.mdx` | The Clerk TanStack React Start SDK gives you access to prebuilt components, React hooks, and helpers to make u |

### reference/types/ (95 files)

| File | Description |
|------|-------------|
| `agent-task.mdx` | The AgentTask interface represents an Agent Task. |
| `api-key-resource.mdx` | An interface that describes an API key used to authenticate requests to your application's API endpoints. |
| `backup-code-resource.mdx` | An interface that represents a backup code. |
| `billing-applied-discount.mdx` | The BillingAppliedDiscount type represents a catalog discount applied to a checkout or payment. |
| `billing-checkout-resource.mdx` | The BillingCheckoutResource type represents information about a checkout session. |
| `billing-checkout-totals.mdx` | The BillingCheckoutTotals type represents the total costs, taxes, and other pricing details for a checkout ses |
| `billing-credit-balance-resource.mdx` | An interface that represents a credit balance for the current payer. |
| `billing-credit-ledger-resource.mdx` | An interface that represents a credit ledger entry for the current payer or given Organization. |
| `billing-credits.mdx` | The BillingCredits type represents the credits applied to a checkout or payment. |
| `billing-discount-redemption.mdx` | The BillingDiscountRedemption type represents a discount applied to a subscription item. |
| `billing-discounts.mdx` | The BillingDiscounts type represents discounts applied to a checkout or payment. |
| `billing-initialized-payment-method-resource.mdx` | The BillingInitializedPaymentMethodResource type represents a payment method that has been initialized for a c |
| `billing-money-amount.mdx` | The BillingMoneyAmount type represents a monetary value with currency information. |
| `billing-payer-credit.mdx` | The BillingPayerCredit type represents the available and applied credit for a payer. |
| `billing-payer-resource.mdx` | The BillingPayerResource class represents a payer associated with a Billing Subscription. |
| `billing-payment-method-resource.mdx` | The BillingPaymentMethodResource type represents a payment source for a checkout session. |
| `billing-payment-resource.mdx` | The BillingPaymentResource type represents a payment attempt for a user or Organization. |
| `billing-payment-totals.mdx` | The BillingPaymentTotals type represents the cost breakdown for a payment. |
| `billing-per-unit-total-tier.mdx` | The BillingPerUnitTotalTier type represents a tiered pricing structure for billing based on unit usage. |
| `billing-per-unit-total.mdx` | The BillingPerUnitTotal type represents the total cost for a billing period based on unit usage. |
| `billing-period-totals.mdx` | The BillingPeriodTotals type represents the total costs, taxes, and other pricing details for a billing period |
| `billing-plan-price.mdx` | The BillingPlanPrice type represents a specific possible price for a given Clerk Billing Plan. |
| `billing-plan-resource.mdx` | The BillingPlanResource type represents a Subscription Plan with its details. |
| `billing-plan-unit-price-tier.mdx` | The BillingPlanUnitPriceTier type represents a single pricing tier for a unit type on a plan. |
| `billing-plan-unit-price.mdx` | The BillingPlanUnitPrice type represents unit pricing for a specific unit type (for example, seats) on a plan. |
| `billing-proration-credit-detail.mdx` | The BillingProrationCreditDetail type represents credit for the unused portion of a billing cycle. |
| `billing-proration-discount.mdx` | The BillingProrationDiscount type represents a prorated discount applied during a billing cycle. |
| `billing-statement-group.mdx` | The BillingStatementGroup type represents a group of payment items within a statement. |
| `billing-statement-resource.mdx` | The BillingStatementResource type represents a billing statement for a user or Organization. |
| `billing-statement-totals.mdx` | The BillingStatementTotals type represents the total costs, taxes, and other pricing details for a statement. |
| `billing-subscription-item-next-payment.mdx` | The BillingSubscriptionItemNextPayment type represents the upcoming payment for a subscription item. |
| `billing-subscription-item-resource.mdx` | The BillingSubscriptionItemResource type represents an item in a Subscription. |
| `billing-subscription-item-seats.mdx` | The BillingSubscriptionItemSeats type represents seat entitlements attached to a subscription item. |
| `billing-subscription-next-payment.mdx` | The BillingSubscriptionNextPayment type represents the upcoming payment for a subscription. |
| `billing-subscription-resource.mdx` | The BillingSubscriptionResource type represents a Subscription to a Plan. |
| `billing-totals.mdx` | The BillingTotals type represents the total costs and pricing details for a subscription, including taxes, cre |
| `clerk-api-error.mdx` | An interface that represents an error returned by the Clerk API. |
| `clerk-api-response-error.mdx` | An interface that represents an error returned by the Clerk API. |
| `clerk-error.mdx` | Type used for all errors generated by the Clerk SDK. |
| `clerk-paginated-response.mdx` | An interface that describes the response of a method that returns a paginated list of resources. |
| `custom-menu-item.mdx` | An interface that provides the ability to add custom menu item to the <UserButton /> component. |
| `custom-page.mdx` | An interface that provides the ability to add custom pages to the <UserProfile /> or <OrganizationProfile /> c |
| `deleted-object-resource.mdx` | The DeletedObjectResource class represents an item that has been deleted from the database. |
| `email-address.mdx` | The EmailAddress object is a model around an email address. |
| `email-link-error.mdx` | Custom error for email links. |
| `enterprise-account-connection.mdx` | An interface that represents an enterprise account connection. |
| `enterprise-account.mdx` | An interface that represents an enterprise account. |
| `errors.mdx` | An interface that represents the errors that occurred during the last API request, for use in custom flows. |
| `external-account.mdx` | The ExternalAccount object is a model around an identification obtained by an external provider (e.g., a socia |
| `feature-resource.mdx` | The FeatureResource type represents a Feature of a Subscription Plan. |
| `handle-o-auth-callback-params.mdx` | A type representing the parameters for an OAuth-related callback. |
| `identification-link-resource.mdx` | An interface representing an identification link. |
| `image-resource.mdx` | The ImageResource type represents an image resource. |
| `last-authentication-strategy.mdx` | The LastAuthenticationStrategy enum is used to indicate the last authentication strategy used by a client. |
| `metadata.mdx` | Types related to metadata. |
| `oauth-application.mdx` | The OAuthApplication object provides helpers for building custom OAuth consent flows in Clerk. |
| `oauth-consent-info.mdx` | An interface representing OAuth consent information. |
| `oauth-consent-scope.mdx` | An interface representing a single OAuth scope with its description and whether it requires consent. |
| `organization-creation-defaults.mdx` | An interface representing an Organization creation defaults. |
| `organization-custom-permission-key.mdx` | A type that represents a user's Permission in an Organization. |
| `organization-custom-role-key.mdx` | A type that represents the user's Role in an Organization. |
| `organization-domain-resource.mdx` | The OrganizationDomainResource object is the model around an Organization domain. |
| `organization-domains-bulk-ownership-verification-resource.mdx` | The OrganizationDomainsBulkOwnershipVerificationResource object is the result of a bulk ownership verification |
| `organization-invitation.mdx` | The OrganizationInvitation object is the model around an Organization invitation. |
| `organization-membership-request.mdx` | The OrganizationMembershipRequest object is the model that describes the request of a user to join an Organiza |
| `organization-membership.mdx` | The OrganizationMembership object is the model around an Organization membership entity and describes the rela |
| `organization-suggestion.mdx` | An interface representing an Organization suggestion. |
| `overview.mdx` | Explore the different types available for typing your application. |
| `passkey-resource.mdx` | An interface that describes a passkey associated with a user response. |
| `permission-resource.mdx` | An interface that represents a Permission in an Organization. |
| `phone-number.mdx` | The PhoneNumber object describes a phone number. Phone numbers can be used as a proof of identification for us |
| `protect-check-resource.mdx` | An interface that represents a pending Clerk Protect mid-flow challenge. |
| `public-user-data.mdx` | Information about that user that's publicly available. |
| `redirect-options.mdx` | An interface that provides options for a range of redirect methods. |
| `role-resource.mdx` | An interface that represents a Role in an Organization. |
| `session-status.mdx` | The SessionStatus enum is used to indicate the status of a session. |
| `session-task.mdx` | The SessionTask interface represents the current pending task of a session. |
| `session-verification.mdx` | The SessionVerification interface represents the state of a session reverification process. |
| `session-with-activities.mdx` | The SessionWithActivities object is a modified Session object. It contains most of the information that the Se |
| `set-active-params.mdx` | The parameters for the setActive() method. |
| `sign-in-first-factor.mdx` | The SignInFirstFactor type represents the first factor verification strategy that can be used in the sign-in p |
| `sign-in-initial-values.mdx` | The type for the initialValues prop that is used to pre-populate the sign-in form. |
| `sign-in-redirect-options.mdx` | An interface that provides options for sign-in redirect methods. |
| `sign-in-second-factor.mdx` | The SignInSecondFactor type represents the second factor verification strategy that can be used in the sign-in |
| `sign-up-initial-values.mdx` | The type for the initialValues prop that is used to pre-populate the sign-up form. |
| `sign-up-redirect-options.mdx` | An interface that provides options for sign-up redirect methods. |
| `sign-up-verification-resource.mdx` | An interface that represents the available verification strategies for a sign-up attempt. |
| `signed-in-session-resource.mdx` | A session for a logged-in user that is either fully active or waiting to complete additional verification step |
| `sso-bypass-allowlist-resource.mdx` | An interface that defines the methods for managing an Organization's single sign-on (SSO) bypass allowlist. |
| `sso.mdx` | Types related to SSO providers and strategies. |
| `totp-resource.mdx` | An interface that represents a TOTP secret. |
| `user-organization-invitation.mdx` | The UserOrganizationInvitation object is the model around a user's invitation to an Organization. |
| `verification-resource.mdx` | An interface that represents the state of the verification process for a sign-in or sign-up attempt. |
| `waitlist.mdx` | The Waitlist object holds the state of a waitlist entry and provides methods to join the waitlist. |
| `web3-wallet.mdx` | The Web3Wallet object describes a Web3 wallet address. The address can be used as a proof of identification fo |

### reference/types/_partials/ (2 files)

| File | Description |
|------|-------------|
| `redirect-options.mdx` |  |
| `verification-resource-props.mdx` |  |

### reference/views/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | A list of Clerk's comprehensive suite of views designed to seamlessly integrate authentication and multi-tenan |

### reference/views/authentication/ (1 files)

| File | Description |
|------|-------------|
| `auth-view.mdx` | Clerk's AuthView renders a UI for signing in and signing up users on your app. |

### reference/views/organization/ (3 files)

| File | Description |
|------|-------------|
| `organization-list-view.mdx` | Clerk's OrganizationListView renders a standalone account picker for choosing between the user's Personal Acco |
| `organization-profile-view.mdx` | Clerk's OrganizationProfileView renders the Active Organization's management interface, including members, dom |
| `organization-switcher.mdx` | Clerk's OrganizationSwitcher renders an account switcher interface that lets signed-in users switch between th |

### reference/views/user/ (2 files)

| File | Description |
|------|-------------|
| `user-button.mdx` | Clerk's UserButton renders a circular button that displays the current user's profile image and opens the user |
| `user-profile-view.mdx` | Clerk's UserProfileView renders a beautiful, full-featured account management UI that allows users to manage t |

### reference/vue/ (3 files)

| File | Description |
|------|-------------|
| `clerk-plugin.mdx` | The clerkPlugin provides session and user context to Clerk's composables and components. |
| `overview.mdx` | The Clerk Vue SDK gives you access to prebuilt components, composables, and helpers to make user authenticatio |
| `update-clerk-options.mdx` | The updateClerkOptions() function allows you to update Clerk's options at runtime. |
