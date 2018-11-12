import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from './pages/Home'
import About from './pages/About'
import Apollo from './pages/Apollo'
import NotFound from './pages/NotFound'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/apollo', component: Apollo },
  { path: '*', component: NotFound }
]

export default new VueRouter({
  mode: 'history',
  routes
})
