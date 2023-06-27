<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <h1>Behavioral Patterns 💬</h1>
            <p>
                Handle the communication and responsibilities between different objects.
            </p>
            <div>
                <h2>Table of Contents</h2>
                <ol>
                    <li>
                        <a href="#object_behavioral">Object Behavioral Patterns</a>
                        <ol>
                            <li>
                                Chain of Responsibility
                            </li>
                            <li>
                                Command
                            </li>
                            <li>
                                Iterator
                            </li>
                            <li>
                                Mediator
                            </li>
                            <li>
                                Memento
                            </li>
                            <li>
                                Observer
                            </li>
                            <li>
                                State
                            </li>
                            <li>
                                Strategy
                            </li>
                            <li>
                                Visitor
                            </li>
                        </ol>
                    </li>
                    <li>
                        <a href="#class_behavioral">Class Behavioral</a>
                        <ol>
                            <li>
                                Template Method
                            </li>
                            <li>
                                Interpreter
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
            <br>
            <div>
                <div>
                    <h2><a id="object_behavioral">Object Behavioral Patterns</a></h2>
                    <div>
                        <h3>Chain of Responsibility</h3>
                        <p>

                        </p>
                    </div>
                    <div>
                        <h3>Command</h3>
                        <p>
                            Using an object to encapsulate all information needed to perform an action or trigger an event
                            at a
                            later time.
                        </p>
                    </div>
                    <div>
                        <h3>Iterator</h3>
                        <p>
                            A way to access elements of an aggregate object sequentially without exposing the underlying
                            representation.
                        </p>
                    </div>
                    <div>
                        <h3>Mediator</h3>
                        <p>
                            Lets you vary object interaction independently by creating an object that encapsulates how a
                            set of objects interact.
                        </p>
                    </div>
                    <div>
                        <h3>Memento</h3>
                        <p>
                            Capture and externalize an object's internal state so that the object can be restored to this
                            state later.
                        </p>
                    </div>
                    <div>
                        <h3>Observer</h3>
                        <p>
                            Define one-to-many dependency between objects so that when one object changes state, all its
                            dependents are notified and updated automatically.
                        </p>
                    </div>
                    <div>
                        <h3>State</h3>
                        <p>
                            Allows an object to alter its behavior when its internal state changes.
                        </p>
                    </div>
                    <div>
                        <h3>Strategy</h3>
                        <p>
                            Enables selecting an algorithm at runtime through instructions as to which in a
                            family of algorithms to use.
                        </p>
                    </div>
                    <div>
                        <h3>Visitors</h3>
                        <p>

                        </p>
                    </div>
                </div>
                <br>
                <div>
                    <h2><a id="class_behavioral">Class Behavioral</a></h2>
                    <div>
                        <h3>Template Method</h3>
                        <p>
                            An algorithm as a skeleton of operations and leave the details to be implemented by the child
                            classes. The overall structure and sequence of the algorithm are preserved by the parent class.
                        </p>
                    </div>
                    <div>
                        <h3>Interpreter</h3>
                        <p>
                            Specifies how to evaluate sentences in a language.
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <br>
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