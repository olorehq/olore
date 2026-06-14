# Astro Table of Contents

## Directory Map

```
contents/
├── getting-started.mdx         # Introduction to Astro
├── install-and-setup.mdx       # Installation and project setup
├── develop-and-build.mdx       # Development workflow
├── editor-setup.mdx            # Editor configuration
├── upgrade-astro.mdx           # Upgrading Astro versions
├── basics/                     # Core building blocks (4 files)
├── concepts/                   # Foundational concepts (2 files)
├── guides/                     # How-to guides (112 files)
│   ├── (root)                  # Core feature guides (31 files)
│   ├── backend/                # Backend service integrations (8 files)
│   ├── cms/                    # CMS integrations (20 files)
│   ├── deploy/                 # Deployment platform guides (31 files)
│   ├── integrations-guide/     # Official integrations (19 files)
│   └── media/                  # Media hosting integrations (3 files)
├── recipes/                    # Short how-to examples (21 files)
├── reference/                  # API and config reference (186 files)
│   ├── (root)                  # Core reference docs (18 files)
│   ├── errors/                 # Error code reference (147 files)
│   ├── experimental-flags/     # Experimental feature flags (10 files)
│   └── modules/                # Built-in module APIs (11 files)
└── tutorial/                   # Build-a-Blog tutorial (33 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started.mdx` |
| Installation | `contents/install-and-setup.mdx` |
| Core concepts | `contents/basics/project-structure.mdx` |
| API reference | `contents/reference/api-reference.mdx` |
| Configuration | `contents/reference/configuration-reference.mdx` |
| CLI commands | `contents/reference/cli-reference.mdx` |
| Routing | `contents/guides/routing.mdx` |
| Troubleshooting | `contents/guides/troubleshooting.mdx` |
| Error lookup | `contents/reference/errors/` |
| Tutorial | `contents/tutorial/0-introduction/index.mdx` |

## Detailed Structure

### Root (5 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Introduction and overview |
| `install-and-setup.mdx` | Installation and new project setup |
| `develop-and-build.mdx` | Dev server, build process |
| `editor-setup.mdx` | Editor extensions and config |
| `upgrade-astro.mdx` | How to upgrade Astro versions |

### basics/ (4 files)

| File | Description |
|------|-------------|
| `astro-components.mdx` | Astro component syntax and usage |
| `astro-pages.mdx` | Page files and routing basics |
| `layouts.mdx` | Layout components |
| `project-structure.mdx` | Project directory structure |

### concepts/ (2 files)

| File | Description |
|------|-------------|
| `islands.mdx` | Islands architecture explained |
| `why-astro.mdx` | Why use Astro, key benefits |

### guides/ — core feature guides (31 files)

| File | Description |
|------|-------------|
| `actions.mdx` | Astro Actions (type-safe server functions) |
| `astro-db.mdx` | Astro DB (built-in SQLite database) |
| `authentication.mdx` | Auth strategies and integrations |
| `build-with-ai.mdx` | Building with AI tools |
| `client-side-scripts.mdx` | Client-side JavaScript |
| `configuring-astro.mdx` | astro.config.mjs options |
| `content-collections.mdx` | Content collections API |
| `data-fetching.mdx` | Fetching data at build/runtime |
| `dev-toolbar.mdx` | Dev toolbar and apps |
| `ecommerce.mdx` | E-commerce integrations |
| `endpoints.mdx` | API endpoints and SSR routes |
| `environment-variables.mdx` | Env vars and `astro:env` |
| `fonts.mdx` | Font loading and optimization |
| `framework-components.mdx` | Using React/Vue/Svelte etc. |
| `images.mdx` | Image optimization and `<Image>` |
| `imports.mdx` | Supported file imports |
| `integrations.mdx` | Adding and using integrations |
| `internationalization.mdx` | i18n routing and localization |
| `markdown-content.mdx` | Markdown and MDX in Astro |
| `middleware.mdx` | Request/response middleware |
| `on-demand-rendering.mdx` | SSR and hybrid rendering |
| `prefetch.mdx` | Link prefetching |
| `routing.mdx` | File-based routing, dynamic routes |
| `server-islands.mdx` | Server islands pattern |
| `sessions.mdx` | Session management |
| `styling.mdx` | CSS, scoped styles, CSS modules |
| `syntax-highlighting.mdx` | Code block syntax highlighting |
| `testing.mdx` | Testing Astro projects |
| `troubleshooting.mdx` | Common issues and fixes |
| `typescript.mdx` | TypeScript setup and usage |
| `view-transitions.mdx` | View Transitions API |

### guides/backend/ (8 files)

