# dotnet-csharp Table of Contents

## Directory Map

```
contents/
├── tour-of-csharp/            # Introductory tour and beginner tutorials (13 files)
├── fundamentals/              # Modern guide: types, patterns, null safety, OOP, strings, exceptions (79 files)
├── programming-guide/         # Classic programming guide: generics, delegates, events, classes (80 files)
├── language-reference/        # Language reference (327 files)
│   ├── keywords/              # C# keywords
│   ├── operators/             # Operators and expressions
│   ├── statements/            # Statements
│   ├── builtin-types/         # Built-in types, records, structs, enums
│   ├── attributes/            # Attributes read by the compiler
│   ├── compiler-options/      # Compiler options
│   ├── compiler-messages/     # CSxxxx errors and warnings
│   ├── tokens/                # Special characters and tokens
│   └── xmldoc/                # XML documentation comments
├── linq/                      # LINQ and standard query operators (22 files)
├── asynchronous-programming/  # async/await and TAP (9 files)
├── advanced-topics/           # Interop, reflection, expression trees, performance (32 files)
├── whats-new/                 # C# 12-15 features, version history, breaking changes (13 files)
├── roslyn-sdk/                # Roslyn compiler platform SDK (11 files)
├── tutorials/                 # Additional tutorials (6 files)
├── specification/             # Spec overview (2 files)
├── how-to/                    # Misc how-to (2 files)
└── (root)                     # Delegates and events pages (10 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Language overview | `contents/tour-of-csharp/overview.md` |
| Type system | `contents/fundamentals/types/index.md` |
| Keywords | `contents/language-reference/keywords/` |
| Operators | `contents/language-reference/operators/` |
| Pattern matching | `contents/fundamentals/patterns/pattern-matching.md` |
| Nullable reference types | `contents/fundamentals/null-safety/nullable-reference-types.md` |
| async/await | `contents/asynchronous-programming/task-asynchronous-programming-model.md` |
| LINQ | `contents/linq/index.md` |
| Compiler errors | `contents/language-reference/compiler-messages/` |
| What's new | `contents/whats-new/csharp-15.md` |

## Detailed Structure

### (root) (10 files)

| File | Description |
|------|-------------|
| `delegate-class.md` | Learn about the classes in .NET that support delegates and how those map to the 'delegate' keyword. |
| `delegates-overview.md` | The first in a series of articles about C# delegates and events. This article introduces basic concepts and discusses language design goals for... |
| `delegates-patterns.md` | Learn about common patterns for using delegates in your code to avoid strong coupling between your components. |
| `delegates-strongly-typed.md` | Learn how to use generic delegate types to declare custom types when creating a feature requiring delegates. |
| `distinguish-delegates-events.md` | Learn the difference between delegates and events and when to use each of these features of .NET Core. |
| `event-pattern.md` | Learn about .NET event patterns and how to create standard event sources and subscribe and process standard events in your code. |
| `events-overview.md` | Learn about events in .NET and our language design goals for events in this overview. |
| `methods.md` | Overview of methods, method parameters, and method return values |
| `modern-events.md` | Learn how the .NET Core event pattern enables flexibility with backwards compatibility and how to implement safe event processing with async... |
| `versioning.md` | Understand how versioning works in C# and .NET |

### advanced-topics/expression-trees/ (9 files)

| File | Description |
|------|-------------|
| `debugging-expression-trees-in-visual-studio.md` | Learn about the DebugView property in Visual Studio. See how to use this property to analyze the structure and content of expression trees. |
| `debugview-syntax.md` | Describes the special syntax used by the DebugView property to produce a string representation of expression trees |
| `expression-classes.md` | Learn about .NET runtime types supporting expression trees, creating expression trees, and techniques for working with expression tree APIs. |
| `expression-trees-building.md` | Learn about techniques for building expression trees. |
| `expression-trees-execution.md` | Learn about executing expression trees by converting them into executable Intermediate Language (IL) instructions. |
| `expression-trees-explained.md` | Learn about expression trees and how they're useful in translating algorithms for external execution and inspecting code before executing it. |
| `expression-trees-interpreting.md` | Learn how to write code to examine the structure of an expression tree. |
| `expression-trees-translating.md` | Learn how to visit each node in an expression tree while building a modified copy of that expression tree. |
| `index.md` | Learn about expression trees. See how to compile and run code represented by these data structures, where each node is an expression. |

### advanced-topics/interface-implementation/ (3 files)

| File | Description |
|------|-------------|
| `default-interface-methods-versions.md` | This advanced tutorial explores how you can safely add new capabilities to existing interface definitions without breaking all classes and structs... |
| `mixins-with-default-interface-methods.md` | Using default interface members you can extend interfaces with optional default implementations for implementors. |
| `static-virtual-interface-members.md` | This advanced tutorial demonstrates scenarios for operators and other static members in interfaces. |

### advanced-topics/interop/ (8 files)

| File | Description |
|------|-------------|
| `example-com-class.md` | Learn how to expose a class as a COM object in C#. This example adds code in a .cs file to a project and sets the Register for COM Interop property. |
| `how-to-access-office-interop-objects.md` | Learn about C# features that simplify access to Office API objects. Use the new features to write code that creates and displays an Excel worksheet. |
| `how-to-use-indexed-properties-in-com-interop-programming.md` | Learn how indexed properties improve the way C# objects consume COM properties that have parameters. |
| `how-to-use-named-and-optional-arguments-in-office-programming.md` | Learn how to use named arguments and optional arguments to facilitate access to COM interfaces such as the Microsoft Office automation APIs. |
| `how-to-use-platform-invoke-to-play-a-wave-file.md` | This C# code example illustrates how to use platform invoke services to play a WAV sound file on the Windows operating system. |
| `index.md` | Learn about interoperability between C# and unmanaged code, including platform invoke, C++ interop, exposing COM components to C#, and exposing C#... |
| `using-type-dynamic.md` | Learn how to use the dynamic type. The dynamic type is a static type, but dynamic objects bypass static type checking. |
| `walkthrough-creating-and-using-dynamic-objects.md` | Learn how to create and use dynamic objects in this walkthrough. Create a custom dynamic object and a project that uses an 'IronPython' library. |

### advanced-topics/performance/ (3 files)

| File | Description |
|------|-------------|
| `index.md` | Performance work in .NET means removing allocations from your code. One technique is to change critical data structures from `class` to `struct`.... |
| `interpolated-string-handler.md` | This advanced tutorial shows how you can write a custom string interpolation handler that hooks into the runtime processing of an interpolated string. |
| `ref-tutorial.md` | Learn to remove allocations from your code. Make use of `struct` types for fewer allocations. Use the `ref` and `in` modifiers to avoid copies and... |

### advanced-topics/reflection-and-attributes/ (8 files)

| File | Description |
|------|-------------|
| `accessing-attributes-by-using-reflection.md` | Use reflection to get information defined with custom attributes in C# by using the GetCustomAttributes method. |
| `attribute-tutorial.md` | Learn how attributes work in C#. You define custom attributes to add metadata to your code. You read those attributes to learn about the code at... |
| `creating-custom-attributes.md` | Learn how to create custom attributes in C# by defining an attribute class that derives from the Attribute class. |
| `generics-and-attributes.md` | Learn about applying attributes to generic types. See code examples and view more available resources. |
| `generics-and-reflection.md` | Learn to use reflection to obtain information about generic types. View lists of terms and conditions for generic reflection. |
| `how-to-create-a-c-cpp-union-by-using-attributes.md` | Learn how to use attributes to customize how structs are laid out in memory in C#. This example implements the equivalent of a union from C/C++. |
| `how-to-query-assembly-metadata-with-reflection-linq.md` | Learn how to use LINQ with .NET reflection APIs in C# to retrieve specific metadata about methods that match a search criterion. |
| `index.md` | Use attributes to associate metadata or declarative information in C#. Query attributes at run time with reflection APIs that describe assemblies,... |

### advanced-topics/update-applications/ (1 files)

| File | Description |
|------|-------------|
| `nullable-migration-strategies.md` | Learn how to enable nullable reference types in an existing C# codebase. Choose a default context, address warnings progressively, and fully migrate. |

### asynchronous-programming/ (9 files)

| File | Description |
|------|-------------|
| `async-return-types.md` | Learn about the return types that async methods can have in C# with code examples for each type. |
| `async-scenarios.md` | Learn about the C# language-level asynchronous programming model provided by .NET Core and explore example code for I/O-bound and CPU-bound scenarios. |
| `cancel-an-async-task-or-a-list-of-tasks.md` | Learn how to use cancellation tokens to signal a cancellation request to a list of tasks. |
| `cancel-async-tasks-after-a-period-of-time.md` | Learn how to schedule cancellation of any associated tasks that are not completed within a period of time. |
| `generate-consume-asynchronous-stream.md` | This advanced tutorial shows how to generate and consume async streams. Async streams provide a more natural way to work with sequences of data... |
| `index.md` | Explore an overview of the C# language support for asynchronous programming by using async, await, Task, and Task<T>. |
| `start-multiple-async-tasks-and-process-them-as-they-complete.md` | Learn how to use Task.WhenAny in C# to start multiple tasks and process their results as they finish, rather than process them in the order started. |
| `task-asynchronous-programming-model.md` | Learn when and how to use Task-based async programming, a simplified approach to asynchronous programming in C#. |
| `using-async-for-file-access.md` | Learn how to use the async feature to access files in C#. You can call into asynchronous methods without using callbacks or splitting your code... |

### fundamentals/building-software/ (4 files)

| File | Description |
|------|-------------|
| `index.md` | Compare valid approaches to C# algorithms and understand how code communicates design intent to developers and coding agents. |
| `iterators.md` | Learn how C# iterator methods produce IEnumerable sequences with yield return and yield break for use with foreach. |
| `lambdas.md` | Learn how to pass behavior with C# lambda expressions, write parameter and body forms, capture variables, and choose between lambdas, method... |
| `local-functions.md` | Learn how C# local functions keep named helper logic near its caller, capture local state, and support recursion. |

### fundamentals/coding-style/ (2 files)

| File | Description |
|------|-------------|
| `coding-conventions.md` | Learn about commonly used coding conventions in C#. Coding conventions create a consistent look to the code and facilitate copying, changing, and... |
| `identifier-names.md` | Learn the rules for valid identifier names in the C# programming language. In addition, learn the common naming conventions used by the .NET... |

### fundamentals/exceptions/ (7 files)

| File | Description |
|------|-------------|
| `compiler-generated-exceptions.md` | Learn about compiler-generated exceptions. Review a list of automatically thrown exceptions and their error conditions. |
| `creating-and-throwing-exceptions.md` | Learn about creating and throwing exceptions. Exceptions are used to indicate that an error has occurred while running a program. |
| `exception-handling.md` | Learn about exception handling. See examples of try-catch, try-finally, and try-catch-finally statements. |
| `how-to-execute-cleanup-code-using-finally.md` | Learn how to execute cleanup code using a 'finally' statement. Finally statements ensure that any necessary cleanup of objects occurs immediately. |
| `how-to-handle-an-exception-using-try-catch.md` | Learn how to handle an exception using a try-catch block. See a code example and view additional available resources. |
| `index.md` | Learn about exceptions and exception handling. These C# features help deal with unexpected or exceptional situations that happen when a program is... |
| `using-exceptions.md` | Learn how to use exceptions. Exceptions are thrown by code that encounters an error and caught by code that corrects the error. |

### fundamentals/expressions/ (3 files)

| File | Description |
|------|-------------|
| `equality.md` | Learn how C# compares values and references with ==, !=, Equals, GetHashCode, and ReferenceEquals for classes, structs, records, and tuples.... |
| `index.md` | Learn how C# expressions work, how operator precedence and evaluation order determine results, how to use parentheses for clarity, and how... |
| `operators.md` | Learn how C# arithmetic, relational, equality, logical, conditional, and assignment operators work, including integer division, short-circuit... |

### fundamentals/null-safety/ (4 files)

| File | Description |
|------|-------------|
| `index.md` | Learn how C# helps you write null-safe code using nullable value types, nullable reference types, and null operators. |
| `null-operators.md` | Learn how to use the null-conditional (?. and ?[]), null-coalescing (??), null-coalescing assignment (??=), and null pattern (is null) operators... |
| `nullable-reference-types.md` | Use nullable reference types to express your intent about which variables can be null. The compiler then warns when your code might dereference null. |
| `nullable-value-types.md` | Learn how to use nullable value types (T?) in C# to represent value types that can be absent or undefined. |

### fundamentals/null-safety/common-tasks/ (1 files)

| File | Description |
|------|-------------|
| `resolve-warnings.md` | Learn the five techniques you use to address nullable warnings in C# and make your code resilient to null reference exceptions. |

### fundamentals/object-oriented/ (4 files)

| File | Description |
|------|-------------|
| `index.md` | Describes the use of classes, structures (structs), and records in C#. |
| `inheritance.md` | Inheritance in C# enables you to create new classes that reuse, extend, and modify the behavior defined in other classes. |
| `objects.md` | C# uses a class or struct definition to define types of objects. In an object-oriented language such as C#, a program consists of objects... |
| `polymorphism.md` | Learn about polymorphism, a key concept in object-oriented programming languages like C#, which describes the relationship between base and... |

### fundamentals/patterns/ (8 files)

| File | Description |
|------|-------------|
| `declaration-constant-var-patterns.md` | Learn when to use C# declaration, constant, and var patterns to test or capture the result of an expression. |
| `deconstruct.md` | Learn how C# deconstruction assigns tuple elements or object components to individual variables. |
| `discards.md` | Learn the difference between a C# discard pattern, a discard that ignores a produced value, and an unused lambda parameter. |
| `list-patterns.md` | Learn how C# list patterns describe a sequence's shape through its element count, ordered positions, matched values, and slices. |
| `pattern-matching.md` | Learn how C# patterns test the type, value, and shape of data, and how to use patterns with is expressions, switch statements, and switch expressions. |
| `property-positional-patterns.md` | Learn when to use C# property patterns to test named members and positional patterns to test ordered values. |
| `relational-logical-patterns.md` | Learn how C# relational patterns compare values and how logical and parenthesized patterns combine pattern tests. |
| `type-patterns.md` | Learn when to use a C# type pattern for a yes-or-no run-time type test without declaring a variable. |

### fundamentals/program-structure/ (6 files)

| File | Description |
|------|-------------|
| `index.md` | Learn how C# programs are structured, including the choice between file-based and project-based apps, top-level statements and Main method entry... |
| `main-command-line.md` | Learn about Main() and command-line arguments. The 'Main' method is the entry point of an executable program. |
| `namespaces.md` | Learn how to organize C# code with namespaces, file-scoped namespace declarations, global usings, static usings, and type aliases. |
| `preprocessor-directives.md` | Learn how to use the most common C# preprocessor directives—conditional compilation, regions, and warning suppression—in everyday development. |
| `program-organization.md` | Learn how to organize C# programs using solutions, projects, assemblies, namespaces, and types to build maintainable, well-structured applications. |
| `top-level-statements.md` | Learn about top-level statements. You can create programs without the ceremony of a Program class and a Main method. |

### fundamentals/statements/ (5 files)

| File | Description |
|------|-------------|
| `collections.md` | Store, update, search, and read groups of values by using arrays, lists, dictionaries, collection expressions, indexes, and ranges. |
| `index.md` | Learn how C# statements declare variables, perform actions, group code into blocks, and control the flow of execution. |
| `iteration.md` | Use foreach, while, do-while, and for to repeat a block of code, and use break and continue to control the flow of a loop. |
| `linq.md` | Query collections with LINQ by using query syntax, method syntax, common operators, and lambda expressions. |
| `selection.md` | Use if, else, and switch statements to choose which code runs based on a condition, including pattern-based case labels and when clauses. |

### fundamentals/strings/ (4 files)

| File | Description |
|------|-------------|
| `index.md` | Learn how strings work in C# — declaration, immutability, literals (regular, verbatim, raw, interpolated), UTF-8 literals, and indexing. |
| `interpolation.md` | Learn how to build result strings in C# with string interpolation by embedding formatted expression results directly in a string literal. |
| `nameof.md` | Use the nameof operator to capture an identifier as a compile-time string for argument validation, change notifications, attributes, and logging. |
| `raw-string-literals.md` | Use raw string literals to write strings that contain quotes, backslashes, or multiple lines without escape sequences. |

### fundamentals/strings/common-tasks/ (5 files)

| File | Description |
|------|-------------|
| `compare.md` | Learn how to compare strings in C# for equality and sort order, how ordinal and culture-aware comparisons differ, and how to choose a... |
| `concatenate.md` | Learn how to combine strings in C# with the + operator, string interpolation, string.Concat, string.Join, and StringBuilder, and how to choose... |
| `modify.md` | Learn how to produce modified strings in C# with Replace, Trim, Remove, regular expressions, and character arrays, and why each operation returns... |
| `search.md` | Learn how to find text within strings in C# with the Contains, StartsWith, EndsWith, IndexOf, and LastIndexOf methods, and how to choose the right... |
| `split.md` | Learn how to split a C# string into substrings with String.Split, including how to use multiple separators, limit the substring count, and trim or... |

### fundamentals/tutorials/ (15 files)

| File | Description |
|------|-------------|
| `build-algorithms-using-pattern-matching.md` | This advanced tutorial demonstrates how to use pattern matching techniques to create functionality using data and algorithms that are created... |
| `choosing-types.md` | Learn when to use tuples, record classes, record structs, classes, and interfaces in C# by building a coffee shop example that highlights each... |
| `classes.md` | Create your first C# program and explore object oriented concepts |
| `file-based-programs.md` | File-based apps are command line utilities that are built and execute without a project file. The build and run commands are implicit. New syntax... |
| `functional-techniques.md` | Build a runnable badge-label generator that combines lambdas, LINQ, iterators, pattern matching, and local functions in one C# program. |
| `how-to-display-command-line-arguments.md` | Learn how to display command-line arguments. See a code example and view additional available resources. |
| `inheritance.md` | Learn to use inheritance in C# libraries and applications. |
| `nullable-reference-types.md` | Build a small survey app that uses nullable and non-nullable reference types to declare which references can be null and have the compiler enforce... |
| `oop.md` | C# provides full support for object-oriented programming including abstraction, encapsulation, inheritance, and polymorphism. |
| `pattern-matching-basics.md` | Build a canal-lock simulation that uses pattern matching to model safe object behavior. |
| `records.md` | Build a small app that models temperature data with records, compares record behavior, and uses with expressions for nondestructive mutation. |
| `safely-cast-using-pattern-matching-is-and-as-operators.md` | Learn to use pattern matching techniques to safely cast variables to a different type. You can use pattern matching as well as the is and as... |
| `string-interpolation.md` | Build a small report in C# with string interpolation to format and align expression results in a result string. |
| `system-command-line.md` | Learn how to use the System.CommandLine library to build a command-line app with commands, subcommands, options, and arguments in a file-based C#... |
| `xml-documentation.md` | Learn to add `///` comments that generate XML documentation directly from your source code. Learn which tags are available and how to add... |

