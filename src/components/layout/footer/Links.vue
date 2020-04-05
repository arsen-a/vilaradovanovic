<template>
  <ul class="footer-item">
    <li>
      <router-link class="navlink" :to="{ name: 'home' }">{{ $t("home.title") }}</router-link>
    </li>
    <li>
      <router-link class="navlink" :to="{ name: 'villa' }">{{ $t("villa.title") }}</router-link>
    </li>
    <li>
      <router-link class="navlink" to="#">{{ $t("apartments.title") }}</router-link>
    </li>
    <li>
      <router-link class="navlink" to="#">{{ $t("contact.title") }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
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

