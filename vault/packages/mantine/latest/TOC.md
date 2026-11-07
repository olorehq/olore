# Mantine Table of Contents

Total: 336 files under `contents/` (MDX).

## Directory Map

```
contents/
├── charts/          # @mantine/charts components (23 files)
├── code-highlight/  # @mantine/code-highlight (3 files)
├── core/            # @mantine/core components (122 files)
├── dates/           # @mantine/dates pickers (16 files)
├── form/            # @mantine/form (16 files)
├── guides/          # Framework, testing, migration guides (19 files)
├── hooks/           # @mantine/hooks (82 files)
├── schedule/        # @mantine/schedule calendar views (14 files)
├── styles/          # Styling system (23 files)
├── theming/         # Theme and MantineProvider (6 files)
├── x/               # Extension packages (9 files)
└── *.mdx            # Root pages: getting started, browser support (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install / new project | `contents/getting-started.mdx` |
| Theme and dark mode | `contents/theming/mantine-provider.mdx` |
| Component lookup | `contents/core/package.mdx` |
| Forms | `contents/form/use-form.mdx` |
| Styling | `contents/styles/styles-overview.mdx` |
| Hooks | `contents/hooks/package.mdx` |
| Framework setup | `contents/guides/next.mdx` |
| Migration | `contents/guides/8x-to-9x.mdx` |

## Detailed Structure

### root (3 files)

| File | Description |
|------|-------------|
| `browser-support.mdx` | Browsers and versions officially supported by Mantine |
| `getting-started.mdx` | Starting templates and installation overview for Mantine |
| `oxc-config-mantine.mdx` | Oxlint/oxc config preset for Mantine projects |

### charts/ (23 files)

| File | Description |
|------|-------------|
| `area-chart.mdx` | AreaChart: stacked, percent, split and gradient area charts |
| `bar-chart.mdx` | BarChart: stacked, grouped and horizontal bar charts |
| `bars-list.mdx` | BarsList: list of named horizontal bars with values |
| `bubble-chart.mdx` | BubbleChart: scatter-style chart with sized bubbles |
| `bullet-chart.mdx` | BulletChart: compact KPI chart comparing actual value to target |
| `candlestick-chart.mdx` | CandlestickChart: financial OHLC chart |
| `composite-chart.mdx` | CompositeChart: combine Line, Area and Bar series in one chart |
| `donut-chart.mdx` | DonutChart: donut chart based on recharts PieChart |
| `funnel-chart.mdx` | FunnelChart: conversion funnel visualisation |
| `gauge-chart.mdx` | GaugeChart: single value on a radial arc |
| `getting-started.mdx` | Install @mantine/charts and import styles |
| `heatmap.mdx` | Heatmap: calendar-style activity grid |
| `line-chart.mdx` | LineChart: line charts with gradient, dashed and multi-series options |
| `matrix-chart.mdx` | MatrixChart: x/y heatmap with categorical axes |
| `pie-chart.mdx` | PieChart: pie chart based on recharts |
| `radar-chart.mdx` | RadarChart: multi-axis radar/spider chart |
| `radial-bar-chart.mdx` | RadialBarChart: circular bar chart |
| `sankey-chart.mdx` | SankeyChart: flow diagram between nodes |
| `scatter-chart.mdx` | ScatterChart: scatter plots with legends and custom axes |
| `sparkline.mdx` | Sparkline: minimal inline area chart |
| `sunburst-chart.mdx` | SunburstChart: hierarchical radial chart |
| `treemap.mdx` | Treemap: nested rectangles for hierarchical data |
| `waffle-chart.mdx` | WaffleChart: parts of a whole as a grid of cells |

### code-highlight/ (3 files)

| File | Description |
|------|-------------|
| `code-highlight.mdx` | CodeHighlight: syntax-highlighted code blocks |
| `getting-started.mdx` | Install @mantine/code-highlight and set up highlighters |
| `json-viewer.mdx` | JsonViewer: interactive JSON tree viewer |

### core/ (122 files)

| File | Description |
|------|-------------|
| `accordion.mdx` | Accordion: collapsible content sections |
| `action-bar.mdx` | ActionBar: fixed bottom bar shown for selected items |
| `action-icon.mdx` | ActionIcon: icon button with variants and sizes |
| `affix.mdx` | Affix: render content at a fixed screen position |
| `alert.mdx` | Alert: callout with icon, title and close button |
| `alpha-slider.mdx` | AlphaSlider: pick color opacity |
| `anchor.mdx` | Anchor: styled link with underline options |
| `angle-slider.mdx` | AngleSlider: pick an angle from 0 to 360 |
| `app-shell.mdx` | AppShell: responsive layout with header, navbar, aside, footer |
| `aspect-ratio.mdx` | AspectRatio: keep a fixed width/height ratio |
| `autocomplete.mdx` | Autocomplete: text input with suggestions |
| `avatar.mdx` | Avatar: user image, initials or placeholder, plus Avatar.Group |
| `background-image.mdx` | BackgroundImage: element with a background image |
| `badge.mdx` | Badge: small status or label chip |
| `blockquote.mdx` | Blockquote: styled quotation with citation |
| `box.mdx` | Box: base component with style props and polymorphism |
| `breadcrumbs.mdx` | Breadcrumbs: navigation path with separators |
| `burger.mdx` | Burger: open/close menu button |
| `button.mdx` | Button: variants, sizes, loading state, sections, Button.Group |
| `card.mdx` | Card: container with Card.Section |
| `cascader.mdx` | Cascader: select from hierarchical data in columns |
| `center.mdx` | Center: center content horizontally and vertically |
| `checkbox.mdx` | Checkbox: controlled/indeterminate checkbox, Checkbox.Group and Card |
| `chip.mdx` | Chip: toggleable pill, Chip.Group |
| `close-button.mdx` | CloseButton: button with an X icon |
| `code.mdx` | Code: inline and block code |
| `collapse.mdx` | Collapse: animated show/hide of content |
| `color-input.mdx` | ColorInput: text input with color picker and eye dropper |
| `color-picker.mdx` | ColorPicker: full color selection (hex, rgb, hsl) |
| `color-swatch.mdx` | ColorSwatch: display a color sample |
| `combobox.mdx` | Combobox: primitives for custom select/autocomplete components |
| `combobox-popover.mdx` | ComboboxPopover: dropdown of selectable options on any button |
| `container.mdx` | Container: centered max-width wrapper |
| `copy-button.mdx` | CopyButton: copy value to clipboard render-prop |
| `data-list.mdx` | DataList: description list of label-value pairs |
| `dialog.mdx` | Dialog: simplified floating modal |
| `divider.mdx` | Divider: horizontal/vertical separator with label |
| `drawer.mdx` | Drawer: sliding overlay panel, Drawer.Stack |
| `empty-state.mdx` | EmptyState: placeholder for no-data situations |
| `fieldset.mdx` | Fieldset: group related inputs with legend |
| `file-button.mdx` | FileButton: open the file picker from any element |
| `file-input.mdx` | FileInput: input for selecting files |
| `flex.mdx` | Flex: flexbox container with responsive props |
| `floating-indicator.mdx` | FloatingIndicator: highlight the active element in a group |
| `floating-window.mdx` | FloatingWindow: draggable fixed-position element |
| `focus-trap.mdx` | FocusTrap: trap keyboard focus inside a node |
| `grid.mdx` | Grid: 12-column responsive layout |
| `group.mdx` | Group: horizontal flex container |
| `highlight.mdx` | Highlight: mark substrings within text |
| `hover-card.mdx` | HoverCard: popover shown on hover |
| `hue-slider.mdx` | HueSlider: pick color hue |
| `image.mdx` | Image: img wrapper with fallback |
| `indicator.mdx` | Indicator: status dot or badge on an element |
| `input.mdx` | Input: base for custom inputs, Input.Wrapper and Input.Label |
| `json-input.mdx` | JsonInput: textarea with JSON validation and formatting |
| `kbd.mdx` | Kbd: keyboard key display |
| `list.mdx` | List: ordered/unordered lists with custom icons |
| `loader.mdx` | Loader: loading indicators (oval, bars, dots) |
| `loading-overlay.mdx` | LoadingOverlay: overlay with loader over a container |
| `mark.mdx` | Mark: highlighted text |
| `marquee.mdx` | Marquee: continuous scrolling animation |
| `mask-input.mdx` | MaskInput: input with formatting mask |
| `menu.mdx` | Menu: dropdown menu with submenus |
| `menubar.mdx` | Menubar: desktop-style horizontal menu bar |
| `modal.mdx` | Modal: dialog overlay, Modal.Root and ModalBase |
| `multi-select.mdx` | MultiSelect: select multiple values from a list |
| `native-select.mdx` | NativeSelect: native select element |
| `nav-link.mdx` | NavLink: sidebar navigation item with nested links |
| `notification.mdx` | Notification: base notification component |
| `number-formatter.mdx` | NumberFormatter: format numbers for display |
| `number-input.mdx` | NumberInput: numeric input with formatting, min/max, step |
| `overflow-list.mdx` | OverflowList: render items that fit, collapse the rest |
| `overlay.mdx` | Overlay: dimmed layer over a container |
| `package.mdx` | @mantine/core package overview: installation and component list |
| `pagination.mdx` | Pagination: page navigation controls |
| `paper.mdx` | Paper: surface with background, border and shadow |
| `password-input.mdx` | PasswordInput: input with visibility toggle |
| `pill.mdx` | Pill: tag-like element for inputs, Pill.Group |
| `pills-input.mdx` | PillsInput: base for custom tag inputs |
| `pin-input.mdx` | PinInput: one-time code input |
| `popover.mdx` | Popover: floating dropdown for any content |
| `portal.mdx` | Portal: render children in a different DOM node |
| `progress.mdx` | Progress: progress bar with sections |
| `radio.mdx` | Radio: radio inputs, Radio.Group and Radio.Card |
| `range-slider.mdx` | RangeSlider: select a numeric range |
| `rating.mdx` | Rating: star rating input |
| `ring-progress.mdx` | RingProgress: circular progress with sections |
| `rolling-number.mdx` | RollingNumber: animated digit transitions |
| `scroll-area.mdx` | ScrollArea: custom scrollbars |
| `scroller.mdx` | Scroller: horizontal scroll container with nav buttons |
| `segmented-control.mdx` | SegmentedControl: toggle between options |
| `select.mdx` | Select: searchable single-value dropdown |
| `semi-circle-progress.mdx` | SemiCircleProgress: half-circle progress |
| `simple-grid.mdx` | SimpleGrid: responsive equal-width columns |
| `skeleton.mdx` | Skeleton: loading placeholders |
| `slider.mdx` | Slider: single-value slider with marks |
| `space.mdx` | Space: add horizontal/vertical spacing |
| `splitter.mdx` | Splitter: resizable split panes |
| `spoiler.mdx` | Spoiler: show more/less for long content |
| `stack.mdx` | Stack: vertical flex container |
| `stepper.mdx` | Stepper: multi-step progress and wizard |
| `switch.mdx` | Switch: on/off toggle, Switch.Group |
| `table.mdx` | Table: data tables, sticky headers, Table.ScrollContainer |
| `table-of-contents.mdx` | TableOfContents: heading navigation with scroll spy |
| `tabs.mdx` | Tabs: tabbed content panels |
| `tags-input.mdx` | TagsInput: enter multiple free-form values |
| `text.mdx` | Text: text with size, color, truncate, line clamp |
| `text-input.mdx` | TextInput: single-line text input |
| `textarea.mdx` | Textarea: multi-line input with autosize |
| `theme-icon.mdx` | ThemeIcon: icon with themed background |
| `timeline.mdx` | Timeline: vertical event timeline |
| `title.mdx` | Title: h1-h6 headings |
| `toggle.mdx` | Toggle: button with active/inactive state |
| `toolbar.mdx` | Toolbar: toggle button group with arrow-key navigation |
| `tooltip.mdx` | Tooltip: hover hint, Tooltip.Group, Tooltip.Floating |
| `tour.mdx` | Tour: step-by-step onboarding guide |
| `transition.mdx` | Transition: animate presence of elements |
| `tree.mdx` | Tree: hierarchical data display with expand/select |
| `tree-select.mdx` | TreeSelect: pick values from hierarchical tree |
| `typography.mdx` | TypographyStylesProvider: styles for rendered HTML content |
| `unstyled-button.mdx` | UnstyledButton: reset button for custom buttons |
| `visually-hidden.mdx` | VisuallyHidden: hide content visually for screen readers |

### dates/ (16 files)

| File | Description |
|------|-------------|
| `calendar.mdx` | Calendar: build custom date pickers |
| `date-input.mdx` | DateInput: typed date entry with parsing |
| `date-picker.mdx` | DatePicker: inline date selection (single, multiple, range) |
| `date-picker-input.mdx` | DatePickerInput: date picker in a dropdown |
| `date-time-picker.mdx` | DateTimePicker: date and time in one input |
| `getting-started.mdx` | Install @mantine/dates, dayjs setup, locale and shared props |
| `inline-date-time-picker.mdx` | InlineDateTimePicker: inline date and time picker |
| `mini-calendar.mdx` | MiniCalendar: compact scrollable day strip |
| `month-picker.mdx` | MonthPicker: inline month selection |
| `month-picker-input.mdx` | MonthPickerInput: month picker in a dropdown |
| `time-grid.mdx` | TimeGrid: pick a time from a grid of slots |
| `time-input.mdx` | TimeInput: native time input |
| `time-picker.mdx` | TimePicker: time input with dropdowns, 12/24h |
| `time-value.mdx` | TimeValue: display formatted time |
| `year-picker.mdx` | YearPicker: inline year selection |
| `year-picker-input.mdx` | YearPickerInput: year picker in a dropdown |

### form/ (16 files)

| File | Description |
|------|-------------|
| `actions.mdx` | Update form state from anywhere with form actions |
| `all-inputs.mdx` | use-form with every Mantine input |
| `create-form-context.mdx` | createFormContext: share form via React context |
| `errors.mdx` | Read, set and clear form errors |
| `get-input-props.mdx` | form.getInputProps and form.key for binding inputs |
| `nested.mdx` | Nested objects and lists, array handlers |
| `package.mdx` | @mantine/form package overview and installation |
| `recipes.mdx` | Form recipes: common patterns and examples |
| `schema-validation.mdx` | Validate with Zod, Valibot and other Standard Schema libraries |
| `status.mdx` | Touched, dirty and field status tracking |
| `uncontrolled.mdx` | Uncontrolled mode for better performance |
| `use-field.mdx` | use-field: single-field state and validation |
| `use-form.mdx` | use-form: form state, validation, submit handling |
| `validation.mdx` | Validation rules, validate on blur/change |
| `validators.mdx` | Built-in validator functions |
| `values.mdx` | Initial values, setValues, reset and transform |

### guides/ (19 files)

| File | Description |
|------|-------------|
| `6x-to-7x.mdx` | Migrate from Mantine 6.x to 7.x |
| `7x-to-8x.mdx` | Migrate from Mantine 7.x to 8.x |
| `8x-to-9x.mdx` | Migrate from Mantine 8.x to 9.x |
| `controlled-vs-uncontrolled.mdx` | Controlled vs uncontrolled input modes |
| `custom-components.mdx` | Create custom components integrated with the theme and Styles API |
| `functions-reference.mdx` | Reference of exported utility functions |
| `icons.mdx` | Using icon libraries with Mantine |
| `javascript.mdx` | Using Mantine without TypeScript |
| `jest.mdx` | Set up Jest and React Testing Library |
| `llms.mdx` | Give AI tools accurate Mantine knowledge (llms.txt, skills) |
| `next.mdx` | Use Mantine with Next.js |
| `polymorphic.mdx` | Polymorphic components and the component prop |
| `react-router.mdx` | Use Mantine with React Router |
| `storybook.mdx` | Integrate Mantine with Storybook 10+ |
| `tanstack-start.mdx` | Use Mantine with TanStack Start |
| `tiptap-3-migration.mdx` | Upgrade TipTap 2 to 3 |
| `typescript.mdx` | TypeScript usage and types |
| `vite.mdx` | Use Mantine with Vite |
| `vitest.mdx` | Set up Vitest and React Testing Library |

### hooks/ (82 files)

| File | Description |
|------|-------------|
| `package.mdx` | @mantine/hooks package overview and hook list |
| `use-click-outside.mdx` | Detect clicks outside an element |
| `use-clipboard.mdx` | Copy text to clipboard with copied state |
| `use-collapse.mdx` | Hook version of Collapse animation |
| `use-color-scheme.mdx` | OS preferred color scheme |
| `use-counter.mdx` | Counter state with min/max |
| `use-debounced-callback.mdx` | Debounced function callback |
| `use-debounced-state.mdx` | State with debounced updates |
| `use-debounced-value.mdx` | Debounce a changing value |
| `use-did-update.mdx` | useEffect that skips first mount |
| `use-disclosure.mdx` | Boolean open/close/toggle state |
| `use-document-title.mdx` | Set document.title |
| `use-document-visibility.mdx` | Track document visibility state |
| `use-drag.mdx` | Pointer drag gestures over an element |
| `use-element-size.mdx` | Element width and height via ResizeObserver |
| `use-event-listener.mdx` | Attach event listener to a ref element |
| `use-eye-dropper.mdx` | EyeDropper API for picking screen colors |
| `use-favicon.mdx` | Set page favicon |
| `use-fetch.mdx` | GET request with loading and error state |
| `use-file-dialog.mdx` | Open file dialog without an input element |
| `use-floating-window.mdx` | Make an element draggable |
| `use-focus-return.mdx` | Return focus to last focused element |
| `use-focus-trap.mdx` | Trap focus inside a node |
| `use-focus-within.mdx` | Detect focus within an element |
| `use-force-update.mdx` | Force a component re-render |
| `use-fullscreen.mdx` | Fullscreen API for an element |
| `use-hash.mdx` | URL hash value and changes |
| `use-headroom.mdx` | Hide header on scroll past a distance |
| `use-hotkeys.mdx` | Keyboard shortcut handlers |
| `use-hover.mdx` | Detect hover on an element |
| `use-id.mdx` | Stable random id across renders |
| `use-idle.mdx` | Detect user inactivity |
| `use-in-viewport.mdx` | Detect if element is in viewport |
| `use-input-state.mdx` | State handler for native and custom inputs |
| `use-intersection.mdx` | IntersectionObserver information |
| `use-interval.mdx` | setInterval with start/stop controls |
| `use-is-first-render.mdx` | True on first render only |
| `use-isomorphic-effect.mdx` | useLayoutEffect safe for SSR |
| `use-list-state.mdx` | List state with array handlers |
| `use-local-storage.mdx` | localStorage value as React state |
| `use-logger.mdx` | Log values on every render |
| `use-long-press.mdx` | Long press events for mouse and touch |
| `use-map.mdx` | Map object as React state |
| `use-mask.mdx` | Input masking for any input element |
| `use-media-query.mdx` | Subscribe to media queries |
| `use-merged-ref.mdx` | Merge multiple refs |
| `use-mounted.mdx` | True if component is mounted |
| `use-mouse.mdx` | Mouse position relative to element or document |
| `use-move.mdx` | Move behavior over an element (sliders) |
| `use-mutation-observer.mdx` | MutationObserver wrapper |
| `use-network.mdx` | Network connection status |
| `use-orientation.mdx` | Device orientation |
| `use-os.mdx` | Detect user operating system |
| `use-page-leave.mdx` | Callback when mouse leaves page |
| `use-pagination.mdx` | Pagination state management |
| `use-previous.mdx` | Previous value of state |
| `use-queue.mdx` | Limit items in state, queue the rest |
| `use-radial-move.mdx` | Radial sliders and angular movement |
| `use-reduced-motion.mdx` | Detect prefers-reduced-motion |
| `use-resize-observer.mdx` | ResizeObserver rect for an element |
| `use-roving-index.mdx` | Roving tabindex keyboard navigation |
| `use-scroll-direction.mdx` | Detect scroll up or down |
| `use-scroll-into-view.mdx` | Scroll element into view with alignment |
| `use-scroll-spy.mdx` | Active heading from scroll position |
| `use-scroller.mdx` | Horizontal scroll container behavior |
| `use-selection.mdx` | Item selection state |
| `use-set.mdx` | Set object as React state |
| `use-set-state.mdx` | Shallow-merging object state |
| `use-shallow-effect.mdx` | useEffect with shallow dependency comparison |
| `use-splitter.mdx` | Resizable split-pane behavior |
| `use-state-history.mdx` | State with undo/redo history |
| `use-text-selection.mdx` | Current text selection |
| `use-throttled-callback.mdx` | Throttled function callback |
| `use-throttled-state.mdx` | State with throttled updates |
| `use-throttled-value.mdx` | Throttle a changing value |
| `use-timeout.mdx` | setTimeout with start/clear controls |
| `use-toggle.mdx` | Toggle state between given values |
| `use-uncontrolled.mdx` | State for controlled and uncontrolled components |
| `use-validated-state.mdx` | State validated by a rule |
| `use-viewport-size.mdx` | Viewport width and height |
| `use-window-event.mdx` | Window event listener |
| `use-window-scroll.mdx` | Window scroll position and scrollTo |

### schedule/ (14 files)

| File | Description |
|------|-------------|
| `agenda-view.mdx` | AgendaView: vertical event list grouped by day |
| `day-view.mdx` | DayView: single-day events with time slots |
| `events-data.mdx` | Event data format, props and handlers |
| `getting-started.mdx` | Install @mantine/schedule and set up styles |
| `mobile-month-view.mdx` | MobileMonthView: month grid with event list |
| `month-view.mdx` | MonthView: calendar month grid with event badges |
| `recurring-events.mdx` | Recurring events via RFC 5545 rules |
| `resources-day-view.mdx` | ResourcesDayView: resources as rows, time as columns |
| `resources-month-view.mdx` | ResourcesMonthView: month grid with resource lanes |
| `resources-schedule.mdx` | ResourcesSchedule: unified resource views |
| `resources-week-view.mdx` | ResourcesWeekView: resources by week |
| `schedule.mdx` | Schedule: unified Day/Week/Month/Year views |
| `week-view.mdx` | WeekView: weekly events with time slots |
| `year-view.mdx` | YearView: 12-month overview with event dots |

### styles/ (23 files)

| File | Description |
|------|-------------|
| `color-functions.mdx` | Functions to manipulate colors |
| `css-files-list.mdx` | List of importable CSS files |
| `css-modules.mdx` | Styling with CSS modules |
| `css-variables.mdx` | CSS variables from the theme |
| `css-variables-list.mdx` | All default-theme CSS variables |
| `data-attributes.mdx` | data-* attributes used for styling |
| `emotion.mdx` | Emotion and migrating from pre-7.0 |
| `global-styles.mdx` | Global styles included in @mantine/core |
| `mantine-styles.mdx` | Importing package styles |
| `postcss-preset.mdx` | postcss-preset-mantine functions and mixins |
| `rem.mdx` | rem units and scaling |
| `responsive.mdx` | Breakpoints and responsive styles |
| `rtl.mdx` | Right-to-left support |
| `sass.mdx` | Using Sass with Mantine |
| `style.mdx` | The style prop |
| `style-props.mdx` | Inline style props (m, p, c, bg, etc.) |
| `styles-api.mdx` | Styles API: classNames, styles and selectors |
| `styles-overview.mdx` | Overview of styling approaches |
| `styles-performance.mdx` | Styling performance tips |
| `stylex.mdx` | Using StyleX |
| `unstyled.mdx` | Using Mantine as headless UI |
| `vanilla-extract.mdx` | Using vanilla-extract |
| `variants-sizes.mdx` | Component variants and sizes |

### theming/ (6 files)

| File | Description |
|------|-------------|
| `color-schemes.mdx` | Light/dark color scheme management |
| `colors.mdx` | Theme colors and custom palettes |
| `default-props.mdx` | Default props via theme.components |
| `mantine-provider.mdx` | MantineProvider setup and options |
| `theme-object.mdx` | Theme object properties |
| `typography.mdx` | Fonts, headings and text styles |

### x/ (9 files)

| File | Description |
|------|-------------|
| `carousel.mdx` | Carousel: Embla-based slider |
| `dropzone.mdx` | Dropzone: drag-and-drop file upload |
| `extensions.mdx` | Overview of extension packages |
| `lightbox.mdx` | Lightbox: fullscreen image/media viewer |
| `modals.mdx` | ModalsProvider: modals manager |
| `notifications.mdx` | Notifications system and notifications.show |
| `nprogress.mdx` | NavigationProgress: top loading bar |
| `spotlight.mdx` | Spotlight: command palette search |
| `tiptap.mdx` | Tiptap rich text editor |
