import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FFFFFF',
        secondary: '#54C4E4',
        terciary: '#85AFF9',
        accent: '#54C4E4',
        error: '#F98585',
        warning: '#FFE27C',
        success: '#A3DE9A'
      },
      dark: {
        primary: '#1B2135',
        secondary: '#54C4E4',
        terciary: '#85AFF9',
        accent: '#54C4E4',
        error: '#F98585',
        warning: '#FFE27C',
        success: '#A3DE9A'
      }
    }
  }
})
