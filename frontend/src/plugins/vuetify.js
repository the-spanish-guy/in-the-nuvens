import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#8C7CFC',
        secondary: '#85AFF9',
        accent: '#54C4E4',
        error: '#b71c1c'
      },
      dark: {
        primary: '#1B2135',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
})
