<template>
  <div>
    <h2>Main</h2>
    <UpcomingEvent />
  </div>
</template>

<script>
import UpcomingEvent from "../components/UpcomingEvent.vue";

export default {
  name: "MainContainer",
  components: {
    UpcomingEvent,
  },
};
</script>

<style>
</style>