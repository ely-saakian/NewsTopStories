<template>
  <div id="app">
    <Header />
    <Search />
    <div class="cards-container">
      <NewsCard
        v-for="(article, index) in getNewsData.results"
        :key="index"
        :article="article"
      />
    </div>
  <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
import NewsCard from './components/NewsCard'
import Footer from './components/Footer'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Header, Search, NewsCard, Footer
  },
  methods: {
    ...mapActions(['fetchNewsData'])
  },
  computed: mapGetters(['getNewsData']),
  mounted () {
    this.fetchNewsData('arts')
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
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto, sans-serif;
}

.cards-container {
  display: flex;
  flex-direction: column;
}

@media (min-width: 500px) {
  .cards-container {
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-around;
  }
}
</style>
