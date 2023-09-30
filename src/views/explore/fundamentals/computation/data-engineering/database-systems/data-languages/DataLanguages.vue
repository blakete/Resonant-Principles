<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <div>
                <h1>Data Languages 🗨️🖥️</h1>
            </div>
            <br>

            <div>
                <ol>
                    <li>
                        <router-link :to="{ name: 'Data Definition Languages' }">Data Definition Languages (DDL)</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Data Manipulation Languages' }">Data Manipulation Languages (DML)</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Query Languages' }">Query Languages</router-link>
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