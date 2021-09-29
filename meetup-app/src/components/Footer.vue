<template>
  <section class="footer-bar">
    <article class="footer-content">
      <p>© 2021 Ray Magini Co.</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-bar {
  background-color: #30363e;
  width: 100%;
  height: 50px;
  margin-top: 1em;
}

.footer-content {
  width: 1000px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.footer-content p {
  color: white;
}
</style>