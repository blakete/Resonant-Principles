<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Behavioral Patterns 💬</h1>
            <p>
                Handle the communication and responsibilities between different objects.
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
    name: 'BehavioralPatternsPage',
    props: {}
}
</script>

<style scoped></style>