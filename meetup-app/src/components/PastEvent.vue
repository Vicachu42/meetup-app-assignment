<template>
  <section>
    <article class="card-wrapper">
      <p class="meeting-time">{{ pastMeetup.time }}</p>
      <p class="meeting-title">{{ pastMeetup.title }}</p>
      <p class="meeting-place">
        <img
          src="../assets/map-marker-alt-solid.gif"
          alt="map-marker"
          class="map-marker"
        />
        {{ pastMeetup.place }}
      </p>
      <p>Review this meeting</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "PastEvent",
  props: {
    pastMeetup: Object,
  },
};
</script>

<style scoped>
</style>