<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Cognitive Biases 🎭</h1>
            <p>
                Cognitive biases refer to systematic errors in thinking that affect the decisions and judgments that people
                make.
            </p>
            <br>
            <ol>
                <li>
                    Confirmation Bias: the tendency to add more weight to information that confirms our existing beliefs,
                    while dismissing or ignoring information information that contradicts them.
                </li>
                <li>
                    Availability Heuristic: making decisions based on the information that comes to mind most easily, rather
                    than all the relevant data.
                </li>
                <li>
                    Self-Serving Bias: tendency to attribute positive events to our own character but attribute negative
                    events to external factors. This is a common bias that helps us maintain our self-esteem.
                </li>
                <li>
                    Sunk Cost Fallacy: the tendency to continue an endeavor once an investment in money, time, or effort has
                    been made.
                </li>
                <li>
                    Negativity Bias: the tendency to give more weight to negative experiences of neutral or positive ones.
                </li>
                <li>
                    Fundamental Attribution Error: the tendency to overvalue personality-based explanations for observed
                    human behaviors while undervaluing situational influences on behavior.
                </li>
                <li>
                    Anchoring Bias: the tendency to over rely on the first piece of information when making decisions.
                </li>
                <li>
                    Dunning-Kruger Effect: bias that occurs when people with low ability overestimate their ability and
                    people with high ability underestimate their ability.
                </li>
                <li>
                    Recency Bias: tendency to weigh recent events over historical ones.
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
    name: 'CognitiveBiasesPage',
    props: {}
}
</script>

<style scoped></style>