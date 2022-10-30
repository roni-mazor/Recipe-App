<template>
  <AppHeader></AppHeader>
  <main>
    <router-view />
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
  components: {
    AppHeader
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  font-family: Dosis;
  background-color: var(--clr4);
  color: var(--clrText);
}
</style>
