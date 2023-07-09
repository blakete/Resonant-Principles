<template>
  <div id="app">
    <div class="topnav no-select">
      <div>
        <router-link
          v-for="item in menuItems"
          :key="item.title"
          :to="{ name: item.path }"
          active-class="active"
          :class="{ 'active': isActive(item) }"
          style="font-size: 18px;"
        >
          {{ item.title }}
        </router-link>
      </div>
      <div class="dark-mode-btn-container">
        <v-btn
          class="my-button"
          size="large"
          density="compact"
          :icon="isDarkMode ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          color="gray"
          @click="toggleTheme"
        >
        </v-btn>
      </div>
    </div>
    <div>
      <v-breadcrumbs class="breadcrumb-bar" :items="visibleBreadcrumbItems">
      </v-breadcrumbs>
    </div>

    <router-view />
  </div>
</template>

<script>
import { computed, ref, onMounted, watch, provide } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  data: () => ({
    menuItems: [
      { title: "About", path: "About", icon: "face" },
      { title: "Explore", path: "Explore", icon: "face" },
      { title: "Blog", path: "BlogFeed", icon: "face" },
    ],
  }),
  setup() {
    // DARK MODE STUFF
    const isDarkMode = ref(localStorage.getItem("isDarkMode") === "true");

    const updateCSSVariables = (newVal) => {
      document.documentElement.style.setProperty(
        "--main-bg-color",
        newVal ? "black" : "white"
      );
      document.documentElement.style.setProperty(
        "--main-text-color",
        newVal ? "white" : "black"
      );
      document.documentElement.style.setProperty(
        "--main-span-color",
        newVal ? "#2ab8ff" : "blue"
      );
      document.documentElement.style.setProperty(
        "--main-card-color",
        newVal ? "#333" : "white"
      );
    };

    onMounted(() => {
      updateCSSVariables(isDarkMode.value);
    });

    watch(isDarkMode, (newVal) => {
      localStorage.setItem("isDarkMode", newVal);
      updateCSSVariables(newVal);
    });

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    provide("isDarkMode", isDarkMode); // providing isDarkMode to child components

    // BREADCRUMB NAV STUFF
    const route = useRoute();
    const maxVisibleItems = 3;

    const breadcrumbItems = computed(() => {
      const paths = route.path.split("/").filter((path) => path);

      return paths.map((path, index) => {
        return {
          title: path,
          disabled: index === paths.length - 1,
          href: "/" + paths.slice(0, index + 1).join("/"),
        };
      });
    });

    const visibleBreadcrumbItems = computed(() => {
      const items = breadcrumbItems.value;

      if (items.length > maxVisibleItems) {
        return [
          ...items.slice(0, 1),
          {
            title: "...",
            disabled: true,
          },
          ...items.slice(items.length - maxVisibleItems + 1),
        ];
      } else {
        return items;
      }
    });

    return {
      visibleBreadcrumbItems,
      isDarkMode,
      toggleTheme,
    };
  },
  methods: {
    isActive(menuItem) {
      var tmp = "/" + menuItem.title.toLowerCase();
      return this.$route.path.startsWith(tmp);
    },
  },
};
</script>

<style>
#app {
  color: var(--main-text-color);
  background-color: var(--main-bg-color);
}

.main-page-container {
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 50px;
  color: var(--main-text-color);
  background-color: var(--main-bg-color);
}

span {
  cursor: pointer;
  color: var(--main-span-color) !important;
  text-decoration: underline;
}

ol li a {
  cursor: pointer;
  color: var(--main-span-color) !important;
  text-decoration: underline;
}

a.active {
  background-color: #dddddd !important;
  color: black !important;
}

.main-page-content {
  min-height: 100vh;
}

.breadcrumb-bar {
  height: 54px;
  background-color: #333;
  color: white;
}

.v-breadcrumbs-item {
  font-size: 18px !important;
}

ol {
  padding-left: 10px;
}

ol ol {
  padding-left: 30px;
}

p {
  font-size: 22px;
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
  display: flex;
  justify-content: space-between;
  height: 53.5px;
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

.dark-mode-btn-container {
  height: 100%;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.topnav a.active {
  background-color: #0363f3;
  color: white;
}

.no-select {
  user-select: none;
  cursor: pointer;
}

.my-button .v-btn__content {
  text-decoration: none !important;
  color: inherit !important;
}
</style>
