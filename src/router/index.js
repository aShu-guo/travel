import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/components/detail')

    },
    {
      path: '/cities',
      name: 'cities',
      component: () => import('@/components/city/cities')

    },
    {
      path: '/timer',
      name: 'timer',
      component: () => import('@/components/demo/timer')

    }
  ]
})
