<template>
  <div class="main-page-container">
    <div class="main-page-content">
      <h1 style="padding-bottom: 20px">
        Explore
        <a href="https://en.wikipedia.org/wiki/The_Matrix" style="text-decoration: none">🐇</a>
      </h1>
      <ol>
        <li>
          <span @click="this.$router.push({ name: 'Fundamentals' })">Fundamentals</span>
          <ol>
            <li>
              Physics
              <ol>
                <li>Fundamental Forces
                  <ol>
                    <li>Electromagnetic Force</li>
                    <li>Weak Force</li>
                    <li>Strong Force</li>
                    <li>Gravity</li>
                  </ol>
                </li>
                <li>String Theory</li>
                <li>Quantum Field Theory (QFT)
                  <ol>
                    <li>The Standard Model of Particle Physics
                      <ol>
                        <li>Elementary Particles
                          <ol>
                            <li>Fermions</li>
                            <li>Bosons</li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>Quantum Mechanics</li>
                <li>Subatomic and Atomic Physics
                  <ol>
                    <li>Nuclear Physics</li>
                    <li>Atomic Physics</li>
                  </ol>
                </li>
                <li>Molecular and Condensed Matter Physics
                  <ol>
                    <li>Chemical Physics</li>
                    <li>Solid State Physics</li>
                  </ol>
                </li>
                <li>Classical Physics
                  <ol>
                    <li>Mechanics</li>
                    <li>Electromagnetism</li>
                    <li>Thermodynamics</li>
                    <li>Optics</li>
                  </ol>
                </li>
                <li>Continuum Physics
                  <ol>
                    <li>Fluid Mechanics</li>
                    <li>Elasticity and Solid Mechanics</li>
                  </ol>
                </li>
                <li>Relativistic and Gravitational Physics
                  <ol>
                    <li>Special Relativity</li>
                    <li>General Relativity</li>
                  </ol>
                </li>
                <li>Complex Systems and Emergent Phenomena
                  <ol>
                    <li>Statistical Mechanics</li>
                    <li>Chaos and Nonlinear Dynamics</li>
                  </ol>
                </li>
                <li>Cosmology and Astrophysics
                  <ol>
                    <li>Stellar Physics</li>
                    <li>Galactic and Extragalactic Astrophysics</li>
                    <li>Cosmology</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Mathematics
              <ol>
                <li>Foundations
                  <ol>
                    <li>Logic</li>
                    <li>Set Theory</li>
                    <li>Recursion Theory</li>
                    <li>Category Theory</li>
                  </ol>
                </li>
                <li>Pure Mathematics
                  <ol>
                    <li>Number Systems</li>
                    <li>Structures
                      <ol>
                        <li>Algebra
                          <ol>
                            <li>Group Theory</li>
                            <li>Ring Theory</li>
                          </ol>
                        </li>
                        <li>Linear Algebra</li>
                        <li>Combinatorics</li>
                        <li>Number Theory</li>
                      </ol>
                    </li>
                    <li>Spaces
                      <ol>
                        <li>Geometry</li>
                        <li>Topology</li>
                        <li>Trigonometry</li>
                        <li>Affine Geometry</li>
                        <li>Metric Geometry</li>
                        <li>Projective Geometry</li>
                        <li>Differential Geometry</li>
                      </ol>
                    </li>
                    <li>Changes
                      <ol>
                        <li>Calculus</li>
                        <li>Vector Calculus</li>
                        <li>Differential Equations</li>
                        <li>Dynamical Systems</li>
                        <li>Chaos Theory</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>Applied Mathematics
                  <ol>
                    <li>Probability</li>
                    <li>Statistics</li>
                    <li>Optimization</li>
                    <li>Numerical Analysis</li>
                    <li>Computer Science
                      <ol>
                        <li>Algorithm Theory</li>
                        <li>Computational Complexity</li>
                        <li>Information Theory</li>
                      </ol>
                    </li>
                    <li>Game Theory</li>
                    <li>Cryptography</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <span @click="this.$router.push({ name: 'Computation' })">Computation</span>
              <ol>
                <li><span @click="this.$router.push({ name: 'ModelsOfComputation' })">Models of Computation</span></li>
                <li><span @click="this.$router.push({ name: 'ComplexityTheory' })">Complexity Theory</span></li>
                <li><span @click="this.$router.push({ name: 'Algorithms' })">Algorithms</span></li>
                <li><span @click="this.$router.push({ name: 'DataStructures' })">Data Structures</span></li>
                <li>
                  <span @click="this.$router.push({ name: 'DataEngineering' })">Data Engineering</span>
                  <ol>
                    <li><span @click="this.$router.push({ name: 'DatabaseSystems' })">Database Systems</span></li>
                    <li>
                      <span @click="this.$router.push({ name: 'DataLanguages' })">Data Languages</span>
                      <ol>
                        <li><span @click="this.$router.push({ name: 'DataDefinitionLanguages' })">Data Definition
                            Languages</span></li>
                        <li><span @click="this.$router.push({ name: 'DataManipulationLanguages' })">Data Manipulation
                            Languages</span></li>
                        <li><span @click="this.$router.push({ name: 'QueryLanguages' })">Query Languages</span></li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <span @click="this.$router.push({ name: 'Software Engineering' })">Software Engineering</span>
                  <ol>
                    <li>
                      <span @click="this.$router.push({ name: 'SoftwareDesignPatterns' })">Software Design Patterns</span>
                      <ol>
                        <li><span @click="this.$router.push({ name: 'CreationalPatterns' })">Creational Patterns</span>
                        </li>
                        <li><span @click="this.$router.push({ name: 'StructuralPatterns' })">Structural Patterns</span>
                        </li>
                        <li><span @click="this.$router.push({ name: 'BehavioralPatterns' })">Behavioral Patterns</span>
                        </li>
                      </ol>
                    </li>
                    <li><span @click="this.$router.push({ name: 'SoftwareArchitecture' })">Software Architecture</span>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <span @click="this.$router.push({ name: 'Cognition' })">Cognition</span>
              <ol>
                <li>
                  <span @click="this.$router.push({ name: 'CognitiveProcesses' })">Cognitive Processes</span>
                  <ol>
                    <li>Perception</li>
                    <li>Memory</li>
                    <li>Attention</li>
                    <li>Language</li>
                    <li><span @click="this.$router.push({ name: 'Thinking' })">Thinking</span></li>
                  </ol>
                </li>
                <li>
                  <span @click="this.$router.push({ name: 'CognitiveStructures' })">Cognitive Structures</span>
                  <ol>
                    <li>Definition</li>
                    <li><span @click="this.$router.push({ name: 'MentalModels' })">Mental Models</span></li>
                    <li><span @click="this.$router.push({ name: 'CognitiveSchemas' })">Cognitive Schemas</span></li>
                    <li><span @click="this.$router.push({ name: 'CognitiveScripts' })">Cognitive Scripts</span></li>
                  </ol>
                </li>
                <li><span @click="this.$router.push({ name: 'CognitiveBiases' })">Cognitive Biases</span></li>
                <li><span>Cognitive Development</span></li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <span @click="this.$router.push({ name: 'Principles' })">Principles</span>
          <ol>
            <li><span @click="this.$router.push({ name: 'Influence' })">Principles of Influence</span></li>
          </ol>
        </li>
      </ol>
    </div>
    <section class="comments" aria-labelledby="comment">
      <h2 id="comment">Comments</h2>
      <Disqus />
    </section>
  </div>
</template>
  
<script>
export default {
  name: "ExplorePage",
  props: {},
  methods: {},
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
  