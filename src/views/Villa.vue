<template>
  <div>
    <Description />
    <hr />
    <PhotoSlider />
    <hr />
  </div>
</template>

<script>
import PhotoSlider from "../components/villa/PhotoSlider";
import Description from "../components/villa/Description";

export default {
  name: "Villa",
  components: {
    PhotoSlider,
    Description
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
hr {
  margin: 3rem 0;
}
</style>