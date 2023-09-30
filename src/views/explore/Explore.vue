<template>
  <div class="main-page-container">
    <div class="main-page-content">
      <h1 style="padding-bottom: 20px">
        Explore
        <a href="https://en.wikipedia.org/wiki/The_Matrix" style="text-decoration: none">🐇</a>
      </h1>
      <NestedList :items="explore_items"></NestedList>
    </div>
    <section class="comments" aria-labelledby="comment">
      <h2 id="comment">Comments</h2>
      <Disqus />
    </section>
  </div>
</template>
  
<script>
import NestedList from '@/components/NestedList.vue';

export default {
  name: "ExplorePage",
  components: {
    NestedList
  },
  props: {},
  methods: {},
  data() {
    return {
      explore_items: [
        { "id": 1, "parent_id": null, "label": "Fundamentals", "clickable": true },
        { "id": 2, "parent_id": 1, "label": "Physics" },
        { "id": 3, "parent_id": 2, "label": "Fundamental Forces" },
        { "id": 4, "parent_id": 3, "label": "Electromagnetic Force" },
        { "id": 5, "parent_id": 3, "label": "Weak Force" },
        { "id": 6, "parent_id": 3, "label": "Strong Force" },
        { "id": 7, "parent_id": 3, "label": "Gravity" },
        { "id": 8, "parent_id": 2, "label": "String Theory" },
        { "id": 9, "parent_id": 2, "label": "Quantum Field Theory (QFT)" },
        { "id": 10, "parent_id": 9, "label": "The Standard Model of Particle Physics" },
        { "id": 11, "parent_id": 10, "label": "Elementary Particles" },
        { "id": 12, "parent_id": 11, "label": "Fermions" },
        { "id": 13, "parent_id": 11, "label": "Bosons" },
        { "id": 14, "parent_id": 2, "label": "Quantum Mechanics" },
        { "id": 15, "parent_id": 2, "label": "Subatomic and Atomic Physics" },
        { "id": 16, "parent_id": 15, "label": "Nuclear Physics" },
        { "id": 17, "parent_id": 15, "label": "Atomic Physics" },
        { "id": 18, "parent_id": 2, "label": "Molecular and Condensed Matter Physics" },
        { "id": 19, "parent_id": 18, "label": "Chemical Physics" },
        { "id": 20, "parent_id": 18, "label": "Solid State Physics" },
        { "id": 21, "parent_id": 2, "label": "Classical Physics" },
        { "id": 22, "parent_id": 21, "label": "Mechanics" },
        { "id": 23, "parent_id": 21, "label": "Electromagnetism" },
        { "id": 24, "parent_id": 21, "label": "Thermodynamics" },
        { "id": 25, "parent_id": 21, "label": "Optics" },
        { "id": 26, "parent_id": 2, "label": "Continuum Physics" },
        { "id": 27, "parent_id": 26, "label": "Fluid Mechanics" },
        { "id": 28, "parent_id": 26, "label": "Elasticity and Solid Mechanics" },
        { "id": 29, "parent_id": 2, "label": "Relativistic and Gravitational Physics" },
        { "id": 30, "parent_id": 29, "label": "Special Relativity" },
        { "id": 31, "parent_id": 29, "label": "General Relativity" },
        { "id": 32, "parent_id": 2, "label": "Complex Systems and Emergent Phenomena" },
        { "id": 33, "parent_id": 32, "label": "Statistical Mechanics" },
        { "id": 34, "parent_id": 32, "label": "Chaos and Nonlinear Dynamics" },
        { "id": 35, "parent_id": 2, "label": "Cosmology and Astrophysics" },
        { "id": 36, "parent_id": 35, "label": "Stellar Physics" },
        { "id": 37, "parent_id": 35, "label": "Galactic and Extragalactic Astrophysics" },
        { "id": 38, "parent_id": 35, "label": "Cosmology" },
        { "id": 39, "parent_id": 1, "label": "Mathematics" },
        { "id": 40, "parent_id": 39, "label": "Foundations" },
        { "id": 41, "parent_id": 40, "label": "Logic" },
        { "id": 42, "parent_id": 40, "label": "Set Theory" },
        { "id": 43, "parent_id": 40, "label": "Recursion Theory" },
        { "id": 44, "parent_id": 40, "label": "Category Theory" },
        { "id": 45, "parent_id": 39, "label": "Pure Mathematics" },
        { "id": 46, "parent_id": 45, "label": "Number Systems" },
        { "id": 47, "parent_id": 45, "label": "Structures" },
        { "id": 48, "parent_id": 47, "label": "Algebra" },
        { "id": 49, "parent_id": 48, "label": "Group Theory" },
        { "id": 50, "parent_id": 48, "label": "Ring Theory" },
        { "id": 51, "parent_id": 47, "label": "Linear Algebra" },
        { "id": 52, "parent_id": 47, "label": "Combinatorics" },
        { "id": 53, "parent_id": 47, "label": "Number Theory" },
        { "id": 54, "parent_id": 45, "label": "Spaces" },
        { "id": 55, "parent_id": 54, "label": "Geometry" },
        { "id": 56, "parent_id": 54, "label": "Topology" },
        { "id": 57, "parent_id": 54, "label": "Trigonometry" },
        { "id": 58, "parent_id": 54, "label": "Affine Geometry" },
        { "id": 59, "parent_id": 54, "label": "Metric Geometry" },
        { "id": 60, "parent_id": 54, "label": "Projective Geometry" },
        { "id": 61, "parent_id": 54, "label": "Differential Geometry" },
        { "id": 62, "parent_id": 45, "label": "Changes" },
        { "id": 63, "parent_id": 62, "label": "Calculus" },
        { "id": 64, "parent_id": 62, "label": "Vector Calculus" },
        { "id": 65, "parent_id": 62, "label": "Differential Equations" },
        { "id": 66, "parent_id": 62, "label": "Dynamical Systems" },
        { "id": 67, "parent_id": 62, "label": "Chaos Theory" },
        { "id": 68, "parent_id": 39, "label": "Applied Mathematics" },
        { "id": 69, "parent_id": 68, "label": "Probability" },
        { "id": 70, "parent_id": 68, "label": "Statistics" },
        { "id": 71, "parent_id": 68, "label": "Optimization" },
        { "id": 72, "parent_id": 68, "label": "Numerical Analysis" },
        { "id": 73, "parent_id": 68, "label": "Computer Science" },
        { "id": 74, "parent_id": 73, "label": "Algorithm Theory" },
        { "id": 75, "parent_id": 73, "label": "Computational Complexity" },
        { "id": 76, "parent_id": 73, "label": "Information Theory" },
        { "id": 77, "parent_id": 68, "label": "Game Theory" },
        { "id": 78, "parent_id": 68, "label": "Cryptography" },
        { "id": 79, "parent_id": 1, "label": "Computation", "clickable": true },
        { "id": 80, "parent_id": 79, "label": "Models of Computation", "clickable": true },
        { "id": 81, "parent_id": 79, "label": "Complexity Theory", "clickable": true },
        { "id": 82, "parent_id": 79, "label": "Algorithms", "clickable": true },
        { "id": 83, "parent_id": 79, "label": "Data Structures", "clickable": true },
        { "id": 84, "parent_id": 79, "label": "Data Engineering", "clickable": true },
        { "id": 85, "parent_id": 84, "label": "Database Systems", "clickable": true },
        { "id": 86, "parent_id": 84, "label": "Data Languages", "clickable": true },
        { "id": 87, "parent_id": 86, "label": "Data Definition Languages", "clickable": true },
        { "id": 88, "parent_id": 86, "label": "Data Manipulation Languages", "clickable": true },
        { "id": 89, "parent_id": 86, "label": "Query Languages", "clickable": true },
        { "id": 90, "parent_id": 79, "label": "Software Engineering", "clickable": true },
        { "id": 91, "parent_id": 90, "label": "Software Design Patterns", "clickable": true },
        { "id": 92, "parent_id": 91, "label": "Creational Patterns", "clickable": true },
        { "id": 93, "parent_id": 91, "label": "Structural Patterns", "clickable": true },
        { "id": 94, "parent_id": 91, "label": "Behavioral Patterns", "clickable": true },
        { "id": 95, "parent_id": 90, "label": "Software Architecture", "clickable": true },
        { "id": 96, "parent_id": 1, "label": "Cognition", "clickable": true },
        { "id": 97, "parent_id": 96, "label": "Cognitive Processes", "clickable": true },
        { "id": 98, "parent_id": 97, "label": "Perception" },
        { "id": 99, "parent_id": 97, "label": "Memory" },
        { "id": 100, "parent_id": 97, "label": "Attention" },
        { "id": 101, "parent_id": 97, "label": "Language" },
        { "id": 102, "parent_id": 97, "label": "Thinking", "clickable": true },
        { "id": 103, "parent_id": 96, "label": "Cognitive Structures", "clickable": true },
        { "id": 104, "parent_id": 103, "label": "Definition" },
        { "id": 105, "parent_id": 103, "label": "Mental Models", "clickable": true },
        { "id": 106, "parent_id": 103, "label": "Cognitive Schemas", "clickable": true },
        { "id": 107, "parent_id": 103, "label": "Cognitive Scripts", "clickable": true },
        { "id": 108, "parent_id": 96, "label": "Cognitive Biases", "clickable": true },
        { "id": 109, "parent_id": 96, "label": "Cognitive Development" },
        { "id": 110, "parent_id": null, "label": "Principles", "clickable": true },
        { "id": 111, "parent_id": 110, "label": "Principles of Influence", "clickable": true }
      ]
    }
  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
li {
  font-size: 22px;
  padding-bottom: 10px;
}

li li {
  padding-top: 10px;
  font-size: 20px;
}
</style>
  