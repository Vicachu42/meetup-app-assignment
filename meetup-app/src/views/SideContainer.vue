<template>
  <section class="side-wrapper">
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
  padding: 1em;
  margin-left: 1.8em;
}
</style>