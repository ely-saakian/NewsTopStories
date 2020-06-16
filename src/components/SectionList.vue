<template>
    <v-list dense>
        <v-subheader>
          <v-icon small left>mdi-newspaper</v-icon>
          SECTIONS
        </v-subheader>
        <v-list-item-group>
            <v-list-item
              :to="{name: 'section', params: {section}}"
              v-for="[section, name] in getSections"
              :key="section"
              @click="setCurrentSection({section, name})"
              >
               <v-list-item-content>
                 {{name}}
               </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <br>
          <br>
          <br>
          <br>
          <br>
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
