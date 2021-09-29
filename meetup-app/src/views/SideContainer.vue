<template>
  <div>
    <h2>Side</h2>
    <RegisteredEvent />
    <PastEvent />
  </div>
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
};
</script>

<style>
</style>