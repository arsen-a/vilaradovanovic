<template>
  <div class="container-fluid">
    <Links class="footer-item" />
    <TitleAndCopyright class="footer-item" />
    <Recommendations class="footer-item" />
  </div>
</template>

<script>
import Links from "./footer/Links";
import Recommendations from "./footer/Recommendations";
import TitleAndCopyright from "./footer/TitleAndCopyright";

export default {
  name: "Footer",
  components: {
    Links,
    Recommendations,
    TitleAndCopyright
  }
};
</script>

<style scoped>
.container-fluid {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgb(228, 228, 228);
  margin-top: 5rem;
  background-color: rgb(41, 41, 41);
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 0 2rem 0;
  width: 15rem;
}
</style>