# ESLint Table of Contents

## Directory Map

```
contents/
├── use/                 # Using ESLint: getting started, CLI, configuration (19 files + subdirs)
│   ├── configure/       # Flat config, rules, plugins, parsers, ignores (10 files)
│   ├── core-concepts/   # Core concepts and glossary (2 files)
│   ├── formatters/      # Built-in formatter reference (1 file)
│   └── troubleshooting/ # Common error explanations (3 files)
├── extend/              # Custom rules, plugins, parsers, processors, formatters (16 files)
├── integrate/           # Node.js API and integration tutorial (3 files)
└── rules/               # One page per built-in rule (312 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/use/getting-started.md` |
| Write eslint.config.js | `contents/use/configure/configuration-files.md` |
| Migrate eslintrc to flat config | `contents/use/configure/migration-guide.md` |
| Upgrade to v10 | `contents/use/migrate-to-10.0.0.md` |
| CLI flags | `contents/use/command-line-interface.md` |
| Look up a rule | `contents/rules/{rule-name}.md` |
| Write a custom rule | `contents/extend/custom-rules.md` |
| Write a plugin | `contents/extend/plugins.md` |
| Programmatic use | `contents/integrate/nodejs-api.md` |
| Troubleshooting | `contents/use/troubleshooting/index.md` |

## Detailed Structure

### use/ (9 files at top level)

| File | Description |
|------|-------------|
| `index.md` | Overview of using ESLint in a project |
| `getting-started.md` | Install, initialize a config, and run ESLint for the first time |
| `command-line-interface.md` | Full CLI reference: options, exit codes, output and fixing flags |
| `integrations.md` | Editor, build tool and CI integrations for ESLint |
| `mcp.md` | Setting up the ESLint MCP server for AI tooling |
| `migrate-to-10.0.0.md` | Breaking changes and upgrade steps for ESLint v10 |
| `rule-deprecation.md` | How deprecated rules are listed and what replaces them |
| `suppressions.md` | Bulk suppressions to adopt rules incrementally |
| `version-support.md` | Supported ESLint versions and release lifecycle |

### use/configure/ (10 files)

| File | Description |
|------|-------------|
| `index.md` | Overview of configuring ESLint |
| `configuration-files.md` | eslint.config.js flat config format, file matching, extending and cascading |
| `combine-configs.md` | Composing multiple config objects and shared configs |
| `debug.md` | Inspecting and debugging resolved configuration |
| `ignore.md` | Ignoring files and directories with `ignores` patterns |
| `language-options.md` | ecmaVersion, sourceType, globals and parser options |
| `migration-guide.md` | Migrating from eslintrc to flat config |
| `parser.md` | Using custom parsers such as @typescript-eslint/parser |
| `plugins.md` | Loading and configuring plugins |
| `rules.md` | Setting rule severity and options, inline comments, disable directives |

### use/core-concepts/ (2 files)

| File | Description |
|------|-------------|
| `index.md` | Core concepts: rules, configs, plugins, parsers, formatters |
| `glossary.md` | Glossary of ESLint terminology |

### use/formatters/ (1 file)

| File | Description |
|------|-------------|
| `index.md` | Built-in formatters and their output formats |

### use/troubleshooting/ (3 files)

| File | Description |
|------|-------------|
| `index.md` | Index of common ESLint errors and fixes |
| `circular-fixes.md` | Resolving "Circular fixes detected" errors |
| `v9-rule-api-changes.md` | Fixing "context.getScope is not a function" after upgrading rule APIs |

### extend/ (16 files)

| File | Description |
|------|-------------|
| `index.md` | Overview of extending ESLint |
| `ways-to-extend.md` | Comparison of ways to extend: rules, plugins, configs, parsers, processors |
| `custom-rules.md` | Custom rule API: meta, create, context, fixes, suggestions |
| `custom-rule-tutorial.md` | Step-by-step tutorial for building a custom rule |
| `selectors.md` | AST selector syntax for rule listeners |
| `code-path-analysis.md` | Code path analysis events and APIs |
| `scope-manager-interface.md` | ScopeManager interface for scope analysis |
| `plugins.md` | Creating and publishing plugins |
| `plugin-migration-flat-config.md` | Migrating plugins to flat config |
| `shareable-configs.md` | Creating and sharing configurations |
| `custom-parsers.md` | Writing custom parsers |
| `custom-processors.md` | Writing processors for non-JS files |
| `custom-formatters.md` | Writing custom formatters |
| `languages.md` | Defining custom languages for ESLint |
| `rule-deprecation.md` | Marking rules as deprecated in plugins |
| `stats.md` | Stats data collected on lint runs |