### fundamentals/types/ (11 files)

| File | Description |
|------|-------------|
| `built-in-types.md` | Learn about the built-in types in C#, including numeric types, bool, char, and string. Explore literal syntax, default expressions, var,... |
| `classes.md` | Learn how to define and use classes in C#, including reference type semantics, constructors, static classes, object initializers, collection... |
| `conversions.md` | Learn how to convert between C# types by using implicit and explicit conversions, safe casting patterns, boxing and unboxing, and Parse and... |
| `delegates-lambdas.md` | Learn what lambda expressions are in C#, how delegates work as the type system support for lambda expressions, how to use the built-in Func and... |
| `enums.md` | Learn how to define and use enumeration types in C#, including declaring enums, using them in switch expressions, working with bit flags, and... |
| `generics.md` | Learn how to use generic types and methods in C#, including consuming common generic collections, type inference, constraints, collection... |
| `index.md` | Learn about the C# type system, including value types, reference types, the common type system, and how to choose the right type construct for... |
| `interfaces.md` | Learn how to declare and implement interfaces in C#, use implicit and explicit implementation, and choose between interfaces and abstract classes. |
| `records.md` | Learn how the record modifier enhances classes and structs with compiler-generated value equality, ToString, with expressions, and positional syntax. |
| `structs.md` | Learn how to define and use structs in C#, including value semantics, parameterless constructors, auto-default behavior, readonly members, and... |
| `tuples.md` | Learn how to use tuples to group related values, deconstruct tuples into separate variables, compare tuples for equality, and choose tuples over... |

