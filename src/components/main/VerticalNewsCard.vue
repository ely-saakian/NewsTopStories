<template>
    <v-col
        cols="12" md="6" lg="4" xl="3"
    >
        <v-card
            class="ma-6"
            :href="url"
            target="_blank"
            outlined
            hover
        >
                <v-card-title>
                    {{title}}
                </v-card-title>
                <v-row class="px-3" justify='space-between' align=center>
                    <v-card-subtitle>
                        {{byline}}
                    </v-card-subtitle>
                    <v-subheader>
                        {{publishedDate}}
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

                <v-card-text class="text-h6 font-weight-medium">
                    {{abstract}}
                </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
import moment from 'moment'

export default {
  props: ['article'],
  data () {
    return {
      section: this.$store.state.news.currentSection.name,
      url: this.article.url,
      title: this.article.title,
      abstract: this.article.abstract,
      byline: this.article.byline,
      publishedDate: moment(this.article.published_date).fromNow(),
      imgLarge: this.article.multimedia ? this.article.multimedia[0].url : null,
      imgSmall: this.article.multimedia ? this.article.multimedia[3].url : null
    }
  }
}
</script>

<style>
</style>
