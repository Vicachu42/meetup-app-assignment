<template>
  <section class="card-wrapper">
    <p class="meeting-time">{{ meetup.time }}</p>
    <p class="meeting-title">{{ meetup.title }}</p>
    <p class="meeting-place">
      <img
        src="../assets/map-marker-alt-solid.gif"
        alt="map-marker"
        class="map-marker"
      />{{ meetup.place }}
    </p>
    <p class="meeting-attendees">{{ meetup.attendees }}</p>
    <!--       <p class="meeting-time">FRI, DEC 24, 3:00 PM CEST</p>
      <p class="meeting-title">Meetup #1827</p>
      <p class="meeting-place">
        <img
          src="../assets/map-marker-alt-solid.gif"
          alt="map-marker"
          class="map-marker"
        />66.220160, 172.326910
      </p>
      <p class="meeting-attendees">17 attendees</p> -->
  </section>
</template>

<script>
export default {
  name: "UpcomingEvent",
  props: {
    meetup: Object,
  },
};
</script>

<style scoped>
</style>