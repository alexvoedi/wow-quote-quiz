import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory("/wow-quote-quiz/"),
  routes,
});

export { router };