### how-to/ (2 files)

| File | Description |
|------|-------------|
| `how-to-catch-a-non-cls-exception.md` | Learn how to catch a non-CLS exception. See a code example and view additional available resources. |
| `index.md` | A collection of quick tips and short, focused code samples |

### language-reference/ (4 files)

| File | Description |
|------|-------------|
| `configure-language-version.md` | Learn how to override the default C# language version manually. The C# compiler can support any language version up to the version in the... |
| `language-versioning.md` | Learn about how the C# language version is determined based on your project and the reasons behind that choice. |
| `preprocessor-directives.md` | Learn the different C# preprocessor directives that control conditional compilation, warnings, nullable analysis, and more |
| `unsafe-code.md` | Learn about unsafe code, pointers, and function pointers. C# uses an unsafe context for operations that access unmanaged memory or invoke function... |

### language-reference/attributes/ (5 files)

| File | Description |
|------|-------------|
| `caller-information.md` | These attributes instruct the compiler to generate information about the code that calls a member. You use the CallerFilePath, CallerLineNumber,... |
| `general.md` | Learn about attributes that affect code generated by the compiler: the Conditional, Obsolete, AttributeUsage, ModuleInitializer, and... |
| `global.md` | Attributes provide metadata the compiler uses to understand more semantics of your program |
| `nullable-analysis.md` | Learn about attributes interpreted by the compiler to provide better static analysis for nullable and non-nullable reference types. |
| `pseudo-attributes.md` | Learn about attributes you can add to code that are written to IL as modifiers. These custom attributes aren't emitted as attributes in the... |

### language-reference/builtin-types/ (22 files)

| File | Description |
|------|-------------|
| `arrays.md` | Store multiple variables of the same type in an array data structure in C#. Declare an array by specifying a type or specify Object to store any type. |
| `bool.md` | Learn about the built-in boolean type in C# |
| `built-in-types.md` | Learn C# built-in value and reference types |
| `char.md` | Learn about the built-in character type in C# |
| `collections.md` | Learn about collections in C#, which are used to work with groups of objects. Collections have different characteristics regarding adding and... |
| `default-values.md` | Learn the default values of C# types such as bool, char, int, float, double, and more. |
| `enum.md` | Learn about C# enumeration types that represent a choice or a combination of choices |
| `floating-point-numeric-types.md` | Learn about the built-in C# floating-point types: float, double, and decimal |
| `integral-numeric-types.md` | Learn the range, storage size, and uses for each of the integral numeric types. |
| `nullable-reference-types.md` | Learn about C# nullable reference types and how to use them |
| `nullable-value-types.md` | Learn about C# nullable value types and how to use them |
| `numeric-conversions.md` | Learn about the implicit and explicit conversions between the built-in numeric types in C# |
| `record.md` | Learn about the record modifier for class and struct types in C#. Records provide standard support for value based equality on instances of record... |
| `ref-struct.md` | Learn about the ref struct type in C# |
| `reference-types.md` | Learn about reference types that have C# keywords you can use to declare them. |
| `string-operations.md` | Learn how to apply regular-expression patterns to strings, search strings with ReadOnlySpan<char>, and pick the right StringComparison for... |
| `struct.md` | Structure types (struct) give C# lightweight, data-centric value types. See how value semantics, copying, and boxing work, and when to choose a... |
| `union.md` | Learn about union types in C#. Unions express values from a closed set of types with exhaustive pattern matching support. |
| `unmanaged-types.md` | Learn about unmanaged types in C# |
| `value-tuples.md` | C# tuples: lightweight data structures that you can use to group loosely related data elements. Tuples introduce a type that contains multiple... |
| `value-types.md` | Value types vs reference types, kinds of value types, and the built-in value types in C# |
| `void.md` | Learn more about void keyword in C# |

### language-reference/compiler-messages/ (158 files)

