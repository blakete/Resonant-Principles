<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Software Engineering 🛠️</h1>
            <br>
            <ol>
                <li>
                    <router-link :to="{ name: 'Software Design Patterns' }">Software Design Patterns</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Software Architecture' }">Software Architecture</router-link>
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