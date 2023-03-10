import { createWebHistory, createRouter } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import About from "@/views/About.vue";
import Explore from "@/views/Explore.vue";
import BlogFeed from "@/views/BlogFeed.vue";
import BlogPost from "@/views/BlogPost.vue";
import Fundamentals from "@/views/Fundamentals.vue"
import Principles from "@/views/Principles.vue"
import CognitiveStructures from "@/views/CognitiveStructures.vue"
import MentalModels from "@/views/MentalModels.vue"
import Schemas from "@/views/Schemas.vue"
import Mindsets from "@/views/Mindsets.vue"

const routes = [
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found', 
    component: NotFound 
  },
  {
    path: "/",
    name: "BlogFeed",
    component: BlogFeed,
  },
  {
    path: "/blog/:id",
    name: "BlogPost",
    component: BlogPost,
    props: true
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/fundamentals",
    name: "Fundamentals",
    component: Fundamentals,
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