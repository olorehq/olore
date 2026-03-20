# tailwindcss Table of Contents

## Directory Map

```
contents/
├── utility-first.mdx           # Core philosophy
├── installation guides         # Setup, CLI, preprocessors
├── core concepts               # Responsive, dark mode, states, reusing styles
├── configuration               # theme, config, plugins, presets
├── layout/                     # display, position, overflow, z-index, etc.
├── flexbox-grid/               # flex, grid utilities
├── spacing/                    # padding, margin, space, gap
├── sizing/                     # width, height, size, min/max
├── typography/                 # font, text, letter-spacing, etc.
├── backgrounds/                # background-color, image, clip, etc.
├── borders/                    # border, outline, ring, divide
├── effects/                    # box-shadow, opacity, blend-mode, filters
├── transitions-animation/      # transition, animation, transform
├── interactivity/              # cursor, resize, scroll, touch, pointer
├── accessibility/              # screen-readers, forced-color-adjust
└── svg/                        # fill, stroke
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/utility-first.mdx` |
| Installation | `contents/editor-setup.mdx` |
| Configuration | `contents/configuration.mdx` |
| Custom styles | `contents/adding-custom-styles.mdx` |
| Responsive design | `contents/responsive-design.mdx` |
| Dark mode | `contents/dark-mode.mdx` |
| All states (hover, focus, etc.) | `contents/hover-focus-and-other-states.mdx` |
| Functions and directives | `contents/functions-and-directives.mdx` |
| Plugins | `contents/plugins.mdx` |
| Theme customization | `contents/theme.mdx` |

## Detailed Structure

### Core Concepts (7 files)

| File | Description |
|------|-------------|
| `utility-first.mdx` | Utility-first fundamentals |
| `responsive-design.mdx` | Responsive breakpoints and media queries |
| `hover-focus-and-other-states.mdx` | Pseudo-classes, states, variants |
| `dark-mode.mdx` | Dark mode setup and usage |
| `reusing-styles.mdx` | Extracting components, @apply |
| `adding-custom-styles.mdx` | Custom CSS and arbitrary values |
| `functions-and-directives.mdx` | @tailwind, @apply, @layer, @config, theme() |

### Configuration (7 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | Full tailwind.config.js reference |
| `theme.mdx` | Theme configuration and customization |
| `customizing-colors.mdx` | Color palette customization |
| `customizing-spacing.mdx` | Spacing scale customization |
| `content-configuration.mdx` | Content paths and purge configuration |
| `plugins.mdx` | Writing and using plugins |
| `presets.mdx` | Shareable config presets |

### Setup & Tooling (5 files)

| File | Description |
|------|-------------|
| `editor-setup.mdx` | IDE and editor configuration |
| `tailwind-cli.mdx` | Tailwind CLI usage |
| `using-with-preprocessors.mdx` | PostCSS, Sass, Less integration |
| `optimizing-for-production.mdx` | Production build optimization |
| `browser-support.mdx` | Browser compatibility and vendor prefixes |

### Layout (19 files)

| File | Description |
|------|-------------|
| `display.mdx` | display utilities (block, flex, grid, hidden, etc.) |
| `position.mdx` | position (static, fixed, absolute, relative, sticky) |
| `top-right-bottom-left.mdx` | inset, top, right, bottom, left |
| `z-index.mdx` | z-index utilities |
| `overflow.mdx` | overflow, overflow-x, overflow-y |
| `overscroll-behavior.mdx` | overscroll-auto, contain, none |
| `float.mdx` | float utilities |
| `clear.mdx` | clear utilities |
| `container.mdx` | Container component |
| `columns.mdx` | Multi-column layout |
| `box-sizing.mdx` | box-sizing utilities |
| `box-decoration-break.mdx` | box-decoration-break |
| `isolation.mdx` | isolation utilities |
| `object-fit.mdx` | object-fit utilities |
| `object-position.mdx` | object-position utilities |
| `visibility.mdx` | visible, invisible, collapse |
| `break-before.mdx` | break-before utilities |
| `break-after.mdx` | break-after utilities |
| `break-inside.mdx` | break-inside utilities |

### Flexbox (7 files)

| File | Description |
|------|-------------|
| `flex.mdx` | flex shorthand utilities |
| `flex-direction.mdx` | flex-direction (row, col, reverse) |
| `flex-wrap.mdx` | flex-wrap utilities |
| `flex-grow.mdx` | flex-grow utilities |
| `flex-shrink.mdx` | flex-shrink utilities |
| `flex-basis.mdx` | flex-basis utilities |
| `order.mdx` | order utilities |

### Grid (8 files)

