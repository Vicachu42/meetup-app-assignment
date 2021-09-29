<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Maven+Pro:wght@400;600;700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f6f7f8;
  margin-left: -8px;
  margin-right: -8px;
}
</style>
