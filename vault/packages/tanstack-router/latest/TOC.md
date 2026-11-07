# TanStack Router Table of Contents

## Directory Map

```
contents/
├── router/             # TanStack Router docs (React)
│   ├── api/            # API reference: router/ holds 79 component, hook, and type pages
│   ├── guide/          # Concept guides (32 files)
│   ├── how-to/         # Task-focused recipes (20 files)
│   ├── installation/   # Bundler setup and migrations (8 files)
│   ├── routing/        # Routing concepts, file-based and code-based (7 files)
│   ├── eslint/         # ESLint plugin rules
│   └── integrations/   # TanStack Query integration
└── start/              # TanStack Start (full-stack framework)
    ├── eslint/         # ESLint plugin for Start
    └── framework/
        ├── react/      # Start for React: guides, tutorials, migrations
        └── solid/      # Start for Solid (subset not shared with React)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/router/overview.md`, `contents/router/quick-start.md` |
| Install with a bundler | `contents/router/installation/with-vite.md` |
| Routing concepts | `contents/router/routing/routing-concepts.md` |
| Data loading | `contents/router/guide/data-loading.md` |
| Search params | `contents/router/guide/search-params.md` |
| API lookup | `contents/router/api/router/` |
| Authentication | `contents/router/guide/authenticated-routes.md` |
| Full-stack with Start (React) | `contents/start/framework/react/getting-started.md` |
| Server functions | `contents/start/framework/react/guide/server-functions.md` |
| Migrate from React Router | `contents/router/how-to/migrate-from-react-router.md` |

## Detailed Structure

### router/ (6 files)

| File | Description |
|------|-------------|
| `comparison.md` | Comparison: Choosing a routing solution? This side‑by‑side comparison highlights key features, trade‑offs, and common use cases to help you... |
| `decisions-on-dx.md` | Decisions on Developer Experience: When people first start using TanStack Router, they often have a lot of questions that revolve around the... |
| `devtools.md` | Devtools: Wave your hands in the air and shout hooray because TanStack Router comes with dedicated devtools! 🥳 |
| `faq.md` | Frequently Asked Questions: Welcome to the TanStack Router FAQ! Here you'll find answers to common questions about the TanStack Router. If you... |
| `overview.md` | Overview: To get started quickly, head to the next page. For a more lengthy explanation, buckle up while I bring you up to speed! |
| `quick-start.md` | Quick Start: The fastest way to get started with TanStack Router is to scaffold a new project. Just run: |

### router/api/ (2 files)

| File | Description |
|------|-------------|
| `file-based-routing.md` | File-Based Routing API Reference: TanStack Router's file-based routing is quite flexible and can be configured to suit your project's needs. |
| `router.md` | Router API |

### router/api/router/ (79 files)

