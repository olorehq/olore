# OLore Website

Official website for the olore project.

For documentation about olore itself, see the [root README](../README.md).

## Setup

```bash
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm format` - Format code with Prettier

## Download counter

Installs are counted via Neon Postgres. The CLI's `downloadUrl` points at
`/api/dl/<name>/<version>`, which increments the count (after the response, via
`after()`) and 302-redirects to the GitHub release asset — GitHub still serves
the bytes. `originUrl` in the registry is the direct GitHub URL the CLI falls
back to if the proxy is down.

Setup (one-time, in order):

1. Add the **Neon** integration from the Vercel Marketplace (Storage tab). Pick a
   region near the function region in `vercel.json` (`iad1` → AWS `us-east`). This
   injects `DATABASE_URL`.
2. Apply the schema: run `db/schema.sql` against the Neon database (Neon SQL
   editor, or `psql "$DATABASE_URL" -f db/schema.sql`).
3. **Seed the baseline** from GitHub's current download counts, BEFORE installs
   start flowing through the proxy: `DATABASE_URL=... pnpm tsx scripts/seed-downloads.ts`.
   Idempotent — re-running is a no-op. Skipping this makes a package's displayed
   count drop to its first proxy ping instead of continuing from its GitHub total.
4. Pull the env locally for development: `vercel env pull .env.local`.

The registry page reads live totals from Neon and falls back to the
GitHub-baked count when `DATABASE_URL` is unset (e.g. local dev).
