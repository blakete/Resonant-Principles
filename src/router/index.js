import { createWebHistory, createRouter } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import About from "@/views/About.vue";
import Explore from "@/views/Explore.vue";
import Blog from "@/views/Blog.vue";
import Principles from "@/views/Principles.vue"
import CognitiveStructures from "@/views/CognitiveStructures.vue"
import MentalModels from "@/views/MentalModels.vue"
import Schemas from "@/views/Schemas.vue"
import Mindsets from "@/views/Mindsets.vue"
import Fundamentals from "@/views/Fundamentals.vue"

const routes = [
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found', 
    component: NotFound 
  },
  {
    path: "/",
    name: "About",
    component: About,
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
  {
    path: "/fundamentals",
    name: "Fundamentals",
    component: Fundamentals,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;