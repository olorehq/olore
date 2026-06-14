---
name: olore-fluentassertions-latest
description: Local FluentAssertions documentation reference (latest). FluentAssertions documentation. Use for fluent test assertions on collections, strings, exceptions, objects, dates, booleans, enums, and event monitoring in .NET.
---

# fluentassertions Documentation

FluentAssertions documentation. Use for fluent test assertions on collections, strings, exceptions, objects, dates, booleans, enums, and event monitoring in .NET.

## Documentation Structure

```
contents/
├── introduction.md          # Getting started and installation
├── basicassertions.md       # Core assertion methods
├── objectgraphs.md          # Deep equivalency (BeEquivalentTo)
├── collections.md           # Collection assertions
├── strings.md               # String assertions
├── numerictypes.md          # Numeric and IComparable assertions
├── exceptions.md            # Exception assertions
├── [20+ more type-specific and reference files]
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / installation | `contents/introduction.md` |
| Basic / general assertions | `contents/basicassertions.md` |
| Object graph / deep equality | `contents/objectgraphs.md`, `contents/serializationignoredmembers.md` |
| Collections and lists | `contents/collections.md`, `contents/dictionaries.md` |
| Strings | `contents/strings.md` |
| Numbers and comparables | `contents/numerictypes.md` |
| Dates and times | `contents/datetimespans.md` |
| Booleans | `contents/booleans.md` |
| Enums | `contents/enums.md` |
| Exceptions and errors | `contents/exceptions.md` |
| Events | `contents/eventmonitoring.md` |
| Execution time | `contents/executiontime.md` |
| Streams | `contents/streams.md` |
| HTTP responses | `contents/httpresponsemessages.md` |
| XML | `contents/xml.md` |
| JSON | `contents/json.md` |
| GUIDs | `contents/guids.md` |
| Nullable types | `contents/nullabletypes.md` |
| Types, methods, properties (reflection) | `contents/typesandmethods.md` |
| Assembly references | `contents/assemblies.md` |
| Specialized types | `contents/specialized.md` |
| F# usage | `contents/fsharp.md` |
| Custom assertion extensions | `contents/extensibility.md` |
| Tips and best practices | `contents/tips.md` |
| Migration from v5 to v6 | `contents/upgradingtov6.md` |
| Migration from v7 to v8 | `contents/upgradingtov8.md` |
| Release notes | `contents/releases.md` |

## When to use

Use this skill when the user asks about:
- Writing fluent assertions in .NET tests (xUnit, NUnit, MSTest)
- Asserting on specific types: collections, strings, dates, exceptions, enums, booleans, HTTP responses, XML, JSON, streams
- Deep object graph comparison with BeEquivalentTo
- Asserting exceptions are thrown with specific messages or types
- Monitoring .NET events in tests
- Writing custom FluentAssertions extensions
- Upgrading between major FluentAssertions versions

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing
3. Read specific files from `contents/{filename}.md`
