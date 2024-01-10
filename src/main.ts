import './assets/main.css'

import { createApp, ref, computed } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia, defineStore } from 'pinia'

import App from './App.vue'
import Pipeline from './components/pipeline/Pipeline.vue'
import About from './components/About.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const routes = [
  { name: 'root', path: '/', component: Pipeline },
  { name: 'about', path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const vuetify = createVuetify({})

const pinia = createPinia()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app')


export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
