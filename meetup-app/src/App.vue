<template>
  <div id="app">
    <Home
      v-bind:meetups="meetups"
      v-bind:registeredMeetups="registeredMeetups"
      v-bind:pastMeetups="pastMeetups"
      v-on:attendMeetup="registerToMeetup"
    />
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
          attendees: [
            "Zoidberg",
            "Boros",
            "Kang",
            "Kodos",
            "Predator",
            "Christopher Johnson",
          ],
        },
        {
          id: 3,
          time: "FRI, SEP 1, 1939, 1:00 AM DST",
          title: "Extraterrestrial Meetup #-712",
          place: "25°20′42″S 131°02′10″E",
          attendees: [
            "Zoidberg",
            "E.T.",
            "Queen Beryl",
            "Lrrr",
            "Zaphod Beeblebrox",
            "Predator",
            "Indrid Cold",
          ],
        },
        {
          id: 4,
          time: "WED, NOV 23, 2022, 3:00 AM U",
          title: "Extraterrestrial Meetup #65",
          place: "Slottsskogen, Göteborg",
          attendees: [
            "Zoidberg",
            "The Doctor",
            "The Master",
            "The Thing",
            "Xenomorph XX121",
          ],
        },
        {
          id: 5,
          time: "MON, JUNE 10, 1129, 9:00 PM CAST",
          title: "Extraterrestrial Meetup #9",
          place: "45°32′50.8″S 16°49′41.4″W",
          attendees: ["Zoidberg", "Optimus Prime", "Spock", "Gordon Shumway"],
        },
      ],
      registeredMeetups: [
        {
          id: 2,
          time: "SUN, APR 20, 2042 11:00 PM PSST",
          title: "Extraterrestrial Meetup #-19",
          place: "At Gary's place",
          attendees: [
            "Zoidberg",
            "Drax the Destroyer",
            "The Doctor",
            "Zeta Reticulan 36",
            "Kif",
          ],
        },
      ],
      pastMeetups: [
        {
          id: 6,
          time: "MON, SEP 21, 2015, 4:00 PM U",
          title: "Extraterrestrial Meetup #14",
          place: "Anywhere really",
          attendees: [
            "Zoidberg",
            "Kodos",
            "Drax the Destroyer",
            "Zaphod Beeblebrox",
            "The Master",
            "Gordon Shumway",
            "Indrid Cold",
          ],
        },
        {
          id: 7,
          time: "THU, AUG 12, 2021, 4:00 AM CEST",
          title: "Extraterrestrial Meetup #?",
          place:
            "Next to the second largest ball of yarn in the world, Oregon, USA",
          attendees: ["Zoidberg"],
        },
      ],
    };
  },
  methods: {
    registerToMeetup(id) {
      const attendNewMeetup = this.meetups.find((meetup) => meetup.id === id);
      this.registeredMeetups.push(attendNewMeetup);
      const index = this.meetups.findIndex((meetup) => meetup.id === id);
      console.log(index);
      this.meetups.splice(index, 1);
    },
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