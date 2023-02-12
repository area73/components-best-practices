<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="25"
        height="25"
      />
      <h1 class="title">Component's best practice</h1>
    </div>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/usar-la-plataforma">Usar la plataforma</RouterLink>
      </nav>
    </div>
  </header>
  <section>
    <RouterView />
  </section>
</template>

<style lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.title {
  display: inline;
  font-size: x-large;
}

.logo {
  // display: block;
  margin: 0 1rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header .wrapper {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, max-content);
  width: fit-content;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  header {
    display: grid;
    grid-template-rows: min-content auto;
    align-items: start;
    padding-bottom: 1rem;
  }

  .logo {
    margin: 0 1rem 0 0;
  }

  header .wrapper {
    display: grid;
    align-items: center;
    width: 100%;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
    display: grid;
    width: auto;
  }
}
</style>
