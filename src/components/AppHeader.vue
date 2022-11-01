<template>
  <header class="main-header">
    <h1 @click="navigateHome" class="logo">Maillard</h1>
    <button @click="toggleNav" class="nav-btn">
      <img class="bars-svg" src="../assets/imgs/bars.svg" />
    </button>
    <nav class="main-nav" :class="{ open: isNavOpen }">
      <button class="close-btn" @click="toggleNav">
        <img class="bars-svg" src="../assets/imgs/X.svg" />
      </button>
      <router-link to="/"> Recipes</router-link>
      <router-link to="/about">about</router-link>
    </nav>

  </header>
</template>

<script>

export default {
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav() {
      console.log('toggling', this.isNavOpen)
      this.isNavOpen = !this.isNavOpen
    },
    navigateHome() {
      this.$router.push('/')
    }
  }

}
</script>

<style lang="scss">
header.main-header {
  background-color: var(--clr4);
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
    top: 16px;
    right: 4px;
    background: transparent;
    border: none;
    cursor: pointer;

    .bars-svg {
      height: 40px;
      width: 40px;
      color: var(--clr1);
    }
  }

  .main-nav {
    background: var(--clr3);
    position: fixed;
    height: 100vh;
    z-index: 50;
    top: 0;
    right: -400px;
    box-shadow: -4px -1px 6px -2px rgb(0 0 0 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);
    transition: 0.4s;

    &.open {
      right: 0;
      transition: 0.4s;
    }

    .close-btn {
      position: absolute;
      top: 16px;
      right: 4px;
      background: transparent;
      border: none;
      cursor: pointer;

      img {
        width: 28px
      }
    }
  }
}
</style>