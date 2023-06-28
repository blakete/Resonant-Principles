<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Principles of Influence ⚖️</h1>
            <br>
            <ol>
                <li>
                    Scarcity: Fear of loss or the fear of loss of opportunity is the most motivating factor in human psychology. Scarcity is more powerful than urgency.
                </li>
                <li>
                    Consistency: People want to remain consistent in what they do and say.
                </li>
                <li>
                    Likability: People like people who like them (praise). People like people who are like them (similarities).
                </li>
                <li>
                    Reciprocity: People feel obligated to give back.
                </li>
                <li>
                    Authority: People are much more influenced by those that have a deep understanding and a lot of experience in their craft.
                </li>
                <li>
                    Social Proof: People are influenced by people who have credible people that vouch for them.
                </li>
                <li>
                    Unity: People are influenced by people who have a shared identity or group membership ('We' group).
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
    name: 'InfluencePage',
    props: {}
}
</script>

<style scoped></style>