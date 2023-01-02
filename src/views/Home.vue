<template>
  <div class="main-page-container">
    <div class="main-page-content">
      <h1 style="padding-bottom: 0px;">Home ☀️</h1>
      <section id="tldr-section">
        <h2>TLDR</h2>
        <p>
          Our website aims to help people understand the universe and promote prosperity. We offer a range of
          information in a clear and intuitive way, and constantly seek to improve and expand upon our knowledge and
          resources.
        </p>
      </section>
      <section id="overview-section">
        <h2>Overview</h2>
        <p>
          Welcome, we are striving to provide a valuable resource for those seeking to deepen their
          understanding of the world around them. Our goal is to help individuals better understand the nature of the
          universe in order to promote prosperity for all.
        </p>
        <p>
          We offer a clear and intuitive way to access and explore a wide
          range of information, empowering users to make informed decisions and contribute to the betterment of society.
        </p>
        <p>
          This is an ongoing experiment, as we constantly seek to improve and expand upon the knowledge and
          resources we offer.
        </p>
      </section>
    </div>
    <section id="comments-sectipn" class='comments' aria-labelledby="comment">
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
