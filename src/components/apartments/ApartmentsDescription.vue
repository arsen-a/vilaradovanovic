<template>
  <div>
    <div class="ds-first">
      <p>{{ $t('apartments.description.first')}}</p>
    </div>
    <div class="ds-second-third">
      <div class="ds d-flex flex-row">
        <img class="icon" src="../../../public/images/apartments/kitchen-icon.svg" />
        <p>{{ $t('apartments.description.second')}}</p>
      </div>
    </div>
    <div class="ds-second-third">
      <div class="ds d-flex flex-row">
        <img class="icon" src="../../../public/images/apartments/bathroom-icon.svg" />
        <p>{{ $t('apartments.description.third')}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../style/Description.css");
.ds {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.ds p {
  font-size: 15px;
  padding: 0;
  margin: 0 0 0 20px;
}
</style>