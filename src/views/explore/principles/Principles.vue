<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Principles 📜</h1>
            <br>
            <ol>
                <li>
                    <router-link :to="{ name: 'Principles of Influence' }">Principles of Influence</router-link>
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