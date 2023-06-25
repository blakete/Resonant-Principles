<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Algorithms 🔀</h1>
            <p>
                A sequence of instructions or rules to follow in order to solve a problem or perform a task. Algorithms for
                the basis of all computational processes.
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
    name: 'AlgorithmsPage',
    props: {}
}
</script>

<style scoped></style>