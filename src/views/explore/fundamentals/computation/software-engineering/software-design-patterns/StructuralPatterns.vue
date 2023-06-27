<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Structural Patterns 🌉</h1>
            <p>
                Define how classes and objects can be combined to form larger structures.
            </p>
            <br>
            <ol>
                <li>
                    Adapter Pattern: convert an interface of a class into another inferface clients expect to make them
                    compatible.
                </li>
                <li>
                    Bridge: decouple an abtraction from its implementation so that the two can vary independently.
                </li>
                <li>
                    Decorator: attach additional responsibilities to an object dynamically.
                </li>
                <li>
                    Flyweight: minimizes memory usage by sharing data with other similar objects.
                </li>
                <li>
                    Proxy: a surrogate or placeholder for another object to control access to it.
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
    name: 'StructuralPatternsPage',
    props: {}
}
</script>

<style scoped></style>