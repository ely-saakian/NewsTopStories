<template>
    <v-card
        class="ma-6"
        target="_blank"
        outlined>
          <v-hover v-slot:default="{ hover }">
            <v-card-title>
                <a :class="hover ? 'text-decoration-underline' : ''" class="transition-fast-in-fast-out text-decoration-none black--text" target="_blank" :href="url">
                  <h2 class="text-h6">{{title}}</h2>
                </a>
            </v-card-title>
          </v-hover>
        <v-row class="px-3" justify='space-between' align=center>
            <v-card-subtitle>
              {{byline}}
            </v-card-subtitle>
            <v-subheader>
                <time :datetime="article.published_date">{{publishedDate}}</time>
            </v-subheader>
        </v-row>
        <v-img
            v-if="imgLarge === null"
            src="../../assets/NoImage.jpg"
        >
            <v-chip
                label
                class="rounded-0 black white--text"
                style="position:absolute; bottom: 0"
            >
                {{section}}
            </v-chip>
        </v-img>
        <v-img
            v-else
            :src="imgLarge"
            :lazy-src="imgSmall"
        >
            <v-chip
                label
                class="rounded-0 black white--text"
                style="position:absolute; bottom: 0"
            >
                {{section}}
            </v-chip>
        </v-img>

        <v-card-text class="text-subtitle-1 black--text font-weight-regular">
         <p>{{abstract}}</p>
        </v-card-text>
      <v-card-actions class="pa-0">
        <v-btn v-if="isAdded" tile block depressed class="light-green">
          <v-icon left>mdi-check</v-icon>
          Saved to reading list
        </v-btn>
        <v-btn v-else tile block depressed dark @click="addToReadingList">
          <v-icon left>mdi-plus</v-icon>
          Add to reading list
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import moment from 'moment'
import eventBus from '../../eventBus.js'

export default {
  methods: {
    addToReadingList () {
      let readingList = JSON.parse(localStorage.getItem('readingList')) || []
      this.isAdded ? console.log('already added') : readingList = [...readingList, this.article]
      this.isAdded = !this.isAdded
      localStorage.setItem('readingList', JSON.stringify(readingList))
      eventBus.$emit('addToReadingList')
    }
  },
  props: ['article'],
  data () {
    return {
      isAdded: false,
      section: this.article.section,
      url: this.article.url,
      title: this.article.title,
      abstract: this.article.abstract,
      byline: this.article.byline,
      publishedDate: moment(this.article.published_date).fromNow(),
      imgLarge: this.article.multimedia ? this.article.multimedia[0].url : null,
      imgSmall: this.article.multimedia ? this.article.multimedia[2].url : null
    }
  },
  mounted () {
    const readingList = JSON.parse(localStorage.getItem('readingList'))
    this.isAdded = !readingList.every(el => el.uri !== this.article.uri)
    eventBus.$on('removedFromReadingList', (article) => {
      if (article.uri === this.article.uri) this.isAdded = false
    })
  }
}
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>
