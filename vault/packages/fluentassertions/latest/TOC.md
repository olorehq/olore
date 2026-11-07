# fluentassertions Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | FluentAssertions docs (all pages at top level): intro, per-type assertions, object graph comparison, extensibility, upgrade guides, release notes | 31 |

## Getting started and general

| File | Description |
|------|-------------|
| `introduction.md` | Overview of FluentAssertions, installation, and the `Should()` syntax with basic examples |
| `about.md` | Project philosophy: clear failure messages, one condition per test, and design goals |
| `tips.md` | Best practices for writing assertions and getting more informative failure messages |
| `basicassertions.md` | Assertions available on all objects: null, type checks, equality, satisfy, match |
| `fsharp.md` | Notes on using FluentAssertions from F# and the Faqt alternative |

## Type-specific assertions

| File | Description |
|------|-------------|
| `strings.md` | String assertions: null/empty, casing, start/end, contain, match wildcards and regex |
| `numerictypes.md` | Numeric and IComparable<T> assertions: BeGreaterThan, BeInRange, BeApproximately, etc. |
| `booleans.md` | Assertions for bool values: BeTrue, BeFalse, Be, Not |
| `nullabletypes.md` | Assertions for nullable value types: HaveValue, NotHaveValue, Be |
| `datetimespans.md` | DateTime, DateTimeOffset and TimeSpan assertions: BeAfter, BeCloseTo, HaveYear, etc. |
| `enums.md` | Enum assertions: Be, HaveFlag, HaveValue, HaveSameNameAs, and defined-value checks |
| `guids.md` | Guid assertions for equality and emptiness |
| `collections.md` | Collection assertions: Contain, HaveCount, BeEquivalentTo, ordering, subsets, All/Any |
| `dictionaries.md` | Generic dictionary assertions: keys, values, ContainKey, Equal, and null/empty checks |
| `uris.md` | System.Uri assertions: BeAbsolute, HaveScheme, HaveHost, HavePath, HaveQueryParameter |
| `streams.md` | Stream assertions: seek/read/write capability, position, length |
| `xml.md` | LINQ-to-XML assertions for XDocument, XElement, XAttribute |
| `json.md` | JsonNode and JsonArray assertions for System.Text.Json on .NET 6 or later |
| `exceptions.md` | Throw, NotThrow, ThrowExactly, async exceptions, inner exceptions, message matching |
| `httpresponsemessages.md` | Notice that HttpResponseMessage assertions were removed in v8; points to FluentAssertions.Web |
| `assemblies.md` | Assert an assembly does or does not reference another, for enforcing layers |
| `typesandmethods.md` | Type, method, and property assertions: visibility, attributes, interfaces, members |
| `specialized.md` | Assertions for TaskCompletionSource<T> completing within a time |
| `eventmonitoring.md` | Monitor objects and assert raised events, INotifyPropertyChanged, and event arguments |
| `executiontime.md` | Assert that a method or action's execution time does not exceed a limit |

## Advanced

| File | Description |
|------|-------------|
| `objectgraphs.md` | Structural comparison with BeEquivalentTo: including/excluding members, options, collections, DTO matching |
| `serializationignoredmembers.md` | BeXmlSerializable, BeJsonSerializable, BeDataContractSerializable and ignored-member behavior |
| `extensibility.md` | Building custom assertions, formatters, equivalency steps, and extension points |

## Upgrading and releases

| File | Description |
|------|-------------|
| `upgradingtov6.md` | Breaking changes and migration guide for version 6.0 |
| `upgradingtov8.md` | Breaking changes and migration guide for version 8.0, including custom assertion API changes |
| `releases.md` | Release notes and changelog for all versions |
