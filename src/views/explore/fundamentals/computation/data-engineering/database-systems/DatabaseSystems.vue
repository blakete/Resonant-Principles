<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Database Systems 📀</h1>
            <br>
            <ol>
                <li @click="this.$router.push({ name: 'DataLanguages' })">
                    <span>Data Languages</span>
                </li>
            </ol>
        </div>
        <br>

        <section class='comments' aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus />
        </section>
        
    </div>
</template>

<script>
export default {
    name: 'DatabaseSystems',
    props: {}
}
</script>

<style scoped></style>