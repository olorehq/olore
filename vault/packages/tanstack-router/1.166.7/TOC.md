# TanStack Router Table of Contents

## Directory Map

```
contents/
├── router/
│   ├── api/
│   │   ├── router/             # Individual API reference (79 files)
│   │   ├── file-based-routing.md
│   │   └── router.md
│   ├── eslint/                 # ESLint plugin (2 files)
│   ├── guide/                  # Core guides (22 files)
│   ├── how-to/                 # Task-focused how-to guides (20 files)
│   │   └── (no drafts subfolder)
│   ├── installation/           # Setup per bundler (7 files)
│   ├── integrations/           # Third-party integrations (1 file)
│   ├── routing/                # Routing concepts (7 files)
│   ├── devtools.md
│   ├── faq.md
│   ├── overview.md
│   └── quick-start.md
└── start/
    └── framework/
        ├── react/
        │   ├── guide/          # TanStack Start React guides (27 files)
        │   ├── tutorial/       # Tutorials (2 files)
        │   ├── build-from-scratch.md
        │   ├── getting-started.md
        │   ├── migrate-from-next-js.md
        │   ├── overview.md
        │   └── quick-start.md
        └── solid/
            ├── guide/          # TanStack Start Solid guides (18 files)
            ├── build-from-scratch.md
            ├── getting-started.md
            ├── overview.md
            └── quick-start.md
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user (router) | `contents/router/quick-start.md` |
| New user (TanStack Start React) | `contents/start/framework/react/quick-start.md` |
| New user (TanStack Start Solid) | `contents/start/framework/solid/quick-start.md` |
| Installation | `contents/router/how-to/install.md` |
| API lookup | `contents/router/api/router.md` |
| Routing overview | `contents/router/routing/routing-concepts.md` |
| Search params | `contents/router/guide/search-params.md` |
| Data loading | `contents/router/guide/data-loading.md` |
| Authentication | `contents/router/guide/authenticated-routes.md` |
| FAQ / Troubleshooting | `contents/router/faq.md` |

## Detailed Structure

### router/ (top-level, 4 files)

| File | Description |
|------|-------------|
| `router/devtools.md` | TanStack Router Devtools setup and usage |
| `router/faq.md` | Frequently asked questions |
| `router/overview.md` | Router overview and feature summary |
| `router/quick-start.md` | Quick start guide |

### router/api/ (2 files)

| File | Description |
|------|-------------|
| `router/api/file-based-routing.md` | File-based routing API overview |
| `router/api/router.md` | Router API overview index |

### router/api/router/ (79 files)

| File | Description |
|------|-------------|
| `ActiveLinkOptionsType.md` | ActiveLinkOptions type reference |
| `AsyncRouteComponentType.md` | AsyncRouteComponent type reference |
| `awaitComponent.md` | Await component reference |
| `catchBoundaryComponent.md` | CatchBoundary component reference |
| `catchNotFoundComponent.md` | CatchNotFound component reference |
| `clientOnlyComponent.md` | ClientOnly component reference |
| `createFileRouteFunction.md` | createFileRoute() function reference |
| `createLazyFileRouteFunction.md` | createLazyFileRoute() function reference |
| `createLazyRouteFunction.md` | createLazyRoute() function reference |
| `createRootRouteFunction.md` | createRootRoute() function reference |
| `createRootRouteWithContextFunction.md` | createRootRouteWithContext() function reference |
| `createRouteFunction.md` | createRoute() function reference |
| `createRouteMaskFunction.md` | createRouteMask() function reference |
| `createRouterFunction.md` | createRouter() function reference |
| `defaultGlobalNotFoundComponent.md` | DefaultGlobalNotFound component reference |
| `deferFunction.md` | defer() function reference |
| `errorComponentComponent.md` | ErrorComponent component reference |
| `FileRouteClass.md` | FileRoute class reference |
| `getRouteApiFunction.md` | getRouteApi() function reference |
| `historyStateInterface.md` | HistoryState interface reference |
| `isNotFoundFunction.md` | isNotFound() function reference |
| `isRedirectFunction.md` | isRedirect() function reference |
| `lazyRouteComponentFunction.md` | lazyRouteComponent() function reference |
| `linkComponent.md` | Link component reference |
| `linkOptions.md` | linkOptions() reference |
| `LinkOptionsType.md` | LinkOptions type reference |
| `LinkPropsType.md` | LinkProps type reference |
| `matchRouteComponent.md` | MatchRoute component reference |
| `MatchRouteOptionsType.md` | MatchRouteOptions type reference |
| `navigateComponent.md` | Navigate component reference |
| `NavigateOptionsType.md` | NavigateOptions type reference |
| `notFoundComponentComponent.md` | NotFoundComponent component reference |
| `NotFoundErrorType.md` | NotFoundError type reference |
| `notFoundFunction.md` | notFound() function reference |
| `NotFoundRouteClass.md` | NotFoundRoute class reference |
| `outletComponent.md` | Outlet component reference |
| `ParsedHistoryStateType.md` | ParsedHistoryState type reference |
| `ParsedLocationType.md` | ParsedLocation type reference |
| `redirectFunction.md` | redirect() function reference |
| `RedirectType.md` | Redirect type reference |
| `RegisterType.md` | Register type reference (type augmentation) |
| `retainSearchParamsFunction.md` | retainSearchParams() function reference |
| `RootRouteClass.md` | RootRoute class reference |
| `rootRouteWithContextFunction.md` | rootRouteWithContext() function reference |
| `RouteApiClass.md` | RouteApi class reference |
| `RouteApiType.md` | RouteApi type reference |
| `RouteClass.md` | Route class reference |
| `RouteMaskType.md` | RouteMask type reference |
| `RouteMatchType.md` | RouteMatch type reference |
| `RouteOptionsType.md` | RouteOptions type reference |
| `RouterClass.md` | Router class reference |
| `RouterEventsType.md` | RouterEvents type reference |
| `RouterOptionsType.md` | RouterOptions type reference |
| `RouterStateType.md` | RouterState type reference |
| `RouterType.md` | Router type reference |
| `RouteType.md` | Route type reference |
| `stripSearchParamsFunction.md` | stripSearchParams() function reference |
| `ToMaskOptionsType.md` | ToMaskOptions type reference |
| `ToOptionsType.md` | ToOptions type reference |
| `useAwaitedHook.md` | useAwaited() hook reference |
| `useBlockerHook.md` | useBlocker() hook reference |
| `useCanGoBack.md` | useCanGoBack() hook reference |
| `useChildMatchesHook.md` | useChildMatches() hook reference |
| `useLinkPropsHook.md` | useLinkProps() hook reference |
| `useLoaderDataHook.md` | useLoaderData() hook reference |
| `useLoaderDepsHook.md` | useLoaderDeps() hook reference |
| `useLocationHook.md` | useLocation() hook reference |
| `useMatchesHook.md` | useMatches() hook reference |
| `useMatchHook.md` | useMatch() hook reference |
| `useMatchRouteHook.md` | useMatchRoute() hook reference |
| `UseMatchRouteOptionsType.md` | UseMatchRouteOptions type reference |
| `useNavigateHook.md` | useNavigate() hook reference |
| `useParamsHook.md` | useParams() hook reference |
| `useParentMatchesHook.md` | useParentMatches() hook reference |
| `useRouteContextHook.md` | useRouteContext() hook reference |
| `useRouterHook.md` | useRouter() hook reference |
| `useRouterStateHook.md` | useRouterState() hook reference |
| `useSearchHook.md` | useSearch() hook reference |
| `ViewTransitionOptionsType.md` | ViewTransitionOptions type reference |

### router/eslint/ (2 files)

| File | Description |
|------|-------------|
| `router/eslint/create-route-property-order.md` | ESLint rule: create-route-property-order |
| `router/eslint/eslint-plugin-router.md` | ESLint plugin for TanStack Router |

### router/guide/ (22 files)

| File | Description |
|------|-------------|
| `authenticated-routes.md` | Protecting routes with authentication |
| `automatic-code-splitting.md` | Automatic code splitting setup |
| `code-splitting.md` | Code splitting strategies |
| `creating-a-router.md` | Creating and configuring a router |
| `custom-link.md` | Building custom link components |
| `custom-search-param-serialization.md` | Custom search param serializers |
| `data-loading.md` | Loading data in routes via loaders |
| `data-mutations.md` | Mutations and invalidation patterns |
| `deferred-data-loading.md` | Deferred / streaming data loading |
| `document-head-management.md` | Managing document head (title, meta) |
| `external-data-loading.md` | Loading data from external sources |
| `history-types.md` | Browser, hash, and memory history |
| `internationalization-i18n.md` | i18n integration guide |
| `link-options.md` | Link component options |
| `navigation-blocking.md` | Blocking navigation (unsaved changes) |
| `navigation.md` | Programmatic navigation |
| `not-found-errors.md` | Handling 404 / not-found errors |
| `outlets.md` | Using Outlet for nested layouts |
| `parallel-routes.md` | Parallel route rendering |
| `path-params.md` | Dynamic path parameters |
| `preloading.md` | Route preloading on hover/focus |
| `render-optimizations.md` | Fine-grained render optimizations |
| `route-masking.md` | URL masking and display URLs |
| `router-context.md` | Router context and dependency injection |
| `scroll-restoration.md` | Scroll restoration across navigations |
| `search-params.md` | Search parameter management |
| `ssr.md` | Server-side rendering setup |
| `static-route-data.md` | Static data on route definitions |
| `type-safety.md` | TypeScript type safety patterns |
| `type-utilities.md` | Type utility helpers |
| `url-rewrites.md` | URL rewrite patterns |

### router/how-to/ (20 files)

| File | Description |
|------|-------------|
| `arrays-objects-dates-search-params.md` | Complex types in search params |
| `debug-router-issues.md` | Debugging router problems |
| `deploy-to-production.md` | Deploying to production |
| `install.md` | Installation steps |
| `integrate-chakra-ui.md` | Chakra UI integration |
| `integrate-framer-motion.md` | Framer Motion integration |
| `integrate-material-ui.md` | Material UI integration |
| `integrate-shadcn-ui.md` | shadcn/ui integration |
| `migrate-from-react-router.md` | Migration from React Router |
| `navigate-with-search-params.md` | Navigating with search params |
| `setup-auth-providers.md` | Setting up auth providers |
| `setup-authentication.md` | Setting up authentication |
| `setup-basic-search-params.md` | Basic search params setup |
| `setup-rbac.md` | Role-based access control |
| `setup-ssr.md` | SSR setup how-to |
| `setup-testing.md` | Testing setup |
| `share-search-params-across-routes.md` | Sharing search params between routes |
| `test-file-based-routing.md` | Testing file-based routing |
| `use-environment-variables.md` | Using environment variables |
| `validate-search-params.md` | Validating search params |

### router/installation/ (7 files)

| File | Description |
|------|-------------|
| `manual.md` | Manual installation |
| `migrate-from-react-location.md` | Migration from React Location |
| `migrate-from-react-router.md` | Migration from React Router |
| `with-esbuild.md` | Setup with esbuild |
| `with-router-cli.md` | Setup with TanStack Router CLI |
| `with-rspack.md` | Setup with Rspack |
| `with-vite.md` | Setup with Vite (recommended) |
| `with-webpack.md` | Setup with Webpack |

### router/integrations/ (1 file)

| File | Description |
|------|-------------|
| `query.md` | TanStack Query integration |

### router/routing/ (7 files)

| File | Description |
|------|-------------|
| `code-based-routing.md` | Code-based route definitions |
| `file-based-routing.md` | File-based routing overview |
| `file-naming-conventions.md` | File naming conventions |
| `route-matching.md` | Route matching algorithm |
| `route-trees.md` | Route tree structure |
| `routing-concepts.md` | Core routing concepts |
| `virtual-file-routes.md` | Virtual file routes |

### start/framework/react/ (5 files)

| File | Description |
|------|-------------|
| `build-from-scratch.md` | Build TanStack Start from scratch |
| `getting-started.md` | TanStack Start React getting started |
| `migrate-from-next-js.md` | Migration from Next.js |
| `overview.md` | TanStack Start React overview |
| `quick-start.md` | TanStack Start React quick start |

### start/framework/react/guide/ (27 files)

| File | Description |
|------|-------------|
| `authentication-overview.md` | Authentication strategies overview |
| `authentication.md` | Authentication implementation |
| `cdn-asset-urls.md` | CDN asset URL handling |
| `client-entry-point.md` | Client entry point configuration |
| `code-execution-patterns.md` | Server/client code execution patterns |
| `databases.md` | Database integration patterns |
| `environment-functions.md` | Environment-aware functions |
| `environment-variables.md` | Environment variable handling |
| `error-boundaries.md` | Error boundary setup |
| `execution-model.md` | Server/client execution model |
| `hosting.md` | Hosting and deployment |
| `hydration-errors.md` | Debugging hydration errors |
| `import-protection.md` | Import protection / server-only modules |
| `isr.md` | Incremental static regeneration |
| `middleware.md` | Request middleware |
| `observability.md` | Logging and observability |
| `path-aliases.md` | TypeScript path aliases |
| `rendering-markdown.md` | Rendering markdown content |
| `routing.md` | Routing in TanStack Start (React) |
| `selective-ssr.md` | Selective SSR per route |
| `seo.md` | SEO meta tags and head management |
| `server-entry-point.md` | Server entry point configuration |
| `server-functions.md` | Server functions (RPC) |
| `server-routes.md` | Server routes (API endpoints) |
| `spa-mode.md` | SPA mode (no SSR) |
| `static-prerendering.md` | Static prerendering |
| `static-server-functions.md` | Static server functions |
| `streaming-data-from-server-functions.md` | Streaming data from server functions |
| `tailwind-integration.md` | Tailwind CSS integration |

### start/framework/react/tutorial/ (2 files)

| File | Description |
|------|-------------|
| `fetching-external-api.md` | Tutorial: fetching from external APIs |
| `reading-writing-file.md` | Tutorial: reading and writing files |

### start/framework/solid/ (4 files)

| File | Description |
|------|-------------|
| `build-from-scratch.md` | Build TanStack Start (Solid) from scratch |
| `getting-started.md` | TanStack Start Solid getting started |
| `overview.md` | TanStack Start Solid overview |
| `quick-start.md` | TanStack Start Solid quick start |

### start/framework/solid/guide/ (18 files)

| File | Description |
|------|-------------|
| `authentication-overview.md` | Authentication overview (Solid) |
| `authentication.md` | Authentication implementation (Solid) |
| `client-entry-point.md` | Client entry point (Solid) |
| `code-execution-patterns.md` | Code execution patterns (Solid) |
| `databases.md` | Database integration (Solid) |
| `environment-functions.md` | Environment functions (Solid) |
| `environment-variables.md` | Environment variables (Solid) |
| `error-boundaries.md` | Error boundaries (Solid) |
| `execution-model.md` | Execution model (Solid) |
| `hosting.md` | Hosting (Solid) |
| `hydration-errors.md` | Hydration errors (Solid) |
| `import-protection.md` | Import protection (Solid) |
| `middleware.md` | Middleware (Solid) |
| `observability.md` | Observability (Solid) |
| `path-aliases.md` | Path aliases (Solid) |
| `reading-writing-file.md` | Reading and writing files (Solid) |
| `routing.md` | Routing (Solid) |
| `selective-ssr.md` | Selective SSR (Solid) |
| `seo.md` | SEO (Solid) |
| `server-entry-point.md` | Server entry point (Solid) |
| `server-functions.md` | Server functions (Solid) |
| `server-routes.md` | Server routes (Solid) |
| `spa-mode.md` | SPA mode (Solid) |
| `static-prerendering.md` | Static prerendering (Solid) |
| `static-server-functions.md` | Static server functions (Solid) |
| `tailwind-integration.md` | Tailwind CSS integration (Solid) |
