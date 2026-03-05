import { TypographyVariant } from '../types/theme'

export const defaultVariants: Record<string, TypographyVariant> = {
    h1: { size: '3xl', weight: 'bold', lineHeight: 'tight', letterSpacing: 'tight' },
    h2: { size: '2xl', weight: 'bold', lineHeight: 'tight', letterSpacing: 'tight' },
    h3: { size: 'xl', weight: 'semibold', lineHeight: 'tight' },
    h4: { size: 'lg', weight: 'semibold', lineHeight: 'normal' },
    h5: { size: 'md', weight: 'medium', lineHeight: 'normal' },
    h6: { size: 'sm', weight: 'medium', lineHeight: 'normal' },
    body: { size: 'md', weight: 'regular', lineHeight: 'normal' },
    bodyLarge: { size: 'lg', weight: 'regular', lineHeight: 'relaxed' },
    bodySmall: { size: 'sm', weight: 'regular', lineHeight: 'normal' },
    caption: { size: 'xs', weight: 'regular', lineHeight: 'normal' },
    label: { size: 'sm', weight: 'medium', lineHeight: 'normal' },
    overline: { size: 'xs', weight: 'medium', letterSpacing: 'wider', transform: 'uppercase' },
}