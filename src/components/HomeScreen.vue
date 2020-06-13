<template>
  <v-container>
        <v-row justify=center>
            <h1 class="text-lg-h1 text-center">View top stories by category.</h1>
        </v-row>
        <v-row class="text-lg-h2 " justify=center>
            <h2>What are you looking for?</h2>
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
