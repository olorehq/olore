# dotnet-csharp Documentation Structure

## Directory Map

```
contents/
├── tour-of-csharp/            # Overview and beginner orientation (13 files)
├── fundamentals/              # Core language fundamentals (39 files)
│   ├── coding-style/          # Coding conventions and style
│   ├── exceptions/            # Exception handling fundamentals
│   ├── functional/            # Functional programming patterns
│   ├── object-oriented/       # OOP concepts
│   ├── program-structure/     # Namespaces, top-level programs
│   ├── tutorials/             # Introductory tutorials
│   └── types/                 # Type system overview
├── language-reference/        # Complete language reference (330 files)
│   ├── builtin-types/         # Built-in types: bool, int, string, etc. (21 files)
│   ├── keywords/              # All C# keywords (73 files)
│   ├── operators/             # Operators and expressions (34 files)
│   ├── statements/            # Statements: loops, conditions, yield, using (10 files)
│   ├── compiler-messages/     # Compiler errors and warnings (164 files)
│   ├── compiler-options/      # Compiler configuration options (10 files)
│   ├── attributes/            # Built-in attributes (5 files)
│   ├── tokens/                # Tokens: literals, identifiers (6 files)
│   └── xmldoc/                # XML documentation comments (3 files)
├── programming-guide/         # In-depth programming guides (86 files)
│   ├── classes-and-structs/   # Classes, structs, properties, methods (37 files)
│   ├── generics/              # Generic types and constraints (9 files)
│   ├── interfaces/            # Interface implementation (5 files)
│   ├── delegates/             # Delegates and events (6 files)
│   ├── events/                # Event patterns (6 files)
│   ├── indexers/              # Indexer syntax (5 files)
│   ├── strings/               # String operations (4 files)
│   ├── types/                 # Type system deep-dive (6 files)
│   ├── statements-expressions-operators/ # Expressions, operators (4 files)
│   └── concepts/              # Covariance and contravariance (2 files)
├── advanced-topics/           # Advanced C# topics (32 files)
│   ├── expression-trees/      # Expression tree construction and analysis
│   ├── interface-implementation/ # Advanced interface patterns
│   ├── interop/               # Interoperability (COM, P/Invoke)
│   ├── performance/           # Performance optimization, spans, memory
│   └── reflection-and-attributes/ # Reflection and custom attributes
├── linq/                      # LINQ (Language Integrated Query) (22 files)
│   ├── get-started/           # LINQ introduction
│   └── standard-query-operators/ # All standard query operators
├── asynchronous-programming/  # async/await and Task-based programming (9 files)
├── tutorials/                 # Hands-on tutorials (10 files)
├── how-to/                    # How-to guides: strings, parsing (7 files)
├── whats-new/                 # New features by version (11 files)
├── roslyn-sdk/                # Compiler API / Roslyn SDK (11 files)
├── specification/             # Language specification overview (2 files)
└── (root)                     # Delegates, events, iterators, nullable (13 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| C# overview / getting started | `contents/tour-of-csharp/overview.md` |
| Language features by version | `contents/whats-new/csharp-13.md`, `contents/whats-new/csharp-14.md` |
| Language fundamentals | `contents/fundamentals/` |
| Type system | `contents/language-reference/builtin-types/built-in-types.md` |
| Keywords reference | `contents/language-reference/keywords/` |
| Operators reference | `contents/language-reference/operators/` |
| async/await | `contents/asynchronous-programming/task-asynchronous-programming-model.md` |
| LINQ | `contents/linq/get-started/`, `contents/linq/standard-query-operators/` |
| Classes and structs | `contents/programming-guide/classes-and-structs/` |
| Generics | `contents/programming-guide/generics/` |
| Pattern matching | `contents/language-reference/operators/patterns.md` |
| Records | `contents/language-reference/builtin-types/record.md` |
| Nullable reference types | `contents/language-reference/builtin-types/nullable-reference-types.md` |
| Compiler errors | `contents/language-reference/compiler-messages/` |
| Performance / Spans | `contents/advanced-topics/performance/` |
| Reflection | `contents/advanced-topics/reflection-and-attributes/` |

## Detailed Structure

### tour-of-csharp/ (13 files)

| File | Description |
|------|-------------|
| `tour-of-csharp/overview.md` | C# language overview |
| `tour-of-csharp/strategy.md` | C# language strategy and goals |
| `tour-of-csharp/tips-for-java-developers.md` | C# guide for Java developers |
| `tour-of-csharp/tips-for-javascript-developers.md` | C# guide for JavaScript developers |
| `tour-of-csharp/tips-for-python-developers.md` | C# guide for Python developers |
| `tour-of-csharp/what-you-can-build.md` | What you can build with C# |
| `tour-of-csharp/tutorials/` | Introductory tutorial files (7 files) |

### fundamentals/ (39 files)

| File | Description |
|------|-------------|
| `fundamentals/coding-style/` | Coding conventions and identifier naming rules |
| `fundamentals/exceptions/` | Exception handling, creating custom exceptions |
| `fundamentals/functional/` | Functional programming: pattern matching, records |
| `fundamentals/object-oriented/` | OOP: inheritance, polymorphism, encapsulation |
| `fundamentals/program-structure/` | Namespaces, top-level statements, Main method |
| `fundamentals/types/` | Value types, reference types, boxing/unboxing |
| `fundamentals/tutorials/` | Hands-on tutorials for fundamentals |

### language-reference/builtin-types/ (21 files)

| File | Description |
|------|-------------|
| `language-reference/builtin-types/built-in-types.md` | Overview of all built-in types |
| `language-reference/builtin-types/bool.md` | Boolean type |
| `language-reference/builtin-types/char.md` | Character type |
| `language-reference/builtin-types/integral-numeric-types.md` | int, long, short, byte, etc. |
| `language-reference/builtin-types/floating-point-numeric-types.md` | float, double, decimal |
| `language-reference/builtin-types/collections.md` | Collection types overview |
| `language-reference/builtin-types/nullable-value-types.md` | Nullable value types (T?) |
| `language-reference/builtin-types/nullable-reference-types.md` | Nullable reference types |
| `language-reference/builtin-types/record.md` | Record types |
| `language-reference/builtin-types/ref-struct.md` | ref struct types |
| `language-reference/builtin-types/enum.md` | Enum types |
| `language-reference/builtin-types/reference-types.md` | Reference types: string, object, dynamic |
| `language-reference/builtin-types/default-values.md` | Default values for types |
| `language-reference/builtin-types/numeric-conversions.md` | Numeric type conversions |
| `language-reference/builtin-types/arrays.md` | Arrays |

### language-reference/keywords/ (73 files)

Key keyword documentation files (selected):

| File | Description |
|------|-------------|
| `language-reference/keywords/async.md` | async modifier |
| `language-reference/keywords/abstract.md` | abstract modifier |
| `language-reference/keywords/access-modifiers.md` | public, private, protected, internal |
| `language-reference/keywords/class.md` | class keyword |
| `language-reference/keywords/const.md` | const keyword |
| `language-reference/keywords/default.md` | default keyword |
| `language-reference/keywords/event.md` | event keyword |
| `language-reference/keywords/extern.md` | extern modifier |
| `language-reference/keywords/field.md` | field keyword (C# 14) |
| `language-reference/keywords/file.md` | file-scoped type modifier |

### language-reference/operators/ (34 files)

| File | Description |
|------|-------------|
| `language-reference/operators/arithmetic-operators.md` | +, -, *, /, % |
| `language-reference/operators/assignment-operator.md` | =, +=, -=, compound assignment |
| `language-reference/operators/boolean-logical-operators.md` | &&, \|\|, ! |
| `language-reference/operators/bitwise-and-shift-operators.md` | &, \|, ^, <<, >> |
| `language-reference/operators/comparison-operators.md` | <, >, <=, >= |
| `language-reference/operators/equality-operators.md` | ==, != |
| `language-reference/operators/conditional-operator.md` | ?: ternary operator |
| `language-reference/operators/is.md` | is operator and pattern matching |
| `language-reference/operators/await.md` | await operator |
| `language-reference/operators/collection-expressions.md` | Collection expressions [..] |
| `language-reference/operators/deconstruction.md` | Deconstruction syntax |
| `language-reference/operators/patterns.md` | Pattern matching patterns |

### language-reference/statements/ (10 files)

| File | Description |
|------|-------------|
| `language-reference/statements/declarations.md` | Variable declarations, var, using declarations |
| `language-reference/statements/iteration-statements.md` | for, foreach, while, do-while |
| `language-reference/statements/selection-statements.md` | if, switch, switch expressions |
| `language-reference/statements/exception-handling-statements.md` | try, catch, finally, throw |
| `language-reference/statements/jump-statements.md` | break, continue, return, goto |
| `language-reference/statements/yield.md` | yield return, yield break |
| `language-reference/statements/using.md` | using statement |
| `language-reference/statements/fixed.md` | fixed statement (unsafe) |
| `language-reference/statements/lock.md` | lock statement |
| `language-reference/statements/checked-and-unchecked.md` | checked/unchecked arithmetic |

### language-reference/compiler-messages/ (164 files)

Organized by error category (selected):

| File | Description |
|------|-------------|
| `language-reference/compiler-messages/async-await-errors.md` | Async/await errors (CS1983-CS1992, etc.) |
| `language-reference/compiler-messages/array-declaration-errors.md` | Array declaration errors |
| `language-reference/compiler-messages/assembly-references.md` | Assembly reference errors |

### programming-guide/classes-and-structs/ (37 files)

| File | Description |
|------|-------------|
| `programming-guide/classes-and-structs/classes.md` | Class overview |
| `programming-guide/classes-and-structs/properties.md` | Properties |
| `programming-guide/classes-and-structs/methods.md` | Methods |
| `programming-guide/classes-and-structs/constructors.md` | Constructors |
| `programming-guide/classes-and-structs/extension-methods.md` | Extension methods |
| `programming-guide/classes-and-structs/local-functions.md` | Local functions |
| `programming-guide/classes-and-structs/static-classes-and-static-class-members.md` | Static classes |
| `programming-guide/classes-and-structs/object-and-collection-initializers.md` | Object initializers |
| `programming-guide/classes-and-structs/partial-classes-and-methods.md` | Partial classes |
| `programming-guide/classes-and-structs/named-and-optional-arguments.md` | Named/optional parameters |

### programming-guide/generics/ (9 files)

| File | Description |
|------|-------------|
| `programming-guide/generics/generic-classes.md` | Generic classes |
| `programming-guide/generics/generic-methods.md` | Generic methods |
| `programming-guide/generics/generic-interfaces.md` | Generic interfaces |
| `programming-guide/generics/constraints-on-type-parameters.md` | Generic constraints (where T:) |
| `programming-guide/generics/generic-delegates.md` | Generic delegates |

### asynchronous-programming/ (9 files)

| File | Description |
|------|-------------|
| `asynchronous-programming/task-asynchronous-programming-model.md` | TAP model overview |
| `asynchronous-programming/async-return-types.md` | Task, Task<T>, ValueTask, void |
| `asynchronous-programming/async-scenarios.md` | Real-world async scenarios |
| `asynchronous-programming/generate-consume-asynchronous-stream.md` | IAsyncEnumerable / async streams |
| `asynchronous-programming/cancel-an-async-task-or-a-list-of-tasks.md` | Cancellation tokens |
| `asynchronous-programming/start-multiple-async-tasks-and-process-them-as-they-complete.md` | Task.WhenAll, WhenAny |

### linq/ (22 files)

| File | Description |
|------|-------------|
| `linq/index.md` | LINQ overview |
| `linq/get-started/` | Introduction to LINQ (multiple files) |
| `linq/standard-query-operators/` | Where, Select, GroupBy, Join, OrderBy, etc. |
| `linq/how-to-query-collections.md` | Query collections |
| `linq/how-to-query-strings.md` | Query strings |
| `linq/how-to-build-dynamic-queries.md` | Dynamic query building |
| `linq/how-to-extend-linq.md` | Extending LINQ |

### advanced-topics/ (32 files)

| File | Description |
|------|-------------|
| `advanced-topics/expression-trees/` | Building and compiling expression trees |
| `advanced-topics/interface-implementation/` | Explicit/implicit interface implementation, default interface methods |
| `advanced-topics/interop/` | COM interop, P/Invoke, unsafe code |
| `advanced-topics/performance/` | Span<T>, Memory<T>, stackalloc, unsafe performance patterns |
| `advanced-topics/reflection-and-attributes/` | Reflection API, custom attributes |

### whats-new/ (11 files)

| File | Description |
|------|-------------|
| `whats-new/csharp-13.md` | New features in C# 13 |
| `whats-new/csharp-14.md` | New features in C# 14 |
| `whats-new/csharp-15.md` | New features in C# 15 |
| `whats-new/csharp-12.md` | New features in C# 12 |
| `whats-new/csharp-version-history.md` | Version history summary |
| `whats-new/breaking-changes.md` | Breaking changes across versions |
| `whats-new/version-update-considerations.md` | Upgrading between versions |

### tutorials/ (10 files)

| File | Description |
|------|-------------|
| `tutorials/records.md` | Working with records |
| `tutorials/ranges-indexes.md` | Ranges and indices (^, ..) |
| `tutorials/nullable-reference-types.md` | Nullable reference types tutorial |
| `tutorials/working-with-linq.md` | LINQ tutorial |
| `tutorials/string-interpolation.md` | String interpolation |
| `tutorials/console-teleprompter.md` | Async programming tutorial |
| `tutorials/patterns-objects.md` | Pattern matching with objects |
| `tutorials/top-level-statements.md` | Top-level programs |

### how-to/ (7 files)

| File | Description |
|------|-------------|
| `how-to/compare-strings.md` | String comparison methods |
| `how-to/concatenate-multiple-strings.md` | String concatenation |
| `how-to/modify-string-contents.md` | Modifying strings |
| `how-to/search-strings.md` | Searching strings |
| `how-to/parse-strings-using-split.md` | Splitting strings |

### roslyn-sdk/ (11 files)

| File | Description |
|------|-------------|
| `roslyn-sdk/index.md` | Roslyn .NET Compiler Platform SDK overview |
| `roslyn-sdk/compiler-api-model.md` | Compiler API model |
| `roslyn-sdk/work-with-syntax.md` | Working with the syntax tree |
| `roslyn-sdk/work-with-semantics.md` | Working with semantic model |
| `roslyn-sdk/work-with-workspace.md` | Working with workspace |
| `roslyn-sdk/syntax-visualizer.md` | Syntax visualizer tool |
| `roslyn-sdk/get-started/` | Getting started tutorials (2 files) |
| `roslyn-sdk/tutorials/` | Advanced tutorials (3 files) |

### Root files (13 files)

| File | Description |
|------|-------------|
| `delegates-overview.md` | Delegates overview |
| `delegate-class.md` | System.Delegate class |
| `delegates-patterns.md` | Common delegate patterns |
| `delegates-strongly-typed.md` | Strongly typed delegates |
| `distinguish-delegates-events.md` | Delegates vs Events |
| `events-overview.md` | Events overview |
| `event-pattern.md` | Standard .NET event pattern |
| `modern-events.md` | Modern event patterns |
| `iterators.md` | Iterators and yield |
| `methods.md` | Methods overview |
| `versioning.md` | Library versioning strategies |
| `nullable-references.md` | Nullable reference types guide |
| `nullable-migration-strategies.md` | Migrating to nullable reference types |
