<template>
  <div class="owner-msg">
    <h1>{{ $t("home.dearVisitors") }}</h1>
    <p>{{ $t("home.ownerMessage") }}</p>
    <p>
      {{ $t("home.signature.p1") }}
      <br />
      {{ $t("home.signature.p2") }}
      <br />
      <span class="signature">{{ $t("home.signature.p3") }}</span>
    </p>
  </div>
</template>

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
</style>