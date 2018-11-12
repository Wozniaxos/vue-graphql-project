import Vue from 'vue'

import router from './router'
import { createProvider } from './vue-apollo'
import App from './App';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
})
