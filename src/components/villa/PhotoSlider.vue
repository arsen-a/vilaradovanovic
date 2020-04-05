<template>
  <div>
    <carousel
      :autoplay="true"
      :loop="true"
      :perPage="2"
      :speed="1500"
      :autoplayTimeout="4000"
      class="slider"
    >
      <slide class="slide">
        <img src="../../../public/images/villa/1.jpg" alt="Villa image" />
      </slide>
      <slide class="slide">
        <img src="../../../public/images/villa/2.jpg" alt="Villa image" />
      </slide>
      <slide class="slide">
        <img src="../../../public/images/villa/3.jpg" alt="Villa image" />
      </slide>
      <slide class="slide">
        <img src="../../../public/images/villa/4.jpg" alt="Villa image" />
      </slide>
      <slide class="slide">
        <img src="../../../public/images/villa/5.jpg" alt="Villa image" />
      </slide>
      <slide class="slide">
        <img src="../../../public/images/villa/6.jpg" alt="Villa image" />
      </slide>
      <slide class="slide">
        <img src="../../../public/images/villa/7.jpg" alt="Villa image" />
      </slide>
      <slide class="slide">
        <img src="../../../public/images/villa/8.jpg" alt="Villa image" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
.slide {
  display: flex;
  justify-content: center;
  max-height: 350px;
}

.slide img {
  max-height: inherit;
  width: auto;
}

button:focus {
  outline: 0;
}
</style>