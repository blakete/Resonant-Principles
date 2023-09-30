<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Database Systems 📀</h1>
            <br>
            <ol>
                <li>
                    <router-link :to="{ name: 'Data Languages' }">Data Languages</router-link>
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