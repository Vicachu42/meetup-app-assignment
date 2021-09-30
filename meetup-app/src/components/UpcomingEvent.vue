<template>
  <section class="card-wrapper">
    <!--     <p class="meeting-time">{{ meetup.time }}</p>
    <p class="meeting-title">{{ meetup.title }}</p>
    <p class="meeting-place">
      <img
        src="../assets/map-marker-alt-solid.gif"
        alt="map-marker"
        class="map-marker"
      />
      {{ meetup.place }}
    </p> -->
    <!--     <p class="meeting-attendees">{{ meetup.attendees }}</p> -->
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