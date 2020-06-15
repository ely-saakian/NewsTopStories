<template>
    <v-select
        class="pa-10"
        @change="select"
        outlined
        filled
        hide-details
        :value="$store.state.news.currentSection"
        :items="getSections"
        :item-text="getSections"
        :item-value="getSections"
        label="Please select a section"
    >
    </v-select>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getSections'])
  },
  methods: {
    ...mapActions(['setCurrentSection']),
    select (selection) {
      this.setCurrentSection(selection)
    }
  }
}
</script>

<style>
</style>
