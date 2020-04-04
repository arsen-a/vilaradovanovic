<template>
  <div class="footer-item d-flex justify-content-center align-items-center flex-column">
    <p class="villa-title">
      <strong>{{ $t("footer.villaName") }}</strong>
    </p>
    <p>{{ $t("footer.year") }}</p>
    <p>
      &copy;
      <i>{{ $t("footer.copyright") }}</i>
    </p>
  </div>
</template>

<style scoped>
.footer-item > .villa-title {
  font-size: 18px;
}

p {
  padding: 0;
  margin: 2px;
  font-size: 13px;
  color: white;
}
</style>