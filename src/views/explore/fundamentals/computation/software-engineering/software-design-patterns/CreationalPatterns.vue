<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Creational Patterns ✨</h1>
            <p>
                These abstract the instantiation process and ensure the system is independent of how its objects are
                created, composed, and represented.
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
    name: 'CreationalPatternsPage',
    props: {}
}
</script>

<style scoped></style>