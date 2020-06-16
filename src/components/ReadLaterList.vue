<template>
  <v-list v-if="readingList.length">
    <v-subheader>Saved Articles ({{readingList.length}})</v-subheader>
    <template v-for="(article, index) in readingList">
      <v-list-item
        three-line
        :key="article.uri"
        @click.stop="goTo(article.url)"
        >
        <v-list-item-content>
            <v-list-item-title v-text="article.title"></v-list-item-title>
            <v-list-item-subtitle v-text="article.section" class="my-2 font-weight-bold text-caption"></v-list-item-subtitle>
            <v-list-item-subtitle v-text="article.abstract"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn block depressed tile class="px-2">
            <v-icon color=error @click.stop="removeFromReadingList(article)">mdi-delete-sweep</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider
          v-if="index + 1 < readingList.length"
          :key="index"
      ></v-divider>
    </template>
  </v-list>
  <v-container v-else>
    <v-subheader>Nothing to read</v-subheader>
  </v-container>
</template>

<script>
import moment from 'moment'
import eventBus from '../eventBus.js'

export default {
  data () {
    return {
      readingList: JSON.parse(localStorage.getItem('readingList'))
    }
  },
  methods: {
    goTo (url) {
      window.open(url)
    },
    moment (date) {
      return moment(date)
    },
    removeFromReadingList (article) {
      let readingList = JSON.parse(localStorage.getItem('readingList'))
      readingList = readingList.filter(el => el.uri !== article.uri)
      this.readingList = readingList
      localStorage.setItem('readingList', JSON.stringify(readingList))
      eventBus.$emit('removedFromReadingList', article)
    }
  },
  mounted () {
    eventBus.$on('addToReadingList', () => {
      this.readingList = JSON.parse(localStorage.getItem('readingList'))
    })
  }
}
</script>

<style>
</style>
