<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Complexity Theory ⏳</h1>
            <p>
                Theories concerned with the resources (e.g. time and space) that algorithms require to solve problems.
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
    name: 'ComplexityTheoryPage',
    props: {}
}
</script>

<style scoped></style>