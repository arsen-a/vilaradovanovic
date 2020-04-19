<template>
  <div>
    <VillaDescription />
    <hr />
    <VillaPhotoSlider />
    <hr />
  </div>
</template>

<script>
import VillaPhotoSlider from "../components/villa/VillaPhotoSlider";
import VillaDescription from "../components/villa/VillaDescription";

export default {
  name: "Villa",
  components: {
    VillaPhotoSlider,
    VillaDescription
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