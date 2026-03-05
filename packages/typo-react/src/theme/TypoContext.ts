import React from 'react'
import { TypoTheme } from '../types/theme'
import { defaultTheme } from './defaultTheme'

const TypoContext = React.createContext<TypoTheme>(defaultTheme);

export default TypoContext;