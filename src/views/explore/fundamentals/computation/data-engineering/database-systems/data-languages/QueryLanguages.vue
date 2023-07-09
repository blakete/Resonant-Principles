<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <div>
                <h1>Query Languages</h1>
                <p>

                </p>
            </div>
            <br>

            <div>
                <p>
                    High-level classification of query languages by the nature of the queries:
                </p>
                <br>
                <ol>
                    <li>
                        Structured
                    </li>
                    <li>
                        Boolean
                    </li>
                    <li>
                        Full-text
                    </li>
                    <li>
                        Natural language
                    </li>
                </ol>
            </div>
            <br>

            <div>
                <p>
                    High-level classification of query languages by their application contexts:
                </p>
                <br>
                <ol>
                    <li>
                        Relational Databases
                        <ol>
                            <li>
                                Structured Query Language (SQL)
                            </li>
                        </ol>
                    </li>

                    <li>
                        NoSQL Databases
                        <ol>
                            <li>
                                CQL (Cassandra Query Language)
                            </li>
                            <li>
                                MongoDB Query Language
                            </li>
                            <li>
                                AQL (ArangoDB Query Language)
                            </li>
                        </ol>
                    </li>

                    <li>
                        Graph Databases
                        <ol>
                            <li>
                                Cypher Query Language
                            </li>
                        </ol>
                    </li>

                    <li>
                        Semantic Web and RDF Databases
                        <ol>
                            <li>
                                SPARQL (SPARQL Protocol and RDF Query Language)
                            </li>
                        </ol>
                    </li>

                    <li>
                        XML Databases
                        <ol>
                            <li>
                                XQuery (XML Query Language)
                            </li>
                        </ol>
                    </li>

                    <li>
                        Data Analytics and Big Data
                        <ol>
                            <li>
                                HiveQL
                            </li>
                            <li>
                                Pig Latin
                            </li>
                        </ol>
                    </li>

                </ol>
            </div>
            <br>

            <div>

            </div>

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
    name: 'QueryLanguages',
    props: {}
}
</script>

<style scoped></style>