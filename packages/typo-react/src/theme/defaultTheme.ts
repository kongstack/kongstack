import { TypoTheme } from '../types/theme'

export const defaultTheme: TypoTheme = {
  fonts: {
    sans: 'system-ui, sans-serif',
    serif: 'Georgia, serif',
    mono: 'monospace',
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: '-0.05em',
    normal: '0em',
    wide: '0.05em',
    wider: '0.1em',
  },
}