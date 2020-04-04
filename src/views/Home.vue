<template>
  <div class="container">
    <div class="owner-msg">
      <h1>Poštovani posetioci</h1>
      <p>{{ $t("ownerMessage") }}</p>
      <p>
        Uz uvažavanje,
        <br />vlasnik
        <br />
        <span class="signature">Radovanović Aleksandar</span>
      </p>
    </div>
    <hr />
    <div class="gmaps">
      <iframe
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNwi2rchgWUcRAYRb70ECfFQ&key=AIzaSyD4WDZ9r9ThSXvkGt0WIwRMlqa9Jp1VJaM"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Italianno&display=swap");

h1 {
  text-align: center;
  margin-bottom: 4rem;
  color: rgb(97, 97, 97);
}

p {
  text-align: justify;
  padding: 15px 5px;
}

.owner-msg {
  margin-top: 5rem;
}

.signature {
  font-family: "Italianno", cursive;
  font-size: 40px;
}

.gmaps {
  display: flex;
  justify-content: center;
  align-items: center;
}

hr {
  margin: 3rem 0;
}

iframe {
  width: 100vw;
  height: 450px;
}
</style>