---
name: olore-zod-4.5.4
description: Local Zod documentation reference (4.5.4). Zod schema validation for TypeScript. Use for schema definition, parsing, type inference, error customization and formatting, refinements and transforms, codecs, JSON Schema conversion, metadata registries, Zod Mini, and z.compile AOT compilation.
---

# zod Documentation

Zod is a TypeScript-first schema validation library with static type inference. This package is pinned to **v4.5.4**.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/index.mdx` | Intro | What Zod is, install, the 30-second example |
| `contents/basics.mdx` | Basic usage | Define a schema, parse, handle errors, infer types |
| `contents/api.mdx` | Defining schemas | **Main API reference.** All schema types, methods, string formats, refinements, transforms |
| `contents/compile.mdx` | AOT compilation | `z.compile()` — compile a schema into a flat, loop-free validator for hot paths |
| `contents/codecs.mdx` | Codecs | `z.codec()`, `.encode()` / `.decode()` for bidirectional transforms |
| `contents/error-customization.mdx` | Customizing errors | The `error` param, error maps, per-issue messages |
| `contents/error-formatting.mdx` | Formatting errors | `z.treeifyError`, `z.prettifyError`, `z.flattenError` |
| `contents/json-schema.mdx` | JSON Schema | `z.toJSONSchema()` / `z.fromJSONSchema()`, OpenAPI interop |
| `contents/metadata.mdx` | Metadata and registries | `z.registry`, `.meta()`, `.describe()` |
| `contents/ecosystem.mdx` | Ecosystem | Integrations and community tooling |
| `contents/library-authors.mdx` | For library authors | Peer dep ranges, Standard Schema, generic schema helpers |
| `contents/packages/zod.mdx` | Zod | Main package internals |
| `contents/packages/mini.mdx` | Zod Mini | Tree-shakable variant for bundle size |
| `contents/packages/core.mdx` | Zod Core | Minimal core for custom implementations |
| `contents/v4/index.mdx` | Release notes | Zod 4 features, perf, breaking changes |
| `contents/v4/changelog.mdx` | Migration guide | Zod 3 → Zod 4 upgrade path |
| `contents/v4/versioning.mdx` | Versioning | Compatibility policy |

## When to use

Use this skill when the user asks about:
- Defining and composing schemas (strings, numbers, objects, arrays, unions, discriminated unions, recursive types)
- Parsing and validating: `.parse()`, `.safeParse()`, `.parseAsync()`, `.decode()`, `.encode()`
- TypeScript inference: `z.infer`, `z.input`, `z.output`, generic schema helpers
- Refinements, transforms, `.check()`, `.superRefine()`, `.pipe()`
- Customizing and formatting validation errors
- Converting to/from JSON Schema or OpenAPI
- Metadata and registries
- **`z.compile()` / AOT compilation for validation-heavy hot paths** (added in 4.5)
- Codecs and bidirectional transforms
- Zod Mini and bundle-size optimization
- Migrating from Zod 3 to Zod 4
- Building a library on top of Zod

## How to find information

1. Check Quick Reference above for the relevant file
2. Most API questions are answered by `contents/api.mdx` — it is large, so search within it rather than reading it whole
3. Read specific files from `contents/{filename}`
