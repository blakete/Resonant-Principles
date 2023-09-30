<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Cognition 🧠</h1>
            <br>
            <ol>
                <li>
                    <router-link :to="{ name: 'Cognitive Processes' }">Cognitive Processes</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Cognitive Structures' }">Cognitive Structures</router-link>
                </li>
                <li>
                    Cognitive Styles
                </li>
                <li>
                    Cognitive Development
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
    name: 'CognitionPage',
    props: {}
}
</script>

<style scoped></style>