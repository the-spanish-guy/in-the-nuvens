import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { ColorModeProvider, ChakraProvider } from '@chakra-ui/react'

import theme from '../../styles/theme'

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ChakraProvider>
  )
}

export default ThemeContainer
