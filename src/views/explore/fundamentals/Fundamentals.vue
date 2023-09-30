<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Fundamentals 🔠</h1>
            <br>
            <ol>
                <li>Physics</li>
                <li>Mathematics</li>
                <li>
                    <router-link :to="{ name: 'Cognition' }">Cognition</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Computation' }">Computation</router-link>
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
    name: 'PrinciplesPage',
    props: {}
}
</script>

<style scoped></style>