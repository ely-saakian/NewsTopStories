<template>
  <v-container>
        <v-row justify=center>
            <v-col cols=12 sm=8 lg=6>
                <h1 class="text-center text-h3">View top stories by category.</h1>
            </v-col>
        </v-row>
        <v-row justify=center>
            <v-col cols=12 sm=8 lg=6>
                <h2 class="grey darken-3 pa-4 white--text text-center text-h4">What are you looking for?</h2>
            </v-col>
        </v-row>
        <v-row justify=center>
            <v-col cols=12 sm=8 lg=6>
                <SectionSelect />
            </v-col>
      </v-row>
  </v-container>
</template>

<script>
import SectionSelect from './SectionSelect'

export default {
  components: {
    SectionSelect
  }
}
</script>

<style>
</style>
