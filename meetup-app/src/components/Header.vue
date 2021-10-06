<template>
  <section class="header-bar">
    <article class="header-content">
      <h2 class="header-text">Extraterrestrial Meetup</h2>
      <p v-html="member"></p>
    </article>
  </section>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userName: "Drax the Destroyer",
    };
  },
  computed: {
    member() {
      console.log("Hi! My name is", this.userName);
      return `<b>Hello</b> ${this.userName}`;
    },
  },
};
</script>

<style scoped>
.header-bar {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid lightgrey;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 1em;
}

.header-content {
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 1em;
  margin-right: 1em;
}

.header-text {
  color: #e45063;
  font-family: "Bebas Neue", cursive;
  font-size: 1.7rem;
  letter-spacing: 0.4em;
}
</style>