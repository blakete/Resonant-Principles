<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Data Engineering 💾</h1>
            <br>
            <ol>
                <li>
                    Data Architecture
                </li>
                <li>
                    Database Systems
                </li>
                <li>
                    Data Storage
                </li>
                <li>
                    Data Transformation
                </li>
                <li>
                    Data Serving
                </li>
                <li>
                    Data Management
                </li>
                <li>
                    DataOps
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
    name: 'DataEngineeringPage',
    props: {}
}
</script>

<style scoped></style>