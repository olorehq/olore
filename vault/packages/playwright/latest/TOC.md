# playwright Table of Contents

## Directory Map

```
contents/
├── *.md                # Guides, concepts, test runner docs (95 files; suffix -js/-java/-python/-csharp marks language)
├── api/                  # Core library API reference (55 files)
├── test-api/             # Playwright Test API reference (12 files)
├── test-reporter-api/    # Reporter API reference (7 files)
├── mobile-api/           # Android API (experimental) (5 files)
├── electron-api/         # Electron API (experimental) (2 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install and first test (Node) | `contents/intro-js.md` |
| Install (Python / Java / .NET) | `contents/intro-python.md`, `contents/intro-java.md`, `contents/intro-csharp.md` |
| Locators | `contents/locators.md` |
| Assertions | `contents/test-assertions-js.md` |
| Fixtures | `contents/test-fixtures-js.md` |
| Configuration | `contents/test-configuration-js.md` |
| Mock network | `contents/mock.md` |
| Debugging | `contents/debug.md` |
| Page API | `contents/api/class-page.md` |
| CI setup | `contents/ci.md` |

## Detailed Structure

File naming: `-js` = Node.js/TypeScript Playwright Test, `-python`, `-java`, `-csharp` = other languages; unsuffixed files apply to all languages.

### contents/ (root) (95 files)

| File | Description |
|------|-------------|
| `accessibility-testing-java.md` | Accessibility testing with axe-core and Playwright (Java) |
| `accessibility-testing-js.md` | Accessibility testing with axe-core and Playwright (JavaScript/TypeScript) |
| `actionability.md` | Auto-waiting: actionability checks run before each action (visible, stable, enabled, etc.) |
| `api-testing-csharp.md` | API testing with APIRequestContext: REST requests, auth, and state sharing with the browser (.NET) |
| `api-testing-java.md` | API testing with APIRequestContext: REST requests, auth, and state sharing with the browser (Java) |
| `api-testing-js.md` | API testing with APIRequestContext: REST requests, auth, and state sharing with the browser (JavaScript/TypeScript) |
| `api-testing-python.md` | API testing with APIRequestContext: REST requests, auth, and state sharing with the browser (Python) |
| `aria-snapshots.md` | ARIA snapshot testing with toMatchAriaSnapshot and YAML accessibility-tree templates |
| `auth.md` | Authentication: reusing signed-in state across tests via storageState and setup projects |
| `best-practices-js.md` | Best practices for writing reliable, maintainable Playwright tests |
| `browser-contexts.md` | Isolation: browser contexts as clean-slate isolated sessions, multi-context scenarios |
| `browsers.md` | Installing and managing browser binaries, channels, Chrome/Edge/WebKit/Firefox |
| `chrome-extensions-js-python.md` | Testing Chrome extensions with persistent contexts |
| `ci-intro.md` | Setting up CI quickly with GitHub Actions workflow |
| `ci.md` | Running tests in CI: sample configs for GitHub, GitLab, Azure, Jenkins, CircleCI and others |
| `clock.md` | Clock API: mocking and controlling Date, timers and time passage in tests |
| `codegen-intro.md` | Generating tests with Codegen and recording user actions |
| `codegen.md` | Test generator: codegen options, emulation, and recording sessions |
| `debug.md` | Debugging tests: Inspector, VS Code, browser dev tools, PWDEBUG, verbose logs |
| `dialogs.md` | Handling alert, confirm, prompt and beforeunload dialogs |
| `docker.md` | Running Playwright in Docker images and container setup |
| `downloads.md` | Handling file downloads triggered by the page |
| `emulation.md` | Emulating devices, viewport, locale, timezone, geolocation, permissions, color scheme |
| `evaluating.md` | Evaluating JavaScript in the page and passing arguments between Node and browser |
| `events.md` | Listening to page events: requests, popups, console, dialogs, downloads |
| `extensibility.md` | Custom selector engines and registering them |
| `frames.md` | Working with frames and iframes via Frame and FrameLocator |
| `getting-started-cli.md` | playwright-cli: command-line browser automation for coding agents |
| `getting-started-mcp.md` | Playwright MCP server for browser automation through Model Context Protocol |
| `getting-started-vscode-js.md` | Using the Playwright VS Code extension to run, debug and record tests |
| `handles.md` | JSHandle and ElementHandle: references to in-page objects and DOM nodes |
| `input.md` | Actions: typing, clicking, checkboxes, select options, uploading files, drag and drop |
| `intro-csharp.md` | Installation and first test setup (.NET) |
| `intro-java.md` | Installation and first test setup (Java) |
| `intro-js.md` | Installation and first test setup (JavaScript/TypeScript) |
| `intro-python.md` | Installation and first test setup (Python) |
| `junit-java.md` | Using Playwright with JUnit in Java |
| `languages.md` | Supported languages (Node.js, Python, Java, .NET) and their feature parity |
| `library-csharp.md` | Using Playwright as a library for browser automation outside a test runner (.NET) |
| `library-js.md` | Using Playwright as a library for browser automation outside a test runner (JavaScript/TypeScript) |
| `library-python.md` | Using Playwright as a library for browser automation outside a test runner (Python) |
| `locators.md` | Locators: role, text, label, test id, CSS, filtering and chaining; core of auto-waiting |
| `mock-browser-js.md` | Mocking browser APIs such as clipboard, geolocation, and other experimental APIs |
| `mock.md` | Mocking and modifying network requests, HAR replay, and API responses |
| `navigations.md` | Navigating to URLs, waiting for navigations and load states |
| `network.md` | Monitoring and modifying network traffic, proxies, HTTP auth, WebSockets |
| `other-locators.md` | Legacy and CSS/XPath locators, selector syntax and pseudo-classes |
| `pages.md` | Pages and popups: working with tabs, new windows and page lifecycle |
| `pom.md` | Page object model pattern for structuring test suites |
| `protractor-js.md` | Migrating from Protractor to Playwright Test |
| `puppeteer-js.md` | Migrating from Puppeteer to Playwright |
| `running-tests-csharp.md` | Running and debugging tests, selecting browsers and tests (.NET) |
| `running-tests-java.md` | Running and debugging tests, selecting browsers and tests (Java) |
| `running-tests-js.md` | Running and debugging tests, selecting browsers and tests (JavaScript/TypeScript) |
| `running-tests-python.md` | Running and debugging tests, selecting browsers and tests (Python) |
| `screenshots.md` | Taking page, element and full-page screenshots |
| `selenium-grid.md` | Connecting Playwright to Selenium Grid (experimental) |
| `service-workers-js-python.md` | Service workers: intercepting, routing and blocking them |
| `test-agents-js.md` | Test agents: planner, generator and healer for AI-assisted test creation |
| `test-annotations-js.md` | Annotations and tags: skip, fixme, fail, slow, tag, custom annotations |
| `test-assertions-csharp-java-python.md` | Web-first assertions for .NET, Java and Python, auto-retrying |
| `test-assertions-js.md` | Assertions with expect: web-first matchers, polling, soft assertions, custom matchers |
| `test-cli-js.md` | Command line: running tests, flags, codegen, show-report, install |
| `test-components-js.md` | Experimental component testing for React, Vue, Svelte |
| `test-configuration-js.md` | Test configuration: playwright.config options, projects, timeouts, reporters |
| `test-fixtures-js.md` | Fixtures: built-in, custom, worker-scoped, auto and overridden fixtures |
| `test-global-setup-teardown-js.md` | Global setup and teardown via project dependencies or config files |
| `test-parallel-js.md` | Parallelism: workers, fully parallel mode, serial mode, test isolation |
| `test-parameterize-js.md` | Parameterizing tests by data or project options and environment variables |
| `test-projects-js.md` | Projects: multiple browsers/configs, dependencies, splitting tests |
| `test-reporters-js.md` | Built-in reporters (list, line, dot, html, json, junit, blob) and custom reporters |
| `test-retries-js.md` | Retries, flaky test detection and per-test retry configuration |
| `test-runners-csharp.md` | Test runners for .NET: MSTest, NUnit, xUnit and base classes |
| `test-runners-java.md` | Hooking Playwright up to Java test runners |
| `test-runners-python.md` | Pytest plugin reference: CLI options, fixtures and configuration |
| `test-sharding-js.md` | Sharding tests across machines and merging reports |
| `test-snapshots-js.md` | Visual comparisons with toHaveScreenshot and snapshot updating |
| `test-timeouts-js.md` | Test, expect, action and navigation timeouts |
| `test-typescript-js.md` | TypeScript support, tsconfig paths and babel transforms |
| `test-ui-mode-js.md` | UI Mode: watch mode, time travel debugging, filters |
| `test-use-options-js.md` | Use options: browser, context, network, recording and emulation options |
| `test-webserver-js.md` | Launching a local dev server before tests with the webServer option |
| `testing-library-js.md` | Migrating from Testing Library to Playwright component testing |
| `threading-java.md` | Thread safety and multithreading with Playwright Java |
| `touch-events.md` | Legacy touch events emulation |
| `trace-viewer-intro-csharp.md` | Trace viewer introduction: recording and viewing traces (.NET) |
| `trace-viewer-intro-java-python.md` | Trace viewer introduction: recording and viewing traces (Java and Python) |
| `trace-viewer-intro-js.md` | Trace viewer introduction: recording and viewing traces (JavaScript/TypeScript) |
| `trace-viewer.md` | Trace Viewer: recording, opening and analyzing traces in depth |
| `videos.md` | Recording videos of tests |
| `webview2.md` | Automating Microsoft Edge WebView2 apps |
| `writing-tests-csharp.md` | Writing tests: actions, assertions, test isolation (.NET) |
| `writing-tests-java.md` | Writing tests: actions, assertions, test isolation (Java) |
| `writing-tests-js.md` | Writing tests: actions, assertions, test isolation (JavaScript/TypeScript) |
| `writing-tests-python.md` | Writing tests: actions, assertions, test isolation (Python) |

### api/ (55 files)

| File | Description |
|------|-------------|
| `class-apirequest.md` | Entry point for creating API request contexts |
| `class-apirequestcontext.md` | Send HTTP requests for API testing and share cookies with browser contexts |
| `class-apiresponse.md` | Response returned by APIRequestContext requests |
| `class-apiresponseassertions.md` | Assertions on API responses (toBeOK) |
| `class-browser.md` | A launched browser instance; creates contexts and pages |
| `class-browsercontext.md` | Isolated browser session: cookies, storage, routing, permissions, pages |
| `class-browserserver.md` | Server handle for a launched browser to connect to remotely |
| `class-browsertype.md` | Launch or connect to chromium, firefox or webkit |
| `class-cdpsession.md` | Raw Chrome DevTools Protocol session |
| `class-cdpsessionevent.md` | Events dispatched by a CDP session |
| `class-clock.md` | Control and fake time in the page |
| `class-consolemessage.md` | Console message dispatched by the page |
| `class-coverage.md` | JavaScript and CSS code coverage collection |
| `class-credentials.md` | Virtual WebAuthn authenticator for passkey testing |
| `class-debugger.md` | Pause and step through script execution |
| `class-dialog.md` | Alert, confirm, prompt dialog object |
| `class-disposable.md` | Handle for undoing registered actions |
| `class-download.md` | File download object with save and path methods |
| `class-elementhandle.md` | Reference to an in-page DOM element |
| `class-error.md` | Error type for abnormal Playwright operation termination |
| `class-filechooser.md` | File chooser dialog object for uploads |
| `class-formdata.md` | Build form data for API requests |
| `class-frame.md` | Frame tree node: navigation, locators, evaluation |
| `class-framelocator.md` | Locator view into an iframe |
| `class-genericassertions.md` | Generic value assertions (toBe, toEqual, etc.) |
| `class-jshandle.md` | Reference to an in-page JavaScript object |
| `class-keyboard.md` | Virtual keyboard input |
| `class-locator.md` | Locator methods: actions, queries, filtering, waiting |
| `class-locatorassertions.md` | Web-first locator assertions (toBeVisible, toHaveText, ...) |
| `class-logger.md` | Pluggable logger sink |
| `class-mouse.md` | Virtual mouse input |
| `class-page.md` | Single tab API: navigation, events, locators, screenshots, routing |
| `class-pageassertions.md` | Page assertions (toHaveURL, toHaveTitle, ...) |
| `class-playwright.md` | Root module exposing browser types, devices and selectors |
| `class-playwrightassertions.md` | Creating web-first assertions with expect |
| `class-playwrightexception.md` | Exception type thrown on abnormal termination |
| `class-request.md` | Network request object and its lifecycle events |
| `class-requestoptions.md` | Build request options and form data for API requests |
| `class-response.md` | Network response received by the page |
| `class-route.md` | Fulfill, continue, abort or modify intercepted requests |
| `class-screencast.md` | Capture screencast frames from a page |
| `class-selectors.md` | Register custom selector engines and set test id attribute |
| `class-snapshotassertions.md` | Snapshot and screenshot comparison assertions |
| `class-timeouterror.md` | Error thrown when an operation times out |
| `class-touchscreen.md` | Virtual touchscreen input |
| `class-tracing.md` | Start and stop trace recording and save traces |
| `class-video.md` | Recorded video associated with a page |
| `class-weberror.md` | Unhandled exception thrown in the page |
| `class-webmcp.md` | Tools registered by a frame via experimental WebMCP |
| `class-websocket.md` | WebSocket connection inspection and events |
| `class-websocketframe.md` | Frame sent over a WebSocket connection |
| `class-websocketroute.md` | Mock or intercept WebSocket connections |
| `class-webstorage.md` | Access localStorage or sessionStorage of the page |
| `class-worker.md` | Web worker representation and evaluation |
| `params.md` | Shared parameter and option definitions referenced across API docs |

### test-api/ (12 files)

| File | Description |
|------|-------------|
| `class-fixtures.md` | Built-in test fixtures (page, context, browser, request) |
| `class-fullconfig.md` | Resolved configuration passed to tests and reporters |
| `class-fullproject.md` | Resolved runtime project configuration |
| `class-location.md` | Source code location of tests or suites |
| `class-test.md` | test function: declare tests, hooks, steps, annotations |
| `class-testconfig.md` | All playwright.config options |
| `class-testinfo.md` | Info about the running test: attachments, status, outputs |
| `class-testinfoerror.md` | Error info for a failed test |
| `class-testoptions.md` | Test options for browser, context and more |
| `class-testproject.md` | Project configuration options |
| `class-teststepinfo.md` | Info about the current test step |
| `class-workerinfo.md` | Info about the worker running tests |

### test-reporter-api/ (7 files)

| File | Description |
|------|-------------|
| `class-reporter.md` | Custom reporter interface and lifecycle hooks |
| `class-suite.md` | Group of tests in the test hierarchy |
| `class-testcase.md` | A single test case and its metadata |
| `class-testerror.md` | Test error details |
| `class-testresult.md` | Result of a single test run |
| `class-testrun.md` | Controls which tests run and their status |
| `class-teststep.md` | A step within a test result |

### mobile-api/ (5 files)

| File | Description |
|------|-------------|
| `class-android.md` | Experimental Android automation entry point |
| `class-androiddevice.md` | Connected Android device: shell, input, webviews, screenshots |
| `class-androidinput.md` | Android input: taps, swipes, drags |
| `class-androidsocket.md` | Socket to a process on the Android device |
| `class-androidwebview.md` | WebView open on an Android device |

### electron-api/ (2 files)

| File | Description |
|------|-------------|
| `class-electron.md` | Launch Electron applications (experimental) |
| `class-electronapplication.md` | Running Electron app: windows, evaluate, close |
