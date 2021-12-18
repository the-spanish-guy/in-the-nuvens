import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { ColorModeProvider, ChakraProvider } from '@chakra-ui/react'

import theme from '../../styles/theme'

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ColorModeProvider
        value="dark"
        options={{ initialColorMode: 'dark', useSystemColorMode: true }}
      >
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default ThemeContainer
