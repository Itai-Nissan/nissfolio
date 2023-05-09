<script>
import AppHeader from './components/app.header.cmp.vue'

export default {
  components: {
    AppHeader,
  },
  created() {
    this.$store.dispatch('getWorks')
    this.$store.dispatch('getSkills')
  },
  methods: {

  },
}
</script>

<template>
  <v-app class="app">
    <section class="main-app container">
      <app-header />
      <RouterView />
    </section>
  </v-app>
</template>
