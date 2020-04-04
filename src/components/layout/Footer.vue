<template>
  <div class="container-fluid">
    <ul class="footer-item">
      <li>
        <router-link class="navlink" :to="{ name: 'home' }">Početna</router-link>
      </li>
      <li>
        <router-link class="navlink" to="#">Vila</router-link>
      </li>
      <li>
        <router-link class="navlink" to="#">Apartmani</router-link>
      </li>
      <li>
        <router-link class="navlink" to="#">Kontakt</router-link>
      </li>
    </ul>
    <div class="footer-item d-flex justify-content-center align-items-center flex-column">
      <p class="villa-title">
        <strong>VILA RADOVANOVIĆ</strong>
      </p>
      <p>2010 - 2020</p>
      <p>
        <i>&copy; Sva prava zadržana</i>
      </p>

      <p>
        <i>
          Created and designed by
          <a href="https://www.instagram.com/arsenosner/" target="_blank">Šekularac Arsen</a>
        </i>
      </p>
    </div>
    <div class="footer-item">
      <p>Preporučujemo u Beogradu:</p>
      <ul class="recommended-links">
        <li>
          <a class="navlink" href="http://rakoc.com/">Apartmani Beograd</a>
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
  margin: 10px;
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