import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: '100%'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
