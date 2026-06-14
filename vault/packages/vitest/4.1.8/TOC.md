# vitest Table of Contents

## Directory Map

```
contents/
├── api/                        # Core test API (9 files)
│   ├── advanced/               # Advanced runner/plugin APIs (13 files)
│   └── browser/                # Browser mode APIs (8 files)
├── config/                     # Configuration options (80 files)
│   └── browser/                # Browser config options (22 files)
└── guide/                      # Guides and tutorials (28 files)
    ├── advanced/               # Advanced usage (4 files)
    ├── browser/                # Browser mode guides (7 files)
    ├── examples/               # Code examples (2 files)
    ├── learn/                  # Learning tutorials (8 files)
    └── mocking/                # Mocking guides by topic (8 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/guide/index.md` |
| API reference | `contents/api/` |
| Config reference | `contents/config/index.md` |
| Mocking | `contents/guide/mocking.md` |
| Browser mode | `contents/guide/browser/index.md` |
| CLI reference | `contents/guide/cli.md` |
| Troubleshooting | `contents/guide/common-errors.md` |

## Detailed Structure

### api/ (9 files)

| File | Description |
|------|-------------|
| `api/test.md` | `test`, `it`, `describe` test definition APIs |
| `api/expect.md` | `expect` matchers reference |
| `api/expect-typeof.md` | `expectTypeOf` type assertion API |
| `api/assert-type.md` | `assertType` type checking API |
| `api/assert.md` | Chai `assert` API |
| `api/describe.md` | `describe` suite grouping API |
| `api/hooks.md` | `beforeAll`, `afterAll`, `beforeEach`, `afterEach` hooks |
| `api/mock.md` | Mock instance API (`MockInstance`) |
| `api/vi.md` | `vi` utility object — mocking, timers, spies |

### api/advanced/ (13 files)

| File | Description |
|------|-------------|
| `api/advanced/vitest.md` | `Vitest` programmatic node API |
| `api/advanced/runner.md` | Custom test runner API |
| `api/advanced/reporters.md` | Custom reporter API |
| `api/advanced/plugin.md` | Vitest plugin API |
| `api/advanced/artifacts.md` | Test artifact API |
| `api/advanced/metadata.md` | Test metadata API |
| `api/advanced/test-module.md` | `TestModule` class reference |
| `api/advanced/test-suite.md` | `TestSuite` class reference |
| `api/advanced/test-case.md` | `TestCase` class reference |
| `api/advanced/test-collection.md` | `TestCollection` class reference |
| `api/advanced/test-project.md` | `TestProject` class reference |
| `api/advanced/test-specification.md` | `TestSpecification` class reference |
| `api/advanced/import-example.md` | Advanced import usage example |

### api/browser/ (8 files)

| File | Description |
|------|-------------|
| `api/browser/locators.md` | Browser locator API |
| `api/browser/interactivity.md` | Browser interaction API (click, type, etc.) |
| `api/browser/assertions.md` | Browser-specific assertions |
| `api/browser/context.md` | Browser context API |
| `api/browser/commands.md` | Browser commands API |
| `api/browser/react.md` | React component testing utilities |
| `api/browser/vue.md` | Vue component testing utilities |
| `api/browser/svelte.md` | Svelte component testing utilities |

### config/ (80 files)

| File | Description |
|------|-------------|
| `config/index.md` | Config overview and setup |
| `config/include.md` | `include` — test file patterns |
| `config/exclude.md` | `exclude` — exclusion patterns |
| `config/environment.md` | `environment` — jsdom, node, etc. |
| `config/globals.md` | `globals` — enable global test functions |
| `config/setupfiles.md` | `setupFiles` — setup file paths |
| `config/globalsetup.md` | `globalSetup` — global setup files |
| `config/coverage.md` | `coverage` — coverage configuration |
| `config/reporters.md` | `reporters` — output reporters |
| `config/watch.md` | `watch` — watch mode |
| `config/pool.md` | `pool` — worker pool type |
| `config/deps.md` | `deps` — dependency resolution |
| `config/alias.md` | `alias` — module aliases |
| `config/css.md` | `css` — CSS handling |
| `config/server.md` | `server` — dev server options |
| `config/isolate.md` | `isolate` — test isolation |
| `config/sequence.md` | `sequence` — test ordering |
| `config/testimeout.md` | `testTimeout` — test timeout |
| `config/hooktimeout.md` | `hookTimeout` — hook timeout |
| `config/retry.md` | `retry` — retry on failure |
| `config/bail.md` | `bail` — stop on N failures |
| `config/typecheck.md` | `typecheck` — TypeScript type checking |
| `config/benchmark.md` | `benchmark` — benchmark config |
| `config/snapshot*.md` | Snapshot configuration options |
| `config/faketimers.md` | `fakeTimers` — fake timer options |
| `config/projects.md` | `projects` — multi-project config |
| `config/experimental.md` | Experimental features |
| `config/mode.md` | `mode` — test/benchmark mode |
| `config/root.md` | `root` — project root |
| `config/cache.md` | `cache` — caching options |
| `config/clearmocks.md` | `clearMocks` |
| `config/mockreset.md` | `mockReset` |
| `config/restoremocks.md` | `restoreMocks` |
| `config/unstubenvs.md` | `unstubEnvs` |
| `config/unstubglobals.md` | `unstubGlobals` |
| `config/diff.md` | `diff` — diff output options |
| `config/expect.md` | `expect` — expect config |
| `config/chaiconfig.md` | `chaiConfig` — Chai configuration |
| `config/maxconcurrency.md` | `maxConcurrency` |
| `config/maxworkers.md` | `maxWorkers` |
| `config/fileparallelism.md` | `fileParallelism` |
| `config/allowonly.md` | `allowOnly` — allow `.only` in CI |
| `config/passwithnotests.md` | `passWithNoTests` |
| `config/open.md` | `open` — open UI on start |
| `config/ui.md` | `ui` — Vitest UI config |
| `config/api.md` | `api` — API server config |
| `config/outputfile.md` | `outputFile` |
| `config/reporter-related` | Additional reporter options |

