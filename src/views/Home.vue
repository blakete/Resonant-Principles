<template>
  <div>
    <div class="main-page-content">
      <h1>Home ☀️</h1>
      <p>
        Welcome to our website, where we strive to provide a valuable resource for those seeking to deepen their
        understanding of the world around them. Our goal is to help individuals better understand the nature of the
        universe in order to promote prosperity for all.
      </p>
      <p>
        We offer a clear and intuitive way to access and explore a wide
        range of information, empowering users to make informed decisions and contribute to the betterment of society.
        Our website is an ongoing experiment, as we constantly seek to improve and expand upon the knowledge and
        resources we offer.
      </p>
    </div>
    <section class='comments' aria-labelledby="comment">
      <h2 id="comment">Comments</h2>
      <Disqus />
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
li {
  font-size: 22px;
  padding-bottom: 10px;
}

li li {
  padding-top: 10px;
  padding-bottom: 0px;
  font-size: 20px;
}

span {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>
