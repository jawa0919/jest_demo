import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Demo1",
    name: "Demo1",
    component: () => import("../views/Demo1.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
  console.log("🚀 ~ file: index.ts ~ line 31 ~ router.beforeEach ~ to", to);
  console.log("🚀 ~ file: index.ts ~ line 31 ~ router.beforeEach ~ from", from);
  next();
});

router.afterEach((to: Route, from: Route) => {
  console.log("🚀 ~ file: index.ts ~ line 31 ~ router.afterEach ~ to", to);
  console.log("🚀 ~ file: index.ts ~ line 31 ~ router.afterEach ~ from", from);
});

export default router;
