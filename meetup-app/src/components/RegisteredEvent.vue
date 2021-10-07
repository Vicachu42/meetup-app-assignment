<template>
  <section class="card-wrapper">
    <p class="registered-meeting-title">{{ registeredMeetup.title }}</p>
    <article>
      <p class="view-attendees" @click="toggleVisibility()">
        View More Information
        <span class="chevron-bottom" v-show="!isVisible"></span>
        <span class="chevron-top" v-show="isVisible"></span>
      </p>
      <div v-show="isVisible">
        <p class="meeting-time">{{ registeredMeetup.time }}</p>
        <p class="meeting-place">
          <img
            src="../assets/map-marker-alt-solid.gif"
            alt="map-marker"
            class="map-marker"
          />
          {{ registeredMeetup.place }}
        </p>
        <p><b>Attendees</b></p>
        <ul v-for="attendee in registeredMeetup.attendees" :key="attendee">
          <li class="meeting-attendees">{{ attendee }}</li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "RegisteredEvent",
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    registeredMeetup: Object,
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
p {
  color: #757575;
}

.registered-meeting-title {
  color: #757575;
  font-family: "Maven Pro", sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
}

.view-attendees {
  color: #4ea3b3;
}
</style>