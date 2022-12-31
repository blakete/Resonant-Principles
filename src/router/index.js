import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Explore from "@/views/Explore.vue";
import Blog from "@/views/Blog.vue";
import Principles from "@/views/Principles.vue"
import CognitiveStructures from "@/views/CognitiveStructures.vue"
import MentalModels from "@/views/MentalModels.vue"
import Schemas from "@/views/Schemas.vue"
import Mindsets from "@/views/Mindsets.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
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
    path: "/cognitive-structures/mental-models",
    name: "MentalModels",
    component: MentalModels,
  },
  {
    path: "/cognitive-structures/schemas",
    name: "Schemas",
    component: Schemas,
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