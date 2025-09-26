import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Importazione componenti
import WelcomePage from './components/WelcomePage.vue'
import ConfiguratorStep from './components/ConfiguratorStep.vue'
import ThankYouPage from './components/ThankYouPage.vue'

// Definizione delle rotte
const routes = [
  { path: '/', redirect: '/welcome' },
  { path: '/welcome', component: WelcomePage, name: 'welcome' },
  { path: '/step/:part', component: ConfiguratorStep, name: 'configurator', props: true },
  { path: '/thank-you', component: ThankYouPage, name: 'thank-you' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')