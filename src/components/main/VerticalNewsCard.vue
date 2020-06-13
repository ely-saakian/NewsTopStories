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
                <v-card-subtitle class="pt-2">
                    {{byline}}
                </v-card-subtitle>
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
export default {
  props: ['article'],
  data () {
    return {
      section: this.article.section,
      url: this.article.url,
      title: this.article.title,
      abstract: this.article.abstract,
      byline: this.article.byline,
      imgLarge: this.article.multimedia ? this.article.multimedia[0].url : null,
      imgSmall: this.article.multimedia ? this.article.multimedia[3].url : null
    }
  }
}
</script>

<style>
</style>
