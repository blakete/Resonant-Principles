import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Principles from "@/views/Principles.vue"
import CognitiveStructures from "@/views/CognitiveStructures.vue"
import Mindsets from "@/views/Mindsets.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/principles",
    name: "Principles",
    component: Principles,
  },
  {
    path: "/cognitive-structures",
    name: "CognitiveStructures",
    component: CognitiveStructures,
  },
  {
    path: "/mindsets",
    name: "Mindsets",
    component: Mindsets,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;