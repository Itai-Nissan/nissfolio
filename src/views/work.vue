<template>
        <section class="work">
            <h1>MY WORKS</h1>
            <section class="works-wrapper container">
                <div v-if=works class="works">
                    <work-list :works="works"></work-list>
                </div>
                <div class="works-img">
                    <v-parallax src="https://res.cloudinary.com/counditai/image/upload/v1683703290/nissfolio/pexels-pixabay-268533_fsmoan.jpg"></v-parallax>
                </div>
            </section>
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
        this.works = this.$store.getters.works
        this.onSetNavClass(this.navClass)
    },
    mounted() {
    },
    methods: {
        onSetNavClass(navClass) {
            this.$store.dispatch({ type: 'setNavClass', navClass })
        }
    }
}
</script>
