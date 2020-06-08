import Vue from 'vue'
import Router from 'vue-router'
import Section from './views/Section'

Vue.use(Router)
export const router = new Router({
  base: '/NewsTopStories/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Section
    }
  ]
})
