<template>
  <section>
    <h3>Upcoming Event</h3>
    <article class="card-wrapper">
      <p class="meeting-time">FRI, DEC 24, 3:00 PM CEST</p>
      <p class="meeting-title">Meetup #1827</p>
      <p class="meeting-place">
        <img
          src="../assets/map-marker-alt-solid.svg"
          alt="map-marker"
          class="map-marker"
        />66.220160, 172.326910
      </p>
      <p class="meeting-attendees">17 attendees</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "UpcomingEvent",
};
</script>

<style scoped>
.card-wrapper {
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1em;
  box-sizing: border-box;
}
</style>