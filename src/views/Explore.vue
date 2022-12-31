<template>
    <div>
      <div class="main-page-content">
        <h1>Explore <a href="https://en.wikipedia.org/wiki/The_Matrix" style="text-decoration: none;">🐇</a></h1>
        <ol>
          <li @click="this.$router.push('principles')">
            Principles
          </li>
          <li @click="this.$router.push('cognitive-structures')">
            <span>Cognitive Structures</span>
          </li>
          <li @click="this.$router.push('mindsets')">
            Mindsets
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
    name: 'ExplorePage',
    props: {
    },
    methods: {
    }
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
  