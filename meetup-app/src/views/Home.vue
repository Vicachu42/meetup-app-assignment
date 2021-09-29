<template>
  <section class="wrapper">
    <Header />
    <article class="body-content">
      <MainContainer />
      <SideContainer />
    </article>
    <Footer />
  </section>
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
.body-content {
  width: 1000px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: row;
}

h1 {
  font-family: "Maven Pro", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
}

h3 {
  font-family: "Maven Pro", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
}

.meeting-time {
  color: #838b90;
  text-transform: uppercase;
}

.meeting-title {
  color: #757575;
}

.meeting-place {
  color: #757575;
}

.meeting-attendees {
  color: #757575;
}

.map-marker {
  width: 5%;
}
</style>