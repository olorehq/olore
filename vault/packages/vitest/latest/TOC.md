# vitest Table of Contents

## Directory Map

```
contents/
  ./  (1 files)
  api/  (9 files)
  api/advanced/  (13 files)
  api/browser/  (8 files)
  config/  (87 files)
  config/browser/  (23 files)
  guide/  (30 files)
  guide/advanced/  (5 files)
  guide/browser/  (8 files)
  guide/examples/  (2 files)
  guide/learn/  (9 files)
  guide/migration/  (3 files)
  guide/mocking/  (8 files)
  guide/recipes/  (13 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/guide/index.md` |
| Configuration | `contents/config/index.md` |
| Writing tests | `contents/api/test.md`, `contents/api/expect.md` |
| Mocking | `contents/api/vi.md`, `contents/guide/mocking.md` |
| Browser Mode | `contents/guide/browser/index.md` |
| Coverage | `contents/guide/coverage.md` |
| Migrating from Jest | `contents/guide/migration/jest.md` |
| Troubleshooting | `contents/guide/common-errors.md` |

## Detailed Structure

### ./ (1 files)

| File | Description |
|------|-------------|
| `index.md` | Landing page for the Vitest docs |

### api/ (9 files)

| File | Description |
|------|-------------|
| `assert-type.md` | assertType helper for type-level checks |
| `assert.md` | Chai assert-style API available in Vitest |
| `describe.md` | describe, suite grouping and its modifiers (skip, only, concurrent, each) |
| `expect-typeof.md` | expectTypeOf API for type-level assertions |
| `expect.md` | expect assertions and matchers reference, asymmetric matchers |
| `hooks.md` | beforeEach, afterEach, beforeAll, afterAll, aroundEach and onTestFinished hooks |
| `mock.md` | Mock function API (vi.fn instances): calls, results, implementations |
| `test.md` | test/it API, modifiers, options, test.each, test.extend fixtures |
| `vi.md` | vi utility: mocking modules, timers, spies, env/global stubs, waitFor |

### api/advanced/ (13 files)

| File | Description |
|------|-------------|
| `artifacts.md` | Test artifacts API for attaching files and recordings to test results |
| `import-example.md` | Example of importing and running Vitest programmatically |
| `metadata.md` | Attaching custom metadata to tasks and reading it in reporters |
| `plugin.md` | Plugin API: Vitest hooks available to Vite plugins |
| `reporters.md` | Custom reporter API and the reporter lifecycle hooks |
| `runner.md` | Custom test runner API and VitestRunner interface |
| `test-case.md` | TestCase class: state and results of a single test |
| `test-collection.md` | TestCollection: iterable collection of tests and suites |
| `test-module.md` | TestModule class: a test file and its children |
| `test-project.md` | TestProject class: per-project config, Vite server and provide API |
| `test-specification.md` | TestSpecification: a project and file pair to run |
| `test-suite.md` | TestSuite class: a describe block and its children |
| `vitest.md` | Vitest class API: start, run, rerun and manage tests programmatically |

### api/browser/ (8 files)

| File | Description |
|------|-------------|
| `assertions.md` | Browser Mode assertion matchers for DOM elements (toBeVisible, toHaveTextContent, ...) |
| `commands.md` | Built-in and custom server commands callable from browser tests |
| `context.md` | vitest/browser context: page, server, userEvent and locators |
| `interactivity.md` | userEvent API for clicks, typing, hover and other interactions |
| `locators.md` | Locator API for querying elements by role, text, label and test id |
| `react.md` | Rendering React components with vitest-browser-react |
| `svelte.md` | Rendering Svelte components with vitest-browser-svelte |
| `vue.md` | Rendering Vue components with vitest-browser-vue |

### config/ (87 files)

