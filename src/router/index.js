import { createWebHistory, createRouter } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import About from "@/views/About.vue";
import Explore from "@/views/explore/Explore.vue";
import BlogFeed from "@/views/BlogFeed.vue";
import BlogPost from "@/views/BlogPost.vue";

import Fundamentals from "@/views/explore/fundamentals/Fundamentals.vue"

import Principles from "@/views/explore/principles/Principles.vue"
import Influence from "@/views/explore/principles/influence/Influence.vue"

import CognitiveStructures from "@/views/explore/cognitive-structures/CognitiveStructures.vue"
import MentalModels from "@/views/explore/cognitive-structures/MentalModels.vue"
import Schemas from "@/views/explore/cognitive-structures/Schemas.vue"

import Mindsets from "@/views/explore/mindsets/Mindsets.vue"

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
    path: "/explore/fundamentals",
    name: "Fundamentals",
    component: Fundamentals,
  },
  {
    path: "/explore/principles",
    name: "Principles",
    component: Principles,
  },
  {
    path: "/explore/principles/influence",
    name: "Influence",
    component: Influence,
  },
  {
    path: "/explore/cognitive-structures",
    name: "CognitiveStructures",
    component: CognitiveStructures,
  },
  {
    path: "/explore/cognitive-structures/mental-models",
    name: "MentalModels",
    component: MentalModels,
  },
  {
    path: "/explore/cognitive-structures/schemas",
    name: "Schemas",
    component: Schemas,
  },
  {
    path: "/explore/mindsets",
    name: "Mindsets",
    component: Mindsets,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;