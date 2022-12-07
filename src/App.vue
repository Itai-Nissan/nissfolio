<script>
import AppHeader from './components/app.header.cmp.vue'

export default {
  components: {
    AppHeader,
    // appFooter,
    // userMsg,
  },
  created() {
  },
  methods: {
  },
}
</script>

<template>
  <div class="app">

    <section class="main-app container">
      <app-header />
      <RouterView/>
    </section>
  </div>
</template>
