<template>
  <div class="footer-item">
    <p>{{ $t("footer.recommendation.title") }}</p>
    <ul class="recommended-links">
      <li>
        <a class="navlink" href="http://rakoc.com/">{{ $t("footer.recommendation.rm1") }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding: 0;
  list-style-type: none;
}

.footer-item > p {
  padding: 0;
  margin: 2px;
  font-size: 13px;
  color: white;
}

a {
  font-size: 12px;
  color: rgb(182, 182, 182);
  text-decoration: underline;
}
</style>