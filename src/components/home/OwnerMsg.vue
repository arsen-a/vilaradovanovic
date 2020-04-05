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
    <div class="d-flex justify-content-center">
      <button class="btn go-villa-btn" type="button" @click="goVilla">Pogledaj Vilu</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goVilla() {
      this.$router.push({ name: "villa" });
    }
  }
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

.go-villa-btn {
  background-color: rgb(139, 115, 101);
  padding: 10px 30px;
  color: white;
}
</style>