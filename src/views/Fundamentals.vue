<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Fundamentals 📚</h1>
            <p>
                Here you will find a collection of curated content designed to provide a strong foundation in various
                topics.
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
    name: 'FundamentalsPage',
    props: {}
}
</script>

<style scoped>

</style>