| File | Description |
|------|-------------|
| `array-declaration-errors.md` | These compiler errors and warnings indicate errors in array declarations, collection initializers and expressions, and stack allocation expressions. |
| `assembly-references.md` | These compiler errors and warnings indicate incorrect or missing assembly references. These errors cause missing or incorrect definitions for... |
| `assembly-signing-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to assembly signing configuration |
| `async-await-errors.md` | These compiler errors and warnings indicate errors in the syntax for declaring and implementing `async` methods that use the `await` expression. |
| `attribute-usage-errors.md` | These compiler errors and warnings indicate errors in attribute declarations, or attribute use in your code. |
| `constructor-errors.md` | These compiler errors and warnings indicate violations in constructor declarations in classes and structs, record constructor scenarios, and... |
| `cs0001.md` | Compiler Error CS0001 |
| `cs0015.md` | Compiler Error CS0015 |
| `cs0019.md` | Compiler Error CS0019 |
| `cs0029.md` | Compiler Error CS0029 |
| `cs0038.md` | Compiler Error CS0038 |
| `cs0039.md` | Compiler Error CS0039 |
| `cs0050.md` | Compiler Error CS0050 |
| `cs0051.md` | Compiler Error CS0051 |
| `cs0052.md` | Compiler Error CS0052 |
| `cs0103.md` | Compiler Error CS0103 |
| `cs0108.md` | Compiler Warning (level 2) CS0108 |
| `cs0115.md` | Compiler Error CS0115 |
| `cs0120.md` | Compiler Error CS0120 |
| `cs0122.md` | Compiler Error CS0122 |
| `cs0134.md` | Compiler Error CS0134 |
| `cs0151.md` | Compiler Error CS0151 |
| `cs0165.md` | Compiler Error CS0165 |
| `cs0173.md` | Compiler Error CS0173 |
| `cs0201.md` | Compiler Error CS0201 |
| `cs0229.md` | Compiler Error CS0229 |
| `cs0266.md` | Compiler Error CS0266 |
| `cs0269.md` | Compiler Error CS0269 |
| `cs0420.md` | Compiler Warning (level 1) CS0420 |
| `cs0429.md` | Compiler Warning (level 4) CS0429 |
| `cs0433.md` | Compiler Error CS0433 |
| `cs0445.md` | Compiler Error CS0445 |
| `cs0465.md` | Compiler Warning (level 1) CS0465 |
| `cs0504.md` | Compiler Error CS0504 |
| `cs0507.md` | Compiler Error CS0507 |
| `cs0523.md` | Compiler Error CS0523 |
| `cs0570.md` | Compiler Error CS0570 |
| `cs0618.md` | Compiler Warning (level 2) CS0618 |
| `cs0675.md` | Compiler Warning (level 3) CS0675 |
| `cs0731.md` | Compiler Error CS0731 |
| `cs1001.md` | Compiler Error CS1001 |
| `cs1026.md` | Compiler Error CS1026 |
| `cs1058.md` | Compiler Warning (level 1) CS1058 |
| `cs1060.md` | Compiler Warning (level 1) CS1060 |
| `cs1061.md` | Compiler Error CS1061 |
| `cs1519.md` | Compiler Error CS1519 |
| `cs1540.md` | Compiler Error CS1540 |
| `cs1548.md` | Compiler Error CS1548 |
| `cs1567.md` | Compiler Error CS1567 |
| `cs1591.md` | Compiler Warning (level 4) CS1591 |
| `cs1598.md` | Compiler Warning (level 1) CS1598 |
| `cs1607.md` | Compiler Warning (level 1) CS1607 |
| `cs1610.md` | Compiler Warning (level 4) CS1610 |
| `cs1612.md` | Compiler Error CS1612 |
| `cs1644.md` | Compiler Error CS1644 |
| `cs1658.md` | Compiler Warning (level 1) CS1658 |
| `cs1685.md` | Compiler Warning (level 1) CS1685 |
| `cs1690.md` | Compiler Warning (level 1) CS1690 |
| `cs1699.md` | Compiler Warning (level 1) CS1699 |
| `cs1701.md` | Compiler Warning (level 2) CS1701 |
| `cs1703.md` | Compiler Error CS1703 |
| `cs1705.md` | Compiler Error CS1705 |
| `cs1721.md` | Compiler Error CS1721 |
| `cs1729.md` | Compiler Error CS1729 |
| `cs1736.md` | Compiler Error CS1736 |
| `cs1737.md` | Compiler Error CS1737 |
| `cs1750.md` | Compiler Error CS1750 |
| `cs1762.md` | Compiler Warning (level 1) CS1762 |
| `cs1926.md` | Compiler Error CS1926 |
| `cs1933.md` | Compiler Error CS1933 |
| `cs1936.md` | Compiler Error CS1936 |
| `cs1941.md` | Compiler Error CS1941 |
| `cs1942.md` | Compiler Error CS1942 |
| `cs1943.md` | Compiler Error CS1943 |
| `cs1956.md` | Compiler Warning (level 1) CS1956 |
| `cs3003.md` | Compiler Warning (level 1) CS3003 |
| `cs3009.md` | Compiler Warning (level 1) CS3009 |
| `cs7003.md` | Compiler Error CS7003 |
| `cs7034.md` | Compiler Error CS7034 |
| `cs7035.md` | Compiler Warning (level 4) CS7035 |
| `cs8092.md` | Compiler Error CS8092 |
| `cs8146.md` | Compiler Error CS8146 |
| `cs8147.md` | Compiler Error CS8147 |
| `cs8148.md` | Compiler Error CS8148 |
| `cs8149.md` | Compiler Error CS8149 |
| `cs8150.md` | Compiler Error CS8150 |
| `cs8151.md` | Compiler Error CS8151 |
| `cs8152.md` | Compiler Error CS8152 |
| `cs8156.md` | Compiler Error CS8156 |
| `cs8157.md` | Compiler Error CS8157 |
| `cs8158.md` | Compiler Error CS8158 |
| `cs8159.md` | Compiler Error CS8159 |
| `cs8160.md` | Compiler Error CS8160 |
| `cs8161.md` | Compiler Error CS8161 |
| `cs8162.md` | Compiler Error CS8162 |
| `cs8163.md` | Compiler Error CS8163 |
| `cs8170.md` | Compiler Error CS8170 |
| `cs8171.md` | Compiler Error CS8171 |
| `cs8172.md` | Compiler Error CS8172 |
| `cs8173.md` | Compiler Error CS8173 |
| `cs8174.md` | Compiler Error CS8174 |
| `cs8333.md` | Compiler Error CS8333 |
| `cs8334.md` | Compiler Error CS8334 |
| `cs8347.md` | Compiler Error CS8347 |
| `cs8352.md` | Compiler Error CS8352 |
| `cs8354.md` | Compiler Error CS8354 |
| `cs8355.md` | Compiler Error CS8355 |
| `cs9043.md` | Compiler Error CS9043 |
| `deconstruction-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to deconstruction, discards, and out variables |
| `delegate-function-pointer-diagnostics.md` | This article helps you diagnose and correct compiler errors and warnings related to delegate and function pointer declarations and uses |
| `dynamic-type-and-binding-errors.md` | These errors indicate an incorrect use of the `dynamic` type or an expression with runtime (or dynamic) binding. Learn about the errors and how to... |
| `entry-point-errors.md` | These compiler errors and warnings indicate problems with the program entry point, including the Main method declaration, the StartupObject... |
| `expression-form-restrictions.md` | This article helps you diagnose and correct C# compiler errors and warnings from expressions that appear in contexts where they are not permitted |
| `expression-tree-restrictions.md` | These compiler errors and warnings indicate that an expression would include an expression that isn't allowed in an expression tree. You need to... |
| `extension-declarations.md` | These errors and warnings indicate that you need to modify the declaration of an extension method using the `this` modifier on the first... |
| `feature-version-errors.md` | Several compiler errors indicate that your configured language version doesn't support a feature you're using. This article shows how to fix those... |
| `file-local-types.md` | Learn how to diagnose and correct C# compiler errors and warnings when you declare file local types, or write source generators that create file... |
| `foreach-diagnostics.md` | This article helps you diagnose and correct compiler errors and warnings related to async enumerables, enumerables, and foreach statements |
| `friend-assembly-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to friend assembly identity and public keys |
| `generic-type-parameters-errors.md` | These compiler errors and warnings indicate errors in generic type parameters and type arguments. |
| `index.md` | C# Compiler Errors |
| `indexer-access-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to indexer and element access |
| `inline-array-errors.md` | These compiler errors and warnings are generated when you create an inline array struct that is invalid. This article helps you diagnose and fix... |
| `interface-implementation-errors.md` | These compiler errors and warnings indicate errors in declaring methods that implement an interface member. |
| `invalid-build-command-line.md` | This article helps you diagnose and correct compiler errors and warnings related to compiler options, Roslyn API options, build configuration, and... |
| `iterator-yield.md` | Use this article to diagnose and correct compiler errors and warnings when you write iterator methods that use `yield return` to enumerate a... |
| `jump-statement-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to the break, continue, goto, and return jump statements. |
| `lambda-expression-errors.md` | This article helps you diagnose and correct compiler errors and warnings for lambda expression declarations and usage. |
| `local-function-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to local functions |
| `lock-semantics.md` | This article helps you diagnose and correct compiler errors and warnings when you use the `lock` statement. |
| `nameof-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to nameof expressions |
| `new-object-creation-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to `new` expressions and object creation expressions |
| `nullable-warnings.md` | Several compiler warnings indicate code that isn't null-safe. Learn how to address those warnings by making your code more resilient. |
| `overload-resolution.md` | Compiler errors and warnings that indicate a problem in your code related to overload resolution. Learn causes and fixes for these errors. |
| `overloaded-operator-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to user-defined operator declarations, checked operators, and... |
| `parameter-argument-mismatch.md` | These errors and warnings are issued when arguments are missing or arguments can't be used for one or more parameters on a method. Learn how to... |
| `params-arrays.md` | This article helps you diagnose and correct compiler errors and warnings when you use the `params` modifier on method parameters. |
| `parsing-errors.md` | This article helps you diagnose and correct compiler errors related to parsing C# code |
| `partial-declarations.md` | Use this article to diagnose and correct compiler errors and warnings when you write `partial` types and `partial` members. |
| `pattern-matching-warnings.md` | There are several pattern matching warnings. Learn how to address these warnings. |
| `preprocessor-errors.md` | Learn how to diagnose and fix errors related to preprocessor tokens how they're used in C# source files. |
| `property-declaration-errors.md` | Use this article to diagnose and correct compiler errors and warnings when you define properties in your types. |
| `readonly-struct-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to readonly structs and members |
| `record-declaration-errors.md` | Learn how to diagnose and correct C# compiler errors and warnings when you declare record types, either record struct types or record class types. |
| `ref-modifiers-errors.md` | The compiler issues these errors and warnings when you use the reference parameter modifiers incorrectly. They indicate a mismatch between the... |
| `ref-safety-errors.md` | The compiler issues these errors and warnings when the referent of a reference variable might not be valid. These errors prevent you from creating... |
| `ref-struct-errors.md` | Learn about errors and warnings related to `ref struct` types. The compiler enforces several restrictions on `ref struct` types to enforce ref... |
| `source-generator-errors.md` | You might see these errors and warnings when code is compiled with source generators and interceptors. They indicate some condition where the... |
| `static-abstract-interfaces.md` | These warnings and errors are generated when static abstract or virtual members are used incorrectly. Learn how to correct these errors. |
| `string-interpolations.md` | Learn how to diagnose and correct C# compiler errors and warnings when you use string interpolation expressions, where expressions are substituted... |
| `string-literal.md` | Learn how to diagnose and correct C# compiler errors and warnings when you declare string literals, including basic strings, raw strings, and... |
| `throwing-and-catching-exceptions.md` | Learn about C# compiler errors and warnings related to throwing and catching exceptions. |
| `tuple-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to tuple declarations, element names, metadata, conversions,... |
| `union-declaration-errors.md` | This article helps you diagnose and correct compiler errors and warnings related to union type and closed hierarchy declarations. |
| `unsafe-code-errors.md` | These compiler errors and warnings indicate errors when you work with `unsafe` code. Unsafe code must be enabled with the `unsafe` keyword. Unsafe... |
| `using-directive-errors.md` | These errors and warnings indicate problems with using directives, compilation-unit declarations, and namespace declarations. This information... |
| `using-statement-declaration-errors.md` | These errors indicate an incorrect use of the `using` statement or `using` declarations. Learn about the errors and how to fix them. |
| `warning-waves.md` | C# warning waves are optional warnings that can be reported on code where previously a warning isn't reported. They represent practices that could... |

### language-reference/compiler-options/ (10 files)

| File | Description |
|------|-------------|
| `advanced.md` | Advanced C# Compiler Options. These options are used in advanced scenarios. |
| `code-generation.md` | C# Compiler Options to control code generation. The options affect the code generated by the compiler for a given compilation. |
| `errors-warnings.md` | C# Compiler Options for errors and warnings. These options suppress or enable warnings, and control warnings as errors. |
| `index.md` | C# Compiler Options. Learn the options that control the behavior of the C# compiler. |
| `inputs.md` | C# Compiler Options to control input files for compilation. These options specify how the compiler reads metadata from dependent assemblies and... |
| `language.md` | C# Compiler Options for language feature rules. These options control how the compiler interprets certain language constructs. |
| `miscellaneous.md` | Miscellaneous C# Compiler Options. These options provide general options to the compiler. |
| `output.md` | C# Compiler Options that control compiler output. These options control the assembly generation from a compilation. |
| `resources.md` | C# Compiler Options to control Windows resources embedded in a dotnet application. |
| `security.md` | C# Compiler Options for security. These options control signing assemblies or address space layout. |

### language-reference/keywords/ (75 files)

| File | Description |
|------|-------------|
| `abstract.md` | abstract - C# Reference |
| `access-modifiers.md` | Access Modifiers - C# Reference |
| `accessibility-domain.md` | Accessibility Domain - C# Reference |
| `accessibility-levels.md` | Accessibility Levels - C# Reference |
| `add.md` | The `add` contextual keyword declares an event accessor that adds a handler to that event. |
| `ascending.md` | ascending - C# Reference |
| `async.md` | async - C# Reference |
| `base.md` | Learn about the base keyword, which is used to access members of the base class from within a derived class in C#. |
| `by.md` | by contextual keyword - C# Reference |
| `class.md` | class keyword - C# Reference |
| `closed.md` | Learn about the closed class modifier in C#. A closed class restricts derivation to its declaring assembly so consumers can write exhaustive... |
| `const.md` | Declare compile time constants with the `const` keyword |
| `default.md` | default - C# reference |
| `descending.md` | descending contextual keyword - C# Reference |
| `equals.md` | equals contextual keyword - C# Reference |
| `event.md` | Learn how to declare events with the `event` keyword - C# Reference |
| `extension.md` | Learn the syntax to declare extension members in C#. Extension members enable you to add functionality to types and interfaces in those instances... |
| `extern-alias.md` | extern alias - C# Reference |
| `extern.md` | extern modifier - C# Reference |
| `field.md` | The `field` contextual keyword - access the compiler synthesized backing field for a property |
| `file.md` | The file modifier: Declare types whose visibility is the containing file |
| `from-clause.md` | from clause - C# Reference |
| `get.md` | The C# get keyword declares a get accessor in a property or indexer. It defines the code to retrieve the value of the property or indexed property. |
| `group-clause.md` | group clause - C# Reference |
| `in-generic-modifier.md` | in (Generic Modifier) - C# Reference |
| `in.md` | in - C# Reference |
| `index.md` | C# Keywords: Find the reference material for the predefined keywords and contextual keywords defined in the C# language. |
| `init.md` | The `init` keyword is used to declare a `set` accessor that can only be called during an object's initialization: either by a constructor or as... |
| `interface.md` | Use the `interface` keyword to define contracts that any implementing type must support. Interfaces provide the means to create common behavior... |
| `internal.md` | internal - C# Reference |
| `into.md` | into - C# Reference |
| `join-clause.md` | join clause - C# Reference |
| `let-clause.md` | let clause - C# Reference |
| `method-parameters.md` | Parameter modifiers enable pass-by-reference semantics, with distinctions for read-only, and `out` parameters. The `params` modifier allows... |
| `namespace.md` | Organize related types and functionality using the namespace keyword - C# Reference |
| `new-constraint.md` | new constraint - C# Reference |
| `new-modifier.md` | new modifier - C# Reference |
| `new.md` | new - C# Reference |
| `null.md` | null keyword - C# Reference |
| `on.md` | on keyword - C# Reference |
| `orderby-clause.md` | orderby clause - C# Reference |
| `out-generic-modifier.md` | out keyword (generic modifier) - C# Reference |
| `out.md` | out keyword - C# Reference |
| `override.md` | override modifier - C# Reference |
| `partial-member.md` | Partial members are members that can be declared in one partial type declaration and defined in a separate partial type declaration. |
| `partial-type.md` | A partial type is a type declaration that allows you to split the declaration of the type into multiple files. |
| `private-protected.md` | private protected - C# Reference |
| `private.md` | private keyword - C# Reference |
| `protected-internal.md` | protected internal - C# Reference |
| `protected.md` | protected keyword - C# Reference |
| `public.md` | public keyword - C# Reference |
| `query-keywords.md` | Query keywords - C# Reference |
| `readonly.md` | readonly keyword - C# Reference |
| `ref.md` | Understand the different uses for the `ref` keyword and get more information on those uses |
| `reference-types.md` | Reference types - C# Reference |
| `remove.md` | The `remove` contextual keyword declares an event accessor that removes a handler from that event. - C# Reference |
| `required.md` | required modifier - C# Reference |
| `restrictions-on-using-accessibility-levels.md` | Restrictions on using accessibility levels - C# Reference |
| `safe.md` | safe modifier - C# Reference |
| `sealed.md` | sealed modifier - C# Reference |
| `select-clause.md` | select clause - C# Reference |
| `set.md` | The C# set keyword declares a set accessor in a property or indexer. It defines the code to set the value of the property or indexed property. |
| `statement-keywords.md` | Statement keywords - C# Reference |
| `static.md` | static modifier - C# Reference |
| `this.md` | The `this` keyword clarifies access to the current instance of a type, or declares an indexer on the type. |
| `unsafe.md` | unsafe keyword - C# Reference |
| `using-directive.md` | The `using` directive imports types from a namespace, or creates an alias for a given type. Using directives enable you to use simple names for... |
| `using.md` | using keyword - C# reference |
| `value.md` | The token `value` is an implicit parameter to the `set` accessor for indexers or properties. It represents the parameter to the set accessor. |
| `virtual.md` | virtual - C# Reference |
| `volatile.md` | volatile - C# Reference |
| `when.md` | when contextual keyword - C# reference |
| `where-clause.md` | where clause - C# Reference |
| `where-generic-type-constraint.md` | where (generic type constraint) - C# Reference |
| `with.md` | with - C# Reference |

### language-reference/operators/ (34 files)

| File | Description |
|------|-------------|
| `addition-operator.md` | The C# addition operators (`+`, and `+=`) work with operands of numeric, string, or delegate types. |
| `arithmetic-operators.md` | Learn about C# operators that perform multiplication, division, remainder, addition, and subtraction operations with numeric types. |
| `assignment-operator.md` | C# Assignment sets the value of the expression. Alternatively, `ref` assignment sets the reference of a reference variable. |
| `await.md` | The C# `await` operator asynchronously suspends evaluation of the enclosing `async` method. |
| `bitwise-and-shift-operators.md` | Learn about C# operators that perform bitwise logical (AND - `&`, NOT - `~`, OR - `\|`, XOR - `^`) or shift operations(`<<`, and `>>`) with... |
| `boolean-logical-operators.md` | C# logical operators perform logical negation (`!`), conjunction (AND - `&`, `&&`), and inclusive and exclusive disjunction (OR - `\|`, `\|\|`,... |
| `collection-expressions.md` | Collection expressions convert to many collection types. You can write literal values, expressions, or other collections to create a new collection. |
| `comparison-operators.md` | C# comparison operators check the order of values. The operators `>`, `<`, `>=`, `<=` compare the order of values. They determine if a value is... |
| `conditional-operator.md` | Learn about the C# ternary conditional operator, (`?:`), that returns the result of one of the two expressions based on a Boolean expression's result. |
| `deconstruction.md` | Learn about deconstruction expressions: expressions that extract individual properties or fields from a tuple or user defined type into discrete... |
| `default.md` | Use the default value expressions to obtain the default, uninitialized value of a type. The default value expression can be used with generic type... |
| `delegate-operator.md` | The C# delegate operator that is used to create anonymous methods. These types can be used for `Func<>` and `Action<>` parameters in many .NET APIs. |
| `equality-operators.md` | C# equality operators test if two objects are equal or not equal. You can define equality operators for your types for custom comparisons for... |
| `index.md` | Learn the C# operators and expressions, operator precedence, and operator associativity. |
| `is.md` | Learn about the C# `is` operator that matches an expression against a pattern. The `is` operator returns true when the expression matches the pattern. |
| `lambda-expressions.md` | C# lambda expressions that are used to create anonymous functions and expression bodied members. |
| `lambda-operator.md` | The C# => operator defines lambda expressions and expression bodied members. Lambda expressions define a block of code used as data. |
| `member-access-operators.md` | C# operators that you use to access type members or null-conditionally access type members. These operators include the dot operator - `.`,... |
| `nameof.md` | The C# `nameof` expression produces the name of its operand. You use it whenever you need to use the name of a symbol as text |
| `namespace-alias-qualifier.md` | The C# namespace alias qualifier `::` is used to access a member of an aliased namespace. The `::` operator is often used with the `global` alias,... |
| `new-operator.md` | The C# new operator is used to create a optionally initialize a new instance of a type. |
| `null-coalescing-operator.md` | The `??` and `??=` operators are the C# null-coalescing operators. They return the value of the left-hand operand if it isn't null. Otherwise,... |
| `null-forgiving.md` | Learn about the C# null-forgiving, or null-suppression, operator that is used to declare that an expression of a reference type isn't null. |
| `operator-overloading.md` | Learn how to overload a C# operator and which C# operators are overloadable. In general, the unary, arithmetic, equality, and comparison operators... |
| `patterns.md` | Learn about the patterns supported by the `is` and `switch` expressions. Combine multiple patterns using the `and`, `or`, and `not` operators. |
| `pointer-related-operators.md` | Learn about C# operators that you can use when working with pointers. You use these operators to access memory, index memory locations and... |
| `sizeof.md` | Learn about the C# `sizeof` operator that returns the memory amount occupied by a variable of a given type. |
| `stackalloc.md` | The C# stackalloc expression allocates a block of memory on the stack. Stackalloc memory is automatically discarded when that method returns. |
| `subtraction-operator.md` | Learn about the C# subtraction (minus) operator and how it works with operands of numeric or delegate types. |
| `switch-expression.md` | Learn about the C# `switch` expression that provides switch-like semantics based on pattern matching. You can compute a value based on which... |
| `true-false-operators.md` | Learn about the C# `true` and `false` operators. Overload these operators to treat your type as a Boolean value |
| `type-testing-and-cast.md` | The `is` and `as` operators test the type of an object. The `typeof` keyword returns the type of a variable. Casts try to convert an object to a... |
| `user-defined-conversion-operators.md` | Learn how to define custom implicit and explicit type conversions in C#. The operators provide the functionality for casting an object to a new type. |
| `with-expression.md` | Learn about a with expression that performs nondestructive mutation of C# records and structures. The `with` keyword provides the means to modify... |

### language-reference/statements/ (10 files)

| File | Description |
|------|-------------|
| `checked-and-unchecked.md` | Control the overflow-checking context. In a checked context, overflow causes an exception to be thrown. In an unchecked context, the result is... |
| `declarations.md` | Declaration statements introduce a new local variable, local constant, or local reference variable (ref local). Local variables can be explicitly... |
| `exception-handling-statements.md` | Use the C# throw statement to signal an occurrence of an exception. Use the C# try statements to catch and process exceptions occurred in a block... |
| `fixed.md` | Use the C# `fixed` statement to pin a moveable variable and declare a pointer to that variable. The address of a pinned variable doesn't change... |
| `iteration-statements.md` | C# iteration statements (for, foreach, do, and while) repeatedly execute a block of code. You use those statements to create loops or iterate... |
| `jump-statements.md` | C# jump statements (break, continue, return, and goto) unconditionally transfer control from the current location to a different statement. |
| `lock.md` | Use the C# lock statement to ensure that only a single thread exclusively reads or writes a shared resource, blocking all other threads until it... |
| `selection-statements.md` | The `if` and `switch` statements provide branching logic in C#. You use `if, `else` and `switch` to choose the path your program follows. |
| `using.md` | Use the C# using statement or declaration to ensure the correct use of disposable objects |
| `yield.md` | Use the yield statement in iterators to provide the next value or signal the end of an iteration |

