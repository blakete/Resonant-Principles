<template>
  <div id="app">
    <div class="topnav no-select">
      <a v-for="item in menuItems" :key="item.title" :to="item.path" @click="this.$router.push({ name: item.path })">
        {{ item.title }}
      </a>
    </div>
    <div>
      <v-breadcrumbs :items="visibleBreadcrumbItems">
        <template v-slot:prepend>
          <v-icon size="small" icon="mdi-vuetify"></v-icon>
        </template>
      </v-breadcrumbs>
    </div>

    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  data: () => ({
    menuItems: [
      { title: "Blog", path: "BlogFeed", icon: "face" },
      { title: "Explore", path: "Explore", icon: "face" },
      { title: "About", path: "About", icon: "face" },
    ]
  }),
  setup() {
    const route = useRoute()
    const maxVisibleItems = 3

    const breadcrumbItems = computed(() => {
      const paths = route.path.split('/').filter(path => path)

      return paths.map((path, index) => {
        return {
          title: path,
          disabled: index === paths.length - 1,
          href: '/' + paths.slice(0, index + 1).join('/')
        }
      })
    })

    const visibleBreadcrumbItems = computed(() => {
      const items = breadcrumbItems.value

      if (items.length > maxVisibleItems) {
        return [
          ...items.slice(0, 1),
          {
            title: '...',
            disabled: true
          },
          ...items.slice(items.length - maxVisibleItems + 1)
        ]
      } else {
        return items
      }
    })

    return { visibleBreadcrumbItems }
  }
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

ol ol {
  padding-left: 30px;
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

.no-select {
    user-select: none;
    cursor: pointer;
}
</style>
