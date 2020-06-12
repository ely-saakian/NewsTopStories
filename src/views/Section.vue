<template>
  <div>
    <Search />
    <div class="cards-container" v-masonry fit-width="true" item-selector=".container">
      <NewsCard
        v-masonry-tile
        v-for="(article, index) in getNewsData.results"
        :key="index"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NewsCard from '../components/NewsCard'
import Search from '../components/Search'

export default {
  components: {
    NewsCard, Search
  },
  methods: mapActions(['fetchNewsData']),
  computed: {
    ...mapGetters(['getNewsData', 'getCurrentSection'])
  },
  updated () {
    document.title = 'Stories in ' + this.getCurrentSection
    this.$redrawVueMasonry()
  },
  mounted () {
    this.$Lazyload.$on('loaded', () => {
      this.$redrawVueMasonry()
    })
  }
}
</script>

<style>
.cards-container {
  display: flex;
  flex-direction: column;
}

@media (min-width: 500px) {
  .cards-container {
    margin: 0 auto;
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
}
</style>
