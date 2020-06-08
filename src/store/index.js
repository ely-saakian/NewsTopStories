import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news'
import sections from './modules/sections'
import { VueMasonryPlugin } from 'vue-masonry'

Vue.use(Vuex)
Vue.use(VueMasonryPlugin)

export default new Vuex.Store({
  modules: {
    news, sections
  }
})
