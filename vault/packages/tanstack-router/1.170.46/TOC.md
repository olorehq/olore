# tanstack-router Table of Contents

## Directory Map

```
contents/
├── router/
│   ├── api/                # API reference (2 files)
│   │   └── router/         # Individual API pages (79 files)
│   ├── eslint/             # ESLint plugin (2 files)
│   ├── guide/              # Core guides (32 files)
│   ├── how-to/             # Task-focused guides (20 files)
│   ├── installation/       # Setup per bundler (8 files)
│   ├── integrations/       # Integrations (1 file)
│   └── routing/            # Routing concepts (7 files)
└── start/
    ├── eslint/             # Start ESLint plugin (3 files)
    └── framework/
        ├── react/          # TanStack Start React (4 + guide 37 + tutorial 2)
        └── solid/          # TanStack Start Solid (3 + guide 30 + tutorial 2)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/router/quick-start.md` |
| Routing | `contents/router/routing/routing-concepts.md` |
| API lookup | `contents/router/api/router.md` |
| Search params | `contents/router/guide/search-params.md` |
| Start (React) | `contents/start/framework/react/getting-started.md` |

## Detailed Structure

### router/ (4 files)

| File |
|------|
| `devtools.md` |
| `faq.md` |
| `overview.md` |
| `quick-start.md` |

### router/api/ (2 files)

Plus `router/api/router/` (79 files): one page per API (see directory).

| File |
|------|
| `file-based-routing.md` |
| `router.md` |

### router/eslint/ (2 files)

| File |
|------|
| `create-route-property-order.md` |
| `eslint-plugin-router.md` |

### router/guide/ (32 files)

| File |
|------|
| `authenticated-routes.md` |
| `automatic-code-splitting.md` |
| `code-splitting.md` |
| `creating-a-router.md` |
| `custom-link.md` |
| `custom-search-param-serialization.md` |
| `data-loading.md` |
| `data-mutations.md` |
| `deferred-data-loading.md` |
| `document-head-management.md` |
| `external-data-loading.md` |
| `history-types.md` |
| `internationalization-i18n.md` |
| `link-options.md` |
| `navigation-blocking.md` |
| `navigation.md` |
| `not-found-errors.md` |
| `outlets.md` |
| `parallel-routes.md` |
| `path-params.md` |
| `preloading.md` |
| `render-optimizations.md` |
| `route-masking.md` |
| `router-context.md` |
| `router-events.md` |
| `scroll-restoration.md` |
| `search-params.md` |
| `ssr.md` |
| `static-route-data.md` |
| `type-safety.md` |
| `type-utilities.md` |
| `url-rewrites.md` |

### router/how-to/ (20 files)

| File |
|------|
| `arrays-objects-dates-search-params.md` |
| `debug-router-issues.md` |
| `deploy-to-production.md` |
| `install.md` |
| `integrate-chakra-ui.md` |
| `integrate-framer-motion.md` |
| `integrate-material-ui.md` |
| `integrate-shadcn-ui.md` |
| `migrate-from-react-router.md` |
| `navigate-with-search-params.md` |
| `setup-auth-providers.md` |
| `setup-authentication.md` |
| `setup-basic-search-params.md` |
| `setup-rbac.md` |
| `setup-ssr.md` |
| `setup-testing.md` |
| `share-search-params-across-routes.md` |
| `test-file-based-routing.md` |
| `use-environment-variables.md` |
| `validate-search-params.md` |

### router/installation/ (8 files)

| File |
|------|
| `manual.md` |
| `migrate-from-react-location.md` |
| `migrate-from-react-router.md` |
| `with-esbuild.md` |
| `with-router-cli.md` |
| `with-rspack.md` |
| `with-vite.md` |
| `with-webpack.md` |

### router/integrations/ (1 files)

| File |
|------|
| `query.md` |

### router/routing/ (7 files)

| File |
|------|
| `code-based-routing.md` |
| `file-based-routing.md` |
| `file-naming-conventions.md` |
| `route-matching.md` |
| `route-trees.md` |
| `routing-concepts.md` |
| `virtual-file-routes.md` |

### start/eslint/ (3 files)

| File |
|------|
| `eslint-plugin-start.md` |
| `no-async-client-component.md` |
| `no-client-code-in-server-component.md` |

### start/framework/react/ (4 files)

| File |
|------|
| `build-from-scratch.md` |
| `getting-started.md` |
| `migrate-from-next-js.md` |
| `overview.md` |

### start/framework/react/guide/ (37 files)

| File |
|------|
| `authentication-overview.md` |
| `authentication-server-primitives.md` |
| `authentication.md` |
| `cdn-asset-urls.md` |
| `client-entry-point.md` |
| `code-execution-patterns.md` |
| `css-styling.md` |
| `databases.md` |
| `deferred-hydration.md` |
| `early-hints.md` |
| `environment-functions.md` |
| `environment-variables.md` |
| `error-boundaries.md` |
| `execution-model.md` |
| `geo.md` |
| `hosting.md` |
| `hydration-errors.md` |
| `import-protection.md` |
| `isr.md` |
| `middleware.md` |
| `observability.md` |
| `path-aliases.md` |
| `production-checklist.md` |
| `rendering-markdown.md` |
| `routing.md` |
| `selective-ssr.md` |
| `seo.md` |
| `server-components.md` |
| `server-entry-point.md` |
| `server-functions.md` |
| `server-routes.md` |
| `spa-mode.md` |
| `static-prerendering.md` |
| `static-server-functions.md` |
| `streaming-data-from-server-functions.md` |
| `tailwind-integration.md` |
| `tanstack-query.md` |

### start/framework/react/tutorial/ (2 files)

| File |
|------|
| `fetching-external-api.md` |
| `reading-writing-file.md` |

### start/framework/solid/ (3 files)

| File |
|------|
| `build-from-scratch.md` |
| `getting-started.md` |
| `overview.md` |

### start/framework/solid/guide/ (30 files)

| File |
|------|
| `authentication-overview.md` |
| `authentication-server-primitives.md` |
| `authentication.md` |
| `client-entry-point.md` |
| `code-execution-patterns.md` |
| `css-styling.md` |
| `databases.md` |
| `deferred-hydration.md` |
| `early-hints.md` |
| `environment-functions.md` |
| `environment-variables.md` |
| `error-boundaries.md` |
| `execution-model.md` |
| `geo.md` |
| `hosting.md` |
| `hydration-errors.md` |
| `import-protection.md` |
| `middleware.md` |
| `observability.md` |
| `path-aliases.md` |
| `routing.md` |
| `selective-ssr.md` |
| `seo.md` |
| `server-entry-point.md` |
| `server-functions.md` |
| `server-routes.md` |
| `spa-mode.md` |
| `static-prerendering.md` |
| `static-server-functions.md` |
| `tailwind-integration.md` |

### start/framework/solid/tutorial/ (2 files)

| File |
|------|
| `fetching-external-api.md` |
| `reading-writing-file.md` |
