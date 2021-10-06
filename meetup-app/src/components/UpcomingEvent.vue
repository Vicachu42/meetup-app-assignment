<template>
  <section class="card-wrapper">
    <p class="meeting-time">{{ meetup.time }}</p>
    <p class="meeting-title">{{ meetup.title }}</p>
    <p class="meeting-place">
      <img
        src="../assets/map-marker-alt-solid.gif"
        alt="map-marker"
        class="map-marker"
      />
      {{ meetup.place }}
    </p>
    <!-- <p class="meeting-attendees">{{ meetup.attendees }}</p> -->
    <!--     <ul v-for="attendee in meetups.attendees" :key="attendee">
      <li class="meeting-attendees">{{ meetup.attendees }}</li>
    </ul> -->
    <!--     <ul v-for="attendee in meetup.attendees" :key="attendee">
      <li class="meeting-attendees">{{ meetup.attendees.attendee }}</li>
    </ul> -->
    <button class="attend-meetup" @click="$emit('attendMeetup', meetup.id)">
      Attend Event
    </button>
  </section>
</template>

<script>
export default {
  name: "UpcomingEvent",
  props: {
    meetup: Object,
  },
  methods: {
    emitAttendMeetup() {
      this.$emit("attendMeetup");
    },
  },
};
</script>

<style scoped>
</style>