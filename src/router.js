import Vue from 'vue'
import Router from 'vue-router'
import ViewNews from './views/ViewNews'
import ViewHome from './views/ViewHome'

Vue.use(Router)
export const router = new Router({
  base: (process.env.NODE_ENV === 'development') ? '' : '/NewsTopStories/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome
    },
    {
      path: '/:section',
      name: 'section',
      component: ViewNews
    }
  ]
})
