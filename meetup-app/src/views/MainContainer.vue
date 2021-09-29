<template>
  <section class="main-wrapper">
    <h1>Meetups that are out of this world</h1>
    <p>
      Lo-fi cornhole fixie typewriter bitters put a bird on it. Art party swag
      distillery XOXO chartreuse. Fanny pack biodiesel craft beer art party
      tilde PBR&B, quinoa 3 wolf moon. Humblebrag direct trade kickstarter, banh
      mi lo-fi snackwave 90's pabst la croix YOLO prism lyft four loko. Migas
      normcore brunch neutra woke etsy, ennui PBR&B.
    </p>
    <h3>Upcoming Events</h3>
    <UpcomingEvent
      v-for="(meetup, index) in meetups"
      :key="index"
      :meetup="meetup"
    />
  </section>
</template>

<script>
import UpcomingEvent from "../components/UpcomingEvent.vue";

export default {
  name: "MainContainer",
  components: {
    UpcomingEvent,
  },
  props: {
    meetups: Array,
  },
};
</script>

<style>
.main-wrapper {
  width: 66%;
  padding: 1em;
}
</style>