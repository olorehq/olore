# Biome Table of Contents

## Directory Map

```
contents/en/
├── analyzer/  # Suppression comments (1 files)
├── assist/  # Assist actions (organize imports, sorting) and per-language actions (33 files)
├── configuration/  # Configuring Biome, VCS, big projects (4 files)
├── formatter/  # Formatter overview and options (1 files)
├── guides/  # Guides (slowness, publishing packages) (2 files)
├── installation/  # Install, quick start, migration, v2 upgrade (4 files)
├── internals/  # Architecture, philosophy, versioning (3 files)
├── introduction/  # Why Biome, comparison, language support (3 files)
├── linter/  # Linter overview, domains, plugins, per-language rules (866 files)
├── recipes/  # CI, git hooks, GritQL plugins, badges, Renovate (5 files)
├── reference/  # CLI, configuration, diagnostics, GritQL, LSP, editors (7 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install / first run | `contents/en/installation/quick-start.mdx` |
| Migrate from ESLint/Prettier | `contents/en/installation/migrate-from-other-tools.mdx` |
| Configuration reference | `contents/en/reference/configuration.mdx` |
| CLI commands | `contents/en/reference/cli.mdx` |
| Linter overview | `contents/en/linter/index.mdx` |
| Rules for JavaScript | `contents/en/linter/javascript/rules.mdx` |
| A specific lint rule | `contents/en/linter/rules/{rule-name}/` |
| Formatter | `contents/en/formatter/index.mdx` |
| CI / git hooks | `contents/en/recipes/` |

## Detailed Structure

### en/analyzer/ (1 files)

| File |
|------|
| `suppressions.mdx` |

### en/assist/ (2 files)

| File |
|------|
| `index.mdx` |
| `rules-sources.mdx` |

### en/assist/actions/no-duplicate-classes/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/assist/actions/organize-imports/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/assist/actions/use-graphql-sorted-arguments/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/assist/actions/use-graphql-sorted-definitions/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/assist/actions/use-graphql-sorted-variables/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/assist/actions/use-sorted-attributes/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/assist/actions/use-sorted-enum-members/ (2 files)

| File |
|------|
| `graphql.mdx` |
| `javascript.mdx` |

### en/assist/actions/use-sorted-interface-members/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/assist/actions/use-sorted-keys/ (2 files)

| File |
|------|
| `javascript.mdx` |
| `json.mdx` |

### en/assist/actions/use-sorted-package-json/ (1 files)

| File |
|------|
| `json.mdx` |

### en/assist/actions/use-sorted-properties/ (1 files)

| File |
|------|
| `css.mdx` |

### en/assist/actions/use-sorted-selection-set/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/assist/actions/use-sorted-type-fields/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/assist/css/ (2 files)

| File |
|------|
| `actions.mdx` |
| `sources.mdx` |

### en/assist/graphql/ (2 files)

| File |
|------|
| `actions.mdx` |
| `sources.mdx` |

### en/assist/html/ (2 files)

| File |
|------|
| `actions.mdx` |
| `sources.mdx` |

### en/assist/javascript/ (2 files)

| File |
|------|
| `actions.mdx` |
| `sources.mdx` |

### en/assist/json/ (2 files)

| File |
|------|
| `actions.mdx` |
| `sources.mdx` |

### en/assist/markdown/ (2 files)

| File |
|------|
| `actions.mdx` |
| `sources.mdx` |

### en/assist/yaml/ (2 files)

| File |
|------|
| `actions.mdx` |
| `sources.mdx` |

### en/configuration/ (4 files)

| File |
|------|
| `big-projects.mdx` |
| `configure-biome.mdx` |
| `editors.mdx` |
| `integrate-with-vcs.mdx` |

### en/formatter/ (1 files)

| File |
|------|
| `index.mdx` |

### en/guides/ (2 files)

| File |
|------|
| `investigate-slowness.mdx` |
| `publish-packages.mdx` |

### en/installation/ (4 files)

| File |
|------|
| `install-biome.mdx` |
| `migrate-from-other-tools.mdx` |
| `quick-start.mdx` |
| `upgrade-to-biome-v2.mdx` |

### en/internals/ (3 files)

| File |
|------|
| `architecture.mdx` |
| `philosophy.mdx` |
| `versioning.mdx` |

### en/introduction/ (3 files)

| File |
|------|
| `comparison-with-other-tools.mdx` |
| `language-support.mdx` |
| `why-biome.mdx` |

### en/linter/ (4 files)

| File |
|------|
| `domains.mdx` |
| `index.mdx` |
| `plugins.mdx` |
| `rules-sources.mdx` |

### en/linter/css/ (2 files)

| File |
|------|
| `rules.mdx` |
| `sources.mdx` |

### en/linter/graphql/ (2 files)

| File |
|------|
| `rules.mdx` |
| `sources.mdx` |

### en/linter/html/ (2 files)

| File |
|------|
| `rules.mdx` |
| `sources.mdx` |

### en/linter/javascript/ (2 files)

| File |
|------|
| `rules.mdx` |
| `sources.mdx` |

### en/linter/json/ (2 files)

| File |
|------|
| `rules.mdx` |
| `sources.mdx` |

### en/linter/markdown/ (2 files)

| File |
|------|
| `rules.mdx` |
| `sources.mdx` |

### en/linter/rules/ (767 rule directories)

Each directory is one lint rule (`{rule-name}/`). Rule names:

`no-access-key`, `no-accidental-bitwise-operators`, `no-accumulating-spread`, `no-adjacent-spaces-in-regex`, `no-alert`, `no-ambiguous-anchor-text`, `no-approximative-numeric-constant`, `no-arguments`, `no-arguments-caller-or-callee`, `no-aria-hidden-on-focusable`, `no-aria-unsupported-elements`, `no-array-for-each`, `no-array-index-key`, `no-array-methods-on-arguments`, `no-array-sort-for-min-max`, `no-assign-in-expressions`, `no-astro-conflicting-set-directives`, `no-astro-set-html-directive`, `no-async-promise-executor`, `no-autofocus`, `no-await-in-loops`, `no-await-in-promise-methods`, `no-banned-types`, `no-barrel-file`, `no-base-to-string`, `no-before-interactive-script-outside-document`, `no-biome-first-exception`, `no-bitwise-operators`, `no-blank-target`, `no-boolean-sort-comparator`, `no-bun-modules`, `no-catch-assign`, `no-chained-comparison`, `no-children-prop`, `no-class-assign`, `no-comma-operator`, `no-comment-text`, `no-common-js`, `no-compare-neg-zero`, `no-component-hook-factories`, `no-conditional-expect`, `no-confusing-labels`, `no-confusing-void-type`, `no-console`, `no-console-spaces`, `no-const-assign`, `no-const-enum`, `no-constant-binary-expressions`, `no-constant-comparisons`, `no-constant-condition`, `no-constant-math-min-max-clamp`, `no-constructor-return`, `no-continue`, `no-control-characters-in-regex`, `no-dangerously-set-inner-html`, `no-dangerously-set-inner-html-with-children`, `no-dangling-underscore`, `no-debugger`, `no-default-export`, `no-delete`, `no-deprecated-imports`, `no-deprecated-media-type`, `no-descending-specificity`, `no-distracting-elements`, `no-div-regex`, `no-document-cookie`, `no-document-import-in-page`, `no-done-callback`, `no-double-comparison`, `no-double-equals`, `no-drizzle-delete-without-where`, `no-drizzle-update-without-where`, `no-duplicate-argument-names`, `no-duplicate-at-import-rules`, `no-duplicate-attributes`, `no-duplicate-case`, `no-duplicate-class-members`, `no-duplicate-custom-properties`, `no-duplicate-dependencies`, `no-duplicate-else-if`, `no-duplicate-enum-value-names`, `no-duplicate-enum-values`, `no-duplicate-field-definition-names`, `no-duplicate-fields`, `no-duplicate-font-names`, `no-duplicate-graphql-operation-name`, `no-duplicate-input-field-names`, `no-duplicate-jsx-props`, `no-duplicate-map-keys`, `no-duplicate-object-keys`, `no-duplicate-parameters`, `no-duplicate-properties`, `no-duplicate-selectors`, `no-duplicate-selectors-keyframe-block`, `no-duplicate-test-hooks`, `no-duplicate-variable-names`, `no-duplicated-spread-props`, `no-dynamic-delete`, `no-dynamic-namespace-import-access`, `no-eager-array-methods-in-loops`, `no-empty-block`, `no-empty-block-statements`, `no-empty-character-class-in-regex`, `no-empty-interface`, `no-empty-object-keys`, `no-empty-pattern`, `no-empty-source`, `no-empty-type-parameters`, `no-enum`, `no-equals-to-null`, `no-erasing-operation`, `no-evolving-types`, `no-excessive-classes-per-file`, `no-excessive-cognitive-complexity`, `no-excessive-lines-per-file`, `no-excessive-lines-per-function`, `no-excessive-nested-blocks`, `no-excessive-nested-callbacks`, `no-excessive-nested-test-suites`, `no-excessive-selector-classes`, `no-excessive-statements-per-function`, `no-explicit-any`, `no-exported-imports`, `no-exports-in-test`, `no-extend-native`, `no-extra-boolean-cast`, `no-extra-non-null-assertion`, `no-fallthrough-switch-clause`, `no-flat-map-identity`, `no-floating-promises`, `no-focused-tests`, `no-for-each`, `no-for-in`, `no-function-assign`, `no-global-assign`, `no-global-dirname-filename`, `no-global-eval`, `no-global-is-finite`, `no-global-is-nan`, `no-global-object-calls`, `no-head-element`, `no-head-import-in-document`, `no-header-scope`, `no-hex-colors`, `no-identical-test-title`, `no-img-element`, `no-implicit-any-let`, `no-implicit-boolean`, `no-implicit-coercions`, `no-implied-eval`, `no-import-assign`, `no-import-cycles`, `no-important-in-keyframe`, `no-important-styles`, `no-increment-decrement`, `no-inferrable-types`, `no-inline-styles`, `no-inner-declarations`, `no-interactive-element-to-noninteractive-role`, `no-invalid-builtin-instantiation`, `no-invalid-constructor-super`, `no-invalid-direction-in-linear-gradient`, `no-invalid-file-input-accept`, `no-invalid-grid-areas`, `no-invalid-position-at-import-rule`, `no-invalid-property-init-value`, `no-invalid-remove-event-listener`, `no-invalid-this`, `no-invalid-use-before-declaration`, `no-irregular-whitespace`, `no-js-restricted-properties`, `no-json-unsafe-values`, `no-jsx-leaked-dollar`, `no-jsx-literals`, `no-jsx-namespace`, `no-jsx-props-bind`, `no-label-var`, `no-label-without-control`, `no-late-event-control`, `no-leaked-render`, `no-loop-func`, `no-magic-array-flat-depth`, `no-magic-numbers`, `no-map-spread`, `no-meaningless-void-operator`, `no-misleading-character-class`, `no-misleading-instantiator`, `no-misleading-return-type`, `no-mismatched-map-key`, `no-misplaced-assertion`, `no-misplaced-list-elements`, `no-misrefactored-shorthand-assign`, `no-missing-scss-interpolation`, `no-missing-throw`, `no-missing-var-function`, `no-misused-promises`, `no-multi-assign`, `no-multiline-string`, `no-namespace`, `no-namespace-import`, `no-negated-array-predicate`, `no-negation-else`, `no-negation-in-equality-check`, `no-nested-component-definitions`, `no-nested-promises`, `no-nested-switch`, `no-nested-template-literals`, `no-nested-ternary`, `no-new-require`, `no-next-async-client-component`, `no-nodejs-modules`, `no-non-null-asserted-optional-chain`, `no-non-null-assertion`, `no-non-scalable-viewport`, `no-noninteractive-element-interactions`, `no-noninteractive-element-to-interactive-role`, `no-noninteractive-tabindex`, `no-nonoctal-decimal-escape`, `no-null`, `no-number-argument-out-of-range`, `no-object-constructor`, `no-object-literal-comparison`, `no-obsolete-attributes`, `no-obsolete-tags`, `no-octal`, `no-octal-escape`, `no-parameter-assign`, `no-parameter-properties`, `no-parameters-only-used-in-recursion`, `no-path-concat`, `no-playwright-element-handle`, `no-playwright-eval`, `no-playwright-force-option`, `no-playwright-missing-await`, `no-playwright-networkidle`, `no-playwright-nth-methods`, `no-playwright-page-pause`, `no-playwright-unsafe-references`, `no-playwright-useless-await`, `no-playwright-wait-for-navigation`, `no-playwright-wait-for-selector`, `no-playwright-wait-for-timeout`, `no-positive-tabindex`, `no-precision-loss`, `no-private-imports`, `no-process-env`, `no-process-exit`, `no-process-global`, `no-promise-executor-return`, `no-proto`, `no-prototype-builtins`, `no-pseudo-element-in-functional-pseudo-class`, `no-quickfix-biome`, `no-qwik-use-visible-task`, `no-re-export-all`, `no-react-forward-ref`, `no-react-native-deep-imports`, `no-react-native-literal-colors`, `no-react-native-raw-text`, `no-react-object-type-as-default-prop`, `no-react-prop-assignments`, `no-react-specific-props`, `no-react-string-refs`, `no-redeclare`, `no-redundant-alt`, `no-redundant-default-export`, `no-redundant-roles`, `no-redundant-use-strict`, `no-render-return-value`, `no-restricted-dependencies`, `no-restricted-elements`, `no-restricted-globals`, `no-restricted-imports`, `no-restricted-types`, `no-return-array-push`, `no-return-assign`, `no-return-in-finally`, `no-root-type`, `no-script-url`, `no-secrets`, `no-self-assign`, `no-self-compare`, `no-self-import`, `no-self-nested-layer`, `no-setter-return`, `no-shadow`, `no-shadow-restricted-names`, `no-shared-branch-code`, `no-short-time-values`, `no-shorthand-property-overrides`, `no-shouty-constants`, `no-single-promise-in-promise-methods`, `no-skipped-tests`, `no-solid-destructured-props`, `no-sparse-array`, `no-static-element-interactions`, `no-static-only-class`, `no-string-case-mismatch`, `no-substr`, `no-subtraction-comparison`, `no-suspicious-semicolon-in-jsx`, `no-svelte-add-event-listener`, `no-svelte-at-debug-tags`, `no-svelte-at-html-tags`, `no-svelte-bind-value-on-checkable-inputs`, `no-svelte-class-directive`, `no-svelte-export-let`, `no-svelte-ignored-unsubscribe`, `no-svelte-inspect`, `no-svelte-internal`, `no-svelte-legacy-const`, `no-svelte-object-in-text-mustaches`, `no-svelte-unnecessary-state-wrap`, `no-svelte-useless-derived-by`, `no-svg-without-title`, `no-switch-declarations`, `no-sync-methods`, `no-sync-scripts`, `no-tailwind-arbitrary-value`, `no-tailwind-legacy-utilities`, `no-tailwind-raw-colors`, `no-tailwind-restyled-components`, `no-tanstack-query-rest-destructuring`, `no-tanstack-query-void-query-fn`, `no-template-curly-in-string`, `no-ternary`, `no-then-property`, `no-this-in-static`, `no-this-outside-of-class`, `no-top-level-literals`, `no-ts-ignore`, `no-unassigned-variables`, `no-undeclared-classes`, `no-undeclared-custom-properties`, `no-undeclared-dependencies`, `no-undeclared-env-vars`, `no-undeclared-variables`, `no-uninvoked-array-callback`, `no-unknown-at-rules`, `no-unknown-attribute`, `no-unknown-function`, `no-unknown-media-feature-name`, `no-unknown-property`, `no-unknown-pseudo-class`, `no-unknown-pseudo-element`, `no-unknown-type-selector`, `no-unknown-unit`, `no-unmatchable-anb-selector`, `no-unmodified-loop-condition`, `no-unnecessary-conditions`, `no-unnecessary-string-trim`, `no-unnecessary-template-expression`, `no-unreachable`, `no-unreachable-super`, `no-unreadable-for-of-expression`, `no-unreadable-iife`, `no-unresolved-imports`, `no-unsafe-declaration-merging`, `no-unsafe-finally`, `no-unsafe-iframe-sandbox`, `no-unsafe-negation`, `no-unsafe-optional-chaining`, `no-unsafe-plus-operands`, `no-unsafe-return`, `no-unsafe-type-assertion`, `no-unsafe-unary-minus`, `no-untrusted-licenses`, `no-unused-classes`, `no-unused-expressions`, `no-unused-function-parameters`, `no-unused-imports`, `no-unused-instantiation`, `no-unused-labels`, `no-unused-private-class-members`, `no-unused-template-literal`, `no-unused-variables`, `no-unwanted-polyfillio`, `no-useless-assignment`, `no-useless-await`, `no-useless-call`, `no-useless-catch`, `no-useless-catch-binding`, `no-useless-constructor`, `no-useless-continue`, `no-useless-date-get-time`, `no-useless-else`, `no-useless-empty-export`, `no-useless-escape-in-regex`, `no-useless-escape-in-string`, `no-useless-fragments`, `no-useless-label`, `no-useless-length-check`, `no-useless-lone-block-statements`, `no-useless-recursion`, `no-useless-regex-backrefs`, `no-useless-rename`, `no-useless-return`, `no-useless-splice`, `no-useless-string-concat`, `no-useless-string-raw`, `no-useless-switch-case`, `no-useless-ternary`, `no-useless-this-alias`, `no-useless-type-assertion`, `no-useless-type-constraint`, `no-useless-type-conversion`, `no-useless-undefined`, `no-useless-undefined-initialization`, `no-value-at-rule`, `no-var`, `no-void`, `no-void-elements-with-children`, `no-void-type-return`, `no-vue-arrow-func-in-watch`, `no-vue-boolean-default`, `no-vue-child-content`, `no-vue-computed-properties-in-data`, `no-vue-data-object-declaration`, `no-vue-deprecated-config-key-codes`, `no-vue-deprecated-delete-set`, `no-vue-deprecated-destroyed-lifecycle`, `no-vue-deprecated-events-api`, `no-vue-deprecated-functional-template`, `no-vue-deprecated-html-element-is`, `no-vue-deprecated-inline-template`, `no-vue-deprecated-listeners`, `no-vue-deprecated-model-definition`, `no-vue-deprecated-props-default-this`, `no-vue-deprecated-router-link-tag-prop`, `no-vue-deprecated-scope-attribute`, `no-vue-deprecated-scoped-slots`, `no-vue-deprecated-slot-attribute`, `no-vue-deprecated-slot-scope`, `no-vue-deprecated-v-bind-sync`, `no-vue-deprecated-v-on-native-modifier`, `no-vue-duplicate-keys`, `no-vue-excessive-props`, `no-vue-import-compiler-macros`, `no-vue-lifecycle-after-await`, `no-vue-lone-template`, `no-vue-mixin`, `no-vue-multiple-objects-in-class`, `no-vue-multiple-slot-args`, `no-vue-mutating-props`, `no-vue-options-api`, `no-vue-ref-as-operand`, `no-vue-ref-object-reactivity-loss`, `no-vue-required-prop-with-default`, `no-vue-reserved-keys`, `no-vue-reserved-props`, `no-vue-restricted-call-after-await`, `no-vue-restricted-v-on`, `no-vue-root-v-if`, `no-vue-setup-props-reactivity-loss`, `no-vue-shadow-native-events`, `no-vue-side-effects-in-computed`, `no-vue-template-key`, `no-vue-template-shadow`, `no-vue-textarea-mustache`, `no-vue-this-in-before-route-enter`, `no-vue-this-in-template`, `no-vue-undeclared-directives`, `no-vue-undeclared-emits`, `no-vue-undeclared-properties`, `no-vue-undeclared-slots`, `no-vue-unused-emit-declarations`, `no-vue-unused-refs`, `no-vue-useless-template-attributes`, `no-vue-useless-v-bind`, `no-vue-v-for-template-key-on-child`, `no-vue-v-html`, `no-vue-v-if-with-v-for`, `no-vue-v-on-number-values`, `no-vue-v-text`, `no-vue-v-text-v-html-on-component`, `no-vue-watch-after-await`, `no-with`, `no-xor-as-exponentiation`, `no-yaml-boolean-keys`, `no-yoda-expression`, `no-zero-fractions`, `no-zero-length-unit`, `use-accessor-pairs`, `use-adjacent-overload-signatures`, `use-alt-text`, `use-anchor-content`, `use-aria-activedescendant-with-tabindex`, `use-aria-props-for-role`, `use-aria-props-supported-by-role`, `use-array-find`, `use-array-literals`, `use-array-some`, `use-array-sort-compare`, `use-arrow-function`, `use-as-const-assertion`, `use-astro-client-only-directive-value`, `use-at-index`, `use-await`, `use-await-thenable`, `use-baseline`, `use-better-dom-traversing`, `use-bigint-literals`, `use-biome-ignore-folder`, `use-block-statement-over-iife`, `use-block-statements`, `use-button-type`, `use-capitalized-constructors`, `use-collapsed-else-if`, `use-collapsed-if`, `use-component-export-only-modules`, `use-consistent-array-type`, `use-consistent-arrow-return`, `use-consistent-block-lang`, `use-consistent-builtin-instantiation`, `use-consistent-curly-braces`, `use-consistent-enum-value-type`, `use-consistent-function-style`, `use-consistent-graphql-descriptions`, `use-consistent-heading-level`, `use-consistent-json-file-read`, `use-consistent-lightness-notation`, `use-consistent-member-accessibility`, `use-consistent-method-signatures`, `use-consistent-object-definitions`, `use-consistent-object-keys`, `use-consistent-test-it`, `use-consistent-type-definitions`, `use-consistent-unicode-bom`, `use-const`, `use-control-label`, `use-date-now`, `use-default-parameter-last`, `use-default-switch-clause`, `use-default-switch-clause-last`, `use-deprecated-date`, `use-deprecated-reason`, `use-destructuring`, `use-disposables`, `use-dom-node-text-content`, `use-dom-query-selector`, `use-enum-initializers`, `use-error-cause`, `use-error-message`, `use-exhaustive-dependencies`, `use-exhaustive-switch-cases`, `use-expect`, `use-expect-to-contain`, `use-explicit-length-check`, `use-explicit-return-type`, `use-explicit-type`, `use-exponentiation-operator`, `use-export-type`, `use-exports-last`, `use-fenced-code-language`, `use-filenaming-convention`, `use-flat-map`, `use-flat-math-min-max`, `use-focusable-interactive`, `use-for-of`, `use-fragment-syntax`, `use-generic-font-names`, `use-getter-return`, `use-global-this`, `use-google-font-display`, `use-google-font-preconnect`, `use-graphql-named-operations`, `use-graphql-naming-convention`, `use-grouped-accessor-pairs`, `use-guard-for-in`, `use-heading-content`, `use-hook-at-top-level`, `use-html-lang`, `use-iframe-sandbox`, `use-iframe-title`, `use-image-size`, `use-import-extensions`, `use-import-type`, `use-imports-first`, `use-includes`, `use-index-of`, `use-inline-script-id`, `use-input-name`, `use-is-array`, `use-is-nan`, `use-iterable-callback-return`, `use-iterator-zip`, `use-json-import-attributes`, `use-jsx-key-in-iterable`, `use-key-with-click-events`, `use-key-with-mouse-events`, `use-layered-styles`, `use-literal-enum-members`, `use-literal-keys`, `use-logical-properties`, `use-lone-anonymous-operation`, `use-lone-executable-definition`, `use-lowercase-test-title`, `use-matching-function-name`, `use-math-abs`, `use-math-min-max`, `use-math-trunc`, `use-max-params`, `use-media-caption`, `use-modern-math-apis`, `use-named-capture-group`, `use-named-function`, `use-named-layer`, `use-namespace-keyword`, `use-naming-convention`, `use-next-script-for-google-analytics`, `use-node-assert-strict`, `use-nodejs-import-protocol`, `use-nullish-coalescing`, `use-number-namespace`, `use-number-to-fixed-digits-argument`, `use-numeric-literals`, `use-numeric-separators`, `use-object-from-entries`, `use-object-spread`, `use-optional-chain`, `use-package-json-cpu`, `use-package-json-engines`, `use-package-json-valid-cpu`, `use-package-json-valid-engines`, `use-parse-int-radix`, `use-playwright-valid-describe-callback`, `use-promise-reject-errors`, `use-qwik-classlist`, `use-qwik-loader-location`, `use-qwik-method-usage`, `use-qwik-valid-lexical-scope`, `use-react-async-server-function`, `use-react-compiler`, `use-react-function-component-definition`, `use-react-function-components`, `use-react-naming-convention`, `use-react-native-platform-components`, `use-react-native-valid-platform-colors`, `use-readonly-class-properties`, `use-reduce-type-parameter`, `use-regex-literals`, `use-regexp-exec`, `use-regexp-test`, `use-required-scripts`, `use-scoped-styles`, `use-self-closing-elements`, `use-semantic-elements`, `use-set-size`, `use-shorthand-assign`, `use-shorthand-function-type`, `use-simple-number-keys`, `use-simplified-boolean-return`, `use-simplified-logic-expression`, `use-single-js-doc-asterisk`, `use-single-top-level-heading`, `use-single-var-declarator`, `use-solid-for-component`, `use-spread-over-apply`, `use-static-response-methods`, `use-strict-boolean-expressions`, `use-strict-mode`, `use-string-starts-ends-with`, `use-svelte-event-dispatcher-types`, `use-svelte-kit-resolve`, `use-svelte-kit-rune-imports`, `use-svelte-reactive-classes`, `use-svelte-require-each-key`, `use-svelte-shorthand-directive`, `use-svelte-store-initial-value`, `use-symbol-description`, `use-tailwind-shorthand-classes`, `use-tailwind-sorted-classes`, `use-tailwind-static-class-strings`, `use-tailwind-variables-shorthand`, `use-tanstack-query-infinite-query-property-order`, `use-tanstack-query-stable-query-client`, `use-template`, `use-test-hooks-in-order`, `use-test-hooks-on-top`, `use-this-in-class-methods`, `use-throw-new-error`, `use-throw-only-error`, `use-top-level-heading`, `use-top-level-regex`, `use-trim-start-end`, `use-unary-minus`, `use-unicode-regex`, `use-unified-type-signatures`, `use-unique-element-ids`, `use-valid-anchor`, `use-valid-aria-props`, `use-valid-aria-role`, `use-valid-aria-values`, `use-valid-autocomplete`, `use-valid-for-direction`, `use-valid-lang`, `use-valid-test-title`, `use-valid-typeof`, `use-vars-on-top`, `use-vue-base-import`, `use-vue-block-order`, `use-vue-boolean-prop-type-first`, `use-vue-component-is`, `use-vue-computed-property-return`, `use-vue-consistent-boolean-prop-style`, `use-vue-consistent-define-emits-declaration`, `use-vue-consistent-define-props-declaration`, `use-vue-consistent-event-hyphenation`, `use-vue-consistent-prop-name-casing`, `use-vue-consistent-v-bind-style`, `use-vue-consistent-v-for-delimiter`, `use-vue-consistent-v-on-style`, `use-vue-consistent-v-slot-style`, `use-vue-default-export`, `use-vue-default-prop`, `use-vue-define-macros-order`, `use-vue-define-options`, `use-vue-define-props-destructuring`, `use-vue-emit-validator`, `use-vue-emits-validator-return`, `use-vue-hyphenated-attributes`, `use-vue-macro-variable-name`, `use-vue-matching-component-file-name`, `use-vue-multi-word-component-names`, `use-vue-next-tick-promise`, `use-vue-one-component-per-file`, `use-vue-prop-type-constructor`, `use-vue-render-return`, `use-vue-separate-static-class`, `use-vue-single-event-payload`, `use-vue-slot-name-casing`, `use-vue-slots-as-functions`, `use-vue-template-ref`, `use-vue-toggle-inside-transition`, `use-vue-typed-object-props`, `use-vue-typed-props`, `use-vue-typed-ref`, `use-vue-v-for-key`, `use-vue-v-model`, `use-vue-v-on-exact`, `use-vue-valid-attribute-name`, `use-vue-valid-default-prop`, `use-vue-valid-define-emits`, `use-vue-valid-define-options`, `use-vue-valid-define-props`, `use-vue-valid-next-tick`, `use-vue-valid-template-root`, `use-vue-valid-v-bind`, `use-vue-valid-v-cloak`, `use-vue-valid-v-else`, `use-vue-valid-v-else-if`, `use-vue-valid-v-for`, `use-vue-valid-v-html`, `use-vue-valid-v-if`, `use-vue-valid-v-is`, `use-vue-valid-v-memo`, `use-vue-valid-v-model`, `use-vue-valid-v-on`, `use-vue-valid-v-once`, `use-vue-valid-v-pre`, `use-vue-valid-v-show`, `use-vue-valid-v-slot`, `use-vue-valid-v-text`, `use-vue-vapor`, `use-while`, `use-while-loop-condition`, `use-yield`

### en/linter/rules/no-access-key/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-accidental-bitwise-operators/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-accumulating-spread/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-adjacent-spaces-in-regex/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-alert/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-ambiguous-anchor-text/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-approximative-numeric-constant/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-arguments/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-arguments-caller-or-callee/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-aria-hidden-on-focusable/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-aria-unsupported-elements/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-array-for-each/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-array-index-key/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-array-methods-on-arguments/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-array-sort-for-min-max/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-assign-in-expressions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-astro-conflicting-set-directives/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-astro-set-html-directive/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-async-promise-executor/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-autofocus/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-await-in-loops/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-await-in-promise-methods/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-banned-types/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-barrel-file/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-base-to-string/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-before-interactive-script-outside-document/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-biome-first-exception/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/no-bitwise-operators/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-blank-target/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-boolean-sort-comparator/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-bun-modules/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-catch-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-chained-comparison/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-children-prop/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-class-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-comma-operator/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-comment-text/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-common-js/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-compare-neg-zero/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-component-hook-factories/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-conditional-expect/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-confusing-labels/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-confusing-void-type/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-console/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-console-spaces/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-const-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-const-enum/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-constant-binary-expressions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-constant-comparisons/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-constant-condition/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-constant-math-min-max-clamp/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-constructor-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-continue/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-control-characters-in-regex/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-dangerously-set-inner-html/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-dangerously-set-inner-html-with-children/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-dangling-underscore/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-debugger/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-default-export/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-delete/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-deprecated-imports/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-deprecated-media-type/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-descending-specificity/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-distracting-elements/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-div-regex/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-document-cookie/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-document-import-in-page/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-done-callback/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-double-comparison/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-double-equals/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-drizzle-delete-without-where/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-drizzle-update-without-where/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-duplicate-argument-names/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/no-duplicate-at-import-rules/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-duplicate-attributes/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-duplicate-case/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-duplicate-class-members/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-duplicate-custom-properties/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-duplicate-dependencies/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/no-duplicate-else-if/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-duplicate-enum-value-names/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/no-duplicate-enum-values/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-duplicate-field-definition-names/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/no-duplicate-fields/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/no-duplicate-font-names/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-duplicate-graphql-operation-name/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/no-duplicate-input-field-names/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/no-duplicate-jsx-props/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-duplicate-map-keys/ (1 files)

| File |
|------|
| `yaml.mdx` |

### en/linter/rules/no-duplicate-object-keys/ (2 files)

| File |
|------|
| `javascript.mdx` |
| `json.mdx` |

### en/linter/rules/no-duplicate-parameters/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-duplicate-properties/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-duplicate-selectors/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-duplicate-selectors-keyframe-block/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-duplicate-test-hooks/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-duplicate-variable-names/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/no-duplicated-spread-props/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-dynamic-delete/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-dynamic-namespace-import-access/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-eager-array-methods-in-loops/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-empty-block/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-empty-block-statements/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-empty-character-class-in-regex/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-empty-interface/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-empty-object-keys/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/no-empty-pattern/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-empty-source/ (5 files)

| File |
|------|
| `css.mdx` |
| `graphql.mdx` |
| `javascript.mdx` |
| `markdown.mdx` |
| `yaml.mdx` |

### en/linter/rules/no-empty-type-parameters/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-enum/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-equals-to-null/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-erasing-operation/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-evolving-types/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-excessive-classes-per-file/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-excessive-cognitive-complexity/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-excessive-lines-per-file/ (4 files)

| File |
|------|
| `css.mdx` |
| `graphql.mdx` |
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-excessive-lines-per-function/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-excessive-nested-blocks/ (2 files)

| File |
|------|
| `css.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-excessive-nested-callbacks/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-excessive-nested-test-suites/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-excessive-selector-classes/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-excessive-statements-per-function/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-explicit-any/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-exported-imports/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-exports-in-test/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-extend-native/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-extra-boolean-cast/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-extra-non-null-assertion/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-fallthrough-switch-clause/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-flat-map-identity/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-floating-promises/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-focused-tests/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-for-each/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-for-in/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-function-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-global-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-global-dirname-filename/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-global-eval/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-global-is-finite/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-global-is-nan/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-global-object-calls/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-head-element/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-head-import-in-document/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-header-scope/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-hex-colors/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-identical-test-title/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-img-element/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-implicit-any-let/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-implicit-boolean/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-implicit-coercions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-implied-eval/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-import-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-import-cycles/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-important-in-keyframe/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-important-styles/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-increment-decrement/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-inferrable-types/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-inline-styles/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-inner-declarations/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-interactive-element-to-noninteractive-role/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-invalid-builtin-instantiation/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-invalid-constructor-super/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-invalid-direction-in-linear-gradient/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-invalid-file-input-accept/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-invalid-grid-areas/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-invalid-position-at-import-rule/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-invalid-property-init-value/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-invalid-remove-event-listener/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-invalid-this/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-invalid-use-before-declaration/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-irregular-whitespace/ (2 files)

