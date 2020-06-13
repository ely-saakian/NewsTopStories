import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import ViewNews from './views/ViewNews'

Vue.use(Router)
export const router = new Router({
  base: (process.env.NODE_ENV === 'development') ? '' : '/NewsTopStories/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/section',
      name: 'section',
      component: ViewNews
    }
  ]
})
