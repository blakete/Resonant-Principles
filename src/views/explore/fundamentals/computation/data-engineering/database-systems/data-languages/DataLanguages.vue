<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <div>
                <h1>Data Languages 🗨️🖥️</h1>
            </div>
            <br>

            <div>
                <ol>
                    <li @click="this.$router.push({ name: 'DataDefinitionLanguages' })">
                        <span>Data Definition Languages (DDL)</span>
                    </li>
                    <li @click="this.$router.push({ name: 'DataManipulationLanguages' })">
                        <span>Data Manipulation Languages (DML)</span>
                    </li>
                    <li @click="this.$router.push({ name: 'QueryLanguages' })">
                        <span>Query Languages</span>
                    </li>
                </ol>
            </div>
            <br>

        </div>
        <br>
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