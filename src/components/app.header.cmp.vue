<template>
    <section class="app-header container">
        <div class="header-logo">
            <mdicon name="Vuejs" />
        </div>
        <nav class="nav-bar" :class="bindNavClass">
            <ul v-for="page in pages" :key="page">
                <RouterLink :to="page.url">// {{ page.name }}</RouterLink>
            </ul>
        </nav>
            <DropDownMenu :pages="pages"></DropDownMenu>
    </section>
</template>

<script>
import DropDownMenu from './dropdown.cmp.vue'

export default {
    name: 'AppHeader',
    computed: {
        bindNavClass() {
            return this.$store.getters.currentNavClass
        }
    },
    data() {
        return {
            pages: [
                {
                    name: 'home',
                    url: '/'
                },
                {
                    name: 'skills',
                    url: '/skills'
                },
                {
                    name: 'work',
                    url: '/work'
                },
                {
                    name: 'contact',
                    url: '/contact'
                },
            ],
        }
    },
    watch: {
    },
    components: {
        DropDownMenu,
    },

}
</script>