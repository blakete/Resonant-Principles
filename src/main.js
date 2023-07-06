import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueDisqus from 'vue-disqus'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueDisqus, { shortname: 'resonant-principles' })
  .mount('#app')
