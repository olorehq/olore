# playwright Table of Contents

## Directory Map

```
contents/
├── intro-js.md              # JS/TS getting started
├── intro-python.md          # Python getting started
├── intro-java.md            # Java getting started
├── intro-csharp.md          # C# getting started
├── writing-tests-*.md       # Writing tests (4 language variants)
├── running-tests-*.md       # Running tests (4 language variants)
├── test-assertions-*.md     # Assertions (JS + combined)
├── locators.md              # Locators guide
├── other-locators.md        # Legacy/other locators
├── actionability.md         # Auto-waiting and actionability
├── auth.md                  # Authentication
├── network.md               # Network interception
├── mock.md                  # Mocking
├── emulation.md             # Device/browser emulation
├── debug.md                 # Debugging
├── trace-viewer*.md         # Trace viewer (3 language variants)
├── screenshots.md           # Screenshots
├── videos.md                # Video recording
├── clock.md                 # Clock / time control
├── input.md                 # Input (click, type, keyboard)
├── navigations.md           # Page navigation
├── frames.md                # iframes and frames
├── pages.md                 # Multiple pages/tabs
├── dialogs.md               # Alert/confirm/prompt dialogs
├── downloads.md             # File downloads
├── events.md                # Events
├── handles.md               # JSHandle / ElementHandle
├── evaluating.md            # page.evaluate
├── extensibility.md         # Custom fixtures/matchers
├── pom.md                   # Page Object Model
├── browsers.md              # Browser management
├── browser-contexts.md      # Browser contexts / isolation
├── ci.md                    # CI configuration
├── ci-intro.md              # CI intro
├── docker.md                # Docker usage
├── selenium-grid.md         # Selenium Grid integration
├── webview2.md              # WebView2 support
├── touch-events.md          # Touch events
├── aria-snapshots.md        # ARIA snapshot assertions
├── accessibility-testing-js.md   # Accessibility testing (JS)
├── accessibility-testing-java.md # Accessibility testing (Java)
├── api-testing-*.md         # API testing (4 language variants)
├── best-practices-js.md     # Best practices
├── codegen.md               # Code generation
├── codegen-intro.md         # Code generation intro
├── getting-started-vscode-js.md  # VS Code integration
├── service-workers-js-python.md  # Service workers
├── chrome-extensions-js-python.md # Chrome extensions
├── mock-browser-js.md       # Browser API mocking
├── library-js.md            # Library mode (JS)
├── library-python.md        # Library mode (Python)
├── library-csharp.md        # Library mode (C#)
├── junit-java.md            # JUnit integration (Java)
├── test-agents-js.md        # AI agents testing
├── test-annotations-js.md   # Test annotations
├── test-assertions-js.md    # JS assertions
├── test-cli-js.md           # CLI reference
├── test-components-js.md    # Component testing
├── test-configuration-js.md # Test configuration
├── test-fixtures-js.md      # Test fixtures
├── test-global-setup-teardown-js.md # Global setup/teardown
├── test-parallel-js.md      # Parallel execution
├── test-parameterize-js.md  # Parameterized tests
├── test-projects-js.md      # Test projects
├── test-reporters-js.md     # Reporters
├── test-retries-js.md       # Test retries
├── test-sharding-js.md      # Test sharding
├── test-snapshots-js.md     # Visual snapshots
├── test-timeouts-js.md      # Timeouts
├── test-typescript-js.md    # TypeScript support
├── test-ui-mode-js.md       # UI mode
├── test-use-options-js.md   # Use options
├── test-webserver-js.md     # Web server fixture
├── test-runners-csharp.md   # Test runners (C#)
├── test-runners-java.md     # Test runners (Java)
├── test-runners-python.md   # Test runners (Python)
├── threading-java.md        # Threading (Java)
├── api/                     # Core API reference (64 files)
│   ├── class-playwright.md  # Playwright class
│   ├── class-browser.md     # Browser class
│   ├── class-browsercontext.md  # BrowserContext
│   ├── class-browsertype.md # BrowserType
│   ├── class-page.md        # Page (core)
│   ├── class-locator.md     # Locator
│   ├── class-frame.md       # Frame
│   ├── class-elementhandle.md # ElementHandle
│   ├── class-jshandle.md    # JSHandle
│   ├── class-request.md     # Request
│   ├── class-response.md    # Response
│   ├── class-route.md       # Route (network)
│   ├── class-apirequest.md  # APIRequest
│   ├── class-apirequestcontext.md # APIRequestContext
│   ├── class-apiresponse.md # APIResponse
│   ├── class-locatorassertions.md  # LocatorAssertions
│   ├── class-pageassertions.md     # PageAssertions
│   ├── class-apiresponseassertions.md # APIResponseAssertions
│   ├── class-genericassertions.md  # GenericAssertions
│   ├── class-snapshotassertions.md # SnapshotAssertions
│   ├── class-playwrightassertions.md # PlaywrightAssertions
│   ├── class-keyboard.md    # Keyboard
│   ├── class-mouse.md       # Mouse
│   ├── class-touchscreen.md # Touchscreen
│   ├── class-clock.md       # Clock
│   ├── class-dialog.md      # Dialog
│   ├── class-download.md    # Download
│   ├── class-video.md       # Video
│   ├── class-tracing.md     # Tracing
│   ├── class-coverage.md    # Coverage
│   ├── class-worker.md      # Worker
│   ├── class-websocket.md   # WebSocket
│   ├── class-websocketroute.md # WebSocketRoute
│   ├── class-websocketframe.md # WebSocketFrame
│   ├── class-consolemessage.md  # ConsoleMessage
│   ├── class-filechooser.md # FileChooser
│   ├── class-framelocator.md # FrameLocator
│   ├── class-selectors.md   # Selectors
│   ├── class-browserserver.md # BrowserServer
│   ├── class-cdpsession.md  # CDPSession
│   ├── class-cdpsessionevent.md # CDPSessionEvent
│   ├── class-formdata.md    # FormData
│   ├── class-requestoptions.md # RequestOptions
│   ├── class-logger.md      # Logger
│   ├── class-error.md       # Error
│   ├── class-timeouterror.md # TimeoutError
│   ├── class-weberror.md    # WebError
│   ├── class-disposable.md  # Disposable
│   ├── class-screencast.md  # Screencast
│   ├── class-debugger.md    # Debugger
│   ├── class-android.md     # Android
│   ├── class-androiddevice.md  # AndroidDevice
│   ├── class-androidinput.md   # AndroidInput
│   ├── class-androidsocket.md  # AndroidSocket
│   ├── class-androidwebview.md # AndroidWebView
│   ├── class-electron.md    # Electron
│   └── class-electronapplication.md # ElectronApplication
└── test-api/                # Test runner API (8 files)
    ├── class-test.md        # test() function
    ├── class-testconfig.md  # playwright.config.ts options
    ├── class-testoptions.md # use options
    ├── class-testinfo.md    # TestInfo
    ├── class-testproject.md # Project config
    ├── class-fullconfig.md  # Full resolved config
    ├── class-fullproject.md # Full resolved project
    ├── class-fixtures.md    # Built-in fixtures
    ├── class-workerinfo.md  # WorkerInfo
    ├── class-location.md    # Location
    ├── class-teststepinfo.md # TestStepInfo
    └── class-testinfoerror.md # TestInfoError
└── test-reporter-api/       # Reporter API (6 files)
    ├── class-reporter.md    # Reporter interface
    ├── class-suite.md       # Suite
    ├── class-testcase.md    # TestCase
    ├── class-testresult.md  # TestResult
    ├── class-teststep.md    # TestStep
    └── class-testerror.md   # TestError
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started (JS/TS) | `contents/intro-js.md` |
| Getting started (Python) | `contents/intro-python.md` |
| Getting started (Java) | `contents/intro-java.md` |
| Getting started (C#) | `contents/intro-csharp.md` |
| Writing tests | `contents/writing-tests-js.md` |
| Locators / selectors | `contents/locators.md` |
| API reference (core) | `contents/api/` |
| Test runner config | `contents/test-api/class-testconfig.md` |
| Assertions | `contents/test-assertions-js.md` |
| Network mocking | `contents/network.md` |
| Authentication | `contents/auth.md` |
| Debugging | `contents/debug.md` |
| CI setup | `contents/ci.md` |
| Page Object Model | `contents/pom.md` |

## Detailed Structure

### Root guides (101 files)

| File | Description |
|------|-------------|
| `intro-js.md` | Installation and first test (JS/TS) |
| `intro-python.md` | Installation and first test (Python) |
| `intro-java.md` | Installation and first test (Java) |
| `intro-csharp.md` | Installation and first test (C#) |
| `writing-tests-js.md` | Writing tests with JS/TS |
| `writing-tests-python.md` | Writing tests with Python |
| `writing-tests-java.md` | Writing tests with Java |
| `writing-tests-csharp.md` | Writing tests with C# |
| `running-tests-js.md` | Running tests (JS/TS) |
| `running-tests-python.md` | Running tests (Python) |
| `running-tests-java.md` | Running tests (Java) |
| `running-tests-csharp.md` | Running tests (C#) |
| `locators.md` | Recommended locator strategies |
| `other-locators.md` | CSS, XPath, legacy locators |
| `actionability.md` | Auto-waiting and actionability checks |
| `auth.md` | Authentication: storageState, cookies, tokens |
| `network.md` | Network interception, route, fulfill, abort |
| `mock.md` | Mocking APIs and HAR files |
| `emulation.md` | Viewport, geolocation, locale, timezone |
| `debug.md` | Playwright Inspector, VSCode, headed mode |
| `screenshots.md` | Full-page, element, clip screenshots |
| `videos.md` | Video recording |
| `clock.md` | Fake timers and clock control |
| `input.md` | click, fill, type, press, drag |
| `navigations.md` | goto, waitForNavigation, waitForURL |
| `frames.md` | iframes, frameLocator |
| `pages.md` | Multiple pages and tabs |
| `dialogs.md` | alert, confirm, prompt handling |
| `downloads.md` | File download handling |
| `events.md` | page.on, waitForEvent |
| `handles.md` | JSHandle, ElementHandle |
| `evaluating.md` | page.evaluate, page.exposeFunction |
| `extensibility.md` | Custom matchers and fixtures |
| `pom.md` | Page Object Model pattern |
| `browsers.md` | Chromium, Firefox, WebKit config |
| `browser-contexts.md` | Isolated browser contexts |
| `ci.md` | GitHub Actions, GitLab, Jenkins CI |
| `ci-intro.md` | CI overview |
| `docker.md` | Docker image usage |
| `selenium-grid.md` | Remote Selenium Grid |
| `webview2.md` | WebView2 testing |
| `touch-events.md` | Touch and pointer events |
| `aria-snapshots.md` | ARIA snapshot assertions |
| `accessibility-testing-js.md` | Axe accessibility testing (JS) |
| `accessibility-testing-java.md` | Axe accessibility testing (Java) |
| `api-testing-js.md` | HTTP API testing (JS) |
| `api-testing-python.md` | HTTP API testing (Python) |
| `api-testing-java.md` | HTTP API testing (Java) |
| `api-testing-csharp.md` | HTTP API testing (C#) |
| `best-practices-js.md` | Best practices guide |
| `codegen.md` | Code generator usage |
| `codegen-intro.md` | Code generator introduction |
| `getting-started-vscode-js.md` | VS Code extension |
| `service-workers-js-python.md` | Service worker interception |
| `chrome-extensions-js-python.md` | Chrome extension testing |
| `mock-browser-js.md` | Mock browser APIs (geolocation, permissions) |
| `library-js.md` | Using Playwright as a library (JS) |
| `library-python.md` | Using Playwright as a library (Python) |
| `library-csharp.md` | Using Playwright as a library (C#) |
| `junit-java.md` | JUnit 5 integration |
| `test-agents-js.md` | Testing AI agents |
| `test-annotations-js.md` | skip, fixme, fail, slow annotations |
| `test-assertions-js.md` | expect() assertions (JS) |
| `test-assertions-csharp-java-python.md` | expect() assertions (non-JS) |
| `test-cli-js.md` | npx playwright test CLI flags |
| `test-components-js.md` | Component testing (React, Vue, Svelte) |
| `test-configuration-js.md` | playwright.config.ts reference |
| `test-fixtures-js.md` | Creating and using fixtures |
| `test-global-setup-teardown-js.md` | globalSetup, globalTeardown |
| `test-parallel-js.md` | Parallel test workers |
| `test-parameterize-js.md` | Data-driven / parameterized tests |
| `test-projects-js.md` | Multi-project configuration |
| `test-reporters-js.md` | Built-in and custom reporters |
| `test-retries-js.md` | Retry on failure |
| `test-sharding-js.md` | Sharding across machines |
| `test-snapshots-js.md` | Visual regression / screenshot comparison |
| `test-timeouts-js.md` | Test, action, navigation timeouts |
| `test-typescript-js.md` | TypeScript path aliases, tsconfig |
| `test-ui-mode-js.md` | UI mode (--ui flag) |
| `test-use-options-js.md` | use: { baseURL, headless, ... } |
| `test-webserver-js.md` | webServer fixture |
| `test-runners-csharp.md` | MSTest / NUnit runners |
| `test-runners-java.md` | JUnit / TestNG runners |
| `test-runners-python.md` | pytest-playwright |
| `threading-java.md` | Multi-threading in Java |
| `trace-viewer.md` | Trace viewer overview |
| `trace-viewer-intro-js.md` | Recording and opening traces (JS) |
| `trace-viewer-intro-java-python.md` | Recording traces (Java/Python) |
| `trace-viewer-intro-csharp.md` | Recording traces (C#) |

### api/ (64 files)

| File | Description |
|------|-------------|
| `class-playwright.md` | Playwright entry point |
| `class-browser.md` | Browser: newPage, newContext, close |
| `class-browsercontext.md` | BrowserContext: cookies, storageState, route |
| `class-browsertype.md` | BrowserType: launch, launchPersistentContext |
| `class-page.md` | Page: goto, click, fill, screenshot, evaluate |
| `class-locator.md` | Locator: click, fill, isVisible, waitFor |
| `class-frame.md` | Frame: same API as Page for iframes |
| `class-framelocator.md` | FrameLocator: contentFrame |
| `class-elementhandle.md` | ElementHandle (legacy): DOM element handle |
| `class-jshandle.md` | JSHandle: JS object handle |
| `class-request.md` | Request: url, method, headers, postData |
| `class-response.md` | Response: status, body, json |
| `class-route.md` | Route: fulfill, abort, continue, fetch |
| `class-apirequest.md` | APIRequest: newContext |
| `class-apirequestcontext.md` | APIRequestContext: get, post, put, delete |
| `class-apiresponse.md` | APIResponse: status, body, json |
| `class-locatorassertions.md` | expect(locator): toBeVisible, toHaveText |
| `class-pageassertions.md` | expect(page): toHaveURL, toHaveTitle |
| `class-apiresponseassertions.md` | expect(response): toBeOK |
| `class-genericassertions.md` | expect(value): toBe, toEqual, toContain |
| `class-snapshotassertions.md` | expect(value).toMatchSnapshot |
| `class-playwrightassertions.md` | expect() factory |
| `class-keyboard.md` | Keyboard: press, type, down, up |
| `class-mouse.md` | Mouse: click, move, down, up, wheel |
| `class-touchscreen.md` | Touchscreen: tap |
| `class-clock.md` | Clock: install, setFixedTime, tick |
| `class-dialog.md` | Dialog: accept, dismiss, message |
| `class-download.md` | Download: path, saveAs, url |
| `class-video.md` | Video: path |
| `class-tracing.md` | Tracing: start, stop, startChunk |
| `class-coverage.md` | Coverage: startJSCoverage, startCSSCoverage |
| `class-worker.md` | Worker: url, evaluate |
| `class-websocket.md` | WebSocket: url, waitForEvent |
| `class-websocketroute.md` | WebSocketRoute: send, receive, close |
| `class-websocketframe.md` | WebSocketFrame: text, binary |
| `class-consolemessage.md` | ConsoleMessage: type, text, args |
| `class-filechooser.md` | FileChooser: setFiles |
| `class-selectors.md` | Selectors: register custom selectors |
| `class-browserserver.md` | BrowserServer: wsEndpoint, close |
| `class-cdpsession.md` | CDPSession: send, on (Chrome DevTools) |
| `class-cdpsessionevent.md` | CDPSession events |
| `class-formdata.md` | FormData: append, set |
| `class-requestoptions.md` | RequestOptions: setHeader, setTimeout |
| `class-logger.md` | Logger interface |
| `class-error.md` | PlaywrightError base |
| `class-timeouterror.md` | TimeoutError |
| `class-weberror.md` | WebError: page, error |
| `class-disposable.md` | Disposable interface |
| `class-screencast.md` | Screencast |
| `class-debugger.md` | Debugger |
| `class-android.md` | Android: devices, connect |
| `class-androiddevice.md` | AndroidDevice: shell, input, webView |
| `class-androidinput.md` | AndroidInput: tap, swipe, type |
| `class-androidsocket.md` | AndroidSocket: write, close |
| `class-androidwebview.md` | AndroidWebView: pid, page |
| `class-electron.md` | Electron: launch |
| `class-electronapplication.md` | ElectronApplication: evaluate, firstWindow |

### test-api/ (12 files)

| File | Description |
|------|-------------|
| `class-test.md` | test(), test.describe(), test.beforeEach() |
| `class-testconfig.md` | playwright.config.ts top-level options |
| `class-testoptions.md` | use: { baseURL, headless, viewport, ... } |
| `class-testinfo.md` | TestInfo: title, retry, attachments, skip() |
| `class-testproject.md` | Project-level config options |
| `class-fullconfig.md` | Resolved full config object |
| `class-fullproject.md` | Resolved full project config |
| `class-fixtures.md` | page, context, browser, browserName fixtures |
| `class-workerinfo.md` | WorkerInfo: workerIndex, parallelIndex |
| `class-location.md` | Location: file, line, column |
| `class-teststepinfo.md` | TestStepInfo |
| `class-testinfoerror.md` | TestInfoError: message, stack |

### test-reporter-api/ (6 files)

| File | Description |
|------|-------------|
| `class-reporter.md` | Reporter interface: onBegin, onTestEnd, onEnd |
| `class-suite.md` | Suite: title, tests, suites |
| `class-testcase.md` | TestCase: title, results, annotations |
| `class-testresult.md` | TestResult: status, duration, attachments |
| `class-teststep.md` | TestStep: title, duration, steps |
| `class-testerror.md` | TestError: message, stack |