| File | Description |
|------|-------------|
| `alias.md` | Define custom aliases for module resolution in tests |
| `allowonly.md` | Allow tests marked .only (disabled by default in CI) |
| `api.md` | Configure the Vitest API server port and host |
| `attachmentsdir.md` | Directory for test attachments |
| `bail.md` | Stop running tests after N failures |
| `benchmark.md` | Benchmark mode options |
| `cache.md` | Test cache control |
| `chaiconfig.md` | Chai assertion configuration (stack, diff, truncation) |
| `changed.md` | Run only tests affected by changed files |
| `clearmocks.md` | Auto-clear mock calls before each test |
| `coverage.md` | Coverage provider, reporters, thresholds and include/exclude options |
| `css.md` | Control CSS processing and CSS modules in tests |
| `dangerouslyignoreunhandlederrors.md` | Ignore unhandled errors so the run does not fail |
| `deps.md` | Dependency handling options (optimizer, inline, interop) |
| `detectasyncleaks.md` | Detect leaked async resources |
| `diff.md` | Custom diff output configuration |
| `dir.md` | Base directory for scanning test files |
| `disableconsoleintercept.md` | Disable console output interception |
| `env.md` | Environment variables available during tests |
| `environment.md` | Test environment (node, jsdom, happy-dom, edge-runtime) |
| `environmentoptions.md` | Options passed to the test environment |
| `exclude.md` | Glob patterns to exclude from test discovery |
| `execargv.md` | Extra Node execArgv for workers |
| `expandsnapshotdiff.md` | Expand snapshot diff on failure |
| `expect.md` | Options for expect (poll, requireAssertions) |
| `experimental.md` | Experimental feature flags |
| `faketimers.md` | Default fake timer configuration |
| `fileparallelism.md` | Run test files in parallel or serially |
| `forcereruntriggers.md` | Files that force a full rerun in watch mode |
| `fsmodulecache.md` | Enable on-disk module cache |
| `fsmodulecachepath.md` | Path of the file-system module cache |
| `globals.md` | Expose describe/it/expect as globals |
| `globalsetup.md` | Global setup/teardown files |
| `hideskippedtests.md` | Hide skipped tests in output |
| `hooktimeout.md` | Default timeout for hooks |
| `include-source.md` | Glob for in-source test files |
| `include.md` | Glob patterns for test files |
| `includetasklocation.md` | Include test location in task results |
| `index.md` | Configuring Vitest: config files, defineConfig and overriding Vite config |
| `injectcjsglobals.md` | Inject CJS globals (require, __dirname) into modules |
| `isolate.md` | Run each test file in an isolated environment |
| `logheapusage.md` | Log heap usage after each test |
| `maxconcurrency.md` | Max concurrent tests per file |
| `maxworkers.md` | Maximum number of workers |
| `mockreset.md` | Auto-reset mocks before each test |
| `mode.md` | Vite mode used for tests |
| `name.md` | Project name (for projects/workspaces) |
| `onconsolelog.md` | Callback to filter or handle console logs |
| `onstacktrace.md` | Callback to filter stack trace frames |
| `onunhandlederror.md` | Callback to handle unhandled errors |
| `open.md` | Open the Vitest UI automatically |
| `outputfile.md` | Write reporter output to a file |
| `passwithnotests.md` | Pass when no tests are found |
| `pool.md` | Worker pool (threads, forks, vmThreads, vmForks) |
| `printconsoletrace.md` | Print stack trace for console calls |
| `projects.md` | Define multiple projects in one config |
| `provide.md` | Values provided to tests via inject |
| `repeats.md` | Repeat each test N times |
| `reporters.md` | Reporters to use for output |
| `resolvesnapshotpath.md` | Custom snapshot file path resolver |
| `restoremocks.md` | Restore original implementations before each test |
| `retry.md` | Retry failed tests (count, delay, condition) |
| `root.md` | Project root directory |
| `runner.md` | Custom test runner path |
| `sequence.md` | Test ordering: shuffle, seed, hooks order, sequencer |
| `server.md` | Vite-node server options (deps inline/external) |
| `setupfiles.md` | Files run before each test file |
| `sharedviteserver.md` | Share Vite server across projects |
| `silent.md` | Suppress console output |
| `slowtestthreshold.md` | Threshold (ms) to flag slow tests |
| `snapshotenvironment.md` | Custom snapshot environment |
| `snapshotformat.md` | pretty-format options for snapshots |
| `snapshotserializers.md` | Custom snapshot serializers |
| `stricttags.md` | Fail on undefined test tags |
| `tags.md` | Define test tags and their options |
| `tasktitlevalueformattruncate.md` | Truncate formatted values in test titles |
| `teardowntimeout.md` | Timeout for teardown |
| `testnamepattern.md` | Run only tests matching a name pattern |
| `testtimeout.md` | Default test timeout |
| `typecheck.md` | Type testing options (checker, include, tsconfig) |
| `ui.md` | Enable the Vitest UI |
| `unstubenvs.md` | Auto-restore stubbed env vars |
| `unstubglobals.md` | Auto-restore stubbed globals |
| `update.md` | Update snapshots |
| `vmmemorylimit.md` | Memory limit for VM pools |
| `watch.md` | Watch mode toggle |
| `watchtriggerpatterns.md` | Map changed files to tests to rerun |

### config/browser/ (23 files)

| File | Description |
|------|-------------|
| `commands.md` | Custom browser commands |
| `connecttimeout.md` | Timeout for browser connection |
| `dependencysourcemaps.md` | Source maps for browser dependencies |
| `detailspanelposition.md` | Position of the details panel in the UI |
| `enabled.md` | Enable Browser Mode |
| `expect.md` | Browser-specific expect options |
| `headless.md` | Run browser headless |
| `importmapmocks.md` | Use import maps for module mocks |
| `instances.md` | Browser instances (browser name and per-instance options) |
| `locators.md` | Locator options such as test id attribute |
| `orchestratorscripts.md` | Custom scripts injected into the orchestrator page |
| `playwright.md` | Playwright provider options |
| `preview.md` | Preview provider options |
| `provider.md` | Browser provider selection (playwright, webdriverio, preview) |
| `screenshotdirectory.md` | Where screenshots are stored |
| `screenshotfailures.md` | Capture screenshots on failure |
| `testerhtmlpath.md` | Custom tester HTML path |
| `trace.md` | Playwright trace recording mode |
| `traceview.md` | Trace viewer options |
| `trackunhandlederrors.md` | Track unhandled errors in the browser |
| `ui.md` | Show Vitest UI in browser |
| `viewport.md` | Default viewport size |
| `webdriverio.md` | WebdriverIO provider options |

