<template>
  <section class="card-wrapper">
    <p class="meeting-time">{{ registeredMeetup.time }}</p>
    <p class="meeting-title">{{ registeredMeetup.title }}</p>
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
</style>