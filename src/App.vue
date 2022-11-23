<script>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/app.header.vue'

export default {
  components: {
    AppHeader,
    // appFooter,
    // userMsg,
  },
  created() {
        this.onGetWorks()
    },
    methods: {
        onGetWorks() {
            this.$store.dispatch('getWorks')
            console.log(this.works)
        }
    },

}
</script>

<template>
  <div class="app">

    <section class="main-app container">
      <app-header />
      <RouterView class="router-view" />
    </section>
  </div>
</template>
