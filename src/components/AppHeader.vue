<template>
  <header class="main-header">
    <h1 @click="navigateHome" class="logo">Maillard</h1>
    <button class="go-back-btn" @click="onGoBack"> <span>←</span> Back</button>
    <button @click="toggleNav" class="nav-btn">
      <img class="bars-svg" src="../assets/imgs/bars.svg" />
    </button>
    <nav class="main-nav" :class="{ open: isNavOpen }">
      <button class="close-btn" @click="toggleNav">
        <img class="bars-svg" src="../assets/imgs/X.svg" />
      </button>
      <section class="search-container">
        <input :value="filterBy" @input="setFilterBy" placeholder="Search recipes" type="text">
        <p>Search by name, category or ingredient</p>
      </section>
      <router-link class="link" class-active="active" to="/"> Recipes</router-link>
      <router-link class="link" class-active="active" to="/about">About</router-link>
      <router-link class="link" class-active="active" to="/add">Create</router-link>
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
      this.isNavOpen = !this.isNavOpen
    },
    navigateHome() {
      this.$router.push('/')
    },
    setFilterBy({ target: { value } }) {
      this.$store.dispatch('setFilterBy', value)
    },
    onGoBack() {
      this.$router.back()
    }

  },
  computed: {
    filterBy() {
      return this.$store.getters.filterBy
    }
  }

}
</script>

<style lang="scss">
header.main-header {
  position: sticky;
  top: 0;
  background-color: #f5efe7;
  z-index: 150;
  display: flex;
  justify-content: center;
  align-items: center;


  .go-back-btn {
    background-color: var(--clr1);
    position: absolute;
    left: 5px;
    top: 5px;
    line-height: 10px;
    align-self: center;
    border: none;
    color: var(--clr4);
    border-radius: 3px;
    height: 32px;
    font-family: Dosis;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;

    span {
      position: relative;
      top: -2px;
    }

    &:hover {
      opacity: 0.92;
    }
  }

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
    top: 21px;
    right: 4px;
    background: transparent;
    border: none;
    cursor: pointer;

    .bars-svg {
      width: 30px;
      color: var(--clr1);
    }
  }

  .main-nav {
    width: 200px;
    background: var(--clr3);
    position: fixed;
    height: 100vh;
    z-index: 150;
    top: 0;
    right: -400px;
    box-shadow: -4px -1px 6px -2px rgb(0 0 0 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    padding: 48px 0 0 12px;
    gap: 10px;
    font-size: 20px;
    align-items: flex-start;

    .search-container {
      margin-right: 12px;
      padding: 8px;
      background: var(--clr2);
      position: relative;
      right: 4px;

      input {
        margin: 0;
        font-size: 18px;
      }

      p {
        margin: 6px 0 0 0;
        font-size: 16px;
      }
    }

    .link {
      all: unset;
      cursor: pointer;

      &.router-link-active {
        text-decoration: underline;
      }
    }

    &.open {
      right: 0;
      transition: 0.4s;
    }

    .close-btn {
      position: absolute;
      top: 6px;
      right: 1px;
      background: transparent;
      border: none;
      cursor: pointer;

      img {
        width: 22px;
      }
    }
  }
}
</style>