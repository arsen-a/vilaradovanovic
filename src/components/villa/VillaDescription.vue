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
@import url('../style/Description.css');
</style>