| File | Description |
|------|-------------|
| `grid-template-columns.mdx` | grid-cols-N, custom columns |
| `grid-template-rows.mdx` | grid-rows-N, custom rows |
| `grid-column.mdx` | col-span, col-start, col-end |
| `grid-row.mdx` | row-span, row-start, row-end |
| `grid-auto-flow.mdx` | grid-flow utilities |
| `grid-auto-columns.mdx` | auto-cols utilities |
| `grid-auto-rows.mdx` | auto-rows utilities |
| `gap.mdx` | gap, gap-x, gap-y |

### Alignment (9 files)

| File | Description |
|------|-------------|
| `justify-content.mdx` | justify-content utilities |
| `justify-items.mdx` | justify-items utilities |
| `justify-self.mdx` | justify-self utilities |
| `align-content.mdx` | align-content utilities |
| `align-items.mdx` | align-items utilities |
| `align-self.mdx` | align-self utilities |
| `place-content.mdx` | place-content utilities |
| `place-items.mdx` | place-items utilities |
| `place-self.mdx` | place-self utilities |

### Spacing (3 files)

| File | Description |
|------|-------------|
| `padding.mdx` | p, px, py, pt, pr, pb, pl |
| `margin.mdx` | m, mx, my, mt, mr, mb, ml, auto |
| `space.mdx` | space-x, space-y between children |

### Sizing (7 files)

| File | Description |
|------|-------------|
| `width.mdx` | w- utilities including w-full, w-screen, w-auto |
| `height.mdx` | h- utilities including h-full, h-screen, h-auto |
| `size.mdx` | size- shorthand for width and height |
| `min-width.mdx` | min-w utilities |
| `max-width.mdx` | max-w utilities |
| `min-height.mdx` | min-h utilities |
| `max-height.mdx` | max-h utilities |

### Typography (17 files)

| File | Description |
|------|-------------|
| `font-family.mdx` | font-sans, font-serif, font-mono |
| `font-size.mdx` | text-xs through text-9xl |
| `font-style.mdx` | italic, not-italic |
| `font-weight.mdx` | font-thin through font-black |
| `font-smoothing.mdx` | antialiased, subpixel-antialiased |
| `font-variant-numeric.mdx` | numeric font variant utilities |
| `letter-spacing.mdx` | tracking utilities |
| `line-height.mdx` | leading utilities |
| `line-clamp.mdx` | line-clamp utilities |
| `text-align.mdx` | text-left, center, right, justify |
| `text-color.mdx` | text-{color} utilities |
| `text-decoration.mdx` | underline, overline, line-through, no-underline |
| `text-decoration-color.mdx` | decoration-{color} |
| `text-decoration-style.mdx` | decoration-solid, dashed, etc. |
| `text-decoration-thickness.mdx` | decoration-{size} |
| `text-underline-offset.mdx` | underline-offset utilities |
| `text-transform.mdx` | uppercase, lowercase, capitalize, normal-case |
| `text-overflow.mdx` | truncate, text-ellipsis, text-clip |
| `text-wrap.mdx` | text-wrap, text-nowrap, text-balance, text-pretty |
| `text-indent.mdx` | indent utilities |
| `vertical-align.mdx` | align utilities |
| `whitespace.mdx` | whitespace utilities |
| `word-break.mdx` | word-break, overflow-wrap utilities |
| `hyphens.mdx` | hyphens utilities |
| `content.mdx` | content utilities for pseudo-elements |

### Backgrounds (8 files)

| File | Description |
|------|-------------|
| `background-attachment.mdx` | bg-fixed, bg-local, bg-scroll |
| `background-clip.mdx` | bg-clip-border, padding, content, text |
| `background-color.mdx` | bg-{color} utilities |
| `background-origin.mdx` | bg-origin utilities |
| `background-position.mdx` | bg-center, top, right, etc. |
| `background-repeat.mdx` | bg-repeat utilities |
| `background-size.mdx` | bg-auto, bg-cover, bg-contain |
| `background-image.mdx` | bg-gradient-to, bg-none |
| `gradient-color-stops.mdx` | from-, via-, to- gradient stops |

### Borders (12 files)

| File | Description |
|------|-------------|
| `border-radius.mdx` | rounded utilities |
| `border-width.mdx` | border, border-x, border-y, border-t, etc. |
| `border-color.mdx` | border-{color} utilities |
| `border-style.mdx` | border-solid, dashed, dotted, double, none |
| `border-collapse.mdx` | border-collapse, border-separate |
| `border-spacing.mdx` | border-spacing utilities |
| `divide-width.mdx` | divide-x, divide-y utilities |
| `divide-color.mdx` | divide-{color} utilities |
| `divide-style.mdx` | divide-solid, dashed, dotted, double, none |
| `outline-style.mdx` | outline utilities |
| `outline-width.mdx` | outline-{size} |
| `outline-offset.mdx` | outline-offset utilities |
| `outline-color.mdx` | outline-{color} |
| `ring-width.mdx` | ring, ring-{size} utilities |
| `ring-color.mdx` | ring-{color} utilities |
| `ring-offset-width.mdx` | ring-offset-{size} |
| `ring-offset-color.mdx` | ring-offset-{color} |

