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
      <h1 class="title">Componentes: Buenas prácticas</h1>
    </div>

    <div class="wrapper">
      <nav>
        <a href="/slides/index.html" target="_blank">Slides</a>
        <RouterLink to="hands-on-code">Hands on code</RouterLink>
        <RouterLink to="/bibliography">Bibliografía</RouterLink>
      </nav>
    </div>
  </header>
  <section class="pt-6">
    <RouterView />
  </section>
</template>

<style lang="scss">
// incluimos aquí el css base para no alterar la especificidad.
// si se añade en el import del main.ts slos estilos se añadirían
// al final de todos por debajo de los componentes no dinámicos con lo
// que tendríamos problemas de especificidad
@use "./assets/main.css";

header {
  line-height: 1.5;
  max-height: 100vh;
  border-bottom: 1px solid #aaa;
  display: grid;
  grid-template-rows: min-content auto;
  align-items: start;
  padding-bottom: 1rem;
}

.title {
  display: inline;
  font-size: x-large;
}

.logo {
  margin: 0 1rem 0 0;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: 1rem;
  display: grid;
  grid-auto-flow: column;

  width: auto;
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
  grid-template-columns: repeat(2, max-content);
  margin: 0 auto;
  display: grid;
  align-items: center;
  width: 100%;
}
</style>