| File | Description |
|------|-------------|
| `ActiveLinkOptionsType.md` | ActiveLinkOptions type: The ActiveLinkOptions type extends the LinkOptions type and contains additional options that can be used to describe how a... |
| `AsyncRouteComponentType.md` | AsyncRouteComponent type: The AsyncRouteComponent type is used to describe a code-split route component that can be preloaded using a... |
| `awaitComponent.md` | Await component: The Await component is a component that suspends until the provided promise is resolved or rejected. |
| `catchBoundaryComponent.md` | CatchBoundary component: The CatchBoundary component is a component that catches errors thrown by its children, renders an error component and... |
| `catchNotFoundComponent.md` | CatchNotFound Component: The CatchNotFound component is a component that catches not-found errors thrown by its children, renders a fallback... |
| `clientOnlyComponent.md` | ClientOnly Component: The ClientOnly component is used to render a component only in the client, without breaking the server-side rendering due to... |
| `createFileRouteFunction.md` | createFileRoute function: The createFileRoute function is a factory that can be used to create a file-based route instance. This route instance... |
| `createLazyFileRouteFunction.md` | createLazyFileRoute function: The createLazyFileRoute function is used for creating a partial file-based route instance that is lazily loaded when... |
| `createLazyRouteFunction.md` | createLazyRoute function: The createLazyRoute function is used for creating a partial code-based route instance that is lazily loaded when... |
| `createRootRouteFunction.md` | createRootRoute function: The createRootRoute function returns a new root route instance. A root route instance can then be used to create a... |
| `createRootRouteWithContextFunction.md` | createRootRouteWithContext function: The createRootRouteWithContext function is a helper function that can be used to create a root route instance... |
| `createRouteFunction.md` | createRoute function: The createRoute function implements returns a Route instance. A route instance can then be passed to a root route's children... |
| `createRouteMaskFunction.md` | createRouteMask function: The createRouteMask function is a helper function that can be used to create a route mask configuration that can be... |
| `createRouterFunction.md` | createRouter function: The createRouter function accepts a RouterOptions object and creates a new Router instance. |
| `defaultGlobalNotFoundComponent.md` | DefaultGlobalNotFound component: The DefaultGlobalNotFound component is a component that renders "Not Found" on the root route when there is no... |
| `deferFunction.md` | defer function: The defer function wraps a promise with a deferred state object that can be used to inspect the promise's state. This deferred... |
| `errorComponentComponent.md` | ErrorComponent component: The ErrorComponent component renders an error notice and optional details about the thrown value. |
| `FileRouteClass.md` | FileRoute class: The FileRoute class is a factory that can be used to create a file-based route instance. This route instance can then be used to... |
| `getRouteApiFunction.md` | getRouteApi function: The getRouteApi function provides type-safe version of common hooks like useParams, useSearch, useRouteContext, useNavigate,... |
| `historyStateInterface.md` | HistoryState interface: The HistoryState interface is an interface exported by the history package that describes the shape of the state object... |
| `isNotFoundFunction.md` | isNotFound function: The isNotFound function can be used to determine if an object is a NotFoundError object. |
| `isRedirectFunction.md` | isRedirect function: The isRedirect function can be used to determine if an object is a redirect object. |
| `lazyRouteComponentFunction.md` | lazyRouteComponent function: The lazyRouteComponent function can be used to create a one-off code-split route component that can be preloaded... |
| `linkComponent.md` | Link component: The Link component is a component that can be used to create a link that can be used to navigate to a new location. This includes... |
| `linkOptions.md` | Link options: linkOptions is a function which type checks an object literal with the intention of being used for Link, navigate or redirect |
| `LinkOptionsType.md` | LinkOptions type: The LinkOptions type extends the NavigateOptions type and contains additional options that can be used by TanStack Router when... |
| `LinkPropsType.md` | LinkProps type: The LinkProps type extends the ActiveLinkOptions and React.AnchorHTMLAttributes<HTMLAnchorElement> types and contains additional... |
| `matchRouteComponent.md` | MatchRoute component: A component version of the useMatchRoute hook. It accepts the same options as the useMatchRoute with additional props to aid... |
| `MatchRouteOptionsType.md` | MatchRouteOptions type: The MatchRouteOptions type is used to describe the options that can be used when matching a route. |
| `navigateComponent.md` | Navigate component: The Navigate component is a component that can be used to navigate to a new location when rendered. This includes changes to... |
| `NavigateOptionsType.md` | NavigateOptions type: The NavigateOptions type is used to describe the options that can be used when describing a navigation action in TanStack... |
| `notFoundComponentComponent.md` | NotFoundComponent component: The NotFoundComponent component is a component that renders when a not-found error occurs in a route. |
| `NotFoundErrorType.md` | NotFoundError: The NotFoundError type is used to represent a not-found error in TanStack Router. |
| `notFoundFunction.md` | notFound function: The notFound function returns a new NotFoundError object that can be either returned or thrown from places like a Route's... |
| `NotFoundRouteClass.md` | NotFoundRoute class: The NotFoundRoute class extends the Route class and can be used to create a not found route instance. A not found route... |
| `outletComponent.md` | Outlet component: The Outlet component is a component that can be used to render the next child route of a parent route. |
| `ParsedHistoryStateType.md` | ParsedHistoryState type: The ParsedHistoryState type represents a parsed state object. Additionally to HistoryState, it contains the index and the... |
| `ParsedLocationType.md` | ParsedLocation type: The ParsedLocation type represents a parsed location in TanStack Router. It contains a lot of useful information about the... |
| `redirectFunction.md` | redirect function: The redirect function returns a new Redirect object that can be either returned or thrown from places like a Route's beforeLoad... |
| `RedirectType.md` | Redirect type: The Redirect type is used to represent a redirect action in TanStack Router. |
| `RegisterType.md` | Register type: This type is used to register a route tree with a router instance. Doing so unlocks the full type safety of TanStack Router,... |
| `retainSearchParamsFunction.md` | Search middleware to retain search params: retainSearchParams is a search middleware that allows to keep search params. |
| `RootRouteClass.md` | RootRoute class: The RootRoute class extends the Route class and can be used to create a root route instance. A root route instance can then be... |
| `rootRouteWithContextFunction.md` | rootRouteWithContext function: The rootRouteWithContext function is a helper function that can be used to create a root route instance that... |
| `RouteApiClass.md` | RouteApi class: The RouteApi class provides type-safe version of common hooks like useParams, useSearch, useRouteContext, useNavigate,... |
| `RouteApiType.md` | RouteApi Type: The RouteApi describes an instance that provides type-safe versions of common hooks like useParams, useSearch, useRouteContext,... |
| `RouteClass.md` | Route class: The Route class implements the RouteApi class and can be used to create route instances. A route instance can then be used to create... |
| `RouteMaskType.md` | RouteMask type: The RouteMask type extends the ToOptions type and has other the necessary properties to create a route mask. |
| `RouteMatchType.md` | RouteMatch type: The RouteMatch type represents a route match in TanStack Router. |
| `RouteOptionsType.md` | RouteOptions type: The RouteOptions type is used to describe the options that can be used when creating a route. |
| `RouterClass.md` | Router Class: The Router class is used to instantiate a new router instance. |
| `RouterEventsType.md` | RouterEvents type: The RouterEvents type contains all of the events that the router can emit. Each top-level key of this type, represents the name... |
| `RouterOptionsType.md` | RouterOptions: The RouterOptions type contains all of the options that can be used to configure a router instance. |
| `RouterStateType.md` | RouterState type: The RouterState type represents the observable state of the router, including |
| `RouterType.md` | Router type: The Router type is used to describe a router instance. |
| `RouteType.md` | Route type: The Route type is used to describe a route instance. |
| `stripSearchParamsFunction.md` | Search middleware to strip search params: stripSearchParams is a search middleware that allows to remove search params. |
| `ToMaskOptionsType.md` | ToMaskOptions type: The ToMaskOptions type includes the same destination fields as ToOptions, excluding mask, and adds options specific to route... |
| `ToOptionsType.md` | ToOptions type: The ToOptions type contains several properties that can be used to describe a router destination, including mask for route masking. |
| `useAwaitedHook.md` | useAwaited hook: The useAwaited method is a hook that suspends until the provided promise is resolved or rejected. |
| `useBlockerHook.md` | useBlocker hook: The useBlocker method is a hook that blocks navigation when a condition is met. |
| `useCanGoBack.md` | useCanGoBack hook: The useCanGoBack hook returns a boolean representing if the router history can safely go back without exiting the application. |
| `useChildMatchesHook.md` | useChildMatches hook: The useChildMatches hook returns all of the child RouteMatch objects from the closest match down to the leaf-most match.... |
| `useLinkPropsHook.md` | useLinkProps hook: The useLinkProps hook that takes an object as its argument and returns a React.AnchorHTMLAttributes<HTMLAnchorElement> props... |
| `useLoaderDataHook.md` | useLoaderData hook: The useLoaderData hook returns the loader data from the closest RouteMatch in the component tree. |
| `useLoaderDepsHook.md` | useLoaderDeps hook: The useLoaderDeps hook is a hook that returns an object with the dependencies that are used to trigger the loader for a given... |
| `useLocationHook.md` | useLocation hook: The useLocation method is a hook that returns the current location object. This hook is useful for when you want to perform some... |
| `useMatchesHook.md` | useMatches hook: The useMatches hook returns the router's complete presented array of RouteMatch objects **regardless of its caller's position in... |
| `useMatchHook.md` | useMatch hook: The useMatch hook returns a RouteMatch in the component tree. The raw route match contains all of the information about a route... |
| `useMatchRouteHook.md` | useMatchRoute hook: The useMatchRoute hook returns a matchRoute function that can be used to match a route against either the current or pending... |
| `UseMatchRouteOptionsType.md` | UseMatchRouteOptions type: The UseMatchRouteOptions type extends the ToOptions type and describes additional options available when using the... |
| `useNavigateHook.md` | useNavigate hook: The useNavigate hook is a hook that returns a navigate function that can be used to navigate to a new location. This includes... |
| `useParamsHook.md` | useParams hook: The useParams method returns all of the path parameters that were parsed for the closest match and all of its parent matches. |
| `useParentMatchesHook.md` | useParentMatches hook: The useParentMatches hook returns all of the parent RouteMatch objects from the root down to the immediate parent of the... |
| `useRouteContextHook.md` | useRouteContext hook: The useRouteContext method is a hook that returns the current context for the current route. This hook is useful for... |
| `useRouterHook.md` | useRouter hook: The useRouter method is a hook that returns the current instance of Router from context. This hook is useful for accessing the... |
| `useRouterStateHook.md` | useRouterState hook: The useRouterState method is a hook that returns the current internal state of the router. This hook is useful for accessing... |
| `useSearchHook.md` | useSearch hook: The useSearch method is a hook that returns the current search query parameters as an object for the current location. This hook... |
| `ViewTransitionOptionsType.md` | ViewTransitionOptions type: The ViewTransitionOptions type is used to define a |

