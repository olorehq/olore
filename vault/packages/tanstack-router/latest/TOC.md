# tanstack-router Table of Contents

## Directory Map

```
contents/
├── router/                         # TanStack Router core (155 files)
│   ├── overview.md                 # Overview and intro
│   ├── quick-start.md              # Quick start guide
│   ├── devtools.md                 # DevTools setup
│   ├── faq.md                      # Frequently asked questions
│   ├── routing/                    # Routing concepts (7 files)
│   ├── guide/                      # In-depth guides (32 files)
│   ├── how-to/                     # Task-focused how-to guides (20 files)
│   ├── api/                        # API reference (81 files)
│   │   ├── router.md               # API index
│   │   ├── file-based-routing.md   # File-based routing API
│   │   └── router/                 # Individual API docs (79 files)
│   ├── installation/               # Installation guides (8 files)
│   ├── eslint/                     # ESLint plugin (2 files)
│   └── integrations/               # Integrations (1 file)
└── start/                          # TanStack Start full-stack (56 files)
    ├── framework/
    │   ├── react/                  # React framework (41 files)
    │   │   ├── overview.md
    │   │   ├── getting-started.md
    │   │   ├── build-from-scratch.md
    │   │   ├── migrate-from-next-js.md
    │   │   ├── guide/              # React Start guides (35 files)
    │   │   └── tutorial/           # Tutorials (2 files)
    │   └── solid/                  # Solid framework (12 files)
    │       ├── getting-started.md
    │       ├── build-from-scratch.md
    │       ├── guide/              # Solid Start guides (9 files)
    │       └── tutorial/           # Tutorials (1 file)
    └── eslint/                     # Start ESLint plugin (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to TanStack Router | `contents/router/quick-start.md` |
| Router overview | `contents/router/overview.md` |
| File-based routing | `contents/router/routing/file-based-routing.md` |
| Code-based routing | `contents/router/routing/code-based-routing.md` |
| Search params | `contents/router/guide/search-params.md` |
| Data loading | `contents/router/guide/data-loading.md` |
| Authentication | `contents/router/guide/authenticated-routes.md` |
| API reference index | `contents/router/api/router.md` |
| TanStack Start (React) | `contents/start/framework/react/getting-started.md` |
| TanStack Start (Solid) | `contents/start/framework/solid/getting-started.md` |
| Server functions | `contents/start/framework/react/guide/server-functions.md` |

## Detailed Structure

### router/ (top-level, 4 files)

| File | Description |
|------|-------------|
| `overview.md` | TanStack Router overview and feature list |
| `quick-start.md` | Quick start guide |
| `devtools.md` | DevTools setup and usage |
| `faq.md` | Frequently asked questions |

### router/routing/ (7 files)

| File | Description |
|------|-------------|
| `routing-concepts.md` | Core routing concepts |
| `file-based-routing.md` | File-based routing setup and conventions |
| `file-naming-conventions.md` | File naming conventions |
| `code-based-routing.md` | Code-based routing approach |
| `route-trees.md` | Route tree structure |
| `route-matching.md` | Route matching rules |
| `virtual-file-routes.md` | Virtual file routes |

### router/guide/ (32 files)

| File | Description |
|------|-------------|
| `authenticated-routes.md` | Implementing authenticated/protected routes |
| `automatic-code-splitting.md` | Automatic code splitting |
| `code-splitting.md` | Manual code splitting patterns |
| `creating-a-router.md` | Creating and configuring a router |
| `custom-link.md` | Creating custom link components |
| `custom-search-param-serialization.md` | Custom search param serialization |
| `data-loading.md` | Data loading with loaders |
| `data-mutations.md` | Data mutations patterns |
| `deferred-data-loading.md` | Deferred/streaming data loading |
| `document-head-management.md` | Managing document head/meta tags |
| `external-data-loading.md` | External data loading (TanStack Query etc.) |
| `history-types.md` | History types (browser, hash, memory) |
| `internationalization-i18n.md` | i18n integration |
| `link-options.md` | Link component options |
| `navigation-blocking.md` | Blocking navigation (unsaved changes) |
| `navigation.md` | Navigation APIs |
| `not-found-errors.md` | 404 and not-found handling |
| `outlets.md` | Outlet component usage |
| `parallel-routes.md` | Parallel route rendering |
| `path-params.md` | Path parameters |
| `preloading.md` | Route preloading |
| `render-optimizations.md` | Render optimization techniques |
| `route-masking.md` | Route URL masking |
| `router-context.md` | Router context usage |
| `router-events.md` | Router event listeners |
| `scroll-restoration.md` | Scroll restoration |
| `search-params.md` | Search parameter management |
| `ssr.md` | Server-side rendering |
| `static-route-data.md` | Static route data |
| `type-safety.md` | Type safety features |
| `type-utilities.md` | Type utility helpers |
| `url-rewrites.md` | URL rewrites |

### router/how-to/ (20 files)

| File | Description |
|------|-------------|
| `install.md` | Installation steps |
| `arrays-objects-dates-search-params.md` | Arrays, objects, and dates in search params |
| `debug-router-issues.md` | Debugging router issues |
| `deploy-to-production.md` | Production deployment |
| `integrate-chakra-ui.md` | Chakra UI integration |
| `integrate-framer-motion.md` | Framer Motion integration |
| `integrate-material-ui.md` | Material UI integration |
| `integrate-shadcn-ui.md` | shadcn/ui integration |
| `migrate-from-react-router.md` | Migrating from React Router |
| `navigate-with-search-params.md` | Navigating with search params |
| `setup-auth-providers.md` | Auth0, Clerk, Supabase setup |
| `setup-authentication.md` | Basic authentication setup |
| `setup-basic-search-params.md` | Basic search params setup |
| `setup-rbac.md` | Role-based access control |
| `setup-ssr.md` | SSR setup |
| `setup-testing.md` | Testing setup |
| `share-search-params-across-routes.md` | Sharing search params across routes |
| `test-file-based-routing.md` | Testing file-based routing |
| `use-environment-variables.md` | Environment variables |
| `validate-search-params.md` | Validating search params |

### router/installation/ (8 files)

| File | Description |
|------|-------------|
| `manual.md` | Manual installation |
| `with-vite.md` | Vite setup |
| `with-router-cli.md` | Router CLI setup |
| `with-esbuild.md` | esbuild setup |
| `with-rspack.md` | Rspack setup |
| `with-webpack.md` | Webpack setup |
| `migrate-from-react-location.md` | Migrating from React Location |
| `migrate-from-react-router.md` | Migrating from React Router |

### router/api/ (81 files)

| File | Description |
|------|-------------|
| `router.md` | Full API index with all exports |
| `file-based-routing.md` | File-based routing configuration API |
| `router/` | 79 individual API reference files (components, hooks, types, functions) |

Key API files in `router/api/router/`:
- `createRouterFunction.md`, `createRouteFunction.md`, `createFileRouteFunction.md`
- `createRootRouteFunction.md`, `createRootRouteWithContextFunction.md`
- `linkComponent.md`, `outletComponent.md`, `navigateComponent.md`
- `useNavigateHook.md`, `useSearchHook.md`, `useParamsHook.md`
- `useLoaderDataHook.md`, `useRouterHook.md`, `useRouterStateHook.md`
- `useMatchesHook.md`, `useMatchHook.md`, `useLocationHook.md`
- `RouterOptionsType.md`, `RouteOptionsType.md`, `RouterStateType.md`
- `redirectFunction.md`, `notFoundFunction.md`, `deferFunction.md`

### router/eslint/ (2 files)

| File | Description |
|------|-------------|
| `eslint-plugin-router.md` | ESLint plugin overview |
| `create-route-property-order.md` | Route property order rule |

### router/integrations/ (1 file)

| File | Description |
|------|-------------|
| `query.md` | TanStack Query integration |

### start/framework/react/ (41 files)

| File | Description |
|------|-------------|
| `overview.md` | TanStack Start React overview |
| `getting-started.md` | Getting started with Start (React) |
| `build-from-scratch.md` | Building a project from scratch |
| `migrate-from-next-js.md` | Migrating from Next.js |

### start/framework/react/guide/ (35 files)

| File | Description |
|------|-------------|
| `authentication.md` | Authentication patterns |
| `authentication-overview.md` | Auth options overview |
| `authentication-server-primitives.md` | Server-side auth primitives |
| `server-functions.md` | Server functions (createServerFn) |
| `server-routes.md` | Server routes / API routes |
| `static-server-functions.md` | Static server functions |
| `streaming-data-from-server-functions.md` | Streaming from server functions |
| `middleware.md` | Middleware setup |
| `execution-model.md` | Where code runs (isomorphic model) |
| `code-execution-patterns.md` | Code execution control patterns |
| `environment-functions.md` | Environment-scoped functions |
| `environment-variables.md` | Environment variables |
| `routing.md` | Routing in Start |
| `client-entry-point.md` | Client entry configuration |
| `server-entry-point.md` | Server entry configuration |
| `server-components.md` | Server components |
| `deferred-hydration.md` | Deferred hydration |
| `hydration-errors.md` | Hydration error debugging |
| `selective-ssr.md` | Selective SSR |
| `spa-mode.md` | SPA mode (no SSR) |
| `static-prerendering.md` | Static prerendering / SSG |
| `isr.md` | Incremental static regeneration |
| `css-styling.md` | CSS and styling setup |
| `tailwind-integration.md` | Tailwind CSS integration |
| `databases.md` | Database integration patterns |
| `hosting.md` | Hosting and deployment |
| `seo.md` | SEO patterns |
| `observability.md` | Observability / Sentry integration |
| `error-boundaries.md` | Error boundaries |
| `path-aliases.md` | Path aliases configuration |
| `cdn-asset-urls.md` | CDN asset URLs |
| `geo.md` | Geo/edge deployment |
| `import-protection.md` | Import protection |
| `early-hints.md` | HTTP early hints |
| `rendering-markdown.md` | Rendering markdown |

### start/framework/react/tutorial/ (2 files)

| File | Description |
|------|-------------|
| `fetching-external-api.md` | Tutorial: fetching from an external API |
| `reading-writing-file.md` | Tutorial: full-stack DevJokes app |

### start/framework/solid/ (12 files)

| File | Description |
|------|-------------|
| `getting-started.md` | Getting started with Start (Solid) |
| `build-from-scratch.md` | Building a Solid project from scratch |
| `guide/authentication.md` | Authentication (Solid) |
| `guide/client-entry-point.md` | Client entry (Solid) |
| `guide/code-execution-patterns.md` | Code execution patterns (Solid) |
| `guide/execution-model.md` | Execution model (Solid) |
| `guide/hydration-errors.md` | Hydration errors (Solid) |
| `guide/observability.md` | Observability (Solid) |
| `guide/routing.md` | Routing in Solid Start |
| `guide/selective-ssr.md` | Selective SSR (Solid) |
| `guide/static-prerendering.md` | Static prerendering (Solid) |
| `tutorial/reading-writing-file.md` | Tutorial: full-stack app (Solid) |

### start/eslint/ (3 files)

| File | Description |
|------|-------------|
| `eslint-plugin-start.md` | Start ESLint plugin overview |
| `no-async-client-component.md` | No async client component rule |
| `no-client-code-in-server-component.md` | No client code in server rule |
