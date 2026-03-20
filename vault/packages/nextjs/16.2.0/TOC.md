# Next.js 16.2.0 Table of Contents

## Directory Map

```
contents/
├── 01-app/                              # App Router documentation (239 files)
│   ├── 01-getting-started/              # Installation and core concepts (19 files)
│   ├── 02-guides/                       # How-to guides (55 files)
│   │   ├── migrating/                   # Migration from CRA, Vite, Pages Router (3 files)
│   │   ├── testing/                     # Jest, Vitest, Cypress, Playwright (5 files)
│   │   └── upgrading/                   # Version 16 upgrade + codemods (3 files)
│   └── 03-api-reference/                # App Router API reference (162 files)
│       ├── 01-directives/               # use cache, use client, use server (5 files)
│       ├── 02-components/               # Image, Link, Script, Form (5 files)
│       ├── 03-file-conventions/         # layout, page, loading, error, etc. (32 files)
│       │   ├── 01-metadata/             # Metadata file conventions (6 files)
│       │   └── 02-route-segment-config/ # Segment config options (6 files)
│       ├── 04-functions/                # Server/client functions (38 files)
│       ├── 05-config/                   # Configuration (62 files)
│       │   └── 01-next-config-js/       # next.config.js options (60 files)
│       └── 06-cli/                      # CLI commands (3 files)
├── 02-pages/                            # Pages Router documentation (119 files)
│   ├── 01-getting-started/              # Getting started with Pages Router (6 files)
│   ├── 02-guides/                       # How-to guides (39 files)
│   │   ├── migrating/                   # Migration guides (3 files)
│   │   ├── testing/                     # Testing setup (5 files)
│   │   └── upgrading/                   # Codemods and upgrade guide (2 files)
│   ├── 03-building-your-application/    # Core concepts (20 files)
│   │   ├── 01-routing/                  # Routing: pages, dynamic, API routes (7 files)
│   │   ├── 02-rendering/                # SSR, SSG, CSR (5 files)
│   │   ├── 03-data-fetching/            # getStaticProps, getServerSideProps (6 files)
│   │   └── 06-configuring/              # Error handling, configuration (2 files)
│   └── 04-api-reference/                # Pages Router API reference (67 files)
│       ├── 01-components/               # Image, Link, Script, Head, Form (8 files)
│       ├── 02-file-conventions/         # File conventions (4 files)
│       ├── 03-functions/                # Router functions, hooks (12 files)
│       ├── 04-config/                   # Configuration (40 files)
│       │   └── 01-next-config-js/       # next.config.js options (38 files)
│       └── 05-cli/                      # CLI reference (3 files)
├── 03-architecture/                     # Architecture internals (5 files)
└── 04-community/                        # Community resources (2 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New project setup | `01-app/01-getting-started/01-installation.mdx` |
| App Router concepts | `01-app/01-getting-started/` |
| Pages Router concepts | `02-pages/01-getting-started/` |
| Routing (App) | `01-app/03-api-reference/03-file-conventions/` |
| API reference (App) | `01-app/03-api-reference/04-functions/` |
| next.config.js (App) | `01-app/03-api-reference/05-config/01-next-config-js/index.mdx` |
| Data fetching (App) | `01-app/01-getting-started/06-fetching-data.mdx` |
| Server Components | `01-app/01-getting-started/05-server-and-client-components.mdx` |
| Caching | `01-app/01-getting-started/08-caching.mdx` |
| Migration to App Router | `01-app/02-guides/migrating/app-router-migration.mdx` |

## Detailed Structure

### 01-app/01-getting-started/ (19 files)

| File | Description |
|------|-------------|
| `01-installation.mdx` | Installation and setup |
| `02-project-structure.mdx` | Project folder structure |
| `03-layouts-and-pages.mdx` | Layouts and pages |
| `04-linking-and-navigating.mdx` | Link component and navigation |
| `05-server-and-client-components.mdx` | Server vs Client Components |
| `06-fetching-data.mdx` | Data fetching patterns |
| `07-mutating-data.mdx` | Server Actions and mutations |
| `08-caching.mdx` | Caching strategies |
| `09-revalidating.mdx` | Revalidation (ISR) |
| `10-error-handling.mdx` | Error boundaries and handling |
| `11-css.mdx` | CSS styling |
| `12-images.mdx` | Image optimization |
| `13-fonts.mdx` | Font optimization |
| `14-metadata-and-og-images.mdx` | Metadata API and OG images |
| `15-route-handlers.mdx` | Route Handlers (API routes) |
| `16-proxy.mdx` | Proxy configuration |
| `17-deploying.mdx` | Deployment |
| `18-upgrading.mdx` | Upgrading guide |
| `index.mdx` | Getting started overview |

### 01-app/02-guides/ (44 files, + subdirectories)

| File | Description |
|------|-------------|
| `ai-agents.mdx` | Building AI agents |
| `analytics.mdx` | Analytics integration |
| `authentication.mdx` | Authentication patterns |
| `backend-for-frontend.mdx` | BFF pattern |
| `caching-without-cache-components.mdx` | Caching without cache components |
| `ci-build-caching.mdx` | CI build caching |
| `content-security-policy.mdx` | CSP headers |
| `css-in-js.mdx` | CSS-in-JS setup |
| `custom-server.mdx` | Custom server |
| `data-security.mdx` | Data security |
| `debugging.mdx` | Debugging |
| `draft-mode.mdx` | Draft mode |
| `environment-variables.mdx` | Environment variables |
| `forms.mdx` | Forms and Server Actions |
| `incremental-static-regeneration.mdx` | ISR |
| `instant-navigation.mdx` | Instant navigation |
| `instrumentation.mdx` | Instrumentation hooks |
| `internationalization.mdx` | i18n |
| `json-ld.mdx` | JSON-LD structured data |
| `lazy-loading.mdx` | Lazy loading |
| `local-development.mdx` | Local development |
| `mcp.mdx` | MCP integration |
| `mdx.mdx` | MDX content |
| `memory-usage.mdx` | Memory optimization |
| `migrating-to-cache-components.mdx` | Cache components migration |
| `multi-tenant.mdx` | Multi-tenant apps |
| `multi-zones.mdx` | Multi-zone deployments |
| `open-telemetry.mdx` | OpenTelemetry |
| `package-bundling.mdx` | Package bundling |
| `prefetching.mdx` | Prefetching |
| `preserving-ui-state.mdx` | UI state preservation |
| `production-checklist.mdx` | Production checklist |
| `progressive-web-apps.mdx` | PWA |
| `public-static-pages.mdx` | Static pages |
| `redirecting.mdx` | Redirects |
| `sass.mdx` | Sass/SCSS |
| `scripts.mdx` | Script optimization |
| `self-hosting.mdx` | Self-hosting |
| `single-page-applications.mdx` | SPA mode |
| `static-exports.mdx` | Static export |
| `streaming.mdx` | Streaming |
| `tailwind-v3-css.mdx` | Tailwind CSS v3 |
| `third-party-libraries.mdx` | Third-party libraries |
| `videos.mdx` | Video optimization |

### 01-app/02-guides/migrating/ (3 files)

| File | Description |
|------|-------------|
| `app-router-migration.mdx` | Pages to App Router migration |
| `from-create-react-app.mdx` | Migrate from CRA |
| `from-vite.mdx` | Migrate from Vite |

### 01-app/02-guides/testing/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | Testing overview |
| `jest.mdx` | Jest setup |
| `vitest.mdx` | Vitest setup |
| `cypress.mdx` | Cypress E2E |
| `playwright.mdx` | Playwright E2E |

### 01-app/02-guides/upgrading/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Upgrading overview |
| `codemods.mdx` | Codemods for migration |
| `version-16.mdx` | v16 upgrade guide |

### 01-app/03-api-reference/01-directives/ (5 files)

| File | Description |
|------|-------------|
| `use-cache.mdx` | `use cache` directive |
| `use-cache-private.mdx` | `use cache private` |
| `use-cache-remote.mdx` | `use cache remote` |
| `use-client.mdx` | `use client` directive |
| `use-server.mdx` | `use server` directive |

### 01-app/03-api-reference/02-components/ (5 files)

| File | Description |
|------|-------------|
| `font.mdx` | `<Font>` component |
| `form.mdx` | `<Form>` component |
| `image.mdx` | `<Image>` component |
| `link.mdx` | `<Link>` component |
| `script.mdx` | `<Script>` component |

### 01-app/03-api-reference/03-file-conventions/ (20 files + subdirectories)

| File | Description |
|------|-------------|
| `default.mdx` | default.js parallel routes |
| `error.mdx` | error.js boundary |
| `forbidden.mdx` | forbidden.js |
| `global-error.mdx` | global-error.js |
| `instrumentation.mdx` | instrumentation.js |
| `layout.mdx` | layout.js |
| `loading.mdx` | loading.js Suspense |
| `middleware.mdx` | middleware.js |
| `not-found.mdx` | not-found.js |
| `page.mdx` | page.js |
| `proxy.mdx` | proxy.js |
| `route.mdx` | route.js (Route Handlers) |
| `sitemap.mdx` | sitemap.js |
| `template.mdx` | template.js |
| `unauthorized.mdx` | unauthorized.js |

### 01-app/03-api-reference/03-file-conventions/01-metadata/ (6 files)

| File | Description |
|------|-------------|
| `index.mdx` | Metadata file conventions |
| `app-icons.mdx` | App icons |
| `manifest.mdx` | manifest.js |
| `opengraph-image.mdx` | OG image |
| `robots.mdx` | robots.txt |
| `sitemap.mdx` | sitemap.js |

### 01-app/03-api-reference/03-file-conventions/02-route-segment-config/ (6 files)

| File | Description |
|------|-------------|
| `index.mdx` | Route segment config overview |
| `dynamic.mdx` | dynamic config |
| `dynamicParams.mdx` | dynamicParams |
| `fetchCache.mdx` | fetchCache |
| `preferredRegion.mdx` | preferredRegion |
| `revalidate.mdx` | revalidate |

### 01-app/03-api-reference/04-functions/ (38 files)

| File | Description |
|------|-------------|
| `after.mdx` | `after()` |
| `cacheLife.mdx` | `cacheLife()` |
| `cacheTag.mdx` | `cacheTag()` |
| `catchError.mdx` | `catchError()` |
| `connection.mdx` | `connection()` |
| `cookies.mdx` | `cookies()` |
| `draft-mode.mdx` | `draftMode()` |
| `fetch.mdx` | `fetch()` extended |
| `forbidden.mdx` | `forbidden()` |
| `generate-image-metadata.mdx` | `generateImageMetadata()` |
| `generate-metadata.mdx` | `generateMetadata()` |
| `generate-sitemaps.mdx` | `generateSitemaps()` |
| `generate-static-params.mdx` | `generateStaticParams()` |
| `generate-viewport.mdx` | `generateViewport()` |
| `headers.mdx` | `headers()` |
| `image-response.mdx` | `ImageResponse` |
| `next-request.mdx` | `NextRequest` |
| `next-response.mdx` | `NextResponse` |
| `not-found.mdx` | `notFound()` |
| `permanentRedirect.mdx` | `permanentRedirect()` |
| `redirect.mdx` | `redirect()` |
| `refresh.mdx` | `refresh()` |
| `revalidatePath.mdx` | `revalidatePath()` |
| `revalidateTag.mdx` | `revalidateTag()` |
| `unauthorized.mdx` | `unauthorized()` |
| `unstable_cache.mdx` | `unstable_cache()` |
| `unstable_noStore.mdx` | `unstable_noStore()` |
| `unstable_rethrow.mdx` | `unstable_rethrow()` |
| `updateTag.mdx` | `updateTag()` |
| `use-link-status.mdx` | `useLinkStatus()` |
| `use-params.mdx` | `useParams()` |
| `use-pathname.mdx` | `usePathname()` |
| `use-report-web-vitals.mdx` | `useReportWebVitals()` |
| `use-router.mdx` | `useRouter()` |
| `use-search-params.mdx` | `useSearchParams()` |
| `use-selected-layout-segment.mdx` | `useSelectedLayoutSegment()` |
| `use-selected-layout-segments.mdx` | `useSelectedLayoutSegments()` |
| `userAgent.mdx` | `userAgent()` |

### 01-app/03-api-reference/05-config/01-next-config-js/ (60 files)

Key configuration options:

| File | Description |
|------|-------------|
| `index.mdx` | next.config.js overview |
| `appDir.mdx` | appDir |
| `basePath.mdx` | basePath |
| `cacheComponents.mdx` | cacheComponents |
| `cacheHandlers.mdx` | cacheHandlers |
| `compress.mdx` | compress |
| `distDir.mdx` | distDir |
| `env.mdx` | env |
| `headers.mdx` | headers |
| `images.mdx` | images |
| `logging.mdx` | logging |
| `optimizePackageImports.mdx` | optimizePackageImports |
| `output.mdx` | output |
| `pageExtensions.mdx` | pageExtensions |
| `reactStrictMode.mdx` | reactStrictMode |
| `redirects.mdx` | redirects |
| `rewrites.mdx` | rewrites |
| `serverExternalPackages.mdx` | serverExternalPackages |
| `transpilePackages.mdx` | transpilePackages |
| `turbopack.mdx` | turbopack |
| `typescript.mdx` | typescript |
| `webpack.mdx` | webpack customization |

### 01-app/03-api-reference/06-cli/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | CLI overview |
| `create-next-app.mdx` | `create-next-app` |
| `next.mdx` | `next` CLI |

### 02-pages/ (Pages Router)

Mirrors the App Router structure for the Pages Router:

| Directory | Description |
|-----------|-------------|
| `01-getting-started/` | Pages Router setup (6 files) |
| `02-guides/` | Guides (29 files) |
| `03-building-your-application/01-routing/` | Pages, dynamic routes, API routes (7 files) |
| `03-building-your-application/02-rendering/` | SSR, SSG, CSR (5 files) |
| `03-building-your-application/03-data-fetching/` | getStaticProps, getServerSideProps (6 files) |
| `04-api-reference/01-components/` | Image, Link, Script, Head, Form (8 files) |
| `04-api-reference/03-functions/` | useRouter, getInitialProps, etc. (12 files) |
| `04-api-reference/04-config/01-next-config-js/` | next.config.js options (38 files) |

### 03-architecture/ (5 files)

| File | Description |
|------|-------------|
| `accessibility.mdx` | Accessibility |
| `fast-refresh.mdx` | Fast Refresh |
| `index.mdx` | Architecture overview |
| `nextjs-compiler.mdx` | SWC compiler |
| `supported-browsers.mdx` | Browser support |
