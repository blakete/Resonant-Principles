<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Computation 💻</h1>
            <ol>
                <li>
                    Models of Computation
                </li>
                <li @click="this.$router.push({ name: 'ComplexityTheory' })">
                    <span>Complexity Theory</span>
                </li>
                <li @click="this.$router.push({ name: 'Algorithms' })">
                    <span>Algorithms</span>
                </li>
                <li @click="this.$router.push({ name: 'DataStructures' })">
                    <span>Data Structures</span>
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
    name: 'ComputationPage',
    props: {}
}
</script>

<style scoped></style>