# Frameworks

Vercel has first-class support for popular frameworks with zero-config deployment.

## Framework Support Matrix

| Feature | Next.js | SvelteKit | Nuxt | TanStack | Astro | Remix | Vite | CRA |
|---|---|---|---|---|---|---|---|---|
| Static Assets | Y | Y | Y | Y | Y | Y | Y | Y |
| Routing Middleware | Y | Y | Y | Y | Y | Y | Y | Y |
| Server-Side Rendering | Y | Y | Y | Y | Y | Y | — | — |
| Streaming SSR | Y | Y | — | Y | Y | Y | — | — |
| ISR | Y | Y | Y | — | Y | — | — | — |
| Image Optimization | Y | Y | Y | — | Y | — | — | — |
| Runtime Cache | Y | — | — | — | — | — | — | — |
| Multi-runtime Support | Y | Y | Y | — | Y | Y | — | — |
| Skew Protection | Y | Y | — | — | Y | — | — | — |

## Features Enabled by Frameworks

- **Vercel Functions** — auto-scale based on traffic
- **Routing Middleware** — code before request processing
- **Multi-runtime** — Node.js, Edge, Bun per route
- **ISR** — update content without redeployment
- **Speed Insights** — Core Web Vitals in dashboard
- **Analytics** — page views, referrers, demographics
- **Skew Protection** — version locking client/server

## Build Output API

For framework authors or custom builds: create `.vercel/output` directory matching the Build Output API spec. Enables all platform features without a supported framework.

## More Frameworks

Also supported: Angular, Gatsby, Hugo, Jekyll, Eleventy, Docusaurus, Hexo, Blitz.js, RedwoodJS, Ember.js, Preact, Brunch, Middleman, Gridsome, Hydrogen, Qwik, SolidStart, and more.
