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
                <li>
                    <router-link :to="{ name: 'Thinking' }">Thinking</router-link>
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