### Effects (10 files)

| File | Description |
|------|-------------|
| `box-shadow.mdx` | shadow utilities |
| `box-shadow-color.mdx` | shadow-{color} utilities |
| `opacity.mdx` | opacity utilities |
| `mix-blend-mode.mdx` | mix-blend utilities |
| `background-blend-mode.mdx` | bg-blend utilities |
| `blur.mdx` | blur utilities |
| `brightness.mdx` | brightness utilities |
| `contrast.mdx` | contrast utilities |
| `drop-shadow.mdx` | drop-shadow utilities |
| `grayscale.mdx` | grayscale utilities |
| `hue-rotate.mdx` | hue-rotate utilities |
| `invert.mdx` | invert utilities |
| `saturate.mdx` | saturate utilities |
| `sepia.mdx` | sepia utilities |

### Backdrop Filters (8 files)

| File | Description |
|------|-------------|
| `backdrop-blur.mdx` | backdrop-blur utilities |
| `backdrop-brightness.mdx` | backdrop-brightness utilities |
| `backdrop-contrast.mdx` | backdrop-contrast utilities |
| `backdrop-grayscale.mdx` | backdrop-grayscale utilities |
| `backdrop-hue-rotate.mdx` | backdrop-hue-rotate utilities |
| `backdrop-invert.mdx` | backdrop-invert utilities |
| `backdrop-opacity.mdx` | backdrop-opacity utilities |
| `backdrop-saturate.mdx` | backdrop-saturate utilities |
| `backdrop-sepia.mdx` | backdrop-sepia utilities |

### Transitions & Animation (6 files)

| File | Description |
|------|-------------|
| `transition-property.mdx` | transition, transition-none |
| `transition-duration.mdx` | duration utilities |
| `transition-timing-function.mdx` | ease utilities |
| `transition-delay.mdx` | delay utilities |
| `animation.mdx` | animate-spin, animate-ping, animate-pulse, animate-bounce |
| `will-change.mdx` | will-change utilities |

### Transforms (5 files)

| File | Description |
|------|-------------|
| `scale.mdx` | scale utilities |
| `rotate.mdx` | rotate utilities |
| `translate.mdx` | translate utilities |
| `skew.mdx` | skew utilities |
| `transform-origin.mdx` | origin utilities |

### Interactivity (12 files)

| File | Description |
|------|-------------|
| `accent-color.mdx` | accent-{color} utilities |
| `appearance.mdx` | appearance-none, appearance-auto |
| `cursor.mdx` | cursor utilities |
| `caret-color.mdx` | caret-{color} utilities |
| `pointer-events.mdx` | pointer-events utilities |
| `resize.mdx` | resize utilities |
| `scroll-behavior.mdx` | scroll-auto, scroll-smooth |
| `scroll-margin.mdx` | scroll-m utilities |
| `scroll-padding.mdx` | scroll-p utilities |
| `scroll-snap-align.mdx` | snap-start, snap-center, snap-end |
| `scroll-snap-stop.mdx` | snap-normal, snap-always |
| `scroll-snap-type.mdx` | snap-x, snap-y, snap-both |
| `touch-action.mdx` | touch-action utilities |
| `user-select.mdx` | select utilities |

### Accessibility & SVG (5 files)

| File | Description |
|------|-------------|
| `screen-readers.mdx` | sr-only, not-sr-only |
| `forced-color-adjust.mdx` | forced-color-adjust utilities |
| `fill.mdx` | fill-{color} for SVG |
| `stroke.mdx` | stroke-{color} for SVG |
| `stroke-width.mdx` | stroke-{size} for SVG |

### Misc (5 files)

| File | Description |
|------|-------------|
| `preflight.mdx` | Base CSS reset |
| `screens.mdx` | Screen breakpoints configuration |
| `adding-new-utilities.mdx` | Adding custom utilities via plugins |
| `aspect-ratio.mdx` | aspect-ratio utilities |
| `upgrade-guide.mdx` | v2 to v3 migration guide |
| `v4-beta.mdx` | v4 beta preview |
| `table-layout.mdx` | table-auto, table-fixed |
| `caption-side.mdx` | caption-top, caption-bottom |
