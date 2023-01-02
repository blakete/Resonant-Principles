<template>
    <div class="main-page-container">
        <div class="main-page-content">
            <section>
                <h1 style="padding-bottom: 20px;">Not Found ⚠️</h1>
                <p>
                    We're sorry, but the page you were looking for could not be found.
                </p>
                <br>
                <p>
                    It's possible that the page has
                    been moved or removed, or that you entered the URL incorrectly. Please check the spelling of the URL
                    and try again, or go back to the homepage and start your journey anew.
                </p>
                <br>
                <p>
                    Thank you for visiting our website.😊
                </p>
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
  