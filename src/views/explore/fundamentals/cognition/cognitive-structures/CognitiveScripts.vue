<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Cognitive Scripts 🕸️</h1>
            <p>
                Predefined, stereotyped sequences of actions that are expected in a particular context that guide behavior
                in familiar situations.
            </p>
        </div>
        <section class='comments' aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus />
        </section>
    </div>
</template>

<script>
export default {
    name: 'CognitiveScriptsPage',
    props: {}
}
</script>

<style scoped></style>