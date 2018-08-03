import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
      {
          path: '/region',
          component: () => import('../views/region.vue')
      },
      {
          path: '/publish',
          component: () => import('../views/publish.vue')
      },
      {
          path: '/search',
          component: () => import('../views/search.vue')
      },
      {
          path: '/details',
          component: () => import('../views/details.vue')
      },
  ]
})
