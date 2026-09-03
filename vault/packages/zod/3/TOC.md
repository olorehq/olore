# zod v3 Documentation Structure

Zod v3 (final release **3.25.76**, July 2025 — v3 is frozen). Sourced from
`packages/docs-v3/` on `main`, where the v3 docs are preserved. Note this
directory only exists on `main`; it is absent from the `v3.x` tags, and at those
tags `packages/docs/content` holds v4-era docs instead.

## Files

| File | Description |
|------|-------------|
| `contents/home.md` | The complete v3 API reference in one file: primitives, coercion, literals, strings and string formats, numbers, objects (`.shape`, `.extend`, `.merge`, `.pick`/`.omit`, `.partial`, `.passthrough`/`.strict`/`.strip`, `.catchall`), arrays, tuples, unions and discriminated unions, records, maps, sets, intersections, recursive and cyclical types, promises, instanceof, functions, preprocess, custom schemas, and every method (`.parse`, `.safeParse`, `.refine`, `.superRefine`, `.transform`, `.default`, `.catch`, `.optional`, `.nullable`, `.brand`, `.pipe`). Renamed from `README.md` upstream in June 2026 so Vercel would serve it. |
| `contents/ERROR_HANDLING.md` | `ZodError` and `ZodIssue` internals, the full issue-code taxonomy, error maps, and formatting/customization patterns |
| `contents/MIGRATION.md` | Upgrading Zod 1 → 2 and 2 → 3: breaking changes and new features |

For Zod 4, use the `olore-zod-latest` skill. The v3 → v4 migration guide lives
in that package's `v4/changelog.mdx`, not in this one.
