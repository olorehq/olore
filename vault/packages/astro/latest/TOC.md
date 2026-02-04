# Astro Table of Contents

## Directory Map

```
contents/
├── getting-started.mdx         # Main landing page
├── install-and-setup.mdx       # Installation guide
├── editor-setup.mdx            # Editor configuration
├── develop-and-build.mdx       # Development workflow
├── upgrade-astro.mdx           # Upgrade guide
├── basics/                     # Core concepts (4 files)
├── concepts/                   # Architecture concepts (2 files)
├── guides/                     # Usage guides (156 files)
│   ├── backend/                # Backend integrations
│   ├── cms/                    # CMS integrations
│   ├── deploy/                 # Deployment guides
│   ├── integrations-guide/     # Integration setup
│   ├── media/                  # Images and media
│   ├── migrate-to-astro/       # Migration guides
│   └── upgrade-to/             # Version upgrade guides
├── recipes/                    # How-to recipes (22 files)
├── reference/                  # API reference (170 files)
│   ├── errors/                 # Error documentation
│   ├── experimental-flags/     # Experimental features
│   └── modules/                # Module reference
└── tutorial/                   # Step-by-step tutorial (33 files)
    ├── 0-introduction/         # Tutorial introduction
    ├── 1-setup/                # Setup steps
    ├── 2-pages/                # Working with pages
    ├── 3-components/           # Component basics
    ├── 4-layouts/              # Layout patterns
    ├── 5-astro-api/            # Using Astro APIs
    └── 6-islands/              # Islands architecture
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started.mdx` |
| Installation | `contents/install-and-setup.mdx` |
| Core concepts | `contents/basics/` |
| API reference | `contents/reference/api-reference.mdx` |
| Configuration | `contents/reference/configuration-reference.mdx` |
| CLI commands | `contents/reference/cli-reference.mdx` |
| Tutorial | `contents/tutorial/0-introduction/` |
| Deployment | `contents/guides/deploy/` |
| Troubleshooting | `contents/reference/errors/` |

## Detailed Structure

### Root Level (5 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Main documentation landing page |
| `install-and-setup.mdx` | Installation and setup guide |
| `editor-setup.mdx` | Editor and IDE configuration |
| `develop-and-build.mdx` | Development and build workflow |
| `upgrade-astro.mdx` | Upgrading Astro versions |

### basics/ (4 files)

| File | Description |
|------|-------------|
| `astro-components.mdx` | Astro component fundamentals |
| `astro-pages.mdx` | Page creation and routing |
| `layouts.mdx` | Layout components |
| `project-structure.mdx` | Project file structure |

### concepts/ (2 files)

| File | Description |
|------|-------------|
| `islands.mdx` | Islands architecture |
| `why-astro.mdx` | Astro philosophy and benefits |

### guides/ (156 files)

Top-level guides:
- `actions.mdx` - Astro Actions
- `astro-db.mdx` - Astro DB integration
- `authentication.mdx` - Authentication patterns
- `build-with-ai.mdx` - AI integrations
- `client-side-scripts.mdx` - Client-side JavaScript
- `configuring-astro.mdx` - Configuration guide
- `content-collections.mdx` - Content collections
- `data-fetching.mdx` - Data fetching patterns
- `dev-toolbar.mdx` - Development toolbar
- `ecommerce.mdx` - E-commerce patterns
- `endpoints.mdx` - API endpoints
- `environment-variables.mdx` - Environment configuration
- `fonts.mdx` - Font loading
- `framework-components.mdx` - Framework integration
- `images.mdx` - Image optimization
- `imports.mdx` - Import patterns
- `markdown-content.mdx` - Markdown content
- `middleware.mdx` - Middleware
- `prefetch.mdx` - Prefetching
- `routing.mdx` - Routing
- `server-islands.mdx` - Server islands
- `styling.mdx` - CSS and styling
- `testing.mdx` - Testing
- `troubleshooting.mdx` - Troubleshooting guide
- `typescript.mdx` - TypeScript integration
- `view-transitions.mdx` - View transitions

#### guides/backend/
- Backend service integrations

#### guides/cms/
- CMS integrations (Contentful, Sanity, etc.)

#### guides/deploy/
- Deployment platform guides (Vercel, Netlify, Cloudflare, etc.)

#### guides/integrations-guide/
- Integration development and usage

#### guides/media/
- Image and media handling

#### guides/migrate-to-astro/
- Migration guides from other frameworks

#### guides/upgrade-to/
- Version-specific upgrade guides

### recipes/ (22 files)

Practical how-to recipes:
- `add-yaml-support.mdx` - YAML support
- `analyze-bundle-size.mdx` - Bundle analysis
- `build-custom-img-component.mdx` - Custom image components
- `build-forms-api.mdx` - Form APIs
- `build-forms.mdx` - Form handling
- `bun.mdx` - Using Bun
- `call-endpoints.mdx` - Calling endpoints
- `captcha.mdx` - CAPTCHA integration
- `customizing-output-filenames.mdx` - Output customization
- `docker.mdx` - Docker deployment
- `dynamically-importing-images.mdx` - Dynamic images
- `external-links.mdx` - External link handling
- `i18n.mdx` - Internationalization
- `making-toolbar-apps.mdx` - Toolbar apps
- `modify-frontmatter.mdx` - Frontmatter modification
- `reading-time.mdx` - Reading time calculation
- `rss.mdx` - RSS feeds
- `sharing-state-islands.mdx` - Shared state
- `streaming-improve-page-performance.mdx` - Streaming
- `studio.mdx` - Astro Studio
- `tailwind-rendered-markdown.mdx` - Tailwind with Markdown
- `vitejs-integrations-with-vite.mdx` - Vite integrations

### reference/ (170 files)

Top-level reference:
- `adapter-reference.mdx` - Adapter API
- `api-reference.mdx` - Runtime API (Astro global)
- `astro-syntax.mdx` - Component syntax
- `cli-reference.mdx` - CLI commands
- `configuration-reference.mdx` - Configuration options
- `container-reference.mdx` - Container API
- `content-loader-reference.mdx` - Content loaders
- `dev-toolbar-app-reference.mdx` - Toolbar app API
- `directives-reference.mdx` - Template directives
- `error-reference.mdx` - Error codes
- `image-service-reference.mdx` - Image service API
- `integrations-reference.mdx` - Integration API
- `legacy-flags.mdx` - Legacy flags
- `programmatic-reference.mdx` - Programmatic API
- `publish-to-npm.mdx` - Publishing integrations
- `routing-reference.mdx` - Routing reference

#### reference/errors/ (130+ files)
Detailed error documentation for all error codes

#### reference/experimental-flags/ (12 files)
Experimental feature flags and usage

#### reference/modules/
Module-specific API documentation

### tutorial/ (33 files)

Step-by-step tutorial organized into units:
- **0-introduction/** - Tutorial overview and setup
- **1-setup/** - Project setup
- **2-pages/** - Creating pages
- **3-components/** - Building components
- **4-layouts/** - Working with layouts
- **5-astro-api/** - Using Astro APIs
- **6-islands/** - Interactive islands

Each unit contains multiple lessons (index.mdx, 1.mdx, 2.mdx, etc.)