| File | Description |
|------|-------------|
| `firebase.mdx` | Firebase with Astro |
| `neon.mdx` | Neon serverless Postgres |
| `prisma-postgres.mdx` | Prisma + Postgres |
| `scalekit.mdx` | Scalekit SSO/auth |
| `sentry.mdx` | Sentry error monitoring |
| `supabase.mdx` | Supabase (auth + database) |
| `turso.mdx` | Turso SQLite at the edge |
| `xata.mdx` | Xata serverless database |

### guides/cms/ (20 files)

| File | Description |
|------|-------------|
| `builderio.mdx` | Builder.io visual CMS |
| `buttercms.mdx` | ButterCMS |
| `contentful.mdx` | Contentful headless CMS |
| `cosmic.mdx` | Cosmic CMS |
| `datocms.mdx` | DatoCMS |
| `flotiq.mdx` | Flotiq CMS |
| `frontmatter-cms.mdx` | Front Matter CMS (VS Code) |
| `ghost.mdx` | Ghost headless CMS |
| `gitcms.mdx` | Git-based CMS |
| `hashnode.mdx` | Hashnode blog platform |
| `hygraph.mdx` | Hygraph GraphQL CMS |
| `keystatic.mdx` | Keystatic local CMS |
| `kontent-ai.mdx` | Kontent.ai CMS |
| `statamic.mdx` | Statamic CMS |
| `storyblok.mdx` | Storyblok visual CMS |
| `strapi.mdx` | Strapi headless CMS |
| `studiocms.mdx` | StudioCMS |
| `tina-cms.mdx` | TinaCMS git-based CMS |
| `umbraco.mdx` | Umbraco CMS |
| `wordpress.mdx` | Headless WordPress |

### guides/deploy/ (31 files)

| File | Description |
|------|-------------|
| `vercel.mdx` | Deploy to Vercel |
| `netlify.mdx` | Deploy to Netlify |
| `cloudflare.mdx` | Deploy to Cloudflare Pages |
| `aws.mdx` | Deploy to AWS (S3 + CloudFront) |
| `aws-via-flightcontrol.mdx` | AWS via Flightcontrol |
| `aws-via-sst.mdx` | AWS via SST |
| `azion.mdx` | Deploy to Azion |
| `buddy.mdx` | Deploy via Buddy CI |
| `cleavr.mdx` | Deploy to Cleavr |
| `clever-cloud.mdx` | Deploy to Clever Cloud |
| `cloudray.mdx` | Deploy to Cloudray |
| `deno.mdx` | Deploy to Deno Deploy |
| `deployhq.mdx` | Deploy via DeployHQ |
| `edgeone-pages.mdx` | Deploy to Tencent EdgeOne Pages |
| `firebase.mdx` | Deploy to Firebase Hosting |
| `fleek.mdx` | Deploy to Fleek |
| `github.mdx` | Deploy to GitHub Pages |
| `gitlab.mdx` | Deploy to GitLab Pages |
| `google-cloud.mdx` | Deploy to Google Cloud |
| `heroku.mdx` | Deploy to Heroku |
| `hostinger.mdx` | Deploy to Hostinger |
| `juno.mdx` | Deploy to Juno (ICP) |
| `microsoft-azure.mdx` | Deploy to Microsoft Azure |
| `render.mdx` | Deploy to Render |
| `seenode.mdx` | Deploy to Seenode |
| `sevalla.mdx` | Deploy to Sevalla |
| `stormkit.mdx` | Deploy to Stormkit |
| `surge.mdx` | Deploy to Surge.sh |
| `zeabur.mdx` | Deploy to Zeabur |
| `zephyr.mdx` | Deploy to Zephyr Cloud |
| `zerops.mdx` | Deploy to Zerops |

### guides/integrations-guide/ (19 files)

| File | Description |
|------|-------------|
| `alpinejs.mdx` | Alpine.js integration |
| `cloudflare.mdx` | Cloudflare adapter |
| `db.mdx` | Astro DB integration |
| `deno.mdx` | Deno adapter |
| `lit.mdx` | Lit web components integration |
| `markdoc.mdx` | Markdoc integration |
| `mdx.mdx` | MDX integration |
| `netlify.mdx` | Netlify adapter |
| `node.mdx` | Node.js adapter |
| `partytown.mdx` | Partytown integration |
| `preact.mdx` | Preact integration |
| `prefetch.mdx` | Prefetch integration |
| `react.mdx` | React integration |
| `sitemap.mdx` | Sitemap integration |
| `solid-js.mdx` | Solid.js integration |
| `svelte.mdx` | Svelte integration |
| `tailwind.mdx` | Tailwind CSS integration |
| `vercel.mdx` | Vercel adapter |
| `vue.mdx` | Vue integration |

### guides/media/ (3 files)

| File | Description |
|------|-------------|
| `cloudinary.mdx` | Cloudinary image/video hosting |
| `imagekit.mdx` | ImageKit media hosting |
| `mux.mdx` | Mux video hosting |

