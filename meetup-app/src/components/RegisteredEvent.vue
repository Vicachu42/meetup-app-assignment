<template>
  <section class="wrapper">
    <h3>Your Events</h3>
    <article class="card-wrapper">
      <p class="meeting-time">{{ registeredMeetup.time }}</p>
      <p class="meeting-title">{{ registeredMeetup.title }}</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "RegisteredEvent",
  props: {
    registeredMeetup: Object,
  },
};
</script>

<style scoped>
.wrapper {
  margin-bottom: 2em;
}
</style>