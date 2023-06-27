<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Behavioral Patterns 💬</h1>
            <p>
                Handle the communication and responsibilities between different objects.
            </p>
            <br>
            <ol>
                <li>
                    Object Behavioral
                    <ol>
                        <li>
                            Chain of Responsibility
                        </li>
                        <li>
                            Command: using an object to encapsulate all information needed to perform an action or trigger
                            an event
                            at a later time.
                        </li>
                        <li>
                            Iterator: a way to access elements of an aggregate object sequentially without exposing the
                            underlying
                            representation.
                        </li>
                        <li>
                            Mediator: lets you vary object interaction independently by creating an object that encapsulates
                            how a
                            set of objects interact.
                        </li>
                        <li>
                            Memento: capture and externalize an object's internal state so that the object can be restored
                            to this
                            state later.
                        </li>
                        <li>
                            Observer: define one-to-many dependency between objects so that when one object changes state,
                            all its
                            dependents are notified and updated automatically.
                        </li>
                        <li>
                            State: allows an object to alter its behavior when its internal state changes.
                        </li>
                        <li>
                            Strategy: enables selecting an algorithm at runtime through instructions as to which in a
                            family of algorithms to use.
                        </li>
                        <li>
                            Visitor
                        </li>
                    </ol>
                </li>
                <li>
                    Class Behavioral
                    <ol>
                        <li>
                            Template Method: an algorithm as a skeleton of operations and leave the details to be
                            implemented by the
                            child classes. The overall structure and sequence of the algorithm are preserved by the parent
                            class.
                        </li>
                        <li>
                            Interpreter: specifies how to evaluate sentences in a language.
                        </li>
                    </ol>
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
    name: 'BehavioralPatternsPage',
    props: {}
}
</script>

<style scoped></style>