### router/eslint/ (2 files)

| File | Description |
|------|-------------|
| `create-route-property-order.md` | Ensure correct order of inference sensitive properties for createRoute functions: For the following functions, the property order of the passed in... |
| `eslint-plugin-router.md` | ESLint Plugin Router: TanStack Router comes with its own ESLint plugin. This plugin is used to enforce best practices and to help you avoid common... |

### router/guide/ (32 files)

| File | Description |
|------|-------------|
| `authenticated-routes.md` | Authenticated Routes: Authentication is an extremely common requirement for web applications. In this guide, we'll walk through how to use... |
| `automatic-code-splitting.md` | Automatic Code Splitting: The automatic code splitting feature in TanStack Router allows you to optimize your application's bundle size by lazily... |
| `code-splitting.md` | Code splitting and lazy loading is a powerful technique for improving the bundle size and load performance of an application. |
| `creating-a-router.md` | Creating a Router: When you're ready to start using your router, you'll need to create a new Router instance. The router instance is the core... |
| `custom-link.md` | Custom Link: While repeating yourself can be acceptable in many situations, you might find that you do it too often. At times, you may want to... |
| `custom-search-param-serialization.md` | Custom Search Param Serialization: By default, TanStack Router parses and serializes your URL Search Params automatically using JSON.stringify and... |
| `data-loading.md` | Data loading is a common concern for web applications and is related to routing. When loading a page for your app, it's ideal if all of the page's... |
| `data-mutations.md` | Data Mutations: TanStack Router caches route loader data, but it does not manage mutation or |
| `deferred-data-loading.md` | Deferred Data Loading: TanStack Router is designed to run loaders in parallel and wait for all of them to resolve before rendering the next route.... |
| `document-head-management.md` | Document head management is the process of managing the head, title, meta, link, and script tags of a document and TanStack Router provides a... |
| `external-data-loading.md` | External Data Loading: Router can coordinate loaders and an existing API without Start. If you also want an integrated server runtime and typed... |
| `history-types.md` | History Types: While it's not required to know the @tanstack/history API itself to use TanStack Router, it's a good idea to understand how it... |
| `internationalization-i18n.md` | Internationalization (i18n): TanStack Router provides flexible and highly customizable primitives that can be composed to support common... |
| `link-options.md` | Link Options: You may want to reuse options that are intended to be passed to Link, redirect or navigate. In which case you may decide an object... |
| `navigation-blocking.md` | Navigation blocking is a way to prevent navigation from happening. This is typical if a user attempts to navigate while they: |
| `navigation.md` | Navigation: Believe it or not, every navigation within an app is **relative**, even if you aren't using explicit relative path syntax... |
| `not-found-errors.md` | Not Found Errors: There are 2 uses for not-found errors in TanStack Router: |
| `outlets.md` | Outlets: Nested routing means that routes can be nested within other routes, including the way they render. So how do we tell our routes where to... |
| `parallel-routes.md` | Parallel Routes: We haven't covered this yet. Stay tuned! |
| `path-params.md` | Path params are used to match a single segment (the text until the next /) and provide its value back to you as a **named** variable. They are... |
| `preloading.md` | Preloading in TanStack Router is a way to load a route before the user actually navigates to it. This is useful for routes that are likely to be... |
| `render-optimizations.md` | Render Optimizations: TanStack Router includes several optimizations to ensure your components only re-render when necessary. These optimizations... |
| `route-masking.md` | Route masking is a way to mask the actual URL of a route that gets persisted to the browser's history and URL bar. This is useful for scenarios... |
| `router-context.md` | Router Context: TanStack Router's router context is a very powerful tool that can be used for dependency injection among many other things. Aptly... |
| `router-events.md` | Router Events: TanStack Router exposes router lifecycle events through router.subscribe. This is useful for imperative side effects like... |
| `scroll-restoration.md` | Scroll Restoration: Out of the box, TanStack Router supports both **hash scrolling** and **top-of-page scrolling** without any additional... |
| `search-params.md` | Search Params: Similar to how TanStack Query made handling server-state in your React and Solid applications a breeze, TanStack Router aims to... |
| `ssr.md` | SSR: Server Side Rendering (SSR) is the process of rendering a component on the server and sending the HTML markup to the client. The client then... |
| `static-route-data.md` | Static Route Data: When creating routes, you can optionally specify a staticData property in the route's options. This object can literally... |
| `type-safety.md` | Type Safety: TanStack Router is built to be as type-safe as possible within the limits of the TypeScript compiler and runtime. This means that... |
| `type-utilities.md` | Type Utilities: Most types exposed by TanStack Router are internal, subject to breaking changes and not always easy to use. That is why TanStack... |
| `url-rewrites.md` | URL rewrites allow you to transform URLs bidirectionally between what the browser displays and what the router interprets internally. This... |

