import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

import Home from './Home'
import LinearRegression from './LinearRegression'

Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: new VueRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
      { path: '', component: Home },
      { path: '/linear-regression', component: LinearRegression }
    ]
  }),
  render: h => h(App)
})
