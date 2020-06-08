<template>
    <Section />
</template>

<script>
import Section from './Section'
import { mapActions } from 'vuex'
export default {
  components: {
    Section
  },
  methods: {
    ...mapActions(['fetchNewsData'])
  },
  mounted () {
    this.fetchNewsData()
  }
}
</script>

<style lang="scss">
</style>