### guide/ (30 files)

| File | Description |
|------|-------------|
| `benchmarking.md` | Benchmarking with bench and CLI options |
| `cli-generated.md` | Generated list of all CLI options |
| `cli.md` | CLI commands and options |
| `common-errors.md` | Common errors and fixes |
| `comparisons.md` | Comparison with Jest, Mocha, Playwright and others |
| `coverage.md` | Coverage setup, providers and thresholds |
| `debugging.md` | Debugging tests in IDEs and Node inspector |
| `environment.md` | Test environments and per-file environment |
| `extending-matchers.md` | Adding custom matchers |
| `features.md` | Feature overview |
| `filtering.md` | Filtering tests by name, file and tag |
| `ide.md` | IDE integrations (VS Code, JetBrains) |
| `improving-performance.md` | Tips for faster test runs |
| `in-source.md` | In-source testing |
| `index.md` | Getting started: install, first test, running |
| `lifecycle.md` | Test run lifecycle |
| `mocking.md` | Mocking overview |
| `open-telemetry.md` | OpenTelemetry tracing support |
| `parallelism.md` | Parallelism and concurrency |
| `profiling-test-performance.md` | Profiling test performance |
| `projects.md` | Test projects (multi-config) guide |
| `reporters.md` | Built-in reporters |
| `snapshot.md` | Snapshot testing |
| `test-annotations.md` | Test annotations |
| `test-context.md` | Test context and fixtures |
| `test-tags.md` | Test tags |
| `testing-types.md` | Testing types |
| `ui.md` | Vitest UI |
| `using-plugins.md` | Using plugins |
| `why.md` | Why Vitest |

### guide/advanced/ (5 files)

| File | Description |
|------|-------------|
| `benchmark-provider.md` | Writing a custom benchmark provider |
| `index.md` | Advanced API overview: running Vitest from Node |
| `pool.md` | Writing a custom pool |
| `reporters.md` | Writing custom reporters |
| `tests.md` | Programmatically running and inspecting tests |

### guide/browser/ (8 files)

| File | Description |
|------|-------------|
| `aria-snapshots.md` | ARIA snapshot assertions in Browser Mode |
| `component-testing.md` | Component testing in Browser Mode |
| `index.md` | Browser Mode setup and overview |
| `multiple-setups.md` | Multiple browser setups and projects |
| `playwright-traces.md` | Recording Playwright traces |
| `trace-view.md` | Using the trace view |
| `visual-regression-testing.md` | Visual regression with screenshots |
| `why.md` | Why and when to use Browser Mode |

### guide/examples/ (2 files)

| File | Description |
|------|-------------|
| `projects-workspace.md` | Example projects/workspace setup |
| `promise-done.md` | Example of migrating done callbacks to promises |

### guide/learn/ (9 files)

| File | Description |
|------|-------------|
| `async.md` | Testing asynchronous code |
| `debugging-tests.md` | Debugging failing tests |
| `matchers.md` | Using matchers |
| `mock-functions.md` | Mock functions tutorial |
| `setup-teardown.md` | Setup and teardown hooks |
| `snapshots.md` | Snapshot testing tutorial |
| `testing-in-practice.md` | Applying testing in real projects |
| `writing-tests-with-ai.md` | Writing tests with AI tools |
| `writing-tests.md` | Writing your first tests |

### guide/migration/ (3 files)

| File | Description |
|------|-------------|
| `index.md` | Migrating between Vitest versions |
| `jest.md` | Migrating from Jest |
| `mocha.md` | Migrating from Mocha, Chai and Sinon |

### guide/mocking/ (8 files)

| File | Description |
|------|-------------|
| `classes.md` | Mocking classes |
| `dates.md` | Mocking dates |
| `file-system.md` | Mocking the file system |
| `functions.md` | Mocking functions |
| `globals.md` | Mocking globals |
| `modules.md` | Mocking modules |
| `requests.md` | Mocking network requests |
| `timers.md` | Mocking timers |

### guide/recipes/ (13 files)

| File | Description |
|------|-------------|
| `affected-tests.md` | Running only affected tests |
| `browser-locators.md` | Extending browser locators |
| `cancellable.md` | Cancellable test resources |
| `conditional-mocking.md` | Conditional mocking with vi.when |
| `custom-assertions.md` | Custom assertion helpers |
| `db-transaction.md` | Database transaction per test |
| `disable-isolation.md` | Per-file isolation settings |
| `explicit-resources.md` | Auto-cleanup with using |
| `parallel-sequential.md` | Parallel and sequential test files |
| `schema-matching.md` | Schema-driven assertions |
| `type-narrowing.md` | Type narrowing in tests |
| `wait-for.md` | Waiting for async conditions |
| `watch-templates.md` | Watching non-imported files |