### router/how-to/ (20 files)

| File | Description |
|------|-------------|
| `arrays-objects-dates-search-params.md` | Work with Arrays, Objects, and Dates in Search Parameters: Learn to handle arrays, objects, dates, and nested data structures in search parameters... |
| `debug-router-issues.md` | How to Debug Common Router Issues: This guide covers debugging common TanStack Router problems, from route matching failures to navigation issues... |
| `deploy-to-production.md` | How to Deploy TanStack Router to Production: This guide covers deploying TanStack Router applications to popular hosting platforms. |
| `install.md` | How to Install TanStack Router: 1. **Install the package** |
| `integrate-chakra-ui.md` | How to Integrate TanStack Router with Chakra UI: This guide covers setting up Chakra UI with TanStack Router, including theme configuration and... |
| `integrate-framer-motion.md` | How to Integrate TanStack Router with Framer Motion: This guide covers setting up Framer Motion with TanStack Router for smooth route transitions... |
| `integrate-material-ui.md` | How to Integrate TanStack Router with Material-UI (MUI): This guide covers setting up Material-UI with TanStack Router, including proper... |
| `integrate-shadcn-ui.md` | How to Integrate TanStack Router with Shadcn/ui: This guide covers setting up Shadcn/ui with TanStack Router, including solutions for common... |
| `migrate-from-react-router.md` | How to Migrate from React Router v7: This guide provides a step-by-step process to migrate your application from React Router v7 to TanStack... |
| `navigate-with-search-params.md` | How to Navigate with Search Parameters: This guide covers updating and managing search parameters during navigation using TanStack Router's Link... |
| `setup-auth-providers.md` | How to Set Up Authentication Providers: This guide covers integrating popular authentication services (Auth0, Clerk, Supabase) with TanStack Router. |
| `setup-authentication.md` | How to Set Up Basic Authentication and Protected Routes: This guide covers implementing basic authentication patterns and protecting routes in... |
| `setup-basic-search-params.md` | How to Set Up Basic Search Parameters: Learn how to add type-safe, production-ready search parameters to your TanStack Router routes using schema... |
| `setup-rbac.md` | How to Set Up Role-Based Access Control: This guide covers implementing role-based access control (RBAC) and permission-based routing in TanStack... |
| `setup-ssr.md` | How to Set Up Server-Side Rendering (SSR): For better performance, enable streaming SSR by replacing renderRouterToString with renderRouterToStream: |
| `setup-testing.md` | How to Set Up Testing with Code-Based Routing: This guide covers setting up comprehensive testing for TanStack Router applications that use... |
| `share-search-params-across-routes.md` | Share Search Parameters Across Routes: Search parameters automatically inherit from parent routes in TanStack Router. When a parent route... |
| `test-file-based-routing.md` | How to Test Router with File-Based Routing: This guide covers testing TanStack Router applications that use file-based routing, including testing... |
| `use-environment-variables.md` | How to Use Environment Variables: Learn how to configure and use environment variables in your TanStack Router application for API endpoints,... |
| `validate-search-params.md` | Validate Search Parameters with Schemas: Learn how to add robust schema validation to your search parameters using popular validation libraries... |

