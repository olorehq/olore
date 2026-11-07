# vitest Table of Contents

## Directory Map

```
contents/
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
| Getting started | `contents/guide/index.md` |
| CLI reference | `contents/guide/cli.md` |
| Configuration | `contents/config/index.md` |
| Writing tests | `contents/guide/learn/writing-tests.md` |
| Mocking | `contents/guide/mocking.md` |
| Coverage | `contents/guide/coverage.md` |
| Browser mode | `contents/guide/browser/index.md` |
| Migration | `contents/guide/migration/index.md` |
| Troubleshooting | `contents/guide/common-errors.md` |

## Detailed Structure

### api/ (9 files)

| File | Description |
|------|-------------|
| `assert-type.md` | assertType |
| `assert.md` | assert |
| `describe.md` | describe |
| `expect-typeof.md` | expectTypeOf |
| `expect.md` | expect |
| `hooks.md` | Hooks |
| `mock.md` | Mocks |
| `test.md` | Test |
| `vi.md` | Vi |

### api/advanced/ (13 files)

| File | Description |
|------|-------------|
| `artifacts.md` | Test Artifacts |
| `import-example.md` |  |
| `metadata.md` | Task Metadata <Badge type="danger">advanced</Badge> |
| `plugin.md` | Plugin API |
| `reporters.md` | Reporters |
| `runner.md` | Runner API <Badge type="danger">advanced</Badge> |
| `test-case.md` | TestCase |
| `test-collection.md` | TestCollection |
| `test-module.md` | TestModule |
| `test-project.md` | TestProject |
| `test-specification.md` | TestSpecification |
| `test-suite.md` | TestSuite |
| `vitest.md` | Vitest API |

### api/browser/ (8 files)

| File | Description |
|------|-------------|
| `assertions.md` | Assertion API \| Browser Mode |
| `commands.md` | Commands \| Browser Mode |
| `context.md` | Context API \| Browser Mode |
| `interactivity.md` | Interactivity API \| Browser Mode |
| `locators.md` | Locators \| Browser Mode |
| `react.md` | vitest-browser-react |
| `svelte.md` | vitest-browser-svelte |
| `vue.md` | vitest-browser-vue |

### config/ (87 files)

| File | Description |
|------|-------------|
| `alias.md` | alias \| Config |
| `allowonly.md` | allowOnly \| Config |
| `api.md` | api \| Config |
| `attachmentsdir.md` | attachmentsDir \| Config |
| `bail.md` | bail \| Config |
| `benchmark.md` | benchmark \| Config |
| `cache.md` | cache \| Config |
| `chaiconfig.md` | chaiConfig \| Config |
| `changed.md` | changed \| Config |
| `clearmocks.md` | clearMocks \| Config |
| `coverage.md` | coverage \| Config |
| `css.md` | css \| Config |
| `dangerouslyignoreunhandlederrors.md` | dangerouslyIgnoreUnhandledErrors \| Config |
| `deps.md` | deps \| Config |
| `detectasyncleaks.md` | detectAsyncLeaks \| Config |
| `diff.md` | diff \| Config |
| `dir.md` | dir \| Config |
| `disableconsoleintercept.md` | disableConsoleIntercept \| Config |
| `env.md` | env \| Config |
| `environment.md` | environment \| Config |
| `environmentoptions.md` | environmentOptions \| Config |
| `exclude.md` | exclude \| Config |
| `execargv.md` | execArgv \| Config |
| `expandsnapshotdiff.md` | expandSnapshotDiff \| Config |
| `expect.md` | expect \| Config |
| `experimental.md` | experimental \| Config |
| `faketimers.md` | fakeTimers \| Config |
| `fileparallelism.md` | fileParallelism \| Config |
| `forcereruntriggers.md` | forceRerunTriggers \| Config |
| `fsmodulecache.md` | fsModuleCache \| Config |
| `fsmodulecachepath.md` | fsModuleCachePath \| Config |
| `globals.md` | globals \| Config |
| `globalsetup.md` | globalSetup \| Config |
| `hideskippedtests.md` | hideSkippedTests \| Config |
| `hooktimeout.md` | hookTimeout \| Config |
| `include-source.md` | includeSource \| Config |
| `include.md` | include \| Config |
| `includetasklocation.md` | includeTaskLocation \| Config |
| `index.md` | Configuring Vitest |
| `injectcjsglobals.md` | injectCjsGlobals \| Config |
| `isolate.md` | isolate \| Config |
| `logheapusage.md` | logHeapUsage \| Config |
| `maxconcurrency.md` | maxConcurrency \| Config |
| `maxworkers.md` | maxWorkers \| Config |
| `mockreset.md` | mockReset \| Config |
| `mode.md` | mode \| Config |
| `name.md` | name \| Config |
| `onconsolelog.md` | onConsoleLog \| Config |
| `onstacktrace.md` | onStackTrace \| Config |
| `onunhandlederror.md` | onUnhandledError \| Config |
| `open.md` | open \| Config |
| `outputfile.md` | outputFile \| Config |
| `passwithnotests.md` | passWithNoTests \| Config |
| `pool.md` | pool \| Config |
| `printconsoletrace.md` | printConsoleTrace \| Config |
| `projects.md` | projects \| Config |
| `provide.md` | provide \| Config |
| `repeats.md` | repeats \| Config |
| `reporters.md` | reporters \| Config |
| `resolvesnapshotpath.md` | resolveSnapshotPath \| Config |
| `restoremocks.md` | restoreMocks \| Config |
| `retry.md` | retry \| Config |
| `root.md` | root \| Config |
| `runner.md` | runner \| Config |
| `sequence.md` | sequence \| Config |
| `server.md` | server \| Config |
| `setupfiles.md` | setupFiles \| Config |
| `sharedviteserver.md` | sharedViteServer \| Config |
| `silent.md` | silent \| Config |
| `slowtestthreshold.md` | slowTestThreshold \| Config |
| `snapshotenvironment.md` | snapshotEnvironment \| Config |
| `snapshotformat.md` | snapshotFormat \| Config |
| `snapshotserializers.md` | snapshotSerializers \| Config |
| `stricttags.md` | strictTags \| Config |
| `tags.md` | tags \| Config |
| `tasktitlevalueformattruncate.md` | taskTitleValueFormatTruncate \| Config |
| `teardowntimeout.md` | teardownTimeout \| Config |
| `testnamepattern.md` | testNamePattern \| Config |
| `testtimeout.md` | testTimeout \| Config |
| `typecheck.md` | typecheck \| Config |
| `ui.md` | ui \| Config |
| `unstubenvs.md` | unstubEnvs \| Config |
| `unstubglobals.md` | unstubGlobals \| Config |
| `update.md` | update \| Config |
| `vmmemorylimit.md` | vmMemoryLimit \| Config |
| `watch.md` | watch \| Config |
| `watchtriggerpatterns.md` | watchTriggerPatterns \| Config |

### config/browser/ (23 files)

| File | Description |
|------|-------------|
| `commands.md` | browser.commands \| Config |
| `connecttimeout.md` | browser.connectTimeout \| Config |
| `dependencysourcemaps.md` | browser.dependencySourcemaps \| Config |
| `detailspanelposition.md` | browser.detailsPanelPosition \| Config |
| `enabled.md` | browser.enabled \| Config |
| `expect.md` | browser.expect \| Config |
| `headless.md` | browser.headless \| Config |
| `importmapmocks.md` | browser.importMapMocks \| Config |
| `instances.md` | browser.instances \| Config |
| `locators.md` | browser.locators \| Config |
| `orchestratorscripts.md` | browser.orchestratorScripts \| Config |
| `playwright.md` | Configuring Playwright |
| `preview.md` | Configuring Preview |
| `provider.md` | browser.provider \| Config |
| `screenshotdirectory.md` | browser.screenshotDirectory \| Config |
| `screenshotfailures.md` | browser.screenshotFailures \| Config |
| `testerhtmlpath.md` | browser.testerHtmlPath \| Config |
| `trace.md` | browser.trace \| Config |
| `traceview.md` | browser.traceView \| Config |
| `trackunhandlederrors.md` | browser.trackUnhandledErrors \| Config |
| `ui.md` | browser.ui \| Config |
| `viewport.md` | browser.viewport \| Config |
| `webdriverio.md` | Configuring WebdriverIO |

### guide/ (30 files)

| File | Description |
|------|-------------|
| `benchmarking.md` | Benchmarking \| Guide |
| `cli-generated.md` |  |
| `cli.md` | Command Line Interface \| Guide |
| `common-errors.md` | Common Errors \| Guide |
| `comparisons.md` | Comparisons with Other Test Runners \| Guide |
| `coverage.md` | Coverage \| Guide |
| `debugging.md` | Debugging \| Guide |
| `environment.md` | Test Environment \| Guide |
| `extending-matchers.md` | Extending Matchers \| Guide |
| `features.md` | Features \| Guide |
| `filtering.md` | Test Filtering \| Guide |
| `ide.md` | IDE Integrations \| Guide |
| `improving-performance.md` | Improving Performance |
| `in-source.md` | In-Source Testing \| Guide |
| `index.md` | Getting Started \| Guide |
| `lifecycle.md` | Test Run Lifecycle \| Guide |
| `mocking.md` | Mocking \| Guide |
| `open-telemetry.md` | Open Telemetry Support <Experimental /> {#open-telemetry-support} |
| `parallelism.md` | Parallelism \| Guide |
| `profiling-test-performance.md` | Profiling Test Performance |
| `projects.md` | Test Projects \| Guide |
| `reporters.md` | Reporters \| Guide |
| `snapshot.md` | Snapshot \| Guide |
| `test-annotations.md` | Test Annotations \| Guide |
| `test-context.md` | Test Context \| Guide |
| `test-tags.md` | Test Tags \| Guide |
| `testing-types.md` | Testing Types \| Guide |
| `ui.md` | Vitest UI \| Guide |
| `using-plugins.md` | Using Plugins \| Guide |
| `why.md` | Why Vitest \| Guide |

### guide/advanced/ (5 files)

| File | Description |
|------|-------------|
| `benchmark-provider.md` | Custom Benchmark Provider <Version type="experimental">5.0.0</Version> <Badge type="danger |
| `index.md` | Advanced API |
| `pool.md` | Custom Pool <Badge type="danger">advanced</Badge> {#custom-pool} |
| `reporters.md` | Extending Reporters <Badge type="danger">advanced</Badge> {#extending-reporters} |
| `tests.md` | Running Tests <Badge type="danger">advanced</Badge> {#running-tests} |

### guide/browser/ (8 files)

| File | Description |
|------|-------------|
| `aria-snapshots.md` | ARIA Snapshots \| Guide |
| `component-testing.md` | Component Testing \| Guide |
| `index.md` | Browser Mode \| Guide |
| `multiple-setups.md` | Multiple Setups |
| `playwright-traces.md` | Playwright Traces |
| `trace-view.md` | Trace View <Version>5.0.0</Version> |
| `visual-regression-testing.md` | Visual Regression Testing |
| `why.md` | Why Browser Mode \| Browser Mode |

### guide/examples/ (2 files)

| File | Description |
|------|-------------|
| `projects-workspace.md` |  |
| `promise-done.md` |  |

### guide/learn/ (9 files)

| File | Description |
|------|-------------|
| `async.md` | Testing Asynchronous Code \| Guide |
| `debugging-tests.md` | Debugging Failing Tests \| Guide |
| `matchers.md` | Using Matchers \| Guide |
| `mock-functions.md` | Mock Functions \| Guide |
| `setup-teardown.md` | Setup and Teardown \| Guide |
| `snapshots.md` | Snapshot Testing \| Guide |
| `testing-in-practice.md` | Testing in Practice \| Guide |
| `writing-tests-with-ai.md` | Writing Tests with AI \| Guide |
| `writing-tests.md` | Writing Tests \| Guide |

### guide/migration/ (3 files)

| File | Description |
|------|-------------|
| `index.md` | Migration Guide \| Guide |
| `jest.md` | Migrating from Jest \| Guide |
| `mocha.md` | Migrating from Mocha + Chai + Sinon \| Guide |

### guide/mocking/ (8 files)

| File | Description |
|------|-------------|
| `classes.md` | Mocking Classes |
| `dates.md` | Mocking Dates |
| `file-system.md` | Mocking the File System |
| `functions.md` | Mocking Functions |
| `globals.md` | Mocking Globals |
| `modules.md` | Mocking Modules |
| `requests.md` | Mocking Requests |
| `timers.md` | Timers |

### guide/recipes/ (13 files)

| File | Description |
|------|-------------|
| `affected-tests.md` | Running Only Affected Tests \| Recipes |
| `browser-locators.md` | Extending Browser Locators \| Recipes |
| `cancellable.md` | Cancellable Test Resources \| Recipes |
| `conditional-mocking.md` | Conditional Mocking with vi.when \| Recipes |
| `custom-assertions.md` | Custom Assertion Helpers \| Recipes |
| `db-transaction.md` | Database Transaction per Test \| Recipes |
| `disable-isolation.md` | Per-File Isolation Settings \| Recipes |
| `explicit-resources.md` | Auto-Cleanup with `using` \| Recipes |
| `parallel-sequential.md` | Parallel and Sequential Test Files \| Recipes |
| `schema-matching.md` | Schema-Driven Assertions \| Recipes |
| `type-narrowing.md` | Type Narrowing in Tests \| Recipes |
| `wait-for.md` | Waiting for Async Conditions \| Recipes |
| `watch-templates.md` | Watching Non-Imported Files \| Recipes |
