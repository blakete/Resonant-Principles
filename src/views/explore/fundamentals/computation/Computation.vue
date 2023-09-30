<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Computation 💻</h1>
            <br>
            <ol>
                <li>
                    <router-link :to="{ name: 'Models of Computation' }">Models of Computation</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Complexity Theory' }">Complexity Theory</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Algorithms' }">Algorithms</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Data Structures' }">Data Structures</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Data Engineering' }">Data Engineering</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Software Engineering' }">Software Engineering</router-link>
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