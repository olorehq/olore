# fumadocs Table of Contents

## Directory Map

```
contents/
├── (framework)/              # Framework-level docs (59 files)
│   ├── guides/               # How-to guides
│   ├── integrations/         # Third-party integrations
│   │   ├── (docgen)/         # Doc generators (Obsidian, Python, TypeScript)
│   │   ├── asyncapi/         # AsyncAPI integration
│   │   ├── content/          # Content source adapters
│   │   ├── og/               # OG image generation
│   │   ├── openapi/          # OpenAPI integration
│   │   └── story/            # Component story viewer
│   ├── internationalization/ # i18n support
│   ├── manual-installation/  # Manual setup guides
│   ├── markdown/             # MDX/markdown extensions
│   ├── search/               # Search backends
│   └── deploying/            # Deployment guides
├── cli/                      # CLI tool docs (3 files)
├── headless/                 # Fumadocs Core / headless (38 files)
│   ├── components/           # Headless UI components
│   ├── internationalization/ # i18n config
│   ├── mdx/                  # MDX/remark/rehype plugins
│   ├── search/               # Search integrations
│   ├── source-api/           # Loader/source API
│   └── utils/                # Utilities
├── mdx/                      # Fumadocs MDX (content source) (20 files)
│   ├── (integrations)/       # Bundler integrations (Next.js, Vite, loaders)
│   └── entry/                # Collection entry files
└── ui/                       # Fumadocs UI theme (23 files)
    ├── components/           # UI components
    └── layouts/              # Layout components
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/(framework)/index.mdx` |
| What is Fumadocs | `contents/(framework)/what-is-fumadocs.mdx` |
| Quick installation (CLI) | `contents/cli/index.mdx` |
| Headless core overview | `contents/headless/index.mdx` |
| Fumadocs MDX setup | `contents/mdx/index.mdx` |
| UI theme overview | `contents/ui/index.mdx` |
| Search setup | `contents/(framework)/search/index.mdx` |
| OpenAPI docs | `contents/(framework)/integrations/openapi/index.mdx` |

## Detailed Structure

### (framework)/ - Framework docs (59 files)

| File | Description |
|------|-------------|
| `index.mdx` | Quick start / getting started |
| `what-is-fumadocs.mdx` | Overview of Fumadocs |
| `comparisons.mdx` | Comparison with other frameworks (Nextra, etc.) |
| `navigation.mdx` | Navigation configuration |
| `page-conventions.mdx` | File/routing conventions |

### (framework)/deploying/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Deployment overview |
| `static.mdx` | Static site export |

### (framework)/guides/ (5 files)

| File | Description |
|------|-------------|
| `access-control.mdx` | Access control for docs pages |
| `customize-ui.mdx` | UI customization guide |
| `export-epub.mdx` | Exporting docs to EPUB |
| `export-pdf.mdx` | Exporting docs to PDF |
| `rss.mdx` | RSS feed generation |

### (framework)/integrations/(docgen)/ (3 files)

| File | Description |
|------|-------------|
| `obsidian.mdx` | Render Obsidian vaults in Fumadocs |
| `python.mdx` | Python doc generation |
| `typescript.mdx` | TypeScript doc generation |

### (framework)/integrations/asyncapi/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | AsyncAPI integration setup |
| `api-page.mdx` | AsyncAPI page configuration |
| `generate-files.mdx` | Auto-generate AsyncAPI doc files |
| `server.mdx` | Server configuration |

### (framework)/integrations/content/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | Content source adapters overview |
| `custom.mdx` | Custom content source |
| `local-md.mdx` | Local markdown files |
| `mdx-remote.mdx` | Remote MDX content |
| `sanity.mdx` | Sanity CMS integration |

### (framework)/integrations/og/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | OG image generation overview |
| `next.mdx` | Next.js OG image setup |
| `takumi.mdx` | Takumi OG image setup |

### (framework)/integrations/openapi/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | OpenAPI integration setup |
| `api-page.mdx` | OpenAPI page configuration |
| `generate-files.mdx` | Auto-generate OpenAPI doc files |
| `server.mdx` | Server configuration |

### (framework)/integrations/story/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Story (component showcase) overview |
| `next.mdx` | Story with Next.js |
| `vite.mdx` | Story with Vite |

### (framework)/integrations/ (top-level, 2 files)

| File | Description |
|------|-------------|
| `feedback.mdx` | User feedback integration |
| `llms.mdx` | LLM / AI integration |
| `validate-links.mdx` | Link validation setup |

### (framework)/internationalization/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | i18n overview |
| `next.mdx` | Next.js i18n setup |
| `react-router.mdx` | React Router i18n setup |
| `tanstack-start.mdx` | TanStack Start i18n setup |

### (framework)/manual-installation/ (4 files)

| File | Description |
|------|-------------|
| `next.mdx` | Manual install for Next.js |
| `react-router.mdx` | Manual install for React Router |
| `tanstack-start.mdx` | Manual install for TanStack Start |
| `waku.mdx` | Manual install for Waku |

### (framework)/markdown/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | MDX/markdown writing guide |
| `math.mdx` | Math rendering with KaTeX |
| `mermaid.mdx` | Mermaid diagrams |
| `twoslash.mdx` | TypeScript Twoslash support |

### (framework)/search/ (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | Search overview and configuration |
| `algolia.mdx` | Algolia search integration |
| `custom.mdx` | Custom search implementation |
| `flexsearch.mdx` | FlexSearch integration |
| `mixedbread.mdx` | Mixedbread AI search |
| `orama.mdx` | Orama search integration |
| `orama-cloud.mdx` | Orama Cloud integration |
| `typesense.mdx` | Typesense integration |