| File |
|------|
| `css.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-js-restricted-properties/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-json-unsafe-values/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/no-jsx-leaked-dollar/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-jsx-literals/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-jsx-namespace/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-jsx-props-bind/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-label-var/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-label-without-control/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-late-event-control/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-leaked-render/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-loop-func/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-magic-array-flat-depth/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-magic-numbers/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-map-spread/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-meaningless-void-operator/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-misleading-character-class/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-misleading-instantiator/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-misleading-return-type/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-mismatched-map-key/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-misplaced-assertion/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-misplaced-list-elements/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-misrefactored-shorthand-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-missing-scss-interpolation/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-missing-throw/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-missing-var-function/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-misused-promises/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-multi-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-multiline-string/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-namespace/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-namespace-import/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-negated-array-predicate/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-negation-else/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-negation-in-equality-check/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-nested-component-definitions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-nested-promises/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-nested-switch/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-nested-template-literals/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-nested-ternary/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-new-require/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-next-async-client-component/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-nodejs-modules/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-non-null-asserted-optional-chain/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-non-null-assertion/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-non-scalable-viewport/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-noninteractive-element-interactions/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-noninteractive-element-to-interactive-role/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-noninteractive-tabindex/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-nonoctal-decimal-escape/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-null/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-number-argument-out-of-range/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-object-constructor/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-object-literal-comparison/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-obsolete-attributes/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-obsolete-tags/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-octal/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-octal-escape/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-parameter-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-parameter-properties/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-parameters-only-used-in-recursion/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-path-concat/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-element-handle/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-eval/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-force-option/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-missing-await/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-networkidle/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-nth-methods/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-page-pause/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-unsafe-references/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-useless-await/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-wait-for-navigation/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-wait-for-selector/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-playwright-wait-for-timeout/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-positive-tabindex/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-precision-loss/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-private-imports/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-process-env/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-process-exit/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-process-global/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-promise-executor-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-proto/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-prototype-builtins/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-pseudo-element-in-functional-pseudo-class/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-quickfix-biome/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/no-qwik-use-visible-task/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-re-export-all/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-react-forward-ref/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-react-native-deep-imports/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-react-native-literal-colors/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-react-native-raw-text/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-react-object-type-as-default-prop/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-react-prop-assignments/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-react-specific-props/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-react-string-refs/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-redeclare/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-redundant-alt/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-redundant-default-export/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-redundant-roles/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-redundant-use-strict/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-render-return-value/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-restricted-dependencies/ (2 files)

| File |
|------|
| `javascript.mdx` |
| `json.mdx` |

### en/linter/rules/no-restricted-elements/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-restricted-globals/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-restricted-imports/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-restricted-types/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-return-array-push/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-return-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-return-in-finally/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-root-type/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/no-script-url/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-secrets/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-self-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-self-compare/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-self-import/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-self-nested-layer/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-setter-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-shadow/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-shadow-restricted-names/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-shared-branch-code/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-short-time-values/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-shorthand-property-overrides/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-shouty-constants/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-single-promise-in-promise-methods/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-skipped-tests/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-solid-destructured-props/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-sparse-array/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-static-element-interactions/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-static-only-class/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-string-case-mismatch/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-substr/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-subtraction-comparison/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-suspicious-semicolon-in-jsx/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-svelte-add-event-listener/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-svelte-at-debug-tags/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-svelte-at-html-tags/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-svelte-bind-value-on-checkable-inputs/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-svelte-class-directive/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-svelte-export-let/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-svelte-ignored-unsubscribe/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-svelte-inspect/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-svelte-internal/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-svelte-legacy-const/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-svelte-object-in-text-mustaches/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-svelte-unnecessary-state-wrap/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-svelte-useless-derived-by/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-svg-without-title/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-switch-declarations/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-sync-methods/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-sync-scripts/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-tailwind-arbitrary-value/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-tailwind-legacy-utilities/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-tailwind-raw-colors/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-tailwind-restyled-components/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-tanstack-query-rest-destructuring/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-tanstack-query-void-query-fn/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-template-curly-in-string/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-ternary/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-then-property/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-this-in-static/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-this-outside-of-class/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-top-level-literals/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/no-ts-ignore/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unassigned-variables/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-undeclared-classes/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-undeclared-custom-properties/ (3 files)

| File |
|------|
| `css.mdx` |
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-undeclared-dependencies/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-undeclared-env-vars/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-undeclared-variables/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-uninvoked-array-callback/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unknown-at-rules/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-unknown-attribute/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unknown-function/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-unknown-media-feature-name/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-unknown-property/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-unknown-pseudo-class/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-unknown-pseudo-element/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-unknown-type-selector/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-unknown-unit/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-unmatchable-anb-selector/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-unmodified-loop-condition/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unnecessary-conditions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unnecessary-string-trim/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unnecessary-template-expression/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unreachable/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unreachable-super/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unreadable-for-of-expression/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unreadable-iife/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unresolved-imports/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unsafe-declaration-merging/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unsafe-finally/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unsafe-iframe-sandbox/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-unsafe-negation/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unsafe-optional-chaining/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unsafe-plus-operands/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unsafe-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unsafe-type-assertion/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unsafe-unary-minus/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-untrusted-licenses/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/no-unused-classes/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-unused-expressions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unused-function-parameters/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unused-imports/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unused-instantiation/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unused-labels/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unused-private-class-members/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unused-template-literal/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unused-variables/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-unwanted-polyfillio/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-assignment/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-await/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-call/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-catch/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-catch-binding/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-constructor/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-continue/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-date-get-time/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-else/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-empty-export/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-escape-in-regex/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-escape-in-string/ (2 files)

| File |
|------|
| `css.mdx` |
| `javascript.mdx` |

### en/linter/rules/no-useless-fragments/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-label/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-length-check/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-lone-block-statements/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-recursion/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-regex-backrefs/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-rename/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-splice/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-string-concat/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-string-raw/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-switch-case/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-ternary/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-this-alias/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-type-assertion/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-type-constraint/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-type-conversion/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-undefined/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-useless-undefined-initialization/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-value-at-rule/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/no-var/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-void/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-void-elements-with-children/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-void-type-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-arrow-func-in-watch/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-boolean-default/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-child-content/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-computed-properties-in-data/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-data-object-declaration/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-deprecated-config-key-codes/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-deprecated-delete-set/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-deprecated-destroyed-lifecycle/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-deprecated-events-api/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-deprecated-functional-template/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-deprecated-html-element-is/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-deprecated-inline-template/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-deprecated-listeners/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-deprecated-model-definition/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-deprecated-props-default-this/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-deprecated-router-link-tag-prop/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-deprecated-scope-attribute/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-deprecated-scoped-slots/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-deprecated-slot-attribute/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-deprecated-slot-scope/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-deprecated-v-bind-sync/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-deprecated-v-on-native-modifier/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-duplicate-keys/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-excessive-props/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-import-compiler-macros/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-lifecycle-after-await/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-lone-template/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-mixin/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-multiple-objects-in-class/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-multiple-slot-args/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-mutating-props/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-options-api/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-ref-as-operand/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-ref-object-reactivity-loss/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-required-prop-with-default/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-reserved-keys/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-reserved-props/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-restricted-call-after-await/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-restricted-v-on/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-root-v-if/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-setup-props-reactivity-loss/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-shadow-native-events/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-side-effects-in-computed/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-template-key/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-template-shadow/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-textarea-mustache/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-this-in-before-route-enter/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-this-in-template/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-undeclared-directives/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-undeclared-emits/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-undeclared-properties/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-undeclared-slots/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-unused-emit-declarations/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-vue-unused-refs/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-useless-template-attributes/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-useless-v-bind/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-v-for-template-key-on-child/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-v-html/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-v-if-with-v-for/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-v-on-number-values/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-v-text/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-v-text-v-html-on-component/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/no-vue-watch-after-await/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-with/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-xor-as-exponentiation/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-yaml-boolean-keys/ (1 files)

| File |
|------|
| `yaml.mdx` |

### en/linter/rules/no-yoda-expression/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-zero-fractions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/no-zero-length-unit/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/use-accessor-pairs/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-adjacent-overload-signatures/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-alt-text/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-anchor-content/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-aria-activedescendant-with-tabindex/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-aria-props-for-role/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-aria-props-supported-by-role/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-array-find/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-array-literals/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-array-some/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-array-sort-compare/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-arrow-function/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-as-const-assertion/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-astro-client-only-directive-value/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-at-index/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-await/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-await-thenable/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-baseline/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/use-better-dom-traversing/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-bigint-literals/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-biome-ignore-folder/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/use-block-statement-over-iife/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-block-statements/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-button-type/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-capitalized-constructors/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-collapsed-else-if/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-collapsed-if/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-component-export-only-modules/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-array-type/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-arrow-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-block-lang/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-consistent-builtin-instantiation/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-curly-braces/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-enum-value-type/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-function-style/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-graphql-descriptions/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/use-consistent-heading-level/ (1 files)

| File |
|------|
| `markdown.mdx` |

### en/linter/rules/use-consistent-json-file-read/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-lightness-notation/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/use-consistent-member-accessibility/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-method-signatures/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-object-definitions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-object-keys/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/use-consistent-test-it/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-type-definitions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-consistent-unicode-bom/ (6 files)

| File |
|------|
| `css.mdx` |
| `graphql.mdx` |
| `html.mdx` |
| `javascript.mdx` |
| `json.mdx` |
| `markdown.mdx` |

### en/linter/rules/use-const/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-control-label/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-date-now/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-default-parameter-last/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-default-switch-clause/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-default-switch-clause-last/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-deprecated-date/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/use-deprecated-reason/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/use-destructuring/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-disposables/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-dom-node-text-content/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-dom-query-selector/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-enum-initializers/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-error-cause/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-error-message/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-exhaustive-dependencies/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-exhaustive-switch-cases/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-expect/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-expect-to-contain/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-explicit-length-check/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-explicit-return-type/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-explicit-type/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-exponentiation-operator/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-export-type/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-exports-last/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-fenced-code-language/ (1 files)

| File |
|------|
| `markdown.mdx` |

### en/linter/rules/use-filenaming-convention/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-flat-map/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-flat-math-min-max/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-focusable-interactive/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-for-of/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-fragment-syntax/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-generic-font-names/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/use-getter-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-global-this/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-google-font-display/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-google-font-preconnect/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-graphql-named-operations/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/use-graphql-naming-convention/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/use-grouped-accessor-pairs/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-guard-for-in/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-heading-content/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-hook-at-top-level/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-html-lang/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-iframe-sandbox/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-iframe-title/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-image-size/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-import-extensions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-import-type/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-imports-first/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-includes/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-index-of/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-inline-script-id/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-input-name/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/use-is-array/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-is-nan/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-iterable-callback-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-iterator-zip/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-json-import-attributes/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-jsx-key-in-iterable/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-key-with-click-events/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-key-with-mouse-events/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-layered-styles/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/use-literal-enum-members/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-literal-keys/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-logical-properties/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/use-lone-anonymous-operation/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/use-lone-executable-definition/ (1 files)

| File |
|------|
| `graphql.mdx` |

### en/linter/rules/use-lowercase-test-title/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-matching-function-name/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-math-abs/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-math-min-max/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-math-trunc/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-max-params/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-media-caption/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-modern-math-apis/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-named-capture-group/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-named-function/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-named-layer/ (1 files)

| File |
|------|
| `css.mdx` |

### en/linter/rules/use-namespace-keyword/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-naming-convention/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-next-script-for-google-analytics/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-node-assert-strict/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-nodejs-import-protocol/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-nullish-coalescing/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-number-namespace/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-number-to-fixed-digits-argument/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-numeric-literals/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-numeric-separators/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-object-from-entries/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-object-spread/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-optional-chain/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-package-json-cpu/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/use-package-json-engines/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/use-package-json-valid-cpu/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/use-package-json-valid-engines/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/use-parse-int-radix/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-playwright-valid-describe-callback/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-promise-reject-errors/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-qwik-classlist/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-qwik-loader-location/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-qwik-method-usage/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-qwik-valid-lexical-scope/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-react-async-server-function/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-react-compiler/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-react-function-component-definition/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-react-function-components/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-react-naming-convention/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-react-native-platform-components/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-react-native-valid-platform-colors/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-readonly-class-properties/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-reduce-type-parameter/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-regex-literals/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-regexp-exec/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-regexp-test/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-required-scripts/ (1 files)

| File |
|------|
| `json.mdx` |

### en/linter/rules/use-scoped-styles/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-self-closing-elements/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-semantic-elements/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-set-size/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-shorthand-assign/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-shorthand-function-type/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-simple-number-keys/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-simplified-boolean-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-simplified-logic-expression/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-single-js-doc-asterisk/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-single-top-level-heading/ (1 files)

| File |
|------|
| `markdown.mdx` |

### en/linter/rules/use-single-var-declarator/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-solid-for-component/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-spread-over-apply/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-static-response-methods/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-strict-boolean-expressions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-strict-mode/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-string-starts-ends-with/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-svelte-event-dispatcher-types/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-svelte-kit-resolve/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-svelte-kit-rune-imports/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-svelte-reactive-classes/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-svelte-require-each-key/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-svelte-shorthand-directive/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-svelte-store-initial-value/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-symbol-description/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-tailwind-shorthand-classes/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-tailwind-sorted-classes/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-tailwind-static-class-strings/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-tailwind-variables-shorthand/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-tanstack-query-infinite-query-property-order/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-tanstack-query-stable-query-client/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-template/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-test-hooks-in-order/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-test-hooks-on-top/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-this-in-class-methods/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-throw-new-error/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-throw-only-error/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-top-level-heading/ (1 files)

| File |
|------|
| `markdown.mdx` |

### en/linter/rules/use-top-level-regex/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-trim-start-end/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-unary-minus/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-unicode-regex/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-unified-type-signatures/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-unique-element-ids/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-valid-anchor/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-valid-aria-props/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-valid-aria-role/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-valid-aria-values/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-valid-autocomplete/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-valid-for-direction/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-valid-lang/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-valid-test-title/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-valid-typeof/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vars-on-top/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-base-import/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-block-order/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-boolean-prop-type-first/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-component-is/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-computed-property-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-consistent-boolean-prop-style/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-consistent-define-emits-declaration/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-consistent-define-props-declaration/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-consistent-event-hyphenation/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-consistent-prop-name-casing/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-consistent-v-bind-style/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-consistent-v-for-delimiter/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-consistent-v-on-style/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-consistent-v-slot-style/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-default-export/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-default-prop/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-define-macros-order/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-define-options/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-define-props-destructuring/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-emit-validator/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-emits-validator-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-hyphenated-attributes/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-macro-variable-name/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-matching-component-file-name/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-multi-word-component-names/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-next-tick-promise/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-one-component-per-file/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-prop-type-constructor/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-render-return/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-separate-static-class/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-single-event-payload/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-slot-name-casing/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-slots-as-functions/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-template-ref/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-toggle-inside-transition/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-typed-object-props/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-typed-props/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-typed-ref/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-v-for-key/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-v-model/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-v-on-exact/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-attribute-name/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-default-prop/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-valid-define-emits/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-valid-define-options/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-valid-define-props/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-valid-next-tick/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-vue-valid-template-root/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-bind/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-cloak/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-else/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-else-if/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-for/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-html/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-if/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-is/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-memo/ (2 files)

| File |
|------|
| `html.mdx` |
| `javascript.mdx` |

### en/linter/rules/use-vue-valid-v-model/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-on/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-once/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-pre/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-show/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-slot/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-valid-v-text/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-vue-vapor/ (1 files)

| File |
|------|
| `html.mdx` |

### en/linter/rules/use-while/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-while-loop-condition/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/rules/use-yield/ (1 files)

| File |
|------|
| `javascript.mdx` |

### en/linter/yaml/ (2 files)

| File |
|------|
| `rules.mdx` |
| `sources.mdx` |

### en/recipes/ (5 files)

| File |
|------|
| `badges.mdx` |
| `continuous-integration.mdx` |
| `git-hooks.mdx` |
| `gritql-plugins.mdx` |
| `renovate.mdx` |

### en/reference/ (7 files)

| File |
|------|
| `cli.mdx` |
| `configuration.mdx` |
| `diagnostics.mdx` |
| `gritql.mdx` |
| `language-server.mdx` |
| `vscode.mdx` |
| `zed.mdx` |
