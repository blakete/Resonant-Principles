<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <section>
                <h1 style="padding-bottom: 20px;">About 🔍</h1>
                <p>
                    This website contains sets of curated <u>principles</u>, <u>cognitive structures</u>, and
                    <u>mindsets</u>
                    that
                    resonate with <a href="https://www.linkedin.com/in/blakete/">me</a> and
                    have tremendously benefited my work and life. I hope you can find benefit from using them too.
                    😊
                </p>
                <blockquote class="otro-blockquote">
                    I believe in the discipline of mastering the best of what other people have figured out.
                    <span>Charlie Munger</span>
                </blockquote>
                <blockquote class="otro-blockquote">
                    If I have seen further [than others], it is by standing on the shoulders of giants.
                    <span>Isaac Newton</span>
                </blockquote>
                <h2>Disclaimer</h2>
                <p>
                    The content of this web page is curated from various sources and is not original content. All
                    credit goes to
                    the original authors and sources. This page is intended for informational purposes only and is
                    not intended
                    to take credit for the original content.
                </p>
                <h2>References</h2>
                <ol>
                    <li><a href="https://a.co/d/9CH7PWH">The Great Mental Models Volume 1: General Thinking
                            Concepts</a></li>
                </ol>
            </section>
        </div>
        <section class='comments' aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus />
        </section>
    </div>
</template>
  
<script>
export default {
    name: 'AboutPage',
    props: {
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    font-size: 20px;
}


@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);

.otro-blockquote {
    max-width: 600px;
    font-size: 1.4em;
    width: 60%;
    margin: 40px 0px;
    font-family: Open Sans;
    font-style: italic;
    color: #555555;
    padding: 1.2em 30px 1.2em 75px;
    border-left: 8px solid #78C0A8;
    line-height: 1.6;
    position: relative;
    background: #EDEDED;
}

.otro-blockquote::before {
    font-family: Arial;
    content: "\201C";
    color: #78C0A8;
    font-size: 4em;
    position: absolute;
    left: 10px;
    top: -10px;
}

.otro-blockquote::after {
    content: '';
}

.otro-blockquote span {
    display: block;
    color: #333333;
    font-style: normal;
    font-weight: bold;
    margin-top: 1em;
}
</style>
  