### cli/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | CLI user guide |
| `create-fumadocs-app.mdx` | Create new Fumadocs app |
| `preview.mdx` | Local preview command |

### headless/ (38 files)

| File | Description |
|------|-------------|
| `index.mdx` | Fumadocs Core introduction |
| `page-conventions.mdx` | Page conventions for headless usage |
| `page-tree.mdx` | Page tree structure |

### headless/components/ (3 files)

| File | Description |
|------|-------------|
| `breadcrumb.mdx` | Breadcrumb component |
| `link.mdx` | Link component |
| `toc.mdx` | Table of contents component |

### headless/content-collections/ (1 file)

| File | Description |
|------|-------------|
| `index.mdx` | Content Collections integration |

### headless/internationalization/ (2 files)

| File | Description |
|------|-------------|
| `config.mdx` | i18n configuration |
| `middleware.mdx` | i18n middleware setup |

### headless/mdx/ (11 files)

| File | Description |
|------|-------------|
| `install.mdx` | MDX plugin installation |
| `headings.mdx` | Heading processing |
| `rehype-code.mdx` | Code block highlighting (rehype) |
| `remark-admonition.mdx` | Admonition/callout syntax |
| `remark-image.mdx` | Image optimization plugin |
| `remark-llms.mdx` | LLM-friendly content plugin |
| `remark-mdx-files.mdx` | MDX file includes plugin |
| `remark-npm.mdx` | npm package install code blocks |
| `remark-steps.mdx` | Numbered steps plugin |
| `remark-ts2js.mdx` | TypeScript to JavaScript conversion |
| `structure.mdx` | Document structure extraction |

### headless/search/ (7 files)

| File | Description |
|------|-------------|
| `algolia.mdx` | Algolia search (headless) |
| `flexsearch.mdx` | FlexSearch (headless) |
| `mixedbread.mdx` | Mixedbread AI search (headless) |
| `orama.mdx` | Orama search (headless) |
| `orama-cloud.mdx` | Orama Cloud (headless) |
| `trieve.mdx` | Trieve search integration |
| `typesense.mdx` | Typesense (headless) |

### headless/source-api/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Loader API overview |
| `plugins.mdx` | Source API plugins |
| `source.mdx` | Source configuration |

### headless/utils/ (5 files)

| File | Description |
|------|-------------|
| `get-toc.mdx` | Extract table of contents |
| `git-last-edit.mdx` | Last git edit timestamp |
| `negotiation.mdx` | Content negotiation utilities |
| `page-tree.mdx` | Page tree utilities |
| `shiki.mdx` | Shiki syntax highlighter utilities |

### mdx/ (20 files)

| File | Description |
|------|-------------|
| `index.mdx` | Fumadocs MDX getting started |
| `collections.mdx` | Defining content collections |
| `mdx.mdx` | MDX processing configuration |
| `async.mdx` | Async data loading |
| `global.mdx` | Global configuration |
| `include.mdx` | File includes/partials |
| `last-modified.mdx` | Last modified timestamp |
| `performance.mdx` | Performance optimization |
| `typegen.mdx` | TypeScript type generation |
| `workspace.mdx` | Monorepo workspace setup |

### mdx/(integrations)/ (5 files)

| File | Description |
|------|-------------|
| `next.mdx` | Next.js integration |
| `vite.mdx` | Vite integration |
| `loader/index.mdx` | Runtime loader overview |
| `loader/bun.mdx` | Bun runtime loader |
| `loader/node.mdx` | Node.js runtime loader |

### mdx/entry/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | Accessing collections overview |
| `browser.mdx` | Browser entry file |
| `dynamic.mdx` | Dynamic imports |
| `import.mdx` | Static imports |
| `server.mdx` | Server entry file |

### ui/ (23 files)

| File | Description |
|------|-------------|
| `index.mdx` | Fumadocs UI overview |
| `component-library.mdx` | Component library reference |
| `search.mdx` | Search UI customization |
| `theme.mdx` | Theme and styling |
| `translations.mdx` | UI translations/i18n |

### ui/components/ (15 files)

| File | Description |
|------|-------------|
| `index.mdx` | Components overview |
| `accordion.mdx` | Accordion component |
| `auto-type-table.mdx` | Auto-generated type table |
| `banner.mdx` | Banner/announcement component |
| `codeblock.mdx` | Code block component |
| `dynamic-codeblock.mdx` | Dynamic/interactive code block |
| `files.mdx` | File tree component |
| `github-info.mdx` | GitHub repository info component |
| `graph-view.mdx` | Graph/network view component |
| `image-zoom.mdx` | Zoomable image component |
| `inline-toc.mdx` | Inline table of contents |
| `steps.mdx` | Step-by-step component |
| `tabs.mdx` | Tabs component |
| `type-table.mdx` | Type/props table component |

### ui/layouts/ (9 files)

| File | Description |
|------|-------------|
| `index.mdx` | Layouts overview |
| `docs.mdx` | Docs layout |
| `flux.mdx` | Flux layout |
| `home-layout.mdx` | Home/landing page layout |
| `links.mdx` | Navigation links configuration |
| `nav.mdx` | Navbar component |
| `notebook.mdx` | Notebook layout |
| `page.mdx` | Page layout |
| `root-provider.mdx` | Root provider configuration |