### config/browser/ (22 files)

| File | Description |
|------|-------------|
| `config/browser/enabled.md` | `browser.enabled` |
| `config/browser/provider.md` | `browser.provider` — playwright/webdriverio |
| `config/browser/headless.md` | `browser.headless` |
| `config/browser/instances.md` | `browser.instances` — browser instances |
| `config/browser/api.md` | `browser.api` — server API config |
| `config/browser/isolate.md` | `browser.isolate` |
| `config/browser/viewport.md` | `browser.viewport` |
| `config/browser/locators.md` | `browser.locators` |
| `config/browser/commands.md` | `browser.commands` |
| `config/browser/playwright.md` | `browser.playwright` options |
| `config/browser/webdriverio.md` | `browser.webdriverio` options |
| `config/browser/trace.md` | `browser.trace` |
| `config/browser/ui.md` | `browser.ui` |
| `config/browser/screenshotdirectory.md` | `browser.screenshotDirectory` |
| `config/browser/screenshotfailures.md` | `browser.screenshotFailures` |
| `config/browser/expect.md` | `browser.expect` |
| `config/browser/preview.md` | `browser.preview` |
| `config/browser/connecttimeout.md` | `browser.connectTimeout` |
| `config/browser/trackunhandlederrors.md` | `browser.trackUnhandledErrors` |
| `config/browser/detailspanelposition.md` | `browser.detailsPanelPosition` |
| `config/browser/orchestratorscripts.md` | `browser.orchestratorScripts` |
| `config/browser/testerhtmlpath.md` | `browser.testerHtmlPath` |

### guide/ (28 files)

| File | Description |
|------|-------------|
| `guide/index.md` | Getting started — installation and first test |
| `guide/cli.md` | CLI reference |
| `guide/cli-generated.md` | Auto-generated CLI flag reference |
| `guide/mocking.md` | Mocking overview |
| `guide/snapshot.md` | Snapshot testing |
| `guide/coverage.md` | Code coverage |
| `guide/testing-types.md` | Type-level testing |
| `guide/environment.md` | Test environments (jsdom, happy-dom, etc.) |
| `guide/reporters.md` | Reporters overview |
| `guide/projects.md` | Multi-project (workspace) setup |
| `guide/parallelism.md` | Parallel test execution |
| `guide/filtering.md` | Filtering tests (pattern, tags) |
| `guide/test-tags.md` | Test tagging |
| `guide/test-context.md` | Test context and fixtures |
| `guide/test-annotations.md` | Test annotations |
| `guide/extending-matchers.md` | Custom matchers |
| `guide/in-source.md` | In-source testing |
| `guide/debugging.md` | Debugging tests |
| `guide/common-errors.md` | Common errors and fixes |
| `guide/migration.md` | Migration guide (v3 → v4) |
| `guide/improving-performance.md` | Performance tips |
| `guide/profiling-test-performance.md` | Profiling test performance |
| `guide/ide.md` | IDE integrations |
| `guide/ui.md` | Vitest UI |
| `guide/lifecycle.md` | Test lifecycle |
| `guide/open-telemetry.md` | OpenTelemetry integration |
| `guide/using-plugins.md` | Using Vite plugins |
| `guide/recipes.md` | Common recipes and patterns |

### guide/advanced/ (4 files)

| File | Description |
|------|-------------|
| `guide/advanced/index.md` | Advanced API — programmatic usage |
| `guide/advanced/pool.md` | Custom pool implementation |
| `guide/advanced/reporters.md` | Custom reporter implementation |
| `guide/advanced/tests.md` | Advanced test patterns |

### guide/browser/ (7 files)

| File | Description |
|------|-------------|
| `guide/browser/index.md` | Browser mode setup |
| `guide/browser/why.md` | Why use browser mode |
| `guide/browser/component-testing.md` | Component testing |
| `guide/browser/aria-snapshots.md` | ARIA snapshot testing |
| `guide/browser/visual-regression-testing.md` | Visual regression testing |
| `guide/browser/multiple-setups.md` | Multiple browser configurations |
| `guide/browser/trace-view.md` | Browser trace view |

### guide/examples/ (2 files)

| File | Description |
|------|-------------|
| `guide/examples/projects-workspace.md` | Projects/workspace config example |
| `guide/examples/promise-done.md` | Async done callback migration example |

### guide/learn/ (8 files)

| File | Description |
|------|-------------|
| `guide/learn/writing-tests.md` | Writing your first tests |
| `guide/learn/matchers.md` | Using matchers |
| `guide/learn/mock-functions.md` | Mock functions tutorial |
| `guide/learn/snapshots.md` | Snapshot testing tutorial |
| `guide/learn/async.md` | Testing async code |
| `guide/learn/setup-teardown.md` | Setup and teardown |
| `guide/learn/debugging-tests.md` | Debugging tests tutorial |
| `guide/learn/testing-in-practice.md` | Testing in practice |

### guide/mocking/ (8 files)

| File | Description |
|------|-------------|
| `guide/mocking/functions.md` | Mocking functions |
| `guide/mocking/modules.md` | Mocking modules |
| `guide/mocking/classes.md` | Mocking classes |
| `guide/mocking/globals.md` | Mocking globals |
| `guide/mocking/timers.md` | Mocking timers |
| `guide/mocking/dates.md` | Mocking dates |
| `guide/mocking/requests.md` | Mocking network requests |
| `guide/mocking/file-system.md` | Mocking the file system |