### router/installation/ (8 files)

| File | Description |
|------|-------------|
| `manual.md` | Manual Setup: To set up TanStack Router manually in a React project, follow the steps below. This gives you a bare minimum setup to get going with... |
| `migrate-from-react-location.md` | Migration from React Location: Before you begin your journey in migrating from React Location, it's important that you have a good understanding... |
| `migrate-from-react-router.md` | Migration from React Router Checklist: Here is the example repo |
| `with-esbuild.md` | Installation with Esbuild: To use file-based routing with **Esbuild**, you'll need to install the @tanstack/router-plugin package. |
| `with-router-cli.md` | Installation with Router CLI: To use file-based routing with the TanStack Router CLI, you'll need to install the @tanstack/router-cli package. |
| `with-rspack.md` | Installation with Rspack: To use file-based routing with **Rspack** or **Rsbuild**, you'll need to install the @tanstack/router-plugin package. |
| `with-vite.md` | Installation with Vite: To use file-based routing with **Vite**, you'll need to install the @tanstack/router-plugin package. |
| `with-webpack.md` | Installation with Webpack: To use file-based routing with **Webpack**, you'll need to install the @tanstack/router-plugin package. |

### router/integrations/ (1 files)

| File | Description |
|------|-------------|
| `query.md` | TanStack Query Integration: The TanStack query integration is a separate package that you need to install: |

