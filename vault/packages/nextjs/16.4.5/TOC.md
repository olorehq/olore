# Next.js 16.4.5 Table of Contents

## Directory Map

```
contents/
├── 01-app/  # App Router docs (291 files)
│   ├── 01-getting-started/  (19 files)
│   ├── 02-guides/  (78 files)
│   ├── 03-api-reference/  (192 files)
├── 02-pages/  # Pages Router docs (160 files)
│   ├── 01-getting-started/  (6 files)
│   ├── 02-guides/  (47 files)
│   ├── 03-building-your-application/  (20 files)
│   ├── 04-api-reference/  (86 files)
├── 03-architecture/  # Architecture (accessibility, browser support, Fast Refresh, compiler) (4 files)
├── 04-community/  # Community (1 files)
└── index.mdx  # Docs root
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New project setup | `contents/01-app/01-getting-started/01-installation.mdx` |
| App Router concepts | `contents/01-app/01-getting-started/` |
| Pages Router concepts | `contents/02-pages/01-getting-started/` |
| File conventions | `contents/01-app/03-api-reference/03-file-conventions/` |
| Functions API | `contents/01-app/03-api-reference/04-functions/` |
| next.config.js | `contents/01-app/03-api-reference/05-config/01-next-config-js/` |
| Guides | `contents/01-app/02-guides/` |

## Detailed Structure

### ./ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Welcome to the Next.js Documentation. |

### 01-app/ (2 files)

| File | Description |
|------|-------------|
| `04-glossary.mdx` | A glossary of common terms used in Next.js. |
| `index.mdx` | The App Router is a file-system based router that uses React's latest features such as Server Components, Suspense, Server Functions, and more. |

### 01-app/01-getting-started/ (19 files)

| File | Description |
|------|-------------|
| `01-installation.mdx` | Learn how to create a new Next.js application with the `create-next-app` CLI, and set up TypeScript, ESLint, and Module Path Aliases. |
| `02-project-structure.mdx` | Learn the folder and file conventions in Next.js, and how to organize your project. |
| `03-layouts-and-pages.mdx` | Learn how to create your first pages and layouts, and link between them with the Link component. |
| `04-linking-and-navigating.mdx` | Learn how the built-in navigation optimizations work, including prefetching, prerendering, and client-side navigation, and how to optimize navigation for... |
| `05-server-and-client-components.mdx` | Learn how you can use React Server and Client Components to render parts of your application on the server or the client. |
| `06-fetching-data.mdx` | Learn how to fetch data and stream content that depends on data. |
| `07-mutating-data.mdx` | Learn how to mutate data using Server Functions and Server Actions in Next.js. |
| `08-caching.mdx` | Learn how to cache data and UI in Next.js |
| `09-revalidating.mdx` | Learn how to revalidate cached data using time-based and on-demand strategies. |
| `10-error-handling.mdx` | Learn how to display expected errors and handle uncaught exceptions. |
| `11-css.mdx` | Learn about the different ways to add CSS to your application, including Tailwind CSS, CSS Modules, Global CSS, and more. |
| `12-images.mdx` | Learn how to optimize images in Next.js |
| `13-fonts.mdx` | Learn how to optimize fonts in Next.js |
| `14-metadata-and-og-images.mdx` | Learn how to add metadata to your pages and create dynamic OG images. |
| `15-route-handlers.mdx` | Create custom request handlers with Next.js Route Handlers using the Web Request and Response APIs. |
| `16-proxy.mdx` | Use Next.js Proxy to rewrite, redirect, modify headers, or respond directly before a request completes. |
| `17-deploying.mdx` | Learn how to deploy your Next.js application. |
| `18-upgrading.mdx` | Learn how to upgrade your Next.js application to the latest version or canary. |
| `index.mdx` | Learn how to create full-stack web applications with the Next.js App Router. |

### 01-app/02-guides/ (62 files)

| File | Description |
|------|-------------|
| `adopting-partial-prefetching.mdx` | Learn how to enable Partial Prefetching and what changes for . |
| `ai-agents.mdx` | Learn how Next.js helps AI coding agents use current framework guidance, inspect applications, verify changes, and report issues. |
| `analytics.mdx` | Measure and track page performance using Next.js Speed Insights |
| `authentication-with-cache-components.mdx` | Learn how to read the user session, show authenticated UI without slowing down the page, and cache data derived from the session when Cache Components is... |
| `authentication.mdx` | Learn how to implement authentication in your Next.js application. |
| `backend-for-frontend.mdx` | Learn how to use Next.js as a backend framework |
| `building.mdx` | Learn what happens when you run next build and how to read the build output. |
| `caching-without-cache-components.mdx` | Learn how to cache and revalidate data using fetch options, unstable_cache, and route segment configs for projects not using Cache Components. |
| `cdn-caching.mdx` | Learn how CDN caching works with Next.js, including what works today, cache variability, and the direction toward pathname-based cache keying. |
| `ci-build-caching.mdx` | Learn how to configure CI to cache Next.js builds |
| `content-security-policy.mdx` | Learn how to set a Content Security Policy (CSP) for your Next.js application. |
| `css-in-js.mdx` | Use CSS-in-JS libraries with Next.js |
| `custom-server.mdx` | Start a Next.js app programmatically using a custom server. |
| `data-security.mdx` | Learn the built-in data security features in Next.js and learn best practices for protecting your application's data. |
| `debugging.mdx` | Learn how to debug your Next.js application with VS Code, Chrome DevTools, or Firefox DevTools. |
| `deploying-to-platforms.mdx` | Understand which Next.js features require specific platform capabilities and how to choose the right deployment target. |
| `draft-mode.mdx` | Bypass Next.js caching for a request so editors can preview unpublished content from a headless CMS. |
| `environment-variables.mdx` | Learn to add and access environment variables in your Next.js application. |
| `forms.mdx` | Learn how to create forms in Next.js with React Server Actions. |
| `how-revalidation-works.mdx` | A deep dive into how Next.js revalidates cached content, including the tag system, cache consistency, and multi-instance coordination. |
| `incremental-static-regeneration-cache-components.mdx` | Learn how to prerender a subset of dynamic routes, serve App Shells for the rest, and upgrade them after the first visit. |
| `incremental-static-regeneration.mdx` | Learn how to create or update static pages at runtime with Incremental Static Regeneration. |
| `instant-navigation.mdx` | Learn how to structure your app to prefetch and prerender more content, providing instant page loads and client navigations. |
| `instrumentation.mdx` | Learn how to use instrumentation to run code at server startup in your Next.js app |
| `interactive-apps.mdx` | Learn how to build responsive interactions with Server Functions, transitions, optimistic UI, and pending feedback. |
| `internationalization.mdx` | Add support for multiple languages with internationalized routing and localized content. |
| `json-ld.mdx` | Learn how to add JSON-LD to your Next.js application to describe your content to search engines and AI. |
| `keeping-pages-static.mdx` | Keep selected route output static as your app changes. |
| `lazy-loading.mdx` | Lazy load imported libraries and React Components to improve your application's loading performance. |
| `local-development.mdx` | Learn how to optimize your local development environment with Next.js. |
| `mcp.mdx` | Learn how to give coding agents access to your running Next.js app through the built-in MCP endpoint. |
| `mdx.mdx` | Learn how to configure MDX and use it in your Next.js apps. |
| `memory-usage.mdx` | Optimize memory used by your application in development and production. |
| `migrating-to-cache-components.mdx` | Learn how to migrate from route segment configs to Cache Components in Next.js. |
| `multi-tenant.mdx` | Learn how to build multi-tenant apps with the App Router. |
| `multi-zones.mdx` | Learn how to build micro-frontends using Next.js Multi-Zones to deploy multiple Next.js apps under a single domain. |
| `offline-support.mdx` | How a Next.js app can recover when the network drops mid-fetch or mid-Server Action, and how to communicate that state to the user. |
| `open-telemetry.mdx` | Learn how to instrument your Next.js app with OpenTelemetry. |
| `optimizing-prefetching.mdx` | Resolve per-link URL data, include session data in the App Shell, or defer expensive work to a later navigation stage. |
| `optimizing-the-static-shell.mdx` | Learn how to use Cache Components to keep layouts, navigation, and useful loading states available while request-time content streams. |
| `package-bundling.mdx` | Learn how to analyze and optimize your application's server and client bundles with the Next.js Bundle Analyzer for Turbopack, and the... |
| `ppr-platform-guide.mdx` | A guide for platform engineers on implementing PPR support, from basic origin rendering to optimized CDN integration. |
| `prefetching.mdx` | Learn how to configure prefetching in Next.js |
| `preserving-ui-state.mdx` | Learn how React's Activity component preserves UI state across navigations in Next.js and how to control what resets. |
| `preventing-flash-before-hydration.mdx` | Learn how to correct server-rendered content before the browser paints, avoiding visible flash when the page hydrates. |
| `production-checklist.mdx` | Recommendations to ensure the best performance and user experience before taking your Next.js application to production. |
| `progressive-web-apps.mdx` | Learn how to build a Progressive Web Application (PWA) with Next.js. |
| `public-static-pages.mdx` | Learn how to build public, "static" pages that share data across users, such as landing pages, list pages (products, blogs, etc.), marketing and news sites. |
| `redirecting.mdx` | Learn the different ways to handle redirects in Next.js. |
| `rendering-philosophy.mdx` | Learn how Next.js treats static and dynamic rendering as a spectrum at the component level, and what this means for deployment. |
| `sass.mdx` | Style your Next.js application using Sass. |
| `scripts.mdx` | Optimize 3rd party scripts with the built-in Script component. |
| `self-hosting.mdx` | Learn how to self-host your Next.js application on a Node.js server, Docker image, or static HTML files (static exports). |
| `server-actions.mdx` | How Server Actions work in Next.js, including the single-roundtrip response model, sequential dispatch, security, and caching integration. |
| `server-and-client-boundary.mdx` | Learn where Server and Client Components run in the App Router and how the boundary between them works. |
| `single-page-applications.mdx` | Next.js fully supports building Single-Page Applications (SPAs). |
| `static-exports.mdx` | Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server. |
| `streaming.mdx` | Learn how streaming works in Next.js and how to use it to progressively render UI as data becomes available. |
| `tailwind-v3-css.mdx` | Style your Next.js Application using Tailwind CSS v3 for broader browser support. |
| `third-party-libraries.mdx` | Optimize the performance of third-party libraries in your application with the `@next/third-parties` package. |
| `videos.mdx` | Recommendations and best practices for optimizing videos in your Next.js application. |
| `view-transitions.mdx` | Learn how to use view transitions to communicate meaning during navigation, loading, and content changes in a Next.js app. |

### 01-app/02-guides/client-side-data-fetching/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Fetch data in Client Components with a data-fetching library, optionally provide initial data from a Server Component, and coordinate server and client caches. |
| `swr.mdx` | Fetch client-side data with SWR, optionally provide initial data from a Server Component, and coordinate server and client caches. |
| `tanstack-query.mdx` | Fetch client-side data with TanStack Query, optionally provide initial data from a Server Component, and coordinate server and client caches. |

### 01-app/02-guides/migrating/ (3 files)

| File | Description |
|------|-------------|
| `app-router-migration.mdx` | Learn how to upgrade your existing Next.js application from the Pages Router to the App Router. |
| `from-create-react-app.mdx` | Learn how to migrate your existing React application from Create React App to Next.js. |
| `from-vite.mdx` | Learn how to migrate your existing React application from Vite to Next.js. |

### 01-app/02-guides/testing/ (5 files)

| File | Description |
|------|-------------|
| `cypress.mdx` | Learn how to set up Cypress with Next.js for End-to-End (E2E) and Component Testing. |
| `index.mdx` | Learn how to set up Next.js with four commonly used testing tools — Cypress, Playwright, Vitest, and Jest. |
| `jest.mdx` | Learn how to set up Jest with Next.js for Unit Testing and Snapshot Testing. |
| `playwright.mdx` | Learn how to set up Playwright with Next.js for End-to-End (E2E) Testing. |
| `vitest.mdx` | Learn how to set up Vitest with Next.js for Unit Testing. |

### 01-app/02-guides/upgrading/ (5 files)

| File | Description |
|------|-------------|
| `agent-upgrade.mdx` | Use a coding agent to upgrade and verify a Next.js app. |
| `codemods.mdx` | Use codemods to upgrade your Next.js codebase when new features are released. |
| `version-14.mdx` | Upgrade your Next.js Application from Version 13 to 14. |
| `version-15.mdx` | Upgrade your Next.js Application from Version 14 to 15. |
| `version-16.mdx` | Upgrade your Next.js Application from Version 15 to 16. |

### 01-app/03-api-reference/ (2 files)

| File | Description |
|------|-------------|
| `07-edge.mdx` | API Reference for the Edge Runtime. |
| `08-turbopack.mdx` | Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js. |

### 01-app/03-api-reference/01-directives/ (6 files)

| File | Description |
|------|-------------|
| `index.mdx` | Learn how React and Next.js directives define client entry points, Server Functions, and cached output. |
| `use-cache-private.mdx` | Learn how to use the "use cache: private" directive to cache functions that access runtime request APIs. |
| `use-cache-remote.mdx` | Learn how to use the "use cache: remote" directive for persistent, shared caching using remote cache handlers. |
| `use-cache.mdx` | Learn how to use the "use cache" directive to cache data in your Next.js application. |
| `use-client.mdx` | Learn how to use the use client directive to render a component on the client. |
| `use-server.mdx` | Learn how to use the use server directive to execute code on the server. |

### 01-app/03-api-reference/02-components/ (6 files)

| File | Description |
|------|-------------|
| `font.mdx` | Optimizing loading web fonts with the built-in `next/font` loaders. |
| `form.mdx` | Learn how to use the component to handle form submissions and search params updates with client-side navigation. |
| `image.mdx` | Optimize Images in your Next.js Application using the built-in `next/image` Component. |
| `index.mdx` | API Reference for Next.js built-in components. |
| `link.mdx` | Enable fast client-side navigation with the built-in `next/link` component. |
| `script.mdx` | Optimize third-party scripts in your Next.js application using the built-in `next/script` Component. |

### 01-app/03-api-reference/03-file-conventions/ (21 files)

| File | Description |
|------|-------------|
| `default.mdx` | API Reference for the default.js file. |
| `dynamic-routes.mdx` | Use Dynamic Segments to read URL path params and generate routes from dynamic data. |
| `error.mdx` | API reference for the error.js special file. |
| `forbidden.mdx` | API reference for the forbidden.js special file. |
| `instrumentation-client.mdx` | Learn how to add client-side instrumentation to track and monitor your Next.js application's frontend performance. |
| `instrumentation.mdx` | API reference for the instrumentation.js file. |
| `intercepting-routes.mdx` | Use intercepting routes to load a new route within the current layout while masking the browser URL, useful for advanced routing patterns such as modals. |
| `layout.mdx` | API reference for the layout.js file. |
| `loading.mdx` | API reference for the loading.js file. |
| `mdx-components.mdx` | API reference for the mdx-components.js file. |
| `middleware.mdx` | API reference for the middleware.js file (deprecated, renamed to proxy.js). |
| `not-found.mdx` | API reference for the not-found.js file. |
| `page.mdx` | API reference for the page.js file. |
| `parallel-routes.mdx` | Simultaneously render one or more pages in the same view that can be navigated independently. A pattern for highly dynamic applications. |
| `proxy.mdx` | API reference for the proxy.js file. |
| `public-folder.mdx` | Next.js allows you to serve static files, like images, in the public directory. You can learn how it works here. |
| `route-groups.mdx` | Route Groups can be used to partition your Next.js application into different sections. |
| `route.mdx` | API reference for the route.js special file. |
| `src-folder.mdx` | Save pages under the `src` folder as an alternative to the root `pages` directory. |
| `template.mdx` | API Reference for the template.js file. |
| `unauthorized.mdx` | API reference for the unauthorized.js special file. |

### 01-app/03-api-reference/03-file-conventions/01-metadata/ (6 files)

| File | Description |
|------|-------------|
| `app-icons.mdx` | API Reference for the Favicon, Icon and Apple Icon file conventions. |
| `index.mdx` | API documentation for the metadata file conventions. |
| `manifest.mdx` | API Reference for manifest.json file. |
| `opengraph-image.mdx` | API Reference for the Open Graph Image and Twitter Image file conventions. |
| `robots.mdx` | API Reference for robots.txt file. |
| `sitemap.mdx` | API Reference for the sitemap.xml file. |

### 01-app/03-api-reference/03-file-conventions/02-route-segment-config/ (8 files)

| File | Description |
|------|-------------|
| `dynamicParams.mdx` | API reference for the dynamicParams route segment config option. |
| `ensureStatic.mdx` | Require selected route output to remain static instead of rendering per request with the ensureStatic route segment config. |
| `index.mdx` | Learn about how to configure options for Next.js route segments. |
| `instant.mdx` | Configure instant navigation validation for a route segment. |
| `maxDuration.mdx` | API reference for the maxDuration route segment config option. |
| `preferredRegion.mdx` | API reference for the preferredRegion route segment config option. |
| `prefetch.mdx` | Configure how a route segment is prefetched during client navigation. |
| `runtime.mdx` | API reference for the runtime route segment config option. |

### 01-app/03-api-reference/04-functions/ (44 files)

| File | Description |
|------|-------------|
| `after.mdx` | API Reference for the after function. |
| `cacheLife.mdx` | Learn how to use the cacheLife function to set the cache expiration time for a cached function or component. |
| `cacheTag.mdx` | Learn how to use the cacheTag function to manage cache invalidation in your Next.js application. |
| `catchError.mdx` | API Reference for the catchError function. |
| `connection.mdx` | API Reference for the connection function. |
| `cookies.mdx` | API Reference for the cookies function. |
| `draft-mode.mdx` | API Reference for the draftMode function. |
| `fetch.mdx` | API reference for the extended fetch function. |
| `forbidden.mdx` | API Reference for the forbidden function. |
| `generate-image-metadata.mdx` | Learn how to generate multiple images in a single Metadata API special file. |
| `generate-metadata.mdx` | Learn how to add Metadata to your Next.js application for improved search engine optimization (SEO) and web shareability. |
| `generate-sitemaps.mdx` | Learn how to use the generateSitemaps function to create multiple sitemaps for your application. |
| `generate-static-params.mdx` | API reference for the generateStaticParams function. |
| `generate-viewport.mdx` | API Reference for the generateViewport function. |
| `headers.mdx` | API reference for the headers function. |
| `image-response.mdx` | API Reference for the ImageResponse constructor. |
| `index.mdx` | API Reference for Next.js Functions and Hooks. |
| `io.mdx` | API Reference for the io function. |
| `navigation.mdx` | Defer runtime work until the user navigates with the navigation function. |
| `next-request.mdx` | API Reference for NextRequest. |
| `next-response.mdx` | API Reference for NextResponse. |
| `next-root-params.mdx` | API Reference for the next/root-params module that provides access to root-level route parameters. |
| `not-found.mdx` | API Reference for the notFound function. |
| `permanentRedirect.mdx` | API Reference for the permanentRedirect function. |
| `prefetch.mdx` | Defer runtime work until a per-link prefetch or navigation with the prefetch function. |
| `redirect.mdx` | API Reference for the redirect function. |
| `refresh.mdx` | API Reference for the refresh function. |
| `revalidatePath.mdx` | API Reference for the revalidatePath function. |
| `revalidateTag.mdx` | API Reference for the revalidateTag function. |
| `unauthorized.mdx` | API Reference for the unauthorized function. |
| `unstable_cache.mdx` | API Reference for the unstable_cache function. |
| `unstable_noStore.mdx` | API Reference for the unstable_noStore function. |
| `unstable_rethrow.mdx` | API Reference for the unstable_rethrow function. |
| `updateTag.mdx` | API Reference for the updateTag function. |
| `use-link-status.mdx` | API Reference for the useLinkStatus hook. |
| `use-offline.mdx` | API Reference for the useOffline hook. |
| `use-params.mdx` | API Reference for the useParams hook. |
| `use-pathname.mdx` | API Reference for the usePathname hook. |
| `use-report-web-vitals.mdx` | API Reference for the useReportWebVitals function. |
| `use-router.mdx` | API reference for the useRouter hook. |
| `use-search-params.mdx` | API Reference for the useSearchParams hook. |
| `use-selected-layout-segment.mdx` | API Reference for the useSelectedLayoutSegment hook. |
| `use-selected-layout-segments.mdx` | API Reference for the useSelectedLayoutSegments hook. |
| `userAgent.mdx` | The userAgent helper extends the Web Request API with additional properties and methods to interact with the user agent object from the request. |

### 01-app/03-api-reference/05-config/ (2 files)

| File | Description |
|------|-------------|
| `02-typescript.mdx` | Next.js provides a TypeScript-first development experience for building your React application. |
| `03-eslint.mdx` | Learn how to use and configure the ESLint plugin to catch common issues and problems in a Next.js application. |

### 01-app/03-api-reference/05-config/01-next-config-js/ (82 files)

| File | Description |
|------|-------------|
| `adapterPath.mdx` | Configure a custom adapter for Next.js to hook into the build process. |
| `agentFeedback.mdx` | Enable a review flow for Next.js issue reports prepared by AI coding agents. |
| `agentRules.mdx` | Configure whether Next.js creates instructions for AI coding agents. |
| `agentUpgrade.mdx` | Configure coding agent upgrades and reminders. |
| `allowedDevOrigins.mdx` | Use `allowedDevOrigins` to configure additional origins that can request the dev server. |
| `appDir.mdx` | Enable the App Router to use layouts, streaming, and more. |
| `assetPrefix.mdx` | Learn how to use the assetPrefix config option to configure your CDN. |
| `authInterrupts.mdx` | Learn how to enable the experimental `authInterrupts` configuration option to use `forbidden` and `unauthorized`. |
| `basePath.mdx` | Use `basePath` to deploy a Next.js application under a sub-path of a domain. |
| `cacheComponents.mdx` | Learn how to enable the cacheComponents flag in Next.js. |
| `cacheHandlers.mdx` | Configure custom cache handlers for use cache directives in Next.js. |
| `cacheLife.mdx` | Learn how to set up cacheLife configurations in Next.js. |
| `cacheMaxMemorySize.mdx` | Configure the size of the in-memory cache that Next.js keeps in each server instance. |
| `compress.mdx` | Next.js provides gzip compression to compress rendered content and static files, it only works with the server target. Learn more about it here. |
| `crossOrigin.mdx` | Use the `crossOrigin` option to add a crossOrigin tag on the `script` tags generated by `next/script`. |
| `cssChunking.mdx` | Use the `cssChunking` option to control how CSS files are chunked in your Next.js application. |
| `deploymentId.mdx` | Configure a deployment identifier used for version skew protection and cache busting. |
| `devIndicators.mdx` | Configuration options for the on-screen indicator that gives context about the current route you're viewing during development. |
| `distDir.mdx` | Set a custom build directory to use instead of the default .next directory. |
| `enablePrerenderSourceMaps.mdx` | Enable source maps for errors during prerendering in next build. |
| `env.mdx` | Learn to add and access environment variables in your Next.js application at build time. |
| `expireTime.mdx` | Customize stale-while-revalidate expire time for ISR enabled pages. |
| `exportPathMap.mdx` | Customize the pages that will be exported as HTML files when using `next export`. |
| `exposeTestingApiInProductionBuild.mdx` | Expose the Instant Navigation testing API in production builds for end-to-end tests. |
| `generateBuildId.mdx` | Configure the build id, which is used to identify the current build in which your application is being served. |
| `generateEtags.mdx` | Next.js will generate etags for every page by default. Learn more about how to disable etag generation here. |
| `headers.mdx` | Add custom HTTP headers to your Next.js app. |
| `htmlLimitedBots.mdx` | Specify a list of user agents that should receive blocking metadata. |
| `httpAgentOptions.mdx` | Next.js will automatically use HTTP Keep-Alive by default. Learn more about how to disable HTTP Keep-Alive here. |
| `images.mdx` | Custom configuration for the next/image loader |
| `incrementalCacheHandlerPath.mdx` | Configure the Next.js cache used for storing and revalidating data to use any external service like Redis, Memcached, or others. |
| `index.mdx` | Learn how to configure your application with next.config.js. |
| `inlineCss.mdx` | Enable inline CSS support. |
| `instrumentationClientInject.mdx` | Inject additional client-side instrumentation modules before the user's `instrumentation-client.{js,ts}` file. |
| `logging.mdx` | Configure logging behavior in the terminal when running Next.js in development mode, including fetch logging, incoming requests, and forwarding browser... |
| `mdxRs.mdx` | Use the new Rust compiler to compile MDX files in the App Router. |
| `onDemandEntries.mdx` | Configure how Next.js will dispose and keep in memory pages created in development. |
| `optimizePackageImports.mdx` | API Reference for optimizePackageImports Next.js Config Option |
| `output.mdx` | Next.js automatically traces which files are needed by each page to allow for easy deployment of your application. Learn how it works here. |
| `outputHashSalt.mdx` | Learn how to incorporate a custom salt string into content-addressed output filenames. |
| `pageExtensions.mdx` | Extend the default page extensions used by Next.js when resolving pages in the Pages Router. |
| `partialPrefetching.mdx` | Configure the default link prefetch behavior to fetch only the static parts of each route. |
| `poweredByHeader.mdx` | Next.js will add the `x-powered-by` header by default. Learn to opt-out of it here. |
| `prefetchInlining.mdx` | Override how the App Router bundles small prefetch responses together. |
| `productionBrowserSourceMaps.mdx` | Enables browser source map generation during the production build. |
| `proxyClientMaxBodySize.mdx` | Configure the maximum request body size when using proxy. |
| `reactCompiler.mdx` | Enable the React Compiler to automatically optimize component rendering. |
| `reactMaxHeadersLength.mdx` | The maximum length of the headers that are emitted by React and added to the response. |
| `reactStrictMode.mdx` | The complete Next.js runtime is now Strict Mode-compliant, learn how to opt-in |
| `redirects.mdx` | Add redirects to your Next.js app. |
| `rewrites.mdx` | Add rewrites to your Next.js app. |
| `sassOptions.mdx` | Configure Sass options. |
| `serverActions.mdx` | Configure Server Actions behavior in your Next.js application. |
| `serverComponentsHmrCache.mdx` | Configure whether fetch responses in Server Components are cached across HMR refresh requests. |
| `serverExternalPackages.mdx` | Opt-out specific dependencies from the Server Components bundling and use native Node.js `require`. |
| `skipProxyUrlNormalize.mdx` | Let Proxy see the original request instead of Next.js's normalized version. Formerly skipMiddlewareUrlNormalize. |
| `skipTrailingSlashRedirect.mdx` | Disable the automatic trailing slash redirects so you can handle trailing slashes yourself in Proxy. |
| `staleTimes.mdx` | Learn how to override the invalidation time of the client cache. |
| `staticGeneration.mdx` | Learn how to configure static generation in your Next.js application. |
| `supportsImmutableAssets.mdx` | Configure support for immutable static assets |
| `taint.mdx` | Enable tainting Objects and Values. |
| `trailingSlash.mdx` | Configure Next.js pages to resolve with or without a trailing slash. |
| `transpilePackages.mdx` | Transpile and bundle dependencies from monorepo workspace packages or `node_modules` libraries that ship TypeScript, JSX, or modern syntax. |
| `turbopack.mdx` | Configure Next.js with Turbopack-specific options |
| `turbopackChunking.mdx` | Configure how Turbopack splits your client-side JavaScript into chunks in production. |
| `turbopackFileSystemCache.mdx` | Learn how to enable and configure FileSystem Caching for Turbopack builds |
| `turbopackGc.mdx` | Configure Turbopack to remove unreachable work from memory and the persistent cache. |
| `turbopackIgnoreIssue.mdx` | Suppress specific Turbopack errors and warnings from the CLI output and error overlay. |
| `turbopackLazyDynamicImports.mdx` | Compile client-side dynamic imports when they are first requested during development. |
| `turbopackLazyDynamicImportsSSR.mdx` | Compile dynamic imports when server rendering first reaches them during development. |
| `turbopackLocalPostcssConfig.mdx` | Enable per-directory PostCSS config resolution in Turbopack so that the config closest to each CSS file takes precedence over the project root config. |
| `turbopackMemoryEviction.mdx` | Learn how to control Turbopack's memory eviction strategy for the persistent cache. |
| `turbopackPluginRuntimeStrategy.mdx` | Choose how Turbopack runs Node.js evaluation for webpack loaders, Babel, and PostCSS. |
| `turbopackRustReactCompiler.mdx` | Use the native Rust port of the React Compiler with Turbopack instead of the Babel transform. |
| `typedRoutes.mdx` | Enable support for statically typed links. |
| `typescript.mdx` | Configure how Next.js handles TypeScript errors during production builds and specify a custom tsconfig file. |
| `urlImports.mdx` | Configure Next.js to allow importing modules from external URLs. |
| `useLightningcss.mdx` | Enable experimental support for Lightning CSS. |
| `useOffline.mdx` | Learn how to enable the experimental `useOffline` configuration option to detect connectivity and retry failed requests automatically. |
| `useTypeScriptCli.mdx` | Run the project-local TypeScript CLI for type checking during production builds. |
| `webVitalsAttribution.mdx` | Learn how to use the webVitalsAttribution option to pinpoint the source of Web Vitals issues. |
| `webpack.mdx` | Learn how to customize the webpack config used by Next.js |

### 01-app/03-api-reference/06-cli/ (3 files)

| File | Description |
|------|-------------|
| `create-next-app.mdx` | Create Next.js apps using one command with the create-next-app CLI. |
| `index.mdx` | API Reference for the Next.js Command Line Interface (CLI) tools. |
| `next.mdx` | Learn how to run and build your application with the Next.js CLI. |

### 01-app/03-api-reference/07-adapters/ (12 files)

| File | Description |
|------|-------------|
| `01-configuration.mdx` | Configure `adapterPath` or `NEXT_ADAPTER_PATH` to use a custom deployment adapter. |
| `02-creating-an-adapter.mdx` | Create an adapter module that implements the `NextAdapter` interface. |
| `03-api-reference.mdx` | Reference for `modifyConfig` and `onBuildComplete` in the `NextAdapter` interface. |
| `04-testing-adapters.mdx` | Validate adapters with the Next.js compatibility test harness and custom lifecycle scripts. |
| `05-routing-with-next-routing.mdx` | Use `@next/routing` to apply Next.js route matching behavior in adapters. |
| `06-implementing-ppr-in-an-adapter.mdx` | Implement Partial Prerendering support in an adapter using fallback output and cache hooks. |
| `07-runtime-integration.mdx` | Understand how build-time adapters and runtime cache interfaces work together. |
| `08-invoking-entrypoints.mdx` | Invoke Node.js and Edge build entrypoints with adapter runtime context. |
| `09-output-types.mdx` | Reference for all build output types exposed to adapters. |
| `10-routing-information.mdx` | Reference for routing phases and route fields exposed in `onBuildComplete`. |
| `11-use-cases.mdx` | Common patterns and examples for deployment adapter implementations. |
| `12-immutable-static-assets.mdx` | Support immutable static assets in an adapter |

### 02-pages/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Before Next.js 13, the Pages Router was the main way to create routes in Next.js with an intuitive file-system router. |

### 02-pages/01-getting-started/ (6 files)

| File | Description |
|------|-------------|
| `01-installation.mdx` | How to create a new Next.js application with `create-next-app`. Set up TypeScript, ESLint,and configure your `next.config.js` file. |
| `02-project-structure.mdx` | Learn about the folder and file conventions in a Next.js project, and how to organize your project. |
| `04-images.mdx` | Optimize your images with the built-in `next/image` component. |
| `05-fonts.mdx` | Learn how to use fonts in Next.js |
| `06-css.mdx` | Learn about the different ways to add CSS to your application, including CSS Modules, Global CSS, Tailwind CSS, and more. |
| `11-deploying.mdx` | Learn how to deploy your Next.js application. |

### 02-pages/02-guides/ (29 files)

| File | Description |
|------|-------------|
| `analytics.mdx` | Measure and track page performance using Next.js |
| `authentication.mdx` | Learn how to implement authentication in Next.js, covering best practices, securing routes, authorization techniques, and session management. |
| `babel.mdx` | Extend the babel preset added by Next.js with your own configs. |
| `ci-build-caching.mdx` | Learn how to configure CI to cache Next.js builds |
| `content-security-policy.mdx` | Learn how to set a Content Security Policy (CSP) for your Next.js application. |
| `css-in-js.mdx` | Use CSS-in-JS libraries with Next.js |
| `custom-server.mdx` | Start a Next.js app programmatically using a custom server. |
| `debugging.mdx` | Learn how to debug your Next.js application with VS Code or Chrome DevTools. |
| `draft-mode.mdx` | Next.js has draft mode to toggle between static and dynamic pages. You can learn how it works with Pages Router. |
| `environment-variables.mdx` | Learn to add and access environment variables in your Next.js application. |
| `forms.mdx` | Learn how to handle form submissions and data mutations with Next.js. |
| `incremental-static-regeneration.mdx` | Learn how to create or update static pages at runtime with Incremental Static Regeneration. |
| `instrumentation.mdx` | Learn how to use instrumentation to run code at server startup in your Next.js app |
| `internationalization.mdx` | Next.js has built-in support for internationalized routing and language detection. Learn more here. |
| `lazy-loading.mdx` | Lazy load imported libraries and React Components to improve your application's overall loading performance. |
| `mdx.mdx` | Learn how to configure MDX to write JSX in your markdown files. |
| `multi-zones.mdx` | Learn how to build micro-frontends using Next.js Multi-Zones to deploy multiple Next.js apps under a single domain. |
| `open-telemetry.mdx` | Learn how to instrument your Next.js app with OpenTelemetry. |
| `package-bundling.mdx` | Learn how to optimize your application's server and client bundles. |
| `post-css.mdx` | Extend the PostCSS config and plugins added by Next.js with your own. |
| `preview-mode.mdx` | Next.js has the preview mode for statically generated pages. You can learn how it works here. |
| `production-checklist.mdx` | Recommendations to ensure the best performance and user experience before taking your Next.js application to production. |
| `redirecting.mdx` | Learn the different ways to handle redirects in Next.js. |
| `sass.mdx` | Learn how to use Sass in your Next.js application. |
| `scripts.mdx` | Optimize 3rd party scripts with the built-in Script component. |
| `self-hosting.mdx` | Learn how to self-host your Next.js application on a Node.js server, Docker image, or static HTML files (static exports). |
| `static-exports.mdx` | Next.js enables starting as a static site or Single-Page Application (SPA), then later optionally upgrading to use features that require a server. |
| `tailwind-v3-css.mdx` | Style your Next.js Application using Tailwind CSS. |
| `third-party-libraries.mdx` | Optimize the performance of third-party libraries in your application with the `@next/third-parties` package. |

### 02-pages/02-guides/migrating/ (3 files)

| File | Description |
|------|-------------|
| `app-router-migration.mdx` | Learn how to upgrade your existing Next.js application from the Pages Router to the App Router. |
| `from-create-react-app.mdx` | Learn how to migrate your existing React application from Create React App to Next.js. |
| `from-vite.mdx` | Learn how to migrate your existing React application from Vite to Next.js. |

### 02-pages/02-guides/testing/ (5 files)

| File | Description |
|------|-------------|
| `cypress.mdx` | Learn how to set up Next.js with Cypress for End-to-End (E2E) and Component Testing. |
| `index.mdx` | Learn how to set up Next.js with three commonly used testing tools — Cypress, Playwright, Vitest, and Jest. |
| `jest.mdx` | Learn how to set up Next.js with Jest for Unit Testing. |
| `playwright.mdx` | Learn how to set up Next.js with Playwright for End-to-End (E2E) and Integration testing. |
| `vitest.mdx` | Learn how to set up Next.js with Vitest and React Testing Library - two popular unit testing libraries. |

### 02-pages/02-guides/upgrading/ (10 files)

| File | Description |
|------|-------------|
| `codemods.mdx` | Use codemods to upgrade your Next.js codebase when new features are released. |
| `index.mdx` | Learn how to upgrade to the latest versions of Next.js. |
| `version-10.mdx` | Upgrade your Next.js Application from Version 9 to Version 10. |
| `version-11.mdx` | Upgrade your Next.js Application from Version 10 to Version 11. |
| `version-12.mdx` | Upgrade your Next.js Application from Version 11 to Version 12. |
| `version-13.mdx` | Upgrade your Next.js Application from Version 12 to 13. |
| `version-14.mdx` | Upgrade your Next.js Application from Version 13 to 14. |
| `version-15.mdx` | Upgrade your Next.js Application from Version 14 to 15. |
| `version-16.mdx` | Upgrade your Next.js Application from Version 15 to 16. |
| `version-9.mdx` | Upgrade your Next.js Application from Version 8 to Version 9. |

### 02-pages/03-building-your-application/01-routing/ (8 files)

| File | Description |
|------|-------------|
| `01-pages-and-layouts.mdx` | Create your first page and shared layout with the Pages Router. |
| `02-dynamic-routes.mdx` | Dynamic Routes are pages that allow you to add custom params to your URLs. Start creating Dynamic Routes and learn more here. |
| `03-linking-and-navigating.mdx` | Learn how navigation works in Next.js, and how to use the Link Component and `useRouter` hook. |
| `05-custom-app.mdx` | Control page initialization and add a layout that persists for all pages by overriding the default App component used by Next.js. |
| `06-custom-document.mdx` | Extend the default document markup added by Next.js. |
| `07-api-routes.mdx` | Next.js supports API Routes, which allow you to build your API without leaving your Next.js app. Learn how it works here. |
| `08-custom-error.mdx` | Override and extend the built-in Error page to handle custom errors. |
| `index.mdx` | Learn the fundamentals of routing for front-end applications with the Pages Router. |

### 02-pages/03-building-your-application/02-rendering/ (5 files)

| File | Description |
|------|-------------|
| `01-server-side-rendering.mdx` | Use Server-side Rendering to render pages on each request. |
| `02-static-site-generation.mdx` | Use Static Site Generation (SSG) to prerender pages at build time. |
| `04-automatic-static-optimization.mdx` | Next.js automatically optimizes your app to be static HTML whenever possible. Learn how it works here. |
| `05-client-side-rendering.mdx` | Learn how to implement client-side rendering in the Pages Router. |
| `index.mdx` | Learn the fundamentals of rendering in React and Next.js. |

### 02-pages/03-building-your-application/03-data-fetching/ (5 files)

| File | Description |
|------|-------------|
| `01-get-static-props.mdx` | Fetch data and generate static pages with `getStaticProps`. Learn more about this API for data fetching in Next.js. |
| `02-get-static-paths.mdx` | Fetch data and generate static pages with `getStaticPaths`. Learn more about this API for data fetching in Next.js. |
| `03-get-server-side-props.mdx` | Fetch data on each request with `getServerSideProps`. |
| `05-client-side.mdx` | Learn about client-side data fetching, and how to use SWR, a data fetching React Hook library that handles caching, revalidation, focus tracking, refetching... |
| `index.mdx` | Next.js allows you to fetch data in multiple ways, with prerendering, server-side rendering or static-site generation, and incremental static regeneration.... |

### 02-pages/03-building-your-application/06-configuring/ (2 files)

| File | Description |
|------|-------------|
| `12-error-handling.mdx` | Handle errors in your Next.js app. |
| `index.mdx` | Learn how to configure your Next.js application. |

### 02-pages/04-api-reference/ (2 files)

| File | Description |
|------|-------------|
| `06-edge.mdx` | API Reference for the Edge Runtime. |
| `08-turbopack.mdx` | Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js. |

### 02-pages/04-api-reference/01-components/ (8 files)

| File | Description |
|------|-------------|
| `font.mdx` | API Reference for the Font Module |
| `form.mdx` | Learn how to use the component to handle form submissions and search params updates with client-side navigation. |
| `head.mdx` | Add custom elements to the `head` of your page with the built-in Head component. |
| `image-legacy.mdx` | Backwards compatible Image Optimization with the Legacy Image component. |
| `image.mdx` | Optimize Images in your Next.js Application using the built-in `next/image` Component. |
| `index.mdx` | API Reference for Next.js built-in components in the Pages Router. |
| `link.mdx` | API reference for the component. |
| `script.mdx` | Optimize third-party scripts in your Next.js application using the built-in `next/script` Component. |

### 02-pages/04-api-reference/02-file-conventions/ (4 files)

| File | Description |
|------|-------------|
| `instrumentation.mdx` | API reference for the instrumentation.js file. |
| `proxy.mdx` | Learn how to use Proxy to run code before a request is completed. |
| `public-folder.mdx` | Next.js allows you to serve static files, like images, in the public directory. You can learn how it works here. |
| `src-folder.mdx` | Save pages under the `src` folder as an alternative to the root `pages` directory. |

### 02-pages/04-api-reference/03-functions/ (13 files)

| File | Description |
|------|-------------|
| `catchError.mdx` | API Reference for the catchError function. |
| `get-initial-props.mdx` | Fetch dynamic data on the server for your React component with getInitialProps. |
| `get-server-side-props.mdx` | API reference for `getServerSideProps`. Learn how to fetch data on each request with Next.js. |
| `get-static-paths.mdx` | API reference for `getStaticPaths`. Learn how to fetch data and generate static pages with `getStaticPaths`. |
| `get-static-props.mdx` | API reference for `getStaticProps`. Learn how to use `getStaticProps` to generate static pages with Next.js. |
| `index.mdx` | API Reference for Functions and Hooks in Pages Router. |
| `next-request.mdx` | API Reference for NextRequest. |
| `next-response.mdx` | API Reference for NextResponse. |
| `use-params.mdx` | API Reference for the useParams hook in the Pages Router. |
| `use-report-web-vitals.mdx` | Use the Next.js `useReportWebVitals` hook to send Core Web Vitals and custom performance metrics to analytics. |
| `use-router.mdx` | Learn more about the API of the Next.js Router, and access the router instance in your page with the useRouter hook. |
| `use-search-params.mdx` | API Reference for the useSearchParams hook in the Pages Router. |
| `userAgent.mdx` | The userAgent helper extends the Web Request API with additional properties and methods to interact with the user agent object from the request. |

### 02-pages/04-api-reference/04-config/ (2 files)

| File | Description |
|------|-------------|
| `01-typescript.mdx` | Next.js provides a TypeScript-first development experience for building your React application. |
| `02-eslint.mdx` | Next.js reports ESLint errors and warnings during builds by default. Learn how to opt-out of this behavior here. |

### 02-pages/04-api-reference/04-config/01-next-config-js/ (43 files)

| File | Description |
|------|-------------|
| `adapterPath.mdx` | Configure a custom adapter for Next.js to hook into the build process. |
| `allowedDevOrigins.mdx` | Use `allowedDevOrigins` to configure additional origins that can request the dev server. |
| `assetPrefix.mdx` | Learn how to use the assetPrefix config option to configure your CDN. |
| `basePath.mdx` | Use `basePath` to deploy a Next.js application under a sub-path of a domain. |
| `bundlePagesRouterDependencies.mdx` | Enable automatic dependency bundling for Pages Router |
| `compress.mdx` | Next.js provides gzip compression to compress rendered content and static files, it only works with the server target. Learn more about it here. |
| `crossOrigin.mdx` | Use the `crossOrigin` option to add a crossOrigin tag on the `script` tags generated by `next/script` and `next/head`. |
| `deploymentId.mdx` | Configure a deployment identifier used for version skew protection and cache busting. |
| `devIndicators.mdx` | Optimized pages include an indicator to let you know if it's being statically optimized. You can opt-out of it here. |
| `distDir.mdx` | Set a custom build directory to use instead of the default .next directory. |
| `enablePrerenderSourceMaps.mdx` | Enable source maps for errors during prerendering in next build. |
| `env.mdx` | Learn to add and access environment variables in your Next.js application at build time. |
| `exportPathMap.mdx` | Customize the pages that will be exported as HTML files when using `next export`. |
| `generateBuildId.mdx` | Configure the build id, which is used to identify the current build in which your application is being served. |
| `generateEtags.mdx` | Next.js will generate etags for every page by default. Learn more about how to disable etag generation here. |
| `headers.mdx` | Add custom HTTP headers to your Next.js app. |
| `httpAgentOptions.mdx` | Next.js will automatically use HTTP Keep-Alive by default. Learn more about how to disable HTTP Keep-Alive here. |
| `images.mdx` | Custom configuration for the next/image loader |
| `index.mdx` | Learn about the options available in next.config.js for the Pages Router. |
| `logging.mdx` | Configure logging behavior in the terminal when running Next.js in development mode. |
| `onDemandEntries.mdx` | Configure how Next.js will dispose and keep in memory pages created in development. |
| `optimizePackageImports.mdx` | API Reference for optimizePackageImports Next.js Config Option |
| `output.mdx` | Next.js automatically traces which files are needed by each page to allow for easy deployment of your application. Learn how it works here. |
| `pageExtensions.mdx` | Extend the default page extensions used by Next.js when resolving pages in the Pages Router. |
| `poweredByHeader.mdx` | Next.js will add the `x-powered-by` header by default. Learn to opt-out of it here. |
| `productionBrowserSourceMaps.mdx` | Enables browser source map generation during the production build. |
| `proxyClientMaxBodySize.mdx` | Configure the maximum request body size when using proxy. |
| `reactStrictMode.mdx` | The complete Next.js runtime is now Strict Mode-compliant, learn how to opt-in |
| `redirects.mdx` | Add redirects to your Next.js app. |
| `rewrites.mdx` | Add rewrites to your Next.js app. |
| `serverExternalPackages.mdx` | Opt-out specific dependencies from the dependency bundling enabled by `bundlePagesRouterDependencies`. |
| `skipProxyUrlNormalize.mdx` | Let Proxy see the original request instead of Next.js's normalized version. Formerly skipMiddlewareUrlNormalize. |
| `skipTrailingSlashRedirect.mdx` | Disable the automatic trailing slash redirects so you can handle trailing slashes yourself in Proxy. |
| `trailingSlash.mdx` | Configure Next.js pages to resolve with or without a trailing slash. |
| `transpilePackages.mdx` | Automatically transpile and bundle dependencies from local packages (like monorepos) or from external dependencies (`node_modules`). |
| `turbopack.mdx` | Configure Next.js with Turbopack-specific options |
| `turbopackChunking.mdx` | Configure how Turbopack splits your client-side JavaScript into chunks in production. |
| `typescript.mdx` | Next.js reports TypeScript errors by default. Learn to opt-out of this behavior here. |
| `urlImports.mdx` | Configure Next.js to allow importing modules from external URLs. |
| `useLightningcss.mdx` | Enable experimental support for Lightning CSS. |
| `useTypeScriptCli.mdx` | Run the project-local TypeScript CLI for type checking during production builds. |
| `webVitalsAttribution.mdx` | Learn how to use the webVitalsAttribution option to pinpoint the source of Web Vitals issues. |
| `webpack.mdx` | Learn how to customize the webpack config used by Next.js |

### 02-pages/04-api-reference/05-cli/ (3 files)

| File | Description |
|------|-------------|
| `create-next-app.mdx` | Create Next.js apps using one command with the create-next-app CLI. |
| `index.mdx` | API Reference for the Next.js Command Line Interface (CLI) tools. |
| `next.mdx` | Learn how to run and build your application with the Next.js CLI. |

### 02-pages/04-api-reference/06-adapters/ (11 files)

| File | Description |
|------|-------------|
| `01-configuration.mdx` | Configure `adapterPath` or `NEXT_ADAPTER_PATH` to use a custom deployment adapter. |
| `02-creating-an-adapter.mdx` | Create an adapter module that implements the `NextAdapter` interface. |
| `03-api-reference.mdx` | Reference for `modifyConfig` and `onBuildComplete` in the `NextAdapter` interface. |
| `04-testing-adapters.mdx` | Validate adapters with the Next.js compatibility test harness and custom lifecycle scripts. |
| `05-routing-with-next-routing.mdx` | Use `@next/routing` to apply Next.js route matching behavior in adapters. |
| `06-runtime-integration.mdx` | Understand how build-time adapters and runtime cache interfaces work together. |
| `07-invoking-entrypoints.mdx` | Invoke Node.js and Edge build entrypoints with adapter runtime context. |
| `08-output-types.mdx` | Reference for all build output types exposed to adapters. |
| `09-routing-information.mdx` | Reference for routing phases and route fields exposed in `onBuildComplete`. |
| `10-use-cases.mdx` | Common patterns and examples for deployment adapter implementations. |
| `index.mdx` | Build deployment adapters for Next.js platforms and infrastructure. |

### 03-architecture/ (4 files)

| File | Description |
|------|-------------|
| `accessibility.mdx` | The built-in accessibility features of Next.js. |
| `fast-refresh.mdx` | Fast Refresh is a hot module reloading experience that gives you instantaneous feedback on edits made to your React components. |
| `nextjs-compiler.mdx` | Next.js Compiler, written in Rust, which transforms and minifies your Next.js application. |
| `supported-browsers.mdx` | Browser support and which JavaScript features are supported by Next.js. |

### 04-community/ (1 files)

| File | Description |
|------|-------------|
| `02-rspack.mdx` | Use the `next-rspack` plugin to bundle your Next.js with Rspack. |
