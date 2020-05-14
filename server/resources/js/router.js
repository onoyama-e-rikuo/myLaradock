import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

const routes = [
  {
      path: "/",
      component: Home
  },
  {
      path: "/about",
      component: About
  },
];

// 5.
const router = new VueRouter({
  mode: "history",
  routes
});

// 6.
export default router;