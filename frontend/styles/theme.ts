import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import customColors from '../src/utils/colors'

const primary = '#8C7CFC'
const secondary = '#54C4E4'
const terciary = '#85AFF9'

const success = '#A3DE9A'
const warning = '#FFE27C'
const error = '#F98585'

const customtheme = extendTheme({
  colors: {
    primary: primary,
    secondary: secondary,
    terciary: terciary,
    accent: '#54C4E4',
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
