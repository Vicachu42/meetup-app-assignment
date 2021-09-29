<template>
  <section class="side-wrapper">
    <h2>Side</h2>
    <RegisteredEvent />
    <PastEvent />
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
};
</script>

<style>
.side-wrapper {
  width: 33%;
  border: dotted red;
}
</style>