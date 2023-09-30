<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Thinking Processes 🤔</h1>
            <br>
            <ol>
                <li>
                    <router-link :to="{ name: 'Decision Making' }">Decision Making</router-link>
                </li>
                <li>
                    Reasoning
                </li>
                <li>
                    Problem Solving
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
    name: 'CognitiveThinkingPage',
    props: {}
}
</script>

<style scoped></style>