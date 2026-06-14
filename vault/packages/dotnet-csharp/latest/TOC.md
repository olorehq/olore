# dotnet-csharp Table of Contents

## Directory Map

```
contents/
├── (root)                              # Delegates, events, iterators, methods (11 files)
├── fundamentals/                       # Core language fundamentals
│   ├── coding-style/                   # Conventions and identifier names (2 files)
│   ├── exceptions/                     # Exception handling (7 files)
│   ├── functional/                     # Pattern matching, discards, deconstruct (3 files)
│   ├── null-safety/                    # Nullable reference and value types (5 files)
│   ├── object-oriented/                # OOP concepts (4 files)
│   ├── program-structure/              # Namespaces, top-level statements (6 files)
│   ├── strings/                        # String operations and interpolation (6 files)
│   ├── tutorials/                      # Hands-on tutorials (12 files)
│   └── types/                          # Built-in types, records, structs (11 files)
├── asynchronous-programming/           # async/await, Tasks, cancellation (9 files)
├── advanced-topics/
│   ├── expression-trees/               # Expression tree concepts (9 files)
│   ├── interface-implementation/       # Default methods, static virtual members (3 files)
│   ├── interop/                        # COM interop, P/Invoke, dynamic (9 files)
│   ├── performance/                    # ref returns, Span, interpolated handlers (3 files)
│   ├── reflection-and-attributes/      # Custom attributes, reflection (8 files)
│   └── update-applications/            # Nullable migration strategies (1 file)
├── how-to/                             # How-to guides for strings and exceptions (5 files)
├── language-reference/                 # Language reference (root: 4 files)
│   ├── attributes/                     # Caller info, platform-specific attrs (5 files)
│   ├── builtin-types/                  # int, bool, string, array, record, etc. (22 files)
│   ├── compiler-messages/              # Compiler errors and warnings (161 files)
│   ├── compiler-options/               # Build/compile options (10 files)
│   ├── keywords/                       # All C# keywords reference (74 files)
│   ├── operators/                      # Operators and expressions (34 files)
│   ├── statements/                     # Control flow statements (10 files)
│   ├── tokens/                         # Contextual tokens (6 files)
│   └── xmldoc/                         # XML documentation tags (1 file)
├── linq/                               # LINQ overview and how-tos (6 files)
│   ├── get-started/                    # LINQ introduction tutorials (6 files)
│   └── standard-query-operators/       # All LINQ operators reference (10 files)
├── programming-guide/
│   ├── classes-and-structs/            # Classes, properties, constructors, etc. (40 files)
│   ├── concepts/
│   │   └── covariance-contravariance/  # Covariance/contravariance (7 files)
│   ├── delegates/                      # Delegate usage patterns (5 files)
│   ├── events/                         # Event handling (5 files)
│   ├── generics/                       # Generic classes, methods, constraints (9 files)
│   ├── indexers/                       # Indexer usage (4 files)
│   ├── interfaces/                     # Interface implementation (3 files)
│   ├── statements-expressions-operators/ # Equality, expression bodies (5 files)
│   ├── strings/                        # String programming guide (2 files)
│   └── types/                          # Boxing, casting, type conversion (5 files)
├── roslyn-sdk/                         # Compiler API (Roslyn) (7 files)
│   ├── get-started/                    # Syntax/semantic analysis tutorials (3 files)
│   └── tutorials/                      # Analyzer code-fix tutorial (1 file)
├── tour-of-csharp/                     # Language overview (6 files)
│   └── tutorials/                      # Interactive intro tutorials (7 files)
├── tutorials/                          # End-to-end tutorials (7 files)
└── whats-new/                          # New features per version (6 files)
    └── tutorials/                      # New feature hands-on tutorials (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Language overview | `contents/tour-of-csharp/overview.md` |
| Built-in types | `contents/language-reference/builtin-types/` |
| Keywords reference | `contents/language-reference/keywords/` |
| Operators reference | `contents/language-reference/operators/` |
| async/await | `contents/asynchronous-programming/task-asynchronous-programming-model.md` |
| LINQ | `contents/linq/index.md` |
| Pattern matching | `contents/fundamentals/functional/pattern-matching.md` |
| Nullable reference types | `contents/fundamentals/null-safety/nullable-reference-types.md` |
| Generics | `contents/programming-guide/generics/` |
| Records | `contents/fundamentals/types/records.md` |
| Compiler errors | `contents/language-reference/compiler-messages/` |
| What's new (C# 14/15) | `contents/whats-new/csharp-14.md`, `contents/whats-new/csharp-15.md` |

## Detailed Structure

### (root) — 11 files

| File | Description |
|------|-------------|
| `delegate-class.md` | System.Delegate and System.MulticastDelegate |
| `delegates-overview.md` | Introduction to delegates |
| `delegates-patterns.md` | Common delegate usage patterns |
| `delegates-strongly-typed.md` | Strongly typed delegates |
| `distinguish-delegates-events.md` | Delegates vs events |
| `event-pattern.md` | Standard .NET event pattern |
| `events-overview.md` | C# event overview |
| `iterators.md` | Iterator methods and yield |
| `methods.md` | Method declarations and features |
| `modern-events.md` | Modern event patterns |
| `versioning.md` | Versioning with override and new |

### fundamentals/coding-style/ — 2 files

| File | Description |
|------|-------------|
| `coding-conventions.md` | C# coding conventions |
| `identifier-names.md` | Naming rules for identifiers |

### fundamentals/exceptions/ — 7 files

| File | Description |
|------|-------------|
| `index.md` | Exception handling overview |
| `using-exceptions.md` | Using exceptions effectively |
| `exception-handling.md` | try/catch/finally patterns |
| `creating-and-throwing-exceptions.md` | Creating custom exceptions |
| `compiler-generated-exceptions.md` | Exceptions thrown by runtime |
| `how-to-handle-an-exception-using-try-catch.md` | try-catch how-to |
| `how-to-execute-cleanup-code-using-finally.md` | finally cleanup how-to |

### fundamentals/functional/ — 3 files

| File | Description |
|------|-------------|
| `pattern-matching.md` | Pattern matching overview |
| `deconstruct.md` | Deconstructing tuples and objects |
| `discards.md` | Using discard _ variables |

### fundamentals/null-safety/ — 5 files

| File | Description |
|------|-------------|
| `index.md` | Null safety overview |
| `nullable-reference-types.md` | Nullable reference type annotations |
| `nullable-value-types.md` | Nullable value types (T?) |
| `null-operators.md` | ??, ??=, ?. operators |
| `common-tasks/resolve-warnings.md` | Resolving nullable warnings |

### fundamentals/object-oriented/ — 4 files

| File | Description |
|------|-------------|
| `index.md` | OOP overview |
| `objects.md` | Object creation and lifecycle |
| `inheritance.md` | Class inheritance |
| `polymorphism.md` | Polymorphism |

### fundamentals/program-structure/ — 6 files

| File | Description |
|------|-------------|
| `index.md` | Program structure overview |
| `top-level-statements.md` | Top-level statements (C# 9+) |
| `main-command-line.md` | Main method and command-line args |
| `namespaces.md` | Namespace declarations |
| `program-organization.md` | Organizing code in files |
| `preprocessor-directives.md` | #if, #define, #pragma etc. |

### fundamentals/strings/ — 6 files

| File | Description |
|------|-------------|
| `index.md` | Strings overview |
| `interpolation.md` | String interpolation ($"...") |
| `raw-string-literals.md` | Raw string literals (""") |
| `nameof.md` | nameof operator |
| `common-tasks/search.md` | String search operations |
| `common-tasks/split.md` | String split operations |

### fundamentals/tutorials/ — 12 files

| File | Description |
|------|-------------|
| `classes.md` | Building classes tutorial |
| `records.md` | Working with records |
| `oop.md` | OOP tutorial |
| `inheritance.md` | Inheritance tutorial |
| `pattern-matching.md` | Pattern matching tutorial |
| `nullable-reference-types.md` | Nullable annotations tutorial |
| `choosing-types.md` | Choosing types tutorial |
| `file-based-programs.md` | File-based programs tutorial |
| `system-command-line.md` | System.CommandLine tutorial |
| `xml-documentation.md` | XML doc comments tutorial |
| `safely-cast-using-pattern-matching-is-and-as-operators.md` | Casting with is/as |
| `how-to-display-command-line-arguments.md` | Command-line args how-to |

### fundamentals/types/ — 11 files

| File | Description |
|------|-------------|
| `index.md` | Type system overview |
| `built-in-types.md` | Overview of built-in types |
| `classes.md` | Reference types and classes |
| `structs.md` | Value types and structs |
| `records.md` | Record types |
| `interfaces.md` | Interface declarations |
| `generics.md` | Generic types overview |
| `enums.md` | Enumeration types |
| `tuples.md` | Tuple types |
| `delegates-lambdas.md` | Delegates and lambda expressions |
| `conversions.md` | Type conversions |

### asynchronous-programming/ — 9 files

| File | Description |
|------|-------------|
| `index.md` | Async programming overview |
| `task-asynchronous-programming-model.md` | TAP model (core async concepts) |
| `async-scenarios.md` | Common async scenarios |
| `async-return-types.md` | Task, ValueTask, IAsyncEnumerable return types |
| `generate-consume-asynchronous-stream.md` | async streams (IAsyncEnumerable) |
| `cancel-an-async-task-or-a-list-of-tasks.md` | CancellationToken usage |
| `cancel-async-tasks-after-a-period-of-time.md` | Timeout cancellation |
| `start-multiple-async-tasks-and-process-them-as-they-complete.md` | Task.WhenAny patterns |
| `using-async-for-file-access.md` | File I/O with async |

### advanced-topics/expression-trees/ — 9 files

| File | Description |
|------|-------------|
| `index.md` | Expression trees overview |
| `expression-trees-explained.md` | What are expression trees |
| `expression-classes.md` | Expression class hierarchy |
| `expression-trees-building.md` | Building expression trees |
| `expression-trees-execution.md` | Executing expression trees |
| `expression-trees-interpreting.md` | Interpreting expression trees |
| `expression-trees-translating.md` | Translating expression trees |
| `debugview-syntax.md` | DebugView property syntax |
| `debugging-expression-trees-in-visual-studio.md` | Debugging expression trees |

### advanced-topics/interface-implementation/ — 3 files

| File | Description |
|------|-------------|
| `default-interface-methods-versions.md` | Default interface methods |
| `mixins-with-default-interface-methods.md` | Mixin pattern with DIMs |
| `static-virtual-interface-members.md` | Static virtual interface members |

### advanced-topics/interop/ — 9 files

| File | Description |
|------|-------------|
| `index.md` | Interoperability overview |
| `using-type-dynamic.md` | Using dynamic type |
| `walkthrough-creating-and-using-dynamic-objects.md` | Dynamic objects walkthrough |
| `example-com-class.md` | COM class example |
| `walkthrough-office-programming.md` | Office automation walkthrough |
| `how-to-access-office-interop-objects.md` | Accessing Office COM objects |
| `how-to-use-indexed-properties-in-com-interop-programming.md` | COM indexed properties |
| `how-to-use-named-and-optional-arguments-in-office-programming.md` | Named/optional args in COM |
| `how-to-use-platform-invoke-to-play-a-wave-file.md` | P/Invoke example |

### advanced-topics/performance/ — 3 files

| File | Description |
|------|-------------|
| `index.md` | Performance techniques overview |
| `ref-tutorial.md` | ref, in, out, ref readonly |
| `interpolated-string-handler.md` | Custom interpolated string handlers |

### advanced-topics/reflection-and-attributes/ — 8 files

| File | Description |
|------|-------------|
| `index.md` | Reflection and attributes overview |
| `creating-custom-attributes.md` | Creating custom attributes |
| `attribute-tutorial.md` | Attribute creation tutorial |
| `accessing-attributes-by-using-reflection.md` | Reading attributes via reflection |
| `generics-and-attributes.md` | Attributes on generic types |
| `generics-and-reflection.md` | Reflection with generics |
| `how-to-create-a-c-cpp-union-by-using-attributes.md` | Union-style struct with StructLayout |
| `how-to-query-assembly-metadata-with-reflection-linq.md` | Querying assembly metadata |

### advanced-topics/update-applications/ — 1 file

| File | Description |
|------|-------------|
| `nullable-migration-strategies.md` | Migrating to nullable reference types |

### how-to/ — 5 files

| File | Description |
|------|-------------|
| `index.md` | How-to index |
| `compare-strings.md` | String comparison techniques |
| `modify-string-contents.md` | Modifying strings |
| `concatenate-multiple-strings.md` | String concatenation |
| `how-to-catch-a-non-cls-exception.md` | Catching non-CLS exceptions |

### language-reference/ (root) — 4 files

| File | Description |
|------|-------------|
| `configure-language-version.md` | Setting C# language version |
| `language-versioning.md` | Language version compatibility |
| `preprocessor-directives.md` | Preprocessor directives reference |
| `unsafe-code.md` | Unsafe code and pointers |

### language-reference/attributes/ — 5 files

| File | Description |
|------|-------------|
| `caller-information.md` | CallerMemberName, CallerFilePath, etc. |
| `global.md` | Global attributes (assembly-level) |
| `nullable-analysis.md` | Nullable analysis attributes |
| `experimental.md` | ExperimentalAttribute |
| `platform-compatibility.md` | SupportedOSPlatform attributes |

### language-reference/builtin-types/ — 22 files

| File | Description |
|------|-------------|
| `value-types.md` | Value types overview |
| `bool.md` | bool type |
| `integral-numeric-types.md` | int, long, byte, etc. |
| `floating-point-numeric-types.md` | float, double, decimal |
| `char.md` | char type |
| `enum.md` | enum declarations |
| `struct.md` | struct declarations |
| `record.md` | record and record struct |
| `nullable-value-types.md` | Nullable<T> / T? |
| `reference-types.md` | Reference types overview |
| `string.md` | string type |
| `object.md` | object type |
| `dynamic.md` | dynamic type |
| `collections.md` | Collection types overview |
| `arrays.md` | Array declarations |
| `void.md` | void return type |
| `default-values.md` | Default values of types |
| `unmanaged-types.md` | Unmanaged types |
| `nint-nuint.md` | Native integer types |
| `inline-arrays.md` | Inline array types (C# 12) |
| `ref-struct.md` | ref struct types |
| `anonymous-types.md` | Anonymous types |

### language-reference/compiler-messages/ — 161 files

Compiler error and warning reference. Named by error code (cs0001.md etc.) or by category:

| File | Description |
|------|-------------|
| `nullable-warnings.md` | Nullable reference warnings (CS8xxx) |
| `async-await-errors.md` | Async/await error codes |
| `pattern-matching-warnings.md` | Pattern matching warnings |
| `lambda-expression-errors.md` | Lambda expression errors |
| `overload-resolution.md` | Overload resolution errors |
| `ref-safety-errors.md` | ref safety violations |
| `ref-struct-errors.md` | ref struct constraint errors |
| `generic-type-parameters-errors.md` | Generic type parameter errors |
| `record-declaration-errors.md` | Record type errors |
| `warning-waves.md` | Warning wave descriptions |
| `feature-version-errors.md` | Feature/version mismatch errors |
| *(+ 150 more individual error pages)* | |

### language-reference/compiler-options/ — 10 files

| File | Description |
|------|-------------|
| `language.md` | Language feature compiler options |
| `output.md` | Output options |
| `errors-warnings.md` | Error/warning control options |
| `code-analysis.md` | Code analysis options |
| `security.md` | Security-related options |
| `resources.md` | Resource embedding options |
| `miscellaneous.md` | Miscellaneous options |
| `advanced.md` | Advanced compiler options |
| `nullable.md` | Nullable analysis options |
| `optimizations.md` | Optimization options |

### language-reference/keywords/ — 74 files

One file per keyword: `abstract.md`, `async.md`, `await.md`, `base.md`, `class.md`, `const.md`, `default.md`, `delegate.md`, `enum.md`, `event.md`, `extern.md`, `foreach.md`, `if.md`, `interface.md`, `is.md`, `lock.md`, `namespace.md`, `new.md`, `null.md`, `operator.md`, `override.md`, `params.md`, `readonly.md`, `record.md`, `ref.md`, `return.md`, `sealed.md`, `static.md`, `struct.md`, `switch.md`, `this.md`, `throw.md`, `try.md`, `typeof.md`, `using.md`, `var.md`, `virtual.md`, `void.md`, `where.md`, `yield.md`, and more.

### language-reference/operators/ — 34 files

| File | Description |
|------|-------------|
| `index.md` | Operators overview |
| `arithmetic-operators.md` | +, -, *, /, % |
| `bitwise-and-shift-operators.md` | &, |, ^, ~, <<, >> |
| `boolean-logical-operators.md` | &&, ||, ! |
| `comparison-operators.md` | <, >, <=, >= |
| `equality-operators.md` | ==, != |
| `assignment-operators.md` | =, +=, -=, etc. |
| `member-access-operators.md` | ., ?., [], () |
| `type-testing-and-cast.md` | is, as, typeof, sizeof, cast |
| `await-expression.md` | await operator |
| `lambda-expressions.md` | Lambda => syntax |
| `null-coalescing-operator.md` | ?? and ??= |
| `conditional-operator.md` | ?: ternary |
| `with-expression.md` | with expression for records |
| `patterns.md` | Pattern expressions |
| `stackalloc.md` | stackalloc |
| `pointer-related-operators.md` | Unsafe pointer operators |
| *(+ more operator pages)* | |

### language-reference/statements/ — 10 files

| File | Description |
|------|-------------|
| `declarations.md` | Variable declarations |
| `iteration-statements.md` | for, foreach, while, do |
| `selection-statements.md` | if, switch |
| `jump-statements.md` | break, continue, goto, return, throw |
| `exception-handling-statements.md` | try, catch, finally |
| `fixed-statement.md` | fixed statement (unsafe) |
| `lock-statement.md` | lock statement |
| `using-statement.md` | using statement / declaration |
| `checked-and-unchecked.md` | checked/unchecked contexts |
| `yield.md` | yield statement |

### language-reference/tokens/ — 6 files

Contextual tokens: `default.md`, `this.md`, `base.md`, `new.md`, and delegate/lambda tokens.

### language-reference/xmldoc/ — 1 file

| File | Description |
|------|-------------|
| `index.md` | XML documentation comment tags |

### linq/ — 6 files

| File | Description |
|------|-------------|
| `index.md` | LINQ overview |
| `how-to-query-collections.md` | Querying collections |
| `how-to-query-strings.md` | Querying strings with LINQ |
| `how-to-query-files-and-directories.md` | File system queries |
| `how-to-build-dynamic-queries.md` | Dynamic LINQ expression trees |
| `how-to-extend-linq.md` | Extending LINQ with custom operators |

### linq/get-started/ — 6 files

| File | Description |
|------|-------------|
| `introduction-to-linq-queries.md` | Anatomy of a LINQ query |
| `query-expression-basics.md` | Query syntax basics |
| `linq-and-generic-types.md` | LINQ type system |
| `write-linq-queries.md` | Writing LINQ queries |
| `data-transformations-with-linq.md` | Projections and transforms |
| `type-relationships-in-linq-query-operations.md` | Type inference in LINQ |

### linq/standard-query-operators/ — 10 files

| File | Description |
|------|-------------|
| `index.md` | Standard query operators overview |
| `filtering-data.md` | Where, OfType |
| `projection-operations.md` | Select, SelectMany |
| `sorting-data.md` | OrderBy, ThenBy |
| `set-operations.md` | Distinct, Union, Intersect, Except |
| `grouping-data.md` | GroupBy, ToLookup |
| `join-operations.md` | Join, GroupJoin |
| `aggregation-operations.md` | Count, Sum, Min, Max, Average, Aggregate |
| `quantifier-operations.md` | Any, All, Contains |
| `element-operations.md` | First, Last, Single, ElementAt |

### programming-guide/classes-and-structs/ — 40 files

Covers classes, structs, properties, constructors, methods, fields, events, inheritance, and more. Key files:

| File | Description |
|------|-------------|
| `properties.md` | Property declarations |
| `methods.md` | Method declarations |
| `constructors.md` | Constructor types |
| `instance-constructors.md` | Instance constructor details |
| `static-constructors.md` | Static constructors |
| `extension-methods.md` | Extension method declarations |
| `local-functions.md` | Local functions |
| `partial-classes-and-methods.md` | Partial types |
| `anonymous-types.md` | Anonymous object creation |
| `object-and-collection-initializers.md` | Object/collection init syntax |
| `access-modifiers.md` | public, private, protected, internal |
| `named-and-optional-arguments.md` | Named and optional parameters |
| `implicitly-typed-local-variables.md` | var keyword usage |
| `abstract-and-sealed-classes-and-class-members.md` | abstract/sealed |
| `static-classes-and-static-class-members.md` | Static types and members |

### programming-guide/generics/ — 9 files

| File | Description |
|------|-------------|
| `generic-type-parameters.md` | Type parameters and naming |
| `constraints-on-type-parameters.md` | where T : constraints |
| `generic-classes.md` | Generic class declarations |
| `generic-interfaces.md` | Generic interface declarations |
| `generic-methods.md` | Generic method declarations |
| `generic-delegates.md` | Generic delegate declarations |
| `generics-and-arrays.md` | Arrays and generics |
| `generics-in-the-run-time.md` | CLR representation of generics |
| `differences-between-cpp-templates-and-csharp-generics.md` | C++ vs C# generics |

### programming-guide/concepts/covariance-contravariance/ — 7 files

| File | Description |
|------|-------------|
| `index.md` | Covariance and contravariance overview |
| `variance-in-generic-interfaces.md` | in/out on interfaces |
| `creating-variant-generic-interfaces.md` | Creating variant interfaces |
| `variance-in-delegates.md` | Variance in delegate types |
| `using-variance-in-delegates.md` | Applying variance in delegates |
| `using-variance-for-func-and-action-generic-delegates.md` | Func/Action variance |
| `using-variance-in-interfaces-for-generic-collections.md` | IEnumerable<out T> variance |

### programming-guide/delegates/ — 5 files

| File | Description |
|------|-------------|
| `index.md` | Delegates programming guide |
| `using-delegates.md` | Using delegates |
| `delegates-with-named-vs-anonymous-methods.md` | Named vs anonymous methods |
| `how-to-declare-instantiate-and-use-a-delegate.md` | Delegate lifecycle |
| `how-to-combine-delegates-multicast-delegates.md` | Multicast delegates |

### programming-guide/events/ — 5 files

| File | Description |
|------|-------------|
| `index.md` | Events programming guide |
| `how-to-subscribe-to-and-unsubscribe-from-events.md` | Event subscription |
| `how-to-raise-base-class-events-in-derived-classes.md` | Raising base events |
| `how-to-implement-interface-events.md` | Interface events |
| `how-to-implement-custom-event-accessors.md` | Custom add/remove accessors |

### programming-guide/indexers/ — 4 files

| File | Description |
|------|-------------|
| `index.md` | Indexers overview |
| `using-indexers.md` | Implementing indexers |
| `indexers-in-interfaces.md` | Indexers in interfaces |
| `comparison-between-properties-and-indexers.md` | Properties vs indexers |

### programming-guide/interfaces/ — 3 files

| File | Description |
|------|-------------|
| `explicit-interface-implementation.md` | Explicit interface implementation |
| `how-to-explicitly-implement-interface-members.md` | How-to guide |
| `how-to-explicitly-implement-members-of-two-interfaces.md` | Implementing two interfaces |

### programming-guide/statements-expressions-operators/ — 5 files

| File | Description |
|------|-------------|
| `statements.md` | Statement types overview |
| `expression-bodied-members.md` | => expression bodies |
| `equality-comparisons.md` | Equality comparison semantics |
| `how-to-define-value-equality-for-a-type.md` | Custom Equals/GetHashCode |
| `how-to-test-for-reference-equality-identity.md` | ReferenceEquals |

### programming-guide/types/ — 5 files

| File | Description |
|------|-------------|
| `boxing-and-unboxing.md` | Boxing value types |
| `casting-and-type-conversions.md` | Explicit and implicit casts |
| `how-to-convert-a-byte-array-to-an-int.md` | Byte array conversions |
| `how-to-convert-a-string-to-a-number.md` | Parse/TryParse patterns |
| `how-to-convert-between-hexadecimal-strings-and-numeric-types.md` | Hex conversions |

### roslyn-sdk/ — 7 files

| File | Description |
|------|-------------|
| `index.md` | Roslyn SDK overview |
| `compiler-api-model.md` | Compiler API architecture |
| `syntax-visualizer.md` | Syntax Visualizer tool |
| `work-with-syntax.md` | Working with syntax trees |
| `work-with-semantics.md` | Semantic model usage |
| `work-with-workspace.md` | Workspace API |
| `choosing-diagnostic-ids.md` | Diagnostic ID conventions |

### roslyn-sdk/get-started/ — 3 files

| File | Description |
|------|-------------|
| `syntax-analysis.md` | Syntax analysis tutorial |
| `semantic-analysis.md` | Semantic analysis tutorial |
| `syntax-transformation.md` | Syntax transformation tutorial |

### roslyn-sdk/tutorials/ — 1 file

| File | Description |
|------|-------------|
| `how-to-write-csharp-analyzer-code-fix.md` | Analyzer + code fix tutorial |

### tour-of-csharp/ — 6 files

| File | Description |
|------|-------------|
| `overview.md` | C# language overview |
| `strategy.md` | C# design philosophy |
| `what-you-can-build.md` | What you can build with C# |
| `tips-for-java-developers.md` | C# for Java developers |
| `tips-for-javascript-developers.md` | C# for JavaScript developers |
| `tips-for-python-developers.md` | C# for Python developers |

### tour-of-csharp/tutorials/ — 7 files

| File | Description |
|------|-------------|
| `index.md` | Tutorials index |
| `hello-world.md` | Hello World |
| `numbers-in-csharp.md` | Numbers and arithmetic |
| `branches-and-loops.md` | Branches and loops |
| `list-collection.md` | List<T> collection |
| `tuples-and-types.md` | Tuples and types |
| `pattern-matching.md` | Pattern matching tutorial |

### tutorials/ — 7 files

| File | Description |
|------|-------------|
| `console-teleprompter.md` | Console app with async |
| `console-webapiclient.md` | HTTP client tutorial |
| `working-with-linq.md` | LINQ in practice |
| `patterns-objects.md` | OOP patterns tutorial |
| `ranges-indexes.md` | Ranges and indexes (^, ..) |
| `string-interpolation.md` | String interpolation deep-dive |
| `top-level-statements.md` | Top-level statements tutorial |

### whats-new/ — 6 files

| File | Description |
|------|-------------|
| `csharp-12.md` | C# 12 features |
| `csharp-13.md` | C# 13 features |
| `csharp-14.md` | C# 14 features |
| `csharp-15.md` | C# 15 features |
| `relationships-between-language-and-library.md` | Language/library versioning relationship |
| `version-update-considerations.md` | Upgrade considerations |

### whats-new/tutorials/ — 3 files

| File | Description |
|------|-------------|
| `primary-constructors.md` | Primary constructors tutorial (C# 12) |
| `extension-members.md` | Extension members tutorial |
| `compound-assignment-operators.md` | Compound assignment operators tutorial |
