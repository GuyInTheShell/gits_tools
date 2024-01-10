import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Pipeline from './components/pipeline/Pipeline.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const About = { template: '<div>About</div>' }
const routes = [
  { name: 'root', path: '/', component: Pipeline },
  { name: 'about', path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const vuetify = createVuetify({})

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
