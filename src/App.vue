<template>
  <v-app app>
    <v-toolbar>
      <v-toolbar-items>
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    menuItems: [
      { title: "Home", path: "/", icon: "home" },
      { title: "Explore", path: "/explore", icon: "face" },
      { title: "Blog", path: "/blog", icon: "face" },
      { title: "About", path: "/about", icon: "face" },
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

p {
  font-size: 20px;
}

h1 {
  font-size: 32px;
  padding-bottom: 20px;
}

h2 {
  font-size: 26px;
  padding-top: 20px;
  padding-bottom: 20px;
}

h3 {
  font-size: 22px;
}

li {
    list-style-position: inside;
}
</style>
