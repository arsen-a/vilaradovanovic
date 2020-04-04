import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
