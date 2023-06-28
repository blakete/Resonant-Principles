<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Cognitive Processes 🔁</h1>
            <br>
            <ol>
                <li>
                    Perception
                </li>
                <li>
                    Memory
                </li>
                <li>
                    Attention
                </li>
                <li>
                    Language
                </li>
                <li @click="this.$router.push({ name: 'Thinking' })">
                    <span>Thinking</span>
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
    name: 'CognitiveProcessesPage',
    props: {}
}
</script>

<style scoped></style>