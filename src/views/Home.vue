<template>
  <div>
    <OwnerMsg />
    <hr />
    <GoogleMap />
  </div>
</template>

<script>
import GoogleMap from "../components/gMap/GoogleMap";
import OwnerMsg from "../components/home/OwnerMsg";

export default {
  name: "Home",
  components: {
    GoogleMap,
    OwnerMsg
  }
};
</script>

<style scoped>
hr {
  margin: 3rem 0;
}
</style>