### router/routing/ (7 files)

| File | Description |
|------|-------------|
| `code-based-routing.md` | Code-based routing is no different from file-based routing in that it uses the same route tree concept to organize, match and compose matching... |
| `file-based-routing.md` | File-Based Routing: Most of the TanStack Router documentation is written for file-based routing and is intended to help you understand in more... |
| `file-naming-conventions.md` | File Naming Conventions: File-based routing requires that you follow a few simple file naming conventions to ensure that your routes are generated... |
| `route-matching.md` | Route matching follows a consistent and predictable pattern. This guide will explain how route trees are matched. |
| `route-trees.md` | Route Trees: TanStack Router uses a nested route tree to match up the URL with the correct component tree to render. |
| `routing-concepts.md` | Routing Concepts: TanStack Router supports a number of powerful routing concepts that allow you to build complex and dynamic routing systems with... |
| `virtual-file-routes.md` | Virtual file routes are a powerful concept that allows you to build a route tree programmatically using code that references real files in your... |

### start/eslint/ (3 files)

| File | Description |
|------|-------------|
| `eslint-plugin-start.md` | ESLint Plugin Start: TanStack Start comes with its own ESLint plugin. This plugin is used to enforce best practices and help you avoid common... |
| `no-async-client-component.md` | Disallow async components in client context: Async React components are only valid within React Server Components. |
| `no-client-code-in-server-component.md` | Disallow client-only code in server components: TanStack Start defines React Server Component boundaries via RSC helpers like... |

### start/framework/react/ (7 files)

