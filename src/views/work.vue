<template>
    <section class="work container">
        <h1>MY WORKS</h1>
        <div v-if=this.works class="">
            <work-list :works="works"></work-list>
        </div>
    </section>
</template>

<script>
import workList from '../components/work.list.cmp.vue'
export default {
    name: 'work',
    data() {
        return {
            works: this.$store.getters.works,
        }
    },
    components: {
        workList,
    },
    mounted() {
        document.body.style.backgroundImage = "url('../src/assets/images/pexels-pixabay-268533.jpg')"
    },

}
</script>
