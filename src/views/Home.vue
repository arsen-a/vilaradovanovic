<template>
  <div>
    <OwnerMsg />
    <hr />
    <GoogleMap />
    <hr />
    <Banja />
  </div>
</template>

<script>
import GoogleMap from "../components/gMap/GoogleMap";
import OwnerMsg from "../components/home/OwnerMsg";
import Banja from '../components/home/Banja'

export default {
  name: "Home",
  components: {
    GoogleMap,
    OwnerMsg,
    Banja
  }
};
</script>

<style scoped>
hr {
  margin: 3rem 0;
}
</style>