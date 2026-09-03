# zod Documentation Structure

Pinned to tag `v4.5.4` @ `e8e206fa`.

## Files

| File | Description |
|------|-------------|
| `contents/index.mdx` | Introduction to Zod — TypeScript-first schema validation with static type inference |
| `contents/basics.mdx` | Basic usage: defining a schema, parsing, handling errors, inferring types |
| `contents/api.mdx` | The main API reference — every schema type, method, string format, and validation feature (96KB, the largest file here) |
| `contents/compile.mdx` | `z.compile()` — ahead-of-time compilation of a schema into a flat, loop-free validator for hot paths |
| `contents/codecs.mdx` | Bidirectional transformations via `z.codec()`, `.encode()` / `.decode()` |
| `contents/error-customization.mdx` | Customizing validation messages: `error` param, error maps, per-issue customization |
| `contents/error-formatting.mdx` | Formatting `ZodError` for display: `z.treeifyError`, `z.prettifyError`, `z.flattenError` |
| `contents/json-schema.mdx` | `z.toJSONSchema()` and `z.fromJSONSchema()` — JSON Schema / OpenAPI interop |
| `contents/metadata.mdx` | Attaching metadata to schemas via registries (`z.registry`, `.meta()`, `.describe()`) |
| `contents/ecosystem.mdx` | Third-party integrations, tooling, and community resources |
| `contents/library-authors.mdx` | Building libraries on Zod: peer dependency ranges, Standard Schema, generics |
| `contents/packages/zod.mdx` | The main `zod` package — internals and structure |
| `contents/packages/mini.mdx` | `zod/mini` — tree-shakable variant for bundle-size-sensitive builds |
| `contents/packages/core.mdx` | `zod/v4/core` — minimal core for custom Zod-based implementations |
| `contents/v4/index.mdx` | Zod 4 release notes: performance work, new features, breaking changes |
| `contents/v4/changelog.mdx` | Full Zod 3 → Zod 4 migration guide and changelog |
| `contents/v4/versioning.mdx` | Versioning and compatibility policy |

Blog posts and the Korean/Chinese README translations are excluded by config.
