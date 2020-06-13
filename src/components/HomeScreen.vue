<template>
  <v-container>
        <v-row justify=center>
            <h1 class="text-h1">View top stories by category.</h1>
        </v-row>
        <v-row class="text-h2" justify=center>
            <h2>What are you looking for?</h2>
        </v-row>
      <v-row justify=center>
            <v-col cols=6>
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
