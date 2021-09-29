<template>
  <div>
    <Header />
    <h1>Home</h1>
    <MainContainer />
    <SideContainer />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import MainContainer from "./MainContainer.vue";
import SideContainer from "./SideContainer.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    MainContainer,
    SideContainer,
    Footer,
  },
};
</script>

<style>
</style>