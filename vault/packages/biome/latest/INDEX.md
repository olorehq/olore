# biome Documentation Index
519 files | Paths relative to contents/
@start:install,setup,quickstart,getting-started,init=guides/getting-started.mdx;manual-installation,standalone,binary=guides/manual-installation.mdx;upgrade,v2,migration=guides/upgrade-to-biome-v2.mdx
@config:biome.json,biome.jsonc,configure,extends,overrides,files,ignore=guides/configure-biome.mdx;configuration,$schema,formatter,linter,assist,vcs,organizeImports=reference/configuration.mdx
@cli:biome,check,lint,format,ci,init,migrate,start,stop,rage,search,explain,clean,lsp-proxy,--write,--stdin-filepath=reference/cli.mdx;reporters,json-reporter,github-reporter=reference/reporters.mdx
@formatter:format,--write,printWidth,indentStyle,indentWidth,lineWidth,quoteStyle,semicolons,trailingCommas=formatter/index.mdx
@linter:lint,rules,recommended,nursery,domains,plugins,drizzle,react,next=linter/index.mdx;domains,drizzle=linter/domains.mdx;plugins=linter/plugins.mdx
@rules-index:javascript-rules,typescript-rules=linter/javascript/rules.mdx;css-rules=linter/css/rules.mdx;json-rules=linter/json/rules.mdx;graphql-rules=linter/graphql/rules.mdx;html-rules=linter/html/rules.mdx
@lint-rules:noUnusedVariables,noConsole,noDebugger,noAlert,noBannedTypes,noExplicitAny,noUnsafeAny,noArray,noArguments=linter/rules/;useConst,useArrowFunction,useTemplate,useOptionalChain,useSelfClosingElements=linter/rules/
@lint-rules-no:no-access-key,no-accumulating-spread,no-alert,no-arguments,no-array-index-key,no-assign-in-expressions,no-async-promise-executor,no-autofocus,no-await-in-loops,no-banned-types,no-bitwise-operators,no-catch-assign,no-class-assign,no-comma-operator,no-common-js,no-compare-neg-zero=linter/rules/
@lint-rules-use:use-array-some,use-arrow-function,use-as-const-assertion,use-at-index,use-await,use-block-statements,use-const,use-default-parameter-last,use-export-type,use-flat-map,use-import-type,use-key-with-click-events,use-optional-chain,use-strict-mode,use-template=linter/rules/
@suppressions:biome-ignore,biome-ignore-all,biome-ignore-start,biome-ignore-end,suppression-comments,disable-rule=analyzer/suppressions.mdx
@assist:organize-imports,import-sorting,useSortedKeys,useSortedAttributes,useSortedProperties,useSortedInterfaceMembers,noDuplicateClasses=assist/index.mdx;organize-imports=assist/actions/organize-imports.mdx;sorted-keys=assist/actions/use-sorted-keys.mdx;sorted-attributes=assist/actions/use-sorted-attributes.mdx
@migrate:migrate-eslint,migrate-prettier,eslint,prettier,--write=guides/migrate-eslint-prettier.mdx;biome-migrate,migrate-eslint,migrate-prettier=reference/cli.mdx
@editors:vscode,zed,first-party-extensions=guides/editors/first-party-extensions.mdx;third-party-extensions,neovim,helix,jetbrains=guides/editors/third-party-extensions.mdx;vscode-reference=reference/vscode.mdx;zed-reference=reference/zed.mdx
@integration:git-hooks,pre-commit,husky,lint-staged=recipes/git-hooks.mdx;ci,github-actions,continuous-integration=recipes/continuous-integration.mdx;renovate=recipes/renovate.mdx;vcs,git=guides/integrate-in-vcs.mdx
@reference:language-support,javascript,typescript,jsx,tsx,json,css,graphql,html=internals/language-support.mdx;diagnostics,errors,warnings=reference/diagnostics.mdx;versioning,pinning=internals/versioning.mdx;gritql,search-patterns=reference/gritql.mdx
