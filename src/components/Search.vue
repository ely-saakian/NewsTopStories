<template>
    <div>
        <h2>Top Stories in</h2>
        <Select />
        <p v-if="getNewsData">Found {{getNewsData.results.length}} stories</p>
    </div>
</template>

<script>
import Select from './Select'
import { mapGetters } from 'vuex'

export default {
  components: {
    Select
  },
  computed: mapGetters(['getNewsData'])
}
</script>

<style lang='scss' scoped>
div {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1em;
}
h2 {
  padding: 1em 0;
  text-align: center;
  font-weight: 300;
  font-size: 1.5rem;
}
p {
  text-align: center;
  font-weight: 300;
}
</style>
