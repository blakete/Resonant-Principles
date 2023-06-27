<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Software Architecture 🏗</h1>
            <p>
                The structure, architecture characteristics (-ilities), architecture decisions, and design principles of a
                software system.
            </p>
            <br>
            <div>
                <h2>Table of Contents</h2>
                <ol>
                    <li>
                        <a href="#structure">Structure</a>
                    </li>
                    <li>
                        <a href="#architecture_characteristics">Architecture Characteristics</a>
                    </li>
                    <li>
                        <a href="#architecture_decisions">Architecture Decisions</a>
                    </li>
                    <li>
                        <a href="#design_principles">Design Principles</a>
                    </li>
                </ol>
            </div>
            <br>
            <div>
                <div>
                    <h2><a id="structure">Structure</a></h2>
                    <p>
                        The architectural styles that the software system is implemented in (e.g. microservices, layered)
                    </p>
                </div>
                <div>
                    <h2><a id="architecture_characteristics">Architecture Characteristics</a></h2>
                    <p>
                        Define the success criteria of the system which is generally orthogonal to the functionality of the
                        system. Required in order for the system to function properly.
                    </p>
                </div>
                <div>
                    <h2><a id="architecture_decisions">Architecture Decisions</a></h2>
                    <p>
                        Define the rules for how a system should be constructed. They form the constraints of the system and
                        direct development teams on what is and what isn't allowed.
                    </p>
                </div>
                <div>
                    <h2><a id="design_principles">Design Principles</a></h2>
                    <p>
                        Guidelines for how the system should be constructed, rather than a hard rule. These help provide
                        guidance where architectural decisions (rules) do not cover.
                    </p>
                </div>
            </div>
            <br>
            <div>
                <h2>References</h2>
                <ol>
                    <li>
                        <a
                            href="https://www.amazon.com/Fundamentals-Software-Architecture-Comprehensive-Characteristics/dp/1492043451">
                            Fundamentals of Software Architecture: An Engineering Apprach
                        </a>
                    </li>
                </ol>
            </div>
            <br>
        </div>
        <section class='comments' aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus />
        </section>
    </div>
</template>

<script>
export default {
    name: 'SoftwareArchitecturePage',
    props: {}
}
</script>

<style scoped></style>