<template>
  <div class="banja-container">
    <div>
      <img class="banja-img" src="../../../public/images/home/banja-koviljaca.jpg" />
    </div>
    <div>
      <h3>
        <i>{{ $t("home.banjaDesc.title") }}</i>
      </h3>
      <p class="banja-desc">{{ $t("home.banjaDesc.desc") }}</p>
    </div>
  </div>
</template>

<style scoped>
.banja-container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.banja-desc {
  text-align: justify;
  margin: 0;
  margin-left: 2rem;
  padding: 0;
}

h3 {
  text-align: left;
  margin-left: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: rgb(97, 97, 97);
}

.banja-img {
  max-width: 400px;
  border-radius: 10px;
}
</style>