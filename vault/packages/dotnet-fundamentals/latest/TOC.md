# dotnet-fundamentals Table of Contents

## Directory Map

```
contents/

├── apicompat  # 8 files
├── code-analysis  # 485 files
├── diagnostics  # 11 files
├── networking  # 22 files
├── reflection  # 14 files
├── runtime-libraries  # 1 files
├── syslib-diagnostics  # 120 files
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Code analysis overview | `contents/code-analysis/overview.md` |
| Quality rules (CA####) | `contents/code-analysis/quality-rules/ca{id}.md` |
| Style rules (IDE####) | `contents/code-analysis/style-rules/ide{id}.md` |
| Configure analyzers | `contents/code-analysis/configuration-options.md` |
| Networking / HttpClient | `contents/networking/http/httpclient.md` |
| Reflection | `contents/reflection/overview.md` |
| SYSLIB obsoletions | `contents/syslib-diagnostics/obsoletions-overview.md` |
| API compatibility | `contents/apicompat/overview.md` |
| Runtime events | `contents/diagnostics/runtime-events.md` |

## Detailed Structure

### ./ (3 files)

| File | Description |
|------|-------------|
| `implementations.md` | .NET implementations |
| `languages.md` | .NET Managed languages strategy |
| `standards.md` | Ecma standards for .NET |

### apicompat/ (4 files)

| File | Description |
|------|-------------|
| `assembly-validation.md` | Assembly validation |
| `diagnostic-ids.md` | Package Validation Diagnostics IDs |
| `global-tool.md` | Microsoft.DotNet.ApiCompat.Tool API compatibility tool |
| `overview.md` | API compatibility tools |

### apicompat/package-validation/ (4 files)

| File | Description |
|------|-------------|
| `baseline-version-validator.md` | Baseline Package Validator |
| `compatible-framework-in-package-validator.md` | Validate Compatible Frameworks Inside a Package |
| `compatible-framework-validator.md` | Validating Different Runtimes |
| `overview.md` | .NET Package Validation |

### code-analysis/ (8 files)

| File | Description |
|------|-------------|
| `categories.md` | Code analysis rule categories |
| `code-quality-rule-options.md` | Code quality rule configuration options |
| `code-style-rule-options.md` | .NET code style rule options |
| `configuration-files.md` | Configuration files for code analysis rules |
| `configuration-options.md` | Configure code analysis rules |
| `overview.md` | Code analysis in .NET |
| `predefined-configurations.md` | Predefined configuration files (code analysis) |
| `suppress-warnings.md` | Suppress code analysis warnings |

### code-analysis/includes/ (8 files)

| File | Description |
|------|-------------|
| `analysis-model-levels.md` |  |
| `binaryformatter.md` |  |
| `cannot-secure-binaryformatter.md` |  |
| `enabled-on-build-never.md` |  |
| `fix-binaryformatter-serializationbinder.md` |  |
| `insecure-deserializers-common-safe-to-suppress.md` |  |
| `insecure-deserializers-description.md` |  |
| `insecure-deserializers-fixes-for-always-insecure-deserializers.md` |  |

### code-analysis/includes/config-options/ (5 files)

| File | Description |
|------|-------------|
| `api-surface.md` |  |
| `dispose-ownership-transfer.md` |  |
| `excluded-symbol-names.md` |  |
| `excluded-type-names-with-derived-types.md` |  |
| `ignore-ivt.md` |  |

### code-analysis/quality-rules/ (339 files)

Individual rule files (327): `ca1000.md` ... `ca5405.md` (one file per rule ID, named by lowercase ID).

| File | Description |
|------|-------------|
| `ca1865-ca1867.md` | CA1865-CA1867: Use char overload |
| `design-warnings.md` | Design rules (code analysis) |
| `documentation-warnings.md` | Documentation rules (code analysis) |
| `globalization-warnings.md` | Globalization rules (code analysis) |
| `index.md` | Code quality rules overview |
| `interoperability-warnings.md` | Portability and Interoperability rules (code analysis) |
| `maintainability-warnings.md` | Maintainability rules (code analysis) |
| `naming-warnings.md` | Naming rules (code analysis) |
| `performance-warnings.md` | Performance rules (code analysis) |
| `reliability-warnings.md` | Reliability rules (code analysis) |
| `security-warnings.md` | Security rules (code analysis) |
| `usage-warnings.md` | Usage rules (code analysis) |

### code-analysis/style-rules/ (124 files)

Individual rule files (108): `ide0001.md` ... `ide3000.md` (one file per rule ID, named by lowercase ID).

| File | Description |
|------|-------------|
| `csharp-formatting-options.md` | C# formatting options |
| `dotnet-formatting-options.md` | .NET formatting options |
| `ide0003-ide0009.md` | IDE0003 and IDE0009: Member-access qualification preferences |
| `ide0007-ide0008.md` | IDE0007 and IDE0008: 'var' preferences |
| `ide0020-ide0038.md` | Use pattern matching to avoid 'is' check followed by a cast (IDE0020 and IDE0038) |
| `ide0023-ide0024.md` | IDE0023 and IDE0024: Use expression body for operators |
| `ide0029-ide0030-ide0270.md` | Null check can be simplified (IDE0029, IDE0030, and IDE0270) |
| `ide0047-ide0048.md` | IDE0047 and IDE0048: Parentheses preferences |
| `ide0054-ide0074.md` | Use compound assignment (IDE0054 and IDE0074) |
| `ide0078-ide0260.md` | IDE0078: Use pattern matching |
| `ide0160-ide0161.md` | Namespace declaration preferences (IDE0160 and IDE0161) |
| `ide0390-ide0391.md` | IDE0390 and IDE0391: Make method synchronous |
| `index.md` | Code-style rules overview |
| `language-rules.md` | Code-style language and unnecessary code rules |
| `miscellaneous-rules.md` | Miscellaneous coding style rules |
| `naming-rules.md` | Code-style naming rules |

### code-analysis/style-rules/includes/ (1 files)

| File | Description |
|------|-------------|
| `dotnet-style-prefer-collection-expression.md` |  |

### diagnostics/ (11 files)

| File | Description |
|------|-------------|
| `runtime-contention-events.md` | Monitor lock contention runtime events |
| `runtime-events.md` | Runtime events |
| `runtime-exception-events.md` | Exception runtime events |
| `runtime-garbage-collection-events.md` | Garbage collection runtime events |
| `runtime-interop-events.md` | Interop runtime events |
| `runtime-loader-binder-events.md` | Loader and binder runtime events |
| `runtime-method-events.md` | Method runtime events |
| `runtime-thread-events.md` | ThreadPool runtime events |
| `runtime-tiered-compilation-events.md` | Tiered compilation runtime events |
| `runtime-type-events.md` | Type system runtime events |
| `runtime-wait-handle-events.md` | Wait-handle runtime events |

### networking/ (4 files)

| File | Description |
|------|-------------|
| `ipv6-overview.md` | Internet Protocol version 6 (IPv6) overview |
| `network-info.md` | Network availability |
| `overview.md` | Network programming in .NET |
| `websockets.md` | WebSockets support in .NET |

### networking/http/ (4 files)

| File | Description |
|------|-------------|
| `http-overview.md` | HTTP support in .NET |
| `httpclient-guidelines.md` | HttpClient guidelines for .NET |
| `httpclient-migrate-from-httpwebrequest.md` | Migrate from HttpWebRequest |
| `httpclient.md` | Make HTTP requests with the HttpClient |

### networking/includes/ (1 files)

| File | Description |
|------|-------------|
| `ip-endpoint.md` |  |

### networking/quic/ (3 files)

| File | Description |
|------|-------------|
| `quic-options.md` | QUIC configuration options in .NET |
| `quic-overview.md` | QUIC support in .NET |
| `quic-troubleshooting.md` | Troubleshoot QUIC issues in .NET |

### networking/sockets/ (3 files)

| File | Description |
|------|-------------|
| `socket-services.md` | Use Sockets to send and receive data over TCP |
| `sockets-overview.md` | Sockets in .NET |
| `tcp-classes.md` | Use TcpClient and TcpListener |

### networking/telemetry/ (5 files)

| File | Description |
|------|-------------|
| `event-counters.md` | Networking Event Counters |
| `events.md` | Networking events |
| `metrics.md` | Networking metrics |
| `overview.md` | Networking Telemetry |
| `tracing.md` | Networking tracing |

### networking/telemetry/includes/ (2 files)

| File | Description |
|------|-------------|
| `aspire-service-defaults.md` |  |
| `aspire-telemetry-overview.md` |  |

### reflection/ (14 files)

| File | Description |
|------|-------------|
| `accessing-custom-attributes.md` | Accessing Custom Attributes |
| `collectible-assemblies.md` | Collectible assemblies for dynamic type generation |
| `dynamically-loading-and-using-types.md` | Dynamically Loading and Using Types |
| `emitting-dynamic-methods-and-assemblies.md` | Emitting Dynamic Methods and Assemblies |
| `get-type-member-information.md` | How to: Get type and member information by using reflection |
| `how-to-define-a-generic-method-with-reflection-emit.md` | How to: Define a Generic Method with Reflection Emit (.NET Framework) |
| `how-to-define-a-generic-type-with-reflection-emit.md` | How to: Define a Generic Type with Reflection Emit (.NET Framework) |
| `how-to-define-and-execute-dynamic-methods.md` | How to: Define and Execute Dynamic Methods |
| `how-to-examine-and-instantiate-generic-types-with-reflection.md` | How to: Examine and Instantiate Generic Types with Reflection |
| `how-to-hook-up-a-delegate-using-reflection.md` | How to: Hook Up a Delegate Using Reflection |
| `overview.md` | Reflection in .NET |
| `reflection-and-generic-types.md` | Reflection and Generic Types |
| `specifying-fully-qualified-type-names.md` | Specify fully qualified type name |
| `viewing-type-information.md` | Viewing Type Information |

### runtime-libraries/ (1 files)

| File | Description |
|------|-------------|
| `preview-apis.md` | Preview APIs |

### syslib-diagnostics/ (119 files)

Individual rule files (106): `syslib0001.md` ... `syslib5003.md` (one file per rule ID, named by lowercase ID).

| File | Description |
|------|-------------|
| `experimental-overview.md` | Experimental features in .NET 9+ |
| `extobs0001.md` | EXTOBS0001 warning |
| `extobs0002.md` | EXTOBS0002 warning |
| `extobs0003.md` | EXTOBS0003 warning |
| `obsoletions-overview.md` | Obsolete features in .NET 5+ |
| `source-generator-overview.md` | Analyzer diagnostics in .NET 6+ |
| `syslib-cominterfacegenerator.md` | SYSLIB diagnostics for Microsoft.Interop.ComInterfaceGenerator |
| `syslib1040-1049.md` | SYSLIB diagnostics for regex source generation |
| `syslib1050-1069.md` | SYSLIB diagnostics for Microsoft.Interop.LibraryImportGenerator |
| `syslib1070-1089.md` | SYSLIB diagnostics for System.Runtime.InteropServices.JavaScript.JSImportGenerator |
| `syslib1100-1118.md` | SYSLIB diagnostics for Microsoft.Extensions.Configuration.Binder.SourceGeneration |
| `syslib1201-1219.md` | SYSLIB diagnostics for Microsoft.Extensions.Options.SourceGeneration |
| `syslib1220-1229.md` | SYSLIB diagnostics for System.Text.Json.SourceGeneration |

### syslib-diagnostics/includes/ (1 files)

| File | Description |
|------|-------------|
| `suppress-source-generator-diagnostics.md` |  |

