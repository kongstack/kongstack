import React from 'react'
import TypoContext from './TypoContext'
import { defaultTheme } from './defaultTheme'
import { TypoTheme } from '../types/theme'
import { defaultVariants } from './defaultVariants'

export interface TypoProviderProps extends React.PropsWithChildren {
    theme?: Partial<TypoTheme>
}

const TypoProvider = ({ children, theme }: TypoProviderProps) => {
  const mergedTheme = {
    ...defaultTheme,
    ...theme,
    fonts: { ...defaultTheme.fonts, ...theme?.fonts },
    sizes: { ...defaultTheme.sizes, ...theme?.sizes },
    weights: { ...defaultTheme.weights, ...theme?.weights },
    lineHeights: { ...defaultTheme.lineHeights, ...theme?.lineHeights },
    letterSpacing: { ...defaultTheme.letterSpacing, ...theme?.letterSpacing },
    variants: { ...defaultVariants, ...theme?.variants },
  }

  return (
    <TypoContext.Provider value={mergedTheme}>
      {children}
    </TypoContext.Provider>
  )
}

export default TypoProvider;