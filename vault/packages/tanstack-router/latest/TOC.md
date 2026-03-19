# tanstack-router Table of Contents

## Directory Map

```
contents/
├── router/
│   ├── api/                        # API reference (80 files)
│   │   ├── router/                 # All router API types, hooks, components, functions
│   │   ├── file-based-routing.md   # File-based routing API overview
│   │   └── router.md               # Router API index
│   ├── guide/                      # Core concept guides (31 files)
│   ├── how-to/                     # Step-by-step how-to guides (20 files)
│   ├── routing/                    # Routing concepts (7 files)
│   ├── installation/               # Installation guides (7 files)
│   ├── eslint/                     # ESLint plugin (2 files)
│   ├── integrations/               # External integrations (1 file)
│   ├── overview.md                 # Library overview
│   ├── quick-start.md              # Quick start
│   ├── devtools.md                 # DevTools
│   └── faq.md                      # FAQ
└── start/
    ├── framework/react/            # TanStack Start React framework docs
    │   ├── guide/                  # React-specific guides (26 files)
    │   ├── tutorial/               # Tutorials (2 files)
    │   ├── overview.md
    │   ├── quick-start.md
    │   ├── getting-started.md
    │   ├── build-from-scratch.md
    │   └── migrate-from-next-js.md
    └── framework/solid/            # TanStack Start Solid framework docs
        ├── guide/                  # Solid-specific guides (22 files)
        ├── tutorial/               # Tutorials (2 files)
        ├── overview.md
        ├── quick-start.md
        ├── getting-started.md
        └── build-from-scratch.md
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user (router only) | `contents/router/quick-start.md` |
| New user (TanStack Start React) | `contents/start/framework/react/getting-started.md` |
| New user (TanStack Start Solid) | `contents/start/framework/solid/getting-started.md` |
| API lookup | `contents/router/api/router/` |
| File-based routing | `contents/router/routing/file-based-routing.md` |
| Search params | `contents/router/guide/search-params.md` |
| Data loading | `contents/router/guide/data-loading.md` |
| Authentication | `contents/router/guide/authenticated-routes.md` |
| Server functions | `contents/start/framework/react/guide/server-functions.md` |
| SSR | `contents/router/guide/ssr.md` |

## Detailed Structure

### router/api/router/ (80 files)

| File | Description |
|------|-------------|
| `ActiveLinkOptionsType.md` | ActiveLinkOptions type reference |
| `AsyncRouteComponentType.md` | AsyncRouteComponent type |
| `FileRouteClass.md` | FileRoute class |
| `LinkOptionsType.md` | LinkOptions type |
| `LinkPropsType.md` | LinkProps type |
| `MatchRouteOptionsType.md` | MatchRouteOptions type |
| `NavigateOptionsType.md` | NavigateOptions type |
| `NotFoundErrorType.md` | NotFoundError type |
| `NotFoundRouteClass.md` | NotFoundRoute class |
| `ParsedHistoryStateType.md` | ParsedHistoryState type |
| `ParsedLocationType.md` | ParsedLocation type |
| `RedirectType.md` | Redirect type |
| `RegisterType.md` | Register type |
| `RootRouteClass.md` | RootRoute class |
| `RouteApiClass.md` | RouteApi class |
| `RouteApiType.md` | RouteApi type |
| `RouteClass.md` | Route class |
| `RouteMaskType.md` | RouteMask type |
| `RouteMatchType.md` | RouteMatch type |
| `RouteOptionsType.md` | RouteOptions type |
| `RouteType.md` | Route type |
| `RouterClass.md` | Router class |
| `RouterEventsType.md` | RouterEvents type |
| `RouterOptionsType.md` | RouterOptions type |
| `RouterStateType.md` | RouterState type |
| `RouterType.md` | Router type |
| `ToMaskOptionsType.md` | ToMaskOptions type |
| `ToOptionsType.md` | ToOptions type |
| `UseMatchRouteOptionsType.md` | UseMatchRouteOptions type |
| `ViewTransitionOptionsType.md` | ViewTransitionOptions type |
| `awaitComponent.md` | Await component |
| `catchBoundaryComponent.md` | CatchBoundary component |
| `catchNotFoundComponent.md` | CatchNotFound component |
| `clientOnlyComponent.md` | ClientOnly component |
| `createFileRouteFunction.md` | createFileRoute function |
| `createLazyFileRouteFunction.md` | createLazyFileRoute function |
| `createLazyRouteFunction.md` | createLazyRoute function |
| `createRootRouteFunction.md` | createRootRoute function |
| `createRootRouteWithContextFunction.md` | createRootRouteWithContext function |
| `createRouteFunction.md` | createRoute function |
| `createRouteMaskFunction.md` | createRouteMask function |
| `createRouterFunction.md` | createRouter function |
| `defaultGlobalNotFoundComponent.md` | defaultGlobalNotFound component |
| `deferFunction.md` | defer function |
| `errorComponentComponent.md` | ErrorComponent component |
| `getRouteApiFunction.md` | getRouteApi function |
| `historyStateInterface.md` | HistoryState interface |
| `isNotFoundFunction.md` | isNotFound function |
| `isRedirectFunction.md` | isRedirect function |
| `lazyRouteComponentFunction.md` | lazyRouteComponent function |
| `linkComponent.md` | Link component |
| `linkOptions.md` | linkOptions |
| `matchRouteComponent.md` | MatchRoute component |
| `navigateComponent.md` | Navigate component |
| `notFoundComponentComponent.md` | NotFoundComponent component |
| `notFoundFunction.md` | notFound function |
| `outletComponent.md` | Outlet component |
| `redirectFunction.md` | redirect function |
| `retainSearchParamsFunction.md` | retainSearchParams function |
| `rootRouteWithContextFunction.md` | rootRouteWithContext function |
| `stripSearchParamsFunction.md` | stripSearchParams function |
| `useAwaitedHook.md` | useAwaited hook |
| `useBlockerHook.md` | useBlocker hook |
| `useCanGoBack.md` | useCanGoBack hook |
| `useChildMatchesHook.md` | useChildMatches hook |
| `useLinkPropsHook.md` | useLinkProps hook |
| `useLoaderDataHook.md` | useLoaderData hook |
| `useLoaderDepsHook.md` | useLoaderDeps hook |
| `useLocationHook.md` | useLocation hook |
| `useMatchHook.md` | useMatch hook |
| `useMatchRouteHook.md` | useMatchRoute hook |
| `useMatchesHook.md` | useMatches hook |
| `useNavigateHook.md` | useNavigate hook |
| `useParamsHook.md` | useParams hook |
| `useParentMatchesHook.md` | useParentMatches hook |
| `useRouteContextHook.md` | useRouteContext hook |
| `useRouterHook.md` | useRouter hook |
| `useRouterStateHook.md` | useRouterState hook |
| `useSearchHook.md` | useSearch hook |

### router/guide/ (31 files)

| File | Description |
|------|-------------|
| `authenticated-routes.md` | Auth guards and protected routes |
| `automatic-code-splitting.md` | Automatic code splitting |
| `code-splitting.md` | Code splitting strategies |
| `creating-a-router.md` | Router creation and setup |
| `custom-link.md` | Custom link component |
| `custom-search-param-serialization.md` | Custom search param serializers |
| `data-loading.md` | Data loading with loaders |
| `data-mutations.md` | Data mutations |
| `deferred-data-loading.md` | Deferred/streaming data loading |
| `document-head-management.md` | Managing document head |
| `external-data-loading.md` | External data loading patterns |
| `history-types.md` | History types (hash, memory, browser) |
| `internationalization-i18n.md` | i18n setup |
| `link-options.md` | Link options |
| `navigation-blocking.md` | Blocking navigation |
| `navigation.md` | Navigation patterns |
| `not-found-errors.md` | Not found error handling |
| `outlets.md` | Outlet component usage |
| `parallel-routes.md` | Parallel routes |
| `path-params.md` | Path parameters |
| `preloading.md` | Route preloading |
| `render-optimizations.md` | Render optimizations |
| `route-masking.md` | Route URL masking |
| `router-context.md` | Router context |
| `scroll-restoration.md` | Scroll restoration |
| `search-params.md` | Search parameters |
| `ssr.md` | Server-side rendering |
| `static-route-data.md` | Static route data |
| `type-safety.md` | Type safety features |
| `type-utilities.md` | Type utility helpers |
| `url-rewrites.md` | URL rewrites |

### router/routing/ (7 files)

| File | Description |
|------|-------------|
| `code-based-routing.md` | Code-based routing setup |
| `file-based-routing.md` | File-based routing setup |
| `file-naming-conventions.md` | File naming conventions |
| `route-matching.md` | Route matching logic |
| `route-trees.md` | Route tree structure |
| `routing-concepts.md` | Core routing concepts |
| `virtual-file-routes.md` | Virtual file routes |

### router/installation/ (7 files)

| File | Description |
|------|-------------|
| `manual.md` | Manual installation |
| `migrate-from-react-location.md` | Migrate from React Location |
| `migrate-from-react-router.md` | Migrate from React Router |
| `with-esbuild.md` | Setup with esbuild |
| `with-router-cli.md` | Setup with Router CLI |
| `with-rspack.md` | Setup with Rspack |
| `with-vite.md` | Setup with Vite |
| `with-webpack.md` | Setup with Webpack |

### router/how-to/ (20 files)

| File | Description |
|------|-------------|
| `arrays-objects-dates-search-params.md` | Complex search param types |
| `debug-router-issues.md` | Debugging router issues |
| `deploy-to-production.md` | Production deployment |
| `install.md` | Installation how-to |
| `integrate-chakra-ui.md` | Chakra UI integration |
| `integrate-framer-motion.md` | Framer Motion integration |
| `integrate-material-ui.md` | Material UI integration |
| `integrate-shadcn-ui.md` | shadcn/ui integration |
| `migrate-from-react-router.md` | Migration from React Router |
| `navigate-with-search-params.md` | Navigate with search params |
| `setup-auth-providers.md` | Auth provider setup |
| `setup-authentication.md` | Authentication setup |
| `setup-basic-search-params.md` | Basic search params setup |
| `setup-rbac.md` | Role-based access control |
| `setup-ssr.md` | SSR setup |
| `setup-testing.md` | Testing setup |
| `share-search-params-across-routes.md` | Shared search params |
| `test-file-based-routing.md` | Testing file-based routing |
| `use-environment-variables.md` | Using env variables |
| `validate-search-params.md` | Search param validation |

### router/eslint/ (2 files)

| File | Description |
|------|-------------|
| `create-route-property-order.md` | ESLint rule: route property order |
| `eslint-plugin-router.md` | ESLint plugin overview |

### start/framework/react/guide/ (26 files)

| File | Description |
|------|-------------|
| `authentication-overview.md` | Auth overview for Start |
| `authentication.md` | Auth implementation |
| `cdn-asset-urls.md` | CDN asset URLs |
| `client-entry-point.md` | Client entry point |
| `code-execution-patterns.md` | Code execution patterns |
| `databases.md` | Database integration |
| `environment-functions.md` | Environment functions |
| `environment-variables.md` | Environment variables |
| `error-boundaries.md` | Error boundaries |
| `execution-model.md` | Execution model |
| `hosting.md` | Hosting options |
| `hydration-errors.md` | Hydration errors |
| `import-protection.md` | Import protection |
| `isr.md` | Incremental static regeneration |
| `middleware.md` | Middleware |
| `observability.md` | Observability |
| `path-aliases.md` | Path aliases |
| `rendering-markdown.md` | Rendering Markdown |
| `routing.md` | Routing in Start |
| `selective-ssr.md` | Selective SSR |
| `seo.md` | SEO |
| `server-entry-point.md` | Server entry point |
| `server-functions.md` | Server functions (createServerFn) |
| `server-routes.md` | Server routes |
| `spa-mode.md` | SPA mode |
| `static-prerendering.md` | Static prerendering |
| `static-server-functions.md` | Static server functions |
| `streaming-data-from-server-functions.md` | Streaming from server functions |
| `tailwind-integration.md` | Tailwind CSS integration |

### start/framework/solid/guide/ (22 files)

Similar guides for Solid framework (see react equivalents above for descriptions).

### start/framework/react/ top-level

| File | Description |
|------|-------------|
| `overview.md` | TanStack Start React overview |
| `quick-start.md` | Quick start |
| `getting-started.md` | Getting started |
| `build-from-scratch.md` | Build from scratch |
| `migrate-from-next-js.md` | Migrate from Next.js |

### start/framework/solid/ top-level

| File | Description |
|------|-------------|
| `overview.md` | TanStack Start Solid overview |
| `quick-start.md` | Quick start |
| `getting-started.md` | Getting started |
| `build-from-scratch.md` | Build from scratch |
