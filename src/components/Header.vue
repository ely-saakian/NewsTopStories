<template>
  <header @click="goHome">
    <router-link :to="{name: 'home'}" title="Go Home">
      <img src='../assets/NewYorkTimes.svg' alt='NYT Logo' />
    </router-link>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    goHome () {
      this.setCurrentSection()
    },
    ...mapActions(['setCurrentSection'])
  }
}
</script>

<style lang="scss" scoped>
a {
  text-align: center;
  padding: 1em;
  text-decoration: none;
  display: block;
  width: 100%;
}
header {
  background-color: $black;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
