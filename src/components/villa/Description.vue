<template>
  <div>
    <div class="ds-first">
      <p>
        <strong>{{ $t("villa.villaName") }}</strong>
        {{ $t("villa.description.first") }}
      </p>
    </div>
    <div class="ds-second-third">
      <div class="ds d-flex flex-row">
        <img class="icon" src="../../../public/images/villa/villa-icon.svg" />
        <p>{{ $t("villa.description.second") }}</p>
      </div>
    </div>
    <div class="ds-second-third">
      <div class="ds d-flex flex-row">
        <img class="icon" src="../../../public/images/villa/staff-icon.svg" />
        <p>{{ $t("villa.description.third") }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ds-first {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
}

.ds-first p {
  text-align: center;
  padding: 15px 5px;
  width: 70%;
}

.ds-second-third {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.ds {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
}

.ds p {
  margin-left: 20px;
  text-align: justify;
  font-size: 14px;
}

.icon {
  width: 80px;
  height: auto;
}
</style>