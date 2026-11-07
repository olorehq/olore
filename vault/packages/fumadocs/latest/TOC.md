# fumadocs Table of Contents

## Directory Map

```
contents/
├── (framework)/  (6 files)
├── (framework)/community/  (3 files)
├── (framework)/deploying/  (2 files)
├── (framework)/guides/  (6 files)
├── (framework)/integrations/  (4 files)
├── (framework)/integrations/asyncapi/  (5 files)
├── (framework)/integrations/content/  (10 files)
├── (framework)/integrations/graphql/  (4 files)
├── (framework)/integrations/og/  (3 files)
├── (framework)/integrations/openapi/  (6 files)
├── (framework)/integrations/story/  (4 files)
├── (framework)/internationalization/  (6 files)
├── (framework)/manual-installation/  (6 files)
├── (framework)/markdown/  (6 files)
├── (framework)/search/  (11 files)
├── cli/  (3 files)
├── headless/  (3 files)
├── headless/components/  (4 files)
├── headless/content-collections/  (1 files)
├── headless/internationalization/  (2 files)
├── headless/mdx/  (14 files)
├── headless/search/  (9 files)
├── headless/source-api/  (3 files)
├── headless/utils/  (8 files)
├── mdx/  (11 files)
├── mdx/(integrations)/  (2 files)
├── mdx/(integrations)/loader/  (3 files)
├── mdx/entry/  (5 files)
├── ui/  (5 files)
├── ui/components/  (14 files)
├── ui/layouts/  (11 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user / overview | `contents/(framework)/what-is-fumadocs.mdx` |
| Quick start | `contents/(framework)/index.mdx` |
| Manual install (Next.js, Astro, etc.) | `contents/(framework)/manual-installation/index.mdx` |
| Configure content sources | `contents/(framework)/integrations/content/index.mdx` |
| Fumadocs MDX (collections) | `contents/mdx/index.mdx` |
| UI layouts and components | `contents/ui/layouts/index.mdx` |
| Search setup | `contents/(framework)/search/index.mdx` |
| OpenAPI docs | `contents/(framework)/integrations/openapi/index.mdx` |
| Core (headless) library | `contents/headless/index.mdx` |
| CLI | `contents/cli/index.mdx` |

## Detailed Structure

### (framework)/ (6 files)

| File | Description |
|------|-------------|
| `comparisons.mdx` | Comparisons - How is Fumadocs different from other existing frameworks? |
| `editor.mdx` | Visual Editor - Write Markdown and MDX visually, with your files as the source of truth. |
| `index.mdx` | Hello World - Getting Started with Fumadocs |
| `navigation.mdx` | Navigation - Organize sidebar pages, link to other resources, and publish multiple versions of your docs. |
| `page-conventions.mdx` | Page Slugs & Page Tree - A shared convention for organizing your documents |
| `what-is-fumadocs.mdx` | What is Fumadocs - Introducing Fumadocs, a docs framework that you can break. |

### (framework)/community/ (3 files)

| File | Description |
|------|-------------|
| `asyntai.mdx` | Asyntai AI Chatbot - Let readers ask questions and get answers from your docs. |
| `fumadocs-page-history.mdx` | Page History - Display contributors and Git history on documentation pages. |
| `privatus-analytics.mdx` | Privatus Analytics - See how many people read your docs, without cookies. |

### (framework)/deploying/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Deploying - Deploy your Fumadocs app |
| `static.mdx` | Static Build - Output static website with Fumadocs. |

### (framework)/guides/ (6 files)

| File | Description |
|------|-------------|
| `access-control.mdx` | Access Control - Limit the access of content. |
| `customize-ui.mdx` | Customize UI - A complete guide on how to customize Fumadocs UI. |
| `export-epub.mdx` | Export EPUB - Export your documentation to EPUB format for e-readers |
| `export-pdf.mdx` | Export PDF - Export docs pages as PDF documents |
| `index.mdx` | Guides - Useful guides for extending Fumadocs. |
| `rss.mdx` | RSS Feed - Generate a RSS feed for your docs/blog. |

### (framework)/integrations/ (4 files)

| File | Description |
|------|-------------|
| `blog.mdx` | Hello World - My first post. |
| `changelog.mdx` | Changelog - Show the releases of your project. |
| `feedback.mdx` | Feedback - Receive feedback from your users |
| `llms.mdx` | AI & LLMs - Integrate AI functionality to Fumadocs. |

### (framework)/integrations/asyncapi/ (5 files)

| File | Description |
|------|-------------|
| `api-page.mdx` | createAsyncAPIPage() - The component for rendering AsyncAPI docs content |
| `generate-files.mdx` | Generating Pages - Generate pages from AsyncAPI schema. |
| `headless.mdx` | Headless - The state and logic of AsyncAPI pages, without UI. |
| `index.mdx` | AsyncAPI - Generating docs for AsyncAPI schema. |
| `server.mdx` | createAsyncAPI() - The AsyncAPI server instance. |

### (framework)/integrations/content/ (10 files)

| File | Description |
|------|-------------|
| `custom.mdx` | Build Your Own - Build your own content source for Fumadocs. |
| `index.mdx` | Content Source - Integrate different content sources with Fumadocs. |
| `local-html.mdx` | Local HTML - Content source for local HTML files. |
| `local-md.mdx` | Local Markdown - Content source for local Markdown content. |
| `mdx-remote.mdx` | MDX Remote - Compiled Markdown/MDX content on demand. |
| `notion.mdx` | Notion - Pull pages from Notion and render them with Fumadocs. |
| `obsidian.mdx` | Obsidian - Render an Obsidian vault directly with Fumadocs. |
| `python.mdx` | Python - Generate API references from Python packages. |
| `sanity.mdx` | Sanity - Official integration for Sanity. |
| `satteri-local-md.mdx` | Local Markdown (Sätteri) - Content source for local Markdown content, compiled with Sätteri. |

### (framework)/integrations/graphql/ (4 files)

| File | Description |
|------|-------------|
| `api-page.mdx` | createGraphQLPage() - The component for rendering GraphQL docs content |
| `headless.mdx` | Headless - The state and logic of GraphQL pages, without UI. |
| `index.mdx` | GraphQL - Generating docs for GraphQL schema. |
| `server.mdx` | createGraphQL() - The GraphQL server instance. |

### (framework)/integrations/og/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | OG Image Generation - Generate dynamic preview image for docs pages |
| `next.mdx` | next/og - Usage with Next.js Metadata API. |
| `takumi.mdx` | Takumi - Integrate Takumi for framework agnostic and fast metadata image generation. |

### (framework)/integrations/openapi/ (6 files)

| File | Description |
|------|-------------|
| `api-page.mdx` | createOpenAPIPage() - The component for rendering OpenAPI docs content |
| `generate-files.mdx` | Generating Pages - Generate pages from OpenAPI schema. |
| `headless.mdx` | Headless - The state and logic of API pages, without UI. |
| `index.mdx` | OpenAPI - Generating docs for OpenAPI schema. |
| `server.mdx` | createOpenAPI() - The OpenAPI server instance. |
| `standalone.mdx` | Standalone - API docs from your OpenAPI documents, without a docs site. |

### (framework)/integrations/story/ (4 files)

| File | Description |
|------|-------------|
| `headless.mdx` | Headless - Replace the UI of stories, or build your own on the headless layer. |
| `index.mdx` | Story - Display components with controls. |
| `next.mdx` | Next.js - Configure Fumadocs Story on Next.js. |
| `vite.mdx` | Vite - Configure Fumadocs Story for Vite-based frameworks. |

### (framework)/internationalization/ (6 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Astro - Support i18n routing on your Astro + Fumadocs app. |
| `index.mdx` | Internationalization - Support multiple languages in your documentation |
| `next.mdx` | Next.js - Support i18n routing on your Next.js + Fumadocs app |
| `react-router.mdx` | React Router - Support i18n routing on your React Router + Fumadocs app. |
| `tanstack-start.mdx` | TanStack Start - Support i18n routing on your TanStack Start + Fumadocs app. |
| `waku.mdx` | Waku - Support i18n routing on your Waku + Fumadocs app. |

### (framework)/manual-installation/ (6 files)

| File | Description |
|------|-------------|
| `astro.mdx` | Hello World - Setup Fumadocs on Astro. |
| `index.mdx` | Manual Installation - Add Fumadocs to existing projects. |
| `next.mdx` | Hello World - Setup Fumadocs on Next.js. |
| `react-router.mdx` | Hello World - Setup Fumadocs on React Router. |
| `tanstack-start.mdx` | Hello World - Setup Fumadocs on TanStack Start. |
| `waku.mdx` | Hello World - Setup Fumadocs on Waku. |

### (framework)/markdown/ (6 files)

| File | Description |
|------|-------------|
| `index.mdx` | This is a document - How to write documents |
| `math.mdx` | Math - Writing math equations in Markdown/MDX. |
| `mermaid.mdx` | Mermaid - Rendering diagrams in your docs |
| `twoslash.mdx` | Twoslash - Use TypeScript Twoslash in your docs |
| `typescript.mdx` | Auto Type Table - Generate docs from TypeScript definitions |
| `validate-links.mdx` | Validate Links - Ensure your links are correct. |

### (framework)/search/ (11 files)

| File | Description |
|------|-------------|
| `.shared.mdx` | Shared snippet: replacing the search dialog via RootProvider |
| `.tag-filter.mdx` | Shared snippet: custom search dialog with tag filter UI |
| `algolia.mdx` | Algolia - Using Algolia with Fumadocs UI. |
| `custom.mdx` | Custom Search - For other search solutions. |
| `flexsearch.mdx` | FlexSearch - A fast & minimal search engine. |
| `index.mdx` | Search - Implement document search in your docs |
| `meilisearch.mdx` | Meilisearch - Using Meilisearch with Fumadocs UI. |
| `mixedbread.mdx` | Mixedbread - Using Mixedbread with Fumadocs UI. |
| `orama-cloud.mdx` | Orama Cloud - Using Orama Cloud with Fumadocs UI. |
| `orama.mdx` | ZBSearch (default) - The default search engine powered by ZBSearch. |
| `typesense.mdx` | Typesense - Using Typesense with Fumadocs UI. |

### cli/ (3 files)

| File | Description |
|------|-------------|
| `create-fumadocs-app.mdx` | create-fumadocs-app - The CLI to create new Fumadocs apps |
| `index.mdx` | User Guide - The CLI tool that automates setups and installs components. |
| `preview.mdx` | Preview - A light tool to view Markdown files. |

### headless/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Introduction - Getting started with core library |
| `page-conventions.mdx` | My Page - Best document ever |
| `page-tree.mdx` | Page Tree - The structure of page tree. |

### headless/components/ (4 files)

| File | Description |
|------|-------------|
| `breadcrumb.mdx` | Breadcrumb - The navigation component at the top of the screen |
| `index.mdx` | Components - Blocks for your docs |
| `link.mdx` | Link - A Link component that handles external links |
| `toc.mdx` | TOC - Table of Contents |

### headless/content-collections/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Content Collections - Use Content Collections for Fumadocs |

### headless/internationalization/ (2 files)

| File | Description |
|------|-------------|
| `config.mdx` | Configuration - Shared i18n configuration |
| `middleware.mdx` | Middleware - Next.js proxy for implementing i18n routing |

### headless/mdx/ (14 files)

| File | Description |
|------|-------------|
| `headings.mdx` | Headings - Process headings from your document |
| `index.mdx` | MDX Plugins - Useful remark & rehype plugins for your docs. |
| `install.mdx` | Package Install - Generate code blocks for installing packages |
| `rehype-code.mdx` | Rehype Code - Code syntax highlighter |
| `remark-admonition.mdx` | Remark Admonition - Use Admonition in Fumadocs |
| `remark-image.mdx` | Remark Image - Adding size attributes to images. |
| `remark-include.mdx` | Remark Include - Reuse content from other files. |
| `remark-llms.mdx` | Remark LLMs - Export the Markdown of your documents for LLMs. |
| `remark-mdx-files.mdx` | Remark Files - Generate files from codeblocks. |
| `remark-npm.mdx` | Remark NPM - Generate code blocks for package managers |
| `remark-steps.mdx` | Remark Steps - Generate steps from headings |
| `remark-ts2js.mdx` | Remark TS to JS - A remark plugin to transform TypeScript codeblocks into two tabs of codeblock with its JavaScript variant. |
| `stringification.mdx` | Stringification - How Fumadocs turns your documents into Markdown. |
| `structure.mdx` | Remark Structure - Extract search records from your documents. |

### headless/search/ (9 files)

| File | Description |
|------|-------------|
| `algolia.mdx` | Algolia Search - Integrate Algolia Search with Fumadocs |
| `flexsearch.mdx` | FlexSearch - Fast & minimal document search |
| `index.mdx` | Search - Configure Search in Fumadocs |
| `meilisearch.mdx` | Meilisearch - Integrate Meilisearch with Fumadocs |
| `mixedbread.mdx` | Mixedbread - Integrate Mixedbread Search with Fumadocs |
| `orama-cloud.mdx` | Orama Cloud - Integrate with Orama Cloud |
| `orama.mdx` | Built-in Search - Built-in document search of Fumadocs |
| `trieve.mdx` | Trieve Search - Integrate Trieve Search with Fumadocs |
| `typesense.mdx` | Typesense Search - Integrate Typesense Search with Fumadocs |

### headless/source-api/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Loader API - Turn content sources into a unified interface |
| `plugins.mdx` | Loader Plugins - Extend Loader API |
| `source.mdx` | Source - Setup sources for Loader API |

### headless/utils/ (8 files)

| File | Description |
|------|-------------|
| `get-toc.mdx` | Get TOC - Parse Table of contents from markdown/mdx content |
| `git-last-edit.mdx` | Last Modified Time - Get the last edit time of a file in Github repository |
| `index.mdx` | Utilities - Utilities to provide extra functionality to your docs |
| `markdown.mdx` | Markdown Rendering - Render React elements into Markdown. |
| `mcp.mdx` | MCP - Expose your docs to AI agents as MCP tools. |
| `negotiation.mdx` | Negotiation - Content negotiation utilities. |
| `page-tree.mdx` | Page Tree Utils - Common utilities to interact with page tree. |
| `shiki.mdx` | Highlighter - Highlight code with Shiki, or a highlighter of your choice. |

### mdx/ (11 files)

| File | Description |
|------|-------------|
| `async.mdx` | Lazy Loading - Configure lazy loading on collection outputs. |
| `collections.mdx` | Collections - Collection of content data for your app |
| `global.mdx` | Global Options - Customize Fumadocs MDX |
| `include.mdx` | Include - Reuse content from other files. |
| `index.mdx` | Getting Started - Introducing Fumadocs MDX, the official content source of Fumadocs. |
| `last-modified.mdx` | Last Modified Time - Output the last modified time of a document |
| `macro.mdx` | Macro API - Define collections in your app with fumadocs-mdx/macro. |
| `mdx.mdx` | MDX Presets - Customize the default configurations for MDX processor. |
| `performance.mdx` | Performance - The performance of Fumadocs MDX |
| `typegen.mdx` | Generate Types - Generate types without running dev/build server |
| `workspace.mdx` | Workspace - Use Fumadocs MDX in multiple workspace. |

### mdx/(integrations)/ (2 files)

| File | Description |
|------|-------------|
| `next.mdx` | Next.js - Use Fumadocs MDX with Next.js |
| `vite.mdx` | Vite - Use Fumadocs MDX with Vite |

### mdx/(integrations)/loader/ (3 files)

| File | Description |
|------|-------------|
| `bun.mdx` | Bun - Access content in Bun. |
| `index.mdx` | Runtime Loader - Fumadocs MDX loader integration. |
| `node.mdx` | Node.js - Access content in Node.js runtime. |

### mdx/entry/ (5 files)

| File | Description |
|------|-------------|
| `browser.mdx` | Browser Entry - Access collections from browser/client environment. |
| `dynamic.mdx` | Dynamic Entry - Accessing your collections with on-demand compilation. |
| `import.mdx` | My Page - Importing MDX files directly. |
| `index.mdx` | Accessing Collections - Access collection outputs from entry files. |
| `server.mdx` | Server Entry - Accessing collection outputs from server. |

### ui/ (5 files)

| File | Description |
|------|-------------|
| `component-library.mdx` | Component Library - The underlying headless component library. |
| `index.mdx` | Overview - The default theme of Fumadocs |
| `search.mdx` | Search UI - The UI for document search |
| `theme.mdx` | Themes - Add Theme to Fumadocs UI |
| `translations.mdx` | Translations - Adding Translations to UI |

### ui/components/ (14 files)

| File | Description |
|------|-------------|
| `accordion.mdx` | Hello World - Add Accordions to your documentation |
| `auto-type-table.mdx` | Auto Type Table - Auto-generated type table |
| `banner.mdx` | Banner - Add a banner to your site |
| `codeblock.mdx` | Code Block - Displaying Shiki highlighted code blocks |
| `dynamic-codeblock.mdx` | Code Block (Dynamic) - A codeblock that also highlights code |
| `files.mdx` | Files - Display file structure in your documentation |
| `github-info.mdx` | GitHub Info - Display your GitHub repository information |
| `graph-view.mdx` | Graph View - A graph of all pages. |
| `image-zoom.mdx` | Zoomable Image - Allow zoom-in images in your documentation |
| `index.mdx` | Components - Additional components to improve your docs |
| `inline-toc.mdx` | Inline TOC - Add Inline TOC into your documentation |
| `steps.mdx` | Steps - Adding steps to your docs |
| `tabs.mdx` | Tabs - A Tabs component built with Base UI, with additional features such as |
| `type-table.mdx` | Type Table - A table for documenting types |

### ui/layouts/ (11 files)

| File | Description |
|------|-------------|
| `docs.mdx` | Docs Layout - The layout of documentation |
| `flux.mdx` | Flux Layout - An aggressively minimal layout for docs |
| `glass.mdx` | Glass Layout - A docs layout with a floating, translucent sidebar and header |
| `home-layout.mdx` | Home Layout - Shared layout for other pages |
| `index.mdx` | Layouts - A list of layout components. |
| `links.mdx` | Layout Links - Navigation configurations on all layouts. |
| `nav.mdx` | Navbar - Navbar/header configurations. |
| `notebook.mdx` | Notebook Layout - A compact version of Docs Layout |
| `page.mdx` | Docs Page - A page in your documentation |
| `root-provider.mdx` | Root Provider - The context provider of Fumadocs UI. |
| `spacious.mdx` | Spacious Layout - A less compact version of Docs Layout |
