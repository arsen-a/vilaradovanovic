import Vue from "vue";
import VueI18n from "vue-i18n";
import sr from "./locale/sr";

Vue.use(VueI18n);

const messages = {
  sr,
};

export const i18n = new VueI18n({
  locale: "sr",
  messages,
});
