<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Fundamentals 🔠</h1>
            <br>
            <ol>
                <li @click="this.$router.push({ name: 'Cognition' })">
                    <span>Cognition</span>
                </li>
                <li @click="this.$router.push({ name: 'Computation' })">
                    <span>Computation</span>
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