### language-reference/tokens/ (6 files)

| File | Description |
|------|-------------|
| `comments.md` | You use \"//\" for single-line comments. You use \"/*\" to start multi-line comments that end with \"*/\". You add comments to explain your code. |
| `discard.md` | A `_` is a discard, a placeholder for an unused variable in an expression |
| `index.md` | Special Characters - C# Reference |
| `interpolated.md` | String interpolation using the `$` token provides a more readable and convenient syntax to format string output than traditional string composite... |
| `raw-string.md` | Raw string literals can contain any arbitrary text without the need for special escape sequences. You begin and end a raw string literal with a... |
| `verbatim.md` | Verbatim text using the `@` enables C# keywords to be used as identifiers, or indicates that a string literal should be interpreted verbatim, or... |

### language-reference/xmldoc/ (3 files)

| File | Description |
|------|-------------|
| `examples.md` | See documentation examples on many different C# language elements. Learn which tags to use in different situations and for different language... |
| `index.md` | Learn about documentation comments. You can create documentation for your code by including XML elements in special comment fields. You can use... |
| `recommended-tags.md` | This article provides the syntax and definitions for recommended tags on types, and their members for XML documentation. |

### linq/ (6 files)

| File | Description |
|------|-------------|
| `how-to-build-dynamic-queries.md` | Learn to query dynamically depending on run-time state, by varying either LINQ method calls or the expression trees passed into those methods. |
| `how-to-extend-linq.md` | Learn techniques to extend the standard LINQ methods. Query based on runtime state, modify query objects, and extend LINQ capabilities. |
| `how-to-query-collections.md` | This series of examples shows you Language Integrated Query (LINQ) techniques to use with collections and arrays. |
| `how-to-query-files-and-directories.md` | Use Language Integrated Query (LINQ) for file system operations that don't to change the contents of the files or folders. |
| `how-to-query-strings.md` | You can query a string as a sequence of characters in LINQ. This article contains several examples you can use or modify to suit your needs. |
| `index.md` | Introduces Language Integrated Query (LINQ) in C#. |

