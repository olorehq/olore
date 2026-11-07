---
name: olore-zod-latest
description: Local zod documentation reference (latest). Zod schema validation documentation. Use for TypeScript type inference, parsing, error handling, schema composition, codecs, JSON Schema conversion, and AOT compilation with z.compile.
---

# zod Documentation

Zod schema validation documentation. Use for TypeScript type inference, parsing, error handling, schema composition, codecs, JSON Schema conversion, and AOT compilation with z.compile.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/api.mdx` | Defining schemas | Complete reference for all Zod schema types (primitives, objects, arrays, unions, etc.), methods, and validations |
| `contents/basics.mdx` | Basic usage | Introductory walkthrough: define a schema, parse data, handle errors, and infer TypeScript types |
| `contents/codecs.mdx` | Codecs | Bidirectional transformations with z.codec, encode and decode (since zod 4.1) |
| `contents/compile.mdx` | AOT compilation | Compile schemas ahead of time into flat validators for faster hot-path validation (z.compile) |
| `contents/ecosystem.mdx` | Ecosystem | Third-party integrations, form libraries, code generators, mocking tools, and community resources |
| `contents/error-customization.mdx` | Customizing errors | Customize validation messages, per-schema and global error maps, and issue structure |
| `contents/error-formatting.mdx` | Formatting errors | Utilities to format ZodError output: treeifyError, prettifyError, flattenError |
| `contents/index.mdx` | Intro | Introduction to Zod, installation, requirements, and sponsors |
| `contents/json-schema.mdx` | JSON Schema | Convert Zod schemas to JSON Schema with z.toJSONSchema and its options |
| `contents/library-authors.mdx` | For library authors | Guidance for building libraries on top of Zod, peer dependencies, and Zod 3/4 support |
| `contents/metadata.mdx` | Metadata and registries | Attach metadata to schemas with .meta(), .describe(), and custom registries |
| `contents/packages/core.mdx` | Zod Core | The zod/v4/core sub-package: base classes and utilities for custom implementations |
| `contents/packages/mini.mdx` | Zod Mini | Tree-shakable functional variant of Zod, when to use it, and key differences |
| `contents/packages/zod.mdx` | Zod | Internals and structure of the flagship zod package |
| `contents/v4/changelog.mdx` | Migration guide | Breaking changes and upgrade guide from Zod 3 to Zod 4 |
| `contents/v4/index.mdx` | Release notes | Zod 4 release notes: performance gains, new features, and changes |
| `contents/v4/versioning.mdx` | Versioning | Versioning strategy and subpath compatibility for Zod 4 |

## When to use

Use this skill when the user asks about:
- Defining Zod schemas, parsing data, and inferring TypeScript types
- Customizing and formatting validation errors
- Codecs, transforms, metadata, and registries
- JSON Schema conversion and AOT compilation (z.compile)
- Zod Mini, Zod Core, and migrating from Zod 3 to Zod 4

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
