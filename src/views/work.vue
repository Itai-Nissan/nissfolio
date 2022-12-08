<template>
    <div class="bg-image">
        <img src="../assets/images/pexels-pixabay-35796.jpg" alt="">
    </div>
    <section class="work container">
        <h1>MY WORKS</h1>
        <div v-if=works class="">
            <work-list :works="works"></work-list>
        </div>
    </section>
</template>

<script>
import workList from '../components/work.list.cmp.vue'
export default {
    name: 'NissfolioWorks',
    components: {
        workList,
    },
    data() {
        return {
            works: null,
            navClass: 'work-nav',
        }
    },
    created() {
        this.onGetWorks()
        this.onSetNavClass(this.navClass)
    },
    mounted() {
    },
    methods: {
        onGetWorks() {
            this.$store.dispatch('getWorks')
            this.works = this.$store.getters.works
        },
        onSetNavClass(navClass) {
            this.$store.dispatch({ type: 'setNavClass', navClass })
        }
    }
}
</script>
