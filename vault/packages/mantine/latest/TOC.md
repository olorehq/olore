# mantine Table of Contents

## Directory Map

```
contents/
├── getting-started.mdx         # Installation and setup
├── browser-support.mdx         # Supported browsers
├── core/                       # Core UI components (103 files)
├── hooks/                      # React hooks (72 files)
├── styles/                     # Styling system (22 files)
├── form/                       # Form management (15 files)
├── guides/                     # Integration guides (16 files)
├── dates/                      # Date/time components (10 files)
├── charts/                     # Chart components (14 files)
├── theming/                    # Theming and customization (6 files)
└── x/                          # Extensions/extra packages (9 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Installation | `contents/getting-started.mdx` |
| Core components | `contents/core/` |
| Hooks reference | `contents/hooks/` |
| Form management | `contents/form/use-form.mdx` |
| Theming | `contents/theming/mantine-provider.mdx` |
| Styles | `contents/styles/styles-overview.mdx` |
| Migration 7x to 8x | `contents/guides/7x-to-8x.mdx` |

## Detailed Structure

### Root (2 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Installation, setup, first steps |
| `browser-support.mdx` | Supported browser matrix |

### core/ (103 files)

Component reference for all `@mantine/core` components.

| File | Description |
|------|-------------|
| `package.mdx` | Package overview and installation |
| `accordion.mdx` | Accordion component |
| `action-icon.mdx` | ActionIcon button |
| `affix.mdx` | Affix fixed position wrapper |
| `alert.mdx` | Alert component |
| `anchor.mdx` | Anchor link component |
| `angle-slider.mdx` | AngleSlider component |
| `app-shell.mdx` | AppShell layout component |
| `aspect-ratio.mdx` | AspectRatio container |
| `autocomplete.mdx` | Autocomplete input |
| `avatar.mdx` | Avatar component |
| `background-image.mdx` | BackgroundImage component |
| `badge.mdx` | Badge component |
| `blockquote.mdx` | Blockquote component |
| `box.mdx` | Box primitive component |
| `breadcrumbs.mdx` | Breadcrumbs navigation |
| `burger.mdx` | Burger menu button |
| `button.mdx` | Button component |
| `card.mdx` | Card component |
| `center.mdx` | Center layout |
| `checkbox.mdx` | Checkbox input |
| `chip.mdx` | Chip toggle |
| `close-button.mdx` | CloseButton component |
| `code.mdx` | Code inline/block component |
| `collapse.mdx` | Collapse animation |
| `color-input.mdx` | ColorInput component |
| `color-picker.mdx` | ColorPicker component |
| `color-swatch.mdx` | ColorSwatch display |
| `combobox.mdx` | Combobox primitive |
| `container.mdx` | Container layout |
| `copy-button.mdx` | CopyButton component |
| `dialog.mdx` | Dialog modal variant |
| `divider.mdx` | Divider separator |
| `drawer.mdx` | Drawer side panel |
| `fieldset.mdx` | Fieldset wrapper |
| `file-button.mdx` | FileButton component |
| `file-input.mdx` | FileInput component |
| `flex.mdx` | Flex layout |
| `floating-indicator.mdx` | FloatingIndicator |
| `focus-trap.mdx` | FocusTrap component |
| `grid.mdx` | Grid layout |
| `group.mdx` | Group layout |
| `highlight.mdx` | Highlight text |
| `hover-card.mdx` | HoverCard popover |
| `image.mdx` | Image component |
| `indicator.mdx` | Indicator badge |
| `input.mdx` | Input primitive |
| `json-input.mdx` | JsonInput textarea |
| `kbd.mdx` | Kbd keyboard key |
| `list.mdx` | List component |
| `loader.mdx` | Loader spinner |
| `loading-overlay.mdx` | LoadingOverlay |
| `mark.mdx` | Mark highlight |
| `menu.mdx` | Menu dropdown |
| `modal.mdx` | Modal dialog |
| `multi-select.mdx` | MultiSelect input |
| `native-select.mdx` | NativeSelect input |
| `nav-link.mdx` | NavLink navigation |
| `notification.mdx` | Notification component |
| `number-formatter.mdx` | NumberFormatter |
| `number-input.mdx` | NumberInput |
| `overlay.mdx` | Overlay backdrop |
| `pagination.mdx` | Pagination component |
| `paper.mdx` | Paper surface |
| `password-input.mdx` | PasswordInput |
| `pill.mdx` | Pill tag |
| `pills-input.mdx` | PillsInput |
| `pin-input.mdx` | PinInput OTP |
| `popover.mdx` | Popover component |
| `portal.mdx` | Portal component |
| `progress.mdx` | Progress bar |
| `radio.mdx` | Radio input |
| `range-slider.mdx` | RangeSlider |
| `rating.mdx` | Rating stars |
| `ring-progress.mdx` | RingProgress circular |
| `scroll-area.mdx` | ScrollArea |
| `segmented-control.mdx` | SegmentedControl |
| `select.mdx` | Select dropdown |
| `semi-circle-progress.mdx` | SemiCircleProgress |
| `simple-grid.mdx` | SimpleGrid layout |
| `skeleton.mdx` | Skeleton loading |
| `slider.mdx` | Slider component |
| `space.mdx` | Space spacer |
| `spoiler.mdx` | Spoiler collapse |
| `stack.mdx` | Stack layout |
| `stepper.mdx` | Stepper wizard |
| `switch.mdx` | Switch toggle |
| `table.mdx` | Table component |
| `table-of-contents.mdx` | TableOfContents |
| `tabs.mdx` | Tabs component |
| `tags-input.mdx` | TagsInput |
| `text.mdx` | Text typography |
| `text-input.mdx` | TextInput |
| `textarea.mdx` | Textarea input |
| `theme-icon.mdx` | ThemeIcon |
| `timeline.mdx` | Timeline component |
| `title.mdx` | Title typography |
| `tooltip.mdx` | Tooltip component |
| `transition.mdx` | Transition animations |
| `tree.mdx` | Tree component |
| `typography.mdx` | Typography guide |
| `unstyled-button.mdx` | UnstyledButton |
| `visually-hidden.mdx` | VisuallyHidden |

### hooks/ (72 files)

React hooks from `@mantine/hooks`.

| File | Description |
|------|-------------|
| `package.mdx` | Package overview |
| `use-click-outside.mdx` | useClickOutside |
| `use-clipboard.mdx` | useClipboard |
| `use-color-scheme.mdx` | useColorScheme |
| `use-counter.mdx` | useCounter |
| `use-debounced-callback.mdx` | useDebouncedCallback |
| `use-debounced-state.mdx` | useDebouncedState |
| `use-debounced-value.mdx` | useDebouncedValue |
| `use-did-update.mdx` | useDidUpdate |
| `use-disclosure.mdx` | useDisclosure |
| `use-document-title.mdx` | useDocumentTitle |
| `use-document-visibility.mdx` | useDocumentVisibility |
| `use-element-size.mdx` | useElementSize |
| `use-event-listener.mdx` | useEventListener |
| `use-eye-dropper.mdx` | useEyeDropper |
| `use-favicon.mdx` | useFavicon |
| `use-fetch.mdx` | useFetch |
| `use-file-dialog.mdx` | useFileDialog |
| `use-focus-return.mdx` | useFocusReturn |
| `use-focus-trap.mdx` | useFocusTrap |
| `use-focus-within.mdx` | useFocusWithin |
| `use-force-update.mdx` | useForceUpdate |
| `use-fullscreen.mdx` | useFullscreen |
| `use-hash.mdx` | useHash |
| `use-headroom.mdx` | useHeadroom |
| `use-hotkeys.mdx` | useHotkeys |
| `use-hover.mdx` | useHover |
| `use-id.mdx` | useId |
| `use-idle.mdx` | useIdle |
| `use-in-viewport.mdx` | useInViewport |
| `use-input-state.mdx` | useInputState |
| `use-intersection.mdx` | useIntersection |
| `use-interval.mdx` | useInterval |
| `use-is-first-render.mdx` | useIsFirstRender |
| `use-isomorphic-effect.mdx` | useIsomorphicEffect |
| `use-list-state.mdx` | useListState |
| `use-local-storage.mdx` | useLocalStorage |
| `use-logger.mdx` | useLogger |
| `use-long-press.mdx` | useLongPress |
| `use-map.mdx` | useMap |
| `use-media-query.mdx` | useMediaQuery |
| `use-merged-ref.mdx` | useMergedRef |
| `use-mounted.mdx` | useMounted |
| `use-mouse.mdx` | useMouse |
| `use-move.mdx` | useMove |
| `use-mutation-observer.mdx` | useMutationObserver |
| `use-network.mdx` | useNetwork |
| `use-orientation.mdx` | useOrientation |
| `use-os.mdx` | useOs |
| `use-page-leave.mdx` | usePageLeave |
| `use-pagination.mdx` | usePagination |
| `use-previous.mdx` | usePrevious |
| `use-queue.mdx` | useQueue |
| `use-radial-move.mdx` | useRadialMove |
| `use-reduced-motion.mdx` | useReducedMotion |
| `use-resize-observer.mdx` | useResizeObserver |
| `use-scroll-into-view.mdx` | useScrollIntoView |
| `use-scroll-spy.mdx` | useScrollSpy |
| `use-selection.mdx` | useSelection |
| `use-set.mdx` | useSet |
| `use-set-state.mdx` | useSetState |
| `use-shallow-effect.mdx` | useShallowEffect |
| `use-state-history.mdx` | useStateHistory |
| `use-text-selection.mdx` | useTextSelection |
| `use-throttled-callback.mdx` | useThrottledCallback |
| `use-throttled-state.mdx` | useThrottledState |
| `use-throttled-value.mdx` | useThrottledValue |
| `use-timeout.mdx` | useTimeout |
| `use-toggle.mdx` | useToggle |
| `use-uncontrolled.mdx` | useUncontrolled |
| `use-validated-state.mdx` | useValidatedState |
| `use-viewport-size.mdx` | useViewportSize |
| `use-window-event.mdx` | useWindowEvent |
| `use-window-scroll.mdx` | useWindowScroll |

### styles/ (22 files)

| File | Description |
|------|-------------|
| `styles-overview.mdx` | Styling system overview |
| `css-modules.mdx` | CSS Modules usage |
| `css-variables.mdx` | CSS custom properties |
| `css-variables-list.mdx` | Full CSS variables list |
| `css-files-list.mdx` | CSS files reference |
| `style-props.mdx` | Style props API |
| `style.mdx` | style prop usage |
| `styles-api.mdx` | Styles API for components |
| `mantine-styles.mdx` | Mantine built-in styles |
| `global-styles.mdx` | Global styles setup |
| `data-attributes.mdx` | Data attributes styling |
| `variants-sizes.mdx` | Variants and sizes |
| `responsive.mdx` | Responsive styles |
| `rtl.mdx` | RTL support |
| `rem.mdx` | rem/em functions |
| `color-functions.mdx` | Color utility functions |
| `postcss-preset.mdx` | PostCSS preset config |
| `sass.mdx` | Sass/SCSS usage |
| `emotion.mdx` | Emotion migration |
| `vanilla-extract.mdx` | vanilla-extract integration |
| `unstyled.mdx` | Unstyled components |
| `styles-performance.mdx` | Styles performance |

### form/ (15 files)

| File | Description |
|------|-------------|
| `package.mdx` | @mantine/form package |
| `use-form.mdx` | useForm hook API |
| `use-field.mdx` | useField hook |
| `values.mdx` | Form values management |
| `validation.mdx` | Validation rules |
| `validators.mdx` | Built-in validators |
| `schema-validation.mdx` | Schema validation (zod, yup) |
| `errors.mdx` | Error handling |
| `status.mdx` | Form status (dirty, touched) |
| `actions.mdx` | Form actions |
| `nested.mdx` | Nested fields |
| `uncontrolled.mdx` | Uncontrolled mode |
| `get-input-props.mdx` | getInputProps API |
| `create-form-context.mdx` | createFormContext |
| `recipes.mdx` | Form recipes |

### guides/ (16 files)

| File | Description |
|------|-------------|
| `7x-to-8x.mdx` | Migration guide v7 to v8 |
| `6x-to-7x.mdx` | Migration guide v6 to v7 |
| `next.mdx` | Next.js integration |
| `vite.mdx` | Vite setup |
| `gatsby.mdx` | Gatsby integration |
| `redwood.mdx` | RedwoodJS integration |
| `react-router.mdx` | React Router setup |
| `typescript.mdx` | TypeScript guide |
| `javascript.mdx` | JavaScript (no TS) usage |
| `polymorphic.mdx` | Polymorphic components |
| `storybook.mdx` | Storybook integration |
| `icons.mdx` | Icons usage |
| `jest.mdx` | Jest testing setup |
| `vitest.mdx` | Vitest testing setup |
| `functions-reference.mdx` | Utility functions reference |
| `tiptap-3-migration.mdx` | Tiptap 3 migration |

### dates/ (10 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | @mantine/dates setup |
| `calendar.mdx` | Calendar component |
| `date-picker.mdx` | DatePicker component |
| `date-picker-input.mdx` | DatePickerInput |
| `date-input.mdx` | DateInput component |
| `date-time-picker.mdx` | DateTimePicker |
| `month-picker.mdx` | MonthPicker |
| `month-picker-input.mdx` | MonthPickerInput |
| `year-picker.mdx` | YearPicker |
| `year-picker-input.mdx` | YearPickerInput |
| `time-input.mdx` | TimeInput |
| `time-picker.mdx` | TimePicker |
| `time-grid.mdx` | TimeGrid |
| `time-value.mdx` | TimeValue type |
| `mini-calendar.mdx` | MiniCalendar |

### charts/ (14 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | @mantine/charts setup |
| `area-chart.mdx` | AreaChart component |
| `bar-chart.mdx` | BarChart component |
| `line-chart.mdx` | LineChart component |
| `pie-chart.mdx` | PieChart component |
| `donut-chart.mdx` | DonutChart component |
| `scatter-chart.mdx` | ScatterChart |
| `bubble-chart.mdx` | BubbleChart |
| `radar-chart.mdx` | RadarChart |
| `composite-chart.mdx` | CompositeChart |
| `funnel-chart.mdx` | FunnelChart |
| `radial-bar-chart.mdx` | RadialBarChart |
| `sparkline.mdx` | Sparkline chart |
| `heatmap.mdx` | Heatmap chart |

### theming/ (6 files)

| File | Description |
|------|-------------|
| `mantine-provider.mdx` | MantineProvider setup |
| `theme-object.mdx` | Theme object structure |
| `colors.mdx` | Color system |
| `color-schemes.mdx` | Dark/light mode |
| `typography.mdx` | Typography theming |
| `default-props.mdx` | Default component props |

### x/ (9 files)

| File | Description |
|------|-------------|
| `extensions.mdx` | Extensions overview |
| `notifications.mdx` | @mantine/notifications |
| `modals.mdx` | @mantine/modals |
| `spotlight.mdx` | @mantine/spotlight |
| `carousel.mdx` | @mantine/carousel |
| `dropzone.mdx` | @mantine/dropzone |
| `code-highlight.mdx` | @mantine/code-highlight |
| `tiptap.mdx` | @mantine/tiptap rich text |
| `nprogress.mdx` | @mantine/nprogress |
