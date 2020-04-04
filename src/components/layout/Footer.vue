<template>
  <div class="container-fluid">
    <ul class="footer-item">
      <li>
        <router-link class="navlink" :to="{ name: 'home' }">{{ $t("home.title") }}</router-link>
      </li>
      <li>
        <router-link class="navlink" to="#">{{ $t("villa.title") }}</router-link>
      </li>
      <li>
        <router-link class="navlink" to="#">{{ $t("apartments.title") }}</router-link>
      </li>
      <li>
        <router-link class="navlink" to="#">{{ $t("contact.title") }}</router-link>
      </li>
    </ul>
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
    <div class="footer-item">
      <p>{{ $t("footer.recommendation.title") }}</p>
      <ul class="recommended-links">
        <li>
          <a class="navlink" href="http://rakoc.com/">{{ $t("footer.recommendation.rm1") }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgb(228, 228, 228);
  margin-top: 5rem;
  background-color: rgb(41, 41, 41);
}

.footer-item > .villa-title {
  font-size: 18px;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 0 2rem 0;
  width: 15rem;
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

ul {
  padding: 0;
  list-style-type: none;
}
</style>