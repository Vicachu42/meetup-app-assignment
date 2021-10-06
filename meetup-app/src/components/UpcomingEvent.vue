<template>
  <section class="card-wrapper">
    <p class="meeting-time">{{ meetup.time }}</p>
    <p class="meeting-title">{{ meetup.title }}</p>
    <p class="meeting-place">
      <img
        src="../assets/map-marker-alt-solid.gif"
        alt="map-marker"
        class="map-marker"
      />
      {{ meetup.place }}
    </p>
    <article>
      <p class="view-attendees" @click="toggleVisibility()">
        View Attendees
        <span class="chevron-bottom" v-show="!isVisible"></span>
        <span class="chevron-top" v-show="isVisible"></span>
      </p>
      <article v-show="isVisible">
        <ul v-for="attendee in meetup.attendees" :key="attendee">
          <li class="meeting-attendees">{{ attendee }}</li>
        </ul>
      </article>
    </article>
    <button class="attend-meetup" @click="$emit('attendMeetup', meetup.id)">
      Attend Event
    </button>
  </section>
</template>

<script>
export default {
  name: "UpcomingEvent",
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    meetup: Object,
  },
  methods: {
    emitAttendMeetup() {
      this.$emit("attendMeetup");
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
</style>