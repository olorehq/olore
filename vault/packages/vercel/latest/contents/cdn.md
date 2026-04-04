# Vercel CDN

Globally distributed network that caches content, routes requests, and runs compute close to your data. Included automatically with every deployment.

## Key Features

- **126+ PoPs** across 51 countries, 20+ compute regions
- **Framework-aware** — reads routing/caching config at build time
- **Git-driven** — CDN changes scoped to branches, testable via preview URLs
- **DDoS mitigation** — always-on, unmetered, at no extra cost
- **Auto SSL** — TLS 1.2/1.3 with automatic certificate provisioning

## Caching

### Incremental Static Regeneration (ISR)
Serves cached pages, regenerates in background on expiry:
- Supported: Next.js, SvelteKit, Nuxt, Astro
- Automatic cache management, request collapsing, purging

### CDN Cache
Stores responses across regions, closest to visitors. Controlled via:
- Framework configuration (automatic)
- Cache-Control headers (manual)

### Runtime Cache
Stores fetch results, DB queries, computed values inside functions.

### Cache Management
```bash
vercel cache purge                          # Purge all
vercel cache purge --type cdn               # CDN only
vercel cache purge --type data              # Data cache only
vercel cache invalidate --tag foo           # Invalidate by tag
```

## Routing

Evaluated before cache checks:
- **Redirects** — return new URL to client
- **Rewrites** — map public URL to different backend path (including external)
- **Headers** — modify request/response metadata

## Security

- Platform-wide DDoS mitigation
- Configurable WAF with custom rules
- Bot Management and BotID
- AI bot filtering
- Security headers

## Image Optimization

Resize, crop, convert to WebP/AVIF. Cached on CDN automatically.

## Pricing

CDN pricing covers: Fast Data Transfer, Fast Origin Transfer, CDN Requests. Each plan includes usage allotment.
