<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Software Design Patterns 🧩</h1>
            <br>
            <ol>
                <li @click="this.$router.push({ name: 'CreationalPatterns' })">
                    <span>Creational Patterns</span>
                </li>
                <li @click="this.$router.push({ name: 'StructuralPatterns' })">
                    <span>Structural Patterns</span>
                </li>
                <li @click="this.$router.push({ name: 'BehavioralPatterns' })">
                    <span>Behavioral Patterns</span>
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