| File | Description |
|------|-------------|
| `build-from-scratch.md` | Build a Project from Scratch: _So you want to build a TanStack Start project from scratch?_ |
| `comparison.md` | Comparison / TanStack Start vs Next.js vs React Router: Compare rendering, server APIs, caching, forms, and deployment in TanStack Start, Next.js... |
| `getting-started.md` | Getting Started: Create a TanStack Start application with TanStack Builder, the CLI, or a working example, then run it locally and start adding... |
| `migrate-from-next-js.md` | Migrate from Next.js: Move a Next.js App Router application to TanStack Start while preserving routes, metadata, authentication, mutations, and... |
| `migrate-from-release-candidate.md` | Migrate from the Release Candidate: Upgrade a TanStack Start release-candidate app to the first stable release, 1.169. |
| `overview.md` | TanStack Start Overview: Build full-stack React applications with TanStack Start, including server rendering, streaming, server functions, and... |
| `start-vs-nextjs.md` | TanStack Start vs Next.js: Compare TanStack Start and Next.js for routing, rendering, server functions, caching, deployment, and the work each... |

### start/framework/react/guide/ (37 files)

| File | Description |
|------|-------------|
| `authentication-overview.md` | Choose Authentication for React Apps: Compare hosted services, auth libraries, and custom authentication for React apps built with TanStack Start.... |
| `authentication-server-primitives.md` | Authentication Server Primitives: This guide covers the **server-side primitives** for building authentication in TanStack Start: session cookies,... |
| `authentication.md` | Implement Authentication in React: Implement sessions, sign-in, sign-out, protected routes, and server-side authorization in a TanStack Start... |
| `cdn-asset-urls.md` | CDN Asset URLs: Use this guide when you need TanStack Start to rewrite manifest-managed asset URLs at runtime. The most common use case is serving... |
| `client-entry-point.md` | Client Entry Point: Getting our html to the client is only half the battle. Once there, we need to hydrate our client-side JavaScript once the... |
| `code-execution-patterns.md` | Code Execution Patterns: This guide covers patterns for controlling where code runs in your TanStack Start application - server-only, client-only,... |
| `css-styling.md` | CSS Styling: TanStack Start supports the CSS patterns your bundler supports, and adds SSR-aware route asset discovery on top. |
| `databases.md` | Databases: Connect a database to TanStack Start through server functions and server routes, and compare supported database providers. |
| `deferred-hydration.md` | Deferred Hydration: On an initial page load, TanStack Start server-renders your page so the browser |
| `early-hints.md` | Early Hints: HTTP 103 Early Hints lets your server tell the browser about important resources before the final HTML response is ready. TanStack... |
| `environment-functions.md` | Environment functions are utilities designed to define and control function execution based on the runtime environment—whether the code is running... |
| `environment-variables.md` | Environment Variables: Learn how to securely configure and use environment variables in your TanStack Start application across different contexts... |
| `error-boundaries.md` | Error Boundaries: TanStack Start uses TanStack Router's route-level error boundaries. |
| `execution-model.md` | Execution Model: Understanding where code runs is fundamental to building TanStack Start applications. This guide explains TanStack Start's... |
| `geo.md` | Generative Engine Optimization (GEO): While traditional SEO focuses on ranking in search engine results pages, GEO focuses on being accurately... |
| `hosting.md` | Hosting: Deploy TanStack Start with Vite or Rsbuild using hosting guides for Cloudflare, Netlify, Railway, Vercel, Node.js, and other runtimes. |
| `hydration-errors.md` | Hydration Errors: See also: Execution Model, Code Execution Patterns, Selective SSR, Server Functions |
| `import-protection.md` | Import protection prevents server-only code from leaking into client bundles and client-only code from leaking into server bundles. It runs inside... |
| `isr.md` | Incremental Static Regeneration (ISR) allows you to serve statically generated content from a CDN while periodically regenerating it in the... |
| `middleware.md` | Middleware allows you to customize the behavior of both server routes like GET/POST/etc (including requests to SSR your application) and server... |
| `observability.md` | Observability is a critical aspect of modern web development, enabling you to monitor, trace, and debug your application's performance and errors.... |
| `path-aliases.md` | Path aliases are a useful feature of TypeScript that allows you to define a shortcut for a path that could be distant in your project's directory... |
| `production-checklist.md` | Production Checklist: Check a TanStack Start production build for secret exposure, authorization, cache isolation, HTTP status codes, SEO, assets,... |
| `rendering-markdown.md` | Rendering Markdown: Use TanStack Markdown to render Markdown in your TanStack Start application. Its React renderer works synchronously during... |
| `routing.md` | Routing: TanStack Start is built on top of TanStack Router, so all of the features of TanStack Router are available to you. |
| `selective-ssr.md` | Selective Server-Side Rendering (SSR): In TanStack Start, routes matching the initial request are rendered on the server by default. This means... |
| `seo.md` | SEO: Configure SEO in TanStack Start with page metadata, canonical URLs, structured data, server rendering, sitemaps, and robots.txt. |
| `server-components.md` | Server Components let you render React components on the server and stream them to the client. Heavy dependencies stay out of your bundle, data... |
| `server-entry-point.md` | Server Entry Point: The Server Entry Point supports the universal fetch handler format, commonly used by Cloudflare Workers and other... |
| `server-functions.md` | Server functions let you define server-only logic that can be called from anywhere in your application - loaders, components, hooks, or other... |
| `server-routes.md` | Server routes are a powerful feature of TanStack Start that allow you to create server-side endpoints in your application and are useful for... |
| `spa-mode.md` | SPA mode: For applications that do not require SSR for either SEO, crawlers, or performance reasons, it may be desirable to ship static HTML to... |
| `static-prerendering.md` | Static prerendering is the process of generating static HTML files for your application. This can be useful for either improving the performance... |
| `static-server-functions.md` | Static server functions are server functions that are executed at build time and cached as static assets when using... |
| `streaming-data-from-server-functions.md` | Streaming Data from Server Functions: Streaming data from the server has become very popular thanks to the rise of AI apps. Luckily, it's a pretty... |
| `tailwind-integration.md` | Tailwind CSS Integration: _So you want to use Tailwind CSS in your TanStack Start project?_ |
| `tanstack-query.md` | TanStack Query: Use TanStack Query with TanStack Start for request-isolated SSR, hydration, route preloading, streaming, and mutation invalidation. |

