<template>
    <section class="drop-down ">
            <v-app-bar-nav-icon @click="drawer = !drawer">
                <mdicon name="menu" />
            </v-app-bar-nav-icon>
            <v-navigation-drawer v-model="drawer" absolute bottom temporary>
                <v-list nav dense>
                    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                        <nav v-if="pages">
                            <ul v-for="page in pages" :key="page">
                                <RouterLink :to="page.url">// {{ page.name }}</RouterLink>
                            </ul>
                        </nav>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </section>
</template>

<script>

export default {
    name: 'DropDownMenu',
    props: {
        pages: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            drawer: false,
            group: null,
        }
    },
    computed: {
    },
    watch: {
        group() {
            this.drawer = false
        },
    },

}
</script>