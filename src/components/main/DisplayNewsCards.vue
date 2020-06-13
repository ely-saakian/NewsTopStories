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
        <v-row justify=center>
            <v-col cols=12 md="6">
              <v-row justify=center align=center>
                <p class="ma-0 text-h6 center">View top stories in:</p>
                <SectionSelect />
              </v-row>
            </v-col>
        </v-row>
        <v-row
            justify="space-between"
            class="flex-wrap"
            v-if="NewsData"
        >
            <VerticalNewsCard
            v-for="article in NewsData"
            :key="article.uri"
            :article="article"
            />
        </v-row>
    </v-container>
</template>

<script>
import VerticalNewsCard from './VerticalNewsCard'
import SectionSelect from '../SectionSelect'
import { mapGetters } from 'vuex'

export default {
  components: {
    VerticalNewsCard, SectionSelect
  },
  computed: {
    isLoading () { return this.$store.state.news.isLoading },
    ...mapGetters(['NewsData'])
  }
}
</script>

<style>
</style>
