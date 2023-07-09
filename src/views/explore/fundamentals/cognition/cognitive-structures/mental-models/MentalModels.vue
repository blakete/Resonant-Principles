<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <div>
                <h1>Mental Models 🗺️</h1>
                <p>
                    Mental models are mental representations of a person's understanding of a particular concept or system.
                    They
                    are simplified versions of reality that allow us to make sense of the world around us and make decisions
                    based on that understanding.
                </p>
            </div>
            <br>

            <div>
                <h2>Table of Contents</h2>
                <ol>
                    <li>The Map is not the Territory</li>
                    <li>Circle of Competence</li>
                    <li>Falsifiability</li>
                    <li>First Principles Thinking</li>
                    <li>Thought Experiment</li>
                    <li>Necessity and Sufficiency</li>
                    <li>Second-Order Thinking</li>
                    <li>Probabilistic Thinking</li>
                    <li>Causation vs. Correlation</li>
                    <li>Inversion</li>
                    <li>Occam's Razor</li>
                    <li>Hanlon's Razor</li>
                </ol>
            </div>
        </div>
        <section class='comments' aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus />
        </section>
    </div>
</template>

<script>
export default {
    name: 'MentalModelsPage',
    props: {}
}
</script>

<style scoped>
ul {
    /* list-style: none; */
}
</style>