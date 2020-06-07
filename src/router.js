import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Favorites from "./views/Favorites";

Vue.use(Router);

export default new Router({
  mode: "history",
  duplicateNavigationPolicy: "ignore",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Favorites
    }
  ]
});
