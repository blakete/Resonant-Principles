<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Cognitive Structures 🧠</h1>
            <p style="padding-bottom: 20px;">
                Cognitive structures are basic mental patterns used to process information.
            </p>
            <ol>
                <li @click="this.$router.push('cognitive-structures/mental-models')">
                    <span>Mental Models</span>
                </li>
                <li @click="this.$router.push('cognitive-structures/schemas')">
                    <span>Schemas</span>
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