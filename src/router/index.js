import { createWebHistory, createRouter } from "vue-router";
import NotFound from "@/views/NotFound.vue";
import About from "@/views/About.vue";
import Explore from "@/views/explore/Explore.vue";
import BlogFeed from "@/views/BlogFeed.vue";
import BlogPost from "@/views/BlogPost.vue";

import Fundamentals from "@/views/explore/fundamentals/Fundamentals.vue"

import Principles from "@/views/explore/principles/Principles.vue"
import Influence from "@/views/explore/principles/influence/Influence.vue"

import Cognition from "@/views/explore/fundamentals/cognition/Cognition.vue"
import CognitiveBiases from "@/views/explore/fundamentals/cognition/cognitive-biases/CognitiveBiases.vue"
import CognitiveStructures from "@/views/explore/fundamentals/cognition/cognitive-structures/CognitiveStructures.vue"
import MentalModels from "@/views/explore/fundamentals/cognition/cognitive-structures/mental-models/MentalModels.vue"
import Schemas from "@/views/explore/fundamentals/cognition/cognitive-structures/Schemas.vue"

import Computation from "@/views/explore/fundamentals/computation/Computation.vue"
import ComplexityTheory from "@/views/explore/fundamentals/computation/complexity-theory/ComplexityTheory.vue"
import Algorithms from "@/views/explore/fundamentals/computation/algorithms/Algorithms.vue"
import DataStructures from "@/views/explore/fundamentals/computation/data-structures/DataStructures.vue"
import SoftwareEngineering from "@/views/explore/fundamentals/computation/software-engineering/SoftwareEngineering.vue"
import SoftwareDesignPatterns from "@/views/explore/fundamentals/computation/software-engineering/software-design-patterns/SoftwareDesignPatterns.vue"
import CreationalPatterns from "@/views/explore/fundamentals/computation/software-engineering/software-design-patterns/CreationalPatterns.vue"
import StructuralPatterns from "@/views/explore/fundamentals/computation/software-engineering/software-design-patterns/StructuralPatterns.vue"
import BehavioralPatterns from "@/views/explore/fundamentals/computation/software-engineering/software-design-patterns/BehavioralPatterns.vue"

// import Mindsets from "@/views/explore/mindsets/Mindsets.vue"

const routes = [
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found', 
    component: NotFound 
  },

  // BLOG ROUTES
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
    path: "/about",
    name: "About",
    component: About,
  },

  // EXPLORE ROUTES
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/explore/fundamentals",
    name: "Fundamentals",
    component: Fundamentals,
  },
  {
    path: "/explore/fundamentals/cognition",
    name: "Cognition",
    component: Cognition,
  },
  {
    path: "/explore/fundamentals/cognition/biases",
    name: "CognitiveBiases",
    component: CognitiveBiases,
  },
  {
    path: "/explore/fundamentals/cognition/structures",
    name: "CognitiveStructures",
    component: CognitiveStructures,
  },
  {
    path: "/explore/fundamentals/cognition/structures/mental-models",
    name: "MentalModels",
    component: MentalModels,
  },
  {
    path: "/explore/fundamentals/cognition/structures/schemas",
    name: "Schemas",
    component: Schemas,
  },
  {
    path: "/explore/fundamentals/computation",
    name: "Computation",
    component: Computation,
  },
  {
    path: "/explore/fundamentals/computation/complexity-theory",
    name: "ComplexityTheory",
    component: ComplexityTheory,
  },
  {
    path: "/explore/fundamentals/computation/algorithms",
    name: "Algorithms",
    component: Algorithms,
  },
  {
    path: "/explore/fundamentals/computation/data-structures",
    name: "DataStructures",
    component: DataStructures,
  },
  {
    path: "/explore/fundamentals/computation/software-engineering",
    name: "SoftwareEngineering",
    component: SoftwareEngineering,
  },
  {
    path: "/explore/fundamentals/computation/software-engineering/design-patterns",
    name: "SoftwareDesignPatterns",
    component: SoftwareDesignPatterns,
  },
  {
    path: "/explore/fundamentals/computation/software-engineering/design-patterns/creational",
    name: "CreationalPatterns",
    component: CreationalPatterns,
  },
  {
    path: "/explore/fundamentals/computation/software-engineering/design-patterns/structural",
    name: "StructuralPatterns",
    component: StructuralPatterns,
  },
  {
    path: "/explore/fundamentals/computation/software-engineering/design-patterns/behavioral",
    name: "BehavioralPatterns",
    component: BehavioralPatterns,
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
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;