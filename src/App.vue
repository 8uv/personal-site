<script setup>
import Sidebar from "./components/Sidebar.vue"
import ASCIIart from "./components/Ascii.vue"

window.addEventListener("load", () => {
  twemoji.parse(document.body)
})
</script>

<template>
  <div class="app">
    <Sidebar />
    <ASCIIart />
    <router-view />
  </div>
</template>

<style lang="scss">
@use "assets/_vars.scss" as *;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans", Arial, Helvetica, sans-serif;
}

body {
  background: $light;
  transition: background .6s;

  @media (max-width: 700px) {
    background: #fefefe !important;
  }
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;
  }
}

img.emoji {
   height: 1em;
   width: 1em;
}
</style>