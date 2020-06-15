<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer  dark app v-model="isDrawerOpen">
        <SectionList />
      </v-navigation-drawer>

      <v-app-bar dark app>
        <v-app-bar-nav-icon @click.stop="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
        <v-container fluid>
            <v-row justify="center">
              <v-col cols=6 sm=4>
                  <router-link :to="{name: 'home'}"><TheLogo /></router-link>
              </v-col>
            </v-row>
        </v-container>
      </v-app-bar>

      <v-main class="d-flex align-center">
        <router-view />
      </v-main>

      <v-footer dark class='d-flex justify-center' absolute>
        &copy; Ely Saakian 2020
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import TheLogo from './components/TheLogo'
import SectionList from './components/SectionList'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      isDrawerOpen: null
    }
  },
  components: {
    TheLogo, SectionList
  },
  methods: {
    ...mapActions(['setCurrentSection'])
  },
  created () {
    this.setCurrentSection('home')
    this.$router.push({ name: 'home' })
  }
}
</script>

<style lang="scss">
</style>
