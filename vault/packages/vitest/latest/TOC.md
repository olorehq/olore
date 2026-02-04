# Vitest Table of Contents

## Directory Map

```
contents/
├── guide/              # User guides and tutorials (31 files)
│   ├── mocking/        # Mocking strategies (8 files)
│   ├── advanced/       # Advanced features (4 files)
│   ├── browser/        # Browser mode (6 files)
│   └── examples/       # Code examples (2 files)
├── api/                # API reference (9 files)
│   ├── advanced/       # Advanced APIs (13 files)
│   └── browser/        # Browser APIs (5 files)
└── config/             # Configuration reference (79 files)
    └── browser/        # Browser config (22 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/guide/index.md` |
| Writing tests | `contents/guide/features.md` |
| API reference | `contents/api/test.md`, `contents/api/expect.md` |
| Configuration | `contents/config/index.md` |
| Mocking | `contents/guide/mocking.md` |
| Coverage | `contents/guide/coverage.md` |
| Debugging | `contents/guide/debugging.md` |

## Detailed Structure

### guide/ (31 files)

| File | Description |
|------|-------------|
| `index.md` | Getting started guide |
| `features.md` | Core testing features |
| `cli.md` | Command-line interface |
| `cli-generated.md` | Auto-generated CLI reference |
| `common-errors.md` | Common errors and solutions |
| `comparisons.md` | Comparison with other test frameworks |
| `coverage.md` | Code coverage setup |
| `debugging.md` | Debugging tests |
| `environment.md` | Test environments |
| `extending-matchers.md` | Custom matchers |
| `filtering.md` | Test filtering |
| `ide.md` | IDE integration |
| `improving-performance.md` | Performance optimization |
| `in-source.md` | In-source testing |
| `lifecycle.md` | Test lifecycle hooks |
| `migration.md` | Migration guide |
| `mocking.md` | Mocking overview |
| `parallelism.md` | Parallel test execution |
| `profiling-test-performance.md` | Performance profiling |
| `projects.md` | Multi-project workspaces |
| `recipes.md` | Common recipes |
| `reporters.md` | Test reporters |
| `snapshot.md` | Snapshot testing |
| `test-context.md` | Test context API |
| `ui.md` | UI mode |
| `why.md` | Why Vitest |
| `workspace.md` | Workspace configuration |

### guide/mocking/ (8 files)

| File | Description |
|------|-------------|
| `classes.md` | Mocking classes |
| `dates.md` | Mocking dates |
| `file-system.md` | Mocking file system |
| `functions.md` | Mocking functions |
| `globals.md` | Mocking globals |
| `modules.md` | Mocking modules |
| `requests.md` | Mocking HTTP requests |
| `timers.md` | Mocking timers |

### guide/advanced/ (4 files)

| File | Description |
|------|-------------|
| `index.md` | Advanced features overview |
| `pool.md` | Pool configuration |
| `reporters.md` | Custom reporters |
| `tests.md` | Advanced test patterns |

### guide/browser/ (6 files)

| File | Description |
|------|-------------|
| `context.md` | Browser test context |
| `index.md` | Browser mode overview |
| `interactivity.md` | Browser interactivity API |
| `locators.md` | Element locators |
| `trace-view.md` | Trace viewer |
| `why.md` | Why browser mode |

### guide/examples/ (2 files)

| File | Description |
|------|-------------|
| `index.md` | Examples overview |
| `puppeteer.md` | Puppeteer examples |

### api/ (9 files)

| File | Description |
|------|-------------|
| `assert-type.md` | Type assertion API |
| `assert.md` | Assertion API |
| `describe.md` | Test suite API |
| `expect-typeof.md` | Type expectation API |
| `expect.md` | Expectation API |
| `hooks.md` | Lifecycle hooks API |
| `mock.md` | Mock API |
| `test.md` | Test API |
| `vi.md` | Vitest utility API |

### api/advanced/ (13 files)

| File | Description |
|------|-------------|
| `benchmark.md` | Benchmark API |
| `custom-matchers.md` | Custom matcher types |
| `custom-pool.md` | Custom pool implementation |
| `custom-reporter.md` | Custom reporter API |
| `inline-snapshot-environment.md` | Snapshot environment API |
| `parse-ast.md` | AST parsing utilities |
| `public-api.md` | Public API exports |
| `runner-task.md` | Task runner API |
| `serializer.md` | Snapshot serializer API |
| `suite-hooks.md` | Suite-level hooks |
| `task-state.md` | Task state API |
| `test-suite-api.md` | Test suite internals |
| `vitest-node.md` | Node.js API |

### api/browser/ (5 files)

| File | Description |
|------|-------------|
| `commands.md` | Browser commands API |
| `context.md` | Browser context API |
| `interactivity.md` | Interactivity API |
| `locators.md` | Locators API |
| `screenshot.md` | Screenshot API |

### config/ (79 files)

Configuration reference for all Vitest options including:
- Test execution settings
- Coverage configuration
- Environment settings
- Reporter options
- Browser mode settings
- Workspace configuration
- Plugin options

See `contents/config/index.md` for complete configuration reference.

### config/browser/ (22 files)

Browser-specific configuration options for browser mode testing.
