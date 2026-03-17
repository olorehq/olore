# fumadocs Table of Contents

## Directory Map

```
contents/
├── (framework)/             # Core framework docs (41 files)
│   ├── index.mdx            # Quick start & installation
│   ├── navigation.mdx       # Navigation structure
│   ├── page-conventions.mdx # Page slugs & routing
│   ├── deploying/           # Deployment guides (1 file)
│   ├── guides/              # How-to guides (3 files)
│   ├── integrations/        # Integrations (15 files)
│   │   ├── (docgen)/        # Doc generation (obsidian, python, typescript)
│   │   ├── (og-image)/      # OG image generation (next-og, takumi)
│   │   ├── content/         # Content sources (custom, mdx-remote)
│   │   ├── openapi/         # OpenAPI integration (4 files)
│   │   └── story/           # Fumadocs Story (3 files)
│   ├── internationalization/ # i18n (3 files)
│   ├── manual-installation/ # Manual setup (4 files)
│   ├── markdown/            # MDX authoring (4 files)
│   └── search/              # Search configuration (6 files)
├── cli/                     # CLI tool docs (2 files)
├── headless/                # Fumadocs Core / headless (25 files)
│   ├── components/          # Headless components (3 files)
│   ├── content-collections/ # Content Collections integration (1 file)
│   ├── index.mdx            # Core introduction
│   ├── internationalization/ # i18n config & middleware (2 files)
│   ├── mdx/                 # MDX plugins (8 files)
│   ├── page-conventions.mdx
│   ├── page-tree.mdx
│   ├── search/              # Search backends (5 files)
│   ├── source-api/          # Source API (3 files)
│   └── utils/               # Utilities (4 files)
├── mdx/                     # Fumadocs MDX content source (17 files)
│   ├── index.mdx            # Getting started
│   ├── collections.mdx      # Collections API
│   ├── async.mdx
│   ├── global.mdx
│   ├── include.mdx
│   ├── mdx.mdx
│   ├── typegen.mdx
│   ├── workspace.mdx
│   ├── (integrations)/      # Loader integrations (5 files)
│   └── entry/               # Entry types (5 files)
└── ui/                      # Fumadocs UI theme (24 files)
    ├── component-library.mdx
    ├── search.mdx
    ├── theme.mdx
    ├── components/          # UI components (13 files)
    └── layouts/             # Layout components (8 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New project setup | `contents/(framework)/index.mdx` |
| Manual installation | `contents/(framework)/manual-installation/` |
| MDX authoring | `contents/(framework)/markdown/index.mdx` |
| Search setup | `contents/(framework)/search/` |
| UI layouts & components | `contents/ui/` |
| Headless/Core API | `contents/headless/` |
| Content source (MDX) | `contents/mdx/` |
| OpenAPI integration | `contents/(framework)/integrations/openapi/` |
| i18n | `contents/(framework)/internationalization/` |
| CLI tool | `contents/cli/` |

## Detailed Structure

### (framework)/ - Core Framework (41 files)

| File | Description |
|------|-------------|
| `(framework)/index.mdx` | Quick start, installation, FAQ |
| `(framework)/navigation.mdx` | Navigation structure and configuration |
| `(framework)/page-conventions.mdx` | Page slugs, routing conventions |
| `(framework)/deploying/static.mdx` | Static export / CDN deployment |

### (framework)/guides/ (3 files)

| File | Description |
|------|-------------|
| `(framework)/guides/access-control.mdx` | Access control and authentication |
| `(framework)/guides/export-pdf.mdx` | Export docs as PDF |
| `(framework)/guides/rss.mdx` | RSS feed generation |

### (framework)/integrations/ (15 files)

| File | Description |
|------|-------------|
| `(framework)/integrations/(docgen)/obsidian.mdx` | Obsidian vault integration |
| `(framework)/integrations/(docgen)/python.mdx` | Python doc generation |
| `(framework)/integrations/(docgen)/typescript.mdx` | TypeScript doc generation |
| `(framework)/integrations/(og-image)/next-og.mdx` | OG images with next/og |
| `(framework)/integrations/(og-image)/takumi.mdx` | OG images with Takumi |
| `(framework)/integrations/content/custom.mdx` | Custom content sources |
| `(framework)/integrations/content/mdx-remote.mdx` | MDX Remote integration |
| `(framework)/integrations/feedback.mdx` | User feedback integration |
| `(framework)/integrations/llms.mdx` | LLMs/AI integration |
| `(framework)/integrations/openapi/api-page.mdx` | OpenAPI API page |
| `(framework)/integrations/openapi/generate-files.mdx` | Generate OpenAPI files |
| `(framework)/integrations/openapi/index.mdx` | OpenAPI overview |
| `(framework)/integrations/openapi/server.mdx` | OpenAPI server setup |
| `(framework)/integrations/story/index.mdx` | Fumadocs Story intro |
| `(framework)/integrations/story/next.mdx` | Story with Next.js |
| `(framework)/integrations/story/vite.mdx` | Story with Vite |
| `(framework)/integrations/validate-links.mdx` | Link validation |

### (framework)/internationalization/ (3 files)

| File | Description |
|------|-------------|
| `(framework)/internationalization/next.mdx` | i18n with Next.js |
| `(framework)/internationalization/react-router.mdx` | i18n with React Router |
| `(framework)/internationalization/tanstack-start.mdx` | i18n with TanStack Start |

### (framework)/manual-installation/ (4 files)

| File | Description |
|------|-------------|
| `(framework)/manual-installation/next.mdx` | Manual setup for Next.js |
| `(framework)/manual-installation/react-router.mdx` | Manual setup for React Router |
| `(framework)/manual-installation/tanstack-start.mdx` | Manual setup for TanStack Start |
| `(framework)/manual-installation/waku.mdx` | Manual setup for Waku |

### (framework)/markdown/ (4 files)

| File | Description |
|------|-------------|
| `(framework)/markdown/index.mdx` | MDX syntax overview |
| `(framework)/markdown/math.mdx` | Math/LaTeX support |
| `(framework)/markdown/mermaid.mdx` | Mermaid diagrams |
| `(framework)/markdown/twoslash.mdx` | Twoslash TypeScript annotations |

### (framework)/search/ (6 files)

| File | Description |
|------|-------------|
| `(framework)/search/index.mdx` | Search overview |
| `(framework)/search/algolia.mdx` | Algolia search |
| `(framework)/search/custom.mdx` | Custom search implementation |
| `(framework)/search/mixedbread.mdx` | Mixedbread AI search |
| `(framework)/search/orama-cloud.mdx` | Orama Cloud search |
| `(framework)/search/orama.mdx` | Orama (local) search |

### cli/ (2 files)

| File | Description |
|------|-------------|
| `cli/index.mdx` | CLI user guide |
| `cli/create-fumadocs-app.mdx` | create-fumadocs-app scaffolding |

### headless/ - Fumadocs Core (25 files)

| File | Description |
|------|-------------|
| `headless/index.mdx` | Core introduction and installation |
| `headless/page-conventions.mdx` | Page conventions |
| `headless/page-tree.mdx` | Page tree structure |

### headless/components/ (3 files)

| File | Description |
|------|-------------|
| `headless/components/breadcrumb.mdx` | Breadcrumb component |
| `headless/components/link.mdx` | Link component |
| `headless/components/toc.mdx` | Table of contents component |

### headless/content-collections/ (1 file)

| File | Description |
|------|-------------|
| `headless/content-collections/index.mdx` | Content Collections integration |

### headless/internationalization/ (2 files)

| File | Description |
|------|-------------|
| `headless/internationalization/config.mdx` | i18n configuration |
| `headless/internationalization/middleware.mdx` | i18n middleware |

### headless/mdx/ (8 files)

| File | Description |
|------|-------------|
| `headless/mdx/install.mdx` | MDX installation |
| `headless/mdx/headings.mdx` | Heading extraction |
| `headless/mdx/rehype-code.mdx` | rehype-code plugin |
| `headless/mdx/remark-admonition.mdx` | remark-admonition plugin |
| `headless/mdx/remark-image.mdx` | remark-image plugin |
| `headless/mdx/remark-mdx-files.mdx` | remark-mdx-files plugin |
| `headless/mdx/remark-npm.mdx` | remark-npm plugin |
| `headless/mdx/remark-ts2js.mdx` | remark-ts2js plugin |
| `headless/mdx/structure.mdx` | Document structure extraction |

### headless/search/ (5 files)

| File | Description |
|------|-------------|
| `headless/search/algolia.mdx` | Algolia search (headless) |
| `headless/search/mixedbread.mdx` | Mixedbread search (headless) |
| `headless/search/orama-cloud.mdx` | Orama Cloud (headless) |
| `headless/search/orama.mdx` | Orama local search (headless) |
| `headless/search/trieve.mdx` | Trieve search (headless) |

### headless/source-api/ (3 files)

| File | Description |
|------|-------------|
| `headless/source-api/index.mdx` | Source API overview |
| `headless/source-api/plugins.mdx` | Source API plugins |
| `headless/source-api/source.mdx` | Source API reference |

### headless/utils/ (4 files)

| File | Description |
|------|-------------|
| `headless/utils/get-toc.mdx` | getTOC utility |
| `headless/utils/git-last-edit.mdx` | Git last edit utility |
| `headless/utils/negotiation.mdx` | Language negotiation utility |
| `headless/utils/page-tree.mdx` | Page tree utilities |

### mdx/ - Fumadocs MDX (17 files)

| File | Description |
|------|-------------|
| `mdx/index.mdx` | Getting started with Fumadocs MDX |
| `mdx/collections.mdx` | Collections API |
| `mdx/async.mdx` | Async collections |
| `mdx/global.mdx` | Global configuration |
| `mdx/include.mdx` | Include directive |
| `mdx/last-modified.mdx` | Last modified tracking |
| `mdx/mdx.mdx` | MDX configuration |
| `mdx/performance.mdx` | Performance optimization |
| `mdx/typegen.mdx` | Type generation |
| `mdx/workspace.mdx` | Workspace setup |
| `mdx/(integrations)/next.mdx` | Next.js integration |
| `mdx/(integrations)/vite.mdx` | Vite integration |
| `mdx/(integrations)/loader/index.mdx` | Loader overview |
| `mdx/(integrations)/loader/bun.mdx` | Bun loader |
| `mdx/(integrations)/loader/node.mdx` | Node.js loader |
| `mdx/entry/index.mdx` | Entry types overview |
| `mdx/entry/browser.mdx` | Browser entry |
| `mdx/entry/dynamic.mdx` | Dynamic entry |
| `mdx/entry/import.mdx` | Import entry |
| `mdx/entry/server.mdx` | Server entry |

### ui/ - Fumadocs UI (24 files)

| File | Description |
|------|-------------|
| `ui/component-library.mdx` | Component library overview |
| `ui/search.mdx` | UI search configuration |
| `ui/theme.mdx` | Theming and color customization |

### ui/components/ (13 files)

| File | Description |
|------|-------------|
| `ui/components/accordion.mdx` | Accordion component |
| `ui/components/auto-type-table.mdx` | AutoTypeTable component |
| `ui/components/banner.mdx` | Banner component |
| `ui/components/codeblock.mdx` | CodeBlock component |
| `ui/components/dynamic-codeblock.mdx` | DynamicCodeBlock component |
| `ui/components/files.mdx` | Files/Folder components |
| `ui/components/github-info.mdx` | GitHubInfo component |
| `ui/components/graph-view.mdx` | GraphView component |
| `ui/components/image-zoom.mdx` | ImageZoom component |
| `ui/components/inline-toc.mdx` | InlineTOC component |
| `ui/components/steps.mdx` | Steps component |
| `ui/components/tabs.mdx` | Tabs component |
| `ui/components/type-table.mdx` | TypeTable component |

### ui/layouts/ (8 files)

| File | Description |
|------|-------------|
| `ui/layouts/docs.mdx` | DocsLayout component |
| `ui/layouts/flux.mdx` | Flux layout |
| `ui/layouts/home-layout.mdx` | HomeLayout component |
| `ui/layouts/links.mdx` | Links configuration |
| `ui/layouts/nav.mdx` | Navigation layout |
| `ui/layouts/notebook.mdx` | Notebook layout |
| `ui/layouts/page.mdx` | DocsPage component |
| `ui/layouts/root-provider.mdx` | RootProvider component |
