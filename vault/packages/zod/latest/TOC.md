# zod Documentation Structure

## Files

| File | Description |
|------|-------------|
| `contents/api.mdx` | Complete reference for all Zod schema types (primitives, objects, arrays, unions, etc.), methods, and validations |
| `contents/basics.mdx` | Introductory walkthrough: define a schema, parse data, handle errors, and infer TypeScript types |
| `contents/codecs.mdx` | Bidirectional transformations with z.codec, encode and decode (since zod 4.1) |
| `contents/compile.mdx` | Compile schemas ahead of time into flat validators for faster hot-path validation (z.compile) |
| `contents/ecosystem.mdx` | Third-party integrations, form libraries, code generators, mocking tools, and community resources |
| `contents/error-customization.mdx` | Customize validation messages, per-schema and global error maps, and issue structure |
| `contents/error-formatting.mdx` | Utilities to format ZodError output: treeifyError, prettifyError, flattenError |
| `contents/index.mdx` | Introduction to Zod, installation, requirements, and sponsors |
| `contents/json-schema.mdx` | Convert Zod schemas to JSON Schema with z.toJSONSchema and its options |
| `contents/library-authors.mdx` | Guidance for building libraries on top of Zod, peer dependencies, and Zod 3/4 support |
| `contents/metadata.mdx` | Attach metadata to schemas with .meta(), .describe(), and custom registries |
| `contents/packages/core.mdx` | The zod/v4/core sub-package: base classes and utilities for custom implementations |
| `contents/packages/mini.mdx` | Tree-shakable functional variant of Zod, when to use it, and key differences |
| `contents/packages/zod.mdx` | Internals and structure of the flagship zod package |
| `contents/v4/changelog.mdx` | Breaking changes and upgrade guide from Zod 3 to Zod 4 |
| `contents/v4/index.mdx` | Zod 4 release notes: performance gains, new features, and changes |
| `contents/v4/versioning.mdx` | Versioning strategy and subpath compatibility for Zod 4 |
