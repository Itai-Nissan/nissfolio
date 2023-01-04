import { createApp } from 'vue'

import VWave from 'v-wave'

import App from './App.vue'
import router from './router'
import store from './store'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import './styles/styles.scss'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})

app.use(vuetify)
app.use(VWave)
app.use(mdiVue, {
  icons: mdijs
})

app.use(router)
app.use(store)
app.mount('#app')
