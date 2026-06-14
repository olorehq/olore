# NativeWind Table of Contents

## Directory Map

```
contents/
├── index.mdx                     # Overview / what is NativeWind
├── getting-started/              # Installation, setup, troubleshooting (6 files)
│   └── installation/             # Framework-specific install guides
├── core-concepts/                # Dark mode, states, units, responsive (9 files)
├── api/                          # Full API reference (6 files)
├── customization/                # Colors, theme, screens, config (5 files)
├── guides/                       # How-to guides (6 files)
└── tailwind/                     # Tailwind CSS compatibility per utility (71 files)
    ├── accessibility/            # Screen readers
    ├── backgrounds/              # Background color
    ├── borders/                  # Border color, radius, style, width
    ├── effects/                  # Opacity, box-shadow, blend mode
    ├── flexbox/                  # Flex, align, gap, justify
    ├── interactivity/            # Pointer events, caret color
    ├── layout/                   # Display, position, overflow, z-index
    ├── new-concepts/             # Safe area insets
    ├── plugins/                  # Container queries
    ├── sizing/                   # Width, height, min/max
    ├── spacing/                  # Margin, padding
    ├── svg/                      # Fill, stroke
    ├── transforms/               # Rotate, scale, skew, translate
    ├── transitions-animation/    # Animation, transitions
    └── typography/               # Font, text, list styles
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Overview / intro | `contents/index.mdx` |
| Install (Expo) | `contents/getting-started/installation/index.mdx` |
| Install (frameworkless) | `contents/getting-started/installation/frameworkless.mdx` |
| Install (Next.js) | `contents/getting-started/installation/nextjs.mdx` |
| Troubleshooting | `contents/getting-started/troubleshooting.mdx` |
| Dark mode | `contents/core-concepts/dark-mode.mdx` |
| Responsive design | `contents/core-concepts/responsive-design.mdx` |
| Custom components | `contents/guides/custom-components.mdx` |
| Theming | `contents/guides/themes.mdx` |
| API reference | `contents/api/` |

## Detailed Structure

### Root (1 file)

| File | Description |
|------|-------------|
| `index.mdx` | What is NativeWind, key features, quick start overview |

### getting-started/ (6 files)

| File | Description |
|------|-------------|
| `getting-started/editor-setup.mdx` | Editor IntelliSense / VS Code setup |
| `getting-started/installation/index.mdx` | Main installation guide (Expo) |
| `getting-started/installation/frameworkless.mdx` | Install without a framework |
| `getting-started/installation/nextjs.mdx` | Install with Next.js |
| `getting-started/troubleshooting.mdx` | Common issues and fixes |
| `getting-started/typescript.mdx` | TypeScript configuration |

### core-concepts/ (9 files)

| File | Description |
|------|-------------|
| `core-concepts/dark-mode.mdx` | Dark mode support and configuration |
| `core-concepts/differences.md` | Differences from standard Tailwind CSS |
| `core-concepts/functions-and-directives.mdx` | CSS functions and @directives |
| `core-concepts/quirks.mdx` | Known quirks and platform differences |
| `core-concepts/responsive-design.mdx` | Breakpoints and responsive utilities |
| `core-concepts/states.mdx` | Hover, focus, active, group states |
| `core-concepts/style-specificity.mdx` | CSS specificity rules in RN |
| `core-concepts/tailwindcss.mdx` | How Tailwind CSS integrates |
| `core-concepts/units.mdx` | rem, px, dp units in React Native |

### api/ (6 files)

| File | Description |
|------|-------------|
| `api/css-interop.mdx` | cssInterop() — bridge CSS to RN props |
| `api/native-wind-style-sheet.md` | NativeWindStyleSheet API |
| `api/remap-props.mdx` | remapProps() — remap component props |
| `api/use-color-scheme.md` | useColorScheme() hook |
| `api/vars.mdx` | CSS custom properties / variables API |
| `api/with-nativewind.mdx` | withNativeWind() HOC and metro config |

### customization/ (5 files)

| File | Description |
|------|-------------|
| `customization/colors.md` | Custom color configuration |
| `customization/configuration.md` | tailwind.config.js options |
| `customization/content.md` | Content path configuration |
| `customization/screens.md` | Custom breakpoints / screens |
| `customization/theme.md` | Theme customization and extension |

### guides/ (6 files)

| File | Description |
|------|-------------|
| `guides/custom-components.mdx` | Building custom styled components |
| `guides/custom-fonts.mdx` | Loading and using custom fonts |
| `guides/other-bundlers.mdx` | Using NativeWind with non-Metro bundlers |
| `guides/themes.mdx` | Dynamic theming with CSS variables |
| `guides/third-party-components.mdx` | Styling 3rd party components |
| `guides/using-with-monorepos.mdx` | Monorepo setup |

### tailwind/accessibility/ (1 file)

| File | Description |
|------|-------------|
| `tailwind/accessibility/screen-readers.mdx` | Screen reader utilities |

### tailwind/backgrounds/ (1 file)

| File | Description |
|------|-------------|
| `tailwind/backgrounds/background-color.mdx` | bg-{color} compatibility |

### tailwind/borders/ (4 files)

| File | Description |
|------|-------------|
| `tailwind/borders/border-color.mdx` | border-{color} compatibility |
| `tailwind/borders/border-radius.mdx` | rounded-{n} compatibility |
| `tailwind/borders/border-style.mdx` | border-{style} compatibility |
| `tailwind/borders/border-width.mdx` | border-{n} compatibility |

### tailwind/effects/ (4 files)

| File | Description |
|------|-------------|
| `tailwind/effects/background-blend-mode.mdx` | mix-blend-mode compatibility |
| `tailwind/effects/box-shadow-color.mdx` | shadow-{color} compatibility |
| `tailwind/effects/box-shadow.mdx` | shadow-{n} compatibility |
| `tailwind/effects/opacity.mdx` | opacity-{n} compatibility |

### tailwind/flexbox/ (13 files)

| File | Description |
|------|-------------|
| `tailwind/flexbox/align-content.mdx` | content-{value} compatibility |
| `tailwind/flexbox/align-items.mdx` | items-{value} compatibility |
| `tailwind/flexbox/align-self.mdx` | self-{value} compatibility |
| `tailwind/flexbox/flex-basis.mdx` | basis-{n} compatibility |
| `tailwind/flexbox/flex-direction.mdx` | flex-{direction} compatibility |
| `tailwind/flexbox/flex-grow.mdx` | grow-{n} compatibility |
| `tailwind/flexbox/flex-shrink.mdx` | shrink-{n} compatibility |
| `tailwind/flexbox/flex-wrap.mdx` | flex-wrap compatibility |
| `tailwind/flexbox/flex.mdx` | flex-{n} compatibility |
| `tailwind/flexbox/gap.mdx` | gap-{n} compatibility |
| `tailwind/flexbox/justify-content.mdx` | justify-{value} compatibility |
| `tailwind/flexbox/flex-grow.mdx` | grow compatibility |
| `tailwind/flexbox/flex-shrink.mdx` | shrink compatibility |

### tailwind/interactivity/ (2 files)

| File | Description |
|------|-------------|
| `tailwind/interactivity/caret-color.mdx` | caret-{color} compatibility |
| `tailwind/interactivity/pointer-events.mdx` | pointer-events compatibility |

### tailwind/layout/ (7 files)

| File | Description |
|------|-------------|
| `tailwind/layout/aspect-ratio.mdx` | aspect-{ratio} compatibility |
| `tailwind/layout/container.mdx` | container compatibility |
| `tailwind/layout/display.mdx` | flex, hidden compatibility |
| `tailwind/layout/overflow.mdx` | overflow-{value} compatibility |
| `tailwind/layout/position.mdx` | absolute, relative compatibility |
| `tailwind/layout/top-right-bottom-left.mdx` | inset, top/right/bottom/left |
| `tailwind/layout/visibility.mdx` | visible, invisible compatibility |
| `tailwind/layout/z-index.mdx` | z-{n} compatibility |

### tailwind/new-concepts/ (1 file)

| File | Description |
|------|-------------|
| `tailwind/new-concepts/safe-area-insets.mdx` | Safe area padding utilities |

### tailwind/plugins/ (1 file)

| File | Description |
|------|-------------|
| `tailwind/plugins/container-queries.mdx` | @container queries plugin |

### tailwind/sizing/ (6 files)

| File | Description |
|------|-------------|
| `tailwind/sizing/height.mdx` | h-{n} compatibility |
| `tailwind/sizing/max-height.mdx` | max-h-{n} compatibility |
| `tailwind/sizing/max-width.mdx` | max-w-{n} compatibility |
| `tailwind/sizing/min-height.mdx` | min-h-{n} compatibility |
| `tailwind/sizing/min-width.mdx` | min-w-{n} compatibility |
| `tailwind/sizing/width.mdx` | w-{n} compatibility |

### tailwind/spacing/ (2 files)

| File | Description |
|------|-------------|
| `tailwind/spacing/margin.mdx` | m-{n} compatibility |
| `tailwind/spacing/padding.mdx` | p-{n} compatibility |

### tailwind/svg/ (3 files)

| File | Description |
|------|-------------|
| `tailwind/svg/fill.mdx` | fill-{color} compatibility |
| `tailwind/svg/stroke-width.mdx` | stroke-{n} compatibility |
| `tailwind/svg/stroke.mdx` | stroke-{color} compatibility |

### tailwind/transforms/ (4 files)

| File | Description |
|------|-------------|
| `tailwind/transforms/rotate.mdx` | rotate-{n} compatibility |
| `tailwind/transforms/scale.mdx` | scale-{n} compatibility |
| `tailwind/transforms/skew.mdx` | skew-{n} compatibility |
| `tailwind/transforms/translate.mdx` | translate-{n} compatibility |

### tailwind/transitions-animation/ (5 files)

| File | Description |
|------|-------------|
| `tailwind/transitions-animation/animation.mdx` | animate-{name}, keyframe animations (reanimated) |
| `tailwind/transitions-animation/transition-delay.mdx` | delay-{n} compatibility |
| `tailwind/transitions-animation/transition-duration.mdx` | duration-{n} compatibility |
| `tailwind/transitions-animation/transition-property.mdx` | transition-{prop} compatibility |
| `tailwind/transitions-animation/transition-timing-function.mdx` | ease-{value} compatibility |

### tailwind/typography/ (18 files)

| File | Description |
|------|-------------|
| `tailwind/typography/font-family.mdx` | font-{family} compatibility |
| `tailwind/typography/font-size.mdx` | text-{size}, rem scaling in RN |
| `tailwind/typography/font-smoothing.mdx` | antialiased compatibility |
| `tailwind/typography/font-style.mdx` | italic, not-italic compatibility |
| `tailwind/typography/font-variant-numeric.mdx` | numeric font variant compatibility |
| `tailwind/typography/font-weight.mdx` | font-{weight} compatibility |
| `tailwind/typography/letter-spacing.mdx` | tracking-{n} compatibility |
| `tailwind/typography/line-clamp.mdx` | line-clamp-{n} compatibility |
| `tailwind/typography/line-height.mdx` | leading-{n} compatibility |
| `tailwind/typography/list-style-image.mdx` | list-image-{n} compatibility |
| `tailwind/typography/list-style-position.mdx` | list-inside/outside compatibility |
| `tailwind/typography/list-style-type.mdx` | list-{type} compatibility |
| `tailwind/typography/text-align.mdx` | text-{align} compatibility |
| `tailwind/typography/text-color.mdx` | text-{color} compatibility |
| `tailwind/typography/text-decoration-color.mdx` | decoration-{color} compatibility |
| `tailwind/typography/text-decoration-style.mdx` | decoration-{style} compatibility |
| `tailwind/typography/text-decoration.mdx` | underline, line-through compatibility |
| `tailwind/typography/text-transform.mdx` | uppercase, lowercase, capitalize |
