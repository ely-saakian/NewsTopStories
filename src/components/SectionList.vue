<template>
    <v-list dense>
        <v-subheader>SECTIONS</v-subheader>
        <v-list-item-group>
            <v-list-item
              :to="{name: 'section', params: {section}}"
              v-for="section in getSections"
              :key="section"
              @click="setCurrentSection(section)"
              >
               {{section}}
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['setCurrentSection'])
  },
  computed: {
    ...mapGetters(['getSections'])
  }
}
</script>

<style>
</style>
