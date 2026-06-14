# dotnet-fundamentals Table of Contents

## Directory Map

```
contents/
├── apicompat/                      # API compatibility validation (8 files)
│   └── package-validation/         # Package validation validators (4 files)
├── code-analysis/                  # .NET code analysis rules and configuration (465 files)
│   ├── quality-rules/              # CA quality rules (CA1000-CA5405) (337 files)
│   └── style-rules/                # IDE code style rules (IDE0001-IDE3000) (120 files)
├── diagnostics/                    # Runtime diagnostic events (11 files)
├── networking/                     # Networking APIs (19 files)
│   ├── http/                       # HttpClient and HTTP (4 files)
│   ├── quic/                       # QUIC protocol (3 files)
│   ├── sockets/                    # Socket APIs (3 files)
│   └── telemetry/                  # Networking metrics and tracing (5 files)
├── reflection/                     # Reflection and dynamic code (14 files)
├── runtime-libraries/              # .NET runtime library API docs (171 files)
└── syslib-diagnostics/             # Obsoletion and source generator diagnostics (115 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Code analysis overview | `contents/code-analysis/overview.md` |
| Code quality rules index | `contents/code-analysis/quality-rules/index.md` |
| Code style rules index | `contents/code-analysis/style-rules/index.md` |
| Configure code analysis | `contents/code-analysis/configuration-options.md` |
| Suppress warnings | `contents/code-analysis/suppress-warnings.md` |
| Networking overview | `contents/networking/overview.md` |
| HttpClient usage | `contents/networking/http/httpclient.md` |
| Reflection overview | `contents/reflection/overview.md` |
| Runtime library APIs | `contents/runtime-libraries/` |
| Obsoletion warnings | `contents/syslib-diagnostics/obsoletions-overview.md` |
| API compatibility | `contents/apicompat/overview.md` |

## Detailed Structure

### apicompat/ (8 files)

| File | Description |
|------|-------------|
| `overview.md` | API compatibility overview |
| `assembly-validation.md` | Assembly-level API compatibility validation |
| `diagnostic-ids.md` | Diagnostic IDs for API compatibility |
| `global-tool.md` | API compatibility global tool usage |
| `package-validation/overview.md` | Package validation overview |
| `package-validation/baseline-version-validator.md` | Baseline version validator |
| `package-validation/compatible-framework-in-package-validator.md` | Framework-in-package validator |
| `package-validation/compatible-framework-validator.md` | Compatible framework validator |

### code-analysis/ top-level (8 files)

| File | Description |
|------|-------------|
| `overview.md` | Code analysis overview and enablement |
| `categories.md` | Rule categories |
| `configuration-options.md` | All configuration options |
| `configuration-files.md` | Configuration file formats (.editorconfig, .globalconfig) |
| `code-quality-rule-options.md` | Options for quality rules |
| `code-style-rule-options.md` | Options for style rules |
| `predefined-configurations.md` | Predefined analysis configurations |
| `suppress-warnings.md` | How to suppress warnings |

### code-analysis/quality-rules/ (337 files)

Individual rule reference files named by rule ID (e.g., `ca1000.md`, `ca2007.md`). Categories:

| File | Description |
|------|-------------|
| `index.md` | Complete index of all quality rules |
| `design-warnings.md` | Design rules (CA1000-CA1070) |
| `documentation-warnings.md` | Documentation rules (CA1200) |
| `globalization-warnings.md` | Globalization rules (CA1303-CA1311) |
| `interoperability-warnings.md` | Interoperability rules (CA1401-CA1422) |
| `maintainability-warnings.md` | Maintainability rules (CA1501-CA1516) |
| `naming-warnings.md` | Naming rules (CA1700-CA1727) |
| `performance-warnings.md` | Performance rules (CA1800-CA1877) |
| `reliability-warnings.md` | Reliability rules (CA2000-CA2026) |
| `security-warnings.md` | Security rules (CA2100-CA5405) |
| `usage-warnings.md` | Usage rules (CA2200-CA2266) |

### code-analysis/style-rules/ (120 files)

Individual style rule reference files named by rule ID (e.g., `ide0001.md`). Categories:

| File | Description |
|------|-------------|
| `index.md` | Code style rules overview |
| `language-rules.md` | Language and unnecessary code rules |
| `naming-rules.md` | Naming convention rules |
| `miscellaneous-rules.md` | Miscellaneous style rules |
| `csharp-formatting-options.md` | C# formatting options |
| `dotnet-formatting-options.md` | .NET-wide formatting options |
| `ide0001.md` - `ide3000.md` | Individual style rule docs |

### diagnostics/ (11 files)

| File | Description |
|------|-------------|
| `runtime-events.md` | Runtime ETW events overview |
| `runtime-contention-events.md` | Thread contention events |
| `runtime-exception-events.md` | Exception events |
| `runtime-garbage-collection-events.md` | GC events |
| `runtime-interop-events.md` | Interop events |
| `runtime-loader-binder-events.md` | Loader/binder events |
| `runtime-method-events.md` | Method JIT events |
| `runtime-thread-events.md` | Thread events |
| `runtime-tiered-compilation-events.md` | Tiered compilation events |
| `runtime-type-events.md` | Type events |
| `runtime-wait-handle-events.md` | Wait handle events |

### networking/ (19 files)

| File | Description |
|------|-------------|
| `overview.md` | Networking overview |
| `ipv6-overview.md` | IPv6 support |
| `network-info.md` | Network information APIs |
| `websockets.md` | WebSocket APIs |
| `http/http-overview.md` | HTTP overview |
| `http/httpclient.md` | HttpClient usage guide |
| `http/httpclient-guidelines.md` | HttpClient best practices |
| `http/httpclient-migrate-from-httpwebrequest.md` | Migrating from HttpWebRequest |
| `quic/quic-overview.md` | QUIC protocol overview |
| `quic/quic-options.md` | QUIC configuration options |
| `quic/quic-troubleshooting.md` | QUIC troubleshooting |
| `sockets/sockets-overview.md` | Sockets overview |
| `sockets/socket-services.md` | Socket services |
| `sockets/tcp-classes.md` | TCP networking classes |
| `telemetry/overview.md` | Networking telemetry overview |
| `telemetry/metrics.md` | Networking metrics |
| `telemetry/tracing.md` | Distributed tracing |
| `telemetry/event-counters.md` | Event counters |
| `telemetry/events.md` | Networking ETW events |

### reflection/ (14 files)

| File | Description |
|------|-------------|
| `overview.md` | Reflection overview |
| `viewing-type-information.md` | Viewing type metadata |
| `accessing-custom-attributes.md` | Reading custom attributes |
| `get-type-member-information.md` | Getting member info |
| `dynamically-loading-and-using-types.md` | Dynamic type loading |
| `collectible-assemblies.md` | Collectible assemblies |
| `reflection-and-generic-types.md` | Reflection with generics |
| `specifying-fully-qualified-type-names.md` | Type name syntax |
| `emitting-dynamic-methods-and-assemblies.md` | Reflection.Emit overview |
| `how-to-define-and-execute-dynamic-methods.md` | Dynamic method how-to |
| `how-to-define-a-generic-type-with-reflection-emit.md` | Generic type emit |
| `how-to-define-a-generic-method-with-reflection-emit.md` | Generic method emit |
| `how-to-examine-and-instantiate-generic-types-with-reflection.md` | Generic type inspection |
| `how-to-hook-up-a-delegate-using-reflection.md` | Delegate via reflection |

### runtime-libraries/ (171 files)

API reference docs for .NET runtime library types, named by the fully-qualified type or method (e.g., `system-string.md`, `system-datetime.md`). Key files:

| File | Description |
|------|-------------|
| `preview-apis.md` | Preview APIs overview |
| `system-string.md` | System.String |
| `system-datetime.md` | System.DateTime |
| `system-exception.md` | System.Exception |
| `system-object.md` | System.Object |
| `system-collections-generic-list{t}.md` | List<T> |
| `system-collections-generic-hashset{t}.md` | HashSet<T> |
| `system-threading-tasks-task.md` | Task |
| `system-text-regularexpressions-regex.md` | Regex |
| `system-text-stringbuilder.md` | StringBuilder |
| `system-net-http-httpclient.md` | HttpClient |
| `system-net-sockets-socket.md` | Socket |
| `system-gc.md` | GC (garbage collector) |
| `system-idisposable.md` | IDisposable |
| `system-span{t}.md` | Span<T> |
| `system-enum.md` | Enum |
| `system-random.md` | Random |
| `system-uri.md` | Uri |
| `system-globalization-cultureinfo.md` | CultureInfo |
| `system-xml-xmlreader.md` | XmlReader |

### syslib-diagnostics/ (115 files)

Compiler warning reference docs for obsoletions and source generator diagnostics:

| File | Description |
|------|-------------|
| `obsoletions-overview.md` | Overview of all SYSLIB0XXX obsoletions |
| `experimental-overview.md` | Overview of experimental APIs |
| `source-generator-overview.md` | Source generator diagnostics overview |
| `syslib-cominterfacegenerator.md` | ComInterfaceGenerator diagnostics |
| `syslib0001.md` - `syslib0064.md` | Individual obsoletion warnings |
| `syslib1001.md` - `syslib1230.md` | Source generator diagnostic codes |
| `extobs0001.md` | Microsoft.Extensions obsoletion warnings |
