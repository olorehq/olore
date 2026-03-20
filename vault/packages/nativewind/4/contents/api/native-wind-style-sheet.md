---
title: StyleSheet
---

<!-- # StyleSheet -->

In NativeWind v4, the `StyleSheet` is exported from `react-native-css-interop` (and re-exported from `nativewind`). It provides internal methods used by the build system and runtime.

<Callout type="warn" title="NOTE">
The `NativeWindStyleSheet` API from v2/v3 (with methods like `setOutput`, `setDimensions`, `setAppearance`) no longer exists in v4. Use `useColorScheme()` for color scheme management instead.
</Callout>

## Color Scheme Management

To set or toggle the color scheme, use the [`useColorScheme()`](./use-color-scheme) hook:

```tsx
import { useColorScheme } from "nativewind";

function MyComponent() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Text onPress={() => toggleColorScheme()}>
      {`The color scheme is ${colorScheme}`}
    </Text>
  );
}
```

<Callout type="warn" title="CAUTION">
`setColorScheme` and `toggleColorScheme` require `darkMode: "class"` in your Tailwind config. They will throw an error if `darkMode` is set to `"media"` (the default).
</Callout>

## Internal Methods

The `StyleSheet` object exposes the following methods, primarily used internally by the build system:

| Method | Description |
| --- | --- |
| `registerCompiled(options)` | Registers compiled CSS data from the Metro transform |
| `getFlag(name)` | Retrieves a build flag (e.g. `darkMode` strategy) |
| `getGlobalStyle(name)` | Retrieves a registered global style rule |

These methods are not intended for direct use in application code.
