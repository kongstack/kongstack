import React from "react";

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
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(({
    children,
    as = 'p',
    ...props
}, ref)  => {
    const Component = as as React.ElementType;

    return (
        <Component
        ref={ref}
        {...props}
        >
            { children }
        </Component>
    )
    
})

export default Typography;