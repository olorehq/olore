# playwright Table of Contents

## Directory Map

```
contents/
├── intro-*.md              # Getting started (JS, Python, Java, C#)
├── getting-started-*.md    # CLI, MCP, VS Code
├── writing-tests-*.md      # Writing tests (JS, Python, Java, C#)
├── running-tests-*.md      # Running tests (JS, Python, Java, C#)
├── api/                    # Core API reference (57 files)
├── test-api/               # Test runner API reference (12 files)
├── test-reporter-api/      # Reporter API reference (6 files)
├── electron-api/           # Electron API reference (2 files)
├── mobile-api/             # Android/mobile API reference (5 files)
└── *.md                    # Guides and how-to docs
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Get started (JS) | `contents/intro-js.md` |
| Get started (Python) | `contents/intro-python.md` |
| Get started (Java) | `contents/intro-java.md` |
| Get started (C#) | `contents/intro-csharp.md` |
| Write first test (JS) | `contents/writing-tests-js.md` |
| API reference (Page) | `contents/api/class-page.md` |
| API reference (Locator) | `contents/api/class-locator.md` |
| Selectors / Locators | `contents/locators.md` |
| Assertions (JS) | `contents/test-assertions-js.md` |
| Configuration (JS) | `contents/test-configuration-js.md` |
| Network interception | `contents/network.md` |
| Authentication | `contents/auth.md` |
| CI integration | `contents/ci.md` |

## Detailed Structure

### Root-level getting started (9 files)

| File | Description |
|------|-------------|
| `intro-js.md` | Getting started with Playwright for Node.js/TypeScript |
| `intro-python.md` | Getting started with Playwright for Python |
| `intro-java.md` | Getting started with Playwright for Java |
| `intro-csharp.md` | Getting started with Playwright for .NET/C# |
| `getting-started-cli.md` | playwright-cli for coding agents |
| `getting-started-mcp.md` | Playwright MCP server for LLM/agent use |
| `getting-started-vscode-js.md` | VS Code extension setup and usage |
| `languages.md` | Overview of supported languages |
| `library-js.md` | Using Playwright as a library (JS, no test runner) |
| `library-python.md` | Using Playwright as a library (Python) |
| `library-csharp.md` | Using Playwright as a library (C#) |

### Writing and running tests (8 files)

| File | Description |
|------|-------------|
| `writing-tests-js.md` | Writing tests in JavaScript/TypeScript |
| `writing-tests-python.md` | Writing tests in Python |
| `writing-tests-java.md` | Writing tests in Java |
| `writing-tests-csharp.md` | Writing tests in C# |
| `running-tests-js.md` | Running tests in JavaScript/TypeScript |
| `running-tests-python.md` | Running tests in Python |
| `running-tests-java.md` | Running tests in Java |
| `running-tests-csharp.md` | Running tests in C# |

### Core testing guides (JS-focused, 20+ files)

| File | Description |
|------|-------------|
| `locators.md` | Locators — finding elements on page |
| `other-locators.md` | XPath, CSS, and legacy locator strategies |
| `actionability.md` | Auto-waiting and actionability checks |
| `test-assertions-js.md` | Assertions (JS/TS) |
| `test-assertions-csharp-java-python.md` | Assertions (C#, Java, Python) |
| `test-configuration-js.md` | Playwright config file options |
| `test-use-options-js.md` | Per-test use options |
| `test-fixtures-js.md` | Fixtures system |
| `test-annotations-js.md` | Test annotations (skip, fail, slow, fixme) |
| `test-cli-js.md` | Test runner CLI flags |
| `test-parallel-js.md` | Parallel test execution |
| `test-retries-js.md` | Retry failed tests |
| `test-sharding-js.md` | Sharding tests across machines |
| `test-reporters-js.md` | Built-in reporters (HTML, JUnit, JSON, etc.) |
| `test-snapshots-js.md` | Visual/snapshot testing |
| `test-timeouts-js.md` | Timeout configuration |
| `test-projects-js.md` | Projects (multi-browser / multi-config) |
| `test-global-setup-teardown-js.md` | Global setup and teardown |
| `test-parameterize-js.md` | Parameterized tests |
| `test-typescript-js.md` | TypeScript configuration |
| `test-components-js.md` | Component testing (React, Vue, Svelte) |
| `test-ui-mode-js.md` | UI mode (interactive test runner) |
| `test-webserver-js.md` | Web server integration for tests |
| `best-practices-js.md` | Best practices for Playwright tests |
| `pom.md` | Page Object Model pattern |
| `test-agents-js.md` | Testing with AI agents |

### Browser interaction guides

| File | Description |
|------|-------------|
| `input.md` | Keyboard, mouse, and form input |
| `touch-events.md` | Touch events and mobile gestures |
| `navigations.md` | Page navigation and load events |
| `network.md` | Network interception and mocking |
| `mock.md` | Mocking APIs and responses |
| `mock-browser-js.md` | Browser API mocking (JS) |
| `events.md` | Handling page events |
| `dialogs.md` | Handling dialogs (alert, confirm, prompt) |
| `downloads.md` | Handling file downloads |
| `frames.md` | Working with iframes |
| `pages.md` | Working with multiple pages/tabs |
| `handles.md` | Element handles and JSHandle |
| `evaluating.md` | Executing JavaScript in the browser |
| `screenshots.md` | Taking screenshots |
| `videos.md` | Recording videos |
| `clock.md` | Controlling time/clock in tests |
| `service-workers-js-python.md` | Service worker interception |
| `aria-snapshots.md` | ARIA snapshots for accessibility testing |
| `auth.md` | Authentication strategies (cookies, storage state) |
| `emulation.md` | Device emulation, geolocation, permissions |
| `extensibility.md` | Custom selector engines |

### Accessibility and API testing

| File | Description |
|------|-------------|
| `accessibility-testing-js.md` | Accessibility testing (JS) |
| `accessibility-testing-java.md` | Accessibility testing (Java) |
| `api-testing-js.md` | API testing without browser (JS) |
| `api-testing-python.md` | API testing without browser (Python) |
| `api-testing-java.md` | API testing without browser (Java) |
| `api-testing-csharp.md` | API testing without browser (C#) |

### Debugging and tooling

| File | Description |
|------|-------------|
| `debug.md` | Debugging tests with Playwright Inspector |
| `trace-viewer.md` | Trace Viewer full reference |
| `trace-viewer-intro-js.md` | Trace Viewer introduction (JS) |
| `trace-viewer-intro-java-python.md` | Trace Viewer introduction (Java/Python) |
| `trace-viewer-intro-csharp.md` | Trace Viewer introduction (C#) |
| `codegen.md` | Test code generator (codegen) |
| `codegen-intro.md` | Codegen introduction |

### Browsers and infrastructure

| File | Description |
|------|-------------|
| `browsers.md` | Browser configuration (Chromium, Firefox, WebKit) |
| `browser-contexts.md` | Browser contexts for test isolation |
| `chrome-extensions-js-python.md` | Testing Chrome extensions |
| `ci.md` | CI/CD integration (GitHub Actions, Jenkins, etc.) |
| `ci-intro.md` | CI setup introduction |
| `docker.md` | Running Playwright in Docker |
| `selenium-grid.md` | Connecting to Selenium Grid (experimental) |
| `webview2.md` | Automating WebView2 apps |

### Java and other languages

| File | Description |
|------|-------------|
| `junit-java.md` | JUnit integration for Java |
| `test-runners-java.md` | Java test runners |
| `test-runners-python.md` | Python test runners |
| `test-runners-csharp.md` | C# test runners |
| `threading-java.md` | Threading model for Java |

### Migration guides

| File | Description |
|------|-------------|
| `puppeteer-js.md` | Migrating from Puppeteer |
| `protractor-js.md` | Migrating from Protractor |
| `testing-library-js.md` | Migrating from Testing Library |

### Electron and Android APIs

| File | Description |
|------|-------------|
| `electron-api/class-electron.md` | Electron class API |
| `electron-api/class-electronapplication.md` | ElectronApplication class API |
| `mobile-api/class-android.md` | Android class API |
| `mobile-api/class-androiddevice.md` | AndroidDevice class API |
| `mobile-api/class-androidinput.md` | AndroidInput class API |
| `mobile-api/class-androidsocket.md` | AndroidSocket class API |
| `mobile-api/class-androidwebview.md` | AndroidWebView class API |

### api/ — Core API reference (57 files)

| File | Description |
|------|-------------|
| `api/class-playwright.md` | Playwright entry point |
| `api/class-browser.md` | Browser class |
| `api/class-browsercontext.md` | BrowserContext class |
| `api/class-browserserver.md` | BrowserServer class |
| `api/class-browsertype.md` | BrowserType class (launch, connect) |
| `api/class-page.md` | Page class (main automation API) |
| `api/class-frame.md` | Frame class |
| `api/class-framelocator.md` | FrameLocator class |
| `api/class-locator.md` | Locator class |
| `api/class-elementhandle.md` | ElementHandle class (legacy) |
| `api/class-jshandle.md` | JSHandle class |
| `api/class-keyboard.md` | Keyboard class |
| `api/class-mouse.md` | Mouse class |
| `api/class-touchscreen.md` | Touchscreen class |
| `api/class-request.md` | Request class |
| `api/class-requestoptions.md` | RequestOptions class |
| `api/class-response.md` | Response class |
| `api/class-route.md` | Route class (network interception) |
| `api/class-websocket.md` | WebSocket class |
| `api/class-websocketframe.md` | WebSocketFrame class |
| `api/class-websocketroute.md` | WebSocketRoute class |
| `api/class-apirequest.md` | APIRequest class |
| `api/class-apirequestcontext.md` | APIRequestContext class |
| `api/class-apiresponse.md` | APIResponse class |
| `api/class-apiresponseassertions.md` | APIResponseAssertions class |
| `api/class-locatorassertions.md` | LocatorAssertions class |
| `api/class-pageassertions.md` | PageAssertions class |
| `api/class-playwrightassertions.md` | PlaywrightAssertions class |
| `api/class-genericassertions.md` | GenericAssertions class |
| `api/class-snapshotassertions.md` | SnapshotAssertions class |
| `api/class-dialog.md` | Dialog class |
| `api/class-download.md` | Download class |
| `api/class-filechooser.md` | FileChooser class |
| `api/class-formdata.md` | FormData class |
| `api/class-video.md` | Video class |
| `api/class-screencast.md` | Screencast class |
| `api/class-tracing.md` | Tracing class |
| `api/class-coverage.md` | Coverage class |
| `api/class-clock.md` | Clock class |
| `api/class-credentials.md` | Credentials (WebAuthn) class |
| `api/class-selectors.md` | Selectors class (custom engines) |
| `api/class-worker.md` | Worker class |
| `api/class-cdpsession.md` | CDPSession class |
| `api/class-cdpsessionevent.md` | CDPSessionEvent class |
| `api/class-consolemessage.md` | ConsoleMessage class |
| `api/class-webstorage.md` | WebStorage class |
| `api/class-logger.md` | Logger class |
| `api/class-debugger.md` | Debugger class |
| `api/class-disposable.md` | Disposable interface |
| `api/class-error.md` | Error class |
| `api/class-timeouterror.md` | TimeoutError class |
| `api/class-playwrightexception.md` | PlaywrightException class |
| `api/class-weberror.md` | WebError class |

### test-api/ — Test runner API reference (12 files)

| File | Description |
|------|-------------|
| `test-api/class-test.md` | test object (describe, it, beforeEach, etc.) |
| `test-api/class-testconfig.md` | TestConfig options |
| `test-api/class-fullconfig.md` | FullConfig (resolved config) |
| `test-api/class-testproject.md` | TestProject options |
| `test-api/class-fullproject.md` | FullProject (resolved project) |
| `test-api/class-testoptions.md` | TestOptions (use options) |
| `test-api/class-fixtures.md` | Fixtures class |
| `test-api/class-testinfo.md` | TestInfo (per-test metadata) |
| `test-api/class-testinfoerror.md` | TestInfoError class |
| `test-api/class-teststepinfo.md` | TestStepInfo class |
| `test-api/class-workerinfo.md` | WorkerInfo class |
| `test-api/class-location.md` | Location class |

### test-reporter-api/ — Reporter API reference (6 files)

| File | Description |
|------|-------------|
| `test-reporter-api/class-reporter.md` | Reporter interface |
| `test-reporter-api/class-suite.md` | Suite class |
| `test-reporter-api/class-testcase.md` | TestCase class |
| `test-reporter-api/class-testresult.md` | TestResult class |
| `test-reporter-api/class-teststep.md` | TestStep class |
| `test-reporter-api/class-testerror.md` | TestError class |
