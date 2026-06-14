# vitest Table of Contents

## Directory Map

```
contents/
├── api/                        # Core API reference (9 files)
│   ├── advanced/               # Advanced programmatic API (13 files)
│   └── browser/                # Browser mode API (8 files)
├── config/                     # Configuration reference (82 files)
│   └── browser/                # Browser config options (23 files)
└── guide/                      # Usage guides and tutorials (28 files)
    ├── advanced/               # Advanced runner/reporter API (4 files)
    ├── browser/                # Browser mode guides (8 files)
    ├── learn/                  # Learning guides and tutorials (8 files)
    ├── mocking/                # Mocking guides (8 files)
    └── recipes/                # Practical recipes (11 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started | `contents/guide/index.md` |
| CLI reference | `contents/guide/cli.md` |
| Configuration overview | `contents/config/index.md` |
| Writing tests | `contents/guide/learn/writing-tests.md` |
| Mocking | `contents/guide/mocking.md` |
| Coverage | `contents/guide/coverage.md` |
| Snapshots | `contents/guide/snapshot.md` |
| Browser mode | `contents/guide/browser/index.md` |
| API: expect | `contents/api/expect.md` |
| API: vi utilities | `contents/api/vi.md` |
| Troubleshooting | `contents/guide/common-errors.md` |

## Detailed Structure

### api/ (9 files)

| File | Description |
|------|-------------|
| `assert-type.md` | assertType API for compile-time type assertions |
| `assert.md` | assert API (Chai assertions) |
| `describe.md` | describe/suite block API |
| `expect-typeof.md` | expectTypeOf API for type testing |
| `expect.md` | expect matchers and assertions |
| `hooks.md` | beforeAll, afterAll, beforeEach, afterEach hooks |
| `mock.md` | Mock instance API (MockInstance) |
| `test.md` | test/it API |
| `vi.md` | vi utility: spyOn, mock, fake timers, stubs |

### api/advanced/ (13 files)

| File | Description |
|------|-------------|
| `artifacts.md` | Test artifacts API |
| `import-example.md` | Example of programmatic API usage |
| `metadata.md` | Task metadata API |
| `plugin.md` | Vitest plugin API |
| `reporters.md` | Custom reporter API |
| `runner.md` | Custom test runner API |
| `test-case.md` | TestCase class reference |
| `test-collection.md` | TestCollection class reference |
| `test-module.md` | TestModule class reference |
| `test-project.md` | TestProject class reference |
| `test-specification.md` | TestSpecification class reference |
| `test-suite.md` | TestSuite class reference |
| `vitest.md` | Vitest programmatic class reference |

### api/browser/ (8 files)

| File | Description |
|------|-------------|
| `assertions.md` | Browser-specific expect matchers |
| `commands.md` | Custom browser commands API |
| `context.md` | Browser test context |
| `interactivity.md` | User event simulation API |
| `locators.md` | Element locator API |
| `react.md` | React component testing utilities |
| `svelte.md` | Svelte component testing utilities |
| `vue.md` | Vue component testing utilities |

### config/ (82 files)

| File | Description |
|------|-------------|
| `index.md` | Configuration overview and vite.config integration |
| `alias.md` | Path alias configuration |
| `allowonly.md` | allowOnly option |
| `api.md` | API server config (host, port) |
| `attachmentsdir.md` | attachmentsDir option |
| `bail.md` | bail option - stop after N failures |
| `benchmark.md` | Benchmark configuration |
| `cache.md` | Cache directory config |
| `chaiconfig.md` | Chai assertion config |
| `clearmocks.md` | clearMocks option |
| `coverage.md` | Coverage provider configuration |
| `css.md` | CSS processing config |
| `dangerouslyignoreunhandlederrors.md` | dangerouslyIgnoreUnhandledErrors option |
| `deps.md` | Dependency transform config |
| `detectasyncleaks.md` | detectAsyncLeaks option |
| `diff.md` | Diff output config |
| `dir.md` | Test directory config |
| `disableconsoleintercept.md` | disableConsoleIntercept option |
| `env.md` | Environment variables config |
| `environment.md` | Test environment (node/jsdom/happy-dom) |
| `environmentoptions.md` | Environment-specific options |
| `exclude.md` | File exclusion patterns |
| `execargv.md` | Node.js execArgv config |
| `expandsnapshotdiff.md` | expandSnapshotDiff option |
| `expect.md` | expect config (timeout, requireAssertions) |
| `experimental.md` | Experimental features config |
| `faketimers.md` | Fake timers config |
| `fileparallelism.md` | fileParallelism option |
| `forcereruntriggers.md` | forceRerunTriggers config |
| `globals.md` | globals option (Jest compatibility) |
| `globalsetup.md` | globalSetup files config |
| `hideskippedtests.md` | hideSkippedTests option |
| `hooktimeout.md` | Hook timeout config |
| `include-source.md` | includeSource config for in-source testing |
| `include.md` | File inclusion patterns |
| `includetasklocation.md` | includeTaskLocation option |
| `isolate.md` | isolate option |
| `logheapusage.md` | logHeapUsage option |
| `maxconcurrency.md` | maxConcurrency option |
| `maxworkers.md` | maxWorkers option |
| `mockreset.md` | mockReset option |
| `mode.md` | Vite mode config |
| `name.md` | Project name config |
| `onconsolelog.md` | onConsoleLog handler config |
| `onstacktrace.md` | onStackTrace handler config |
| `onunhandlederror.md` | onUnhandledError handler config |
| `open.md` | open option (auto-open UI) |
| `outputfile.md` | outputFile config for reporters |
| `passwithnotests.md` | passWithNoTests option |
| `pool.md` | Worker pool config (threads/forks/vmThreads) |
| `printconsoletrace.md` | printConsoleTrace option |
| `projects.md` | Multiple projects/workspaces config |
| `provide.md` | provide context injection config |
| `repeats.md` | repeats option |
| `reporters.md` | Reporters config |
| `resolvesnapshotpath.md` | resolveSnapshotPath function config |
| `restoremocks.md` | restoreMocks option |
| `retry.md` | retry option for flaky tests |
| `root.md` | Root directory config |
| `runner.md` | Custom test runner config |
| `sequence.md` | Test sequence/order config |
| `server.md` | Server config |
| `setupfiles.md` | Setup files config |
| `silent.md` | silent option |
| `slowtestthreshold.md` | slowTestThreshold option |
| `snapshotenvironment.md` | snapshotEnvironment config |
| `snapshotformat.md` | Snapshot format config |
| `snapshotserializers.md` | Custom snapshot serializers |
| `stricttags.md` | strictTags option |
| `tags.md` | Test tags config |
| `tasktitlevalueformattruncate.md` | taskTitleValueFormatTruncate option |
| `teardowntimeout.md` | teardownTimeout option |
| `testnamepattern.md` | testNamePattern config |
| `testtimeout.md` | testTimeout option |
| `typecheck.md` | Type checking config |
| `ui.md` | UI mode config |
| `unstubenvs.md` | unstubEnvs option |
| `unstubglobals.md` | unstubGlobals option |
| `update.md` | update option (snapshot update) |
| `vmmemorylimit.md` | vmMemoryLimit option |
| `watch.md` | watch mode config |
| `watchtriggerpatterns.md` | watchTriggerPatterns config |

### config/browser/ (23 files)

| File | Description |
|------|-------------|
| `api.md` | Browser API server config |
| `commands.md` | Browser commands config |
| `connecttimeout.md` | Browser connect timeout |
| `detailspanelposition.md` | UI details panel position |
| `enabled.md` | Enable browser mode |
| `expect.md` | Browser expect config |
| `headless.md` | Headless mode config |
| `instances.md` | Browser instances config |
| `isolate.md` | Browser test isolation |
| `locators.md` | Browser locators config |
| `orchestratorscripts.md` | Orchestrator scripts config |
| `playwright.md` | Playwright provider config |
| `preview.md` | Preview provider config |
| `provider.md` | Browser provider (playwright/webdriverio) |
| `screenshotdirectory.md` | Screenshot directory config |
| `screenshotfailures.md` | Screenshot on failure config |
| `testerhtmlpath.md` | Custom tester HTML path |
| `trace.md` | Browser trace config |
| `traceview.md` | Trace viewer config |
| `trackunhandlederrors.md` | Track unhandled errors in browser |
| `ui.md` | Browser UI config |
| `viewport.md` | Browser viewport config |
| `webdriverio.md` | WebdriverIO provider config |

### guide/ (28 files)

| File | Description |
|------|-------------|
| `index.md` | Getting started / introduction |
| `benchmarking.md` | Benchmarking with Vitest |
| `cli-generated.md` | Generated CLI reference |
| `cli.md` | CLI usage and options |
| `common-errors.md` | Common errors and troubleshooting |
| `coverage.md` | Code coverage setup and configuration |
| `debugging.md` | Debugging tests |
| `environment.md` | Test environments (jsdom, happy-dom, node) |
| `extending-matchers.md` | Custom matchers with expect.extend |
| `filtering.md` | Filtering tests (only, skip, tags) |
| `ide.md` | IDE integration (VS Code, JetBrains) |
| `improving-performance.md` | Performance tuning |
| `in-source.md` | In-source testing |
| `lifecycle.md` | Test lifecycle |
| `migration.md` | Migration guide (from Jest, from older Vitest) |
| `mocking.md` | Mocking overview |
| `open-telemetry.md` | OpenTelemetry integration |
| `parallelism.md` | Parallel test execution |
| `profiling-test-performance.md` | Profiling test performance |
| `projects.md` | Multi-project (workspace) setup |
| `reporters.md` | Built-in reporters |
| `snapshot.md` | Snapshot testing |
| `test-annotations.md` | Test annotations API |
| `test-context.md` | Test context and fixtures |
| `test-tags.md` | Test tags |
| `testing-types.md` | Type-level testing |
| `ui.md` | Vitest UI mode |
| `using-plugins.md` | Using Vitest plugins |

### guide/advanced/ (4 files)

| File | Description |
|------|-------------|
| `index.md` | Advanced API getting started |
| `pool.md` | Custom worker pool |
| `reporters.md` | Custom reporters |
| `tests.md` | Programmatic test running |

### guide/browser/ (8 files)

| File | Description |
|------|-------------|
| `index.md` | Browser mode getting started |
| `aria-snapshots.md` | ARIA snapshot testing |
| `component-testing.md` | Component testing (React, Vue, Svelte) |
| `multiple-setups.md` | Multiple browser setups |
| `playwright-traces.md` | Playwright traces |
| `trace-view.md` | Trace view guide |
| `visual-regression-testing.md` | Visual regression testing |
| `why.md` | Why browser mode |

### guide/learn/ (8 files)

| File | Description |
|------|-------------|
| `async.md` | Testing async code |
| `debugging-tests.md` | Debugging tests tutorial |
| `matchers.md` | Using matchers |
| `mock-functions.md` | Mock functions tutorial |
| `setup-teardown.md` | Setup and teardown |
| `snapshots.md` | Snapshot testing tutorial |
| `testing-in-practice.md` | Testing in practice |
| `writing-tests.md` | Writing your first tests |

### guide/mocking/ (8 files)

| File | Description |
|------|-------------|
| `classes.md` | Mocking classes |
| `dates.md` | Mocking dates |
| `file-system.md` | Mocking the file system |
| `functions.md` | Mocking functions |
| `globals.md` | Mocking globals |
| `modules.md` | Mocking modules (vi.mock) |
| `requests.md` | Mocking HTTP requests |
| `timers.md` | Mocking timers |

### guide/recipes/ (11 files)

| File | Description |
|------|-------------|
| `browser-locators.md` | Browser locator patterns |
| `cancellable.md` | Cancellable test patterns |
| `custom-assertions.md` | Custom assertion patterns |
| `db-transaction.md` | Database transaction testing |
| `disable-isolation.md` | Disabling test isolation |
| `explicit-resources.md` | Explicit resource management |
| `parallel-sequential.md` | Parallel and sequential test patterns |
| `schema-matching.md` | Schema matching patterns |
| `type-narrowing.md` | Type narrowing in tests |
| `wait-for.md` | Waiting for async conditions |
| `watch-templates.md` | Watch mode templates |
