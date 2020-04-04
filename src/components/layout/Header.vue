<template>
  <div class="container-fluid m-0 p-0 d-flex">
    <div class="navbar">
      <router-link :to="{ name: 'home' }">
        <img class="logo" src="../../../public/images/logo.png" alt="Vila Radovanovic Logo" />
      </router-link>
    </div>
    <div class="navbar-links">
      <ul>
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
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background-color: rgb(75, 62, 55);
  height: 4.5rem;
}

.navlink:hover {
  color: rgb(230, 230, 230);
}

.navlink {
  position: relative;
}

.navlink:after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: rgb(230, 230, 230);
  transition: width 0.2s ease;
  -webkit-transition: width 0.2s ease;
}

.navlink:hover:after {
  width: 100%;
  left: 0;
  background: rgb(230, 230, 230);
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.navbar-links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 0;
  padding: 0;
  width: 80vw;
}

.logo {
  max-width: 10vw;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  height: 2.5vw;
}

ul > li > a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding: 15px 0 15px 0;
}
</style>
