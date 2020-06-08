<template>
  <div class="cards-container" v-masonry fit-width="true" item-selector=".container">
      <NewsCard
        v-masonry-tile
        v-for="(article, index) in getNewsData.results"
        :key="index"
        :article="article"
      />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NewsCard from '../components/NewsCard'

export default {
  components: {
    NewsCard
  },
  computed: {
    ...mapGetters(['getNewsData'])
  },
  methods: {
    ...mapActions(['fetchNewsData'])
  },
  mounted () {
    let section = this.$route.params.section
    if (section) section = section.replace(section.slice(0, 1), section[0].toUpperCase())
    document.title = section ? 'Stories in ' + section : 'Homepage'
    this.fetchNewsData(section)
  },
  updated () {
    this.$redrawVueMasonry()
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
    /* justify-content: space-around; */
  }
}
</style>
