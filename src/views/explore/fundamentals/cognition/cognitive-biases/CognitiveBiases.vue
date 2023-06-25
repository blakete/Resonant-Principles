<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Cognitive Biases 🎭</h1>
            <p>
                Cognitive biases refer to systematic errors in thinking that affect the decisions and judgments that people
                make.
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
    name: 'CognitiveBiasesPage',
    props: {}
}
</script>

<style scoped></style>