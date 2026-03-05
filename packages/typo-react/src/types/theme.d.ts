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
    variants?: Record<string, TypographyVariant>
}

export interface TypographyVariant {
    size?: keyof TypoTheme['sizes']
    weight?: keyof TypoTheme['weights']
    font?: keyof TypoTheme['fonts']
    lineHeight?: keyof TypoTheme['lineHeights']
    letterSpacing?: keyof TypoTheme['letterSpacing']
    align?: 'left' | 'center' | 'right' | 'justify'
    transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none'
    decoration?: 'underline' | 'line-through' | 'none'
    italic?: boolean
}