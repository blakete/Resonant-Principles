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
import CognitiveProcesses from "@/views/explore/fundamentals/cognition/cognitive-processes/CognitiveProcesses.vue"
import Thinking from "@/views/explore/fundamentals/cognition/cognitive-processes/thinking/Thinking.vue"
import DecisionMaking from "@/views/explore/fundamentals/cognition/cognitive-processes/thinking/DecisionMaking.vue"

import CognitiveScripts from "@/views/explore/fundamentals/cognition/cognitive-structures/CognitiveScripts.vue"
import CognitiveBiases from "@/views/explore/fundamentals/cognition/cognitive-biases/CognitiveBiases.vue"
import CognitiveStructures from "@/views/explore/fundamentals/cognition/cognitive-structures/CognitiveStructures.vue"
import MentalModels from "@/views/explore/fundamentals/cognition/cognitive-structures/mental-models/MentalModels.vue"
import Schemas from "@/views/explore/fundamentals/cognition/cognitive-structures/Schemas.vue"

import Computation from "@/views/explore/fundamentals/computation/Computation.vue"
import ModelsOfComputation from "@/views/explore/fundamentals/computation/models-of-computation/ModelsOfComputation.vue"
import ComplexityTheory from "@/views/explore/fundamentals/computation/complexity-theory/ComplexityTheory.vue"
import Algorithms from "@/views/explore/fundamentals/computation/algorithms/Algorithms.vue"
import DataStructures from "@/views/explore/fundamentals/computation/data-structures/DataStructures.vue"
import DataEngineering from "@/views/explore/fundamentals/computation/data-engineering/DataEngineering.vue"
import DatabaseSystems from "@/views/explore/fundamentals/computation/data-engineering/database-systems/DatabaseSystems.vue"
import DataLanguages from "@/views/explore/fundamentals/computation/data-engineering/database-systems/data-languages/DataLanguages.vue"

import DataDefinitionLanguages from "@/views/explore/fundamentals/computation/data-engineering/database-systems/data-languages/DataDefinitionLanguages.vue"
import DataManipulationLanguages from "@/views/explore/fundamentals/computation/data-engineering/database-systems/data-languages/DataManipulationLanguages.vue"
import QueryLanguages from "@/views/explore/fundamentals/computation/data-engineering/database-systems/data-languages/QueryLanguages.vue"

import SoftwareEngineering from "@/views/explore/fundamentals/computation/software-engineering/SoftwareEngineering.vue"
import SoftwareDesignPatterns from "@/views/explore/fundamentals/computation/software-engineering/software-design-patterns/SoftwareDesignPatterns.vue"
import CreationalPatterns from "@/views/explore/fundamentals/computation/software-engineering/software-design-patterns/CreationalPatterns.vue"
import StructuralPatterns from "@/views/explore/fundamentals/computation/software-engineering/software-design-patterns/StructuralPatterns.vue"
import BehavioralPatterns from "@/views/explore/fundamentals/computation/software-engineering/software-design-patterns/BehavioralPatterns.vue"
import SoftwareArchitecture from "@/views/explore/fundamentals/computation/software-engineering/software-architecture/SoftwareArchitecture.vue"

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
    path: "/blog",
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
    path: "/",
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
    path: "/explore/fundamentals/cognition/cognitive-structures/cognitive-processes",
    name: "CognitiveProcesses",
    component: CognitiveProcesses,
  },
  {
    path: "/explore/fundamentals/cognition/cognitive-structures/cognitive-processes/thinking",
    name: "Thinking",
    component: Thinking,
  },
  {
    path: "/explore/fundamentals/cognition/cognitive-structures/cognitive-processes/thinking/decision-making",
    name: "DecisionMaking",
    component: DecisionMaking,
  },
  {
    path: "/explore/fundamentals/cognition/cognitive-structures",
    name: "CognitiveStructures",
    component: CognitiveStructures,
  },

  {
    path: "/explore/fundamentals/cognition/cognitive-structures/mental-models",
    name: "MentalModels",
    component: MentalModels,
  },
  {
    path: "/explore/fundamentals/cognition/cognitive-structures/schemas",
    name: "CognitiveSchemas",
    component: Schemas,
  },
  {
    path: "/explore/fundamentals/cognition/cognitive-structures/cognitive-scripts",
    name: "CognitiveScripts",
    component: CognitiveScripts,
  },

  {
    path: "/explore/fundamentals/cognition/biases",
    name: "CognitiveBiases",
    component: CognitiveBiases,
  },


  {
    path: "/explore/fundamentals/computation",
    name: "Computation",
    component: Computation,
  },
  {
    path: "/explore/fundamentals/computation/models-of-computation",
    name: "ModelsOfComputation",
    component: ModelsOfComputation,
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
    path: "/explore/fundamentals/computation/data-engineering",
    name: "DataEngineering",
    component: DataEngineering,
  },
  {
    path: "/explore/fundamentals/computation/data-engineering/database-systems",
    name: "DatabaseSystems",
    component: DatabaseSystems,
  },
  {
    path: "/explore/fundamentals/computation/data-engineering/database-systems/data-languages",
    name: "DataLanguages",
    component: DataLanguages,
  },
  {
    path: "/explore/fundamentals/computation/data-engineering/database-systems/data-languages/data-definition-languages",
    name: "DataDefinitionLanguages",
    component: DataDefinitionLanguages,
  },
  {
    path: "/explore/fundamentals/computation/data-engineering/database-systems/data-languages/data-manipulation-languages",
    name: "DataManipulationLanguages",
    component: DataManipulationLanguages,
  },
  {
    path: "/explore/fundamentals/computation/data-engineering/database-systems/data-languages/query-languages",
    name: "QueryLanguages",
    component: QueryLanguages,
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
    path: "/explore/fundamentals/computation/software-engineering/software-architecture",
    name: "SoftwareArchitecture",
    component: SoftwareArchitecture
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