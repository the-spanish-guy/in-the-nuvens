import { extendTheme, theme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import customColors from '../src/utils/colors'

const primary = '#8C7CFC'
const secondary = '#54C4E4'
const terciary = '#85AFF9'

const success = '#A3DE9A'
const warning = '#FFE27C'
const error = '#F98585'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const customtheme = extendTheme({
  config,
  colors: {
    ...theme.colors,
    primary: {
      200: primary,
      500: primary
    },
    secondary: { 200: secondary, 500: secondary },
    terciary: { 200: terciary, 500: terciary },
    accent: secondary,
    error: error,
    warning: warning,
    success: success
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode(
          customColors.background.light,
          customColors.background.dark
        )(props)
      }
    })
  }
})

export default customtheme
