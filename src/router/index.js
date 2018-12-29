import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Tentang from '@/components/Tentang'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Landing',
    component: Landing
  }, {
    path: '/about',
    name: 'Tentang',
    component: Tentang
  }]
})
