<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Cognitive Structures 🕸️</h1>
            <p>Cognitive structures are basic mental patterns used to process information.</p>
            <br>
            <ol>
                <li>
                    <router-link :to="{ name: 'Mental Models' }">Mental Models</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Cognitive Schemas' }">Schemas</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Cognitive Scripts' }">Scripts</router-link>
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