### linq/get-started/ (6 files)

| File | Description |
|------|-------------|
| `features-that-support-linq.md` | Learn about C# features to use with LINQ queries and in other contexts. |
| `introduction-to-linq-queries.md` | LINQ offers a consistent model for queries on data across various kinds of data sources and formats. In a LINQ query, you're always working with... |
| `query-expression-basics.md` | Introduces concepts related to query expressions |
| `type-relationships-in-linq-query-operations.md` | Learn how types of variables in a LINQ query relate to each other. LINQ query operations are strongly typed in the data source, in the query, and... |
| `walkthrough-writing-queries-linq.md` | This walkthrough shows how C# language features are used in LINQ query expressions. |
| `write-linq-queries.md` | Learn how to write LINQ queries in C#. |

### linq/standard-query-operators/ (10 files)

| File | Description |
|------|-------------|
| `converting-data-types.md` | Conversion methods change the type of input objects. See conversion operations in LINQ queries in C#, such as Enumerable.AsEnumerable and... |
| `filtering-data.md` | Filtering, also known as selection, restricts results based on a condition. Learn about the standard query operator methods in LINQ in C# that... |
| `grouping-data.md` | Grouping puts data into groups of elements that share an attribute. Learn about the standard query operator methods in LINQ in C# that group data... |
| `index.md` | The LINQ standard query operators provide query capabilities including filtering, projection, aggregation, and sorting in C#. |
| `join-operations.md` | A join of two data sources associates objects with objects that share an attribute across data sources. Learn about join methods in the LINQ... |
| `partitioning-data.md` | Learn how to partition data in LINQ. View an illustration showing the results of partitioning operations. |
| `projection-operations.md` | Learn about projection operations. These operations transform an object into a new form that often consists only of properties used later. |
| `quantifier-operations.md` | Learn about quantifier operations in LINQ. These methods, `All`, `Any`, and `Contains`, return a Boolean value indicating whether some or all... |
| `set-operations.md` | Learn about set operations and the standard query operator methods that perform set operations in LINQ in C#. |
| `sorting-data.md` | Learn about sort operations and the standard query operator methods that perform sort operations in LINQ in C#. |

### programming-guide/classes-and-structs/ (39 files)

