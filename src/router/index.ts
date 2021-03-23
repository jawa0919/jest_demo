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
    path: "/week01",
    name: "Week01",
    component: () => import("../views/wj/week01/Home.vue"),
  },
  {
    path: "/week02",
    name: "Week02",
    component: () => import("../views/wj/week02/Home.vue"),
  },
  {
    path: "/week02/form",
    name: "Week02Form",
    component: () => import("../views/wj/week02/Form.vue"),
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