### integrate/ (3 files)

| File | Description |
|------|-------------|
| `index.md` | Overview of integrating ESLint into tools |
| `nodejs-api.md` | Node.js API reference: ESLint class, Linter, RuleTester, SourceCode |
| `integration-tutorial.md` | Tutorial for integrating via the Node.js API |

### rules/ (312 files)

Each file documents one rule: description, options, correct and incorrect examples, and when not to use it.

| File | Description |
|------|-------------|
| `accessor-pairs.md` | enforces a style where it requires to have a getter for every property which has a setter defined. |
| `array-bracket-newline.md` | enforces line breaks after opening and before closing array brackets. |
| `array-bracket-spacing.md` | enforces consistent spacing inside array brackets. |
| `array-callback-return.md` | enforces usage of `return` statement in callbacks of array's methods. |
| `array-element-newline.md` | enforces line breaks between array elements. |
| `arrow-body-style.md` | can enforce or disallow the use of braces around arrow function body. |
| `arrow-parens.md` | enforces parentheses around arrow function parameters regardless of arity. |
| `arrow-spacing.md` | takes an object argument with `before` and `after` properties, each with a Boolean value. |
| `block-scoped-var.md` | aims to reduce the usage of variables outside of their binding context and emulate traditional block scope from other languages. |
| `block-spacing.md` | enforces consistent spacing inside an open block token and the next token on the same line. |
| `brace-style.md` | enforces consistent brace style for blocks. |
| `callback-return.md` | is aimed at ensuring that callbacks used outside of the main function block are always part-of or immediately preceding a `return`... |
| `camelcase.md` | looks for any underscores (`_`) located within the source code. |
| `capitalized-comments.md` | aims to enforce a consistent style of comments across your codebase, specifically by either requiring or disallowing a capitalized... |
| `class-methods-use-this.md` | flags class instance methods that do not use `this`. |
| `comma-dangle.md` | enforces consistent use of trailing commas in object and array literals. |
| `comma-spacing.md` | enforces consistent spacing before and after commas in variable declarations, array literals, object literals, function parameters, and... |
| `comma-style.md` | enforce consistent comma style in array literals, object literals, and variable declarations. |
| `complexity.md` | is aimed at reducing code complexity by capping the amount of cyclomatic complexity allowed in a program. |
| `computed-property-spacing.md` | enforces consistent spacing inside computed property brackets. |
| `consistent-return.md` | requires `return` statements to either always or never specify values. |
| `consistent-this.md` | enforces two things about variables with the designated alias names for `this`: |
| `constructor-super.md` | is aimed to flag invalid/missing `super()` calls. |
| `curly.md` | is aimed at preventing bugs and increasing code clarity by ensuring that block statements are wrapped in curly braces. |
| `default-case-last.md` | enforces `default` clauses in `switch` statements to be last. |
| `default-case.md` | aims to require `default` case in `switch` statements. |
| `default-param-last.md` | enforces default parameters to be the last of parameters. |
| `dot-location.md` | aims to enforce newline consistency in member expressions. |
| `dot-notation.md` | is aimed at maintaining code consistency and improving code readability by encouraging use of the dot notation style whenever possible. |
| `eol-last.md` | enforces at least one newline (or absence thereof) at the end of non-empty files. |
| `eqeqeq.md` | is aimed at eliminating the type-unsafe equality operators. |
| `for-direction.md` | forbids `for` loops where the counter variable changes in such a way that the stop condition will never be met. |
| `func-call-spacing.md` | requires or disallows spaces between the function name and the opening parenthesis that calls it. |
| `func-name-matching.md` | requires function names to match the name of the variable or property to which they are assigned. |
| `func-names.md` | can enforce or disallow the use of named function expressions. |
| `func-style.md` | enforces a particular type of function style, either `function` declarations or expressions assigned to variables. |
| `function-call-argument-newline.md` | enforces line breaks between arguments of a function call. |
| `function-paren-newline.md` | enforces consistent line breaks inside parentheses of function parameters or arguments. |
| `generator-star-spacing.md` | aims to enforce spacing around the `*` of generator functions. |
| `generator-star.md` | enforces that the `*` is either placed next to the `function` keyword or the name of the function. |
| `getter-return.md` | enforces that a return statement is present in property getters. |
| `global-require.md` | requires all calls to `require()` to be at the top level of the module, similar to ES6 `import` and `export` statements, which also can... |
| `global-strict.md` | requires or disallows global strict mode invoked by a `"use strict"` pragma in the global scope. |
| `grouped-accessor-pairs.md` | requires grouped definitions of accessor functions for the same property in object literals, class declarations and class expressions. |
| `guard-for-in.md` | is aimed at preventing unexpected behavior that could arise from using a `for in` loop without filtering the results in the loop. |
| `handle-callback-err.md` | expects that when you're using the callback pattern in Node.js you'll handle the error. |
| `id-blacklist.md` | Removed legacy alias of `id-denylist`; disallows specified identifiers. |
| `id-denylist.md` | disallows specified identifiers in assignments and `function` definitions. |
| `id-length.md` | enforces a minimum and/or maximum identifier length convention. |
| `id-match.md` | requires identifiers in assignments and `function` definitions to match a specified regular expression. |
| `implicit-arrow-linebreak.md` | aims to enforce a consistent location for an arrow function containing an implicit return. |
| `indent-legacy.md` | enforces a consistent indentation style. |
| `indent.md` | enforces a consistent indentation style. |
| `init-declarations.md` | is aimed at enforcing or eliminating variable initializations during declaration. |
| `jsx-quotes.md` | enforces the consistent use of either double or single quotes in JSX attributes. |
| `key-spacing.md` | enforces consistent spacing between keys and values in object literal properties. |
| `keyword-spacing.md` | enforces consistent spacing around keywords and keyword-like tokens: |
| `line-comment-position.md` | enforces consistent position of line comments. |
| `linebreak-style.md` | enforces consistent line endings independent of operating system, VCS, or editor used across your codebase. |
| `lines-around-comment.md` | requires empty lines before and/or after comments. |
| `lines-around-directive.md` | requires or disallows blank newlines around directive prologues. |
| `lines-between-class-members.md` | Examples of **incorrect** code for this rule: |
| `logical-assignment-operators.md` | requires or disallows logical assignment operator shorthand. |
| `max-classes-per-file.md` | enforces that each file may contain only a particular number of classes and no more. |
| `max-depth.md` | enforces a maximum depth that blocks can be nested to reduce code complexity. |
| `max-len.md` | enforces a maximum line length to increase code readability and maintainability. |
| `max-lines-per-function.md` | enforces a maximum number of lines per function, in order to aid in maintainability and reduce complexity. |
| `max-lines.md` | enforces a maximum number of lines per file, in order to aid in maintainability and reduce complexity. |
| `max-nested-callbacks.md` | enforces a maximum depth that callbacks can be nested to increase code clarity. |
| `max-params.md` | enforces a maximum number of parameters allowed in function definitions. |
| `max-statements-per-line.md` | enforces a maximum number of statements allowed per line. |
| `max-statements.md` | enforces a maximum number of statements allowed in function blocks. |
| `multiline-comment-style.md` | aims to enforce a particular style for multiline comments. |
| `multiline-ternary.md` | enforces or disallows newlines between operands of a ternary expression. |
| `new-cap.md` | requires constructor names to begin with a capital letter. |
| `new-parens.md` | can enforce or disallow parentheses when invoking a constructor with no arguments using the `new` keyword. |
| `newline-after-var.md` | enforces a coding style where empty lines are required or disallowed after `var`, `let`, or `const` statements to achieve a consistent... |
| `newline-before-return.md` | requires an empty line before `return` statements to increase code clarity, except when the `return` is alone inside a statement group... |
| `newline-per-chained-call.md` | requires a newline after each call in a method chain or deep member access. |
| `no-alert.md` | is aimed at catching debugging code that should be removed and popup UI elements that should be replaced with less obtrusive, custom UIs. |
| `no-array-constructor.md` | disallows `Array` constructors. |
| `no-arrow-condition.md` | Examples of **incorrect** code for this rule: |
| `no-async-promise-executor.md` | aims to disallow async Promise executor functions. |
| `no-await-in-loop.md` | disallows the use of `await` within loop bodies. |
| `no-bitwise.md` | disallows bitwise operators. |
| `no-buffer-constructor.md` | disallows calling and constructing the `Buffer()` constructor. |
| `no-caller.md` | is aimed at discouraging the use of deprecated and sub-optimal code by disallowing the use of `arguments.caller` and `arguments.callee`. |
| `no-case-declarations.md` | aims to prevent access to uninitialized lexical bindings as well as accessing hoisted functions across `case` clauses. |
| `no-catch-shadow.md` | is aimed at preventing unexpected behavior in your program that may arise from a bug in IE 8 and earlier, in which the catch clause... |
| `no-class-assign.md` | is aimed to flag modifying variables of class declarations. |
| `no-comma-dangle.md` | is aimed at detecting trailing commas in object literals. |
| `no-compare-neg-zero.md` | The rule should warn against code that tries to compare against `-0`, since that will not work as intended. |
| `no-cond-assign.md` | disallows ambiguous assignment operators in test conditions of `if`, `for`, `while`, and `do...while` statements. |
| `no-confusing-arrow.md` | Examples of **incorrect** code for this rule: |
| `no-console.md` | disallows calls or assignments to methods of the `console` object. |
| `no-const-assign.md` | is aimed to flag modifying variables that are declared using `const`, `using`, or `await using` keywords. |
| `no-constant-binary-expression.md` | identifies `==` and `===` comparisons which, based on the semantics of the JavaScript language, will always evaluate to `true` or `false`. |
| `no-constant-condition.md` | disallows constant expressions in the test condition of: |
| `no-constructor-return.md` | disallows return statements in the constructor of a class. |
| `no-continue.md` | disallows `continue` statements. |
| `no-control-regex.md` | disallows control characters and some escape sequences that match control characters in regular expressions. |
| `no-debugger.md` | disallows `debugger` statements. |
| `no-delete-var.md` | disallows the use of the `delete` operator on variables. |
| `no-div-regex.md` | forbids equal signs (`=`) after the slash (`/`) at the beginning of a regular expression literal, because the characters `/=` can be... |
| `no-dupe-args.md` | disallows duplicate parameter names in function declarations or expressions. |
| `no-dupe-class-members.md` | is aimed to flag the use of duplicate names in class members. |
| `no-dupe-else-if.md` | disallows duplicate conditions in the same `if-else-if` chain. |
| `no-dupe-keys.md` | disallows duplicate keys in object literals. |
| `no-duplicate-case.md` | disallows duplicate test expressions in `case` clauses of `switch` statements. |
| `no-duplicate-imports.md` | requires that all imports from a single module that can be merged exist in a single `import` statement. |
| `no-else-return.md` | is aimed at highlighting an unnecessary block of code following an `if` containing a `return` statement. |
| `no-empty-character-class.md` | disallows empty character classes in regular expressions. |
| `no-empty-class.md` | is aimed at highlighting possible typos and unexpected behavior in regular expressions which may arise from the use of empty character... |
| `no-empty-function.md` | is aimed at eliminating empty functions. |
| `no-empty-label.md` | This error occurs when a label is used to mark a statement that is not an iteration or switch |
| `no-empty-pattern.md` | aims to flag any empty patterns in destructured objects and arrays, and as such, will report a problem whenever one is encountered. |
| `no-empty-static-block.md` | disallows empty static blocks. |
| `no-empty.md` | disallows empty block statements. |
| `no-eq-null.md` | The `no-eq-null` rule aims to reduce potential bugs and unwanted behavior by ensuring that comparisons to `null` only match `null`, and not also... |
| `no-eval.md` | is aimed at preventing potentially dangerous, unnecessary, and slow code by disallowing the use of the `eval()` function. |
| `no-ex-assign.md` | disallows reassigning exceptions in `catch` clauses. |
| `no-extend-native.md` | Disallows directly modifying the prototype of builtin objects. |
| `no-extra-bind.md` | is aimed at avoiding the unnecessary use of `bind()` and as such will warn whenever an immediately-invoked function expression (IIFE) is... |
| `no-extra-boolean-cast.md` | disallows unnecessary boolean casts. |
| `no-extra-label.md` | is aimed at eliminating unnecessary labels. |
| `no-extra-parens.md` | always ignores extra parentheses around the following: |
| `no-extra-semi.md` | disallows unnecessary semicolons. |
| `no-extra-strict.md` | is aimed at preventing unnecessary `"use strict";` directives. |
| `no-fallthrough.md` | is aimed at eliminating unintentional fallthrough of one case to the other. |
| `no-floating-decimal.md` | is aimed at eliminating floating decimal points and will warn whenever a numeric value has a decimal point but is missing a number... |
| `no-func-assign.md` | disallows reassigning `function` declarations. |
| `no-global-assign.md` | disallows modifications to read-only global variables. |
| `no-implicit-coercion.md` | is aimed to flag shorter notations for the type conversion, then suggest a more self-explanatory notation. |
| `no-implicit-globals.md` | When working with browser scripts, developers often forget that variable and function declarations at the top-level scope become global variables... |
| `no-implied-eval.md` | aims to eliminate implied `eval()` through the use of `setTimeout()`, `setInterval()` or `execScript()`. |
| `no-import-assign.md` | warns the assignments, increments, and decrements of imported bindings. |
| `no-inline-comments.md` | disallows comments on the same line as code. |
| `no-inner-declarations.md` | requires that function declarations and, optionally, variable declarations be in the root of a program, or in the root of the body of a... |
| `no-invalid-regexp.md` | disallows invalid regular expression strings in `RegExp` constructors. |
| `no-invalid-this.md` | aims to flag usage of `this` keywords in contexts where the value of `this` is `undefined`. |
| `no-irregular-whitespace.md` | is aimed at catching invalid whitespace that is not a normal tab and space. |
| `no-iterator.md` | is aimed at preventing errors that may arise from using the `__iterator__` property, which is not implemented in several browsers. |
| `no-label-var.md` | aims to create clearer code by disallowing the bad practice of creating a label that shares a name with a variable that is in scope. |
| `no-labels.md` | aims to eliminate the use of labeled statements in JavaScript. |
| `no-lone-blocks.md` | aims to eliminate unnecessary and potentially confusing blocks at the top level of a script or within other blocks. |
| `no-lonely-if.md` | disallows `if` statements as the only statement in `else` blocks. |
| `no-loop-func.md` | This error is raised to highlight a piece of code that may not work as you expect it to and could also indicate a misunderstanding of how the... |
| `no-loss-of-precision.md` | In JS, `Number`s are stored as double-precision floating-point numbers according to the IEEE 754 standard. |
| `no-magic-numbers.md` | The `no-magic-numbers` rule aims to make code more readable and refactoring easier by ensuring that special numbers are declared as constants to... |
| `no-misleading-character-class.md` | reports regular expressions which include multiple code point characters in character class syntax. |
| `no-mixed-operators.md` | checks `BinaryExpression`, `LogicalExpression` and `ConditionalExpression`. |
| `no-mixed-requires.md` | When this rule is enabled, each `var` statement must satisfy the following conditions: |
| `no-mixed-spaces-and-tabs.md` | disallows mixed spaces and tabs for indentation. |
| `no-multi-assign.md` | disallows using multiple assignments within a single statement. |
| `no-multi-spaces.md` | aims to disallow multiple whitespace around logical expressions, conditional expressions, declarations, array elements, object... |
| `no-multi-str.md` | is aimed at preventing the use of multiline strings. |
| `no-multiple-empty-lines.md` | aims to reduce the scrolling required when reading through your code. |
| `no-native-reassign.md` | disallows modifications to read-only global variables. |
| `no-negated-condition.md` | disallows negated conditions in either of the following: |
| `no-negated-in-lhs.md` | disallows negating the left operand in `in` expressions. |
| `no-nested-ternary.md` | The `no-nested-ternary` rule disallows nested ternary expressions. |
| `no-new-func.md` | This error is raised to highlight the use of a bad practice. |
| `no-new-native-nonconstructor.md` | is aimed at preventing the accidental calling of native JavaScript global functions with the `new` operator. |
| `no-new-object.md` | disallows calling the `Object` constructor with `new`. |
| `no-new-require.md` | aims to eliminate use of the `new require` expression. |
| `no-new-symbol.md` | is aimed at preventing the accidental calling of `Symbol` with the `new` operator. |
| `no-new-wrappers.md` | aims to eliminate the use of `String`, `Number`, and `Boolean` with the `new` operator. |
| `no-new.md` | is aimed at maintaining consistency and convention by disallowing constructor calls using the `new` keyword that do not assign the... |
| `no-nonoctal-decimal-escape.md` | disallows `\8` and `\9` escape sequences in string literals. |
| `no-obj-calls.md` | disallows calling `Math`, `JSON`, `Reflect`, `Atomics`, `Intl`, `Temporal`, and `globalThis` as functions. |
| `no-object-constructor.md` | disallows calling the `Object` constructor without an argument. |
| `no-octal-escape.md` | disallows octal escape sequences in string literals. |
| `no-octal.md` | The rule disallows octal literals. |
| `no-param-reassign.md` | aims to prevent unintended behavior caused by modification or reassignment of function parameters. |
| `no-path-concat.md` | aims to prevent string concatenation of directory paths in Node.js |
| `no-plusplus.md` | disallows the unary operators `++` and `--`. |
| `no-process-env.md` | is aimed at discouraging use of `process.env` to avoid global dependencies. |
| `no-process-exit.md` | aims to prevent the use of `process.exit()` in Node.js JavaScript. |
| `no-promise-executor-return.md` | disallows returning values from Promise executor functions. |
| `no-proto.md` | When an object is created with the `new` operator, `__proto__` is set to the original "prototype" property of the object's constructor function. |
| `no-prototype-builtins.md` | disallows calling some `Object.prototype` methods directly on object instances. |
| `no-redeclare.md` | is aimed at eliminating variables that have multiple declarations in the same scope. |
| `no-regex-spaces.md` | disallows multiple spaces in regular expression literals. |
| `no-reserved-keys.md` | is aimed at eliminating the use of ECMAScript 3 keywords and reserved words as object literal keys. |
| `no-restricted-exports.md` | disallows specified names from being used as exported names. |
| `no-restricted-globals.md` | allows you to specify global variable names that you don't want to use in your application. |
| `no-restricted-imports.md` | allows you to specify imports that you don't want to use in your application. |
| `no-restricted-modules.md` | allows you to specify modules that you don’t want to use in your application. |
| `no-restricted-properties.md` | looks for accessing a given property key on a given object name, either when reading the property's value or invoking it as a function. |
| `no-restricted-syntax.md` | disallows specified (that is, user-defined) syntax. |
| `no-return-assign.md` | aims to eliminate assignments from `return` statements. |
| `no-return-await.md` | warns on any usage of `return await` except in `try` blocks. |
| `no-script-url.md` | Examples of **incorrect** code for this rule: |
| `no-self-assign.md` | is aimed at eliminating self assignments. |
| `no-self-compare.md` | This error is raised to highlight a potentially confusing and potentially pointless piece of code. |
| `no-sequences.md` | forbids the use of the comma operator, with the following exceptions: |
| `no-setter-return.md` | disallows returning values from setters and reports `return` statements in setter functions. |
| `no-shadow-restricted-names.md` | Examples of **incorrect** code for this rule: |
| `no-shadow.md` | aims to eliminate shadowed variable declarations. |
| `no-space-before-semi.md` | prevents the use of spaces before a semicolon in expressions. |
| `no-spaced-func.md` | disallows spacing between function identifiers and their applications. |
| `no-sparse-arrays.md` | disallows sparse array literals which have "holes" where commas are not preceded by elements. |
| `no-sync.md` | is aimed at preventing synchronous methods from being called in Node.js. |
| `no-tabs.md` | looks for tabs anywhere inside a file: |
| `no-template-curly-in-string.md` | aims to warn when a regular string contains what looks like a template literal placeholder. |
| `no-ternary.md` | disallows ternary operators. |
| `no-this-before-super.md` | is aimed to flag `this`/`super` keywords before `super()` callings. |
| `no-throw-literal.md` | is aimed at maintaining consistency when throwing exception by disallowing to throw literals and other expressions which cannot possibly... |
| `no-trailing-spaces.md` | disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines. |
| `no-unassigned-vars.md` | Examples of **incorrect** code for this rule: |
| `no-undef-init.md` | aims to eliminate `var` and `let` variable declarations that initialize to `undefined`. |
| `no-undef.md` | Any reference to an undeclared variable causes a warning, unless the variable is explicitly mentioned in a `/*global ...*/` comment, or specified... |
| `no-undefined.md` | aims to eliminate the use of `undefined`, and as such, generates a warning whenever it is used. |
| `no-underscore-dangle.md` | disallows dangling underscores in identifiers. |
| `no-unexpected-multiline.md` | disallows confusing multiline expressions where a newline looks like it is ending a statement, but is not. |
| `no-unmodified-loop-condition.md` | finds references which are inside of loop conditions, then checks the variables of those references are modified in the loop. |
| `no-unneeded-ternary.md` | disallow ternary operators when simpler alternatives exist. |
| `no-unreachable-loop.md` | aims to detect and disallow loops that can have at most one iteration, by performing static code path analysis on loop bodies. |
| `no-unreachable.md` | disallows unreachable code after `return`, `throw`, `continue`, and `break` statements. |
| `no-unsafe-finally.md` | disallows `return`, `throw`, `break`, and `continue` statements inside `finally` blocks. |
| `no-unsafe-negation.md` | disallows negating the left operand of the following relational operators: |
| `no-unsafe-optional-chaining.md` | aims to detect some cases where the use of optional chaining doesn't prevent runtime errors. |
| `no-unused-expressions.md` | aims to eliminate unused expressions which have no effect on the state of the program. |
| `no-unused-labels.md` | is aimed at eliminating unused labels. |
| `no-unused-private-class-members.md` | reports unused private class members. |
| `no-unused-vars.md` | is aimed at eliminating unused variables, functions, and function parameters. |
| `no-use-before-define.md` | will warn when it encounters a reference to an identifier that has not yet been declared. |
| `no-useless-assignment.md` | aims to report variable assignments when the value is not used. |
| `no-useless-backreference.md` | aims to detect and disallow the following backreferences in regular expression: |
| `no-useless-call.md` | is aimed to flag usage of `Function.prototype.call()` and `Function.prototype.apply()` that can be replaced with the normal function... |
| `no-useless-catch.md` | reports `catch` clauses that only `throw` the caught error. |
| `no-useless-computed-key.md` | disallows unnecessary usage of computed property keys. |
| `no-useless-concat.md` | aims to flag the concatenation of 2 literals when they could be combined into a single literal. |
| `no-useless-constructor.md` | flags class constructors that can be safely removed without changing how the class works. |
| `no-useless-escape.md` | flags escapes that can be safely removed without changing behavior. |
| `no-useless-rename.md` | disallows the renaming of import, export, and destructured assignments to the same name. |
| `no-useless-return.md` | aims to report redundant `return` statements. |
| `no-var.md` | is aimed at discouraging the use of `var` and encouraging the use of `const` or `let` instead. |
| `no-void.md` | aims to eliminate use of `void` operator. |
| `no-warning-comments.md` | reports comments that include any of the predefined terms specified in its configuration. |
| `no-whitespace-before-property.md` | disallows whitespace around the dot or before the opening bracket before properties of objects if they are on the same line. |
| `no-with.md` | disallows `with` statements. |
| `no-wrap-func.md` | will raise a warning when it encounters a function expression wrapped in parentheses with no following invoking parentheses. |
| `nonblock-statement-body-position.md` | aims to enforce a consistent location for single-line statements. |
| `object-curly-newline.md` | requires or disallows a line break between `{` and its following token, and between `}` and its preceding token of object literals or... |
| `object-curly-spacing.md` | enforces consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers. |
| `object-property-newline.md` | makes it possible to ensure, as some style guides require, that property specifications appear on separate lines for better readability. |
| `object-shorthand.md` | enforces the use of the shorthand syntax. |
| `one-var-declaration-per-line.md` | enforces a consistent newlines around variable declarations. |
| `one-var.md` | enforces variables to be declared either together or separately per function ( for `var`) or block (for `let`, `const`, `using`, and... |
| `operator-assignment.md` | requires or disallows assignment operator shorthand where possible. |
| `operator-linebreak.md` | enforces a consistent linebreak style for operators. |
| `padded-blocks.md` | enforces consistent empty line padding within blocks. |
| `padding-line-between-statements.md` | does nothing if no configurations are provided. |
| `prefer-arrow-callback.md` | locates function expressions used as callbacks or function arguments. |
| `prefer-const.md` | is aimed at flagging variables that are declared using the `let` keyword, but never reassigned after the initial assignment. |
| `prefer-destructuring.md` | enforces the use of ES6 destructuring to extract values from arrays and objects in variable declarations and assignment expressions,... |
| `prefer-exponentiation-operator.md` | disallows calls to `Math.pow` and suggests using the `**` operator instead. |
| `prefer-named-capture-group.md` | With the landing of ECMAScript 2018, named capture groups can be used in regular expressions, which can improve their readability. |
| `prefer-numeric-literals.md` | disallows calls to `parseInt()` or `Number.parseInt()` if called with two arguments: |
| `prefer-object-has-own.md` | Examples of **incorrect** code for this rule: |
| `prefer-object-spread.md` | Examples of **incorrect** code for this rule: |
| `prefer-promise-reject-errors.md` | aims to ensure that Promises are only rejected with `Error` objects. |
| `prefer-reflect.md` | The `exceptions` option allows you to pass an array of methods names you'd like to continue to use in the old style. |
| `prefer-regex-literals.md` | disallows the use of the `RegExp` constructor function with string literals as its arguments. |
| `prefer-rest-params.md` | is aimed to flag usage of `arguments` variables. |
| `prefer-spread.md` | is aimed to flag usage of `Function.prototype.apply()` in situations where spread syntax could be used instead. |
| `prefer-template.md` | is aimed to flag usage of `+` operators with strings. |
| `preserve-caught-error.md` | enforces the use of the `cause` property when throwing a new error inside a `catch` block. |
| `quote-props.md` | requires quotes around object literal property names. |
| `quotes.md` | enforces the consistent use of either backticks, double, or single quotes. |
| `radix.md` | is aimed at preventing the unintended conversion of a string to a number of a different base than intended. |
| `require-atomic-updates.md` | aims to report assignments to variables or properties in cases where the assignments may be based on outdated values. |
| `require-await.md` | warns async functions which have no `await` expression. |
| `require-jsdoc.md` | requires JSDoc comments for specified nodes. |
| `require-unicode-regexp.md` | aims to enforce the use of `u` or `v` flag on regular expressions. |
| `require-yield.md` | generates warnings for generator functions that do not have the `yield` keyword. |
| `rest-spread-spacing.md` | aims to enforce consistent spacing between rest and spread operators and their expressions. |
| `semi-spacing.md` | aims to enforce spacing around a semicolon. |
| `semi-style.md` | reports line terminators around semicolons. |
| `semi.md` | enforces consistent use of semicolons. |
| `sort-imports.md` | checks all `import` declarations and verifies that all imports are first sorted by the used member syntax and then alphabetically by the... |
| `sort-keys.md` | checks all property definitions of object expressions and verifies that all variables are sorted alphabetically. |
| `sort-vars.md` | checks all variable declaration blocks and verifies that all variables are sorted alphabetically. |
| `space-after-function-name.md` | aims to enforce a consistent spacing after function names. |
| `space-after-keywords.md` | will enforce consistency of spacing after the keywords `if`, `else`, `for`, `while`, `do`, `switch`, `try`, `catch`, `finally`, and `with`. |
| `space-before-blocks.md` | will enforce consistency of spacing before blocks. |
| `space-before-function-paren.md` | aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn't match the preferences... |
| `space-before-function-parentheses.md` | aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn't match the preferences... |
| `space-before-keywords.md` | will enforce consistency of spacing before the keywords `if`, `else`, `for`, `while`, `do`, `switch`, `throw`, `try`, `catch`,... |
| `space-in-brackets.md` | aims to maintain consistency around the spacing inside of square brackets, either by disallowing spaces inside of brackets between the... |
| `space-in-parens.md` | will enforce consistent spacing directly inside of parentheses, by disallowing or requiring one or more spaces to the right of `(` and... |
| `space-infix-ops.md` | is aimed at ensuring there are spaces around infix operators. |
| `space-return-throw-case.md` | Examples of **incorrect** code for this rule: |
| `space-unary-ops.md` | enforces consistency regarding the spaces after `words` unary operators and after/before `nonwords` unary operators. |
| `space-unary-word-ops.md` | Examples of **incorrect** code for this rule: |
| `spaced-comment.md` | will enforce consistency of spacing after the start of a comment `//` or `/*`. |
| `spaced-line-comment.md` | will enforce consistency of spacing after the start of a line comment `//`. |
| `strict.md` | requires or disallows strict mode directives. |
| `switch-colon-spacing.md` | controls spacing around colons of `case` and `default` clauses in `switch` statements. |
| `symbol-description.md` | This rules requires a description when creating symbols. |
| `template-curly-spacing.md` | aims to maintain consistency around the spacing inside of template literals. |
| `template-tag-spacing.md` | aims to maintain consistency around the spacing between template tag functions and their template literals. |
| `unicode-bom.md` | If the `"always"` option is used, this rule requires that files always begin with the Unicode BOM character U+FEFF. |
| `use-isnan.md` | disallows comparisons to `NaN`. |
| `valid-jsdoc.md` | enforces valid and consistent JSDoc comments. |
| `valid-typeof.md` | enforces comparing `typeof` expressions to valid string literals. |
| `vars-on-top.md` | aims to keep all variable declarations in the leading series of statements. |
| `wrap-iife.md` | requires all immediately-invoked function expressions to be wrapped in parentheses. |
| `wrap-regex.md` | This is used to disambiguate the slash operator and facilitates more readable code. |
| `yield-star-spacing.md` | enforces spacing around the `*` in `yield*` expressions. |
| `yoda.md` | aims to enforce consistent style of conditions which compare a variable to a literal value. |