### recipes/ (21 files)

| File | Description |
|------|-------------|
| `add-yaml-support.mdx` | Add YAML file support |
| `analyze-bundle-size.mdx` | Analyze bundle size |
| `build-custom-img-component.mdx` | Build a custom image component |
| `build-forms-api.mdx` | Build forms with API endpoints |
| `build-forms.mdx` | Build HTML forms |
| `bun.mdx` | Use Bun as package manager |
| `call-endpoints.mdx` | Call API endpoints from components |
| `captcha.mdx` | Add CAPTCHA to forms |
| `customizing-output-filenames.mdx` | Customize build output filenames |
| `docker.mdx` | Dockerize an Astro project |
| `dynamically-importing-images.mdx` | Dynamic image imports |
| `external-links.mdx` | Handle external links |
| `i18n.mdx` | Manual i18n without built-in routing |
| `making-toolbar-apps.mdx` | Build dev toolbar apps |
| `modified-time.mdx` | Add last-modified time to pages |
| `reading-time.mdx` | Add reading time estimate |
| `rss.mdx` | Generate RSS feeds |
| `sharing-state-islands.mdx` | Share state between islands |
| `sharing-state.mdx` | Share state across components |
| `streaming-improve-page-performance.mdx` | Improve performance with streaming |
| `tailwind-rendered-markdown.mdx` | Style Markdown with Tailwind |

### reference/ — core reference (18 files)

| File | Description |
|------|-------------|
| `api-reference.mdx` | Astro global API (`Astro.*`) |
| `astro-syntax.mdx` | Astro component syntax |
| `cli-reference.mdx` | CLI commands (`astro dev`, `build`, etc.) |
| `configuration-reference.mdx` | All config options |
| `adapter-reference.mdx` | Building SSR adapters |
| `container-reference.mdx` | Container API |
| `content-loader-reference.mdx` | Content loader API |
| `dev-toolbar-app-reference.mdx` | Dev toolbar app API |
| `directives-reference.mdx` | Template directives |
| `error-reference.mdx` | Error codes overview |
| `font-provider-reference.mdx` | Font provider API |
| `image-service-reference.mdx` | Image service API |
| `integrations-reference.mdx` | Integration API |
| `legacy-flags.mdx` | Legacy configuration flags |
| `programmatic-reference.mdx` | Programmatic Astro API |
| `renderer-reference.mdx` | Renderer API |
| `routing-reference.mdx` | Routing API reference |
| `session-driver-reference.mdx` | Session driver API |

### reference/errors/ (147 files)

Individual error code files, one per error. See `reference/error-reference.mdx` for an overview. Files named by error slug, e.g.:
- `action-called-from-server-error.mdx`
- `image-not-found.mdx`
- `no-adapter-installed.mdx`
- `get-static-paths-required.mdx`
- etc.

### reference/experimental-flags/ (10 files)

| File | Description |
|------|-------------|
| `index.mdx` | Experimental flags overview |
| `advanced-routing.mdx` | Advanced routing flag |
| `chrome-devtools-workspace.mdx` | Chrome DevTools workspace flag |
| `client-prerender.mdx` | Client prerender flag |
| `content-intellisense.mdx` | Content IntelliSense flag |
| `logger.mdx` | Logger flag |
| `queued-rendering.mdx` | Queued rendering flag |
| `route-caching.mdx` | Route caching flag |
| `rust-compiler.mdx` | Rust compiler flag |
| `svg-optimization.mdx` | SVG optimization flag |

### reference/modules/ (11 files)

| File | Description |
|------|-------------|
| `astro-actions.mdx` | `astro:actions` module |
| `astro-app.mdx` | `astro:app` module |
| `astro-assets.mdx` | `astro:assets` module |
| `astro-config.mdx` | `astro:config` module |
| `astro-content.mdx` | `astro:content` module |
| `astro-env.mdx` | `astro:env` module |
| `astro-i18n.mdx` | `astro:i18n` module |
| `astro-middleware.mdx` | `astro:middleware` module |
| `astro-static-paths.mdx` | `astro:static-paths` module |
| `astro-transitions.mdx` | `astro:transitions` module |
| `astro-zod.mdx` | `astro:schema` (Zod) module |

### tutorial/ (33 files)

Step-by-step Build-a-Blog tutorial across 6 units:
- `0-introduction/` — Tutorial intro and prep
- `1-setup/` — Project setup (5 steps)
- `2-pages/` — Creating pages (5 steps)
- `3-components/` — Building components (4 steps)
- `4-layouts/` — Using layouts (3 steps)
- `5-astro-api/` — Using Astro APIs (4 steps)
- `6-islands/` — Adding islands (4 steps)
