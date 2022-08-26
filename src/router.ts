import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/index.vue"),
  },
  {
    path: "/text-quiz",
    name: "text-quiz",
    component: () => import("./pages/text-quiz.vue"),
  },
  {
    path: "/audio-quiz",
    name: "audio-quiz",
    component: () => import("./pages/audio-quiz.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory("/wow-quote-quiz/"),
  routes,
});

export { router };
