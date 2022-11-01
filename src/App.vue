<template>
  <AppHeader></AppHeader>
  <main>
    <router-view />
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  components: {
    AppHeader, AppFooter
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  font-family: Dosis;
  background-color: var(--clr4);
  color: var(--clrText);
  display: flex;
  flex-direction: column;

  main {
    box-sizing: border-box;
    max-width: 1260px;
    min-height: calc(100vh - 176px);
    margin: auto;
    padding: 3px;
    flex: 1;

  }
}
</style>
