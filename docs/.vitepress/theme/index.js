import DefaultTheme from 'vitepress/theme'
import AvisoCookies from './components/AvisoCookies.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AvisoCookies', AvisoCookies)
  }
}
