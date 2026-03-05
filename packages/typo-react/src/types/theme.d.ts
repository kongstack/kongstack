export interface TypoTheme {
    fonts: {
        sans: string
        serif: string
        mono: string
    }
    sizes: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '3xl': string
    }
    weights: {
        light: number
        regular: number
        medium: number
        semibold: number
        bold: number
    }
    lineHeights: {
        tight: number
        normal: number
        relaxed: number
    }
    letterSpacing: {
        tight: string
        normal: string
        wide: string
        wider: string
    }
}