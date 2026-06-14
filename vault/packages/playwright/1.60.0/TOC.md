# Playwright Table of Contents

## Directory Map

```
contents/
├── (root)              # Guides, tutorials, and cross-language docs (110 files)
├── api/                # Core API class reference (57 files)
├── test-api/           # Test runner API classes (12 files)
├── test-reporter-api/  # Reporter API classes (6 files)
├── electron-api/       # Electron integration API (2 files)
└── mobile-api/         # Android/mobile API (5 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| JavaScript/TypeScript setup | `contents/intro-js.md` |
| Python setup | `contents/intro-python.md` |
| C# setup | `contents/intro-csharp.md` |
| Java setup | `contents/intro-java.md` |
| Locators and selectors | `contents/locators.md` |
| API reference (core) | `contents/api/class-page.md` |
| Writing tests (JS) | `contents/writing-tests-js.md` |
| Test configuration (JS) | `contents/test-configuration-js.md` |
| Assertions | `contents/test-assertions-js.md` |
| Network mocking | `contents/mock.md` |

## Detailed Structure

### root/ - Getting Started (9 files)

| File | Description |
|------|-------------|
| `intro-js.md` | Getting started with Playwright Test (JavaScript/TypeScript) |
| `intro-python.md` | Getting started with Playwright (Python) |
| `intro-csharp.md` | Getting started with Playwright (.NET/C#) |
| `intro-java.md` | Getting started with Playwright (Java) |
| `getting-started-cli.md` | Playwright CLI for coding agents |
| `getting-started-mcp.md` | Playwright MCP server setup |
| `getting-started-vscode-js.md` | VS Code extension guide |
| `library-js.md` | Using Playwright as a library (JS) |
| `library-python.md` | Using Playwright as a library (Python) |
| `library-csharp.md` | Using Playwright as a library (C#) |

### root/ - Core Concepts (16 files)

| File | Description |
|------|-------------|
| `locators.md` | Locators - finding elements |
| `other-locators.md` | XPath, CSS, and other selector strategies |
| `actionability.md` | Auto-waiting and actionability checks |
| `navigations.md` | Page navigation and load states |
| `pages.md` | Page object and browser contexts |
| `browser-contexts.md` | Isolated browser contexts |
| `browsers.md` | Launching and configuring browsers |
| `frames.md` | Working with iframes and frames |
| `handles.md` | ElementHandle and JSHandle |
| `events.md` | Listening to browser events |
| `evaluating.md` | Running JavaScript in browser |
| `input.md` | Keyboard, mouse, and touch input |
| `touch-events.md` | Touch and pointer events |
| `dialogs.md` | Handling browser dialogs |
| `downloads.md` | File downloads |
| `network.md` | Network request interception and routing |

### root/ - Testing (JavaScript-focused, 28 files)

| File | Description |
|------|-------------|
| `writing-tests-js.md` | Writing tests with Playwright Test (JS) |
| `running-tests-js.md` | Running and filtering tests (JS) |
| `test-assertions-js.md` | Test assertions and expect() (JS) |
| `test-configuration-js.md` | Playwright config file (JS) |
| `test-fixtures-js.md` | Custom fixtures (JS) |
| `test-parallel-js.md` | Parallel test execution (JS) |
| `test-retries-js.md` | Test retries and flaky tests (JS) |
| `test-timeouts-js.md` | Timeout configuration (JS) |
| `test-projects-js.md` | Test projects and matrix (JS) |
| `test-sharding-js.md` | Test sharding for CI (JS) |
| `test-parameterize-js.md` | Parameterized tests (JS) |
| `test-annotations-js.md` | Test annotations and tags (JS) |
| `test-global-setup-teardown-js.md` | Global setup/teardown (JS) |
| `test-reporters-js.md` | Built-in reporters (JS) |
| `test-snapshots-js.md` | Visual snapshot testing (JS) |
| `test-components-js.md` | Component testing (JS) |
| `test-ui-mode-js.md` | UI mode for test exploration |
| `test-use-options-js.md` | Per-test use() options (JS) |
| `test-typescript-js.md` | TypeScript configuration (JS) |
| `test-webserver-js.md` | Web server fixture (JS) |
| `test-cli-js.md` | Playwright CLI reference (JS) |
| `test-agents-js.md` | AI agent testing patterns (JS) |
| `best-practices-js.md` | Best practices for Playwright (JS) |
| `running-tests-java.md` | Running tests (Java) |
| `running-tests-python.md` | Running tests (Python) |
| `running-tests-csharp.md` | Running tests (C#) |
| `writing-tests-java.md` | Writing tests (Java) |
| `writing-tests-python.md` | Writing tests (Python) |
| `writing-tests-csharp.md` | Writing tests (C#) |

### root/ - Test Runners and Assertions (9 files)

| File | Description |
|------|-------------|
| `test-runners-java.md` | JUnit and TestNG integration (Java) |
| `test-runners-python.md` | pytest integration (Python) |
| `test-runners-csharp.md` | NUnit/MSTest/xUnit integration (C#) |
| `junit-java.md` | JUnit 5 specific configuration |
| `test-assertions-csharp-java-python.md` | Assertions for C#, Java, Python |
| `threading-java.md` | Multi-threading with Playwright (Java) |
| `pom.md` | Page Object Model pattern |
| `extensibility.md` | Custom selector engines |
| `auth.md` | Authentication and session storage |

### root/ - Tooling and Debugging (10 files)

| File | Description |
|------|-------------|
| `debug.md` | Debugging tests with Playwright Inspector |
| `codegen.md` | Test code generation |
| `codegen-intro.md` | Introduction to codegen |
| `trace-viewer.md` | Trace viewer for test debugging |
| `trace-viewer-intro-js.md` | Trace viewer intro (JS) |
| `trace-viewer-intro-csharp.md` | Trace viewer intro (C#) |
| `trace-viewer-intro-java-python.md` | Trace viewer intro (Java/Python) |
| `screenshots.md` | Taking screenshots |
| `videos.md` | Recording videos |
| `aria-snapshots.md` | Accessibility tree snapshots |

### root/ - Network, Mocking, and Emulation (8 files)

| File | Description |
|------|-------------|
| `mock.md` | Mocking API calls and network requests |
| `mock-browser-js.md` | Browser-level API mocking (JS) |
| `api-testing-js.md` | API testing with APIRequestContext (JS) |
| `api-testing-python.md` | API testing (Python) |
| `api-testing-java.md` | API testing (Java) |
| `api-testing-csharp.md` | API testing (C#) |
| `emulation.md` | Device, locale, timezone, geolocation emulation |
| `service-workers-js-python.md` | Service worker mocking (JS/Python) |

### root/ - Accessibility and Specialized (7 files)

| File | Description |
|------|-------------|
| `accessibility-testing-js.md` | Accessibility testing (JS) |
| `accessibility-testing-java.md` | Accessibility testing (Java) |
| `clock.md` | Mocking dates and timers |
| `chrome-extensions-js-python.md` | Chrome extension testing |
| `docker.md` | Running Playwright in Docker |
| `ci.md` | Continuous integration setup |
| `ci-intro.md` | CI introduction and GitHub Actions |

### root/ - Integrations (5 files)

| File | Description |
|------|-------------|
| `selenium-grid.md` | Connecting to Selenium Grid (experimental) |
| `webview2.md` | Microsoft Edge WebView2 automation |
| `electron-api/class-electron.md` | Electron API |
| `electron-api/class-electronapplication.md` | ElectronApplication class |
| `getting-started-cli.md` | CLI for coding agents |

### api/ - Core API Reference (57 files)

| File | Description |
|------|-------------|
| `api/class-playwright.md` | Top-level Playwright object |
| `api/class-browser.md` | Browser class |
| `api/class-browsercontext.md` | BrowserContext class |
| `api/class-browsertype.md` | BrowserType (chromium/firefox/webkit) |
| `api/class-browserserver.md` | BrowserServer for remote connections |
| `api/class-page.md` | Page class (main automation object) |
| `api/class-frame.md` | Frame class |
| `api/class-framelocator.md` | FrameLocator class |
| `api/class-locator.md` | Locator class (element finder) |
| `api/class-elementhandle.md` | ElementHandle (legacy) |
| `api/class-jshandle.md` | JSHandle for JS objects |
| `api/class-keyboard.md` | Keyboard class |
| `api/class-mouse.md` | Mouse class |
| `api/class-touchscreen.md` | Touchscreen class |
| `api/class-request.md` | Request class |
| `api/class-response.md` | Response class |
| `api/class-route.md` | Route for request interception |
| `api/class-requestoptions.md` | RequestOptions class |
| `api/class-apirequest.md` | APIRequest (fetch) |
| `api/class-apirequestcontext.md` | APIRequestContext |
| `api/class-apiresponse.md` | APIResponse |
| `api/class-apiresponseassertions.md` | APIResponse assertions |
| `api/class-locatorassertions.md` | Locator assertions (expect) |
| `api/class-pageassertions.md` | Page assertions (expect) |
| `api/class-playwrightassertions.md` | PlaywrightAssertions entry point |
| `api/class-genericassertions.md` | Generic value assertions |
| `api/class-snapshotassertions.md` | Snapshot assertions |
| `api/class-dialog.md` | Dialog (alert, confirm, prompt) |
| `api/class-download.md` | Download class |
| `api/class-filechooser.md` | FileChooser class |
| `api/class-formdata.md` | FormData for API requests |
| `api/class-websocket.md` | WebSocket class |
| `api/class-websocketframe.md` | WebSocketFrame class |
| `api/class-websocketroute.md` | WebSocketRoute for WS interception |
| `api/class-worker.md` | Worker (web workers) |
| `api/class-consolemessage.md` | ConsoleMessage class |
| `api/class-coverage.md` | Coverage API |
| `api/class-tracing.md` | Tracing API |
| `api/class-video.md` | Video recording class |
| `api/class-screencast.md` | Screencast API |
| `api/class-selectors.md` | Selectors (custom engines) |
| `api/class-clock.md` | Clock API (fake timers) |
| `api/class-cdpsession.md` | CDP session |
| `api/class-cdpsessionevent.md` | CDP session events |
| `api/class-logger.md` | Logger class |
| `api/class-disposable.md` | Disposable interface |
| `api/class-error.md` | Error class |
| `api/class-playwrightexception.md` | PlaywrightException |
| `api/class-timeouterror.md` | TimeoutError class |
| `api/class-weberror.md` | WebError class |
| `api/class-debugger.md` | Debugger class |

### test-api/ - Test Runner API (12 files)

| File | Description |
|------|-------------|
| `test-api/class-test.md` | test() function and describe() |
| `test-api/class-testconfig.md` | playwright.config.ts configuration |
| `test-api/class-fullconfig.md` | Resolved full config object |
| `test-api/class-testproject.md` | Project configuration |
| `test-api/class-fullproject.md` | Resolved full project config |
| `test-api/class-testoptions.md` | Built-in test fixtures/options |
| `test-api/class-testinfo.md` | TestInfo object in tests |
| `test-api/class-testinfoerror.md` | TestInfoError class |
| `test-api/class-teststepinfo.md` | TestStepInfo for test steps |
| `test-api/class-fixtures.md` | Fixtures API |
| `test-api/class-workerinfo.md` | WorkerInfo for worker-level fixtures |
| `test-api/class-location.md` | Location object |

### test-reporter-api/ - Reporter API (6 files)

| File | Description |
|------|-------------|
| `test-reporter-api/class-reporter.md` | Reporter interface |
| `test-reporter-api/class-suite.md` | Suite class |
| `test-reporter-api/class-testcase.md` | TestCase class |
| `test-reporter-api/class-testresult.md` | TestResult class |
| `test-reporter-api/class-teststep.md` | TestStep class |
| `test-reporter-api/class-testerror.md` | TestError class |

### mobile-api/ - Android/Mobile API (5 files)

| File | Description |
|------|-------------|
| `mobile-api/class-android.md` | Android class |
| `mobile-api/class-androiddevice.md` | AndroidDevice class |
| `mobile-api/class-androidinput.md` | AndroidInput class |
| `mobile-api/class-androidsocket.md` | AndroidSocket class |
| `mobile-api/class-androidwebview.md` | AndroidWebView class |
