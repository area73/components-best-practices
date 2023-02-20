import SingleElementPattern from "@/views/SingleElementPattern.vue";
import UseThePaltform from "@/views/UseThePaltform.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/usar-la-plataforma",
      name: "useThePlatform",
      component: UseThePaltform,
    },
    {
      path: "/singel",
      name: "singelElementPattern",
      component: SingleElementPattern,
    },
  ],
});

export default router;
