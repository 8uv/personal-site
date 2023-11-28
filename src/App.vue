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
$primary: #3e32a8;
$secondary: #552ea3;
$grey: #64748b;
$dark: #1A1A1A;
$light: #E1E1E1;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans", Arial, Helvetica, sans-serif;
}

body {
  background: $light;
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