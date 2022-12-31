import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueDisqus from 'vue-disqus'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueDisqus, { shortname: 'resonant-principles' })
  .mount('#app')
