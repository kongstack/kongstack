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
    variants: keyof TypographyVariantRegistry;
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
    ...props
}, ref)  => {
    const Component = as as React.ElementType;

    const theme = useTypo();

    const style: React.CSSProperties = {
        fontSize: size ? theme.sizes[size] : undefined,
        fontWeight: weight ? theme.weights[weight] : undefined,
        fontFamily: font ? theme.fonts[font] : undefined,
        lineHeight: lineHeight ? theme.lineHeights[lineHeight] : undefined,
        letterSpacing: letterSpacing ? theme.letterSpacing[letterSpacing] : undefined,
        textAlign: align,
        textTransform: transform,
        textDecoration: decoration,
        fontStyle: italic ? 'italic' : undefined,
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