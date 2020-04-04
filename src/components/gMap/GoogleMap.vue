<template>
  <div class="gmaps">
    <iframe
      frameborder="0"
      style="border:0"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNwi2rchgWUcRAYRb70ECfFQ&key=AIzaSyD4WDZ9r9ThSXvkGt0WIwRMlqa9Jp1VJaM"
      allowfullscreen
    />
  </div>
</template>

<style scoped>
.gmaps {
  display: flex;
  justify-content: center;
  align-items: center;
}

iframe {
  width: 100vw;
  height: 450px;
}
</style>