<template>
  <v-app>
    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar"> </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
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