| File | Description |
|------|-------------|
| `abstract-and-sealed-classes-and-class-members.md` | The abstract keyword in C# creates incomplete classes and class members. The sealed keyword prevents inheritance of previously virtual classes or... |
| `access-modifiers.md` | All types and type members in C# have an accessibility level that controls whether they can be used from other code. Review this list of access... |
| `anonymous-types.md` | Learn about C# anonymous types, which provide a way to create objects with read-only properties without defining a named type first. |
| `auto-implemented-properties.md` | For an automatically implemented property in C#, the compiler creates a private, anonymous backing field accessed only through get and set... |
| `constants.md` | Constants in C# are compile-time literal values, which do not change once the program is compiled. Only C# built-in types can be constants. |
| `constructors.md` | A constructor in C# is called when a class or struct is created. Use constructors to set defaults, limit instantiation, and write flexible,... |
| `extension-methods.md` | Extension members in C# enable you to add methods, properties, or operators to existing types without creating a new derived type, recompiling, or... |
| `fields.md` | A field in C# is a variable of any type that is declared directly in a class or struct. Fields are members of their containing type. |
| `finalizers.md` | Finalizers in C# perform any necessary final clean-up when a class instance is being collected by the garbage collector. |
| `how-to-create-a-new-method-for-an-enumeration.md` | Learn how to use extension methods to add functionality to an enum in C#. This example shows an extension method called Passing for an enum called... |
| `how-to-declare-and-use-read-write-properties.md` | Learn how to use read/write properties in C#. This sample includes two properties, each of which has get and set accessors, so the properties are... |
| `how-to-define-abstract-properties.md` | Learn how to define abstract properties in C#. Declaring an abstract property means that a class supports a property. The derived classes... |
| `how-to-define-constants.md` | Learn how to define constants in C#, which are fields whose values are set at compile time. Use constants to provide meaningful names for special... |
| `how-to-implement-a-lightweight-class-with-auto-implemented-properties.md` | Learn how to create an immutable lightweight class in C# that encapsulates automatically implemented properties. There are two implementation... |
| `how-to-implement-and-call-a-custom-extension-method.md` | Learn how to implement extension methods for any .NET type. Client code can use your methods by adding a reference to a DLL and adding a using... |
| `how-to-initialize-a-dictionary-with-a-collection-initializer.md` | Learn how to initialize a dictionary in C#, using either the Add method or an index initializer. This example shows both options. |
| `how-to-initialize-objects-by-using-an-object-initializer.md` | Learn how to use object initializers to initialize type objects in C# without invoking a constructor. Use an object initializer to define an... |
| `how-to-override-the-tostring-method.md` | Learn how to override the ToString method in C#. Every class or struct inherits Object and gets ToString, which returns a string representation of... |
| `how-to-return-subsets-of-element-properties-in-a-query.md` | Learn how to use an anonymous type in a query expression in C# to return some of the properties of each source element. |
| `how-to-use-implicitly-typed-local-variables-and-arrays-in-a-query-expression.md` | Use implicitly typed local variables in C# to have the compiler determine the type of a local variable. You must use them to store anonymous types. |
| `how-to-write-a-copy-constructor.md` | Learn how to write a copy constructor in C# that takes an instance of class and returns a new instance with the values of the input. |
| `implicitly-typed-local-variables.md` | The var keyword in C# instructs the compiler to infer the type of the variable from the expression on the right side of the initialization statement. |
| `instance-constructors.md` | Instance constructors in C# create and initialize any instance member variables when you use the new expression to create an instance of a type. |
| `interface-properties.md` | Properties can be declared on an interface in C#. This example declares an interface property accessor. |
| `knowing-when-to-use-override-and-new-keywords.md` | Use the new and override keywords in C# to specify how methods with the same name in a base and derived class interact. |
| `members.md` | Classes and structs in C# have members that represent data and behavior, including members declared in the class and declared in its inheritance... |
| `methods.md` | A method in C# is a code block that contains a series of statements. A program runs the statements by calling the method and specifying arguments. |
| `named-and-optional-arguments.md` | Named arguments in C# specify arguments by name, not position. Optional arguments can be omitted. |
| `nested-types.md` | A type defined within a class, struct, or interface is called a nested type in C#. |
| `object-and-collection-initializers.md` | Object initializers in C# assign values to accessible fields or properties of an object at creation after invoking a constructor. |
| `partial-classes-and-methods.md` | Partial classes and members in C# split the definition of a class, a struct, an interface, or a member over two or more source files. |
| `private-constructors.md` | A private constructor is a special instance constructor in C# used to restrict how an object can be created. They may be used with factory methods... |
| `properties.md` | A property in C# is a member that uses accessor methods to read, write, or compute the value of a private field as if it were a public data member. |
| `restricting-accessor-accessibility.md` | The get and set accessors of a property in C# have the same visibility or access level by default as property to which they belong. You can... |
| `static-classes-and-static-class-members.md` | Static classes can't be instantiated in C#. You access the members of a static class by using the class name itself. |
| `static-constructors.md` | A static constructor in C# initializes static data or performs an action done only once. It runs before the first instance is created or static... |
| `using-constructors.md` | This example shows how a class is instantiated by using the new operator in C#. The simple constructor is invoked after memory is allocated for... |
| `using-properties.md` | These examples illustrate using properties in C#. See how the get and set accessors implement read and write access and find out about uses for... |
| `versioning-with-the-override-and-new-keywords.md` | Learn about versioning for base and derived classes in C#, and how to specify whether a method is intended to override or hide an inherited method. |

### programming-guide/concepts/ (1 files)

| File | Description |
|------|-------------|
| `index.md` | Use the resources in this section to understand programming concepts in the C# language, including object-oriented programming. |

### programming-guide/concepts/covariance-contravariance/ (7 files)

| File | Description |
|------|-------------|
| `creating-variant-generic-interfaces.md` | Learn how to create variant generic interfaces with covariant or contravariant generic type parameters. |
| `index.md` | Learn about covariance and contravariance and how they affect assignment compatibility. See a code example that demonstrates the differences... |
| `using-variance-for-func-and-action-generic-delegates.md` | Learn about using covariance and contravariance in the Func and Action generic delegates to give you more flexibility in your code. |
| `using-variance-in-delegates.md` | Learn how to use variance in delegates using the included covariance and contravariance code examples. |
| `using-variance-in-interfaces-for-generic-collections.md` | Learn how to use covariant and contravariant interfaces for generic collections. See examples of converting and comparing generic collections. |
| `variance-in-delegates.md` | Learn how the variance support in .NET allows you to match method signatures with delegate types in all delegates. |
| `variance-in-generic-interfaces.md` | View variance support information for generic interfaces, including updated information for existing interfaces in .NET Framework 4 and 4.5. |

### programming-guide/delegates/ (5 files)

| File | Description |
|------|-------------|
| `delegates-with-named-vs-anonymous-methods.md` | Learn about delegates with named vs. anonymous methods. See code examples and view other available resources. |
| `how-to-combine-delegates-multicast-delegates.md` | Learn how to combine delegates to create multicast delegates. See a code example and view more available resources. |
| `how-to-declare-instantiate-and-use-a-delegate.md` | Learn how to declare, instantiate, and use a delegate. This article provides several examples of declaring, instantiating, and invoking delegates. |
| `index.md` | Explore delegate types in C#. A delegate is a date type that refers to a method with a defined parameter list and return type. You use delegates... |
| `using-delegates.md` | Learn how to use delegates. Delegates are an object-oriented, type safe, and secure type that safely encapsulates a method. |

### programming-guide/events/ (5 files)

| File | Description |
|------|-------------|
| `how-to-implement-custom-event-accessors.md` | Learn how to implement custom event accessors. See a code example and view additional available resources. |
| `how-to-implement-interface-events.md` | Learn how to implement interface events in a class. See code examples and view additional available resources. |
| `how-to-raise-base-class-events-in-derived-classes.md` | Learn how to raise base class events in derived classes. See a code example and view additional available resources. |
| `how-to-subscribe-to-and-unsubscribe-from-events.md` | Learn how to subscribe to and unsubscribe from events. Subscribe to events using the Visual Studio IDE, programmatically, or using an anonymous... |
| `index.md` | Learn about events. Events enable a class or object to notify other classes or objects when something of interest occurs. |

### programming-guide/generics/ (9 files)

| File | Description |
|------|-------------|
| `constraints-on-type-parameters.md` | Learn about constraints on type parameters. Constraints tell the compiler what capabilities a type argument must have. |
| `differences-between-cpp-templates-and-csharp-generics.md` | Learn about the differences between C++ templates and C# generics. Both are language features that provide support for parameterized types. |
| `generic-classes.md` | Learn about generic classes used in collections like linked lists, hash tables, stacks, queues, and trees. |
| `generic-delegates.md` | Learn about using generic delegates in C#. See code examples and view additional available resources. |
| `generic-interfaces.md` | Learn about using generic interfaces in C#. See code examples and view other available resources. |
| `generic-methods.md` | Learn about methods declared with type parameters, known as generic methods. See code examples and view additional available resources. |
| `generic-type-parameters.md` | Learn about generic type definition in C#, where a type parameter is a placeholder for a type that a client specifies for an instance of the... |
| `generics-and-arrays.md` | Learn about generics and arrays in C# programming. See code examples and view additional available resources. |
| `generics-in-the-run-time.md` | Learn about generic types in the runtime. See code examples and view additional available resources. |

