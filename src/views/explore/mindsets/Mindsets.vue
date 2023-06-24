<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Mindsets 🧭</h1>
            <p>
                A mindset is a person's attitude or set of beliefs about themselves and the world around them.
                It can influence how they perceive and respond to new information and experiences, and can shape their
                behaviors and actions.
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
    name: 'MindsetsPage',
    props: {}
}
</script>

<style scoped>

</style>