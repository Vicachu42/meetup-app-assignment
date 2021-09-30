<template>
  <section class="side-wrapper">
    <RegisteredEvent
      v-for="(registeredMeetup, index) in registeredMeetups"
      :key="index + 'registered'"
      :registeredMeetup="registeredMeetup"
    />
    <h4>Past Events</h4>
    <PastEvent
      v-for="(pastMeetup, index) in pastMeetups"
      :key="index + 'past'"
      :pastMeetup="pastMeetup"
    />
  </section>
</template>

<script>
import RegisteredEvent from "../components/RegisteredEvent.vue";
import PastEvent from "../components/PastEvent.vue";

export default {
  name: "SideContainer",
  components: {
    RegisteredEvent,
    PastEvent,
  },
  props: {
    registeredMeetups: Array,
    pastMeetups: Array,
  },
};
</script>

<style>
.side-wrapper {
  width: 33%;
  padding: 1em;
  margin-left: 1.8em;
}
</style>