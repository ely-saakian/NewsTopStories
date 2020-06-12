import Vue from 'vue'
import Router from 'vue-router'
import Section from './views/Section'

Vue.use(Router)
export const router = new Router({
  base: (process.env.NODE_ENV === 'development') ? '' : '/NewsTopStories/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Section
    }
  ]
})