### programming-guide/indexers/ (4 files)

| File | Description |
|------|-------------|
| `comparison-between-properties-and-indexers.md` | Compare how indexers in C# are like properties. Except for some differences, the rules that are defined for property accessors apply to indexer... |
| `index.md` | Indexers in C# allow class or struct instances to be indexed like arrays. You can set or get the indexed value without specifying a type or... |
| `indexers-in-interfaces.md` | Indexers can be declared on an interface in C#. Learn how accessors of interface indexers differ from the accessors of class indexers. |
| `using-indexers.md` | Learn how to declare and use an indexer for a class, struct, or interface in C#. This article includes example code. |

### programming-guide/interfaces/ (3 files)

| File | Description |
|------|-------------|
| `explicit-interface-implementation.md` | A class can implement interfaces that contain a member with the same signature in C#. Explicit implementation creates a class member specific to... |
| `how-to-explicitly-implement-interface-members.md` | Learn how to explicitly implement interface members in this C# example. The members are accessed through the interface instance. |
| `how-to-explicitly-implement-members-of-two-interfaces.md` | Learn how to explicitly implement two interfaces that have the same member names and give each interface member a separate implementation in this... |

### programming-guide/strings/ (2 files)

| File | Description |
|------|-------------|
| `how-to-determine-whether-a-string-represents-a-numeric-value.md` | Learn how to determine whether a string is a valid representation of a specified numeric type. See code examples and view additional resources. |
| `index.md` | Learn about strings in C# programming. See information on declaring and initializing strings, the immutability of string objects, and string... |

### programming-guide/types/ (5 files)

| File | Description |
|------|-------------|
| `boxing-and-unboxing.md` | Learn about boxing and unboxing in C# programming. See code examples and view other available resources. |
| `casting-and-type-conversions.md` | Learn about casting and type conversions, such as implicit, explicit (casts), and user-defined conversions. |
| `how-to-convert-a-byte-array-to-an-int.md` | Learn how to convert a byte array to an int. See code examples and view additional available resources. |
| `how-to-convert-a-string-to-a-number.md` | Learn how to convert a string to a number in C# by calling the Parse, TryParse, or Convert class methods. |
| `how-to-convert-between-hexadecimal-strings-and-numeric-types.md` | Learn how to convert between hexadecimal strings and numeric types. See code examples and view additional available resources. |

### roslyn-sdk/ (7 files)

| File | Description |
|------|-------------|
| `choosing-diagnostic-ids.md` | This overview provides an understanding of how to choose a diagnostic ID |
| `compiler-api-model.md` | This overview provides the background you need to work effectively with the .NET compiler SDK. You'll learn the API layers, the major types... |
| `index.md` | Learn to use the .NET Compiler Platform SDK (also called the Roslyn APIs) to understand .NET code, spot errors, and fix those errors. |
| `syntax-visualizer.md` | The syntax visualizer provides a visual tool to explore the models the .NET Compiler Platform SDK generates for code. |
| `work-with-semantics.md` | This overview provides an understanding of the type you use to understand and manipulate the semantic model of your code. |
| `work-with-syntax.md` | This overview provides an understanding of the types you use to understand and manipulate syntax nodes. |
| `work-with-workspace.md` | This overview provides an understanding of the type you use to query and manipulate the workspace and projects for your code. |

### roslyn-sdk/get-started/ (3 files)

| File | Description |
|------|-------------|
| `semantic-analysis.md` | This tutorial provides an overview of working with semantic analysis using the .NET Compiler SDK. |
| `syntax-analysis.md` | An introduction to traversing, querying, and walking syntax trees. |
| `syntax-transformation.md` | An introduction to creating and transforming syntax trees. |

### roslyn-sdk/tutorials/ (1 files)

| File | Description |
|------|-------------|
| `how-to-write-csharp-analyzer-code-fix.md` | This tutorial provides step-by-step instructions to build an analyzer and code fix using the .NET Compiler SDK (Roslyn APIs). |

### specification/ (2 files)

| File | Description |
|------|-------------|
| `feature-spec-overview.md` | Understand the relationships among the ECMA C# standard and the feature specifications for newer language features implemented in roslyn. |
| `overview.md` | Understand the relationships among the ECMA C# standard and the working draft. |

### tour-of-csharp/ (6 files)

| File | Description |
|------|-------------|
| `overview.md` | New to C#? Learn the basics of the language. Start with this overview. |
| `strategy.md` | We keep evolving C# to meet the changing needs of developers and remain a state-of-the-art programming language. We will innovate eagerly and... |
| `tips-for-java-developers.md` | Are you new to C#, but experienced in Java? Here's a roadmap of what's familiar, and new features to learn in C#, and features in Java that aren't... |
| `tips-for-javascript-developers.md` | New to C#, but know JavaScript or TypeScript? Here's a roadmap of what's familiar, features in C# that aren't in JavaScript or TypeScript, and... |
| `tips-for-python-developers.md` | New to C#, but know Python? Here's a roadmap of what's familiar, features in C# that aren't in Python, and alternatives for Python features that... |
| `what-you-can-build.md` | Explore the types of applications you can build with C#, including web, desktop, mobile, cloud, IoT, AI, and games. |

### tour-of-csharp/tutorials/ (7 files)

| File | Description |
|------|-------------|
| `branches-and-loops.md` | In this tutorial about branches and loops, you write C# code to explore the language syntax that supports conditional branches and loops to... |
| `hello-world.md` | In this tutorial, you create your first C# apps. You write C# code and learn basic structure and types in C#. |
| `index.md` | Learn C# using GitHub Codespaces, and get started with your own development environment. |
| `list-collection.md` | In this tutorial, you use GitHub Codespaces to learn about C# collections. You write C# code and see the results of compiling and running your... |
| `numbers-in-csharp.md` | This tutorial teaches you about the numeric types in C#. The tutorial contains a series of lessons that explore numbers and math operations in C#. |
| `pattern-matching.md` | In this tutorial about pattern matching, you learn C#. You're going to write C# code and see the results of compiling and running your code. |
| `tuples-and-types.md` | This tutorial teaches you to create types in C#. You write C# code and see the results of compiling and running your code as you learn the... |

### tutorials/ (5 files)

| File | Description |
|------|-------------|
| `console-teleprompter.md` | This tutorial teaches you a number of features in .NET Core and the C# language. |
| `console-webapiclient.md` | Learn how to make HTTP requests to a REST web service and deserialize JSON responses. This tutorial creates a .NET console and uses C#. |
| `ranges-indexes.md` | This advanced tutorial teaches you to explore data using indices and ranges to examine a continuous range of a sequential data set. |
| `top-level-statements.md` | This tutorial shows how you can use top-level statements to experiment and prove concepts while exploring your ideas |
| `working-with-linq.md` | This tutorial teaches you how to generate sequences with LINQ, write methods for use in LINQ queries, and distinguish between eager and lazy... |

### tutorials/snippets/console-linq/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | This sample is created during the Working with LINQ tutorial for learning C# features. Please see that topic for detailed steps on the code for... |

### whats-new/ (8 files)

| File | Description |
|------|-------------|
| `breaking-changes.md` | Find any breaking changes in the C# compiler that you're using. |
| `csharp-12.md` | Discover what's new in C# 12, including collection expressions, inline arrays, default lambda parameters, and interceptors. Try examples in your code. |
| `csharp-13.md` | Discover what's new in C# 13, including params collections, a new lock object, ref struct interfaces, partial properties, and more. Try examples... |
| `csharp-14.md` | Get an overview of the new features in C# 14. C# 14 ships with .NET 10. |
| `csharp-15.md` | Discover what's new in C# 15, including union types, closed hierarchies, extension indexers, collection expression arguments, and static interface... |
| `csharp-version-history.md` | Learn how the C# language has changed over its many releases. Learn when different features were introduced in the language. |
| `relationships-between-language-and-library.md` | Language features often rely on library types for implementation. Understand that relationship. |
| `version-update-considerations.md` | Introducing new languages features in your library can impact the code that uses it. |

### whats-new/tutorials/ (5 files)

| File | Description |
|------|-------------|
| `closed-hierarchies.md` | A closed hierarchy restricts a base type's direct subtypes to one assembly so the compiler can verify exhaustive matches. Learn to declare closed... |
| `compound-assignment-operators.md` | C# 14 enables user-defined instance compound assignment operators. These operators can provide better performance by minimizing allocations or... |
| `extension-members.md` | C# 14 extension members add properties and operators to existing types. C# 15 extension indexers add indexed access. Learn both with runnable... |
| `primary-constructors.md` | Learn how and when to declare primary constructors in your class and struct types. Primary constructors provide concise syntax to declare... |
| `unions.md` | Union types let a single value hold one of a fixed set of types. Learn to declare union types, match their cases exhaustively, build custom... |
