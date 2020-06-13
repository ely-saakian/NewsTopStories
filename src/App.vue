<template>
  <div id="app">
    <v-app>
      <v-app-bar color="black" style="cursor: pointer" @click="goHome" app>
        <TheHeader />
      </v-app-bar>
      <v-main class="d-flex align-center">
        <router-link :to='{name: "home"}' />
        <router-link :to='{name: "section"}' />
        <router-view />
      </v-main>
      <v-footer app>
        Footer
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import TheHeader from './components/header/TheHeader'
import { mapActions } from 'vuex'

export default {
  components: {
    TheHeader
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'home' })
    },
    ...mapActions(['fetchNewsData', 'setCurrentSection'])
  },
  created () {
    this.fetchNewsData()
  }
}
</script>

<style lang="scss">
.app-header {
  cursor: pointer;
}
</style>
