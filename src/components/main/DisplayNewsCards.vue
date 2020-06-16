<template>
    <v-container>
        <v-overlay
          :value="isLoading"
        >
          <v-progress-circular
            indeterminate
            size="64"
            color="primary"
          >
          </v-progress-circular>
        </v-overlay>
        <v-row align=center class="mx-auto text-center text-md-left">
            <v-col cols=6 md="6">
                <h1 class="ma-0 text-body-1 center">Section: <span class="font-weight-light font-italic">{{$store.state.news.currentSection.name}}</span></h1>
            </v-col>
            <v-spacer></v-spacer>
            <v-col align=end cols=6 md="2">
              <SortByDateBtn :isASC="isASC" @sort="sort" />
            </v-col>
          </v-row>
        <v-row
            justify="space-between"
            class="flex-wrap"
            v-if="news" >
            <v-col
              cols="12" sm="6" lg="4" xl="3"
              v-for="article in news"
              :key="article.uri">
              <VerticalNewsCard :article="article" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import VerticalNewsCard from './VerticalNewsCard'
import SortByDateBtn from '../SortByDateBtn'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      news: [],
      isASC: true
    }
  },
  methods: {
    sort () {
      this.news.sort((a, b) => {
        if (this.isASC) return a.published_date < b.published_date ? -1 : 1
        else return a.published_date < b.published_date ? 1 : -1
      })
      this.isASC = !this.isASC
    }
  },
  components: {
    VerticalNewsCard, SortByDateBtn
  },
  computed: {
    isLoading () { return this.$store.state.news.isLoading },
    ...mapGetters({
      newsData: 'newsData'
    })
  },
  watch: {
    $route (to, from) {
      this.isASC = true
    }
  },
  updated () {
    this.news = this.newsData
  }
}
</script>

<style>
</style>
