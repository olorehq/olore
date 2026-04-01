# dotnet-fundamentals Table of Contents

## Directory Map

```
contents/
├── apicompat/              # API compatibility tooling (8 files)
│   └── package-validation/ # Package validation validators (4 files)
├── code-analysis/          # .NET code analysis overview and config (8 files)
│   ├── quality-rules/      # CA-prefixed code quality rules (~290 files)
│   └── style-rules/        # IDE-prefixed code style rules (~110 files)
├── diagnostics/            # Runtime ETW/EventPipe events (11 files)
├── networking/             # Networking overview and utilities (4 files)
│   ├── http/               # HttpClient and HTTP APIs (4 files)
│   ├── quic/               # QUIC protocol (3 files)
│   ├── sockets/            # TCP/socket programming (3 files)
│   └── telemetry/          # Networking metrics, tracing, events (5 files)
├── reflection/             # Reflection and Reflection.Emit (14 files)
├── runtime-libraries/      # Supplementary API reference docs (~260 files)
├── syslib-diagnostics/     # SYSLIB obsoletions and source-generator diagnostics (~120 files)
└── (root)                  # Overview files: languages, implementations, standards (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Code analysis overview | `contents/code-analysis/overview.md` |
| Code quality rules index | `contents/code-analysis/quality-rules/index.md` |
| Code style rules index | `contents/code-analysis/style-rules/index.md` |
| HTTP / HttpClient usage | `contents/networking/http/httpclient.md` |
| Networking overview | `contents/networking/overview.md` |
| Reflection overview | `contents/reflection/overview.md` |
| Runtime diagnostics events | `contents/diagnostics/runtime-events.md` |
| SYSLIB obsoletions overview | `contents/syslib-diagnostics/obsoletions-overview.md` |
| API compat overview | `contents/apicompat/overview.md` |

## Detailed Structure

### Root (3 files)

| File | Description |
|------|-------------|
| `languages.md` | .NET language overview (C#, F#, VB) |
| `implementations.md` | .NET implementations overview (.NET, .NET Framework, Mono) |
| `standards.md` | .NET standards and specifications |

### apicompat/ (4 files)

| File | Description |
|------|-------------|
| `apicompat/overview.md` | API compatibility overview |
| `apicompat/diagnostic-ids.md` | Diagnostic IDs for API compatibility violations |
| `apicompat/global-tool.md` | Microsoft.DotNet.ApiCompat global tool |
| `apicompat/assembly-validation.md` | Assembly-level API validation |

### apicompat/package-validation/ (4 files)

| File | Description |
|------|-------------|
| `apicompat/package-validation/overview.md` | Package validation overview |
| `apicompat/package-validation/baseline-version-validator.md` | Validate against a baseline version |
| `apicompat/package-validation/compatible-framework-in-package-validator.md` | Validate compatible frameworks within a package |
| `apicompat/package-validation/compatible-framework-validator.md` | Validate compatible frameworks across packages |

### code-analysis/ (8 files)

| File | Description |
|------|-------------|
| `code-analysis/overview.md` | .NET source code analysis overview |
| `code-analysis/categories.md` | Code analysis rule categories |
| `code-analysis/configuration-files.md` | .editorconfig and global AnalyzerConfig files |
| `code-analysis/configuration-options.md` | Configuring code analysis rules |
| `code-analysis/code-quality-rule-options.md` | Options for code quality rules |
| `code-analysis/code-style-rule-options.md` | Options for code style rules |
| `code-analysis/predefined-configurations.md` | Predefined AnalysisMode and AnalysisLevel configurations |
| `code-analysis/suppress-warnings.md` | Suppressing code analysis warnings |

### code-analysis/quality-rules/ (~290 files)

Individual CA-prefixed code quality rule docs. Named by rule ID (e.g., `ca1000.md`, `ca2100.md`). Also includes summary files:

| File | Description |
|------|-------------|
| `code-analysis/quality-rules/index.md` | Index of all code quality rules |
| `code-analysis/quality-rules/naming-warnings.md` | Naming rule warnings overview |
| `code-analysis/quality-rules/documentation-warnings.md` | Documentation rule warnings overview |
| `code-analysis/quality-rules/globalization-warnings.md` | Globalization rule warnings overview |
| `code-analysis/quality-rules/interoperability-warnings.md` | Interoperability rule warnings overview |
| `code-analysis/quality-rules/ca{NNNN}.md` | Individual rule: description, when to fix, how to suppress |

### code-analysis/style-rules/ (~110 files)

Individual IDE-prefixed code style rule docs. Named by rule ID (e.g., `ide0001.md`, `ide0046.md`). Also includes:

| File | Description |
|------|-------------|
| `code-analysis/style-rules/index.md` | Index of all code style rules |
| `code-analysis/style-rules/language-rules.md` | Language and unnecessary code rules |
| `code-analysis/style-rules/naming-rules.md` | Naming convention rules |
| `code-analysis/style-rules/miscellaneous-rules.md` | Miscellaneous style rules |
| `code-analysis/style-rules/csharp-formatting-options.md` | C# formatting options |
| `code-analysis/style-rules/dotnet-formatting-options.md` | .NET formatting options |
| `code-analysis/style-rules/ide{NNNN}.md` | Individual rule: description, options, code examples |

### diagnostics/ (11 files)

| File | Description |
|------|-------------|
| `diagnostics/runtime-events.md` | .NET runtime ETW/EventPipe events overview |
| `diagnostics/runtime-garbage-collection-events.md` | GC runtime events |
| `diagnostics/runtime-exception-events.md` | Exception runtime events |
| `diagnostics/runtime-thread-events.md` | Thread runtime events |
| `diagnostics/runtime-contention-events.md` | Monitor contention events |
| `diagnostics/runtime-method-events.md` | JIT method events |
| `diagnostics/runtime-loader-binder-events.md` | Assembly loader/binder events |
| `diagnostics/runtime-type-events.md` | Type system events |
| `diagnostics/runtime-interop-events.md` | COM/P-Invoke interop events |
| `diagnostics/runtime-tiered-compilation-events.md` | Tiered compilation events |
| `diagnostics/runtime-wait-handle-events.md` | WaitHandle events |

### networking/ (4 files)

| File | Description |
|------|-------------|
| `networking/overview.md` | .NET networking overview |
| `networking/network-info.md` | NetworkInformation APIs |
| `networking/ipv6-overview.md` | IPv6 support in .NET |
| `networking/websockets.md` | WebSocket client/server usage |

### networking/http/ (4 files)

| File | Description |
|------|-------------|
| `networking/http/http-overview.md` | HTTP networking overview |
| `networking/http/httpclient.md` | HttpClient usage guide |
| `networking/http/httpclient-guidelines.md` | HttpClient best practices and pitfalls |
| `networking/http/httpclient-migrate-from-httpwebrequest.md` | Migrating from HttpWebRequest to HttpClient |

### networking/quic/ (3 files)

| File | Description |
|------|-------------|
| `networking/quic/quic-overview.md` | QUIC protocol support overview |
| `networking/quic/quic-options.md` | QUIC connection options |
| `networking/quic/quic-troubleshooting.md` | QUIC troubleshooting |

### networking/sockets/ (3 files)

| File | Description |
|------|-------------|
| `networking/sockets/sockets-overview.md` | Socket programming overview |
| `networking/sockets/socket-services.md` | High-level socket services |
| `networking/sockets/tcp-classes.md` | TCP-specific classes (TcpClient, TcpListener) |

### networking/telemetry/ (5 files)

| File | Description |
|------|-------------|
| `networking/telemetry/overview.md` | Networking telemetry overview |
| `networking/telemetry/metrics.md` | Networking metrics |
| `networking/telemetry/tracing.md` | Networking distributed tracing |
| `networking/telemetry/events.md` | Networking EventSource events |
| `networking/telemetry/event-counters.md` | Networking EventCounters |

### reflection/ (14 files)

| File | Description |
|------|-------------|
| `reflection/overview.md` | Reflection overview |
| `reflection/viewing-type-information.md` | Examining type information at runtime |
| `reflection/reflection-and-generic-types.md` | Reflection with generic types |
| `reflection/dynamically-loading-and-using-types.md` | Dynamically loading and using types |
| `reflection/accessing-custom-attributes.md` | Reading custom attributes via reflection |
| `reflection/get-type-member-information.md` | Getting type member info |
| `reflection/specifying-fully-qualified-type-names.md` | Fully qualified type name syntax |
| `reflection/emitting-dynamic-methods-and-assemblies.md` | Reflection.Emit overview |
| `reflection/collectible-assemblies.md` | Collectible (unloadable) assemblies |
| `reflection/how-to-hook-up-a-delegate-using-reflection.md` | Hooking up delegates via reflection |
| `reflection/how-to-define-and-execute-dynamic-methods.md` | Defining and invoking dynamic methods |
| `reflection/how-to-define-a-generic-type-with-reflection-emit.md` | Emitting generic types |
| `reflection/how-to-define-a-generic-method-with-reflection-emit.md` | Emitting generic methods |
| `reflection/how-to-examine-and-instantiate-generic-types-with-reflection.md` | Instantiating generic types via reflection |

### runtime-libraries/ (~260 files)

Supplementary API remarks for .NET runtime library classes. Each file is named after the type or member it documents (e.g., `system-object.md`, `system-string-ctor.md`). Topics covered include:

- Core types: `System.Object`, `System.String`, `System.Char`, `System.Byte`, `System.Int64`, `System.Single`, `System.Span{T}`, `System.Nullable{T}`
- Collections: `System.Collections.Generic.List{T}`, `System.Collections.ObjectModel.KeyedCollection`
- Exceptions: `System.Exception`, `System.InvalidCastException`, `System.InvalidOperationException`, `System.NotSupportedException`, `System.NotImplementedException`
- Threading: `System.Threading.Thread`, `System.Threading.Monitor`, `System.Threading.ReaderWriterLockSlim`, `System.Threading.Tasks.Task`, `System.Threading.Tasks.TaskScheduler`
- IO: `System.IO.FileStream`, `System.IO.FileSystemWatcher`
- Globalization: `System.Globalization.CultureInfo`, `System.Globalization.CompareInfo`, `System.Globalization.DateTimeFormatInfo`
- Networking: `System.Net.HttpListener`, `System.Net.Http.HttpClientHandler`
- XML: `System.Xml.XmlReader`, `System.Xml.XmlReaderSettings`, `System.Xml.XmlSerializer`
- Reflection.Emit: `System.Reflection.Emit.AssemblyBuilder`, `System.Reflection.Emit.DynamicMethod`, `System.Reflection.Emit.PersistedAssemblyBuilder`
- Regex: `System.Text.RegularExpressions.Regex`
- Cryptography: `System.Security.Cryptography.RSACryptoServiceProvider`
- Other: `System.GC`, `System.AppContext`, `System.Console`, `System.Random`, `System.Delegate`

### syslib-diagnostics/ (~120 files)

SYSLIB diagnostic docs explaining .NET obsoletions and source-generator errors. Each file covers one diagnostic code with workarounds.

| File | Description |
|------|-------------|
| `syslib-diagnostics/obsoletions-overview.md` | Overview of SYSLIB0xxx obsoletion diagnostics |
| `syslib-diagnostics/source-generator-overview.md` | Overview of SYSLIB1xxx source-generator diagnostics |
| `syslib-diagnostics/experimental-overview.md` | Overview of experimental API diagnostics |
| `syslib-diagnostics/syslib-cominterfacegenerator.md` | COM interface source-generator diagnostics |
| `syslib-diagnostics/syslib0002.md` | SYSLIB0002: PrincipalPermissionAttribute obsolete |
| `syslib-diagnostics/syslib0{NNN}.md` | Individual obsoletion: what is obsolete and workaround |
| `syslib-diagnostics/syslib1{NNN}.md` | Individual source-generator error and fix |
| `syslib-diagnostics/extobs0001.md` | Extension library obsoletion diagnostic |
| `syslib-diagnostics/syslib5003.md` | SYSLIB5003 diagnostic |
