<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Models of Computation 🧮</h1>
            <p>
                A model of computation is a formal framework that defines the basic elements and rules that a computer or
                computation device follows to solve a computational problem.
            </p>
            <div>
                <h2>Table of Contents</h2>
                <ol>
                    <li>
                        Turing Machine (TM)
                    </li>
                    <li>
                        Finite Automata (FA)
                    </li>
                    <li>
                        Pushdown Automata (PDA)
                    </li>
                    <li>
                        Lambda Calculus
                    </li>
                </ol>
            </div>
        </div>
        <section class='comments' aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus />
        </section>
    </div>
</template>

<script>
export default {
    name: 'ModelsOfComputationPage',
    props: {}
}
</script>

<style scoped></style>