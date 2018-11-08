import Vue from 'vue'
import routes from './routes'
import NotFound from './pages/NotFound'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  el: '#app',

  data: {
    currentRoute: window.location.pathname
  },

  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },

  apolloProvider: createProvider(),
  render (h) { return h(this.ViewComponent) }
})
