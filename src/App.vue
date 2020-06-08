<template>
  <div id="app">
    <Header class="app-header" />
    <Search />
    <router-link :to='{name: "home"}' />
    <router-link :to='{name: "section"}' />
    <router-view :key='$route.path'/>
    <Footer class="app-footer" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'

export default {
  components: {
    Header, Footer, Search
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  align-items: center;
  font-family: Roboto, sans-serif;
}
.app-header {
  position: sticky;
  top: 0;
  z-index: 2;
}
.app-footer {
}
</style>
