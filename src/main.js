import './assets/index.css'
import 'primeicons/primeicons.css'
// import 'vue3-carousel/dist/carousel.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,

})

import router from './router'

import { createApp } from 'vue'
import App from './App.vue'


createApp(App).use(router).use(vuetify).mount('#app')
