<template>
  <div class="container-fluid m-0 p-0">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700&display=swap&subset=latin-ext");

* {
  font-family: "Roboto", sans-serif;
}
</style>
