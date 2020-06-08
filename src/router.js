import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)
export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:section',
      name: 'section',
      component: () => import(/* webpackChunkName: "Section" */ './views/Section')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
