<template>
    <v-select
        class="pa-10"
        @change="select"
        outlined
        filled
        hide-details
        :items="getSections"
        :item-text="getSections"
        :item-value="getSections"
        label="Please make a selection"
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
      this.$router.push({ name: 'section' })
    }
  }
}
</script>

<style>
</style>
