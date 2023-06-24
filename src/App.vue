<template>
  <div id="app">
    <div class="topnav">
      <a v-for="item in menuItems" :key="item.title" :to="item.path" @click="this.$router.push({ name: item.path })">
        {{ item.title }}
      </a>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    menuItems: [
      { title: "Blog", path: "BlogFeed", icon: "face" },
      { title: "Explore", path: "Explore", icon: "face" },
      { title: "About", path: "About", icon: "face" },
    ],
  }),
}
</script>

<style>
.main-page-container {
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 50px;
}

.main-page-content {
  min-height: 100vh;
}

ol {
  padding-left: 10px;
}

p {
  font-size: 20px;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 26px;
  padding-top: 20px;
  padding-bottom: 15px;
}

h3 {
  font-size: 22px;
}

li {
  list-style-position: inside;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #0363f3;
  color: white;
}
</style>
