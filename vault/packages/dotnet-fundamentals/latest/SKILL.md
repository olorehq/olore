---
name: olore-dotnet-fundamentals-latest
description: Local dotnet-fundamentals documentation reference (latest). .NET fundamentals documentation. Use for runtime libraries, networking, reflection, code analysis, diagnostics, and .NET standard library APIs.
---

# dotnet-fundamentals Documentation

.NET fundamentals documentation. Use for runtime libraries, networking, reflection, code analysis, diagnostics, and .NET standard library APIs.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Code analysis overview | `contents/code-analysis/overview.md` |
| Code quality rules (CA) | `contents/code-analysis/quality-rules/index.md` |
| Code style rules (IDE) | `contents/code-analysis/style-rules/index.md` |
| HttpClient usage | `contents/networking/http/httpclient.md` |
| Reflection overview | `contents/reflection/overview.md` |
| SYSLIB obsoletions | `contents/syslib-diagnostics/obsoletions-overview.md` |
| Runtime events/diagnostics | `contents/diagnostics/runtime-events.md` |
| API compatibility | `contents/apicompat/overview.md` |

## When to use

Use this skill when the user asks about:
- .NET code analysis rules: CA-prefixed quality rules or IDE-prefixed style rules
- Configuring analyzers, .editorconfig, suppressing warnings
- HttpClient, WebSockets, TCP sockets, QUIC, networking telemetry
- Reflection, Reflection.Emit, dynamic methods, generic types at runtime
- SYSLIB0xxx obsoletion diagnostics and workarounds
- SYSLIB1xxx source-generator diagnostics (RegexGenerator, JsonSourceGen, etc.)
- Runtime library API supplementary docs (System.Object, System.GC, System.Threading, etc.)
- .NET runtime ETW/EventPipe diagnostic events (GC, exceptions, threads, JIT)
- API compatibility tooling and package validation

## How to find information

1. **First**, read `TOC.md` for complete file listing organized by directory
2. Identify relevant section based on user's question
3. Read specific files for details

**TOC.md contains all files organized by directory - always check it first.**
