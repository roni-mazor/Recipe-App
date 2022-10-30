<template>
  <header class="main-header">
    <h1 @click="navigateHome" class="logo">Maillard</h1>
    <button class="nav-btn">
      navigate
    </button>
    <!-- <nav>
      <router-link to="/recipe">Recipes</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
  </header>
</template>

<script>
export default {
  methods: {
    navigateHome() {
      this.$router.push('/recipe')
    }
  }

}
</script>

<style lang="scss">
header.main-header {
  background-color: var(--clr4);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  h1.logo {
    font-family: AlexBrush;
    font-size: 60px;
    margin: 0;
    color: var(--clr1);

    &:hover {
      cursor: pointer;
    }
  }

  .nav-btn {
    position: absolute;
    top: 25px;
    right: 4px;
  }
}
</style>