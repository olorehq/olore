# playwright Table of Contents

## Directory Map

```
contents/
├── *.md                    # Guides, intros, how-tos (95 files)
├── api/ # Core API reference (55 files)
├── test-api/ # Test runner API (12 files)
├── test-reporter-api/ # Reporter API (7 files)
├── electron-api/ # Electron API (2 files)
├── mobile-api/ # Android/mobile API (5 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Get started (JS) | `contents/intro-js.md` |
| Get started (Python) | `contents/intro-python.md` |
| Get started (Java) | `contents/intro-java.md` |
| Get started (C#) | `contents/intro-csharp.md` |
| Write tests (JS) | `contents/writing-tests-js.md` |
| Page API | `contents/api/class-page.md` |
| Locator API | `contents/api/class-locator.md` |
| Locators | `contents/locators.md` |
| Assertions (JS) | `contents/test-assertions-js.md` |
| Configuration (JS) | `contents/test-configuration-js.md` |
| Network | `contents/network.md` |
| Authentication | `contents/auth.md` |
| CI | `contents/ci.md` |

## Detailed Structure

### root (95 files)

| File | Description |
|------|-------------|
| `accessibility-testing-java.md` | Accessibility testing |
| `accessibility-testing-js.md` | Accessibility testing |
| `actionability.md` | Auto-waiting |
| `api-testing-csharp.md` | API testing |
| `api-testing-java.md` | API testing |
| `api-testing-js.md` | API testing |
| `api-testing-python.md` | API testing |
| `aria-snapshots.md` | Snapshot testing |
| `auth.md` | Authentication |
| `best-practices-js.md` | Best Practices |
| `browser-contexts.md` | Isolation |
| `browsers.md` | Browsers |
| `chrome-extensions-js-python.md` | Chrome extensions |
| `ci-intro.md` | Setting up CI |
| `ci.md` | Continuous Integration |
| `clock.md` | Clock |
| `codegen-intro.md` | Generating tests |
| `codegen.md` | Test generator |
| `debug.md` | Debugging Tests |
| `dialogs.md` | Dialogs |
| `docker.md` | Docker |
| `downloads.md` | Downloads |
| `emulation.md` | Emulation |
| `evaluating.md` | Evaluating JavaScript |
| `events.md` | Events |
| `extensibility.md` | Extensibility |
| `frames.md` | Frames |
| `getting-started-cli.md` | Coding agents |
| `getting-started-mcp.md` | Playwright MCP |
| `getting-started-vscode-js.md` | VS Code |
| `handles.md` | Handles |
| `input.md` | Actions |
| `intro-csharp.md` | Installation |
| `intro-java.md` | Installation |
| `intro-js.md` | Installation |
| `intro-python.md` | Installation |
| `junit-java.md` | JUnit (experimental) |
| `languages.md` | Supported languages |
| `library-csharp.md` | Getting started - Library |
| `library-js.md` | Library |
| `library-python.md` | Getting started - Library |
| `locators.md` | Locators |
| `mock-browser-js.md` | Mock browser APIs |
| `mock.md` | Mock APIs |
| `navigations.md` | Navigations |
| `network.md` | Network |
| `other-locators.md` | Other locators |
| `pages.md` | Pages |
| `pom.md` | Page object models |
| `protractor-js.md` | Migrating from Protractor |
| `puppeteer-js.md` | Migrating from Puppeteer |
| `running-tests-csharp.md` | Running and debugging tests |
| `running-tests-java.md` | Running and debugging tests |
| `running-tests-js.md` | Running and debugging tests |
| `running-tests-python.md` | Running and debugging tests |
| `screenshots.md` | Screenshots |
| `selenium-grid.md` | Selenium Grid (experimental) |
| `service-workers-js-python.md` | Service Workers |
| `test-agents-js.md` | Agents |
| `test-annotations-js.md` | Annotations |
| `test-assertions-csharp-java-python.md` | Assertions |
| `test-assertions-js.md` | Assertions |
| `test-cli-js.md` | Command line |
| `test-components-js.md` | Component testing |
| `test-configuration-js.md` | Configuration |
| `test-fixtures-js.md` | Fixtures |
| `test-global-setup-teardown-js.md` | Global setup and teardown |
| `test-parallel-js.md` | Parallelism |
| `test-parameterize-js.md` | Parameterize tests |
| `test-projects-js.md` | Projects |
| `test-reporters-js.md` | Reporters |
| `test-retries-js.md` | Retries |
| `test-runners-csharp.md` | Test Runners |
| `test-runners-java.md` | Test Runners |
| `test-runners-python.md` | Pytest Plugin Reference |
| `test-sharding-js.md` | Sharding |
| `test-snapshots-js.md` | Visual comparisons |
| `test-timeouts-js.md` | Timeouts |
| `test-typescript-js.md` | TypeScript |
| `test-ui-mode-js.md` | UI Mode |
| `test-use-options-js.md` | Configuration (use) |
| `test-webserver-js.md` | Web server |
| `testing-library-js.md` | Migrating from Testing Library |
| `threading-java.md` | Multithreading |
| `touch-events.md` | Touch events (legacy) |
| `trace-viewer-intro-csharp.md` | Trace viewer |
| `trace-viewer-intro-java-python.md` | Trace viewer |
| `trace-viewer-intro-js.md` | Trace viewer |
| `trace-viewer.md` | Trace viewer |
| `videos.md` | Videos |
| `webview2.md` | WebView2 |
| `writing-tests-csharp.md` | Writing tests |
| `writing-tests-java.md` | Writing tests |
| `writing-tests-js.md` | Writing tests |
| `writing-tests-python.md` | Writing tests |

### api/ (55 files)

| File | Description |
|------|-------------|
| `class-apirequest.md` | class: APIRequest |
| `class-apirequestcontext.md` | class: APIRequestContext |
| `class-apiresponse.md` | class: APIResponse |
| `class-apiresponseassertions.md` | class: APIResponseAssertions |
| `class-browser.md` | class: Browser |
| `class-browsercontext.md` | class: BrowserContext |
| `class-browserserver.md` | class: BrowserServer |
| `class-browsertype.md` | class: BrowserType |
| `class-cdpsession.md` | class: CDPSession |
| `class-cdpsessionevent.md` | class: CDPSessionEvent |
| `class-clock.md` | class: Clock |
| `class-consolemessage.md` | class: ConsoleMessage |
| `class-coverage.md` | class: Coverage |
| `class-credentials.md` | class: Credentials |
| `class-debugger.md` | class: Debugger |
| `class-dialog.md` | class: Dialog |
| `class-disposable.md` | class: Disposable |
| `class-download.md` | class: Download |
| `class-elementhandle.md` | class: ElementHandle |
| `class-error.md` | class: Error |
| `class-filechooser.md` | class: FileChooser |
| `class-formdata.md` | class: FormData |
| `class-frame.md` | class: Frame |
| `class-framelocator.md` | class: FrameLocator |
| `class-genericassertions.md` | class: GenericAssertions |
| `class-jshandle.md` | class: JSHandle |
| `class-keyboard.md` | class: Keyboard |
| `class-locator.md` | class: Locator |
| `class-locatorassertions.md` | class: LocatorAssertions |
| `class-logger.md` | class: Logger |
| `class-mouse.md` | class: Mouse |
| `class-page.md` | class: Page |
| `class-pageassertions.md` | class: PageAssertions |
| `class-playwright.md` | class: Playwright |
| `class-playwrightassertions.md` | class: PlaywrightAssertions |
| `class-playwrightexception.md` | class: PlaywrightException |
| `class-request.md` | class: Request |
| `class-requestoptions.md` | class: RequestOptions |
| `class-response.md` | class: Response |
| `class-route.md` | class: Route |
| `class-screencast.md` | class: Screencast |
| `class-selectors.md` | class: Selectors |
| `class-snapshotassertions.md` | class: SnapshotAssertions |
| `class-timeouterror.md` | class: TimeoutError |
| `class-touchscreen.md` | class: Touchscreen |
| `class-tracing.md` | class: Tracing |
| `class-video.md` | class: Video |
| `class-weberror.md` | class: WebError |
| `class-webmcp.md` | class: WebMCP |
| `class-websocket.md` | class: WebSocket |
| `class-websocketframe.md` | class: WebSocketFrame |
| `class-websocketroute.md` | class: WebSocketRoute |
| `class-webstorage.md` | class: WebStorage |
| `class-worker.md` | class: Worker |
| `params.md` | params.md |

### electron-api/ (2 files)

| File | Description |
|------|-------------|
| `class-electron.md` | class: Electron |
| `class-electronapplication.md` | class: ElectronApplication |

### mobile-api/ (5 files)

| File | Description |
|------|-------------|
| `class-android.md` | class: Android |
| `class-androiddevice.md` | class: AndroidDevice |
| `class-androidinput.md` | class: AndroidInput |
| `class-androidsocket.md` | class: AndroidSocket |
| `class-androidwebview.md` | class: AndroidWebView |

### test-api/ (12 files)

| File | Description |
|------|-------------|
| `class-fixtures.md` | class: Fixtures |
| `class-fullconfig.md` | class: FullConfig |
| `class-fullproject.md` | class: FullProject |
| `class-location.md` | class: Location |
| `class-test.md` | class: Test |
| `class-testconfig.md` | class: TestConfig |
| `class-testinfo.md` | class: TestInfo |
| `class-testinfoerror.md` | class: TestInfoError |
| `class-testoptions.md` | class: TestOptions |
| `class-testproject.md` | class: TestProject |
| `class-teststepinfo.md` | class: TestStepInfo |
| `class-workerinfo.md` | class: WorkerInfo |

### test-reporter-api/ (7 files)

| File | Description |
|------|-------------|
| `class-reporter.md` | class: Reporter |
| `class-suite.md` | class: Suite |
| `class-testcase.md` | class: TestCase |
| `class-testerror.md` | class: TestError |
| `class-testresult.md` | class: TestResult |
| `class-testrun.md` | class: TestRun |
| `class-teststep.md` | class: TestStep |
