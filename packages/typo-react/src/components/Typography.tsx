import React from "react";
import { TypographyVariant, TypoTheme } from "../types/theme";
import useTypo from "../theme/useTypo";
import { TypographyVariantRegistry } from "../types/registry";

export type TypographyElement = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'label'
  | 'blockquote'
  | 'figcaption'

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    as?: TypographyElement;
    size?: keyof TypoTheme['sizes'];
    weight?: keyof TypoTheme['weights'];
    font?: keyof TypoTheme['fonts'];
    lineHeight?: keyof TypoTheme['lineHeights'];
    letterSpacing?: keyof TypoTheme['letterSpacing'];
    align?: 'left' | 'center' | 'right' | 'justify';
    transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    decoration?: 'underline' | 'line-through' | 'none';
    italic?: boolean;
    truncate?: boolean;
    lineClamp?: number;
    variant?: keyof TypographyVariantRegistry;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(({
    children,
    size,
    weight,
    font,
    as = 'p',
    lineHeight,
    letterSpacing,
    align,
    transform,
    decoration,
    italic,
    truncate,
    lineClamp,
    variant,
    ...props
}, ref)  => {
    const Component = as as React.ElementType;

    const theme = useTypo()

    // resolve variant first
    const variantStyles = variant ? theme.variants?.[variant] : undefined

    const resolvedSize = size ?? variantStyles?.size
    const resolvedWeight = weight ?? variantStyles?.weight
    const resolvedFont = font ?? variantStyles?.font
    const resolvedLineHeight = lineHeight ?? variantStyles?.lineHeight
    const resolvedLetterSpacing = letterSpacing ?? variantStyles?.letterSpacing
    const resolvedAlign = align ?? variantStyles?.align
    const resolvedTransform = transform ?? variantStyles?.transform
    const resolvedDecoration = decoration ?? variantStyles?.decoration
    const resolvedItalic = italic ?? variantStyles?.italic

    const style: React.CSSProperties = {
        fontSize: resolvedSize ? theme.sizes[resolvedSize] : undefined,
        fontWeight: resolvedWeight ? theme.weights[resolvedWeight] : undefined,
        fontFamily: resolvedFont ? theme.fonts[resolvedFont] : undefined,
        lineHeight: resolvedLineHeight ? theme.lineHeights[resolvedLineHeight] : undefined,
        letterSpacing: resolvedLetterSpacing ? theme.letterSpacing[resolvedLetterSpacing] : undefined,
        textAlign: resolvedAlign,
        textTransform: resolvedTransform,
        textDecoration: resolvedDecoration,
        fontStyle: resolvedItalic ? 'italic' : undefined,
        overflow: truncate ? 'hidden' : undefined,
        textOverflow: truncate ? 'ellipsis' : undefined,
        whiteSpace: truncate ? 'nowrap' : undefined,
        display: lineClamp ? '-webkit-box' : undefined,
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: lineClamp ? 'vertical' : undefined,
    }

    return (
        <Component
        ref={ref}
        style={style}
        {...props}
        >
            { children }
        </Component>
    )
    
})

export default Typography;