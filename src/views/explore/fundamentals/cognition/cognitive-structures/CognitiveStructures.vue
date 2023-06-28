<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Cognitive Structures 🕸️</h1>
            <p>Cognitive structures are basic mental patterns used to process information.</p>
            <br>
            <ol>
                <li @click="this.$router.push({ name: 'MentalModels' })">
                    <span>Mental Models</span>
                </li>
                <li @click="this.$router.push({ name: 'CognitiveSchemas' })">
                    <span>Schemas</span>
                </li>
                <li @click="this.$router.push({ name: 'CognitiveScripts' })">
                    <span>Scripts</span>
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
    name: 'CognitiveStructuresPage',
    props: {}
}
</script>

<style scoped>

</style>