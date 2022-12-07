import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import './styles/styles.scss'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import dropDownMenu from './components/dropdown.cmp.vue';

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'



const app = createApp(App)
// app.component('dropdown.cmp.vue', dropDownMenu)
const vuetify = createVuetify({
  components,
  directives,
})
app.use(vuetify)

app.use(mdiVue, {
  icons: mdijs
})
app.use(router)
app.use(store)
app.mount('#app')