### start/framework/react/tutorial/ (2 files)

| File | Description |
|------|-------------|
| `fetching-external-api.md` | Calling an external API using TanStack Start: This guide demonstrates how to integrate external API calls into your TanStack Start application... |
| `reading-writing-file.md` | Building a Full Stack DevJokes App with TanStack Start: This tutorial will guide you through building a complete full-stack application using... |

### start/framework/solid/ (2 files)

| File | Description |
|------|-------------|
| `build-from-scratch.md` | Build a Project from Scratch: _So you want to build a TanStack Start project from scratch?_ |
| `getting-started.md` | Getting Started: The best way to get started with TanStack Start is TanStack Builder. It's the AI-first setup flow and the easiest way to get to a... |

### start/framework/solid/guide/ (9 files)

| File | Description |
|------|-------------|
| `authentication.md` | Implement Authentication in SolidJS: Implement sessions, sign-in, sign-out, protected routes, and server-side authorization in a TanStack Start... |
| `client-entry-point.md` | Client Entry Point: Getting our html to the client is only half the battle. Once there, we need to hydrate our client-side JavaScript once the... |
| `code-execution-patterns.md` | Code Execution Patterns: This guide covers patterns for controlling where code runs in your TanStack Start application - server-only, client-only,... |
| `execution-model.md` | Execution Model: Understanding where code runs is fundamental to building TanStack Start applications. This guide explains TanStack Start's... |
| `hydration-errors.md` | Hydration Errors: See also: Execution Model, Code Execution Patterns, Selective SSR, Server Functions |
| `observability.md` | Observability is a critical aspect of modern web development, enabling you to monitor, trace, and debug your application's performance and errors.... |
| `routing.md` | Routing: TanStack Start is built on top of TanStack Router, so all of the features of TanStack Router are available to you. |
| `selective-ssr.md` | Selective Server-Side Rendering (SSR): In TanStack Start, routes matching the initial request are rendered on the server by default. This means... |
| `static-prerendering.md` | Static prerendering is the process of generating static HTML files for your application. This can be useful for either improving the performance... |

### start/framework/solid/tutorial/ (1 files)

| File | Description |
|------|-------------|
| `reading-writing-file.md` | Building a Full Stack DevJokes App with TanStack Start: This tutorial will guide you through building a complete full-stack application using... |
