<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Software Engineering 🛠️</h1>
            <ol>
                <li @click="this.$router.push({ name: 'SoftwareDesignPatterns' })">
                    <span>Software Design Patterns</span>
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
    name: 'SoftwareEngineeringPage',
    props: {}
}
</script>

<style scoped></style>