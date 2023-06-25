<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Cognition 🧠</h1>
            <ol>
                <li @click="this.$router.push({ name: 'CognitiveBiases' })">
                    <span>Cognitive Biases</span>
                </li>
                <li @click="this.$router.push({ name: 'CognitiveStructures' })">
                    <span>Cognitive Structures</span>
                </li>
            </ol>
        </div>
        <section class='comments' aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus />
        </section>
    </div>
</template>

<script>
export default {
    name: 'CognitionPage',
    props: {}
}
</script>

<style scoped></style>