---
name: olore-dotnet-fundamentals-latest
description: Local .NET fundamentals documentation reference (latest). .NET fundamentals documentation. Use for runtime libraries, networking, reflection, code analysis, diagnostics, and .NET standard library APIs.
---

# dotnet-fundamentals Documentation

.NET fundamentals documentation covering runtime libraries, networking, reflection, code analysis (quality and style rules), diagnostics, and .NET standard library APIs including System.* types.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Code analysis overview | `contents/code-analysis/overview.md` |
| Quality rule reference (CA####) | `contents/code-analysis/quality-rules/ca{rule-id}.md` |
| Style rule reference (IDE####) | `contents/code-analysis/style-rules/ide{rule-id}.md` |
| Configure code analysis | `contents/code-analysis/configuration-options.md` |
| Runtime library API (System.*) | `contents/runtime-libraries/system-{typename}.md` |
| Networking / HttpClient | `contents/networking/http/httpclient.md` |
| Reflection | `contents/reflection/overview.md` |
| Obsoletion warnings (SYSLIB####) | `contents/syslib-diagnostics/obsoletions-overview.md` |
| API compatibility validation | `contents/apicompat/overview.md` |
| Runtime ETW events | `contents/diagnostics/runtime-events.md` |

## When to use

Use this skill when the user asks about:
- .NET code analysis rules (CA#### quality rules, IDE#### style rules)
- Configuring or suppressing .NET analyzer warnings
- System.* runtime library types (String, DateTime, Task, Regex, HttpClient, etc.)
- .NET networking APIs (HttpClient, Sockets, WebSockets, QUIC)
- .NET reflection and dynamic code generation (Reflection.Emit)
- SYSLIB obsoletion warnings and their workarounds
- .NET runtime diagnostic events (ETW/EventSource)
- API compatibility and package validation

## How to find information

1. **First**, read `TOC.md` for complete file listing organized by directory
2. Identify relevant section based on user's question
3. Read specific files for details

**TOC.md contains all files organized by directory - always check it first.**
