import BibliographyResources from "@/views/BibliographyResources.vue";
import SingleElementPattern from "@/views/HandsOnCode.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/hands-on-code",
      name: "handsOnCode",
      component: SingleElementPattern,
    },
    {
      path: "/bibliography",
      name: "bibliography",
      component: BibliographyResources,
    },
  ],
});

export default router;
