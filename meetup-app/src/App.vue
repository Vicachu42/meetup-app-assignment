<template>
  <div id="app">
    <Home v-bind:meetups="meetups" />
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      meetups: [
        {
          id: 1,
          time: "FRI, DEC 24, 2021, 3:00 PM CEST",
          title: "Extraterrestrial Meetup #2",
          place: "66°13′12.6″N 172°19′36.9″E",
          attendees: 5,
        },
        {
          id: 2,
          time: "SUN, APR 20, 2042 11:00 PM PSST",
          title: "Extraterrestrial Meetup #19",
          place: "At Gary's place",
          attendees: 7,
        },
        {
          id: 3,
          time: "FRI, SEP 1, 1939, 1:00 AM DST",
          title: "Extraterrestrial Meetup #-712",
          place: "25°20′42″S 131°02′10″E",
          attendees: 13,
        },
        {
          id: 4,
          time: "WED, NOV 23, 2022, 3:00 AM U",
          title: "Extraterrestrial Meetup #65",
          place: "Slottsskogen, Göteborg",
          attendees: 2,
        },
        {
          id: 5,
          time: "MON, JUNE 10, 1129, 9:00 PM CAST",
          title: "Extraterrestrial Meetup #-9",
          place: "45°32′50.8″S 16°49′41.4″W",
          attendees: 9,
        },
      ],
    };
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
