<template>
  <section class="wrapper">
    <Header />
    <article class="body-content">
      <MainContainer v-bind:meetups="meetups" v-on="$listeners" />
      <SideContainer
        v-bind:registeredMeetups="registeredMeetups"
        v-bind:pastMeetups="pastMeetups"
      />
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
  props: {
    meetups: Array,
    registeredMeetups: Array,
    pastMeetups: Array,
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

.card-wrapper {
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 1em;
  padding: 1em;
  box-sizing: border-box;
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
  margin-top: 0;
}

h4 {
  font-family: "Maven Pro", sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 1.5em;
}

button {
  background-color: #e5635e;
  color: white;
  font-family: "Maven Pro", sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  padding: 0.5em 0.7em 0.5em 0.7em;
}
button:hover {
  background-color: #e7716d;
}
button:active {
  transform: translateY(3px);
  background-color: #e7716d;
}

.meeting-time {
  color: #838b90;
  font-weight: 700;
}

.meeting-title {
  color: #757575;
  font-family: "Maven Pro", sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
}

.meeting-place {
  color: #757575;
  font-weight: 500;
}

.meeting-attendees {
  color: #757575;
}

.map-marker {
  width: 0.7rem;
}

.added-review {
  color: #757575;
  font-weight: 600;
  font-style: italic;
}

.review-error {
  color: #e5635e;
  font-weight: 600;
}
</style>