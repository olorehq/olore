# NativeWind Table of Contents

## Directory Map

```
contents/
├── index.mdx                      # Overview
├── api/                           # API reference (6 files)
├── core-concepts/                 # Core concepts (9 files)
├── customization/                 # Theme & configuration (5 files)
├── getting-started/               # Installation & setup (4 files + subdirs)
│   └── installation/              # Platform-specific install guides (8 files)
├── guides/                        # How-to guides (5 files)
└── tailwind/                      # Tailwind CSS compatibility (162 files)
    ├── accessibility/             # Screen reader (1 file)
    ├── backgrounds/               # Background utilities (9 files)
    ├── borders/                   # Border utilities (15 files)
    ├── effects/                   # Effects utilities (5 files)
    ├── filters/                   # Filter utilities (18 files)
    ├── flexbox/                   # Flexbox & grid (24 files)
    ├── interactivity/             # Interactivity utilities (15 files)
    ├── layout/                    # Layout utilities (20 files)
    ├── new-concepts/              # NativeWind-specific concepts (1 file)
    ├── plugins/                   # Plugin utilities (1 file)
    ├── sizing/                    # Sizing utilities (6 files)
    ├── spacing/                   # Spacing utilities (3 files)
    ├── svg/                       # SVG utilities (3 files)
    ├── tables/                    # Table utilities (4 files)
    ├── transforms/                # Transform utilities (5 files)
    ├── transitions-animation/     # Transitions & animations (5 files)
    └── typography/                # Typography utilities (27 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Overview | `contents/index.mdx` |
| Installation (Expo) | `contents/getting-started/installation/index.mdx` |
| Installation (Framework-less) | `contents/getting-started/installation/frameworkless.mdx` |
| Installation (Next.js) | `contents/getting-started/installation/nextjs.mdx` |
| TypeScript setup | `contents/getting-started/typescript.mdx` |
| Troubleshooting | `contents/getting-started/troubleshooting.mdx` |
| API reference | `contents/api/` |
| Custom components | `contents/guides/custom-components.mdx` |
| Theming | `contents/guides/themes.mdx` |
| Tailwind compatibility | `contents/tailwind/` |

## Detailed Structure

### api/ (6 files)

| File | Description |
|------|-------------|
| `css-interop.mdx` | cssInterop() function for styling third-party components |
| `native-wind-style-sheet.md` | NativeWindStyleSheet API |
| `remap-props.mdx` | remapProps() for remapping style props |
| `use-color-scheme.md` | useColorScheme hook |
| `vars.mdx` | CSS variables / custom properties |
| `with-nativewind.mdx` | withNativeWind() higher-order function |

### core-concepts/ (9 files)

| File | Description |
|------|-------------|
| `dark-mode.mdx` | Dark mode implementation |
| `differences.md` | Differences from web Tailwind CSS |
| `functions-and-directives.mdx` | Tailwind directives and functions |
| `quirks.mdx` | Known quirks and workarounds |
| `responsive-design.mdx` | Responsive breakpoints |
| `states.mdx` | Hover, focus, active, and other states |
| `style-specificity.mdx` | Style specificity rules |
| `tailwindcss.mdx` | How NativeWind uses Tailwind CSS |
| `units.mdx` | Unit handling (px, rem, etc.) |

### customization/ (5 files)

| File | Description |
|------|-------------|
| `colors.md` | Custom color configuration |
| `configuration.md` | Configuration options |
| `content.md` | Content path configuration |
| `screens.md` | Custom breakpoints/screens |
| `theme.md` | Theme customization |

### getting-started/ (4 files)

| File | Description |
|------|-------------|
| `editor-setup.mdx` | VS Code and editor configuration |
| `troubleshooting.mdx` | Troubleshooting common issues |
| `typescript.mdx` | TypeScript type setup |

### getting-started/installation/ (8 files)

| File | Description |
|------|-------------|
| `index.mdx` | Expo installation guide |
| `frameworkless.mdx` | Framework-less React Native install |
| `nextjs.mdx` | Next.js installation guide |
| `_import-css.mdx` | CSS import step |
| `_install.mdx` | Package install step |
| `_tailwind.mdx` | Tailwind config setup step |
| `_try-it-out.mdx` | Quick test snippet |
| `_typescript.mdx` | TypeScript setup step |

### guides/ (5 files)

| File | Description |
|------|-------------|
| `custom-components.mdx` | Creating custom styled components |
| `other-bundlers.mdx` | Using with non-Metro bundlers |
| `themes.mdx` | Theming guide |
| `third-party-components.mdx` | Styling third-party components |
| `using-with-monorepos.mdx` | Monorepo configuration |

### tailwind/accessibility/ (1 file)

| File | Description |
|------|-------------|
| `screen-readers.mdx` | Screen reader utilities compatibility |

### tailwind/backgrounds/ (9 files)

| File | Description |
|------|-------------|
| `background-attachment.mdx` | bg-fixed, bg-local, bg-scroll |
| `background-clip.mdx` | bg-clip-* support |
| `background-color.mdx` | bg-{color} support |
| `background-image.mdx` | bg-gradient-* support |
| `background-origin.mdx` | bg-origin-* support |
| `background-position.mdx` | bg-{position} support |
| `background-repeat.mdx` | bg-repeat-* support |
| `background-size.mdx` | bg-{size} support |
| `gradient-color-stops.mdx` | from-*, via-*, to-* support |

### tailwind/borders/ (15 files)

| File | Description |
|------|-------------|
| `border-color.mdx` | border-{color} support |
| `border-radius.mdx` | rounded-* support |
| `border-style.mdx` | border-solid, border-dashed, etc. |
| `border-width.mdx` | border-* width support |
| `divide-color.mdx` | divide-{color} support |
| `divide-style.mdx` | divide-{style} support |
| `divide-width.mdx` | divide-* width support |
| `outline-color.mdx` | outline-{color} support |
| `outline-offset.mdx` | outline-offset-* support |
| `outline-style.mdx` | outline-* style support |
| `outline-width.mdx` | outline-* width support |
| `ring-color.mdx` | ring-{color} support |
| `ring-offset-color.mdx` | ring-offset-{color} support |
| `ring-offset-width.mdx` | ring-offset-* support |
| `ring-width.mdx` | ring-* width support |

### tailwind/effects/ (5 files)

| File | Description |
|------|-------------|
| `background-blend-mode.mdx` | bg-blend-* support |
| `box-shadow-color.mdx` | shadow-{color} support |
| `box-shadow.mdx` | shadow-* support |
| `mix-blend-mode.mdx` | mix-blend-* support |
| `opacity.mdx` | opacity-* support |

### tailwind/filters/ (18 files)

| File | Description |
|------|-------------|
| `backdrop-blur.mdx` | backdrop-blur-* support |
| `backdrop-brightness.mdx` | backdrop-brightness-* support |
| `backdrop-contrast.mdx` | backdrop-contrast-* support |
| `backdrop-grayscale.mdx` | backdrop-grayscale support |
| `backdrop-hue-rotate.mdx` | backdrop-hue-rotate-* support |
| `backdrop-invert.mdx` | backdrop-invert support |
| `backdrop-opacity.mdx` | backdrop-opacity-* support |
| `backdrop-saturate.mdx` | backdrop-saturate-* support |
| `backdrop-sepia.mdx` | backdrop-sepia support |
| `blur.mdx` | blur-* support |
| `brightness.mdx` | brightness-* support |
| `contrast.mdx` | contrast-* support |
| `drop-shadow.mdx` | drop-shadow-* support |
| `grayscale.mdx` | grayscale support |
| `hue-rotate.mdx` | hue-rotate-* support |
| `invert.mdx` | invert support |
| `saturate.mdx` | saturate-* support |
| `sepia.mdx` | sepia support |

### tailwind/flexbox/ (24 files)

| File | Description |
|------|-------------|
| `align-content.mdx` | content-* alignment support |
| `align-items.mdx` | items-* support |
| `align-self.mdx` | self-* support |
| `flex-basis.mdx` | basis-* support |
| `flex-direction.mdx` | flex-row, flex-col support |
| `flex-grow.mdx` | grow, grow-0 support |
| `flex-shrink.mdx` | shrink, shrink-0 support |
| `flex-wrap.mdx` | flex-wrap, flex-nowrap support |
| `flex.mdx` | flex-* shorthand support |
| `gap.mdx` | gap-*, gap-x-*, gap-y-* support |
| `grid-auto-columns.mdx` | auto-cols-* support |
| `grid-auto-flow.mdx` | grid-flow-* support |
| `grid-auto-rows.mdx` | auto-rows-* support |
| `grid-column.mdx` | col-span-*, col-start-*, col-end-* |
| `grid-row.mdx` | row-span-*, row-start-*, row-end-* |
| `grid-template-columns.mdx` | grid-cols-* support |
| `grid-template-rows.mdx` | grid-rows-* support |
| `justify-content.mdx` | justify-* support |
| `justify-items.mdx` | justify-items-* support |
| `justify-self.mdx` | justify-self-* support |
| `order.mdx` | order-* support |
| `place-content.mdx` | place-content-* support |
| `place-items.mdx` | place-items-* support |
| `place-self.mdx` | place-self-* support |

### tailwind/interactivity/ (15 files)

| File | Description |
|------|-------------|
| `accent-color.mdx` | accent-{color} support |
| `appearance.mdx` | appearance-* support |
| `caret-color.mdx` | caret-{color} support |
| `cursor.mdx` | cursor-* support |
| `pointer-events.mdx` | pointer-events-* support |
| `resize.mdx` | resize-* support |
| `scroll-behaviour.mdx` | scroll-auto, scroll-smooth support |
| `scroll-margin.mdx` | scroll-m-* support |
| `scroll-padding.mdx` | scroll-p-* support |
| `scroll-snap-align.mdx` | snap-* alignment support |
| `scroll-snap-stop.mdx` | snap-normal, snap-always support |
| `scroll-snap-type.mdx` | snap-none, snap-x, snap-y support |
| `touch-action.mdx` | touch-* support |
| `user-select.mdx` | select-* support |
| `will-change.mdx` | will-change-* support |

### tailwind/layout/ (20 files)

| File | Description |
|------|-------------|
| `aspect-ratio.mdx` | aspect-* support |
| `box-decoration-break.mdx` | box-decoration-* support |
| `box-sizing.mdx` | box-border, box-content support |
| `break-after.mdx` | break-after-* support |
| `break-before.mdx` | break-before-* support |
| `break-inside.mdx` | break-inside-* support |
| `clear.mdx` | clear-* support |
| `columns.mdx` | columns-* support |
| `container.mdx` | container class support |
| `display.mdx` | flex, hidden, block, etc. support |
| `float.mdx` | float-* support |
| `isolation.mdx` | isolate, isolation-auto support |
| `object-fit.mdx` | object-contain, object-cover, etc. |
| `object-position.mdx` | object-{position} support |
| `overflow.mdx` | overflow-* support |
| `overscroll-behavior.mdx` | overscroll-* support |
| `position.mdx` | relative, absolute, fixed, etc. |
| `top-right-bottom-left.mdx` | inset-*, top-*, right-*, bottom-*, left-* |
| `visibility.mdx` | visible, invisible support |
| `z-index.mdx` | z-* support |

### tailwind/sizing/ (6 files)

| File | Description |
|------|-------------|
| `height.mdx` | h-* support |
| `max-height.mdx` | max-h-* support |
| `max-width.mdx` | max-w-* support |
| `min-height.mdx` | min-h-* support |
| `min-width.mdx` | min-w-* support |
| `width.mdx` | w-* support |

### tailwind/spacing/ (3 files)

| File | Description |
|------|-------------|
| `margin.mdx` | m-*, mx-*, my-*, mt-*, mr-*, mb-*, ml-* support |
| `padding.mdx` | p-*, px-*, py-*, pt-*, pr-*, pb-*, pl-* support |
| `space-between.mdx` | space-x-*, space-y-* support |

### tailwind/svg/ (3 files)

| File | Description |
|------|-------------|
| `fill.mdx` | fill-{color} support |
| `stroke-width.mdx` | stroke-* width support |
| `stroke.mdx` | stroke-{color} support |

### tailwind/tables/ (4 files)

| File | Description |
|------|-------------|
| `border-collapse.mdx` | border-collapse, border-separate support |
| `border-spacing.mdx` | border-spacing-* support |
| `caption-side.mdx` | caption-* support |
| `table-layout.mdx` | table-auto, table-fixed support |

### tailwind/transforms/ (5 files)

| File | Description |
|------|-------------|
| `rotate.mdx` | rotate-* support |
| `scale.mdx` | scale-* support |
| `skew.mdx` | skew-* support |
| `transform-origin.mdx` | origin-* support |
| `translate.mdx` | translate-* support |

### tailwind/transitions-animation/ (5 files)

| File | Description |
|------|-------------|
| `animation.mdx` | animate-* support |
| `transition-delay.mdx` | delay-* support |
| `transition-duration.mdx` | duration-* support |
| `transition-property.mdx` | transition-* support |
| `transition-timing-function.mdx` | ease-* support |

### tailwind/typography/ (27 files)

| File | Description |
|------|-------------|
| `content.mdx` | content-* support |
| `font-family.mdx` | font-* support |
| `font-size.mdx` | text-{size} support |
| `font-smoothing.mdx` | antialiased support |
| `font-style.mdx` | italic, not-italic support |
| `font-variant-numeric.mdx` | font-numeric-* support |
| `font-weight.mdx` | font-{weight} support |
| `hyphens.mdx` | hyphens-* support |
| `letter-spacing.mdx` | tracking-* support |
| `line-clamp.mdx` | line-clamp-* support |
| `line-height.mdx` | leading-* support |
| `list-style-image.mdx` | list-image-* support |
| `list-style-position.mdx` | list-inside, list-outside support |
| `list-style-type.mdx` | list-disc, list-decimal, etc. |
| `text-align.mdx` | text-left, text-center, etc. |
| `text-color.mdx` | text-{color} support |
| `text-decoration-color.mdx` | decoration-{color} support |
| `text-decoration-style.mdx` | decoration-solid, etc. support |
| `text-decoration-thickness.mdx` | decoration-* thickness support |
| `text-decoration.mdx` | underline, line-through, etc. |
| `text-indent.mdx` | indent-* support |
| `text-overflow.mdx` | truncate, text-ellipsis, etc. |
| `text-transform.mdx` | uppercase, lowercase, capitalize |
| `text-underline-offset.mdx` | underline-offset-* support |
| `vertical-align.mdx` | align-* support |
| `whitespace.mdx` | whitespace-* support |
| `word-break.mdx` | break-* support |

### tailwind/new-concepts/ (1 file)

| File | Description |
|------|-------------|
| `safe-area-insets.mdx` | Safe area inset utilities |

### tailwind/plugins/ (1 file)

| File | Description |
|------|-------------|
| `container-queries.mdx` | Container query plugin support |
