<template>
    <v-tooltip bottom close-delay=1000>
        <template v-slot:activator="{ on, attrs }">
            <v-btn small depressed v-if="isASC" @click="$emit('sort')" v-bind="attrs" v-on="on">
                <v-icon left>mdi-sort-ascending</v-icon>
                <span class="caption">sort by Date</span>
            </v-btn>
            <v-btn small depressed v-else @click="$emit('sort')" v-bind="attrs" v-on="on">
                <v-icon left>mdi-sort-descending</v-icon>
                <span class="caption">sort by Date</span>
            </v-btn>
        </template>
        <span>Showing {{isASC ? 'newest' : 'oldest'}} first</span>
    </v-tooltip>
</template>

<script>
export default {
  props: {
    isASC: Boolean
  }
}
</script>

<style>
</style>
