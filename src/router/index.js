import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";
import Villa from "../views/Villa.vue";
import Apartments from "../views/Apartments";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/villa",
    component: Villa,
    name: "villa",
  },
  {
    path: "/apartments",
    component: Apartments,
    name: "apartments",
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
