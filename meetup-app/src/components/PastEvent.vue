<template>
  <section>
    <article class="card-wrapper">
      <!--       <p class="meeting-time">{{ pastMeetup.time }}</p>
      <p class="meeting-title">{{ pastMeetup.title }}</p>
      <p class="meeting-place">
        <img
          src="../assets/map-marker-alt-solid.gif"
          alt="map-marker"
          class="map-marker"
        />
        {{ pastMeetup.place }}
      </p> -->
      <div class="review-form" v-show="isVisible">
        <form>
          <textarea
            name="leave-review"
            class="review-text"
            cols="30"
            rows="5"
            placeholder="Review this event"
            v-model="newReview"
          ></textarea>
        </form>
        <button class="add-review" @click="addReview">Submit</button>
      </div>
      <div class="review" v-show="!isVisible">
        <p class="added-review">{{ newReview }}</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "PastEvent",
  props: {
    pastMeetup: Object,
  },
  data() {
    return {
      isVisible: true,
      newReview: "",
    };
  },
  methods: {
    addReview() {
      if (this.newReview === "") {
        console.log("You can not submit an empty input");
        return "You can not submit an empty input";
      } else {
        this.newReview.push;
        this.isVisible = !this.isVisible;
      }
    },
  },
};
</script>

<style scoped>
</style>