---
name: olore-fluentassertions-latest
description: Local fluentassertions documentation reference (latest). FluentAssertions documentation. Use for fluent test assertions on collections, strings, exceptions, objects, dates, booleans, enums, and event monitoring in .NET.
---

# fluentassertions Documentation

FluentAssertions documentation. Use for fluent test assertions on collections, strings, exceptions, objects, dates, booleans, enums, and event monitoring in .NET.

## Documentation Structure

```
contents/     # All pages at top level, one topic per file (31 files)
├── introduction.md, about.md, tips.md, basicassertions.md   # Getting started
├── strings, numerictypes, booleans, datetimespans, enums, guids, ...   # Per-type assertions
├── collections.md, dictionaries.md, exceptions.md           # Collections and exceptions
├── objectgraphs.md, extensibility.md                        # Advanced comparison and custom assertions
└── upgradingtov6.md, upgradingtov8.md, releases.md          # Migration and changelog
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started, Should() syntax | `contents/introduction.md`, `contents/basicassertions.md`, `contents/tips.md` |
| Strings | `contents/strings.md` |
| Numbers, booleans, nullables, enums, guids | `contents/numerictypes.md`, `contents/booleans.md`, `contents/nullabletypes.md`, `contents/enums.md`, `contents/guids.md` |
| Dates and times | `contents/datetimespans.md` |
| Collections and dictionaries | `contents/collections.md`, `contents/dictionaries.md` |
| Exceptions | `contents/exceptions.md` |
| Object graph comparison (BeEquivalentTo) | `contents/objectgraphs.md`, `contents/serializationignoredmembers.md` |
| XML, JSON, URIs, streams | `contents/xml.md`, `contents/json.md`, `contents/uris.md`, `contents/streams.md` |
| Types, methods, assemblies | `contents/typesandmethods.md`, `contents/assemblies.md` |
| Events, async, timing | `contents/eventmonitoring.md`, `contents/specialized.md`, `contents/executiontime.md` |
| Custom assertions and extensibility | `contents/extensibility.md` |
| Upgrading and release notes | `contents/upgradingtov6.md`, `contents/upgradingtov8.md`, `contents/releases.md` |
| F# usage | `contents/fsharp.md` |

## When to use

Use this skill when the user asks about:
- Writing FluentAssertions assertions in .NET unit tests (Should().Be..., Contain, Throw)
- Comparing object graphs or collections with BeEquivalentTo and equivalency options
- Asserting on dates, strings, exceptions, enums, XML, JSON, or monitored events
- Creating custom assertions or formatters
- Upgrading FluentAssertions to v6 or v8, or checking release notes

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing with descriptions
3. Read specific files from `contents/{path}`
