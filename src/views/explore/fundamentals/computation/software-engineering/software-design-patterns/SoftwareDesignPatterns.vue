<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Software Design Patterns 🧩</h1>
            <br>
            <ol>
                <li>
                    <router-link :to="{ name: 'Creational Patterns' }">Creational Patterns</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Structural Patterns' }">Structural Patterns</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Behavioral Patterns' }">Behavioral Patterns</router-link>
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
    name: 'SoftwareDesignPatternsPage',
    props: {}
}
</script>

<style scoped></style>