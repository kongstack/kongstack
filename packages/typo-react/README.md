# @kongstack/typo-react

A headless, fully configurable React typography library by Kongstack.

## Installation

```bash
pnpm add @kongstack/typo-react
```

## Quick Start

```tsx
import { TypoProvider, Typography } from '@kongstack/typo-react'

function App() {
  return (
    <TypoProvider>
      <Typography as="h1" variant="h1">Hello World</Typography>
      <Typography as="p" variant="body">Some body text.</Typography>
    </TypoProvider>
  )
}
```

---

## TypoProvider

Wrap your app with `TypoProvider` to provide a theme. It works without any configuration — defaults are applied automatically.

```tsx
import { TypoProvider } from '@kongstack/typo-react'

<TypoProvider theme={myTheme}>
  <App />
</TypoProvider>
```

---

## Typography

The core component. Use the `as` prop to control the rendered HTML element.

```tsx
<Typography as="h1">Heading</Typography>
<Typography as="p">Paragraph</Typography>
<Typography as="span">Inline</Typography>
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `TypographyElement` | `p` | HTML element to render |
| `variant` | `keyof TypographyVariantRegistry` | — | Apply a predefined variant |
| `size` | `keyof TypoTheme['sizes']` | — | Font size token |
| `weight` | `keyof TypoTheme['weights']` | — | Font weight token |
| `font` | `keyof TypoTheme['fonts']` | — | Font family token |
| `lineHeight` | `keyof TypoTheme['lineHeights']` | — | Line height token |
| `letterSpacing` | `keyof TypoTheme['letterSpacing']` | — | Letter spacing token |
| `align` | `left` \| `center` \| `right` \| `justify` | — | Text alignment |
| `transform` | `uppercase` \| `lowercase` \| `capitalize` \| `none` | — | Text transform |
| `decoration` | `underline` \| `line-through` \| `none` | — | Text decoration |
| `italic` | `boolean` | — | Italic text |
| `truncate` | `boolean` | — | Single line truncation with ellipsis |
| `lineClamp` | `number` | — | Multi-line clamp |

---

## Variants

Built-in variants: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `body`, `bodyLarge`, `bodySmall`, `caption`, `label`, `overline`

```tsx
<Typography as="h1" variant="h1">Heading 1</Typography>
<Typography as="p" variant="body">Body text</Typography>
<Typography as="span" variant="overline">Overline</Typography>
```

Props always override variant styles:

```tsx
<Typography variant="h1" size="xl">Smaller heading</Typography>
```

### Custom Variants

Define custom variants via the theme:

```tsx
const myTheme = {
  variants: {
    hero: { size: '3xl', weight: 'bold', letterSpacing: 'tight' },
  }
}

<TypoProvider theme={myTheme}>
  <Typography as="h1" variant="hero">Hero Text</Typography>
</TypoProvider>
```

---

## Theming

Pass a partial theme to `TypoProvider` — only override what you need:

```tsx
const myTheme = {
  fonts: {
    sans: 'Inter, sans-serif',
  },
  sizes: {
    md: '1.125rem',
  },
}

<TypoProvider theme={myTheme}>
  <App />
</TypoProvider>
```

### Default Theme Tokens

**Fonts:** `sans`, `serif`, `mono`

**Sizes:** `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

**Weights:** `light`, `regular`, `medium`, `semibold`, `bold`

**Line Heights:** `tight`, `normal`, `relaxed`

**Letter Spacing:** `tight`, `normal`, `wide`, `wider`

---

## useTypo

Access the current theme anywhere inside `TypoProvider`:

```tsx
import { useTypo } from '@kongstack/typo-react'

function MyComponent() {
  const theme = useTypo()

  return (
    <div style={{ fontFamily: theme.fonts.sans }}>
      Hello
    </div>
  )
}
```

---

## TypeScript

### Extending Variants

Register custom variants for full type safety and autocomplete:

```ts
// types/typo.d.ts
declare module '@kongstack/typo-react' {
  interface TypographyVariantRegistry {
    hero: true
    subtle: true
  }
}
```

Now `variant="hero"` is fully typed and autocompletes.

---

## License

MIT © Brandon Kong