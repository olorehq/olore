---
name: olore-fluentassertions-latest
description: Local FluentAssertions documentation reference (latest). FluentAssertions documentation. Use for fluent test assertions on collections, strings, exceptions, objects, dates, booleans, enums, and event monitoring in .NET.
---

# FluentAssertions Documentation

FluentAssertions is a set of .NET extension methods that allow you to more naturally specify the expected outcome of TDD or BDD-style unit tests. It provides a fluent API starting with `.Should()` that produces clear, readable assertions and informative failure messages.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/introduction.md` | Introduction | Getting started, installation, and basic usage examples |
| `contents/about.md` | About | Design philosophy and how FluentAssertions improves test diagnostics |
| `contents/basicassertions.md` | Basic Assertions | Core assertions available on all object types (null, type, equality) |
| `contents/booleans.md` | Booleans | Assertions for boolean values (BeTrue, BeFalse) |
| `contents/collections.md` | Collections | Assertions for collections: membership, ordering, uniqueness, predicates |
| `contents/datetimespans.md` | Dates & Times | Assertions for DateTime, DateTimeOffset, and TimeSpan values |
| `contents/dictionaries.md` | Dictionaries | Assertions for generic dictionary types |
| `contents/enums.md` | Enums | Assertions for enum values and flags |
| `contents/eventmonitoring.md` | Event Monitoring | Monitoring and asserting that objects raise specific events |
| `contents/exceptions.md` | Exceptions | Asserting that methods throw specific exceptions with expected messages |
| `contents/executiontime.md` | Execution Time | Asserting that methods or actions complete within a time limit |
| `contents/extensibility.md` | Extensibility | Building custom assertion extensions and hooks |
| `contents/fsharp.md` | F# Usage | Notes on using FluentAssertions from F# |
| `contents/guids.md` | Guids | Assertions for GUID equality and emptiness |
| `contents/httpresponsemessages.md` | HttpResponseMessages | HttpResponseMessage assertions (removed in v8, see FluentAssertions.Web) |
| `contents/json.md` | JSON | Assertions for JsonNode and JsonArray (.NET 6+, System.Text.Json) |
| `contents/nullabletypes.md` | Nullable Types | Assertions for nullable value types |
| `contents/numerictypes.md` | Numeric Types | Assertions for numeric types and IComparable<T> (comparisons, ranges) |
| `contents/objectgraphs.md` | Object Graphs | Deep equivalency assertions for complex object graphs (BeEquivalentTo) |
| `contents/serializationignoredmembers.md` | Serialization Ignored Members | Configuring ignored members in XML/DataContract serialization assertions |
| `contents/specialized.md` | Specialized | Assertions for TaskCompletionSource and async/task-based scenarios |
| `contents/streams.md` | Streams | Assertions for Stream types |
| `contents/strings.md` | Strings | Assertions for strings (null, empty, whitespace, case, contains, matches) |
| `contents/tips.md` | Tips | General tips and best practices for using FluentAssertions |
| `contents/typesandmethods.md` | Types and Methods | Assertions on types, methods, and properties via reflection |
| `contents/upgradingtov6.md` | Upgrading to v6 | Migration guide from FluentAssertions v5 to v6 |
| `contents/upgradingtov8.md` | Upgrading to v8 | Migration guide from FluentAssertions v7 to v8 |
| `contents/xml.md` | XML | Assertions for LINQ-to-XML types (XDocument, XElement, XAttribute) |

## When to use

Use this skill when the user asks about:
- Fluent assertion syntax and the `.Should()` API in .NET tests
- Asserting collections, strings, exceptions, booleans, enums, dates, or objects
- Deep object graph equivalency comparisons with `BeEquivalentTo`
- Event monitoring and asserting raised events in tests
- Extending FluentAssertions with custom assertions
- Upgrading from an older version of FluentAssertions

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
