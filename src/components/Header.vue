<template>
  <header>
    <router-link :to="{name: 'home'}" title="Go Home">
      <img src='../assets/NewYorkTimes.svg' alt='NYT Logo' />
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
a {
  text-align: center;
  padding: 1em;
  text-decoration: none;
  display: block;
  width: 100%;
}
header {
  background-color: $black;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
