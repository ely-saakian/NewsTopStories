<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer  dark app v-model="isSectionListDrawerOpen">
        <SectionList />
      </v-navigation-drawer>

      <v-app-bar dark app>
        <v-app-bar-nav-icon @click.stop="isSectionListDrawerOpen = !isSectionListDrawerOpen">
          <v-icon v-if="isSectionListDrawerOpen">mdi-menu-open</v-icon>
        </v-app-bar-nav-icon>
        <v-container fluid>
            <v-row justify="center">
              <v-col cols=8 sm=3>
                  <router-link :to="{name: 'home'}"><TheLogo /></router-link>
              </v-col>
            </v-row>
        </v-container>

        <v-badge dot overlap offset-x=20 offset-y=20 color='error' :value="isReadingListEmpty">
          <v-btn icon  @click.stop="isReadLaterDrawerOpen = !isReadLaterDrawerOpen">
            <v-icon>mdi-book-open-variant</v-icon>
          </v-btn>
        </v-badge>
      </v-app-bar>

      <v-navigation-drawer :width="ReadListWidth" right app v-model="isReadLaterDrawerOpen">
        <ReadLaterList />
      </v-navigation-drawer>

      <v-main class="d-flex align-center">
        <router-view />
      </v-main>

      <v-footer dark class='text-caption d-flex justify-center' absolute>
        &copy; Ely Saakian 2020
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import TheLogo from './components/TheLogo'
import SectionList from './components/SectionList'
import ReadLaterList from './components/ReadLaterList'
import eventBus from './eventBus'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      ReadListWidth: this.$vuetify.breakpoint.name === 'xs' ? '300' : '350',
      isReadingListEmpty: null,
      isSectionListDrawerOpen: null,
      isReadLaterDrawerOpen: false
    }
  },
  components: {
    TheLogo, SectionList, ReadLaterList
  },
  methods: {
    ...mapActions(['setCurrentSection'])
  },
  created () {
    document.title = 'Top Stories NYT'
    const readingList = JSON.parse(localStorage.getItem('readingList')) || []
    localStorage.setItem('readingList', JSON.stringify(readingList))
    this.setCurrentSection({ section: 'home', name: 'Home' })
    this.isReadingListEmpty = !!JSON.parse(localStorage.getItem('readingList')).length
    eventBus.$on('addToReadingList', () => {
      this.isReadingListEmpty = !!JSON.parse(localStorage.getItem('readingList')).length
    })
    eventBus.$on('removedFromReadingList', () => {
      this.isReadingListEmpty = !!JSON.parse(localStorage.getItem('readingList')).length
    })
  }
}
</script>

<style lang="scss">
</style>
