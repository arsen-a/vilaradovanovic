<template>
  <div class="container-fluid m-0 p-0">
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700&display=swap&subset=latin-ext");

* {
  font-family: "Roboto", sans-serif;
}
</style>
