import './assets/main.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { i18n } from './i18n'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, { ripple: true })
app.use(i18n)

app.mount('#app')
